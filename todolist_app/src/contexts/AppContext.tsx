import React, { createContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const AppContext = createContext({});

  //Children é o corpo do conteudo que a outra página irá exibir
export function AppContextProvider({ children }){
    const [tasks, setTasks] = useState([]);

      useEffect(() => {
        api.get("/tasks").then(response => setTasks(response.data))
      }, []);

    return (
        <AppContext.Provider value={{tasks, setTasks}}>
            {children}
        </AppContext.Provider>
    );
}