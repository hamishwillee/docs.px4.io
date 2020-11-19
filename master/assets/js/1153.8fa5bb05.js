(window.webpackJsonp=window.webpackJsonp||[]).push([[1153],{2449:function(e,t,i){"use strict";i.r(t);var a=i(18),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"fixed-wing-takeoff"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#fixed-wing-takeoff"}},[e._v("#")]),e._v(" Fixed Wing Takeoff")]),e._v(" "),i("p",[e._v("PX4 supports fixed-wing takeoff in "),i("a",{attrs:{href:"#mission"}},[e._v("missions")]),e._v(" and using the "),i("a",{attrs:{href:"#takeoff"}},[e._v("Takeoff")]),e._v(" flight mode. Vehicles can be "),i("em",[e._v("catapult/hand-launched")]),e._v(" or use the runway takeoff mode. "),e._v("\nIn all cases the vehicle takes off at a predefined pitch in its current direction (RC stick input is ignored).")]),e._v(" "),i("p",[e._v("The sections below explain the main methods.")]),e._v(" "),i("h2",{attrs:{id:"position-flight-mode-position"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#position-flight-mode-position"}},[e._v("#")]),e._v(" Position Flight Mode {#position}")]),e._v(" "),i("p",[e._v("The vehicle will takeoff in "),i("RouterLink",{attrs:{to:"/zh/flight_modes/position_fw.html"}},[e._v("Position mode")]),e._v(" if it detects sufficient launch acceleration when launched at an altitude below "),i("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FW_CLMBOUT_DIFF"}},[e._v("FW_CLMBOUT_DIFF")]),e._v(".")],1),e._v(" "),i("p",[e._v("To launch in this mode:")]),e._v(" "),i("ul",[i("li",[e._v("Arm the vehicle.")]),e._v(" "),i("li",[e._v("Put the vehicle into "),i("em",[e._v("Position mode")]),e._v(".")]),e._v(" "),i("li",[e._v("Launch/throw the vehicle (firmly) directly into the wind.")])]),e._v(" "),i("p",[e._v("The vehicle will ascend to "),i("code",[e._v("FW_CLMBOUT_DIFF")]),e._v(" using the same climbout behaviour as for "),i("a",{attrs:{href:"#takeoff"}},[e._v("Takeoff mode")]),e._v(". It will then continue in "),i("em",[e._v("Postion mode")]),e._v(".")]),e._v(" "),i("h2",{attrs:{id:"takeoff-flight-mode-takeoff"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#takeoff-flight-mode-takeoff"}},[e._v("#")]),e._v(" Takeoff Flight Mode {#takeoff}")]),e._v(" "),i("p",[i("RouterLink",{attrs:{to:"/zh/flight_modes/takeoff.html#fixed_wing"}},[e._v("Takeoff Mode")]),e._v(" enables takeoff using either "),i("em",[e._v("catapult/hand-launch")]),e._v(" (default) or "),i("em",[e._v("runway takeoff")]),e._v(".")],1),e._v(" "),i("h3",{attrs:{id:"catapult-hand-launch-mode"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#catapult-hand-launch-mode"}},[e._v("#")]),e._v(" Catapult/Hand-Launch Mode")]),e._v(" "),i("p",[e._v("When armed and in takeoff mode the vehicle waits to detect launch (i.e. from acceleration due to catapult or hand launch). On launch detection, the vehicle ramps up to to maximum throttle ("),i("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#RWTO_MAX_THR"}},[e._v("RWTO_MAX_THR")]),e._v(") in about 2 seconds and then performs a full throttle climbout at a 10 degree pitch. The vehicle climbout phase ends once the vehicle reaches the correct altitude (defined by "),i("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FW_CLMBOUT_DIFF"}},[e._v("FW_CLMBOUT_DIFF")]),e._v("), after which regular navigation proceeds. All RC stick movement is ignored until climbout ends.")],1),e._v(" "),i("blockquote",[i("p",[i("strong",[e._v("Warning")]),e._v(" The default climbout pitch may not be suitable for some vehicles. ")])]),e._v(" "),i("p",[e._v("To launch in this mode:")]),e._v(" "),i("ul",[i("li",[e._v("Arm the vehicle.")]),e._v(" "),i("li",[e._v("Put the vehicle into "),i("em",[e._v("Takeoff mode")]),e._v(".")]),e._v(" "),i("li",[e._v("Launch/throw the vehicle (firmly) directly into the wind.")])]),e._v(" "),i("blockquote",[i("p",[i("strong",[e._v("Note")]),e._v(" Most traditional fixed-wing vehicles must be flat and level on release (it is important the nose is neither up or down, and that the vehicle is not rolling/yawing).")])]),e._v(" "),i("p",[i("span")]),e._v(" "),i("blockquote",[i("p",[i("strong",[e._v("Tip")]),e._v(" Some users report improved takeoff performance by pre-triggering launch detection and ramping up to full throttle before release (to trigger launch detection pump/shake the aircraft forward).")])]),e._v(" "),i("h3",{attrs:{id:"runway-takeoff-mode"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#runway-takeoff-mode"}},[e._v("#")]),e._v(" Runway Takeoff Mode")]),e._v(" "),i("p",[e._v("Runway takeoff mode is enabled using "),i("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#RWTO_TKOFF"}},[e._v("RWTO_TKOFF")]),e._v(".")],1),e._v(" "),i("p",[e._v("The mode is documented in "),i("RouterLink",{attrs:{to:"/zh/flight_modes/takeoff.html#runway_launch"}},[e._v("Takeoff Mode > Fixed Wing > Runway Takeoff")]),e._v(".")],1),e._v(" "),i("h2",{attrs:{id:"mission-takeoff-mission"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#mission-takeoff-mission"}},[e._v("#")]),e._v(" Mission Takeoff {#mission}")]),e._v(" "),i("p",[e._v("You can also hand/catapult launch a fixed wing vehicle in a mission.")]),e._v(" "),i("p",[e._v("To launch in a mission:")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("Add a fixed wing takeoff item to the "),i("strong",[e._v("start")]),e._v(" of the mission.")]),e._v(" "),i("blockquote",[i("p",[i("strong",[e._v("Tip")]),e._v(" Set the takeoff item minimum pitch parameter to an appropriate value for your airframe!")])])]),e._v(" "),i("li",[i("p",[e._v("Switch to mission mode.")])]),e._v(" "),i("li",[i("p",[e._v("Arm the vehicle.")])]),e._v(" "),i("li",[i("p",[e._v("Launch/throw the vehicle (firmly) directly into the wind.")])])]),e._v(" "),i("blockquote",[i("p",[i("strong",[e._v("Note")]),e._v(" Most traditional fixed-wing vehicles must be flat and level on release (it is important the nose is neither up or down, and that the vehicle is not rolling/yawing).")])]),e._v(" "),i("p",[i("span")]),e._v(" "),i("blockquote",[i("p",[i("strong",[e._v("Tip")]),e._v(" Some users report improved takeoff performance by pre-triggering launch detection and ramping up to full throttle before release (to trigger launch detection pump/shake the aircraft forward).")])]),e._v(" "),i("p",[e._v("Once launch/flight is detected the vehicle climbs out (using the minimum pitch parameter in the the Takeoff waypoint) and navigates  towards the location of the Takeoff waypoint. It continues climbing until it reaches < "),i("code",[e._v("FW_CLMBOUT_DIFF")]),e._v(" below the takeoff waypoint altitude (if it reaches the target waypoint before achieving this altitude it spirals up to this level).")]),e._v(" "),i("blockquote",[i("p",[i("strong",[e._v("Note")]),e._v(" The roll angle is limited to a maximum of 15 degrees during climbout ("),i("code",[e._v("FW_CLMBOUT_DIFF is > 0")]),e._v(" and distance to takeoff altitude is > "),i("code",[e._v("FW_CLMBOUT_DIFF")]),e._v(").")])]),e._v(" "),i("p",[e._v("The mission transitions to the next waypoint when it has reached the altitude (within "),i("code",[e._v("FW_CLMBOUT_DIFF")]),e._v(") and location.")])])}),[],!1,null,null,null);t.default=o.exports}}]);