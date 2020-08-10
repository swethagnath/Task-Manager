import React, { useState, createContext } from 'react'

export const TaskListsContext =  createContext()

const TaskListsContextProvider = props => {

	const [tasks, setTasks] = useState([
		{ task: 'read the book', id:1 },
		{ task: 'wash the car', id:2 },
		{ task: 'write some code', id:3 }
	])

	return (
		<TaskListsContext.Provider value={ { tasks } }>
			{ props.children }
		</TaskListsContext.Provider>
	)

}

export default TaskListsContextProvider