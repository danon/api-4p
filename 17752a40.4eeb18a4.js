(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{106:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return m}));var n=a(1),r=a(6),l=(a(0),a(136)),o=a(141),s={id:"microblogs",title:"Microblogs"},c={id:"microblogs",title:"Microblogs",description:"import Request from '../src/core/components/Request';\r",source:"@site/docs\\microblogs.mdx",permalink:"/api-4p/docs/microblogs",editUrl:"https://github.com/Danon/api-4p/edit/master/docs/microblogs.mdx",sidebar:"someSidebar",previous:{title:"Acquire authorization token",permalink:"/api-4p/docs/login"},next:{title:"Jobs",permalink:"/api-4p/docs/jobs"}},i=[],u={rightToc:i};function m(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)(o.a,{get:!0,url:"/microblogs/:id",parameters:{id:1},mdxType:"Request"}),Object(l.b)(o.a,{get:!0,url:"/microblogs",parameters:{page:0},pagination:!0,mdxType:"Request"}))}m.isMDXComponent=!0},141:function(e,t,a){"use strict";a.d(t,"a",(function(){return z}));var n=a(0),r=a.n(n),l=a(147),o=a(148),s=a(241),c=a(253);function i(e){const[t,a]=r.a.useState("prod");return r.a.useEffect(()=>a(e.env),[e.env]),r.a.createElement(c.a,{value:t,onChange:function(t,n){n&&(a(n),e.onChange(n))},size:"small",exclusive:!0},r.a.createElement(s.a,{value:"local"},"Local"),r.a.createElement(s.a,{value:"dev"},"Dev"),r.a.createElement(s.a,{value:"prod"},"Prod"))}var u=a(152),m=a.n(u),p=a(93),d=a.n(p),h=({color:e,children:t})=>r.a.createElement("div",{className:d.a.badge,style:{backgroundColor:e}},r.a.createElement("div",{className:d.a.wrapper},t)),g=(a(12),a(249)),E=a(242),f=a(252),b=a(248),v=a(246),y=a(247),j=a(244);function C({children:e}){const[t,a]=r.a.useState(!1),n=r.a.useRef(null);return r.a.useEffect(()=>{if(t){const{current:e}=n;null!==e&&e.focus()}},[t]),r.a.createElement("div",null,r.a.createElement(E.a,{onClick:()=>a(!0)},"Edit schema"),r.a.createElement(f.a,{open:t,onClose:()=>a(!1),scroll:"body","aria-labelledby":"scroll-dialog-title","aria-describedby":"scroll-dialog-description"},r.a.createElement(j.a,{id:"scroll-dialog-title"},"Resource schema"),r.a.createElement(v.a,{dividers:!1},r.a.createElement(y.a,{id:"scroll-dialog-description",ref:n,tabIndex:-1}),e),r.a.createElement(b.a,null,r.a.createElement(E.a,{onClick:()=>a(!1),color:"primary",disabled:!0},"Make a request"),r.a.createElement(E.a,{onClick:()=>a(!1),color:"primary"},"Cancel"))))}function T(e,t){t=Object.assign({},t);const a=[];return[e=e.replace(/:([a-z]+)/g,(e,n)=>{if(n in t){let e=t[n];return a.push(n),delete t[n],e}throw new Error(`Missing replacement for '${n}'`)}),t,a]}function x(e){return function(e,t){const a=[];for(let n of t.matchAll(e))a.push(n[1]);return a}(/:([a-z]+)/g,e)}var O=a(140),q=({children:e,language:t})=>r.a.createElement(O.a,{className:`language-${t}`},e);function k(e){for(const t in e)return!0;return!1}var N=a(94),w=a.n(N),R=function({method:e,url:t,parameters:a,schema:n}){return k(a)||k(n)?function({parameters:e,suffix:t,schema:a}){return r.a.createElement("table",{className:w.a.parameters},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"parameter"),r.a.createElement("th",null,"example value"))),r.a.createElement("tbody",null,Object.entries(e).map(([e,a])=>r.a.createElement("tr",{key:e},r.a.createElement("td",null,S(t(e)),S(function(e){const t=typeof e;if("number"===t)return"int";return t}(a)),e),r.a.createElement("td",null,r.a.createElement(g.a,{label:e,value:a})))),k(a)?r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("code",null,"schema","{}")," ","{","...}"),r.a.createElement("td",null,r.a.createElement(C,null,r.a.createElement("div",{className:w.a.minWidthCode},r.a.createElement(q,{language:"json"},JSON.stringify(a,null,2)))))):null))}({parameters:a,suffix:function(a){return x(t).includes(a)?"path/":"GET"===e?"query?":null},schema:n}):r.a.createElement("p",{className:w.a.noParams},"This resource doesn't take any parameters :)")};function S(e){return null===e?null:r.a.createElement("code",{style:{marginRight:"3px"}},e)}var G=a(95),M=a.n(G),$=class extends r.a.Component{suffix(e){return x(this.props.url).includes(e)?"path/":"GET"===this.props.method?"query?":null}get badgeColor(){return{POST:"#49cc90",GET:"#61affe",PUT:"#fca130"}[this.props.method]}get placeholders(){return x(this.props.url)}render(){const{url:e,method:t,parameters:a,schema:n,pagination:l,requiresLogin:o}=this.props;return r.a.createElement("div",{className:M.a.params},r.a.createElement("header",null,r.a.createElement(h,{color:this.badgeColor},t),r.a.createElement("span",{className:M.a.endpoint},e)),r.a.createElement(R,{method:t,url:e,parameters:a,schema:n}),r.a.createElement("div",{style:{display:"flex"}},o?r.a.createElement(h,{color:"#ffcccc"},r.a.createElement(m.a,{fontSize:"small"})," Requires Login"):null,l?r.a.createElement(h,{color:"#49cc90"},"+ Pagination"):null))}};function P(e){const t=Object.entries(e).map(([e,t])=>encodeURIComponent(e)+"="+encodeURIComponent(t));return t.length?"?"+t.join("&"):""}function L({method:e,url:t,parameters:a}){const[n,l]=T(t,a);return"GET"===e?function(e,t){return r.a.createElement(q,{language:"js"},`fetch("${e+P(t)}", {\n  "method": "GET",\n  "headers": {\n    "Accept": "application/json",\n    "Content-type": "application/json"\n  }\n})`)}(n,l):function(e,t,a){return r.a.createElement(q,{language:"js"},`fetch("${t}", {\n  "method": "${e}",\n  "headers": {\n    "Accept": "application/json",\n    "Content-type": "application/json"\n  },\n  "body": JSON.stringify(${n=JSON.stringify(a,null,2),l=2,n.split("\n").map(e=>" ".repeat(l)+e).join("\n").substr(l)})\n})`);var n,l}(e,n,l)}var J=class extends r.a.Component{render(){let{method:e,url:t,parameters:a}=this.props;const[n,r]=T(t,a);return"GET"===e?this.codeMethodGet(n,r):this.code(e,n,r)}code(e,t,a){return r.a.createElement(q,{language:"bash"},`curl -X ${e} ${t} \\\n      -H "Accept: application/json" \\\n      -H "Content-Type: application/json" \\\n      -d '${JSON.stringify(a)}'`)}codeMethodGet(e,t){return r.a.createElement(q,{language:"bash"},`curl -X GET ${e+P(t)} \\\n      -H "Accept: application/json" \\\n      -H "Content-Type: application/json"`)}},U=a(96),A=a.n(U);class z extends r.a.Component{constructor(e){super(e),this.state={env:"prod"}}get method(){if(this.props.get)return"GET";if(this.props.post)return"POST";if(this.props.put)return"PUT";throw"Missing HTTP method"}render(){return this.doRender({url:this.baseUrl+this.props.url,parameters:this.props.parameters||{},schema:this.props.schema||{},pagination:this.props.pagination,requiresLogin:this.props.requiresLogin})}get baseUrl(){return{prod:"https://api.4programmers.net/v1",dev:"https://api.4programmers.dev/v1",local:"http://localhost:8080/v1"}[this.state.env]}doRender({url:e,parameters:t,schema:a,pagination:n,requiresLogin:s}){return r.a.createElement("div",null,r.a.createElement(l.a,{defaultValue:"params",values:[{label:"Params",value:"params"},{label:"fetch()",value:"fetch"},{label:"curl",value:"curl"}]},r.a.createElement(o.a,{value:"params"},r.a.createElement($,{method:this.method,url:e,parameters:t,schema:a,pagination:n,requiresLogin:s})),r.a.createElement(o.a,{value:"fetch"},r.a.createElement(L,{method:this.method,url:e,parameters:Object.assign({},t,a)})),r.a.createElement(o.a,{value:"curl"},r.a.createElement(J,{method:this.method,url:e,parameters:Object.assign({},t,a)}))),r.a.createElement("div",{className:A.a.wrapper},r.a.createElement(i,{env:this.state.env,onChange:e=>this.setState({env:e})})))}}}}]);