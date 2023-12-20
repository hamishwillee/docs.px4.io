(window.webpackJsonp=window.webpackJsonp||[]).push([[1408],{2545:function(t,e,a){"use strict";a.r(e);var o=a(19),r=Object(o.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"착륙-감지기-설정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#착륙-감지기-설정"}},[t._v("#")]),t._v(" 착륙 감지기 설정")]),t._v(" "),a("p",[t._v("착륙 감지기는 접지와 착륙 상태에서 기체의 핵심 상태를 나타내는 동적 기체 모델입니다. 이 섹션에서는 기체의 착륙 활동을 개선하는 용도로 미세 조정 가능한 주요 매개변수를 설명합니다.")]),t._v(" "),a("h2",{attrs:{id:"자동-시동-끄기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#자동-시동-끄기"}},[t._v("#")]),t._v(" 자동 시동 끄기")]),t._v(" "),a("p",[t._v("기체가 착륙하면 착륙 감지기에서 자동으로 시동을 끕니다.")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_DISARM_LAND"}},[t._v(" COM_DISARM_LAND")]),t._v("를 설정하여 착륙 후 시스템의 시동이 꺼지는 시간(초)을 지정할 수 있습니다.(파라미터를 -1로 설정하여 자동으로 시동을 끄지 않을 수 있음).")],1),t._v(" "),a("h2",{attrs:{id:"멀티콥터-설정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#멀티콥터-설정"}},[t._v("#")]),t._v(" 멀티콥터 설정")]),t._v(" "),a("p",[t._v("착륙 감지기 관련 매개변수는 접두사 "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#land-detector"}},[t._v("LNDMC")]),t._v("가 붙어 있습니다(QGroundControl의 "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameters.html"}},[t._v("매개변수 편집기")]),t._v("에서 수정 가능합니다).")],1),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("Information about how the parameters affect landing can be found below in "),a("a",{attrs:{href:"#mc-land-detector-states"}},[t._v("Land Detector States")]),t._v(".")])]),t._v(" "),a("p",[t._v("각 기체에서 착륙 동작 개선용 미세 조정 핵심 매개변수는 다음과 같습니다:")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_THR_HOVER"}},[t._v("MPC_THR_HOVER")]),t._v(" - 시스템의 공중부양 추진력(기본값 50%). 고도를 정확하게 제어하고 올바른 착륙 감지를 보장하도록 이 매개변수를 정확하게 설정하여야 합니다. 적재 장치가 없는 레이서 또는 대형 카메라 드론은 좀 더 낮은 값을 설정하여야 합니다(예: 35%).")],1)]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("Incorrectly setting "),a("code",[t._v("MPC_THR_HOVER")]),t._v(" may result in ground-contact or maybe-landed detection while still in air (in particular, while descending in "),a("RouterLink",{attrs:{to:"/ko/flight_modes_mc/position.html"}},[t._v("Position mode")]),t._v(" or "),a("RouterLink",{attrs:{to:"/ko/flight_modes_mc/altitude.html"}},[t._v("Altitude mode")]),t._v('). 이 현상은 기체의 "요동"(모터를 껐다가 즉시 모터가 켜지는) 현상을 유발합니다.')],1)]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_THR_MIN"}},[t._v("MPC_THR_MIN")]),t._v(" - 시스템의 전체 최소 추진력. 제어 하강을 가능하게하기 위하여 설정되어야 합니다.")],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_LAND_CRWL"}},[t._v("MPC_LAND_CRWL")]),t._v(" - the vertical speed applied in the last stage of autonomous landing if the system has a distance sensor and it is present and working. Has to be set larger than LNDMC_Z_VEL_MAX.")],1)]),t._v(" "),a("h3",{attrs:{id:"mc-land-detector-states"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mc-land-detector-states"}},[t._v("#")]),t._v(" MC Land Detector States")]),t._v(" "),a("p",[t._v("멀티콥터는 착륙 감지에 3개의 서로 다른 상태를 거치게 됩니다. 각각의 상태는 이전 상태의 조건에 더해 엄격한 제약조건을 가지게 됩니다. 센서 손실로 인해 조건이 만족되지 않는다면, 기본값으로 그 조건은 참이 됩니다. For instance, in "),a("RouterLink",{attrs:{to:"/ko/flight_modes_mc/acro.html"}},[t._v("Acro mode")]),t._v(" and no sensor is active except for the gyro sensor, then the detection solely relies on thrust output and time.")],1),t._v(" "),a("p",[t._v("In order to proceed to the next state, each condition has to be true for a third of the configured total land detector trigger time "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#LNDMC_TRIG_TIME"}},[t._v("LNDMC_TRIG_TIME")]),t._v(". If the vehicle is equipped with a distance sensor, but the distance to ground is currently not measurable (usually because it is too large), the trigger time is increased by a factor of 3.")],1),t._v(" "),a("p",[t._v("만약에 조건중 하나라도 만족하지 않으면, 착륙 감지기는 즉시 현재 상태를 벗어납니다.")]),t._v(" "),a("h4",{attrs:{id:"접지"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#접지"}},[t._v("#")]),t._v(" 접지")]),t._v(" "),a("p",[t._v("Conditions for this state:")]),t._v(" "),a("ul",[a("li",[t._v("수직 방향으로 움직임이 없음 ("),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#LNDMC_Z_VEL_MAX"}},[t._v("LNDMC_Z_VEL_MAX")]),t._v(")")],1),t._v(" "),a("li",[t._v("수평 방향으로 움직임이 없음 ("),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#LNDMC_XY_VEL_MAX"}},[t._v("LNDMC_XY_VEL_MAX")]),t._v(")")],1),t._v(" "),a("li",[t._v("lower thrust than "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_THR_MIN"}},[t._v("MPC_THR_MIN")]),t._v(" + (hover throttle - "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_THR_MIN"}},[t._v("MPC_THR_MIN")]),t._v(") * (0.3, unless a hover thrust estimate is available, then 0.6),")],1),t._v(" "),a("li",[t._v("additional check if vehicle is currently in a height-rate controlled flight mode: the vehicle has to have the intent to descend (vertical velocity setpoint above LNDMC_Z_VEL_MAX).")]),t._v(" "),a("li",[t._v("additional check for vehicles with a distance sensor: current distance to ground is below 1m.")])]),t._v(" "),a("p",[t._v("If the vehicle is in position- or velocity-control and ground contact was detected, the position controller will set the thrust vector along the body x-y-axis to zero.")]),t._v(" "),a("h4",{attrs:{id:"착륙-예측"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#착륙-예측"}},[t._v("#")]),t._v(" 착륙 예측")]),t._v(" "),a("p",[t._v("Conditions for this state:")]),t._v(" "),a("ul",[a("li",[t._v("all conditions of the "),a("a",{attrs:{href:"#ground-contact"}},[t._v("ground contact")]),t._v(" state are true")]),t._v(" "),a("li",[t._v("기체 회전이 없을 경우 ("),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#LNDMC_ROT_MAX"}},[t._v("LNDMC_ROT_MAX")]),t._v(")")],1),t._v(" "),a("li",[t._v("추력이 "),a("code",[t._v("MPC_THR_MIN + (MPC_THR_HOVER - MPC_THR_MIN) * 0.1")]),t._v("보다 낮을 경우")]),t._v(" "),a("li",[t._v("no freefall detected")])]),t._v(" "),a("p",[t._v("If the vehicle only has knowledge of thrust and angular rate, in order to proceed to the next state the vehicle has to have low thrust and no rotation for 8.0 seconds.")]),t._v(" "),a("p",[t._v("If the vehicle is in position or velocity control and maybe landed was detected, the position controller will set the thrust vector to zero.")]),t._v(" "),a("h4",{attrs:{id:"착륙"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#착륙"}},[t._v("#")]),t._v(" 착륙")]),t._v(" "),a("p",[t._v("Conditions for this state:")]),t._v(" "),a("ul",[a("li",[t._v("all conditions of the "),a("a",{attrs:{href:"#maybe-landed"}},[t._v("maybe landed")]),t._v(" state are true")])]),t._v(" "),a("h2",{attrs:{id:"fixed-wing-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fixed-wing-configuration"}},[t._v("#")]),t._v(" Fixed-wing Configuration")]),t._v(" "),a("p",[t._v("Tuning parameters for fixed-wing land detection:")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#LNDFW_AIRSPD_MAX"}},[t._v("LNDFW_AIRSPD_MAX")]),t._v(" -시스템이 여전히 착륙했다고 간주할 수 있는 최대 항속. Has to be a tradeoff between airspeed sensing accuracy and triggering fast enough. 좋은 대기속도 센서는 이 파라미터 값을 낮출 수 있게 합니다.")],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#LNDFW_VEL_XY_MAX"}},[t._v("LNDFW_VEL_XY_MAX ")]),t._v(" - 시스템이 착륙하는 것으로 간주되는 최대 수평 속도")],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#LNDFW_VEL_XY_MAX"}},[t._v("LNDFW_VEL_Z_MAX")]),t._v("-시스템이 착륙한 것으로 간주되는 최대 수직 속도.")],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#LNDFW_XYACC_MAX"}},[t._v("LNDFW_XYACC_MAX")]),t._v(" - the maximal horizontal acceleration for the system to still be considered landed.")],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#LNDFW_TRIG_TIME"}},[t._v("LNDFW_TRIG_TIME")]),t._v(" - Trigger time during which the conditions above have to be fulfilled to declare a landing.")],1)]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("When FW launch detection is enabled ("),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_LAUN_DETCN_ON"}},[t._v("FW_LAUN_DETCN_ON")]),t._v('), the vehicle will stay in "landed" state until takeoff is detected (which is purely based on acceleration and not velocity).')],1)]),t._v(" "),a("h2",{attrs:{id:"vtol-land-detector"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vtol-land-detector"}},[t._v("#")]),t._v(" VTOL Land Detector")]),t._v(" "),a("p",[t._v("The VTOL land detector is 1:1 the same as the MC land detector if the system is in hover mode. In FW mode, land detection is disabled.")])])}),[],!1,null,null,null);e.default=r.exports}}]);