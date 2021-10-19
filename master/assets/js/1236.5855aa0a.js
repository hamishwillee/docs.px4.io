(window.webpackJsonp=window.webpackJsonp||[]).push([[1236],{2393:function(s,t,e){"use strict";e.r(t);var a=e(19),r=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"uorb-메시징"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#uorb-메시징"}},[s._v("#")]),s._v(" uORB 메시징")]),s._v(" "),e("h2",{attrs:{id:"소개"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#소개"}},[s._v("#")]),s._v(" 소개")]),s._v(" "),e("p",[s._v("uORB는 스레드 간/프로세스 간 통신에 사용되는 비동기식 "),e("code",[s._v("publish()")]),s._v(" / "),e("code",[s._v("subscribe()")]),s._v(" 메시징 API입니다.")]),s._v(" "),e("p",[s._v("C++에서의 사용 방법은 "),e("RouterLink",{attrs:{to:"/ko/modules/hello_sky.html"}},[s._v("자습서")]),s._v("를 참고하십시오.")],1),s._v(" "),e("p",[s._v("많은 응용 프로그램이 uORB에 의존하므로 uORB는 부팅시에 자동으로 시작됩니다. "),e("code",[s._v("uorb start")]),s._v(" 로 시작합니다. 단위 테스트는 "),e("code",[s._v("uorb_tests")]),s._v("로 시작합니다.")]),s._v(" "),e("h2",{attrs:{id:"새로운-토픽-추가하기"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#새로운-토픽-추가하기"}},[s._v("#")]),s._v(" 새로운 토픽 추가하기")]),s._v(" "),e("p",[s._v("새로운 uORB 토픽은 메인 PX4/PX4-Autopilot 저장소에 추가하거나 트리 외부 메시지 정의에 추가할 수 있습니다. 트리 외부 uORB 메시지 정의 추가에 대한 정보는 "),e("RouterLink",{attrs:{to:"/ko/advanced/out_of_tree_modules.html#out-of-tree-uorb-message-definitions"}},[s._v("이 섹션")]),s._v("을 참고하십시오.")],1),s._v(" "),e("p",[s._v("새 토픽을 추가하려면, "),e("code",[s._v("msg/")]),s._v(" 디렉터리에 새 "),e("strong",[s._v(".msg")]),s._v(" 파일을 만들고 파일 이름을 "),e("code",[s._v("msg/CMakeLists.txt")]),s._v(" 목록에 추가합니다. 이렇게 하면, 필요한 C/C++ 코드가 자동으로 생성됩니다.")]),s._v(" "),e("p",[s._v("지원되는 유형에 대한 기존 "),e("code",[s._v("msg")]),s._v(" 파일을 살펴보십시오. 메시지는 다른 메시지에 중첩되어 사용될 수 있습니다.")]),s._v(" "),e("p",[s._v("생성된 각 C/C++ 구조체에 "),e("code",[s._v("uint64_t timestamp")]),s._v(" 필드가 추가됩니다. 이것은 로거에 사용되며, 메시지 게시시에 입력하여야 합니다.")]),s._v(" "),e("p",[s._v("코드에서 주제를 사용하려면 헤더를 포함하십시오.")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("#include <uORB/topics/topic_name.h>\n")])])]),e("p",[e("code",[s._v(".msg")]),s._v(" 파일에 다음과 같은 줄을 추가하여, 여러 개의 독립적인 토픽의 단일 메시지 정의를 사용할 수 있습니다.")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# TOPICS mission offboard_mission onboard_mission\n")])])]),e("p",[s._v("그런 다음 코드에서 토픽 ID로 사용합니다. "),e("code",[s._v("ORB_ID(offboard_mission)")]),s._v(".")]),s._v(" "),e("h2",{attrs:{id:"퍼블리시-게시"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#퍼블리시-게시"}},[s._v("#")]),s._v(" 퍼블리시(게시)")]),s._v(" "),e("p",[s._v("토픽 게시는 인터럽트 컨텍스트("),e("code",[s._v("hrt_call")]),s._v(" API에 의해 호출되는 함수)를 포함하여 시스템의 어디에서나 수행할 수 있습니다. 그러나, 토픽 게시는 인터럽트 컨텍스트 외부에서만 가능합니다. 주제는 나중에 게시되는 것과 동일한 프로세스에서 광고되어야 합니다.")]),s._v(" "),e("h2",{attrs:{id:"토픽-나열-및-듣기"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#토픽-나열-및-듣기"}},[s._v("#")]),s._v(" 토픽 나열 및 듣기")]),s._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[s._v("Note")]),s._v(" "),e("p",[e("code",[s._v("listener")]),s._v(" 명령은 Pixracer(FMUv4)와 Linux/OS X에서만 사용할 수 있습니다.")])]),s._v(" "),e("p",[s._v("모든 토픽을 나열하려면, 파일 핸들을 나열하십시오.")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" /obj\n")])])]),e("p",[s._v("5개의 메시지에 대해 한 토픽의 내용을 들으려면, 리스너를 실행하십시오.")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("listener sensor_accel "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n")])])]),e("p",[s._v("출력은 주제 내용의 n배입니다.")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("TOPIC: sensor_accel "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#3")]),s._v("\ntimestamp: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("84978861")]),s._v("\nintegral_dt: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4044")]),s._v("\nerror_count: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nx: -1\ny: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\nz: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("\nx_integral: -0\ny_integral: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nz_integral: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\ntemperature: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("46")]),s._v("\nrange_m_s2: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("78")]),s._v("\nscaling: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n\nTOPIC: sensor_accel "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#4")]),s._v("\ntimestamp: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("85010833")]),s._v("\nintegral_dt: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3980")]),s._v("\nerror_count: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nx: -1\ny: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\nz: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("\nx_integral: -0\ny_integral: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nz_integral: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\ntemperature: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("46")]),s._v("\nrange_m_s2: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("78")]),s._v("\nscaling: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n")])])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),e("p",[s._v("NuttX 기반 시스템(Pixhawk, Pixracer 등)에서 "),e("em",[s._v("QGroundControl")]),s._v(" MAVLink 콘솔 내에서 "),e("code",[s._v("listener")]),s._v(" 명령을 호출하여 센서 및 기타 주제의 값을 검사할 수 있습니다. 이것은 QGC가 무선 틍신으로 연결된 경우에도(예: 차량이 비행 중일 때) 사용할 수 있는 강력한 디버깅 도구입니다. 자세한 내용은 "),e("RouterLink",{attrs:{to:"/ko/debug/sensor_uorb_topic_debugging.html"}},[s._v("센서/주제 디버깅")]),s._v("을 참고하십시오.")],1)]),s._v(" "),e("h3",{attrs:{id:"uorb-top-명령어"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#uorb-top-명령어"}},[s._v("#")]),s._v(" uorb top 명령어")]),s._v(" "),e("p",[e("code",[s._v("uorb top")]),s._v(" 명령은 실시간으로 각 주제의 게시 빈도를 나타냅니다.")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("update: 1s, num topics: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("77")]),s._v("\nTOPIC NAME                        INST "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#SUB #MSG #LOST #QSIZE")]),s._v("\nactuator_armed                       "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("    "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("     "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nactuator_controls_0                  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("242")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1044")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nbattery_status                       "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("500")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2694")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\ncommander_state                      "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("98")]),s._v("    "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("89")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\ncontrol_state                        "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("242")]),s._v("   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("433")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nekf2_innovations                     "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("242")]),s._v("   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("223")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nekf2_timestamps                      "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("242")]),s._v("    "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nestimator_status                     "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("242")]),s._v("   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("488")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nmc_att_ctrl_status                   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("242")]),s._v("     "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nsensor_accel                         "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("242")]),s._v("     "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nsensor_accel                         "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("    "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("249")]),s._v("    "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("43")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nsensor_baro                          "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("42")]),s._v("     "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nsensor_combined                      "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("242")]),s._v("   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("636")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])])]),e("p",[s._v("각 칼럼은 주제 이름, 다중 인스턴스 인덱스, 구독자 수, 게시 빈도(Hz), 초당 손실된 메시지 수(모든 구독자가 결합된 경우) 및 대기열 크기입니다.")]),s._v(" "),e("h2",{attrs:{id:"다중-인스턴스"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#다중-인스턴스"}},[s._v("#")]),s._v(" 다중 인스턴스")]),s._v(" "),e("p",[s._v("uORB는 "),e("code",[s._v("orb_advertise_multi")]),s._v("로 동일한 주제의 여러 독립 인스턴스를 게시하는 메커니즘을 제공합니다. 게시자에게 인스턴스 인덱스를 반환합니다. 그러면, 구독자는 "),e("code",[s._v("orb_subscribe_multi")]),s._v("를 사용하여, 구독할 인스턴스를 선택하여야 합니다("),e("code",[s._v("orb_subscribe")]),s._v("는 첫 번째 인스턴스에 구독). 예를 들어, 시스템에 동일 유형의 센서가 여러 개 있는 경우에는 인스턴스가 여러 개 있으면 유용합니다.")]),s._v(" "),e("p",[s._v("동일한 주제에 대하여 "),e("code",[s._v("orb_advertise_multi")]),s._v("와 "),e("code",[s._v("orb_advertise")]),s._v("를 혼용하지 마십시오.")]),s._v(" "),e("p",[s._v("전체 API는 "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/platforms/common/uORB/uORBManager.hpp",target:"_blank",rel:"noopener noreferrer"}},[s._v("platforms/common/uORB/uORBManager.hpp"),e("OutboundLink")],1),s._v("를 참고하십시오.")]),s._v(" "),e("p",[e("a",{attrs:{id:"deprecation"}})]),s._v(" "),e("h2",{attrs:{id:"메시지-필드-지원-중단"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#메시지-필드-지원-중단"}},[s._v("#")]),s._v(" 메시지/필드 지원 중단")]),s._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/PX4/flight_review",target:"_blank",rel:"noopener noreferrer"}},[s._v("비행 검토"),e("OutboundLink")],1),s._v("와 같이 로그 파일의 uORB 메시지를 사용하는 외부 도구가 있으므로, 기존 메시지를 업데이트할 때 다음과 같은 측면을 고려하여야 합니다.")]),s._v(" "),e("ul",[e("li",[s._v("업데이트에 대한 타당한 이유가 있는 경우에는, 외부 도구가 의존하는 기존 필드 또는 메시지를 변경하는 것이 일반적으로 허용됩니다. 특히 "),e("em",[s._v("비행 검토")]),s._v("에 대한 주요 변경사항의 경우에는, 코드가 "),e("code",[s._v("마스터")]),s._v("에 병합되기 전에 "),e("em",[s._v("비행 검토")]),s._v("를 업데이트하여야 합니다.")]),s._v(" "),e("li",[s._v("외부 도구가 두 메시지 버전을 확실하게 구별하려면, 다음 단계를 따라야 합니다.\n"),e("ul",[e("li",[s._v("제거되거나 이름이 변경된 메시지는 "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/c5a6a60903455c3600f47e3c45ecaa48614559c8/msg/CMakeLists.txt#L189",target:"_blank",rel:"noopener noreferrer"}},[s._v("msg/CMakeLists.txt"),e("OutboundLink")],1),s._v("의 "),e("code",[s._v("deprecated_msgs")]),s._v(" 목록에 추가하여야 하며, "),e("strong",[s._v(".msg")]),s._v(" 파일을 삭제하여야 합니다.")]),s._v(" "),e("li",[s._v("제거되거나 이름이 변경된 필드는 주석을 달고 더 이상 사용되지 않는 것으로 표시하여야 합니다. 예를 들어, "),e("code",[s._v("uint8 quat_reset_counter")]),s._v("는 "),e("code",[s._v("# DEPRECATED: uint8 quat_reset_counter")]),s._v("가 됩니다. 이것은 제거된 필드(또는 메시지)가 다시 추가되지 않도록 하기 위한 것입니다.")]),s._v(" "),e("li",[s._v("의미 변경의 경우(예: 단위가 도에서 라디안으로 변경) 필드 이름도 변경하여야 하며, 이전 필드도 위와 같이 더 이상 사용되지 않는 것으로 표시되어야 합니다.")])])])])])}),[],!1,null,null,null);t.default=r.exports}}]);