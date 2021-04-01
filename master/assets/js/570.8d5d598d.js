(window.webpackJsonp=window.webpackJsonp||[]).push([[570],{1886:function(t,e,a){"use strict";a.r(e);var _=a(18),o=Object(_.a)({},(function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"비행-중단-설정"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#비행-중단-설정"}},[t._v("#")]),t._v(" 비행 중단 설정")]),t._v(" "),_("p",[_("em",[t._v("비행 중단")]),t._v(" "),_("RouterLink",{attrs:{to:"/ko/config/safety.html#failsafe_actions"}},[t._v("failsafe")]),t._v("는 안전 점검</1>(예. 기체 유형과 비행 모드가 무엇이든 RC 연결 끊김, geofence를 벗어남 등이 발생할 때)또는 "),_("RouterLink",{attrs:{to:"/ko/config/safety.html#failure_detector"}},[t._v("Failure Detector")]),t._v("에 의해 작동합니다. ")],1),_("p"),t._v(" "),_("p",[_("em",[t._v("비행 중단")]),t._v("이 활성화되면, PX4는 동시에 모든 컨트롤러를 중단하고 모든 PWM출력값을 failsafe 값으로 변경합니다.")]),t._v(" "),_("p",[t._v("연결된 장치에 따라 PWM failsafe 출력은 다음과 같이 활용 될 수 있습니다.")]),t._v(" "),_("ul",[_("li",[_("RouterLink",{attrs:{to:"/ko/peripherals/parachute.html"}},[t._v("낙하산")]),t._v(" 펼치기.")],1),t._v(" "),_("li",[t._v("랜딩기어 펼치기.")]),t._v(" "),_("li",[t._v("카메라를 보호하기 위해 PWM방식으로 연결된 짐벌을 안전 각도(또는 수납 위치) 로 움직이기.")]),t._v(" "),_("li",[t._v("에어백 같은 팽창 장비 가동하기.")]),t._v(" "),_("li",[t._v("알람 울리기.")])]),t._v(" "),_("p",[t._v("비행 중단을 취소하고 되돌리는 방법은 없습니다. 비행 중단이 시행되면 가능한 빨리 배터리를 분리하십시오. 기체를 다시 사용하기 전에 재부팅하거나 전원을 껐다 켜야 합니다.")]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("PX4 does not know what safety devices are attached - it just applies a predefined set of PWM values to its outputs.")])]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),_("p",[t._v("Failsafe values are applied to all outputs on termination. There is no way to configure independent time-based (or other) triggering of the motors or specific safety devices.")])]),t._v(" "),_("div",{staticClass:"custom-block note"},[_("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),_("p",[t._v("This is "),_("em",[t._v("not")]),t._v(" an independent "),_("em",[t._v("Flight Termination System")]),t._v(". If power is lost or if the autopilot crashes completely, the failsafe devices will not be triggered.")])]),t._v(" "),_("h2",{attrs:{id:"하드웨어-설정"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#하드웨어-설정"}},[t._v("#")]),t._v(" 하드웨어 설정")]),t._v(" "),_("p",[_("RouterLink",{attrs:{to:"/ko/config/safety.html"}},[t._v("안전")]),t._v(" 주제는 "),_("em",[t._v("비행 중단")]),t._v("을 특정 failsafe 점검을 위해 수행되는 failsafe 작동</ 2>로 설정하는 방법을 설명합니다.")],1),_("p"),t._v(" "),_("div",{staticClass:"custom-block note"},[_("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),_("p",[t._v("If you're using Pixhawk-series board you will have to separately power the servo rail (i.e. from a 5V BEC, which is often also available from your ESC).")])]),t._v(" "),_("h2",{attrs:{id:"소프트웨어-설정"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#소프트웨어-설정"}},[t._v("#")]),t._v(" 소프트웨어 설정")]),t._v(" "),_("p",[t._v('안전 장치에 연결된 각각의 MAIN포트 출력에 대해 다음을 설정하십시오. "n"은 PWM 포트 번호입니다:')]),t._v(" "),_("p",[t._v('안전 장치에 연결된 각각의 AUX포트 출력에 대해 다음을 설정하십시오. "n"은 PWM 포트 번호입니다:')]),t._v(" "),_("ul",[_("li",[_("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#CBRK_FLIGHTTERM"}},[t._v("CBRK_FLIGHTTERM=0")]),t._v("을 설정하여 failure detector를 활성화하십시오.")],1),t._v(" "),_("li",[_("RouterLink",{attrs:{to:"/ko/config/safety.html#attitude_trigger"}},[t._v("Safety > Failure Detector > Attitude Trigger")]),t._v("는 "),_("em",[t._v("비행 중단")]),t._v("을 시작하는 한계 attitude를 구성하는 방법을 설명합니다. "),_("strong",[t._v("참고")]),t._v(" "),_("em",[t._v("이륙")]),t._v("중의 과한 attitude는 비행 중단 대신 "),_("em",[t._v("lockdown")]),t._v("(모터를 정지시키지만 낙하산을 발사하지 않음)을 시작합니다. lockdown은 "),_("code",[t._v("CBRK_FLIGHTTERM")]),t._v("의 값에 관계없이 항상 활성화됩니다.\n:::")],1),t._v(" "),_("li",[_("RouterLink",{attrs:{to:"/ko/config/safety.html#external_ats"}},[t._v("Safety > External Automatic Trigger System (ATS)")]),t._v("은 외부 트리거 시스템을 설정하는 방법에 대해 설명합니다.")],1)]),t._v(" "),_("p",[t._v("마지막으로, 다른 모터에 대해 "),_("code",[t._v("PWM_AUX_FAILn")]),t._v("과 "),_("code",[t._v("PWM_MAIN_FAILn")]),t._v("의 PWM 값을 설정하십시오.")]),t._v(" "),_("ul",[_("li",[_("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#PWM_MAIN_DIS1"}},[t._v("PWM_MAIN_DISn")]),t._v('을 장치의 "OFF" PWM값으로 설정')],1),t._v(" "),_("li",[_("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#PWM_MAIN_FAIL1"}},[t._v("PWM_MAIN_FAILn")]),t._v('을 장치의 "ON" PWM값으로 설정')],1)]),t._v(" "),_("p",[t._v("아래의 다이어그램은 비행 중단과 관련된 논리적 흐름을 보여 줍니다.")]),t._v(" "),_("ul",[_("li",[_("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#PWM_AUX_DIS1"}},[t._v("PWM_AUX_DISn")]),t._v('을 장치의 "OFF" PWM값으로 설정')],1),t._v(" "),_("li",[_("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#PWM_AUX_FAIL1"}},[t._v("PWM_AUX_FAILn")]),t._v('을 장치의 "ON" PWM값으로 설정')],1)]),t._v(" "),_("p",[t._v("Finally, set the "),_("code",[t._v("PWM_AUX_FAILn")]),t._v(" and "),_("code",[t._v("PWM_MAIN_FAILn")]),t._v(" PWM values for any motors.")]),t._v(" "),_("h2",{attrs:{id:"로직-다이어그램"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#로직-다이어그램"}},[t._v("#")]),t._v(" 로직 다이어그램")]),t._v(" "),_("p",[t._v("The diagram below shows the logical flow around flight termination.")]),t._v(" "),_("p",[_("img",{attrs:{src:a(451),alt:"Logic diagram"}})])])}),[],!1,null,null,null);e.default=o.exports},451:function(t,e,a){t.exports=a.p+"assets/img/flight_termination_logic_diagram.094a47f0.png"}}]);