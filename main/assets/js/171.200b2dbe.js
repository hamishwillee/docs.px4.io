(window.webpackJsonp=window.webpackJsonp||[]).push([[171],{1710:function(t,_,i){},1756:function(t,_,i){"use strict";i(1710)},2774:function(t,_,i){"use strict";i.r(_);i(1756);var v=i(19),a=Object(v.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"비행-모드"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#비행-모드"}},[t._v("#")]),t._v(" 비행 모드")]),t._v(" "),v("p",[v("em",[t._v("Flight Modes")]),t._v(" define how the autopilot responds to user input and controls vehicle movement. The tables below summarizes flight modes for fixed-wing and copter ("),v("a",{attrs:{href:"#key"}},[t._v("table key is below")]),t._v('). 이것은 "고급 수준"의 기본 동작이며 기체 매개변수에 따라 달라질 수 있습니다. 링크된 주제 (사이드 바)는 튜닝 매개 변수를 포함하여 개별 모드에 대한 자세한 정보를 제공합니다.')]),t._v(" "),v("p",[v("strong",[t._v("Tip")]),t._v(" A "),v("em",[t._v("beginner friendly")]),t._v(" explanation of all flight modes is provided in "),v("RouterLink",{attrs:{to:"/ko/getting_started/flight_modes.html"}},[t._v("Getting Started > Flight Modes")]),t._v(". :::")],1),t._v(" "),v("h2",{attrs:{id:"fixed-wing"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#fixed-wing"}},[t._v("#")]),t._v(" Fixed-wing")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticClass:"col_modes"},[t._v("모드")]),t._v(" "),v("th",{staticClass:"col_r_p"},[t._v("좌우 및 상하 기울기")]),t._v(" "),v("th",{staticClass:"col_yaw"},[t._v("좌우")]),t._v(" "),v("th",{staticClass:"col_throttle"},[t._v("추진력")]),t._v(" "),v("th",{staticClass:"col_sensor"},[t._v("위치 센서")]),t._v(" "),v("th",{staticClass:"col_summary"},[t._v("요약")])])]),t._v(" "),v("tbody",[v("tr",{attrs:{id:"position_fw"}},[v("td",[v("a",{attrs:{href:"../flight_modes_mc/position.html"}},[t._v("Position")]),t._v(" "),v("p",[v("a",{attrs:{href:"#key_difficulty"}},[v("img",{attrs:{src:i(331),title:"초급 난이도 비행",width:"20px"}})])])]),t._v(" "),v("td",[t._v("S"),v("sup",[t._v("+")])]),t._v(" "),v("td",[t._v("S"),v("sup",[t._v("+")])]),t._v(" "),v("td",[t._v("S"),v("sup",[t._v("+")])]),t._v(" "),v("td",[v("a",{attrs:{href:"#key_position_fixed"}},[v("img",{attrs:{src:i(327),title:"위치 고정 요구(예, GPS)",width:"20px"}})])]),t._v(" "),v("td",[v("p",[t._v("중앙 스틱이 차량을 직선 및 수평 비행 상태로 전환하는 RC 모드로, 차량 자세 / 태도, 고도 및 직선 차량 경로가 바람 (및 기타 힘)에 대해 유지됩니다.\n   "),v("ul",[v("li",[t._v("중앙 RC RPY 스틱 – 바람에 대항하여 현재 방향으로 직선 지상 트랙을 따라가는 수평 비행.")]),t._v(" "),v("li",[t._v("센터  외부:\n      "),v("ul",[v("li",[t._v("피치 스틱은 고도를 제어합니다 ("),v("a",{attrs:{href:"#altitude_fw"}},[t._v("고도 ")]),t._v("와 동일).")]),t._v(" "),v("li",[t._v("롤 스틱은 롤 각도를 제어합니다. Autopilot은 "),v("a",{attrs:{href:"https://en.wikipedia.org/wiki/Coordinated_flight"}},[t._v("조정 비행")]),t._v("을 유지합니다 ("),v("a",{attrs:{href:"#stabilized_fw"}},[t._v("안정화")]),t._v("와 동일함).")]),t._v(" "),v("li",[t._v("스로틀은 대기 속도를 설정합니다 ("),v("a",{attrs:{href:"#altitude_fw"}},[t._v("고도")]),t._v("와 동일).")]),t._v(" "),v("li",[t._v("Roll and pitch are angle-controlled (so it is impossible to roll over or loop the vehicle).")]),t._v(" "),v("li",[t._v("Yaw stick adds an additional yaw rate setpoint (signal will be added to the one calculated by the autopilot to maintain "),v("a",{attrs:{href:"https://en.wikipedia.org/wiki/Coordinated_flight"}},[t._v("coordinated flight")]),t._v("). "),v("a",{attrs:{href:"#stabilized_fw"}},[t._v("안정화")]),t._v("와 동일합니다.")])])])])])])]),t._v(" "),v("tr",{attrs:{id:"altitude_fw"}},[v("td",[v("a",{attrs:{href:"../flight_modes_mc/altitude.html"}},[t._v("Altitude")]),t._v(" "),v("p",[v("a",{attrs:{href:"#key_difficulty"}},[v("img",{attrs:{src:i(331),title:"초급 난이도 비행",width:"20px"}})])])]),t._v(" "),v("td",[v("p",[t._v("S (roll)")]),v("p",[t._v("S (roll)")])]),t._v(" "),v("td",[t._v("M")]),t._v(" "),v("td",[t._v("S"),v("sup",[t._v("+")])]),t._v(" "),v("td",[v("a",{attrs:{href:"#altitude_only"}},[v("img",{attrs:{src:i(336),title:"필요한 고도 (예 : 기압계, 거리계)",width:"20px"}})])]),t._v(" "),v("td",[v("p",[t._v("RC 모드는 "),v("a",{attrs:{href:"#stabilized_fw"}},[t._v("안정화")]),t._v(" 모드와 같지만 "),v("em",[t._v("고도 안정화")]),t._v("를 사용합니다 (중앙 스틱은 차량을 직선 및 수평 비행 상태로 만들고 현재 고도를 유지합니다). 기체의 경로가 유지되지 않고 바람에 표류할 수 있습니다.\n  "),v("ul",[v("li",[t._v("중앙 RPY 스틱 (데드 밴드 내부) :\n      "),v("ul",[v("li",[t._v("자동 조종 장치는 날개도 수평을 유지하면서 고도를 유지합니다.")]),t._v(" "),v("li",[t._v("스로틀 스틱은 대기 속도 센서가 연결된 경우 기체의 대기 속도를 제어합니다 (대기 속도 센서가 없으면 사용자가 스로틀을 제어할 수 없음).")])])]),v("li",[t._v("센터  외부:\n      "),v("ul",[v("li",[t._v("피치 스틱은 고도를 제어합니다.")]),t._v(" "),v("li",[t._v("스로틀 스틱은 기체의 속도를 제어합니다 (중앙 RPY 스틱의 경우).")]),t._v(" "),v("li",[t._v("Yaw stick adds an additional yaw rate setpoint (signal will be added to the one calculated by the autopilot to maintain "),v("a",{attrs:{href:"https://en.wikipedia.org/wiki/Coordinated_flight"}},[t._v("coordinated flight")]),t._v("). "),v("a",{attrs:{href:"#stabilized_fw"}},[t._v("안정화")]),t._v("와 동일합니다.")])])])])])])]),t._v(" "),v("tr",{attrs:{id:"stabilized_fw"}},[v("td",[v("a",{attrs:{href:"../flight_modes_fw/stabilized.html"}},[t._v("Stabilized")]),t._v(" "),v("p",[v("a",{attrs:{href:"#key_difficulty"}},[v("img",{attrs:{src:i(337),title:"중급 난이도 비행",width:"20px"}})])])]),t._v(" "),v("td",[t._v("S")]),t._v(" "),v("td",[t._v("M")]),t._v(" "),v("td",[t._v("M")]),t._v(" "),v("td"),t._v(" "),v("td",[v("p",[t._v("중앙에있는 RP 스틱이 차량 자세 (롤 및 피치)를 평준화하는 RC 모드. 기체의 고도와 경로가가 유지되지 않고 바람에 표류할 수 있습니다.")]),t._v(" "),v("ul",[v("li",[t._v("피치 스틱은 피치 각도를 제어합니다.")]),t._v(" "),v("li",[t._v("롤 스틱은 롤 각도를 제어합니다. 자동 조종 장치는 "),v("a",{attrs:{href:"https://en.wikipedia.org/wiki/Coordinated_flight"}},[t._v("조정 비행")]),t._v("을 유지합니다.")]),t._v(" "),v("li",[t._v("스토틀 스틱으로 추진력을 제어합니다")]),t._v(" "),v("li",[t._v("Yaw stick adds an additional yaw rate setpoint (signal will be added to the one calculated by the autopilot to maintain "),v("a",{attrs:{href:"https://en.wikipedia.org/wiki/Coordinated_flight"}},[t._v("coordinated flight")]),t._v(").")])])])]),t._v(" "),v("tr",{attrs:{id:"acro_fw"}},[v("td",[v("a",{attrs:{href:"../flight_modes_mc/acro.html"}},[t._v("Acro")]),t._v(" "),v("p",[v("a",{attrs:{href:"#key_difficulty"}},[v("img",{attrs:{src:i(333),title:"고급 난이도 비행",width:"20px"}})])])]),t._v(" "),v("td",[t._v("S"),v("sub",[t._v("rate")])]),t._v(" "),v("td",[t._v("S"),v("sub",[t._v("rate")])]),t._v(" "),v("td",[t._v("M")]),t._v(" "),v("td"),t._v(" "),v("td",[v("p",[t._v("곡예 기동을 수행하는 RC 모드 (예 : 롤, 뒤집기, 포장 마차 및 곡예 인물)")]),t._v(" "),v("p",[t._v("RPY 스틱 입력은 자동 조종 장치에 의해 안정화되는 각속도 명령으로 변환됩니다. Throttle is passed directly to control allocation.")])])]),t._v(" "),v("tr",{attrs:{id:"manual_fw"}},[v("td",[v("a",{attrs:{href:"../flight_modes_fw/manual.html"}},[t._v("Manual")]),t._v(" "),v("p",[v("a",{attrs:{href:"#key_difficulty"}},[v("img",{attrs:{src:i(333),title:"고급 난이도 비행",width:"20px"}})])])]),t._v(" "),v("td",[t._v("M")]),t._v(" "),v("td",[t._v("M")]),t._v(" "),v("td",[t._v("M")]),t._v(" "),v("td"),t._v(" "),v("td",[v("p",[t._v('RC mode where stick input is sent directly to control allocation (for "fully" manual control).')]),t._v(" "),v("p",[t._v("FMU를 무시하는 유일한 모드입니다 (명령은 안전 코프로세서를 통해 전송 됨). FMU 펌웨어 오작동시 RC를 통해 스로틀, 엘리베이터, 에일러론 및 방향타를 완전히 제어 할 수있는 안전 메커니즘을 제공합니다.\n   ")])])]),t._v(" "),v("tr",{attrs:{id:"takeoff_fw"}},[v("td",[v("a",{attrs:{href:"../flight_modes_fw/takeoff.html"}},[t._v("이륙")])]),t._v(" "),v("td",{attrs:{colspan:"3"}},[t._v("자동")]),t._v(" "),v("td",[v("a",{attrs:{href:"#key_position_fixed"}},[v("img",{attrs:{src:i(327),title:"위치 고정 요구(예, GPS)",width:"20px"}})])]),t._v(" "),v("td",[t._v("기체는 "),v("em",[t._v("투석기/수동 발사 모드")]),t._v(" 또는 "),v("em",[t._v("활주로 이륙 모드")]),t._v(" (현재 방향)를 사용하여 이륙 시퀀스를 시작합니다.")])]),t._v(" "),v("tr",{attrs:{id:"land_fw"}},[v("td",[v("a",{attrs:{href:"../flight_modes_fw/land.html"}},[t._v("착륙")])]),t._v(" "),v("td",{staticClass:"centred",attrs:{colspan:"3"}},[t._v("자동")]),t._v(" "),v("td",[v("a",{attrs:{href:"#key_position_fixed"}},[v("img",{attrs:{src:i(327),title:"위치 고정 요구(예, GPS)",width:"20px"}})])]),t._v(" "),v("td",[t._v("Vehicle initiates the "),v("a",{attrs:{href:"../flight_modes/mission.html#fw-mission-landing"}},[t._v("fixed-wing landing")]),t._v(" sequence.")])]),t._v(" "),v("tr",{attrs:{id:"hold_fw"}},[v("td",[v("a",{attrs:{href:"../flight_modes_fw/hold.html"}},[t._v("대기")])]),t._v(" "),v("td",{attrs:{colspan:"3"}},[t._v("자동")]),t._v(" "),v("td",[v("a",{attrs:{href:"#key_position_fixed"}},[v("img",{attrs:{src:i(327),title:"위치 고정 요구(예, GPS)",width:"20px"}})])]),t._v(" "),v("td",[t._v("기체는 현재 고도에서 GPS 유지 위치를 중심으로 선회합니다.")])]),t._v(" "),v("tr",{attrs:{id:"return_fw"}},[v("td",[v("a",{attrs:{href:"../flight_modes/return.html"}},[t._v("복귀")])]),t._v(" "),v("td",{attrs:{colspan:"3"}},[t._v("자동")]),t._v(" "),v("td",[v("a",{attrs:{href:"#key_position_fixed"}},[v("img",{attrs:{src:i(327),title:"위치 고정 요구(예, GPS)",width:"20px"}})])]),t._v(" "),v("td",[t._v("기체는 안전 위치로 경로 비행합니다. 반환 동작은 매개 변수 설정에 따라 다르며 임무 경로나 임무 착륙 패턴 (정의 된 경우)을 따라서 동작합니다.")])]),t._v(" "),v("tr",{attrs:{id:"mission_fw"}},[v("td",[v("a",{attrs:{href:"../flight_modes/mission.html"}},[t._v("임무")])]),t._v(" "),v("td",{attrs:{colspan:"3"}},[t._v("자동")]),t._v(" "),v("td",[v("a",{attrs:{href:"#key_position_fixed"}},[v("img",{attrs:{src:i(327),title:"위치 고정 요구(예, GPS)",width:"20px"}})])]),t._v(" "),v("td",[t._v("차량은 사용자가 업로드한 "),v("a",{attrs:{href:"../flying/missions.html"}},[t._v("미리 정의된 임무/비행 계획")]),t._v("을 실행합니다. ")])]),t._v(" "),v("tr",{attrs:{id:"offboard_fw"}},[v("td",[v("a",{attrs:{href:"../flight_modes/offboard.html"}},[t._v("오프보드")])]),t._v(" "),v("td",{attrs:{colspan:"3"}},[t._v("자동")]),t._v(" "),v("td",[v("a",{attrs:{href:"#key_position_fixed"}},[v("img",{attrs:{src:i(327),title:"위치 고정 요구(예, GPS)",width:"20px"}})])]),t._v(" "),v("td",[t._v("차량은 MAVLink를 통해 제공되는 자세 설정치를 준수합니다 (종종 직렬 케이블 또는 Wi-Fi를 통해 연결된 컴패니언 컴퓨터에서).")])])])]),t._v(" "),v("h2",{attrs:{id:"멀티콥터"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#멀티콥터"}},[t._v("#")]),t._v(" 멀티콥터")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("모드")]),t._v(" "),v("th",[t._v("좌우 및 상하 기울기")]),t._v(" "),v("th",[t._v("좌우")]),t._v(" "),v("th",[t._v("추진력")]),t._v(" "),v("th",[t._v("위치 센서")]),t._v(" "),v("th",{staticClass:"col_summary"},[t._v("요약")])])]),t._v(" "),v("tbody",[v("tr",{attrs:{id:"position_mc"}},[v("td",[v("a",{attrs:{href:"../flight_modes_mc/position.html"}},[t._v("Position")]),t._v(" "),v("p",[v("a",{attrs:{href:"#key_difficulty"}},[v("img",{attrs:{src:i(331),title:"초급 난이도 비행",width:"20px"}})])])]),t._v(" "),v("td",[t._v("S"),v("sup",[t._v("+")])]),t._v(" "),v("td",[t._v("S"),v("sub",[t._v("rate")])]),t._v(" "),v("td",[t._v("S"),v("sup",[t._v("+")])]),t._v(" "),v("td",[v("a",{attrs:{href:"#key_position_fixed"}},[v("img",{attrs:{src:i(327),title:"위치 고정 요구(예, GPS)",width:"20px"}})])]),t._v(" "),v("td",[v("p",[t._v("롤, 피치, 스로틀 스틱이 해당 축/방향의 움직임을 제어하는 RC 모드. 중앙에 있는 스틱은 차량을 수평으로 유지하고 바람에 맞서 고정된 고도와 위치를 유지합니다.\n  "),v("ul",[v("li",[t._v("중앙에있는 RPT 스틱은 바람과 수평 자세에 대해 x, y, z 위치를 안정적으로 유지합니다.")]),t._v(" "),v("li",[t._v("센터  외부:\n      "),v("ul",[v("li",[t._v("롤/피치 스틱은 차량의 좌우 및 전후 방향(각각)으로 지면에서 수평 가속을 제어합니다.")]),t._v(" "),v("li",[t._v("스로틀 스틱은 상승 하강 속도를 제어합니다.")]),t._v(" "),v("li",[t._v("요 스틱은 수평면 위의  회전 각속도를 제어합니다.")])])]),t._v(" "),v("li",[t._v("이륙:\n      "),v("ul",[v("li",[t._v("착륙했을 때 스로틀 스틱을 62.5 % (하단에서 전체 범위) 이상으로 올리면 기체가 이륙합니다.")])])])])])])]),t._v(" "),v("tr",{attrs:{id:"altitude_mc"}},[v("td",[v("a",{attrs:{href:"../flight_modes_mc/altitude.html"}},[t._v("Altitude")]),t._v(" "),v("p",[v("a",{attrs:{href:"#key_difficulty"}},[v("img",{attrs:{src:i(331),title:"초급 난이도 비행",width:"20px"}})])])]),t._v(" "),v("td",[t._v("S")]),t._v(" "),v("td",[t._v("S"),v("sub",[t._v("rate")])]),t._v(" "),v("td",[t._v("S"),v("sup",[t._v("+")])]),t._v(" "),v("td",[v("a",{attrs:{href:"#altitude_only"}},[v("img",{attrs:{src:i(336),title:"필요한 고도 (예 : 기압계, 거리계)",width:"20px"}})])]),t._v(" "),v("td",[v("p",[t._v("RC 모드는 "),v("a",{attrs:{href:"#manual_stabilized_mc"}},[t._v("수동/안정화")]),t._v(" 모드와 같지만 "),v("em",[t._v("고도 안정화")]),t._v("가 있습니다 (가운데 스틱이 차량을 수평으로 유지하고 고정 고도를 유지). 차량의 수평 위치는 바람 (또는 기존 운동량)으로 인해 움직일 수 있습니다.\n  "),v("ul",[v("li",[t._v("중앙 스틱 (데드 밴드 내부) :\n      "),v("ul",[v("li",[t._v("RPY는 기체 수평을 유지합니다.")]),t._v(" "),v("li",[t._v("스로틀(~ 50 %)은 현재 고도를 바람에 대해 일정하게 유지합니다.")])])]),v("li",[t._v("센터  외부:\n      "),v("ul",[v("li",[t._v("롤/피치 스틱은 각각의 방향에서 틸트 각도를 제어하여 해당하는 좌우와 전후 방향으로 이동합니다.")]),t._v(" "),v("li",[t._v("스로틀 스틱은 미리 정해진 최대 속도 (및 다른 축의 이동 속도)로 속도를 올리거나 내립니다.")]),t._v(" "),v("li",[t._v("요 스틱은 수평면 위의  회전 각속도를 제어합니다.")])])]),t._v(" "),v("li",[t._v("이륙:\n      "),v("ul",[v("li",[t._v("착륙했을 때 스로틀 스틱을 62.5 % (하단에서 전체 범위) 이상으로 올리면 기체가 이륙합니다.")])])])])])])]),t._v(" "),v("tr",{attrs:{id:"manual_stabilized_mc"}},[v("td",[v("a",{attrs:{href:"../flight_modes_mc/manual_stabilized.html"}},[t._v("Manual/ Stabilized")]),t._v(" "),v("p",[v("a",{attrs:{href:"#key_difficulty"}},[v("img",{attrs:{src:i(337),title:"중급 난이도 비행",width:"20px"}})])])]),t._v(" "),v("td",[t._v("S")]),t._v(" "),v("td",[t._v("S"),v("sub",[t._v("rate")])]),t._v(" "),v("td",[t._v("M")]),t._v(" "),v("td"),t._v(" "),v("td",[v("p",[t._v("중앙 스틱이 기체의 수평으로 유지하는 RC 모드 (위치가 안정화 되지 않음).")]),t._v(" "),v("p",[v("ul",[v("li",[t._v("중앙 RP 스틱은 기체의 수평을 조절합니다.")]),t._v(" "),v("li",[t._v("센터  외부:\n      "),v("ul",[v("li",[t._v("롤/피치 스틱은 각각의 방향 각도를 제어하여 해당하는 좌우와 전후 방향으로 이동합니다. ")]),t._v(" "),v("li",[t._v("스로틀 스틱은 상하 속도 (및 다른 축의 이동 속도)를 제어합니다.")]),t._v(" "),v("li",[t._v("요 스틱은 수평면 위의  회전 각속도를 제어합니다.")])])])])])])]),t._v(" "),v("tr",{attrs:{id:"acro_mc"}},[v("td",[v("a",{attrs:{href:"../flight_modes_mc/acro.html"}},[t._v("Acro")]),t._v(" "),v("p",[v("a",{attrs:{href:"#key_difficulty"}},[v("img",{attrs:{src:i(333),title:"고급 난이도 비행",width:"20px"}})])])]),t._v(" "),v("td",[t._v("S"),v("sub",[t._v("rate")])]),t._v(" "),v("td",[t._v("S"),v("sub",[t._v("rate")])]),t._v(" "),v("td",[t._v("M")]),t._v(" "),v("td"),t._v(" "),v("td",[v("p",[t._v("곡예 기동을 수행하는 RC 모드 (예 : 뒤집기, 롤 및 루프).")]),t._v(" "),v("p",[t._v("RC RPY 스틱 입력은 각 축의 회전 각속도를 제어합니다. Throttle is passed directly to control allocation.  스틱이 중앙에 오면 차량은 회전을 멈추고, 현재 방향(예 : 반전될 수 있음)을 유지하고 현재 운동량에 따라 이동합니다.")])])]),t._v(" "),v("tr",{attrs:{id:"orbit_mc"}},[v("td",[v("a",{attrs:{href:"../flight_modes_mc/orbit.html"}},[t._v("Orbit")]),t._v(" "),v("p",[v("a",{attrs:{href:"#key_difficulty"}},[v("img",{attrs:{src:i(331),title:"초급 난이도 비행",width:"20px"}})])])]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td"),t._v(" "),v("td",[v("p",[t._v("원 운동 비행을 위해 GCS 시작 가이드 모드, 항상 중앙을 향합니다.")]),t._v(" "),v("p",[t._v("모드는 GCS에서 시작해야하며 중심점과 초기 반경 및 고도를 지정해야합니다. RC 제어는 선택 사항이며 궤도 고도, 반경, 속도 및 방향을 변경하는 데 사용할 수 있습니다. 고도 제어는 "),v("a",{attrs:{href:"#position_mc"}},[t._v("위치 모드")]),t._v("와 동일합니다.")])])]),t._v(" "),v("tr",{attrs:{id:"takeoff_mc"}},[v("td",[v("a",{attrs:{href:"../flight_modes_mc/takeoff.html"}},[t._v("이륙")])]),t._v(" "),v("td",{attrs:{colspan:"3"}},[t._v("자동")]),t._v(" "),v("td",[v("a",{attrs:{href:"#key_position_fixed"}},[v("img",{attrs:{src:i(327),title:"위치 고정 요구(예, GPS)",width:"20px"}})])]),t._v(" "),v("td",[t._v("기체는 이륙 고도까지 상승하고 위치를 유지합니다.")])]),t._v(" "),v("tr",{attrs:{id:"land_mc"}},[v("td",[v("a",{attrs:{href:"../flight_modes_mc/land.html"}},[t._v("착륙")])]),t._v(" "),v("td",{attrs:{colspan:"3"}},[t._v("자동")]),t._v(" "),v("td",[v("a",{attrs:{href:"#key_position_fixed"}},[v("img",{attrs:{src:i(327),title:"위치 고정 요구(예, GPS)",width:"20px"}})])]),t._v(" "),v("td",[t._v("기체는 모드 적용된 위치에 착륙합니다.")])]),t._v(" "),v("tr",{attrs:{id:"hold_mc"}},[v("td",[v("a",{attrs:{href:"../flight_modes_mc/hold.html"}},[t._v("대기")])]),t._v(" "),v("td",{attrs:{colspan:"3"}},[t._v("자동")]),t._v(" "),v("td",[v("a",{attrs:{href:"#key_position_fixed"}},[v("img",{attrs:{src:i(327),title:"위치 고정 요구(예, GPS)",width:"20px"}})])]),t._v(" "),v("td",[t._v("기체는 현재 GPS 위치와 고도에서 호버링합니다.")])]),t._v(" "),v("tr",{attrs:{id:"return_mc"}},[v("td",[v("a",{attrs:{href:"../flight_modes/return.html"}},[t._v("복귀")])]),t._v(" "),v("td",{attrs:{colspan:"3"}},[t._v("자동")]),t._v(" "),v("td",[v("a",{attrs:{href:"#key_position_fixed"}},[v("img",{attrs:{src:i(327),title:"위치 고정 요구(예, GPS)",width:"20px"}})])]),t._v(" "),v("td",[t._v("기체는 안전 위치로 경로 비행합니다. 반환 동작은 매개 변수 설정에 따라 다르며 임무 경로나 임무 착륙 패턴 (정의 된 경우)을 따라서 동작합니다.")])]),t._v(" "),v("tr",{attrs:{id:"mission_mc"}},[v("td",[v("a",{attrs:{href:"../flight_modes/mission.html"}},[t._v("임무")])]),t._v(" "),v("td",{attrs:{colspan:"3"}},[t._v("자동")]),t._v(" "),v("td",[v("a",{attrs:{href:"#key_position_fixed"}},[v("img",{attrs:{src:i(327),title:"위치 고정 요구(예, GPS)",width:"20px"}})])]),t._v(" "),v("td",[t._v("차량은 사용자가 업로드한 "),v("a",{attrs:{href:"../flying/missions.html"}},[t._v("미리 정의된 임무/비행 계획")]),t._v("을 실행합니다.")])]),t._v(" "),v("tr",{attrs:{id:"followme_mc"}},[v("td",[v("a",{attrs:{href:"../flight_modes_mc/follow_me.html"}},[t._v("따라다니기")])]),t._v(" "),v("td",{attrs:{colspan:"3"}},[t._v("자동")]),t._v(" "),v("td",[v("a",{attrs:{href:"#key_position_fixed"}},[v("img",{attrs:{src:i(327),title:"위치 고정 요구(예, GPS)",width:"20px"}})])]),t._v(" "),v("td",[t._v("기체는 QGC를 실행하는 Android 휴대 전화/태블릿을 사용하는 사용자를 자동으로 추적합니다.")])]),t._v(" "),v("tr",{attrs:{id:"offboard_mc"}},[v("td",[v("a",{attrs:{href:"../flight_modes/offboard.html"}},[t._v("오프보드")])]),t._v(" "),v("td",{attrs:{colspan:"3"}},[t._v("자동")]),t._v(" "),v("td",[v("a",{attrs:{href:"#key_position_fixed"}},[v("img",{attrs:{src:i(327),title:"위치 고정 요구(예, GPS)",width:"20px"}})])]),t._v(" "),v("td",[t._v("차량은 MAVLink를 통해 제공되는 위치, 속도 또는 자세 설정점을 준수합니다 (종종 직렬 케이블 또는 Wi-Fi를 통해 연결된 컴패니언 컴퓨터에서).")])])])]),t._v(" "),v("h2",{attrs:{id:"수직이착륙기"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#수직이착륙기"}},[t._v("#")]),t._v(" 수직이착륙기")]),t._v(" "),v("p",[t._v("VTOL 기체는 현재 차량 모드 (MC 또는 FW)를 기반으로 실행되는 고정익 및 멀티콥터 비행 모드를 모두 지원합니다.")]),t._v(" "),v("p",[t._v("VTOL은 두 구성 모두에서 "),v("RouterLink",{attrs:{to:"/ko/flight_modes/offboard.html"}},[t._v("오프 보드")]),t._v(" 모드를 지원합니다.")],1),t._v(" "),v("h2",{attrs:{id:"요점"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#요점"}},[t._v("#")]),t._v(" 요점")]),t._v(" "),v("p",[t._v("핵심 사항들은 다음과 같습니다.")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("기호")]),t._v(" "),v("th",[t._v("설명")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("M")]),t._v(" "),v("td",[t._v("RC 스틱을 통한 수동 제어. RC input is sent directly to control allocation.")])]),t._v(" "),v("tr",[v("td",[t._v("S")]),t._v(" "),v("td",[t._v("자세를 안정시키기위한 자동조종장치의 지원. RC 입력이 필요합니다. RC 스틱의 위치는 차량의 방향에 매핑됩니다.")])]),t._v(" "),v("tr",[v("td",[t._v("S"),v("sub",[t._v("rate")])]),t._v(" "),v("td",[t._v("자세를 안정시키기위한 자동조종장치의 지원. RC 입력이 필요합니다. RC 스틱의 위치는 해당 방향에서 차량의 회전 속도에 매핑됩니다.")])]),t._v(" "),v("tr",[v("td",[t._v("S"),v("sup",[t._v("+")])]),t._v(" "),v("td",[t._v("바람에 대한 위치 또는 고도를 유지하기위한 자동조종장치의 지원. RC 입력이 필요합니다.")])]),t._v(" "),v("tr",[v("td",[t._v("자동")]),t._v(" "),v("td",[t._v("이 모드는 자동입니다 (RC 제어는 모드 변경을 제외하고 기본적으로 비활성화 됨).")])]),t._v(" "),v("tr",[v("td",[v("a",{attrs:{id:"key_position_fixed"}}),v("img",{attrs:{src:i(327),title:"위치 고정 요구(예, GPS)",width:"20px"}})]),t._v(" "),v("td",[t._v("필요한 위치와 높이를 측정하는 센서 (예 : 광학 흐름, GPS + 기압계, 시각 관성 주행 거리계)")])]),t._v(" "),v("tr",[v("td",[v("a",{attrs:{id:"altitude_only"}}),v("img",{attrs:{src:i(336),title:"필요한 고도 (예 : 기압계, 거리계)",width:"20px"}})]),t._v(" "),v("td",[t._v("필요한 높이와 고도를 측정하는 센서 (예 : 기압계, 거리계)")])]),t._v(" "),v("tr",[v("td",[v("a",{attrs:{id:"key_difficulty"}}),v("a",{attrs:{href:"#key_difficulty"}},[v("img",{attrs:{src:i(331),title:"초급 난이도 비행",width:"20px"}}),t._v(" "),v("img",{attrs:{src:i(337),title:"중급 난이도 비행",width:"20px"}}),t._v(" "),v("img",{attrs:{src:i(333),title:"고급 난이도 비행",width:"20px"}})])]),t._v(" "),v("td",[t._v("비행 모드 난이도 (초급/중급/고급).")])])])]),t._v(" "),v("p",[t._v("약어")]),t._v(" "),v("ul",[v("li",[t._v("RPY : 롤, 피치, 요")]),t._v(" "),v("li",[t._v("RPT : 롤, 피치 스로틀")])])])}),[],!1,null,null,null);_.default=a.exports},327:function(t,_,i){t.exports=i.p+"assets/img/position_fixed.38e4a675.svg"},331:function(t,_){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAABeCAMAAACdDFNcAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAaFQTFRFR3BMLck2OcY5Lck3Lck3Lck3LMk3QL9ALck3M8wzLsg3Lsk4LtEuM8wzLck3Lsg3Lck3Lck3LMo3Lsk4Lck3IL9ALck3Lck3JNtJLck2Lcs4LMk2Lcg3Lsc4LMo4Lco3LMc4K8wzL8Y5Lck3McQ7Lck4Lck3LMg3Lso4Lck4LMo4Lck3Lck3Lck2Lco3L8s5Lck3Lsk3Lsg3Lck3KMk2LMw6Lck3Lck3Lck3KcU6LcM8Lcg3Lsk3Lsk4LMo1Lck2K8Y5Lsg3LMk3Lck3Lck2LMk2Lsk2Lck2Lco3LMk2K8o1Lco5KcwzLck3LMo4Lck2LMg3Lso1Lsg3Lck4L8g3Lck3K8k2Lsk2Lck2Lck3K8o1Lck3VapVLMk2K9UrLMk3Lck4Lsg3Lck3Lco3Lck3Lck2Lsk3Lck2Lcg3Lco3J8Q7Lsg3MMc4Lsc4Lck2M8wzLck3Lck3LMg3M8wzLsk2Lcg3Lck4Lck3Lck3LMo4K8s4K8g3Lck4Lck3Lck3Lck3Lco3Lcg3JMg3Lcg3Lsk2LMk2Lso3Lck3LMk2LMg3Lck3hb9vmgAAAIp0Uk5TAPgJ7f7uwwT5CsSzCwXvVMjGp4DxCNDdB8VEsrsyVn1AHhvwGtPURU2lV8z7UI82mKJv8hMj1sfRHxEz4JcdkhKt697AND2NlJs1Pxm0UqTJQ1h3PPcvWYj8MPMDUQa4vHCrv8u3z1WamQ0cIE52D9X1dBQhtsq19G47Qa7Br7Cxgw6HQn+G+oRGHgf53gAAAsdJREFUaN612ndbGkEQBvClHBx30pFeBQlgiUaNJsaSRGM31hTTe++9ml7mU4cQICAH3N3OvP/zex4Wdm925hhTk47YhtfjHgsIoigExtye7xuxDoYTW9gbFaEhZ3vO5L7w2p1xWYGuxBBxdnLg+xcc0CaOO4s68S0ZVEXK6cD3hUB1pLBGPDMImiKnNODWA0OgMU+8F9Xqh0ZBR3pG1Ol9AuiKr6ACt8+D7kzZ2+7RV8CR6N3W+mEJuLL2rJV+7yBwJtvVXB/m1gEeTzdddwkQ4mpyVNtfAEpWrIr8PCClX0l3YulgvtCoj6TReHA8b1j464AY197lfwiouVKvT57D5Yfqd9dRQI6n7skH6EnW8BI+P/NffwcEOVHlL1Pwl6rVEpBktswv0PAD5TrSQcOnjSW+AERxlvgVKv5T6RlloOINf1fnN5Blvch/peN/Ffk1Ot5dvJX10vG9NhYDwpxipyn5OPNS8gnmoeRPshAlb2HdlLyfHaHkjzMTJX+MiZS8gZonXhzin5b4j0m8rYgPBeIjjfhAJn6cUD4Mf9oYc9HxoWKl8IOO/0xz8ankG2kRuF0qkSNU/MdShXyLil8lvT4IwX/Xk9s0/ET5brVIw49XroZRCv1G9V6bpL02Mwu+fq2mpxDG55dqWyJXsfV8XT9n2Yer+zL17ainuPybva26l6h3toZOaQqxXBPuNzYyc2Ys3dyn1IadwuLnFHvI59/j6LJyi5oZUTbvaNNZ6CM/v56dbj5+6Mry6t2ZlqMZzvVxDbce/QS52r0RY9t5Yb/u/795zqpi7vZA5/5NO1WOJHWVne6U+oGq5vP59aZVw8R2eVDbLyBPapw3Jz+ox2eWdEzL38rqvoG0rnPWPzvQdjIsTIxzvKkQdEZa1Ofbu6tB3hctjFubTV7iCBsZTmw7hUTe4g+YRNEUuGnJJ+I7NlUf/APjU3MV9RK8MwAAAABJRU5ErkJggg=="},333:function(t,_){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAABeCAMAAACdDFNcAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAaFQTFRFR3BMzDIyxjk5zDExzDIyzDIyzDIyv0BAzDIyzDMzzDExzDIy0S4uzDIyzDMzzDIyyzExyzIyzTIyyzIyzDIyzDIyv0BAzDIy2yQkzTIyyzExyzIyzTIyzDMzzTIyzDMzzDMz0C8vzDMzzDIyzjExyzQ0zDIyyzQ0zTIyzTIyzDExzDIyzDIyzDMzzTIyzDMzzDMz0i0tzTIyzjExyzIyzDIyzDMzyjU1zDIyzDIyyzQ0zDMzzTIyyzIyyjAwzTIyzDIyyzIyzDExzjExzDMzzDIyyTY2yjExzDMzzDMzzTIyzDIyxjk5zTIyzDIyzDIyzjExzDExyzExzDExzDMzzDIyyzExzjExzDMzzDIyyjAwyC4uzDMzzDIyqlVVzDIyyzIyzTIyzDIyyzExzDIyzDIyzDMzyzIyzzAwzTIyyzIyyzIyzTIyyzIyzDIyzDMzzDMz1SsrxDs7yS4uzDIyyzQ0zDExzDMzzTIyzDMzzDMzzDMzyzIyzDExzDIyzDMzzTIyzDMzzDExzTIyyDc3zTIyzDExzTIyzDMzzDIyzDIyllrnYwAAAIp0Uk5TAPgJxO7+wwT5Cu2zC+8FyFTGp4DQ3QjxB8VEsrsyVn3UGx7TGkDwRU1Xpcz7lzMj3hGiNI/Hkh3y4DYZwK01mOuUmx9Q0RM/b4091hJStKRDyVh3PPdZL4j8MBxB9APVmbb1TvO4q7wgcLfLysGuFA8GDSGaO7VVUXTPbna/r7Cxg4aEDn+HQkb6NWUPegAAAsdJREFUaN612ndbGkEQBvCFO+DgpIP0IgIBbIk90Wg0lpiosaaY3nvv1fQynzqEAAHhYO9u5v2f3/OwsHuzM8cYTzpiG16Pe94vSpLon3d7vm/EOhhOrGFvVIKGnO05k/um1+6My03oSgwRV6cO/NCsHdrEfnlKI74lA1eEnAZ8Xwi4I4RV4ulBUBU5pQK3HBsHlbnqfcKrHx0BDekZ4NPnRNCUQJ4Dd8yA5ow62u7Rl6Aj0aet9QMC6Mr6o1b6uROgM8kuZX1Btw5waVlx3QVAiFPhqHZcAZSsWpryM4CU4Wa6C0sH0+tGfSCLxoP9WcPC3wPEOPcu/3tAzZ16few6Lj9ev7sOA3I8dU8+QE+mhhfw+cn/+nkgyPEqf4uCv1GtloAkQ2V+loafLteRdho+ayzxeSCKq8SvUvGfSs8oAxVv+Ls6v4Asa0X+Bx3/tciv0/Hu4q2sl47vtbIYEOY0O0XJx5mXkk8wDyV/koUoeTPrpuR97CAlv5/ZKPkjTKLkDdQ88eIQ/7TEf0zibUV8KBAfacQHMvHjhPJh+NvKmJOODxUrhS90/Geai08lP0mLwO1SiRyh4j+WKuRXVPwK6fVBDP67njyn4fvKd6spGr6/cjWMUuh3q/faDO21mZnx9Q81PYUwPr9Y2xK5ia0X6vo5EwFcPZCub0e9weXf7W3V3Ue9szV0SlOI5Zp4u7GRmTNh6aa5Zm3YUSx+qWkP+eJDHF1u3qJmRpTNO6I4C33s068nl5XHD11JvXp3uuVoRuf6OBdaj36Cutq9EWPbeeGw5v+/acnCMXe7pnH/Zl2cI0lNZac7xT9QVX0+X9i0qJjYTgyq+wXkMZXz5swDfnxyUcO0/IXM9w2ENY2z/qHptpNhsa9fx5sKQVekRX2+vbsS1PuihXFrU+EljrCR4cS6k08UzD6/TZJs/rfmQiK+Y+X64B89xXMV+heTNAAAAABJRU5ErkJggg=="},336:function(t,_,i){t.exports=i.p+"assets/img/altitude_icon.d9607697.svg"},337:function(t,_){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAABeCAMAAACdDFNcAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAaFQTFRFR3BM57QW46oc6LQW57QX57QW57QW/78A57QW5rMa57QW57MV6LkX6LQW/8wA57MV57QW57QW57QV57MW5rQW57QW57QW378g27Yk5rQW6bQX57UV5rQW5rMU57UV57QW47MT5rMa57QW57QW57MY57QW67EU6bUW6LMX5rMW6LMX57QX57QW57IU57QW5rMW6LMX6LQW57UW57QW5rUU67gU57QV6LQV5rMV57UW5bAS6bYW4bQP57IY57MW57QX57QW57QW5rUZ57MW47gc57UX5rQV57MY5rQU57QW57UW5K4b57MW57QX5rQW57QW6LMX6LQW57QW6LQX57QV5rMV57QX57QW6LUX6bMW5LUV6LQW5rMW57QV57QX57QW5rMa57QW57QW57QW5LYS6LIX57MW/6oA57QX67EU57QW57cY57QW57QW6LQW57QW57QY57QW5bYW1aor57QW7rsR5rQX6LQX57QV6LQW6LQW6LUV57UV57MW5rQW6LUW57QW6LMV57UW6LYX57QW5rMX7bYS5rMW6LQV5rUX57QWHpMEJAAAAIp0Uk5TAPgJxO7+wwT5Cu2zC+8FVMjGp4DQ3fEIB8VEsrsyVn0bHvDUQNMaRU2lV8z7P61Qb5iX8jQZ1o+bjR0jETWUkuveH6ISwD02M+DRE8e0UslDpPdYdzyI/FkvMK5Rv8t0FLjzqxwhdgO1DfUgwbyat0HVOwb0D3BOVZnPbsq2sK+xg39C+ocORoSGrQ6rKgAAAsdJREFUaN612ndbGkEQBvCFO+DgpBfpSJEAaowttqhJ1MTYY0kxvffeq+llPnUIAQLCwd3tzPs/v+dhYfdmZ44xNemIbXo97kW/KEmif9Ht+bIZ62A4sYa9UQkacrrnVO4Hr90Zl5vQlRgizk4O/PiYHdrE/mZKJ74tg6oIOR34vhCojhDWiGdnQVPkpAbccmAINOau95la/egy6EjPpDq9XwRdCRRU4I5p0J0ZR9s9ehs4Er3TWj8kAFfWLrfSrx8EzqS7lPUlbh3gyZziuguAEJfCUe34AChZsTTlpwEpo810J5YOpvON+mQKjQf7jYaFvwiIce1d/puAmpf1+sRVXH6ofnftB+R46p58gJ5MDS/g8/P/9cdAkGNV/gEFf6VaLQFJhsv8GA0/UK4j7TR8yljiC0AUZ4lfoeI/lZ5RBire8Hd1fgJZ1ov8dzr+V5Ffo+PdxVtZLx3fa2UxIMxZdoaSjzMvJZ9gHkr+JAtR8mbWTcn72AlK/gizUfKHmUTJG6h54sUh/mmJ/5jE24r4UCA+0ogPZOLHCeXD8JuVMRcdHypWCr/p+M80F59KvpIWgRulEjlCxe+WKuTXVPwq6fVBDP67njyk4QfLd6spGn6hcjWMUuiPqvfaDO21mZnx9Qs1PYUwPt9X2xK5hq3n6/o5IwFcPZCtb0ddwuXf7W3VvUe9szV0SpOI5Zp4r7GRmTNh6ab+Zm3YGSx+vGkP+dY5HF1u3qJmRpTNu6w4C33h49fTc8rjh640r96dbTma4Vwf11Lr0U+Qq90bMbadF47q/v+bxi0q5m6vdO7flFPlSFJX2elOqh+oaj6fn29ZNExsR2a1/QLyhMZ5c+a+eny+T8e0/Kms7hsI6zpn/cMDbSfD4uACx5sKQWekRX2+8XE1yPuihXF7S+EljrCR4cS6U0jkzT6/TZJs/rfmfCK+Y1X1wT/yG3MVH20xOwAAAABJRU5ErkJggg=="}}]);