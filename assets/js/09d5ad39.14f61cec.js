"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[864],{9365:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"examples","title":"Examples","description":"Indicator Light","source":"@site/docs/examples.md","sourceDirName":".","slug":"/examples","permalink":"/Neo-IMS/docs/examples","draft":false,"unlisted":false,"editUrl":"https://github.com/Bloxinghouse-Electric-Corporation/Neo-IMS/edit/master/docs/examples.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"defaultSidebar","previous":{"title":"Workspace Definition","permalink":"/Neo-IMS/docs/definition"}}');var r=t(4848),l=t(8453);const a={sidebar_position:5},o="Examples",s={},d=[{value:"Indicator Light",id:"indicator-light",level:2},{value:"Server Side",id:"server-side",level:3},{value:"Client Side",id:"client-side",level:3},{value:"Button",id:"button",level:2},{value:"Server Side",id:"server-side-1",level:3},{value:"Client Side",id:"client-side-1",level:3}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"examples",children:"Examples"})}),"\n",(0,r.jsx)(n.h2,{id:"indicator-light",children:"Indicator Light"}),"\n",(0,r.jsx)(n.h3,{id:"server-side",children:"Server Side"}),"\n",(0,r.jsxs)(n.p,{children:["An indicator light only requires the basic server side script. The state is a ",(0,r.jsx)(n.strong,{children:"Basic State"})," of type ",(0,r.jsx)(n.strong,{children:"boolean"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",metastring:'title="ServerScriptService.IMSServer.Device.Indicator"',children:'local types = require(script.Parent.Parent.Types)\nlocal device = require(script.Parent.Bases.Device)\n\nlocal Module = {}\nModule.__index = Module\nsetmetatable(Module, device)\n\nfunction Module.new(model:Model, initialState:boolean):types.Device<boolean>\n\tif initialState ~= nil and type(initialState) ~= "boolean" then\n\t\terror("[INTERACTION SYSTEM]: InitialState type for Indicator must be boolean!")\n\t\treturn nil\n\tend\n\t\n\tlocal self = device.new(model, initialState or false) -- "false" is the default value\n\tsetmetatable(self, Module)\n\n\treturn self\nend\n\nreturn Module\n'})}),"\n",(0,r.jsx)(n.h3,{id:"client-side",children:"Client Side"}),"\n",(0,r.jsx)(n.p,{children:"The client side is also very simple.\nOn an update, the light's material will get set to neon or glass depending on whether or not the state is set to true."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",metastring:'title="StarterPlayer.StarterPlayerScripts.IMSClient.Devices.Indicator"',children:"local module = {}\n\nfunction module.Init(deviceModel:Model, deviceState:boolean)\n    -- Run update to ensure the initial device state gets displayed correctly\n    module.Update(deviceModel, deviceState)\nend\n\nfunction module.Update(deviceModel:Model, deviceState:boolean)\n    deviceModel.light.Material = deviceState and Enum.Material.Neon or Enum.Material.Glass\nend\n\nreturn module\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"button",children:"Button"}),"\n",(0,r.jsx)(n.h3,{id:"server-side-1",children:"Server Side"}),"\n",(0,r.jsx)(n.p,{children:"Whenever the server recievs a message from the client, it updates the state accordingly:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",metastring:'title="ServerScriptService.IMSServer.Device.Button"',children:'local types = require(script.Parent.Parent.Types)\nlocal device = require(script.Parent.Bases.Device)\n\nlocal signal = require(game:GetService("ReplicatedStorage").Signal)\n\nlocal Module = {}\nModule.__index = Module\nsetmetatable(Module, device)\n\nfunction Module.new(model:Model, initialState:boolean):types.Device<boolean>\n\t-- Standard init function\nend\n\nfunction Module.RecieveMessage(self:types.Device<boolean>, player:Player, msg:{[string]:any}):boolean\n    if msg["EVENT"] == "click" then\n        self:SetState(true)\n\n        return true -- message was processed successfully\n    elseif msg["EVENT"] == "release" then\n        self:SetState(false)\n\n        return true -- message was processed successfully\n    end\n\n    return false -- message was not processed successfully\nend \n\nreturn Module\n'})}),"\n",(0,r.jsx)(n.h3,{id:"client-side-1",children:"Client Side"}),"\n",(0,r.jsx)(n.p,{children:"The client sends a message whenever the player clicks or releases the button and updates the model (by changing the button material) according to the device state."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",metastring:'title="StarterPlayer.StarterPlayerScripts.IMSClient.Devices.Button"',children:'local repStor = game:GetService("ReplicatedStorage")\n\nlocal module = {}\n\nfunction module.Init(deviceModel:Model, deviceState:boolean)\n    deviceModel:WaitForChild("Button").DragDetector.DragStart:Connect(function()\n        repStor.IMSShared.SendDeviceMessage:FireServer(deviceModel.Name, {["EVENT"]="click"})\n    end)\n    deviceModel:WaitForChild("Button").DragDetector.DragEbd:Connect(function()\n        repStor.IMSShared.SendDeviceMessage:FireServer(deviceModel.Name, {["EVENT"]="release"})\n    end)\nend\n\nfunction module.Update(deviceModel:Model, deviceState:boolean)\n    local button = deviceModel:WaitForChild("Button")\n\n    if deviceState == true then\n        button.Material = Enum.Material.Neon\n    else\n        button.Material = Enum.Material.SmoothPlastic\n    end\nend\n\nreturn module\n'})})]})}function u(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var i=t(6540);const r={},l=i.createContext(r);function a(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);