import React from 'react'
import TaskListsContextProvider from '../context/TaskListsContexts'
import TaskList from './TaskList'

const App = () => {

	return(
		<TaskListsContextProvider>
			<div className="container">
				<div className="wrapper">
					<div className="main">
						<TaskList />
					</div>
				</div>
				
			</div>
		</TaskListsContextProvider>
	)

}


export default App