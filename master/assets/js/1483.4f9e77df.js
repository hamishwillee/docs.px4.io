(window.webpackJsonp=window.webpackJsonp||[]).push([[1483],{2672:function(t,_,e){"use strict";e.r(_);var a=e(19),v=Object(a.a)({},(function(){var t=this,_=t.$createElement,e=t._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"안전장치-시뮬레이션"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#안전장치-시뮬레이션"}},[t._v("#")]),t._v(" 안전장치 시뮬레이션")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/ko/config/safety.html"}},[t._v("안전장치")]),t._v("는 PX4를 안전하게 사용할 수 있는 한계/조건과 안전 장치가 트리거시 수행 작업(예: 착륙, 위치 유지 또는 지정 지점 복귀)을 정의합니다.")],1),t._v(" "),e("p",[t._v("SITL에서는 시뮬레이션 편리성을 위하여, 일부 안전 장치가 기본적으로 비활성화되어 있습니다. 실환경 테스트 이전에 SITL 시뮬레이션에서 안전에 중요한 기능을 테스트하는 방법을 설명합니다.")]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/ko/simulation/hitl.html"}},[t._v("HITL 시뮬레이션")]),t._v("을 사용하여 안전장치를 테스트할 수도 있습니다. HITL은 비행 컨트롤러의 일반 설정 매개변수를 사용합니다.")],1)]),t._v(" "),e("h2",{attrs:{id:"데이터-링크-손실"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#데이터-링크-손실"}},[t._v("#")]),t._v(" 데이터 링크 손실")]),t._v(" "),e("p",[e("em",[t._v("데이터 링크 손실")]),t._v(" 안전 장치(MAVLink를 통한 외부 데이터 사용 불가)는 기본적으로 활성화되어 있습니다. 따라서 연결된 GCS, SDK 또는 기타 MAVLink 애플리케이션에서만 시뮬레이션 가능합니다.")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#NAV_DLL_ACT"}},[t._v("NAV_DLL_ACT")]),t._v(" 매개변수를 사용할 안전장치로 설정하여 동작을 변경하십시오. 비활성화하려면 "),e("code",[t._v("0")]),t._v("으로 설정합니다.")],1),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[t._v("이 매개변수를 포함한 SITL의 모든 매개변수는 "),e("code",[t._v("make clean")]),t._v("하면 재설정됩니다. 예를 들면 "),e("code",[t._v("0")]),t._v(" 값은 안전 장치 동작을 끕니다.")]),t._v(" "),e("h2",{attrs:{id:"rc-링크-손실"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rc-링크-손실"}},[t._v("#")]),t._v(" RC 링크 손실")]),t._v(" "),e("p",[e("em",[t._v("RC 링크 손실")]),t._v(" 안전 장치(리모컨에서 데이터를 사용할 수 없음)는 기본적으로 활성화되어 있습니다. 다른 시험을 가로막는 배터리 용량 부족 상태를 유발하지 않고 지상 통제 장치의 배터리 표시를 시험해볼 수 있습니다.")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#NAV_RCL_ACT"}},[t._v("NAV_RCL_ACT")]),t._v(" 매개변수를 사용할 안전장치로 설정하여 동작을 변경하십시오. 비활성화하려면 "),e("code",[t._v("0")]),t._v("으로 설정합니다.")],1),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[t._v("이 매개변수를 포함한 SITL의 모든 매개변수는 "),e("code",[t._v("make clean")]),t._v("하면 재설정됩니다.")])])]),t._v(" "),e("h2",{attrs:{id:"배터리-부족"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#배터리-부족"}},[t._v("#")]),t._v(" 배터리 부족")]),t._v(" "),e("p",[t._v("시뮬레이션된 배터리는 에너지가 고갈되지 않도록 구현되며, 기본적으로 용량의 50%까지만 소모되므로 보고된 전압이 표시됩니다. "),e("em",[t._v("pxh shell")]),t._v("의 SITL 인스턴스에서 "),e("code",[t._v("param set SIM_GPS_BLOCK 1")]),t._v(" 명령과 "),e("code",[t._v("param set SIM_GPS_BLOCK 0")]),t._v(" 명령을 실행하여 GPS 메시지를 차단하고 해제하는 방식으로 시험해볼 수 있습니다.")]),t._v(" "),e("p",[t._v("이 최소 배터리 백분율은 매개변수 "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SIM_BAT_MIN_PCT"}},[t._v("SIM_BAT_MIN_PCT")]),t._v("에서 설정합니다.")],1),t._v(" "),e("p",[t._v("배터리가 최소값으로 소모되는 속도는 매개변수 "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SIM_BAT_DRAIN"}},[t._v("SIM_BAT_DRAIN")]),t._v("에서 설정하십시오.")],1),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("비행 중에 "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SIM_BAT_MIN_PCT"}},[t._v("SIM_BAT_MIN_PCT")]),t._v("를 변경하여 용량 회복을 테스트하여 부정확한 배터리 상태 추정 또는 기내 충전 기술을 시뮬레이션할 수 있습니다.")],1)]),t._v(" "),e("h2",{attrs:{id:"센서-시스템-장애"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#센서-시스템-장애"}},[t._v("#")]),t._v(" 센서/시스템 장애")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/ko/debug/failure_injection.html"}},[t._v("고장 주입")]),t._v("은 많은 센서와 시스템의 여러가지 오류를 시뮬레이션합니다. GPS가 없거나 간헐적으로 발생하는 경우, 특정 값에서 멈추거나 멈추는 RC 신호, 회피 시스템의 오류 등을 시뮬레이션 할 수 있습니다.")],1),t._v(" "),e("p",[t._v("GPS 오류를 시뮬레이션하려면 다음을 수행합니다.")]),t._v(" "),e("ol",[e("li",[t._v("매개변수 "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SYS_FAILURE_EN"}},[t._v("SYS_FAILURE_EN")]),t._v("을 활성화합니다.")],1),t._v(" "),e("li",[t._v("SITL 인스턴스 "),e("em",[t._v("pxh 셸")]),t._v("에서 다음 명령어를 실행합니다."),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Turn (all) GPS off")]),t._v("\nfailure gps off\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Turn (all) GPS on")]),t._v("\nfailure gps ok\n")])])])])]),t._v(" "),e("p",[t._v("지원되는 센서와 오류 목록은 "),e("RouterLink",{attrs:{to:"/ko/debug/failure_injection.html"}},[t._v("시스템 오류 주입")]),t._v("을 참고하십시오.")],1)])}),[],!1,null,null,null);_.default=v.exports}}]);