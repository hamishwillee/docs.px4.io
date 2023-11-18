(window.webpackJsonp=window.webpackJsonp||[]).push([[337],{1338:function(t,e,r){t.exports=r.p+"assets/img/qgc_rtk_survey-in.89d504d8.png"},1339:function(t,e,r){t.exports=r.p+"assets/img/qgc_rtk_streaming.5a9c2cc0.png"},1340:function(t,e,r){t.exports=r.p+"assets/img/qgc_rtk_gps_status.8114d8f4.png"},1341:function(t,e,r){t.exports=r.p+"assets/img/settings_view_general_rtk_gps.1d9ad03d.jpg"},2871:function(t,e,r){"use strict";r.r(e);var a=r(19),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"rtk-gps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rtk-gps"}},[t._v("#")]),t._v(" RTK GPS")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Real_Time_Kinematic",target:"_blank",rel:"noopener noreferrer"}},[t._v("Real Time Kinematic (RTK)"),a("OutboundLink")],1),t._v(" GNSS/GPS systems provide centimeter-level accuracy, allowing PX4 to be used in applications like precision surveying (where pinpoint accuracy is essential).")]),t._v(" "),a("p",[t._v("This feature requires "),a("em",[t._v("QGroundControl")]),t._v(" running on a laptop/PC and a vehicle with a WiFi or Telemetry radio link to the ground station laptop.")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("Some RTK GPS setups can provide yaw/heading information, as an alternative to the compass:")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/ko/gps_compass/u-blox_f9p_heading.html"}},[t._v("듀얼 u-blox F9P를 사용한 RTK GPS 헤딩")]),t._v(".")],1),t._v(" "),a("li",[t._v("GPS directly output yaw (see table below).")])])]),t._v(" "),a("h2",{attrs:{id:"지원되는-rtk-장치"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#지원되는-rtk-장치"}},[t._v("#")]),t._v(" 지원되는 RTK 장치")]),t._v(" "),a("p",[t._v("PX4는 "),a("a",{attrs:{href:"https://www.u-blox.com/en/product/neo-m8p",target:"_blank",rel:"noopener noreferrer"}},[t._v("u-blox M8P"),a("OutboundLink")],1),t._v(", "),a("a",{attrs:{href:"https://www.u-blox.com/en/product/zed-f9p-module",target:"_blank",rel:"noopener noreferrer"}},[t._v("u-blox F9P"),a("OutboundLink")],1),t._v(" 및 "),a("a",{attrs:{href:"https://www.trimble.com/Precision-GNSS/MB-Two-Board.aspx",target:"_blank",rel:"noopener noreferrer"}},[t._v("Trimble MB-Two"),a("OutboundLink")],1),t._v(" GPS와 통합 제품을 지원합니다.")]),t._v(" "),a("p",[t._v("PX4에서 작동하는 RTK 호환 장치(단종 된 장치 제외)는 아래와 같습니다. 표는 편요각를 출력하는 장치를 나타내며 두 개의 장치를 사용하여 편요각를 제공할 수 있습니다. It also highlights devices that connect via the CAN bus, and those which support PPK (Post-Processing Kinematic).")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("GPS")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("편요각 출력")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[a("RouterLink",{attrs:{to:"/ko/gps_compass/u-blox_f9p_heading.html"}},[t._v("Dual F9P GPS Heading")])],1),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[a("RouterLink",{attrs:{to:"/ko/dronecan/"}},[t._v("DroneCAN")])],1),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("PPK")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("RouterLink",{attrs:{to:"/ko/dronecan/ark_rtk_gps.html"}},[t._v("ARK RTK GPS")])],1),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("RouterLink",{attrs:{to:"/ko/gps_compass/rtk_gps_cuav_c-rtk.html"}},[t._v("CUAV C-RTK GPS")])],1),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("RouterLink",{attrs:{to:"/ko/gps_compass/rtk_gps_cuav_c-rtk2.html"}},[t._v("CUAV C-RTK2 ")])],1),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("RouterLink",{attrs:{to:"/ko/gps_compass/rtk_gps_cuav_c-rtk-9ps.html"}},[t._v("CUAV C-RTK 9Ps GPS")])],1),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("RouterLink",{attrs:{to:"/ko/gps_compass/rtk_gps_fem_mini2.html"}},[t._v("Femtones MINI2 Receiver")])],1),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("RouterLink",{attrs:{to:"/ko/gps_compass/rtk_gps_freefly.html"}},[t._v("Freefly RTK GPS")]),t._v(" (F9P)")],1),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://www.cubepilot.org/#/here/here3",target:"_blank",rel:"noopener noreferrer"}},[t._v("CubePilot Here3"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("RouterLink",{attrs:{to:"/ko/gps_compass/rtk_gps_holybro_h-rtk-f9p.html"}},[t._v("Holybro H-RTK F9P Helical or Base")])],1),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://holybro.com/products/dronecan-h-rtk-f9p-helical",target:"_blank",rel:"noopener noreferrer"}},[t._v("Holybro DroneCAN H-RTK F9P Helical"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("RouterLink",{attrs:{to:"/ko/gps_compass/rtk_gps_holybro_h-rtk-f9p.html"}},[t._v("Holybro H-RTK F9P Rover Lite")])],1),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://holybro.com/products/dronecan-h-rtk-f9p-rover",target:"_blank",rel:"noopener noreferrer"}},[t._v("Holybro DroneCAN H-RTK F9P Rover"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("RouterLink",{attrs:{to:"/ko/gps_compass/rtk_gps_holybro_h-rtk-m8p.html"}},[t._v("Holybro H-RTK M8P GNSS")])],1),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("RouterLink",{attrs:{to:"/ko/gps_compass/rtk_gps_holybro_unicore_um982.html"}},[t._v("Holybro H-RTK UM982 GPS")])],1),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("RouterLink",{attrs:{to:"/ko/gps_compass/rtk_gps_locosys_r1.html"}},[t._v("LOCOSYS Hawk R1")])],1),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("RouterLink",{attrs:{to:"/ko/gps_compass/rtk_gps_locosys_r2.html"}},[t._v("LOCOSYS Hawk R2")])],1),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("RouterLink",{attrs:{to:"/ko/gps_compass/septentrio_asterx-rib.html"}},[t._v("Septentrio AsteRx-RIB")])],1),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Septentrio dual antenna heading")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("RouterLink",{attrs:{to:"/ko/gps_compass/septentrio_mosaic-go.html"}},[t._v("Septentrio mosaic-go")])],1),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Septentrio dual antenna heading")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://www.sparkfun.com/products/15136",target:"_blank",rel:"noopener noreferrer"}},[t._v("SparkFun GPS-RTK2 Board - ZED-F9P"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://store-drotek.com/911-sirius-rtk-gnss-rover-f9p.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("SIRIUS RTK GNSS ROVER (F9P)"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://store.mrobotics.io/product-p/m10020d.htm",target:"_blank",rel:"noopener noreferrer"}},[t._v("mRo u-blox ZED-F9 RTK L1/L2 GPS"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("RouterLink",{attrs:{to:"/ko/gps_compass/rtk_gps_trimble_mb_two.html"}},[t._v("Trimble MB-Two")])],1),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})])])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("일부 RTK 모듈은 특정 기능(베이스 또는 로버)으로만 사용할 수 있는 반면, 다른 모듈은 서로 교환하여 사용할 수 있습니다.")])]),t._v(" "),a("h2",{attrs:{id:"포지셔닝-설정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#포지셔닝-설정"}},[t._v("#")]),t._v(" 포지셔닝 설정")]),t._v(" "),a("p",[t._v("RTK GPS 설정은 "),a("em",[t._v("QGroundControl")]),t._v(" "),a("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/SettingsView/General.html#rtk_gps",target:"_blank",rel:"noopener noreferrer"}},[t._v("일반 설정"),a("OutboundLink")],1),t._v(" (**SettingsView > 일반 설정 > RTK GPS **)에서 지정됩니다.")]),t._v(" "),a("p",[t._v("추가로 다음과 같은 것들이 필요합니다.")]),t._v(" "),a("ul",[a("li",[t._v("QGroundControl 실행 가능한 "),a("em",[t._v("노트북/PC")]),t._v(" (Android/iOS 용 QGroundControl은 RTK를 지원하지 않음)")]),t._v(" "),a("li",[t._v("노트북에 WiFi 또는 원격 텔레메트리 링크가 있는 기체.")])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("기본 모듈이있는 "),a("em",[t._v("QGroundControl")]),t._v("은 이론적으로 여러 기체/로버 모듈에 RTK GPS를 활성화 가능합니다. 이 문서 작성 시점에서 이것의 사용 사례는 테스트되지 않았습니다.")])]),t._v(" "),a("h3",{attrs:{id:"하드웨어-설정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#하드웨어-설정"}},[t._v("#")]),t._v(" 하드웨어 설정")]),t._v(" "),a("h4",{attrs:{id:"로버-rtk-모듈-차량"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#로버-rtk-모듈-차량"}},[t._v("#")]),t._v(" 로버 RTK 모듈 (차량)")]),t._v(" "),a("p",[t._v("필요한 연결 방법과 케이블/커넥터는 선택한 RTK 모듈과 "),a("RouterLink",{attrs:{to:"/ko/flight_controller/"}},[t._v("비행 콘트롤러")]),t._v("에 따라 달라집니다.")],1),t._v(" "),a("p",[t._v("대부분은 다른 GPS 모듈과 같은 방식으로 비행 콘트롤러의 GPS 포트를 통해 연결됩니다. Some are connected to the "),a("RouterLink",{attrs:{to:"/ko/can/"}},[t._v("CAN")]),t._v(" bus (i.e. using "),a("RouterLink",{attrs:{to:"/ko/dronecan/"}},[t._v("DroneCAN")]),t._v(").")],1),t._v(" "),a("p",[t._v("See "),a("a",{attrs:{href:"#supported-rtk-devices"}},[t._v("documentation for the selected device")]),t._v(" and "),a("RouterLink",{attrs:{to:"/ko/dronecan/"}},[t._v("DroneCAN")]),t._v(" for more information on wiring and configuration.")],1),t._v(" "),a("h4",{attrs:{id:"기본-rtk-모듈-접지"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#기본-rtk-모듈-접지"}},[t._v("#")]),t._v(" 기본 RTK 모듈 (접지)")]),t._v(" "),a("p",[t._v("USB를 통해 기본 모듈을 "),a("em",[t._v("QGroundControl")]),t._v("에 연결합니다. 기본 모듈을 사용하는 동안 이동하면 안됩니다.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("기본 모듈을 이동할 필요가 없는 하늘이 잘 보이고 건물과 잘 분리된 위치를 선택하십시오.\n삼각대를 사용하거나 지붕에 장착하여 기본 GPS의 위치를 높이는 것이 도움이되는 경우가 많이 있습니다.")])]),t._v(" "),a("h4",{attrs:{id:"텔레메트리-라디오-wifi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#텔레메트리-라디오-wifi"}},[t._v("#")]),t._v(" 텔레메트리 라디오/WiFi")]),t._v(" "),a("p",[t._v("기체 지상제어용 노트북은 "),a("RouterLink",{attrs:{to:"/ko/telemetry/"}},[t._v("wifi 또는 무선 텔레메트리 링크")]),t._v("를 통하여 연결하여야 합니다.")],1),t._v(" "),a("p",[t._v("링크는 채널을 보다 효율적으로 사용할 수 있도록 "),a("em",[t._v("반드시")]),t._v(" MAVLink 2 프로토콜을 사용하여야 합니다. 기본적으로 설정되어야 하지만, 그렇지 않은 경우에는 아래 "),a("a",{attrs:{href:"#mavlink2"}},[t._v("MAVLink2 설정 방법")]),t._v("을 따르십시오.")]),t._v(" "),a("h3",{attrs:{id:"rtk-연결-프로세스"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rtk-연결-프로세스"}},[t._v("#")]),t._v(" RTK 연결 프로세스")]),t._v(" "),a("p",[t._v("RTK GPS 연결은 기본적으로 플러그앤플레이입니다.")]),t._v(" "),a("ol",[a("li",[a("em",[t._v("QGroundControl")]),t._v("을 실행하고 USB를 통하여 기본 RTK GPS를 지상국에 연결합니다. 장치가 자동으로 인식됩니다.")]),t._v(" "),a("li",[t._v("차량의 시동을 걸고 "),a("em",[t._v("QGroundControl")]),t._v("에 연결되어 있는지 확인하십시오.")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[a("em",[t._v("QGroundControl")]),t._v("은 RTK GPS 장치가 연결되어 있는 동안 상단 아이콘 표시줄에 RTK GPS 상태 아이콘을 표시합니다 (일반 GPS 상태 아이콘 추가). RTK가 설정되는 동안 아이콘은 빨간색으로 표시되고, RTK GPS가 활성화되면 흰색으로 바뀝니다. 아이콘을 클릭하여 현재 상태와 RTK 정확도를 확인할 수 있습니다.")])]),t._v(" "),a("ol",[a("li",[a("p",[t._v("그런 다음 "),a("em",[t._v("QGroundControl")]),t._v('은 RTK 설정 프로세스( "Survey-In"이라고 함)를 시작합니다.')]),t._v(" "),a("p",[t._v("Survey-In은 기지국의 정확한 위치 추정치를 획득을 위한 시작 절차입니다. 이 프로세스는 일반적으로 몇 분 정도 걸립니다 ("),a("a",{attrs:{href:"#rtk-gps-settings"}},[t._v("RTK 설정")]),t._v("에 지정된 최소 시간 및 정확도에 도달하면 종료됨).")]),t._v(" "),a("p",[t._v("RTK GPS 상태 아이콘을 클릭하여 진행 상황을 추적할 수 있습니다.")]),t._v(" "),a("p",[a("img",{attrs:{src:r(1338),alt:"survey-in"}})])]),t._v(" "),a("li",[a("p",[t._v("Survey-in이 완료되면 :")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("RTK GPS 아이콘이 흰색으로 변경되고, "),a("em",[t._v("QGroundControl")]),t._v("이 위치 데이터를 기체에 스트리밍하기 시작합니다.")]),t._v(" "),a("p",[a("img",{attrs:{src:r(1339),alt:"RTK 스트리밍"}})])]),t._v(" "),a("li",[a("p",[t._v("기체의 GPS가 RTK 모드로 전환됩니다. 새 모드는 "),a("em",[t._v("일반")]),t._v(" GPS 상태 아이콘 ("),a("code",[t._v("3D RTK GPS 잠금")]),t._v(")에 표시됩니다.")]),t._v(" "),a("p",[a("img",{attrs:{src:r(1340),alt:"RTK GPS 상태"}})])])])])]),t._v(" "),a("h3",{attrs:{id:"선택적-px4-구성"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#선택적-px4-구성"}},[t._v("#")]),t._v(" 선택적 PX4 구성")]),t._v(" "),a("p",[t._v("The following settings may need to be changed (using "),a("em",[t._v("QGroundControl")]),t._v(").")]),t._v(" "),a("h4",{attrs:{id:"rtk-gps-설정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rtk-gps-설정"}},[t._v("#")]),t._v(" RTK GPS 설정")]),t._v(" "),a("p",[t._v("The RTK GPS settings are specified in the "),a("em",[t._v("QGroundControl")]),t._v(" "),a("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/SettingsView/General.html#rtk_gps",target:"_blank",rel:"noopener noreferrer"}},[t._v("General Settings"),a("OutboundLink")],1),t._v(" ("),a("strong",[t._v("SettingsView > General Settings > RTK GPS")]),t._v(").")]),t._v(" "),a("p",[a("img",{attrs:{src:r(1341),alt:"RTK GPS 설정"}})]),t._v(" "),a("p",[t._v('이러한 설정은 RTK GPS 설정 프로세스 ( "Survey-In) 완료를 위한 최소 기간과 최소 정확도를 정의합니다.')]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("시간을 절약하기 위해 기본 위치를 저장하고 재사용 할 수 있습니다. Survey-In을 한 번 수행하고 "),a("em",[t._v("지정된 기본 위치 사용")]),t._v("을 선택한 다음 "),a("strong",[t._v("현재 기본 위치 저장")]),t._v("을 눌러 값을 복사합니다. 그러면 값이 변경시까지 QGC 재부팅시에도 유지됩니다.")])]),t._v(" "),a("h4",{attrs:{id:"mavlink2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mavlink2"}},[t._v("#")]),t._v(" MAVLink2")]),t._v(" "),a("p",[t._v("MAVLink2 프로토콜은 낮은 대역폭 채널을 보다 효율적으로 사용하기 때문에 사용하여야합니다. 이것은 최근 빌드에서 기본적으로 활성화되어야 합니다.")]),t._v(" "),a("p",[t._v("MAVLink2가 사용되는 지 확인하려면 :")]),t._v(" "),a("ul",[a("li",[t._v("Update the telemetry module firmware to the latest version (see "),a("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/SetupView/Firmware.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGroundControl > Setup > Firmware"),a("OutboundLink")],1),t._v(").")]),t._v(" "),a("li",[t._v("Set "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_PROTO_VER"}},[t._v("MAV_PROTO_VER")]),t._v(" to 2 (see "),a("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/SetupView/Parameters.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGroundControl Setup > Parameters"),a("OutboundLink")],1),t._v(")")],1)]),t._v(" "),a("h4",{attrs:{id:"튜닝"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#튜닝"}},[t._v("#")]),t._v(" 튜닝")]),t._v(" "),a("p",[t._v("GPS 정확도를 센티미터가 아닌 미터 단위로 가정하여 기본 매개변수가 조정되므로 일부 매개변수를 조정하여야 할 수도 있습니다. 예를 들어 "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_GPS_V_NOISE"}},[t._v("EKF2_GPS_V_NOISE")]),t._v("와 "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_GPS_P_NOISE"}},[t._v("EKF2_GPS_P_NOISE")]),t._v("를 0.2로 줄일 수 있습니다.")],1),t._v(" "),a("h4",{attrs:{id:"이중-수신기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#이중-수신기"}},[t._v("#")]),t._v(" 이중 수신기")]),t._v(" "),a("p",[t._v("두 번째 GPS 수신기는 백업으로 사용할 수 있습니다 (RTK 또는 비 RTK). "),a("RouterLink",{attrs:{to:"/ko/advanced_config/tuning_the_ecl_ekf.html#gps"}},[t._v("EKF2 GPS 설정")]),t._v(" 섹션을 참고하십시오.")],1),t._v(" "),a("h3",{attrs:{id:"기체-설정-예"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#기체-설정-예"}},[t._v("#")]),t._v(" 기체 설정 예")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/ko/frames_multicopter/dji_flamewheel_450.html"}},[t._v("거리 센서 및 RTK GPS가 있는 DJI Flamewheel 450")]),t._v("에서는 Here + RTK GPS와 Pixhawk 3 Pro를 사용한 기체 설정 방법에 대하여 설명합니다.")],1),t._v(" "),a("h2",{attrs:{id:"추가-정보"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#추가-정보"}},[t._v("#")]),t._v(" 추가 정보")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/ko/advanced/rtk_gps.html"}},[t._v("RTK-GPS (PX4-Integration)")]),t._v(" : RTK-GPS 지원을 PX4에 통합에 대한 개발자 정보입니다.")],1),t._v(" "),a("li",[a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Real_Time_Kinematic",target:"_blank",rel:"noopener noreferrer"}},[t._v("실시간 운동학"),a("OutboundLink")],1),t._v(" (Wikipedia)")])])])}),[],!1,null,null,null);e.default=n.exports}}]);