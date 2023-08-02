(window.webpackJsonp=window.webpackJsonp||[]).push([[1364],{2546:function(t,_,a){"use strict";a.r(_);var e=a(19),r=Object(e.a)({},(function(){var t=this,_=t.$createElement,a=t._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vtol-풍향계-특징"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vtol-풍향계-특징"}},[t._v("#")]),t._v(" VTOL 풍향계 특징")]),t._v(" "),a("p",[a("em",[t._v("풍항계")]),t._v(" 기능은 호버 비행 중에 VTOL의 기수를 바람 반대방향으로 향하도록 자동으로 전환합니다. 이 기능은 안정성을 향상시킵니다 (측면에서 바람이 기체를 뒤집을 가능성을 줄임).")]),t._v(" "),a("p",[t._v("이 기능은 멀티콥터 모드로 비행하는 VTOL 하이브리드 기체에서 "),a("a",{attrs:{href:"#configuration"}},[t._v("기본적으로 활성화")]),t._v("됩니다.")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("순수 멀티콥터에서는 풍향계 기능이 지원되지 않습니다.")])]),t._v(" "),a("h2",{attrs:{id:"수동-모드-동작-방식"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#수동-모드-동작-방식"}},[t._v("#")]),t._v(" 수동 모드 동작 방식")]),t._v(" "),a("p",[t._v("풍향계 기능은 "),a("RouterLink",{attrs:{to:"/ko/flight_modes/position_mc.html"}},[t._v("위치 모드")]),t._v("에서만 적용됩니다 (다른 수동 멀티콥터 모드는 제외함).")],1),t._v(" "),a("p",[t._v("사용자는 풍향계 컨트롤러가 기체의 기수를 바람으로 변경중에도, 요 스틱을 사용하여 요 속도를 제어할 수 있습니다. 목표 요율은 풍향계 요율과 사용자가 명령한 요율의 합입니다.")]),t._v(" "),a("h2",{attrs:{id:"임무-모드-동작-방식"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#임무-모드-동작-방식"}},[t._v("#")]),t._v(" 임무 모드 동작 방식")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/ko/flight_modes/mission.html"}},[t._v("임무 모드")]),t._v("에서는 매개변수가 활성화되면, 풍향계 기능이 항상 활성화됩니다. 임무에서 명령된 모든 요 각도는 무시됩니다.")],1),t._v(" "),a("p",[a("span",{attrs:{id:"configuration"}})]),t._v(" "),a("h2",{attrs:{id:"설정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#설정"}},[t._v("#")]),t._v(" 설정")]),t._v(" "),a("p",[t._v("이 기능은 "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#WV_EN"}},[t._v("WV_* 매개 변수")]),t._v("를 사용하여 설정합니다.")],1),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("매개변수")]),t._v(" "),a("th",[t._v("설명")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#WV_EN"}},[t._v("WV_EN")])],1),t._v(" "),a("td",[t._v("풍향계 활성화")])]),t._v(" "),a("tr",[a("td",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#WV_ROLL_MIN"}},[t._v("WV_ROLL_MIN")])],1),t._v(" "),a("td",[t._v("요율을 요구하는 풍향계 컨트롤러의 최소 롤 각도 설정점.")])]),t._v(" "),a("tr",[a("td",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#WV_YRATE_MAX"}},[t._v("WV_YRATE_MAX")])],1),t._v(" "),a("td",[t._v("풍향계 컨트롤러가 요구할 수 있는 최대 요 레이트.")])])])]),t._v(" "),a("h2",{attrs:{id:"어떻게-작동합니까"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#어떻게-작동합니까"}},[t._v("#")]),t._v(" 어떻게 작동합니까?")]),t._v(" "),a("p",[t._v("호버 비행 중에 기체는 위치를 유지하기 위하여 바람에 의해 가해지는 항력을 극복하여야 합니다. 이를 달성하는 유일한 방법은 추력 벡터를 상대적인 바람으로 기울이는 것입니다 (말 그대로 바람에 '기댄다'). 추력 벡터를 추적하여 풍향을 추정할 수 있습니다. 풍향계 컨트롤러는 기체 기수를 예상 풍향으로 바꾸는 요 레이트를 명령하는 데 사용됩니다.")])])}),[],!1,null,null,null);_.default=r.exports}}]);