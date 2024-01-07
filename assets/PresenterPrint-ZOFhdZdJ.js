import{d,u as _,a as p,c as m,b as u,r as h,e as a,f as t,t as o,g as r,F as f,h as g,n as v,i as x,o as n,j as y,k as b,l as N,m as k,_ as w}from"./index-lpXfotNe.js";import{N as P}from"./NoteDisplay-vv7LEOL9.js";const V={class:"m-4"},D={class:"mb-10"},L={class:"text-4xl font-bold mt-2"},S={class:"opacity-50"},T={class:"text-lg"},B={class:"font-bold flex gap-2"},C={class:"opacity-50"},H=t("div",{class:"flex-auto"},null,-1),j={key:0,class:"border-gray-400/50 mb-8"},z=d({__name:"PresenterPrint",setup(F){_(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),p({title:`Notes - ${m.title}`});const i=u(()=>h.map(s=>{var l;return(l=s.meta)==null?void 0:l.slide}).filter(s=>s!==void 0&&s.noteHTML!==""));return(s,l)=>(n(),a("div",{id:"page-root",style:v(r(x))},[t("div",V,[t("div",D,[t("h1",L,o(r(m).title),1),t("div",S,o(new Date().toLocaleString()),1)]),(n(!0),a(f,null,g(i.value,(e,c)=>(n(),a("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",T,[t("div",B,[t("div",C,o(e==null?void 0:e.no)+"/"+o(r(y)),1),b(" "+o(e==null?void 0:e.title)+" ",1),H])]),N(P,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<i.value.length-1?(n(),a("hr",j)):k("v-if",!0)]))),128))])],4))}}),E=w(z,[["__file","C:/Users/iamsa/Downloads/slidev/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{E as default};
