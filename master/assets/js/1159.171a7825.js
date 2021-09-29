(window.webpackJsonp=window.webpackJsonp||[]).push([[1159],{2180:function(_,e,t){"use strict";t.r(e);var v=t(19),a=Object(v.a)({},(function(){var _=this,e=_.$createElement,t=_._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"시스템-장애-주입"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#시스템-장애-주입"}},[_._v("#")]),_._v(" 시스템 장애 주입")]),_._v(" "),t("p",[t("a",{attrs:{href:"https://mavsdk.mavlink.io/main/en/cpp/api_reference/classmavsdk_1_1_failure.html",target:"_blank",rel:"noopener noreferrer"}},[_._v("MAVSDK 오류 플러그인"),t("OutboundLink")],1),_._v("을 사용하는 프로그래밍 방식이나 "),t("RouterLink",{attrs:{to:"/ko/debug/mavlink_shell.html#mavlink-shell"}},[_._v("MAVLink 셸")]),_._v("과 같은 PX4 콘솔을 통하여, 수동으로 다양한 유형의 센서등과 같은 시스템 오류를 주입할 수 있습니다. 이를 통하여 "),t("RouterLink",{attrs:{to:"/ko/config/safety.html#safety-configuration-failsafes"}},[_._v("안전 안전장치")]),_._v(" 동작 보다 일반적으로 시스템과 센서가 올바르게 작동하지 않을 때, PX4 동작 방식을 보다 쉽게 테스트할 수 있습니다.")],1),_._v(" "),t("p",[_._v("실패 주입은 기본적으로 비활성화되어 있으며, "),t("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SYS_FAILURE_EN"}},[_._v("SYS_FAILURE_EN")]),_._v(" 매개변수를 사용하여 활성화할 수 있습니다.")],1),_._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[_._v("WARNING")]),_._v(" "),t("p",[_._v("실패 주입은 아직 개발 중입니다. 작성 당시(PX4 v1.12):")]),_._v(" "),t("ul",[t("li",[_._v("시뮬레이션에서만 사용할 수 있습니다(실제 비행에서 실패 주입 모두 지원 예정).")]),_._v(" "),t("li",[_._v('많은 실패 유형이 광범위하게 구현되지 않았습니다. 이러한 경우 명령은 "지원되지 않는" 메시지와 함께 반환됩니다.')])])]),_._v(" "),t("h2",{attrs:{id:"장애-시스템-명령"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#장애-시스템-명령"}},[_._v("#")]),_._v(" 장애 시스템 명령")]),_._v(" "),t("p",[_._v("모든 PX4 콘솔/셸에서 "),t("RouterLink",{attrs:{to:"/ko/modules/modules_command.html#failure"}},[_._v("failure system 명령")]),_._v("을 사용하여 실패 대상과 실패 유형을 모두 지정하여 실패를 주입할 수 있습니다.")],1),_._v(" "),t("h3",{attrs:{id:"구문"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#구문"}},[_._v("#")]),_._v(" 구문")]),_._v(" "),t("p",[t("RouterLink",{attrs:{to:"/ko/modules/modules_command.html#failure"}},[_._v("failure")]),_._v(" 명령의 전체 구문은 다음과 같습니다.")],1),_._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("failure <component> <failure_type> [-i <instance_number>]\n")])])]),t("p",[_._v("여기서:")]),_._v(" "),t("ul",[t("li",[t("em",[_._v("구성요소")]),_._v(":\n"),t("ul",[t("li",[_._v("센서:\n"),t("ul",[t("li",[t("code",[_._v("gyro")]),_._v(": 자이로")]),_._v(" "),t("li",[t("code",[_._v("accel")]),_._v(": 가속도계")]),_._v(" "),t("li",[t("code",[_._v("mag")]),_._v(": 자기계")]),_._v(" "),t("li",[t("code",[_._v("baro")]),_._v(": 기압계")]),_._v(" "),t("li",[t("code",[_._v("gps")]),_._v(": GPS")]),_._v(" "),t("li",[t("code",[_._v("optical_flow")]),_._v(": 광류 센서")]),_._v(" "),t("li",[t("code",[_._v("vio")]),_._v(": 시각적 관성 주행 거리")]),_._v(" "),t("li",[t("code",[_._v("distance_sensor")]),_._v(": 거리 센서(거리 측정기)")]),_._v(" "),t("li",[t("code",[_._v("airspeed")]),_._v(": 대기속도 센서")])])]),_._v(" "),t("li",[_._v("시스템:\n"),t("ul",[t("li",[t("code",[_._v("battery")]),_._v(": 배터리")]),_._v(" "),t("li",[t("code",[_._v("motor")]),_._v(": 모터")]),_._v(" "),t("li",[t("code",[_._v("servo")]),_._v(": 서보")]),_._v(" "),t("li",[t("code",[_._v("avoidance")]),_._v(": 회피")]),_._v(" "),t("li",[t("code",[_._v("rc_signal")]),_._v(": RC 신호")]),_._v(" "),t("li",[t("code",[_._v("mavlink_signal")]),_._v(": MAVLink 신호(데이터 텔레메트리)")])])])])]),_._v(" "),t("li",[t("em",[_._v("failure_type")]),_._v(":\n"),t("ul",[t("li",[t("code",[_._v("ok")]),_._v(": 정상적으로 게시합니다(실패 주입 비활성화).")]),_._v(" "),t("li",[t("code",[_._v("off")]),_._v(": 게시를 중지합니다.")]),_._v(" "),t("li",[t("code",[_._v("stuck")]),_._v(": 매번 같은 값을 보고합니다(센서 오작동을 "),t("em",[_._v("나타낼 수 있음")]),_._v(").")]),_._v(" "),t("li",[t("code",[_._v("garbage")]),_._v(": 무작위 노이즈를 게시합니다. 초기화되지 않은 메모리를 읽는 것처럼 보입니다.")]),_._v(" "),t("li",[t("code",[_._v("wrong")]),_._v(': 잘못된 값을 게시합니다(여전히 합리적으로 보이거나 "쓰레기"가 아님).')]),_._v(" "),t("li",[t("code",[_._v("slow")]),_._v(": 낮은 속도로 게시합니다.")]),_._v(" "),t("li",[t("code",[_._v("delayed")]),_._v(": 상당한 지연으로 유효한 데이터를 게시합니다.")]),_._v(" "),t("li",[t("code",[_._v("intermittent")]),_._v(": 간헐적으로 게시합니다.")])])]),_._v(" "),t("li",[t("em",[_._v("instance number")]),_._v("(선택 사항): 영향을 받는 센서의 인스턴스 번호입니다. 0 (기본값) 지정된 유형의 모든 센서를 나타냅니다.")])]),_._v(" "),t("h3",{attrs:{id:"예"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#예"}},[_._v("#")]),_._v(" 예")]),_._v(" "),t("p",[_._v("RC 컨트롤러를 끄지 않고, RC 신호 손실을 시뮬레이션하려면:")]),_._v(" "),t("ol",[t("li",[_._v("매개변수 "),t("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SYS_FAILURE_EN"}},[_._v("SYS_FAILURE_EN")]),_._v("을 활성화합니다.")],1),_._v(" "),t("li",[_._v("MAVLink 콘솔 또는 SITL "),t("em",[_._v("pxh 셸")]),_._v("에서 다음 명령을 실행합니다."),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[_._v("# Fail RC (turn publishing off)")]),_._v("\nfailure rc_signal off\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[_._v("# Restart RC publishing")]),_._v("\nfailure rc_signal ok\n")])])])])]),_._v(" "),t("h2",{attrs:{id:"mavsdk-실패-플러그인"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mavsdk-실패-플러그인"}},[_._v("#")]),_._v(" MAVSDK 실패 플러그인")]),_._v(" "),t("p",[t("a",{attrs:{href:"https://mavsdk.mavlink.io/main/en/cpp/api_reference/classmavsdk_1_1_failure.html",target:"_blank",rel:"noopener noreferrer"}},[_._v("MAVSDK 실패 플러그인"),t("OutboundLink")],1),_._v("을 사용하여, 프로그래밍 방식으로 실패를 주입할 수 있습니다. "),t("RouterLink",{attrs:{to:"/ko/test_and_ci/integration_testing_mavsdk.html"}},[_._v("PX4 통합 테스트")]),_._v("에서 실패 사례를 시뮬레이션하는 데 사용됩니다(예: "),t("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/test/mavsdk_tests/autopilot_tester.cpp",target:"_blank",rel:"noopener noreferrer"}},[_._v("PX4-Autopilot/test/mavsdk_tests/autopilot_tester.cpp"),t("OutboundLink")],1),_._v(" 참조).")],1),_._v(" "),t("p",[_._v("플러그인 API는 연결과 관련된 몇 가지 추가 오류 신호와 함께, 위에 표시된 실패 명령의 직접 매핑입니다.")])])}),[],!1,null,null,null);e.default=a.exports}}]);