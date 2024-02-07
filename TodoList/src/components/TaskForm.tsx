import * as React from "react";

//css
import styles from "./TaskForm.module.css"

interface Props {
  btnText: string
}

const TaskForm = ({btnText}: Props) => {
  return <form className={styles.form}>
    <div className={styles.input_container}>
      <label htmlFor="title">título</label>
      <input type="text" name="title" placeholder="título da tarefa" />
    </div>
    <div className={styles.input_container}>
      <label htmlFor="dificulty">dificuldade</label>
      <input type="text" name="title" placeholder="Dificuldade da tarefa" />
    </div>
    <input type="submit" value={btnText}/>
  </form>;
};

export default TaskForm;
