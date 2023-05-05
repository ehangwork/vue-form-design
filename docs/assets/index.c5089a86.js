import{i as x,r as v,R as L,o as M,H as U,c as k,d as F,n as P,ab as Y,k as j,w as d,e as r,g as s,Y as w,y as A,t as N,z as T,V as G,u as q,aa as z,I as Q,l as X,M as Z,a8 as ee,b,O as te,D as ae,F as se,h as oe,a0 as V,a7 as le,s as ne,E as D,m as O,a3 as ie,a4 as ue}from"./index.58206b0d.js";import{_ as re,a as ce}from"./vueFile.vue_vue_type_script_setup_true_lang.9dac262b.js";const de=x({__name:"echartsInt",props:{option:null,width:{default:600},height:{default:400}},setup(_){const B=_,h=v(),p=v(),n=Y(()=>{p.value=echarts.init(h.value),p.value.setOption(B.option),window.onresize=p.value},100);return L(()=>B,()=>{p.value&&(p.value.clear(),p.value.dispose()),n()},{deep:!0}),M(()=>{U(()=>{n()})}),(g,f)=>(k(),F("div",{class:"echarts",style:P({width:_.width+"px",height:_.height+"px"}),ref_key:"echartsEl",ref:h},null,4))}}),pe=["onClick"],me={key:0,class:"drag-control"},ge={class:"item-control"},fe=["onClick"],ve=["onClick"],_e=r("div",{class:"drag-move icon-move"},null,-1),he={class:"tooltip"},ye=x({__name:"echarts",props:{data:null,type:{default:2}},emits:["controlBtnClick"],setup(_,{expose:B,emit:h}){const p=_,n=v(),g=v({list:[],config:{}});L(()=>p.data,i=>{i&&(g.value=i)},{immediate:!0});const f=i=>{if(p.type!==1)return;const y=i.newIndex,o=new Date().getTime().toString(),m=g.value.list[y];!m||(delete m.label,delete m.icon,Object.assign(m,{name:m.type+o}),E(m))},E=i=>{console.log("groupClick",i),n.value=i.name,h("controlBtnClick",i)},e=(i,y,o)=>{if(p.type!==2){if(i==="clone"){const m=o.type+new Date().getTime().toString(),a=JSON.parse(JSON.stringify(o));g.value.list.splice(y,0,Object.assign(a,{name:m}))}else i==="del"&&g.value.list.splice(y,1);h("controlBtnClick","")}};return B({getData:()=>g.value,setDataList:i=>{g.value=i},setData:i=>{}}),(i,y)=>(k(),j(q(z),G({itemKey:"id",list:g.value.list,name:"fade",class:"drag"},{group:"form",ghostClass:"ghost",animation:200,handle:".drag-move"},{onAdd:f}),{item:d(({element:o,index:m})=>[r("div",{class:T(["group",{["group-"+o.type]:!0,[o.class]:o.class,active:n.value===o.name}]),onClick:w(a=>E(o),["stop"])},[s(de,{option:o.option,width:o.width,height:o.height},null,8,["option","width","height"]),_.type===1?(k(),F("div",me,[r("div",ge,[r("i",{class:"icon-clone",onClick:w(a=>e("clone",m,o),["stop"]),title:"\u514B\u9686"},null,8,fe),r("i",{class:"icon-del",onClick:w(a=>e("del",m,o),["stop"])},null,8,ve)]),_e])):A("",!0),r("div",he,N(o.name),1)],10,pe)]),_:1},16,["list"]))}}),be={class:"design-container design-chart"},Be={class:"components-list"},ke=r("div",{class:"title"},"\u56FE\u8868\u7C7B\u578B",-1),Ce=["title"],De={class:"main-body"},Fe={class:"main-form design-form"},Ee={class:"sidebar-tools"},Ve=["innerHTML"],we={key:0,id:"editJson"},Ae={class:"dialog-footer"},Te=oe(" \u786E\u5B9A "),Re=x({__name:"index",setup(_){const B=Q(),h=X(),p=v(),n=v({}),g=v([{icon:"line",label:"\u6298\u7EBF\u56FE",type:"line",option:{xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},series:[{data:[150,230,224,218,135,147,260],type:"line"}]}},{icon:"bar",label:"\u67F1\u72B6\u56FE",type:"bar",option:{xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},series:[{data:[120,200,150,80,70,110,130],type:"bar"}]}},{icon:"pie",label:"\u997C\u56FE",type:"pie",option:{series:[{name:"Access From",type:"pie",radius:"50%",data:[{value:1048,name:"Search Engine"},{value:735,name:"Direct"},{value:580,name:"Email"},{value:484,name:"Union Ads"},{value:300,name:"Video Ads"}]}]}}]),f=v(),E=a=>JSON.parse(JSON.stringify(a)),e=Z({editor:{},loading:!1,id:h.query.id,direction:"rtl",dialogTitle:"",visible:!1,dialogType:"",name:""}),$=a=>{n.value=a},R=a=>{const t=f.value.getData();switch(a){case"del":f.value.setDataList([]),n.value="";break;case"json":S(t,{type:"export"});break;case"vue":p.value.openEcharts(t);break;case"save":y(t);break}},S=(a,t={})=>{var c,C;e.direction=t.direction||"rtl",e.visible=!0,e.dialogTitle=t.title,e.dialogType=t.type,a||(a=f.value.getData());let u=V(a,!0);switch(t.type){case"beforeRequest":(c=a.config)!=null&&c.beforeRequest?u=V(a.config.beforeRequest,!0):u=ue;break;case"afterResponse":(C=a.config)!=null&&C.afterResponse?u=V(a.config.afterResponse,!0):u=ie;break}U(()=>{e.editor=le(u)})},i=()=>{try{const a=ne(e.editor.getValue());switch(e.dialogType){case"export":f.value.setDataList(a);break;case"beforeRequest":case"afterResponse":const t=f.value.getData();t.config[e.dialogType]=a;break}e.visible=!1}catch(a){D.error(a.message)}},y=a=>{if(!e.name){D.error("\u8BF7\u8F93\u5165\u56FE\u8868\u4FDD\u5B58\u7684\u540D\u79F0");return}e.loading=!0;const t={data:V(a),id:e.id,name:e.name};O("saveEcharts",t).then(u=>{var c;console.log(u),D({message:((c=u.data)==null?void 0:c.message)||"\u4FDD\u5B58\u6210\u529F\uFF01",type:"success"}),B.push({path:"/echarts/list"}),e.loading=!1}).catch(u=>{var c;D.error(((c=u.data)==null?void 0:c.message)||"\u4FDD\u5B58\u5F02\u5E38"),e.loading=!1})},o=a=>{a()},m=()=>{e.id&&(e.loading=!0,O("echartsList",{id:e.id}).then(a=>{e.loading=!1;const t=a.data;e.name=t.name,f.value.setDataList(t.list)}).catch(a=>{var t;D.error(((t=a.data)==null?void 0:t.message)||"\u64CD\u4F5C\u5F02\u5E38"),e.loading=!1}))};return M(()=>{m()}),ee(()=>{Object.keys(e.editor).length!==0&&(e.editor.destroy(),e.editor.container.remove())}),(a,t)=>{const u=b("el-input"),c=b("el-form-item"),C=b("el-tab-pane"),I=b("el-tabs"),J=b("el-form"),H=b("el-button"),K=b("el-drawer"),W=te("loading");return ae((k(),F("div",be,[r("div",Be,[ke,s(q(z),{itemKey:"key",tag:"ul",modelValue:g.value,"onUpdate:modelValue":t[0]||(t[0]=l=>g.value=l),group:{name:"form",pull:"clone",put:!1},"ghost-class":"ghost",sort:!1,clone:E},{item:d(({element:l})=>[r("li",{class:T([l.type])},[r("i",{class:T(`icon-${l.icon}`)},null,2),r("span",{title:l.label},N(l.label),9,Ce)],2)]),_:1},8,["modelValue"])]),r("div",De,[s(re,{onClick:R,type:"2"}),r("div",Fe,[s(ye,{type:1,onControlBtnClick:$,ref_key:"echartsEl",ref:f},null,512)])]),r("div",Ee,[s(J,{size:"small"},{default:d(()=>[s(I,{modelValue:"first"},{default:d(()=>[s(C,{label:"\u56FE\u8868\u5C5E\u6027",name:"first"},{default:d(()=>[Object.keys(n.value).length?(k(),F(se,{key:0},[s(c,{label:"\u81EA\u5B9A\u4E49Class"},{default:d(()=>[s(u,{placeholder:"\u81EA\u5B9A\u4E49Class",modelValue:n.value.class,"onUpdate:modelValue":t[1]||(t[1]=l=>n.value.class=l)},null,8,["modelValue"])]),_:1}),s(c,{label:"\u5B57\u6BB5\u6807\u8BC6"},{default:d(()=>[s(u,{placeholder:"\u5B57\u6BB5\u6807\u8BC6",modelValue:n.value.name,"onUpdate:modelValue":t[2]||(t[2]=l=>n.value.name=l)},null,8,["modelValue"])]),_:1}),s(c,{label:"\u56FE\u8868\u5BBD\u5EA6"},{default:d(()=>[s(u,{placeholder:"\u56FE\u8868\u5BBD\u5EA6\uFF0C\u6570\u5B57\u7C7B\u578B",modelValue:n.value.width,"onUpdate:modelValue":t[3]||(t[3]=l=>n.value.width=l),modelModifiers:{number:!0}},null,8,["modelValue"])]),_:1}),s(c,{label:"\u56FE\u8868\u9AD8\u5EA6"},{default:d(()=>[s(u,{placeholder:"\u56FE\u8868\u9AD8\u5EA6\uFF0C\u6570\u5B57\u7C7B\u578B",modelValue:n.value.height,"onUpdate:modelValue":t[4]||(t[4]=l=>n.value.height=l),modelModifiers:{number:!0}},null,8,["modelValue"])]),_:1})],64)):A("",!0)]),_:1}),s(C,{label:"\u56FE\u8868\u914D\u7F6E",name:"two"},{default:d(()=>[s(c,{label:"\u4FDD\u5B58\u540D\u79F0"},{default:d(()=>[s(u,{placeholder:"\u4FDD\u5B58\u540D\u79F0",modelValue:e.name,"onUpdate:modelValue":t[5]||(t[5]=l=>e.name=l)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),s(K,{modelValue:e.visible,"onUpdate:modelValue":t[6]||(t[6]=l=>e.visible=l),size:"60%",direction:e.direction,"custom-class":"ace-dialog","append-to-body":!0,"before-close":o},{header:d(()=>[r("div",{innerHTML:e.dialogTitle},null,8,Ve)]),default:d(()=>[e.visible?(k(),F("div",we)):A("",!0),r("div",Ae,[s(H,{type:"primary",size:"small",onClick:i},{default:d(()=>[Te]),_:1})])]),_:1},8,["modelValue","direction"]),s(ce,{ref_key:"vueFileEl",ref:p},null,512)])),[[W,e.loading]])}}});export{Re as default};
