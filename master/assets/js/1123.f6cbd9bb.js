(window.webpackJsonp=window.webpackJsonp||[]).push([[1123],{2118:function(t,_,v){"use strict";v.r(_);var a=v(19),e=Object(a.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"장애물-회피"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#장애물-회피"}},[t._v("#")]),t._v(" 장애물 회피")]),t._v(" "),v("p",[v("em",[t._v("장애물 회피")]),t._v(" 기능을 사용하여 계획된 경로를 비행시 장애물 주위를 탐색 할 수 있습니다.")]),t._v(" "),v("p",[t._v("이 기능을 사용하려면 컴퓨터 비전 소프트웨어를 실행하는 보조 컴퓨터가 필요합니다. 이 소프트웨어는 주어진 원하는 궤적에 대한 경로, 매핑 및 장애물 주변 탐색을 제공하여 최적의 경로를 제공합니다.")]),t._v(" "),v("p",[t._v("장애물 회피는 자동 모드를위한 것이며 현재 "),v("a",{attrs:{href:"#mission_mode"}},[t._v("임무")]),t._v(" 및 "),v("a",{attrs:{href:"#offboard_mode"}},[t._v("오프 보드 모드")]),t._v("의 멀티콥터에 지원됩니다.")]),t._v(" "),v("p",[t._v("두 가지 모드에서 기능을 설정하고 활성화하는 방법에 대하여 설명합니다.")]),t._v(" "),v("p",[t._v("@"),v("a",{attrs:{href:"https://youtu.be/PrGt7pKj3tI",target:"_blank",rel:"noopener noreferrer"}},[t._v("유투브"),v("OutboundLink")],1)]),t._v(" "),v("h2",{attrs:{id:"제약-사항과-성능"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#제약-사항과-성능"}},[t._v("#")]),t._v(" 제약 사항과 성능")]),t._v(" "),v("ul",[v("li",[t._v("장애물 회피를 위한 최대 속도는 현재 약 3m/s입니다 (회피 경로 계산 비용으로 인해).")])]),t._v(" "),v("div",{staticClass:"custom-block note"},[v("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),v("p",[t._v("장애물 회피는 "),v("em",[t._v("로컬 플래너")]),t._v("를 사용하면 약 30Hz에서 메시지를 전송하고 약 3m/s로 이동할 수 있습니다. 글로벌 플래너를 사용하면 약 10Hz에서 메시지를 전송하고 장애물 회피 임무 속도는 약 1~1.5 m/s입니다.")])]),t._v(" "),v("p",[v("span",{attrs:{id:"offboard_mode"}})]),t._v(" "),v("h2",{attrs:{id:"오프보드-모드-회피"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#오프보드-모드-회피"}},[t._v("#")]),t._v(" 오프보드 모드 회피")]),t._v(" "),v("p",[t._v("PX4는 "),v("RouterLink",{attrs:{to:"/ko/flight_modes/offboard.html"}},[t._v("오프 보드 모드")]),t._v("에서 장애물 회피를 지원합니다.")],1),t._v(" "),v("p",[t._v("원하는 경로는 보조 컴퓨터에서 실행되는 "),v("RouterLink",{attrs:{to:"/ko/ros/"}},[t._v("ROS")]),t._v(" 노드에서 가져옵니다. 이것은 장애물 회피 모듈 (다른 ROS 노드)로 전달됩니다. 회피 소프트웨어는 "),v("code",[t._v("SET_POSITION_TARGET_LOCAL_NED")]),t._v(" 메시지의 스트림으로 비행 스택에 계획된 경로를 전송합니다.")],1),t._v(" "),v("p",[t._v("유일한 필수 PX4 설정은 PX4를 "),v("em",[t._v("오프보드 모드")]),t._v("로 설정하는 것입니다.")]),t._v(" "),v("p",[t._v("보조 컴퓨터 하드웨어와 소프트웨어 구성과 설정은 "),v("a",{attrs:{href:"https://github.com/PX4/avoidance#obstacle-detection-and-avoidance",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4 회피"),v("OutboundLink")],1),t._v(" Github 저장소에서 제공됩니다.")]),t._v(" "),v("p",[v("span",{attrs:{id:"mission_mode"}})]),t._v(" "),v("h2",{attrs:{id:"임무-모드-회피"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#임무-모드-회피"}},[t._v("#")]),t._v(" 임무 모드 회피")]),t._v(" "),v("p",[t._v("PX4는 보조 컴퓨터의 회피 소프트웨어를 사용하여 "),v("RouterLink",{attrs:{to:"/ko/flight_modes/mission.html"}},[t._v("임무 모드")]),t._v("에서 장애물 회피를 지원합니다.")],1),t._v(" "),v("h3",{attrs:{id:"임무-수행"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#임무-수행"}},[t._v("#")]),t._v(" 임무 수행")]),t._v(" "),v("p",[t._v("장애물 회피가 활성화된 임무 동작은 원래의 계획과 "),v("em",[t._v("약간의 차이")]),t._v("가 납니다.")]),t._v(" "),v("p",[t._v("회피가 활성화된 경우 차이점은 다음과 같습니다.")]),t._v(" "),v("ul",[v("li",[t._v('웨이포인트는 기체의 방향과 관계없이 허용 반경내에 있을 때 "도달"한 것으로 간주됩니다.\n'),v("ul",[v("li",[t._v('이것은 기체의 특정 방향 (즉, 이전 웨이포인트에서 "가까운"직선)으로 웨이포인트에 도달해야하는 일반 임무와의 차이점입니다. 장애물 회피 알고리즘이 기체 방향을 완전히 제어하고, 기체는 항상 현재 시야에서 움직이기 때문에 장애물 회피가 활성화된 경우이 제약 조건을 충족할 수 없습니다.')])])]),t._v(" "),v("li",[t._v("PX4는 이전 웨이포인트에 도달하면 (즉, 차량이 허용 반경에 진입하자마자) 새로운 현재/다음 웨이포인트를 방출하기 시작합니다.")]),t._v(" "),v("li",[t._v("웨이포인트가 장애물 "),v("em",[t._v("안쪽")]),t._v("에 있으면 도달할 수 없을 수 있습니다 (미션이 중단됨).\n"),v("ul",[v("li",[t._v("이전-현재 웨이포인트 라인의 기체 투영이 현재 웨이포인트를 통과하면 수락 반경이 확대되어 현재 웨이포인트에 도달한 것으로 설정됩니다.")]),t._v(" "),v("li",[t._v("차량이 x-y 수용 반경내에 있는 경우 임무가 진행되도록 고도 수용이 수정됩니다 (고도 수용 반경에 있지 않더라도).")])])]),t._v(" "),v("li",[t._v("원래의 미션 속도 ("),v("em",[t._v("QGroundControl")]),t._v("/PX4에 설정 됨)는 무시됩니다. 속도는 회피 소프트웨어에 의해 결정됩니다.\n"),v("ul",[v("li",[v("em",[t._v("로컬 플래너")]),t._v(" 임무 속도는 약 3m/s입니다.")]),t._v(" "),v("li",[v("em",[t._v("글로벌 플래너")]),t._v(" 임무 속도는 약 1~1.5m/s입니다.")])])])]),t._v(" "),v("p",[t._v("PX4가 0.5 초 이상 설정 값 업데이트 수신을 중지하면 "),v("RouterLink",{attrs:{to:"/ko/flight_modes/hold.html"}},[t._v("보류 모드")]),t._v("로 전환됩니다.")],1),t._v(" "),v("h3",{attrs:{id:"px4-설정"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#px4-설정"}},[t._v("#")]),t._v(" PX4 설정")]),t._v(" "),v("p",[t._v("장애물 회피는 "),v("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_OBS_AVOID"}},[t._v("COM_OBS_AVOID")]),t._v("를 1로 "),v("RouterLink",{attrs:{to:"/ko/advanced_config/parameters.html"}},[t._v("설정")]),t._v("하여 PX4 내에서 활성화됩니다.")],1),t._v(" "),v("div",{staticClass:"custom-block note"},[v("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),v("p",[v("code",[t._v("COM_OBS_AVOID")]),t._v("는 "),v("RouterLink",{attrs:{to:"/ko/computer_vision/safe_landing.html"}},[t._v("안전 착륙")]),t._v(" 및 PX4 "),v("RouterLink",{attrs:{to:"/ko/computer_vision/path_planning_interface.html"}},[t._v("경로 계획 오프 보드 인터페이스")]),t._v(" (추적 인터페이스)를 사용하는 기타 기능을 활성화하여 외부 경로 계획 서비스를 PX4와 통합합니다.")],1)]),t._v(" "),v("h2",{attrs:{id:"보조-컴퓨터-설정"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#보조-컴퓨터-설정"}},[t._v("#")]),t._v(" 보조 컴퓨터 설정")]),t._v(" "),v("p",[t._v("보조 컴퓨터 하드웨어와 소프트웨어 구성과 설정은 "),v("a",{attrs:{href:"https://github.com/PX4/avoidance#obstacle-detection-and-avoidance",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4 회피"),v("OutboundLink")],1),t._v(" Github 저장소에서 제공됩니다.")]),t._v(" "),v("p",[t._v("임무에서 장애물 회피는 "),v("em",[t._v("로컬 플래너")]),t._v(" 또는 "),v("em",[t._v("글로벌 플래너")]),t._v("를 사용할 수 있습니다. 좀 더 좋은 성능을 가진 로컬 플래너를 권장합니다.")]),t._v(" "),v("p",[v("span",{attrs:{id:"interface"}})]),t._v(" "),v("h2",{attrs:{id:"장애물-회피-인터페이스"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#장애물-회피-인터페이스"}},[t._v("#")]),t._v(" 장애물 회피 인터페이스")]),t._v(" "),v("p",[t._v("PX4는 "),v("RouterLink",{attrs:{to:"/ko/computer_vision/obstacle_avoidance.html#mission_mode"}},[t._v("임무중 장애물 회피")]),t._v(", "),v("RouterLink",{attrs:{to:"/ko/computer_vision/safe_landing.html"}},[t._v("안전 착륙")]),t._v(" 및 향후 서비스를 포함하여 보조 컴퓨터의 경로 계획 서비스를 통합하기 위하여 "),v("RouterLink",{attrs:{to:"/ko/computer_vision/path_planning_interface.html"}},[t._v("경로 계획 오프 보드 인터페이스")]),t._v("를 사용합니다.")],1),t._v(" "),v("p",[t._v("PX4와 보조 컴퓨터간의 인터페이스(전송된 메시지)는 다른 경로 계획 서비스와 "),v("em",[t._v("정확히")]),t._v(" 동일합니다.")]),t._v(" "),v("h2",{attrs:{id:"지원-하드웨어"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#지원-하드웨어"}},[t._v("#")]),t._v(" 지원 하드웨어")]),t._v(" "),v("p",[t._v("시험을 통과한 보조 컴퓨터와 카메라 목록은 "),v("a",{attrs:{href:"https://github.com/PX4/avoidance#run-on-hardware",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4 회피"),v("OutboundLink")],1),t._v("에 있습니다.")])])}),[],!1,null,null,null);_.default=e.exports}}]);