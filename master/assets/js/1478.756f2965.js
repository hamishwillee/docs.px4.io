(window.webpackJsonp=window.webpackJsonp||[]).push([[1478],{2675:function(t,e,_){"use strict";_.r(e);var r=_(19),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"직렬-포트-설정"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#직렬-포트-설정"}},[t._v("#")]),t._v(" 직렬 포트 설정")]),t._v(" "),_("p",[t._v("Pixhawk 보드의 직렬(UART) 포트들은 매개변수를 통하여 설정합니다. 예 : "),_("code",[t._v("GPS1")]),t._v(", "),_("code",[t._v("TELEM1")]),t._v(", "),_("code",[t._v("TELEM2")]),t._v(", "),_("code",[t._v("TELEM4")]),t._v(" ("),_("code",[t._v("UART + I2C")]),t._v(").")]),t._v(" "),_("p",[t._v("설정을 통하여 아래의 작업들이 용이해집니다.(예 😃")]),t._v(" "),_("ul",[_("li",[t._v("포트의 전송 속도를 변경합니다.")]),t._v(" "),_("li",[t._v("다른 포트에서 MAVLink를 실행하거나 스트리밍 메시지를 변경합니다.")]),t._v(" "),_("li",[t._v("듀얼 GPS를 설정합니다.")]),t._v(" "),_("li",[t._v("일부 "),_("RouterLink",{attrs:{to:"/ko/sensor/rangefinders.html"}},[t._v("거리 센서")]),t._v("와 같이 직렬 포트에서 실행되는 센서를 활성화합니다.")],1)]),t._v(" "),_("div",{staticClass:"custom-block note"},[_("p",{staticClass:"custom-block-title"},[t._v("RC")]),t._v(" "),_("p",[t._v("입력이나 시스템 콘솔("),_("code",[t._v("SERIAL 5")]),t._v(")과 같이 특정 용도로 사용되는 일부 포트는 설정할 수 없습니다.")])]),t._v(" "),_("p",[_("span",{attrs:{id:"default_port_mapping"}})]),t._v(" "),_("h2",{attrs:{id:"사전-설정된-포트"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#사전-설정된-포트"}},[t._v("#")]),t._v(" 사전 설정된 포트")]),t._v(" "),_("p",[t._v("아래의 기능들은 일반적으로 모든 보드에서 동일하게 특정 직렬 포트에 기본적으로 매핑됩니다.")]),t._v(" "),_("ul",[_("li",[t._v("MAVLink는 전송 속도가 57600인 "),_("code",[t._v("TELEM 1")]),t._v(" 포트에 매핑됩니다("),_("RouterLink",{attrs:{to:"/ko/telemetry/"}},[t._v("원격 측정 모듈")]),t._v("의 경우).")],1),t._v(" "),_("li",[t._v("GPS 1 ("),_("RouterLink",{attrs:{to:"/ko/modules/modules_driver.html#gps"}},[t._v("gps 드라이버")]),t._v(")은 전송 속도가 "),_("em",[t._v("자동")]),t._v("인 "),_("code",[t._v("GPS 1")]),t._v(" 포트에 매핑됩니다. 이 설정은 GPS 전송 속도를 자동으로 감지합니다(115200 전송 속도가 필요한 Trimble MB-Two 제외).")],1)]),t._v(" "),_("p",[t._v("다른 모든 포트에는 할당된 기능이 없습니다(비활성화 됨).")]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),_("p",[t._v("위의 포트 매핑은 "),_("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_0_CONFIG"}},[t._v("MAV_0_CONFIG")]),t._v(" 및 "),_("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#GPS_1_CONFIG"}},[t._v("GPS_1_CONFIG")]),t._v("를 각각 "),_("em",[t._v("비활성화")]),t._v("로 설정할 수 있습니다.")],1)]),t._v(" "),_("h2",{attrs:{id:"포트를-설정-방법"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#포트를-설정-방법"}},[t._v("#")]),t._v(" 포트를 설정 방법")]),t._v(" "),_("p",[t._v("모든 직렬 드라이버와 포트는 동일한 방식으로 설정합니다.")]),t._v(" "),_("ol",[_("li",[t._v("서비스와 주변기기에 대한 매개변수를 사용할 포트로 설정하십시오.")])]),t._v(" "),_("div",{staticClass:"custom-block note"},[_("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),_("p",[t._v("설정 매개변수 이름은 <0 *_CONFIG"),t._v(" 또는 "),_("code",[t._v("*_ CFG")]),t._v(" 패턴을 따릅니다. "),_("em",[t._v("QGroundControl")]),t._v("은 펌웨어에 있는 서비스와 드라이버에 대한 매개변수만 표시합니다. 이 문서 작성 시점의 세트는 다음과 같습니다: "),_("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#GPS_1_CONFIG"}},[t._v("GPS_1_CONFIG")]),t._v(", "),_("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#GPS_2_CONFIG"}},[t._v("GPS_2_CONFIG")]),t._v(", "),_("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#ISBD_CONFIG"}},[t._v("ISBD_CONFIG")]),t._v(", "),_("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_0_CONFIG"}},[t._v("MAV_0_CONFIG")]),t._v(", "),_("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_1_CONFIG"}},[t._v("MAV_1_CONFIG")]),t._v(", "),_("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_2_CONFIG"}},[t._v("MAV_2_CONFIG")]),t._v(", "),_("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RTPS_CONFIG"}},[t._v("RTPS_CONFIG")]),t._v(", "),_("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RTPS_MAV_CONFIG"}},[t._v("RTPS_MAV_CONFIG")]),t._v(", "),_("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#TEL_FRSKY_CONFIG"}},[t._v("TEL_FRSKY_CONFIG")]),t._v(", "),_("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#TEL_HOTT_CONFIG"}},[t._v("TEL_HOTT_CONFIG")]),t._v(", "),_("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SENS_LEDDAR1_CFG"}},[t._v("SENS_LEDDAR1_CFG")]),t._v(", "),_("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SENS_SF0X_CFG"}},[t._v("SENS_SF0X_CFG")]),t._v(", "),_("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SENS_TFMINI_CFG"}},[t._v("SENS_TFMINI_CFG")]),t._v(", "),_("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SENS_ULAND_CFG"}},[t._v("SENS_ULAND_CFG")]),t._v(".")],1)]),t._v(" "),_("ol",{attrs:{start:"2"}},[_("li",[_("p",[t._v("추가 설정 매개변수를 표시하기 위하여 기체를 재부팅합니다.")])]),t._v(" "),_("li",[_("p",[t._v("선택한 포트의 전송속도 매개변수를 설정합니다.")])]),t._v(" "),_("li",[_("p",[t._v("모듈별 매개변수를 설정합니다(예 : MAVLink 스트림 및 데이터 속도 설정).")])])]),t._v(" "),_("p",[_("RouterLink",{attrs:{to:"/ko/gps_compass/#dual_gps"}},[t._v("GPS/Compass > Secondary GPS")]),t._v(" 섹션은 "),_("em",[t._v("QGroundControl")]),t._v("에서 포트 설정 방법실제 예를 제공합니다("),_("code",[t._v("TELEM 2")]),t._v(" 포트의 보조 GPS 사용을 위한 "),_("code",[t._v("GPS_2_CONFIG")]),t._v("를 사용 방법을 보여줍니다. ).")],1),t._v(" "),_("h2",{attrs:{id:"deconflicting-ports"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#deconflicting-ports"}},[t._v("#")]),t._v(" Deconflicting Ports")]),t._v(" "),_("p",[t._v("Port conflicts are handled by system startup, which ensures that at most one service is run on a specific port. For example, it is not possible to start a MAVLink instance on a specific serial device, and then launch a driver that uses the same serial device.")]),t._v(" "),_("div",{staticClass:"custom-block warning"},[_("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),_("p",[t._v("이 글을 쓰는 시점에는 충돌하는 포트에 관련된 사용자 피드백은 없습니다.")])]),t._v(" "),_("h2",{attrs:{id:"문제-해결"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#문제-해결"}},[t._v("#")]),t._v(" 문제 해결")]),t._v(" "),_("p",[_("span",{attrs:{id:"parameter_not_in_firmware"}})]),t._v(" "),_("h3",{attrs:{id:"qgroundcontrol에서-누락된-설정-매개변수"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#qgroundcontrol에서-누락된-설정-매개변수"}},[t._v("#")]),t._v(" "),_("em",[t._v("QGroundControl")]),t._v("에서 누락된 설정 매개변수")]),t._v(" "),_("p",[_("em",[t._v("QGroundControl")]),t._v("은 펌웨어의 서비스와 드라이버의 매개변수들만 표시합니다. 펌웨어에 누락된 매개변수를 추가할 수 있습니다.")]),t._v(" "),_("div",{staticClass:"custom-block note"},[_("p",{staticClass:"custom-block-title"},[t._v("PX4 펌웨어는 기본적으로 [Pixhawk 시리즈](../flight_controller/pixhawk_series.md) 보드에 드라이버를 대부분 포함합니다. 플래시 제한 보드는 드라이버를 주석 처리하거나 생략할 수 있습니다(작성 시점에는 FMUv2 기반 보드에만 영향을 미침).")])]),t._v(" "),_("p",[t._v("You can include the missing driver in firmware by enabling the driver in the "),_("strong",[t._v("default.px4board")]),t._v(" config file that corresponds to the "),_("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/boards/px4",target:"_blank",rel:"noopener noreferrer"}},[t._v("board"),_("OutboundLink")],1),t._v(" you want to build for. For example, to enable the SRF02 driver, you would a the following line to the px4board.")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",[_("code",[t._v("CONFIG_DRIVERS_DISTANCE_SENSOR_SRF02=y\n")])])]),_("p",[t._v("An easier method would be using boardconfig which launches a GUI where you can easily search, disable and enable modules. To launch boardconfig type "),_("code",[t._v("make <vendor>_<board>_<label> boardconfig")])]),t._v(" "),_("p",[t._v("You will then need to build the firmware for your platform, as described in "),_("RouterLink",{attrs:{to:"/ko/dev_setup/building_px4.html"}},[t._v("Building PX4 Software")]),t._v(".")],1),t._v(" "),_("h2",{attrs:{id:"추가-정보"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#추가-정보"}},[t._v("#")]),t._v(" 추가 정보")]),t._v(" "),_("ul",[_("li",[_("RouterLink",{attrs:{to:"/ko/peripherals/mavlink_peripherals.html"}},[t._v("MAVLink 주변 장치(OSD/GCS/보조 컴퓨터 등)")])],1)])])}),[],!1,null,null,null);e.default=a.exports}}]);