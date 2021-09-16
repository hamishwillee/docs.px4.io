(window.webpackJsonp=window.webpackJsonp||[]).push([[1216],{2361:function(t,s,e){"use strict";e.r(s);var a=e(19),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"클라이언트-및-에이전트-코드-수동-생성"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#클라이언트-및-에이전트-코드-수동-생성"}},[t._v("#")]),t._v(" 클라이언트 및 에이전트 코드 수동 생성")]),t._v(" "),e("p",[t._v("클라이언트와 에이전트 코드를 수동으로 생성하는 방법을 설명합니다(PX4 펌웨어가 컴파일될 때 코드를 "),e("RouterLink",{attrs:{to:"/ko/middleware/micrortps.html"}},[t._v("자동으로 생성")]),t._v("하는 대신).")],1),t._v(" "),e("p",[t._v("코드는 Python 스크립트 "),e("strong",[t._v("/Tools/generate_microRTPS_bridge.py")]),t._v("를 사용하여 생성합니다.")]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[t._v("이 방법은 새 메시지를 만들거나 PX4 도메인 외부에서 생성된 코드를 사용하려는 경우에 디버깅 목적으로 사용하여야 합니다. 그렇지 않으면, PX4-Autopilot 빌드 시스템을 사용하는 "),e("RouterLink",{attrs:{to:"/ko/middleware/micrortps.html"}},[t._v("PX4-Fast RTPS(DDS) Bridge")]),t._v("에 설명된 "),e("em",[t._v("일반")]),t._v(" 방법을 사용하십시오.")],1)]),t._v(" "),e("h2",{attrs:{id:"자동-브리지-코드-생성-비활성화"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#자동-브리지-코드-생성-비활성화"}},[t._v("#")]),t._v(" 자동 브리지 코드 생성 비활성화")]),t._v(" "),e("p",[t._v("먼저, 브리지 코드 자동 생성을 비활성화합니다. 대상 플랫폼의 "),e("strong",[t._v(".cmake")]),t._v(" 파일에서 "),e("code",[t._v("GENERATE_RTPS_BRIDGE")]),t._v(" 변수를 "),e("em",[t._v("off")]),t._v("로 설정합니다.")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("set"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("GENERATE_RTPS_BRIDGE off"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h2",{attrs:{id:"generate-micrortps-bridge-py-사용"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#generate-micrortps-bridge-py-사용"}},[t._v("#")]),t._v(" generate_microRTPS_bridge.py 사용")]),t._v(" "),e("p",[e("em",[t._v("generate_microRTPS_bridge")]),t._v(" 스크립트의 명령 구문은 다음과 같습니다.")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /path/to/PX4/PX4-Autopilot/msg/tools\n$ python generate_microRTPS_bridge.py -h\nusage: generate_microRTPS_bridge.py "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-h"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-a"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-c"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-i"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-j IDL_DIR"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-m"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-l"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                                    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-t MSGDIR"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-b UORB_TEMPLATES"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                                    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-q URTPS_TEMPLATES"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-y YAML_FILE"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                                    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-p PACKAGE"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-o AGENTDIR"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-u CLIENTDIR"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                                    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-f "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("FASTRTPSGEN"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                                    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-g FASTRTPSGEN_INCLUDE"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                                    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-r "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ROS2_DISTRO"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--delete-tree"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\noptional arguments:\n  -h, --help            show this "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("help")]),t._v(" message and "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exit")]),t._v("\n  -a, --agent           Flag "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" generate the agent, by default is "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" -c\n                        is not specified\n  -c, --client          Flag "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" generate the client, by default is "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" -a\n                        is not specified\n  -i, --generate-idl    Flag "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" generate idl files "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" each msg\n  -j IDL_DIR, --idl-dir IDL_DIR\n                        IDL files "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("dir")]),t._v("\n  -m, --mkdir-build     Flag to create "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'build'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("dir")]),t._v("\n  -l, --generate-cmakelists\n                        Flag to generate a CMakeLists.txt "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" the micro-\n                        RTPS agent\n  -t MSGDIR, --topic-msg-dir MSGDIR\n                        Topics message, by default using relative path "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'msg/'")]),t._v("\n  -b UORB_TEMPLATES, --uorb-templates-dir UORB_TEMPLATES\n                        uORB templates, by default using relative path to\n                        msgdir "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'templates/uorb_microcdr'")]),t._v("\n  -q URTPS_TEMPLATES, --urtps-templates-dir URTPS_TEMPLATES\n                        uRTPS templates, by default using relative path to\n                        msgdir "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'templates/urtps'")]),t._v("\n  -y YAML_FILE, --rtps-ids-file YAML_FILE\n                        RTPS msg IDs definition path, by default using\n                        relative path to msgdir\n                        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tools/uorb_rtps_message_ids.yaml'")]),t._v("\n  -p PACKAGE, --package PACKAGE\n                        Msg package naming, by default px4\n  -o AGENTDIR, --agent-outdir AGENTDIR\n                        Agent output dir, by default using relative path\n                        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'src/modules/micrortps_bridge/micrortps_agent'")]),t._v("\n  -u CLIENTDIR, --client-outdir CLIENTDIR\n                        Client output dir, by default using relative path\n                        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'src/modules/micrortps_bridge/micrortps_client'")]),t._v("\n  -f "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("FASTRTPSGEN"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(", --fastrtpsgen-dir "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("FASTRTPSGEN"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                        fastrtpsgen installation dir, only needed "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v("\n                        fastrtpsgen is not "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("PATH")]),t._v(", by default empty\n  -g FASTRTPSGEN_INCLUDE, --fastrtpsgen-include FASTRTPSGEN_INCLUDE\n                        directory"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ies"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" to "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" to preprocessor include paths of\n                        fastrtpsgen, by default empty\n  -r "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ROS2_DISTRO"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(", --ros2-distro "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ROS2_DISTRO"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                        ROS "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" distro, only required "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" generating the agent "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v("\n                        usage with ROS "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" nodes, by default empty\n  --delete-tree         Delete "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("dir")]),t._v(" tree output dir"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v(":::caution\n"),e("code",[t._v("--delete-tree")]),t._v(" 옵션과 함께 사용하면 새 파일과 폴더를 만들기 전에 "),e("code",[t._v("CLIENTDIR")]),t._v(" 및 "),e("code",[t._v("AGENTDIR")]),t._v("의 내용이 지워집니다.\n:::")]),t._v(" "),e("ul",[e("li",[t._v("인수 "),e("code",[t._v("--send/-s")]),t._v(" 및 "),e("code",[t._v("--receive/-r")]),t._v("은 PX4에서 송수신하는 uORB 주제를 지정합니다. 코드는 지정된 메시지에 대해서만 생성됩니다.")]),t._v(" "),e("li",[t._v("출력은 "),e("code",[t._v("CLIENTDIR")]),t._v("(기본적으로 "),e("code",[t._v("-o src/modules/micrortps_bridge/micrortps_client")]),t._v(") 및 "),e("code",[t._v("AGENTDIR")]),t._v("("),e("code",[t._v("-u src/modules/micrortps_bridge/micrortps_agent")]),t._v(" 기본값)에 표시됩니다.")]),t._v(" "),e("li",[t._v("플래그 "),e("code",[t._v("-a")]),t._v(" 또는 "),e("code",[t._v("-c")]),t._v("를 지정하지 않으면 클라이언트와 에이전트가 모두 생성되고 설치됩니다.")]),t._v(" "),e("li",[e("em",[t._v("Fast DDS")]),t._v("가 기본 위치("),e("code",[t._v("-f /path/to/fastdds/installation/bin</0)에 설치되지 않은 경우 <code>-f")]),t._v(" 옵션이 필요할 수 있습니다.")])]),t._v(" "),e("p",[t._v("아래 예는 "),e("code",[t._v("sensor_baro")]),t._v(" 단일 uORB 주제만 게시/구독하는 브리지 코드를 생성하는 방법을 보여줍니다.")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /path/to/PX4/Firmware\n$ python Tools/generate_microRTPS_bridge.py -s msg/sensor_baro.msg -r msg/sensor_combined.msg\n")])])]),e("h2",{attrs:{id:"생성된-코드"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#생성된-코드"}},[t._v("#")]),t._v(" 생성된 코드")]),t._v(" "),e("p",[t._v("uORB 메시지의 "),e("em",[t._v("클라이언트")]),t._v(", "),e("em",[t._v("에이전트")]),t._v(", "),e("em",[t._v("CDR 직렬화/역직렬화")]),t._v(" 및 관련 RTPS 메시지(IDL 파일)를 정의하는 코드가 생성됩니다.")]),t._v(" "),e("p",[t._v("브리지에 대해 수동으로 생성된 코드는 여기(기본값)에서 찾을 수 있습니다.")]),t._v(" "),e("ul",[e("li",[e("em",[t._v("클라이언트")]),t._v(": "),e("strong",[t._v("src/modules/micrortps_bridge/micrortps_client/")])]),t._v(" "),e("li",[e("em",[t._v("에이전트")]),t._v(": "),e("strong",[t._v("src/modules/micrortps_bridge/micrortps_agent/")])])]),t._v(" "),e("h3",{attrs:{id:"uorb-직렬화-코드"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#uorb-직렬화-코드"}},[t._v("#")]),t._v(" uORB 직렬화 코드")]),t._v(" "),e("p",[t._v("직렬화 함수는 일반 PX4 컴파일 프로세스의 일부로 모든 uORB 주제에 대하여 생성됩니다(또한 수동 생성을 위하여). 예를 들어 "),e("em",[t._v("sensor_combined.msg")]),t._v("에 대해 다음 함수가 생성됩니다.")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("void serialize_sensor_combined"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("const struct sensor_combined_s *input, char *output, uint32_t *length, struct microCDR *microCDRWriter"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nvoid deserialize_sensor_combined"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("struct sensor_combined_s *output, char *input, struct microCDR *microCDRReader"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h3",{attrs:{id:"rtps-메시지-idl-파일"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rtps-메시지-idl-파일"}},[t._v("#")]),t._v(" RTPS 메시지 IDL 파일")]),t._v(" "),e("p",[t._v("IDL 파일은 브리지 생성 시 uORB "),e("strong",[t._v(".msg")]),t._v(" 파일("),e("RouterLink",{attrs:{to:"/ko/middleware/micrortps.html#supported-uorb-messages"}},[t._v("선택한 uORB 주제에 대하여")]),t._v(")에서 생성됩니다. 생성된 파일은"),e("strong",[t._v("src/modules/micrortps_bridge/micrortps_agent/idl/")]),t._v(" 에서 찾을 수 있습니다.")],1),t._v(" "),e("p",[e("em",[t._v("Fast DDS")]),t._v("는 IDL 파일을 사용하여 RTPS/DDS 메시지(이 경우 uORB 주제에 매핑되는 RTPS/DDS 메시지)의 구조를 정의합니다. They are used to generate code for the "),e("em",[t._v("Agent")]),t._v(", and "),e("em",[t._v("Fast DDS")]),t._v(" applications that need to publish/subscribe to uORB topics.")]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("IDL")]),t._v(" "),e("p",[t._v("파일은 "),e("em",[t._v("fastrtpsgen")]),t._v(" 도구에 의해 C++로 컴파일됩니다.")])]),t._v(" "),e("h2",{attrs:{id:"코드-생성-검증"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#코드-생성-검증"}},[t._v("#")]),t._v(" 코드 생성 검증")]),t._v(" "),e("p",[t._v("출력 디렉토리가 아래 표시된 목록과 일치하는지 확인하여, 성공적인 코드 생성을 확인할 수 있습니다(Linux에서는 "),e("code",[t._v("tree")]),t._v(" 명령을 사용하여 파일 구조를 나열할 수 있음).")]),t._v(" "),e("p",[t._v("에이전트 디렉터리:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("$ tree src/modules/micrortps_bridge/micrortps_agent\nsrc/modules/micrortps_bridge/micrortps_agent\n├── build\n├── CMakeLists.txt\n├── idl\n│   ├── sensor_baro_.idl\n│   └── sensor_combined_.idl\n├── microRTPS_agent.cpp\n├── microRTPS_timesync.cpp\n├── microRTPS_timesync.h\n├── microRTPS_transport.cpp\n├── microRTPS_transport.h\n├── RtpsTopics.cpp\n├── RtpsTopics.h\n├── sensor_baro_.cpp\n├── sensor_baro_.h\n├── sensor_baro_Publisher.cpp\n├── sensor_baro_Publisher.h\n├── sensor_baro_PubSubTypes.cpp\n├── sensor_baro_PubSubTypes.h\n├── sensor_combined_.cpp\n├── sensor_combined_.h\n├── sensor_combined_PubSubTypes.cpp\n├── sensor_combined_PubSubTypes.h\n├── sensor_combined_Subscriber.cpp\n└── sensor_combined_Subscriber.h\n "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" directories, "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v(" files\n")])])]),e("p",[t._v("클라이언트 디렉토리:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("$ tree src/modules/micrortps_bridge/micrortps_client\nsrc/modules/micrortps_bridge/micrortps_client\n├── CMakeLists.txt\n├── microRTPS_client.cpp\n├── microRTPS_client_dummy.cpp\n├── microRTPS_client_main.cpp\n├── microRTPS_transport.cpp\n└── microRTPS_transport.h\n "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" directories, "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" files\n")])])]),e("h2",{attrs:{id:"코드-빌드-및-사용"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#코드-빌드-및-사용"}},[t._v("#")]),t._v(" 코드 빌드 및 사용")]),t._v(" "),e("p",[t._v("수동으로 생성된 "),e("em",[t._v("클라이언트")]),t._v(" 코드는 "),e("RouterLink",{attrs:{to:"/ko/middleware/micrortps.html#client_firmware"}},[t._v("자동으로 생성된 클라이언트 코드")]),t._v("와 같은 방식으로 "),e("em",[t._v("정확히")]),t._v(" 빌드되고 사용됩니다.")],1),t._v(" "),e("p",[t._v("특히, 수동으로 생성된 "),e("em",[t._v("클라이언트")]),t._v(" 소스 코드는 컴파일되어 일반 빌드 프로세스의 일부로 PX4 펌웨어에 빌드됩니다. For example, to compile the code and include it in Firmware for NuttX/Pixhawk targets:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_fmu-v4_rtps upload\n")])])]),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[t._v("도구 체인이 수동으로 생성된 소스 코드를 사용하고, 다시 생성을 시도하지 않도록 먼저 "),e("a",{attrs:{href:"#disable-automatic-bridge-code-generation"}},[t._v("자동 브리지 코드 생성을 비활성화")]),t._v("하여야 합니다.")])]),t._v(" "),e("p",[t._v("수동으로 생성된 "),e("em",[t._v("에이전트")]),t._v(" 코드도 "),e("RouterLink",{attrs:{to:"/ko/middleware/micrortps.html#agent-in-an-offboard-fast-dds-interface-ros-independent"}},[t._v("자동으로 생성된 코드")]),t._v("와 동일한 방식으로 컴파일되어 사용됩니다. 유일한 차이점은 수동 소스 코드가 "),e("strong",[t._v("build/BUILDPLATFORM")]),t._v("**/src/modules/micrortps_bridge/micrortps_agent/ 대신 "),e("strong",[t._v("src/modules/micrortps_bridge/micrortps_agent")]),t._v("에서 생성되는 점입니다.")],1),e("p")])}),[],!1,null,null,null);s.default=n.exports}}]);