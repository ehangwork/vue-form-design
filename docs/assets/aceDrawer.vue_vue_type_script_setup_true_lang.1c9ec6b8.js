import{i as y,r as s,R as b,o as C,a8 as h,b as c,c as r,k,w as d,e as u,d as w,y as B,g,h as T,H as x,a7 as E}from"./index.58206b0d.js";const N=["innerHTML"],H=["id"],M={class:"dialog-footer"},z=T(" \u786E\u5B9A "),U=y({__name:"aceDrawer",props:{modelValue:{type:Boolean},title:null,direction:null,content:{default:""},id:{default:"editJson"},codeType:null},emits:["beforeClose","confirm","update:modelValue"],setup(e,{emit:n}){const a=e,t=s({}),l=s(!1);b(()=>a.modelValue,o=>{l.value=o,o&&m()});const m=()=>{x(()=>{t.value=E(a.content,a.id,a.codeType)})},f=()=>{const o=t.value.getValue();n("confirm",o)},p=()=>{n("update:modelValue",!1),n("beforeClose")};return C(()=>{}),h(()=>{Object.keys(t.value).length!==0&&(t.value.destroy(),t.value.container.remove())}),(o,i)=>{const v=c("el-button"),V=c("el-drawer");return r(),k(V,{modelValue:l.value,"onUpdate:modelValue":i[0]||(i[0]=_=>l.value=_),size:"60%",title:e.title,direction:e.direction||"ltr","custom-class":"ace-dialog","append-to-body":!0,"before-close":p},{header:d(()=>[u("div",{innerHTML:e.title},null,8,N)]),default:d(()=>[l.value?(r(),w("div",{key:0,id:e.id},null,8,H)):B("",!0),u("div",M,[g(v,{type:"primary",size:"small",onClick:f},{default:d(()=>[z]),_:1})])]),_:1},8,["modelValue","title","direction"])}}});export{U as _};
