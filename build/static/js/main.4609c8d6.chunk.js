(this["webpackJsonpyour-project-name"]=this["webpackJsonpyour-project-name"]||[]).push([[0],{23:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),c=a(7),r=a.n(c),i=[{phaseName:"Phase \u21161",tasks:[{index:0,id:"Ph-1,T-1",taskName:"task",isChecked:!1},{index:1,id:"Ph-1,T-2",taskName:"task",isChecked:!1}]}],h=[{phaseName:"Phase \u21162",tasks:[{index:0,id:"Ph-2,T-1",taskName:"task",isChecked:!1},{index:1,id:"Ph-2,T-2",taskName:"task",isChecked:!1},{index:2,id:"Ph-2,T-3",taskName:"task",isChecked:!1}]}],o=[{phaseName:"Phase \u21163",tasks:[{index:0,id:"Ph-3,T-1",taskName:"task",isChecked:!1},{index:1,id:"Ph-3,T-2",taskName:"task",isChecked:!1}]}],u=a(6),d=a(2),p=a(4),j=a.n(p),f=a(8),O=function(e){return!e.includes(!1)},b=function(e){return function(){var t=Object(f.a)(j.a.mark((function t(a){var s;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:s=O(e),a({type:"LOAD_PHASE1_STATS",payload:{data:s}});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},k=function(e){return function(){var t=Object(f.a)(j.a.mark((function t(a){var s;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:s=O(e),a({type:"LOAD_PHASE2_STATS",payload:{data:s}});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},l=function(e){return function(){var t=Object(f.a)(j.a.mark((function t(a){var s;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:s=O(e),a({type:"LOAD_PHASE3_STATS",payload:{data:s}});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=a(1),S=function(e){var t=e.data,a=e.isDone,n=Object(u.a)(t,1)[0],c=Object(s.useState)({}),r=Object(u.a)(c,2),i=r[0],h=r[1],o=Object(d.b)(),p=function(e){var t=e.tasks.map((function(e){return e.isChecked}));"Phase \u21161"===e.phaseName?o(b(t)):"Phase \u21162"===e.phaseName?o(k(t)):"Phase \u21163"===e.phaseName&&o(l(t))};return 3===localStorage.length?console.log():localStorage.setItem(n.phaseName,JSON.stringify(n)),Object(s.useEffect)((function(){var e=JSON.parse(localStorage.getItem(n.phaseName));h(e)}),[n.phaseName]),Object(s.useEffect)((function(){if(i.tasks){var e=i.tasks.map((function(e){return e.isChecked}));"Phase \u21161"===i.phaseName?o(b(e)):"Phase \u21162"===i.phaseName?o(k(e)):"Phase \u21163"===i.phaseName&&o(l(e))}}),[i]),Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:i.phaseName}),a?Object(m.jsx)("h1",{children:"Done"}):"",Object(m.jsx)("section",{children:i.tasks&&i.tasks.map((function(e){var t=e.id,a=e.taskName,s=e.isChecked;return Object(m.jsxs)("div",{children:[Object(m.jsx)("input",{id:t,defaultChecked:s,type:"checkbox",onChange:function(){!function(e){var t=JSON.parse(localStorage.getItem(i.phaseName)),a=document.getElementById("".concat(e));t.tasks.find((function(s){if(s.id===e)if(!1===s.isChecked){for(var n=0;n<t.tasks.length;n++)if(e===t.tasks[n].id){t.tasks[n].isChecked=!0;break}localStorage.setItem(i.phaseName,JSON.stringify(t)),p(t),a.setAttribute("defaultChecked",!0)}else{for(var c=0;c<t.tasks.length;c++)if(e===t.tasks[c].id){t.tasks[c].isChecked=!1;break}localStorage.setItem(i.phaseName,JSON.stringify(t)),p(t),a.setAttribute("defaultChecked",!1)}}))}(t)}}),Object(m.jsx)("span",{children:a})]},t)}))})]})},x=function(){var e=Object(s.useState)({}),t=Object(u.a)(e,2),a=t[0],n=t[1],c="https://uselessfacts.jsph.pl/random.json";return Object(s.useEffect)((function(){fetch(c).then((function(e){return e.json()})).then((function(e){n(e)}))}),[c]),Object(m.jsx)("section",{children:a.text&&Object(m.jsx)("h1",{children:a.text})})};var N=function(){var e=Object(d.c)((function(e){return e.Phases.phase1})),t=Object(d.c)((function(e){return e.Phases.phase2})),a=Object(d.c)((function(e){return e.Phases.phase3}));return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"My startup progress"}),Object(m.jsxs)("section",{children:[Object(m.jsx)(S,{data:i,isDone:e}),e?Object(m.jsx)(S,{data:h,isDone:t}):"",e&&t?Object(m.jsx)(S,{data:o,isDone:a}):"",e&&t&&a?Object(m.jsx)(x,{}):""]})]})},P=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,24)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),s(e),n(e),c(e),r(e)}))},v=a(5),g=a(3),T={phase1:[],phase2:[],phase3:[]},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_PHASE1_STATS":return Object(g.a)(Object(g.a)({},e),{},{phase1:t.payload.data});case"LOAD_PHASE2_STATS":return Object(g.a)(Object(g.a)({},e),{},{phase2:t.payload.data});case"LOAD_PHASE3_STATS":return Object(g.a)(Object(g.a)({},e),{},{phase3:t.payload.data});default:return Object(g.a)({},e)}},A=Object(v.b)({Phases:y}),C=a(12),_=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||v.c,E=Object(v.d)(A,_(Object(v.a)(C.a)));r.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(d.a,{store:E,children:Object(m.jsx)(N,{})})}),document.getElementById("root")),P()}},[[23,1,2]]]);
//# sourceMappingURL=main.4609c8d6.chunk.js.map