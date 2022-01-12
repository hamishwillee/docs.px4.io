(window.webpackJsonp=window.webpackJsonp||[]).push([[1264],{2426:function(t,a,s){"use strict";s.r(a);var n=s(19),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"mavlink-메시징"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mavlink-메시징"}},[t._v("#")]),t._v(" MAVLink 메시징")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://mavlink.io/en/",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVLink"),s("OutboundLink")],1),t._v("는 드론 생태계를 위하여 설계된 초경량 메시징 프로토콜입니다.")]),t._v(" "),s("p",[t._v("PX4는 "),s("em",[t._v("MAVLink")]),t._v("를 사용하여 "),s("em",[t._v("QGroundControl")]),t._v("등의 지상국과 통신하고, 비행 콘트롤러 외부의 드론 구성요소(보조 컴퓨터, MAVLink 지원 카메라)에 연결 통합 메커니즘으로 사용합니다.")]),t._v(" "),s("p",[t._v("이 프로토콜은 데이터 교환을 위한 다수의 표준 "),s("a",{attrs:{href:"https://mavlink.io/en/messages/",target:"_blank",rel:"noopener noreferrer"}},[t._v("메시지"),s("OutboundLink")],1),t._v("와 "),s("a",{attrs:{href:"https://mavlink.io/en/services/",target:"_blank",rel:"noopener noreferrer"}},[t._v("마이크로서비스"),s("OutboundLink")],1),t._v("를 정의합니다(전부는 아니지만 다수의 메시지/서비스가 PX4에서 구현됨).")]),t._v(" "),s("p",[t._v('이 튜토리얼은 PX4에 새로운 "사용자 정의" 메시지를 추가하는 방법을 설명합니다.')]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("튜토리얼에서는 "),s("code",[t._v("msg/ca_trajectory.msg")]),t._v("에 "),s("RouterLink",{attrs:{to:"/ko/middleware/uorb.html"}},[t._v("맞춤 uORB")]),t._v(" "),s("code",[t._v("ca_trajectory")]),t._v(" 메시지와 "),s("code",[t._v("mavlink/include/mavlink/v2.0/custom_messages/mavlink_msg_ca_trajectory.h")]),t._v("에 맞춤 MAVLink "),s("code",[t._v("ca_trajectory")]),t._v(" 메시지가 있다고 가정합니다.")],1)]),t._v(" "),s("h2",{attrs:{id:"사용자-정의-mavlink-메시지-정의"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#사용자-정의-mavlink-메시지-정의"}},[t._v("#")]),t._v(" 사용자 정의 MAVLink 메시지 정의")]),t._v(" "),s("p",[t._v("MAVLink 개발 가이드는 새 메시지를 정의 방법과 프로그래밍 라이브러리 빌드 방법을 설명합니다.")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://mavlink.io/en/guide/define_xml_element.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVLink 메시지 정의/열거 방법"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://mavlink.io/en/getting_started/generate_libraries.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVLink 라이브러리 생성"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("메시지는 MAVLink 2용 C 라이브러리로 생성되어야 합니다. "),s("a",{attrs:{href:"https://mavlink.io/en/getting_started/installation.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVLink를 설치"),s("OutboundLink")],1),t._v("후, 다음 명령을 사용하여 다음 작업을 수행합니다.")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("python -m pymavlink.tools.mavgen --lang"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("C --wire-protocol"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.0")]),t._v(" --output"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("generated/include/mavlink/v2.0 message_definitions/v1.0/custom_messages.xml\n")])])]),s("p",[t._v("사용/테스트를 위해 생성된 헤더를 "),s("strong",[t._v("PX4-Autopilot/mavlink/include/mavlink/v2.0")]),t._v("에 복사합니다.")]),t._v(" "),s("p",[t._v("다른 사람들이 변경 사항을 더 쉽게 테스트할 수 있도록, https://github.com/mavlink/c_library_v2의 포크에 생성된 헤더를 추가하는 것이 좋습니다. PX4 개발자는 빌드전에 PX4-Autopilot 리포지토리에서 하위 모듈을 포크로 업데이트할 수 있습니다.")]),t._v(" "),s("h2",{attrs:{id:"사용자-정의-mavlink-메시지-전송"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#사용자-정의-mavlink-메시지-전송"}},[t._v("#")]),t._v(" 사용자 정의 MAVLink 메시지 전송")]),t._v(" "),s("p",[t._v("사용자 지정 uORB 메시지를 사용법과 MAVLink 메시지 전송 방법을 설명합니다.")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/modules/mavlink/mavlink_messages.cpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("mavlink_messages.cpp"),s("OutboundLink")],1),t._v("에 MAVLink와 uORB 메시지의 헤더를 추가합니다.")]),t._v(" "),s("div",{staticClass:"language-C extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("<uORB/topics/ca_trajectory.h>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("<v2.0/custom_messages/mavlink.h>")])]),t._v("\n")])])]),s("p",[s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/modules/mavlink/mavlink_messages.cpp#L2193",target:"_blank",rel:"noopener noreferrer"}},[t._v("mavlink_messages.cpp"),s("OutboundLink")],1),t._v("에서 새 클래스를 생성합니다.")]),t._v(" "),s("div",{staticClass:"language-C extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[t._v("class MavlinkStreamCaTrajectory "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" public MavlinkStream\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\npublic"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" MavlinkStreamCaTrajectory"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_name_static")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_name_static")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CA_TRAJECTORY"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("uint16_t")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_id_static")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" MAVLINK_MSG_ID_CA_TRAJECTORY"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("uint16_t")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_id_static")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" MavlinkStream "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("new_instance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Mavlink "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("mavlink"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" new "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("MavlinkStreamCaTrajectory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mavlink"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("unsigned")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" MAVLINK_MSG_ID_CA_TRAJECTORY_LEN "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" MAVLINK_NUM_NON_PAYLOAD_BYTES"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nprivate"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    uORB"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Subscription _sub"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ORB_ID")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ca_trajectory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* do not allow top copying this class */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("MavlinkStreamCaTrajectory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MavlinkStreamCaTrajectory "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    MavlinkStreamCaTrajectory"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" operator "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" MavlinkStreamCaTrajectory "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nprotected"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    explicit "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("MavlinkStreamCaTrajectory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Mavlink "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("mavlink"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("MavlinkStream")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mavlink"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    bool "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" override\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ca_traj_struct_s")]),t._v(" _ca_trajectory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//make sure ca_traj_struct_s is the definition of your uORB topic")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_sub"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("update")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("_ca_trajectory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("mavlink_ca_trajectory_t")]),t._v(" _msg_ca_trajectory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//make sure mavlink_ca_trajectory_t is the definition of your custom MAVLink message")]),t._v("\n\n            _msg_ca_trajectory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("timestamp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" _ca_trajectory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("timestamp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            _msg_ca_trajectory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("time_start_usec "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" _ca_trajectory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("time_start_usec"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            _msg_ca_trajectory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("time_stop_usec  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" _ca_trajectory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("time_stop_usec"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            _msg_ca_trajectory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("coefficients "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("_ca_trajectory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("coefficients"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            _msg_ca_trajectory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("seq_id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" _ca_trajectory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("seq_id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mavlink_msg_ca_trajectory_send_struct")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_mavlink"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_channel")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("_msg_ca_trajectory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" true"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" false"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("마지막으로 "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/modules/mavlink/mavlink_messages.cpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("mavlink_messages.cpp"),s("OutboundLink")],1),t._v(" 파일의 맨 아래에 있는 "),s("code",[t._v("streams_list")]),t._v("에 스트림 클래스를 추가합니다.")]),t._v(" "),s("div",{staticClass:"language-C extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[t._v("StreamListItem "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("streams_list"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\ncreate_stream_list_item"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("MavlinkStreamCaTrajectory"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])])]),s("p",[t._v("그런 다음 예를 들어 "),s("RouterLink",{attrs:{to:"/ko/concept/system_startup.html"}},[t._v("시작 스크립트")]),t._v("에 다음 줄을 추가하여 스트림을 활성화하여야 합니다(예: NuttX의 경우 "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/ROMFS/px4fmu_common/init.d-posix/rcS",target:"_blank",rel:"noopener noreferrer"}},[t._v("/ROMFS/px4fmu_common/init.d-posix/rcS"),s("OutboundLink")],1),t._v(" 또는 SITL의 "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/ROMFS/px4fmu_common/init.d-posix/rcS",target:"_blank",rel:"noopener noreferrer"}},[t._v("ROMFS/px4fmu_common/init.d-posix/rcS"),s("OutboundLink")],1),t._v("). "),s("code",[t._v("-r")]),t._v("은 스트리밍 속도를 설정하고, "),s("code",[t._v("-u")]),t._v("는 UDP 포트 14556에서 MAVLink 채널을 식별합니다.")],1),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("mavlink stream -r 50 -s CA_TRAJECTORY -u 14556\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[s("code",[t._v("uorb top [<message_name>]")]),t._v(" 명령을 사용하여 메시지가 게시 여부와 비율을 실시간으로 확인할 수 있습니다("),s("RouterLink",{attrs:{to:"/ko/middleware/uorb.html#uorb-top-command"}},[t._v("uORB 메시지")]),t._v(" 참조). 이 접근 방식은 uORB 주제를 게시하는 수신 메시지를 테스트할 수 있습니다(다른 메시지의 경우 코드에서 "),s("code",[t._v("printf")]),t._v("를 사용하고 SITL에서 테스트할 수 있음).")],1),t._v(" "),s("p",[s("em",[t._v("QGroundControl")]),t._v("에서 메시지를 보려면 "),s("a",{attrs:{href:"https://dev.qgroundcontrol.com/en/getting_started/",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVLink 라이브러리로 빌드"),s("OutboundLink")],1),t._v("한 다음 "),s("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/app_menu/mavlink_inspector.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVLink Inspector Widget"),s("OutboundLink")],1),t._v("을 사용하여 메시지가 수신 여부를 확인합니다. (또는 다른 MAVLink 도구).")])]),t._v(" "),s("h2",{attrs:{id:"사용자-지정-mavlink-메시지-수신"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#사용자-지정-mavlink-메시지-수신"}},[t._v("#")]),t._v(" 사용자 지정 MAVLink 메시지 수신")]),t._v(" "),s("p",[t._v("MAVLink 메시지 수신 방법과 uORB에 게시 방법을 설명합니다.")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/modules/mavlink/mavlink_receiver.h#L77",target:"_blank",rel:"noopener noreferrer"}},[t._v("mavlink_receiver.h"),s("OutboundLink")],1),t._v("에 수신되는 MAVLink 메시지를 처리하는 기능을 추가합니다.")]),t._v(" "),s("div",{staticClass:"language-C extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("<uORB/topics/ca_trajectory.h>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("<v2.0/custom_messages/mavlink_msg_ca_trajectory.h>")])]),t._v("\n")])])]),s("p",[s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/modules/mavlink/mavlink_receiver.h#L140",target:"_blank",rel:"noopener noreferrer"}},[t._v("mavlink_receiver.h"),s("OutboundLink")],1),t._v("의 "),s("code",[t._v("MavlinkReceiver")]),t._v(" 클래스에서 수신되는 MAVLink 메시지를 처리하는 함수를 추가합니다.")]),t._v(" "),s("div",{staticClass:"language-C extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("handle_message_ca_trajectory_msg")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("mavlink_message_t")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("msg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/modules/mavlink/mavlink_receiver.h#L195",target:"_blank",rel:"noopener noreferrer"}},[t._v("mavlink_receiver.h"),s("OutboundLink")],1),t._v("의 "),s("code",[t._v("MavlinkReceiver")]),t._v(" 클래스에 uORB 게시자 추가합니다.")]),t._v(" "),s("div",{staticClass:"language-C extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[t._v("uORB"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Publication"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("ca_trajectory_s"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("          _flow_pub"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ORB_ID")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ca_trajectory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/modules/mavlink/mavlink_receiver.cpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("mavlink_receiver.cpp"),s("OutboundLink")],1),t._v("에서 "),s("code",[t._v("handle_message_ca_trajectory_msg")]),t._v(" 함수를 구현합니다.")]),t._v(" "),s("div",{staticClass:"language-C extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" MavlinkReceiver"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("handle_message_ca_trajectory_msg")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("mavlink_message_t")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("msg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("mavlink_ca_trajectory_t")]),t._v(" traj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mavlink_msg_ca_trajectory_decode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("traj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ca_traj_struct_s")]),t._v(" f"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("memset")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("f"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("sizeof")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    f"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("timestamp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("hrt_absolute_time")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    f"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("seq_id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" traj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("seq_id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    f"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("time_start_usec "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" traj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("time_start_usec"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    f"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("time_stop_usec "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" traj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("time_stop_usec"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("28")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        f"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("coefficients"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" traj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("coefficients"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    _ca_traj_msg_pub"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("publish")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("마지막으로, "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/modules/mavlink/mavlink_receiver.cpp#L228",target:"_blank",rel:"noopener noreferrer"}},[t._v("MavlinkReceiver::handle_message()"),s("OutboundLink")],1),t._v("에서 호출되는 지 확인합니다.")]),t._v(" "),s("div",{staticClass:"language-C extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[t._v("MavlinkReceiver"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("handle_message")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("mavlink_message_t")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("msg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msg"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("msgid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" MAVLINK_MSG_ID_CA_TRAJECTORY"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("handle_message_ca_trajectory_msg")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"사용자-지정-mavlink-메시지-생성에-대한-대안"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#사용자-지정-mavlink-메시지-생성에-대한-대안"}},[t._v("#")]),t._v(" 사용자 지정 MAVLink 메시지 생성에 대한 대안")]),t._v(" "),s("p",[t._v("때로는 완전히 정의되지 않은 콘텐츠에 대한 사용자 정의 MAVLink 메시지가 필요합니다.")]),t._v(" "),s("p",[t._v("예를 들어, MAVLink를 사용하여 임베디드 장치와 PX4를 인터페이스시에 자동조종장치와 장치간에 교환되는 메시지는 안정화되기 전에 여러 번 반복될 수 있습니다. 이 경우에는 MAVLink 헤더를 재생성하고 두 장치가 동일한 버전의 프로토콜을 사용하는지 확인하는 데 시간이 많이 걸리고, 오류가 발생하기 쉽습니다.")]),t._v(" "),s("p",[t._v("대안과 임시 솔루션은 디버그 메시지의 용도를 변경하는 것입니다. MAVLink 개별 메세지 "),s("code",[t._v("CA_TRAJECTORY")]),t._v("를 만드는 대신, "),s("code",[t._v("CA_TRAJ")]),t._v(" 문자열 키와 "),s("code",[t._v("x")]),t._v(", "),s("code",[t._v("y")]),t._v(", "),s("code",[t._v("z")]),t._v(" 필드에 데이터를  담은 "),s("code",[t._v("DEBUG_VECT")]),t._v(" 메세지를 전송 가능합니다. 디버그 메시지의 사용 예는 이 "),s("RouterLink",{attrs:{to:"/ko/debug/debug_values.html"}},[t._v("튜토리얼")]),t._v("을  참고하십시오.")],1),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("이 솔루션은 네트워크에서 문자열을 전송하고 문자열 비교를 포함하므로 효율적이지 않습니다. 개발용으로만 사용하는 것이 좋습니다!")])]),t._v(" "),s("h2",{attrs:{id:"일반"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#일반"}},[t._v("#")]),t._v(" 일반")]),t._v(" "),s("h3",{attrs:{id:"스트리밍-속도-설정"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#스트리밍-속도-설정"}},[t._v("#")]),t._v(" 스트리밍 속도 설정")]),t._v(" "),s("p",[t._v("때로는 개별 주제의 스트리밍 속도를 높이는 것이 유용합니다(예: QGC에서 검사). 셸에서 다음 명령어를 실행하십시오.")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("mavlink stream -u "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("port number"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" -s "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("mavlink topic name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" -r "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("rate"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("p",[s("code",[t._v("mavlink 상태")]),t._v("와 함께 포트 번호를 조회할 수 있습니다. 이 포트 번호는 (무엇보다도) "),s("code",[t._v("전송 프로토콜: UDP(<port number>)")]),t._v("를 출력합니다. 예제는 다음과 같습니다:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("mavlink stream -u "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14556")]),t._v(" -s OPTICAL_FLOW_RAD -r "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);