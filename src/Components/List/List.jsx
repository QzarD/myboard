import React, {useState} from "react";
import './List.css';


const List=({lists, isRemovable, addListBtn, colors, addList, deleteList, tasks, activeList, setActiveList})=>{
    const [windowAddTask, setWindowAddTask]=useState(false);
    const [selectColor, setSelectColor]=useState('1');
    const [nameNewList, setNameNewList]=useState('');
    const onClickBtn=(index)=>{
        setActiveList(index);
        setWindowAddTask(!windowAddTask);
        setNameNewList('');
        setSelectColor('1')
    };
    const addNewList=()=>{
        if(nameNewList.length>0){
            addList(nameNewList, selectColor)
        }
        setNameNewList('');
        setWindowAddTask(false)
    };
    const listDeleteBtn=(id)=>{
        if (window.confirm("Delete?")){
            deleteList(id)
        }
    };

    return(
        <>
            <ul className="lists">
                {lists.map((list, index)=>(
                    <li onClick={()=>onClickBtn(index)}
                        key={index} className={list.id && list.id===activeList && 'active'}>
                        <div className="listName">
                            {list.icon ? list.icon :
                                <i className={`color-${list.color}`}/>
                            }
                            {list.name}
                            {isRemovable &&
                            tasks.filter(task=> task.listId===list.id).length>0 &&
                            ` (${tasks.filter(task=> task.listId===list.id).length})`}
                        </div>
                        {isRemovable &&
                            <div onClick={()=>listDeleteBtn(list.id)} className="listDeleteBtn">X</div>
                        }
                    </li>
                ))}
            </ul>
            {addListBtn && windowAddTask &&
                <div className="windowAddTask">
                    <div onClick={onClickBtn} className="closeBtn">X</div>
                    <input onChange={e=>setNameNewList(e.target.value)}
                           value={nameNewList}
                           type="text" placeholder="Name of a new list"/>
                    <div className="colors">
                        {colors.map(color=>(
                            <i onClick={()=>setSelectColor(color.id)}
                               key={color.id}
                               className={`color-${color.name} ${selectColor===color.id ? "active" : ""}`}/>
                        ))}
                    </div>
                    <button onClick={addNewList}>Add</button>
                </div>
            }
        </>
    )
};
export default List;