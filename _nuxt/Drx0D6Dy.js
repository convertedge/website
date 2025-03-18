import{C as me,e as Z,g as ee,d as O,P as H,j as te,L as ye,k as L,r as he,h as _e,M as be,s as W,t as Y,c as oe,a as ne,N as we,_ as xe}from"./s42IwQPo.js";import{L as U,d as C,I as se,r as P,S as b,i as m,w as g,N as x,R as s,aR as Ce,b as ae,a5 as R,a8 as A,o as re,f as _,a6 as Pe,U as $,a0 as M,Q as le,$ as Oe,ab as Q,aa as ke,G as N,e as K,n as T,aS as Be,V as $e,q as De,K as Se,c as B,F as S,g as h,A as F,C as I,t as D,aT as Ee,a2 as Re}from"./C2PbEHgy.js";import{_ as ie,a as V,f as ue,u as ce,i as de,d as pe,e as fe,j as Ae,b as Te,c as Fe,P as ve}from"./QIm2j3zD.js";import{_ as Ie}from"./DlAUqK2U.js";import"./CY9EDs2i.js";import"./D2WDQPV0.js";import"./B8ZYFOTl.js";let z=0;function Le(){U(t=>{if(!me)return;const n=document.querySelectorAll("[data-reka-focus-guard]");document.body.insertAdjacentElement("afterbegin",n[0]??X()),document.body.insertAdjacentElement("beforeend",n[1]??X()),z++,t(()=>{z===1&&document.querySelectorAll("[data-reka-focus-guard]").forEach(e=>e.remove()),z--})})}function X(){const t=document.createElement("span");return t.setAttribute("data-reka-focus-guard",""),t.tabIndex=0,t.style.outline="none",t.style.opacity="0",t.style.position="fixed",t.style.pointerEvents="none",t}const[E,He]=Z("PopoverRoot"),Ue=C({__name:"PopoverRoot",props:{defaultOpen:{type:Boolean,default:!1},open:{type:Boolean,default:void 0},modal:{type:Boolean,default:!1}},emits:["update:open"],setup(t,{emit:n}){const e=t,o=n,{modal:r}=se(e),u=ee(e,"open",o,{defaultValue:e.defaultOpen,passive:e.open===void 0}),l=P(),i=P(!1);return He({contentId:"",triggerId:"",modal:r,open:u,onOpenChange:c=>{u.value=c},onOpenToggle:()=>{u.value=!u.value},triggerElement:l,hasCustomAnchor:i}),(c,d)=>(m(),b(s(ie),null,{default:g(()=>[x(c.$slots,"default",{open:s(u)})]),_:3}))}}),Me=C({__name:"PopoverAnchor",props:{reference:{},asChild:{type:Boolean},as:{}},setup(t){const n=t;O();const e=E();return Ce(()=>{e.hasCustomAnchor.value=!0}),ae(()=>{e.hasCustomAnchor.value=!1}),(o,r)=>(m(),b(s(V),R(A(n)),{default:g(()=>[x(o.$slots,"default")]),_:3},16))}}),je=C({__name:"PopoverArrow",props:{width:{default:10},height:{default:5},rounded:{type:Boolean},asChild:{type:Boolean},as:{default:"svg"}},setup(t){const n=t;return O(),(e,o)=>(m(),b(s(ue),R(A(n)),{default:g(()=>[x(e.$slots,"default")]),_:3},16))}}),Ne=C({__name:"PopoverClose",props:{asChild:{type:Boolean},as:{default:"button"}},setup(t){const n=t;O();const e=E();return(o,r)=>(m(),b(s(H),{type:o.as==="button"?"button":void 0,as:o.as,"as-child":n.asChild,onClick:r[0]||(r[0]=u=>s(e).onOpenChange(!1))},{default:g(()=>[x(o.$slots,"default")]),_:3},8,["type","as","as-child"]))}}),ze=C({__name:"PopoverTrigger",props:{asChild:{type:Boolean},as:{default:"button"}},setup(t){const n=t,e=E(),{forwardRef:o,currentElement:r}=O();return e.triggerId||(e.triggerId=ce(void 0,"reka-popover-trigger")),re(()=>{e.triggerElement.value=r.value}),(u,l)=>(m(),b(Pe(s(e).hasCustomAnchor.value?s(H):s(V)),{"as-child":""},{default:g(()=>[_(s(H),{id:s(e).triggerId,ref:s(o),type:u.as==="button"?"button":void 0,"aria-haspopup":"dialog","aria-expanded":s(e).open.value,"aria-controls":s(e).contentId,"data-state":s(e).open.value?"open":"closed",as:u.as,"as-child":n.asChild,onClick:s(e).onOpenToggle},{default:g(()=>[x(u.$slots,"default")]),_:3},8,["id","type","aria-expanded","aria-controls","data-state","as","as-child","onClick"])]),_:3}))}}),Ke=C({__name:"PopoverPortal",props:{to:{},disabled:{type:Boolean},defer:{type:Boolean},forceMount:{type:Boolean}},setup(t){const n=t;return(e,o)=>(m(),b(s(de),R(A(n)),{default:g(()=>[x(e.$slots,"default")]),_:3},16))}}),ge=C({__name:"PopoverContentImpl",props:{trapFocus:{type:Boolean},side:{},sideOffset:{},align:{},alignOffset:{},avoidCollisions:{type:Boolean},collisionBoundary:{},collisionPadding:{},arrowPadding:{},sticky:{},hideWhenDetached:{type:Boolean},positionStrategy:{},updatePositionStrategy:{},disableUpdateOnLayoutShift:{type:Boolean},prioritizePosition:{type:Boolean},reference:{},asChild:{type:Boolean},as:{},disableOutsidePointerEvents:{type:Boolean}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(t,{emit:n}){const e=t,o=n,r=te(ye(e,"trapFocus","disableOutsidePointerEvents")),{forwardRef:u}=O(),l=E();return Le(),(i,c)=>(m(),b(s(Ae),{"as-child":"",loop:"",trapped:i.trapFocus,onMountAutoFocus:c[5]||(c[5]=d=>o("openAutoFocus",d)),onUnmountAutoFocus:c[6]||(c[6]=d=>o("closeAutoFocus",d))},{default:g(()=>[_(s(pe),{"as-child":"","disable-outside-pointer-events":i.disableOutsidePointerEvents,onPointerDownOutside:c[0]||(c[0]=d=>o("pointerDownOutside",d)),onInteractOutside:c[1]||(c[1]=d=>o("interactOutside",d)),onEscapeKeyDown:c[2]||(c[2]=d=>o("escapeKeyDown",d)),onFocusOutside:c[3]||(c[3]=d=>o("focusOutside",d)),onDismiss:c[4]||(c[4]=d=>s(l).onOpenChange(!1))},{default:g(()=>[_(s(fe),$(s(r),{id:s(l).contentId,ref:s(u),"data-state":s(l).open.value?"open":"closed","aria-labelledby":s(l).triggerId,style:{"--reka-popover-content-transform-origin":"var(--reka-popper-transform-origin)","--reka-popover-content-available-width":"var(--reka-popper-available-width)","--reka-popover-content-available-height":"var(--reka-popper-available-height)","--reka-popover-trigger-width":"var(--reka-popper-anchor-width)","--reka-popover-trigger-height":"var(--reka-popper-anchor-height)"},role:"dialog"}),{default:g(()=>[x(i.$slots,"default")]),_:3},16,["id","data-state","aria-labelledby"])]),_:3},8,["disable-outside-pointer-events"])]),_:3},8,["trapped"]))}}),Ge=C({__name:"PopoverContentModal",props:{side:{},sideOffset:{},align:{},alignOffset:{},avoidCollisions:{type:Boolean},collisionBoundary:{},collisionPadding:{},arrowPadding:{},sticky:{},hideWhenDetached:{type:Boolean},positionStrategy:{},updatePositionStrategy:{},disableUpdateOnLayoutShift:{type:Boolean},prioritizePosition:{type:Boolean},reference:{},asChild:{type:Boolean},as:{},disableOutsidePointerEvents:{type:Boolean}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(t,{emit:n}){const e=t,o=n,r=E(),u=P(!1);Te(!0);const l=L(e,o),{forwardRef:i,currentElement:c}=O();return Fe(c),(d,a)=>(m(),b(ge,$(s(l),{ref:s(i),"trap-focus":s(r).open.value,"disable-outside-pointer-events":"",onCloseAutoFocus:a[0]||(a[0]=M(p=>{var y;o("closeAutoFocus",p),u.value||(y=s(r).triggerElement.value)==null||y.focus()},["prevent"])),onPointerDownOutside:a[1]||(a[1]=p=>{o("pointerDownOutside",p);const y=p.detail.originalEvent,f=y.button===0&&y.ctrlKey===!0,v=y.button===2||f;u.value=v}),onFocusOutside:a[2]||(a[2]=M(()=>{},["prevent"]))}),{default:g(()=>[x(d.$slots,"default")]),_:3},16,["trap-focus"]))}}),Ve=C({__name:"PopoverContentNonModal",props:{side:{},sideOffset:{},align:{},alignOffset:{},avoidCollisions:{type:Boolean},collisionBoundary:{},collisionPadding:{},arrowPadding:{},sticky:{},hideWhenDetached:{type:Boolean},positionStrategy:{},updatePositionStrategy:{},disableUpdateOnLayoutShift:{type:Boolean},prioritizePosition:{type:Boolean},reference:{},asChild:{type:Boolean},as:{},disableOutsidePointerEvents:{type:Boolean}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(t,{emit:n}){const e=t,o=n,r=E(),u=P(!1),l=P(!1),i=L(e,o);return(c,d)=>(m(),b(ge,$(s(i),{"trap-focus":!1,"disable-outside-pointer-events":!1,onCloseAutoFocus:d[0]||(d[0]=a=>{var p;o("closeAutoFocus",a),a.defaultPrevented||(u.value||(p=s(r).triggerElement.value)==null||p.focus(),a.preventDefault()),u.value=!1,l.value=!1}),onInteractOutside:d[1]||(d[1]=async a=>{var f;o("interactOutside",a),a.defaultPrevented||(u.value=!0,a.detail.originalEvent.type==="pointerdown"&&(l.value=!0));const p=a.target;((f=s(r).triggerElement.value)==null?void 0:f.contains(p))&&a.preventDefault(),a.detail.originalEvent.type==="focusin"&&l.value&&a.preventDefault()})}),{default:g(()=>[x(c.$slots,"default")]),_:3},16))}}),qe=C({__name:"PopoverContent",props:{forceMount:{type:Boolean},side:{},sideOffset:{},align:{},alignOffset:{},avoidCollisions:{type:Boolean},collisionBoundary:{},collisionPadding:{},arrowPadding:{},sticky:{},hideWhenDetached:{type:Boolean},positionStrategy:{},updatePositionStrategy:{},disableUpdateOnLayoutShift:{type:Boolean},prioritizePosition:{type:Boolean},reference:{},asChild:{type:Boolean},as:{},disableOutsidePointerEvents:{type:Boolean}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(t,{emit:n}){const e=t,o=n,r=E(),u=L(e,o),{forwardRef:l}=O();return r.contentId||(r.contentId=ce(void 0,"reka-popover-content")),(i,c)=>(m(),b(s(ve),{present:i.forceMount||s(r).open.value},{default:g(()=>[s(r).modal.value?(m(),b(Ge,$({key:0},s(u),{ref:s(l)}),{default:g(()=>[x(i.$slots,"default")]),_:3},16)):(m(),b(Ve,$({key:1},s(u),{ref:s(l)}),{default:g(()=>[x(i.$slots,"default")]),_:3},16))]),_:3},8,["present"]))}}),[q,We]=Z("HoverCardRoot"),Ye=C({__name:"HoverCardRoot",props:{defaultOpen:{type:Boolean,default:!1},open:{type:Boolean,default:void 0},openDelay:{default:700},closeDelay:{default:300}},emits:["update:open"],setup(t,{emit:n}){const e=t,o=n,{openDelay:r,closeDelay:u}=se(e);O();const l=ee(e,"open",o,{defaultValue:e.defaultOpen,passive:e.open===void 0}),i=P(0),c=P(0),d=P(!1),a=P(!1),p=P(!1),y=P();function f(){clearTimeout(c.value),i.value=window.setTimeout(()=>l.value=!0,r.value)}function v(){clearTimeout(i.value),!d.value&&!a.value&&(c.value=window.setTimeout(()=>l.value=!1,u.value))}function w(){l.value=!1}return We({open:l,onOpenChange(k){l.value=k},onOpen:f,onClose:v,onDismiss:w,hasSelectionRef:d,isPointerDownOnContentRef:a,isPointerInTransitRef:p,triggerElement:y}),(k,j)=>(m(),b(s(ie),null,{default:g(()=>[x(k.$slots,"default",{open:s(l)})]),_:3}))}});function G(t){return n=>n.pointerType==="touch"?void 0:t()}function Qe(t){const n=[],e=document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,{acceptNode:o=>o.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP});for(;e.nextNode();)n.push(e.currentNode);return n}const Xe=C({__name:"HoverCardTrigger",props:{reference:{},asChild:{type:Boolean},as:{default:"a"}},setup(t){const{forwardRef:n,currentElement:e}=O(),o=q();o.triggerElement=e;function r(){setTimeout(()=>{!o.isPointerInTransitRef.value&&!o.open.value&&o.onClose()},0)}return(u,l)=>(m(),b(s(V),{"as-child":"",reference:u.reference},{default:g(()=>[_(s(H),{ref:s(n),"as-child":u.asChild,as:u.as,"data-state":s(o).open.value?"open":"closed","data-grace-area-trigger":"",onPointerenter:l[0]||(l[0]=i=>s(G)(s(o).onOpen)(i)),onPointerleave:l[1]||(l[1]=i=>s(G)(r)(i)),onFocus:l[2]||(l[2]=i=>s(o).onOpen()),onBlur:l[3]||(l[3]=i=>s(o).onClose())},{default:g(()=>[x(u.$slots,"default")]),_:3},8,["as-child","as","data-state"])]),_:3},8,["reference"]))}}),Je=C({__name:"HoverCardPortal",props:{to:{},disabled:{type:Boolean},defer:{type:Boolean},forceMount:{type:Boolean}},setup(t){const n=t;return(e,o)=>(m(),b(s(de),R(A(n)),{default:g(()=>[x(e.$slots,"default")]),_:3},16))}});function Ze(t,n){const e=he(!1,300),o=P(null),r=_e();function u(){o.value=null,e.value=!1}function l(i,c){const d=i.currentTarget,a={x:i.clientX,y:i.clientY},p=et(a,d.getBoundingClientRect()),y=tt(a,p),f=ot(c.getBoundingClientRect()),v=st([...y,...f]);o.value=v,e.value=!0}return U(i=>{if(t.value&&n.value){const c=a=>l(a,n.value),d=a=>l(a,t.value);t.value.addEventListener("pointerleave",c),n.value.addEventListener("pointerleave",d),i(()=>{var a,p;(a=t.value)==null||a.removeEventListener("pointerleave",c),(p=n.value)==null||p.removeEventListener("pointerleave",d)})}}),U(i=>{var c;if(o.value){const d=a=>{var k,j;if(!o.value)return;const p=a.target,y={x:a.clientX,y:a.clientY},f=((k=t.value)==null?void 0:k.contains(p))||((j=n.value)==null?void 0:j.contains(p)),v=!nt(y,o.value),w=!!p.closest("[data-grace-area-trigger]");f?u():(v||w)&&(u(),r.trigger())};(c=t.value)==null||c.ownerDocument.addEventListener("pointermove",d),i(()=>{var a;return(a=t.value)==null?void 0:a.ownerDocument.removeEventListener("pointermove",d)})}}),{isPointerInTransit:e,onPointerExit:r.on}}function et(t,n){const e=Math.abs(n.top-t.y),o=Math.abs(n.bottom-t.y),r=Math.abs(n.right-t.x),u=Math.abs(n.left-t.x);switch(Math.min(e,o,r,u)){case u:return"left";case r:return"right";case e:return"top";case o:return"bottom";default:throw new Error("unreachable")}}function tt(t,n,e=5){const o=[];switch(n){case"top":o.push({x:t.x-e,y:t.y+e},{x:t.x+e,y:t.y+e});break;case"bottom":o.push({x:t.x-e,y:t.y-e},{x:t.x+e,y:t.y-e});break;case"left":o.push({x:t.x+e,y:t.y-e},{x:t.x+e,y:t.y+e});break;case"right":o.push({x:t.x-e,y:t.y-e},{x:t.x-e,y:t.y+e});break}return o}function ot(t){const{top:n,right:e,bottom:o,left:r}=t;return[{x:r,y:n},{x:e,y:n},{x:e,y:o},{x:r,y:o}]}function nt(t,n){const{x:e,y:o}=t;let r=!1;for(let u=0,l=n.length-1;u<n.length;l=u++){const i=n[u].x,c=n[u].y,d=n[l].x,a=n[l].y;c>o!=a>o&&e<(d-i)*(o-c)/(a-c)+i&&(r=!r)}return r}function st(t){const n=t.slice();return n.sort((e,o)=>e.x<o.x?-1:e.x>o.x?1:e.y<o.y?-1:e.y>o.y?1:0),at(n)}function at(t){if(t.length<=1)return t.slice();const n=[];for(let o=0;o<t.length;o++){const r=t[o];for(;n.length>=2;){const u=n[n.length-1],l=n[n.length-2];if((u.x-l.x)*(r.y-l.y)>=(u.y-l.y)*(r.x-l.x))n.pop();else break}n.push(r)}n.pop();const e=[];for(let o=t.length-1;o>=0;o--){const r=t[o];for(;e.length>=2;){const u=e[e.length-1],l=e[e.length-2];if((u.x-l.x)*(r.y-l.y)>=(u.y-l.y)*(r.x-l.x))e.pop();else break}e.push(r)}return e.pop(),n.length===1&&e.length===1&&n[0].x===e[0].x&&n[0].y===e[0].y?n:n.concat(e)}const rt=C({__name:"HoverCardContentImpl",props:{side:{},sideOffset:{},align:{},alignOffset:{},avoidCollisions:{type:Boolean},collisionBoundary:{},collisionPadding:{},arrowPadding:{},sticky:{},hideWhenDetached:{type:Boolean},positionStrategy:{},updatePositionStrategy:{},disableUpdateOnLayoutShift:{type:Boolean},prioritizePosition:{type:Boolean},reference:{},asChild:{type:Boolean},as:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside"],setup(t,{emit:n}){const e=t,o=n,r=te(e),{forwardRef:u,currentElement:l}=O(),i=q(),{isPointerInTransit:c,onPointerExit:d}=Ze(i.triggerElement,l);be(i.isPointerInTransitRef,c,{direction:"rtl"}),d(()=>{i.onClose()});const a=P(!1);let p;U(f=>{if(a.value){const v=document.body;p=v.style.userSelect||v.style.webkitUserSelect,v.style.userSelect="none",v.style.webkitUserSelect="none",f(()=>{v.style.userSelect=p,v.style.webkitUserSelect=p})}});function y(){a.value=!1,i.isPointerDownOnContentRef.value=!1,le(()=>{var v;((v=document.getSelection())==null?void 0:v.toString())!==""&&(i.hasSelectionRef.value=!0)})}return re(()=>{l.value&&(document.addEventListener("pointerup",y),Qe(l.value).forEach(v=>v.setAttribute("tabindex","-1")))}),ae(()=>{document.removeEventListener("pointerup",y),i.hasSelectionRef.value=!1,i.isPointerDownOnContentRef.value=!1}),(f,v)=>(m(),b(s(pe),{"as-child":"","disable-outside-pointer-events":!1,onEscapeKeyDown:v[1]||(v[1]=w=>o("escapeKeyDown",w)),onPointerDownOutside:v[2]||(v[2]=w=>o("pointerDownOutside",w)),onFocusOutside:v[3]||(v[3]=M(w=>o("focusOutside",w),["prevent"])),onDismiss:s(i).onDismiss},{default:g(()=>[_(s(fe),$({...s(r),...f.$attrs},{ref:s(u),"data-state":s(i).open.value?"open":"closed",style:{userSelect:a.value?"text":void 0,WebkitUserSelect:a.value?"text":void 0,"--reka-hover-card-content-transform-origin":"var(--reka-popper-transform-origin)","--reka-hover-card-content-available-width":"var(--reka-popper-available-width)","--reka-hover-card-content-available-height":"var(--reka-popper-available-height)","--reka-hover-card-trigger-width":"var(--reka-popper-anchor-width)","--reka-hover-card-trigger-height":"var(--reka-popper-anchor-height)"},onPointerdown:v[0]||(v[0]=w=>{w.currentTarget.contains(w.target)&&(a.value=!0),s(i).hasSelectionRef.value=!1,s(i).isPointerDownOnContentRef.value=!0})}),{default:g(()=>[x(f.$slots,"default")]),_:3},16,["data-state","style"])]),_:3},8,["onDismiss"]))}}),lt=C({__name:"HoverCardContent",props:{forceMount:{type:Boolean},side:{},sideOffset:{},align:{},alignOffset:{},avoidCollisions:{type:Boolean},collisionBoundary:{},collisionPadding:{},arrowPadding:{},sticky:{},hideWhenDetached:{type:Boolean},positionStrategy:{},updatePositionStrategy:{},disableUpdateOnLayoutShift:{type:Boolean},prioritizePosition:{type:Boolean},reference:{},asChild:{type:Boolean},as:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside"],setup(t,{emit:n}){const r=L(t,n),{forwardRef:u}=O(),l=q();return(i,c)=>(m(),b(s(ve),{present:i.forceMount||s(l).open.value},{default:g(()=>[_(rt,$(s(r),{ref:s(u),onPointerenter:c[0]||(c[0]=d=>s(G)(s(l).onOpen)(d))}),{default:g(()=>[x(i.$slots,"default")]),_:3},16)]),_:3},8,["present"]))}}),it=C({__name:"HoverCardArrow",props:{width:{default:10},height:{default:5},rounded:{type:Boolean},asChild:{type:Boolean},as:{default:"svg"}},setup(t){const n=t;return O(),(e,o)=>(m(),b(s(ue),R(A(n)),{default:g(()=>[x(e.$slots,"default")]),_:3},16))}}),ut={Root:Ye,Trigger:Xe,Portal:Je,Content:lt,Arrow:it},ct={Root:Ue,Trigger:ze,Portal:Ke,Content:qe,Arrow:je,Close:Ne,Anchor:Me},dt={slots:{content:"bg-(--ui-bg) shadow-lg rounded-[calc(var(--ui-radius)*1.5)] ring ring-(--ui-border) data-[state=open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in] focus:outline-none pointer-events-auto",arrow:"fill-(--ui-border)"}},pt=$e;var J;const ft=Y({extend:Y(dt),...((J=pt.ui)==null?void 0:J.popover)||{}}),vt=C({__name:"Popover",props:{mode:{default:"click"},content:{},arrow:{type:[Boolean,Object]},portal:{type:Boolean,default:!0},dismissible:{type:Boolean,default:!0},class:{},ui:{},defaultOpen:{type:Boolean},open:{type:Boolean},modal:{type:Boolean},openDelay:{default:0},closeDelay:{default:0}},emits:["update:open"],setup(t,{emit:n}){const e=t,o=n,r=Oe(),u=e.mode==="hover"?W(e,"defaultOpen","open","openDelay","closeDelay"):W(e,"defaultOpen","open","modal"),l=L(u,o),i=Q(()=>ke(e.content,{side:"bottom",sideOffset:8,collisionPadding:8})),c=N(()=>e.dismissible?{}:{pointerDownOutside:y=>y.preventDefault(),interactOutside:y=>y.preventDefault(),escapeKeyDown:y=>y.preventDefault()}),d=Q(()=>e.arrow),a=N(()=>ft({side:i.value.side})),p=N(()=>e.mode==="hover"?ut:ct);return(y,f)=>(m(),b(s(p).Root,R(A(s(l))),{default:g(({open:v})=>[r.default?(m(),b(s(p).Trigger,{key:0,"as-child":"",class:T(e.class)},{default:g(()=>[x(y.$slots,"default",{open:v})]),_:2},1032,["class"])):K("",!0),_(s(p).Portal,{disabled:!y.portal},{default:g(()=>{var w;return[_(s(p).Content,$(i.value,{class:a.value.content({class:[!r.default&&e.class,(w=e.ui)==null?void 0:w.content]})},Be(c.value)),{default:g(()=>{var k;return[x(y.$slots,"content"),y.arrow?(m(),b(s(p).Arrow,$({key:0},d.value,{class:a.value.arrow({class:(k=e.ui)==null?void 0:k.arrow})}),null,16,["class"])):K("",!0)]}),_:3},16,["class"])]}),_:3},8,["disabled"])]),_:3},16))}}),gt=Object.assign(vt,{__name:"UPopover"}),mt={class:"sticky top-0 w-full bg-background/75 backdrop-blur z-10 border-b border-gray-100"},yt={class:"mx-auto flex max-w-7xl items-center justify-between py-4 px-6 2xl:px-0"},ht={class:"flex lg:flex-1 text-xl font-bold"},_t={href:"/",class:"flex items-center gap-2"},bt={class:"flex lg:hidden"},wt={class:"hidden lg:flex lg:gap-x-10 gap-4 py-2 px-4"},xt={class:"flex gap-1 items-center font-medium text-gray-900 group-hover:text-primary-500"},Ct={class:"p-4"},Pt=["href"],Ot={class:"text-sm text-gray-500"},kt={class:"hidden lg:flex flex-1 justify-end gap-2"},Bt={class:"fixed inset-y-0 right-0 z-10 w-full overflow-y-auto px-6 py-4 sm:max-w-60 bg-gray-50"},$t={class:"flex items-center justify-end"},Dt={class:"divide-y divide-gray-300"},St={class:"space-y-2 py-6 flex flex-col"},Et={class:"py-6 flex justify-around"},Rt=C({__name:"AppHeader",setup(t){var l;const n=[{label:"Pricing",to:"/pricing",children:[]},{label:"How it works",to:"/how-it-works",children:[]},{label:"Playground",to:"/playground-shortify",children:[]}],e=De(),o=P(!1);let r=P((l=e.path.split("/"))==null?void 0:l[1]);Se(()=>e.path,()=>{var i;return r.value=(i=e.path.split("/"))==null?void 0:i[1]});const u=()=>{const i=document.getElementsByClassName("nav-link");for(const c of i)c.classList.remove("text-slate-400");o.value=!1};return(i,c)=>{const d=oe,a=ne,p=we,y=gt;return m(),B(S,null,[h("header",mt,[h("nav",yt,[h("div",ht,[h("a",_t,[_(d,{name:"i-heroicons-cube-transparent",class:"w-7 h-7"}),c[2]||(c[2]=F(" Convertedge "))])]),h("div",bt,[_(a,{icon:"i-heroicons-bars-3",size:"sm",color:"neutral",square:"",variant:"ghost",onClick:c[0]||(c[0]=f=>o.value=!s(o))})]),h("div",wt,[(m(),B(S,null,I(n,(f,v)=>h("span",null,[f.children.length?(m(),b(y,{key:1,mode:"hover",class:"group"},{panel:g(()=>[h("ul",Ct,[(m(!0),B(S,null,I(f.children,(w,k)=>(m(),B("li",{key:k,class:"p-2 hover:bg-gray-100 text-gray-950 rounded-lg"},[h("a",{href:w.to,class:"flex items-center gap-4"},[_(d,{name:w.icon,class:"h-6 w-6 text-gray-700"},null,8,["name"]),h("div",null,[h("p",null,D(w.label),1),h("p",Ot,D(w.description),1)])],8,Pt)]))),128))])]),default:g(()=>[h("p",xt,[F(D(f.label),1),_(d,{name:"i-heroicons-chevron-down-20-solid"})])]),_:2},1024)):(m(),b(p,{key:v,to:f.to,class:T([f.to==`/${s(r)}`?"text-primary-500":"text-gray-900 hover:text-primary-500","font-medium"]),onClick:u},{default:g(()=>[h("p",null,D(f.label),1)]),_:2},1032,["to","class"]))])),64))]),h("div",kt,[_(a,{label:"Sign in",color:"neutral",variant:"outline",to:"https://app.convertedge.co/auth/login"}),_(a,{label:"Sign up",icon:"i-heroicons-arrow-right-20-solid",trailing:"",color:"neutral",to:"https://app.convertedge.co/auth/register"})])])]),h("div",{class:T([s(o)?"lg:hidden":"hidden"])},[h("div",Bt,[h("div",$t,[_(a,{icon:"i-heroicons-x-mark",size:"sm",color:"neutral",square:"",variant:"ghost",onClick:c[1]||(c[1]=f=>o.value=!s(o))})]),h("div",null,[h("div",Dt,[h("div",St,[_(p,{to:"/",class:T([s(r)==""?"text-primary-500":"text-gray-900 hover:text-primary-500","font-medium"]),onClick:u},{default:g(()=>c[3]||(c[3]=[F("Home")])),_:1},8,["class"]),(m(),B(S,null,I(n,(f,v)=>_(p,{key:v,to:f.to,class:T([f.to==`/${s(r)}`?"text-primary-500":"text-gray-900 hover:text-primary-500","font-medium"]),onClick:u},{default:g(()=>[F(D(f.label),1)]),_:2},1032,["to","class"])),64))]),h("div",Et,[_(a,{label:"Sign in",color:"neutral",variant:"outline",to:"https://app.convertedge.co/login"}),_(a,{label:"Sign up",icon:"i-heroicons-arrow-right-20-solid",trailing:"",color:"neutral",to:"https://app.convertedge.co/register"})])])])])],2)],64)}}}),At=Object.assign(Rt,{__name:"AppHeader"});function Tt(){const t=Ee("toasts",()=>[]),n=P(!1),e=[],o=()=>`${Date.now()}-${Math.random().toString(36).slice(2,9)}`;async function r(){if(!(n.value||e.length===0)){for(n.value=!0;e.length>0;){const d=e.shift();await le(),t.value=[...t.value,d].slice(-5)}n.value=!1}}function u(d){const a={id:o(),open:!0,...d};return e.push(a),r(),a}function l(d,a){const p=t.value.findIndex(y=>y.id===d);p!==-1&&(t.value[p]={...t.value[p],...a})}function i(d){const a=t.value.findIndex(p=>p.id===d);a!==-1&&(t.value[a]={...t.value[a],open:!1}),setTimeout(()=>{t.value=t.value.filter(p=>p.id!==d)},200)}function c(){t.value=[]}return{toasts:t,add:u,update:l,remove:i,clear:c}}const Ft={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4 pt-8"},It={class:"grid grid-cols-2 lg:grid-cols-3 py-8 lg:py-12"},Lt={class:"grid grid-cols-2 sm:grid-cols-3 gap-8 col-span-2"},Ht={class:"text-sm font-semibold text-gray-900 mb-2"},Ut={class:"space-y-1"},Mt={class:"flex justify-between items-center"},jt={class:"text-gray-500 text-sm"},Nt={class:"flex gap-2 items-center"},zt=C({__name:"AppFooter",setup(t){const n=[{label:"Products",children:[]},{label:"Resources",children:[{label:"How it works",to:"/how-it-works",target:"_self"},{label:"Playground",to:"/playground-shortify",target:"_self"}]},{label:"Company",children:[{label:"Pricing",to:"/pricing",target:"_self"},{label:"Terms of service",to:"/legal/terms",target:"_self"},{label:"Privacy policy",to:"/legal/privacy",target:"_self"}]}],e=Tt(),o=P(""),r=P(!1);function u(){r.value=!0,setTimeout(()=>{e.add({title:"Subscribed!",description:"You've been subscribed to our changelog."}),r.value=!1},1e3)}return(l,i)=>{const c=oe,d=ne,a=xe;return m(),B("footer",Ft,[h("div",It,[h("div",Lt,[(m(),B(S,null,I(n,(p,y)=>h("div",{key:y},[h("h3",Ht,D(p.label),1),h("ul",Ut,[(m(!0),B(S,null,I(p.children,(f,v)=>(m(),B("li",{key:v},[_(d,{to:f.to,variant:"link",color:"gray",target:f.target,ui:{padding:{sm:""}}},{default:g(()=>[F(D(f.label)+" ",1),f.target=="_blank"?(m(),b(c,{key:0,name:"i-heroicons-arrow-up-right",class:"h-3 w-3"})):K("",!0)]),_:2},1032,["to","target"])]))),128))])])),64))]),h("form",{onSubmit:M(u,["prevent"]),class:"mt-4 col-span-2 lg:mt-0 sm:col-span-1"},[i[1]||(i[1]=h("p",{class:"mb-1 font-medium text-sm text-gray-700"},"Subscribe to our changelog",-1)),_(a,{modelValue:s(o),"onUpdate:modelValue":i[0]||(i[0]=p=>Re(o)?o.value=p:null),type:"email",placeholder:"Enter your email",required:"",size:"xl",autocomplete:"email",class:"w-full"},{trailing:g(()=>[_(d,{type:"submit",size:"xs",color:"primary",label:s(r)?"Subscribing":"Subscribe",loading:s(r)},null,8,["label","loading"])]),_:1},8,["modelValue"])],32)]),h("div",Mt,[h("p",jt,"Copyright © "+D(new Date().getFullYear())+". All rights reserved.",1),h("div",Nt,[_(d,{to:"https://www.linkedin.com/company/convertedge-co",target:"_blank",icon:"i-simple-icons-linkedin","aria-label":"LinkedIn",color:"neutral",variant:"ghost"}),_(d,{to:"https://github.com/convertedge",target:"_blank",icon:"i-simple-icons-github","aria-label":"GitHub",color:"neutral",variant:"ghost"})])])])}}}),Kt=Object.assign(zt,{__name:"AppFooter"}),Gt={};function Vt(t,n){const e=At,o=Kt;return m(),B(S,null,[_(e),h("main",null,[x(t.$slots,"default")]),_(o)],64)}const eo=Ie(Gt,[["render",Vt]]);export{eo as default};
