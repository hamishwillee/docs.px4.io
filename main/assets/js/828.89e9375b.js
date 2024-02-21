(window.webpackJsonp=window.webpackJsonp||[]).push([[828],{2934:function(e,t,i){"use strict";i.r(t);var a=i(19),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"return-mode-fixed-wing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#return-mode-fixed-wing"}},[e._v("#")]),e._v(" Return Mode (Fixed-wing)")]),e._v(" "),a("img",{attrs:{src:i(328),title:"Position fix required (e.g. GPS)",width:"30px"}}),e._v(" "),a("p",[e._v("The "),a("em",[e._v("Return")]),e._v(" flight mode is used to "),a("em",[e._v("fly a vehicle to safety")]),e._v(" on an unobstructed path to a safe destination, where it can land.")]),e._v(" "),a("p",[e._v("Fixed-wing vehicles use the "),a("RouterLink",{attrs:{to:"/ko/flight_modes/return.html#mission-landing-rally-point-return-type-rtl-type-1"}},[e._v("Mission Landing/Rally Point")]),e._v(" return type by default, and are expected to always have a mission with a landing pattern.\nWith this configuration, return mode causes the vehicle to ascend to a minimum safe altitude above obstructions (if needed), fly to the start of the landing pattern defined in the mission plan, and then follow it to land.")],1),e._v(" "),a("p",[e._v("Fixed-wing supports the "),a("RouterLink",{attrs:{to:"/ko/flight_modes/return.html#return-types-rtl-type"}},[e._v("other PX4 return types")]),e._v(", including home/rally point return, mission path and closest safe destination.\nThe default type is recommended.")],1),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("ul",[a("li",[e._v("Mode is automatic - no user intervention is "),a("em",[e._v("required")]),e._v(" to control the vehicle.")]),e._v(" "),a("li",[e._v("Mode requires a global 3d position estimate (from GPS or inferred from a "),a("RouterLink",{attrs:{to:"/ko/ros/external_position_estimation.html#enabling-auto-modes-with-a-local-position"}},[e._v("local position")]),e._v(").\n"),a("ul",[a("li",[e._v("Flying vehicles can't switch to this mode without global position.")]),e._v(" "),a("li",[e._v("Flying vehicles will failsafe if they lose the position estimate.")])])],1),e._v(" "),a("li",[e._v("Mode requires home position is set.")]),e._v(" "),a("li",[e._v("Mode prevents arming (vehicle must be armed when switching to this mode).")]),e._v(" "),a("li",[e._v("RC control switches can be used to change flight modes on any vehicle.")]),e._v(" "),a("li",[e._v("RC stick movement is ignored.")])])]),e._v(" "),a("h2",{attrs:{id:"technical-summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#technical-summary"}},[e._v("#")]),e._v(" Technical Summary")]),e._v(" "),a("p",[e._v("Fixed-wing vehicles use the "),a("em",[e._v("mission landing/rally point")]),e._v(" return type by default.\nIn this return type the vehicle:")]),e._v(" "),a("ul",[a("li",[e._v("Ascends to a safe minimum return altitude defined by "),a("a",{attrs:{href:"#RTL_RETURN_ALT"}},[e._v("RTL_RETURN_ALT")]),e._v(' (safely above any expected obstacles).\nThe vehicle maintains its initial altitude if that is higher than the minimum return altitude.\nNote that return altitude cannot be configured using the "cone" parameter in fixed-wing vehicles.')]),e._v(" "),a("li",[e._v("Flies via direct constant-altitude path to the destination, which will be the closest of the start of a "),a("em",[e._v("mission landing pattern")]),e._v(" and any rally point, or the home location if no mission landing pattern or rally points are defined.")]),e._v(" "),a("li",[e._v("If the destination is a "),a("em",[e._v("mission landing pattern")]),e._v(" it will follow the pattern to land.")]),e._v(" "),a("li",[e._v("If the destination is a rally point or home it will descend to the descent altitude, and then loiter or land (depending on landing parameters).")])]),e._v(" "),a("p",[e._v("A fixed-wing vehicle is expected to use a landing pattern defined in a mission as the return destination, as this is the safest way to land automatically.\nThis requirement is usually enforced by the "),a("a",{attrs:{href:"#MIS_TKO_LAND_REQ"}},[e._v("MIS_TKO_LAND_REQ")]),e._v(" parameter.")]),e._v(" "),a("p",[e._v("A mission landing pattern consists of a "),a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_DO_LAND_START",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAV_CMD_DO_LAND_START"),a("OutboundLink")],1),e._v(", one or more position waypoints, and a "),a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_NAV_LAND",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAV_CMD_NAV_LAND"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("When the destination is a rally point or the home location, on arrival the vehicle will rapidly descend to the altitude defined by "),a("a",{attrs:{href:"#RTL_DESCEND_ALT"}},[e._v("RTL_DESCEND_ALT")]),e._v(", and by default circle above the destination indefinitely at radius "),a("a",{attrs:{href:"#RTL_LOITER_RAD"}},[e._v("RTL_LOITER_RAD")]),e._v(".\nThe vehicle can be forced to land at the destination by changing "),a("a",{attrs:{href:"#RTL_LAND_DELAY"}},[e._v("RTL_LAND_DELAY")]),e._v(" so it is not -1.\nIn this case the vehicle will land in the same way as "),a("RouterLink",{attrs:{to:"/ko/flight_modes_fw/land.html"}},[e._v("Land mode")]),e._v(".")],1),e._v(" "),a("h2",{attrs:{id:"parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),a("p",[e._v("The RTL parameters are listed in "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#return-mode"}},[e._v("Parameter Reference > Return Mode")]),e._v(".\nIf using a mission landing, only the "),a("a",{attrs:{href:"#RTL_RETURN_ALT"}},[e._v("RTL_RETURN_ALT")]),e._v(" and "),a("a",{attrs:{href:"#RTL_DESCEND_ALT"}},[e._v("RTL_DESCEND_ALT")]),e._v(" are relevant.\nThe others are relevant if the destination is a rally point or the home location.")],1),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Parameter")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("a",{attrs:{id:"RTL_TYPE"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RTL_TYPE"}},[e._v("RTL_TYPE")])],1),e._v(" "),a("td",[e._v("Return type.")])]),e._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"RTL_RETURN_ALT"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RTL_RETURN_ALT"}},[e._v("RTL_RETURN_ALT")])],1),e._v(" "),a("td",[e._v("Return altitude in meters (default: 60m)If already above this value the vehicle will return at its current altitude.")])]),e._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"RTL_DESCEND_ALT"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RTL_DESCEND_ALT"}},[e._v("RTL_DESCEND_ALT")])],1),e._v(" "),a("td",[e._v("Minimum return altitude and altitude at which the vehicle will slow or stop its initial descent from a higher return altitude (default: 30m)")])]),e._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"RTL_LAND_DELAY"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RTL_LAND_DELAY"}},[e._v("RTL_LAND_DELAY")])],1),e._v(" "),a("td",[e._v("Time to hover at "),a("code",[e._v("RTL_DESCEND_ALT")]),e._v(" before landing (default: 0.5s) -by default this period is short so that the vehicle will simply slow and then land immediately. If set to -1 the system will loiter at "),a("code",[e._v("RTL_DESCEND_ALT")]),e._v(" rather than landing. The delay is provided to allow you to configure time for landing gear to be deployed (triggered automatically).")])]),e._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"RTL_LOITER_RAD"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RTL_LOITER_RAD"}},[e._v("RTL_LOITER_RAD")])],1),e._v(" "),a("td",[e._v("[Fixed-wing Only] The radius of the loiter circle (at "),a("a",{attrs:{href:"#RTL_LAND_DELAY"}},[e._v("RTL_LAND_DELAY")]),e._v(").")])]),e._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"MIS_TKO_LAND_REQ"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MIS_TKO_LAND_REQ"}},[e._v("MIS_TKO_LAND_REQ")])],1),e._v(" "),a("td",[e._v("Specify whether a mission landing or takeoff pattern is required. Fixed wings generally require this.")])])])]),e._v(" "),a("h2",{attrs:{id:"see-also"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#see-also"}},[e._v("#")]),e._v(" See Also")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/ko/flight_modes/return.html"}},[e._v("Return Mode (Generic)")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/flight_modes_mc/return.html"}},[e._v("Return Mode (Multicopter)")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/flight_modes_vtol/return.html"}},[e._v("Return Mode (VTOL)")])],1)])])}),[],!1,null,null,null);t.default=n.exports},328:function(e,t,i){e.exports=i.p+"assets/img/position_fixed.38e4a675.svg"}}]);