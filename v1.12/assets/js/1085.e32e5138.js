(window.webpackJsonp=window.webpackJsonp||[]).push([[1085],{2242:function(e,t,a){"use strict";a.r(t);var s=a(19),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"안전-장치-모의-시험"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#안전-장치-모의-시험"}},[e._v("#")]),e._v(" 안전 장치 모의 시험")]),e._v(" "),a("p",[a("RouterLink",{attrs:{to:"/ko/config/safety.html"}},[e._v("안전장치")]),e._v("는 PX4를 안전하게 활용할 수 있는 안전 한계와 조건, 그리고 안전장치 가동을 개시했을 때 취할 수 있는 동작을 정의합니다(예: 착륙, 자세 유지 위치, 지정 지점으로의 복귀 등).")],1),e._v(" "),a("p",[e._v("SITL에서는 모의 시험 활용의 용이성을 위해 기본적으로 안전 장치를 끕니다. 이 주제에서는 실제로 안전 장치를 가동해보기 전에 SITL 모의시험 환경에서 안전 위해 동작을 시험해볼 수 있는 방법을 설명합니다.")]),e._v(" "),a("p",[a("em",[e._v("데이터 연결 유실")]),e._v("(MAVLink 외부 데이터 사용 불가) 안전 장치는 기본 활성 설정한 상태입니다. 지상 통제 장치, SDK 또는 기타 MAVLink 프로그램에 연결한 상태로만 모의 시험을 진행할 수 있습니다.\n:::")]),e._v(" "),a("h2",{attrs:{id:"데이터-연결-유실"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#데이터-연결-유실"}},[e._v("#")]),e._v(" 데이터 연결 유실")]),e._v(" "),a("p",[e._v("The "),a("em",[e._v("Data Link Loss")]),e._v(" failsafe (unavailability of external data via MAVLink) is enabled by default. This makes the simulation only usable with a connected GCS, SDK, or other MAVLink application.")]),e._v(" "),a("p",[a("em",[e._v("원격 조종 연결 유실")]),e._v("(원격 조종 데이터 사용 불가) 안전 장치는 기본 활성 설정한 상태입니다. 활성 MAVLink 또는 원격 조종 연결만 사용할 수 있게 해둔 상태로 모의 시험을 진행할 수 있습니다.")]),e._v(" "),a("p",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#NAV_RCL_ACT"}},[e._v("NAV_RCL_ACT")]),e._v(" 매개변수 값을 원하는 안전 장치 동작 값으로 바꿔보십시오. 예를 들면 "),a("code",[e._v("0")]),e._v(" 값은 안전 장치 동작을 끕니다.")],1),e._v(" "),a("h2",{attrs:{id:"원격-조종-연결-유실"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#원격-조종-연결-유실"}},[e._v("#")]),e._v(" 원격 조종 연결 유실")]),e._v(" "),a("p",[e._v("동작을 재현하는 배터리는 절대로 바닥나지 않는 배터리 구현체이며, 기본적으로 50% 방전 상태로 전압을 보고합니다. 다른 시험을 가로막는 배터리 용량 부족 상태를 유발하지 않고 지상 통제 장치의 배터리 표시를 시험해볼 수 있습니다.")]),e._v(" "),a("p",[e._v("Set the parameter "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#NAV_RCL_ACT"}},[e._v("NAV_RCL_ACT")]),e._v(" to the desired failsafe action to change the behavior. For example, set to "),a("code",[e._v("0")]),e._v(" to disable it.")],1),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("All parameters in SITL including this one get reset when you do "),a("code",[e._v("make clean")]),e._v(".")])]),e._v(" "),a("h2",{attrs:{id:"배터리-부족"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#배터리-부족"}},[e._v("#")]),e._v(" 배터리 부족")]),e._v(" "),a("p",[e._v("GPS 정보의 유실 및 복원을 모의 시험하기 위해 GPS 메시지 방출을 멈춰볼 수 있습니다. "),a("em",[e._v("pxh shell")]),e._v("의 SITL 인스턴스에서 "),a("code",[e._v("param set SIM_GPS_BLOCK 1")]),e._v(" 명령과 "),a("code",[e._v("param set SIM_GPS_BLOCK 0")]),e._v(" 명령을 실행하여 GPS 메시지를 차단하고 해제하는 방식으로 시험해볼 수 있습니다.")]),e._v(" "),a("p",[e._v("To change this minimal battery percentage value use the parameter "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SIM_BAT_MIN_PCT"}},[e._v("SIM_BAT_MIN_PCT")]),e._v(".")],1),e._v(" "),a("p",[e._v("To control how fast the battery depletes to the minimal value use the parameter "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SIM_BAT_DRAIN"}},[e._v("SIM_BAT_DRAIN")]),e._v(".")],1),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("By changing "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SIM_BAT_MIN_PCT"}},[e._v("SIM_BAT_MIN_PCT")]),e._v(" in flight, you can also test regaining capacity to simulate inaccurate battery state estimation or in-air charging technology.")],1)]),e._v(" "),a("h2",{attrs:{id:"gps-신호-유실"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gps-신호-유실"}},[e._v("#")]),e._v(" GPS 신호 유실")]),e._v(" "),a("p",[a("RouterLink",{attrs:{to:"/ko/debug/failure_injection.html"}},[e._v("Failure injection")]),e._v(" can be used to simulate different types of failures in many sensors and systems. For example, this can be used to simulate absent or intermittent GPS, RC signal that has stopped or got stuck on a particular value, failure of the avoidance system, and much more.")],1),e._v(" "),a("p",[e._v("For example, to simulate GPS failure:")]),e._v(" "),a("ol",[a("li",[e._v("Enable the parameter "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SYS_FAILURE_EN"}},[e._v("SYS_FAILURE_EN")]),e._v(".")],1),e._v(" "),a("li",[e._v("Enter the following commands on the SITL instance "),a("em",[e._v("pxh shell")]),e._v(":"),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Turn (all) GPS off")]),e._v("\nfailure gps off\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Turn (all) GPS on")]),e._v("\nfailure gps ok\n")])])])])]),e._v(" "),a("p",[e._v("See "),a("RouterLink",{attrs:{to:"/ko/debug/failure_injection.html"}},[e._v("System Failure Injection")]),e._v(" for a list of supported target sensors and failure modes.")],1)])}),[],!1,null,null,null);t.default=r.exports}}]);