(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{145:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(165),a=n(163),s=n(552),i=n(554),c=n(159);t.default=function(){return o.createElement(a.a,null,o.createElement(r.a,{title:"Page Not found"}),o.createElement(s.a,{vertical:!0,padded:!0,style:{marginLeft:"1em"}},o.createElement(i.a,{as:"h1",content:"Page Not found"}),o.createElement(i.a,{as:"h3"},o.createElement("a",{href:"/"},o.createElement(c.a,{inverted:!1},"Return to main")))))}},159:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var o=n(7),r=n.n(o),a=n(0),s={boxColor:"rgba(0, 0, 0, .87)",textColor:"rgba(255, 255, 255, .9)"},i={boxColor:"rgba(255, 255, 255, 0)",textColor:"rgba(0, 0, 0, .6)"},c={boxColor:"rgba(255, 255, 255, .9)",textColor:"rgba(0, 0, 0, .85)"},l={boxColor:"rgba(255, 255, 255, 0)",textColor:"rgba(255, 255, 255, .9)"},u=function(e){function t(){for(var t,n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))||this).state={isMouseOn:!1},t.handleMouseEnter=function(){return t.setState({isMouseOn:!0})},t.handleMouseLeave=function(){return t.setState({isMouseOn:!1})},t}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.inverted,o=void 0!==n&&n,r=this.state.isMouseOn,u=o?"rgba(255, 255, 255, .9)":"rgba(0, 0, 0, .13)",d=o?r?c:l:r?s:i;return a.createElement("span",{style:{backgroundColor:d.boxColor,boxShadow:"inset 0 -2px 0px 0px "+u,color:d.textColor},onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave},t)},t}(a.Component)},163:function(e,t,n){"use strict";var o=n(0);n(187);t.a=function(e){var t=e.children;return o.createElement("div",null,t)}},165:function(e,t,n){"use strict";var o=n(166),r=n(0),a=n(194),s=n.n(a);t.a=function(e){var t=e.lang,n=void 0===t?"en":t,a=e.keywords,i=void 0===a?[]:a,c=e.title,l=e.description,u=void 0===l?"":l,d=o.data.site.siteMetadata,h=u||d.description,p=[{name:"description",content:h},{property:"og:title",content:c},{property:"og:site_name",content:d.title},{property:"og:description",content:h},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:d.author},{name:"twitter:title",content:c},{name:"twitter:description",content:h}];return r.createElement(s.a,{htmlAttribute:{lang:n},link:[{rel:"stylesheet",href:"https://cdn.rawgit.com/jpswalsh/academicons/master/css/academicons.min.css",type:"text/css"},{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css",type:"text/css",charset:"UTF-8"},{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css",type:"text/css"},{rel:"stylesheet",href:"//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"}],title:c,titleTemplate:"%s | "+d.title,meta:p.concat(i.length?{name:"keywords",content:i.join(", ")}:[])})}},166:function(e){e.exports={data:{site:{siteMetadata:{title:"Choi, Woohyeok",description:"Choi, Woohyeok's personal website and blog.",author:"Choi, Woohyeok (woohyeok.choi@kaist.ac.kr)"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-tsx-e0f093220789dbcbc0fe.js.map