(window.webpackJsonp=window.webpackJsonp||[]).push([[1434],{2773:function(a,t,e){"use strict";e.r(t);var s=e(19),r=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"모듈-참조-통신"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#모듈-참조-통신"}},[a._v("#")]),a._v(" 모듈 참조: 통신")]),a._v(" "),e("h2",{attrs:{id:"frsky-telemetry"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#frsky-telemetry"}},[a._v("#")]),a._v(" frsky_telemetry")]),a._v(" "),e("p",[a._v("소스: "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/drivers/telemetry/frsky_telemetry",target:"_blank",rel:"noopener noreferrer"}},[a._v("drivers/telemetry/frsky_telemetry"),e("OutboundLink")],1)]),a._v(" "),e("p",[a._v("FrSky 텔레메트리를 지원합니다. D 또는 S.PORT 프로토콜을 자동으로 감지합니다.\n"),e("a",{attrs:{id:"frsky_telemetry_usage"}})]),a._v(" "),e("h3",{attrs:{id:"사용법"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#사용법"}},[a._v("#")]),a._v(" 사용법")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("frsky_telemetry <command> [arguments...]\n Commands:\n   start\n     [-d <val>]  Select Serial Device\n                 values: <file:dev>, default: /dev/ttyS6\n     [-t <val>]  Scanning timeout [s] (default: no timeout)\n                 default: 0\n     [-m <val>]  Select protocol (default: auto-detect)\n                 values: sport|sport_single|sport_single_invert|dtype, default:\n                 auto\n")])])]),e("h2",{attrs:{id:"mavlink"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mavlink"}},[a._v("#")]),a._v(" mavlink")]),a._v(" "),e("p",[a._v("소스: "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/modules/mavlink",target:"_blank",rel:"noopener noreferrer"}},[a._v("modules/mavlink"),e("OutboundLink")],1)]),a._v(" "),e("h3",{attrs:{id:"설명"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#설명"}},[a._v("#")]),a._v(" 설명")]),a._v(" "),e("p",[a._v("이 모듈은 직렬 링크 또는 UDP 네트워크에서 사용할 수 있는 MAVLink 프로토콜을 구현합니다. uORB로 시스템과 통신합니다. 일부 메시지는 모듈에서 직접 처리되고(예: 임무 프로토콜), 다른 메시지는 uORB를 통하여 게시됩니다(예: vehicle_command).")]),a._v(" "),e("p",[a._v("스트림은 차량 자세와 같은 특정 속도로 주기적 메시지를 전송합니다. mavlink 인스턴스를 시작시에 활성화된 스트림 세트를 속도와 함께 정의하는 모드를 지정할 수 있습니다. 실행 중인 인스턴스의 경우 "),e("code",[a._v("mavlink stream")]),a._v(" 명령어를 통하여 스트림을 설정할 수 있습니다.")]),a._v(" "),e("p",[a._v("하나의 직렬 장치 또는 네트워크 포트에 각각 연결된 모듈의 여러 독립 인스턴스가 있을 수 있습니다.")]),a._v(" "),e("h3",{attrs:{id:"구현"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#구현"}},[a._v("#")]),a._v(" 구현")]),a._v(" "),e("p",[a._v("구현은 송신 및 수신 스레드의 2개 스레드를 사용합니다. 전송자는 고정된 속도로 실행되며, 결합된 대역폭이 설정된 속도("),e("code",[a._v("-r")]),a._v(")보다 높거나 물리적 링크가 포화된 경우 스트림의 속도를 동적으로 줄입니다. 이것은 "),e("code",[a._v("mavlink status")]),a._v("로 확인할 수 있습니다. "),e("code",[a._v("rate mult")]),a._v("가 1보다 작은 지 확인하십시오.")]),a._v(" "),e("p",[e("strong",[a._v("주의")]),a._v(": 일부 데이터는 두 스레드에서 모두 액세스 및 수정되므로 코드를 변경하거나, 기능을 확장시에 경쟁 조건과 데이터 손상을 방지하기 위하여 이를 고려하여야 합니다.")]),a._v(" "),e("h3",{attrs:{id:"예"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#예"}},[a._v("#")]),a._v(" 예")]),a._v(" "),e("p",[a._v("전송 속도가 921600이고, 최대 전송 속도가 80kB/s인 ttyS1 직렬 포트에서 mavlink를 시작합니다.")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("mavlink start -d /dev/ttyS1 -b 921600 -m onboard -r 80000\n")])])]),e("p",[a._v("UDP 포트 14556에서 mavlink를 시작하고, 50Hz로 HIGHRES_IMU 메시지를 활성화합니다.")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("mavlink start -u 14556 -r 1000000\nmavlink stream -u 14556 -s HIGHRES_IMU -r 50\n")])])]),e("p",[e("a",{attrs:{id:"mavlink_usage"}})]),a._v(" "),e("h3",{attrs:{id:"사용법-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#사용법-2"}},[a._v("#")]),a._v(" 사용법")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("mavlink <command> [arguments...]\n Commands:\n   start         Start a new instance\n     [-d <val>]  Select Serial Device\n                 values: <file:dev>, default: /dev/ttyS1\n     [-b <val>]  Baudrate (can also be p:<param_name>)\n                 default: 57600\n     [-r <val>]  Maximum sending data rate in B/s (if 0, use baudrate / 20)\n                 default: 0\n     [-p]        Enable Broadcast\n     [-u <val>]  Select UDP Network Port (local)\n                 default: 14556\n     [-o <val>]  Select UDP Network Port (remote)\n                 default: 14550\n     [-t <val>]  Partner IP (broadcasting can be enabled via -p flag)\n                 default: 127.0.0.1\n     [-m <val>]  Mode: sets default streams and rates\n                 values: custom|camera|onboard|osd|magic|config|iridium|minimal|\n                 extvision|extvisionmin|gimbal|uavionix, default: normal\n     [-n <val>]  wifi/ethernet interface name\n                 values: <interface_name>\n     [-c <val>]  Multicast address (multicasting can be enabled via\n                 MAV_{i}_BROADCAST param)\n                 values: Multicast address in the range\n                 [239.0.0.0,239.255.255.255]\n     [-f]        Enable message forwarding to other Mavlink instances\n     [-w]        Wait to send, until first message received\n     [-x]        Enable FTP\n     [-z]        Force hardware flow control always on\n     [-Z]        Force hardware flow control always off\n\n   stop-all      Stop all instances\n\n   stop          Stop a running instance\n     [-u <val>]  Select Mavlink instance via local Network Port\n     [-d <val>]  Select Mavlink instance via Serial Device\n                 values: <file:dev>\n\n   status        Print status for all instances\n     [streams]   Print all enabled streams\n\n   stream        Configure the sending rate of a stream for a running instance\n     [-u <val>]  Select Mavlink instance via local Network Port\n     [-d <val>]  Select Mavlink instance via Serial Device\n                 values: <file:dev>\n     -s <val>    Mavlink stream to configure\n     -r <val>    Rate in Hz (0 = turn off, -1 = set to default)\n\n   boot_complete Enable sending of messages. (Must be) called as last step in\n                 startup script.\n")])])]),e("h2",{attrs:{id:"uorb"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#uorb"}},[a._v("#")]),a._v(" uorb")]),a._v(" "),e("p",[a._v("소스: "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/systemcmds/uorb",target:"_blank",rel:"noopener noreferrer"}},[a._v("systemcmds/uorb"),e("OutboundLink")],1)]),a._v(" "),e("h3",{attrs:{id:"설명-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#설명-2"}},[a._v("#")]),a._v(" 설명")]),a._v(" "),e("p",[a._v("uORB는 모듈 간의 통신에 사용되는 내부 pub-sub 메시징 시스템입니다.")]),a._v(" "),e("h3",{attrs:{id:"구현-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#구현-2"}},[a._v("#")]),a._v(" 구현")]),a._v(" "),e("p",[a._v("구현은 비동기식이며 잠금이 없습니다. 게시자는 구독자를 기다리지 않으며, 그 반대도 마찬가지입니다. 이것은 발행자와 구독자 사이에 별도의 버퍼를 가짐으로써 달성됩니다.")]),a._v(" "),e("p",[a._v("코드는 메모리 공간과 메시지 교환 대기 시간을 최소화하도록 최적화되었습니다.")]),a._v(" "),e("p",[a._v("메시지는 "),e("code",[a._v("/msg")]),a._v(" 디렉토리에 정의됩니다. 빌드 타임에 C/C++ 코드로 변환됩니다.")]),a._v(" "),e("p",[a._v("ORB_USE_PUBLISHER_RULES로 컴파일하면, uORB 게시 규칙이 있는 파일을 사용하여, 어떤 모듈이 어떤 주제를 게시할 수 있는 지 설정할 수 있습니다. 이것은 시스템 전체 재생에 사용됩니다.")]),a._v(" "),e("h3",{attrs:{id:"예-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#예-2"}},[a._v("#")]),a._v(" 예")]),a._v(" "),e("p",[a._v("주제 게시 비율을 모니터링합니다. "),e("code",[a._v("top")]),a._v(" 외에 일반 시스템 검사를 위한 중요한 명령어입니다.")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("uorb top\n")])])]),e("p",[e("a",{attrs:{id:"uorb_usage"}})]),a._v(" "),e("h3",{attrs:{id:"사용법-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#사용법-3"}},[a._v("#")]),a._v(" 사용법")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("uorb <command> [arguments...]\n Commands:\n   status        Print topic statistics\n\n   top           Monitor topic publication rates\n     [-a]        print all instead of only currently publishing topics with\n                 subscribers\n     [-1]        run only once, then exit\n     [<filter1> [<filter2>]] topic(s) to match (implies -a)\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);