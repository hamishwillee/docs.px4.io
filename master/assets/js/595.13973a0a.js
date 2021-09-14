(window.webpackJsonp=window.webpackJsonp||[]).push([[595],{2154:function(_,e,t){"use strict";t.r(e);var a=t(19),r=Object(a.a)({},(function(){var _=this,e=_.$createElement,a=_._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[a("h1",{attrs:{id:"멀티콥터-저크-제한-유형-궤적"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#멀티콥터-저크-제한-유형-궤적"}},[_._v("#")]),_._v(" 멀티콥터 저크 제한 유형 궤적")]),_._v(" "),a("p",[_._v("저크 제한 궤적 유형은 사용자 스틱 입력 또는 미션 변경 (예 : 촬영, 매핑,화물)에 응답하여 부드러운 동작을 제공합니다. 저크와 가속 제한이 항상 보장되는 부드러운 대칭 S-커브를 생성합니다.")]),_._v(" "),a("p",[_._v("이 궤적 유형은 항상 "),a("RouterLink",{attrs:{to:"/ko/flight_modes/mission.html"}},[_._v("임무 모드")]),_._v("에서 활성화됩니다. "),a("RouterLink",{attrs:{to:"/ko/flight_modes/position_mc.html"}},[_._v("위치 모드")]),_._v("에서 활성화하려면 매개변수를 설정하십시오 : "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_POS_MODE"}},[_._v("MPC_POS_MODE = 3")]),_._v(".")],1),_._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[_._v("Note")]),_._v(" "),a("p",[_._v("저크 제한 유형은 위치 모드에서 "),a("em",[_._v("기본적으로")]),_._v(" 사용됩니다. 더 빠른 응답이 필요한 기체(예 : 레이서 쿼드)에는 적합하지 않을 수 있습니다.")])]),_._v(" "),a("h2",{attrs:{id:"궤적-생성기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#궤적-생성기"}},[_._v("#")]),_._v(" 궤적 생성기")]),_._v(" "),a("p",[_._v("아래의 그래프는 다음과 같은 제약 조건을 가진 일반적인 저크 제한 프로필을 나타냅니다.")]),_._v(" "),a("ul",[a("li",[a("code",[_._v("jMax")]),_._v(": 최대 저크")]),_._v(" "),a("li",[a("code",[_._v("a0")]),_._v(": 초기 가속도")]),_._v(" "),a("li",[a("code",[_._v("aMax")]),_._v(": 최대 가속도")]),_._v(" "),a("li",[a("code",[_._v("a3")]),_._v(": 마지막 가속도 (항상 0)")]),_._v(" "),a("li",[a("code",[_._v("v0")]),_._v(": 초기 속도")]),_._v(" "),a("li",[a("code",[_._v("vRef")]),_._v(": 목표 속도")])]),_._v(" "),a("p",[_._v("제약 조건 "),a("code",[_._v("jMax")]),_._v(", "),a("code",[_._v("aMax")]),_._v("는 매개변수를 통하여 사용자가 설정할 수 있으며, 수동 위치 제어와 자동 모드에서 사용 가능합니다.")]),_._v(" "),a("p",[_._v('결과 속도 프로파일을 "S-Curve"라고 합니다.')]),_._v(" "),a("p",[a("img",{attrs:{src:t(652),alt:"저크 제약 궤도"}})]),_._v(" "),a("h2",{attrs:{id:"수동-모드"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#수동-모드"}},[_._v("#")]),_._v(" 수동 모드")]),_._v(" "),a("p",[_._v("수동 위치 모드에서 스틱은 전체 스틱 편향이 "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_VEL_MANUAL"}},[_._v("MPC_VEL_MANUAL")]),_._v("에 해당하는 속도로 매핑됩니다.")],1),_._v(" "),a("h3",{attrs:{id:"제약-조건"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#제약-조건"}},[_._v("#")]),_._v(" 제약 조건")]),_._v(" "),a("p",[_._v("XY 평면")]),_._v(" "),a("ul",[a("li",[a("code",[_._v("jMax")]),_._v(": "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_JERK_MAX"}},[_._v("MPC_JERK_MAX")])],1),_._v(" "),a("li",[a("code",[_._v("aMax")]),_._v(": "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_ACC_HOR_MAX"}},[_._v("MPC_ACC_HOR_MAX")])],1)]),_._v(" "),a("p",[_._v("Z축")]),_._v(" "),a("ul",[a("li",[a("code",[_._v("jMax")]),_._v(": "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_JERK_MAX"}},[_._v("MPC_JERK_MAX")])],1),_._v(" "),a("li",[a("code",[_._v("aMax")]),_._v(" (상향 운동): "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_ACC_UP_MAX"}},[_._v("MPC_ACC_UP_MAX")])],1),_._v(" "),a("li",[a("code",[_._v("aMax")]),_._v(" (하향 운동): "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_ACC_DOWN_MAX"}},[_._v("MPC_ACC_DOWN_MAX")])],1)]),_._v(" "),a("h2",{attrs:{id:"자동-모드"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#자동-모드"}},[_._v("#")]),_._v(" 자동 모드")]),_._v(" "),a("p",[_._v("자동 모드에서 목표 속도는 "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_XY_CRUISE"}},[_._v("MPC_XY_CRUISE")]),_._v("이지만, 다음 웨이포인트까지의 거리, 웨이포인트에서 가능한 최대 속도, 원하는 최대 가속도 및 저크에 따라 자동으로 조정됩니다.")],1),_._v(" "),a("h3",{attrs:{id:"제약-조건-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#제약-조건-2"}},[_._v("#")]),_._v(" 제약 조건")]),_._v(" "),a("p",[_._v("XY 평면")]),_._v(" "),a("ul",[a("li",[a("code",[_._v("jMax")]),_._v(": "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_JERK_AUTO"}},[_._v("MPC_JERK_AUTO")])],1),_._v(" "),a("li",[a("code",[_._v("aMax")]),_._v(": "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_ACC_HOR"}},[_._v("MPC_ACC_HOR")])],1)]),_._v(" "),a("p",[_._v("Z축")]),_._v(" "),a("ul",[a("li",[a("code",[_._v("jMax")]),_._v(": "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_JERK_AUTO"}},[_._v("MPC_JERK_AUTO")])],1),_._v(" "),a("li",[a("code",[_._v("aMax")]),_._v(" (상향 운동): "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_ACC_UP_MAX"}},[_._v("MPC_ACC_UP_MAX")])],1),_._v(" "),a("li",[a("code",[_._v("aMax")]),_._v(" (하향 운동): "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_ACC_DOWN_MAX"}},[_._v("MPC_ACC_DOWN_MAX")])],1)]),_._v(" "),a("p",[_._v("웨이 포인트에 근접시 속도 증가 거리 :")]),_._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_XY_TRAJ_P"}},[_._v("MPC_XY_TRAJ_P")])],1)]),_._v(" "),a("h3",{attrs:{id:"관련-매개변수"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#관련-매개변수"}},[_._v("#")]),_._v(" 관련 매개변수")]),_._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_XY_VEL_MAX"}},[_._v("MPC_XY_VEL_MAX")])],1),_._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_Z_VEL_MAX_UP"}},[_._v("MPC_Z_VEL_MAX_UP")])],1),_._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_Z_VEL_MAX_DN"}},[_._v("MPC_Z_VEL_MAX_DN")])],1),_._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_TKO_SPEED"}},[_._v("MPC_TKO_SPEED")])],1),_._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_LAND_SPEED"}},[_._v("MPC_LAND_SPEED")])],1),_._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_LAND_ALT1"}},[_._v("MPC_LAND_ALT1")])],1),_._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_LAND_ALT2"}},[_._v("MPC_LAND_ALT2")])],1)])])}),[],!1,null,null,null);e.default=r.exports},652:function(_,e,t){_.exports=t.p+"assets/img/jerk_limited_trajectory_1d.c678e2f8.png"}}]);