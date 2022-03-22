(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{2845:function(t,r,e){"use strict";e.r(r);var s=e(19),a=Object(s.a)({},(function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"pixracer接线指南"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pixracer接线指南"}},[t._v("#")]),t._v(" Pixracer接线指南")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("PX4 does not manufacture this (or any) autopilot. Contact the [manufacturer](https://store.mrobotics.io/) for hardware support or compliance issues.")])]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[t._v("Under construction")])]),t._v(" "),s("p",[t._v("This quick start guide shows how to power the "),s("RouterLink",{attrs:{to:"/zh/flight_controller/pixracer.html"}},[t._v("Pixracer")]),t._v(" flight controller and connect its most important peripherals.")],1),t._v(" "),s("img",{attrs:{src:e(370),width:"300px",title:"pixracer + 8266 grey"}}),t._v(" "),s("h2",{attrs:{id:"wiring-guides-assembly"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wiring-guides-assembly"}},[t._v("#")]),t._v(" Wiring Guides/Assembly")]),t._v(" "),s("p",[s("img",{attrs:{src:e(597),alt:"Grau pixracer double"}})]),t._v(" "),s("h3",{attrs:{id:"主要设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#主要设置"}},[t._v("#")]),t._v(" 主要设置")]),t._v(" "),s("p",[s("img",{attrs:{src:e(371),alt:"Grau setup pixracer top"}})]),t._v(" "),s("p",[s("img",{attrs:{src:e(372),alt:"Grau setup pixracer bottom"}})]),t._v(" "),s("h3",{attrs:{id:"电台-远程-控制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#电台-远程-控制"}},[t._v("#")]),t._v(" 电台/远程 控制")]),t._v(" "),s("p",[t._v("A remote control (RC) radio system is required if you want to "),s("em",[t._v("manually")]),t._v(" control your vehicle (PX4 does not require a radio system for autonomous flight modes).")]),t._v(" "),s("p",[t._v("You will need to "),s("RouterLink",{attrs:{to:"/zh/getting_started/rc_transmitter_receiver.html"}},[t._v("select a compatible transmitter/receiver")]),t._v(" and then "),s("em",[t._v("bind")]),t._v(" them so that they communicate (read the instructions that come with your specific transmitter/receiver).")],1),t._v(" "),s("p",[t._v("The instructions below show how to connect the different types of receivers:")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Frsky 的接收机通过所示的端口连接, 并可以使用提供的 I/o 连接器。")]),t._v(" "),s("p",[s("img",{attrs:{src:e(340),alt:"Grau b Pixracer FrSkyS接口连接"}})]),t._v(" "),s("p",[s("img",{attrs:{src:e(373),alt:"Pixracer FrSkyS接口连接"}})])]),t._v(" "),s("li",[s("p",[t._v("PPM-SUM 和 S.BUS 接收机连接到 "),s("strong",[t._v("RCIN")]),t._v(" 端口。")]),t._v(" "),s("p",[s("img",{attrs:{src:e(598),alt:"电台连接"}})])]),t._v(" "),s("li",[s("p",[t._v("PPM 接收机通过一个 "),s("em",[t._v("PPM 编码器")]),t._v("将"),s("em",[t._v("每一个通道通过一根线")]),t._v("连接到** RCIN** 通道上"),s("a",{attrs:{href:"http://www.getfpv.com/radios/radio-accessories/holybro-ppm-encoder-module.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("如这个所示"),s("OutboundLink")],1),t._v("（PPM-Sum 接收机所有通道可以只需要一根信号线）。")])])]),t._v(" "),s("h3",{attrs:{id:"电源模块-ascp4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#电源模块-ascp4"}},[t._v("#")]),t._v(" 电源模块 (ASCP4)")]),t._v(" "),s("p",[s("img",{attrs:{src:e(374),alt:"Grau ACSP4 2 roh"}})]),t._v(" "),s("h3",{attrs:{id:"external-telemetry"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#external-telemetry"}},[t._v("#")]),t._v(" External Telemetry")]),t._v(" "),s("p",[t._v("Pixracer has inbuilt WiFi, but also supports telemetry via external Wi-Fi or radio telemetry modules connected to the "),s("code",[t._v("TELEM1")]),t._v(" or "),s("code",[t._v("TELEM2")]),t._v(" ports. This is shown in the wiring diagram below.")]),t._v(" "),s("p",[s("img",{attrs:{src:e(599),alt:"Pixracer external telemtry options"}})]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("TELEM2")]),t._v(" port must be configured as a second MAVLink instance using the "),s("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MAV_2_CONFIG"}},[t._v("MAV_2_CONFIG")]),t._v(" parameter. For more information see "),s("RouterLink",{attrs:{to:"/zh/peripherals/mavlink_peripherals.html#mavlink-instances"}},[t._v("MAVLink Peripherals > MAVLink Instances")]),t._v(" (and "),s("RouterLink",{attrs:{to:"/zh/peripherals/serial_configuration.html"}},[t._v("Serial Port Configuration")]),t._v(").")],1)])])}),[],!1,null,null,null);r.default=a.exports},340:function(t,r,e){t.exports=e.p+"assets/img/grau_b_pixracer_frskys.port_connection.4f4548a6.jpg"},370:function(t,r,e){t.exports=e.p+"assets/img/pixracer_hero_grey.020bbce2.jpg"},371:function(t,r,e){t.exports=e.p+"assets/img/grau_setup_pixracer_top.140c229c.jpg"},372:function(t,r,e){t.exports=e.p+"assets/img/grau_setup_pixracer_bottom.18025449.jpg"},373:function(t,r,e){t.exports=e.p+"assets/img/pixracer_FrSkyTelemetry.e4e73cd1.jpg"},374:function(t,r,e){t.exports=e.p+"assets/img/grau_acsp4_2_roh.9afb7797.jpg"},597:function(t,r,e){t.exports=e.p+"assets/img/grau_pixracer_double.989b7fb8.jpg"},598:function(t,r,e){t.exports=e.p+"assets/img/grau_setup_pixracer_radio.19406d8f.jpg"},599:function(t,r,e){t.exports=e.p+"assets/img/pixracer_top_telemetry.43cf317b.jpg"}}]);