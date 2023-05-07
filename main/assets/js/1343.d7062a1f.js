(window.webpackJsonp=window.webpackJsonp||[]).push([[1343],{2509:function(t,e,_){"use strict";_.r(e);var a=_(19),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"고급-고정익-위치-튜닝"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#고급-고정익-위치-튜닝"}},[t._v("#")]),t._v(" 고급 고정익 위치 튜닝")]),t._v(" "),_("p",[t._v("이 가이드는 비행 임무와 고도 및 위치 제어 모드에서 고정익 컨트롤러를 정밀 조정에 많은 도움이 됩니다. PX4는 고도 및 대기 속도 제어에 TECS를 사용하고 수평 방향/위치 제어에 L1을 사용합니다.")]),t._v(" "),_("div",{staticClass:"custom-block warning"},[_("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),_("p",[t._v("이 가이드는 고급 사용자와 전문가를 위한 것입니다.\nTECS 튜닝을 이해하지 못하면, 항공기가 추락할 수 있습니다.")])]),t._v(" "),_("div",{staticClass:"custom-block note"},[_("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),_("p",[t._v("튜닝중 게인을 잘못 설정하면 고도 또는 방향 제어가 불안정해질 수 있습니다.\n따라서 TECS 게인 조정시에는 안정된 제어 모드에서 비행기를 비행하고 착륙시킬 수 있어야합니다.")])]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),_("p",[t._v("모든 매개변수는 "),_("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#fw-tecs"}},[t._v("매개변수 정의")]),t._v("편에 기술되어 있습니다. 이 가이드에서는 중요한 매개변수들을 설명합니다.")],1)]),t._v(" "),_("h2",{attrs:{id:"tecs-튜닝-고도-및-대기-속도"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tecs-튜닝-고도-및-대기-속도"}},[t._v("#")]),t._v(" TECS 튜닝 (고도 및 대기 속도)")]),t._v(" "),_("p",[t._v("TECS (Total Energy Control System)는 항공기의 고도 및 대기 속도를 제어하기 위해 스로틀과 피치 각도 설정점을 조정하는 고정익 가이드 알고리즘입니다. TECS 알고리즘과 제어 다이어그램에 대한 자세한 설명은 "),_("RouterLink",{attrs:{to:"/ko/flight_stack/controller_diagrams.html"}},[t._v("컨트롤러 다이어그램")]),t._v("을 참조하십시오.")],1),t._v(" "),_("p",[t._v("TECS를 조정하기 전에 잘 튜닝된 자세 컨트롤러가 필요합니다. "),_("RouterLink",{attrs:{to:"/ko/config_fw/pid_tuning_guide_fixedwing.html"}},[t._v("PID 조정 가이드")]),t._v(".")],1),t._v(" "),_("p",[t._v("TECS 튜닝은 주로 기체 제한을 올바르게 설정하는 것입니다. 이러한 제한은 아래에 설명된 일련의 비행 기동으로부터 결정될 수있는 매개변수로 설정할 수 있습니다. 대부분의 기동은 "),_("RouterLink",{attrs:{to:"/ko/flight_modes/stabilized_fw.html"}},[t._v("안정된 비행 모드")]),t._v("에서 조종사가 비행기를 조종하여야 했습니다.")],1),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),_("p",[t._v("조종사가 조종하는 동안 원격 측정 데이터를 읽고 기록할 수있는 사람이 있으면 매우 좋습니다.\n정확성을 높이기 위해 비행 중에 얻은 데이터를 비행 로그에 기록된 데이터로 확인하는 것이 좋습니다.")])]),t._v(" "),_("h4",{attrs:{id:"_1-차-트림-조건"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-차-트림-조건"}},[t._v("#")]),t._v(" 1 차 : 트림 조건")]),t._v(" "),_("p",[_("RouterLink",{attrs:{to:"/ko/flight_modes/stabilized_fw.html"}},[t._v("안정화 모드")]),t._v("로 비행하고 트림 속도에서 수평 비행을 위한 스로틀 및 피치 각도 모두에 대한 트림 값을 찾습니다. 스로틀로 속도와 피치를 조정하여 수평 비행을 유지하십시오.")],1),t._v(" "),_("p",[t._v("다음 매개 변수를 설정하십시오.")]),t._v(" "),_("ul",[_("li",[_("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_AIRSPD_TRIM"}},[t._v("FW_AIRSPD_TRIM")]),t._v(" -기동비행시 원하는 트림 대기 속도로 설정합니다.")],1),t._v(" "),_("li",[_("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_THR_TRIM"}},[t._v("FW_THR_TRIM")]),t._v(" - set to the throttle required to fly at trim airspeed.")],1),t._v(" "),_("li",[_("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_PSP_OFF"}},[t._v("FW_PSP_OFF")]),t._v(" - 수평 비행을 유지를 위한 피치 각도로 설정합니다.")],1)]),t._v(" "),_("h4",{attrs:{id:"_2-차-대기-속도와-스로틀-제한"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-차-대기-속도와-스로틀-제한"}},[t._v("#")]),t._v(" 2 차 : 대기 속도와 스로틀 제한")]),t._v(" "),_("p",[t._v("기체 최대 허용 대기 속도에 도달시까지 "),_("RouterLink",{attrs:{to:"/ko/flight_modes/stabilized_fw.html"}},[t._v("안정화 모드")]),t._v("로 비행하고 피치 제어를 사용하여 수평 비행을 유지하면서 스로틀을 높입니다.")],1),t._v(" "),_("p",[t._v("다음 매개 변수를 설정하십시오.")]),t._v(" "),_("ul",[_("li",[_("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_THR_MAX"}},[t._v("FW_THR_MAX")]),t._v(" -수평 비행 중 최대 대기 속도에 도달하기 위해 적용한 스로틀로 설정합니다.")],1),t._v(" "),_("li",[_("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_THR_MIN"}},[t._v("FW_THR_MIN")]),t._v(" - 비행 최소 스로틀을 설정합니다.")],1),t._v(" "),_("li",[_("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_AIRSPD_MAX"}},[t._v("FW_AIRSPD_MAX")]),t._v(" - "),_("code",[t._v("FW_THR_MAX")]),t._v("에서 수평 비행 최대 대기 속도를 설정합니다.")],1)]),t._v(" "),_("h4",{attrs:{id:"_3-차-피치와-상승률-제한"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-차-피치와-상승률-제한"}},[t._v("#")]),t._v(" 3 차 : 피치와 상승률 제한")]),t._v(" "),_("div",{staticClass:"custom-block warning"},[_("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),_("p",[t._v("Do not use "),_("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_T_CLMB_MAX"}},[t._v("FW_T_CLMB_MAX")]),t._v(", "),_("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_T_SINK_MAX"}},[t._v("FW_T_SINK_MAX")]),t._v(" or "),_("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_T_SINK_MIN"}},[t._v("FW_T_SINK_MIN")]),t._v(" to specify the desired climb or sink performance you would like to get from the vehicle! The parameters define the operating limitations and they should be set during the tuning phase, as described below.")],1)]),t._v(" "),_("p",[t._v("안정화 모드로 비행하고 스로틀을 "),_("code",[t._v("FW_THR_MIN")]),t._v("으로 줄이고 기체가 "),_("code",[t._v("FW_AIRSPD_MAX")]),t._v("에 도달할 때까지 피치 각도를 천천히 줄입니다.")]),t._v(" "),_("ul",[_("li",[_("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_P_LIM_MAX"}},[t._v("FW_P_LIM_MAX")]),t._v(" - "),_("code",[t._v("FW_THR_MAX")]),t._v(" 적용시 트림 속도로 상승에 필요한 피치 각도를 설정합니다.")],1),t._v(" "),_("li",[_("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_T_CLMB_MAX"}},[t._v("FW_T_CLMB_MAX")]),t._v(" - "),_("code",[t._v("FW_AIRSPD_TRIM")]),t._v("에서 상승률을 설정합니다.")],1)]),t._v(" "),_("p",[t._v("안정화 모드로 비행하고 스로틀을 "),_("code",[t._v("FW_THR_MIN")]),t._v("으로 줄이고, 기체가 "),_("code",[t._v("FW_AIRSPD_TRIM")]),t._v("을 유지하도록 피치 각도를 설정합니다.")]),t._v(" "),_("ul",[_("li",[_("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_P_LIM_MIN"}},[t._v("FW_P_LIM_MIN")]),t._v(" - "),_("code",[t._v("FW_THR_MIN")]),t._v("에서 "),_("code",[t._v("FW_AIRSPD_MAX")]),t._v("에 도달에 필요한 피치 각도를 설정합니다.")],1),t._v(" "),_("li",[_("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_T_SINK_MAX"}},[t._v("FW_T_SINK_MAX")]),t._v("-하강율을 설정합니다.")],1)]),t._v(" "),_("p",[t._v("모든 L1 매개변수는 "),_("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#fw-l1-control"}},[t._v("여기")]),t._v("에 기술되어 있습니다.")],1),t._v(" "),_("ul",[_("li",[_("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_T_SINK_MIN"}},[t._v("FW_T_SINK_MIN")]),t._v(" - "),_("code",[t._v("FW_AIRSPD_TRIM")]),t._v("을 유지하면서 달성된 싱크 속도를 설정합니다.")],1)]),t._v(" "),_("p",[t._v("Specify the target climb and sink rate for autonomous missions by adjusting "),_("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_T_CLMB_R_SP"}},[t._v("FW_T_CLMB_R_SP")]),t._v(" and "),_("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_T_SINK_R_SP"}},[t._v("FW_T_SINK_R_SP")]),t._v(". These specify the height rates at which the vehicle will climb or descend in order to change altitude. Furthermore, these two values define the height rate limits commanded by the user in "),_("RouterLink",{attrs:{to:"/ko/flight_modes/altitude_fw.html"}},[t._v("Altitude mode")]),t._v(" and "),_("RouterLink",{attrs:{to:"/ko/flight_modes/position_fw.html"}},[t._v("Position mode")]),t._v(".")],1),t._v(" "),_("h3",{attrs:{id:"fw-path-control-tuning-position"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#fw-path-control-tuning-position"}},[t._v("#")]),t._v(" FW Path Control Tuning (Position)")]),t._v(" "),_("p",[t._v("All path control parameters are described "),_("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#fw-path-control"}},[t._v("here")]),t._v(".")],1),t._v(" "),_("ul",[_("li",[_("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#NPFG_PERIOD"}},[t._v("NPFG_PERIOD")]),t._v(" - This is the previously called L1 distance and defines the tracking point ahead of the aircraft it's following. A value of 10-20 meters works for most aircraft. 진동없이 반응이 날카로울 때까지 튜닝하는 동안 천천히 줄입니다. Vehicles with a slow roll dynamic should have this value increased.")],1)])])}),[],!1,null,null,null);e.default=r.exports}}]);