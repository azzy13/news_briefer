(this.webpackJsonpbrief_time=this.webpackJsonpbrief_time||[]).push([[0],{30:function(e,t,a){e.exports=a.p+"static/media/bgimg.45eed2f1.jpg"},31:function(e,t,a){e.exports=a.p+"static/media/shk.fbace249.jpg"},35:function(e,t,a){e.exports=a(50)},46:function(e,t,a){},48:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),l=a.n(c),s=a(34),u=a(3),o=a(5),i=a.n(o),m=a(13),p=function(e){return function(){var t=Object(m.a)(i.a.mark((function t(a){var n,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,E(),t.next=4,fetch("https://yacdn.org/proxy/https://newsapi.org/v2/everything?q=".concat(e,"&apiKey=ad2da63f7b9844b4a366d4c19afb0537"));case 4:return n=t.sent,t.next=7,n.json();case 7:r=t.sent,a({type:"SEARCH_NEWS",payload:r.articles}),d(),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),a({type:"LOGS_ERROR",payload:t.t0.response.statusText});case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e){return t.apply(this,arguments)}}()},E=function(){return{type:"SET_LOADING"}},d=function(){return{type:"SET_PAGE"}},b=a(4),f=a(11),h=function(){return r.a.createElement("div",{className:"cus_container2 center-align"},r.a.createElement("div",{className:"progress pink lighten-4 "},r.a.createElement("div",{className:"indeterminate pink "})))},w=a(29),g=a.n(w),y=function(e){var t=e.NewsReducer;return r.a.createElement("div",{className:"card hoverable",key:t.title},r.a.createElement("img",{src:t.urlToImage,alt:"Sad Life No Pic",className:"responsive-img card-image",id:"cus_displayimg"}),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:t.url,className:"cus_heading"},r.a.createElement("h5",null,t.title)),r.a.createElement("p",null,t.description),r.a.createElement("p",{className:""},"Published At:"," ",g()(t.publishedAt,"mmmm dS, yyyy, h:MM:ss TT")),r.a.createElement("p",null,r.a.createElement("strong",null,"Source: ",t.source.name)),r.a.createElement("br",null),r.a.createElement("div",{className:"center-align"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:t.url,className:"btn btn-pink btn-sm my-1 cus_btn_left"},"Full Story Here \u2794")),r.a.createElement("div",{className:"right"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.facebook.com/sharer/sharer.php?u="+t.url,className:"waves-effect waves-light btn social facebook cus_btn_right",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fa fa-facebook"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.twitter.com/intent/tweet?text="+t.url,className:"waves-effect waves-light btn social twitter cus_btn_middle",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fa fa-twitter"}))))))},N=a(6),v=a.n(N),O=Object(u.b)((function(e){return{new:e.NewsReducer}}),{busNews:function(e){return function(){var t=Object(m.a)(i.a.mark((function t(a){var n,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,E(),t.next=4,fetch("https://yacdn.org/proxy/https://newsapi.org/v2/top-headlines?page=".concat(e,"&country=us&category=business&apiKey=ad2da63f7b9844b4a366d4c19afb0537"));case 4:return n=t.sent,t.next=7,n.json();case 7:r=t.sent,a({type:"BUSINESS_NEWS",payload:r.articles}),d(),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),a({type:"LOGS_ERROR",payload:t.t0.response.statusText});case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.new,a=t.busnews,n=t.loading,c=e.busNews;return n||null===a?r.a.createElement(h,null):r.a.createElement("ul",null,r.a.createElement("br",null),r.a.createElement("h5",{className:"center pink-text"},r.a.createElement("strong",null,"Business News")," "),r.a.createElement("div",{className:"UserStyle"},n||0!==a.length?a.map((function(e){return r.a.createElement(y,{NewsReducer:e,key:e.title})})):r.a.createElement(h,null),r.a.createElement(v.a,{pageStart:0,loadMore:c,hasMore:a.length<69})))})),j=Object(u.b)((function(e){return{new:e.NewsReducer}}),{healthNews:function(e){return function(){var t=Object(m.a)(i.a.mark((function t(a){var n,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,E(),t.next=4,fetch("https://yacdn.org/proxy/https://newsapi.org/v2/top-headlines?page=".concat(e,"&country=us&category=health&apiKey=ad2da63f7b9844b4a366d4c19afb0537"));case 4:return n=t.sent,t.next=7,n.json();case 7:r=t.sent,a({type:"HEALTH_NEWS",payload:r.articles}),d(),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),a({type:"LOGS_ERROR",payload:t.t0.response.statusText});case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.new,a=t.healthnews,n=t.loading,c=e.healthNews;return n||null===a?r.a.createElement(h,null):r.a.createElement("ul",null,r.a.createElement("br",null),r.a.createElement("h5",{className:"center pink-text"},r.a.createElement("strong",null,"Health News")," "),r.a.createElement("div",{className:"UserStyle"},n||0!==a.length?a.map((function(e){return r.a.createElement(y,{NewsReducer:e,key:e.title})})):r.a.createElement(h,null),r.a.createElement(v.a,{pageStart:0,loadMore:c,hasMore:a.length<69})))})),x=Object(u.b)((function(e){return{new:e.NewsReducer}}),{techNews:function(e){return function(){var t=Object(m.a)(i.a.mark((function t(a){var n,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,E(),t.next=4,fetch("https://yacdn.org/proxy/https://newsapi.org/v2/top-headlines?page=".concat(e,"&category=technology&country=us&apiKey=ad2da63f7b9844b4a366d4c19afb0537"));case 4:return n=t.sent,t.next=7,n.json();case 7:r=t.sent,a({type:"TECH_NEWS",payload:r.articles}),d(),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),a({type:"LOGS_ERROR",payload:t.t0.response.statusText});case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.new,a=t.technews,n=t.loading,c=e.techNews;return n||null===a?r.a.createElement(h,null):r.a.createElement("ul",null,r.a.createElement("br",null),r.a.createElement("h5",{className:"center pink-text"},r.a.createElement("strong",null,"Tech News")," "),r.a.createElement("div",{className:"UserStyle"},n||0!==a.length?a.map((function(e){return r.a.createElement(y,{NewsReducer:e,key:e.title})})):r.a.createElement(h,null),r.a.createElement(v.a,{pageStart:0,loadMore:c,hasMore:a.length<69})))})),S=Object(u.b)((function(e){return{new:e.NewsReducer}}),{indNews:function(e){return function(){var t=Object(m.a)(i.a.mark((function t(a){var n,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,E(),t.next=4,fetch("https://yacdn.org/proxy/https://newsapi.org/v2/top-headlines?page=".concat(e,"&country=in&apiKey=ad2da63f7b9844b4a366d4c19afb0537"));case 4:return n=t.sent,t.next=7,n.json();case 7:r=t.sent,a({type:"INDIA_NEWS",payload:r.articles}),d(),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),a({type:"LOGS_ERROR",payload:t.t0.response.statusText});case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.new,a=t.indianews,n=t.loading,c=e.indNews;return n||null===a?r.a.createElement(h,null):r.a.createElement("ul",null,r.a.createElement("br",null),r.a.createElement("h5",{className:"center pink-text"},r.a.createElement("strong",null,"India News")," "),r.a.createElement("div",{className:"UserStyle"},n||0!==a.length?a.map((function(e){return r.a.createElement(y,{NewsReducer:e,key:e.title})})):r.a.createElement(h,null),r.a.createElement(v.a,{pageStart:0,loadMore:c,hasMore:a.length<30})))})),_=Object(u.b)((function(e){return{new:e.NewsReducer}}),{sciNews:function(e){return function(){var t=Object(m.a)(i.a.mark((function t(a){var n,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,E(),t.next=4,fetch("https://yacdn.org/proxy/https://newsapi.org/v2/top-headlines?page=".concat(e,"&country=us&category=science&apiKey=ad2da63f7b9844b4a366d4c19afb0537"));case 4:return n=t.sent,t.next=7,n.json();case 7:r=t.sent,a({type:"SCIENCE_NEWS",payload:r.articles}),d(),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),a({type:"LOGS_ERROR",payload:t.t0.response.statusText});case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.new,a=t.scinews,n=t.loading,c=e.sciNews;return n||null===a?r.a.createElement(h,null):r.a.createElement("ul",null,r.a.createElement("br",null),r.a.createElement("h5",{className:"center pink-text"},r.a.createElement("strong",null,"Science News")," "),r.a.createElement("div",{className:"UserStyle"},n||0!==a.length?a.map((function(e){return r.a.createElement(y,{NewsReducer:e,key:e.title})})):r.a.createElement(h,null),r.a.createElement(v.a,{pageStart:0,loadMore:c,hasMore:a.length<69})))})),k=Object(u.b)((function(e){return{new:e.NewsReducer}}),{entNews:function(e){return function(){var t=Object(m.a)(i.a.mark((function t(a){var n,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,E(),t.next=4,fetch("https://yacdn.org/proxy/https://newsapi.org/v2/top-headlines?page=".concat(e,"&country=us&category=entertainment&apiKey=ad2da63f7b9844b4a366d4c19afb0537"));case 4:return n=t.sent,t.next=7,n.json();case 7:r=t.sent,a({type:"ENT_NEWS",payload:r.articles}),d(),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),a({type:"LOGS_ERROR",payload:t.t0.response.statusText});case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.new,a=t.entnews,n=t.loading,c=e.entNews;return n||null===a?r.a.createElement(h,null):r.a.createElement("ul",null,r.a.createElement("br",null),r.a.createElement("h5",{className:"center pink-text"},r.a.createElement("strong",null,"Entertainment News")," "),r.a.createElement("div",{className:"UserStyle"},n||0!==a.length?a.map((function(e){return r.a.createElement(y,{NewsReducer:e,key:e.title})})):r.a.createElement(h,null),r.a.createElement(v.a,{pageStart:0,loadMore:c,hasMore:a.length<69})))})),R=Object(u.b)((function(e){return{new:e.NewsReducer}}),{sportNews:function(e){return function(){var t=Object(m.a)(i.a.mark((function t(a){var n,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,E(),t.next=4,fetch("https://yacdn.org/proxy/https://newsapi.org/v2/top-headlines?page=".concat(e,"&country=in&category=sports&apiKey=ad2da63f7b9844b4a366d4c19afb0537"));case 4:return n=t.sent,t.next=7,n.json();case 7:r=t.sent,a({type:"SPORTS_NEWS",payload:r.articles}),d(),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),a({type:"LOGS_ERROR",payload:t.t0.response.statusText});case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.new,a=t.sportnews,n=t.loading,c=e.sportNews;return n||null===a?r.a.createElement(h,null):r.a.createElement("ul",null,r.a.createElement("br",null),r.a.createElement("h5",{className:"center pink-text"},r.a.createElement("strong",null,"Sports News")," "),r.a.createElement("div",{className:"UserStyle"},n||0!==a.length?a.map((function(e){return r.a.createElement(y,{NewsReducer:e,key:e.title})})):r.a.createElement(h,null),r.a.createElement(v.a,{pageStart:0,loadMore:c,hasMore:a.length<69})))})),T=a(18),M=a.n(T),A=(a(46),a(30)),G=a.n(A),W=a(31),I=a.n(W),L=Object(u.b)(null,{searchNews:p})((function(e){var t=e.searchNews;Object(n.useEffect)((function(){M.a.AutoInit()}),[]);var a=Object(n.useState)(""),c=Object(s.a)(a,2),l=c[0],u=c[1],o=Object(b.f)();return r.a.createElement("div",null,r.a.createElement("div",{className:"navbar-fixed"},r.a.createElement("nav",null,r.a.createElement("div",{className:"nav-wrapper"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"/news_briefer"},r.a.createElement("i",{className:"material-icons"},"insert_chart"))),r.a.createElement("li",null,r.a.createElement("a",{href:"#!",className:"brand-logo right sidenav-trigger","data-target":"mobile-demo"},r.a.createElement("i",{className:"medium material-icons"},"menu"))),r.a.createElement("li",null,r.a.createElement("form",{onSubmit:function(e){o.push("/news_briefer/?q=".concat(l)),e.preventDefault(),""===l||" "===l?M.a.toast({html:"Please enter a topic before submitting"}):t(l)}},r.a.createElement("input",{type:"search",id:"search",value:l,placeholder:"Search News",onChange:function(e){u(e.target.value)}}))))))),r.a.createElement("ul",{className:"sidenav",id:"mobile-demo"},r.a.createElement("li",null,r.a.createElement("div",{className:"user-view"},r.a.createElement("div",{className:"background"},r.a.createElement("img",{src:G.a,alt:"BG_IMG"})),r.a.createElement("a",{href:"#!"},r.a.createElement("img",{className:"circle",src:I.a,alt:"user_img"})),r.a.createElement("a",{href:"#!"},r.a.createElement("span",{className:"black-text name"},"Lord Kanki")),r.a.createElement("a",{href:"#!"},r.a.createElement("span",{className:"black-text email"},"jdandturk69@gmail.com")))),r.a.createElement("li",null,r.a.createElement(f.b,{className:"sidenav-close",to:"/news_briefer/news"},"World Top Stories")),r.a.createElement("li",null,r.a.createElement("div",{className:"divider"})),r.a.createElement("li",null,r.a.createElement(f.b,{className:"sidenav-close",to:"/news_briefer/india",onClick:function(){return r.a.createElement(S,null)}},"India")),r.a.createElement("li",null,r.a.createElement("div",{className:"divider"})),r.a.createElement("li",null,r.a.createElement(f.b,{className:"sidenav-close",to:"/news_briefer/tech",onClick:function(){return r.a.createElement(x,null)}},"Technology")),r.a.createElement("li",null,r.a.createElement(f.b,{className:"sidenav-close",to:"/news_briefer/sports",onClick:function(){return r.a.createElement(R,null)}},"Sports")),r.a.createElement("li",null,r.a.createElement(f.b,{className:"sidenav-close",to:"/news_briefer/business",onClick:function(){return r.a.createElement(O,null)}},"Business")),r.a.createElement("li",null,r.a.createElement(f.b,{className:"sidenav-close",to:"/news_briefer/health",onClick:function(){return r.a.createElement(j,null)}},"Health")),r.a.createElement("li",null,r.a.createElement(f.b,{className:"sidenav-close",to:"/news_briefer/science",onClick:function(){return r.a.createElement(_,null)}},"Science")),r.a.createElement("li",null,r.a.createElement(f.b,{className:"sidenav-close",to:"/news_briefer/entertainment",onClick:function(){return r.a.createElement(k,null)}},"Entertainment")),r.a.createElement("li",null,r.a.createElement("div",{className:"divider"})),r.a.createElement("li",null,r.a.createElement(f.b,{className:"sidenav-close",to:"/news_briefer/about"},"About"))))})),C=Object(u.b)((function(e){return{new:e.NewsReducer}}),{searchNews:p})((function(e){var t=e.new,a=t.news,n=t.loading,c=e.searchNews;return r.a.createElement("div",null,r.a.createElement("ul",null,r.a.createElement("br",null),r.a.createElement("h5",{className:"center pink-text"},r.a.createElement("strong",null,"Search News")," "),r.a.createElement("div",{className:"UserStyle"},n||0!==a.length?a.map((function(e){return r.a.createElement(y,{NewsReducer:e,key:e.title})})):r.a.createElement(h,null),r.a.createElement(v.a,{pageStart:0,loadMore:c,hasMore:a.length<10}))))})),H=function(){return r.a.createElement(n.Fragment,null,r.a.createElement("br",null),r.a.createElement("h4",null,"This is a news briefing app."),r.a.createElement("h6",null," ","Version: ",r.a.createElement("strong",null,"1.0.0")," "),r.a.createElement("p",null,"\xa9 Azhar Hasan 2020."))},U=Object(u.b)((function(e){return{new:e.NewsReducer}}),{getNews:function(e){return function(){var t=Object(m.a)(i.a.mark((function t(a){var n,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,E(),t.next=4,fetch("https://yacdn.org/proxy/https://newsapi.org/v2/top-headlines?page=".concat(e,"&language=en&apiKey=ad2da63f7b9844b4a366d4c19afb0537"));case 4:return n=t.sent,t.next=7,n.json();case 7:r=t.sent,a({type:"GET_DATA",payload:r.articles}),d(),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),a({type:"LOGS_ERROR",payload:t.t0.response.statusText});case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.new,a=t.snews,n=t.loading,c=e.getNews;return r.a.createElement("div",null,r.a.createElement("ul",null,r.a.createElement("br",null),r.a.createElement("h5",{className:"center pink-text"},r.a.createElement("strong",null,"Latest News")," "),r.a.createElement("div",{className:"UserStyle"},n||0!==a.length?a.map((function(e){return r.a.createElement(y,{NewsReducer:e,key:e.title})})):r.a.createElement(h,null),r.a.createElement(v.a,{pageStart:0,loadMore:c,hasMore:a.length<100}))))})),K=a(14),D=a(32),P=a(33),B=a(7),F=a(2),q={news:[],sportnews:[],technews:[],healthnews:[],indianews:[],scinews:[],entnews:[],busnews:[],snews:[],page:1,loading:!1,errors:null},J=Object(K.combineReducers)({NewsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LOADING":return Object(F.a)(Object(F.a)({},e),{},{loading:!0});case"SPORTS_NEWS":return Object(F.a)(Object(F.a)({},e),{},{sportnews:[].concat(Object(B.a)(e.sportnews),Object(B.a)(t.payload)),loading:!1});case"TECH_NEWS":return Object(F.a)(Object(F.a)({},e),{},{technews:[].concat(Object(B.a)(e.technews),Object(B.a)(t.payload)),loading:!1});case"HEALTH_NEWS":return Object(F.a)(Object(F.a)({},e),{},{healthnews:[].concat(Object(B.a)(e.healthnews),Object(B.a)(t.payload)),loading:!1});case"INDIA_NEWS":return Object(F.a)(Object(F.a)({},e),{},{indianews:[].concat(Object(B.a)(e.indianews),Object(B.a)(t.payload)),loading:!1});case"SCIENCE_NEWS":return Object(F.a)(Object(F.a)({},e),{},{scinews:[].concat(Object(B.a)(e.scinews),Object(B.a)(t.payload)),loading:!1});case"ENT_NEWS":return Object(F.a)(Object(F.a)({},e),{},{entnews:[].concat(Object(B.a)(e.entnews),Object(B.a)(t.payload)),loading:!1});case"BUSINESS_NEWS":return Object(F.a)(Object(F.a)({},e),{},{busnews:[].concat(Object(B.a)(e.busnews),Object(B.a)(t.payload)),loading:!1});case"GET_DATA":return Object(F.a)(Object(F.a)({},e),{},{snews:[].concat(Object(B.a)(e.snews),Object(B.a)(t.payload)),loading:!1});case"SEARCH_NEWS":return Object(F.a)(Object(F.a)({},e),{},{news:t.payload,loading:!1});case"LOGS_ERROR":return console.error(t.payload),Object(F.a)(Object(F.a)({},e),{},{error:t.payload});case"SET_PAGE":return Object(F.a)(Object(F.a)({},e),{},{page:e.page+1});default:return e}}}),z=[P.a],V=Object(K.createStore)(J,{},Object(D.composeWithDevTools)(K.applyMiddleware.apply(void 0,z)));var Q=Object(b.g)((function(e){var t=e.history;return Object(n.useEffect)((function(){var e=t.listen((function(){window.scrollTo(0,0)}));return function(){e()}}),[]),null})),X=(a(48),a(49),function(){return Object(n.useEffect)((function(){M.a.AutoInit()})),r.a.createElement(u.a,{store:V},r.a.createElement(f.a,null,r.a.createElement(Q,null),r.a.createElement(n.Fragment,null,r.a.createElement(L,null),r.a.createElement("div",{className:"pink lighten-5 fillscr",style:{marginTop:"-12px"}},r.a.createElement(b.c,null,r.a.createElement(b.a,{exact:!0,path:"/news_briefer/",component:C}),r.a.createElement(b.a,{exact:!0,path:"/news_briefer/news",component:U}),r.a.createElement(b.a,{exact:!0,path:"/news_briefer/entertainment",component:k}),r.a.createElement(b.a,{exact:!0,path:"/news_briefer/health",component:j}),r.a.createElement(b.a,{exact:!0,path:"/news_briefer/sports",component:R}),r.a.createElement(b.a,{exact:!0,path:"/news_briefer/tech",component:x}),r.a.createElement(b.a,{exact:!0,path:"/news_briefer/science",component:_}),r.a.createElement(b.a,{exact:!0,path:"/news_briefer/india",component:S}),r.a.createElement(b.a,{exact:!0,path:"/news_briefer/business",component:O}),r.a.createElement("div",{className:"cus_container"},r.a.createElement(b.a,{exact:!0,path:"/news_briefer/about",component:H})))))))});l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(X,null)),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.2a48098b.chunk.js.map