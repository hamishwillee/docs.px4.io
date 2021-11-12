(window.webpackJsonp=window.webpackJsonp||[]).push([[1445],{2606:function(_,e,t){"use strict";t.r(e);var v=t(19),a=Object(v.a)({},(function(){var _=this,e=_.$createElement,t=_._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"mavlink-주변-장치-osd-gcs-보조-컴퓨터-등"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mavlink-주변-장치-osd-gcs-보조-컴퓨터-등"}},[_._v("#")]),_._v(" MAVLink 주변 장치(OSD/GCS/보조 컴퓨터 등)")]),_._v(" "),t("p",[_._v("GCS(Ground Control Station), OSD(On-Screen Display), 보조 컴퓨터, ADS-B 수신기와 기타 MAVLink 주변 장치들은 서로 다른 직렬 포트를 통하여 전송되는 별도의 MAVLink 스트림을 통하여 PX4와 상호 작용합니다. 이러한 통신 채널은 "),t("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#mavlink"}},[_._v("MAVLink 매개변수")]),_._v("를 사용하여 설정됩니다.")],1),_._v(" "),t("h2",{attrs:{id:"mavlink-인스턴스"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mavlink-인스턴스"}},[_._v("#")]),_._v(" MAVLink 인스턴스")]),_._v(" "),t("p",[_._v("특정 주변 장치를 직렬 포트에 할당하기 위하여 "),t("em",[_._v("MAVLink 인스턴스")]),_._v("를 사용합니다.")]),_._v(" "),t("p",[_._v("각 인스턴스는 특정 스트리밍 메시지 집합을 나타낼 수 있습니다 (아래 "),t("a",{attrs:{href:"#MAV_X_MODE"}},[_._v("MAV_X_MODE")]),_._v(" 참조). 매개변수는 메시지 세트, 사용된 포트, 데이터 속도 등을 정의합니다.")]),_._v(" "),t("div",{staticClass:"custom-block note"},[t("p",{staticClass:"custom-block-title"},[_._v("Note")]),_._v(" "),t("p",[_._v("이 문서의 작성시점에서는 3 개의 MAVLink "),t("em",[_._v("인스턴스")]),_._v("가 정의되어 있으며, 이는 아래 나열된 매개변수의 0, 1, 2 입니다.")])]),_._v(" "),t("p",[_._v("각 인스턴스의 매개변수는 아래와 같습니다.")]),_._v(" "),t("ul",[t("li",[t("p",[t("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_0_CONFIG"}},[_._v("MAV_X_CONFIG")]),_._v(' - 인스턴스 "X"의 직렬 포트(UART)를 설정합니다. 여기서 X는 0, 1, 2입니다. 사용되지 않는 포트일 수 있습니다 (예 : TELEM2, TELEM3, GPS2 등). 자세한 내용은 '),t("RouterLink",{attrs:{to:"/ko/peripherals/serial_configuration.html"}},[_._v("직렬 포트 설정")]),_._v("을 참고하십시오.")],1)]),_._v(" "),t("li",[t("p",[t("span",{attrs:{id:"MAV_X_MODE"}}),t("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_0_MODE"}},[_._v("MAV_X_MODE")]),_._v(" - 원격 측정 모드와 대상(현재 인스턴스 및 해당 속도에 대한 스트리밍 메시지 집합)을 지정합니다. 기본값은 아래와 같습니다.")],1),_._v(" "),t("ul",[t("li",[t("em",[_._v("일반")]),_._v(" : GCS 표준 메시지 집합입니다.")]),_._v(" "),t("li",[t("em",[_._v("사용자 정의")]),_._v(" 또는 "),t("em",[_._v("매직")]),_._v(" : 없음(기본 PX4 구현 방식). 모드는 새 모드를 개발시 테스트용으로 사용할 수 있습니다.")]),_._v(" "),t("li",[t("em",[_._v("온보드")]),_._v(" : 보조 컴퓨터 표준 메시지 집합입니다.")]),_._v(" "),t("li",[t("em",[_._v("OSD")]),_._v(" : OSD 시스템 표준 메시지 세트.")]),_._v(" "),t("li",[t("em",[_._v("설정")]),_._v(" : 고속 링크 표준 메시지 세트 및 속도 설정(예 : USB).")]),_._v(" "),t("li",[t("em",[_._v("최소")]),_._v(" : 대기 시간이 긴 링크에 연결된 GCS와 함께 사용하기 위한 최소 메시지 집합입니다.")]),_._v(" "),t("li",[t("em",[_._v("ExtVision")]),_._v(" 또는 "),t("em",[_._v("ExtVisionMin")]),_._v(" : 오프보드 비전 시스템 메시지(VIO에 필요한 ExtVision).")]),_._v(" "),t("li",[t("em",[_._v("이리듐")]),_._v(" : "),t("RouterLink",{attrs:{to:"/ko/advanced_features/satcom_roadblock.html"}},[_._v("이리듐 위성 통신 시스템")]),_._v(" 메시지입니다.")],1)])])]),_._v(" "),t("div",{staticClass:"custom-block note"},[t("p",{staticClass:"custom-block-title"},[_._v("Note")]),_._v(" "),t("p",[_._v("각 모드에 대한 특정 메시지 세트를 찾으려면 "),t("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/modules/mavlink/mavlink_main.cpp",target:"_blank",rel:"noopener noreferrer"}},[_._v("/src/modules/mavlink/mavlink_main.cpp"),t("OutboundLink")],1),_._v("에서 "),t("code",[_._v("MAVLINK_MODE_")]),_._v("를 검색하십시오.")])]),_._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[_._v("TIP")]),_._v(" "),t("p",[_._v("모드는 "),t("em",[_._v("기본")]),_._v(" 메시지와 속도를 정의합니다. 연결된 MAVLink 시스템은 "),t("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_SET_MESSAGE_INTERVAL",target:"_blank",rel:"noopener noreferrer"}},[_._v("MAV_CMD_SET_MESSAGE_INTERVAL"),t("OutboundLink")],1),_._v("을 사용하여 원하는 스트림과 속도를 계속 요청할 수 있습니다.")])]),_._v(" "),t("ul",[t("li",[t("p",[t("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_0_MODE"}},[_._v("MAV_X_RATE")]),_._v(" - 인스턴스의 최대 "),t("em",[_._v("데이터 속도")]),_._v("를 설정합니다 (바이트/초).")],1),_._v(" "),t("ul",[t("li",[_._v("이는 개별 메시지의 모든 스트림에 대한 결합 비율입니다 (총 비율이이 값을 초과하면 개별 메시지에 대한 비율이 감소됨).")]),_._v(" "),t("li",[_._v("기본 설정은 일반적으로 허용되지만 원격 분석 링크가 포화 상태가 되고, 너무 많은 메시지가 삭제되는 경우에는 감소할 수 있습니다.")]),_._v(" "),t("li",[_._v("값이 0이면 데이터 속도가 이론적인 값의 절반으로 설정됩니다.")])])]),_._v(" "),t("li",[t("p",[t("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_0_FORWARD"}},[_._v("MAV_X_FORWARD")]),_._v(" - 현재 인스턴스에서 수신한 MAVLink 패킷을 다른 인터페이스로 전달할 수 있습니다. 예를 들어 GCS가 보조 컴퓨터에 연결된 MAVLink 지원 카메라와 통신할 수 있도록 GCS와 보조 컴퓨터간에 메시지를 전송에 사용할 수 있습니다.")],1)])]),_._v(" "),t("p",[_._v("다음으로 위에서 할당한 직렬 포트의 전송 속도를 설정하여야 합니다 (`MAV_X_CONFIG /0>).")]),t("p"),_._v(" "),t("p",[_._v(":::tip\n매개변수를 사용하가 위하여 PX4를 재부팅합니다(예 : QGroundControl에서).\n:::")]),_._v(" "),t("p",[_._v("사용되는 매개변수는 "),t("a",{attrs:{href:"../advanced_config/parameter_reference.md#serial"}},[_._v("할당 직렬 포트")]),_._v("에 따라 다릅니다(예: "),t("code",[_._v("SER_GPS1_BAUD`, `SER_TEL2_BAUD` 등). 사용하는 값은 연결 유형과 연결된 MAVLink 주변 장치에 따라 달라집니다.\n"),t("p",[t("span",{attrs:{id:"default_ports"}})]),_._v(" "),t("h2",{attrs:{id:"기본-mavlink-포트"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#기본-mavlink-포트"}},[_._v("#")]),_._v(" 기본 MAVLink 포트")]),_._v(" "),t("p",[t("code",[_._v("TELEM 1")]),_._v(" 포트는 대부분 GCS 원격 분석 스트림에 사용됩니다.")]),_._v(" "),t("p",[_._v("이를 지원하기 위하여 아래와 같은 MAVLink 인스턴스 0의 "),t("RouterLink",{attrs:{to:"/ko/peripherals/serial_configuration.html#default_port_mapping"}},[_._v("기본 직렬 포트 매핑")]),_._v("을 사용합니다.")],1),_._v(" "),t("ul",[t("li",[t("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_0_CONFIG"}},[_._v("MAV_0_CONFIG")]),_._v(" = "),t("code",[_._v("TELEM 1")])],1),_._v(" "),t("li",[t("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_0_MODE"}},[_._v("MAV_0_MODE")]),_._v(" = "),t("code",[_._v("Normal")])],1),_._v(" "),t("li",[t("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_0_RATE"}},[_._v("MAV_0_RATE")]),_._v("= "),t("code",[_._v("1200")]),_._v(" 바이트/초")],1),_._v(" "),t("li",[t("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_0_FORWARD"}},[_._v("MAV_0_FORWARD")]),_._v(" = "),t("code",[_._v("True")])],1),_._v(" "),t("li",[t("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SER_TEL1_BAUD"}},[_._v("SER_TEL1_BAUD")]),_._v(" = "),t("code",[_._v("57600")])],1)]),_._v(" "),t("h2",{attrs:{id:"예"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#예"}},[_._v("#")]),_._v(" 예")]),_._v(" "),t("p",[_._v("예를 들어, "),t("code",[_._v("TELEM 2")]),_._v("에서 보조 컴퓨터를 사용하려면 아래와 같은 매개변수를 설정합니다.")]),_._v(" "),t("ul",[t("li",[t("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_2_CONFIG"}},[_._v("MAV_2_CONFIG")]),_._v(" = "),t("code",[_._v("TELEM 2")])],1),_._v(" "),t("li",[t("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_2_MODE"}},[_._v("MAV_2_MODE")]),_._v(" = "),t("code",[_._v("Onboard")])],1),_._v(" "),t("li",[t("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_2_RATE"}},[_._v("MAV_2_RATE")]),_._v("= "),t("code",[_._v("80000")]),_._v(" 바이트/초 :::tip 이 값은 메시지 유실시 조정하거나 감소할 수 있습니다.\n:::")],1),_._v(" "),t("li",[t("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_2_FORWARD"}},[_._v("MAV_2_FORWARD")]),_._v(" = "),t("code",[_._v("True")])],1),_._v(" "),t("li",[t("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SER_TEL2_BAUD"}},[_._v("SER_TEL2_BAUD")]),_._v(" = "),t("code",[_._v("921600")]),_._v(" baud")],1)])])])])}),[],!1,null,null,null);e.default=a.exports}}]);