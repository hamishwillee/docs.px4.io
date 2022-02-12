(window.webpackJsonp=window.webpackJsonp||[]).push([[1470],{2662:function(t,s,a){"use strict";a.r(s);var n=a(19),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"탑재-중량과-카메라"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#탑재-중량과-카메라"}},[t._v("#")]),t._v(" 탑재 중량과 카메라")]),t._v(" "),a("p",[t._v("PX4는 카메라와 같은 다양한 장치들을 탑재할 수 있습니다.")]),t._v(" "),a("h2",{attrs:{id:"드론-매핑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#드론-매핑"}},[t._v("#")]),t._v(" 드론 매핑")]),t._v(" "),a("p",[t._v("매핑 드론은 카메라를 사용하여  이미지를 캡쳐합니다.")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://mavlink.io/en/services/camera.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVLink 카메라 프로토콜"),a("OutboundLink")],1),t._v("을 지원하는 MAVLink 카메라는 PX4와 QGroundControl에서 최적으로 통합됩니다. MAVSDK는 "),a("a",{attrs:{href:"https://mavsdk.mavlink.io/main/en/cpp/api_reference/classmavsdk_1_1_camera.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("독립형 카메라 작업"),a("OutboundLink")],1),t._v("과 "),a("a",{attrs:{href:"https://mavsdk.mavlink.io/main/en/cpp/api_reference/structmavsdk_1_1_mission_1_1_mission_item.html#structmavsdk_1_1_mission_1_1_mission_item_1a0299fbbe7c7b03bc43eb116f96b48df4",target:"_blank",rel:"noopener noreferrer"}},[t._v("임무"),a("OutboundLink")],1),t._v("에서 MAVLink 프로토콜을 위한 간단한 API를 제공합니다.")]),t._v(" "),a("p",[t._v("카메라는 PWM이나 GPI 출력을 사용하여 비행콘트롤러에 직접 연결할 수 있습니다. PX4는 비행콘트롤러에 연결된 카메라에 다음과 같은 MAVLink 명령/임무 항목 세트를 지원합니다.")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_DO_SET_CAM_TRIGG_INTERVAL",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAV_CMD_DO_SET_CAM_TRIGG_INTERVAL"),a("OutboundLink")],1),t._v(" - 캡처 시간 간격을 설정합니다.")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_DO_SET_CAM_TRIGG_DIST",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAV_CMD_DO_SET_CAM_TRIGG_DIST"),a("OutboundLink")],1),t._v(" - 캡처 거리 간격을 설정합니다.")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_DO_TRIGGER_CONTROL",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAV_CMD_DO_TRIGGER_CONTROL"),a("OutboundLink")],1),t._v(" - 캡처 시작/중지 (위 메시지를 사용하여 정의한 거리 또는 시간 사용).")])]),t._v(" "),a("p",[t._v("다음 항목에서는 카메라를 "),a("em",[t._v("연결")]),t._v("하여 PX4 설정 방법을 설명합니다.")]),t._v(" "),a("ul",[a("li",[t._v("비행 콘트롤러 PWM 또는 GPIO 출력에서 또는 MAVLink를 통해 "),a("RouterLink",{attrs:{to:"/ko/peripherals/camera.html"}},[t._v("카메라 트리거")])],1),t._v(" "),a("li",[t._v("핫슈 입력을 통한 "),a("RouterLink",{attrs:{to:"/ko/peripherals/camera.html#camera-capture"}},[t._v("카메라 타이밍 피드백")])],1)]),t._v(" "),a("h2",{attrs:{id:"화물-드론-액추에이터-탑재"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#화물-드론-액추에이터-탑재"}},[t._v("#")]),t._v(' 화물 드론("액추에이터" 탑재)')]),t._v(" "),a("p",[t._v("화물 드론은 일반적으로 서보와 액추에이터로 화물을  방출하거나 자세를 제어합니다. PX4에서는 RC와 MAVLink 명령어로 서보와 GPIO 트리거를 지원합니다.")]),t._v(" "),a("h3",{attrs:{id:"rc-트리거"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rc-트리거"}},[t._v("#")]),t._v(" RC 트리거")]),t._v(" "),a("p",[t._v("최대 3 개의 RC 채널을 매핑하여 "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RC_MAP_AUX1"}},[t._v("RC_MAP_AUX1")]),t._v(" 에서 "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RC_MAP_AUX3"}},[t._v("RC_MAP_AUX3")]),t._v(" 까지의 매개변수를 사용하여 비행 콘트롤러에 연결된 서보와 액추에이터를 제어할 수 있습니다.")],1),t._v(" "),a("p",[t._v("RC 채널은 "),a("em",[t._v("보통")]),t._v(" 비행 콘트롤러의 "),a("code",[t._v("AUX1")]),t._v(", "),a("code",[t._v("AUX2")]),t._v(", "),a("code",[t._v("AUX3")]),t._v(" 출력에 매핑됩니다. 차량의 RC AUX 패스스루에 사용되는 출력은 "),a("RouterLink",{attrs:{to:"/ko/airframes/airframe_reference.html"}},[t._v("기체 정의서")]),t._v("을 참고하십시오. 예를 들어, "),a("RouterLink",{attrs:{to:"/ko/airframes/airframe_reference.html#quadrotor-x"}},[t._v("Quadrotor-X")]),t._v('에는 "'),a("strong",[t._v("AUX1 :")]),t._v(' RC AUX1 채널의 피드 스루", "'),a("strong",[t._v("AUX2 :")]),t._v(' RC AUX2 채널의 피드 스루", '),a("strong",[t._v("AUX3 :")]),t._v(' RC AUX3 채널의 피드 스루 "와 같은 일반 매핑이 있습니다.')],1),t._v(" "),a("p",[t._v("기체의 RC AUX 피드 스루 출력을 지정하지 않은 경우 "),a("RouterLink",{attrs:{to:"/ko/concept/mixing.html#control-group-3-manual-passthrough"}},[t._v("Control group 3")]),t._v(" 출력 5-7을 원하는 포트로 매핑하여, 사용자가 정의한 "),a("RouterLink",{attrs:{to:"/ko/concept/mixing.html"}},[t._v("Mixer File")]),t._v("로 추가할 수 있습니다. 이러한 믹서의 예는 기본 패스스루 믹서입니다 : "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/ROMFS/px4fmu_common/mixers/pass.aux.mix",target:"_blank",rel:"noopener noreferrer"}},[t._v("pass.aux.mix"),a("OutboundLink")],1),t._v(".")],1),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v('"RC AUX의 피드 스루"에 사용되는 동일한 출력은 MAVLink 명령을 사용하여 설정할 수 있습니다 ('),a("a",{attrs:{href:"#mission-triggering"}},[t._v("아래")]),t._v(" 참조). PX4는 두 메커니즘중에서 설정된 마지막 값을 사용합니다.")])]),t._v(" "),a("h3",{attrs:{id:"임무-트리거"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#임무-트리거"}},[t._v("#")]),t._v(" 임무 트리거")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_DO_SET_ACTUATOR",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAV_CMD_DO_SET_ACTUATOR"),a("OutboundLink")],1),t._v(" MAVLink 명령어을 사용하여 임무 수행이나 명령어로 한 번에 최대 3 개의 액추에이터 값을 설정할 수 있습니다.")]),t._v(" "),a("p",[t._v("명령 매개변수 "),a("code",[t._v("param1")]),t._v(", "),a("code",[t._v("param2")]),t._v(" 및 "),a("code",[t._v("param3")]),t._v("은 "),a("em",[t._v("일반적으로")]),t._v(" "),a("code",[t._v("AUX1")]),t._v("에 매핑되며, 비행 콘트롤러의 "),a("code",[t._v("AUX2")]),t._v(", "),a("code",[t._v("AUX3")]),t._v(" 출력, 명령 매개변수 "),a("code",[t._v("param4")]),t._v(" ~ "),a("code",[t._v("param7")]),t._v("은 PX4에서 사용되지 않거나 무시됩니다. 매개변수는 "),a("code",[t._v("[-1, 1]")]),t._v(" 범위의 정규화 수치를 사용합니다. 결과적으로 PWM 출력 범위는 "),a("code",[t._v("[PWM_AUX_MINx, PWM_AUX_MAXx]")]),t._v(" 입니다. 여기서 X는 출력 번호입니다. 제어되지 않는 모든 매개변수나 액추에이터는 "),a("code",[t._v("NaN")]),t._v("으로 설정하여야 합니다.")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("MAVLink는 [RC AUX 패스스루](#rc-triggering)에 대해 설정된 것과 동일한 출력을 사용합니다(이전 섹션 참조). 차량의 [기체 정의서](../airframes/airframe_reference.md)에서 어떤 출력이 사용되는 지 확인하고, 필요한 경우 [맞춤 믹서 파일](../concept/mixing.md)을 사용하여 변경할 수 있습니다.")])]),t._v(" "),a("h3",{attrs:{id:"mavsdk-예제-스크립트"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mavsdk-예제-스크립트"}},[t._v("#")]),t._v(" MAVSDK (예제 스크립트)")]),t._v(" "),a("p",[t._v("음 "),a("a",{attrs:{href:"https://mavsdk.mavlink.io/main/en/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVSDK"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://github.com/mavlink/MAVSDK/blob/main/examples/set_actuator/set_actuator.cpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("예제 코드"),a("OutboundLink")],1),t._v("는 MAVSDK Action 플러그인의 "),a("a",{attrs:{href:"https://mavsdk.mavlink.io/main/en/cpp/api_reference/classmavsdk_1_1_action.html#classmavsdk_1_1_action_1ad30beac27f05c62dcf6a3d0928b86e4c",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("set_actuator()")]),a("OutboundLink")],1),t._v(" 함수를 사용하여 페이로드를 해제하는 방법을 설명합니다.")]),t._v(" "),a("p",[a("code",[t._v("set_actuator()")]),t._v(" 번호 1~3은 "),a("em",[t._v("일반적으로")]),t._v(" 비행 컨트롤러의 출력"),a("code",[t._v("AUX1")]),t._v(", "),a("code",[t._v("AUX2")]),t._v(", "),a("code",[t._v("AUX3")]),t._v("에 매핑됩니다.")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("MAVSDK는 후드 아래에서 [MAV_CMD_DO_SET_ACTUATOR](https://mavlink.io/en/messages/common.html#MAV_CMD_DO_SET_ACTUATOR) MAVLink 명령을 전송하므로 [미션 트리거링](#mission-triggering) 및 [RC 트리거링](#rc-triggering)에 설정과 동일한 출력을 사용합니다(이전 섹션 참조 ). 차량의 [기체 정의서](../airframes/airframe_reference.md)에서 어떤 출력이 사용되는 지 확인하고, 필요한 경우 [맞춤 믹서 파일](../concept/mixing.md)을 사용하여 변경할 수 있습니다.")])]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<mavsdk/mavsdk.h>")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<mavsdk/plugins/action/action.h>")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<chrono>")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<cstdint>")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<iostream>")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<future>")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" mavsdk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("usage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" std"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("string"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" bin_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    std"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("cerr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Usage :"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" bin_name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('" <connection_url> <actuator_index> <actuator_value>\\n"')]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Connection URL format should be :\\n"')]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('" For TCP : tcp://[server_host][:server_port]\\n"')]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('" For UDP : udp://[bind_host][:bind_port]\\n"')]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('" For Serial : serial:///path/to/serial/dev[:baudrate]\\n"')]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"For example, to connect to the simulator use URL: udp://:14540\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" argc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" argv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("argc "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("usage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("argv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" std"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("string connection_url "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" argv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" index "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" std"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stod")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("argv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" std"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stof")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("argv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    Mavsdk mavsdk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ConnectionResult connection_result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mavsdk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add_any_connection")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("connection_url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("connection_result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" ConnectionResult"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("Success"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        std"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("cerr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Connection failed: "')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" connection_result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\n'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    std"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("cout "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Waiting to discover system...\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("auto")]),t._v(" prom "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" std"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("promise"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("std"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("shared_ptr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("System"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("auto")]),t._v(" fut "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" prom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_future")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// We wait for new systems to be discovered, once we find one that has an")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// autopilot, we decide to use it.")]),t._v("\n    mavsdk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("subscribe_on_new_system")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("mavsdk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("prom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("auto")]),t._v(" system "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mavsdk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("systems")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("back")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("system"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("has_autopilot")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            std"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("cout "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Discovered autopilot\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Unsubscribe again as we only want to find one system.")]),t._v("\n            mavsdk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("subscribe_on_new_system")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("nullptr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            prom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set_value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("system"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// We usually receive heartbeats at 1Hz, therefore we should find a")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// system after around 3 seconds max, surely.")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fut"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wait_for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("std"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("chrono"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("seconds")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" std"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("future_status"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("timeout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        std"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("cerr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"No autopilot found, exiting.\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Get discovered system now.")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("auto")]),t._v(" system "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fut"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Instantiate plugins.")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("auto")]),t._v(" action "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Action"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("system"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    std"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("cout "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Setting actuator...\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Action"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("Result set_actuator_result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" action"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set_actuator")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("set_actuator_result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" Action"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("Result"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("Success"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        std"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("cerr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Setting actuator failed:"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" set_actuator_result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\n'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"감시-검색-및-구출"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#감시-검색-및-구출"}},[t._v("#")]),t._v(" 감시, 검색 및 구출")]),t._v(" "),a("p",[t._v("감시, 검색 및 구조용 드론은 매핑 드론과 요구 사항이 유사합니다. 주요 차이점은 계획된 조사 영역을 비행하는 것 외에는 이미지 및 비디오 캡처 카메라에 대한 독립 실행형 제어가 필요한 점과 주야 작업이 가능하여야 한다는 점입니다.")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://mavlink.io/en/services/camera.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVLink 카메라 프로토콜"),a("OutboundLink")],1),t._v("을 지원하는 카메라를 사용하십시오.이 카메라는 이미지 및 비디오 캡처, 확대/축소, 저장 관리, 동일한 차량의 여러 카메라 및 카메라 간 전환을 지원합니다. 이러한 카메라는 QGroundControl 또는 MAVSDK를 통해 수동으로 제어할 수 있습니다 ("),a("a",{attrs:{href:"https://mavsdk.mavlink.io/main/en/cpp/api_reference/classmavsdk_1_1_camera.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("독립형 카메라 작동"),a("OutboundLink")],1),t._v(" 및 "),a("a",{attrs:{href:"https://mavsdk.mavlink.io/main/en/cpp/api_reference/structmavsdk_1_1_mission_1_1_mission_item.html#structmavsdk_1_1_mission_1_1_mission_item_1a0299fbbe7c7b03bc43eb116f96b48df4",target:"_blank",rel:"noopener noreferrer"}},[t._v("임무"),a("OutboundLink")],1),t._v(" 모두). MAVLink 연동 카메라 설정법은 "),a("RouterLink",{attrs:{to:"/ko/peripherals/camera.html"}},[t._v("카메라 트리거")]),t._v("를 참조하십시오.")],1),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("비행 제어 장치에 직접 연결된 카메라 "),a("em",[t._v("만")]),t._v(" 카메라 트리거를 지원하며, 대부분 감시 검색 작업에는 적합하지 않을 수 있습니다.")])]),t._v(" "),a("p",[t._v("수색 및 구조용 드론은 실종 등산객을 위한 비상 용품과 같은 화물을 운반할 수 있습니다. 페이로드 배송에 대한 정보는 위의 "),a("a",{attrs:{href:"#cargo-drones-actuator-payloads"}},[t._v("화물 드론")]),t._v("을 참조하십시오.")])])}),[],!1,null,null,null);s.default=e.exports}}]);