(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{138:function(e,a,t){"use strict";t.r(a);var n=t(0),A=t.n(n),i=t(149);a.default=function(e){return A.a.createElement(i.a,{location:e},A.a.createElement("h1",null,"NOT FOUND"),A.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},143:function(e,a,t){"use strict";t.r(a),t.d(a,"graphql",function(){return f}),t.d(a,"StaticQueryContext",function(){return u}),t.d(a,"StaticQuery",function(){return p});var n=t(0),A=t.n(n),i=t(4),r=t.n(i),o=t(142),c=t.n(o);t.d(a,"Link",function(){return c.a}),t.d(a,"withPrefix",function(){return o.withPrefix}),t.d(a,"navigate",function(){return o.navigate}),t.d(a,"push",function(){return o.push}),t.d(a,"replace",function(){return o.replace}),t.d(a,"navigateTo",function(){return o.navigateTo});var l=t(144),s=t.n(l);t.d(a,"PageRenderer",function(){return s.a});var d=t(33);t.d(a,"parsePath",function(){return d.a});var u=A.a.createContext({}),p=function(e){return A.a.createElement(u.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):A.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},144:function(e,a,t){var n;e.exports=(n=t(146))&&n.default||n},145:function(e){e.exports={data:{site:{siteMetadata:{title:"Enigma"}},background:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAQCAwX/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAF/FcuIDQf/xAAbEAACAgMBAAAAAAAAAAAAAAACAwARARIUJP/aAAgBAQABBQJ1MHk1gsJQsx6HFKn/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAcEAACAgIDAAAAAAAAAAAAAAAAAREhAhIDMXH/2gAIAQEABj8Cy4m1LRdmukHZj6XJ/8QAGxAAAgMBAQEAAAAAAAAAAAAAAREAITFBUXH/2gAIAQEAAT8hEQFKExdrSyDmTiM6C9qFQK0LltEfqn//2gAMAwEAAgADAAAAENAP/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPxA//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPxA//8QAHRABAQACAwADAAAAAAAAAAAAAREAITFBUXGRof/aAAgBAQABPxCrEIXY3TPKYzVGB0fJhBZ42T6MT5hVBPMkQqpvviY0ve2/wZ//2Q==",aspectRatio:1.5002143163309045,src:"/static/6b6971baeb8265aadc7f014edaa6ff31/cf3fe/bg.jpeg",srcSet:"/static/6b6971baeb8265aadc7f014edaa6ff31/c1d8d/bg.jpeg 250w,\n/static/6b6971baeb8265aadc7f014edaa6ff31/e895a/bg.jpeg 500w,\n/static/6b6971baeb8265aadc7f014edaa6ff31/cf3fe/bg.jpeg 1000w,\n/static/6b6971baeb8265aadc7f014edaa6ff31/81739/bg.jpeg 1500w,\n/static/6b6971baeb8265aadc7f014edaa6ff31/32f60/bg.jpeg 2000w,\n/static/6b6971baeb8265aadc7f014edaa6ff31/ca702/bg.jpeg 3000w,\n/static/6b6971baeb8265aadc7f014edaa6ff31/6f30e/bg.jpeg 7000w",sizes:"(max-width: 1000px) 100vw, 1000px"}}}}}},146:function(e,a,t){"use strict";t.r(a);t(34);var n=t(0),A=t.n(n),i=t(4),r=t.n(i),o=t(48),c=t(2),l=function(e){var a=e.location,t=c.default.getResourcesForPathnameSync(a.pathname);return A.a.createElement(o.a,Object.assign({location:a,pageResources:t},t.json))};l.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},a.default=l},147:function(e,a,t){e.exports=t.p+"static/logo-7665f742d9402c726ad0cd313e098ef8.svg"},148:function(e,a,t){},149:function(e,a,t){"use strict";var n=t(145),A=t(0),i=t.n(A),r=t(4),o=t.n(r),c=t(150),l=t.n(c),s=t(143),d=t(7),u=t.n(d),p=t(35),f=t.n(p),h=t(152),g=t(147),m=t.n(g),b=t(151),E=t.n(b),w=h.a.div.withConfig({displayName:"header__HeaderWrapper",componentId:"sc-31ozxh-0"})(["background:#524763;margin-bottom:1.45rem;overflow:hidden;position:relative;height:",";h1{img{height:80px;}}"],function(e){return e.isHome?"70vh":"20vh"}),x=h.a.div.withConfig({displayName:"header__HeaderContainer",componentId:"sc-31ozxh-1"})(["margin:0 auto;max-width:960px;padding:1.45rem 1.0875rem;position:relative;z-index:2;display:flex;justify-content:space-between;"]),y=h.a.nav.withConfig({displayName:"header__MainNav",componentId:"sc-31ozxh-2"})(["ul{list-style:none;display:flex;li{margin-left:10px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;a{text-decoration:none;color:#fff;&:hover{border-bottom:3px solid #524763;}}}}"]),v=function(e){function a(){for(var a,t=arguments.length,n=new Array(t),A=0;A<t;A++)n[A]=arguments[A];return(a=e.call.apply(e,[this].concat(n))||this).componentDidUpdate=function(e,t){a.props.location.pathname!==e.location.pathname&&("/"===a.props.location.pathname?a.wrapper.animate([{height:"20vh"},{height:"70vh"}],{duration:300,fill:"forwards",easing:"cubic-bezier(0.86, 0, 0.07, 1)",iterations:1}):a.wrapper.animate([{height:"70vh"},{height:"20vh"}],{duration:300,fill:"forwards",easing:"cubic-bezier(0.86, 0, 0.07, 1)",iterations:1}))},a}return u()(a,e),a.prototype.render=function(){var e=this,a=this.props,t=a.data;a.location;return i.a.createElement(w,{isHome:"/"===this.props.location.pathname,ref:function(a){return e.wrapper=f.a.findDOMNode(a)}},i.a.createElement(x,null,i.a.createElement("h1",{style:{margin:0}},i.a.createElement(s.Link,{to:"/",style:{color:"white",textDecoration:"none",fontSize:"20px"}},i.a.createElement("img",{src:m.a,alt:"Level Up Logo"}))),i.a.createElement(y,null,i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(s.Link,{to:"/"},"Home")),i.a.createElement("li",null,i.a.createElement(s.Link,{to:"/about"},"About"))))),i.a.createElement(E.a,{style:{position:"absolute",left:0,top:0,width:"100%",height:"100%",opacity:"0.3"},fluid:t.background.childImageSharp.fluid}))},a}(i.a.Component),j=(t(148),function(e){var a=e.children,t=e.location;return i.a.createElement(s.StaticQuery,{query:"1382998565",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(l.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(v,{data:e,location:t}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},a))},data:n})});j.propTypes={children:o.a.node.isRequired};a.a=j}}]);
//# sourceMappingURL=component---src-pages-404-js-bdecf36eca88e1ff9fc8.js.map