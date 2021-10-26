(window.webpackJsonp=window.webpackJsonp||[]).push([[1124],{2100:function(_,t,e){"use strict";e.r(t);var a=e(19),r=Object(a.a)({},(function(){var _=this,t=_.$createElement,e=_._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[e("h1",{attrs:{id:"착륙-감지기-설정"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#착륙-감지기-설정"}},[_._v("#")]),_._v(" 착륙 감지기 설정")]),_._v(" "),e("p",[_._v("착륙 감지기는 접지와 착륙 상태에서 기체의 핵심 상태를 나타내는 동적 기체 모델입니다. 이 섹션에서는 기체의 착륙 활동을 개선하는 용도로 미세 조정 가능한 주요 매개변수를 설명합니다.")]),_._v(" "),e("h2",{attrs:{id:"자동-시동-끄기"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#자동-시동-끄기"}},[_._v("#")]),_._v(" 자동 시동 끄기")]),_._v(" "),e("p",[_._v("기체가 착륙하면 착륙 감지기에서 자동으로 시동을 끕니다.")]),_._v(" "),e("p",[e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_DISARM_LAND"}},[_._v(" COM_DISARM_LAND")]),_._v("를 설정하여 착륙 후 시스템의 시동이 꺼지는 시간(초)을 지정할 수 있습니다.(파라미터를 -1로 설정하여 자동으로 시동을 끄지 않을 수 있음).")],1),_._v(" "),e("h2",{attrs:{id:"멀티콥터-설정"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#멀티콥터-설정"}},[_._v("#")]),_._v(" 멀티콥터 설정")]),_._v(" "),e("p",[_._v("착륙 감지기 관련 매개변수는 접두사 "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#land-detector"}},[_._v("LNDMC")]),_._v("가 붙어 있습니다(QGroundControl의 "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameters.html"}},[_._v("매개변수 편집기")]),_._v("에서 수정 가능합니다).")],1),_._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[_._v("TIP")]),_._v(" "),e("p",[_._v("착륙 관련 매개변수들은 "),e("a",{attrs:{href:"#states"}},[_._v("착륙 감지 상태")]),_._v("편을 참고하십시오.")])]),_._v(" "),e("p",[_._v("각 기체에서 착륙 동작 개선용 미세 조정 핵심 매개변수는 다음과 같습니다:")]),_._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_THR_HOVER"}},[_._v("MPC_THR_HOVER")]),_._v(" - 시스템의 공중부양 추진력(기본값 50%). 고도를 정확하게 제어하고 올바른 착륙 감지를 보장하도록 이 매개변수를 정확하게 설정하여야 합니다. 적재 장치가 없는 레이서 또는 대형 카메라 드론은 좀 더 낮은 값을 설정하여야 합니다(예: 35%).")],1)]),_._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[_._v("Note")]),_._v(" "),e("p",[_._v("부정확한 "),e("code",[_._v("MPC_THR_HOVER")]),_._v("설정은 지면과의 접촉이나 공중에 있을 때에 maybe-landed detection을 유발할 수 있습니다.(특히 "),e("RouterLink",{attrs:{to:"/ko/flight_modes/position_mc.html"}},[_._v("위치 모드")]),_._v("나 "),e("RouterLink",{attrs:{to:"/ko/flight_modes/altitude_mc.html"}},[_._v("고도 모드")]),_._v('에서 그렇습니다.) 이 현상은 기체의 "요동"(모터를 껐다가 즉시 모터가 켜지는) 현상을 유발합니다.')],1)]),_._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_THR_MIN"}},[_._v("MPC_THR_MIN")]),_._v(" - 시스템의 전체 최소 추진력. 제어 하강을 가능하게하기 위하여 설정되어야 합니다.")],1)]),_._v(" "),e("h2",{attrs:{id:"고정익-설정"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#고정익-설정"}},[_._v("#")]),_._v(" 고정익 설정")]),_._v(" "),e("p",[_._v("관련 매개변수는 "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#land-detector"}},[_._v("LNDFW")]),_._v(" 접두어가 붙어있습니다. 아래의 두 개의 매개변수는 수시로 약간씩 튜닝하는 것이 좋습니다.")],1),_._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#LNDFW_AIRSPD_MAX"}},[_._v("LNDFW_AIRSPD_MAX")]),_._v(" -시스템이 여전히 착륙했다고 간주할 수 있는 최대 항속. 기본값 8m/s는 대기속도 센서의 정확도와 착륙 감지기의 시작을 안정적으로 절충합니다. 좋은 대기속도 센서는 이 파라미터 값을 낮출 수 있게 합니다.")],1),_._v(" "),e("li",[e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#LNDFW_VEL_XY_MAX"}},[_._v("LNDFW_VEL_XY_MAX ")]),_._v(" - 시스템이 착륙하는 것으로 간주되는 최대 수평 속도")],1),_._v(" "),e("li",[e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#LNDFW_VEL_XY_MAX"}},[_._v("LNDFW_VEL_Z_MAX")]),_._v("-시스템이 착륙한 것으로 간주되는 최대 수직 속도. 이 파라미터는 착륙 감지 시작을 조금 더 빠르거나 느리도록 조절하거나, 기체를 손으로 던져서 날릴 때 사용할 수 있습니다.")],1)]),_._v(" "),e("p",[e("span",{attrs:{id:"states"}})]),_._v(" "),e("h2",{attrs:{id:"착륙-감지기-상태"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#착륙-감지기-상태"}},[_._v("#")]),_._v(" 착륙 감지기 상태")]),_._v(" "),e("h3",{attrs:{id:"멀티콥터-착륙-감지"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#멀티콥터-착륙-감지"}},[_._v("#")]),_._v(" 멀티콥터 착륙 감지")]),_._v(" "),e("p",[_._v("멀티콥터는 착륙 감지에 3개의 서로 다른 상태를 거치게 됩니다. 각각의 상태는 이전 상태의 조건에 더해 엄격한 제약조건을 가지게 됩니다. 센서 손실로 인해 조건이 만족되지 않는다면, 기본값으로 그 조건은 참이 됩니다. 예를 들어, "),e("RouterLink",{attrs:{to:"/ko/flight_modes/acro_mc.html"}},[_._v("곡예 모드")]),_._v("에서 자이로스코프 센서를 제외한 다른 센서가 활성화되지 않았으면, 착륙 감지는 추력 출력값과 시간에 의존합니다.")],1),_._v(" "),e("p",[_._v("다음 상태로 넘어가려면, 미리 정해진 시간동안 각 조건들이 참인 상태를 유지하여야 합니다. 만약에 조건중 하나라도 만족하지 않으면, 착륙 감지기는 즉시 현재 상태를 벗어납니다.")]),_._v(" "),e("h4",{attrs:{id:"접지"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#접지"}},[_._v("#")]),_._v(" 접지")]),_._v(" "),e("p",[_._v("아래의 조건들이 0.35초 동안 참이면 접지 상태에 도달합니다:")]),_._v(" "),e("ul",[e("li",[_._v("수직 방향으로 움직임이 없음 ("),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#LNDMC_Z_VEL_MAX"}},[_._v("LNDMC_Z_VEL_MAX")]),_._v(")")],1),_._v(" "),e("li",[_._v("수평 방향으로 움직임이 없음 ("),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#LNDMC_XY_VEL_MAX"}},[_._v("LNDMC_XY_VEL_MAX")]),_._v(")")],1),_._v(" "),e("li",[e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_THR_MIN"}},[_._v("MPC_THR_MIN")]),_._v(" + ("),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_THR_HOVER"}},[_._v("MPC_THR_HOVER")]),_._v("-"),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_THR_MIN"}},[_._v("MPC_THR_MIN")]),_._v(") * (0.3, 호버 추력 추정치를 사용할 수 없는 경우 0.6)나 속도 설정점보다 낮은 추력 지상 속도는 0.9이지만 기체의 수직 이동이 없습니다.")],1)]),_._v(" "),e("p",[_._v("기체가 위치나 속도 제어중에 지면 접촉을 감지하면, 위치 제어기는 기체의 x-y 축을 따르는 추력 벡터를 0으로 설정합니다.")]),_._v(" "),e("h4",{attrs:{id:"착륙-예측"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#착륙-예측"}},[_._v("#")]),_._v(" 착륙 예측")]),_._v(" "),e("p",[_._v("다음 조건이 0.25초 동안 참이면 착륙 예측 상태에 도달합니다:")]),_._v(" "),e("ul",[e("li",[_._v("접지 조건이 모두 참일 경우")]),_._v(" "),e("li",[_._v("기체 회전이 없을 경우 ("),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#LNDMC_ROT_MAX"}},[_._v("LNDMC_ROT_MAX")]),_._v(")")],1),_._v(" "),e("li",[_._v("추력이 "),e("code",[_._v("MPC_THR_MIN + (MPC_THR_HOVER - MPC_THR_MIN) * 0.1")]),_._v("보다 낮을 경우")])]),_._v(" "),e("p",[_._v("만약 기체가 추력과 각가속도만을 알고 있다면, 다음 상태로 진입하기 위해서는 기체의 추력이 낮아야 하고, 8초 동안 회전하지 않아야 합니다.")]),_._v(" "),e("p",[_._v("만약 기체가 위치나 속도 제어중에 착륙 예측 상태를 감지하면, 위치 제어기는 기체의 추력 벡터를 0으로 설정합니다.")]),_._v(" "),e("h4",{attrs:{id:"착륙"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#착륙"}},[_._v("#")]),_._v(" 착륙")]),_._v(" "),e("p",[_._v("다음 조건이 0.3초 동안 참이면 이 상태에 도달합니다:")]),_._v(" "),e("ul",[e("li",[_._v("착륙 예측 조건이 모두 참인 경우")])])])}),[],!1,null,null,null);t.default=r.exports}}]);