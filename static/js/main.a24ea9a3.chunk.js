(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(24)},,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(3),o=n.n(c),l=(n(18),n(1)),i=(n(19),function(e){var t=e.name,n=e.email,a=e.id;return r.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc card"},r.a.createElement("img",{src:"https://robohash.org/".concat(a,"?200x200"),alt:"robot"}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,n)))}),u=(n(20),function(e){var t=e.robots;return r.a.createElement("div",null,t.map(function(e,n){return r.a.createElement(i,{key:t[n].id,id:t[n].id,name:t[n].name,email:t[n].email})}))}),s=(n(21),function(e){e.searchField;var t=e.searchChange;return r.a.createElement("div",null,r.a.createElement("input",{type:"search",placeholder:"Search here",className:"pa3 ba b--light-blue bg-lightest-blue",onChange:t}))}),h=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",height:"800px",marginTop:"20px"}},e.children)},m=n(4),d=n(5),f=n(7),b=n(6),E=n(8),g=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(f.a)(this,Object(b.a)(t).call(this,e))).state={hasError:!1},n}return Object(E.a)(t,e),Object(d.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Not good"):this.props.children}}]),t}(a.Component),p=(n(22),function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(""),i=Object(l.a)(o,2),m=i[0],d=i[1],f=Object(a.useState)(0),b=Object(l.a)(f,2),E=b[0];b[1];Object(a.useEffect)(function(){fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(e){c(e)})},[E]);var p=n.filter(function(e){return e.name.toLowerCase().includes(m.toLowerCase())});return n.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f2 neonText"},"RoboFriends"),r.a.createElement(s,{searchChange:function(e){d(e.target.value)}}),r.a.createElement(h,null,r.a.createElement(g,null,r.a.createElement(u,{robots:p})))):r.a.createElement("h1",{className:"f2 neonText"},"Loading...")}),v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,25)).then(function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),c(e),o(e)})};n(23);o.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null))),v()}],[[9,1,2]]]);
//# sourceMappingURL=main.a24ea9a3.chunk.js.map