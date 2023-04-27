(window.webpackJsonp=window.webpackJsonp||[]).push([[1346],{2528:function(t,e,i){"use strict";i.r(e);var o=i(19),_=Object(o.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"멀티콥터-설정점-튜닝-궤적-생성기"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#멀티콥터-설정점-튜닝-궤적-생성기"}},[t._v("#")]),t._v(" 멀티콥터 설정점 튜닝(궤적 생성기)")]),t._v(" "),i("p",[i("em",[t._v("사용자 경험")]),t._v("(스틱 움직임이나 임무의 방향 변화에 기체의 반응 속도, 최대 허용 속도 등)을 변경하는 멀티콥터 튜닝 매개변수에 대한 개요를 제공합니다.")]),t._v(" "),i("p",[t._v("기체의 설정 값을 "),i("em",[t._v("추적")]),t._v("하는 데 영향을 끼치는 매개변수가 아닌 "),i("em",[t._v("원하는 설정값")]),t._v("의 값에 영향을 끼치는 매개변수를 튜닝 방법을 설명합니다.")]),t._v(" "),i("p",[t._v('이러한 설정값을 생성하는 알고리즘을 "궤적 생성기"라고 합니다.')]),t._v(" "),i("div",{staticClass:"custom-block warning"},[i("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),i("p",[t._v("이 가이드는 고급 사용자와 전문가를 위한 것입니다.")])]),t._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),i("p",[t._v("여기에 설명된 튜닝을 수행하기 "),i("em",[t._v("전에")]),t._v(" "),i("RouterLink",{attrs:{to:"/ko/config_mc/pid_tuning_guide_multicopter.html"}},[t._v("멀티콥터 PID 튜닝 가이드")]),t._v(" 지침을 따르십시오. 이러한 튜닝 매개변수를 사용하여 잘못된 추적이나 진동을 수정하지 마십시오!")],1)]),t._v(" "),i("h2",{attrs:{id:"개요"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#개요"}},[t._v("#")]),t._v(" 개요")]),t._v(" "),i("p",[t._v("P/PID 컨트롤러에 대한 입력은 기체에서 추적하는 "),i("em",[t._v("목표 설정값")]),t._v("입니다. "),i("RouterLink",{attrs:{to:"/ko/config_mc/pid_tuning_guide_multicopter.html"}},[t._v("PID 튜닝")]),t._v(' ( "낮은 레벨 튜닝")은 목표 설정 값과 기체 상태 추정값 사이의 오류를 줄이는 것을 목표로합니다.')],1),t._v(" "),i("p",[t._v("P/PID 컨트롤러로 전달되는 "),i("em",[t._v("목표 설정 값")]),t._v("은 스틱 위치 (RC 모드에서) 또는 임무 명령에서 "),i("em",[t._v("요구된 설정 값")]),t._v('에서 자체적으로 계산됩니다. 요구되는 설정값은 빨리 변경 될 수 있습니다 (예 : 사용자가 스틱을 "단계" 0에서 최대값으로 이동하는 경우). 원하는 설정값이 "램프"로 변경되면 기체의 비행 특성이 더 좋아집니다.')]),t._v(" "),i("p",[i("em",[t._v("설정점 값 조정")]),t._v(' ( "높은 수준 조정")은 '),i("em",[t._v("요구")]),t._v('와 *목표</> 설정점 간의 매핑을 지정합니다. "원하는 설정값은 요구된 설정 값을 따릅니다.')]),t._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),i("p",[i("RouterLink",{attrs:{to:"/ko/config_mc/pid_tuning_guide_multicopter.html"}},[t._v("P/PID 게인")]),t._v("을 잘못 조정하면 불안정해 질 수 있습니다. :::tip "),i("RouterLink",{attrs:{to:"/ko/config_mc/pid_tuning_guide_multicopter.html"}},[t._v("P/PID 게인")]),t._v("을 잘못 조정하면 불안정해 질 수 있습니다.")],1)]),t._v(" "),i("p",[i("a",{attrs:{id:"modes"}})]),t._v(" "),i("h2",{attrs:{id:"비행-모드-궤적-지원"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#비행-모드-궤적-지원"}},[t._v("#")]),t._v(" 비행 모드 궤적 지원")]),t._v(" "),i("p",[i("RouterLink",{attrs:{to:"/ko/flight_modes/mission.html"}},[t._v("미션 모드")]),t._v("는 항상 "),i("RouterLink",{attrs:{to:"/ko/config_mc/mc_jerk_limited_type_trajectory.html"}},[t._v("저크 제한")]),t._v(" 궤적을 사용하였습니다.")],1),t._v(" "),i("p",[i("RouterLink",{attrs:{to:"/ko/flight_modes/position_mc.html"}},[t._v("Position mode")]),t._v(" supports the "),i("a",{attrs:{href:"#position-mode-implementations"}},[t._v("implementations")]),t._v(" listed below. It uses the acceleration based mapping by default; other types can be set using "),i("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_POS_MODE"}},[t._v("MPC_POS_MODE")]),t._v(".")],1),t._v(" "),i("p",[i("RouterLink",{attrs:{to:"/ko/flight_modes/altitude_mc.html"}},[t._v("Altitude mode")]),t._v(" similarly supports the "),i("a",{attrs:{href:"#altitude-mode-implementations"}},[t._v("implementations")]),t._v(" selected by "),i("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_POS_MODE"}},[t._v("MPC_POS_MODE")]),t._v(", but "),i("em",[t._v("only")]),t._v(" for smoothing the vertical component (i.e. when controlling the altitude).")],1),t._v(" "),i("p",[t._v("다른 모드는 궤도 튜닝을 지원하지 않습니다.")]),t._v(" "),i("h2",{attrs:{id:"position-mode-implementations"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#position-mode-implementations"}},[t._v("#")]),t._v(" Position Mode Implementations")]),t._v(" "),i("p",[t._v("The following list provides an "),i("em",[t._v("overview")]),t._v(" of the different implementations of how the stick input is interpreted and turned into trajectory setpoints:")]),t._v(" "),i("ul",[i("li",[t._v("Acceleration based (Default)\n"),i("ul",[i("li",[t._v("Horizontal stick input mapped to acceleration setpoints.")]),t._v(" "),i("li",[t._v("Intuitive stick feel because it's like pushing the vehicle around.")]),t._v(" "),i("li",[t._v("No unexpected tilt changes upon reaching travel speed velocity.")]),t._v(" "),i("li",[t._v("Vertical stick input mapped with jerk-limited trajectory.")]),t._v(" "),i("li",[t._v("Set in position mode using "),i("code",[t._v("MPC_POS_MODE=4")]),t._v(".")])])]),t._v(" "),i("li",[i("RouterLink",{attrs:{to:"/ko/config_mc/mc_jerk_limited_type_trajectory.html"}},[t._v("Jerk-limited")]),t._v(" "),i("ul",[i("li",[t._v("Used when smooth motion is required (e.g.: filming, mapping, cargo).")]),t._v(" "),i("li",[t._v("Generates symmetric smooth S-curves where the jerk and acceleration limits are always guaranteed.")]),t._v(" "),i("li",[t._v("May not be suitable for vehicles/use-cases that require a faster response - e.g. race quads.")]),t._v(" "),i("li",[t._v("Set in position mode using "),i("code",[t._v("MPC_POS_MODE=3")]),t._v(".")])])],1),t._v(" "),i("li",[i("strong",[t._v("Simple position control")]),t._v(" "),i("ul",[i("li",[t._v("Sticks map directly to velocity setpoints without smoothing.")]),t._v(" "),i("li",[t._v("Useful for velocity control tuning.")]),t._v(" "),i("li",[t._v("Set in position mode using "),i("code",[t._v("MPC_POS_MODE=0")]),t._v(".")])])])]),t._v(" "),i("h2",{attrs:{id:"altitude-mode-implementations"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#altitude-mode-implementations"}},[t._v("#")]),t._v(" Altitude Mode Implementations")]),t._v(" "),i("p",[t._v("Analogously to "),i("a",{attrs:{href:"#position-mode-implementations"}},[t._v("position mode implementations")]),t._v(" these are the implementations for interpreting vertical stick input:")]),t._v(" "),i("ul",[i("li",[i("RouterLink",{attrs:{to:"/ko/config_mc/mc_jerk_limited_type_trajectory.html"}},[t._v("Jerk-limited")]),t._v(" "),i("ul",[i("li",[t._v("Smoothed vertical input.")]),t._v(" "),i("li",[t._v("Set in altitude mode with "),i("code",[t._v("MPC_POS_MODE")]),t._v(" 3 or 4.")])])],1),t._v(" "),i("li",[i("strong",[t._v("Simple altitude control")]),t._v(" "),i("ul",[i("li",[t._v("Unsmoothed vertical input.")]),t._v(" "),i("li",[t._v("Set in altitude mode only when using "),i("code",[t._v("MPC_POS_MODE=0")]),t._v(".")])])])])])}),[],!1,null,null,null);e.default=_.exports}}]);