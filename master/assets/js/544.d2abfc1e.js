(window.webpackJsonp=window.webpackJsonp||[]).push([[544],{1589:function(e,t,a){"use strict";a.r(t);var _=a(19),r=Object(_.a)({},(function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h1",{attrs:{id:"jerk-limited-type-trajectory-for-multicopters"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#jerk-limited-type-trajectory-for-multicopters"}},[e._v("#")]),e._v(" Jerk-limited Type Trajectory for Multicopters")]),e._v(" "),_("p",[e._v("The Jerk-limited trajectory type provides smooth motion in response to user stick input or mission changes (e.g.: for filming, mapping, cargo).\nIt generates symmetric smooth S-curves where the jerk and acceleration limits are always guaranteed.")]),e._v(" "),_("p",[e._v("This trajectory type is always enabled in "),_("RouterLink",{attrs:{to:"/en/flight_modes/mission.html"}},[e._v("Mission mode")]),e._v(".\nTo enable it in "),_("RouterLink",{attrs:{to:"/en/flight_modes/position_mc.html"}},[e._v("Position mode")]),e._v(" set the parameter: "),_("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MPC_POS_MODE"}},[e._v("MPC_POS_MODE=3")]),e._v(".")],1),e._v(" "),_("div",{staticClass:"custom-block note"},[_("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),_("p",[e._v("The jerk-limited type is used "),_("em",[e._v("by default")]),e._v(" in position mode.\nIt may not be suitable for vehicles/use-cases that require a faster response - e.g. racer quads.")])]),e._v(" "),_("h2",{attrs:{id:"trajectory-generator"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#trajectory-generator"}},[e._v("#")]),e._v(" Trajectory Generator")]),e._v(" "),_("p",[e._v("The graph below shows a typical jerk-limited profile with the following constraints:")]),e._v(" "),_("ul",[_("li",[_("code",[e._v("jMax")]),e._v(": maximum jerk")]),e._v(" "),_("li",[_("code",[e._v("a0")]),e._v(": initial acceleration")]),e._v(" "),_("li",[_("code",[e._v("aMax")]),e._v(": maximum acceleration")]),e._v(" "),_("li",[_("code",[e._v("a3")]),e._v(": final acceleration (always 0)")]),e._v(" "),_("li",[_("code",[e._v("v0")]),e._v(": initial velocity")]),e._v(" "),_("li",[_("code",[e._v("vRef")]),e._v(": desired velocity")])]),e._v(" "),_("p",[e._v("The constraints "),_("code",[e._v("jMax")]),e._v(", "),_("code",[e._v("aMax")]),e._v(" are configurable by the user via parameters and can be different in manual position control and auto mode.")]),e._v(" "),_("p",[e._v('The resulting velocity profile is often called "S-Curve".')]),e._v(" "),_("p",[_("img",{attrs:{src:a(663),alt:"Jerk-limited trajectory"}})]),e._v(" "),_("h2",{attrs:{id:"manual-mode"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#manual-mode"}},[e._v("#")]),e._v(" Manual Mode")]),e._v(" "),_("p",[e._v("In manual position mode, the sticks are mapped to velocity where a full stick deflection corresponds to "),_("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MPC_VEL_MANUAL"}},[e._v("MPC_VEL_MANUAL")]),e._v(".")],1),e._v(" "),_("h3",{attrs:{id:"constraints"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#constraints"}},[e._v("#")]),e._v(" Constraints")]),e._v(" "),_("p",[e._v("XY-plane:")]),e._v(" "),_("ul",[_("li",[_("code",[e._v("jMax")]),e._v(": "),_("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MPC_JERK_MAX"}},[e._v("MPC_JERK_MAX")])],1),e._v(" "),_("li",[_("code",[e._v("aMax")]),e._v(": "),_("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MPC_ACC_HOR_MAX"}},[e._v("MPC_ACC_HOR_MAX")])],1)]),e._v(" "),_("p",[e._v("Z-axis:")]),e._v(" "),_("ul",[_("li",[_("code",[e._v("jMax")]),e._v(": "),_("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MPC_JERK_MAX"}},[e._v("MPC_JERK_MAX")])],1),e._v(" "),_("li",[_("code",[e._v("aMax")]),e._v(" (upward motion): "),_("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MPC_ACC_UP_MAX"}},[e._v("MPC_ACC_UP_MAX")])],1),e._v(" "),_("li",[_("code",[e._v("aMax")]),e._v(" (downward motion): "),_("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MPC_ACC_DOWN_MAX"}},[e._v("MPC_ACC_DOWN_MAX")])],1)]),e._v(" "),_("h2",{attrs:{id:"auto-mode"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#auto-mode"}},[e._v("#")]),e._v(" Auto Mode")]),e._v(" "),_("p",[e._v("In auto mode, the desired velocity is "),_("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MPC_XY_CRUISE"}},[e._v("MPC_XY_CRUISE")]),e._v(" but this value is automatically adjusted depending on the distance to the next waypoint, the maximum possible velocity in the waypoint and the maximum desired acceleration and jerk.")],1),e._v(" "),_("h3",{attrs:{id:"constraints-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#constraints-2"}},[e._v("#")]),e._v(" Constraints")]),e._v(" "),_("p",[e._v("XY-plane:")]),e._v(" "),_("ul",[_("li",[_("code",[e._v("jMax")]),e._v(": "),_("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MPC_JERK_AUTO"}},[e._v("MPC_JERK_AUTO")])],1),e._v(" "),_("li",[_("code",[e._v("aMax")]),e._v(": "),_("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MPC_ACC_HOR"}},[e._v("MPC_ACC_HOR")])],1)]),e._v(" "),_("p",[e._v("Z-axis:")]),e._v(" "),_("ul",[_("li",[_("code",[e._v("jMax")]),e._v(": "),_("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MPC_JERK_AUTO"}},[e._v("MPC_JERK_AUTO")])],1),e._v(" "),_("li",[_("code",[e._v("aMax")]),e._v(" (upward motion): "),_("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MPC_ACC_UP_MAX"}},[e._v("MPC_ACC_UP_MAX")])],1),e._v(" "),_("li",[_("code",[e._v("aMax")]),e._v(" (downward motion): "),_("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MPC_ACC_DOWN_MAX"}},[e._v("MPC_ACC_DOWN_MAX")])],1)]),e._v(" "),_("p",[e._v("Distance to velocity gains when close to a waypoint:")]),e._v(" "),_("ul",[_("li",[_("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MPC_XY_TRAJ_P"}},[e._v("MPC_XY_TRAJ_P")])],1)]),e._v(" "),_("h3",{attrs:{id:"related-parameters"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#related-parameters"}},[e._v("#")]),e._v(" Related Parameters")]),e._v(" "),_("ul",[_("li",[_("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MPC_XY_VEL_MAX"}},[e._v("MPC_XY_VEL_MAX")])],1),e._v(" "),_("li",[_("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MPC_Z_VEL_MAX_UP"}},[e._v("MPC_Z_VEL_MAX_UP")])],1),e._v(" "),_("li",[_("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MPC_Z_VEL_MAX_DN"}},[e._v("MPC_Z_VEL_MAX_DN")])],1),e._v(" "),_("li",[_("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MPC_TKO_SPEED"}},[e._v("MPC_TKO_SPEED")])],1),e._v(" "),_("li",[_("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MPC_LAND_SPEED"}},[e._v("MPC_LAND_SPEED")])],1),e._v(" "),_("li",[_("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MPC_LAND_ALT1"}},[e._v("MPC_LAND_ALT1")])],1),e._v(" "),_("li",[_("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MPC_LAND_ALT2"}},[e._v("MPC_LAND_ALT2")])],1)])])}),[],!1,null,null,null);t.default=r.exports},663:function(e,t,a){e.exports=a.p+"assets/img/jerk_limited_trajectory_1d.c678e2f8.png"}}]);