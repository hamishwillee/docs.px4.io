(window.webpackJsonp=window.webpackJsonp||[]).push([[750],{2534:function(t,e,a){"use strict";a.r(e);var o=a(19),i=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"비행-중단-설정"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#비행-중단-설정"}},[t._v("#")]),t._v(" 비행 중단 설정")]),t._v(" "),o("p",[t._v("The "),o("em",[t._v("Flight termination")]),t._v(" "),o("RouterLink",{attrs:{to:"/ko/config/safety.html#failsafe-actions"}},[t._v("failsafe action")]),t._v(" may be triggered by a "),o("RouterLink",{attrs:{to:"/ko/config/safety.html"}},[t._v("safety check")]),t._v(" (e.g. RC Loss, geofence violation, etc. on any vehicle type or in any flight mode), or by the "),o("RouterLink",{attrs:{to:"/ko/config/safety.html#failure-detector"}},[t._v("Failure Detector")]),t._v(".")],1),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("Flight termination may also be triggered from a ground station or companion computer using the MAVLink "),o("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_DO_FLIGHTTERMINATION",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAV_CMD_DO_FLIGHTTERMINATION"),o("OutboundLink")],1),t._v(" command. This is sent, for example, when you call the "),o("a",{attrs:{href:"https://mavsdk.mavlink.io/main/en/cpp/api_reference/classmavsdk_1_1_action.html#classmavsdk_1_1_action_1a47536c4a4bc8367ccd30a92eb09781c5",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVSDK Action plugin"),o("OutboundLink")],1),t._v(" "),o("code",[t._v("terminate()")]),t._v(" or "),o("code",[t._v("terminate_async()")]),t._v(" methods.")])]),t._v(" "),o("p",[t._v("When "),o("em",[t._v("Flight termination")]),t._v(" is activated, PX4 simultaneously turns off all controllers and sets all PWM outputs to their failsafe values.")]),t._v(" "),o("p",[t._v("Depending on what devices are connected, the PWM failsafe outputs can be used to:")]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/ko/peripherals/parachute.html"}},[t._v("낙하산")]),t._v(" 펼치기.")],1),t._v(" "),o("li",[t._v("랜딩기어 펼치기.")]),t._v(" "),o("li",[t._v("카메라를 보호하기 위해 PWM방식으로 연결된 짐벌을 안전 각도(또는 수납 위치) 로 움직이기.")]),t._v(" "),o("li",[t._v("에어백 같은 팽창 장비 가동하기.")]),t._v(" "),o("li",[t._v("알람 울리기.")])]),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("PX4는 어떤 안전 장치가 장착되어 있는지 알지 못합니다. 미리 정의된 PWM 값 세트를 출력에 적용하기만 하면 됩니다. After triggering you should unplug the battery as soon as possible. You will need to reboot/power cycle the vehicle before it can be used again.")]),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),o("p",[t._v("Failsafe 값은 종료시 모든 출력에 적용됩니다. 모터 또는 특정 안전 장치의 독립적인 시간 기반 (또는 기타) 트리거링을 구성하는 방법은 없습니다.")]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("이것은 독립적인 "),o("em",[t._v("항공 종료 시스템")]),t._v("이 "),o("em",[t._v("아닙니다")]),t._v(". 전원이 끊기거나 자동조종장치가 완전히 충돌하면 안전 장치가 작동하지 않습니다.")])])])]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("This is "),o("em",[t._v("not")]),t._v(" an independent "),o("em",[t._v("Flight Termination System")]),t._v(". If power is lost or if the autopilot crashes completely, the failsafe devices will not be triggered.")])]),t._v(" "),o("h2",{attrs:{id:"하드웨어-설정"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#하드웨어-설정"}},[t._v("#")]),t._v(" 하드웨어 설정")]),t._v(" "),o("p",[t._v("Any "),o("em",[t._v("safety device(s)")]),t._v(" (e.g. a "),o("RouterLink",{attrs:{to:"/ko/peripherals/parachute.html"}},[t._v("parachute")]),t._v(") that can be triggered by changing a PWM value can be used, and may be connected to any free PWM port (both MAIN and AUX).")],1),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("If you're using Pixhawk-series board you will have to separately power the servo rail (i.e. from a 5V BEC, which is often also available from your ESC).")])]),t._v(" "),o("h2",{attrs:{id:"소프트웨어-설정"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#소프트웨어-설정"}},[t._v("#")]),t._v(" 소프트웨어 설정")]),t._v(" "),o("p",[t._v("The "),o("RouterLink",{attrs:{to:"/ko/config/safety.html"}},[t._v("Safety")]),t._v(" topic explains how to set the "),o("em",[t._v("flight termination")]),t._v(" as the "),o("RouterLink",{attrs:{to:"/ko/config/safety.html#failsafe-actions"}},[t._v("failsafe action")]),t._v(" to be performed for particular failsafe check.")],1),t._v(" "),o("p",[t._v("마지막으로, 다른 모터에 대해 "),o("code",[t._v("PWM_AUX_FAILn")]),t._v("과 "),o("code",[t._v("PWM_MAIN_FAILn")]),t._v("의 PWM 값을 설정하십시오.")]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#CBRK_FLIGHTTERM"}},[t._v("CBRK_FLIGHTTERM=0")]),t._v("을 설정하여 고장 감지기를 활성화하십시오.")],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/ko/config/safety.html#attitude-trigger"}},[t._v("Safety > Failure Detector > Attitude Trigger")]),t._v(" explains how to configure the attitude limits that trigger "),o("em",[t._v("Flight termination")]),t._v(". :::note During "),o("em",[t._v("takeoff")]),t._v(" excessive attitutes will trigger "),o("em",[t._v("lockdown")]),t._v(" (kill motors, but not launch parachute) rather than flight termination. lockdown은 "),o("code",[t._v("CBRK_FLIGHTTERM")]),t._v("의 값에 관계없이 항상 활성화됩니다. 모터 또는 특정 안전 장치의 독립적인 시간 기반 (또는 기타) 트리거링을 구성하는 방법은 없습니다.")],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/ko/config/safety.html#external_ats"}},[t._v("Safety > External Automatic Trigger System (ATS)")]),t._v("은 외부 트리거 시스템을 설정하는 방법에 대해 설명합니다.")],1)]),t._v(" "),o("p",[t._v("아래의 다이어그램은 비행 중단과 관련된 논리적 흐름을 보여 줍니다.")]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#PWM_MAIN_DIS1"}},[t._v("PWM_MAIN_DISn")]),t._v('을 장치의 "OFF" PWM값으로 설정')],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#PWM_MAIN_FAIL1"}},[t._v("PWM_MAIN_FAILn")]),t._v('을 장치의 "ON" PWM값으로 설정')],1)]),t._v(" "),o("p",[t._v("마지막으로, 모든 모터에 대해 "),o("code",[t._v("PWM_AUX_FAILn")]),t._v(" 및 "),o("code",[t._v("PWM_MAIN_FAILn")]),t._v(" PWM 값을 설정합니다.")]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#PWM_AUX_DIS1"}},[t._v("PWM_AUX_DISn")]),t._v('을 장치의 "OFF" PWM값으로 설정')],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#PWM_AUX_FAIL1"}},[t._v("PWM_AUX_FAILn")]),t._v('을 장치의 "ON" PWM값으로 설정')],1)]),t._v(" "),o("p",[t._v("아래의 다이어그램은 비행 중단과 관련된 논리적 흐름을 나타냅니다.")]),t._v(" "),o("h2",{attrs:{id:"로직-다이어그램"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#로직-다이어그램"}},[t._v("#")]),t._v(" 로직 다이어그램")]),t._v(" "),o("p",[t._v("The diagram below shows the logical flow around flight termination.")]),t._v(" "),o("p",[o("img",{attrs:{src:a(475),alt:"Logic diagram"}})])])}),[],!1,null,null,null);e.default=i.exports},475:function(t,e,a){t.exports=a.p+"assets/img/flight_termination_logic_diagram.0595f111.png"}}]);