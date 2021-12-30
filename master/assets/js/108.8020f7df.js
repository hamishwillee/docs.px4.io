(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{2786:function(t,e,o){"use strict";o.r(e);var i=o(19),a=Object(i.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"pixhawk-4-mini-0-接线快速入门"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#pixhawk-4-mini-0-接线快速入门"}},[t._v("#")]),t._v(" *Pixhawk 4 mini </0 >接线快速入门")]),t._v(" "),i("div",{staticClass:"custom-block warning"},[i("p",{staticClass:"custom-block-title"},[t._v("PX4 does not manufacture this (or any) autopilot. Contact the [manufacturer](https://shop.holybro.com/) for hardware support or compliance issues.")])]),t._v(" "),i("p",[t._v("This quick start guide shows how to power the "),i("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk4_mini.html"}},[i("em",[t._v("Pixhawk"),i("sup",[t._v("®")]),t._v(" 4 Mini")])]),t._v(" flight controller and connect its most important peripherals.")],1),t._v(" "),i("p",[i("img",{attrs:{src:o(353),alt:"Pixhawk4 mini"}})]),t._v(" "),i("h2",{attrs:{id:"接线图概述"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#接线图概述"}},[t._v("#")]),t._v(" 接线图概述")]),t._v(" "),i("p",[t._v("The image below shows where to connect the most important sensors and peripherals (except for motors and servos).")]),t._v(" "),i("p",[i("img",{attrs:{src:o(551),alt:"Pixhawk 4 Mini Wiring Overview"}})]),t._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),i("p",[t._v("More information about available ports can be found here: "),i("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk4_mini.html#interfaces"}},[i("em",[t._v("Pixhawk 4 Mini")]),t._v(" > Interfaces")]),t._v(".")],1)]),t._v(" "),i("h2",{attrs:{id:"飞控的安装和方向"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#飞控的安装和方向"}},[t._v("#")]),t._v(" 飞控的安装和方向")]),t._v(" "),i("p",[i("em",[t._v("Pixhawk 4 Mini")]),t._v(" should be mounted on your frame using vibration-damping foam pads (included in the kit). It should be positioned as close to your vehicle’s center of gravity as possible, oriented top-side up with the arrow pointing towards the front of the vehicle.")]),t._v(" "),i("p",[i("img",{attrs:{src:o(552),alt:"Pixhawk 4 Mini Orientation"}})]),t._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),i("p",[t._v("If the controller cannot be mounted in the recommended/default orientation (e.g. due to space constraints) you will need to configure the autopilot software with the orientation that you actually used: "),i("RouterLink",{attrs:{to:"/zh/config/flight_controller_orientation.html"}},[t._v("Flight Controller Orientation")]),t._v(".")],1)]),t._v(" "),i("h2",{attrs:{id:"gps-指南针-蜂鸣器-安全开关-led"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#gps-指南针-蜂鸣器-安全开关-led"}},[t._v("#")]),t._v(" GPS + 指南针 + 蜂鸣器 + 安全开关 + LED")]),t._v(" "),i("p",[t._v("使用6PIN线材将套件附带的PMB模块的输出接口连接到"),i("em",[t._v("Pixhawk 4 mini")]),t._v(" 的 "),i("strong",[t._v("POWER")]),t._v(" 端口。 下表解释了电源管理板的连接, 包括动力电源与 ESC电调和伺服舵机的信号连接。")]),t._v(" "),i("p",[i("img",{attrs:{src:o(553),alt:"Connect compass/GPS to Pixhawk 4"}})]),t._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),i("p",[t._v("The GPS module's integrated safety switch is enabled "),i("em",[t._v("by default")]),t._v(" (when enabled, PX4 will not let you arm the vehicle). To disable the safety press and hold the safety switch for 1 second. You can press the safety switch again to enable safety and disarm the vehicle (this can be useful if, for whatever reason, you are unable to disarm the vehicle from your remote control or ground station).")])]),t._v(" "),i("h2",{attrs:{id:"电源"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#电源"}},[t._v("#")]),t._v(" 电源")]),t._v(" "),i("p",[t._v("The Power Management Board (PMB) serves the purpose of a power module as well as a power distribution board. In addition to providing regulated power to "),i("em",[t._v("Pixhawk 4 Mini")]),t._v(" and the ESCs, it sends information to the autopilot about the battery’s voltage and current draw.")]),t._v(" "),i("p",[t._v("Connect the output of the PMB that comes with the kit to the "),i("strong",[t._v("POWER")]),t._v(" port of the "),i("em",[t._v("Pixhawk 4 Mini")]),t._v(" using a 6-wire cable. The connections of the PMB, including power supply and signal connections to the ESCs and servos, are explained in the image below.")]),t._v(" "),i("p",[i("img",{attrs:{src:o(554),alt:"Pixhawk 4 - Power Management Board"}})]),t._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),i("p",[t._v("The image above only shows the connection of a single ESC and a single servo. Connect the remaining ESCs and servos similarly.")])]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",[t._v("Pin(s) 或连接器")]),t._v(" "),i("th",[t._v("功能")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("B+")]),t._v(" "),i("td",[t._v("连接到 ESC电调B+以为 ESC电调供电")])]),t._v(" "),i("tr",[i("td",[t._v("GND")]),t._v(" "),i("td",[t._v("连接到 ESC电调负极")])]),t._v(" "),i("tr",[i("td",[t._v("PWR")]),t._v(" "),i("td",[t._v("JST-GH 6-pin 接头, 5V 3A 输出")])]),t._v(" "),i("tr",[i("td",[t._v("连接到"),i("em",[t._v("Pixhawk 4 Mini")]),t._v(" 的POWER接口")]),t._v(" "),i("td")]),t._v(" "),i("tr",[i("td",[t._v("BAT")]),t._v(" "),i("td",[t._v("电源输入，连接到2~12S的LiPo电池")])])])]),t._v(" "),i("p",[t._v("The pinout of the "),i("em",[t._v("Pixhawk 4 Mini")]),t._v(" "),i("strong",[t._v("POWER")]),t._v(" port is shown below. The "),i("code",[t._v("CURRENT")]),t._v(" signal should carry an analog voltage from 0-3.3V for 0-120A as default. The "),i("code",[t._v("VOLTAGE")]),t._v(" signal should carry an analog voltage from 0-3.3V for 0-60V as default. The VCC lines have to offer at least 3A continuous and should default to 5.1V. A lower voltage of 5V is still acceptable, but discouraged.")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",[t._v("针脚")]),t._v(" "),i("th",[t._v("信号")]),t._v(" "),i("th",[t._v("电压")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("1（红）")]),t._v(" "),i("td",[t._v("VCC")]),t._v(" "),i("td",[t._v("+5V")])]),t._v(" "),i("tr",[i("td",[t._v("2（黑）")]),t._v(" "),i("td",[t._v("VCC")]),t._v(" "),i("td",[t._v("+5V")])]),t._v(" "),i("tr",[i("td",[t._v("3（黑）")]),t._v(" "),i("td",[t._v("电流")]),t._v(" "),i("td",[t._v("+3.3V")])]),t._v(" "),i("tr",[i("td",[t._v("4（黑）")]),t._v(" "),i("td",[t._v("电压")]),t._v(" "),i("td",[t._v("+3.3V")])]),t._v(" "),i("tr",[i("td",[t._v("5（黑）")]),t._v(" "),i("td",[t._v("GND")]),t._v(" "),i("td",[t._v("GND")])]),t._v(" "),i("tr",[i("td",[t._v("6（黑）")]),t._v(" "),i("td",[t._v("GND")]),t._v(" "),i("td",[t._v("GND")])])])]),t._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),i("p",[t._v("If using a plane or rover, the 8 pin power (+) rail of "),i("strong",[t._v("MAIN OUT")]),t._v(" will need to be separately powered in order to drive servos for rudders, elevons, etc. To do this, the power rail needs to be connected to a BEC equipped ESC, a standalone 5V BEC, or a 2S LiPo battery. Be careful with the voltage of servo you are going to use here.")])]),t._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),i("p",[t._v("Using the Power Module that comes with the kit you will need to configure the "),i("em",[t._v("Number of Cells")]),t._v(" in the "),i("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/SetupView/Power.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Power Settings"),i("OutboundLink")],1),t._v(" but you won't need to calibrate the "),i("em",[t._v("voltage divider")]),t._v(". You will have to update the "),i("em",[t._v("voltage divider")]),t._v(" if you are using any other power module (e.g. the one from the Pixracer).")])]),t._v(" "),i("h2",{attrs:{id:"无线电遥控"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#无线电遥控"}},[t._v("#")]),t._v(" 无线电遥控")]),t._v(" "),i("p",[t._v("A remote control (RC) radio system is required if you want to "),i("em",[t._v("manually")]),t._v(" control your vehicle (PX4 does not require a radio system for autonomous flight modes).")]),t._v(" "),i("p",[t._v("You will need to "),i("RouterLink",{attrs:{to:"/zh/getting_started/rc_transmitter_receiver.html"}},[t._v("select a compatible transmitter/receiver")]),t._v(" and then "),i("em",[t._v("bind")]),t._v(" them so that they communicate (read the instructions that come with your specific transmitter/receiver).")],1),t._v(" "),i("p",[t._v("The instructions below show how to connect the different types of receivers to "),i("em",[t._v("Pixhawk 4 Mini")]),t._v(":")]),t._v(" "),i("ul",[i("li",[i("p",[t._v("Spektrum/DSM 或者 S.BUS 接收机连接到 "),i("strong",[t._v("DSM/SBUS RC")]),t._v(" 输入端口。")]),t._v(" "),i("p",[i("img",{attrs:{src:o(555),alt:"Pixhawk 4 Mini - Spektrum接收机的信号接口"}})])]),t._v(" "),i("li",[i("p",[t._v("PPM 接收机连接到 "),i("strong",[t._v("PPM RC")]),t._v(" 输入端口。")]),t._v(" "),i("p",[i("img",{attrs:{src:o(556),alt:"Pixhawk 4 Mini - PPM接收机的信号接口"}})])]),t._v(" "),i("li",[i("p",[t._v("PPM 和 "),i("em",[t._v("每个通道有单独连接线")]),t._v(" 的 PWM 接收机需要连接在 "),i("strong",[t._v("PPM RC")]),t._v(" 端口，PWM信号需要通过一个"),i("a",{attrs:{href:"http://www.getfpv.com/radios/radio-accessories/holybro-ppm-encoder-module.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("类似这样的"),i("OutboundLink")],1),t._v("* PPM 编码器*（PPM-Sum 接收机只需要一根信号线就包含所有通道）。")])])]),t._v(" "),i("p",[t._v("For more information about selecting a radio system, receiver compatibility, and binding your transmitter/receiver pair, see: "),i("RouterLink",{attrs:{to:"/zh/getting_started/rc_transmitter_receiver.html"}},[t._v("Remote Control Transmitters & Receivers")]),t._v(".")],1),t._v(" "),i("h2",{attrs:{id:"数传电台-可选"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#数传电台-可选"}},[t._v("#")]),t._v(" 数传电台（可选）")]),t._v(" "),i("p",[t._v("Telemetry radios may be used to communicate and control a vehicle in flight from a ground station (for example, you can direct the UAV to a particular position, or upload a new mission).")]),t._v(" "),i("p",[t._v("The vehicle-based radio should be connected to the "),i("strong",[t._v("TELEM1")]),t._v(" port as shown below (if connected to this port, no further configuration is required). The other radio is connected to your ground station computer or mobile device (usually by USB).")]),t._v(" "),i("p",[i("img",{attrs:{src:o(557),alt:"Pixhawk 4 Mini Telemetry"}})]),t._v(" "),i("h2",{attrs:{id:"sd卡-可选"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#sd卡-可选"}},[t._v("#")]),t._v(" SD卡（可选）")]),t._v(" "),i("p",[t._v("SD cards are highly recommended as they are needed to "),i("RouterLink",{attrs:{to:"/zh/getting_started/flight_reporting.html"}},[t._v("log and analyse flight details")]),t._v(", to run missions, and to use UAVCAN-bus hardware. Insert the card (included in the kit) into "),i("em",[t._v("Pixhawk 4 Mini")]),t._v(" as shown below.")],1),t._v(" "),i("p",[i("img",{attrs:{src:o(558),alt:"Pixhawk 4 Mini SD Card"}})]),t._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),i("p",[t._v("For more information see "),i("RouterLink",{attrs:{to:"/zh/getting_started/px4_basic_concepts.html#sd_cards"}},[t._v("Basic Concepts > SD Cards (Removable Memory)")]),t._v(".")],1)]),t._v(" "),i("h2",{attrs:{id:"电机"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#电机"}},[t._v("#")]),t._v(" 电机")]),t._v(" "),i("p",[t._v("Motors/servos are connected to the "),i("strong",[t._v("MAIN OUT")]),t._v(" ports in the order specified for your vehicle in the "),i("RouterLink",{attrs:{to:"/zh/airframes/airframe_reference.html"}},[t._v("Airframe Reference")]),t._v(". See "),i("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk4_mini.html#supported-platforms"}},[i("em",[t._v("Pixhawk 4 Mini")]),t._v(" > Supported Platforms")]),t._v(" for more information.")],1),t._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),i("p",[t._v('This reference lists the output port to motor/servo mapping for all supported air and ground frames (if your frame is not listed in the reference then use a "generic" airframe of the correct type).')])]),t._v(" "),i("p",[t._v(":::caution\nThe mapping is not consistent across frames (e.g. you can't rely on the throttle being on the same output for all plane frames). Make sure to use the correct mapping for your vehicle.\n:::")]),t._v(" "),i("h2",{attrs:{id:"其它外设"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#其它外设"}},[t._v("#")]),t._v(" 其它外设")]),t._v(" "),i("p",[t._v("The wiring and configuration of optional/less common components is covered within the topics for individual "),i("RouterLink",{attrs:{to:"/zh/peripherals/"}},[t._v("peripherals")]),t._v(".")],1),t._v(" "),i("h2",{attrs:{id:"配置"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),i("p",[t._v("General configuration information is covered in: "),i("RouterLink",{attrs:{to:"/zh/config/"}},[t._v("Autopilot Configuration")]),t._v(".")],1),t._v(" "),i("p",[t._v("QuadPlane specific configuration is covered here: "),i("RouterLink",{attrs:{to:"/zh/config_vtol/vtol_quad_configuration.html"}},[t._v("QuadPlane VTOL Configuration")])],1),t._v(" "),i("h2",{attrs:{id:"更多信息"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#更多信息"}},[t._v("#")]),t._v(" 更多信息")]),t._v(" "),i("ul",[i("li",[i("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk4_mini.html"}},[i("em",[t._v("Pixhawk 4 Mini")])])],1)])])}),[],!1,null,null,null);e.default=a.exports},353:function(t,e,o){t.exports=o.p+"assets/img/pixhawk4mini_iso_1.6e880e69.png"},551:function(t,e,o){t.exports=o.p+"assets/img/pixhawk4mini_wiring_overview.de8fbdca.png"},552:function(t,e){t.exports="data:image/png;base64,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"},553:function(t,e){t.exports="data:image/png;base64,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"},554:function(t,e,o){t.exports=o.p+"assets/img/pixhawk4mini_power_management.b02a0bcc.png"},555:function(t,e,o){t.exports=o.p+"assets/img/pixhawk4mini_rc_dsmsbus.9c478caf.png"},556:function(t,e,o){t.exports=o.p+"assets/img/pixhawk4mini_rc_ppm.ad559a56.png"},557:function(t,e,o){t.exports=o.p+"assets/img/pixhawk4mini_telemetry.dee79b4c.png"},558:function(t,e,o){t.exports=o.p+"assets/img/pixhawk4mini_sdcard.728e5a81.png"}}]);