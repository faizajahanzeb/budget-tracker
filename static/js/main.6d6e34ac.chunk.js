(this["webpackJsonpbudget-tracker"]=this["webpackJsonpbudget-tracker"]||[]).push([[0],{15:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(7),r=c.n(a),i=(c(15),c(16),c(2)),l=c(0),j=function(e){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("span",{children:["Budget: $",e.budget]}),Object(l.jsx)("button",{type:"button",class:"btn btn-primary",onClick:e.handleEditClick,children:"Edit"})]})},d=function(e){var t=Object(n.useState)(e.budget),c=Object(i.a)(t,2),s=c[0],a=c[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("input",{required:"required",type:"number",class:"form-control mr-3",id:"name",value:s,onChange:function(e){return a(e.target.value)}}),Object(l.jsx)("button",{type:"button",class:"btn btn-primary",onClick:function(){return e.handleSaveClick(s)},children:"Save"})]})},u=c(9),b=c(3),o=c(19),O=function(e,t){switch(t.type){case"ADD_EXPENSE":return Object(b.a)(Object(b.a)({},e),{},{expenses:[].concat(Object(u.a)(e.expenses),[t.payload])});case"DELETE_EXPENSE":return Object(b.a)(Object(b.a)({},e),{},{expenses:e.expenses.filter((function(e){return e.id!==t.payload}))});case"SET_BUDGET":return Object(b.a)(Object(b.a)({},e),{},{budget:t.payload});default:return e}},m={budget:2e3,expenses:[{id:Object(o.a)(),name:"Shopping",cost:50},{id:Object(o.a)(),name:"Holiday",cost:300},{id:Object(o.a)(),name:"Transportation",cost:70},{id:Object(o.a)(),name:"Fuel",cost:40},{id:Object(o.a)(),name:"Child Care",cost:500}]},x=Object(n.createContext)(),h=function(e){var t=Object(n.useReducer)(O,m),c=Object(i.a)(t,2),s=c[0],a=c[1];return Object(l.jsx)(x.Provider,{value:{expenses:s.expenses,budget:s.budget,dispatch:a},children:e.children})},p=function(){var e=Object(n.useContext)(x),t=e.budget,c=e.dispatch,s=Object(n.useState)(!1),a=Object(i.a)(s,2),r=a[0],u=a[1];return Object(l.jsx)("div",{class:"alert alert-secondary p-3 d-flex align-items-center justify-content-between",children:r?Object(l.jsx)(d,{handleSaveClick:function(e){c({type:"SET_BUDGET",payload:e}),u(!1)},budget:t}):Object(l.jsx)(j,{handleEditClick:function(){u(!0)},budget:t})})},f=function(){var e=Object(n.useContext)(x),t=e.expenses,c=e.budget,s=t.reduce((function(e,t){return e+t.cost}),0),a=s>c?"alert-danger":"alert-success";return Object(l.jsx)("div",{className:"alert ".concat(a),children:Object(l.jsxs)("span",{children:["Remaining: $",c-s]})})},v=function(){var e=Object(n.useContext)(x).expenses.reduce((function(e,t){return e+t.cost}),0);return Object(l.jsx)("div",{className:"alert alert-primary",children:Object(l.jsxs)("span",{children:["Spent so far: $",e]})})},g=c(8),y=function(e){var t=Object(n.useContext)(x).dispatch;return Object(l.jsxs)("li",{className:"list-group-item d-flex justify-content-between align-items-center",children:[e.name,Object(l.jsxs)("div",{children:[Object(l.jsxs)("span",{className:"badge badge-primary badge-pill mr-3",children:["$",e.cost]}),Object(l.jsx)(g.a,{size:"1.5em",onClick:function(){t({type:"DELETE_EXPENSE",payload:e.id})}})]})]})},E=function(){var e=Object(n.useContext)(x).expenses,t=Object(n.useState)(e||[]),c=Object(i.a)(t,2),s=c[0],a=c[1];Object(n.useEffect)((function(){a(e)}),[e]);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("input",{type:"text",class:"form-control mb-2 mr-sm-2",placeholder:"Type to search...",onChange:function(t){var c=e.filter((function(e){return e.name.toLowerCase().includes(t.target.value)}));a(c)}}),Object(l.jsx)("ul",{class:"list-group mt-3 mb-3",children:s.map((function(e){return Object(l.jsx)(y,{id:e.id,name:e.name,cost:e.cost})}))})]})},N=function(){var e=Object(n.useContext)(x).dispatch,t=Object(n.useState)(""),c=Object(i.a)(t,2),s=c[0],a=c[1],r=Object(n.useState)(""),j=Object(i.a)(r,2),d=j[0],u=j[1];return Object(l.jsx)("form",{onSubmit:function(t){t.preventDefault();var c={id:Object(o.a)(),name:s,cost:parseInt(d)};e({type:"ADD_EXPENSE",payload:c}),a(""),u("")},children:Object(l.jsxs)("div",{className:"row",children:[Object(l.jsxs)("div",{className:"col-sm",children:[Object(l.jsx)("label",{for:"name",children:"Name"}),Object(l.jsx)("input",{required:"required",type:"text",className:"form-control",id:"name",value:s,onChange:function(e){return a(e.target.value)}})]}),Object(l.jsxs)("div",{className:"col-sm",children:[Object(l.jsx)("label",{for:"cost",children:"Cost"}),Object(l.jsx)("input",{required:"required",type:"text",className:"form-control",id:"cost",value:d,onChange:function(e){return u(e.target.value)}})]}),Object(l.jsx)("div",{className:"col-sm",children:Object(l.jsx)("button",{type:"submit",className:"btn btn-primary mt-3",children:"Save"})})]})})},C=function(){return Object(l.jsx)(h,{children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h1",{className:"mt-3",children:"My Budget Planner"}),Object(l.jsxs)("div",{className:"row mt-3",children:[Object(l.jsx)("div",{className:"col-sm",children:Object(l.jsx)(p,{})}),Object(l.jsx)("div",{className:"col-sm",children:Object(l.jsx)(f,{})}),Object(l.jsx)("div",{className:"col-sm",children:Object(l.jsx)(v,{})})]}),Object(l.jsx)("h3",{className:"mt-3",children:"Expenses"}),Object(l.jsx)("div",{className:"row mt-3",children:Object(l.jsx)("div",{className:"col-sm",children:Object(l.jsx)(E,{})})}),Object(l.jsx)("h3",{className:"mt-3",children:"Add Expense"}),Object(l.jsx)("div",{className:"row mt-3",children:Object(l.jsx)("div",{className:"col-sm",children:Object(l.jsx)(N,{})})})]})})},S=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,20)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),a(e),r(e)}))};r.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(C,{})}),document.getElementById("root")),S()}},[[18,1,2]]]);
//# sourceMappingURL=main.6d6e34ac.chunk.js.map