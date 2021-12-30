(window.webpackJsonp=window.webpackJsonp||[]).push([[648],{2330:function(t,_,e){"use strict";e.r(_);var a=e(19),v=Object(a.a)({},(function(){var t=this,_=t.$createElement,a=t._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"착륙-모드"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#착륙-모드"}},[t._v("#")]),t._v(" 착륙 모드")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/ko/getting_started/flight_modes.html#key_position_fixed"}},[a("img",{attrs:{src:e(326),title:"필요한 위치 추정치(예: GPS) ",width:"30px"}})])],1),t._v(" "),a("p",[a("em",[t._v("착륙")]),t._v(" 모드는 기체의 모드가 활성화된 위치에 착륙합니다. 착륙후 기체는 가급적 짧은 시간내에 시동이 해제됩니다.")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("ul",[a("li",[t._v("이 모드는 안전 장치 가동으로 인해 상태를 전환하지 않는 한 유효한 위치 추정치가 필요하며, 이 경우 고도만 필요합니다(일반적으로 기압계는 비행 제어기에 내장).")]),t._v(" "),a("li",[t._v("이 모드는 자동입니다. 기체를 제어시 사용자 개입이 "),a("em",[t._v("필요하지")]),t._v(" 않습니다.")]),t._v(" "),a("li",[t._v("RC 제어 스위치는 기체의 비행 모드를 변경할 수 있습니다.")]),t._v(" "),a("li",[t._v("멀티콥터 또는 멀티콥터 모드의 VTOL에서 RC 스틱을 움직이면 위험한 배터리 안전 장치를 처리하지 않는 한 "),a("a",{attrs:{href:"#COM_RC_OVERRIDE"}},[t._v("기본적으로")]),t._v(" 기체는 "),a("RouterLink",{attrs:{to:"/ko/flight_modes/position_mc.html"}},[t._v("위치 모드")]),t._v("로 변경됩니다.")],1)])]),t._v(" "),a("p",[t._v("각 기체 유형에 대한 구체적인 동작은 아래에 설명되어 있습니다.")]),t._v(" "),a("h2",{attrs:{id:"멀티콥터-mc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#멀티콥터-mc"}},[t._v("#")]),t._v(" 멀티콥터 (MC)")]),t._v(" "),a("p",[t._v("기체 모드가 시작된 위치에 착륙합니다. 기체는 "),a("a",{attrs:{href:"#MPC_LAND_SPEED"}},[t._v("MPC_LAND_SPEED")]),t._v("에 지정된 속도로 하강하고 착륙후 시동 해제됩니다 ("),a("a",{attrs:{href:"#COM_DISARM_LAND"}},[t._v("기본값")]),t._v(").")]),t._v(" "),a("p",[t._v("RC 스틱을 움직이면 차량이 "),a("RouterLink",{attrs:{to:"/ko/flight_modes/position_mc.html"}},[t._v("위치 모드")]),t._v("("),a("a",{attrs:{href:"#COM_RC_OVERRIDE"}},[t._v("기본값")]),t._v(")로 변경됩니다.")],1),t._v(" "),a("p",[t._v("착륙은 다음 매개변수의 영향을 받습니다.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("매개 변수")]),t._v(" "),a("th",[t._v("설명")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("span",{attrs:{id:"MPC_LAND_SPEED"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_LAND_SPEED"}},[t._v("MPC_LAND_SPEED")])],1),t._v(" "),a("td",[t._v("착륙 하강 속도. 이는 접지 상태를 알 수 없으므로, 낮은 속도를 유지하여야 합니다")])]),t._v(" "),a("tr",[a("td",[a("span",{attrs:{id:"COM_DISARM_LAND"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_DISARM_LAND"}},[t._v("COM_DISARM_LAND")])],1),t._v(" "),a("td",[t._v("착륙후 자동 시동 해제 대기 시간 (단위 초). -1로 설정하면 착륙시 시동 해제되지 않습니다.")])]),t._v(" "),a("tr",[a("td",[a("span",{attrs:{id:"COM_RC_OVERRIDE"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_RC_OVERRIDE"}},[t._v("COM_RC_OVERRIDE")])],1),t._v(" "),a("td",[t._v("멀티콥터 (또는 MC 모드의 VTOL)에서 스틱 이동으로 인하여 모드가 "),a("RouterLink",{attrs:{to:"/ko/flight_modes/position_mc.html"}},[t._v("위치 모드")]),t._v(" 변경 여부를 제어합니다. 자동 모드와 오프보드 모드에 대해 별도로 활성화할 수 있으며, 기본적으로 자동 모드에서 활성화됩니다.")],1)]),t._v(" "),a("tr",[a("td",[a("span",{attrs:{id:"COM_RC_STICK_OV"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_RC_STICK_OV"}},[t._v("COM_RC_STICK_OV")])],1),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/ko/flight_modes/position_mc.html"}},[t._v("위치 모드")]),t._v("로 전환하는 스틱 이동량 ("),a("a",{attrs:{href:"#COM_RC_OVERRIDE"}},[t._v("COM_RC_OVERRIDE")]),t._v("이 활성화된 경우).")],1)])])]),t._v(" "),a("h2",{attrs:{id:"고정익-fw"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#고정익-fw"}},[t._v("#")]),t._v(" 고정익 (FW)")]),t._v(" "),a("p",[t._v("기체 모드가 시작된 위치로 복귀하여 착륙합니다. RC 스틱 이동은 무시됩니다.")]),t._v(" "),a("p",[t._v("고정익의 착륙 원리와 설정 매개변수는 "),a("RouterLink",{attrs:{to:"/ko/flying/fixed_wing_landing.html"}},[t._v("고정익 착륙")]),t._v("에서 자세하게 설명합니다.")],1),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("종종 고정익은 지면에 대한 고정된 착륙 궤적을 비행합니다. 플레어 착륙은 시도하지 않습니다. 이는 착륙 모드에서 기체가 지상 고도를 모를 수 있고, 해수면에 있다고 가정하기 때문입니다. 지면 수준이 훨씬 높을 수 있기 때문에, 기체는 플레어 로직이 적용되는 고도에서 지상에 도달하는 경우가 많습니다.")])]),t._v(" "),a("p",[t._v("착륙은 다음 매개변수의 영향을 받습니다("),a("RouterLink",{attrs:{to:"/ko/flying/fixed_wing_landing.html"}},[t._v(" 랜딩(고정 날개)")]),t._v(" 참조).")],1),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("매개 변수")]),t._v(" "),a("th",[t._v("설명")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_DISARM_LAND"}},[t._v("COM_DISARM_LAND")])],1),t._v(" "),a("td",[t._v("착륙후 자동 시동 해제 대기 시간 (단위 초). -1로 설정하면 착륙시 시동 해제되지 않습니다.")])])])]),t._v(" "),a("h2",{attrs:{id:"수직이착륙기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#수직이착륙기"}},[t._v("#")]),t._v(" 수직이착륙기")]),t._v(" "),a("p",[t._v("VTOL은 고정익 모드에서는 이륙 동작 및 매개 변수는 "),a("a",{attrs:{href:"#fixed-wing-fw"}},[t._v("고정익")]),t._v("를 따르며, 멀티콥터 모드에서는 "),a("a",{attrs:{href:"#multi-copter-mc"}},[t._v("멀티콥터")]),t._v(" 매개 변수를 따릅니다. "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#NAV_FORCE_VT"}},[t._v("NAV_FORCE_VT")]),t._v("이 설정되면(기본값: 켜짐) 고정익 모드의 VTOL이 착륙 직전에 멀티콥터로 되돌아갑니다.")],1)])}),[],!1,null,null,null);_.default=v.exports},326:function(t,_,e){t.exports=e.p+"assets/img/position_fixed.c1403cf0.svg"}}]);