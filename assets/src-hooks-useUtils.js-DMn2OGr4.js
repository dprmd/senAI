import{getDeviceType as r}from"./src-lib-myUtils.js-B3UxZQ32.js";import{u as c}from"./src-store-useSettingsStore.js-DLV1m-Pv.js";import{r as a}from"./pnpm-react@18.3.1--FUz9cRTN.js";import{u as i}from"./pnpm-zustand@4.5.4_@types_react@18.3.3_react@18.3.1--EhdkWrrw.js";import{u as l}from"./src-hooks-HoldChats-useClearHoldChats.js-Cd9wuwuv.js";const p=()=>{const e=l();return s=>{s.keyCode===27&&e()}},k=()=>{const[e,t]=c(i(o=>[o.darkMode,o.setDarkMode]));return()=>{e?(localStorage.setItem("senAi-theme","light"),t(!1)):(localStorage.setItem("senAi-theme","dark"),t(!0))}},f=()=>{const e=r(),[t]=a.useState(e==="Android"||e==="IOS");return t};export{p as a,f as b,k as u};
