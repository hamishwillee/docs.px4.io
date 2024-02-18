(window.webpackJsonp=window.webpackJsonp||[]).push([[272],{1310:function(t,e,r){t.exports=r.p+"assets/img/VTOLTiltRotor_eflite_convergence.a28b921b.svg"},1311:function(t,e,r){t.exports=r.p+"assets/img/eflight_convergence_pixfalcon_mounting.25864f64.jpg"},1312:function(t,e,r){t.exports=r.p+"assets/img/eflight_convergence_telemetry_module.e0677c88.jpg"},1313:function(t,e,r){t.exports=r.p+"assets/img/eflight_convergence_gps_mounting.c9abed81.jpg"},1314:function(t,e,r){t.exports=r.p+"assets/img/qgc_setup_airframe.76bea14d.jpg"},3764:function(t,e,r){"use strict";r.r(e);var o=r(19),i=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"e-flite-convergence-倾转旋翼-pixfalcon"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#e-flite-convergence-倾转旋翼-pixfalcon"}},[t._v("#")]),t._v(" E-Flite Convergence 倾转旋翼 （Pixfalcon）")]),t._v(" "),o("p",[t._v("The "),o("a",{attrs:{href:"https://youtu.be/HNedXQ_jhYo",target:"_blank",rel:"noopener noreferrer"}},[t._v("E-Flite Convergence"),o("OutboundLink")],1),t._v(" can easily be converted to a fully autonomous VTOL with PX4. There is not much space but it's enough for a "),o("RouterLink",{attrs:{to:"/zh/flight_controller/pixfalcon.html"}},[t._v("Pixfalcon")]),t._v(" flight controller with GPS and telemetry.")],1),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),o("p",[t._v("The original Horizon Hobby "),o("em",[t._v("E-Flite Convergence")]),t._v(" frame and "),o("RouterLink",{attrs:{to:"/zh/flight_controller/pixfalcon.html"}},[t._v("Pixfalcon")]),t._v(" have been discontinued. Alternatives are provided in the "),o("a",{attrs:{href:"#where-to-buy"}},[t._v("Purchase")]),t._v(" section. :::")],1),t._v(" "),o("p"),o("div",{staticClass:"embed-responsive embed-responsive-16by9"},[o("iframe",{staticClass:"embed-responsive-item youtube-player",attrs:{type:"text/html",width:"640",height:"390",src:"https://www.youtube.com/embed/E61P2f2WPNU",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]),o("p"),t._v(" "),o("h2",{attrs:{id:"where-to-buy"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#where-to-buy"}},[t._v("#")]),t._v(" Where to Buy")]),t._v(" "),o("p",[t._v("Vehicle frame options:")]),t._v(" "),o("ul",[o("li",[o("strong",[t._v("WL Tech XK X450")]),t._v(" - "),o("a",{attrs:{href:"https://www.aliexpress.com/item/1005001946025611.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("AliExpress"),o("OutboundLink")],1)]),t._v(" "),o("li",[o("strong",[t._v("JJRC M02")]),t._v(" - "),o("a",{attrs:{href:"https://au.banggood.com/JJRC-M02-2_4G-6CH-450mm-Wingspan-EPO-Brushless-6-axis-Gyro-Aerobatic-RC-Airplane-RTF-3D-or-6G-Mode-Aircraft-p-1588201.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Banggood (AU)"),o("OutboundLink")],1),t._v(", "),o("a",{attrs:{href:"https://www.aliexpress.com/item/4001031497018.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("AliExpress"),o("OutboundLink")],1)])]),t._v(" "),o("p",[t._v("Flight controller options ():")]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk4_mini.html"}},[t._v("Pixhawk 4 Mini")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk_mini.html"}},[t._v("Holybro Pixhawk Mini")]),t._v(".")],1),t._v(" "),o("li",[t._v("Any other compatible flight controller with small enough form-factor.")])]),t._v(" "),o("h2",{attrs:{id:"hardware-setup"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#hardware-setup"}},[t._v("#")]),t._v(" Hardware Setup")]),t._v(" "),o("p",[t._v("The vehicle needs 7 PWM signals for the motors and control surfaces:")]),t._v(" "),o("ul",[o("li",[t._v("Motor (left/right/back)")]),t._v(" "),o("li",[t._v("Tilt servos (right/left)")]),t._v(" "),o("li",[t._v("Elevons (left/right)")])]),t._v(" "),o("p",[t._v("These can be wired to flight controller outputs more-or-less in any way you want (though outputs for motors should be grouped together, and so on).")]),t._v(" "),o("p",[t._v("The outputs are configured in the "),o("RouterLink",{attrs:{to:"/zh/config/actuators.html"}},[t._v("Actuators Configuration")]),t._v(" by following the instructions for VTOL tiltrotor geometry and output configuration. Note that you will need to start from the "),o("RouterLink",{attrs:{to:"/zh/airframes/airframe_reference.html#vtol_vtol_tiltrotor_generic_tiltrotor_vtol"}},[t._v("Generic Tiltrotor VTOL")]),t._v(" frame.")],1),t._v(" "),o("p",[t._v("Note that left and right in the configuration screen and frame reference are defined from the perspective of a human pilot inside a real plane (or looking from above, as shown below):")]),t._v(" "),o("img",{attrs:{src:r(1310),width:"300px"}}),t._v(" "),o("h3",{attrs:{id:"flight-controller"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#flight-controller"}},[t._v("#")]),t._v(" Flight Controller")]),t._v(" "),o("p",[t._v("The flight controller can be mounted at the same place the original autopilot was.")]),t._v(" "),o("p",[o("img",{attrs:{src:r(1311),alt:"Mount Pixfalcon"}})]),t._v(" "),o("h3",{attrs:{id:"telemetry-radio"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#telemetry-radio"}},[t._v("#")]),t._v(" Telemetry Radio")]),t._v(" "),o("p",[t._v("The telemetry module fits into the bay meant to hold FPV transmission gear.")]),t._v(" "),o("p",[o("img",{attrs:{src:r(1312),alt:"Mount telemetry module"}})]),t._v(" "),o("h3",{attrs:{id:"gps"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#gps"}},[t._v("#")]),t._v(" GPS")]),t._v(" "),o("p",[t._v('For the GPS we cut out a section of foam inside the "cockpit". That way the GPS can be put inside the body and is nicely stowed away without compromising the vehicle appearance.')]),t._v(" "),o("p",[o("img",{attrs:{src:r(1313),alt:"Mount GPS"}})]),t._v(" "),o("h2",{attrs:{id:"px4-configuration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#px4-configuration"}},[t._v("#")]),t._v(" PX4 Configuration")]),t._v(" "),o("p",[t._v("Follow the "),o("RouterLink",{attrs:{to:"/zh/config/"}},[t._v("Standard Configuration")]),t._v(" in "),o("em",[t._v("QGroundControl")]),t._v(" (radio, sensors, flight modes, etc.).")],1),t._v(" "),o("p",[t._v("The particular settings that are relevant to this vehicle are:")]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/zh/config/airframe.html"}},[t._v("Airframe")]),t._v(" "),o("ul",[o("li",[t._v("Select the airframe configuration "),o("strong",[t._v("E-flite Convergence")]),t._v(" under "),o("strong",[t._v("VTOL Tiltrotor")]),t._v(" and restart "),o("em",[t._v("QGroundControl")]),t._v(". "),o("img",{attrs:{src:r(1314),alt:"QGroundControl Vehicle Setting - Airframe selection E-Flight"}})])])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/zh/config/flight_mode.html"}},[t._v("Flight Modes/Switches")]),t._v(" "),o("ul",[o("li",[t._v("As this is a VTOL vehicle, you must "),o("RouterLink",{attrs:{to:"/zh/config/flight_mode.html#what-flight-modes-and-switches-should-i-set"}},[t._v("assign an RC controller switch")]),t._v(" for transitioning between multicopter and fixed-wing modes.")],1)])],1)])])])}),[],!1,null,null,null);e.default=i.exports}}]);