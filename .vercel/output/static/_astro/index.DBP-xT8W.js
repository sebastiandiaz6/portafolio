import{R as d,r as m,$ as D}from"./index.BQj4W4z3.js";import{c as P,d as _,u as y}from"./index.-U3b8mrK.js";import{u as A,j as M,S as N}from"./index.B4-OD_zh.js";function k(e){const t=e+"CollectionProvider",[r,o]=P(t),[s,n]=r(t,{collectionRef:{current:null},itemMap:new Map}),S=u=>{const{scope:c,children:C}=u,l=d.useRef(null),a=d.useRef(new Map).current;return M.jsx(s,{scope:c,itemMap:a,collectionRef:l,children:C})};S.displayName=t;const R=e+"CollectionSlot",x=d.forwardRef((u,c)=>{const{scope:C,children:l}=u,a=n(R,C),f=A(c,a.collectionRef);return M.jsx(N,{ref:f,children:l})});x.displayName=R;const i=e+"CollectionItemSlot",I="data-radix-collection-item",p=d.forwardRef((u,c)=>{const{scope:C,children:l,...a}=u,f=d.useRef(null),E=A(c,f),v=n(i,C);return d.useEffect(()=>(v.itemMap.set(f,{ref:f,...a}),()=>void v.itemMap.delete(f))),M.jsx(N,{[I]:"",ref:E,children:l})});p.displayName=i;function O(u){const c=n(e+"CollectionConsumer",u);return d.useCallback(()=>{const l=c.collectionRef.current;if(!l)return[];const a=Array.from(l.querySelectorAll(`[${I}]`));return Array.from(c.itemMap.values()).sort((v,T)=>a.indexOf(v.ref.current)-a.indexOf(T.ref.current))},[c.collectionRef,c.itemMap])}return[{Provider:S,Slot:x,ItemSlot:p},O,o]}var b=D.useId||(()=>{}),g=0;function U(e){const[t,r]=m.useState(b());return _(()=>{e||r(o=>o??String(g++))},[e]),e||(t?`radix-${t}`:"")}function q({prop:e,defaultProp:t,onChange:r=()=>{}}){const[o,s]=h({defaultProp:t,onChange:r}),n=e!==void 0,S=n?e:o,R=y(r),x=m.useCallback(i=>{if(n){const p=typeof i=="function"?i(e):i;p!==e&&R(p)}else s(i)},[n,e,s,R]);return[S,x]}function h({defaultProp:e,onChange:t}){const r=m.useState(e),[o]=r,s=m.useRef(o),n=y(t);return m.useEffect(()=>{s.current!==o&&(n(o),s.current=o)},[o,s,n]),r}var j=m.createContext(void 0);function z(e){const t=m.useContext(j);return e||t||"ltr"}export{q as a,U as b,k as c,z as u};
