(window.webpackJsonp=window.webpackJsonp||[]).push([[367],{1188:function(t,e,a){t.exports=a.p+"assets/img/qgc_serial_config_example.286038e9.png"},1189:function(t,e,a){t.exports=a.p+"assets/img/qgc_serial_baudrate_example.ddc34059.png"},2386:function(t,e,a){"use strict";a.r(e);var r=a(19),_=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"gps와-나침반"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#gps와-나침반"}},[t._v("#")]),t._v(" GPS와 나침반")]),t._v(" "),r("p",[t._v("PX4는 u-blox, MTK Ashtech 또는 Emlid 프로토콜이나 UAVCAN 통신 수신기를 사용하여 글로벌 내비게이션 위성시스템(GNSS)(GPS, GLONASS, Galileo, BeiDou, QZSS 및 SBAS 포함)을 지원합니다. PX4는 센티미터 정밀도 GPS 시스템인 "),r("RouterLink",{attrs:{to:"/ko/gps_compass/rtk_gps.html"}},[t._v("실시간 운동학(RTK) GPS 수신기")]),t._v("를 지원합니다.")],1),t._v(" "),r("p",[t._v("PX4는 Bosch BMM 150 MEMS (I2C 버스를 통해), HMC5883/HMC5983 (I2C 또는 SPI), IST8310 (I2C) 및 LIS3MDL (I2C 또는 SPI)과 같은 나침반 부품(자기계)과 함께 사용할 수 있습니다. 최대 4 개의 내외부 자력계를 연결할 수 있지만, 실제로는 하나만 헤딩 소스로 사용됩니다.")]),t._v(" "),r("p",[t._v("시스템은 "),r("em",[t._v("우선 순위")]),t._v("에 따라 자동으로 가장 적합한 나침반을 선택합니다. 외부 자기계는 내부 자기계보다 우선 순위가 높습니다. 기본 나침반이 비행 중에 실패하면, 다음 나침반을 사용하여 장애를 조치합니다. 비행전에 작동하지 않으면, 시동을 걸 수 없습니다.")]),t._v(" "),r("p",[r("img",{attrs:{src:a(390),alt:"GPS와 나침반"}})]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[r("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk_series.html"}},[t._v("Pixhawk 시리즈")]),t._v(" 비행 콘트롤러를 사용하는 경우에는 일반적으로 고정익 받침대 또는 날개에 모터/ESC 전원 공급 라인에서 최대한 멀리 떨어진 곳에 장착된 "),r("em",[t._v("결합 GPS + 나침반")]),t._v("을 사용하는 것이 좋습니다. 내부 나침반은 전선에서 떨어진 곳에 Pixhawk를 장착하여 전자기 간섭을 줄일 수있는 대형 기체 (예 : VTOL)에 유용할 수 "),r("em",[t._v("있습니다")]),t._v(". 대부분의 소형 운송체에서는 외부 나침반이 필수 요구사항입니다.")],1)]),t._v(" "),r("h2",{attrs:{id:"지원되는-gnss와-나침반"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#지원되는-gnss와-나침반"}},[t._v("#")]),t._v(" 지원되는 GNSS와 나침반")]),t._v(" "),r("p",[t._v("PX4는 u-blox, MTK Ashtech 또는 Emlid 프로토콜 또는 UAVCAN 통신 장치에서 작동합니다. 아래의 목록은 PX4 개발팀에서 테스트하였거나 PX4 커뮤니티에서 인기있는 GNSS/나침반 장치들입니다.")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",{staticStyle:{"text-align":"left"}},[t._v("장치")]),t._v(" "),r("th",{staticStyle:{"text-align":"center"}},[t._v("GPS")]),t._v(" "),r("th",{staticStyle:{"text-align":"center"}},[t._v("나침반")]),t._v(" "),r("th",{staticStyle:{"text-align":"center"}},[r("RouterLink",{attrs:{to:"/ko/gps_compass/rtk_gps.html"}},[t._v("RTK")])],1),t._v(" "),r("th",{staticStyle:{"text-align":"center"}},[r("a",{attrs:{href:"#configuring-gps-as-yaw-heading-source"}},[t._v("GPS Yaw 출력")])]),t._v(" "),r("th",{staticStyle:{"text-align":"center"}},[r("RouterLink",{attrs:{to:"/ko/gps_compass/u-blox_f9p_heading.html"}},[t._v("Dual F9P GPS Heading")])],1)])]),t._v(" "),r("tbody",[r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://arkelectron.com/product/ark-gps/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ARK GPS"),r("OutboundLink")],1)]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("M9N")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("ICM42688p")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}}),t._v(" "),r("td",{staticStyle:{"text-align":"center"}}),t._v(" "),r("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://www.tindie.com/products/avionicsanonymous/uavcan-gps-magnetometer/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Avionics Anonymous UAVCAN GNSS/Mag"),r("OutboundLink")],1)]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("SAM-M8Q")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("MMC5983MA")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}}),t._v(" "),r("td",{staticStyle:{"text-align":"center"}}),t._v(" "),r("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://www.tindie.com/products/avionicsanonymous/uavcan-magnetometer/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Avionics Anonymous UAVCAN Magnetometer"),r("OutboundLink")],1)]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("✗")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}}),t._v(" "),r("td",{staticStyle:{"text-align":"center"}}),t._v(" "),r("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("RouterLink",{attrs:{to:"/ko/gps_compass/rtk_gps_cuav_c-rtk.html"}},[t._v("CUAV C-RTK GPS")])],1),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("M8P/M8N")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}}),t._v(" "),r("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("RouterLink",{attrs:{to:"/ko/gps_compass/gps_hex_here2.html"}},[t._v("CubePilot Here2 GNSS GPS (M8N)")])],1),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("M8N")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("ICM20948")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}}),t._v(" "),r("td",{staticStyle:{"text-align":"center"}}),t._v(" "),r("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("RouterLink",{attrs:{to:"/ko/gps_compass/rtk_gps_hex_hereplus.html"}},[t._v("CubePilot Here+ RTK GPS")])],1),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("M8P")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("HMC5983")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}}),t._v(" "),r("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://www.cubepilot.org/#/here/here3",target:"_blank",rel:"noopener noreferrer"}},[t._v("CubePilot Here3 CAN GNSS GPS (M8N)"),r("OutboundLink")],1)]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("M8P")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("ICM20948")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}}),t._v(" "),r("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://store-drotek.com/920-DP0804.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Drotek DP0804"),r("OutboundLink")],1),t._v(" (and other "),r("a",{attrs:{href:"https://store-drotek.com/index.php?controller=search&s=ublox+compass",target:"_blank",rel:"noopener noreferrer"}},[t._v("Drotek u-blox GPS/Compasses"),r("OutboundLink")],1),t._v(")")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("M9N")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("LIS3MDL")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}}),t._v(" "),r("td",{staticStyle:{"text-align":"center"}}),t._v(" "),r("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://store-drotek.com/911-1010-sirius-rtk-gnss-rover-f9p.html#/158-sensor-no_magnetometer",target:"_blank",rel:"noopener noreferrer"}},[t._v("Drotek SIRIUS RTK GNSS ROVER (F9P)"),r("OutboundLink")],1)]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("F9P")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("RM3100")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}}),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("✓")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("RouterLink",{attrs:{to:"/ko/gps_compass/rtk_gps_drotek_xl.html"}},[t._v("Drotek XL RTK GPS")])],1),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("M8U")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("LIS3MDL")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}}),t._v(" "),r("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://emlid.com/reach/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Emlid Reach M+"),r("OutboundLink")],1),t._v(' - PX4 only supports "ordinary" GPS with this module. RTK support is expected in the near future.')]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("✗")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}}),t._v(" "),r("td",{staticStyle:{"text-align":"center"}}),t._v(" "),r("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("RouterLink",{attrs:{to:"/ko/gps_compass/rtk_gps_fem_mini2.html"}},[t._v("Femtones MINI2 Receiver")])],1),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("FB672, FB6A0")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}}),t._v(" "),r("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("RouterLink",{attrs:{to:"/ko/gps_compass/rtk_gps_freefly.html"}},[t._v("Freefly RTK GPS")])],1),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("F9P")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("IST8310")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}}),t._v(" "),r("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://shop.holybro.com/micro-m8n-gps_p1009.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Holybro Micro M8N GPS"),r("OutboundLink")],1)]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("M8N")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("IST8310")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}}),t._v(" "),r("td",{staticStyle:{"text-align":"center"}}),t._v(" "),r("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://shop.holybro.com/nano-ublox-m8-5883-gps-module_p1236.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Holybro Nano Ublox M8 5883 GPS"),r("OutboundLink")],1)]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("UBX-M8030")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("QMC5883")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}}),t._v(" "),r("td",{staticStyle:{"text-align":"center"}}),t._v(" "),r("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://shop.holybro.com/pixhawk-4-gps-module_p1094.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Holybro M8N GPS"),r("OutboundLink")],1)]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("M8N")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("IST8310")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}}),t._v(" "),r("td",{staticStyle:{"text-align":"center"}}),t._v(" "),r("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"http://www.holybro.com/product/holybro-m9n-gps/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Holybro M9N GPS"),r("OutboundLink")],1)]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("M9N")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("IST8310")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}}),t._v(" "),r("td",{staticStyle:{"text-align":"center"}}),t._v(" "),r("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("RouterLink",{attrs:{to:"/ko/gps_compass/rtk_gps_holybro_h-rtk-f9p.html"}},[t._v("Holybro H-RTK F9P GNSS")])],1),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("F9P")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("IST8310")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}}),t._v(" "),r("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("RouterLink",{attrs:{to:"/ko/gps_compass/rtk_gps_holybro_h-rtk-m8p.html"}},[t._v("Holybro H-RTK M8P GNSS")])],1),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("M8P")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("IST8310")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}}),t._v(" "),r("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://hobbyking.com/en_us/ublox-neo-m8n-gps-with-compass.html?gclid=Cj0KCQjwqM3VBRCwARIsAKcekb3ojv1ZhLz1-GuvCsUuGT8ZZuw8meMIV_I6pgUCj6DJRzHBY9OApekaAgI5EALw_wcB&gclsrc=aw.ds&___store=en_us",target:"_blank",rel:"noopener noreferrer"}},[t._v("Hobbyking u-blox Neo-M8N GPS with Compass"),r("OutboundLink")],1)]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("M8N")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}}),t._v(" "),r("td",{staticStyle:{"text-align":"center"}}),t._v(" "),r("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://store.mrobotics.io/product-p/m10034-8308.htm",target:"_blank",rel:"noopener noreferrer"}},[t._v("mRo GPS u-blox Neo-M8N Dual Compass"),r("OutboundLink")],1)]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("M8N")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("LIS3MDL, IST8308")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}}),t._v(" "),r("td",{staticStyle:{"text-align":"center"}}),t._v(" "),r("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://store.mrobotics.io/product-p/m10020d.htm",target:"_blank",rel:"noopener noreferrer"}},[t._v("mRo u-blox ZED-F9 RTK L1/L2 GPS"),r("OutboundLink")],1)]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("F9P")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("✗")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}}),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("✓")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://www.sparkfun.com/products/15136",target:"_blank",rel:"noopener noreferrer"}},[t._v("SparkFun GPS-RTK2 Board - ZED-F9P"),r("OutboundLink")],1)]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("F9P")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("✗")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}}),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("✓")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("RouterLink",{attrs:{to:"/ko/gps_compass/rtk_gps_trimble_mb_two.html"}},[t._v("Trimble MB-Two")])],1),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("F9P")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("✗")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"https://zubax.com/products/gnss_2",target:"_blank",rel:"noopener noreferrer"}},[t._v("Zubax GNSS 2"),r("OutboundLink")],1)]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("MAX-M8Q")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("LIS3MDL")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}}),t._v(" "),r("td",{staticStyle:{"text-align":"center"}}),t._v(" "),r("td",{staticStyle:{"text-align":"center"}})])])]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("ul",[r("li",[t._v('✓ 또는 특정 부품 번호는 기능이 지원되는 것을 나타내며, ✗ 또는 비어 있으면 해당 기능이 지원되지 않는 것을 나타냅니다. "?"는 "알 수 없음"을 나타냅니다.')]),t._v(" "),r("li",[t._v("가능하고 관련성이있는 경우 부품 이름이 사용됩니다 (예 : GPS 열의 ✓ GPS 모듈이 있지만 부품을 알 수 없음을 나타냄).")]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.tindie.com/products/avionicsanonymous/uavcan-magnetometer/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Avionics Anonymous UAVCAN Magnetometer"),r("OutboundLink")],1),t._v("는 나침반 (GPS 아님)입니다.")]),t._v(" "),r("li",[t._v("일부 RTK 모듈은 특정 역할 (베이스 또는 로버)에서만 사용할 수 있는 반면, 다른 모듈은 서로 교환하여 사용할 수 있습니다.")]),t._v(" "),r("li",[t._v("일부 단종품은 목록에서 생략될 수 있습니다. 예를 들어, "),r("RouterLink",{attrs:{to:"/ko/gps_compass/rtk_gps_hex_hereplus.html"}},[t._v("CubePilot Here + RTK GPS")]),t._v("는 단종되었으며, 향후 릴리스에서 목록에서 삭제될 수 있습니다. "),r("em",[t._v("원본")]),t._v("은 이미 삭제되었습니다. 단종된 모듈이 여기에 언급되지 않은 경우에는 이전 버전에서 확인하십시오.")],1)])]),t._v(" "),r("h2",{attrs:{id:"하드웨어-설정"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#하드웨어-설정"}},[t._v("#")]),t._v(" 하드웨어 설정")]),t._v(" "),r("p",[t._v("GPS(및 나침반 있는 경우) 연결 방법은 일반적으로 제조업체에서 제공합니다 (일반적인 "),r("RouterLink",{attrs:{to:"/ko/flight_controller/"}},[t._v("Autopilot 하드웨어")]),t._v("의 경우).")],1),t._v(" "),r("p",[r("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk_series.html"}},[t._v("Pixhawk 시리즈")]),t._v(" 컨트롤러에는 GPS 연결용으로 표시된 포트가 있으며, 나침반은 I2C 또는 SPI 포트/버스(장치에 따라 다름)에 연결됩니다.")],1),t._v(" "),r("p",[r("a",{attrs:{href:"https://zubax.com/products/gnss_2",target:"_blank",rel:"noopener noreferrer"}},[t._v("Zubax GNSS 2"),r("OutboundLink")],1),t._v(", "),r("a",{attrs:{href:"https://www.cubepilot.org/#/here/here3",target:"_blank",rel:"noopener noreferrer"}},[t._v("CubePilot Here3 CAN GNSS GPS (M8N)"),r("OutboundLink")],1),t._v(" 및 "),r("a",{attrs:{href:"https://www.tindie.com/products/avionicsanonymous/uavcan-gps-magnetometer/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Avionics Anonymous GNSS/Mag"),r("OutboundLink")],1),t._v("는 "),r("RouterLink",{attrs:{to:"/ko/uavcan/"}},[t._v("UAVCAN을 통해 연결할 수도 있습니다")]),t._v(".")],1),t._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[t._v("GPS")]),t._v(" "),r("p",[t._v("모듈을 연결시 핀배열에 주의하십시오. 모두 소프트웨어와 호환되지만, 핀 순서를 주의하여 연결하여야 합니다.")])]),t._v(" "),r("h2",{attrs:{id:"gnss-설정"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#gnss-설정"}},[t._v("#")]),t._v(" GNSS 설정")]),t._v(" "),r("p",[t._v('"표준" GPS 설정은 다음과 같습니다. 추가 장치 설정은 PX4 또는 제조업체 장치설명서에서 제공될 수 있습니다 (예 : '),r("RouterLink",{attrs:{to:"/ko/gps_compass/rtk_gps_trimble_mb_two.html#configuration"}},[t._v("Trimble MB-Two > 설정")]),t._v(").")],1),t._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[t._v("PX4의 GPS 프로토콜은 기본적으로 u-blox로 설정됩니다. 기본적으로 Trimble, Emlid, MTK와 같은 다른 GPS 유형은 자동으로 감지되지 않습니다. 프로토콜은 [GPS_x_PROTOCOL](../advanced_config/parameter_reference.md#GPS_1_PROTOCOL)에서 설정 가능합니다.")])]),t._v(" "),r("h3",{attrs:{id:"메인-gps-구성"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#메인-gps-구성"}},[t._v("#")]),t._v(" 메인 GPS 구성")]),t._v(" "),r("p",[t._v("Pixhawk의 GPS 설정은 투명하게 처리됩니다. GPS 모듈을 "),r("strong",[t._v("GPS")]),t._v("라고 표시된 포트에 연결하기 만하면 작동합니다.")]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("기본적인 "),r("RouterLink",{attrs:{to:"/ko/peripherals/serial_configuration.html#default_port_mapping"}},[t._v("직렬 포트 설정")]),t._v("은 대부분의 장치에서 작동합니다. "),r("em",[t._v("Trimble MB-Two")]),t._v("를 사용하는 경우에는 명시적으로 속도를 115200 baud로 설정하여야 합니다.")],1)]),t._v(" "),r("p",[r("a",{attrs:{id:"dual_gps"}})]),t._v(" "),r("h3",{attrs:{id:"보조-gps-설정-듀얼-gps-시스템"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#보조-gps-설정-듀얼-gps-시스템"}},[t._v("#")]),t._v(" 보조 GPS 설정(듀얼 GPS 시스템)")]),t._v(" "),r("p",[t._v("보조 GPS를 사용하려면, 포트에 연결후 "),r("RouterLink",{attrs:{to:"/ko/peripherals/serial_configuration.html"}},[t._v("직렬 포트 설정")]),t._v("을 수행하여 "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#GPS_2_CONFIG"}},[t._v("GPS_2_CONFIG")]),t._v("를 선택 포트를 할당합니다.")],1),t._v(" "),r("p",[t._v("아래의 과정은 "),r("em",[t._v("QGroundControl")]),t._v("의 "),r("code",[t._v("TELEM 2")]),t._v(" 포트에서 보조 GPS 설정 방법입니다.")]),t._v(" "),r("ol",[r("li",[r("RouterLink",{attrs:{to:"/ko/advanced_config/parameters.html"}},[t._v("찾기 및 설정")]),t._v(" 매개 변수 "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#GPS_2_CONFIG"}},[t._v("GPS_2_CONFIG")]),t._v("에서 "),r("strong",[t._v("TELEM 2")]),t._v("까지.")],1)]),t._v(" "),r("ul",[r("li",[r("em",[t._v("QGroundControl")]),t._v("에서 "),r("strong",[t._v("기체 설정 > 매개변수")]),t._v(" 섹션으로 이동합니다.")]),t._v(" "),r("li",[r("strong",[t._v("GPS")]),t._v(" 탭 (1)을 선택한 다음 "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#GPS_2_CONFIG"}},[t._v("GPS_2_CONFIG")]),t._v(" 매개변수 (2)를 열고 드롭 다운 목록 (3)에서 "),r("em",[t._v("TELEM 2")]),t._v("를 선택합니다. "),r("img",{attrs:{src:a(1188),alt:"QGC Serial 예시"}})],1)]),t._v(" "),r("ol",{attrs:{start:"2"}},[r("li",[t._v("다른 매개변수를 표시하려면 기체를 재부팅하십시오.")]),t._v(" "),r("li",[r("strong",[t._v("Serial")]),t._v(" 탭을 선택하고 "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SER_TEL2_BAUD"}},[t._v("SER_TEL2_BAUD")]),t._v(" 매개변수 ("),r("code",[t._v("TELEM 2")]),t._v(" 포트 전송 속도)를 열어서 "),r("em",[t._v("Auto")]),t._v("로 설정합니다. "),r("img",{attrs:{src:a(1189),alt:"QGC Serial Baudrate 예시"}})],1)]),t._v(" "),r("p",[t._v("보조 GPS 포트를 설정 후 :")]),t._v(" "),r("ol",[r("li",[t._v("두 GPS 시스템의 데이터를 혼합하도록 ECL/EKF2 추정기를 설정합니다. 자세한 지침은 "),r("RouterLink",{attrs:{to:"/ko/advanced_config/tuning_the_ecl_ekf.html#dual-receivers"}},[t._v("ECL EKF 사용 > 이중 수신기")]),t._v("를 참고하십시오.")],1)]),t._v(" "),r("h3",{attrs:{id:"gps를-yaw-heading-소스로-설정"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#gps를-yaw-heading-소스로-설정"}},[t._v("#")]),t._v(" GPS를 Yaw/Heading 소스로 설정")]),t._v(" "),r("p",[t._v("GPS는 "),r("em",[t._v("yaw 출력이 장치에서 지원되는")]),t._v(" 모듈 (예 : "),r("RouterLink",{attrs:{to:"/ko/gps_compass/rtk_gps_trimble_mb_two.html"}},[t._v("Trimble MB-Two")]),t._v(")을 사용하거나 일부 "),r("RouterLink",{attrs:{to:"/ko/gps_compass/u-blox_f9p_heading.html"}},[t._v("듀얼 u-blox F9P RTK를 사용시 요 퓨전 소스로 사용할 수 있습니다.")]),t._v(".")],1),t._v(" "),r("p",[t._v("요 퓨전에 GPS를 사용시에는 다음 매개변수를 설정하여야 합니다.")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("매개변수")]),t._v(" "),r("th",[t._v("설정")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#GPS_YAW_OFFSET"}},[t._v("GPS_YAW_OFFSET")])],1),t._v(" "),r("td",[t._v("기체 x 축 ("),r("RouterLink",{attrs:{to:"/ko/config/flight_controller_orientation.html#calculating-orientation"}},[t._v("여기")]),t._v("에 표시된 앞/뒤 축)을 기준으로 "),r("em",[t._v("기준선")]),t._v(" (두 GPS 안테나 사이의 선)이 이루는 각도입니다.")],1)]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_AID_MASK"}},[t._v("EKF2_AID_MASK")])],1),t._v(" "),r("td",[t._v('비트 위치 7 "GPS yaw fusion"을 '),r("code",[t._v("1")]),t._v("로 설정합니다 (즉, 매개변수 값에 128을 추가).")])])])]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[t._v("이 기능을 사용하는 경우에는 다른 모든 설정이 정상적으로 완료되어야 합니다 (예 : "),r("RouterLink",{attrs:{to:"/ko/gps_compass/rtk_gps.html#positioning-setup-configuration"}},[t._v("RTK 포지셔닝")]),t._v(").")],1)]),t._v(" "),r("h2",{attrs:{id:"나침반-설정"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#나침반-설정"}},[t._v("#")]),t._v(" 나침반 설정")]),t._v(" "),r("p",[t._v("나침반 보정은 "),r("RouterLink",{attrs:{to:"/ko/config/compass.html"}},[t._v("나침반 설정")]),t._v("을 참고하십시오. 이 프로세스는 간단하며 연결된 모든 자력계를 자동 감지, 보정하고 우선 순위를 지정합니다.")],1),t._v(" "),r("p",[t._v("일반적으로 추가 나침반 설정은 필요하지 않습니다.")]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("모든 외부 나침반에는 기본적으로 동일한 우선 순위가 부여되며, 이는 모든 내부 나침반이 공유하는 우선순위 보다 높습니다.")])]),t._v(" "),r("h3",{attrs:{id:"이중-나침반"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#이중-나침반"}},[t._v("#")]),t._v(" 이중 나침반")]),t._v(" "),r("p",[t._v("위에서 언급한 것처럼, 추가 설정이 필요하지 않습니다.")]),t._v(" "),r("p",[t._v("개발자는 원하는 경우에는 나침반 매개변수를 사용하여 내부 나침반을 비활성화할 수 있습니다. 매개변수 이름은 "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#CAL_MAG0_ID"}},[t._v("CAL"),r("em",[t._v("MAGx")])]),t._v("로 시작합니다 (여기서 "),r("code",[t._v("x=0-3")]),t._v(").")],1),t._v(" "),r("p",[t._v("내부 나침반을 비활성화 하려면 :")]),t._v(" "),r("ul",[r("li",[t._v("내부 나침반을 확인하려면 "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#CAL_MAG0_ROT"}},[t._v("CAL_MAGn_ROT")]),t._v("을 사용하십시오. "),r("code",[t._v("CAL_MAGn_ROT == 1")]),t._v(" 나침반은 내장 나침반입니다.")],1),t._v(" "),r("li",[t._v("그런 다음 "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#CAL_MAG0_PRIO"}},[t._v("CAL_MAGx_PRIO")]),t._v("를 사용하여 나침반을 비활성화하십시오. 나침반의 상대적 우선 순위 변경시에도 사용할 수 있습니다.")],1)]),t._v(" "),r("h2",{attrs:{id:"개발자-정보"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#개발자-정보"}},[t._v("#")]),t._v(" 개발자 정보")]),t._v(" "),r("ul",[r("li",[t._v("GPS/RTK-GPS\n"),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/ko/advanced/rtk_gps.html"}},[t._v("RTK-GPS")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/modules/modules_driver.html#gps"}},[t._v("GPS 드라이버")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/uavcan/"}},[t._v("UAVCAN 예제")])],1)])]),t._v(" "),r("li",[t._v("나침반\n"),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/drivers/magnetometer",target:"_blank",rel:"noopener noreferrer"}},[t._v("드라이버 소스 코드"),r("OutboundLink")],1),t._v(" (나침반)")])])])])])}),[],!1,null,null,null);e.default=_.exports},390:function(t,e,a){t.exports=a.p+"assets/img/gps_compass.34866df8.jpg"}}]);