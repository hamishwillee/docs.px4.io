(window.webpackJsonp=window.webpackJsonp||[]).push([[456],{1158:function(e,t,r){e.exports=r.p+"assets/img/qgc_serial_baudrate_example.ddc34059.png"},2493:function(e,t,r){"use strict";r.r(t);var o=r(18),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"gps-罗盘"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#gps-罗盘"}},[e._v("#")]),e._v(" GPS&罗盘")]),e._v(" "),o("p",[e._v("PX4 supports global navigation satellite systems (GNSS) (including GPS, GLONASS, Galileo, BeiDou, QZSS and SBAS) using receivers that communicate via the UBlox, MTK Ashtech or Emlid protocols, or via UAVCAN. 它还支持 "),o("RouterLink",{attrs:{to:"/zh/gps_compass/rtk_gps.html"}},[e._v("实时动态（RTK）GPS接收器")]),e._v(" ，它将 GPS 系统扩展到厘米级精度。")],1),e._v(" "),o("p",[e._v("PX4可用于以下指南针部件（磁强计）：博世BMM 150 MEMS（通过I2C总线）、HMC5883/HMC5983（I2C或SPI）、IST8310（I2C）和 LIS3MDL（I2C或SPI）。")]),e._v(" "),o("blockquote",[o("p",[o("strong",[e._v("Note")]),e._v(" The set of supported compasses can be inferred from the "),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/drivers/magnetometer",target:"_blank",rel:"noopener noreferrer"}},[e._v("magnetometer drivers"),o("OutboundLink")],1),e._v(" in the source code.")])]),e._v(" "),o("p",[e._v("最多可以连接4个内部或外部磁强计，但实际上只有一个磁强计可用作标题源。 系统根据其内部优先级自动选择可用的最佳罗盘（外部磁强计具有更高的优先级）。 如果主指南针在飞行中失败它将跳转到下一个指南针。 如果它在飞行前失败，将无法起飞。")]),e._v(" "),o("p",[o("img",{attrs:{src:r(366),alt:"GPS + Compass"}})]),e._v(" "),o("blockquote",[o("p",[o("strong",[e._v("Tip")]),e._v(" 在使用 "),o("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk_series.html"}},[e._v("Pixhawk-系列")]),e._v(" 飞行控制器时，我们建议使用安装在远离飞机/esc电源线的地方使用 "),o("em",[e._v("整合GPS和罗盘")]),e._v(" - 通常安装在基座或机翼上（适用于固定翼飞机）。 内部指南针 "),o("em",[e._v("可能")]),e._v(" 在较大的机型（如垂直起降机型）上有用，在这些车辆上，通过安装Pixhawk距离电源线很远，可以减少电磁干扰。 在小型飞行器上，几乎总是需要外置罗盘。")],1)]),e._v(" "),o("h2",{attrs:{id:"组合gps-罗盘选项"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#组合gps-罗盘选项"}},[e._v("#")]),e._v(" 组合GPS/罗盘选项")]),e._v(" "),o("p",[e._v("一些流行的GSP/指南针选项包括：")]),e._v(" "),o("ul",[o("li",[o("p",[o("a",{attrs:{href:"https://hobbyking.com/en_us/ublox-neo-m8n-gps-with-compass.html?gclid=Cj0KCQjwqM3VBRCwARIsAKcekb3ojv1ZhLz1-GuvCsUuGT8ZZuw8meMIV_I6pgUCj6DJRzHBY9OApekaAgI5EALw_wcB&gclsrc=aw.ds&___store=en_us",target:"_blank",rel:"noopener noreferrer"}},[e._v("带罗盘的Ublox Neo-M8N GPS"),o("OutboundLink")],1),e._v("（Hobbyking）")])]),e._v(" "),o("li",[o("p",[o("a",{attrs:{href:"https://store.mrobotics.io/ProductDetails.asp?ProductCode=mro-gps003-mr",target:"_blank",rel:"noopener noreferrer"}},[e._v("mRo GPS u-Blox Neo-M8N Dual Compass LIS3MDL+ IST8310"),o("OutboundLink")],1),e._v(" (mRo store)")])]),e._v(" "),o("li",[o("p",[o("a",{attrs:{href:"https://store-drotek.com/index.php?controller=search&s=ublox+compass",target:"_blank",rel:"noopener noreferrer"}},[e._v("Drotek uBlox GPS/Compasses"),o("OutboundLink")],1),e._v(" - e.g "),o("a",{attrs:{href:"https://store-drotek.com/920-DP0804.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("DP0804 (NEO-M9N GPS + LIS3MDL Magnetometer for Pixhawk 3 Pro)"),o("OutboundLink")],1),e._v(" (drotek)")])]),e._v(" "),o("li",[o("p",[o("a",{attrs:{href:"https://shop.holybro.com/pix32-gps-module_p1099.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Holybro Pix32 M8N GPS Module"),o("OutboundLink")],1),e._v(" ("),o("a",{attrs:{href:"https://shop.holybro.com/pix32-gps-module_p1099.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Holybro Shop"),o("OutboundLink")],1),e._v(") ("),o("a",{attrs:{href:"https://www.getfpv.com/holybro-pix32-neo-m8n-gps.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("getfpv"),o("OutboundLink")],1),e._v(")")])]),e._v(" "),o("li",[o("p",[o("a",{attrs:{href:"https://shop.holybro.com/micro-m8n-gps_p1009.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Holybro Micro M8N GPS Module"),o("OutboundLink")],1),e._v(" ("),o("a",{attrs:{href:"https://shop.holybro.com/micro-m8n-gps_p1009.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Holybro Shop"),o("OutboundLink")],1),e._v(") ("),o("a",{attrs:{href:"https://www.getfpv.com/holybro-micro-m8n-gps-module.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("getfpv"),o("OutboundLink")],1),e._v(")")])]),e._v(" "),o("li",[o("p",[o("a",{attrs:{href:"https://shop.holybro.com/pixhawk-4-gps-module_p1094.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Holybro Pixhawk 4 GPS Module (10 pin)"),o("OutboundLink")],1),e._v(" ("),o("a",{attrs:{href:"https://shop.holybro.com/pixhawk-4-gps-module_p1094.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Holybro Shop"),o("OutboundLink")],1),e._v(")) ("),o("a",{attrs:{href:"https://www.getfpv.com/holybro-pixhawk-4-neo-m8n-gps.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("getfpv"),o("OutboundLink")],1),e._v(")")])]),e._v(" "),o("li",[o("p",[o("a",{attrs:{href:"https://shop.holybro.com/pixhawk4-2nd-gps-module_p1145.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Holybro Pixhawk 4 2nd GPS Module (6 pin)"),o("OutboundLink")],1),e._v(" (Holybro Shop)")])]),e._v(" "),o("li",[o("p",[o("a",{attrs:{href:"https://www.getfpv.com/here-gnss-gps-m8n.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Here GNSS GPS (M8N)"),o("OutboundLink")],1),e._v(" (getfpv)")])]),e._v(" "),o("li",[o("p",[o("RouterLink",{attrs:{to:"/zh/gps_compass/gps_hex_here2.html"}},[e._v("Hex Here2 GNSS GPS (M8N)")])],1)]),e._v(" "),o("li",[o("p",[o("a",{attrs:{href:"https://zubax.com/products/gnss_2",target:"_blank",rel:"noopener noreferrer"}},[e._v("Zubax GNSS 2"),o("OutboundLink")],1),e._v(" (zubax.com)")])]),e._v(" "),o("li",[o("p",[o("a",{attrs:{href:"https://www.tindie.com/products/avionicsanonymous/uavcan-gps-magnetometer/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Avionics Anonymous UAVCAN GNSS/Mag"),o("OutboundLink")],1),e._v(" (Tindie)")])]),e._v(" "),o("li",[o("p",[e._v("3DR uBlox GPS与罗盘kit</0 >(getfpv)-"),o("em",[e._v("停产")])])])]),o("p"),e._v(" "),o("p",[e._v("GPS与罗盘的连接说明通常由厂家（至少支持更通用的 "),o("RouterLink",{attrs:{to:"/zh/flight_controller/"}},[e._v("自驾仪")]),e._v("）提供")],1),e._v(" "),o("blockquote",[o("p",[o("strong",[e._v("Note")]),e._v(" "),o("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk_series.html"}},[e._v("Pixhawk系列")]),e._v(" 控制器通常有一个标记明确的端口用于连接GPS，指南针连接I2C或SPI总线（取决于设备）。 The "),o("a",{attrs:{href:"https://zubax.com/products/gnss_2",target:"_blank",rel:"noopener noreferrer"}},[e._v("Zubax GNSS 2"),o("OutboundLink")],1),e._v(" and "),o("a",{attrs:{href:"https://www.tindie.com/products/avionicsanonymous/uavcan-gps-magnetometer/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Avionics Anonymous GNSS/Mag"),o("OutboundLink")],1),e._v(" can also be connected via "),o("RouterLink",{attrs:{to:"/zh/uavcan/"}},[e._v("UAVCAN")]),e._v(".")],1)]),e._v(" "),o("p",[o("span")]),e._v(" "),o("blockquote",[o("p",[o("strong",[e._v("Tip")]),e._v(" 连接GPS模块时，请注意引脚。 虽然这些都是软件兼容，有几个不同的引脚。")])]),e._v(" "),o("h2",{attrs:{id:"gps-only-options"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#gps-only-options"}},[e._v("#")]),e._v(" GPS (Only) Options")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://emlid.com/reach/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Emlid Reach M+"),o("OutboundLink")],1),e._v(" (emlid.com) > "),o("strong",[e._v("Note")]),e._v(' At time of writing PX4 does not support RTK GPS with this module (only "ordinary" GPS). Support is expected in the near future.')])]),e._v(" "),o("h2",{attrs:{id:"compass-only-options"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#compass-only-options"}},[e._v("#")]),e._v(" Compass (Only) Options")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://www.tindie.com/products/avionicsanonymous/uavcan-magnetometer/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Avionics Anonymous UAVCAN Magnetometer"),o("OutboundLink")],1),e._v(" (Tindie)")])]),e._v(" "),o("h2",{attrs:{id:"rtk-gps设备"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#rtk-gps设备"}},[e._v("#")]),e._v(" RTK-GPS设备")]),e._v(" "),o("p",[e._v("有关支持的设备和setup/配置的信息，请参阅边栏下的 "),o("RouterLink",{attrs:{to:"/zh/gps_compass/rtk_gps.html"}},[e._v("RTK GPS")]),e._v("。")],1),e._v(" "),o("h2",{attrs:{id:"配置"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[e._v("#")]),e._v(" 配置")]),e._v(" "),o("h3",{attrs:{id:"primary-gps"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#primary-gps"}},[e._v("#")]),e._v(" Primary GPS")]),e._v(" "),o("p",[e._v("GPS configuration on Pixhawk is handled transparently for the user - simply connect the GPS module to the port labeled "),o("strong",[e._v("GPS")]),e._v(" and everything should work.")]),e._v(" "),o("blockquote",[o("p",[o("strong",[e._v("Note")]),e._v(" The default "),o("RouterLink",{attrs:{to:"/zh/peripherals/serial_configuration.html#default_port_mapping"}},[e._v("Serial Port Configuration")]),e._v(" works for most devices. If you are using the "),o("em",[e._v("Trimble MB-Two")]),e._v(" you will need to modify the configuration to explicitly set the rate to 115200 baud.")],1)]),e._v(" "),o("p",[o("span",{attrs:{id:"dual_gps"}})]),e._v(" "),o("h3",{attrs:{id:"secondary-gps-dual-gps-system"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#secondary-gps-dual-gps-system"}},[e._v("#")]),e._v(" Secondary GPS (Dual GPS System)")]),e._v(" "),o("p",[e._v("To use a secondary GPS, attach it to any free port, and then perform a "),o("RouterLink",{attrs:{to:"/zh/peripherals/serial_configuration.html"}},[e._v("Serial Port Configuration")]),e._v(" to assign "),o("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#GPS_2_CONFIG"}},[e._v("GPS_2_CONFIG")]),e._v(" to the selected port.")],1),e._v(" "),o("p",[e._v("The following steps show how to configure a secondary GPS on the "),o("code",[e._v("TELEM 2")]),e._v(" port in "),o("em",[e._v("QGroundControl")]),e._v(":")]),e._v(" "),o("ol",[o("li",[o("RouterLink",{attrs:{to:"/zh/advanced_config/parameters.html"}},[e._v("Find and set")]),e._v(" the parameter "),o("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#GPS_2_CONFIG"}},[e._v("GPS_2_CONFIG")]),e._v(" to "),o("strong",[e._v("TELEM 2")]),e._v(".")],1)]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("- Open *QGroundControl* and navigate to the **Vehicle Setup > Parameters** section.\n- 选择 **GPS** 选项卡(1)，然后打开 [GPS_2_CONFIG](../advanced_config/parameter_reference.md#GPS_2_CONFIG) 参数(2)，并从下拉列表(3) 中选择 *TELEM 2*。 ![QGC 串口实例](../../assets/peripherals/qgc_serial_config_example.png)\n")])])]),o("ol",{attrs:{start:"2"}},[o("li",[e._v("Reboot the vehicle in order to make the other parameters visible.")]),e._v(" "),o("li",[e._v("选择 "),o("strong",[e._v("串口")]),e._v(" 选项卡，并打开 "),o("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SER_TEL2_BAUD"}},[e._v("SER_TEL2_BAUD")]),e._v(" 参数 ("),o("code",[e._v("TELEM 2")]),e._v("端口波特率)：将其设置为 "),o("em",[e._v("Auto")]),e._v("。 "),o("img",{attrs:{src:r(1158),alt:"QGC 串口波特率实例"}})],1)]),e._v(" "),o("p",[e._v("After setting up the second GPS port:")]),e._v(" "),o("ol",[o("li",[e._v("Configure the ECL/EKF2 estimator to blend data from both GPS systems. For detailed instructions see: "),o("RouterLink",{attrs:{to:"/zh/advanced_config/tuning_the_ecl_ekf.html#dual-receivers"}},[e._v("Using the ECL EKF > Dual Receivers")]),e._v(".")],1)]),e._v(" "),o("h3",{attrs:{id:"罗盘"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#罗盘"}},[e._v("#")]),e._v(" 罗盘")]),e._v(" "),o("p",[e._v("指南针校准内容包括在："),o("RouterLink",{attrs:{to:"/zh/config/compass.html"}},[e._v("罗盘配置")]),e._v(" 中。 该过程非常简单，将校准所有连接的磁强计。")],1),e._v(" "),o("p",[e._v("可以使用 "),o("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#CAL_MAG0_EN"}},[e._v("CAL\\ "),o("em",[e._v("MAGx")])]),e._v(" parameters（"),o("code",[e._v("x=0-3")]),e._v("）"),o("RouterLink",{attrs:{to:"/zh/advanced_config/parameters.html"}},[e._v("performed")]),e._v(" 其他配置。 通常，您不需要 "),o("em",[e._v("修改")]),e._v(" 这些，因为罗盘是自动检测的，优先排序，并且都是同时校准的（可能的例外是 "),o("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#CAL_MAG0_EN"}},[e._v("CAL_MAGx_EN")]),e._v(" 可能用于禁用内部指南针）。 但是，您可能希望阅读它们，因为它们会让您知道哪些磁强计是内部或外部（"),o("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#CAL_MAG0_EN"}},[e._v("CAL_MAGx_EN")]),e._v("），哪些是用作主要标题源（"),o("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#CAL_MAG_PRIME"}},[e._v("CAL_MAG_PRIME")]),e._v("）。")],1),e._v(" "),o("h2",{attrs:{id:"开发人员信息"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#开发人员信息"}},[e._v("#")]),e._v(" 开发人员信息")]),e._v(" "),o("ul",[o("li",[e._v("GPS/RTK-GPS\n"),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/zh/advanced/rtk_gps.html"}},[e._v("RTK-GPS")])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/zh/modules/modules_driver.html#gps"}},[e._v("GPS驱动程序")])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/zh/uavcan/"}},[e._v("UAVCAN示例")])],1)])]),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/drivers/magnetometer",target:"_blank",rel:"noopener noreferrer"}},[e._v("Driver source code"),o("OutboundLink")],1),e._v(" (Compasses)")])])])}),[],!1,null,null,null);t.default=a.exports},366:function(e,t,r){e.exports=r.p+"assets/img/gps_compass.34866df8.jpg"}}]);