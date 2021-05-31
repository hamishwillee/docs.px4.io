(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{2359:function(t,e,a){"use strict";a.r(e);var o=a(19),r=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"cuav-v5-快速接线指南"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cuav-v5-快速接线指南"}},[t._v("#")]),t._v(" CUAV V5+ 快速接线指南")]),t._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[t._v("PX4 does not manufacture this (or any) autopilot. Contact the [manufacturer](https://store.cuav.net/) for hardware support or compliance issues.")])]),t._v(" "),o("p",[t._v("This quick start guide shows how to power the "),o("RouterLink",{attrs:{to:"/zh/flight_controller/cuav_v5_plus.html"}},[t._v("CUAV V5+")]),t._v(" flight controller and connect its most important peripherals.")],1),t._v(" "),o("p",[o("img",{attrs:{src:a(350),alt:"V5+ AutoPilot - Hero Image"}})]),t._v(" "),o("h2",{attrs:{id:"接线图概述"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#接线图概述"}},[t._v("#")]),t._v(" 接线图概述")]),t._v(" "),o("p",[t._v("The image below shows how to connect the most important sensors and peripherals (except the motor and servo outputs). We'll go through each of these in detail in the following sections.")]),t._v(" "),o("p",[o("img",{attrs:{src:a(432),alt:"V5+ AutoPilot"}})]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",{staticStyle:{"text-align":"left"}},[t._v("主要接口")]),t._v(" "),o("th",{staticStyle:{"text-align":"left"}},[t._v("功能")])])]),t._v(" "),o("tbody",[o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("Power1")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("连接到电源模块（电流计）。 带有模拟电压和电流检测的电源输入。 请不要连接数字电源模块（比如UAVCAN电流计）！")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("Power2")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("连接I2C总线的智能电池")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("TF CARD")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("用于日志存储的SD卡（出厂时SD已经装配好）。")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("M1~M8")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("PWM输出接口 可以使用它控制电机或舵机。")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("A1~A6")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("PWM 输出接口。 可以使用它控制电机或舵机。")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("DSU7")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("用于FMU调试，读取调试信息。")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("I2C1/I2C2")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("连接I2C总线设备；比如外部指南针。")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("CAN1/CAN2")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("用于连接UAVCAN设备,比如CAN GPS。")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("TYPE-C(USB)")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("用于连接计算机，建立飞行控制器和计算机之间的通信；比如刷写固件。")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("SBUS OUT")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("连接SBUS总线控制的相机和云台")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("GPS&SAFETY")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("连接到Neo GPS，其中包括GPS、安全开关、蜂鸣器接口。")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("TELEM1/TELEM2")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("连接到数传电台")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("DSM/SBUS/RSSI")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("包含DSM、SBUS、RSSI信号输入接口；DSM接口可以连接DSM卫星接收机，SBUS接口可以连接SBUS总线的遥控器接收机，RSSI连接RSSI信号强度回传模块。")])])])]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),o("p",[t._v("For more interface information, please read "),o("a",{attrs:{href:"http://manual.cuav.net/V5-Plus.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("V5+ Manual"),o("OutboundLink")],1),t._v(".")])]),t._v(" "),o("p",[o("img",{attrs:{src:a(432),alt:"V5+ AutoPilot"}})]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),o("p",[t._v("If the controller cannot be mounted in the recommended/default orientation (e.g. due to space constraints) you will need to configure the autopilot software with the orientation that you actually used: "),o("RouterLink",{attrs:{to:"/zh/advanced_features/rtk-gps.html"}},[t._v("Flight Controller Orientation")]),t._v(".")],1)]),t._v(" "),o("h2",{attrs:{id:"gps-罗盘-安全开关-led"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#gps-罗盘-安全开关-led"}},[t._v("#")]),t._v(" GPS + 罗盘 + 安全开关 + LED")]),t._v(" "),o("p",[t._v("The recommended GPS module is the "),o("em",[t._v("Neo v2 GPS")]),t._v(", which contains GPS, compass, safety switch, buzzer, LED status light.")]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),o("p",[t._v("Other GPS modules may not work (see "),o("RouterLink",{attrs:{to:"/zh/flight_controller/cuav_v5_nano.html#compatibility_gps"}},[t._v("this compatibility issue")]),t._v(")).")],1)]),t._v(" "),o("p",[t._v("The GPS/Compass module should be mounted on the frame as far away from other electronics as possible, with the direction marker towards the front of the vehicle ("),o("em",[t._v("Neo v2 GPS")]),t._v(" arrow is in the same direction as the flight control arrow). Connect to the flight control GPS interface using a cable.")]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),o("p",[t._v("If you use the "),o("a",{attrs:{href:"http://doc.cuav.net/gps/neo-v2-pro/en/#enable",target:"_blank",rel:"noopener noreferrer"}},[t._v("NEO V2 PRO GNSS (CAN GPS)"),o("OutboundLink")],1),t._v(", please use the cable to connect to the flight control CAN interface.")])]),t._v(" "),o("p",[o("img",{attrs:{src:a(519),alt:"V5+ AutoPilot"}})]),t._v(" "),o("h2",{attrs:{id:"安全开关"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#安全开关"}},[t._v("#")]),t._v(" 安全开关")]),t._v(" "),o("p",[t._v("The dedicated safety switch that comes with the V5+ is only required if you are not using the recommended "),o("em",[t._v("Neo V2 GPS")]),t._v(" (which has an inbuilt safety switch).")]),t._v(" "),o("p",[t._v("If you are flying without the GPS you must attach the switch directly to the "),o("code",[t._v("GPS1")]),t._v(" port in order to be able to arm the vehicle and fly (if you use the old 6-pin GPS, please read the definition of the bottom interface to change the line).")]),t._v(" "),o("h2",{attrs:{id:"蜂鸣器"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#蜂鸣器"}},[t._v("#")]),t._v(" 蜂鸣器")]),t._v(" "),o("p",[t._v("If you do not use the recommended GPS, the buzzer may not work.")]),t._v(" "),o("h2",{attrs:{id:"遥控器"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#遥控器"}},[t._v("#")]),t._v(" 遥控器")]),t._v(" "),o("p",[t._v("A remote control (RC) radio system is required if you want to manually control your vehicle (PX4 does not require a radio system for autonomous flight modes). You will need to select a compatible transmitter/receiver and then bind them so that they communicate (read the instructions that come with your specific transmitter/receiver).")]),t._v(" "),o("p",[t._v("The figure below shows how you can access your remote receiver (please find the SBUS cable in the kit).")]),t._v(" "),o("p",[o("img",{attrs:{src:a(520),alt:"V5+ AutoPilot"}})]),t._v(" "),o("h2",{attrs:{id:"spektrum-卫星接收器"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#spektrum-卫星接收器"}},[t._v("#")]),t._v(" Spektrum 卫星接收器")]),t._v(" "),o("p",[t._v("The V5+ has a dedicated DSM cable. If using a Spektrum satellite receiver, this should be connected to the flight controller DSM/SBUS/RSSI interface.")]),t._v(" "),o("h2",{attrs:{id:"电源"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#电源"}},[t._v("#")]),t._v(" 电源")]),t._v(" "),o("p",[t._v("The V5+ kit includes the "),o("em",[t._v("HV_PM")]),t._v(" module, which supports 2~14S LiPo batteries. Connect the 6pin connector of the "),o("em",[t._v("HW_PM")]),t._v(" module to the flight control "),o("code",[t._v("Power1")]),t._v(" interface.")]),t._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),o("p",[t._v("The supplied power module is unfused. Power "),o("strong",[t._v("must")]),t._v(" be turned off while connecting peripherals.")])]),t._v(" "),o("p",[o("img",{attrs:{src:a(431),alt:"V5+ AutoPilot"}})]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),o("p",[t._v("The power module is not a power source for peripherals connected to the PWM outputs. If you're connecting servos/actuators you will need to separately power them using a BEC.")])]),t._v(" "),o("h2",{attrs:{id:"telemetry-system-optional"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#telemetry-system-optional"}},[t._v("#")]),t._v(" Telemetry System (Optional)")]),t._v(" "),o("p",[t._v("A telemetry system allows you to communicate with, monitor, and control a vehicle in flight from a ground station (for example, you can direct the UAV to a particular position, or upload a new mission).")]),t._v(" "),o("p",[t._v("The communication channel is via Telemetry Radios. The vehicle-based radio should be connected to either the "),o("code",[t._v("TELEM1")]),t._v(" or "),o("code",[t._v("TELEM2")]),t._v(" port (if connected to these ports, no further configuration is required). The other radio is connected to your ground station computer or mobile device (usually via USB).")]),t._v(" "),o("p",[o("img",{attrs:{src:a(521),alt:"V5+ AutoPilot"}})]),t._v(" "),o("p",[o("span",{attrs:{id:"sd_card"}})]),t._v(" "),o("h2",{attrs:{id:"sd-卡"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#sd-卡"}},[t._v("#")]),t._v(" SD 卡")]),t._v(" "),o("p",[t._v("An "),o("RouterLink",{attrs:{to:"/zh/getting_started/px4_basic_concepts.html#sd_cards"}},[t._v("SD card")]),t._v(" is inserted in the factory (you do not need to do anything).")],1),t._v(" "),o("h2",{attrs:{id:"电机"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#电机"}},[t._v("#")]),t._v(" 电机")]),t._v(" "),o("p",[t._v("Motors/servos are connected to the MAIN and AUX ports in the order specified for your vehicle in the "),o("RouterLink",{attrs:{to:"/zh/airframes/airframe_reference.html"}},[t._v("Airframes Reference")]),t._v(".")],1),t._v(" "),o("p",[o("img",{attrs:{src:a(522),alt:"V5+ AutoPilot"}})]),t._v(" "),o("h2",{attrs:{id:"针脚定义"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#针脚定义"}},[t._v("#")]),t._v(" 针脚定义")]),t._v(" "),o("p",[t._v("Download "),o("strong",[t._v("V5+")]),t._v(" pinouts from "),o("a",{attrs:{href:"http://manual.cuav.net/V5-Plus.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),o("OutboundLink")],1),t._v(".")]),t._v(" "),o("h2",{attrs:{id:"更多信息"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#更多信息"}},[t._v("#")]),t._v(" 更多信息")]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/zh/frames_multicopter/dji_f450_cuav_5plus.html"}},[t._v("Airframe build-log using CUAV v5+ on a DJI FlameWheel450")])],1),t._v(" "),o("li",[o("a",{attrs:{href:"http://manual.cuav.net/V5-Plus.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("CUAV V5+ Manual"),o("OutboundLink")],1),t._v(" (CUAV)")]),t._v(" "),o("li",[o("a",{attrs:{href:"http://doc.cuav.net/flight-controller/v5-autopilot/en/v5+.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("CUAV V5+ docs"),o("OutboundLink")],1),t._v(" (CUAV)")]),t._v(" "),o("li",[o("a",{attrs:{href:"https://docs.google.com/spreadsheets/d/1-n0__BYDedQrc_2NHqBenG1DNepAgnHpSGglke-QQwY/edit#gid=912976165",target:"_blank",rel:"noopener noreferrer"}},[t._v("FMUv5 reference design pinout"),o("OutboundLink")],1),t._v(" (CUAV)")]),t._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/cuav",target:"_blank",rel:"noopener noreferrer"}},[t._v("CUAV Github"),o("OutboundLink")],1),t._v(" (CUAV)")]),t._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/cuav/hardware/tree/master/V5_Autopilot/V5%2B/V5%2BBASE",target:"_blank",rel:"noopener noreferrer"}},[t._v("Base board design reference"),o("OutboundLink")],1),t._v(" (CUAV)")])])])}),[],!1,null,null,null);e.default=r.exports},350:function(t,e,a){t.exports=a.p+"assets/img/v5+_01.e440c966.png"},431:function(t,e,a){t.exports=a.p+"assets/img/v5+_quickstart_01.709e00df.png"},432:function(t,e,a){t.exports=a.p+"assets/img/v5+_quickstart_02.bf70c46a.png"},519:function(t,e,a){t.exports=a.p+"assets/img/v5+_quickstart_03.0e9a2e9f.png"},520:function(t,e,a){t.exports=a.p+"assets/img/v5+_quickstart_04.b866bc60.png"},521:function(t,e,a){t.exports=a.p+"assets/img/v5+_quickstart_06.cc819a92.png"},522:function(t,e,a){t.exports=a.p+"assets/img/v5+_quickstart_07.f496a32c.png"}}]);