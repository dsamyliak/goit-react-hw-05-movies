"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[221],{7221:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var r=n(885),s=n(5861),c=n(7757),i=n.n(c),a=n(4569),u=n.n(a);function o(){return(o=(0,s.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u().get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=c0978ead9c0d89a450cd9d2213b423d3&language=en-US&page=1"));case 3:return n=e.sent,e.abrupt("return",n);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var h=n(6871),l=n(2791),d=n(184),p=function(){var e=(0,h.UO)().movieId,t=(0,l.useState)(""),n=(0,r.Z)(t,2),s=n[0],c=n[1],i=(0,l.useState)(0),a=(0,r.Z)(i,2),u=a[0],p=a[1];return(0,l.useEffect)((function(){(function(e){return o.apply(this,arguments)})(e).then((function(e){c(e.data.results.map((function(e){return(0,d.jsxs)("li",{children:[(0,d.jsxs)("h3",{children:["Author: ",e.author]}),(0,d.jsxs)("p",{children:["'",e.content,"'"]})]},e.id)}))),p(e.data.results.length)}))}),[e]),(0,d.jsxs)("section",{children:[(0,d.jsx)("h2",{children:"Reviews"}),(0,d.jsx)("ul",{children:0!==u?s:"No reviews for this movie"})]})}}}]);
//# sourceMappingURL=221.fdfa1d0b.chunk.js.map