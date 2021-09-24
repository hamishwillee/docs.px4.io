(window.webpackJsonp=window.webpackJsonp||[]).push([[1406],{2555:function(_,t,e){"use strict";e.r(t);var r=e(19),a=Object(r.a)({},(function(){var _=this,t=_.$createElement,e=_._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[e("h1",{attrs:{id:"직렬-포트-설정"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#직렬-포트-설정"}},[_._v("#")]),_._v(" 직렬 포트 설정")]),_._v(" "),e("p",[_._v("Pixhawk 보드의 직렬(UART) 포트들은 매개변수를 통하여 설정합니다. 예 : "),e("code",[_._v("GPS1")]),_._v(", "),e("code",[_._v("TELEM1")]),_._v(", "),e("code",[_._v("TELEM2")]),_._v(", "),e("code",[_._v("TELEM4")]),_._v(" ("),e("code",[_._v("UART + I2C")]),_._v(").")]),_._v(" "),e("p",[_._v("설정을 통하여 아래의 작업들이 용이해집니다.(예 😃")]),_._v(" "),e("ul",[e("li",[_._v("포트의 전송 속도를 변경합니다.")]),_._v(" "),e("li",[_._v("다른 포트에서 MAVLink를 실행하거나 스트리밍 메시지를 변경합니다.")]),_._v(" "),e("li",[_._v("듀얼 GPS를 설정합니다.")]),_._v(" "),e("li",[_._v("일부 "),e("RouterLink",{attrs:{to:"/ko/sensor/rangefinders.html"}},[_._v("거리 센서")]),_._v("와 같이 직렬 포트에서 실행되는 센서를 활성화합니다.")],1)]),_._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[_._v("RC")]),_._v(" "),e("p",[_._v("입력이나 시스템 콘솔("),e("code",[_._v("SERIAL 5")]),_._v(")과 같이 특정 용도로 사용되는 일부 포트는 설정할 수 없습니다.")])]),_._v(" "),e("p",[e("span",{attrs:{id:"default_port_mapping"}})]),_._v(" "),e("h2",{attrs:{id:"사전-설정된-포트"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#사전-설정된-포트"}},[_._v("#")]),_._v(" 사전 설정된 포트")]),_._v(" "),e("p",[_._v("아래의 기능들은 일반적으로 모든 보드에서 동일하게 특정 직렬 포트에 기본적으로 매핑됩니다.")]),_._v(" "),e("ul",[e("li",[_._v("MAVLink는 전송 속도가 57600인 "),e("code",[_._v("TELEM 1")]),_._v(" 포트에 매핑됩니다("),e("RouterLink",{attrs:{to:"/ko/telemetry/"}},[_._v("원격 측정 모듈")]),_._v("의 경우).")],1),_._v(" "),e("li",[_._v("GPS 1 ("),e("RouterLink",{attrs:{to:"/ko/modules/modules_driver.html#gps"}},[_._v("gps 드라이버")]),_._v(")은 전송 속도가 "),e("em",[_._v("자동")]),_._v("인 "),e("code",[_._v("GPS 1")]),_._v(" 포트에 매핑됩니다. 이 설정은 GPS 전송 속도를 자동으로 감지합니다(115200 전송 속도가 필요한 Trimble MB-Two 제외).")],1)]),_._v(" "),e("p",[_._v("다른 모든 포트에는 할당된 기능이 없습니다(비활성화 됨).")]),_._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[_._v("TIP")]),_._v(" "),e("p",[_._v("위의 포트 매핑은 "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_0_CONFIG"}},[_._v("MAV_0_CONFIG")]),_._v(" 및 "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#GPS_1_CONFIG"}},[_._v("GPS_1_CONFIG")]),_._v("를 각각 "),e("em",[_._v("비활성화")]),_._v("로 설정할 수 있습니다.")],1)]),_._v(" "),e("h2",{attrs:{id:"포트를-설정-방법"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#포트를-설정-방법"}},[_._v("#")]),_._v(" 포트를 설정 방법")]),_._v(" "),e("p",[_._v("모든 직렬 드라이버와 포트는 동일한 방식으로 설정합니다.")]),_._v(" "),e("ol",[e("li",[_._v("서비스와 주변기기에 대한 매개변수를 사용할 포트로 설정하십시오.")])]),_._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[_._v("Note")]),_._v(" "),e("p",[_._v("설정 매개변수 이름은 <0 *_CONFIG"),_._v(" 또는 "),e("code",[_._v("*_ CFG")]),_._v(" 패턴을 따릅니다. "),e("em",[_._v("QGroundControl")]),_._v("은 펌웨어에 있는 서비스와 드라이버에 대한 매개변수만 표시합니다. 이 문서 작성 시점의 세트는 다음과 같습니다: "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#GPS_1_CONFIG"}},[_._v("GPS_1_CONFIG")]),_._v(", "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#GPS_2_CONFIG"}},[_._v("GPS_2_CONFIG")]),_._v(", "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#ISBD_CONFIG"}},[_._v("ISBD_CONFIG")]),_._v(", "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_0_CONFIG"}},[_._v("MAV_0_CONFIG")]),_._v(", "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_1_CONFIG"}},[_._v("MAV_1_CONFIG")]),_._v(", "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_2_CONFIG"}},[_._v("MAV_2_CONFIG")]),_._v(", "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RTPS_CONFIG"}},[_._v("RTPS_CONFIG")]),_._v(", "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RTPS_MAV_CONFIG"}},[_._v("RTPS_MAV_CONFIG")]),_._v(", "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#TEL_FRSKY_CONFIG"}},[_._v("TEL_FRSKY_CONFIG")]),_._v(", "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#TEL_HOTT_CONFIG"}},[_._v("TEL_HOTT_CONFIG")]),_._v(", "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SENS_LEDDAR1_CFG"}},[_._v("SENS_LEDDAR1_CFG")]),_._v(", "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SENS_SF0X_CFG"}},[_._v("SENS_SF0X_CFG")]),_._v(", "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SENS_TFMINI_CFG"}},[_._v("SENS_TFMINI_CFG")]),_._v(", "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SENS_ULAND_CFG"}},[_._v("SENS_ULAND_CFG")]),_._v(".")],1)]),_._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[e("p",[_._v("추가 설정 매개변수를 표시하기 위하여 기체를 재부팅합니다.")])]),_._v(" "),e("li",[e("p",[_._v("선택한 포트의 전송속도 매개변수를 설정합니다.")])]),_._v(" "),e("li",[e("p",[_._v("모듈별 매개변수를 설정합니다(예 : MAVLink 스트림 및 데이터 속도 설정).")])])]),_._v(" "),e("p",[e("RouterLink",{attrs:{to:"/ko/gps_compass/#dual_gps"}},[_._v("GPS/Compass > Secondary GPS")]),_._v(" 섹션은 "),e("em",[_._v("QGroundControl")]),_._v("에서 포트 설정 방법실제 예를 제공합니다("),e("code",[_._v("TELEM 2")]),_._v(" 포트의 보조 GPS 사용을 위한 "),e("code",[_._v("GPS_2_CONFIG")]),_._v("를 사용 방법을 보여줍니다. ).")],1),_._v(" "),e("h2",{attrs:{id:"포트-충돌-해제"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#포트-충돌-해제"}},[_._v("#")]),_._v(" 포트 충돌 해제")]),_._v(" "),e("p",[_._v("포트 충돌은 시스템 시작에 의해 처리되므로 특정 포트에서 최대 하나의 서비스만 실행됩니다.")]),_._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[_._v("WARNING")]),_._v(" "),e("p",[_._v("이 글을 쓰는 시점에는 충돌하는 포트에 관련된 사용자 피드백은 없습니다.")])]),_._v(" "),e("h2",{attrs:{id:"문제-해결"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#문제-해결"}},[_._v("#")]),_._v(" 문제 해결")]),_._v(" "),e("p",[e("span",{attrs:{id:"parameter_not_in_firmware"}})]),_._v(" "),e("h3",{attrs:{id:"qgroundcontrol에서-누락된-설정-매개변수"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#qgroundcontrol에서-누락된-설정-매개변수"}},[_._v("#")]),_._v(" "),e("em",[_._v("QGroundControl")]),_._v("에서 누락된 설정 매개변수")]),_._v(" "),e("p",[e("em",[_._v("QGroundControl")]),_._v("은 펌웨어의 서비스와 드라이버의 매개변수들만 표시합니다. 펌웨어에 누락된 매개변수를 추가할 수 있습니다.")]),_._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[_._v("PX4 펌웨어는 기본적으로 [Pixhawk 시리즈](../flight_controller/pixhawk_series.md) 보드에 드라이버를 대부분 포함합니다. 플래시 제한 보드는 드라이버를 주석 처리하거나 생략할 수 있습니다(작성 시점에는 FMUv2 기반 보드에만 영향을 미침).")])]),_._v(" "),e("p",[_._v("빌드하려는 "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/boards/px4",target:"_blank",rel:"noopener noreferrer"}},[_._v("보드"),e("OutboundLink")],1),_._v("에 해당하는 "),e("strong",[_._v("default.cmake")]),_._v(" 설정 파일에서 드라이버의 주석을 제거하거나 추가하여 누락된 드라이버를 펌웨어에 포함시킬 수 있습니다. 예를 들어, sf0x 드라이버를 활성화하려면 아래 줄의 시작 부분에서 "),e("code",[_._v("#")]),_._v("을 제거합니다.")]),_._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[_._v("#distance_sensor/sf0x\n")])])]),e("p",[_._v("그런 다음 "),e("RouterLink",{attrs:{to:"/ko/dev_setup/building_px4.html"}},[_._v("PX4 소프트웨어 빌드")]),_._v(" 방법으로 플랫폼용 펌웨어를 빌드하여야 합니다.")],1),_._v(" "),e("h2",{attrs:{id:"추가-정보"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#추가-정보"}},[_._v("#")]),_._v(" 추가 정보")]),_._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/ko/peripherals/mavlink_peripherals.html"}},[_._v("MAVLink 주변 장치(OSD/GCS/보조 컴퓨터 등)")])],1)])])}),[],!1,null,null,null);t.default=a.exports}}]);