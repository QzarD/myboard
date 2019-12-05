import React from 'react';
import './Tasks.css';

const Tasks = ({list, tasks, renameList}) => {
    const changeNameList=()=>{
        const newName=window.prompt('Name of list:', list.name);
        if (newName){
            renameList(list.id, newName)
        }
    };
    return (
        <>
            <h2 onClick={changeNameList} className="nameTask">{list.name}</h2>
            <span className="help">You can change it ;) click</span>
            <div className="innerTasks">
                {tasks.map(task=>(
                    <div className="task">
                        <div className="checkbox">
                            <input type="checkbox" id={`chek-${task.id}`}/>
                            <label htmlFor={`chek-${task.id}`}>
                                <div className="checkboxIn">V</div>
                            </label>
                        </div>
                        <div className="taskName" key={task.id}>{task.text}</div>
                    </div>
                ))}
            </div>
        </>
    )
};
export default Tasks;