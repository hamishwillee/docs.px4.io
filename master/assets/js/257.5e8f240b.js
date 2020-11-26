(window.webpackJsonp=window.webpackJsonp||[]).push([[257],{2027:function(e,t,o){"use strict";o.r(t);var i=o(18),r=Object(i.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"orbit-mc"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#orbit-mc"}},[e._v("#")]),e._v(" Orbit (MC)")]),e._v(" "),i("p",[i("RouterLink",{attrs:{to:"/ko/getting_started/flight_modes.html#key_difficulty"}},[i("img",{attrs:{src:o(324),title:"Easy to fly",width:"30px"}})]),e._v(" "),i("RouterLink",{attrs:{to:"/ko/getting_started/flight_modes.html#key_position_fixed"}},[i("img",{attrs:{src:o(322),title:"Position fix required (e.g. GPS)",width:"30px"}})])],1),e._v(" "),i("p",[e._v("The "),i("em",[e._v("Orbit")]),e._v(" guided flight mode allows you to command a multicopter (or VTOL in multicopter mode) to fly in a circle, by "),i("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#ORBIT_YAW_BEHAVIOUR",target:"_blank",rel:"noopener noreferrer"}},[e._v("default"),i("OutboundLink")],1),e._v(" yawing so that it always faces towards the center.")]),e._v(" "),i("p",[i("img",{attrs:{src:o(822),alt:"Orbit Mode - MC"}})]),e._v(" "),i("p",[i("em",[e._v("QGroundControl")]),e._v(" (or other compatible GCS or MAVLink API) is "),i("em",[e._v("required")]),e._v(" to enable the mode, and to set the center position, initial radius and altitude of the orbit. Once enabled the vehicle will fly as fast as possible to the closest point on the commanded circle trajectory and do a slow (1m/s) clockwise orbit on the planned circle, facing the center.")]),e._v(" "),i("p",[e._v("Instructions for how to start an orbit can be found here: "),i("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/FlyView/FlyView.html#orbit",target:"_blank",rel:"noopener noreferrer"}},[e._v("FlyView > Orbit Location"),i("OutboundLink")],1),e._v(" ("),i("em",[e._v("QGroundControl")]),e._v(" guide).")]),e._v(" "),i("blockquote",[i("p",[i("strong",[e._v("Note")]),e._v(" The use of an RC control is "),i("em",[e._v("optional")]),e._v(". If no RC control is present the orbit will proceed as described above. RC control cannot be used to start the mode (if you switch to the mode via RC it will sit idle).")])]),e._v(" "),i("p",[e._v("RC control can be used to change the orbit altitude, radius, speed, and orbit direction:")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("Left stick:")]),e._v(" "),i("ul",[i("li",[i("em",[e._v("up/down:")]),e._v(" controls speed of ascent/descent, as in "),i("RouterLink",{attrs:{to:"/ko/flight_modes/position_mc.html"}},[e._v("Position mode")]),e._v(". When in center deadzone, altitude is locked.")],1),e._v(" "),i("li",[i("em",[e._v("left/right:")]),e._v(" no effect.")])])]),e._v(" "),i("li",[i("strong",[e._v("Right stick:")]),e._v(" "),i("ul",[i("li",[i("em",[e._v("left/right:")]),e._v(" controls acceleration of orbit in clockwise/counter-clockwise directions. When centered the current speed is locked.\n"),i("ul",[i("li",[e._v("Maximum velocity is 10m/s and further limited to keep the centripetal acceleration below 2m/s^2.")])])]),e._v(" "),i("li",[i("em",[e._v("up/down:")]),e._v(" controls orbit radius (smaller/bigger). When centered the current radius is locked.\n"),i("ul",[i("li",[e._v("Minimum radius is 1m. Maximum radius is 100m.")])])])])])]),e._v(" "),i("p",[e._v("The diagram below shows the mode behaviour visually (for a "),i("RouterLink",{attrs:{to:"/ko/getting_started/rc_transmitter_receiver.html#transmitter_modes"}},[e._v("mode 2 transmitter")]),e._v(").")],1),e._v(" "),i("p",[i("img",{attrs:{src:o(422),alt:"Orbit Mode - MC"}})]),e._v(" "),i("p",[e._v("The mode can be stopped by switching to any other flight mode (using RC or QGC).")]),e._v(" "),i("h2",{attrs:{id:"parameters-limits"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#parameters-limits"}},[e._v("#")]),e._v(" Parameters/Limits")]),e._v(" "),i("p",[e._v("There are no orbit mode-specific parameters.")]),e._v(" "),i("p",[e._v("The following limits are hard coded:")]),e._v(" "),i("ul",[i("li",[e._v("Initial/default rotation is 1 m/s in a clockwise direction.")]),e._v(" "),i("li",[e._v("The maximum acceleration is limited to 2 m/s^2, with priority on keeping the commanded circle trajectory rather than commanded ground speed (i.e. the vehicle will slow down in order to achieve the correct circle if the acceleration exceeds 2m/s^2).")]),e._v(" "),i("li",[e._v("Maximum radius is 100m.")])]),e._v(" "),i("h2",{attrs:{id:"mavlink-messages-developers"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#mavlink-messages-developers"}},[e._v("#")]),e._v(" MAVLink Messages (Developers)")]),e._v(" "),i("p",[e._v("Orbit mode uses the following MAVLink commands:")]),e._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_DO_ORBIT",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAV_CMD_DO_ORBIT"),i("OutboundLink")],1),e._v(" - Start an orbit with specified center point, radius, direction, altitude, speed and "),i("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#ORBIT_YAW_BEHAVIOUR",target:"_blank",rel:"noopener noreferrer"}},[e._v("yaw direction"),i("OutboundLink")],1),e._v(" (vehicle defaults to faceing centre of orbit).")]),e._v(" "),i("li",[i("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#ORBIT_EXECUTION_STATUS",target:"_blank",rel:"noopener noreferrer"}},[e._v("ORBIT_EXECUTION_STATUS"),i("OutboundLink")],1),e._v(" - Orbit status emitted during orbit to update GCS of current orbit parameters (these may be changed by the RC controller).")])])])}),[],!1,null,null,null);t.default=r.exports},322:function(e,t,o){e.exports=o.p+"assets/img/position_fixed.c1403cf0.svg"},324:function(e,t){e.exports="data:image/png;base64,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"},422:function(e,t,o){e.exports=o.p+"assets/img/orbit_MC.c125ea7b.png"},822:function(e,t,o){e.exports=o.p+"assets/img/orbit.6cc5c514.jpg"}}]);