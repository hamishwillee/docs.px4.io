(window.webpackJsonp=window.webpackJsonp||[]).push([[322],{2612:function(t,r,_){"use strict";_.r(r);var e=_(19),v=Object(e.a)({},(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"holybro-pix32-v5"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#holybro-pix32-v5"}},[t._v("#")]),t._v(" Holybro Pix32 v5")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("PX4에서는 이 제품을 제조하지 않습니다. Contact the [manufacturer](https://holybro.com/) for hardware support or compliance issues.")])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://holybro.com/products/pix32-v5",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pix32 v5"),e("OutboundLink")],1),e("sup",[t._v("®")]),t._v(" is an advanced autopilot flight controller designed and made by Holybro"),e("sup",[t._v("®")]),t._v(". PX4 펌웨어 실행에 최적화 되어 있으며, 연구와 상업용 개발자들에게 적합합니다. "),e("a",{attrs:{href:"https://pixhawk.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk-project"),e("OutboundLink")],1),t._v(" "),e("strong",[t._v("FMUv5")]),t._v(" 개방형 하드웨어 설계를 기반으로 "),e("a",{attrs:{href:"https://nuttx.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("NuttX"),e("OutboundLink")],1),t._v(" OS에서 PX4를 실행합니다. Pixhawk4의 변형 버전으로 간주할 수 있습니다.")]),t._v(" "),e("p",[t._v("Pix32 v5는 고출력, 유연하고 사용자 정의 가능한 비행제어 시스템을 위하여 설계되었습니다. 별도의 비행 컨트롤러와 캐리어 보드로 구성되며 100핀 커넥터로 연결됩니다. 이 디자인은 사용자가 Holybro에서 만든베이스 보드를 선택하거나 사용자가 정의할 수 있습니다.")]),t._v(" "),e("p",[e("img",{attrs:{src:_(812),alt:"Pix32 v5 계열"}})]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[t._v("이 비행 컨트롤러는 "),e("RouterLink",{attrs:{to:"/ko/flight_controller/autopilot_manufacturer_supported.html"}},[t._v("제조업체의 지원")]),t._v("을 받을 수 있습니다.")],1)]),t._v(" "),e("h2",{attrs:{id:"요약"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#요약"}},[t._v("#")]),t._v(" 요약")]),t._v(" "),e("ul",[e("li",[t._v("메인 FMU 프로세서: STM32F765\n"),e("ul",[e("li",[t._v("32 비트 Arm® Cortex®-M7, 216MHz, 2MB 메모리, 512KB RAM")])])]),t._v(" "),e("li",[t._v("IO 프로세서: STM32F100\n"),e("ul",[e("li",[t._v("32 비트 Arm® Cortex®-M3, 24MHz, 8KB SRAM")])])]),t._v(" "),e("li",[t._v("내장 센서 :\n"),e("ul",[e("li",[t._v("가속도/자이로: ICM-20689")]),t._v(" "),e("li",[t._v("Accel/Gyro: BMI055 or ICM20602")]),t._v(" "),e("li",[t._v("자력계 : IST8310")]),t._v(" "),e("li",[t._v("기압계: MS5611")])])]),t._v(" "),e("li",[t._v("GPS: u-blox Neo-M8N GPS/GLONASS 수신기; 통합 자력계 IST8310")]),t._v(" "),e("li",[t._v("인터페이스:\n"),e("ul",[e("li",[t._v("PWM 출력 8-16개(IO에서 8개, FMU에서 8개)")]),t._v(" "),e("li",[t._v("FMU의 전용 PWM/캡처 입력 3 개")]),t._v(" "),e("li",[t._v("CPPM 전용 RC 입력")]),t._v(" "),e("li",[t._v("Spektrum/DSM 및 S.Bus 전용 R/C 입력, 아날로그/PWM RSSI 입력")]),t._v(" "),e("li",[t._v("Dedicated S.Bus Servo 출력")]),t._v(" "),e("li",[t._v("범용 시리얼 포트 5개\n"),e("ul",[e("li",[t._v("전체 흐름 제어 2개")]),t._v(" "),e("li",[t._v("1.5A 전류 제한이 있는 1 개")])])]),t._v(" "),e("li",[t._v("I2C 포트 3개")]),t._v(" "),e("li",[t._v("SPI 버스 4개\n"),e("ul",[e("li",[t._v("4 개의 칩 선택 및 6 개의 DRDY가 있는 내부 고속 SPI 센서 버스 1 개")]),t._v(" "),e("li",[t._v("XXX 전용 내부 저잡음 SPI 버스 1 개")]),t._v(" "),e("li",[t._v("2 개의 칩 선택이 있는 기압계, DRDY 없음")]),t._v(" "),e("li",[t._v("FRAM 전용 내부 SPI 버스 1 개")]),t._v(" "),e("li",[t._v("센서 모듈에 위치한 전용 SPI 교정 EEPROM 지원")]),t._v(" "),e("li",[t._v("외부 SPI 버스 1개")])])]),t._v(" "),e("li",[t._v("직렬 ESC를 사용하는 듀얼 CAN에 최대 2 개의 CAN 버스\n"),e("ul",[e("li",[t._v("각 CANBus에는 개별 무음 제어 또는 ESC RX-MUX 제어가 있습니다.")]),t._v(" "),e("li",[t._v("배터리 2 개의 전압 및 전류에 대한 아날로그 입력")]),t._v(" "),e("li",[t._v("추가 아날로그 입력 2개")])])])])]),t._v(" "),e("li",[t._v("전기 시스템 :\n"),e("ul",[e("li",[t._v("전원 모듈 출력: 4.9~5.5V")]),t._v(" "),e("li",[t._v("최대 입력 전압: 6V")]),t._v(" "),e("li",[t._v("최대 전류 감지: 120A")]),t._v(" "),e("li",[t._v("USB 전원 입력: 4.75~5.25V")]),t._v(" "),e("li",[t._v("서보 레일 입력: 0~36V")])])]),t._v(" "),e("li",[t._v("중량 및 크기:\n"),e("ul",[e("li",[t._v("크기: 45x45x13.5mm")]),t._v(" "),e("li",[t._v("중량: 33.9g")])])]),t._v(" "),e("li",[t._v("환경 데이터, 품질 및 신뢰성:\n"),e("ul",[e("li",[t._v("작동 온도: -40 ~ 85°c")]),t._v(" "),e("li",[t._v("보관 온도. -40~85℃")]),t._v(" "),e("li",[t._v("CE")]),t._v(" "),e("li",[t._v("FCC")]),t._v(" "),e("li",[t._v("RoHS 준수(무연)")])])])]),t._v(" "),e("p",[t._v("Additional information can be found in the "),e("a",{attrs:{href:"https://cdn.shopify.com/s/files/1/0604/5905/7341/files/Holybro_PIX32-V5_technical_data_sheet_v1.1.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pix32 V5 Technical Data Sheet"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"where-to-buy"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#where-to-buy"}},[t._v("#")]),t._v(" Where to Buy")]),t._v(" "),e("p",[t._v("Order from "),e("a",{attrs:{href:"https://holybro.com/products/pix32-v5",target:"_blank",rel:"noopener noreferrer"}},[t._v("Holybro website"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"조립-및-설정"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#조립-및-설정"}},[t._v("#")]),t._v(" 조립 및 설정")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/ko/assembly/quick_start_holybro_pix32_v5.html"}},[t._v("Pix32 v5 배선 개요")]),t._v("는 GPS, 전원관리보드 등을 포함한 필수 주변 장치 조립방법을 설명합니다.")],1),t._v(" "),e("h2",{attrs:{id:"베이스-보드-레이아웃"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#베이스-보드-레이아웃"}},[t._v("#")]),t._v(" 베이스 보드 레이아웃")]),t._v(" "),e("p",[e("img",{attrs:{src:_(813),alt:"Pix32 v5 이미지"}})]),t._v(" "),e("h2",{attrs:{id:"핀배열"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#핀배열"}},[t._v("#")]),t._v(" 핀배열")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://cdn.shopify.com/s/files/1/0604/5905/7341/files/Holybro_Pix32-V5-Base-Mini-Pinouts.pdf",target:"_blank",rel:"noopener noreferrer"}},[e("em",[t._v("pix32 v5")]),t._v(" and mini baseboard"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"크기"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#크기"}},[t._v("#")]),t._v(" 크기")]),t._v(" "),e("p",[e("img",{attrs:{src:_(814),alt:"Pix32 v5 이미지"}})]),t._v(" "),e("h2",{attrs:{id:"정격-전압"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#정격-전압"}},[t._v("#")]),t._v(" 정격 전압")]),t._v(" "),e("p",[e("em",[t._v("Pix32 v5")]),t._v("은 세 개의 전원이 공급되는 경우, 전원 공급 장치에서 3중 중복이 가능합니다. 이 세개의 파워 레일은 "),e("strong",[t._v("POWER1")]),t._v(", "),e("strong",[t._v("POWER2")]),t._v(" 그리고 "),e("strong",[t._v("USB")]),t._v(" 입니다.")]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[t._v("출력 전원 레일인 "),e("strong",[t._v("FMU PWM OUT")]),t._v("과 "),e("strong",[t._v("I/O PWM OUT")]),t._v(" (0V to 36V) 은 비행제어보드에 전원을 공급하지 않습니다.(공급받지도 않습니다). "),e("strong",[t._v("POWER1")]),t._v(", "),e("strong",[t._v("POWER2")]),t._v(" 또는 "),e("strong",[t._v("USB")]),t._v("중 하나에서 전원을 공급하여야 합니다.")])]),t._v(" "),e("p",[e("strong",[t._v("정상 작동 최대 정격 전압")])]),t._v(" "),e("p",[t._v("이러한 조건에서 전원은 아래의 순서대로 시스템에 전원을 공급하여야합니다.")]),t._v(" "),e("ol",[e("li",[e("strong",[t._v("POWER1")]),t._v("과 "),e("strong",[t._v("POWER2")]),t._v(" 입력 (4.9V ~ 5.5V)")]),t._v(" "),e("li",[e("strong",[t._v("USB")]),t._v(" 입력(4.75V ~ 5.25V)")])]),t._v(" "),e("p",[e("strong",[t._v("절대 최대 정격 전압")])]),t._v(" "),e("p",[t._v("아래의 조건에서 시스템은 전원을 사용하지 않지만(작동하지 않음), 그대로 유지됩니다.")]),t._v(" "),e("ol",[e("li",[e("strong",[t._v("POWER1")]),t._v("과 "),e("strong",[t._v("POWER2")]),t._v(" 입력 (작동 범위 4.1V ~ 5.7V, 0V ~ 10V 손상되지 않음)")]),t._v(" "),e("li",[e("strong",[t._v("USB")]),t._v(" 입력(작동 범위: 4.1V ~ 5.7V, 비손상 범위: 0V ~ 6V)")]),t._v(" "),e("li",[t._v("서보 입력 : "),e("strong",[t._v("FMU PWM OUT")]),t._v(" 및 "),e("strong",[t._v("I/O PWM OUT")]),t._v("의 VDD_SERVO 핀 (0V ~ 42V 손상되지 않음)")])]),t._v(" "),e("h2",{attrs:{id:"펌웨어-빌드"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#펌웨어-빌드"}},[t._v("#")]),t._v(" 펌웨어 빌드")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("대부분의 사용자들은 펌웨어를 빌드할 필요는 없습니다. 하드웨어가 연결되면 *QGroundControl*에 의해 사전 구축되고 자동으로 설치됩니다.")]),t._v(" "),e("p",[t._v(":::")]),t._v(" "),e("p",[t._v("이 대상에 대한 "),e("RouterLink",{attrs:{to:"/ko/dev_setup/building_px4.html"}},[t._v("PX4 빌드")]),t._v(" 방법:")],1),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("make holybro_pix32v5_default\n")])])]),e("h2",{attrs:{id:"디버그-포트"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#디버그-포트"}},[t._v("#")]),t._v(" 디버그 포트")]),t._v(" "),e("p",[t._v("시스템의 "),e("RouterLink",{attrs:{to:"/ko/debug/system_console.html"}},[t._v("직렬 콘솔")]),t._v("과 SWD 인터페이스는 "),e("strong",[t._v("FMU 디버그")]),t._v(" 포트에서 실행됩니다.")],1),t._v(" "),e("p",[e("img",{attrs:{src:_(815),alt:"FMU 디버그 포트 다이어그램"}})]),t._v(" "),e("p",[t._v("The pinout uses the standard "),e("a",{attrs:{href:"https://github.com/pixhawk/Pixhawk-Standards/blob/master/DS-009%20Pixhawk%20Connector%20Standard.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk debug connector pinout"),e("OutboundLink")],1),t._v(". 배선 정보는 다음을 참조하십시오.")]),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/ko/debug/system_console.html#pixhawk_debug_port"}},[t._v("시스템 콘솔 > Pixhawk 디버그 포트")]),t._v(".")],1)]),t._v(" "),e("h2",{attrs:{id:"주변-장치"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#주변-장치"}},[t._v("#")]),t._v(" 주변 장치")]),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/ko/sensor/airspeed.html"}},[t._v("디지털 대기속도 센서")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/ko/telemetry/"}},[t._v("텔레메트리 라디오 모듈")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/ko/sensor/rangefinders.html"}},[t._v("거리계/거리 센서")])],1)]),t._v(" "),e("h2",{attrs:{id:"지원-플랫폼-및-기체"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#지원-플랫폼-및-기체"}},[t._v("#")]),t._v(" 지원 플랫폼 및 기체")]),t._v(" "),e("p",[t._v("일반 RC 서보 또는 Futaba S-Bus 서보로 제어 가능한 모든 멀티콥터/비행기/로버 또는 보트. 지원되는 운송체의 설정은 "),e("RouterLink",{attrs:{to:"/ko/airframes/airframe_reference.html"}},[t._v("기체 정의서")]),t._v("를 참고하십시오.")],1),t._v(" "),e("h2",{attrs:{id:"추가-정보"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#추가-정보"}},[t._v("#")]),t._v(" 추가 정보")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://cdn.shopify.com/s/files/1/0604/5905/7341/files/Holybro_PIX32-V5_technical_data_sheet_v1.1.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pix32 v5  기술 데이터 시트"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://cdn.shopify.com/s/files/1/0604/5905/7341/files/Holybro_Pix32-V5-Base-Mini-Pinouts.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pix32 v5 핀아웃"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://cdn.shopify.com/s/files/1/0604/5905/7341/files/Holybro_PIX32-V5-BASE-Schematic_diagram.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pix32 v5 기본 보드 회로도"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://cdn.shopify.com/s/files/1/0604/5905/7341/files/Holybro_PIX32-V5-Base-Mini-Board_Schematic_diagram.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pix32 v5 미니 기본 보드 회로도"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://docs.google.com/spreadsheets/d/1-n0__BYDedQrc_2NHqBenG1DNepAgnHpSGglke-QQwY/edit#gid=912976165",target:"_blank",rel:"noopener noreferrer"}},[t._v("FMUv5 참조 설계 핀배열"),e("OutboundLink")],1),t._v(".")])])])])}),[],!1,null,null,null);r.default=v.exports},812:function(t,r,_){t.exports=_.p+"assets/img/pix32_v5_family.f44d5023.jpg"},813:function(t,r,_){t.exports=_.p+"assets/img/pix32_v5_base_boards_layout.09e53106.jpg"},814:function(t,r,_){t.exports=_.p+"assets/img/Dimensions_no_border.dd5ad470.jpg"},815:function(t,r,_){t.exports=_.p+"assets/img/FMU_Debug_Port_Horizontal.90dd8483.jpg"}}]);