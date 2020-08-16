import React, { useContext } from 'react'
import Task from './Task'
import { TaskListsContext } from '../context/TaskListsContexts'

const TaskList = () => {

	const { tasks } = useContext(TaskListsContext)
	return(
		<div>
			{(tasks.length) ? (<ul>
				{
					tasks.map(task => {
						return <Task task={ task } />
					})
				}
			</ul>): (<div>no tasks</div>)}

		</div>
	)

}

export default TaskList
