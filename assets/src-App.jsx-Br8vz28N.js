import{r,j as t}from"./pnpm-react@18.3.1--FUz9cRTN.js";import{H as m}from"./pnpm-react-router-dom@6.26.0_react-dom@18.3.1_react@18.3.1__react@18.3.1--D-00O08K.js";import{u}from"./pnpm-zustand@4.5.4_@types_react@18.3.3_react@18.3.1--EhdkWrrw.js";import{u as c}from"./src-store-useSettingsStore.js-CTILZtIi.js";import{A as i}from"./src-pages-AnimatedComponent.jsx-BrMWKGMO.js";/* empty css                    */import{u as g}from"./pnpm-react-i18next@15.0.1_i18next@23.12.2_react-dom@18.3.1_react@18.3.1__react@18.3.1--C-fP4VmU.js";const S=()=>{const[a,o]=c(u(e=>[e.darkMode,e.language])),{i18n:s}=g();return r.useEffect(()=>{a?document.querySelector("html").classList.add("dark"):document.querySelector("html").classList.remove("dark")},[a]),r.useEffect(()=>{(n=>{s.changeLanguage(n)})(o)},[o]),t.jsx(m,{children:t.jsx(i,{})})};export{S as A};