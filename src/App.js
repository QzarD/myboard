import React from 'react';
import './App.css';
import List from "./Components/List/List";
import {connect} from "react-redux";
import {addList, deleteList, renameList} from "./Redux/myboard-reducer";
import Tasks from "./Components/Tasks/Tasks";

function App({lists, colors, addList, deleteList, tasks, renameList}) {
    const [activeList, setActiveList]=React.useState('1');
    return (
        <div className="App">
            <div className="innerApp">
                <div className="menu">
                    <List lists={[
                        {id:'0',name: 'All tasks', color: ''}
                    ]}
                    />
                    <List isRemovable activeList={activeList} setActiveList={setActiveList} tasks={tasks} deleteList={deleteList}
                          lists={lists.map(list => {
                              list.color = colors.find(color => color.id === list.colorId).name;
                              return list;
                          })}/>
                    <List addListBtn
                          addList={addList} colors={colors}
                          lists={[
                              {name: 'Add list', icon: '+ '}
                          ]}/>
                </div>
                <div className="tasks">
                    {lists && activeList>=0 &&
                    <Tasks renameList={renameList}
                           list={lists[activeList]}
                           tasks={tasks.filter(task=> task.listId===lists[activeList].id)}/>}
                </div>
            </div>

        </div>
    );
}


const mapStateToProps = state => ({
    lists: state.myboard.lists,
    colors: state.myboard.colors,
    tasks: state.myboard.tasks,
});

export default connect(mapStateToProps, {addList, deleteList, renameList})(App);
