(window.webpackJsonp=window.webpackJsonp||[]).push([[774],{2660:function(t,e,_){"use strict";_.r(e);var o=_(19),i=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"유지-모드"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#유지-모드"}},[t._v("#")]),t._v(" 유지 모드")]),t._v(" "),o("p",[o("RouterLink",{attrs:{to:"/ko/getting_started/flight_modes.html#key_position_fixed"}},[o("img",{attrs:{src:_(327),title:"위치 고정 요구(예, GPS)",width:"30px"}})])],1),t._v(" "),o("p",[o("em",[t._v("유지")]),t._v(' 모드(예: "Loiter")는 기체의 현 위치와 고도를 유지합니다. 멀터콥터는 현 위치를 유지하며, 고정익은 현 위치 주변을 선회합니다.')]),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),o("p",[o("em",[t._v("유지 모드")]),t._v("를 사용하여 임무를 일시 중지하거나 비상시 기체를 제어합니다. 일반적으로 사전 프로그래밍 되어진 스위치로 작동시킵니다. :::")]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("ul",[o("li",[t._v("이 모드는 GPS가 필요합니다.")]),t._v(" "),o("li",[t._v("이 모드는 자동이며, 기체 제어에 사용자 개입이 "),o("em",[t._v("필요하지")]),t._v(" 않습니다.")]),t._v(" "),o("li",[t._v("RC 무선 조종기 스위치는 기체의 비행 모드를 변경할 수 있습니다.")]),t._v(" "),o("li",[t._v("멀티콥터와 VTOL 멀티콥터 모드에서 RC 스틱을 움직이면 위험한 배터리 안전 장치를 처리하지 않는 한 "),o("a",{attrs:{href:"#COM_RC_OVERRIDE"}},[t._v("기본적으로")]),t._v(" 기체는 "),o("RouterLink",{attrs:{to:"/ko/flight_modes/position_mc.html"}},[t._v("위치 모드")]),t._v("로 변경됩니다. :::")],1)]),t._v(" "),o("p",[t._v("기체 유형에 따른 기능의 상세 내용이 아래에 설명합니다.")]),t._v(" "),o("h2",{attrs:{id:"멀티코터-mc"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#멀티코터-mc"}},[t._v("#")]),t._v(" 멀티코터 (MC)")]),t._v(" "),o("p",[t._v("멀티콥터는 현재 위치와 고도에서 호버링합니다.")]),t._v(" "),o("p",[t._v("RC 스틱을 움직이면, 차량이 "),o("RouterLink",{attrs:{to:"/ko/flight_modes/position_mc.html"}},[t._v("위치 모드")]),t._v("("),o("a",{attrs:{href:"#COM_RC_OVERRIDE"}},[t._v("기본값")]),t._v(")로 변경됩니다.")],1),t._v(" "),o("p",[t._v("아래의 매개 변수를 사용하여 동작을 설정할 수 있습니다.")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("매개변수")]),t._v(" "),o("th",[t._v("설명")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[o("a",{attrs:{id:"NAV_MIN_LTR_ALT"}}),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#NAV_MIN_LTR_ALT"}},[t._v("NAV_MIN_LTR_ALT")])],1),t._v(" "),o("td",[t._v("This is the minimum altitude above Home the system will always obey in Loiter (Hold) mode if switched into this mode without specifying an altitude (e.g. through Loiter switch on RC).")])])])]),t._v(" "),o("p",[o("span",{attrs:{id:"COM_RC_OVERRIDE"}}),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_RC_OVERRIDE"}},[t._v("COM_RC_OVERRIDE")]),t._v(" | Controls whether stick movement on a multicopter (or VTOL in MC mode) causes a mode change to "),o("RouterLink",{attrs:{to:"/ko/flight_modes/position_mc.html"}},[t._v("Position mode")]),t._v(". 자동 모드와 오프보드 모드에 대해 별도로 활성화할 수 있으며, 기본적으로 자동 모드에서 활성화됩니다. "),o("span",{attrs:{id:"COM_RC_STICK_OV"}}),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_RC_STICK_OV"}},[t._v("COM_RC_STICK_OV")]),t._v(" | The amount of stick movement that causes a transition to "),o("RouterLink",{attrs:{to:"/ko/flight_modes/position_mc.html"}},[t._v("Position mode")]),t._v(" (if "),o("a",{attrs:{href:"#COM_RC_OVERRIDE"}},[t._v("COM_RC_OVERRIDE")]),t._v(" is enabled).")],1),t._v(" "),o("h2",{attrs:{id:"fixed-wing-fw"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#fixed-wing-fw"}},[t._v("#")]),t._v(" Fixed-wing (FW)")]),t._v(" "),o("p",[t._v("비행기는 현재 고도에서 GPS 유지 위치를 중심으로 선회한다. The vehicle will first ascend to "),o("code",[t._v("NAV_MIN_LTR_ALT")]),t._v(" if the mode is engaged below this altitude (by default disabled).")]),t._v(" "),o("p",[t._v("RC 스틱 이동은 무시됩니다.")]),t._v(" "),o("p",[t._v("아래의 매개 변수를 사용하여 동작을 설정할 수 있습니다.")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("매개변수")]),t._v(" "),o("th",[t._v("설명")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#NAV_LOITER_RAD"}},[t._v("NAV_LOITER_RAD")])],1),t._v(" "),o("td",[t._v("배회 원의 반경")])]),t._v(" "),o("tr",[o("td",[o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#NAV_MIN_LTR_ALT"}},[t._v("NAV_MIN_LTR_ALT")])],1),t._v(" "),o("td",[t._v("정지기 모드의 최소 높이(모드가 더 낮은 고도에서 작동하면 기체가 이 고도로 상승함).")])])])]),t._v(" "),o("h2",{attrs:{id:"vtol"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#vtol"}},[t._v("#")]),t._v(" VTOL")]),t._v(" "),o("p",[t._v("A VTOL follows the HOLD behavior and parameters of "),o("a",{attrs:{href:"#fixed-wing-fw"}},[t._v("Fixed-wing")]),t._v(" when in FW mode, and of "),o("a",{attrs:{href:"#multi-copter-mc"}},[t._v("Multicopter")]),t._v(" when in MC mode.")])])])])}),[],!1,null,null,null);e.default=i.exports},327:function(t,e,_){t.exports=_.p+"assets/img/position_fixed.c1403cf0.svg"}}]);