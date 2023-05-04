(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{3143:function(t,e,o){"use strict";o.r(e);var a=o(19),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"pixhawk快速使用指导"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pixhawk快速使用指导"}},[t._v("#")]),t._v(" Pixhawk快速使用指导")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("PX4 does not manufacture this (or any) autopilot. Contact the [manufacturer](https://store.mrobotics.io/) for hardware support or compliance issues. :::")]),t._v(" "),a("p",[t._v("This quick start guide shows how to power the "),a("em",[t._v("3DR Pixhawk")]),t._v(" flight controller and connect its most important peripherals.")]),t._v(" "),a("p",[a("img",{attrs:{src:o(551),alt:"Pixhawk Image"}})]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("The "),a("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk.html"}},[t._v("3DR Pixhawk")]),t._v(" is no longer available from 3DR. Other flight controllers based on the "),a("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk_series.html"}},[t._v("Pixhawk FMUv2 architecture")]),t._v(" are available from other companies (these share the same connections, outputs, functions, etc. and are wired in a similar way). :::")],1),t._v(" "),a("h2",{attrs:{id:"接线介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#接线介绍"}},[t._v("#")]),t._v(" 接线介绍")]),t._v(" "),a("p",[t._v("The image below shows standard Pixhawk connections (excepting the motor and servo outputs). We'll go through each main part in the following sections.")]),t._v(" "),a("p",[a("img",{attrs:{src:o(552),alt:"Pixhawk Wiring Overview"}})]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("More detailed wiring information is "),a("a",{attrs:{href:"#detailed-wiring-infographic-copter"}},[t._v("shown below")]),t._v(". :::")]),t._v(" "),a("h2",{attrs:{id:"飞控的安装和方向"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#飞控的安装和方向"}},[t._v("#")]),t._v(" 飞控的安装和方向")]),t._v(" "),a("p",[t._v("The "),a("em",[t._v("Pixhawk")]),t._v(" should be mounted on the frame using vibration-damping foam pads (included in the kit). It should be positioned as close to your vehicle’s center of gravity as possible, oriented top-side up with the arrow points towards the front of the vehicle.")]),t._v(" "),a("p",[a("img",{attrs:{src:o(553),alt:"Pixhawk mounting and orientation"}})]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("If the controller cannot be mounted in the recommended/default orientation (e.g. due to space constraints) you will need to configure the autopilot software with the orientation that you actually used: "),a("RouterLink",{attrs:{to:"/zh/config/flight_controller_orientation.html"}},[t._v("Flight Controller Orientation")]),t._v(". :::")],1),t._v(" "),a("h2",{attrs:{id:"蜂鸣器与安全开关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#蜂鸣器与安全开关"}},[t._v("#")]),t._v(" 蜂鸣器与安全开关")]),t._v(" "),a("p",[t._v("Connect the included buzzer and safety switch as shown below (these are mandatory).")]),t._v(" "),a("p",[a("img",{attrs:{src:o(554),alt:"Pixhawk mounting and orientation"}})]),t._v(" "),a("h2",{attrs:{id:"gps-罗盘"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gps-罗盘"}},[t._v("#")]),t._v(" GPS + 罗盘")]),t._v(" "),a("p",[t._v("Attach a GPS (required) to the GPS port using the 6-wire cable supplied in the kit. Optionally attach a compass to the I2C port using a 4-wire cable (the Pixhawk has an internal compass, which can be used if necessary).")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("The diagram shows a combined GPS and Compass.\nThe GPS/Compass should be mounted on the frame as far away from other electronics as possible, with the direction marker towards the front of the vehicle (separating the compass from other electronics will reduce interference).")])])])])])]),t._v(" "),a("p",[a("img",{attrs:{src:o(555),alt:"Connect compass/GPS to Pixhawk"}})]),t._v(" "),a("h2",{attrs:{id:"电源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#电源"}},[t._v("#")]),t._v(" 电源")]),t._v(" "),a("p",[t._v("Connect the output of a "),a("em",[t._v("Power module")]),t._v(" (PM) to the "),a("strong",[t._v("POWER")]),t._v(" port using a 6-wire cable as shown. The PM input will be connected to your LiPo battery, while the main output will supply vehicle ESCs/motors (possibly via a power distribution board).")]),t._v(" "),a("p",[t._v("The power module supplies the flight controller with power from the battery and also sends information about the analog current and voltage supplied via the module (including both power to the flight controller and to motors etc).")]),t._v(" "),a("p",[a("img",{attrs:{src:o(556),alt:"Pixhawk - Power Module"}})]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("The power module supplies the flight controller itself, but cannot power servos and other hardware connected to the controller's output ports (rail). For copter this does not matter because the motors are separately powered.")])]),t._v(" "),a("p",[t._v("For planes and VTOL the output rail will need to be separately powered in order to drive servos for rudders, elevons etc. Often the main pusher/puller motor uses an ESC with an integrated "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Battery_eliminator_circuit",target:"_blank",rel:"noopener noreferrer"}},[t._v("BEC"),a("OutboundLink")],1),t._v(" that can be connected to the Pixhawk output rail. If not, you will need to setup a 5V BEC to connect to one of the free Pixhawk ports (without power, the servos will not work).")]),t._v(" "),a("h2",{attrs:{id:"无线电遥控"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#无线电遥控"}},[t._v("#")]),t._v(" 无线电遥控")]),t._v(" "),a("p",[t._v("A remote control (RC) radio system is required if you want to "),a("em",[t._v("manually")]),t._v(" control your vehicle (PX4 does not require a radio system for autonomous flight modes).")]),t._v(" "),a("p",[t._v("You will need to "),a("RouterLink",{attrs:{to:"/zh/getting_started/rc_transmitter_receiver.html"}},[t._v("select a compatible transmitter/receiver")]),t._v(" and then "),a("em",[t._v("bind")]),t._v(" them so that they communicate (read the instructions that come with your specific transmitter/receiver).")],1),t._v(" "),a("p",[t._v("The instructions below show how to connect the different types of receivers to Pixhawk:")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Spektrum and DSM receivers connect to the "),a("strong",[t._v("SPKT/DSM")]),t._v(" input. "),a("img",{attrs:{src:o(557),alt:"Pixhawk - Spektrum接收机数传端口"}})])]),t._v(" "),a("li",[a("p",[t._v("PPM-SUM and S.BUS receivers connect to the "),a("strong",[t._v("RC")]),t._v(" ground, power and signal pins as shown. "),a("img",{attrs:{src:o(558),alt:"Pixhawk` - PPM/S.BUS接收机数传端口"}})])]),t._v(" "),a("li",[a("p",[t._v("PPM and PWM receivers that have an "),a("em",[t._v("individual wire for each channel")]),t._v(" must connect to the "),a("strong",[t._v("RC")]),t._v(" port "),a("em",[t._v("via a PPM encoder")]),t._v(" "),a("a",{attrs:{href:"http://www.getfpv.com/radios/radio-accessories/holybro-ppm-encoder-module.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("like this one"),a("OutboundLink")],1),t._v(" (PPM-Sum receivers use a single signal wire for all channels).")])])]),t._v(" "),a("p",[t._v("For more information about selecting a radio system, receiver compatibility, and binding your transmitter/receiver pair, see: "),a("RouterLink",{attrs:{to:"/zh/getting_started/rc_transmitter_receiver.html"}},[t._v("Remote Control Transmitters & Receivers")]),t._v(".")],1),t._v(" "),a("h2",{attrs:{id:"数传电台-可选"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数传电台-可选"}},[t._v("#")]),t._v(" 数传电台（可选）")]),t._v(" "),a("p",[t._v("Telemetry radios may be used to communicate and control a vehicle in flight from a ground station (for example, you can direct the UAV to a particular position, or upload a new mission). One radio must be connected to your vehicle as shown below. The other is connected to your ground station computer or mobile device (usually by USB).")]),t._v(" "),a("p",[a("img",{attrs:{src:o(559),alt:"Pixhawk/Telemetry Radio"}})]),t._v(" "),a("h2",{attrs:{id:"电机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#电机"}},[t._v("#")]),t._v(" 电机")]),t._v(" "),a("p",[t._v("The mappings between MAIN/AUX output ports and motor/servos for all supported air and ground frames are listed in the "),a("RouterLink",{attrs:{to:"/zh/airframes/airframe_reference.html"}},[t._v("Airframe Reference")]),t._v(".")],1),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("The mapping is not consistent across frames (e.g. you can't rely on the throttle being on the same output for all plane frames).\nMake sure to use the correct mapping for your vehicle.")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v('If your frame is not listed in the reference then use a "generic" airframe of the correct type.')])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("The output rail must be separately powered, as discussed in the "),a("a",{attrs:{href:"#power"}},[t._v("Power")]),t._v(" section above. :::")]),t._v(" "),a("h2",{attrs:{id:"其它外设"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其它外设"}},[t._v("#")]),t._v(" 其它外设")]),t._v(" "),a("p",[t._v("The wiring and configuration of other components is covered within the topics for individual "),a("RouterLink",{attrs:{to:"/zh/peripherals/"}},[t._v("peripherals")]),t._v(".")],1),t._v(" "),a("h2",{attrs:{id:"配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),a("p",[t._v("General configuration information is covered in: "),a("RouterLink",{attrs:{to:"/zh/config/"}},[t._v("Autopilot Configuration")]),t._v(".")],1),t._v(" "),a("p",[t._v("QuadPlane specific configuration is covered here: "),a("RouterLink",{attrs:{to:"/zh/config_vtol/vtol_quad_configuration.html"}},[t._v("QuadPlane VTOL Configuration")])],1),t._v(" "),a("h2",{attrs:{id:"详细接线示意图-直升机-。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#详细接线示意图-直升机-。"}},[t._v("#")]),t._v(" 详细接线示意图(直升机)。")]),t._v(" "),a("p",[a("img",{attrs:{src:o(560),alt:"QuadCopter Pixhawk Wiring Infographic"}})]),t._v(" "),a("h2",{attrs:{id:"更多信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更多信息"}},[t._v("#")]),t._v(" 更多信息")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk_series.html"}},[t._v("Pixhawk 系列")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk.html"}},[t._v("3DR Pixhawk")])],1)])])])}),[],!1,null,null,null);e.default=r.exports},551:function(t,e,o){t.exports=o.p+"assets/img/pixhawk_logo_view.431588e6.jpg"},552:function(t,e,o){t.exports=o.p+"assets/img/pixhawk_wiring_overview.1e85ae6f.jpg"},553:function(t,e,o){t.exports=o.p+"assets/img/pixhawk_3dr_mounting_and_foam.d1a1aa4c.jpg"},554:function(t,e,o){t.exports=o.p+"assets/img/pixhawk_3dr_buzzer_and_safety_switch.3702efed.jpg"},555:function(t,e,o){t.exports=o.p+"assets/img/pixhawk_3dr_compass_gps.2eaea17a.jpg"},556:function(t,e,o){t.exports=o.p+"assets/img/pixhawk_3dr_power_module.84f59322.jpg"},557:function(t,e,o){t.exports=o.p+"assets/img/pixhawk_3dr_receiver_spektrum.3cdfc07a.jpg"},558:function(t,e,o){t.exports=o.p+"assets/img/pixhawk_3dr_receiver_ppm_sbus.d22f5a93.jpg"},559:function(t,e,o){t.exports=o.p+"assets/img/pixhawk_3dr_telemetry_radio.b99e47a6.jpg"},560:function(t,e,o){t.exports=o.p+"assets/img/pixhawk_infographic2.b276a862.jpg"}}]);