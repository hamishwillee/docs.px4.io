(window.webpackJsonp=window.webpackJsonp||[]).push([[632],{2307:function(t,_,v){"use strict";v.r(_);var e=v(19),a=Object(e.a)({},(function(){var t=this,_=t.$createElement,e=t._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"유지-모드"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#유지-모드"}},[t._v("#")]),t._v(" 유지 모드")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/ko/getting_started/flight_modes.html#key_position_fixed"}},[e("img",{attrs:{src:v(326),title:"위치 고정 요구(예, GPS)",width:"30px"}})])],1),t._v(" "),e("p",[e("em",[t._v("유지")]),t._v(' 모드(예: "Loiter")는 기체의 현 위치와 고도를 유지합니다. 멀터콥터는 현 위치를 유지하며, 고정익은 현 위치 주변을 선회합니다.')]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[e("em",[t._v("유지 모드")]),t._v("를 사용하여 임무를 일시 중지하거나 비상시 기체를 제어합니다. 일반적으로 사전 프로그래밍 되어진 스위치로 작동시킵니다.")])]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("ul",[e("li",[t._v("이 모드는 GPS가 필요합니다.")]),t._v(" "),e("li",[t._v("이 모드는 자동이며, 기체 제어에 사용자 개입이 "),e("em",[t._v("필요하지")]),t._v(" 않습니다.")]),t._v(" "),e("li",[t._v("RC 무선 조종기 스위치는 기체의 비행 모드를 변경할 수 있습니다.")]),t._v(" "),e("li",[t._v("멀티콥터와 VTOL 멀티콥터 모드에서 RC 스틱을 움직이면 위험한 배터리 안전 장치를 처리하지 않는 한 "),e("a",{attrs:{href:"#COM_RC_OVERRIDE"}},[t._v("기본적으로")]),t._v(" 기체는 "),e("RouterLink",{attrs:{to:"/ko/flight_modes/position_mc.html"}},[t._v("위치 모드")]),t._v("로 변경됩니다.")],1)])]),t._v(" "),e("p",[t._v("기체 유형에 따른 기능의 상세 내용이 아래에 설명합니다.")]),t._v(" "),e("h2",{attrs:{id:"멀티코터-mc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#멀티코터-mc"}},[t._v("#")]),t._v(" 멀티코터 (MC)")]),t._v(" "),e("p",[t._v("멀티콥터는 현재 위치와 고도에서 호버링합니다.")]),t._v(" "),e("p",[t._v("RC 스틱을 움직이면, 차량이 "),e("RouterLink",{attrs:{to:"/ko/flight_modes/position_mc.html"}},[t._v("위치 모드")]),t._v("("),e("a",{attrs:{href:"#COM_RC_OVERRIDE"}},[t._v("기본값")]),t._v(")로 변경됩니다.")],1),t._v(" "),e("p",[t._v("아래의 매개 변수를 사용하여 동작을 설정할 수 있습니다.")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("매개변수")]),t._v(" "),e("th",[t._v("설명")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("span",{attrs:{id:"MIS_LTRMIN_ALT"}}),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MIS_LTRMIN_ALT"}},[t._v("MIS_LTRMIN_ALT")])],1),t._v(" "),e("td",[t._v("정지기 모드의 최소 높이(모드가 더 낮은 고도에서 작동하면 기체가 이 고도로 상승함).")])]),t._v(" "),e("tr",[e("td",[e("span",{attrs:{id:"COM_RC_OVERRIDE"}}),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_RC_OVERRIDE"}},[t._v("COM_RC_OVERRIDE")])],1),t._v(" "),e("td",[t._v("멀티콥터 (또는 MC 모드의 VTOL)에서 스틱 이동으로 인하여 모드가 "),e("RouterLink",{attrs:{to:"/ko/flight_modes/position_mc.html"}},[t._v("위치 모드")]),t._v("로 변경 여부를 제어합니다. 자동 모드와 오프보드 모드에 대해 별도로 활성화할 수 있으며, 기본적으로 자동 모드에서 활성화됩니다.")],1)]),t._v(" "),e("tr",[e("td",[e("span",{attrs:{id:"COM_RC_STICK_OV"}}),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_RC_STICK_OV"}},[t._v("COM_RC_STICK_OV")])],1),t._v(" "),e("td",[e("RouterLink",{attrs:{to:"/ko/flight_modes/position_mc.html"}},[t._v("위치 모드")]),t._v("로 전환하는 스틱 이동량 ("),e("a",{attrs:{href:"#COM_RC_OVERRIDE"}},[t._v("COM_RC_OVERRIDE")]),t._v("이 활성화된 경우).")],1)])])]),t._v(" "),e("h2",{attrs:{id:"고정익-fw"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#고정익-fw"}},[t._v("#")]),t._v(" 고정익 (FW)")]),t._v(" "),e("p",[t._v("비행기는 현재 고도에서 GPS 유지 위치를 중심으로 선회한다. 모드가 동작시, 기체는 먼저 "),e("code",[t._v("MIS_LTRMIN_ALT")]),t._v(" 고도로 상승합니다.")]),t._v(" "),e("p",[t._v("RC 스틱 이동은 무시됩니다.")]),t._v(" "),e("p",[t._v("아래 매개 변수를 사용하여 동작을 설정합니다.")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("매개변수")]),t._v(" "),e("th",[t._v("설명")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#NAV_LOITER_RAD"}},[t._v("NAV_LOITER_RAD")])],1),t._v(" "),e("td",[t._v("배회 원의 반경")])]),t._v(" "),e("tr",[e("td",[e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MIS_LTRMIN_ALT"}},[t._v("MIS_LTRMIN_ALT")])],1),t._v(" "),e("td",[t._v("배회 모드의 최소 높이(모드가 더 낮은 고도에서 작동하면 기체가 이 고도로 상승함).")])])])]),t._v(" "),e("h2",{attrs:{id:"vtol"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vtol"}},[t._v("#")]),t._v(" VTOL")]),t._v(" "),e("p",[t._v("VTOL은 고정익 모드에서는 유지 동작과 매개 변수는 "),e("a",{attrs:{href:"#fixed-wing-fw"}},[t._v("고정익")]),t._v("를 따르며, 멀티콥터 모드에서는 "),e("a",{attrs:{href:"#multi-copter-mc"}},[t._v("멀티콥터")]),t._v(" 매개 변수를 따릅니다.")])])}),[],!1,null,null,null);_.default=a.exports},326:function(t,_,v){t.exports=v.p+"assets/img/position_fixed.c1403cf0.svg"}}]);