(window.webpackJsonp=window.webpackJsonp||[]).push([[1454],{2615:function(t,_,a){"use strict";a.r(_);var e=a(19),v=Object(e.a)({},(function(){var t=this,_=t.$createElement,a=t._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"낙하산"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#낙하산"}},[t._v("#")]),t._v(" 낙하산")]),t._v(" "),a("p",[t._v("PX4는 "),a("RouterLink",{attrs:{to:"/ko/advanced_config/flight_termination.html"}},[t._v("비행 종료")]),t._v(" 과정에서 여분의 PWM 출력에 낙하산을 연결할 수 있습니다.")],1),t._v(" "),a("p",[a("a",{attrs:{href:"https://fruitychutes.com/buyachute/drone-and-uav-parachute-recovery-c-21/harrier-drone-parachute-launcher-c-21_33/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Fruity Chutes"),a("OutboundLink")],1),t._v("의 스프링 장착 런처로 낙하산을 설정하는 방법에 대한 구체적인 방법을 설명합니다.")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("사실 PX4는 낙하산을 발사하고 있다는 사실을 모릅니다. 비행 종료중에는 모든 콘트롤러를 끄고 모든 PWM 출력을 안전 장치 값으로 설정합니다. 이 기능을 사용하여 여러 보완 안전장치를 활성화할 수 있습니다. 자세한 내용은 "),a("RouterLink",{attrs:{to:"/ko/advanced_config/flight_termination.html"}},[t._v("비행 종료 설정")]),t._v("을 참고하십시오.")],1)]),t._v(" "),a("h2",{attrs:{id:"낙하산-사용법"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#낙하산-사용법"}},[t._v("#")]),t._v(" 낙하산 사용법")]),t._v(" "),a("p",[t._v("낙하산 사용에 대한 몇 가지 참고 사항은 아래와 같습니다.")]),t._v(" "),a("ul",[a("li",[t._v("낙하산이 있다고 해서 기체가 파손되지 않는다는 보장은 없습니다!")])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("항상 안전을 염두에 두고 비행하여야 합니다.")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("낙하산을 효과적으로 사용하려면 주의하여 사용하여야 합니다. 예를 들어, 낙하산이 올바르게 접혀져 있어야 합니다.")])]),t._v(" "),a("li",[a("p",[t._v("낙하산에는 최소 유효 고도가 있습니다.")])]),t._v(" "),a("li",[a("p",[t._v("기체가 뒤집힌 상태에서 낙하산이 작동할 수 있습니다. 이것은 속도를 줄이는 데 필요한 시간을 증가시키고, 드론이 낙하산을 무너뜨리는 결과를 초래할 수 있습니다.")])]),t._v(" "),a("li",[a("p",[t._v("이 시스템에는 전원이 공급되어 작동하고 있는 비행 콘트롤러가 필요합니다. 비행 스택이 충돌하는 원인이 되는 경우에는 낙하산이 전개되지 않습니다.")])])]),t._v(" "),a("h2",{attrs:{id:"낙하산-설정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#낙하산-설정"}},[t._v("#")]),t._v(" 낙하산 설정")]),t._v(" "),a("p",[t._v("아래 설정은 MAIN 1-4에 모터가 있고 MAIN PWM 포트 7에 낙하산이 있는 쿼드터 설정방법을 설명합니다. 언급된 PWM 값은 테스트한 "),a("em",[t._v("Fruity Chutes")]),t._v(" 낙하산에 관한 것입니다.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("첫 번째 테스트 시에는, 소품없이 낙하산 장치를 장착한 상태에서 벤치에서 시도하십시오!")])]),t._v(" "),a("p",[t._v("하드웨어 설정:")]),t._v(" "),a("ul",[a("li",[t._v("낙하산을 IO 포트(MAIN), 채널 7(1부터 시작)에 연결합니다.")]),t._v(" "),a("li",[t._v("서보 레일에 전원을 공급합니다. 즉, 5V BEC를 서보 레일에 연결합니다.")])]),t._v(" "),a("p",[t._v("비행 종료 활성화:")]),t._v(" "),a("ul",[a("li",[t._v("낙하산을 작동 위치를 확인하려면, "),a("RouterLink",{attrs:{to:"/ko/config/safety.html"}},[t._v("안전")]),t._v(" 작업을 "),a("em",[t._v("비행 종료")]),t._v("로 설정하십시오.")],1),t._v(" "),a("li",[t._v("충돌/반전 감지를 위한 "),a("RouterLink",{attrs:{to:"/ko/config/safety.html#failure_detector"}},[t._v("고장 감지기")]),t._v(" 피치 각도, 롤 각도 및 시간 트리거를 설정하고 오류/IMU 시간 초과 회로 차단기를 비활성화합니다(예: "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#CBRK_FLIGHTTERM"}},[t._v("CBRK_FLIGHTTERM=0")]),t._v(" 설정).")],1)]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("실패 감지를 위해 "),a("RouterLink",{attrs:{to:"/ko/config/safety.html#external_ats"}},[t._v("외부 ATS")]),t._v("를 설정할 수도 있습니다.")],1)]),t._v(" "),a("p",[t._v("낙하산 설정")]),t._v(" "),a("ul",[a("li",[t._v('낙하산 "OFF" 위치에 대한 PWM 값으로 '),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#PWM_MAIN_DIS7"}},[t._v("PWM_MAIN_DIS7")]),t._v(" 설정(보통 700~1000ms 사이)")],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#PWM_MAIN_FAIL7"}},[t._v("PWM_MAIN_FAIL7")]),t._v('을 낙하산 "ON" 위치에 대한 PWM 값으로 설정합니다(보통 1800~2200ms 사이).')],1)]),t._v(" "),a("p",[t._v("모터 설정:")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#PWM_MAIN_FAIL1"}},[t._v("PWM_MAIN_FAILn")]),t._v("(여기서 n은 1 - 4임)을 모터가 직접 해제된 값으로 이동하도록 900ms로 설정합니다.")],1)]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("종료 상태에서 복구할 방법이 없습니다! 다음 테스트 전에 기체를 재부팅합니다.")])]),t._v(" "),a("p",[a("span",{attrs:{id:"testing"}})]),t._v(" "),a("h2",{attrs:{id:"낙하산-시험"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#낙하산-시험"}},[t._v("#")]),t._v(" 낙하산 시험")]),t._v(" "),a("p",[t._v("낙하산은 "),a("RouterLink",{attrs:{to:"/ko/advanced_config/flight_termination.html"}},[t._v("비행 종료")]),t._v(" 중에 작동합니다.")],1),t._v(" "),a("p",[t._v("(실제) 낙하산을 테스트하는 가장 쉬운 방법은 "),a("RouterLink",{attrs:{to:"/ko/config/safety.html#attitude_trigger"}},[t._v("고장 감지기 자세 트리거")]),t._v("를 활성화하고 기체를 뒤집는 것입니다.")],1),t._v(" "),a("p",[t._v("Gazebo에서 낙하산/비행 종료를 시뮬레이션할 수 있습니다. "),a("RouterLink",{attrs:{to:"/ko/simulation/gazebo.html#flight_termination"}},[t._v("개발 > 시뮬레이션 > 전망대 > 낙하산/비행 종료 시뮬레이션")]),t._v(".")],1)])}),[],!1,null,null,null);_.default=v.exports}}]);