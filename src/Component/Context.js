
import React, { useState,createContext } from "react";
export const Context = createContext();
export const ContextProvider = ({ children }) => {
	const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [editingIndex, setEditingIndex] = useState(-1);
	return(
		<Context.Provider value={{ tasks,setTasks ,newTask, setNewTask,editingIndex, setEditingIndex }}>
			{children}
		</Context.Provider>
	);
};
