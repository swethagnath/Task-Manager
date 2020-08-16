import React, { useContext, useState, useEffect } from 'react'
import { TaskListsContext } from '../context/TaskListsContexts'

const TaskForm = () => {

  const [ title, setTitle ] = useState('')
  const { addTask, clearTask, editItem, updateItem } = useContext(TaskListsContext);

  const handleSubmit = e => {

    e.preventDefault()
    if(editItem === null) {
      addTask(title)
      setTitle('')
    }else {
      updateItem(title, editItem.id)
    }

  }

  useEffect(() => {

      if(editItem != null){
        setTitle(editItem.title)
      }else{
        setTitle('')
      }

  }, [editItem])

  return(
    <form onSubmit={ handleSubmit }>
      <input value={ title } onChange={ e => setTitle(e.target.value) }/>
      <button type="submit">{ editItem ? 'Edit Task' :'Add Task'}</button>
      <button onClick ={ () =>  clearTask() }>clear</button>
    </form>
  )

}

export default TaskForm
