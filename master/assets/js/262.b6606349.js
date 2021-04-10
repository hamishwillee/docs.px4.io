(window.webpackJsonp=window.webpackJsonp||[]).push([[262],{2084:function(t,e,r){"use strict";r.r(e);var s=r(18),o=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"궤도-모드-멀티콥터"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#궤도-모드-멀티콥터"}},[t._v("#")]),t._v(" 궤도 모드(멀티콥터)")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/ko/getting_started/flight_modes.html#key_difficulty"}},[s("img",{attrs:{src:r(324),title:"초급 난이도 비행",width:"30px"}})]),t._v(" "),s("RouterLink",{attrs:{to:"/ko/getting_started/flight_modes.html#key_position_fixed"}},[s("img",{attrs:{src:r(322),title:"위치 고정 요구(예, GPS)",width:"30px"}})])],1),t._v(" "),s("p",[s("em",[t._v("궤도")]),t._v(" 유도 비행 모드를 사용하면 멀티콥터 (또는 멀티 콥터 모드의 VTOL)가 항상 중앙을 향하도록 "),s("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#ORBIT_YAW_BEHAVIOUR",target:"_blank",rel:"noopener noreferrer"}},[t._v("기본"),s("OutboundLink")],1),t._v(" 요잉으로 원을 그리는 비행하도록 명령할 수 있습니다.")]),t._v(" "),s("p",[s("img",{attrs:{src:r(830),alt:"궤도 모드 (멀티콥터)"}})]),t._v(" "),s("p",[t._v("모드를 활성화하고 궤도의 중심 위치, 초기 반경 및 고도를 설정하려면 "),s("em",[t._v("QGroundControl")]),t._v(" (또는 기타 호환 가능한 GCS 또는 MAVLink API)이 "),s("em",[t._v("필요")]),t._v("합니다. 활성화되면 기체는 명령된 원 궤적에서 가장 가까운 지점까지 최대한 빠르게 비행하고 계획된 원에서 시계 방향으로 천천히 (1m / s) 궤도를 돌면서 중앙을 향합니다.")]),t._v(" "),s("p",[t._v("궤도를 시작하는 방법에 대한 지침은 "),s("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/FlyView/FlyView.html#orbit",target:"_blank",rel:"noopener noreferrer"}},[t._v("FlyView > 궤도 위치"),s("OutboundLink")],1),t._v(" ("),s("em",[t._v("QGroundControl")]),t._v(" 가이드)에서 찾을 수 있습니다.")]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("RC")]),t._v(" "),s("p",[t._v("무선 조종기 사용은 "),s("em",[t._v("선택 사항")]),t._v("입니다. RC 제어가 없는 경우 궤도는 위에서 설명한 대로 진행됩니다. RC 제어를 사용하여 모드를 시작할 수 없습니다 (RC를 통해 모드로 전환하면 유휴 상태가됩니다).")])]),t._v(" "),s("p",[t._v("RC 제어를 사용하여 궤도 고도, 반경, 속도 및 궤도 방향을 변경할 수 있습니다.")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("왼쪽 스틱:")]),t._v(" "),s("ul",[s("li",[t._v("*위/아래 :*는 "),s("RouterLink",{attrs:{to:"/ko/flight_modes/position_mc.html"}},[t._v("위치 모드")]),t._v("에서와 같이 상승/하강 속도를 제어합니다. 중앙 데드 존에 있으면 현재 고도가 유지됩니다.")],1),t._v(" "),s("li",[s("em",[t._v("왼쪽/오른쪽 :")]),t._v(" 효과 없음.")])])]),t._v(" "),s("li",[s("strong",[t._v("오른쪽 스틱:")]),t._v(" "),s("ul",[s("li",[s("em",[t._v("좌/우")]),t._v(" 시계 방향/반시계 방향으로 궤도의 가속도를 제어합니다. 중앙에 위치하면 현재 속도가 고정됩니다.\n"),s("ul",[s("li",[t._v("최대 속도는 10m/s이며 구심 가속도를 2m/s ^ 2 미만으로 유지하도록 제한됩니다.")])])]),t._v(" "),s("li",[s("em",[t._v("상/하")]),t._v(" 궤도 반경을 제어합니다 (더 작게 / 더 크게). 중앙에 위치하면 현재 반경이 유지됩니다.\n"),s("ul",[s("li",[t._v("최소 반경은 1m 입니다. 최대 반경은 1m 입니다.")])])])])])]),t._v(" "),s("p",[t._v("아래 다이어그램은 모드 동작을 시각적으로 보여줍니다 ("),s("RouterLink",{attrs:{to:"/ko/getting_started/rc_transmitter_receiver.html#transmitter_modes"}},[t._v("모드 2 송신기")]),t._v("의 경우).")],1),t._v(" "),s("p",[s("img",{attrs:{src:r(373),alt:"궤도 모드 (멀티콥터)"}})]),t._v(" "),s("p",[t._v("다른 비행 모드 (RC 또는 QGC 사용)로 전환하여 모드를 중지할 수 있습니다.")]),t._v(" "),s("h2",{attrs:{id:"매개-변수-제약-사항"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#매개-변수-제약-사항"}},[t._v("#")]),t._v(" 매개 변수 / 제약 사항")]),t._v(" "),s("p",[t._v("궤도 모드 별 매개 변수는 없습니다.")]),t._v(" "),s("p",[t._v("다음의 제약 사항들은 하드 코딩되어 있습니다.")]),t._v(" "),s("ul",[s("li",[t._v("초기 기본 회전은 시계 방향으로 1m/s 입니다.")]),t._v(" "),s("li",[t._v("최대 가속도는 2m/s ^ 2로 제한되며, 명령된 지면 속도보다는 명령된 원 궤적을 유지하는 것이 우선입니다 (즉, 가속이 2m/s^ 2를 초과하면 정확한 원을 달성하기 위해 기체가 감속됩니다).")]),t._v(" "),s("li",[t._v("최대 반경은 1m 입니다.")])]),t._v(" "),s("h2",{attrs:{id:"mavlink-메시지-개발자"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mavlink-메시지-개발자"}},[t._v("#")]),t._v(" MAVLink 메시지 (개발자)")]),t._v(" "),s("p",[t._v("궤도 모드는 다음 MAVLink 명령을 사용합니다.")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_DO_ORBIT",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAV_CMD_DO_ORBIT"),s("OutboundLink")],1),t._v("-지정된 중심점, 반경, 방향, 고도, 속도 및 "),s("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#ORBIT_YAW_BEHAVIOUR",target:"_blank",rel:"noopener noreferrer"}},[t._v("요 방향"),s("OutboundLink")],1),t._v("으로 궤도를 시작합니다 (차량은 기본적으로 궤도 중심을 향함).")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#ORBIT_EXECUTION_STATUS",target:"_blank",rel:"noopener noreferrer"}},[t._v("ORBIT_EXECUTION_STATUS"),s("OutboundLink")],1),t._v(" - 현재 궤도 매개 변수의 GCS를 업데이트하기 위해 궤도 중에 방출되는 궤도 상태입니다 (RC 컨트롤러에 의해 변경 될 수 있음).")])])])}),[],!1,null,null,null);e.default=o.exports},322:function(t,e,r){t.exports=r.p+"assets/img/position_fixed.c1403cf0.svg"},324:function(t,e){t.exports="data:image/png;base64,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"},373:function(t,e,r){t.exports=r.p+"assets/img/orbit_MC.c125ea7b.png"},830:function(t,e,r){t.exports=r.p+"assets/img/orbit.6cc5c514.jpg"}}]);