import{j as t,c as h}from"./index.B4-OD_zh.js";import{r as d}from"./index.BQj4W4z3.js";import{c as $,P as p,a as b,b as G}from"./index.-U3b8mrK.js";import{c as y,R as L,I as q}from"./index.BZ3qtxdt.js";import{u as K,a as B,b as H}from"./index.DBP-xT8W.js";import{C as z,a as O,b as J,d as Q}from"./card.XQc7LAIv.js";import"./index.Qsggagnf.js";var x="Tabs",[U,re]=$(x,[y]),w=y(),[W,T]=U(x),D=d.forwardRef((e,a)=>{const{__scopeTabs:n,value:s,onValueChange:r,defaultValue:c,orientation:o="horizontal",dir:u,activationMode:m="automatic",...v}=e,l=K(u),[i,f]=B({prop:s,onChange:r,defaultProp:c});return t.jsx(W,{scope:n,baseId:H(),value:i,onValueChange:f,orientation:o,dir:l,activationMode:m,children:t.jsx(p.div,{dir:l,"data-orientation":o,...v,ref:a})})});D.displayName=x;var C="TabsList",j=d.forwardRef((e,a)=>{const{__scopeTabs:n,loop:s=!0,...r}=e,c=T(C,n),o=w(n);return t.jsx(L,{asChild:!0,...o,orientation:c.orientation,dir:c.dir,loop:s,children:t.jsx(p.div,{role:"tablist","aria-orientation":c.orientation,...r,ref:a})})});j.displayName=C;var N="TabsTrigger",I=d.forwardRef((e,a)=>{const{__scopeTabs:n,value:s,disabled:r=!1,...c}=e,o=T(N,n),u=w(n),m=S(o.baseId,s),v=_(o.baseId,s),l=s===o.value;return t.jsx(q,{asChild:!0,...u,focusable:!r,active:l,children:t.jsx(p.button,{type:"button",role:"tab","aria-selected":l,"aria-controls":v,"data-state":l?"active":"inactive","data-disabled":r?"":void 0,disabled:r,id:m,...c,ref:a,onMouseDown:b(e.onMouseDown,i=>{!r&&i.button===0&&i.ctrlKey===!1?o.onValueChange(s):i.preventDefault()}),onKeyDown:b(e.onKeyDown,i=>{[" ","Enter"].includes(i.key)&&o.onValueChange(s)}),onFocus:b(e.onFocus,()=>{const i=o.activationMode!=="manual";!l&&!r&&i&&o.onValueChange(s)})})})});I.displayName=N;var R="TabsContent",A=d.forwardRef((e,a)=>{const{__scopeTabs:n,value:s,forceMount:r,children:c,...o}=e,u=T(R,n),m=S(u.baseId,s),v=_(u.baseId,s),l=s===u.value,i=d.useRef(l);return d.useEffect(()=>{const f=requestAnimationFrame(()=>i.current=!1);return()=>cancelAnimationFrame(f)},[]),t.jsx(G,{present:r||l,children:({present:f})=>t.jsx(p.div,{"data-state":l?"active":"inactive","data-orientation":u.orientation,role:"tabpanel","aria-labelledby":m,hidden:!f,id:v,tabIndex:0,...o,ref:a,style:{...e.style,animationDuration:i.current?"0s":void 0},children:f&&c})})});A.displayName=R;function S(e,a){return`${e}-trigger-${a}`}function _(e,a){return`${e}-content-${a}`}var X=D,E=j,P=I,M=A;const Y=X,k=d.forwardRef(({className:e,...a},n)=>t.jsx(E,{ref:n,className:h("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",e),...a}));k.displayName=E.displayName;const F=d.forwardRef(({className:e,...a},n)=>t.jsx(P,{ref:n,className:h("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",e),...a}));F.displayName=P.displayName;const V=d.forwardRef(({className:e,...a},n)=>t.jsx(M,{ref:n,className:h("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",e),...a}));V.displayName=M.displayName;function Z({title:e,description:a}){return t.jsxs(z,{children:[t.jsx(O,{children:t.jsx(J,{children:e})}),t.jsx(Q,{children:a})]})}const g=[{value:"DDD",title:"Domain Driven Design",description:"Domain Driven Design (DDD) is a methodology in software development that primarily focuses on understanding and modeling the business domain. It aligns different conventions to reach a consensus within the team, follow the same practices, and establish a ubiquitous language. At Dily, I have consistently applied this approach, enabling the creation of maintainable and scalable software. Additionally, this allowed the team to stay continuously aligned in development by following the same conventions."},{value:"TDD",title:"Test Driven Development",description:"Test Driven Development (TDD) is a software development methodology where tests are written before the functionality's code is implemented. This ensures that the code meets the specified requirements from the outset, leading to more robust, error-free, and easy-to-maintain software. I consistently follow this practice, as test coverage is essential to prevent errors when adding new code or extending certain functionalities."}];function le(){return t.jsxs(Y,{defaultValue:g[0].value,className:"max-w-72 lg:max-w-lg",children:[t.jsx(k,{className:"flex flex-row w-full",children:g.map(e=>t.jsx(F,{value:e.value,className:"w-1/2",children:e.value}))}),g.map(e=>t.jsx(V,{value:e.value,children:t.jsx(Z,{title:e.title,description:e.description})}))]})}export{le as DesignSkills};
