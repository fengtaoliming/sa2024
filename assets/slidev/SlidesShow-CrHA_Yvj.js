function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/slidev/DrawingControls-PlgNNkWN.js","assets/modules/unplugin-icons-B1zEtaLA.js","assets/modules/vue-DA7ZT_zT.js","assets/modules/shiki-CUMx7AeU.js","assets/modules/shiki-BSchMNmt.css","assets/slidev/DrawingPreview-Dp356V2o.js","assets/index-1_IScrjK.js","assets/index-0q8_TErp.css","assets/slidev/bottom-DK8GbI8q.js","assets/bottom-DbIWt59F.css","assets/DrawingControls-C5T1oZL5.css","assets/slidev/DrawingLayer-Cqz7glFB.js","assets/slidev/context-BtHL8qBa.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{t as D,a9 as Tt,aa as Ot,y as R,ab as N,ac as K,U as Pt,D as me,ad as Dt,d as Y,ae as Ft,C as st,_ as Vt,Y as jt,b as w,e as L,f as le,h as ce,i as F,o as p,a7 as Ve,x as X,F as z,Z as we,A as u,l as k,$ as Ee,a6 as Bt,af as Gt,c as C,g as b,a8 as Kt,k as A,ag as nt,M as Ie,r as Ut,ah as Wt,ai as zt,a1 as rt,aj as ot,j as de,ak as Ht,N as Yt,m as Qt,al as Xt}from"../modules/vue-DA7ZT_zT.js";import{u as se,l as Jt,t as Ae,f as ke,a as xe,s as Zt,c as ie,g as qt,b as H,m as We,_ as it,n as es,o as ze,d as ts,C as ss,p as He,k as be,q as Ye}from"../index-1_IScrjK.js";import{u as je,D as ns}from"./DrawingPreview-Dp356V2o.js";import{b as G,t as Re,m as q,n as at,o as lt,q as rs,r as os,u as is,v as ct,k as Se,x as Ne,s as fe,p as as,y as ls,f as Qe,z as ae,w as Me,S as ut,g as ht,G as cs,a as us}from"./bottom-DK8GbI8q.js";import{e as hs,f as ds,g as fs,h as ps,i as vs,j as _s,k as gs,l as dt,m as ms,n as ys,o as ws,p as ks,q as xs,r as bs,s as Ss,t as Ms,u as $s,v as Cs}from"../modules/unplugin-icons-B1zEtaLA.js";import{t as Es}from"../modules/shiki-CUMx7AeU.js";function wr(t){const{next:e,nextSlide:s,prev:n,prevSlide:r}=se(),{isDrawing:o}=je(),i=D(0),{direction:a,distanceX:l,distanceY:c}=Tt(t,{pointerTypes:["touch"],onSwipeStart(){o.value||(i.value=Ot())},onSwipeEnd(){if(!i.value||o.value)return;const h=Math.abs(l.value),d=Math.abs(c.value);h/window.innerWidth>.3||h>75?a.value==="left"?e():n():(d/window.innerHeight>.4||d>200)&&(a.value==="down"?r():s())}})}const _e=D(1),ge=R(()=>Jt.value.length),P=D(0),Be=D(0);function Is(){P.value>_e.value&&(P.value-=1)}function As(){P.value<ge.value&&(P.value+=1)}function Rs(){if(P.value>_e.value){let t=P.value-Be.value;t<_e.value&&(t=_e.value),P.value=t}}function Ns(){if(P.value<ge.value){let t=P.value+Be.value;t>ge.value&&(t=ge.value),P.value=t}}const Ls=[];function Ts(){const{go:t,goFirst:e,goLast:s,next:n,nextSlide:r,prev:o,prevSlide:i}=se(),{drawingEnabled:a}=je(),{escape:l,space:c,shift:h,left:d,right:f,up:v,down:x,enter:m,d:M,g:S,o:I,"`":y}=at,T={next:n,prev:o,nextSlide:r,prevSlide:i,go:t,goFirst:e,goLast:s,downloadPDF:lt,toggleDark:Ae,toggleOverview:Re,toggleDrawing:()=>a.value=!a.value,escapeOverview:()=>G.value=!1,showGotoDialog:()=>q.value=!q.value};let _=[{name:"next_space",key:N(c,K(h)),fn:n,autoRepeat:!0},{name:"prev_space",key:N(c,h),fn:o,autoRepeat:!0},{name:"next_right",key:N(f,K(h),K(G)),fn:n,autoRepeat:!0},{name:"prev_left",key:N(d,K(h),K(G)),fn:o,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:n,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:o,autoRepeat:!0},{name:"next_down",key:N(x,K(G)),fn:r,autoRepeat:!0},{name:"prev_up",key:N(v,K(G)),fn:()=>i(!1),autoRepeat:!0},{name:"next_shift",key:N(f,h),fn:r,autoRepeat:!0},{name:"prev_shift",key:N(d,h),fn:()=>i(!1),autoRepeat:!0},{name:"toggle_dark",key:N(M,K(a)),fn:Ae},{name:"toggle_overview",key:N(Pt(I,y),K(a)),fn:Re},{name:"hide_overview",key:N(l,K(a)),fn:()=>G.value=!1},{name:"goto",key:N(S,K(a)),fn:()=>q.value=!q.value},{name:"next_overview",key:N(f,G),fn:As},{name:"prev_overview",key:N(d,G),fn:Is},{name:"up_overview",key:N(v,G),fn:Rs},{name:"down_overview",key:N(x,G),fn:Ns},{name:"goto_from_overview",key:N(m,G),fn:()=>{t(P.value),G.value=!1}}];const O=new Set(_.map($=>$.name));for(const $ of Ls){const j=$(T,_);_=_.concat(j)}if(_.filter($=>$.name&&O.has($.name)).length===0){const $=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert($),console.warn($)}return _}const ft=N(K(is),K(os),rs);function Os(t,e,s=!1){typeof t=="string"&&(t=at[t]);const n=N(t,ft);let r=0,o;const i=()=>{if(clearTimeout(o),!n.value){r=0;return}s&&(o=setTimeout(i,Math.max(1e3-r*250,150)),r++),e()};return me(n,i,{flush:"sync"})}function Ps(t,e){return Dt(t,s=>{ft.value&&(s.repeat||e())})}function kr(){const t=Ts();new Map(t.map(s=>[s.key,s])).forEach(s=>{s.fn&&Os(s.key,s.fn,s.autoRepeat)}),Ps("f",()=>ct.toggle())}const Ds=Y({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]},isMain:{type:Boolean,default:!1}},setup(t){const e=t,{clicksDirection:s,isPrintMode:n}=se(),r=D(),o=Ft(r),i=R(()=>e.width?e.width:o.width.value),a=R(()=>e.width?e.width/ke.value:o.height.value);e.width&&st(()=>{r.value&&(r.value.style.width=`${i.value}px`,r.value.style.height=`${a.value}px`)});const l=R(()=>i.value/a.value),c=R(()=>e.scale&&!n.value?e.scale:l.value<ke.value?i.value/xe.value:a.value*ke.value/xe.value),h=R(()=>({height:`${Zt.value}px`,width:`${xe.value}px`,transform:`translate(-50%, -50%) scale(${c.value})`,"--slidev-slide-scale":c.value})),d=R(()=>({"select-none":!ie.selectable,"slidev-nav-go-forward":s.value>0,"slidev-nav-go-backward":s.value<0}));return e.isMain&&Vt(R(()=>`
    :root {
      --slidev-slide-scale: ${c.value};
    }
  `)),jt(qt,c),(f,v)=>(p(),w("div",{id:"slide-container",ref_key:"root",ref:r,class:F(["slidev-slides-container",d.value])},[L("div",{id:"slide-content",class:"slidev-slide-content",style:ce(h.value)},[le(f.$slots,"default")],4),le(f.$slots,"controls")],2))}}),Fs=H(Ds,[["__file","/Users/chun/Develop/software-architecture-explained-with-spring/node_modules/@slidev/client/internals/SlideContainer.vue"]]),Vs={class:"select-list"},js={class:"title"},Bs={class:"items"},Gs=["onClick"],Ks=Y({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(t,{emit:e}){const r=Ve(t,"modelValue",e,{passive:!0});return(o,i)=>{const a=hs;return p(),w("div",Vs,[L("div",js,X(t.title),1),L("div",Bs,[(p(!0),w(z,null,we(t.items,l=>(p(),w("div",{key:l.value,class:F(["item",{active:u(r)===l.value}]),onClick:()=>{var c;r.value=l.value,(c=l.onClick)==null||c.call(l)}},[k(a,{class:F(["text-green-500",{"opacity-0":u(r)!==l.value}])},null,8,["class"]),Ee(" "+X(l.display||l.value),1)],10,Gs))),128))])])}}}),Us=H(Ks,[["__scopeId","data-v-3f89fa11"],["__file","/Users/chun/Develop/software-architecture-explained-with-spring/node_modules/@slidev/client/internals/SelectList.vue"]]),Ws={class:"text-sm"},zs=Y({__name:"Settings",setup(t){const e=[{display:"Fit",value:0},{display:"1:1",value:1}];return(s,n)=>(p(),w("div",Ws,[k(Us,{modelValue:u(Se),"onUpdate:modelValue":n[0]||(n[0]=r=>Bt(Se)?Se.value=r:null),title:"Scale",items:e},null,8,["modelValue"])]))}}),Hs=H(zs,[["__file","/Users/chun/Develop/software-architecture-explained-with-spring/node_modules/@slidev/client/internals/Settings.vue"]]),Ys={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ main"},Qs=Y({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(t,{emit:e}){const r=Ve(t,"modelValue",e,{passive:!0}),o=D();return Gt(o,()=>{r.value=!1}),(i,a)=>(p(),w("div",{ref_key:"el",ref:o,class:"flex relative"},[L("button",{class:F({disabled:t.disabled}),onClick:a[0]||(a[0]=l=>r.value=!u(r))},[le(i.$slots,"button",{class:F({disabled:t.disabled})})],2),(p(),C(Kt,null,[u(r)?(p(),w("div",Ys,[le(i.$slots,"menu")])):b("v-if",!0)],1024))],512))}}),Xs=H(Qs,[["__file","/Users/chun/Develop/software-architecture-explained-with-spring/node_modules/@slidev/client/internals/MenuButton.vue"]]),Js={},Zs={class:"w-1px opacity-10 bg-current m-1 lg:m-2"};function qs(t,e){return p(),w("div",Zs)}const pe=H(Js,[["render",qs],["__file","/Users/chun/Develop/software-architecture-explained-with-spring/node_modules/@slidev/client/internals/VerticalDivider.vue"]]),en={class:"sr-only"},tn=Y({__name:"IconButton",props:{title:{type:String,required:!0},icon:{type:String,required:!1},as:{type:String,required:!1}},setup(t){return(e,s)=>(p(),C(nt(e.as||"button"),{class:"slidev-icon-btn",title:e.title},{default:A(()=>[L("span",en,X(e.title),1),le(e.$slots,"default",{},()=>[L("div",{class:F(e.icon)},null,2)])]),_:3},8,["title"]))}}),W=H(tn,[["__file","/Users/chun/Develop/software-architecture-explained-with-spring/node_modules/@slidev/client/internals/IconButton.vue"]]),sn={render(){return[]}},nn={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},rn={class:"my-auto"},on={class:"opacity-50"},an=Y({__name:"NavControls",props:{persist:{default:!1}},setup(t){const e=t,{currentRoute:s,currentSlideNo:n,hasNext:r,hasPrev:o,isEmbedded:i,isPresenter:a,isPresenterAvailable:l,next:c,prev:h,total:d}=se(),{brush:f,drawingEnabled:v}=je(),x=Ne.smaller("md"),{isFullscreen:m,toggle:M}=ct,S=R(()=>s.value.query.password),I=R(()=>S.value?`?password=${S.value}`:""),y=R(()=>`${We(n.value,!0)}${I.value}`),T=R(()=>`${We(n.value,!1)}${I.value}`),_=D();function O(){_.value&&ae.value&&_.value.contains(ae.value)&&ae.value.blur()}const E=R(()=>e.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-main"),$=Ie(),j=Ie();return it(()=>import("./DrawingControls-PlgNNkWN.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10])).then(oe=>j.value=oe.default),(oe,V)=>{const Z=ds,Ke=fs,B=ps,ne=vs,ue=ks,bt=_s,St=gs,Mt=dt,$t=ms,Ct=ys,Et=xs,Ue=Ut("RouterLink"),It=bs,At=Ss,Rt=Ms,Nt=$s,Lt=ws;return p(),w("nav",{ref_key:"root",ref:_,class:"flex flex-col"},[L("div",{class:F(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",E.value]),onMouseleave:O},[u(i)?b("v-if",!0):(p(),C(W,{key:0,title:u(m)?"Close fullscreen":"Enter fullscreen",onClick:u(M)},{default:A(()=>[u(m)?(p(),C(Z,{key:0})):(p(),C(Ke,{key:1}))]),_:1},8,["title","onClick"])),k(W,{class:F({disabled:!u(o)}),title:"Go to previous slide",onClick:u(h)},{default:A(()=>[k(B)]),_:1},8,["class","onClick"]),k(W,{class:F({disabled:!u(r)}),title:"Go to next slide",onClick:u(c)},{default:A(()=>[k(ne)]),_:1},8,["class","onClick"]),u(i)?b("v-if",!0):(p(),C(W,{key:1,title:"Show slide overview",onClick:V[0]||(V[0]=he=>u(Re)())},{default:A(()=>[k(ue)]),_:1})),u(es)?b("v-if",!0):(p(),C(W,{key:2,title:u(ze)?"Switch to light mode theme":"Switch to dark mode theme",onClick:V[1]||(V[1]=he=>u(Ae)())},{default:A(()=>[u(ze)?(p(),C(bt,{key:0})):(p(),C(St,{key:1}))]),_:1},8,["title"])),k(pe),u(i)?b("v-if",!0):(p(),w(z,{key:3},[!u(a)&&!u(x)&&$.value?(p(),w(z,{key:0},[k(u($)),k(pe)],64)):b("v-if",!0),u(a)?(p(),C(W,{key:1,title:u(fe)?"Hide presenter cursor":"Show presenter cursor",onClick:V[2]||(V[2]=he=>fe.value=!u(fe))},{default:A(()=>[u(fe)?(p(),C(Mt,{key:0})):(p(),C($t,{key:1}))]),_:1},8,["title"])):b("v-if",!0)],64)),(!u(ie).drawings.presenterOnly||u(a))&&!u(i)?(p(),w(z,{key:4},[k(W,{class:"relative",title:u(v)?"Hide drawing toolbar":"Show drawing toolbar",onClick:V[3]||(V[3]=he=>v.value=!u(v))},{default:A(()=>[k(Ct),u(v)?(p(),w("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:ce({background:u(f).color})},null,4)):b("v-if",!0)]),_:1},8,["title"]),k(pe)],64)):b("v-if",!0),u(i)?b("v-if",!0):(p(),w(z,{key:5},[u(a)?(p(),C(Ue,{key:0,to:T.value,class:"slidev-icon-btn",title:"Play Mode"},{default:A(()=>[k(Et)]),_:1},8,["to"])):b("v-if",!0),u(l)?(p(),C(Ue,{key:1,to:y.value,class:"slidev-icon-btn",title:"Presenter Mode"},{default:A(()=>[k(It)]),_:1},8,["to"])):b("v-if",!0),b("v-if",!0),u(a)?(p(),C(W,{key:3,title:"Toggle Presenter Layout",class:"aspect-ratio-initial",onClick:u(ls)},{default:A(()=>[k(At),Ee(" "+X(u(as)),1)]),_:1},8,["onClick"])):b("v-if",!0)],64)),(p(),w(z,{key:6},[u(ie).download?(p(),C(W,{key:0,title:"Download as PDF",onClick:u(lt)},{default:A(()=>[k(Rt)]),_:1},8,["onClick"])):b("v-if",!0)],64)),!u(a)&&u(ie).info&&!u(i)?(p(),C(W,{key:7,title:"Show info",onClick:V[5]||(V[5]=he=>Qe.value=!u(Qe))},{default:A(()=>[k(Nt)]),_:1})):b("v-if",!0),!u(a)&&!u(i)?(p(),C(Xs,{key:8},{button:A(()=>[k(W,{title:"Adjust settings"},{default:A(()=>[k(Lt)]),_:1})]),menu:A(()=>[k(Hs)]),_:1})):b("v-if",!0),u(i)?b("v-if",!0):(p(),C(pe,{key:9})),L("div",nn,[L("div",rn,[Ee(X(u(n))+" ",1),L("span",on,"/ "+X(u(d)),1)])]),k(u(sn))],34)],512)}}}),xr=H(an,[["__file","/Users/chun/Develop/software-architecture-explained-with-spring/node_modules/@slidev/client/internals/NavControls.vue"]]),ln=["onClick"],cn={class:"text-green font-bold"},un={class:"opacity-50"},hn={key:1,class:"opacity-50"},dn={key:0,class:"fixed top-4 right-4 text-gray-400 flex flex-col items-center gap-2"},$e=4*16*2,Xe=2*16,fn=Y({__name:"QuickOverview",props:{modelValue:{type:Boolean,required:!0}},emits:["update:modelValue"],setup(t,{emit:e}){const r=Ve(t,"modelValue",e),{currentSlideNo:o,go:i,slides:a}=se();function l(){r.value=!1}function c(M){i(M),l()}function h(M){return M===P.value}const d=Ne.smaller("xs"),f=Ne.smaller("sm"),v=R(()=>d.value?Me.width.value-$e:f.value?(Me.width.value-$e-Xe)/2:300),x=R(()=>Math.floor((Me.width.value-$e)/(v.value+Xe))),m=D("");return Wt("keypress",M=>{if(!G.value){m.value="";return}if(M.key==="Enter"){M.preventDefault(),m.value?(c(+m.value),m.value=""):c(P.value);return}const S=Number.parseInt(M.key.replace(/[^0-9]/g,""));if(Number.isNaN(S)){m.value="";return}if(!m.value&&S===0)return;if(m.value+=String(S),+m.value>=a.value.length){m.value="";return}const I=a.value.findIndex(y=>`/${y.no}`===m.value);I!==-1&&(P.value=I+1),+m.value*10>a.value.length&&(c(+m.value),m.value="")}),st(()=>{P.value=o.value,Be.value=x.value}),(M,S)=>{const I=Cs;return p(),w(z,null,[k(zt,{"enter-active-class":"duration-150 ease-out","enter-from-class":"opacity-0 scale-102 !backdrop-blur-0px","leave-active-class":"duration-200 ease-in","leave-to-class":"opacity-0 scale-102 !backdrop-blur-0px",persisted:""},{default:A(()=>[rt(L("div",{class:"bg-main !bg-opacity-75 p-16 py-20 overflow-y-auto backdrop-blur-5px fixed left-0 right-0 top-0 h-[calc(var(--vh,1vh)*100)]",onClick:S[0]||(S[0]=y=>l())},[L("div",{class:"grid gap-y-4 gap-x-8 w-full",style:ce(`grid-template-columns: repeat(auto-fit,minmax(${v.value}px,1fr))`)},[(p(!0),w(z,null,we(u(a),(y,T)=>(p(),w("div",{key:y.no,class:"relative"},[L("div",{class:F(["inline-block border rounded overflow-hidden bg-main hover:border-primary transition",h(T+1)||u(P)===T+1?"border-primary":"border-main"]),onClick:_=>c(y.no)},[(p(),C(Fs,{key:y.no,width:v.value,class:"pointer-events-none"},{default:A(()=>[y!=null&&y.component?(p(),C(ut,{key:0,is:y.component,"clicks-context":u(ts)(y,u(ss)),class:F(u(ht)(y)),route:y,"render-context":"overview"},null,8,["is","clicks-context","class","route"])):b("v-if",!0),k(ns,{page:y.no},null,8,["page"])]),_:2},1032,["width"]))],10,ln),L("div",{class:"absolute top-0",style:ce(`left: ${v.value+5}px`)},[m.value&&String(T+1).startsWith(m.value)?(p(),w(z,{key:0},[L("span",cn,X(m.value),1),L("span",un,X(String(T+1).slice(m.value.length)),1)],64)):(p(),w("span",hn,X(T+1),1))],4)]))),128))],4)],512),[[ot,u(r)]])]),_:1}),u(r)?(p(),w("div",dn,[k(W,{title:"Close",class:"text-2xl",onClick:l},{default:A(()=>[k(I)]),_:1}),b("v-if",!0)])):b("v-if",!0)],64)}}}),br=H(fn,[["__file","/Users/chun/Develop/software-architecture-explained-with-spring/node_modules/@slidev/client/internals/QuickOverview.vue"]]);function J(t){return Array.isArray?Array.isArray(t):_t(t)==="[object Array]"}const pn=1/0;function vn(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-pn?"-0":e}function _n(t){return t==null?"":vn(t)}function Q(t){return typeof t=="string"}function pt(t){return typeof t=="number"}function gn(t){return t===!0||t===!1||mn(t)&&_t(t)=="[object Boolean]"}function vt(t){return typeof t=="object"}function mn(t){return vt(t)&&t!==null}function U(t){return t!=null}function Ce(t){return!t.trim().length}function _t(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const yn="Incorrect 'index' type",wn=t=>`Invalid value for key ${t}`,kn=t=>`Pattern length exceeds max of ${t}.`,xn=t=>`Missing ${t} property in key`,bn=t=>`Property 'weight' in key '${t}' must be a positive integer`,Je=Object.prototype.hasOwnProperty;class Sn{constructor(e){this._keys=[],this._keyMap={};let s=0;e.forEach(n=>{let r=gt(n);this._keys.push(r),this._keyMap[r.id]=r,s+=r.weight}),this._keys.forEach(n=>{n.weight/=s})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function gt(t){let e=null,s=null,n=null,r=1,o=null;if(Q(t)||J(t))n=t,e=Ze(t),s=Le(t);else{if(!Je.call(t,"name"))throw new Error(xn("name"));const i=t.name;if(n=i,Je.call(t,"weight")&&(r=t.weight,r<=0))throw new Error(bn(i));e=Ze(i),s=Le(i),o=t.getFn}return{path:e,id:s,weight:r,src:n,getFn:o}}function Ze(t){return J(t)?t:t.split(".")}function Le(t){return J(t)?t.join("."):t}function Mn(t,e){let s=[],n=!1;const r=(o,i,a)=>{if(U(o))if(!i[a])s.push(o);else{let l=i[a];const c=o[l];if(!U(c))return;if(a===i.length-1&&(Q(c)||pt(c)||gn(c)))s.push(_n(c));else if(J(c)){n=!0;for(let h=0,d=c.length;h<d;h+=1)r(c[h],i,a+1)}else i.length&&r(c,i,a+1)}};return r(t,Q(e)?e.split("."):e,0),n?s:s[0]}const $n={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},Cn={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},En={location:0,threshold:.6,distance:100},In={useExtendedSearch:!1,getFn:Mn,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var g={...Cn,...$n,...En,...In};const An=/[^ ]+/g;function Rn(t=1,e=3){const s=new Map,n=Math.pow(10,e);return{get(r){const o=r.match(An).length;if(s.has(o))return s.get(o);const i=1/Math.pow(o,.5*t),a=parseFloat(Math.round(i*n)/n);return s.set(o,a),a},clear(){s.clear()}}}class Ge{constructor({getFn:e=g.getFn,fieldNormWeight:s=g.fieldNormWeight}={}){this.norm=Rn(s,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((s,n)=>{this._keysMap[s.id]=n})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,Q(this.docs[0])?this.docs.forEach((e,s)=>{this._addString(e,s)}):this.docs.forEach((e,s)=>{this._addObject(e,s)}),this.norm.clear())}add(e){const s=this.size();Q(e)?this._addString(e,s):this._addObject(e,s)}removeAt(e){this.records.splice(e,1);for(let s=e,n=this.size();s<n;s+=1)this.records[s].i-=1}getValueForItemAtKeyId(e,s){return e[this._keysMap[s]]}size(){return this.records.length}_addString(e,s){if(!U(e)||Ce(e))return;let n={v:e,i:s,n:this.norm.get(e)};this.records.push(n)}_addObject(e,s){let n={i:s,$:{}};this.keys.forEach((r,o)=>{let i=r.getFn?r.getFn(e):this.getFn(e,r.path);if(U(i)){if(J(i)){let a=[];const l=[{nestedArrIndex:-1,value:i}];for(;l.length;){const{nestedArrIndex:c,value:h}=l.pop();if(U(h))if(Q(h)&&!Ce(h)){let d={v:h,i:c,n:this.norm.get(h)};a.push(d)}else J(h)&&h.forEach((d,f)=>{l.push({nestedArrIndex:f,value:d})})}n.$[o]=a}else if(Q(i)&&!Ce(i)){let a={v:i,n:this.norm.get(i)};n.$[o]=a}}}),this.records.push(n)}toJSON(){return{keys:this.keys,records:this.records}}}function mt(t,e,{getFn:s=g.getFn,fieldNormWeight:n=g.fieldNormWeight}={}){const r=new Ge({getFn:s,fieldNormWeight:n});return r.setKeys(t.map(gt)),r.setSources(e),r.create(),r}function Nn(t,{getFn:e=g.getFn,fieldNormWeight:s=g.fieldNormWeight}={}){const{keys:n,records:r}=t,o=new Ge({getFn:e,fieldNormWeight:s});return o.setKeys(n),o.setIndexRecords(r),o}function ve(t,{errors:e=0,currentLocation:s=0,expectedLocation:n=0,distance:r=g.distance,ignoreLocation:o=g.ignoreLocation}={}){const i=e/t.length;if(o)return i;const a=Math.abs(n-s);return r?i+a/r:a?1:i}function Ln(t=[],e=g.minMatchCharLength){let s=[],n=-1,r=-1,o=0;for(let i=t.length;o<i;o+=1){let a=t[o];a&&n===-1?n=o:!a&&n!==-1&&(r=o-1,r-n+1>=e&&s.push([n,r]),n=-1)}return t[o-1]&&o-n>=e&&s.push([n,o-1]),s}const te=32;function Tn(t,e,s,{location:n=g.location,distance:r=g.distance,threshold:o=g.threshold,findAllMatches:i=g.findAllMatches,minMatchCharLength:a=g.minMatchCharLength,includeMatches:l=g.includeMatches,ignoreLocation:c=g.ignoreLocation}={}){if(e.length>te)throw new Error(kn(te));const h=e.length,d=t.length,f=Math.max(0,Math.min(n,d));let v=o,x=f;const m=a>1||l,M=m?Array(d):[];let S;for(;(S=t.indexOf(e,x))>-1;){let E=ve(e,{currentLocation:S,expectedLocation:f,distance:r,ignoreLocation:c});if(v=Math.min(E,v),x=S+h,m){let $=0;for(;$<h;)M[S+$]=1,$+=1}}x=-1;let I=[],y=1,T=h+d;const _=1<<h-1;for(let E=0;E<h;E+=1){let $=0,j=T;for(;$<j;)ve(e,{errors:E,currentLocation:f+j,expectedLocation:f,distance:r,ignoreLocation:c})<=v?$=j:T=j,j=Math.floor((T-$)/2+$);T=j;let oe=Math.max(1,f-j+1),V=i?d:Math.min(f+j,d)+h,Z=Array(V+2);Z[V+1]=(1<<E)-1;for(let B=V;B>=oe;B-=1){let ne=B-1,ue=s[t.charAt(ne)];if(m&&(M[ne]=+!!ue),Z[B]=(Z[B+1]<<1|1)&ue,E&&(Z[B]|=(I[B+1]|I[B])<<1|1|I[B+1]),Z[B]&_&&(y=ve(e,{errors:E,currentLocation:ne,expectedLocation:f,distance:r,ignoreLocation:c}),y<=v)){if(v=y,x=ne,x<=f)break;oe=Math.max(1,2*f-x)}}if(ve(e,{errors:E+1,currentLocation:f,expectedLocation:f,distance:r,ignoreLocation:c})>v)break;I=Z}const O={isMatch:x>=0,score:Math.max(.001,y)};if(m){const E=Ln(M,a);E.length?l&&(O.indices=E):O.isMatch=!1}return O}function On(t){let e={};for(let s=0,n=t.length;s<n;s+=1){const r=t.charAt(s);e[r]=(e[r]||0)|1<<n-s-1}return e}class yt{constructor(e,{location:s=g.location,threshold:n=g.threshold,distance:r=g.distance,includeMatches:o=g.includeMatches,findAllMatches:i=g.findAllMatches,minMatchCharLength:a=g.minMatchCharLength,isCaseSensitive:l=g.isCaseSensitive,ignoreLocation:c=g.ignoreLocation}={}){if(this.options={location:s,threshold:n,distance:r,includeMatches:o,findAllMatches:i,minMatchCharLength:a,isCaseSensitive:l,ignoreLocation:c},this.pattern=l?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const h=(f,v)=>{this.chunks.push({pattern:f,alphabet:On(f),startIndex:v})},d=this.pattern.length;if(d>te){let f=0;const v=d%te,x=d-v;for(;f<x;)h(this.pattern.substr(f,te),f),f+=te;if(v){const m=d-te;h(this.pattern.substr(m),m)}}else h(this.pattern,0)}searchIn(e){const{isCaseSensitive:s,includeMatches:n}=this.options;if(s||(e=e.toLowerCase()),this.pattern===e){let x={isMatch:!0,score:0};return n&&(x.indices=[[0,e.length-1]]),x}const{location:r,distance:o,threshold:i,findAllMatches:a,minMatchCharLength:l,ignoreLocation:c}=this.options;let h=[],d=0,f=!1;this.chunks.forEach(({pattern:x,alphabet:m,startIndex:M})=>{const{isMatch:S,score:I,indices:y}=Tn(e,x,m,{location:r+M,distance:o,threshold:i,findAllMatches:a,minMatchCharLength:l,includeMatches:n,ignoreLocation:c});S&&(f=!0),d+=I,S&&y&&(h=[...h,...y])});let v={isMatch:f,score:f?d/this.chunks.length:1};return f&&n&&(v.indices=h),v}}class ee{constructor(e){this.pattern=e}static isMultiMatch(e){return qe(e,this.multiRegex)}static isSingleMatch(e){return qe(e,this.singleRegex)}search(){}}function qe(t,e){const s=t.match(e);return s?s[1]:null}class Pn extends ee{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const s=e===this.pattern;return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class Dn extends ee{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const n=e.indexOf(this.pattern)===-1;return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class Fn extends ee{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const s=e.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class Vn extends ee{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const s=!e.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,e.length-1]}}}class jn extends ee{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const s=e.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class Bn extends ee{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const s=!e.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,e.length-1]}}}class wt extends ee{constructor(e,{location:s=g.location,threshold:n=g.threshold,distance:r=g.distance,includeMatches:o=g.includeMatches,findAllMatches:i=g.findAllMatches,minMatchCharLength:a=g.minMatchCharLength,isCaseSensitive:l=g.isCaseSensitive,ignoreLocation:c=g.ignoreLocation}={}){super(e),this._bitapSearch=new yt(e,{location:s,threshold:n,distance:r,includeMatches:o,findAllMatches:i,minMatchCharLength:a,isCaseSensitive:l,ignoreLocation:c})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class kt extends ee{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let s=0,n;const r=[],o=this.pattern.length;for(;(n=e.indexOf(this.pattern,s))>-1;)s=n+o,r.push([n,s-1]);const i=!!r.length;return{isMatch:i,score:i?0:1,indices:r}}}const Te=[Pn,kt,Fn,Vn,Bn,jn,Dn,wt],et=Te.length,Gn=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,Kn="|";function Un(t,e={}){return t.split(Kn).map(s=>{let n=s.trim().split(Gn).filter(o=>o&&!!o.trim()),r=[];for(let o=0,i=n.length;o<i;o+=1){const a=n[o];let l=!1,c=-1;for(;!l&&++c<et;){const h=Te[c];let d=h.isMultiMatch(a);d&&(r.push(new h(d,e)),l=!0)}if(!l)for(c=-1;++c<et;){const h=Te[c];let d=h.isSingleMatch(a);if(d){r.push(new h(d,e));break}}}return r})}const Wn=new Set([wt.type,kt.type]);class zn{constructor(e,{isCaseSensitive:s=g.isCaseSensitive,includeMatches:n=g.includeMatches,minMatchCharLength:r=g.minMatchCharLength,ignoreLocation:o=g.ignoreLocation,findAllMatches:i=g.findAllMatches,location:a=g.location,threshold:l=g.threshold,distance:c=g.distance}={}){this.query=null,this.options={isCaseSensitive:s,includeMatches:n,minMatchCharLength:r,findAllMatches:i,ignoreLocation:o,location:a,threshold:l,distance:c},this.pattern=s?e:e.toLowerCase(),this.query=Un(this.pattern,this.options)}static condition(e,s){return s.useExtendedSearch}searchIn(e){const s=this.query;if(!s)return{isMatch:!1,score:1};const{includeMatches:n,isCaseSensitive:r}=this.options;e=r?e:e.toLowerCase();let o=0,i=[],a=0;for(let l=0,c=s.length;l<c;l+=1){const h=s[l];i.length=0,o=0;for(let d=0,f=h.length;d<f;d+=1){const v=h[d],{isMatch:x,indices:m,score:M}=v.search(e);if(x){if(o+=1,a+=M,n){const S=v.constructor.type;Wn.has(S)?i=[...i,...m]:i.push(m)}}else{a=0,o=0,i.length=0;break}}if(o){let d={isMatch:!0,score:a/o};return n&&(d.indices=i),d}}return{isMatch:!1,score:1}}}const Oe=[];function Hn(...t){Oe.push(...t)}function Pe(t,e){for(let s=0,n=Oe.length;s<n;s+=1){let r=Oe[s];if(r.condition(t,e))return new r(t,e)}return new yt(t,e)}const ye={AND:"$and",OR:"$or"},De={PATH:"$path",PATTERN:"$val"},Fe=t=>!!(t[ye.AND]||t[ye.OR]),Yn=t=>!!t[De.PATH],Qn=t=>!J(t)&&vt(t)&&!Fe(t),tt=t=>({[ye.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function xt(t,e,{auto:s=!0}={}){const n=r=>{let o=Object.keys(r);const i=Yn(r);if(!i&&o.length>1&&!Fe(r))return n(tt(r));if(Qn(r)){const l=i?r[De.PATH]:o[0],c=i?r[De.PATTERN]:r[l];if(!Q(c))throw new Error(wn(l));const h={keyId:Le(l),pattern:c};return s&&(h.searcher=Pe(c,e)),h}let a={children:[],operator:o[0]};return o.forEach(l=>{const c=r[l];J(c)&&c.forEach(h=>{a.children.push(n(h))})}),a};return Fe(t)||(t=tt(t)),n(t)}function Xn(t,{ignoreFieldNorm:e=g.ignoreFieldNorm}){t.forEach(s=>{let n=1;s.matches.forEach(({key:r,norm:o,score:i})=>{const a=r?r.weight:null;n*=Math.pow(i===0&&a?Number.EPSILON:i,(a||1)*(e?1:o))}),s.score=n})}function Jn(t,e){const s=t.matches;e.matches=[],U(s)&&s.forEach(n=>{if(!U(n.indices)||!n.indices.length)return;const{indices:r,value:o}=n;let i={indices:r,value:o};n.key&&(i.key=n.key.src),n.idx>-1&&(i.refIndex=n.idx),e.matches.push(i)})}function Zn(t,e){e.score=t.score}function qn(t,e,{includeMatches:s=g.includeMatches,includeScore:n=g.includeScore}={}){const r=[];return s&&r.push(Jn),n&&r.push(Zn),t.map(o=>{const{idx:i}=o,a={item:e[i],refIndex:i};return r.length&&r.forEach(l=>{l(o,a)}),a})}class re{constructor(e,s={},n){this.options={...g,...s},this.options.useExtendedSearch,this._keyStore=new Sn(this.options.keys),this.setCollection(e,n)}setCollection(e,s){if(this._docs=e,s&&!(s instanceof Ge))throw new Error(yn);this._myIndex=s||mt(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){U(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const s=[];for(let n=0,r=this._docs.length;n<r;n+=1){const o=this._docs[n];e(o,n)&&(this.removeAt(n),n-=1,r-=1,s.push(o))}return s}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:s=-1}={}){const{includeMatches:n,includeScore:r,shouldSort:o,sortFn:i,ignoreFieldNorm:a}=this.options;let l=Q(e)?Q(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return Xn(l,{ignoreFieldNorm:a}),o&&l.sort(i),pt(s)&&s>-1&&(l=l.slice(0,s)),qn(l,this._docs,{includeMatches:n,includeScore:r})}_searchStringList(e){const s=Pe(e,this.options),{records:n}=this._myIndex,r=[];return n.forEach(({v:o,i,n:a})=>{if(!U(o))return;const{isMatch:l,score:c,indices:h}=s.searchIn(o);l&&r.push({item:o,idx:i,matches:[{score:c,value:o,norm:a,indices:h}]})}),r}_searchLogical(e){const s=xt(e,this.options),n=(a,l,c)=>{if(!a.children){const{keyId:d,searcher:f}=a,v=this._findMatches({key:this._keyStore.get(d),value:this._myIndex.getValueForItemAtKeyId(l,d),searcher:f});return v&&v.length?[{idx:c,item:l,matches:v}]:[]}const h=[];for(let d=0,f=a.children.length;d<f;d+=1){const v=a.children[d],x=n(v,l,c);if(x.length)h.push(...x);else if(a.operator===ye.AND)return[]}return h},r=this._myIndex.records,o={},i=[];return r.forEach(({$:a,i:l})=>{if(U(a)){let c=n(s,a,l);c.length&&(o[l]||(o[l]={idx:l,item:a,matches:[]},i.push(o[l])),c.forEach(({matches:h})=>{o[l].matches.push(...h)}))}}),i}_searchObjectList(e){const s=Pe(e,this.options),{keys:n,records:r}=this._myIndex,o=[];return r.forEach(({$:i,i:a})=>{if(!U(i))return;let l=[];n.forEach((c,h)=>{l.push(...this._findMatches({key:c,value:i[h],searcher:s}))}),l.length&&o.push({idx:a,item:i,matches:l})}),o}_findMatches({key:e,value:s,searcher:n}){if(!U(s))return[];let r=[];if(J(s))s.forEach(({v:o,i,n:a})=>{if(!U(o))return;const{isMatch:l,score:c,indices:h}=n.searchIn(o);l&&r.push({score:c,key:e,value:o,idx:i,norm:a,indices:h})});else{const{v:o,n:i}=s,{isMatch:a,score:l,indices:c}=n.searchIn(o);a&&r.push({score:l,key:e,value:o,norm:i,indices:c})}return r}}re.version="7.0.0";re.createIndex=mt;re.parseIndex=Nn;re.config=g;re.parseQuery=xt;Hn(zn);const er={key:0},tr={key:1},sr=Y({__name:"title-renderer",props:{no:{type:[Number,String],required:!0}},setup(t){return(e,s)=>(p(),w("div",null,[+e.no==1?(p(),w("p",er,"Software Architecture")):+e.no==2?(p(),w("p",tr,"Introduction")):b("v-if",!0)]))}}),nr=H(sr,[["__file","/@slidev/title-renderer.md"]]),rr={class:"bg-main transform",shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:main"},or=["value","disabled"],ir=["border","onClick"],ar={"w-4":"","text-right":"",op50:"","text-sm":""},lr=Y({__name:"Goto",setup(t){const e=D(),s=D(),n=D(),r=D(),o=D(""),i=D(0),{go:a,slides:l}=se();function c(_){return _!=null}const h=R(()=>new re(l.value.map(_=>{var O;return(O=_.meta)==null?void 0:O.slide}).filter(c),{keys:["no","title"],threshold:.3,shouldSort:!0,minMatchCharLength:1})),d=R(()=>o.value.startsWith("/")?o.value.substring(1):o.value),f=R(()=>h.value.search(d.value).map(_=>_.item)),v=R(()=>!!f.value.length);function x(){if(v.value){const _=f.value.at(i.value||0);_&&a(_.no)}m()}function m(){o.value="",q.value=!1}function M(_){_.preventDefault(),i.value++,i.value>=f.value.length&&(i.value=0),I()}function S(_){_.preventDefault(),i.value--,i.value<=-2&&(i.value=f.value.length-1),I()}function I(){var O;const _=(O=r.value)==null?void 0:O[i.value];_&&n.value&&(_.offsetTop+_.offsetHeight>n.value.offsetHeight+n.value.scrollTop?n.value.scrollTo({behavior:"smooth",top:_.offsetTop+_.offsetHeight-n.value.offsetHeight+1}):_.offsetTop<n.value.scrollTop&&n.value.scrollTo({behavior:"smooth",top:_.offsetTop}))}function y(_){i.value=0,o.value=_.target.value}function T(_){a(_),m()}return me(q,async _=>{var O;_?(o.value="",i.value=0,setTimeout(()=>{var E;return(E=s.value)==null?void 0:E.focus()},0)):(O=s.value)==null||O.blur()}),me(ae,()=>{var _;(_=e.value)!=null&&_.contains(ae.value)||m()}),(_,O)=>(p(),w("div",{id:"slidev-goto-dialog",ref_key:"container",ref:e,class:F(["fixed right-5 transition-all",u(q)?"top-5":"-top-20"]),"w-90":"","max-w-90":"","min-w-90":""},[L("div",rr,[L("input",{id:"slidev-goto-input",ref_key:"input",ref:s,value:o.value,type:"text",disabled:!u(q),class:F(["outline-none bg-transparent",{"text-red-400":!v.value&&o.value}]),placeholder:"Goto...",onKeydown:[de(x,["enter"]),de(m,["escape"]),de(M,["down"]),de(S,["up"])],onInput:y},null,42,or)]),f.value.length>0?(p(),w("ul",{key:0,ref_key:"list",ref:n,class:"autocomplete-list",shadow:"~",border:"~ transparent rounded dark:main"},[(p(!0),w(z,null,we(f.value,(E,$)=>(p(),w("li",{ref_for:!0,ref_key:"items",ref:r,key:E.id,role:"button",tabindex:"0",p:"x-4 y-2","cursor-pointer":"",hover:"op100",flex:"~ gap-2","w-90":"","items-center":"",border:$===0?"":"t main",class:F(i.value===$?"bg-active op100":"op80"),onClick:Ht(j=>T(E.no),["stop","prevent"])},[L("div",ar,X(E.no),1),k(u(nr),{no:E.no},null,8,["no"])],10,ir))),128))],512)):b("v-if",!0)],2))}}),Sr=H(lr,[["__scopeId","data-v-f5ee02a7"],["__file","/Users/chun/Develop/software-architecture-explained-with-spring/node_modules/@slidev/client/internals/Goto.vue"]]);function cr(){const t=Yt(),e=D(!1);let s,n;const r=typeof document<"u"&&"startViewTransition"in document;return t.beforeResolve((o,i)=>{var m,M,S,I;const a=(m=He(i.params.no))==null?void 0:m.meta,l=(M=He(o.params.no))==null?void 0:M.meta,c=(S=a==null?void 0:a.slide)==null?void 0:S.no,h=(I=l==null?void 0:l.slide)==null?void 0:I.no;if((c!=null&&h!=null&&((c<h?a==null?void 0:a.transition:l==null?void 0:l.transition)??ie.transition))!=="view-transition"){e.value=!1;return}if(!r){e.value=!1,console.warn("View transition is not supported in your browser, fallback to normal transition.");return}e.value=!0;const f=new Promise((y,T)=>{s=y,n=T});let v;const x=new Promise(y=>v=y);return setTimeout(()=>{document.startViewTransition(()=>(v(),f))},50),x}),r&&t.afterEach(()=>{s==null||s(),n==null||n()}),e}const ur={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},hr=Y({__name:"PresenterMouse",setup(t){return(e,s)=>{const n=dt;return u(be).cursor?(p(),w("div",ur,[k(n,{class:"absolute",style:ce({left:`${u(be).cursor.x}%`,top:`${u(be).cursor.y}%`})},null,8,["style"])])):b("v-if",!0)}}}),dr=H(hr,[["__file","/Users/chun/Develop/software-architecture-explained-with-spring/node_modules/@slidev/client/internals/PresenterMouse.vue"]]),fr=Y({__name:"SlidesShow",props:{renderContext:{type:String,required:!0}},setup(t){const{currentSlideRoute:e,currentTransition:s,getPrimaryClicks:n,isPresenter:r,nextRoute:o,slides:i}=se();me(e,()=>{var d,f;(d=e.value)!=null&&d.meta&&e.value.meta.preload!==!1&&(e.value.meta.__preloaded=!0),(f=o.value)!=null&&f.meta&&o.value.meta.preload!==!1&&(o.value.meta.__preloaded=!0)},{immediate:!0});const a=cr(),l=Ie();it(()=>import("./DrawingLayer-Cqz7glFB.js"),__vite__mapDeps([11,2,12,6,3,4,7,5,8,9])).then(d=>l.value=d.default);const c=R(()=>i.value.filter(d=>{var f;return((f=d.meta)==null?void 0:f.__preloaded)||d===e.value}));function h(){Ye.value=!0,Es()}return(d,f)=>(p(),w(z,null,[b(" Global Bottom "),k(u(cs)),b(" Slides "),(p(),C(nt(u(a)?"div":Xt),Qt(u(Ye)?{}:u(s),{id:"slideshow",tag:"div",onAfterLeave:h}),{default:A(()=>[(p(!0),w(z,null,we(c.value,v=>rt((p(),w("div",{key:v.no},[k(ut,{is:v.component,"clicks-context":u(n)(v),class:F([u(ht)(v),"overflow-hidden"]),route:v,"render-context":d.renderContext},null,8,["is","clicks-context","class","route","render-context"])])),[[ot,v===u(e)]])),128))]),_:1},16)),b(" Global Top "),k(u(us)),l.value?(p(),C(u(l),{key:0})):b("v-if",!0),u(r)?b("v-if",!0):(p(),C(dr,{key:1}))],64))}}),Mr=H(fr,[["__scopeId","data-v-afb4231e"],["__file","/Users/chun/Develop/software-architecture-explained-with-spring/node_modules/@slidev/client/internals/SlidesShow.vue"]]);export{Sr as G,W as I,xr as N,br as Q,Fs as S,pe as V,Mr as a,kr as r,wr as u};
