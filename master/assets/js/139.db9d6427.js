(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{1939:function(t,_,e){"use strict";e.r(_);var v=e(18),a=Object(v.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"안전장치-설정-사고-방지"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#안전장치-설정-사고-방지"}},[t._v("#")]),t._v(" 안전장치 설정(사고 방지)")]),t._v(" "),v("p",[t._v("PX4에는 문제 발생시 기체를 보호와 복구에 관련된 여러가지 안전 기능들이 있습니다.")]),t._v(" "),v("ul",[v("li",[v("em",[t._v("안전장치")]),t._v(" 기능을 통하여 안전 비행 지역, 사고 방지 조건 및 사고방지 기능 작동시 수행할 "),v("a",{attrs:{href:"#failsafe_actions"}},[t._v("작업")]),t._v("(예: 착륙, 현 위치 유지)을 지정할 수 있습니다. 가장 중요한 안전장치는 "),v("em",[t._v("QGroundControl")]),t._v("의 "),v("a",{attrs:{href:"#qgc_safety_setup"}},[t._v("안전 설정")]),t._v(" 화면에서 설정합니다. 기타는 "),v("a",{attrs:{href:"#failsafe_other"}},[t._v("매개 변수")]),t._v("를 통하여 설정합니다.")]),t._v(" "),v("li",[t._v("리모콘의 "),v("a",{attrs:{href:"#safety_switch"}},[t._v("안전 스위치")]),t._v("를 사용하여 문제 발생시 즉시 모터를 중지하거나 기체를 원위치로 복귀시킬 수 있습니다.")])]),t._v(" "),v("p",[v("span",{attrs:{id:"failsafe_actions"}})]),t._v(" "),v("h2",{attrs:{id:"안전장치-기능"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#안전장치-기능"}},[t._v("#")]),t._v(" 안전장치 기능")]),t._v(" "),v("p",[t._v("안전장치 기능들은 여러가지 동작들로 조합됩니다. 일반적인 안전장치 기능들은 아래와 같습니다.")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("동작")]),t._v(" "),v("th",[t._v("설명")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("span",{attrs:{id:"action_none"}}),t._v("없음/비활성화")]),t._v(" "),v("td",[t._v("조치 없음(안전 장치는 무시됩니다).")])]),t._v(" "),v("tr",[v("td",[v("span",{attrs:{id:"action_warning"}}),t._v("경고")]),t._v(" "),v("td",[t._v("경고 메시지가 "),v("em",[t._v("QGroundControl")]),t._v("으로 전송됩니다.")])]),t._v(" "),v("tr",[v("td",[v("span",{attrs:{id:"action_hold"}}),v("RouterLink",{attrs:{to:"/ko/flight_modes/hold.html"}},[t._v("대기 모드")])],1),t._v(" "),v("td",[t._v("기체는 "),v("em",[t._v("대기 모드")]),t._v("로 들어갑니다. 멀티콥터는 제자리에서 호버링을 하고, 고정익은 원주 선회 비행을 하게 됩니다.")])]),t._v(" "),v("tr",[v("td",[v("span",{attrs:{id:"action_return"}}),v("RouterLink",{attrs:{to:"/ko/flight_modes/return.html"}},[t._v("복귀 모드")])],1),t._v(" "),v("td",[t._v("기체는 "),v("em",[t._v("복귀 모드")]),t._v("로 들어갑니다. 복귀 경로는 "),v("a",{attrs:{href:"#return_settings"}},[t._v("복귀 설정")]),t._v("에서 자세히 설정할 수 있습니다.")])]),t._v(" "),v("tr",[v("td",[v("span",{attrs:{id:"action_land"}}),v("RouterLink",{attrs:{to:"/ko/flight_modes/land.html"}},[t._v("착륙 모드")])],1),t._v(" "),v("td",[t._v("차량은 "),v("em",[t._v("착륙 모드")]),t._v("로 전환하여 즉시 착륙합니다.")])]),t._v(" "),v("tr",[v("td",[v("span",{attrs:{id:"action_flight_termination"}}),v("RouterLink",{attrs:{to:"/ko/advanced_config/flight_termination.html"}},[t._v("비행 종료")])],1),t._v(" "),v("td",[t._v("모든 컨트롤러를 끄고 모든 PWM 출력을 안전 장치 값(예 : "),v("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#PWM_MAIN_FAIL1"}},[t._v("PWM_MAIN_FAILn")]),t._v(", "),v("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#PWM_AUX_FAIL1"}},[t._v("PWM_AUX_FAILn")]),t._v(")으로 설정합니다. 안전장치 출력은 낙하산, 랜딩 기어를 배치하거나 다른 작업을 수행하는 데 사용할 수 있습니다. 고정익은 안전하게 활공할 수 있습니다.")],1)]),t._v(" "),v("tr",[v("td",[v("span",{attrs:{id:"action_lockdown"}}),t._v("Lockdown")]),t._v(" "),v("td",[t._v("모터를 정지합니다(시동을 껍니다). 이것은 "),v("a",{attrs:{href:"#kill_switch"}},[t._v("킬 스위치")]),t._v("를 사용하는 것과 같습니다.")])])])]),t._v(" "),v("div",{staticClass:"custom-block note"},[v("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),v("p",[t._v("모드를 전환하여 오류 방지 조치 (원인이 수정 된 경우)에서 복구 할 수 있습니다. 예를 들어, RC 손실 안전 장치로 인해 차량이 "),v("em",[t._v("복귀 모드")]),t._v("로 들어가는 경우 RC가 복구되면, "),v("em",[t._v("위치 모드")]),t._v("로 변경하여 비행을 계속할 수 있습니다.")])]),t._v(" "),v("div",{staticClass:"custom-block note"},[v("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),v("p",[t._v("차량이 다른 안전 장치에 응답하는 동안 안전 장치가 발생하면 (예 : RC 손실로 인해 반환 모드에있는 동안 배터리 부족), 두 번째 트리거에 대해 지정된 안전 장치 동작이 무시됩니다. 대신 작업은 별도의 시스템 수준과 기체별 코드에 의해 결정됩니다. 이로 인하여 기체 비행은 수동 모드로 변경되어 사용자가 직접 복구할 수 있습니다.")])]),t._v(" "),v("p",[v("span",{attrs:{id:"qgc_safety_setup"}})]),t._v(" "),v("h2",{attrs:{id:"qgroundcontrol-안전-설정"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#qgroundcontrol-안전-설정"}},[t._v("#")]),t._v(" QGroundControl 안전 설정")]),t._v(" "),v("p",[v("em",[t._v("QGroundControl")]),t._v("의 안전 설정 페이지는 "),v("em",[t._v("QGroundControl")]),t._v(" "),v("strong",[t._v("기어")]),t._v(" 아이콘 (차량 설정 - 상단 도구 모음)을 클릭한 다음 사이드바의 "),v("strong",[t._v("안전")]),t._v("을 클릭하여 오픈합니다.). 여기에는 가장 중요한 안전장치 설정 (배터리, RC 손실 등)과 귀환 작업("),v("em",[t._v("귀환")]),t._v(" 및 *착륙 *)에 관한 설정이 포함됩니다.")]),t._v(" "),v("p",[v("img",{attrs:{src:e(641),alt:"안전 설정(QGC)"}})]),t._v(" "),v("h3",{attrs:{id:"배터리-부족-안전장치"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#배터리-부족-안전장치"}},[t._v("#")]),t._v(" 배터리 부족 안전장치")]),t._v(" "),v("p",[t._v("배터리 용량이 하나 (또는 그 이상의 경고) 레벨값 아래로 떨어지면 배터리 부족 안전 장치가 작동합니다.")]),t._v(" "),v("p",[v("img",{attrs:{src:e(642),alt:"안전 - 배터리 (QGC)"}})]),t._v(" "),v("p",[t._v("가장 일반적인 설정은 위와 같이 값과 작업을 설정하는 것입니다 ("),v("code",[t._v("경고 > 페일 세이프 > 긴급")]),t._v(" 사용). 이 구성을 사용하면 안전 장치가 경고를 표시한 다음 원위치로 귀환하며, 용량이 일정 수준 아래로 떨어지면 최종적으로 착륙합니다.")]),t._v(" "),v("p",[v("a",{attrs:{href:"#BAT_CRIT_THR"}},[t._v("배터리 페일 세이프 레벨")]),t._v(" 안전장치 동작 레벨에 도달하면 경고, 귀환 또는 착륙하도록 "),v("em",[t._v("안전장치 조치")]),t._v("를 설정할 수 있습니다.")]),t._v(" "),v("p",[t._v("설정과 기본 매개 변수는 다음과 같습니다.")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("설정")]),t._v(" "),v("th",[t._v("매개변수")]),t._v(" "),v("th",[t._v("설명")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("안전장치 기능")]),t._v(" "),v("td",[v("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_LOW_BAT_ACT"}},[t._v("COM_LOW_BAT_ACT")])],1),t._v(" "),v("td",[t._v("용량이 "),v("a",{attrs:{href:"#BAT_CRIT_THR"}},[t._v("배터리 안전장치 동작 수준")]),t._v(" 아래로 내려가면 경고, 귀환 또는 착륙, 또는 경고, 귀환, 아래의 각 수준 설정에 따라 착륙합니다.")])]),t._v(" "),v("tr",[v("td",[t._v("배터리 경고 수준")]),t._v(" "),v("td",[v("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#BAT_LOW_THR"}},[t._v("BAT_LOW_THR")])],1),t._v(" "),v("td",[t._v("경고 (또는 기타 조치)에 대한 백분율 용량입니다.")])]),t._v(" "),v("tr",[v("td",[v("span",{attrs:{id:"BAT_CRIT_THR"}}),t._v("배터리 안정장치 수준")]),t._v(" "),v("td",[v("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#BAT_CRIT_THR"}},[t._v("BAT_CRIT_THR")])],1),t._v(" "),v("td",[t._v("귀환 조치 (또는 단일 조치가 선택된 경우 다른 조치)에 대한 용량 백분율.")])]),t._v(" "),v("tr",[v("td",[t._v("배터리 비상 수준")]),t._v(" "),v("td",[v("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#BAT_EMERGEN_THR"}},[t._v("BAT_EMERGEN_THR")])],1),t._v(" "),v("td",[t._v("즉시 착륙시의 용량의 백분율.")])])])]),t._v(" "),v("p",[v("span",{attrs:{id:"rc_loss_failsafe"}})]),t._v(" "),v("h3",{attrs:{id:"rc-연결불안정-안전장치"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#rc-연결불안정-안전장치"}},[t._v("#")]),t._v(" RC 연결불안정 안전장치")]),t._v(" "),v("p",[t._v("RC 연결불량 안전장치는 RC 송신기 링크가 "),v("em",[t._v("수동 모드")]),t._v("에서 무선 조종기의 신호 연결이 약할 경우에 동작합니다.(RC 연결불량 안전장치는 자동 모드 (예 : 임무 중)에는 동작하지 않습니다.).")]),t._v(" "),v("p",[v("img",{attrs:{src:e(643),alt:"안전 - RC 손실 (QGC)"}})]),t._v(" "),v("div",{staticClass:"custom-block note"},[v("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),v("p",[v("em",[t._v("RC 연결불량 감지")]),t._v("를 위해 PX4와 수신기를 구성해야 할 수도 있습니다. "),v("RouterLink",{attrs:{to:"/ko/config/radio.html#rc_loss_detection"}},[t._v("라디오 설정 > RC 손실 감지")]),t._v(".")],1)]),t._v(" "),v("p",[t._v("설정과 기본 매개 변수는 다음과 같습니다.")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("설정")]),t._v(" "),v("th",[t._v("매개변수")]),t._v(" "),v("th",[t._v("설명")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("RC 연결불량 시간 초과")]),t._v(" "),v("td",[v("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_RC_LOSS_T"}},[t._v("COM_RC_LOSS_T")])],1),t._v(" "),v("td",[t._v("RC 연결이 끊어진 후 안전 장치가 동작하기 전까지의 시간입니다.")])]),t._v(" "),v("tr",[v("td",[t._v("안전장치 동작")]),t._v(" "),v("td",[v("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#NAV_RCL_ACT"}},[t._v("NAV_RCL_ACT")])],1),t._v(" "),v("td",[t._v("비활성화, 배회, 귀환, 착륙, 종료, 봉쇄.")])])])]),t._v(" "),v("h3",{attrs:{id:"데이터-연결불량-안전장치"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#데이터-연결불량-안전장치"}},[t._v("#")]),t._v(" 데이터 연결불량 안전장치")]),t._v(" "),v("p",[t._v("데이터 연결불량 안전 장치는 "),v("RouterLink",{attrs:{to:"/ko/flying/missions.html"}},[t._v("미션")]),t._v(" 비행시, 원격 측정 링크 (지상국에 연결)가 끊어지면 동작합니다.")],1),t._v(" "),v("p",[v("img",{attrs:{src:e(644),alt:"안전 - 데이터 링크 손실 (QGC)"}})]),t._v(" "),v("p",[t._v("설정과 기본 매개 변수는 다음과 같습니다.")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("설정")]),t._v(" "),v("th",[t._v("매개변수")]),t._v(" "),v("th",[t._v("설명")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("데이터 연결불량 시간 초과")]),t._v(" "),v("td",[v("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_DL_LOSS_T"}},[t._v("COM_DL_LOSS_T")])],1),t._v(" "),v("td",[t._v("데이터 연결이 끊어진 후 안전 장치가 동작하기 전까지의 시간입니다.")])]),t._v(" "),v("tr",[v("td",[t._v("안전장치 동작")]),t._v(" "),v("td",[v("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#NAV_DLL_ACT"}},[t._v("NAV_DLL_ACT")])],1),t._v(" "),v("td",[t._v("비활성화, 배회 모드, 귀환 모드, 착륙 모드, 종료, 봉쇄.")])])])]),t._v(" "),v("h3",{attrs:{id:"geofence-안전장치"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#geofence-안전장치"}},[t._v("#")]),t._v(" Geofence 안전장치")]),t._v(" "),v("p",[v("em",[t._v("Geofence 안전장치")]),t._v('는 홈 위치가 중심 좌표인 "가상" 실린더입니다. 차량이 반경을 벗어나거나 고도 이상으로 이동하면 지정된 '),v("em",[t._v("안전장치 조치")]),t._v("가 동작합니다.")]),t._v(" "),v("p",[v("img",{attrs:{src:e(645),alt:"안전 - 지오펜스 (QGC)"}})]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("PX4는 여러 임의의 다각형 및 원형 포함 및 제외 영역 ([Flying > GeoFence](../flying/geofence.md))이 있는 GeoFence를 지원합니다.")])]),t._v(" "),v("p",[t._v("설정 및 기본 "),v("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#geofence"}},[t._v("Geofence 매개 변수")]),t._v("는 다음과 같습니다.")],1),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("설정")]),t._v(" "),v("th",[t._v("매개변수")]),t._v(" "),v("th",[t._v("설명")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("nobr",[t._v("위반시 조치")])],1),t._v(" "),v("td",[v("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#GF_ACTION"}},[t._v("GF_ACTION")])],1),t._v(" "),v("td",[t._v("없음, 경고, 보류 모드, 반환 모드, 종료, 착륙.")])]),t._v(" "),v("tr",[v("td",[t._v("최대 반경")]),t._v(" "),v("td",[v("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#GF_MAX_HOR_DIST"}},[t._v("GF_MAX_HOR_DIST")])],1),t._v(" "),v("td",[t._v("지오펜스 실린더의 수평 반경. 0 인 경우 지오펜스가 비활성화됩니다.")])]),t._v(" "),v("tr",[v("td",[t._v("최대 고도")]),t._v(" "),v("td",[v("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#GF_MAX_VER_DIST"}},[t._v("GF_MAX_VER_DIST")])],1),t._v(" "),v("td",[t._v("지오펜스 실린더의 높이. 0 인 경우 지오펜스가 비활성화됩니다.")])])])]),t._v(" "),v("div",{staticClass:"custom-block note"},[v("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),v("p",[v("code",[t._v("GF_ACTION")]),t._v("을 종료하도록 설정하면 지오펜스 위반시 기체의 동작이 정지하게 됩니다. 이 기능은 위험성이 높으므로 "),v("a",{attrs:{href:"#CBRK_FLIGHTTERM"}},[t._v("CBRK_FLIGHTTERM")]),t._v("을 사용하여 비활성화되며, 시스템을 실제로 종료하려면 0으로 재설정해야합니다.")])]),t._v(" "),v("p",[t._v("다음 설정도가능하지만 QGC UI에 표시되지 않습니다.")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("설정")]),t._v(" "),v("th",[t._v("매개변수")]),t._v(" "),v("th",[t._v("설명")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("지오펜스 고도 모드")]),t._v(" "),v("td",[v("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#GF_ALTMODE"}},[t._v("GF_ALTMODE")])],1),t._v(" "),v("td",[t._v("사용 된 고도 기준: 0 = WGS84, 1 = AMSL.")])]),t._v(" "),v("tr",[v("td",[t._v("지오펜스 카운터 제한")]),t._v(" "),v("td",[v("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#GF_COUNT"}},[t._v("GF_COUNT")])],1),t._v(" "),v("td",[t._v("지오펜스 위반이 트리거되기 전에 펜스 외부에서 필요한 후속 위치 측정 수를 설정합니다.")])]),t._v(" "),v("tr",[v("td",[t._v("지오펜스 소스")]),t._v(" "),v("td",[v("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#GF_SOURCE"}},[t._v("GF_SOURCE")])],1),t._v(" "),v("td",[t._v("위치 소스가 글로벌 위치인지 또는 GPS 장치에서 직접 가져 오는 지를 설정합니다.")])]),t._v(" "),v("tr",[v("td",[v("span",{attrs:{id:"CBRK_FLIGHTTERM"}}),t._v("비행 종료용 회로 차단기")]),t._v(" "),v("td",[v("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#CBRK_FLIGHTTERM"}},[t._v("CBRK_FLIGHTTERM")])],1),t._v(" "),v("td",[t._v("비행 종료 작업을 활성화/비활성화합니다 (기본적으로 비활성화 됨).")])])])]),t._v(" "),v("p",[v("span",{attrs:{id:"return_settings"}})]),t._v(" "),v("h3",{attrs:{id:"귀환-설정"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#귀환-설정"}},[t._v("#")]),t._v(" 귀환 설정")]),t._v(" "),v("p",[v("em",[t._v("귀환")]),t._v("는 "),v("RouterLink",{attrs:{to:"/ko/flight_modes/return.html"}},[t._v("귀환 모드")]),t._v("를 사용하여 차량을 홈 위치로 돌아오게하는 "),v("a",{attrs:{href:"#failsafe_actions"}},[t._v("안전장치")]),t._v("입니다. 이 섹션에서는 귀환 후 착륙/배회 동작을 설정법을 설명합니다.")],1),t._v(" "),v("p",[v("img",{attrs:{src:e(646),alt:"안전 - 귀한 설정 (QGC)"}})]),t._v(" "),v("p",[t._v("설정과 기본 매개 변수는 다음과 같습니다:")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("설정")]),t._v(" "),v("th",[t._v("매개변수")]),t._v(" "),v("th",[t._v("설명")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("고도 상승")]),t._v(" "),v("td",[v("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RTL_RETURN_ALT"}},[t._v("RTL_RETURN_ALT")])],1),t._v(" "),v("td",[t._v("기체은 귀환을 위해이 최소 높이 (아래에있는 경우)까지 상승합니다.")])]),t._v(" "),v("tr",[v("td",[t._v("기본 동작")]),t._v(" "),v("td"),t._v(" "),v("td",[v("em",[t._v("귀환")]),t._v("의 선택 목록 : 착륙, 배회, 미착륙 또는 배회, 일정시간후 착륙")])]),t._v(" "),v("tr",[v("td",[v("nobr",[t._v("정지비행 고도")])],1),t._v(" "),v("td",[v("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RTL_DESCEND_ALT"}},[t._v("RTL_DESCEND_ALT")])],1),t._v(" "),v("td",[t._v("귀환시 배회를 선택하면 차량이 유지하는 고도를 지정할 수 있습니다.")])]),t._v(" "),v("tr",[v("td",[v("nobr",[t._v("정지비행 시간")])],1),t._v(" "),v("td",[v("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RTL_LAND_DELAY"}},[t._v("RTL_LAND_DELAY")])],1),t._v(" "),v("td",[t._v("배회후 착륙이 선택하면 기체의 정지 비행 시간을 설정합니다.")])])])]),t._v(" "),v("div",{staticClass:"custom-block note"},[v("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),v("p",[t._v("귀환 동작은 "),v("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RTL_LAND_DELAY"}},[t._v("RTL_LAND_DELAY")]),t._v("에 의해 정의됩니다. 음수이면 즉시 착륙합니다. 더 자세한 정보는 "),v("RouterLink",{attrs:{to:"/ko/flight_modes/return.html"}},[t._v("귀환 모드")]),t._v("를 참고하십시오.")],1)]),t._v(" "),v("h3",{attrs:{id:"착륙모드-설정"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#착륙모드-설정"}},[t._v("#")]),t._v(" 착륙모드 설정")]),t._v(" "),v("p",[v("em",[t._v("현재 위치의 착륙")]),t._v("는 "),v("RouterLink",{attrs:{to:"/ko/flight_modes/land.html"}},[t._v("착륙 모드")]),t._v("를 실행하는 일반적인 "),v("a",{attrs:{href:"#failsafe_actions"}},[t._v("안전 조치")]),t._v("입니다. 이 섹션에서는 착륙 후 차량이 자동으로 시동을 꺼는 방법과 시점을 설정법을 설명합니다. Multicopters에서만 하강 속도를 추가로 설정 가능합니다.")],1),t._v(" "),v("p",[v("img",{attrs:{src:e(647),alt:"안전 - 착륙 모드 설정(QGC)"}})]),t._v(" "),v("p",[t._v("설정과 기본 매개 변수는 다음과 같습니다:")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("설정")]),t._v(" "),v("th",[t._v("매개변수")]),t._v(" "),v("th",[t._v("설명")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("nobr",[t._v("착륙후 시동 꺼기")])],1),t._v(" "),v("td",[v("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_DISARM_LAND"}},[t._v("COM_DISARM_LAND")])],1),t._v(" "),v("td",[t._v("착륙 후 시동을 끄려면 확인란을 선택합니다. 값은 0 이상으로 1초 미만의 값도 설정할 수 있습니다.")])]),t._v(" "),v("tr",[v("td",[t._v("착륙 하강률")]),t._v(" "),v("td",[v("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_LAND_SPEED"}},[t._v("MPC_LAND_SPEED")])],1),t._v(" "),v("td",[t._v("착륙 하강율(멀티콥더에만 적용됨).")])])])]),t._v(" "),v("p",[v("span",{attrs:{id:"failsafe_other"}})]),t._v(" "),v("h2",{attrs:{id:"기타-안전장치-설정"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#기타-안전장치-설정"}},[t._v("#")]),t._v(" 기타 안전장치 설정")]),t._v(" "),v("p",[t._v("이 섹션에는 "),v("em",[t._v("QGroundControl")]),t._v("의 "),v("a",{attrs:{href:"#qgc_safety_setup"}},[t._v("안전 설정")]),t._v(" 페이지에서 설정할 수 없는 안전장치 설정에 관하여 설명합니다.")]),t._v(" "),v("h3",{attrs:{id:"위치-gps-손실-안전장치"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#위치-gps-손실-안전장치"}},[t._v("#")]),t._v(" 위치(GPS) 손실 안전장치")]),t._v(" "),v("p",[v("em",[t._v("위치 손실 안전장치")]),t._v("는 위치 추정이 필요한 모드에서 PX4 위치 추정 품질이 일정 수준(GPS 손실로 인해 발생할 수 있음) 이하가 되면 작동합니다.")]),t._v(" "),v("p",[t._v("실패 동작은 RC 제어가 사용 가능한지 여부 (및 고도 정보)에 따라 "),v("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_POSCTL_NAVL"}},[t._v("COM_POSCTL_NAVL")]),t._v("에 의해 제어됩니다.")],1),t._v(" "),v("ul",[v("li",[v("code",[t._v("0")]),t._v(" : 원격 제어 가능. 고도 추정치를 사용할 수 있으면 "),v("em",[t._v("고도 모드")]),t._v("로 전환하고, 그렇지 않으면 "),v("em",[t._v("안정 모드")]),t._v("로 전환됩니다.")]),t._v(" "),v("li",[v("code",[t._v("1")]),t._v(" : 원격 제어 "),v("em",[t._v("불가")]),t._v(". 고도값을 사용할 수있는 경우 "),v("em",[t._v("착륙 모드")]),t._v("로 전환하고, 그렇지 않으면 비행 종료를 입력합니다.")])]),t._v(" "),v("p",[t._v("고정익에는 위치 손실시 착륙이전의 선회 비행 시간을 정의하는 매개 변수가 "),v("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#NAV_GPSF_LT"}},[t._v("NAV_GPSF_LT")]),t._v(" 있습니다.")],1),t._v(" "),v("p",[t._v("아래 표시된 모든 차량에 대한 관련 매개 변수 ("),v("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#gps-failure-navigation"}},[t._v("GPS 장애 내비게이션 매개 변수")]),t._v(" 참조) :")],1),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("매개변수")]),t._v(" "),v("th",[t._v("설명")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_POS_FS_DELAY"}},[t._v("COM_POS_FS_DELAY")])],1),t._v(" "),v("td",[t._v("위치 손실 후 안전 장치 동작 지연 여부 설정")])]),t._v(" "),v("tr",[v("td",[v("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_POSCTL_NAVL"}},[t._v("COM_POSCTL_NAVL")])],1),t._v(" "),v("td",[t._v("임무 중 위치 제어 탐색 손실 응답. 값 : 0 - RC 사용 가정, 1 - RC 없음 가정.")])]),t._v(" "),v("tr",[v("td",[v("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#CBRK_VELPOSERR"}},[t._v("CBRK_VELPOSERR")])],1),t._v(" "),v("td",[t._v("위치 오류 검사를위한 회로 차단기 (모든 모드에서 오류 검사 비활성화).")])])])]),t._v(" "),v("p",[t._v("고정익 전용 매개 변수:")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("매개변수")]),t._v(" "),v("th",[t._v("설명")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#NAV_GPSF_LT"}},[t._v("NAV_GPSF_LT")])],1),t._v(" "),v("td",[t._v("선회 비행 시간 (비행 종료 전 GPS 복구 대기).")])]),t._v(" "),v("tr",[v("td",[t._v("비활성화 하려면 0으로 설정하십시오.")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[v("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#NAV_GPSF_P"}},[t._v("NAV_GPSF_P")])],1),t._v(" "),v("td",[t._v("선회 비행시 고정 피치 각도.")])]),t._v(" "),v("tr",[v("td",[v("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#NAV_GPSF_R"}},[t._v("NAV_GPSF_R")])],1),t._v(" "),v("td",[t._v("선회 비행시 고정 롤/뱅크 각도.")])]),t._v(" "),v("tr",[v("td",[v("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#NAV_GPSF_TR"}},[t._v("NAV_GPSF_TR")])],1),t._v(" "),v("td",[t._v("선회 비행 추력")])])])]),t._v(" "),v("h3",{attrs:{id:"오프-보드-안전장치"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#오프-보드-안전장치"}},[t._v("#")]),t._v(" 오프 보드 안전장치")]),t._v(" "),v("p",[t._v("오프 보드 제어시에 오프 보드 링크가 손실되면 *오프 보드 안전장치</ 0>가 동작합니다. RC 연결을 사용할 수 있는지 여부에 따라 다른 안전장치 동작을 지정할 수 있습니다.")]),v("p"),t._v(" "),v("p",[t._v("관련 매개 변수는 다음과 같습니다.")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("매개변수")]),t._v(" "),v("th",[t._v("설명")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_OF_LOSS_T"}},[t._v("COM_OF_LOSS_T")])],1),t._v(" "),v("td",[t._v("오프 보드 단락이후 안전장치 동작 지연 여부 설정.")])]),t._v(" "),v("tr",[v("td",[v("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_OBL_ACT"}},[t._v("COM_OBL_ACT")])],1),t._v(" "),v("td",[t._v("RC를 사용할 수 없는 경우 비상 안전조치 : 착륙 모드, 대기 모드, 귀환 모드.")])]),t._v(" "),v("tr",[v("td",[v("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_OBL_RC_ACT"}},[t._v("COM_OBL_RC_ACT")])],1),t._v(" "),v("td",[t._v("RC를 사용할 수있는 경우 비상 안전조치 : 위치 모드, 고도 모드, 수동 모드, 귀환 모드, 착륙 모드, 대기 모드.")])])])]),t._v(" "),v("h3",{attrs:{id:"임수-실패-안전-장치"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#임수-실패-안전-장치"}},[t._v("#")]),t._v(" 임수 실패 안전 장치")]),t._v(" "),v("p",[t._v("임무 실패 안전 장치는 설정된 미션이 새로운 이륙 위치에서 시작되거나 웨이포인트 거리가 너무 큰 경우를 방지합니다. 안전조치는 임무가 실행되지 않는 것입니다.")]),t._v(" "),v("p",[t._v("관련 매개 변수는 다음과 같습니다.")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("매개변수")]),t._v(" "),v("th",[t._v("설명")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MIS_DIST_1WP"}},[t._v("MIS_DIST_1WP")])],1),t._v(" "),v("td",[t._v("현재 웨이포인트가 홈 위치에서 멀리 떨어진 경우 임무가 시작되지 않습니다. 값이 0 이하이면 비활성화 됩니다.")])]),t._v(" "),v("tr",[v("td",[v("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MIS_DIST_WPS"}},[t._v("MIS_DIST_WPS")])],1),t._v(" "),v("td",[t._v("두 개의 웨이포인트 사이의 거리가 크면 임무가 시작되지 않습니다.")])])])]),t._v(" "),v("h3",{attrs:{id:"교통-회피-안전장치"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#교통-회피-안전장치"}},[t._v("#")]),t._v(" 교통 회피 안전장치")]),t._v(" "),v("p",[t._v("교통 회피 안전장치를 사용하면 PX4가 미션 중에 transponders 데이터 (예 : "),v("RouterLink",{attrs:{to:"/ko/advanced_features/traffic_avoidance_adsb.html"}},[t._v("ADSB transponder")]),t._v("에서)에 응답할 수 있습니다.")],1),t._v(" "),v("p",[t._v("관련 매개 변수는 다음과 같습니다.")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("매개변수")]),t._v(" "),v("th",[t._v("설명")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#NAV_TRAFF_AVOID"}},[t._v("NAV_TRAFF_AVOID")])],1),t._v(" "),v("td",[t._v("비상 안전조치를 설정합니다 : 비활성화, 경고, 귀환 모드, 착륙 모드.")])])])]),t._v(" "),v("h3",{attrs:{id:"적응형-quadchute-안전장치"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#적응형-quadchute-안전장치"}},[t._v("#")]),t._v(" 적응형 QuadChute 안전장치")]),t._v(" "),v("p",[t._v("푸셔 모터 (또는 대기 속도 센서)가 고장나거나, 고정익이 더 이상 고정익 모드에서 원하는 고도 설정 값에 도달할 수 없는 경우를위한 안전 장치입니다. 동작시에 수직이착륙기는 멀티 콥터 모드로 전환되고 안전 장치는 "),v("RouterLink",{attrs:{to:"/ko/flight_modes/return.html"}},[t._v("반환 모드")]),t._v("로 설정됩니다.")],1),t._v(" "),v("div",{staticClass:"custom-block note"},[v("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),v("p",[t._v("필요한 경우 "),v("em",[t._v("귀환 모드")]),t._v("를 일시 중지하고 고정익 비행으로 전환할 수 있습니다. 안전장치가 동작할 조건이 되면, 다시 작동하게 됩니다.")])]),t._v(" "),v("p",[t._v("관련 매개 변수는 다음과 같습니다.")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("매개변수")]),t._v(" "),v("th",[t._v("설명")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#VT_FW_ALT_ERR"}},[t._v("VT_FW_ALT_ERR")])],1),t._v(" "),v("td",[t._v("고정익 비행에 대한 고도 오류 음수의 최대 절대값 고도가 설정치 이하가 되면, 기체는 MC 모드로 다시 전환되고 안전 장치 RTL로 전환됩니다.")])])])]),t._v(" "),v("p",[v("span",{attrs:{id:"failure_detector"}})]),t._v(" "),v("h2",{attrs:{id:"고장-감지기"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#고장-감지기"}},[t._v("#")]),t._v(" 고장 감지기")]),t._v(" "),v("p",[t._v("고장 감지기를 사용하면 차량이 예기치 않게 뒤집히거나 외부 고장 감지 시스템에서 알림을받은 경우 보호 조치를 취할 수 있습니다.")]),t._v(" "),v("p",[v("strong",[t._v("비행")]),t._v("중에 실패 감지기를 사용하여 실패 조건이 충족되면 "),v("RouterLink",{attrs:{to:"/ko/advanced_config/flight_termination.html"}},[t._v("비행 종료")]),t._v("를 작동시켜서, "),v("RouterLink",{attrs:{to:"/ko/peripherals/parachute.html"}},[t._v("낙하산")]),t._v("을 펼치는 등의 작업을 수행할 수 있습니다.")],1),t._v(" "),v("div",{staticClass:"custom-block note"},[v("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),v("p",[t._v("비행 중 실패 감지는 기본적으로 비활성화되어 있습니다 (매개 변수 : "),v("a",{attrs:{href:"#CBRK_FLIGHTTERM"}},[t._v("CBRK_FLIGHTTERM=0")]),t._v("을 설정하여 활성화).")])]),t._v(" "),v("p",[v("strong",[t._v("이륙")]),t._v("중에 차량이 뒤집히면 고장 감지기 "),v("a",{attrs:{href:"#attitude_trigger"}},[t._v("자세 트리거")]),t._v("가 "),v("a",{attrs:{href:"#action_lockdown"}},[t._v("잠금 동작")]),t._v("을 호출합니다(잠금은 모터를 정지시키지만, 비행 종료와 달리 낙하산을 펼치거나 기타 실패 조치 수행하지 않음). 이 확인은 "),v("code",[t._v("CBRK_FLIGHTTERM")]),t._v(" 매개 변수에 관계없이 "),v("em",[t._v("이륙시 항상 사용")]),t._v("합니다.")]),t._v(" "),v("p",[t._v("The failure detector is active in all vehicle types and modes, except for those where the vehicle is "),v("em",[t._v("expected")]),t._v(" to do flips (i.e. "),v("RouterLink",{attrs:{to:"/ko/flight_modes/altitude_mc.html"}},[t._v("Acro mode (MC)")]),t._v(", "),v("RouterLink",{attrs:{to:"/ko/flight_modes/altitude_fw.html"}},[t._v("Acro mode (FW)")]),t._v(", and "),v("RouterLink",{attrs:{to:"/ko/flight_modes/manual_fw.html"}},[t._v("Manual (FW)")]),t._v(").")],1),t._v(" "),v("p",[v("span",{attrs:{id:"attitude_trigger"}})]),t._v(" "),v("h3",{attrs:{id:"자세-감지기"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#자세-감지기"}},[t._v("#")]),t._v(" 자세 감지기")]),t._v(" "),v("p",[t._v("차량 자세가 지정된 시간보다 오랫동안 사전 정의 된 피치 및 롤 값을 초과하는 경우 동작하도록 고장 감지기를 구성할 수 있습니다.")]),t._v(" "),v("p",[t._v("관련 매개 변수는 다음과 같습니다.")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("매개변수")]),t._v(" "),v("th",[t._v("설명")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("span",{attrs:{id:"CBRK_FLIGHTTERM"}}),v("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#CBRK_FLIGHTTERM"}},[t._v("CBRK_FLIGHTTERM")])],1),t._v(" "),v("td",[t._v("비행 종료 회로 차단기. 실패감지기 또는 FMU 손실로 인한 비행 종료를 활성화하려면 121212 (기본값)에서 설정 해제합니다.")])]),t._v(" "),v("tr",[v("td",[v("span",{attrs:{id:"FD_FAIL_P"}}),v("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FD_FAIL_P"}},[t._v("FD_FAIL_P")])],1),t._v(" "),v("td",[t._v("최대 허용 피치 (도 단위).")])]),t._v(" "),v("tr",[v("td",[v("span",{attrs:{id:"FD_FAIL_R"}}),v("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FD_FAIL_R"}},[t._v("FD_FAIL_R")])],1),t._v(" "),v("td",[t._v("최대 허용 롤 (도 단위).")])]),t._v(" "),v("tr",[v("td",[v("span",{attrs:{id:"FD_FAIL_P_TTRI"}}),v("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FD_FAIL_P_TTRI"}},[t._v("FD_FAIL_P_TTRI")])],1),t._v(" "),v("td",[t._v("실패 감지를 위해 "),v("a",{attrs:{href:"#FD_FAIL_P"}},[t._v("FD_FAIL_P")]),t._v("를 초과하는 시간 (기본값 0.3 초).")])]),t._v(" "),v("tr",[v("td",[v("span",{attrs:{id:"FD_FAIL_R_TTRI"}}),v("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FD_FAIL_R_TTRI"}},[t._v("FD_FAIL_R_TTRI")])],1),t._v(" "),v("td",[t._v("실패 감지를 위해 "),v("a",{attrs:{href:"#FD_FAIL_R"}},[t._v("FD_FAIL_R")]),t._v("을 초과하는 시간 (기본값 0.3 초).")])])])]),t._v(" "),v("p",[v("span",{attrs:{id:"external_ats"}})]),t._v(" "),v("h3",{attrs:{id:"외부-자동-동작-시스템-ats"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#외부-자동-동작-시스템-ats"}},[t._v("#")]),t._v(" 외부 자동 동작 시스템 (ATS)")]),t._v(" "),v("p",[v("a",{attrs:{href:"#CBRK_FLIGHTTERM"}},[t._v("활성화")]),t._v(" 인 경우 "),v("a",{attrs:{href:"#failure_detector"}},[t._v("고장 감지기")]),t._v("는 외부 ATS 시스템에 의해 작동될 수 있습니다. 외부 동작 시스템은 비행 컨트롤러 포트 AUX5 (또는 AUX 포트가없는 보드의 MAIN5)에 연결되어야 하며 아래 매개 변수를 사용하여 구성됩니다.")]),t._v(" "),v("div",{staticClass:"custom-block note"},[v("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),v("p",[t._v("외부 ATS는 "),v("a",{attrs:{href:"https://webstore.ansi.org/Standards/ASTM/ASTMF332218",target:"_blank",rel:"noopener noreferrer"}},[t._v("ASTM F3322-18"),v("OutboundLink")],1),t._v("에 필요합니다. ATS 장치의 한가지 예는 "),v("a",{attrs:{href:"https://fruitychutes.com/uav_rpv_drone_recovery_parachutes/sentinel-automatic-trigger-system.htm",target:"_blank",rel:"noopener noreferrer"}},[t._v("FruityChutes Sentinel 자동 트리거 시스템"),v("OutboundLink")],1),t._v("입니다.")])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("매개변수")]),t._v(" "),v("th",[t._v("설명")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("span",{attrs:{id:"FD_EXT_ATS_EN"}}),v("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FD_EXT_ATS_EN"}},[t._v("FD_EXT_ATS_EN")])],1),t._v(" "),v("td",[t._v("AUX5 또는 MAIN5 (보드에 따라 다름)에서 PWM 입력을 활성화하여 외부 자동 트리거 시스템 (ATS)에서 안전 장치를 연결합니다. 기본값 : 비활성화 됨.")])]),t._v(" "),v("tr",[v("td",[v("span",{attrs:{id:"FD_EXT_ATS_TRIG"}}),v("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FD_EXT_ATS_TRIG"}},[t._v("FD_EXT_ATS_TRIG")])],1),t._v(" "),v("td",[t._v("안전장치 연결을 위한 외부 자동 동작 시스템의 PWM 임계치입니다. 기본값: 1900 ms.")])])])]),t._v(" "),v("p",[v("span",{attrs:{id:"safety_switch"}})]),t._v(" "),v("h2",{attrs:{id:"비상-스위치"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#비상-스위치"}},[t._v("#")]),t._v(" 비상 스위치")]),t._v(" "),v("p",[t._v("원격 제어 스위치를 구성하여 ("),v("em",[t._v("QGroundControl")]),t._v(" "),v("RouterLink",{attrs:{to:"/ko/config/flight_mode.html"}},[t._v("비행 모드 설정")]),t._v("의 일부) 문제 또는 긴급 상황 발생시 신속한 수정 조치를 취할 수 있습니다. 예를 들어 모든 모터를 중지하거나 "),v("a",{attrs:{href:"#return_switch"}},[t._v("귀환 모드")]),t._v("를 활성화합니다.")],1),t._v(" "),v("p",[t._v("이 섹션에는 사용 가능한 비상 스위치를 나열합니다.")]),t._v(" "),v("p",[v("span",{attrs:{id:"kill_switch"}})]),t._v(" "),v("h3",{attrs:{id:"중지-스위치"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#중지-스위치"}},[t._v("#")]),t._v(" 중지 스위치")]),t._v(" "),v("p",[t._v("중지 스위치는 즉시 모든 모터 출력을 중지합니다 (비행시 차량이 떨어지기 시작합니다)! 5 초 이내에 스위치를 되돌리면 모터가 재작동합니다. 5 초 후 기체의 시동은 꺼집니다. 모터를 재작동하려면 재시동하여야 합니다.")]),t._v(" "),v("p",[v("span",{attrs:{id:"arming_switch"}})]),t._v(" "),v("h3",{attrs:{id:"시동-비시동-스위치"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#시동-비시동-스위치"}},[t._v("#")]),t._v(" 시동/비시동 스위치")]),t._v(" "),v("p",[t._v("시동/비소동 스위치는 기본 스틱 기반 무장/무장 해제 메커니즘의 "),v("em",[t._v("직접 교체")]),t._v("입니다 (동일한 목적 : 모터 시작/정지 전에 의도적 인 단계가 있는지 확인). 다음과 같은 이유로 기본 메커니즘보다 우선적으로 사용될 수 있습니다.")]),t._v(" "),v("ul",[v("li",[t._v("스틱 동작보다 스위치를 선호합니다.")]),t._v(" "),v("li",[t._v("특정 스틱 동작으로 공중에서 실수로 시동/비시동 하는 것을 방지합니다.")]),t._v(" "),v("li",[t._v("지연 시간이 없습니다 (즉시 동작합니다).")])]),t._v(" "),v("p",[t._v("시동/비시동 스위치는 "),v("em",[t._v("비행중 비시동을 지원")]),t._v("하는 "),v("RouterLink",{attrs:{to:"/ko/getting_started/flight_modes.html"}},[t._v("비행 모드")]),t._v("의 모터를 즉시 해제 (정지)합니다. 여기에는 다음이 포함됩니다.")],1),t._v(" "),v("ul",[v("li",[v("em",[t._v("수동 모드")])]),t._v(" "),v("li",[v("em",[t._v("Acro 모드")])]),t._v(" "),v("li",[v("em",[t._v("안정 모드")])])]),t._v(" "),v("p",[t._v("비행중 비시동을 지원하지 않는 모드의 경우 비행 중 스위치가 무시되지만 착륙후에는 사용할 수 있습니다. 여기에는 "),v("em",[t._v("위치 모드")]),t._v(" 및 자율 모드 (예 : "),v("em",[t._v("미션")]),t._v(", "),v("em",[t._v("착륙")]),t._v(" 등)가 포함됩니다.")]),t._v(" "),v("div",{staticClass:"custom-block note"},[v("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),v("p",[v("a",{attrs:{href:"#auto-disarming-timeouts"}},[t._v("자동 비시동 시간 제한")]),t._v(" (예 : "),v("a",{attrs:{href:"#COM_DISARM_LAND"}},[t._v("COM_DISARM_LAND")]),t._v("을 통해)은 설정/해제 스위치와 독립적입니다. 즉, 스위치가 설정되어 있어도 시간 제한이 계속 작동합니다.")])]),t._v(" "),v("p",[v("span",{attrs:{id:"return_switch"}})]),t._v(" "),v("h3",{attrs:{id:"귀환-스위치"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#귀환-스위치"}},[t._v("#")]),t._v(" 귀환 스위치")]),t._v(" "),v("p",[t._v("귀환 스위치를 사용하여 즉시 "),v("RouterLink",{attrs:{to:"/ko/flight_modes/return.html"}},[t._v("귀환 모드")]),t._v("를 활성화할 수 있습니다.")],1),t._v(" "),v("h2",{attrs:{id:"기타-안전-설정"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#기타-안전-설정"}},[t._v("#")]),t._v(" 기타 안전 설정")]),t._v(" "),v("p",[v("span",{attrs:{id:"auto-disarming-timeouts"}})]),t._v(" "),v("h3",{attrs:{id:"자동-비시동-제한-시간"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#자동-비시동-제한-시간"}},[t._v("#")]),t._v(" 자동 비시동 제한 시간")]),t._v(" "),v("p",[t._v("이륙 속도가 너무 느리거나 착륙 후 차량을 자동으로 시동을 꺼기 위하여 시간 제한을 설정할 수 있습니다 (기체의 시동을 꺼면 모터의 전원이 제거되므로 프로펠러가 회전하지 않습니다).")]),t._v(" "),v("p",[v("RouterLink",{attrs:{to:"/ko/advanced_config/parameters.html"}},[t._v("관련 매개 변수")]),t._v("는 다음과 같습니다.")],1),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("매개변수")]),t._v(" "),v("th",[t._v("설명")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("span",{attrs:{id:"COM_DISARM_LAND"}}),v("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_DISARM_LAND"}},[t._v("COM_DISARM_LAND")])],1),t._v(" "),v("td",[t._v("착륙후 자동 시동 꺼기를 위한 대기 시간")])]),t._v(" "),v("tr",[v("td",[v("span",{attrs:{id:"COM_DISARM_PRFLT"}}),v("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_DISARM_PRFLT"}},[t._v("COM_DISARM_PRFLT")])],1),t._v(" "),v("td",[t._v("기체가 이륙하기에 너무 느린 경우 자동 시동꺼리 대기 시간")])])])]),t._v(" "),v("h2",{attrs:{id:"추가-정보"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#추가-정보"}},[t._v("#")]),t._v(" 추가 정보")]),t._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/SetupView/Safety.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGroundControl 사용 설명서 > 안전 설정"),v("OutboundLink")],1)])])])}),[],!1,null,null,null);_.default=a.exports},641:function(t,_,e){t.exports=e.p+"assets/img/safety_setup.13d1efc7.png"},642:function(t,_,e){t.exports=e.p+"assets/img/safety_battery.3ca07fa4.png"},643:function(t,_,e){t.exports=e.p+"assets/img/safety_rc_loss.af75bf02.png"},644:function(t,_,e){t.exports=e.p+"assets/img/safety_data_link_loss.bd31108e.png"},645:function(t,_,e){t.exports=e.p+"assets/img/safety_geofence.e3412dca.png"},646:function(t,_,e){t.exports=e.p+"assets/img/safety_return_home.ad409241.png"},647:function(t,_,e){t.exports=e.p+"assets/img/safety_land_mode.abb91378.png"}}]);