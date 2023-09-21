(window.webpackJsonp=window.webpackJsonp||[]).push([[522],{2015:function(t,e,i){"use strict";i.r(e);var a=i(19),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"return-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#return-mode"}},[t._v("#")]),t._v(" Return Mode")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/en/getting_started/flight_modes.html#key_position_fixed"}},[a("img",{attrs:{src:i(328),title:"Position fix required (e.g. GPS)",width:"30px"}})])],1),t._v(" "),a("p",[t._v("The "),a("em",[t._v("Return")]),t._v(" flight mode is used to "),a("em",[t._v("fly a vehicle to safety")]),t._v(" on an unobstructed path to a safe destination, where it may either wait (hover or circle) or land.")]),t._v(" "),a("p",[t._v('PX4 provides several mechanisms for choosing a safe return path, destination and landing, including using home location, rally ("safe") points, mission paths, and mission landing sequences.')]),t._v(" "),a("p",[t._v("The following sections explain how to configure the "),a("a",{attrs:{href:"#return_types"}},[t._v("return type")]),t._v(", "),a("a",{attrs:{href:"#return_altitude"}},[t._v("return altitude")]),t._v(" and "),a("a",{attrs:{href:"#arrival"}},[t._v("landing/arrival behaviour")]),t._v(".\nAt the end there are sections explaining the "),a("em",[t._v("default")]),t._v(" (preconfigured) behaviour for each "),a("a",{attrs:{href:"#default_configuration"}},[t._v("vehicle type")]),t._v(".")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("ul",[a("li",[t._v("This mode requires a global 3d position estimate (from GPS or inferred from a "),a("RouterLink",{attrs:{to:"/en/ros/external_position_estimation.html#enabling-auto-modes-with-a-local-position"}},[t._v("local position")]),t._v(").")],1),t._v(" "),a("li",[t._v("This mode is automatic - no user intervention is "),a("em",[t._v("required")]),t._v(" to control the vehicle.")]),t._v(" "),a("li",[t._v("RC control switches can be used to change flight modes on any vehicle.")]),t._v(" "),a("li",[t._v("RC stick movement in a multicopter (or VTOL in multicopter mode) will "),a("a",{attrs:{href:"#COM_RC_OVERRIDE"}},[t._v("by default")]),t._v(" change the vehicle to "),a("RouterLink",{attrs:{to:"/en/flight_modes/position_mc.html"}},[t._v("Position mode")]),t._v(" unless handling a critical battery failsafe.")],1)])]),t._v(" "),a("p",[a("a",{attrs:{id:"return_types"}})]),t._v(" "),a("h2",{attrs:{id:"return-types-rtl-type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#return-types-rtl-type"}},[t._v("#")]),t._v(" Return Types (RTL_TYPE)")]),t._v(" "),a("p",[t._v("PX4 provides four alternative approaches ("),a("a",{attrs:{href:"#RTL_TYPE"}},[t._v("RTL_TYPE")]),t._v(") for finding an unobstructed path to a safe destination and/or landing:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#home_return"}},[t._v("Home/rally point return")]),t._v(" ("),a("code",[t._v("RTL_TYPE=0")]),t._v("): Ascend to safe altitude and return via a direct path to the closest rally point or home location.")]),t._v(" "),a("li",[a("a",{attrs:{href:"#mission_landing_return"}},[t._v("Mission landing/rally point return")]),t._v(" ("),a("code",[t._v("RTL_TYPE=1")]),t._v("): Ascend to a safe altitude, fly direct to the closest destination "),a("em",[t._v("other than home")]),t._v(": rally point or start of mission landing.\nIf no mission landing or rally points are defined, return home via direct path.")]),t._v(" "),a("li",[a("a",{attrs:{href:"#mission_path_return"}},[t._v("Mission path return")]),t._v(" ("),a("code",[t._v("RTL_TYPE=2")]),t._v("): Use mission path and fast-continue to mission landing (if defined).\nIf no mission landing defined, fast-reverse mission to home.\nIf no mission defined, return direct to home (rally points are ignored).")]),t._v(" "),a("li",[a("a",{attrs:{href:"#safety_point_return"}},[t._v("Closest safe destination return")]),t._v(" ("),a("code",[t._v("RTL_TYPE=3")]),t._v("): Ascend to a safe altitude and return via direct path to closest destination: home, start of mission landing pattern, or rally point.\nIf the destination is a mission landing pattern, follow the pattern to land.")])]),t._v(" "),a("p",[t._v("More detailed explanations for each of the types are provided in the following sections.")]),t._v(" "),a("p",[a("a",{attrs:{id:"home_return"}})]),t._v(" "),a("h3",{attrs:{id:"home-rally-point-return-type-rtl-type-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#home-rally-point-return-type-rtl-type-0"}},[t._v("#")]),t._v(" Home/Rally Point Return Type (RTL_TYPE=0)")]),t._v(" "),a("p",[t._v("In this return type the vehicle:")]),t._v(" "),a("ul",[a("li",[t._v("Ascends to a safe "),a("a",{attrs:{href:"#return_altitude"}},[t._v("return altitude")]),t._v(" (above any expected obstacles).")]),t._v(" "),a("li",[t._v("Flies via direct path to the home position or a rally point (whichever is closest)")]),t._v(" "),a("li",[a("a",{attrs:{href:"#arrival"}},[t._v("Land or waits")]),t._v(" at descent altitude (depending on landing parameters).")])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("If no rally points are defined, this is the same as a "),a("em",[t._v("Return to Launch")]),t._v(" (RTL)/"),a("em",[t._v("Return to Home")]),t._v(" (RTH).")])]),t._v(" "),a("p",[a("a",{attrs:{id:"mission_landing_return"}})]),t._v(" "),a("h3",{attrs:{id:"mission-landing-rally-point-return-type-rtl-type-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mission-landing-rally-point-return-type-rtl-type-1"}},[t._v("#")]),t._v(" Mission Landing/Rally Point Return Type (RTL_TYPE=1)")]),t._v(" "),a("p",[t._v("In this return type the vehicle:")]),t._v(" "),a("ul",[a("li",[t._v("Ascends to a safe "),a("a",{attrs:{href:"#return_altitude"}},[t._v("return altitude")]),t._v(" (above any expected obstacles).")]),t._v(" "),a("li",[t._v("Flies via direct path to a rally point or the start of a "),a("a",{attrs:{href:"#mission_landing_pattern"}},[t._v("mission landing pattern")]),t._v(" (whichever is closest).\nIf no mission landing or rally points are defined the vehicle instead returns home via a direct path.")]),t._v(" "),a("li",[t._v("If the destination is a mission landing pattern it will follow the pattern to land.")]),t._v(" "),a("li",[t._v("If the destination is a rally point or home it will "),a("a",{attrs:{href:"#arrival"}},[t._v("land or wait")]),t._v(" at descent altitude (depending on landing parameters).")])]),t._v(" "),a("p",[a("a",{attrs:{id:"mission_landing_pattern"}})]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("A mission landing pattern consists of a "),a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_DO_LAND_START",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAV_CMD_DO_LAND_START"),a("OutboundLink")],1),t._v(", one or more position waypoints, and a "),a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_NAV_LAND",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAV_CMD_NAV_LAND"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("When this type is set PX4 will reject any mission without a valid landing pattern.")])]),t._v(" "),a("p",[a("a",{attrs:{id:"mission_path_return"}})]),t._v(" "),a("h3",{attrs:{id:"mission-path-return-type-rtl-type-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mission-path-return-type-rtl-type-2"}},[t._v("#")]),t._v(" Mission Path Return Type (RTL_TYPE=2)")]),t._v(" "),a("p",[t._v("This return type uses the mission (if defined) to provide a safe return "),a("em",[t._v("path")]),t._v(", and the mission landing pattern (if defined) to provide landing behaviour.\nIf there is a mission but no mission landing pattern, the mission is flown "),a("em",[t._v("in reverse")]),t._v(".\nRally points, if any, are ignored.")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("The behaviour is fairly complex because it depends on the flight mode, and whether a mission and mission landing are defined.")])]),t._v(" "),a("p",[t._v("Mission "),a("em",[t._v("with")]),t._v(" landing pattern:")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Mission mode:")]),t._v(' Mission is continued in "fast-forward mode" (jumps, delay and any other non-position commands ignored, loiter and other position waypoints converted to simple waypoints) and then lands.')]),t._v(" "),a("li",[a("strong",[t._v("Auto mode other than mission mode:")]),t._v(" "),a("ul",[a("li",[t._v("Ascend to a safe "),a("a",{attrs:{href:"#return_altitude"}},[t._v("return altitude")]),t._v(" above any expected obstacles.")]),t._v(" "),a("li",[t._v("Fly directly to closest waypoint (for FW not a landing WP) and descend to waypoint altitude.")]),t._v(" "),a("li",[t._v("Continue mission in fast forward mode from that waypoint.")])])]),t._v(" "),a("li",[a("strong",[t._v("Manual modes:")]),t._v(" "),a("ul",[a("li",[t._v("Ascend to a safe "),a("a",{attrs:{href:"#return_altitude"}},[t._v("return altitude")]),t._v(" above any expected obstacles.")]),t._v(" "),a("li",[t._v("Fly directly to landing sequence position and descend to waypoint altitude")]),t._v(" "),a("li",[t._v("Land using mission landing pattern")])])])]),t._v(" "),a("p",[t._v("Mission "),a("em",[t._v("without")]),t._v(" landing pattern defined:")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Mission mode:")]),t._v(" "),a("ul",[a("li",[t._v('Mission flown "fast-backward" (in reverse) starting from the previous waypoint\n'),a("ul",[a("li",[t._v("Jumps, delay and any other non-position commands ignored, loiter and other position waypoints converted to simple waypoints.")]),t._v(" "),a("li",[t._v("VTOL vehicles transition to FW mode (if needed) before flying the mission in reverse.")])])]),t._v(" "),a("li",[t._v("On reaching waypoint 1, the vehicle ascends to the "),a("a",{attrs:{href:"#return_altitude"}},[t._v("return altitude")]),t._v(" and flies to the home position (where it "),a("a",{attrs:{href:"#arrival"}},[t._v("lands or waits")]),t._v(").")])])]),t._v(" "),a("li",[a("strong",[t._v("Auto mode other than mission mode:")]),t._v(" "),a("ul",[a("li",[t._v("Fly directly to closest waypoint (for FW not a landing WP) and descend to waypoint altitude.")]),t._v(" "),a("li",[t._v("Continue the mission in reverse, exactly as though Return mode was triggered in mission mode (above)")])])]),t._v(" "),a("li",[a("strong",[t._v("Manual modes:")]),t._v(" Fly directly to home location and land.")])]),t._v(" "),a("p",[t._v("If no mission is defined PX4 will fly directly to home location and land (rally points are ignored).")]),t._v(" "),a("p",[t._v("If the mission changes during return mode, then the behaviour is re-evaluated based on the new mission following the same rules as above (e.g. if the new mission has no landing sequence and you're in a mission, the mission is reversed).")]),t._v(" "),a("p",[a("a",{attrs:{id:"safety_point_return"}})]),t._v(" "),a("h3",{attrs:{id:"closest-safe-destination-return-type-rtl-type-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#closest-safe-destination-return-type-rtl-type-3"}},[t._v("#")]),t._v(" Closest Safe Destination Return Type (RTL_TYPE=3)")]),t._v(" "),a("p",[t._v("In this return type the vehicle:")]),t._v(" "),a("ul",[a("li",[t._v("Ascends to a safe "),a("a",{attrs:{href:"#return_altitude"}},[t._v("return altitude")]),t._v(" (above any expected obstacles).")]),t._v(" "),a("li",[t._v("Flies a direct path to the closest destination of: home location, mission landing pattern or rally point.")]),t._v(" "),a("li",[t._v("If the destination is a mission landing pattern the vehicle will follow the pattern to land")]),t._v(" "),a("li",[t._v("If the destination is a home location or rally point, the vehicle will descend to the descent altitude ("),a("a",{attrs:{href:"#RTL_DESCEND_ALT"}},[t._v("RTL_DESCEND_ALT")]),t._v(") and then "),a("a",{attrs:{href:"#arrival"}},[t._v("Land or waits")]),t._v(".")])]),t._v(" "),a("p",[a("a",{attrs:{id:"return_altitude"}})]),t._v(" "),a("h2",{attrs:{id:"return-altitude"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#return-altitude"}},[t._v("#")]),t._v(" Return Altitude")]),t._v(" "),a("p",[t._v("A vehicle will usually first ascend to a safe altitude before returning, in order to avoid any obstacles between it and the destination.")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("This is true for most "),a("a",{attrs:{href:"#return_types"}},[t._v("return types")]),t._v(".\nThe exception is when executing a "),a("a",{attrs:{href:"#mission_path_return"}},[t._v("mission path return")]),t._v(" from within a mission, where the vehicle follows mission waypoints (we can assume these avoid any obstacles).")])]),t._v(" "),a("p",[t._v("The return altitude for a fixed-wing vehicle is configured using the parameter "),a("a",{attrs:{href:"#RTL_RETURN_ALT"}},[t._v("RTL_RETURN_ALT")]),t._v(".\nThe return altitude for multicopter and VTOL vehicles is configured using the parameters "),a("a",{attrs:{href:"#RTL_RETURN_ALT"}},[t._v("RTL_RETURN_ALT")]),t._v(" and "),a("a",{attrs:{href:"#RTL_CONE_ANG"}},[t._v("RTL_CONE_ANG")]),t._v(", which define a half cone centered around the destination (home location or safety point).")]),t._v(" "),a("p",[a("img",{attrs:{src:i(924),alt:"Return mode cone"}})]),t._v(" "),a("p",[t._v("If the vehicle is:")]),t._v(" "),a("ul",[a("li",[t._v("Above "),a("a",{attrs:{href:"#RTL_RETURN_ALT"}},[t._v("RTL_RETURN_ALT")]),t._v(" (1) it will return at its current altitude.")]),t._v(" "),a("li",[t._v("Below the cone it will return where it intersects the cone (2) or "),a("a",{attrs:{href:"#RTL_DESCEND_ALT"}},[t._v("RTL_DESCEND_ALT")]),t._v(" (whichever is higher).")]),t._v(" "),a("li",[t._v("Outside the cone (3) it will first climb until it reaches "),a("a",{attrs:{href:"#RTL_RETURN_ALT"}},[t._v("RTL_RETURN_ALT")]),t._v(".")]),t._v(" "),a("li",[t._v("Inside the cone:\n"),a("ul",[a("li",[t._v("Above "),a("a",{attrs:{href:"#RTL_DESCEND_ALT"}},[t._v("RTL_DESCEND_ALT")]),t._v(" (4) it will return at its current altitude.")]),t._v(" "),a("li",[t._v("Below "),a("a",{attrs:{href:"#RTL_DESCEND_ALT"}},[t._v("RTL_DESCEND_ALT")]),t._v(" (5) it will first ascend to "),a("code",[t._v("RTL_DESCEND_ALT")]),t._v(".")])])])]),t._v(" "),a("p",[t._v("Note:")]),t._v(" "),a("ul",[a("li",[t._v("If "),a("a",{attrs:{href:"#RTL_CONE_ANG"}},[t._v("RTL_CONE_ANG")]),t._v(' is 0 degrees there is no "cone":\n'),a("ul",[a("li",[t._v("the vehicle returns at "),a("code",[t._v("RTL_RETURN_ALT")]),t._v(" (or above).")])])]),t._v(" "),a("li",[t._v("If "),a("a",{attrs:{href:"#RTL_CONE_ANG"}},[t._v("RTL_CONE_ANG")]),t._v(" is 90 degrees the vehicle will return at the greater of "),a("code",[t._v("RTL_DESCEND_ALT")]),t._v(" and the current altitude.")]),t._v(" "),a("li",[t._v("The vehicle will always ascend at least "),a("a",{attrs:{href:"#RTL_DESCEND_ALT"}},[t._v("RTL_DESCEND_ALT")]),t._v(" for the return.")])]),t._v(" "),a("p",[a("a",{attrs:{id:"arrival"}})]),t._v(" "),a("h2",{attrs:{id:"hover-landing-at-destination"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hover-landing-at-destination"}},[t._v("#")]),t._v(" Hover/Landing at Destination")]),t._v(" "),a("p",[t._v("Unless executing a mission landing (e.g. if executing a "),a("a",{attrs:{href:"#home_return"}},[t._v("home location return")]),t._v(" or "),a("a",{attrs:{href:"#safety_point_return"}},[t._v("closest safe destination return")]),t._v("), the vehicle will arrive at its destination, and rapidly descend to the "),a("a",{attrs:{href:"#RTL_DESCEND_ALT"}},[t._v("RTL_DESCEND_ALT")]),t._v(" altitude.")]),t._v(" "),a("p",[t._v("The vehicle will the loiter for a specified time ("),a("a",{attrs:{href:"#RTL_LAND_DELAY"}},[t._v("RTL_LAND_DELAY")]),t._v(") and then land.\nIf "),a("a",{attrs:{href:"#RTL_LAND_DELAY"}},[t._v("RTL_LAND_DELAY=-1")]),t._v(" it will loiter indefinitely.")]),t._v(" "),a("p",[a("a",{attrs:{id:"default_configuration"}})]),t._v(" "),a("h2",{attrs:{id:"vehicle-default-behaviour"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vehicle-default-behaviour"}},[t._v("#")]),t._v(" Vehicle Default Behaviour")]),t._v(" "),a("p",[t._v("The mode is "),a("em",[t._v("implemented")]),t._v(" in almost exactly the same way in all vehicle types (the exception being that fixed wing vehicles will circle rather than hover when waiting), and are hence tuned using the same parameters.")]),t._v(" "),a("p",[t._v("However the "),a("em",[t._v("default configuration")]),t._v(" is tailored to suit the vehicle type, as described below.")]),t._v(" "),a("h3",{attrs:{id:"multi-copter-mc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multi-copter-mc"}},[t._v("#")]),t._v(" Multi-Copter (MC)")]),t._v(" "),a("p",[t._v("Multicopters use a "),a("a",{attrs:{href:"#home_return"}},[t._v("home location return")]),t._v(" by default (and the following configuration):")]),t._v(" "),a("ul",[a("li",[t._v("Ascend to "),a("a",{attrs:{href:"#RTL_RETURN_ALT"}},[t._v("RTL_RETURN_ALT")]),t._v(" ("),a("a",{attrs:{href:"#RTL_CONE_ANG"}},[t._v("RTL_CONE_ANG=0")]),t._v(" - cone not used).")]),t._v(" "),a("li",[t._v("Fly to the home position in a straight line and constant altitude (if already above the return altitude it will return at its current altitude).")]),t._v(" "),a("li",[t._v("Rapidly descend to the "),a("a",{attrs:{href:"#RTL_DESCEND_ALT"}},[t._v("RTL_DESCEND_ALT")]),t._v(" altitude.")]),t._v(" "),a("li",[t._v("Land more or less immediately (small "),a("a",{attrs:{href:"#RTL_LAND_DELAY"}},[t._v("RTL_LAND_DELAY")]),t._v(").")])]),t._v(" "),a("h3",{attrs:{id:"fixed-wing-fw"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fixed-wing-fw"}},[t._v("#")]),t._v(" Fixed Wing (FW)")]),t._v(" "),a("p",[t._v("Fixed-wing aircraft use a "),a("a",{attrs:{href:"#mission_landing_return"}},[t._v("mission landing return type")]),t._v(" by default:")]),t._v(" "),a("ul",[a("li",[t._v("If a mission landing is defined, fly direct to the mission landing start point and then land.")]),t._v(" "),a("li",[t._v("Otherwise fly directly to the home position and circle above it at radius "),a("a",{attrs:{href:"#NAV_LOITER_RAD"}},[t._v("NAV_LOITER_RAD")]),t._v(".")])]),t._v(" "),a("p",[t._v("If not following a mission landing, and "),a("a",{attrs:{href:"#RTL_LAND_DELAY"}},[t._v("RTL_LAND_DELAY")]),t._v(" is set to -1, the vehicle will land as described in the topic: "),a("RouterLink",{attrs:{to:"/en/flight_modes/land.html#fixed-wing-fw"}},[t._v("Land Mode > Fixed-wing landing")]),t._v(".")],1),t._v(" "),a("p",[t._v("The fixed wing "),a("a",{attrs:{href:"#return_altitude"}},[t._v("safe return altitude")]),t._v(" depends only on "),a("a",{attrs:{href:"#RTL_RETURN_ALT"}},[t._v("RTL_RETURN_ALT")]),t._v(" (the cone defined by "),a("a",{attrs:{href:"#RTL_CONE_ANG"}},[t._v("RTL_CONE_ANG")]),t._v(" is not used)")]),t._v(" "),a("p",[t._v("RC stick movement is ignored.")]),t._v(" "),a("h3",{attrs:{id:"vtol"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vtol"}},[t._v("#")]),t._v(" VTOL")]),t._v(" "),a("p",[t._v("VTOL aircraft use a "),a("a",{attrs:{href:"#mission_landing_return"}},[t._v("mission landing return type")]),t._v(" by default:")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("If a mission landing is defined, fly direct to the mission landing start point and then land.")])]),t._v(" "),a("li",[a("p",[t._v("Otherwise fly directly to the home position, transition to multicopter mode, and land as a multicopter.")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("If not in a mission landing, a VTOL in FW mode will "),a("em",[t._v("always")]),t._v(" transition back to MC just before landing (ignoring "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#NAV_FORCE_VT"}},[t._v("NAV_FORCE_VT")]),t._v(").")],1)])])]),t._v(" "),a("h2",{attrs:{id:"parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),a("p",[t._v("The RTL parameters are listed in "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#return-mode"}},[t._v("Parameter Reference > Return Mode")]),t._v(" (and summarised below).")],1),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Parameter")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("a",{attrs:{id:"RTL_TYPE"}}),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#RTL_TYPE"}},[t._v("RTL_TYPE")])],1),t._v(" "),a("td",[t._v("Return mechanism (path and destination)."),a("br"),a("code",[t._v("0")]),t._v(": Return to a rally point or home (whichever is closest) via direct path."),a("br"),a("code",[t._v("1")]),t._v(": Return to a rally point or the mission landing pattern start point (whichever is closest), via direct path. If neither mission landing or rally points are defined return home via a direct path. If the destination is a mission landing pattern, follow the pattern to land."),a("br"),a("code",[t._v("2")]),t._v(": Use mission path fast-forward to landing if a landing pattern is defined, otherwise fast-reverse to home. Ignore rally points. Fly direct to home if no mission plan is defined."),a("br"),a("code",[t._v("3")]),t._v(": Return via direct path to closest destination: home, start of mission landing pattern or safe point. If the destination is a mission landing pattern, follow the pattern to land.")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"RTL_RETURN_ALT"}}),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#RTL_RETURN_ALT"}},[t._v("RTL_RETURN_ALT")])],1),t._v(" "),a("td",[t._v("Return altitude in meters (default: 60m) when "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#RTL_CONE_ANG"}},[t._v("RTL_CONE_ANG")]),t._v(" is 0. If already above this value the vehicle will return at its current altitude.")],1)]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"RTL_DESCEND_ALT"}}),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#RTL_DESCEND_ALT"}},[t._v("RTL_DESCEND_ALT")])],1),t._v(" "),a("td",[t._v("Minimum return altitude and altitude at which the vehicle will slow or stop its initial descent from a higher return altitude (default: 30m)")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"RTL_LAND_DELAY"}}),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#RTL_LAND_DELAY"}},[t._v("RTL_LAND_DELAY")])],1),t._v(" "),a("td",[t._v("Time to hover at "),a("code",[t._v("RTL_DESCEND_ALT")]),t._v(" before landing (default: 0.5s) -by default this period is short so that the vehicle will simply slow and then land immediately. If set to -1 the system will loiter at "),a("code",[t._v("RTL_DESCEND_ALT")]),t._v(" rather than landing. The delay is provided to allow you to configure time for landing gear to be deployed (triggered automatically).")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"RTL_MIN_DIST"}}),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#RTL_MIN_DIST"}},[t._v("RTL_MIN_DIST")])],1),t._v(" "),a("td",[t._v('Minimum horizontal distance from home position to trigger ascent to the return altitude specified by the "cone". If the vehicle is horizontally closer than this distance to home, it will return at its current altitude or '),a("code",[t._v("RTL_DESCEND_ALT")]),t._v(" (whichever is higher) instead of first ascending to RTL_RETURN_ALT).")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"RTL_CONE_ANG"}}),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#RTL_CONE_ANG"}},[t._v("RTL_CONE_ANG")])],1),t._v(" "),a("td",[t._v('Half-angle of the cone that defines the vehicle RTL return altitude. Values (in degrees): 0, 25, 45, 65, 80, 90. Note that 0 is "no cone" (always return at '),a("code",[t._v("RTL_RETURN_ALT")]),t._v(" or higher), while 90 indicates that the vehicle must return at the current altitude or "),a("code",[t._v("RTL_DESCEND_ALT")]),t._v(" (whichever is higher).")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"COM_RC_OVERRIDE"}}),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#COM_RC_OVERRIDE"}},[t._v("COM_RC_OVERRIDE")])],1),t._v(" "),a("td",[t._v("Controls whether stick movement on a multicopter (or VTOL in MC mode) causes a mode change to "),a("RouterLink",{attrs:{to:"/en/flight_modes/position_mc.html"}},[t._v("Position mode")]),t._v(" (except when vehicle is handling a critical battery failsafe). This can be separately enabled for auto modes and for offboard mode, and is enabled in auto modes by default.")],1)]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"COM_RC_STICK_OV"}}),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#COM_RC_STICK_OV"}},[t._v("COM_RC_STICK_OV")])],1),t._v(" "),a("td",[t._v("The amount of stick movement that causes a transition to "),a("RouterLink",{attrs:{to:"/en/flight_modes/position_mc.html"}},[t._v("Position mode")]),t._v(" (if "),a("a",{attrs:{href:"#COM_RC_OVERRIDE"}},[t._v("COM_RC_OVERRIDE")]),t._v(" is enabled).")],1)]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"NAV_LOITER_RAD"}}),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#NAV_LOITER_RAD"}},[t._v("NAV_LOITER_RAD")])],1),t._v(" "),a("td",[t._v("[Fixed Wing Only] The radius of the loiter circle (at "),a("a",{attrs:{href:"#RTL_LAND_DELAY"}},[t._v("RTL_LAND_DELAY")]),t._v(".")])])])])])}),[],!1,null,null,null);e.default=n.exports},328:function(t,e,i){t.exports=i.p+"assets/img/position_fixed.38e4a675.svg"},924:function(t,e,i){t.exports=i.p+"assets/img/rtl_cone.173b5643.jpg"}}]);