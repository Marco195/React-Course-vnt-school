import { useAppContext } from "../../hooks/useAppContext";
import styles from "./CreateTask.module.css";
import { useContext, useState } from "react";
import api from "../../services/api"

export function CreateTask() {
  const [taskName, setTaskName] = useState("");

  const { setTasks } = useAppContext();

  async function handleSubmit(event) {
    event.preventDefault();

    const { data: newTask } = await api.post("/tasks", {
      name: taskName
    });

    // "..." os tres pontos é um spread operator, ele pega o array e desmembra em varios objetos individuais
    setTasks((taskPreview) => [...taskPreview, newTask]);

    //esvazia o campo de texto após digitar o nome da task
    setTaskName("");
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={taskName}
          onChange={(event) => setTaskName(event.target.value)}
        />
        <button type="submit">+</button>
      </form>
    </div>
  );
}
