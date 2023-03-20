(window.webpackJsonp=window.webpackJsonp||[]).push([[410],{1362:function(t,e,a){t.exports=a.p+"assets/img/qgc_serial_config_example.286038e9.png"},1363:function(t,e,a){t.exports=a.p+"assets/img/qgc_serial_baudrate_example.ddc34059.png"},2042:function(t,e,a){"use strict";a.r(e);var n=a(19),r=Object(n.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"gps-compass"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#gps-compass"}},[t._v("#")]),t._v(" GPS & Compass")]),t._v(" "),n("p",[t._v("PX4 supports global navigation satellite systems (GNSS) (including GPS, GLONASS, Galileo, BeiDou, QZSS and SBAS) using receivers that communicate via the u-blox, MTK Ashtech or Emlid protocols, or via UAVCAN.\nIt also supports "),n("RouterLink",{attrs:{to:"/en/gps_compass/rtk_gps.html"}},[t._v("Real Time Kinematic (RTK) ")]),t._v(" and "),n("strong",[t._v("Post-Processing Kinematic (PPK)")]),t._v(" GPS Receivers, which extend GPS systems to centimetre-level precision.")],1),t._v(" "),n("p",[t._v("PX4 can be used with the following compass parts (magnetometers): Bosch BMM 150 MEMS (via I2C bus), HMC5883 / HMC5983 (I2C or SPI), IST8310 (I2C) and LIS3MDL (I2C or SPI).\nUp to 4 internal or external magnetometers can be connected, though only one will actually be used as a heading source.")]),t._v(" "),n("p",[t._v("The system automatically chooses the best available compass based on their "),n("em",[t._v("priority")]),t._v(" (external magnetometers have a higher priority than internal magnetometers).\nIf the primary compass fails in-flight, it will failover to the next one.\nIf it fails before flight, arming will be denied.")]),t._v(" "),n("p",[n("img",{attrs:{src:a(412),alt:"GPS + Compass"}})]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),n("p",[t._v("When using "),n("RouterLink",{attrs:{to:"/en/flight_controller/pixhawk_series.html"}},[t._v("Pixhawk-series")]),t._v(" flight controllers, we recommend using a "),n("em",[t._v("combined GPS + Compass")]),t._v(" mounted as far away from the motor/ESC power supply lines as possible - typically on a pedestal or wing (for fixed-wing).\nThe internal compass "),n("em",[t._v("may")]),t._v(" be useful on larger vehicles (e.g. VTOL) where it is possible to reduce electromagnetic interference by mounting the Pixhawk a long way from power supply lines.\nOn small vehicles an external compass is almost always required.")],1)]),t._v(" "),n("h2",{attrs:{id:"supported-gnss-and-or-compass"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#supported-gnss-and-or-compass"}},[t._v("#")]),t._v(" Supported GNSS and/or Compass")]),t._v(" "),n("p",[t._v("PX4 should work with any unit that communicates via the u-blox, MTK Ashtech or Emlid protocols, or via UAVCAN.\nThis list contains GNSS/Compass units that have been tested by the PX4 dev team, or which are popular within the PX4 community.")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"left"}},[t._v("Device")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("GPS")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("Compass")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[n("RouterLink",{attrs:{to:"/en/gps_compass/rtk_gps.html"}},[t._v("RTK")])],1),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[n("a",{attrs:{href:"#configuring-gps-as-yaw-heading-source"}},[t._v("GPS Yaw Output")])]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[n("RouterLink",{attrs:{to:"/en/gps_compass/u-blox_f9p_heading.html"}},[t._v("Dual F9P GPS Heading")])],1),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("PPK")])])]),t._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("a",{attrs:{href:"https://arkelectron.com/product/ark-gps/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ARK GPS"),n("OutboundLink")],1)]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("M9N")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("ICM42688p")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}}),t._v(" "),n("td",{staticStyle:{"text-align":"center"}}),t._v(" "),n("td",{staticStyle:{"text-align":"center"}}),t._v(" "),n("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("a",{attrs:{href:"https://arkelectron.com/product/ark-rtk-gps/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ARK RTK GPS"),n("OutboundLink")],1)]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("F9P")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("ICM42688p")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}}),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("a",{attrs:{href:"https://www.tindie.com/products/avionicsanonymous/uavcan-gps-magnetometer/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Avionics Anonymous UAVCAN GNSS/Mag"),n("OutboundLink")],1)]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("SAM-M8Q")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("MMC5983MA")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}}),t._v(" "),n("td",{staticStyle:{"text-align":"center"}}),t._v(" "),n("td",{staticStyle:{"text-align":"center"}}),t._v(" "),n("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("a",{attrs:{href:"https://www.tindie.com/products/avionicsanonymous/uavcan-magnetometer/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Avionics Anonymous UAVCAN Magnetometer"),n("OutboundLink")],1)]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("✗")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}}),t._v(" "),n("td",{staticStyle:{"text-align":"center"}}),t._v(" "),n("td",{staticStyle:{"text-align":"center"}}),t._v(" "),n("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("RouterLink",{attrs:{to:"/en/gps_compass/rtk_gps_cuav_c-rtk.html"}},[t._v("CUAV C-RTK GPS")])],1),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("M8P/M8N")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}}),t._v(" "),n("td",{staticStyle:{"text-align":"center"}}),t._v(" "),n("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("RouterLink",{attrs:{to:"/en/gps_compass/rtk_gps_cuav_c-rtk-9ps.html"}},[t._v("CUAV C-RTK 9Ps GPS")])],1),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("F9P")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("RM3100")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}}),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("RouterLink",{attrs:{to:"/en/gps_compass/rtk_gps_cuav_c-rtk.html"}},[t._v("CUAV C-RTK2 PPK/RTK GNSS")])],1),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("F9P")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("RM3100")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}}),t._v(" "),n("td",{staticStyle:{"text-align":"center"}}),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("✓")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("RouterLink",{attrs:{to:"/en/gps_compass/gps_hex_here2.html"}},[t._v("CubePilot Here2 GNSS GPS (M8N)")])],1),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("M8N")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("ICM20948")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}}),t._v(" "),n("td",{staticStyle:{"text-align":"center"}}),t._v(" "),n("td",{staticStyle:{"text-align":"center"}}),t._v(" "),n("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("RouterLink",{attrs:{to:"/en/gps_compass/rtk_gps_hex_hereplus.html"}},[t._v("CubePilot Here+ RTK GPS")])],1),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("M8P")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("HMC5983")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}}),t._v(" "),n("td",{staticStyle:{"text-align":"center"}}),t._v(" "),n("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("a",{attrs:{href:"https://www.cubepilot.org/#/here/here3",target:"_blank",rel:"noopener noreferrer"}},[t._v("CubePilot Here3 CAN GNSS GPS (M8N)"),n("OutboundLink")],1)]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("M8P")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("ICM20948")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}}),t._v(" "),n("td",{staticStyle:{"text-align":"center"}}),t._v(" "),n("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("a",{attrs:{href:"https://store-drotek.com/920-DP0804.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Drotek DP0804"),n("OutboundLink")],1),t._v(" (and other "),n("a",{attrs:{href:"https://store-drotek.com/index.php?controller=search&s=ublox+compass",target:"_blank",rel:"noopener noreferrer"}},[t._v("Drotek u-blox GPS/Compasses"),n("OutboundLink")],1),t._v(")")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("M9N")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("LIS3MDL")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}}),t._v(" "),n("td",{staticStyle:{"text-align":"center"}}),t._v(" "),n("td",{staticStyle:{"text-align":"center"}}),t._v(" "),n("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("a",{attrs:{href:"https://store-drotek.com/911-sirius-rtk-gnss-rover-f9p.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Drotek SIRIUS RTK GNSS ROVER (F9P)"),n("OutboundLink")],1)]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("F9P")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("RM3100")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}}),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("RouterLink",{attrs:{to:"/en/gps_compass/rtk_gps_drotek_xl.html"}},[t._v("Drotek XL RTK GPS")])],1),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("M8U")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("LIS3MDL")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}}),t._v(" "),n("td",{staticStyle:{"text-align":"center"}}),t._v(" "),n("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("a",{attrs:{href:"https://emlid.com/reach/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Emlid Reach M+"),n("OutboundLink")],1),t._v('  - PX4 only supports "ordinary" GPS with this module. RTK support is expected in the near future.')]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("✗")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}}),t._v(" "),n("td",{staticStyle:{"text-align":"center"}}),t._v(" "),n("td",{staticStyle:{"text-align":"center"}}),t._v(" "),n("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("RouterLink",{attrs:{to:"/en/gps_compass/rtk_gps_fem_mini2.html"}},[t._v("Femtones MINI2 Receiver")])],1),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("FB672, FB6A0")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}}),t._v(" "),n("td",{staticStyle:{"text-align":"center"}}),t._v(" "),n("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("RouterLink",{attrs:{to:"/en/gps_compass/rtk_gps_freefly.html"}},[t._v("Freefly RTK GPS")])],1),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("F9P")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("IST8310")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}}),t._v(" "),n("td",{staticStyle:{"text-align":"center"}}),t._v(" "),n("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("RouterLink",{attrs:{to:"/en/dronecan/holybro_m8n_gps.html"}},[t._v("Holybro DroneCAN M8N GPS")])],1),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("M8N")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("BMM150")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}}),t._v(" "),n("td",{staticStyle:{"text-align":"center"}}),t._v(" "),n("td",{staticStyle:{"text-align":"center"}}),t._v(" "),n("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("a",{attrs:{href:"https://shop.holybro.com/micro-m8n-gps_p1009.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Holybro Micro M8N GPS"),n("OutboundLink")],1)]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("M8N")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("IST8310")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}}),t._v(" "),n("td",{staticStyle:{"text-align":"center"}}),t._v(" "),n("td",{staticStyle:{"text-align":"center"}}),t._v(" "),n("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("a",{attrs:{href:"https://shop.holybro.com/nano-ublox-m8-5883-gps-module_p1236.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Holybro Nano Ublox M8 5883 GPS"),n("OutboundLink")],1)]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("UBX-M8030")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("QMC5883")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}}),t._v(" "),n("td",{staticStyle:{"text-align":"center"}}),t._v(" "),n("td",{staticStyle:{"text-align":"center"}}),t._v(" "),n("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("RouterLink",{attrs:{to:"/en/gps_compass/gps_holybro_m8n_m9n.html"}},[t._v("Holybro M8N GPS")])],1),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("M8N")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("IST8310")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}}),t._v(" "),n("td",{staticStyle:{"text-align":"center"}}),t._v(" "),n("td",{staticStyle:{"text-align":"center"}}),t._v(" "),n("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("RouterLink",{attrs:{to:"/en/gps_compass/gps_holybro_m8n_m9n.html"}},[t._v("Holybro M9N GPS")])],1),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("M9N")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("IST8310")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}}),t._v(" "),n("td",{staticStyle:{"text-align":"center"}}),t._v(" "),n("td",{staticStyle:{"text-align":"center"}}),t._v(" "),n("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("RouterLink",{attrs:{to:"/en/gps_compass/rtk_gps_holybro_h-rtk-f9p.html"}},[t._v("Holybro H-RTK F9P Helical or Base")])],1),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("F9P")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("IST8310")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}}),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("RouterLink",{attrs:{to:"/en/gps_compass/rtk_gps_holybro_h-rtk-f9p.html"}},[t._v("Holybro H-RTK F9P Rover Lite")])],1),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("F9P")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("IST8310")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}}),t._v(" "),n("td",{staticStyle:{"text-align":"center"}}),t._v(" "),n("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("RouterLink",{attrs:{to:"/en/gps_compass/rtk_gps_holybro_h-rtk-m8p.html"}},[t._v("Holybro H-RTK M8P GNSS")])],1),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("M8P")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("IST8310")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}}),t._v(" "),n("td",{staticStyle:{"text-align":"center"}}),t._v(" "),n("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("a",{attrs:{href:"https://hobbyking.com/en_us/ublox-neo-m8n-gps-with-compass.html?gclid=Cj0KCQjwqM3VBRCwARIsAKcekb3ojv1ZhLz1-GuvCsUuGT8ZZuw8meMIV_I6pgUCj6DJRzHBY9OApekaAgI5EALw_wcB&gclsrc=aw.ds&___store=en_us",target:"_blank",rel:"noopener noreferrer"}},[t._v("Hobbyking u-blox Neo-M8N GPS with Compass"),n("OutboundLink")],1)]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("M8N")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}}),t._v(" "),n("td",{staticStyle:{"text-align":"center"}}),t._v(" "),n("td",{staticStyle:{"text-align":"center"}}),t._v(" "),n("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("RouterLink",{attrs:{to:"/en/gps_compass/gps_locosys_hawk_a1.html"}},[t._v("LOCOSYS Hawk A1 GNSS receiver")])],1),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("MC-1612-V2b")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("optional")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("✗")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}}),t._v(" "),n("td",{staticStyle:{"text-align":"center"}}),t._v(" "),n("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("RouterLink",{attrs:{to:"/en/gps_compass/gps_locosys_hawk_r1.html"}},[t._v("LOCOSYS Hawk R1")])],1),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("MC-1612-V2b")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}}),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("✗")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}}),t._v(" "),n("td",{staticStyle:{"text-align":"center"}}),t._v(" "),n("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("RouterLink",{attrs:{to:"/en/gps_compass/gps_locosys_hawk_r2.html"}},[t._v("LOCOSYS Hawk R2")])],1),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("MC-1612-V2b")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("IST8310")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("✗")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}}),t._v(" "),n("td",{staticStyle:{"text-align":"center"}}),t._v(" "),n("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("a",{attrs:{href:"https://store.mrobotics.io/product-p/m10034-8308.htm",target:"_blank",rel:"noopener noreferrer"}},[t._v("mRo GPS u-blox Neo-M8N Dual Compass"),n("OutboundLink")],1)]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("M8N")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("LIS3MDL, IST8308")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}}),t._v(" "),n("td",{staticStyle:{"text-align":"center"}}),t._v(" "),n("td",{staticStyle:{"text-align":"center"}}),t._v(" "),n("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("a",{attrs:{href:"https://store.mrobotics.io/product-p/m10020d.htm",target:"_blank",rel:"noopener noreferrer"}},[t._v("mRo u-blox ZED-F9 RTK L1/L2 GPS"),n("OutboundLink")],1)]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("F9P")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("✗")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}}),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("RouterLink",{attrs:{to:"/en/gps_compass/gps_smartap.html"}},[t._v("Sky-Drones SmartAP GPS")])],1),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("M8N")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("HMC5983, IST8310, LIS3MDL")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}}),t._v(" "),n("td",{staticStyle:{"text-align":"center"}}),t._v(" "),n("td",{staticStyle:{"text-align":"center"}}),t._v(" "),n("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("a",{attrs:{href:"https://www.sparkfun.com/products/15136",target:"_blank",rel:"noopener noreferrer"}},[t._v("SparkFun GPS-RTK2 Board - ZED-F9P"),n("OutboundLink")],1)]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("F9P")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("✗")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}}),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("RouterLink",{attrs:{to:"/en/gps_compass/rtk_gps_trimble_mb_two.html"}},[t._v("Trimble MB-Two")])],1),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("F9P")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("✗")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}}),t._v(" "),n("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("a",{attrs:{href:"https://zubax.com/products/gnss_2",target:"_blank",rel:"noopener noreferrer"}},[t._v("Zubax GNSS 2"),n("OutboundLink")],1)]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("MAX-M8Q")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("LIS3MDL")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}}),t._v(" "),n("td",{staticStyle:{"text-align":"center"}}),t._v(" "),n("td",{staticStyle:{"text-align":"center"}}),t._v(" "),n("td",{staticStyle:{"text-align":"center"}})])])]),t._v(" "),n("div",{staticClass:"custom-block note"},[n("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),n("ul",[n("li",[t._v('✓ or a specific part number indicate that a features is supported, while ✗ or empty show that the feature is not supported.\n"?" indicates "unknown".')]),t._v(" "),n("li",[t._v("Where possible and relevant the part name is used (i.e. ✓ in the GPS column indicates that a GPS module is present but the part is not known).")]),t._v(" "),n("li",[n("a",{attrs:{href:"https://www.tindie.com/products/avionicsanonymous/uavcan-magnetometer/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Avionics Anonymous UAVCAN Magnetometer"),n("OutboundLink")],1),t._v(" is a compass (not a GPS).")]),t._v(" "),n("li",[t._v("Some RTK modules can only be used in a particular role (base or rover), while others can be used interchangeably.")]),t._v(" "),n("li",[t._v("The list may omit some discontinued hardware that is still supported.\nFor example "),n("RouterLink",{attrs:{to:"/en/gps_compass/rtk_gps_hex_hereplus.html"}},[t._v("CubePilot Here+ RTK GPS")]),t._v(" is discontinued and may be removed from the list in a future release.\nThe original "),n("em",[t._v("Here")]),t._v(" has already been removed.\nCheck earlier versions if a discontinued module is not mentioned here.")],1)])]),t._v(" "),n("h2",{attrs:{id:"hardware-setup"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#hardware-setup"}},[t._v("#")]),t._v(" Hardware Setup")]),t._v(" "),n("p",[t._v("Instructions for connecting the GPS (and compass, if present) are usually provided by the manufacturer (at least for more common "),n("RouterLink",{attrs:{to:"/en/flight_controller/"}},[t._v("Autopilot Hardware")]),t._v(").")],1),t._v(" "),n("p",[n("RouterLink",{attrs:{to:"/en/flight_controller/pixhawk_series.html"}},[t._v("Pixhawk Series")]),t._v(" controllers typically have a clearly labeled port for connecting the GPS, and the compass is connected to either the I2C or SPI port/bus (depending on the device).")],1),t._v(" "),n("p",[t._v("The "),n("RouterLink",{attrs:{to:"/en/dronecan/ark_gps.html"}},[t._v("ARK GPS")]),t._v(", "),n("RouterLink",{attrs:{to:"/en/dronecan/ark_rtk_gps.html"}},[t._v("ARK RTK GPS")]),t._v(", "),n("a",{attrs:{href:"https://zubax.com/products/gnss_2",target:"_blank",rel:"noopener noreferrer"}},[t._v("Zubax GNSS 2"),n("OutboundLink")],1),t._v(", "),n("RouterLink",{attrs:{to:"/en/gps_compass/rtk_gps_cuav_c-rtk.html"}},[t._v("CUAV C-RTK2")]),t._v(", "),n("a",{attrs:{href:"https://www.cubepilot.org/#/here/here3",target:"_blank",rel:"noopener noreferrer"}},[t._v("CubePilot Here3 CAN GNSS GPS (M8N)"),n("OutboundLink")],1),t._v(", and "),n("a",{attrs:{href:"https://www.tindie.com/products/avionicsanonymous/uavcan-gps-magnetometer/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Avionics Anonymous GNSS/Mag"),n("OutboundLink")],1),t._v(" can also be connected via "),n("RouterLink",{attrs:{to:"/en/dronecan/"}},[t._v("DroneCAN")]),t._v(".")],1),t._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),n("p",[t._v("Pay attention to pinout when connecting the GPS module.\nWhile these are all software-compatible, there are several different pin orderings.")])]),t._v(" "),n("h2",{attrs:{id:"gnss-configuration"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#gnss-configuration"}},[t._v("#")]),t._v(" GNSS Configuration")]),t._v(" "),n("p",[t._v('The "standard" GPS configuration is provided below.\nAdditional device-specific configuration may be provided in PX4 or manufacturer device documentation (e.g. '),n("RouterLink",{attrs:{to:"/en/gps_compass/rtk_gps_trimble_mb_two.html#configuration"}},[t._v("Trimble MB-Two > Configuration")]),t._v(").")],1),t._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),n("p",[t._v("The GPS protocol expected by PX4 defaults to u-blox (by default other GPS types like Trimble, Emlid, MTK, will not be detected)\nThe protocol can be configured with "),n("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#GPS_1_PROTOCOL"}},[t._v("GPS_x_PROTOCOL")]),t._v(".")],1)]),t._v(" "),n("h3",{attrs:{id:"configuring-the-primary-gps"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#configuring-the-primary-gps"}},[t._v("#")]),t._v(" Configuring the Primary GPS")]),t._v(" "),n("p",[t._v("GPS configuration on Pixhawk is handled transparently for the user - simply connect the GPS module to the port labeled "),n("strong",[t._v("GPS")]),t._v(" and everything should work.")]),t._v(" "),n("div",{staticClass:"custom-block note"},[n("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),n("p",[t._v("The default "),n("RouterLink",{attrs:{to:"/en/peripherals/serial_configuration.html#default_port_mapping"}},[t._v("Serial Port Configuration")]),t._v(" works for most devices.\nIf you are using the "),n("em",[t._v("Trimble MB-Two")]),t._v(" you will need to modify the configuration to explicitly set the rate to 115200 baud.")],1)]),t._v(" "),n("p",[n("a",{attrs:{id:"dual_gps"}})]),t._v(" "),n("h3",{attrs:{id:"configuring-a-secondary-gps-dual-gps-system"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#configuring-a-secondary-gps-dual-gps-system"}},[t._v("#")]),t._v(" Configuring a Secondary GPS (Dual GPS System)")]),t._v(" "),n("p",[t._v("To use a secondary GPS, attach it to any free port, and then perform a "),n("RouterLink",{attrs:{to:"/en/peripherals/serial_configuration.html"}},[t._v("Serial Port Configuration")]),t._v(" to assign "),n("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#GPS_2_CONFIG"}},[t._v("GPS_2_CONFIG")]),t._v(" to the selected port.")],1),t._v(" "),n("p",[t._v("The following steps show how to configure a secondary GPS on the "),n("code",[t._v("TELEM 2")]),t._v(" port in "),n("em",[t._v("QGroundControl")]),t._v(":")]),t._v(" "),n("ol",[n("li",[n("RouterLink",{attrs:{to:"/en/advanced_config/parameters.html"}},[t._v("Find and set")]),t._v(" the parameter "),n("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#GPS_2_CONFIG"}},[t._v("GPS_2_CONFIG")]),t._v(" to "),n("strong",[t._v("TELEM 2")]),t._v(".\n"),n("ul",[n("li",[t._v("Open "),n("em",[t._v("QGroundControl")]),t._v(" and navigate to the "),n("strong",[t._v("Vehicle Setup > Parameters")]),t._v(" section.")]),t._v(" "),n("li",[t._v("Select the "),n("strong",[t._v("GPS")]),t._v(" tab (1), then open the "),n("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#GPS_2_CONFIG"}},[t._v("GPS_2_CONFIG")]),t._v(" parameter (2) and select "),n("em",[t._v("TELEM 2")]),t._v(" from the dropdown list (3).\n"),n("img",{attrs:{src:a(1362),alt:"QGC Serial Example"}})],1)])],1),t._v(" "),n("li",[t._v("Reboot the vehicle in order to make the other parameters visible.")]),t._v(" "),n("li",[t._v("Select the "),n("strong",[t._v("Serial")]),t._v(" tab, and open the "),n("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#SER_TEL2_BAUD"}},[t._v("SER_TEL2_BAUD")]),t._v(" parameter ("),n("code",[t._v("TELEM 2")]),t._v(" port baud rate): set it to "),n("em",[t._v("Auto")]),t._v(".\n"),n("img",{attrs:{src:a(1363),alt:"QGC Serial Baudrate Example"}})],1)]),t._v(" "),n("p",[t._v("After setting up the second GPS port:")]),t._v(" "),n("ol",[n("li",[t._v("Configure the ECL/EKF2 estimator to blend data from both GPS systems.\nFor detailed instructions see: "),n("RouterLink",{attrs:{to:"/en/advanced_config/tuning_the_ecl_ekf.html#dual-receivers"}},[t._v("Using the ECL EKF > Dual Receivers")]),t._v(".")],1)]),t._v(" "),n("h3",{attrs:{id:"configuring-gps-as-yaw-heading-source"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#configuring-gps-as-yaw-heading-source"}},[t._v("#")]),t._v(" Configuring GPS as Yaw/Heading Source")]),t._v(" "),n("p",[t._v("GPS can be used as a source for yaw fusion when using modules where "),n("em",[t._v("yaw output is supported by the device")]),t._v(" (e.g. "),n("RouterLink",{attrs:{to:"/en/gps_compass/rtk_gps_trimble_mb_two.html"}},[t._v("Trimble MB-Two")]),t._v(") or when using some "),n("RouterLink",{attrs:{to:"/en/gps_compass/u-blox_f9p_heading.html"}},[t._v("RTK GPS Setups with Dual u-blox F9P")]),t._v(".")],1),t._v(" "),n("p",[t._v("When using GPS for yaw fusion you will need to configure the following parameters:")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("Parameter")]),t._v(" "),n("th",[t._v("Setting")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[n("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#GPS_YAW_OFFSET"}},[t._v("GPS_YAW_OFFSET")])],1),t._v(" "),n("td",[t._v("The angle made by the "),n("em",[t._v("baseline")]),t._v(" (the line between the two GPS antennas) relative to the vehicle x-axis (front/back axis, as shown "),n("RouterLink",{attrs:{to:"/en/config/flight_controller_orientation.html#calculating-orientation"}},[t._v("here")]),t._v(").")],1)]),t._v(" "),n("tr",[n("td",[n("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#EKF2_GPS_CTRL"}},[t._v("EKF2_GPS_CTRL")])],1),t._v(" "),n("td",[t._v('Set bit position 3 "Dual antenna heading" to '),n("code",[t._v("1")]),t._v(" (i.e. add 8 to the parameter value).")])])])]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),n("p",[t._v("If using this feature, all other configuration should be setup up as normal (e.g. "),n("RouterLink",{attrs:{to:"/en/gps_compass/rtk_gps.html#positioning-setup-configuration"}},[t._v("RTK Positioning")]),t._v(").")],1)]),t._v(" "),n("h2",{attrs:{id:"compass-configuration"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#compass-configuration"}},[t._v("#")]),t._v(" Compass Configuration")]),t._v(" "),n("p",[t._v("Compass calibration is covered in: "),n("RouterLink",{attrs:{to:"/en/config/compass.html"}},[t._v("Compass Configuration")]),t._v(".\nThe process is straightforward and will autodetect, "),n("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#CAL_MAG_ROT_AUTO"}},[t._v("set default rotations")]),t._v(", calibrate, and prioritise, all connected magnetometers.")],1),t._v(" "),n("p",[t._v("Further compass configuration should generally not be required.")]),t._v(" "),n("div",{staticClass:"custom-block note"},[n("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),n("p",[t._v("All external compasses are given the same priority by default, which is higher than the priority shared by all internal compasses.")])]),t._v(" "),n("h3",{attrs:{id:"disable-a-compass"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#disable-a-compass"}},[t._v("#")]),t._v(" Disable a Compass")]),t._v(" "),n("p",[t._v("As stated above, generally no further configuration should be required.")]),t._v(" "),n("p",[t._v("That said, developers can disable internal compasses if desired using the compass parameters.\nThese are prefixed with "),n("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#CAL_MAG0_ID"}},[t._v("CAL_MAGx_")]),t._v(" (where "),n("code",[t._v("x=0-3")]),t._v(").")],1),t._v(" "),n("p",[t._v("To disable an internal compass:")]),t._v(" "),n("ul",[n("li",[t._v("Use "),n("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#CAL_MAG0_ROT"}},[t._v("CAL_MAGn_ROT")]),t._v(" to determine which compasses are internal.\nA compass is internal if "),n("code",[t._v("CAL_MAGn_ROT==1")]),t._v(".")],1),t._v(" "),n("li",[t._v("Then use "),n("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#CAL_MAG0_PRIO"}},[t._v("CAL_MAGx_PRIO")]),t._v(" to disable the compass.\nThis can also be used to change the relative priority of a compass.")],1)]),t._v(" "),n("h2",{attrs:{id:"developer-information"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#developer-information"}},[t._v("#")]),t._v(" Developer Information")]),t._v(" "),n("ul",[n("li",[t._v("GPS/RTK-GPS\n"),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/en/advanced/rtk_gps.html"}},[t._v("RTK-GPS")])],1),t._v(" "),n("li",[n("RouterLink",{attrs:{to:"/en/modules/modules_driver.html#gps"}},[t._v("GPS driver")])],1),t._v(" "),n("li",[n("RouterLink",{attrs:{to:"/en/dronecan/"}},[t._v("DroneCAN Example")])],1)])]),t._v(" "),n("li",[t._v("Compass\n"),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/magnetometer",target:"_blank",rel:"noopener noreferrer"}},[t._v("Driver source code"),n("OutboundLink")],1),t._v(" (Compasses)")])])])])])}),[],!1,null,null,null);e.default=r.exports},412:function(t,e,a){t.exports=a.p+"assets/img/gps_compass.34866df8.jpg"}}]);