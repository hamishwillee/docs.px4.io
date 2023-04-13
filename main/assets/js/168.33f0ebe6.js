(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{2516:function(t,e,_){"use strict";_.r(e);var a=_(19),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"안전-설정-사고-방지"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#안전-설정-사고-방지"}},[t._v("#")]),t._v(" 안전 설정(사고 방지)")]),t._v(" "),a("p",[t._v("PX4에는 문제 발생시에 기체를 보호하고 복구하는 다양한 안전장치들을 제공합니다.")]),t._v(" "),a("ul",[a("li",[a("em",[t._v("안전장치")]),t._v(" 기능을 통하여 안전 비행 지역, 사고 방지 조건 및 사고방지 기능 작동시 수행할 "),a("a",{attrs:{href:"#failsafe-actions"}},[t._v("작업")]),t._v("(예: 착륙, 현 위치 유지)을 지정할 수 있습니다. 가장 중요한 안전장치는 "),a("em",[t._v("QGroundControl")]),t._v("의 "),a("a",{attrs:{href:"#qgroundcontrol-safety-setup"}},[t._v("안전 설정")]),t._v(" 화면에서 설정합니다. 기타는 "),a("a",{attrs:{href:"#other-safety-settings"}},[t._v("매개 변수")]),t._v("를 통하여 설정합니다.")]),t._v(" "),a("li",[t._v("리모콘의 "),a("a",{attrs:{href:"#emergency-switches"}},[t._v("안전 스위치")]),t._v("를 사용하여 문제 발생시 즉시 모터를 중지하거나 기체를 원위치로 복귀시킬 수 있습니다.")])]),t._v(" "),a("h2",{attrs:{id:"안전장치-기능"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#안전장치-기능"}},[t._v("#")]),t._v(" 안전장치 기능")]),t._v(" "),a("p",[t._v("When a failsafe is triggered, the default behavior (for most failsafes) is to enter Hold for "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_FAIL_ACT_T"}},[t._v("COM_FAIL_ACT_T")]),t._v(" seconds before performing an associated failsafe action. This gives the user time to notice what is happening and override the failsafe if needed. In most cases this can be done by using RC or a GCS to switch modes (note that during the failsafe-hold, moving the RC sticks does not trigger an override).")],1),t._v(" "),a("p",[t._v("The list below shows the set of all failsafe actions, ordered in increasing severity. Note that different types of failsafe may not support all of these actions.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("동작")]),t._v(" "),a("th",[t._v("설명")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("a",{attrs:{id:"action_none"}}),t._v("없음/비활성화")]),t._v(" "),a("td",[t._v("No action. The failsafe will be ignored.")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"action_warning"}}),t._v("경고")]),t._v(" "),a("td",[t._v("A warning message will be sent (i.e. to "),a("em",[t._v("QGroundControl")]),t._v(").")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"action_hold"}}),a("RouterLink",{attrs:{to:"/ko/flight_modes/hold.html"}},[t._v("대기 모드")])],1),t._v(" "),a("td",[t._v("기체는 "),a("em",[t._v("대기 모드")]),t._v("로 들어갑니다. 멀티콥터는 제자리에서 호버링을 하고, 고정익은 원주 선회 비행을 합니다.")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"action_return"}}),a("RouterLink",{attrs:{to:"/ko/flight_modes/return.html"}},[t._v("복귀 모드")])],1),t._v(" "),a("td",[t._v("기체는 "),a("em",[t._v("복귀 모드")]),t._v("로 들어갑니다. 복귀 경로는 "),a("a",{attrs:{href:"#return-mode-settings"}},[t._v("복귀 설정")]),t._v("에서 자세히 설정할 수 있습니다.")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"action_land"}}),a("RouterLink",{attrs:{to:"/ko/flight_modes/land.html"}},[t._v("착륙 모드")])],1),t._v(" "),a("td",[t._v("차량은 "),a("em",[t._v("착륙 모드")]),t._v("로 전환하여 즉시 착륙합니다.")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"action_disarm"}}),t._v("Disarm")]),t._v(" "),a("td",[t._v("Stops the motors immediately.")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"action_flight_termination"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/flight_termination.html"}},[t._v("비행 종료")])],1),t._v(" "),a("td",[t._v("모든 컨트롤러를 끄고 모든 PWM 출력을 안전 장치 값(예 : "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#PWM_MAIN_FAIL1"}},[t._v("PWM_MAIN_FAILn")]),t._v(", "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#PWM_AUX_FAIL1"}},[t._v("PWM_AUX_FAILn")]),t._v(")으로 설정합니다. 안전장치 출력은 낙하산, 랜딩 기어를 배치하거나 다른 작업을 수행할 수 있습니다. 고정익은 안전하게 활공할 수 있습니다.")],1)])])]),t._v(" "),a("p",[t._v("If multiple failsafes are triggered, the more severe action is taken. For example if both RC and GPS are lost, and manual control loss is set to "),a("a",{attrs:{href:"#action_return"}},[t._v("Return mode")]),t._v(" and GCS link loss to "),a("a",{attrs:{href:"#action_land"}},[t._v("Land")]),t._v(", Land is executed.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("The exact behavior when different failsafes are triggered can be tested with the "),a("RouterLink",{attrs:{to:"/ko/config/safety_simulation.html"}},[t._v("Failsafe State Machine Simulation")]),t._v(".")],1)]),t._v(" "),a("h2",{attrs:{id:"qgroundcontrol-안전-설정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#qgroundcontrol-안전-설정"}},[t._v("#")]),t._v(" QGroundControl 안전 설정")]),t._v(" "),a("p",[t._v("The "),a("em",[t._v("QGroundControl")]),t._v(" Safety Setup page is accessed by clicking the "),a("em",[t._v("QGroundControl")]),t._v(" icon, "),a("strong",[t._v("Vehicle Setup")]),t._v(", and then "),a("strong",[t._v("Safety")]),t._v(" in the sidebar). This includes the most important failsafe settings (battery, RC loss etc.) and the settings for the triggered actions "),a("em",[t._v("Return")]),t._v(" and "),a("em",[t._v("Land")]),t._v(".")]),t._v(" "),a("p",[a("img",{attrs:{src:_(692),alt:"Safety Setup(QGC)"}})]),t._v(" "),a("h3",{attrs:{id:"배터리-부족-안전장치"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#배터리-부족-안전장치"}},[t._v("#")]),t._v(" 배터리 부족 안전장치")]),t._v(" "),a("p",[t._v("하나 이상의 배터리의 용량이 레벨값 아래로 떨어지면 배터리 부족 안전 장치가 작동합니다.")]),t._v(" "),a("p",[a("img",{attrs:{src:_(693),alt:"안전 - 배터리 (QGC)"}})]),t._v(" "),a("p",[t._v("가장 일반적인 설정은 위와 같이 값과 작업을 설정하는 것입니다 ("),a("code",[t._v("경고 > 페일 세이프 > 긴급")]),t._v(" 사용). 이 설정을 사용하면 안전 장치가 경고를 표시한 다음 원위치로 귀환하며, 용량이 일정 수준 아래로 떨어지면 최종적으로 착륙합니다.")]),t._v(" "),a("p",[a("a",{attrs:{href:"#BAT_CRIT_THR"}},[t._v("배터리 페일 세이프 레벨")]),t._v(" 안전장치 동작 레벨에 도달하면 경고, 귀환 또는 착륙하도록 "),a("em",[t._v("안전장치 조치")]),t._v("를 설정할 수 있습니다.")]),t._v(" "),a("p",[t._v("설정에 관련된 기본 매개변수는 다음과 같습니다.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("설정")]),t._v(" "),a("th",[t._v("매개변수")]),t._v(" "),a("th",[t._v("설명")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("안전장치 동작")]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_LOW_BAT_ACT"}},[t._v("COM_LOW_BAT_ACT")])],1),t._v(" "),a("td",[t._v("용량이 "),a("a",{attrs:{href:"#BAT_CRIT_THR"}},[t._v("배터리 안전장치 동작 수준")]),t._v(" 아래로 내려가면 경고, 귀환 또는 착륙, 또는 경고, 귀환, 아래의 각 수준 설정에 따라 착륙합니다.")])]),t._v(" "),a("tr",[a("td",[t._v("배터리 경고 수준")]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#BAT_LOW_THR"}},[t._v("BAT_LOW_THR")])],1),t._v(" "),a("td",[t._v("경고 (또는 기타 조치)에 대한 용량을 백분율로 설정합니다.")])]),t._v(" "),a("tr",[a("td",[a("span",{attrs:{id:"BAT_CRIT_THR"}}),t._v("배터리 안정장치 수준")]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#BAT_CRIT_THR"}},[t._v("BAT_CRIT_THR")])],1),t._v(" "),a("td",[t._v("귀환 조치 (또는 단일 조치가 선택된 경우 다른 조치)에 대한 용량에 대한 백분율.")])]),t._v(" "),a("tr",[a("td",[t._v("배터리 비상 수준")]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#BAT_EMERGEN_THR"}},[t._v("BAT_EMERGEN_THR")])],1),t._v(" "),a("td",[t._v("즉시 착륙시의 용량의 백분율.")])])])]),t._v(" "),a("h3",{attrs:{id:"rc-손실-안전장치"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rc-손실-안전장치"}},[t._v("#")]),t._v(" RC 손실 안전장치")]),t._v(" "),a("p",[t._v("The RC Loss failsafe may be triggered if the RC transmitter link is lost in manual modes (by default RC loss does not trigger the failsafe in missions, hold mode, or offboard mode).")]),t._v(" "),a("p",[a("img",{attrs:{src:_(694),alt:"안전 - RC 손실 (QGC)"}})]),t._v(" "),a("p",[t._v("Generally you will only want to set the "),a("em",[t._v("Failsafe")]),t._v(" action:")]),t._v(" "),a("ul",[a("li",[t._v("The "),a("em",[t._v("RC Lost Timeout")]),t._v(" is the time after data stops updating before the link is considered lost. This must be kept short because the vehicle will continue to fly using the old RC data until the timeout triggers.")]),t._v(" "),a("li",[t._v("You may need to modify the "),a("a",{attrs:{href:"#COM_FAIL_ACT_T"}},[t._v("COM_FAIL_ACT_T")]),t._v(" parameter. This is a delay after the link is lost and before the failsafe action is triggered in which the vehicle waits in hold mode for the RC system to reconnect. This might be longer for long-range flights so that intermittent connection loss doesn't immediately invoke the failsafe. It can be to zero so that the failsafe triggers immediately.")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("PX4는 여러 임의의 다각형 및 원형 포함 및 제외 영역 ([Flying > GeoFence](../flying/geofence.md))이 있는 GeoFence를 지원합니다.")])]),t._v(" "),a("p",[t._v("Additional (and underlying) parameter settings are shown below.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("매개변수")]),t._v(" "),a("th",[t._v("설정")]),t._v(" "),a("th",[t._v("설명")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("a",{attrs:{id:"COM_RC_LOSS_T"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_RC_LOSS_T"}},[t._v("COM_RC_LOSS_T")])],1),t._v(" "),a("td",[t._v("RC 연결불량 시간 초과")]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_RC_LOSS_T"}},[t._v("COM_RC_LOSS_T")])],1)]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"COM_FAIL_ACT_T"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_FAIL_ACT_T"}},[t._v("COM_FAIL_ACT_T")])],1),t._v(" "),a("td",[t._v("Failsafe Reaction Delay")]),t._v(" "),a("td",[t._v("Delay in seconds between failsafe condition triggered and failsafe reaction (RTL, Land, Hold).")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"NAV_RCL_ACT"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#NAV_RCL_ACT"}},[t._v("NAV_RCL_ACT")])],1),t._v(" "),a("td",[t._v("안전장치 동작")]),t._v(" "),a("td",[t._v("Disabled, Loiter, Return, Land, Disarm, Terminate.")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"COM_RCL_EXCEPT"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_RCL_EXCEPT"}},[t._v("COM_RCL_EXCEPT")])],1),t._v(" "),a("td",[t._v("RC 손실 예외")]),t._v(" "),a("td",[t._v("RC 손실이 무시되는 모드를 설정합니다: 미션(기본값), 정지, 오프보드.")])])])]),t._v(" "),a("h3",{attrs:{id:"데이터-연결불량-안전장치"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#데이터-연결불량-안전장치"}},[t._v("#")]),t._v(" 데이터 연결불량 안전장치")]),t._v(" "),a("p",[t._v("데이터 연결불량 안전 장치는 "),a("RouterLink",{attrs:{to:"/ko/flying/missions.html"}},[t._v("미션")]),t._v(" 수행시, 텔레메트리 통신(지상국에 연결)이 끊어지면 동작합니다.")],1),t._v(" "),a("p",[a("img",{attrs:{src:_(695),alt:"안전 - 데이터 링크 손실 (QGC)"}})]),t._v(" "),a("p",[t._v("설정에 관련된 기본 매개변수는 다음과 같습니다.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("설정")]),t._v(" "),a("th",[t._v("매개변수")]),t._v(" "),a("th",[t._v("설명")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("데이터 연결불량 시간 초과")]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_DL_LOSS_T"}},[t._v("COM_DL_LOSS_T")])],1),t._v(" "),a("td",[t._v("데이터 연결이 끊어진 후 안전 장치가 동작하기 전까지의 시간입니다.")])]),t._v(" "),a("tr",[a("td",[t._v("안전장치 동작")]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#NAV_DLL_ACT"}},[t._v("NAV_DLL_ACT")])],1),t._v(" "),a("td",[t._v("Disabled, Hold mode, Return mode, Land mode, Disarm, Terminate.")])])])]),t._v(" "),a("h3",{attrs:{id:"geofence-안전장치"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#geofence-안전장치"}},[t._v("#")]),t._v(" Geofence 안전장치")]),t._v(" "),a("p",[a("em",[t._v("Geofence 안전장치")]),t._v('는 홈 위치가 중심 좌표인 "가상" 실린더입니다. 차량이 반경을 벗어나거나 고도 이상으로 이동하면 지정된 '),a("em",[t._v("안전장치 조치")]),t._v("가 동작합니다.")]),t._v(" "),a("p",[a("img",{attrs:{src:_(696),alt:"안전 - 지오펜스 (QGC)"}})]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("쿼드슈트는 "),a("code",[t._v("param2")]),t._v("가 "),a("code",[t._v("1")]),t._v("로 설정된 MAVLINK "),a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_DO_VTOL_TRANSITION",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAV_CMD_DO_VTOL_TRANSITION"),a("OutboundLink")],1),t._v(" 메시지를 전송하여 실행할 수 있습니다.")])]),t._v(" "),a("p",[t._v("설정 및 기본 "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#geofence"}},[t._v("Geofence 매개변수")]),t._v("는 다음과 같습니다.")],1),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("설정")]),t._v(" "),a("th",[t._v("매개변수")]),t._v(" "),a("th",[t._v("설명")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("nobr",[t._v("위반시 동작")])],1),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#GF_ACTION"}},[t._v("GF_ACTION")])],1),t._v(" "),a("td",[t._v("없음, 경고, 보류 모드, 반환 모드, 종료, 착륙.")])]),t._v(" "),a("tr",[a("td",[t._v("최대 반경")]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#GF_MAX_HOR_DIST"}},[t._v("GF_MAX_HOR_DIST")])],1),t._v(" "),a("td",[t._v("지오펜스 실린더의 수평 반경. 0 인 경우 지오펜스가 비활성화됩니다.")])]),t._v(" "),a("tr",[a("td",[t._v("최대 고도")]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#GF_MAX_VER_DIST"}},[t._v("GF_MAX_VER_DIST")])],1),t._v(" "),a("td",[t._v("지오펜스 실린더의 높이. 0 인 경우 지오펜스가 비활성화됩니다.")])])])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[a("code",[t._v("GF_ACTION")]),t._v("을 종료하도록 설정하면, 지오펜스 위반시 기체의 동작이 정지합니다. 이 기능은 위험성이 높으므로 "),a("a",{attrs:{href:"#CBRK_FLIGHTTERM"}},[t._v("CBRK_FLIGHTTERM")]),t._v("을 사용하여 비활성화되며, 시스템을 실제로 종료하려면 0으로 재설정하여야 합니다.")])]),t._v(" "),a("p",[t._v("다음 설정도 가능하지만 QGC UI에 표시되지 않습니다.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("설정")]),t._v(" "),a("th",[t._v("매개변수")]),t._v(" "),a("th",[t._v("설명")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("지오펜스 고도 모드")]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#GF_ALTMODE"}},[t._v("GF_ALTMODE")])],1),t._v(" "),a("td",[t._v("사용 고도 기준: 0 = WGS84, 1 = AMSL.")])]),t._v(" "),a("tr",[a("td",[t._v("지오펜스 카운터 제한")]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#GF_COUNT"}},[t._v("GF_COUNT")])],1),t._v(" "),a("td",[t._v("지오펜스 위반이 트리거되기 전에 펜스 외부에서 필요한 후속 위치 측정 수를 설정합니다.")])]),t._v(" "),a("tr",[a("td",[t._v("지오펜스 소스")]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#GF_SOURCE"}},[t._v("GF_SOURCE")])],1),t._v(" "),a("td",[t._v("위치 소스가 글로벌 위치인지 또는 GPS 장치에서 직접 가져오는 지를 설정합니다.")])]),t._v(" "),a("tr",[a("td",[a("span",{attrs:{id:"CBRK_FLIGHTTERM"}}),t._v("비행 종료용 회로 차단기")]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#CBRK_FLIGHTTERM"}},[t._v("CBRK_FLIGHTTERM")])],1),t._v(" "),a("td",[t._v("비행 종료 작업을 활성화/비활성화합니다 (기본적으로 비활성화 됨).")])])])]),t._v(" "),a("h3",{attrs:{id:"복귀-설정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#복귀-설정"}},[t._v("#")]),t._v(" 복귀 설정")]),t._v(" "),a("p",[a("em",[t._v("귀환")]),t._v("는 "),a("RouterLink",{attrs:{to:"/ko/flight_modes/return.html"}},[t._v("귀환 모드")]),t._v("를 사용하여 차량을 홈 위치로 돌아오게하는 "),a("a",{attrs:{href:"#failsafe-actions"}},[t._v("안전장치")]),t._v("입니다. 이 섹션에서는 귀환 후 착륙/배회 동작을 설정 방법에 대하여 설명합니다.")],1),t._v(" "),a("p",[a("img",{attrs:{src:_(697),alt:"안전 - 귀한 설정 (QGC)"}})]),t._v(" "),a("p",[t._v("설정 기본 매개변수는 다음과 같습니다:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("설정")]),t._v(" "),a("th",[t._v("매개변수")]),t._v(" "),a("th",[t._v("설명")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("고도 상승")]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RTL_RETURN_ALT"}},[t._v("RTL_RETURN_ALT")])],1),t._v(" "),a("td",[t._v("기체은 귀환을 위해이 최소 높이 (아래에있는 경우)까지 상승합니다.")])]),t._v(" "),a("tr",[a("td",[t._v("기본 동작")]),t._v(" "),a("td"),t._v(" "),a("td",[a("em",[t._v("귀환")]),t._v("의 선택 목록 : 착륙, 배회, 미착륙 또는 배회, 일정시간후 착륙")])]),t._v(" "),a("tr",[a("td",[a("nobr",[t._v("정지비행 고도")])],1),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RTL_DESCEND_ALT"}},[t._v("RTL_DESCEND_ALT")])],1),t._v(" "),a("td",[t._v("귀환시 배회를 선택하면 기체의 유지 고도를 설정할 수 있습니다.")])]),t._v(" "),a("tr",[a("td",[a("nobr",[t._v("정지비행 시간")])],1),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RTL_LAND_DELAY"}},[t._v("RTL_LAND_DELAY")])],1),t._v(" "),a("td",[t._v("배회후 착륙이 선택하면 기체의 정지 비행 시간을 설정합니다.")])])])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("The return behaviour is defined by "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RTL_LAND_DELAY"}},[t._v("RTL_LAND_DELAY")]),t._v(". 음수이면 기체는 즉시 착륙합니다. 더 자세한 정보는 "),a("RouterLink",{attrs:{to:"/ko/flight_modes/return.html"}},[t._v("복귀 모드")]),t._v("를 참고하십시오.")],1)]),t._v(" "),a("h3",{attrs:{id:"착륙-모드-설정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#착륙-모드-설정"}},[t._v("#")]),t._v(" 착륙 모드 설정")]),t._v(" "),a("p",[a("em",[t._v("현재 위치의 착륙")]),t._v("는 "),a("RouterLink",{attrs:{to:"/ko/flight_modes/land.html"}},[t._v("착륙 모드")]),t._v("를 실행하는 일반적인 "),a("a",{attrs:{href:"#failsafe-actions"}},[t._v("안전 조치")]),t._v("입니다. 이 섹션에서는 착륙후 기체의 자동 시동 방법과 시간 설정 방법을 설명합니다. 멀티콥터에서만 하강 속도를 추가로 설정할 수 있습니다.")],1),t._v(" "),a("p",[a("img",{attrs:{src:_(698),alt:"안전 - 착륙 모드 설정(QGC)"}})]),t._v(" "),a("p",[t._v("설정 기본 매개변수는 다음과 같습니다:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("설정")]),t._v(" "),a("th",[t._v("매개변수")]),t._v(" "),a("th",[t._v("설명")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("nobr",[t._v("착륙후 시동 꺼기")])],1),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_DISARM_LAND"}},[t._v("COM_DISARM_LAND")])],1),t._v(" "),a("td",[t._v("착륙후 시동을 끄려면 확인란을 선택합니다. 값은 0 이상으로 1초 미만의 값도 설정할 수 있습니다.")])]),t._v(" "),a("tr",[a("td",[t._v("착륙 하강률")]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_LAND_SPEED"}},[t._v("MPC_LAND_SPEED")])],1),t._v(" "),a("td",[t._v("착륙 하강율(멀티콥더에만 적용됨).")])])])]),t._v(" "),a("h2",{attrs:{id:"기타-안전-장치-설정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#기타-안전-장치-설정"}},[t._v("#")]),t._v(" 기타 안전 장치 설정")]),t._v(" "),a("p",[t._v("이 섹션에는 "),a("em",[t._v("QGroundControl")]),t._v("의 "),a("a",{attrs:{href:"#qgroundcontrol-safety-setup"}},[t._v("안전 설정")]),t._v(" 페이지에서 설정할 수 없는 안전장치 설정에 관하여 설명합니다.")]),t._v(" "),a("h3",{attrs:{id:"위치-gps-손실-안전-장치"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#위치-gps-손실-안전-장치"}},[t._v("#")]),t._v(" 위치(GPS) 손실 안전 장치")]),t._v(" "),a("p",[a("em",[t._v("위치 손실 안전장치")]),t._v("는 위치 추정이 필요한 모드에서 PX4 위치 추정 품질이 일정 수준(GPS 손실로 인해 발생할 수 있음) 이하가 되면 작동합니다.")]),t._v(" "),a("p",[t._v("실패 동작은 RC 제어 여부 (및 고도 정보)에 따라 "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_POSCTL_NAVL"}},[t._v("COM_POSCTL_NAVL")]),t._v("에 의해 결정됩니다.")],1),t._v(" "),a("ul",[a("li",[a("code",[t._v("0")]),t._v(" : 원격 제어 가능. 고도 추정치를 사용할 수 있으면 "),a("em",[t._v("고도 모드")]),t._v("로 전환하고, 그렇지 않으면 "),a("em",[t._v("안정 모드")]),t._v("로 전환됩니다.")]),t._v(" "),a("li",[a("code",[t._v("1")]),t._v(" : 원격 제어 "),a("em",[t._v("불가")]),t._v(". 고도값을 사용할 수있는 경우 "),a("em",[t._v("착륙 모드")]),t._v("로 전환하고, 그렇지 않으면 비행 종료를 입력합니다.")])]),t._v(" "),a("p",[t._v("Fixed-wing vehicles and VTOLs in fixed-wing flight additionally have a parameter ("),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_GPSF_LT"}},[t._v("FW_GPSF_LT")]),t._v(") that defines how long they will loiter (circle with a constant roll angle ("),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_GPSF_R"}},[t._v("FW_GPSF_R")]),t._v(") at the current altitude) after losing position before attempting to land. If VTOLs have are configured to switch to hover for landing ("),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#NAV_FORCE_VT"}},[t._v("NAV_FORCE_VT")]),t._v(") then they will first transition and then descend.")],1),t._v(" "),a("p",[t._v("The relevant parameters for all vehicles shown below.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("매개변수")]),t._v(" "),a("th",[t._v("설명")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_POS_FS_DELAY"}},[t._v("COM_POS_FS_DELAY")])],1),t._v(" "),a("td",[t._v("위치 손실 후 안전 장치 동작 지연 여부 설정")])]),t._v(" "),a("tr",[a("td",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_POSCTL_NAVL"}},[t._v("COM_POSCTL_NAVL")])],1),t._v(" "),a("td",[t._v("임무 중 위치 제어 탐색 손실 응답. 값 : 0 - RC 사용 가정, 1 - RC 없음 가정.")])])])]),t._v(" "),a("p",[t._v("Parameters that only affect Fixed-wing vehicles:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("매개변수")]),t._v(" "),a("th",[t._v("설명")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_GPSF_LT"}},[t._v("FW_GPSF_LT")])],1),t._v(" "),a("td",[t._v("Loiter time (waiting for GPS recovery before it goes into land or flight termination). 비활성화 하려면 0으로 설정하십시오.")])]),t._v(" "),a("tr",[a("td",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_GPSF_R"}},[t._v("FW_GPSF_R")])],1),t._v(" "),a("td",[t._v("선회 비행시 고정 롤/뱅크 각도.")])])])]),t._v(" "),a("h3",{attrs:{id:"오프-보드-안전-장치"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#오프-보드-안전-장치"}},[t._v("#")]),t._v(" 오프 보드 안전 장치")]),t._v(" "),a("p",[t._v("오프 보드 제어시에 오프 보드 링크가 손실되면 "),a("em",[t._v("오프 보드 안전장치")]),t._v("가 동작합니다. RC 연결을 사용 여부에 따라 다른 안전 장치의 작동을 지정할 수 있습니다.")]),t._v(" "),a("p",[t._v("관련된 매개 변수는 다음과 같습니다.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("매개변수")]),t._v(" "),a("th",[t._v("설명")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_OF_LOSS_T"}},[t._v("COM_OF_LOSS_T")])],1),t._v(" "),a("td",[t._v("오프 보드 단락이후 안전장치 동작 지연 여부 설정.")])]),t._v(" "),a("tr",[a("td",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_OBL_RC_ACT"}},[t._v("COM_OBL_RC_ACT")])],1),t._v(" "),a("td",[t._v("RC를 사용할 수있는 경우 비상 안전조치 : 위치 모드, 고도 모드, 수동 모드, 귀환 모드, 착륙 모드, 대기 모드.")])])])]),t._v(" "),a("h3",{attrs:{id:"mission-feasibility-checks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mission-feasibility-checks"}},[t._v("#")]),t._v(" Mission Feasibility Checks")]),t._v(" "),a("p",[t._v("A number of checks are run to ensure that a mission can only be started if it is "),a("em",[t._v("feasible")]),t._v(". For example, the checks ensures that the first waypoint isn't too far away, and that the mission flight path doesn't conflict with any geofences.")]),t._v(" "),a("p",[t._v('As these are not strictly speaking "failsafes" they are documented in '),a("RouterLink",{attrs:{to:"/ko/flight_modes/mission.html#mission-feasibility-checks"}},[t._v("Mission Mode > Mission Feasibility Checks")]),t._v(".")],1),t._v(" "),a("h3",{attrs:{id:"교통-회피-안전-장치"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#교통-회피-안전-장치"}},[t._v("#")]),t._v(" 교통 회피 안전 장치")]),t._v(" "),a("p",[t._v("교통 회피 안전 장치를 사용하면 PX4가 미션 중에 transponders 데이터(예 : "),a("RouterLink",{attrs:{to:"/ko/advanced_features/traffic_avoidance_adsb.html"}},[t._v("ADSB transponder")]),t._v("에서)에 응답할 수 있습니다.")],1),t._v(" "),a("p",[t._v("관련된 매개 변수는 다음과 같습니다.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("매개변수")]),t._v(" "),a("th",[t._v("설명")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#NAV_TRAFF_AVOID"}},[t._v("NAV_TRAFF_AVOID")])],1),t._v(" "),a("td",[t._v("비상 안전 장치를 설정합니다 : 비활성화, 경고, 귀환 모드, 착륙 모드.")])])])]),t._v(" "),a("h3",{attrs:{id:"quad-chute-failsafe"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quad-chute-failsafe"}},[t._v("#")]),t._v(" Quad-chute Failsafe")]),t._v(" "),a("p",[t._v("Failsafe for when a VTOL vehicle can no longer fly in fixed-wing mode, perhaps because a pusher motor, airspeed sensor, or control surface, failed. If triggered, the vehicle will immediately switch to multicopter mode and execute action defined in parameter "),a("a",{attrs:{href:"#COM_QC_ACT"}},[t._v("COM_QC_ACT")]),t._v(" .")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("The quad-chute can also be triggered by sending a MAVLINK "),a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_DO_VTOL_TRANSITION",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAV_CMD_DO_VTOL_TRANSITION"),a("OutboundLink")],1),t._v(" message with "),a("code",[t._v("param2")]),t._v(" set to "),a("code",[t._v("1")]),t._v(".")])]),t._v(" "),a("p",[t._v("The parameters that control when the quad-chute will trigger are listed in the table below.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("매개변수")]),t._v(" "),a("th",[t._v("설명")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("a",{attrs:{id:"COM_QC_ACT"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_QC_ACT"}},[t._v("COM_QC_ACT")])],1),t._v(" "),a("td",[t._v("Defines automatic action taken after a quad-chute. Can be set to: Warning only, Return, Land, Hold.")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"VT_FW_QC_HMAX"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#VT_FW_QC_HMAX"}},[t._v("VT_FW_QC_HMAX")])],1),t._v(" "),a("td",[t._v("Maximum height above the ground (if available, otherwise above home if available, otherwise above the local origin) where triggering a quad-chute is possible. At high altitudes there is a big risk to deplete the battery and therefore crash if quad-chuting there.")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"VT_QC_HR_ERROR_I"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#VT_QC_HR_ERROR_I"}},[t._v("VT_QC_HR_ERROR_I")])],1),t._v(" "),a("td",[t._v("Quad-chute uncommanded descent threshold. This is the threshold for integrated height rate error to trigger a uncommanded-descent quad-chute. Only checked in altitude-controlled fixed-wing flight. Additional conditions that have to be met for uncommanded descent detection are a positive (climbing) height rate setpoint and a negative (sinking) current height rate estimate.")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"VT_QC_T_ALT_LOSS"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#VT_QC_T_ALT_LOSS"}},[t._v("VT_QC_T_ALT_LOSS")])],1),t._v(" "),a("td",[t._v("Altitude loss threshold for quad-chute triggering during VTOL transition to fixed-wing")])])])]),t._v(" "),a("p",[t._v("flight. Quad-chute triggers the current altitude is more than this value below the altitude at the beginning of the transition.\n"),a("a",{attrs:{id:"VT_FW_MIN_ALT"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#VT_FW_MIN_ALT"}},[t._v("VT_FW_MIN_ALT")]),t._v(" | Minimum altitude above Home for fixed-wing flight. When the altitude drops below this value in fixed-wing flight the vehicle a quad-chute is triggered.\n"),a("a",{attrs:{id:"VT_FW_QC_R"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#VT_FW_QC_R"}},[t._v("VT_FW_QC_R")]),t._v(" | Absolute roll threshold for quad-chute triggering in FW mode.\n"),a("a",{attrs:{id:"VT_FW_QC_P"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#VT_FW_QC_P"}},[t._v("VT_FW_QC_P")]),t._v(" | Absolute pitch threshold for quad-chute triggering in FW mode.")],1),t._v(" "),a("h2",{attrs:{id:"고장-감지기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#고장-감지기"}},[t._v("#")]),t._v(" 고장 감지기")]),t._v(" "),a("p",[t._v("고장 감지기를 사용하여 차량의 예기치 않게 전복되거나 외부의 고장 감지 시스템에 따른 보호 조치를 할 수 있습니다.")]),t._v(" "),a("p",[a("strong",[t._v("비행")]),t._v("중에 실패 감지기를 사용하여 실패 조건이 충족되면 "),a("RouterLink",{attrs:{to:"/ko/advanced_config/flight_termination.html"}},[t._v("비행 종료")]),t._v("를 작동시켜서, "),a("RouterLink",{attrs:{to:"/ko/peripherals/parachute.html"}},[t._v("낙하산")]),t._v("을 펼치는 등의 작업을 수행할 수 있습니다.")],1),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("비행 중 고장 감지는 기본적으로 비활성화되어 있습니다 (매개 변수 : "),a("a",{attrs:{href:"#CBRK_FLIGHTTERM"}},[t._v("CBRK_FLIGHTTERM=0")]),t._v("을 설정하여 활성화).")])]),t._v(" "),a("p",[t._v("During "),a("strong",[t._v("takeoff")]),t._v(" the failure detector "),a("a",{attrs:{href:"#attitude-trigger"}},[t._v("attitude trigger")]),t._v(" invokes the "),a("a",{attrs:{href:"#action_disarm"}},[t._v("disarm action")]),t._v(" if the vehicle flips (disarm kills the motors but, unlike flight termination, will not launch a parachute or perform other failure actions). 이 확인은 "),a("code",[t._v("CBRK_FLIGHTTERM")]),t._v(" 매개 변수에 관계없이 "),a("em",[t._v("이륙시 항상 사용")]),t._v("합니다.")]),t._v(" "),a("p",[t._v("고장 감지기는 기체의 뒤집히는 것이 "),a("em",[t._v("예상")]),t._v("되는 경우를 제외하고, 모든 기체 유형 및 모드에서 활성화됩니다 (예 : "),a("RouterLink",{attrs:{to:"/ko/flight_modes/altitude_mc.html"}},[t._v("Acro 모드(MC), [Acro 모드 (FW)](../flight_modes/altitude_fw.md), [Rattitude](../flight_modes/manual_fw.md) 및 수동 (FW)")]),t._v(").")],1),t._v(" "),a("h3",{attrs:{id:"자세-감지기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#자세-감지기"}},[t._v("#")]),t._v(" 자세 감지기")]),t._v(" "),a("p",[t._v("기체의 자세가 지정된 시간보다 오랫동안 사전 정의 된 피치 및 롤 값을 초과하는 경우 동작하도록 고장 감지기를 설정할 수 있습니다.")]),t._v(" "),a("p",[t._v("관련된 매개 변수는 다음과 같습니다.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("매개변수")]),t._v(" "),a("th",[t._v("설명")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("a",{attrs:{id:"CBRK_FLIGHTTERM"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#CBRK_FLIGHTTERM"}},[t._v("CBRK_FLIGHTTERM")])],1),t._v(" "),a("td",[t._v("비행 종료 회로 차단기. 고장 감지기 또는 FMU 손실로 인한 비행 종료를 활성화하려면, 121212 (기본값)에서 설정을 해제합니다.")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"FD_FAIL_P"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FD_FAIL_P"}},[t._v("FD_FAIL_P")])],1),t._v(" "),a("td",[t._v("최대 허용 피치 (도 단위).")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"FD_FAIL_R"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FD_FAIL_R"}},[t._v("FD_FAIL_R")])],1),t._v(" "),a("td",[t._v("최대 허용 롤 (도 단위).")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"FD_FAIL_P_TTRI"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FD_FAIL_P_TTRI"}},[t._v("FD_FAIL_P_TTRI")])],1),t._v(" "),a("td",[t._v("실패 감지를 위해 "),a("a",{attrs:{href:"#FD_FAIL_P"}},[t._v("FD_FAIL_P")]),t._v("를 초과하는 시간 (기본값 0.3 초).")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"FD_FAIL_R_TTRI"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FD_FAIL_R_TTRI"}},[t._v("FD_FAIL_R_TTRI")])],1),t._v(" "),a("td",[t._v("실패 감지를 위해 "),a("a",{attrs:{href:"#FD_FAIL_R"}},[t._v("FD_FAIL_R")]),t._v("을 초과하는 시간 (기본값 0.3 초).")])])])]),t._v(" "),a("h3",{attrs:{id:"외부-자동-작동-시스템-ats"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#외부-자동-작동-시스템-ats"}},[t._v("#")]),t._v(" 외부 자동 작동 시스템 (ATS)")]),t._v(" "),a("p",[a("a",{attrs:{href:"#CBRK_FLIGHTTERM"}},[t._v("활성화")]),t._v(" 인 경우 "),a("a",{attrs:{href:"#failure-detector"}},[t._v("고장 감지기")]),t._v("는 외부 ATS에 의해 작동할 수 있습니다. 외부 작동 시스템은 비행 컨트롤러 포트 AUX5 (또는 AUX 포트가없는 보드의 MAIN5)에 연결되어야 하며 아래의 매개 변수들을 사용하여 설정합니다.")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("외부 ATS는 "),a("a",{attrs:{href:"https://webstore.ansi.org/Standards/ASTM/ASTMF332218",target:"_blank",rel:"noopener noreferrer"}},[t._v("ASTM F3322-18"),a("OutboundLink")],1),t._v("에 필요합니다. ATS 장치의 한가지 예는 "),a("a",{attrs:{href:"https://fruitychutes.com/uav_rpv_drone_recovery_parachutes/sentinel-automatic-trigger-system.htm",target:"_blank",rel:"noopener noreferrer"}},[t._v("FruityChutes Sentinel 자동 작동시스템"),a("OutboundLink")],1),t._v("입니다.")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("매개변수")]),t._v(" "),a("th",[t._v("설명")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("a",{attrs:{id:"FD_EXT_ATS_EN"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FD_EXT_ATS_EN"}},[t._v("FD_EXT_ATS_EN")])],1),t._v(" "),a("td",[t._v("AUX5 또는 MAIN5 (보드에 따라 다름)에서 PWM 입력을 활성화하여 외부 자동 작동 시스템 (ATS)에서 안전 장치를 연결합니다. 기본값 : 비활성화 됨.")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"FD_EXT_ATS_TRIG"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FD_EXT_ATS_TRIG"}},[t._v("FD_EXT_ATS_TRIG")])],1),t._v(" "),a("td",[t._v("안전장치 연결을 위한 외부 자동 작동 시스템의 PWM 임계치입니다. 기본값: 1900 ms.")])])])]),t._v(" "),a("h2",{attrs:{id:"비상-스위치"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#비상-스위치"}},[t._v("#")]),t._v(" 비상 스위치")]),t._v(" "),a("p",[t._v("리모콘의 "),a("a",{attrs:{href:"#emergency-switches"}},[t._v("안전 스위치")]),t._v("를 사용하여 문제 발생시 즉시 모터를 중지하거나 기체를 원위치로 복귀시킬 수 있습니다.")]),t._v(" "),a("p",[t._v("이 섹션에는 사용 가능한 비상 스위치에 대하여 설명합니다.")]),t._v(" "),a("h3",{attrs:{id:"중지-스위치"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#중지-스위치"}},[t._v("#")]),t._v(" 중지 스위치")]),t._v(" "),a("p",[t._v("중지 스위치는 즉시 모든 모터 출력을 중지합니다 (비행시 기체는 추락하기 시작합니다)! 5초 이내에 스위치를 되돌리면 모터가 재동작합니다. 5초 후 기체의 시동은 꺼집니다. 모터를 재작동하려면 재시동하여야 합니다.")]),t._v(" "),a("h3",{attrs:{id:"시동-비시동-스위치"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#시동-비시동-스위치"}},[t._v("#")]),t._v(" 시동/비시동 스위치")]),t._v(" "),a("p",[t._v("시동/비소동 스위치는 기본 스틱 기반 무장/무장 해제 메커니즘의 "),a("em",[t._v("직접 교체")]),t._v("입니다 (동일한 목적 : 모터 시작/정지 전에 의도적 인 단계가 있는지 확인). 다음과 같은 사유로 기본 메커니즘보다 우선적으로 사용될 수 있습니다.")]),t._v(" "),a("ul",[a("li",[t._v("스틱 동작보다 스위치를 선호합니다.")]),t._v(" "),a("li",[t._v("특정 스틱 동작으로 공중에서 실수로 시동/비시동 하는 것을 방지합니다.")]),t._v(" "),a("li",[t._v("지연 시간이 없습니다 (즉시 동작합니다).")])]),t._v(" "),a("p",[t._v("시동/비시동 스위치는 "),a("em",[t._v("비행중 비시동을 지원")]),t._v("하는 "),a("RouterLink",{attrs:{to:"/ko/getting_started/flight_modes.html"}},[t._v("비행 모드")]),t._v("의 모터를 즉시 해제 (정지)합니다. 여기에는 다음의 항목들이 포함됩니다.")],1),t._v(" "),a("ul",[a("li",[a("em",[t._v("수동 모드")])]),t._v(" "),a("li",[a("em",[t._v("Acro 모드")])]),t._v(" "),a("li",[a("em",[t._v("안정 모드")])])]),t._v(" "),a("p",[t._v("비행중 비시동을 지원하지 않는 모드의 경우 비행 중 스위치가 무시되지만 착륙 후에 사용 가능합니다. 여기에는 "),a("em",[t._v("위치 모드")]),t._v(" 및 자율 모드 (예 : "),a("em",[t._v("미션")]),t._v(", "),a("em",[t._v("착륙")]),t._v(" 등)가 포함됩니다.")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[a("a",{attrs:{href:"#auto-disarming-timeouts"}},[t._v("자동 비시동 시간 제한")]),t._v("(예 : "),a("a",{attrs:{href:"#COM_DISARM_LAND"}},[t._v("COM_DISARM_LAND")]),t._v("을 통해)은 설정/해제 스위치와 독립적입니다. 즉, 스위치가 설정되어 있어도 시간 제한이 작동합니다.")])]),t._v(" "),a("h3",{attrs:{id:"귀환-스위치"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#귀환-스위치"}},[t._v("#")]),t._v(" 귀환 스위치")]),t._v(" "),a("p",[t._v("귀환 스위치를 사용하여 즉시 "),a("RouterLink",{attrs:{to:"/ko/flight_modes/return.html"}},[t._v("귀환 모드")]),t._v("로 전환합니다.")],1),t._v(" "),a("h2",{attrs:{id:"기타-안전-설정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#기타-안전-설정"}},[t._v("#")]),t._v(" 기타 안전 설정")]),t._v(" "),a("h3",{attrs:{id:"자동-비시동-제한-시간"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#자동-비시동-제한-시간"}},[t._v("#")]),t._v(" 자동 비시동 제한 시간")]),t._v(" "),a("p",[t._v("이륙 속도가 너무 느리거나, 착륙 후 기체의 시동을 자동으로 꺼기 위하여 시간 제한을 설정할 수 있습니다(기체의 시동을 꺼면 모터의 전원이 제거되므로 프로펠러가 동작하지 않습니다).")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameters.html"}},[t._v("관련 매개변수")]),t._v("는 다음과 같습니다.")],1),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("매개변수")]),t._v(" "),a("th",[t._v("설명")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("a",{attrs:{id:"COM_DISARM_LAND"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_DISARM_LAND"}},[t._v("COM_DISARM_LAND")])],1),t._v(" "),a("td",[t._v("착륙후 자동 시동 꺼기 대기 시간")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"COM_DISARM_PRFLT"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_DISARM_PRFLT"}},[t._v("COM_DISARM_PRFLT")])],1),t._v(" "),a("td",[t._v("기체가 이륙이 너무 더딘 경우 자동 시동 꺼기 대기 시간")])])])]),t._v(" "),a("h2",{attrs:{id:"추가-정보"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#추가-정보"}},[t._v("#")]),t._v(" 추가 정보")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/SetupView/Safety.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGroundControl 사용 설명서 > 안전 설정"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=r.exports},692:function(t,e,_){t.exports=_.p+"assets/img/safety_setup.dfef8b45.png"},693:function(t,e,_){t.exports=_.p+"assets/img/safety_battery.3ca07fa4.png"},694:function(t,e,_){t.exports=_.p+"assets/img/safety_rc_loss.af75bf02.png"},695:function(t,e,_){t.exports=_.p+"assets/img/safety_data_link_loss.bd31108e.png"},696:function(t,e,_){t.exports=_.p+"assets/img/safety_geofence.e3412dca.png"},697:function(t,e,_){t.exports=_.p+"assets/img/safety_return_home.ad409241.png"},698:function(t,e,_){t.exports=_.p+"assets/img/safety_land_mode.abb91378.png"}}]);