import React from 'react';
import './Tasks.css';

const Tasks = ({list, tasks, renameList, colorName, addTask, checkTask,
                   deleteTask, withoutEmpty, renameTask}) => {
    const [showNewTaskInput, setShowNewTaskInput] = React.useState(false);
    const [textNewTaskInput, setTextNewTaskInput] = React.useState('');
    const changeNameList = () => {
        const newName = window.prompt('Name of list:', list.name);
        if (newName) {
            renameList(list.id, newName)
        }
    };
    const enterNewTask=()=>{
        if (textNewTaskInput){
            addTask(list.id,textNewTaskInput)
        }
    };
    const deleteTaskBtn=(taskId)=>{
        if (window.confirm('Delete task?')){
            deleteTask(taskId)
        }
    };
    const renameTaskClick=(id, text)=>{
        const taskText=window.prompt('Rename task?', text);
        if (taskText){
            renameTask(id, taskText)
        }
    };

    return (
        <>
            <h2 onClick={changeNameList}
                className={`nameTask colorName-${colorName}`}>{list.name}</h2>
            <span className="help">You can change it ;) click</span>
            <div className="innerTasks">
                {tasks.map(task => (
                    <div key={task.id} className="task">
                        <div className="checkbox">
                            <input className="checkboxInput"
                                type="checkbox"
                                   checked={task.complete} onChange={()=>checkTask(task.id)}
                                   id={`chek-${task.id}`}/>
                            <label htmlFor={`chek-${task.id}`}>
                                <div className="checkboxIn">V</div>
                            </label>
                        </div>
                        <div className="taskName"

                             onClick={()=>renameTaskClick(task.id, task.text)} key={task.id}>{task.text}</div>
                        <div className="deleteTaskBtn" onClick={()=>deleteTaskBtn(task.id)}>X</div>
                    </div>
                ))}
                {!withoutEmpty && !tasks.length &&
                    <h2>
                    ***Tasks is empty***
                    </h2>
                }
                <div className="newTaskBtn">
                    {!showNewTaskInput
                        ? <span onClick={() => {setShowNewTaskInput(true); setTextNewTaskInput('')}}>+ New task</span>
                        : <div className="newTaskInput">
                            <input value={textNewTaskInput} onChange={e=>setTextNewTaskInput(e.target.value)} onBlur={()=>setShowNewTaskInput(false)} autoFocus={true} type="text" placeholder="Enter text a new task"/>
                            <button onMouseDown={enterNewTask}>Enter</button>
                        </div>
                    }
                </div>
            </div>
        </>
    )
};
export default Tasks;