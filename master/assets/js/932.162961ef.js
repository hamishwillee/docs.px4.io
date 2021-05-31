(window.webpackJsonp=window.webpackJsonp||[]).push([[932],{1889:function(t,_,v){"use strict";v.r(_);var a=v(19),e=Object(a.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"상태-추정자-전환"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#상태-추정자-전환"}},[t._v("#")]),t._v(" 상태 추정자 전환")]),t._v(" "),v("p",[t._v("이 페이지에서는 상태 추정자의 존재 여부를 확인하고 전환하는 방법을 보여줍니다.")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),v("p",[t._v("다용도 EKF2를 추천합니다 (LPE는 더이상 관리하거나 지원해주지 않음).")])]),t._v(" "),v("h2",{attrs:{id:"가용-추정자"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#가용-추정자"}},[t._v("#")]),t._v(" 가용 추정자")]),t._v(" "),v("p",[t._v("멀티로터 수직 이착륙기에서는 다음 설정 중 하나를 선택하도록 "),v("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SYS_MC_EST_GROUP"}},[t._v("SYS_MC_EST_GROUP")]),t._v(" 매개변수를 활용합니다(LPE는 고정익에서 지원하지 않음).")],1),t._v(" "),v("ul",[v("li",[v("strong",[t._v("EKF2 고도 위치 풍향/풍속 상태 추정자")]),t._v(" - EKF2는 고도, 3차원 위치 / 속도, 풍향/풍속 상태를 추정하는 확장 칼만 필터입니다.")]),t._v(" "),v("li",[v("strong",[t._v("LPE 위치 추정자")]),t._v(" - LPE 위치 추정자는 3차원 위치, 속도 상태를 추정하는 확장 칼만 필터입니다.")]),t._v(" "),v("li",[v("strong",[t._v("Q 고도 추정자")]),t._v("  - Q 고도 추정자는 매우 간단한 쿼터니언 기반 고도 보완 필터입니다.")])]),t._v(" "),v("h2",{attrs:{id:"각-추정자-활성-방법"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#각-추정자-활성-방법"}},[t._v("#")]),t._v(" 각 추정자 활성 방법")]),t._v(" "),v("p",[t._v("멀티로터 수직 이착륙기에서는 다음 설정 중 하나를 선택하도록 "),v("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SYS_MC_EST_GROUP"}},[t._v("SYS_MC_EST_GROUP")]),t._v(" 매개변수를 활용합니다(LPE는 고정익에서 지원하지 않음).")],1),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("SYS_MC_EST_GROUP")]),t._v(" "),v("th",[t._v("Q 추정자")]),t._v(" "),v("th",[t._v("LPE")]),t._v(" "),v("th",[t._v("EKF2")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("1")]),t._v(" "),v("td",[t._v("활성")]),t._v(" "),v("td",[t._v("활성")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("2")]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td",[t._v("활성")])]),t._v(" "),v("tr",[v("td",[t._v("0")]),t._v(" "),v("td",[t._v("활성")]),t._v(" "),v("td"),t._v(" "),v("td")])])]),t._v(" "),v("div",{staticClass:"custom-block note"},[v("p",{staticClass:"custom-block-title"},[t._v("FMU-v2를 사용할 경우(에만) PX4 빌드시 필요한 추정자를 따로 넣어야 합니다.(예: EKF2: `make px4_fmu-v2`, LPE: `make px4_fmu-v2_lpe`). FMU-v2에 두가지 추정자를 넣기에는 하드웨어 자원이 제한적이기 때문에 이와같은 설정이 필요합니다. 다른 픽스호크 FMU 버전에서는 둘 다 넣습니다.")])])])}),[],!1,null,null,null);_.default=e.exports}}]);