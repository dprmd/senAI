const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/src-controller-groq.js-Bl44vVpM.js","assets/src-lib-myUtils.js-dn8px5wY.js","assets/src-controller-serverSource.js-Cl8oyjhr.js"])))=>i.map(i=>d[i]);
import{_ as p}from"./pnpm-react-syntax-highlighter@15.5.0_react@18.3.1--DZvnRHEN.js";import{r as x,j as t}from"./pnpm-react@18.3.1--FUz9cRTN.js";import{u}from"./pnpm-zustand@4.5.4_@types_react@18.3.3_react@18.3.1--EhdkWrrw.js";import{u as h}from"./src-store-useSettingsStore.js-CTILZtIi.js";import{S as g}from"./src-components-composable-SettingsTop.jsx-EcIuxh6L.js";import{R as F,a as f}from"./src-components-ui-radio-group.jsx-BBCUxHw3.js";import{L as j}from"./src-components-ui-label.jsx-BbA8jTdU.js";import{m as M}from"./pnpm-framer-motion@11.3.22_react-dom@18.3.1_react@18.3.1__react@18.3.1--COr7I5SZ.js";const b=()=>{const[n,r,a,d,o,l,m]=h(u(e=>[e.model,e.setModel,e.currentModels,e.setCurrentModels,e.settingModelComponentDidFetch,e.setSettingModelComponentDidFetch,e.settingsComponentDidFetch]));return x.useEffect(()=>{!m&&!o&&((async()=>{const{getGroqModels:i}=await p(async()=>{const{getGroqModels:c}=await import("./src-controller-groq.js-Bl44vVpM.js");return{getGroqModels:c}},__vite__mapDeps([0,1,2])),s=await i();d(s)})(),l(!0))},[o]),t.jsxs(M.div,{className:"bg-[#FFFFFF] text-slate-900 dark:bg-[#0B141A] dark:text-slate-100",initial:{opacity:0,transition:{duration:.2}},animate:{opacity:1,transition:{duration:.2}},children:[t.jsx(g,{title:"Model",urlBack:"/settings"}),t.jsx("main",{className:"max-w-[700px] px-[27px] py-5",children:t.jsx(F,{defaultValue:n,onValueChange:e=>{localStorage.setItem("senAi-model",e),r(e)},children:a.map((e,i)=>t.jsxs("div",{children:[t.jsx("h2",{className:"mb-5 mt-4 text-lg font-bold",children:e.owned}),e.models.map(s=>t.jsxs("div",{className:"my-2 flex space-x-4",children:[t.jsx("div",{children:t.jsx(f,{value:s.id,id:`senAi_model-${s.id}`})}),t.jsxs(j,{htmlFor:`senAi_model-${s.id}`,className:"cursor-pointer",children:[t.jsx("div",{children:s.id}),t.jsx("div",{className:"mt-2 text-sm text-slate-400",children:s.description})]})]},`senAi_model-${s.id}`))]},i))})})]})};export{b as S};