(window.webpackJsonp=window.webpackJsonp||[]).push([[259],{2032:function(t,e,o){"use strict";o.r(e);var a=o(18),i=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"position-mode-multicopter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#position-mode-multicopter"}},[t._v("#")]),t._v(" Position Mode (Multicopter)")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/ko/getting_started/flight_modes.html#key_difficulty"}},[a("img",{attrs:{src:o(324),title:"Easy to fly",width:"30px"}})]),t._v(" "),a("RouterLink",{attrs:{to:"/ko/getting_started/flight_modes.html#key_manual"}},[a("img",{attrs:{src:o(323),title:"Manual/Remote control required",width:"30px"}})]),t._v(" "),a("RouterLink",{attrs:{to:"/ko/getting_started/flight_modes.html#key_position_fixed"}},[a("img",{attrs:{src:o(322),title:"Position fix required (e.g. GPS)",width:"30px"}})])],1),t._v(" "),a("p",[a("em",[t._v("Position")]),t._v(' is an easy-to-fly RC mode in which roll and pitch sticks control speed over ground in the left-right and forward-back directions (relative to the "front" of the vehicle), and throttle controls speed of ascent-descent. When the sticks are released/centered the vehicle will actively brake, level, and be locked to a position in 3D space — compensating for wind and other forces.')]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("Tip")]),t._v(" Position mode is the safest manual mode for new fliers. Unlike "),a("RouterLink",{attrs:{to:"/ko/flight_modes/altitude_mc.html"}},[t._v("Altitude")]),t._v(" and "),a("RouterLink",{attrs:{to:"/ko/flight_modes/manual_stabilized_mc.html"}},[t._v("Manual/Stabilized")]),t._v(" modes the vehicle will stop when the sticks are centered rather than continuing until slowed by wind resistance.")],1)]),t._v(" "),a("p",[t._v("The diagram below shows the mode behaviour visually (for a mode 2 transmitter).")]),t._v(" "),a("p",[a("img",{attrs:{src:o(424),alt:"MC Position Mode"}})]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("Warning")]),t._v(" Care must be taken when landing in this mode. When first landing in this mode, be ready to switch to "),a("RouterLink",{attrs:{to:"/ko/flight_modes/manual_stabilized_mc.html"}},[t._v("Manual/Stabilized")]),t._v(" in order to be able to disarm. If landing is correctly detected, motors will spin down after touch down and then disarm shortly after. If the motors keep spinning at higher RPM or start spinning up, first switch to "),a("RouterLink",{attrs:{to:"/ko/flight_modes/manual_stabilized_mc.html"}},[t._v("Manual/Stabilized (MC)")]),t._v(", and then disarm. Be aware that the vehicle may tip over on the ground due to GPS drift.")],1)]),t._v(" "),a("h2",{attrs:{id:"technical-summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#technical-summary"}},[t._v("#")]),t._v(" Technical Summary")]),t._v(" "),a("p",[t._v("RC/manual mode where RPT sticks control "),a("em",[t._v("speed")]),t._v(" in corresponding directions. Centered sticks level vehicle and hold it to fixed position and altitude against wind.")]),t._v(" "),a("ul",[a("li",[t._v("Centered RPT sticks (in RC deadzone) hold x, y, z position steady against any wind and levels attitude.")]),t._v(" "),a("li",[t._v("Outside center:\n"),a("ul",[a("li",[t._v('Roll/Pitch sticks control speed over ground in left-right and forward-back directions (respectively) relative to the "front" of the vehicle.')]),t._v(" "),a("li",[t._v("Throttle stick controls speed of ascent-descent.")]),t._v(" "),a("li",[t._v("Yaw stick controls rate of angular rotation above the horizontal plane.")])])]),t._v(" "),a("li",[t._v("Takeoff:\n"),a("ul",[a("li",[t._v("When landed, the vehicle will take off if the throttle stick is raised above 62.5% percent (of the full range from bottom).")])])]),t._v(" "),a("li",[t._v("Landing:\n"),a("ul",[a("li",[t._v("When close to the ground ("),a("a",{attrs:{href:"#MPC_LAND_ALT2"}},[t._v("MPC_LAND_ALT2")]),t._v("), horizontal velocity is limited ("),a("a",{attrs:{href:"#MPC_LAND_VEL_XY"}},[t._v("MPC_LAND_VEL_XY")]),t._v(").")])])])]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("Note")]),t._v(" * Manual input is required (RC controller, or gamepad/thumbsticks through MAVLink). * This mode requires GPS.")])]),t._v(" "),a("h3",{attrs:{id:"parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),a("p",[t._v("All the parameters in the "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#multicopter-position-control"}},[t._v("Multicopter Position Control")]),t._v(" group are relevant. A few parameters of particular note are listed below.")],1),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Parameter")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("span",{attrs:{id:"MPC_HOLD_DZ"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_HOLD_DZ"}},[t._v("MPC_HOLD_DZ")])],1),t._v(" "),a("td",[t._v("위치 유지가 활성화 된 스틱의 Deadzone입니다. 기본값 : 0.1 (전체 스틱 범위의 10 %).")])]),t._v(" "),a("tr",[a("td",[a("span",{attrs:{id:"MPC_Z_VEL_MAX_UP"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_Z_VEL_MAX_UP"}},[t._v("MPC_Z_VEL_MAX_UP")])],1),t._v(" "),a("td",[t._v("Maximum vertical ascent velocity. Default: 3 m/s.")])]),t._v(" "),a("tr",[a("td",[a("span",{attrs:{id:"MPC_Z_VEL_MAX_DN"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_Z_VEL_MAX_DN"}},[t._v("MPC_Z_VEL_MAX_DN")])],1),t._v(" "),a("td",[t._v("Maximum vertical descent velocity. Default: 1 m/s.")])]),t._v(" "),a("tr",[a("td",[a("span",{attrs:{id:"MPC_LAND_VEL_XY"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_LAND_VEL_XY"}},[t._v("MPC_LAND_VEL_XY")])],1),t._v(" "),a("td",[t._v("Horizontal velocity limit when close to ground ("),a("a",{attrs:{href:"#MPC_LAND_ALT2"}},[t._v("MPC_LAND_ALT2")]),t._v(" meters above ground, or above home if distance-to-ground is unknown). Default: 10 m/s.")])]),t._v(" "),a("tr",[a("td",[a("span",{attrs:{id:"MPC_LAND_ALT1"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_LAND_ALT1"}},[t._v("MPC_LAND_ALT1")])],1),t._v(" "),a("td",[t._v("Altitude for triggering first phase of slow landing. Affects maximum allowed horizontal velocity setpoint. Default 5m.")])]),t._v(" "),a("tr",[a("td",[a("span",{attrs:{id:"MPC_LAND_ALT2"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_LAND_ALT2"}},[t._v("MPC_LAND_ALT2")])],1),t._v(" "),a("td",[t._v("Altitude for second phase of slow landing. In this phase maximum horizontal velocity is limited to "),a("a",{attrs:{href:"#MPC_LAND_VEL_XY"}},[t._v("MPC_LAND_VEL_XY")]),t._v(". Default 5m.")])]),t._v(" "),a("tr",[a("td",[a("span",{attrs:{id:"RCX_DZ"}}),a("code",[t._v("RCX_DZ")])]),t._v(" "),a("td",[t._v("RC dead zone for channel X. The value of X for throttle will depend on the value of "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RC_MAP_THROTTLE"}},[t._v("RC_MAP_THROTTLE")]),t._v(". For example, if the throttle is channel 4 then "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RC4_DZ"}},[t._v("RC4_DZ")]),t._v(" specifies the deadzone.")],1)]),t._v(" "),a("tr",[a("td",[a("span",{attrs:{id:"MPC_xxx"}}),a("code",[t._v("MPC_XXXX")])]),t._v(" "),a("td",[t._v("Most of the MPC_xxx parameters affect flight behaviour in this mode (at least to some extent). For example, "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_THR_HOVER"}},[t._v("MPC_THR_HOVER")]),t._v(" defines the thrust at which a vehicle will hover.")],1)])])])])}),[],!1,null,null,null);e.default=i.exports},322:function(t,e,o){t.exports=o.p+"assets/img/position_fixed.c1403cf0.svg"},323:function(t,e,o){t.exports=o.p+"assets/img/remote_control.e49232a6.svg"},324:function(t,e){t.exports="data:image/png;base64,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"},424:function(t,e,o){t.exports=o.p+"assets/img/position_MC.040ed1a1.png"}}]);