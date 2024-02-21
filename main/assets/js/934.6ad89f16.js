(window.webpackJsonp=window.webpackJsonp||[]).push([[934],{328:function(e,t,i){e.exports=i.p+"assets/img/position_fixed.38e4a675.svg"},3735:function(e,t,i){"use strict";i.r(t);var r=i(19),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"return-mode-vtol"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#return-mode-vtol"}},[e._v("#")]),e._v(" Return Mode (VTOL)")]),e._v(" "),r("img",{attrs:{src:i(328),title:"Position fix required (e.g. GPS)",width:"30px"}}),e._v(" "),r("p",[e._v("The "),r("em",[e._v("Return")]),e._v(" flight mode is used to "),r("em",[e._v("fly a vehicle to safety")]),e._v(" on an unobstructed path to a safe destination, where it may either wait (hover or circle) or land.")]),e._v(" "),r("p",[e._v("VTOL vehicles use the "),r("RouterLink",{attrs:{to:"/zh/flight_modes/return.html#mission-landing-rally-point-return-type-rtl-type-1"}},[e._v("Mission Landing/Rally Point")]),e._v(" return type by default.\nIn this return type a vehicle ascends to a minimum safe altitude above obstructions (if needed), and then flies directly to a rally point or the start of a mission landing point (whichever is nearest), or the home position if neither rally points or mission landing pattern is defined.\nIf the destination is a mission landing pattern, the vehicle will then follow the pattern to land.\nIf the destination is a rally point or the home location, the vehicle will fly back to the home position and land.")],1),e._v(" "),r("p",[e._v("The vehicle will return using the flying mode (MC or FW) it was using at the point when return mode was triggered.\nGenerally it will follow the same return mode behaviour of the corresponding vehicle type, but will always transition to MC mode (if needed) before landing.")]),e._v(" "),r("p",[e._v("VTOL supports the "),r("RouterLink",{attrs:{to:"/zh/flight_modes/return.html#return-types-rtl-type"}},[e._v("other PX4 return types")]),e._v(", including home/rally point return, mission path and closest safe destination.\nThe default type is recommended.")],1),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),r("ul",[r("li",[e._v("Mode is automatic - no user intervention is "),r("em",[e._v("required")]),e._v(" to control the vehicle.")]),e._v(" "),r("li",[e._v("Mode requires a global 3d position estimate (from GPS or inferred from a "),r("RouterLink",{attrs:{to:"/zh/ros/external_position_estimation.html#enabling-auto-modes-with-a-local-position"}},[e._v("local position")]),e._v(").\n"),r("ul",[r("li",[e._v("Flying vehicles can't switch to this mode without global position.")]),e._v(" "),r("li",[e._v("Flying vehicles will failsafe if they lose the position estimate.")])])],1),e._v(" "),r("li",[e._v("Mode requires home position is set.")]),e._v(" "),r("li",[e._v("Mode prevents arming (vehicle must be armed when switching to this mode).")]),e._v(" "),r("li",[e._v("RC control switches can be used to change flight modes on any vehicle.")]),e._v(" "),r("li",[e._v("RC stick movement is ignored.")])])]),e._v(" "),r("h2",{attrs:{id:"technical-summary"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#technical-summary"}},[e._v("#")]),e._v(" Technical Summary")]),e._v(" "),r("p",[e._v("VTOL vehicles use the "),r("RouterLink",{attrs:{to:"/zh/flight_modes/return.html#mission-landing-rally-point-return-type-rtl-type-1"}},[e._v("Mission Landing/Rally Point")]),e._v(" return type by default, and return using the flying mode (MC or FW) it was using at the point when return mode was triggered.")],1),e._v(" "),r("h3",{attrs:{id:"fixed-wing-mode-fw-return"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#fixed-wing-mode-fw-return"}},[e._v("#")]),e._v(" Fixed-wing Mode (FW) Return")]),e._v(" "),r("p",[e._v("If returning as a fixed-wing, the vehicle:")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("Ascends to a safe minimum return altitude defined by "),r("a",{attrs:{href:"#RTL_RETURN_ALT"}},[e._v("RTL_RETURN_ALT")]),e._v(" (safely above any expected obstacles).\nThe vehicle maintains its initial altitude if that is higher than the minimum return altitude.\n")])]),e._v(" "),r("li",[r("p",[e._v("Flies via direct constant-altitude path to the destination, which will be the closest of the start of a "),r("em",[e._v("mission landing pattern")]),e._v(" and any rally point, or the home location if no mission landing pattern or rally points are defined.")])]),e._v(" "),r("li",[r("p",[e._v("If the destination is a mission landing pattern it will follow the pattern to land.")]),e._v(" "),r("p",[e._v("A mission landing pattern for a VTOL vehicle consists of a "),r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_DO_LAND_START",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAV_CMD_DO_LAND_START"),r("OutboundLink")],1),e._v(", one or more position waypoints, and a "),r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_NAV_VTOL_LAND",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAV_CMD_NAV_VTOL_LAND"),r("OutboundLink")],1),e._v(".")])]),e._v(" "),r("li",[r("p",[e._v("If the destination is a rally point or home it will:")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("Loiter/spiral down to "),r("a",{attrs:{href:"#RTL_DESCEND_ALT"}},[e._v("RTL_DESCEND_ALT")]),e._v(".")])]),e._v(" "),r("li",[r("p",[e._v("Circle for a short time, as defined by "),r("a",{attrs:{href:"#RTL_LAND_DELAY"}},[e._v("RTL_LAND_DELAY")]),e._v(".")])]),e._v(" "),r("li",[r("p",[e._v("Yaw towards the destination (centre of loiter).")])]),e._v(" "),r("li",[r("p",[e._v("Transition to MC mode and land.")]),e._v(" "),r("p",[e._v("Note that "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#NAV_FORCE_VT"}},[e._v("NAV_FORCE_VT")]),e._v(" is ignored: the vehicle will always land as a multicopter for these destinations.")],1)])])])]),e._v(" "),r("h2",{attrs:{id:"multicopter-mode-mc-return"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#multicopter-mode-mc-return"}},[e._v("#")]),e._v(" Multicopter Mode (MC) Return")]),e._v(" "),r("p",[e._v("If returning as a multicopter:")]),e._v(" "),r("ul",[r("li",[e._v("The behaviour is the same except that the vehicle flies as a multicopter and respects multicopter settings.")]),e._v(" "),r("li",[e._v("In particular, if landing on rally point or the home position the vehicle uses the "),r("a",{attrs:{href:"#RTL_CONE_ANG"}},[e._v("RTL_CONE_ANG")]),e._v(" instead of just the "),r("a",{attrs:{href:"#RTL_RETURN_ALT"}},[e._v("RTL_RETURN_ALT")]),e._v(' for defining the minimum safe return altitude.\nFor more information see the explanation of the "cone" in '),r("RouterLink",{attrs:{to:"/zh/flight_modes/return.html#minimum-return-altitude"}},[e._v("Return mode (Generic Vehicle) > Minimum Return Altitude")]),e._v(".")],1)]),e._v(" "),r("h2",{attrs:{id:"parameters"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),r("p",[e._v("The RTL parameters are listed in "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#return-mode"}},[e._v("Parameter Reference > Return Mode")]),e._v(".\nIf using a mission landing, only the "),r("a",{attrs:{href:"#RTL_RETURN_ALT"}},[e._v("RTL_RETURN_ALT")]),e._v(" and "),r("a",{attrs:{href:"#RTL_DESCEND_ALT"}},[e._v("RTL_DESCEND_ALT")]),e._v(" are relevant.\nThe others are relevant if the destination is a rally point or the home location.")],1),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Parameter")]),e._v(" "),r("th",[e._v("Description")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[r("a",{attrs:{id:"RTL_TYPE"}}),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#RTL_TYPE"}},[e._v("RTL_TYPE")])],1),e._v(" "),r("td",[e._v("Return type.")])]),e._v(" "),r("tr",[r("td",[r("a",{attrs:{id:"RTL_RETURN_ALT"}}),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#RTL_RETURN_ALT"}},[e._v("RTL_RETURN_ALT")])],1),e._v(" "),r("td",[e._v("Return altitude in meters (default: 60m)If already above this value the vehicle will return at its current altitude.")])]),e._v(" "),r("tr",[r("td",[r("a",{attrs:{id:"RTL_CONE_ANG"}}),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#RTL_CONE_ANG"}},[e._v("RTL_CONE_ANG")])],1),e._v(" "),r("td",[e._v('Half-angle of the cone that defines the vehicle RTL return altitude. Values (in degrees): 0, 25, 45, 65, 80, 90. Note that 0 is "no cone" (always return at '),r("code",[e._v("RTL_RETURN_ALT")]),e._v(" or higher), while 90 indicates that the vehicle must return at the current altitude or "),r("code",[e._v("RTL_DESCEND_ALT")]),e._v(" (whichever is higher).")])]),e._v(" "),r("tr",[r("td",[r("a",{attrs:{id:"RTL_DESCEND_ALT"}}),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#RTL_DESCEND_ALT"}},[e._v("RTL_DESCEND_ALT")])],1),e._v(" "),r("td",[e._v("Minimum return altitude and altitude at which the vehicle will slow or stop its initial descent from a higher return altitude (default: 30m)")])]),e._v(" "),r("tr",[r("td",[r("a",{attrs:{id:"RTL_LAND_DELAY"}}),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#RTL_LAND_DELAY"}},[e._v("RTL_LAND_DELAY")])],1),e._v(" "),r("td",[e._v("Time to hover at "),r("code",[e._v("RTL_DESCEND_ALT")]),e._v(" before landing (default: 0.5s) -by default this period is short so that the vehicle will simply slow and then land immediately. If set to -1 the system will loiter at "),r("code",[e._v("RTL_DESCEND_ALT")]),e._v(" rather than landing. The delay is provided to allow you to configure time for landing gear to be deployed (triggered automatically).")])]),e._v(" "),r("tr",[r("td",[r("a",{attrs:{id:"RTL_LOITER_RAD"}}),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#RTL_LOITER_RAD"}},[e._v("RTL_LOITER_RAD")])],1),e._v(" "),r("td",[e._v("[Fixed-wing Only] The radius of the loiter circle (at "),r("a",{attrs:{href:"#RTL_LAND_DELAY"}},[e._v("RTL_LAND_DELAY")]),e._v(".")])]),e._v(" "),r("tr",[r("td",[r("a",{attrs:{id:"MIS_TKO_LAND_REQ"}}),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MIS_TKO_LAND_REQ"}},[e._v("MIS_TKO_LAND_REQ")])],1),e._v(" "),r("td",[e._v("Specify whether a mission landing or takeoff pattern is "),r("em",[e._v("required")]),e._v(". Generally fixed-wing vehicles set this to require a landing pattern but VTOL do not.")])])])]),e._v(" "),r("h2",{attrs:{id:"see-also"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#see-also"}},[e._v("#")]),e._v(" See Also")]),e._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/zh/flight_modes/return.html"}},[e._v("Return Mode (Generic)")])],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/zh/flight_modes_mc/return.html"}},[e._v("Return Mode (Multicopter)")])],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/zh/flight_modes_fw/return.html"}},[e._v("Return Mode (Fixed-wing)")])],1)])])}),[],!1,null,null,null);t.default=a.exports}}]);