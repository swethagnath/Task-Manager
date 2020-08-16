import React, { createContext, useState, useEffect } from 'react'
import {v4 as uuid} from 'uuid'

export const TaskListsContext = createContext();

const TaskListsContextProvider = props => {

	const initialState = JSON.parse(localStorage.getItem("items")) || []

	const [ tasks, setTasks ] = useState(initialState)

	useEffect(() => {
		localStorage.setItem("items", JSON.stringify(tasks))
	}, [tasks])

	const [editItem, setEditItem] = useState(null) // item to be edited

	const addTask = title => {
		setTasks([...tasks, { id: uuid(), title }])
	}

	const removeTask = id => {
			setTasks(tasks.filter(task => id != task.id))
	}

	const clearTask = () => {
		setTasks([])
	}

	const findItem = id => {
		 setEditItem(tasks.find(item => item.id === id))
	}

	const updateItem = (title, id) => {
		//check for new item
		const editItem =  tasks.map(task => {
			return task.id === id ? {title, id} : task
		}) // array of updated tasks
		setTasks(editItem)
		setEditItem(null)
	}

	return(
		<div>
			<TaskListsContext.Provider value={ { tasks, addTask, removeTask, clearTask, updateItem, findItem, editItem  }  }>
				{ props.children }
			</TaskListsContext.Provider>
		</div>
	)

}

export default TaskListsContextProvider
