(window.webpackJsonp=window.webpackJsonp||[]).push([[618],{2196:function(_,e,t){"use strict";t.r(e);var r=t(19),a=Object(r.a)({},(function(){var _=this,e=_.$createElement,r=_._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[r("h1",{attrs:{id:"고정익-트리밍-가이드"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#고정익-트리밍-가이드"}},[_._v("#")]),_._v(" 고정익 트리밍 가이드")]),_._v(" "),r("p",[_._v("트림은 트림 조건 (상대적 속도, 공기 밀도, 공격 각도, 항공기 구성 등)에서 제어 표면을 보정합니다. 트림 조건에서 적절하게 트림된 항공기는 조종사 또는 안정화 컴퓨터의 제어 입력 없이도 안정된 자세를 유지할 수 있습니다.")]),_._v(" "),r("p",[_._v("일반 항공, 상업용 및 대형 무인 항공기는 "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Trim_tab",target:"_blank",rel:"noopener noreferrer"}},[_._v("트림 탭"),r("OutboundLink")],1),_._v("을 사용하여 제어 표면을 다듬고, 소형 UAV는 제어 표면의 액추에이터에 오프셋을 추가합니다.")]),_._v(" "),r("p",[r("a",{attrs:{href:"#basic-trimming"}},[_._v("기본 트리밍")]),_._v(" 섹션에서는 각 트리밍 매개변수의 목적과 올바른 값을 설정하는 방법을 설명합니다. "),r("a",{attrs:{href:"#advanced-trimming"}},[_._v("고급 트리밍")]),_._v(" 섹션은 측정 대기 속도와 플랩 위치를 기반으로 트림을 자동으로 조정하는 매개변수를 설명합니다.")]),_._v(" "),r("h2",{attrs:{id:"기본-트리밍"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#기본-트리밍"}},[_._v("#")]),_._v(" 기본 트리밍")]),_._v(" "),r("p",[_._v("고정익을 적절히 트림하기 위해 사용할 수있는 매개변수가 있습니다. 트리밍 매개변수의 사용 사례에 대한 개요는 다음과 같습니다.")]),_._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RC1_TRIM"}},[_._v("RCx_TRIM")]),_._v("은 RC 송신기에서 수신 신호에 트림을 적용합니다. 이 매개변수는 "),r("RouterLink",{attrs:{to:"/ko/config/radio.html"}},[_._v("RC 보정")]),_._v("중에 자동으로 설정됩니다.")],1),_._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#PWM_MAIN_TRIM1"}},[_._v("PWM_MAIN_TRIMx")]),_._v("는 믹싱후 PWM 채널에 트림을 적용합니다. 이들은 비행 전에 제어 표면을 기본 각도로 미세하게 정렬하는 데 사용됩니다.")],1),_._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_PSP_OFF"}},[_._v("FW_PSP_OFF")]),_._v("는 피치 설정점에 오프셋을 적용합니다. 항공기가 순항 속도로 비행해야하는 공격 각도를 설정하는 데 사용됩니다.")],1),_._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_AIRSPD_TRIM"}},[_._v("FW_AIRSPD_TRIM")]),_._v("은 속도 컨트롤러에서 측정된 대기 속도에 따라 출력을 조정하는 데 사용됩니다. 자세한 내용은 "),r("RouterLink",{attrs:{to:"/ko/flight_stack/controller_diagrams.html#airspeed-scaling"}},[_._v("대기속도 스케일링")]),_._v("을 참조하십시오.")],1),_._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#TRIM_ROLL"}},[_._v("TRIM_ROLL")]),_._v(", "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#TRIM_PITCH"}},[_._v("TRIM_PITCH")]),_._v(" 및 "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#TRIM_YAW"}},[_._v("TRIM_YAW")]),_._v("는 믹싱 "),r("em",[_._v("전")]),_._v(" 제어 신호에 트림을 적용합니다. 예를 들어. 엘리베이터용 서보가 두 개인 경우 "),r("code",[_._v("TRIM_PITCH")]),_._v("는 두 서보 모두에 트림을 적용합니다. 조종면이 정렬되어 있지만 수동 (안정화되지 않은) 비행 중에 기체가 피치/롤/요잉 업/다운/왼쪽/오른쪽 또는 안정된 비행 중에 제어 신호에 일정한 오프셋이 있는 경우에 사용됩니다.")],1)]),_._v(" "),r("p",[_._v("위의 매개 변수를 설정하는 올바른 순서는 다음과 같습니다.")]),_._v(" "),r("ol",[r("li",[_._v("가능한 경우 연결 길이를 물리적으로 조정하여 서보를 트리밍하고 ,벤치에서 PWM 채널을 트리밍 ("),r("code",[_._v("PWM_MAIN/AUX_TRIMx")]),_._v(" 사용)하여 제어 표면을 이론적 위치로 적절하게 설정하여 미세 조정합니다.")]),_._v(" "),r("li",[_._v("순항 속도로 안정화 모드로 비행하고 피치 설정 점 오프셋 ("),r("code",[_._v("FW_PSP_OFF")]),_._v(")을 원하는 공격 각도로 설정합니다. 순항 속도에서 필요한 공격 각도는 날개 높이 비행 중에 일정한 고도를 유지하기 위해 비행기가 비행해야 하는 피치 각도에 해당합니다. 대기 속도 센서를 사용하는 경우 올바른 순항 대기 속도 ("),r("code",[_._v("FW_AIRSPD_TRIM")]),_._v(")를 설정하십시오.")]),_._v(" "),r("li",[_._v("로그 파일에서 액추에이터 컨트롤을 보고 (예를 들어 "),r("a",{attrs:{href:"https://logs.px4.io",target:"_blank",rel:"noopener noreferrer"}},[_._v("비행 검토"),r("OutboundLink")],1),_._v("에 업로드하고 "),r("em",[_._v("액추에이터 컨트롤")]),_._v(" 플롯을 확인) 피치 트림 ("),r("code",[_._v("TRIM_PITCH")]),_._v(")을 설정합니다. 이 값을 수평 비행 중의 피치 신호의 평균 오프셋으로 설정합니다.")])]),_._v(" "),r("p",[_._v("로그 조회가 필요가 없거나 수동 모드에서 편안하게 비행 할 수있는 경우 2 단계 전에 3 단계를 수행할 수 있습니다. 그런 다음 리모컨을 트림 (트림 스위치 사용)하고 값을 "),r("code",[_._v("TRIM_PITCH")]),_._v("에 보고하거나 (그리고 송신기에서 트림을 제거) 텔레메트리나 QGC.를 통하여 비행 중에 직접 "),r("code",[_._v("TRIM_PITCH")]),_._v("를 업데이트 할 수 있습니다.")]),_._v(" "),r("h2",{attrs:{id:"고급-트리밍"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#고급-트리밍"}},[_._v("#")]),_._v(" 고급 트리밍")]),_._v(" "),r("p",[_._v("비대칭 익형에 의해 유도된 하향 피치 모멘트는 대기 속도에 따라 증가하고 플랩이 전개 될 때 현재 측정된 대기 속도와 플랩 위치에 따라 항공기를 다시 트리밍하여야 합니다. 이를 위해 대기속도의 쌍 선형 곡선 (아래 그림 참조) 함수와 플랩 상태의 피치 트림 증분 함수를 다음 매개변수를 사용하여 정의할 수 있습니다.")]),_._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_DTRIM_R_VMIN"}},[_._v("FW"),r("em",[_._v("DTRIM")]),_._v("[R/P/Y]_[VMIN/VMAX]")]),_._v("는 최소/최대 대기속도("),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_AIRSPD_MIN"}},[_._v("FW_AIRSPD_MIN")]),_._v(" 및 "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_AIRSPD_MAX"}},[_._v("FW_AIRSPD_MAX")]),_._v("로 정의 됨)에서 "),r("code",[_._v("TRIM_ROLL/PITCH/YAW")]),_._v("에 추가된 롤/피치/요 트림값입니다.")],1),_._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_DTRIM_R_FLPS"}},[_._v("FW_DTRIM_P_FLPS")]),_._v(" 및 "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_DTRIM_P_FLPS"}},[_._v("FW_DTRIM_P_FLPS")]),_._v("는 플랩이 배치될 때 "),r("code",[_._v("TRIM_ROLL/PITCH/YAW")]),_._v("에 추가되는 롤/피치 트림값입니다.")],1)]),_._v(" "),r("p",[r("img",{attrs:{src:t(657),alt:"Dtrim 곡선"}})]),_._v(" "),r("p",[_._v("완벽하게 대칭인 기체는 피치 트림 증분만 필요하지만, 실제 기체는 완벽하게 대칭이 아니기 때문에 롤과 요 트림 증분이 필요한 경우도 있습니다.")]),_._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[_._v("Note")]),_._v(" "),r("p",[_._v("1.0과 다른 축척 계수가 플랩에 사용되는 경우 (매개변수 "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_FLAPS_SCL"}},[_._v("FW_FLAPS_SCL")]),_._v("), "),r("code",[_._v("FW_DTRIM_R/P_FLPS")]),_._v("에 의해 추가된 트림 증분도 동일한 계수로 축척됩니다.")],1)])])}),[],!1,null,null,null);e.default=a.exports},657:function(_,e,t){_.exports=t.p+"assets/img/fixedwing_dtrim.070a3948.png"}}]);