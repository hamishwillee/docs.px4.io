(window.webpackJsonp=window.webpackJsonp||[]).push([[700],{1991:function(e,t,a){"use strict";a.r(t);var _=a(19),r=Object(_.a)({},(function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h1",{attrs:{id:"takeoff-mode"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#takeoff-mode"}},[e._v("#")]),e._v(" Takeoff Mode")]),e._v(" "),_("p",[_("RouterLink",{attrs:{to:"/en/getting_started/flight_modes.html#key_position_fixed"}},[_("img",{attrs:{src:a(327),title:"Position fix required (e.g. GPS)",width:"30px"}})])],1),e._v(" "),_("p",[e._v("The "),_("em",[e._v("Takeoff")]),e._v(" flight mode causes the vehicle to take off to a specified height and wait for further input.")]),e._v(" "),_("div",{staticClass:"custom-block note"},[_("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),_("ul",[_("li",[e._v("This mode requires a good position estimate (e.g. from GPS).")]),e._v(" "),_("li",[e._v("The vehicle must be armed before this mode can be engaged.")]),e._v(" "),_("li",[e._v("This mode is automatic - no user intervention is "),_("em",[e._v("required")]),e._v(" to control the vehicle.")]),e._v(" "),_("li",[e._v("RC control switches can be used to change flight modes on any vehicle.")]),e._v(" "),_("li",[e._v("RC stick movement in a multicopter (or VTOL in multicopter mode) will "),_("a",{attrs:{href:"#COM_RC_OVERRIDE"}},[e._v("by default")]),e._v(" change the vehicle to "),_("RouterLink",{attrs:{to:"/en/flight_modes/position_mc.html"}},[e._v("Position mode")]),e._v(" unless handling a critical battery failsafe.")],1),e._v(" "),_("li",[e._v("The "),_("RouterLink",{attrs:{to:"/en/config/safety.html#failure-detector"}},[e._v("Failure Detector")]),e._v(" will automatically stop the engines if there is a problem on takeoff.")],1)])]),e._v(" "),_("p",[e._v("The specific behaviour for each vehicle type is described below.")]),e._v(" "),_("h2",{attrs:{id:"multi-copter-mc"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#multi-copter-mc"}},[e._v("#")]),e._v(" Multi-copter (MC)")]),e._v(" "),_("p",[e._v("A multi rotor ascends to the altitude defined in "),_("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MIS_TAKEOFF_ALT"}},[e._v("MIS_TAKEOFF_ALT")]),e._v(" and holds position.")],1),e._v(" "),_("p",[e._v("RC stick movement will change the vehicle to "),_("RouterLink",{attrs:{to:"/en/flight_modes/position_mc.html"}},[e._v("Position mode")]),e._v(" (by "),_("a",{attrs:{href:"#COM_RC_OVERRIDE"}},[e._v("default")]),e._v(").")],1),e._v(" "),_("p",[e._v("Takeoff is affected by the following parameters:")]),e._v(" "),_("table",[_("thead",[_("tr",[_("th",[e._v("Parameter")]),e._v(" "),_("th",[e._v("Description")])])]),e._v(" "),_("tbody",[_("tr",[_("td",[_("span",{attrs:{id:"MIS_TAKEOFF_ALT"}}),_("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MIS_TAKEOFF_ALT"}},[e._v("MIS_TAKEOFF_ALT")])],1),e._v(" "),_("td",[e._v("Target altitude during takeoff (default: 2.5m)")])]),e._v(" "),_("tr",[_("td",[_("span",{attrs:{id:"MPC_TKO_SPEED"}}),_("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MPC_TKO_SPEED"}},[e._v("MPC_TKO_SPEED")])],1),e._v(" "),_("td",[e._v("Speed of ascent (default: 1.5m/s)")])]),e._v(" "),_("tr",[_("td",[_("span",{attrs:{id:"COM_RC_OVERRIDE"}}),_("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#COM_RC_OVERRIDE"}},[e._v("COM_RC_OVERRIDE")])],1),e._v(" "),_("td",[e._v("Controls whether stick movement on a multicopter (or VTOL in MC mode) causes a mode change to "),_("RouterLink",{attrs:{to:"/en/flight_modes/position_mc.html"}},[e._v("Position mode")]),e._v(". This can be separately enabled for auto modes and for offboard mode, and is enabled in auto modes by default.")],1)]),e._v(" "),_("tr",[_("td",[_("span",{attrs:{id:"COM_RC_STICK_OV"}}),_("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#COM_RC_STICK_OV"}},[e._v("COM_RC_STICK_OV")])],1),e._v(" "),_("td",[e._v("The amount of stick movement that causes a transition to "),_("RouterLink",{attrs:{to:"/en/flight_modes/position_mc.html"}},[e._v("Position mode")]),e._v(" (if "),_("a",{attrs:{href:"#COM_RC_OVERRIDE"}},[e._v("COM_RC_OVERRIDE")]),e._v(" is enabled)")],1)])])]),e._v(" "),_("p",[_("a",{attrs:{id:"fixed_wing"}})]),e._v(" "),_("h2",{attrs:{id:"fixed-wing-fw"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#fixed-wing-fw"}},[e._v("#")]),e._v(" Fixed-wing (FW)")]),e._v(" "),_("p",[e._v("Automatic takeoff has two modalities: "),_("em",[e._v("catapult/hand-launch")]),e._v(" or "),_("em",[e._v("runway takeoff")]),e._v(".\nThe mode defaults to catapult/hand launch, but can be set to runway takeoff by setting "),_("a",{attrs:{href:"#RWTO_TKOFF"}},[e._v("RWTO_TKOFF")]),e._v(" to 1.")]),e._v(" "),_("p",[e._v("There are two ways to start an automatic takeoff on fixed-wing vehicles: either by "),_("RouterLink",{attrs:{to:"/en/flight_modes/mission.html#fw-mission-takeoff"}},[e._v("planning a mission takeoff")]),e._v(" and starting the mission, or by switching to the "),_("em",[e._v("Takeoff mode")]),e._v(" and arming the vehicle.")],1),e._v(" "),_("p",[e._v("In both cases, a flight path (starting point and takeoff course) and clearance altitude are defined.\nThe flight path takes the vehicle's current position as starting point when the takeoff mode is first entered, and a straight line from this starting point continues in the direction of the defined course indefinitely.\nOn takeoff, the aircraft will follow this line, climbing at the maximum climb rate ("),_("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#FW_T_CLMB_MAX"}},[e._v("FW_T_CLMB_MAX")]),e._v(") until reaching the clearance altitude.")],1),e._v(" "),_("p",[e._v("In "),_("em",[e._v("Takeoff mode")]),e._v(" (non-mission takeoffs), the course is set to the vehicle heading on arming, and the clearance altitude is set to "),_("a",{attrs:{href:"#MIS_TAKEOFF_ALT"}},[e._v("MIS_TAKEOFF_ALT")]),e._v(".\nReaching the clearance altitude causes the vehicle to enter "),_("em",[e._v("Hold mode")]),e._v(".")]),e._v(" "),_("p",[e._v("In "),_("RouterLink",{attrs:{to:"/en/flight_modes/mission.html"}},[e._v("Mission mode")]),e._v(" the operator defines the takeoff course and clearance altitude in the Takeoff mission item.\nThe course is defined by the line between the vehicle starting point and the mission item horizontal position, and the clearance altitude is the mission item altitude.\nReaching the mission item altitude triggers the next mission item.")],1),e._v(" "),_("p",[e._v("Parameters that apply to both catapult/hand-launch as well as runway takeoffs:")]),e._v(" "),_("table",[_("thead",[_("tr",[_("th",[e._v("Parameter")]),e._v(" "),_("th",[e._v("Description")])])]),e._v(" "),_("tbody",[_("tr",[_("td",[_("span",{attrs:{id:"MIS_TAKEOFF_ALT"}}),_("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MIS_TAKEOFF_ALT"}},[e._v("MIS_TAKEOFF_ALT")])],1),e._v(" "),_("td",[e._v("Minimum altitude setpoint above Home that the vehicle will climb to during takeoff.")])]),e._v(" "),_("tr",[_("td",[_("span",{attrs:{id:"FW_TKO_AIRSPD"}}),_("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#FW_TKO_AIRSPD"}},[e._v("FW_TKO_AIRSPD")])],1),e._v(" "),_("td",[e._v("Takeoff airspeed (is set to "),_("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#FW_AIRSPD_MIN"}},[e._v("FW_AIRSPD_MIN")]),e._v(" if not defined by operator)")],1)]),e._v(" "),_("tr",[_("td",[_("span",{attrs:{id:"FW_TKO_PITCH_MIN"}}),_("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#FW_TKO_PITCH_MIN"}},[e._v("FW_TKO_PITCH_MIN")])],1),e._v(" "),_("td",[e._v("This is the minimum pitch angle setpoint during the climbout phase")])])])]),e._v(" "),_("p",[_("span",{attrs:{id:"hand_launch"}})]),e._v(" "),_("h3",{attrs:{id:"catapult-hand-launch"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#catapult-hand-launch"}},[e._v("#")]),e._v(" Catapult/Hand Launch")]),e._v(" "),_("p",[e._v("In "),_("em",[e._v("catapult/hand-launch mode")]),e._v(" the vehicle waits to detect launch (based on acceleration trigger).\nOn launch it enables the motor and climbs with the maximum climb rate "),_("a",{attrs:{href:"#FW_T_CLMB_MAX"}},[e._v("FW_T_CLMB_MAX")]),e._v(" while keeping the pitch setpoint above "),_("a",{attrs:{href:"#FW_TKO_PITCH_MIN"}},[e._v("FW_TKO_PITCH_MIN")]),e._v(".\nOnce it reaches "),_("a",{attrs:{href:"#MIS_TAKEOFF_ALT"}},[e._v("MIS_TAKEOFF_ALT")]),e._v(" it will automatically switch to "),_("RouterLink",{attrs:{to:"/en/flight_modes/hold.html"}},[e._v("Hold mode")]),e._v(" and loiter.")],1),e._v(" "),_("p",[e._v("All RC stick movement is ignored during the full takeoff sequence.")]),e._v(" "),_("p",[e._v("To launch in this mode:")]),e._v(" "),_("ul",[_("li",[e._v("Arm the vehicle")]),e._v(" "),_("li",[e._v("Put the vehicle into "),_("em",[e._v("Takeoff mode")])]),e._v(" "),_("li",[e._v("Launch/throw the vehicle (firmly) directly into the wind.\nYou can also shake the vehicle first, wait till the motor spins up and throw only then")])]),e._v(" "),_("p",[e._v("The "),_("em",[e._v("launch detector")]),e._v(" is affected by the following parameters:")]),e._v(" "),_("table",[_("thead",[_("tr",[_("th",[e._v("Parameter")]),e._v(" "),_("th",[e._v("Description")])])]),e._v(" "),_("tbody",[_("tr",[_("td",[_("span",{attrs:{id:"LAUN_ALL_ON"}}),_("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#LAUN_ALL_ON"}},[e._v("LAUN_ALL_ON")])],1),e._v(" "),_("td",[e._v("Enable automatic launch detection. If disabled motors spin up on arming already")])]),e._v(" "),_("tr",[_("td",[_("span",{attrs:{id:"FW_LAUN_AC_THLD"}}),_("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#FW_LAUN_AC_THLD"}},[e._v("FW_LAUN_AC_THLD")])],1),e._v(" "),_("td",[e._v("Acceleration threshold (acceleration in body-forward direction must be above this value)")])]),e._v(" "),_("tr",[_("td",[_("span",{attrs:{id:"FW_LAUN_AC_T"}}),_("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#FW_LAUN_AC_T"}},[e._v("FW_LAUN_AC_T")])],1),e._v(" "),_("td",[e._v("Trigger time (acceleration must be above threshold for this amount of seconds)")])]),e._v(" "),_("tr",[_("td",[_("span",{attrs:{id:"FW_LAUN_MOT_DEL"}}),_("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#FW_LAUN_MOT_DEL"}},[e._v("FW_LAUN_MOT_DEL")])],1),e._v(" "),_("td",[e._v("Delay from launch detection to motor spin up")])])])]),e._v(" "),_("p",[_("span",{attrs:{id:"runway_launch"}})]),e._v(" "),_("h3",{attrs:{id:"runway-takeoff"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#runway-takeoff"}},[e._v("#")]),e._v(" Runway Takeoff")]),e._v(" "),_("p",[e._v("Runway takeoffs can be used by vehicles with landing gear and and steerable wheel (only).\nYou will first need to enable the wheel controller using the parameter "),_("a",{attrs:{href:"#FW_W_EN"}},[e._v("FW_W_EN")]),e._v(".")]),e._v(" "),_("p",[e._v('Vehicle should be centered and aligned with runway when takeoff is initiated.\nThe operator can "nudge" the vehicle while on the runway to help keeping it centered and aligned (see '),_("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#RWTO_NUDGE"}},[e._v("RWTO_NUDGE")]),e._v(").")],1),e._v(" "),_("p",[e._v("The "),_("em",[e._v("runway takeoff mode")]),e._v(" has the following phases:")]),e._v(" "),_("ol",[_("li",[_("strong",[e._v("Throttle ramp")]),e._v(": Throttle is ramped up within "),_("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#RWTO_RAMP_TIME"}},[e._v("RWTO_RAMP_TIME")]),e._v(" to "),_("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#RWTO_MAX_THR"}},[e._v("RWTO_MAX_THR")]),e._v(".")],1),e._v(" "),_("li",[_("strong",[e._v("Clamped to runway")]),e._v(": Pitch fixed, no roll and takeoff path controlled until the rotation airspeed ("),_("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#RWTO_ROT_AIRSPD"}},[e._v("RWTO_ROT_AIRSPD")]),e._v(") is reached. The operator is able to nudge the vehicle left/right via yaw stick.")],1),e._v(" "),_("li",[_("strong",[e._v("Climbout")]),e._v(": Increase pitch setpoint and climb to takeoff altitude. To prevent wingstrikes, the controller will keep the roll setpoint locked to 0 when close to the ground, and then gradually allow more roll while climbing. It is based on the vehicle geometry as configured in "),_("a",{attrs:{href:"#FW_WING_SPAN"}},[e._v("FW_WING_SPAN")]),e._v(" and "),_("a",{attrs:{href:"#FW_WING_HEIGHT"}},[e._v("FW_WING_HEIGHT")]),e._v(".")])]),e._v(" "),_("div",{staticClass:"custom-block note"},[_("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),_("p",[e._v("For a smooth takeoff, the runway wheel controller possibly needs to be tuned.\nIt consists of a rate controller (P-I-FF-controller with the parameters "),_("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#FW_WR_P"}},[e._v("FW_WR_P")]),e._v(", "),_("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#FW_WR_I"}},[e._v("FW_WR_I")]),e._v(", "),_("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#FW_WR_FF"}},[e._v("FW_WR_FF")]),e._v(") and an outer loop that calculates heading setpoints from course errors and can be tuned via "),_("a",{attrs:{href:"#RWTO_L1_PERIOD"}},[e._v("RWTO_L1_PERIOD")]),e._v(".")],1)]),e._v(" "),_("p",[e._v("Runway takeoff important parameters:")]),e._v(" "),_("table",[_("thead",[_("tr",[_("th",[e._v("Parameter")]),e._v(" "),_("th",[e._v("Description")])])]),e._v(" "),_("tbody",[_("tr",[_("td",[_("span",{attrs:{id:"RWTO_TKOFF"}}),_("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#RWTO_TKOFF"}},[e._v("RWTO_TKOFF")])],1),e._v(" "),_("td",[e._v("Enable runway takeoff")])]),e._v(" "),_("tr",[_("td",[_("span",{attrs:{id:"FW_W_EN"}}),_("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#FW_W_EN"}},[e._v("FW_W_EN")])],1),e._v(" "),_("td",[e._v("Enable wheel controller")])]),e._v(" "),_("tr",[_("td",[_("span",{attrs:{id:"RWTO_MAX_THR"}}),_("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#RWTO_MAX_THR"}},[e._v("RWTO_MAX_THR")])],1),e._v(" "),_("td",[e._v("Max throttle during runway takeoff")])]),e._v(" "),_("tr",[_("td",[_("span",{attrs:{id:"RWTO_RAMP_TIME"}}),_("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#RWTO_RAMP_TIME"}},[e._v("RWTO_RAMP_TIME")])],1),e._v(" "),_("td",[e._v("Throttle ramp up time")])]),e._v(" "),_("tr",[_("td",[_("span",{attrs:{id:"RWTO_ROT_AIRSPD"}}),_("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#RWTO_ROT_AIRSPD"}},[e._v("RWTO_ROT_AIRSPD")])],1),e._v(" "),_("td",[e._v("Airspeed threshold to start rotation (pitching up). If not configured by operator is set to 0.9*FW_TKO_AIRSPD.")])]),e._v(" "),_("tr",[_("td",[_("span",{attrs:{id:"FW_TKO_AIRSPD"}}),_("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#FW_TKO_AIRSPD"}},[e._v("FW_TKO_AIRSPD")])],1),e._v(" "),_("td",[e._v("Airspeed setpoint during the takeoff climbout phase (after rotation). If not configured by operator is set to FW_AIRSPD_MIN.")])]),e._v(" "),_("tr",[_("td",[_("span",{attrs:{id:"RWTO_NUDGE"}}),_("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#RWTO_NUDGE"}},[e._v("RWTO_NUDGE")])],1),e._v(" "),_("td",[e._v("Enable wheel controller nudging while on the runway")])]),e._v(" "),_("tr",[_("td",[_("span",{attrs:{id:"FW_WING_SPAN"}}),_("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#FW_WING_SPAN"}},[e._v("FW_WING_SPAN")])],1),e._v(" "),_("td",[e._v("The wingspan of the vehicle. Used to prevent wingstrikes.")])]),e._v(" "),_("tr",[_("td",[_("span",{attrs:{id:"FW_WING_HEIGHT"}}),_("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#FW_WING_HEIGHT"}},[e._v("FW_WING_HEIGHT")])],1),e._v(" "),_("td",[e._v("The height of the wings above ground (ground clearance). Used to prevent wingstrikes.")])]),e._v(" "),_("tr",[_("td",[_("span",{attrs:{id:"RWTO_L1_PERIOD"}}),_("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#RWTO_L1_PERIOD"}},[e._v("RWTO_L1_PERIOD")])],1),e._v(" "),_("td",[e._v("L1 period while steering on runway. Increase for less aggressive response to course errors.")])]),e._v(" "),_("tr",[_("td",[_("span",{attrs:{id:"FW_FLAPS_TO_SCL"}}),_("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#FW_FLAPS_TO_SCL"}},[e._v("FW_FLAPS_TO_SCL")])],1),e._v(" "),_("td",[e._v("Flaps setpoint during takeoff")])])])]),e._v(" "),_("div",{staticClass:"custom-block note"},[_("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),_("p",[e._v("The vehicle always respects normal FW max/min throttle settings during takeoff ("),_("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#FW_THR_MIN"}},[e._v("FW_THR_MIN")]),e._v(", "),_("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#FW_THR_MAX"}},[e._v("FW_THR_MAX")]),e._v(").")],1)]),e._v(" "),_("h2",{attrs:{id:"vtol"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#vtol"}},[e._v("#")]),e._v(" VTOL")]),e._v(" "),_("p",[e._v("VTOLs default to MC mode on boot, and it is generally expected that they will take off in "),_("a",{attrs:{href:"#multi-copter-mc"}},[e._v("multicopter mode")]),e._v(" (and also safer).")]),e._v(" "),_("p",[e._v("That said, if transitioned to fixed-wing before takeoff, they will takeoff in "),_("a",{attrs:{href:"#fixed_wing"}},[e._v("Fixed-wing")]),e._v(" mode.")])])}),[],!1,null,null,null);t.default=r.exports},327:function(e,t,a){e.exports=a.p+"assets/img/position_fixed.c1403cf0.svg"}}]);