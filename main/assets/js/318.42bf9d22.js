(window.webpackJsonp=window.webpackJsonp||[]).push([[318],{2681:function(t,e,o){"use strict";o.r(e);var r=o(19),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"holybro-pixhawk-6c-wiring-quick-start"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#holybro-pixhawk-6c-wiring-quick-start"}},[t._v("#")]),t._v(" Holybro Pixhawk 6C Wiring Quick Start")]),t._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[t._v("PX4 does not manufacture this (or any) autopilot. Contact the [manufacturer](https://holybro.com/) for hardware support or compliance issues.")])]),t._v(" "),r("p",[t._v("This quick start guide shows how to power the "),r("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk6c.html"}},[t._v("Pixhawk 6C"),r("sup",[t._v("®")])]),t._v(" flight controller and connect its most important peripherals.")],1),t._v(" "),r("h2",{attrs:{id:"kit-contents"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#kit-contents"}},[t._v("#")]),t._v(" Kit Contents")]),t._v(" "),r("p",[t._v("Pixhawk 6C + PM02 + M8N GPS.")]),t._v(" "),r("p",[r("img",{attrs:{src:o(613),alt:"Pixhawk6c standard set"}})]),t._v(" "),r("h2",{attrs:{id:"mount-and-orient-controller"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mount-and-orient-controller"}},[t._v("#")]),t._v(" Mount and Orient Controller")]),t._v(" "),r("p",[r("em",[t._v("Pixhawk 6C")]),t._v(" can be mounted on the frame using double side tape included in the kit. It should be positioned as close to your vehicle’s center of gravity as possible, oriented top-side up with the arrow pointing towards the front of the vehicle.")]),t._v(" "),r("img",{attrs:{src:o(614),width:"300px",title:"Pixhawk6c - mounting orientation"}}),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("If the controller cannot be mounted in the recommended/default orientation (e.g. due to space constraints) you will need to configure the autopilot software with the orientation that you actually used: "),r("RouterLink",{attrs:{to:"/ko/config/flight_controller_orientation.html"}},[t._v("Flight Controller Orientation")]),t._v(".")],1)]),t._v(" "),r("h2",{attrs:{id:"gps-compass-buzzer-safety-switch-led"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#gps-compass-buzzer-safety-switch-led"}},[t._v("#")]),t._v(" GPS + Compass + Buzzer + Safety Switch + LED")]),t._v(" "),r("p",[t._v("The "),r("em",[t._v("Pixhawk6C")]),t._v(" can be purchased with M8N or M9N GPS (10-pin connector) that should be connected to the "),r("strong",[t._v("GPS1")]),t._v(" port. These GNSS modules have an integrated compass, safety switch, buzzer and LED.")]),t._v(" "),r("p",[t._v("A secondary "),r("a",{attrs:{href:"https://holybro.com/collections/gps",target:"_blank",rel:"noopener noreferrer"}},[t._v("M8N or M9N GPS"),r("OutboundLink")],1),t._v(" (6-pin connector) can be purchased separately and connected to the "),r("strong",[t._v("GPS2")]),t._v(" port.")]),t._v(" "),r("p",[t._v("The GPS/Compass should be "),r("RouterLink",{attrs:{to:"/ko/assembly/mount_gps_compass.html"}},[t._v("mounted on the frame")]),t._v(" as far away from other electronics as possible, with the direction marker towards the front of the vehicle (separating the compass from other electronics will reduce interference).")],1),t._v(" "),r("img",{attrs:{src:o(342),width:"200px",title:"Pixhawk5x standard set"}}),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("The GPS module's integrated safety switch is enabled "),r("em",[t._v("by default")]),t._v(" (when enabled, PX4 will not let you arm the vehicle). To disable the safety press and hold the safety switch for 1 second. You can press the safety switch again to enable safety and disarm the vehicle (this can be useful if, for whatever reason, you are unable to disarm the vehicle from your remote control or ground station).")])]),t._v(" "),r("h2",{attrs:{id:"power"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#power"}},[t._v("#")]),t._v(" Power")]),t._v(" "),r("p",[t._v("Connect the output of the power module of your selection that comes with the Standard Set to one of the "),r("strong",[t._v("POWER")]),t._v(" port of "),r("em",[t._v("Pixhawk 6C")]),t._v(" using the 6-wire cable.")]),t._v(" "),r("p",[t._v("If using a plane or rover, the "),r("strong",[t._v("FMU PWM-OUT")]),t._v(" will need to be separately powered in order to drive servos for rudders, elevons etc. This can be done by connecting the 8 pin power (+) rail of the "),r("strong",[t._v("FMU PWM-OUT")]),t._v(" to a voltage regulator (for example, a BEC equipped ESC or a standalone 5V BEC or a 2S LiPo battery).")]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("The power rail voltage must be appropriate for the servo being used!")])]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("PIN & Connector")]),t._v(" "),r("th",[t._v("Function")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("I/O PWM Out")]),t._v(" "),r("td",[t._v("Connect Motor Signal and GND wires here.")])]),t._v(" "),r("tr",[r("td",[t._v("FMU PWM Out")]),t._v(" "),r("td",[t._v("Connect Servo Signal, positive, and GND wires here.")])])])]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[r("strong",[t._v("MAIN")]),t._v(" outputs in PX4 firmware map to "),r("strong",[t._v("I/O PWM OUT")]),t._v(" port of "),r("em",[t._v("Pixhawk 6C")]),t._v(" whereas "),r("strong",[t._v("AUX outputs")]),t._v(" map to "),r("strong",[t._v("FMU PWM OUT")]),t._v(" of "),r("em",[t._v("Pixhawk 6C")]),t._v(". For example, "),r("strong",[t._v("MAIN1")]),t._v(" maps to IO_CH1 pin of "),r("strong",[t._v("I/O PWM OUT")]),t._v(" and "),r("strong",[t._v("AUX1")]),t._v(" maps to FMU_CH1 pin of "),r("strong",[t._v("FMU PWM OUT")]),t._v(".")])]),t._v(" "),r("p",[t._v("The pinout of "),r("em",[t._v("Pixhawk 6C")]),t._v("’s power ports is shown below.")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Pin")]),t._v(" "),r("th",[t._v("Signal")]),t._v(" "),r("th",[t._v("Volt")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("1(red)")]),t._v(" "),r("td",[t._v("VDD")]),t._v(" "),r("td",[t._v("+5V")])]),t._v(" "),r("tr",[r("td",[t._v("2(black)")]),t._v(" "),r("td",[t._v("VDD")]),t._v(" "),r("td",[t._v("+5V")])]),t._v(" "),r("tr",[r("td",[t._v("3(black)")]),t._v(" "),r("td",[t._v("CURRENT")]),t._v(" "),r("td",[t._v("+3.3V")])]),t._v(" "),r("tr",[r("td",[t._v("4(black)")]),t._v(" "),r("td",[t._v("VOLTAGE")]),t._v(" "),r("td",[t._v("+3.3V")])]),t._v(" "),r("tr",[r("td",[t._v("5(black)")]),t._v(" "),r("td",[t._v("GND")]),t._v(" "),r("td",[t._v("GND")])]),t._v(" "),r("tr",[r("td",[t._v("6(black)")]),t._v(" "),r("td",[t._v("GND")]),t._v(" "),r("td",[t._v("GND")])])])]),t._v(" "),r("h2",{attrs:{id:"radio-control"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#radio-control"}},[t._v("#")]),t._v(" Radio Control")]),t._v(" "),r("p",[t._v("A remote control (RC) radio system is required if you want to "),r("em",[t._v("manually")]),t._v(" control your vehicle (PX4 does not require a radio system for autonomous flight modes).")]),t._v(" "),r("p",[t._v("You will need to "),r("RouterLink",{attrs:{to:"/ko/getting_started/rc_transmitter_receiver.html"}},[t._v("select a compatible transmitter/receiver")]),t._v(" and then "),r("em",[t._v("bind")]),t._v(" them so that they communicate (read the instructions that come with your specific transmitter/receiver).")],1),t._v(" "),r("ul",[r("li",[t._v("Spektrum/DSM receivers connect to the "),r("strong",[t._v("DSM")]),t._v(" input.")]),t._v(" "),r("li",[t._v("PPM or SBUS receivers connect to the "),r("strong",[t._v("PPM/SBUS")]),t._v(" input port.")])]),t._v(" "),r("p",[t._v("PPM and PWM receivers that have an "),r("em",[t._v("individual wire for each channel")]),t._v(" must connect to the *PPM/SBUS** port *via a PPM encoder* "),r("a",{attrs:{href:"http://www.getfpv.com/radios/radio-accessories/holybro-ppm-encoder-module.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("like this one"),r("OutboundLink")],1),t._v(" (PPM-Sum receivers use a single signal wire for all channels).")]),t._v(" "),r("p",[t._v("For more information about selecting a radio system, receiver compatibility, and binding your transmitter/receiver pair, see: "),r("RouterLink",{attrs:{to:"/ko/getting_started/rc_transmitter_receiver.html"}},[t._v("Remote Control Transmitters & Receivers")]),t._v(".")],1),t._v(" "),r("h2",{attrs:{id:"telemetry-radios-optional"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#telemetry-radios-optional"}},[t._v("#")]),t._v(" Telemetry Radios (Optional)")]),t._v(" "),r("p",[r("RouterLink",{attrs:{to:"/ko/telemetry/"}},[t._v("Telemetry radios")]),t._v(" may be used to communicate and control a vehicle in flight from a ground station (for example, you can direct the UAV to a particular position, or upload a new mission).")],1),t._v(" "),r("p",[t._v("The vehicle-based radio should be connected to the "),r("strong",[t._v("TELEM1")]),t._v(" port as shown below (if connected to this port, no further configuration is required). The other radio is connected to your ground station computer or mobile device (usually by USB).")]),t._v(" "),r("p",[t._v("Radios are also available for purchase on "),r("a",{attrs:{href:"https://holybro.com/collections/telemetry-radios",target:"_blank",rel:"noopener noreferrer"}},[t._v("Holybro's website"),r("OutboundLink")],1),t._v(" .")]),t._v(" "),r("h2",{attrs:{id:"sd-card-optional"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sd-card-optional"}},[t._v("#")]),t._v(" SD Card (Optional)")]),t._v(" "),r("p",[t._v("SD cards are highly recommended as they are needed to "),r("RouterLink",{attrs:{to:"/ko/getting_started/flight_reporting.html"}},[t._v("log and analyse flight details")]),t._v(", to run missions, and to use UAVCAN-bus hardware. Insert the card (included in Pixhawk 6C) into "),r("em",[t._v("Pixhawk 6C")]),t._v(" as shown below.")],1),t._v(" "),r("img",{attrs:{src:o(615),width:"320px",title:"Pixhawk6c SD"}}),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[t._v("For more information see "),r("RouterLink",{attrs:{to:"/ko/getting_started/px4_basic_concepts.html#sd-cards-removable-memory"}},[t._v("Basic Concepts > SD Cards (Removable Memory)")]),t._v(".")],1)]),t._v(" "),r("h2",{attrs:{id:"motors"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#motors"}},[t._v("#")]),t._v(" Motors")]),t._v(" "),r("p",[t._v("Motors/servos are connected to the "),r("strong",[t._v("I/O PWM OUT")]),t._v(" ("),r("strong",[t._v("MAIN")]),t._v(") and "),r("strong",[t._v("FMU PWM OUT")]),t._v(" ("),r("strong",[t._v("AUX")]),t._v(") ports in the order specified for your vehicle in the "),r("RouterLink",{attrs:{to:"/ko/airframes/airframe_reference.html"}},[t._v("Airframe Reference")]),t._v(".")],1),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v('This reference lists the output port to motor/servo mapping for all supported air and ground frames (if your frame is not listed in the reference then use a "generic" airframe of the correct type).')])]),t._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),r("p",[t._v("The mapping is not consistent across frames (e.g. you can't rely on the throttle being on the same output for all plane frames). Make sure to use the correct mapping for your vehicle.")])]),t._v(" "),r("h2",{attrs:{id:"other-peripherals"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#other-peripherals"}},[t._v("#")]),t._v(" Other Peripherals")]),t._v(" "),r("p",[t._v("The wiring and configuration of optional/less common components is covered within the topics for individual "),r("RouterLink",{attrs:{to:"/ko/peripherals/"}},[t._v("peripherals")]),t._v(".")],1),t._v(" "),r("h2",{attrs:{id:"pinouts"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pinouts"}},[t._v("#")]),t._v(" Pinouts")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://docs.holybro.com/autopilot/pixhawk-6c/pixhawk-6c-pinout",target:"_blank",rel:"noopener noreferrer"}},[t._v("Holybro Pixhawk -6C Pinout"),r("OutboundLink")],1)])]),t._v(" "),r("h2",{attrs:{id:"configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),r("p",[t._v("General configuration information is covered in: "),r("RouterLink",{attrs:{to:"/ko/config/"}},[t._v("Autopilot Configuration")]),t._v(".")],1),t._v(" "),r("p",[t._v("QuadPlane specific configuration is covered here: "),r("RouterLink",{attrs:{to:"/ko/config_vtol/vtol_quad_configuration.html"}},[t._v("QuadPlane VTOL Configuration")])],1),t._v(" "),r("h2",{attrs:{id:"further-information"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#further-information"}},[t._v("#")]),t._v(" Further information")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://docs.holybro.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Holybro Docs"),r("OutboundLink")],1),t._v(" (Holybro)")]),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk6c.html"}},[t._v("Pixhawk 6C")]),t._v(" (PX4 Doc Overview page)")],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/power_module/holybro_pm02.html"}},[t._v("PM02 Power Module")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/power_module/holybro_pm06_pixhawk4mini_power_module.html"}},[t._v("PM06 Power Module")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/power_module/holybro_pm07_pixhawk4_power_module.html"}},[t._v("PM07 Power Module")])],1),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/pixhawk/Pixhawk-Standards/blob/master/DS-010%20Pixhawk%20Autopilot%20Bus%20Standard.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk Autopilot Bus Standard"),r("OutboundLink")],1),t._v(".")]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/pixhawk/Pixhawk-Standards/blob/master/DS-009%20Pixhawk%20Connector%20Standard.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk Connector Standard"),r("OutboundLink")],1),t._v(".")])])])}),[],!1,null,null,null);e.default=a.exports},342:function(t,e,o){t.exports=o.p+"assets/img/pixhawk5x_gps_front.d838350a.jpg"},613:function(t,e,o){t.exports=o.p+"assets/img/pixhawk6c_standard_set.0bf6313a.jpg"},614:function(t,e,o){t.exports=o.p+"assets/img/pixhawk6c_vehicle_front1.5b222c1f.jpg"},615:function(t,e,o){t.exports=o.p+"assets/img/pixhawk6c_sd_slot.228e7141.jpg"}}]);