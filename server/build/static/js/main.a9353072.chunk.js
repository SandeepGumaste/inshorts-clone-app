(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{61:function(e,t,n){},91:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),s=n(21),c=n.n(s),i=(n(61),n(12)),o=n(110),l=n(103),h=n(104),j=n(105),p=n(48),m=n.n(p),u=n(2),b=Object(l.a)({header:{height:70,backgroundColor:"#fff"},logo:{height:55,margin:"auto"},menu:{color:"#000"}}),d=function(e){var t=b();return Object(u.jsx)(h.a,{className:t.header,children:Object(u.jsxs)(j.a,{children:[Object(u.jsx)(m.a,{className:t.menu}),Object(u.jsx)("img",{src:"https://assets.inshorts.com/website_assets/images/logo_inshorts.png",alt:"logo",className:t.logo})]})})},g=n(106),x=Object(l.a)((function(e){return{container:Object(i.a)({backgroundColor:"#f44336",color:"#fff",height:48,display:"flex",alignItems:"center",marginBottom:"30px"},e.breakpoints.down("md"),{display:"none"}),logo:{height:34,"&:last-child":{margin:"0 50px 0 20px"}},text:{fontWeight:300,fontSize:14,paddingLeft:50}}})),f=function(){var e=x();return Object(u.jsxs)(o.a,{className:e.container,children:[Object(u.jsxs)(g.a,{className:e.text,style:{fontWeight:300,fontSize:"14px"},children:["For the best experience use ",Object(u.jsx)("b",{style:{fontWeight:400},children:"inshorts"})," ","app on your smartphone"]}),Object(u.jsxs)(o.a,{style:{marginLeft:"auto"},children:[Object(u.jsx)("img",{src:"https://assets.inshorts.com/website_assets/images/appstore.png",alt:"apple",className:e.logo}),Object(u.jsx)("img",{src:"https://assets.inshorts.com/website_assets/images/playstore.png",alt:"google",className:e.logo})]})]})},O=n(15),w=n.n(O),v=n(33),N=n(27),k=n(34),y=n(49),S=n(50),z=n.n(S),B=function(){var e=Object(N.a)(w.a.mark((function e(t){var n,a=arguments;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:5,e.prev=1,e.next=4,z.a.get("https://inshorts-clone-app.herokuapp.com/news?page=".concat(t,"&size=").concat(n));case 4:return e.abrupt("return",e.sent);case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),_=n(107),C=n(108),D=n(109),W=Object(l.a)((function(e){return{rightContainer:Object(i.a)({margin:"5px 0 0 -50px",display:"flex",flexDirection:"column",marginBottom:"10px"},e.breakpoints.down("sm"),{margin:"5px 0"}),image:Object(i.a)({height:268,width:"80%",borderRadius:5,objectFit:"cover"},e.breakpoints.down("sm"),{width:"100%"}),component:{marginBottom:20},container:{padding:"8px",paddingBottom:"4px !important"},title:{color:"#44444d",fontWeight:300,fontSize:22,lineHeight:"27px"},author:{fontSize:"12px",color:"#808290",lineHeight:"22px"},description:{lineHeight:"22px",color:"#44444d",margin:"5px"},publisher:{fontSize:12,marginTop:"auto"}}})),H=function(e){var t=e.article,n=t.author,a=t.description,r=t.link,s=t.publisher,c=t.timestamp,i=t.title,o=t.url,l=W();return Object(u.jsx)(_.a,{className:l.component,children:Object(u.jsx)(C.a,{className:l.container,children:Object(u.jsxs)(D.a,{container:!0,children:[Object(u.jsx)(D.a,{item:!0,lg:5,md:5,sm:12,xs:12,children:Object(u.jsx)("img",{src:o,alt:"article img",className:l.image})}),Object(u.jsxs)(D.a,{item:!0,lg:7,md:7,sm:12,xs:12,className:l.rightContainer,children:[Object(u.jsx)(g.a,{className:l.title,children:i}),Object(u.jsxs)(g.a,{className:l.author,children:[Object(u.jsx)("b",{children:"short"})," by ",n," /",new Date(c).toDateString()]}),Object(u.jsx)(g.a,{className:l.description,children:a}),Object(u.jsxs)(g.a,{className:l.publisher,children:["read more at \xa0",Object(u.jsx)("a",{href:r,rel:"noreferrer",target:"_blank",style:{textDecoration:"none"},children:s})]})]})]})})})},L=function(){var e=Object(a.useState)([]),t=Object(k.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(0),c=Object(k.a)(s,2),i=c[0],o=c[1];return Object(a.useEffect)((function(){(function(){var e=Object(N.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B(i);case 2:t=e.sent,r([].concat(Object(v.a)(n),Object(v.a)(t.data)));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[i]),Object(u.jsx)(y.a,{dataLength:n.length,next:function(){return o((function(e){return e+1}))},hasMore:!0,children:n.map((function(e){return Object(u.jsx)(H,{article:e},n.indexOf(e))}))})},E=Object(l.a)((function(e){var t;return{container:(t={marginTop:110,width:"59%",margin:"0 auto"},Object(i.a)(t,e.breakpoints.down("md"),{width:"75%"}),Object(i.a)(t,e.breakpoints.down("sm"),{width:"90%"}),t)}}));var F=function(){var e=E();return Object(u.jsxs)(o.a,{children:[Object(u.jsx)(d,{}),Object(u.jsxs)(o.a,{className:e.container,children:[Object(u.jsx)(f,{}),Object(u.jsx)(L,{})]})]})};c.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(F,{})}),document.getElementById("root"))}},[[91,1,2]]]);
//# sourceMappingURL=main.a9353072.chunk.js.map