import React from 'react';
import './App.css';
import List from "./Components/List/List";
import {connect} from "react-redux";
import {addList, addTask, checkTask, deleteList, deleteTask, renameList, renameTask} from "./Redux/myboard-reducer";
import Tasks from "./Components/Tasks/Tasks";
import {Route} from "react-router-dom";
import {useHistory} from "react-router-dom";

function App({
                 lists, colors, addList, deleteList, tasks, renameList,
                 addTask, checkTask, deleteTask, renameTask
             }) {
    const [activeList, setActiveList] = React.useState(null);
    let history=useHistory();

    return (
        <div className="App">
            <div className="innerApp">
                <div className="menu">
                    <List history={history}
                        lists={[
                            {active: history.location.pathname === '/', name: 'All tasks', color: ''}
                        ]}
                    />
                    <List history={history}
                        isRemovable activeList={activeList}
                        setActiveList={setActiveList} tasks={tasks} deleteList={deleteList}
                        lists={lists.map(list => {
                            list.color = colors.find(color => color.id === list.colorId).name;
                            return list;
                        })}/>
                    <List history={history}
                        addListBtn
                          addList={addList} colors={colors}
                          lists={[
                              {name: 'Add list', icon: '+ '}
                          ]}/>
                </div>
                <div className="tasks">
                    <Route exact path="/">
                        {lists && lists.map(list => (
                            <Tasks key={list.id}
                                   renameTask={renameTask}
                                   deleteTask={deleteTask}
                                   checkTask={checkTask}
                                   addTask={addTask}
                                   renameList={renameList}
                                   colorName={colors.find(color => color.id === list.colorId).name}
                                   list={list}
                                   withoutEmpty
                                   tasks={tasks.filter(task => task.listId === list.id)}
                            />
                        ))

                        }
                    </Route>
                    <Route path="/list/:id">
                        {lists && activeList &&
                        <Tasks renameTask={renameTask}
                               deleteTask={deleteTask}
                               checkTask={checkTask}
                               addTask={addTask}
                               renameList={renameList}
                               colorName={colors.find(
                                   color => color.id === activeList.colorId).name}
                               list={activeList}
                               tasks={tasks.filter(task => task.listId === activeList.id)}
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

export default connect(mapStateToProps,
    {addList, deleteList, renameList, addTask, checkTask, deleteTask, renameTask})(App);
