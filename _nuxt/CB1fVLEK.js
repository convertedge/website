import{z as b,A as m,d as x,B as _,C as v,D as h,E as k,c as o,e as l,G as w,g as j,t as u,H as z,I as C,f as r,F as O,J as B,K as A,i as S,h as p}from"./D1CF-rGY.js";import{u as $,a as N}from"./D-tNLtDT.js";import{_ as V}from"./DlAUqK2U.js";import{u as D}from"./BrPaE6GD.js";import{q as I}from"./B8--atcF.js";import"./DNwkpLAX.js";const M={base:"inline-flex items-center",rounded:"rounded-md",font:"font-medium",size:{xs:"text-xs px-1.5 py-0.5",sm:"text-xs px-2 py-1",md:"text-sm px-2 py-1",lg:"text-sm px-2.5 py-1.5"},color:{white:{solid:"ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white dark:bg-gray-900"},gray:{solid:"ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-800"},black:{solid:"text-white dark:text-gray-900 bg-gray-900 dark:bg-white"}},variant:{solid:"bg-{color}-500 dark:bg-{color}-400 text-white dark:text-gray-900",outline:"text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400",soft:"bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400",subtle:"bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 ring-opacity-25 dark:ring-opacity-25"},default:{size:"sm",variant:"solid",color:"primary"}},s=b(m.ui.strategy,m.ui.badge,M),U=x({inheritAttrs:!1,props:{size:{type:String,default:()=>s.default.size,validator(e){return Object.keys(s.size).includes(e)}},color:{type:String,default:()=>s.default.color,validator(e){return[...m.ui.colors,...Object.keys(s.color)].includes(e)}},variant:{type:String,default:()=>s.default.variant,validator(e){return[...Object.keys(s.variant),...Object.values(s.color).flatMap(t=>Object.keys(t))].includes(e)}},label:{type:[String,Number],default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:t,attrs:n}=$("badge",_(e,"ui"),s),{size:g,rounded:f}=N({ui:t,props:e}),i=v(()=>{var d,a;const c=((a=(d=t.value.color)==null?void 0:d[e.color])==null?void 0:a[e.variant])||t.value.variant[e.variant];return h(k(t.value.base,t.value.font,f.value,t.value.size[g.value],c==null?void 0:c.replaceAll("{color}",e.color)),e.class)});return{attrs:n,badgeClass:i}}});function q(e,t,n,g,f,i){return o(),l("span",z({class:e.badgeClass},e.attrs),[w(e.$slots,"default",{},()=>[j(u(e.label),1)])],16)}const E=Object.assign(V(U,[["render",q]]),{__name:"UBadge"}),F={class:"py-10"},G={class:"flex flex-col justify-center max-w-5xl mx-auto px-4 md:px-6"},J={class:"flex flex-col justify-center divide-y divide-gray-400 [&>*]:py-16"},H={class:"space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-[8.75rem] md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-400 before:to-transparent"},K={key:0},L={class:"flex items-center"},P={class:"flex items-center md:space-x-reverse"},R={class:"text-sm font-medium text-primary-500 ml-[22px] md:ml-0 md:w-28"},T={class:"py-2 px-4 ml-8 md:ml-40"},Q={class:"text-xl pb-1"},W=["src"],X={class:"text-gray-500"},se=x({__name:"changelog",async setup(e){let t,n;const{data:g}=([t,n]=C(()=>D("changelog",()=>I("/changelog").findOne())),t=await t,n(),t);return(f,i)=>{var d;const c=E;return o(),l("div",F,[r("section",G,[r("div",J,[r("div",H,[(o(!0),l(O,null,B((d=A(g))==null?void 0:d.items.reverse(),(a,y)=>(o(),l("div",{class:"relative",key:y},[a.published?(o(),l("div",K,[r("div",L,[r("div",P,[i[0]||(i[0]=r("div",{class:"flex items-center justify-center w-3 h-3 md:order-1 ml-[14px] md:ml-[23px]"},[r("svg",{class:"fill-gray-500",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[r("path",{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"})])],-1)),r("time",R,u(a.date),1)]),S(c,{label:a.version,variant:"soft",class:"ml-7"},null,8,["label"])]),r("div",T,[r("h3",Q,u(a.title),1),a.picture?(o(),l("img",{key:0,src:a.picture,class:"w-full h-64 object-cover rounded-lg"},null,8,W)):p("",!0),r("p",X,u(a.description),1)])])):p("",!0)]))),128))])])])])}}});export{se as default};