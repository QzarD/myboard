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
                    <li onClick={()=>onClickBtn(list)}
                        key={index}
                        className={classnames({listNameBtnContainer: addListBtn},
                            {active: activeList ? activeList.id===list.id : list.active})}>
                        <div  className={addListBtn ? 'listNameBtn' : 'listName'}>
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
                        <svg onClick={onClickBtn}
                             className="closeBtn"
                             width="22" height="22" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.63 10.315C20.63 10.2335 20.6291 10.1523 20.6272 10.0712C20.4972 4.49574 15.9212 0 10.315 0C4.62737 0 0 4.62737 0 10.315C0 15.9721 4.57776 20.5802 10.2234 20.6296C10.2539 20.6299 10.2844 20.63 10.315 20.63C10.3456 20.63 10.3761 20.6299 10.4066 20.6296C16.0522 20.5802 20.63 15.9721 20.63 10.315ZM14.2303 13.1855C14.1879 13.0885 14.1265 13.0009 14.0497 12.928L11.4373 10.315L14.0497 7.70203C14.1922 7.55202 14.2705 7.35226 14.2679 7.14536C14.2652 6.93846 14.1819 6.74077 14.0355 6.59446C13.8892 6.44814 13.6915 6.36477 13.4846 6.36212C13.2777 6.35947 13.078 6.43775 12.928 6.58028L10.315 9.19275L7.70203 6.58028C7.55202 6.43775 7.35226 6.35947 7.14536 6.36212C6.93846 6.36477 6.74077 6.44814 6.59446 6.59446C6.44814 6.74077 6.36477 6.93846 6.36212 7.14536C6.35947 7.35226 6.43775 7.55202 6.58028 7.70203L9.19275 10.315L6.58028 12.928C6.43775 13.078 6.35947 13.2777 6.36212 13.4846C6.36477 13.6915 6.44814 13.8892 6.59446 14.0355C6.74077 14.1819 6.93846 14.2652 7.14536 14.2679C7.35226 14.2705 7.55202 14.1922 7.70203 14.0497L10.315 11.4373L12.928 14.0497C13.0009 14.1265 13.0885 14.1879 13.1855 14.2303C13.2826 14.2727 13.3872 14.2952 13.4931 14.2966C13.599 14.298 13.7041 14.2781 13.8022 14.2382C13.9003 14.1983 13.9894 14.1392 14.0643 14.0643C14.1392 13.9894 14.1983 13.9003 14.2382 13.8022C14.2781 13.7041 14.298 13.599 14.2966 13.4931C14.2953 13.3872 14.2727 13.2826 14.2303 13.1855Z" fill="#5E5E5E"/>
                        </svg>
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