(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[285],{8324:function(e,t,n){"use strict";var o,r,i,a,l,s;function c(e,t){return{type:"FILE",name:e,content:t}}function d(e,t){return{type:"DIRECTORY",name:e,files:t.filter(e=>null!==e)}}function u(e){return e.name}function f(e){return"DIRECTORY"===e.type}function m(e){return"FILE"===e.type}function p(e){var t,n;let o=function(e){let t=e.name.split(".");return t.length>1&&t.reverse()[0]||null}(e);return o&&(n=t=o,Object.values(i).some(e=>e===n))?function(e){switch(e){case"gitignore":return"GIT";case"js":return"JAVASCRIPT";case"json":return"JSON";case"md":return"MARKDOWN";case"ts":return"TYPESCRIPT"}}(t):void 0}function h(e){let t=u(e);return m(e)||0===e.files.length?[t]:[t].concat(e.files.flatMap(h).map(e=>"".concat(t,"/").concat(e)))}function b(e){return e.split("/").reverse()[0]}function C(e){return e.split("/").slice(0,-1)}function x(e){return C(e).join("/")}n.d(t,{IQ:function(){return f},Le:function(){return p},PF:function(){return d},SQ:function(){return o},YB:function(){return C},c8:function(){return h},cD:function(){return b},cQ:function(){return u},i$:function(){return function e(t,n){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=o?"".concat(o,"/").concat(t.name):t.name;return r===n?t:f(t)&&n.startsWith("".concat(r,"/"))?t.files.map(t=>e(t,n,r)).find(e=>!!e):void 0}},pW:function(){return function e(t){let n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=u(t),r=[o,t];return m(t)||0===t.files.length?[r]:[r].concat(t.files.flatMap(t=>e(t,n)).map(e=>{let[t,n]=e;return["".concat(o,"/").concat(t),n]}))}},qf:function(){return x},tP:function(){return c},zE:function(){return m}}),(a=o||(o={})).Git="GIT",a.JavaScript="JAVASCRIPT",a.Json="JSON",a.Markdown="MARKDOWN",a.TypeScript="TYPESCRIPT",(l=r||(r={})).File="FILE",l.Directory="DIRECTORY",(s=i||(i={})).Js="js",s.Json="json",s.Md="md",s.Ts="ts",s.Gitignore="gitignore"},7176:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var o=n(5893),r=n(6922),i=n(4081),a=n(7294),l=n(2994),s=n(7603),c=n(2275),d=a.memo(function(e){let{id:t,className:n,label:a,value:d,options:u,error:f,fixedErrorContainer:m,display:p,onChange:h,disabled:b=()=>!1,...C}=e,x=(0,o.jsx)("select",{id:t,className:(0,r.dh)(i.zp,(0,r.o3)("p-1","px-2"),(0,r.bf)("w-full"),(0,r.oc)("cursor-pointer"),(0,r.JB)("text-sm")),onChange:e=>{let t=e.target.value,n=(0,s.$3)(u,t);void 0!==n&&h(n,e)},value:(0,s.L3)(u,d),"aria-invalid":!!f,"aria-describedby":"".concat(t,"-alert"),...c.j,...C,children:(0,s.rd)(u).map(e=>{let[n,r]=e;return(0,o.jsx)("option",{value:n,disabled:b(r),children:p?p(r):n},t+n)})});return t&&a?(0,o.jsx)(l.Z,{id:t,label:a,error:f,fixedErrorContainer:m,className:n,children:x}):x})},2994:function(e,t,n){"use strict";n.d(t,{T:function(){return a},Z:function(){return l}});var o=n(5893),r=n(6922),i=n(7294).memo(function(e){let{id:t,error:n}=e;return(0,o.jsx)("span",{id:t,className:(0,r.dh)((0,r.zP)("text-red-700","dark:text-red-300"),(0,r.JB)("text-xs")),role:n?"alert":void 0,"aria-hidden":!n,children:n})});function a(e){return"".concat(e,"-alert")}function l(e){let{id:t,className:n,label:l,error:s,fixedErrorContainer:c,children:d}=e;return(0,o.jsxs)("div",{className:(0,r.dh)((0,r.bf)("w-full"),n),children:[(0,o.jsxs)("label",{htmlFor:t,className:(0,r.dh)((0,r.jf)("flex"),(0,r.Me)("flex-col"),(0,r.cq)("items-start"),(0,r.o3)({"pb-6":c&&!s})),children:[(0,o.jsx)("span",{className:(0,r.dh)((0,r.JB)("text-sm")),children:l}),d]}),(0,o.jsx)(i,{id:a(t),error:s})]})}},7603:function(e,t,n){"use strict";function o(e){return Array.isArray(e)?e:Object.entries(e)}function r(e,t){var n;return Array.isArray(e)?null===(n=e.find(e=>{let[n]=e;return n===t}))||void 0===n?void 0:n[1]:e[t]}function i(e,t){var n,o;return Array.isArray(e)?null===(n=e.find(e=>{let[n,o]=e;return o===t}))||void 0===n?void 0:n[0]:null===(o=Object.entries(e).find(e=>{let[n,o]=e;return o===t}))||void 0===o?void 0:o[0]}n.d(t,{L3:function(){return i},$3:function(){return r},rd:function(){return o}})},2275:function(e,t,n){"use strict";n.d(t,{j:function(){return o}});let o={autoComplete:"off","data-lpignore":"true","data-form-type":"other"}},3051:function(e,t,n){"use strict";var o=n(5893);n(7294);var r=n(2646);t.Z=(0,r.$)(function(){return(0,o.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})})},3091:function(e,t,n){"use strict";var o=n(5893);n(7294);var r=n(2646);t.Z=(0,r.$)(function(){return(0,o.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})})},7006:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var o=n(5893),r=n(6922),i=n(4081),a=n(7294),l=n(3921);function s(){return(0,o.jsx)("span",{className:(0,r.dh)((0,r.jf)("block"),(0,r.bf)("w-1"),(0,r.Cb)("h-1"),(0,r.E0)("rounded-full"),(0,r.Cz)("bg-gray-700","dark:bg-gray-300"))})}function c(e){let{small:t}=e;return(0,o.jsxs)("span",{className:(0,r.dh)(i.S,(0,r.bf)({"w-6":t,"w-8":!t}),(0,r.Cb)({"h-6":t,"h-8":!t}),(0,r.Dh)("space-y-0.5"),(0,r.o3)("px-1")),children:[(0,o.jsx)(s,{}),(0,o.jsx)(s,{}),(0,o.jsx)(s,{})]})}var d=a.memo(function(e){let{className:t,onClick:n,items:r,small:i,...a}=e;return(0,o.jsx)(l.Z,{className:t,onClick:n,items:r,title:"Actions","aria-label":"actions",...a,children:(0,o.jsx)(c,{small:i})})})},7285:function(e,t,n){"use strict";n.d(t,{Z:function(){return e0}});var o,r,i=n(5893),a=n(8324);function l(e,t){return{root:e,state:b(h(),e,t)}}function s(e,t){return p(e,(e,n)=>x(e,n,t))}function c(e,t){return e.state.focusedPath===t}function d(e){let t=e.state.activePath?e.state.items.get(e.state.activePath):void 0;return t&&(0,a.zE)(t)?t:void 0}function u(e){return e.state.activePath}function f(e,t){return e.state.directoryState.get(t)||!1}function m(e){return!!e.state.directoryState.get(e.state.focusedPath)}function p(e,t){return{...e,state:t(e.state,e.root)}}function h(){return{items:new Map,paths:[],visiblePaths:[],directoryState:new Map,focusedPath:""}}function b(e,t,n){var o;let r=(0,a.pW)(t),i=r.map(e=>{let[t,n]=e;return t}),l=new Map(r),s=(0,a.cQ)(t),c=r.reduce((t,n)=>{let[o,r]=n;return(0,a.IQ)(r)?t.set(o,e.directoryState.get(o)||!1):t},new Map),d=n&&l.has(n)?n:e.activePath&&l.has(e.activePath)?e.activePath:null===(o=r.find(e=>{let[t,n]=e;return(0,a.zE)(n)}))||void 0===o?void 0:o[0],u=d||(l.has(e.focusedPath)?e.focusedPath:s);return x({...e,paths:i,visiblePaths:[],items:l,directoryState:c,focusedPath:u,activePath:d},t,d||s)}function C(e,t){return{...e,visiblePaths:function(e,t){let n;let o=[];for(let r of(0,a.c8)(t))n&&r.startsWith(n)||(n=!1===e.directoryState.get(r)?r:void 0,o.push(r));return o}(e,t)}}function x(e,t,n){let o=e.items.get(n);return o?C((0,a.zE)(o)?{...S(e,n),focusedPath:n,activePath:n}:function(e,t){let n=S(e,t),o=n.directoryState.get(t);return void 0!==o?{...n,directoryState:new Map(n.directoryState).set(t,!o),focusedPath:t}:n}(e,n),t):e}function y(e,t){let n=(0,a.qf)(e.focusedPath);return(0,a.i$)(t,n)?M(e,n):e}function E(e){let t=e.visiblePaths,n=t.indexOf(e.focusedPath),o=-1===n?void 0:t[n-1];return o?M(e,o):e}function v(e){let t=e.visiblePaths,n=t.indexOf(e.focusedPath),o=-1===n?void 0:t[n+1];return o?M(e,o):e}function j(e){let t=e.visiblePaths[0];return t?M(e,t):e}function g(e){let t=e.visiblePaths,n=t[t.length-1];return n?M(e,n):e}function k(e,t){let n=(0,a.qf)(e.focusedPath),o=e.visiblePaths.filter(e=>(0,a.qf)(e)===n).reduce((e,t)=>e.set(t,!0),new Map(e.directoryState));return C({...e,directoryState:o},t)}function M(e,t){return{...e,focusedPath:t}}function S(e,t){let[n,o]=(0,a.YB)(t).reduce((e,t)=>{let[n,o]=e,r=o?"".concat(o,"/").concat(t):t;return[n.set(r,!0),r]},[new Map(e.directoryState),void 0]);return{...e,directoryState:n}}var D=n(6922),w=n(760),L=n(7294),I=n(2573),A=n(4363),P=n(9535),O=n.n(P),N=L.memo(function(e){let{content:t="",language:n=a.SQ.TypeScript}=e;return n===a.SQ.Markdown?(0,i.jsx)(A.Z,{className:(0,D.dh)((0,D.Cb)("h-full"),(0,D.tx)("overflow-y-scroll"),(0,D.o3)("p-4")),content:t}):(0,i.jsx)(I.y$,{theme:{plain:{},styles:[]},code:t,language:function(e){switch(e){case a.SQ.Git:return"git";case a.SQ.Json:case a.SQ.JavaScript:return"javascript";case a.SQ.TypeScript:default:return"typescript"}}(n),children:e=>{let{className:t,style:n,tokens:o,getLineProps:r,getTokenProps:a}=e;return(0,i.jsx)("pre",{className:(0,D.dh)((0,D.sx)(O().code),(0,D.sx)(t),(0,D.Cb)("h-full")),style:{...n,marginTop:0},children:o.map((e,t)=>(0,i.jsx)("div",{...r({line:e,key:t}),children:e.map((e,t)=>(0,i.jsx)("span",{...a({token:e,key:t})}))}))})}})});function V(e){let[t,n]=L.useState(!!e),o=L.useCallback(()=>n(e=>!e),[]),r=L.useCallback(()=>n(!0),[]),i=L.useCallback(()=>n(!1),[]);return{state:t,setState:n,toggle:o,setOn:r,setOff:i}}var T=n(2646);(o=r||(r={})).Down="Down",o.Left="Left",o.Right="Right",o.Up="Up";var _=(0,T.$)(function(e){let{direction:t}=e;return(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:function(e){switch(e){case"Down":return"M19 9l-7 7-7-7";case"Left":return"M15 19l-7-7 7-7";case"Right":return"M9 5l7 7-7 7";case"Up":return"M5 15l7-7 7 7"}}(t)})}),z=(0,T.$)(function(){return(0,i.jsx)("path",{d:"M2.6,10.59L8.38,4.8L10.07,6.5C9.83,7.35 10.22,8.28 11,8.73V14.27C10.4,14.61 10,15.26 10,16A2,2 0 0,0 12,18A2,2 0 0,0 14,16C14,15.26 13.6,14.61 13,14.27V9.41L15.07,11.5C15,11.65 15,11.82 15,12A2,2 0 0,0 17,14A2,2 0 0,0 19,12A2,2 0 0,0 17,10C16.82,10 16.65,10 16.5,10.07L13.93,7.5C14.19,6.57 13.71,5.55 12.78,5.16C12.35,5 11.9,4.96 11.5,5.07L9.8,3.38L10.59,2.6C11.37,1.81 12.63,1.81 13.41,2.6L21.4,10.59C22.19,11.37 22.19,12.63 21.4,13.41L13.41,21.4C12.63,22.19 11.37,22.19 10.59,21.4L2.6,13.41C1.81,12.63 1.81,11.37 2.6,10.59Z"})},{strokeWidth:0}),H=(0,T.$)(function(){return(0,i.jsx)("path",{d:"M3,3H21V21H3V3M7.73,18.04C8.13,18.89 8.92,19.59 10.27,19.59C11.77,19.59 12.8,18.79 12.8,17.04V11.26H11.1V17C11.1,17.86 10.75,18.08 10.2,18.08C9.62,18.08 9.38,17.68 9.11,17.21L7.73,18.04M13.71,17.86C14.21,18.84 15.22,19.59 16.8,19.59C18.4,19.59 19.6,18.76 19.6,17.23C19.6,15.82 18.79,15.19 17.35,14.57L16.93,14.39C16.2,14.08 15.89,13.87 15.89,13.37C15.89,12.96 16.2,12.64 16.7,12.64C17.18,12.64 17.5,12.85 17.79,13.37L19.1,12.5C18.55,11.54 17.77,11.17 16.7,11.17C15.19,11.17 14.22,12.13 14.22,13.4C14.22,14.78 15.03,15.43 16.25,15.95L16.67,16.13C17.45,16.47 17.91,16.68 17.91,17.26C17.91,17.74 17.46,18.09 16.76,18.09C15.93,18.09 15.45,17.66 15.09,17.06L13.71,17.86Z"})},{strokeWidth:0}),Z=(0,T.$)(function(){return(0,i.jsx)("path",{d:"M5,3H7V5H5V10A2,2 0 0,1 3,12A2,2 0 0,1 5,14V19H7V21H5C3.93,20.73 3,20.1 3,19V15A2,2 0 0,0 1,13H0V11H1A2,2 0 0,0 3,9V5A2,2 0 0,1 5,3M19,3A2,2 0 0,1 21,5V9A2,2 0 0,0 23,11H24V13H23A2,2 0 0,0 21,15V19A2,2 0 0,1 19,21H17V19H19V14A2,2 0 0,1 21,12A2,2 0 0,1 19,10V5H17V3H19M12,15A1,1 0 0,1 13,16A1,1 0 0,1 12,17A1,1 0 0,1 11,16A1,1 0 0,1 12,15M8,15A1,1 0 0,1 9,16A1,1 0 0,1 8,17A1,1 0 0,1 7,16A1,1 0 0,1 8,15M16,15A1,1 0 0,1 17,16A1,1 0 0,1 16,17A1,1 0 0,1 15,16A1,1 0 0,1 16,15Z"})},{strokeWidth:1}),F=(0,T.$)(function(){return(0,i.jsx)("path",{d:"M20.56 18H3.44C2.65 18 2 17.37 2 16.59V7.41C2 6.63 2.65 6 3.44 6H20.56C21.35 6 22 6.63 22 7.41V16.59C22 17.37 21.35 18 20.56 18M6.81 15.19V11.53L8.73 13.88L10.65 11.53V15.19H12.58V8.81H10.65L8.73 11.16L6.81 8.81H4.89V15.19H6.81M19.69 12H17.77V8.81H15.85V12H13.92L16.81 15.28L19.69 12Z"})},{strokeWidth:0}),W=(0,T.$)(function(){return(0,i.jsx)("path",{d:"M3,3H21V21H3V3M13.71,17.86C14.21,18.84 15.22,19.59 16.8,19.59C18.4,19.59 19.6,18.76 19.6,17.23C19.6,15.82 18.79,15.19 17.35,14.57L16.93,14.39C16.2,14.08 15.89,13.87 15.89,13.37C15.89,12.96 16.2,12.64 16.7,12.64C17.18,12.64 17.5,12.85 17.79,13.37L19.1,12.5C18.55,11.54 17.77,11.17 16.7,11.17C15.19,11.17 14.22,12.13 14.22,13.4C14.22,14.78 15.03,15.43 16.25,15.95L16.67,16.13C17.45,16.47 17.91,16.68 17.91,17.26C17.91,17.74 17.46,18.09 16.76,18.09C15.93,18.09 15.45,17.66 15.09,17.06L13.71,17.86M13,11.25H8V12.75H9.5V20H11.25V12.75H13V11.25Z"})},{strokeWidth:0});function Q(e){let{language:t}=e;switch(t){case a.SQ.Git:return(0,i.jsx)(z,{fill:"#f34f29"});case a.SQ.JavaScript:return(0,i.jsx)(H,{fill:"#f1dd35"});case a.SQ.Json:return(0,i.jsx)(Z,{fill:"#f1dd35"});case a.SQ.Markdown:return(0,i.jsx)(F,{fill:"#2889b0"});case a.SQ.TypeScript:return(0,i.jsx)(W,{fill:"#358ef1"});default:return(0,i.jsx)(i.Fragment,{})}}function $(e){let{item:t,path:n,depth:o,fileTree:l,focused:s,onSelect:d}=e,u=l.state.activePath===n,m=c(l,n),p=f(l,n),h=(0,a.zE)(t)&&(0,a.Le)(t),b=(0,a.IQ)(t)?p?r.Down:r.Right:void 0;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("span",{id:K(n),className:(0,D.dh)((0,D.jf)("flex"),(0,D.cq)("items-center"),(0,D.bf)("w-full"),(0,D.JB)("text-sm"),(0,D.Nv)("leading-relaxed"),(0,D.oc)("cursor-pointer"),(0,D.jf)("block"),(0,D.tv)("border-transparent",{"border-black":s&&m,"dark:border-gray-400":s&&m}),(0,D.J4)("border-2",{"border-t":1===o}),(0,D.Ue)({"font-semibold":u}),(0,D.Cz)({"hover:bg-gray-200":!u,"bg-indigo-100":u,"dark:hover:bg-gray-700":!u,"dark:bg-indigo-900":u})),style:{paddingLeft:1===o?"0.25rem":"calc(".concat(o-1," * 0.75rem + 0.25rem)")},onClick:()=>d(n),children:[b&&(0,i.jsx)("span",{className:"pr-1.5",children:(0,i.jsx)(_,{direction:b})}),h&&(0,i.jsx)("span",{className:"pr-1.5",children:(0,i.jsx)(Q,{language:h})}),(0,a.cQ)(t)]}),(0,a.IQ)(t)&&t.files.length>0&&(0,i.jsx)("ul",{role:"group",className:(0,D.dh)((0,D.jf)({hidden:!p,table:p}),(0,D.bf)("w-full")),children:t.files.slice().sort(R).map((e,r)=>(0,i.jsx)(J,{item:e,parentPath:n,parent:t,depth:o+1,index:r,fileTree:l,focused:s,onSelect:d},(0,a.cQ)(e)))})]})}function J(e){let{item:t,parentPath:n,parent:o,depth:r,index:l,fileTree:s,focused:d,onSelect:u}=e,m=n?"".concat(n,"/").concat((0,a.cQ)(t)):(0,a.cQ)(t),p=c(s,m);return(0,i.jsx)("li",{role:"treeitem",id:G(m),className:(0,D.dh)((0,D.jf)("table-row"),(0,D.bf)("w-full"),(0,D.zu)("focus:outline-none")),tabIndex:p?0:-1,"aria-selected":p,"aria-level":r,"aria-setsize":(null==o?void 0:o.files.length)||1,"aria-posinset":l+1,"aria-expanded":f(s,m),children:(0,i.jsx)($,{item:t,path:m,depth:r,fileTree:s,focused:d,onSelect:u})},(0,a.cQ)(t))}function R(e,t){return(0,a.IQ)(e)&&(0,a.zE)(t)?-1:(0,a.IQ)(t)&&(0,a.zE)(e)?1:(0,a.cQ)(e).localeCompare((0,a.cQ)(t))}function G(e){return e.replace(/\W/g,"-")}function K(e){return"".concat(G(e),"-label")}var U=L.memo(function(e){let{fileTree:t,onSelect:n,onKeyDown:o}=e,r=t.root,a=t.state.focusedPath,{state:l,setOn:s,setOff:c}=V(!0);return L.useEffect(()=>{a&&((0,w.aU)(G(a)),(0,w.$T)(K(a)))},[a]),(0,i.jsx)("ul",{role:"tree",className:(0,D.dh)((0,D.jf)("table"),(0,D.Qb)("whitespace-nowrap"),(0,D.tx)("overflow-auto"),(0,D.zP)("text-gray-600","dark:text-gray-200"),(0,D.Cz)("bg-gray-100","dark:bg-gray-800"),(0,D.Cb)("h-full"),(0,D.bf)("w-full")),onKeyDown:o,onFocus:s,onBlur:c,children:(0,i.jsx)(J,{item:r,depth:1,index:1,fileTree:t,focused:l,onSelect:n})})}),q=n(8067),B=function(e){let{root:t,key:n,defaultPath:o}=e,r=(0,q.Z)(t),i=(0,q.Z)(n),[c,d]=L.useState(()=>t?l(t,o):{root:(0,a.PF)("",[]),state:h()}),u=L.useCallback(e=>d(function(e,t){var n,o,r;if(!(!t.altKey&&!t.ctrlKey&&!t.metaKey&&t.key!==w.sr.Tab&&(/^[\w*]$/.test(t.key)||Object.values(w.sr).some(e=>e===t.key))))return e;switch(t.preventDefault(),t.stopPropagation(),t.key){case w.sr.Space:case w.sr.Enter:return p(e,(e,t)=>x(e,t,e.focusedPath));case w.sr.ArrowUp:return p(e,E);case w.sr.ArrowDown:return p(e,v);case w.sr.ArrowRight:if(!e.state.directoryState.has(e.state.focusedPath))return e;return m(e)?p(e,v):(n=e.state.focusedPath,p(e,(e,t)=>e.directoryState.has(n)?C({...e,directoryState:new Map(e.directoryState).set(n,!0)},t):e));case w.sr.ArrowLeft:return m(e)?(o=e.state.focusedPath,p(e,(e,t)=>e.directoryState.has(o)?C({...e,directoryState:new Map(e.directoryState).set(o,!1)},t):e)):p(e,y);case w.sr.Home:return p(e,j);case w.sr.End:return p(e,g);case"*":return p(e,k);default:return r=t.key,p(e,e=>(function(e,t){var n,o;let r=e.visiblePaths,i=r.indexOf(e.focusedPath);if(-1===i)return e;for(let o=i+1;o<r.length;o++)if(t.toLowerCase()===(null===(n=(0,a.cD)(r[o])[0])||void 0===n?void 0:n.toLowerCase()))return M(e,r[o]);for(let n=0;n<i;n++)if(t.toLowerCase()===(null===(o=(0,a.cD)(r[n])[0])||void 0===o?void 0:o.toLowerCase()))return M(e,r[n]);return e})(e,r))}}(c,e)),[c]);L.useEffect(()=>{if(!t)return;let e=n!==i;if(!r&&t||e){d(l(t,o));return}if(t!==r){d({root:t,state:b(c.state,t)});return}},[t,r,n,i,o,c]),L.useEffect(()=>{t&&r&&!c.state.activePath&&o&&d(s(c,o))},[t,r,c,o]);let f=L.useCallback(e=>d(s(c,e)),[c]);return{fileTree:c,selectItem:f,handleKeyDown:u}};function X(e){let{fileTree:t,onSelectFileSystemItem:n,onKeyDown:o}=e,r=d(t);return(0,i.jsxs)("div",{className:(0,D.dh)((0,D.Cb)("h-full"),(0,D.fU)("flex-1"),(0,D.jf)("grid"),(0,D.K$)("grid-cols-12"),(0,D.RG)("grid-rows-12"),(0,D.tx)("overflow-hidden")),children:[(0,i.jsx)("div",{className:(0,D.dh)((0,D.t4)("col-span-12","lg:col-span-3"),(0,D.oI)("row-span-3","lg:row-span-12"),(0,D.tx)("overflow-y-scroll"),(0,D.J4)("border-b"),(0,D.tv)("border-gray-900"),(0,D.tv)("dark:border-gray-500")),children:(0,i.jsx)(U,{onSelect:n,onKeyDown:o,fileTree:t})}),(0,i.jsx)("div",{className:(0,D.dh)((0,D.tx)("overflow-y-hidden"),(0,D.t4)("col-span-12","lg:col-span-9"),(0,D.oI)("row-span-9","lg:row-span-12")),children:(0,i.jsx)(N,{content:(null==r?void 0:r.content)||"",language:r&&(0,a.Le)(r)})})]})}var Y=n(5152),ee=n.n(Y),et=n(6681);let en=ee()(()=>Promise.all([n.e(256),n.e(264)]).then(n.bind(n,1264)),{loadableGenerated:{webpack:()=>[1264]}}),eo=ee()(()=>n.e(777).then(n.bind(n,777)),{loadableGenerated:{webpack:()=>[777]}}),er=ee()(()=>Promise.all([n.e(256),n.e(502)]).then(n.bind(n,5502)),{loadableGenerated:{webpack:()=>[5502]}}),ei=ee()(()=>n.e(336).then(n.bind(n,9336)),{loadableGenerated:{webpack:()=>[9336]}});function ea(e){let{schema:t,state:n,fileTree:o,onSelectFileSystemItem:r,onKeyDown:a,onViewSchema:l,updateSchema:s,updateModel:c,onClickAddModel:d,onClickDeleteModel:u,onClickEditModel:f,onClickAddField:m,onClickDeleteField:p,onClickEditField:h,onClickAddAssociation:b,onClickEditAssociation:C,onClickDeleteAssociation:x}=e;switch(n.type){case et.c.CODE:return(0,i.jsx)(X,{fileTree:o,onSelectFileSystemItem:r,onKeyDown:a});case et.c.EDIT_SCHEMA:return(0,i.jsx)(eo,{schema:n.schema,newModel:n.newModel,errors:n.errors,onChange:s});case et.c.VIEW_SCHEMA:return(0,i.jsx)(en,{schema:n.schema,onClickModel:l,onClickAddModel:d,onClickEditModel:f,onClickDeleteModel:u});case et.c.EDIT_MODEL:return(0,i.jsx)(ei,{model:n.model,schema:t,initialState:n.initialState,errors:n.errors,onChange:c});case et.c.VIEW_MODEL:return(0,i.jsx)(er,{model:n.model,schema:t,onViewSchema:l,onClickAddField:m,onClickEditField:h,onClickDeleteField:p,onClickAddAssociation:b,onClickEditAssociation:C,onClickDeleteAssociation:x})}}var el=(0,T.$)(function(){return(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"})}),es=n(7006),ec=n(4081),ed=n(2456),eu=n(8186),ef=n(6275),em=(0,T.$)(function(){return(0,i.jsxs)("g",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,i.jsx)("path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"}),(0,i.jsx)("polyline",{points:"17 21 17 13 7 13 7 21"}),(0,i.jsx)("polyline",{points:"7 3 7 8 15 8"})]})}),ep=n(3051),eh=n(3091),eb=n(3759),eC=n(8092),ex=n(7803),ey=n(7176),eE=n(2275);function ev(e){let{dbOptions:t,onChange:n}=e;return(0,i.jsxs)("form",{className:(0,D.dh)((0,D.jf)("grid"),(0,D.K$)("grid-cols-12"),(0,D.SG)("gap-x-4","sm:gap-x-8","gap-y-1")),...eE.j,children:[(0,i.jsx)(ey.Z,{id:"sql-dialect",label:"SQL dialect",className:(0,D.dh)((0,D.t4)("col-span-12","2xs:col-span-6","lg:col-span-4")),value:t.sqlDialect,options:ex.t5,display:ex.X6,onChange:e=>n({...t,sqlDialect:e})}),(0,i.jsx)(ey.Z,{id:"case-style",label:"Case style",className:(0,D.dh)((0,D.t4)("col-span-12","2xs:col-span-6","lg:col-span-4")),value:t.caseStyle,options:ex.eB,display:ex.JV,onChange:e=>n({...t,caseStyle:e})}),(0,i.jsx)(ey.Z,{id:"noun-form",label:"Table name format",className:(0,D.dh)((0,D.t4)("col-span-12","2xs:col-span-6","lg:col-span-4")),value:t.nounForm,options:ex.Bb,display:ex.EU,onChange:e=>n({...t,nounForm:e})}),(0,i.jsx)(ey.Z,{id:"prefix-pks",label:"Primary key format",className:(0,D.dh)((0,D.t4)("col-span-12","2xs:col-span-6","lg:col-span-4")),value:t.prefixPks,options:{notFound:null,false:!1,true:!0},display:e=>null===e?"":e?"Table name":'Use "id"',onChange:e=>n({...t,prefixPks:e})}),(0,i.jsx)(ey.Z,{id:"timestamps",label:"Timestamps",className:(0,D.dh)((0,D.t4)("col-span-12","2xs:col-span-6","lg:col-span-4")),value:t.timestamps,options:{true:!0,false:!1},display:e=>e?"Yes":"No",onChange:e=>n({...t,timestamps:e})}),(0,i.jsx)(ey.Z,{id:"migrations",label:"Migrations",className:(0,D.dh)((0,D.t4)("col-span-12","2xs:col-span-6","lg:col-span-4")),value:t.migrations,options:{true:!0,false:!1},display:e=>e?"Yes":"No",onChange:e=>n({...t,migrations:e})})]})}var ej=(0,T.$)(function(){return(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"})}),eg=(0,T.$)(function(){return(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"})}),ek=(0,T.$)(function(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})]})});let eM=(0,D.e6)("mr-1.5");function eS(e){let{root:t,activeFile:n,dbOptions:o,onClickEdit:r,onClickClose:l,onChangeDbOptions:s}=e,{info:c,success:d,error:u}=(0,eC.VY)(),{state:f,toggle:m,setOff:p}=V(),h=()=>{eD(t).then(()=>c("Download started for ".concat((0,a.cQ)(t),".zip."))).catch(e=>{console.error(e),u("Failed to copy to clipboard.")})},b=()=>{n&&eL(n).then(()=>d("".concat((0,a.cQ)(n)," copied to clipboard."),{ttl:6e3})).catch(e=>{console.error(e),u("Failed to download project.")})},C=L.useRef(),x=L.useRef(),y=L.useRef();return(0,eb.Z)([y,C,x],p),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(eu.Z,{className:(0,D.dh)(eM,(0,D.jf)("hidden","2xs:inline-block")),label:"go back",icon:el,iconProps:{size:6},onClick:l}),(0,i.jsx)(eu.Z,{className:(0,D.dh)(eM,(0,D.jf)("hidden","xs:inline-block")),label:"copy current file code",icon:ej,iconProps:{size:6},onClick:b,onMouseOver:eI,onTouchStartCapture:eI,disabled:!n}),(0,i.jsx)(eu.Z,{className:(0,D.dh)(eM,(0,D.jf)("hidden","xs:inline-block")),label:"download project code",icon:eg,iconProps:{size:6},onClick:h,onMouseOver:ew,onTouchStartCapture:ew}),(0,i.jsx)(eu.Z,{className:(0,D.dh)(eM,(0,D.jf)("hidden","xs:inline-block")),label:"edit code",icon:ep.Z,iconProps:{size:6},onClick:r}),(0,i.jsx)(eu.Z,{ref:C,className:(0,D.dh)(eM,(0,D.jf)("hidden","2xs:inline-block")),label:f?"close settings":"open settings",icon:ek,iconProps:{size:6},onClick:m}),(0,i.jsx)(es.Z,{small:!0,className:(0,D.dh)(eM,(0,D.jf)("xs:hidden","inline-block")),items:[{label:"Go back",icon:el,iconProps:{size:5},hideAboveQuery:"2xs",onClick:l},{label:"Copy file",icon:ej,iconProps:{size:5},onClick:b},{label:"Download",icon:eg,iconProps:{size:5},onClick:h},{label:"Edit",icon:ep.Z,iconProps:{size:5},onClick:r},{ref:x,label:"Settings",icon:ek,iconProps:{size:5},hideAboveQuery:"2xs",onClick:m}]}),f&&(0,i.jsxs)("div",{ref:y,className:(0,D.dh)((0,D.FK)("absolute"),(0,D.tx)("overflow-y-auto"),(0,D.C3)("top-full","right-0"),(0,D.bf)("w-screen","md:w-auto","lg:w-auto"),(0,D.o3)("p-4","pt-10"),(0,D.J4)("border"),(0,D.tv)("border-gray-900","dark:border-gray-600"),(0,D.E0)("rounded-lg"),(0,D.Cz)("bg-gray-50","dark:bg-gray-800"),(0,D.Wn)("shadow-2xl"),(0,D.sx)("max-h-[calc(100vh-theme(space.18))]")),children:[(0,i.jsx)(eu.Z,{label:"close settings",className:(0,D.dh)((0,D.FK)("absolute"),(0,D.C3)("right-1","top-1")),icon:ef.Z,iconProps:{size:6},onClick:p}),(0,i.jsx)(ev,{dbOptions:o,onChange:s})]})]})}async function eD(e){let{download:t}=await Promise.all([n.e(354),n.e(203)]).then(n.bind(n,8203));t(e)}function ew(){Promise.all([n.e(354),n.e(203)]).then(n.bind(n,8203))}async function eL(e){let{copyFile:t}=await n.e(249).then(n.bind(n,249));t(e)}function eI(){n.e(249).then(n.bind(n,249))}var eA=n(7603),eP=L.memo(function(e){let{value:t,options:n,display:o,disabled:r=()=>!1,onChange:a,className:l}=e,s=e=>t=>{let o=(0,eA.$3)(n,e);void 0!==o&&a(o,t)};return(0,i.jsx)("div",{className:(0,D.dh)((0,D.jf)("flex"),(0,D.bf)("w-full")),role:"group",children:(0,eA.rd)(n).map(e=>{let[n,a]=e,c=a===t;return(0,i.jsx)("button",{className:(0,D.dh)(l,(0,D.jf)("flex"),(0,D.cq)("items-center"),(0,D.JB)("text-xs"),(0,D.o3)("p-1"),(0,D.J4)("border","border-l-0","first:border-l"),(0,D.tv)("border-gray-400"),(0,D.E0)("first:rounded-l","last:rounded-r"),(0,D.zu)("focus:outline-none"),(0,D.dx)("focus-visible:outline-black"),(0,D.zP)({"text-blue-900":c,"dark:text-blue-50":c}),(0,D.Cz)({"bg-blue-50":c,"dark:bg-blue-900":c}),(0,D.Ue)({"font-semibold":c})),type:"button","aria-pressed":c?"true":"false",value:n,disabled:r(a),onClick:s(n),children:o?o(a):n},n)})})}),eO=(0,T.$)(function(){return(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"})}),eN=(0,T.$)(function(){return(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"})});function eV(e){let{code:t,disabled:n,onSelectCode:o,onSelectSchema:r}=e;return(0,i.jsx)(eP,{value:t,options:{code:!0,schema:!1},disabled:()=>n,display:e=>(0,i.jsxs)("span",{className:(0,D.dh)(ec._7,(0,D.bf)("w-18")),children:[e?(0,i.jsx)(eO,{}):(0,i.jsx)(eN,{}),(0,i.jsx)("span",{className:(0,D.dh)((0,D.e6)("ml-1")),children:e?"Code":"Schema"})]}),onChange:e=>e?o():r()})}function eT(e){let{state:t,meta:n,isEditing:o,fileTree:r,dbOptions:a,onSelectCode:l,onSelectSchema:s,onChangeDbOptions:c,onEdit:d,onDelete:u,onCancel:f,onSave:m,onClose:p}=e;return(0,i.jsxs)(eH,{children:[(0,i.jsx)("div",{className:(0,D.dh)((0,D.jf)("flex")),children:!o&&(0,i.jsx)(eV,{code:t.type===et.c.CODE,disabled:o,onSelectCode:l,onSelectSchema:s})}),(0,i.jsx)("div",{className:(0,D.dh)((0,D.jf)("flex"),(0,D.fU)("flex-1"),(0,D.Kl)("justify-end")),children:(0,i.jsx)(ez,{state:t,meta:n,dbOptions:a,fileTree:r,onChangeDbOptions:c,onEdit:d,onDelete:u,onCancel:f,onSave:m,onClose:p})})]})}let e_=(0,D.e6)("mr-1.5");function ez(e){let{state:t,meta:n,fileTree:o,dbOptions:r,onChangeDbOptions:a,onEdit:l,onDelete:s,onCancel:c,onSave:u,onClose:f}=e;return t.type===et.c.CODE?(0,i.jsx)(eS,{root:o.root,activeFile:d(o),dbOptions:r,onClickEdit:l,onClickClose:f,onChangeDbOptions:a}):t.type===et.c.VIEW_SCHEMA?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(eu.Z,{className:(0,D.dh)(e_,(0,D.jf)("hidden","2xs:inline-block")),label:"close schema",icon:el,iconProps:{size:6},onClick:f}),!(null==n?void 0:n.isExample)&&(0,i.jsx)(eu.Z,{className:(0,D.dh)(e_,(0,D.jf)("hidden","2xs:inline-block")),label:"delete schema",icon:eh.Z,iconProps:{size:6},onClick:s}),(0,i.jsx)(eu.Z,{className:(0,D.dh)(e_,(0,D.jf)("hidden","2xs:inline-block")),label:"edit schema",icon:ep.Z,iconProps:{size:6},onClick:l}),(0,i.jsx)(es.Z,{className:(0,D.dh)(e_,(0,D.jf)("2xs:hidden","inline-block")),items:[{label:"Go back",icon:el,iconProps:{size:5},onClick:f},{label:"Edit",icon:ep.Z,iconProps:{size:5},onClick:l},{label:"Delete",icon:eh.Z,iconProps:{size:5},hidden:!!(null==n?void 0:n.isExample),onClick:s}]})]}):t.type===et.c.VIEW_MODEL?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(eu.Z,{className:(0,D.dh)(e_,(0,D.jf)("hidden","2xs:inline-block")),label:"close model",icon:el,iconProps:{size:6},onClick:f}),!(null==n?void 0:n.isExample)&&(0,i.jsx)(eu.Z,{className:(0,D.dh)(e_,(0,D.jf)("hidden","2xs:inline-block")),label:"delete model",icon:eh.Z,iconProps:{size:6},onClick:s}),(0,i.jsx)(eu.Z,{className:(0,D.dh)(e_,(0,D.jf)("hidden","2xs:inline-block")),label:"edit model",icon:ep.Z,iconProps:{size:6},onClick:l}),(0,i.jsx)(es.Z,{className:(0,D.dh)(e_,(0,D.jf)("2xs:hidden","inline-block")),items:[{label:"Go back",icon:el,iconProps:{size:5},onClick:f},{label:"Edit",icon:ep.Z,iconProps:{size:5},onClick:l},{label:"Delete",icon:eh.Z,iconProps:{size:5},hidden:!!(null==n?void 0:n.isExample),onClick:s}]})]}):(0,i.jsxs)("div",{className:(0,D.dh)((0,D.jf)("flex"),(0,D.fU)("flex-1"),(0,D.Kl)("justify-evenly","2xs:justify-end"),(0,D.o3)("p-1")),children:[(0,i.jsx)(ed.Z,{className:(0,D.dh)((0,D.bf)("w-16","xs:w-20")),icon:ef.Z,iconProps:{size:4},size:"text-xs",onClick:c,children:"Cancel"}),!(null==n?void 0:n.isExample)&&(0,i.jsx)(ed.Z,{color:"red",className:(0,D.dh)((0,D.Ue)("font-bold"),(0,D.bf)("w-16","xs:w-20"),(0,D.e6)("2xs:ml-4")),icon:eh.Z,size:"text-xs",onClick:s,children:"Delete"}),(0,i.jsx)(ed.Z,{color:"blue",className:(0,D.dh)((0,D.Ue)("font-bold"),(0,D.bf)("w-16","xs:w-20"),(0,D.e6)("2xs:ml-4")),icon:em,size:"text-xs",onClick:u,children:"Save"})]})}function eH(e){let{children:t}=e;return(0,i.jsx)("div",{className:(0,D.dh)(ec.Xu,(0,D.FK)("relative"),(0,D.bf)("w-full"),(0,D.o3)("p-0.5"),(0,D.Cz)("bg-white","dark:bg-gray-800"),(0,D.tv)("border-gray-900","dark:border-gray-500"),(0,D.J4)("border-b"),(0,D.W5)("z-10")),children:t})}var eZ=n(8755),eF=n(7001);function eW(e){return Object.values(e).every(eQ)}function eQ(e){return"string"==typeof e?!e.trim():"object"==typeof e&&null!==e?Object.values(e).every(eQ):null==e}var e$=n(9858);let eJ="required",eR="cannot start with a number",eG="cannot be longer than 63 characters",eK="must be unique",eU=Object.freeze({name:void 0,fields:{},associations:{}}),eq=Object.freeze({name:void 0,models:{}});function eB(e,t){return{name:(0,e$.EE)(e.name)?eJ:(0,e$.X9)(e.name,ex.g0)?eG:(0,e$.cm)(e.name)?eR:t.models.find(t=>t.id!==e.id&&(0,e$.vQ)(t.name,e.name))?eK:void 0,fields:e.fields.reduce((t,n)=>(t[n.id]={name:(0,e$.EE)(n.name)?eJ:(0,e$.X9)(n.name,ex.g0)?eG:(0,e$.cm)(n.name)?eR:e.fields.find(e=>e.id!==n.id&&(0,e$.s1)(e.name,n.name))?eK:void 0},t),{}),associations:e.associations.reduce((n,o)=>(n[o.id]={alias:(0,e$.X9)(o.alias,ex.g0)?eG:(0,e$.cm)(o.alias)?eR:!function(e,t,n){let o=(0,eF.oC)(n.models,e=>e.id),r=o.get(e.targetModelId);if(r)return t.associations.find(t=>{if(t.id===e.id)return!1;let n=o.get(t.targetModelId);return!!n&&(0,eZ.Ue)({associationA:e,targetNameA:r.name,associationB:t,targetNameB:n.name})})}(o,e,t)?void 0:eK,foreignKey:(0,e$.X9)(o.foreignKey,ex.g0)?eG:(0,e$.cm)(o.foreignKey)?eR:void 0,targetForeignKey:function(e){if(e.type.type===eZ.Nl.ManyToMany){if((0,e$.X9)(e.type.targetFk,ex.g0))return eG;if((0,e$.cm)(e.type.targetFk))return eR}}(o),throughTable:function(e){if(e.type.type===eZ.Nl.ManyToMany&&e.type.through.type===eZ.Q$.ThroughTable){if((0,e$.X9)(e.type.through.table,ex.g0))return eG;if((0,e$.EE)(e.type.through.table))return eJ;if((0,e$.cm)(e.type.through.table))return eR}}(o)},n),{})}}var eX=n(2991),eY=n.n(eX);function e0(e){let{schema:t,meta:o,dbOptions:r,initialFramework:a,initiallyEditing:l,onChangeSchema:s,onChangeDbOptions:c,onDelete:d,onClickClose:f}=e,{state:m,isEditing:p,fileTree:h,selectItem:b,handleKeyDown:C,viewCode:x,viewSchema:y,edit:E,delete_:v,updateModel:j,updateSchema:g,addModel:k,editModel:M,deleteModel:S,addField:D,editField:I,deleteField:A,addAssociation:P,editAssociation:O,deleteAssociation:N,save:V,cancel:T,back:_}=function(e){let{schema:t,dbOptions:o,meta:r,initialFramework:i,initiallyEditing:a=!1,onChangeSchema:l,onDelete:s,onExit:c}=e,[d,f]=L.useState(()=>a?{type:et.c.EDIT_SCHEMA,schema:t,errors:eq}:{type:et.c.CODE}),{success:m,error:p}=(0,eC.VY)(),h=L.useCallback((e,t)=>l(e).then(e=>(m("string"==typeof t?t:t(e),{ttl:4e3}),e)).catch(t=>(console.error(t),p('Error saving schema "'.concat(e.name,'"')),e)),[p,m,l]),{root:b,framework:C,defaultPath:x}=function(e){let{schema:t,meta:o,dbOptions:r,initialFramework:i,skip:a}=e,[l,s]=L.useState(i);L.useEffect(()=>{a||l||n.e(479).then(n.bind(n,1479)).then(e=>{let{SequelizeFramework:t}=e;s(t)})},[a,l]);let c=L.useMemo(()=>{if(t&&l)return l.generate({schema:t,meta:o,dbOptions:r})},[t,o,r,l]),d=l&&c&&l.defaultFile&&l.defaultFile(c);return{framework:l,root:c,defaultPath:d}}({schema:t,meta:r,dbOptions:o,initialFramework:i}),{fileTree:y,selectItem:E,handleKeyDown:v}=B({root:b,key:t.id,defaultPath:x}),j=L.useCallback(()=>{if(d.type===et.c.CODE){let e=u(y),n=e&&(null==C?void 0:C.modelFromPath(e,t));n?f({type:et.c.EDIT_MODEL,model:n,errors:eU}):f({type:et.c.EDIT_SCHEMA,schema:t,errors:eq});return}if(d.type===et.c.VIEW_MODEL){f({type:et.c.EDIT_MODEL,model:d.model,errors:eU});return}f({type:et.c.EDIT_SCHEMA,schema:t,errors:eq})},[d,t,y,C]),g=L.useCallback(()=>{let e=d.type===et.c.VIEW_MODEL&&b&&(null==C?void 0:C.defaultModelFile(d.model,b));e&&E(e),f({type:et.c.CODE})},[d,b,C,E]),k=L.useCallback(e=>{if(d.type===et.c.CODE){let e=u(y),n=e&&(null==C?void 0:C.modelFromPath(e,t));f(n?{type:et.c.VIEW_MODEL,model:n}:{type:et.c.VIEW_SCHEMA,schema:t});return}if(e){f({type:et.c.VIEW_MODEL,model:e});return}f({type:et.c.VIEW_SCHEMA,schema:t})},[d,y,C,t]),M=L.useCallback(e=>{d.type===et.c.EDIT_SCHEMA&&f({...d,schema:e})},[d]),S=L.useCallback(e=>{d.type===et.c.EDIT_MODEL&&f({...d,model:e})},[d]),D=L.useCallback(()=>{d.type===et.c.VIEW_SCHEMA&&f({type:et.c.EDIT_SCHEMA,schema:t,errors:eq,newModel:!0})},[t,d]),w=L.useCallback(e=>{f({type:et.c.EDIT_MODEL,model:e,errors:eU})},[]),I=L.useCallback(async e=>{let n=await h({...t,models:t.models.filter(t=>t.id!==e.id)},'Model "'.concat(e.name,'" deleted.'));f({type:et.c.VIEW_SCHEMA,schema:n})},[h,t]),A=L.useCallback(()=>{d.type===et.c.VIEW_MODEL&&f({type:et.c.EDIT_MODEL,model:d.model,errors:eU,initialState:{type:et.G.NEW_FIELD}})},[d]),P=L.useCallback(()=>{d.type===et.c.VIEW_MODEL&&f({type:et.c.EDIT_MODEL,model:d.model,errors:eU,initialState:{type:et.G.NEW_ASSOCIATION}})},[d]),O=L.useCallback(async e=>{let n=t.models.find(t=>t.id===e.sourceModelId);n&&f({type:et.c.EDIT_MODEL,model:n,initialState:{type:et.G.EDIT_ASSOCIATION,association:e},errors:eU})},[t.models]),N=L.useCallback(async e=>{if(d.type===et.c.VIEW_MODEL){let n={...d.model,associations:d.model.associations.filter(t=>t.id!==e.id)},o=t.models.find(t=>t.id===e.targetModelId),r=(await h({...t,models:t.models.map(e=>e.id===d.model.id?n:e)},'Association "'.concat((0,eZ.R0)(e)).concat(o?" ".concat(o.name):"",'" deleted.'))).models.find(e=>e.id===n.id);r&&f({type:et.c.VIEW_MODEL,model:r});return}},[t,d,h]),V=L.useCallback(e=>{let t=d.type===et.c.EDIT_MODEL?e.models.find(e=>e.id===d.model.id):void 0;if(t){f({type:et.c.VIEW_MODEL,model:t});return}f({type:et.c.VIEW_SCHEMA,schema:e})},[d]),T=L.useCallback(async()=>{if(d.type===et.c.EDIT_SCHEMA){var e,n;let o={name:(n=e=d.schema,(0,e$.EE)(n.name)?eJ:(0,e$.cm)(n.name)?eR:(0,e$.X9)(n.name,ex.g0)?eG:void 0),models:e.models.reduce((t,n)=>(t[n.id]=eB(n,e),t),{})};if(!eW(o)){f({...d,errors:o});return}if((null==r?void 0:r.isExample)||!eY()(d.schema,t)){V(await h(d.schema,e=>'Schema "'.concat(e.name,'" saved.')));return}if((0,eZ.fc)(d.schema)){c();return}V(t)}if(d.type===et.c.EDIT_MODEL){let e=eB(d.model,t);if(eW(e)){let e={...t,models:t.models.map(e=>e.id===d.model.id?d.model:e)};if(!eY()(e,t)){V(await await h({...t,models:t.models.map(e=>e.id===d.model.id?d.model:e)},'Model "'.concat(d.model.name,'" saved')));return}V(t)}else f({...d,errors:e})}},[t,d,r,h,V,c]),_=L.useCallback(async e=>{if(d.type===et.c.VIEW_MODEL){let n={...d.model,fields:d.model.fields.filter(t=>t.id!==e.id)},o=(await h({...t,models:t.models.map(e=>e.id===d.model.id?n:e)},'Field "'.concat(e.name,'" deleted.'))).models.find(e=>e.id===n.id);o&&f({type:et.c.VIEW_MODEL,model:o});return}},[t,d,h]),z=L.useCallback(async e=>{let n=t.models.find(t=>t.fields.some(t=>t.id===e.id));n&&f({type:et.c.EDIT_MODEL,model:n,initialState:{type:et.G.EDIT_FIELD,field:e},errors:eU})},[t.models]),H=L.useCallback(async()=>{if(s&&(d.type===et.c.VIEW_SCHEMA||d.type===et.c.EDIT_SCHEMA))return await s().then(()=>{m("Schema ".concat(t.name," deleted.")),c()}).catch(()=>{p("Failed to delete schema ".concat(t.name,"."))});if(d.type===et.c.VIEW_MODEL||d.type===et.c.EDIT_MODEL){let e=await h({...t,models:t.models.filter(e=>e.id!==d.model.id)},'Model "'.concat(d.model.name,'" deleted.'));f({type:et.c.VIEW_SCHEMA,schema:e});return}},[s,d,t,m,c,p,h]),Z=L.useCallback(()=>{if((0,eZ.fc)(t)){c();return}if(null==r?void 0:r.isExample){g();return}V(t)},[t,r,V,c,g]),F=L.useCallback(()=>{if(d.type===et.c.VIEW_MODEL){f({type:et.c.VIEW_SCHEMA,schema:t});return}c()},[t,d,c]);return{state:d,isEditing:d.type===et.c.EDIT_MODEL||d.type===et.c.EDIT_SCHEMA,fileTree:y,selectItem:E,handleKeyDown:v,edit:j,delete_:H,updateModel:S,updateSchema:M,addModel:D,editModel:w,deleteModel:I,addField:A,editField:z,deleteField:_,addAssociation:P,editAssociation:O,deleteAssociation:N,viewCode:g,viewSchema:k,save:T,cancel:Z,back:F}}({schema:t,dbOptions:r,meta:o,initialFramework:a,initiallyEditing:l,onChangeSchema:s,onChangeDbOptions:c,onExit:f,onDelete:d}),z=L.useRef(),H=L.useCallback(e=>{z.current&&(0,w.k3)(z.current),y(e)},[y]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(eT,{state:m,meta:o,isEditing:p,fileTree:h,dbOptions:r,onChangeDbOptions:c,onSelectCode:x,onSelectSchema:H,onEdit:E,onDelete:v,onCancel:T,onSave:V,onClose:_}),(0,i.jsx)(ea,{state:m,schema:t,fileTree:h,onSelectFileSystemItem:b,onKeyDown:C,updateSchema:g,updateModel:j,onViewSchema:H,onClickAddModel:k,onClickEditModel:M,onClickDeleteModel:S,onClickAddField:D,onClickEditField:I,onClickDeleteField:A,onClickAddAssociation:P,onClickEditAssociation:O,onClickDeleteAssociation:N})]})}},6681:function(e,t,n){"use strict";var o,r,i,a;n.d(t,{G:function(){return r},c:function(){return o}}),(i=o||(o={})).CODE="code",i.VIEW_SCHEMA="view-schema",i.EDIT_SCHEMA="edit-schema",i.VIEW_MODEL="view-model",i.EDIT_MODEL="edit-model",(a=r||(r={})).NEW_FIELD="new-field",a.NEW_ASSOCIATION="new-association",a.EDIT_FIELD="edit-field",a.EDIT_ASSOCIATION="edit-association"},9535:function(e){e.exports={code:"code_code__SXIXf","maybe-class-name":"code_maybe-class-name__qbVF1"}}}]);