(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{2498:function(t,A,s){"use strict";s.r(A);var e=s(19),o=Object(e.a)({},(function(){var t=this,A=t.$createElement,e=t._self._c||A;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"큐브-배선-개요"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#큐브-배선-개요"}},[t._v("#")]),t._v(" 큐브 배선 개요")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("PX4에서는 이 자동 항법 장치를 제조하지 않습니다. 하드웨어 지원이나 호환 문제는 [제조사](https://cubepilot.org/#/home)에 문의하십시오.")]),t._v(" "),e("p",[t._v("Note also that while "),e("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk-2.html"}},[t._v("Cube Black")]),t._v(" is "),e("RouterLink",{attrs:{to:"/ko/flight_controller/autopilot_pixhawk_standard.html"}},[t._v("fully supported by PX4")]),t._v(", "),e("RouterLink",{attrs:{to:"/ko/flight_controller/cubepilot_cube_yellow.html"}},[t._v("Cube Yellow")]),t._v(" and "),e("RouterLink",{attrs:{to:"/ko/flight_controller/cubepilot_cube_orange.html"}},[t._v("Cube Orange")]),t._v(" are "),e("RouterLink",{attrs:{to:"/ko/flight_controller/autopilot_manufacturer_supported.html"}},[t._v("Manufacturer Supported")]),t._v(".")],1)]),t._v(" "),e("p",[e("em",[t._v("Cube")]),e("sup",[t._v("®")]),t._v(" 비행 콘트롤러의 전원 공급 방법과 주요 주변 장치 연결방법에 대하여 설명합니다.")]),t._v(" "),e("p",[e("img",{attrs:{src:s(343),width:"350px"}}),t._v(" "),e("img",{attrs:{src:s(362),width:"350px"}}),t._v(" "),e("img",{attrs:{src:s(363),width:"150px"}})]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("이 설명서는 "),e("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk-2.html"}},[t._v("큐브 블랙")]),t._v(", "),e("RouterLink",{attrs:{to:"/ko/flight_controller/cubepilot_cube_yellow.html"}},[t._v("큐브 옐로우")]),t._v(" 및 "),e("RouterLink",{attrs:{to:"/ko/flight_controller/cubepilot_cube_orange.html"}},[t._v("큐브 오렌지")]),t._v("를 포함한 모든 큐브 변형에 대하여 적용됩니다. 추가 업데이트 정보는 "),e("a",{attrs:{href:"https://docs.cubepilot.org/user-guides/autopilot/the-cube-user-manual",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cube 사용 설명서"),e("OutboundLink")],1),t._v(" (Cube 문서)를 참고하십시오.")],1)]),t._v(" "),e("h2",{attrs:{id:"액세서리"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#액세서리"}},[t._v("#")]),t._v(" 액세서리")]),t._v(" "),e("p",[t._v("큐브는 "),e("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk-2.html#stores"}},[t._v("구매 시")]),t._v("필요한 부속품의 전체 또는 대부분이 함께 제공됩니다.")],1),t._v(" "),e("p",[e("img",{attrs:{src:s(525),alt:"큐브 액세서리"}})]),t._v(" "),e("p",[t._v("예외적으로 GPS 별도 구매가 필요한 키트가 있을 수 있습니다 ("),e("a",{attrs:{href:"#gps"}},[t._v("아래를 참고하십시오")]),t._v(").")]),t._v(" "),e("h2",{attrs:{id:"배선-개요"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#배선-개요"}},[t._v("#")]),t._v(" 배선 개요")]),t._v(" "),e("p",[t._v("아래 그림은 주요 센서와 주변기기 연결 방법을 설명합니다. 다음 섹션에서 각 장치에 대해 자세히 설명합니다.")]),t._v(" "),e("p",[e("img",{attrs:{src:s(526),alt:"큐브 - 배선 개요"}})]),t._v(" "),e("ol",[e("li",[e("a",{attrs:{href:"#telemetry"}},[t._v("텔레메트리 시스템")]),t._v(" — 실시간으로 기체를 제어/모니터링하고, 미션을 계획/실행합니다. 일반적으로 텔레메트리 라디오, 태블릿/PC와 지상국 프로그램이 해당합니다.")]),t._v(" "),e("li",[e("a",{attrs:{href:"#buzzer"}},[t._v("버저")]),t._v(" — 기체의 동작을 나타내는 오디오 신호를 제공합니다.")]),t._v(" "),e("li",[e("a",{attrs:{href:"#rc_control"}},[t._v("원격 제어 수신기")]),t._v(" — 조종사가 기체를 수동으로 조작하는 휴대용 송신기에 연결합니다 (그림은 PWM->PPM 변환기를 장착한 PWM 수신기입니다).")]),t._v(" "),e("li",[t._v("(전용) "),e("a",{attrs:{href:"#safety-switch"}},[t._v("안전 스위치")]),t._v(" — 버튼을 눌러 모터를 잠금거나 해제합니다. 내장 안전 스위치가 포함된 권장 "),e("a",{attrs:{href:"#gps"}},[t._v("GPS")]),t._v("를 사용하지 않는 경우에만 필요합니다.")]),t._v(" "),e("li",[e("a",{attrs:{href:"#gps"}},[t._v("GPS, 나침반, LED, 안전 스위치")]),t._v(" — 권장 GPS 모듈은 GPS, 나침반, LED, 그리고 안전 스위치로 구성됩니다.")]),t._v(" "),e("li",[e("a",{attrs:{href:"#power"}},[t._v("전원 시스템")]),t._v(" — Cube 및 모터 ESC에 전원을 공급합니다. LiPo 배터리,전원 모듈, 그리고 추가 배터리 경고 시스템 (배터리 전원이 설정된 전압보다 낮을 때 경고음)으로 구성됩니다.")])]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[e("code",[t._v("GPS2")]),t._v("로 표시된 포트는 PX4에서 "),e("code",[t._v("TEL4")]),t._v("에 매핑됩니다 (즉, "),e("code",[t._v("GPS2")]),t._v("로 표시된 포트에 연결하는 경우,  "),e("code",[t._v("TEL4")]),t._v("에 연결된 "),e("RouterLink",{attrs:{to:"/ko/peripherals/serial_configuration.html"}},[t._v("직렬 포트 구성 매개 변수")]),t._v("를 설정하여야합니다).")],1)]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("사용 가능한 포트에 대한 자세한 내용은 "),e("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk-2.html#ports"}},[t._v("Cube>Ports")]),t._v("을 참고하십시오.")],1)]),t._v(" "),e("h2",{attrs:{id:"콘트롤러-장착-및-장착-방향"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#콘트롤러-장착-및-장착-방향"}},[t._v("#")]),t._v(" 콘트롤러 장착 및 장착 방향")]),t._v(" "),e("p",[t._v("Cube를 가능한 (이상적으로는) 윗면이 위로 향하도록 하여 기체의 무게 중심에 가까운 위치에, 그리고 화살표를 기체의 앞면을 가르키도록 장착하십시오 (큐브 윗면에 그려진 "),e("em",[t._v("화살표 마크")]),t._v("를 참고하십시오).")]),t._v(" "),e("p",[e("img",{attrs:{src:s(527),alt:"Cube 장착 - 전면 방향"}})]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[t._v("콘트롤러를 권장 기본 방향으로 장착 할 수 없는 경우(예 : 공간 제약으로 인해) 실제 장착 방향을 자동항법장치 프로그램에서 설정하여야합니다. "),e("RouterLink",{attrs:{to:"/ko/config/flight_controller_orientation.html"}},[t._v("비행 콘트롤러 방향")])],1)]),t._v(" "),e("p",[t._v("Cube를 (키트에 포함된) 진동 감쇠 폼 패드 또는 장착 나사를 사용해 장착할 수 있습니다. Cube 액세서리에 포함된 장착 1.8mm 두께의 프레임보드 전용으로 설계되었습니다. 커스텀 나사는 나사산 길이가 6mm~7.55mm인 M2.5 나사여야 합니다.")]),t._v(" "),e("p",[e("img",{attrs:{src:s(528),alt:"Cube 마운트 - 장착 플레이트"}})]),t._v(" "),e("p",[e("a",{attrs:{id:"gps"}})]),t._v(" "),e("h2",{attrs:{id:"gps-나침반-안전-스위치-led"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gps-나침반-안전-스위치-led"}},[t._v("#")]),t._v(" GPS + 나침반 + 안전 스위치 + LED")]),t._v(" "),e("p",[t._v("권장되는 GPS 모듈은 "),e("em",[t._v("Here")]),t._v(" 및 "),e("RouterLink",{attrs:{to:"/ko/gps_compass/rtk_gps_hex_hereplus.html"}},[t._v("Here+")]),t._v("이며, 둘 다 GPS 모듈, 나침반, 안전 스위치 및 "),e("RouterLink",{attrs:{to:"/ko/getting_started/led_meanings.html"}},[t._v("LED")]),t._v("를 통합합니다. The difference between the modules is that "),e("em",[t._v("Here+")]),t._v(" supports centimeter level positioning via "),e("RouterLink",{attrs:{to:"/ko/gps_compass/rtk_gps.html"}},[t._v("RTK")]),t._v(". RTK 지원을 제외하면, 두 모듈의 연결 방법은 같습니다.")],1),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("The "),e("RouterLink",{attrs:{to:"/ko/gps_compass/rtk_gps_hex_hereplus.html"}},[t._v("Here+")]),t._v(" has been superseded by the "),e("a",{attrs:{href:"https://www.cubepilot.org/#/here/here3",target:"_blank",rel:"noopener noreferrer"}},[t._v("Here3"),e("OutboundLink")],1),t._v(" a "),e("RouterLink",{attrs:{to:"/ko/dronecan/"}},[t._v("DroneCAN")]),t._v(" RTK-GNSS that incorporate a compass and "),e("RouterLink",{attrs:{to:"/ko/getting_started/led_meanings.html"}},[t._v("LEDs")]),t._v(" (but no safety switch). See "),e("RouterLink",{attrs:{to:"/ko/dronecan/"}},[t._v("DroneCAN")]),t._v(" for "),e("em",[t._v("Here3")]),t._v(" wiring and PX4 configuration information.")],1)]),t._v(" "),e("p",[t._v("GPS/나침반은 차량 전방 표식를 사용하여 가능하면 전자 장치들에서 멀리 떨어진 프레임에 장착하는 것이 좋습니다. 나침반은 다른 전자 장치와 떨어지면 간섭이 줄어듦니다. 제공된 8핀 케이블을 사용하여 "),e("code",[t._v("GPS1")]),t._v(" 포트에 연결합니다..")]),t._v(" "),e("p",[t._v("아래의 다이어그램은 모듈 연결의 개요를 나타냅니다.")]),t._v(" "),e("p",[e("img",{attrs:{src:s(529),alt:"Here+ 연결 다이어그램"}})]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("GPS")]),t._v(" "),e("p",[t._v("모듈의 통합 안전 스위치는 "),e("em",[t._v("기본적으로")]),t._v(" 활성화되어 있습니다. 활성화되면 PX4는 차량 시동을 걸 수 없습니다. 비활성화하려면 안전 스위치를 1초간 길게 누르십시오. 안전 스위치를 다시 눌러 안전 장치를 활성화하고 기체 시동을 끌 수 있습니다. 조종기나 지상국 프로그램에서 기체 시동을 끌 수 없는 상황에서 유용합니다.")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("구형 6핀 GPS 모듈을 사용하려면, GPS와 "),e("a",{attrs:{href:"#safety-switch"}},[t._v("안전 스위치")]),t._v("를 모두 연결하는 데 사용할 수 있는 케이블이 키트에 함께 제공됩니다.")])]),t._v(" "),e("h2",{attrs:{id:"안전-스위치"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#안전-스위치"}},[t._v("#")]),t._v(" 안전 스위치")]),t._v(" "),e("p",[t._v("Cube와 함께 구성된 "),e("em",[t._v("전용")]),t._v(" 안전 스위치는 (내장 안전 스위치를 포함한) 권장 "),e("a",{attrs:{href:"#gps"}},[t._v("GPS")]),t._v("를 사용하지 않을 경우에만 사용합니다.")]),t._v(" "),e("p",[t._v("GPS 없이 비행하는 경우, 기체에 시동을 걸고 비행하기 위해 안전 스위치는 반드시 "),e("code",[t._v("GPS1")]),t._v(" 포트(또는 구형 6핀 케이블 사용시 제공된 케이블을 통해)에 장착되어어야 합니다.")]),t._v(" "),e("h2",{attrs:{id:"버저"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#버저"}},[t._v("#")]),t._v(" 버저")]),t._v(" "),e("p",[t._v("부저는 차량 상태(시동 문제 디버깅에 도움이 되고 차량의 안전한 작동에 영향을 미칠 수 있는 상태를 알리는 신호음 포함)에 대한 가청 알림을 제공하는 "),e("RouterLink",{attrs:{to:"/ko/getting_started/tunes.html"}},[t._v("음 및 조정")]),t._v("을 재생합니다.")],1),t._v(" "),e("p",[t._v("버저는 아래와 같이 USB포트에 연결합니다. 추가 설정은 필요하지 않습니다.")]),t._v(" "),e("p",[e("img",{attrs:{src:s(530),alt:"Cube 버저"}})]),t._v(" "),e("p",[e("a",{attrs:{id:"rc_control"}})]),t._v(" "),e("h2",{attrs:{id:"라디오-콘트롤"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#라디오-콘트롤"}},[t._v("#")]),t._v(" 라디오 콘트롤")]),t._v(" "),e("p",[t._v("무선 조종기는 기체 "),e("em",[t._v("수동")]),t._v("제어시에 사용합니다 (PX4에는 자율 비행 모드에서는 무선 조종기가 필수는 아닙니다).")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/ko/getting_started/rc_transmitter_receiver.html"}},[t._v("호환되는 송신기/수신기를 선택")]),t._v("후 "),e("em",[t._v("바인딩")]),t._v("을 하여야 통신이 가능합니다. 송신기/수신기의 매뉴얼을 참고하십시오.")],1),t._v(" "),e("p",[t._v("아래의 지침은 다양한 유형의 수신기를 연결하는 방법을 설명합니다.")]),t._v(" "),e("h3",{attrs:{id:"ppm-sum-futaba-s-bus-수신기"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ppm-sum-futaba-s-bus-수신기"}},[t._v("#")]),t._v(" PPM-SUM / Futaba S.Bus 수신기")]),t._v(" "),e("p",[t._v("제공된 3선식 서보 케이블을 사용하여 접지(-), 전원(+) 및 신호(S) 선을 RC 핀에 연결합니다.")]),t._v(" "),e("p",[e("img",{attrs:{src:s(531),alt:"Cube - RCIN"}})]),t._v(" "),e("h3",{attrs:{id:"spektrum-위성-수신기"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#spektrum-위성-수신기"}},[t._v("#")]),t._v(" Spektrum 위성 수신기")]),t._v(" "),e("p",[t._v("Spektrum DSM, DSM2 및 DSM-X Satellite RC 수신기는 "),e("strong",[t._v("SPKT/DSM")]),t._v(" 포트에 연결합니다.")]),t._v(" "),e("p",[e("img",{attrs:{src:s(532),alt:"Cube - Spektrum"}})]),t._v(" "),e("h3",{attrs:{id:"pwm-수신기"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pwm-수신기"}},[t._v("#")]),t._v(" PWM 수신기")]),t._v(" "),e("p",[t._v("Cube는 "),e("em",[t._v("각 채널에 개별 배선")]),t._v("이 있는 PPM 또는 PWM 수신기에 직접 연결할 수 없습니다. 그러므로, PWM 수신기는 hex.aero 또는 proficnc.com에서 판매하는 PPM 인코더 모듈을 "),e("em",[t._v("사용하여")]),t._v(" "),e("strong",[t._v("RCIN")]),t._v(" 포트에 연결하여야 합니다.")]),t._v(" "),e("h2",{attrs:{id:"전원"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#전원"}},[t._v("#")]),t._v(" 전원")]),t._v(" "),e("p",[t._v("Cube는 일반적으로 "),e("strong",[t._v("POWER1")]),t._v(" 포트에 연결된 전원 모듈(키트와 함께 제공됨)을 통하여 리튬 이온 폴리머(LiPo) 배터리에서 전원을 공급합니다. 전원 모듈은 보드에 안정적인 공급 및 전압/전류 표시하며, 멀티콥터에서 모터를 구동하는 ESC에 전원을 "),e("em",[t._v("별도")]),t._v("로 공급할 수 있습니다.")]),t._v(" "),e("p",[t._v("멀티콥터의 일반적인 전원 설정은 다음과 같습니다.")]),t._v(" "),e("p",[e("img",{attrs:{src:s(533),alt:"전원 설정 - 멀티콥터"}})]),t._v(" "),e("p",[t._v(":::Note ** MAIN / AUX **의 핀 전원 (+) 레일은 비행 콘트롤러에 대한 전원 모듈 공급으로 전원이 공급되지 않습니다. 방향타, 엘레본 등의 서보를 구동하려면 별도로 전원을 공급하여야 합니다.")]),t._v(" "),e("p",[t._v("이것은 BEC가 장착된 ESC, 독립형 5V BEC 또는 2S LiPo 배터리에 전원 레일을 연결하여 수행할 수 있습니다. 사용하는 서보의 전압을 확인하십시오!\n:::")]),t._v(" "),e("p",[e("a",{attrs:{id:"telemetry"}})]),t._v(" "),e("h2",{attrs:{id:"텔레메트리-시스템-선택-사항"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#텔레메트리-시스템-선택-사항"}},[t._v("#")]),t._v(" 텔레메트리 시스템 (선택 사항)")]),t._v(" "),e("p",[t._v("지상국에서는 텔레메트리를 사용하여 기체를 통신, 모니터링, 제어 합니다. 기체를 특정 위치로 움직이도록 지시하거나, 새로운 임무를 업로드할 수 있습니다.")]),t._v(" "),e("p",[t._v("통신 채널은 "),e("RouterLink",{attrs:{to:"/ko/telemetry/"}},[t._v("무선 텔레메트리")]),t._v("를 사용합니다. 차량 기반 라디오는 "),e("strong",[t._v("TELEM1")]),t._v(" 포트에 연결하여야 합니다(이 포트에 연결된 경우 추가 설정이 필요하지 않음). 다른 텔레메트리는 일반적으로 지상국 컴퓨터나 모바일 장치에 USB를 통하여 연결합니다.")],1),t._v(" "),e("p",[e("img",{attrs:{src:s(534),alt:"무선 텔레메트리"}})]),t._v(" "),e("h2",{attrs:{id:"sd-카드-선택-사항"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sd-카드-선택-사항"}},[t._v("#")]),t._v(" SD 카드 (선택 사항)")]),t._v(" "),e("p",[t._v("SD 카드는 "),e("RouterLink",{attrs:{to:"/ko/getting_started/flight_reporting.html"}},[t._v("비행 세부 정보를 기록 및 분석")]),t._v("하고, 임무를 수행하고, UAVCAN 버스 하드웨어를 사용하는 데 필요하므로 사용하는 것이 좋습니다. Micro-SD 카드를 그림과 같이 Cube에 삽입합니다(아직 없는 경우).")],1),t._v(" "),e("p",[e("img",{attrs:{src:s(535),alt:"Cube - SDCard 장착"}})]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("For more information see "),e("RouterLink",{attrs:{to:"/ko/getting_started/px4_basic_concepts.html#sd-cards-removable-memory"}},[t._v("Basic Concepts > SD Cards (Removable Memory)")]),t._v(".")],1)]),t._v(" "),e("h2",{attrs:{id:"모터"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#모터"}},[t._v("#")]),t._v(" 모터")]),t._v(" "),e("p",[t._v("모터/서보는 "),e("RouterLink",{attrs:{to:"/ko/airframes/airframe_reference.html"}},[t._v("기체 정의서")]),t._v("에서 차량에 지정된 순서대로 "),e("strong",[t._v("MAIN")]),t._v("와 "),e("strong",[t._v("AUX")]),t._v(" 포트에 연결합니다.")],1),t._v(" "),e("p",[e("img",{attrs:{src:s(536),alt:"Cube - 모터 연결"}})]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[t._v('이 참고사항은 모든 지원되는 기체 프레임의 출력 포트의 모터/서보 연결 리스트입니다 (만약 프레임이 참고사항에 기재되어 있지 않다면, 올바른 유형의 "일반" 프레임을 사용하십시오).')])]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("The mapping is not consistent across frames (e.g. you can't rely on the throttle being on the same output for all plane frames). 해당 기체의 프레임의  정확한 모터 연결 여부를 확인하십시오.")])]),t._v(" "),e("h2",{attrs:{id:"기타-주변-장치"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#기타-주변-장치"}},[t._v("#")]),t._v(" 기타 주변 장치")]),t._v(" "),e("p",[t._v("자주 사용하지 않는 부품들의 배선과 조립 방법은 개별 "),e("RouterLink",{attrs:{to:"/ko/peripherals/"}},[t._v("주변 장치")]),t._v("를 참고하십시오.")],1),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[t._v("주변 장치를 "),e("code",[t._v("GPS2")]),t._v("로 표시된 포트에 연결하는 경우 하드웨어의 PX4 "),e("RouterLink",{attrs:{to:"/ko/peripherals/serial_configuration.html"}},[t._v("직렬 포트 구성 매개 변수")]),t._v("를 "),e("code",[t._v("TEL4")]),t._v(" (GPS2 아님)에 할당합니다.")],1)]),t._v(" "),e("h2",{attrs:{id:"설정"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#설정"}},[t._v("#")]),t._v(" 설정")]),t._v(" "),e("p",[e("a",{attrs:{href:"http://qgroundcontrol.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGroundContro"),e("OutboundLink")],1),t._v("를 사용하여 설정합니다.")]),t._v(" "),e("p",[e("em",[t._v("QGroundControl")]),t._v("을 다운로드, 설치 및 실행한 후 그림과 같이 보드를 컴퓨터에 연결합니다.")]),t._v(" "),e("p",[e("img",{attrs:{src:s(537),alt:"Cube - 컴퓨터 USB 연결"}})]),t._v(" "),e("p",[t._v("더 자세한 설정 정보는 "),e("RouterLink",{attrs:{to:"/ko/config/"}},[t._v("자동비행장치 설정")]),t._v("을 참고하십시오.")],1),t._v(" "),e("p",[t._v("QuadPlane에 대한 자세한 설정 방법은 "),e("RouterLink",{attrs:{to:"/ko/config_vtol/vtol_quad_configuration.html"}},[t._v("QuadPlane VTOL 설정")]),t._v("을 참고하십시오.")],1),t._v(" "),e("h3",{attrs:{id:"부트로더-업데이트"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#부트로더-업데이트"}},[t._v("#")]),t._v(" 부트로더 업데이트")]),t._v(" "),e("p",[t._v("PX4 펌웨어를 플래시한 후 [Program PX4IO(../getting_started/tunes.md#program-px4io) 경고음이 발생하면, 부트로더를 업데이트해야 할 수 있습니다.")]),t._v(" "),e("p",[t._v("안전 스위치를 사용하여 강제로 부트로더를 업데이트할 수 있습니다. 이 기능을 사용하려면 Cube의 전원을 차단하려면, 안전 스위치를 누른 상태에서 USB를 통해 Cube에 전원을 공급하십시오.")]),t._v(" "),e("h2",{attrs:{id:"추가-정보"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#추가-정보"}},[t._v("#")]),t._v(" 추가 정보")]),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk-2.html"}},[t._v("Cube Black")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/ko/flight_controller/cubepilot_cube_yellow.html"}},[t._v("Cube Yellow")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/ko/flight_controller/cubepilot_cube_orange.html"}},[t._v("Cube Orange")])],1),t._v(" "),e("li",[t._v("Cube 문서 (제조사) :\n"),e("ul",[e("li",[e("a",{attrs:{href:"https://docs.cubepilot.org/user-guides/autopilot/the-cube-module-overview",target:"_blank",rel:"noopener noreferrer"}},[t._v("큐브 모듈 개요"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://docs.cubepilot.org/user-guides/autopilot/the-cube-user-manual",target:"_blank",rel:"noopener noreferrer"}},[t._v("큐브 사용 설명서"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://docs.cubepilot.org/user-guides/carrier-boards/mini-carrier-board",target:"_blank",rel:"noopener noreferrer"}},[t._v("미니 캐리어 보드"),e("OutboundLink")],1)])])])])])}),[],!1,null,null,null);A.default=o.exports},343:function(t,A,s){t.exports=s.p+"assets/img/cube_orange_hero.944ff463.jpg"},362:function(t,A,s){t.exports=s.p+"assets/img/cube_black_hero.6173ab1f.png"},363:function(t,A,s){t.exports=s.p+"assets/img/cube_yellow_hero.77cbe270.jpg"},525:function(t,A,s){t.exports=s.p+"assets/img/cube_accessories.5c003f6c.jpg"},526:function(t,A,s){t.exports=s.p+"assets/img/cube_wiring_overview.908b84aa.jpg"},527:function(t,A,s){t.exports=s.p+"assets/img/cube_mount_front.2ff12fe0.jpg"},528:function(t,A){t.exports="data:image/jpeg;base64,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"},529:function(t,A,s){t.exports=s.p+"assets/img/here_plus_connector.e4b10b83.png"},530:function(t,A,s){t.exports=s.p+"assets/img/cube_buzzer.eaf96c03.jpg"},531:function(t,A,s){t.exports=s.p+"assets/img/cube_rc_in.be909e23.jpg"},532:function(t,A,s){t.exports=s.p+"assets/img/cube_rc_spektrum.15cc6fdb.jpg"},533:function(t,A,s){t.exports=s.p+"assets/img/cube_wiring_power_mc.be5618ec.jpg"},534:function(t,A,s){t.exports=s.p+"assets/img/cube_schematic_telemetry.7f01aeec.jpg"},535:function(t,A,s){t.exports=s.p+"assets/img/cube_sdcard.47a5273b.jpg"},536:function(t,A,s){t.exports=s.p+"assets/img/cube_main_aux_outputs.7c0c77b8.jpg"},537:function(t,A,s){t.exports=s.p+"assets/img/cube_usb_connection.1aa05e13.jpg"}}]);