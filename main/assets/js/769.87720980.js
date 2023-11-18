(window.webpackJsonp=window.webpackJsonp||[]).push([[769],{2626:function(e,A,t){"use strict";t.r(A);var a=t(19),o=Object(a.a)({},(function(){var e=this,A=e.$createElement,a=e._self._c||A;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"고정익-트리밍-가이드"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#고정익-트리밍-가이드"}},[e._v("#")]),e._v(" 고정익 트리밍 가이드")]),e._v(" "),a("p",[e._v("트림은 트림 조건 (상대적 속도, 공기 밀도, 공격 각도, 항공기 구성 등)에서 제어 표면을 보정합니다. 트림 조건에서 적절하게 트림된 항공기는 조종사 또는 안정화 컴퓨터의 제어 입력 없이도 안정된 자세를 유지할 수 있습니다.")]),e._v(" "),a("p",[e._v("일반 항공, 상업용 및 대형 무인 항공기는 "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Trim_tab",target:"_blank",rel:"noopener noreferrer"}},[e._v("트림 탭"),a("OutboundLink")],1),e._v("을 사용하여 제어 표면을 다듬고, 소형 UAV는 제어 표면의 액추에이터에 오프셋을 추가합니다.")]),e._v(" "),a("p",[a("a",{attrs:{href:"#basic-trimming"}},[e._v("기본 트리밍")]),e._v(" 섹션에서는 각 트리밍 매개변수의 목적과 올바른 값을 설정하는 방법을 설명합니다. "),a("a",{attrs:{href:"#advanced-trimming"}},[e._v("고급 트리밍")]),e._v(" 섹션은 측정 대기 속도와 플랩 위치를 기반으로 트림을 자동으로 조정하는 매개변수를 설명합니다.")]),e._v(" "),a("h2",{attrs:{id:"기본-트리밍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#기본-트리밍"}},[e._v("#")]),e._v(" 기본 트리밍")]),e._v(" "),a("p",[e._v("고정익을 적절히 트림하기 위해 사용할 수있는 매개변수가 있습니다. 트리밍 매개변수의 사용 사례에 대한 개요는 다음과 같습니다.")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RC1_TRIM"}},[e._v("RCx_TRIM")]),e._v("은 RC 송신기에서 수신 신호에 트림을 적용합니다. 이 매개변수는 "),a("RouterLink",{attrs:{to:"/ko/config/radio.html"}},[e._v("RC 보정")]),e._v("중에 자동으로 설정됩니다.")],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#CA_SV_CS0_TRIM"}},[e._v("CA_SV_CSx_TRIM")]),e._v(" applies trim to a control surfaces channel. 이들은 비행 전에 제어 표면을 기본 각도로 미세하게 정렬하는 데 사용됩니다.")],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_PSP_OFF"}},[e._v("FW_PSP_OFF")]),e._v("는 피치 설정점에 오프셋을 적용합니다. 항공기가 순항 속도로 비행해야하는 공격 각도를 설정하는 데 사용됩니다.")],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_AIRSPD_TRIM"}},[e._v("FW_AIRSPD_TRIM")]),e._v("은 속도 컨트롤러에서 측정된 대기 속도에 따라 출력을 조정하는 데 사용됩니다. 자세한 내용은 "),a("RouterLink",{attrs:{to:"/ko/flight_stack/controller_diagrams.html#airspeed-scaling"}},[e._v("대기속도 스케일링")]),e._v("을 참조하십시오.")],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#TRIM_ROLL"}},[e._v("TRIM_ROLL")]),e._v(", "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#TRIM_PITCH"}},[e._v("TRIM_PITCH")]),e._v(" and "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#TRIM_YAW"}},[e._v("TRIM_YAW")]),e._v(" apply trim to the control signals "),a("em",[e._v("before")]),e._v(" mixing. 예를 들어. 엘리베이터용 서보가 두 개인 경우 "),a("code",[e._v("TRIM_PITCH")]),e._v("는 두 서보 모두에 트림을 적용합니다. 조종면이 정렬되어 있지만 수동 (안정화되지 않은) 비행 중에 기체가 피치/롤/요잉 업/다운/왼쪽/오른쪽 또는 안정된 비행 중에 제어 신호에 일정한 오프셋이 있는 경우에 사용됩니다.")],1)]),e._v(" "),a("p",[e._v("위의 매개 변수를 설정하는 올바른 순서는 다음과 같습니다.")]),e._v(" "),a("ol",[a("li",[e._v("가능한 경우 연결 길이를 물리적으로 조정하여 서보를 트리밍하고 ,벤치에서 PWM 채널을 트리밍 ("),a("code",[e._v("PWM_MAIN/AUX_TRIMx")]),e._v(" 사용)하여 제어 표면을 이론적 위치로 적절하게 설정하여 미세 조정합니다.")]),e._v(" "),a("li",[e._v("순항 속도로 안정화 모드로 비행하고 피치 설정 점 오프셋 ("),a("code",[e._v("FW_PSP_OFF")]),e._v(")을 원하는 공격 각도로 설정합니다. 순항 속도에서 필요한 공격 각도는 날개 높이 비행 중에 일정한 고도를 유지하기 위해 비행기가 비행해야 하는 피치 각도에 해당합니다. 대기 속도 센서를 사용하는 경우 올바른 순항 대기 속도 ("),a("code",[e._v("FW_AIRSPD_TRIM")]),e._v(")를 설정하십시오.")]),e._v(" "),a("li",[e._v("Look at the actuator controls in the log file (upload it to "),a("a",{attrs:{href:"https://logs.px4.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("Flight Review"),a("OutboundLink")],1),e._v(" and check the "),a("em",[e._v("Actuator Controls")]),e._v(" plot for example) and set the pitch trim ("),a("code",[e._v("TRIM_PITCH")]),e._v("). 이 값을 수평 비행 중의 피치 신호의 평균 오프셋으로 설정합니다.")])]),e._v(" "),a("p",[e._v("로그 조회가 필요가 없거나 수동 모드에서 편안하게 비행 할 수있는 경우 2 단계 전에 3 단계를 수행할 수 있습니다. 그런 다음 리모컨을 트림 (트림 스위치 사용)하고 값을 "),a("code",[e._v("TRIM_PITCH")]),e._v("에 보고하거나 (그리고 송신기에서 트림을 제거) 텔레메트리나 QGC.를 통하여 비행 중에 직접 "),a("code",[e._v("TRIM_PITCH")]),e._v("를 업데이트 할 수 있습니다.")]),e._v(" "),a("h2",{attrs:{id:"고급-트리밍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#고급-트리밍"}},[e._v("#")]),e._v(" 고급 트리밍")]),e._v(" "),a("p",[e._v("비대칭 익형에 의해 유도된 하향 피치 모멘트는 대기 속도에 따라 증가하고 플랩이 전개 될 때 현재 측정된 대기 속도와 플랩 위치에 따라 항공기를 다시 트리밍하여야 합니다. For this purpose, a bilinear curve function of airspeed and a pitch trim increment function of the flaps state (see figure below) can be defined using the following parameters:")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_DTRIM_R_VMIN"}},[e._v("FW_DTRIM_[R/P/Y]_[VMIN/VMAX]")]),e._v(" are the roll/pitch/yaw trim value added to "),a("code",[e._v("TRIM_ROLL/PITCH/YAW")]),e._v(" at min/max airspeed (defined by "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_AIRSPD_MIN"}},[e._v("FW_AIRSPD_MIN")]),e._v(" and "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#FW_AIRSPD_MAX"}},[e._v("FW_AIRSPD_MAX")]),e._v(").")],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#CA_SV_CS0_FLAP"}},[e._v("CA_SV_CSx_FLAP")]),e._v(" and "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#CA_SV_CS0_SPOIL"}},[e._v("CA_SV_CSx_SPOIL")]),e._v(" are the trimming values that are applied to these control surfaces if the flaps or the spoilers are fully deployed, respectively.")],1)]),e._v(" "),a("p",[a("img",{attrs:{src:t(681),alt:"Dtrim 곡선"}})]),e._v(" "),a("p",[e._v("A perfectly symmetrical airframe would only require pitch trim increments, but since a real airframe is never perfectly symmetrical, roll and yaw trims increments are also sometimes required.")])])}),[],!1,null,null,null);A.default=o.exports},681:function(e,A){e.exports="data:image/png;base64,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"}}]);