(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{143:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return o});var i=a(0),r=a(250),n=a(163),s=a(261),l=a(158),u=a(165);t.default=function(e){var t=e.data,a=e.pageContext,o=a.param,c=a.currentPage,m=a.totalPage,d=a.totalCount;return i.createElement(n.a,null,i.createElement(u.a,{title:"*"===o?"Blog":"Category: "+o,description:"*"===o?"List of all posts":"List of posts categorized as "+o}),i.createElement(s.a,{items:t.posts.edges,header:"*"===o?void 0:i.createElement("div",null,d+" posts categorized as ",i.createElement("span",{style:{fontStyle:"italic"}},'"'+o+'"')),currentPage:c,onPageChange:function(e){return Object(r.a)(Object(l.a)(e-1,"category","*"===o?void 0:o))},totalPage:m}))};var o="2231036976"},158:function(e,t,a){"use strict";a.d(t,"b",function(){return n}),a.d(t,"a",function(){return s});var i=a(191),r=a(199),n=function(e){return r(""+e,"YYYY-MM-DD HH:mm").format("MMMM Do, YYYY HH:mm")},s=function(e,t,a){void 0===e&&(e=0);var r="/blog",n=a?i.paramCase(a):"";return n&&("category"===t?r="/blog/categories/"+n:"tag"===t&&(r="/blog/tags/"+n)),0!==e&&(r=r+"/pages/"+(e+1)),r}},159:function(e,t,a){"use strict";a.d(t,"a",function(){return c});var i=a(7),r=a.n(i),n=a(0),s={boxColor:"rgba(0, 0, 0, .87)",textColor:"rgba(255, 255, 255, .9)"},l={boxColor:"rgba(255, 255, 255, 0)",textColor:"rgba(0, 0, 0, .6)"},u={boxColor:"rgba(255, 255, 255, .9)",textColor:"rgba(0, 0, 0, .85)"},o={boxColor:"rgba(255, 255, 255, 0)",textColor:"rgba(255, 255, 255, .9)"},c=function(e){function t(){for(var t,a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(t=e.call.apply(e,[this].concat(i))||this).state={isMouseOn:!1},t.handleMouseEnter=function(){return t.setState({isMouseOn:!0})},t.handleMouseLeave=function(){return t.setState({isMouseOn:!1})},t}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,a=e.inverted,i=void 0!==a&&a,r=this.state.isMouseOn,c=i?"rgba(255, 255, 255, .9)":"rgba(0, 0, 0, .13)",m=i?r?u:o:r?s:l;return n.createElement("span",{style:{backgroundColor:m.boxColor,boxShadow:"inset 0 -2px 0px 0px "+c,color:m.textColor},onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave},t)},t}(n.Component)},163:function(e,t,a){"use strict";var i=a(0);a(187),a(188),a(189),a(190);t.a=function(e){var t=e.children;return i.createElement("div",null,t)}},165:function(e,t,a){"use strict";var i=a(166),r=a(0),n=a(197),s=a.n(n);t.a=function(e){var t=e.lang,a=void 0===t?"en":t,n=e.keywords,l=void 0===n?[]:n,u=e.title,o=e.description,c=void 0===o?"":o,m=i.data.site.siteMetadata,d=c||m.description,p=[{name:"description",content:d},{property:"og:title",content:u},{property:"og:site_name",content:m.title},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:m.author},{name:"twitter:title",content:u},{name:"twitter:description",content:d}];return r.createElement(s.a,{htmlAttribute:{lang:a},link:[{rel:"stylesheet",href:"https://cdn.rawgit.com/jpswalsh/academicons/master/css/academicons.min.css"}],title:u,titleTemplate:"%s | "+m.title,meta:p.concat(l.length?{name:"keywords",content:l.join(", ")}:[])})}},166:function(e){e.exports={data:{site:{siteMetadata:{title:"Choi, Woohyeok",description:"Choi, Woohyeok's personal website and blog.",author:"Choi, Woohyeok (woohyeok.choi@kaist.ac.kr)"}}}}},174:function(e,t,a){"use strict";var i=a(0),r=a(555),n=a(551),s=a(159);t.a=function(){return i.createElement(r.a,{inverted:!0,padded:!0,vertical:!0,textAlign:"center"},i.createElement(n.a,null,i.createElement("p",null,"Made by Choi, Woohyeok (woohyeok.choi (at) kaist.ac.kr) © 2019; built with ",i.createElement("a",{href:"https://www.gatsbyjs.org",target:"_blank"},i.createElement(s.a,{inverted:!0,children:"Gatsby"})),"; sources are available at ",i.createElement("a",{href:"https://github.com/woohyeok-choi/woohyeok-choi.github.io",target:"_blank"},i.createElement(s.a,{inverted:!0,children:"this repo."})))))}},180:function(e,t,a){"use strict";var i=a(11),r=a(26),n=a(27),s=a(17),l=[].sort,u=[1,2,3];i(i.P+i.F*(s(function(){u.sort(void 0)})||!s(function(){u.sort(null)})||!a(184)(l)),"Array",{sort:function(e){return void 0===e?l.call(n(this)):l.call(n(this),r(e))}})},181:function(e){e.exports={data:{tags:{group:[{fieldValue:"Active workstation",totalCount:1},{fieldValue:"Activity recognition",totalCount:1},{fieldValue:"Exergame",totalCount:2},{fieldValue:"GatsbyJs",totalCount:1},{fieldValue:"Group fitness",totalCount:1},{fieldValue:"Just-in-time intervention",totalCount:1},{fieldValue:"Misc.",totalCount:1},{fieldValue:"Office furniture",totalCount:1},{fieldValue:"React",totalCount:1},{fieldValue:"Sedentariness",totalCount:1},{fieldValue:"Swimming",totalCount:2},{fieldValue:"Under-desk elliptical trainer",totalCount:1},{fieldValue:"Underwater network",totalCount:1}]}}}},182:function(e){e.exports={data:{categories:{group:[{fieldValue:"Development",totalCount:1},{fieldValue:"Notice",totalCount:1},{fieldValue:"Research",totalCount:4}],totalCount:6}}}},184:function(e,t,a){"use strict";var i=a(17);e.exports=function(e,t){return!!e&&i(function(){t?e.call(null,function(){},1):e.call(null)})}},185:function(e){e.exports={data:{posts:{edges:[{node:{frontmatter:{title:"How to build this web site"},htmlAst:{type:"root",children:[{type:"element",tagName:"p",properties:{className:["markdown-paragraph"]},children:[{type:"text",value:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. At risus viverra adipiscing at in. Vitae et leo duis ut. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Quis vel eros donec ac odio tempor orci dapibus. Duis ut diam quam nulla porttitor massa id. Egestas erat imperdiet sed euismod nisi porta. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Blandit cursus risus at ultrices mi tempus imperdiet nulla. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Sodales ut eu sem integer vitae justo. Lobortis mattis aliquam faucibus purus in massa tempor nec. Nunc sed augue lacus viverra vitae congue. Dignissim enim sit amet venenatis urna cursus eget nunc scelerisque. Id cursus metus aliquam eleifend. Viverra nam libero justo laoreet sit."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{className:["markdown-paragraph"]},children:[{type:"text",value:"Sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. Ultrices gravida dictum fusce ut placerat orci. Blandit cursus risus at ultrices mi tempus imperdiet nulla. Lacus vel facilisis volutpat est velit egestas dui id. Malesuada proin libero nunc consequat interdum varius sit amet mattis. Magna etiam tempor orci eu. Est sit amet facilisis magna etiam tempor orci. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Velit egestas dui id ornare arcu odio ut sem. Odio tempor orci dapibus ultrices in iaculis. Ac turpis egestas sed tempus urna et. Amet nisl purus in mollis nunc. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Varius quam quisque id diam vel quam. Est ullamcorper eget nulla facilisi. Sed euismod nisi porta lorem mollis. Nam at lectus urna duis convallis convallis tellus. Eget duis at tellus at urna. A cras semper auctor neque vitae tempus quam pellentesque."}]}],data:{quirksMode:!1}},fields:{slug:"/blog/categories/development/posts/2019-03-08-15-00-how-to-build-this-web-site"}}},{node:{frontmatter:{title:"Welcome to my web site"},htmlAst:{type:"root",children:[{type:"element",tagName:"p",properties:{className:["markdown-paragraph"]},children:[{type:"text",value:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. At risus viverra adipiscing at in. Vitae et leo duis ut. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Quis vel eros donec ac odio tempor orci dapibus. Duis ut diam quam nulla porttitor massa id. Egestas erat imperdiet sed euismod nisi porta. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Blandit cursus risus at ultrices mi tempus imperdiet nulla. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Sodales ut eu sem integer vitae justo. Lobortis mattis aliquam faucibus purus in massa tempor nec. Nunc sed augue lacus viverra vitae congue. Dignissim enim sit amet venenatis urna cursus eget nunc scelerisque. Id cursus metus aliquam eleifend. Viverra nam libero justo laoreet sit."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{className:["markdown-paragraph"]},children:[{type:"element",tagName:"img",properties:{src:"./test.png"},children:[]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{className:["markdown-paragraph"]},children:[{type:"text",value:"Sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. Ultrices gravida dictum fusce ut placerat orci. Blandit cursus risus at ultrices mi tempus imperdiet nulla. Lacus vel facilisis volutpat est velit egestas dui id. Malesuada proin libero nunc consequat interdum varius sit amet mattis. Magna etiam tempor orci eu. Est sit amet facilisis magna etiam tempor orci. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Velit egestas dui id ornare arcu odio ut sem. Odio tempor orci dapibus ultrices in iaculis. Ac turpis egestas sed tempus urna et. Amet nisl purus in mollis nunc. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Varius quam quisque id diam vel quam. Est ullamcorper eget nulla facilisi. Sed euismod nisi porta lorem mollis. Nam at lectus urna duis convallis convallis tellus. Eget duis at tellus at urna. A cras semper auctor neque vitae tempus quam pellentesque."}]}],data:{quirksMode:!1}},fields:{slug:"/blog/categories/notice/posts/2019-03-07-19-56-welcome-to-my-web-site"}}},{node:{frontmatter:{title:"Just-in-time health intervention for prevention of prolonged sedentary behavior"},htmlAst:{type:"root",children:[{type:"element",tagName:"p",properties:{className:["markdown-paragraph"]},children:[{type:"text",value:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. At risus viverra adipiscing at in. Vitae et leo duis ut. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Quis vel eros donec ac odio tempor orci dapibus. Duis ut diam quam nulla porttitor massa id. Egestas erat imperdiet sed euismod nisi porta. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Blandit cursus risus at ultrices mi tempus imperdiet nulla. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Sodales ut eu sem integer vitae justo. Lobortis mattis aliquam faucibus purus in massa tempor nec. Nunc sed augue lacus viverra vitae congue. Dignissim enim sit amet venenatis urna cursus eget nunc scelerisque. Id cursus metus aliquam eleifend. Viverra nam libero justo laoreet sit."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{className:["markdown-paragraph"]},children:[{type:"text",value:"Sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. Ultrices gravida dictum fusce ut placerat orci. Blandit cursus risus at ultrices mi tempus imperdiet nulla. Lacus vel facilisis volutpat est velit egestas dui id. Malesuada proin libero nunc consequat interdum varius sit amet mattis. Magna etiam tempor orci eu. Est sit amet facilisis magna etiam tempor orci. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Velit egestas dui id ornare arcu odio ut sem. Odio tempor orci dapibus ultrices in iaculis. Ac turpis egestas sed tempus urna et. Amet nisl purus in mollis nunc. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Varius quam quisque id diam vel quam. Est ullamcorper eget nulla facilisi. Sed euismod nisi porta lorem mollis. Nam at lectus urna duis convallis convallis tellus. Eget duis at tellus at urna. A cras semper auctor neque vitae tempus quam pellentesque."}]}],data:{quirksMode:!1}},fields:{slug:"/blog/categories/research/posts/2017-05-01-00-00-just-in-time-health-intervention-for-prevention-of-prolonged-sedentary-behavior"}}},{node:{frontmatter:{title:"Exploring user experiences for active workstations"},htmlAst:{type:"root",children:[{type:"element",tagName:"p",properties:{className:["markdown-paragraph"]},children:[{type:"text",value:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. At risus viverra adipiscing at in. Vitae et leo duis ut. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Quis vel eros donec ac odio tempor orci dapibus. Duis ut diam quam nulla porttitor massa id. Egestas erat imperdiet sed euismod nisi porta. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Blandit cursus risus at ultrices mi tempus imperdiet nulla. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Sodales ut eu sem integer vitae justo. Lobortis mattis aliquam faucibus purus in massa tempor nec. Nunc sed augue lacus viverra vitae congue. Dignissim enim sit amet venenatis urna cursus eget nunc scelerisque. Id cursus metus aliquam eleifend. Viverra nam libero justo laoreet sit."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{className:["markdown-paragraph"]},children:[{type:"text",value:"Sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. Ultrices gravida dictum fusce ut placerat orci. Blandit cursus risus at ultrices mi tempus imperdiet nulla. Lacus vel facilisis volutpat est velit egestas dui id. Malesuada proin libero nunc consequat interdum varius sit amet mattis. Magna etiam tempor orci eu. Est sit amet facilisis magna etiam tempor orci. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Velit egestas dui id ornare arcu odio ut sem. Odio tempor orci dapibus ultrices in iaculis. Ac turpis egestas sed tempus urna et. Amet nisl purus in mollis nunc. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Varius quam quisque id diam vel quam. Est ullamcorper eget nulla facilisi. Sed euismod nisi porta lorem mollis. Nam at lectus urna duis convallis convallis tellus. Eget duis at tellus at urna. A cras semper auctor neque vitae tempus quam pellentesque."}]}],data:{quirksMode:!1}},fields:{slug:"/blog/categories/research/posts/2015-06-01-00-00-exploring-user-experiences-for-active-workstations"}}},{node:{frontmatter:{title:"Developing multi-player exertion games for group fitness swimming"},htmlAst:{type:"root",children:[{type:"element",tagName:"p",properties:{className:["markdown-paragraph"]},children:[{type:"text",value:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. At risus viverra adipiscing at in. Vitae et leo duis ut. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Quis vel eros donec ac odio tempor orci dapibus. Duis ut diam quam nulla porttitor massa id. Egestas erat imperdiet sed euismod nisi porta. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Blandit cursus risus at ultrices mi tempus imperdiet nulla. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Sodales ut eu sem integer vitae justo. Lobortis mattis aliquam faucibus purus in massa tempor nec. Nunc sed augue lacus viverra vitae congue. Dignissim enim sit amet venenatis urna cursus eget nunc scelerisque. Id cursus metus aliquam eleifend. Viverra nam libero justo laoreet sit."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{className:["markdown-paragraph"]},children:[{type:"text",value:"Sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. Ultrices gravida dictum fusce ut placerat orci. Blandit cursus risus at ultrices mi tempus imperdiet nulla. Lacus vel facilisis volutpat est velit egestas dui id. Malesuada proin libero nunc consequat interdum varius sit amet mattis. Magna etiam tempor orci eu. Est sit amet facilisis magna etiam tempor orci. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Velit egestas dui id ornare arcu odio ut sem. Odio tempor orci dapibus ultrices in iaculis. Ac turpis egestas sed tempus urna et. Amet nisl purus in mollis nunc. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Varius quam quisque id diam vel quam. Est ullamcorper eget nulla facilisi. Sed euismod nisi porta lorem mollis. Nam at lectus urna duis convallis convallis tellus. Eget duis at tellus at urna. A cras semper auctor neque vitae tempus quam pellentesque."}]}],data:{quirksMode:!1}},fields:{slug:"/blog/categories/research/posts/2014-04-01-00-00-developing-multi-player-exertion-games-for-group-fitness-swimming"}}},{node:{frontmatter:{title:"Developing multi-player exertion games for underwater environment"},htmlAst:{type:"root",children:[{type:"element",tagName:"h1",properties:{},children:[{type:"text",value:"Motivation"}]},{type:"text",value:"\n"},{type:"element",tagName:"h1",properties:{},children:[]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{className:["markdown-paragraph"]},children:[{type:"text",value:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. At risus viverra adipiscing at in. Vitae et leo duis ut. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Quis vel eros donec ac odio tempor orci dapibus. Duis ut diam quam nulla porttitor massa id. Egestas erat imperdiet sed euismod nisi porta. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Blandit cursus risus at ultrices mi tempus imperdiet nulla. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Sodales ut eu sem integer vitae justo. Lobortis mattis aliquam faucibus purus in massa tempor nec. Nunc sed augue lacus viverra vitae congue. Dignissim enim sit amet venenatis urna cursus eget nunc scelerisque. Id cursus metus aliquam eleifend. Viverra nam libero justo laoreet sit."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{className:["markdown-paragraph"]},children:[{type:"text",value:"Sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. Ultrices gravida dictum fusce ut placerat orci. Blandit cursus risus at ultrices mi tempus imperdiet nulla. Lacus vel facilisis volutpat est velit egestas dui id. Malesuada proin libero nunc consequat interdum varius sit amet mattis. Magna etiam tempor orci eu. Est sit amet facilisis magna etiam tempor orci. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Velit egestas dui id ornare arcu odio ut sem. Odio tempor orci dapibus ultrices in iaculis. Ac turpis egestas sed tempus urna et. Amet nisl purus in mollis nunc. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Varius quam quisque id diam vel quam. Est ullamcorper eget nulla facilisi. Sed euismod nisi porta lorem mollis. Nam at lectus urna duis convallis convallis tellus. Eget duis at tellus at urna. A cras semper auctor neque vitae tempus quam pellentesque."}]}],data:{quirksMode:!1}},fields:{slug:"/blog/categories/research/posts/2013-03-01-00-00-developing-multi-player-exertion-games-for-underwater-environment"}}}]}}}},186:function(e,t,a){"use strict";var i=a(0),r=a(558),n=a(551),s=a(262),l=a(555),u=a(557),o=(a(167),a(182)),c=a(553),m=a(158),d=function(e){var t=e.items;return i.createElement(c.a,{link:!0,bulleted:!0},t.map(function(e){var t=e.category,a=e.link,r=e.count;return i.createElement(c.a.Item,{key:t,href:a},t," (",r,")")}))},p=function(){var e=o.data.categories,t=e.totalCount,a=e.group,r=[{category:"All",count:t,link:Object(m.a)(0,"category")}].concat(a.map(function(e){var t=e.fieldValue;return{category:t,count:e.totalCount,link:Object(m.a)(0,"category",t)}}));return i.createElement(d,{items:r})},g=(a(180),a(181)),v=a(321),f=function(e){var t=e.items;return i.createElement(v.a.Group,null,t.map(function(e){var t=e.tag,a=e.link,r=e.count;return i.createElement(v.a,{key:t,as:"a",href:a},t," (",r,")")}))},b=function(e){var t=e.limit,a=void 0===t?10:t,r=g.data.tags.group;return i.createElement(f,{items:r.sort(function(e,t){var a=e.totalCount;return t.totalCount-a}).slice(0,a).map(function(e){var t=e.fieldValue;return{tag:t,count:e.totalCount,link:Object(m.a)(0,"tag",t)}})})},h=a(185),y=function(){var e=h.data.posts;return i.createElement(c.a,{link:!0,bulleted:!0},e.edges.map(function(e){var t=e.node;return i.createElement(c.a.Item,{key:t.fields.slug,as:"a",href:t.fields.slug,content:t.frontmatter.title})}))},q=a(174),E=a(159);t.a=function(e){var t=e.children;return i.createElement("div",null,i.createElement(r.a,{secondary:!0,pointing:!0,fixed:"top",inverted:!0,style:{backgroundColor:"#1b1c1d"}},i.createElement(n.a,null,i.createElement(r.a.Item,{key:"header",header:!0,content:"CHOI, WOOHYEOK's BLOG",style:{fontSize:"1.5em",lineHeight:"0.1em"}}),i.createElement(r.a.Item,{key:"main",content:"Go to main page",position:"right",href:"/"}))),i.createElement("div",{style:{paddingTop:"7.0em"}},i.createElement(s.a,{centered:!0,container:!0,stackable:!0},i.createElement(s.a.Column,{width:12},t),i.createElement(s.a.Column,{width:4},i.createElement(l.a,{color:"grey",vertical:!0,padded:!0},i.createElement(u.a,{as:"h4",content:"Categories"}),i.createElement(p,null)),i.createElement(l.a,{color:"grey",vertical:!0,padded:!0},i.createElement(u.a,{as:"h4"},"Tags",i.createElement(u.a.Subheader,{style:{display:"inline",float:"right"},as:"a",href:"/blog/tags"},i.createElement(E.a,{inverted:!1,children:"View all tags..."}))),i.createElement(b,{limit:10})),i.createElement(l.a,{color:"grey",vertical:!0,padded:!0},i.createElement(u.a,{as:"h4",content:"Recent Posts"}),i.createElement(y,null)))),i.createElement(q.a,null)))}},206:function(e,t,a){var i;e.exports=(i=a(251))&&i.default||i},250:function(e,t,a){"use strict";var i=a(0),r=a.n(i),n=a(4),s=a.n(n),l=a(34);a.d(t,"a",function(){return l.navigate});a(206),r.a.createContext({});s.a.object,s.a.string.isRequired,s.a.func,s.a.func},251:function(e,t,a){"use strict";a.r(t);a(36);var i=a(0),r=a.n(i),n=a(4),s=a.n(n),l=a(55),u=a(2),o=function(e){var t=e.location,a=u.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};o.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=o},252:function(e,t,a){"use strict";a(253);var i=a(5),r=a(75),n=a(18),s=/./.toString,l=function(e){a(19)(RegExp.prototype,"toString",e,!0)};a(17)(function(){return"/a/b"!=s.call({source:"a",flags:"b"})})?l(function(){var e=i(this);return"/".concat(e.source,"/","flags"in e?e.flags:!n&&e instanceof RegExp?r.call(e):void 0)}):"toString"!=s.name&&l(function(){return s.call(this)})},253:function(e,t,a){a(18)&&"g"!=/./g.flags&&a(25).f(RegExp.prototype,"flags",{configurable:!0,get:a(75)})},254:function(e,t,a){var i=a(255)();e.exports=i},255:function(e,t,a){var i=a(256),r=a(242),n=a(220);e.exports=function(e){return function(t,a,s){return s&&"number"!=typeof s&&r(t,a,s)&&(a=s=void 0),t=n(t),void 0===a?(a=t,t=0):a=n(a),s=void 0===s?t<a?1:-1:n(s),i(t,a,s,e)}}},256:function(e,t){var a=Math.ceil,i=Math.max;e.exports=function(e,t,r,n){for(var s=-1,l=i(a((t-e)/(r||1)),0),u=Array(l);l--;)u[n?l:++s]=e,e+=r;return u}},261:function(e,t,a){"use strict";a(252),a(175);var i=a(0),r=a.n(i),n=a(554),s=a(552),l=a(321),u=a(557),o=a(555),c=a(73),m=a.n(c),d=a(179),p=a.n(d),g=a(153),v=a.n(g),f=a(154),b=a.n(f),h=a(155),y=a.n(h),q=a(156),E=a.n(q),x=a(157),w=a.n(x),k=a(33),A=a.n(k),C=a(32),O=a.n(C),j=a(171),P=a.n(j),N=a(169),M=a.n(N),I=a(160),S=a.n(I),V=(a(4),a(162)),R=a.n(V),D=function(e){return{active:!1,type:"ellipsisItem",value:e}},L=function(e){return{active:!1,type:"prevItem",value:Math.max(1,e-1)}},B=function(e,t){return{active:!1,type:"nextItem",value:Math.min(e+1,t)}},H=function(e){return{active:!1,type:"lastItem",value:e}},T=a(254),Y=a.n(T),G=function(e,t,a){var i=t-1;return(i!==e+1?D:a)(i)},K=function(e,t,a){var i=e+1;return(i!==t-1?D:a)(i)},U=function(e,t,a){return P()(Y()(e,t+1),a)},z=function(e){var t,a,i,r={activePage:+(t=e).activePage,boundaryRange:+t.boundaryRange,hideEllipsis:!!t.hideEllipsis,siblingRange:+t.siblingRange,totalPages:+t.totalPages},n=r.activePage,s=r.totalPages,l=function(e){return function(t){return{active:e===t,type:"pageItem",value:t}}}(n),u=(i=(a=r).boundaryRange,1+(a.hideEllipsis?0:2)+2*a.siblingRange+2*i>=a.totalPages?U(1,s,l):function(e,t){var a=e.activePage,i=e.boundaryRange,r=e.hideEllipsis,n=e.siblingRange,s=e.totalPages,l=r?0:1,u=i,o=U(1,u,t),c=s+1-i,m=U(c,s,t),d=Math.min(Math.max(a-n,u+l+1),c-l-2*n-1),p=d+2*n,g=U(d,p,t);return R()(o).concat([!r&&G(u,d,t)],R()(g),[!r&&K(p,c,t)],R()(m)).filter(Boolean)}(r,l));return[{active:!1,type:"firstItem",value:1},L(n)].concat(R()(u),[B(n,s),H(s)])},Q=a(288),W=a(304),J=a(558),F=a(246),_=a.n(F),X=a(296),Z=a(247),$=function(e){function t(){var e,a;v()(this,t);for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];return a=y()(this,(e=E()(t)).call.apply(e,[this].concat(r))),O()(A()(A()(a)),"handleClick",function(e){"ellipsisItem"!==a.props.type&&S()(a.props,"onClick",e,a.props)}),O()(A()(A()(a)),"handleKeyDown",function(e){S()(a.props,"onKeyDown",e,a.props),_.a.getCode(e)===_.a.Enter&&S()(a.props,"onClick",e,a.props)}),O()(A()(A()(a)),"handleOverrides",function(){return{onClick:a.handleClick,onKeyDown:a.handleKeyDown}}),a}return w()(t,e),b()(t,[{key:"render",value:function(){var e=this.props,t=e.active,a=e.type,i=this.props.disabled||"ellipsisItem"===a;return Z.a.create(this.props,{defaultProps:{active:t,"aria-current":t,"aria-disabled":i,disabled:i,onClick:this.handleClick,onKeyDown:this.handleKeyDown,tabIndex:i?-1:0},overrideProps:this.handleOverrides})}}]),t}(i.Component);O()($,"handledProps",["active","disabled","onClick","onKeyDown","type"]),$.propTypes={},$.create=Object(X.b)($,function(e){return{content:e}});var ee=$,te=function(e){function t(){var e,a;v()(this,t);for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];return a=y()(this,(e=E()(t)).call.apply(e,[this].concat(r))),O()(A()(A()(a)),"handleItemClick",function(e,t){var i=t.value;+a.state.activePage!=+i&&(a.trySetState({activePage:i}),S()(a.props,"onPageChange",e,p()({},a.props,{activePage:i})))}),O()(A()(A()(a)),"handleItemOverrides",function(e,t,i){return function(r){return{active:e,type:t,key:"".concat(t,"-").concat(i),onClick:function(e,t){S()(r,"onClick",e,t),a.handleItemClick(e,t)}}}}),a}return w()(t,e),b()(t,[{key:"render",value:function(){var e=this,a=this.props,i=a["aria-label"],n=a.boundaryRange,s=a.disabled,l=a.ellipsisItem,u=a.siblingRange,o=a.totalPages,c=this.state.activePage,d=z({activePage:c,boundaryRange:n,hideEllipsis:M()(l),siblingRange:u,totalPages:o}),p=Object(Q.a)(t,this.props);return r.a.createElement(J.a,m()({},p,{"aria-label":i,pagination:!0,role:"navigation"}),P()(d,function(t){var a=t.active,i=t.type,r=t.value;return ee.create(e.props[i],{defaultProps:{content:r,disabled:s,value:r},overrideProps:e.handleItemOverrides(a,i,r)})}))}}]),t}(W.a);O()(te,"autoControlledProps",["activePage"]),O()(te,"defaultProps",{"aria-label":"Pagination Navigation",boundaryRange:1,ellipsisItem:"...",firstItem:{"aria-label":"First item",content:"«"},lastItem:{"aria-label":"Last item",content:"»"},nextItem:{"aria-label":"Next item",content:"⟩"},pageItem:{},prevItem:{"aria-label":"Previous item",content:"⟨"},siblingRange:1}),O()(te,"Item",ee),O()(te,"handledProps",["activePage","aria-label","boundaryRange","defaultActivePage","disabled","ellipsisItem","firstItem","lastItem","nextItem","onPageChange","pageItem","prevItem","siblingRange","totalPages"]),te.propTypes={};var ae=a(158),ie=a(186),re=function(e){var t=e.data.node,a=t.frontmatter,r=t.fields,u=t.excerpt,o=a.title,c=a.date,m=a.preview,d=r.slug,p=r.category,g=r.tags;return i.createElement(n.a,{style:{width:"100%"},href:d},i.createElement(n.a.Content,null,i.createElement(s.a.Group,null,i.createElement(s.a,null,m&&i.createElement(s.a.Image,{size:"small",src:m.childImageSharp.resize.src}),i.createElement(s.a.Content,null,i.createElement(s.a.Extra,{style:{marginBottom:"5px"}},p.name),i.createElement(s.a.Header,null,o),i.createElement(s.a.Meta,null,Object(ae.b)(c)),i.createElement(s.a.Description,null,u))))),g&&i.createElement(n.a.Content,{extra:!0},i.createElement(l.a.Group,null,g.map(function(e){var t=e.name;return i.createElement(l.a,{key:t,content:t,size:"mini"})}))))};t.a=function(e){var t=e.header,a=e.items,r=e.currentPage,n=e.totalPage,s=e.onPageChange;return i.createElement(ie.a,null,t&&i.createElement(u.a,{as:"h1",dividing:!0},t),a?a.map(function(e){return i.createElement(re,{key:e.node.id,data:e})}):i.createElement(u.a,{as:"h1",content:"No post"}),i.createElement(o.a,{vertical:!0,padded:!0,textAlign:"center"},i.createElement(te,{totalPages:n,activePage:r,ellipsisItem:void 0,boundaryRange:0,siblingRange:2,prevItem:void 0,nextItem:void 0,onPageChange:function(e){function t(t,a){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e,t){var a=t.activePage;s(a)})})))}},262:function(e,t,a){"use strict";a(162);var i=a(73),r=a.n(i),n=a(151),s=a.n(n),l=(a(4),a(0)),u=a.n(l),o=a(178),c=a(288),m=a(289),d=a(296);function p(e){var t=e.children,a=e.className,i=e.computer,n=e.color,l=e.floated,d=e.largeScreen,g=e.mobile,v=e.only,f=e.stretched,b=e.tablet,h=e.textAlign,y=e.verticalAlign,q=e.widescreen,E=e.width,x=s()(n,Object(o.a)(f,"stretched"),Object(o.c)(v,"only"),Object(o.d)(h),Object(o.e)(l,"floated"),Object(o.f)(y),Object(o.g)(i,"wide computer"),Object(o.g)(d,"wide large screen"),Object(o.g)(g,"wide mobile"),Object(o.g)(b,"wide tablet"),Object(o.g)(q,"wide widescreen"),Object(o.g)(E,"wide"),"column",a),w=Object(c.a)(p,e),k=Object(m.a)(p,e);return u.a.createElement(k,r()({},w,{className:x}),t)}p.handledProps=["as","children","className","color","computer","floated","largeScreen","mobile","only","stretched","tablet","textAlign","verticalAlign","widescreen","width"],p.propTypes={},p.create=Object(d.b)(p,function(e){return{children:e}});var g=p;function v(e){var t=e.centered,a=e.children,i=e.className,n=e.color,l=e.columns,d=e.divided,p=e.only,g=e.reversed,f=e.stretched,b=e.textAlign,h=e.verticalAlign,y=s()(n,Object(o.a)(t,"centered"),Object(o.a)(d,"divided"),Object(o.a)(f,"stretched"),Object(o.c)(p,"only"),Object(o.c)(g,"reversed"),Object(o.d)(b),Object(o.f)(h),Object(o.g)(l,"column",!0),"row",i),q=Object(c.a)(v,e),E=Object(m.a)(v,e);return u.a.createElement(E,r()({},q,{className:y}),a)}v.handledProps=["as","centered","children","className","color","columns","divided","only","reversed","stretched","textAlign","verticalAlign"],v.propTypes={};var f=v;function b(e){var t=e.celled,a=e.centered,i=e.children,n=e.className,l=e.columns,d=e.container,p=e.divided,g=e.doubling,v=e.inverted,f=e.padded,h=e.relaxed,y=e.reversed,q=e.stackable,E=e.stretched,x=e.textAlign,w=e.verticalAlign,k=s()("ui",Object(o.a)(a,"centered"),Object(o.a)(d,"container"),Object(o.a)(g,"doubling"),Object(o.a)(v,"inverted"),Object(o.a)(q,"stackable"),Object(o.a)(E,"stretched"),Object(o.b)(t,"celled"),Object(o.b)(p,"divided"),Object(o.b)(f,"padded"),Object(o.b)(h,"relaxed"),Object(o.c)(y,"reversed"),Object(o.d)(x),Object(o.f)(w),Object(o.g)(l,"column",!0),"grid",n),A=Object(c.a)(b,e),C=Object(m.a)(b,e);return u.a.createElement(C,r()({},A,{className:k}),i)}b.handledProps=["as","celled","centered","children","className","columns","container","divided","doubling","inverted","padded","relaxed","reversed","stackable","stretched","textAlign","verticalAlign"],b.Column=g,b.Row=f,b.propTypes={};t.a=b}}]);
//# sourceMappingURL=component---src-templates-blog-list-category-page-tsx-40cab6b02d2908b64216.js.map