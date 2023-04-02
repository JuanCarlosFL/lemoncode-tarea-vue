import{g as F,m as R,p as E,u as P,t as W,c as g,a as w,b as $,d as i,e as N,f as L,o as m,h as v,V as z,w as u,i as V,j as p,k as I,l as U,n as q,F as A,q as f,r as h,s as H,v as K,x as O,y as G,z as J,A as Q,B as T,C as X,D as Y,E as Z,G as ee,H as te,I as k,J as ae,K as se,L as ne,_ as re}from"./index.8fa96681.js";const oe=F()({name:"VDivider",props:{color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...R()},setup(e,s){let{attrs:a}=s;const{themeClasses:t}=E(e),{textColorClasses:n,textColorStyles:r}=P(W(e,"color")),_=g(()=>{const o={};return e.length&&(o[e.vertical?"maxHeight":"maxWidth"]=w(e.length)),e.thickness&&(o[e.vertical?"borderRightWidth":"borderTopWidth"]=w(e.thickness)),o});return $(()=>i("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},t.value,n.value],style:[_.value,r.value],"aria-orientation":!a.role||a.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${a.role||"separator"}`},null)),{}}}),le=N({__name:"MemberItem",props:{user:{type:Object,required:!0}},setup(e){const s=L(),a=t=>{s.push(`/detail/${t}`)};return(t,n)=>(m(),v(A,null,[i(z,{height:"250",width:"250",src:e.user.avatar_url},null,8,["src"]),i(I,{class:"text-center"},{default:u(()=>[V(p(e.user.login),1)]),_:1}),i(oe,{class:"mx-4"}),i(q,{class:"d-flex justify-center"},{default:u(()=>[i(U,{onClick:n[0]||(n[0]=r=>a(e.user.login)),color:"deep-purple lighten-2",text:""},{default:u(()=>[V(" Details ")]),_:1})]),_:1})],64))}});var M;const ie=typeof window<"u",S=()=>{};ie&&((M=window==null?void 0:window.navigator)==null?void 0:M.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function D(e){return typeof e=="function"?e():f(e)}function ce(e,s){function a(...t){return new Promise((n,r)=>{Promise.resolve(e(()=>s.apply(this,t),{fn:s,thisArg:this,args:t})).then(n).catch(r)})}return a}function ue(e,s={}){let a,t,n=S;const r=o=>{clearTimeout(o),n(),n=S};return o=>{const l=D(e),c=D(s.maxWait);return a&&r(a),l<=0||c!==void 0&&c<=0?(t&&(r(t),t=null),Promise.resolve(o())):new Promise((d,x)=>{n=s.rejectOnCancel?x:d,c&&!t&&(t=setTimeout(()=>{a&&r(a),t=null,d(o())},c)),a=setTimeout(()=>{t&&r(t),t=null,d(o())},l)})}}function de(e,s=200,a={}){return ce(ue(s,a),e)}async function me(){const e=h([]),s=async t=>{e.value=await fetch(`https://api.github.com/orgs/${t}/members`).then(n=>n.json())},a=g(()=>e.value.length);return{users:e,totalMembers:a,getMembers:s}}const ve=H("company",()=>({company:h("lemoncode")})),fe={key:0},he={key:0},_e={class:"d-flex flex-wrap"},ye={key:1,class:"text-center"},pe=N({__name:"MemberList",async setup(e){let s,a;const{users:t,totalMembers:n,getMembers:r}=([s,a]=K(()=>me()),s=await s,a(),s),_=ve(),{company:o}=O(_),l=h(o),c=h(!1),d=h(""),x=de(async()=>{await r(l.value),c.value=!0,o.value=l.value},1e3,{maxWait:4e3});G(C=>{d.value=C.message});const B=()=>{c.value=!1,t.value=[]},j=g(()=>l.value.charAt(0).toUpperCase()+l.value.substring(1));return J(l,async()=>{x()}),Q(async()=>{await r(l.value),c.value=!0}),(C,b)=>(m(),T(X,null,{default:u(()=>[i(te,{class:"d-flex justify-center"},{default:u(()=>[i(Y,{cols:"4"},{default:u(()=>[i(Z,{onKeyup:B,label:" Enter the company name",modelValue:l.value,"onUpdate:modelValue":b[0]||(b[0]=y=>l.value=y),type:"text",class:"rounded-0 shrink",outlined:""},{default:u(()=>[d.value?(m(),v("div",fe,"Error: "+p(d.value),1)):ee("",!0)]),_:1},8,["modelValue"])]),_:1})]),_:1}),f(n)>0?(m(),v("div",he,[k("h3",{class:ae({"text-center showCompanyName":c.value}),hidden:""}," Members for company: "+p(f(j))+" - Total members: "+p(f(n)),3),k("div",_e,[(m(!0),v(A,null,se(f(t),y=>(m(),T(ne,{class:"mx-auto my-12","max-width":"200",key:y.id},{default:u(()=>[i(le,{user:y},null,8,["user"])]),_:2},1024))),128))])])):(m(),v("h3",ye,"Enter a valid company"))]),_:1}))}});const ge=re(pe,[["__scopeId","data-v-ff136418"]]);export{ge as default};
