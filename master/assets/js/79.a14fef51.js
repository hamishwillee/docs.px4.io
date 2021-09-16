(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{2702:function(t,e,o){"use strict";o.r(e);var r=o(19),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"durandal-wiring-quick-start"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#durandal-wiring-quick-start"}},[t._v("#")]),t._v(" Durandal Wiring Quick Start")]),t._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[t._v("PX4 does not manufacture this (or any) autopilot. Contact the [manufacturer](https://shop.holybro.com/) for hardware support or compliance issues.")])]),t._v(" "),r("p",[t._v("This quick start guide shows how to power the Holybro "),r("RouterLink",{attrs:{to:"/zh/flight_controller/durandal.html"}},[t._v("Durandal")]),r("sup",[t._v("®")]),t._v(" flight controller and connect its most important peripherals.")],1),t._v(" "),r("p",[r("img",{attrs:{src:o(351),alt:"Durandal"}})]),t._v(" "),r("h2",{attrs:{id:"unboxing"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#unboxing"}},[t._v("#")]),t._v(" Unboxing")]),t._v(" "),r("p",[t._v("Durandal is sold bundled with a number of different combinations of accessories, including power modules: "),r("em",[t._v("PM02 V3")]),t._v(" and "),r("em",[t._v("PM07")]),t._v(", and the "),r("em",[t._v("Pixhawk 4 GPS/Compass")]),t._v(" ( u-blox NEO-M8N).")]),t._v(" "),r("p",[t._v("The content of the box with the "),r("em",[t._v("PM02 V3")]),t._v(" power module is shown below (the box also includes a pinout guide and power module instructions).")]),t._v(" "),r("p",[r("img",{attrs:{src:o(524),alt:"Durandal Box"}})]),t._v(" "),r("h2",{attrs:{id:"接线图概述"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#接线图概述"}},[t._v("#")]),t._v(" 接线图概述")]),t._v(" "),r("p",[t._v("The image below shows how to connect the most important sensors and peripherals (except the motor and servo outputs). We'll go through each of these in detail in the following sections.")]),t._v(" "),r("p",[r("img",{attrs:{src:o(525),alt:"Durandal Wiring Overview"}})]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),r("p",[t._v("More information about available ports can be found here: "),r("RouterLink",{attrs:{to:"/zh/flight_controller/durandal.html#pinouts"}},[t._v("Durandal > Pinouts")]),t._v(".")],1)]),t._v(" "),r("h2",{attrs:{id:"飞控的安装和方向"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#飞控的安装和方向"}},[t._v("#")]),t._v(" 飞控的安装和方向")]),t._v(" "),r("p",[r("em",[t._v("Durandal")]),t._v(" should be mounted on the frame positioned as close to your vehicle’s center of gravity as possible, oriented top-side up with the arrow pointing towards the front of the vehicle.")]),t._v(" "),r("p",[r("img",{attrs:{src:o(526),alt:"Mounting/Orientation"}})]),t._v(" "),r("p",[t._v("If the controller cannot be mounted in the recommended/default orientation (e.g. due to space constraints) you will need to configure the autopilot software with the orientation that you actually used: "),r("RouterLink",{attrs:{to:"/zh/config/flight_controller_orientation.html"}},[t._v("Flight Controller Orientation")]),t._v(".")],1),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),r("p",[t._v("The board has internal vibration-isolation. Do not use vibration-isolation foam to mount the controller (double sided tape is normally sufficient).")])]),t._v(" "),r("h2",{attrs:{id:"gps-指南针-蜂鸣器-安全开关-led"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#gps-指南针-蜂鸣器-安全开关-led"}},[t._v("#")]),t._v(" GPS + 指南针 + 蜂鸣器 + 安全开关 + LED")]),t._v(" "),r("p",[t._v("Durandal is designed to work well with the "),r("em",[t._v("Pixhawk 4 GPS module")]),t._v(", which has an integrated compass, safety switch, buzzer and LED. It connects directly to the "),r("RouterLink",{attrs:{to:"/zh/flight_controller/durandal.html#gps"}},[t._v("GPS port")]),t._v(" using the 10 pin cable.")],1),t._v(" "),r("p",[t._v("The GPS/Compass should be mounted on the frame as far away from other electronics as possible, with the direction marker towards the front of the vehicle (separating the compass from other electronics will reduce interference).")]),t._v(" "),r("p",[r("img",{attrs:{src:o(527),alt:"Connect compass/GPS to Durandal"}})]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),r("p",[t._v("The GPS module's integrated safety switch is enabled "),r("em",[t._v("by default")]),t._v(" (when enabled, PX4 will not let you arm the vehicle). To disable the safety press and hold the safety switch for 1 second. You can press the safety switch again to enable safety and disarm the vehicle (this can be useful if, for whatever reason, you are unable to disarm the vehicle from your remote control or ground station).")])]),t._v(" "),r("h2",{attrs:{id:"电源"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#电源"}},[t._v("#")]),t._v(" 电源")]),t._v(" "),r("p",[t._v("You can use a power module or power distribution board to power motors/servos and measure power consumption. The recommended power modules are shown below.")]),t._v(" "),r("p",[r("span",{attrs:{id:"pm02_v3"}})]),t._v(" "),r("h3",{attrs:{id:"pm02-v3-power-module"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pm02-v3-power-module"}},[t._v("#")]),t._v(" PM02 v3 Power Module")]),t._v(" "),r("p",[t._v("The "),r("a",{attrs:{href:"https://shop.holybro.com/power-modulepm02-v3_p1185.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Power Module (PM02 v3)"),r("OutboundLink")],1),t._v(" can be bundled with "),r("em",[t._v("Durandal")]),t._v(". It provides regulated power to flight controller and sends battery voltage/current to the flight controller.")]),t._v(" "),r("p",[t._v("Connect the output of the "),r("em",[t._v("Power Module")]),t._v(" as shown.")]),t._v(" "),r("p",[r("img",{attrs:{src:o(528),alt:"Durandal PM02v3 Power connections"}})]),t._v(" "),r("ul",[r("li",[t._v("PM voltage/current port: connect to "),r("RouterLink",{attrs:{to:"/zh/flight_controller/durandal.html#power"}},[t._v("POWER1")]),t._v(" port (or "),r("code",[t._v("POWER2")]),t._v(") using the 6-wire GH cable supplied.")],1),t._v(" "),r("li",[t._v("PM input (XT60 male connector): connect to the LiPo battery (2~12S).")]),t._v(" "),r("li",[t._v("PM power output (XT60 female connector): wire out to any motor ESCs.")])]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),r("p",[t._v("As this power module does not include power distribution wiring, you would normally just connect all the ESCs in parallel to the power module output (the ESC must be appropriate for the supplied voltage level).")])]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),r("p",[t._v("The 8 pin power (+) rail of "),r("strong",[t._v("MAIN/AUX")]),t._v(" is not powered by the power module supply to the flight controller. If it will need to be separately powered in order to drive servos for rudders, elevons etc., the power rail needs to be connected to a BEC equipped ESC or a standalone 5V BEC or a 2S LiPo battery. Ensure the voltage of servo you are going to use is appropriate.")])]),t._v(" "),r("p",[t._v("如果你想"),r("em",[t._v("手动")]),t._v("控制你的飞机，你需要一个遥控器（PX4在自动飞行模式可以不需要遥控器）。")]),t._v(" "),r("ul",[r("li",[t._v("Max input voltage: 60V")]),t._v(" "),r("li",[t._v("Max current sensing: 120A Voltage")]),t._v(" "),r("li",[t._v("Current measurement configured for SV ADC Switching regulator outputs 5.2V and 3A max")]),t._v(" "),r("li",[t._v("Weight: 20g")]),t._v(" "),r("li",[t._v("Package includes:\n"),r("ul",[r("li",[t._v("PM02 board")]),t._v(" "),r("li",[t._v("6pin MLX cable (1)")]),t._v(" "),r("li",[t._v("6pin GH cable (1)")])])])]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),r("p",[t._v("See also "),r("a",{attrs:{href:"http://www.holybro.com/manual/Holybro_PM02_v3_PowerModule_Manual.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("PM02v3 Power Module Manual"),r("OutboundLink")],1),t._v(" (Holybro).")])]),t._v(" "),r("p",[r("span",{attrs:{id:"pm07"}})]),t._v(" "),r("h3",{attrs:{id:"pixhawk-4-power-module-pm07"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pixhawk-4-power-module-pm07"}},[t._v("#")]),t._v(" Pixhawk 4 Power Module (PM07)")]),t._v(" "),r("p",[t._v("The "),r("a",{attrs:{href:"https://shop.holybro.com/pixhawk-4-power-module-pm07_p1095.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk 4 Power Module (PM07)"),r("OutboundLink")],1),t._v(" can be bundled/used with "),r("em",[t._v("Durandal")]),t._v(". It acts as both a power module and power distribution board, providing regulated power to flight controller and the ESCs, and sending battery voltage/current to the flight controller.")]),t._v(" "),r("p",[t._v("更多有关遥控器系统选择、接收机兼容性和遥控器接收机对频绑定的详细信息，请参阅："),r("RouterLink",{attrs:{to:"/zh/getting_started/rc_transmitter_receiver.html"}},[t._v("遥控器发射机&接收器")]),t._v("。")],1),t._v(" "),r("p",[t._v("遥测无线电台可用于地面站的通信和飞行控制 (例如, 您可以指定无人机飞行至特定位置, 或上传新的任务)。")]),t._v(" "),r("ul",[r("li",[t._v("PCB Current: total 120A outputs (MAX)")]),t._v(" "),r("li",[t._v("UBEC 5V output current: 3A")]),t._v(" "),r("li",[t._v("UBEC input voltage : 7~51v (2~12s LiPo)")]),t._v(" "),r("li",[t._v("Dimensions: 68"),r("em",[t._v("50")]),t._v("8 mm")]),t._v(" "),r("li",[t._v("Mounting Holes: 45*45mm")]),t._v(" "),r("li",[t._v("Weight: 36g")]),t._v(" "),r("li",[t._v("Package includes:\n"),r("ul",[r("li",[t._v("PM07 board (1)")]),t._v(" "),r("li",[t._v("80mm XT60 connector wire (1)")])])])]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),r("p",[t._v("See also "),r("a",{attrs:{href:"http://www.holybro.com/manual/PM07-Quick-Start-Guide.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("PM07 Quick Start Guide"),r("OutboundLink")],1),t._v(" (Holybro).")])]),t._v(" "),r("h3",{attrs:{id:"battery-configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#battery-configuration"}},[t._v("#")]),t._v(" Battery Configuration")]),t._v(" "),r("p",[t._v("The battery/power setup must be configured in "),r("RouterLink",{attrs:{to:"/zh/config/battery.html"}},[t._v("Power Settings")]),t._v(". For either Power Module you will need to configure the "),r("em",[t._v("Number of Cells")]),t._v(".")],1),t._v(" "),r("p",[t._v("You will not need to update the "),r("em",[t._v("voltage divider")]),t._v(" unless you are using some other power module (e.g. the one from the Pixracer).")]),t._v(" "),r("h2",{attrs:{id:"无线电遥控"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#无线电遥控"}},[t._v("#")]),t._v(" 无线电遥控")]),t._v(" "),r("p",[t._v("A remote control (RC) radio system is required if you want to "),r("em",[t._v("manually")]),t._v(" control your vehicle (PX4 does not require a radio system for autonomous flight modes).")]),t._v(" "),r("p",[t._v("You will need to "),r("RouterLink",{attrs:{to:"/zh/getting_started/rc_transmitter_receiver.html"}},[t._v("select a compatible transmitter/receiver")]),t._v(" and then "),r("em",[t._v("bind")]),t._v(" them so that they communicate (read the instructions that come with your specific transmitter/receiver).")],1),t._v(" "),r("p",[t._v("The instructions below show how to connect the different types of receivers to "),r("em",[t._v("Durandal")]),t._v(":")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("Spektrum/DSM receivers connect to the "),r("RouterLink",{attrs:{to:"/zh/flight_controller/durandal.html#dsm-rc-port"}},[t._v("DSM RC")]),t._v(" input.")],1),t._v(" "),r("p",[r("img",{attrs:{src:o(529),alt:"Durandal - DSM"}})])]),t._v(" "),r("li",[r("p",[t._v("PPM and S.Bus receivers connect to the "),r("RouterLink",{attrs:{to:"/zh/flight_controller/durandal.html#rc-in"}},[t._v("SBUS_IN/PPM_IN")]),t._v(" input port (marked as RC IN, next to the MAIN/AUX inputs).")],1),t._v(" "),r("p",[r("img",{attrs:{src:o(335),alt:"Durandal - Back Pinouts (Schematic)"}})])]),t._v(" "),r("li",[r("p",[t._v("PPM 和 "),r("em",[t._v("每个通道有单独连接线")]),t._v(" 的 PWM 接收机需要连接在 "),r("strong",[t._v("PPM RC")]),t._v(" 端口，PWM信号需要通过一个"),r("a",{attrs:{href:"http://www.getfpv.com/radios/radio-accessories/holybro-ppm-encoder-module.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("类似这样的"),r("OutboundLink")],1),t._v("* PPM 编码器*（PPM-Sum 接收机只需要一根信号线就包含所有通道）。")])])]),t._v(" "),r("p",[t._v("For more information about selecting a radio system, receiver compatibility, and binding your transmitter/receiver pair, see: "),r("RouterLink",{attrs:{to:"/zh/getting_started/rc_transmitter_receiver.html"}},[t._v("Remote Control Transmitters & Receivers")]),t._v(".")],1),t._v(" "),r("h2",{attrs:{id:"数传电台-可选"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#数传电台-可选"}},[t._v("#")]),t._v(" 数传电台（可选）")]),t._v(" "),r("p",[t._v("针对可选/非通用组件的接线与配置，在 "),r("RouterLink",{attrs:{to:"/zh/peripherals/"}},[t._v("外围设备")]),t._v(" 独立主题中有详细的内容介绍。")],1),t._v(" "),r("p",[t._v("The vehicle-based radio should be connected to the "),r("RouterLink",{attrs:{to:"/zh/flight_controller/durandal.html#telem1_2_3"}},[t._v("TELEM1")]),t._v(" port as shown below using one of the 6-pos connectors (if connected to this port, no further configuration is required). The other radio is connected to your ground station computer or mobile device (usually by USB).")],1),t._v(" "),r("p",[r("img",{attrs:{src:o(530),alt:"Durandal/Telemetry Radio"}})]),t._v(" "),r("h2",{attrs:{id:"sd-卡"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sd-卡"}},[t._v("#")]),t._v(" SD 卡")]),t._v(" "),r("p",[t._v("SD cards are highly recommended as they are needed to "),r("RouterLink",{attrs:{to:"/zh/getting_started/flight_reporting.html"}},[t._v("log and analyse flight details")]),t._v(", to run missions, and to use UAVCAN-bus hardware. Insert an SD card into the "),r("em",[t._v("Durandal")]),t._v(" where indicated below.")],1),t._v(" "),r("p",[r("img",{attrs:{src:o(531),alt:"Durandal SD Card"}})]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),r("p",[t._v("For more information see "),r("RouterLink",{attrs:{to:"/zh/getting_started/px4_basic_concepts.html#sd_cards"}},[t._v("Basic Concepts > SD Cards (Removable Memory)")]),t._v(".")],1)]),t._v(" "),r("h2",{attrs:{id:"电机"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#电机"}},[t._v("#")]),t._v(" 电机")]),t._v(" "),r("p",[t._v("Motors/servos control signals are connected to the "),r("strong",[t._v("I/O PWM OUT")]),t._v(" ("),r("strong",[t._v("MAIN OUT")]),t._v(") and "),r("strong",[t._v("FMU PWM OUT")]),t._v(" ("),r("strong",[t._v("AUX")]),t._v(") ports in the order specified for your vehicle in the "),r("RouterLink",{attrs:{to:"/zh/airframes/airframe_reference.html"}},[t._v("Airframe Reference")]),t._v(".")],1),t._v(" "),r("p",[r("img",{attrs:{src:o(335),alt:"Durandal - Back Pinouts (Schematic)"}})]),t._v(" "),r("p",[t._v("The motors must be separately "),r("a",{attrs:{href:"#power"}},[t._v("powered")]),t._v(".")]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),r("p",[t._v('If your frame is not listed in the airframe reference then use a "generic" airframe of the correct type.')])]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),r("p",[r("em",[t._v("Durandal")]),t._v(" has 5 AUX ports, so cannot be used with airframes that map AUX6, AUX7, AUX8 to motors or other critical flight controls.")])]),t._v(" "),r("h2",{attrs:{id:"其它外设"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#其它外设"}},[t._v("#")]),t._v(" 其它外设")]),t._v(" "),r("p",[t._v("The wiring and configuration of optional/less common components is covered within the topics for individual "),r("RouterLink",{attrs:{to:"/zh/peripherals/"}},[t._v("peripherals")]),t._v(".")],1),t._v(" "),r("h2",{attrs:{id:"针脚定义"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#针脚定义"}},[t._v("#")]),t._v(" 针脚定义")]),t._v(" "),r("p",[r("RouterLink",{attrs:{to:"/zh/flight_controller/durandal.html#pinouts"}},[t._v("Durandal > Pinouts")])],1),t._v(" "),r("p",[r("span",{attrs:{id:"configuration"}})]),t._v(" "),r("h2",{attrs:{id:"px4-配置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#px4-配置"}},[t._v("#")]),t._v(" PX4 配置")]),t._v(" "),r("p",[t._v("First you will need to install "),r("RouterLink",{attrs:{to:"/zh/config/firmware.html#custom"}},[t._v('PX4 "Master" Firmware')]),t._v(" onto the controller using "),r("em",[t._v("QGroundControl")]),t._v(".")],1),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),r("p",[t._v("Durandal support will be in the "),r("em",[t._v("stable")]),t._v(" PX4 release that follows PX4 v1.10.")])]),t._v(" "),r("p",[t._v("Further general configuration information is covered in: "),r("RouterLink",{attrs:{to:"/zh/config/"}},[t._v("Autopilot Configuration")]),t._v(".")],1),t._v(" "),r("p",[t._v("QuadPlane specific configuration is covered here: "),r("RouterLink",{attrs:{to:"/zh/config_vtol/vtol_quad_configuration.html"}},[t._v("QuadPlane VTOL Configuration")])],1),t._v(" "),r("h2",{attrs:{id:"更多信息"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#更多信息"}},[t._v("#")]),t._v(" 更多信息")]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/zh/flight_controller/durandal.html"}},[t._v("Durandal Overview")])],1),t._v(" "),r("li",[r("a",{attrs:{href:"http://www.holybro.com/manual/Durandal_technical_data_sheet.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Durandal Technical Data Sheet"),r("OutboundLink")],1),t._v(" (Holybro)")]),t._v(" "),r("li",[r("a",{attrs:{href:"http://www.holybro.com/manual/Durandal-Pinouts.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Durandal Pinouts"),r("OutboundLink")],1),t._v(" (Holybro)")]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/PX4/px4_user_guide/raw/master/assets/flight_controller/durandal/Durandal_MB_H743sch.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Durandal_MB_H743sch.pdf"),r("OutboundLink")],1),t._v(" (Durandal Schematics)")]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/PX4/PX4-user_guide/raw/master/assets/flight_controller/durandal/STM32H743IIK_pinout.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("STM32H743IIK_pinout.pdf"),r("OutboundLink")],1),t._v(" (Durandal Pinmap)")])])])}),[],!1,null,null,null);e.default=a.exports},335:function(t,e,o){t.exports=o.p+"assets/img/durandal_pinouts_back.7776b664.jpg"},351:function(t,e,o){t.exports=o.p+"assets/img/durandal_hero.894ff4ed.jpg"},524:function(t,e,o){t.exports=o.p+"assets/img/durandal_unboxing_schematics.3ac81ade.jpg"},525:function(t,e,o){t.exports=o.p+"assets/img/durandal_wiring_overview.d8af79ba.jpg"},526:function(t,e,o){t.exports=o.p+"assets/img/orientation.473954df.jpg"},527:function(t,e,o){t.exports=o.p+"assets/img/connection_gps_compass.4f72878c.jpg"},528:function(t,e,o){t.exports=o.p+"assets/img/connection_power.adc34c29.jpg"},529:function(t,e,o){t.exports=o.p+"assets/img/dsm.545b61c1.jpg"},530:function(t,e,o){t.exports=o.p+"assets/img/holybro_telemetry_radio.fdcf0fd0.jpg"},531:function(t,e,o){t.exports=o.p+"assets/img/durandal_sd_slot.ff85446b.jpg"}}]);