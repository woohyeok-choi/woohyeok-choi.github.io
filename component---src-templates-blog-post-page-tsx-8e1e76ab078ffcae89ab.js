(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{149:function(e,t,i){"use strict";i.r(t);i(176);var a=i(0),s=i(163),r=i(326),n=i(537),u=i(536),l=i(316),o=i(259),c=i(186),m=i(158),d=i(159),p=i(175),g=i(467),v=function(e){var t=e.data,i=e.prevPost,s=e.nextPost,c=e.address,p=t.node,v=p.id,h=p.frontmatter,f=p.html,b=p.fields,q=h.title,E=h.date,y=b.category,w=b.tags,k=r.data.site;return a.createElement("div",null,a.createElement(n.a,{as:"h1",dividing:!0},a.createElement(n.a.Subheader,null,"Category: ",a.createElement("a",{href:y.slug},a.createElement(d.a,{inverted:!1,children:y.name}))),q,a.createElement(n.a.Subheader,null,Object(m.b)(E))),a.createElement(u.a,{vertical:!0,padded:!0,basic:!0},a.createElement("div",{dangerouslySetInnerHTML:{__html:f}})),w&&a.createElement(u.a,{vertical:!0,padded:"very"},a.createElement("span",{style:{fontSize:"16px",fontWeight:"bold",fontStyle:"italic"}},"Tagged with "),a.createElement(l.a.Group,{style:{display:"inline"}},w.map(function(e){var t=e.name,i=e.slug;return a.createElement(l.a,{key:t,href:i,content:t})}))),k.siteMetadata.disqusShortname&&a.createElement(u.a,{vertical:!0,padded:"very"},a.createElement(g.DiscussionEmbed,{shortname:k.siteMetadata.disqusShortname,config:{title:q,identifier:v,url:c}})),a.createElement(o.a,{columns:2,as:u.a,vertical:!0,stackable:!0,padded:!0},a.createElement(o.a.Column,{textAlign:"left"},i&&a.createElement(n.a,{as:"h3"},"Previous post",a.createElement(n.a.Subheader,{style:{fontSize:"16px"}},a.createElement("a",{href:i.slug},a.createElement(d.a,{inverted:!1,children:i.title}))))),a.createElement(o.a.Column,{textAlign:"right"},s&&a.createElement(n.a,{as:"h3"},"Next post",a.createElement(n.a.Subheader,{style:{fontSize:"16px"}},a.createElement("a",{href:s.slug},a.createElement(d.a,{inverted:!1,children:s.title})))))))},h=Object(p.a)(function(e){var t=e.data,i=e.prevPost,s=e.nextPost,r=e.address,n=e.screenSize,u=a.createElement(v,{data:t,address:r,prevPost:i,nextPost:s});return"mobile"===n?a.createElement(c.b,{children:u}):a.createElement(c.a,{children:u})}),f=i(166);i.d(t,"query",function(){return b});t.default=function(e){var t=e.data,i=e.pageContext,r=e.location,n=t.node,u=n.frontmatter,l=n.fields,o=n.excerpt,c=u.title,m=u.lang,d=l.category,p=l.tags,g=i.nextPost,v=i.prevPost;return a.createElement(s.a,null,a.createElement(f.a,{title:c,lang:m,keywords:[d.name].concat(p.map(function(e){return e.name})),description:o}),a.createElement(h,{data:t,nextPost:g,prevPost:v,address:r.href}))};var b="1792022129"},158:function(e,t,i){"use strict";i.d(t,"b",function(){return r}),i.d(t,"a",function(){return n});var a=i(197),s=i(164),r=function(e){return a(""+e,"YYYY-MM-DD HH:mm").format("MMMM Do, YYYY HH:mm")},n=function(e,t,i){void 0===e&&(e=0);var a="/blog",r=i?Object(s.kebabCase)(i):"";return r&&("category"===t?a="/blog/categories/"+r:"tag"===t&&(a="/blog/tags/"+r)),0!==e&&(a=a+"/pages/"+(e+1)),a}},159:function(e,t,i){"use strict";i.d(t,"a",function(){return c});var a=i(7),s=i.n(a),r=i(0),n={boxColor:"rgba(0, 0, 0, .87)",textColor:"rgba(255, 255, 255, .9)"},u={boxColor:"rgba(255, 255, 255, 0)",textColor:"rgba(0, 0, 0, .6)"},l={boxColor:"rgba(255, 255, 255, .9)",textColor:"rgba(0, 0, 0, .85)"},o={boxColor:"rgba(255, 255, 255, 0)",textColor:"rgba(255, 255, 255, .9)"},c=function(e){function t(){for(var t,i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))||this).state={isMouseOn:!1},t.handleMouseEnter=function(){return t.setState({isMouseOn:!0})},t.handleMouseLeave=function(){return t.setState({isMouseOn:!1})},t}return s()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,i=e.inverted,a=void 0!==i&&i,s=this.state.isMouseOn,c=a?"rgba(255, 255, 255, .9)":"rgba(0, 0, 0, .13)",m=a?s?l:o:s?n:u;return r.createElement("span",{style:{backgroundColor:m.boxColor,boxShadow:"inset 0 -2px 0px 0px "+c,color:m.textColor},onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave},t)},t}(r.Component)},163:function(e,t,i){"use strict";var a=i(0);i(187),i(188),i(189),i(190);t.a=function(e){var t=e.children;return a.createElement("div",null,t)}},166:function(e,t,i){"use strict";var a=i(167),s=i(0),r=i(196),n=i.n(r);t.a=function(e){var t=e.lang,i=void 0===t?"en":t,r=e.keywords,u=void 0===r?[]:r,l=e.title,o=e.description,c=void 0===o?"":o,m=a.data.site.siteMetadata,d=c||m.description,p=[{name:"description",content:d},{property:"og:title",content:l},{property:"og:site_name",content:m.title},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:m.author},{name:"twitter:title",content:l},{name:"twitter:description",content:d}];return s.createElement(n.a,{htmlAttribute:{lang:i},link:[{rel:"stylesheet",href:"https://cdn.rawgit.com/jpswalsh/academicons/master/css/academicons.min.css"}],title:l,titleTemplate:"%s | "+m.title,meta:p.concat(u.length?{name:"keywords",content:u.join(", ")}:[])})}},167:function(e){e.exports={data:{site:{siteMetadata:{title:"Choi, Woohyeok",description:"Choi, Woohyeok's personal website and blog.",author:"Choi, Woohyeok (woohyeok.choi@kaist.ac.kr)"}}}}},174:function(e,t,i){"use strict";var a=i(0),s=i(536),r=i(531),n=i(159);t.a=function(){return a.createElement(s.a,{inverted:!0,padded:!0,vertical:!0,textAlign:"center"},a.createElement(r.a,null,a.createElement("p",null,"Made by Choi, Woohyeok (woohyeok.choi (at) kaist.ac.kr) © 2019; built with ",a.createElement("a",{href:"https://www.gatsbyjs.org",target:"_blank"},a.createElement(n.a,{inverted:!0,children:"Gatsby"})),"; sources are available at ",a.createElement("a",{href:"https://github.com/woohyeok-choi/woohyeok-choi.github.io",target:"_blank"},a.createElement(n.a,{inverted:!0,children:"this repo."})))))}},175:function(e,t,i){"use strict";i.d(t,"a",function(){return u});i(35);var a=i(7),s=i.n(a),r=i(0),n=i(164),u=function(e,t){return void 0===t&&(t=l),function(i){function a(e){var a;return(a=i.call(this,e)||this).onResize=function(){var e=o(window.innerWidth,t);e!==a.state.screenSize&&a.setState({screenSize:e})},a.state={screenSize:"computer"},a.onResize=n.throttle(a.onResize,100),a}s()(a,i);var u=a.prototype;return u.componentDidMount=function(){this.setState({screenSize:o(window.innerWidth,t)}),window.addEventListener("resize",this.onResize)},u.componentWillUnmount=function(){this.onResize.cancel(),window.removeEventListener("resize",this.onResize)},u.render=function(){return r.createElement(e,Object.assign({},this.props,{screenSize:this.state.screenSize}))},a}(r.Component)},l={mobile:767,tablet:991},o=function(e,t){void 0===t&&(t=l);var i=t,a=i.mobile,s=i.tablet;return e<a?"mobile":e<s?"tablet":"computer"}},180:function(e){e.exports={data:{tags:{group:[{fieldValue:"Active workstation",totalCount:1},{fieldValue:"Activity recognition",totalCount:1},{fieldValue:"Exergame",totalCount:2},{fieldValue:"GatsbyJs",totalCount:1},{fieldValue:"Group fitness",totalCount:1},{fieldValue:"Just-in-time intervention",totalCount:1},{fieldValue:"Misc.",totalCount:1},{fieldValue:"Office furniture",totalCount:1},{fieldValue:"React",totalCount:1},{fieldValue:"Sedentariness",totalCount:1},{fieldValue:"Swimming",totalCount:2},{fieldValue:"Under-desk elliptical trainer",totalCount:1},{fieldValue:"Underwater network",totalCount:1}]}}}},181:function(e){e.exports={data:{categories:{group:[{fieldValue:"Development",totalCount:1},{fieldValue:"Notice",totalCount:1},{fieldValue:"Research",totalCount:4}],totalCount:6}}}},185:function(e){e.exports={data:{posts:{edges:[{node:{frontmatter:{title:"How to build this web site"},htmlAst:{type:"root",children:[{type:"element",tagName:"p",properties:{className:["markdown-paragraph"]},children:[{type:"text",value:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. At risus viverra adipiscing at in. Vitae et leo duis ut. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Quis vel eros donec ac odio tempor orci dapibus. Duis ut diam quam nulla porttitor massa id. Egestas erat imperdiet sed euismod nisi porta. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Blandit cursus risus at ultrices mi tempus imperdiet nulla. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Sodales ut eu sem integer vitae justo. Lobortis mattis aliquam faucibus purus in massa tempor nec. Nunc sed augue lacus viverra vitae congue. Dignissim enim sit amet venenatis urna cursus eget nunc scelerisque. Id cursus metus aliquam eleifend. Viverra nam libero justo laoreet sit."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{className:["markdown-paragraph"]},children:[{type:"text",value:"Sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. Ultrices gravida dictum fusce ut placerat orci. Blandit cursus risus at ultrices mi tempus imperdiet nulla. Lacus vel facilisis volutpat est velit egestas dui id. Malesuada proin libero nunc consequat interdum varius sit amet mattis. Magna etiam tempor orci eu. Est sit amet facilisis magna etiam tempor orci. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Velit egestas dui id ornare arcu odio ut sem. Odio tempor orci dapibus ultrices in iaculis. Ac turpis egestas sed tempus urna et. Amet nisl purus in mollis nunc. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Varius quam quisque id diam vel quam. Est ullamcorper eget nulla facilisi. Sed euismod nisi porta lorem mollis. Nam at lectus urna duis convallis convallis tellus. Eget duis at tellus at urna. A cras semper auctor neque vitae tempus quam pellentesque."}]}],data:{quirksMode:!1}},fields:{slug:"/blog/categories/development/posts/2019-03-08-15-00-how-to-build-this-web-site"}}},{node:{frontmatter:{title:"Welcome to my web site"},htmlAst:{type:"root",children:[{type:"element",tagName:"p",properties:{className:["markdown-paragraph"]},children:[{type:"text",value:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. At risus viverra adipiscing at in. Vitae et leo duis ut. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Quis vel eros donec ac odio tempor orci dapibus. Duis ut diam quam nulla porttitor massa id. Egestas erat imperdiet sed euismod nisi porta. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Blandit cursus risus at ultrices mi tempus imperdiet nulla. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Sodales ut eu sem integer vitae justo. Lobortis mattis aliquam faucibus purus in massa tempor nec. Nunc sed augue lacus viverra vitae congue. Dignissim enim sit amet venenatis urna cursus eget nunc scelerisque. Id cursus metus aliquam eleifend. Viverra nam libero justo laoreet sit."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{className:["markdown-paragraph"]},children:[{type:"element",tagName:"img",properties:{src:"./test.png"},children:[]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{className:["markdown-paragraph"]},children:[{type:"text",value:"Sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. Ultrices gravida dictum fusce ut placerat orci. Blandit cursus risus at ultrices mi tempus imperdiet nulla. Lacus vel facilisis volutpat est velit egestas dui id. Malesuada proin libero nunc consequat interdum varius sit amet mattis. Magna etiam tempor orci eu. Est sit amet facilisis magna etiam tempor orci. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Velit egestas dui id ornare arcu odio ut sem. Odio tempor orci dapibus ultrices in iaculis. Ac turpis egestas sed tempus urna et. Amet nisl purus in mollis nunc. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Varius quam quisque id diam vel quam. Est ullamcorper eget nulla facilisi. Sed euismod nisi porta lorem mollis. Nam at lectus urna duis convallis convallis tellus. Eget duis at tellus at urna. A cras semper auctor neque vitae tempus quam pellentesque."}]}],data:{quirksMode:!1}},fields:{slug:"/blog/categories/notice/posts/2019-03-07-19-56-welcome-to-my-web-site"}}},{node:{frontmatter:{title:"Just-in-time health intervention for prevention of prolonged sedentary behavior"},htmlAst:{type:"root",children:[{type:"element",tagName:"p",properties:{className:["markdown-paragraph"]},children:[{type:"text",value:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. At risus viverra adipiscing at in. Vitae et leo duis ut. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Quis vel eros donec ac odio tempor orci dapibus. Duis ut diam quam nulla porttitor massa id. Egestas erat imperdiet sed euismod nisi porta. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Blandit cursus risus at ultrices mi tempus imperdiet nulla. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Sodales ut eu sem integer vitae justo. Lobortis mattis aliquam faucibus purus in massa tempor nec. Nunc sed augue lacus viverra vitae congue. Dignissim enim sit amet venenatis urna cursus eget nunc scelerisque. Id cursus metus aliquam eleifend. Viverra nam libero justo laoreet sit."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{className:["markdown-paragraph"]},children:[{type:"text",value:"Sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. Ultrices gravida dictum fusce ut placerat orci. Blandit cursus risus at ultrices mi tempus imperdiet nulla. Lacus vel facilisis volutpat est velit egestas dui id. Malesuada proin libero nunc consequat interdum varius sit amet mattis. Magna etiam tempor orci eu. Est sit amet facilisis magna etiam tempor orci. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Velit egestas dui id ornare arcu odio ut sem. Odio tempor orci dapibus ultrices in iaculis. Ac turpis egestas sed tempus urna et. Amet nisl purus in mollis nunc. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Varius quam quisque id diam vel quam. Est ullamcorper eget nulla facilisi. Sed euismod nisi porta lorem mollis. Nam at lectus urna duis convallis convallis tellus. Eget duis at tellus at urna. A cras semper auctor neque vitae tempus quam pellentesque."}]}],data:{quirksMode:!1}},fields:{slug:"/blog/categories/research/posts/2017-05-01-00-00-just-in-time-health-intervention-for-prevention-of-prolonged-sedentary-behavior"}}},{node:{frontmatter:{title:"Exploring user experiences for active workstations"},htmlAst:{type:"root",children:[{type:"element",tagName:"p",properties:{className:["markdown-paragraph"]},children:[{type:"text",value:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. At risus viverra adipiscing at in. Vitae et leo duis ut. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Quis vel eros donec ac odio tempor orci dapibus. Duis ut diam quam nulla porttitor massa id. Egestas erat imperdiet sed euismod nisi porta. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Blandit cursus risus at ultrices mi tempus imperdiet nulla. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Sodales ut eu sem integer vitae justo. Lobortis mattis aliquam faucibus purus in massa tempor nec. Nunc sed augue lacus viverra vitae congue. Dignissim enim sit amet venenatis urna cursus eget nunc scelerisque. Id cursus metus aliquam eleifend. Viverra nam libero justo laoreet sit."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{className:["markdown-paragraph"]},children:[{type:"text",value:"Sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. Ultrices gravida dictum fusce ut placerat orci. Blandit cursus risus at ultrices mi tempus imperdiet nulla. Lacus vel facilisis volutpat est velit egestas dui id. Malesuada proin libero nunc consequat interdum varius sit amet mattis. Magna etiam tempor orci eu. Est sit amet facilisis magna etiam tempor orci. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Velit egestas dui id ornare arcu odio ut sem. Odio tempor orci dapibus ultrices in iaculis. Ac turpis egestas sed tempus urna et. Amet nisl purus in mollis nunc. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Varius quam quisque id diam vel quam. Est ullamcorper eget nulla facilisi. Sed euismod nisi porta lorem mollis. Nam at lectus urna duis convallis convallis tellus. Eget duis at tellus at urna. A cras semper auctor neque vitae tempus quam pellentesque."}]}],data:{quirksMode:!1}},fields:{slug:"/blog/categories/research/posts/2015-06-01-00-00-exploring-user-experiences-for-active-workstations"}}},{node:{frontmatter:{title:"Developing multi-player exertion games for group fitness swimming"},htmlAst:{type:"root",children:[{type:"element",tagName:"p",properties:{className:["markdown-paragraph"]},children:[{type:"text",value:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. At risus viverra adipiscing at in. Vitae et leo duis ut. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Quis vel eros donec ac odio tempor orci dapibus. Duis ut diam quam nulla porttitor massa id. Egestas erat imperdiet sed euismod nisi porta. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Blandit cursus risus at ultrices mi tempus imperdiet nulla. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Sodales ut eu sem integer vitae justo. Lobortis mattis aliquam faucibus purus in massa tempor nec. Nunc sed augue lacus viverra vitae congue. Dignissim enim sit amet venenatis urna cursus eget nunc scelerisque. Id cursus metus aliquam eleifend. Viverra nam libero justo laoreet sit."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{className:["markdown-paragraph"]},children:[{type:"text",value:"Sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. Ultrices gravida dictum fusce ut placerat orci. Blandit cursus risus at ultrices mi tempus imperdiet nulla. Lacus vel facilisis volutpat est velit egestas dui id. Malesuada proin libero nunc consequat interdum varius sit amet mattis. Magna etiam tempor orci eu. Est sit amet facilisis magna etiam tempor orci. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Velit egestas dui id ornare arcu odio ut sem. Odio tempor orci dapibus ultrices in iaculis. Ac turpis egestas sed tempus urna et. Amet nisl purus in mollis nunc. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Varius quam quisque id diam vel quam. Est ullamcorper eget nulla facilisi. Sed euismod nisi porta lorem mollis. Nam at lectus urna duis convallis convallis tellus. Eget duis at tellus at urna. A cras semper auctor neque vitae tempus quam pellentesque."}]}],data:{quirksMode:!1}},fields:{slug:"/blog/categories/research/posts/2014-04-01-00-00-developing-multi-player-exertion-games-for-group-fitness-swimming"}}},{node:{frontmatter:{title:"Developing multi-player exertion games for underwater environment"},htmlAst:{type:"root",children:[{type:"element",tagName:"p",properties:{className:["markdown-paragraph"]},children:[{type:"text",value:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. At risus viverra adipiscing at in. Vitae et leo duis ut. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Quis vel eros donec ac odio tempor orci dapibus. Duis ut diam quam nulla porttitor massa id. Egestas erat imperdiet sed euismod nisi porta. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Blandit cursus risus at ultrices mi tempus imperdiet nulla. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Sodales ut eu sem integer vitae justo. Lobortis mattis aliquam faucibus purus in massa tempor nec. Nunc sed augue lacus viverra vitae congue. Dignissim enim sit amet venenatis urna cursus eget nunc scelerisque. Id cursus metus aliquam eleifend. Viverra nam libero justo laoreet sit."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{className:["markdown-paragraph"]},children:[{type:"text",value:"Sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. Ultrices gravida dictum fusce ut placerat orci. Blandit cursus risus at ultrices mi tempus imperdiet nulla. Lacus vel facilisis volutpat est velit egestas dui id. Malesuada proin libero nunc consequat interdum varius sit amet mattis. Magna etiam tempor orci eu. Est sit amet facilisis magna etiam tempor orci. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Velit egestas dui id ornare arcu odio ut sem. Odio tempor orci dapibus ultrices in iaculis. Ac turpis egestas sed tempus urna et. Amet nisl purus in mollis nunc. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Varius quam quisque id diam vel quam. Est ullamcorper eget nulla facilisi. Sed euismod nisi porta lorem mollis. Nam at lectus urna duis convallis convallis tellus. Eget duis at tellus at urna. A cras semper auctor neque vitae tempus quam pellentesque."}]}],data:{quirksMode:!1}},fields:{slug:"/blog/categories/research/posts/2013-03-01-00-00-developing-multi-player-exertion-games-for-underwater-environment"}}}]}}}},186:function(e,t,i){"use strict";var a=i(0),s=i(259),r=i(536),n=i(537),u=i(538),l=i(531),o=(i(168),i(181)),c=i(533),m=i(158),d=function(e){var t=e.items;return a.createElement(c.a,{link:!0,bulleted:!0},t.map(function(e){var t=e.category,i=e.link,s=e.count;return a.createElement(c.a.Item,{key:t,href:i},t," (",s,")")}))},p=function(){var e=o.data.categories,t=e.totalCount,i=e.group,s=[{category:"All",count:t,link:Object(m.a)(0,"category")}].concat(i.map(function(e){var t=e.fieldValue;return{category:t,count:e.totalCount,link:Object(m.a)(0,"category",t)}}));return a.createElement(d,{items:s})},g=(i(179),i(180)),v=i(316),h=function(e){var t=e.items;return a.createElement(v.a.Group,null,t.map(function(e){var t=e.tag,i=e.link,s=e.count;return a.createElement(v.a,{key:t,as:"a",href:i},t," (",s,")")}))},f=function(e){var t=e.limit,i=void 0===t?10:t,s=g.data.tags.group;return a.createElement(h,{items:s.sort(function(e,t){var i=e.totalCount;return t.totalCount-i}).slice(0,i).map(function(e){var t=e.fieldValue;return{tag:t,count:e.totalCount,link:Object(m.a)(0,"tag",t)}})})},b=i(185),q=function(){var e=b.data.posts;return a.createElement(c.a,{link:!0,bulleted:!0},e.edges.map(function(e){var t=e.node;return a.createElement(c.a.Item,{key:t.fields.slug,as:"a",href:t.fields.slug,content:t.frontmatter.title})}))},E=i(174),y=i(159);i.d(t,"a",function(){return k}),i.d(t,"b",function(){return x});var w=function(e){var t=e.children;return a.createElement(s.a,{centered:!0,container:!0,stackable:!0},a.createElement(s.a.Column,{width:12},t),a.createElement(s.a.Column,{width:4},a.createElement(r.a,{color:"grey",vertical:!0,padded:!0},a.createElement(n.a,{as:"h4",content:"Categories"}),a.createElement(p,null)),a.createElement(r.a,{color:"grey",vertical:!0,padded:!0},a.createElement(n.a,{as:"h4"},"Tags",a.createElement(n.a.Subheader,{style:{display:"inline",float:"right"},as:"a",href:"/blog/tags"},a.createElement(y.a,{inverted:!1,children:"View all tags..."}))),a.createElement(f,{limit:10})),a.createElement(r.a,{color:"grey",vertical:!0,padded:!0},a.createElement(n.a,{as:"h4",content:"Recent Posts"}),a.createElement(q,null))))},k=function(e){var t=e.children;return a.createElement("div",null,a.createElement(u.a,{secondary:!0,pointing:!0,fixed:"top",inverted:!0,style:{backgroundColor:"#1b1c1d"}},a.createElement(l.a,null,a.createElement(u.a.Item,{header:!0,key:"header",content:"CHOI, WOOHYEOK's BLOG",href:"/blog",style:{fontSize:"1.5em",lineHeight:"0.1em"}}),a.createElement(u.a.Item,{key:"main",content:"Go to main page",position:"right",href:"/"}))),a.createElement("div",{style:{paddingTop:"7.0em"}},a.createElement(w,{children:t}),a.createElement(E.a,null)))},x=function(e){var t=e.children;return a.createElement("div",null,a.createElement(u.a,{secondary:!0,pointing:!0,fixed:"top",inverted:!0,style:{backgroundColor:"#1b1c1d"}},a.createElement(l.a,null,a.createElement(u.a.Item,{key:"home",href:"/",icon:"home"}),a.createElement(u.a.Item,{key:"header",header:!0,href:"/blog",content:"CHOI, WOOHYEOK's BLOG",position:"right",style:{fontSize:"1.5em",lineHeight:"0.1em"}}))),a.createElement("div",{style:{paddingTop:"7.0em"}},a.createElement(w,{children:t}),a.createElement(E.a,null)))}},326:function(e){e.exports={data:{site:{siteMetadata:{disqusShortname:"choi-woohyeok"}}}}}}]);
//# sourceMappingURL=component---src-templates-blog-post-page-tsx-8e1e76ab078ffcae89ab.js.map