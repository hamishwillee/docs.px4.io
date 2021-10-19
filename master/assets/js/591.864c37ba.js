(window.webpackJsonp=window.webpackJsonp||[]).push([[591],{2103:function(t,_,e){"use strict";e.r(_);var a=e(19),v=Object(a.a)({},(function(){var t=this,_=t.$createElement,a=t._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"비행-중단-설정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#비행-중단-설정"}},[t._v("#")]),t._v(" 비행 중단 설정")]),t._v(" "),a("p",[a("em",[t._v("비행 중단")]),t._v(" "),a("RouterLink",{attrs:{to:"/ko/config/safety.html#failsafe_actions"}},[t._v("failsafe")]),t._v("는 안전 점검</1>(예. 기체 유형과 비행 모드가 무엇이든 RC 연결 끊김, geofence를 벗어남 등이 발생할 때)또는 "),a("RouterLink",{attrs:{to:"/ko/config/safety.html#failure_detector"}},[t._v("Failure Detector")]),t._v("에 의해 작동합니다. ")],1),a("p"),t._v(" "),a("p",[a("em",[t._v("비행 중단")]),t._v("이 활성화되면, PX4는 동시에 모든 컨트롤러를 중단하고 모든 PWM출력값을 failsafe 값으로 변경합니다.")]),t._v(" "),a("p",[t._v("연결된 장치에 따라 PWM 안전장치 출력은 아래와 같이 활용할 수 있습니다.")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/ko/peripherals/parachute.html"}},[t._v("낙하산")]),t._v(" 펼치기.")],1),t._v(" "),a("li",[t._v("랜딩기어 펼치기.")]),t._v(" "),a("li",[t._v("카메라를 보호하기 위해 PWM방식으로 연결된 짐벌을 안전 각도(또는 수납 위치) 로 움직이기.")]),t._v(" "),a("li",[t._v("에어백 같은 팽창 장비 가동하기.")]),t._v(" "),a("li",[t._v("알람 울리기.")])]),t._v(" "),a("p",[t._v("비행 중단을 취소하고 되돌리는 방법은 없습니다. 비행 중단이 시행되면 가능한 빨리 배터리를 분리하십시오. 기체를 다시 사용하기 전에 재부팅하거나 전원을 껐다 켜야 합니다.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("PX4는 어떤 안전 장치가 장착되어 있는지 알지 못합니다. 미리 정의된 PWM 값 세트를 출력에 적용하기만 하면 됩니다.")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("Failsafe 값은 종료시 모든 출력에 적용됩니다. 모터 또는 특정 안전 장치의 독립적인 시간 기반 (또는 기타) 트리거링을 구성하는 방법은 없습니다.")])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("이것은 독립적인 "),a("em",[t._v("항공 종료 시스템")]),t._v("이 "),a("em",[t._v("아닙니다")]),t._v(". 전원이 끊기거나 자동조종장치가 완전히 충돌하면 안전 장치가 작동하지 않습니다.")])]),t._v(" "),a("h2",{attrs:{id:"하드웨어-설정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#하드웨어-설정"}},[t._v("#")]),t._v(" 하드웨어 설정")]),t._v(" "),a("p",[t._v("PWM 값을 변경하여 트리거 기능한 모든 "),a("em",[t._v("안전 장치")]),t._v("(예 : "),a("RouterLink",{attrs:{to:"/ko/peripherals/parachute.html"}},[t._v("낙하산")]),t._v(")를 사용할 수 있으며, 모든 빈 PWM 포트(MAIN과 AUX)에 연결할 수 있습니다.")],1),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("Pixhawk 시리즈 보드를 사용하는 경우 서보 레일에 별도로 전원을 공급하여야 합니다 (예 : ESC에서도 제공되는 5V BEC).")])]),t._v(" "),a("h2",{attrs:{id:"소프트웨어-설정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#소프트웨어-설정"}},[t._v("#")]),t._v(" 소프트웨어 설정")]),t._v(" "),a("p",[t._v('안전 장치에 연결된 각각의 MAIN포트 출력에 대해 다음을 설정하십시오. "n"은 PWM 포트 번호입니다:')]),t._v(" "),a("p",[t._v('안전 장치에 연결된 각각의 AUX포트 출력에 대해 다음을 설정하십시오. "n"은 PWM 포트 번호입니다:')]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#CBRK_FLIGHTTERM"}},[t._v("CBRK_FLIGHTTERM=0")]),t._v("을 설정하여 고장 감지기를 활성화하십시오.")],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/config/safety.html#attitude_trigger"}},[t._v("Safety > Failure Detector > Attitude Trigger")]),t._v("는 "),a("em",[t._v("비행 중단")]),t._v("을 시작하는 한계 attitude를 구성하는 방법을 설명합니다. "),a("strong",[t._v("참고")]),t._v(" "),a("em",[t._v("이륙")]),t._v("중의 과한 attitude는 비행 중단 대신 "),a("em",[t._v("lockdown")]),t._v("(모터를 정지시키지만 낙하산을 발사하지 않음)을 시작합니다. lockdown은 "),a("code",[t._v("CBRK_FLIGHTTERM")]),t._v("의 값에 관계없이 항상 활성화됩니다.\n:::")],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/config/safety.html#external_ats"}},[t._v("Safety > External Automatic Trigger System (ATS)")]),t._v("은 외부 트리거 시스템을 설정하는 방법에 대해 설명합니다.")],1)]),t._v(" "),a("p",[t._v("마지막으로, 다른 모터에 대해 "),a("code",[t._v("PWM_AUX_FAILn")]),t._v("과 "),a("code",[t._v("PWM_MAIN_FAILn")]),t._v("의 PWM 값을 설정하십시오.")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#PWM_MAIN_DIS1"}},[t._v("PWM_MAIN_DISn")]),t._v('을 장치의 "OFF" PWM값으로 설정')],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#PWM_MAIN_FAIL1"}},[t._v("PWM_MAIN_FAILn")]),t._v('을 장치의 "ON" PWM값으로 설정')],1)]),t._v(" "),a("p",[t._v("아래의 다이어그램은 비행 중단과 관련된 논리적 흐름을 보여 줍니다.")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#PWM_AUX_DIS1"}},[t._v("PWM_AUX_DISn")]),t._v('을 장치의 "OFF" PWM값으로 설정')],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#PWM_AUX_FAIL1"}},[t._v("PWM_AUX_FAILn")]),t._v('을 장치의 "ON" PWM값으로 설정')],1)]),t._v(" "),a("p",[t._v("마지막으로, 모든 모터에 대해 "),a("code",[t._v("PWM_AUX_FAILn")]),t._v(" 및 "),a("code",[t._v("PWM_MAIN_FAILn")]),t._v(" PWM 값을 설정합니다.")]),t._v(" "),a("h2",{attrs:{id:"로직-다이어그램"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#로직-다이어그램"}},[t._v("#")]),t._v(" 로직 다이어그램")]),t._v(" "),a("p",[t._v("아래의 다이어그램은 비행 중단과 관련된 논리적 흐름을 나타냅니다.")]),t._v(" "),a("p",[a("img",{attrs:{src:e(455),alt:"로직 다이어그램"}})])])}),[],!1,null,null,null);_.default=v.exports},455:function(t,_,e){t.exports=e.p+"assets/img/flight_termination_logic_diagram.094a47f0.png"}}]);