(this["webpackJsonpnew-smart-house"]=this["webpackJsonpnew-smart-house"]||[]).push([[0],{26:function(e,t,o){},32:function(e,t,o){},33:function(e,t,o){"use strict";o.r(t);var c=o(1),n=o(0),r=o.n(n),a=o(19),j=o.n(a),i=(o(26),o(17)),s=o(4),u=o(8),d=o(2);function b(e){return Object(c.jsx)("div",{children:Object(c.jsx)("h4",{children:e.product})})}var l=r.a.createContext(),O=l.Provider,m=l.Consumer;function h(e){var t=Object(n.useState)(e.product[0]),o=Object(s.a)(t,2),r=o[0],a=o[1],j=Object(n.useState)("red"),i=Object(s.a)(j,2),u=i[0];i[1];return Object(c.jsx)("div",{children:Object(c.jsx)(m,{children:function(e){return Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{children:"Choose a product : "}),Object(c.jsx)("select",{onChange:function(e){a(e.target.value)},children:e.products.map((function(e){return Object(c.jsx)("option",{children:e})}))}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{onClick:function(){e.addProducts(r,u,e.name,e.roomType)},children:"Add this product"})})]})}})})}function p(e){var t=Object(n.useState)(!1),o=Object(s.a)(t,2),r=o[0],a=o[1],j=Object(n.useState)(e.productTypes),i=Object(s.a)(j,2),d=i[0],l=(i[1],Object(n.useState)(!1)),O=Object(s.a)(l,2),m=O[0],p=O[1];return Object(c.jsxs)("div",{children:[Object(c.jsxs)("h3",{children:["Type:",e.type]}),Object(c.jsxs)("h3",{children:["Name:",e.name]}),function(){if(1==r)return Object(c.jsx)(h,{product:d})}(),e.alreadyInRoom.map((function(t,o){if(t.roomName==e.name)return Object(c.jsx)("button",{onClick:function(){p(!m),t.condition=1==m?"green":"red"},style:{backgroundColor:"".concat(t.condition)},children:Object(c.jsx)(b,{product:t.productName})})})),Object(c.jsx)("br",{}),Object(c.jsx)("button",{onClick:function(){a(!r)},children:"Add a product"}),Object(c.jsx)("br",{}),Object(c.jsxs)(u.b,{to:"/",children:["  ",Object(c.jsx)("button",{children:"Back to main page"})," "]})]})}function x(e){var t=Object(n.useState)(e.rooms[0]),o=Object(s.a)(t,2),r=o[0],a=o[1],j=Object(n.useState)(""),i=Object(s.a)(j,2),d=i[0],b=i[1],l=Object(n.useState)(""),O=Object(s.a)(l,2),m=O[0],h=O[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{children:"Choose a room: "}),Object(c.jsx)("select",{onChange:function(e){a(e.target.value)},children:e.rooms.map((function(e){return Object(c.jsx)("option",{children:e})}))}),Object(c.jsxs)("p",{children:["Name:",Object(c.jsx)("input",{onChange:function(e){b(e.target.value)},type:"text",placeholder:"Name your room"})]}),Object(c.jsxs)("p",{children:["Pick a color for your room:",Object(c.jsx)("input",{onChange:function(e){h(e.target.value)},type:"color",placeholder:"Color your room"})]}),Object(c.jsx)(u.b,{to:"/",children:Object(c.jsx)("button",{onClick:function(){d.length>5?alert("Name have to be maximum 5 letters"):""==m?alert("Pick a color for your room"):e.addRoom(r,d,m)},children:"ADD"})})]})}function f(){return Object(c.jsx)("div",{children:Object(c.jsx)(u.b,{to:"/addRoom",children:"addRoom"})})}function v(e){var t=Object(n.useState)(e),o=Object(s.a)(t,2);o[0],o[1];return Object(c.jsxs)(u.b,{to:"/room",children:[Object(c.jsx)("p",{children:e.type}),Object(c.jsx)("p",{children:e.name})]})}o(32);function y(){var e=["Air conditioner","Stereo Station","Lamp","Boiler"],t=Object(n.useState)([]),o=Object(s.a)(t,2),r=o[0],a=o[1],j=Object(n.useState)([]),b=Object(s.a)(j,2),l=b[0],m=b[1],h=Object(n.useState)([]),y=Object(s.a)(h,2),g=y[0],C=y[1],S=Object(n.useState)([]),N=Object(s.a)(S,2),k=N[0],B=N[1],T=function(e){for(var t=0,o=0;o<k.length;o++)if(k[o].roomName==e&&t++,5==t)return!0;return!1},R=function(e,t){for(var o=0,c=0;c<k.length;c++)if(k[c].roomName==e&&"Stereo Station"==k[c].productName&&"Stereo Station"==t&&o++,1==o)return!0;return!1},P=function(e){m(e.roomName),C(e.roomType)};return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("h1",{children:"Smart House"}),Object(c.jsx)(u.a,{children:Object(c.jsx)("div",{children:Object(c.jsxs)(d.c,{children:[Object(c.jsx)(d.a,{path:"/addRoom",children:Object(c.jsx)(x,{rooms:["Bedroom","Living room","Bathroom","Kitchen"],addRoom:function(e,t,o){a([].concat(Object(i.a)(r),[{roomType:e,roomName:t,roomColor:o}]))}})}),Object(c.jsx)(d.a,{path:"/room",children:Object(c.jsx)(O,{value:{name:l,products:e,addProducts:function(e,t,o,c){T(o)&&alert("Max 5 products in room"),R(o,e)&&alert("No more stereo"),"Boiler"==e&&"Bathroom"!=c&&alert("Boiler can be only in Bathroom"),0==T(o)&&0==R(o,e)&&0==("Boiler"==e&&"Bathroom"!=c)&&B([].concat(Object(i.a)(k),[{productName:e,condition:t,roomName:o,roomType:c}]))},roomType:g},children:Object(c.jsx)(p,{name:l,type:g,alreadyInRoom:k,productTypes:e})})}),Object(c.jsxs)(d.a,{path:"/",children:[r.map((function(e,t){return Object(c.jsx)("button",{onClick:function(){P(e)},style:{backgroundColor:"".concat(e.roomColor)},children:Object(c.jsx)(v,{setTheRoom:P,name:e.roomName,type:e.roomType,color:e.roomColor})})})),Object(c.jsx)(f,{})]})]})})})]})}var g=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,34)).then((function(t){var o=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,a=t.getTTFB;o(e),c(e),n(e),r(e),a(e)}))};j.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(y,{})}),document.getElementById("root")),g()}},[[33,1,2]]]);
//# sourceMappingURL=main.50f68e8d.chunk.js.map