(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{1853:function(t,e,r){"use strict";r.r(e);var o=r(18),a=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"pixhawk-wiring-quick-start"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#pixhawk-wiring-quick-start"}},[t._v("#")]),t._v(" Pixhawk Wiring Quick Start")]),t._v(" "),o("blockquote",[o("p",[o("strong",[t._v("Warning")]),t._v(" PX4 does not manufacture this (or any) autopilot. Contact the "),o("a",{attrs:{href:"https://store.mrobotics.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("manufacturer"),o("OutboundLink")],1),t._v(" for hardware support or compliance issues.")])]),t._v(" "),o("p",[t._v("This quick start guide shows how to power the "),o("em",[t._v("3DR Pixhawk")]),t._v(" flight controller and connect its most important peripherals.")]),t._v(" "),o("p",[o("img",{attrs:{src:r(541),alt:"Pixhawk Image"}})]),t._v(" "),o("blockquote",[o("p",[o("strong",[t._v("Note")]),t._v(" The "),o("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk.html"}},[t._v("3DR Pixhawk")]),t._v(" is no longer available from 3DR. Other flight controllers based on the "),o("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk_series.html"}},[t._v("Pixhawk FMUv2 architecture")]),t._v(" are available from other companies (these share the same connections, outputs, functions, etc. and are wired in a similar way).")],1)]),t._v(" "),o("h2",{attrs:{id:"wiring-chart-overview"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#wiring-chart-overview"}},[t._v("#")]),t._v(" Wiring Chart Overview")]),t._v(" "),o("p",[t._v("The image below shows standard Pixhawk connections (excepting the motor and servo outputs). We'll go through each main part in the following sections.")]),t._v(" "),o("p",[o("img",{attrs:{src:r(542),alt:"Pixhawk Wiring Overview"}})]),t._v(" "),o("blockquote",[o("p",[o("strong",[t._v("Note")]),t._v(" More detailed wiring information is "),o("a",{attrs:{href:"#detailed-wiring-infographic-copter"}},[t._v("shown below")]),t._v(".")])]),t._v(" "),o("h2",{attrs:{id:"mount-and-orient-controller"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#mount-and-orient-controller"}},[t._v("#")]),t._v(" Mount and Orient Controller")]),t._v(" "),o("p",[t._v("The "),o("em",[t._v("Pixhawk")]),t._v(" should be mounted on the frame using vibration-damping foam pads (included in the kit). It should be positioned as close to your vehicle’s center of gravity as possible, oriented top-side up with the arrow points towards the front of the vehicle.")]),t._v(" "),o("p",[o("img",{attrs:{src:r(543),alt:"Pixhawk mounting and orientation"}})]),t._v(" "),o("blockquote",[o("p",[o("strong",[t._v("Note")]),t._v(" If the controller cannot be mounted in the recommended/default orientation (e.g. due to space constraints) you will need to configure the autopilot software with the orientation that you actually used: "),o("RouterLink",{attrs:{to:"/ko/config/flight_controller_orientation.html"}},[t._v("Flight Controller Orientation")]),t._v(".")],1)]),t._v(" "),o("h2",{attrs:{id:"buzzer-and-safety-switch"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#buzzer-and-safety-switch"}},[t._v("#")]),t._v(" Buzzer and Safety Switch")]),t._v(" "),o("p",[t._v("Connect the included buzzer and safety switch as shown below (these are mandatory).")]),t._v(" "),o("p",[o("img",{attrs:{src:r(544),alt:"Pixhawk mounting and orientation"}})]),t._v(" "),o("h2",{attrs:{id:"gps-compass"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#gps-compass"}},[t._v("#")]),t._v(" GPS + Compass")]),t._v(" "),o("p",[t._v("Attach a GPS (required) to the GPS port using the 6-wire cable supplied in the kit. Optionally attach a compass to the I2C port using a 4-wire cable (the Pixhawk has an internal compass, which can be used if necessary).")]),t._v(" "),o("blockquote",[o("p",[o("strong",[t._v("Note")]),t._v(" The diagram shows a combined GPS and Compass. The GPS/Compass should be mounted on the frame as far away from other electronics as possible, with the direction marker towards the front of the vehicle (separating the compass from other electronics will reduce interference).")])]),t._v(" "),o("p",[o("img",{attrs:{src:r(545),alt:"Connect compass/GPS to Pixhawk"}})]),t._v(" "),o("h2",{attrs:{id:"power"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#power"}},[t._v("#")]),t._v(" Power")]),t._v(" "),o("p",[t._v("Connect the output of a "),o("em",[t._v("Power module")]),t._v(" (PM) to the "),o("strong",[t._v("POWER")]),t._v(" port using a 6-wire cable as shown. The PM input will be connected to your LiPo battery, while the main output will supply vehicle ESCs/motors (possibly via a power distribution board).")]),t._v(" "),o("p",[t._v("The power module supplies the flight controller with power from the battery and also sends information about the analog current and voltage supplied via the module (including both power to the flight controller and to motors etc).")]),t._v(" "),o("p",[o("img",{attrs:{src:r(546),alt:"Pixhawk - Power Module"}})]),t._v(" "),o("blockquote",[o("p",[o("strong",[t._v("Warning")]),t._v(" The power module supplies the flight controller itself, but cannot power servos and other hardware connected to the controller's output ports (rail). For copter this does not matter because the motors are separately powered.")])]),t._v(" "),o("p",[t._v("For planes and VTOL the output rail will need to be separately powered in order to drive servos for rudders, elevons etc. Often the main pusher/puller motor uses an ESC with an integrated "),o("a",{attrs:{href:"https://en.wikipedia.org/wiki/Battery_eliminator_circuit",target:"_blank",rel:"noopener noreferrer"}},[t._v("BEC"),o("OutboundLink")],1),t._v(" that can be connected to the Pixhawk output rail. If not, you will need to setup a 5V BEC to connect to one of the free Pixhawk ports (without power, the servos will not work).")]),t._v(" "),o("h2",{attrs:{id:"radio-control"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#radio-control"}},[t._v("#")]),t._v(" Radio Control")]),t._v(" "),o("p",[t._v("A remote control (RC) radio system is required if you want to "),o("em",[t._v("manually")]),t._v(" control your vehicle (PX4 does not require a radio system for autonomous flight modes).")]),t._v(" "),o("p",[t._v("You will need to "),o("RouterLink",{attrs:{to:"/ko/getting_started/rc_transmitter_receiver.html"}},[t._v("select a compatible transmitter/receiver")]),t._v(" and then "),o("em",[t._v("bind")]),t._v(" them so that they communicate (read the instructions that come with your specific transmitter/receiver).")],1),t._v(" "),o("p",[t._v("The instructions below show how to connect the different types of receivers to Pixhawk:")]),t._v(" "),o("ul",[o("li",[o("p",[t._v("Spektrum and DSM receivers connect to the "),o("strong",[t._v("SPKT/DSM")]),t._v(" input. "),o("img",{attrs:{src:r(547),alt:"Pixhawk - Radio port for Spektrum receivers"}})])]),t._v(" "),o("li",[o("p",[t._v("PPM-SUM and S.BUS receivers connect to the "),o("strong",[t._v("RC")]),t._v(" ground, power and signal pins as shown. "),o("img",{attrs:{src:r(548),alt:"Pixhawk - Radio port for PPM/S.BUS receivers"}})])]),t._v(" "),o("li",[o("p",[t._v("PPM and PWM receivers that have an "),o("em",[t._v("individual wire for each channel")]),t._v(" must connect to the "),o("strong",[t._v("RC")]),t._v(" port "),o("em",[t._v("via a PPM encoder")]),t._v(" "),o("a",{attrs:{href:"http://www.getfpv.com/radios/radio-accessories/holybro-ppm-encoder-module.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("like this one"),o("OutboundLink")],1),t._v(" (PPM-Sum receivers use a single signal wire for all channels).")])])]),t._v(" "),o("p",[t._v("For more information about selecting a radio system, receiver compatibility, and binding your transmitter/receiver pair, see: "),o("RouterLink",{attrs:{to:"/ko/getting_started/rc_transmitter_receiver.html"}},[t._v("Remote Control Transmitters & Receivers")]),t._v(".")],1),t._v(" "),o("h2",{attrs:{id:"telemetry-radios-optional"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#telemetry-radios-optional"}},[t._v("#")]),t._v(" Telemetry Radios (Optional)")]),t._v(" "),o("p",[t._v("Telemetry radios may be used to communicate and control a vehicle in flight from a ground station (for example, you can direct the UAV to a particular position, or upload a new mission). One radio must be connected to your vehicle as shown below. The other is connected to your ground station computer or mobile device (usually by USB).")]),t._v(" "),o("p",[o("img",{attrs:{src:r(549),alt:"Pixhawk/Telemetry Radio"}})]),t._v(" "),o("h2",{attrs:{id:"motors"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#motors"}},[t._v("#")]),t._v(" Motors")]),t._v(" "),o("p",[t._v("The mappings between MAIN/AUX output ports and motor/servos for all supported air and ground frames are listed in the "),o("RouterLink",{attrs:{to:"/ko/airframes/airframe_reference.html"}},[t._v("Airframe Reference")]),t._v(".")],1),t._v(" "),o("blockquote",[o("p",[o("strong",[t._v("Caution")]),t._v(" The mapping is not consistent across frames (e.g. you can't rely on the throttle being on the same output for all plane frames). Make sure to use the correct mapping for your vehicle.")])]),t._v(" "),o("p",[o("span")]),t._v(" "),o("blockquote",[o("p",[o("strong",[t._v("Tip")]),t._v(' If your frame is not listed in the reference then use a "generic" airframe of the correct type.')])]),t._v(" "),o("p",[o("span")]),t._v(" "),o("blockquote",[o("p",[o("strong",[t._v("Note")]),t._v(" The output rail must be separately powered, as discussed in the "),o("a",{attrs:{href:"#power"}},[t._v("Power")]),t._v(" section above.")])]),t._v(" "),o("h2",{attrs:{id:"other-peripherals"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#other-peripherals"}},[t._v("#")]),t._v(" Other Peripherals")]),t._v(" "),o("p",[t._v("The wiring and configuration of other components is covered within the topics for individual "),o("RouterLink",{attrs:{to:"/ko/peripherals/"}},[t._v("peripherals")]),t._v(".")],1),t._v(" "),o("h2",{attrs:{id:"configuration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),o("p",[t._v("General configuration information is covered in: "),o("RouterLink",{attrs:{to:"/ko/config/"}},[t._v("Autopilot Configuration")]),t._v(".")],1),t._v(" "),o("p",[t._v("QuadPlane specific configuration is covered here: "),o("RouterLink",{attrs:{to:"/ko/config_vtol/vtol_quad_configuration.html"}},[t._v("QuadPlane VTOL Configuration")])],1),t._v(" "),o("h2",{attrs:{id:"detailed-wiring-infographic-copter"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#detailed-wiring-infographic-copter"}},[t._v("#")]),t._v(" Detailed Wiring Infographic (Copter)")]),t._v(" "),o("p",[o("img",{attrs:{src:r(550),alt:"QuadCopter Pixhawk Wiring Infographic"}})]),t._v(" "),o("h2",{attrs:{id:"further-information"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#further-information"}},[t._v("#")]),t._v(" Further information")]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk_series.html"}},[t._v("Pixhawk Series")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk.html"}},[t._v("3DR Pixhawk")])],1)])])}),[],!1,null,null,null);e.default=a.exports},541:function(t,e,r){t.exports=r.p+"assets/img/pixhawk_logo_view.431588e6.jpg"},542:function(t,e,r){t.exports=r.p+"assets/img/pixhawk_wiring_overview.1e85ae6f.jpg"},543:function(t,e,r){t.exports=r.p+"assets/img/pixhawk_3dr_mounting_and_foam.d1a1aa4c.jpg"},544:function(t,e,r){t.exports=r.p+"assets/img/pixhawk_3dr_buzzer_and_safety_switch.3702efed.jpg"},545:function(t,e,r){t.exports=r.p+"assets/img/pixhawk_3dr_compass_gps.2eaea17a.jpg"},546:function(t,e,r){t.exports=r.p+"assets/img/pixhawk_3dr_power_module.84f59322.jpg"},547:function(t,e,r){t.exports=r.p+"assets/img/pixhawk_3dr_receiver_spektrum.3cdfc07a.jpg"},548:function(t,e,r){t.exports=r.p+"assets/img/pixhawk_3dr_receiver_ppm_sbus.d22f5a93.jpg"},549:function(t,e,r){t.exports=r.p+"assets/img/pixhawk_3dr_telemetry_radio.b99e47a6.jpg"},550:function(t,e,r){t.exports=r.p+"assets/img/pixhawk_infographic2.b276a862.jpg"}}]);