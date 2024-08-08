const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/src-controller-CRUDFirestore.js-BtBBhgEb.js","assets/pnpm-react-syntax-highlighter@15.5.0_react@18.3.1--DZvnRHEN.js","assets/pnpm-react@18.3.1--FUz9cRTN.js","assets/pnpm-@babel_runtime@7.25.0--CyFcdsuD.js","assets/pnpm-refractor@3.6.0--CXVGWoH1.js","assets/pnpm-hastscript@6.0.0--DUsoOKIx.js","assets/pnpm-property-information@5.6.0--BaUulPWZ.js","assets/pnpm-xtend@4.0.2--CeaPpq3n.js","assets/pnpm-space-separated-tokens@1.1.5--CMBzgJJ4.js","assets/pnpm-comma-separated-tokens@1.0.8--DgTuumFk.js","assets/pnpm-hast-util-parse-selector@2.2.5--Cqsfuk9Y.js","assets/pnpm-parse-entities@2.0.0--Cz6FRF7l.js","assets/pnpm-character-entities-legacy@1.1.4--BW45UVHJ.js","assets/pnpm-character-reference-invalid@1.1.4--AKrgFUtc.js","assets/pnpm-is-decimal@1.0.4--Dxw1ZLrO.js","assets/pnpm-is-hexadecimal@1.0.4--Bc6OsCR9.js","assets/pnpm-is-alphanumerical@1.0.4--VupdbT_8.js","assets/pnpm-is-alphabetical@1.0.4--BlcIJk-E.js","assets/pnpm-prismjs@1.27.0--l2mXeTxv.js","assets/src-controller-serverSource.js-CvKvoeyF.js","assets/src-lib-myUtils.js-NvvN3nCa.js"])))=>i.map(i=>d[i]);
import{_ as f}from"./pnpm-react-syntax-highlighter@15.5.0_react@18.3.1--DZvnRHEN.js";import{u as r}from"./pnpm-zustand@4.5.4_@types_react@18.3.3_react@18.3.1--EhdkWrrw.js";import{u as I}from"./src-store-appStore.js-CAdzJ0y8.js";import{u,f as H,s as S}from"./src-store-useChatsStore.js-Da3DW-7L.js";import{u as _}from"./src-hooks-useOnlineStatus.jsx-6CQSTZAH.js";import{u as A}from"./src-store-useSettingsStore.js-DcbE8_Af.js";const g=()=>{const[o,a,l,s]=u(r(e=>[e.setHoldChats,e.stillHold,e.setStillHold,e.setTriggerClearHolding]));return()=>{if(a)l(!1),o([]),s();else return}},y=({chat:o,holding:a,setHolding:l})=>{const[s,i,e,t]=u(r(c=>[c.holdChats,c.setHoldChats,c.stillHold,c.setStillHold]));let d;const n=()=>{d&&!e&&(t(!0),S(!0),i([...s,o]),l(!0)),d=!1};return{handleHoldChatStart:()=>{e||(d=!0,setTimeout(()=>{n()},1e3))},handleHoldChatEnd:()=>{d=!1},handleClickHoldChat:()=>{if(e)a&&!H&&(l(!1),i([...s].filter(c=>c.time!==o.time)),s.length===1&&t(!1)),a||(l(!0),i([...s,o])),S(!1);else return}}},P=()=>{const[o,a]=u(r(t=>[t.chats,t.setChats])),[l]=I(r(t=>[t.userId])),[s]=u(r(t=>[t.holdChats])),i=g();return async()=>{let t=o.slice();for(let n=0;n<s.length;n++)t=t.filter(C=>C.time!==s[n].time);const{deleteSomeChatsInFirestore:d}=await f(async()=>{const{deleteSomeChatsInFirestore:n}=await import("./src-controller-CRUDFirestore.js-BtBBhgEb.js");return{deleteSomeChatsInFirestore:n}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]));d(l,t,s),a(t),i()}},D=()=>{const o=_(),[a]=I(r(e=>[e.userId])),[l,s]=u(r(e=>[e.chats,e.setChats]));return async()=>{const{deleteAllChatsInFirestore:e}=await f(async()=>{const{deleteAllChatsInFirestore:t}=await import("./src-controller-CRUDFirestore.js-BtBBhgEb.js");return{deleteAllChatsInFirestore:t}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]));o&&e(a,l),s([])}},L=()=>{const[o,a,l]=I(r(e=>[e.userId,e.setUserId,e.setLoadingMessages])),[s]=u(r(e=>[e.setChats]));return async()=>{try{const{addNewUserToFirestoreIfNotExists:t,uploadSeenHistory:d}=await f(async()=>{const{addNewUserToFirestoreIfNotExists:m,uploadSeenHistory:c}=await import("./src-controller-CRUDFirestore.js-BtBBhgEb.js");return{addNewUserToFirestoreIfNotExists:m,uploadSeenHistory:c}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20])),{getAllChatsFromFirestore:n}=await f(async()=>{const{getAllChatsFromFirestore:m}=await import("./src-controller-CRUDFirestore.js-BtBBhgEb.js");return{getAllChatsFromFirestore:m}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20])),h=await t();localStorage.setItem("senAi-userId",h),a(h);const[C]=await Promise.all([n(h),d(h)]);s(C),l(!1)}catch(t){console.log("An error occured : ",t)}localStorage.getItem("senAi-userId")===o||a(localStorage.getItem("senAi-userId"))}},U=()=>{const o=g();return l=>{l.keyCode===27&&o()}},M=()=>{const[o,a]=A(r(s=>[s.darkMode,s.setDarkMode]));return()=>{o?(localStorage.setItem("senAi-theme","light"),a(!1)):(localStorage.setItem("senAi-theme","dark"),a(!0))}};export{M as a,D as b,P as c,y as d,L as e,U as f,g as u};