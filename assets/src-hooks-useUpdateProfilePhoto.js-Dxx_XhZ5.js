const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/src-controller-CRUDFirestore.js-xeEZYl9J.js","assets/pnpm-react-syntax-highlighter@15.5.0_react@18.3.1--DZvnRHEN.js","assets/pnpm-react@18.3.1--FUz9cRTN.js","assets/pnpm-@babel_runtime@7.25.0--CyFcdsuD.js","assets/pnpm-refractor@3.6.0--CXVGWoH1.js","assets/pnpm-hastscript@6.0.0--DUsoOKIx.js","assets/pnpm-property-information@5.6.0--BaUulPWZ.js","assets/pnpm-xtend@4.0.2--CeaPpq3n.js","assets/pnpm-space-separated-tokens@1.1.5--CMBzgJJ4.js","assets/pnpm-comma-separated-tokens@1.0.8--DgTuumFk.js","assets/pnpm-hast-util-parse-selector@2.2.5--Cqsfuk9Y.js","assets/pnpm-parse-entities@2.0.0--Cz6FRF7l.js","assets/pnpm-character-entities-legacy@1.1.4--BW45UVHJ.js","assets/pnpm-character-reference-invalid@1.1.4--AKrgFUtc.js","assets/pnpm-is-decimal@1.0.4--Dxw1ZLrO.js","assets/pnpm-is-hexadecimal@1.0.4--Bc6OsCR9.js","assets/pnpm-is-alphanumerical@1.0.4--VupdbT_8.js","assets/pnpm-is-alphabetical@1.0.4--BlcIJk-E.js","assets/pnpm-prismjs@1.27.0--l2mXeTxv.js","assets/src-components-ui-use-toast.js-w7cDmHIs.js","assets/pnpm-i18next@23.12.2--B7JNKktp.js","assets/src-lib-myUtils.js-CM7Pyx7U.js","assets/src-controller-serverSource.js-CoR-J6Fc.js"])))=>i.map(i=>d[i]);
import{_ as v}from"./pnpm-react-syntax-highlighter@15.5.0_react@18.3.1--DZvnRHEN.js";import{t as n}from"./src-components-ui-use-toast.js-w7cDmHIs.js";import{rmLS as z}from"./src-lib-myUtils.js-CM7Pyx7U.js";import{u as I}from"./src-store-appStore.js-PIoWTcuH.js";import{u as N}from"./src-store-useSettingsStore.js-BYM2pdyF.js";import{i as C}from"./pnpm-browser-image-compression@2.0.2--BzWLnoYn.js";import{u as c}from"./pnpm-zustand@4.5.4_@types_react@18.3.3_react@18.3.1--EhdkWrrw.js";import{u as x}from"./pnpm-react-i18next@15.0.1_i18next@23.12.2_react-dom@18.3.1_react@18.3.1__react@18.3.1--C-fP4VmU.js";import{a as y}from"./pnpm-react-router@6.26.0_react@18.3.1--BYg1aRBq.js";const T=()=>{const[m]=I(c(e=>[e.userId])),[d,f,g,h,l,p]=N(c(e=>[e.setProfilePhotoUrl,e.setCustomProfilePhotoUrl,e.customPPFileName,e.setCustomPPFileName,e.setLoadingCompressImage,e.setLoadingUploadImage])),{t:i}=x(),_=y(),F=async e=>{if(e.size/1024<200)return e;{l(!0);const a={maxSizeMB:1,maxWidthOrHeight:1024,useWebWorker:!0};let r=!0,s=e;try{for(;r;){const o=await C(s,a);if(s=o,o.size/1024>200){r=!0;continue}else{r=!1;break}}}catch(o){n({description:i("error_compressing_image"),duration:3e3,variant:"destructive"}),console.log(o)}return l(!1),s}};return async e=>{e.toBlob(async u=>{const t=new FormData,a=await F(u);t.append("image",a,`${m}-profilePhotoUpdate.jpg`),t.append("oldPPFileName",JSON.stringify({oldPPFileName:g})),console.log(t);const{updateProfilePhoto:r,updatePPUrlInFirestore:s}=await v(async()=>{const{updateProfilePhoto:U,updatePPUrlInFirestore:w}=await import("./src-controller-CRUDFirestore.js-xeEZYl9J.js");return{updateProfilePhoto:U,updatePPUrlInFirestore:w}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]));p(!0);const{PPFileName:o,newPPUrl:P}=await r(t),S=await s(m,P,o,!0);p(!1),S?(n({description:i("update_pp_success"),duration:3e3}),d(P),f(!0),h(o),z("senAi-love")):n({description:i("update_pp_failed"),variant:"destructive",duration:3e3}),_("/settings")},"image/jpeg")}};export{T as u};
