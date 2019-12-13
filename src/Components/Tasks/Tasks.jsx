import React from 'react';
import './Tasks.css';

const Tasks = ({
                   list, tasks, renameList, colorName, addTask, checkTask,
                   deleteTask, withoutEmpty, renameTask
               }) => {
    const [showNewTaskInput, setShowNewTaskInput] = React.useState(false);
    const [textNewTaskInput, setTextNewTaskInput] = React.useState('');
    const changeNameList = () => {
        const newName = window.prompt('Name of list:', list.name);
        if (newName) {
            renameList(list.id, newName)
        }
    };
    const enterNewTask = () => {
        if (textNewTaskInput) {
            addTask(list.id, textNewTaskInput)
        }
    };
    const deleteTaskBtn = (taskId) => {
        if (window.confirm('Delete task?')) {
            deleteTask(taskId)
        }
    };
    const renameTaskClick = (id, text) => {
        const taskText = window.prompt('Rename task?', text);
        if (taskText) {
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
                                   checked={task.complete} onChange={() => checkTask(task.id)}
                                   id={`chek-${task.id}`}/>
                            <label htmlFor={`chek-${task.id}`}>
                                <div className="checkboxIn">
                                    <svg width="17" height="18" viewBox="0 0 11 8"
                                         fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001"
                                              stroke="white" stroke-width="1.5" stroke-linecap="round"
                                              stroke-linejoin="round"/>
                                    </svg>
                                </div>
                            </label>
                        </div>
                        <div className="taskName"

                             onClick={() => renameTaskClick(task.id, task.text)} key={task.id}>{task.text}</div>
                        <div className="deleteTaskBtn" onClick={() => deleteTaskBtn(task.id)}>X</div>
                    </div>
                ))}
                {!withoutEmpty && !tasks.length &&
                <h2>
                    ***Tasks is empty***
                </h2>
                }
                <div className="newTaskBtn">
                    {!showNewTaskInput
                        ? <div onClick={() => {
                            setShowNewTaskInput(true);
                            setTextNewTaskInput('')
                        }}>
                            <svg width="11" height="11" viewBox="0 0 16 16"
                                 fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M8 1V15" stroke="#b9b9b9" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round"/>
                                          <path d="M1 8H15" stroke="#b9b9b9" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round"/>
                                      </svg>
                            <span> New task</span>
                    </div>
                        : <div className="newTaskInput">
                            <input value={textNewTaskInput}
                                   onChange={e => setTextNewTaskInput(e.target.value)}
                                   onBlur={() => setShowNewTaskInput(false)}
                                   onKeyPress={e => {
                                       if (e.key === "Enter") {
                                           enterNewTask();
                                           setShowNewTaskInput(false)
                                       }
                                   }} autoFocus={true} type="text"
                                   placeholder="Enter text a new task"/>
                            <button onMouseDown={enterNewTask}>Enter</button>
                        </div>
                    }
                </div>
            </div>
        </>
    )
};
export default Tasks;