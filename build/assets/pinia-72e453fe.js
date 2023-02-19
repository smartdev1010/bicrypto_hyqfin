import{ac as V,aa as q,ak as I,X as Y,a6 as Z,ab as $,u as G,ad as L,ao as B,H as A,ap as T,aq as tt,e as et,ar as st,a8 as nt}from"./_plugin-vue_export-helper-8676f0c8.js";var ot=!1;/*!
  * pinia v2.0.28
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let D;const R=t=>D=t,J=Symbol();function C(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var k;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(k||(k={}));function it(){const t=V(!0),n=t.run(()=>q({}));let s=[],e=[];const c=I({install(u){R(c),c._a=u,u.provide(J,c),u.config.globalProperties.$pinia=c,e.forEach(f=>s.push(f)),e=[]},use(u){return!this._a&&!ot?e.push(u):s.push(u),this},_p:s,_a:null,_e:t,_s:new Map,state:n});return c}const N=()=>{};function H(t,n,s,e=N){t.push(n);const c=()=>{const u=t.indexOf(n);u>-1&&(t.splice(u,1),e())};return!s&&T()&&tt(c),c}function j(t,...n){t.slice().forEach(s=>{s(...n)})}function O(t,n){t instanceof Map&&n instanceof Map&&n.forEach((s,e)=>t.set(e,s)),t instanceof Set&&n instanceof Set&&n.forEach(t.add,t);for(const s in n){if(!n.hasOwnProperty(s))continue;const e=n[s],c=t[s];C(c)&&C(e)&&t.hasOwnProperty(s)&&!L(e)&&!B(e)?t[s]=O(c,e):t[s]=e}return t}const ct=Symbol();function rt(t){return!C(t)||!t.hasOwnProperty(ct)}const{assign:d}=Object;function ut(t){return!!(L(t)&&t.effect)}function at(t,n,s,e){const{state:c,actions:u,getters:f}=n,a=s.state.value[t];let p;function h(){a||(s.state.value[t]=c?c():{});const b=st(s.state.value[t]);return d(b,u,Object.keys(f||{}).reduce((v,y)=>(v[y]=I(nt(()=>{R(s);const m=s._s.get(t);return f[y].call(m,m)})),v),{}))}return p=W(t,h,n,s,e,!0),p.$reset=function(){const v=c?c():{};this.$patch(y=>{d(y,v)})},p}function W(t,n,s={},e,c,u){let f;const a=d({actions:{}},s),p={deep:!0};let h,b,v=I([]),y=I([]),m;const _=e.state.value[t];!u&&!_&&(e.state.value[t]={}),q({});let x;function F(r){let o;h=b=!1,typeof r=="function"?(r(e.state.value[t]),o={type:k.patchFunction,storeId:t,events:m}):(O(e.state.value[t],r),o={type:k.patchObject,payload:r,storeId:t,events:m});const S=x=Symbol();et().then(()=>{x===S&&(h=!0)}),b=!0,j(v,o,e.state.value[t])}const X=N;function z(){f.stop(),v=[],y=[],e._s.delete(t)}function K(r,o){return function(){R(e);const S=Array.from(arguments),g=[],w=[];function Q(i){g.push(i)}function U(i){w.push(i)}j(y,{args:S,name:r,store:l,after:Q,onError:U});let E;try{E=o.apply(this&&this.$id===t?this:l,S)}catch(i){throw j(w,i),i}return E instanceof Promise?E.then(i=>(j(g,i),i)).catch(i=>(j(w,i),Promise.reject(i))):(j(g,E),E)}}const M={_p:e,$id:t,$onAction:H.bind(null,y),$patch:F,$reset:X,$subscribe(r,o={}){const S=H(v,r,o.detached,()=>g()),g=f.run(()=>$(()=>e.state.value[t],w=>{(o.flush==="sync"?b:h)&&r({storeId:t,type:k.direct,events:m},w)},d({},p,o)));return S},$dispose:z},l=G(M);e._s.set(t,l);const P=e._e.run(()=>(f=V(),f.run(()=>n())));for(const r in P){const o=P[r];if(L(o)&&!ut(o)||B(o))u||(_&&rt(o)&&(L(o)?o.value=_[r]:O(o,_[r])),e.state.value[t][r]=o);else if(typeof o=="function"){const S=K(r,o);P[r]=S,a.actions[r]=o}}return d(l,P),d(A(l),P),Object.defineProperty(l,"$state",{get:()=>e.state.value[t],set:r=>{F(o=>{d(o,r)})}}),e._p.forEach(r=>{d(l,f.run(()=>r({store:l,app:e._a,pinia:e,options:a})))}),_&&u&&s.hydrate&&s.hydrate(l.$state,_),h=!0,b=!0,l}function lt(t,n,s){let e,c;const u=typeof n=="function";typeof t=="string"?(e=t,c=u?s:n):(c=t,e=t.id);function f(a,p){const h=Y();return a=a||h&&Z(J,null),a&&R(a),a=D,a._s.has(e)||(u?W(e,n,c,a):at(e,c,a)),a._s.get(e)}return f.$id=e,f}export{it as c,lt as d};
