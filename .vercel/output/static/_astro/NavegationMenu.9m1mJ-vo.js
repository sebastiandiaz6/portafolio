import{j as o,u as L,a as Le,c as A}from"./index.B4-OD_zh.js";import{r}from"./index.BQj4W4z3.js";import{$ as Fe}from"./index.Qsggagnf.js";import{P as b,c as Oe,u as S,a as E,b as K,d as z,e as Z}from"./index.DdQ6WNxN.js";import{c as re,u as Ke,a as ae,b as ie}from"./index.BUOA8aYt.js";import{D as Ve}from"./index.D-1fOvTQ.js";import{c as ze,a as $e}from"./index.BnhzOzBJ.js";import{A as Ge,a as Ue,b as He}from"./avatar.BU5qAU2D.js";/**
 * @license lucide-react v0.424.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const We=ze("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);function Be(e){const t=r.useRef({value:e,previous:e});return r.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}var Ye="VisuallyHidden",se=r.forwardRef((e,t)=>o.jsx(b.span,{...e,ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}));se.displayName=Ye;var qe=se,k="NavigationMenu",[B,ce,Xe]=re(k),[$,Je,Qe]=re(k),[Y,yt]=Oe(k,[Xe,Qe]),[Ze,I]=Y(k),[et,tt]=Y(k),ue=r.forwardRef((e,t)=>{const{__scopeNavigationMenu:n,value:a,onValueChange:i,defaultValue:s,delayDuration:c=200,skipDelayDuration:d=300,orientation:l="horizontal",dir:h,...u}=e,[m,M]=r.useState(null),R=L(t,N=>M(N)),p=Ke(h),w=r.useRef(0),C=r.useRef(0),y=r.useRef(0),[T,f]=r.useState(!0),[g="",v]=ae({prop:a,onChange:N=>{const P=N!=="",V=d>0;P?(window.clearTimeout(y.current),V&&f(!1)):(window.clearTimeout(y.current),y.current=window.setTimeout(()=>f(!0),d)),i?.(N)},defaultProp:s}),x=r.useCallback(()=>{window.clearTimeout(C.current),C.current=window.setTimeout(()=>v(""),150)},[v]),j=r.useCallback(N=>{window.clearTimeout(C.current),v(N)},[v]),_=r.useCallback(N=>{g===N?window.clearTimeout(C.current):w.current=window.setTimeout(()=>{window.clearTimeout(C.current),v(N)},c)},[g,v,c]);return r.useEffect(()=>()=>{window.clearTimeout(w.current),window.clearTimeout(C.current),window.clearTimeout(y.current)},[]),o.jsx(de,{scope:n,isRootMenu:!0,value:g,dir:p,orientation:l,rootNavigationMenu:m,onTriggerEnter:N=>{window.clearTimeout(w.current),T?_(N):j(N)},onTriggerLeave:()=>{window.clearTimeout(w.current),x()},onContentEnter:()=>window.clearTimeout(C.current),onContentLeave:x,onItemSelect:N=>{v(P=>P===N?"":N)},onItemDismiss:()=>v(""),children:o.jsx(b.nav,{"aria-label":"Main","data-orientation":l,dir:p,...u,ref:R})})});ue.displayName=k;var le="NavigationMenuSub",nt=r.forwardRef((e,t)=>{const{__scopeNavigationMenu:n,value:a,onValueChange:i,defaultValue:s,orientation:c="horizontal",...d}=e,l=I(le,n),[h="",u]=ae({prop:a,onChange:i,defaultProp:s});return o.jsx(de,{scope:n,isRootMenu:!1,value:h,dir:l.dir,orientation:c,rootNavigationMenu:l.rootNavigationMenu,onTriggerEnter:m=>u(m),onItemSelect:m=>u(m),onItemDismiss:()=>u(""),children:o.jsx(b.div,{"data-orientation":c,...d,ref:t})})});nt.displayName=le;var de=e=>{const{scope:t,isRootMenu:n,rootNavigationMenu:a,dir:i,orientation:s,children:c,value:d,onItemSelect:l,onItemDismiss:h,onTriggerEnter:u,onTriggerLeave:m,onContentEnter:M,onContentLeave:R}=e,[p,w]=r.useState(null),[C,y]=r.useState(new Map),[T,f]=r.useState(null);return o.jsx(Ze,{scope:t,isRootMenu:n,rootNavigationMenu:a,value:d,previousValue:Be(d),baseId:ie(),dir:i,orientation:s,viewport:p,onViewportChange:w,indicatorTrack:T,onIndicatorTrackChange:f,onTriggerEnter:S(u),onTriggerLeave:S(m),onContentEnter:S(M),onContentLeave:S(R),onItemSelect:S(l),onItemDismiss:S(h),onViewportContentChange:r.useCallback((g,v)=>{y(x=>(x.set(g,v),new Map(x)))},[]),onViewportContentRemove:r.useCallback(g=>{y(v=>v.has(g)?(v.delete(g),new Map(v)):v)},[]),children:o.jsx(B.Provider,{scope:t,children:o.jsx(et,{scope:t,items:C,children:c})})})},fe="NavigationMenuList",ve=r.forwardRef((e,t)=>{const{__scopeNavigationMenu:n,...a}=e,i=I(fe,n),s=o.jsx(b.ul,{"data-orientation":i.orientation,...a,ref:t});return o.jsx(b.div,{style:{position:"relative"},ref:i.onIndicatorTrackChange,children:o.jsx(B.Slot,{scope:n,children:i.isRootMenu?o.jsx(Re,{asChild:!0,children:s}):s})})});ve.displayName=fe;var me="NavigationMenuItem",[ot,ge]=Y(me),pe=r.forwardRef((e,t)=>{const{__scopeNavigationMenu:n,value:a,...i}=e,s=ie(),c=a||s||"LEGACY_REACT_AUTO_VALUE",d=r.useRef(null),l=r.useRef(null),h=r.useRef(null),u=r.useRef(()=>{}),m=r.useRef(!1),M=r.useCallback((p="start")=>{if(d.current){u.current();const w=U(d.current);w.length&&J(p==="start"?w:w.reverse())}},[]),R=r.useCallback(()=>{if(d.current){const p=U(d.current);p.length&&(u.current=lt(p))}},[]);return o.jsx(ot,{scope:n,value:c,triggerRef:l,contentRef:d,focusProxyRef:h,wasEscapeCloseRef:m,onEntryKeyDown:M,onFocusProxyEnter:M,onRootContentClose:R,onContentFocusOutside:R,children:o.jsx(b.li,{...i,ref:t})})});pe.displayName=me;var G="NavigationMenuTrigger",we=r.forwardRef((e,t)=>{const{__scopeNavigationMenu:n,disabled:a,...i}=e,s=I(G,e.__scopeNavigationMenu),c=ge(G,e.__scopeNavigationMenu),d=r.useRef(null),l=L(d,c.triggerRef,t),h=Ee(s.baseId,c.value),u=be(s.baseId,c.value),m=r.useRef(!1),M=r.useRef(!1),R=c.value===s.value;return o.jsxs(o.Fragment,{children:[o.jsx(B.ItemSlot,{scope:n,value:c.value,children:o.jsx(ye,{asChild:!0,children:o.jsx(b.button,{id:h,disabled:a,"data-disabled":a?"":void 0,"data-state":Q(R),"aria-expanded":R,"aria-controls":u,...i,ref:l,onPointerEnter:E(e.onPointerEnter,()=>{M.current=!1,c.wasEscapeCloseRef.current=!1}),onPointerMove:E(e.onPointerMove,O(()=>{a||M.current||c.wasEscapeCloseRef.current||m.current||(s.onTriggerEnter(c.value),m.current=!0)})),onPointerLeave:E(e.onPointerLeave,O(()=>{a||(s.onTriggerLeave(),m.current=!1)})),onClick:E(e.onClick,()=>{s.onItemSelect(c.value),M.current=R}),onKeyDown:E(e.onKeyDown,p=>{const C={horizontal:"ArrowDown",vertical:s.dir==="rtl"?"ArrowLeft":"ArrowRight"}[s.orientation];R&&p.key===C&&(c.onEntryKeyDown(),p.preventDefault())})})})}),R&&o.jsxs(o.Fragment,{children:[o.jsx(qe,{"aria-hidden":!0,tabIndex:0,ref:c.focusProxyRef,onFocus:p=>{const w=c.contentRef.current,C=p.relatedTarget,y=C===d.current,T=w?.contains(C);(y||!T)&&c.onFocusProxyEnter(y?"start":"end")}}),s.viewport&&o.jsx("span",{"aria-owns":u})]})]})});we.displayName=G;var rt="NavigationMenuLink",ee="navigationMenu.linkSelect",xe=r.forwardRef((e,t)=>{const{__scopeNavigationMenu:n,active:a,onSelect:i,...s}=e;return o.jsx(ye,{asChild:!0,children:o.jsx(b.a,{"data-active":a?"":void 0,"aria-current":a?"page":void 0,...s,ref:t,onClick:E(e.onClick,c=>{const d=c.target,l=new CustomEvent(ee,{bubbles:!0,cancelable:!0});if(d.addEventListener(ee,h=>i?.(h),{once:!0}),Z(d,l),!l.defaultPrevented&&!c.metaKey){const h=new CustomEvent(F,{bubbles:!0,cancelable:!0});Z(d,h)}},{checkForDefaultPrevented:!1})})})});xe.displayName=rt;var q="NavigationMenuIndicator",he=r.forwardRef((e,t)=>{const{forceMount:n,...a}=e,i=I(q,e.__scopeNavigationMenu),s=!!i.value;return i.indicatorTrack?Fe.createPortal(o.jsx(K,{present:n||s,children:o.jsx(at,{...a,ref:t})}),i.indicatorTrack):null});he.displayName=q;var at=r.forwardRef((e,t)=>{const{__scopeNavigationMenu:n,...a}=e,i=I(q,n),s=ce(n),[c,d]=r.useState(null),[l,h]=r.useState(null),u=i.orientation==="horizontal",m=!!i.value;r.useEffect(()=>{const p=s().find(w=>w.value===i.value)?.ref.current;p&&d(p)},[s,i.value]);const M=()=>{c&&h({size:u?c.offsetWidth:c.offsetHeight,offset:u?c.offsetLeft:c.offsetTop})};return H(c,M),H(i.indicatorTrack,M),l?o.jsx(b.div,{"aria-hidden":!0,"data-state":m?"visible":"hidden","data-orientation":i.orientation,...a,ref:t,style:{position:"absolute",...u?{left:0,width:l.size+"px",transform:`translateX(${l.offset}px)`}:{top:0,height:l.size+"px",transform:`translateY(${l.offset}px)`},...a.style}}):null}),D="NavigationMenuContent",Ne=r.forwardRef((e,t)=>{const{forceMount:n,...a}=e,i=I(D,e.__scopeNavigationMenu),s=ge(D,e.__scopeNavigationMenu),c=L(s.contentRef,t),d=s.value===i.value,l={value:s.value,triggerRef:s.triggerRef,focusProxyRef:s.focusProxyRef,wasEscapeCloseRef:s.wasEscapeCloseRef,onContentFocusOutside:s.onContentFocusOutside,onRootContentClose:s.onRootContentClose,...a};return i.viewport?o.jsx(it,{forceMount:n,...l,ref:c}):o.jsx(K,{present:n||d,children:o.jsx(Ce,{"data-state":Q(d),...l,ref:c,onPointerEnter:E(e.onPointerEnter,i.onContentEnter),onPointerLeave:E(e.onPointerLeave,O(i.onContentLeave)),style:{pointerEvents:!d&&i.isRootMenu?"none":void 0,...l.style}})})});Ne.displayName=D;var it=r.forwardRef((e,t)=>{const n=I(D,e.__scopeNavigationMenu),{onViewportContentChange:a,onViewportContentRemove:i}=n;return z(()=>{a(e.value,{ref:t,...e})},[e,t,a]),z(()=>()=>i(e.value),[e.value,i]),null}),F="navigationMenu.rootContentDismiss",Ce=r.forwardRef((e,t)=>{const{__scopeNavigationMenu:n,value:a,triggerRef:i,focusProxyRef:s,wasEscapeCloseRef:c,onRootContentClose:d,onContentFocusOutside:l,...h}=e,u=I(D,n),m=r.useRef(null),M=L(m,t),R=Ee(u.baseId,a),p=be(u.baseId,a),w=ce(n),C=r.useRef(null),{onItemDismiss:y}=u;r.useEffect(()=>{const f=m.current;if(u.isRootMenu&&f){const g=()=>{y(),d(),f.contains(document.activeElement)&&i.current?.focus()};return f.addEventListener(F,g),()=>f.removeEventListener(F,g)}},[u.isRootMenu,e.value,i,y,d]);const T=r.useMemo(()=>{const g=w().map(P=>P.value);u.dir==="rtl"&&g.reverse();const v=g.indexOf(u.value),x=g.indexOf(u.previousValue),j=a===u.value,_=x===g.indexOf(a);if(!j&&!_)return C.current;const N=(()=>{if(v!==x){if(j&&x!==-1)return v>x?"from-end":"from-start";if(_&&v!==-1)return v>x?"to-start":"to-end"}return null})();return C.current=N,N},[u.previousValue,u.value,u.dir,w,a]);return o.jsx(Re,{asChild:!0,children:o.jsx(Ve,{id:p,"aria-labelledby":R,"data-motion":T,"data-orientation":u.orientation,...h,ref:M,disableOutsidePointerEvents:!1,onDismiss:()=>{const f=new Event(F,{bubbles:!0,cancelable:!0});m.current?.dispatchEvent(f)},onFocusOutside:E(e.onFocusOutside,f=>{l();const g=f.target;u.rootNavigationMenu?.contains(g)&&f.preventDefault()}),onPointerDownOutside:E(e.onPointerDownOutside,f=>{const g=f.target,v=w().some(j=>j.ref.current?.contains(g)),x=u.isRootMenu&&u.viewport?.contains(g);(v||x||!u.isRootMenu)&&f.preventDefault()}),onKeyDown:E(e.onKeyDown,f=>{const g=f.altKey||f.ctrlKey||f.metaKey;if(f.key==="Tab"&&!g){const x=U(f.currentTarget),j=document.activeElement,_=x.findIndex(V=>V===j),P=f.shiftKey?x.slice(0,_).reverse():x.slice(_+1,x.length);J(P)?f.preventDefault():s.current?.focus()}}),onEscapeKeyDown:E(e.onEscapeKeyDown,f=>{c.current=!0})})})}),X="NavigationMenuViewport",Me=r.forwardRef((e,t)=>{const{forceMount:n,...a}=e,s=!!I(X,e.__scopeNavigationMenu).value;return o.jsx(K,{present:n||s,children:o.jsx(st,{...a,ref:t})})});Me.displayName=X;var st=r.forwardRef((e,t)=>{const{__scopeNavigationMenu:n,children:a,...i}=e,s=I(X,n),c=L(t,s.onViewportChange),d=tt(D,e.__scopeNavigationMenu),[l,h]=r.useState(null),[u,m]=r.useState(null),M=l?l?.width+"px":void 0,R=l?l?.height+"px":void 0,p=!!s.value,w=p?s.value:s.previousValue;return H(u,()=>{u&&h({width:u.offsetWidth,height:u.offsetHeight})}),o.jsx(b.div,{"data-state":Q(p),"data-orientation":s.orientation,...i,ref:c,style:{pointerEvents:!p&&s.isRootMenu?"none":void 0,"--radix-navigation-menu-viewport-width":M,"--radix-navigation-menu-viewport-height":R,...i.style},onPointerEnter:E(e.onPointerEnter,s.onContentEnter),onPointerLeave:E(e.onPointerLeave,O(s.onContentLeave)),children:Array.from(d.items).map(([y,{ref:T,forceMount:f,...g}])=>{const v=w===y;return o.jsx(K,{present:f||v,children:o.jsx(Ce,{...g,ref:Le(T,x=>{v&&x&&m(x)})})},y)})})}),ct="FocusGroup",Re=r.forwardRef((e,t)=>{const{__scopeNavigationMenu:n,...a}=e,i=I(ct,n);return o.jsx($.Provider,{scope:n,children:o.jsx($.Slot,{scope:n,children:o.jsx(b.div,{dir:i.dir,...a,ref:t})})})}),te=["ArrowRight","ArrowLeft","ArrowUp","ArrowDown"],ut="FocusGroupItem",ye=r.forwardRef((e,t)=>{const{__scopeNavigationMenu:n,...a}=e,i=Je(n),s=I(ut,n);return o.jsx($.ItemSlot,{scope:n,children:o.jsx(b.button,{...a,ref:t,onKeyDown:E(e.onKeyDown,c=>{if(["Home","End",...te].includes(c.key)){let l=i().map(m=>m.ref.current);if([s.dir==="rtl"?"ArrowRight":"ArrowLeft","ArrowUp","End"].includes(c.key)&&l.reverse(),te.includes(c.key)){const m=l.indexOf(c.currentTarget);l=l.slice(m+1)}setTimeout(()=>J(l)),c.preventDefault()}})})})});function U(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:a=>{const i=a.tagName==="INPUT"&&a.type==="hidden";return a.disabled||a.hidden||i?NodeFilter.FILTER_SKIP:a.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function J(e){const t=document.activeElement;return e.some(n=>n===t?!0:(n.focus(),document.activeElement!==t))}function lt(e){return e.forEach(t=>{t.dataset.tabindex=t.getAttribute("tabindex")||"",t.setAttribute("tabindex","-1")}),()=>{e.forEach(t=>{const n=t.dataset.tabindex;t.setAttribute("tabindex",n)})}}function H(e,t){const n=S(t);z(()=>{let a=0;if(e){const i=new ResizeObserver(()=>{cancelAnimationFrame(a),a=window.requestAnimationFrame(n)});return i.observe(e),()=>{window.cancelAnimationFrame(a),i.unobserve(e)}}},[e,n])}function Q(e){return e?"open":"closed"}function Ee(e,t){return`${e}-trigger-${t}`}function be(e,t){return`${e}-content-${t}`}function O(e){return t=>t.pointerType==="mouse"?e(t):void 0}var Ie=ue,Te=ve,dt=pe,je=we,ft=xe,Pe=he,_e=Ne,Se=Me;const Ae=r.forwardRef(({className:e,children:t,...n},a)=>o.jsxs(Ie,{ref:a,className:A("relative z-10 flex max-w-max flex-1 items-center justify-center",e),...n,children:[t,o.jsx(ke,{})]}));Ae.displayName=Ie.displayName;const De=r.forwardRef(({className:e,...t},n)=>o.jsx(Te,{ref:n,className:A("group flex flex-1 list-none items-center justify-center space-x-1",e),...t}));De.displayName=Te.displayName;const ne=dt,W=$e("group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"),vt=r.forwardRef(({className:e,children:t,...n},a)=>o.jsxs(je,{ref:a,className:A(W(),"group",e),...n,children:[t," ",o.jsx(We,{className:"relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180","aria-hidden":"true"})]}));vt.displayName=je.displayName;const mt=r.forwardRef(({className:e,...t},n)=>o.jsx(_e,{ref:n,className:A("left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",e),...t}));mt.displayName=_e.displayName;const oe=ft,ke=r.forwardRef(({className:e,...t},n)=>o.jsx("div",{className:A("absolute left-0 top-full flex justify-center"),children:o.jsx(Se,{className:A("origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",e),ref:n,...t})}));ke.displayName=Se.displayName;const gt=r.forwardRef(({className:e,...t},n)=>o.jsx(Pe,{ref:n,className:A("top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",e),...t,children:o.jsx("div",{className:"relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md"})}));gt.displayName=Pe.displayName;function Et({data:e}){return o.jsx(Ae,{children:o.jsxs(De,{children:[o.jsx("a",{href:"/",children:o.jsx(ne,{children:o.jsx(oe,{className:W(),children:o.jsxs(Ge,{children:[o.jsx(Ue,{src:"/logo/Icon.png",className:"p-1"}),o.jsx(He,{children:"CN"})]})})})}),e.map((t,n)=>o.jsx("a",{href:t.href,children:o.jsx(ne,{children:o.jsx(oe,{className:W(),children:t.title})},n)}))]})})}export{Et as NavigationMenu};