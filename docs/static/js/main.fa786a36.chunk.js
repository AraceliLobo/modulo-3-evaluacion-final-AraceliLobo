(this["webpackJsonpevluacion-final-aracelilobo"]=this["webpackJsonpevluacion-final-aracelilobo"]||[]).push([[0],{18:function(e,c,t){},19:function(e,c,t){},25:function(e,c,t){"use strict";t.r(c);var a=t(1),n=t(0),r=t.n(n),s=t(10),i=t.n(s),l=(t(18),t(8)),h=function(e){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"character-container",children:[Object(a.jsx)("img",{className:"character-img",src:e.image,alt:"",title:""}),Object(a.jsx)("h2",{className:"character-name",children:e.name}),Object(a.jsx)("h3",{className:"character-species",children:e.species})]})})},u=function(e){var c=e.characters.filter((function(c){return c.name.toUpperCase().includes(e.searchValue.toUpperCase())})).map((function(e){return Object(a.jsx)("li",{children:Object(a.jsx)(h,{image:e.image,name:e.name,species:e.species,id:e.id})},e.id)}));return Object(a.jsx)("ul",{className:"character-list",children:c})},j=function(e){return Object(a.jsxs)("form",{children:[Object(a.jsx)("label",{htmlFor:"search",children:"Search a character"}),Object(a.jsx)("input",{placeholder:"Morty Smith",onChange:function(c){var t=c.currentTarget.value;e.handleInputChange(t)},id:"search",name:"search",type:"text",value:e.searchValue})]})},o=(t(19),function(){return fetch("https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json").then((function(e){return e.json()}))});var b=function(){var e=Object(n.useState)([]),c=Object(l.a)(e,2),t=c[0],r=c[1],s=Object(n.useState)(""),i=Object(l.a)(s,2),h=i[0],b=i[1];return Object(n.useEffect)((function(){o().then((function(e){r(e.results)}))}),[]),Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("main",{children:[Object(a.jsx)(j,{searchValue:h,handleInputChange:function(e){b(e)}}),Object(a.jsx)(u,{searchValue:h,characters:t})]})})},m=t(12);i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(m.a,{children:Object(a.jsx)(b,{})})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.fa786a36.chunk.js.map