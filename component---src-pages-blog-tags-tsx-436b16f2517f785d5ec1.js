(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{149:function(e,t,i){"use strict";i.r(t);var a=i(163),s=(i(513),i(167),i(180),i(78),i(181)),r=i(0),u=i(186),n=i(552),l=i(554),o=i(318),c=i(158),m="abcdefghijklmnopqrstuvwxyz".split(""),d=function(e){var t=e.items,i=e.alphabet;return r.createElement(n.a,{padded:"very",vertical:!0,basic:!0},r.createElement(l.a,{as:"h3",content:i}),r.createElement(o.a.Group,null,t.sort(function(e,t){var i=e.tag,a=t.tag;return(""+i).localeCompare(a)}).map(function(e){var t=e.tag,i=e.count,a=e.link;return r.createElement(o.a,{key:t,href:a},t," (",i,")")})))},p=function(){var e=s.data.tags.group;return r.createElement(u.a,null,r.createElement(l.a,{as:"h1",dividing:!0},"Tags"),m.map(function(t){var i=e.filter(function(e){return e.fieldValue.toLowerCase().startsWith(t)}).map(function(e){var t=e.fieldValue;return{tag:t,count:e.totalCount,link:Object(c.a)(0,"tag",t)}});if(i&&i.length)return r.createElement(d,{key:t,items:i,alphabet:t.toUpperCase()})}))},g=i(165);t.default=function(){return r.createElement(a.a,null,r.createElement(g.a,{title:"All tags",description:"List of tags used in Choi, Woohyeok's personal blog"}),r.createElement(p,null))}},158:function(e,t,i){"use strict";i.d(t,"b",function(){return r}),i.d(t,"a",function(){return u});var a=i(188),s=i(196),r=function(e){return s(""+e,"YYYY-MM-DD HH:mm").format("MMMM Do, YYYY HH:mm")},u=function(e,t,i){void 0===e&&(e=0);var s="/blog",r=i?a.paramCase(i):"";return r&&("category"===t?s="/blog/categories/"+r:"tag"===t&&(s="/blog/tags/"+r)),0!==e&&(s=s+"/pages/"+(e+1)),s}},159:function(e,t,i){"use strict";i.d(t,"a",function(){return c});var a=i(7),s=i.n(a),r=i(0),u={boxColor:"rgba(0, 0, 0, .87)",textColor:"rgba(255, 255, 255, .9)"},n={boxColor:"rgba(255, 255, 255, 0)",textColor:"rgba(0, 0, 0, .6)"},l={boxColor:"rgba(255, 255, 255, .9)",textColor:"rgba(0, 0, 0, .85)"},o={boxColor:"rgba(255, 255, 255, 0)",textColor:"rgba(255, 255, 255, .9)"},c=function(e){function t(){for(var t,i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))||this).state={isMouseOn:!1},t.handleMouseEnter=function(){return t.setState({isMouseOn:!0})},t.handleMouseLeave=function(){return t.setState({isMouseOn:!1})},t}return s()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,i=e.inverted,a=void 0!==i&&i,s=this.state.isMouseOn,c=a?"rgba(255, 255, 255, .9)":"rgba(0, 0, 0, .13)",m=a?s?l:o:s?u:n;return r.createElement("span",{style:{backgroundColor:m.boxColor,boxShadow:"inset 0 -2px 0px 0px "+c,color:m.textColor},onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave},t)},t}(r.Component)},163:function(e,t,i){"use strict";var a=i(0);i(187);t.a=function(e){var t=e.children;return a.createElement("div",null,t)}},165:function(e,t,i){"use strict";var a=i(166),s=i(0),r=i(194),u=i.n(r);t.a=function(e){var t=e.lang,i=void 0===t?"en":t,r=e.keywords,n=void 0===r?[]:r,l=e.title,o=e.description,c=void 0===o?"":o,m=a.data.site.siteMetadata,d=c||m.description,p=[{name:"description",content:d},{property:"og:title",content:l},{property:"og:site_name",content:m.title},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:m.author},{name:"twitter:title",content:l},{name:"twitter:description",content:d}];return s.createElement(u.a,{htmlAttribute:{lang:i},link:[{rel:"stylesheet",href:"https://cdn.rawgit.com/jpswalsh/academicons/master/css/academicons.min.css",type:"text/css"},{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css",type:"text/css",charset:"UTF-8"},{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css",type:"text/css"},{rel:"stylesheet",href:"//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"}],title:l,titleTemplate:"%s | "+m.title,meta:p.concat(n.length?{name:"keywords",content:n.join(", ")}:[])})}},166:function(e){e.exports={data:{site:{siteMetadata:{title:"Choi, Woohyeok",description:"Choi, Woohyeok's personal website and blog.",author:"Choi, Woohyeok (woohyeok.choi@kaist.ac.kr)"}}}}},174:function(e,t,i){"use strict";var a=i(0),s=i(552),r=i(548),u=i(159);t.a=function(){return a.createElement(s.a,{inverted:!0,padded:!0,vertical:!0,textAlign:"center"},a.createElement(r.a,null,a.createElement("p",null,"Made by Choi, Woohyeok (woohyeok.choi (at) kaist.ac.kr) © 2019; built with ",a.createElement("a",{href:"https://www.gatsbyjs.org",target:"_blank"},a.createElement(u.a,{inverted:!0,children:"Gatsby"})),"; sources are available at ",a.createElement("a",{href:"https://github.com/woohyeok-choi/woohyeok-choi.github.io",target:"_blank"},a.createElement(u.a,{inverted:!0,children:"this repo."})))))}},180:function(e,t,i){"use strict";var a=i(11),s=i(26),r=i(27),u=i(17),n=[].sort,l=[1,2,3];a(a.P+a.F*(u(function(){l.sort(void 0)})||!u(function(){l.sort(null)})||!i(184)(n)),"Array",{sort:function(e){return void 0===e?n.call(r(this)):n.call(r(this),s(e))}})},181:function(e){e.exports={data:{tags:{group:[{fieldValue:"Active workstation",totalCount:1},{fieldValue:"Activity recognition",totalCount:1},{fieldValue:"Exergame",totalCount:2},{fieldValue:"GatsbyJs",totalCount:1},{fieldValue:"Group fitness",totalCount:1},{fieldValue:"Just-in-time intervention",totalCount:1},{fieldValue:"Misc.",totalCount:1},{fieldValue:"Office furniture",totalCount:1},{fieldValue:"React",totalCount:1},{fieldValue:"Sedentariness",totalCount:1},{fieldValue:"Swimming",totalCount:2},{fieldValue:"Under-desk elliptical trainer",totalCount:1},{fieldValue:"Underwater network",totalCount:1}]}}}},182:function(e){e.exports={data:{categories:{group:[{fieldValue:"Development",totalCount:1},{fieldValue:"Notice",totalCount:1},{fieldValue:"Research",totalCount:4}],totalCount:6}}}},184:function(e,t,i){"use strict";var a=i(17);e.exports=function(e,t){return!!e&&a(function(){t?e.call(null,function(){},1):e.call(null)})}},185:function(e){e.exports={data:{posts:{edges:[{node:{frontmatter:{title:"How to build this web site"},htmlAst:{type:"root",children:[{type:"element",tagName:"p",properties:{className:["markdown-paragraph"]},children:[{type:"text",value:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. At risus viverra adipiscing at in. Vitae et leo duis ut. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Quis vel eros donec ac odio tempor orci dapibus. Duis ut diam quam nulla porttitor massa id. Egestas erat imperdiet sed euismod nisi porta. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Blandit cursus risus at ultrices mi tempus imperdiet nulla. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Sodales ut eu sem integer vitae justo. Lobortis mattis aliquam faucibus purus in massa tempor nec. Nunc sed augue lacus viverra vitae congue. Dignissim enim sit amet venenatis urna cursus eget nunc scelerisque. Id cursus metus aliquam eleifend. Viverra nam libero justo laoreet sit."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{className:["markdown-paragraph"]},children:[{type:"text",value:"Sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. Ultrices gravida dictum fusce ut placerat orci. Blandit cursus risus at ultrices mi tempus imperdiet nulla. Lacus vel facilisis volutpat est velit egestas dui id. Malesuada proin libero nunc consequat interdum varius sit amet mattis. Magna etiam tempor orci eu. Est sit amet facilisis magna etiam tempor orci. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Velit egestas dui id ornare arcu odio ut sem. Odio tempor orci dapibus ultrices in iaculis. Ac turpis egestas sed tempus urna et. Amet nisl purus in mollis nunc. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Varius quam quisque id diam vel quam. Est ullamcorper eget nulla facilisi. Sed euismod nisi porta lorem mollis. Nam at lectus urna duis convallis convallis tellus. Eget duis at tellus at urna. A cras semper auctor neque vitae tempus quam pellentesque."}]}],data:{quirksMode:!1}},fields:{slug:"/blog/categories/development/posts/2019-03-08-15-00-how-to-build-this-web-site"}}},{node:{frontmatter:{title:"Welcome to my web site"},htmlAst:{type:"root",children:[{type:"element",tagName:"p",properties:{className:["markdown-paragraph"]},children:[{type:"text",value:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. At risus viverra adipiscing at in. Vitae et leo duis ut. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Quis vel eros donec ac odio tempor orci dapibus. Duis ut diam quam nulla porttitor massa id. Egestas erat imperdiet sed euismod nisi porta. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Blandit cursus risus at ultrices mi tempus imperdiet nulla. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Sodales ut eu sem integer vitae justo. Lobortis mattis aliquam faucibus purus in massa tempor nec. Nunc sed augue lacus viverra vitae congue. Dignissim enim sit amet venenatis urna cursus eget nunc scelerisque. Id cursus metus aliquam eleifend. Viverra nam libero justo laoreet sit."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{className:["markdown-paragraph"]},children:[{type:"element",tagName:"img",properties:{src:"./test.png"},children:[]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{className:["markdown-paragraph"]},children:[{type:"text",value:"Sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. Ultrices gravida dictum fusce ut placerat orci. Blandit cursus risus at ultrices mi tempus imperdiet nulla. Lacus vel facilisis volutpat est velit egestas dui id. Malesuada proin libero nunc consequat interdum varius sit amet mattis. Magna etiam tempor orci eu. Est sit amet facilisis magna etiam tempor orci. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Velit egestas dui id ornare arcu odio ut sem. Odio tempor orci dapibus ultrices in iaculis. Ac turpis egestas sed tempus urna et. Amet nisl purus in mollis nunc. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Varius quam quisque id diam vel quam. Est ullamcorper eget nulla facilisi. Sed euismod nisi porta lorem mollis. Nam at lectus urna duis convallis convallis tellus. Eget duis at tellus at urna. A cras semper auctor neque vitae tempus quam pellentesque."}]}],data:{quirksMode:!1}},fields:{slug:"/blog/categories/notice/posts/2019-03-07-19-56-welcome-to-my-web-site"}}},{node:{frontmatter:{title:"Just-in-time health intervention for prevention of prolonged sedentary behavior"},htmlAst:{type:"root",children:[{type:"element",tagName:"p",properties:{className:["markdown-paragraph"]},children:[{type:"text",value:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. At risus viverra adipiscing at in. Vitae et leo duis ut. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Quis vel eros donec ac odio tempor orci dapibus. Duis ut diam quam nulla porttitor massa id. Egestas erat imperdiet sed euismod nisi porta. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Blandit cursus risus at ultrices mi tempus imperdiet nulla. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Sodales ut eu sem integer vitae justo. Lobortis mattis aliquam faucibus purus in massa tempor nec. Nunc sed augue lacus viverra vitae congue. Dignissim enim sit amet venenatis urna cursus eget nunc scelerisque. Id cursus metus aliquam eleifend. Viverra nam libero justo laoreet sit."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{className:["markdown-paragraph"]},children:[{type:"text",value:"Sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. Ultrices gravida dictum fusce ut placerat orci. Blandit cursus risus at ultrices mi tempus imperdiet nulla. Lacus vel facilisis volutpat est velit egestas dui id. Malesuada proin libero nunc consequat interdum varius sit amet mattis. Magna etiam tempor orci eu. Est sit amet facilisis magna etiam tempor orci. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Velit egestas dui id ornare arcu odio ut sem. Odio tempor orci dapibus ultrices in iaculis. Ac turpis egestas sed tempus urna et. Amet nisl purus in mollis nunc. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Varius quam quisque id diam vel quam. Est ullamcorper eget nulla facilisi. Sed euismod nisi porta lorem mollis. Nam at lectus urna duis convallis convallis tellus. Eget duis at tellus at urna. A cras semper auctor neque vitae tempus quam pellentesque."}]}],data:{quirksMode:!1}},fields:{slug:"/blog/categories/research/posts/2017-05-01-00-00-just-in-time-health-intervention-for-prevention-of-prolonged-sedentary-behavior"}}},{node:{frontmatter:{title:"Exploring user experiences for active workstations"},htmlAst:{type:"root",children:[{type:"element",tagName:"p",properties:{className:["markdown-paragraph"]},children:[{type:"text",value:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. At risus viverra adipiscing at in. Vitae et leo duis ut. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Quis vel eros donec ac odio tempor orci dapibus. Duis ut diam quam nulla porttitor massa id. Egestas erat imperdiet sed euismod nisi porta. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Blandit cursus risus at ultrices mi tempus imperdiet nulla. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Sodales ut eu sem integer vitae justo. Lobortis mattis aliquam faucibus purus in massa tempor nec. Nunc sed augue lacus viverra vitae congue. Dignissim enim sit amet venenatis urna cursus eget nunc scelerisque. Id cursus metus aliquam eleifend. Viverra nam libero justo laoreet sit."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{className:["markdown-paragraph"]},children:[{type:"text",value:"Sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. Ultrices gravida dictum fusce ut placerat orci. Blandit cursus risus at ultrices mi tempus imperdiet nulla. Lacus vel facilisis volutpat est velit egestas dui id. Malesuada proin libero nunc consequat interdum varius sit amet mattis. Magna etiam tempor orci eu. Est sit amet facilisis magna etiam tempor orci. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Velit egestas dui id ornare arcu odio ut sem. Odio tempor orci dapibus ultrices in iaculis. Ac turpis egestas sed tempus urna et. Amet nisl purus in mollis nunc. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Varius quam quisque id diam vel quam. Est ullamcorper eget nulla facilisi. Sed euismod nisi porta lorem mollis. Nam at lectus urna duis convallis convallis tellus. Eget duis at tellus at urna. A cras semper auctor neque vitae tempus quam pellentesque."}]}],data:{quirksMode:!1}},fields:{slug:"/blog/categories/research/posts/2015-06-01-00-00-exploring-user-experiences-for-active-workstations"}}},{node:{frontmatter:{title:"Developing multi-player exertion games for group fitness swimming"},htmlAst:{type:"root",children:[{type:"element",tagName:"p",properties:{className:["markdown-paragraph"]},children:[{type:"text",value:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. At risus viverra adipiscing at in. Vitae et leo duis ut. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Quis vel eros donec ac odio tempor orci dapibus. Duis ut diam quam nulla porttitor massa id. Egestas erat imperdiet sed euismod nisi porta. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Blandit cursus risus at ultrices mi tempus imperdiet nulla. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Sodales ut eu sem integer vitae justo. Lobortis mattis aliquam faucibus purus in massa tempor nec. Nunc sed augue lacus viverra vitae congue. Dignissim enim sit amet venenatis urna cursus eget nunc scelerisque. Id cursus metus aliquam eleifend. Viverra nam libero justo laoreet sit."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{className:["markdown-paragraph"]},children:[{type:"text",value:"Sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. Ultrices gravida dictum fusce ut placerat orci. Blandit cursus risus at ultrices mi tempus imperdiet nulla. Lacus vel facilisis volutpat est velit egestas dui id. Malesuada proin libero nunc consequat interdum varius sit amet mattis. Magna etiam tempor orci eu. Est sit amet facilisis magna etiam tempor orci. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Velit egestas dui id ornare arcu odio ut sem. Odio tempor orci dapibus ultrices in iaculis. Ac turpis egestas sed tempus urna et. Amet nisl purus in mollis nunc. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Varius quam quisque id diam vel quam. Est ullamcorper eget nulla facilisi. Sed euismod nisi porta lorem mollis. Nam at lectus urna duis convallis convallis tellus. Eget duis at tellus at urna. A cras semper auctor neque vitae tempus quam pellentesque."}]}],data:{quirksMode:!1}},fields:{slug:"/blog/categories/research/posts/2014-04-01-00-00-developing-multi-player-exertion-games-for-group-fitness-swimming"}}},{node:{frontmatter:{title:"Developing multi-player exertion games for underwater environment"},htmlAst:{type:"root",children:[{type:"element",tagName:"h1",properties:{},children:[{type:"text",value:"Motivation"}]},{type:"text",value:"\n"},{type:"element",tagName:"h1",properties:{},children:[]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{className:["markdown-paragraph"]},children:[{type:"text",value:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. At risus viverra adipiscing at in. Vitae et leo duis ut. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Quis vel eros donec ac odio tempor orci dapibus. Duis ut diam quam nulla porttitor massa id. Egestas erat imperdiet sed euismod nisi porta. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Blandit cursus risus at ultrices mi tempus imperdiet nulla. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Sodales ut eu sem integer vitae justo. Lobortis mattis aliquam faucibus purus in massa tempor nec. Nunc sed augue lacus viverra vitae congue. Dignissim enim sit amet venenatis urna cursus eget nunc scelerisque. Id cursus metus aliquam eleifend. Viverra nam libero justo laoreet sit."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{className:["markdown-paragraph"]},children:[{type:"text",value:"Sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. Ultrices gravida dictum fusce ut placerat orci. Blandit cursus risus at ultrices mi tempus imperdiet nulla. Lacus vel facilisis volutpat est velit egestas dui id. Malesuada proin libero nunc consequat interdum varius sit amet mattis. Magna etiam tempor orci eu. Est sit amet facilisis magna etiam tempor orci. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Velit egestas dui id ornare arcu odio ut sem. Odio tempor orci dapibus ultrices in iaculis. Ac turpis egestas sed tempus urna et. Amet nisl purus in mollis nunc. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Varius quam quisque id diam vel quam. Est ullamcorper eget nulla facilisi. Sed euismod nisi porta lorem mollis. Nam at lectus urna duis convallis convallis tellus. Eget duis at tellus at urna. A cras semper auctor neque vitae tempus quam pellentesque."}]}],data:{quirksMode:!1}},fields:{slug:"/blog/categories/research/posts/2013-03-01-00-00-developing-multi-player-exertion-games-for-underwater-environment"}}}]}}}},186:function(e,t,i){"use strict";var a=i(0),s=i(555),r=i(548),u=i(259),n=i(552),l=i(554),o=(i(167),i(182)),c=i(550),m=i(158),d=function(e){var t=e.items;return a.createElement(c.a,{link:!0,bulleted:!0},t.map(function(e){var t=e.category,i=e.link,s=e.count;return a.createElement(c.a.Item,{key:t,href:i},t," (",s,")")}))},p=function(){var e=o.data.categories,t=e.totalCount,i=e.group,s=[{category:"All",count:t,link:Object(m.a)(0,"category")}].concat(i.map(function(e){var t=e.fieldValue;return{category:t,count:e.totalCount,link:Object(m.a)(0,"category",t)}}));return a.createElement(d,{items:s})},g=(i(180),i(181)),v=i(318),h=function(e){var t=e.items;return a.createElement(v.a.Group,null,t.map(function(e){var t=e.tag,i=e.link,s=e.count;return a.createElement(v.a,{key:t,as:"a",href:i},t," (",s,")")}))},b=function(e){var t=e.limit,i=void 0===t?10:t,s=g.data.tags.group;return a.createElement(h,{items:s.sort(function(e,t){var i=e.totalCount;return t.totalCount-i}).slice(0,i).map(function(e){var t=e.fieldValue;return{tag:t,count:e.totalCount,link:Object(m.a)(0,"tag",t)}})})},f=i(185),q=function(){var e=f.data.posts;return a.createElement(c.a,{link:!0,bulleted:!0},e.edges.map(function(e){var t=e.node;return a.createElement(c.a.Item,{key:t.fields.slug,as:"a",href:t.fields.slug,content:t.frontmatter.title})}))},y=i(174),E=i(159);t.a=function(e){var t=e.children;return a.createElement("div",null,a.createElement(s.a,{secondary:!0,pointing:!0,fixed:"top",inverted:!0,style:{backgroundColor:"#1b1c1d"}},a.createElement(r.a,null,a.createElement(s.a.Item,{key:"header",header:!0,content:"CHOI, WOOHYEOK's BLOG",style:{fontSize:"1.5em",lineHeight:"0.1em"}}),a.createElement(s.a.Item,{key:"main",content:"Go to main page",position:"right",href:"/"}))),a.createElement("div",{style:{paddingTop:"7.0em"}},a.createElement(u.a,{centered:!0,container:!0,stackable:!0},a.createElement(u.a.Column,{width:12},t),a.createElement(u.a.Column,{width:4},a.createElement(n.a,{color:"grey",vertical:!0,padded:!0},a.createElement(l.a,{as:"h4",content:"Categories"}),a.createElement(p,null)),a.createElement(n.a,{color:"grey",vertical:!0,padded:!0},a.createElement(l.a,{as:"h4"},"Tags",a.createElement(l.a.Subheader,{style:{display:"inline",float:"right"},as:"a",href:"/blog/tags"},a.createElement(E.a,{inverted:!1,children:"View all tags..."}))),a.createElement(b,{limit:10})),a.createElement(n.a,{color:"grey",vertical:!0,padded:!0},a.createElement(l.a,{as:"h4",content:"Recent Posts"}),a.createElement(q,null)))),a.createElement(y.a,null)))}},259:function(e,t,i){"use strict";i(162);var a=i(73),s=i.n(a),r=i(151),u=i.n(r),n=(i(4),i(0)),l=i.n(n),o=i(178),c=i(285),m=i(286),d=i(293);function p(e){var t=e.children,i=e.className,a=e.computer,r=e.color,n=e.floated,d=e.largeScreen,g=e.mobile,v=e.only,h=e.stretched,b=e.tablet,f=e.textAlign,q=e.verticalAlign,y=e.widescreen,E=e.width,w=u()(r,Object(o.a)(h,"stretched"),Object(o.c)(v,"only"),Object(o.d)(f),Object(o.e)(n,"floated"),Object(o.f)(q),Object(o.g)(a,"wide computer"),Object(o.g)(d,"wide large screen"),Object(o.g)(g,"wide mobile"),Object(o.g)(b,"wide tablet"),Object(o.g)(y,"wide widescreen"),Object(o.g)(E,"wide"),"column",i),k=Object(c.a)(p,e),A=Object(m.a)(p,e);return l.a.createElement(A,s()({},k,{className:w}),t)}p.handledProps=["as","children","className","color","computer","floated","largeScreen","mobile","only","stretched","tablet","textAlign","verticalAlign","widescreen","width"],p.propTypes={},p.create=Object(d.b)(p,function(e){return{children:e}});var g=p;function v(e){var t=e.centered,i=e.children,a=e.className,r=e.color,n=e.columns,d=e.divided,p=e.only,g=e.reversed,h=e.stretched,b=e.textAlign,f=e.verticalAlign,q=u()(r,Object(o.a)(t,"centered"),Object(o.a)(d,"divided"),Object(o.a)(h,"stretched"),Object(o.c)(p,"only"),Object(o.c)(g,"reversed"),Object(o.d)(b),Object(o.f)(f),Object(o.g)(n,"column",!0),"row",a),y=Object(c.a)(v,e),E=Object(m.a)(v,e);return l.a.createElement(E,s()({},y,{className:q}),i)}v.handledProps=["as","centered","children","className","color","columns","divided","only","reversed","stretched","textAlign","verticalAlign"],v.propTypes={};var h=v;function b(e){var t=e.celled,i=e.centered,a=e.children,r=e.className,n=e.columns,d=e.container,p=e.divided,g=e.doubling,v=e.inverted,h=e.padded,f=e.relaxed,q=e.reversed,y=e.stackable,E=e.stretched,w=e.textAlign,k=e.verticalAlign,A=u()("ui",Object(o.a)(i,"centered"),Object(o.a)(d,"container"),Object(o.a)(g,"doubling"),Object(o.a)(v,"inverted"),Object(o.a)(y,"stackable"),Object(o.a)(E,"stretched"),Object(o.b)(t,"celled"),Object(o.b)(p,"divided"),Object(o.b)(h,"padded"),Object(o.b)(f,"relaxed"),Object(o.c)(q,"reversed"),Object(o.d)(w),Object(o.f)(k),Object(o.g)(n,"column",!0),"grid",r),x=Object(c.a)(b,e),j=Object(m.a)(b,e);return l.a.createElement(j,s()({},x,{className:A}),a)}b.handledProps=["as","celled","centered","children","className","columns","container","divided","doubling","inverted","padded","relaxed","reversed","stackable","stretched","textAlign","verticalAlign"],b.Column=g,b.Row=h,b.propTypes={};t.a=b},513:function(e,t,i){"use strict";var a=i(11),s=i(14),r=i(76),u="".startsWith;a(a.P+a.F*i(77)("startsWith"),"String",{startsWith:function(e){var t=r(this,e,"startsWith"),i=s(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),a=String(e);return u?u.call(t,a,i):t.slice(i,i+a.length)===a}})}}]);
//# sourceMappingURL=component---src-pages-blog-tags-tsx-436b16f2517f785d5ec1.js.map