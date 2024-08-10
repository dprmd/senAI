import{r as t}from"./pnpm-react@18.3.1--FUz9cRTN.js";var Pe=Object.defineProperty,Me=Object.defineProperties,Ce=Object.getOwnPropertyDescriptors,K=Object.getOwnPropertySymbols,pe=Object.prototype.hasOwnProperty,de=Object.prototype.propertyIsEnumerable,se=(r,l,o)=>l in r?Pe(r,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[l]=o,xe=(r,l)=>{for(var o in l||(l={}))pe.call(l,o)&&se(r,o,l[o]);if(K)for(var o of K(l))de.call(l,o)&&se(r,o,l[o]);return r},ke=(r,l)=>Me(r,Ce(l)),Re=(r,l)=>{var o={};for(var s in r)pe.call(r,s)&&l.indexOf(s)<0&&(o[s]=r[s]);if(r!=null&&K)for(var s of K(r))l.indexOf(s)<0&&de.call(r,s)&&(o[s]=r[s]);return o},De="^\\d+$";function je(r){let l=setTimeout(r,0),o=setTimeout(r,10),s=setTimeout(r,50);return[l,o,s]}function We(r){let l=t.useRef();return t.useEffect(()=>{l.current=r}),l.current}var Be=18,me=40,Oe=`${me}px`,Te=["[data-lastpass-icon-root]","com-1password-button","[data-dashlanecreated]",'[style$="2147483647 !important;"]'].join(",");function Ae({containerRef:r,inputRef:l,pushPasswordManagerStrategy:o,isFocused:s}){let W=t.useRef({done:!1,refocused:!1}),[c,N]=t.useState(!1),[S,z]=t.useState(!1),[B,V]=t.useState(!1),Q=t.useMemo(()=>o==="none"?!1:(o==="increase-width"||o==="experimental-no-flickering")&&c&&S,[c,S,o]),M=t.useCallback(()=>{let f=r.current,d=l.current;if(!f||!d||B||o==="none")return;let a=f,b=a.getBoundingClientRect().left+a.offsetWidth,O=a.getBoundingClientRect().top+a.offsetHeight/2,q=b-Be,U=O;if(!(document.querySelectorAll(Te).length===0&&document.elementFromPoint(q,U)===f)&&(N(!0),V(!0),!W.current.refocused&&document.activeElement===d)){let I=[d.selectionStart,d.selectionEnd];d.blur(),d.focus(),d.setSelectionRange(I[0],I[1]),W.current.refocused=!0}},[r,l,B,o]);return t.useEffect(()=>{let f=r.current;if(!f||o==="none")return;function d(){let b=window.innerWidth-f.getBoundingClientRect().right;z(b>=me)}d();let a=setInterval(d,1e3);return()=>{clearInterval(a)}},[r,o]),t.useEffect(()=>{let f=s||document.activeElement===l.current;if(o==="none"||!f)return;let d=setTimeout(M,0),a=setTimeout(M,2e3),b=setTimeout(M,5e3),O=setTimeout(()=>{V(!0)},6e3);return()=>{clearTimeout(d),clearTimeout(a),clearTimeout(b),clearTimeout(O)}},[l,s,o,M]),{hasPWMBadge:c,willPushPWMBadge:Q,PWM_BADGE_SPACE_WIDTH:Oe}}var _e=t.createContext({}),Ie=t.forwardRef((r,l)=>{var o=r,{value:s,onChange:W,maxLength:c,textAlign:N="left",pattern:S=De,inputMode:z="numeric",onComplete:B,pushPasswordManagerStrategy:V="increase-width",containerClassName:Q,noScriptCSSFallback:M=Fe,render:f,children:d}=o,a=Re(o,["value","onChange","maxLength","textAlign","pattern","inputMode","onComplete","pushPasswordManagerStrategy","containerClassName","noScriptCSSFallback","render","children"]),b,O,q,U,I;let[fe,ve]=t.useState(typeof a.defaultValue=="string"?a.defaultValue:""),p=s??fe,C=We(p),F=t.useCallback(e=>{W==null||W(e),ve(e)},[W]),h=t.useMemo(()=>S?typeof S=="string"?new RegExp(S):S:null,[S]),u=t.useRef(null),X=t.useRef(null),Y=t.useRef({value:p,onChange:F,isIOS:typeof window<"u"&&((O=(b=window==null?void 0:window.CSS)==null?void 0:b.supports)==null?void 0:O.call(b,"-webkit-touch-callout","none"))}),J=t.useRef({prev:[(q=u.current)==null?void 0:q.selectionStart,(U=u.current)==null?void 0:U.selectionEnd,(I=u.current)==null?void 0:I.selectionDirection]});t.useImperativeHandle(l,()=>u.current,[]),t.useEffect(()=>{let e=u.current,n=X.current;if(!e||!n)return;Y.current.value!==e.value&&Y.current.onChange(e.value),J.current.prev=[e.selectionStart,e.selectionEnd,e.selectionDirection];function m(){if(document.activeElement!==e){L(null),$(null);return}let i=e.selectionStart,g=e.selectionEnd,E=e.selectionDirection,k=e.maxLength,R=e.value,_=J.current.prev,y=-1,P=-1,D;if(R.length!==0&&i!==null&&g!==null){let Se=i===g,Ee=i===R.length&&R.length<k;if(Se&&!Ee){let j=i;if(j===0)y=0,P=1,D="forward";else if(j===k)y=j-1,P=j,D="backward";else if(k>1&&R.length>1){let te=0;if(_[0]!==null&&_[1]!==null){D=j<_[1]?"backward":"forward";let ye=_[0]===_[1]&&_[0]<k;D==="backward"&&!ye&&(te=-1)}y=te+j,P=te+j+1}}y!==-1&&P!==-1&&y!==P&&u.current.setSelectionRange(y,P,D)}let ue=y!==-1?y:i,ce=P!==-1?P:g,we=D??E;L(ue),$(ce),J.current.prev=[ue,ce,we]}if(document.addEventListener("selectionchange",m,{capture:!0}),m(),document.activeElement===e&&Z(!0),!document.getElementById("input-otp-style")){let i=document.createElement("style");if(i.id="input-otp-style",document.head.appendChild(i),i.sheet){let g="background: transparent !important; color: transparent !important; border-color: transparent !important; opacity: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; -webkit-text-fill-color: transparent !important;";G(i.sheet,"[data-input-otp]::selection { background: transparent !important; color: transparent !important; }"),G(i.sheet,`[data-input-otp]:autofill { ${g} }`),G(i.sheet,`[data-input-otp]:-webkit-autofill { ${g} }`),G(i.sheet,"@supports (-webkit-touch-callout: none) { [data-input-otp] { letter-spacing: -.6em !important; font-weight: 100 !important; font-stretch: ultra-condensed; font-optical-sizing: none !important; left: -1px !important; right: 1px !important; } }"),G(i.sheet,"[data-input-otp] + * { pointer-events: all !important; }")}}let v=()=>{n&&n.style.setProperty("--root-height",`${e.clientHeight}px`)};v();let w=new ResizeObserver(v);return w.observe(e),()=>{document.removeEventListener("selectionchange",m,{capture:!0}),w.disconnect()}},[]);let[ne,re]=t.useState(!1),[H,Z]=t.useState(!1),[x,L]=t.useState(null),[T,$]=t.useState(null);t.useEffect(()=>{je(()=>{var e,n,m,v;(e=u.current)==null||e.dispatchEvent(new Event("input"));let w=(n=u.current)==null?void 0:n.selectionStart,i=(m=u.current)==null?void 0:m.selectionEnd,g=(v=u.current)==null?void 0:v.selectionDirection;w!==null&&i!==null&&(L(w),$(i),J.current.prev=[w,i,g])})},[p,H]),t.useEffect(()=>{C!==void 0&&p!==C&&C.length<c&&p.length===c&&(B==null||B(p))},[c,B,C,p]);let A=Ae({containerRef:X,inputRef:u,pushPasswordManagerStrategy:V,isFocused:H}),le=t.useCallback(e=>{let n=e.currentTarget.value.slice(0,c);if(n.length>0&&h&&!h.test(n)){e.preventDefault();return}typeof C=="string"&&n.length<C.length&&document.dispatchEvent(new Event("selectionchange")),F(n)},[c,F,C,h]),oe=t.useCallback(()=>{var e;if(u.current){let n=Math.min(u.current.value.length,c-1),m=u.current.value.length;(e=u.current)==null||e.setSelectionRange(n,m),L(n),$(m)}Z(!0)},[c]),ae=t.useCallback(e=>{var n,m;let v=u.current;if(!Y.current.isIOS||!e.clipboardData||!v)return;let w=e.clipboardData.getData("text/plain");e.preventDefault();let i=(n=u.current)==null?void 0:n.selectionStart,g=(m=u.current)==null?void 0:m.selectionEnd,E=(i!==g?p.slice(0,i)+w+p.slice(g):p.slice(0,i)+w+p.slice(i)).slice(0,c);if(E.length>0&&h&&!h.test(E))return;v.value=E,F(E);let k=Math.min(E.length,c-1),R=E.length;v.setSelectionRange(k,R),L(k),$(R)},[c,F,h,p]),ge=t.useMemo(()=>({position:"relative",cursor:a.disabled?"default":"text",userSelect:"none",WebkitUserSelect:"none",pointerEvents:"none"}),[a.disabled]),ie=t.useMemo(()=>({position:"absolute",inset:0,width:A.willPushPWMBadge?`calc(100% + ${A.PWM_BADGE_SPACE_WIDTH})`:"100%",clipPath:A.willPushPWMBadge?`inset(0 ${A.PWM_BADGE_SPACE_WIDTH} 0 0)`:void 0,height:"100%",display:"flex",textAlign:N,opacity:"1",color:"transparent",pointerEvents:"all",background:"transparent",caretColor:"transparent",border:"0 solid transparent",outline:"0 solid transparent",boxShadow:"none",lineHeight:"1",letterSpacing:"-.5em",fontSize:"var(--root-height)",fontFamily:"monospace",fontVariantNumeric:"tabular-nums"}),[A.PWM_BADGE_SPACE_WIDTH,A.willPushPWMBadge,N]),he=t.useMemo(()=>t.createElement("input",ke(xe({autoComplete:a.autoComplete||"one-time-code"},a),{"data-input-otp":!0,"data-input-otp-mss":x,"data-input-otp-mse":T,inputMode:z,pattern:h==null?void 0:h.source,style:ie,maxLength:c,value:p,ref:u,onPaste:e=>{var n;ae(e),(n=a.onPaste)==null||n.call(a,e)},onChange:le,onMouseOver:e=>{var n;re(!0),(n=a.onMouseOver)==null||n.call(a,e)},onMouseLeave:e=>{var n;re(!1),(n=a.onMouseLeave)==null||n.call(a,e)},onFocus:e=>{var n;oe(),(n=a.onFocus)==null||n.call(a,e)},onBlur:e=>{var n;Z(!1),(n=a.onBlur)==null||n.call(a,e)}})),[le,oe,ae,z,ie,c,T,x,a,h==null?void 0:h.source,p]),ee=t.useMemo(()=>({slots:Array.from({length:c}).map((e,n)=>{let m=H&&x!==null&&T!==null&&(x===T&&n===x||n>=x&&n<T),v=p[n]!==void 0?p[n]:null;return{char:v,isActive:m,hasFakeCaret:m&&v===null}}),isFocused:H,isHovering:!a.disabled&&ne}),[H,ne,c,T,x,a.disabled,p]),be=t.useMemo(()=>f?f(ee):t.createElement(_e.Provider,{value:ee},d),[d,ee,f]);return t.createElement(t.Fragment,null,M!==null&&t.createElement("noscript",null,t.createElement("style",null,M)),t.createElement("div",{ref:X,"data-input-otp-container":!0,style:ge,className:Q},be,t.createElement("div",{style:{position:"absolute",inset:0,pointerEvents:"none"}},he)))});Ie.displayName="Input";function G(r,l){try{r.insertRule(l)}catch{console.error("input-otp could not insert CSS rule:",l)}}var Fe=`
[data-input-otp] {
  --nojs-bg: white !important;
  --nojs-fg: black !important;

  background-color: var(--nojs-bg) !important;
  color: var(--nojs-fg) !important;
  caret-color: var(--nojs-fg) !important;
  letter-spacing: .25em !important;
  text-align: center !important;
  border: 1px solid var(--nojs-fg) !important;
  border-radius: 4px !important;
  width: 100% !important;
}
@media (prefers-color-scheme: dark) {
  [data-input-otp] {
    --nojs-bg: black !important;
    --nojs-fg: white !important;
  }
}`;export{Ie as j,_e as x};