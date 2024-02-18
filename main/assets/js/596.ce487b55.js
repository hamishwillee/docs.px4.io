(window.webpackJsonp=window.webpackJsonp||[]).push([[596],{2906:function(t,e,i){"use strict";i.r(e);var a=i(19),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"귀환-모드"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#귀환-모드"}},[t._v("#")]),t._v(" 귀환 모드")]),t._v(" "),a("img",{attrs:{src:i(328),title:"위치 고정 요구(예, GPS)",width:"30px"}}),t._v(" "),a("p",[t._v("The "),a("em",[t._v("Return")]),t._v(" flight mode is used to "),a("em",[t._v("fly a vehicle to safety")]),t._v(" on an unobstructed path to a safe destination, where it should land.")]),t._v(" "),a("p",[t._v('PX4는 홈 위치, 집결 ( "안전") 지점, 임무 경로 및 임무 착륙 시퀀스 사용을 포함하여 안전한 복귀 경로, 목적지 착륙을 위한 다양한 메커니즘을 제공합니다.')]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/ko/flight_modes_mc/return.html"}},[t._v("Multicopter")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/flight_modes_fw/return.html"}},[t._v("Fixed-wing (Plane)")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/flight_modes_vtol/return.html"}},[t._v("수직이착륙기")])],1)]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("ul",[a("li",[t._v("Mode is automatic - no user intervention is "),a("em",[t._v("required")]),t._v(" to control the vehicle.")]),t._v(" "),a("li",[t._v("Mode requires a global 3d position estimate (from GPS or inferred from a "),a("RouterLink",{attrs:{to:"/ko/ros/external_position_estimation.html#enabling-auto-modes-with-a-local-position"}},[t._v("local position")]),t._v(").\n"),a("ul",[a("li",[t._v("Flying vehicles can't switch to this mode without global position.")]),t._v(" "),a("li",[t._v("Flying vehicles will failsafe if they lose the position estimate.")])])],1),t._v(" "),a("li",[t._v("Mode requires home position is set.")]),t._v(" "),a("li",[t._v("Mode prevents arming (vehicle must be armed when switching to this mode).")]),t._v(" "),a("li",[t._v("RC 제어 스위치는 기체의 비행 모드를 변경할 수 있습니다.")]),t._v(" "),a("li",[t._v("RC stick movement in a multicopter (or VTOL in multicopter mode) will "),a("a",{attrs:{href:"#COM_RC_OVERRIDE"}},[t._v("by default")]),t._v(" change the vehicle to "),a("RouterLink",{attrs:{to:"/ko/flight_modes_mc/position.html"}},[t._v("Position mode")]),t._v(" unless handling a critical battery failsafe.")],1),t._v(" "),a("li",[t._v('A VTOL will return as MC or FW based on its mode at the point the return mode was triggered. In MC mode it will respect multicopter parameters, such as the landing "cone". In FW mode it will respect fixed-wing parameters (ignore the cone), but unless using a mission landing, will transition to MC mode and land at the destination after loitering at the descent altitude.')])])]),t._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),a("p",[t._v('PX4 provides several mechanisms for choosing a safe return path, destination and landing, including using home location, rally ("safe") points, mission paths, and landing sequences defined in a mission.')]),t._v(" "),a("p",[t._v("All vehicles "),a("em",[t._v("nominally")]),t._v(" support all of these mechanisms, but not all of them make as much sense for particular vehicles. For example, a multicopter can land virtually anywhere, so it doesn't make sense for it to use a landing sequence except in rare cases. Similarly, a fixed-wing vehicle needs to fly a safe landing path: it can use the home location as a return point, but it won't try and land on it by default.")]),t._v(" "),a("p",[t._v("This topic covers all the possible return types that any vehicle "),a("em",[t._v("might")]),t._v(" be configured to use — the vehicle-specific return mode topics cover the default/recommended return type and configuration for each vehicle.")]),t._v(" "),a("p",[t._v("The following sections explain how to configure the "),a("a",{attrs:{href:"#return_types"}},[t._v("return type")]),t._v(", "),a("a",{attrs:{href:"#minimum-return-altitude"}},[t._v("minimum return altitude")]),t._v(" and "),a("a",{attrs:{href:"#loiter-landing-at-destination"}},[t._v("landing/arrival behaviour")]),t._v(".")]),t._v(" "),a("p",[a("a",{attrs:{id:"return_types"}})]),t._v(" "),a("h2",{attrs:{id:"복귀-유형-rtl-type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#복귀-유형-rtl-type"}},[t._v("#")]),t._v(" 복귀 유형(RTL_TYPE)")]),t._v(" "),a("p",[t._v("PX4 provides four alternative approaches for finding an unobstructed path to a safe destination and/or landing, which are set using the "),a("a",{attrs:{href:"#RTL_TYPE"}},[t._v("RTL_TYPE")]),t._v(" parameter.")]),t._v(" "),a("p",[t._v("At high level these are:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#home_return"}},[t._v("홈/랠리 포인트 복귀")]),t._v(" ("),a("code",[t._v("RTL_TYPE = 0")]),t._v(") : 안전한 고도로 상승하여 가장 가까운 랠리 포인트 또는 홈 위치로 직접 경로를 통하여 복귀합니다.")]),t._v(" "),a("li",[a("a",{attrs:{href:"#mission-landing-rally-point-return-type-rtl-type-1"}},[t._v("Mission landing/rally point return")]),t._v(" ("),a("code",[t._v("RTL_TYPE=1")]),t._v("): Ascend to a safe altitude, fly direct to the closest destination "),a("em",[t._v("other than home")]),t._v(": rally point or start of mission landing. 임무 착륙 또는 집결 지점이 정의되지 않은 경우에는 직접 경로를 통해 홈으로 복귀합니다.")]),t._v(" "),a("li",[a("a",{attrs:{href:"#mission-path-return-type-rtl-type-2"}},[t._v("Mission path return")]),t._v(" ("),a("code",[t._v("RTL_TYPE=2")]),t._v("): Use mission path and fast-continue to mission landing (if defined). If no mission "),a("em",[t._v("landing")]),t._v(" defined, fast-reverse mission to home. If no "),a("em",[t._v("mission")]),t._v(" defined, return direct to home (rally points are ignored).")]),t._v(" "),a("li",[a("a",{attrs:{href:"#closest-safe-destination-return-type-rtl-type-3"}},[t._v("Closest safe destination return")]),t._v(" ("),a("code",[t._v("RTL_TYPE=3")]),t._v("): Ascend to a safe altitude and return via direct path to closest destination: home, start of mission landing pattern, or rally point. 목적지가 임무 착륙 패턴인 경우 패턴을 따라 착륙합니다.")])]),t._v(" "),a("p",[t._v("각 유형에 대한 자세한 설명은 다음 섹션에서 제공됩니다.")]),t._v(" "),a("p",[a("a",{attrs:{id:"home_return"}})]),t._v(" "),a("h3",{attrs:{id:"홈-랠리-포인트-복귀-유형-rtl-type-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#홈-랠리-포인트-복귀-유형-rtl-type-0"}},[t._v("#")]),t._v(" 홈/랠리 포인트 복귀 유형 (RTL_TYPE = 0)")]),t._v(" "),a("p",[t._v("This is the default return type for a "),a("RouterLink",{attrs:{to:"/ko/flight_modes_mc/return.html"}},[t._v("multicopter")]),t._v(" (see topic for more information).")],1),t._v(" "),a("p",[t._v("이 복귀 유형에서 기체의 동작:")]),t._v(" "),a("ul",[a("li",[t._v("안전한 "),a("a",{attrs:{href:"#return_altitude"}},[t._v("복귀 고도")]),t._v(" (예상 장애물 위)로 상승합니다.")]),t._v(" "),a("li",[t._v("홈 포지션 또는 랠리 포인트 (둘 중 가장 가까운 지점) 로의 직접 경로로 비행합니다.")]),t._v(" "),a("li",[t._v("On "),a("a",{attrs:{href:"#loiter-landing-at-destination"}},[t._v("arrival")]),t._v(' descends to "descent altitude" and waits for a configurable time. This time may be used to deploy landing gear.')]),t._v(" "),a("li",[t._v("Lands or waits (this depends on landing parameters), By default an MC or VTOL in MC mode will land and a fixed-wing vehicle circles at the descent altitude. A VTOL in FW mode aligns its heading to the destination point, transitions to MC mode, and then lands.")])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("If no rally points are defined, this is the same as a "),a("em",[t._v("Return to Launch")]),t._v(" (RTL)/"),a("em",[t._v("Return to Home")]),t._v(" (RTH).")])]),t._v(" "),a("h3",{attrs:{id:"임무-착륙-랠리-포인트-복귀-유형-rtl-type-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#임무-착륙-랠리-포인트-복귀-유형-rtl-type-1"}},[t._v("#")]),t._v(" 임무 착륙/랠리 포인트 복귀 유형 (RTL_TYPE = 1)")]),t._v(" "),a("p",[t._v("This is the default return type for a "),a("RouterLink",{attrs:{to:"/ko/flight_modes_fw/return.html"}},[t._v("fixed-wing")]),t._v(" or "),a("RouterLink",{attrs:{to:"/ko/flight_modes_vtol/return.html"}},[t._v("VTOL")]),t._v(" vehicle (see topics for more information).")],1),t._v(" "),a("p",[t._v("이 복귀 유형에서 기체의 동작:")]),t._v(" "),a("ul",[a("li",[t._v("Ascends to a safe "),a("a",{attrs:{href:"#minimum-return-altitude"}},[t._v("minimum return altitude")]),t._v(" (above any expected obstacles) if needed. The vehicle maintains its initial altitude if that is higher than the minimum return altitude.")]),t._v(" "),a("li",[t._v("Flies via direct constant-altitude path to a rally point or the start of a "),a("a",{attrs:{href:"#mission-landing-pattern"}},[t._v("mission landing pattern")]),t._v(" (whichever is closest). 임무 착륙 또는 집결 지점이 정의되지 않은 경우에는 기체는 직접 경로를 통하여 홈으로 복귀합니다.")]),t._v(" "),a("li",[t._v("목적지가 임무 착륙 패턴인 경우 패턴을 따라 착륙합니다.")]),t._v(" "),a("li",[t._v("If the destination is a rally point or home it will "),a("a",{attrs:{href:"#loiter-landing-at-destination"}},[t._v("land or wait")]),t._v(" at descent altitude (depending on landing parameters). By default an MC or VTOL in MC mode will land, and a fixed-wing vehicle circles at the descent altitude. A VTOL in FW mode aligns its heading to the destination point, transitions to MC mode, and then lands.")])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("Fixed wing vehicles commonly also set "),a("a",{attrs:{href:"#MIS_TKO_LAND_REQ"}},[t._v("MIS_TKO_LAND_REQ")]),t._v(" to "),a("em",[t._v("require")]),t._v(" a mission landing pattern.")])]),t._v(" "),a("h3",{attrs:{id:"임무-경로-복귀-유형-rtl-type-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#임무-경로-복귀-유형-rtl-type-2"}},[t._v("#")]),t._v(" 임무 경로 복귀 유형 (RTL_TYPE = 2)")]),t._v(" "),a("p",[t._v("This return type uses the mission (if defined) to provide a safe return "),a("em",[t._v("path")]),t._v(", and the "),a("a",{attrs:{href:"#mission-landing-pattern"}},[t._v("mission landing pattern")]),t._v(" (if defined) to provide landing behaviour. If there is a mission but no mission landing pattern, the mission is flown "),a("em",[t._v("in reverse")]),t._v(". 랠리 포인트는 무시됩니다.")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("비행 모드와 임무 및 임무 착륙이 정의 여부에 따라 동작이 매우 복잡해집니다.")])]),t._v(" "),a("p",[t._v("Mission "),a("em",[t._v("with")]),t._v(" landing pattern:")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("임무 모드 :")]),t._v(' 임무는 "빨리 감기 모드"(점프, 지연 및 기타 비위치 명령 무시, 선회 및 기타 위치 웨이포인트가 간단한 웨이포인트로 변환 됨)에서 수행한 다음 착륙합니다.')]),t._v(" "),a("li",[a("strong",[t._v("임무 모드 이외의 자동 모드 :")]),t._v(" "),a("ul",[a("li",[t._v("Ascend to a safe "),a("a",{attrs:{href:"#minimum-return-altitude"}},[t._v("minimum return altitude")]),t._v(" above any expected obstacles.")]),t._v(" "),a("li",[t._v("가장 가까운 웨이포인트 (착륙 WP가 아닌 FW의 경우)로 직접 비행하고 웨이포인트 고도로 하강합니다.")]),t._v(" "),a("li",[t._v("그 웨이포인트에서 빨리 감기 모드로 임무를 계속 수행합니다.")])])]),t._v(" "),a("li",[a("strong",[t._v("수동 모드:")]),t._v(" "),a("ul",[a("li",[t._v("Ascend to a safe "),a("a",{attrs:{href:"#minimum-return-altitude"}},[t._v("minimum return altitude")]),t._v(" above any expected obstacles.")]),t._v(" "),a("li",[t._v("착륙 순서 위치로 직접 비행하고 웨이포인트 고도로 하강합니다.")]),t._v(" "),a("li",[t._v("임무 착륙 패턴을 사용하는 착륙")])])])]),t._v(" "),a("p",[t._v("Mission "),a("em",[t._v("without")]),t._v(" landing pattern defined:")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("임무 모드:")]),t._v(" "),a("ul",[a("li",[t._v('이전 웨이포인트에서 시작하여 "빨리 후진"(역방향) 비행한 미션\n'),a("ul",[a("li",[t._v("점프, 지연 및 기타 위치가 아닌 명령은 무시되며, 선회 및 기타 위치 웨이포인트는 단순 웨이포인트로 변환됩니다.")]),t._v(" "),a("li",[t._v("VTOL은 임무를 역으로 비행하기 전에 필요한 경우에는 고정익 모드로 전환합니다.")])])]),t._v(" "),a("li",[t._v("On reaching waypoint 1, the vehicle ascends to the "),a("a",{attrs:{href:"#minimum-return-altitude"}},[t._v("minimum return altitude")]),t._v(" and flies to the home position (where it "),a("a",{attrs:{href:"#loiter-landing-at-destination"}},[t._v("lands or waits")]),t._v(").")])])]),t._v(" "),a("li",[a("strong",[t._v("임무 모드 이외의 자동 모드 :")]),t._v(" "),a("ul",[a("li",[t._v("가장 가까운 웨이포인트 (착륙 WP가 아닌 FW의 경우)로 직접 비행하고 웨이포인트 고도로 하강합니다.")]),t._v(" "),a("li",[t._v("미션 모드 (위)에서 복귀 모드가 시작된 것처럼 임무를 반대로 계속 수행합니다.")])])]),t._v(" "),a("li",[a("strong",[t._v("수동 모드:")]),t._v(" 홈으로 직접 비행하여 착륙합니다.")])]),t._v(" "),a("p",[t._v("미션이 정의되지 않은 경우 PX4는 홈 위치에 착륙합니다(랠리 포인트는 무시됨).")]),t._v(" "),a("p",[t._v("복귀 모드에서 임무가 변경되면 위와 동일한 규칙에 따라 새 임무에 따라 행동이 재평가됩니다 (예 : 새 임무에 착륙 순서가없고 임무를 수행중인 경우 임무가 반전 됨).")]),t._v(" "),a("h3",{attrs:{id:"가장-가까운-안전한-대상-복귀-유형-rtl-type-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#가장-가까운-안전한-대상-복귀-유형-rtl-type-3"}},[t._v("#")]),t._v(" 가장 가까운 안전한 대상 복귀 유형 (RTL_TYPE = 3)")]),t._v(" "),a("p",[t._v("이 복귀 유형에서 기체의 동작:")]),t._v(" "),a("ul",[a("li",[t._v("Ascends to a safe "),a("a",{attrs:{href:"#minimum-return-altitude"}},[t._v("minimum return altitude")]),t._v(" (above any expected obstacles).")]),t._v(" "),a("li",[t._v("홈 위치, 미션 착륙 패턴 또는 집결 지점의 가장 가까운 목적지로 직접 이동합니다.")]),t._v(" "),a("li",[t._v("If the destination is a "),a("a",{attrs:{href:"#mission-landing-pattern"}},[t._v("mission landing pattern")]),t._v(" the vehicle will follow the pattern to land.")]),t._v(" "),a("li",[t._v("If the destination is a home location or rally point, the vehicle will descend to the descent altitude ("),a("a",{attrs:{href:"#RTL_DESCEND_ALT"}},[t._v("RTL_DESCEND_ALT")]),t._v(") and then "),a("a",{attrs:{href:"#loiter-landing-at-destination"}},[t._v("lands or waits")]),t._v(". By default an MC or VTOL in MC mode will land, and a fixed-wing vehicle circles at the descent altitude. A VTOL in FW mode aligns its heading to the destination point, transitions to MC mode, and then lands.")])]),t._v(" "),a("h2",{attrs:{id:"목적지에-호버링-착륙"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#목적지에-호버링-착륙"}},[t._v("#")]),t._v(" 목적지에 호버링/착륙")]),t._v(" "),a("p",[t._v("For most "),a("a",{attrs:{href:"#return_types"}},[t._v("return types")]),t._v(" a vehicle will ascend to a "),a("em",[t._v("minimum safe altitude")]),t._v(" before returning (unless already above that altitude), in order to avoid any obstacles between it and the destination.")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("The exception is when executing a "),a("a",{attrs:{href:"#mission-path-return-type-rtl-type-2"}},[t._v("mission path return")]),t._v(" from "),a("em",[t._v("within a mission")]),t._v(". In this case the vehicle follows mission waypoints, which we assume are planned to avoid any obstacles.")])]),t._v(" "),a("p",[t._v("The return altitude for a fixed-wing vehicle or a VTOL in fixed-wing mode is configured using the parameter "),a("a",{attrs:{href:"#RTL_RETURN_ALT"}},[t._v("RTL_RETURN_ALT")]),t._v(" (does not use the code described in the next paragraph).")]),t._v(" "),a("p",[t._v("The return altitude for a multicopter or a VTOL vehicles in MC mode is configured using the parameters "),a("a",{attrs:{href:"#RTL_RETURN_ALT"}},[t._v("RTL_RETURN_ALT")]),t._v(" and "),a("a",{attrs:{href:"#RTL_CONE_ANG"}},[t._v("RTL_CONE_ANG")]),t._v(", which define a half cone centered around the destination (home location or safety point).")]),t._v(" "),a("p",[a("img",{attrs:{src:i(392),alt:"복귀 모드 원뿔"}})]),t._v(" "),a("p",[t._v("기체가 다음과 같은 경우 :")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#RTL_RETURN_ALT"}},[t._v("RTL_RETURN_ALT")]),t._v(" (1) 이상에서는 현재 고도로 돌아옵니다.")]),t._v(" "),a("li",[t._v("원뿔 아래에서 원뿔 (2) 또는 "),a("a",{attrs:{href:"#RTL_DESCEND_ALT"}},[t._v("RTL_DESCEND_ALT")]),t._v(" (둘 중 더 높은 쪽)와 교차하는 위치를 반환합니다.")]),t._v(" "),a("li",[t._v("원뿔 (3)은 "),a("a",{attrs:{href:"#RTL_RETURN_ALT"}},[t._v("RTL_RETURN_ALT")]),t._v("에 까지 먼저 상승합니다.")]),t._v(" "),a("li",[t._v("원뿔 내에서\n"),a("ul",[a("li",[a("a",{attrs:{href:"#RTL_DESCEND_ALT"}},[t._v("RTL_DESCEND_ALT")]),t._v(" (4) 이상에서는 현재 고도로 복귀합니다.")]),t._v(" "),a("li",[a("a",{attrs:{href:"#RTL_DESCEND_ALT"}},[t._v("RTL_DESCEND_ALT")]),t._v(" (5) 아래에서는 먼저 "),a("code",[t._v("RTL_DESCEND_ALT")]),t._v("로 상승합니다.")])])])]),t._v(" "),a("p",[t._v("참고:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#RTL_CONE_ANG"}},[t._v("RTL_CONE_ANG")]),t._v('이 0도이면 "원뿔"이 없습니다.\n'),a("ul",[a("li",[t._v("기체는 "),a("code",[t._v("RTL_RETURN_ALT")]),t._v(" (또는 그 이상)으로 복귀합니다.")])])]),t._v(" "),a("li",[a("a",{attrs:{href:"#RTL_CONE_ANG"}},[t._v("RTL_CONE_ANG")]),t._v("이 90도이면 기체는 "),a("code",[t._v("RTL_DESCEND_ALT")]),t._v("와 현재 고도 중 높은 고도로 복귀합니다.")]),t._v(" "),a("li",[t._v("기체는 복귀를 위해 항상 최소 "),a("a",{attrs:{href:"#RTL_DESCEND_ALT"}},[t._v("RTL_DESCEND_ALT")]),t._v("으로 상승합니다.")])]),t._v(" "),a("h2",{attrs:{id:"기체-기본-동작"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#기체-기본-동작"}},[t._v("#")]),t._v(" 기체 기본 동작")]),t._v(" "),a("p",[t._v("Unless executing a "),a("a",{attrs:{href:"#mission-landing-pattern"}},[t._v("mission landing pattern")]),t._v(" as part of the return mode, the vehicle will arrive at its destination, and rapidly descend to the "),a("a",{attrs:{href:"#RTL_DESCEND_ALT"}},[t._v("RTL_DESCEND_ALT")]),t._v(" altitude, where it will loiter for "),a("a",{attrs:{href:"#RTL_LAND_DELAY"}},[t._v("RTL_LAND_DELAY")]),t._v(" before landing. If "),a("code",[t._v("RTL_LAND_DELAY=-1")]),t._v(" it will loiter indefinitely.")]),t._v(" "),a("p",[t._v("The default landing configuration is vehicle dependent:")]),t._v(" "),a("ul",[a("li",[t._v("임무 착륙이 정의된 경우 임무 착륙 시작 지점으로 직접 비행후 착륙합니다.")]),t._v(" "),a("li",[t._v("Fixed-wing vehicles use a return mode with a "),a("a",{attrs:{href:"#mission-landing-pattern"}},[t._v("mission landing pattern")]),t._v(", as this enables automated landing. If not using a mission landing, the default configuration is to loiter indefinitely, so the user can take over and manually land.")]),t._v(" "),a("li",[t._v("VTOLs in MC mode fly and land exactly as a multicopter.")]),t._v(" "),a("li",[t._v("VTOLS in FW mode head towards the landing point, transition to MC mode, and then land on the destination.")])]),t._v(" "),a("h2",{attrs:{id:"mission-landing-pattern"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mission-landing-pattern"}},[t._v("#")]),t._v(" Mission Landing Pattern")]),t._v(" "),a("p",[t._v("A mission landing pattern is a landing pattern defined as part of a mission plan. This consists of a "),a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_DO_LAND_START",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAV_CMD_DO_LAND_START"),a("OutboundLink")],1),t._v(", one or more position waypoints, and a "),a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_NAV_LAND",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAV_CMD_NAV_LAND"),a("OutboundLink")],1),t._v(" (or "),a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_NAV_VTOL_LAND",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAV_CMD_NAV_VTOL_LAND"),a("OutboundLink")],1),t._v(" for a VTOL Vehicle).")]),t._v(" "),a("p",[t._v("Landing patterns defined in missions are the safest way to automatically land a "),a("em",[t._v("fixed-wing")]),t._v(" vehicle on PX4. For this reason fixed-wing vehicles are configured to use "),a("a",{attrs:{href:"#mission-landing-rally-point-return-type-rtl-type-1"}},[t._v("Mission landing/really point return")]),t._v(" by default.")]),t._v(" "),a("h2",{attrs:{id:"매개변수"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#매개변수"}},[t._v("#")]),t._v(" 매개변수")]),t._v(" "),a("p",[t._v("RTL 매개 변수는 "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#return-mode"}},[t._v("매개변수 정의 > 복귀 모드")]),t._v("에 기술되어 있습니다 (아래에 요약되어 있음).")],1),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("매개변수")]),t._v(" "),a("th",[t._v("설명")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("a",{attrs:{id:"RTL_TYPE"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RTL_TYPE"}},[t._v("RTL_TYPE")])],1),t._v(" "),a("td",[t._v("복귀 메커니즘 (경로 및 목적지). "),a("br"),t._v(" "),a("code",[t._v("0")]),t._v(" : 직접 경로를 통해 집회 지점 또는 홈(둘 중 가장 가까운 곳)으로 복귀합니다. "),a("br"),t._v(" "),a("code",[t._v("1")]),t._v(" : 복귀 직접 경로를 통해 집결지 또는 임무 착륙 패턴 시작 지점 (둘 중 가장 가까운 지점) 임무 착륙 또는 집결 지점이 모두 정의되지 않은 경우에는 직접 경로를 통해 홈으로 복귀합니다. 목적지가 임무 착륙 패턴인 경우 착륙 패턴을 따릅니다. "),a("br"),a("code",[t._v("2")]),t._v(" : 착륙 패턴이 정의 된 경우 착륙까지 빨리 감기 경로를 사용하고 그렇지 않으면 홈으로 빠르게 되감기합니다. 랠리포인트를 무시합니다. 임무 계획이 정의되지 않은 경우 홈으로 직접 비행합니다. "),a("br"),a("code",[t._v("3")]),t._v(" : 가장 가까운 목적지 (집, 임무 시작 착륙 패턴 또는 안전 지점)까지 직접 경로를 통해 복귀합니다. 목적지가 임무 착륙 패턴인 경우 패턴을 따라 착륙합니다.")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"RTL_RETURN_ALT"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RTL_RETURN_ALT"}},[t._v("RTL_RETURN_ALT")])],1),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RTL_CONE_ANG"}},[t._v("RTL_CONE_ANG")]),t._v("이 0 인 경우 고도를 미터 단위 (기본값 : 60m)로 반환합니다. 이미 이 값을 초과하면 기체는 현재 고도로 복귀합니다.")],1)]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"RTL_DESCEND_ALT"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RTL_DESCEND_ALT"}},[t._v("RTL_DESCEND_ALT")])],1),t._v(" "),a("td",[t._v("기체가 더 높은 복귀 고도에서 감속하거나 초기 하강을 중지할 최소 복귀 고도 및 고도 (기본값 : 30m)")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"RTL_LAND_DELAY"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RTL_LAND_DELAY"}},[t._v("RTL_LAND_DELAY")])],1),t._v(" "),a("td",[t._v("착륙 전 "),a("code",[t._v("RTL_DESCEND_ALT")]),t._v("에서 호버링하는 시간(기본값 : 0.5 초) - 기본적으로 이 시간은 짧아서 기체는 감속후 즉시 착륙합니다. -1로 설정하면 착륙하지 않고 "),a("code",[t._v("RTL_DESCEND_ALT")]),t._v("에서 배회합니다. 이 지연은 랜딩 기어가 배치될 시간을 설정합니다. (자동으로 동작함).")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"RTL_MIN_DIST"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RTL_MIN_DIST"}},[t._v("RTL_MIN_DIST")])],1),t._v(" "),a("td",[t._v('홈 위치에서 "원뿔"에 지정된 복귀 고도까지 상승을 시작하는 최소 수평 거리. 차량이 홈까지의이 거리보다 수평으로 가까우면 먼저 RTL_RETURN_ALT로 상승하지 않고 현재 고도 또는 '),a("code",[t._v("RTL_DESCEND_ALT")]),t._v(" (둘 중 더 높은 쪽)고도로 복귀합니다.")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"RTL_CONE_ANG"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RTL_CONE_ANG"}},[t._v("RTL_CONE_ANG")])],1),t._v(" "),a("td",[t._v('기체 RTL 리턴 고도를 정의하는 원뿔의 반각. 값 (도) : 0, 25, 45, 65, 80, 90. 0은 "원뿔 없음" (항상 '),a("code",[t._v("RTL_RETURN_ALT")]),t._v(" 이상에서 반환)이고, 90은 차량이 현재 고도 또는 "),a("code",[t._v("RTL_DESCEND_ALT")]),t._v(" (둘 중 더 높은 고도)에서 복귀함을 나타냅니다.")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"COM_RC_OVERRIDE"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_RC_OVERRIDE"}},[t._v("COM_RC_OVERRIDE")])],1),t._v(" "),a("td",[t._v("Controls whether stick movement on a multicopter (or VTOL in MC mode) causes a mode change to "),a("RouterLink",{attrs:{to:"/ko/flight_modes_mc/position.html"}},[t._v("Position mode")]),t._v(" (except when vehicle is handling a critical battery failsafe). 자동 모드와 오프보드 모드에 대해 별도로 활성화할 수 있으며, 기본적으로 자동 모드에서 활성화됩니다.")],1)]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"COM_RC_STICK_OV"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_RC_STICK_OV"}},[t._v("COM_RC_STICK_OV")])],1),t._v(" "),a("td",[t._v("The amount of stick movement that causes a transition to "),a("RouterLink",{attrs:{to:"/ko/flight_modes_mc/position.html"}},[t._v("Position mode")]),t._v(" (if "),a("a",{attrs:{href:"#COM_RC_OVERRIDE"}},[t._v("COM_RC_OVERRIDE")]),t._v(" is enabled).")],1)]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"RTL_LOITER_RAD"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#NAV_LOITER_RAD"}},[t._v("NAV_LOITER_RAD")])],1),t._v(" "),a("td",[t._v("[Fixed-wing Only] The radius of the loiter circle (at "),a("a",{attrs:{href:"#RTL_LAND_DELAY"}},[t._v("RTL_LAND_DELAY")]),t._v(").")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"MIS_TKO_LAND_REQ"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MIS_TKO_LAND_REQ"}},[t._v("MIS_TKO_LAND_REQ")])],1),t._v(" "),a("td",[t._v("Specify whether a mission landing or takeoff pattern is "),a("em",[t._v("required")]),t._v(". Generally fixed-wing vehicles set this to require a landing pattern but VTOL do not.")])])])])])}),[],!1,null,null,null);e.default=n.exports},328:function(t,e,i){t.exports=i.p+"assets/img/position_fixed.38e4a675.svg"},392:function(t,e,i){t.exports=i.p+"assets/img/rtl_cone.173b5643.jpg"}}]);