import React from 'react'
import TaskListsContextProvider from '../context/TaskListsContexts'
import TaskList from './TaskList'
import TaskForm from './TaskForm'
import '../css/main.css'
const App = () => {

	return(
		
		<TaskListsContextProvider>
			<div className="container">
				<div className="app-wrapper">
					<div className="main">
						<TaskForm />
						<TaskList />
					</div>
				</div>
			</div>
		</TaskListsContextProvider>
	)

}


export default App
