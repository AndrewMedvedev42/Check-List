(this["webpackJsonpyour-project-name"]=this["webpackJsonpyour-project-name"]||[]).push([[0],{20:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a.n(s),n=a(3),i=a.n(n),d=[{phaseName:"Phase \u21161",tasks:[{index:0,id:"Ph-1,T-1",taskName:"task",isChecked:!1},{index:1,id:"Ph-1,T-2",taskName:"task",isChecked:!1}]}],r=[{phaseName:"Phase \u21162",tasks:[{index:0,id:"Ph-2,T-1",taskName:"task",isChecked:!1},{index:1,id:"Ph-2,T-2",taskName:"task",isChecked:!1}]}],h=[{phaseName:"Phase \u21163",tasks:[{index:0,id:"Ph-3,T-1",taskName:"task",isChecked:!1},{index:1,id:"Ph-3,T-2",taskName:"task",isChecked:!1}]}],o=a(7),k=a(1),l=function(e){var t=e.data,a=Object(o.a)(t,1)[0],c=Object(s.useState)({}),n=Object(o.a)(c,2),i=n[0],d=n[1];return 3===localStorage.length?console.log("lol"):localStorage.setItem(a.phaseName,JSON.stringify(a)),Object(s.useEffect)((function(){var e=JSON.parse(localStorage.getItem(a.phaseName));d(e)}),[a.phaseName]),Object(k.jsxs)("div",{children:[Object(k.jsx)("h1",{children:i.phaseName}),Object(k.jsx)("section",{children:i.tasks&&i.tasks.map((function(e){var t=e.id,a=e.taskName,s=e.isChecked;return Object(k.jsxs)("div",{children:[Object(k.jsx)("input",{id:t,defaultChecked:s,type:"checkbox",onChange:function(){!function(e){var t=JSON.parse(localStorage.getItem(i.phaseName)),a=document.getElementById("".concat(e));console.log(e),t.tasks.find((function(s){if(s.id===e)if(!1===s.isChecked){for(var c=0;c<t.tasks.length;c++)if(e===t.tasks[c].id){t.tasks[c].isChecked=!0;break}localStorage.setItem(i.phaseName,JSON.stringify(t)),a.setAttribute("defaultChecked",!0)}else{for(c=0;c<t.tasks.length;c++)if(e===t.tasks[c].id){t.tasks[c].isChecked=!1;break}localStorage.setItem(i.phaseName,JSON.stringify(t)),a.setAttribute("defaultChecked",!1)}}))}(t)}}),Object(k.jsx)("span",{children:a})]},t)}))})]})};var j=function(){return Object(k.jsxs)("div",{className:"App",children:[Object(k.jsx)("h1",{children:"My startup progress"}),Object(k.jsxs)("section",{children:[Object(k.jsx)(l,{data:d}),Object(k.jsx)(l,{data:r}),Object(k.jsx)(l,{data:h})]})]})},O=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,21)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),s(e),c(e),n(e),i(e)}))},b=a(2),u=a(10),m={state:[]},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;return t.type,Object(u.a)({},e)},f=Object(b.b)({one:p}),g=a(9),N=a(8),x=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||b.c,C=Object(b.d)(f,x(Object(b.a)(N.a)));i.a.render(Object(k.jsx)(c.a.StrictMode,{children:Object(k.jsx)(g.a,{store:C,children:Object(k.jsx)(j,{})})}),document.getElementById("root")),O()}},[[20,1,2]]]);
//# sourceMappingURL=main.a4d37560.chunk.js.map