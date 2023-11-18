(window.webpackJsonp=window.webpackJsonp||[]).push([[1406],{2592:function(t,e,a){"use strict";a.r(e);var o=a(19),s=Object(o.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"장애물-회피"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#장애물-회피"}},[t._v("#")]),t._v(" 장애물 회피")]),t._v(" "),a("p",[a("em",[t._v("장애물 회피")]),t._v(" 기능을 사용하여 계획된 경로를 비행시 장애물 주위를 탐색 할 수 있습니다.")]),t._v(" "),a("p",[t._v("이 기능을 사용하려면 컴퓨터 비전 소프트웨어를 실행하는 보조 컴퓨터가 필요합니다. 이 소프트웨어는 주어진 원하는 궤적에 대한 경로, 매핑 및 장애물 주변 탐색을 제공하여 최적의 경로를 제공합니다.")]),t._v(" "),a("p",[t._v("장애물 회피는 자동 모드를위한 것이며 현재 "),a("a",{attrs:{href:"#mission_mode"}},[t._v("임무")]),t._v(" 및 "),a("a",{attrs:{href:"#offboard_mode"}},[t._v("오프 보드 모드")]),t._v("의 멀티콥터에 지원됩니다.")]),t._v(" "),a("p",[t._v("두 가지 모드에서 기능을 설정하고 활성화하는 방법에 대하여 설명합니다.")]),t._v(" "),a("h2",{attrs:{id:"제약-사항과-성능"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#제약-사항과-성능"}},[t._v("#")]),t._v(" 제약 사항과 성능")]),t._v(" "),a("ul",[a("li",[t._v("장애물 회피를 위한 최대 속도는 현재 약 3m/s입니다 (회피 경로 계산 비용으로 인해).")])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("Obstacle avoidance can use the "),a("em",[t._v("local planner")]),t._v(" (emits messages at ~30Hz and can move at around 3 m/s) or "),a("em",[t._v("global planner")]),t._v(" (emits messages at ~10Hz and mission speed with obstacle avoidance is around 1-1.5 m/s).")])]),t._v(" "),a("p",[a("a",{attrs:{id:"offboard_mode"}})]),t._v(" "),a("h2",{attrs:{id:"오프보드-모드-회피"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#오프보드-모드-회피"}},[t._v("#")]),t._v(" 오프보드 모드 회피")]),t._v(" "),a("p",[t._v("PX4는 "),a("RouterLink",{attrs:{to:"/ko/flight_modes/offboard.html"}},[t._v("오프 보드 모드")]),t._v("에서 장애물 회피를 지원합니다.")],1),t._v(" "),a("p",[t._v("원하는 경로는 보조 컴퓨터에서 실행되는 "),a("RouterLink",{attrs:{to:"/ko/ros/"}},[t._v("ROS")]),t._v(" 노드에서 가져옵니다. 이것은 장애물 회피 모듈 (다른 ROS 노드)로 전달됩니다. 회피 소프트웨어는 "),a("code",[t._v("SET_POSITION_TARGET_LOCAL_NED")]),t._v(" 메시지의 스트림으로 비행 스택에 계획된 경로를 전송합니다.")],1),t._v(" "),a("p",[t._v("PX4는 "),a("RouterLink",{attrs:{to:"/ko/flight_modes/offboard.html"}},[t._v("오프 보드 모드")]),t._v("에서 장애물 회피를 지원합니다.")],1),t._v(" "),a("p",[t._v("Companion-side hardware setup and hardware/software configuration is provided in the "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Avoidance",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4/PX4-Avoidance"),a("OutboundLink")],1),t._v(" Github repo.")]),t._v(" "),a("p",[a("a",{attrs:{id:"mission_mode"}})]),t._v(" "),a("h2",{attrs:{id:"임무-모드-회피"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#임무-모드-회피"}},[t._v("#")]),t._v(" 임무 모드 회피")]),t._v(" "),a("p",[t._v("PX4는 보조 컴퓨터의 회피 소프트웨어를 사용하여 "),a("RouterLink",{attrs:{to:"/ko/flight_modes/mission.html"}},[t._v("임무 모드")]),t._v("에서 장애물 회피를 지원합니다.")],1),t._v(" "),a("h3",{attrs:{id:"임무-수행"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#임무-수행"}},[t._v("#")]),t._v(" 임무 수행")]),t._v(" "),a("p",[t._v("PX4는 보조 컴퓨터의 회피 소프트웨어를 사용하여 "),a("RouterLink",{attrs:{to:"/ko/flight_modes/mission.html"}},[t._v("임무 모드")]),t._v("에서 장애물 회피를 지원합니다.")],1),t._v(" "),a("p",[t._v("회피가 활성화된 경우 차이점은 다음과 같습니다.")]),t._v(" "),a("ul",[a("li",[t._v('웨이포인트는 기체의 방향과 관계없이 허용 반경내에 있을 때 "도달"한 것으로 간주됩니다.\n'),a("ul",[a("li",[t._v('이것은 기체의 특정 방향 (즉, 이전 웨이포인트에서 "가까운"직선)으로 웨이포인트에 도달해야하는 일반 임무와의 차이점입니다. 장애물 회피 알고리즘이 기체 방향을 완전히 제어하고, 기체는 항상 현재 시야에서 움직이기 때문에 장애물 회피가 활성화된 경우이 제약 조건을 충족할 수 없습니다.')])])]),t._v(" "),a("li",[t._v("PX4 starts emitting a new current/next waypoint once the previous waypoint is reached (i.e. as soon as the vehicle enters its acceptance radius).")]),t._v(" "),a("li",[t._v("If a waypoint is "),a("em",[t._v("inside")]),t._v(" an obstacle it may be unreachable (and the mission will be stuck).\n"),a("ul",[a("li",[t._v("이전-현재 웨이포인트 라인의 기체 투영이 현재 웨이포인트를 통과하면 수락 반경이 확대되어 현재 웨이포인트에 도달한 것으로 설정됩니다.")]),t._v(" "),a("li",[t._v("If the vehicle is within the x-y acceptance radius, the altitude acceptance is modified such that the mission progresses (even if it is not in the altitude acceptance radius).")])])]),t._v(" "),a("li",[t._v("원래의 미션 속도 ("),a("em",[t._v("QGroundControl")]),t._v("/PX4에 설정 됨)는 무시됩니다. 속도는 회피 소프트웨어에 의해 결정됩니다.\n"),a("ul",[a("li",[a("em",[t._v("로컬 플래너")]),t._v(" 임무 속도는 약 3m/s입니다.")]),t._v(" "),a("li",[a("em",[t._v("글로벌 플래너")]),t._v(" 임무 속도는 약 1~1.5m/s입니다.")])])])]),t._v(" "),a("p",[t._v("If PX4 stops receiving setpoint updates for more than half a second it will switch into "),a("RouterLink",{attrs:{to:"/ko/flight_modes_mc/hold.html"}},[t._v("Hold mode")]),t._v(".")],1),t._v(" "),a("h3",{attrs:{id:"px4-설정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#px4-설정"}},[t._v("#")]),t._v(" PX4 설정")]),t._v(" "),a("p",[t._v("장애물 회피는 "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_OBS_AVOID"}},[t._v("COM_OBS_AVOID")]),t._v("를 1로 "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameters.html"}},[t._v("설정")]),t._v("하여 PX4 내에서 활성화됩니다.")],1),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[a("code",[t._v("COM_OBS_AVOID")]),t._v("는 "),a("RouterLink",{attrs:{to:"/ko/computer_vision/safe_landing.html"}},[t._v("안전 착륙")]),t._v(" 및 PX4 "),a("RouterLink",{attrs:{to:"/ko/computer_vision/path_planning_interface.html"}},[t._v("경로 계획 오프 보드 인터페이스")]),t._v(" (추적 인터페이스)를 사용하는 기타 기능을 활성화하여 외부 경로 계획 서비스를 PX4와 통합합니다.")],1)]),t._v(" "),a("h2",{attrs:{id:"보조-컴퓨터-설정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#보조-컴퓨터-설정"}},[t._v("#")]),t._v(" 보조 컴퓨터 설정")]),t._v(" "),a("p",[t._v("Companion-side hardware setup and hardware/software configuration is provided in the "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Avoidance",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4/PX4-Avoidance"),a("OutboundLink")],1),t._v(" Github repo.")]),t._v(" "),a("p",[t._v("보조 컴퓨터 하드웨어와 소프트웨어 구성과 설정은 "),a("a",{attrs:{href:"https://github.com/PX4/avoidance#obstacle-detection-and-avoidance",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4 회피"),a("OutboundLink")],1),t._v(" Github 저장소에서 제공됩니다.")]),t._v(" "),a("p",[a("a",{attrs:{id:"interface"}})]),t._v(" "),a("h2",{attrs:{id:"장애물-회피-인터페이스"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#장애물-회피-인터페이스"}},[t._v("#")]),t._v(" 장애물 회피 인터페이스")]),t._v(" "),a("p",[t._v("PX4는 "),a("RouterLink",{attrs:{to:"/ko/computer_vision/obstacle_avoidance.html#mission_mode"}},[t._v("임무중 장애물 회피")]),t._v(", "),a("RouterLink",{attrs:{to:"/ko/computer_vision/safe_landing.html"}},[t._v("안전 착륙")]),t._v(" 및 향후 서비스를 포함하여 보조 컴퓨터의 경로 계획 서비스를 통합하기 위하여 "),a("RouterLink",{attrs:{to:"/ko/computer_vision/path_planning_interface.html"}},[t._v("경로 계획 오프 보드 인터페이스")]),t._v("를 사용합니다.")],1),t._v(" "),a("p",[t._v("PX4는 "),a("RouterLink",{attrs:{to:"/ko/computer_vision/obstacle_avoidance.html#mission_mode"}},[t._v("임무중 장애물 회피")]),t._v(", "),a("RouterLink",{attrs:{to:"/ko/computer_vision/safe_landing.html"}},[t._v("안전 착륙")]),t._v(" 및 향후 서비스를 포함하여 보조 컴퓨터의 경로 계획 서비스를 통합하기 위하여 "),a("RouterLink",{attrs:{to:"/ko/computer_vision/path_planning_interface.html"}},[t._v("경로 계획 오프 보드 인터페이스")]),t._v("를 사용합니다.")],1),t._v(" "),a("h2",{attrs:{id:"지원-하드웨어"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#지원-하드웨어"}},[t._v("#")]),t._v(" 지원 하드웨어")]),t._v(" "),a("p",[t._v("Tested companion computers and cameras are listed in "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Avoidance#run-on-hardware",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4/PX4-Avoidance"),a("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);e.default=s.exports}}]);