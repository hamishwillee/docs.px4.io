(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{3211:function(t,e,a){"use strict";a.r(e);var s=a(19),o=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"雷迅cuav-v5-nano飞控接线快速入门"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#雷迅cuav-v5-nano飞控接线快速入门"}},[t._v("#")]),t._v(" 雷迅CUAV V5 nano飞控接线快速入门")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("PX4 没有制造这款（或任何一款）飞控。 若需要硬件支持或咨询合规问题，请联系 [制造商](https://store.cuav.net/)。")])]),t._v(" "),s("p",[t._v("本快速入门指南介绍了如何为 "),s("RouterLink",{attrs:{to:"/zh/flight_controller/cuav_v5_nano.html"}},[t._v("CUAV V5 nano")]),t._v(" 飞控供电以及如何连接其最主要的外部设备。")],1),t._v(" "),s("p",[s("img",{attrs:{src:a(361),alt:"Nano Hero Image"}})]),t._v(" "),s("h2",{attrs:{id:"接线图概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#接线图概述"}},[t._v("#")]),t._v(" 接线图概述")]),t._v(" "),s("p",[t._v("下图展示了如何连接最重要的传感器和外围设备（电机和伺服舵机输出除外）。 我们将在下面各节中介绍它们的细节。")]),t._v(" "),s("p",[s("img",{attrs:{src:a(519),alt:"快速入门"}})]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("主要接口")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("功能")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("电源")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("连接电源模块；提供能量、模拟电压和电流测量。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("PM2")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("RouterLink",{attrs:{to:"/zh/flight_controller/cuav_v5_nano.html#compatibility_pm2"}},[t._v("不要与 PX4 一起使用 ")])],1)]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("TF CARD")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("用于日志存储的SD卡（随卡提供）")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("M1~M8")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("PWM 输出接口。 可以使用它控制电机或舵机。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("A1~A3")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Capture pins (not "),s("em",[t._v("currently")]),t._v(" supported on PX4).")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("nARMED")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("表示 FMU 处于待命状态。 低电平时表示激活（待命时是低电平）。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("DSU7")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("用于 FMU 调试，读取调试信息。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("I2C2/I2C3/I2C4")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("连接I2C总线设备；比如外部的罗盘。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("CAN1/CAN2")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("用于连接 UAVCAN 设备，比如 CAN GPS。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("TYPE-C(USB)")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("连接到计算机，以便在飞控和计算机之间进行通信，例如加载固件。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("GPS&SAFETY")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("连接到 Neo GPS，其中包括GPS、安全开关、蜂鸣器接口。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("TELEM1/TELEM2")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("连接到数传电台")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("DSM/SBUS/RSSI")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("包含DSM、SBUS、RSSI信号输入接口；DSM接口可以连接DSM卫星接收机，SBUS接口可以连接SBUS总线的遥控器接收机，RSSI连接RSSI信号强度回传模块。")])])])]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),s("p",[t._v("For more interface information, please read "),s("a",{attrs:{href:"http://manual.cuav.net/V5-nano.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("V5 nano Manual"),s("OutboundLink")],1),t._v(".")])]),t._v(" "),s("p",[s("img",{attrs:{src:a(520),alt:"quickstart"}})]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),s("p",[t._v("If the controller cannot be mounted in the recommended/default orientation (e.g. due to space constraints) you will need to configure the autopilot software with the orientation that you actually used: "),s("RouterLink",{attrs:{to:"/zh/gps_compass/rtk_gps.html"}},[t._v("Flight Controller Orientation")]),t._v(". 使用电缆连接到飞控的 GPS 接口。")],1),t._v(" "),s("h2",{attrs:{id:"gps-罗盘-安全开关-led"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gps-罗盘-安全开关-led"}},[t._v("#")]),t._v(" GPS + 罗盘 + 安全开关 + LED")]),t._v(" "),s("p",[t._v("The recommended GPS module is the "),s("em",[t._v("Neo v2 GPS")]),t._v(", which contains GPS, compass, safety switch, buzzer, LED status light.")]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),s("p",[t._v("Other GPS modules may not work (see "),s("RouterLink",{attrs:{to:"/zh/flight_controller/cuav_v5_nano.html#compatibility_gps"}},[t._v("this compatibility issue")]),t._v(").")],1)])]),t._v(" "),s("p",[t._v("The GPS/Compass module should be "),s("RouterLink",{attrs:{to:"/zh/assembly/mount_gps_compass.html"}},[t._v("mounted on the frame")]),t._v(" as far away from other electronics as possible, with the direction marker towards the front of the vehicle (Neo GPS arrow is in the same direction as the flight control arrow). Connect to the flight control GPS interface using a cable.")],1),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),s("p",[t._v("If you use CAN GPS, please use the cable to connect to the flight control CAN interface.")])]),t._v(" "),s("p",[s("img",{attrs:{src:a(521),alt:"quickstart"}})]),t._v(" "),s("h2",{attrs:{id:"安全开关"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安全开关"}},[t._v("#")]),t._v(" 安全开关")]),t._v(" "),s("p",[t._v("The dedicated safety switch that comes with the V5+ is only required if you are not using the recommended "),s("em",[t._v("Neo v2 GPS")]),t._v(" (which has an inbuilt safety switch).")]),t._v(" "),s("p",[t._v("If you are flying without the GPS you must attach the switch directly to the "),s("code",[t._v("GPS1")]),t._v(" port in order to be able to arm the vehicle and fly (If you use the old 6-pin GPS, please read the definition of the bottom interface to change the line).")]),t._v(" "),s("h2",{attrs:{id:"蜂鸣器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#蜂鸣器"}},[t._v("#")]),t._v(" 蜂鸣器")]),t._v(" "),s("p",[t._v("If you do not use the recommended "),s("em",[t._v("Neo v2 GPS")]),t._v(" the buzzer may not work.")]),t._v(" "),s("h2",{attrs:{id:"遥控器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#遥控器"}},[t._v("#")]),t._v(" 遥控器")]),t._v(" "),s("p",[t._v("v5 nano"),t._v("套件包括了支持 2~14S 锂聚合物电池的 "),s("em",[t._v("HV\\u PM")]),t._v(" 模块。 将 "),s("em",[t._v("HW\\u PM")]),t._v(" 模块的6针连接器连接到飞控的"),s("code",[t._v("电源")]),t._v("接口。")]),t._v(" "),s("p",[t._v("The figure below shows how you can access your remote receiver (please find the S.Bus cable in the kit)")]),t._v(" "),s("p",[s("img",{attrs:{src:a(522),alt:"quickstart"}})]),t._v(" "),s("h2",{attrs:{id:"spektrum-卫星接收器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#spektrum-卫星接收器"}},[t._v("#")]),t._v(" Spektrum 卫星接收器")]),t._v(" "),s("p",[t._v("通信频道是通过数传无线电实现的。 机载的无线数传模块应连接到 "),s("strong",[t._v("TELEM1")]),t._v(" 或者 "),s("strong",[t._v("TELEM2")]),t._v(" 端口（如果连接到这些端口，则无需进一步配置）。")]),t._v(" "),s("h2",{attrs:{id:"电源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#电源"}},[t._v("#")]),t._v(" 电源")]),t._v(" "),s("p",[t._v("The "),s("em",[t._v("v5 nano")]),t._v(" kit includes the "),s("em",[t._v("HV_PM")]),t._v(" module, which supports 2~14S LiPo batteries. Connect the 6pin connector of the "),s("em",[t._v("HW_PM")]),t._v(" module to the flight control "),s("code",[t._v("Power")]),t._v(" interface.")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[t._v("The supplied power module is unfused. Power "),s("strong",[t._v("must")]),t._v(" be turned off while connecting peripherals.")])]),t._v(" "),s("p",[s("img",{attrs:{src:a(429),alt:"quickstart"}})]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),s("p",[t._v("The power module is not a power source for peripherals connected to the PWM outputs.\nIf you're connecting servos/actuators you will need to separately power them using a BEC.")])]),t._v(" "),s("h2",{attrs:{id:"数传系统-可选"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数传系统-可选"}},[t._v("#")]),t._v(" 数传系统（可选）")]),t._v(" "),s("p",[t._v("A telemetry system allows you to communicate with, monitor, and control a vehicle in flight from a ground station (for example, you can direct the UAV to a particular position, or upload a new mission).")]),t._v(" "),s("p",[t._v("The communication channel is via Telemetry Radios. The vehicle-based radio should be connected to the "),s("strong",[t._v("TELEM1")]),t._v(" or "),s("strong",[t._v("TELEM2")]),t._v(" port (if connected to these ports, no further configuration is required). The other radio is connected to your ground station computer or mobile device (usually via USB).")]),t._v(" "),s("p",[s("img",{attrs:{src:a(523),alt:"quickstart"}})]),t._v(" "),s("p",[s("a",{attrs:{id:"sd_card"}})]),t._v(" "),s("h2",{attrs:{id:"sd-卡"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sd-卡"}},[t._v("#")]),t._v(" SD 卡")]),t._v(" "),s("p",[t._v("An "),s("RouterLink",{attrs:{to:"/zh/getting_started/px4_basic_concepts.html#sd-cards-removable-memory"}},[t._v("SD card")]),t._v(" is inserted in the factory (you do not need to do anything).")],1),t._v(" "),s("h2",{attrs:{id:"电机"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#电机"}},[t._v("#")]),t._v(" 电机")]),t._v(" "),s("p",[t._v("Motors/servos are connected to the MAIN ports in the order specified for your vehicle in the "),s("RouterLink",{attrs:{to:"/zh/airframes/airframe_reference.html"}},[t._v("Airframes Reference")]),t._v(".")],1),t._v(" "),s("p",[s("img",{attrs:{src:a(429),alt:"快速入门"}})]),t._v(" "),s("h2",{attrs:{id:"针脚定义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#针脚定义"}},[t._v("#")]),t._v(" 针脚定义")]),t._v(" "),s("p",[s("img",{attrs:{src:a(524),alt:"V5 nano pinouts"}})]),t._v(" "),s("h2",{attrs:{id:"更多信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更多信息"}},[t._v("#")]),t._v(" 更多信息")]),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/zh/frames_multicopter/dji_f450_cuav_5nano.html"}},[t._v("Airframe buildlog using CUAV v5 nano on a DJI FlameWheel450")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/zh/flight_controller/cuav_v5_nano.html"}},[t._v("CUAV V5 nano")])],1),t._v(" "),s("li",[s("a",{attrs:{href:"http://manual.cuav.net/V5-nano.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("V5 nano manual"),s("OutboundLink")],1),t._v(" (CUAV)")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://docs.google.com/spreadsheets/d/1-n0__BYDedQrc_2NHqBenG1DNepAgnHpSGglke-QQwY/edit#gid=912976165",target:"_blank",rel:"noopener noreferrer"}},[t._v("FMUv5 reference design pinout"),s("OutboundLink")],1),t._v(" (CUAV)")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/cuav",target:"_blank",rel:"noopener noreferrer"}},[t._v("CUAV Github"),s("OutboundLink")],1),t._v("  (CUAV)")])])])}),[],!1,null,null,null);e.default=o.exports},361:function(t,e,a){t.exports=a.p+"assets/img/v5_nano_01.3521bdcc.png"},429:function(t,e,a){t.exports=a.p+"assets/img/v5_nano_quickstart_06.34392241.png"},519:function(t,e,a){t.exports=a.p+"assets/img/v5_nano_quickstart_02.d140e43d.png"},520:function(t,e,a){t.exports=a.p+"assets/img/v5_nano_quickstart_03.fe3368b3.png"},521:function(t,e,a){t.exports=a.p+"assets/img/v5_nano_quickstart_04.9fea41bc.png"},522:function(t,e,a){t.exports=a.p+"assets/img/v5_nano_quickstart_05.b3b133f3.png"},523:function(t,e,a){t.exports=a.p+"assets/img/v5_nano_quickstart_07.26bbea38.png"},524:function(t,e,a){t.exports=a.p+"assets/img/v5_nano_pinouts.adb5edc0.png"}}]);