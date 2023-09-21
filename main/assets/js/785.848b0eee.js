(window.webpackJsonp=window.webpackJsonp||[]).push([[785],{2731:function(t,e,_){"use strict";_.r(e);var a=_(19),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"이륙-모드"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#이륙-모드"}},[t._v("#")]),t._v(" 이륙 모드")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/ko/getting_started/flight_modes.html#key_position_fixed"}},[a("img",{attrs:{src:_(328),title:"위치 고정 요구(예, GPS)",width:"30px"}})])],1),t._v(" "),a("p",[a("em",[t._v("이륙")]),t._v(" 비행 모드는 기체가 지정된 높이로 상승후, 추가 입력을 기다립니다.")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("ul",[a("li",[t._v("이 모드는 정확한 위치 추정이 필요합니다(예: GPS에서).")]),t._v(" "),a("li",[t._v("이 모드를 사용하려면 기체의 시동을 걸어야합니다.")]),t._v(" "),a("li",[t._v("This mode is automatic - no user intervention is "),a("em",[t._v("required")]),t._v(" to control the vehicle.")]),t._v(" "),a("li",[t._v("RC 제어 스위치는 기체의 비행 모드를 변경할 수 있습니다.")]),t._v(" "),a("li",[t._v("멀티콥터 (또는 멀티콥터 모드의 VTOL)에서 RC 스틱을 움직이면 위험한 배터리 안전 장치를 처리하지 않는 한 "),a("a",{attrs:{href:"#COM_RC_OVERRIDE"}},[t._v("기본적으로")]),t._v(" 기체는 "),a("RouterLink",{attrs:{to:"/ko/flight_modes/position_mc.html"}},[t._v("위치 모드")]),t._v("로 변경됩니다.")],1),t._v(" "),a("li",[t._v("The "),a("RouterLink",{attrs:{to:"/ko/config/safety.html#failure-detector"}},[t._v("Failure Detector")]),t._v(" will automatically stop the engines if there is a problem on takeoff. :::")],1)]),t._v(" "),a("p",[t._v("각 기체 유형에 대한 구체적인 행동은 아래에 설명되어 있습니다.")]),t._v(" "),a("h2",{attrs:{id:"멀티콥터-mc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#멀티콥터-mc"}},[t._v("#")]),t._v(" 멀티콥터(MC)")]),t._v(" "),a("p",[t._v("A multi rotor ascends to the altitude defined in "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MIS_TAKEOFF_ALT"}},[t._v("MIS_TAKEOFF_ALT")]),t._v(" and holds position.")],1),t._v(" "),a("p",[t._v("RC 스틱을 움직이면 차량이 "),a("RouterLink",{attrs:{to:"/ko/flight_modes/position_mc.html"}},[t._v("위치 모드")]),t._v("("),a("a",{attrs:{href:"#COM_RC_OVERRIDE"}},[t._v("기본값")]),t._v(")로 변경됩니다.")],1),t._v(" "),a("p",[t._v("이륙은 다음 매개 변수의 영향을받습니다.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("매개 변수")]),t._v(" "),a("th",[t._v("설명")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("a",{attrs:{id:"MIS_TAKEOFF_ALT"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MIS_TAKEOFF_ALT"}},[t._v("MIS_TAKEOFF_ALT")])],1),t._v(" "),a("td",[t._v("이륙 중 목표 고도 (기본값 : 2.5m)")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"MPC_TKO_SPEED"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_TKO_SPEED"}},[t._v("MPC_TKO_SPEED")])],1),t._v(" "),a("td",[t._v("상승 속도 (기본값 : 1.5m/s)")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"COM_RC_OVERRIDE"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_RC_OVERRIDE"}},[t._v("COM_RC_OVERRIDE")])],1),t._v(" "),a("td",[t._v("멀티콥터 (또는 MC 모드의 VTOL)에서 스틱 이동으로 인해 모드가 "),a("RouterLink",{attrs:{to:"/ko/flight_modes/position_mc.html"}},[t._v("위치 모드")]),t._v("로 변경 여부를 제어합니다. 자동 모드와 오프 보드 모드에 대해 별도로 활성화할 수 있으며, 기본적으로 자동 모드에서 활성화됩니다.")],1)]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"COM_RC_STICK_OV"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_RC_STICK_OV"}},[t._v("COM_RC_STICK_OV")])],1),t._v(" "),a("td",[t._v("The amount of stick movement that causes a transition to "),a("RouterLink",{attrs:{to:"/ko/flight_modes/position_mc.html"}},[t._v("Position mode")]),t._v(" (if "),a("a",{attrs:{href:"#COM_RC_OVERRIDE"}},[t._v("COM_RC_OVERRIDE")]),t._v(" is enabled)")],1)])])]),t._v(" "),a("p",[a("a",{attrs:{id:"fixed_wing"}})]),t._v(" "),a("h2",{attrs:{id:"fixed-wing-fw"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fixed-wing-fw"}},[t._v("#")]),t._v(" Fixed-wing (FW)")]),t._v(" "),a("p",[t._v("Automatic takeoff has two modalities: "),a("em",[t._v("catapult/hand-launch")]),t._v(" or "),a("em",[t._v("runway takeoff")]),t._v(". The mode defaults to catapult/hand launch, but can be set to runway takeoff by setting "),a("a",{attrs:{href:"#RWTO_TKOFF"}},[t._v("RWTO_TKOFF")]),t._v(" to 1.")]),t._v(" "),a("p",[t._v("There are two ways to start an automatic takeoff on fixed-wing vehicles: either by "),a("RouterLink",{attrs:{to:"/ko/flight_modes/mission.html#fw-mission-takeoff"}},[t._v("planning a mission takeoff")]),t._v(" and starting the mission, or by switching to the "),a("em",[t._v("Takeoff mode")]),t._v(" and arming the vehicle.")],1),t._v(" "),a("p",[t._v("In both cases, a flight path (starting point and takeoff course) and clearance altitude are defined. The flight path takes the vehicle's current position as starting point when the takeoff mode is first entered, and a straight line from this starting point continues in the direction of the defined course indefinitely. On takeoff, the aircraft will follow this line, climbing at the maximum climb rate ("),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_T_CLMB_MAX"}},[t._v("FW_T_CLMB_MAX")]),t._v(") until reaching the clearance altitude.")],1),t._v(" "),a("p",[t._v("In "),a("em",[t._v("Takeoff mode")]),t._v(" (non-mission takeoffs), the course is set to the vehicle heading on arming, and the clearance altitude is set to "),a("a",{attrs:{href:"#MIS_TAKEOFF_ALT"}},[t._v("MIS_TAKEOFF_ALT")]),t._v(". Reaching the clearance altitude causes the vehicle to enter "),a("em",[t._v("Hold mode")]),t._v(".")]),t._v(" "),a("p",[t._v("In "),a("RouterLink",{attrs:{to:"/ko/flight_modes/mission.html"}},[t._v("Mission mode")]),t._v(" the operator defines the takeoff course and clearance altitude in the Takeoff mission item. The course is defined by the line between the vehicle starting point and the mission item horizontal position, and the clearance altitude is the mission item altitude. Reaching the mission item altitude triggers the next mission item.")],1),t._v(" "),a("p",[t._v("Parameters that apply to both catapult/hand-launch as well as runway takeoffs:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("매개 변수")]),t._v(" "),a("th",[t._v("설명")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("a",{attrs:{id:"MIS_TAKEOFF_ALT"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MIS_TAKEOFF_ALT"}},[t._v("MIS_TAKEOFF_ALT")])],1),t._v(" "),a("td",[t._v("Minimum altitude setpoint above Home that the vehicle will climb to during takeoff.")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"FW_TKO_AIRSPD"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_TKO_AIRSPD"}},[t._v("FW_TKO_AIRSPD")])],1),t._v(" "),a("td",[t._v("Takeoff airspeed (is set to "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_AIRSPD_MIN"}},[t._v("FW_AIRSPD_MIN")]),t._v(" if not defined by operator)")],1)]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"FW_TKO_PITCH_MIN"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_TKO_PITCH_MIN"}},[t._v("FW_TKO_PITCH_MIN")])],1),t._v(" "),a("td",[t._v("This is the minimum pitch angle setpoint during the climbout phase")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"FW_T_CLMB_MAX"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_T_CLMB_MAX"}},[t._v("FW_T_CLMB_MAX")])],1),t._v(" "),a("td",[t._v("Maximum climb rate.")])])])]),t._v(" "),a("p",[a("a",{attrs:{id:"hand_launch"}})]),t._v(" "),a("h3",{attrs:{id:"투석기-수동-발사-모드"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#투석기-수동-발사-모드"}},[t._v("#")]),t._v(" 투석기/수동 발사 모드")]),t._v(" "),a("p",[t._v("In "),a("em",[t._v("catapult/hand-launch mode")]),t._v(" the vehicle waits to detect launch (based on acceleration trigger). On launch it enables the motor and climbs with the maximum climb rate "),a("a",{attrs:{href:"#FW_T_CLMB_MAX"}},[t._v("FW_T_CLMB_MAX")]),t._v(" while keeping the pitch setpoint above "),a("a",{attrs:{href:"#FW_TKO_PITCH_MIN"}},[t._v("FW_TKO_PITCH_MIN")]),t._v(". Once it reaches "),a("a",{attrs:{href:"#MIS_TAKEOFF_ALT"}},[t._v("MIS_TAKEOFF_ALT")]),t._v(" it will automatically switch to "),a("RouterLink",{attrs:{to:"/ko/flight_modes/hold.html"}},[t._v("Hold mode")]),t._v(" and loiter.")],1),t._v(" "),a("p",[t._v("All RC stick movement is ignored during the full takeoff sequence.")]),t._v(" "),a("p",[t._v("To launch in this mode:")]),t._v(" "),a("ul",[a("li",[t._v("Arm the vehicle")]),t._v(" "),a("li",[t._v("Put the vehicle into "),a("em",[t._v("Takeoff mode")])]),t._v(" "),a("li",[t._v("Launch/throw the vehicle (firmly) directly into the wind. You can also shake the vehicle first, wait till the motor spins up and throw only then")])]),t._v(" "),a("p",[t._v("The "),a("em",[t._v("launch detector")]),t._v(" is affected by the following parameters:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("매개 변수")]),t._v(" "),a("th",[t._v("설명")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("a",{attrs:{id:"FW_LAUN_DETCN_ON"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_LAUN_DETCN_ON"}},[t._v("FW_LAUN_DETCN_ON")])],1),t._v(" "),a("td",[t._v("Enable automatic launch detection. If disabled motors spin up on arming already")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"FW_LAUN_AC_THLD"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_LAUN_AC_THLD"}},[t._v("FW_LAUN_AC_THLD")])],1),t._v(" "),a("td",[t._v("Acceleration threshold (acceleration in body-forward direction must be above this value)")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"FW_LAUN_AC_T"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_LAUN_AC_T"}},[t._v("FW_LAUN_AC_T")])],1),t._v(" "),a("td",[t._v("Trigger time (acceleration must be above threshold for this amount of seconds)")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"FW_LAUN_MOT_DEL"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_LAUN_MOT_DEL"}},[t._v("FW_LAUN_MOT_DEL")])],1),t._v(" "),a("td",[t._v("Delay from launch detection to motor spin up")])])])]),t._v(" "),a("p",[a("a",{attrs:{id:"runway_launch"}})]),t._v(" "),a("h3",{attrs:{id:"활주로-이륙"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#활주로-이륙"}},[t._v("#")]),t._v(" 활주로 이륙")]),t._v(" "),a("p",[t._v("Runway takeoffs can be used by vehicles with landing gear and and steerable wheel (only). You will first need to enable the wheel controller using the parameter "),a("a",{attrs:{href:"#FW_W_EN"}},[t._v("FW_W_EN")]),t._v(".")]),t._v(" "),a("p",[t._v('Vehicle should be centered and aligned with runway when takeoff is initiated. The operator can "nudge" the vehicle while on the runway to help keeping it centered and aligned (see '),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RWTO_NUDGE"}},[t._v("RWTO_NUDGE")]),t._v(").")],1),t._v(" "),a("p",[a("em",[t._v("활주로 이륙 모드")]),t._v("에는 다음과 같은 상태가 있습니다.")]),t._v(" "),a("ol",[a("li",[a("strong",[t._v("Throttle ramp")]),t._v(": Throttle is ramped up within "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RWTO_RAMP_TIME"}},[t._v("RWTO_RAMP_TIME")]),t._v(" to "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RWTO_MAX_THR"}},[t._v("RWTO_MAX_THR")]),t._v(".")],1),t._v(" "),a("li",[a("strong",[t._v("Clamped to runway")]),t._v(": Pitch fixed, no roll and takeoff path controlled until the rotation airspeed ("),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RWTO_ROT_AIRSPD"}},[t._v("RWTO_ROT_AIRSPD")]),t._v(") is reached. The operator is able to nudge the vehicle left/right via yaw stick.")],1),t._v(" "),a("li",[a("strong",[t._v("Climbout")]),t._v(": Increase pitch setpoint and climb to takeoff altitude. To prevent wingstrikes, the controller will keep the roll setpoint locked to 0 when close to the ground, and then gradually allow more roll while climbing. It is based on the vehicle geometry as configured in "),a("a",{attrs:{href:"#FW_WING_SPAN"}},[t._v("FW_WING_SPAN")]),t._v(" and "),a("a",{attrs:{href:"#FW_WING_HEIGHT"}},[t._v("FW_WING_HEIGHT")]),t._v(".")])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("For a smooth takeoff, the runway wheel controller possibly needs to be tuned. It consists of a rate controller (P-I-FF-controller with the parameters "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_WR_P"}},[t._v("FW_WR_P")]),t._v(", "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_WR_I"}},[t._v("FW_WR_I")]),t._v(", "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_WR_FF"}},[t._v("FW_WR_FF")]),t._v(") and an outer loop that calculates heading setpoints from course errors and can be tuned via "),a("a",{attrs:{href:"#RWTO_NPFG_PERIOD"}},[t._v("RWTO_NPFG_PERIOD")]),t._v(". :::")],1),t._v(" "),a("p",[t._v("Runway takeoff important parameters:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("매개 변수")]),t._v(" "),a("th",[t._v("설명")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("a",{attrs:{id:"RWTO_TKOFF"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RWTO_TKOFF"}},[t._v("RWTO_TKOFF")])],1),t._v(" "),a("td",[t._v("Enable runway takeoff")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"FW_W_EN"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_W_EN"}},[t._v("FW_W_EN")])],1),t._v(" "),a("td",[t._v("Enable wheel controller")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"RWTO_MAX_THR"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RWTO_MAX_THR"}},[t._v("RWTO_MAX_THR")])],1),t._v(" "),a("td",[t._v("Max throttle during runway takeoff")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"RWTO_RAMP_TIME"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RWTO_RAMP_TIME"}},[t._v("RWTO_RAMP_TIME")])],1),t._v(" "),a("td",[t._v("Throttle ramp up time")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"RWTO_ROT_AIRSPD"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RWTO_ROT_AIRSPD"}},[t._v("RWTO_ROT_AIRSPD")])],1),t._v(" "),a("td",[t._v("Airspeed threshold to start rotation (pitching up). If not configured by operator is set to 0.9*FW_TKO_AIRSPD.")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"RWTO_ROT_TIME"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RWTO_ROT_TIME"}},[t._v("RWTO_ROT_TIME")])],1),t._v(" "),a("td",[t._v("This is the time desired to linearly ramp in takeoff pitch constraints during the takeoff rotation.")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"FW_TKO_AIRSPD"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_TKO_AIRSPD"}},[t._v("FW_TKO_AIRSPD")])],1),t._v(" "),a("td",[t._v("Airspeed setpoint during the takeoff climbout phase (after rotation). If not configured by operator is set to FW_AIRSPD_MIN.")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"RWTO_NUDGE"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RWTO_NUDGE"}},[t._v("RWTO_NUDGE")])],1),t._v(" "),a("td",[t._v("Enable wheel controller nudging while on the runway")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"FW_WING_SPAN"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_WING_SPAN"}},[t._v("FW_WING_SPAN")])],1),t._v(" "),a("td",[t._v("The wingspan of the vehicle. Used to prevent wingstrikes.")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"FW_WING_HEIGHT"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_WING_HEIGHT"}},[t._v("FW_WING_HEIGHT")])],1),t._v(" "),a("td",[t._v("The height of the wings above ground (ground clearance). Used to prevent wingstrikes.")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"RWTO_NPFG_PERIOD"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RWTO_NPFG_PERIOD"}},[t._v("RWTO_NPFG_PERIOD")])],1),t._v(" "),a("td",[t._v("L1 period while steering on runway. Increase for less aggressive response to course errors.")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"FW_FLAPS_TO_SCL"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_FLAPS_TO_SCL"}},[t._v("FW_FLAPS_TO_SCL")])],1),t._v(" "),a("td",[t._v("Flaps setpoint during takeoff")])])])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("기체는 이륙시 항상 일반 FW 최대/최소 스로틀 설정을 따릅니다 ("),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_THR_MIN"}},[t._v("FW_THR_MIN")]),t._v(", "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_THR_MAX"}},[t._v("FW_THR_MAX")]),t._v("). :::")],1),t._v(" "),a("h2",{attrs:{id:"수직-이착륙기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#수직-이착륙기"}},[t._v("#")]),t._v(" 수직 이착륙기")]),t._v(" "),a("p",[t._v("VTOL은 부팅시 MC 모드로 기본 설정되며 일반적으로 "),a("a",{attrs:{href:"#multi-copter-mc"}},[t._v("멀티 콥터 모드")]),t._v(" (또한 더 안전함)에서 이륙하는 것을 가정합니다.")]),t._v(" "),a("p",[t._v("That said, if transitioned to fixed-wing before takeoff, they will takeoff in "),a("a",{attrs:{href:"#fixed_wing"}},[t._v("Fixed-wing")]),t._v(" mode.")])])])])])}),[],!1,null,null,null);e.default=r.exports},328:function(t,e,_){t.exports=_.p+"assets/img/position_fixed.38e4a675.svg"}}]);