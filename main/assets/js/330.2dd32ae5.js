(window.webpackJsonp=window.webpackJsonp||[]).push([[330],{2903:function(t,r,e){"use strict";e.r(r);var a=e(19),_=Object(a.a)({},(function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"hex-cube-black-비행-컨트롤러"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hex-cube-black-비행-컨트롤러"}},[t._v("#")]),t._v(" Hex Cube Black 비행 컨트롤러")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("PX4에서는 이 제품을 제조하지 않습니다. 하드웨어 지원과 호환 문제는 [제조사](https://cubepilot.org/#/home)에 문의하십시오.")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/ko/flight_controller/cubepilot_cube_orange.html"}},[t._v("Cube Orange")]),t._v("는이 제품의 후속 제품입니다. 그러나, "),a("RouterLink",{attrs:{to:"/ko/flight_controller/autopilot_pixhawk_standard.html"}},[t._v("Pixhawk 표준")]),t._v("과 같은 산업 표준에 기반한 제품을 사용하는 것이 바람직합니다. 이 비행 컨트롤러는 표준을 따르지 않으며, 특허받은 커넥터를 사용합니다.")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"http://www.proficnc.com/61-system-kits2",target:"_blank",rel:"noopener noreferrer"}},[t._v("Hex Cube Black"),a("OutboundLink")],1),t._v(" 비행 컨트롤러(이전의 Pixhawk 2.1)는 주로 상용 시스템 제조업체를 위한 자동조종장치입니다. "),a("a",{attrs:{href:"https://pixhawk.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk-project"),a("OutboundLink")],1),t._v(" "),a("strong",[t._v("FMUv3")]),t._v(" 개방형 하드웨어 설계를 기반으로 "),a("a",{attrs:{href:"https://nuttx.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("NuttX"),a("OutboundLink")],1),t._v(" OS에서 PX4를 실행합니다.")]),t._v(" "),a("p",[a("img",{attrs:{src:e(361),alt:"큐브 블랙"}})]),t._v(" "),a("p",[t._v("배선을 줄이고 신뢰성을 높이며 조립을 쉽게하기 위해 도메인 별 캐리어 보드와 함께 사용하도록 설계되었습니다. For example, a carrier board for a commercial inspection vehicle might include connections for a companion computer, while a carrier board for a racer could includes ESCs form the frame of the vehicle.")]),t._v(" "),a("p",[t._v("Cube에는 2 개의 IMU에 진동 차단이 포함되어 있으며, 세 번째 고정 IMU는 참조 백업용으로 사용됩니다.")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("제조업체 "),a("a",{attrs:{href:"https://docs.cubepilot.org/user-guides/autopilot/the-cube-module-overview",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cube Docs"),a("OutboundLink")],1),t._v("에는 "),a("a",{attrs:{href:"https://docs.cubepilot.org/user-guides/autopilot/the-cube-module-overview#differences-between-cube-colours",target:"_blank",rel:"noopener noreferrer"}},[t._v("큐브 색상 간의 차이점"),a("OutboundLink")],1),t._v(" 뿐만 아니라 자세한 정보를 제공합니다.")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("이 자동조종장치는 PX4 유지관리 및 테스트 팀에서 "),a("RouterLink",{attrs:{to:"/ko/flight_controller/autopilot_pixhawk_standard.html"}},[t._v("지원")]),t._v("합니다.")],1)]),t._v(" "),a("h2",{attrs:{id:"주요-특징"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#주요-특징"}},[t._v("#")]),t._v(" 주요 특징")]),t._v(" "),a("ul",[a("li",[t._v("32 비트 STM32F427 "),a("a",{attrs:{href:"http://en.wikipedia.org/wiki/ARM_Cortex-M#Cortex-M4",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cortex-M4F"),a("OutboundLink")],1),a("sup",[t._v("®")]),t._v(" 코어 (FPU 포함)")]),t._v(" "),a("li",[t._v("168 MHz / 252 MIPS")]),t._v(" "),a("li",[t._v("256 KB RAM")]),t._v(" "),a("li",[t._v("2MB 플래시 (완전 액세스 가능)")]),t._v(" "),a("li",[t._v("32 비트 STM32F103 failsafe 코프로세서")]),t._v(" "),a("li",[t._v("14 개 PWM/서보 출력(페일세이프 및 수동 오버라이드 포함 8 개, 보조, 고전력 호환 6 개)")]),t._v(" "),a("li",[t._v("추가 주변 장치(UART, I2C, CAN) 다양한 연결 옵션")]),t._v(" "),a("li",[t._v("전용 프로세서 및 독립형 전원 공급 장치(고정익 적용)로 비행중 복구 및 수동 오버라이드 통합 백업 시스템")]),t._v(" "),a("li",[t._v("Backup system integrates mixing, providing consistent autopilot and manual override mixing modes (fixed-wing use)")]),t._v(" "),a("li",[t._v("중복 전원공급장치 및 자동 장애 조치")]),t._v(" "),a("li",[t._v("외부 안전 스위치")]),t._v(" "),a("li",[t._v("다색 LED 주시각 표시기")]),t._v(" "),a("li",[t._v("고전력 멀티톤 피에조 오디오 표시기")]),t._v(" "),a("li",[t._v("장기간 고속 로깅용 microSD 카드")])]),t._v(" "),a("p",[a("a",{attrs:{id:"stores"}})]),t._v(" "),a("h2",{attrs:{id:"구매처"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#구매처"}},[t._v("#")]),t._v(" 구매처")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://www.proficnc.com/61-system-kits",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cube Black"),a("OutboundLink")],1),t._v(" (ProfiCNC)")]),t._v(" "),a("h2",{attrs:{id:"조립"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#조립"}},[t._v("#")]),t._v(" 조립")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/ko/assembly/quick_start_cube.html"}},[t._v("Cube 배선 퀵 스타트")])],1),t._v(" "),a("h2",{attrs:{id:"사양"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#사양"}},[t._v("#")]),t._v(" 사양")]),t._v(" "),a("h3",{attrs:{id:"프로세서"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#프로세서"}},[t._v("#")]),t._v(" 프로세서")]),t._v(" "),a("ul",[a("li",[t._v("32 비트 STM32F427 "),a("a",{attrs:{href:"http://en.wikipedia.org/wiki/ARM_Cortex-M#Cortex-M4",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cortex M4"),a("OutboundLink")],1),t._v(" 코어 (FPU 포함)")]),t._v(" "),a("li",[t._v("168 MHz / 252 MIPS")]),t._v(" "),a("li",[t._v("256 KB RAM")]),t._v(" "),a("li",[t._v("2MB 플래시 (완전 액세스 가능)")]),t._v(" "),a("li",[t._v("32 비트 STM32F103 failsafe 코프로세서")])]),t._v(" "),a("h3",{attrs:{id:"센서"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#센서"}},[t._v("#")]),t._v(" 센서")]),t._v(" "),a("ul",[a("li",[t._v("TBA")])]),t._v(" "),a("h3",{attrs:{id:"인터페이스"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#인터페이스"}},[t._v("#")]),t._v(" 인터페이스")]),t._v(" "),a("ul",[a("li",[t._v("5x UART (직렬 포트), 1 개의 고전력 지원, 2x (HW 흐름 제어 포함)")]),t._v(" "),a("li",[t._v("2x CAN (하나는 내부 3.3V 트랜시버, 하나는 확장 커넥터에 있음)")]),t._v(" "),a("li",[t._v("Spektrum DSM / DSM2 / DSM-X® Satellite 호환 입력")]),t._v(" "),a("li",[t._v("Futaba S.BUS® 호환 입력 및 출력")]),t._v(" "),a("li",[t._v("PPM 합계 신호 입력")]),t._v(" "),a("li",[t._v("RSSI (PWM 또는 전압) 입력")]),t._v(" "),a("li",[t._v("I2C")]),t._v(" "),a("li",[t._v("SPI")]),t._v(" "),a("li",[t._v("3.3v ADC 입력")]),t._v(" "),a("li",[t._v("내부 microUSB 포트 및 외부 microUSB 포트 확장")])]),t._v(" "),a("h3",{attrs:{id:"전력-시스템-및-보호"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#전력-시스템-및-보호"}},[t._v("#")]),t._v(" 전력 시스템 및 보호")]),t._v(" "),a("ul",[a("li",[t._v("자동 복구 기능의 이상적인 다이오드 컨트롤러")]),t._v(" "),a("li",[t._v("ervo 레일 고출력 (최대 10V) 및 고전류 (10A +) 준비")]),t._v(" "),a("li",[t._v("모든 주변 장치 출력 과전류 보호, 모든 입력 ESD 보호")])]),t._v(" "),a("h3",{attrs:{id:"정격-전압"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#정격-전압"}},[t._v("#")]),t._v(" 정격 전압")]),t._v(" "),a("p",[t._v("Pixhawk 는 3 개의 전원이 공급되는 경우에는 전원 공급 장치의 3중 중복이 가능합니다. 세 개의 레일은 전원 모듈 입력, 서보 레일 입력과 USB 입력입니다.")]),t._v(" "),a("h4",{attrs:{id:"정상-작동-최대-정격-전압"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#정상-작동-최대-정격-전압"}},[t._v("#")]),t._v(" 정상 작동 최대 정격 전압")]),t._v(" "),a("p",[t._v("이러한 조건에서 전원은 아래의 순서대로 시스템에 전원을 공급하여야합니다.")]),t._v(" "),a("ul",[a("li",[t._v("전원 모듈 입력 (4.8V ~ 5.4V)")]),t._v(" "),a("li",[t._v("서보 레일 입력 (4.8V ~ 5.4V) "),a("strong",[t._v("수동 오버라이드의 경우 최대 10V이지만 전력 모듈 입력이 없는 경우 자동 조종 장치 부품은 5.7V 이상에서 전원이 꺼집니다.")])]),t._v(" "),a("li",[t._v("USB 전원 입력 (4.8V ~ 5.4V)")])]),t._v(" "),a("h4",{attrs:{id:"절대-최대-정격-전압"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#절대-최대-정격-전압"}},[t._v("#")]),t._v(" 절대 최대 정격 전압")]),t._v(" "),a("p",[t._v("아래의 조건에서 시스템은 전원을 사용하지 않지만(작동하지 않음), 그대로 유지됩니다.")]),t._v(" "),a("ul",[a("li",[t._v("전원 모듈 입력(4.1V ~ 5.7V, 0V ~ 20V 손상되지 않음)")]),t._v(" "),a("li",[t._v("서보 레일 입력(4.1V ~ 5.7V, 0V ~ 20V)")]),t._v(" "),a("li",[t._v("USB 전원 입력(4.1V ~ 5.7V, 0V ~ 6V)")])]),t._v(" "),a("h2",{attrs:{id:"핀배열과-회로도"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#핀배열과-회로도"}},[t._v("#")]),t._v(" 핀배열과 회로도")]),t._v(" "),a("p",[t._v("보드 설계도와 문서는 "),a("a",{attrs:{href:"https://github.com/proficnc/The-Cube",target:"_blank",rel:"noopener noreferrer"}},[t._v("The Cube Project"),a("OutboundLink")],1),t._v("를 참고하십시오.")]),t._v(" "),a("h2",{attrs:{id:"포트"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#포트"}},[t._v("#")]),t._v(" 포트")]),t._v(" "),a("h3",{attrs:{id:"위쪽-gps-telem-등"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#위쪽-gps-telem-등"}},[t._v("#")]),t._v(" 위쪽 (GPS, TELEM 등)")]),t._v(" "),a("p",[a("img",{attrs:{src:e(338),alt:"큐브 포트-상단 (GPS, TELEM 등) 및 메인/AUX"}})]),t._v(" "),a("p",[a("a",{attrs:{id:"serial_ports"}})]),t._v(" "),a("h3",{attrs:{id:"시리얼-포트-매핑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#시리얼-포트-매핑"}},[t._v("#")]),t._v(" 시리얼 포트 매핑")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("UART")]),t._v(" "),a("th",[t._v("장치")]),t._v(" "),a("th",[t._v("포트")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("USART1")]),t._v(" "),a("td",[t._v("/dev/ttyS0")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("USART2")]),t._v(" "),a("td",[t._v("/dev/ttyS1")]),t._v(" "),a("td",[t._v("TELEM1 (흐름 제어)")])]),t._v(" "),a("tr",[a("td",[t._v("USART3")]),t._v(" "),a("td",[t._v("/dev/ttyS2")]),t._v(" "),a("td",[t._v("TELEM2 (흐름 제어)")])]),t._v(" "),a("tr",[a("td",[t._v("UART4")]),t._v(" "),a("td",[t._v("/dev/ttyS3")]),t._v(" "),a("td",[t._v("GPS1")])]),t._v(" "),a("tr",[a("td",[t._v("USART6")]),t._v(" "),a("td",[t._v("/dev/ttyS4")]),t._v(" "),a("td",[t._v("PX4IO")])]),t._v(" "),a("tr",[a("td",[t._v("UART7")]),t._v(" "),a("td",[t._v("/dev/ttyS5")]),t._v(" "),a("td",[t._v("콘솔")])]),t._v(" "),a("tr",[a("td",[t._v("UART8")]),t._v(" "),a("td",[t._v("/dev/ttyS6")]),t._v(" "),a("td")])])]),t._v(" "),a("h3",{attrs:{id:"디버그-포트"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#디버그-포트"}},[t._v("#")]),t._v(" 디버그 포트")]),t._v(" "),a("p",[a("img",{attrs:{src:e(389),alt:"큐브 디버그 포트"}})]),t._v(" "),a("h3",{attrs:{id:"usb-sdcard-포트"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usb-sdcard-포트"}},[t._v("#")]),t._v(" USB/SDCard 포트")]),t._v(" "),a("p",[a("img",{attrs:{src:e(339),alt:"큐브 USB/SDCard 포트 "}})]),t._v(" "),a("h2",{attrs:{id:"펌웨어-빌드"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#펌웨어-빌드"}},[t._v("#")]),t._v(" 펌웨어 빌드")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("대부분의 사용자들은 펌웨어를 빌드할 필요는 없습니다. It is pre-built and automatically installed by _QGroundControl_ when appropriate hardware is connected.")]),t._v(" "),a("p",[t._v(":::")]),t._v(" "),a("p",[t._v("이 대상에 대한 "),a("RouterLink",{attrs:{to:"/ko/dev_setup/building_px4.html"}},[t._v("PX4 빌드")]),t._v(" :")],1),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("make px4_fmu-v3_default\n")])])]),a("h2",{attrs:{id:"이슈"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#이슈"}},[t._v("#")]),t._v(" 이슈")]),t._v(" "),a("p",[t._v("Cube Black의 CAN1과 CAN2의 실크 스크린이 뒤집힙니다 (CAN1은 CAN2이고 그 반대의 경우도 마찬가지임).")]),t._v(" "),a("h2",{attrs:{id:"추가-정보-및-문서"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#추가-정보-및-문서"}},[t._v("#")]),t._v(" 추가 정보 및 문서")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/ko/assembly/quick_start_cube.html"}},[t._v("Cube 배선 퀵 스타트")])],1),t._v(" "),a("li",[t._v("Cube 문서 (제조사) :\n"),a("ul",[a("li",[a("a",{attrs:{href:"https://docs.cubepilot.org/user-guides/autopilot/the-cube-module-overview",target:"_blank",rel:"noopener noreferrer"}},[t._v("큐브 모듈 개요"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://docs.cubepilot.org/user-guides/autopilot/the-cube-user-manual",target:"_blank",rel:"noopener noreferrer"}},[t._v("큐브 사용 설명서"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://docs.cubepilot.org/user-guides/carrier-boards/mini-carrier-board",target:"_blank",rel:"noopener noreferrer"}},[t._v("미니 캐리어 보드"),a("OutboundLink")],1)])])])])])])}),[],!1,null,null,null);r.default=_.exports},338:function(t,r,e){t.exports=e.p+"assets/img/cube_ports_top_main.35b60161.jpg"},339:function(t,r,e){t.exports=e.p+"assets/img/cube_ports_usb_sdcard.a99cbc2d.jpg"},361:function(t,r,e){t.exports=e.p+"assets/img/cube_black_hero.6173ab1f.png"},389:function(t,r,e){t.exports=e.p+"assets/img/cube_ports_debug.7cf64f90.jpg"}}]);