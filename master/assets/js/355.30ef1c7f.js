(window.webpackJsonp=window.webpackJsonp||[]).push([[355],{2285:function(t,_,v){"use strict";v.r(_);var a=v(19),e=Object(a.a)({},(function(){var t=this,_=t.$createElement,a=t._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"cuav-v5-자동조종장치"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cuav-v5-자동조종장치"}},[t._v("#")]),t._v(" CUAV V5+ 자동조종장치")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("PX4에서는 이 제품을 제조하지 않습니다. 하드웨어 지원과 호환 문제는 [제조사](https://store.cuav.net/)에 문의하십시오.")])]),t._v(" "),a("p",[a("em",[t._v("V5+")]),a("sup",[t._v("®")]),t._v("는 CUAV"),a("sup",[t._v("®")]),t._v("에서 제조한 고급 자동조종장치입니다. CUAV"),a("sup",[t._v("®")]),t._v("와 PX4팀이 공동으로 설계하였습니다.")]),t._v(" "),a("p",[t._v("자동조종장치는 상용시스템 통합에 권장되지만, 학술 연구와 기타 용도에도 적합합니다.")]),t._v(" "),a("p",[a("img",{attrs:{src:v(349),alt:"V5 + AutoPilot - 대표 이미지"}})]),t._v(" "),a("p",[t._v("주요 기능은 다음과 같습니다.")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://pixhawk.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk 프로젝트"),a("OutboundLink")],1),t._v(" "),a("strong",[t._v("FMUv5")]),t._v(" 설계 표준과 호환되며, 외부 인터페이스에 "),a("a",{attrs:{href:"https://pixhawk.org/pixhawk-connector-standard/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk 커넥터 표준"),a("OutboundLink")],1),t._v("을 적용합니다.")]),t._v(" "),a("li",[t._v("더 안정적이고 신뢰할 수 있는 센서와 함께 FMU v3보다 고급 프로세서, RAM 및 플래시 메모리.")]),t._v(" "),a("li",[t._v("PX4와 펌웨어 호환.")]),t._v(" "),a("li",[t._v("모듈식 설계를 통해 사용자는 자신의 캐리어 보드를 설정할 수 있습니다.")]),t._v(" "),a("li",[t._v("고성능 충격흡수 시스템을 갖춘 내장형 진동감쇠 시스템.")]),t._v(" "),a("li",[t._v("비행 안전 향상을 위한 다중 센서와 전원 시스템.")])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("이 비행 컨트롤러는 "),a("RouterLink",{attrs:{to:"/ko/flight_controller/autopilot_manufacturer_supported.html"}},[t._v("제조업체의 지원")]),t._v("을 받을 수 있습니다.")],1)]),t._v(" "),a("h2",{attrs:{id:"요약"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#요약"}},[t._v("#")]),t._v(" 요약")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("메인 FMU 프로세서: STM32F765")]),t._v(" "),a("ul",[a("li",[t._v("32 비트 Arm® Cortex®-M7, 216MHz, 2MB 메모리, 512KB RAM")])])]),t._v(" "),a("li",[a("p",[t._v("IO 프로세서: STM32F100")]),t._v(" "),a("ul",[a("li",[t._v("32 비트 Arm® Cortex®-M3, 24MHz, 8KB SRAM")])])]),t._v(" "),a("li",[a("p",[t._v("내장 센서 :")]),t._v(" "),a("ul",[a("li",[t._v("가속도계/자이로스코프 : ICM-20689")]),t._v(" "),a("li",[t._v("가속도계/자이로스코프 : BMI055")]),t._v(" "),a("li",[t._v("자력계 : IST8310")]),t._v(" "),a("li",[t._v("기압계: MS5611")])])]),t._v(" "),a("li",[a("p",[t._v("인터페이스:")]),t._v(" "),a("ul",[a("li",[t._v("PWM 출력 8-14개(IO 6개, FMU 8개)")]),t._v(" "),a("li",[t._v("FMU의 전용 PWM/캡처 입력 3 개")]),t._v(" "),a("li",[t._v("CPPM 전용 RC 입력")]),t._v(" "),a("li",[t._v("아날로그/PWM RSSI 입력이있는 Spektrum/DSM 및 S.Bus 전용 RC 입력")]),t._v(" "),a("li",[t._v("아날로그/PWM RSSI 입력")]),t._v(" "),a("li",[t._v("PWM Servo 출력")]),t._v(" "),a("li",[t._v("범용 시리얼 포트 5개")]),t._v(" "),a("li",[t._v("I2C 포트 4개")]),t._v(" "),a("li",[t._v("SPI 버스 4개")]),t._v(" "),a("li",[t._v("직렬 ESC가 있는 CANBuse 2 개")]),t._v(" "),a("li",[t._v("배터리 2 개의 전압 및 전류에 대한 아날로그 입력")])])]),t._v(" "),a("li",[a("p",[t._v("전원 시스템 :")]),t._v(" "),a("ul",[a("li",[t._v("전원: 4.3~5.4V")]),t._v(" "),a("li",[t._v("USB 입력: 4.75~5.25V")])])]),t._v(" "),a("li",[a("p",[t._v("중량과 크기")]),t._v(" "),a("ul",[a("li",[t._v("중량: 90g")]),t._v(" "),a("li",[t._v("크기: 85.5"),a("em",[t._v("42")]),t._v("33mm")])])]),t._v(" "),a("li",[a("p",[t._v("기타 특성:")]),t._v(" "),a("ul",[a("li",[t._v("작동 온도: -20 ~ 80°c (측정치)")])])])]),t._v(" "),a("h2",{attrs:{id:"구매처"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#구매처"}},[t._v("#")]),t._v(" 구매처")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.aliexpress.com/item/32890380056.html?spm=a2g0o.detail.1000060.1.7a7233e7mLTlVl&gps-id=pcDetailBottomMoreThisSeller&scm=1007.13339.90158.0&scm_id=1007.13339.90158.0&scm-url=1007.13339.90158.0&pvid=d899bfab-a7ca-46e1-adf2-72ad1d649822",target:"_blank",rel:"noopener noreferrer"}},[t._v("CUAV 알리익스프레스"),a("OutboundLink")],1),t._v("(국제 사용자)")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://item.taobao.com/item.htm?spm=a1z10.5-c.w4002-21303114052.37.a28f697aeYzQx9&id=594262853015",target:"_blank",rel:"noopener noreferrer"}},[t._v("CUAV Taobao"),a("OutboundLink")],1),t._v(" (중국 본토 사용자)")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("Neo GPS 모듈과 함께 자동조종장치를 구매할 수 있습니다.")])]),t._v(" "),a("p",[a("span",{attrs:{id:"connection"}})]),t._v(" "),a("h2",{attrs:{id:"배선"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#배선"}},[t._v("#")]),t._v(" 배선")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/ko/assembly/quick_start_cuav_v5_plus.html"}},[t._v("CUAV V5+ 배선 개요")])],1),t._v(" "),a("h2",{attrs:{id:"핀배열"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#핀배열"}},[t._v("#")]),t._v(" 핀배열")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://manual.cuav.net/V5-Plus.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("여기"),a("OutboundLink")],1),t._v("에서 "),a("strong",[t._v("V5+")]),t._v(" 핀배열을 다운로드하세요.")]),t._v(" "),a("h2",{attrs:{id:"정격-전압"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#정격-전압"}},[t._v("#")]),t._v(" 정격 전압")]),t._v(" "),a("p",[a("em",[t._v("V5 + AutoPilot")]),t._v("은 중복 전원공급장치를 지원합니다. 최대 3개의 전원를 사용할 수 있습니다 : "),a("code",[t._v("Power1")]),t._v(", "),a("code",[t._v("Power2")]),t._v(" 및 "),a("code",[t._v("USB")]),t._v(". 이러한 소스중 하나 이상에 전원을 공급하여야합니다. 그렇지 않으면, 비행 컨트롤러에 전원이 공급되지 않습니다.")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("PX4IO 모듈이 있는 FMUv5 기반 FMU(*V5+*의 경우)에서 서보파워레일은 FMU에 의해서만 모니터링됩니다. FMU에 의해 전원에 의해 공급받지도 않고, 공급되지도 않습니다. 그러나, **+**로 표시된 핀은 모두 공통이며, BEC는 서보전원레일에 전원을 공급하기 위하여 모든 서보 핀 세트에 연결될 수 있습니다.")])]),t._v(" "),a("p",[a("strong",[t._v("정상 작동 최대 정격 전압")])]),t._v(" "),a("p",[t._v("이러한 조건에서 전원은 아래의 순서대로 시스템에 전원을 공급하여야합니다.")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("Power1")]),t._v(" 및 "),a("code",[t._v("Power2")]),t._v(" 입력(4.3V ~ 5.4V)")]),t._v(" "),a("li",[a("code",[t._v("USB")]),t._v(" 입력(4.75V ~ 5.25V)")])]),t._v(" "),a("h2",{attrs:{id:"과전류-보호"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#과전류-보호"}},[t._v("#")]),t._v(" 과전류 보호")]),t._v(" "),a("p",[t._v("*V5+*은 5V 주변장치와 5V 이상의 고전력에 과전류 보호기능으로 전류를 2.5A로 제한합니다. *V5+*에는 단락보호 기능이 있습니다.")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("핀 1로 나열된 커넥터에 최대 2.5A를 전달할 수 있습니다(단, 정격은 1A에 불과함).")])]),t._v(" "),a("h2",{attrs:{id:"펌웨어-빌드"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#펌웨어-빌드"}},[t._v("#")]),t._v(" 펌웨어 빌드")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("대부분의 사용자들은 펌웨어를 빌드할 필요는 없습니다. 하드웨어가 연결되면 *QGroundControl*에 의해 사전 구축되고 자동으로 설치됩니다.")]),t._v(" "),a("p",[t._v(":::")]),t._v(" "),a("p",[t._v("이 대상에 대한 "),a("RouterLink",{attrs:{to:"/ko/dev_setup/building_px4.html"}},[t._v("PX4 빌드")]),t._v(" 방법 :")],1),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("make px4_fmu-v5_default\n")])])]),a("h2",{attrs:{id:"디버그-포트"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#디버그-포트"}},[t._v("#")]),t._v(" 디버그 포트")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/ko/debug/system_console.html"}},[t._v("PX4 시스템 콘솔")]),t._v("과 "),a("RouterLink",{attrs:{to:"/ko/debug/swd_debug.html"}},[t._v("SWD 인터페이스")]),t._v("는 "),a("strong",[t._v("FMU 디버그")]),t._v(" 포트에서 실행됩니다. 보드에는 I/O 디버그 인터페이스가 없습니다.")],1),t._v(" "),a("p",[a("img",{attrs:{src:v(374),alt:"디버그 포트(DSU7)"}})]),t._v(" "),a("p",[t._v("디버그 포트("),a("code",[t._v("DSU7")]),t._v(")는 "),a("a",{attrs:{href:"https://www.digikey.com.au/product-detail/en/jst-sales-america-inc/BM06B-GHS-TBT-LF-SN-N/455-1582-1-ND/807850",target:"_blank",rel:"noopener noreferrer"}},[t._v("JST BM06B"),a("OutboundLink")],1),t._v(" 커넥터를 사용하며 다음과 같은 핀배열을 가집니다.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("핀")]),t._v(" "),a("th",[t._v("신호")]),t._v(" "),a("th",[t._v("전압")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("1 (적)")]),t._v(" "),a("td",[t._v("5V+")]),t._v(" "),a("td",[t._v("+5V")])]),t._v(" "),a("tr",[a("td",[t._v("2 (흑)")]),t._v(" "),a("td",[t._v("DEBUG TX(출력)")]),t._v(" "),a("td",[t._v("+3.3V")])]),t._v(" "),a("tr",[a("td",[t._v("3 (흑)")]),t._v(" "),a("td",[t._v("DEBUG TX(입력)")]),t._v(" "),a("td",[t._v("+3.3V")])]),t._v(" "),a("tr",[a("td",[t._v("4 (흑)")]),t._v(" "),a("td",[t._v("FMU_SWDIO")]),t._v(" "),a("td",[t._v("+3.3V")])]),t._v(" "),a("tr",[a("td",[t._v("5 (흑)")]),t._v(" "),a("td",[t._v("FMU_SWCLK")]),t._v(" "),a("td",[t._v("+3.3V")])]),t._v(" "),a("tr",[a("td",[t._v("6 (흑)")]),t._v(" "),a("td",[t._v("GND")]),t._v(" "),a("td",[t._v("GND")])])])]),t._v(" "),a("p",[t._v("제품 패키지에는 "),a("code",[t._v("DSU7")]),t._v(" 포트에 연결할 수 있는 편리한 디버그 케이블이 포함되어 있습니다. 이렇게 하면, "),a("RouterLink",{attrs:{to:"/ko/debug/system_console.html"}},[t._v("PX4 시스템 콘솔")]),t._v("을 컴퓨터 USB 포트에 연결하기 위한 FTDI 케이블과 SWD/JTAG 디버깅에 사용되는 SWD 핀이 분리됩니다. 제공된 디버그 케이블이 SWD 포트 "),a("code",[t._v("Vref")]),t._v(" 핀 (1)에 연결되지 않습니다.")],1),t._v(" "),a("p",[a("img",{attrs:{src:v(336),alt:"CUAV 디버그 케이블"}})]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("SWD")]),t._v(" "),a("p",[t._v("Vref 핀 (1)은 Vref로 5V를 사용하지만, CPU는 3.3V에서 실행됩니다!")]),t._v(" "),a("p",[t._v("일부 JTAG 어댑터 (SEGGER J-Link)는 Vref 전압을 사용하여 SWD 라인의 전압을 설정합니다. "),a("em",[t._v("Segger Jlink")]),t._v("에 직접 연결하려면 JTAG에 "),a("code",[t._v("Vtref")]),t._v("를 제공(즉, 3.3V 및 * NOT </ 0> 5V 제공)하는 "),a("code",[t._v("DSM")]),t._v("/"),a("code",[t._v("SBUS")]),t._v("/"),a("code",[t._v("RSSI")]),t._v("로 표시된 커넥터의 핀 4에서 3.3 볼트를 사용하는 것이 좋습니다.")]),a("p"),t._v(" "),a("p",[t._v("더 자세한 내용은 "),a("a",{attrs:{href:"#using-jtag-for-hardware-debugging"}},[t._v("하드웨어 디버깅에 JTAG 사용")]),t._v("을 참조하십시오.")])]),t._v(" "),a("h2",{attrs:{id:"시리얼-포트-매핑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#시리얼-포트-매핑"}},[t._v("#")]),t._v(" 시리얼 포트 매핑")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("UART")]),t._v(" "),a("th",[t._v("장치")]),t._v(" "),a("th",[t._v("포트")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("UART1")]),t._v(" "),a("td",[t._v("/dev/ttyS0")]),t._v(" "),a("td",[t._v("GPS")])]),t._v(" "),a("tr",[a("td",[t._v("USART2")]),t._v(" "),a("td",[t._v("/dev/ttyS1")]),t._v(" "),a("td",[t._v("TELEM1 (흐름 제어)")])]),t._v(" "),a("tr",[a("td",[t._v("USART3")]),t._v(" "),a("td",[t._v("/dev/ttyS2")]),t._v(" "),a("td",[t._v("TELEM2 (흐름 제어)")])]),t._v(" "),a("tr",[a("td",[t._v("UART4")]),t._v(" "),a("td",[t._v("/dev/ttyS3")]),t._v(" "),a("td",[t._v("TELEM4")])]),t._v(" "),a("tr",[a("td",[t._v("USART6")]),t._v(" "),a("td",[t._v("/dev/ttyS4")]),t._v(" "),a("td",[t._v("TX는 SBUS_RC 커넥터의 RC 입력입니다.")])]),t._v(" "),a("tr",[a("td",[t._v("UART7")]),t._v(" "),a("td",[t._v("/dev/ttyS5")]),t._v(" "),a("td",[t._v("디버깅 콘솔")])]),t._v(" "),a("tr",[a("td",[t._v("UART8")]),t._v(" "),a("td",[t._v("/dev/ttyS6")]),t._v(" "),a("td",[t._v("PX4IO")])])])]),t._v(" "),a("p",[a("span",{attrs:{id:"optional-hardware"}})]),t._v(" "),a("h2",{attrs:{id:"주변-장치"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#주변-장치"}},[t._v("#")]),t._v(" 주변 장치")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://item.taobao.com/item.htm?spm=a1z10.3-c-s.w4002-16371268452.37.6d9f48afsFgGZI&id=9512463037",target:"_blank",rel:"noopener noreferrer"}},[t._v("디지털 대기속도 센서"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://cuav.taobao.com/category-158480951.htm?spm=2013.1.w5002-16371268426.4.410b7a821qYbBq&search=y&catName=%CA%FD%B4%AB%B5%E7%CC%A8",target:"_blank",rel:"noopener noreferrer"}},[t._v("텔레메트리 라디오 모듈"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/sensor/rangefinders.html"}},[t._v("거리계/거리 센서")])],1)]),t._v(" "),a("h2",{attrs:{id:"지원-플랫폼-및-기체"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#지원-플랫폼-및-기체"}},[t._v("#")]),t._v(" 지원 플랫폼 및 기체")]),t._v(" "),a("p",[t._v("일반 RC 서보 또는 Futaba S-Bus 서보로 제어 가능한 모든 멀티콥터/비행기/로버 또는 보트. 지원되는 운송체의 설정은 "),a("RouterLink",{attrs:{to:"/ko/airframes/airframe_reference.html"}},[t._v("기체 정의서")]),t._v("를 참고하십시오.")],1),t._v(" "),a("h2",{attrs:{id:"참고"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#참고"}},[t._v("#")]),t._v(" 참고")]),t._v(" "),a("h4",{attrs:{id:"다른-유형의-전원모듈용-커넥터에-디지털-또는-아날로그-전원모듈을-연결하지-마십시오"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#다른-유형의-전원모듈용-커넥터에-디지털-또는-아날로그-전원모듈을-연결하지-마십시오"}},[t._v("#")]),t._v(" 다른 유형의 전원모듈용 커넥터에 디지털 또는 아날로그 전원모듈을 연결하지 마십시오.")]),t._v(" "),a("p",[t._v("아날로그 전원모듈을 디지털 전원모듈 커넥터에 연결하면 해당 버스의 모든 I2C 장치가 중지됩니다. 특히, 경합으로 인하여 GPS의 나침반이 중지되고, 장기적으로 FMU가 손상 될 수도 있습니다.")]),t._v(" "),a("p",[t._v("마찬가지로, 아날로그 커넥터에 연결된 디지털 전원모듈은 작동하지 않으며, 장기적으로 전원 모듈이 손상될 수 있습니다.")]),t._v(" "),a("h2",{attrs:{id:"호환성"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#호환성"}},[t._v("#")]),t._v(" 호환성")]),t._v(" "),a("p",[t._v("CUAV는 몇 가지 차별화된 디자인을 채택하고, 아래에서 설명하는 일부 하드웨어와 호환되지 않습니다.")]),t._v(" "),a("p",[a("span",{attrs:{id:"compatibility_gps"}})]),t._v(" "),a("h4",{attrs:{id:"다른-장치와-호환되지-않는-gps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#다른-장치와-호환되지-않는-gps"}},[t._v("#")]),t._v(" 다른 장치와 호환되지 않는 GPS")]),t._v(" "),a("p",[t._v("*CUAV V5+*와 "),a("em",[t._v("CUAV V5 nano")]),t._v("와 함께 사용하도록 권장되는 "),a("em",[t._v("Neo v2.0 GPS")]),t._v("는 다른 Pixhawk 비행 컨트롤러(특히, 부저 부분이 호환되지 않으며 안전 스위치에 문제가 있을 수 있습니다.)")]),t._v(" "),a("p",[t._v("UAVCAN "),a("a",{attrs:{href:"http://doc.cuav.net/gps/neo-series-gnss/en/neo-v2-pro.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("NEO V2 PRO GNSS 수신기"),a("OutboundLink")],1),t._v("도 사용할 수 있으며, 다른 비행 컨트롤러와 호환됩니다.")]),t._v(" "),a("p",[a("span",{attrs:{id:"compatibility_jtag"}})]),t._v(" "),a("h4",{attrs:{id:"하드웨어-디버깅에-jtag-사용"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#하드웨어-디버깅에-jtag-사용"}},[t._v("#")]),t._v(" 하드웨어 디버깅에 JTAG 사용")]),t._v(" "),a("p",[a("code",[t._v("DSU7")]),t._v(" FMU 디버그 핀 1은 CPU의 3.3V가 아닌 5V입니다.")]),t._v(" "),a("p",[t._v("일부 JTAG는이 전압을 사용하여 타겟과 통신시 IO 레벨을 설정합니다.")]),t._v(" "),a("p",[a("em",[t._v("Segger Jlink")]),t._v("에 직접 연결하려면 디버그 커넥터("),a("code",[t._v("Vtref")]),t._v(")의 핀 1로 3.3 볼트의 DSM/SBUS/RSSI 핀 4를 사용하는 것이 좋습니다.")]),t._v(" "),a("h2",{attrs:{id:"알려진-문제"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#알려진-문제"}},[t._v("#")]),t._v(" 알려진 문제")]),t._v(" "),a("p",[t._v("아래 문제는 처음 나타나는 "),a("em",[t._v("배치번호")]),t._v("를 나타냅니다. 배치번호는 V01 뒤의 4 자리 생산날짜이며 비행 컨트롤러 측면의 스티커에 표시되어 있습니다. 예를 들어, 일련 번호 Batch V011904((V01은 V5의 번호, 1904는 생산날짜, 즉 배치번호)입니다.")]),t._v(" "),a("p",[a("span",{attrs:{id:"pin1_unfused"}})]),t._v(" "),a("h4",{attrs:{id:"sbus-dsm-rssi-인터페이스-pin1-언퓨즈"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sbus-dsm-rssi-인터페이스-pin1-언퓨즈"}},[t._v("#")]),t._v(" SBUS / DSM / RSSI 인터페이스 Pin1 언퓨즈")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("이것은 안전에 관련된 문제입니다.")])]),t._v(" "),a("p",[t._v("SBUS/DSM/RSSI 인터페이스에 다른 장비(RC 수신기 제외)를 연결하지 마십시오. 장비가 손상될 수 있습니다.")]),t._v(" "),a("ul",[a("li",[a("em",[t._v("발견됨:")]),t._v(" Batches V01190904xxxx")]),t._v(" "),a("li",[a("em",[t._v("수정됨:")]),t._v(" Batches later than V01190904xxxx")])]),t._v(" "),a("h2",{attrs:{id:"추가-정보"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#추가-정보"}},[t._v("#")]),t._v(" 추가 정보")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://manual.cuav.net/V5-Plus.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("CUAV V5+ 매뉴얼"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://doc.cuav.net/flight-controller/v5-autopilot/en/v5+.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("CUAV V5+ 문서"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://docs.google.com/spreadsheets/d/1-n0__BYDedQrc_2NHqBenG1DNepAgnHpSGglke-QQwY/edit#gid=912976165",target:"_blank",rel:"noopener noreferrer"}},[t._v("FMUv5 레퍼런스 디자인 핀배열"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/cuav",target:"_blank",rel:"noopener noreferrer"}},[t._v("CUAV Github"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/cuav/hardware/tree/master/V5_Autopilot/V5%2B/V5%2BBASE",target:"_blank",rel:"noopener noreferrer"}},[t._v("베이스 보드 설계 참조"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/assembly/quick_start_cuav_v5_plus.html"}},[t._v("CUAV V5+ 배선 개요")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/frames_multicopter/dji_f450_cuav_5plus.html"}},[t._v("DJI FlameWheel450에서 CUAV v5 +를 사용하는 기체 빌드 로그")])],1)])])])}),[],!1,null,null,null);_.default=e.exports},336:function(t,_,v){t.exports=v.p+"assets/img/cuav_v5_debug_cable.c0455619.jpg"},349:function(t,_,v){t.exports=v.p+"assets/img/v5+_01.e440c966.png"},374:function(t,_,v){t.exports=v.p+"assets/img/debug_port_dsu7.09bc4de2.jpg"}}]);