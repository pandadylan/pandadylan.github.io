(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{136:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(140),i=n(142);t.default=function(){return r.a.createElement("div",{style:{color:"teal"}},r.a.createElement(o.Link,{to:"/"},"Home"),r.a.createElement(i.a,{headerText:"Contact"}),r.a.createElement("p",null,"Send us a message!"))}},139:function(e,t,n){"use strict";var a=n(37);t.__esModule=!0,t.withPrefix=f,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=a(n(143)),o=a(n(144)),i=a(n(7)),u=a(n(50)),s=a(n(51)),l=a(n(4)),c=a(n(0)),d=n(15),p=n(140);function f(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var h={activeClassName:l.default.string,activeStyle:l.default.object},v=function(e){function t(t){var n;n=e.call(this)||this,(0,s.default)((0,u.default)((0,u.default)(n)),"defaultGetProps",function(e){return e.isCurrent?{className:[n.props.className,n.props.activeClassName].filter(Boolean).join(" "),style:(0,o.default)({},n.props.style,n.props.activeStyle)}:null});var a=!1;"undefined"!=typeof window&&window.IntersectionObserver&&(a=!0);var r=t.location;return n.state={IOSupported:a,location:r},n.handleRef=n.handleRef.bind((0,u.default)((0,u.default)(n))),n}(0,i.default)(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},n.handleRef=function(e){var t,n,a,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue((0,p.parsePath)(r.props.to).pathname)},(a=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(t),a.disconnect(),n())})})).observe(t))},n.render=function(){var e=this,t=this.props,n=t.to,a=t.getProps,i=void 0===a?this.defaultGetProps:a,u=t.onClick,s=t.onMouseEnter,l=t.location,h=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),v=t.replace,m=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","location","activeClassName","activeStyle","ref","innerRef","state","replace"]),g=f(n);return c.default.createElement(d.Link,(0,o.default)({to:g,state:h,getProps:i,innerRef:this.handleRef,onMouseEnter:function(e){s&&s(e),___loader.hovering((0,p.parsePath)(n).pathname)},onClick:function(t){if(u&&u(t),!(0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)){t.preventDefault();var n=(0,p.parsePath)(g),a=n.pathname,r=n.hash;if(a===l.pathname||!a){var o=r?document.getElementById(r.substr(1)):null;null!==o?o.scrollIntoView():window.scrollTo(0,0)}w(g,{state:h,replace:v})}return!0}},m))},t}(c.default.Component);v.propTypes=(0,o.default)({},h,{innerRef:l.default.func,onClick:l.default.func,to:l.default.string.isRequired,replace:l.default.bool});var m,g=(m=v,function(e){return c.default.createElement(d.Location,null,function(t){var n=t.location;return c.default.createElement(m,(0,o.default)({location:n},e))})});t.default=g;var w=function(e,t){window.___navigate(e,t)};t.navigate=w;var y=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(e)};t.push=y;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(e)};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "push" instead.'),y(e)}},140:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return v}),n.d(t,"StaticQueryContext",function(){return f}),n.d(t,"StaticQuery",function(){return h});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),u=n(139),s=n.n(u);n.d(t,"Link",function(){return s.a}),n.d(t,"withPrefix",function(){return u.withPrefix}),n.d(t,"navigate",function(){return u.navigate}),n.d(t,"push",function(){return u.push}),n.d(t,"replace",function(){return u.replace}),n.d(t,"navigateTo",function(){return u.navigateTo});var l=n(26);n.d(t,"waitForRouteChange",function(){return l.c});var c=n(141),d=n.n(c);n.d(t,"PageRenderer",function(){return d.a});var p=n(38);n.d(t,"parsePath",function(){return p.a});var f=r.a.createContext({}),h=function(e){return r.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function v(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},141:function(e,t,n){var a;e.exports=(a=n(145))&&a.default||a},142:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("h1",null,e.headerText)}},143:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}},144:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},n.apply(this,arguments)}e.exports=n},145:function(e,t,n){"use strict";n.r(t);n(36);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),u=n(52),s=n(1),l=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(u.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=l}}]);
//# sourceMappingURL=component---src-pages-contact-js-d2e5df6194119d5834d2.js.map