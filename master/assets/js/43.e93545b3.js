(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{2298:function(t,e,o){"use strict";o.r(e);var r=o(18),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"接线指南"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#接线指南"}},[t._v("#")]),t._v(" 接线指南")]),t._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[t._v("PX4 does not manufacture this (or any) autopilot. Contact the [manufacturer](https://cubepilot.org/#/home) for hardware support or compliance issues.")]),t._v(" "),r("p",[t._v("Note also that while "),r("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk-2.html"}},[t._v("Cube Black")]),t._v(" is "),r("RouterLink",{attrs:{to:"/zh/flight_controller/autopilot_pixhawk_standard.html"}},[t._v("fully supported by PX4")]),t._v(", support for "),r("RouterLink",{attrs:{to:"/zh/flight_controller/cubepilot_cube_yellow.html"}},[t._v("Cube Yellow")]),t._v(" and "),r("RouterLink",{attrs:{to:"/zh/flight_controller/cubepilot_cube_orange.html"}},[t._v("Cube Orange")]),t._v(" is "),r("RouterLink",{attrs:{to:"/zh/flight_controller/autopilot_experimental.html"}},[t._v("Experimental")]),t._v(".")],1)]),t._v(" "),r("p",[t._v("This quick start guide shows how to power the "),r("em",[t._v("Cube")]),r("sup",[t._v("®")]),t._v(" flight controllers and connect their most important peripherals.")]),t._v(" "),r("p",[r("img",{attrs:{src:o(343),width:"350px"}}),t._v(" "),r("img",{attrs:{src:o(344),width:"350px"}}),t._v(" "),r("img",{attrs:{src:o(345),width:"150px"}})]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),r("p",[t._v("The instructions apply to all Cube variants, including "),r("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk-2.html"}},[t._v("Cube Black")]),t._v(", "),r("RouterLink",{attrs:{to:"/zh/flight_controller/cubepilot_cube_yellow.html"}},[t._v("Cube Yellow")]),t._v(" and "),r("RouterLink",{attrs:{to:"/zh/flight_controller/cubepilot_cube_orange.html"}},[t._v("Cube Orange")]),t._v(". Further/updated information may be available in the "),r("a",{attrs:{href:"https://docs.cubepilot.org/user-guides/autopilot/the-cube-user-manual",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cube User Manual"),r("OutboundLink")],1),t._v(" (Cube Docs).")],1)]),t._v(" "),r("h2",{attrs:{id:"配件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#配件"}},[t._v("#")]),t._v(" 配件")]),t._v(" "),r("p",[t._v("Cube comes with most (or all) of the accessories you will need when "),r("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk-2.html#stores"}},[t._v("purchased")]),t._v(".")],1),t._v(" "),r("p",[r("img",{attrs:{src:o(512),alt:"Cube Accessories"}})]),t._v(" "),r("p",[t._v("The exception is that some kits do not include a GPS, which will have to be purchased separately ("),r("a",{attrs:{href:"#gps"}},[t._v("see below")]),t._v(").")]),t._v(" "),r("h2",{attrs:{id:"接线图概览"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#接线图概览"}},[t._v("#")]),t._v(" 接线图概览")]),t._v(" "),r("p",[t._v("The image below shows how to connect the most important sensors and peripherals. We'll go through each of these in detail in the following sections.")]),t._v(" "),r("p",[r("img",{attrs:{src:o(513),alt:"Cube - Wiring Overview"}})]),t._v(" "),r("ol",[r("li",[r("a",{attrs:{href:"#telemetry"}},[t._v("数传系统")]),t._v(" — 允许您计划/运行任务，实时控制和监控飞行器状态。 典型的包括数传、平板电脑/PC、地面站软件。")]),t._v(" "),r("li",[r("a",{attrs:{href:"#buzzer"}},[t._v("蜂鸣器")]),t._v(" — 提供声音信号显示UAV目前的状态。")]),t._v(" "),r("li",[r("a",{attrs:{href:"#rc_control"}},[t._v("远程控制接收系统")]),t._v(" — 连接手持发射器能够手动操控飞行（如图所述是一个PWM 接收器能包括 PWM->PPM 转换器）。")]),t._v(" "),r("li",[t._v("（专用） "),r("a",{attrs:{href:"#safety_switch"}},[t._v("安全开关")]),t._v(" — 按下以解锁和锁定电机。 如果您没有使用推荐的内置安全开关的 "),r("a",{attrs:{href:"#gps"}},[t._v("GPS")]),t._v(" 时，安全开关是必须的。")]),t._v(" "),r("li",[r("a",{attrs:{href:"#gps"}},[t._v("GPS、罗盘、LED、安全开关")]),t._v(" — 推荐的GPS模块包括GPS、罗盘、LED 和安全开关。")]),t._v(" "),r("li",[r("a",{attrs:{href:"#power"}},[t._v("电源系统")]),t._v(" — 电源线和电机ESC。 包括锂电池、电源模块和可选的电源报警系统（如果电池电量低于预定时发出警报）。")])]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),r("p",[t._v("The port labeled "),r("code",[t._v("GPS2")]),t._v(" maps to "),r("code",[t._v("TEL4")]),t._v(" in PX4 (i.e. if connecting to the port labeled "),r("code",[t._v("GPS2")]),t._v(", assign the "),r("RouterLink",{attrs:{to:"/zh/peripherals/serial_configuration.html"}},[t._v("serial port configuration parameter")]),t._v(" for the connected hardware to "),r("code",[t._v("TEL4")]),t._v(").")],1)]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),r("p",[t._v("More information about available ports can be found here: "),r("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk-2.html#ports"}},[t._v("Cube > Ports")]),t._v(".")],1)]),t._v(" "),r("h2",{attrs:{id:"飞控的安装和方向"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#飞控的安装和方向"}},[t._v("#")]),t._v(" 飞控的安装和方向")]),t._v(" "),r("p",[t._v("Mount the Cube as close as possible to your vehicle’s center of gravity, ideally oriented top-side up and with the arrow pointing towards the front of the vehicle (note the "),r("em",[t._v("subtle")]),t._v(" arrow marker on top of the cube)")]),t._v(" "),r("p",[r("img",{attrs:{src:o(514),alt:"Cube Mount - Direction of Front"}})]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),r("p",[t._v("If the controller cannot be mounted in the recommended/default orientation (e.g. due to space constraints) you will need to configure the autopilot software with the orientation that you actually used: "),r("RouterLink",{attrs:{to:"/zh/config/flight_controller_orientation.html"}},[t._v("Flight Controller Orientation")]),t._v(".")],1)]),t._v(" "),r("p",[t._v("The Cube can be mounted using either vibration-damping foam pads (included in the kit) or mounting screws. The mounting screws in the Cube accessories are designed for a 1.8mm thick frameboard. Customized screws are supposed to be M2.5 with thread length inside Cube in range 6mm~7.55mm.")]),t._v(" "),r("p",[r("img",{attrs:{src:o(515),alt:"Cube Mount - Mounting Plate"}})]),t._v(" "),r("p",[r("span",{attrs:{id:"gps"}})]),t._v(" "),r("h2",{attrs:{id:"gps-罗盘-安全开关-led"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#gps-罗盘-安全开关-led"}},[t._v("#")]),t._v(" GPS + 罗盘 + 安全开关 + LED")]),t._v(" "),r("p",[t._v("The recommended GPS modules are the "),r("em",[t._v("Here")]),t._v(" and "),r("RouterLink",{attrs:{to:"/zh/gps_compass/rtk_gps_hex_hereplus.html"}},[t._v("Here+")]),t._v(", both of which incorporate a GPS module, Compass, Safety Switch and "),r("RouterLink",{attrs:{to:"/zh/getting_started/led_meanings.html"}},[t._v("LEDs")]),t._v(".")],1),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),r("p",[t._v("The difference between the modules is that "),r("em",[t._v("Here+")]),t._v(" supports centimeter level positioning via "),r("RouterLink",{attrs:{to:"/zh/advanced_features/rtk-gps.html"}},[t._v("RTK")]),t._v(". Otherwise they are used/connected in the same way.")],1)]),t._v(" "),r("p",[t._v("The module should be mounted on the frame as far away from other electronics as possible, with the direction marker towards the front of the vehicle (separating the compass from other electronics will reduce interference). It must be connected to the "),r("code",[t._v("GPS1")]),t._v(" port using the supplied 8-pin cable.")]),t._v(" "),r("p",[t._v("The diagram below shows a schematic view of the module and its connections.")]),t._v(" "),r("p",[r("img",{attrs:{src:o(516),alt:"Here+ Connector Diagram"}})]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),r("p",[t._v("The GPS module's integrated safety switch is enabled "),r("em",[t._v("by default")]),t._v(" (when enabled, PX4 will not let you arm the vehicle). To disable the safety press and hold the safety switch for 1 second. You can press the safety switch again to enable safety and disarm the vehicle (this can be useful if, for whatever reason, you are unable to disarm the vehicle from your remote control or ground station).")])]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),r("p",[t._v("If you want to use an old-style 6-pin GPS module, the kit comes with a cable that you can use to connect both the GPS and "),r("a",{attrs:{href:"#safety_switch"}},[t._v("Safety Switch")]),t._v(".")])]),t._v(" "),r("p",[r("span",{attrs:{id:"safety_switch"}})]),t._v(" "),r("h2",{attrs:{id:"安全开关"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安全开关"}},[t._v("#")]),t._v(" 安全开关")]),t._v(" "),r("p",[t._v("The "),r("em",[t._v("dedicated")]),t._v(" safety switch that comes with the Cube is only required if you are not using the recommended "),r("a",{attrs:{href:"#gps"}},[t._v("GPS")]),t._v(" (which has an inbuilt safety switch).")]),t._v(" "),r("p",[t._v("If you are flying without the GPS you must attach the switch directly to the "),r("code",[t._v("GPS1")]),t._v(" port in order to be able to arm the vehicle and fly (or via a supplied cable if using an old-style 6-pin GPS).")]),t._v(" "),r("h2",{attrs:{id:"蜂鸣器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#蜂鸣器"}},[t._v("#")]),t._v(" 蜂鸣器")]),t._v(" "),r("p",[t._v("The buzzer provides audio signals to that indicate UAV status. This should be connected to the USB port as shown (no further configuration is required).")]),t._v(" "),r("p",[r("img",{attrs:{src:o(517),alt:"Cube Buzzer"}})]),t._v(" "),r("p",[r("span",{attrs:{id:"rc_control"}})]),t._v(" "),r("h2",{attrs:{id:"无线电遥控"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#无线电遥控"}},[t._v("#")]),t._v(" 无线电遥控")]),t._v(" "),r("p",[t._v("A "),r("RouterLink",{attrs:{to:"/zh/getting_started/rc_transmitter_receiver.html"}},[t._v("remote control (RC) radio system")]),t._v(" is required if you want to "),r("em",[t._v("manually")]),t._v(" control your vehicle (PX4 does not require a radio system for autonomous flight modes).")],1),t._v(" "),r("p",[t._v("You will need to "),r("RouterLink",{attrs:{to:"/zh/getting_started/rc_transmitter_receiver.html"}},[t._v("select a compatible transmitter/receiver")]),t._v(" and then "),r("em",[t._v("bind")]),t._v(" them so that they communicate (read the instructions that come with your specific transmitter/receiver).")],1),t._v(" "),r("p",[t._v("The instructions below show how to connect the different types of receivers.")]),t._v(" "),r("h3",{attrs:{id:"ppm-sum-futaba-s-bus-接收机"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ppm-sum-futaba-s-bus-接收机"}},[t._v("#")]),t._v(" PPM-SUM / Futaba S.Bus 接收机")]),t._v(" "),r("p",[t._v("Connect the ground(-),power(+),and signal(S) wires to the RC pins using the provided 3-wire servo cable.")]),t._v(" "),r("p",[r("img",{attrs:{src:o(518),alt:"Cube - RCIN"}})]),t._v(" "),r("h3",{attrs:{id:"spektrum-satellite-接收机"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#spektrum-satellite-接收机"}},[t._v("#")]),t._v(" Spektrum Satellite 接收机")]),t._v(" "),r("p",[t._v("Spektrum DSM, DSM2, and DSM-X Satellite RC receivers connect to the "),r("strong",[t._v("SPKT/DSM")]),t._v(" port.")]),t._v(" "),r("p",[r("img",{attrs:{src:o(519),alt:"Cube - Spektrum"}})]),t._v(" "),r("h3",{attrs:{id:"pwm-接收机"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pwm-接收机"}},[t._v("#")]),t._v(" PWM 接收机")]),t._v(" "),r("p",[t._v("The Cube cannot directly connect to PPM or PWM receivers that have an "),r("em",[t._v("individual wire for each channel")]),t._v(". PWM receivers must therefore connect to the "),r("strong",[t._v("RCIN")]),t._v(" port "),r("em",[t._v("via")]),t._v(" a PPM encoder module, which may be purchased from hex.aero or proficnc.com.")]),t._v(" "),r("h2",{attrs:{id:"电源"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#电源"}},[t._v("#")]),t._v(" 电源")]),t._v(" "),r("p",[t._v("Cube is typically powered from a Lithium Ion Polymer (LiPo) Battery via a Power Module (supplied with the kit) that is connected to the "),r("strong",[t._v("POWER1")]),t._v(" port. The power module provides reliable supply and voltage/current indication to the board and may separately supply power to ESCs that are used to drive motors on a multicopter vehicle.")]),t._v(" "),r("p",[t._v("A typical power setup for a Multicopter vehicle is shown below.")]),t._v(" "),r("p",[r("img",{attrs:{src:o(520),alt:"Power Setup - MC"}})]),t._v(" "),r("p",[r("span",{attrs:{id:"telemetry"}})]),t._v(" "),r("h2",{attrs:{id:"数传系统-可选"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#数传系统-可选"}},[t._v("#")]),t._v(" 数传系统（可选）")]),t._v(" "),r("p",[t._v("A telemetry system allows you to communicate with, monitor, and control a vehicle in flight from a ground station (for example, you can direct the UAV to a particular position, or upload a new mission).")]),t._v(" "),r("p",[t._v("The communication channel is via "),r("RouterLink",{attrs:{to:"/zh/telemetry/"}},[t._v("Telemetry Radios")]),t._v(". The vehicle-based radio should be connected to the "),r("strong",[t._v("TELEM1")]),t._v(" port (if connected to this port, no further configuration is required). The other radio is connected to your ground station computer or mobile device (usually via USB).")],1),t._v(" "),r("p",[r("img",{attrs:{src:o(521),alt:"Telemetry Radio"}})]),t._v(" "),r("h2",{attrs:{id:"sd-卡-可选"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sd-卡-可选"}},[t._v("#")]),t._v(" SD 卡（可选）")]),t._v(" "),r("p",[t._v("SD cards are highly recommended as they are needed to "),r("RouterLink",{attrs:{to:"/zh/getting_started/flight_reporting.html"}},[t._v("log and analyse flight details")]),t._v(", to run missions, and to use UAVCAN-bus hardware. Insert the Micro-SD card into Cube as shown (if not already present).")],1),t._v(" "),r("p",[r("img",{attrs:{src:o(522),alt:"Cube - Mount SDCard"}})]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),r("p",[t._v("For more information see "),r("RouterLink",{attrs:{to:"/zh/getting_started/px4_basic_concepts.html#sd_cards"}},[t._v("Basic Concepts > SD Cards (Removable Memory)")]),t._v(".")],1)]),t._v(" "),r("h2",{attrs:{id:"电机"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#电机"}},[t._v("#")]),t._v(" 电机")]),t._v(" "),r("p",[t._v("Motors/servos are connected to the "),r("strong",[t._v("MAIN")]),t._v(" and "),r("strong",[t._v("AUX")]),t._v(" ports in the order specified for your vehicle in the "),r("RouterLink",{attrs:{to:"/zh/airframes/airframe_reference.html"}},[t._v("Airframe Reference")]),t._v(".")],1),t._v(" "),r("p",[r("img",{attrs:{src:o(523),alt:"Cube - Motor Connections"}})]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),r("p",[t._v('This reference lists the output port to motor/servo mapping for all supported air and ground frames (if your frame is not listed in the reference then use a "generic" airframe of the correct type).')])]),t._v(" "),r("p",[t._v(":::caution\nThe mapping is not consistent across frames (e.g. you can't rely on the throttle being on the same output for all plane frames). Make sure to use the correct mapping for your vehicle.\n:::")]),t._v(" "),r("h2",{attrs:{id:"其它外设"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#其它外设"}},[t._v("#")]),t._v(" 其它外设")]),t._v(" "),r("p",[t._v("The wiring and configuration of optional/less common components is covered within the topics for individual "),r("RouterLink",{attrs:{to:"/zh/peripherals/"}},[t._v("peripherals")]),t._v(".")],1),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),r("p",[t._v("If connecting peripherals to the port labeled "),r("code",[t._v("GPS2")]),t._v(", assign the PX4 "),r("RouterLink",{attrs:{to:"/zh/peripherals/serial_configuration.html"}},[t._v("serial port configuration parameter")]),t._v(" for the hardware to "),r("code",[t._v("TEL4")]),t._v(" (not GPS2).")],1)]),t._v(" "),r("h2",{attrs:{id:"配置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),r("p",[t._v("Configuration is performed using "),r("a",{attrs:{href:"http://qgroundcontrol.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGroundContro"),r("OutboundLink")],1),t._v(".")]),t._v(" "),r("p",[t._v("After downloading, installing and running "),r("em",[t._v("QGroundControl")]),t._v(", connect the board to your computer as shown.")]),t._v(" "),r("p",[r("img",{attrs:{src:o(524),alt:"Cube - USB Connection to Computer"}})]),t._v(" "),r("p",[t._v("Basic/common configuration information is covered in: "),r("RouterLink",{attrs:{to:"/zh/config/"}},[t._v("Autopilot Configuration")]),t._v(".")],1),t._v(" "),r("p",[t._v("QuadPlane specific configuration is covered here: "),r("RouterLink",{attrs:{to:"/zh/config_vtol/vtol_quad_configuration.html"}},[t._v("QuadPlane VTOL Configuration")])],1),t._v(" "),r("h2",{attrs:{id:"更多信息"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#更多信息"}},[t._v("#")]),t._v(" 更多信息")]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk-2.html"}},[t._v("Cube Black")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/zh/flight_controller/cubepilot_cube_yellow.html"}},[t._v("Cube Yellow")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/zh/flight_controller/cubepilot_cube_orange.html"}},[t._v("Cube Orange")])],1),t._v(" "),r("li",[t._v("Cube Docs (Manufacturer):\n"),r("ul",[r("li",[r("a",{attrs:{href:"https://docs.cubepilot.org/user-guides/autopilot/the-cube-module-overview",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cube Module Overview"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://docs.cubepilot.org/user-guides/autopilot/the-cube-user-manual",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cube User Manual"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://docs.cubepilot.org/user-guides/carrier-boards/mini-carrier-board",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mini Carrier Board"),r("OutboundLink")],1)])])])])])}),[],!1,null,null,null);e.default=a.exports},343:function(t,e,o){t.exports=o.p+"assets/img/cube_orange_hero.944ff463.jpg"},344:function(t,e,o){t.exports=o.p+"assets/img/cube_black_hero.6173ab1f.png"},345:function(t,e,o){t.exports=o.p+"assets/img/cube_yellow_hero.77cbe270.jpg"},512:function(t,e,o){t.exports=o.p+"assets/img/cube_accessories.0be610f8.jpg"},513:function(t,e,o){t.exports=o.p+"assets/img/cube_wiring_overview.5b844fee.jpg"},514:function(t,e,o){t.exports=o.p+"assets/img/cube_mount_front.1a37ae44.jpg"},515:function(t,e,o){t.exports=o.p+"assets/img/cube_mount_plate_screws.def62b56.jpg"},516:function(t,e,o){t.exports=o.p+"assets/img/here_plus_connector.e4b10b83.png"},517:function(t,e,o){t.exports=o.p+"assets/img/cube_buzzer.b528b592.jpg"},518:function(t,e,o){t.exports=o.p+"assets/img/cube_rc_in.868e004f.jpg"},519:function(t,e,o){t.exports=o.p+"assets/img/cube_rc_spektrum.7c514293.jpg"},520:function(t,e,o){t.exports=o.p+"assets/img/cube_wiring_power_mc.16cfc115.jpg"},521:function(t,e,o){t.exports=o.p+"assets/img/cube_schematic_telemetry.d2afffe2.jpg"},522:function(t,e,o){t.exports=o.p+"assets/img/cube_sdcard.193e2b07.jpg"},523:function(t,e,o){t.exports=o.p+"assets/img/cube_main_aux_outputs.c67bd070.jpg"},524:function(t,e,o){t.exports=o.p+"assets/img/cube_usb_connection.dc108f09.jpg"}}]);