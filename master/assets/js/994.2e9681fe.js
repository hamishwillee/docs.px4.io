(window.webpackJsonp=window.webpackJsonp||[]).push([[994],{2115:function(e,t,s){"use strict";s.r(t);var a=s(18),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"manually-generate-client-and-agent-code"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#manually-generate-client-and-agent-code"}},[e._v("#")]),e._v(" Manually Generate Client and Agent Code")]),e._v(" "),s("p",[e._v("This topic shows how to manually generate the code for the client and the agent (instead of "),s("RouterLink",{attrs:{to:"/ko/middleware/micrortps.html"}},[e._v("automatically generating")]),e._v(" it when the PX4 Firmware is compiled).")],1),e._v(" "),s("p",[e._v("The code is generated using the python script: "),s("strong",[e._v("/Tools/generate_microRTPS_bridge.py")]),e._v(".")]),e._v(" "),s("h2",{attrs:{id:"disable-automatic-bridge-code-generation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#disable-automatic-bridge-code-generation"}},[e._v("#")]),e._v(" Disable automatic bridge code generation")]),e._v(" "),s("p",[e._v("First disable automatic generation of bridge code. Set the variable "),s("code",[e._v("GENERATE_RTPS_BRIDGE")]),e._v(" to "),s("em",[e._v("off")]),e._v(" in the "),s("strong",[e._v(".cmake")]),e._v(" file for the target platform:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("set"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("GENERATE_RTPS_BRIDGE off"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),s("h2",{attrs:{id:"using-generate-micrortps-bridge-py"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-generate-micrortps-bridge-py"}},[e._v("#")]),e._v(" Using generate_microRTPS_bridge.py")]),e._v(" "),s("p",[e._v("The "),s("em",[e._v("generate_microRTPS_bridge")]),e._v(" tool's command syntax is shown below:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" /path/to/PX4/Firmware/msg/tools\n$ python generate_microRTPS_bridge.py -h\nusage: generate_microRTPS_bridge.py "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("-h"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("-s *.msg "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("*.msg "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v("."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n                                    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("-r *.msg "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("*.msg "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v("."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("-a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("-c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n                                    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("-t MSGDIR"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("-o AGENTDIR"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("-u CLIENTDIR"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n                                    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("-f FASTRTPSGEN"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n\noptional arguments:\n  -h, --help            show this "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("help")]),e._v(" message and "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("exit")]),e._v("\n  -s *.msg "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("*.msg "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v("."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(", --send *.msg "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("*.msg "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v("."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n                        Topics to be sent\n  -r *.msg "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("*.msg "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v("."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(", --receive *.msg "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("*.msg "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v("."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n                        Topics to be received\n  -a, --agent           Flag to generate the agent. Default is true.\n  -c, --client          Flag to generate the client. Default is true.\n  -t MSGDIR, --topic-msg-dir MSGDIR\n                        Topics message dir. Default is: msg/\n  -o AGENTDIR, --agent-outdir AGENTDIR\n                        Agent output dir. Default is:\n                        src/modules/micrortps_bridge/micrortps_agent\n  -u CLIENTDIR, --client-outdir CLIENTDIR\n                        Client output dir. Default is:\n                        src/modules/micrortps_bridge/micrortps_client\n  -f FASTRTPSGEN, --fastrtpsgen-dir FASTRTPSGEN\n                        fastrtpsgen installation dir. Default is: /bin\n  --delete-tree         Delete "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("dir")]),e._v(" tree output dir"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),s("p",[e._v(":::caution\nUsing with "),s("code",[e._v("--delete-tree")]),e._v(" option erases the content of the "),s("code",[e._v("CLIENTDIR")]),e._v(" and the "),s("code",[e._v("AGENTDIR")]),e._v(" before creating new files and folders.\n:::")]),e._v(" "),s("ul",[s("li",[e._v("The arguments "),s("code",[e._v("--send/-s")]),e._v(" and "),s("code",[e._v("--receive/-r")]),e._v(" specify the uORB topics that can be sent/received from PX4. Code will only be generated for specified messages.")]),e._v(" "),s("li",[e._v("The output appears in "),s("code",[e._v("CLIENTDIR")]),e._v(" ("),s("code",[e._v("-o src/modules/micrortps_bridge/micrortps_client")]),e._v(", by default) and in the "),s("code",[e._v("AGENTDIR")]),e._v(" ("),s("code",[e._v("-u src/modules/micrortps_bridge/micrortps_agent")]),e._v(", by default).")]),e._v(" "),s("li",[e._v("If no flag "),s("code",[e._v("-a")]),e._v(" or "),s("code",[e._v("-c")]),e._v(" is specified, both the client and the agent will be generated and installed.")]),e._v(" "),s("li",[e._v("The "),s("code",[e._v("-f")]),e._v(" option may be needed if "),s("em",[e._v("Fast RTPS")]),e._v(" was not installed in the default location ("),s("code",[e._v("-f /path/to/fastrtps/installation/bin")]),e._v(").")])]),e._v(" "),s("p",[e._v("The example below shows how you can generate bridge code to publish/subscribe just the "),s("code",[e._v("sensor_baro")]),e._v(" single uORB topic.")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" /path/to/PX4/Firmware\n$ python Tools/generate_microRTPS_bridge.py -s msg/sensor_baro.msg -r msg/sensor_combined.msg\n")])])]),s("h2",{attrs:{id:"generated-code"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#generated-code"}},[e._v("#")]),e._v(" Generated code")]),e._v(" "),s("p",[e._v("Code is generated for the "),s("em",[e._v("Client")]),e._v(", "),s("em",[e._v("Agent")]),e._v(", "),s("em",[e._v("CDR serialization/deserialization")]),e._v(" of uORB messages, and the definition of the associated RTPS messages (IDL files).")]),e._v(" "),s("p",[e._v("Manually generated code for the bridge can be found here (by default):")]),e._v(" "),s("ul",[s("li",[s("em",[e._v("Client")]),e._v(": "),s("strong",[e._v("src/modules/micrortps_bridge/micrortps_client/")])]),e._v(" "),s("li",[s("em",[e._v("Agent")]),e._v(": "),s("strong",[e._v("src/modules/micrortps_bridge/micrortps_agent/")])])]),e._v(" "),s("h3",{attrs:{id:"uorb-serialization-code"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#uorb-serialization-code"}},[e._v("#")]),e._v(" uORB serialization code")]),e._v(" "),s("p",[e._v("Serialization functions are generated for all the uORB topics as part of the normal PX4 compilation process (and also for manual generation). For example, the following functions would be generated for the "),s("em",[e._v("sensor_combined.msg")]),e._v(":")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("void serialize_sensor_combined"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("const struct sensor_combined_s *input, char *output, uint32_t *length, struct microCDR *microCDRWriter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\nvoid deserialize_sensor_combined"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("struct sensor_combined_s *output, char *input, struct microCDR *microCDRReader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),s("h3",{attrs:{id:"rtps-message-idl-files"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rtps-message-idl-files"}},[e._v("#")]),e._v(" RTPS message IDL files")]),e._v(" "),s("p",[e._v("IDL files are generated from the uORB "),s("strong",[e._v(".msg")]),e._v(" files ("),s("RouterLink",{attrs:{to:"/ko/middleware/micrortps.html#supported-uorb-messages"}},[e._v("for selected uORB topics")]),e._v(") in the generation of the bridge. These can be found in: "),s("strong",[e._v("src/modules/micrortps_bridge/micrortps_agent/idl/")])],1),e._v(" "),s("p",[s("em",[e._v("FastRTSP")]),e._v(" uses IDL files to define the structure of RTPS messages (in this case, RTPS messages that map to uORB topics). They are used to generate code for the "),s("em",[e._v("Agent")]),e._v(", and "),s("em",[e._v("FastRTSP")]),e._v(" applications that need to publish/subscribe to uORB topics.")]),e._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),s("p",[e._v("IDL files are compiled to C++ by the "),s("em",[e._v("fastrtpsgen")]),e._v(" tool.")])]),e._v(" "),s("h2",{attrs:{id:"verify-code-generation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#verify-code-generation"}},[e._v("#")]),e._v(" Verify code generation")]),e._v(" "),s("p",[e._v("You can verify successful code generation by checking that the output directories match the listing shown below (On Linux, the "),s("code",[e._v("tree")]),e._v(" command can be used for listing the file structure).")]),e._v(" "),s("p",[e._v("The manually generated "),s("em",[e._v("Client")]),e._v(" code is built and used in "),s("em",[e._v("exactly")]),e._v(" the same way as "),s("RouterLink",{attrs:{to:"/ko/middleware/micrortps.html#client-px4-firmware"}},[e._v("automatically generated Client code")]),e._v(".")],1),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("$ tree src/modules/micrortps_bridge/micrortps_agent\nsrc/modules/micrortps_bridge/micrortps_agent\n├── build\n├── CMakeLists.txt\n├── idl\n│   ├── sensor_baro_.idl\n│   └── sensor_combined_.idl\n├── microRTPS_agent.cpp\n├── microRTPS_transport.cpp\n├── microRTPS_transport.h\n├── RtpsTopics.cpp\n├── RtpsTopics.h\n├── sensor_baro_.cpp\n├── sensor_baro_.h\n├── sensor_baro_Publisher.cpp\n├── sensor_baro_Publisher.h\n├── sensor_baro_PubSubTypes.cpp\n├── sensor_baro_PubSubTypes.h\n├── sensor_combined_.cpp\n├── sensor_combined_.h\n├── sensor_combined_PubSubTypes.cpp\n├── sensor_combined_PubSubTypes.h\n├── sensor_combined_Subscriber.cpp\n└── sensor_combined_Subscriber.h\n "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(" directories, "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("20")]),e._v(" files\n")])])]),s("p",[e._v("Client directory:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("$ tree src/modules/micrortps_bridge/micrortps_client\nsrc/modules/micrortps_bridge/micrortps_client\n├── CMakeLists.txt\n├── microRTPS_client.cpp\n├── microRTPS_client_dummy.cpp\n├── microRTPS_client_main.cpp\n├── microRTPS_transport.cpp\n└── microRTPS_transport.h\n "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" directories, "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("4")]),e._v(" files\n")])])]),s("h2",{attrs:{id:"build-and-use-the-code"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#build-and-use-the-code"}},[e._v("#")]),e._v(" Build and use the code")]),e._v(" "),s("p",[e._v("The manually generated "),s("em",[e._v("Client")]),e._v(" code is built and used in "),s("em",[e._v("exactly")]),e._v(" the same way as "),s("RouterLink",{attrs:{to:"/ko/middleware/micrortps.html#client_firmware"}},[e._v("automatically generated Client code")]),e._v(".")],1),e._v(" "),s("p",[e._v("Specifically, once manually generated, the "),s("em",[e._v("Client")]),e._v(" source code is compiled and built into the PX4 firmware as part of the normal build process. For example, to compile the code and include it in firmware for NuttX/Pixhawk targets:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" px4_fmu-v4_default upload\n")])])]),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),s("p",[e._v("You must first "),s("a",{attrs:{href:"#disable-automatic-bridge-code-generation"}},[e._v("disable automatic bridge code generation")]),e._v(" so that the toolchain uses the manually generated source code (and does not attempt to regenerate it).")])]),e._v(" "),s("p",[e._v("The manually generated "),s("em",[e._v("Agent")]),e._v(" code is also compiled and used in the same way as the "),s("RouterLink",{attrs:{to:"/ko/middleware/micrortps.html#agent-in-a-ros-independent-offboard-fast-rtps-interface"}},[e._v("automatically generated code")]),e._v(". The only difference is that the manually source code is created in "),s("strong",[e._v("src/modules/micrortps_bridge/micrortps_agent")]),e._v(" instead of "),s("strong",[s("emphasis",[e._v("build/BUILDPLATFORM")])],1),s("strong",[e._v("/src/modules/micrortps_bridge/micrortps_agent/")]),e._v(".")],1)])}),[],!1,null,null,null);t.default=n.exports}}]);