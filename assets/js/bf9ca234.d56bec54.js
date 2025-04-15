"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[379],{5738:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"programmingc","title":"Client Side Programming","description":"Device Initialization","source":"@site/docs/programmingc.md","sourceDirName":".","slug":"/programmingc","permalink":"/Neo-IMS/docs/programmingc","draft":false,"unlisted":false,"editUrl":"https://github.com/Bloxinghouse-Electric-Corporation/Neo-IMS/edit/master/docs/programmingc.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"defaultSidebar","previous":{"title":"Server Side Programming","permalink":"/Neo-IMS/docs/programmings"},"next":{"title":"Workspace Definition","permalink":"/Neo-IMS/docs/definition"}}');var r=t(4848),o=t(8453);const a={sidebar_position:3},s="Client Side Programming",d={},c=[{value:"Device Initialization",id:"device-initialization",level:2},{value:"Manipulating the State",id:"manipulating-the-state",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"client-side-programming",children:"Client Side Programming"})}),"\n",(0,r.jsx)(n.h2,{id:"device-initialization",children:"Device Initialization"}),"\n",(0,r.jsxs)(n.p,{children:["Client Side device modules are stored within the ",(0,r.jsx)(n.code,{children:"StarterPlayer.StarterPlayerScripts.IMSClient.Devices(.VR)"})," folder. These modules are automatically loaded by the system as explained in ",(0,r.jsx)(n.a,{href:"/Neo-IMS/docs/intro#client-side",children:"Introduction"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"The most basic form of a client module looks like this:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",metastring:'title="StarterPlayer.StarterPlayerScripts.IMSClient.Devices.Test"',children:"local module = {}\n\nfunction module.Init(deviceModel:Model, deviceState:boolean) -- change this type to match your device\n\nend\n\nfunction module.Update(deviceModel:Model, deviceState:boolean) -- change this type to match your device\n\nend\n\nreturn module\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"Init"})," function runs ",(0,r.jsx)(n.strong,{children:"once"})," when the device gets initialized."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"Update"})," function runs every time the state of the device updates on the server."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"deviceModel"})," parameter can be used to visually update (animate) the device's model in accordance with the state."]}),"\n",(0,r.jsx)(n.p,{children:"The programmer is responsible for any further handling of logic."}),"\n",(0,r.jsx)(n.h2,{id:"manipulating-the-state",children:"Manipulating the State"}),"\n",(0,r.jsxs)(n.p,{children:["To request a state change to the server, the remote event in ",(0,r.jsx)(n.code,{children:"ReplicatedStorage.IMSShared.SendDeviceMessage"})," can be used."]}),"\n",(0,r.jsxs)(n.p,{children:["In this remote event, the device's name (this can be done using ",(0,r.jsx)(n.code,{children:"deviceModel.Name"}),"), and the message you wish to pass should be passed."]}),"\n",(0,r.jsx)(n.p,{children:"An example call to this remote event looks like this:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",children:'local repStor = game:GetService("ReplicatedStorage")\n\nfunction module.Init(deviceModel:Model, deviceState:boolean)\n    repStor.IMSShared.SendDeviceMessage:FireServer(deviceModel.Name, {["messageKey"]:"messageValue"})\nend\n'})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>s});var i=t(6540);const r={},o=i.createContext(r);function a(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);