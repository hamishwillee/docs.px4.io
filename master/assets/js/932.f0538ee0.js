(window.webpackJsonp=window.webpackJsonp||[]).push([[932],{1901:function(t,_,v){"use strict";v.r(_);var a=v(19),s=Object(a.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"상태-추정기-전환"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#상태-추정기-전환"}},[t._v("#")]),t._v(" 상태 추정기 전환")]),t._v(" "),v("p",[t._v("어떤 상태 추정기를 사용할 수 있고 어떻게 전환할 수 있는 지를 설명합니다.")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),v("p",[t._v("다용도 EKF2를 추천합니다 (LPE는 더이상 관리하거나 지원해주지 않음).")])]),t._v(" "),v("h2",{attrs:{id:"가용-추정기"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#가용-추정기"}},[t._v("#")]),t._v(" 가용 추정기")]),t._v(" "),v("p",[t._v("사용 가능한 추정기는 다음과 같습니다.")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("EKF2 고도 위치 풍향/풍속 상태 추정기")]),t._v(" - EKF2는 고도, 3차원 위치 / 속도, 풍향/풍속 상태를 추정하는 확장 칼만 필터입니다.")]),t._v(" "),v("li",[v("strong",[t._v("LPE 위치 추정기")]),t._v(" - LPE 위치 추정기는 3차원 위치, 속도 상태를 추정하는 확장 칼만 필터입니다.")]),t._v(" "),v("li",[v("strong",[t._v("Q 고도 추정기")]),t._v("  - Q 고도 추정기는 매우 간단한 쿼터니언 기반 고도 보완 필터입니다.")])]),t._v(" "),v("h2",{attrs:{id:"다양한-추정기-활성화-방법"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#다양한-추정기-활성화-방법"}},[t._v("#")]),t._v(" 다양한 추정기 활성화 방법")]),t._v(" "),v("p",[t._v("멀티콥터와 VTOL은 "),v("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SYS_MC_EST_GROUP"}},[t._v("SYS_MC_EST_GROUP")]),t._v(" 매개변수를 사용하여 설정합니다(고정 익에는 LPE가 지원되지 않음).")],1),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("SYS_MC_EST_GROUP")]),t._v(" "),v("th",[t._v("Q 추정기")]),t._v(" "),v("th",[t._v("LPE")]),t._v(" "),v("th",[t._v("EKF2")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("1")]),t._v(" "),v("td",[t._v("활성")]),t._v(" "),v("td",[t._v("활성")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("2")]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td",[t._v("활성")])]),t._v(" "),v("tr",[v("td",[t._v("3")]),t._v(" "),v("td",[t._v("활성")]),t._v(" "),v("td"),t._v(" "),v("td")])])]),t._v(" "),v("div",{staticClass:"custom-block note"},[v("p",{staticClass:"custom-block-title"},[t._v("FMU-v2(전용)의 경우에는 필요한 추정기를 포함하도록 PX4를 빌드하여야 합니다(예: EKF2: `make px4_fmu-v2`, LPE: `make px4_fmu-v2_lpe`). 이는 FMU-v2가 두 추정기를 모두 포함하기에는 리소스가 너무 제한되어 있기 때문입니다. 다른 Pixhawk FMU 버전에는 둘 다 포함되어 있습니다.")])])])}),[],!1,null,null,null);_.default=s.exports}}]);