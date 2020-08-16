import React, { useState, useContext } from 'react'
import { TaskListsContext } from '../context/TaskListsContexts'

const Task = ({ task }) =>  {

	const { removeTask, findItem } = useContext(TaskListsContext)

 	return(

		<li className="list-item" key={ task.id }>
			<span>
				{ task.title }
			</span>
			<div>
				<button onClick={ () => removeTask(task.id) } className="btn-delete task-btn">
					<i className="fa fa-trash"></i>
				</button>
				<button onClick={ () => findItem(task.id) } className="btn-edit task-btn">
					<i className="fa fa-pen"></i>
				</button>
			</div>
		</li>

	)

}

export default Task
