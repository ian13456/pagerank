(this.webpackJsonppagerank=this.webpackJsonppagerank||[]).push([[0],{45:function(e,n,t){e.exports=t(63)},50:function(e,n,t){},57:function(e,n,t){},58:function(e,n,t){},63:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(8),c=t.n(r),i=(t(50),t(16)),l=t(7),s=t(24),u=t.n(s),d=(t(57),function(e){var n=e.id,t=e.connections,a=e.value,r=e.position,c=e.hover,i=e.setHover;return o.a.createElement(u.a,{defaultPosition:r},o.a.createElement("div",{className:"node-wrapper",onMouseEnter:function(){i(n)},onMouseLeave:function(){i(null)},style:{boxShadow:t.includes(c)?"0px 0px 3px 3px yellow":""}},o.a.createElement("div",{className:"node-id"},"Page ",o.a.createElement("span",null,n)),o.a.createElement("div",{className:"node-connections"},t.length?t.sort((function(e,n){return e-n})).map((function(e,n){return o.a.createElement("p",{key:n},"Link to"," ",o.a.createElement("span",{style:{color:c===e?"red":"green"}},e))})):"none"),o.a.createElement("div",{className:"node-value"},a)))}),m=(t(58),t(12)),f=t.n(m),g=t(5),p=function(e){return((Math.random()-.5)*e+50)/100},w=[0,1,2,3,4,5],h=[{x:p(70)*window.innerWidth,y:p(40)*window.innerHeight},{x:p(70)*window.innerWidth,y:p(40)*window.innerHeight},{x:p(70)*window.innerWidth,y:p(40)*window.innerHeight},{x:p(70)*window.innerWidth,y:p(40)*window.innerHeight},{x:p(70)*window.innerWidth,y:p(40)*window.innerHeight},{x:p(70)*window.innerWidth,y:p(40)*window.innerHeight}],v=[[0,1],[1,2],[1,3],[1,3],[1,4],[1,5],[2,0],[2,4],[3,0],[3,5],[5,2]],b=[{title:"ID (#)",dataIndex:"id",key:"id"},{title:"Score",dataIndex:"score",key:"score"}];var E=function(){var e=Object(a.useState)(v),n=Object(l.a)(e,2),t=n[0],r=n[1],c=Object(a.useState)(w),s=Object(l.a)(c,2),u=s[0],m=s[1],E=Object(a.useState)(h),k=Object(l.a)(E,2),y=k[0],O=k[1],j=Object(a.useState)(null),x=Object(l.a)(j,2),N=x[0],I=x[1],S=Object(a.useState)(1),H=Object(l.a)(S,2),W=H[0],L=H[1],P=Object(a.useState)(3),B=Object(l.a)(P,2),C=B[0],M=B[1];f.a.reset();var J=new Set;t.forEach((function(e){var n=Object(l.a)(e,2),t=n[0],a=n[1];f.a.link(t,a),J.add(t),J.add(a)})),u.filter((function(e){return!J.has(e)})).forEach((function(e){return f.a.link(e,e)}));var z=[];f.a.rank(.81,1e-6,(function(e,n){z[e]=n.toFixed(3)}));var A=function(e){return t.filter((function(n){return Object(l.a)(n,1)[0]===e})).map((function(e){var n=Object(l.a)(e,2);n[0];return n[1]}))},D=z.map((function(e,n){return{id:n,score:e}})).sort((function(e,n){return n.score-e.score}));return console.log(D),o.a.createElement("div",{className:"app-wrapper"},o.a.createElement("div",{className:"page-ranks"},o.a.createElement(g.c,{columns:b,dataSource:D,pagination:{hideOnSinglePage:!0,defaultPageSize:1e7}})),o.a.createElement("div",{className:"visual-main"},u.map((function(e,n){return o.a.createElement(d,{key:n,id:e,connections:A(e),value:z[n],position:y[n],hover:N,setHover:I})}))),o.a.createElement("div",{className:"connection-form"},"Link"," ",o.a.createElement(g.b,{addonBefore:"Page",value:W,onChange:function(e){return L(parseInt(e.target.value,10)||0)}})," ","to"," ",o.a.createElement(g.b,{addonBefore:"Page",value:C,onChange:function(e){return M(parseInt(e.target.value,10)||0)}})," ",o.a.createElement(g.a,{onClick:function(){Number.isInteger(W)&&Number.isInteger(C)?W===C||W>u.length||W<0||C>u.length||C<0?g.e.open({message:"Pages don't work!",placement:"topLeft",duration:1,closeIcon:!1,style:{background:"#ff4444"}}):(g.e.open({message:"Linking page ".concat(W," to page ").concat(C,"..."),placement:"topLeft",duration:2,closeIcon:!1,style:{background:"#03c4a1"}}),r((function(){return[].concat(Object(i.a)(t),[[W,C]])}))):g.e.open({message:"Invalid page numbers!",placement:"topLeft",duration:1,closeIcon:!1,style:{background:"#ff4444"}})}},"Go!")),o.a.createElement("div",{className:"add-form"},o.a.createElement(g.a,{onClick:function(){m((function(){return[].concat(Object(i.a)(u),[u.length])})),O((function(){return[].concat(Object(i.a)(y),[{x:p(70)*window.innerWidth,y:p(40)*window.innerHeight}])}))}},"Add New Node")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(g.d,null,o.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.fce050e3.chunk.js.map