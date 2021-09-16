(window.webpackJsonp=window.webpackJsonp||[]).push([[1109],{2080:function(t,s,_){"use strict";_.r(s);var o=_(19),a=Object(o.a)({},(function(){var t=this,s=t.$createElement,_=t._self._c||s;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"정압-축적"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#정압-축적"}},[t._v("#")]),t._v(" 정압 축적")]),t._v(" "),_("p",[t._v("밀폐된 차량 위로 공기가 흐르면 캐노피/선체 내에서 "),_("em",[t._v("정압")]),t._v("이 변경될 수 있습니다. 선체의 구멍/누출 위치에 따라 저압 또는 과압 (날개와 유사)이 발생할 수 있습니다.")]),t._v(" "),_("p",[t._v("압력의 변화는 기압계 측정에 영향을 끼치므로, 고도 추정이 정확하지 않을 수 있습니다. 이것은 기체가 "),_("RouterLink",{attrs:{to:"/ko/flight_modes/altitude_mc.html"}},[t._v("고도")]),t._v(", "),_("RouterLink",{attrs:{to:"/ko/flight_modes/position_mc.html"}},[t._v("위치")]),t._v(" 또는 "),_("RouterLink",{attrs:{to:"/ko/flight_modes/mission.html"}},[t._v("미션")]),t._v(" 모드에서 이동을 멈출 때 고도를 잃는 것으로 나타날 수 있습니다(기체가 움직이지 않으면 정압이 떨어집니다. 센서는 더 높은 고도를 보고하고 기체는 하강하여 보상합니다).")],1),t._v(" "),_("p",[t._v("한 가지 해결책은 거품으로 채워진 환기 구멍을 사용하여 축적을 최소화한 다음 (가능한 한 많이) 동적 보정을 시도하여 나머지 효과를 제거하는 것입니다.")]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),_("p",[t._v('문제를 "수정"하기 전에 먼저 Z 설정점이 예상 고도를 추적하는지 확인하여야 합니다 (컨트롤러 문제가 없는 지 확인하기 위해).')])]),t._v(" "),_("div",{staticClass:"custom-block note"},[_("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),_("p",[t._v("고도 추정치에 필요한 기압계를 제거할 수 있지만(예 : GPS의 고도만 사용), 권장되지 않습니다. GPS는 많은 환경, 특히 건물에서 신호가 반사되는 도시 환경에서는 정확하지 않습니다.")])]),t._v(" "),_("h2",{attrs:{id:"기류-분석"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#기류-분석"}},[t._v("#")]),t._v(" 기류 분석")]),t._v(" "),_("p",[t._v("구멍을 뚫거나 폼으로 채워 선체를 수정할 수 있습니다.")]),t._v(" "),_("p",[t._v('이러한 변화를 분석하는 방법은 드론을 자동차에 장착하여 선체가 공기/바람에 노출된 상태에서 (상대적으로 평평한 표면에서) 주행하는 것입니다. 지상국을 살펴봄으로써 측정 고도에 대한 움직임으로 인한 정압 변화의 영향을 검토기능합니다(도로를 "지상 사실"로 사용).')]),t._v(" "),_("p",[t._v("이 프로세스는 배터리 소모없이 빠르게 반복(드론 수정, 운전/검토, 반복)할 수 있습니다.")]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),_("p",[t._v("아래의 소프트웨어 기반 보정을 시도하기 전에 최대 수평 속도에서 2 미터 미만의 기압계 고도 강하를 목표로합니다.")])]),t._v(" "),_("h2",{attrs:{id:"동적-보정"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#동적-보정"}},[t._v("#")]),t._v(" 동적 보정")]),t._v(" "),_("p",[t._v("하드웨어를 수정후 "),_("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_PCOEF_XN"}},[t._v("EKF2*PCOEF**")]),t._v(" 매개변수를 사용하여 상대 풍속을 기반으로 예상되는 기압계 변화를 조정할 수 있습니다. 자세한 내용은 "),_("RouterLink",{attrs:{to:"/ko/advanced_config/tuning_the_ecl_ekf.html#correction-for-static-pressure-position-error"}},[t._v("ECL/EKF 개요와 튜닝 > 정압 위치 오류 수정")]),t._v("을 참고하십시오.")],1),t._v(" "),_("div",{staticClass:"custom-block note"},[_("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),_("p",[t._v("이 접근법은 정압으로 인한 오류와 속도 사이의 관계가 선형적으로 변하는 경우에 원활하게 작동합니다. 기체에 복잡한 공기 역학 모델이 있으면 효율성이 떨어집니다.")])])])}),[],!1,null,null,null);s.default=a.exports}}]);