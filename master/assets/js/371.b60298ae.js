(window.webpackJsonp=window.webpackJsonp||[]).push([[371],{1300:function(t,e,r){t.exports=r.p+"assets/img/hall_probe.07c8b646.jpg"},1301:function(t,e,r){t.exports=r.p+"assets/img/transmissive_probe.e22256c4.jpg"},2656:function(t,e,r){"use strict";r.r(e);var a=r(19),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"thunderfly-tfrpm01-revolution-counter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#thunderfly-tfrpm01-revolution-counter"}},[t._v("#")]),t._v(" ThunderFly TFRPM01 Revolution Counter")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/ThunderFly-aerospace/TFRPM01",target:"_blank",rel:"noopener noreferrer"}},[t._v("TFRPM01"),a("OutboundLink")],1),t._v(" 회전 속도계는 회전 카운터를 요구하는 작고 낮은 시스템입니다.")]),t._v(" "),a("p",[t._v("보드 자체에는 실제 센서가 포함되어 있지 않지만, 회전 계수를 위하여 다양한 센서/프로브 유형과 함께 사용할 수 있습니다. PX4 연결 I²C 커넥터가 있으며, 3핀 커넥터를 통하여 실제 센서에 연결됩니다. 기본 진단 정보를 제공하는 LED도 있습니다.")]),t._v(" "),a("p",[a("img",{attrs:{src:r(340),alt:"TFRPM01A"}})]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("TFRPM01 센서는 [ThunderFly s.r.o.](https://www.thunderfly.cz/)에서 판매중인 오픈 소스 하드웨어입니다 (제조 데이터는 [GitHub에서 사용 가능](https://github.com/ThunderFly-aerospace/TFRPM01)).")])]),t._v(" "),a("h2",{attrs:{id:"하드웨어-설정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#하드웨어-설정"}},[t._v("#")]),t._v(" 하드웨어 설정")]),t._v(" "),a("p",[t._v("이 보드에는 PX4 연결 (투 스루 패스) I²C 커넥터가 장착되어 있으며, 다양한 센서에 연결용 3핀 커넥터가 있습니다.")]),t._v(" "),a("ul",[a("li",[t._v("TFRPM01은 모든 I²C 포트에 연결 가능합니다.")]),t._v(" "),a("li",[t._v("TFRPM01에는 다양한 프로브 유형에 연결 3핀 헤더 커넥터 (풀업 장착 입력 포함)가 있습니다.\n"),a("ul",[a("li",[t._v("센서/프로브 하드웨어에는 펄스 신호가 필요합니다. 신호 입력은 +5V TTL 로직 또는 "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Open_collector",target:"_blank",rel:"noopener noreferrer"}},[t._v("오픈 콜렉터"),a("OutboundLink")],1),t._v(" 출력을 받습니다. 최대 펄스 주파수는 50% 듀티 사이클에서 20kHz입니다.")]),t._v(" "),a("li",[t._v("프로브 커넥터는 I²C 버스에서 +5V 전원을 제공하며, 최대 전력은 RC 필터에 의해 제한됩니다 (자세한 내용은 회로도 참조).")])])])]),t._v(" "),a("p",[t._v("TFRPM01A 전자 장치에는 프로브가 연결 여부를 표시하는 LED가 있습니다. 펄스 입력이 접지되거나 논리 0에 노출되면 LED가 켜지므로 로터를 수동으로 회전하는 것만으로 프로브가 올바르게 작동하는 지 확인할 수 있습니다.")]),t._v(" "),a("h3",{attrs:{id:"홀-효과-센서-프로브"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#홀-효과-센서-프로브"}},[t._v("#")]),t._v(" 홀 효과 센서 프로브")]),t._v(" "),a("p",[t._v("홀 효과 센서 (자기 적으로 작동)는 먼지, 먼지 및 물이 감지된 로터에 접촉할 수있는 열악한 환경에 이상적입니다.")]),t._v(" "),a("p",[t._v("다양한 홀 효과 센서가 시판중입니다. 예를 들어, "),a("a",{attrs:{href:"https://m.littelfuse.com/~/media/electronics/datasheets/hall_effect_sensors/littelfuse_hall_effect_sensors_55100_datasheet.pdf.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("5100 미니어처 플랜지 장착 근접 센서"),a("OutboundLink")],1),t._v("는 좋은 선택입니다.")]),t._v(" "),a("p",[a("img",{attrs:{src:r(1300),alt:"홀 효과 프로브의 예"}})]),t._v(" "),a("h3",{attrs:{id:"광학-센서-프로브"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#광학-센서-프로브"}},[t._v("#")]),t._v(" 광학 센서 프로브")]),t._v(" "),a("p",[t._v("광학 센서도 사용할 수 있습니다 (측정 요구 사항에 따라 더 적합할 수 있음). 투과형 및 반사형 센서는 모두 펄스 생성에 사용될 수 있습니다.")]),t._v(" "),a("p",[a("img",{attrs:{src:r(1301),alt:"광 투과 프로브의 예"}})]),t._v(" "),a("h2",{attrs:{id:"소프트웨어-설정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#소프트웨어-설정"}},[t._v("#")]),t._v(" 소프트웨어 설정")]),t._v(" "),a("h3",{attrs:{id:"드라이버-시작"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#드라이버-시작"}},[t._v("#")]),t._v(" 드라이버 시작")]),t._v(" "),a("p",[t._v("드라이버는 자동으로 시작되지 않습니다 (어떤 기체에서도). "),a("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/analyze_view/mavlink_console.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGroundControl MAVLink 콘솔"),a("OutboundLink")],1),t._v("을 사용하거나 SD 카드의 "),a("RouterLink",{attrs:{to:"/ko/concept/system_startup.html#customizing-the-system-startup"}},[t._v("시작 스크립트")]),t._v("에 드라이버를 추가하여 수동으로 시작하여야 합니다.")],1),t._v(" "),a("h4",{attrs:{id:"콘솔에서-드라이버-시작"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#콘솔에서-드라이버-시작"}},[t._v("#")]),t._v(" 콘솔에서 드라이버 시작")]),t._v(" "),a("p",[t._v("다음 명령을 사용하여 "),a("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/analyze_view/mavlink_console.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("콘솔"),a("OutboundLink")],1),t._v("에서 드라이버를 시작합니다.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("pcf8583 start -X -b <bus number>\n")])])]),a("p",[t._v("여기서:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("-X")]),t._v("는 외부 버스를 나타냅니다.")]),t._v(" "),a("li",[a("code",[t._v("<bus number>")]),t._v("은 연결된 장치의 버스 번호입니다.")])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("코드 "),a("code",[t._v("-b <bus number>")]),t._v("의 버스 번호는 자동조종장치의 버스 레이블과 일치하지 않을 수 있습니다. 예를 들어 CUAV V5 + 또는 CUAV Nano를 사용하는 경우:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("자동조종장치 레이블")]),t._v(" "),a("th",[t._v("-b 번호")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("I2C1")]),t._v(" "),a("td",[t._v("-X -b 4")])]),t._v(" "),a("tr",[a("td",[t._v("I2C2")]),t._v(" "),a("td",[t._v("-X -b 2")])]),t._v(" "),a("tr",[a("td",[t._v("I2C3")]),t._v(" "),a("td",[t._v("-X -b 1")])])])]),t._v(" "),a("p",[a("code",[t._v("pcf8583 start")]),t._v(" 명령은 각 버스 번호에 해당하는 자동조종장치 버스 이름/레이블을 출력합니다.")])]),t._v(" "),a("h3",{attrs:{id:"시험하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#시험하기"}},[t._v("#")]),t._v(" 시험하기")]),t._v(" "),a("p",[t._v("여러 가지 방법을 사용하여 카운터가 작동 여부를 확인할 수 있습니다.")]),t._v(" "),a("h4",{attrs:{id:"px4-nuttx-mavlink-콘솔"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#px4-nuttx-mavlink-콘솔"}},[t._v("#")]),t._v(" PX4 (NuttX) MAVLink 콘솔")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/analyze_view/mavlink_console.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGroundControl MAVLink 콘솔"),a("OutboundLink")],1),t._v("을 사용하여 드라이버가 실행 여부와 출력되는 UORB 토픽을 확인할 수 있습니다.")]),t._v(" "),a("p",[t._v("TFRPM01 드라이버의 상태를 확인하려면 다음 명령을 실행하십시오.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("pcf8583 status\n")])])]),a("p",[t._v("드라이버가 실행중인 경우 I²C 포트가 실행중인 인스턴스의 다른 기본 매개변수와 함께 인쇄됩니다. 드라이버가 실행 중이 아니면, 위에서 설명한 절차를 사용하여 시작할 수 있습니다.")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/ko/modules/modules_command.html#listener"}},[t._v("listener")]),t._v(" 명령을 사용하면 실행중인 드라이버에서 RPM UORB 메시지를 모니터링할 수 있습니다.")],1),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("listener rpm\n")])])]),a("p",[t._v("주기적으로 표시하려면 명령 뒤에 "),a("code",[t._v("-n 50")]),t._v(" 매개변수를 추가하여 다음 50 개의 메시지를 인쇄 가능합니다.")]),t._v(" "),a("h4",{attrs:{id:"qgroundcontrol-mavlink-검사기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#qgroundcontrol-mavlink-검사기"}},[t._v("#")]),t._v(" QGroundControl MAVLink 검사기")]),t._v(" "),a("p",[t._v("QGroundControl "),a("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/analyze_view/mavlink_inspector.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mavlink 검사기"),a("OutboundLink")],1),t._v("를 사용하여 드라이버가 전송한 "),a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#RAW_RPM",target:"_blank",rel:"noopener noreferrer"}},[t._v("RAW_RPM"),a("OutboundLink")],1),t._v("을 포함하여 PX4의 MAVLink 메시지를 관찰할 수 있습니다.")]),t._v(" "),a("ol",[a("li",[t._v("QGC 메뉴에서 인스펙터를 시작합니다 : "),a("strong",[t._v("분석 도구 > Mavlink 검사기")])]),t._v(" "),a("li",[a("code",[t._v("RAW_RPM")]),t._v("이 메시지 목록에 있는 지 확인하십시오 (없으면 드라이버가 실행 중인 지 확인하십시오).")])]),t._v(" "),a("h3",{attrs:{id:"매개변수-설정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#매개변수-설정"}},[t._v("#")]),t._v(" 매개변수 설정")]),t._v(" "),a("p",[t._v("일반적으로 센서는 설정 없이도 사용할 수 있지만, RPM 값은 실제 RPM의 배수이어야 합니다.  이는 "),a("code",[t._v("PCF8583_MAGNET")]),t._v(" 매개변수가 감지된 로터의 단일 회전당 실제 펄스 수와 일치하여야하기 때문입니다. 필요시 다음의 매개 변수들을 조정하여야 합니다.")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#PCF8583_POOL"}},[t._v("PCF8583_POOL")]),t._v(" — 카운트 숫자 판독 사이의 풀링 간격")],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#PCF8583_ADDR"}},[t._v("PCF8583_ADDR")]),t._v(" — I2C 센서 주소")],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#PCF8583_RESET"}},[t._v("PCF8583_RESET")]),t._v(" — 계수된 숫자를 0으로 재설정해야하는 카운터 값입니다.")],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#PCF8583_MAGNET"}},[t._v("PCF8583_MAGNET")]),t._v(" — 회전당 펄스 수 (예 : 로터 디스크의 자석 수).")],1)]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("위의 매개변수는 드라이버/PX4를 재부팅하면, QGC에 나타납니다.")]),t._v(" "),a("p",[t._v("재시작 후 설정 매개변수를 사용할 수 없는 경우에는 드라이버가 시작되었는 지 확인하십시오. "),a("RouterLink",{attrs:{to:"/ko/peripherals/serial_configuration.html#configuration-parameter-missing-from-qgroundcontrol"}},[t._v("드라이버가 펌웨어에 없을 수 있습니다")]),t._v(".이 경우 보드에 추가하여야 합니다.")],1),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("drivers/rpm/pcf8583\n")])])])])])}),[],!1,null,null,null);e.default=s.exports},340:function(t,e,r){t.exports=r.p+"assets/img/tfrpm01_electronics.8e8882e1.jpg"}}]);