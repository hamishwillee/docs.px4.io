(window.webpackJsonp=window.webpackJsonp||[]).push([[534],{2557:function(_,t,v){"use strict";v.r(t);var r=v(19),a=Object(r.a)({},(function(){var _=this,t=_.$createElement,r=_._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[r("h1",{attrs:{id:"귀환-모드"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#귀환-모드"}},[_._v("#")]),_._v(" 귀환 모드")]),_._v(" "),r("p",[r("RouterLink",{attrs:{to:"/ko/getting_started/flight_modes.html#key_position_fixed"}},[r("img",{attrs:{src:v(327),title:"위치 고정 요구(예, GPS)",width:"30px"}})])],1),_._v(" "),r("p",[r("em",[_._v("귀환")]),_._v(" 모드는 대기(호버링 또는 선회) 또는 착륙 가능한 안전한 목적지까지 장애물이 없는 경로로 "),r("em",[_._v("기체를 안전하게 복귀")]),_._v("하기 위하여 사용합니다.")]),_._v(" "),r("p",[_._v('PX4는 홈 위치, 집결 ( "안전") 지점, 임무 경로 및 임무 착륙 시퀀스 사용을 포함하여 안전한 복귀 경로, 목적지 착륙을 위한 다양한 메커니즘을 제공합니다.')]),_._v(" "),r("p",[_._v("다음 섹션에서는 "),r("a",{attrs:{href:"#return_types"}},[_._v("복귀 유형 ")]),_._v(", "),r("a",{attrs:{href:"#return_altitude"}},[_._v("복귀 고도")]),_._v(" 및 "),r("a",{attrs:{href:"#arrival"}},[_._v("착륙/도착 동작")]),_._v(" 설정 방법을 설명합니다. 마지막에는 각 "),r("a",{attrs:{href:"#default_configuration"}},[_._v("기체 유형")]),_._v("에 대한 "),r("em",[_._v("기본")]),_._v(" (미리 구성된) 동작을 설명하는 섹션이 있습니다.")]),_._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[_._v("Note")]),_._v(" "),r("ul",[r("li",[_._v("이 모드는 GPS가 필요합니다.")]),_._v(" "),r("li",[_._v("이 모드는 자동입니다. 기체 제어시 사용자 개입이 "),r("em",[_._v("필요하지")]),_._v(" 않습니다.")]),_._v(" "),r("li",[_._v("RC 제어 스위치는 기체의 비행 모드를 변경할 수 있습니다.")]),_._v(" "),r("li",[_._v("멀티콥터 또는 VTOL 멀티콥터 모드에서 RC 스틱을 움직이면 위험한 배터리 안전 장치를 처리하지 않는 한 "),r("a",{attrs:{href:"#COM_RC_OVERRIDE"}},[_._v("기본적으로")]),_._v(" 기체는 "),r("RouterLink",{attrs:{to:"/ko/flight_modes/position_mc.html"}},[_._v("위치 모드")]),_._v("로 변경됩니다.")],1)])]),_._v(" "),r("p",[r("span",{attrs:{id:"return_types"}})]),_._v(" "),r("h2",{attrs:{id:"복귀-유형-rtl-type"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#복귀-유형-rtl-type"}},[_._v("#")]),_._v(" 복귀 유형(RTL_TYPE)")]),_._v(" "),r("p",[_._v("PX4는 안전한 목적지 또는 착륙지까지 방해받지 않는 경로를 검색하는 네 가지 대체 접근 방식 ("),r("a",{attrs:{href:"#RTL_TYPE"}},[_._v("RTL_TYPE")]),_._v(")을 제공합니다.")]),_._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#home_return"}},[_._v("홈/랠리 포인트 복귀")]),_._v(" ("),r("code",[_._v("RTL_TYPE = 0")]),_._v(") : 안전한 고도로 상승하여 가장 가까운 랠리 포인트 또는 홈 위치로 직접 경로를 통하여 복귀합니다.")]),_._v(" "),r("li",[r("a",{attrs:{href:"#mission_landing_return"}},[_._v("미션 착륙/랠리 포인트 복귀")]),_._v(" ("),r("code",[_._v("RTL_TYPE = 1")]),_._v(") : 안전한 고도로 상승, *홈 위치가 아닌 * 가장 가까운 목적지로 직행 : 랠리 미션 착륙 지점 또는 시작. 임무 착륙 또는 집결 지점이 정의되지 않은 경우에는 직접 경로를 통해 홈으로 복귀합니다.")]),_._v(" "),r("li",[r("a",{attrs:{href:"#mission_path_return"}},[_._v("미션 경로 복귀")]),_._v(" ("),r("code",[_._v("RTL_TYPE = 2")]),_._v(") : 임무 경로를 사용하고 임무 착륙을 신속하게 진행합니다 (정의된 경우). 임무 착륙이 정의되지 않은 경우 홈으로 빠르게 역회전합니다. 정의된 임무가 없으면 집으로 직접 돌아갑니다 (랠리 포인트는 무시됨).")]),_._v(" "),r("li",[r("a",{attrs:{href:"#safety_point_return"}},[_._v("가장 가까운 안전한 목적지 복귀")]),_._v(" ("),r("code",[_._v("RTL_TYPE = 3")]),_._v(") : 안전한 고도로 상승하여 가장 가까운 목적지 (홈, 임무 시작 착지 패턴 또는 집결지)로 직접 경로를 통하여 복귀합니다. 목적지가 임무 착륙 패턴인 경우 패턴을 따라 착륙합니다.")])]),_._v(" "),r("p",[_._v("각 유형에 대한 자세한 설명은 다음 섹션에서 제공됩니다.")]),_._v(" "),r("p",[r("span",{attrs:{id:"home_return"}})]),_._v(" "),r("h3",{attrs:{id:"홈-랠리-포인트-복귀-유형-rtl-type-0"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#홈-랠리-포인트-복귀-유형-rtl-type-0"}},[_._v("#")]),_._v(" 홈/랠리 포인트 복귀 유형 (RTL_TYPE = 0)")]),_._v(" "),r("p",[_._v("이 복귀 유형에서 기체의 동작:")]),_._v(" "),r("ul",[r("li",[_._v("안전한 "),r("a",{attrs:{href:"#return_altitude"}},[_._v("복귀 고도")]),_._v(" (예상 장애물 위)로 상승합니다.")]),_._v(" "),r("li",[_._v("홈 포지션 또는 랠리 포인트 (둘 중 가장 가까운 지점) 로의 직접 경로로 비행합니다.")]),_._v(" "),r("li",[_._v("하강 고도에서 "),r("a",{attrs:{href:"#arrival"}},[_._v("착륙 또는 대기")]),_._v(" (착륙 매개 변수에 따라 다름).")])]),_._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[_._v("Note")]),_._v(" "),r("p",[_._v("랠리 포인트가 정의되지 않은 경우 이는 "),r("em",[_._v("출발지 복귀")]),_._v(" (RTL) / "),r("em",[_._v("홈으로 복귀")]),_._v(" (RTH)과 동일합니다.")])]),_._v(" "),r("p",[r("span",{attrs:{id:"mission_landing_return"}})]),_._v(" "),r("h3",{attrs:{id:"임무-착륙-랠리-포인트-복귀-유형-rtl-type-1"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#임무-착륙-랠리-포인트-복귀-유형-rtl-type-1"}},[_._v("#")]),_._v(" 임무 착륙/랠리 포인트 복귀 유형 (RTL_TYPE = 1)")]),_._v(" "),r("p",[_._v("이 복귀 유형에서 기체의 동작:")]),_._v(" "),r("ul",[r("li",[_._v("안전한 "),r("a",{attrs:{href:"#return_altitude"}},[_._v("복귀 고도")]),_._v(" (예상 장애물 위)로 상승합니다.")]),_._v(" "),r("li",[_._v("랠리 지점 또는 "),r("a",{attrs:{href:"#mission_landing_pattern"}},[_._v("임무 착륙 패턴")]),_._v("의 시작점 (둘 중 가장 가까운 지점)으로 직접 이동합니다. 임무 착륙 또는 집결 지점이 정의되지 않은 경우에는 기체는 직접 경로를 통하여 홈으로 복귀합니다.")]),_._v(" "),r("li",[_._v("목적지가 임무 착륙 패턴인 경우 패턴을 따라 착륙합니다.")]),_._v(" "),r("li",[_._v("목적지가 집결지 또는 홈인 경우에는 하강 고도에서 "),r("a",{attrs:{href:"#arrival"}},[_._v("착륙또는 대기")]),_._v("합니다 (착륙 매개 변수에 따라 다름).")])]),_._v(" "),r("p",[r("span",{attrs:{id:"mission_landing_pattern"}}),_._v(" :::note 미션 착륙 패턴은 "),r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_DO_LAND_START",target:"_blank",rel:"noopener noreferrer"}},[_._v("MAV_CMD_DO_LAND_START"),r("OutboundLink")],1),_._v(", 하나 이상의 위치 웨이포인트 및 "),r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_NAV_LAND",target:"_blank",rel:"noopener noreferrer"}},[_._v("MAV_CMD_NAV_LAND"),r("OutboundLink")],1),_._v("로 구성됩니다.\n:::")]),_._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[_._v("WARNING")]),_._v(" "),r("p",[_._v("이 유형이 설정되면 PX4는 유효한 착지 패턴이 없는 임무를 거부합니다.")])]),_._v(" "),r("p",[r("span",{attrs:{id:"mission_path_return"}})]),_._v(" "),r("h3",{attrs:{id:"임무-경로-복귀-유형-rtl-type-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#임무-경로-복귀-유형-rtl-type-2"}},[_._v("#")]),_._v(" 임무 경로 복귀 유형 (RTL_TYPE = 2)")]),_._v(" "),r("p",[_._v("이 반환 유형은 임무(정의 된 경우)을 사용하여 안전한 복귀 "),r("em",[_._v("경로")]),_._v("를 제공하고 임무 착륙 패턴 (정의 된 경우)을 사용하여 착륙합니다. 임무가 있지만 임무 착수 패턴이없는 경우 임무는 "),r("em",[_._v("역방향")]),_._v("으로 비행합니다. 랠리 포인트는 무시됩니다.")]),_._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[_._v("Note")]),_._v(" "),r("p",[_._v("비행 모드와 임무 및 임무 착륙이 정의 여부에 따라 동작이 매우 복잡해집니다.")])]),_._v(" "),r("p",[_._v("착륙 패턴이 "),r("em",[_._v("있는")]),_._v(" 임무 :")]),_._v(" "),r("ul",[r("li",[r("strong",[_._v("임무 모드 :")]),_._v(' 임무는 "빨리 감기 모드"(점프, 지연 및 기타 비위치 명령 무시, 선회 및 기타 위치 웨이포인트가 간단한 웨이포인트로 변환 됨)에서 수행한 다음 착륙합니다.')]),_._v(" "),r("li",[r("strong",[_._v("임무 모드 이외의 자동 모드 :")]),_._v(" "),r("ul",[r("li",[_._v("안전한 "),r("a",{attrs:{href:"#return_altitude"}},[_._v("복귀 고도")]),_._v(" (예상 장애물 위)로 상승합니다.")]),_._v(" "),r("li",[_._v("가장 가까운 웨이포인트 (착륙 WP가 아닌 FW의 경우)로 직접 비행하고 웨이포인트 고도로 하강합니다.")]),_._v(" "),r("li",[_._v("그 웨이포인트에서 빨리 감기 모드로 임무를 계속 수행합니다.")])])]),_._v(" "),r("li",[r("strong",[_._v("수동 모드:")]),_._v(" "),r("ul",[r("li",[_._v("안전한 "),r("a",{attrs:{href:"#return_altitude"}},[_._v("복귀 고도")]),_._v(" (예상 장애물 위)로 상승합니다.")]),_._v(" "),r("li",[_._v("착륙 순서 위치로 직접 비행하고 웨이포인트 고도로 하강합니다.")]),_._v(" "),r("li",[_._v("임무 착륙 패턴을 사용하는 착륙")])])])]),_._v(" "),r("p",[_._v("착륙 패턴이 "),r("em",[_._v("없는")]),_._v(" 임무 :")]),_._v(" "),r("ul",[r("li",[r("strong",[_._v("임무 모드:")]),_._v(" "),r("ul",[r("li",[_._v('이전 웨이포인트에서 시작하여 "빨리 후진"(역방향) 비행한 미션\n'),r("ul",[r("li",[_._v("점프, 지연 및 기타 위치가 아닌 명령은 무시되며, 선회 및 기타 위치 웨이포인트는 단순 웨이포인트로 변환됩니다.")]),_._v(" "),r("li",[_._v("VTOL은 임무를 역으로 비행하기 전에 필요한 경우에는 고정익 모드로 전환합니다.")])])]),_._v(" "),r("li",[_._v("웨이 포인트 1에 도달하면 기체는 "),r("a",{attrs:{href:"#return_altitude"}},[_._v("복귀 고도")]),_._v("로 상승하여 홈 위치 ("),r("a",{attrs:{href:"#arrival"}},[_._v("착륙 또는 대기")]),_._v(")로 비행합니다.")])])]),_._v(" "),r("li",[r("strong",[_._v("임무 모드 이외의 자동 모드 :")]),_._v(" "),r("ul",[r("li",[_._v("가장 가까운 웨이포인트 (착륙 WP가 아닌 FW의 경우)로 직접 비행하고 웨이포인트 고도로 하강합니다.")]),_._v(" "),r("li",[_._v("미션 모드 (위)에서 복귀 모드가 시작된 것처럼 임무를 반대로 계속 수행합니다.")])])]),_._v(" "),r("li",[r("strong",[_._v("수동 모드:")]),_._v(" 홈으로 직접 비행하여 착륙합니다.")])]),_._v(" "),r("p",[_._v("미션이 정의되지 않은 경우 PX4는 홈 위치에 착륙합니다(랠리 포인트는 무시됨).")]),_._v(" "),r("p",[_._v("복귀 모드에서 임무가 변경되면 위와 동일한 규칙에 따라 새 임무에 따라 행동이 재평가됩니다 (예 : 새 임무에 착륙 순서가없고 임무를 수행중인 경우 임무가 반전 됨).")]),_._v(" "),r("p",[r("span",{attrs:{id:"safety_point_return"}})]),_._v(" "),r("h3",{attrs:{id:"가장-가까운-안전한-대상-복귀-유형-rtl-type-3"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#가장-가까운-안전한-대상-복귀-유형-rtl-type-3"}},[_._v("#")]),_._v(" 가장 가까운 안전한 대상 복귀 유형 (RTL_TYPE = 3)")]),_._v(" "),r("p",[_._v("이 복귀 유형에서 기체의 동작:")]),_._v(" "),r("ul",[r("li",[_._v("안전한 "),r("a",{attrs:{href:"#return_altitude"}},[_._v("복귀 고도")]),_._v(" (예상 장애물 위)로 상승합니다.")]),_._v(" "),r("li",[_._v("홈 위치, 미션 착륙 패턴 또는 집결 지점의 가장 가까운 목적지로 직접 이동합니다.")]),_._v(" "),r("li",[_._v("목적지가 임무 착륙 패턴인 경우 패턴을 따라 착륙합니다")]),_._v(" "),r("li",[_._v("목적지가 홈 위치 또는 집결지인 경우 기체는 하강 고도 ("),r("a",{attrs:{href:"#RTL_DESCEND_ALT"}},[_._v("RTL_DESCEND_ALT")]),_._v(")로 하강한 다음 "),r("a",{attrs:{href:"#arrival"}},[_._v("착륙 또는 대기")]),_._v("합니다.")])]),_._v(" "),r("p",[r("span",{attrs:{id:"return_altitude"}})]),_._v(" "),r("h2",{attrs:{id:"복귀-고도"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#복귀-고도"}},[_._v("#")]),_._v(" 복귀 고도")]),_._v(" "),r("p",[_._v("기체는 목적지까지의 장애물을 피하여 복귀하기 이전에 안전한 고도로 먼저 상승합니다.")]),_._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[_._v("Note")]),_._v(" "),r("p",[_._v("이것은 대부분의 "),r("a",{attrs:{href:"#return_types"}},[_._v("복귀 유형")]),_._v("에 해당됩니다. 예외는 기체가 미션 웨이포인트를 비행중에 "),r("a",{attrs:{href:"#mission_path_return"}},[_._v("미션 경로 복귀")]),_._v("을 실행하는 경우입니다 (장애물을 피할 수 있다고 가정할 수 있음).")])]),_._v(" "),r("p",[_._v("고정익 복귀 고도는 매개 변수 "),r("a",{attrs:{href:"#RTL_RETURN_ALT"}},[_._v("RTL_RETURN_ALT")]),_._v("를 사용하여 설정됩니다. 멀티 콥터 및 VTOL 차량의 복귀 고도는 "),r("a",{attrs:{href:"#RTL_RETURN_ALT"}},[_._v("RTL_RETURN_ALT")]),_._v(" 및 "),r("a",{attrs:{href:"#RTL_CONE_ANG"}},[_._v("RTL_CONE_ANG")]),_._v(" 매개 변수를 사용하여 구성되며, 이는 목적지 (홈 위치 또는 안전 지점)를 중심으로 한 반 원뿔을 정의합니다.")]),_._v(" "),r("p",[r("img",{attrs:{src:v(914),alt:"복귀 모드 원뿔"}})]),_._v(" "),r("p",[_._v("기체가 다음과 같은 경우 :")]),_._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#RTL_RETURN_ALT"}},[_._v("RTL_RETURN_ALT")]),_._v(" (1) 이상에서는 현재 고도로 돌아옵니다.")]),_._v(" "),r("li",[_._v("원뿔 아래에서 원뿔 (2) 또는 "),r("a",{attrs:{href:"#RTL_DESCEND_ALT"}},[_._v("RTL_DESCEND_ALT")]),_._v(" (둘 중 더 높은 쪽)와 교차하는 위치를 반환합니다.")]),_._v(" "),r("li",[_._v("원뿔 (3)은 "),r("a",{attrs:{href:"#RTL_RETURN_ALT"}},[_._v("RTL_RETURN_ALT")]),_._v("에 까지 먼저 상승합니다.")]),_._v(" "),r("li",[_._v("원뿔 내에서\n"),r("ul",[r("li",[r("a",{attrs:{href:"#RTL_DESCEND_ALT"}},[_._v("RTL_DESCEND_ALT")]),_._v(" (4) 이상에서는 현재 고도로 복귀합니다.")]),_._v(" "),r("li",[r("a",{attrs:{href:"#RTL_DESCEND_ALT"}},[_._v("RTL_DESCEND_ALT")]),_._v(" (5) 아래에서는 먼저 "),r("code",[_._v("RTL_DESCEND_ALT")]),_._v("로 상승합니다.")])])])]),_._v(" "),r("p",[_._v("참고:")]),_._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#RTL_CONE_ANG"}},[_._v("RTL_CONE_ANG")]),_._v('이 0도이면 "원뿔"이 없습니다.\n'),r("ul",[r("li",[_._v("기체는 "),r("code",[_._v("RTL_RETURN_ALT")]),_._v(" (또는 그 이상)으로 복귀합니다.")])])]),_._v(" "),r("li",[r("a",{attrs:{href:"#RTL_CONE_ANG"}},[_._v("RTL_CONE_ANG")]),_._v("이 90도이면 기체는 "),r("code",[_._v("RTL_DESCEND_ALT")]),_._v("와 현재 고도 중 높은 고도로 복귀합니다.")]),_._v(" "),r("li",[_._v("기체는 복귀를 위해 항상 최소 "),r("a",{attrs:{href:"#RTL_DESCEND_ALT"}},[_._v("RTL_DESCEND_ALT")]),_._v("으로 상승합니다.")])]),_._v(" "),r("p",[r("span",{attrs:{id:"arrival"}})]),_._v(" "),r("h2",{attrs:{id:"목적지에-호버링-착륙"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#목적지에-호버링-착륙"}},[_._v("#")]),_._v(" 목적지에 호버링/착륙")]),_._v(" "),r("p",[_._v("임무 착륙을 실행하지 않으면 (예 : "),r("a",{attrs:{href:"#home_return"}},[_._v("홈 위치 복귀")]),_._v(" 또는 "),r("a",{attrs:{href:"#safety_point_return"}},[_._v("최인접 안전 목적지 복귀")]),_._v("을 실행하는 경우) 기체는 목적지에 도착하여 "),r("a",{attrs:{href:"#RTL_DESCEND_ALT"}},[_._v("RTL_DESCEND_ALT")]),_._v(" 고도로 빠르게 하강합니다.")]),_._v(" "),r("p",[_._v("기체는 지정된 시간 ("),r("a",{attrs:{href:"#RTL_LAND_DELAY"}},[_._v("RTL_LAND_DELAY")]),_._v(") 동안 배회후에 착륙합니다. "),r("a",{attrs:{href:"#RTL_LAND_DELAY"}},[_._v("RTL_LAND_DELAY = -1")]),_._v("이면 무기한 배회합니다.")]),_._v(" "),r("p",[r("span",{attrs:{id:"default_configuration"}})]),_._v(" "),r("h2",{attrs:{id:"기체-기본-동작"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#기체-기본-동작"}},[_._v("#")]),_._v(" 기체 기본 동작")]),_._v(" "),r("p",[_._v("이 모드는 모든 기체에서 매유 유사한 방식으로 "),r("em",[_._v("구현")]),_._v("되며 (단, 고정익 대기시 호버링하지 않고 원을 그리며) 따라서 동일한 매개 변수를 사용하여 조정됩니다.")]),_._v(" "),r("p",[_._v("그러나 "),r("em",[_._v("기본 설정")]),_._v("은 아래 설명과 같이 기체 유형에 맞게 조정됩니다.")]),_._v(" "),r("h3",{attrs:{id:"멀티콥터-mc"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#멀티콥터-mc"}},[_._v("#")]),_._v(" 멀티콥터 (MC)")]),_._v(" "),r("p",[_._v("멀티콥터는 기본적으로 "),r("a",{attrs:{href:"#home_return"}},[_._v("홈 위치 복귀")]),_._v("나 다음 설정을 사용합니다.")]),_._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#RTL_RETURN_ALT"}},[_._v("RTL_RETURN_ALT")]),_._v(" ("),r("a",{attrs:{href:"#RTL_CONE_ANG"}},[_._v("RTL_CONE_ANG = 0")]),_._v("-원뿔 사용 안 함)로 상승합니다.")]),_._v(" "),r("li",[_._v("직선과 일정한 고도로 홈 위치로 비행합니다 (현제 고도가 복귀 고도보다 높은 경우 현재 고도로 복귀합니다).")]),_._v(" "),r("li",[r("a",{attrs:{href:"#RTL_DESCEND_ALT"}},[_._v("RTL_DESCEND_ALT")]),_._v(" 고도까지 빠르게 하강합니다.")]),_._v(" "),r("li",[_._v("거의 즉시 착륙합니다. (작은 "),r("a",{attrs:{href:"#RTL_LAND_DELAY"}},[_._v("RTL_LAND_DELAY")]),_._v(").")])]),_._v(" "),r("h3",{attrs:{id:"고정익-fw"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#고정익-fw"}},[_._v("#")]),_._v(" 고정익 (FW)")]),_._v(" "),r("p",[_._v("고정익은 기본적으로 "),r("a",{attrs:{href:"#mission_landing_return"}},[_._v("임무 착륙 복귀 유형")]),_._v("을 사용합니다.")]),_._v(" "),r("ul",[r("li",[_._v("임무 착륙이 정의된 경우 임무 착륙 시작 지점으로 직접 비행후 착륙합니다.")]),_._v(" "),r("li",[_._v("그렇지 않으면, 홈 위치로 직접 비행하고 그 위 반경 "),r("a",{attrs:{href:"#NAV_LOITER_RAD"}},[_._v("NAV_LOITER_RAD")]),_._v("에서 선회 비행합니다.")])]),_._v(" "),r("p",[_._v("임무 착륙을 따르지 않고 "),r("a",{attrs:{href:"#RTL_LAND_DELAY"}},[_._v("RTL_LAND_DELAY")]),_._v("가 -1로 설정된 경우 기체는 "),r("RouterLink",{attrs:{to:"/ko/flying/fixed_wing_landing.html"}},[_._v("착륙 (고정익) ")]),_._v("에 설명된 방법으로 착륙합니다.")],1),_._v(" "),r("p",[_._v("고정익"),r("a",{attrs:{href:"#return_altitude"}},[_._v("안전 복귀 고도")]),_._v("는 "),r("a",{attrs:{href:"#RTL_RETURN_ALT"}},[_._v("RTL_RETURN_ALT")]),_._v("에만 의존합니다 ("),r("a",{attrs:{href:"#RTL_CONE_ANG"}},[_._v("RTL_CONE_ANG")]),_._v("로 정의된 원뿔은 사용되지 않음).")]),_._v(" "),r("p",[_._v("RC 스틱 이동은 무시됩니다.")]),_._v(" "),r("h3",{attrs:{id:"수직이착륙기"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#수직이착륙기"}},[_._v("#")]),_._v(" 수직이착륙기")]),_._v(" "),r("p",[_._v("고정익은 기본적으로 "),r("a",{attrs:{href:"#mission_landing_return"}},[_._v("임무 착륙 복귀 유형")]),_._v("을 사용합니다.")]),_._v(" "),r("ul",[r("li",[_._v("임무 착륙이 정의된 경우 임무 착륙 시작 지점으로 직접 비행후 착륙합니다.")]),_._v(" "),r("li",[_._v("그렇지 않으면, 홈 위치로 직접 비행하고 멀티콥터 모드로 전환후 착륙합니다.")])]),_._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[_._v("Note")]),_._v(" "),r("p",[_._v("임무 착륙중이 아니면 고정익 모드의 VTOL은 착륙 직전에 "),r("em",[_._v("항상")]),_._v(" 멀티콥터로 전환됩니다 ("),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#NAV_FORCE_VT"}},[_._v("NAV_FORCE_VT")]),_._v(" 무시).")],1)]),_._v(" "),r("h2",{attrs:{id:"매개변수"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#매개변수"}},[_._v("#")]),_._v(" 매개변수")]),_._v(" "),r("p",[_._v("RTL 매개 변수는 "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#return-mode"}},[_._v("매개변수 정의 > 복귀 모드")]),_._v("에 기술되어 있습니다 (아래에 요약되어 있음).")],1),_._v(" "),r("table",[r("thead",[r("tr",[r("th",[_._v("매개변수")]),_._v(" "),r("th",[_._v("설명")])])]),_._v(" "),r("tbody",[r("tr",[r("td",[r("span",{attrs:{id:"RTL_TYPE"}}),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RTL_TYPE"}},[_._v("RTL_TYPE")])],1),_._v(" "),r("td",[_._v("복귀 메커니즘 (경로 및 목적지). "),r("br"),_._v(" "),r("code",[_._v("0")]),_._v(" : 직접 경로를 통해 집회 지점 또는 홈(둘 중 가장 가까운 곳)으로 복귀합니다. "),r("br"),_._v(" "),r("code",[_._v("1")]),_._v(" : 복귀 직접 경로를 통해 집결지 또는 임무 착륙 패턴 시작 지점 (둘 중 가장 가까운 지점) 임무 착륙 또는 집결 지점이 모두 정의되지 않은 경우에는 직접 경로를 통해 홈으로 복귀합니다. 목적지가 임무 착륙 패턴인 경우 착륙 패턴을 따릅니다. "),r("br"),r("code",[_._v("2")]),_._v(" : 착륙 패턴이 정의 된 경우 착륙까지 빨리 감기 경로를 사용하고 그렇지 않으면 홈으로 빠르게 되감기합니다. 랠리포인트를 무시합니다. 임무 계획이 정의되지 않은 경우 홈으로 직접 비행합니다. "),r("br"),r("code",[_._v("3")]),_._v(" : 가장 가까운 목적지 (집, 임무 시작 착륙 패턴 또는 안전 지점)까지 직접 경로를 통해 복귀합니다. 목적지가 임무 착륙 패턴인 경우 패턴을 따라 착륙합니다.")])]),_._v(" "),r("tr",[r("td",[r("span",{attrs:{id:"RTL_RETURN_ALT"}}),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RTL_RETURN_ALT"}},[_._v("RTL_RETURN_ALT")])],1),_._v(" "),r("td",[r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RTL_CONE_ANG"}},[_._v("RTL_CONE_ANG")]),_._v("이 0 인 경우 고도를 미터 단위 (기본값 : 60m)로 반환합니다. 이미 이 값을 초과하면 기체는 현재 고도로 복귀합니다.")],1)]),_._v(" "),r("tr",[r("td",[r("span",{attrs:{id:"RTL_DESCEND_ALT"}}),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RTL_DESCEND_ALT"}},[_._v("RTL_DESCEND_ALT")])],1),_._v(" "),r("td",[_._v("기체가 더 높은 복귀 고도에서 감속하거나 초기 하강을 중지할 최소 복귀 고도 및 고도 (기본값 : 30m)")])]),_._v(" "),r("tr",[r("td",[r("span",{attrs:{id:"RTL_LAND_DELAY"}}),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RTL_LAND_DELAY"}},[_._v("RTL_LAND_DELAY")])],1),_._v(" "),r("td",[_._v("착륙 전 "),r("code",[_._v("RTL_DESCEND_ALT")]),_._v("에서 호버링하는 시간(기본값 : 0.5 초) - 기본적으로 이 시간은 짧아서 기체는 감속후 즉시 착륙합니다. -1로 설정하면 착륙하지 않고 "),r("code",[_._v("RTL_DESCEND_ALT")]),_._v("에서 배회합니다. 이 지연은 랜딩 기어가 배치될 시간을 설정합니다. (자동으로 동작함).")])]),_._v(" "),r("tr",[r("td",[r("span",{attrs:{id:"RTL_MIN_DIST"}}),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RTL_MIN_DIST"}},[_._v("RTL_MIN_DIST")])],1),_._v(" "),r("td",[_._v('홈 위치에서 "원뿔"에 지정된 복귀 고도까지 상승을 시작하는 최소 수평 거리. 차량이 홈까지의이 거리보다 수평으로 가까우면 먼저 RTL_RETURN_ALT로 상승하지 않고 현재 고도 또는 '),r("code",[_._v("RTL_DESCEND_ALT")]),_._v(" (둘 중 더 높은 쪽)고도로 복귀합니다.")])]),_._v(" "),r("tr",[r("td",[r("span",{attrs:{id:"RTL_CONE_ANG"}}),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RTL_CONE_ANG"}},[_._v("RTL_CONE_ANG")])],1),_._v(" "),r("td",[_._v('기체 RTL 리턴 고도를 정의하는 원뿔의 반각. 값 (도) : 0, 25, 45, 65, 80, 90. 0은 "원뿔 없음" (항상 '),r("code",[_._v("RTL_RETURN_ALT")]),_._v(" 이상에서 반환)이고, 90은 차량이 현재 고도 또는 "),r("code",[_._v("RTL_DESCEND_ALT")]),_._v(" (둘 중 더 높은 고도)에서 복귀함을 나타냅니다.")])]),_._v(" "),r("tr",[r("td",[r("span",{attrs:{id:"COM_RC_OVERRIDE"}}),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_RC_OVERRIDE"}},[_._v("COM_RC_OVERRIDE")])],1),_._v(" "),r("td",[_._v("멀티콥터(또는 MC 모드의 VTOL)의 스틱 움직임으로 인해 모드가 "),r("RouterLink",{attrs:{to:"/ko/flight_modes/position_mc.html"}},[_._v("위치 모드")]),_._v("로 변경되는지 여부를 제어합니다(차량이 중요한 배터리 안전 장치를 처리하는 경우 제외). 자동 모드와 오프보드 모드에 대해 별도로 활성화할 수 있으며, 기본적으로 자동 모드에서 활성화됩니다.")],1)]),_._v(" "),r("tr",[r("td",[r("span",{attrs:{id:"COM_RC_STICK_OV"}}),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_RC_STICK_OV"}},[_._v("COM_RC_STICK_OV")])],1),_._v(" "),r("td",[r("RouterLink",{attrs:{to:"/ko/flight_modes/position_mc.html"}},[_._v("위치 모드")]),_._v("로 전환하는 스틱 이동량 ("),r("a",{attrs:{href:"#COM_RC_OVERRIDE"}},[_._v("COM_RC_OVERRIDE")]),_._v("이 활성화된 경우).")],1)]),_._v(" "),r("tr",[r("td",[r("span",{attrs:{id:"NAV_LOITER_RAD"}}),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#NAV_LOITER_RAD"}},[_._v("NAV_LOITER_RAD")])],1),_._v(" "),r("td",[_._v("[고정익만 해당] 배회 원의 반경 ("),r("a",{attrs:{href:"#RTL_LAND_DELAY"}},[_._v("RTL_LAND_DELAY")]),_._v(").")])])])])])}),[],!1,null,null,null);t.default=a.exports},327:function(_,t,v){_.exports=v.p+"assets/img/position_fixed.c1403cf0.svg"},914:function(_,t,v){_.exports=v.p+"assets/img/rtl_cone.f0d28c19.jpg"}}]);