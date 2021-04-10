(window.webpackJsonp=window.webpackJsonp||[]).push([[344],{2098:function(t,_,a){"use strict";a.r(_);var r=a(18),s=Object(r.a)({},(function(){var t=this,_=t.$createElement,r=t._self._c||_;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"임무"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#임무"}},[t._v("#")]),t._v(" 임무")]),t._v(" "),r("h2",{attrs:{id:"임무-계획하기"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#임무-계획하기"}},[t._v("#")]),t._v(" 임무 계획하기")]),t._v(" "),r("p",[t._v("수동으로 임무를 계획하는 것은 비교적 간단합니다.")]),t._v(" "),r("ul",[r("li",[t._v("임무 보기로 전환합니다.")]),t._v(" "),r("li",[t._v("왼쪽 상단에서 "),r("strong",[t._v("경유지 추가")]),t._v(' ( "더하기") 아이콘을 선택합니다.')]),t._v(" "),r("li",[t._v("지도를 클릭하여 경유지를 추가합니다.")]),t._v(" "),r("li",[t._v("경유지 매개 변수와 유형을 수정하려면 오른쪽의 경유지 목록을 사용하십시오. 하단의 고도 표시기는 각 경유지의 상대 고도를 표시합니다.")]),t._v(" "),r("li",[r("strong",[t._v("업로드")]),t._v(" 버튼 (오른쪽 상단)을 클릭하여 차량에 임무를 전송합니다.")])]),t._v(" "),r("p",[r("em",[t._v("패턴")]),t._v(" 도구를 사용하여 측량 그리드 생성을 자동화 할 수 있습니다.")]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[t._v("자세한 내용은 "),r("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/PlanView/PlanView.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGroundControl 사용자 가이드"),r("OutboundLink")],1),t._v("를 참조하십시오.")])]),t._v(" "),r("p",[r("img",{attrs:{src:a(849),alt:"임무 계획"}})]),t._v(" "),r("h3",{attrs:{id:"기체-요-각도-설정"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#기체-요-각도-설정"}},[t._v("#")]),t._v(" 기체 요 각도 설정")]),t._v(" "),r("p",[t._v("요 각도가 설정된 경우 다중 로터는 목표 경유지에 지정된 "),r("strong",[t._v("방향각")]),t._v(" ("),r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_NAV_WAYPOINT",target:"_blank",rel:"noopener noreferrer"}},[t._v(" MAV_CMD_NAV_WAYPOINT.param4 "),r("OutboundLink")],1),t._v("에 해당)을 향하도록 요잉합니다.")]),t._v(" "),r("p",[t._v("경유지 ("),r("code",[t._v("param4 = NaN")]),t._v(")의 "),r("strong",[t._v("방향각")]),t._v("이 명시적으로 설정되지 않은 경우 기체는 매개 변수 "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_YAW_MODE"}},[t._v("MPC_YAW_MODE")]),t._v("에 지정된 위치를 향해 요잉합니다. 기본적으로 이것은 다음 경유지입니다.")],1),t._v(" "),r("p",[t._v("고정익과 같이 요 및 이동 방향을 제어할 수 없는 기체는 요 설정을 무시합니다.")]),t._v(" "),r("h3",{attrs:{id:"수용-회전-반경-설정"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#수용-회전-반경-설정"}},[t._v("#")]),t._v(" 수용 회전 반경 설정")]),t._v(" "),r("p",[r("em",[t._v("수용 반경")]),t._v("은 기체가 웨이포인트에 도달했다고 간주하고 즉시 다음 웨이포인트로 전환 (및 방향 전환 시작)하는 웨이포인트 주변의 원을 정의합니다.")]),t._v(" "),r("p",[t._v("다중 로터의 허용 반경은 매개 변수 "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#NAV_ACC_RAD"}},[t._v("NAV_ACC_RAD")]),t._v("를 사용하여 조정합니다. 기본적으로 반경은 멀티 로터가 웨이포인트 위로 지나갈 수 있도록 작지만 드론이 웨이포인트에 도달하기 전에 회전을 시작하도록 더 부드러운 경로를 만들기 위해 증가시킬 수 있습니다.")],1),t._v(" "),r("p",[t._v("아래 이미지는 다른 수용 반경 매개 변수로 비행한 동일한 임무 비행를 나타냅니다.")]),t._v(" "),r("p",[r("img",{attrs:{src:a(850),alt:"수용 반경 비교"}})]),t._v(" "),r("p",[t._v("회전 속도는 수용 반경 (= 회전 반경)과 최대 허용 가속도 및 저크 ("),r("RouterLink",{attrs:{to:"/ko/config_mc/mc_jerk_limited_type_trajectory.html#auto-mode"}},[t._v("멀티콥터에 대한 저크 제한 유형 궤적")]),t._v(" 참조)에 따라 자동으로 계산됩니다.")],1),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[t._v("웨이포인트 허용 반경에 대한 자세한 내용은 "),r("RouterLink",{attrs:{to:"/ko/flight_modes/mission.html#inter-waypoint-trajectory"}},[t._v("미션 모드 > 웨이포인트간 궤적")]),t._v("을 참조하십시오.")],1)]),t._v(" "),r("h2",{attrs:{id:"임무-비행"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#임무-비행"}},[t._v("#")]),t._v(" 임무 비행")]),t._v(" "),r("p",[t._v("임무가 업로드 되면 비행 보기로 전환합니다. 임무는 진행 상황을 쉽게 추적하도록 표시됩니다. 이보기에서 임무를 수정할 수 없습니다.")]),t._v(" "),r("p",[r("img",{attrs:{src:a(851),alt:"임무 비행"}})])])}),[],!1,null,null,null);_.default=s.exports},849:function(t,_,a){t.exports=a.p+"assets/img/planning_mission.05ce0920.jpg"},850:function(t,_,a){t.exports=a.p+"assets/img/acceptance_radius_comparison.b183ada4.jpg"},851:function(t,_,a){t.exports=a.p+"assets/img/flying_mission.8dfc3df0.jpg"}}]);