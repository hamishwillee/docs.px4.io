(window.webpackJsonp=window.webpackJsonp||[]).push([[541],{1682:function(t,e,a){"use strict";a.r(e);var i=a(19),_=Object(i.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"takeoff-mode"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#takeoff-mode"}},[t._v("#")]),t._v(" Takeoff Mode")]),t._v(" "),i("p",[i("RouterLink",{attrs:{to:"/en/getting_started/flight_modes.html#key_position_fixed"}},[i("img",{attrs:{src:a(326),title:"Position fix required (e.g. GPS)",width:"30px"}})])],1),t._v(" "),i("p",[t._v("The "),i("em",[t._v("Takeoff")]),t._v(" flight mode causes the vehicle to take off to a specified height and wait for further input.")]),t._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),i("ul",[i("li",[t._v("This mode requires a good position estimate (e.g. from GPS).")]),t._v(" "),i("li",[t._v("The vehicle must be armed before this mode can be engaged.")]),t._v(" "),i("li",[t._v("This mode is automatic - no user intervention is "),i("em",[t._v("required")]),t._v(" to control the vehicle.")]),t._v(" "),i("li",[t._v("RC control switches can be used to change flight modes on any vehicle.")]),t._v(" "),i("li",[t._v("RC stick movement in a multicopter (or VTOL in multicopter mode) will "),i("a",{attrs:{href:"#COM_RC_OVERRIDE"}},[t._v("by default")]),t._v(" change the vehicle to "),i("RouterLink",{attrs:{to:"/en/flight_modes/position_mc.html"}},[t._v("Position mode")]),t._v(" unless handling a critical battery failsafe.")],1),t._v(" "),i("li",[t._v("The "),i("RouterLink",{attrs:{to:"/en/config/safety.html#failure_detector"}},[t._v("Failure Detector")]),t._v(" will automatically stop the engines if there is a problem on takeoff.")],1)])]),t._v(" "),i("p",[t._v("The specific behaviour for each vehicle type is described below.")]),t._v(" "),i("h2",{attrs:{id:"multi-copter-mc"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#multi-copter-mc"}},[t._v("#")]),t._v(" Multi-copter (MC)")]),t._v(" "),i("p",[t._v("A multi rotor ascends to the altitude defined in "),i("code",[t._v("MIS_TAKEOFF_ALT")]),t._v(" and holds position.")]),t._v(" "),i("p",[t._v("RC stick movement will change the vehicle to "),i("RouterLink",{attrs:{to:"/en/flight_modes/position_mc.html"}},[t._v("Position mode")]),t._v(" (by "),i("a",{attrs:{href:"#COM_RC_OVERRIDE"}},[t._v("default")]),t._v(").")],1),t._v(" "),i("p",[t._v("Takeoff is affected by the following parameters:")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",[t._v("Parameter")]),t._v(" "),i("th",[t._v("Description")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[i("span",{attrs:{id:"MIS_TAKEOFF_ALT"}}),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MIS_TAKEOFF_ALT"}},[t._v("MIS_TAKEOFF_ALT")])],1),t._v(" "),i("td",[t._v("Target altitude during takeoff (default: 2.5m)")])]),t._v(" "),i("tr",[i("td",[i("span",{attrs:{id:"MPC_TKO_SPEED"}}),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MPC_TKO_SPEED"}},[t._v("MPC_TKO_SPEED")])],1),t._v(" "),i("td",[t._v("Speed of ascent (default: 1.5m/s)")])]),t._v(" "),i("tr",[i("td",[i("span",{attrs:{id:"COM_RC_OVERRIDE"}}),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#COM_RC_OVERRIDE"}},[t._v("COM_RC_OVERRIDE")])],1),t._v(" "),i("td",[t._v("Controls whether stick movement on a multicopter (or VTOL in MC mode) causes a mode change to "),i("RouterLink",{attrs:{to:"/en/flight_modes/position_mc.html"}},[t._v("Position mode")]),t._v(". This can be separately enabled for auto modes and for offboard mode, and is enabled in auto modes by default.")],1)]),t._v(" "),i("tr",[i("td",[i("span",{attrs:{id:"COM_RC_STICK_OV"}}),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#COM_RC_STICK_OV"}},[t._v("COM_RC_STICK_OV")])],1),t._v(" "),i("td",[t._v("The amount of stick movement that causes a transition to "),i("RouterLink",{attrs:{to:"/en/flight_modes/position_mc.html"}},[t._v("Position mode")]),t._v(" (if "),i("a",{attrs:{href:"#COM_RC_OVERRIDE"}},[t._v("COM_RC_OVERRIDE")]),t._v(" is enabled).")],1)])])]),t._v(" "),i("p",[i("span",{attrs:{id:"fixed_wing"}})]),t._v(" "),i("h2",{attrs:{id:"fixed-wing-fw"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#fixed-wing-fw"}},[t._v("#")]),t._v(" Fixed Wing (FW)")]),t._v(" "),i("p",[t._v("The aircraft takes off in the current direction using either "),i("em",[t._v("catapult/hand-launch mode")]),t._v(" or "),i("em",[t._v("runway takeoff mode")]),t._v(".\nThe mode defaults to catapult/hand launch, but can be set to runway takeoff using "),i("a",{attrs:{href:"#RWTO_TKOFF"}},[t._v("RWTO_TKOFF")]),t._v(".\nRC stick movement is ignored in both cases.")]),t._v(" "),i("p",[i("span",{attrs:{id:"hand_launch"}})]),t._v(" "),i("h3",{attrs:{id:"catapult-hand-launch"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#catapult-hand-launch"}},[t._v("#")]),t._v(" Catapult/Hand Launch")]),t._v(" "),i("p",[t._v("In "),i("em",[t._v("catapult/hand launch mode")]),t._v(" the vehicle waits to detect launch (based on acceleration trigger).\nOn launch it ramps up to full throttle ("),i("a",{attrs:{href:"#RWTO_MAX_THR"}},[t._v("RWTO_MAX_THR")]),t._v(") in about 2 seconds and then performs a full throttle climbout, with "),i("em",[t._v("minimum")]),t._v(" 10 degree takeoff pitch.\nOnce it reaches "),i("a",{attrs:{href:"#FW_CLMBOUT_DIFF"}},[t._v("FW_CLMBOUT_DIFF")]),t._v(" it will transition to "),i("RouterLink",{attrs:{to:"/en/flight_modes/hold.html"}},[t._v("Hold mode")]),t._v(" and loiter.")],1),t._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),i("p",[t._v("In addition to the behaviour discussed above there is also a launch detector that may block the launch sequence from starting until some condition is met.\nFor catapult launch this is some acceleration threshold.")])]),t._v(" "),i("p",[i("span",{attrs:{id:"runway_launch"}})]),t._v(" "),i("h3",{attrs:{id:"runway-takeoff"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#runway-takeoff"}},[t._v("#")]),t._v(" Runway Takeoff")]),t._v(" "),i("p",[t._v("The "),i("em",[t._v("runway takeoff mode")]),t._v(" has the following phases:")]),t._v(" "),i("ol",[i("li",[i("strong",[t._v("Throttle ramp")]),t._v(": Clamped to the runway (pitch fixed, no roll, and heading hold) until reach the minimum airspeed for takeoff ("),i("a",{attrs:{href:"#FW_AIRSPD_MIN"}},[t._v("FW_AIRSPD_MIN")]),t._v(" x "),i("a",{attrs:{href:"#RWTO_AIRSPD_SCL"}},[t._v("RWTO_AIRSPD_SCL")]),t._v(").")]),t._v(" "),i("li",[i("strong",[t._v("Takeoff")]),t._v(": Increase pitch and continue until vehicle altitude > navigation altitude ("),i("a",{attrs:{href:"#RWTO_NAV_ALT"}},[t._v("RWTO_NAV_ALT")]),t._v(").")]),t._v(" "),i("li",[i("strong",[t._v("Climbout")]),t._v(": Climb until altitude above ground level > "),i("a",{attrs:{href:"#FW_CLMBOUT_DIFF"}},[t._v("FW_CLMBOUT_DIFF")]),t._v(".\nIn this phase roll and heading restrictions are removed.")])]),t._v(" "),i("h3",{attrs:{id:"fixed-wing-takeoff-parameters"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#fixed-wing-takeoff-parameters"}},[t._v("#")]),t._v(" Fixed Wing Takeoff Parameters")]),t._v(" "),i("p",[t._v("Takeoff is affected by the following parameters:")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",[t._v("Parameter")]),t._v(" "),i("th",[t._v("Description")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[i("span",{attrs:{id:"RWTO_TKOFF"}}),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#RWTO_TKOFF"}},[t._v("RWTO_TKOFF")])],1),t._v(" "),i("td",[t._v("Runway takeoff with landing gear. Default: disabled.")])]),t._v(" "),i("tr",[i("td",[i("span",{attrs:{id:"RWTO_MAX_THR"}}),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#RWTO_MAX_THR"}},[t._v("RWTO_MAX_THR")])],1),t._v(" "),i("td",[t._v("Max throttle during runway takeoff.")])]),t._v(" "),i("tr",[i("td",[i("span",{attrs:{id:"FW_CLMBOUT_DIFF"}}),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#FW_CLMBOUT_DIFF"}},[t._v("FW_CLMBOUT_DIFF")])],1),t._v(" "),i("td",[t._v("Climbout Altitude difference. This is used as the target altitude if taking off without a takeoff altitude setpoint (there is no setpoint in takeoff mode, but there is in missions).")])]),t._v(" "),i("tr",[i("td",[i("span",{attrs:{id:"FW_AIRSPD_MIN"}}),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#FW_AIRSPD_MIN"}},[t._v("FW_AIRSPD_MIN")])],1),t._v(" "),i("td",[t._v("Minimum Airspeed, below which the TECS controller will try to increase airspeed more aggressively.")])]),t._v(" "),i("tr",[i("td",[i("span",{attrs:{id:"RWTO_AIRSPD_SCL"}}),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#RWTO_AIRSPD_SCL"}},[t._v("RWTO_AIRSPD_SCL")])],1),t._v(" "),i("td",[t._v("Min. airspeed scaling factor for takeoff. Pitch is increased when the airspeed reaches: "),i("code",[t._v("FW_AIRSPD_MIN")]),t._v(" * "),i("code",[t._v("RWTO_AIRSPD_SCL")])])]),t._v(" "),i("tr",[i("td",[i("span",{attrs:{id:"RWTO_NAV_ALT"}}),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#RWTO_NAV_ALT"}},[t._v("RWTO_NAV_ALT")])],1),t._v(" "),i("td",[t._v("Altitude above ground level (AGL) at which we have enough ground clearance to allow some roll. Until "),i("code",[t._v("RWTO_NAV_ALT")]),t._v(" is reached the plane is held level and only rudder is used to keep the heading (see "),i("span",{attrs:{id:"RWTO_HDG"}}),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#RWTO_HDG"}},[t._v("RWTO_HDG")]),t._v("). This should be below "),i("code",[t._v("FW_CLMBOUT_DIFF")]),t._v(" if "),i("code",[t._v("FW_CLMBOUT_DIFF")]),t._v(" > 0.")],1)])])]),t._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),i("p",[t._v("The vehicle always respects normal FW max/min throttle settings during takeoff ("),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#FW_THR_MIN"}},[t._v("FW_THR_MIN")]),t._v(", "),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#FW_THR_MAX"}},[t._v("FW_THR_MAX")]),t._v(").")],1)]),t._v(" "),i("h2",{attrs:{id:"vtol"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#vtol"}},[t._v("#")]),t._v(" VTOL")]),t._v(" "),i("p",[t._v("VTOLs default to MC mode on boot, and it is generally expected that they will take off in "),i("a",{attrs:{href:"#multi-copter-mc"}},[t._v("multicopter mode")]),t._v(" (and also safer).")]),t._v(" "),i("p",[t._v("That said, if transitioned to Fixed wing before takeoff, they will takeoff in "),i("a",{attrs:{href:"#fixed_wing"}},[t._v("Fixed Wing")]),t._v(" mode.")])])}),[],!1,null,null,null);e.default=_.exports},326:function(t,e,a){t.exports=a.p+"assets/img/position_fixed.c1403cf0.svg"}}]);