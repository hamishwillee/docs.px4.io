(window.webpackJsonp=window.webpackJsonp||[]).push([[936],{1896:function(t,e,r){"use strict";r.r(e);var _=r(18),a=Object(_.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"항공-사고-방지-ads-b-flarm"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#항공-사고-방지-ads-b-flarm"}},[t._v("#")]),t._v(" 항공 사고 방지: ADS-B/FLARM")]),t._v(" "),r("p",[t._v("PX4는 "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Automatic_dependent_surveillance_%E2%80%93_broadcast",target:"_blank",rel:"noopener noreferrer"}},[t._v("ADS-B"),r("OutboundLink")],1),t._v(" 또는 "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/FLARM",target:"_blank",rel:"noopener noreferrer"}},[t._v("FLARM"),r("OutboundLink")],1),t._v(" 트랜스폰더를 사용하여 "),r("RouterLink",{attrs:{to:"/ko/flight_modes/mission.html"}},[t._v("임무")]),t._v("에서 간단한 항공 시고 방지를 지원할 수 있습니다. 잠재적인 충돌이 감지되면 PX4는 "),r("a",{attrs:{href:"#NAV_TRAFF_AVOID"}},[t._v("NAV_TRAFF_AVOID")]),t._v("의 값에 따라 "),r("em",[t._v("경고")]),t._v(", 즉시 "),r("RouterLink",{attrs:{to:"/ko/flight_modes/land.html"}},[t._v("착륙")]),t._v(" 또는 "),r("RouterLink",{attrs:{to:"/ko/flight_modes/return.html"}},[t._v("귀환")]),t._v(" 할 수 있습니다.")],1),t._v(" "),r("p",[r("span",{attrs:{id:"supported_hardware"}})]),t._v(" "),r("h2",{attrs:{id:"지원-하드웨어"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#지원-하드웨어"}},[t._v("#")]),t._v(" 지원 하드웨어")]),t._v(" "),r("p",[t._v("PX4 사고방지는 MAVLink "),r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#ADSB_VEHICLE",target:"_blank",rel:"noopener noreferrer"}},[t._v("ADSB_VEHICLE"),r("OutboundLink")],1),t._v(" 메시지를 사용하여 트랜스폰더 데이터를 제공하는 ADS-B 또는 FLARM 제품에서 작동합니다.")]),t._v(" "),r("p",[t._v("다음 장치들로 테스트되었습니다:")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://uavionix.com/product/pingrx/",target:"_blank",rel:"noopener noreferrer"}},[t._v("PingRX ADS-B Receiver"),r("OutboundLink")],1),t._v(" (uAvionix)")]),t._v(" "),r("li",[r("a",{attrs:{href:"https://flarm.com/products/powerflarm/uav/",target:"_blank",rel:"noopener noreferrer"}},[t._v("FLARM"),r("OutboundLink")],1)])]),t._v(" "),r("h2",{attrs:{id:"하드웨어-설정"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#하드웨어-설정"}},[t._v("#")]),t._v(" 하드웨어 설정")]),t._v(" "),r("p",[t._v("두 장치 모두 비행컨트롤러의 직렬 포트에 연결할 수 있습니다. 가장 일반적으로 TELEM2에 연결됩니다 (다른 용도로 사용되지 않는 경우).")]),t._v(" "),r("h3",{attrs:{id:"pingrx"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pingrx"}},[t._v("#")]),t._v(" PingRX")]),t._v(" "),r("p",[t._v("PingRX MAVLink 포트는 아래와 같이 핀아웃이있는 JST ZHR-4 메이팅 커넥터를 사용합니다.")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("핀")]),t._v(" "),r("th",[t._v("신호")]),t._v(" "),r("th",[t._v("전압")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("1 (red)")]),t._v(" "),r("td",[t._v("RX (IN)")]),t._v(" "),r("td",[t._v("+5V tolerant")])]),t._v(" "),r("tr",[r("td",[t._v("2 (blk)")]),t._v(" "),r("td",[t._v("TX (OUT)")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("3 (blk)")]),t._v(" "),r("td",[t._v("Power")]),t._v(" "),r("td",[t._v("+4 to 6V")])]),t._v(" "),r("tr",[r("td",[t._v("4 (blk)")]),t._v(" "),r("td",[t._v("GND")]),t._v(" "),r("td",[t._v("GND")])])])]),t._v(" "),r("p",[t._v("PingRX에는 "),r("RouterLink",{attrs:{to:"/ko/flight_controller/mro_pixhawk.html"}},[t._v("mRo Pixhawk")]),t._v("의 TELEM2 포트 (DF13-6P)에 직접 연결가능한  커넥터 케이블이 함께 제공됩니다. 다른 포트나 보드의 경우 자체 케이블이 필요합니다.")],1),t._v(" "),r("h2",{attrs:{id:"flarm"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#flarm"}},[t._v("#")]),t._v(" FLARM")]),t._v(" "),r("p",[t._v("FLARM에는 "),r("RouterLink",{attrs:{to:"/ko/flight_controller/mro_pixhawk.html"}},[t._v("mRo Pixhawk")]),t._v("와 동일한 핀아웃을 가진 온보드 DF-13 6 핀 커넥터가 있습니다.")],1),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("핀")]),t._v(" "),r("th",[t._v("신호")]),t._v(" "),r("th",[t._v("전압")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("1(red)")]),t._v(" "),r("td",[t._v("VCC")]),t._v(" "),r("td",[t._v("+4V to +36V")])]),t._v(" "),r("tr",[r("td",[t._v("2 (blk)")]),t._v(" "),r("td",[t._v("TX (OUT)")]),t._v(" "),r("td",[t._v("+3.3V")])]),t._v(" "),r("tr",[r("td",[t._v("3 (blk)")]),t._v(" "),r("td",[t._v("RX (IN)")]),t._v(" "),r("td",[t._v("+3.3V")])]),t._v(" "),r("tr",[r("td",[t._v("4 (blk)")]),t._v(" "),r("td",[t._v("-")]),t._v(" "),r("td",[t._v("+3.3V")])]),t._v(" "),r("tr",[r("td",[t._v("5 (blk)")]),t._v(" "),r("td",[t._v("-")]),t._v(" "),r("td",[t._v("+3.3V")])]),t._v(" "),r("tr",[r("td",[t._v("6 (blk)")]),t._v(" "),r("td",[t._v("GND")]),t._v(" "),r("td",[t._v("GND")])])])]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("비행 컨트롤러의 TX 및 RX는 FLARM의 RX 및 TX에 각각 연결되어야 합니다.")])]),t._v(" "),r("h2",{attrs:{id:"소프트웨어-설정"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#소프트웨어-설정"}},[t._v("#")]),t._v(" 소프트웨어 설정")]),t._v(" "),r("h3",{attrs:{id:"포트-설정"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#포트-설정"}},[t._v("#")]),t._v(" 포트 설정")]),t._v(" "),r("p",[t._v("Flarm/PingRX는 다른 "),r("RouterLink",{attrs:{to:"/ko/peripherals/mavlink_peripherals.html"}},[t._v("MAVLink 주변기기")]),t._v("와 동일한 방식으로 설정됩니다. 유일한 "),r("em",[t._v("특정")]),t._v(" 설정은 포트 전송 속도가 57600 및 저 대역폭 프로필 ("),r("code",[t._v("MAV_X_MODE")]),t._v(")로 설정되어야 한다는 것입니다.")],1),t._v(" "),r("p",[t._v("장치를 TELEM2 포트에 연결했다고 가정하고 다음과 같이 "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameters.html"}},[t._v("매개 변수를 설정")]),t._v("합니다.")],1),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_1_CONFIG"}},[t._v("MAV_1_CONFIG")]),t._v(" = TELEM 2")],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_1_MODE"}},[t._v("MAV_1_MODE")]),t._v(" = Normal")],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_1_RATE"}},[t._v("MAV_1_RATE")]),t._v(" = 0 (default sending rate for port).")],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_1_FORWARD"}},[t._v("MAV_1_FORWARD")]),t._v(" = Enabled")],1)]),t._v(" "),r("p",[t._v("기체를 재부팅합니다.")]),t._v(" "),r("p",[t._v("이제 57600으로 설정하여야 하는 "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SER_TEL2_BAUD"}},[t._v("SER_TEL2_BAUD")]),t._v("라는 새 매개변수를 찾을 수 있습니다.")],1),t._v(" "),r("h3",{attrs:{id:"사고-방지-설정"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#사고-방지-설정"}},[t._v("#")]),t._v(" 사고 방지 설정")]),t._v(" "),r("p",[t._v("Configure the action when there is a potential collision using the parameter below:")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("매개변수")]),t._v(" "),r("th",[t._v("설명")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("span",{attrs:{id:"NAV_TRAFF_AVOID"}}),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#NAV_TRAFF_AVOID"}},[t._v("NAV_TRAFF_AVOID")])],1),t._v(" "),r("td",[t._v("교통 회피 모드 활성화는 회피 대응을 지정합니다. 0 : 비활성화, 1 : 경고 만, 2 : 귀환 모드, 3 : 착륙 모드.")])]),t._v(" "),r("tr",[r("td",[r("span",{attrs:{id:"NAV_TRAFF_A_RADM"}}),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#NAV_TRAFF_A_RADM"}},[t._v("NAV_TRAFF_A_RADM")])],1),t._v(" "),r("td",[r("em",[t._v("유인")]),t._v(" 항공기에 대한 교통 회피 거리 설정")])]),t._v(" "),r("tr",[r("td",[r("span",{attrs:{id:"NAV_TRAFF_A_RADU"}}),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#NAV_TRAFF_A_RADU"}},[t._v("NAV_TRAFF_A_RADU")])],1),t._v(" "),r("td",[r("em",[t._v("무인")]),t._v(" 항공기에 대한 교통 회피 거리 설정")])])])]),t._v(" "),r("h2",{attrs:{id:"구현"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#구현"}},[t._v("#")]),t._v(" 구현")]),t._v(" "),r("p",[t._v("아래 매개변수를 사용하여 잠재적 충돌시의 동작을 설정합니다.")]),t._v(" "),r("p",[t._v("If a valid transponder report is received, PX4 first uses the transponder position and heading information to estimate whether the vehicles will share a similar altitude before they pass each other. If they may then PX4 it estimates how the closest distance between the path to the next waypoint and the other vehicles predicted path. If the crossing point is less than the configured distance for altitude and path, the "),r("RouterLink",{attrs:{to:"/ko/config/safety.html#traffic-avoidance-failsafe"}},[t._v("Traffic Avoidance Failsafe")]),t._v(" action is started, and the vehicle will either warn, land, or return. The detection distance can be configured separately for manned and unmanned aviation.")],1),t._v(" "),r("p",[t._v("The code can be found in "),r("code",[t._v("Navigator::check_traffic")]),t._v(" ("),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/modules/navigator/navigator_main.cpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("/src/modules/navigator/navigator_main.cpp"),r("OutboundLink")],1),t._v(").")]),t._v(" "),r("p",[t._v("PX4 will also forward the transponder data to a GCS if this has been configured for the MAVLink instance (this is recommended). The last 10 Digits of the GUID is displayed as Drone identification.")]),t._v(" "),r("h2",{attrs:{id:"추가-정보"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#추가-정보"}},[t._v("#")]),t._v(" 추가 정보")]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/ko/peripherals/mavlink_peripherals.html"}},[t._v("MAVLink 주변장치")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/peripherals/serial_configuration.html"}},[t._v("직렬 포트 설정")])],1)])])}),[],!1,null,null,null);e.default=a.exports}}]);