(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{1526:function(e,t,o){"use strict";o.r(t);var r=o(19),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"cube-wiring-quick-start"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cube-wiring-quick-start"}},[e._v("#")]),e._v(" Cube Wiring Quick Start")]),e._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),r("p",[e._v("PX4 does not manufacture this (or any) autopilot.\nContact the "),r("a",{attrs:{href:"https://cubepilot.org/#/home",target:"_blank",rel:"noopener noreferrer"}},[e._v("manufacturer"),r("OutboundLink")],1),e._v(" for hardware support or compliance issues.")]),e._v(" "),r("p",[e._v("Note also that while "),r("RouterLink",{attrs:{to:"/en/flight_controller/pixhawk-2.html"}},[e._v("Cube Black")]),e._v(" is "),r("RouterLink",{attrs:{to:"/en/flight_controller/autopilot_pixhawk_standard.html"}},[e._v("fully supported by PX4")]),e._v(", support for "),r("RouterLink",{attrs:{to:"/en/flight_controller/cubepilot_cube_yellow.html"}},[e._v("Cube Yellow")]),e._v(" and "),r("RouterLink",{attrs:{to:"/en/flight_controller/cubepilot_cube_orange.html"}},[e._v("Cube Orange")]),e._v(" is "),r("RouterLink",{attrs:{to:"/en/flight_controller/autopilot_experimental.html"}},[e._v("Experimental")]),e._v(".")],1)]),e._v(" "),r("p",[e._v("This quick start guide shows how to power the "),r("em",[e._v("Cube")]),r("sup",[e._v("®")]),e._v(" flight controllers and connect their most important peripherals.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(350),width:"350px"}}),e._v(" "),r("img",{attrs:{src:o(351),width:"350px"}}),e._v(" "),r("img",{attrs:{src:o(352),width:"150px"}})]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("The instructions apply to all Cube variants, including "),r("RouterLink",{attrs:{to:"/en/flight_controller/pixhawk-2.html"}},[e._v("Cube Black")]),e._v(", "),r("RouterLink",{attrs:{to:"/en/flight_controller/cubepilot_cube_yellow.html"}},[e._v("Cube Yellow")]),e._v(" and "),r("RouterLink",{attrs:{to:"/en/flight_controller/cubepilot_cube_orange.html"}},[e._v("Cube Orange")]),e._v(".\nFurther/updated information may be available in the "),r("a",{attrs:{href:"https://docs.cubepilot.org/user-guides/autopilot/the-cube-user-manual",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cube User Manual"),r("OutboundLink")],1),e._v(" (Cube Docs).")],1)]),e._v(" "),r("h2",{attrs:{id:"accessories"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#accessories"}},[e._v("#")]),e._v(" Accessories")]),e._v(" "),r("p",[e._v("Cube comes with most (or all) of the accessories you will need when "),r("RouterLink",{attrs:{to:"/en/flight_controller/pixhawk-2.html#stores"}},[e._v("purchased")]),e._v(".")],1),e._v(" "),r("p",[r("img",{attrs:{src:o(531),alt:"Cube Accessories"}})]),e._v(" "),r("p",[e._v("The exception is that some kits do not include a GPS, which will have to be purchased separately ("),r("a",{attrs:{href:"#gps"}},[e._v("see below")]),e._v(").")]),e._v(" "),r("h2",{attrs:{id:"wiring-overview"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#wiring-overview"}},[e._v("#")]),e._v(" Wiring Overview")]),e._v(" "),r("p",[e._v("The image below shows how to connect the most important sensors and peripherals. We'll go through each of these in detail in the following sections.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(532),alt:"Cube - Wiring Overview"}})]),e._v(" "),r("ol",[r("li",[r("a",{attrs:{href:"#telemetry"}},[e._v("Telemetry System")]),e._v(" — Allows you to plan/run missions, and control and monitor the vehicle in real time. Typically includes telemetry radios, tablet/PC and ground station software.")]),e._v(" "),r("li",[r("a",{attrs:{href:"#buzzer"}},[e._v("Buzzer")]),e._v(" — Provides audio signals that indicate what the UAV is doing")]),e._v(" "),r("li",[r("a",{attrs:{href:"#rc_control"}},[e._v("Remote Control Receiver System")]),e._v(" — Connects to a hand-held transmitter that an operator can use to manually fly the vehicle (shown is a PWM receiver with PWM->PPM converter).")]),e._v(" "),r("li",[e._v("(Dedicated) "),r("a",{attrs:{href:"#safety-switch"}},[e._v("Safety switch")]),e._v(" — Press and hold to lock and unlock motors. Only required if you are not using the recommended "),r("a",{attrs:{href:"#gps"}},[e._v("GPS")]),e._v(" with inbuilt safety switch.")]),e._v(" "),r("li",[r("a",{attrs:{href:"#gps"}},[e._v("GPS, Compass, LED, Safety Switch")]),e._v(" — The recommended GPS module contains GPS, Compass, LED and Safety Switch.")]),e._v(" "),r("li",[r("a",{attrs:{href:"#power"}},[e._v("Power System")]),e._v(" — Powers Cube and the motor ESCs. Consists of LiPo battery, power module, and optional battery warning system (audio warning if battery power goes below a predefined level).")])]),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),r("p",[e._v("The port labeled "),r("code",[e._v("GPS2")]),e._v(" maps to "),r("code",[e._v("TEL4")]),e._v(" in PX4 (i.e. if connecting to the port labeled "),r("code",[e._v("GPS2")]),e._v(", assign the "),r("RouterLink",{attrs:{to:"/en/peripherals/serial_configuration.html"}},[e._v("serial port configuration parameter")]),e._v(" for the connected hardware to "),r("code",[e._v("TEL4")]),e._v(").")],1)]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("More information about available ports can be found here: "),r("RouterLink",{attrs:{to:"/en/flight_controller/pixhawk-2.html#ports"}},[e._v("Cube > Ports")]),e._v(".")],1)]),e._v(" "),r("h2",{attrs:{id:"mount-and-orient-controller"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mount-and-orient-controller"}},[e._v("#")]),e._v(" Mount and Orient Controller")]),e._v(" "),r("p",[e._v("Mount the Cube as close as possible to your vehicle’s center of gravity,\nideally oriented top-side up and with the arrow pointing towards the front of the vehicle (note the "),r("em",[e._v("subtle")]),e._v(" arrow marker on top of the cube)")]),e._v(" "),r("p",[r("img",{attrs:{src:o(533),alt:"Cube Mount - Direction of Front"}})]),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),r("p",[e._v("If the controller cannot be mounted in the recommended/default orientation (e.g. due to space constraints) you will need to configure the autopilot software with the orientation that you actually used: "),r("RouterLink",{attrs:{to:"/en/config/flight_controller_orientation.html"}},[e._v("Flight Controller Orientation")]),e._v(".")],1)]),e._v(" "),r("p",[e._v("The Cube can be mounted using either vibration-damping foam pads (included in the kit) or mounting screws.\nThe mounting screws in the Cube accessories are designed for a 1.8mm thick frameboard.\nCustomized screws are supposed to be M2.5 with thread length inside Cube in range 6mm~7.55mm.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(534),alt:"Cube Mount - Mounting Plate"}})]),e._v(" "),r("p",[r("a",{attrs:{id:"gps"}})]),e._v(" "),r("h2",{attrs:{id:"gps-compass-safety-switch-led"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#gps-compass-safety-switch-led"}},[e._v("#")]),e._v(" GPS + Compass + Safety Switch + LED")]),e._v(" "),r("p",[e._v("The recommended GPS modules are the "),r("em",[e._v("Here")]),e._v(" and "),r("RouterLink",{attrs:{to:"/en/gps_compass/rtk_gps_hex_hereplus.html"}},[e._v("Here+")]),e._v(", both of which incorporate a GPS module, Compass, Safety Switch and "),r("RouterLink",{attrs:{to:"/en/getting_started/led_meanings.html"}},[e._v("LEDs")]),e._v(".\nThe difference between the modules is that "),r("em",[e._v("Here+")]),e._v(" supports centimeter level positioning via "),r("RouterLink",{attrs:{to:"/en/advanced_features/rtk-gps.html"}},[e._v("RTK")]),e._v(". Otherwise they are used/connected in the same way.")],1),e._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),r("p",[e._v("The "),r("RouterLink",{attrs:{to:"/en/gps_compass/rtk_gps_hex_hereplus.html"}},[e._v("Here+")]),e._v(" has been superseded by the "),r("a",{attrs:{href:"https://www.cubepilot.org/#/here/here3",target:"_blank",rel:"noopener noreferrer"}},[e._v("Here3"),r("OutboundLink")],1),e._v(" a "),r("RouterLink",{attrs:{to:"/en/uavcan/"}},[e._v("UAVCAN")]),e._v(" RTK-GNSS that incorporate a compass and "),r("RouterLink",{attrs:{to:"/en/getting_started/led_meanings.html"}},[e._v("LEDs")]),e._v(" (but no safety switch).\nSee "),r("RouterLink",{attrs:{to:"/en/uavcan/"}},[e._v("UAVCAN")]),e._v(" for documentation on how it should be connected.")],1)]),e._v(" "),r("p",[e._v("The module should be mounted on the frame as far away from other electronics as possible, with the direction marker towards the front of the vehicle (separating the compass from other electronics will reduce interference). It must be connected to the "),r("code",[e._v("GPS1")]),e._v(" port using the supplied 8-pin cable.")]),e._v(" "),r("p",[e._v("The diagram below shows a schematic view of the module and its connections.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(535),alt:"Here+ Connector Diagram"}})]),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),r("p",[e._v("The GPS module's integrated safety switch is enabled "),r("em",[e._v("by default")]),e._v(" (when enabled, PX4 will not let you arm the vehicle).\nTo disable the safety press and hold the safety switch for 1 second. You can press the safety switch again to enable safety and disarm the vehicle (this can be useful if, for whatever reason, you are unable to disarm the vehicle from your remote control or ground station).")])]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("If you want to use an old-style 6-pin GPS module, the kit comes with a cable that you can use to connect both the GPS and "),r("a",{attrs:{href:"#safety-switch"}},[e._v("Safety Switch")]),e._v(".")])]),e._v(" "),r("h2",{attrs:{id:"safety-switch"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#safety-switch"}},[e._v("#")]),e._v(" Safety Switch")]),e._v(" "),r("p",[e._v("The "),r("em",[e._v("dedicated")]),e._v(" safety switch that comes with the Cube is only required if you are not using the recommended "),r("a",{attrs:{href:"#gps"}},[e._v("GPS")]),e._v(" (which has an inbuilt safety switch).")]),e._v(" "),r("p",[e._v("If you are flying without the GPS you must attach the switch directly to the "),r("code",[e._v("GPS1")]),e._v(" port in order to be able to arm the vehicle and fly (or via a supplied cable if using an old-style 6-pin GPS).")]),e._v(" "),r("h2",{attrs:{id:"buzzer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#buzzer"}},[e._v("#")]),e._v(" Buzzer")]),e._v(" "),r("p",[e._v("The buzzer plays "),r("RouterLink",{attrs:{to:"/en/getting_started/tunes.html"}},[e._v("tones and tunes")]),e._v(" that provide audible notification of vehicle status (including tones that are helpful for debugging startup issues, and that notify of conditions that might affect safe operation of the vehicle).")],1),e._v(" "),r("p",[e._v("The buzzer should be connected to the USB port as shown (no further configuration is required).")]),e._v(" "),r("p",[r("img",{attrs:{src:o(536),alt:"Cube Buzzer"}})]),e._v(" "),r("p",[r("a",{attrs:{id:"rc_control"}})]),e._v(" "),r("h2",{attrs:{id:"radio-control"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#radio-control"}},[e._v("#")]),e._v(" Radio Control")]),e._v(" "),r("p",[e._v("A "),r("RouterLink",{attrs:{to:"/en/getting_started/rc_transmitter_receiver.html"}},[e._v("remote control (RC) radio system")]),e._v(" is required if you want to "),r("em",[e._v("manually")]),e._v(" control your vehicle (PX4 does not require a radio system for autonomous flight modes).")],1),e._v(" "),r("p",[e._v("You will need to "),r("RouterLink",{attrs:{to:"/en/getting_started/rc_transmitter_receiver.html"}},[e._v("select a compatible transmitter/receiver")]),e._v(" and then "),r("em",[e._v("bind")]),e._v(" them so that they communicate (read the instructions that come with your specific transmitter/receiver).")],1),e._v(" "),r("p",[e._v("The instructions below show how to connect the different types of receivers.")]),e._v(" "),r("h3",{attrs:{id:"ppm-sum-futaba-s-bus-receivers"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ppm-sum-futaba-s-bus-receivers"}},[e._v("#")]),e._v(" PPM-SUM / Futaba S.Bus receivers")]),e._v(" "),r("p",[e._v("Connect the ground(-),power(+),and signal(S) wires to the RC pins using the provided 3-wire servo cable.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(537),alt:"Cube - RCIN"}})]),e._v(" "),r("h3",{attrs:{id:"spektrum-satellite-receivers"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#spektrum-satellite-receivers"}},[e._v("#")]),e._v(" Spektrum Satellite Receivers")]),e._v(" "),r("p",[e._v("Spektrum DSM, DSM2, and DSM-X Satellite RC receivers connect to the "),r("strong",[e._v("SPKT/DSM")]),e._v(" port.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(538),alt:"Cube - Spektrum"}})]),e._v(" "),r("h3",{attrs:{id:"pwm-receivers"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pwm-receivers"}},[e._v("#")]),e._v(" PWM Receivers")]),e._v(" "),r("p",[e._v("The Cube cannot directly connect to PPM or PWM receivers that have an "),r("em",[e._v("individual wire for each channel")]),e._v(".\nPWM receivers must therefore connect to the "),r("strong",[e._v("RCIN")]),e._v(" port "),r("em",[e._v("via")]),e._v(" a PPM encoder module,\nwhich may be purchased from hex.aero or proficnc.com.")]),e._v(" "),r("h2",{attrs:{id:"power"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#power"}},[e._v("#")]),e._v(" Power")]),e._v(" "),r("p",[e._v("Cube is typically powered from a Lithium Ion Polymer (LiPo) Battery via a Power Module (supplied with the kit) that is connected to the "),r("strong",[e._v("POWER1")]),e._v(" port.\nThe power module provides reliable supply and voltage/current indication to the board, and may "),r("em",[e._v("separately")]),e._v(" supply power to ESCs that are used to drive motors on a multicopter vehicle.")]),e._v(" "),r("p",[e._v("A typical power setup for a Multicopter vehicle is shown below.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(539),alt:"Power Setup - MC"}})]),e._v(" "),r("p",[e._v(":::Note\nThe power (+) rail of "),r("strong",[e._v("MAIN/AUX")]),e._v(" is "),r("em",[e._v("not powered")]),e._v(" by the power module supply to the flight controller.\nIn order to drive servos for rudders, elevons, etc., it will need to be separately powered.")]),e._v(" "),r("p",[e._v("This can be done by connecting the power rail to a BEC equipped ESC, a standalone 5V BEC, or a 2S LiPo battery.\nEnsure the voltage of servo you are going to use is appropriate!\n:::")]),e._v(" "),r("p",[r("a",{attrs:{id:"telemetry"}})]),e._v(" "),r("h2",{attrs:{id:"telemetry-system-optional"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#telemetry-system-optional"}},[e._v("#")]),e._v(" Telemetry System (Optional)")]),e._v(" "),r("p",[e._v("A telemetry system allows you to communicate with, monitor, and control a vehicle in flight from a ground station (for example, you can direct the UAV to a particular position, or upload a new mission).")]),e._v(" "),r("p",[e._v("The communication channel is via "),r("RouterLink",{attrs:{to:"/en/telemetry/"}},[e._v("Telemetry Radios")]),e._v(". The vehicle-based radio should be connected to the "),r("strong",[e._v("TELEM1")]),e._v(" port (if connected to this port, no further configuration is required). The other radio is connected to your ground station computer or mobile device (usually via USB).")],1),e._v(" "),r("p",[r("img",{attrs:{src:o(540),alt:"Telemetry Radio"}})]),e._v(" "),r("h2",{attrs:{id:"sd-card-optional"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sd-card-optional"}},[e._v("#")]),e._v(" SD Card (Optional)")]),e._v(" "),r("p",[e._v("SD cards are highly recommended as they are needed to "),r("RouterLink",{attrs:{to:"/en/getting_started/flight_reporting.html"}},[e._v("log and analyse flight details")]),e._v(", to run missions, and to use UAVCAN-bus hardware.\nInsert the Micro-SD card into Cube as shown (if not already present).")],1),e._v(" "),r("p",[r("img",{attrs:{src:o(541),alt:"Cube - Mount SDCard"}})]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("For more information see "),r("RouterLink",{attrs:{to:"/en/getting_started/px4_basic_concepts.html#sd_cards"}},[e._v("Basic Concepts > SD Cards (Removable Memory)")]),e._v(".")],1)]),e._v(" "),r("h2",{attrs:{id:"motors"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#motors"}},[e._v("#")]),e._v(" Motors")]),e._v(" "),r("p",[e._v("Motors/servos are connected to the "),r("strong",[e._v("MAIN")]),e._v(" and "),r("strong",[e._v("AUX")]),e._v(" ports in the order specified for your vehicle in the "),r("RouterLink",{attrs:{to:"/en/airframes/airframe_reference.html"}},[e._v("Airframe Reference")]),e._v(".")],1),e._v(" "),r("p",[r("img",{attrs:{src:o(542),alt:"Cube - Motor Connections"}})]),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),r("p",[e._v('This reference lists the output port to motor/servo mapping for all supported air and ground frames (if your frame is not listed in the reference then use a "generic" airframe of the correct type).')])]),e._v(" "),r("p",[e._v(":::caution\nThe mapping is not consistent across frames (e.g. you can't rely on the throttle being on the same output for all plane frames). Make sure to use the correct mapping for your vehicle.\n:::")]),e._v(" "),r("h2",{attrs:{id:"other-peripherals"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#other-peripherals"}},[e._v("#")]),e._v(" Other Peripherals")]),e._v(" "),r("p",[e._v("The wiring and configuration of optional/less common components is covered within the topics for individual "),r("RouterLink",{attrs:{to:"/en/peripherals/"}},[e._v("peripherals")]),e._v(".")],1),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),r("p",[e._v("If connecting peripherals to the port labeled "),r("code",[e._v("GPS2")]),e._v(", assign the PX4 "),r("RouterLink",{attrs:{to:"/en/peripherals/serial_configuration.html"}},[e._v("serial port configuration parameter")]),e._v(" for the hardware to "),r("code",[e._v("TEL4")]),e._v(" (not GPS2).")],1)]),e._v(" "),r("h2",{attrs:{id:"configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),r("p",[e._v("Configuration is performed using "),r("a",{attrs:{href:"http://qgroundcontrol.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("QGroundContro"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("After downloading, installing and running "),r("em",[e._v("QGroundControl")]),e._v(", connect the board to your computer as shown.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(543),alt:"Cube - USB Connection to Computer"}})]),e._v(" "),r("p",[e._v("Basic/common configuration information is covered in: "),r("RouterLink",{attrs:{to:"/en/config/"}},[e._v("Autopilot Configuration")]),e._v(".")],1),e._v(" "),r("p",[e._v("QuadPlane specific configuration is covered here: "),r("RouterLink",{attrs:{to:"/en/config_vtol/vtol_quad_configuration.html"}},[e._v("QuadPlane VTOL Configuration")])],1),e._v(" "),r("h3",{attrs:{id:"bootloader-updates"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#bootloader-updates"}},[e._v("#")]),e._v(" Bootloader Updates")]),e._v(" "),r("p",[e._v("If you get the [Program PX4IO(../getting_started/tunes.md#program-px4io) warning tone after flashing PX4 firmware, you may need to update the bootloader.")]),e._v(" "),r("p",[e._v("The safety switch can be used to force bootloader updates.\nTo use this feature de-power the Cube, hold down the safety switch, then power the Cube over USB.")]),e._v(" "),r("h2",{attrs:{id:"further-information"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#further-information"}},[e._v("#")]),e._v(" Further information")]),e._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/en/flight_controller/pixhawk-2.html"}},[e._v("Cube Black")])],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/en/flight_controller/cubepilot_cube_yellow.html"}},[e._v("Cube Yellow")])],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/en/flight_controller/cubepilot_cube_orange.html"}},[e._v("Cube Orange")])],1),e._v(" "),r("li",[e._v("Cube Docs (Manufacturer):\n"),r("ul",[r("li",[r("a",{attrs:{href:"https://docs.cubepilot.org/user-guides/autopilot/the-cube-module-overview",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cube Module Overview"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://docs.cubepilot.org/user-guides/autopilot/the-cube-user-manual",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cube User Manual"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://docs.cubepilot.org/user-guides/carrier-boards/mini-carrier-board",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mini Carrier Board"),r("OutboundLink")],1)])])])])])}),[],!1,null,null,null);t.default=a.exports},350:function(e,t,o){e.exports=o.p+"assets/img/cube_orange_hero.944ff463.jpg"},351:function(e,t,o){e.exports=o.p+"assets/img/cube_black_hero.6173ab1f.png"},352:function(e,t,o){e.exports=o.p+"assets/img/cube_yellow_hero.77cbe270.jpg"},531:function(e,t,o){e.exports=o.p+"assets/img/cube_accessories.0be610f8.jpg"},532:function(e,t,o){e.exports=o.p+"assets/img/cube_wiring_overview.5b844fee.jpg"},533:function(e,t,o){e.exports=o.p+"assets/img/cube_mount_front.1a37ae44.jpg"},534:function(e,t,o){e.exports=o.p+"assets/img/cube_mount_plate_screws.def62b56.jpg"},535:function(e,t,o){e.exports=o.p+"assets/img/here_plus_connector.e4b10b83.png"},536:function(e,t,o){e.exports=o.p+"assets/img/cube_buzzer.b528b592.jpg"},537:function(e,t,o){e.exports=o.p+"assets/img/cube_rc_in.868e004f.jpg"},538:function(e,t,o){e.exports=o.p+"assets/img/cube_rc_spektrum.7c514293.jpg"},539:function(e,t,o){e.exports=o.p+"assets/img/cube_wiring_power_mc.16cfc115.jpg"},540:function(e,t,o){e.exports=o.p+"assets/img/cube_schematic_telemetry.d2afffe2.jpg"},541:function(e,t,o){e.exports=o.p+"assets/img/cube_sdcard.193e2b07.jpg"},542:function(e,t,o){e.exports=o.p+"assets/img/cube_main_aux_outputs.c67bd070.jpg"},543:function(e,t,o){e.exports=o.p+"assets/img/cube_usb_connection.dc108f09.jpg"}}]);