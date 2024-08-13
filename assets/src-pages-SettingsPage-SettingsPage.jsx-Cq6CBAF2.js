const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/src-controller-groq.js-BxgNjSVC.js","assets/src-lib-myUtils.js-B3UxZQ32.js","assets/src-components-ui-use-toast.js-w7cDmHIs.js","assets/pnpm-react@18.3.1--FUz9cRTN.js","assets/pnpm-@babel_runtime@7.25.0--CyFcdsuD.js","assets/src-controller-serverSource.js-q3Bpf1-e.js","assets/src-controller-CRUDFirestore.js-CZR2B6qO.js","assets/pnpm-react-syntax-highlighter@15.5.0_react@18.3.1--DZvnRHEN.js","assets/pnpm-refractor@3.6.0--CXVGWoH1.js","assets/pnpm-hastscript@6.0.0--DUsoOKIx.js","assets/pnpm-property-information@5.6.0--BaUulPWZ.js","assets/pnpm-xtend@4.0.2--CeaPpq3n.js","assets/pnpm-space-separated-tokens@1.1.5--CMBzgJJ4.js","assets/pnpm-comma-separated-tokens@1.0.8--DgTuumFk.js","assets/pnpm-hast-util-parse-selector@2.2.5--Cqsfuk9Y.js","assets/pnpm-parse-entities@2.0.0--Cz6FRF7l.js","assets/pnpm-character-entities-legacy@1.1.4--BW45UVHJ.js","assets/pnpm-character-reference-invalid@1.1.4--AKrgFUtc.js","assets/pnpm-is-decimal@1.0.4--Dxw1ZLrO.js","assets/pnpm-is-hexadecimal@1.0.4--Bc6OsCR9.js","assets/pnpm-is-alphanumerical@1.0.4--VupdbT_8.js","assets/pnpm-is-alphabetical@1.0.4--BlcIJk-E.js","assets/pnpm-prismjs@1.27.0--l2mXeTxv.js"])))=>i.map(i=>d[i]);
import{_ as g}from"./pnpm-react-syntax-highlighter@15.5.0_react@18.3.1--DZvnRHEN.js";import{r as E,j as t}from"./pnpm-react@18.3.1--FUz9cRTN.js";import{u}from"./pnpm-zustand@4.5.4_@types_react@18.3.3_react@18.3.1--EhdkWrrw.js";import{u as D}from"./src-store-appStore.js-CeccZLF4.js";import{u as v}from"./src-store-useSettingsStore.js-DBU6w3vm.js";import{S as I}from"./src-pages-SettingsPage-SettingFieldImage.jsx-By-0v43-.js";import{S as y}from"./src-pages-SettingsPage-SettingFieldUser.jsx-BWvAcpPF.js";import{S as M}from"./src-pages-SettingsPage-SettingFieldModel.jsx-DWtdTZvu.js";import{S as k}from"./src-pages-SettingsPage-SettingFieldName.jsx-3xpyjsnA.js";import{S as A}from"./src-pages-SettingsPage-SettingsField.jsx-DbIbTApJ.js";import{S as T}from"./src-components-composable-SettingsTop.jsx-C1g6zeeJ.js";import{S as L}from"./src-pages-SettingsPage-SettingFieldLanguage.jsx-C9vzMyWy.js";import{S as b}from"./src-pages-SettingsPage-SettingFieldBotLanguagePreferences.jsx-DC_XN3Ev.js";import{a as O}from"./pnpm-react-router@6.26.0_react@18.3.1--BYg1aRBq.js";import{u as B}from"./pnpm-react-i18next@15.0.1_i18next@23.12.2_react-dom@18.3.1_react@18.3.1__react@18.3.1--C-fP4VmU.js";import{m as R}from"./pnpm-framer-motion@11.3.22_react-dom@18.3.1_react@18.3.1__react@18.3.1--COr7I5SZ.js";const se=()=>{const[p]=D(u(e=>[e.setUserId])),[f,P,F,a,S,m,x,h,N,C]=v(u(e=>[e.setName,e.setOldName,e.setProfilePhotoUrl,e.settingsComponentDidFetch,e.setSettingsComponentDidFetch,e.settingModelComponentDidFetch,e.setSettingModelComponentDidFetch,e.setCurrentModels,e.setCustomProfilePhotoUrl,e.setCustomPPFileName])),l=O(),{t:s}=B();return E.useEffect(()=>{const e=async()=>{if(!m){const{getGroqModels:n}=await g(async()=>{const{getGroqModels:o}=await import("./src-controller-groq.js-BxgNjSVC.js");return{getGroqModels:o}},__vite__mapDeps([0,1,2,3,4,5]));n().then(o=>{h(o),x(!0)})}const{addNewUserToFirestoreIfNotExists:i,getNameAndPPUrl:_}=await g(async()=>{const{addNewUserToFirestoreIfNotExists:n,getNameAndPPUrl:o}=await import("./src-controller-CRUDFirestore.js-CZR2B6qO.js");return{addNewUserToFirestoreIfNotExists:n,getNameAndPPUrl:o}},__vite__mapDeps([6,7,3,4,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,5,1,2])),r=await i();p(r),localStorage.setItem("senAi-userId",r);const{name:c,PPUrl:w,customPPUrl:U,PPFileName:j}=await _(r);P(c),f(c),F(w),N(U),C(j)},d=i=>{i.keyCode===27&&l("/")};return a||(e(),S(!0)),document.addEventListener("keydown",d),()=>{document.removeEventListener("keydown",d)}},[a,m]),t.jsxs(R.div,{className:"bg-[#FFFFFF] text-slate-900 dark:bg-[#0B141A] dark:text-slate-100",initial:{opacity:0,transition:{duration:.2}},animate:{opacity:1,transition:{duration:.2}},exit:{opacity:0,transition:{duration:.2}},children:[t.jsx(T,{title:s("settings"),urlBack:"/"}),t.jsxs("main",{className:"mx-auto mt-1 flex min-h-screen flex-col sm:w-[80%] lg:w-[40%]",children:[t.jsx(I,{}),t.jsx(k,{}),t.jsx(y,{}),t.jsx(M,{}),t.jsx(L,{}),t.jsx(b,{}),t.jsx(A,{iconName:"ThreeDots",label:s("more_settings"),description:s("more_settings_desc"),disablePencil:!0,value:"",onClick:()=>{l("/settings/other")}})]})]})};export{se as S};
