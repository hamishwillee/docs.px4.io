(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{2143:function(t,_,v){"use strict";v.r(_);var r=v(19),a=Object(r.a)({},(function(){var t=this,_=t.$createElement,r=t._self._c||_;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"pixhawk-4-배선-개요"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pixhawk-4-배선-개요"}},[t._v("#")]),t._v(" Pixhawk 4 배선 개요")]),t._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[t._v("PX4에서는 이 자동 항법 장치를 제조하지 않습니다. 하드웨어 지원이나 호환 문제는 [제조사](https://shop.holybro.com/)에 문의하십시오.")])]),t._v(" "),r("p",[r("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk4.html"}},[t._v("Pixhawk 4")]),r("sup",[t._v("®")]),t._v(" 비행 콘트롤러 전원 공급방법과 주변 장치 연결방법을 설명합니다.")],1),t._v(" "),r("img",{attrs:{src:v(353),width:"420px",title:"Pixhawk4 이미지"}}),t._v(" "),r("h2",{attrs:{id:"배선-개요"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#배선-개요"}},[t._v("#")]),t._v(" 배선 개요")]),t._v(" "),r("p",[t._v("아래의 이미지는 주요 센서와 주변 장치(모터 및 서보 출력 제외)의 연결 방법을 설명합니다. 다음 섹션에서 각 장치에 대하여 자세히 설명합니다.")]),t._v(" "),r("p",[r("img",{attrs:{src:v(562),alt:"Pixhawk 4 배선 개요"}})]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[t._v("사용 가능한 포트에 대한 자세한 내용은 "),r("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk4.html#connectors"}},[t._v("Pixhawk 4 > 연결방법")]),t._v("을 참고하십시오.")],1)]),t._v(" "),r("h2",{attrs:{id:"콘트롤러-장착-및-장착-방향"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#콘트롤러-장착-및-장착-방향"}},[t._v("#")]),t._v(" 콘트롤러 장착 및 장착 방향")]),t._v(" "),r("p",[r("em",[t._v("Pixhawk 4")]),t._v("는 진동 방지 폼 패드(키트에 포함)를 프레임에 장착하여야 합니다. 차량의 무게 중심에 최대한 가깝운 프레임에 장착하여야 하며, 화살표가 차량의 앞쪽과 위쪽을 향하도록 하여야 합니다.")]),t._v(" "),r("img",{attrs:{src:v(563),align:"center"}}),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("콘트롤러를 권장 기본 방향으로 장착 할 수 없는 경우(예 : 공간 제약으로 인해) 실 장착 방향을 자동항법장치 프로그램에서 설정하여야합니다. "),r("RouterLink",{attrs:{to:"/ko/config/flight_controller_orientation.html"}},[t._v("비행 콘트롤러 방향")])],1)]),t._v(" "),r("h2",{attrs:{id:"gps-나침반-부저-안전-스위치-led"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#gps-나침반-부저-안전-스위치-led"}},[t._v("#")]),t._v(" GPS + 나침반 + 부저 + 안전 스위치 + LED")]),t._v(" "),r("p",[t._v("나침반, 안전 스위치, 부저 및 LED 통합 GPS를 "),r("strong",[t._v("GPS MODULE")]),t._v(" 포트에 연결합니다.")]),t._v(" "),r("p",[t._v("GPS/나침반은 차량 전방 표식를 사용하여 가능하면 전자 장치들에서 멀리 떨어진 프레임에 장착하는 것이 좋습니다. 나침반은 다른 전자 장치와 떨어지면 간섭이 줄어듦니다.")]),t._v(" "),r("p",[r("img",{attrs:{src:v(564),alt:"Pixhawk 4 -- 나침반/GPS 연결"}})]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("GPS")]),t._v(" "),r("p",[t._v("모듈의 통합 안전 스위치는 "),r("em",[t._v("기본적으로")]),t._v(" 활성화되어 있습니다. 활성화되면 PX4는 차량 시동을 걸 수 없습니다. 안전 스위치를 1초간 길게 누르면 비활성화됩니다. 안전 스위치를 다시 눌러 안전 장치를 활성화하고 기체 시동을 끌 수 있습니다. 조종기나 지상국 프로그램에서 기체 시동을 끌 수 없는 상황에서 유용합니다.")])]),t._v(" "),r("h2",{attrs:{id:"전원"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#전원"}},[t._v("#")]),t._v(" 전원")]),t._v(" "),r("p",[t._v("키트에 포함된 "),r("em",[t._v("전원관리보드")]),t._v(" (PM 보드)의 케이블을 6개를 사용하여 "),r("em",[t._v("Pixhawk 4")]),t._v("의 **POWER ** 브릭중 하나에 연결합니다. PM 입력 "),r("strong",[t._v("2 ~ 12S")]),t._v("는 LiPo 배터리에 연결합니다. ESC와 서보에 대한 전원 공급 및 신호 연결을 위한 전원관리보드의 연결 방법은 아래의 표에서 설명합니다. PM 보드는 "),r("strong",[t._v("FMU PWM-OUT")]),t._v("의 + 와 - 핀을 통하여 서보에는 전원을 공급하지 않습니다.")]),t._v(" "),r("p",[t._v("아래의 이미지는 "),r("em",[t._v("Pixhawk 4")]),t._v("와 함께 제공되는 전원관리보드입니다.")]),t._v(" "),r("p",[r("img",{attrs:{src:v(354),alt:"Pixhawk 4 - 전원 관리 보드"}})]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("고정익 또는 자동차로 사용하는 경우 "),r("strong",[t._v("FMU PWM-OUT")]),t._v("의 8 핀 전원 (+) 레일에 러더, 엘레 본 등의 서보를 구동을 위한 별도의 전원을 공급하여야 합니다. 전원 레일을 BEC가 장착된 ESC 또는 독립형 5V BEC 또는 2S LiPo 배터리에 연결하여야 합니다. 서보에 제공되는 전압이 적절한 지 체크하십시오.")])]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("핀 & 커넥터")]),t._v(" "),r("th",[t._v("기능")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("I/O PWM-IN")]),t._v(" "),r("td",[r("em",[t._v("Pixhawk 4")]),t._v("에 연결하려면 아래를 참고하십시오.")])]),t._v(" "),r("tr",[r("td",[t._v("M1")]),t._v(" "),r("td",[t._v("I/O PWM OUT 1 : 신호선을 모터 1의 ESC에 연결합니다.")])]),t._v(" "),r("tr",[r("td",[t._v("M2")]),t._v(" "),r("td",[t._v("I/O PWM OUT 2 : 신호선을 모터 2의 ESC에 연결합니다.")])]),t._v(" "),r("tr",[r("td",[t._v("M3")]),t._v(" "),r("td",[t._v("I/O PWM OUT 3 : 신호선을 모터 3의 ESC에 연결합니다.")])]),t._v(" "),r("tr",[r("td",[t._v("M4")]),t._v(" "),r("td",[t._v("I/O PWM OUT 4 : 신호선을 모터 4의 ESC에 연결합니다.")])]),t._v(" "),r("tr",[r("td",[t._v("M5")]),t._v(" "),r("td",[t._v("I/O PWM OUT 5 : 신호선을 모터 5의 ESC에 연결합니다.")])]),t._v(" "),r("tr",[r("td",[t._v("M6")]),t._v(" "),r("td",[t._v("I/O PWM OUT 6 : 신호선을 모터 6의 ESC에 연결합니다.")])]),t._v(" "),r("tr",[r("td",[t._v("M7")]),t._v(" "),r("td",[t._v("I/O PWM OUT 7 : 신호선을 모터 7의 ESC에 연결합니다.")])]),t._v(" "),r("tr",[r("td",[t._v("M8")]),t._v(" "),r("td",[t._v("I/O PWM OUT 8 : 신호선을 모터 8의 ESC에 연결합니다.")])]),t._v(" "),r("tr",[r("td",[t._v("FMU PWM-IN")]),t._v(" "),r("td",[r("em",[t._v("Pixhawk 4")]),t._v("에 연결하려면 아래를 참고하십시오.")])]),t._v(" "),r("tr",[r("td",[t._v("FMU PWM-OUT")]),t._v(" "),r("td",[t._v("FMU PWM-IN이 "),r("em",[t._v("Pixhawk 4")]),t._v("에 연결된 경우 신호선을 ESC 또는 신호에 연결하고 +, - 선을 서보에 연결합니다.")])]),t._v(" "),r("tr",[r("td",[t._v("CAP&ADC-OUT")]),t._v(" "),r("td",[t._v("CAP에 연결 & amp; "),r("em",[t._v("Pixhawk 4")]),t._v("의 ADC IN 포트")])]),t._v(" "),r("tr",[r("td",[t._v("CAP&ADC-OUT")]),t._v(" "),r("td",[t._v("CAP & amp; ADC 입력 : 보드 뒷면에 핀배열이 인쇄되어 있습니다.")])]),t._v(" "),r("tr",[r("td",[t._v("B+")]),t._v(" "),r("td",[t._v("ESC에 전원을 공급하기 위해 ESC B +에 연결")])]),t._v(" "),r("tr",[r("td",[t._v("GND")]),t._v(" "),r("td",[t._v("ESC 접지에 연결")])]),t._v(" "),r("tr",[r("td",[t._v("PWR1")]),t._v(" "),r("td",[t._v("5v 출력 3A, "),r("em",[t._v("Pixhawk 4")]),t._v(" POWER 1에 연결")])]),t._v(" "),r("tr",[r("td",[t._v("PWR2")]),t._v(" "),r("td",[t._v("5v 출력 3A, "),r("em",[t._v("Pixhawk 4")]),t._v(" POWER 2에 연결")])]),t._v(" "),r("tr",[r("td",[t._v("2~12S")]),t._v(" "),r("td",[t._v("전원 입력, 12S LiPo 배터리에 연결")])])])]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[r("RouterLink",{attrs:{to:"/ko/airframes/airframe_reference.html"}},[t._v("기체 정의서")]),t._v("를 기체 유형을 참고하여 "),r("em",[t._v("Pixhawk 4")]),t._v("의 "),r("strong",[t._v("I/O PWM OUT")]),t._v(" 및 ** FMU PWM OUT** 포트를 전원관리보드에 연결하십시오. PX4 펌웨어의 "),r("strong",[t._v("MAIN")]),t._v(" 출력은 "),r("em",[t._v("Pixhawk 4")]),t._v("의 "),r("strong",[t._v("I/O PWM OUT")]),t._v(" 포트에 매핑되는 반면 "),r("strong",[t._v("AUX 출력")]),t._v("은 "),r("em",[t._v("Pixhawk 4")]),t._v("의 "),r("strong",[t._v("FMU PWM OUT")]),t._v("에 매핑됩니다. 예를 들어 "),r("strong",[t._v("MAIN1")]),t._v("은 "),r("strong",[t._v("I/O PWM OUT")]),t._v("의 IO_CH1 핀에 매핑되고, "),r("strong",[t._v("AUX1")]),t._v("은 "),r("strong",[t._v("FMU PWM OUT")]),t._v("의 FMU_CH1 핀에 매핑됩니다. PM 보드의 "),r("strong",[t._v("FMU PWM-IN")]),t._v("은 내부적으로 서보를 구동하는 데 사용되는 "),r("strong",[t._v("FMU PWM-OUT")]),t._v("에 연결합니다 (예 : 에일러론, 엘리베이터, 방향타, 엘레 본, 기어, 플랩, 짐벌, 스티어링). 전원관리보드의 "),r("strong",[t._v("I/O PWM-IN")]),t._v("은 모터 구동에 사용되는 "),r("strong",[t._v("M1-8")]),t._v("에 내부적으로 연결합니다 (예 : 평면, VTOL 및 로버의 스로틀).")],1)]),t._v(" "),r("p",[t._v("아래의 표는 기체 기준에 따라 "),r("em",[t._v("Pixhawk 4")]),t._v("의 PWM OUT 포트를 PM 보드의 PWM-IN 포트에 연결하는 방법을 요약한 것입니다.")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("기체 정의")]),t._v(" "),r("th",[r("em",[t._v("Pixhawk 4")]),t._v(" -> PM 보드간 연결")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("strong",[t._v("MAIN")]),t._v(": 모터")]),t._v(" "),r("td",[t._v("I/O PWM OUT --\x3e I/O PWM IN")])]),t._v(" "),r("tr",[r("td",[r("strong",[t._v("MAIN")]),t._v(": 서보")]),t._v(" "),r("td",[t._v("I/O PWM OUT --\x3e FMU PWM IN")])]),t._v(" "),r("tr",[r("td",[r("strong",[t._v("AUX")]),t._v(": 모터")]),t._v(" "),r("td",[t._v("FMU PWM OUT --\x3e I/O PWM IN")])]),t._v(" "),r("tr",[r("td",[r("strong",[t._v("AUX")]),t._v(": 서보")]),t._v(" "),r("td",[t._v("FMU PWM OUT --\x3e FMU PWM IN")])])])]),t._v(" "),r("p",[r("em",[t._v("Pixhawk 4")]),t._v(" 전원 포트의 핀배열은 다음과 같습니다. 전류는 기본적으로 0 ~ 120A에 대하여 0 ~ 3.3V의 아날로그 전압을 제공하여야 합니다. 전압는 기본적으로 0~60V에 대하여 0~3.3V의 아날로그 전압을 제공하여야 합니다. VCC 라인은 최소 3A 연속을 제공하여야하며, 기본적으로 5.1V로 설정되어야 합니다. 5V 보다 낮은 전압은 권장되지 않습니다.")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("핀")]),t._v(" "),r("th",[t._v("신호")]),t._v(" "),r("th",[t._v("전압")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("1(red)")]),t._v(" "),r("td",[t._v("VCC")]),t._v(" "),r("td",[t._v("+5V")])]),t._v(" "),r("tr",[r("td",[t._v("2(black)")]),t._v(" "),r("td",[t._v("VCC")]),t._v(" "),r("td",[t._v("+5V")])]),t._v(" "),r("tr",[r("td",[t._v("3(black)")]),t._v(" "),r("td",[t._v("전류")]),t._v(" "),r("td",[t._v("+3.3V")])]),t._v(" "),r("tr",[r("td",[t._v("4(black)")]),t._v(" "),r("td",[t._v("전압")]),t._v(" "),r("td",[t._v("+3.3V")])]),t._v(" "),r("tr",[r("td",[t._v("5(black)")]),t._v(" "),r("td",[t._v("접지")]),t._v(" "),r("td",[t._v("GND")])]),t._v(" "),r("tr",[r("td",[t._v("6(black)")]),t._v(" "),r("td",[t._v("접지")]),t._v(" "),r("td",[t._v("GND")])])])]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("키트의 전원모듈을 사용하면 "),r("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/SetupView/Power.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("전원 설정"),r("OutboundLink")],1),t._v("에서 "),r("em",[t._v("셀 수")]),t._v("를 설정하여하며, "),r("em",[t._v("전압 분배기")]),t._v(" 보정은 필요 없습니다. 다른 전원모듈(예 : Pixracer의 모듈)을 사용하는 경우에는 "),r("em",[t._v("전압 분배기")]),t._v("를 업데이트하여야 합니다.")])]),t._v(" "),r("h2",{attrs:{id:"무선-조종"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#무선-조종"}},[t._v("#")]),t._v(" 무선 조종")]),t._v(" "),r("p",[t._v("라디오 리모트 컨트롤(RC)은 기체를 "),r("em",[t._v("수동")]),t._v("으로 조작합니다. PX4 자율 비행 모드에는 RC는 필수 요구 사항은 아닙니다.")]),t._v(" "),r("p",[r("RouterLink",{attrs:{to:"/ko/getting_started/rc_transmitter_receiver.html"}},[t._v("호환되는 송신기/수신기를 선택")]),t._v("후 "),r("em",[t._v("바인딩")]),t._v("을 하여야 통신이 가능합니다. 송신기/수신기의 매뉴얼을 참고하십시오.")],1),t._v(" "),r("p",[t._v("아래 지침은 여러가지 수신기들의 "),r("em",[t._v("Pixhawk 4")]),t._v(" 연결 방법을 설명합니다.")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("Spektrum/DSM 수신기는 "),r("strong",[t._v("DSM/SBUS RC")]),t._v(" 연결합니다.")]),t._v(" "),r("p",[r("img",{attrs:{src:v(565),alt:"Pixhawk 4 - Spektrum 수신기용 라디오 포트"}})])]),t._v(" "),r("li",[r("p",[t._v("PPM 수신기는 "),r("strong",[t._v("PPM RC")]),t._v(" 입력 포트에 연결합니다.")]),t._v(" "),r("p",[r("img",{attrs:{src:v(566),alt:"Pixhawk 4 - PPM 수신기용 라디오 포트"}})])]),t._v(" "),r("li",[r("p",[r("em",[t._v("각각의 채널이 독립적으로 배선된")]),t._v(" PPM/PWM 수신기는 반드시 "),r("strong",[t._v("PPM RC")]),t._v("포트에 "),r("em",[t._v("PPM 인코더를 통해")]),t._v(" "),r("a",{attrs:{href:"http://www.getfpv.com/radios/radio-accessories/holybro-ppm-encoder-module.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("아래와 같이"),r("OutboundLink")],1),t._v("연결합니다. PPM-Sum 수신기는 모든 채널에 하나의 전선만 사용합니다.")])])]),t._v(" "),r("p",[t._v("무선 시스템 선택, 수신기 호환성 및 송신기/수신기 바인딩에 대한 자세한 내용은 "),r("RouterLink",{attrs:{to:"/ko/getting_started/rc_transmitter_receiver.html"}},[t._v("원격 제어 송신기 & 수신기")]),t._v("를 참고하십시오.")],1),t._v(" "),r("h2",{attrs:{id:"무선-텔레메트리-선택-사항"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#무선-텔레메트리-선택-사항"}},[t._v("#")]),t._v(" 무선 텔레메트리(선택 사항)")]),t._v(" "),r("p",[t._v("무선 텔레메트리는 지상국 프로그램의 비행 차량 통신 제어용입니다(예 : UAV를 특정 위치로 지시하거나 새 임무를 업로드 할 수 있음).")]),t._v(" "),r("p",[t._v("기체의 텔레메트리를 "),r("strong",[t._v("TELEM1")]),t._v(" 포트에 연결합니다. 이 포트에 연결된 경우에는 추가 설정이 필요하지 않습니다. 다른 텔레메트리는 일반적으로 지상국 컴퓨터나 모바일 장치에 USB를 통하여 연결됩니다.")]),t._v(" "),r("p",[r("img",{attrs:{src:v(567),alt:"Pixhawk 4 -- 무선 텔레메트리"}})]),t._v(" "),r("p",[r("span",{attrs:{id:"sd_card"}})]),t._v(" "),r("h2",{attrs:{id:"sd-카드-선택-사항"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sd-카드-선택-사항"}},[t._v("#")]),t._v(" SD 카드(선택 사항)")]),t._v(" "),r("p",[t._v("SD 카드는 "),r("RouterLink",{attrs:{to:"/ko/getting_started/flight_reporting.html"}},[t._v("비행 세부 정보를 기록 및 분석")]),t._v("하고, 임무를 수행하고, UAVCAN 버스 하드웨어를 사용하는 데 필요하므로 사용하는 것이 좋습니다. 아래 그림과 같이 SD 카드(Pixhawk 4 키트에 포함됨)를 "),r("em",[t._v("Pixhawk 4")]),t._v("에 삽입합니다.")],1),t._v(" "),r("p",[r("img",{attrs:{src:v(568),alt:"Pixhawk 4 -- SD 카드"}})]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[t._v("자세한 내용은 "),r("RouterLink",{attrs:{to:"/ko/getting_started/px4_basic_concepts.html#sd_cards"}},[t._v("기본 개념 > SD 카드(이동식 메모리)")]),t._v("를 참고하십시오.")],1)]),t._v(" "),r("h2",{attrs:{id:"모터"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#모터"}},[t._v("#")]),t._v(" 모터")]),t._v(" "),r("p",[t._v("모터/서보 신호는 "),r("strong",[t._v("I/O PWM OUT")]),t._v(" ("),r("strong",[t._v("MAIN OUT")]),t._v(") 및 "),r("strong",[t._v("FMU PWM OUT")]),t._v(" (** AUX **)에 연결됩니다. ) 포트는 "),r("RouterLink",{attrs:{to:"/ko/airframes/airframe_reference.html"}},[t._v("기체 정의서")]),t._v("에서 순서가 지정되어 있습니다.")],1),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v('이 참고사항은 모든 지원되는 기체 프레임의 출력 포트의 모터/서보 연결 리스트입니다 (만약 프레임이 참고사항에 기재되어 있지 않다면, 올바른 유형의 "일반" 프레임을 사용하십시오).')])]),t._v(" "),r("p",[t._v(":::caution\n매핑이 프레임간에 일관되지 않습니다 (예 : 모든 평면 프레임에 대해 동일한 출력에있는 스로틀에 의존 할 수 없음). 해당 기체의 프레임의 정확한 모터 연결 여부를 확인하십시오.\n:::")]),t._v(" "),r("h2",{attrs:{id:"기타-주변-장치"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#기타-주변-장치"}},[t._v("#")]),t._v(" 기타 주변 장치")]),t._v(" "),r("p",[t._v("주변 장치 배선 및 설정에 관한 선택 사항은 개별 "),r("RouterLink",{attrs:{to:"/ko/peripherals/"}},[t._v("주변 장치")]),t._v("를 참고하십시오.")],1),t._v(" "),r("h2",{attrs:{id:"핀배열"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#핀배열"}},[t._v("#")]),t._v(" 핀배열")]),t._v(" "),r("p",[r("a",{attrs:{href:"http://www.holybro.com/manual/Pixhawk4-Pinouts.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk 4 핀배열"),r("OutboundLink")],1),t._v(" (Holybro)")]),t._v(" "),r("h2",{attrs:{id:"설정"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#설정"}},[t._v("#")]),t._v(" 설정")]),t._v(" "),r("p",[t._v("더 자세한 일반 설정 방법은 "),r("RouterLink",{attrs:{to:"/ko/config/"}},[t._v("자동항법장치 설정")]),t._v("을 참고하십시오.")],1),t._v(" "),r("p",[t._v("QuadPlane에 대한 자세한 설정 방법은 "),r("RouterLink",{attrs:{to:"/ko/config_vtol/vtol_quad_configuration.html"}},[t._v("QuadPlane VTOL 설정")]),t._v("을 참고하십시오.")],1),t._v(" "),r("h2",{attrs:{id:"추가-정보"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#추가-정보"}},[t._v("#")]),t._v(" 추가 정보")]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk4.html"}},[t._v("Pixhawk 4")]),t._v(" (개요 페이지)")],1),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/PX4/px4_user_guide/raw/master/assets/flight_controller/pixhawk4/pixhawk4_technical_data_sheet.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk 4 기술 데이터 시트"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"http://www.holybro.com/manual/Pixhawk4-Pinouts.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk 4 핀배열"),r("OutboundLink")],1),t._v(" (Holybro)")]),t._v(" "),r("li",[r("a",{attrs:{href:"http://www.holybro.com/manual/Pixhawk4-quickstartguide.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk 4 빠른 시작 가이드 (Holybro)"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);_.default=a.exports},353:function(t,_,v){t.exports=v.p+"assets/img/pixhawk4_logo_view.20a45ddd.jpg"},354:function(t,_,v){t.exports=v.p+"assets/img/pixhawk4_power_management_board.c1d457c8.png"},562:function(t,_,v){t.exports=v.p+"assets/img/pixhawk4_wiring_overview.8cf16bfa.png"},563:function(t,_,v){t.exports=v.p+"assets/img/pixhawk4_mounting_and_foam.c0677b4d.png"},564:function(t,_,v){t.exports=v.p+"assets/img/pixhawk4_compass_gps.65c774b7.jpg"},565:function(t,_,v){t.exports=v.p+"assets/img/pixhawk4_receiver_sbus.a7ef14a8.png"},566:function(t,_,v){t.exports=v.p+"assets/img/pixhawk_4_receiver_ppm.339a43fb.png"},567:function(t,_,v){t.exports=v.p+"assets/img/pixhawk4_telemetry_radio.b84ee849.jpg"},568:function(t,_,v){t.exports=v.p+"assets/img/pixhawk4_sd_card.34b0281a.png"}}]);