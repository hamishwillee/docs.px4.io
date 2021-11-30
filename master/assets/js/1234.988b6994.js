(window.webpackJsonp=window.webpackJsonp||[]).push([[1234],{2337:function(t,_,v){"use strict";v.r(_);var s=v(19),a=Object(s.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"고정익-이륙"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#고정익-이륙"}},[t._v("#")]),t._v(" 고정익 이륙")]),t._v(" "),v("p",[t._v("PX4는 "),v("a",{attrs:{href:"#mission-takeoff"}},[t._v("임무")]),t._v("와 "),v("a",{attrs:{href:"#takeoff-flight-mode"}},[t._v("이륙")]),t._v(" 비행 모드에서 고정익 이륙을 지원합니다. 기체는 "),v("em",[t._v("투석기/수동 발사")]),t._v("를 사용하거나 활주로 이륙 모드를 사용할 수 있습니다. "),t._v("\nIn all cases the vehicle takes off at a predefined pitch in its current direction (RC stick input is ignored).")]),t._v(" "),v("p",[t._v("아래 섹션에서는 주요 방법을 설명합니다.")]),t._v(" "),v("h2",{attrs:{id:"위치-비행-모드"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#위치-비행-모드"}},[t._v("#")]),t._v(" 위치 비행 모드")]),t._v(" "),v("p",[t._v("기체를 "),v("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_CLMBOUT_DIFF"}},[t._v("FW_CLMBOUT_DIFF")]),t._v(" 이하의 고도에서 발사했을 때, 충분한 발사 가속을 감지하면 "),v("RouterLink",{attrs:{to:"/ko/flight_modes/position_fw.html"}},[t._v("위치 모드")]),t._v("에서 이륙합니다.")],1),t._v(" "),v("p",[t._v("이 모드에서 시작하려면 :")]),t._v(" "),v("ul",[v("li",[t._v("기체의 시동을 겁니다.")]),t._v(" "),v("li",[t._v("기체를 "),v("em",[t._v("위치 모드")]),t._v("로 설정합니다.")]),t._v(" "),v("li",[t._v("기체를 공중에 던져서 발사합니다.")])]),t._v(" "),v("p",[t._v("기체는 "),v("a",{attrs:{href:"#takeoff-flight-mode"}},[t._v("이륙 모드")]),t._v("와 동일한 상승 동작을 사용하여 "),v("code",[t._v("FW_CLMBOUT_DIFF")]),t._v("로 상승합니다. 그런 다음 "),v("em",[t._v("포지션 모드")]),t._v("에서 계속 동작합니다.")]),t._v(" "),v("h2",{attrs:{id:"비행-모드에서-이륙"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#비행-모드에서-이륙"}},[t._v("#")]),t._v(" 비행 모드에서 이륙")]),t._v(" "),v("p",[v("RouterLink",{attrs:{to:"/ko/flight_modes/takeoff.html#fixed_wing"}},[t._v("이륙 모드")]),t._v("는 "),v("em",[t._v("투석기/수동 발사")]),t._v(" (기본값) 또는 "),v("em",[t._v("활주로 이륙")]),t._v("을 사용하여 이륙 할 수 있습니다.")],1),t._v(" "),v("h3",{attrs:{id:"투석기-수공-발사-모드"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#투석기-수공-발사-모드"}},[t._v("#")]),t._v(" 투석기/수공 발사 모드")]),t._v(" "),v("p",[t._v("시동후에 이륙 모드이면 기체는 발사를 감지하기 위해 대기합니다 (예 : 투석기 또는 손 발사로 인한 가속). 발사 감지시 기체는 약 2 초 만에 최대 스로틀("),v("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RWTO_MAX_THR"}},[t._v("RWTO_MAX_THR")]),t._v(")까지 상승한 다음 10도 피치에서 최대 스로틀 상승을 수행합니다. 기체 상승 단계는 차량이 올바른 고도("),v("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_CLMBOUT_DIFF"}},[t._v("FW_CLMBOUT_DIFF")]),t._v("로 정의 됨)에 도달하면 종료되며, 그 후에는 일반 내비게이션이 진행됩니다. 모든 RC 스틱의 조작은 상승이 끝날 때까지 무시됩니다.")],1),t._v(" "),v("div",{staticClass:"custom-block warning"},[v("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),v("p",[t._v("기본 상승 피치는 일부 기체에 적합하지 않을 수 있습니다. ")])]),t._v(" "),v("p",[t._v("이 모드에서 발사하려면:")]),t._v(" "),v("ul",[v("li",[t._v("기체의 시동을 겁니다.")]),t._v(" "),v("li",[t._v("기체를 "),v("em",[t._v("위치 모드")]),t._v("로 설정합니다.")]),t._v(" "),v("li",[t._v("기체를 공중에 던져서 발사합니다.")])]),t._v(" "),v("div",{staticClass:"custom-block note"},[v("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),v("p",[t._v("대부분의 기존 고정익 차량은 놓을 때 평평하고 수평을 유지해야합니다 (기수가 위 또는 아래로 있지 않고 차량이 구르거나 요잉하지 않는 것이 중요합니다).")])]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),v("p",[t._v("일부 사용자는 발사 감지를 사전 트리거하고 발사 전에 최대 스로틀을 램핑하여 이륙 성능을 개선했다고보고합니다 (발사 감지 펌프를 트리거하거나 기체를 앞으로 흔들기 위해).")])]),t._v(" "),v("h3",{attrs:{id:"활주로-이륙"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#활주로-이륙"}},[t._v("#")]),t._v(" 활주로 이륙")]),t._v(" "),v("p",[t._v("활주로 이륙 모드는 "),v("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RWTO_TKOFF"}},[t._v("RWTO_TKOFF")]),t._v("를 사용합니다.")],1),t._v(" "),v("p",[t._v("모드는 "),v("RouterLink",{attrs:{to:"/ko/flight_modes/takeoff.html#runway_launch"}},[t._v("이륙 모드 > 고정익 > 활주로 이륙")]),t._v(" 입니다.")],1),t._v(" "),v("h2",{attrs:{id:"임무-이륙"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#임무-이륙"}},[t._v("#")]),t._v(" 임무 이륙")]),t._v(" "),v("p",[t._v("미션 모드에서 고정익 차량을 손/투석기로 발사할 수도 있습니다.")]),t._v(" "),v("p",[t._v("미션 모드에서 발사하려면:")]),t._v(" "),v("ol",[v("li",[t._v("임무 "),v("strong",[t._v("시작")]),t._v("에 고정 날개 이륙 항목을 추가합니다.")])]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),v("p",[t._v("이륙 항목 최소 피치 매개 변수를 기체에 적합한 값으로 설정하십시오!")])]),t._v(" "),v("ol",[v("li",[t._v("임무 모드로 전환합니다.")]),t._v(" "),v("li",[t._v("기체의 시동을 겁니다.")]),t._v(" "),v("li",[t._v("기체를 공중에 던져서 발사합니다.")])]),t._v(" "),v("div",{staticClass:"custom-block note"},[v("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),v("p",[t._v("대부분의 기존 고정익 차량은 놓을 때 평평하고 수평을 유지해야합니다 (기수가 위 또는 아래로 있지 않고 차량이 구르거나 요잉하지 않는 것이 중요합니다).")])]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),v("p",[t._v("일부 사용자는 발사 감지를 사전 트리거하고 발사 전에 최대 스로틀을 램핑하여 이륙 성능을 개선했다고보고합니다 (발사 감지 펌프를 트리거하거나 기체를 앞으로 흔들기 위해).")])]),t._v(" "),v("p",[t._v("이륙/비행이 감지되면 기체가 상승한 다음에(이륙 웨이 포인트의 최소 피치 매개 변수 사용) 이륙 웨이포인트 위치로 이동합니다. 이륙 웨이포인트 고도 아래 "),v("code",[t._v("FW_CLMBOUT_DIFF")]),t._v("에 도달할 때까지 계속 상승합니다 (이 고도에 도달하기 전에 목표 웨이 포인트에 도달하면이 수준까지 올라갑니다).")]),t._v(" "),v("div",{staticClass:"custom-block note"},[v("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),v("p",[t._v("롤 각도는 상승하는 동안 최대 15도로 제한됩니다 ("),v("code",[t._v("FW_CLMBOUT_DIFF > 0")]),t._v("이고, 이륙 고도까지의 거리는 "),v("code",[t._v("FW_CLMBOUT_DIFF")]),t._v(" 이상입니다).")])]),t._v(" "),v("p",[t._v("임무는 고도("),v("code",[t._v("FW_CLMBOUT_DIFF")]),t._v(" 이내) 및 위치에 도달하면 다음 웨이포인트로 전환됩니다.")])])}),[],!1,null,null,null);_.default=a.exports}}]);