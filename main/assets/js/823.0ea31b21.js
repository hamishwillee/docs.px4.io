(window.webpackJsonp=window.webpackJsonp||[]).push([[823],{2955:function(t,e,a){"use strict";a.r(e);var r=a(19),_=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"takeoff-mode-fixed-wing"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#takeoff-mode-fixed-wing"}},[t._v("#")]),t._v(" Takeoff Mode (Fixed-Wing)")]),t._v(" "),r("img",{attrs:{src:a(328),title:"Position fix required (e.g. GPS)",width:"30px"}}),t._v(" "),r("p",[t._v("The "),r("em",[t._v("Takeoff")]),t._v(" flight mode causes the vehicle to take off to a specified height and then enter "),r("RouterLink",{attrs:{to:"/ko/flight_modes_fw/takeoff.html"}},[t._v("Hold mode")]),t._v(".")],1),t._v(" "),r("p",[t._v("Vehicles are "),r("a",{attrs:{href:"#catapult-hand-launch"}},[t._v("hand or catapult launched")]),t._v(" by default, but can also be "),r("a",{attrs:{href:"#RWTO_TKOFF"}},[t._v("configured")]),t._v(" to use a "),r("a",{attrs:{href:"#runway-takeoff"}},[t._v("runway takeoff")]),t._v(" when supported by the hardware.")]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("ul",[r("li",[t._v("Mode is automatic - no user intervention is "),r("em",[t._v("required")]),t._v(" to control the vehicle.")]),t._v(" "),r("li",[t._v("Mode requires at least a valid local position estimate (does not require a global position).\n"),r("ul",[r("li",[t._v("Flying vehicles can't switch to this mode without valid local position.")]),t._v(" "),r("li",[t._v("Flying vehicles will failsafe if they lose the position estimate.")]),t._v(" "),r("li",[t._v("Disarmed vehicles can switch to mode without valid position estimate but can't arm.")])])]),t._v(" "),r("li",[t._v("RC control switches can be used to change flight modes.")]),t._v(" "),r("li",[t._v("RC stick movement is ignored in catapult takeoff but can can be used to nudge the vehicle in runway takeoff.")]),t._v(" "),r("li",[t._v("The "),r("RouterLink",{attrs:{to:"/ko/config/safety.html#failure-detector"}},[t._v("Failure Detector")]),t._v(" will automatically stop the engines if there is a problem on takeoff.")],1)])]),t._v(" "),r("h2",{attrs:{id:"technical-summary"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#technical-summary"}},[t._v("#")]),t._v(" Technical Summary")]),t._v(" "),r("p",[t._v("Takeoff mode (and "),r("RouterLink",{attrs:{to:"/ko/flight_modes_fw/mission.html#mission-takeoff"}},[t._v("fixed wing mission takeoff")]),t._v(") has two modalities: "),r("a",{attrs:{href:"#catapult-hand-launch"}},[t._v("catapult/hand-launch")]),t._v(" or "),r("a",{attrs:{href:"#runway-takeoff"}},[t._v("runway takeoff")]),t._v(" (hardware-dependent). The mode defaults to catapult/hand launch, but can be set to runway takeoff by setting "),r("a",{attrs:{href:"#RWTO_TKOFF"}},[t._v("RWTO_TKOFF")]),t._v(" to 1.")],1),t._v(" "),r("p",[t._v("To use "),r("em",[t._v("Takeoff mode")]),t._v(" you first switch to the mode, and then arm the vehicle. The acceleration of hand/catapult launch triggers the motors to start. For runway launch, motors ramp up automatically once the vehicle has been armed.")]),t._v(" "),r("p",[t._v("Irrespective of the modality, a flight path (starting point and takeoff course) and clearance altitude are defined:")]),t._v(" "),r("ul",[r("li",[t._v("The starting point is the vehicle position when the takeoff mode is first entered.")]),t._v(" "),r("li",[t._v("The course is set to the vehicle heading on arming")]),t._v(" "),r("li",[t._v("The clearance altitude is set to "),r("a",{attrs:{href:"#MIS_TAKEOFF_ALT"}},[t._v("MIS_TAKEOFF_ALT")]),t._v(".")])]),t._v(" "),r("p",[t._v("On takeoff, the aircraft will follow line defined by the starting point and course, climbing at the maximum climb rate ("),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_T_CLMB_MAX"}},[t._v("FW_T_CLMB_MAX")]),t._v(") until reaching the clearance altitude. Reaching the clearance altitude causes the vehicle to enter "),r("RouterLink",{attrs:{to:"/ko/flight_modes_fw/takeoff.html"}},[t._v("Hold mode")]),t._v(".")],1),t._v(" "),r("h3",{attrs:{id:"parameters"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),r("p",[t._v("Parameters that affect both catapult/hand-launch and runway takeoffs:")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Parameter")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("a",{attrs:{id:"MIS_TAKEOFF_ALT"}}),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MIS_TAKEOFF_ALT"}},[t._v("MIS_TAKEOFF_ALT")])],1),t._v(" "),r("td",[t._v("Minimum altitude setpoint above Home that the vehicle will climb to during takeoff.")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{id:"FW_TKO_AIRSPD"}}),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_TKO_AIRSPD"}},[t._v("FW_TKO_AIRSPD")])],1),t._v(" "),r("td",[t._v("Takeoff airspeed (is set to "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_AIRSPD_MIN"}},[t._v("FW_AIRSPD_MIN")]),t._v(" if not defined by operator)")],1)]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{id:"FW_TKO_PITCH_MIN"}}),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_TKO_PITCH_MIN"}},[t._v("FW_TKO_PITCH_MIN")])],1),t._v(" "),r("td",[t._v("This is the minimum pitch angle setpoint during the climbout phase")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{id:"FW_T_CLMB_MAX"}}),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_T_CLMB_MAX"}},[t._v("FW_T_CLMB_MAX")])],1),t._v(" "),r("td",[t._v("Maximum climb rate.")])])])]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("The vehicle always respects normal FW max/min throttle settings during takeoff ("),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_THR_MIN"}},[t._v("FW_THR_MIN")]),t._v(", "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_THR_MAX"}},[t._v("FW_THR_MAX")]),t._v(").")],1)]),t._v(" "),r("p",[r("a",{attrs:{id:"hand_launch"}})]),t._v(" "),r("h2",{attrs:{id:"catapult-hand-launch"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#catapult-hand-launch"}},[t._v("#")]),t._v(" Catapult/Hand Launch")]),t._v(" "),r("p",[t._v("In "),r("em",[t._v("catapult/hand-launch mode")]),t._v(" the vehicle waits to detect launch (based on acceleration trigger). On launch it enables the motor(s) and climbs with the maximum climb rate "),r("a",{attrs:{href:"#FW_T_CLMB_MAX"}},[t._v("FW_T_CLMB_MAX")]),t._v(" while keeping the pitch setpoint above "),r("a",{attrs:{href:"#FW_TKO_PITCH_MIN"}},[t._v("FW_TKO_PITCH_MIN")]),t._v(". Once it reaches "),r("a",{attrs:{href:"#MIS_TAKEOFF_ALT"}},[t._v("MIS_TAKEOFF_ALT")]),t._v(" it will automatically switch to "),r("RouterLink",{attrs:{to:"/ko/flight_modes_fw/hold.html"}},[t._v("Hold mode")]),t._v(" and loiter.")],1),t._v(" "),r("p",[t._v("All RC stick movement is ignored during the full takeoff sequence.")]),t._v(" "),r("p",[t._v("To launch in this mode:")]),t._v(" "),r("ol",[r("li",[t._v("Arm the vehicle")]),t._v(" "),r("li",[t._v("Put the vehicle into "),r("em",[t._v("Takeoff mode")])]),t._v(" "),r("li",[t._v("Launch/throw the vehicle (firmly) directly into the wind. You can also shake the vehicle first, wait till the motor spins up and then throw it")])]),t._v(" "),r("h3",{attrs:{id:"parameters-launch-detector"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#parameters-launch-detector"}},[t._v("#")]),t._v(" Parameters (Launch Detector)")]),t._v(" "),r("p",[t._v("The "),r("em",[t._v("launch detector")]),t._v(" is affected by the following parameters:")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Parameter")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("a",{attrs:{id:"FW_LAUN_DETCN_ON"}}),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_LAUN_DETCN_ON"}},[t._v("FW_LAUN_DETCN_ON")])],1),t._v(" "),r("td",[t._v("Enable automatic launch detection. If disabled motors spin up on arming already")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{id:"FW_LAUN_AC_THLD"}}),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_LAUN_AC_THLD"}},[t._v("FW_LAUN_AC_THLD")])],1),t._v(" "),r("td",[t._v("Acceleration threshold (acceleration in body-forward direction must be above this value)")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{id:"FW_LAUN_AC_T"}}),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_LAUN_AC_T"}},[t._v("FW_LAUN_AC_T")])],1),t._v(" "),r("td",[t._v("Trigger time (acceleration must be above threshold for this amount of seconds)")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{id:"FW_LAUN_MOT_DEL"}}),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_LAUN_MOT_DEL"}},[t._v("FW_LAUN_MOT_DEL")])],1),t._v(" "),r("td",[t._v("Delay from launch detection to motor spin up")])])])]),t._v(" "),r("p",[r("a",{attrs:{id:"runway_launch"}})]),t._v(" "),r("h2",{attrs:{id:"runway-takeoff"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#runway-takeoff"}},[t._v("#")]),t._v(" Runway Takeoff")]),t._v(" "),r("p",[t._v("Runway takeoffs can be used by vehicles with landing gear and and steerable wheel (only). You will first need to enable the wheel controller using the parameter "),r("a",{attrs:{href:"#FW_W_EN"}},[t._v("FW_W_EN")]),t._v(".")]),t._v(" "),r("p",[t._v('Vehicle should be centered and aligned with runway when takeoff is initiated. The operator can "nudge" the vehicle while on the runway to help keeping it centered and aligned (see '),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RWTO_NUDGE"}},[t._v("RWTO_NUDGE")]),t._v(").")],1),t._v(" "),r("p",[t._v("The "),r("em",[t._v("runway takeoff mode")]),t._v(" has the following phases:")]),t._v(" "),r("ol",[r("li",[r("strong",[t._v("Throttle ramp")]),t._v(": Throttle is ramped up within "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RWTO_RAMP_TIME"}},[t._v("RWTO_RAMP_TIME")]),t._v(" to "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RWTO_MAX_THR"}},[t._v("RWTO_MAX_THR")]),t._v(".")],1),t._v(" "),r("li",[r("strong",[t._v("Clamped to runway")]),t._v(": Pitch fixed, no roll and takeoff path controlled until the rotation airspeed ("),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RWTO_ROT_AIRSPD"}},[t._v("RWTO_ROT_AIRSPD")]),t._v(") is reached. The operator is able to nudge the vehicle left/right via yaw stick.")],1),t._v(" "),r("li",[r("strong",[t._v("Climbout")]),t._v(": Increase pitch setpoint and climb to takeoff altitude. To prevent wingstrikes, the controller will keep the roll setpoint locked to 0 when close to the ground, and then gradually allow more roll while climbing. It is based on the vehicle geometry as configured in "),r("a",{attrs:{href:"#FW_WING_SPAN"}},[t._v("FW_WING_SPAN")]),t._v(" and "),r("a",{attrs:{href:"#FW_WING_HEIGHT"}},[t._v("FW_WING_HEIGHT")]),t._v(".")])]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("For a smooth takeoff, the runway wheel controller possibly needs to be tuned. It consists of a rate controller (P-I-FF-controller with the parameters "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_WR_P"}},[t._v("FW_WR_P")]),t._v(", "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_WR_I"}},[t._v("FW_WR_I")]),t._v(", "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_WR_FF"}},[t._v("FW_WR_FF")]),t._v(") and an outer loop that calculates heading setpoints from course errors and can be tuned via "),r("a",{attrs:{href:"#RWTO_NPFG_PERIOD"}},[t._v("RWTO_NPFG_PERIOD")]),t._v(".")],1)]),t._v(" "),r("h3",{attrs:{id:"parameters-runway-takeoff"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#parameters-runway-takeoff"}},[t._v("#")]),t._v(" Parameters (Runway Takeoff)")]),t._v(" "),r("p",[t._v("Runway takeoff is affected by the following parameters:")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Parameter")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("a",{attrs:{id:"RWTO_TKOFF"}}),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RWTO_TKOFF"}},[t._v("RWTO_TKOFF")])],1),t._v(" "),r("td",[t._v("Enable runway takeoff")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{id:"FW_W_EN"}}),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_W_EN"}},[t._v("FW_W_EN")])],1),t._v(" "),r("td",[t._v("Enable wheel controller")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{id:"RWTO_MAX_THR"}}),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RWTO_MAX_THR"}},[t._v("RWTO_MAX_THR")])],1),t._v(" "),r("td",[t._v("Max throttle during runway takeoff")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{id:"RWTO_RAMP_TIME"}}),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RWTO_RAMP_TIME"}},[t._v("RWTO_RAMP_TIME")])],1),t._v(" "),r("td",[t._v("Throttle ramp up time")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{id:"RWTO_ROT_AIRSPD"}}),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RWTO_ROT_AIRSPD"}},[t._v("RWTO_ROT_AIRSPD")])],1),t._v(" "),r("td",[t._v("Airspeed threshold to start rotation (pitching up). If not configured by operator is set to 0.9*FW_TKO_AIRSPD.")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{id:"RWTO_ROT_TIME"}}),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RWTO_ROT_TIME"}},[t._v("RWTO_ROT_TIME")])],1),t._v(" "),r("td",[t._v("This is the time desired to linearly ramp in takeoff pitch constraints during the takeoff rotation.")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{id:"FW_TKO_AIRSPD"}}),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_TKO_AIRSPD"}},[t._v("FW_TKO_AIRSPD")])],1),t._v(" "),r("td",[t._v("Airspeed setpoint during the takeoff climbout phase (after rotation). If not configured by operator is set to FW_AIRSPD_MIN.")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{id:"RWTO_NUDGE"}}),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RWTO_NUDGE"}},[t._v("RWTO_NUDGE")])],1),t._v(" "),r("td",[t._v("Enable wheel controller nudging while on the runway")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{id:"FW_WING_SPAN"}}),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_WING_SPAN"}},[t._v("FW_WING_SPAN")])],1),t._v(" "),r("td",[t._v("The wingspan of the vehicle. Used to prevent wingstrikes.")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{id:"FW_WING_HEIGHT"}}),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_WING_HEIGHT"}},[t._v("FW_WING_HEIGHT")])],1),t._v(" "),r("td",[t._v("The height of the wings above ground (ground clearance). Used to prevent wingstrikes.")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{id:"RWTO_NPFG_PERIOD"}}),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RWTO_NPFG_PERIOD"}},[t._v("RWTO_NPFG_PERIOD")])],1),t._v(" "),r("td",[t._v("L1 period while steering on runway. Increase for less aggressive response to course errors.")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{id:"FW_FLAPS_TO_SCL"}}),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_FLAPS_TO_SCL"}},[t._v("FW_FLAPS_TO_SCL")])],1),t._v(" "),r("td",[t._v("Flaps setpoint during takeoff")])])])]),t._v(" "),r("h2",{attrs:{id:"see-also"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#see-also"}},[t._v("#")]),t._v(" See Also")]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/ko/flight_modes_mc/takeoff.html"}},[t._v("Takeoff Mode (MC)")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/flight_modes_fw/mission.html#mission-takeoff"}},[t._v("Planning a mission takeoff")])],1)])])}),[],!1,null,null,null);e.default=_.exports},328:function(t,e,a){t.exports=a.p+"assets/img/position_fixed.38e4a675.svg"}}]);