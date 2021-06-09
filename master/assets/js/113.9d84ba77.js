(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{1899:function(t,a,e){"use strict";e.r(a);var s=e(19),_=Object(s.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"cuav-v5-nano-배선-빠른-시작"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cuav-v5-nano-배선-빠른-시작"}},[t._v("#")]),t._v(" CUAV V5 nano 배선 빠른 시작")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("PX4에서는 이런 종류의 자동 항법 장치를 제조하지는 않습니다. 하드웨어 지원 또는 호환 문제는 [제조사](https://store.cuav.net/)와 상담하십시오.")])]),t._v(" "),s("p",[t._v("이 설명서는 "),s("RouterLink",{attrs:{to:"/ko/flight_controller/cuav_v5_nano.html"}},[t._v(" CUAV V5 nano")]),t._v(" 비행 컨트롤러에 전원을 공급하고 가장 중요한 주변 장치를 연결하는 방법을 설명합니다.")],1),t._v(" "),s("p",[s("img",{attrs:{src:e(344),alt:"Nano Hero Image"}})]),t._v(" "),s("h2",{attrs:{id:"배선-개요"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#배선-개요"}},[t._v("#")]),t._v(" 배선 개요")]),t._v(" "),s("p",[t._v("아래의 이미지는 가장 중요한 센서 및 주변 장치 (모터 및 서보 출력 제외)를 연결하는 방법을 나타냅니다. 다음 섹션에서 각각의 장치에 대해 자세히 설명합니다.")]),t._v(" "),s("p",[s("img",{attrs:{src:e(471),alt:"빠른 시작"}})]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("주요 인터페이스")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("기능")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("전원")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("전원 모듈을 연결하십시오. 전력 및 ANALOG 전압 및 전류 측정을 제공합니다.")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("PM2")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("RouterLink",{attrs:{to:"/ko/flight_controller/cuav_v5_nano.html#compatibility_pm2"}},[t._v("PX4와 함께 사용하지 마십시오.")])],1)]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("TF CARD")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("로그 저장용 SD 카드 (카드와 함께 제공)")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("M1~M8")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("PWM 출력 모터와 서보 콘트롤합니다.")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("A1~A3")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("캡처 핀 (PX4에서 "),s("em",[t._v("현재")]),t._v(" 지원되지 않음).")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("nARMED")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("FMU 시동 상태를 나타냅니다. 액티브 로우 (시동시 낮음)입니다.")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("DSU7")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("FMU 디버그에 사용되며 디버그 정보를 읽습니다.")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("I2C2/I2C3/I2C4")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("외부 나침반과 같은 I2C 장치를 연결합니다.")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("CAN1/CAN2")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("CAN GPS와 같은 UAVCAN 장치를 연결합니다.")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("TYPE-C(USB)")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("펌웨어로드와 같은 비행 컨트롤러와 컴퓨터간의 통신을 위해 컴퓨터에 연결합니다")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("GPS & SAFETY")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("GPS, 안전 스위치, 부저 인터페이스가 포함된 Neo GPS에 연결합니다.")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("TELEM1/TELEM2")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("원격 측정 시스템에 연결합니다.")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("DSM/SBUS/RSSI")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("DSM, SBUS, RSSI 신호 입력 인터페이스, DSM 인터페이스는 DSM 위성 수신기에 연결 가능, SBUS 인터페이스는 SBUS 원격 제어 수신기에 연결 가능, 신호 강도 반환 모듈용 RSSI 포함.")])])])]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("자세한 인터페이스 정보는 "),s("a",{attrs:{href:"http://manual.cuav.net/V5-nano.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v(" V5 nano 매뉴얼 "),s("OutboundLink")],1),t._v("을 참조하십시오.")])]),t._v(" "),s("p",[s("img",{attrs:{src:e(472),alt:"빠른 시작"}})]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("컨트롤러를 권장/기본 방향으로 장착 할 수 없는 경우 (예 : 공간 제약으로 인해) 실제로 사용한 방향으로 자동 조종 소프트웨어를 구성해야합니다 : "),s("RouterLink",{attrs:{to:"/ko/advanced_features/rtk-gps.html"}},[t._v(" Flight Controller Orientation ")]),t._v(".")],1)]),t._v(" "),s("h2",{attrs:{id:"gps-나침반-안전-스위치-led"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gps-나침반-안전-스위치-led"}},[t._v("#")]),t._v(" GPS + 나침반 + 안전 스위치 + LED")]),t._v(" "),s("p",[t._v("권장되는 GPS 모듈은 GPS, 나침반, 안전 스위치, 부저, LED 상태 표시등이 포함된 * Neo v2 GPS *입니다.")]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("다른 GPS 모듈은 작동하지 않을 수 있습니다 ("),s("RouterLink",{attrs:{to:"/ko/flight_controller/cuav_v5_nano.html#compatibility_gps"}},[t._v("이 호환성 문제 ")]),t._v(" 참조).")],1)]),t._v(" "),s("p",[t._v("GPS/나침반 모듈은 차량 앞쪽을 향하는 방향 표시를 사용하여 가능한 한 다른 전자 장치에서 멀리 떨어진 프레임에 장착해야합니다 ( Neo GPS 화살표는 비행과 같은 방향에 있음). 컨트롤 화살표). 케이블을 사용하여 비행 제어 GPS 인터페이스에 연결합니다.")]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("CAN")]),t._v(" "),s("p",[t._v("GPS를 사용하는 경우 케이블을 사용하여 비행 제어 CAN 인터페이스에 연결하십시오.")])]),t._v(" "),s("p",[s("img",{attrs:{src:e(473),alt:"빠른 시작"}})]),t._v(" "),s("h2",{attrs:{id:"안전-스위치"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#안전-스위치"}},[t._v("#")]),t._v(" 안전 스위치")]),t._v(" "),s("p",[t._v("V5+에 제공되는 전용 안전 스위치는 권장되는 "),s("em",[t._v("Neo v2 GPS")]),t._v(" (내장 안전 스위치가 있음)를 사용하지 않는 경우에만 필요합니다.")]),t._v(" "),s("p",[t._v("GPS없이 비행하는 경우 차량을 무장하고 비행 할 수 있도록 스위치를 "),s("code",[t._v("GPS1")]),t._v(" 포트에 직접 연결해야합니다 (이전 6 핀 GPS를 사용하는 경우 정의를 읽으십시오. 라인을 변경하는 하단 인터페이스의).")]),t._v(" "),s("h2",{attrs:{id:"부저"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#부저"}},[t._v("#")]),t._v(" 부저")]),t._v(" "),s("p",[t._v("권장 "),s("em",[t._v("Neo v2 GPS")]),t._v("를 사용하지 않는 경우에는 부저가 작동하지 않을 수 있습니다.")]),t._v(" "),s("h2",{attrs:{id:"무선-조종"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#무선-조종"}},[t._v("#")]),t._v(" 무선 조종")]),t._v(" "),s("p",[t._v("차량을 수동으로 제어하려면 원격 제어(RC) 무선 시스템이 필요합니다 (PX4는 자율 비행 모드용 무선조종기가 필수 사항은 아닙니다.). 기체와 조종자가 서로 통신하기 위해 호환되는 송신기/수신기를 선택하고, 송신기와 수신기를 바인드해야 합니다 (송신기와 수신기에 포함된 지시사항을 읽으십시오).")]),t._v(" "),s("p",[t._v("아래 그림은 원격 수신기에 액세스하는 방법을 보여줍니다 (키트에서 S.BUS 케이블을 찾으십시오)")]),t._v(" "),s("p",[s("img",{attrs:{src:e(474),alt:"빠른 시작"}})]),t._v(" "),s("h2",{attrs:{id:"spektrum-satellite-수신기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#spektrum-satellite-수신기"}},[t._v("#")]),t._v(" Spektrum Satellite 수신기")]),t._v(" "),s("p",[t._v("V5 nano에는 전용 DSM 케이블이 있습니다. Spektrum 위성 수신기를 사용하는 경우 비행 컨트롤러 DSM/SBUS/RSSI 인터페이스에 연결해야합니다.")]),t._v(" "),s("h2",{attrs:{id:"전원"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#전원"}},[t._v("#")]),t._v(" 전원")]),t._v(" "),s("p",[t._v("V5 nano키트에는 2~14S LiPo 배터리를 지원하는 "),s("em",[t._v("HV\\ _PM")]),t._v(" 모듈이 포함되어 있습니다. "),s("em",[t._v("HW_PM")]),t._v(" 모듈의 6 핀 커넥터를 비행 제어 "),s("code",[t._v("Power1")]),t._v(" 인터페이스에 연결합니다.")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("제공된 전원 모듈은 퓨즈가 없습니다. 주변 장치를 연결하는 동안 전원을 "),s("strong",[t._v("반드시")]),t._v(" 꺼야 합니다.")])]),t._v(" "),s("p",[s("img",{attrs:{src:e(406),alt:"빠른 시작"}})]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("전원 모듈은 PWM 출력에 연결된 주변 장치의 전원이 아닙니다. 서보/액추에이터를 연결하는 경우에는 BEC를 사용하여 별도로 전원을 공급해야합니다.")])]),t._v(" "),s("h2",{attrs:{id:"텔레메트리-시스템-선택-사항"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#텔레메트리-시스템-선택-사항"}},[t._v("#")]),t._v(" 텔레메트리 시스템 (선택 사항)")]),t._v(" "),s("p",[t._v("텔레메트리 시스템은 지상국과 비행 중인 기체와 통신, 모니터링, 제어할 수 있도록 합니다 (예: 기체를 특정 위치로 움직이도록 지시하거나, 새로운 미션을 업로드할 수 있습니다).")]),t._v(" "),s("p",[t._v("통신 채널은 텔레메트리 라디오를 통해 이루어집니다. 차량 기반 라디오는 "),s("strong",[t._v("TELEM1")]),t._v(" 또는 "),s("strong",[t._v("TELEM2")]),t._v(" 포트에 연결해야합니다 (이 포트에 연결되어있는 경우 추가 구성이 필요하지 않음). 다른 라디오는 지상국 컴퓨터 또는 모바일 장치 (일반적으로 USB를 통해)에 연결됩니다.")]),t._v(" "),s("p",[s("img",{attrs:{src:e(475),alt:"빠른 시작"}})]),t._v(" "),s("p",[s("span",{attrs:{id:"sd_card"}})]),t._v(" "),s("h2",{attrs:{id:"sd-카드-선택-사항"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sd-카드-선택-사항"}},[t._v("#")]),t._v(" SD 카드 (선택 사항)")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/ko/getting_started/px4_basic_concepts.html#sd_cards"}},[t._v("SD 카드")]),t._v("가 제조 공장에서 삽입되어 있습니다 (아무 것도 할 필요가 없습니다).")],1),t._v(" "),s("h2",{attrs:{id:"모터"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#모터"}},[t._v("#")]),t._v(" 모터")]),t._v(" "),s("p",[t._v("모터/서보는 "),s("RouterLink",{attrs:{to:"/ko/airframes/airframe_reference.html"}},[t._v("기체 규정")]),t._v("에서 차량에 지정된 순서대로 MAIN 및 AUX 포트에 연결됩니다.")],1),t._v(" "),s("p",[s("img",{attrs:{src:e(406),alt:"빠른 시작"}})]),t._v(" "),s("h2",{attrs:{id:"핀아웃"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#핀아웃"}},[t._v("#")]),t._v(" 핀아웃")]),t._v(" "),s("p",[s("img",{attrs:{src:e(476),alt:"V5 nano pinouts"}})]),t._v(" "),s("h2",{attrs:{id:"추가-정보"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#추가-정보"}},[t._v("#")]),t._v(" 추가 정보")]),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/ko/frames_multicopter/dji_f450_cuav_5nano.html"}},[t._v("DJI FlameWheel450에서 CUAV v5 nano를 사용하는 기체 빌드 로그")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/ko/flight_controller/cuav_v5_nano.html"}},[t._v("CUAV V5 nano")])],1),t._v(" "),s("li",[s("a",{attrs:{href:"http://manual.cuav.net/V5-nano.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("CUAV V nano 수동"),s("OutboundLink")],1),t._v(" (CUAV)")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://docs.google.com/spreadsheets/d/1-n0__BYDedQrc_2NHqBenG1DNepAgnHpSGglke-QQwY/edit#gid=912976165",target:"_blank",rel:"noopener noreferrer"}},[t._v("FMUv5 참조 설계 핀아웃"),s("OutboundLink")],1),t._v(" (CUAV)")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/cuav",target:"_blank",rel:"noopener noreferrer"}},[t._v("CUAV Github"),s("OutboundLink")],1),t._v(" (CUAV)")])])])}),[],!1,null,null,null);a.default=_.exports},344:function(t,a,e){t.exports=e.p+"assets/img/v5_nano_01.2740caf1.png"},406:function(t,a,e){t.exports=e.p+"assets/img/v5_nano_quickstart_06.34392241.png"},471:function(t,a,e){t.exports=e.p+"assets/img/v5_nano_quickstart_02.d140e43d.png"},472:function(t,a,e){t.exports=e.p+"assets/img/v5_nano_quickstart_03.fe3368b3.png"},473:function(t,a,e){t.exports=e.p+"assets/img/v5_nano_quickstart_04.9fea41bc.png"},474:function(t,a,e){t.exports=e.p+"assets/img/v5_nano_quickstart_05.b3b133f3.png"},475:function(t,a,e){t.exports=e.p+"assets/img/v5_nano_quickstart_07.26bbea38.png"},476:function(t,a,e){t.exports=e.p+"assets/img/v5_nano_pinouts.adb5edc0.png"}}]);