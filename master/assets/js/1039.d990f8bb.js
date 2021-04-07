(window.webpackJsonp=window.webpackJsonp||[]).push([[1039],{2183:function(t,e,s){"use strict";s.r(e);var a=s(18),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"manually-generate-client-and-agent-code"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#manually-generate-client-and-agent-code"}},[t._v("#")]),t._v(" Manually Generate Client and Agent Code")]),t._v(" "),s("p",[t._v("This topic shows how to manually generate the code for the client and the agent (instead of "),s("RouterLink",{attrs:{to:"/ko/middleware/micrortps.html"}},[t._v("automatically generating")]),t._v(" it when the PX4 firmware is compiled).")],1),t._v(" "),s("p",[t._v("The code is generated using the python script: "),s("strong",[t._v("/Tools/generate_microRTPS_bridge.py")]),t._v(".")]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("This method should only be used for debugging purposes when creating new messages or if you just want to consume the generated code outside of the PX4 domain. Otherwise please use the "),s("em",[t._v("normal")]),t._v(" method explained in "),s("RouterLink",{attrs:{to:"/ko/middleware/micrortps.html"}},[t._v("PX4-Fast RTPS(DDS) Bridge")]),t._v(", which uses the PX4-Autopilot build system.")],1)]),t._v(" "),s("h2",{attrs:{id:"disable-automatic-bridge-code-generation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#disable-automatic-bridge-code-generation"}},[t._v("#")]),t._v(" Disable automatic bridge code generation")]),t._v(" "),s("p",[t._v("First disable automatic generation of bridge code. Set the variable "),s("code",[t._v("GENERATE_RTPS_BRIDGE")]),t._v(" to "),s("em",[t._v("off")]),t._v(" in the "),s("strong",[t._v(".cmake")]),t._v(" file for the target platform:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("set"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("GENERATE_RTPS_BRIDGE off"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"using-generate-micrortps-bridge-py"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-generate-micrortps-bridge-py"}},[t._v("#")]),t._v(" Using generate_microRTPS_bridge.py")]),t._v(" "),s("p",[t._v("The "),s("em",[t._v("generate_microRTPS_bridge")]),t._v(" tool's command syntax is shown below:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /path/to/PX4/PX4-Autopilot/msg/tools\n$ python generate_microRTPS_bridge.py -h\nusage: generate_microRTPS_bridge.py "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-h"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-j IDL_DIR"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-m"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-l"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                                    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-t MSGDIR"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-b UORB_TEMPLATES"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                                    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-q URTPS_TEMPLATES"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-y YAML_FILE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                                    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-p PACKAGE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-o AGENTDIR"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-u CLIENTDIR"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                                    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-f "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("FASTRTPSGEN"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                                    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-g FASTRTPSGEN_INCLUDE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                                    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-r "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ROS2_DISTRO"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--delete-tree"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\noptional arguments:\n  -h, --help            show this "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("help")]),t._v(" message and "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exit")]),t._v("\n  -a, --agent           Flag "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" generate the agent, by default is "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" -c\n                        is not specified\n  -c, --client          Flag "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" generate the client, by default is "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" -a\n                        is not specified\n  -i, --generate-idl    Flag "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" generate idl files "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" each msg\n  -j IDL_DIR, --idl-dir IDL_DIR\n                        IDL files "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dir")]),t._v("\n  -m, --mkdir-build     Flag to create "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'build'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dir")]),t._v("\n  -l, --generate-cmakelists\n                        Flag to generate a CMakeLists.txt "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" the micro-\n                        RTPS agent\n  -t MSGDIR, --topic-msg-dir MSGDIR\n                        Topics message, by default using relative path "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'msg/'")]),t._v("\n  -b UORB_TEMPLATES, --uorb-templates-dir UORB_TEMPLATES\n                        uORB templates, by default using relative path to\n                        msgdir "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'templates/uorb_microcdr'")]),t._v("\n  -q URTPS_TEMPLATES, --urtps-templates-dir URTPS_TEMPLATES\n                        uRTPS templates, by default using relative path to\n                        msgdir "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'templates/urtps'")]),t._v("\n  -y YAML_FILE, --rtps-ids-file YAML_FILE\n                        RTPS msg IDs definition path, by default using\n                        relative path to msgdir\n                        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tools/uorb_rtps_message_ids.yaml'")]),t._v("\n  -p PACKAGE, --package PACKAGE\n                        Msg package naming, by default px4\n  -o AGENTDIR, --agent-outdir AGENTDIR\n                        Agent output dir, by default using relative path\n                        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'src/modules/micrortps_bridge/micrortps_agent'")]),t._v("\n  -u CLIENTDIR, --client-outdir CLIENTDIR\n                        Client output dir, by default using relative path\n                        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'src/modules/micrortps_bridge/micrortps_client'")]),t._v("\n  -f "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("FASTRTPSGEN"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(", --fastrtpsgen-dir "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("FASTRTPSGEN"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                        fastrtpsgen installation dir, only needed "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v("\n                        fastrtpsgen is not "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("PATH")]),t._v(", by default empty\n  -g FASTRTPSGEN_INCLUDE, --fastrtpsgen-include FASTRTPSGEN_INCLUDE\n                        directory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ies"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" to "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" to preprocessor include paths of\n                        fastrtpsgen, by default empty\n  -r "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ROS2_DISTRO"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(", --ros2-distro "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ROS2_DISTRO"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                        ROS "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" distro, only required "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" generating the agent "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v("\n                        usage with ROS "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" nodes, by default empty\n  --delete-tree         Delete "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dir")]),t._v(" tree output dir"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v(":::caution\nUsing with "),s("code",[t._v("--delete-tree")]),t._v(" option erases the content of the "),s("code",[t._v("CLIENTDIR")]),t._v(" and the "),s("code",[t._v("AGENTDIR")]),t._v(" before creating new files and folders.\n:::")]),t._v(" "),s("ul",[s("li",[t._v("The arguments "),s("code",[t._v("--send/-s")]),t._v(" and "),s("code",[t._v("--receive/-r")]),t._v(" specify the uORB topics that can be sent/received from PX4. Code will only be generated for specified messages.")]),t._v(" "),s("li",[t._v("The output appears in "),s("code",[t._v("CLIENTDIR")]),t._v(" ("),s("code",[t._v("-o src/modules/micrortps_bridge/micrortps_client")]),t._v(", by default) and in the "),s("code",[t._v("AGENTDIR")]),t._v(" ("),s("code",[t._v("-u src/modules/micrortps_bridge/micrortps_agent")]),t._v(", by default).")]),t._v(" "),s("li",[t._v("If no flag "),s("code",[t._v("-a")]),t._v(" or "),s("code",[t._v("-c")]),t._v(" is specified, both the client and the agent will be generated and installed.")]),t._v(" "),s("li",[t._v("The "),s("code",[t._v("-f")]),t._v(" option may be needed if "),s("em",[t._v("Fast DDS")]),t._v(" was not installed in the default location ("),s("code",[t._v("-f /path/to/fastdds/installation/bin")]),t._v(").")])]),t._v(" "),s("p",[t._v("The example below shows how you can generate bridge code to publish/subscribe just the "),s("code",[t._v("sensor_baro")]),t._v(" single uORB topic.")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /path/to/PX4/Firmware\n$ python Tools/generate_microRTPS_bridge.py -s msg/sensor_baro.msg -r msg/sensor_combined.msg\n")])])]),s("h2",{attrs:{id:"generated-code"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#generated-code"}},[t._v("#")]),t._v(" Generated code")]),t._v(" "),s("p",[t._v("Code is generated for the "),s("em",[t._v("Client")]),t._v(", "),s("em",[t._v("Agent")]),t._v(", "),s("em",[t._v("CDR serialization/deserialization")]),t._v(" of uORB messages, and the definition of the associated RTPS messages (IDL files).")]),t._v(" "),s("p",[t._v("Manually generated code for the bridge can be found here (by default):")]),t._v(" "),s("ul",[s("li",[s("em",[t._v("Client")]),t._v(": "),s("strong",[t._v("src/modules/micrortps_bridge/micrortps_client/")])]),t._v(" "),s("li",[s("em",[t._v("Agent")]),t._v(": "),s("strong",[t._v("src/modules/micrortps_bridge/micrortps_agent/")])])]),t._v(" "),s("h3",{attrs:{id:"uorb-serialization-code"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#uorb-serialization-code"}},[t._v("#")]),t._v(" uORB serialization code")]),t._v(" "),s("p",[t._v("Serialization functions are generated for all the uORB topics as part of the normal PX4 compilation process (and also for manual generation). For example, the following functions would be generated for the "),s("em",[t._v("sensor_combined.msg")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("void serialize_sensor_combined"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("const struct sensor_combined_s *input, char *output, uint32_t *length, struct microCDR *microCDRWriter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nvoid deserialize_sensor_combined"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("struct sensor_combined_s *output, char *input, struct microCDR *microCDRReader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"rtps-message-idl-files"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rtps-message-idl-files"}},[t._v("#")]),t._v(" RTPS message IDL files")]),t._v(" "),s("p",[t._v("IDL files are generated from the uORB "),s("strong",[t._v(".msg")]),t._v(" files ("),s("RouterLink",{attrs:{to:"/ko/middleware/micrortps.html#supported-uorb-messages"}},[t._v("for selected uORB topics")]),t._v(") in the generation of the bridge. These can be found in: "),s("strong",[t._v("src/modules/micrortps_bridge/micrortps_agent/idl/")])],1),t._v(" "),s("p",[s("em",[t._v("Fast DDS")]),t._v(" uses IDL files to define the structure of RTPS/DDS messages (in this case, RTPS/DDS messages that map to uORB topics). They are used to generate code for the "),s("em",[t._v("Agent")]),t._v(", and "),s("em",[t._v("Fast DDS")]),t._v(" applications that need to publish/subscribe to uORB topics.")]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("IDL")]),t._v(" "),s("p",[t._v("files are compiled to C++ by the "),s("em",[t._v("fastrtpsgen")]),t._v(" tool.")])]),t._v(" "),s("h2",{attrs:{id:"verify-code-generation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#verify-code-generation"}},[t._v("#")]),t._v(" Verify code generation")]),t._v(" "),s("p",[t._v("The manually generated "),s("em",[t._v("Client")]),t._v(" code is built and used in "),s("em",[t._v("exactly")]),t._v(" the same way as "),s("RouterLink",{attrs:{to:"/ko/middleware/micrortps.html#client-px4-firmware"}},[t._v("automatically generated Client code")]),t._v(".")],1),t._v(" "),s("p",[t._v("Agent directory:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("$ tree src/modules/micrortps_bridge/micrortps_agent\nsrc/modules/micrortps_bridge/micrortps_agent\n├── build\n├── CMakeLists.txt\n├── idl\n│   ├── sensor_baro_.idl\n│   └── sensor_combined_.idl\n├── microRTPS_agent.cpp\n├── microRTPS_timesync.cpp\n├── microRTPS_timesync.h\n├── microRTPS_transport.cpp\n├── microRTPS_transport.h\n├── RtpsTopics.cpp\n├── RtpsTopics.h\n├── sensor_baro_.cpp\n├── sensor_baro_.h\n├── sensor_baro_Publisher.cpp\n├── sensor_baro_Publisher.h\n├── sensor_baro_PubSubTypes.cpp\n├── sensor_baro_PubSubTypes.h\n├── sensor_combined_.cpp\n├── sensor_combined_.h\n├── sensor_combined_PubSubTypes.cpp\n├── sensor_combined_PubSubTypes.h\n├── sensor_combined_Subscriber.cpp\n└── sensor_combined_Subscriber.h\n "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" directories, "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v(" files\n")])])]),s("p",[t._v("Client directory:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("$ tree src/modules/micrortps_bridge/micrortps_client\nsrc/modules/micrortps_bridge/micrortps_client\n├── CMakeLists.txt\n├── microRTPS_client.cpp\n├── microRTPS_client_dummy.cpp\n├── microRTPS_client_main.cpp\n├── microRTPS_transport.cpp\n└── microRTPS_transport.h\n "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" directories, "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" files\n")])])]),s("h2",{attrs:{id:"build-and-use-the-code"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#build-and-use-the-code"}},[t._v("#")]),t._v(" Build and use the code")]),t._v(" "),s("p",[t._v("The manually generated "),s("em",[t._v("Client")]),t._v(" code is built and used in "),s("em",[t._v("exactly")]),t._v(" the same way as "),s("RouterLink",{attrs:{to:"/ko/middleware/micrortps.html#client_firmware"}},[t._v("automatically generated Client code")]),t._v(".")],1),t._v(" "),s("p",[t._v("Specifically, once manually generated, the "),s("em",[t._v("Client")]),t._v(" source code is compiled and built into the PX4 Firmware as part of the normal build process. For example, to compile the code and include it in Firmware for NuttX/Pixhawk targets:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_fmu-v4_rtps upload\n")])])]),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("You must first "),s("a",{attrs:{href:"#disable-automatic-bridge-code-generation"}},[t._v("disable automatic bridge code generation")]),t._v(" so that the toolchain uses the manually generated source code (and does not attempt to regenerate it).")])]),t._v(" "),s("p",[t._v("The manually generated "),s("em",[t._v("Agent")]),t._v(" code is also compiled and used in the same way as the "),s("RouterLink",{attrs:{to:"/ko/middleware/micrortps.html#agent-in-a-ros-independent-offboard-fast-rtps-interface"}},[t._v("automatically generated code")]),t._v(". The only difference is that the manually source code is created in "),s("strong",[t._v("src/modules/micrortps_bridge/micrortps_agent")]),t._v(" instead of "),s("strong",[t._v("build/BUILDPLATFORM")]),s("strong",[t._v("/src/modules/micrortps_bridge/micrortps_agent/")]),t._v(".")],1)])}),[],!1,null,null,null);e.default=n.exports}}]);