(window.webpackJsonp=window.webpackJsonp||[]).push([[1388],{2541:function(t,e,s){"use strict";s.r(e);var o=s(19),i=Object(o.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"정압-축적"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#정압-축적"}},[t._v("#")]),t._v(" 정압 축적")]),t._v(" "),s("p",[t._v("Air flowing over an enclosed vehicle can cause the "),s("em",[t._v("static pressure")]),t._v(" to change within the canopy/hull. 선체의 구멍/누출 위치에 따라 저압 또는 과압 (날개와 유사)이 발생할 수 있습니다.")]),t._v(" "),s("p",[t._v("압력의 변화는 기압계 측정에 영향을 끼치므로, 고도 추정이 정확하지 않을 수 있습니다. This might manifest as the vehicle losing altitude when it stops moving in "),s("RouterLink",{attrs:{to:"/ko/flight_modes_mc/altitude.html"}},[t._v("Altitude")]),t._v(", "),s("RouterLink",{attrs:{to:"/ko/flight_modes_mc/position.html"}},[t._v("Position")]),t._v(" or "),s("RouterLink",{attrs:{to:"/ko/flight_modes/mission.html"}},[t._v("Mission")]),t._v(" modes (when the vehicle stops moving the static pressure drops, the sensor reports a higher altitude, and the vehicle compensates by descending).")],1),t._v(" "),s("p",[t._v("한 가지 해결책은 거품으로 채워진 환기 구멍을 사용하여 축적을 최소화한 다음 (가능한 한 많이) 동적 보정을 시도하여 나머지 효과를 제거하는 것입니다.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v('문제를 "수정"하기 전에 먼저 Z 설정점이 예상 고도를 추적하는지 확인하여야 합니다 (컨트롤러 문제가 없는 지 확인하기 위해).')])]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("고도 추정치에 필요한 기압계를 제거할 수 있지만(예 : GPS의 고도만 사용), 권장되지 않습니다.\nGPS는 많은 환경, 특히 건물에서 신호가 반사되는 도시 환경에서는 정확하지 않습니다.")])]),t._v(" "),s("h2",{attrs:{id:"기류-분석"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#기류-분석"}},[t._v("#")]),t._v(" 기류 분석")]),t._v(" "),s("p",[t._v("구멍을 뚫거나 폼으로 채워 선체를 수정할 수 있습니다.")]),t._v(" "),s("p",[t._v('이러한 변화를 분석하는 방법은 드론을 자동차에 장착하여 선체가 공기/바람에 노출된 상태에서 (상대적으로 평평한 표면에서) 주행하는 것입니다. 지상국을 살펴봄으로써 측정 고도에 대한 움직임으로 인한 정압 변화의 영향을 검토기능합니다(도로를 "지상 사실"로 사용).')]),t._v(" "),s("p",[t._v("이 프로세스는 배터리 소모없이 빠르게 반복(드론 수정, 운전/검토, 반복)할 수 있습니다.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("아래의 소프트웨어 기반 보정을 시도하기 전에 최대 수평 속도에서 2 미터 미만의 기압계 고도 강하를 목표로합니다.")])]),t._v(" "),s("h2",{attrs:{id:"동적-보정"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#동적-보정"}},[t._v("#")]),t._v(" 동적 보정")]),t._v(" "),s("p",[t._v("After modifying the hardware, you can then use the "),s("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_PCOEF_XN"}},[t._v("EKF2_PCOEF_*")]),t._v(" parameters to tune for expected barometer variation based on relative air velocity. 자세한 내용은 "),s("RouterLink",{attrs:{to:"/ko/advanced_config/tuning_the_ecl_ekf.html#correction-for-static-pressure-position-error"}},[t._v("ECL/EKF 개요와 튜닝 > 정압 위치 오류 수정")]),t._v("을 참고하십시오.")],1),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("이 접근법은 정압으로 인한 오류와 속도 사이의 관계가 선형적으로 변하는 경우에 원활하게 작동합니다.\n기체에 복잡한 공기 역학 모델이 있으면 효율성이 떨어집니다.")])])])}),[],!1,null,null,null);e.default=i.exports}}]);