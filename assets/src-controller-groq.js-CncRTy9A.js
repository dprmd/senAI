import{fetchJson as r,filterModels as i}from"./src-lib-myUtils.js-B2cOH3lS.js";import{l as a,m as c,n as d}from"./src-controller-serverSource.js-BcBVzHki.js";const g=async()=>{const t=localStorage.getItem("senAi-user"),e=await r(a,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({apiKeyIndex:t||0})});if(e.status===200)return i(e.models)},m=async(t,s,e)=>{const n=localStorage.getItem("senAi-user"),o=await r(c,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({apiKeyIndex:n||0,message:t,model:s,systemInstruction:e})});if(o.status===200)return o.reply;if(o.status===500)return o.error.error.error.message},f=async t=>{const e=await(await fetch(d,{method:"POST",body:t})).json();if(e.status===200)return e.text;if(e.status===500)return e.error};export{g as getGroqModels,m as getGroqReply,f as getGroqTranscription};
