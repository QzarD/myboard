(this.webpackJsonpmyboard=this.webpackJsonpmyboard||[]).push([[0],{28:function(e,t,a){e.exports=a(42)},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},40:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(13),i=a.n(r),s=(a(33),a(8)),o=(a(34),a(35),a(23)),l=a.n(o),d=function(e){var t=e.lists,a=e.isRemovable,r=e.addListBtn,i=e.colors,o=e.addList,d=e.deleteList,m=e.tasks,u=e.activeList,f=e.setActiveList,k=e.history,p=Object(n.useState)(!1),E=Object(s.a)(p,2),b=E[0],h=E[1],y=Object(n.useState)("1"),v=Object(s.a)(y,2),T=v[0],O=v[1],I=Object(n.useState)(""),N=Object(s.a)(I,2),w=N[0],j=N[1],g=function(e){a&&k.push("/list/".concat(e.id)),a||r||k.push("/"),h(!b),j(""),O("1")},x=function(){w.length>0&&o(w,T),j(""),h(!1)};return Object(n.useEffect)((function(){var e=k.location.pathname.split("list/")[1];if(t&&a){var n=t.find((function(t){return t.id===e}));f(n)}}),[t,k.location.pathname,a,f]),c.a.createElement(c.a.Fragment,null,c.a.createElement("ul",{className:"lists"},t.map((function(e,t){return c.a.createElement("li",{key:t,className:l()({active:u?u.id===e.id:e.active})},c.a.createElement("div",{onClick:function(){return g(e)},className:"listName"},e.icon?e.icon:c.a.createElement("i",{className:"color-".concat(e.color)}),e.name,a&&m.filter((function(t){return t.listId===e.id})).length>0&&" (".concat(m.filter((function(t){return t.listId===e.id})).length,")")),a&&c.a.createElement("div",{onClick:function(){return t=e.id,void(window.confirm("Delete?")&&d(t));var t},className:"listDeleteBtn"},"X"))}))),r&&b&&c.a.createElement("div",{className:"windowAddTask"},c.a.createElement("div",{onClick:g,className:"closeBtn"},"X"),c.a.createElement("input",{onChange:function(e){return j(e.target.value)},value:w,autoFocus:!0,onKeyPress:function(e){"Enter"===e.key&&x()},type:"text",placeholder:"Name of a new list"}),c.a.createElement("div",{className:"colors"},i.map((function(e){return c.a.createElement("i",{onClick:function(){return O(e.id)},key:e.id,className:"color-".concat(e.name," \n                               ").concat(T===e.id?"active":"")})}))),c.a.createElement("button",{onClick:x},"Add")))},m=a(16),u=a(12),f=a(25);function k(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?k(Object(a),!0).forEach((function(t){Object(f.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):k(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var E="myboard/ADD_LIST",b="myboard/ADD_TASK",h=3,y=5,v={lists:[{id:"1",name:"Home",colorId:"4"},{id:"2",name:"On work",colorId:"2"},{id:"3",name:"Shopping",colorId:"3"}],tasks:[{id:"1",listId:"1",text:"Clean",complete:!0},{id:"2",listId:"1",text:"Cooking",complete:!1},{id:"3",listId:"2",text:"Coffee",complete:!1},{id:"4",listId:"2",text:"Working",complete:!1},{id:"5",listId:"1",text:"Go to the shop",complete:!1}],colors:[{id:"1",hex:"#ff000a",name:"red"},{id:"2",hex:"#000eff",name:"blue"},{id:"3",hex:"#00ff23",name:"green"},{id:"4",hex:"#fffd00",name:"yellow"},{id:"5",hex:"#ff00ed",name:"purple"},{id:"6",hex:"#ffffff",name:"white"},{id:"7",hex:"#000000",name:"black"}]},T=(a(40),function(e){var t=e.list,a=e.tasks,n=e.renameList,r=e.colorName,i=e.addTask,o=e.checkTask,l=e.deleteTask,d=e.withoutEmpty,m=e.renameTask,u=c.a.useState(!1),f=Object(s.a)(u,2),k=f[0],p=f[1],E=c.a.useState(""),b=Object(s.a)(E,2),h=b[0],y=b[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",{onClick:function(){var e=window.prompt("Name of list:",t.name);e&&n(t.id,e)},className:"nameTask colorName-".concat(r)},t.name),c.a.createElement("span",{className:"help"},"You can change it ;) click"),c.a.createElement("div",{className:"innerTasks"},a.map((function(e){return c.a.createElement("div",{key:e.id,className:"task"},c.a.createElement("div",{className:"checkbox"},c.a.createElement("input",{className:"checkboxInput",type:"checkbox",checked:e.complete,onChange:function(){return o(e.id)},id:"chek-".concat(e.id)}),c.a.createElement("label",{htmlFor:"chek-".concat(e.id)},c.a.createElement("div",{className:"checkboxIn"},"V"))),c.a.createElement("div",{className:"taskName",onClick:function(){return function(e,t){var a=window.prompt("Rename task?",t);a&&m(e,a)}(e.id,e.text)},key:e.id},e.text),c.a.createElement("div",{className:"deleteTaskBtn",onClick:function(){return function(e){window.confirm("Delete task?")&&l(e)}(e.id)}},"X"))})),!d&&!a.length&&c.a.createElement("h2",null,"***Tasks is empty***"),c.a.createElement("div",{className:"newTaskBtn"},k?c.a.createElement("div",{className:"newTaskInput"},c.a.createElement("input",{value:h,onChange:function(e){return y(e.target.value)},onBlur:function(){return p(!1)},autoFocus:!0,type:"text",placeholder:"Enter text a new task"}),c.a.createElement("button",{onMouseDown:function(){h&&i(t.id,h)}},"Enter")):c.a.createElement("span",{onClick:function(){p(!0),y("")}},"+ New task"))))}),O=a(9);var I=Object(m.b)((function(e){return{lists:e.myboard.lists,colors:e.myboard.colors,tasks:e.myboard.tasks}}),{addList:function(e,t){return{type:E,name:e,colorId:t}},deleteList:function(e){return{type:"myboard/DELETE_LIST",listId:e}},renameList:function(e,t){return{type:"myboard/RENAME_LIST",listId:e,newName:t}},addTask:function(e,t){return{type:b,listId:e,text:t}},checkTask:function(e){return{type:"myboard/CHECK_TASK",taskId:e}},deleteTask:function(e){return{type:"myboard/DELETE_TASK",taskId:e}},renameTask:function(e,t){return{type:"myboard/RENAME_TASK",taskId:e,text:t}}})((function(e){var t=e.lists,a=e.colors,n=e.addList,r=e.deleteList,i=e.tasks,o=e.renameList,l=e.addTask,m=e.checkTask,u=e.deleteTask,f=e.renameTask,k=c.a.useState(null),p=Object(s.a)(k,2),E=p[0],b=p[1],h=Object(O.e)();return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"innerApp"},c.a.createElement("div",{className:"menu"},c.a.createElement(d,{history:h,lists:[{active:"/"===h.location.pathname,name:"All tasks",color:""}]}),c.a.createElement(d,{history:h,isRemovable:!0,activeList:E,setActiveList:b,tasks:i,deleteList:r,lists:t.map((function(e){return e.color=a.find((function(t){return t.id===e.colorId})).name,e}))}),c.a.createElement(d,{history:h,addListBtn:!0,addList:n,colors:a,lists:[{name:"Add list",icon:"+ "}]})),c.a.createElement("div",{className:"tasks"},c.a.createElement(O.a,{exact:!0,path:"/"},t&&t.map((function(e){return c.a.createElement(T,{key:e.id,renameTask:f,deleteTask:u,checkTask:m,addTask:l,renameList:o,colorName:a.find((function(t){return t.id===e.colorId})).name,list:e,withoutEmpty:!0,tasks:i.filter((function(t){return t.listId===e.id}))})}))),c.a.createElement(O.a,{path:"/list/:id"},t&&E&&c.a.createElement(T,{renameTask:f,deleteTask:u,checkTask:m,addTask:l,renameList:o,colorName:a.find((function(e){return e.id===E.colorId})).name,list:E,tasks:i.filter((function(e){return e.listId===E.id}))})))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var N=a(10),w=a(27),j=Object(N.c)({myboard:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return h+=1,p({},e,{lists:[].concat(Object(u.a)(e.lists),[{id:String(h),name:t.name,colorId:t.colorId}])});case"myboard/DELETE_LIST":return p({},e,{lists:Object(u.a)(e.lists.filter((function(e){return e.id!==t.listId})))});case"myboard/RENAME_LIST":return p({},e,{lists:e.lists.map((function(e){return e.id===t.listId?p({},e,{name:t.newName}):e}))});case b:return y+=1,p({},e,{tasks:[].concat(Object(u.a)(e.tasks),[{id:y,listId:t.listId,text:t.text,complete:!1}])});case"myboard/CHECK_TASK":return p({},e,{tasks:e.tasks.map((function(e){return e.id===t.taskId?p({},e,{complete:!e.complete}):e}))});case"myboard/DELETE_TASK":return p({},e,{tasks:Object(u.a)(e.tasks.filter((function(e){return e.id!==t.taskId})))});case"myboard/RENAME_TASK":return p({},e,{tasks:e.tasks.map((function(e){return e.id===t.taskId?p({},e,{text:t.text}):e}))});default:return e}}}),g=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||N.d,x=Object(N.e)(j,g(Object(N.a)(w.a))),L=a(15);i.a.render(c.a.createElement(L.a,null,c.a.createElement(m.a,{store:x},c.a.createElement(I,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[28,1,2]]]);
//# sourceMappingURL=main.58a9c831.chunk.js.map