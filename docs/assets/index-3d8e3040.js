import{d as _,r as a,G as C,b as B,h as d,o as h,f as T,C as L,H as w,I,c as E,m as f,w as R,B as y}from"./index-605c1b61.js";const S=_({__name:"content",props:{modelValue:{}},emits:["update:modelValue"],setup(b,{emit:u}){const l=b,n=a(),i=a([]),p={children:"children",label:"name"},c=()=>{const o=n.value.getCheckedKeys(!1);u("update:modelValue",o.join(","))},t=()=>{const o=window.sessionStorage.getItem("formMenuList");o&&(i.value=JSON.parse(o))};return C(()=>l.modelValue,()=>{l.modelValue&&n.value.setCheckedKeys(l.modelValue.split(","),!1)}),B(()=>{t()}),(o,k)=>{const m=d("el-tree");return h(),T(m,{ref_key:"treeRef",ref:n,data:i.value,"show-checkbox":"","node-key":"id","highlight-current":"",props:p,onCheckChange:c},null,8,["data"])}}}),z=_({__name:"index",setup(b){const u=L(),l=a(),n=a(),i=a({list:[{type:"input",control:{modelValue:"",placeholder:"请输入角色名称"},config:{},name:"name",item:{label:"角色名称"}},{type:"select",control:{modelValue:"",appendToBody:!0},options:[],config:{optionsType:2,addAll:"全部",optionsFun:"status"},name:"status",item:{label:"状态"}},{type:"button",control:{label:"查询",type:"primary",key:"submit"},config:{}},{type:"button",control:{label:"重置",key:"reset"},config:{}}],form:{size:"default"},config:{}}),p=a({columns:[{label:"多选",type:"selection"},{label:"序号",type:"index",width:"70px"},{label:"角色名称",prop:"name"},{label:"状态",prop:"status",config:{dictKey:"status",tagList:{1:"success",0:"info"}}},{label:"操作",prop:"__control"}],config:{expand:!0,openType:"dialog"},operateBtn:[{label:"分配用户",click:e=>{u.push({path:"/system/user",query:{role:e.id}})}},{label:"编辑",key:"edit",click:e=>{y(()=>{console.log(e)})}},{label:"删除",key:"del"}],controlBtn:[{label:"新增",key:"add",type:"primary",size:"small",icon:"plus"},{label:"批量删除",key:"del",type:"danger",size:"small",icon:"delete"}]}),c=a({list:[{type:"input",control:{modelValue:""},config:{},name:"name",item:{label:"角色名称"},customRules:[{type:"required",message:"角色名称不能为空",trigger:"blur"}]},{type:"radio",control:{modelValue:1},options:[],config:{optionsType:2,optionsFun:"status"},name:"status",item:{label:"状态"}},{type:"component",control:{modelValue:""},config:{componentName:w(S)},name:"menuId",item:{label:"菜单权限"}},{type:"textarea",control:{modelValue:""},config:{},name:"remark",item:{label:"备注"}},{type:"div",control:{},config:{textAlign:"center"},list:[{type:"button",control:{label:"确定",type:"primary",key:"submit"},config:{span:0}},{type:"button",control:{label:"取消",key:"none"},config:{span:0}}]}],form:{labelWidth:80,size:"default"},config:{}}),t=I({visible:!1,title:"",formType:1,dict:{},editId:""}),o=(e,s)=>{var r;(e.key==="add"||e.key==="edit")&&(t.visible=!0,t.title=e.key==="add"?"新增":"编辑",t.formType=e.key==="add"?1:2,t.editId=s&&s.id,e.key==="add"&&((r=c.value.config)!=null&&r.addLoad)&&y(()=>{l.value.getData()}),e.key==="edit"&&y(()=>{l.value.setValue(s)}))},k=e=>(t.formType===2&&(e.id=t.editId),e),m=e=>{e==="success"&&(g(),n.value.getListData())},g=()=>{t.visible=!1,t.editId=""},v=e=>{e==="none"&&g()};return(e,s)=>{const r=d("ak-list"),V=d("ak-form"),D=d("el-dialog");return h(),E("div",null,[f(r,{ref_key:"tableListEl",ref:n,requestUrl:"roleList",deleteUrl:"roleDelete",searchData:i.value,tableData:p.value,onBtnClick:o},null,8,["searchData","tableData"]),f(D,{"destroy-on-close":"",modelValue:t.visible,"onUpdate:modelValue":s[0]||(s[0]=x=>t.visible=x),title:t.title,width:"420px"},{default:R(()=>[f(V,{ref_key:"formEl",ref:l,formData:c.value,dict:t.dict,type:t.formType,addUrl:"roleSave",editUrl:"roleEdit",beforeSubmit:k,afterSubmit:m,onBtnClick:v},null,8,["formData","dict","type"])]),_:1},8,["modelValue","title"])])}}});export{z as default};
