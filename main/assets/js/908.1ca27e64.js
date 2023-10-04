(window.webpackJsonp=window.webpackJsonp||[]).push([[908],{327:function(t,e,a){t.exports=a.p+"assets/img/position_fixed.38e4a675.svg"},3471:function(t,e,a){"use strict";a.r(e);var _=a(19),r=Object(_.a)({},(function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"起飞模式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#起飞模式"}},[t._v("#")]),t._v(" 起飞模式")]),t._v(" "),_("p",[_("RouterLink",{attrs:{to:"/zh/getting_started/flight_modes.html#key_position_fixed"}},[_("img",{attrs:{src:a(327),title:"需要定位（例如 GPS ）",width:"30px"}})])],1),t._v(" "),_("p",[t._v("The "),_("em",[t._v("Takeoff")]),t._v(" flight mode causes the vehicle to take off to a specified height and wait for further input.")]),t._v(" "),_("div",{staticClass:"custom-block note"},[_("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),_("ul",[_("li",[t._v("该模式需要一个良好的位置估计（如，从 GPS 中获取）。")]),t._v(" "),_("li",[t._v("使用此模式前必须先解锁。")]),t._v(" "),_("li",[t._v("This mode is automatic - no user intervention is "),_("em",[t._v("required")]),t._v(" to control the vehicle.")]),t._v(" "),_("li",[t._v("遥控开关可以在任何无人机上更改飞行模式。")]),t._v(" "),_("li",[t._v("RC stick movement in a multicopter (or VTOL in multicopter mode) will "),_("a",{attrs:{href:"#COM_RC_OVERRIDE"}},[t._v("by default")]),t._v(" change the vehicle to "),_("RouterLink",{attrs:{to:"/zh/flight_modes_mc/position.html"}},[t._v("Position mode")]),t._v(" unless handling a critical battery failsafe.")],1),t._v(" "),_("li",[t._v("如果起飞时出现问题， "),_("RouterLink",{attrs:{to:"/zh/config/safety.html#failure-detector"}},[t._v("故障检测器")]),t._v(" 将自动停止引擎。 :::")],1)]),t._v(" "),_("p",[t._v("下面描述每种类型飞机的具体行为。")]),t._v(" "),_("h2",{attrs:{id:"多旋翼-mc"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#多旋翼-mc"}},[t._v("#")]),t._v(" 多旋翼（MC）")]),t._v(" "),_("p",[t._v("A multi rotor ascends to the altitude defined in "),_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MIS_TAKEOFF_ALT"}},[t._v("MIS_TAKEOFF_ALT")]),t._v(" and holds position.")],1),t._v(" "),_("p",[t._v("RC stick movement will change the vehicle to "),_("RouterLink",{attrs:{to:"/zh/flight_modes_mc/position.html"}},[t._v("Position mode")]),t._v(" (by "),_("a",{attrs:{href:"#COM_RC_OVERRIDE"}},[t._v("default")]),t._v(").")],1),t._v(" "),_("p",[t._v("起飞受以下参数影响：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("参数")]),t._v(" "),_("th",[t._v("描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[_("a",{attrs:{id:"MIS_TAKEOFF_ALT"}}),_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MIS_TAKEOFF_ALT"}},[t._v("MIS_TAKEOFF_ALT")])],1),t._v(" "),_("td",[t._v("起飞期间的目标高度 (默认值: 2.5 米)")])]),t._v(" "),_("tr",[_("td",[_("a",{attrs:{id:"MPC_TKO_SPEED"}}),_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_TKO_SPEED"}},[t._v("MPC_TKO_SPEED")])],1),t._v(" "),_("td",[t._v("上升速度 (默认值: 1.5 m/s)")])]),t._v(" "),_("tr",[_("td",[_("a",{attrs:{id:"COM_RC_OVERRIDE"}}),_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_RC_OVERRIDE"}},[t._v("COM_RC_OVERRIDE")])],1),t._v(" "),_("td",[t._v("Controls whether stick movement on a multicopter (or VTOL in MC mode) causes a mode change to "),_("RouterLink",{attrs:{to:"/zh/flight_modes_mc/position.html"}},[t._v("Position mode")]),t._v(". 可以分别为自动模式和 offboard 模式启用此功能，默认情况下在自动模式下启用此功能。")],1)]),t._v(" "),_("tr",[_("td",[_("a",{attrs:{id:"COM_RC_STICK_OV"}}),_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_RC_STICK_OV"}},[t._v("COM_RC_STICK_OV")])],1),t._v(" "),_("td",[t._v("The amount of stick movement that causes a transition to "),_("RouterLink",{attrs:{to:"/zh/flight_modes_mc/position.html"}},[t._v("Position mode")]),t._v(" (if "),_("a",{attrs:{href:"#COM_RC_OVERRIDE"}},[t._v("COM_RC_OVERRIDE")]),t._v(" is enabled)")],1)])])]),t._v(" "),_("p",[_("a",{attrs:{id:"fixed_wing"}})]),t._v(" "),_("h2",{attrs:{id:"fixed-wing-fw"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#fixed-wing-fw"}},[t._v("#")]),t._v(" Fixed-wing (FW)")]),t._v(" "),_("p",[t._v("Automatic takeoff has two modalities: "),_("em",[t._v("catapult/hand-launch")]),t._v(" or "),_("em",[t._v("runway takeoff")]),t._v(". The mode defaults to catapult/hand launch, but can be set to runway takeoff by setting "),_("a",{attrs:{href:"#RWTO_TKOFF"}},[t._v("RWTO_TKOFF")]),t._v(" to 1.")]),t._v(" "),_("p",[t._v("There are two ways to start an automatic takeoff on fixed-wing vehicles: either by "),_("RouterLink",{attrs:{to:"/zh/flight_modes/mission.html#fw-mission-takeoff"}},[t._v("planning a mission takeoff")]),t._v(" and starting the mission, or by switching to the "),_("em",[t._v("Takeoff mode")]),t._v(" and arming the vehicle.")],1),t._v(" "),_("p",[t._v("In both cases, a flight path (starting point and takeoff course) and clearance altitude are defined. The flight path takes the vehicle's current position as starting point when the takeoff mode is first entered, and a straight line from this starting point continues in the direction of the defined course indefinitely. On takeoff, the aircraft will follow this line, climbing at the maximum climb rate ("),_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FW_T_CLMB_MAX"}},[t._v("FW_T_CLMB_MAX")]),t._v(") until reaching the clearance altitude.")],1),t._v(" "),_("p",[t._v("In "),_("em",[t._v("Takeoff mode")]),t._v(" (non-mission takeoffs), the course is set to the vehicle heading on arming, and the clearance altitude is set to "),_("a",{attrs:{href:"#MIS_TAKEOFF_ALT"}},[t._v("MIS_TAKEOFF_ALT")]),t._v(". Reaching the clearance altitude causes the vehicle to enter "),_("em",[t._v("Hold mode")]),t._v(".")]),t._v(" "),_("p",[t._v("In "),_("RouterLink",{attrs:{to:"/zh/flight_modes/mission.html"}},[t._v("Mission mode")]),t._v(" the operator defines the takeoff course and clearance altitude in the Takeoff mission item. The course is defined by the line between the vehicle starting point and the mission item horizontal position, and the clearance altitude is the mission item altitude. Reaching the mission item altitude triggers the next mission item.")],1),t._v(" "),_("p",[t._v("Parameters that apply to both catapult/hand-launch as well as runway takeoffs:")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("参数")]),t._v(" "),_("th",[t._v("描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[_("a",{attrs:{id:"MIS_TAKEOFF_ALT"}}),_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MIS_TAKEOFF_ALT"}},[t._v("MIS_TAKEOFF_ALT")])],1),t._v(" "),_("td",[t._v("Minimum altitude setpoint above Home that the vehicle will climb to during takeoff.")])]),t._v(" "),_("tr",[_("td",[_("a",{attrs:{id:"FW_TKO_AIRSPD"}}),_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FW_TKO_AIRSPD"}},[t._v("FW_TKO_AIRSPD")])],1),t._v(" "),_("td",[t._v("Takeoff airspeed (is set to "),_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FW_AIRSPD_MIN"}},[t._v("FW_AIRSPD_MIN")]),t._v(" if not defined by operator)")],1)]),t._v(" "),_("tr",[_("td",[_("a",{attrs:{id:"FW_TKO_PITCH_MIN"}}),_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FW_TKO_PITCH_MIN"}},[t._v("FW_TKO_PITCH_MIN")])],1),t._v(" "),_("td",[t._v("This is the minimum pitch angle setpoint during the climbout phase")])]),t._v(" "),_("tr",[_("td",[_("a",{attrs:{id:"FW_T_CLMB_MAX"}}),_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FW_T_CLMB_MAX"}},[t._v("FW_T_CLMB_MAX")])],1),t._v(" "),_("td",[t._v("Maximum climb rate.")])])])]),t._v(" "),_("p",[_("a",{attrs:{id:"hand_launch"}})]),t._v(" "),_("h3",{attrs:{id:"弹射-手动发射"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#弹射-手动发射"}},[t._v("#")]),t._v(" 弹射/手动发射")]),t._v(" "),_("p",[t._v("In "),_("em",[t._v("catapult/hand-launch mode")]),t._v(" the vehicle waits to detect launch (based on acceleration trigger). On launch it enables the motor and climbs with the maximum climb rate "),_("a",{attrs:{href:"#FW_T_CLMB_MAX"}},[t._v("FW_T_CLMB_MAX")]),t._v(" while keeping the pitch setpoint above "),_("a",{attrs:{href:"#FW_TKO_PITCH_MIN"}},[t._v("FW_TKO_PITCH_MIN")]),t._v(". Once it reaches "),_("a",{attrs:{href:"#MIS_TAKEOFF_ALT"}},[t._v("MIS_TAKEOFF_ALT")]),t._v(" it will automatically switch to "),_("RouterLink",{attrs:{to:"/zh/flight_modes/hold.html"}},[t._v("Hold mode")]),t._v(" and loiter.")],1),t._v(" "),_("p",[t._v("All RC stick movement is ignored during the full takeoff sequence.")]),t._v(" "),_("p",[t._v("To launch in this mode:")]),t._v(" "),_("ul",[_("li",[t._v("Arm the vehicle")]),t._v(" "),_("li",[t._v("Put the vehicle into "),_("em",[t._v("Takeoff mode")])]),t._v(" "),_("li",[t._v("Launch/throw the vehicle (firmly) directly into the wind. You can also shake the vehicle first, wait till the motor spins up and throw only then")])]),t._v(" "),_("p",[t._v("The "),_("em",[t._v("launch detector")]),t._v(" is affected by the following parameters:")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("参数")]),t._v(" "),_("th",[t._v("描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[_("a",{attrs:{id:"FW_LAUN_DETCN_ON"}}),_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FW_LAUN_DETCN_ON"}},[t._v("FW_LAUN_DETCN_ON")])],1),t._v(" "),_("td",[t._v("Enable automatic launch detection. If disabled motors spin up on arming already")])]),t._v(" "),_("tr",[_("td",[_("a",{attrs:{id:"FW_LAUN_AC_THLD"}}),_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FW_LAUN_AC_THLD"}},[t._v("FW_LAUN_AC_THLD")])],1),t._v(" "),_("td",[t._v("Acceleration threshold (acceleration in body-forward direction must be above this value)")])]),t._v(" "),_("tr",[_("td",[_("a",{attrs:{id:"FW_LAUN_AC_T"}}),_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FW_LAUN_AC_T"}},[t._v("FW_LAUN_AC_T")])],1),t._v(" "),_("td",[t._v("Trigger time (acceleration must be above threshold for this amount of seconds)")])]),t._v(" "),_("tr",[_("td",[_("a",{attrs:{id:"FW_LAUN_MOT_DEL"}}),_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FW_LAUN_MOT_DEL"}},[t._v("FW_LAUN_MOT_DEL")])],1),t._v(" "),_("td",[t._v("Delay from launch detection to motor spin up")])])])]),t._v(" "),_("p",[_("a",{attrs:{id:"runway_launch"}})]),t._v(" "),_("h3",{attrs:{id:"跑到起飞"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#跑到起飞"}},[t._v("#")]),t._v(" 跑到起飞")]),t._v(" "),_("p",[t._v("Runway takeoffs can be used by vehicles with landing gear and and steerable wheel (only). You will first need to enable the wheel controller using the parameter "),_("a",{attrs:{href:"#FW_W_EN"}},[t._v("FW_W_EN")]),t._v(".")]),t._v(" "),_("p",[t._v('Vehicle should be centered and aligned with runway when takeoff is initiated. The operator can "nudge" the vehicle while on the runway to help keeping it centered and aligned (see '),_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#RWTO_NUDGE"}},[t._v("RWTO_NUDGE")]),t._v(").")],1),t._v(" "),_("p",[t._v("The "),_("em",[t._v("runway takeoff mode")]),t._v(" has the following phases:")]),t._v(" "),_("ol",[_("li",[_("strong",[t._v("Throttle ramp")]),t._v(": Throttle is ramped up within "),_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#RWTO_RAMP_TIME"}},[t._v("RWTO_RAMP_TIME")]),t._v(" to "),_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#RWTO_MAX_THR"}},[t._v("RWTO_MAX_THR")]),t._v(".")],1),t._v(" "),_("li",[_("strong",[t._v("Clamped to runway")]),t._v(": Pitch fixed, no roll and takeoff path controlled until the rotation airspeed ("),_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#RWTO_ROT_AIRSPD"}},[t._v("RWTO_ROT_AIRSPD")]),t._v(") is reached. The operator is able to nudge the vehicle left/right via yaw stick.")],1),t._v(" "),_("li",[_("strong",[t._v("Climbout")]),t._v(": Increase pitch setpoint and climb to takeoff altitude. To prevent wingstrikes, the controller will keep the roll setpoint locked to 0 when close to the ground, and then gradually allow more roll while climbing. It is based on the vehicle geometry as configured in "),_("a",{attrs:{href:"#FW_WING_SPAN"}},[t._v("FW_WING_SPAN")]),t._v(" and "),_("a",{attrs:{href:"#FW_WING_HEIGHT"}},[t._v("FW_WING_HEIGHT")]),t._v(".")])]),t._v(" "),_("div",{staticClass:"custom-block note"},[_("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),_("p",[t._v("For a smooth takeoff, the runway wheel controller possibly needs to be tuned. It consists of a rate controller (P-I-FF-controller with the parameters "),_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FW_WR_P"}},[t._v("FW_WR_P")]),t._v(", "),_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FW_WR_I"}},[t._v("FW_WR_I")]),t._v(", "),_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FW_WR_FF"}},[t._v("FW_WR_FF")]),t._v(") and an outer loop that calculates heading setpoints from course errors and can be tuned via "),_("a",{attrs:{href:"#RWTO_NPFG_PERIOD"}},[t._v("RWTO_NPFG_PERIOD")]),t._v(". :::")],1),t._v(" "),_("p",[t._v("Runway takeoff important parameters:")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("参数")]),t._v(" "),_("th",[t._v("描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[_("a",{attrs:{id:"RWTO_TKOFF"}}),_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#RWTO_TKOFF"}},[t._v("RWTO_TKOFF")])],1),t._v(" "),_("td",[t._v("Enable runway takeoff")])]),t._v(" "),_("tr",[_("td",[_("a",{attrs:{id:"FW_W_EN"}}),_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FW_W_EN"}},[t._v("FW_W_EN")])],1),t._v(" "),_("td",[t._v("Enable wheel controller")])]),t._v(" "),_("tr",[_("td",[_("a",{attrs:{id:"RWTO_MAX_THR"}}),_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#RWTO_MAX_THR"}},[t._v("RWTO_MAX_THR")])],1),t._v(" "),_("td",[t._v("Max throttle during runway takeoff")])]),t._v(" "),_("tr",[_("td",[_("a",{attrs:{id:"RWTO_RAMP_TIME"}}),_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#RWTO_RAMP_TIME"}},[t._v("RWTO_RAMP_TIME")])],1),t._v(" "),_("td",[t._v("Throttle ramp up time")])]),t._v(" "),_("tr",[_("td",[_("a",{attrs:{id:"RWTO_ROT_AIRSPD"}}),_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#RWTO_ROT_AIRSPD"}},[t._v("RWTO_ROT_AIRSPD")])],1),t._v(" "),_("td",[t._v("Airspeed threshold to start rotation (pitching up). If not configured by operator is set to 0.9*FW_TKO_AIRSPD.")])]),t._v(" "),_("tr",[_("td",[_("a",{attrs:{id:"RWTO_ROT_TIME"}}),_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#RWTO_ROT_TIME"}},[t._v("RWTO_ROT_TIME")])],1),t._v(" "),_("td",[t._v("This is the time desired to linearly ramp in takeoff pitch constraints during the takeoff rotation.")])]),t._v(" "),_("tr",[_("td",[_("a",{attrs:{id:"FW_TKO_AIRSPD"}}),_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FW_TKO_AIRSPD"}},[t._v("FW_TKO_AIRSPD")])],1),t._v(" "),_("td",[t._v("Airspeed setpoint during the takeoff climbout phase (after rotation). If not configured by operator is set to FW_AIRSPD_MIN.")])]),t._v(" "),_("tr",[_("td",[_("a",{attrs:{id:"RWTO_NUDGE"}}),_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#RWTO_NUDGE"}},[t._v("RWTO_NUDGE")])],1),t._v(" "),_("td",[t._v("Enable wheel controller nudging while on the runway")])]),t._v(" "),_("tr",[_("td",[_("a",{attrs:{id:"FW_WING_SPAN"}}),_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FW_WING_SPAN"}},[t._v("FW_WING_SPAN")])],1),t._v(" "),_("td",[t._v("The wingspan of the vehicle. Used to prevent wingstrikes.")])]),t._v(" "),_("tr",[_("td",[_("a",{attrs:{id:"FW_WING_HEIGHT"}}),_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FW_WING_HEIGHT"}},[t._v("FW_WING_HEIGHT")])],1),t._v(" "),_("td",[t._v("The height of the wings above ground (ground clearance). Used to prevent wingstrikes.")])]),t._v(" "),_("tr",[_("td",[_("a",{attrs:{id:"RWTO_NPFG_PERIOD"}}),_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#RWTO_NPFG_PERIOD"}},[t._v("RWTO_NPFG_PERIOD")])],1),t._v(" "),_("td",[t._v("L1 period while steering on runway. Increase for less aggressive response to course errors.")])]),t._v(" "),_("tr",[_("td",[_("a",{attrs:{id:"FW_FLAPS_TO_SCL"}}),_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FW_FLAPS_TO_SCL"}},[t._v("FW_FLAPS_TO_SCL")])],1),t._v(" "),_("td",[t._v("Flaps setpoint during takeoff")])])])]),t._v(" "),_("div",{staticClass:"custom-block note"},[_("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),_("p",[t._v("起飞时，无人机 总是遵循正常的固定翼最大/最小油门设置（"),_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FW_THR_MIN"}},[t._v("FW_THR_MIN")]),t._v("，"),_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FW_THR_MAX"}},[t._v("FW_THR_MAX")]),t._v("）。 :::")],1),t._v(" "),_("h2",{attrs:{id:"垂直起降-vtol"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#垂直起降-vtol"}},[t._v("#")]),t._v(" 垂直起降（VTOL）")]),t._v(" "),_("p",[t._v("VTOL 在启动时默认为多旋翼模式，通常可以在多旋翼模式下起飞（而且也更安全）。")]),t._v(" "),_("p",[t._v("That said, if transitioned to fixed-wing before takeoff, they will takeoff in "),_("a",{attrs:{href:"#fixed_wing"}},[t._v("Fixed-wing")]),t._v(" mode.")])])])])])}),[],!1,null,null,null);e.default=r.exports}}]);