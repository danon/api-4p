(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{117:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return m}));var r=a(1),n=a(6),l=(a(0),a(136)),s=a(139),o={id:"forum",title:"Forum"},c={id:"forum",title:"Forum",description:"import Request from '../src/core/components/Request';\r",source:"@site/docs\\forum.mdx",permalink:"/api-4p/docs/forum",editUrl:"https://github.com/Danon/api-4p/edit/master/website/docs/forum.mdx",sidebar:"someSidebar",previous:{title:"Jobs",permalink:"/api-4p/docs/jobs"}},i=[],u={rightToc:i};function m(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)(s.a,{get:!0,url:"/topics",parameters:{sort:"id",order:"desc"},mdxType:"Request"}),Object(l.b)(s.a,{get:!0,url:"/topics/:id",parameters:{id:1},mdxType:"Request"}),Object(l.b)(s.a,{get:!0,url:"/forums",mdxType:"Request"}))}m.isMDXComponent=!0},139:function(e,t,a){"use strict";a.d(t,"a",(function(){return A}));var r=a(0),n=a.n(r),l=a(145),s=a(146),o=a(227),c=a(236);function i(e){const[t,a]=n.a.useState("prod");return n.a.useEffect(()=>a(e.env),[e.env]),n.a.createElement(c.a,{value:t,onChange:function(t,r){r&&(a(r),e.onChange(r))},size:"small",exclusive:!0},n.a.createElement(o.a,{value:"local"},"Local"),n.a.createElement(o.a,{value:"dev"},"Dev"),n.a.createElement(o.a,{value:"prod"},"Prod"))}var u=a(152),m=a.n(u),p=a(93),d=a.n(p),h=({color:e,children:t})=>n.a.createElement("div",{className:d.a.badge,style:{backgroundColor:e}},n.a.createElement("div",{className:d.a.wrapper},t));a(12),a(52),a(148),a(149),a(150),a(151);function f(e){for(const t in e)return!0;return!1}var E=a(94),g=a.n(E),v=a(228),b=a(234),y=a(233),j=a(231),T=a(232),C=a(229);function x({children:e}){const[t,a]=n.a.useState(!1),r=n.a.useRef(null);return n.a.useEffect(()=>{if(t){const{current:e}=r;null!==e&&e.focus()}},[t]),n.a.createElement("div",null,n.a.createElement(v.a,{onClick:()=>a(!0)},"Edit schema"),n.a.createElement(b.a,{open:t,onClose:()=>a(!1),scroll:"body","aria-labelledby":"scroll-dialog-title","aria-describedby":"scroll-dialog-description"},n.a.createElement(C.a,{id:"scroll-dialog-title"},"Resource schema"),n.a.createElement(j.a,{dividers:!1},n.a.createElement(T.a,{id:"scroll-dialog-description",ref:r,tabIndex:-1}),e),n.a.createElement(y.a,null,n.a.createElement(v.a,{onClick:()=>a(!1),color:"primary",disabled:!0},"Make a request"),n.a.createElement(v.a,{onClick:()=>a(!1),color:"primary"},"Cancel"))))}function O(e,t){t=Object.assign({},t);const a=[];return[e=e.replace(/:([a-z]+)/g,(e,r)=>{if(r in t){let e=t[r];return a.push(r),delete t[r],e}throw new Error(`Missing replacement for '${r}'`)}),t,a]}function q(e){return function(e,t){const a=[];for(let r of t.matchAll(e))a.push(r[1]);return a}(/:([a-z]+)/g,e)}var w=a(138),N=({children:e,language:t})=>n.a.createElement(w.a,{className:`language-${t}`},e),R=function(e){var t=e.method,a=e.url,r=e.parameters,l=e.schema;return f(r)||f(l)?function(e){var t=e.parameters,a=e.suffix,r=e.schema;return n.a.createElement("table",{className:g.a.parameters},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"parameter"),n.a.createElement("th",null,"example value"))),n.a.createElement("tbody",null,Object.entries(t).map((function(e){var t=e[0],r=e[1];return n.a.createElement("tr",{key:t},n.a.createElement("td",null,k(a(t)),k(function(e){var t=typeof e;if("number"===t)return"int";return t}(r)),t),n.a.createElement("td",null,function(e){if("string"==typeof e)return'"'+e+'"';return e}(r)))})),f(r)?n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("code",null,"schema","{}")," ","{","...}"),n.a.createElement("td",null,n.a.createElement(x,null,n.a.createElement("div",{className:g.a.minWidthCode},n.a.createElement(N,{language:"json"},JSON.stringify(r,null,2)))))):null))}({parameters:r,suffix:function(e){return q(a).includes(e)?"path/":"GET"===t?"query?":null},schema:l}):n.a.createElement("p",{className:g.a.noParams},"This resource doesn't take any parameters :)")};function k(e){return null===e?null:n.a.createElement("code",{style:{marginRight:"3px"}},e)}var S=a(95),G=a.n(S),$=class extends n.a.Component{suffix(e){return q(this.props.url).includes(e)?"path/":"GET"===this.props.method?"query?":null}get badgeColor(){return{POST:"#49cc90",GET:"#61affe",PUT:"#fca130"}[this.props.method]}get placeholders(){return q(this.props.url)}render(){const{url:e,method:t,parameters:a,schema:r,pagination:l,requiresLogin:s}=this.props;return n.a.createElement("div",{className:G.a.params},n.a.createElement("header",null,n.a.createElement(h,{color:this.badgeColor},t),n.a.createElement("span",{className:G.a.endpoint},e)),n.a.createElement(R,{method:t,url:e,parameters:a,schema:r}),n.a.createElement("div",{style:{display:"flex"}},s?n.a.createElement(h,{color:"#ffcccc"},n.a.createElement(m.a,{fontSize:"small"})," Requires Login"):null,l?n.a.createElement(h,{color:"#49cc90"},"+ Pagination"):null))}};function P(e){const t=Object.entries(e).map(([e,t])=>encodeURIComponent(e)+"="+encodeURIComponent(t));return t.length?"?"+t.join("&"):""}function L({method:e,url:t,parameters:a}){const[r,l]=O(t,a);return"GET"===e?function(e,t){return n.a.createElement(N,{language:"js"},`fetch("${e+P(t)}", {\n  "method": "GET",\n  "headers": {\n    "Accept": "application/json",\n    "Content-type": "application/json"\n  }\n})`)}(r,l):function(e,t,a){return n.a.createElement(N,{language:"js"},`fetch("${t}", {\n  "method": "${e}",\n  "headers": {\n    "Accept": "application/json",\n    "Content-type": "application/json"\n  },\n  "body": JSON.stringify(${r=JSON.stringify(a,null,2),l=2,r.split("\n").map(e=>" ".repeat(l)+e).join("\n").substr(l)})\n})`);var r,l}(e,r,l)}var M=class extends n.a.Component{render(){let{method:e,url:t,parameters:a}=this.props;const[r,n]=O(t,a);return"GET"===e?this.codeMethodGet(r,n):this.code(e,r,n)}code(e,t,a){return n.a.createElement(N,{language:"bash"},`curl -X ${e} ${t} \\\n      -H "Accept: application/json" \\\n      -H "Content-Type: application/json" \\\n      -d '${JSON.stringify(a)}'`)}codeMethodGet(e,t){return n.a.createElement(N,{language:"bash"},`curl -X GET ${e+P(t)} \\\n      -H "Accept: application/json" \\\n      -H "Content-Type: application/json"`)}},J=a(96),U=a.n(J);class A extends n.a.Component{constructor(e){super(e),this.state={env:"prod"}}get method(){if(this.props.get)return"GET";if(this.props.post)return"POST";if(this.props.put)return"PUT";throw"Missing HTTP method"}render(){return this.doRender({url:this.baseUrl+this.props.url,parameters:this.props.parameters||{},schema:this.props.schema||{},pagination:this.props.pagination,requiresLogin:this.props.requiresLogin})}get baseUrl(){return{prod:"https://api.4programmers.net/v1",dev:"https://api.4programmers.dev/v1",local:"http://localhost:8080/v1"}[this.state.env]}doRender({url:e,parameters:t,schema:a,pagination:r,requiresLogin:o}){return n.a.createElement("div",null,n.a.createElement(l.a,{defaultValue:"params",values:[{label:"Params",value:"params"},{label:"fetch()",value:"fetch"},{label:"curl",value:"curl"}]},n.a.createElement(s.a,{value:"params"},n.a.createElement($,{method:this.method,url:e,parameters:t,schema:a,pagination:r,requiresLogin:o})),n.a.createElement(s.a,{value:"fetch"},n.a.createElement(L,{method:this.method,url:e,parameters:Object.assign({},t,a)})),n.a.createElement(s.a,{value:"curl"},n.a.createElement(M,{method:this.method,url:e,parameters:Object.assign({},t,a)}))),n.a.createElement("div",{className:U.a.wrapper},n.a.createElement(i,{env:this.state.env,onChange:e=>this.setState({env:e})})))}}}}]);