import{C as s,r as t,h as c,o as p,c as i,m as u}from"./index-605c1b61.js";const d={__name:"applyed",setup(m){const a=s(),l=t(),o=t({list:[{type:"input",control:{modelValue:"",placeholder:"请输入审批标题"},config:{},name:"title",item:{label:"审批标题"}},{type:"button",control:{label:"查询",type:"primary",key:"submit"},config:{},name:"button1682087269238"},{type:"button",control:{label:"重置"},config:{}}],form:{size:"default"},config:{}}),r=t({columns:[{prop:"title",label:"审批标题"},{prop:"creatTime",label:"发起时间",config:{formatter:"{y}-{m}-{d} {h}:{i}:{s}"}},{prop:"endTime",label:"完成时间",config:{formatter:"{y}-{m}-{d} {h}:{i}:{s}"}},{prop:"name",label:"审批人"},{prop:"status",label:"流程状态"},{prop:"__control",label:"操作"}],operateBtn:[{label:"修改",click:e=>{a.push({path:"/task/apply/start",query:{flowId:e.flowId,id:e.id}})}},{label:"撤回"}],config:{requestUrl:"flowList",expand:!0}});return(e,f)=>{const n=c("ak-list");return p(),i("div",null,[u(n,{ref_key:"tableListEl",ref:l,requestUrl:"flowList",searchData:o.value,tableData:r.value},null,8,["searchData","tableData"])])}}};export{d as default};
