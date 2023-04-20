import { useAppContext } from "../../hooks/useAppContext";
import styles from "./List.module.css";
import { ItemList } from "./components/ItemList";

/*
map funciona como um foreach em um dicionario C#
{tasks.map((nome do item desejado) => <ItemList key={task.id}  name={nome do item desejado.propriedade} />)} 
*/
export function List() {
  const { tasks } = useAppContext();

  return (
    <ul className={styles.container}>
      {tasks.length == 0 && "Lista Vazia"}
      {tasks.map((task) => <ItemList key={task.id} name={task.name} id={task.id}/>)}
    </ul>
  );
}
