(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{1881:function(t,_,v){"use strict";v.r(_);var a=v(18),r=Object(a.a)({},(function(){var t=this,_=t.$createElement,a=t._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"pixhawk-4-배선-개요"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pixhawk-4-배선-개요"}},[t._v("#")]),t._v(" Pixhawk 4 배선 개요")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("PX4에서는 이런 종류의 자동 항법 장치를 제조하지는 않습니다. 하드웨어 지원 또는 호환 문제는 [제조사](https://shop.holybro.com/)와 상담하십시오.")])]),t._v(" "),a("p",[t._v("이 설명서는 "),a("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk4.html"}},[t._v("Pixhawk 4")]),a("sup",[t._v("®")]),t._v(" 비행 컨트롤러의 전원을 공급방법과 주변 장치를 연결하는 방법을 설명합니다.")],1),t._v(" "),a("img",{attrs:{src:v(347),width:"420px",title:"Pixhawk4 이미지"}}),t._v(" "),a("h2",{attrs:{id:"배선-개요"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#배선-개요"}},[t._v("#")]),t._v(" 배선 개요")]),t._v(" "),a("p",[t._v("아래의 이미지는 가장 중요한 센서 및 주변 장치 (모터 및 서보 출력 제외)를 연결하는 방법을 나타냅니다. 다음 섹션에서 각 장치에 대해 자세히 설명합니다.")]),t._v(" "),a("p",[a("img",{attrs:{src:v(552),alt:"Pixhawk 4 배선 개요"}})]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("사용 가능한 포트에 대한 자세한 내용은 "),a("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk4.html#connectors"}},[t._v(" Pixhawk 4 > 연결방법 ")]),t._v("에서 찾을 수 있습니다.")],1)]),t._v(" "),a("h2",{attrs:{id:"콘트롤러-장착-및-장착-방향"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#콘트롤러-장착-및-장착-방향"}},[t._v("#")]),t._v(" 콘트롤러 장착 및 장착 방향")]),t._v(" "),a("p",[a("em",[t._v("Pixhawk 4")]),t._v("는 진동 방지 폼 패드(키트에 포함)를 프레임에 장착해야 합니다. 차량의 무게 중심에 최대한 가깝게 배치 된 프레임에 장착해야하며 화살표가 차량의 앞쪽과 위쪽을 향하도록 하여야 합니다.")]),t._v(" "),a("img",{attrs:{src:v(553),align:"center"}}),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("컨트롤러를 권장/기본 방향으로 장착하기 어려운 경우에는 (예 : 공간 제약으로 인해) 실제 장착한 방향을 소프트웨어에 설정하여야 합니다 ( "),a("RouterLink",{attrs:{to:"/ko/config/flight_controller_orientation.html"}},[t._v("기체 콘트롤러 방향 ")]),t._v(" 참고).")],1)]),t._v(" "),a("h2",{attrs:{id:"gps-나침반-부저-안전-스위치-led"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gps-나침반-부저-안전-스위치-led"}},[t._v("#")]),t._v(" GPS + 나침반 + 부저 + 안전 스위치 + LED")]),t._v(" "),a("p",[t._v("나침반, 안전 스위치, 부저 및 LED 통합 GPS를 "),a("strong",[t._v("GPS MODULE")]),t._v(" 포트에 연결합니다.")]),t._v(" "),a("p",[t._v("GPS/나침반은 차량 전명 방향 표시를 사용하여 가능한 한 다른 전자 장치에서 멀리 떨어진 프레임에 장착해야합니다 (나침반을 다른 전자 장치와 분리하면 간섭이 줄어듦).")]),t._v(" "),a("p",[a("img",{attrs:{src:v(554),alt:"Pixhawk 4에 나침반 / GPS 연결"}})]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("GPS")]),t._v(" "),a("p",[t._v("모듈의 통합 안전 스위치는 "),a("em",[t._v("기본적으로")]),t._v(" 활성화되어 있습니다 (활성화되면 PX4는 차량 시동을 걸 수 없습니다). 비활성화하려면 안전 스위치를 1초간 길게 누르십시오. 안전 스위치를 다시 눌러 안전 장치를 활성화하고 기체 시동을 끌 수 있습니다 (어떤 이유로든 조종기나 지상국 프로그램이 기체 시동을 끌 수 없을 때 유용합니다).")])]),t._v(" "),a("h2",{attrs:{id:"전원"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#전원"}},[t._v("#")]),t._v(" 전원")]),t._v(" "),a("p",[t._v("키트와 함께 제공되는 * 전원 관리 보드 * (PM 보드)의 6개의 케이블을 사용하여 * Pixhawk 4 *의 ** POWER ** 브릭중 하나에 연결합니다. PM 입력 **2 ~ 12S **는 LiPo 배터리에 연결됩니다. ESC 및 서보에 대한 전원 공급 및 신호 연결을 포함한 전원 관리 보드의 연결은 아래 표에 설명되어 있습니다. PM 보드는 "),a("strong",[t._v("FMU PWM-OUT")]),t._v("의 + 및 -핀을 통하여 서보에 전원을 공급하지 않습니다.")]),t._v(" "),a("p",[t._v("아래의 이미지는 "),a("em",[t._v("Pixhawk 4")]),t._v("와 함께 제공되는 전원 관리 보드입니다.")]),t._v(" "),a("p",[a("img",{attrs:{src:v(348),alt:"Pixhawk 4 - 전원 관리 보드"}})]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("고정익 또는 자동차로 사용하는 경우 "),a("strong",[t._v("FMU PWM-OUT")]),t._v("의 8 핀 전원 (+) 레일에 러더, 엘레 본 등의 서보를 구동하려면 별도로 전원을 공급하여야 합니다. 전원 레일을 BEC가 장착 된 ESC 또는 독립형 5V BEC 또는 2S LiPo 배터리에 연결하여야 합니다. 서보의 전압에주의하십시오.")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("핀 & 커넥터")]),t._v(" "),a("th",[t._v("기능")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("I/O PWM-IN")]),t._v(" "),a("td",[a("em",[t._v("Pixhawk 4")]),t._v("에 연결하려면 아래를 참조하십시오.")])]),t._v(" "),a("tr",[a("td",[t._v("M1")]),t._v(" "),a("td",[t._v("I/O PWM OUT 1 : 신호선을 모터 1의 ESC에 연결합니다.")])]),t._v(" "),a("tr",[a("td",[t._v("M2")]),t._v(" "),a("td",[t._v("I/O PWM OUT 2 : 신호선을 모터 2의 ESC에 연결합니다.")])]),t._v(" "),a("tr",[a("td",[t._v("M3")]),t._v(" "),a("td",[t._v("I/O PWM OUT 3 : 신호선을 모터 3의 ESC에 연결합니다.")])]),t._v(" "),a("tr",[a("td",[t._v("M4")]),t._v(" "),a("td",[t._v("I/O PWM OUT 4 : 신호선을 모터 4의 ESC에 연결합니다.")])]),t._v(" "),a("tr",[a("td",[t._v("M5")]),t._v(" "),a("td",[t._v("I/O PWM OUT 5 : 신호선을 모터 5의 ESC에 연결합니다.")])]),t._v(" "),a("tr",[a("td",[t._v("M6")]),t._v(" "),a("td",[t._v("I/O PWM OUT 6 : 신호선을 모터 6의 ESC에 연결합니다.")])]),t._v(" "),a("tr",[a("td",[t._v("M7")]),t._v(" "),a("td",[t._v("I/O PWM OUT 7 : 신호선을 모터 7의 ESC에 연결합니다.")])]),t._v(" "),a("tr",[a("td",[t._v("M8")]),t._v(" "),a("td",[t._v("I/O PWM OUT 8 : 신호선을 모터 8의 ESC에 연결합니다.")])]),t._v(" "),a("tr",[a("td",[t._v("FMU PWM-IN")]),t._v(" "),a("td",[a("em",[t._v("Pixhawk 4")]),t._v("에 연결하려면 아래를 참조하십시오.")])]),t._v(" "),a("tr",[a("td",[t._v("FMU PWM-OUT")]),t._v(" "),a("td",[t._v("FMU PWM-IN이 "),a("em",[t._v("Pixhawk 4")]),t._v("에 연결된 경우 신호선을 ESC 또는 신호에 연결하고 +, - 선을 서보에 연결합니다.")])]),t._v(" "),a("tr",[a("td",[t._v("CAP&ADC-OUT")]),t._v(" "),a("td",[t._v("CAP에 연결 & amp; "),a("em",[t._v("Pixhawk 4")]),t._v("의 ADC IN 포트")])]),t._v(" "),a("tr",[a("td",[t._v("CAP&ADC-OUT")]),t._v(" "),a("td",[t._v("CAP & amp; ADC 입력 : 보드 뒷면에 핀아웃이 인쇄되어 있습니다.")])]),t._v(" "),a("tr",[a("td",[t._v("B+")]),t._v(" "),a("td",[t._v("ESC에 전원을 공급하기 위해 ESC B +에 연결")])]),t._v(" "),a("tr",[a("td",[t._v("GND")]),t._v(" "),a("td",[t._v("ESC 접지에 연결")])]),t._v(" "),a("tr",[a("td",[t._v("PWR1")]),t._v(" "),a("td",[t._v("5v 출력 3A, "),a("em",[t._v("Pixhawk 4")]),t._v(" POWER 1에 연결")])]),t._v(" "),a("tr",[a("td",[t._v("PWR2")]),t._v(" "),a("td",[t._v("5v 출력 3A, "),a("em",[t._v("Pixhawk 4")]),t._v(" POWER 2에 연결")])]),t._v(" "),a("tr",[a("td",[t._v("2~12S")]),t._v(" "),a("td",[t._v("전원 입력, 12S LiPo 배터리에 연결")])])])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("기체 유형에 따라 "),a("RouterLink",{attrs:{to:"/ko/airframes/airframe_reference.html"}},[t._v("기체 정의서")]),t._v("를 참조하여 "),a("em",[t._v("Pixhawk 4")]),t._v("의 **I/O PWM OUT ** 및 ** FMU PWM OUT ** 포트를 PM 보드에 연결하십시오. PX4 펌웨어의 **MAIN ** 출력은 "),a("em",[t._v("Pixhawk 4")]),t._v("의 "),a("strong",[t._v("I/O PWM OUT")]),t._v(" 포트에 매핑되는 반면 "),a("strong",[t._v("AUX 출력")]),t._v("은 "),a("em",[t._v("Pixhawk 4")]),t._v("의 ** FMU PWM OUT **에 매핑됩니다. 예를 들어 "),a("strong",[t._v("MAIN1")]),t._v("은 "),a("strong",[t._v("I/O PWM OUT")]),t._v("의 IO_CH1 핀에 매핑되고 "),a("strong",[t._v("AUX1")]),t._v("은 "),a("strong",[t._v("FMU PWM OUT")]),t._v("의 FMU_CH1 핀에 매핑됩니다. PM 보드의 "),a("strong",[t._v("FMU PWM-IN")]),t._v("은 내부적으로 서보를 구동하는 데 사용되는 "),a("strong",[t._v("FMU PWM-OUT")]),t._v("에 연결됩니다 (예 : 에일러론, 엘리베이터, 방향타, 엘레 본, 기어, 플랩, 짐벌, 스티어링). PM 보드의 "),a("strong",[t._v("I/O PWM-IN")]),t._v("은 모터 구동에 사용되는 "),a("strong",[t._v("M1-8")]),t._v("에 내부적으로 연결됩니다 (예 : 평면, VTOL 및 로버의 스로틀).")],1)]),t._v(" "),a("p",[t._v("아래의 표는 기체 기준에 따라 "),a("em",[t._v("Pixhawk 4")]),t._v("의 PWM OUT 포트를 PM 보드의 PWM-IN 포트에 연결하는 방법을 요약한 것입니다.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("기체 참고")]),t._v(" "),a("th",[a("em",[t._v("Pixhawk 4")]),t._v(" -> PM 보드간 연결")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[t._v("MAIN")]),t._v(": 모터")]),t._v(" "),a("td",[t._v("I/O PWM OUT --\x3e I/O PWM IN")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("MAIN")]),t._v(": 서보")]),t._v(" "),a("td",[t._v("I/O PWM OUT --\x3e FMU PWM IN")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("AUX")]),t._v(": 모터")]),t._v(" "),a("td",[t._v("FMU PWM OUT --\x3e I/O PWM IN")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("AUX")]),t._v(": 서보")]),t._v(" "),a("td",[t._v("FMU PWM OUT --\x3e FMU PWM IN")])])])]),t._v(" "),a("p",[a("em",[t._v("Pixhawk 4")]),t._v(" 전원 포트의 핀아웃은 다음과 같습니다. 전류 신호는 기본적으로 0-120A에 대하여 0-3.3V의 아날로그 전압을 전달하여야 합니다. 전압 신호는 기본적으로 0-60V에 대하여 0-3.3V의 아날로그 전압을 전달하여야 합니다. VCC 라인은 최소 3A 연속을 제공해야하며 기본적으로 5.1V로 설정되어야 합니다. 5V의 더 낮은 전압은 여전히 허용되지만 권장되지 않습니다.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("핀")]),t._v(" "),a("th",[t._v("신호")]),t._v(" "),a("th",[t._v("전압")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("1(red)")]),t._v(" "),a("td",[t._v("VCC")]),t._v(" "),a("td",[t._v("+5V")])]),t._v(" "),a("tr",[a("td",[t._v("2(black)")]),t._v(" "),a("td",[t._v("VCC")]),t._v(" "),a("td",[t._v("+5V")])]),t._v(" "),a("tr",[a("td",[t._v("3(black)")]),t._v(" "),a("td",[t._v("전류")]),t._v(" "),a("td",[t._v("+3.3V")])]),t._v(" "),a("tr",[a("td",[t._v("4(black)")]),t._v(" "),a("td",[t._v("전압")]),t._v(" "),a("td",[t._v("+3.3V")])]),t._v(" "),a("tr",[a("td",[t._v("5(black)")]),t._v(" "),a("td",[t._v("접지")]),t._v(" "),a("td",[t._v("GND")])]),t._v(" "),a("tr",[a("td",[t._v("6(black)")]),t._v(" "),a("td",[t._v("접지")]),t._v(" "),a("td",[t._v("GND")])])])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("키트와 함께 제공되는 전원 모듈을 사용하면 "),a("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/SetupView/Power.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("전원 설정"),a("OutboundLink")],1),t._v("에서 "),a("em",[t._v("셀 수")]),t._v("를 구성해야하지만 *전압 분배기를 보정 할 필요가 없습니다. *. 다른 전원 모듈 (예 : Pixracer의 모듈)을 사용하는 경우 "),a("em",[t._v("전압 분배기")]),t._v("를 업데이트하여야 합니다.")])]),t._v(" "),a("h2",{attrs:{id:"무선-조종"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#무선-조종"}},[t._v("#")]),t._v(" 무선 조종")]),t._v(" "),a("p",[t._v("리모트 컨트롤(RC) 라디오 시스템은 기체를 "),a("em",[t._v("수동")]),t._v("으로 제어할 때 필요합니다 (PX4에는 자율 비행 모드를 위한 라디오 시스템이 필요하지 않습니다).")]),t._v(" "),a("p",[t._v("기체와 조종자가 서로 통신하기 위해 "),a("RouterLink",{attrs:{to:"/ko/getting_started/rc_transmitter_receiver.html"}},[t._v("호환되는 송신기/수신기를 선택하고")]),t._v(", 송신기와 수신기를 "),a("em",[t._v("바인드")]),t._v("해야 합니다 (송신기와 수신기에 포함된 지시사항을 읽으십시오).")],1),t._v(" "),a("p",[t._v("아래 지침은 다양한 유형의 수신기의 * Pixhawk 4* 연결법을 설명합니다.")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Spektrum/DSM 수신기는 "),a("strong",[t._v("DSM/SBUS RC")]),t._v(" 입력에 연결됩니다.")]),t._v(" "),a("p",[a("img",{attrs:{src:v(555),alt:"Pixhawk 4 - Spektrum 수신기용 라디오 포트"}})])]),t._v(" "),a("li",[a("p",[t._v("PPM 수신기는 "),a("strong",[t._v("PPM RC")]),t._v(" 입력 포트에 연결됩니다.")]),t._v(" "),a("p",[a("img",{attrs:{src:v(556),alt:"Pixhawk 4 - PPM 수신기용 라디오 포트"}})])]),t._v(" "),a("li",[a("p",[a("em",[t._v("각각의 채널이 독립적으로 배선된")]),t._v(" PPM/PWM 수신기는 반드시 "),a("strong",[t._v("PPM RC")]),t._v("포트에 "),a("em",[t._v("PPM 인코더를 통해")]),t._v(" "),a("a",{attrs:{href:"http://www.getfpv.com/radios/radio-accessories/holybro-ppm-encoder-module.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("아래와 같이"),a("OutboundLink")],1),t._v("연결해야 합니다 (PPM-Sum 수신기는 모든 채널에 하나의 전선만 사용합니다).")])])]),t._v(" "),a("p",[t._v("무선 시스템 선택, 수신기 호환성 및 송신기 / 수신기 쌍 바인딩에 대한 자세한 내용은 다음을 참조하십시오. "),a("RouterLink",{attrs:{to:"/ko/getting_started/rc_transmitter_receiver.html"}},[t._v(" 원격 제어 송신기 & amp; 수신자 ")]),t._v(".")],1),t._v(" "),a("h2",{attrs:{id:"무선-텔레메트리-선택-사항"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#무선-텔레메트리-선택-사항"}},[t._v("#")]),t._v(" 무선 텔레메트리(선택 사항)")]),t._v(" "),a("p",[t._v("무선 텔레메트리는 지상국 프로그램에서 비행중인 차량의 통신/제어에 사용할 수 있습니다 (예 : UAV를 특정 위치로 지시하거나 새 임무를 업로드 할 수 있음).")]),t._v(" "),a("p",[t._v("기체의 텔레메트리를 "),a("strong",[t._v("TELEM1")]),t._v(" 포트에 연결해야 합니다 (이 포트에 연결된 경우 추가 구성이 필요하지 않음). 다른 텔레메트리는 일반적으로 지상국 컴퓨터나 모바일 장치에 (USB를 통해) 연결됩니다.")]),t._v(" "),a("p",[a("img",{attrs:{src:v(557),alt:"Pixhawk 4 / 무선 텔레메트리"}})]),t._v(" "),a("p",[a("span",{attrs:{id:"sd_card"}})]),t._v(" "),a("h2",{attrs:{id:"sd-카드-선택-사항"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sd-카드-선택-사항"}},[t._v("#")]),t._v(" SD 카드 (선택 사항)")]),t._v(" "),a("p",[t._v("SD 카드는 "),a("RouterLink",{attrs:{to:"/ko/getting_started/flight_reporting.html"}},[t._v(" 비행 세부 정보를 기록 및 분석 ")]),t._v("하고, 임무를 수행하고, UAVCAN 버스 하드웨어를 사용하는 데 필요하므로 가능하면 사용하는 것이 좋습니다. 아래 그림과 같이 카드 (Pixhawk 4 키트에 포함됨)를 "),a("em",[t._v("Pixhawk 4")]),t._v("에 삽입합니다.")],1),t._v(" "),a("p",[a("img",{attrs:{src:v(558),alt:"Pixhawk 4/SD 카드"}})]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("자세한 내용은 "),a("RouterLink",{attrs:{to:"/ko/getting_started/px4_basic_concepts.html#sd_cards"}},[t._v(" 기본 개념> SD 카드 (이동식 메모리) ")]),t._v("를 참조하십시오.")],1)]),t._v(" "),a("h2",{attrs:{id:"모터"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#모터"}},[t._v("#")]),t._v(" 모터")]),t._v(" "),a("p",[t._v("모터/서보 신호는 ** I/O PWM OUT ** (** MAIN OUT "),a("strong",[t._v(") 및 ** FMU PWM OUT ** (")]),t._v(" AUX **)에 연결됩니다. ) 포트는 "),a("RouterLink",{attrs:{to:"/ko/airframes/airframe_reference.html"}},[t._v(" Airframe Reference ")]),t._v("에서 차량에 지정된 순서로 지정됩니다.")],1),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v('이 참고사항은 모든 지원되는 기체/기기 프레임의 출력 포트의 모터/서보 연결 리스트입니다 (만약 프레임이 참고사항에 기재되어 있지 않다면, 올바른 유형의 "일반" 프레임을 사용하십시오).')])]),t._v(" "),a("p",[t._v(":::caution\n매핑이 프레임간에 일관되지 않습니다 (예 : 모든 평면 프레임에 대해 동일한 출력에있는 스로틀에 의존 할 수 없음). 가지고 있는 기체의 프레임에 대해 올바르게 모터를 연결했는지 다시 한 번 확인하십시오.\n:::")]),t._v(" "),a("h2",{attrs:{id:"기타-주변-장치"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#기타-주변-장치"}},[t._v("#")]),t._v(" 기타 주변 장치")]),t._v(" "),a("p",[t._v("선택적인 주변 장치의 배선 및 구성은 개별 "),a("RouterLink",{attrs:{to:"/ko/peripherals/"}},[t._v("주변 장치")]),t._v("에 대한 항목에서 다룹니다.")],1),t._v(" "),a("h2",{attrs:{id:"핀아웃"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#핀아웃"}},[t._v("#")]),t._v(" 핀아웃")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://www.holybro.com/manual/Pixhawk4-Pinouts.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk 4 핀아웃"),a("OutboundLink")],1),t._v(" (Holybro)")]),t._v(" "),a("h2",{attrs:{id:"설정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#설정"}},[t._v("#")]),t._v(" 설정")]),t._v(" "),a("p",[t._v("더 자세한 일반 구성 정보는 "),a("RouterLink",{attrs:{to:"/ko/config/"}},[t._v("Autopilot 구성")]),t._v("에서 다룹니다.")],1),t._v(" "),a("p",[t._v("QuadPlane에 대한 자세한 설정은 "),a("RouterLink",{attrs:{to:"/ko/config_vtol/vtol_quad_configuration.html"}},[t._v("QuadPlane VTOL 설정")]),t._v("에서 다룹니다.")],1),t._v(" "),a("h2",{attrs:{id:"추가-정보"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#추가-정보"}},[t._v("#")]),t._v(" 추가 정보")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk4.html"}},[t._v("Pixhawk 4")]),t._v(" (개요 페이지)")],1),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/PX4/px4_user_guide/raw/master/assets/flight_controller/pixhawk4/pixhawk4_technical_data_sheet.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk 4 기술 데이터 시트"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://www.holybro.com/manual/Pixhawk4-Pinouts.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk 4 Pinouts"),a("OutboundLink")],1),t._v(" (Holybro)")]),t._v(" "),a("li",[a("a",{attrs:{href:"http://www.holybro.com/manual/Pixhawk4-quickstartguide.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk 4 빠른 시작 가이드 (Holybro)"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);_.default=r.exports},347:function(t,_,v){t.exports=v.p+"assets/img/pixhawk4_logo_view.20a45ddd.jpg"},348:function(t,_,v){t.exports=v.p+"assets/img/pixhawk4_power_management_board.c1d457c8.png"},552:function(t,_,v){t.exports=v.p+"assets/img/pixhawk4_wiring_overview.8cf16bfa.png"},553:function(t,_,v){t.exports=v.p+"assets/img/pixhawk4_mounting_and_foam.c0677b4d.png"},554:function(t,_,v){t.exports=v.p+"assets/img/pixhawk4_compass_gps.65c774b7.jpg"},555:function(t,_,v){t.exports=v.p+"assets/img/pixhawk4_receiver_sbus.a7ef14a8.png"},556:function(t,_,v){t.exports=v.p+"assets/img/pixhawk_4_receiver_ppm.339a43fb.png"},557:function(t,_,v){t.exports=v.p+"assets/img/pixhawk4_telemetry_radio.b84ee849.jpg"},558:function(t,_,v){t.exports=v.p+"assets/img/pixhawk4_sd_card.34b0281a.png"}}]);