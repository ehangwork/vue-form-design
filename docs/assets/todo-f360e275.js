import{d as T,J as j,r as n,o as b,f as B,w as l,l as t,m as e,y as c,A,c as q,C as E,s as V,E as x,q as s,G,t as I,j as J}from"./index-8ad7f075.js";const R={class:"flow-detail-drawer"},H={class:"header"},K=t("div",{class:"face"},[t("i",{class:"icon-user"})],-1),M=t("div",{class:"name"},"张三总",-1),P={class:"button"},Q={class:"form-info"},W=t("div",{class:"flow-list"},null,-1),X=t("div",{class:"status"},[t("ul",null,[t("li",{class:"s1"},"● 已完成"),t("li",{class:"s2"},"● 进行中"),t("li",{class:"s3"},"● 未进行"),t("li",{class:"s4"},"● 已拒绝"),t("li",{class:"s5"},"● 跳过")])],-1),Y=T({__name:"drawerCom",setup(L,{expose:g}){const a=j({visible:!1,formId:"",id:"",loading:!0}),y=o=>{a.visible=!0,a.id=o.formId,E(()=>{h(o)})},d=n(),m=n(),f=n({list:[],form:{}}),w=o=>(o.formId=a.formId,o.id=a.id,o),v=()=>{},h=o=>{const i={id:o.flowId};V("designById",i).then(u=>{d.value.setValue(x(u.data.data)),a.formId=u.data.source,V("designById",{id:u.data.source}).then(_=>{f.value=x(_.data.data),E(()=>{a.loading=!1})}),m.value.getData({formId:a.formId,id:a.id})})},p=n(),r=n({list:[{type:"divider",control:{},config:{},item:{label:"审批意见"}},{type:"select",control:{modelValue:"",appendToBody:!0,placeholder:"请选择常用审批意见"},options:[{label:"同意",value:1},{label:"不同意",value:2}],config:{optionsType:0,span:8},name:"type",item:{label:"快选审批意见"}},{type:"textarea",control:{modelValue:""},config:{},name:"remark",item:{label:"审批意见",rules:[{required:!0,message:"请输入审批意见",trigger:"change"}]}}],form:{size:"default"},config:{}}),D=({key:o,value:i})=>{o==="type"&&p.value.setValue({remark:i===1?"同意":"不同意"})},N=n({columns:[{label:"节点名称",prop:"nodeName"},{label:"处理人",prop:"name"},{label:"任务状态",prop:"status",config:{}},{label:"开始时间",prop:"startTime",config:{formatter:"{y}-{m}-{d} {h}:{i}:{s}"}},{label:"结束时间",prop:"endTime",config:{formatter:"{y}-{m}-{d} {h}:{i}:{s}"}},{label:"审批意见",prop:"remark"}],config:{columnsSetting:!1}});return g({open:y}),(o,i)=>{const u=s("el-tag"),_=s("el-button"),C=s("ak-form"),k=s("el-tab-pane"),U=s("ak-flow"),O=s("ak-list"),S=s("el-tabs"),z=s("el-drawer"),F=G("loading");return b(),B(z,{modelValue:a.visible,"onUpdate:modelValue":i[0]||(i[0]=$=>a.visible=$),"destroy-on-close":"","with-header":!1,size:"1200px"},{default:l(()=>[t("div",R,[t("div",H,[K,t("div",null,[M,e(u,null,{default:l(()=>[c("总裁助理审批中")]),_:1})]),t("div",P,[e(_,{type:"success"},{default:l(()=>[c("同意")]),_:1}),e(_,{type:"danger"},{default:l(()=>[c("拒绝")]),_:1}),e(_,{type:"primary"},{default:l(()=>[c("流转")]),_:1})])]),e(S,null,{default:l(()=>[e(k,{label:"表单信息"},{default:l(()=>[A((b(),q("div",Q,[e(C,{ref_key:"formEl",ref:m,formData:f.value,beforeSubmit:w,afterSubmit:v,type:2,requestUrl:"getFormContent",editUrl:"editFormContent"},null,8,["formData"]),e(C,{ref_key:"formOptionsEl",ref:p,formData:r.value,type:1,onChange:D},null,8,["formData"]),W])),[[F,a.loading]])]),_:1}),e(k,{label:"流程图",name:"flow",class:"flow-box"},{default:l(()=>[X,e(U,{type:1,ref_key:"flowEl",ref:d},null,512)]),_:1}),e(k,{label:"流转记录"},{default:l(()=>[e(O,{ref:"tableListEl",tableData:N.value},null,8,["tableData"])]),_:1})]),_:1})])]),_:1},8,["modelValue"])}}});const ee=T({__name:"todo",setup(L){const g=n(),a=n({list:[{type:"input",control:{modelValue:"",placeholder:"请输入审批标题"},config:{},name:"title",item:{label:"审批标题"}},{type:"button",control:{label:"查询",type:"primary",key:"submit"},config:{}},{type:"button",control:{label:"重置"},config:{}}],form:{size:"default"},config:{}}),y=n({columns:[{prop:"title",label:"审批标题"},{prop:"creatTime",label:"发起时间",config:{formatter:"{y}-{m}-{d} {h}:{i}:{s}"}},{prop:"a",label:"流程节点"},{prop:"status",label:"流程状态"}],config:{requestUrl:"flowList",expand:!0}}),d=n(),m=f=>{d.value.open(f)};return(f,w)=>{const v=s("el-tag"),h=s("el-button"),p=s("ak-list");return b(),q("div",null,[e(p,{ref_key:"tableListEl",ref:g,requestUrl:"flowList",searchData:a.value,tableData:y.value},{status:l(({row:r})=>[r.status?(b(),B(v,{key:0},{default:l(()=>[c(I(r.status),1)]),_:2},1024)):J("",!0)]),title:l(({row:r})=>[e(h,{link:"",type:"primary",onClick:D=>m(r)},{default:l(()=>[c(I(r.title),1)]),_:2},1032,["onClick"])]),_:1},8,["searchData","tableData"]),e(Y,{ref_key:"drawerEl",ref:d},null,512)])}}});export{ee as default};