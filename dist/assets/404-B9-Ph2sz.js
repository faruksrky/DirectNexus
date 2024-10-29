import{j as a,B as u,l as m,e as y,f as h,g as f,A as j,h as g,L as v,p as I,R as d,S as L,i as S,M as C,m as l,T as x,P as w,H as A,C as B}from"./index-BalJt-EG.js";import{B as O}from"./Button-CBMUwZRd.js";const o=t=>{const n=(t==null?void 0:t.durationIn)||.64,i=(t==null?void 0:t.easeIn)||[.43,.13,.23,.96];return{duration:n,ease:i}},c=t=>{const n=(t==null?void 0:t.durationOut)||.48,i=(t==null?void 0:t.easeOut)||[.43,.13,.23,.96];return{duration:n,ease:i}},r=t=>{const n=t==null?void 0:t.durationIn,i=t==null?void 0:t.durationOut,e=t==null?void 0:t.easeIn,s=t==null?void 0:t.easeOut;return{in:{initial:{},animate:{scale:[.3,1.1,.9,1.03,.97,1],opacity:[0,1,1,1,1,1],transition:o({durationIn:n,easeIn:e})},exit:{scale:[.9,1.1,.3],opacity:[1,1,0]}},inUp:{initial:{},animate:{y:[720,-24,12,-4,0],scaleY:[4,.9,.95,.985,1],opacity:[0,1,1,1,1],transition:{...o({durationIn:n,easeIn:e})}},exit:{y:[12,-24,720],scaleY:[.985,.9,3],opacity:[1,1,0],transition:c({durationOut:i,easeOut:s})}},inDown:{initial:{},animate:{y:[-720,24,-12,4,0],scaleY:[4,.9,.95,.985,1],opacity:[0,1,1,1,1],transition:o({durationIn:n,easeIn:e})},exit:{y:[-12,24,-720],scaleY:[.985,.9,3],opacity:[1,1,0],transition:c({durationOut:i,easeOut:s})}},inLeft:{initial:{},animate:{x:[-720,24,-12,4,0],scaleX:[3,1,.98,.995,1],opacity:[0,1,1,1,1],transition:o({durationIn:n,easeIn:e})},exit:{x:[0,24,-720],scaleX:[1,.9,2],opacity:[1,1,0],transition:c({durationOut:i,easeOut:s})}},inRight:{initial:{},animate:{x:[720,-24,12,-4,0],scaleX:[3,1,.98,.995,1],opacity:[0,1,1,1,1],transition:o({durationIn:n,easeIn:e})},exit:{x:[0,-24,720],scaleX:[1,.9,2],opacity:[1,1,0],transition:c({durationOut:i,easeOut:s})}},out:{animate:{scale:[.9,1.1,.3],opacity:[1,1,0]}},outUp:{animate:{y:[-12,24,-720],scaleY:[.985,.9,3],opacity:[1,1,0]}},outDown:{animate:{y:[12,-24,720],scaleY:[.985,.9,3],opacity:[1,1,0]}},outLeft:{animate:{x:[0,24,-720],scaleX:[1,.9,2],opacity:[1,1,0]}},outRight:{animate:{x:[0,-24,720],scaleX:[1,.9,2],opacity:[1,1,0]}}}};function R({children:t,sx:n,...i}){return a.jsx(u,{component:"main",className:m.main,sx:{display:"flex",flex:"1 1 auto",flexDirection:"column",...n},...i,children:t})}function Y({sx:t,layoutQuery:n,children:i,...e}){const s=y();return a.jsx(u,{className:m.content,sx:{width:1,mx:"auto",display:"flex",flex:"1 1 auto",textAlign:"center",flexDirection:"column",p:s.spacing(3,2,10,2),maxWidth:"var(--layout-simple-content-compact-width)",[s.breakpoints.up(n)]:{justifyContent:"center",p:s.spacing(10,0,10,0)},...t},...e,children:i})}function N({sx:t,children:n,header:i,content:e}){const s="md";return a.jsx(h,{headerSection:a.jsx(f,{layoutQuery:s,slotProps:{container:{maxWidth:!1}},sx:i==null?void 0:i.sx,slots:{topArea:a.jsx(j,{severity:"info",sx:{display:"none",borderRadius:0},children:"This is an info Alert."}),leftArea:a.jsx(g,{}),rightArea:a.jsxs(u,{display:"flex",alignItems:"center",gap:{xs:1,sm:1.5},children:[a.jsx(v,{href:I.faqs,component:d,color:"inherit",sx:{typography:"subtitle2"},children:"Yardım"}),a.jsx(L,{})]})}}),footerSection:null,cssVars:{"--layout-simple-content-compact-width":"448px"},sx:t,children:a.jsx(R,{children:e!=null&&e.compact?a.jsx(Y,{layoutQuery:s,children:n}):n})})}function T(){return a.jsx(N,{content:{compact:!0},children:a.jsxs(S,{component:C,children:[a.jsx(l.div,{variants:r().in,children:a.jsx(x,{variant:"h3",sx:{mb:2},children:"Sorry, page not found!"})}),a.jsx(l.div,{variants:r().in,children:a.jsx(x,{sx:{color:"text.secondary"},children:"Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be sure to check your spelling."})}),a.jsx(l.div,{variants:r().in,children:a.jsx(w,{sx:{my:{xs:5,sm:10}}})}),a.jsx(O,{component:d,href:"/",size:"large",variant:"contained",children:"Go to home"})]})})}const X={title:`404 page not found! | Error - ${B.appName}`};function b(){return a.jsxs(a.Fragment,{children:[a.jsx(A,{children:a.jsxs("title",{children:[" ",X.title]})}),a.jsx(T,{})]})}export{b as default};
