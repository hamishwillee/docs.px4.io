(window.webpackJsonp=window.webpackJsonp||[]).push([[1085],{1996:function(t,s,a){"use strict";a.r(s);var e=a(19),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"payloads-and-cameras"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#payloads-and-cameras"}},[t._v("#")]),t._v(" Payloads and Cameras")]),t._v(" "),a("p",[t._v("PX4 supports a wide range of payloads and cameras.")]),t._v(" "),a("h2",{attrs:{id:"mapping-drones"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mapping-drones"}},[t._v("#")]),t._v(" Mapping Drones")]),t._v(" "),a("p",[t._v("Mapping drones use cameras to capture images at time or distance intervals during surveys.")]),t._v(" "),a("p",[t._v("MAVLink cameras that support the "),a("a",{attrs:{href:"https://mavlink.io/en/services/camera.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVLink Camera Protocol"),a("OutboundLink")],1),t._v(" provide the best integration with PX4 and QGroundControl.\nThe MAVSDK provides simple APIs to use this protocol for both "),a("a",{attrs:{href:"https://mavsdk.mavlink.io/main/en/cpp/api_reference/classmavsdk_1_1_camera.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("standalone camera operations"),a("OutboundLink")],1),t._v(" and in "),a("a",{attrs:{href:"https://mavsdk.mavlink.io/main/en/cpp/api_reference/structmavsdk_1_1_mission_1_1_mission_item.html#structmavsdk_1_1_mission_1_1_mission_item_1a0299fbbe7c7b03bc43eb116f96b48df4",target:"_blank",rel:"noopener noreferrer"}},[t._v("missions"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("Cameras can also be connected directly to a flight controller using PWM or GPI outputs.\nPX4 supports the following set of MAVLink commands/mission items for cameras that are connected to the flight controller:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_DO_SET_CAM_TRIGG_INTERVAL",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAV_CMD_DO_SET_CAM_TRIGG_INTERVAL"),a("OutboundLink")],1),t._v(" - set time interval between captures.")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_DO_SET_CAM_TRIGG_DIST",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAV_CMD_DO_SET_CAM_TRIGG_DIST"),a("OutboundLink")],1),t._v(" - set distance between captures")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_DO_TRIGGER_CONTROL",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAV_CMD_DO_TRIGGER_CONTROL"),a("OutboundLink")],1),t._v(" - start/stop capturing (using distance or time, as defined using above messages).")])]),t._v(" "),a("p",[t._v("The following topics show how to "),a("em",[t._v("connect")]),t._v(" your camera configure PX4:")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/en/peripherals/camera.html"}},[t._v("Camera triggering")]),t._v(" from flight controller PWM or GPIO outputs, or via MAVLink.")],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/en/peripherals/camera.html#camera-capture"}},[t._v("Camera timing feedback")]),t._v(" via hotshoe input.")],1)]),t._v(" "),a("h2",{attrs:{id:"cargo-drones-actuator-payloads"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cargo-drones-actuator-payloads"}},[t._v("#")]),t._v(' Cargo Drones ("Actuator" Payloads)')]),t._v(" "),a("p",[t._v("Cargo drones commonly use servos/actuators to trigger cargo release, control winches, etc.\nPX4 supports servo and GPIO triggering via both RC and MAVLink commands.")]),t._v(" "),a("h3",{attrs:{id:"rc-triggering"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rc-triggering"}},[t._v("#")]),t._v(" RC Triggering")]),t._v(" "),a("p",[t._v("You can map up to three RC channels to control servos/actuators attached to the flight controller using the parameters "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#RC_MAP_AUX1"}},[t._v("RC_MAP_AUX1")]),t._v(" to "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#RC_MAP_AUX3"}},[t._v("RC_MAP_AUX3")]),t._v(".")],1),t._v(" "),a("p",[t._v("The RC channels are "),a("em",[t._v("usually")]),t._v(" mapped to the "),a("code",[t._v("AUX1")]),t._v(", "),a("code",[t._v("AUX2")]),t._v(", "),a("code",[t._v("AUX3")]),t._v(" outputs of your flight controller (using a "),a("RouterLink",{attrs:{to:"/en/concept/mixing.html"}},[t._v("mixer file")]),t._v(" defined in your airfame).\nYou can confirm which outputs are used for RC AUX passthrough on your vehicle in the "),a("RouterLink",{attrs:{to:"/en/airframes/airframe_reference.html"}},[t._v("Airframe Reference")]),t._v(".\nFor example, "),a("RouterLink",{attrs:{to:"/en/airframes/airframe_reference.html#quadrotor-x"}},[t._v("Quadrotor-X")]),t._v(' has the normal mapping: "'),a("strong",[t._v("AUX1:")]),t._v(' feed-through of RC AUX1 channel", "'),a("strong",[t._v("AUX2:")]),t._v(' feed-through of RC AUX2 channel", "'),a("strong",[t._v("AUX3:")]),t._v(' feed-through of RC AUX3 channel".')],1),t._v(" "),a("p",[t._v("If your vehicle doesn't specify RC AUX feed-through outputs, then you can add them using using a custom "),a("RouterLink",{attrs:{to:"/en/concept/mixing.html"}},[t._v("Mixer File")]),t._v(" that maps "),a("RouterLink",{attrs:{to:"/en/concept/mixing.html#control-group-3-manual-passthrough"}},[t._v("Control group 3")]),t._v(" outputs 5-7 to your desired port(s).\nAn example of such a mixer is the default passthrough mixer: "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/ROMFS/px4fmu_common/mixers/pass.aux.mix",target:"_blank",rel:"noopener noreferrer"}},[t._v("pass.aux.mix"),a("OutboundLink")],1),t._v(".")],1),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v('The same outputs used for "feed-through of RC AUX" may also be set using a MAVLink command (see '),a("a",{attrs:{href:"#mission-triggering"}},[t._v("below")]),t._v(").\nPX4 will use the last value set through either mechanism.")])]),t._v(" "),a("h3",{attrs:{id:"mission-triggering"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mission-triggering"}},[t._v("#")]),t._v(" Mission Triggering")]),t._v(" "),a("p",[t._v("You can use the "),a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_DO_SET_ACTUATOR",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAV_CMD_DO_SET_ACTUATOR"),a("OutboundLink")],1),t._v(" MAVLink command to set (up to) three actuators values at a time, either in a mission or as a command.")]),t._v(" "),a("p",[t._v("Command parameters "),a("code",[t._v("param1")]),t._v(", "),a("code",[t._v("param2")]),t._v(", and "),a("code",[t._v("param3")]),t._v(" are "),a("em",[t._v("usually")]),t._v(" mapped to the "),a("code",[t._v("AUX1")]),t._v(", "),a("code",[t._v("AUX2")]),t._v(", "),a("code",[t._v("AUX3")]),t._v(" outputs of your flight controller, while command parameters "),a("code",[t._v("param4")]),t._v(" to "),a("code",[t._v("param7")]),t._v(" are unused/ignored by PX4.\nThe parameters take normalised values in the range "),a("code",[t._v("[-1, 1]")]),t._v(" (resulting in PWM outputs in the range "),a("code",[t._v("[PWM_AUX_MINx, PWM_AUX_MAXx]")]),t._v(", where X is the output number).\nAll params/actuators that are not being controlled should be set to "),a("code",[t._v("NaN")]),t._v(".")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("MAVLink uses the same outputs as are configured for "),a("a",{attrs:{href:"#rc-triggering"}},[t._v("RC AUX passthrough")]),t._v(" (see previous section).\nYou can check which outputs are used in the "),a("RouterLink",{attrs:{to:"/en/airframes/airframe_reference.html"}},[t._v("Airframe Reference")]),t._v(" for your vehicle, and change them if needed using a "),a("RouterLink",{attrs:{to:"/en/concept/mixing.html"}},[t._v("custom mixer file")]),t._v(".")],1)]),t._v(" "),a("h3",{attrs:{id:"mavsdk-example-script"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mavsdk-example-script"}},[t._v("#")]),t._v(" MAVSDK (Example script)")]),t._v(" "),a("p",[t._v("The following "),a("a",{attrs:{href:"https://mavsdk.mavlink.io/main/en/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVSDK"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://github.com/mavlink/MAVSDK/blob/main/examples/set_actuator/set_actuator.cpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("example code"),a("OutboundLink")],1),t._v(" shows how to trigger payload release using the MAVSDK Action plugin's "),a("a",{attrs:{href:"https://mavsdk.mavlink.io/main/en/cpp/api_reference/classmavsdk_1_1_action.html#classmavsdk_1_1_action_1ad30beac27f05c62dcf6a3d0928b86e4c",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("set_actuator()")]),a("OutboundLink")],1),t._v(" method.")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("set_actuator()")]),t._v(" index values of 1 to 3 "),a("em",[t._v("normally")]),t._v(" map to the "),a("code",[t._v("AUX1")]),t._v(", "),a("code",[t._v("AUX2")]),t._v(", "),a("code",[t._v("AUX3")]),t._v(" outputs of your flight controller.")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("MAVSDK sends the "),a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_DO_SET_ACTUATOR",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAV_CMD_DO_SET_ACTUATOR"),a("OutboundLink")],1),t._v(" MAVLink command under the hood, and hence uses the same outputs as are configured for "),a("a",{attrs:{href:"#mission-triggering"}},[t._v("Mission Triggering")]),t._v(" and "),a("a",{attrs:{href:"#rc-triggering"}},[t._v("RC Triggering")]),t._v(" (see previous sections).\nYou can check which outputs are used in the "),a("RouterLink",{attrs:{to:"/en/airframes/airframe_reference.html"}},[t._v("Airframe Reference")]),t._v(" for your vehicle, and change them if needed using a "),a("RouterLink",{attrs:{to:"/en/concept/mixing.html"}},[t._v("custom mixer file")]),t._v(".")],1)]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<mavsdk/mavsdk.h>")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<mavsdk/plugins/action/action.h>")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<chrono>")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<cstdint>")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<iostream>")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<future>")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" mavsdk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("usage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" std"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("string"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" bin_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    std"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("cerr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Usage :"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" bin_name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('" <connection_url> <actuator_index> <actuator_value>\\n"')]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Connection URL format should be :\\n"')]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('" For TCP : tcp://[server_host][:server_port]\\n"')]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('" For UDP : udp://[bind_host][:bind_port]\\n"')]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('" For Serial : serial:///path/to/serial/dev[:baudrate]\\n"')]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"For example, to connect to the simulator use URL: udp://:14540\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" argc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" argv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("argc "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("usage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("argv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" std"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("string connection_url "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" argv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" index "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" std"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stod")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("argv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" std"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stof")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("argv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    Mavsdk mavsdk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ConnectionResult connection_result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mavsdk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add_any_connection")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("connection_url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("connection_result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" ConnectionResult"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("Success"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        std"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("cerr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Connection failed: "')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" connection_result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\n'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    std"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("cout "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Waiting to discover system...\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("auto")]),t._v(" prom "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" std"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("promise"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("std"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("shared_ptr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("System"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("auto")]),t._v(" fut "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" prom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_future")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// We wait for new systems to be discovered, once we find one that has an")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// autopilot, we decide to use it.")]),t._v("\n    mavsdk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("subscribe_on_new_system")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("mavsdk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("prom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("auto")]),t._v(" system "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mavsdk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("systems")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("back")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("system"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("has_autopilot")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            std"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("cout "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Discovered autopilot\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Unsubscribe again as we only want to find one system.")]),t._v("\n            mavsdk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("subscribe_on_new_system")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("nullptr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            prom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set_value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("system"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// We usually receive heartbeats at 1Hz, therefore we should find a")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// system after around 3 seconds max, surely.")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fut"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wait_for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("std"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("chrono"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("seconds")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" std"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("future_status"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("timeout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        std"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("cerr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"No autopilot found, exiting.\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Get discovered system now.")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("auto")]),t._v(" system "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fut"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Instantiate plugins.")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("auto")]),t._v(" action "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Action"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("system"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    std"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("cout "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Setting actuator...\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Action"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("Result set_actuator_result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" action"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set_actuator")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("set_actuator_result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" Action"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("Result"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("Success"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        std"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("cerr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Setting actuator failed:"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" set_actuator_result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\n'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"surveillance-search-rescue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#surveillance-search-rescue"}},[t._v("#")]),t._v(" Surveillance, Search & Rescue")]),t._v(" "),a("p",[t._v("Surveillance and Search & Rescue drones have similar requirements to mapping drones.\nThe main differences are that, in addition to flying a planned survey area, they typically need good standalone control over the camera for image and video capture, and they may need to be able to work during both day and night")]),t._v(" "),a("p",[t._v("Use a camera that supports the "),a("a",{attrs:{href:"https://mavlink.io/en/services/camera.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVLink Camera Protocol"),a("OutboundLink")],1),t._v(" as this supports image and video capture, zooming, storage management, multiple cameras on the same vehicle and switching between them, etc.\nThese cameras can be controlled either manually from QGroundControl or via MAVSDK (for both "),a("a",{attrs:{href:"https://mavsdk.mavlink.io/main/en/cpp/api_reference/classmavsdk_1_1_camera.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("standalone camera operations"),a("OutboundLink")],1),t._v(" and in "),a("a",{attrs:{href:"https://mavsdk.mavlink.io/main/en/cpp/api_reference/structmavsdk_1_1_mission_1_1_mission_item.html#structmavsdk_1_1_mission_1_1_mission_item_1a0299fbbe7c7b03bc43eb116f96b48df4",target:"_blank",rel:"noopener noreferrer"}},[t._v("missions"),a("OutboundLink")],1),t._v(").\nSee "),a("RouterLink",{attrs:{to:"/en/peripherals/camera.html"}},[t._v("Camera triggering")]),t._v(" for information on how to configure your camera to work with MAVLink.")],1),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("Cameras connected directly to the flight control "),a("em",[t._v("only")]),t._v(" support camera triggering, and are unlikely to be suitable for most surveillance/search work.")])]),t._v(" "),a("p",[t._v("A search and rescue drone may also need to carry cargo, for example, emergency supplies for a stranded hiker.\nSee "),a("a",{attrs:{href:"#cargo-drones-actuator-payloads"}},[t._v("Cargo Drones")]),t._v(" above for information about payload delivery.")])])}),[],!1,null,null,null);s.default=n.exports}}]);