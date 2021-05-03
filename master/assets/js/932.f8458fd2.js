(window.webpackJsonp=window.webpackJsonp||[]).push([[932],{1889:function(t,e,a){"use strict";a.r(e);var _=a(18),r=Object(_.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"착륙-감지기-설정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#착륙-감지기-설정"}},[t._v("#")]),t._v(" 착륙 감지기 설정")]),t._v(" "),a("p",[t._v("착륙 감지기는 접지 및 착륙 상태의 모든 기체 핵심 상태를 나타내는 동적 기체 모델입니다. 이 주제에서는 기체의 착륙 활동을 개선하는 용도로 미세 조정할 수 있는 주요 매개변수를 설명합니다.")]),t._v(" "),a("h2",{attrs:{id:"자동으로-시동-끄기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#자동으로-시동-끄기"}},[t._v("#")]),t._v(" 자동으로 시동 끄기")]),t._v(" "),a("p",[t._v("기체가 착륙하면 착륙 감지기에서 자동으로 시동을 끕니다.")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_DISARM_LAND"}},[t._v(" COM_DISARM_LAND")]),t._v("를 설정하여 착륙 후 시스템의 시동이 꺼지는 시간(초)을 지정할 수 있습니다.(파라미터를 -1로 설정하여 자동으로 시동을 끄지 않을 수 있음).")],1),t._v(" "),a("h2",{attrs:{id:"멀티콥터-구성"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#멀티콥터-구성"}},[t._v("#")]),t._v(" 멀티콥터 구성")]),t._v(" "),a("p",[t._v("착륙 감지기 관련 매개변수는 접두사 "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#land-detector"}},[t._v("LNDMC")]),t._v("가 붙어 있습니다(QGroundControl의 "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameters.html"}},[t._v("매개변수 편집기")]),t._v("에서 수정할 수 있습니다).")],1),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("매개변수의 착륙 영향 관련 내용은 "),a("a",{attrs:{href:"#states"}},[t._v("착륙 감지 상태")]),t._v("에서 살펴볼 수 있습니다.")])]),t._v(" "),a("p",[t._v("각 기체에서 착륙 동작을 개선할 목적으로 미세 조정해야 할 기타 핵심 매개변수는 다음과 같습니다:")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_THR_HOVER"}},[t._v("MPC_THR_HOVER")]),t._v(" - 시스템의 공중부양 추진력(기본값 50%). 고도를 좀 더 정확하게 제어하고 올바른 착륙 감지를 보장하도록 이 매개변수를 제대로 설정하는게 중요합니다. 적재 장치가 없는 레이서 또는 대형 카메라 드론은 좀 더 낮은 값을 설정해야합니다(예: 35%).")],1)]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("부정확한 "),a("code",[t._v("MPC_THR_HOVER")]),t._v("설정은 지면과의 접촉이나 공중에 있을 때에 maybe-landed detection을 유발할 수 있습니다.(특히 "),a("RouterLink",{attrs:{to:"/ko/flight_modes/position_mc.html"}},[t._v("Position 모드")]),t._v("나 "),a("RouterLink",{attrs:{to:"/ko/flight_modes/altitude_mc.html"}},[t._v("Altitude 모드")]),t._v('일 때 그렇습니다.) 이 현상은 기체의 "요동"(모터를 껐다가 즉시 모터가 켜지는) 현상을 유발합니다.')],1)]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_THR_MIN"}},[t._v("MPC_THR_MIN")]),t._v(" - 시스템의 전체 최소 추진력. 이 설정 값으로 제어 강하를 할 수 있어야 합니다.")],1)]),t._v(" "),a("h2",{attrs:{id:"고정익-구성"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#고정익-구성"}},[t._v("#")]),t._v(" 고정익 구성")]),t._v(" "),a("p",[t._v("모든 관련 매개변수는 "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#land-detector"}},[t._v("LNDFW")]),t._v(" 접두어가 붙어있습니다. 아래 매개변수 두가지는 때에 따라 약간 조정하시는게 좋습니다:")],1),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#LNDFW_AIRSPD_MAX"}},[t._v("LNDFW_AIRSPD_MAX")]),t._v(" -시스템이 여전히 착륙했다고 간주할 수 있는 최대 항속. 기본값 8m/s는 대기속도 센서의 정확도와 착륙 감지기의 시작을 안정적으로 절충합니다. 좋은 대기속도 센서는 이 파라미터 값을 낮출 수 있게 합니다.")],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#LNDFW_VEL_XY_MAX"}},[t._v("LNDFW_VEL_XY_MAX ")]),t._v(" - 시스템이 착륙하는 것으로 간주되는 최대 수평 속도")],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#LNDFW_VEL_XY_MAX"}},[t._v("LNDFW_VEL_Z_MAX")]),t._v("-시스템이 착륙한 것으로 간주되는 최대 수직 속도. 이 파라미터는 착륙 감지 시작을 조금 더 빠르거나 느리도록 조절하거나, 기체를 손으로 던져서 날릴 때 사용할 수 있습니다.")],1)]),t._v(" "),a("p",[a("span",{attrs:{id:"states"}})]),t._v(" "),a("h2",{attrs:{id:"착륙-감지기-상태"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#착륙-감지기-상태"}},[t._v("#")]),t._v(" 착륙 감지기 상태")]),t._v(" "),a("h3",{attrs:{id:"멀티콥터-착륙-감지"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#멀티콥터-착륙-감지"}},[t._v("#")]),t._v(" 멀티콥터 착륙 감지")]),t._v(" "),a("p",[t._v("In order to detect landing, the multicopter first has to go through three different states, where each state contains the conditions from the previous states plus tighter constraints. If a condition cannot be reached because of missing sensors, then the condition is true by default. For instance, in "),a("RouterLink",{attrs:{to:"/ko/flight_modes/acro_mc.html"}},[t._v("Acro mode")]),t._v(" and no sensor is active except for the gyro sensor, then the detection solely relies on thrust output and time.")],1),t._v(" "),a("p",[t._v("In order to proceed to the next state, each condition has to be true for some predefined time. If one condition fails, the land detector drops out of the current state immediately.")]),t._v(" "),a("h4",{attrs:{id:"접지"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#접지"}},[t._v("#")]),t._v(" 접지")]),t._v(" "),a("p",[t._v("다음 조건이 0.35초 동안 참이면 이 상태에 도달합니다:")]),t._v(" "),a("ul",[a("li",[t._v("수직 방향으로 움직임이 없음 ("),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#LNDMC_Z_VEL_MAX"}},[t._v("LNDMC_Z_VEL_MAX")]),t._v(")")],1),t._v(" "),a("li",[t._v("수평 방향으로 움직임이 없음 ("),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#LNDMC_XY_VEL_MAX"}},[t._v("LNDMC_XY_VEL_MAX")]),t._v(")")],1),t._v(" "),a("li",[t._v("lower thrust than "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_THR_MIN"}},[t._v("MPC_THR_MIN")]),t._v(" + ("),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_THR_HOVER"}},[t._v("MPC_THR_HOVER")]),t._v(" - "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_THR_MIN"}},[t._v("MPC_THR_MIN")]),t._v(") * (0.3, unless a hover thrust estimate is available, then 0.6), or velocity setpoint is 0.9 of land speed but vehicle has no vertical movement.")],1)]),t._v(" "),a("p",[t._v("If the vehicle is in position- or velocity-control and ground contact was detected, the position controller will set the thrust vector along the body x-y-axis to zero.")]),t._v(" "),a("h4",{attrs:{id:"착륙-예측"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#착륙-예측"}},[t._v("#")]),t._v(" 착륙 예측")]),t._v(" "),a("p",[t._v("다음 조건이 0.25초 동안 참이면 이 상태에 도달합니다:")]),t._v(" "),a("ul",[a("li",[t._v("접지 조건이 모두 참일 경우")]),t._v(" "),a("li",[t._v("기체 회전이 없을 경우 ("),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#LNDMC_ROT_MAX"}},[t._v("LNDMC_ROT_MAX")]),t._v(")")],1),t._v(" "),a("li",[t._v("추력이 "),a("code",[t._v("MPC_THR_MIN + (MPC_THR_HOVER - MPC_THR_MIN) * 0.1")]),t._v("보다 낮을 경우")])]),t._v(" "),a("p",[t._v("If the vehicle only has knowledge of thrust and angular rate, in order to proceed to the next state the vehicle has to have low thrust and no rotation for 8.0 seconds.")]),t._v(" "),a("p",[t._v("If the vehicle is in position or velocity control and maybe landed was detected, the position controller will set the thrust vector to zero.")]),t._v(" "),a("h4",{attrs:{id:"착륙"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#착륙"}},[t._v("#")]),t._v(" 착륙")]),t._v(" "),a("p",[t._v("다음 조건이 0.3초 동안 참이면 이 상태에 도달합니다:")]),t._v(" "),a("ul",[a("li",[t._v("maybe landed 조건이 모두 참일 경우")])])])}),[],!1,null,null,null);e.default=r.exports}}]);