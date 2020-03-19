import React from 'react'

export default props => {
    const { task, editTask, deleteTask } = props
    const { id, name } = task
    return (
        <li >
            <div className="id">
                {id}
            </div>
            <div className="name">
                {name}
            </div>
            
            <div className="container">
            <button className="dl" onClick={() => deleteTask(id)}>Delete</button>
            <button className="ed" onClick={() => editTask(id)}>Edit</button>
            </div>
            
        </li>
    )
}