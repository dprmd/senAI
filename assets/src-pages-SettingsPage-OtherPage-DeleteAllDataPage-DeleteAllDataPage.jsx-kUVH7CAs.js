const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/src-controller-CRUDFirestore.js-ebzYIMyE.js","assets/pnpm-react-syntax-highlighter@15.5.0_react@18.3.1--DZvnRHEN.js","assets/pnpm-react@18.3.1--FUz9cRTN.js","assets/pnpm-@babel_runtime@7.25.0--CyFcdsuD.js","assets/pnpm-refractor@3.6.0--CXVGWoH1.js","assets/pnpm-hastscript@6.0.0--DUsoOKIx.js","assets/pnpm-property-information@5.6.0--BaUulPWZ.js","assets/pnpm-xtend@4.0.2--CeaPpq3n.js","assets/pnpm-space-separated-tokens@1.1.5--CMBzgJJ4.js","assets/pnpm-comma-separated-tokens@1.0.8--DgTuumFk.js","assets/pnpm-hast-util-parse-selector@2.2.5--Cqsfuk9Y.js","assets/pnpm-parse-entities@2.0.0--Cz6FRF7l.js","assets/pnpm-character-entities-legacy@1.1.4--BW45UVHJ.js","assets/pnpm-character-reference-invalid@1.1.4--AKrgFUtc.js","assets/pnpm-is-decimal@1.0.4--Dxw1ZLrO.js","assets/pnpm-is-hexadecimal@1.0.4--Bc6OsCR9.js","assets/pnpm-is-alphanumerical@1.0.4--VupdbT_8.js","assets/pnpm-is-alphabetical@1.0.4--BlcIJk-E.js","assets/pnpm-prismjs@1.27.0--l2mXeTxv.js","assets/src-controller-serverSource.js-BxsbMKjs.js","assets/src-lib-myUtils.js-dn8px5wY.js"])))=>i.map(i=>d[i]);
import{_ as x}from"./pnpm-react-syntax-highlighter@15.5.0_react@18.3.1--DZvnRHEN.js";import{r as o,j as e}from"./pnpm-react@18.3.1--FUz9cRTN.js";import{u as j}from"./pnpm-zustand@4.5.4_@types_react@18.3.3_react@18.3.1--EhdkWrrw.js";import{u as F}from"./src-store-appStore.js-CeccZLF4.js";import{u as B}from"./src-store-useChatsStore.js-D4_VXnQ2.js";import{S as b}from"./src-components-composable-SettingsTop.jsx-EcIuxh6L.js";import{L as H}from"./src-components-composable-Loading.jsx-CK2u8AZz.js";import{A as _}from"./src-components-composable-AlertDialogNormal.jsx-BHJ3oNWw.js";import{I as P,a as D,b as r,c as E}from"./src-components-ui-input-otp.jsx-CTHS2kEv.js";import{B as S}from"./src-components-ui-button.jsx-DsJR5dHX.js";import{L as c}from"./src-components-ui-label.jsx-BbA8jTdU.js";import{C as h}from"./src-components-ui-checkbox.jsx-CoBq23Pr.js";import{t as R}from"./src-components-ui-use-toast.js-w7cDmHIs.js";import{T as V}from"./src-components-ui-toaster.jsx-7EBQbj9a.js";import{u as z}from"./pnpm-react-i18next@15.0.1_i18next@23.12.2_react-dom@18.3.1_react@18.3.1__react@18.3.1--C-fP4VmU.js";import{m as M}from"./pnpm-framer-motion@11.3.22_react-dom@18.3.1_react@18.3.1__react@18.3.1--COr7I5SZ.js";import{L as W}from"./pnpm-lucide-react@0.412.0_react@18.3.1--BJNNq4L6.js";const re=()=>{const[k,A]=B(j(t=>[t.setChats,t.setChatsMemory])),[N]=F(j(t=>[t.userId])),{t:i}=z(),[L,C]=o.useState(!1),[a,l]=o.useState({withChats:!1,withBackupChats:!1,withLastSeenHistory:!1,withDestroyAllCollections:!1}),f=6,[n,d]=o.useState(""),[v,w]=o.useState(!1),[T,g]=o.useState(!1),[I,m]=o.useState(!1),y=async()=>{if(n.length<f)return;const{getPermissionToDeleteAllData:t}=await x(async()=>{const{getPermissionToDeleteAllData:p}=await import("./src-controller-CRUDFirestore.js-ebzYIMyE.js");return{getPermissionToDeleteAllData:p}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20])),{sleep:s}=await x(async()=>{const{sleep:p}=await import("./src-lib-generateTime.js-DFXwsD9v.js");return{sleep:p}},[]);w(!0),await s(500);const u=await t(n);await s(500),u?m(!0):g(!0),w(!1)},O=async()=>{if(!a.withChats&&!a.withBackupChats&&!a.withLastSeenHistory&&!a.withDestroyAllCollections)return;C(!0),a.withChats&&a.withBackupChats&&(k([]),A([])),m(!1);const{deleteAllDataInFirestore:t}=await x(async()=>{const{deleteAllDataInFirestore:u}=await import("./src-controller-CRUDFirestore.js-ebzYIMyE.js");return{deleteAllDataInFirestore:u}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20])),s=await t(N,n,a);d(""),l({withChats:!1,withBackupChats:!1,withLastSeenHistory:!1}),R({title:i("deleted_all_data"),description:s,duration:2500}),C(!1)};return o.useEffect(()=>{const t=window.innerHeight,s=document.querySelector(".settingOtherClearAllData");s.style.minHeight=`${t-60}px`},[]),e.jsxs(e.Fragment,{children:[e.jsx(V,{}),e.jsxs(M.div,{className:"bg-[#FFFFFF] text-slate-900 dark:bg-[#0B141A] dark:text-slate-100",initial:{opacity:0,transition:{duration:.2}},animate:{opacity:1,transition:{duration:.2}},exit:{opacity:0,transition:{duration:.2}},children:[e.jsx(b,{title:i("delete_all_data_title"),urlBack:"/settings/other"}),e.jsxs("main",{className:"settingOtherClearAllData flex flex-col items-center justify-start py-10",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("span",{className:"text-xl font-bold",id:"enter-security-code",children:i("enter_security_code")}),e.jsx("div",{className:"mt-5",children:e.jsxs(P,{"aria-labelledby":"enter-security-code",maxLength:f,value:n,onChange:t=>{d(t)},onComplete:y,children:[e.jsxs(D,{children:[e.jsx(r,{index:0}),e.jsx(r,{index:1}),e.jsx(r,{index:2})]}),e.jsx(E,{}),e.jsxs(D,{children:[e.jsx(r,{index:3}),e.jsx(r,{index:4}),e.jsx(r,{index:5})]})]})})]}),e.jsx("div",{className:"mt-10",children:v?e.jsxs(S,{disabled:!0,variant:"whatsapp",size:"sm",className:"rounded-3xl px-10",children:[i("is_checking"),e.jsx(W,{className:"ml-2 h-4 w-4 animate-spin"})]}):e.jsx(S,{variant:"whatsapp",size:"sm",className:"rounded-3xl px-10",onClick:y,children:i("check")})})]})]}),L&&e.jsx(H,{message:i("loading_delete_all_data")}),e.jsx(_,{openState:T,setOpenState:g,showTitle:!0,showDescription:!0,title:i("wrong_security_code"),description:i("wrong_security_code_desc"),showCancel:!1,continueTitle:i("try_again"),showContinue:!0,handleContinue:()=>{d("")}}),e.jsx(_,{openState:I,setOpenState:m,showTitle:!0,showDescription:!0,title:i("choose_to_delete"),showCancel:!0,showContinue:!0,handleCancel:()=>{l({withChats:!1,withBackupChats:!1,withLastSeenHistory:!1,withDestroyAllCollections:!1})},handleContinue:O,children:e.jsxs("div",{className:"flex flex-col items-start justify-center gap-y-4 px-1 py-3",children:[e.jsxs("div",{className:"flex items-center gap-x-3",children:[e.jsx(h,{id:"chats",checked:a.withChats,onCheckedChange:t=>{l(s=>({...s,withChats:t}))}}),e.jsx(c,{htmlFor:"chats",className:"cursor-pointer",children:"Chats"})]}),e.jsxs("div",{className:"flex items-center gap-x-3",children:[e.jsx(h,{id:"backupChats",checked:a.withBackupChats,onCheckedChange:t=>{l(s=>({...s,withBackupChats:t}))}}),e.jsx(c,{htmlFor:"backupChats",className:"cursor-pointer",children:"Backup Chats"})]}),e.jsxs("div",{className:"flex items-center gap-x-3",children:[e.jsx(h,{id:"lastSeenHistory",checked:a.withLastSeenHistory,onCheckedChange:t=>{l(s=>({...s,withLastSeenHistory:t}))}}),e.jsx(c,{htmlFor:"lastSeenHistory",className:"cursor-pointer",children:"Last Seen History"})]}),e.jsxs("div",{className:"flex items-center gap-x-3",children:[e.jsx(h,{id:"allCollections",checked:a.withDestroyAllCollections,onCheckedChange:t=>{l(s=>({...s,withDestroyAllCollections:t}))}}),e.jsx(c,{htmlFor:"allCollections",className:"cursor-pointer",children:"All Collections"})]})]})})]})};export{re as S};