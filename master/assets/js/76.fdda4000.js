(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{1856:function(e,t,o){"use strict";o.r(t);var r=o(18),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"pix32-v5-wiring-quick-start"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pix32-v5-wiring-quick-start"}},[e._v("#")]),e._v(" Pix32 v5 Wiring Quick Start")]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Warning")]),e._v(" PX4 does not manufacture this (or any) autopilot. Contact the "),r("a",{attrs:{href:"https://shop.holybro.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("manufacturer"),r("OutboundLink")],1),e._v(" for hardware support or compliance issues.")])]),e._v(" "),r("p",[e._v("This quick start guide shows how to power the "),r("RouterLink",{attrs:{to:"/ko/flight_controller/holybro_pix32_v5.html"}},[e._v("Holybro Pix32v5")]),r("sup",[e._v("®")]),e._v(" flight controller and connect its most important peripherals.")],1),e._v(" "),r("p",[r("img",{attrs:{src:o(525),alt:"Pix32 v5 With Base"}})]),e._v(" "),r("h2",{attrs:{id:"unboxing"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#unboxing"}},[e._v("#")]),e._v(" Unboxing")]),e._v(" "),r("p",[e._v("Pix32 v5 is sold bundled with a number of different combinations of accessories, including the "),r("em",[e._v("pix32 v5 Base board")]),e._v(", power module "),r("em",[e._v("PM02 V3")]),e._v(", and the "),r("a",{attrs:{href:"https://shop.holybro.com/pixhawk-4-gps-module_p1094.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Pixhawk 4 GPS/Compass"),r("OutboundLink")],1),e._v(" (UBLOX NEO-M8N).")]),e._v(" "),r("p",[e._v("The content of the box with the "),r("em",[e._v("PM02 V3")]),e._v(" power module and "),r("em",[e._v("Pixhawk 4 GPS/Compass")]),e._v(" is shown below. The box also includes a pinout guide and power module instructions, and Base board (not shown on the schematic below).")]),e._v(" "),r("p",[r("img",{attrs:{src:o(526),alt:"Pix32 v5 Box"}})]),e._v(" "),r("h2",{attrs:{id:"wiring-chart-overview"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#wiring-chart-overview"}},[e._v("#")]),e._v(" Wiring Chart Overview")]),e._v(" "),r("p",[e._v("The image below shows how to connect the most important sensors and peripherals (except the motor and servo outputs). We'll go through each of these in detail in the following sections.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(527),alt:"Pix32 v5 Wiring Overview"}})]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Tip")]),e._v(" More information about available ports can be found "),r("a",{attrs:{href:"http://www.holybro.com/manual/Holybro_PIX32-V5_PINOUTS_V1.1.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),r("OutboundLink")],1),e._v(".")])]),e._v(" "),r("h2",{attrs:{id:"mount-and-orient-controller"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mount-and-orient-controller"}},[e._v("#")]),e._v(" Mount and Orient Controller")]),e._v(" "),r("p",[r("em",[e._v("Pix32 v5")]),e._v("  should be mounted on the frame positioned as close to your vehicle’s center of gravity as possible, oriented top-side up with the arrow pointing towards the front of the vehicle.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(528),alt:"Pix32 v5 With Orientation"}})]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Note")]),e._v(" If the controller cannot be mounted in the recommended/default orientation (e.g. due to space constraints) you will need to configure the autopilot software with the orientation that you actually used: "),r("RouterLink",{attrs:{to:"/ko/config/flight_controller_orientation.html"}},[e._v("Flight Controller Orientation")]),e._v(".")],1)]),e._v(" "),r("p",[r("span")]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Tip")]),e._v(" The board has internal vibration-isolation. Do not use vibration-isolation foam to mount the controller (double sided tape is normally sufficient).")])]),e._v(" "),r("h2",{attrs:{id:"gps-compass-buzzer-safety-switch-led"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#gps-compass-buzzer-safety-switch-led"}},[e._v("#")]),e._v(" GPS + Compass + Buzzer + Safety Switch + LED")]),e._v(" "),r("p",[e._v("Pix32 v5 is designed to work well with the "),r("a",{attrs:{href:"https://shop.holybro.com/pixhawk-4-gps-module_p1094.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Pixhawk 4 GPS module"),r("OutboundLink")],1),e._v(", which has an integrated compass, safety switch, buzzer and LED. It connects directly to the "),r("RouterLink",{attrs:{to:"/ko/flight_controller/holybro_pix32_v5.html#gps"}},[e._v("GPS port")]),e._v(" using the 10 pin cable.")],1),e._v(" "),r("p",[e._v("The GPS/Compass should be mounted on the frame as far away from other electronics as possible, with the direction marker towards the front of the vehicle (separating the compass from other electronics will reduce interference).")]),e._v(" "),r("p",[r("img",{attrs:{src:o(529),alt:"Pix32 v5 with GPS"}})]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Note")]),e._v(" The GPS module's integrated safety switch is enabled "),r("em",[e._v("by default")]),e._v(" (when enabled, PX4 will not let you arm the vehicle). To disable the safety press and hold the safety switch for 1 second. You can press the safety switch again to enable safety and disarm the vehicle (this can be useful if, for whatever reason, you are unable to disarm the vehicle from your remote control or ground station).")])]),e._v(" "),r("h2",{attrs:{id:"power"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#power"}},[e._v("#")]),e._v(" Power")]),e._v(" "),r("p",[e._v("You can use a power module or power distribution board to power motors/servos and measure power consumption. The recommended power modules are shown below.")]),e._v(" "),r("p",[r("span",{attrs:{id:"pm02_v3"}})]),e._v(" "),r("h3",{attrs:{id:"pm02-v3-power-module"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pm02-v3-power-module"}},[e._v("#")]),e._v(" PM02 v3 Power Module")]),e._v(" "),r("p",[e._v("The "),r("a",{attrs:{href:"https://shop.holybro.com/power-modulepm02-v3_p1185.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Power Module (PM02 v3)"),r("OutboundLink")],1),e._v(" can be bundled with "),r("em",[e._v("pix32 v5")]),e._v(". It provides regulated power to flight controller and sends battery voltage/current to the flight controller.")]),e._v(" "),r("p",[e._v("Connect the output of the "),r("em",[e._v("Power Module")]),e._v(" as shown.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(530),alt:"Pix32 v5 With Power Module"}})]),e._v(" "),r("ul",[r("li",[e._v("PM voltage/current port: connect to POWER1 port (or "),r("code",[e._v("POWER2")]),e._v(") using the 6-wire GH cable supplied.")]),e._v(" "),r("li",[e._v("PM input (XT60 male connector): connect to the LiPo battery (2~12S).")]),e._v(" "),r("li",[e._v("PM power output (XT60 female connector): wire out to any motor ESCs.")])]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Note")]),e._v(" As this power module does not include power distribution wiring, you would normally just connect all the ESCs in parallel to the power module output (the ESC must be appropriate for the supplied voltage level).")])]),e._v(" "),r("p",[r("span")]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Note")]),e._v(" The 8 pin power (+) rail of "),r("strong",[e._v("MAIN/AUX")]),e._v(" is not powered by the power module supply to the flight controller. If it will need to be separately powered in order to drive servos for rudders, elevons etc., the power rail needs to be connected to a BEC equipped ESC or a standalone 5V BEC or a 2S LiPo battery. Ensure the voltage of servo you are going to use is appropriate.")])]),e._v(" "),r("p",[e._v("The power module has the following characteristics/limits:")]),e._v(" "),r("ul",[r("li",[e._v("Max input voltage: 60V")]),e._v(" "),r("li",[e._v("Max current sensing: 120A Voltage")]),e._v(" "),r("li",[e._v("Current measurement configured for SV ADC Switching regulator outputs 5.2V and 3A max")]),e._v(" "),r("li",[e._v("Weight: 20g")]),e._v(" "),r("li",[e._v("Package includes:\n"),r("ul",[r("li",[e._v("PM02 board")]),e._v(" "),r("li",[e._v("6pin MLX cable (1)")]),e._v(" "),r("li",[e._v("6pin GH cable (1)")])])])]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Note")]),e._v(" See also "),r("a",{attrs:{href:"http://www.holybro.com/manual/Holybro_PM02_v3_PowerModule_Manual.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("PM02v3 Power Module Manual"),r("OutboundLink")],1),e._v(" (Holybro).")])]),e._v(" "),r("h3",{attrs:{id:"battery-configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#battery-configuration"}},[e._v("#")]),e._v(" Battery Configuration")]),e._v(" "),r("p",[e._v("The battery/power setup must be configured in "),r("RouterLink",{attrs:{to:"/ko/config/battery.html"}},[e._v("Power Settings")]),e._v(". For either Power Module you will need to configure the "),r("em",[e._v("Number of Cells")]),e._v(".")],1),e._v(" "),r("p",[e._v("You will not need to update the "),r("em",[e._v("voltage divider")]),e._v(" unless you are using some other power module (e.g. the one from the Pixracer).")]),e._v(" "),r("h2",{attrs:{id:"radio-control"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#radio-control"}},[e._v("#")]),e._v(" Radio Control")]),e._v(" "),r("p",[e._v("A remote control (RC) radio system is required if you want to "),r("em",[e._v("manually")]),e._v(" control your vehicle (PX4 does not require a radio system for autonomous flight modes).")]),e._v(" "),r("p",[e._v("You will need to "),r("RouterLink",{attrs:{to:"/ko/getting_started/rc_transmitter_receiver.html"}},[e._v("select a compatible transmitter/receiver")]),e._v(" and then "),r("em",[e._v("bind")]),e._v(" them so that they communicate (read the instructions that come with your specific transmitter/receiver).")],1),e._v(" "),r("p",[e._v("The instructions below show how to connect the different types of receivers to "),r("em",[e._v("Pix32 v5")]),e._v(" with Baseboard:")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("Spektrum/DSM receivers connect to the "),r("RouterLink",{attrs:{to:"/ko/flight_controller/holybro_pix32_v5.html#dsm-rc-port"}},[e._v("DSM RC")]),e._v(" input.")],1),e._v(" "),r("p",[r("img",{attrs:{src:o(531),alt:"Pix32v5 rc receivers"}})])]),e._v(" "),r("li",[r("p",[e._v("PPM and S.Bus receivers connect to the "),r("RouterLink",{attrs:{to:"/ko/flight_controller/holybro_pix32_v5.html#rc-in"}},[e._v("SBUS_IN/PPM_IN")]),e._v(" input port (marked as RC IN)")],1),e._v(" "),r("p",[r("img",{attrs:{src:o(399),alt:"Pinouts"}})])]),e._v(" "),r("li",[r("p",[e._v("PPM and PWM receivers that have an "),r("em",[e._v("individual wire for each channel")]),e._v(" must connect to the "),r("strong",[e._v("PPM RC")]),e._v(" port "),r("em",[e._v("via a PPM encoder")]),e._v(" "),r("a",{attrs:{href:"http://www.getfpv.com/radios/radio-accessories/holybro-ppm-encoder-module.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("like this one"),r("OutboundLink")],1),e._v(" (PPM-Sum receivers use a single signal wire for all channels).")])])]),e._v(" "),r("p",[e._v("For more information about selecting a radio system, receiver compatibility, and binding your transmitter/receiver pair, see: "),r("RouterLink",{attrs:{to:"/ko/getting_started/rc_transmitter_receiver.html"}},[e._v("Remote Control Transmitters & Receivers")]),e._v(".")],1),e._v(" "),r("h2",{attrs:{id:"telemetry-radios-optional"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#telemetry-radios-optional"}},[e._v("#")]),e._v(" Telemetry Radios (Optional)")]),e._v(" "),r("p",[e._v("Telemetry radios may be used to communicate and control a vehicle in flight from a ground station (for example, you can direct the UAV to a particular position, or upload a new mission).")]),e._v(" "),r("p",[e._v("The vehicle-based radio should be connected to the "),r("strong",[e._v("TELEM1")]),e._v(" port as shown below (if connected to this port, no further configuration is required). The other radio is connected to your ground station computer or mobile device (usually by USB).")]),e._v(" "),r("p",[r("img",{attrs:{src:o(532),alt:"Pix32 v5 With Telemetry Radios"}})]),e._v(" "),r("h2",{attrs:{id:"sd-card-optional"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sd-card-optional"}},[e._v("#")]),e._v(" SD Card (Optional)")]),e._v(" "),r("p",[e._v("SD cards are most commonly used to "),r("RouterLink",{attrs:{to:"/ko/getting_started/flight_reporting.html"}},[e._v("log and analyse flight details")]),e._v(". A micro SD card should come preinstalled on the pix32 v5, if you have your own micro SD card, insert the card into "),r("em",[e._v("pix32 v5")]),e._v(" as shown below.")],1),e._v(" "),r("p",[r("img",{attrs:{src:o(533),alt:"Pix32 v5 With SD Card"}})]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Tip")]),e._v(" The SanDisk Extreme U3 32GB is "),r("RouterLink",{attrs:{to:"/ko/dev_log/logging.html#sd-cards"}},[e._v("highly recommended")]),e._v(".")],1)]),e._v(" "),r("h2",{attrs:{id:"motors"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#motors"}},[e._v("#")]),e._v(" Motors")]),e._v(" "),r("p",[e._v("Motors/servos control signals are connected to the "),r("strong",[e._v("I/O PWM OUT")]),e._v(" ("),r("strong",[e._v("MAIN")]),e._v(") and "),r("strong",[e._v("FMU PWM OUT")]),e._v(" ("),r("strong",[e._v("AUX")]),e._v(") ports in the order specified for your vehicle in the "),r("RouterLink",{attrs:{to:"/ko/airframes/airframe_reference.html"}},[e._v("Airframe Reference")]),e._v(".")],1),e._v(" "),r("p",[r("img",{attrs:{src:o(399),alt:"Pix32 v5 - Back Pinouts (Schematic)"}})]),e._v(" "),r("p",[e._v("The motors must be separately "),r("a",{attrs:{href:"#power"}},[e._v("powered")]),e._v(".")]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Note")]),e._v(' If your frame is not listed in the airframe reference then use a "generic" airframe of the correct type.')])]),e._v(" "),r("h2",{attrs:{id:"other-peripherals"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#other-peripherals"}},[e._v("#")]),e._v(" Other Peripherals")]),e._v(" "),r("p",[e._v("The wiring and configuration of optional/less common components is covered within the topics for individual "),r("RouterLink",{attrs:{to:"/ko/peripherals/"}},[e._v("peripherals")]),e._v(".")],1),e._v(" "),r("h2",{attrs:{id:"pinouts"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pinouts"}},[e._v("#")]),e._v(" Pinouts")]),e._v(" "),r("p",[r("a",{attrs:{href:"http://www.holybro.com/manual/Holybro_PIX32-V5_PINOUTS_V1.1.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Pix32 v5 Pinouts"),r("OutboundLink")],1),e._v(" (Holybro)")]),e._v(" "),r("h2",{attrs:{id:"configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),r("p",[e._v("General configuration information is covered in: "),r("RouterLink",{attrs:{to:"/ko/config/"}},[e._v("Autopilot Configuration")]),e._v(".")],1),e._v(" "),r("p",[e._v("QuadPlane specific configuration is covered here: "),r("RouterLink",{attrs:{to:"/ko/config_vtol/vtol_quad_configuration.html"}},[e._v("QuadPlane VTOL Configuration")])],1),e._v(" "),r("h2",{attrs:{id:"further-information"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#further-information"}},[e._v("#")]),e._v(" Further information")]),e._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/ko/flight_controller/holybro_pix32_v5.html"}},[e._v("Pix32 v5 Overview")]),e._v(" (Overview page)")],1),e._v(" "),r("li",[r("a",{attrs:{href:"http://www.holybro.com/manual/Holybro_PIX32-V5_technical_data_sheet_v1.1.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Pix32 v5 Technical Data Sheet"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"http://www.holybro.com/manual/Holybro_PIX32-V5_PINOUTS_V1.1.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Pix32 v5 Pinouts"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"http://www.holybro.com/manual/Holybro_PIX32-V5-BASE-Schematic_diagram.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Pix32 v5 Base Schematic Diagram"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"http://www.holybro.com/manual/Holybro_PIX32-V5-BASE-ComponentsLayout.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Pix32 v5 Base Components Layout"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://docs.google.com/spreadsheets/d/1-n0__BYDedQrc_2NHqBenG1DNepAgnHpSGglke-QQwY/edit#gid=912976165",target:"_blank",rel:"noopener noreferrer"}},[e._v("FMUv5 reference design pinout"),r("OutboundLink")],1),e._v(".")])])])}),[],!1,null,null,null);t.default=a.exports},399:function(e,t,o){e.exports=o.p+"assets/img/pix32_v5_pinouts_back_label.da04161d.png"},525:function(e,t,o){e.exports=o.p+"assets/img/IMG_3165.a6339369.jpg"},526:function(e,t,o){e.exports=o.p+"assets/img/pix32_v5_unboxing_schematics.97b9fd76.png"},527:function(e,t,o){e.exports=o.p+"assets/img/pix32_v5_wiring_overview.f3dd7d9b.jpg"},528:function(e,t,o){e.exports=o.p+"assets/img/pix32_v5_orientation.2084932b.png"},529:function(e,t,o){e.exports=o.p+"assets/img/pix32_v5_connection_gps_compass.7d003a7d.jpg"},530:function(e,t,o){e.exports=o.p+"assets/img/pix32_v5_connection_power.8cf4fe1b.jpg"},531:function(e,t,o){e.exports=o.p+"assets/img/pix32_v5_receivers_connection.6f56b601.jpg"},532:function(e,t,o){e.exports=o.p+"assets/img/pix32_v5_telemetry_radio.24c9fa4a.jpg"},533:function(e,t,o){e.exports=o.p+"assets/img/pix32_v5_sd_card.3fbc7d7a.jpg"}}]);