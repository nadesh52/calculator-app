(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[99],{72:(e,t,l)=>{Promise.resolve().then(l.bind(l,3654)),Promise.resolve().then(l.bind(l,2015)),Promise.resolve().then(l.bind(l,2e3))},2e3:(e,t,l)=>{"use strict";l.d(t,{PeopleProvider:()=>i,d:()=>a});var s=l(5155),n=l(2115);let r=(0,n.createContext)(void 0),i=e=>{let{children:t}=e,[l,i]=(0,n.useState)([]);return(0,s.jsx)(r.Provider,{value:{people:l,setPeople:i},children:t})},a=()=>{let e=(0,n.useContext)(r);return e||console.log("no usePeople"),e}},2015:(e,t,l)=>{"use strict";l.d(t,{OrderProvider:()=>i,S:()=>a});var s=l(5155),n=l(2115);let r=(0,n.createContext)(void 0),i=e=>{let{children:t}=e,[l,i]=(0,n.useState)([]);return(0,s.jsx)(r.Provider,{value:{order:l,setOrder:i},children:t})},a=()=>{let e=(0,n.useContext)(r);return e||console.log("no useOrder"),e}},3654:(e,t,l)=>{"use strict";l.d(t,{default:()=>f});var s=l(5155),n=l(2115),r=l(2e3);let i=()=>{var e;let{people:t,setPeople:l}=(0,r.d)(),[i,a]=(0,n.useState)(""),c=(0,n.useRef)(null),o=e=>{var t;if(e.preventDefault(),d)return;let s={id:i,name:i};l(e=>[...e,s]),a(""),null===(t=c.current)||void 0===t||t.focus()},d=!(null==i?void 0:i.trim())||(null===(e=t.filter(e=>{var t,l;return(null==e?void 0:null===(t=e.name.toLocaleLowerCase())||void 0===t?void 0:t.trim())===(null==i?void 0:null===(l=i.toLocaleLowerCase())||void 0===l?void 0:l.trim())}))||void 0===e?void 0:e.length)!==0;return(0,s.jsxs)("article",{className:"space-y-4 p-4",children:[(0,s.jsx)("p",{className:"text-lg font-medium",children:"Create"}),(0,s.jsxs)("div",{className:"flex justify-center gap-2",children:[(0,s.jsx)("input",{ref:c,type:"text",value:i,onChange:e=>a(e.target.value.trimStart()),placeholder:"enter name",className:"input input-bordered input-primary w-full",onKeyDown:e=>{"Enter"!==e.key||d||o(e)}}),(0,s.jsx)("button",{disabled:d,onClick:o,className:"btn btn-primary w-20 disabled:cursor-not-allowed",children:(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"})})})]}),(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[(0,s.jsx)("p",{className:"text-lg font-medium",children:"Created People"}),(0,s.jsx)("div",{className:"flex select-none items-center justify-end gap-2",children:(0,s.jsx)("button",{className:"btn btn-outline btn-error p-2",onClick:()=>{var e;l([]),null===(e=c.current)||void 0===e||e.focus()},children:"Clear"})})]}),(null==t?void 0:t.length)?(0,s.jsx)("table",{className:"table table-lg",children:(0,s.jsx)("tbody",{children:t.map(e=>(0,s.jsxs)("tr",{className:"hover",children:[(0,s.jsx)("td",{className:"w-full",children:e.name}),(0,s.jsx)("td",{children:(0,s.jsx)("button",{onMouseDown:e=>e.preventDefault(),onClick:()=>{l(t.filter(t=>t.name!==e.name))},children:(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6 text-error",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"})})})})]},e.id))})}):null]})},a=e=>{let{selectedPeople:t,peopleList:l}=e,{people:n}=(0,r.d)(),i=n.filter(e=>!(null==l?void 0:l.includes(e))),a=(e,l)=>{e.preventDefault(),t(l,"add")};return(0,s.jsx)("div",{children:(0,s.jsx)("ul",{className:"flex flex-wrap gap-4 p-2",children:null==i?void 0:i.map(e=>(0,s.jsx)("li",{children:(0,s.jsx)("button",{className:"btn btn-outline",onClick:t=>a(t,e),children:e.name})},e.id))})})};var c=l(2015);let o={price:0,quantity:1,people:[]},d=()=>{let{setOrder:e}=(0,c.S)(),{people:t}=(0,r.d)(),[l,i]=(0,n.useState)(o),d=t.filter(e=>{var t;return null==l?void 0:null===(t=l.people)||void 0===t?void 0:t.includes(e)}),m=e=>{let{name:t,value:s}=e.target,n=Math.floor(Date.now()*Math.random());if("name"!==t){let e=isNaN(s)?s:parseFloat(s);i({...l,id:n,[t]:e})}else i({...l,id:n,[t]:s})},u=(e,t)=>{e.preventDefault(),"increase"===t?i({...l,quantity:l.quantity+1}):"decrease"===t&&l.quantity>1&&i({...l,quantity:l.quantity-1})},p=e=>{i({...l,people:l.people.filter(t=>t.id!==e.id)})},x=l.quantity<=1;return(0,s.jsxs)("form",{onSubmit:t=>{t.preventDefault();let s=l.price*l.quantity,n=s/l.people.length,r={...l,total:s,price_per_people:n};e(e=>[...e,r]),i(o)},className:"space-y-4",children:[(0,s.jsx)("h2",{className:"text-lg font-medium",children:"Create"}),(0,s.jsxs)("label",{className:"block",children:[(0,s.jsx)("p",{className:"select-none",children:"Menu"}),(0,s.jsx)("input",{name:"name",type:"text",autoComplete:"off",required:!0,onChange:e=>m(e),value:l.name||"",className:"input input-bordered input-primary w-full"})]}),(0,s.jsxs)("label",{className:"relative block",children:[(0,s.jsx)("p",{className:"select-none",children:"Price"}),(0,s.jsx)("input",{name:"price",type:"number",autoComplete:"off",required:!0,onChange:e=>m(e),value:l.price||"",className:"peer input input-bordered input-primary w-full"}),(0,s.jsx)("p",{className:"pointer-events-none invisible absolute bottom-0 right-1 select-none border-l border-l-slate-400 px-2 peer-valid:visible peer-focus-visible:visible",children:"THB"})]}),(0,s.jsxs)("label",{className:"block",children:[(0,s.jsx)("p",{className:"select-none",children:"Quantity"}),(0,s.jsxs)("div",{className:"flex gap-4",children:[(0,s.jsx)("input",{name:"quantity",type:"number",autoComplete:"off",required:!0,onChange:e=>m(e),value:l.quantity||"",className:"input input-bordered input-primary order-1 w-full"}),(0,s.jsx)("button",{disabled:x,onClick:e=>u(e,"decrease"),className:"btn btn-primary order-2",children:(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1,stroke:"currentColor",className:"size-6",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5 12h14"})})}),(0,s.jsx)("button",{onClick:e=>u(e,"increase"),className:"btn btn-primary order-3",children:(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1,stroke:"currentColor",className:"size-6",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 4.5v15m7.5-7.5h-15"})})})]})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"select-none",children:"People in Order"}),(0,s.jsxs)("section",{children:[(0,s.jsx)(a,{selectedPeople:(e,t)=>{"add"!==t||l.people.includes(e.name)||i({...l,people:[...l.people,e]})},peopleList:d}),d.length?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("p",{children:"Selected"}),(0,s.jsx)("ul",{className:"flex flex-wrap gap-2 p-2",children:d.map(e=>(0,s.jsx)("li",{children:(0,s.jsx)("button",{onMouseDown:e=>e.preventDefault(),onClick:()=>p(e),className:"btn btn-success hover:btn-error",children:e.name})},e.id))})]}):null]})]}),(0,s.jsx)("button",{type:"submit",className:"btn btn-primary w-full",children:"Create Order"})]})},m=e=>{let{open:t,onClose:l,children:r}=e,i=(0,n.useRef)(null);return(0,n.useEffect)(()=>{let e=e=>{e.target===i.current&&l()};return window.addEventListener("click",e),()=>{window.removeEventListener("click",e)}},[]),(0,s.jsx)("section",{ref:i,className:"fixed inset-0 z-40 flex justify-center items-center transition-colors ".concat(t?"visible bg-black/70":"invisible"),children:(0,s.jsx)("div",{className:"bg-white w-3/4 rounded shadow p-4 transition-all ".concat(t?"scale-100 opacity-100":"scale-125 opacity-0"),children:r})})},u=()=>{let{order:e,setOrder:t}=(0,c.S)(),{people:l}=(0,r.d)(),[i,o]=(0,n.useState)(null),[d,u]=(0,n.useState)(!1),p=l.filter(e=>{var t;return null==i?void 0:null===(t=i.people)||void 0===t?void 0:t.includes(e)}),x=(e,t)=>{e.preventDefault(),o({...t})},h=(l,s)=>{l.preventDefault(),t(e.filter(e=>e.id!==s.id))},j=e=>{let{name:t,value:l}=e.target;if("name"!==t){let e=isNaN(l)?l:parseFloat(l);o(l=>({...l,[t]:e}))}else o(e=>({...e,[t]:l}))},v=(e,t)=>{e.preventDefault(),"increase"===t?o({...i,quantity:i.quantity+1}):"decrease"===t&&i.quantity>1&&o({...i,quantity:i.quantity-1})},f=e=>{o({...i,people:i.people.filter(t=>t.name!==e.name)})},b=(null==i?void 0:i.quantity)<=1;return(0,n.useEffect)(()=>{t(e.map(e=>{let t=e.price*e.quantity,s=t/e.people.filter(e=>l.some(t=>t.id===e.id)).length;return{...e,people:e.people.filter(e=>l.some(t=>t.id===e.id)),total:t,price_per_people:s}}))},[l]),(0,s.jsxs)("div",{children:[(0,s.jsx)(m,{open:d,onClose:()=>{u(!1)},children:(0,s.jsxs)("form",{onSubmit:e=>{e.preventDefault();let l=i.price*i.quantity,s=l/i.people.length,n={...i,total:l,price_per_people:s};t(e=>e.map(e=>e.id!==n.id?e:n))},className:"space-y-4",children:[(0,s.jsx)("h3",{className:"text-lg font-medium",children:"Edit Menu"}),(0,s.jsxs)("label",{className:"block",children:[(0,s.jsx)("p",{className:"select-none",children:"Menu"}),(0,s.jsx)("input",{name:"name",type:"text",autoComplete:"off",required:!0,value:(null==i?void 0:i.name)||"",onChange:j,className:"input input-bordered input-primary w-full"})]}),(0,s.jsxs)("label",{className:"relative block",children:[(0,s.jsx)("p",{className:"select-none",children:"Price"}),(0,s.jsx)("input",{name:"price",type:"text",autoComplete:"off",required:!0,value:(null==i?void 0:i.price)||"",onChange:j,className:"peer input input-bordered input-primary w-full"}),(0,s.jsx)("p",{className:"pointer-events-none invisible absolute bottom-0 right-1 select-none border-l border-l-slate-400 px-2 peer-valid:visible peer-focus-visible:visible",children:"THB"})]}),(0,s.jsxs)("label",{className:"block",children:[(0,s.jsx)("p",{className:"text-black/70",children:"Quantity"}),(0,s.jsxs)("div",{className:"flex gap-4",children:[(0,s.jsx)("input",{name:"quantity",type:"number",autoComplete:"off",required:!0,value:(null==i?void 0:i.quantity)||"",onChange:j,className:"input input-bordered input-primary order-1 w-full"}),(0,s.jsx)("button",{disabled:b,onClick:e=>v(e,"decrease"),className:"btn btn-primary order-2",children:(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1,stroke:"currentColor",className:"size-6",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5 12h14"})})}),(0,s.jsx)("button",{onClick:e=>v(e,"increase"),className:"btn btn-primary order-3",children:(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1,stroke:"currentColor",className:"size-6",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 4.5v15m7.5-7.5h-15"})})})]})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"select-none",children:"People"}),(0,s.jsx)("ul",{className:"flex flex-wrap gap-2 p-2",children:p.map(e=>(0,s.jsx)("li",{children:(0,s.jsx)("button",{onMouseDown:e=>e.preventDefault(),onClick:()=>f(e),className:"btn btn-success hover:btn-error",children:e.name})},e.id))}),p.length?null:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("p",{children:"removed"}),(0,s.jsx)(a,{selectedPeople:(e,t)=>{"add"===t?i.people.includes(e.name)||o({...i,people:[...i.people,e]}):"remove"===t&&o({...i,people:i.people.filter(t=>t.name!==e.name)})},peopleList:p})]})]}),(0,s.jsxs)("div",{className:"mt-4 flex flex-col gap-4",children:[(0,s.jsx)("button",{type:"submit",onClick:()=>u(!1),className:"btn btn-success w-full",children:"Save"}),(0,s.jsxs)("div",{className:"flex justify-between",children:[(0,s.jsx)("button",{type:"button",onClick:e=>{u(!1),h(e,i)},className:"btn btn-outline btn-error w-52",children:"Delete Menu"}),(0,s.jsx)("button",{type:"button",onClick:()=>u(!1),className:"btn btn-outline w-52",children:"Cancel"})]})]})]})}),(0,s.jsx)("p",{className:"text-lg font-medium",children:"Created Menu"}),(0,s.jsx)("ul",{children:(null==e?void 0:e.length)?e.map((e,t)=>{var l;return(0,s.jsx)("li",{className:"group border-b border-slate-200 bg-white py-4",children:(0,s.jsxs)("div",{className:"grid grid-cols-12 gap-2",children:[(0,s.jsxs)("div",{className:"col-span-6",children:[(0,s.jsxs)("p",{children:[(0,s.jsx)("span",{className:"text-lg font-medium",children:e.name}),(0,s.jsxs)("span",{className:"text-sm text-slate-400",children:[" ","x ",e.quantity]})]}),(0,s.jsx)("ul",{className:"mt-2 flex flex-wrap items-center gap-2",children:null===(l=e.people)||void 0===l?void 0:l.map((e,t)=>(0,s.jsx)("li",{children:(0,s.jsx)("p",{className:"w-fit rounded bg-slate-300 px-1",children:null==e?void 0:e.name})},t))})]}),(0,s.jsxs)("div",{className:"col-span-4 flex flex-col justify-center text-right",children:[(0,s.jsx)("p",{className:"text-lg font-medium",children:e.total}),e.people.length?(0,s.jsxs)("p",{className:"text-sm",children:[e.price_per_people," each"]}):null]}),(0,s.jsx)("div",{className:"col-span-2 flex flex-col items-end justify-center",children:(0,s.jsx)("button",{onClick:t=>{u(!0),x(t,e)},className:"btn btn-circle btn-success",children:(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"pointer-events-none size-6",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"})})})})]})},t)}):null})]})},p=()=>(0,s.jsxs)("article",{className:"p-4 space-y-4",children:[(0,s.jsx)(d,{}),(0,s.jsx)(u,{})]}),x=()=>{let{people:e}=(0,r.d)(),{order:t}=(0,c.S)(),[l,i]=(0,n.useState)([]),a=e.map(e=>{let l=t.filter(t=>t.people.find(t=>t.name===e.name)),s=l.reduce((e,t)=>e+parseFloat(t.price_per_people),0);return{id:e.name,name:e.name,orders:l,total:s}});return(0,n.useEffect)(()=>{i(a)},[e,t]),(0,s.jsxs)("article",{className:"p-4",children:[(0,s.jsxs)("div",{className:"space-y-4",children:[(0,s.jsx)("p",{className:"text-lg font-medium",children:"Charges Summary"}),(0,s.jsxs)("label",{className:"block",children:[(0,s.jsx)("p",{className:"select-none",children:"Service Charge"}),(0,s.jsx)("input",{type:"number",className:"input input-bordered input-primary w-full",placeholder:"Not available",disabled:!0})]}),(0,s.jsxs)("label",{className:"block",children:[(0,s.jsx)("p",{className:"select-none",children:"Tax"}),(0,s.jsx)("input",{type:"number",className:"input input-bordered input-primary w-full",placeholder:"Not available",disabled:!0})]})]}),(0,s.jsx)("div",{className:"divider"}),(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"text-lg font-medium",children:"Summary"}),e.length?(0,s.jsx)("ul",{className:"space-y-6",children:l.map((e,t)=>(0,s.jsx)("li",{children:e.orders.length?(0,s.jsx)("div",{className:"card w-full bg-slate-200",children:(0,s.jsxs)("div",{className:"card-body p-6",children:[(0,s.jsxs)("div",{className:"flex items-end justify-between",children:[(0,s.jsx)("h2",{className:"card-title",children:e.name}),(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"text-right leading-6",children:"Total"}),(0,s.jsx)("p",{className:"text-right text-xl font-medium leading-6",children:e.total})]})]}),(0,s.jsx)("div",{className:"divider my-0"}),(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:"w-8/12 text-left",children:"Menu"}),(0,s.jsx)("td",{className:"w-2/12 text-right",children:"count"}),(0,s.jsx)("td",{className:"w-2/12 text-right",children:"Price"})]})}),(0,s.jsx)("tbody",{children:e.orders.map(e=>(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:"tooltip max-w-52 text-left","data-tip":e.name,children:(0,s.jsx)("p",{className:"truncate",children:e.name})}),(0,s.jsx)("td",{className:"text-right",children:e.quantity}),(0,s.jsx)("td",{className:"text-right text-sm font-medium",children:e.price_per_people})]},e.id))})]})]})}):null},t))}):(0,s.jsxs)("div",{className:"flex select-none flex-col items-center justify-center",children:[(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"text-red size-6",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"})}),(0,s.jsx)("p",{className:"text-red text-center text-lg",children:"No people"})]})]})]})},h=n.forwardRef(function(e,t){let{title:l,titleId:s,...r}=e;return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":s},r),l?n.createElement("title",{id:s},l):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"}))}),j=n.forwardRef(function(e,t){let{title:l,titleId:s,...r}=e;return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":s},r),l?n.createElement("title",{id:s},l):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z"}))}),v=n.forwardRef(function(e,t){let{title:l,titleId:s,...r}=e;return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":s},r),l?n.createElement("title",{id:s},l):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"}))}),f=()=>{let[e,t]=(0,n.useState)(2);return(0,s.jsxs)("section",{children:[(0,s.jsx)("div",{id:"container",className:"relative mx-auto h-[calc(100svh-42px)] max-w-screen-md",children:(0,s.jsx)("div",{children:1===e?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"flex h-16 w-full items-center bg-primary px-4 text-xl font-medium tracking-widest text-primary-content",children:"People"}),(0,s.jsx)(i,{})]}):2===e?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"flex h-16 w-full items-center bg-primary px-4 text-xl font-medium tracking-widest text-primary-content",children:"Menu"}),(0,s.jsx)(p,{})]}):3===e&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"flex h-16 w-full items-center bg-primary px-4 text-xl font-medium tracking-widest text-primary-content",children:"Summary"}),(0,s.jsx)(x,{})]})})}),(0,s.jsxs)("div",{className:"justify-centerx fixed left-1/2 mx-auto flex h-14 w-full max-w-screen-md -translate-x-1/2 items-center",children:[(0,s.jsx)("button",{onClick:()=>t(1),className:"flex h-full w-full items-center justify-center ".concat(1===e?"active bg-primary text-primary-content":"text-pretty bg-primary-content"),children:(0,s.jsx)(h,{strokeWidth:1,className:"size-8"})}),(0,s.jsx)("button",{onClick:()=>t(2),className:"flex h-full w-full items-center justify-center ".concat(2===e?"active bg-primary text-primary-content":"text-pretty bg-primary-content"),children:(0,s.jsx)(j,{strokeWidth:1,className:"size-8"})}),(0,s.jsx)("button",{onClick:()=>t(3),className:"flex h-full w-full items-center justify-center ".concat(3===e?"active bg-primary text-primary-content":"text-pretty bg-primary-content"),children:(0,s.jsx)(v,{strokeWidth:1,className:"size-8"})})]})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[441,684,358],()=>t(72)),_N_E=e.O()}]);