(window.webpackJsonp=window.webpackJsonp||[]).push([[364],{1087:function(e,t,r){e.exports=r.p+"assets/img/qgc_serial_config_example.286038e9.png"},1088:function(e,t,r){e.exports=r.p+"assets/img/qgc_serial_baudrate_example.ddc34059.png"},2492:function(e,t,r){"use strict";r.r(t);var o=r(18),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"gps-罗盘"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#gps-罗盘"}},[e._v("#")]),e._v(" GPS&罗盘")]),e._v(" "),o("p",[e._v("PX4 supports global navigation satellite systems (GNSS) (including GPS, GLONASS, Galileo, BeiDou, QZSS and SBAS) using receivers that communicate via the UBlox, MTK Ashtech or Emlid protocols, or via UAVCAN. It also supports "),o("RouterLink",{attrs:{to:"/zh/gps_compass/rtk_gps.html"}},[e._v("Real Time Kinematic (RTK) GPS Receivers")]),e._v(", which extend GPS systems to centimetre-level precision.")],1),e._v(" "),o("p",[e._v("PX4可用于以下指南针部件（磁强计）：博世BMM 150 MEMS（通过I2C总线）、HMC5883/HMC5983（I2C或SPI）、IST8310（I2C）和 LIS3MDL（I2C或SPI）。")]),e._v(" "),o("blockquote",[o("p",[o("strong",[e._v("Note")]),e._v(" The set of supported compasses can be inferred from the "),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/drivers/magnetometer",target:"_blank",rel:"noopener noreferrer"}},[e._v("magnetometer drivers"),o("OutboundLink")],1),e._v(" in the source code.")])]),e._v(" "),o("p",[e._v("最多可以连接4个内部或外部磁强计，但实际上只有一个磁强计可用作标题源。 系统根据其内部优先级自动选择可用的最佳罗盘（外部磁强计具有更高的优先级）。 如果主指南针在飞行中失败它将跳转到下一个指南针。 如果它在飞行前失败，将无法起飞。")]),e._v(" "),o("p",[o("img",{attrs:{src:r(366),alt:"GPS + Compass"}})]),e._v(" "),o("blockquote",[o("p",[o("strong",[e._v("Tip")]),e._v(" When using "),o("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk_series.html"}},[e._v("Pixhawk-series")]),e._v(" flight controllers, we recommend using a "),o("em",[e._v("combined GPS + Compass")]),e._v(" mounted as far away from the motor/ESC power supply lines as possible - typically on a pedestal or wing (for fixed-wing). The internal compass "),o("em",[e._v("may")]),e._v(" be useful on larger vehicles (e.g. VTOL) where it is possible to reduce electromagnetic interference by mounting the Pixhawk a long way from power supply lines. On small vehicles an external compass is almost always required.")],1)]),e._v(" "),o("h2",{attrs:{id:"combined-gps-compass-options"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#combined-gps-compass-options"}},[e._v("#")]),e._v(" Combined GPS/Compass Options")]),e._v(" "),o("p",[e._v("一些流行的GSP/指南针选项包括：")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://hobbyking.com/en_us/ublox-neo-m8n-gps-with-compass.html?gclid=Cj0KCQjwqM3VBRCwARIsAKcekb3ojv1ZhLz1-GuvCsUuGT8ZZuw8meMIV_I6pgUCj6DJRzHBY9OApekaAgI5EALw_wcB&gclsrc=aw.ds&___store=en_us",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ublox Neo-M8N GPS with Compass"),o("OutboundLink")],1),e._v(" (Hobbyking)")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://store.mrobotics.io/ProductDetails.asp?ProductCode=mro-gps003-mr",target:"_blank",rel:"noopener noreferrer"}},[e._v("mRo GPS u-Blox Neo-M8N Dual Compass LIS3MDL+ IST8310"),o("OutboundLink")],1),e._v(" (mRo store)")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://drotek.com/shop/en/184-u-blox",target:"_blank",rel:"noopener noreferrer"}},[e._v("Drotek uBlox GPS/Compasses"),o("OutboundLink")],1),e._v(" (drotek)")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://shop.holybro.com/pix32-gps-module_p1099.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Holybro Pix32 M8N GPS Module"),o("OutboundLink")],1),e._v(" ("),o("a",{attrs:{href:"https://shop.holybro.com/pix32-gps-module_p1099.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Holybro Shop"),o("OutboundLink")],1),e._v(") ("),o("a",{attrs:{href:"https://www.getfpv.com/holybro-pix32-neo-m8n-gps.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("getfpv"),o("OutboundLink")],1),e._v(")")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://shop.holybro.com/micro-m8n-gps_p1009.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Holybro Micro M8N GPS Module"),o("OutboundLink")],1),e._v(" ("),o("a",{attrs:{href:"https://shop.holybro.com/micro-m8n-gps_p1009.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Holybro Shop"),o("OutboundLink")],1),e._v(") ("),o("a",{attrs:{href:"https://www.getfpv.com/holybro-micro-m8n-gps-module.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("getfpv"),o("OutboundLink")],1),e._v(")")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://shop.holybro.com/pixhawk-4-gps-module_p1094.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Holybro Pixhawk 4 GPS Module (10 pin)"),o("OutboundLink")],1),e._v(" ("),o("a",{attrs:{href:"https://shop.holybro.com/pixhawk-4-gps-module_p1094.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Holybro Shop"),o("OutboundLink")],1),e._v(")) ("),o("a",{attrs:{href:"https://www.getfpv.com/holybro-pixhawk-4-neo-m8n-gps.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("getfpv"),o("OutboundLink")],1),e._v(")")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://shop.holybro.com/pixhawk4-2nd-gps-module_p1145.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Holybro Pixhawk 4 2nd GPS Module (6 pin)"),o("OutboundLink")],1),e._v(" (Holybro Shop)")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://www.getfpv.com/here-gnss-gps-m8n.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Here GNSS GPS (M8N)"),o("OutboundLink")],1),e._v(" (getfpv)")]),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/zh/gps_compass/gps_hex_here2.html"}},[e._v("Hex Here2 GNSS GPS (M8N)")])],1),e._v(" "),o("li",[o("a",{attrs:{href:"https://zubax.com/products/gnss_2",target:"_blank",rel:"noopener noreferrer"}},[e._v("Zubax GNSS 2"),o("OutboundLink")],1),e._v(" (zubax.com)")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://www.tindie.com/products/avionicsanonymous/uavcan-gps-magnetometer/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Avionics Anonymous UAVCAN GNSS/Mag"),o("OutboundLink")],1),e._v(" (Tindie)")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://www.getfpv.com/3dr-ublox-gps-with-compass-kit.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("3DR uBlox GPS with Compass kit"),o("OutboundLink")],1),e._v(" (getfpv) - "),o("em",[e._v("Discontinued")])])]),e._v(" "),o("p",[e._v("GPS与罗盘的连接说明通常由厂家（至少支持更通用的 "),o("RouterLink",{attrs:{to:"/zh/flight_controller/"}},[e._v("自驾仪")]),e._v("）提供")],1),e._v(" "),o("blockquote",[o("p",[o("strong",[e._v("Note")]),e._v(" "),o("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk_series.html"}},[e._v("Pixhawk Series")]),e._v(" controllers usually have a clearly labeled port for connecting the GPS, and the compass is connected to either the I2C or SPI port/bus (depending on the device). The "),o("a",{attrs:{href:"https://zubax.com/products/gnss_2",target:"_blank",rel:"noopener noreferrer"}},[e._v("Zubax GNSS 2"),o("OutboundLink")],1),e._v(" and "),o("a",{attrs:{href:"https://www.tindie.com/products/avionicsanonymous/uavcan-gps-magnetometer/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Avionics Anonymous GNSS/Mag"),o("OutboundLink")],1),e._v(" can also be connected via "),o("RouterLink",{attrs:{to:"/zh/uavcan/"}},[e._v("UAVCAN")]),e._v(".")],1)]),e._v(" "),o("p",[o("span")]),e._v(" "),o("blockquote",[o("p",[o("strong",[e._v("Tip")]),e._v(" Pay attention to pinout when connecting the GPS module. While these are all software-compatible, there are several different pin orderings.")])]),e._v(" "),o("h2",{attrs:{id:"gps-only-options"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#gps-only-options"}},[e._v("#")]),e._v(" GPS (Only) Options")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://emlid.com/reach/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Emlid Reach M+"),o("OutboundLink")],1),e._v(" (emlid.com) > "),o("strong",[e._v("Note")]),e._v(' At time of writing PX4 does not support RTK GPS with this module (only "ordinary" GPS). Support is expected in the near future.')])]),e._v(" "),o("h2",{attrs:{id:"compass-only-options"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#compass-only-options"}},[e._v("#")]),e._v(" Compass (Only) Options")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://www.tindie.com/products/avionicsanonymous/uavcan-magnetometer/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Avionics Anonymous UAVCAN Magnetometer"),o("OutboundLink")],1),e._v(" (Tindie)")])]),e._v(" "),o("h2",{attrs:{id:"rtk-gps-devices"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#rtk-gps-devices"}},[e._v("#")]),e._v(" RTK-GPS Devices")]),e._v(" "),o("p",[e._v("有关支持的设备和setup/配置的信息，请参阅边栏下的 "),o("RouterLink",{attrs:{to:"/zh/gps_compass/rtk_gps.html"}},[e._v("RTK GPS")]),e._v("。")],1),e._v(" "),o("h2",{attrs:{id:"configuration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),o("h3",{attrs:{id:"primary-gps"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#primary-gps"}},[e._v("#")]),e._v(" Primary GPS")]),e._v(" "),o("p",[e._v("GPS configuration on Pixhawk is handled transparently for the user - simply connect the GPS module to the port labeled "),o("strong",[e._v("GPS")]),e._v(" and everything should work.")]),e._v(" "),o("blockquote",[o("p",[o("strong",[e._v("Note")]),e._v(" The default "),o("RouterLink",{attrs:{to:"/zh/peripherals/serial_configuration.html#default_port_mapping"}},[e._v("Serial Port Configuration")]),e._v(" works for most devices. If you are using the "),o("em",[e._v("Trimble MB-Two")]),e._v(" you will need to modify the configuration to explicitly set the rate to 115200 baud.")],1)]),e._v(" "),o("p",[o("span",{attrs:{id:"dual_gps"}})]),e._v(" "),o("h3",{attrs:{id:"secondary-gps-dual-gps-system"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#secondary-gps-dual-gps-system"}},[e._v("#")]),e._v(" Secondary GPS (Dual GPS System)")]),e._v(" "),o("p",[e._v("To use a secondary GPS, attach it to any free port, and then perform a "),o("RouterLink",{attrs:{to:"/zh/peripherals/serial_configuration.html"}},[e._v("Serial Port Configuration")]),e._v(" to assign "),o("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#GPS_2_CONFIG"}},[e._v("GPS_2_CONFIG")]),e._v(" to the selected port.")],1),e._v(" "),o("p",[e._v("The following steps show how to configure a secondary GPS on the "),o("code",[e._v("TELEM 2")]),e._v(" port in "),o("em",[e._v("QGroundControl")]),e._v(":")]),e._v(" "),o("ol",[o("li",[o("RouterLink",{attrs:{to:"/zh/advanced_config/parameters.html"}},[e._v("Find and set")]),e._v(" the parameter "),o("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#GPS_2_CONFIG"}},[e._v("GPS_2_CONFIG")]),e._v(" to "),o("strong",[e._v("TELEM 2")]),e._v(".")],1)]),e._v(" "),o("ul",[o("li",[e._v("Open "),o("em",[e._v("QGroundControl")]),e._v(" and navigate to the "),o("strong",[e._v("Vehicle Setup > Parameters")]),e._v(" section.")]),e._v(" "),o("li",[e._v("Select the "),o("strong",[e._v("GPS")]),e._v(" tab (1), then open the "),o("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#GPS_2_CONFIG"}},[e._v("GPS_2_CONFIG")]),e._v(" parameter (2) and select "),o("em",[e._v("TELEM 2")]),e._v(" from the dropdown list (3). "),o("img",{attrs:{src:r(1087),alt:"QGC Serial Example"}})],1)]),e._v(" "),o("ol",{attrs:{start:"2"}},[o("li",[e._v("Reboot the vehicle in order to make the other parameters visible.")]),e._v(" "),o("li",[e._v("Select the "),o("strong",[e._v("Serial")]),e._v(" tab, and open the "),o("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SER_TEL2_BAUD"}},[e._v("SER_TEL2_BAUD")]),e._v(" parameter ("),o("code",[e._v("TELEM 2")]),e._v(" port baud rate): set it to "),o("em",[e._v("Auto")]),e._v(". "),o("img",{attrs:{src:r(1088),alt:"QGC Serial Baudrate Example"}})],1)]),e._v(" "),o("p",[e._v("After setting up the second GPS port:")]),e._v(" "),o("ol",[o("li",[e._v("Configure the ECL/EKF2 estimator to blend data from both GPS systems. For detailed instructions see: "),o("RouterLink",{attrs:{to:"/zh/advanced_config/tuning_the_ecl_ekf.html#dual-receivers"}},[e._v("Using the ECL EKF > Dual Receivers")]),e._v(".")],1)]),e._v(" "),o("h3",{attrs:{id:"compass"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#compass"}},[e._v("#")]),e._v(" Compass")]),e._v(" "),o("p",[e._v("Compass calibration is covered in: "),o("RouterLink",{attrs:{to:"/zh/config/compass.html"}},[e._v("Compass Configuration")]),e._v(". The process is straightforward and will calibrate all connected magnetometers.")],1),e._v(" "),o("p",[e._v("Additional configuration can be "),o("RouterLink",{attrs:{to:"/zh/advanced_config/parameters.html"}},[e._v("performed")]),e._v(" using the "),o("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#CAL_MAG0_EN"}},[e._v("CAL"),o("em",[e._v("MAGx")])]),e._v(" parameters (where "),o("code",[e._v("x=0-3")]),e._v("). Generally you will not need to "),o("em",[e._v("modify")]),e._v(" these as compasses are autodetected, prioritised and are all calibrated at the same time (a possible exception is "),o("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#CAL_MAG0_EN"}},[e._v("CAL_MAGx_EN")]),e._v(" which might be used to disable an internal compass). You may however wish to read them, as they will let you know which magnetometers are internal or external ("),o("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#CAL_MAG0_EN"}},[e._v("CAL_MAGx_EN")]),e._v(") and which is being uses as the main heading source ("),o("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#CAL_MAG_PRIME"}},[e._v("CAL_MAG_PRIME")]),e._v(").")],1),e._v(" "),o("h2",{attrs:{id:"developer-information"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#developer-information"}},[e._v("#")]),e._v(" Developer Information")]),e._v(" "),o("ul",[o("li",[e._v("GPS/RTK-GPS\n"),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/zh/advanced/rtk_gps.html"}},[e._v("RTK-GPS")])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/zh/modules/modules_driver.html#gps"}},[e._v("GPS driver")])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/zh/uavcan/"}},[e._v("UAVCAN Example")])],1)])]),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/drivers/magnetometer",target:"_blank",rel:"noopener noreferrer"}},[e._v("Driver source code"),o("OutboundLink")],1),e._v(" (Compasses)")])])])}),[],!1,null,null,null);t.default=a.exports},366:function(e,t,r){e.exports=r.p+"assets/img/gps_compass.34866df8.jpg"}}]);