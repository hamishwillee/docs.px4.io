(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{1876:function(t,e,o){"use strict";o.r(e);var r=o(19),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"cube-wiring-quick-start"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cube-wiring-quick-start"}},[t._v("#")]),t._v(" Cube Wiring Quick Start")]),t._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),r("p",[t._v("PX4 does not manufacture this (or any) autopilot.\nContact the "),r("a",{attrs:{href:"https://cubepilot.org/#/home",target:"_blank",rel:"noopener noreferrer"}},[t._v("manufacturer"),r("OutboundLink")],1),t._v(" for hardware support or compliance issues.")]),t._v(" "),r("p",[t._v("Note also that while "),r("RouterLink",{attrs:{to:"/en/flight_controller/pixhawk-2.html"}},[t._v("Cube Black")]),t._v(" is "),r("RouterLink",{attrs:{to:"/en/flight_controller/autopilot_pixhawk_standard.html"}},[t._v("fully supported by PX4")]),t._v(", "),r("RouterLink",{attrs:{to:"/en/flight_controller/cubepilot_cube_yellow.html"}},[t._v("Cube Yellow")]),t._v(" and "),r("RouterLink",{attrs:{to:"/en/flight_controller/cubepilot_cube_orange.html"}},[t._v("Cube Orange")]),t._v(" are "),r("RouterLink",{attrs:{to:"/en/flight_controller/autopilot_manufacturer_supported.html"}},[t._v("Manufacturer Supported")]),t._v(".")],1)]),t._v(" "),r("p",[t._v("This quick start guide shows how to power the "),r("em",[t._v("Cube")]),r("sup",[t._v("®")]),t._v(" flight controllers and connect their most important peripherals.")]),t._v(" "),r("p",[r("img",{attrs:{src:o(344),width:"350px"}}),t._v(" "),r("img",{attrs:{src:o(364),width:"350px"}}),t._v(" "),r("img",{attrs:{src:o(365),width:"150px"}})]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[t._v("The instructions apply to all Cube variants, including "),r("RouterLink",{attrs:{to:"/en/flight_controller/pixhawk-2.html"}},[t._v("Cube Black")]),t._v(", "),r("RouterLink",{attrs:{to:"/en/flight_controller/cubepilot_cube_yellow.html"}},[t._v("Cube Yellow")]),t._v(" and "),r("RouterLink",{attrs:{to:"/en/flight_controller/cubepilot_cube_orange.html"}},[t._v("Cube Orange")]),t._v(".\nFurther/updated information may be available in the "),r("a",{attrs:{href:"https://docs.cubepilot.org/user-guides/autopilot/the-cube-user-manual",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cube User Manual"),r("OutboundLink")],1),t._v(" (Cube Docs).")],1)]),t._v(" "),r("h2",{attrs:{id:"accessories"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#accessories"}},[t._v("#")]),t._v(" Accessories")]),t._v(" "),r("p",[t._v("Cube comes with most (or all) of the accessories you will need when "),r("RouterLink",{attrs:{to:"/en/flight_controller/pixhawk-2.html#stores"}},[t._v("purchased")]),t._v(".")],1),t._v(" "),r("p",[r("img",{attrs:{src:o(540),alt:"Cube Accessories"}})]),t._v(" "),r("p",[t._v("The exception is that some kits do not include a GPS, which will have to be purchased separately ("),r("a",{attrs:{href:"#gps"}},[t._v("see below")]),t._v(").")]),t._v(" "),r("h2",{attrs:{id:"wiring-overview"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#wiring-overview"}},[t._v("#")]),t._v(" Wiring Overview")]),t._v(" "),r("p",[t._v("The image below shows how to connect the most important sensors and peripherals. We'll go through each of these in detail in the following sections.")]),t._v(" "),r("p",[r("img",{attrs:{src:o(541),alt:"Cube - Wiring Overview"}})]),t._v(" "),r("ol",[r("li",[r("a",{attrs:{href:"#telemetry"}},[t._v("Telemetry System")]),t._v(" — Allows you to plan/run missions, and control and monitor the vehicle in real time. Typically includes telemetry radios, tablet/PC and ground station software.")]),t._v(" "),r("li",[r("a",{attrs:{href:"#buzzer"}},[t._v("Buzzer")]),t._v(" — Provides audio signals that indicate what the UAV is doing")]),t._v(" "),r("li",[r("a",{attrs:{href:"#rc_control"}},[t._v("Remote Control Receiver System")]),t._v(" — Connects to a hand-held transmitter that an operator can use to manually fly the vehicle (shown is a PWM receiver with PWM->PPM converter).")]),t._v(" "),r("li",[t._v("(Dedicated) "),r("a",{attrs:{href:"#safety-switch"}},[t._v("Safety switch")]),t._v(" — Press and hold to lock and unlock motors. Only required if you are not using the recommended "),r("a",{attrs:{href:"#gps"}},[t._v("GPS")]),t._v(" with inbuilt safety switch.")]),t._v(" "),r("li",[r("a",{attrs:{href:"#gps"}},[t._v("GPS, Compass, LED, Safety Switch")]),t._v(" — The recommended GPS module contains GPS, Compass, LED and Safety Switch.")]),t._v(" "),r("li",[r("a",{attrs:{href:"#power"}},[t._v("Power System")]),t._v(" — Powers Cube and the motor ESCs. Consists of LiPo battery, power module, and optional battery warning system (audio warning if battery power goes below a predefined level).")])]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("The port labeled "),r("code",[t._v("GPS2")]),t._v(" maps to "),r("code",[t._v("TEL4")]),t._v(" in PX4 (i.e. if connecting to the port labeled "),r("code",[t._v("GPS2")]),t._v(", assign the "),r("RouterLink",{attrs:{to:"/en/peripherals/serial_configuration.html"}},[t._v("serial port configuration parameter")]),t._v(" for the connected hardware to "),r("code",[t._v("TEL4")]),t._v(").")],1)]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[t._v("More information about available ports can be found here: "),r("RouterLink",{attrs:{to:"/en/flight_controller/pixhawk-2.html#ports"}},[t._v("Cube > Ports")]),t._v(".")],1)]),t._v(" "),r("h2",{attrs:{id:"mount-and-orient-controller"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mount-and-orient-controller"}},[t._v("#")]),t._v(" Mount and Orient Controller")]),t._v(" "),r("p",[t._v("Mount the Cube as close as possible to your vehicle’s center of gravity,\nideally oriented top-side up and with the arrow pointing towards the front of the vehicle (note the "),r("em",[t._v("subtle")]),t._v(" arrow marker on top of the cube)")]),t._v(" "),r("p",[r("img",{attrs:{src:o(542),alt:"Cube Mount - Direction of Front"}})]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("If the controller cannot be mounted in the recommended/default orientation (e.g. due to space constraints) you will need to configure the autopilot software with the orientation that you actually used: "),r("RouterLink",{attrs:{to:"/en/config/flight_controller_orientation.html"}},[t._v("Flight Controller Orientation")]),t._v(".")],1)]),t._v(" "),r("p",[t._v("The Cube can be mounted using either vibration-damping foam pads (included in the kit) or mounting screws.\nThe mounting screws in the Cube accessories are designed for a 1.8mm thick frameboard.\nCustomized screws are supposed to be M2.5 with thread length inside Cube in range 6mm~7.55mm.")]),t._v(" "),r("p",[r("img",{attrs:{src:o(543),alt:"Cube Mount - Mounting Plate"}})]),t._v(" "),r("p",[r("a",{attrs:{id:"gps"}})]),t._v(" "),r("h2",{attrs:{id:"gps-compass-safety-switch-led"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#gps-compass-safety-switch-led"}},[t._v("#")]),t._v(" GPS + Compass + Safety Switch + LED")]),t._v(" "),r("p",[t._v("The recommended GPS modules are the "),r("em",[t._v("Here")]),t._v(" and "),r("RouterLink",{attrs:{to:"/en/gps_compass/rtk_gps_hex_hereplus.html"}},[t._v("Here+")]),t._v(", both of which incorporate a GPS module, Compass, Safety Switch and "),r("RouterLink",{attrs:{to:"/en/getting_started/led_meanings.html"}},[t._v("LEDs")]),t._v(".\nThe difference between the modules is that "),r("em",[t._v("Here+")]),t._v(" supports centimeter level positioning via "),r("RouterLink",{attrs:{to:"/en/gps_compass/rtk_gps.html"}},[t._v("RTK")]),t._v(". Otherwise they are used/connected in the same way.")],1),t._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),r("p",[t._v("The "),r("RouterLink",{attrs:{to:"/en/gps_compass/rtk_gps_hex_hereplus.html"}},[t._v("Here+")]),t._v(" has been superseded by the "),r("a",{attrs:{href:"https://www.cubepilot.org/#/here/here3",target:"_blank",rel:"noopener noreferrer"}},[t._v("Here3"),r("OutboundLink")],1),t._v(" a "),r("RouterLink",{attrs:{to:"/en/dronecan/"}},[t._v("DroneCAN")]),t._v(" RTK-GNSS that incorporate a compass and "),r("RouterLink",{attrs:{to:"/en/getting_started/led_meanings.html"}},[t._v("LEDs")]),t._v(" (but no safety switch).\nSee "),r("RouterLink",{attrs:{to:"/en/dronecan/"}},[t._v("DroneCAN")]),t._v(" for "),r("em",[t._v("Here3")]),t._v(" wiring and PX4 configuration information.")],1)]),t._v(" "),r("p",[t._v("The module should be mounted on the frame as far away from other electronics as possible, with the direction marker towards the front of the vehicle (separating the compass from other electronics will reduce interference). It must be connected to the "),r("code",[t._v("GPS1")]),t._v(" port using the supplied 8-pin cable.")]),t._v(" "),r("p",[t._v("The diagram below shows a schematic view of the module and its connections.")]),t._v(" "),r("p",[r("img",{attrs:{src:o(544),alt:"Here+ Connector Diagram"}})]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("The GPS module's integrated safety switch is enabled "),r("em",[t._v("by default")]),t._v(" (when enabled, PX4 will not let you arm the vehicle).\nTo disable the safety press and hold the safety switch for 1 second. You can press the safety switch again to enable safety and disarm the vehicle (this can be useful if, for whatever reason, you are unable to disarm the vehicle from your remote control or ground station).")])]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[t._v("If you want to use an old-style 6-pin GPS module, the kit comes with a cable that you can use to connect both the GPS and "),r("a",{attrs:{href:"#safety-switch"}},[t._v("Safety Switch")]),t._v(".")])]),t._v(" "),r("h2",{attrs:{id:"safety-switch"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#safety-switch"}},[t._v("#")]),t._v(" Safety Switch")]),t._v(" "),r("p",[t._v("The "),r("em",[t._v("dedicated")]),t._v(" safety switch that comes with the Cube is only required if you are not using the recommended "),r("a",{attrs:{href:"#gps"}},[t._v("GPS")]),t._v(" (which has an inbuilt safety switch).")]),t._v(" "),r("p",[t._v("If you are flying without the GPS you must attach the switch directly to the "),r("code",[t._v("GPS1")]),t._v(" port in order to be able to arm the vehicle and fly (or via a supplied cable if using an old-style 6-pin GPS).")]),t._v(" "),r("h2",{attrs:{id:"buzzer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#buzzer"}},[t._v("#")]),t._v(" Buzzer")]),t._v(" "),r("p",[t._v("The buzzer plays "),r("RouterLink",{attrs:{to:"/en/getting_started/tunes.html"}},[t._v("tones and tunes")]),t._v(" that provide audible notification of vehicle status (including tones that are helpful for debugging startup issues, and that notify of conditions that might affect safe operation of the vehicle).")],1),t._v(" "),r("p",[t._v("The buzzer should be connected to the USB port as shown (no further configuration is required).")]),t._v(" "),r("p",[r("img",{attrs:{src:o(545),alt:"Cube Buzzer"}})]),t._v(" "),r("p",[r("a",{attrs:{id:"rc_control"}})]),t._v(" "),r("h2",{attrs:{id:"radio-control"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#radio-control"}},[t._v("#")]),t._v(" Radio Control")]),t._v(" "),r("p",[t._v("A "),r("RouterLink",{attrs:{to:"/en/getting_started/rc_transmitter_receiver.html"}},[t._v("remote control (RC) radio system")]),t._v(" is required if you want to "),r("em",[t._v("manually")]),t._v(" control your vehicle (PX4 does not require a radio system for autonomous flight modes).")],1),t._v(" "),r("p",[t._v("You will need to "),r("RouterLink",{attrs:{to:"/en/getting_started/rc_transmitter_receiver.html"}},[t._v("select a compatible transmitter/receiver")]),t._v(" and then "),r("em",[t._v("bind")]),t._v(" them so that they communicate (read the instructions that come with your specific transmitter/receiver).")],1),t._v(" "),r("p",[t._v("The instructions below show how to connect the different types of receivers.")]),t._v(" "),r("h3",{attrs:{id:"ppm-sum-futaba-s-bus-receivers"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ppm-sum-futaba-s-bus-receivers"}},[t._v("#")]),t._v(" PPM-SUM / Futaba S.Bus receivers")]),t._v(" "),r("p",[t._v("Connect the ground(-),power(+),and signal(S) wires to the RC pins using the provided 3-wire servo cable.")]),t._v(" "),r("p",[r("img",{attrs:{src:o(546),alt:"Cube - RCIN"}})]),t._v(" "),r("h3",{attrs:{id:"spektrum-satellite-receivers"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#spektrum-satellite-receivers"}},[t._v("#")]),t._v(" Spektrum Satellite Receivers")]),t._v(" "),r("p",[t._v("Spektrum DSM, DSM2, and DSM-X Satellite RC receivers connect to the "),r("strong",[t._v("SPKT/DSM")]),t._v(" port.")]),t._v(" "),r("p",[r("img",{attrs:{src:o(547),alt:"Cube - Spektrum"}})]),t._v(" "),r("h3",{attrs:{id:"pwm-receivers"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pwm-receivers"}},[t._v("#")]),t._v(" PWM Receivers")]),t._v(" "),r("p",[t._v("The Cube cannot directly connect to PPM or PWM receivers that have an "),r("em",[t._v("individual wire for each channel")]),t._v(".\nPWM receivers must therefore connect to the "),r("strong",[t._v("RCIN")]),t._v(" port "),r("em",[t._v("via")]),t._v(" a PPM encoder module,\nwhich may be purchased from hex.aero or proficnc.com.")]),t._v(" "),r("h2",{attrs:{id:"power"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#power"}},[t._v("#")]),t._v(" Power")]),t._v(" "),r("p",[t._v("Cube is typically powered from a Lithium Ion Polymer (LiPo) Battery via a Power Module (supplied with the kit) that is connected to the "),r("strong",[t._v("POWER1")]),t._v(" port.\nThe power module provides reliable supply and voltage/current indication to the board, and may "),r("em",[t._v("separately")]),t._v(" supply power to ESCs that are used to drive motors on a multicopter vehicle.")]),t._v(" "),r("p",[t._v("A typical power setup for a Multicopter vehicle is shown below.")]),t._v(" "),r("p",[r("img",{attrs:{src:o(548),alt:"Power Setup - MC"}})]),t._v(" "),r("p",[t._v(":::Note\nThe power (+) rail of "),r("strong",[t._v("MAIN/AUX")]),t._v(" is "),r("em",[t._v("not powered")]),t._v(" by the power module supply to the flight controller.\nIn order to drive servos for rudders, elevons, etc., it will need to be separately powered.")]),t._v(" "),r("p",[t._v("This can be done by connecting the power rail to a BEC equipped ESC, a standalone 5V BEC, or a 2S LiPo battery.\nEnsure the voltage of servo you are going to use is appropriate!\n:::")]),t._v(" "),r("p",[r("a",{attrs:{id:"telemetry"}})]),t._v(" "),r("h2",{attrs:{id:"telemetry-system-optional"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#telemetry-system-optional"}},[t._v("#")]),t._v(" Telemetry System (Optional)")]),t._v(" "),r("p",[t._v("A telemetry system allows you to communicate with, monitor, and control a vehicle in flight from a ground station (for example, you can direct the UAV to a particular position, or upload a new mission).")]),t._v(" "),r("p",[t._v("The communication channel is via "),r("RouterLink",{attrs:{to:"/en/telemetry/"}},[t._v("Telemetry Radios")]),t._v(". The vehicle-based radio should be connected to the "),r("strong",[t._v("TELEM1")]),t._v(" port (if connected to this port, no further configuration is required). The other radio is connected to your ground station computer or mobile device (usually via USB).")],1),t._v(" "),r("p",[r("img",{attrs:{src:o(549),alt:"Telemetry Radio"}})]),t._v(" "),r("h2",{attrs:{id:"sd-card-optional"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sd-card-optional"}},[t._v("#")]),t._v(" SD Card (Optional)")]),t._v(" "),r("p",[t._v("SD cards are highly recommended as they are needed to "),r("RouterLink",{attrs:{to:"/en/getting_started/flight_reporting.html"}},[t._v("log and analyse flight details")]),t._v(", to run missions, and to use UAVCAN-bus hardware.\nInsert the Micro-SD card into Cube as shown (if not already present).")],1),t._v(" "),r("p",[r("img",{attrs:{src:o(550),alt:"Cube - Mount SDCard"}})]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[t._v("For more information see "),r("RouterLink",{attrs:{to:"/en/getting_started/px4_basic_concepts.html#sd-cards-removable-memory"}},[t._v("Basic Concepts > SD Cards (Removable Memory)")]),t._v(".")],1)]),t._v(" "),r("h2",{attrs:{id:"motors"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#motors"}},[t._v("#")]),t._v(" Motors")]),t._v(" "),r("p",[t._v("Motors/servos are connected to the "),r("strong",[t._v("MAIN")]),t._v(" and "),r("strong",[t._v("AUX")]),t._v(" ports in the order specified for your vehicle in the "),r("RouterLink",{attrs:{to:"/en/airframes/airframe_reference.html"}},[t._v("Airframe Reference")]),t._v(".")],1),t._v(" "),r("p",[r("img",{attrs:{src:o(551),alt:"Cube - Motor Connections"}})]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v('This reference lists the output port to motor/servo mapping for all supported air and ground frames (if your frame is not listed in the reference then use a "generic" airframe of the correct type).')])]),t._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),r("p",[t._v("The mapping is not consistent across frames (e.g. you can't rely on the throttle being on the same output for all plane frames). Make sure to use the correct mapping for your vehicle.")])]),t._v(" "),r("h2",{attrs:{id:"other-peripherals"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#other-peripherals"}},[t._v("#")]),t._v(" Other Peripherals")]),t._v(" "),r("p",[t._v("The wiring and configuration of optional/less common components is covered within the topics for individual "),r("RouterLink",{attrs:{to:"/en/peripherals/"}},[t._v("peripherals")]),t._v(".")],1),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("If connecting peripherals to the port labeled "),r("code",[t._v("GPS2")]),t._v(", assign the PX4 "),r("RouterLink",{attrs:{to:"/en/peripherals/serial_configuration.html"}},[t._v("serial port configuration parameter")]),t._v(" for the hardware to "),r("code",[t._v("TEL4")]),t._v(" (not GPS2).")],1)]),t._v(" "),r("h2",{attrs:{id:"configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),r("p",[t._v("Configuration is performed using "),r("a",{attrs:{href:"http://qgroundcontrol.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGroundContro"),r("OutboundLink")],1),t._v(".")]),t._v(" "),r("p",[t._v("After downloading, installing and running "),r("em",[t._v("QGroundControl")]),t._v(", connect the board to your computer as shown.")]),t._v(" "),r("p",[r("img",{attrs:{src:o(552),alt:"Cube - USB Connection to Computer"}})]),t._v(" "),r("p",[t._v("Basic/common configuration information is covered in: "),r("RouterLink",{attrs:{to:"/en/config/"}},[t._v("Autopilot Configuration")]),t._v(".")],1),t._v(" "),r("p",[t._v("QuadPlane specific configuration is covered here: "),r("RouterLink",{attrs:{to:"/en/config_vtol/vtol_quad_configuration.html"}},[t._v("QuadPlane VTOL Configuration")])],1),t._v(" "),r("h3",{attrs:{id:"bootloader-updates"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#bootloader-updates"}},[t._v("#")]),t._v(" Bootloader Updates")]),t._v(" "),r("p",[t._v("If you get the [Program PX4IO(../getting_started/tunes.md#program-px4io) warning tone after flashing PX4 firmware, you may need to update the bootloader.")]),t._v(" "),r("p",[t._v("The safety switch can be used to force bootloader updates.\nTo use this feature de-power the Cube, hold down the safety switch, then power the Cube over USB.")]),t._v(" "),r("h2",{attrs:{id:"further-information"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#further-information"}},[t._v("#")]),t._v(" Further information")]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/en/flight_controller/pixhawk-2.html"}},[t._v("Cube Black")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/en/flight_controller/cubepilot_cube_yellow.html"}},[t._v("Cube Yellow")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/en/flight_controller/cubepilot_cube_orange.html"}},[t._v("Cube Orange")])],1),t._v(" "),r("li",[t._v("Cube Docs (Manufacturer):\n"),r("ul",[r("li",[r("a",{attrs:{href:"https://docs.cubepilot.org/user-guides/autopilot/the-cube-module-overview",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cube Module Overview"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://docs.cubepilot.org/user-guides/autopilot/the-cube-user-manual",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cube User Manual"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://docs.cubepilot.org/user-guides/carrier-boards/mini-carrier-board",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mini Carrier Board"),r("OutboundLink")],1)])])])])])}),[],!1,null,null,null);e.default=a.exports},344:function(t,e,o){t.exports=o.p+"assets/img/cube_orange_hero.944ff463.jpg"},364:function(t,e,o){t.exports=o.p+"assets/img/cube_black_hero.6173ab1f.png"},365:function(t,e,o){t.exports=o.p+"assets/img/cube_yellow_hero.77cbe270.jpg"},540:function(t,e,o){t.exports=o.p+"assets/img/cube_accessories.5c003f6c.jpg"},541:function(t,e,o){t.exports=o.p+"assets/img/cube_wiring_overview.908b84aa.jpg"},542:function(t,e,o){t.exports=o.p+"assets/img/cube_mount_front.2ff12fe0.jpg"},543:function(t,e){t.exports="data:image/jpeg;base64,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"},544:function(t,e,o){t.exports=o.p+"assets/img/here_plus_connector.e4b10b83.png"},545:function(t,e,o){t.exports=o.p+"assets/img/cube_buzzer.eaf96c03.jpg"},546:function(t,e,o){t.exports=o.p+"assets/img/cube_rc_in.be909e23.jpg"},547:function(t,e,o){t.exports=o.p+"assets/img/cube_rc_spektrum.15cc6fdb.jpg"},548:function(t,e,o){t.exports=o.p+"assets/img/cube_wiring_power_mc.be5618ec.jpg"},549:function(t,e,o){t.exports=o.p+"assets/img/cube_schematic_telemetry.7f01aeec.jpg"},550:function(t,e,o){t.exports=o.p+"assets/img/cube_sdcard.47a5273b.jpg"},551:function(t,e,o){t.exports=o.p+"assets/img/cube_main_aux_outputs.7c0c77b8.jpg"},552:function(t,e,o){t.exports=o.p+"assets/img/cube_usb_connection.1aa05e13.jpg"}}]);