import{r as d}from"./index.BQj4W4z3.js";/**
 * @license lucide-react v0.424.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),w=(...t)=>t.filter((r,e,n)=>!!r&&n.indexOf(r)===e).join(" ");/**
 * @license lucide-react v0.424.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var A={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.424.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=d.forwardRef(({color:t="currentColor",size:r=24,strokeWidth:e=2,absoluteStrokeWidth:n,className:s="",children:o,iconNode:v,...c},m)=>d.createElement("svg",{ref:m,...A,width:r,height:r,stroke:t,strokeWidth:n?Number(e)*24/Number(r):e,className:w("lucide",s),...c},[...v.map(([a,l])=>d.createElement(a,l)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.424.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=(t,r)=>{const e=d.forwardRef(({className:n,...s},o)=>d.createElement(x,{ref:o,iconNode:r,className:w(`lucide-${k(t)}`,n),...s}));return e.displayName=`${t}`,e};function g(t){var r,e,n="";if(typeof t=="string"||typeof t=="number")n+=t;else if(typeof t=="object")if(Array.isArray(t))for(r=0;r<t.length;r++)t[r]&&(e=g(t[r]))&&(n&&(n+=" "),n+=e);else for(r in t)t[r]&&(n&&(n+=" "),n+=r);return n}function j(){for(var t,r,e=0,n="";e<arguments.length;)(t=arguments[e++])&&(r=g(t))&&(n&&(n+=" "),n+=r);return n}const C=t=>typeof t=="boolean"?"".concat(t):t===0?"0":t,b=j,E=(t,r)=>e=>{var n;if(r?.variants==null)return b(t,e?.class,e?.className);const{variants:s,defaultVariants:o}=r,v=Object.keys(s).map(a=>{const l=e?.[a],u=o?.[a];if(l===null)return null;const i=C(l)||C(u);return s[a][i]}),c=e&&Object.entries(e).reduce((a,l)=>{let[u,i]=l;return i===void 0||(a[u]=i),a},{}),m=r==null||(n=r.compoundVariants)===null||n===void 0?void 0:n.reduce((a,l)=>{let{class:u,className:i,...h}=l;return Object.entries(h).every(N=>{let[y,f]=N;return Array.isArray(f)?f.includes({...o,...c}[y]):{...o,...c}[y]===f})?[...a,u,i]:a},[]);return b(t,v,m,e?.class,e?.className)};export{E as a,O as c};
