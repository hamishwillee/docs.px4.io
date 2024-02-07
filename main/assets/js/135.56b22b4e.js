(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{341:function(t,e,r){t.exports=r.p+"assets/img/grau_b_pixracer_frskys.port_connection.f12a8f69.jpg"},3444:function(t,e,r){"use strict";r.r(e);var a=r(19),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"pixracer接线指南"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pixracer接线指南"}},[t._v("#")]),t._v(" Pixracer接线指南")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("PX4 does not manufacture this (or any) autopilot. Contact the [manufacturer](https://store.mrobotics.io/) for hardware support or compliance issues.")])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("Under construction")])]),t._v(" "),a("p",[t._v("This quick start guide shows how to power the "),a("RouterLink",{attrs:{to:"/zh/flight_controller/pixracer.html"}},[t._v("Pixracer")]),t._v(" flight controller and connect its most important peripherals.")],1),t._v(" "),a("img",{attrs:{src:r(373),width:"300px",title:"pixracer + 8266 grey"}}),t._v(" "),a("h2",{attrs:{id:"wiring-guides-assembly"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wiring-guides-assembly"}},[t._v("#")]),t._v(" Wiring Guides/Assembly")]),t._v(" "),a("p",[a("img",{attrs:{src:r(615),alt:"Grau pixracer double"}})]),t._v(" "),a("h3",{attrs:{id:"主要设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主要设置"}},[t._v("#")]),t._v(" 主要设置")]),t._v(" "),a("p",[a("img",{attrs:{src:r(374),alt:"Grau setup pixracer top"}})]),t._v(" "),a("p",[a("img",{attrs:{src:r(375),alt:"Grau setup pixracer bottom"}})]),t._v(" "),a("h3",{attrs:{id:"radio-remote-control"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#radio-remote-control"}},[t._v("#")]),t._v(" Radio/Remote Control")]),t._v(" "),a("p",[t._v("A remote control (RC) radio system is required if you want to "),a("em",[t._v("manually")]),t._v(" control your vehicle (PX4 does not require a radio system for autonomous flight modes).")]),t._v(" "),a("p",[t._v("You will need to "),a("RouterLink",{attrs:{to:"/zh/getting_started/rc_transmitter_receiver.html"}},[t._v("select a compatible transmitter/receiver")]),t._v(" and then "),a("em",[t._v("bind")]),t._v(" them so that they communicate (read the instructions that come with your specific transmitter/receiver).")],1),t._v(" "),a("p",[t._v("The instructions below show how to connect the different types of receivers:")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Frsky 的接收机通过所示的端口连接, 并可以使用提供的 I/o 连接器。")]),t._v(" "),a("p",[a("img",{attrs:{src:r(341),alt:"Grau b Pixracer FrSkyS接口连接"}})]),t._v(" "),a("p",[a("img",{attrs:{src:r(376),alt:"Pixracer FrSkyS接口连接"}})])]),t._v(" "),a("li",[a("p",[t._v("PPM-SUM and S.BUS receivers connect to the "),a("strong",[t._v("RCIN")]),t._v(" port.")]),t._v(" "),a("p",[a("img",{attrs:{src:r(616),alt:"电台连接"}})])]),t._v(" "),a("li",[a("p",[t._v("PPM and PWM receivers that have an "),a("em",[t._v("individual wire for each channel")]),t._v(" must connect to the "),a("strong",[t._v("RCIN")]),t._v(" port "),a("em",[t._v("via a PPM encoder")]),t._v(" "),a("a",{attrs:{href:"http://www.getfpv.com/radios/radio-accessories/holybro-ppm-encoder-module.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("like this one"),a("OutboundLink")],1),t._v(" (PPM-Sum receivers use a single signal wire for all channels).")])])]),t._v(" "),a("h3",{attrs:{id:"电源模块-ascp4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#电源模块-ascp4"}},[t._v("#")]),t._v(" 电源模块 (ASCP4)")]),t._v(" "),a("p",[a("img",{attrs:{src:r(377),alt:"Grau ACSP4 2 roh"}})]),t._v(" "),a("h3",{attrs:{id:"external-telemetry"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#external-telemetry"}},[t._v("#")]),t._v(" External Telemetry")]),t._v(" "),a("p",[t._v("Pixracer has inbuilt WiFi, but also supports telemetry via external Wi-Fi or radio telemetry modules connected to the "),a("code",[t._v("TELEM1")]),t._v(" or "),a("code",[t._v("TELEM2")]),t._v(" ports. This is shown in the wiring diagram below.")]),t._v(" "),a("p",[a("img",{attrs:{src:r(617),alt:"Pixracer external telemtry options"}})]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("TELEM2")]),t._v(" port must be configured as a second MAVLink instance using the "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MAV_2_CONFIG"}},[t._v("MAV_2_CONFIG")]),t._v(" parameter. For more information see "),a("RouterLink",{attrs:{to:"/zh/peripherals/mavlink_peripherals.html#mavlink-instances"}},[t._v("MAVLink Peripherals > MAVLink Instances")]),t._v(" (and "),a("RouterLink",{attrs:{to:"/zh/peripherals/serial_configuration.html"}},[t._v("Serial Port Configuration")]),t._v(").")],1)])])}),[],!1,null,null,null);e.default=s.exports},373:function(t,e,r){t.exports=r.p+"assets/img/pixracer_hero_grey.d7f9a844.jpg"},374:function(t,e,r){t.exports=r.p+"assets/img/grau_setup_pixracer_top.dcfd2493.jpg"},375:function(t,e,r){t.exports=r.p+"assets/img/grau_setup_pixracer_bottom.d58482b2.jpg"},376:function(t,e,r){t.exports=r.p+"assets/img/pixracer_FrSkyTelemetry.e4e73cd1.jpg"},377:function(t,e,r){t.exports=r.p+"assets/img/grau_acsp4_2_roh.259d0299.jpg"},615:function(t,e,r){t.exports=r.p+"assets/img/grau_pixracer_double.b50304f0.jpg"},616:function(t,e,r){t.exports=r.p+"assets/img/grau_setup_pixracer_radio.2be0721b.jpg"},617:function(t,e,r){t.exports=r.p+"assets/img/pixracer_top_telemetry.cbd7dcd1.jpg"}}]);