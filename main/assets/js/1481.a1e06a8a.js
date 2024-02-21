(window.webpackJsonp=window.webpackJsonp||[]).push([[1481],{2725:function(t,e,a){"use strict";a.r(e);var r=a(19),n=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"safe-landing-multicopter-companion-computer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#safe-landing-multicopter-companion-computer"}},[t._v("#")]),t._v(" Safe Landing (Multicopter + Companion Computer)")]),t._v(" "),a("p",[t._v("The "),a("em",[t._v("Safe Landing")]),t._v(" computer-vision feature ensures that multicopter vehicles only land on flat terrain.")]),t._v(" "),a("p",[t._v("The feature can be enabled in both "),a("RouterLink",{attrs:{to:"/ko/flight_modes_mc/land.html"}},[t._v("Land mode")]),t._v(" and "),a("RouterLink",{attrs:{to:"/ko/flight_modes_mc/mission.html"}},[t._v("Mission mode")]),t._v(" on multicopter vehicles that have a companion computer running the appropriate vision software. 멀티콥터 모드의 VTOL에서도 사용할 수 있습니다.")],1),t._v(" "),a("p",[t._v("착륙 명령을 받으면 기체는 먼저 표면을 측정할 수있는 높이로 하강합니다 (보조 컴퓨터 "),a("code",[t._v("loiter_height")]),t._v(" 매개 변수). 착륙 영역이 충분히 평평하지 않은 경우에는 비행기는 정사각형 나선형 패턴으로 바깥쪽으로 이동하여 주기적으로 정지하여 너무 거칠지 않은 착륙 지점을 다시 검색합니다.")]),t._v(" "),a("h2",{attrs:{id:"제약-사항과-성능"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#제약-사항과-성능"}},[t._v("#")]),t._v(" 제약 사항과 성능")]),t._v(" "),a("p",[t._v("안전 착륙은 거친 지형에서 평평한 지역을 찾기 위해 설계되었습니다.")]),t._v(" "),a("ul",[a("li",[t._v('도로에 착륙하는 것은 방지되지는 않습니다. 자동차가 감지되어 지나가면 "잊혀집니다".')]),t._v(" "),a("li",[t._v("레이더 또는 초음파 센서를 사용하는 경우 물에 착륙 할 수 있지만, 스테레오 카메라 또는 LIDAR를 사용하는 경우 발생하지 않아야 합니다.\n"),a("ul",[a("li",[t._v("시스템은 접지를 감지할 수있는 경우에만 착륙합니다. 스테레오 카메라의 경우 분석을 위한 충분한 구별 기능을 가질 수 있을 정도로 거친 물은 착륙하기에 충분히 평평하지 않습니다.")])])])]),t._v(" "),a("h2",{attrs:{id:"px4-설정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#px4-설정"}},[t._v("#")]),t._v(" PX4 설정")]),t._v(" "),a("p",[t._v("안전 착륙은 "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_OBS_AVOID"}},[t._v("COM_OBS_AVOID")]),t._v("를 1로 "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameters.html"}},[t._v("설정")]),t._v("하여 PX4내에서 활성화됩니다.")],1),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[a("code",[t._v("COM_OBS_AVOID")]),t._v("는 "),a("RouterLink",{attrs:{to:"/ko/computer_vision/obstacle_avoidance.html#mission_mode"}},[t._v("안전 착륙")]),t._v(" 및 PX4 "),a("RouterLink",{attrs:{to:"/ko/computer_vision/path_planning_interface.html"}},[t._v("경로 계획 오프 보드 인터페이스")]),t._v(" (추적 인터페이스)를 사용하는 기타 기능을 활성화하여 외부 경로 계획 서비스를 PX4와 통합합니다.")],1)]),t._v(" "),a("h2",{attrs:{id:"보조-컴퓨터-설정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#보조-컴퓨터-설정"}},[t._v("#")]),t._v(" 보조 컴퓨터 설정")]),t._v(" "),a("p",[t._v("Companion-side setup and configuration is provided in the "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Avoidance",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4/PX4-Avoidance"),a("OutboundLink")],1),t._v(" Github repo.")]),t._v(" "),a("p",[t._v("여기에는 장애물 회피 및 충돌 방지를위한 일반적인 설정이 포함되며 "),a("em",[t._v("안전 착륙 플래너")]),t._v(" (이 기능은 보조컴퓨터에서 제공)를 사용하기위한 특정 섹션이 포함됩니다.")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/PX4/PX4-Avoidance#safe-landing-planner",target:"_blank",rel:"noopener noreferrer"}},[t._v("시뮬레이션 설정"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/PX4/PX4-Avoidance#safe-landing-planner-1",target:"_blank",rel:"noopener noreferrer"}},[t._v("Hardware setup"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("구성 정보에는 다양한 카메라, 차량 크기 및 착륙 여부를 결정하는 높이에 대한 안전 착륙을 설정 방법이 포함하고 있습니다.")]),t._v(" "),a("p",[a("a",{attrs:{id:"interface"}})]),t._v(" "),a("h2",{attrs:{id:"안전-착륙-인터페이스"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#안전-착륙-인터페이스"}},[t._v("#")]),t._v(" 안전 착륙 인터페이스")]),t._v(" "),a("p",[t._v("PX4는 "),a("RouterLink",{attrs:{to:"/ko/computer_vision/obstacle_avoidance.html#mission_mode"}},[t._v("임무중 장애물 회피")]),t._v(", "),a("RouterLink",{attrs:{to:"/ko/computer_vision/safe_landing.html"}},[t._v("안전 착륙")]),t._v(" 및 향후 서비스를 포함하여 보조 컴퓨터의 경로 계획 서비스를 통합하기 위하여 "),a("RouterLink",{attrs:{to:"/ko/computer_vision/path_planning_interface.html"}},[t._v("경로 계획 오프 보드 인터페이스")]),t._v("를 사용합니다.")],1),t._v(" "),a("p",[t._v("PX4와 보조 컴퓨터간의 인터페이스(전송된 메시지)는 다른 경로 계획 서비스와 정확히 동일합니다. 그러나 안전 착륙 계획자는 원하는 경로에 대한 "),a("code",[t._v("TRAJECTORY_REPRESENTATION_WAYPOINTS")]),t._v(" 메시지의 Point 0에있는 정보만 사용합니다.")]),t._v(" "),a("h2",{attrs:{id:"지원-하드웨어"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#지원-하드웨어"}},[t._v("#")]),t._v(" 지원 하드웨어")]),t._v(" "),a("p",[t._v("Tested companion computers and cameras are listed in "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Avoidance#run-on-hardware",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4/PX4-Avoidance"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"추가-정보"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#추가-정보"}},[t._v("#")]),t._v(" 추가 정보")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://youtu.be/CxIsJWtVaTA?t=963",target:"_blank",rel:"noopener noreferrer"}},[t._v("비전 및 보드 외부 제어 인터페이스"),a("OutboundLink")],1),t._v(" (PX4 개발자 서밋 2019: Martina Rivizzigno, Auterion Computer Vision Engineer)")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/PX4/PX4-Avoidance",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4/PX4-Avoidance"),a("OutboundLink")],1),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/PX4/PX4-Avoidance#safe-landing-planner",target:"_blank",rel:"noopener noreferrer"}},[t._v("시뮬레이션 설정 > 안전 착륙 플래너"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/PX4/PX4-Avoidance#safe-landing-planner-1",target:"_blank",rel:"noopener noreferrer"}},[t._v("하드웨어 설정 > 안전 착륙 플래너"),a("OutboundLink")],1)])])])])])}),[],!1,null,null,null);e.default=n.exports}}]);