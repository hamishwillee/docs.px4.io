(window.webpackJsonp=window.webpackJsonp||[]).push([[417],{2033:function(e,t,i){"use strict";i.r(t);var a=i(18),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"return-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#return-mode"}},[e._v("#")]),e._v(" Return Mode")]),e._v(" "),a("p",[a("RouterLink",{attrs:{to:"/ko/getting_started/flight_modes.html#key_position_fixed"}},[a("img",{attrs:{src:i(322),title:"Position fix required (e.g. GPS)",width:"30px"}})])],1),e._v(" "),a("p",[e._v("The "),a("em",[e._v("Return")]),e._v(" flight mode is used to "),a("em",[e._v("fly a vehicle to safety")]),e._v(" on an unobstructed path to a safe destination, where it may either wait (hover or circle) or land.")]),e._v(" "),a("p",[e._v('PX4 provides several mechanisms for choosing a safe return path, destination and landing, including using home location, rally ("safe") points, mission paths, and mission landing sequences.')]),e._v(" "),a("p",[e._v("The following sections explain how to configure the "),a("a",{attrs:{href:"#return_types"}},[e._v("return type")]),e._v(", "),a("a",{attrs:{href:"#return_altitude"}},[e._v("return altitude")]),e._v(" and "),a("a",{attrs:{href:"#arrival"}},[e._v("landing/arrival behaviour")]),e._v(". At the end there are sections explaining the "),a("em",[e._v("default")]),e._v(" (preconfigured) behaviour for each "),a("a",{attrs:{href:"#default_configuration"}},[e._v("vehicle type")]),e._v(".")]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Note")]),e._v(" * This mode requires GPS. * This mode is automatic - no user intervention is "),a("em",[e._v("required")]),e._v(" to control the vehicle. * RC control switches can be used to change flight modes on any vehicle. * RC stick movement in a multicopter (or VTOL in multicopter mode) will "),a("a",{attrs:{href:"#COM_RC_OVERRIDE"}},[e._v("by default")]),e._v(" change the vehicle to "),a("RouterLink",{attrs:{to:"/ko/flight_modes/position_mc.html"}},[e._v("Position mode")]),e._v(" unless handling a critical battery failsafe.")],1)]),e._v(" "),a("p",[a("span",{attrs:{id:"return_types"}})]),e._v(" "),a("h2",{attrs:{id:"return-types-rtl-type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#return-types-rtl-type"}},[e._v("#")]),e._v(" Return Types (RTL_TYPE)")]),e._v(" "),a("p",[e._v("PX4 provides four alternative approaches ("),a("a",{attrs:{href:"#RTL_TYPE"}},[e._v("RTL_TYPE")]),e._v(") for finding an unobstructed path to a safe destination and/or landing:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#home_return"}},[e._v("Home/rally point return")]),e._v(" ("),a("code",[e._v("RTL_TYPE=0")]),e._v("): Ascend to safe altitude and return via a direct path to the closest rally point or home location.")]),e._v(" "),a("li",[a("a",{attrs:{href:"#mission_landing_return"}},[e._v("Mission landing/rally point return")]),e._v(" ("),a("code",[e._v("RTL_TYPE=1")]),e._v("): Ascend to a safe altitude, fly direct to the closest destination "),a("em",[e._v("other than home")]),e._v(": rally point or start of mission landing. If no mission landing or rally points are defined, return home via direct path.")]),e._v(" "),a("li",[a("a",{attrs:{href:"#mission_path_return"}},[e._v("Mission path return")]),e._v(" ("),a("code",[e._v("RTL_TYPE=2")]),e._v("): Use mission path and fast-continue to mission landing (if defined). If no mission landing defined, fast-reverse mission to home. If no mission defined, return direct to home (rally points are ignored).")]),e._v(" "),a("li",[a("a",{attrs:{href:"#safety_point_return"}},[e._v("Closest safe destination return")]),e._v(" ("),a("code",[e._v("RTL_TYPE=3")]),e._v("): Ascend to a safe altitude and return via direct path to closest destination: home, start of mission landing pattern, or rally point. If the destination is a mission landing pattern, follow the pattern to land.")])]),e._v(" "),a("p",[e._v("More detailed explanations for each of the types are provided in the following sections.")]),e._v(" "),a("p",[a("span",{attrs:{id:"home_return"}})]),e._v(" "),a("h3",{attrs:{id:"home-rally-point-return-type-rtl-type-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#home-rally-point-return-type-rtl-type-0"}},[e._v("#")]),e._v(" Home/Rally Point Return Type (RTL_TYPE=0)")]),e._v(" "),a("p",[e._v("In this return type the vehicle:")]),e._v(" "),a("ul",[a("li",[e._v("Ascends to a safe "),a("a",{attrs:{href:"#return_altitude"}},[e._v("return altitude")]),e._v(" (above any expected obstacles).")]),e._v(" "),a("li",[e._v("Flies via direct path to the home position or a rally point (whichever is closest)")]),e._v(" "),a("li",[a("a",{attrs:{href:"#arrival"}},[e._v("Land or waits")]),e._v(" at descent altitude (depending on landing parameters).")])]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Note")]),e._v(" If no rally points are defined, this is the same as a "),a("em",[e._v("Return to Launch")]),e._v(" (RTL)/"),a("em",[e._v("Return to Home")]),e._v(" (RTH).")])]),e._v(" "),a("p",[a("span",{attrs:{id:"mission_landing_return"}})]),e._v(" "),a("h3",{attrs:{id:"mission-landing-rally-point-return-type-rtl-type-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mission-landing-rally-point-return-type-rtl-type-1"}},[e._v("#")]),e._v(" Mission Landing/Rally Point Return Type (RTL_TYPE=1)")]),e._v(" "),a("p",[e._v("In this return type the vehicle:")]),e._v(" "),a("ul",[a("li",[e._v("Ascends to a safe "),a("a",{attrs:{href:"#return_altitude"}},[e._v("return altitude")]),e._v(" (above any expected obstacles).")]),e._v(" "),a("li",[e._v("Flies via direct path to a rally point or the start of a "),a("a",{attrs:{href:"#mission_landing_pattern"}},[e._v("mission landing pattern")]),e._v(" (whichever is closest). If no mission landing or rally points are defined the vehicle instead returns home via a direct path.")]),e._v(" "),a("li",[e._v("If the destination is a mission landing pattern it will follow the pattern to land.")]),e._v(" "),a("li",[e._v("If the destination is a rally point or home it will "),a("a",{attrs:{href:"#arrival"}},[e._v("land or wait")]),e._v(" at descent altitude (depending on landing parameters).")])]),e._v(" "),a("p",[a("span",{attrs:{id:"mission_landing_pattern"}})]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Note")]),e._v(" A mission landing pattern consists of a "),a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_DO_LAND_START",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAV_CMD_DO_LAND_START"),a("OutboundLink")],1),e._v(", one or more position waypoints, and a "),a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_NAV_LAND",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAV_CMD_NAV_LAND"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("p",[a("span")]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Warning")]),e._v(" When this type is set PX4 will reject any mission without a valid landing pattern.")])]),e._v(" "),a("p",[a("span",{attrs:{id:"mission_path_return"}})]),e._v(" "),a("h3",{attrs:{id:"mission-path-return-type-rtl-type-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mission-path-return-type-rtl-type-2"}},[e._v("#")]),e._v(" Mission Path Return Type (RTL_TYPE=2)")]),e._v(" "),a("p",[e._v("This return type uses the mission (if defined) to provide a safe return "),a("em",[e._v("path")]),e._v(", and the mission landing pattern (if defined) to provide landing behaviour. If there is a mission but no mission landing pattern, the mission is flown "),a("em",[e._v("in reverse")]),e._v(". Rally points, if any, are ignored.")]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Note")]),e._v(" The behaviour is fairly complex because it depends on the flight mode, and whether a mission and mission landing are defined.")])]),e._v(" "),a("p",[e._v("Mission "),a("em",[e._v("with")]),e._v(" landing pattern:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Mission mode:")]),e._v(' Mission is continued in "fast-forward mode" (jumps, delay and any other non-position commands ignored, loiter and other position waypoints converted to simple waypoints) and then lands.')]),e._v(" "),a("li",[a("strong",[e._v("Auto mode other than mission mode:")]),e._v(" "),a("ul",[a("li",[e._v("Ascend to a safe "),a("a",{attrs:{href:"#return_altitude"}},[e._v("return altitude")]),e._v(" above any expected obstacles.")]),e._v(" "),a("li",[e._v("Fly directly to closest waypoint (for FW not a landing WP) and descend to waypoint altitude.")]),e._v(" "),a("li",[e._v("Continue mission in fast forward mode from that waypoint.")])])]),e._v(" "),a("li",[a("strong",[e._v("Manual modes:")]),e._v(" "),a("ul",[a("li",[e._v("Ascend to a safe "),a("a",{attrs:{href:"#return_altitude"}},[e._v("return altitude")]),e._v(" above any expected obstacles.")]),e._v(" "),a("li",[e._v("Fly directly to landing sequence position and descend to waypoint altitude")]),e._v(" "),a("li",[e._v("Land using mission landing pattern")])])])]),e._v(" "),a("p",[e._v("Mission "),a("em",[e._v("without")]),e._v(" landing pattern defined:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Mission mode:")]),e._v(" "),a("ul",[a("li",[e._v('Mission flown "fast-backward" (in reverse) starting from the previous waypoint\n'),a("ul",[a("li",[e._v("Jumps, delay and any other non-position commands ignored, loiter and other position waypoints converted to simple waypoints.")]),e._v(" "),a("li",[e._v("VTOL vehicles transition to FW mode (if needed) before flying the mission in reverse.")])])]),e._v(" "),a("li",[e._v("On reaching waypoint 1, the vehicle ascends to the "),a("a",{attrs:{href:"#return_altitude"}},[e._v("return altitude")]),e._v(" and flies to the home position (where it "),a("a",{attrs:{href:"#arrival"}},[e._v("lands or waits")]),e._v(").")])])]),e._v(" "),a("li",[a("strong",[e._v("Auto mode other than mission mode:")]),e._v(" "),a("ul",[a("li",[e._v("Fly directly to closest waypoint (for FW not a landing WP) and descend to waypoint altitude.")]),e._v(" "),a("li",[e._v("Continue the mission in reverse, exactly as though Return mode was triggered in mission mode (above)")])])]),e._v(" "),a("li",[a("strong",[e._v("Manual modes:")]),e._v(" Fly directly to home location and land.")])]),e._v(" "),a("p",[e._v("If no mission is defined PX4 will fly directly to home location and land (rally points are ignored).")]),e._v(" "),a("p",[e._v("If the mission changes during return mode, then the behaviour is re-evaluated based on the new mission following the same rules as above (e.g. if the new mission has no landing sequence and you're in a mission, the mission is reversed).")]),e._v(" "),a("p",[a("span",{attrs:{id:"safety_point_return"}})]),e._v(" "),a("h3",{attrs:{id:"closest-safe-destination-return-type-rtl-type-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#closest-safe-destination-return-type-rtl-type-3"}},[e._v("#")]),e._v(" Closest Safe Destination Return Type (RTL_TYPE=3)")]),e._v(" "),a("p",[e._v("In this return type the vehicle:")]),e._v(" "),a("ul",[a("li",[e._v("Ascends to a safe "),a("a",{attrs:{href:"#return_altitude"}},[e._v("return altitude")]),e._v(" (above any expected obstacles).")]),e._v(" "),a("li",[e._v("Flies a direct path to the closest destination of: home location, mission landing pattern or rally point.")]),e._v(" "),a("li",[e._v("If the destination is a mission landing pattern the vehicle will follow the pattern to land")]),e._v(" "),a("li",[e._v("If the destination is a home location or rally point, the vehicle will descend to the descent altitude ("),a("a",{attrs:{href:"#RTL_DESCEND_ALT"}},[e._v("RTL_DESCEND_ALT")]),e._v(") and then "),a("a",{attrs:{href:"#arrival"}},[e._v("Land or waits")]),e._v(".")])]),e._v(" "),a("p",[a("span",{attrs:{id:"return_altitude"}})]),e._v(" "),a("h2",{attrs:{id:"return-altitude"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#return-altitude"}},[e._v("#")]),e._v(" Return Altitude")]),e._v(" "),a("p",[e._v("A vehicle will usually first ascend to a safe altitude before returning, in order to avoid any obstacles between it and the destination.")]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Note")]),e._v(" This is true for most "),a("a",{attrs:{href:"#return_types"}},[e._v("return types")]),e._v(". The exception is when executing a "),a("a",{attrs:{href:"#mission_path_return"}},[e._v("mission path return")]),e._v(" from within a mission, where the vehicle follows mission waypoints (we can assume these avoid any obstacles).")])]),e._v(" "),a("p",[e._v("The return altitude for a fixed-wing vehicle is configured using the parameter "),a("a",{attrs:{href:"#RTL_RETURN_ALT"}},[e._v("RTL_RETURN_ALT")]),e._v(". The return altitude for multicopter and VTOL vehicles is configured using the parameters "),a("a",{attrs:{href:"#RTL_RETURN_ALT"}},[e._v("RTL_RETURN_ALT")]),e._v(" and "),a("a",{attrs:{href:"#RTL_CONE_ANG"}},[e._v("RTL_CONE_ANG")]),e._v(", which define a half cone centered around the destination (home location or safety point).")]),e._v(" "),a("p",[a("img",{attrs:{src:i(819),alt:"Return mode cone"}})]),e._v(" "),a("p",[e._v("If the vehicle is:")]),e._v(" "),a("ul",[a("li",[e._v("Above "),a("a",{attrs:{href:"#RTL_RETURN_ALT"}},[e._v("RTL_RETURN_ALT")]),e._v(" (1) it will return at its current altitude.")]),e._v(" "),a("li",[e._v("Below the cone it will return where it intersects the cone (2) or "),a("a",{attrs:{href:"#RTL_DESCEND_ALT"}},[e._v("RTL_DESCEND_ALT")]),e._v(" (whichever is higher).")]),e._v(" "),a("li",[e._v("Outside the cone (3) it will first climb until it reaches "),a("a",{attrs:{href:"#RTL_RETURN_ALT"}},[e._v("RTL_RETURN_ALT")]),e._v(".")]),e._v(" "),a("li",[e._v("Inside the cone:\n"),a("ul",[a("li",[e._v("Above "),a("a",{attrs:{href:"#RTL_DESCEND_ALT"}},[e._v("RTL_DESCEND_ALT")]),e._v(" (4) it will return at its current altitude.")]),e._v(" "),a("li",[e._v("Below "),a("a",{attrs:{href:"#RTL_DESCEND_ALT"}},[e._v("RTL_DESCEND_ALT")]),e._v(" (5) it will first ascend to "),a("code",[e._v("RTL_DESCEND_ALT")]),e._v(".")])])])]),e._v(" "),a("p",[e._v("Note:")]),e._v(" "),a("ul",[a("li",[e._v("If "),a("a",{attrs:{href:"#RTL_CONE_ANG"}},[e._v("RTL_CONE_ANG")]),e._v(' is 0 degrees there is no "cone":\n'),a("ul",[a("li",[e._v("the vehicle returns at "),a("code",[e._v("RTL_RETURN_ALT")]),e._v(" (or above).")])])]),e._v(" "),a("li",[e._v("If "),a("a",{attrs:{href:"#RTL_CONE_ANG"}},[e._v("RTL_CONE_ANG")]),e._v(" is 90 degrees the vehicle will return at the greater of "),a("code",[e._v("RTL_DESCEND_ALT")]),e._v(" and the current altitude.")]),e._v(" "),a("li",[e._v("The vehicle will always ascend at least "),a("a",{attrs:{href:"#RTL_DESCEND_ALT"}},[e._v("RTL_DESCEND_ALT")]),e._v(" for the return.")])]),e._v(" "),a("p",[a("span",{attrs:{id:"arrival"}})]),e._v(" "),a("h2",{attrs:{id:"hover-landing-at-destination"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hover-landing-at-destination"}},[e._v("#")]),e._v(" Hover/Landing at Destination")]),e._v(" "),a("p",[e._v("Unless executing a mission landing (e.g. if executing a "),a("a",{attrs:{href:"#home_return"}},[e._v("home location return")]),e._v(" or "),a("a",{attrs:{href:"#safety_point_return"}},[e._v("closest safe destination return")]),e._v("), the vehicle will arrive at its destination, and rapidly descend to the "),a("a",{attrs:{href:"#RTL_DESCEND_ALT"}},[e._v("RTL_DESCEND_ALT")]),e._v(" altitude.")]),e._v(" "),a("p",[e._v("The vehicle will the loiter for a specified time ("),a("a",{attrs:{href:"#RTL_LAND_DELAY"}},[e._v("RTL_LAND_DELAY")]),e._v(") and then land. If "),a("a",{attrs:{href:"#RTL_LAND_DELAY"}},[e._v("RTL_LAND_DELAY=-1")]),e._v(" it will loiter indefinitely.")]),e._v(" "),a("p",[a("span",{attrs:{id:"default_configuration"}})]),e._v(" "),a("h2",{attrs:{id:"vehicle-default-behaviour"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vehicle-default-behaviour"}},[e._v("#")]),e._v(" Vehicle Default Behaviour")]),e._v(" "),a("p",[e._v("The mode is "),a("em",[e._v("implemented")]),e._v(" in almost exactly the same way in all vehicle types (the exception being that fixed wing vehicles will circle rather than hover when waiting), and are hence tuned using the same parameters.")]),e._v(" "),a("p",[e._v("However the "),a("em",[e._v("default configuration")]),e._v(" is tailored to suit the vehicle type, as described below.")]),e._v(" "),a("h3",{attrs:{id:"multi-copter-mc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multi-copter-mc"}},[e._v("#")]),e._v(" Multi-Copter (MC)")]),e._v(" "),a("p",[e._v("Multicopters use a "),a("a",{attrs:{href:"#home_return"}},[e._v("home location return")]),e._v(" by default (and the following configuration):")]),e._v(" "),a("ul",[a("li",[e._v("Ascend to "),a("a",{attrs:{href:"#RTL_RETURN_ALT"}},[e._v("RTL_RETURN_ALT")]),e._v(" ("),a("a",{attrs:{href:"#RTL_CONE_ANG"}},[e._v("RTL_CONE_ANG=0")]),e._v(" - cone not used).")]),e._v(" "),a("li",[e._v("Fly to the home position in a straight line and constant altitude (if already above the return altitude it will return at its current altitude).")]),e._v(" "),a("li",[e._v("Rapidly descend to the "),a("a",{attrs:{href:"#RTL_DESCEND_ALT"}},[e._v("RTL_DESCEND_ALT")]),e._v(" altitude.")]),e._v(" "),a("li",[e._v("Land more or less immediately (small "),a("a",{attrs:{href:"#RTL_LAND_DELAY"}},[e._v("RTL_LAND_DELAY")]),e._v(").")])]),e._v(" "),a("h3",{attrs:{id:"fixed-wing-fw"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fixed-wing-fw"}},[e._v("#")]),e._v(" Fixed Wing (FW)")]),e._v(" "),a("p",[e._v("Fixed-wing aircraft use a "),a("a",{attrs:{href:"#mission_landing_return"}},[e._v("mission landing return type")]),e._v(" by default:")]),e._v(" "),a("ul",[a("li",[e._v("If a mission landing is defined, fly direct to the mission landing start point and then land.")]),e._v(" "),a("li",[e._v("Otherwise fly directly to the home position and circle above it at radius "),a("a",{attrs:{href:"#NAV_LOITER_RAD"}},[e._v("NAV_LOITER_RAD")]),e._v(".")])]),e._v(" "),a("p",[e._v("If not following a mission landing, and "),a("a",{attrs:{href:"#RTL_LAND_DELAY"}},[e._v("RTL_LAND_DELAY")]),e._v(" is set to -1, the vehicle will land as described in the topic: "),a("RouterLink",{attrs:{to:"/ko/flying/fixed_wing_landing.html"}},[e._v("Landing (Fixed Wing)")]),e._v(".")],1),e._v(" "),a("p",[e._v("The fixed wing "),a("a",{attrs:{href:"#return_altitude"}},[e._v("safe return altitude")]),e._v(" depends only on "),a("a",{attrs:{href:"#RTL_RETURN_ALT"}},[e._v("RTL_RETURN_ALT")]),e._v(" (the cone defined by "),a("a",{attrs:{href:"#RTL_CONE_ANG"}},[e._v("RTL_CONE_ANG")]),e._v(" is not used)")]),e._v(" "),a("p",[e._v("RC stick movement is ignored.")]),e._v(" "),a("h3",{attrs:{id:"vtol"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vtol"}},[e._v("#")]),e._v(" VTOL")]),e._v(" "),a("p",[e._v("VTOL aircraft use a "),a("a",{attrs:{href:"#mission_landing_return"}},[e._v("mission landing return type")]),e._v(" by default:")]),e._v(" "),a("ul",[a("li",[e._v("If a mission landing is defined, fly direct to the mission landing start point and then land.")]),e._v(" "),a("li",[e._v("Otherwise fly directly to the home position, transition to multicopter mode, and land as a multicopter. > "),a("strong",[e._v("Note")]),e._v(" If not in a mission landing, a VTOL in FW mode will "),a("em",[e._v("always")]),e._v(" transition back to MC just before landing (ignoring "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#NAV_FORCE_VT"}},[e._v("NAV_FORCE_VT")]),e._v(").")],1)]),e._v(" "),a("h2",{attrs:{id:"parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),a("p",[e._v("The RTL parameters are listed in "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#return-mode"}},[e._v("Parameter Reference > Return Mode")]),e._v(" (and summarised below).")],1),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Parameter")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("span",{attrs:{id:"RTL_TYPE"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RTL_TYPE"}},[e._v("RTL_TYPE")])],1),e._v(" "),a("td",[e._v("Return mechanism (path and destination).")])])])]),e._v(" "),a("p",[a("code",[e._v("0")]),e._v(": Return to a rally point or home (whichever is closest) via direct path."),a("br"),e._v(" "),a("code",[e._v("1")]),e._v(": Return to a rally point or the mission landing pattern start point (whichever is closest), via direct path. If neither mission landing or rally points are defined return home via a direct path. If the destination is a mission landing pattern, follow the pattern to land."),a("br"),e._v(" "),a("code",[e._v("2")]),e._v(": Use mission path fast-forward to landing if a landing pattern is defined, otherwise fast-reverse to home. Ignore rally points. Fly direct to home if no mission plan is defined."),a("br"),e._v(" "),a("code",[e._v("3")]),e._v(": Return via direct path to closest destination: home, start of mission landing pattern or safe point. If the destination is a mission landing pattern, follow the pattern to land. |\n| "),a("span",{attrs:{id:"RTL_RETURN_ALT"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RTL_RETURN_ALT"}},[e._v("RTL_RETURN_ALT")]),e._v("   | Return altitude in meters (default: 60m) when "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RTL_CONE_ANG"}},[e._v("RTL_CONE_ANG")]),e._v(" is 0. If already above this value the vehicle will return at its current altitude.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |\n| "),a("span",{attrs:{id:"RTL_DESCEND_ALT"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RTL_DESCEND_ALT"}},[e._v("RTL_DESCEND_ALT")]),e._v(" | Minimum return altitude and altitude at which the vehicle will slow or stop its initial descent from a higher return altitude (default: 30m)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |\n| "),a("span",{attrs:{id:"RTL_LAND_DELAY"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RTL_LAND_DELAY"}},[e._v("RTL_LAND_DELAY")]),e._v("   | Time to hover at "),a("code",[e._v("RTL_DESCEND_ALT")]),e._v(" before landing (default: 0.5s) -by default this period is short so that the vehicle will simply slow and then land immediately. If set to -1 the system will loiter at "),a("code",[e._v("RTL_DESCEND_ALT")]),e._v(" rather than landing. The delay is provided to allow you to configure time for landing gear to be deployed (triggered automatically).                                                                                                                                                                                                                                                                                                                                                                                                                               |\n| "),a("span",{attrs:{id:"RTL_MIN_DIST"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RTL_MIN_DIST"}},[e._v("RTL_MIN_DIST")]),e._v('       | Minimum horizontal distance from home position to trigger ascent to the return altitude specified by the "cone". If the vehicle is horizontally closer than this distance to home, it will return at its current altitude or '),a("code",[e._v("RTL_DESCEND_ALT")]),e._v(" (whichever is higher) instead of first ascending to RTL_RETURN_ALT).                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |\n| "),a("span",{attrs:{id:"RTL_CONE_ANG"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RTL_CONE_ANG"}},[e._v("RTL_CONE_ANG")]),e._v('       | Half-angle of the cone that defines the vehicle RTL return altitude. Values (in degrees): 0, 25, 45, 65, 80, 90. Note that 0 is "no cone" (always return at '),a("code",[e._v("RTL_RETURN_ALT")]),e._v(" or higher), while 90 indicates that the vehicle must return at the current altitude or "),a("code",[e._v("RTL_DESCEND_ALT")]),e._v(" (whichever is higher).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |\n| "),a("span",{attrs:{id:"COM_RC_OVERRIDE"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_RC_OVERRIDE"}},[e._v("COM_RC_OVERRIDE")]),e._v(" | If enabled, stick movement on a multicopter (or VTOL in multicopter mode) gives control back to the pilot in "),a("RouterLink",{attrs:{to:"/ko/flight_modes/position_mc.html"}},[e._v("Position mode")]),e._v(" (except when vehicle is handling a critical battery failsafe). This can be separately enabled for auto modes and for offboard mode, and is enabled in auto modes by default.                                                                                                                                                                                                                                                                                                                                                                                                                                                      |\n| "),a("span",{attrs:{id:"NAV_LOITER_RAD"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#NAV_LOITER_RAD"}},[e._v("NAV_LOITER_RAD")]),e._v("   | [Fixed Wing Only] The radius of the loiter circle (at "),a("a",{attrs:{href:"#RTL_LAND_DELAY"}},[e._v("RTL_LAND_DELAY")]),e._v(".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |")],1)])}),[],!1,null,null,null);t.default=n.exports},322:function(e,t,i){e.exports=i.p+"assets/img/position_fixed.c1403cf0.svg"},819:function(e,t,i){e.exports=i.p+"assets/img/rtl_cone.f0d28c19.jpg"}}]);