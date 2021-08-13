(this["webpackJsonpyour-project-name"]=this["webpackJsonpyour-project-name"]||[]).push([[0],{26:function(e,a,t){},27:function(e,a,t){"use strict";t.r(a);var s=t(0),n=t.n(s),c=t(7),i=t.n(c),r={phaseTitle:"How to cook a rice",phaseCodeName:"Phase\u21161",tasks:[{index:0,id:"Ph-1,T-1",taskName:"Rinse the rice",isChecked:!1},{index:1,id:"Ph-1,T-2",taskName:"Bring water to a boil, then add the rice",isChecked:!1},{index:2,id:"Ph-1,T-3",taskName:"Maintain a boil",isChecked:!1},{index:3,id:"Ph-1,T-4",taskName:"Drain the rice",isChecked:!1}]},o={phaseTitle:"How to turn the dark theme for Google",phaseCodeName:"Phase\u21162",tasks:[{index:0,id:"Ph-2,T-1",taskName:"Open your device's Settings app",isChecked:!1},{index:1,id:"Ph-2,T-2",taskName:"Tap Accessibility",isChecked:!1},{index:2,id:"Ph-2,T-3",taskName:"Under Display, turn on Dark theme ",isChecked:!1}]},h={phaseTitle:"How to kill a dragon",phaseCodeName:"Phase\u21163",tasks:[{index:0,id:"Ph-3,T-1",taskName:"Know its weaknesses",isChecked:!1},{index:1,id:"Ph-3,T-2",taskName:"Use a really big bow and arrow",isChecked:!1},{index:2,id:"Ph-3,T-3",taskName:"Blow him up",isChecked:!1},{index:3,id:"Ph-3,T-4",taskName:"Rip its heart out",isChecked:!1},{index:4,id:"Ph-3,T-5",taskName:"Still moves? Repeat it in the same order again, until it stops",isChecked:!1}]},d=t(8),u=t(14),l=t(6),p=t.n(l),j=t(2),m=t(4),f=t.n(m),k=t(9),O=function(e){return!e.includes(!1)},b=function(e){return function(){var a=Object(k.a)(f.a.mark((function a(t){var s;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:s=O(e),t({type:"LOAD_PHASE1_STATS",payload:{data:s}});case 2:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},N=function(e){return function(){var a=Object(k.a)(f.a.mark((function a(t){var s;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:s=O(e),t({type:"LOAD_PHASE2_STATS",payload:{data:s}});case 2:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},C=function(e){return function(){var a=Object(k.a)(f.a.mark((function a(t){var s;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:s=O(e),t({type:"LOAD_PHASE3_STATS",payload:{data:s}});case 2:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},S=t(1),P=function(e){e.phaseName;var a=e.data,t=e.isDone,n=Object(s.useState)({}),c=Object(d.a)(n,2),i=c[0],r=c[1],o=Object(j.b)(),h=function(e){var a=e.tasks.map((function(e){return e.isChecked}));"Phase\u21161"===e.phaseCodeName?o(b(a)):"Phase\u21162"===e.phaseCodeName?o(N(a)):"Phase\u21163"===e.phaseCodeName&&o(C(a))};return(0===localStorage.length&&"Phase\u21161"===a.phaseCodeName||1===localStorage.length&&"Phase\u21162"===a.phaseCodeName||2===localStorage.length&&"Phase\u21163"===a.phaseCodeName)&&(console.log(a.phaseCodeName),localStorage.setItem(a.phaseCodeName,JSON.stringify(a))),Object(s.useEffect)((function(){var e=JSON.parse(localStorage.getItem(a.phaseCodeName));r(e)}),[a.phaseCodeName]),Object(s.useEffect)((function(){if(i.tasks){var e=i.tasks.map((function(e){return e.isChecked}));"Phase\u21161"===i.phaseCodeName?o(b(e)):"Phase\u21162"===i.phaseCodeName?o(N(e)):"Phase\u21163"===i.phaseCodeName&&o(C(e))}}),[i]),Object(S.jsx)(p.a,{children:Object(S.jsxs)("div",{className:"PhaseSection",children:[Object(S.jsxs)("div",{className:"PhaseTitleSection",children:[Object(S.jsx)("h1",{className:"PhaseTitle",children:i.phaseTitle}),t?Object(S.jsx)(p.a,{children:Object(S.jsx)(u.a,{className:"DoneMessage",size:40})}):""]}),Object(S.jsx)("section",{className:"TasksList",children:i.tasks&&i.tasks.map((function(e){var a=e.id,t=e.taskName,s=e.isChecked;return Object(S.jsxs)("div",{className:"Task",children:[Object(S.jsx)("input",{id:a,defaultChecked:s,type:"checkbox",onChange:function(){!function(e){var a=JSON.parse(localStorage.getItem(i.phaseCodeName)),t=document.getElementById("".concat(e));a.tasks.find((function(s){if(s.id===e)if(!1===s.isChecked){for(var n=0;n<a.tasks.length;n++)if(e===a.tasks[n].id){a.tasks[n].isChecked=!0;break}localStorage.setItem(i.phaseCodeName,JSON.stringify(a)),h(a),t.setAttribute("defaultChecked",!0)}else{for(var c=0;c<a.tasks.length;c++)if(e===a.tasks[c].id){a.tasks[c].isChecked=!1;break}localStorage.setItem(i.phaseCodeName,JSON.stringify(a)),h(a),t.setAttribute("defaultChecked",!1)}}))}(a)}}),Object(S.jsx)("span",{children:t})]},a)}))})]})})},x=function(){var e=Object(s.useState)({}),a=Object(d.a)(e,2),t=a[0],n=a[1],c="https://uselessfacts.jsph.pl/random.json?language=en";return Object(s.useEffect)((function(){fetch(c).then((function(e){return e.json()})).then((function(e){n(e)}))}),[c]),Object(S.jsx)(p.a,{children:Object(S.jsx)("section",{className:"RandomFactSection",children:t.text&&Object(S.jsxs)("h1",{className:"RandomFactMessage",children:["Random Fact: ",t.text]})})})};var g=function(){var e=Object(j.c)((function(e){return e.Phases.phase1})),a=Object(j.c)((function(e){return e.Phases.phase2})),t=Object(j.c)((function(e){return e.Phases.phase3}));return Object(S.jsxs)("div",{className:"App",children:[Object(S.jsx)("h1",{className:"MainTitle",children:"Things I need to learn"}),Object(S.jsxs)("section",{className:"mainSection",children:[Object(S.jsx)(P,{data:r,phaseName:"Phase\u21161",isDone:e}),e?Object(S.jsx)(P,{phaseName:"Phase\u21162",data:o,isDone:a}):"",e&&a?Object(S.jsx)(P,{phaseName:"Phase\u21163",data:h,isDone:t}):"",e&&a&&t?Object(S.jsx)(x,{}):""]})]})},T=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,28)).then((function(a){var t=a.getCLS,s=a.getFID,n=a.getFCP,c=a.getLCP,i=a.getTTFB;t(e),s(e),n(e),c(e),i(e)}))},v=(t(26),t(5)),y=t(3),A={phase1:!1,phase2:!1,phase3:!1},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"LOAD_PHASE1_STATS":return Object(y.a)(Object(y.a)({},e),{},{phase1:a.payload.data});case"LOAD_PHASE2_STATS":return Object(y.a)(Object(y.a)({},e),{},{phase2:a.payload.data});case"LOAD_PHASE3_STATS":return Object(y.a)(Object(y.a)({},e),{},{phase3:a.payload.data});default:return Object(y.a)({},e)}},_=Object(v.b)({Phases:w}),D=t(13),E=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||v.c,I=Object(v.d)(_,E(Object(v.a)(D.a)));i.a.render(Object(S.jsx)(n.a.StrictMode,{children:Object(S.jsx)(j.a,{store:I,children:Object(S.jsx)(g,{})})}),document.getElementById("root")),T()}},[[27,1,2]]]);
//# sourceMappingURL=main.977810fa.chunk.js.map