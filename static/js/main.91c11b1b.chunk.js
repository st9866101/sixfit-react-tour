(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,a){e.exports=a.p+"static/media/logo.06e73328.svg"},37:function(e,t,a){e.exports=a(57)},46:function(e,t,a){},50:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),c=a(25),r=a.n(c),m=a(9),i=(a(46),a(48),a(50),a(0));var u=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"title"},l.a.createElement(m.b,{to:"/"},"React test")),l.a.createElement("ul",{className:"navbar"},l.a.createElement("li",null,l.a.createElement(m.c,{to:"/"},"page1")),l.a.createElement("li",null,l.a.createElement(m.c,{to:"/tour-list"},"page2"))))),l.a.createElement("main",null,l.a.createElement(i.a,null)),l.a.createElement("footer",null,l.a.createElement(m.b,{to:"/"},"\u56de\u9996\u9801"),l.a.createElement("p",null,"JC 2022 \xa9 \u516d\u89d2\u5b78\u9662 React \u8b80\u66f8\u6703")))},o=a(71),s=a(73),E=a(8),p=a(28),f=a.n(p);var d=function(){return l.a.createElement("img",{src:f.a,className:"App-logo",alt:"logo"})};var g=function(){var e=Object(n.useState)([]),t=Object(E.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)(function(){fetch("https://api.kcg.gov.tw/api/service/Get/9c8e1450-e833-499c-8320-29b36b7ace5c").then(function(e){return e.json()}).then(function(e){c(e.data.XML_Head.Infos.Info)})},[]),l.a.createElement("div",{className:"container"},a.length?l.a.createElement("ul",{className:"tour-list-wrapper"},a.map(function(e){return l.a.createElement("li",{key:e.Id},l.a.createElement(m.b,{to:e.Id},l.a.createElement("img",{src:e.Picture1,alt:e.Name})))})):l.a.createElement(d,null))};var b=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"\u6e2c\u8a66"),l.a.createElement(o.a,{container:!0},l.a.createElement(o.a,{item:!0,xs:12,sm:10,md:10,lg:10},l.a.createElement(g,null)),l.a.createElement(o.a,{item:!0,xs:12,sm:2,md:2,lg:2,display:"flex",flexDirection:"column"},l.a.createElement(s.a,{display:"flex",flexDirection:"column",sx:{width:"50%",margin:"0 auto"}},"\u5ee3\u544a",l.a.createElement("img",{src:"https://www.wowpaper.com.tw/images_up/home/home_img_4_3.jpg"})),l.a.createElement(s.a,{display:"flex",flexDirection:"column",sx:{width:"50%",margin:"0 auto"}},"\u5ee3\u544a2",l.a.createElement("img",{src:"https://www.wowpaper.com.tw/images_up/home/home_img_5_3.jpg"})))))};var h=function(){var e=Object(n.useState)([]),t=Object(E.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)(function(){fetch("https://api.kcg.gov.tw/api/service/Get/9c8e1450-e833-499c-8320-29b36b7ace5c").then(function(e){return e.json()}).then(function(e){c(e.data.XML_Head.Infos.Info)})},[]),l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,"\u666f\u9ede\u5217\u8868"),a.length?l.a.createElement("ul",{className:"tour-list-wrapper"},a.map(function(e){return l.a.createElement("li",{key:e.Id},l.a.createElement(m.b,{to:e.Id},l.a.createElement("img",{src:e.Picture1,alt:e.Name}),l.a.createElement("p",null,e.Name)))})):l.a.createElement(d,null))},v=a(32);var w=function(){var e=Object(i.h)().id,t=Object(n.useState)({}),a=Object(E.a)(t,2),c=a[0],r=a[1];return Object(n.useEffect)(function(){fetch("https://api.kcg.gov.tw/api/service/Get/9c8e1450-e833-499c-8320-29b36b7ace5c").then(function(e){return e.json()}).then(function(t){var a=t.data.XML_Head.Infos.Info.filter(function(t){return t.Id===e});r(Object(v.a)({},a[0]))})},[]),l.a.createElement("div",{className:"container"},c.Name?l.a.createElement("div",{className:"detail"},l.a.createElement("h1",null,c.Name),l.a.createElement("img",{src:c.Picture1,alt:c.Name}),l.a.createElement("em",null,c.Description,l.a.createElement("br",null),l.a.createElement("br",null),"\u25bc"),l.a.createElement("p",null,c.Toldescribe)):l.a.createElement(d,null),l.a.createElement("p",null,l.a.createElement(m.b,{to:"/tour-list"},"Back")))};var N=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"\u9801\u9762\u4e0d\u5b58\u5728"))};var j=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(i.a,null),l.a.createElement(i.d,null,l.a.createElement(i.b,{path:"/",element:l.a.createElement(u,null)},l.a.createElement(i.b,{index:!0,element:l.a.createElement(b,null)}),l.a.createElement(i.b,{path:"/tour-list"},l.a.createElement(i.b,{index:!0,element:l.a.createElement(h,null)}),l.a.createElement(i.b,{path:":id",element:l.a.createElement(w,null)})),l.a.createElement(i.b,{path:"*",element:l.a.createElement(N,null)}))))},x=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,70)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),l(e),c(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(m.a,null,l.a.createElement(j,null)))),x()}},[[37,3,2]]]);
//# sourceMappingURL=main.91c11b1b.chunk.js.map