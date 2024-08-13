import{j as e}from"./pnpm-react@18.3.1--FUz9cRTN.js";import{u as l}from"./pnpm-zustand@4.5.4_@types_react@18.3.3_react@18.3.1--EhdkWrrw.js";import{u as m}from"./src-store-appStore.js-CeccZLF4.js";import{u as x}from"./src-store-useSettingsStore.js-DBU6w3vm.js";import{u}from"./src-hooks-useOnlineStatus.jsx-6CQSTZAH.js";import{getAge as h}from"./src-lib-generateTime.js-DFXwsD9v.js";import{u as f}from"./pnpm-react-i18next@15.0.1_i18next@23.12.2_react-dom@18.3.1_react@18.3.1__react@18.3.1--C-fP4VmU.js";const g="https://dprmd.github.io/senAi",j="senai_client",b="6.5.24",w="module",y={dev:"vite",build:"npx prettier --write . && rm -rf dist && vite build",deploy:"gh-pages -d dist -r https://github.com/dprmd/senAi",lint:"eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",preview:"vite preview"},v={"@radix-ui/react-alert-dialog":"^1.1.1","@radix-ui/react-checkbox":"^1.1.1","@radix-ui/react-dropdown-menu":"^2.1.1","@radix-ui/react-label":"^2.1.0","@radix-ui/react-radio-group":"^1.2.0","@radix-ui/react-select":"^2.1.1","@radix-ui/react-slot":"^1.1.0","@radix-ui/react-switch":"^1.1.0","@radix-ui/react-toast":"^1.2.1","browser-image-compression":"^2.0.2","class-variance-authority":"^0.7.0",clsx:"^2.1.1","framer-motion":"^11.3.22",i18next:"^23.12.2","input-otp":"^1.2.4","lucide-react":"^0.412.0",prettier:"^3.3.3","prettier-plugin-tailwindcss":"^0.6.5",react:"^18.3.1","react-dom":"^18.3.1","react-i18next":"^15.0.1","react-image-crop":"^11.0.6","react-intersection-observer":"^9.13.0","react-markdown":"^9.0.1","react-router-dom":"^6.26.0","react-syntax-highlighter":"^15.5.0","rehype-raw":"^7.0.0","remark-gfm":"^4.0.0","tailwind-merge":"^2.4.0","tailwindcss-animate":"^1.0.7",zustand:"^4.5.4"},S={"@axe-core/react":"^4.9.1","@types/node":"^20.14.14","@types/react":"^18.3.3","@types/react-dom":"^18.3.0","@vitejs/plugin-react-swc":"^3.7.0",autoprefixer:"^10.4.20",eslint:"^8.57.0","eslint-plugin-jsx-a11y":"^6.9.0","eslint-plugin-react":"^7.35.0","eslint-plugin-react-hooks":"^4.6.2","eslint-plugin-react-refresh":"^0.4.9",postcss:"^8.4.41",tailwindcss:"^3.4.7",vite:"^5.3.5","vite-plugin-pwa":"^0.20.1"},N={homepage:g,name:j,private:!0,version:b,type:w,scripts:y,dependencies:v,devDependencies:S},k="min-w-[100vw] disable-zoom fixed top-0 bottom-0 left-0 right-0 bg-slate-100 dark:bg-slate-800 bg-opacity-90 dark:bg-opacity-90 backdrop-blur-sm md:flex md:items-center",i="font-poppins block my-[2px] text-center text-lg font-bold",n="font-poppins block my-[2px] text-center mb-2 text-sm text-slate-700 dark:text-slate-400",q=()=>{const[o,r,c]=m(l(t=>[t.senTyping,t.showSenInfo,t.setShowSenInfo])),[d]=x(l(t=>[t.model])),p=u(),{t:s}=f(),a=()=>{c(!r)};return e.jsxs(e.Fragment,{children:[e.jsxs("button",{className:"ml-3 inline-block flex flex-col justify-center pr-10",onClick:a,children:[e.jsx("h1",{className:"text-left font-bold",children:"Sen"}),o?e.jsx("span",{className:"inline-block text-left font-poppins text-sm duration-500",children:s("typing")}):e.jsx("span",{className:"inline-block text-left font-poppins text-sm duration-500",children:p?"online":"offline"})]}),r&&e.jsx("button",{className:k,onClick:a,children:e.jsxs("div",{className:"flex flex-col items-center justify-center md:flex-1 md:flex-row md:justify-start md:px-20",children:[e.jsx("img",{loading:"lazy",src:"img/sen.jpg",alt:"sen ai",className:"my-5 h-fit w-[40%] rounded-full sm:w-[30%] md:w-[30%]"}),e.jsxs("ul",{className:"md:ml-20",children:[e.jsxs("li",{children:[e.jsx("span",{className:i,children:s("senAi_name")}),e.jsx("span",{className:n,children:"Sen Ai"})]}),e.jsxs("li",{children:[e.jsx("span",{className:i,children:s("senAi_age")}),e.jsxs("span",{className:n,children:[h("July",27,2006,6,6,6)," ",s("senAi_age_format")]})]}),e.jsxs("li",{children:[e.jsx("span",{className:i,children:s("senAi_ai_source")}),e.jsx("span",{className:n,children:"Groq Ai"})]}),e.jsxs("li",{children:[e.jsx("span",{className:i,children:s("senAi_model")}),e.jsx("span",{className:n,children:d})]}),e.jsxs("li",{children:[e.jsx("span",{className:i,children:s("senAi_version")}),e.jsx("span",{className:n,children:N.version})]})]})]})})]})};export{q as S,N as s};
