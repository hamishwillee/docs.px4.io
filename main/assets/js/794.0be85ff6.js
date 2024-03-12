(window.webpackJsonp=window.webpackJsonp||[]).push([[794],{2802:function(t,s,a){"use strict";a.r(s);var n=a(19),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"디버그-값-송수신"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#디버그-값-송수신"}},[t._v("#")]),t._v(" 디버그 값 송수신")]),t._v(" "),n("p",[t._v("소프트웨어 개발시에 개별 중요 숫자를 출력하는 경우가 종종 있습니다. 이 때가 보통 MAVLink 패킷이 들어올 때 "),n("code",[t._v("NAMED_VALUE_FLOAT")]),t._v(", "),n("code",[t._v("DEBUG")]),t._v(", "),n("code",[t._v("DEBUG_VECT")]),t._v(" 패킷을 활용할 수 있는 경우입니다.")]),t._v(" "),n("h2",{attrs:{id:"mavlink-디버그-메시지와-uorb-주제-간의-매핑"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mavlink-디버그-메시지와-uorb-주제-간의-매핑"}},[t._v("#")]),t._v(" MAVLink 디버그 메시지와 uORB 주제 간의 매핑")]),t._v(" "),n("p",[t._v("MAVLink 디버그 메시지는 uORB 주제로/에서 번역됩니다. MAVLink 디버그 메시지를 보내거나 받으려면, 해당 주제를 각각 게시하거나 구독해야 합니다. 다음은 MAVLink 디버그 메시지와 uORB 주제 간의 매핑을 요약한 표입니다.")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("MAVLink 메시지")]),t._v(" "),n("th",[t._v("uORB 주제")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("NAMED_VALUE_FLOAT")]),t._v(" "),n("td",[t._v("debug_key_value")])]),t._v(" "),n("tr",[n("td",[t._v("DEBUG")]),t._v(" "),n("td",[t._v("debug_value")])]),t._v(" "),n("tr",[n("td",[t._v("DEBUG_VECT")]),t._v(" "),n("td",[t._v("debug_vect")])])])]),t._v(" "),n("h2",{attrs:{id:"튜토리얼-문자열-부동-소수점-쌍-보내기"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#튜토리얼-문자열-부동-소수점-쌍-보내기"}},[t._v("#")]),t._v(" 튜토리얼: 문자열 / 부동 소수점 쌍 보내기")]),t._v(" "),n("p",[t._v("이 튜토리얼은 관련 uORB 주제 "),n("code",[t._v("debug_key_value")]),t._v("를 사용하여 MAVLink 메시지 "),n("code",[t._v("NAMED_VALUE_FLOAT")]),t._v("를 전송하는 방법을 설명합니다.")]),t._v(" "),n("p",[t._v("이 자습서의 코드는 다음에서 사용할 수 있습니다.")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/src/examples/px4_mavlink_debug/px4_mavlink_debug.cpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("튜토리얼 코드 디버그"),n("OutboundLink")],1)]),t._v(" "),n("li",[t._v("보드 구성에서 MAVLink 디버그 앱("),n("strong",[t._v("px4_mavlink_debug")]),t._v(")의 주석 처리를 제거하여 "),n("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/boards/px4/fmu-v5/default.cmake",target:"_blank",rel:"noopener noreferrer"}},[t._v("튜토리얼 앱을 활성화"),n("OutboundLink")],1),t._v("합니다.")])]),t._v(" "),n("p",[t._v("디버그 게시를 설정에 필요한 것은 아래의 코드입니다. 먼저 헤더 파일을 추가합니다.")]),t._v(" "),n("div",{staticClass:"language-C extra-class"},[n("pre",{pre:!0,attrs:{class:"language-c"}},[n("code",[n("span",{pre:!0,attrs:{class:"token macro property"}},[n("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),n("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("<uORB/uORB.h>")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token macro property"}},[n("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),n("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("<uORB/topics/debug_key_value.h>")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token macro property"}},[n("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),n("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("<string.h>")])]),t._v("\n")])])]),n("p",[t._v("그런 다음 디버그 값 주제를 광고합니다(공개된 다른 이름에 대해 하나의 광고로 충분함). 이 코드를 메인 루프 앞에 추가합니다.")]),t._v(" "),n("div",{staticClass:"language-C extra-class"},[n("pre",{pre:!0,attrs:{class:"language-c"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* advertise debug value */")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("debug_key_value_s")]),t._v(" dbg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("strncpy")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dbg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"velx"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("sizeof")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dbg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndbg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0f")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("orb_advert_t")]),t._v(" pub_dbg "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("orb_advertise")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ORB_ID")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("debug_key_value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("dbg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("이렇게 하면 메인 루프에서 메시지 전송은 상당히 간단해 집니다.")]),t._v(" "),n("div",{staticClass:"language-C extra-class"},[n("pre",{pre:!0,attrs:{class:"language-c"}},[n("code",[t._v("dbg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" position"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("orb_publish")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ORB_ID")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("debug_key_value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pub_dbg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("dbg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),n("p",[t._v("Multiple debug messages must have enough time between their respective publishings for Mavlink to process them.\n이는 코드가 여러 디버그 메시지 게시 사이에 대기하거나, 각 함수 호출 반복에서 메시지를 대체하는 것을 의미합니다.")])]),t._v(" "),n("p",[t._v("QGroundControl의 결과는 실시간 플롯에서 다음과 같습니다.")]),t._v(" "),n("p",[n("img",{attrs:{src:a(724),alt:"QGC 디버그값 플롯"}})]),t._v(" "),n("h2",{attrs:{id:"튜토리얼-문자열-부동-소수점-쌍-수신"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#튜토리얼-문자열-부동-소수점-쌍-수신"}},[t._v("#")]),t._v(" 튜토리얼: 문자열 / 부동 소수점 쌍 수신")]),t._v(" "),n("p",[t._v("다음 코드는 이전 튜토리얼에서 전송된 "),n("code",[t._v("velx")]),t._v(" 디버그 변수를 수신하는 방법을 설명합니다.")]),t._v(" "),n("p",[t._v("먼저 "),n("code",[t._v("debug_key_value")]),t._v(" 주제를 구독하십시오.")]),t._v(" "),n("div",{staticClass:"language-C extra-class"},[n("pre",{pre:!0,attrs:{class:"language-c"}},[n("code",[n("span",{pre:!0,attrs:{class:"token macro property"}},[n("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),n("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("<poll.h>")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token macro property"}},[n("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),n("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("<uORB/topics/debug_key_value.h>")])]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" debug_sub_fd "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("orb_subscribe")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ORB_ID")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("debug_key_value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),n("p",[t._v("이후 토픽을 폴링 처리하십시오:")]),t._v(" "),n("div",{staticClass:"language-C extra-class"},[n("pre",{pre:!0,attrs:{class:"language-c"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* one could wait for multiple topics with this technique, just using one here */")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("px4_pollfd_struct_t")]),t._v(" fds"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fd "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" debug_sub_fd"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("events "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" POLLIN "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("true"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* wait for debug_key_value for 1000 ms (1 second) */")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" poll_ret "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("px4_poll")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fds"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),n("p",[n("code",[t._v("debug_key_value")]),t._v(" 주제에서 새 메시지를 사용할 수 있는 경우 "),n("code",[t._v("velx")]),t._v("와 다른 키를 가진 메시지를 삭제하기 위하여, 키 속성을 기준으로 메시지를 필터링하는 것을 잊지 마십시오.")]),t._v(" "),n("div",{staticClass:"language-C extra-class"},[n("pre",{pre:!0,attrs:{class:"language-c"}},[n("code",[t._v("    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fds"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("revents "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" POLLIN"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* obtained data for the first file descriptor */")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("debug_key_value_s")]),t._v(" dbg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* copy data into local buffer */")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("orb_copy")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ORB_ID")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("debug_key_value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" debug_sub_fd"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("dbg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* filter message based on its key attribute */")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("strcmp")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_sub_debug_vect"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"velx"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("PX4_INFO")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"velx:\\t%8.4f"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dbg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports},724:function(t,s,a){t.exports=a.p+"assets/img/qgc-debugval-plot.6cafbc4c.jpg"}}]);