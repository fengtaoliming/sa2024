import{ax as n,as as r,t as m,Y as u,ay as v}from"../modules/vue-DA7ZT_zT.js";import{g as j,T as l,i as $,y as p,v as x,w as C,r as T,U as R,V as S}from"../index-CHhFO9vf.js";function g(){const t=n($),s=r(t,"nav"),i=n(p).value,e=r(i,"current"),a=n(x),c=n(C),o=n(l,{}),d=n(T,void 0),f=n(j,m(1));return{$slidev:t,$nav:s,$clicksContext:i,$clicks:e,$page:a,$route:d,$renderContext:c,$frontmatter:o,$scale:f}}function F(t){var a,c;u(l,t);const{$slidev:s,$page:i}=g(),e=s.nav.slides.find(o=>o.no===i.value);if((c=(a=e==null?void 0:e.meta)==null?void 0:a.slide)!=null&&c.frontmatter){for(const o of Object.keys(e.meta.slide.frontmatter))o in t||delete e.meta.slide.frontmatter[o];Object.assign(e.meta.slide.frontmatter,t)}}function y(t,s){return{...v(t,s===0?R:S),frontmatter:t}}export{y as f,F as p,g as u};
