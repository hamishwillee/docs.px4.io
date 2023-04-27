(window.webpackJsonp=window.webpackJsonp||[]).push([[197],{2465:function(t,r,_){"use strict";_.r(r);var a=_(19),e=Object(a.a)({},(function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"홀리브로-픽스호크-5x-배선-개요"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#홀리브로-픽스호크-5x-배선-개요"}},[t._v("#")]),t._v(" 홀리브로 픽스호크 5X 배선 개요")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("PX4에서는 이 자동항법장치를 제조하지 않습니다. Contact the [manufacturer](https://holybro.com/) for hardware support or compliance issues.")])]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk5x.html"}},[t._v("Pixhawk"),a("sup",[t._v("®")]),t._v(" 5X")]),t._v(" 비행 콘트롤러의 전원 공급 방법과 주요 주변 장치 연결 방법에 대하여 설명합니다.")],1),t._v(" "),a("img",{attrs:{src:_(583),width:"520px",title:"Pixhawk 5X 표준 세트"}}),t._v(" "),a("p",[t._v("Pixhawk 5 표준 세트")]),t._v(" "),a("h2",{attrs:{id:"배선-개요"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#배선-개요"}},[t._v("#")]),t._v(" 배선 개요")]),t._v(" "),a("p",[t._v("아래 그림은 주요 센서와 주변기기 연결 방법을 설명합니다.")]),t._v(" "),a("p",[a("img",{attrs:{src:_(368),alt:"Pixhawk 5X 배선 개요"}})]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("사용 가능한 포트에 대한 자세한 설명은 "),a("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk5x.html#connections"}},[t._v("Pixhawk  5X > 연결 방법")]),t._v("을 참고하십시오.")],1)]),t._v(" "),a("h2",{attrs:{id:"콘트롤러-장착-및-장착-방향"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#콘트롤러-장착-및-장착-방향"}},[t._v("#")]),t._v(" 콘트롤러 장착 및 장착 방향")]),t._v(" "),a("p",[a("em",[t._v("Pixhawk 5X")]),t._v("는 키트에 포함된 양면 테이프를 사용하여 프레임에 장착할 수 있습니다. 차량의 무게 중심에 최대한 가깝운 프레임에 장착하여야 하며, 화살표가 차량의 앞쪽과 위쪽을 향하도록 하여야 합니다.")]),t._v(" "),a("img",{attrs:{src:_(584),width:"400px",title:"Pixhawk 5X 표준 세트"}}),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("콘트롤러를 권장 기본 방향으로 장착 할 수 없는 경우(예 : 공간 제약으로 인해) 실 장착 방향을 자동항법장치 프로그램에서 설정하여야합니다. "),a("RouterLink",{attrs:{to:"/ko/config/flight_controller_orientation.html"}},[t._v("비행 콘트롤러 방향")])],1)]),t._v(" "),a("h2",{attrs:{id:"gps-나침반-부저-안전-스위치-led"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gps-나침반-부저-안전-스위치-led"}},[t._v("#")]),t._v(" GPS + 나침반 + 부저 + 안전 스위치 + LED")]),t._v(" "),a("p",[t._v("_Pixhawk5X 표준 세트_는 "),a("strong",[t._v("GPS1")]),t._v(" 포트에 연결하는 M8N 또는 M9N GPS(10핀 커넥터)와 함께 구입할 수 있습니다. 이 GNSS 모듈에는 나침반, 안전 스위치, 부저 및 LED가 통합되어 있습니다.")]),t._v(" "),a("p",[t._v("A secondary "),a("a",{attrs:{href:"https://holybro.com/collections/gps",target:"_blank",rel:"noopener noreferrer"}},[t._v("M8N or M9N GPS"),a("OutboundLink")],1),t._v(" (6-pin connector) can be purchased separately and connected to the "),a("strong",[t._v("GPS2")]),t._v(" port.")]),t._v(" "),a("p",[t._v("The GPS/Compass should be "),a("RouterLink",{attrs:{to:"/ko/assembly/mount_gps_compass.html"}},[t._v("mounted on the frame")]),t._v(" as far away from other electronics as possible, with the direction marker towards the front of the vehicle (separating the compass from other electronics will reduce interference).")],1),t._v(" "),a("img",{attrs:{src:_(344),width:"200px",title:"Pixhawk 5X 표준 세트"}}),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("GPS")]),t._v(" "),a("p",[t._v("모듈의 통합 안전 스위치는 "),a("em",[t._v("기본적으로")]),t._v(" 활성화됩니다. 활성화된 상태에서 PX4의 차량 시동이 가능합니다. 비활성화하려면 안전 스위치를 1초간 길게 누르십시오. 안전 스위치를 다시 눌러 안전 장치를 활성화하고 기체 시동을 끌 수 있습니다. 조종기나 지상국 프로그램에서 기체 시동을 끌 수 없는 상황에서 유용합니다.")])]),t._v(" "),a("h2",{attrs:{id:"전원"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#전원"}},[t._v("#")]),t._v(" 전원")]),t._v(" "),a("p",[t._v("표준 세트와 함께 제공되는 "),a("em",[t._v("PM02D 전원 모듈")]),t._v("(PM 보드)의 출력을 6선 케이블을 사용하여 "),a("em",[t._v("Pixhawk 5X")]),t._v(" "),a("strong",[t._v("POWER")]),t._v(" 포트 중 하나에 연결합니다. Pixhawk 5X의 PM02D 및 전원 포트는 6회로\n2.00mm 피치 CLIK-Mate 전선 기판 간 PCB 리셉터클<0>과 "),a("a",{attrs:{href:"https://www.molex.com/molex/products/part-detail/crimp_housings/5024390600",target:"_blank",rel:"noopener noreferrer"}},[t._v("Housing"),a("OutboundLink")],1),t._v("을 사용합니다.")]),a("p"),t._v(" "),a("p",[t._v("PM02D 전원 모듈은 "),a("strong",[t._v("2~6S")]),t._v(" 배터리를 지원하며, 보드의 입력을 LiPo 배터리에 연결합니다. 전원 보드는 "),a("strong",[t._v("FMU PWM OUT")]),t._v("와 "),a("strong",[t._v("I/O PWM OUT")]),t._v("의 + 및 - 핀에 전원을 공급하지 않습니다.")]),t._v(" "),a("p",[t._v("비행기나 로버를 사용하는 경우 방향타, 엘레본 등의 서보를 구동하려면 "),a("strong",[t._v("FMU PWM-OUT")]),t._v("에 별도로 전원을 공급하여야 합니다. 이는 "),a("strong",[t._v("FMU PWM-OUT")]),t._v("의 8핀 전원(+) 레일을 전압 조정기(예: BEC 장착 ESC 또는 독립형 5V BEC 또는 2S LiPo 배터리)에 연결하여 수행할 수 있습니다.")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("파워 레일 사용 중인 서보에 적절한 전압을 공급하여야 합니다.")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("핀 & 커넥터")]),t._v(" "),a("th",[t._v("기능")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("I/O PWM Out")]),t._v(" "),a("td",[t._v("여기에 모터 신호와 GND 배선을 연결합니다.")])]),t._v(" "),a("tr",[a("td",[t._v("FMU PWM Out")]),t._v(" "),a("td",[t._v("여기에 서보 신호, 양극 및 GND 전선을 연결합니다.")])])])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("PX")]),t._v(" "),a("p",[t._v("펌웨어의 "),a("strong",[t._v("MAIN")]),t._v(" 출력은 "),a("em",[t._v("Pixhawk 5X")]),t._v("의 "),a("strong",[t._v("I/O PWM OUT")]),t._v(" 포트에 매핑되는 반면, "),a("strong",[t._v("AUX 출력")]),t._v("은 "),a("em",[t._v("Pixhawk 5X")]),t._v("의 "),a("strong",[t._v("FMU PWM OUT")]),t._v("에 매핑됩니다. 예를 들어 "),a("strong",[t._v("MAIN1")]),t._v("은 "),a("strong",[t._v("I/O PWM OUT")]),t._v("의 IO_CH1 핀에 매핑되고, "),a("strong",[t._v("AUX1")]),t._v("은 "),a("strong",[t._v("FMU PWM OUT")]),t._v("의 FMU_CH1 핀에 매핑됩니다.")])]),t._v(" "),a("p",[a("em",[t._v("Pixhawk 5X")]),t._v(" 전원 포트의 핀배열은 다음과 같습니다. 전원 포트는 전압 및 전류 데이터를 위해 PM02D 전원 모듈에서 I2C 디지털 신호를 수신합니다. VCC 라인은 최소 3A 연속을 제공해야하며, 기본적으로 5.1V로 설정되어야 합니다. 5V 보다 낮은 전압은 권장되지 않습니다.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("핀")]),t._v(" "),a("th",[t._v("신호")]),t._v(" "),a("th",[t._v("전압")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("1 (적)")]),t._v(" "),a("td",[t._v("VCC")]),t._v(" "),a("td",[t._v("+5V")])]),t._v(" "),a("tr",[a("td",[t._v("2 (흑)")]),t._v(" "),a("td",[t._v("VCC")]),t._v(" "),a("td",[t._v("+5V")])]),t._v(" "),a("tr",[a("td",[t._v("3 (흑)")]),t._v(" "),a("td",[t._v("SCL")]),t._v(" "),a("td",[t._v("+3.3V")])]),t._v(" "),a("tr",[a("td",[t._v("4 (흑)")]),t._v(" "),a("td",[t._v("SDA")]),t._v(" "),a("td",[t._v("+3.3V")])]),t._v(" "),a("tr",[a("td",[t._v("5 (흑)")]),t._v(" "),a("td",[t._v("GND")]),t._v(" "),a("td",[t._v("GND")])]),t._v(" "),a("tr",[a("td",[t._v("6 (흑)")]),t._v(" "),a("td",[t._v("GND")]),t._v(" "),a("td",[t._v("GND")])])])]),t._v(" "),a("h2",{attrs:{id:"무선-조종"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#무선-조종"}},[t._v("#")]),t._v(" 무선 조종")]),t._v(" "),a("p",[t._v("라디오 리모트 컨트롤(RC)은 기체를 "),a("em",[t._v("수동")]),t._v("으로 조작합니다. PX4 자율 비행 모드에는 RC는 필수 요구 사항은 아닙니다.")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/ko/getting_started/rc_transmitter_receiver.html"}},[t._v("호환되는 송신기/수신기를 선택")]),t._v("한 다음 통신을 위해 "),a("em",[t._v("바인딩")]),t._v("을 하여야 합니다(특정 송신기/수신기와 함께 제공되는 매뉴얼 참조).")],1),t._v(" "),a("ul",[a("li",[t._v("Spektrum/DSM 수신기는 "),a("strong",[t._v("DSM/SBUS RC")]),t._v(" 입력에 연결합니다.")]),t._v(" "),a("li",[t._v("PPM/SBUS 수신기는 "),a("strong",[t._v("RC IN")]),t._v(" 입력 포트에 연결합니다.")])]),t._v(" "),a("p",[a("em",[t._v("각각의 채널이 독립적으로 배선된")]),t._v(" PPM/PWM 수신기는 반드시"),a("strong",[t._v("RC IN")]),t._v("포트에 "),a("em",[t._v("PPM 인코더를 통하여")]),t._v(" "),a("a",{attrs:{href:"http://www.getfpv.com/radios/radio-accessories/holybro-ppm-encoder-module.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("아래와 같이"),a("OutboundLink")],1),t._v("연결하여야 합니다. PPM-Sum 수신기는 모든 채널에 하나의 전선만 사용합니다.")]),t._v(" "),a("p",[t._v("무선 시스템 선택, 수신기 호환성 및 송신기/수신기 바인딩에 대한 자세한 내용은 "),a("RouterLink",{attrs:{to:"/ko/getting_started/rc_transmitter_receiver.html"}},[t._v("원격 제어 송신기 & 수신기")]),t._v("를 참고하십시오.")],1),t._v(" "),a("h2",{attrs:{id:"무선-텔레메트리-선택-사항"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#무선-텔레메트리-선택-사항"}},[t._v("#")]),t._v(" 무선 텔레메트리(선택 사항)")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/ko/telemetry/"}},[t._v("무선 텔레메트리")]),t._v("는 지상국 프로그램에서 비행 차량의 통신/제어에 사용합니다(예 : UAV를 특정 위치로 지시하거나 새 임무를 업로드 할 수 있음).")],1),t._v(" "),a("p",[t._v("기체의 텔레메트리를 "),a("strong",[t._v("TELEM1")]),t._v(" 포트에 연결합니다. 이 포트에 연결된 경우에는 추가 설정이 필요하지 않습니다. 다른 텔레메트리는 일반적으로 지상국 컴퓨터나 모바일 장치에 USB를 통하여 연결됩니다.")]),t._v(" "),a("p",[t._v("Radios are also available for purchase on "),a("a",{attrs:{href:"https://holybro.com/collections/telemetry-radios",target:"_blank",rel:"noopener noreferrer"}},[t._v("Holybro's website"),a("OutboundLink")],1),t._v(" .")]),t._v(" "),a("h2",{attrs:{id:"sd-카드-선택-사항"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sd-카드-선택-사항"}},[t._v("#")]),t._v(" SD 카드 (선택 사항)")]),t._v(" "),a("p",[t._v("SD 카드는 "),a("RouterLink",{attrs:{to:"/ko/getting_started/flight_reporting.html"}},[t._v("비행 세부 정보를 기록 및 분석")]),t._v("하고, 임무를 수행하고, UAVCAN 버스 하드웨어를 사용하는 데 필요하므로 사용하는 것이 좋습니다. 아래 그림과 같이 SD 카드(Pixhawk  5X 키트에 포함됨)를 "),a("em",[t._v("Pixhawk 5X")]),t._v("에 삽입합니다.")],1),t._v(" "),a("img",{attrs:{src:_(369),width:"420px",title:"Pixhawk5x standard set"}}),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("For more information see "),a("RouterLink",{attrs:{to:"/ko/getting_started/px4_basic_concepts.html#sd-cards-removable-memory"}},[t._v("Basic Concepts > SD Cards (Removable Memory)")]),t._v(". 아래 그림과 같이 SD 카드(Pixhawk  5X 키트에 포함됨)를 "),a("em",[t._v("Pixhawk 5X")]),t._v("에 삽입합니다.")],1),t._v(" "),a("h2",{attrs:{id:"모터"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#모터"}},[t._v("#")]),t._v(" 모터")]),t._v(" "),a("p",[t._v("모터/서보 신호는 "),a("strong",[t._v("I/O PWM OUT")]),t._v(" ("),a("strong",[t._v("MAIN OUT")]),t._v(") 및 "),a("strong",[t._v("FMU PWM OUT")]),t._v(" (** AUX **)에 연결됩니다. ) 포트는 "),a("RouterLink",{attrs:{to:"/ko/airframes/airframe_reference.html"}},[t._v("기체 정의서")]),t._v("에서 순서가 지정되어 있습니다.")],1),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v('이 참고사항은 모든 지원되는 기체 프레임의 출력 포트의 모터/서보 연결 리스트입니다 (만약 프레임이 참고사항에 기재되어 있지 않다면, 올바른 유형의 "일반" 프레임을 사용하십시오).')])])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("The mapping is not consistent across frames (e.g. you can't rely on the throttle being on the same output for all plane frames). 해당 기체의 프레임의  정확한 모터 연결 여부를 확인하십시오.")])]),t._v(" "),a("h2",{attrs:{id:"기타-주변-장치"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#기타-주변-장치"}},[t._v("#")]),t._v(" 기타 주변 장치")]),t._v(" "),a("p",[t._v("많이 사용하지 않는 부품들의 배선과 조립 방법은 개별 "),a("RouterLink",{attrs:{to:"/ko/peripherals/"}},[t._v("주변 장치")]),t._v("를 참고하십시오.")],1),t._v(" "),a("h2",{attrs:{id:"핀배열"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#핀배열"}},[t._v("#")]),t._v(" 핀배열")]),t._v(" "),a("p",[a("img",{attrs:{src:_(370),alt:"Pixhawk 5X Pinout1"}})]),t._v(" "),a("p",[t._v("You can also download "),a("em",[t._v("Pixhawk 5X")]),t._v(" pinouts from "),a("a",{attrs:{href:"https://github.com/PX4/PX4-user_guide/blob/main/assets/flight_controller/pixhawk5x/pixhawk5x_pinout.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(" or "),a("a",{attrs:{href:"https://cdn.shopify.com/s/files/1/0604/5905/7341/files/Holybro_Pixhawk5X_Pinout.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"설정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#설정"}},[t._v("#")]),t._v(" 설정")]),t._v(" "),a("p",[t._v("더 자세한 일반 설정 방법은 "),a("RouterLink",{attrs:{to:"/ko/config/"}},[t._v("자동항법장치 설정")]),t._v("을 참고하십시오.")],1),t._v(" "),a("p",[t._v("QuadPlane에 대한 자세한 설정 방법은 "),a("RouterLink",{attrs:{to:"/ko/config_vtol/vtol_quad_configuration.html"}},[t._v("QuadPlane VTOL 설정")]),t._v("을 참고하십시오.")],1),t._v(" "),a("h2",{attrs:{id:"추가-정보"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#추가-정보"}},[t._v("#")]),t._v(" 추가 정보")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk5x.html"}},[t._v("Pixhawk 5X")]),t._v(" (PX4 개요 페이지)")],1),t._v(" "),a("li",[a("a",{attrs:{href:"https://cdn.shopify.com/s/files/1/0604/5905/7341/files/Holybro_Pixhawk5X_Spec_Overview.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk 5X Overview & Specification"),a("OutboundLink")],1),t._v(" (Holybro)")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://cdn.shopify.com/s/files/1/0604/5905/7341/files/Holybro_Pixhawk5X_Pinout.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk 5X Pinouts"),a("OutboundLink")],1),t._v(" (Holybro)")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://docs.google.com/spreadsheets/d/1Su7u8PHp-Y1AlLGVuH_I8ewkEEXt_bHHYBHglRuVH7E/edit#gid=562580340",target:"_blank",rel:"noopener noreferrer"}},[t._v("FMUv5 참조 설계 핀배열"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/pixhawk/Pixhawk-Standards/blob/master/DS-011%20Pixhawk%20Autopilot%20v5X%20Standard.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk Autopilot FMUv5X 표준"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/pixhawk/Pixhawk-Standards/blob/master/DS-010%20Pixhawk%20Autopilot%20Bus%20Standard.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk Autopilot FMUv5X 버스 표준"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/pixhawk/Pixhawk-Standards/blob/master/DS-009%20Pixhawk%20Connector%20Standard.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk 커넥터 표준"),a("OutboundLink")],1),t._v(".")])])])}),[],!1,null,null,null);r.default=e.exports},344:function(t,r,_){t.exports=_.p+"assets/img/pixhawk5x_gps_front.66bad167.jpg"},368:function(t,r,_){t.exports=_.p+"assets/img/pixhawk5x_wiring_diagram.f6a17506.jpg"},369:function(t,r,_){t.exports=_.p+"assets/img/pixhawk5x_sd_slot.a132a8b3.jpg"},370:function(t,r,_){t.exports=_.p+"assets/img/pixhawk5x_pinout.c9bfba19.png"},583:function(t,r,_){t.exports=_.p+"assets/img/pixhawk5x_standard_set.42d792b0.jpg"},584:function(t,r,_){t.exports=_.p+"assets/img/pixhawk5x_vehicle_front1.7a93fe93.jpg"}}]);