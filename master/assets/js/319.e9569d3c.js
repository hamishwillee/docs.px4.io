(window.webpackJsonp=window.webpackJsonp||[]).push([[319],{1095:function(t,e,o){t.exports=o.p+"assets/img/eflight_convergence_pixfalcon_mounting.25864f64.jpg"},1096:function(t,e,o){t.exports=o.p+"assets/img/eflight_convergence_telemetry_module.e0677c88.jpg"},1097:function(t,e,o){t.exports=o.p+"assets/img/eflight_convergence_gps_mounting.c9abed81.jpg"},1696:function(t,e,o){"use strict";o.r(e);var n=o(18),i=Object(n.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"e-flite-convergence-tiltrotor-vtol-pixfalcon"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#e-flite-convergence-tiltrotor-vtol-pixfalcon"}},[t._v("#")]),t._v(" E-flite Convergence Tiltrotor VTOL (Pixfalcon)")]),t._v(" "),n("p",[t._v("The "),n("a",{attrs:{href:"https://www.modelflight.com.au/e-flite-convergence-vtol-bnf-basic.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("E-Flite Convergence"),n("OutboundLink")],1),t._v(" can easily be converted to a fully autonomous VTOL with PX4.\nThere is not much space but it's enough for a Pixfalcon with GPS and telemetry.")]),t._v(" "),n("p"),n("div",{staticClass:"embed-responsive embed-responsive-16by9"},[n("iframe",{staticClass:"embed-responsive-item youtube-player",attrs:{type:"text/html",width:"640",height:"390",src:"https://www.youtube.com/embed/E61P2f2WPNU",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]),n("p"),t._v(" "),n("h2",{attrs:{id:"hardware-setup"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#hardware-setup"}},[t._v("#")]),t._v(" Hardware Setup")]),t._v(" "),n("p",[t._v("The convergence needs 7 PWM signals and is connected to a Pixfalcon in the following way (matching the airframe configuration in PX4, left/right seen looking from behind the plane):")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("Port")]),t._v(" "),n("th",[t._v("Connection")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("MAIN 1")]),t._v(" "),n("td",[t._v("Motor right")])]),t._v(" "),n("tr",[n("td",[t._v("MAIN 2")]),t._v(" "),n("td",[t._v("Motor left")])]),t._v(" "),n("tr",[n("td",[t._v("MAIN 3")]),t._v(" "),n("td",[t._v("Motor back")])]),t._v(" "),n("tr",[n("td",[t._v("MAIN 4")]),t._v(" "),n("td",[t._v("empty")])]),t._v(" "),n("tr",[n("td",[t._v("MAIN 5")]),t._v(" "),n("td",[t._v("Tilt servo right")])]),t._v(" "),n("tr",[n("td",[t._v("MAIN 6")]),t._v(" "),n("td",[t._v("Tilt servo left")])]),t._v(" "),n("tr",[n("td",[t._v("MAIN 7")]),t._v(" "),n("td",[t._v("Elevon right")])]),t._v(" "),n("tr",[n("td",[t._v("MAIN 8")]),t._v(" "),n("td",[t._v("Elevon left")])])])]),t._v(" "),n("p",[t._v("The Pixfalcon can be mounted at the same place the original autopilot was.")]),t._v(" "),n("p",[n("img",{attrs:{src:o(1095),alt:"Mount Pixfalcon"}})]),t._v(" "),n("p",[t._v("The telemetry module fits into the bay meant to hold FPV transmission gear.")]),t._v(" "),n("p",[n("img",{attrs:{src:o(1096),alt:"Mount telemetry module"}})]),t._v(" "),n("p",[t._v('For the GPS we cut out a section of foam inside the "cockpit".\nThat way the GPS can be put inside the body and is nicely stowed away without compromising the looks 😃.')]),t._v(" "),n("p",[n("img",{attrs:{src:o(1097),alt:"Mount GPS"}})]),t._v(" "),n("h2",{attrs:{id:"configuration"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),n("p",[t._v('Before the autopilot is configured normally (radio, sensors, flight modes), select the airframe configuration "E-flite Convergence" under\n"VTOL Tiltrotor" in QGC and restart.')]),t._v(" "),n("p",[t._v("If the airframe is not yet visible in QGC, set the following parameters and restart:")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("SYS_AUTOSTART")]),t._v(": 13012")]),t._v(" "),n("li",[n("code",[t._v("SYS_AUTOCONFIG")]),t._v(": 1")])]),t._v(" "),n("p",[t._v("Notes:")]),t._v(" "),n("ul",[n("li",[t._v("Remember to assign the transition switch for switching to fixed-wing.")]),t._v(" "),n("li",[t._v("By default permanent stabilization is enabled. If you like fully manual flying in fixed-wing, set VT_FW_PERM_STAB to 0.")])])])}),[],!1,null,null,null);e.default=i.exports}}]);