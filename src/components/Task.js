import React from 'react'

const Task = () =>  {
	return(
		<li className="list-item">
			<span>
				Task title
			</span>
			<div>
				<button className="btn-delete task-btn">
					<i className="fa fa-trash"></i>
				</button>
				<button className="btn-edit task-btn">
					<i className="fa fa-pencil"></i>
				</button>
			</div>
		</li>
	)
	
}

export default Task