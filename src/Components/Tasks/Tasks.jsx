import React from 'react';
import './Tasks.css';

const Tasks = ({list, tasks, renameList, colorName, addTask}) => {
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
    return (
        <>
            <h2 onClick={changeNameList} className={`nameTask colorName-${colorName}`}>{list.name}</h2>
            <span className="help">You can change it ;) click</span>
            <div className="innerTasks">
                {tasks.map(task => (
                    <div key={task.id} className="task">
                        <div className="checkbox">
                            <input type="checkbox" id={`chek-${task.id}`}/>
                            <label htmlFor={`chek-${task.id}`}>
                                <div className="checkboxIn">V</div>
                            </label>
                        </div>
                        <div className="taskName" key={task.id}>{task.text}</div>
                    </div>
                ))}
                {!tasks.length &&
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