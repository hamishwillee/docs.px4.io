(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{1900:function(t,r,_){"use strict";_.r(r);var o=_(18),a=Object(o.a)({},(function(){var t=this,r=t.$createElement,o=t._self._c||r;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"픽스32-v5-배선-빠른-시작"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#픽스32-v5-배선-빠른-시작"}},[t._v("#")]),t._v(" 픽스32 v5 배선 빠른 시작")]),t._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[t._v("PX4에서는 이런 종류의 자동 항법 장치를 제조하지는 않습니다. 하드웨어 지원 또는 호환 문제는 [제조사](https://shop.holybro.com/)와 상담하십시오.")])]),t._v(" "),o("p",[t._v("이 설명서는 "),o("RouterLink",{attrs:{to:"/ko/flight_controller/holybro_pix32_v5.html"}},[t._v(" Holybro Pix32v5 ")]),o("sup",[t._v("®")]),t._v(" 비행 컨트롤러에 전원을 공급하고 가장 중요한 주변 장치를 연결하는 방법을 설명합니다.")],1),t._v(" "),o("p",[o("img",{attrs:{src:_(536),alt:"Pix32 v5 (베이스 포함)"}})]),t._v(" "),o("h2",{attrs:{id:"포장-개봉"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#포장-개봉"}},[t._v("#")]),t._v(" 포장 개봉")]),t._v(" "),o("p",[t._v("Pix32 v5는 * pix32 v5 베이스 보드 *, 전원 모듈 * PM02 V3 * 및 "),o("a",{attrs:{href:"https://shop.holybro.com/pixhawk-4-gps-module_p1094.html",target:"_blank",rel:"noopener noreferrer"}},[t._v(" Pixhawk 4 GPS / Compass를 포함하여 다양한 액세서리 조합과 함께 번들로 판매됩니다. "),o("OutboundLink")],1),t._v(" (UBLOX NEO-M8N).")]),t._v(" "),o("ul",[o("li",[t._v("PM02 V3 * 전원 모듈 및 * Pixhawk 4 GPS / Compass *가있는 상자의 내용물은 다음과 같습니다. 상자에는 핀 배치 가이드 및 전원 모듈 지침과 베이스 보드 (아래 회로도에는 표시되지 않음)도 포함되어 있습니다.")])]),t._v(" "),o("p",[o("img",{attrs:{src:_(537),alt:"Pix32 v5 박스"}})]),t._v(" "),o("h2",{attrs:{id:"배선-개요"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#배선-개요"}},[t._v("#")]),t._v(" 배선 개요")]),t._v(" "),o("p",[t._v("아래의 이미지는 중요한 센서 및 주변 장치 (모터 및 서보 출력 제외)를 연결법을 나타냅니다. 다음 섹션에서 각각의 장치에 대해 자세히 설명합니다.")]),t._v(" "),o("p",[o("img",{attrs:{src:_(538),alt:"Pix32 v5 배선 개요"}})]),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),o("p",[t._v("사용 가능한 포트에 대한 자세한 내용은 "),o("a",{attrs:{href:"http://www.holybro.com/manual/Holybro_PIX32-V5_PINOUTS_V1.1.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("여기"),o("OutboundLink")],1),t._v("에서 찾을 수 있습니다.")])]),t._v(" "),o("h2",{attrs:{id:"콘트롤러-장착-및-장착-방향"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#콘트롤러-장착-및-장착-방향"}},[t._v("#")]),t._v(" 콘트롤러 장착 및 장착 방향")]),t._v(" "),o("p",[o("em",[t._v("Pix32 v5")]),t._v("은 차량의 무게 중심에 최대한 가깝게 배치 된 프레임에 장착해야하며 화살표가 차량의 앞쪽과 위쪽을 향하도록 하여야 합니다.")]),t._v(" "),o("p",[o("img",{attrs:{src:_(539),alt:"Pix32 v5 (방향 포함)"}})]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("컨트롤러를 권장/기본 방향으로 장착 할 수 없는 경우 (예 : 공간 제약으로 인해) 실제로 사용한 방향으로 자동 조종 소프트웨어를 구성해야합니다 : "),o("RouterLink",{attrs:{to:"/ko/config/flight_controller_orientation.html"}},[t._v(" Flight Controller Orientation ")]),t._v(".")],1)]),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),o("p",[t._v("보드에는 내부 진동 차단 기능이 있습니다. 컨트롤러를 장착시 진동 차단 스티로폼을 사용하지 마십시오 (일반적으로 양면 테이프로 충분 함).")])]),t._v(" "),o("h2",{attrs:{id:"gps-나침반-부저-안전-스위치-led"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#gps-나침반-부저-안전-스위치-led"}},[t._v("#")]),t._v(" GPS + 나침반 + 부저 + 안전 스위치 + LED")]),t._v(" "),o("p",[t._v("Pix32 v5은 나침반, 안전 스위치, 부저 및 LED가 통합된 "),o("a",{attrs:{href:"https://shop.holybro.com/pixhawk-4-gps-module_p1094.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk 4 GPS 모듈"),o("OutboundLink")],1),t._v("에 최적화되도록 설계되었습니다. 10 핀 케이블을 사용하여 "),o("RouterLink",{attrs:{to:"/ko/flight_controller/holybro_pix32_v5.html#gps"}},[t._v("GPS 포트")]),t._v("에 직접 연결합니다.")],1),t._v(" "),o("p",[t._v("GPS/나침반은 차량 전명 방향 표시를 사용하여 가능한 한 다른 전자 장치에서 멀리 떨어진 프레임에 장착해야합니다 (나침반을 다른 전자 장치와 분리하면 간섭이 줄어듦).")]),t._v(" "),o("p",[o("img",{attrs:{src:_(540),alt:"Pix32 v5 (GPS 포함)"}})]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("GPS")]),t._v(" "),o("p",[t._v("모듈의 통합 안전 스위치는 "),o("em",[t._v("기본적으로")]),t._v(" 활성화되어 있습니다 (활성화되면 PX4는 차량 시동을 걸 수 없습니다). 비활성화하려면 안전 스위치를 1초간 길게 누르십시오. 안전 스위치를 다시 눌러 안전 장치를 활성화하고 기체 시동을 끌 수 있습니다 (어떤 이유로든 조종기나 지상국 프로그램이 기체 시동을 끌 수 없을 때 유용합니다).")])]),t._v(" "),o("h2",{attrs:{id:"전원"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#전원"}},[t._v("#")]),t._v(" 전원")]),t._v(" "),o("p",[t._v("전원 모듈 또는 배전 보드를 사용하여 모터/서보에 전원을 공급하고 전력 소비를 측정 할 수 있습니다. 권장되는 전원 모듈은 다음과 같습니다.")]),t._v(" "),o("p",[o("span",{attrs:{id:"pm02_v3"}})]),t._v(" "),o("h3",{attrs:{id:"pm02-v3-전원-모듈"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#pm02-v3-전원-모듈"}},[t._v("#")]),t._v(" PM02 v3 전원 모듈")]),t._v(" "),o("p",[o("a",{attrs:{href:"https://shop.holybro.com/power-modulepm02-v3_p1185.html",target:"_blank",rel:"noopener noreferrer"}},[t._v(" 전원 모듈 (PM02 v3) "),o("OutboundLink")],1),t._v("은 * pix32 v5*과 함께 번들로 제공 될 수 있습니다. It provides regulated power to flight controller and sends battery voltage/current to the flight controller.")]),t._v(" "),o("p",[t._v("그림과 같이 * 전원 모듈 *의 출력을 연결합니다.")]),t._v(" "),o("p",[o("img",{attrs:{src:_(541),alt:"Pix32 v5 (전원 모듈 포함)"}})]),t._v(" "),o("ul",[o("li",[t._v("PM 전압/전류 포트 : 제공된 6선 GH 케이블을 사용하여 POWER1 포트 (또는  "),o("code",[t._v("POWER2")]),t._v(" )에 연결합니다.")]),t._v(" "),o("li",[t._v("PM 입력 (XT60 수 커넥터) : LiPo 배터리 (2 ~ 12S)에 연결합니다.")]),t._v(" "),o("li",[t._v("PM 전원 출력 (XT60 암 커넥터) : 모든 모터 ESC에 배선합니다.")])]),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),o("p",[t._v("이 전원 모듈에는 배전 배선이 포함되어 있지 않으므로 일반적으로 모든 ESC를 전원 모듈 출력에 병렬로 연결합니다 (ESC는 제공된 전압 레벨에 적합해야 함).")])]),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),o("p",[t._v("** MAIN / AUX **의 8 핀 전원 (+) 레일은 비행 컨트롤러에 대한 전원 모듈 공급으로 전원이 공급되지 않습니다. 방향타, 엘레본 등의 서보를 구동하기 위해 별도로 전원을 공급해야하는 경우, 파워 레일을 BEC 장착 ESC 또는 독립형 5V BEC 또는 2S LiPo 배터리에 연결해야합니다. 사용하는 서보의 전압이 적절한 지 확인하십시오.")])]),t._v(" "),o("p",[t._v("전원 모듈에는 다음과 같은 특성/제한이 있습니다.")]),t._v(" "),o("ul",[o("li",[t._v("최대 입력 전압 : 60V")]),t._v(" "),o("li",[t._v("최대 전류 감지 : 120A 전압")]),t._v(" "),o("li",[t._v("SV ADC 스위칭 레귤레이터 출력에 대해 구성된 전류 측정은 최대 5.2V 및 3A를 출력합니다.")]),t._v(" "),o("li",[t._v("무게 : 20g")]),t._v(" "),o("li",[t._v("패키지 내용물 :\n"),o("ul",[o("li",[t._v("PM02 보드")]),t._v(" "),o("li",[t._v("6 핀 MLX 케이블 (1)")]),t._v(" "),o("li",[t._v("6 핀 GH 케이블 (1)")])])])]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[o("a",{attrs:{href:"http://www.holybro.com/manual/Holybro_PM02_v3_PowerModule_Manual.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v(" PM02v3 전원 모듈 설명서 "),o("OutboundLink")],1),t._v(" (Holybro)도 참조하십시오.")])]),t._v(" "),o("h3",{attrs:{id:"배터리-설정"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#배터리-설정"}},[t._v("#")]),t._v(" 배터리 설정")]),t._v(" "),o("p",[t._v("배터리 전원 설정은 "),o("RouterLink",{attrs:{to:"/ko/config/battery.html"}},[t._v(" 전원 설정 ")]),t._v("에서 구성해야 합니다. 두 전원 모듈에 대해 * 셀 수 *를 구성해야 합니다.")],1),t._v(" "),o("p",[t._v("다른 전원 모듈(예 : Pixracer의 모듈)을 사용하지 않으면 * 전압 분배기 *를 업데이트 할 필요가 없습니다.")]),t._v(" "),o("h2",{attrs:{id:"무선-조종"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#무선-조종"}},[t._v("#")]),t._v(" 무선 조종")]),t._v(" "),o("p",[t._v("리모트 컨트롤(RC) 라디오 시스템은 기체를 "),o("em",[t._v("수동")]),t._v("으로 제어할 때 필요합니다 (PX4에는 자율 비행 모드를 위한 라디오 시스템이 필요하지 않습니다).")]),t._v(" "),o("p",[t._v("기체와 조종자가 서로 통신하기 위해 "),o("RouterLink",{attrs:{to:"/ko/getting_started/rc_transmitter_receiver.html"}},[t._v("호환되는 송신기/수신기를 선택하고")]),t._v(", 송신기와 수신기를 "),o("em",[t._v("바인드")]),t._v("해야 합니다 (송신기와 수신기에 포함된 지시사항을 읽으십시오).")],1),t._v(" "),o("p",[t._v("아래 지침은 다양한 유형의 수신기를 "),o("em",[t._v("Pix32 v5")]),t._v("에 연결하는 방법을 보여줍니다.")]),t._v(" "),o("ul",[o("li",[o("p",[t._v("Spektrum/DSM 수신기는 "),o("RouterLink",{attrs:{to:"/ko/flight_controller/holybro_pix32_v5.html#dsm-rc-port"}},[t._v(" DSM RC ")]),t._v(" 입력에 연결됩니다.")],1),t._v(" "),o("p",[o("img",{attrs:{src:_(542),alt:"Pix32v5 rc 수신기"}})])]),t._v(" "),o("li",[o("p",[t._v("PPM 방식 과 S 버스 방식의 수신기는 "),o("RouterLink",{attrs:{to:"/ko/flight_controller/holybro_pix32_v5.html#rc-in"}},[t._v(" SBUS_IN / PPM_IN ")]),t._v(" 입력 포트 (RC IN으로 표시됨)에 연결됩니다.")],1),t._v(" "),o("p",[o("img",{attrs:{src:_(414),alt:"핀아웃"}})])]),t._v(" "),o("li",[o("p",[o("em",[t._v("각각의 채널이 독립적으로 배선된")]),t._v(" PPM/PWM 수신기는 반드시 "),o("strong",[t._v("PPM RC")]),t._v("포트에 "),o("em",[t._v("PPM 인코더를 통해")]),t._v(" "),o("a",{attrs:{href:"http://www.getfpv.com/radios/radio-accessories/holybro-ppm-encoder-module.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("아래와 같이"),o("OutboundLink")],1),t._v("연결해야 합니다 (PPM-Sum 수신기는 모든 채널에 하나의 전선만 사용합니다).")])])]),t._v(" "),o("p",[t._v("무선 시스템 선택, 수신기 호환성 및 송신기/수신기 쌍 바인딩에 대한 자세한 내용은 다음을 참조하십시오. "),o("RouterLink",{attrs:{to:"/ko/getting_started/rc_transmitter_receiver.html"}},[t._v(" 원격 제어 송신기 & amp; 수신자 ")]),t._v(".")],1),t._v(" "),o("h2",{attrs:{id:"무선-텔레메트리-선택-사항"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#무선-텔레메트리-선택-사항"}},[t._v("#")]),t._v(" 무선 텔레메트리(선택 사항)")]),t._v(" "),o("p",[t._v("무선 텔레메트리는 지상국 프로그램에서 비행중인 차량의 통신/제어에 사용할 수 있습니다 (예 : UAV를 특정 위치로 지시하거나 새 임무를 업로드 할 수 있음).")]),t._v(" "),o("p",[t._v("기체의 텔레메트리를 "),o("strong",[t._v("TELEM1")]),t._v(" 포트에 연결해야 합니다 (이 포트에 연결된 경우 추가 구성이 필요하지 않음). 다른 텔레메트리는 일반적으로 지상국 컴퓨터나 모바일 장치에 (USB를 통해) 연결됩니다.")]),t._v(" "),o("p",[o("img",{attrs:{src:_(543),alt:"Pix32 v5(무선 텔레메트리 포함)"}})]),t._v(" "),o("h2",{attrs:{id:"sd-카드-선택-사항"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#sd-카드-선택-사항"}},[t._v("#")]),t._v(" SD 카드 (선택 사항)")]),t._v(" "),o("p",[t._v("SD 카드는 일반적으로 "),o("RouterLink",{attrs:{to:"/ko/getting_started/flight_reporting.html"}},[t._v("세부 비행 기록 및 분석")]),t._v("에 사용됩니다. 마이크로 SD 카드는 pix32 v5에 미리 설치되어 있어야하며, 자신의 마이크로 SD 카드가있는 경우 아래 그림과 같이 * pix32 v5 *에 카드를 삽입하십시오.")],1),t._v(" "),o("p",[o("img",{attrs:{src:_(544),alt:"Pix32 v5 (SD 카드 포함)"}})]),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),o("p",[t._v("SanDisk Extreme U3 32GB는 "),o("RouterLink",{attrs:{to:"/ko/dev_log/logging.html#sd-cards"}},[t._v(" 적극 권장 ")]),t._v("합니다.")],1)]),t._v(" "),o("h2",{attrs:{id:"모터"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#모터"}},[t._v("#")]),t._v(" 모터")]),t._v(" "),o("p",[t._v("모터/서보 제어 신호는 ** I/O PWM OUT ** (** MAIN OUT "),o("strong",[t._v(") 및 ** FMU PWM OUT ** (")]),t._v(" AUX **)에 연결됩니다. ) 포트는 "),o("RouterLink",{attrs:{to:"/ko/airframes/airframe_reference.html"}},[t._v(" Airframe Reference ")]),t._v("에서 차량에 지정된 순서로 지정됩니다.")],1),t._v(" "),o("p",[o("img",{attrs:{src:_(414),alt:"Pix32 v5 - 백 핀아웃 (개략도)"}})]),t._v(" "),o("p",[t._v("모터는 별도로 "),o("a",{attrs:{href:"#power"}},[t._v("전원을 공급")]),t._v("하여야 합니다.")]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v('프레임이 기체 참조 목록에 없으면, 올바른 유형의 "일반"기체를 사용하십시오.')])]),t._v(" "),o("h2",{attrs:{id:"기타-주변-장치"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#기타-주변-장치"}},[t._v("#")]),t._v(" 기타 주변 장치")]),t._v(" "),o("p",[t._v("선택적인 주변 장치의 배선 및 구성은 개별 "),o("RouterLink",{attrs:{to:"/ko/peripherals/"}},[t._v("주변 장치")]),t._v("에 대한 항목에서 다룹니다.")],1),t._v(" "),o("h2",{attrs:{id:"핀아웃"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#핀아웃"}},[t._v("#")]),t._v(" 핀아웃")]),t._v(" "),o("p",[o("a",{attrs:{href:"http://www.holybro.com/manual/Holybro_PIX32-V5_PINOUTS_V1.1.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pix32 v5 핀아웃"),o("OutboundLink")],1),t._v(" (Holybro)")]),t._v(" "),o("h2",{attrs:{id:"설정"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#설정"}},[t._v("#")]),t._v(" 설정")]),t._v(" "),o("p",[t._v("더 자세한 일반 구성 정보는 "),o("RouterLink",{attrs:{to:"/ko/config/"}},[t._v(" Autopilot 구성 ")]),t._v("에서 다룹니다.")],1),t._v(" "),o("p",[t._v("QuadPlane에 대한 자세한 설정은 "),o("RouterLink",{attrs:{to:"/ko/config_vtol/vtol_quad_configuration.html"}},[t._v("QuadPlane VTOL 설정")]),t._v("에서 다룹니다.")],1),t._v(" "),o("h2",{attrs:{id:"추가-정보"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#추가-정보"}},[t._v("#")]),t._v(" 추가 정보")]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/ko/flight_controller/holybro_pix32_v5.html"}},[t._v("Pix32 v5 개요")]),t._v(" (개요 페이지)")],1),t._v(" "),o("li",[o("a",{attrs:{href:"http://www.holybro.com/manual/Holybro_PIX32-V5_technical_data_sheet_v1.1.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pix32 v5  기술 데이터 시트"),o("OutboundLink")],1)]),t._v(" "),o("li",[o("a",{attrs:{href:"http://www.holybro.com/manual/Holybro_PIX32-V5_PINOUTS_V1.1.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pix32 v5 핀아웃"),o("OutboundLink")],1)]),t._v(" "),o("li",[o("a",{attrs:{href:"http://www.holybro.com/manual/Holybro_PIX32-V5-BASE-Schematic_diagram.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pix32 v5 기본 회로도"),o("OutboundLink")],1)]),t._v(" "),o("li",[o("a",{attrs:{href:"http://www.holybro.com/manual/Holybro_PIX32-V5-BASE-ComponentsLayout.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pix32 v5 기본 구성 요소 레이아웃"),o("OutboundLink")],1)]),t._v(" "),o("li",[o("a",{attrs:{href:"https://docs.google.com/spreadsheets/d/1-n0__BYDedQrc_2NHqBenG1DNepAgnHpSGglke-QQwY/edit#gid=912976165",target:"_blank",rel:"noopener noreferrer"}},[t._v("FMUv5 레퍼런스 디자인 핀아웃"),o("OutboundLink")],1),t._v(".")])])])}),[],!1,null,null,null);r.default=a.exports},414:function(t,r,_){t.exports=_.p+"assets/img/pix32_v5_pinouts_back_label.da04161d.png"},536:function(t,r,_){t.exports=_.p+"assets/img/IMG_3165.a6339369.jpg"},537:function(t,r,_){t.exports=_.p+"assets/img/pix32_v5_unboxing_schematics.97b9fd76.png"},538:function(t,r,_){t.exports=_.p+"assets/img/pix32_v5_wiring_overview.f3dd7d9b.jpg"},539:function(t,r,_){t.exports=_.p+"assets/img/pix32_v5_orientation.2084932b.png"},540:function(t,r,_){t.exports=_.p+"assets/img/pix32_v5_connection_gps_compass.7d003a7d.jpg"},541:function(t,r,_){t.exports=_.p+"assets/img/pix32_v5_connection_power.8cf4fe1b.jpg"},542:function(t,r,_){t.exports=_.p+"assets/img/pix32_v5_receivers_connection.6f56b601.jpg"},543:function(t,r,_){t.exports=_.p+"assets/img/pix32_v5_telemetry_radio.24c9fa4a.jpg"},544:function(t,r,_){t.exports=_.p+"assets/img/pix32_v5_sd_card.3fbc7d7a.jpg"}}]);