import React, {useState, useEffect} from "react";
import './List.css';
import classnames from "classnames";


const List=({lists, isRemovable, addListBtn, colors, addList,
                deleteList, tasks, activeList, setActiveList, history})=>{
    const [windowAddTask, setWindowAddTask]=useState(false);
    const [selectColor, setSelectColor]=useState('1');
    const [nameNewList, setNameNewList]=useState('');
    const onClickBtn=(list)=>{
        if (isRemovable){
            history.push(`/list/${list.id}`)
        }
        if (!isRemovable && !addListBtn){
            history.push(`/`)
        }
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
            deleteList(id);
        }
    };
    useEffect(()=>{
        const listId=history.location.pathname.split('list/')[1];
        if (lists && isRemovable){
            const list=lists.find(list=>list.id===listId);
            setActiveList(list)
        }
    }, [lists, history.location.pathname, isRemovable, setActiveList]);

    return(
        <>
            <ul className="lists">
                {lists.map((list, index)=>(
                    <li
                        key={index}
                        className={classnames(
                            {active: activeList ? activeList.id===list.id : list.active})}>
                        <div onClick={()=>onClickBtn(list)} className="listName">
                            {list.icon ? list.icon :
                                <i className={`color-${list.color}`}/>
                            }
                            <span>{list.name}</span>
                            {isRemovable &&
                            tasks.filter(task=> task.listId===list.id).length>0 &&
                            ` (${tasks.filter(task=> task.listId===list.id).length})`}
                        </div>
                        {isRemovable &&
                            <div onClick={()=>listDeleteBtn(list.id)}
                                 className="listDeleteBtn">X</div>
                        }
                    </li>
                ))}
            </ul>
            {addListBtn && windowAddTask &&
                <div className="windowAddTask">
                    <div onClick={onClickBtn} className="closeBtn">X</div>
                    <input onChange={e=>setNameNewList(e.target.value)}
                           value={nameNewList}
                           autoFocus={true}
                           onKeyPress={event => {
                               if (event.key === "Enter"){
                                   addNewList()
                               }}}
                           type="text" placeholder="Name of a new list"/>
                    <div className="colors" >
                        {colors.map(color=>(
                            <i onClick={()=>setSelectColor(color.id)}
                               key={color.id}
                               className={`color-${color.name} 
                               ${selectColor===color.id ? "active" : ""}`}/>
                        ))}
                    </div>
                    <button onClick={addNewList}>Add</button>
                </div>
            }
        </>
    )
};
export default List;