import{d as y,l as s,G as C,H as h,p as k,aa as w,r as i,o as r,b as B,w as l,g as c,c as g,f as T,i as N,m as E,q as H,ab as L}from"./index-3a3de0b7.js";const M=["innerHTML"],U=["id"],j={class:"dialog-footer"},x=y({__name:"aceDrawer",props:{modelValue:{type:Boolean},title:{},direction:{default:"ltr"},content:{default:""},id:{default:"editJson"},codeType:{}},emits:["beforeClose","confirm","update:modelValue"],setup(u,{emit:n}){const t=u,o=s({}),a=s(!1),m=C(()=>t.modelValue,e=>{a.value=e,e&&f()}),f=()=>{H(()=>{o.value=L(t.content,t.id,t.codeType)})},p=()=>{const e=o.value.getValue();n("confirm",e)},v=()=>{n("update:modelValue",!1),n("beforeClose")};return h(()=>{m()}),k(()=>{}),w(()=>{Object.keys(o.value).length!==0&&(o.value.destroy(),o.value.container.remove())}),(e,d)=>{const _=i("el-button"),V=i("el-drawer");return r(),B(V,{modelValue:a.value,"onUpdate:modelValue":d[0]||(d[0]=b=>a.value=b),size:"60%",title:e.title,direction:e.direction,class:"ace-dialog","append-to-body":!0,"before-close":v},{header:l(()=>[c("div",{innerHTML:e.title},null,8,M)]),default:l(()=>[a.value?(r(),g("div",{key:0,id:e.id},null,8,U)):T("",!0),c("div",j,[N(_,{type:"primary",onClick:p},{default:l(()=>[E(" 确定 ")]),_:1})])]),_:1},8,["modelValue","title","direction"])}}});export{x as _};