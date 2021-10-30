(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{1524:function(t,e,o){"use strict";o.r(e);var r=o(19),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"pixhawk-wiring-quick-start"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pixhawk-wiring-quick-start"}},[t._v("#")]),t._v(" Pixhawk Wiring Quick Start")]),t._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),r("p",[t._v("PX4 does not manufacture this (or any) autopilot.\nContact the "),r("a",{attrs:{href:"https://store.mrobotics.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("manufacturer"),r("OutboundLink")],1),t._v(" for hardware support or compliance issues.")])]),t._v(" "),r("p",[t._v("This quick start guide shows how to power the "),r("em",[t._v("3DR Pixhawk")]),t._v(" flight controller and connect its most important peripherals.")]),t._v(" "),r("p",[r("img",{attrs:{src:o(538),alt:"Pixhawk Image"}})]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("The "),r("RouterLink",{attrs:{to:"/en/flight_controller/pixhawk.html"}},[t._v("3DR Pixhawk")]),t._v(" is no longer available from 3DR.\nOther flight controllers based on the "),r("RouterLink",{attrs:{to:"/en/flight_controller/pixhawk_series.html"}},[t._v("Pixhawk FMUv2 architecture")]),t._v(" are available from other companies (these share the same connections, outputs, functions, etc. and are wired in a similar way).")],1)]),t._v(" "),r("h2",{attrs:{id:"wiring-chart-overview"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#wiring-chart-overview"}},[t._v("#")]),t._v(" Wiring Chart Overview")]),t._v(" "),r("p",[t._v("The image below shows standard Pixhawk connections (excepting the motor and servo outputs).\nWe'll go through each main part in the following sections.")]),t._v(" "),r("p",[r("img",{attrs:{src:o(539),alt:"Pixhawk Wiring Overview"}})]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("More detailed wiring information is "),r("a",{attrs:{href:"#detailed-wiring-infographic-copter"}},[t._v("shown below")]),t._v(".")])]),t._v(" "),r("h2",{attrs:{id:"mount-and-orient-controller"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mount-and-orient-controller"}},[t._v("#")]),t._v(" Mount and Orient Controller")]),t._v(" "),r("p",[t._v("The "),r("em",[t._v("Pixhawk")]),t._v(" should be mounted on the frame using vibration-damping foam pads (included in the kit).\nIt should be positioned as close to your vehicle’s center of gravity as possible, oriented top-side up with the arrow points towards the front of the vehicle.")]),t._v(" "),r("p",[r("img",{attrs:{src:o(540),alt:"Pixhawk mounting and orientation"}})]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("If the controller cannot be mounted in the recommended/default orientation (e.g. due to space constraints) you will need to configure the autopilot software with the orientation that you actually used: "),r("RouterLink",{attrs:{to:"/en/config/flight_controller_orientation.html"}},[t._v("Flight Controller Orientation")]),t._v(".")],1)]),t._v(" "),r("h2",{attrs:{id:"buzzer-and-safety-switch"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#buzzer-and-safety-switch"}},[t._v("#")]),t._v(" Buzzer and Safety Switch")]),t._v(" "),r("p",[t._v("Connect the included buzzer and safety switch as shown below (these are mandatory).")]),t._v(" "),r("p",[r("img",{attrs:{src:o(541),alt:"Pixhawk mounting and orientation"}})]),t._v(" "),r("h2",{attrs:{id:"gps-compass"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#gps-compass"}},[t._v("#")]),t._v(" GPS + Compass")]),t._v(" "),r("p",[t._v("Attach a GPS (required) to the GPS port using the 6-wire cable supplied in the kit. Optionally attach a compass to the I2C port using a 4-wire cable (the Pixhawk has an internal compass, which can be used if necessary).")]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("The diagram shows a combined GPS and Compass.\nThe GPS/Compass should be mounted on the frame as far away from other electronics as possible, with the direction marker towards the front of the vehicle (separating the compass from other electronics will reduce interference).")])]),t._v(" "),r("p",[r("img",{attrs:{src:o(542),alt:"Connect compass/GPS to Pixhawk"}})]),t._v(" "),r("h2",{attrs:{id:"power"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#power"}},[t._v("#")]),t._v(" Power")]),t._v(" "),r("p",[t._v("Connect the output of a "),r("em",[t._v("Power module")]),t._v(" (PM) to the "),r("strong",[t._v("POWER")]),t._v(" port using a 6-wire cable as shown. The PM input will be connected to your LiPo battery, while the main output will supply vehicle ESCs/motors (possibly via a power distribution board).")]),t._v(" "),r("p",[t._v("The power module supplies the flight controller with power from the battery and also sends information about the analog current and voltage supplied via the module (including both power to the flight controller and to motors etc).")]),t._v(" "),r("p",[r("img",{attrs:{src:o(543),alt:"Pixhawk - Power Module"}})]),t._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),r("p",[t._v("The power module supplies the flight controller itself, but cannot power servos and other hardware connected to the controller's output ports (rail). For copter this does not matter because the motors are separately powered.")])]),t._v(" "),r("p",[t._v("For planes and VTOL the output rail will need to be separately powered in order to drive servos for rudders, elevons etc. Often the main pusher/puller motor uses an ESC with an integrated "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Battery_eliminator_circuit",target:"_blank",rel:"noopener noreferrer"}},[t._v("BEC"),r("OutboundLink")],1),t._v(" that can be connected to the Pixhawk output rail. If not, you will need to setup a 5V BEC to connect to one of the free Pixhawk ports (without power, the servos will not work).")]),t._v(" "),r("h2",{attrs:{id:"radio-control"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#radio-control"}},[t._v("#")]),t._v(" Radio Control")]),t._v(" "),r("p",[t._v("A remote control (RC) radio system is required if you want to "),r("em",[t._v("manually")]),t._v(" control your vehicle (PX4 does not require a radio system for autonomous flight modes).")]),t._v(" "),r("p",[t._v("You will need to "),r("RouterLink",{attrs:{to:"/en/getting_started/rc_transmitter_receiver.html"}},[t._v("select a compatible transmitter/receiver")]),t._v(" and then "),r("em",[t._v("bind")]),t._v(" them so that they communicate (read the instructions that come with your specific transmitter/receiver).")],1),t._v(" "),r("p",[t._v("The instructions below show how to connect the different types of receivers to Pixhawk:")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("Spektrum and DSM receivers connect to the "),r("strong",[t._v("SPKT/DSM")]),t._v(" input.\n"),r("img",{attrs:{src:o(544),alt:"Pixhawk - Radio port for Spektrum receivers"}})])]),t._v(" "),r("li",[r("p",[t._v("PPM-SUM and S.BUS receivers connect to the "),r("strong",[t._v("RC")]),t._v(" ground, power and signal pins as shown.\n"),r("img",{attrs:{src:o(545),alt:"Pixhawk - Radio port for PPM/S.BUS receivers"}})])]),t._v(" "),r("li",[r("p",[t._v("PPM and PWM receivers that have an "),r("em",[t._v("individual wire for each channel")]),t._v(" must connect to the "),r("strong",[t._v("RC")]),t._v(" port "),r("em",[t._v("via a PPM encoder")]),t._v(" "),r("a",{attrs:{href:"http://www.getfpv.com/radios/radio-accessories/holybro-ppm-encoder-module.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("like this one"),r("OutboundLink")],1),t._v(" (PPM-Sum receivers use a single signal wire for all channels).")])])]),t._v(" "),r("p",[t._v("For more information about selecting a radio system, receiver compatibility, and binding your transmitter/receiver pair, see: "),r("RouterLink",{attrs:{to:"/en/getting_started/rc_transmitter_receiver.html"}},[t._v("Remote Control Transmitters & Receivers")]),t._v(".")],1),t._v(" "),r("h2",{attrs:{id:"telemetry-radios-optional"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#telemetry-radios-optional"}},[t._v("#")]),t._v(" Telemetry Radios (Optional)")]),t._v(" "),r("p",[t._v("Telemetry radios may be used to communicate and control a vehicle in flight from a ground station (for example, you can direct the UAV to a particular position, or upload a new mission). One radio must be connected to your vehicle as shown below. The other is connected to your ground station computer or mobile device (usually by USB).")]),t._v(" "),r("p",[r("img",{attrs:{src:o(546),alt:"Pixhawk/Telemetry Radio"}})]),t._v(" "),r("h2",{attrs:{id:"motors"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#motors"}},[t._v("#")]),t._v(" Motors")]),t._v(" "),r("p",[t._v("The mappings between MAIN/AUX output ports and motor/servos for all supported air and ground frames are listed in the "),r("RouterLink",{attrs:{to:"/en/airframes/airframe_reference.html"}},[t._v("Airframe Reference")]),t._v(".")],1),t._v(" "),r("p",[t._v(":::caution\nThe mapping is not consistent across frames (e.g. you can't rely on the throttle being on the same output for all plane frames).\nMake sure to use the correct mapping for your vehicle.\n:::")]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[t._v('If your frame is not listed in the reference then use a "generic" airframe of the correct type.')])]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("The output rail must be separately powered, as discussed in the "),r("a",{attrs:{href:"#power"}},[t._v("Power")]),t._v(" section above.")])]),t._v(" "),r("h2",{attrs:{id:"other-peripherals"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#other-peripherals"}},[t._v("#")]),t._v(" Other Peripherals")]),t._v(" "),r("p",[t._v("The wiring and configuration of other components is covered within the topics for individual "),r("RouterLink",{attrs:{to:"/en/peripherals/"}},[t._v("peripherals")]),t._v(".")],1),t._v(" "),r("h2",{attrs:{id:"configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),r("p",[t._v("General configuration information is covered in: "),r("RouterLink",{attrs:{to:"/en/config/"}},[t._v("Autopilot Configuration")]),t._v(".")],1),t._v(" "),r("p",[t._v("QuadPlane specific configuration is covered here: "),r("RouterLink",{attrs:{to:"/en/config_vtol/vtol_quad_configuration.html"}},[t._v("QuadPlane VTOL Configuration")])],1),t._v(" "),r("h2",{attrs:{id:"detailed-wiring-infographic-copter"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#detailed-wiring-infographic-copter"}},[t._v("#")]),t._v(" Detailed Wiring Infographic (Copter)")]),t._v(" "),r("p",[r("img",{attrs:{src:o(547),alt:"QuadCopter Pixhawk Wiring Infographic"}})]),t._v(" "),r("h2",{attrs:{id:"further-information"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#further-information"}},[t._v("#")]),t._v(" Further information")]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/en/flight_controller/pixhawk_series.html"}},[t._v("Pixhawk Series")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/en/flight_controller/pixhawk.html"}},[t._v("3DR Pixhawk")])],1)])])}),[],!1,null,null,null);e.default=a.exports},538:function(t,e,o){t.exports=o.p+"assets/img/pixhawk_logo_view.431588e6.jpg"},539:function(t,e,o){t.exports=o.p+"assets/img/pixhawk_wiring_overview.1e85ae6f.jpg"},540:function(t,e,o){t.exports=o.p+"assets/img/pixhawk_3dr_mounting_and_foam.d1a1aa4c.jpg"},541:function(t,e,o){t.exports=o.p+"assets/img/pixhawk_3dr_buzzer_and_safety_switch.3702efed.jpg"},542:function(t,e,o){t.exports=o.p+"assets/img/pixhawk_3dr_compass_gps.2eaea17a.jpg"},543:function(t,e,o){t.exports=o.p+"assets/img/pixhawk_3dr_power_module.84f59322.jpg"},544:function(t,e,o){t.exports=o.p+"assets/img/pixhawk_3dr_receiver_spektrum.3cdfc07a.jpg"},545:function(t,e,o){t.exports=o.p+"assets/img/pixhawk_3dr_receiver_ppm_sbus.d22f5a93.jpg"},546:function(t,e,o){t.exports=o.p+"assets/img/pixhawk_3dr_telemetry_radio.b99e47a6.jpg"},547:function(t,e,o){t.exports=o.p+"assets/img/pixhawk_infographic2.b276a862.jpg"}}]);