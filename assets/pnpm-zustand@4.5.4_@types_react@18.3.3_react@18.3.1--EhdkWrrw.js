import{R as d}from"./pnpm-react@18.3.1--FUz9cRTN.js";import{u as g}from"./pnpm-use-sync-external-store@1.2.0_react@18.3.1--Cv5f-_WK.js";function m(e,t){if(Object.is(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(const[n,r]of e)if(!Object.is(r,t.get(n)))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(const n of e)if(!t.has(n))return!1;return!0}const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!1;for(const n of s)if(!Object.prototype.hasOwnProperty.call(t,n)||!Object.is(e[n],t[n]))return!1;return!0}const{useRef:h}=d;function k(e){const t=h();return s=>{const n=e(s);return m(t.current,n)?t.current:t.current=n}}var v={BASE_URL:"/senAi/",DEV:!1,MODE:"production",PROD:!0,SSR:!1};const a=e=>{let t;const s=new Set,n=(o,c)=>{const i=typeof o=="function"?o(t):o;if(!Object.is(i,t)){const y=t;t=c??(typeof i!="object"||i===null)?i:Object.assign({},t,i),s.forEach(E=>E(t,y))}},r=()=>t,u={setState:n,getState:r,getInitialState:()=>S,subscribe:o=>(s.add(o),()=>s.delete(o)),destroy:()=>{(v?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),s.clear()}},S=t=e(n,r,u);return u},O=e=>e?a(e):a;var p={BASE_URL:"/senAi/",DEV:!1,MODE:"production",PROD:!0,SSR:!1};const{useDebugValue:D}=d,{useSyncExternalStoreWithSelector:R}=g;let f=!1;const b=e=>e;function w(e,t=b,s){(p?"production":void 0)!=="production"&&s&&!f&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),f=!0);const n=R(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,s);return D(n),n}const l=e=>{(p?"production":void 0)!=="production"&&typeof e!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const t=typeof e=="function"?O(e):e,s=(n,r)=>w(t,n,r);return Object.assign(s,t),s},T=e=>e?l(e):l;export{T as c,k as u};