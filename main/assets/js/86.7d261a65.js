(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{2471:function(t,s,r){"use strict";r.r(s);var _=r(19),e=Object(_.a)({},(function(){var t=this,s=t.$createElement,_=t._self._c||s;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"픽스32-v5-배선-방법"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#픽스32-v5-배선-방법"}},[t._v("#")]),t._v(" 픽스32 v5 배선 방법")]),t._v(" "),_("div",{staticClass:"custom-block warning"},[_("p",{staticClass:"custom-block-title"},[t._v("PX4에서는 이 자동항법장치를 제조하지 않습니다. Contact the [manufacturer](https://holybro.com/) for hardware support or compliance issues.")])]),t._v(" "),_("p",[t._v("이 설명서는 "),_("RouterLink",{attrs:{to:"/ko/flight_controller/holybro_pix32_v5.html"}},[t._v("Holybro Pix32v5")]),_("sup",[t._v("®")]),t._v(" 비행 콘트롤러 전원공급 방법과 주요 주변장치 연결 방법을 설명합니다.")],1),t._v(" "),_("p",[_("img",{attrs:{src:r(583),alt:"Pix32 v5 (베이스 포함)"}})]),t._v(" "),_("h2",{attrs:{id:"포장-개봉"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#포장-개봉"}},[t._v("#")]),t._v(" 포장 개봉")]),t._v(" "),_("p",[t._v("Pix32 v5 is sold bundled with a number of different combinations of accessories, including the "),_("em",[t._v("pix32 v5 Base board")]),t._v(", power module "),_("em",[t._v("PM02 V3")]),t._v(", and the "),_("a",{attrs:{href:"https://holybro.com/collections/gps/products/m8n-gps",target:"_blank",rel:"noopener noreferrer"}},[t._v("Holybro M8N GPS"),_("OutboundLink")],1),t._v(" (UBLOX NEO-M8N).")]),t._v(" "),_("p",[_("em",[t._v("PM02 V3")]),t._v(" 전원 모듈과 "),_("em",[t._v("Pixhawk 4 GPS/Compass")]),t._v("의 상자 내용물은 다음과 같습니다. 상자에는 핀 배치 가이드 및 전원 모듈 지침과 베이스 보드(아래 회로도에는 표시되지 않음)가 포함되어 있습니다.")]),t._v(" "),_("p",[_("img",{attrs:{src:r(584),alt:"Pix32 v5 박스"}})]),t._v(" "),_("h2",{attrs:{id:"배선-개요"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#배선-개요"}},[t._v("#")]),t._v(" 배선 개요")]),t._v(" "),_("p",[t._v("아래의 이미지는 주요 센서와 주변 장치(모터 및 서보 출력 제외)의 연결 방법을 설명합니다. 다음 섹션에서 각 장치에 대하여 자세히 설명합니다.")]),t._v(" "),_("p",[_("img",{attrs:{src:r(585),alt:"Pix32 v5 배선 개요"}})]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),_("p",[t._v("More information about available ports can be found "),_("a",{attrs:{href:"https://cdn.shopify.com/s/files/1/0604/5905/7341/files/Holybro_Pix32-V5-Base-Mini-Pinouts.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),_("OutboundLink")],1),t._v(".")])]),t._v(" "),_("h2",{attrs:{id:"콘트롤러-장착-및-장착-방향"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#콘트롤러-장착-및-장착-방향"}},[t._v("#")]),t._v(" 콘트롤러 장착 및 장착 방향")]),t._v(" "),_("p",[_("em",[t._v("Pix32 v5")]),t._v("은 차량의 무게 중심에 최대한 가까운 위치에 장착하여야하며, 화살표가 차량의 전방과 상향을 향하도록 합니다.")]),t._v(" "),_("p",[_("img",{attrs:{src:r(586),alt:"Pix32 v5 (방향 포함)"}})]),t._v(" "),_("div",{staticClass:"custom-block note"},[_("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),_("p",[t._v("콘트롤러를 권장 방향으로 장착할 수 없는 경우 (예 : 공간 제약으로 인해) 실제 "),_("RouterLink",{attrs:{to:"/ko/config/flight_controller_orientation.html"}},[t._v("장착 방향")]),t._v("을 자동조종 소프트웨어를 설정하여야합니다.")],1)]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),_("p",[t._v("보드에는 내부 진동 차단 기능이 있습니다.\n콘트롤러 진동 차단 스티로폼을 사용하여 장착하시 마십시오. 일반적인 양면 테이프로 장착하여도 충분합니다.")])]),t._v(" "),_("h2",{attrs:{id:"gps-나침반-부저-안전-스위치-led"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#gps-나침반-부저-안전-스위치-led"}},[t._v("#")]),t._v(" GPS + 나침반 + 부저 + 안전 스위치 + LED")]),t._v(" "),_("p",[t._v("Pix32 v5 is designed to work well with the "),_("a",{attrs:{href:"https://holybro.com/collections/gps/products/m8n-gps",target:"_blank",rel:"noopener noreferrer"}},[t._v("Holybro M8N GPS"),_("OutboundLink")],1),t._v(", which has an integrated compass, safety switch, buzzer and LED. 10핀 케이블을 사용하여 "),_("strong",[t._v("GPS 포트")]),t._v("에 연결합니다.")]),t._v(" "),_("p",[_("img",{attrs:{src:r(587),alt:"Pix32 v5 (GPS 포함)"}})]),t._v(" "),_("p",[t._v("GPS/나침반은 차량 전방 표식를 사용하여 가능하면 전자 장치들에서 멀리 떨어진 프레임에 장착하는 것이 좋습니다. 나침반은 다른 전자 장치와 떨어지면 간섭이 줄어듦니다.")]),t._v(" "),_("div",{staticClass:"custom-block note"},[_("p",{staticClass:"custom-block-title"},[t._v("GPS")]),t._v(" "),_("p",[t._v("모듈의 통합 안전 스위치는 "),_("em",[t._v("기본적으로")]),t._v(" 활성화되어 있습니다. 활성화되면 PX4는 차량 시동을 걸 수 없습니다. 비활성화하려면 안전 스위치를 1초간 길게 누르십시오. 안전 스위치를 다시 눌러 안전 장치를 활성화하고 기체 시동을 끌 수 있습니다. 조종기나 지상국 프로그램에서 기체 시동을 끌 수 없는 상황에서 유용합니다.")])]),t._v(" "),_("h2",{attrs:{id:"전원"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#전원"}},[t._v("#")]),t._v(" 전원")]),t._v(" "),_("p",[t._v("전원 모듈 또는 배전 보드를 사용하여 모터와 서보에 전원을 공급하고 소비 전력을 측정할 수 있습니다. 권장되는 전원 모듈은 아래와 같습니다.")]),t._v(" "),_("p",[_("span",{attrs:{id:"pm02_v3"}})]),t._v(" "),_("h3",{attrs:{id:"pm02-v3-전원-모듈"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#pm02-v3-전원-모듈"}},[t._v("#")]),t._v(" PM02 v3 전원 모듈")]),t._v(" "),_("p",[t._v("The "),_("RouterLink",{attrs:{to:"/ko/power_module/holybro_pm02.html"}},[t._v("Power Module (PM02 v3)")]),t._v(" can be bundled with "),_("em",[t._v("pix32 v5")]),t._v(". It provides regulated power to flight controller and sends battery voltage/current to the flight controller.")],1),t._v(" "),_("p",[t._v("그림과 같이 "),_("em",[t._v("전원 모듈")]),t._v("을 연결합니다.")]),t._v(" "),_("p",[_("img",{attrs:{src:r(588),alt:"Pix32 v5 (전원 모듈 포함)"}})]),t._v(" "),_("ul",[_("li",[t._v("PM 전압/전류 포트 : 제공된 6선 GH 케이블을 사용하여 POWER1 포트 (또는  "),_("code",[t._v("POWER2")]),t._v(")에 연결합니다.")]),t._v(" "),_("li",[t._v("PM 입력 (XT60 수 커넥터) : LiPo 배터리 (2 ~ 12S)에 연결합니다.")]),t._v(" "),_("li",[t._v("PM 전원 출력 (XT60 암 커넥터) : 모든 모터 ESC에 배선합니다.")])]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),_("p",[t._v("이 전원 모듈에는 배전 배선이 포함되어 있지 않으므로, 모든 ESC를 전원 모듈 출력에 병렬로 연결하여야 합니다. ESC는 적합한 전압이 공급되어야 합니다.")])]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),_("p",[_("strong",[t._v("MAIN/AUX")]),t._v("의 8 핀 전원 (+) 레일은 비행 콘트롤러의 전원 모듈에서 전원이 공급되지 않습니다. 방향타, 엘레본 등의 서보를 구동하기 위해 별도로 전원을 공급해야하는 경우에는 파워 레일을 BEC 장착 ESC 또는 독립형 5V BEC나 2S LiPo 배터리에 연결합니다. 사용하는 서보의 전압을 확인하십시오.")])]),t._v(" "),_("p",[t._v("전원 모듈에는 다음과 같은 특성과 제약 사항이 있습니다.")]),t._v(" "),_("ul",[_("li",[t._v("최대 입력 전압 : 60V")]),t._v(" "),_("li",[t._v("최대 전류 감지 : 120A 전압")]),t._v(" "),_("li",[t._v("SV ADC 스위칭 레귤레이터 출력에 대해 구성된 전류 측정은 최대 5.2V 및 3A를 출력합니다.")]),t._v(" "),_("li",[t._v("무게 : 20g")]),t._v(" "),_("li",[t._v("패키지 내용물 :\n"),_("ul",[_("li",[t._v("PM02 보드")]),t._v(" "),_("li",[t._v("6 핀 MLX 케이블 (1)")]),t._v(" "),_("li",[t._v("6 핀 GH 케이블 (1)")])])])]),t._v(" "),_("h3",{attrs:{id:"배터리-설정"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#배터리-설정"}},[t._v("#")]),t._v(" 배터리 설정")]),t._v(" "),_("p",[t._v("배터리 설정은 "),_("RouterLink",{attrs:{to:"/ko/config/battery.html"}},[t._v("전원 설정")]),t._v("에서 설정합니다. 전원 모듈의 "),_("em",[t._v("셀의 갯수")]),t._v("를 설정하여야 합니다.")],1),t._v(" "),_("p",[t._v("다른 전원 모듈(예 : Pixracer의 모듈)을 사용하지 않으면 "),_("em",[t._v("전압 분배기")]),t._v("를 업데이트 할 필요는 없습니다.")]),t._v(" "),_("h2",{attrs:{id:"무선-조종"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#무선-조종"}},[t._v("#")]),t._v(" 무선 조종")]),t._v(" "),_("p",[t._v("리모트 컨트롤(RC) 라디오 시스템은 기체를 "),_("em",[t._v("수동")]),t._v(" 제어시에 사용합니다. PX4의 자율 비행 모드에는 라디오 시스템은 필수 항목은 아닙니다.")]),t._v(" "),_("p",[_("RouterLink",{attrs:{to:"/ko/getting_started/rc_transmitter_receiver.html"}},[t._v("호환되는 송신기/수신기를 선택")]),t._v("후 "),_("em",[t._v("바인딩")]),t._v("을 하여야 통신이 가능합니다. 송신기/수신기의 매뉴얼을 참고하십시오.")],1),t._v(" "),_("p",[t._v("아래의 지침은 여러가지 유형의 수신기를 "),_("em",[t._v("Pix32 v5")]),t._v("를 연결하는 방법을 설명합니다.")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("Spektrum/DSM 수신기는 "),_("strong",[t._v("DSM RC")]),t._v(" 입력에 연결합니다.")]),t._v(" "),_("p",[_("img",{attrs:{src:r(589),alt:"Pix32v5 RC 수신기"}})])]),t._v(" "),_("li",[_("p",[t._v("PPM 방식 과 S 버스 방식의 수신기는 "),_("strong",[t._v("SBUS_IN/PPM_IN")]),t._v(" 입력 포트 (RC IN으로 표시됨)에 연결합니다.")]),t._v(" "),_("p",[_("img",{attrs:{src:r(430),alt:"핀배열"}})])]),t._v(" "),_("li",[_("p",[_("em",[t._v("각각의 채널이 독립적으로 배선된")]),t._v(" PPM/PWM 수신기는 반드시 "),_("strong",[t._v("PPM RC")]),t._v("포트에 "),_("em",[t._v("PPM 인코더를 통해")]),t._v(" "),_("a",{attrs:{href:"http://www.getfpv.com/radios/radio-accessories/holybro-ppm-encoder-module.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("아래와 같이"),_("OutboundLink")],1),t._v("연결하여야 합니다. PPM-Sum 수신기는 모든 채널에 하나의 전선만 사용합니다.")])])]),t._v(" "),_("p",[t._v("무선 시스템 선택, 수신기 호환성 및 송신기/수신기 바인딩에 대한 자세한 내용은 "),_("RouterLink",{attrs:{to:"/ko/getting_started/rc_transmitter_receiver.html"}},[t._v("원격 제어 송신기 & 수신기")]),t._v("를 참고하십시오.")],1),t._v(" "),_("h2",{attrs:{id:"무선-텔레메트리-선택-사항"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#무선-텔레메트리-선택-사항"}},[t._v("#")]),t._v(" 무선 텔레메트리(선택 사항)")]),t._v(" "),_("p",[t._v("무선 텔레메트리는 지상국 프로그램에서 비행 차량의 통신/제어에 사용합니다(예 : UAV를 특정 위치로 지시하거나 새 임무를 업로드 할 수 있음).")]),t._v(" "),_("p",[t._v("기체의 텔레메트리를 "),_("strong",[t._v("TELEM1")]),t._v(" 포트에 연결하여야 합니다 (이 포트에 연결된 경우 추가 설정이 필요하지 않음). 다른 텔레메트리는 일반적으로 지상국 컴퓨터나 모바일 장치에 USB를 통하여 연결됩니다.")]),t._v(" "),_("p",[_("img",{attrs:{src:r(590),alt:"Pix32 v5(무선 텔레메트리 포함)"}})]),t._v(" "),_("h2",{attrs:{id:"sd-카드-선택-사항"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#sd-카드-선택-사항"}},[t._v("#")]),t._v(" SD 카드 (선택 사항)")]),t._v(" "),_("p",[t._v("SD 카드는 일반적으로 "),_("RouterLink",{attrs:{to:"/ko/getting_started/flight_reporting.html"}},[t._v("세부 비행 기록 및 분석")]),t._v("에 사용됩니다. 마이크로 SD 카드는 pix32 v5에 미리 설치되어 있어야하며, 별도의 마이크로 SD 카드가있는 경우 아래 그림과 같이 "),_("em",[t._v("pix32 v5")]),t._v("에 카드를 삽입하십시오.")],1),t._v(" "),_("p",[_("img",{attrs:{src:r(591),alt:"Pix32 v5 (SD 카드 포함)"}})]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),_("p",[t._v("SanDisk Extreme U3 32GB를 사용하는 것을 "),_("RouterLink",{attrs:{to:"/ko/dev_log/logging.html#sd-cards"}},[t._v("적극 권장")]),t._v("합니다.")],1)]),t._v(" "),_("h2",{attrs:{id:"모터"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#모터"}},[t._v("#")]),t._v(" 모터")]),t._v(" "),_("p",[t._v("모터/서보 제어 신호는 "),_("strong",[t._v("I/O PWM OUT")]),t._v(" ("),_("strong",[t._v("MAIN OUT")]),t._v(") 및 "),_("strong",[t._v("FMU PWM OUT")]),t._v(" ("),_("strong",[t._v("AUX")]),t._v(")에 연결합니다. 포트는 "),_("RouterLink",{attrs:{to:"/ko/airframes/airframe_reference.html"}},[t._v("기체 정의서")]),t._v("에서 지정된 순서대로 연결합니다.")],1),t._v(" "),_("p",[_("img",{attrs:{src:r(430),alt:"Pix32 v5 백 핀배열(개략도)"}})]),t._v(" "),_("p",[t._v("모터는 별도 "),_("a",{attrs:{href:"#power"}},[t._v("전원을 공급")]),t._v("하여야 합니다.")]),t._v(" "),_("div",{staticClass:"custom-block note"},[_("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),_("p",[t._v('프레임이 기체 참조 정의서에 없으면, 적절한 유형의 "일반"기체를 사용하십시오.')])]),t._v(" "),_("h2",{attrs:{id:"기타-주변-장치"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#기타-주변-장치"}},[t._v("#")]),t._v(" 기타 주변 장치")]),t._v(" "),_("p",[t._v("주변 장치 배선 및 설정에 관한 선택 사항은 개별 "),_("RouterLink",{attrs:{to:"/ko/peripherals/"}},[t._v("주변 장치")]),t._v("를 참고하십시오.")],1),t._v(" "),_("h2",{attrs:{id:"핀배열"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#핀배열"}},[t._v("#")]),t._v(" 핀배열")]),t._v(" "),_("p",[_("a",{attrs:{href:"https://cdn.shopify.com/s/files/1/0604/5905/7341/files/Holybro_Pix32-V5-Base-Mini-Pinouts.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pix32 v5 Pinouts"),_("OutboundLink")],1),t._v(" (Holybro)")]),t._v(" "),_("h2",{attrs:{id:"설정"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#설정"}},[t._v("#")]),t._v(" 설정")]),t._v(" "),_("p",[t._v("더 자세한 일반적인 설정 방법은 "),_("RouterLink",{attrs:{to:"/ko/config/"}},[t._v("자동항법장치 설정")]),t._v("을 참고하십시오.")],1),t._v(" "),_("p",[t._v("QuadPlane에 대한 자세한 설정 방법은 "),_("RouterLink",{attrs:{to:"/ko/config_vtol/vtol_quad_configuration.html"}},[t._v("QuadPlane VTOL 설정")]),t._v("을 참고하십시오.")],1),t._v(" "),_("h2",{attrs:{id:"추가-정보"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#추가-정보"}},[t._v("#")]),t._v(" 추가 정보")]),t._v(" "),_("ul",[_("li",[_("RouterLink",{attrs:{to:"/ko/flight_controller/holybro_pix32_v5.html"}},[t._v("Pix32 v5 개요")]),t._v(" (개요 페이지)")],1),t._v(" "),_("li",[_("a",{attrs:{href:"https://cdn.shopify.com/s/files/1/0604/5905/7341/files/Holybro_PIX32-V5_technical_data_sheet_v1.1.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pix32 v5  기술 데이터 시트"),_("OutboundLink")],1)]),t._v(" "),_("li",[_("a",{attrs:{href:"https://cdn.shopify.com/s/files/1/0604/5905/7341/files/Holybro_Pix32-V5-Base-Mini-Pinouts.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pix32 v5 핀배열"),_("OutboundLink")],1)]),t._v(" "),_("li",[_("a",{attrs:{href:"https://cdn.shopify.com/s/files/1/0604/5905/7341/files/Holybro_PIX32-V5-BASE-Schematic_diagram.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pix32 v5 기본 회로도"),_("OutboundLink")],1)]),t._v(" "),_("li",[_("a",{attrs:{href:"http://www.holybro.com/manual/Holybro_PIX32-V5-BASE-ComponentsLayout.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pix32 v5 기본 구성 요소 레이아웃"),_("OutboundLink")],1)]),t._v(" "),_("li",[_("a",{attrs:{href:"https://docs.google.com/spreadsheets/d/1-n0__BYDedQrc_2NHqBenG1DNepAgnHpSGglke-QQwY/edit#gid=912976165",target:"_blank",rel:"noopener noreferrer"}},[t._v("FMUv5 레퍼런스 디자인 핀배열"),_("OutboundLink")],1),t._v(".")])])])}),[],!1,null,null,null);s.default=e.exports},430:function(t,s,r){t.exports=r.p+"assets/img/pix32_v5_pinouts_back_label.4f76c6de.png"},583:function(t,s,r){t.exports=r.p+"assets/img/IMG_3165.a6339369.jpg"},584:function(t,s,r){t.exports=r.p+"assets/img/pix32_v5_unboxing_schematics.95910837.png"},585:function(t,s,r){t.exports=r.p+"assets/img/pix32_v5_wiring_overview.d930dc26.jpg"},586:function(t,s,r){t.exports=r.p+"assets/img/pix32_v5_orientation.c856f12c.png"},587:function(t,s,r){t.exports=r.p+"assets/img/pix32_v5_connection_gps_compass.7d829c56.jpg"},588:function(t,s,r){t.exports=r.p+"assets/img/pix32_v5_connection_power.98dda864.jpg"},589:function(t,s,r){t.exports=r.p+"assets/img/pix32_v5_receivers_connection.ea3c8509.jpg"},590:function(t,s,r){t.exports=r.p+"assets/img/pix32_v5_telemetry_radio.46b733fc.jpg"},591:function(t,s,r){t.exports=r.p+"assets/img/pix32_v5_sd_card.34e2dc53.jpg"}}]);