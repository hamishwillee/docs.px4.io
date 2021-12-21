(window.webpackJsonp=window.webpackJsonp||[]).push([[1180],{2207:function(_,t,e){"use strict";e.r(t);var a=e(19),r=Object(a.a)({},(function(){var _=this,t=_.$createElement,e=_._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[e("h1",{attrs:{id:"고급-고정익-위치-튜닝"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#고급-고정익-위치-튜닝"}},[_._v("#")]),_._v(" 고급 고정익 위치 튜닝")]),_._v(" "),e("p",[_._v("이 가이드는 비행 임무와 고도 및 위치 제어 모드에서 고정익 컨트롤러를 정밀 조정에 많은 도움이 됩니다. PX4는 고도 및 대기 속도 제어에 TECS를 사용하고 수평 방향/위치 제어에 L1을 사용합니다.")]),_._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[_._v("WARNING")]),_._v(" "),e("p",[_._v("이 가이드는 고급 사용자와 전문가를 위한 것입니다. TECS 튜닝을 이해하지 못하면, 항공기가 추락할 수 있습니다.")])]),_._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[_._v("Note")]),_._v(" "),e("p",[_._v("튜닝중 게인을 잘못 설정하면 고도 또는 방향 제어가 불안정해질 수 있습니다. 따라서 TECS 게인 조정시에는 안정된 제어 모드에서 비행기를 비행하고 착륙시킬 수 있어야합니다.")])]),_._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[_._v("TIP")]),_._v(" "),e("p",[_._v("모든 매개변수는 "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#fw-tecs"}},[_._v("매개변수 정의")]),_._v("편에 기술되어 있습니다. 이 가이드에서는 중요한 매개변수들을 설명합니다.")],1)]),_._v(" "),e("h2",{attrs:{id:"tecs-튜닝-고도-및-대기-속도"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tecs-튜닝-고도-및-대기-속도"}},[_._v("#")]),_._v(" TECS 튜닝 (고도 및 대기 속도)")]),_._v(" "),e("p",[_._v("TECS (Total Energy Control System)는 항공기의 고도 및 대기 속도를 제어하기 위해 스로틀과 피치 각도 설정점을 조정하는 고정익 가이드 알고리즘입니다. TECS 알고리즘과 제어 다이어그램에 대한 자세한 설명은 "),e("RouterLink",{attrs:{to:"/ko/flight_stack/controller_diagrams.html"}},[_._v("컨트롤러 다이어그램")]),_._v("을 참조하십시오.")],1),_._v(" "),e("p",[_._v("TECS를 조정하기 전에 잘 튜닝된 자세 컨트롤러가 필요합니다. "),e("RouterLink",{attrs:{to:"/ko/config_fw/pid_tuning_guide_fixedwing.html"}},[_._v("PID 조정 가이드")]),_._v(".")],1),_._v(" "),e("p",[_._v("TECS 튜닝은 주로 기체 제한을 올바르게 설정하는 것입니다. 이러한 제한은 아래에 설명된 일련의 비행 기동으로부터 결정될 수있는 매개변수로 설정할 수 있습니다. 대부분의 기동은 "),e("RouterLink",{attrs:{to:"/ko/flight_modes/stabilized_fw.html"}},[_._v("안정된 비행 모드")]),_._v("에서 조종사가 비행기를 조종하여야 했습니다.")],1),_._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[_._v("TIP")]),_._v(" "),e("p",[_._v("조종사가 조종하는 동안 원격 측정 데이터를 읽고 기록할 수있는 사람이 있으면 매우 좋습니다. 정확성을 높이기 위해 비행 중에 얻은 데이터를 비행 로그에 기록된 데이터로 확인하는 것이 좋습니다.")])]),_._v(" "),e("h4",{attrs:{id:"_1-차-트림-조건"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-차-트림-조건"}},[_._v("#")]),_._v(" 1 차 : 트림 조건")]),_._v(" "),e("p",[e("RouterLink",{attrs:{to:"/ko/flight_modes/stabilized_fw.html"}},[_._v("안정화 모드")]),_._v("로 비행하고 트림 속도에서 수평 비행을 위한 스로틀 및 피치 각도 모두에 대한 트림 값을 찾습니다. 스로틀로 속도와 피치를 조정하여 수평 비행을 유지하십시오.")],1),_._v(" "),e("p",[_._v("다음 매개 변수를 설정하십시오.")]),_._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_AIRSPD_TRIM"}},[_._v("FW_AIRSPD_TRIM")]),_._v(" -기동비행시 원하는 트림 대기 속도로 설정합니다.")],1),_._v(" "),e("li",[e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_THR_CRUISE"}},[_._v("FW_THR_CRUISE")]),_._v(" - 트림 대기 속도로 비행에 필요한 스로틀을 설정합니다.")],1),_._v(" "),e("li",[e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_PSP_OFF"}},[_._v("FW_PSP_OFF")]),_._v(" - 수평 비행을 유지를 위한 피치 각도로 설정합니다.")],1)]),_._v(" "),e("h4",{attrs:{id:"_2-차-대기-속도와-스로틀-제한"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-차-대기-속도와-스로틀-제한"}},[_._v("#")]),_._v(" 2 차 : 대기 속도와 스로틀 제한")]),_._v(" "),e("p",[_._v("기체 최대 허용 대기 속도에 도달시까지 "),e("RouterLink",{attrs:{to:"/ko/flight_modes/stabilized_fw.html"}},[_._v("안정화 모드")]),_._v("로 비행하고 피치 제어를 사용하여 수평 비행을 유지하면서 스로틀을 높입니다.")],1),_._v(" "),e("p",[_._v("다음 매개 변수를 설정하십시오.")]),_._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_THR_MAX"}},[_._v("FW_THR_MAX")]),_._v(" -수평 비행 중 최대 대기 속도에 도달하기 위해 적용한 스로틀로 설정합니다.")],1),_._v(" "),e("li",[e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_THR_MIN"}},[_._v("FW_THR_MIN")]),_._v(" - 비행 최소 스로틀을 설정합니다.")],1),_._v(" "),e("li",[e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_AIRSPD_MAX"}},[_._v("FW_AIRSPD_MAX")]),_._v(" - "),e("code",[_._v("FW_THR_MAX")]),_._v("에서 수평 비행 최대 대기 속도를 설정합니다.")],1)]),_._v(" "),e("h4",{attrs:{id:"_3-차-피치와-상승률-제한"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-차-피치와-상승률-제한"}},[_._v("#")]),_._v(" 3 차 : 피치와 상승률 제한")]),_._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[_._v("WARNING")]),_._v(" "),e("p",[_._v("Do not use "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_T_CLMB_MAX"}},[_._v("FW_T_CLMB_MAX")]),_._v(", "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_T_SINK_MAX"}},[_._v("FW_T_SINK_MAX")]),_._v(" or "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_T_SINK_MIN"}},[_._v("FW_T_SINK_MIN")]),_._v(" to specify the desired climb or sink performance you would like to get from the vehicle! The parameters define the operating limitations and they should be set during the tuning phase, as described below.")],1)]),_._v(" "),e("p",[_._v("안정화 모드로 비행하고 스로틀을 "),e("code",[_._v("FW_THR_MIN")]),_._v("으로 줄이고 기체가 "),e("code",[_._v("FW_AIRSPD_MAX")]),_._v("에 도달할 때까지 피치 각도를 천천히 줄입니다.")]),_._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_P_LIM_MAX"}},[_._v("FW_P_LIM_MAX")]),_._v(" - "),e("code",[_._v("FW_THR_MAX")]),_._v(" 적용시 트림 속도로 상승에 필요한 피치 각도를 설정합니다.")],1),_._v(" "),e("li",[e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_T_CLMB_MAX"}},[_._v("FW_T_CLMB_MAX")]),_._v(" - "),e("code",[_._v("FW_AIRSPD_TRIM")]),_._v("에서 상승률을 설정합니다.")],1)]),_._v(" "),e("p",[_._v("안정화 모드로 비행하고 스로틀을 "),e("code",[_._v("FW_THR_MIN")]),_._v("으로 줄이고, 기체가 "),e("code",[_._v("FW_AIRSPD_TRIM")]),_._v("을 유지하도록 피치 각도를 설정합니다.")]),_._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_P_LIM_MIN"}},[_._v("FW_P_LIM_MIN")]),_._v(" - "),e("code",[_._v("FW_THR_MIN")]),_._v("에서 "),e("code",[_._v("FW_AIRSPD_MAX")]),_._v("에 도달에 필요한 피치 각도를 설정합니다.")],1),_._v(" "),e("li",[e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_T_SINK_MAX"}},[_._v("FW_T_SINK_MAX")]),_._v("-하강율을 설정합니다.")],1)]),_._v(" "),e("p",[_._v("모든 L1 매개변수는 "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#fw-l1-control"}},[_._v("여기")]),_._v("에 기술되어 있습니다.")],1),_._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_T_SINK_MIN"}},[_._v("FW_T_SINK_MIN")]),_._v(" - "),e("code",[_._v("FW_AIRSPD_TRIM")]),_._v("을 유지하면서 달성된 싱크 속도를 설정합니다.")],1)]),_._v(" "),e("p",[_._v("Specify the target climb and sink rate for autonomous missions by adjusting "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_T_CLMB_R_SP"}},[_._v("FW_T_CLMB_R_SP")]),_._v(" and "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_T_SINK_R_SP"}},[_._v("FW_T_SINK_R_SP")]),_._v(". These specify the height rates at which the vehicle will climb or descend in order to change altitude. Furthermore, these two values define the height rate limits commanded by the user in "),e("RouterLink",{attrs:{to:"/ko/flight_modes/altitude_fw.html"}},[_._v("Altitude mode")]),_._v(" and "),e("RouterLink",{attrs:{to:"/ko/flight_modes/position_fw.html"}},[_._v("Position mode")]),_._v(".")],1),_._v(" "),e("h3",{attrs:{id:"l1-컨트롤러-조정-위치"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#l1-컨트롤러-조정-위치"}},[_._v("#")]),_._v(" L1 컨트롤러 조정(위치)")]),_._v(" "),e("p",[_._v("All L1 parameters are described "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#fw-l1-control"}},[_._v("here")]),_._v(".")],1),_._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_L1_PERIOD"}},[_._v("FW_L1_PERIOD")]),_._v(" - L1 거리이며 추종하는 항공기 전방의 추적 지점을 정의합니다. 25 미터 값은 대부분의 항공기에서 작동합니다. 16-18의 값은 여전히 작동하며 더 선명한 응답을 제공합니다. 진동없이 반응이 날카로울 때까지 튜닝하는 동안 천천히 줄입니다.")],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);