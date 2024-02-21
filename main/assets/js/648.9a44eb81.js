(window.webpackJsonp=window.webpackJsonp||[]).push([[648],{328:function(e,t,i){e.exports=i.p+"assets/img/position_fixed.38e4a675.svg"},3726:function(e,t,i){"use strict";i.r(t);var a=i(19),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"return-mode-multicopter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#return-mode-multicopter"}},[e._v("#")]),e._v(" Return Mode (Multicopter)")]),e._v(" "),a("img",{attrs:{src:i(328),title:"Position fix required (e.g. GPS)",width:"30px"}}),e._v(" "),a("p",[e._v("The "),a("em",[e._v("Return")]),e._v(" flight mode is used to "),a("em",[e._v("fly a vehicle to safety")]),e._v(" on an unobstructed path to a safe destination, where it can land.")]),e._v(" "),a("p",[e._v("Multicopters use a "),a("RouterLink",{attrs:{to:"/zh/flight_modes/return.html#home-rally-point-return-type-rtl-type-0"}},[e._v("home/rally point return type")]),e._v(' by default.\nIn this return type vehicles ascend to a safe altitude above obstructions if needed, fly directly to the closest safe landing point (a rally point or the home position), descend to the "descent altitude", wait briefly, and then land.\nThe return altitude, descent altitude, and landing delay are normally set to conservative "safe" values, but can be changed if needed.')],1),e._v(" "),a("p",[e._v("Multicopter supports the "),a("RouterLink",{attrs:{to:"/zh/flight_modes/return.html#return-types-rtl-type"}},[e._v("other PX4 return types")]),e._v(", including mission landing, mission path and closest safe destination.\nThe default type is recommended.")],1),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),a("ul",[a("li",[e._v("Mode is automatic - no user intervention is "),a("em",[e._v("required")]),e._v(" to control the vehicle.")]),e._v(" "),a("li",[e._v("Mode requires a global 3d position estimate (from GPS or inferred from a "),a("RouterLink",{attrs:{to:"/zh/ros/external_position_estimation.html#enabling-auto-modes-with-a-local-position"}},[e._v("local position")]),e._v(").\n"),a("ul",[a("li",[e._v("Flying vehicles can't switch to this mode without global position.")]),e._v(" "),a("li",[e._v("Flying vehicles will failsafe if they lose the position estimate.")])])],1),e._v(" "),a("li",[e._v("Mode requires home position is set.")]),e._v(" "),a("li",[e._v("Mode prevents arming (vehicle must be armed when switching to this mode).")]),e._v(" "),a("li",[e._v("RC control switches can be used to change flight modes on any vehicle.")]),e._v(" "),a("li",[e._v("RC stick movement will "),a("a",{attrs:{href:"#COM_RC_OVERRIDE"}},[e._v("by default")]),e._v(" change the vehicle to "),a("RouterLink",{attrs:{to:"/zh/flight_modes_mc/position.html"}},[e._v("Position mode")]),e._v(" unless handling a critical battery failsafe.")],1)])]),e._v(" "),a("h2",{attrs:{id:"technical-summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#technical-summary"}},[e._v("#")]),e._v(" Technical Summary")]),e._v(" "),a("p",[e._v("Multicopters use the "),a("RouterLink",{attrs:{to:"/zh/flight_modes/return.html#home-rally-point-return-type-rtl-type-0"}},[e._v("home/rally point return type")]),e._v(" by default.\nFor this return type the copter:")],1),e._v(" "),a("ul",[a("li",[e._v("Ascends to the "),a("a",{attrs:{href:"#minimum-return-altitude"}},[e._v("minimum return altitude")]),e._v(" (safely above any expected obstacles).\nThe vehicle maintains its initial altitude if that is higher than the minimum return altitude.")]),e._v(" "),a("li",[e._v("Flies via a direct constant-altitude path to the safe landing point, which will be the nearest of any rally points and the home position.")]),e._v(" "),a("li",[e._v('On arrival at its destination, it rapidly descends to the "descent altitude" ('),a("a",{attrs:{href:"#RTL_DESCEND_ALT"}},[e._v("RTL_DESCEND_ALT")]),e._v(").")]),e._v(" "),a("li",[e._v("It waits for a configurable time ("),a("a",{attrs:{href:"#RTL_LAND_DELAY"}},[e._v("RTL_LAND_DELAY")]),e._v("), which may be used for deploying landing gear.")]),e._v(" "),a("li",[e._v("Then lands.")])]),e._v(" "),a("h3",{attrs:{id:"minimum-return-altitude"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#minimum-return-altitude"}},[e._v("#")]),e._v(" Minimum Return Altitude")]),e._v(" "),a("p",[e._v("By default the "),a("em",[e._v("minimum return altitude")]),e._v(" is set using "),a("a",{attrs:{href:"#RTL_RETURN_ALT"}},[e._v("RTL_RETURN_ALT")]),e._v(", and the vehicle will just return at the higher of "),a("code",[e._v("RTL_RETURN_ALT")]),e._v(" or the initial vehicle altitude.")]),e._v(" "),a("p",[e._v("The minimum return altitude can be further configured using "),a("a",{attrs:{href:"#RTL_CONE_ANG"}},[e._v("RTL_CONE_ANG")]),e._v(", which together with "),a("a",{attrs:{href:"#RTL_RETURN_ALT"}},[e._v("RTL_RETURN_ALT")]),e._v(" defines a half cone centered around the destination landing point.\nThe cone angle allows a lower minimum return altitude when the return mode is executed close to the destination.\nThis is useful when there are few obstacles near the destination, because it may reduce the minimum height that the vehicle needs to ascend before landing, and hence power consumption and time to land.")]),e._v(" "),a("p",[a("img",{attrs:{src:i(392),alt:"Return mode cone"}})]),e._v(" "),a("p",[e._v("The cone affects the minimum return altitude if return mode is triggered within the cylinder defined by the maximum cone radius and "),a("code",[e._v("RTL_RETURN_ALT")]),e._v(": outside this cyclinder "),a("code",[e._v("RTL_RETURN_ALT")]),e._v(" is used.\nInside the code the minimum return altitude is the intersection of the vehicle position with the cone, or "),a("code",[e._v("RTL_DESCEND_ALT")]),e._v(" (whichever is higher).\nIn other words, the vehicle must always ascend to at least "),a("code",[e._v("RTL_DESCEND_ALT")]),e._v(" if below that value.")]),e._v(" "),a("p",[e._v("For more information on this return type see "),a("RouterLink",{attrs:{to:"/zh/flight_modes/return.html#home-rally-point-return-type-rtl-type-0"}},[e._v("Home/Rally Point Return Type (RTL_TYPE=0)")])],1),e._v(" "),a("h2",{attrs:{id:"parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),a("p",[e._v("The RTL parameters are listed in "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#return-mode"}},[e._v("Parameter Reference > Return Mode")]),e._v(".")],1),e._v(" "),a("p",[e._v("The parameters that are relevant to multicopter (assuming the "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#RTL_TYPE"}},[e._v("RTL_TYPE")]),e._v(" is set to 0) are listed below.")],1),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Parameter")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("a",{attrs:{id:"RTL_RETURN_ALT"}}),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#RTL_RETURN_ALT"}},[e._v("RTL_RETURN_ALT")])],1),e._v(" "),a("td",[e._v("Return altitude in meters (default: 60m) when "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#RTL_CONE_ANG"}},[e._v("RTL_CONE_ANG")]),e._v(" is 0. If already above this value the vehicle will return at its current altitude.")],1)]),e._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"RTL_DESCEND_ALT"}}),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#RTL_DESCEND_ALT"}},[e._v("RTL_DESCEND_ALT")])],1),e._v(" "),a("td",[e._v("Minimum return altitude and altitude at which the vehicle will slow or stop its initial descent from a higher return altitude (default: 30m)")])]),e._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"RTL_LAND_DELAY"}}),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#RTL_LAND_DELAY"}},[e._v("RTL_LAND_DELAY")])],1),e._v(" "),a("td",[e._v("Time to hover at "),a("code",[e._v("RTL_DESCEND_ALT")]),e._v(" before landing (default: 0.5s) -by default this period is short so that the vehicle will simply slow and then land immediately. If set to -1 the system will loiter at "),a("code",[e._v("RTL_DESCEND_ALT")]),e._v(" rather than landing. The delay is provided to allow you to configure time for landing gear to be deployed (triggered automatically).")])]),e._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"RTL_MIN_DIST"}}),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#RTL_MIN_DIST"}},[e._v("RTL_MIN_DIST")])],1),e._v(" "),a("td",[e._v('Minimum horizontal distance from home position to trigger ascent to the return altitude specified by the "cone". If the vehicle is horizontally closer than this distance to home, it will return at its current altitude or '),a("code",[e._v("RTL_DESCEND_ALT")]),e._v(" (whichever is higher) instead of first ascending to RTL_RETURN_ALT).")])]),e._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"RTL_CONE_ANG"}}),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#RTL_CONE_ANG"}},[e._v("RTL_CONE_ANG")])],1),e._v(" "),a("td",[e._v('Half-angle of the cone that defines the vehicle RTL return altitude. Values (in degrees): 0, 25, 45, 65, 80, 90. Note that 0 is "no cone" (always return at '),a("code",[e._v("RTL_RETURN_ALT")]),e._v(" or higher), while 90 indicates that the vehicle must return at the current altitude or "),a("code",[e._v("RTL_DESCEND_ALT")]),e._v(" (whichever is higher).")])]),e._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"COM_RC_OVERRIDE"}}),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_RC_OVERRIDE"}},[e._v("COM_RC_OVERRIDE")])],1),e._v(" "),a("td",[e._v("Controls whether stick movement on a multicopter (or VTOL in MC mode) causes a mode change to "),a("RouterLink",{attrs:{to:"/zh/flight_modes_mc/position.html"}},[e._v("Position mode")]),e._v(" (except when vehicle is handling a critical battery failsafe). This can be separately enabled for auto modes and for offboard mode, and is enabled in auto modes by default.")],1)]),e._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"COM_RC_STICK_OV"}}),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_RC_STICK_OV"}},[e._v("COM_RC_STICK_OV")])],1),e._v(" "),a("td",[e._v("The amount of stick movement that causes a transition to "),a("RouterLink",{attrs:{to:"/zh/flight_modes_mc/position.html"}},[e._v("Position mode")]),e._v(" (if "),a("a",{attrs:{href:"#COM_RC_OVERRIDE"}},[e._v("COM_RC_OVERRIDE")]),e._v(" is enabled).")],1)])])]),e._v(" "),a("h2",{attrs:{id:"see-also"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#see-also"}},[e._v("#")]),e._v(" See Also")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/zh/flight_modes/return.html"}},[e._v("Return Mode (Generic)")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/flight_modes_fw/return.html"}},[e._v("Return Mode (Fixed-wing)")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/flight_modes_vtol/return.html"}},[e._v("Return Mode (VTOL)")])],1)])])}),[],!1,null,null,null);t.default=r.exports},392:function(e,t,i){e.exports=i.p+"assets/img/rtl_cone.173b5643.jpg"}}]);