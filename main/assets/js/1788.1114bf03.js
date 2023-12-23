(window.webpackJsonp=window.webpackJsonp||[]).push([[1788],{3228:function(e,t,a){"use strict";a.r(t);var _=a(19),r=Object(_.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"mavlink-주변-장치-osd-gcs-보조-컴퓨터-등"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mavlink-주변-장치-osd-gcs-보조-컴퓨터-등"}},[e._v("#")]),e._v(" MAVLink 주변 장치(OSD/GCS/보조 컴퓨터 등)")]),e._v(" "),a("p",[e._v("GCS(Ground Control Station), OSD(On-Screen Display), 보조 컴퓨터, ADS-B 수신기와 기타 MAVLink 주변 장치들은 서로 다른 직렬 포트를 통하여 전송되는 별도의 MAVLink 스트림을 통하여 PX4와 상호 작용합니다.")]),e._v(" "),a("p",[e._v("In order to configure that a particular serial port is used for MAVLink traffic with a particular peripheral, we use "),a("RouterLink",{attrs:{to:"/ko/peripherals/serial_configuration.html"}},[e._v("Serial Port Configuration")]),e._v(', assigning one of the abstract "MAVLink instance" configuration parameters to the desired port. We then set other properties of the MAVLink channel using the parameters associated with our selected MAVLink instance, so that they match the requirements of our particular peripheral.')],1),e._v(" "),a("p",[e._v("The most relevant parameters are described below (the full set are listed in the "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#mavlink"}},[e._v("Parameter Reference > MAVLink")]),e._v(").")],1),e._v(" "),a("h2",{attrs:{id:"mavlink-인스턴스"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mavlink-인스턴스"}},[e._v("#")]),e._v(" MAVLink 인스턴스")]),e._v(" "),a("p",[e._v("In order to assign a particular peripheral to a serial port we use the concept of a "),a("em",[e._v("MAVLink instance")]),e._v(".")]),e._v(" "),a("p",[e._v("Each MAVLink instance represents a particular MAVLink configuration that you can apply to a particular port. At time of writing three MAVLink "),a("em",[e._v("instances")]),e._v(" are defined, each represented by a parameter "),a("a",{attrs:{href:"#MAV_X_CONFIG"}},[e._v("MAV_X_CONFIG")]),e._v(", where X is 0, 1, 2.")]),e._v(" "),a("p",[e._v("Each instance has associated parameters that you can use to define the properties of the instance on that port, such as the set of streamed messages (see "),a("a",{attrs:{href:"#MAV_X_MODE"}},[e._v("MAV_X_MODE")]),e._v(" below), data rate ("),a("a",{attrs:{href:"#MAV_X_RATE"}},[e._v("MAV_X_RATE")]),e._v("), whether incoming traffic is forwarded to other MAVLink instances ("),a("a",{attrs:{href:"#MAV_X_FORWARD"}},[e._v("MAV_X_FORWARD")]),e._v("), and so on.")]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("MAVLink instances are an abstract concept for a particular MAVLink configuration.\nThe number in the name means nothing; you can assign any instance to any port.")])]),e._v(" "),a("p",[e._v("각 인스턴스의 매개변수는 아래와 같습니다.")]),e._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{id:"MAV_X_CONFIG"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_0_CONFIG"}},[e._v("MAV_X_CONFIG")]),e._v(' - 인스턴스 "X"의 직렬 포트(UART)를 설정합니다. 여기서 X는 0, 1, 2입니다. It can be any unused port, e.g.: '),a("code",[e._v("TELEM2")]),e._v(", "),a("code",[e._v("TELEM3")]),e._v(", "),a("code",[e._v("GPS2")]),e._v(" etc. 자세한 내용은 "),a("RouterLink",{attrs:{to:"/ko/peripherals/serial_configuration.html"}},[e._v("직렬 포트 설정")]),e._v("을 참고하십시오.")],1)]),e._v(" "),a("li",[a("p",[a("a",{attrs:{id:"MAV_X_MODE"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_0_MODE"}},[e._v("MAV_X_MODE")]),e._v(" - 원격 측정 모드와 대상(현재 인스턴스 및 해당 속도에 대한 스트리밍 메시지 집합)을 지정합니다. 기본값은 아래와 같습니다.")],1),e._v(" "),a("ul",[a("li",[a("em",[e._v("Normal")]),e._v(": Standard set of messages for a GCS.")]),e._v(" "),a("li",[a("em",[e._v("Custom")]),e._v(" or "),a("em",[e._v("Magic")]),e._v(": Nothing (in the default PX4 implementation). 모드는 새 모드를 개발시 테스트용으로 사용할 수 있습니다.")]),e._v(" "),a("li",[a("em",[e._v("Onboard")]),e._v(": Standard set of messages for a companion computer.")]),e._v(" "),a("li",[a("em",[e._v("OSD")]),e._v(": Standard set of messages for an OSD system.")]),e._v(" "),a("li",[a("em",[e._v("Config")]),e._v(": Standard set of messages and rate configuration for a fast link (e.g. USB).")]),e._v(" "),a("li",[a("em",[e._v("Minimal")]),e._v(": Minimal set of messages for use with a GCS connected on a high latency link.")]),e._v(" "),a("li",[a("em",[e._v("ExtVision")]),e._v(" or "),a("em",[e._v("ExtVisionMin")]),e._v(": Messages for offboard vision systems (ExtVision needed for VIO).")]),e._v(" "),a("li",[a("em",[e._v("Iridium")]),e._v(": Messages for an "),a("RouterLink",{attrs:{to:"/ko/advanced_features/satcom_roadblock.html"}},[e._v("Iridium satellite communication system")]),e._v(".")],1)])])]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("각 모드에 대한 특정 메시지 세트를 찾으려면 "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/modules/mavlink/mavlink_main.cpp",target:"_blank",rel:"noopener noreferrer"}},[e._v("/src/modules/mavlink/mavlink_main.cpp"),a("OutboundLink")],1),e._v("에서 "),a("code",[e._v("MAVLINK_MODE_")]),e._v("를 검색하십시오.")])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("The mode defines the "),a("em",[e._v("default")]),e._v(" messages and rates. 연결된 MAVLink 시스템은 "),a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_SET_MESSAGE_INTERVAL",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAV_CMD_SET_MESSAGE_INTERVAL"),a("OutboundLink")],1),e._v("을 사용하여 원하는 스트림과 속도를 계속 요청할 수 있습니다.")])]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{id:"MAV_X_RATE"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_0_MODE"}},[e._v("MAV_X_RATE")]),e._v(" - Set the maximum "),a("em",[e._v("data rate")]),e._v(" for this instance (bytes/second).\n"),a("ul",[a("li",[e._v("이는 개별 메시지의 모든 스트림에 대한 결합 비율입니다 (총 비율이이 값을 초과하면 개별 메시지에 대한 비율이 감소됨).")]),e._v(" "),a("li",[e._v("기본 설정은 일반적으로 허용되지만 원격 분석 링크가 포화 상태가 되고, 너무 많은 메시지가 삭제되는 경우에는 감소할 수 있습니다.")]),e._v(" "),a("li",[e._v("값이 0이면 데이터 속도가 이론적인 값의 절반으로 설정됩니다.")])])],1),e._v(" "),a("li",[a("a",{attrs:{id:"MAV_X_FORWARD"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_0_FORWARD"}},[e._v("MAV_X_FORWARD")]),e._v(" - 현재 인스턴스에서 수신한 MAVLink 패킷을 다른 인터페이스로 전달할 수 있습니다. 예를 들어 GCS가 보조 컴퓨터에 연결된 MAVLink 지원 카메라와 통신할 수 있도록 GCS와 보조 컴퓨터간에 메시지를 전송에 사용할 수 있습니다.")],1)]),e._v(" "),a("p",[e._v("다음으로 위에서 할당한 직렬 포트의 전송 속도를 설정하여야 합니다 ("),a("code",[e._v("MAV_X_CONFIG")]),e._v(").")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("매개변수를 사용하가 위하여 PX4를 재부팅합니다(예 : QGroundControl에서).")])]),e._v(" "),a("p",[e._v("사용하는 값은 연결 유형과 연결된 MAVLink 주변 장치에 따라 달라집니다.")]),e._v(" "),a("p",[a("a",{attrs:{id:"default_ports"}})]),e._v(" "),a("h2",{attrs:{id:"기본-mavlink-포트"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#기본-mavlink-포트"}},[e._v("#")]),e._v(" 기본 MAVLink 포트")]),e._v(" "),a("h3",{attrs:{id:"telem1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#telem1"}},[e._v("#")]),e._v(" TELEM1")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("TELEM 1")]),e._v(' port is almost always configured by default for the GCS telemetry stream ("Normal").')]),e._v(" "),a("p",[e._v("이를 지원하기 위하여 아래와 같은 MAVLink 인스턴스 0의 "),a("RouterLink",{attrs:{to:"/ko/peripherals/serial_configuration.html#default_port_mapping"}},[e._v("기본 직렬 포트 매핑")]),e._v("을 사용합니다.")],1),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_0_CONFIG"}},[e._v("MAV_0_CONFIG")]),e._v(" = "),a("code",[e._v("TELEM 1")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_0_MODE"}},[e._v("MAV_0_MODE")]),e._v(" = "),a("code",[e._v("Normal")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_0_RATE"}},[e._v("MAV_0_RATE")]),e._v("= "),a("code",[e._v("1200")]),e._v(" 바이트/초")],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_0_FORWARD"}},[e._v("MAV_0_FORWARD")]),e._v(" = "),a("code",[e._v("True")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SER_TEL1_BAUD"}},[e._v("SER_TEL1_BAUD")]),e._v(" = "),a("code",[e._v("57600")])],1)]),e._v(" "),a("h3",{attrs:{id:"telem2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#telem2"}},[e._v("#")]),e._v(" TELEM2")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("TELEM 2")]),e._v(' port usually configured by default for a companion computer telemetry stream ("Onboard").')]),e._v(" "),a("p",[e._v("이를 지원하기 위하여 아래와 같은 MAVLink 인스턴스 0의 "),a("RouterLink",{attrs:{to:"/ko/peripherals/serial_configuration.html#default_port_mapping"}},[e._v("기본 직렬 포트 매핑")]),e._v("을 사용합니다.")],1),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_0_CONFIG"}},[e._v("MAV_1_CONFIG")]),e._v(" = "),a("code",[e._v("TELEM 2")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_0_MODE"}},[e._v("MAV_1_MODE")]),e._v(" = "),a("code",[e._v("Onboard")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_0_RATE"}},[e._v("MAV_1_RATE")]),e._v("= "),a("code",[e._v("0")]),e._v(" (Half maximum)")],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_0_FORWARD"}},[e._v("MAV_1_FORWARD")]),e._v(" = "),a("code",[e._v("Disabled")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SER_TEL2_BAUD"}},[e._v("SER_TEL2_BAUD")]),e._v(" = "),a("code",[e._v("921600")])],1)]),e._v(" "),a("h3",{attrs:{id:"ethernet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ethernet"}},[e._v("#")]),e._v(" ETHERNET")]),e._v(" "),a("p",[e._v("Pixhawk 5x devices (and later) that have an Ethernet port, configure it by default to connect to a GCS:")]),e._v(" "),a("p",[e._v("On this hardware, there is a "),a("RouterLink",{attrs:{to:"/ko/peripherals/serial_configuration.html#default_port_mapping"}},[e._v("default serial port mapping")]),e._v(" of MAVLink instance 2 as shown below:")],1),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_2_CONFIG"}},[e._v("MAV_2_CONFIG")]),e._v(" = "),a("code",[e._v("Ethernet")]),e._v(" (1000)")],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_2_BROADCAST"}},[e._v("MAV_2_BROADCAST")]),e._v(" = "),a("code",[e._v("1")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_2_MODE"}},[e._v("MAV_2_MODE")]),e._v(" = "),a("code",[e._v("0")]),e._v(" (normal/GCS)")],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_2_RADIO_CTL"}},[e._v("MAV_2_RADIO_CTL")]),e._v(" = "),a("code",[e._v("0")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_2_RATE"}},[e._v("MAV_2_RATE")]),e._v(" = "),a("code",[e._v("100000")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_2_REMOTE_PRT"}},[e._v("MAV_2_REMOTE_PRT")]),e._v("= "),a("code",[e._v("14550")]),e._v(" (GCS)")],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_2_UDP_PRT"}},[e._v("MAV_2_UDP_PRT")]),e._v(" = "),a("code",[e._v("14550")]),e._v(" (GCS)")],1)]),e._v(" "),a("p",[e._v("For more information see: "),a("RouterLink",{attrs:{to:"/ko/advanced_config/ethernet_setup.html"}},[e._v("PX4 Ethernet Setup")])],1),e._v(" "),a("h2",{attrs:{id:"see-also"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#see-also"}},[e._v("#")]),e._v(" See Also")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/ko/peripherals/serial_configuration.html"}},[e._v("Serial Port Configuration")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/ethernet_setup.html#px4-mavlink-serial-port-configuration"}},[e._v("PX4 Ethernet Setup > PX4 MAVLink Serial Port Configuration")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/hardware/serial_port_mapping.html"}},[e._v("Serial Port Mapping")])],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);