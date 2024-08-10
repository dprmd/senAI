const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/src-controller-CRUDFirestore.js-CQg5jOlm.js","assets/pnpm-react-syntax-highlighter@15.5.0_react@18.3.1--DZvnRHEN.js","assets/pnpm-react@18.3.1--FUz9cRTN.js","assets/pnpm-@babel_runtime@7.25.0--CyFcdsuD.js","assets/pnpm-refractor@3.6.0--CXVGWoH1.js","assets/pnpm-hastscript@6.0.0--DUsoOKIx.js","assets/pnpm-property-information@5.6.0--BaUulPWZ.js","assets/pnpm-xtend@4.0.2--CeaPpq3n.js","assets/pnpm-space-separated-tokens@1.1.5--CMBzgJJ4.js","assets/pnpm-comma-separated-tokens@1.0.8--DgTuumFk.js","assets/pnpm-hast-util-parse-selector@2.2.5--Cqsfuk9Y.js","assets/pnpm-parse-entities@2.0.0--Cz6FRF7l.js","assets/pnpm-character-entities-legacy@1.1.4--BW45UVHJ.js","assets/pnpm-character-reference-invalid@1.1.4--AKrgFUtc.js","assets/pnpm-is-decimal@1.0.4--Dxw1ZLrO.js","assets/pnpm-is-hexadecimal@1.0.4--Bc6OsCR9.js","assets/pnpm-is-alphanumerical@1.0.4--VupdbT_8.js","assets/pnpm-is-alphabetical@1.0.4--BlcIJk-E.js","assets/pnpm-prismjs@1.27.0--l2mXeTxv.js","assets/src-controller-serverSource.js-Cl8oyjhr.js","assets/src-lib-myUtils.js-dn8px5wY.js"])))=>i.map(i=>d[i]);
import{_ as u}from"./pnpm-react-syntax-highlighter@15.5.0_react@18.3.1--DZvnRHEN.js";import{r,j as e}from"./pnpm-react@18.3.1--FUz9cRTN.js";import{u as y}from"./pnpm-zustand@4.5.4_@types_react@18.3.3_react@18.3.1--EhdkWrrw.js";import{u as F}from"./src-store-appStore.js-CeccZLF4.js";import{u as b}from"./src-store-useChatsStore.js-D4_VXnQ2.js";import{S as B}from"./src-components-composable-SettingsTop.jsx-EcIuxh6L.js";import{L as H}from"./src-components-composable-Loading.jsx-CK2u8AZz.js";import{A as _}from"./src-components-composable-AlertDialogNormal.jsx-BHJ3oNWw.js";import{I as P,a as S,b as o,c as E}from"./src-components-ui-input-otp.jsx-CTHS2kEv.js";import{B as D}from"./src-components-ui-button.jsx-DsJR5dHX.js";import{L as p}from"./src-components-ui-label.jsx-BbA8jTdU.js";import{C as x}from"./src-components-ui-checkbox.jsx-CoBq23Pr.js";import{t as R}from"./src-components-ui-use-toast.js-w7cDmHIs.js";import{T as V}from"./src-components-ui-toaster.jsx-7EBQbj9a.js";import{u as z}from"./pnpm-react-i18next@15.0.1_i18next@23.12.2_react-dom@18.3.1_react@18.3.1__react@18.3.1--C-fP4VmU.js";import{m as M}from"./pnpm-framer-motion@11.3.22_react-dom@18.3.1_react@18.3.1__react@18.3.1--COr7I5SZ.js";import{L as W}from"./pnpm-lucide-react@0.412.0_react@18.3.1--BJNNq4L6.js";const ne=()=>{const[k,A]=b(y(t=>[t.setChats,t.setChatsMemory])),[L]=F(y(t=>[t.userId])),{t:a}=z(),[N,C]=r.useState(!1),[i,n]=r.useState({withChats:!1,withBackupChats:!1,withLastSeenHistory:!1}),f=6,[l,c]=r.useState(""),[T,w]=r.useState(!1),[v,g]=r.useState(!1),[I,h]=r.useState(!1),j=async()=>{if(l.length<f)return;const{getPermissionToDeleteAllData:t}=await u(async()=>{const{getPermissionToDeleteAllData:m}=await import("./src-controller-CRUDFirestore.js-CQg5jOlm.js");return{getPermissionToDeleteAllData:m}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20])),{sleep:s}=await u(async()=>{const{sleep:m}=await import("./src-lib-generateTime.js-DFXwsD9v.js");return{sleep:m}},[]);w(!0),await s(500);const d=await t(l);await s(500),d?h(!0):g(!0),w(!1)},O=async()=>{if(!i.withChats&&!i.withBackupChats&&!i.withLastSeenHistory)return;C(!0),A([]),i.withChats&&k([]),h(!1);const{deleteAllDataInFirestore:t}=await u(async()=>{const{deleteAllDataInFirestore:d}=await import("./src-controller-CRUDFirestore.js-CQg5jOlm.js");return{deleteAllDataInFirestore:d}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20])),s=await t(L,l,i);c(""),n({withChats:!1,withBackupChats:!1,withLastSeenHistory:!1}),R({title:a("deleted_all_data"),description:s,duration:2500}),C(!1)};return r.useEffect(()=>{const t=window.innerHeight,s=document.querySelector(".settingOtherClearAllData");s.style.minHeight=`${t-60}px`},[]),e.jsxs(e.Fragment,{children:[e.jsx(V,{}),e.jsxs(M.div,{className:"bg-[#FFFFFF] text-slate-900 dark:bg-[#0B141A] dark:text-slate-100",initial:{opacity:0,transition:{duration:.2}},animate:{opacity:1,transition:{duration:.2}},exit:{opacity:0,transition:{duration:.2}},children:[e.jsx(B,{title:a("delete_all_data_title"),urlBack:"/settings/other"}),e.jsxs("main",{className:"settingOtherClearAllData flex flex-col items-center justify-start py-10",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("span",{className:"text-xl font-bold",id:"enter-security-code",children:a("enter_security_code")}),e.jsx("div",{className:"mt-5",children:e.jsxs(P,{"aria-labelledby":"enter-security-code",maxLength:f,value:l,onChange:t=>{c(t)},onComplete:j,children:[e.jsxs(S,{children:[e.jsx(o,{index:0}),e.jsx(o,{index:1}),e.jsx(o,{index:2})]}),e.jsx(E,{}),e.jsxs(S,{children:[e.jsx(o,{index:3}),e.jsx(o,{index:4}),e.jsx(o,{index:5})]})]})})]}),e.jsx("div",{className:"mt-10",children:T?e.jsxs(D,{disabled:!0,variant:"whatsapp",size:"sm",className:"rounded-3xl px-10",children:[a("is_checking"),e.jsx(W,{className:"ml-2 h-4 w-4 animate-spin"})]}):e.jsx(D,{variant:"whatsapp",size:"sm",className:"rounded-3xl px-10",onClick:j,children:a("check")})})]})]}),N&&e.jsx(H,{message:a("loading_delete_all_data")}),e.jsx(_,{openState:v,setOpenState:g,showTitle:!0,showDescription:!0,title:a("wrong_security_code"),description:a("wrong_security_code_desc"),showCancel:!1,continueTitle:a("try_again"),showContinue:!0,handleContinue:()=>{c("")}}),e.jsx(_,{openState:I,setOpenState:h,showTitle:!0,showDescription:!0,title:a("choose_to_delete"),showCancel:!0,showContinue:!0,handleCancel:()=>{n({withChats:!1,withBackupChats:!1,withLastSeenHistory:!1})},handleContinue:O,children:e.jsxs("div",{className:"flex flex-col items-start justify-center gap-y-4 px-1 py-3",children:[e.jsxs("div",{className:"flex items-center gap-x-3",children:[e.jsx(x,{id:"chats",checked:i.withChats,onCheckedChange:t=>{n(s=>({...s,withChats:t}))}}),e.jsx(p,{htmlFor:"chats",className:"cursor-pointer",children:"Chats"})]}),e.jsxs("div",{className:"flex items-center gap-x-3",children:[e.jsx(x,{id:"backupChats",checked:i.withBackupChats,onCheckedChange:t=>{n(s=>({...s,withBackupChats:t}))}}),e.jsx(p,{htmlFor:"backupChats",className:"cursor-pointer",children:"Backup Chats"})]}),e.jsxs("div",{className:"flex items-center gap-x-3",children:[e.jsx(x,{id:"lastSeenHistory",checked:i.withLastSeenHistory,onCheckedChange:t=>{n(s=>({...s,withLastSeenHistory:t}))}}),e.jsx(p,{htmlFor:"lastSeenHistory",className:"cursor-pointer",children:"Last Seen History"})]})]})})]})};export{ne as S};