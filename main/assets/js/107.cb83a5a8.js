(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{1762:function(t,e,r){"use strict";r.r(e);var a=r(19),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"cuav-pixhawk-v6x-wiring-quick-start"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cuav-pixhawk-v6x-wiring-quick-start"}},[t._v("#")]),t._v(" CUAV Pixhawk V6X Wiring Quick Start")]),t._v(" "),a("p",[t._v("This quick start guide shows how to power the "),a("RouterLink",{attrs:{to:"/en/flight_controller/cuav_pixhawk_v6x.html"}},[t._v("Pixhawk V6X"),a("sup",[t._v("®")])]),t._v(" flight controller and connect its most important peripherals.")],1),t._v(" "),a("h2",{attrs:{id:"wiring-chart-overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wiring-chart-overview"}},[t._v("#")]),t._v(" Wiring Chart Overview")]),t._v(" "),a("p",[t._v("The image below shows how to connect the most important sensors and peripherals (except the motor and servo outputs).\nWe'll go through each of these in detail in the following sections.")]),t._v(" "),a("p",[a("img",{attrs:{src:r(514),alt:"wiring"}})]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Main interface")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("Function")])])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("POWER C1")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Connect CAN PMU SE to this interface; this interface is connected to UAVCAN power module")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("POWER C2")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Connect CAN PMU SE to this interface; this interface is connected to UAVCAN power module")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("POWER 1")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Connect SMbus (I2C) power module")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("POWER 2")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Connect SMbus (I2C) power module")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("GPS&SAFETY")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Connect Neo series GPS/C-RTK 9PS, including GPS, safety switch, buzzer interface.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("GPS2")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Connect GPS/RTK module")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("UART 4")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("User customizable")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("TELEM1/TELME2/TELEM3")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Connect telemetry or MAVLink devices")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("TF CARD")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("SD card for log storage (card pre-inserted in factory).")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("M1~M8")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("IO PWM output (for connecting to ESC and Servo)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("A1~A8")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("FMU PWM output. Can be defined as PWM/GPIO; supports dshot; used to connect camera shutter/hot shoe, servo, etc.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("USB")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Connect to a computer for communication between the flight controller and the computer, such as loading firmware.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("CAN1/CAN2")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Connect Dronecan/UAVCAN devices such as NEO3 Pro.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("DSM/SUB/RSSI")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Includes DSM, SBUS, RSSI signal input interface, DSM interface can be connected to DSM satellite receiver, SBUS interface to SBUS remote control receiver, RSSI for signal strength return module")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("PPM")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Connecting the PPM RC Receiver")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("ETH")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Ethernet interface. Connect Ethernet devices such as task computers")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("AD&IO")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("There are two analog inputs (ADC3.3/ADC6.6); generally not used")])])])]),t._v(" "),a("h2",{attrs:{id:"vehicle-front"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vehicle-front"}},[t._v("#")]),t._v(" Vehicle Front")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("If the controller cannot be mounted in the recommended/default orientation (e.g. due to space constraints) you will need to configure the autopilot software with the orientation that you actually used: "),a("RouterLink",{attrs:{to:"/en/config/flight_controller_orientation.html"}},[t._v("Flight Controller Orientation")]),t._v(".")],1)]),t._v(" "),a("p",[a("img",{attrs:{src:r(515),alt:"front"}})]),t._v(" "),a("h2",{attrs:{id:"gps-compass-buzzer-safety-switch-led"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gps-compass-buzzer-safety-switch-led"}},[t._v("#")]),t._v(" GPS + Compass + Buzzer + Safety Switch + LED")]),t._v(" "),a("p",[t._v("The Pixhawk"),a("sup",[t._v("®")]),t._v(" V6X can be purchased with a "),a("a",{attrs:{href:"https://store.cuav.net/shop/neo-3/",target:"_blank",rel:"noopener noreferrer"}},[t._v("NEO3 GPS"),a("OutboundLink")],1),t._v(" (10-pin connector) and should be connected to the "),a("strong",[t._v("GPS1")]),t._v(" port.\nThese GNSS modules feature an integrated compass, safety switch, buzzer and LEDs.")]),t._v(" "),a("p",[t._v("If you need to use assisted GPS, connect to the "),a("strong",[t._v("GPS2")]),t._v(" port.")]),t._v(" "),a("p",[t._v("The GPS/compass should be "),a("RouterLink",{attrs:{to:"/en/assembly/mount_gps_compass.html"}},[t._v("mounted on the frame")]),t._v(" as far away from other electronics as possible, with the direction markings towards the front of the vehicle (separating the compass from other electronics will reduce interference).")],1),t._v(" "),a("p",[a("img",{attrs:{src:r(516),alt:"GPS"}})]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("Pixhawk V6X"),a("sup",[t._v("®")]),t._v(" is not compatible with NEO V2 GPS built-in buzzer: you should use "),a("a",{attrs:{href:"https://store.cuav.net/shop/neo-3/",target:"_blank",rel:"noopener noreferrer"}},[t._v("NEO3/NEO 3Pro"),a("OutboundLink")],1),t._v(" instead.\nThe GPS module's integrated safety switch is enabled "),a("em",[t._v("by default")]),t._v(" (when enabled, PX4 will not let you arm the vehicle).\nTo disable the safety press and hold the safety switch for 1 second.\nYou can press the safety switch again to enable safety and disarm the vehicle (this can be useful if, for whatever reason, you are unable to disarm the vehicle from your remote control or ground station).")])]),t._v(" "),a("h2",{attrs:{id:"radio-control"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#radio-control"}},[t._v("#")]),t._v(" Radio Control")]),t._v(" "),a("p",[t._v("A remote control (RC) radio system is required if you want to "),a("em",[t._v("manually")]),t._v(" control your vehicle (PX4 does not require a radio system for autonomous flight modes).")]),t._v(" "),a("p",[t._v("You will need to "),a("RouterLink",{attrs:{to:"/en/getting_started/rc_transmitter_receiver.html"}},[t._v("select a compatible transmitter/receiver")]),t._v(" and then "),a("em",[t._v("bind")]),t._v(" them so that they communicate (read the instructions that come with your specific transmitter/receiver).")],1),t._v(" "),a("ul",[a("li",[t._v("Spektrum/DSM receivers connect to the "),a("strong",[t._v("DSM/SBUS")]),t._v(" input.")]),t._v(" "),a("li",[t._v("PPM  receivers connect to the "),a("strong",[t._v("PPM")]),t._v(" input port.")])]),t._v(" "),a("p",[t._v("For more information about selecting a radio system, receiver compatibility, and binding your transmitter/receiver pair, see: "),a("RouterLink",{attrs:{to:"/en/getting_started/rc_transmitter_receiver.html"}},[t._v("Remote Control Transmitters & Receivers")]),t._v(".")],1),t._v(" "),a("p",[a("img",{attrs:{src:r(517),alt:"RC control"}})]),t._v(" "),a("h2",{attrs:{id:"power"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#power"}},[t._v("#")]),t._v(" Power")]),t._v(" "),a("p",[t._v("Pixhawk V6X"),a("sup",[t._v("®")]),t._v(" is equipped with a CAN PMU lite module that supports 3~14s lithium battery.\nConnect the 6pin connector of the module to the flight control "),a("strong",[t._v("Power C1")]),t._v(" or "),a("strong",[t._v("Power C2")]),t._v(" interface.")]),t._v(" "),a("p",[a("img",{attrs:{src:r(518),alt:"Power"}})]),t._v(" "),a("p",[a("em",[t._v("Pixhawk V6X")]),t._v(" power port receives Dronecan digital signal from CAN PMU lite power module for voltage, current and remaining battery data, the VCC line must provide at least 3A continuous current and should default to 5.2V.\nA lower voltage of 5V is still acceptable but discouraged.")]),t._v(" "),a("h2",{attrs:{id:"telemetry-radio-system"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#telemetry-radio-system"}},[t._v("#")]),t._v(" Telemetry (Radio) System")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/en/telemetry/"}},[t._v("Telemetry radios")]),t._v(" may be used to communicate and control a vehicle in flight from a ground station (for example, you can direct the UAV to a particular position, or upload a new mission).")],1),t._v(" "),a("p",[t._v("The vehicle-based radio should be connected to the "),a("strong",[t._v("TELEM1")]),t._v("/"),a("strong",[t._v("TELEM2")]),t._v("/"),a("strong",[t._v("TELEM3")]),t._v(" port as shown below (if connected to "),a("strong",[t._v("TELEM1")]),t._v(", no further configuration is required).\nThe other radio is connected to your ground station computer or mobile device (usually by USB).")]),t._v(" "),a("p",[t._v("You can also purchase telemetry radios from the "),a("a",{attrs:{href:"https://store.cuav.net/uav-telemetry-module/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CUAV store"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[a("img",{attrs:{src:r(519),alt:"Telemetry radios"}})]),t._v(" "),a("h2",{attrs:{id:"sd-card"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sd-card"}},[t._v("#")]),t._v(" SD Card")]),t._v(" "),a("p",[t._v("SD cards are highly recommended as they are required for "),a("RouterLink",{attrs:{to:"/en/getting_started/flight_reporting.html"}},[t._v("recording and analyzing flight details")]),t._v(", running tasks and using UAVCAN bus hardware.\nAn SD card is already installed on Pixhawk V6X"),a("sup",[t._v("®")]),t._v(" when it leaves the factory.")],1),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("For more information see "),a("RouterLink",{attrs:{to:"/en/getting_started/px4_basic_concepts.html#sd-cards-removable-memory"}},[t._v("Basic Concepts > SD Cards (Removable Memory)")]),t._v(".")],1)]),t._v(" "),a("h2",{attrs:{id:"motors-servo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#motors-servo"}},[t._v("#")]),t._v(" Motors/Servo")]),t._v(" "),a("p",[t._v("Motors/servos are connected to the "),a("strong",[t._v("M1~M8")]),t._v(" ("),a("strong",[t._v("MAIN")]),t._v(") and "),a("strong",[t._v("A1~A8")]),t._v(" ("),a("strong",[t._v("AUX")]),t._v(") ports in the order specified for your vehicle in the "),a("RouterLink",{attrs:{to:"/en/airframes/airframe_reference.html"}},[t._v("Airframe Reference")]),t._v(".")],1),t._v(" "),a("p",[a("img",{attrs:{src:r(520),alt:"Motors"}})]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("The "),a("strong",[t._v("MAIN")]),t._v(" outputs in the PX4 firmware are mapped to the Pixhawk V6X's M1~M8 ports (from IO), while the "),a("strong",[t._v("AUX outputs")]),t._v(" are mapped to the A1~A8 ports (from the FMU).\nFor example, "),a("strong",[t._v("MAIN1")]),t._v(" maps to M1 pin and "),a("strong",[t._v("AUX1")]),t._v(' maps to A1 pin.\nThis reference lists the output port to motor/servo mapping for all supported air and ground frames (if your frame is not listed in the reference then use a "generic" airframe of the correct type).')])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("The mapping is not consistent across frames (e.g. you can't rely on the throttle being on the same output for all plane frames).\nMake sure to use the correct mapping for your vehicle.")])]),t._v(" "),a("h2",{attrs:{id:"servo-power-supply"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#servo-power-supply"}},[t._v("#")]),t._v(" Servo Power Supply")]),t._v(" "),a("p",[t._v("Pixhawk V6X"),a("sup",[t._v("®")]),t._v(" does not supply power to the servos.\nIf using a plane or rover, an external BEC (e.g., BEC-equipped ESC or separate 5V BEC or 2S LiPo battery) needs to be connected to any of the power (+) pins in M1~M8/A1~A8 to drive the servos .")]),t._v(" "),a("p",[a("img",{attrs:{src:r(521),alt:"servo power supply"}})]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("The power rail voltage must be appropriate for the servo being used!")])]),t._v(" "),a("h2",{attrs:{id:"other-peripherals"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#other-peripherals"}},[t._v("#")]),t._v(" Other Peripherals")]),t._v(" "),a("p",[t._v("The wiring and configuration of optional/less common components is covered within the topics for individual "),a("RouterLink",{attrs:{to:"/en/peripherals/"}},[t._v("peripherals")]),t._v(".")],1),t._v(" "),a("h2",{attrs:{id:"pinouts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pinouts"}},[t._v("#")]),t._v(" Pinouts")]),t._v(" "),a("p",[a("img",{attrs:{src:r(359),alt:"Pixhawk V6x Pinout"}})]),t._v(" "),a("h2",{attrs:{id:"configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),a("p",[t._v("General configuration information is covered in: "),a("RouterLink",{attrs:{to:"/en/config/"}},[t._v("Autopilot Configuration")]),t._v(".")],1),t._v(" "),a("p",[t._v("QuadPlane specific configuration is covered here: "),a("RouterLink",{attrs:{to:"/en/config_vtol/vtol_quad_configuration.html"}},[t._v("QuadPlane VTOL Configuration")])],1),t._v(" "),a("h2",{attrs:{id:"further-information"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#further-information"}},[t._v("#")]),t._v(" Further information")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://doc.cuav.net/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CUAV Docs"),a("OutboundLink")],1),t._v(" (CUAV)")]),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/en/flight_controller/cuav_pixhawk_v6x.html"}},[t._v("Pixhawk V6X")]),t._v(" (PX4 Doc Overview page)")],1),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/pixhawk/Pixhawk-Standards/blob/master/DS-012%20Pixhawk%20Autopilot%20v6X%20Standard.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk Autopilot FMUv6X Standard"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/pixhawk/Pixhawk-Standards/blob/master/DS-010%20Pixhawk%20Autopilot%20Bus%20Standard.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk Autopilot Bus Standard"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("[Pixhawk Connector Standard](https://github.com/pixhawk/Pixhawk-Standards/blob/master/DS-009%20Pixhawk%20Connector%20Standard.pdf）")])])])}),[],!1,null,null,null);e.default=o.exports},359:function(t,e,r){t.exports=r.p+"assets/img/pixhawk_v6x_pinouts.17f4838f.png"},514:function(t,e,r){t.exports=r.p+"assets/img/quickstart_01_en.6c3cca77.jpg"},515:function(t,e,r){t.exports=r.p+"assets/img/quickstart_02.1a83fb02.jpg"},516:function(t,e,r){t.exports=r.p+"assets/img/quickstart_03.a68fd945.jpg"},517:function(t,e,r){t.exports=r.p+"assets/img/quickstart_04.79118f6b.jpg"},518:function(t,e,r){t.exports=r.p+"assets/img/quickstart_05.17246123.jpg"},519:function(t,e,r){t.exports=r.p+"assets/img/quickstart_06.ed997759.jpg"},520:function(t,e,r){t.exports=r.p+"assets/img/quickstart_07.878ad67b.jpg"},521:function(t,e,r){t.exports=r.p+"assets/img/quickstart_08.975c10e4.jpg"}}]);