import React from 'react'
import EditTask from './EditTask'
import MyTasks from './MyTasks'
import TaskManager from './TaskManager'

export default function App(props) {
  return (
    <div>
        <TaskManager />
        <h1>
            <EditTask addTask={props.addTask}/>
        </h1>
        <h2>
            <MyTasks />
            
        </h2>
    </div>
  )
  
}
