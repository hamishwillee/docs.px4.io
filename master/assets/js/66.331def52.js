(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{1480:function(t,e,o){"use strict";o.r(e);var r=o(18),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"pix32-v5-wiring-quick-start"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pix32-v5-wiring-quick-start"}},[t._v("#")]),t._v(" Pix32 v5 Wiring Quick Start")]),t._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),r("p",[t._v("PX4 does not manufacture this (or any) autopilot.\nContact the "),r("a",{attrs:{href:"https://shop.holybro.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("manufacturer"),r("OutboundLink")],1),t._v(" for hardware support or compliance issues.")])]),t._v(" "),r("p",[t._v("This quick start guide shows how to power the "),r("RouterLink",{attrs:{to:"/en/flight_controller/holybro_pix32_v5.html"}},[t._v("Holybro Pix32v5")]),r("sup",[t._v("®")]),t._v(" flight controller and connect its most important peripherals.")],1),t._v(" "),r("p",[r("img",{attrs:{src:o(536),alt:"Pix32 v5 With Base"}})]),t._v(" "),r("h2",{attrs:{id:"unboxing"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#unboxing"}},[t._v("#")]),t._v(" Unboxing")]),t._v(" "),r("p",[t._v("Pix32 v5 is sold bundled with a number of different combinations of accessories, including the "),r("em",[t._v("pix32 v5 Base board")]),t._v(", power module "),r("em",[t._v("PM02 V3")]),t._v(", and the "),r("a",{attrs:{href:"https://shop.holybro.com/pixhawk-4-gps-module_p1094.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk 4 GPS/Compass"),r("OutboundLink")],1),t._v(" (UBLOX NEO-M8N).")]),t._v(" "),r("p",[t._v("The content of the box with the "),r("em",[t._v("PM02 V3")]),t._v(" power module and "),r("em",[t._v("Pixhawk 4 GPS/Compass")]),t._v(" is shown below.\nThe box also includes a pinout guide and power module instructions, and Base board (not shown on the schematic below).")]),t._v(" "),r("p",[r("img",{attrs:{src:o(537),alt:"Pix32 v5 Box"}})]),t._v(" "),r("h2",{attrs:{id:"wiring-chart-overview"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#wiring-chart-overview"}},[t._v("#")]),t._v(" Wiring Chart Overview")]),t._v(" "),r("p",[t._v("The image below shows how to connect the most important sensors and peripherals (except the motor and servo outputs).\nWe'll go through each of these in detail in the following sections.")]),t._v(" "),r("p",[r("img",{attrs:{src:o(538),alt:"Pix32 v5 Wiring Overview"}})]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[t._v("More information about available ports can be found "),r("a",{attrs:{href:"http://www.holybro.com/manual/Holybro_PIX32-V5_PINOUTS_V1.1.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),r("OutboundLink")],1),t._v(".")])]),t._v(" "),r("h2",{attrs:{id:"mount-and-orient-controller"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mount-and-orient-controller"}},[t._v("#")]),t._v(" Mount and Orient Controller")]),t._v(" "),r("p",[r("em",[t._v("Pix32 v5")]),t._v("  should be mounted on the frame positioned as close to your vehicle’s center of gravity as possible, oriented top-side up with the arrow pointing towards the front of the vehicle.")]),t._v(" "),r("p",[r("img",{attrs:{src:o(539),alt:"Pix32 v5 With Orientation"}})]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("If the controller cannot be mounted in the recommended/default orientation (e.g. due to space constraints) you will need to configure the autopilot software with the orientation that you actually used: "),r("RouterLink",{attrs:{to:"/en/config/flight_controller_orientation.html"}},[t._v("Flight Controller Orientation")]),t._v(".")],1)]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[t._v("The board has internal vibration-isolation.\nDo not use vibration-isolation foam to mount the controller (double sided tape is normally sufficient).")])]),t._v(" "),r("h2",{attrs:{id:"gps-compass-buzzer-safety-switch-led"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#gps-compass-buzzer-safety-switch-led"}},[t._v("#")]),t._v(" GPS + Compass + Buzzer + Safety Switch + LED")]),t._v(" "),r("p",[t._v("Pix32 v5 is designed to work well with the "),r("a",{attrs:{href:"https://shop.holybro.com/pixhawk-4-gps-module_p1094.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk 4 GPS module"),r("OutboundLink")],1),t._v(", which has an integrated compass, safety switch, buzzer and LED.\nIt connects directly to the "),r("RouterLink",{attrs:{to:"/en/flight_controller/holybro_pix32_v5.html#gps"}},[t._v("GPS port")]),t._v(" using the 10 pin cable.")],1),t._v(" "),r("p",[t._v("The GPS/Compass should be mounted on the frame as far away from other electronics as possible, with the direction marker towards the front of the vehicle (separating the compass from other electronics will reduce interference).")]),t._v(" "),r("p",[r("img",{attrs:{src:o(540),alt:"Pix32 v5 with GPS"}})]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("The GPS module's integrated safety switch is enabled "),r("em",[t._v("by default")]),t._v(" (when enabled, PX4 will not let you arm the vehicle).\nTo disable the safety press and hold the safety switch for 1 second.\nYou can press the safety switch again to enable safety and disarm the vehicle (this can be useful if, for whatever reason, you are unable to disarm the vehicle from your remote control or ground station).")])]),t._v(" "),r("h2",{attrs:{id:"power"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#power"}},[t._v("#")]),t._v(" Power")]),t._v(" "),r("p",[t._v("You can use a power module or power distribution board to power motors/servos and measure power consumption.\nThe recommended power modules are shown below.")]),t._v(" "),r("p",[r("span",{attrs:{id:"pm02_v3"}})]),t._v(" "),r("h3",{attrs:{id:"pm02-v3-power-module"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pm02-v3-power-module"}},[t._v("#")]),t._v(" PM02 v3 Power Module")]),t._v(" "),r("p",[t._v("The "),r("a",{attrs:{href:"https://shop.holybro.com/power-modulepm02-v3_p1185.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Power Module (PM02 v3)"),r("OutboundLink")],1),t._v(" can be bundled with "),r("em",[t._v("pix32 v5")]),t._v(".\nIt provides regulated power to flight controller and sends battery voltage/current to the flight controller.")]),t._v(" "),r("p",[t._v("Connect the output of the "),r("em",[t._v("Power Module")]),t._v(" as shown.")]),t._v(" "),r("p",[r("img",{attrs:{src:o(541),alt:"Pix32 v5 With Power Module"}})]),t._v(" "),r("ul",[r("li",[t._v("PM voltage/current port: connect to POWER1 port (or "),r("code",[t._v("POWER2")]),t._v(") using the 6-wire GH cable supplied.")]),t._v(" "),r("li",[t._v("PM input (XT60 male connector): connect to the LiPo battery (2~12S).")]),t._v(" "),r("li",[t._v("PM power output (XT60 female connector): wire out to any motor ESCs.")])]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("As this power module does not include power distribution wiring, you would normally just connect all the ESCs in parallel to the power module output (the ESC must be appropriate for the supplied voltage level).")])]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("The 8 pin power (+) rail of "),r("strong",[t._v("MAIN/AUX")]),t._v(" is not powered by the power module supply to the flight controller.\nIf it will need to be separately powered in order to drive servos for rudders, elevons etc., the power rail needs to be connected to a BEC equipped ESC or a standalone 5V BEC or a 2S LiPo battery.\nEnsure the voltage of servo you are going to use is appropriate.")])]),t._v(" "),r("p",[t._v("The power module has the following characteristics/limits:")]),t._v(" "),r("ul",[r("li",[t._v("Max input voltage: 60V")]),t._v(" "),r("li",[t._v("Max current sensing: 120A Voltage")]),t._v(" "),r("li",[t._v("Current measurement configured for SV ADC Switching regulator outputs 5.2V and 3A max")]),t._v(" "),r("li",[t._v("Weight: 20g")]),t._v(" "),r("li",[t._v("Package includes:\n"),r("ul",[r("li",[t._v("PM02 board")]),t._v(" "),r("li",[t._v("6pin MLX cable (1)")]),t._v(" "),r("li",[t._v("6pin GH cable (1)")])])])]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("See also "),r("a",{attrs:{href:"http://www.holybro.com/manual/Holybro_PM02_v3_PowerModule_Manual.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("PM02v3 Power Module Manual"),r("OutboundLink")],1),t._v(" (Holybro).")])]),t._v(" "),r("h3",{attrs:{id:"battery-configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#battery-configuration"}},[t._v("#")]),t._v(" Battery Configuration")]),t._v(" "),r("p",[t._v("The battery/power setup must be configured in "),r("RouterLink",{attrs:{to:"/en/config/battery.html"}},[t._v("Power Settings")]),t._v(".\nFor either Power Module you will need to configure the "),r("em",[t._v("Number of Cells")]),t._v(".")],1),t._v(" "),r("p",[t._v("You will not need to update the "),r("em",[t._v("voltage divider")]),t._v(" unless you are using some other power module (e.g. the one from the Pixracer).")]),t._v(" "),r("h2",{attrs:{id:"radio-control"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#radio-control"}},[t._v("#")]),t._v(" Radio Control")]),t._v(" "),r("p",[t._v("A remote control (RC) radio system is required if you want to "),r("em",[t._v("manually")]),t._v(" control your vehicle (PX4 does not require a radio system for autonomous flight modes).")]),t._v(" "),r("p",[t._v("You will need to "),r("RouterLink",{attrs:{to:"/en/getting_started/rc_transmitter_receiver.html"}},[t._v("select a compatible transmitter/receiver")]),t._v(" and then "),r("em",[t._v("bind")]),t._v(" them so that they communicate (read the instructions that come with your specific transmitter/receiver).")],1),t._v(" "),r("p",[t._v("The instructions below show how to connect the different types of receivers to "),r("em",[t._v("Pix32 v5")]),t._v(" with Baseboard:")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("Spektrum/DSM receivers connect to the "),r("RouterLink",{attrs:{to:"/en/flight_controller/holybro_pix32_v5.html#dsm-rc-port"}},[t._v("DSM RC")]),t._v(" input.")],1),t._v(" "),r("p",[r("img",{attrs:{src:o(542),alt:"Pix32v5 rc receivers"}})])]),t._v(" "),r("li",[r("p",[t._v("PPM and S.Bus receivers connect to the "),r("RouterLink",{attrs:{to:"/en/flight_controller/holybro_pix32_v5.html#rc-in"}},[t._v("SBUS_IN/PPM_IN")]),t._v(" input port (marked as RC IN)")],1),t._v(" "),r("p",[r("img",{attrs:{src:o(404),alt:"Pinouts"}})])]),t._v(" "),r("li",[r("p",[t._v("PPM and PWM receivers that have an "),r("em",[t._v("individual wire for each channel")]),t._v(" must connect to the "),r("strong",[t._v("PPM RC")]),t._v(" port "),r("em",[t._v("via a PPM encoder")]),t._v(" "),r("a",{attrs:{href:"http://www.getfpv.com/radios/radio-accessories/holybro-ppm-encoder-module.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("like this one"),r("OutboundLink")],1),t._v(" (PPM-Sum receivers use a single signal wire for all channels).")])])]),t._v(" "),r("p",[t._v("For more information about selecting a radio system, receiver compatibility, and binding your transmitter/receiver pair, see: "),r("RouterLink",{attrs:{to:"/en/getting_started/rc_transmitter_receiver.html"}},[t._v("Remote Control Transmitters & Receivers")]),t._v(".")],1),t._v(" "),r("h2",{attrs:{id:"telemetry-radios-optional"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#telemetry-radios-optional"}},[t._v("#")]),t._v(" Telemetry Radios (Optional)")]),t._v(" "),r("p",[t._v("Telemetry radios may be used to communicate and control a vehicle in flight from a ground station (for example, you can direct the UAV to a particular position, or upload a new mission).")]),t._v(" "),r("p",[t._v("The vehicle-based radio should be connected to the "),r("strong",[t._v("TELEM1")]),t._v(" port as shown below (if connected to this port, no further configuration is required).\nThe other radio is connected to your ground station computer or mobile device (usually by USB).")]),t._v(" "),r("p",[r("img",{attrs:{src:o(543),alt:"Pix32 v5 With Telemetry Radios"}})]),t._v(" "),r("h2",{attrs:{id:"sd-card-optional"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sd-card-optional"}},[t._v("#")]),t._v(" SD Card (Optional)")]),t._v(" "),r("p",[t._v("SD cards are most commonly used to "),r("RouterLink",{attrs:{to:"/en/getting_started/flight_reporting.html"}},[t._v("log and analyse flight details")]),t._v(".\nA micro SD card should come preinstalled on the pix32 v5, if you have your own micro SD card, insert the card into "),r("em",[t._v("pix32 v5")]),t._v(" as shown below.")],1),t._v(" "),r("p",[r("img",{attrs:{src:o(544),alt:"Pix32 v5 With SD Card"}})]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[t._v("The SanDisk Extreme U3 32GB is "),r("RouterLink",{attrs:{to:"/en/dev_log/logging.html#sd-cards"}},[t._v("highly recommended")]),t._v(".")],1)]),t._v(" "),r("h2",{attrs:{id:"motors"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#motors"}},[t._v("#")]),t._v(" Motors")]),t._v(" "),r("p",[t._v("Motors/servos control signals are connected to the "),r("strong",[t._v("I/O PWM OUT")]),t._v(" ("),r("strong",[t._v("MAIN")]),t._v(") and "),r("strong",[t._v("FMU PWM OUT")]),t._v(" ("),r("strong",[t._v("AUX")]),t._v(") ports in the order specified for your vehicle in the "),r("RouterLink",{attrs:{to:"/en/airframes/airframe_reference.html"}},[t._v("Airframe Reference")]),t._v(".")],1),t._v(" "),r("p",[r("img",{attrs:{src:o(404),alt:"Pix32 v5 - Back Pinouts (Schematic)"}})]),t._v(" "),r("p",[t._v("The motors must be separately "),r("a",{attrs:{href:"#power"}},[t._v("powered")]),t._v(".")]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v('If your frame is not listed in the airframe reference then use a "generic" airframe of the correct type.')])]),t._v(" "),r("h2",{attrs:{id:"other-peripherals"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#other-peripherals"}},[t._v("#")]),t._v(" Other Peripherals")]),t._v(" "),r("p",[t._v("The wiring and configuration of optional/less common components is covered within the topics for individual "),r("RouterLink",{attrs:{to:"/en/peripherals/"}},[t._v("peripherals")]),t._v(".")],1),t._v(" "),r("h2",{attrs:{id:"pinouts"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pinouts"}},[t._v("#")]),t._v(" Pinouts")]),t._v(" "),r("p",[r("a",{attrs:{href:"http://www.holybro.com/manual/Holybro_PIX32-V5_PINOUTS_V1.1.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pix32 v5 Pinouts"),r("OutboundLink")],1),t._v(" (Holybro)")]),t._v(" "),r("h2",{attrs:{id:"configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),r("p",[t._v("General configuration information is covered in: "),r("RouterLink",{attrs:{to:"/en/config/"}},[t._v("Autopilot Configuration")]),t._v(".")],1),t._v(" "),r("p",[t._v("QuadPlane specific configuration is covered here: "),r("RouterLink",{attrs:{to:"/en/config_vtol/vtol_quad_configuration.html"}},[t._v("QuadPlane VTOL Configuration")])],1),t._v(" "),r("h2",{attrs:{id:"further-information"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#further-information"}},[t._v("#")]),t._v(" Further information")]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/en/flight_controller/holybro_pix32_v5.html"}},[t._v("Pix32 v5 Overview")]),t._v(" (Overview page)")],1),t._v(" "),r("li",[r("a",{attrs:{href:"http://www.holybro.com/manual/Holybro_PIX32-V5_technical_data_sheet_v1.1.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pix32 v5 Technical Data Sheet"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"http://www.holybro.com/manual/Holybro_PIX32-V5_PINOUTS_V1.1.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pix32 v5 Pinouts"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"http://www.holybro.com/manual/Holybro_PIX32-V5-BASE-Schematic_diagram.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pix32 v5 Base Schematic Diagram"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"http://www.holybro.com/manual/Holybro_PIX32-V5-BASE-ComponentsLayout.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pix32 v5 Base Components Layout"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://docs.google.com/spreadsheets/d/1-n0__BYDedQrc_2NHqBenG1DNepAgnHpSGglke-QQwY/edit#gid=912976165",target:"_blank",rel:"noopener noreferrer"}},[t._v("FMUv5 reference design pinout"),r("OutboundLink")],1),t._v(".")])])])}),[],!1,null,null,null);e.default=a.exports},404:function(t,e,o){t.exports=o.p+"assets/img/pix32_v5_pinouts_back_label.da04161d.png"},536:function(t,e,o){t.exports=o.p+"assets/img/IMG_3165.a6339369.jpg"},537:function(t,e,o){t.exports=o.p+"assets/img/pix32_v5_unboxing_schematics.97b9fd76.png"},538:function(t,e,o){t.exports=o.p+"assets/img/pix32_v5_wiring_overview.f3dd7d9b.jpg"},539:function(t,e,o){t.exports=o.p+"assets/img/pix32_v5_orientation.2084932b.png"},540:function(t,e,o){t.exports=o.p+"assets/img/pix32_v5_connection_gps_compass.7d003a7d.jpg"},541:function(t,e,o){t.exports=o.p+"assets/img/pix32_v5_connection_power.8cf4fe1b.jpg"},542:function(t,e,o){t.exports=o.p+"assets/img/pix32_v5_receivers_connection.6f56b601.jpg"},543:function(t,e,o){t.exports=o.p+"assets/img/pix32_v5_telemetry_radio.24c9fa4a.jpg"},544:function(t,e,o){t.exports=o.p+"assets/img/pix32_v5_sd_card.3fbc7d7a.jpg"}}]);