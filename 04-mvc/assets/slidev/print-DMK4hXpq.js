function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/slidev/DrawingPreview-D1OJl7X4.js","assets/modules/vue-j0WrzVxv.js","assets/index-PIDO55IM.js","assets/modules/shiki-CMYXqV5Q.js","assets/modules/shiki-BSchMNmt.css","assets/index-C0OAsBs2.css","assets/slidev/bottom-BiB7wT1M.js","assets/bottom-DbIWt59F.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{d as _,y as l,M as E,Y as D,J as F,o as i,b as c,l as d,A as e,i as L,c as h,g as k,h as q,F as v,Z as A,e as B,f as U,C as V}from"../modules/vue-j0WrzVxv.js";import{G as j,g as z,S as G,a as M,w as W}from"./bottom-BiB7wT1M.js";import{s as I,a as g,_ as O,c as w,i as T,b as m,u as S,d as b,C as H,e as $,f,p as J,g as K}from"../index-PIDO55IM.js";import{P as X}from"./PrintStyle-DCNikhsB.js";import"../modules/shiki-CMYXqV5Q.js";const Y=["id"],Z=_({__name:"PrintSlideClick",props:{nav:{type:Object,required:!0}},setup(o){const{nav:t}=o,s=l(()=>t.currentSlideRoute.value),r=l(()=>({height:`${I.value}px`,width:`${g.value}px`})),n=E();O(()=>import("./DrawingPreview-D1OJl7X4.js").then(a=>a.a),__vite__mapDeps([0,1,2,3,4,5,6,7])).then(a=>n.value=a.default);const u=l(()=>`${s.value.no.toString().padStart(3,"0")}-${(t.clicks.value+1).toString().padStart(2,"0")}`);return D(T,F({nav:t,configs:w,themeConfigs:l(()=>w.themeConfig)})),(a,C)=>(i(),c("div",{id:u.value,class:"print-slide-container",style:q(r.value)},[d(e(j)),d(G,{is:s.value.component,"clicks-context":a.nav.clicksContext.value,class:L(e(z)(s.value)),route:s.value},null,8,["is","clicks-context","class","route"]),n.value?(i(),h(e(n),{key:0,page:s.value.no},null,8,["page"])):k("v-if",!0),d(e(M))],12,Y))}}),N=m(Z,[["__file","/Users/chun/Develop/software-architecture-explained-with-spring/node_modules/@slidev/client/internals/PrintSlideClick.vue"]]),Q=_({__name:"PrintSlide",props:{route:{type:null,required:!0}},setup(o){const{route:t}=o,{isPrintWithClicks:s}=S(),r=b(t,s.value?0:H);return(n,u)=>(i(),c(v,null,[d(N,{"clicks-context":e(r),nav:e($)(n.route,e(r))},null,8,["clicks-context","nav"]),e(s)?(i(!0),c(v,{key:0},A(e(r).total,a=>(i(),h(N,{key:a,nav:e($)(n.route,e(b)(n.route,a))},null,8,["nav"]))),128)):k("v-if",!0)],64))}}),ee=m(Q,[["__file","/Users/chun/Develop/software-architecture-explained-with-spring/node_modules/@slidev/client/internals/PrintSlide.vue"]]),te={id:"print-content"},se=_({__name:"PrintContainer",props:{width:{type:Number,required:!0}},setup(o){const t=o,{slides:s,currentRoute:r}=S(),n=l(()=>t.width),u=l(()=>t.width/f.value),a=l(()=>n.value/u.value),C=l(()=>a.value<f.value?n.value/g.value:u.value*f.value/g.value);let p=s.value;r.value.query.range&&(p=J(p.length,r.value.query.range).map(x=>p[x-1]));const R=l(()=>({"select-none":!w.selectable}));return D(K,C),(y,x)=>(i(),c("div",{id:"print-container",class:L(R.value)},[B("div",te,[(i(!0),c(v,null,A(e(p),P=>(i(),h(ee,{key:P.no,route:P},null,8,["route"]))),128))]),U(y.$slots,"controls")],2))}}),ne=m(se,[["__file","/Users/chun/Develop/software-architecture-explained-with-spring/node_modules/@slidev/client/internals/PrintContainer.vue"]]),ae={id:"page-root",class:"grid grid-cols-[1fr_max-content]"},ie=_({__name:"print",setup(o){const{isPrintMode:t}=S();return V(()=>{t?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(s,r)=>(i(),c(v,null,[e(t)?(i(),h(X,{key:0})):k("v-if",!0),B("div",ae,[d(ne,{class:"w-full h-full",style:q({background:"var(--slidev-slide-container-background, black)"}),width:e(W).width.value},null,8,["style","width"])])],64))}}),de=m(ie,[["__file","/Users/chun/Develop/software-architecture-explained-with-spring/node_modules/@slidev/client/pages/print.vue"]]);export{de as default};
