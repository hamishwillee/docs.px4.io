(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{1497:function(t,e,o){"use strict";o.r(e);var a=o(19),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"cuav-v5-wiring-quick-start"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cuav-v5-wiring-quick-start"}},[t._v("#")]),t._v(" CUAV V5+ Wiring Quick Start")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("PX4 does not manufacture this (or any) autopilot.\nContact the "),a("a",{attrs:{href:"https://store.cuav.net/",target:"_blank",rel:"noopener noreferrer"}},[t._v("manufacturer"),a("OutboundLink")],1),t._v(" for hardware support or compliance issues.")])]),t._v(" "),a("p",[t._v("This quick start guide shows how to power the "),a("RouterLink",{attrs:{to:"/en/flight_controller/cuav_v5_plus.html"}},[t._v("CUAV V5+")]),t._v(" flight controller and connect its most important peripherals.")],1),t._v(" "),a("p",[a("img",{attrs:{src:o(347),alt:"V5+ AutoPilot - Hero Image"}})]),t._v(" "),a("h2",{attrs:{id:"wiring-chart-overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wiring-chart-overview"}},[t._v("#")]),t._v(" Wiring Chart Overview")]),t._v(" "),a("p",[t._v("The image below shows how to connect the most important sensors and peripherals (except the motor and servo outputs).\nWe'll go through each of these in detail in the following sections.")]),t._v(" "),a("p",[a("img",{attrs:{src:o(435),alt:"V5+ AutoPilot"}})]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Main interface")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Function")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Power1")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Connect power module. Power input with "),a("em",[t._v("analog")]),t._v(" voltage and current detection. Do not use a Digital PM on this connector!")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Power2")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Connect i2c smart battery.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("TF CARD")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("SD card for log storage (card pre-inserted in factory).")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("M1~M8")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("PWM outputs. Can be used to control motors or servos.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("A1~A6")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("PWM outputs. Can be used to control motors or servos.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("DSU7")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Used for FMU debug, reading debug information.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("I2C1/I2C2")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Connect an I2C device such as an external compass.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("CAN1/CAN2")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Connect UAVCAN devices such as CAN GPS.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("TYPE-C(USB)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Connect to a computer for communication between the flight controller and the computer, such as loading firmware.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("SBUS OUT")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Connect SBUS devices (e.g. camera gimbals).")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("GPS&SAFETY")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Connect to Neo GPS, which includes GPS, safety switch, buzzer interface.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("TELEM1/TELEM2")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Connect to the Telemetry System.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("DSM/SBUS/RSSI")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Includes DSM, SBUS, RSSI signal input interface, DSM interface can be connected to DSM satellite receiver, SBUS interface to SBUS remote control receiver, RSSI for signal strength return module.")])])])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("For more interface information, please read "),a("a",{attrs:{href:"http://manual.cuav.net/V5-Plus.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("V5+ Manual"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("p",[a("img",{attrs:{src:o(436),alt:"V5+ AutoPilot"}})]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("If the controller cannot be mounted in the recommended/default orientation (e.g. due to space constraints) you will need to configure the autopilot software with the orientation that you actually used: "),a("RouterLink",{attrs:{to:"/en/advanced_features/rtk-gps.html"}},[t._v("Flight Controller Orientation")]),t._v(".")],1)]),t._v(" "),a("h2",{attrs:{id:"gps-compass-safety-switch-led"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gps-compass-safety-switch-led"}},[t._v("#")]),t._v(" GPS + Compass + Safety Switch + LED")]),t._v(" "),a("p",[t._v("The recommended GPS module is the "),a("em",[t._v("Neo v2 GPS")]),t._v(", which contains GPS, compass, safety switch, buzzer, LED status light.")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("Other GPS modules may not work (see "),a("RouterLink",{attrs:{to:"/en/flight_controller/cuav_v5_nano.html#compatibility_gps"}},[t._v("this compatibility issue")]),t._v(")).")],1)]),t._v(" "),a("p",[t._v("The GPS/Compass module should be mounted on the frame as far away from other electronics as possible, with the direction marker towards the front of the vehicle ("),a("em",[t._v("Neo v2 GPS")]),t._v(" arrow is in the same direction as the flight control arrow).\nConnect to the flight control GPS interface using a cable.")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("If you use the "),a("a",{attrs:{href:"http://doc.cuav.net/gps/neo-series-gnss/en/neo-v2-pro.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("NEO V2 PRO GNSS (CAN GPS)"),a("OutboundLink")],1),t._v(", please use the cable to connect to the flight control CAN interface.")])]),t._v(" "),a("p",[a("img",{attrs:{src:o(484),alt:"V5+ AutoPilot"}})]),t._v(" "),a("h2",{attrs:{id:"safety-switch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#safety-switch"}},[t._v("#")]),t._v(" Safety Switch")]),t._v(" "),a("p",[t._v("The dedicated safety switch that comes with the V5+ is only required if you are not using the recommended "),a("em",[t._v("Neo V2 GPS")]),t._v(" (which has an inbuilt safety switch).")]),t._v(" "),a("p",[t._v("If you are flying without the GPS you must attach the switch directly to the "),a("code",[t._v("GPS1")]),t._v(" port in order to be able to arm the vehicle and fly (if you use the old 6-pin GPS, please read the definition of the bottom interface to change the line).")]),t._v(" "),a("h2",{attrs:{id:"buzzer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#buzzer"}},[t._v("#")]),t._v(" Buzzer")]),t._v(" "),a("p",[t._v("If you do not use the recommended GPS, the buzzer may not work.")]),t._v(" "),a("h2",{attrs:{id:"radio-control"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#radio-control"}},[t._v("#")]),t._v(" Radio Control")]),t._v(" "),a("p",[t._v("A remote control (RC) radio system is required if you want to manually control your vehicle (PX4 does not require a radio system for autonomous flight modes).\nYou will need to select a compatible transmitter/receiver and then bind them so that they communicate (read the instructions that come with your specific transmitter/receiver).")]),t._v(" "),a("p",[t._v("The figure below shows how you can access your remote receiver (please find the SBUS cable in the kit).")]),t._v(" "),a("p",[a("img",{attrs:{src:o(485),alt:"V5+ AutoPilot"}})]),t._v(" "),a("h2",{attrs:{id:"spektrum-satellite-receivers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spektrum-satellite-receivers"}},[t._v("#")]),t._v(" Spektrum Satellite Receivers")]),t._v(" "),a("p",[t._v("The V5+ has a dedicated DSM cable.\nIf using a Spektrum satellite receiver, this should be connected to the flight controller DSM/SBUS/RSSI interface.")]),t._v(" "),a("h2",{attrs:{id:"power"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#power"}},[t._v("#")]),t._v(" Power")]),t._v(" "),a("p",[t._v("The V5+ kit includes the "),a("em",[t._v("HV_PM")]),t._v(" module, which supports 2~14S LiPo batteries.\nConnect the 6pin connector of the "),a("em",[t._v("HW_PM")]),t._v(" module to the flight control "),a("code",[t._v("Power1")]),t._v(" interface.")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("The supplied power module is unfused.\nPower "),a("strong",[t._v("must")]),t._v(" be turned off while connecting peripherals.")])]),t._v(" "),a("p",[a("img",{attrs:{src:o(435),alt:"V5+ AutoPilot"}})]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("The power module is not a power source for peripherals connected to the PWM outputs.\nIf you're connecting servos/actuators you will need to separately power them using a BEC.")])]),t._v(" "),a("h2",{attrs:{id:"telemetry-system-optional"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#telemetry-system-optional"}},[t._v("#")]),t._v(" Telemetry System (Optional)")]),t._v(" "),a("p",[t._v("A telemetry system allows you to communicate with, monitor, and control a vehicle in flight from a ground station (for example, you can direct the UAV to a particular position, or upload a new mission).")]),t._v(" "),a("p",[t._v("The communication channel is via Telemetry Radios.\nThe vehicle-based radio should be connected to either the "),a("code",[t._v("TELEM1")]),t._v(" or "),a("code",[t._v("TELEM2")]),t._v(" port (if connected to these ports, no further configuration is required).\nThe other radio is connected to your ground station computer or mobile device (usually via USB).")]),t._v(" "),a("p",[a("img",{attrs:{src:o(486),alt:"V5+ AutoPilot"}})]),t._v(" "),a("p",[a("span",{attrs:{id:"sd_card"}})]),t._v(" "),a("h2",{attrs:{id:"sd-card-optional"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sd-card-optional"}},[t._v("#")]),t._v(" SD Card (Optional)")]),t._v(" "),a("p",[t._v("An "),a("RouterLink",{attrs:{to:"/en/getting_started/px4_basic_concepts.html#sd_cards"}},[t._v("SD card")]),t._v(" is inserted in the factory (you do not need to do anything).")],1),t._v(" "),a("h2",{attrs:{id:"motors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#motors"}},[t._v("#")]),t._v(" Motors")]),t._v(" "),a("p",[t._v("Motors/servos are connected to the MAIN and AUX ports in the order specified for your vehicle in the "),a("RouterLink",{attrs:{to:"/en/airframes/airframe_reference.html"}},[t._v("Airframes Reference")]),t._v(".")],1),t._v(" "),a("p",[a("img",{attrs:{src:o(487),alt:"V5+ AutoPilot"}})]),t._v(" "),a("h2",{attrs:{id:"pinouts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pinouts"}},[t._v("#")]),t._v(" Pinouts")]),t._v(" "),a("p",[t._v("Download "),a("strong",[t._v("V5+")]),t._v(" pinouts from "),a("a",{attrs:{href:"http://manual.cuav.net/V5-Plus.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"further-information"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#further-information"}},[t._v("#")]),t._v(" Further Information")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/en/frames_multicopter/dji_f450_cuav_5plus.html"}},[t._v("Airframe build-log using CUAV v5+ on a DJI FlameWheel450")])],1),t._v(" "),a("li",[a("a",{attrs:{href:"http://manual.cuav.net/V5-Plus.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("CUAV V5+ Manual"),a("OutboundLink")],1),t._v("  (CUAV)")]),t._v(" "),a("li",[a("a",{attrs:{href:"http://doc.cuav.net/flight-controller/v5-autopilot/en/v5+.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("CUAV V5+ docs"),a("OutboundLink")],1),t._v(" (CUAV)")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://docs.google.com/spreadsheets/d/1-n0__BYDedQrc_2NHqBenG1DNepAgnHpSGglke-QQwY/edit#gid=912976165",target:"_blank",rel:"noopener noreferrer"}},[t._v("FMUv5 reference design pinout"),a("OutboundLink")],1),t._v("  (CUAV)")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/cuav",target:"_blank",rel:"noopener noreferrer"}},[t._v("CUAV Github"),a("OutboundLink")],1),t._v("  (CUAV)")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/cuav/hardware/tree/master/V5_Autopilot/V5%2B/V5%2BBASE",target:"_blank",rel:"noopener noreferrer"}},[t._v("Base board design reference"),a("OutboundLink")],1),t._v(" (CUAV)")])])])}),[],!1,null,null,null);e.default=r.exports},347:function(t,e,o){t.exports=o.p+"assets/img/v5+_01.e440c966.png"},435:function(t,e,o){t.exports=o.p+"assets/img/v5+_quickstart_01.709e00df.png"},436:function(t,e,o){t.exports=o.p+"assets/img/v5+_quickstart_02.bf70c46a.png"},484:function(t,e,o){t.exports=o.p+"assets/img/v5+_quickstart_03.0e9a2e9f.png"},485:function(t,e,o){t.exports=o.p+"assets/img/v5+_quickstart_04.b866bc60.png"},486:function(t,e,o){t.exports=o.p+"assets/img/v5+_quickstart_06.cc819a92.png"},487:function(t,e,o){t.exports=o.p+"assets/img/v5+_quickstart_07.f496a32c.png"}}]);