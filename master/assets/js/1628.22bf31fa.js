(window.webpackJsonp=window.webpackJsonp||[]).push([[1628],{3040:function(t,e,s){"use strict";s.r(e);var a=s(19),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"手动生成客户端和代理端代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#手动生成客户端和代理端代码"}},[t._v("#")]),t._v(" 手动生成客户端和代理端代码")]),t._v(" "),s("p",[t._v("本主题演示如何手动生成客户端和代理的代码（而不是编译 PX4 时"),s("RouterLink",{attrs:{to:"/zh/middleware/micrortps.html"}},[t._v("自动生成")]),t._v("的）。")],1),t._v(" "),s("p",[t._v("代码是使用 python 脚本生成的："),s("strong",[t._v("/Tools/generate_microRTPS_bridge.py")]),t._v("。")]),t._v(" "),s("p",[t._v("首先禁用桥接代码的自动生成。 First disable automatic generation of bridge code. Set the variable "),s("code",[t._v("GENERATE_RTPS_BRIDGE")]),t._v(" to "),s("em",[t._v("off")]),t._v(" in the "),s("strong",[t._v(".cmake")]),t._v(" file for the target platform:\n:::")]),t._v(" "),s("h2",{attrs:{id:"禁用自动桥接代码生成"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#禁用自动桥接代码生成"}},[t._v("#")]),t._v(" 禁用自动桥接代码生成")]),t._v(" "),s("p",[t._v("First disable automatic generation of bridge code. Set the variable "),s("code",[t._v("GENERATE_RTPS_BRIDGE")]),t._v(" to "),s("em",[t._v("off")]),t._v(" in the "),s("strong",[t._v(".cmake")]),t._v(" file for the target platform:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("set"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("GENERATE_RTPS_BRIDGE off"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"使用-generate-micrortps-bridge-py"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-generate-micrortps-bridge-py"}},[t._v("#")]),t._v(" 使用 generate_microRTPS_bridge. py")]),t._v(" "),s("p",[t._v("The "),s("em",[t._v("generate_microRTPS_bridge")]),t._v(" tool's command syntax is shown below:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /path/to/PX4/PX4-Autopilot/msg/tools\n$ python generate_microRTPS_bridge.py -h\nusage: generate_microRTPS_bridge.py "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-h"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-j IDL_DIR"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-m"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-l"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                                    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-t MSGDIR"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-b UORB_TEMPLATES"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                                    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-q URTPS_TEMPLATES"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-y YAML_FILE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                                    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-p PACKAGE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-o AGENTDIR"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-u CLIENTDIR"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                                    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-f "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("FASTRTPSGEN"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                                    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-g FASTRTPSGEN_INCLUDE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                                    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-r "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ROS2_DISTRO"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--delete-tree"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\noptional arguments:\n  -h, --help            show this "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("help")]),t._v(" message and "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exit")]),t._v("\n  -a, --agent           Flag "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" generate the agent, by default is "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" -c\n                        is not specified\n  -c, --client          Flag "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" generate the client, by default is "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" -a\n                        is not specified\n  -i, --generate-idl    Flag "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" generate idl files "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" each msg\n  -j IDL_DIR, --idl-dir IDL_DIR\n                        IDL files "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dir")]),t._v("\n  -m, --mkdir-build     Flag to create "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'build'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dir")]),t._v("\n  -l, --generate-cmakelists\n                        Flag to generate a CMakeLists.txt "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" the micro-\n                        RTPS agent\n  -t MSGDIR, --topic-msg-dir MSGDIR\n                        Topics message, by default using relative path "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'msg/'")]),t._v("\n  -b UORB_TEMPLATES, --uorb-templates-dir UORB_TEMPLATES\n                        uORB templates, by default using relative path to\n                        msgdir "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'templates/uorb_microcdr'")]),t._v("\n  -q URTPS_TEMPLATES, --urtps-templates-dir URTPS_TEMPLATES\n                        uRTPS templates, by default using relative path to\n                        msgdir "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'templates/urtps'")]),t._v("\n  -y YAML_FILE, --rtps-ids-file YAML_FILE\n                        RTPS msg IDs definition path, by default using\n                        relative path to msgdir\n                        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tools/uorb_rtps_message_ids.yaml'")]),t._v("\n  -p PACKAGE, --package PACKAGE\n                        Msg package naming, by default px4\n  -o AGENTDIR, --agent-outdir AGENTDIR\n                        Agent output dir, by default using relative path\n                        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'src/modules/micrortps_bridge/micrortps_agent'")]),t._v("\n  -u CLIENTDIR, --client-outdir CLIENTDIR\n                        Client output dir, by default using relative path\n                        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'src/modules/micrortps_bridge/micrortps_client'")]),t._v("\n  -f "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("FASTRTPSGEN"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(", --fastrtpsgen-dir "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("FASTRTPSGEN"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                        fastrtpsgen installation dir, only needed "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v("\n                        fastrtpsgen is not "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("PATH")]),t._v(", by default empty\n  -g FASTRTPSGEN_INCLUDE, --fastrtpsgen-include FASTRTPSGEN_INCLUDE\n                        directory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ies"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" to "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" to preprocessor include paths of\n                        fastrtpsgen, by default empty\n  -r "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ROS2_DISTRO"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(", --ros2-distro "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ROS2_DISTRO"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                        ROS "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" distro, only required "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" generating the agent "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v("\n                        usage with ROS "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" nodes, by default empty\n  --delete-tree         Delete "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dir")]),t._v(" tree output dir"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v(":::caution\nUsing with "),s("code",[t._v("--delete-tree")]),t._v(" option erases the content of the "),s("code",[t._v("CLIENTDIR")]),t._v(" and the "),s("code",[t._v("AGENTDIR")]),t._v(" before creating new files and folders.\n:::")]),t._v(" "),s("ul",[s("li",[t._v("The arguments "),s("code",[t._v("--send/-s")]),t._v(" and "),s("code",[t._v("--receive/-r")]),t._v(" specify the uORB topics that can be sent/received from PX4. Code will only be generated for specified messages. 将仅为指定的消息生成代码。")]),t._v(" "),s("li",[t._v("输出显示在 "),s("code",[t._v("CLIENTDIR")]),t._v(" (默认情况下 "),s("code",[t._v("src/modules/micrortps_bridge/micrortps_client</0 >) 和 <code>AGENTDIR")]),t._v(" (默认情况下 "),s("code",[t._v("-u src/modules/micrortps_bridge/micrortps_agent</0 >) 中。</li> <li>如果未指定标志 <code>-a")]),t._v(" 或 "),s("code",[t._v("-c")]),t._v("，则将生成并安装客户端和代理。")]),t._v(" "),s("li",[t._v("如果未在默认位置（"),s("code",[t._v("-f /path/to/fastrtps/installation/bin")]),t._v("）安装 "),s("em",[t._v("Fast rtps")]),t._v("，则可能需要 "),s("code",[t._v("-f")]),t._v(" 选项。")])]),t._v(" "),s("p",[t._v("可以在此处找到网桥的手动生成的代码（默认情况下）：")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /path/to/PX4/Firmware\n$ python Tools/generate_microRTPS_bridge.py -s msg/sensor_baro.msg -r msg/sensor_combined.msg\n")])])]),s("h2",{attrs:{id:"生成代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生成代码"}},[t._v("#")]),t._v(" 生成代码")]),t._v(" "),s("p",[t._v("Code is generated for the "),s("em",[t._v("Client")]),t._v(", "),s("em",[t._v("Agent")]),t._v(", "),s("em",[t._v("CDR serialization/deserialization")]),t._v(" of uORB messages, and the definition of the associated RTPS messages (IDL files).")]),t._v(" "),s("p",[t._v("Manually generated code for the bridge can be found here (by default):")]),t._v(" "),s("ul",[s("li",[s("em",[t._v("客户端")]),t._v(": "),s("strong",[t._v("src/modules/micrortps_bridge/micrortps_client/")])]),t._v(" "),s("li",[s("em",[t._v("代理端")]),t._v(": "),s("strong",[t._v("src/modules/micrortps_bridge/micrortps_agent/")])])]),t._v(" "),s("h3",{attrs:{id:"uorb-序列化代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#uorb-序列化代码"}},[t._v("#")]),t._v(" uORB 序列化代码")]),t._v(" "),s("p",[s("em",[t._v("FastRTSP")]),t._v(" 使用 IDL 文件来定义 RTPS 消息的结构（在本例中，映射到 uORB 主题的 RTPS 消息）。 "),s("em",[t._v("FastRTSP")]),t._v(" uses IDL files to define the structure of RTPS messages (in this case, RTPS messages that map to uORB topics). They are used to generate code for the "),s("em",[t._v("Agent")]),t._v(", and "),s("em",[t._v("FastRTSP")]),t._v(" applications that need to publish/subscribe to uORB topics.")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("void serialize_sensor_combined"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("const struct sensor_combined_s *input, char *output, uint32_t *length, struct microCDR *microCDRWriter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nvoid deserialize_sensor_combined"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("struct sensor_combined_s *output, char *input, struct microCDR *microCDRReader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"rtps-报文-idl-文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rtps-报文-idl-文件"}},[t._v("#")]),t._v(" RTPS 报文 IDL 文件")]),t._v(" "),s("p",[t._v("IDL files are generated from the uORB "),s("strong",[t._v(".msg")]),t._v(" files ("),s("RouterLink",{attrs:{to:"/zh/middleware/micrortps.html#supported-uorb-messages"}},[t._v("for selected uORB topics")]),t._v(") in the generation of the bridge. These can be found in: "),s("strong",[t._v("src/modules/micrortps_bridge/micrortps_agent/idl/")])],1),t._v(" "),s("p",[s("em",[t._v("Fast DDS")]),t._v(" uses IDL files to define the structure of RTPS/DDS messages (in this case, RTPS/DDS messages that map to uORB topics). They are used to generate code for the "),s("em",[t._v("Agent")]),t._v(", and "),s("em",[t._v("Fast DDS")]),t._v(" applications that need to publish/subscribe to uORB topics.")]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("IDL")]),t._v(" "),s("p",[t._v("files are compiled to C++ by the "),s("em",[t._v("fastrtpsgen")]),t._v(" tool.")])]),t._v(" "),s("h2",{attrs:{id:"代码生成验证"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码生成验证"}},[t._v("#")]),t._v(" 代码生成验证")]),t._v(" "),s("p",[t._v("The manually generated "),s("em",[t._v("Client")]),t._v(" code is built and used in "),s("em",[t._v("exactly")]),t._v(" the same way as "),s("RouterLink",{attrs:{to:"/zh/middleware/micrortps.html#client-px4-firmware"}},[t._v("automatically generated Client code")]),t._v(".")],1),t._v(" "),s("p",[t._v("Agent directory:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("$ tree src/modules/micrortps_bridge/micrortps_agent\nsrc/modules/micrortps_bridge/micrortps_agent\n├── build\n├── CMakeLists.txt\n├── idl\n│   ├── sensor_baro_.idl\n│   └── sensor_combined_.idl\n├── microRTPS_agent.cpp\n├── microRTPS_transport.cpp\n├── microRTPS_transport.h\n├── RtpsTopics.cpp\n├── RtpsTopics.h\n├── sensor_baro_.cpp\n├── sensor_baro_.h\n├── sensor_baro_Publisher.cpp\n├── sensor_baro_Publisher.h\n├── sensor_baro_PubSubTypes.cpp\n├── sensor_baro_PubSubTypes.h\n├── sensor_combined_.cpp\n├── sensor_combined_.h\n├── sensor_combined_PubSubTypes.cpp\n├── sensor_combined_PubSubTypes.h\n├── sensor_combined_Subscriber.cpp\n└── sensor_combined_Subscriber.h\n "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" directories, "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v(" files\n")])])]),s("p",[t._v("Client directory:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("$ tree src/modules/micrortps_bridge/micrortps_client\nsrc/modules/micrortps_bridge/micrortps_client\n├── CMakeLists.txt\n├── microRTPS_client.cpp\n├── microRTPS_client_dummy.cpp\n├── microRTPS_client_main.cpp\n├── microRTPS_transport.cpp\n└── microRTPS_transport.h\n "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" directories, "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" files\n")])])]),s("h2",{attrs:{id:"构建并使用代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#构建并使用代码"}},[t._v("#")]),t._v(" 构建并使用代码")]),t._v(" "),s("p",[t._v("The manually generated "),s("em",[t._v("Client")]),t._v(" code is built and used in "),s("em",[t._v("exactly")]),t._v(" the same way as "),s("RouterLink",{attrs:{to:"/zh/middleware/micrortps.html#client_firmware"}},[t._v("automatically generated Client code")]),t._v(".")],1),t._v(" "),s("p",[t._v("Specifically, once manually generated, the "),s("em",[t._v("Client")]),t._v(" source code is compiled and built into the PX4 Firmware as part of the normal build process. For example, to compile the code and include it in Firmware for NuttX/Pixhawk targets:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_fmu-v4_default upload\n")])])]),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),s("p",[t._v("You must first "),s("a",{attrs:{href:"#disable-automatic-bridge-code-generation"}},[t._v("disable automatic bridge code generation")]),t._v(" so that the toolchain uses the manually generated source code (and does not attempt to regenerate it).")])]),t._v(" "),s("p",[t._v("The manually generated "),s("em",[t._v("Agent")]),t._v(" code is also compiled and used in the same way as the "),s("RouterLink",{attrs:{to:"/zh/middleware/micrortps.html#agent-in-an-offboard-fast-dds-interface-ros-independent"}},[t._v("automatically generated code")]),t._v(". The only difference is that the manually source code is created in "),s("strong",[t._v("src/modules/micrortps_bridge/micrortps_agent")]),t._v(" instead of "),s("strong",[t._v("build/BUILDPLATFORM")]),s("strong",[t._v("/src/modules/micrortps_bridge/micrortps_agent/")]),t._v(".")],1)])}),[],!1,null,null,null);e.default=n.exports}}]);