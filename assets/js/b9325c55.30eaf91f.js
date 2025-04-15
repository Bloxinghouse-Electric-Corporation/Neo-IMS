"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[745],{139:e=>{e.exports=JSON.parse('{"functions":[{"name":"Version","desc":"Returns the current version of Neo-IMS as a string.","params":[],"returns":[{"desc":"Returns the current version of Neo-IMS","lua_type":"string"}],"function_type":"static","source":{"line":31,"path":"src/IMSServer/Interface.luau"}},{"name":"Init","desc":"Initializes Neo-IMS and loads all devices tagged with a valid class name.","params":[],"returns":[],"function_type":"static","errors":[{"lua_type":"[Neo-IMS]: Failed to find signal library under \'ReplicatedStorage.Signal\'.","desc":"This error is thrown if you failed to provide a signal library for Neo-IMS to use."},{"lua_type":"[Neo-IMS]: \'ReplicatedStorage.Signal\' is not a module script!","desc":"Neo-IMS expects a signal library that has a single module script as an interface."},{"lua_type":"[Neo-IMS]: Device with name [...] already exists. Skipping.","desc":"Neo-IMS cannot load multiple devices with the same name. Only one instance will be loaded."}],"source":{"line":40,"path":"src/IMSServer/Interface.luau"}},{"name":"GetDevice","desc":"Returns an instance of a device if it exists.","params":[{"name":"name","desc":"The name of the device as it is in workspace.","lua_type":"string"}],"returns":[{"desc":"The instance of the device, or nil if it does not exist.","lua_type":"Types.Device<any> | nil"}],"function_type":"static","source":{"line":116,"path":"src/IMSServer/Interface.luau"}},{"name":"GetDevicesOfClass","desc":"Returns a table of all devices of a certain class.","params":[{"name":"class","desc":"The class to look for","lua_type":"string"}],"returns":[{"desc":"The array of devices","lua_type":"{Types.Device<any>}"}],"function_type":"static","source":{"line":124,"path":"src/IMSServer/Interface.luau"}},{"name":"SendMessage","desc":"Sends a message from a client to a device to handle. This is usually only used internally.","params":[{"name":"deviceName","desc":"The name of the device to target as it is in Workspace.","lua_type":"string"},{"name":"player","desc":"The player to send the message from","lua_type":"Player"},{"name":"msg","desc":"The message(s) to pass to the device","lua_type":"{[string]:any}"}],"returns":[{"desc":"Whether or not the message was processed successfully.","lua_type":"boolean"}],"function_type":"static","errors":[{"lua_type":"[Neo-IMS]: Unable to send message to device [...], because it could not be found.","desc":"The device specified in deviceName does not exist or did not load."}],"private":true,"source":{"line":144,"path":"src/IMSServer/Interface.luau"}}],"properties":[],"types":[],"name":"Interface","desc":"Class that acts as the serverside loader for Neo-IMS.\\nThis class is responsible for loading all devices, handling/validating info that gets sent to/from the client, and providing instances of devices for use in other scripts (i.e. simulation).","realm":["Server"],"source":{"line":13,"path":"src/IMSServer/Interface.luau"}}')}}]);