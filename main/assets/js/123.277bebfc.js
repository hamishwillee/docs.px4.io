(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{2677:function(t,e,o){"use strict";o.r(e);var r=o(19),_=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"pixhawk-4-배선-개요"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pixhawk-4-배선-개요"}},[t._v("#")]),t._v(" Pixhawk 4 배선 개요")]),t._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[t._v("PX4에서는 이 자동 항법 장치를 제조하지 않습니다. Contact the [manufacturer](https://holybro.com/) for hardware support or compliance issues.")])]),t._v(" "),r("p",[r("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk4.html"}},[t._v("Pixhawk 4")]),r("sup",[t._v("®")]),t._v(" 비행 콘트롤러 전원 공급방법과 주변 장치 연결방법을 설명합니다.")],1),t._v(" "),r("img",{attrs:{src:o(368),width:"420px",title:"Pixhawk4 이미지"}}),t._v(" "),r("h2",{attrs:{id:"배선-개요"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#배선-개요"}},[t._v("#")]),t._v(" 배선 개요")]),t._v(" "),r("p",[t._v("아래의 이미지는 주요 센서와 주변 장치(모터 및 서보 출력 제외)의 연결 방법을 설명합니다. 다음 섹션에서 각 장치에 대하여 자세히 설명합니다.")]),t._v(" "),r("p",[r("img",{attrs:{src:o(604),alt:"Pixhawk 4 배선 개요"}})]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[t._v("사용 가능한 포트에 대한 자세한 내용은 "),r("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk4.html#connectors"}},[t._v("Pixhawk 4 > 연결방법")]),t._v("을 참고하십시오.")],1)]),t._v(" "),r("h2",{attrs:{id:"콘트롤러-장착-및-장착-방향"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#콘트롤러-장착-및-장착-방향"}},[t._v("#")]),t._v(" 콘트롤러 장착 및 장착 방향")]),t._v(" "),r("p",[r("em",[t._v("Pixhawk 4")]),t._v(" should be mounted on the frame using vibration-damping foam pads (included in the kit). 차량의 무게 중심에 최대한 가깝운 프레임에 장착하여야 하며, 화살표가 차량의 앞쪽과 위쪽을 향하도록 하여야 합니다.")]),t._v(" "),r("img",{attrs:{src:o(605),align:"center"}}),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("If the controller cannot be mounted in the recommended/default orientation (e.g. due to space constraints) you will need to configure the autopilot software with the orientation that you actually used: "),r("RouterLink",{attrs:{to:"/ko/config/flight_controller_orientation.html"}},[t._v("Flight Controller Orientation")]),t._v(".")],1)]),t._v(" "),r("h2",{attrs:{id:"gps-나침반-부저-안전-스위치-led"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#gps-나침반-부저-안전-스위치-led"}},[t._v("#")]),t._v(" GPS + 나침반 + 부저 + 안전 스위치 + LED")]),t._v(" "),r("p",[t._v("나침반, 안전 스위치, 부저 및 LED 통합 GPS를 "),r("strong",[t._v("GPS MODULE")]),t._v(" 포트에 연결합니다.")]),t._v(" "),r("p",[t._v("The GPS/Compass should be "),r("RouterLink",{attrs:{to:"/ko/assembly/mount_gps_compass.html"}},[t._v("mounted on the frame")]),t._v(" as far away from other electronics as possible, with the direction marker towards the front of the vehicle (separating the compass from other electronics will reduce interference).")],1),t._v(" "),r("p",[r("img",{attrs:{src:o(361),alt:"Pixhawk 4 -- 나침반/GPS 연결"}})]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("The GPS module's integrated safety switch is enabled "),r("em",[t._v("by default")]),t._v(" (when enabled, PX4 will not let you arm the vehicle). 안전 스위치를 1초간 길게 누르면 비활성화됩니다. 안전 스위치를 다시 눌러 안전 장치를 활성화하고 기체 시동을 끌 수 있습니다. 조종기나 지상국 프로그램에서 기체 시동을 끌 수 없는 상황에서 유용합니다.")])]),t._v(" "),r("h2",{attrs:{id:"전원"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#전원"}},[t._v("#")]),t._v(" 전원")]),t._v(" "),r("p",[t._v("Connect the output of the "),r("em",[t._v("Power Management Board")]),t._v(" (PM board) that comes with the kit to one of the "),r("strong",[t._v("POWER")]),t._v(" bricks of "),r("em",[t._v("Pixhawk 4")]),t._v(" using a 6-wire cable. PM 입력  "),r("strong",[t._v("2 ~ 12S")]),t._v("는 LiPo 배터리에 연결합니다. ESC와 서보에 대한 전원 공급 및 신호 연결을 위한 전원관리보드의 연결 방법은 아래의 표에서 설명합니다. ESC와 서보에 대한 전원 공급 및 신호 연결을 위한 전원관리보드의 연결 방법은 아래의 표에서 설명합니다.")]),t._v(" "),r("p",[t._v("The image below shows the power management board provided with "),r("em",[t._v("Pixhawk 4")]),t._v(".")]),t._v(" "),r("p",[r("img",{attrs:{src:o(369),alt:"Pixhawk 4 - 전원 관리 보드"}})]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("고정익 또는 자동차로 사용하는 경우 "),r("strong",[t._v("FMU PWM-OUT")]),t._v("의 8 핀 전원 (+) 레일에 러더, 엘레 본 등의 서보를 구동을 위한 별도의 전원을 공급하여야 합니다. 전원 레일을 BEC가 장착된 ESC 또는 독립형 5V BEC 또는 2S LiPo 배터리에 연결하여야 합니다. 서보에 제공되는 전압이 적절한 지 체크하십시오.")])]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("핀 & 커넥터")]),t._v(" "),r("th",[t._v("기능")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("I/O PWM-IN")]),t._v(" "),r("td",[t._v("See note below for connection to "),r("em",[t._v("Pixhawk 4")])])]),t._v(" "),r("tr",[r("td",[t._v("M1")]),t._v(" "),r("td",[t._v("I/O PWM OUT 1 : 신호선을 모터 1의 ESC에 연결합니다.")])]),t._v(" "),r("tr",[r("td",[t._v("M2")]),t._v(" "),r("td",[t._v("I/O PWM OUT 2 : 신호선을 모터 2의 ESC에 연결합니다.")])]),t._v(" "),r("tr",[r("td",[t._v("M3")]),t._v(" "),r("td",[t._v("I/O PWM OUT 3 : 신호선을 모터 3의 ESC에 연결합니다.")])]),t._v(" "),r("tr",[r("td",[t._v("M4")]),t._v(" "),r("td",[t._v("I/O PWM OUT 4 : 신호선을 모터 4의 ESC에 연결합니다.")])]),t._v(" "),r("tr",[r("td",[t._v("M5")]),t._v(" "),r("td",[t._v("I/O PWM OUT 5 : 신호선을 모터 5의 ESC에 연결합니다.")])]),t._v(" "),r("tr",[r("td",[t._v("M6")]),t._v(" "),r("td",[t._v("I/O PWM OUT 6 : 신호선을 모터 6의 ESC에 연결합니다.")])]),t._v(" "),r("tr",[r("td",[t._v("M7")]),t._v(" "),r("td",[t._v("I/O PWM OUT 7 : 신호선을 모터 7의 ESC에 연결합니다.")])]),t._v(" "),r("tr",[r("td",[t._v("M8")]),t._v(" "),r("td",[t._v("I/O PWM OUT 8 : 신호선을 모터 8의 ESC에 연결합니다.")])]),t._v(" "),r("tr",[r("td",[t._v("FMU PWM-IN")]),t._v(" "),r("td",[t._v("See note below for connection to "),r("em",[t._v("Pixhawk 4")])])]),t._v(" "),r("tr",[r("td",[t._v("FMU PWM-OUT")]),t._v(" "),r("td",[t._v("If FMU PWM-IN is connected to "),r("em",[t._v("Pixhawk 4")]),t._v(", connect signal wires to ESC or signal, +, - wires to servos here")])]),t._v(" "),r("tr",[r("td",[t._v("CAP&ADC-OUT")]),t._v(" "),r("td",[t._v("connect to CAP & ADC IN port of "),r("em",[t._v("Pixhawk 4")])])]),t._v(" "),r("tr",[r("td",[t._v("CAP&ADC-OUT")]),t._v(" "),r("td",[t._v("CAP & amp; ADC 입력 : 보드 뒷면에 핀배열이 인쇄되어 있습니다.")])]),t._v(" "),r("tr",[r("td",[t._v("B+")]),t._v(" "),r("td",[t._v("ESC에 전원을 공급하기 위해 ESC B +에 연결")])]),t._v(" "),r("tr",[r("td",[t._v("GND")]),t._v(" "),r("td",[t._v("ESC 접지에 연결")])]),t._v(" "),r("tr",[r("td",[t._v("PWR1")]),t._v(" "),r("td",[t._v("5v output 3A, connect to "),r("em",[t._v("Pixhawk 4")]),t._v(" POWER 1")])]),t._v(" "),r("tr",[r("td",[t._v("PWR2")]),t._v(" "),r("td",[t._v("5v output 3A, connect to "),r("em",[t._v("Pixhawk 4")]),t._v(" POWER 2")])]),t._v(" "),r("tr",[r("td",[t._v("2~12S")]),t._v(" "),r("td",[t._v("전원 입력, 12S LiPo 배터리에 연결")])])])]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("Depending on your airframe type, refer to "),r("RouterLink",{attrs:{to:"/ko/airframes/airframe_reference.html"}},[t._v("Airframe Reference")]),t._v(" to connect "),r("strong",[t._v("I/O PWM OUT")]),t._v(" and "),r("strong",[t._v("FMU PWM OUT")]),t._v(" ports of "),r("em",[t._v("Pixhawk 4")]),t._v(" to PM board. "),r("strong",[t._v("MAIN")]),t._v(" outputs in PX4 firmware map to "),r("strong",[t._v("I/O PWM OUT")]),t._v(" port of "),r("em",[t._v("Pixhawk 4")]),t._v(" whereas "),r("strong",[t._v("AUX outputs")]),t._v(" map to "),r("strong",[t._v("FMU PWM OUT")]),t._v(" of "),r("em",[t._v("Pixhawk 4")]),t._v(". 예를 들어 "),r("strong",[t._v("MAIN1")]),t._v("은 "),r("strong",[t._v("I/O PWM OUT")]),t._v("의 IO_CH1 핀에 매핑되고, "),r("strong",[t._v("AUX1")]),t._v("은 "),r("strong",[t._v("FMU PWM OUT")]),t._v("의 FMU_CH1 핀에 매핑됩니다. "),r("strong",[t._v("FMU PWM-IN")]),t._v(" of PM board is internally connected to "),r("strong",[t._v("FMU PWM-OUT")]),t._v(". "),r("strong",[t._v("I/O PWM-IN")]),t._v(" of PM board is internally connected to "),r("strong",[t._v("M1-8")]),t._v(".")],1)]),t._v(" "),r("p",[t._v("The following table summarizes how to connect "),r("em",[t._v("Pixhawk 4")]),t._v("'s PWM OUT ports to PM board's PWM-IN ports, depending on the Airframe Reference.")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("기체 정의")]),t._v(" "),r("th",[t._v("Connection between "),r("em",[t._v("Pixhawk 4")]),t._v(" --\x3e PM board")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("strong",[t._v("MAIN")]),t._v(": 모터")]),t._v(" "),r("td",[t._v("I/O PWM OUT --\x3e I/O PWM IN")])]),t._v(" "),r("tr",[r("td",[r("strong",[t._v("MAIN")]),t._v(": 서보")]),t._v(" "),r("td",[t._v("I/O PWM OUT --\x3e FMU PWM IN")])]),t._v(" "),r("tr",[r("td",[r("strong",[t._v("AUX")]),t._v(": 모터")]),t._v(" "),r("td",[t._v("FMU PWM OUT --\x3e I/O PWM IN")])]),t._v(" "),r("tr",[r("td",[r("strong",[t._v("AUX")]),t._v(": 서보")]),t._v(" "),r("td",[t._v("FMU PWM OUT --\x3e FMU PWM IN")])])])]),t._v(" "),r("p",[t._v("The pinout of "),r("em",[t._v("Pixhawk 4")]),t._v("’s power ports is shown below. 전류는 기본적으로 0 ~ 120A에 대하여 0 ~ 3.3V의 아날로그 전압을 제공하여야 합니다. 전압는 기본적으로 0~60V에 대하여 0~3.3V의 아날로그 전압을 제공하여야 합니다. VCC 라인은 최소 3A 연속을 제공하여야하며, 기본적으로 5.1V로 설정되어야 합니다. 5V 보다 낮은 전압은 권장되지 않습니다.")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("핀")]),t._v(" "),r("th",[t._v("신호")]),t._v(" "),r("th",[t._v("전압")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("1(red)")]),t._v(" "),r("td",[t._v("VCC")]),t._v(" "),r("td",[t._v("+5V")])]),t._v(" "),r("tr",[r("td",[t._v("2(black)")]),t._v(" "),r("td",[t._v("VCC")]),t._v(" "),r("td",[t._v("+5V")])]),t._v(" "),r("tr",[r("td",[t._v("3(black)")]),t._v(" "),r("td",[t._v("전류")]),t._v(" "),r("td",[t._v("+3.3V")])]),t._v(" "),r("tr",[r("td",[t._v("4(black)")]),t._v(" "),r("td",[t._v("전압")]),t._v(" "),r("td",[t._v("+3.3V")])]),t._v(" "),r("tr",[r("td",[t._v("5(black)")]),t._v(" "),r("td",[t._v("GND")]),t._v(" "),r("td",[t._v("GND")])]),t._v(" "),r("tr",[r("td",[t._v("6(black)")]),t._v(" "),r("td",[t._v("GND")]),t._v(" "),r("td",[t._v("GND")])])])]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("Using the Power Module that comes with the kit you will need to configure the "),r("em",[t._v("Number of Cells")]),t._v(" in the "),r("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/SetupView/Power.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Power Settings"),r("OutboundLink")],1),t._v(" but you won't need to calibrate the "),r("em",[t._v("voltage divider")]),t._v(". You will have to update the "),r("em",[t._v("voltage divider")]),t._v(" if you are using any other power module (e.g. the one from the Pixracer).")])]),t._v(" "),r("h2",{attrs:{id:"radio-control"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#radio-control"}},[t._v("#")]),t._v(" Radio Control")]),t._v(" "),r("p",[t._v("A remote control (RC) radio system is required if you want to "),r("em",[t._v("manually")]),t._v(" control your vehicle (PX4 does not require a radio system for autonomous flight modes).")]),t._v(" "),r("p",[t._v("You will need to "),r("RouterLink",{attrs:{to:"/ko/getting_started/rc_transmitter_receiver.html"}},[t._v("select a compatible transmitter/receiver")]),t._v(" and then "),r("em",[t._v("bind")]),t._v(" them so that they communicate (read the instructions that come with your specific transmitter/receiver).")],1),t._v(" "),r("p",[t._v("The instructions below show how to connect the different types of receivers to "),r("em",[t._v("Pixhawk 4")]),t._v(":")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("Spektrum/DSM 수신기는 "),r("strong",[t._v("DSM/SBUS RC")]),t._v(" 연결합니다.")]),t._v(" "),r("p",[r("img",{attrs:{src:o(606),alt:"Pixhawk 4 - Spektrum 수신기용 라디오 포트"}})])]),t._v(" "),r("li",[r("p",[t._v("PPM 수신기는 "),r("strong",[t._v("PPM RC")]),t._v(" 입력 포트에 연결합니다.")]),t._v(" "),r("p",[r("img",{attrs:{src:o(607),alt:"Pixhawk 4 - PPM 수신기용 라디오 포트"}})])]),t._v(" "),r("li",[r("p",[t._v("PPM and PWM receivers that have an "),r("em",[t._v("individual wire for each channel")]),t._v(" must connect to the "),r("strong",[t._v("PPM RC")]),t._v(" port "),r("em",[t._v("via a PPM encoder")]),t._v(" "),r("a",{attrs:{href:"http://www.getfpv.com/radios/radio-accessories/holybro-ppm-encoder-module.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("like this one"),r("OutboundLink")],1),t._v(" (PPM-Sum receivers use a single signal wire for all channels).")])])]),t._v(" "),r("p",[t._v("For more information about selecting a radio system, receiver compatibility, and binding your transmitter/receiver pair, see: "),r("RouterLink",{attrs:{to:"/ko/getting_started/rc_transmitter_receiver.html"}},[t._v("Remote Control Transmitters & Receivers")]),t._v(".")],1),t._v(" "),r("h2",{attrs:{id:"telemetry-radios-optional"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#telemetry-radios-optional"}},[t._v("#")]),t._v(" Telemetry Radios (Optional)")]),t._v(" "),r("p",[t._v("무선 텔레메트리는 지상국 프로그램의 비행 차량 통신 제어용입니다(예 : UAV를 특정 위치로 지시하거나 새 임무를 업로드 할 수 있음).")]),t._v(" "),r("p",[t._v("기체의 텔레메트리를 "),r("strong",[t._v("TELEM1")]),t._v(" 포트에 연결합니다. 이 포트에 연결된 경우에는 추가 설정이 필요하지 않습니다. 다른 텔레메트리는 일반적으로 지상국 컴퓨터나 모바일 장치에 USB를 통하여 연결됩니다.")]),t._v(" "),r("p",[r("img",{attrs:{src:o(608),alt:"Pixhawk 4 -- 무선 텔레메트리"}})]),t._v(" "),r("p",[r("a",{attrs:{id:"sd_card"}})]),t._v(" "),r("h2",{attrs:{id:"sd-카드-선택-사항"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sd-카드-선택-사항"}},[t._v("#")]),t._v(" SD 카드(선택 사항)")]),t._v(" "),r("p",[t._v("SD 카드는 "),r("RouterLink",{attrs:{to:"/ko/getting_started/flight_reporting.html"}},[t._v("비행 세부 정보를 기록 및 분석")]),t._v("하고, 임무를 수행하고, UAVCAN 버스 하드웨어를 사용하는 데 필요하므로 사용하는 것이 좋습니다. Insert the card (included in Pixhawk 4 kit) into "),r("em",[t._v("Pixhawk 4")]),t._v(" as shown below.")],1),t._v(" "),r("p",[r("img",{attrs:{src:o(609),alt:"Pixhawk 4 -- SD 카드"}})]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[t._v("For more information see "),r("RouterLink",{attrs:{to:"/ko/getting_started/px4_basic_concepts.html#sd-cards-removable-memory"}},[t._v("Basic Concepts > SD Cards (Removable Memory)")]),t._v(".")],1)]),t._v(" "),r("h2",{attrs:{id:"모터"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#모터"}},[t._v("#")]),t._v(" 모터")]),t._v(" "),r("p",[t._v("모터/서보 신호는 "),r("strong",[t._v("I/O PWM OUT")]),t._v(" ("),r("strong",[t._v("MAIN OUT")]),t._v(") 및 "),r("strong",[t._v("FMU PWM OUT")]),t._v(" (** AUX **)에 연결됩니다. ) 포트는 "),r("RouterLink",{attrs:{to:"/ko/airframes/airframe_reference.html"}},[t._v("기체 정의서")]),t._v("에서 순서가 지정되어 있습니다.")],1),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v('이 참고사항은 모든 지원되는 기체 프레임의 출력 포트의 모터/서보 연결 리스트입니다 (만약 프레임이 참고사항에 기재되어 있지 않다면, 올바른 유형의 "일반" 프레임을 사용하십시오).')])]),t._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),r("p",[t._v("The mapping is not consistent across frames (e.g. you can't rely on the throttle being on the same output for all plane frames). 해당 기체의 프레임의  정확한 모터 연결 여부를 확인하십시오.")])]),t._v(" "),r("h2",{attrs:{id:"기타-주변-장치"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#기타-주변-장치"}},[t._v("#")]),t._v(" 기타 주변 장치")]),t._v(" "),r("p",[t._v("주변 장치 배선 및 설정에 관한 선택 사항은 개별 "),r("RouterLink",{attrs:{to:"/ko/peripherals/"}},[t._v("주변 장치")]),t._v("를 참고하십시오.")],1),t._v(" "),r("h2",{attrs:{id:"핀배열"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#핀배열"}},[t._v("#")]),t._v(" 핀배열")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://holybro.com/manual/Pixhawk4-Pinouts.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk 4 Pinouts"),r("OutboundLink")],1),t._v(" (Holybro)")]),t._v(" "),r("h2",{attrs:{id:"설정"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#설정"}},[t._v("#")]),t._v(" 설정")]),t._v(" "),r("p",[t._v("더 자세한 일반 설정 방법은 "),r("RouterLink",{attrs:{to:"/ko/config/"}},[t._v("자동항법장치 설정")]),t._v("을 참고하십시오.")],1),t._v(" "),r("p",[t._v("QuadPlane에 대한 자세한 설정 방법은 "),r("RouterLink",{attrs:{to:"/ko/config_vtol/vtol_quad_configuration.html"}},[t._v("QuadPlane VTOL 설정")]),t._v("을 참고하십시오.")],1),t._v(" "),r("h2",{attrs:{id:"추가-정보"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#추가-정보"}},[t._v("#")]),t._v(" 추가 정보")]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk4.html"}},[t._v("Pixhawk 4")]),t._v(" (개요 페이지)")],1),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/PX4/PX4-user_guide/raw/main/assets/flight_controller/pixhawk4/pixhawk4_technical_data_sheet.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk 4 기술 데이터 시트"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://holybro.com/manual/Pixhawk4-Pinouts.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk 4 Pinouts"),r("OutboundLink")],1),t._v(" (Holybro)")]),t._v(" "),r("li",[r("a",{attrs:{href:"https://holybro.com/manual/Pixhawk4-quickstartguide.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk 4 빠른 시작 가이드 (Holybro)"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=_.exports},361:function(t,e,o){t.exports=o.p+"assets/img/pixhawk4_compass_gps.3e72e652.jpg"},368:function(t,e,o){t.exports=o.p+"assets/img/pixhawk4_logo_view.5427b222.jpg"},369:function(t,e,o){t.exports=o.p+"assets/img/pixhawk4_power_management_board.c1d457c8.png"},604:function(t,e,o){t.exports=o.p+"assets/img/pixhawk4_wiring_overview.38db7f7d.png"},605:function(t,e,o){t.exports=o.p+"assets/img/pixhawk4_mounting_and_foam.6abade99.png"},606:function(t,e,o){t.exports=o.p+"assets/img/pixhawk4_receiver_sbus.978277d5.png"},607:function(t,e,o){t.exports=o.p+"assets/img/pixhawk_4_receiver_ppm.cda4c30f.png"},608:function(t,e,o){t.exports=o.p+"assets/img/pixhawk4_telemetry_radio.0540a071.jpg"},609:function(t,e,o){t.exports=o.p+"assets/img/pixhawk4_sd_card.059a898b.png"}}]);