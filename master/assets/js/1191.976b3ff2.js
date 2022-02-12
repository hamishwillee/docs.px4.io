(window.webpackJsonp=window.webpackJsonp||[]).push([[1191],{2244:function(t,e,o){"use strict";o.r(e);var r=o(19),i=Object(r.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"모터-서보-점검"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#모터-서보-점검"}},[t._v("#")]),t._v(" 모터/서보 점검")]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("This section is being replaced by an "),o("RouterLink",{attrs:{to:"/ko/config/actuators.html"}},[t._v("Actuators")]),t._v(" configuration screen.")],1)]),t._v(" "),o("p",[t._v("After the airframe is setup and configured you should validate the motor assignment and spin direction, and the servo response. This can be done in "),o("em",[t._v("QGroundControl")]),t._v(", under the "),o("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/SetupView/Motors.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vehicle Setup > Motors"),o("OutboundLink")],1),t._v(" tab.")]),t._v(" "),o("p",[t._v("Note the following PX4-specific behaviour:")]),t._v(" "),o("ul",[o("li",[t._v("안전 버튼을 쿨러야 모터 테스트를 할 수 있습니다.")]),t._v(" "),o("li",[t._v("중지 스위치를 사용하여 모터를 즉시 중지할 수 있습니다.")]),t._v(" "),o("li",[t._v("매개 변수 "),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_MOT_TEST_EN"}},[t._v("COM_MOT_TEST_EN")]),t._v("을 사용하여 모터 테스트를 완전히 비활성화 할 수 있습니다.")],1),t._v(" "),o("li",[t._v("IO가 있는 보드에서는 MAIN 핀만 테스트할 수 있습니다.")]),t._v(" "),o("li",[t._v("셸에서 추가 옵션이 있는 "),o("RouterLink",{attrs:{to:"/ko/modules/modules_command.html#motortest"}},[t._v("motor_test")]),t._v("도 사용할 수 있습니다.")],1)]),t._v(" "),o("p",[t._v("If one or more of the motors do not turn in the correct direction according to the configured "),o("RouterLink",{attrs:{to:"/ko/airframes/airframe_reference.html"}},[t._v("airframe")]),t._v(", they must be reversed. There are several options:")],1),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/ko/peripherals/dshot.html"}},[t._v("DShot")]),t._v("을 지원하는 ESC를 사용하는 경우 "),o("RouterLink",{attrs:{to:"/ko/peripherals/dshot.html#commands"}},[t._v("DShot 명령")]),t._v("을 통해 방향을 바꿀 수 있습니다.")],1),t._v(" "),o("li",[t._v("모터 케이블 3개 중 2개를 바꿉니다 (어떤 케이블이든 상관 없음). :::note 모터가 총알 커넥터를 통해 연결되지 않은 경우 납땜을 다시 하여야 합니다 (이러한 이유로 DShot ESC를 선호합니다).\n:::")])]),t._v(" "),o("p",[t._v("The following additional checks should be performed to validate that the vehicle is setup correctly:")]),t._v(" "),o("ol",[o("li",[t._v("프로펠러가 제거된 상태에서 "),o("RouterLink",{attrs:{to:"/ko/flight_modes/manual_stabilized_mc.html"}},[t._v("안정화 모드")]),t._v(" (멀티콥터) 또는 "),o("RouterLink",{attrs:{to:"/ko/flight_modes/manual_fw.html"}},[t._v("수동 모드")]),t._v(" (고정익)로 전환하고 기체의 시동을 거십시오.")],1),t._v(" "),o("li",[t._v("추진력을 약간 높여서 (차량이 자동으로 시동이 꺼지지 않기 위하여) 모터의 회전 속도가 증가하는 지 확인합니다.")]),t._v(" "),o("li",[t._v("모든 모터가 최소 추진력으로 회전하는지 확인합니다.")]),t._v(" "),o("li",[t._v("기체에 일러론이있는 경우 롤/피치 스틱 입력 명령을 내릴 때 올바른 방향으로 반응하는지 확인하십시오.")])])])}),[],!1,null,null,null);e.default=i.exports}}]);