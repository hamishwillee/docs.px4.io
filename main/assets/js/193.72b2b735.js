(window.webpackJsonp=window.webpackJsonp||[]).push([[193],{1019:function(t,_,e){t.exports=e.p+"assets/img/f450_setup_full.d154c418.jpg"},1020:function(t,_,e){t.exports=e.p+"assets/img/f450_setup_back.9a2e3fb5.jpg"},1021:function(t,_,e){t.exports=e.p+"assets/img/f450_setup_open.92083c97.jpg"},1022:function(t,_,e){t.exports=e.p+"assets/img/f450_setup_gps.12c90443.jpg"},1023:function(t,_,e){t.exports=e.p+"assets/img/f450_qgc_setup_i2c.94801221.png"},2712:function(t,_,e){"use strict";e.r(_);var v=e(19),r=Object(v.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"거리-센서-및-rtk-gps가-장착-된-dji-flame-wheel-450-pixhawk-3-pro"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#거리-센서-및-rtk-gps가-장착-된-dji-flame-wheel-450-pixhawk-3-pro"}},[t._v("#")]),t._v(" 거리 센서 및 RTK GPS가 장착 된 DJI Flame Wheel 450 (Pixhawk 3 Pro)")]),t._v(" "),v("p",[t._v("*DJI"),v("sup",[t._v("®")]),t._v(" Flame Wheel F450 * Quadcopter는 아마추어 항공 사진, 1 인칭 시점 애플리케이션 및 일반적인 비행 엔터테인먼트를 위해 설계되었습니다. 아래의 조립 방법은 Pixhawk 3 Pro 비행 컨트롤러와 함께 프레임을 사용하기위한 조립 방법과 설정 방법을 설명합니다. 정밀한 위치 지정을위한 RTK GPS와 거리 센서가 포함되어 있습니다.")]),t._v(" "),v("p",[t._v("주요 정보:")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("프레임:")]),t._v(" DJI Flame Wheel 450")]),t._v(" "),v("li",[v("strong",[t._v("비행 컨트롤러:")]),t._v(" "),v("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk3_pro.html"}},[t._v("Pixhawk 3 Pro")])],1),t._v(" "),v("li",[t._v("**위치정보: ** RTK GPS")])]),t._v(" "),v("p",[v("img",{attrs:{src:e(1019),alt:""}})]),t._v(" "),v("p",[v("img",{attrs:{src:e(1020),alt:""}})]),t._v(" "),v("h2",{attrs:{id:"부품-목록"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#부품-목록"}},[t._v("#")]),t._v(" 부품 목록")]),t._v(" "),v("ul",[v("li",[t._v("비행 컨트롤러: "),v("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk3_pro.html"}},[t._v("Pixhawk 3 Pro")])],1),t._v(" "),v("li",[t._v("프레임: "),v("a",{attrs:{href:"http://www.dji.com/flame-wheel-arf",target:"_blank",rel:"noopener noreferrer"}},[t._v("DJI Flamewheel 450"),v("OutboundLink")],1)]),t._v(" "),v("li",[t._v("모토: 3DR Iris Plus 950kv rebranded T-Motors MN2213")]),t._v(" "),v("li",[t._v("전기변속기: Hobbywing XRotor 35A Micro 3-6S BLHeli")]),t._v(" "),v("li",[t._v('블레이드: Graupner 10"x5" (M6와 호환되도록 '),v("a",{attrs:{href:"https://drive.google.com/file/d/0B2piootk_fIKMWhIVzVPWEFGLU0/view",target:"_blank",rel:"noopener noreferrer"}},[t._v("이 어댑터"),v("OutboundLink")],1),t._v("를 인쇄해야합니다.) ")]),t._v(" "),v("li",[t._v("거리 센서:  Lidar-Lite V3")]),t._v(" "),v("li",[t._v("GPS: Here+ RTK GPS")]),t._v(" "),v("li",[t._v("Telemetry:        "),v("RouterLink",{attrs:{to:"/ko/telemetry/sik_radio.html"}},[t._v("3DR Telemetry")])],1),t._v(" "),v("li",[t._v("배터리: Roxxy LiPo - 4S, 4000mAh")])]),t._v(" "),v("p",[t._v("또한, FrSky X4R-SB 3/16ch 2.4Ghz 수신기와 FrSky Taranis 컨트롤러를 사용합니다. 이번 조립에는 동일한 블레이드를 사용하는 경우 지퍼 타이, 양면 테이프, 납땜 인두 및 3D 프린터도 필요합니다. GPS 마스트는 Intel Aero에서 재사용되었습니다.")]),t._v(" "),v("p",[v("img",{attrs:{src:e(1021),alt:"F450 설정-열기"}})]),t._v(" "),v("p",[v("em",[t._v("Pixhawk 3 Pro")]),t._v("는 내부 IMU가 이미 축축되어 있기 때문에 양면 테이프를 사용하여 부착 할 수 있습니다.")]),t._v(" "),v("p",[t._v("이 설정에서는 자동 조종 장치가 180도 회전되어 SD 카드에 접근이 더욱 용이합니다. 그러나, 베이스 플레이트를 180도 돌리면, 비행 컨트롤러 보드를 전면에 장착할 수 있습니다. 두 방법 모두 가능하나, "),v("em",[t._v("QGroundControl")]),t._v("에서 보드 회전의 설정을 확인하여야 합니다.")]),t._v(" "),v("h2",{attrs:{id:"배선"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#배선"}},[t._v("#")]),t._v(" 배선")]),t._v(" "),v("p",[t._v("Pixhawk 3 Pro의 일반 핀아웃은 "),v("a",{attrs:{href:"https://drotek.gitbook.io/pixhawk-3-pro/hardware/inputs-outputs",target:"_blank",rel:"noopener noreferrer"}},[t._v("여기"),v("OutboundLink")],1),t._v("에서 조회할 수 있습니다.")]),t._v(" "),v("h3",{attrs:{id:"telemetry-radio"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#telemetry-radio"}},[t._v("#")]),t._v(" Telemetry Radio")]),t._v(" "),v("div",{staticClass:"custom-block note"},[v("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),v("p",[t._v("The 3DR Telemetry radio used here is no longer available. Comparable alternatives can be found in "),v("RouterLink",{attrs:{to:"/ko/telemetry/sik_radio.html"}},[t._v("Telemetry Radios > SiK Radio")]),t._v(".")],1)]),t._v(" "),v("p",[t._v("The 3DR Telemetry radio does not come with a JST GH connector which the "),v("em",[t._v("Pixhawk 3 Pro")]),t._v(" uses. 핀아웃은 동일하게 유지되며 플러그만 변경하면됩니다. Use the "),v("code",[t._v("TELEM 1")]),t._v(" port on the "),v("em",[t._v("Pixhawk 3 Pro")]),t._v(".")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("핀")]),t._v(" "),v("th",[t._v("Pixhawk 3 Pro Telem 1")]),t._v(" "),v("th",[t._v("3DR 텔레메트리")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("1")]),t._v(" "),v("td",[t._v("VCC")]),t._v(" "),v("td",[t._v("VCC")])]),t._v(" "),v("tr",[v("td",[t._v("2")]),t._v(" "),v("td",[t._v("TX")]),t._v(" "),v("td",[t._v("RX")])]),t._v(" "),v("tr",[v("td",[t._v("3")]),t._v(" "),v("td",[t._v("RX")]),t._v(" "),v("td",[t._v("TX")])]),t._v(" "),v("tr",[v("td",[t._v("4")]),t._v(" "),v("td",[t._v("CTS")]),t._v(" "),v("td",[t._v("CTS")])]),t._v(" "),v("tr",[v("td",[t._v("5")]),t._v(" "),v("td",[t._v("RTS")]),t._v(" "),v("td",[t._v("RTS")])]),t._v(" "),v("tr",[v("td",[t._v("6")]),t._v(" "),v("td",[t._v("GND")]),t._v(" "),v("td",[t._v("GND")])])])]),t._v(" "),v("h3",{attrs:{id:"lidar-lite-v3"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#lidar-lite-v3"}},[t._v("#")]),t._v(" Lidar-Lite V3")]),t._v(" "),v("p",[t._v("The pinout for the "),v("RouterLink",{attrs:{to:"/ko/sensor/lidar_lite.html"}},[t._v("Lidar Lite V3")]),t._v(" and the "),v("em",[t._v("Pixhawk 3 Pro")]),t._v(" I2C 1 port is as follows.")],1),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("핀")]),t._v(" "),v("th",[t._v("Pixhawk 3 Pro I2C 1")]),t._v(" "),v("th",[t._v("Lidar Lite V3")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("1")]),t._v(" "),v("td",[t._v("VCC")]),t._v(" "),v("td",[t._v("VCC")])]),t._v(" "),v("tr",[v("td",[t._v("2")]),t._v(" "),v("td",[t._v("SCL")]),t._v(" "),v("td",[t._v("- (Power enable)")])]),t._v(" "),v("tr",[v("td",[t._v("3")]),t._v(" "),v("td",[t._v("SDA")]),t._v(" "),v("td",[t._v("- (Mode control)")])]),t._v(" "),v("tr",[v("td",[t._v("4")]),t._v(" "),v("td",[t._v("GND")]),t._v(" "),v("td",[t._v("SCL")])]),t._v(" "),v("tr",[v("td",[t._v("5")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("SDA")])]),t._v(" "),v("tr",[v("td",[t._v("6")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("GND")])])])]),t._v(" "),v("h3",{attrs:{id:"here-rtk-gps"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#here-rtk-gps"}},[t._v("#")]),t._v(" Here+ RTK GPS")]),t._v(" "),v("div",{staticClass:"custom-block note"},[v("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),v("p",[t._v("This RTK GPS has been discontinued. Alternatives can be found "),v("RouterLink",{attrs:{to:"/ko/gps_compass/rtk_gps.html"}},[t._v("here")])],1)]),t._v(" "),v("p",[t._v("The "),v("RouterLink",{attrs:{to:"/ko/gps_compass/rtk_gps_hex_hereplus.html"}},[t._v("Here+ RTK GPS")]),t._v(" comes with an 8 pin connector suited for the Pixhawk 2. Here + GPS는 Pixhawk 2에 적합한 8 핀 커넥터와 함께 제공됩니다. 추가 핀은 안전 버튼용이며 필요한 경우 부착 할 수 있습니다.")],1),t._v(" "),v("p",[t._v("핀아웃에 대한 상세한 내용은 17 페이지의 "),v("a",{attrs:{href:"http://www.hex.aero/wp-content/uploads/2016/07/DRS_Pixhawk-2-17th-march-2016.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("이 문서"),v("OutboundLink")],1),t._v("에서 확인하십시오.")]),t._v(" "),v("p",[v("img",{attrs:{src:e(1022),alt:"GPS 설정하기"}})]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("핀")]),t._v(" "),v("th",[t._v("Here+ GPS")]),t._v(" "),v("th",[t._v("핀")]),t._v(" "),v("th",[t._v("Pixhawk 3 Pro GPS")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("1")]),t._v(" "),v("td",[t._v("VCC_5V")]),t._v(" "),v("td",[t._v("1")]),t._v(" "),v("td",[t._v("VCC")])]),t._v(" "),v("tr",[v("td",[t._v("2")]),t._v(" "),v("td",[t._v("GPS_RX")]),t._v(" "),v("td",[t._v("2")]),t._v(" "),v("td",[t._v("GPS_TX")])]),t._v(" "),v("tr",[v("td",[t._v("3")]),t._v(" "),v("td",[t._v("GPS_TX")]),t._v(" "),v("td",[t._v("3")]),t._v(" "),v("td",[t._v("GPS_RX")])]),t._v(" "),v("tr",[v("td",[t._v("4")]),t._v(" "),v("td",[t._v("SCL")]),t._v(" "),v("td",[t._v("4")]),t._v(" "),v("td",[t._v("SCL")])]),t._v(" "),v("tr",[v("td",[t._v("5")]),t._v(" "),v("td",[t._v("SDA")]),t._v(" "),v("td",[t._v("5")]),t._v(" "),v("td",[t._v("SDA")])]),t._v(" "),v("tr",[v("td",[t._v("6")]),t._v(" "),v("td",[t._v("BUTTON")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[t._v("7")]),t._v(" "),v("td",[t._v("BUTTON_LED")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[t._v("8")]),t._v(" "),v("td",[t._v("GND")]),t._v(" "),v("td",[t._v("6")]),t._v(" "),v("td",[t._v("GND")])])])]),t._v(" "),v("h2",{attrs:{id:"px4-configuration"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#px4-configuration"}},[t._v("#")]),t._v(" PX4 Configuration")]),t._v(" "),v("p",[v("em",[t._v("QGroundControl")]),t._v("에서 쿼드콥터를 설정법에 대한 일반 문서는 "),v("RouterLink",{attrs:{to:"/ko/config/"}},[t._v("기본 구성")]),t._v("을 참고하십시오. 특정한 설정에 관련된 지침이 아래에서 제공됩니다.")],1),t._v(" "),v("h3",{attrs:{id:"기체"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#기체"}},[t._v("#")]),t._v(" 기체")]),t._v(" "),v("p",[t._v("In the "),v("RouterLink",{attrs:{to:"/ko/config/airframe.html"}},[t._v("Airframe")]),t._v(" configuration, select the "),v("em",[t._v("Generic Quadcopter")]),t._v(" airframe ("),v("strong",[t._v("Quadrotor x > Generic Quadcopter")]),t._v(").")],1),t._v(" "),v("p",[v("img",{attrs:{src:e(402),alt:"QGroundControl - Select Generic Quadcopter"}})]),t._v(" "),v("h3",{attrs:{id:"actuators"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#actuators"}},[t._v("#")]),t._v(" Actuators")]),t._v(" "),v("p",[t._v("In the "),v("RouterLink",{attrs:{to:"/ko/config/actuators.html"}},[t._v("Actuators")]),t._v(" configuration in "),v("em",[t._v("QGroundControl")])],1),t._v(" "),v("ul",[v("li",[t._v("Update the vehicle geometry to match the Flamewheel 450")]),t._v(" "),v("li",[t._v("Assign actuators functions to outputs as wired.")]),t._v(" "),v("li",[t._v("Test the configuration using the sliders.")])]),t._v(" "),v("h3",{attrs:{id:"rtk-gps"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#rtk-gps"}},[t._v("#")]),t._v(" RTK GPS")]),t._v(" "),v("p",[t._v("RTK GPS는 플러그 앤 플레이입니다. For more instructions see "),v("RouterLink",{attrs:{to:"/ko/gps_compass/rtk_gps.html"}},[t._v("here")]),t._v(".")],1),t._v(" "),v("h3",{attrs:{id:"lidar-lite"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#lidar-lite"}},[t._v("#")]),t._v(" Lidar-Lite")]),t._v(" "),v("p",[v("em",[t._v("Lidar-Lite V3")]),t._v(" (I2C를 통해 연결됨)를 활성화하려면 "),v("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SENS_EN_LL40LS"}},[t._v("SENS_EN_LL40LS")]),t._v(" 매개 변수를 "),v("code",[t._v("I2C")]),t._v("로 설정해야합니다.")],1),t._v(" "),v("p",[t._v("This can be done in "),v("em",[t._v("QGroundControl")]),t._v(" (see "),v("RouterLink",{attrs:{to:"/ko/advanced_config/parameters.html"}},[t._v("Finding/Updating Parameters")]),t._v(") as shown below:")],1),t._v(" "),v("p",[v("img",{attrs:{src:e(1023),alt:"QGC에서 SENS_EN_LL40LS 매개 변수 설정"}})]),t._v(" "),v("div",{staticClass:"custom-block note"},[v("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),v("p",[v("code",[t._v("SENS_EN_LL40LS")]),t._v("를 설정한 다음에는 비행 컨트롤러를 재부팅하여야 합니다.")])]),t._v(" "),v("h3",{attrs:{id:"기타"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#기타"}},[t._v("#")]),t._v(" 기타")]),t._v(" "),v("p",[t._v("아래의 매개 변수도 설정하십시오.")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("MAV_PROTO_VER = 2")]),t._v(" : MAVLink 프로토콜 버전 2 사용")]),t._v(" "),v("li",[v("code",[t._v("CBRK_IO_SAFETY = 22027")]),t._v(" : 안전 버튼 비활성화")]),t._v(" "),v("li",[v("code",[t._v("EKF2_GPS_POS_X")]),t._v(", "),v("code",[t._v("EKF2_GPS_POS_Y")]),t._v(", "),v("code",[t._v("EKF2_GPS_POS_Z")]),t._v(" : 보드 (NED 좌표)를 기준으로 GPS 장치 오프셋을 설정합니다.")])]),t._v(" "),v("h3",{attrs:{id:"tuning"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tuning"}},[t._v("#")]),t._v(" Tuning")]),t._v(" "),v("p",[t._v("Airframe selection sets "),v("em",[t._v("default")]),t._v(" autopilot parameters for the frame. These may be good enough to fly with, but you should tune each frame build.")]),t._v(" "),v("p",[t._v("For instructions on how, start from "),v("RouterLink",{attrs:{to:"/ko/config/autotune.html"}},[t._v("Autotune")]),t._v(".")],1),t._v(" "),v("h2",{attrs:{id:"비디오"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#비디오"}},[t._v("#")]),t._v(" 비디오")]),t._v(" "),v("p",[t._v("@"),v("a",{attrs:{href:"https://youtu.be/JovSwzoTepU",target:"_blank",rel:"noopener noreferrer"}},[t._v("유투브"),v("OutboundLink")],1)])])}),[],!1,null,null,null);_.default=r.exports},402:function(t,_,e){t.exports=e.p+"assets/img/qgc_airframe_generic_quadx.e7c7ba62.png"}}]);