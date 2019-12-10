import React from 'react';
import './App.css';
import List from "./Components/List/List";
import {connect} from "react-redux";
import {addList, addTask, checkTask, deleteList, deleteTask, renameList} from "./Redux/myboard-reducer";
import Tasks from "./Components/Tasks/Tasks";
import {Route} from "react-router-dom";

function App({lists, colors, addList, deleteList,
                 tasks, renameList, addTask, checkTask, deleteTask}) {
    const [activeList, setActiveList]=React.useState(null);
    if (!lists[activeList] && activeList>0){
        setActiveList(activeList-1)
    }
    return (
        <div className="App">
            <div className="innerApp">
                <div className="menu">
                    <List
                        lists={[
                        {active:'active' ,name: 'All tasks', color: ''}
                    ]}
                    />
                    <List
                        isRemovable activeList={activeList}
                          setActiveList={setActiveList} tasks={tasks} deleteList={deleteList}
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
                    <Route exact path="/">
                        {lists && lists.map(list=>(
                            <Tasks deleteTask={deleteTask}
                                   checkTask={checkTask}
                                   addTask={addTask}
                                   renameList={renameList}
                                   colorName={colors.find(color=>color.id===list.colorId).name}
                                   list={list}
                                   withoutEmpty
                                   tasks={tasks.filter(task=> task.listId===list.id)}
                            />
                        ))

                        }
                    </Route>
                    <Route path="/list/:id">
                        {lists && lists[activeList] && activeList>=0 &&
                        <Tasks deleteTask={deleteTask}
                               checkTask={checkTask}
                               addTask={addTask}
                               renameList={renameList}
                               colorName={colors.find(color=>color.id===lists[activeList].colorId).name}
                               list={lists[activeList]}
                               tasks={tasks.filter(task=> task.listId===lists[activeList].id)}
                        />
                        }
                    </Route>
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

export default connect(mapStateToProps, {addList, deleteList, renameList, addTask, checkTask, deleteTask})(App);
