/*! For license information please see lib-router.89a7c544.js.LICENSE.txt */
"use strict";(self.webpackChunkpdf_service_api_docs=self.webpackChunkpdf_service_api_docs||[]).push([["118"],{3070:function(e,t,n){var r,a,i,o;function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{J0:function(){return c},RQ:function(){return U},X3:function(){return O},Zn:function(){return w},aU:function(){return r},cP:function(){return m},cm:function(){return x},fp:function(){return v},lX:function(){return s},pC:function(){return R}}),(i=r||(r={})).Pop="POP",i.Push="PUSH",i.Replace="REPLACE";let u="popstate";function s(e){return void 0===e&&(e={}),function(e,t,n,a){void 0===a&&(a={});let{window:i=document.defaultView,v5Compat:o=!1}=a,s=i.history,h=r.Pop,m=null,v=g();function g(){return(s.state||{idx:null}).idx}function y(){h=r.Pop;let e=g(),t=null==e?null:e-v;v=e,m&&m({action:h,location:w.location,delta:t})}null==v&&(v=0,s.replaceState(l({},s.state,{idx:v}),""));function b(e){let t="null"!==i.location.origin?i.location.origin:i.location.href,n="string"==typeof e?e:d(e);return c(t,"No window.location.(origin|href) available to create URL for href: "+(n=n.replace(/ $/,"%20"))),new URL(n,t)}let w={get action(){return h},get location(){return e(i,s)},listen(e){if(m)throw Error("A history only accepts one active listener");return i.addEventListener(u,y),m=e,()=>{i.removeEventListener(u,y),m=null}},createHref:e=>t(i,e),createURL:b,encodeLocation(e){let t=b(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){h=r.Push;let a=f(w.location,e,t);n&&n(a,e);let l=p(a,v=g()+1),u=w.createHref(a);try{s.pushState(l,"",u)}catch(e){if(e instanceof DOMException&&"DataCloneError"===e.name)throw e;i.location.assign(u)}o&&m&&m({action:h,location:w.location,delta:1})},replace:function(e,t){h=r.Replace;let a=f(w.location,e,t);n&&n(a,e);let i=p(a,v=g()),l=w.createHref(a);s.replaceState(i,"",l),o&&m&&m({action:h,location:w.location,delta:0})},go:e=>s.go(e)};return w}(function(e,t){let{pathname:n,search:r,hash:a}=e.location;return f("",{pathname:n,search:r,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||"default")},function(e,t){return"string"==typeof t?t:d(t)},null,e)}function c(e,t){if(!1===e||null==e)throw Error(t)}function h(e,t){if(!e){"undefined"!=typeof console&&console.warn(t);try{throw Error(t)}catch(e){}}}function p(e,t){return{usr:e.state,key:e.key,idx:t}}function f(e,t,n,r){return void 0===n&&(n=null),l({pathname:"string"==typeof e?e:e.pathname,search:"",hash:""},"string"==typeof t?m(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}function d(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function m(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function v(e,t,n){return void 0===n&&(n="/"),function(e,t,n,r){let a=w(("string"==typeof t?m(t):t).pathname||"/",n);if(null==a)return null;let i=function e(t,n,r,a){void 0===n&&(n=[]),void 0===r&&(r=[]),void 0===a&&(a="");let i=(t,i,o)=>{let l={relativePath:void 0===o?t.path||"":o,caseSensitive:!0===t.caseSensitive,childrenIndex:i,route:t};l.relativePath.startsWith("/")&&(c(l.relativePath.startsWith(a),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+a)+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),l.relativePath=l.relativePath.slice(a.length));let u=U([a,l.relativePath]),s=r.concat(l);if(t.children&&t.children.length>0&&(c(!0!==t.index,'Index routes must not have child routes. Please remove all child routes from route path "'+u+'".'),e(t.children,n,s,u)),null!=t.path||!!t.index)n.push({path:u,score:function(e,t){let n=e.split("/"),r=n.length;return n.some(y)&&(r+=-2),t&&(r+=2),n.filter(e=>!y(e)).reduce((e,t)=>e+(g.test(t)?3:""===t?1:10),r)}(u,t.index),routesMeta:s})};return t.forEach((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let n of function e(t){let n=t.split("/");if(0===n.length)return[];let[r,...a]=n,i=r.endsWith("?"),o=r.replace(/\?$/,"");if(0===a.length)return i?[o,""]:[o];let l=e(a.join("/")),u=[];return u.push(...l.map(e=>""===e?o:[o,e].join("/"))),i&&u.push(...l),u.map(e=>t.startsWith("/")&&""===e?"/":e)}(e.path))i(e,t,n);else i(e,t)}),n}(e);(function(e){e.sort((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)))})(i);let o=null;for(let e=0;null==o&&e<i.length;++e){let t=function(e){try{return e.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(t){return h(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t)+")."),e}}(a);o=function(e,t,n){void 0===n&&(n=!1);let{routesMeta:r}=e,a={},i="/",o=[];for(let e=0;e<r.length;++e){let l=r[e],u=e===r.length-1,s="/"===i?t:t.slice(i.length)||"/",c=b({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},s),h=l.route;if(!c&&u&&n&&!r[r.length-1].route.index&&(c=b({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},s)),!c)return null;Object.assign(a,c.params),o.push({params:a,pathname:U([i,c.pathname]),pathnameBase:P(U([i,c.pathnameBase])),route:h}),"/"!==c.pathnameBase&&(i=U([i,c.pathnameBase]))}return o}(i[e],t,r)}return o}(e,t,n,!1)}(o=a||(a={})).data="data",o.deferred="deferred",o.redirect="redirect",o.error="error";let g=/^:[\w-]+$/,y=e=>"*"===e;function b(e,t){"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!0),h("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*"))+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, '+('please change the route path to "'+e.replace(/\*$/,"/*"))+'".');let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),a+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":""!==e&&"/"!==e&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),r]}(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let i=a[0],o=i.replace(/(.)\/+$/,"$1"),l=a.slice(1);return{params:r.reduce((e,t,n)=>{let{paramName:r,isOptional:a}=t;if("*"===r){let e=l[n]||"";o=i.slice(0,i.length-e.length).replace(/(.)\/+$/,"$1")}let u=l[n];return a&&!u?e[r]=void 0:e[r]=(u||"").replace(/%2F/g,"/"),e},{}),pathname:i,pathnameBase:o,pattern:e}}function w(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function S(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r))+"].  Please separate it out to the "+("`to."+n)+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function x(e,t){let n=e.filter((e,t)=>0===t||e.route.path&&e.route.path.length>0);return t?n.map((e,t)=>t===n.length-1?e.pathname:e.pathnameBase):n.map(e=>e.pathnameBase)}function R(e,t,n,r){let a,i;void 0===r&&(r=!1),"string"==typeof e?a=m(e):(c(!(a=l({},e)).pathname||!a.pathname.includes("?"),S("?","pathname","search",a)),c(!a.pathname||!a.pathname.includes("#"),S("#","pathname","hash",a)),c(!a.search||!a.search.includes("#"),S("#","search","hash",a)));let o=""===e||""===a.pathname,u=o?"/":a.pathname;if(null==u)i=n;else{let e=t.length-1;if(!r&&u.startsWith("..")){let t=u.split("/");for(;".."===t[0];)t.shift(),e-=1;a.pathname=t.join("/")}i=e>=0?t[e]:"/"}let s=function(e,t){void 0===t&&(t="/");let{pathname:n,search:r="",hash:a=""}="string"==typeof e?m(e):e;return{pathname:n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)}),n.length>1?n.join("/"):"/"}(n,t):t,search:C(r),hash:E(a)}}(a,i),h=u&&"/"!==u&&u.endsWith("/"),p=(o||"."===u)&&n.endsWith("/");return!s.pathname.endsWith("/")&&(h||p)&&(s.pathname+="/"),s}let U=e=>e.join("/").replace(/\/\/+/g,"/"),P=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),C=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",E=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";class O extends Error{}Symbol("deferred")},4091:function(e,t,n){n.d(t,{VK:function(){return w}});var r,a,i,o,l,u,s=n(5271),c=n(967),h=n(5491),p=n(3070);function f(){return(f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}let d="application/x-www-form-urlencoded";function m(e){return null!=e&&"string"==typeof e.tagName}let v=null,g=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function y(e){return null==e||g.has(e)?e:null}try{window.__reactRouterVersion="6"}catch(e){}let b=(i||(i=n.t(s,2))).startTransition;(o||(o=n.t(c,2))).flushSync;(i||(i=n.t(s,2))).useId;function w(e){let{basename:t,children:n,future:r,window:a}=e,i=s.useRef();null==i.current&&(i.current=(0,p.lX)({window:a,v5Compat:!0}));let o=i.current,[l,u]=s.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},f=s.useCallback(e=>{c&&b?b(()=>u(e)):u(e)},[u,c]);return s.useLayoutEffect(()=>o.listen(f),[o,f]),s.createElement(h.F0,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}"undefined"!=typeof window&&void 0!==window.document&&window.document.createElement;function S(e){let t=React.useContext(UNSAFE_DataRouterContext);return t||UNSAFE_invariant(!1),t}(r=l||(l={})).UseScrollRestoration="useScrollRestoration",r.UseSubmit="useSubmit",r.UseSubmitFetcher="useSubmitFetcher",r.UseFetcher="useFetcher",r.useViewTransitionState="useViewTransitionState",(a=u||(u={})).UseFetcher="useFetcher",a.UseFetchers="useFetchers",a.UseScrollRestoration="useScrollRestoration";let x=0,R=()=>"__"+String(++x)+"__"},5491:function(e,t,n){n.d(t,{F0:function(){return x},TH:function(){return v},s0:function(){return y}});var r,a,i,o,l=n(5271),u=n(3070);function s(){return(s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}let c=l.createContext(null),h=l.createContext(null),p=l.createContext(null),f=l.createContext({outlet:null,matches:[],isDataRoute:!1}),d=l.createContext(null);function m(){return null!=l.useContext(p)}function v(){return m()||(0,u.J0)(!1),l.useContext(p).location}function g(e){!l.useContext(h).static&&l.useLayoutEffect(e)}function y(){let{isDataRoute:e}=l.useContext(f);return e?function(){var e;let t;let{router:n}=(e=b.UseNavigateStable,(t=l.useContext(c))||(0,u.J0)(!1),t),r=S(w.UseNavigateStable),a=l.useRef(!1);return g(()=>{a.current=!0}),l.useCallback(function(e,t){void 0===t&&(t={}),a.current&&("number"==typeof e?n.navigate(e):n.navigate(e,s({fromRouteId:r},t)))},[n,r])}():function(){m()||(0,u.J0)(!1);let e=l.useContext(c),{basename:t,future:n,navigator:r}=l.useContext(h),{matches:a}=l.useContext(f),{pathname:i}=v(),o=JSON.stringify((0,u.cm)(a,n.v7_relativeSplatPath)),s=l.useRef(!1);return g(()=>{s.current=!0}),l.useCallback(function(n,a){if(void 0===a&&(a={}),!s.current)return;if("number"==typeof n){r.go(n);return}let l=(0,u.pC)(n,JSON.parse(o),i,"path"===a.relative);null==e&&"/"!==t&&(l.pathname="/"===l.pathname?t:(0,u.RQ)([t,l.pathname])),(a.replace?r.replace:r.push)(l,a.state,a)},[t,r,o,i,e])}()}var b=((r=b||{}).UseBlocker="useBlocker",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r);var w=((a=w||{}).UseBlocker="useBlocker",a.UseLoaderData="useLoaderData",a.UseActionData="useActionData",a.UseRouteError="useRouteError",a.UseNavigation="useNavigation",a.UseRouteLoaderData="useRouteLoaderData",a.UseMatches="useMatches",a.UseRevalidator="useRevalidator",a.UseNavigateStable="useNavigate",a.UseRouteId="useRouteId",a);function S(e){var t;let n;let r=(t=0,(n=l.useContext(f))||(0,u.J0)(!1),n),a=r.matches[r.matches.length-1];return a.route.id||(0,u.J0)(!1),a.route.id}function x(e){let{basename:t="/",children:n=null,location:r,navigationType:a=u.aU.Pop,navigator:i,static:o=!1,future:c}=e;m()&&(0,u.J0)(!1);let f=t.replace(/^\/*/,"/"),d=l.useMemo(()=>({basename:f,navigator:i,static:o,future:s({v7_relativeSplatPath:!1},c)}),[f,c,i,o]);"string"==typeof r&&(r=(0,u.cP)(r));let{pathname:v="/",search:g="",hash:y="",state:b=null,key:w="default"}=r,S=l.useMemo(()=>{let e=(0,u.Zn)(v,f);return null==e?null:{location:{pathname:e,search:g,hash:y,state:b,key:w},navigationType:a}},[f,v,g,y,b,w,a]);return null==S?null:l.createElement(h.Provider,{value:d},l.createElement(p.Provider,{children:n,value:S}))}(o||(o=n.t(l,2))).startTransition;var R=((i=R||{})[i.pending=0]="pending",i[i.success=1]="success",i[i.error=2]="error",i);new Promise(()=>{})}}]);