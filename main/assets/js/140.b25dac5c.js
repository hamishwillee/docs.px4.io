(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{2496:function(t,a,e){"use strict";e.r(a);var s=e(19),_=Object(s.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"cuav-v5-nano-배선-빠른-시작"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cuav-v5-nano-배선-빠른-시작"}},[t._v("#")]),t._v(" CUAV V5 nano 배선 빠른 시작")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("PX4에서는 이 자동 항법 장치를 제조하지 않습니다. 하드웨어 지원이나 호환 문제는 [제조사](https://store.cuav.net/)에 문의하십시오.")])]),t._v(" "),s("p",[t._v("이 설명서는 "),s("RouterLink",{attrs:{to:"/ko/flight_controller/cuav_v5_nano.html"}},[t._v(" CUAV V5 nano")]),t._v(" 비행 콘트롤러의 전원 공급 방법과 주요 주변 장치 연결 방법을 설명합니다.")],1),t._v(" "),s("p",[s("img",{attrs:{src:e(361),alt:"Nano Hero Image"}})]),t._v(" "),s("h2",{attrs:{id:"배선-개요"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#배선-개요"}},[t._v("#")]),t._v(" 배선 개요")]),t._v(" "),s("p",[t._v("아래의 이미지는 주요 센서와 주변 장치(모터 및 서보 출력 제외)들의 연결 방법을 설명합니다. 다음 섹션에서 각 장치에 대하여 자세히 설명합니다.")]),t._v(" "),s("p",[s("img",{attrs:{src:e(519),alt:"퀵 스타트"}})]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("인터페이스")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("기능")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("전원")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("전원 모듈을 연결하십시오. 전력 및 ANALOG 전압 및 전류 측정을 제공합니다.")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("PM2")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("RouterLink",{attrs:{to:"/ko/flight_controller/cuav_v5_nano.html#compatibility_pm2"}},[t._v("PX4와 함께 사용하지 마십시오.")])],1)]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("TF CARD")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("로그 저장용 SD 카드 (카드와 함께 제공)")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("M1~M8")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("PWM 출력 모터와 서보를 콘트롤 합니다.")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("A1~A3")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("캡처 핀 (PX4에서 "),s("em",[t._v("현재")]),t._v(" 지원되지 않음).")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("nARMED")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("FMU 시동 상태를 나타냅니다. 액티브 로우 (시동시 낮음)입니다.")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("DSU7")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("FMU 디버그에 사용되며 디버그 정보를 획득합니다.")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("I2C2/I2C3/I2C4")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("외부 나침반과 같은 I2C 장치를 연결합니다.")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("CAN1/CAN2")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("CAN GPS와 같은 UAVCAN 장치를 연결합니다.")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("TYPE-C(USB)")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("펌웨어 업로드 등의 작업시에 비행 콘트롤러와 컴퓨터를 연결합니다.")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("GPS & SAFETY")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("GPS, 안전 스위치 및 부저가 포함된 Neo GPS에 연결합니다.")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("TELEM1/TELEM2")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("텔레메트리에 연결합니다.")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("DSM/SBUS/RSSI")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("DSM, SBUS, RSSI 신호 입력 인터페이스, DSM 인터페이스는 DSM 위성 수신기에 연결 가능, SBUS 인터페이스는 SBUS 원격 제어 수신기에 연결 가능, 신호 강도 반환 모듈용 RSSI 포함.")])])])]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("자세한 인터페이스는 "),s("a",{attrs:{href:"http://manual.cuav.net/V5-nano.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("V5 nano 매뉴얼"),s("OutboundLink")],1),t._v("을 참고하십시오.")])]),t._v(" "),s("p",[s("img",{attrs:{src:e(520),alt:"퀵 스타트"}})]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("If the controller cannot be mounted in the recommended/default orientation (e.g. due to space constraints) you will need to configure the autopilot software with the orientation that you actually used: "),s("RouterLink",{attrs:{to:"/ko/gps_compass/rtk_gps.html"}},[t._v("Flight Controller Orientation")]),t._v(".")],1)]),t._v(" "),s("h2",{attrs:{id:"gps-나침반-안전-스위치-led"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gps-나침반-안전-스위치-led"}},[t._v("#")]),t._v(" GPS + 나침반 + 안전 스위치 + LED")]),t._v(" "),s("p",[t._v("권장 GPS 모듈은 GPS, 나침반, 안전 스위치, 부저 및 LED가 포함된 "),s("em",[t._v("Neo v2 GPS")]),t._v("입니다.")]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("다른 GPS 모듈은 작동하지 않을 수 있습니다 ("),s("RouterLink",{attrs:{to:"/ko/flight_controller/cuav_v5_nano.html#compatibility_gps"}},[t._v("호환성 문제")]),t._v(" 참조).")],1)]),t._v(" "),s("p",[t._v("The GPS/Compass module should be "),s("RouterLink",{attrs:{to:"/ko/assembly/mount_gps_compass.html"}},[t._v("mounted on the frame")]),t._v(" as far away from other electronics as possible, with the direction marker towards the front of the vehicle (Neo GPS arrow is in the same direction as the flight control arrow). 케이블을 사용하여 비행 제어 GPS에 연결합니다.")],1),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("CAN GPS를 사용하는 경우 케이블을 사용하여 비행 제어 CAN 인터페이스에 연결하십시오.")])]),t._v(" "),s("p",[s("img",{attrs:{src:e(521),alt:"퀵 스타트"}})]),t._v(" "),s("h2",{attrs:{id:"안전-스위치"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#안전-스위치"}},[t._v("#")]),t._v(" 안전 스위치")]),t._v(" "),s("p",[t._v("V5+에 제공되는 전용 안전 스위치는 권장 "),s("em",[t._v("Neo v2 GPS")]),t._v(" (안전 스위치 내장)를 사용하지 않는 경우에만 사용합니다.")]),t._v(" "),s("p",[t._v("GPS 없이 비행시에는 차량 시동 스위치를 "),s("code",[t._v("GPS1")]),t._v(" 포트에 직접 연결하여야합니다 (이전 6 핀 GPS를 사용하는 경우에는,  라인 변경에 관련된 하단 인터페이스 매뉴얼을 참고하십시오).")]),t._v(" "),s("h2",{attrs:{id:"부저"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#부저"}},[t._v("#")]),t._v(" 부저")]),t._v(" "),s("p",[t._v("권장 "),s("em",[t._v("Neo v2 GPS")]),t._v("를 사용하지 않으면, 부저가 작동하지 않을 수 있습니다.")]),t._v(" "),s("h2",{attrs:{id:"무선-조종"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#무선-조종"}},[t._v("#")]),t._v(" 무선 조종")]),t._v(" "),s("p",[t._v("차량을 수동 제어에는 무선 조종기가 필요합니다. PX4의 자율 비행은 무선조종기가 필수 사항은 아닙니다. 기체와 조종자가 통신하기 위하여 송신기와 수신기를 바인딩하여야 합니다. 송신기와 수신기의 매뉴얼을 참고하십시오.")]),t._v(" "),s("p",[t._v("아래 그림은 원격 수신기에 액세스하는 방법을 보여줍니다 (키트에서 S.BUS 케이블을 찾으십시오)")]),t._v(" "),s("p",[s("img",{attrs:{src:e(522),alt:"퀵 스타트"}})]),t._v(" "),s("h2",{attrs:{id:"spektrum-satellite-수신기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#spektrum-satellite-수신기"}},[t._v("#")]),t._v(" Spektrum Satellite 수신기")]),t._v(" "),s("p",[t._v("V5 nano에는 전용 DSM 케이블이 있습니다. Spektrum 위성 수신기는 비행 컨트롤러 DSM/SBUS/RSSI 인터페이스에 연결하여야합니다.")]),t._v(" "),s("h2",{attrs:{id:"전원"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#전원"}},[t._v("#")]),t._v(" 전원")]),t._v(" "),s("p",[t._v("V5 nano키트에는 2~14S LiPo 배터리를 지원하는 "),s("em",[t._v("HV\\ _PM")]),t._v(" 모듈이 포함되어 있습니다. "),s("em",[t._v("HW_PM")]),t._v(" 모듈의 6 핀 커넥터를 비행 제어 "),s("code",[t._v("Power1")]),t._v(" 인터페이스에 연결합니다.")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("제공된 전원 모듈은 퓨즈가 없습니다. 주변 장치를 연결하는 동안 전원을 "),s("strong",[t._v("반드시")]),t._v(" 꺼야 합니다.")])]),t._v(" "),s("p",[s("img",{attrs:{src:e(429),alt:"퀵 스타트"}})]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("전원 모듈은 PWM 출력에 연결된 주변 장치에 전원 자체를 공급하지 않습니다.\n서보/액추에이터를 연결하는 경우에는 BEC를 사용하여 별도로 전원을 공급하여야 합니다.")])]),t._v(" "),s("h2",{attrs:{id:"텔레메트리-선택-사항"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#텔레메트리-선택-사항"}},[t._v("#")]),t._v(" 텔레메트리(선택 사항)")]),t._v(" "),s("p",[t._v("지상국에서는 텔레메트리를 사용하여 기체를 통신, 모니터링, 제어 합니다. 기체를 특정 위치로 움직이도록 지시하거나, 새로운 임무를 업로드할 수 있습니다.")]),t._v(" "),s("p",[t._v("통신 채널은 텔레메트리를 통하여 이루어집니다. 차량 기반 라디오는 "),s("strong",[t._v("TELEM1")]),t._v(" 또는 "),s("strong",[t._v("TELEM2")]),t._v(" 포트에 연결합니다. 이 포트에 연결되어있는 경우에는 추가 설정이 필요하지 않습니다. 다른 라디오는 지상국 컴퓨터 또는 모바일 장치에 USB를 통하여 연결합니다.")]),t._v(" "),s("p",[s("img",{attrs:{src:e(523),alt:"퀵 스타트"}})]),t._v(" "),s("p",[s("a",{attrs:{id:"sd_card"}})]),t._v(" "),s("h2",{attrs:{id:"sd-카드-선택-사항"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sd-카드-선택-사항"}},[t._v("#")]),t._v(" SD 카드(선택 사항)")]),t._v(" "),s("p",[t._v("An "),s("RouterLink",{attrs:{to:"/ko/getting_started/px4_basic_concepts.html#sd-cards-removable-memory"}},[t._v("SD card")]),t._v(" is inserted in the factory (you do not need to do anything).")],1),t._v(" "),s("h2",{attrs:{id:"모터"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#모터"}},[t._v("#")]),t._v(" 모터")]),t._v(" "),s("p",[t._v("모터/서보는 "),s("RouterLink",{attrs:{to:"/ko/airframes/airframe_reference.html"}},[t._v("기체 규격")]),t._v("에 지정된 순서대로 MAIN 및 AUX 포트에 연결됩니다.")],1),t._v(" "),s("p",[s("img",{attrs:{src:e(429),alt:"퀵 스타트"}})]),t._v(" "),s("h2",{attrs:{id:"핀배열"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#핀배열"}},[t._v("#")]),t._v(" 핀배열")]),t._v(" "),s("p",[s("img",{attrs:{src:e(524),alt:"V5 nano pinouts"}})]),t._v(" "),s("h2",{attrs:{id:"추가-정보"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#추가-정보"}},[t._v("#")]),t._v(" 추가 정보")]),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/ko/frames_multicopter/dji_f450_cuav_5nano.html"}},[t._v("DJI FlameWheel450 CUAV v5 nano 기체 조립 방법")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/ko/flight_controller/cuav_v5_nano.html"}},[t._v("CUAV V5 nano")])],1),t._v(" "),s("li",[s("a",{attrs:{href:"http://manual.cuav.net/V5-nano.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("CUAV V nano 수동"),s("OutboundLink")],1),t._v(" (CUAV)")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://docs.google.com/spreadsheets/d/1-n0__BYDedQrc_2NHqBenG1DNepAgnHpSGglke-QQwY/edit#gid=912976165",target:"_blank",rel:"noopener noreferrer"}},[t._v("FMUv5 기준 설계 핀배열"),s("OutboundLink")],1),t._v(" (CUAV)")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/cuav",target:"_blank",rel:"noopener noreferrer"}},[t._v("CUAV Github"),s("OutboundLink")],1),t._v(" (CUAV)")])])])}),[],!1,null,null,null);a.default=_.exports},361:function(t,a,e){t.exports=e.p+"assets/img/v5_nano_01.3521bdcc.png"},429:function(t,a,e){t.exports=e.p+"assets/img/v5_nano_quickstart_06.34392241.png"},519:function(t,a,e){t.exports=e.p+"assets/img/v5_nano_quickstart_02.d140e43d.png"},520:function(t,a,e){t.exports=e.p+"assets/img/v5_nano_quickstart_03.fe3368b3.png"},521:function(t,a,e){t.exports=e.p+"assets/img/v5_nano_quickstart_04.9fea41bc.png"},522:function(t,a,e){t.exports=e.p+"assets/img/v5_nano_quickstart_05.b3b133f3.png"},523:function(t,a,e){t.exports=e.p+"assets/img/v5_nano_quickstart_07.26bbea38.png"},524:function(t,a,e){t.exports=e.p+"assets/img/v5_nano_pinouts.adb5edc0.png"}}]);