(window.webpackJsonp=window.webpackJsonp||[]).push([[470],{1203:function(t,_,r){t.exports=r.p+"assets/img/rtk_trimble_two_gnss_hero.b753d22b.jpg"},1204:function(t,_,r){t.exports=r.p+"assets/img/rtk_trimble_two_gnss_pinouts.79a4f0b2.jpg"},2405:function(t,_,r){"use strict";r.r(_);var e=r(19),a=Object(e.a)({},(function(){var t=this,_=t.$createElement,e=t._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"trimble-mb-two"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#trimble-mb-two"}},[t._v("#")]),t._v(" Trimble MB-Two")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.trimble.com/Precision-GNSS/MB-Two-Board.aspx",target:"_blank",rel:"noopener noreferrer"}},[t._v("Trimble MB-Two RTK GPS 수신기"),e("OutboundLink")],1),t._v("는 베이스 또는 로버로 구성할 수있는 하이엔드 듀얼 주파수 "),e("RouterLink",{attrs:{to:"/ko/gps_compass/rtk_gps.html"}},[t._v("RTK GPS 모듈")]),t._v("입니다.")],1),t._v(" "),e("p",[t._v("정확한 위치 정보를 제공하는 것만 아니라, MB-Two는 방향 각도를 추정할 수 있습니다 (이중 안테나 지원이 있음). 이것은 금속 구조물 근처에서 비행시 나침반 정보가 부정확한 상황에서 매우 유용합니다.")]),t._v(" "),e("p",[e("img",{attrs:{src:r(1203),alt:"MB-Two 대표 이미지"}})]),t._v(" "),e("h2",{attrs:{id:"필수-펌웨어-옵션"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#필수-펌웨어-옵션"}},[t._v("#")]),t._v(" 필수 펌웨어 옵션")]),t._v(" "),e("p",[t._v("장치 구매시 다음 펌웨어 옵션을 선택하여야 합니다.")]),t._v(" "),e("ul",[e("li",[t._v("[X] [2] [N] [G] [W] [Y] [J] : 20Hz 위치 업데이트 및 RTK 지원, 수평 1cm 및 수직 2cm 위치 정확도")]),t._v(" "),e("li",[t._v("[L] LBAND")]),t._v(" "),e("li",[t._v("[D] DUO - 이중 안테나 방향각")]),t._v(" "),e("li",[t._v("[B] BEIDOU + [O] GALILEO, 필요시")])]),t._v(" "),e("h2",{attrs:{id:"안테나-케이블"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#안테나-케이블"}},[t._v("#")]),t._v(" 안테나 케이블")]),t._v(" "),e("p",[t._v("Trimble MB-Two에는 2개의 이중 주파수(L1/L2) 안테나가 필요합니다. 좋은 예는 "),e("a",{attrs:{href:"http://www.maxtena.com/products/helicore/m1227hct-a2-sma/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Maxtenna M1227HCT-A2-SMA"),e("OutboundLink")],1),t._v(" 입니다. "),e("a",{attrs:{href:"https://uk.farnell.com/maxtena/m1227hct-a2-sma/antenna-1-217-1-25-1-565-1-61ghz/dp/2484959",target:"_blank",rel:"noopener noreferrer"}},[t._v("Farnell"),e("OutboundLink")],1),t._v("에서 구매 가능합니다.")]),t._v(" "),e("p",[t._v("장치의 안테나 커넥터 유형은 MMCX입니다. 위의 안테나(SMA 커넥터)에 적합한 케이블은 아래에서 참고하십시오.")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://www.digikey.com/products/en?mpart=415-0073-012&v=24",target:"_blank",rel:"noopener noreferrer"}},[t._v("30 cm version"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.digikey.com/products/en?mpart=415-0073-018&v=24",target:"_blank",rel:"noopener noreferrer"}},[t._v("45 cm version"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"배선"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#배선"}},[t._v("#")]),t._v(" 배선")]),t._v(" "),e("p",[t._v("Trimble MB-Two는 비행 콘트롤러(GPS 포트)의 UART에 연결됩니다.")]),t._v(" "),e("p",[t._v("모듈에 전원을 공급용 3.3V 전원공급장치가 별도로 필요합니다 (최대 소비량은 360mA).")]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[t._v("모듈은 Pixhawk에서 전원을 공급 받을 수 없습니다.")])]),t._v(" "),e("p",[t._v("28핀 커넥터 핀은 아래와 같은 번호가 지정됩니다:")]),t._v(" "),e("p",[e("img",{attrs:{src:r(1204),alt:"MB-Two 핀배열"}})]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("핀")]),t._v(" "),e("th",[t._v("명칭")]),t._v(" "),e("th",[t._v("설명")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("6")]),t._v(" "),e("td",[t._v("Vcc 3.3V")]),t._v(" "),e("td",[t._v("전원 공급")])]),t._v(" "),e("tr",[e("td",[t._v("14")]),t._v(" "),e("td",[t._v("GND")]),t._v(" "),e("td",[t._v("Autopilot의 전원과 GND에 전원을 연결합니다.")])]),t._v(" "),e("tr",[e("td",[t._v("15")]),t._v(" "),e("td",[t._v("TXD1")]),t._v(" "),e("td",[t._v("Autopilot의 RX에 연결")])]),t._v(" "),e("tr",[e("td",[t._v("16")]),t._v(" "),e("td",[t._v("RXD1")]),t._v(" "),e("td",[t._v("Autopilot의 TX에 연결")])])])]),t._v(" "),e("h2",{attrs:{id:"설정"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#설정"}},[t._v("#")]),t._v(" 설정")]),t._v(" "),e("p",[t._v("먼저 GPS 프로토콜을 Trimble("),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#GPS_1_PROTOCOL"}},[t._v("GPS_x_PROTOCOL=3")]),t._v(")로 설정합니다.")],1),t._v(" "),e("p",[t._v("방향 추정을 위해 두 안테나는 같은 높이에 있어야하고, 서로 최소 30cm 이상 떨어져야 합니다. 두 GPS가 향하는 방향은 "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#GPS_YAW_OFFSET"}},[t._v("GPS_YAW_OFFSET")]),t._v(" 매개변수로 설정할 수 있습니다.")],1),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("`GPS_YAW_OFFSET`는 기체 x 축([여기](../config/flight_controller_orientation.md#calculating-orientation)에 표시된 앞/뒤 축)을 기준으로 *기준선* (두 GPS 안테나 사이의 선)이 이루는 각도입니다.")]),t._v(" "),e("p",[t._v(":::")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#GPS_1_CONFIG"}},[t._v("GPS_1_CONFIG")]),t._v("를 사용하여 Trimple이 실행될 "),e("RouterLink",{attrs:{to:"/ko/peripherals/serial_configuration.html"}},[t._v("직렬 포트를 설정")]),t._v("하고 "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SER_GPS1_BAUD"}},[t._v("SER_GPS1_BAUD")]),t._v("에서 전송 속도를 115200로 설정합니다.")],1),t._v(" "),e("p",[t._v("자세 추정을위한 방향 융합을 활성화하려면 "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_AID_MASK"}},[t._v("EKF2_AID_MASK")]),t._v(" 매개변수를 "),e("em",[t._v("GPS 요 융합")]),t._v("을 활성화하도록 설정합니다.")],1),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[t._v("참조 : "),e("RouterLink",{attrs:{to:"/ko/gps_compass/#configuring-gps-as-yaw-heading-source"}},[t._v("GPS > 구성 > 요/방향 소스로서의 GPS")])],1)])])])}),[],!1,null,null,null);_.default=a.exports}}]);