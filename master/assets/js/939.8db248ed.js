(window.webpackJsonp=window.webpackJsonp||[]).push([[939],{1903:function(t,_,e){"use strict";e.r(_);var a=e(18),r=Object(a.a)({},(function(){var t=this,_=t.$createElement,e=t._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"항공-교통-회피-uas-교통-관리-utm"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#항공-교통-회피-uas-교통-관리-utm"}},[t._v("#")]),t._v(" 항공 교통 회피 : UAS 교통 관리 (UTM)")]),t._v(" "),e("p",[t._v("PX4에서는 MAVLink "),e("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#UTM_GLOBAL_POSITION",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("UTM_GLOBAL_POSITION")]),e("OutboundLink")],1),t._v(" 메시지를 사용하여 "),e("RouterLink",{attrs:{to:"/ko/flight_modes/mission.html"}},[t._v("임무 수행")]),t._v("중 간단한 항공 교통 회피 기능을 지원할 수 있습니다. 잠재적 충돌이 감지되면 PX4는 "),e("a",{attrs:{href:"#NAV_TRAFF_AVOID"}},[e("code",[t._v("NAV_TRAFF_AVOID")])]),t._v("의 값에 따라 "),e("em",[t._v("경고")]),t._v(", 즉시 "),e("RouterLink",{attrs:{to:"/ko/flight_modes/land.html"}},[t._v("착륙")]),t._v(" 또는 "),e("RouterLink",{attrs:{to:"/ko/flight_modes/return.html"}},[t._v("귀환")]),t._v("할 수 있습니다.")],1),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[t._v("동작 방식은 "),e("RouterLink",{attrs:{to:"/ko/advanced_features/traffic_avoidance_adsb.html"}},[t._v("ADS-B 교통 회피")]),t._v("의 경우와 정확히 동일합니다 (다른 차량 데이터 소스 제외). 자세한 내용은 아래 "),e("a",{attrs:{href:"#implementation"}},[t._v("구현")]),t._v("을 참조하십시오.")],1)]),t._v(" "),e("h2",{attrs:{id:"사고-방지-설정"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#사고-방지-설정"}},[t._v("#")]),t._v(" 사고 방지 설정")]),t._v(" "),e("p",[t._v("아래의 매개변수들을 사용하여 잠재적 충돌이 있을 때 트리거 거리와 동작을 구성합니다.")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("매개변수")]),t._v(" "),e("th",[t._v("설명")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("a",{attrs:{id:"NAV_TRAFF_AVOID"}}),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#NAV_TRAFF_AVOID"}},[t._v("NAV_TRAFF_AVOID")])],1),t._v(" "),e("td",[t._v("교통 회피 모드 활성화는 회피 대응을 지정합니다. 0 : 비활성화, 1 : 경고만, 2 : 귀환 모드, 3 : 착륙 모드.")])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{id:"NAV_TRAFF_A_RADM"}}),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#NAV_TRAFF_A_RADM"}},[t._v("NAV_TRAFF_A_RADM")])],1),t._v(" "),e("td",[e("em",[t._v("유인")]),t._v(" 항공기에 대한 교통 회피 트리거 거리 설정.")])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{id:"NAV_TRAFF_A_RADU"}}),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#NAV_TRAFF_A_RADU"}},[t._v("NAV_TRAFF_A_RADU")])],1),t._v(" "),e("td",[e("em",[t._v("무인")]),t._v(" 항공기에 대한 교통 회피 트리거 거리 설정.")])])])]),t._v(" "),e("h2",{attrs:{id:"구현"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#구현"}},[t._v("#")]),t._v(" 구현")]),t._v(" "),e("p",[t._v("PX4는 임무중에 "),e("code",[t._v("UTM_GLOBAL_POSITION")]),t._v(" MAVLink 메시지를 수신합니다. 유효한 메시지가 수신되면, 유효성 플래그, 위치 및 제목이 "),e("em",[t._v("ADS-B 트래픽 회피")]),t._v("에 사용되는 동일한 "),e("code",[t._v("transponder_report")]),t._v(" UORB 주제에 매핑됩니다.")]),t._v(" "),e("p",[t._v("구현은 "),e("RouterLink",{attrs:{to:"/ko/advanced_features/traffic_avoidance_adsb.html#implementation"}},[t._v("ADS-B 트래픽 회피 > 구현")]),t._v("에 기술한 바와 같이 "),e("em",[t._v("정확히")]),t._v(" 구현됩니다.")],1),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#UTM_GLOBAL_POSITION",target:"_blank",rel:"noopener noreferrer"}},[t._v("UTM_GLOBAL_POSITION"),e("OutboundLink")],1),t._v("에는 ADSB 응답기에서 제공하지 않는 추가 필드가 포함되어 있습니다 ("),e("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#ADSB_VEHICLE",target:"_blank",rel:"noopener noreferrer"}},[t._v("ADSB_VEHICLE"),e("OutboundLink")],1),t._v(" 참조). 현재 구현에서는 단순히 추가 필드 (차량의 계획된 다음 웨이포인트에 대한 정보 포함)를 삭제합니다.")])]),t._v(" "),e("h2",{attrs:{id:"추가-정보"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#추가-정보"}},[t._v("#")]),t._v(" 추가 정보")]),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/ko/advanced_features/traffic_avoidance_adsb.html"}},[t._v("ADS-B 교통 회피")])],1)])])}),[],!1,null,null,null);_.default=r.exports}}]);