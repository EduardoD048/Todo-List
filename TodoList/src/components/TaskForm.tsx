import react, { useState, ChangeEvent, FormEvent, useEffect } from "react";

//css
import styles from "./TaskForm.module.css";

//interface
import { ITask } from "../interfaces/Task"; // 2 pontos para voltar 1 pasta

interface Props {
  btnText: string;
  taskList: ITask[];
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
}

const TaskForm = ({ btnText, taskList, setTaskList }: Props) => {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [dificulty, setDificulty] = useState<number>(0);

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    // func que realiza a ação de inclusão de tarefas no sistema
    e.preventDefault();

    const id = Math.floor(Math.random() * 1000);

    const newTask: ITask = { id, title, dificulty };

    setTaskList!([...taskList, newTask]);

    setTitle("");
    setDificulty(0);

    console.log(taskList);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // func vai manuzear as alterações do input
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else {
      setDificulty(parseInt(e.target.value));
    }
  };

  return (
    <form onSubmit={addTaskHandler} className={styles.form}>
      <div className={styles.input_container}>
        <label htmlFor="title">título</label>
        <input
          type="text"
          name="title"
          placeholder="título da tarefa"
          onChange={handleChange}
          value={title}
        />
      </div>
      <div className={styles.input_container}>
        <label htmlFor="dificulty">dificuldade</label>
        <input
          type="text"
          name="dificulty"
          placeholder="Dificuldade da tarefa"
          onChange={handleChange}
          value={dificulty}
        />
      </div>
      <input type="submit" value={btnText} />
    </form>
  );
};

export default TaskForm;
