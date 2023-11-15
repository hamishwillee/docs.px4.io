(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{3295:function(t,e,o){"use strict";o.r(e);var r=o(19),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"pixhawk-4-接线快速入门"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pixhawk-4-接线快速入门"}},[t._v("#")]),t._v(" Pixhawk 4 接线快速入门")]),t._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[t._v("PX4 does not manufacture this (or any) autopilot. Contact the [manufacturer](https://holybro.com/) for hardware support or compliance issues.")])]),t._v(" "),r("p",[t._v("This quick start guide shows how to power the "),r("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk4.html"}},[t._v("Pixhawk 4")]),r("sup",[t._v("®")]),t._v(" flight controller and connect its most important peripherals.")],1),t._v(" "),r("img",{attrs:{src:o(366),width:"420px",title:"Pixhawk4 Image"}}),t._v(" "),r("h2",{attrs:{id:"接线图概览"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#接线图概览"}},[t._v("#")]),t._v(" 接线图概览")]),t._v(" "),r("p",[t._v("The image below shows how to connect the most important sensors and peripherals (except the motor and servo outputs). We'll go through each of these in detail in the following sections.")]),t._v(" "),r("p",[r("img",{attrs:{src:o(564),alt:"Pixhawk 4 Wiring Overview"}})]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),r("p",[t._v("More information about available ports can be found here: "),r("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk4.html#connectors"}},[t._v("Pixhawk 4 > Connections")]),t._v(".")],1)]),t._v(" "),r("h2",{attrs:{id:"飞控的安装和方向"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#飞控的安装和方向"}},[t._v("#")]),t._v(" 飞控的安装和方向")]),t._v(" "),r("p",[r("em",[t._v("Pixhawk 4")]),t._v(" should be mounted on the frame using vibration-damping foam pads (included in the kit). It should be positioned as close to your vehicle’s center of gravity as possible, oriented top-side up with the arrow pointing towards the front of the vehicle.")]),t._v(" "),r("img",{attrs:{src:o(565),align:"center"}}),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),r("p",[t._v("If the controller cannot be mounted in the recommended/default orientation (e.g. due to space constraints) you will need to configure the autopilot software with the orientation that you actually used: "),r("RouterLink",{attrs:{to:"/zh/config/flight_controller_orientation.html"}},[t._v("Flight Controller Orientation")]),t._v(".")],1)]),t._v(" "),r("h2",{attrs:{id:"gps-指南针-蜂鸣器-安全开关-led"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#gps-指南针-蜂鸣器-安全开关-led"}},[t._v("#")]),t._v(" GPS + 指南针 + 蜂鸣器 + 安全开关 + LED")]),t._v(" "),r("p",[t._v("Attach the provided GPS with integrated compass, safety switch, buzzer and LED to the "),r("strong",[t._v("GPS MODULE")]),t._v(" port.")]),t._v(" "),r("p",[t._v("The GPS/Compass should be "),r("RouterLink",{attrs:{to:"/zh/assembly/mount_gps_compass.html"}},[t._v("mounted on the frame")]),t._v(" as far away from other electronics as possible, with the direction marker towards the front of the vehicle (separating the compass from other electronics will reduce interference).")],1),t._v(" "),r("p",[r("img",{attrs:{src:o(357),alt:"Connect compass/GPS to Pixhawk 4"}})]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),r("p",[t._v("The GPS module's integrated safety switch is enabled "),r("em",[t._v("by default")]),t._v(" (when enabled, PX4 will not let you arm the vehicle). To disable the safety press and hold the safety switch for 1 second. You can press the safety switch again to enable safety and disarm the vehicle (this can be useful if, for whatever reason, you are unable to disarm the vehicle from your remote control or ground station).")])]),t._v(" "),r("h2",{attrs:{id:"电源"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#电源"}},[t._v("#")]),t._v(" 电源")]),t._v(" "),r("p",[t._v("Connect the output of the "),r("em",[t._v("Power Management Board")]),t._v(" (PM board) that comes with the kit to one of the "),r("strong",[t._v("POWER")]),t._v(" bricks of "),r("em",[t._v("Pixhawk 4")]),t._v(" using a 6-wire cable. The PM input "),r("strong",[t._v("2~12S")]),t._v(" will be connected to your LiPo battery. The connections of Power Management Board, including power supply and signal connections to the ESCs and servos, are explained in the table below. Note that the PM board does not supply power to the servos via + and - pins of "),r("strong",[t._v("FMU PWM-OUT")]),t._v(".")]),t._v(" "),r("p",[t._v("The image below shows the power management board provided with "),r("em",[t._v("Pixhawk 4")]),t._v(".")]),t._v(" "),r("p",[r("img",{attrs:{src:o(367),alt:"Pixhawk 4 - Power Management Board"}})]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),r("p",[t._v("If using a plane or rover, the 8 pin power (+) rail of "),r("strong",[t._v("FMU PWM-OUT")]),t._v(" will need to be separately powered in order to drive servos for rudders, elevons etc. To do this, the power rail needs to be connected to a BEC equipped ESC or a standalone 5V BEC or a 2S LiPo battery. Be careful with the voltage of servo you are going to use here.")])]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("针脚&连接器")]),t._v(" "),r("th",[t._v("功能")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("I/O PWM-IN")]),t._v(" "),r("td",[t._v("See note below for connection to "),r("em",[t._v("Pixhawk 4")])])]),t._v(" "),r("tr",[r("td",[t._v("M1")]),t._v(" "),r("td",[t._v("I/O PWM OUT 1：将信号线连接到到电机 1 的电调")])]),t._v(" "),r("tr",[r("td",[t._v("M2")]),t._v(" "),r("td",[t._v("I/O PWM OUT 2：将信号线连接到到电机 2 的电调")])]),t._v(" "),r("tr",[r("td",[t._v("M3")]),t._v(" "),r("td",[t._v("I/O PWM OUT 3：将信号线连接到到电机 3 的电调")])]),t._v(" "),r("tr",[r("td",[t._v("M4")]),t._v(" "),r("td",[t._v("I/O PWM OUT 4：将信号线连接到到电机 4 的电调")])]),t._v(" "),r("tr",[r("td",[t._v("M5")]),t._v(" "),r("td",[t._v("I/O PWM OUT 5：将信号线连接到到电机 5 的电调")])]),t._v(" "),r("tr",[r("td",[t._v("M6")]),t._v(" "),r("td",[t._v("I/O PWM OUT 6：将信号线连接到到电机 6 的电调")])]),t._v(" "),r("tr",[r("td",[t._v("M7")]),t._v(" "),r("td",[t._v("I/O PWM OUT 7：将信号线连接到到电机 7 的电调")])]),t._v(" "),r("tr",[r("td",[t._v("M8")]),t._v(" "),r("td",[t._v("I/O PWM OUT 8：将信号线连接到到电机 8 的电调")])]),t._v(" "),r("tr",[r("td",[t._v("FMU PWM-IN")]),t._v(" "),r("td",[t._v("See note below for connection to "),r("em",[t._v("Pixhawk 4")])])]),t._v(" "),r("tr",[r("td",[t._v("FMU PWM-OUT")]),t._v(" "),r("td",[t._v("If FMU PWM-IN is connected to "),r("em",[t._v("Pixhawk 4")]),t._v(", connect signal wires to ESC or signal, +, - wires to servos here")])]),t._v(" "),r("tr",[r("td",[t._v("CAP&ADC-OUT")]),t._v(" "),r("td",[t._v("connect to CAP & ADC IN port of "),r("em",[t._v("Pixhawk 4")])])]),t._v(" "),r("tr",[r("td",[t._v("CAP&ADC-IN")]),t._v(" "),r("td",[t._v("CAP&ADC 输入: 针脚打印显示在电路板的背面")])]),t._v(" "),r("tr",[r("td",[t._v("B+")]),t._v(" "),r("td",[t._v("连接到 ESC电调B+以为 ESC电调供电")])]),t._v(" "),r("tr",[r("td",[t._v("GND")]),t._v(" "),r("td",[t._v("连接到 ESC电调负极")])]),t._v(" "),r("tr",[r("td",[t._v("PWR1")]),t._v(" "),r("td",[t._v("5v output 3A, connect to "),r("em",[t._v("Pixhawk 4")]),t._v(" POWER 1")])]),t._v(" "),r("tr",[r("td",[t._v("PWR2")]),t._v(" "),r("td",[t._v("5v output 3A, connect to "),r("em",[t._v("Pixhawk 4")]),t._v(" POWER 2")])]),t._v(" "),r("tr",[r("td",[t._v("2~12S")]),t._v(" "),r("td",[t._v("电源输入，连接到12~S的LiPo电池")])])])]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),r("p",[t._v("Depending on your airframe type, refer to "),r("RouterLink",{attrs:{to:"/zh/airframes/airframe_reference.html"}},[t._v("Airframe Reference")]),t._v(" to connect "),r("strong",[t._v("I/O PWM OUT")]),t._v(" and "),r("strong",[t._v("FMU PWM OUT")]),t._v(" ports of "),r("em",[t._v("Pixhawk 4")]),t._v(" to PM board. "),r("strong",[t._v("MAIN")]),t._v(" outputs in PX4 firmware map to "),r("strong",[t._v("I/O PWM OUT")]),t._v(" port of "),r("em",[t._v("Pixhawk 4")]),t._v(" whereas "),r("strong",[t._v("AUX outputs")]),t._v(" map to "),r("strong",[t._v("FMU PWM OUT")]),t._v(" of "),r("em",[t._v("Pixhawk 4")]),t._v(". For example, "),r("strong",[t._v("MAIN1")]),t._v(" maps to IO_CH1 pin of "),r("strong",[t._v("I/O PWM OUT")]),t._v(" and "),r("strong",[t._v("AUX1")]),t._v(" maps to FMU_CH1 pin of "),r("strong",[t._v("FMU PWM OUT")]),t._v(". "),r("strong",[t._v("FMU PWM-IN")]),t._v(" of PM board is internally connected to "),r("strong",[t._v("FMU PWM-OUT")]),t._v(". "),r("strong",[t._v("I/O PWM-IN")]),t._v(" of PM board is internally connected to "),r("strong",[t._v("M1-8")]),t._v(".")],1)]),t._v(" "),r("p",[t._v("The following table summarizes how to connect "),r("em",[t._v("Pixhawk 4")]),t._v("'s PWM OUT ports to PM board's PWM-IN ports, depending on the Airframe Reference.")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("机架参考")]),t._v(" "),r("th",[t._v("Connection between "),r("em",[t._v("Pixhawk 4")]),t._v(" --\x3e PM board")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("strong",[t._v("MAIN")]),t._v(": motor")]),t._v(" "),r("td",[t._v("I/O PWM OUT --\x3e I/O PWM IN")])]),t._v(" "),r("tr",[r("td",[r("strong",[t._v("MAIN")]),t._v(": servo")]),t._v(" "),r("td",[t._v("I/O PWM OUT --\x3e FMU PWM IN")])]),t._v(" "),r("tr",[r("td",[r("strong",[t._v("AUX")]),t._v(": motor")]),t._v(" "),r("td",[t._v("FMU PWM OUT --\x3e I/O PWM IN")])]),t._v(" "),r("tr",[r("td",[r("strong",[t._v("AUX")]),t._v(": servo")]),t._v(" "),r("td",[t._v("FMU PWM OUT --\x3e FMU PWM IN")])])])]),t._v(" "),r("p",[t._v("The pinout of "),r("em",[t._v("Pixhawk 4")]),t._v("’s power ports is shown below. The CURRENT signal should carry an analog voltage from 0-3.3V for 0-120A as default. The VOLTAGE signal should carry an analog voltage from 0-3.3V for 0-60V as default. The VCC lines have to offer at least 3A continuous and should default to 5.1V. A lower voltage of 5V is still acceptable, but discouraged.")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("针脚")]),t._v(" "),r("th",[t._v("信号")]),t._v(" "),r("th",[t._v("电压")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("1（红）")]),t._v(" "),r("td",[t._v("VCC")]),t._v(" "),r("td",[t._v("+5V")])]),t._v(" "),r("tr",[r("td",[t._v("2（黑）")]),t._v(" "),r("td",[t._v("VCC")]),t._v(" "),r("td",[t._v("+5V")])]),t._v(" "),r("tr",[r("td",[t._v("3（黑）")]),t._v(" "),r("td",[t._v("电流")]),t._v(" "),r("td",[t._v("+3.3V")])]),t._v(" "),r("tr",[r("td",[t._v("4（黑）")]),t._v(" "),r("td",[t._v("电压")]),t._v(" "),r("td",[t._v("+3.3V")])]),t._v(" "),r("tr",[r("td",[t._v("5（黑）")]),t._v(" "),r("td",[t._v("GND")]),t._v(" "),r("td",[t._v("GND")])]),t._v(" "),r("tr",[r("td",[t._v("6（黑）")]),t._v(" "),r("td",[t._v("GND")]),t._v(" "),r("td",[t._v("GND")])])])]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),r("p",[t._v("Using the Power Module that comes with the kit you will need to configure the "),r("em",[t._v("Number of Cells")]),t._v(" in the "),r("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/SetupView/Power.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Power Settings"),r("OutboundLink")],1),t._v(" but you won't need to calibrate the "),r("em",[t._v("voltage divider")]),t._v(". You will have to update the "),r("em",[t._v("voltage divider")]),t._v(" if you are using any other power module (e.g. the one from the Pixracer).")])]),t._v(" "),r("h2",{attrs:{id:"radio-control"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#radio-control"}},[t._v("#")]),t._v(" Radio Control")]),t._v(" "),r("p",[t._v("A remote control (RC) radio system is required if you want to "),r("em",[t._v("manually")]),t._v(" control your vehicle (PX4 does not require a radio system for autonomous flight modes).")]),t._v(" "),r("p",[t._v("You will need to "),r("RouterLink",{attrs:{to:"/zh/getting_started/rc_transmitter_receiver.html"}},[t._v("select a compatible transmitter/receiver")]),t._v(" and then "),r("em",[t._v("bind")]),t._v(" them so that they communicate (read the instructions that come with your specific transmitter/receiver).")],1),t._v(" "),r("p",[t._v("The instructions below show how to connect the different types of receivers to "),r("em",[t._v("Pixhawk 4")]),t._v(":")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("Spektrum/DSM or S.BUS receivers connect to the "),r("strong",[t._v("DSM/SBUS RC")]),t._v(" input.")]),t._v(" "),r("p",[r("img",{attrs:{src:o(566),alt:"Pixhawk 4 - Spektrum接收机的信号接口"}})])]),t._v(" "),r("li",[r("p",[t._v("PPM receivers connect to the "),r("strong",[t._v("PPM RC")]),t._v(" input port.")]),t._v(" "),r("p",[r("img",{attrs:{src:o(567),alt:"Pixhawk 4 - PPM接收机的信号接口"}})])]),t._v(" "),r("li",[r("p",[t._v("PPM and PWM receivers that have an "),r("em",[t._v("individual wire for each channel")]),t._v(" must connect to the "),r("strong",[t._v("PPM RC")]),t._v(" port "),r("em",[t._v("via a PPM encoder")]),t._v(" "),r("a",{attrs:{href:"http://www.getfpv.com/radios/radio-accessories/holybro-ppm-encoder-module.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("like this one"),r("OutboundLink")],1),t._v(" (PPM-Sum receivers use a single signal wire for all channels).")])])]),t._v(" "),r("p",[t._v("For more information about selecting a radio system, receiver compatibility, and binding your transmitter/receiver pair, see: "),r("RouterLink",{attrs:{to:"/zh/getting_started/rc_transmitter_receiver.html"}},[t._v("Remote Control Transmitters & Receivers")]),t._v(".")],1),t._v(" "),r("h2",{attrs:{id:"telemetry-radios-optional"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#telemetry-radios-optional"}},[t._v("#")]),t._v(" Telemetry Radios (Optional)")]),t._v(" "),r("p",[t._v("Telemetry radios may be used to communicate and control a vehicle in flight from a ground station (for example, you can direct the UAV to a particular position, or upload a new mission).")]),t._v(" "),r("p",[t._v("The vehicle-based radio should be connected to the "),r("strong",[t._v("TELEM1")]),t._v(" port as shown below (if connected to this port, no further configuration is required). The other radio is connected to your ground station computer or mobile device (usually by USB).")]),t._v(" "),r("p",[r("img",{attrs:{src:o(568),alt:"Pixhawk 4/Telemetry Radio"}})]),t._v(" "),r("p",[r("a",{attrs:{id:"sd_card"}})]),t._v(" "),r("h2",{attrs:{id:"sd-卡"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sd-卡"}},[t._v("#")]),t._v(" SD 卡")]),t._v(" "),r("p",[t._v("SD cards are highly recommended as they are needed to "),r("RouterLink",{attrs:{to:"/zh/getting_started/flight_reporting.html"}},[t._v("log and analyse flight details")]),t._v(", to run missions, and to use UAVCAN-bus hardware. Insert the card (included in Pixhawk 4 kit) into "),r("em",[t._v("Pixhawk 4")]),t._v(" as shown below.")],1),t._v(" "),r("p",[r("img",{attrs:{src:o(569),alt:"Pixhawk 4/SD Card"}})]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),r("p",[t._v("For more information see "),r("RouterLink",{attrs:{to:"/zh/getting_started/px4_basic_concepts.html#sd-cards-removable-memory"}},[t._v("Basic Concepts > SD Cards (Removable Memory)")]),t._v(".")],1)]),t._v(" "),r("h2",{attrs:{id:"电机"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#电机"}},[t._v("#")]),t._v(" 电机")]),t._v(" "),r("p",[t._v("Motors/servos are connected to the "),r("strong",[t._v("I/O PWM OUT")]),t._v(" ("),r("strong",[t._v("MAIN")]),t._v(") and "),r("strong",[t._v("FMU PWM OUT")]),t._v(" ("),r("strong",[t._v("AUX")]),t._v(") ports in the order specified for your vehicle in the "),r("RouterLink",{attrs:{to:"/zh/airframes/airframe_reference.html"}},[t._v("Airframe Reference")]),t._v(".")],1),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),r("p",[t._v('This reference lists the output port to motor/servo mapping for all supported air and ground frames (if your frame is not listed in the reference then use a "generic" airframe of the correct type).')])]),t._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),r("p",[t._v("The mapping is not consistent across frames (e.g. you can't rely on the throttle being on the same output for all plane frames). Make sure to use the correct mapping for your vehicle.")])]),t._v(" "),r("h2",{attrs:{id:"其它外设"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#其它外设"}},[t._v("#")]),t._v(" 其它外设")]),t._v(" "),r("p",[t._v("The wiring and configuration of optional/less common components is covered within the topics for individual "),r("RouterLink",{attrs:{to:"/zh/peripherals/"}},[t._v("peripherals")]),t._v(".")],1),t._v(" "),r("h2",{attrs:{id:"针脚定义"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#针脚定义"}},[t._v("#")]),t._v(" 针脚定义")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://holybro.com/manual/Pixhawk4-Pinouts.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk 4 Pinouts"),r("OutboundLink")],1),t._v(" (Holybro)")]),t._v(" "),r("h2",{attrs:{id:"配置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),r("p",[t._v("General configuration information is covered in: "),r("RouterLink",{attrs:{to:"/zh/config/"}},[t._v("Autopilot Configuration")]),t._v(".")],1),t._v(" "),r("p",[t._v("QuadPlane specific configuration is covered here: "),r("RouterLink",{attrs:{to:"/zh/config_vtol/vtol_quad_configuration.html"}},[t._v("QuadPlane VTOL Configuration")])],1),t._v(" "),r("h2",{attrs:{id:"更多信息"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#更多信息"}},[t._v("#")]),t._v(" 更多信息")]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk4.html"}},[t._v("Pixhawk 4")]),t._v("（概览页面）")],1),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/PX4/PX4-user_guide/raw/main/assets/flight_controller/pixhawk4/pixhawk4_technical_data_sheet.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk 4 技术数据表"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://holybro.com/manual/Pixhawk4-Pinouts.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk 4 Pinouts"),r("OutboundLink")],1),t._v(" (Holybro)")]),t._v(" "),r("li",[r("a",{attrs:{href:"https://holybro.com/manual/Pixhawk4-quickstartguide.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk 4 快速入门指南（PDF）"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=a.exports},357:function(t,e,o){t.exports=o.p+"assets/img/pixhawk4_compass_gps.3e72e652.jpg"},366:function(t,e,o){t.exports=o.p+"assets/img/pixhawk4_logo_view.5427b222.jpg"},367:function(t,e,o){t.exports=o.p+"assets/img/pixhawk4_power_management_board.c1d457c8.png"},564:function(t,e,o){t.exports=o.p+"assets/img/pixhawk4_wiring_overview.38db7f7d.png"},565:function(t,e,o){t.exports=o.p+"assets/img/pixhawk4_mounting_and_foam.6abade99.png"},566:function(t,e,o){t.exports=o.p+"assets/img/pixhawk4_receiver_sbus.978277d5.png"},567:function(t,e,o){t.exports=o.p+"assets/img/pixhawk_4_receiver_ppm.cda4c30f.png"},568:function(t,e,o){t.exports=o.p+"assets/img/pixhawk4_telemetry_radio.0540a071.jpg"},569:function(t,e,o){t.exports=o.p+"assets/img/pixhawk4_sd_card.059a898b.png"}}]);