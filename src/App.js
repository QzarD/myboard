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
                            {active: history.location.pathname === '/', name: 'All tasks', icon: (
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.96 8.10001H7.74001C7.24321 8.10001 7.20001 8.50231 7.20001 9.00001C7.20001 9.49771 7.24321 9.90001 7.74001 9.90001H12.96C13.4568 9.90001 13.5 9.49771 13.5 9.00001C13.5 8.50231 13.4568 8.10001 12.96 8.10001V8.10001ZM14.76 12.6H7.74001C7.24321 12.6 7.20001 13.0023 7.20001 13.5C7.20001 13.9977 7.24321 14.4 7.74001 14.4H14.76C15.2568 14.4 15.3 13.9977 15.3 13.5C15.3 13.0023 15.2568 12.6 14.76 12.6ZM7.74001 5.40001H14.76C15.2568 5.40001 15.3 4.99771 15.3 4.50001C15.3 4.00231 15.2568 3.60001 14.76 3.60001H7.74001C7.24321 3.60001 7.20001 4.00231 7.20001 4.50001C7.20001 4.99771 7.24321 5.40001 7.74001 5.40001ZM4.86001 8.10001H3.24001C2.74321 8.10001 2.70001 8.50231 2.70001 9.00001C2.70001 9.49771 2.74321 9.90001 3.24001 9.90001H4.86001C5.35681 9.90001 5.40001 9.49771 5.40001 9.00001C5.40001 8.50231 5.35681 8.10001 4.86001 8.10001ZM4.86001 12.6H3.24001C2.74321 12.6 2.70001 13.0023 2.70001 13.5C2.70001 13.9977 2.74321 14.4 3.24001 14.4H4.86001C5.35681 14.4 5.40001 13.9977 5.40001 13.5C5.40001 13.0023 5.35681 12.6 4.86001 12.6ZM4.86001 3.60001H3.24001C2.74321 3.60001 2.70001 4.00231 2.70001 4.50001C2.70001 4.99771 2.74321 5.40001 3.24001 5.40001H4.86001C5.35681 5.40001 5.40001 4.99771 5.40001 4.50001C5.40001 4.00231 5.35681 3.60001 4.86001 3.60001Z" fill="black"/>
                                    </svg>
                                )}
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
                              {name: 'Add list', icon: (
                                      <svg width="11" height="11" viewBox="0 0 16 16"
                                           fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M8 1V15" stroke="#b9b9b9" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round"/>
                                          <path d="M1 8H15" stroke="#b9b9b9" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round"/>
                                      </svg>
                                  )}
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
