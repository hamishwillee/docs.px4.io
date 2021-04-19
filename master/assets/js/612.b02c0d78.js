(window.webpackJsonp=window.webpackJsonp||[]).push([[612],{2093:function(t,_,e){"use strict";e.r(_);var a=e(18),v=Object(a.a)({},(function(){var t=this,_=t.$createElement,a=t._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"이륙-모드"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#이륙-모드"}},[t._v("#")]),t._v(" 이륙 모드")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/ko/getting_started/flight_modes.html#key_position_fixed"}},[a("img",{attrs:{src:e(322),title:"위치 고정 요구(예, GPS)",width:"30px"}})])],1),t._v(" "),a("p",[a("em",[t._v("이륙")]),t._v(" 비행 모드는 기체가 지정된 높이로 상승후, 추가 입력을 기다립니다.")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("ul",[a("li",[t._v("이 모드는 GPS가 필요합니다.")]),t._v(" "),a("li",[t._v("이 모드를 사용하려면 기체의 시동을 걸어야합니다.")]),t._v(" "),a("li",[t._v("이 모드는 자동입니다. 기체를 제어하기 위해 사용자 개입이 "),a("em",[t._v("필요하지")]),t._v(" 않습니다.")]),t._v(" "),a("li",[t._v("RC 제어 스위치는 기체의 비행 모드를 변경할 수 있습니다.")]),t._v(" "),a("li",[t._v("멀티콥터 (또는 멀티콥터 모드의 VTOL)에서 RC 스틱을 움직이면 위험한 배터리 안전 장치를 처리하지 않는 한 "),a("a",{attrs:{href:"#COM_RC_OVERRIDE"}},[t._v("기본적으로")]),t._v(" 기체는 "),a("RouterLink",{attrs:{to:"/ko/flight_modes/position_mc.html"}},[t._v("위치 모드")]),t._v("로 변경됩니다.")],1),t._v(" "),a("li",[t._v("이륙시 문제가 발생하면 "),a("RouterLink",{attrs:{to:"/ko/config/safety.html#failure_detector"}},[t._v("고장 감지기")]),t._v("가 자동으로 엔진을 중지합니다.")],1)])]),t._v(" "),a("p",[t._v("각 기체 유형에 대한 구체적인 행동은 아래에 설명되어 있습니다.")]),t._v(" "),a("h2",{attrs:{id:"멀티콥터-mc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#멀티콥터-mc"}},[t._v("#")]),t._v(" 멀티콥터(MC)")]),t._v(" "),a("p",[t._v("멀티 로터는 "),a("code",[t._v("MIS_TAKEOFF_ALT")]),t._v("에 정의된 고도까지 상승하고 위치를 유지합니다.")]),t._v(" "),a("p",[t._v("RC stick movement will change the vehicle to "),a("RouterLink",{attrs:{to:"/ko/flight_modes/position_mc.html"}},[t._v("Position mode")]),t._v(" (by "),a("a",{attrs:{href:"#COM_RC_OVERRIDE"}},[t._v("default")]),t._v(").")],1),t._v(" "),a("p",[t._v("이륙은 다음 매개 변수의 영향을받습니다.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("매개 변수")]),t._v(" "),a("th",[t._v("설명")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("span",{attrs:{id:"MIS_TAKEOFF_ALT"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MIS_TAKEOFF_ALT"}},[t._v("MIS_TAKEOFF_ALT")])],1),t._v(" "),a("td",[t._v("이륙 중 목표 고도 (기본값 : 2.5m)")])]),t._v(" "),a("tr",[a("td",[a("span",{attrs:{id:"MPC_TKO_SPEED"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_TKO_SPEED"}},[t._v("MPC_TKO_SPEED")])],1),t._v(" "),a("td",[t._v("상승 속도 (기본값 : 1.5m/s)")])]),t._v(" "),a("tr",[a("td",[a("span",{attrs:{id:"COM_RC_OVERRIDE"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_RC_OVERRIDE"}},[t._v("COM_RC_OVERRIDE")])],1),t._v(" "),a("td",[t._v("Controls whether stick movement on a multicopter (or VTOL in MC mode) causes a mode change to "),a("RouterLink",{attrs:{to:"/ko/flight_modes/position_mc.html"}},[t._v("Position mode")]),t._v(". 자동 모드와 오프 보드 모드에 대해 별도로 활성화할 수 있으며, 기본적으로 자동 모드에서 활성화됩니다.")],1)]),t._v(" "),a("tr",[a("td",[a("span",{attrs:{id:"COM_RC_STICK_OV"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_RC_STICK_OV"}},[t._v("COM_RC_STICK_OV")])],1),t._v(" "),a("td",[t._v("The amount of stick movement that causes a transition to "),a("RouterLink",{attrs:{to:"/ko/flight_modes/position_mc.html"}},[t._v("Position mode")]),t._v(" (if "),a("a",{attrs:{href:"#COM_RC_OVERRIDE"}},[t._v("COM_RC_OVERRIDE")]),t._v(" is enabled).")],1)])])]),t._v(" "),a("p",[a("span",{attrs:{id:"fixed_wing"}})]),t._v(" "),a("h2",{attrs:{id:"고정익-fw"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#고정익-fw"}},[t._v("#")]),t._v(" 고정익(FW)")]),t._v(" "),a("p",[t._v("기체는 "),a("em",[t._v("투석기/발사 모드")]),t._v(" 또는 "),a("em",[t._v("활주로 이륙 모드")]),t._v("를 사용하여 현재 방향으로 이륙합니다. 모드는 기본적으로 투석기/수발기가 되지만, "),a("a",{attrs:{href:"#RWTO_TKOFF"}},[t._v(" RWTO_TKOFF")]),t._v("를 사용하여 활주로 이륙으로 설정할 수 있습니다. 두 경우 모두 RC 스틱 제어는 무시됩니다.")]),t._v(" "),a("p",[a("span",{attrs:{id:"hand_launch"}})]),t._v(" "),a("h3",{attrs:{id:"투석기-수동-발사-모드"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#투석기-수동-발사-모드"}},[t._v("#")]),t._v(" 투석기/수동 발사 모드")]),t._v(" "),a("p",[a("em",[t._v("투석기/수동 발사 모드")]),t._v("에서 기체는 발사를 감지하기 위해 대기합니다 (가속 트리거 기준). 발사시 약 2초만에 최대 스로틀 ("),a("a",{attrs:{href:"#RWTO_MAX_THR"}},[t._v("RWTO_MAX_THR")]),t._v(")까지 상승한 다음 "),a("em",[t._v("최소")]),t._v(" 10도 이륙 피치로 최대 스로틀 상승합니다. "),a("a",{attrs:{href:"#FW_CLMBOUT_DIFF"}},[t._v("FW_CLMBOUT_DIFF")]),t._v("에 도달하면 "),a("RouterLink",{attrs:{to:"/ko/flight_modes/hold.html"}},[t._v("홀드 모드")]),t._v(" 배회 비행합니다.")],1),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("위에 논의된 동작외에도 일부 조건이 충족 될 때까지 시작 시퀀스가 ​​시작되지 않도록 차단하는 시작 탐지기가 있습니다. 투석기 발사의 경우 이는 약간의 가속 임계치입니다.")])]),t._v(" "),a("p",[a("span",{attrs:{id:"runway_launch"}})]),t._v(" "),a("h3",{attrs:{id:"활주로-이륙"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#활주로-이륙"}},[t._v("#")]),t._v(" 활주로 이륙")]),t._v(" "),a("p",[a("em",[t._v("활주로 이륙 모드")]),t._v("에는 다음과 같은 상태가 있습니다.")]),t._v(" "),a("ol",[a("li",[a("strong",[t._v("스로틀 램프")]),t._v(" : 이륙을위한 최소 속도 ("),a("a",{attrs:{href:"#FW_AIRSPD_MIN"}},[t._v("FW_AIRSPD_MIN")]),t._v(" x "),a("a",{attrs:{href:"#RWTO_AIRSPD_SCL"}},[t._v("RWTO_AIRSPD_SCL")]),t._v(")에 도달 할 때까지 활주로에 고정 (피치 고정, )")]),t._v(" "),a("li",[t._v("** 이륙 ** : 피치를 높이고 기체 고도> 항법 고도 ("),a("a",{attrs:{href:"#RWTO_NAV_ALT"}},[t._v("RWTO_NAV_ALT")]),t._v(")까지 계속 상승합니다.")]),t._v(" "),a("li",[a("strong",[t._v("상승")]),t._v(" :지면 고도 "),a("a",{attrs:{href:"#FW_CLMBOUT_DIFF"}},[t._v("FW_CLMBOUT_DIFF")]),t._v("까지 상승합니다. 이 단계에서는 롤 및 방향 제한은 무시됩니다.")])]),t._v(" "),a("h3",{attrs:{id:"고정익-이륙-매개-변수"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#고정익-이륙-매개-변수"}},[t._v("#")]),t._v(" 고정익 이륙 매개 변수")]),t._v(" "),a("p",[t._v("이륙은 다음 매개 변수의 영향을받습니다.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("매개 변수")]),t._v(" "),a("th",[t._v("설명")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("span",{attrs:{id:"RWTO_TKOFF"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RWTO_TKOFF"}},[t._v("RWTO_TKOFF")])],1),t._v(" "),a("td",[t._v("랜딩 기어가있는 활주로 이륙. 기본값 : 비활성화 됨")])]),t._v(" "),a("tr",[a("td",[a("span",{attrs:{id:"RWTO_MAX_THR"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RWTO_MAX_THR"}},[t._v("RWTO_MAX_THR")])],1),t._v(" "),a("td",[t._v("활주로 이륙 중 최대 스로틀.")])]),t._v(" "),a("tr",[a("td",[a("span",{attrs:{id:"FW_CLMBOUT_DIFF"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_CLMBOUT_DIFF"}},[t._v("FW_CLMBOUT_DIFF")])],1),t._v(" "),a("td",[t._v("등반 고도 차이. 이륙 고도 설정값 없이 이륙하는 경우 목표 고도로 사용됩니다 (이륙 모드에는 설정값이 없지만 임무에는 있음).")])]),t._v(" "),a("tr",[a("td",[a("span",{attrs:{id:"FW_AIRSPD_MIN"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_AIRSPD_MIN"}},[t._v("FW_AIRSPD_MIN")])],1),t._v(" "),a("td",[t._v("최소 항속 속도. TECS 컨트롤러가 대기 속도를보다 적극적으로 높이려고 시도합니다.")])]),t._v(" "),a("tr",[a("td",[a("span",{attrs:{id:"RWTO_AIRSPD_SCL"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RWTO_AIRSPD_SCL"}},[t._v("RWTO_AIRSPD_SCL")])],1),t._v(" "),a("td",[t._v("최소 이륙을위한 속도의 스케일링 계수. 피치는 대기 속도에 도달하면 증가합니다 : "),a("code",[t._v("FW_AIRSPD_MIN")]),t._v(" * "),a("code",[t._v("RWTO_AIRSPD_SCL")])])]),t._v(" "),a("tr",[a("td",[a("span",{attrs:{id:"RWTO_NAV_ALT"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RWTO_NAV_ALT"}},[t._v("RWTO_NAV_ALT")])],1),t._v(" "),a("td",[t._v("지면 고도 (AGL). 약간의 굴림을 허용하는 충분한 지상고가 있습니다. "),a("code",[t._v("RWTO_NAV_ALT")]),t._v("에 도달할 때까지 기체는 수평을 유지하고 비행 방향 유지를 위하여 방향타만을 사용됩니다 ("),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RWTO_HDG"}},[t._v("RWTO_HDG")]),t._v(" "),a("span",{attrs:{id:"RWTO_HDG"}},[t._v("참조")]),t._v("). "),a("code",[t._v("FW_CLMBOUT_DIFF")]),t._v(" > 0이면 "),a("code",[t._v("FW_CLMBOUT_DIFF")]),t._v(" 아래에 있어야합니다.")],1)])])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("기체는 이륙시 항상 일반 FW 최대/최소 스로틀 설정을 따릅니다 ("),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_THR_MIN"}},[t._v("FW_THR_MIN")]),t._v(", "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_THR_MAX"}},[t._v("FW_THR_MAX")]),t._v(").")],1)]),t._v(" "),a("h2",{attrs:{id:"수직-이착륙기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#수직-이착륙기"}},[t._v("#")]),t._v(" 수직 이착륙기")]),t._v(" "),a("p",[t._v("VTOL은 부팅시 MC 모드로 기본 설정되며 일반적으로 "),a("a",{attrs:{href:"#multi-copter-mc"}},[t._v("멀티 콥터 모드")]),t._v(" (또한 더 안전함)에서 이륙하는 것을 가정합니다.")]),t._v(" "),a("p",[t._v("그러나, 이륙 전에 고정익으로 전환하면 "),a("a",{attrs:{href:"#fixed_wing"}},[t._v("고정익")]),t._v(" 모드로 이륙합니다.")])])}),[],!1,null,null,null);_.default=v.exports},322:function(t,_,e){t.exports=e.p+"assets/img/position_fixed.c1403cf0.svg"}}]);