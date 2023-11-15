(window.webpackJsonp=window.webpackJsonp||[]).push([[779],{2673:function(t,e,_){"use strict";_.r(e);var a=_(19),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"로깅"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#로깅"}},[t._v("#")]),t._v(" 로깅")]),t._v(" "),a("p",[t._v("The "),a("RouterLink",{attrs:{to:"/ko/modules/modules_system.html#logger"}},[t._v("system logger")]),t._v(" is able to log any ORB topic with all included fields. 필요한 모든 것은 "),a("code",[t._v(".msg")]),t._v(" 파일에서 생성되므로, 주제 이름만 지정하면 됩니다. 선택적 간격 매개변수는 특정 주제의 최대 로깅 속도를 지정합니다. 주제의 모든 기존 인스턴스가 기록됩니다.")],1),t._v(" "),a("p",[t._v("출력 로그 형식은 "),a("RouterLink",{attrs:{to:"/ko/dev_log/ulog_file_format.html"}},[t._v("ULog")]),t._v(" 입니다.")],1),t._v(" "),a("h2",{attrs:{id:"사용법"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#사용법"}},[t._v("#")]),t._v(" 사용법")]),t._v(" "),a("p",[t._v("기본적으로, 로깅은 시동을 걸었을 때 시작하며, 제동 후 중지합니다. 새 로그 파일은 시동을 걸 때마다 SD 카드에 생성됩니다. 현재 상태를 표시하려면 콘솔에서 "),a("code",[t._v("logger status")]),t._v("명령을 사용하십시오. 로깅을 바로 시작하고 싶다면 "),a("code",[t._v("logger on")]),t._v(" 명령을 내리십시오. 이 명령은 시동을 걸었을 때, 시동 동작보다 우선합니다. "),a("code",[t._v("logger off")]),t._v(" 명령은 그 반대입니다.")]),t._v(" "),a("p",[t._v("If logging stops due to a write error, or reaching the "),a("a",{attrs:{href:"#file-size-limitations"}},[t._v("maximum file size")]),t._v(", PX4 will automatically restart logging in a new file.")]),t._v(" "),a("p",[t._v("For a list of all supported logger commands and parameters, use:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("logger help\n")])])]),a("h2",{attrs:{id:"구성"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#구성"}},[t._v("#")]),t._v(" 구성")]),t._v(" "),a("p",[t._v("The logging system is configured by default to collect sensible logs for "),a("RouterLink",{attrs:{to:"/ko/getting_started/flight_reporting.html"}},[t._v("flight reporting")]),t._v(" with "),a("a",{attrs:{href:"http://logs.px4.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("Flight Review"),a("OutboundLink")],1),t._v(".")],1),t._v(" "),a("p",[t._v("로깅은 "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#sd-logging"}},[t._v("SD 로깅")]),t._v(" 매개변수를 사용하여 설정할 수 있습니다. 변경할 가능성이 높은 매개변수가 아래에 설명되어 있습니다.")],1),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("매개 변수")]),t._v(" "),a("th",[t._v("설명")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SDLOG_MODE"}},[t._v("SDLOG_MODE")])],1),t._v(" "),a("td",[t._v("Logging Mode. Defines when logging starts and stops."),a("br"),t._v("- "),a("code",[t._v("-1")]),t._v(": Logging disabled."),a("br"),t._v("- "),a("code",[t._v("0")]),t._v(": Log when armed until disarm (default)."),a("br"),t._v("- "),a("code",[t._v("1")]),t._v(": Log from boot until disarm."),a("br"),t._v("- "),a("code",[t._v("2")]),t._v(": Log from boot until shutdown."),a("br"),t._v("- "),a("code",[t._v("3")]),t._v(": Log based on the "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RC_MAP_AUX1"}},[t._v("AUX1 RC channel")]),t._v("."),a("br"),t._v("- "),a("code",[t._v("4")]),t._v(": Log from first armed until shutdown.")],1)]),t._v(" "),a("tr",[a("td",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SDLOG_PROFILE"}},[t._v("SDLOG_PROFILE")])],1),t._v(" "),a("td",[t._v("로깅 프로파일. 자주 사용되지 않는 로깅/분석을 활성화하려면 이것을 사용하십시오(예: EKF2 재생, PID 및 필터 튜닝을 위한 고속 로깅, 열 온도 보정).")])]),t._v(" "),a("tr",[a("td",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SDLOG_MISSION"}},[t._v("SDLOG_MISSION")])],1),t._v(" "),a("td",[t._v('Create very small additional "Mission Log".'),a("br"),t._v("This log can "),a("em",[t._v("not")]),t._v(" be used with "),a("RouterLink",{attrs:{to:"/ko/log/flight_log_analysis.html#flight-review-online-tool"}},[t._v("Flight Review")]),t._v(", but is useful when you need a small log for geotagging or regulatory compliance.")],1)])])]),t._v(" "),a("p",[t._v("Useful settings for specific cases:")]),t._v(" "),a("ul",[a("li",[t._v("Raw sensor data for comparison: "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SDLOG_MODE"}},[t._v("SDLOG_MODE=1")]),t._v(" and "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SDLOG_PROFILE"}},[t._v("SDLOG_PROFILE=64")]),t._v(".")],1),t._v(" "),a("li",[t._v("Disabling logging altogether: "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SDLOG_MODE"}},[t._v("SDLOG_MODE="),a("code",[t._v("-1")])])],1)]),t._v(" "),a("h3",{attrs:{id:"logger-module"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#logger-module"}},[t._v("#")]),t._v(" Logger module")]),t._v(" "),a("p",[a("em",[t._v("Developers")]),t._v(" can further configure what information is logged via the "),a("RouterLink",{attrs:{to:"/ko/modules/modules_system.html#logger"}},[t._v("logger")]),t._v(" module. This allows, for example, logging of your own uORB topics.")],1),t._v(" "),a("h3",{attrs:{id:"진단sd-카드-설정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#진단sd-카드-설정"}},[t._v("#")]),t._v(" 진단SD 카드 설정")]),t._v(" "),a("p",[t._v("Separately, the list of logged topics can also be customized with a file on the SD card. Create a file "),a("code",[t._v("etc/logging/logger_topics.txt")]),t._v(" on the card with a list of topics (For SITL, it's "),a("code",[t._v("build/px4_sitl_default/rootfs/fs/microsd/etc/logging/logger_topics.txt")]),t._v("):")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("<topic_name> <interval> <instance>\n")])])]),a("p",[a("code",[t._v("<interval>")]),t._v("은 선택 사항이며, 지정된 경우 이 항목에 대해 기록된 두 메시지 사이의 최소 시간 간격(ms)을 정의합니다. 지정하지 않으면, 주제가 최대 속도로 기록됩니다.")]),t._v(" "),a("p",[a("code",[t._v("<instance>")]),t._v("은 선택 사항이며, 지정된 경우 기록할 인스턴스를 정의합니다. 지정하지 않으면, 토픽의 모든 인스턴스를 로깅합니다. "),a("code",[t._v("<instance>")]),t._v("를 지정하려면, "),a("code",[t._v("<interval>")]),t._v("을 반드시 지정하여야합니다. 0 값을 설정하면 최대 기록율로 지정할 수 있습니다.")]),t._v(" "),a("p",[t._v("이 파일의 주제는 기본적으로 기록된 모든 주제를 대체합니다.")]),t._v(" "),a("p",[t._v("예 :")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("sensor_accel 0 0\nsensor_accel 100 1\nsensor_gyro 200\nsensor_mag 200 1\n")])])]),a("p",[t._v("이 구성은 최대 속도에서 sensor_accel 0, 10Hz에서 sensor_accel 1, 5Hz에서 모든 sensor_gyro 인스턴스 및 5Hz에서 sensor_mag 1을 기록합니다.")]),t._v(" "),a("h2",{attrs:{id:"스크립트"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#스크립트"}},[t._v("#")]),t._v(" 스크립트")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/PX4/pyulog",target:"_blank",rel:"noopener noreferrer"}},[t._v("pyulog"),a("OutboundLink")],1),t._v(" 저장소에 로깅 파일을 분석하고 변환하는 여러 스크립트가 있습니다.")]),t._v(" "),a("h2",{attrs:{id:"file-size-limitations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#file-size-limitations"}},[t._v("#")]),t._v(" File size limitations")]),t._v(" "),a("p",[t._v("The maximum file size depends on the file system and OS. The size limit on NuttX is currently around 2GB.")]),t._v(" "),a("h2",{attrs:{id:"손실"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#손실"}},[t._v("#")]),t._v(" 손실")]),t._v(" "),a("p",[t._v("로깅 드롭아웃은 바람직하지 않으며, 드롭아웃의 양에 영향을 미치는 몇 가지 요소가 있습니다.")]),t._v(" "),a("ul",[a("li",[t._v("테스트한 대부분의 SD 카드는 분당 여러 번 일시 중지되었습니다. 이는 기록 명령을 처리함에 있어 수 100ms 정도의 지연이 있음을 보여줍니다. 이런 현상으로 인해 그동안 기록 버퍼가 차면 손실을 유발합니다. (아래와 같이) SD 카드에 따라 영향을 받습니다.")]),t._v(" "),a("li",[t._v("SD 카드를 포맷하면, 손실을 어느정도 예방할 수 있습니다.")]),t._v(" "),a("li",[t._v("로그 버퍼 크기를 늘리면 도움이 됩니다.")]),t._v(" "),a("li",[t._v("선택한 토픽에 대한 로깅 율을 줄이거나 필요없는 토픽을 로깅 목록에서 제거하십시오("),a("code",[t._v("info.py")]),t._v("가 이 문제 해결에 도움됨).")])]),t._v(" "),a("h2",{attrs:{id:"sd-카드"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sd-카드"}},[t._v("#")]),t._v(" SD 카드")]),t._v(" "),a("p",[t._v("다음은 다양한 SD 카드에 대한 성능 테스트 결과입니다. 테스트는 Pixracer에서 수행되었습니다. 결과는 Pixhawk에도 적용됩니다.")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("NuttX에 지원되는 최대 SD 카드 크기는 32GB(SD 메모리 카드 사양 버전 2.0)입니다. "),a("code",[t._v("<instance>")]),t._v("를 지정하려면, "),a("code",[t._v("<interval>")]),t._v("을 반드시 지정해야합니다.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("SD 카드")]),t._v(" "),a("th",[t._v("평균 시퀀스 기록 속도 [KB/s]")]),t._v(" "),a("th",[t._v("최대 기록 시간 / 블록 (평균) [ms]")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("SanDisk Extreme U3 32GB")]),t._v(" "),a("td",[t._v("461")]),t._v(" "),a("td",[a("strong",[t._v("15")])])]),t._v(" "),a("tr",[a("td",[t._v("Sandisk Ultra Class 10 8GB")]),t._v(" "),a("td",[t._v("348")]),t._v(" "),a("td",[t._v("40")])]),t._v(" "),a("tr",[a("td",[t._v("Sandisk Class 4 8GB")]),t._v(" "),a("td",[t._v("212")]),t._v(" "),a("td",[t._v("60")])]),t._v(" "),a("tr",[a("td",[t._v("SanDisk Class 10 32 GB (High Endurance Video Monitoring Card)")]),t._v(" "),a("td",[t._v("331")]),t._v(" "),a("td",[t._v("220")])]),t._v(" "),a("tr",[a("td",[t._v("Lexar U1 (Class 10), 16GB High-Performance")]),t._v(" "),a("td",[t._v("209")]),t._v(" "),a("td",[t._v("150")])]),t._v(" "),a("tr",[a("td",[t._v("Sandisk Ultra PLUS Class 10 16GB")]),t._v(" "),a("td",[t._v("196")]),t._v(" "),a("td",[t._v("500")])]),t._v(" "),a("tr",[a("td",[t._v("Sandisk Pixtor Class 10 16GB")]),t._v(" "),a("td",[t._v("334")]),t._v(" "),a("td",[t._v("250")])]),t._v(" "),a("tr",[a("td",[t._v("Sandisk Extreme PLUS Class 10 32GB")]),t._v(" "),a("td",[t._v("332")]),t._v(" "),a("td",[t._v("150")])])])]),t._v(" "),a("p",[t._v("평균 쓰기 속도보다 더 중요한 것은 블록당 최대 쓰기 시간(4KB)입니다. 이것은 최소 버퍼 크기를 정의합니다. 이 최대값이 클수록 드롭아웃을 피하기 위하여 더 큰 로그 버퍼가 필요합니다. 기본 항목의 로깅 대역폭은 약 50KB/s로 모든 SD 카드가 충족합니다.")]),t._v(" "),a("p",[t._v("지금까지 우리가 알고 있는 최고의 SD 카드는 "),a("strong",[t._v("SanDisk Extreme U3 32GB")]),t._v("입니다. 이 카드는 쓰기 시간 스파이크를 나타내지 않으므로(따라서 드롭아웃이 거의 없음) 권장됩니다. 다른 카드 크기도 똑같이 잘 작동할 수 있지만, 일반적으로 성능은 차이가 납니다.")]),t._v(" "),a("p",[a("code",[t._v("sd_bench -r 50")]),t._v("으로 자신의 SD 카드를 테스트하고, 결과를 https://github.com/PX4/PX4-Autopilot/issues/4634에 보고할 수 있습니다.")]),t._v(" "),a("h2",{attrs:{id:"로그-스트리밍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#로그-스트리밍"}},[t._v("#")]),t._v(" 로그 스트리밍")]),t._v(" "),a("p",[t._v("로깅을 수행하는 전통적인 완벽한 방법은 FMU에서 SD 카드를 사용하는 것입니다. 그러나, MAVLink를 통하여 동일한 로깅 데이터를 보내는 대체 로그 스트리밍이 있습니다. 이 방법은 예를 들어 FMU에 SD 카드 슬롯이 없는 경우(예: Intel® Aero Ready to Fly Drone) 또는 단순히 SD 카드를 처리할 필요가 없는 경우에 사용할 수 있습니다. 두 방법 모두 독립적으로 동시에 사용할 수 있습니다.")]),t._v(" "),a("p",[t._v("요구 사항은 최소 ~50KB/s 네트웍 속도입니다(예: WiFi 링크). 그리고, 한 클라이언트만 동시에 로그 스트리밍을 요청할 수 있습니다. 연결이 안정적일 필요는 없으며, 프로토콜은 드롭을 처리하도록 설계되었습니다.")]),t._v(" "),a("p",[t._v("ulog 스트리밍을 지원하는 다양한 클라이언트가 있습니다.")]),t._v(" "),a("ul",[a("li",[t._v("PX4-Autopilot/Tools의 "),a("code",[t._v("mavlink_ulog_streaming.py")]),t._v(" 스크립트")]),t._v(" "),a("li",[t._v("QGroundControl"),a("img",{attrs:{src:_(739),alt:"QGC 로그 스트리밍 "}})]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/ecmnet/MAVGCL",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVGCL"),a("OutboundLink")],1)])]),t._v(" "),a("h3",{attrs:{id:"진단"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#진단"}},[t._v("#")]),t._v(" 진단")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("로그 실시간 전송을 시작하지 않았다면, "),a("code",[t._v("logger")]),t._v("를 실행 중인지(위 참고) 확인하고, 시작하는 동안 콘솔 출력을 살펴보십시오.")])]),t._v(" "),a("li",[a("p",[t._v("그래도 작동하지 않으면, MAVLink 2를 사용하고 있는지 확인하십시오. "),a("code",[t._v("MAV_PROTO_VER")]),t._v(" 매개변수 값을 2로 강제 설정하십시오.")])]),t._v(" "),a("li",[a("p",[t._v("로그 스트리밍은 구성된 MAVLink 속도("),a("code",[t._v("-r")]),t._v(" 매개변수)의 최대 70%를 사용합니다. 더 큰 전송율이 요구되는 상황에서는, 메세지가 사라집니다. 현재 사용된 백분율은 "),a("code",[t._v("mavlink 상태")]),t._v("로 검사할 수 있습니다(이 예에서는 1.8%가 사용됨).")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("instance #0:\n        GCS heartbeat:  160955 us ago\n        mavlink chan: #0\n        type:           GENERIC LINK OR RADIO\n        flow control:   OFF\n        rates:\n        tx: 95.781 kB/s\n        txerr: 0.000 kB/s\n        rx: 0.021 kB/s\n        rate mult: 1.000\n        ULog rate: 1.8% of max 70.0%\n        accepting commands: YES\n        MAVLink version: 2\n        transport protocol: UDP (14556) \n")])])]),a("p",[t._v("또한 "),a("code",[t._v("txerr")]),t._v(" 값이 0에 머물러있는지 확인하십시오. 만약 이 값이 올라간다면, NuttX 전송 버퍼가 너무 작거나, 물리 링크 대역폭이 포화 상태이거나, 하드웨어가 데이터를 처리하기에 너무 느린 상황을 의미합니다.")])])])])])}),[],!1,null,null,null);e.default=r.exports},739:function(t,e,_){t.exports=_.p+"assets/img/qgc-log-streaming.e5767326.png"}}]);