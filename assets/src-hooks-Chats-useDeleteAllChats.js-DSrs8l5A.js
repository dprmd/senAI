const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/src-controller-CRUDFirestore.js-C93yip-y.js","assets/pnpm-react-syntax-highlighter@15.5.0_react@18.3.1--DZvnRHEN.js","assets/pnpm-react@18.3.1--FUz9cRTN.js","assets/pnpm-@babel_runtime@7.25.0--CyFcdsuD.js","assets/pnpm-refractor@3.6.0--CXVGWoH1.js","assets/pnpm-hastscript@6.0.0--DUsoOKIx.js","assets/pnpm-property-information@5.6.0--BaUulPWZ.js","assets/pnpm-xtend@4.0.2--CeaPpq3n.js","assets/pnpm-space-separated-tokens@1.1.5--CMBzgJJ4.js","assets/pnpm-comma-separated-tokens@1.0.8--DgTuumFk.js","assets/pnpm-hast-util-parse-selector@2.2.5--Cqsfuk9Y.js","assets/pnpm-parse-entities@2.0.0--Cz6FRF7l.js","assets/pnpm-character-entities-legacy@1.1.4--BW45UVHJ.js","assets/pnpm-character-reference-invalid@1.1.4--AKrgFUtc.js","assets/pnpm-is-decimal@1.0.4--Dxw1ZLrO.js","assets/pnpm-is-hexadecimal@1.0.4--Bc6OsCR9.js","assets/pnpm-is-alphanumerical@1.0.4--VupdbT_8.js","assets/pnpm-is-alphabetical@1.0.4--BlcIJk-E.js","assets/pnpm-prismjs@1.27.0--l2mXeTxv.js","assets/src-components-ui-use-toast.js-w7cDmHIs.js","assets/pnpm-i18next@23.12.2--B7JNKktp.js","assets/src-lib-myUtils.js-B3UxZQ32.js","assets/src-controller-serverSource.js-CoR-J6Fc.js"])))=>i.map(i=>d[i]);
import{_ as u}from"./pnpm-react-syntax-highlighter@15.5.0_react@18.3.1--DZvnRHEN.js";import{u as i}from"./src-store-appStore.js-DVH2ouBA.js";import{u as h}from"./src-store-useChatsStore.js-D4_VXnQ2.js";import{u as e}from"./pnpm-zustand@4.5.4_@types_react@18.3.3_react@18.3.1--EhdkWrrw.js";import{u as m}from"./src-hooks-useOnlineStatus.js-6CQSTZAH.js";const f=()=>{const s=m(),[o]=i(e(t=>[t.userId])),[r,a,l]=h(e(t=>[t.chats,t.setChats,t.setChatsMemory]));return async()=>{const{deleteAllChatsInFirestore:t}=await u(async()=>{const{deleteAllChatsInFirestore:n}=await import("./src-controller-CRUDFirestore.js-C93yip-y.js");return{deleteAllChatsInFirestore:n}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]));s&&t(o,r),a([]),l([])}};export{f as u};
