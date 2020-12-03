(window.webpackJsonp=window.webpackJsonp||[]).push([[589],{2026:function(t,e,a){"use strict";a.r(e);var i=a(18),_=Object(i.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"이륙-모드"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#이륙-모드"}},[t._v("#")]),t._v(" 이륙 모드")]),t._v(" "),i("p",[i("RouterLink",{attrs:{to:"/ko/getting_started/flight_modes.html#key_position_fixed"}},[i("img",{attrs:{src:a(322),title:"Position fix required (e.g. GPS)",width:"30px"}})])],1),t._v(" "),i("ul",[i("li",[t._v("이륙 (Takeo) </ 0> 비행 모드는 기체가 지정된 높이로 떨어져 나가고 추가 입력을 기다립니다."),i("p")])]),t._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),i("ul",[i("li",[t._v("This mode requires GPS.")]),t._v(" "),i("li",[t._v("The vehicle must be armed before this mode can be engaged.")]),t._v(" "),i("li",[t._v("This mode is automatic - no user intervention is "),i("em",[t._v("required")]),t._v(" to control the vehicle.")]),t._v(" "),i("li",[t._v("RC control switches can be used to change flight modes on any vehicle.")]),t._v(" "),i("li",[t._v("RC stick movement in a multicopter (or VTOL in multicopter mode) will "),i("a",{attrs:{href:"#COM_RC_OVERRIDE"}},[t._v("by default")]),t._v(" change the vehicle to "),i("RouterLink",{attrs:{to:"/ko/flight_modes/position_mc.html"}},[t._v("Position mode")]),t._v(" unless handling a critical battery failsafe.")],1),t._v(" "),i("li",[t._v("The "),i("RouterLink",{attrs:{to:"/ko/config/safety.html#failure_detector"}},[t._v("Failure Detector")]),t._v(" will automatically stop the engines if there is a problem on takeoff.")],1)])]),t._v(" "),i("p",[t._v("The specific behaviour for each vehicle type is described below.")]),t._v(" "),i("h2",{attrs:{id:"멀티-헬기-mc"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#멀티-헬기-mc"}},[t._v("#")]),t._v(" 멀티 헬기 (MC)")]),t._v(" "),i("p",[t._v("A multi rotor ascends to the altitude defined in "),i("code",[t._v("MIS_TAKEOFF_ALT")]),t._v(" and holds position.")]),t._v(" "),i("p",[t._v("RC stick movement will "),i("a",{attrs:{href:"#COM_RC_OVERRIDE"}},[t._v("by default")]),t._v(" change the vehicle to "),i("RouterLink",{attrs:{to:"/ko/flight_modes/position_mc.html"}},[t._v("Position mode")]),t._v(" unless handling a critical battery failsafe.")],1),t._v(" "),i("p",[t._v("Takeoff is affected by the following parameters:")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",[t._v("Parameter")]),t._v(" "),i("th",[t._v("Description")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[i("span",{attrs:{id:"MIS_TAKEOFF_ALT"}}),i("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MIS_TAKEOFF_ALT"}},[t._v("MIS_TAKEOFF_ALT")])],1),t._v(" "),i("td",[t._v("이륙 중 목표 고도 (기본값 : 2.5m)")])]),t._v(" "),i("tr",[i("td",[i("span",{attrs:{id:"MPC_TKO_SPEED"}}),i("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_TKO_SPEED"}},[t._v("MPC_TKO_SPEED")])],1),t._v(" "),i("td",[t._v("상승 속도 (기본값 : 1.5m / s)")])]),t._v(" "),i("tr",[i("td",[i("span",{attrs:{id:"COM_RC_OVERRIDE"}}),i("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_RC_OVERRIDE"}},[t._v("COM_RC_OVERRIDE")])],1),t._v(" "),i("td",[t._v("If enabled, stick movement on a multicopter (or VTOL in multicopter mode) gives control back to the pilot in "),i("RouterLink",{attrs:{to:"/ko/flight_modes/position_mc.html"}},[t._v("Position mode")]),t._v(" (except when vehicle is handling a critical battery failsafe). This can be separately enabled for auto modes and for offboard mode, and is enabled in auto modes by default.")],1)])])]),t._v(" "),i("p",[i("span",{attrs:{id:"fixed_wing"}})]),t._v(" "),i("h2",{attrs:{id:"fixed-wing-fw"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#fixed-wing-fw"}},[t._v("#")]),t._v(" Fixed Wing (FW)")]),t._v(" "),i("p",[t._v("The aircraft takes off in the current direction using either "),i("em",[t._v("catapult/hand-launch mode")]),t._v(" or "),i("em",[t._v("runway takeoff mode")]),t._v(". The mode defaults to catapult/hand launch, but can be set to runway takeoff using "),i("a",{attrs:{href:"#RWTO_TKOFF"}},[t._v("RWTO_TKOFF")]),t._v(". RC stick movement is ignored in both cases.")]),t._v(" "),i("p",[i("span",{attrs:{id:"hand_launch"}})]),t._v(" "),i("h3",{attrs:{id:"catapult-hand-launch"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#catapult-hand-launch"}},[t._v("#")]),t._v(" Catapult/Hand Launch")]),t._v(" "),i("p",[t._v("In "),i("em",[t._v("catapult/hand launch mode")]),t._v(" the vehicle waits to detect launch (based on acceleration trigger). On launch it ramps up to full throttle ("),i("a",{attrs:{href:"#RWTO_MAX_THR"}},[t._v("RWTO_MAX_THR")]),t._v(") in about 2 seconds and then performs a full throttle climbout, with "),i("em",[t._v("minimum")]),t._v(" 10 degree takeoff pitch. Once it reaches "),i("a",{attrs:{href:"#FW_CLMBOUT_DIFF"}},[t._v("FW_CLMBOUT_DIFF")]),t._v(" it will transition to "),i("RouterLink",{attrs:{to:"/ko/flight_modes/hold.html"}},[t._v("Hold mode")]),t._v(" and loiter.")],1),t._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),i("p",[t._v("In addition to the behaviour discussed above there is also a launch detector that may block the launch sequence from starting until some condition is met. For catapult launch this is some acceleration threshold.")])]),t._v(" "),i("p",[i("span",{attrs:{id:"runway_launch"}})]),t._v(" "),i("h3",{attrs:{id:"runway-takeoff"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#runway-takeoff"}},[t._v("#")]),t._v(" Runway Takeoff")]),t._v(" "),i("p",[t._v("The "),i("em",[t._v("runway takeoff mode")]),t._v(" has the following phases:")]),t._v(" "),i("ol",[i("li",[i("p",[i("strong",[t._v("Throttle ramp")]),t._v(": Clamped to the runway (pitch fixed, no roll, and heading hold) until reach the minimum airspeed for takeoff ("),i("a",{attrs:{href:"#FW_AIRSPD_MIN"}},[t._v("FW_AIRSPD_MIN")]),t._v(" x "),i("a",{attrs:{href:"#RWTO_AIRSPD_SCL"}},[t._v("RWTO_AIRSPD_SCL")]),t._v(").")])]),t._v(" "),i("li",[i("p",[t._v("** 이륙 </ 0> : 피치를 높이고 기체 고도> 항법 고도 ( RWTO_NAV_ALT </ 1>)까지 계속하십시오.")])]),i("p"),t._v(" "),i("ul",[i("li",[i("p",[t._v("** 등산 </ 0> :지면 위의 고도  FW_CLMBOUT_DIFF </ 1>까지 상승하십시오. 이 단계에서는 롤 및 제목 제한이 제거됩니다.")])])])]),i("p"),t._v(" "),i("h3",{attrs:{id:"fixed-wing-takeoff-parameters"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#fixed-wing-takeoff-parameters"}},[t._v("#")]),t._v(" Fixed Wing Takeoff Parameters")]),t._v(" "),i("p",[t._v("Takeoff is affected by the following parameters:")]),t._v(" "),i("p",[t._v("최소 이륙을위한 속도의 스케일링 계수. 피치는 대기 속도에 도달하면 증가합니다 :  FW_AIRSPD_MIN </ 0> * "),i("code",[t._v(" RWTO_AIRSPD_SCL </ 0>"),t._v(" "),i("tr",[i("td",[i("span",{attrs:{id:"RWTO_NAV_ALT"}}),i("a",{attrs:{href:"../advanced_config/parameter_reference.md#RWTO_NAV_ALT"}},[t._v("RWTO_NAV_ALT")])]),t._v(" "),i("td",[t._v("지면 위의 고도 (AGL). 약간의 굴림을 허용하는 충분한 지상고가 있습니다. "),i("code",[t._v(" RWTO_NAV_ALT </ 0>에 도달 할 때까지 비행기는 수평을 유지하고 표제를 지키기 위해 방향타 만 사용됩니다 ("),i("span",{attrs:{id:"RWTO_HDG"}},[i("a",{attrs:{href:"../advanced_config/parameter_reference.md#RWTO_HDG"}},[t._v(" RWTO_HDG </ 2> 참조). "),i("code",[t._v(" FW_CLMBOUT_DIFF </ 0>> 0이면 "),i("code",[t._v(" FW_CLMBOUT_DIFF </ 0> 아래에 있어야합니다.")])])])])])])])])]),t._v(" "),i("p",[t._v(":::note\nThe vehicle always respects normal FW max/min throttle settings during takeoff ("),i("a",{attrs:{href:"../advanced_config/parameter_reference.md#FW_THR_MIN"}},[t._v("FW_THR_MIN")]),t._v(", "),i("a",{attrs:{href:"../advanced_config/parameter_reference.md#FW_THR_MAX"}},[t._v("FW_THR_MAX")]),t._v(").\n:::")]),t._v(" "),i("h2",[t._v("VTOL")]),t._v(" "),i("p",[t._v("VTOLs default to MC mode on boot, and it is generally expected that they will take off in "),i("a",{attrs:{href:"#multi-copter-mc"}},[t._v("multicopter mode")]),t._v(" (and also safer).")]),t._v(" "),i("p",[t._v("That said, if transitioned to Fixed wing before takeoff, they will takeoff in "),i("a",{attrs:{href:"#fixed_wing"}},[t._v("Fixed Wing")]),t._v(" mode.")])])}),[],!1,null,null,null);e.default=_.exports},322:function(t,e,a){t.exports=a.p+"assets/img/position_fixed.c1403cf0.svg"}}]);