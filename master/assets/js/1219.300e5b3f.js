(window.webpackJsonp=window.webpackJsonp||[]).push([[1219],{2553:function(t,e,i){"use strict";i.r(e);var a=i(18),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"fixed-wing-takeoff"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#fixed-wing-takeoff"}},[t._v("#")]),t._v(" Fixed Wing Takeoff")]),t._v(" "),i("p",[t._v("PX4 supports fixed-wing takeoff in "),i("a",{attrs:{href:"#mission-takeoff"}},[t._v("missions")]),t._v(" and using the "),i("a",{attrs:{href:"#takeoff-flight-mode"}},[t._v("Takeoff")]),t._v(" flight mode. Vehicles can be "),i("em",[t._v("catapult/hand-launched")]),t._v(" or use the runway takeoff mode. "),t._v("\nIn all cases the vehicle takes off at a predefined pitch in its current direction (RC stick input is ignored).")]),t._v(" "),i("p",[t._v("The sections below explain the main methods.")]),t._v(" "),i("h2",{attrs:{id:"position-flight-mode"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#position-flight-mode"}},[t._v("#")]),t._v(" Position Flight Mode")]),t._v(" "),i("p",[t._v("The vehicle will takeoff in "),i("RouterLink",{attrs:{to:"/zh/flight_modes/position_fw.html"}},[t._v("Position mode")]),t._v(" if it detects sufficient launch acceleration when launched at an altitude below "),i("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FW_CLMBOUT_DIFF"}},[t._v("FW_CLMBOUT_DIFF")]),t._v(".")],1),t._v(" "),i("p",[t._v("To launch in this mode:")]),t._v(" "),i("ul",[i("li",[t._v("Arm the vehicle.")]),t._v(" "),i("li",[t._v("Put the vehicle into "),i("em",[t._v("Position mode")]),t._v(".")]),t._v(" "),i("li",[t._v("Launch/throw the vehicle (firmly) directly into the wind.")])]),t._v(" "),i("p",[t._v("The vehicle will ascend to "),i("code",[t._v("FW_CLMBOUT_DIFF")]),t._v(" using the same climbout behaviour as for "),i("a",{attrs:{href:"#takeoff-flight-mode"}},[t._v("Takeoff mode")]),t._v(". It will then continue in "),i("em",[t._v("Postion mode")]),t._v(".")]),t._v(" "),i("h2",{attrs:{id:"takeoff-flight-mode"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#takeoff-flight-mode"}},[t._v("#")]),t._v(" Takeoff Flight Mode")]),t._v(" "),i("p",[i("RouterLink",{attrs:{to:"/zh/flight_modes/takeoff.html#fixed_wing"}},[t._v("Takeoff Mode")]),t._v(" enables takeoff using either "),i("em",[t._v("catapult/hand-launch")]),t._v(" (default) or "),i("em",[t._v("runway takeoff")]),t._v(".")],1),t._v(" "),i("h3",{attrs:{id:"catapult-hand-launch-mode"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#catapult-hand-launch-mode"}},[t._v("#")]),t._v(" Catapult/Hand-Launch Mode")]),t._v(" "),i("p",[t._v("When armed and in takeoff mode the vehicle waits to detect launch (i.e. from acceleration due to catapult or hand launch). On launch detection, the vehicle ramps up to maximum throttle ("),i("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#RWTO_MAX_THR"}},[t._v("RWTO_MAX_THR")]),t._v(") in about 2 seconds and then performs a full throttle climbout at a 10 degree pitch. The vehicle climbout phase ends once the vehicle reaches the correct altitude (defined by "),i("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FW_CLMBOUT_DIFF"}},[t._v("FW_CLMBOUT_DIFF")]),t._v("), after which regular navigation proceeds. All RC stick movement is ignored until climbout ends.")],1),t._v(" "),i("div",{staticClass:"custom-block warning"},[i("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),i("p",[t._v("The default climbout pitch may not be suitable for some vehicles. ")])]),t._v(" "),i("p",[t._v("To launch in this mode:")]),t._v(" "),i("ul",[i("li",[t._v("Arm the vehicle.")]),t._v(" "),i("li",[t._v("Put the vehicle into "),i("em",[t._v("Takeoff mode")]),t._v(".")]),t._v(" "),i("li",[t._v("Launch/throw the vehicle (firmly) directly into the wind.")])]),t._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),i("p",[t._v("Most traditional fixed-wing vehicles must be flat and level on release (it is important the nose is neither up or down, and that the vehicle is not rolling/yawing).")])]),t._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),i("p",[t._v("Some users report improved takeoff performance by pre-triggering launch detection and ramping up to full throttle before release (to trigger launch detection pump/shake the aircraft forward).")])]),t._v(" "),i("h3",{attrs:{id:"runway-takeoff-mode"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#runway-takeoff-mode"}},[t._v("#")]),t._v(" Runway Takeoff Mode")]),t._v(" "),i("p",[t._v("Runway takeoff mode is enabled using "),i("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#RWTO_TKOFF"}},[t._v("RWTO_TKOFF")]),t._v(".")],1),t._v(" "),i("p",[t._v("The mode is documented in "),i("RouterLink",{attrs:{to:"/zh/flight_modes/takeoff.html#runway_launch"}},[t._v("Takeoff Mode > Fixed Wing > Runway Takeoff")]),t._v(".")],1),t._v(" "),i("h2",{attrs:{id:"mission-takeoff"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#mission-takeoff"}},[t._v("#")]),t._v(" Mission Takeoff")]),t._v(" "),i("p",[t._v("You can also hand/catapult launch a fixed wing vehicle in a mission.")]),t._v(" "),i("p",[t._v("To launch in a mission:")]),t._v(" "),i("ol",[i("li",[t._v("Add a fixed wing takeoff item to the "),i("strong",[t._v("start")]),t._v(" of the mission.")])]),t._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),i("p",[t._v("Set the takeoff item minimum pitch parameter to an appropriate value for your airframe!")])]),t._v(" "),i("ol",[i("li",[t._v("Switch to mission mode.")]),t._v(" "),i("li",[t._v("Arm the vehicle.")]),t._v(" "),i("li",[t._v("Launch/throw the vehicle (firmly) directly into the wind.")])]),t._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),i("p",[t._v("Most traditional fixed-wing vehicles must be flat and level on release (it is important the nose is neither up or down, and that the vehicle is not rolling/yawing).")])]),t._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),i("p",[t._v("Some users report improved takeoff performance by pre-triggering launch detection and ramping up to full throttle before release (to trigger launch detection pump/shake the aircraft forward).")])]),t._v(" "),i("p",[t._v("Once launch/flight is detected the vehicle climbs out (using the minimum pitch parameter in the Takeoff waypoint) and navigates  towards the location of the Takeoff waypoint. It continues climbing until it reaches < "),i("code",[t._v("FW_CLMBOUT_DIFF")]),t._v(" below the takeoff waypoint altitude (if it reaches the target waypoint before achieving this altitude it spirals up to this level).")]),t._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),i("p",[t._v("The roll angle is limited to a maximum of 15 degrees during climbout ("),i("code",[t._v("FW_CLMBOUT_DIFF is > 0")]),t._v(" and distance to takeoff altitude is > "),i("code",[t._v("FW_CLMBOUT_DIFF")]),t._v(").")])]),t._v(" "),i("p",[t._v("The mission transitions to the next waypoint when it has reached the altitude (within "),i("code",[t._v("FW_CLMBOUT_DIFF")]),t._v(") and location.")])])}),[],!1,null,null,null);e.default=o.exports}}]);