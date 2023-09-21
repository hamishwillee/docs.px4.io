(window.webpackJsonp=window.webpackJsonp||[]).push([[436],{2738:function(t,e,s){"use strict";s.r(e);var i=s(19),a=Object(i.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"임무"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#임무"}},[t._v("#")]),t._v(" 임무")]),t._v(" "),i("h2",{attrs:{id:"임무-계획하기"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#임무-계획하기"}},[t._v("#")]),t._v(" 임무 계획하기")]),t._v(" "),i("p",[t._v("수동으로 임무를 계획하는 것은 비교적 간단합니다.")]),t._v(" "),i("ul",[i("li",[t._v("임무 보기로 전환합니다.")]),t._v(" "),i("li",[t._v("Select the "),i("strong",[t._v("Add Waypoint")]),t._v(' ("plus") icon in the top left.')]),t._v(" "),i("li",[t._v("지도를 클릭하여 경유지를 추가합니다.")]),t._v(" "),i("li",[t._v("경유지 매개 변수와 유형을 수정하려면 오른쪽의 경유지 목록을 사용하십시오. 하단의 고도 표시기는 각 경유지의 상대 고도를 표시합니다.")]),t._v(" "),i("li",[i("strong",[t._v("업로드")]),t._v(" 버튼 (오른쪽 상단)을 클릭하여 차량에 임무를 전송합니다.")])]),t._v(" "),i("p",[i("em",[t._v("패턴")]),t._v(" 도구를 사용하여 측량 그리드 생성을 자동화 할 수 있습니다.")]),t._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),i("p",[t._v("For more information see the "),i("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/PlanView/PlanView.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGroundControl User Guide"),i("OutboundLink")],1),t._v(". :::")]),t._v(" "),i("p",[i("img",{attrs:{src:s(946),alt:"임무 계획"}})]),t._v(" "),i("h3",{attrs:{id:"mission-feasibility-checks"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#mission-feasibility-checks"}},[t._v("#")]),t._v(" Mission Feasibility Checks")]),t._v(" "),i("p",[t._v("PX4 runs some basic sanity checks to determine if a mission is feasible. For example, whether the mission is close enough to the vehicle, if the mission will conflict with a geofence, or if a mission landing pattern is required but is not present.")]),t._v(" "),i("p",[t._v("The checks are run when the mission is uploaded and immediately before it is run. If any of the checks fail, the user is notified and it is not possible to start the mission.")]),t._v(" "),i("p",[t._v("For more detail on the checks and possible actions, see: "),i("RouterLink",{attrs:{to:"/ko/flight_modes/mission.html#mission-feasibility-checks"}},[t._v("Mission Mode > Mission Feasibility Checks")]),t._v(".")],1),t._v(" "),i("h3",{attrs:{id:"기체-요-각도-설정"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#기체-요-각도-설정"}},[t._v("#")]),t._v(" 기체 요 각도 설정")]),t._v(" "),i("p",[t._v("요 각도가 설정된 경우 다중 로터는 목표 경유지에 지정된 "),i("strong",[t._v("방향각")]),t._v(" ("),i("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_NAV_WAYPOINT",target:"_blank",rel:"noopener noreferrer"}},[t._v(" MAV_CMD_NAV_WAYPOINT.param4 "),i("OutboundLink")],1),t._v("에 해당)을 향하도록 요잉합니다.")]),t._v(" "),i("p",[t._v("경유지 ("),i("code",[t._v("param4 = NaN")]),t._v(")의 "),i("strong",[t._v("방향각")]),t._v("이 명시적으로 설정되지 않은 경우 기체는 매개 변수 "),i("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_YAW_MODE"}},[t._v("MPC_YAW_MODE")]),t._v("에 지정된 위치를 향해 요잉합니다. 기본적으로 이것은 다음 경유지입니다.")],1),t._v(" "),i("p",[t._v("고정익과 같이 요 및 이동 방향을 제어할 수 없는 기체는 요 설정을 무시합니다.")]),t._v(" "),i("h3",{attrs:{id:"수용-회전-반경-설정"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#수용-회전-반경-설정"}},[t._v("#")]),t._v(" 수용 회전 반경 설정")]),t._v(" "),i("p",[i("em",[t._v("수용 반경")]),t._v("은 기체가 웨이포인트에 도달했다고 간주하고 즉시 다음 웨이포인트로 전환 (및 방향 전환 시작)하는 웨이포인트 주변의 원을 정의합니다.")]),t._v(" "),i("p",[t._v("다중 로터의 허용 반경은 매개 변수 "),i("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#NAV_ACC_RAD"}},[t._v("NAV_ACC_RAD")]),t._v("를 사용하여 조정합니다. 기본적으로 반경은 멀티 로터가 웨이포인트 위로 지나갈 수 있도록 작지만 드론이 웨이포인트에 도달하기 전에 회전을 시작하도록 더 부드러운 경로를 만들기 위해 증가시킬 수 있습니다.")],1),t._v(" "),i("p",[t._v("아래 이미지는 다른 수용 반경 매개 변수로 비행한 동일한 임무 비행를 나타냅니다.")]),t._v(" "),i("p",[i("img",{attrs:{src:s(947),alt:"수용 반경 비교"}})]),t._v(" "),i("p",[t._v("회전 속도는 수용 반경 (= 회전 반경)과 최대 허용 가속도 및 저크 ("),i("RouterLink",{attrs:{to:"/ko/config_mc/mc_jerk_limited_type_trajectory.html#auto-mode"}},[t._v("멀티콥터에 대한 저크 제한 유형 궤적")]),t._v(" 참조)에 따라 자동으로 계산됩니다.")],1),t._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),i("p",[t._v("웨이포인트 허용 반경에 대한 자세한 내용은 "),i("RouterLink",{attrs:{to:"/ko/flight_modes/mission.html#rounded-turns-inter-waypoint-trajectory"}},[t._v("미션 모드 > 웨이포인트간 궤적")]),t._v("을 참고하십시오. :::")],1),t._v(" "),i("h2",{attrs:{id:"임무-비행"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#임무-비행"}},[t._v("#")]),t._v(" 임무 비행")]),t._v(" "),i("p",[t._v("임무가 업로드 되면 비행 보기로 전환합니다. 임무는 진행 상황을 쉽게 추적하도록 표시됩니다. 이보기에서 임무를 수정할 수 없습니다.")]),t._v(" "),i("p",[i("img",{attrs:{src:s(948),alt:"임무 비행"}})])])])])}),[],!1,null,null,null);e.default=a.exports},946:function(t,e,s){t.exports=s.p+"assets/img/planning_mission.e45281f9.jpg"},947:function(t,e,s){t.exports=s.p+"assets/img/acceptance_radius_comparison.6470237c.jpg"},948:function(t,e,s){t.exports=s.p+"assets/img/flying_mission.e5b9cec3.jpg"}}]);