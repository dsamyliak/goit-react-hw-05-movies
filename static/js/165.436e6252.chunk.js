"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[165],{1165:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var r=n(885),c=n(2791),i=n(501),a=n(6871),s=n(5861),u=n(7757),o=n.n(u),d=n(4569),h=n.n(d);function f(){return(f=(0,s.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h().get("https://api.themoviedb.org/3/trending/movie/day?api_key=c0978ead9c0d89a450cd9d2213b423d3");case 3:return t=e.sent,e.abrupt("return",t);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var l=n(184),p=function(){var e=(0,c.useState)([]),t=(0,r.Z)(e,2),n=t[0],s=t[1],u=(0,a.TH)();return(0,c.useEffect)((function(){(function(){return f.apply(this,arguments)})().then((function(e){s(e.data.results)}))}),[]),(0,l.jsxs)("main",{children:[(0,l.jsx)("h1",{children:"Trending today:"}),(0,l.jsx)("ul",{children:n.map((function(e){return(0,l.jsx)("li",{children:(0,l.jsx)(i.rU,{to:"/movies/".concat(e.id),state:{from:u},children:e.title})},e.id)}))})]})}}}]);
//# sourceMappingURL=165.436e6252.chunk.js.map