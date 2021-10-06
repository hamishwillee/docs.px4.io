(window.webpackJsonp=window.webpackJsonp||[]).push([[1143],{2160:function(t,_,v){"use strict";v.r(_);var e=v(19),i=Object(e.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"멀티콥터-설정점-튜닝-궤적-생성기"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#멀티콥터-설정점-튜닝-궤적-생성기"}},[t._v("#")]),t._v(" 멀티콥터 설정점 튜닝(궤적 생성기)")]),t._v(" "),v("p",[v("em",[t._v("사용자 경험")]),t._v("(스틱 움직임이나 임무의 방향 변화에 기체의 반응 속도, 최대 허용 속도 등)을 변경하는 멀티콥터 튜닝 매개변수에 대한 개요를 제공합니다.")]),t._v(" "),v("p",[t._v("기체의 설정 값을 "),v("em",[t._v("추적")]),t._v("하는 데 영향을 끼치는 매개변수가 아닌 "),v("em",[t._v("원하는 설정값")]),t._v("의 값에 영향을 끼치는 매개변수를 튜닝 방법을 설명합니다.")]),t._v(" "),v("p",[t._v('이러한 설정값을 생성하는 알고리즘을 "궤적 생성기"라고 합니다.')]),t._v(" "),v("div",{staticClass:"custom-block warning"},[v("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),v("p",[t._v("이 가이드는 고급 사용자와 전문가를 위한 것입니다.")])]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),v("p",[t._v("여기에 설명된 튜닝을 수행하기 "),v("em",[t._v("전에")]),t._v(" "),v("RouterLink",{attrs:{to:"/ko/config_mc/pid_tuning_guide_multicopter.html"}},[t._v("멀티콥터 PID 튜닝 가이드")]),t._v(" 지침을 따르십시오. 이러한 튜닝 매개변수를 사용하여 잘못된 추적이나 진동을 수정하지 마십시오!")],1)]),t._v(" "),v("h2",{attrs:{id:"개요"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#개요"}},[t._v("#")]),t._v(" 개요")]),t._v(" "),v("p",[t._v("P/PID 컨트롤러에 대한 입력은 기체에서 추적하는 "),v("em",[t._v("목표 설정값")]),t._v("입니다. "),v("RouterLink",{attrs:{to:"/ko/config_mc/pid_tuning_guide_multicopter.html"}},[t._v("PID 튜닝")]),t._v(' ( "낮은 레벨 튜닝")은 목표 설정 값과 기체 상태 추정값 사이의 오류를 줄이는 것을 목표로합니다.')],1),t._v(" "),v("p",[t._v("P/PID 컨트롤러로 전달되는 "),v("em",[t._v("목표 설정 값")]),t._v("은 스틱 위치 (RC 모드에서) 또는 임무 명령에서 "),v("em",[t._v("요구된 설정 값")]),t._v('에서 자체적으로 계산됩니다. 요구되는 설정값은 빨리 변경 될 수 있습니다 (예 : 사용자가 스틱을 "단계" 0에서 최대값으로 이동하는 경우). 원하는 설정값이 "램프"로 변경되면 기체의 비행 특성이 더 좋아집니다.')]),t._v(" "),v("p",[v("em",[t._v("설정점 값 조정")]),t._v(' ( "높은 수준 조정")은 '),v("em",[t._v("요구")]),t._v('와 *목표</ 0> 설정점 간의 매핑을 지정합니다. "원하는 설정값은 요구된 설정 값을 따릅니다.')]),v("p"),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),v("p",[v("RouterLink",{attrs:{to:"/ko/config_mc/pid_tuning_guide_multicopter.html"}},[t._v("P/PID 게인")]),t._v("을 잘못 조정하면 불안정해 질 수 있습니다. 잘못 튜닝된 "),v("em",[t._v("설정값")]),t._v("은 불안정성을 초래하지는 않지만, 설정값 변경에 대한 반응은 매우 불안정하거나 응답하지 않을 수 있습니다.")],1)]),t._v(" "),v("p",[v("a",{attrs:{id:"modes"}})]),t._v(" "),v("h2",{attrs:{id:"비행-모드-궤적-지원"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#비행-모드-궤적-지원"}},[t._v("#")]),t._v(" 비행 모드 궤적 지원")]),t._v(" "),v("p",[v("RouterLink",{attrs:{to:"/ko/flight_modes/mission.html"}},[t._v("미션 모드")]),t._v("는 항상 "),v("RouterLink",{attrs:{to:"/ko/config_mc/mc_jerk_limited_type_trajectory.html"}},[t._v("저크 제한")]),t._v(" 궤적을 사용하였습니다.")],1),t._v(" "),v("p",[v("RouterLink",{attrs:{to:"/ko/flight_modes/position_mc.html"}},[t._v("위치 모드")]),t._v("는 아래 나열된 모든 "),v("a",{attrs:{href:"#trajectory-implementations"}},[t._v("궤적 유형")]),t._v("을 지원합니다. 기본적으로 "),v("RouterLink",{attrs:{to:"/ko/config_mc/mc_jerk_limited_type_trajectory.html"}},[t._v("저크 제한")]),t._v(" 궤적을 사용합니다. 다른 유형은 "),v("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_POS_MODE"}},[t._v("MPC_POS_MODE")]),t._v("를 사용하여 설정할 수 있습니다.")],1),t._v(" "),v("p",[v("RouterLink",{attrs:{to:"/ko/flight_modes/altitude_mc.html"}},[t._v("고도 모드")]),t._v("는 "),v("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_POS_MODE"}},[t._v("MPC_POS_MODE")]),t._v("에서 선택한 "),v("a",{attrs:{href:"#trajectory-implementations"}},[t._v("궤적 유형")]),t._v("을 유사하게 사용하지만, 수직 구성 요소를 "),v("em",[t._v("부드럽게 하는 데만")]),t._v(" 사용합니다 (예 : 고도).")],1),t._v(" "),v("p",[t._v("다른 모드는 궤도 튜닝을 지원하지 않습니다.")]),t._v(" "),v("h2",{attrs:{id:"궤적-구현"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#궤적-구현"}},[t._v("#")]),t._v(" 궤적 구현")]),t._v(" "),v("p",[t._v("다음 목록은 다양한 궤적 구현에 대한 "),v("em",[t._v("개요")]),t._v("를 제공합니다.")]),t._v(" "),v("ul",[v("li",[v("RouterLink",{attrs:{to:"/ko/config_mc/mc_jerk_limited_type_trajectory.html"}},[t._v("Jerk-제한")]),t._v(" (기본)\n"),v("ul",[v("li",[t._v("부드러운 움직임이 필요할 때 사용합니다 (예 : 촬영, 매핑,화물).")]),t._v(" "),v("li",[t._v("저크 및 가속 제한이 항상 보장되는 대칭형 부드러운 S- 커브를 생성합니다.")]),t._v(" "),v("li",[t._v("더 빠른 응답이 필요한 기체(예 : 레이서 쿼드)에는 적합하지 않을 수 있습니다.")]),t._v(" "),v("li",[v("code",[t._v("MPC_POS_MODE = 3")]),t._v("을 사용하여 위치 모드로 설정합니다.")])])],1),t._v(" "),v("li",[v("strong",[t._v("간단한 위치 제어")]),t._v(" "),v("ul",[v("li",[t._v("스틱은 평활화없이 속도 설정점에 직접 매핑됩니다.")]),t._v(" "),v("li",[t._v("속도 제어 튜닝에 유용합니다.")]),t._v(" "),v("li",[v("code",[t._v("MPC_POS_MODE = 0")]),t._v("을 사용하여 위치 모드로 설정합니다.")])])])])])}),[],!1,null,null,null);_.default=i.exports}}]);