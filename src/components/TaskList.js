import React, { useContext } from 'react'
import { TaskListsContext } from '../context/TaskListsContexts'
import Task from './Task'

const TaskList = () => {
	
	const { tasks } = useContext(TaskListsContext)

	return(
		<div>
			<ul>
				{ tasks.map(task => {
					return <Task />
				}) }
			</ul>
		</div>
	)
 
}

export default TaskList
