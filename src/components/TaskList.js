import React, { useContext } from 'react'
import Task from './Task'
import { TaskListsContext } from '../context/TaskListsContexts'

const TaskList = () => {

	const { tasks } = useContext(TaskListsContext)
	return(
		<div>
			{(tasks.length) ? (<ul className="list">
				{
					tasks.map(task => {
						return <Task task={ task } />
					})
				}
			</ul>): (<div className="no-tasks">no tasks</div>)}

		</div>
	)

}

export default TaskList
