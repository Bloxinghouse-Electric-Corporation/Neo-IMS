"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[256],{1270:e=>{e.exports=JSON.parse('{"functions":[{"name":"new","desc":"Create a new instance of a device. This is automatically done by [Interface].","params":[{"name":"model","desc":"The model of the device in Workspace","lua_type":"Model"},{"name":"initialState","desc":"Initial value to set Device.state to.","lua_type":"T"}],"returns":[{"desc":"The instance of this class.","lua_type":"Types.Device<T>"}],"function_type":"static","private":true,"source":{"line":30,"path":"src/IMSServer/Devices/Bases/Device.luau"}},{"name":"GetState","desc":"Returns the current state of the device.","params":[{"name":"self","desc":"","lua_type":"Types.Device<T>"}],"returns":[{"desc":"The current state of the device.","lua_type":"T"}],"function_type":"static","source":{"line":48,"path":"src/IMSServer/Devices/Bases/Device.luau"}},{"name":"SetState","desc":"Sets the current state of the device.","params":[{"name":"self","desc":"","lua_type":"Types.Device<T>"},{"name":"newState","desc":"The new state to set","lua_type":"T"}],"returns":[{"desc":"Whether or not the state change was successful.","lua_type":"boolean"}],"function_type":"static","errors":[{"lua_type":"[Neo-IMS]: Device state of device [...] cannot be changed to [...].","desc":"The types of the old device state and the new state do not match."}],"source":{"line":59,"path":"src/IMSServer/Devices/Bases/Device.luau"}},{"name":"SetStateKey","desc":"Sets the current stateKey (substate) of the device.","params":[{"name":"self","desc":"","lua_type":"Types.Device<T>"},{"name":"stateKey","desc":"The new stateKey to set","lua_type":"{[string]:any}"}],"returns":[{"desc":"Whether or not the state change was successful.","lua_type":"boolean"}],"function_type":"static","errors":[{"lua_type":"[Neo-IMS]: Cannot set StateKey of device [...] because its state is not a table.","desc":"If the device was not initialized with a Complex State you cannot set a substate."},{"lua_type":"[Neo-IMS]: Key passed to Device:SetStateKey for device [...] is nil.","desc":"A value was passed with a nil key."},{"lua_type":"[Neo-IMS]: Failed to find statekey [...] of device [...].","desc":"Attempted to set a StateKey which does not exist on the device."}],"source":{"line":85,"path":"src/IMSServer/Devices/Bases/Device.luau"}},{"name":"RecieveMessage","desc":"Handles messages sent by [Interface]. This should not be manually called, but instead only overriden for custom device implementations.","params":[{"name":"self","desc":"","lua_type":"Types.Device<T>"},{"name":"player","desc":"The player who sent the message.","lua_type":"Player"},{"name":"msg","desc":"The message.","lua_type":"{[string]:any}"}],"returns":[{"desc":"Whether or not handling the message was successful.","lua_type":"boolean"}],"function_type":"static","private":true,"source":{"line":122,"path":"src/IMSServer/Devices/Bases/Device.luau"}}],"properties":[{"name":"name","desc":"The name of the device as it is in Workspace","lua_type":"string","source":{"line":16,"path":"src/IMSServer/Devices/Bases/Device.luau"}},{"name":"model","desc":"The model of the device in Workspace","lua_type":"Model","source":{"line":20,"path":"src/IMSServer/Devices/Bases/Device.luau"}},{"name":"state","desc":"The current state of the device","lua_type":"T","source":{"line":24,"path":"src/IMSServer/Devices/Bases/Device.luau"}}],"types":[],"name":"Device","desc":"The base class for all serversided devices in Neo-IMS.","realm":["Server"],"source":{"line":10,"path":"src/IMSServer/Devices/Bases/Device.luau"}}')}}]);