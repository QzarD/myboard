const ADD_LIST='myboard/ADD_LIST';
const DELETE_LIST='myboard/DELETE_LIST';
const RENAME_LIST='myboard/RENAME_LIST';
const ADD_TASK='myboard/ADD_TASK';
const CHECK_TASK='myboard/CHECK_TASK';
const DELETE_TASK='myboard/DELETE_TASK';

let listId=3;
let taskId=5;

let initialState = {
    lists:[
            {id:'1', name:'Home', colorId:'4'},
            {id:'2', name:'On work', colorId:'2'},
            {id:'3', name:'Shopping', colorId:'3'},
    ],
    tasks:[
        {id:'1', listId:'1', text:'Clean', complete:true},
        {id:'2', listId:'1', text:'Cooking', complete:false},
        {id:'3', listId:'2', text:'Coffee', complete:false},
        {id:'4', listId:'2', text:'Working', complete:false},
        {id:'5', listId:'1', text:'Go to the shop', complete:false},
    ],
    colors:[
        {id:'1', hex:'#ff000a', name:'red'},
        {id:'2', hex:'#000eff', name:'blue'},
        {id:'3', hex:'#00ff23', name:'green'},
        {id:'4', hex:'#fffd00', name:'yellow'},
    ]
};
export const myboardReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_LIST:
            listId+=1;
            return {...state, lists:
                    [...state.lists, {id:listId, name:action.name, colorId:action.colorId}]};
        case DELETE_LIST:
            return {...state, lists:
                    [...state.lists.filter(list=>list.id!==action.listId)]};
        case RENAME_LIST:
            return {...state, lists: state.lists.map(list=>{
                if (list.id===action.listId){
                    return {...list, name:action.newName}
                }
                return list;
                })};
        case ADD_TASK:
            taskId+=1;
            return {...state, tasks:
            [...state.tasks, {id:taskId, listId:action.listId, text: action.text, complete:false}]};
        case CHECK_TASK:
            return {...state, tasks: state.tasks.map(task=>{
                if (task.id===action.taskId){
                    return {...task, complete:!task.complete}
                }
                return task;
                })};
        case DELETE_TASK:
            return {...state, tasks:
            [...state.tasks.filter(task=>task.id!==action.taskId)]};
        default:
            return state
    }
};

export const addList=(name, colorId)=>({type:ADD_LIST, name, colorId});
export const deleteList=(listId)=>({type:DELETE_LIST, listId});
export const renameList=(listId, newName)=>({type:RENAME_LIST, listId, newName});
export const addTask=(listId, text)=>({type:ADD_TASK, listId, text});
export const checkTask=(taskId)=>({type:CHECK_TASK, taskId});
export const deleteTask=(taskId)=>({type:DELETE_TASK, taskId});