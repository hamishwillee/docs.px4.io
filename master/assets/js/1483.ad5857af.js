(window.webpackJsonp=window.webpackJsonp||[]).push([[1483],{2678:function(t,e,a){"use strict";a.r(e);var s=a(19),_=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"dshot-esc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dshot-esc"}},[t._v("#")]),t._v(" DShot ESC")]),t._v(" "),a("p",[t._v("DShot은 PWM 또는 OneShot에 비해 여러 가지 장점을 가진 ESC 대체 프로토콜입니다.")]),t._v(" "),a("ul",[a("li",[t._v("지연 시간 감소")]),t._v(" "),a("li",[t._v("체크섬을 통해 안정성이 향상되었습니다.")]),t._v(" "),a("li",[t._v("프로토콜이 디지털 인코딩을 사용하므로, ESC 보정이 필요하지 않습니다.")]),t._v(" "),a("li",[t._v("텔레메트리 피드백은 일부 ESC에서 사용 가능합니다.")]),t._v(" "),a("li",[t._v("필요시 명령어로 모터 회전 방향을 병경할 수 있습니다 (물리적으로 와이어를 이동/재 납땜하는 대신).")]),t._v(" "),a("li",[t._v("다른 유용한 명령어들이 지원됩니다.")])]),t._v(" "),a("p",[t._v("이 항목에서는 DShot ESC 연결과 설정 방법을 설명합니다.")]),t._v(" "),a("p",[a("span",{attrs:{id:"wiring"}})]),t._v(" "),a("h2",{attrs:{id:"배선"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#배선"}},[t._v("#")]),t._v(" 배선")]),t._v(" "),a("p",[t._v("DShot ESC는 "),a("RouterLink",{attrs:{to:"/ko/peripherals/pwm_escs_and_servo.html"}},[t._v("PWM ESC")]),t._v("와 동일한 방식으로 연결되며, 소프트웨어 매개변수를 변경하면 프로토콜을 전환할 수 있습니다 (ESC는 시작시 선택한 프로토콜을 자동으로 감지함).")],1),t._v(" "),a("p",[t._v("MAIN 포트만 있는 Pixhawk 비행 콘트롤러를 사용하는 경우에는 기체의 "),a("RouterLink",{attrs:{to:"/ko/airframes/airframe_reference.html"}},[t._v("기체 정의서")]),t._v("을 참고하여 핀을 연결하십시오.")],1),t._v(" "),a("p",[t._v("AUX 및 MAIN 레이블이 지정된 포트가 있는 Pixhawk를 사용하는 경우에는 "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SYS_USE_IO"}},[t._v("SYS_USE_IO=0")]),t._v("을 설정하고 ESC를 AUX 레이블이있는 출력에 "),a("em",[t._v("MAIN 레이블이 지정된 것처럼")]),t._v(" 연결합니다.")],1),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("FMU와 IO가 모두 있는 Pixhawk 비행 콘트롤러는 포트를 각각 AUX 및 MAIN으로 표시합니다. DShot은 FMU 포트(AUX로 표시)에서만 사용할 수 있습니다. 이는 ESC/모터 출력이 일반적으로 [기체 정의서](../airframes/airframe_reference.md)의 MAIN 포트에 할당되기 때문에 문제가 됩니다.")]),t._v(" "),a("p",[t._v("따라서 DShot을 사용하려면 일반적으로 "),a("code",[t._v("SYS_USE_IO=0")]),t._v("을 설정하고 (AUX 레이블이 지정된 포트가 MAIN 레이블이 지정된 포트인 것처럼 "),a("em",[t._v("거동")]),t._v("하게 함) ESC를 해당 AUX 라벨의 출력에 연결합니다. 일반적으로 "),a("RouterLink",{attrs:{to:"/ko/airframes/airframe_reference.html"}},[t._v("기체 정의서")]),t._v("의 AUX 포트에 할당되는 출력은 더 이상 사용할 수 없습니다.")],1),t._v(" "),a("p",[t._v("개발자는 멀티콥터 출력이 MAIN이 아닌 AUX 포트에 있도록 "),a("RouterLink",{attrs:{to:"/ko/dev_airframes/adding_a_new_frame.html#mixer-file"}},[t._v("에어 프레임 AUX 믹서")]),t._v("를 대안으로 수정할 수 있습니다.")],1)]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("FMUv5 기반 보드(예 : Pixhawk 4 또는 CUAV Pixhawk V5 +)는 하드웨어 충돌로 인하여 처음 4 개의 FMU 핀에서만 DShot을 지원합니다. 다른 핀은 모터/서보 출력으로 사용할 수 없습니다. FMUv5x-based boards support DShot only on the first six FMU pins.")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("FMU에서 DShot ESC/servos 및 PWM ESC/servos를 혼합할 수 없습니다 (DShot은 포트의 *모든* FMU 핀에 대해 활성화/비활성화 됨).")])]),t._v(" "),a("h2",{attrs:{id:"설정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#설정"}},[t._v("#")]),t._v(" 설정")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("ESC")]),t._v(" "),a("p",[t._v("설정 매개변수를 변경하기 전에 프로펠러를 제거하십시오!")])]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#DSHOT_CONFIG"}},[t._v("DSHOT_CONFIG")]),t._v(" 매개변수를 사용하여 DShot을 활성화합니다 (매개변수가 존재하지 않는 경우 보드는 DShot을 지원하지 않음).")],1),t._v(" "),a("p",[t._v("DShot에는 "),a("em",[t._v("DShot150")]),t._v(", "),a("em",[t._v("DShot300")]),t._v(", "),a("em",[t._v("DShot600")]),t._v(" 및 "),a("em",[t._v("DShot1200")]),t._v("과 같은 다양한 속도 옵션들이 있습니다. 여기에서 숫자는 속도를 나타냅니다. 매개변수를 ESC에서 지원하는 최고 속도 (데이터 시트에 따라)로 설정한 다음 기체를 재부팅하여야 합니다.")]),t._v(" "),a("p",[t._v("그런 다음 배터리를 연결하고 기체의 시동을 켭니다. ESC가 초기화되고 모터가 올바른 방향으로 회전하여야 합니다.")]),t._v(" "),a("ul",[a("li",[t._v("모터가 올바른 방향으로 회전하지 않으면 ("),a("RouterLink",{attrs:{to:"/ko/airframes/airframe_reference.html"}},[t._v("선택한 기체")]),t._v("에 대해) "),a("a",{attrs:{href:"#commands"}},[t._v("ESC 명령")]),t._v("을 전송하여 역 회전하십시오.")],1),t._v(" "),a("li",[t._v("모터가 최저 스로틀에서 회전하도록 "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#DSHOT_MIN"}},[t._v("DSHOT_MIN")]),t._v("을 조정합니다 (그러나 기체는 이륙하지 않음).")],1)]),t._v(" "),a("p",[a("span",{attrs:{id:"commands"}})]),t._v(" "),a("h2",{attrs:{id:"esc-명령어"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#esc-명령어"}},[t._v("#")]),t._v(" ESC 명령어")]),t._v(" "),a("p",[t._v("명령은 "),a("RouterLink",{attrs:{to:"/ko/debug/mavlink_shell.html"}},[t._v("MAVLink 쉘")]),t._v("을 통하여 ESC로 전송됩니다. 지원되는 전체 명령어는 "),a("RouterLink",{attrs:{to:"/ko/modules/modules_driver.html#dshot"}},[t._v("여기")]),t._v("를 참고하십시오.")],1),t._v(" "),a("p",[t._v("가장 중요한 것은 다음과 같습니다.")]),t._v(" "),a("ul",[a("li",[t._v("첫 번째 모터 신호음 만들기(모터 식별에 도움이 됨) :"),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("dshot beep1 -m 1\n")])])])]),t._v(" "),a("li",[t._v("첫 번째 모터의 회전 방향을 영구적으로 반전:"),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("dshot reverse -m 1\ndshot save -m 1\n")])])]),a("ul",[a("li",[t._v("Permanently reverse the spin direction of the first motor:")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("dshot reverse -m 1\ndshot save -m 1\n")])])]),t._v("Retrieving ESC information after the "),a("code",[t._v("dshot reverse -m 1")]),t._v(" command  without the "),a("code",[t._v("dshot save -m 1")]),t._v(" command will show:"),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Rotation Direction: reversed\n")])])]),t._v("after saving it with "),a("code",[t._v("dshot save -m 1")]),t._v(" command, reversed direction will become new normal direction:"),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Rotation Direction: normal\n")])])]),t._v("To change direction again new "),a("code",[t._v("dshot reverse -m 1")]),t._v(" command needs to be sent.")])]),t._v(" "),a("h2",{attrs:{id:"텔레메트리"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#텔레메트리"}},[t._v("#")]),t._v(" 텔레메트리")]),t._v(" "),a("p",[t._v("일부 ESC는 다음을 포함하여 텔레메트리 측정데이터를 비행 콘트롤러로 재전송할 수 있습니다.")]),t._v(" "),a("ul",[a("li",[t._v("온도")]),t._v(" "),a("li",[t._v("전압")]),t._v(" "),a("li",[t._v("전류")]),t._v(" "),a("li",[t._v("누적 전류 소비")]),t._v(" "),a("li",[t._v("RPM 값")])]),t._v(" "),a("p",[t._v("이러한 DShot ESC에는 추가 텔레메트리 와이어가 있습니다.")]),t._v(" "),a("p",[t._v("이 기능을 활성화하려면(지원 ESC에서) :")]),t._v(" "),a("ol",[a("li",[t._v("모든 ESC의 모든 원격 측정 와이어를 함께 연결한 다음, 사용하지 않는 비행 콘트롤러 직렬 포트의 RX핀 중 하나에 연결합니다.")]),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#DSHOT_TEL_CFG"}},[t._v("DSHOT_TEL_CFG")]),t._v("를 사용하여 해당 직렬 포트에서 텔레메트리를 활성화합니다.")],1)]),t._v(" "),a("p",[t._v("재부팅 후 다음을 사용하여 텔레메트리 작동 여부를 확인할 수 있습니다 (배터리가 연결되어 있는 지 확인).")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("dshot esc_info -m 1\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("올바른 RPM 값을 얻으려면 "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MOT_POLE_COUNT"}},[t._v("MOT_POLE_COUNT")]),t._v("를 설정하여야 합니다.")],1)]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("원격 분석이 지원되고 활성화된 경우에도, 모든 DSHOT 가능 ESC가 "),a("code",[t._v("[esc_info]")]),t._v(" (예 : APD 80F3x)를 지원하지 않을 수도 있습니다. 결과 오류는 다음과 같습니다.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("ERROR [dshot] No data received. 텔레메트리가 올바르게 설정되어 있으면, 다시 시도하십시오.\n")])])]),a("p",[t._v("세부 사항은 제조업체 문서를 확인하십시오.")])])])}),[],!1,null,null,null);e.default=_.exports}}]);