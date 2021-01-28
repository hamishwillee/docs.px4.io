(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{1863:function(t,e,a){"use strict";a.r(e);var o=a(18),r=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"cuav-v5-nano-wiring-quick-start"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cuav-v5-nano-wiring-quick-start"}},[t._v("#")]),t._v(" CUAV V5 nano Wiring Quick Start")]),t._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[t._v("PX4 does not manufacture this (or any) autopilot. Contact the [manufacturer](https://store.cuav.net/) for hardware support or compliance issues.")])]),t._v(" "),o("p",[t._v("This quick start guide shows how to power the "),o("RouterLink",{attrs:{to:"/ko/flight_controller/cuav_v5_nano.html"}},[t._v("CUAV V5 nano")]),t._v(" flight controller and connect its most important peripherals.")],1),t._v(" "),o("p",[o("img",{attrs:{src:a(341),alt:"Nano Hero Image"}})]),t._v(" "),o("h2",{attrs:{id:"wiring-chart-overview"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#wiring-chart-overview"}},[t._v("#")]),t._v(" Wiring Chart Overview")]),t._v(" "),o("p",[t._v("The image below shows how to connect the most important sensors and peripherals (except the motor and servo outputs). We'll go through each of these in detail in the following sections.")]),t._v(" "),o("p",[o("img",{attrs:{src:a(498),alt:"quickstart"}})]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",{staticStyle:{"text-align":"left"}},[t._v("Main interface")]),t._v(" "),o("th",{staticStyle:{"text-align":"left"}},[t._v("Function")])])]),t._v(" "),o("tbody",[o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("Power")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("Connect Power module; Provides Power and ANALOG voltage and current measurements.")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("PM2")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[o("RouterLink",{attrs:{to:"/ko/flight_controller/cuav_v5_nano.html#compatibility_pm2"}},[t._v("Do not use with PX4")])],1)]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("TF CARD")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("SD card for log storage (comes with card)")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("M1~M8")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("PWM outputs. Can be used to control motors or servos.")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("A1~A3")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("Capture pins (not "),o("em",[t._v("currently")]),t._v(" supported on PX4).")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("nARMED")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("Indicates the FMU armed state. It is active low (low when armed).")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("DSU7")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("Used for FMU debug, reading debug information.")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("I2C2/I2C3/I2C4")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("Connect an I2C device such as an external compass.")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("CAN1/CAN2")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("Connect UAVCAN devices such as CAN GPS.")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("TYPE-C(USB)")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("Connect to a computer for communication between the flight controller and the computer, such as loading firmware")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("GPS&SAFETY")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("Connect to Neo GPS, which includes GPS, safety switch, buzzer interface.")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("TELEM1/TELEM2")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("Connect to the Telemetry System.")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("DSM/SBUS/RSSI")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("Includes DSM, SBUS, RSSI signal input interface, DSM interface can be connected to DSM satellite receiver, SBUS interface to SBUS remote control receiver, RSSI for signal strength return module.")])])])]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("For more interface information, please read "),o("a",{attrs:{href:"http://manual.cuav.net/V5-nano.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("V5 nano Manual"),o("OutboundLink")],1),t._v(".")])]),t._v(" "),o("p",[o("img",{attrs:{src:a(499),alt:"quickstart"}})]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("If the controller cannot be mounted in the recommended/default orientation (e.g. due to space constraints) you will need to configure the autopilot software with the orientation that you actually used: "),o("RouterLink",{attrs:{to:"/ko/advanced_features/rtk-gps.html"}},[t._v("Flight Controller Orientation")]),t._v(".")],1)]),t._v(" "),o("h2",{attrs:{id:"gps-compass-safety-switch-led"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#gps-compass-safety-switch-led"}},[t._v("#")]),t._v(" GPS + Compass + Safety Switch + LED")]),t._v(" "),o("p",[t._v("The recommended GPS module is the "),o("em",[t._v("Neo v2 GPS")]),t._v(", which contains GPS, compass, safety switch, buzzer, LED status light.")]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("Other GPS modules may not work (see "),o("RouterLink",{attrs:{to:"/ko/flight_controller/cuav_v5_nano.html#compatibility_gps"}},[t._v("this compatibility issue")]),t._v(").")],1)]),t._v(" "),o("p",[t._v("The GPS/Compass module should be mounted on the frame as far away from other electronics as possible, with the direction marker towards the front of the vehicle (Neo GPS arrow is in the same direction as the flight control arrow). Connect to the flight control GPS interface using a cable.")]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("If you use CAN GPS, please use the cable to connect to the flight control CAN interface.")])]),t._v(" "),o("p",[o("img",{attrs:{src:a(500),alt:"quickstart"}})]),t._v(" "),o("h2",{attrs:{id:"safety-switch"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#safety-switch"}},[t._v("#")]),t._v(" Safety Switch")]),t._v(" "),o("p",[t._v("The dedicated safety switch that comes with the V5+ is only required if you are not using the recommended "),o("em",[t._v("Neo v2 GPS")]),t._v(" (which has an inbuilt safety switch).")]),t._v(" "),o("p",[t._v("If you are flying without the GPS you must attach the switch directly to the "),o("code",[t._v("GPS1")]),t._v(" port in order to be able to arm the vehicle and fly (If you use the old 6-pin GPS, please read the definition of the bottom interface to change the line).")]),t._v(" "),o("h2",{attrs:{id:"buzzer"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#buzzer"}},[t._v("#")]),t._v(" Buzzer")]),t._v(" "),o("p",[t._v("If you do not use the recommended "),o("em",[t._v("Neo v2 GPS")]),t._v(" the buzzer may not work.")]),t._v(" "),o("h2",{attrs:{id:"radio-control"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#radio-control"}},[t._v("#")]),t._v(" Radio Control")]),t._v(" "),o("p",[t._v("A remote control (RC) radio system is required if you want to manually control your vehicle (PX4 does not require a radio system for autonomous flight modes). You will need to select a compatible transmitter/receiver and then bind them so that they communicate (read the instructions that come with your specific transmitter/receiver).")]),t._v(" "),o("p",[t._v("The figure below shows how you can access your remote receiver (please find the S.Bus cable in the kit)")]),t._v(" "),o("p",[o("img",{attrs:{src:a(501),alt:"quickstart"}})]),t._v(" "),o("h2",{attrs:{id:"spektrum-satellite-receivers"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#spektrum-satellite-receivers"}},[t._v("#")]),t._v(" Spektrum Satellite Receivers")]),t._v(" "),o("p",[t._v("The V5 nano has a dedicated DSM cable. If using a Spektrum satellite receiver, this should be connected to the flight controller "),o("code",[t._v("DSM/SBUS/RSSI")]),t._v(" interface.")]),t._v(" "),o("h2",{attrs:{id:"power"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#power"}},[t._v("#")]),t._v(" Power")]),t._v(" "),o("p",[t._v("The "),o("em",[t._v("v5 nano")]),t._v(" kit includes the "),o("em",[t._v("HV_PM")]),t._v(" module, which supports 2~14S LiPo batteries. Connect the 6pin connector of the "),o("em",[t._v("HW_PM")]),t._v(" module to the flight control "),o("code",[t._v("Power")]),t._v(" interface.")]),t._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),o("p",[t._v("The supplied power module is unfused. Power "),o("strong",[t._v("must")]),t._v(" be turned off while connecting peripherals.")])]),t._v(" "),o("p",[o("img",{attrs:{src:a(403),alt:"quickstart"}})]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("The power module is not a power source for peripherals connected to the PWM outputs. If you're connecting servos/actuators you will need to separately power them using a BEC.")])]),t._v(" "),o("h2",{attrs:{id:"telemetry-system-optional"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#telemetry-system-optional"}},[t._v("#")]),t._v(" Telemetry System (Optional)")]),t._v(" "),o("p",[t._v("A telemetry system allows you to communicate with, monitor, and control a vehicle in flight from a ground station (for example, you can direct the UAV to a particular position, or upload a new mission).")]),t._v(" "),o("p",[t._v("The communication channel is via Telemetry Radios. The vehicle-based radio should be connected to the "),o("strong",[t._v("TELEM1")]),t._v(" or "),o("strong",[t._v("TELEM2")]),t._v(" port (if connected to these ports, no further configuration is required). The other radio is connected to your ground station computer or mobile device (usually via USB).")]),t._v(" "),o("p",[o("img",{attrs:{src:a(502),alt:"quickstart"}})]),t._v(" "),o("p",[o("span",{attrs:{id:"sd_card"}})]),t._v(" "),o("h2",{attrs:{id:"sd-card-optional"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#sd-card-optional"}},[t._v("#")]),t._v(" SD Card (Optional)")]),t._v(" "),o("p",[t._v("An "),o("RouterLink",{attrs:{to:"/ko/getting_started/px4_basic_concepts.html#sd_cards"}},[t._v("SD card")]),t._v(" is inserted in the factory (you do not need to do anything).")],1),t._v(" "),o("h2",{attrs:{id:"motors"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#motors"}},[t._v("#")]),t._v(" Motors")]),t._v(" "),o("p",[t._v("Motors/servos are connected to the MAIN ports in the order specified for your vehicle in the "),o("RouterLink",{attrs:{to:"/ko/airframes/airframe_reference.html"}},[t._v("Airframes Reference")]),t._v(".")],1),t._v(" "),o("p",[o("img",{attrs:{src:a(403),alt:"quickstart"}})]),t._v(" "),o("h2",{attrs:{id:"pinouts"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#pinouts"}},[t._v("#")]),t._v(" Pinouts")]),t._v(" "),o("p",[o("img",{attrs:{src:a(503),alt:"V5 nano pinouts"}})]),t._v(" "),o("h2",{attrs:{id:"further-information"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#further-information"}},[t._v("#")]),t._v(" Further Information")]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/ko/frames_multicopter/dji_f450_cuav_5nano.html"}},[t._v("Airframe buildlog using CUAV v5 nano on a DJI FlameWheel450")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/ko/flight_controller/cuav_v5_nano.html"}},[t._v("CUAV V5 nano")])],1),t._v(" "),o("li",[o("a",{attrs:{href:"http://manual.cuav.net/V5-nano.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("V5 nano manual"),o("OutboundLink")],1),t._v(" (CUAV)")]),t._v(" "),o("li",[o("a",{attrs:{href:"https://docs.google.com/spreadsheets/d/1-n0__BYDedQrc_2NHqBenG1DNepAgnHpSGglke-QQwY/edit#gid=912976165",target:"_blank",rel:"noopener noreferrer"}},[t._v("FMUv5 reference design pinout"),o("OutboundLink")],1),t._v(" (CUAV)")]),t._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/cuav",target:"_blank",rel:"noopener noreferrer"}},[t._v("CUAV Github"),o("OutboundLink")],1),t._v(" (CUAV)")])])])}),[],!1,null,null,null);e.default=r.exports},341:function(t,e,a){t.exports=a.p+"assets/img/v5_nano_01.2740caf1.png"},403:function(t,e,a){t.exports=a.p+"assets/img/v5_nano_quickstart_06.34392241.png"},498:function(t,e,a){t.exports=a.p+"assets/img/v5_nano_quickstart_02.d140e43d.png"},499:function(t,e,a){t.exports=a.p+"assets/img/v5_nano_quickstart_03.fe3368b3.png"},500:function(t,e,a){t.exports=a.p+"assets/img/v5_nano_quickstart_04.9fea41bc.png"},501:function(t,e,a){t.exports=a.p+"assets/img/v5_nano_quickstart_05.b3b133f3.png"},502:function(t,e,a){t.exports=a.p+"assets/img/v5_nano_quickstart_07.26bbea38.png"},503:function(t,e,a){t.exports=a.p+"assets/img/v5_nano_pinouts.adb5edc0.png"}}]);