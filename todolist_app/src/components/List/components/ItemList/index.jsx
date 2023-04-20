import { useAppContext } from "../../../../hooks/useAppContext";
import api from "../../../../services/api";
import styles from "./ItemList.module.css"

export function ItemList({ name, id }){
    const { setTasks}  = useAppContext();

    async function handleRemove() {
        if(confirm(`Tem certeza que deseja remover a tarefa ${name}?`)){

            const response = await api.delete(`/tasks/${id}`);

            //remove a task pelo ID usando uma expressão lambda
            setTasks(tasks => tasks.filter(task => task.id !== id))
        }
    }

    return (
    <li className={styles.container}>
        <strong>{name}</strong>
        <button onClick={handleRemove}>-</button>
    </li>
    );
}