(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{1876:function(t,e,s){"use strict";s.r(e);var r=s(18),_=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"큐브-배선-개요"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#큐브-배선-개요"}},[t._v("#")]),t._v(" 큐브 배선 개요")]),t._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[t._v("PX4에서는 이런 종류의 자동 항법 장치를 제조하지는 않습니다. 하드웨어 지원 또는 호환 문제는 [제조사](https://cubepilot.org/#/home)와 상담하십시오.")]),t._v(" "),r("p",[r("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk-2.html"}},[t._v("Cube Black")]),t._v("은 "),r("RouterLink",{attrs:{to:"/ko/flight_controller/autopilot_pixhawk_standard.html"}},[t._v("PX4")]),t._v("에서 완전히 지원되지만, "),r("RouterLink",{attrs:{to:"/ko/flight_controller/cubepilot_cube_yellow.html"}},[t._v("Cube Yellow")]),t._v(" 및 "),r("RouterLink",{attrs:{to:"/ko/flight_controller/cubepilot_cube_orange.html"}},[t._v("Cube Orange ")]),t._v("에 대한 지원은 "),r("RouterLink",{attrs:{to:"/ko/flight_controller/autopilot_experimental.html"}},[t._v("테스트")]),t._v(" 단계입니다.")],1)]),t._v(" "),r("p",[t._v("이 퀵 스타트 설명서는 "),r("em",[t._v("Cube")]),r("sup",[t._v("®")]),t._v(" 비행 컨트롤러에 전원을 공급하고 가장 중요한 주변 장치를 연결하는 방법을 설명합니다.")]),t._v(" "),r("p",[r("img",{attrs:{src:s(343),width:"350px"}}),t._v(" "),r("img",{attrs:{src:s(344),width:"350px"}}),t._v(" "),r("img",{attrs:{src:s(345),width:"150px"}})]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[t._v("지침은 "),r("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk-2.html"}},[t._v("큐브 블랙")]),t._v(", "),r("RouterLink",{attrs:{to:"/ko/flight_controller/cubepilot_cube_yellow.html"}},[t._v("큐브 옐로우")]),t._v(" 및 "),r("RouterLink",{attrs:{to:"/ko/flight_controller/cubepilot_cube_orange.html"}},[t._v("큐브 오렌지")]),t._v("를 포함한 모든 큐브 변형에 적용됩니다. 추가 업데이트 정보는 "),r("a",{attrs:{href:"https://docs.cubepilot.org/user-guides/autopilot/the-cube-user-manual",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cube 사용 설명서"),r("OutboundLink")],1),t._v(" (Cube 문서)에서 확인할 수 있습니다.")],1)]),t._v(" "),r("h2",{attrs:{id:"액세서리"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#액세서리"}},[t._v("#")]),t._v(" 액세서리")]),t._v(" "),r("p",[t._v("큐브는 "),r("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk-2.html#stores"}},[t._v("구매 시")]),t._v("필요한 부속품의 대부분 (또는 전체)이 함께 제공됩니다.")],1),t._v(" "),r("p",[r("img",{attrs:{src:s(512),alt:"큐브 액세서리"}})]),t._v(" "),r("p",[t._v("예외적으로 GPS를 따로 구매해야 하는 GPS를 포함하지 않는 키트가 있습니다 ("),r("a",{attrs:{href:"#gps"}},[t._v("아래를 참고하십시오")]),t._v(").")]),t._v(" "),r("h2",{attrs:{id:"배선-개요"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#배선-개요"}},[t._v("#")]),t._v(" 배선 개요")]),t._v(" "),r("p",[t._v("아래 그림은 중요한 센서와 주변기기를 연결하는 방법에 대해 설명합니다. 다음 섹션에서 각 장치에 대해 자세히 설명합니다.")]),t._v(" "),r("p",[r("img",{attrs:{src:s(513),alt:"큐브 - 배선 개요"}})]),t._v(" "),r("ol",[r("li",[r("a",{attrs:{href:"#telemetry"}},[t._v("텔레메트리 시스템")]),t._v(" — 실시간으로 기체를 제어/모니터링하고, 미션을 계획/실행할 수 있도록 합니다. 일반적으로 텔레메트리 라디오, 태블릿/PC와 지상 통제 장치 프로그램이 해당합니다.")]),t._v(" "),r("li",[r("a",{attrs:{href:"#buzzer"}},[t._v("버저")]),t._v(" — 기체의 동작을 나타내는 오디오 신호를 제공합니다.")]),t._v(" "),r("li",[r("a",{attrs:{href:"#rc_control"}},[t._v("원격 제어 수신기 시스템")]),t._v(" — 조종사가 기체를 수동으로 조작하는 데 사용할 수 있는 휴대용 송신기에 연결합니다 (그림은 PWM->PPM 변환기를 장착한 PWM 수신기입니다).")]),t._v(" "),r("li",[t._v("(전용) "),r("a",{attrs:{href:"#safety_switch"}},[t._v("안전 스위치")]),t._v(" — 버튼을 눌러 모터를 잠금/잠금해제합니다. 내장 안전 스위치가 포함된 권장 "),r("a",{attrs:{href:"#gps"}},[t._v("GPS")]),t._v("를 사용하지 않는 경우에만 필요합니다.")]),t._v(" "),r("li",[r("a",{attrs:{href:"#gps"}},[t._v("GPS, 나침반, LED, 안전 스위치")]),t._v(" — 권장 GPS 모듈은 GPS, 나침반, LED, 그리고 안전 스위치로 구성됩니다.")]),t._v(" "),r("li",[r("a",{attrs:{href:"#power"}},[t._v("전원 시스템")]),t._v(" — Cube 및 모터 ESC에 전원을 공급합니다. LiPo 배터리,전원 모듈, 그리고 추가 배터리 경고 시스템 (배터리 전원이 설정된 전압보다 낮을 때 경고음)으로 구성됩니다.")])]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[r("code",[t._v("GPS2")]),t._v("로 표시된 포트는 PX4에서 "),r("code",[t._v("TEL4")]),t._v("에 매핑됩니다 (즉, "),r("code",[t._v("GPS2")]),t._v("로 표시된 포트에 연결하는 경우, "),r("code",[t._v("TEL4")]),t._v("에 연결된 "),r("RouterLink",{attrs:{to:"/ko/peripherals/serial_configuration.html"}},[t._v("직렬 포트 구성 매개 변수")]),t._v("를 설정하여야합니다).")],1)]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[t._v("사용 가능한 포트에 대한 자세한 내용은 "),r("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk-2.html#ports"}},[t._v("Cube>Ports")]),t._v("에서 찾을 수 있습니다.")],1)]),t._v(" "),r("h2",{attrs:{id:"콘트롤러-장착-및-장착-방향"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#콘트롤러-장착-및-장착-방향"}},[t._v("#")]),t._v(" 콘트롤러 장착 및 장착 방향")]),t._v(" "),r("p",[t._v("Cube를 가능한 (이상적으로는) 윗면이 위로 향하도록 하여 기체의 무게 중심에 가깝게, 그리고 화살표를 기체의 앞면을 가르키도록 장착하십시오 (큐브 윗면에 그려진 "),r("em",[t._v("화살표 마크")]),t._v("를 참고하십시오).")]),t._v(" "),r("p",[r("img",{attrs:{src:s(514),alt:"Cube 장착 - 전면 방향"}})]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("컨트롤러를 권장/기본 방향으로 장착하기 어려운 경우에는 (예 : 공간 제약으로 인해) 실제 장착한 방향을 소프트웨어에 설정하여야 합니다 ( "),r("RouterLink",{attrs:{to:"/ko/config/flight_controller_orientation.html"}},[t._v("기체 콘트롤러 방향 ")]),t._v(" 참고).")],1)]),t._v(" "),r("p",[t._v("Cube를 (키트에 포함된) 진동 감쇠 폼 패드 또는 장착 나사를 사용해 장착할 수 있습니다. Cube 액세서리에 포함된 장착 1.8mm 두께의 프레임보드 전용으로 설계되었습니다. 커스텀 나사는 나사산 길이가 6mm~7.55mm인 M2.5 나사여야 합니다.")]),t._v(" "),r("p",[r("img",{attrs:{src:s(515),alt:"Cube 마운트 - 장착 플레이트"}})]),t._v(" "),r("p",[r("span",{attrs:{id:"gps"}})]),t._v(" "),r("h2",{attrs:{id:"gps-나침반-안전-스위치-led"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#gps-나침반-안전-스위치-led"}},[t._v("#")]),t._v(" GPS + 나침반 + 안전 스위치 + LED")]),t._v(" "),r("p",[t._v("권장되는 GPS모듈은 "),r("em",[t._v("Here")]),t._v("과 "),r("RouterLink",{attrs:{to:"/ko/gps_compass/rtk_gps_hex_hereplus.html"}},[t._v("Here+")]),t._v("입니다. 두 기기 모두 GPS 모듈, 나침반, 안전 스위치 그리고 "),r("RouterLink",{attrs:{to:"/ko/getting_started/led_meanings.html"}},[t._v("LEDs")]),t._v("를 통합한 모듈입니다.")],1),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("두 모듈은 *Here+*는 "),r("RouterLink",{attrs:{to:"/ko/advanced_features/rtk-gps.html"}},[t._v("RTK")]),t._v("를 통한 센티미터 단위의 위치 제어를 제공하는 점이 다릅니다. RTK 지원을 제외하면, 두 모듈은 같은 방식으로 연결됩니다.")],1)]),t._v(" "),r("p",[t._v("모듈은 방향 마커가 기체 앞쪽으로 향하도록 가능한 프레임에서 멀리 장착해야 합니다 (다른 전자 장치와 나침반을 분리하면 간섭이 줄어듭니다). 제공된 8핀 케이블을 사용하여 "),r("code",[t._v("GPS1")]),t._v(" 포트에 연결해야 합니다..")]),t._v(" "),r("p",[t._v("아래의 다이어그램은 모듈과 모듈 연결의 개요를 보여줍니다.")]),t._v(" "),r("p",[r("img",{attrs:{src:s(516),alt:"Here+ 연결 다이어그램"}})]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("GPS")]),t._v(" "),r("p",[t._v("모듈에 내장된 안전 스위치는 "),r("em",[t._v("기본적으로")]),t._v(" 활성화되어 있습니다 (활성화되면 PX4는 차량 시동을 걸 수 없습니다). 비활성화하려면 안전 스위치를 1초간 길게 누르십시오. 안전 스위치를 다시 눌러 안전 장치를 활성화하고 기체 시동을 끌 수 있습니다 (어떤 이유로든 조종기나 지상국 프로그램이 기체 시동을 끌 수 없을 때 유용합니다).")])]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[t._v("구형 6핀 GPS 모듈을 사용하려면, GPS와 "),r("a",{attrs:{href:"#safety_switch"}},[t._v("안전 스위치")]),t._v("를 모두 연결하는 데 사용할 수 있는 케이블이 키트에 함께 제공됩니다.")])]),t._v(" "),r("p",[r("span",{attrs:{id:"safety_switch"}})]),t._v(" "),r("h2",{attrs:{id:"안전-스위치"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#안전-스위치"}},[t._v("#")]),t._v(" 안전 스위치")]),t._v(" "),r("p",[t._v("Cube와 함께 구성된 "),r("em",[t._v("전용")]),t._v(" 안전 스위치는 (내장 안전 스위치를 포함한) 권장 "),r("a",{attrs:{href:"#gps"}},[t._v("GPS")]),t._v("를 사용하지 않을 경우에만 필요합니다.")]),t._v(" "),r("p",[t._v("GPS 없이 비행하는 경우, 기체에 시동을 걸고 비행하기 위해 안전 스위치는 반드시 "),r("code",[t._v("GPS1")]),t._v(" 포트(또는 구형 6핀 케이블 사용시 제공된 케이블을 통해)에 장착되어어야 합니다.")]),t._v(" "),r("h2",{attrs:{id:"버저"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#버저"}},[t._v("#")]),t._v(" 버저")]),t._v(" "),r("p",[t._v("버저는 UAV 상태를 나타내는 소리로 나타냅니다. 버저는 아래와 같이 USB포트에 연결됩니다. (추가 설정은 필요없습니다)")]),t._v(" "),r("p",[r("img",{attrs:{src:s(517),alt:"Cube 버저"}})]),t._v(" "),r("p",[r("span",{attrs:{id:"rc_control"}})]),t._v(" "),r("h2",{attrs:{id:"무선-조종"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#무선-조종"}},[t._v("#")]),t._v(" 무선 조종")]),t._v(" "),r("p",[t._v("무선 조종기는 기체 "),r("em",[t._v("수동")]),t._v("제어시에 사용합니다 (PX4에는 자율 비행 모드에서는 무선 조종기가 필수는 아닙니다).")]),t._v(" "),r("p",[t._v("기체와 조종자가 서로 통신하기 위해 호환되는 송신기/수신기를 선택하고, 송신기와 수신기를 바인드해야 합니다 (송신기와 수신기에 포함된 지시사항을 읽으십시오).")]),t._v(" "),r("p",[t._v("아래 지침은 다양한 유형의 수신기 연결법을 설명합니다.")]),t._v(" "),r("h3",{attrs:{id:"ppm-sum-futaba-s-bus-수신기"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ppm-sum-futaba-s-bus-수신기"}},[t._v("#")]),t._v(" PPM-SUM / Futaba S.Bus 수신기")]),t._v(" "),r("p",[t._v("제공된 3-와이어 서보 케이블로 접지(-), 전원(+) 및 신호(S) 와이어를 RC 핀에 연결합니다.")]),t._v(" "),r("p",[r("img",{attrs:{src:s(518),alt:"Cube - RCIN"}})]),t._v(" "),r("h3",{attrs:{id:"spektrum-위성-수신기"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#spektrum-위성-수신기"}},[t._v("#")]),t._v(" Spektrum 위성 수신기")]),t._v(" "),r("p",[t._v("Spktrum DSM, DSM2 및 DSM-X Satellite RC 수신기는 "),r("strong",[t._v("SPKT/DSM")]),t._v(" 포트에 연결합니다.")]),t._v(" "),r("p",[r("img",{attrs:{src:s(519),alt:"Cube - Spektrum"}})]),t._v(" "),r("h3",{attrs:{id:"pwm-수신기"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pwm-수신기"}},[t._v("#")]),t._v(" PWM 수신기")]),t._v(" "),r("p",[t._v("Cube는 "),r("em",[t._v("각각의 채널이 개별적으로 배선된")]),t._v(" PPM 또는 PWM 수신기에 바로 연결할 수 없습니다. PWM 수신기는 hex.aero 또는 proficnc.com에서 구매할 수 있는 "),r("em",[t._v("PPM 인코더 모듈")]),t._v("을 통해 "),r("strong",[t._v("RCIN")]),t._v("포트에 연결해야 합니다.")]),t._v(" "),r("h2",{attrs:{id:"전원"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#전원"}},[t._v("#")]),t._v(" 전원")]),t._v(" "),r("p",[t._v("Cube는 일반적으로 "),r("strong",[t._v("POWER1")]),t._v(" 포트에 연결된 전원 모듈(키트와 함께 제공)을 통해 리튬 이온 폴리머(LiPo) 배터리에서 전원을 공급받습니다. 전원 모듈은 보드에 안정적인 전원 공급 및 전압/전류 표시를 제공하며 멀티콥터 기체의 모터를 구동하는 데 사용되는 ESC에 개별적으로 전원을 공급할 수 있습니다.")]),t._v(" "),r("p",[t._v("멀티콥터 기체의 일반적인 전원 설정은 다음과 같습니다.")]),t._v(" "),r("p",[r("img",{attrs:{src:s(520),alt:"전원 설정 - MC"}})]),t._v(" "),r("p",[r("span",{attrs:{id:"telemetry"}})]),t._v(" "),r("h2",{attrs:{id:"텔레메트리-시스템-선택-사항"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#텔레메트리-시스템-선택-사항"}},[t._v("#")]),t._v(" 텔레메트리 시스템 (선택 사항)")]),t._v(" "),r("p",[t._v("텔레메트리는 지상국 프로그램에서 비행중인 차량의 통신/제어에 사용할 수 있습니다 (예 : UAV를 특정 위치로 지시하거나 새 임무를 업로드 할 수 있음).")]),t._v(" "),r("p",[t._v("통신 채널은 "),r("RouterLink",{attrs:{to:"/ko/telemetry/"}},[t._v("무선 텔레메트리")]),t._v("를 사용합니다. 기체의 텔레메트리를 "),r("strong",[t._v("TELEM1")]),t._v(" 포트에 연결해야 합니다 (이 포트에 연결된 경우 추가 구성이 필요하지 않음). 다른 무선 장치들은 일반적으로 지상국 컴퓨터나 모바일 장치에 (USB를 통해) 연결됩니다.")],1),t._v(" "),r("p",[r("img",{attrs:{src:s(521),alt:"무선 텔레메트리"}})]),t._v(" "),r("h2",{attrs:{id:"sd-카드-선택-사항"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sd-카드-선택-사항"}},[t._v("#")]),t._v(" SD 카드 (선택 사항)")]),t._v(" "),r("p",[t._v("SD 카드는 "),r("RouterLink",{attrs:{to:"/ko/getting_started/flight_reporting.html"}},[t._v("비행 세부 정보를 기록 및 분석")]),t._v("하고, 임무를 수행하고, UAVCAN 버스 하드웨어를 사용하는 데 필요하므로 가능하면 사용하는 것이 좋습니다. Micro-SD 카드를 그림과 같이 큐브에 삽입합니다.")],1),t._v(" "),r("p",[r("img",{attrs:{src:s(522),alt:"Cube - SDCard 장착"}})]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[t._v("자세한 내용은 "),r("RouterLink",{attrs:{to:"/ko/getting_started/px4_basic_concepts.html#sd_cards"}},[t._v("기본 개념> SD 카드 (휴대용 메모리)")]),t._v("를 참조하십시오.")],1)]),t._v(" "),r("h2",{attrs:{id:"모터"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#모터"}},[t._v("#")]),t._v(" 모터")]),t._v(" "),r("p",[t._v("모터/서보는 "),r("RouterLink",{attrs:{to:"/ko/airframes/airframe_reference.html"}},[t._v("Airframe Reference")]),t._v("에서 차량에 지정된 순서대로 "),r("strong",[t._v("MAIN")]),t._v(" 및 "),r("strong",[t._v("AUX")]),t._v(" 포트에 연결됩니다.")],1),t._v(" "),r("p",[r("img",{attrs:{src:s(523),alt:"Cube - 모터 연결"}})]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v('이 참고사항은 모든 지원되는 기체/기기 프레임의 출력 포트의 모터/서보 연결 리스트입니다 (만약 프레임이 참고사항에 기재되어 있지 않다면, 올바른 유형의 "일반" 프레임을 사용하십시오).')])]),t._v(" "),r("p",[t._v(":::caution\n매핑이 프레임간에 일관 되지 않습니다 (예 : 모든 평면 프레임에 대해 동일한 출력에있는 스로틀에 의존 할 수 없음). 가지고 있는 기체의 프레임에 대해 올바르게 모터를 제대로 연결하였는지 다시 한 번 확인하십시오.\n:::")]),t._v(" "),r("h2",{attrs:{id:"기타-주변-장치"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#기타-주변-장치"}},[t._v("#")]),t._v(" 기타 주변 장치")]),t._v(" "),r("p",[t._v("많이 사용하지 않는 옵션 부품들의 배선 및 조립법은 개별 "),r("RouterLink",{attrs:{to:"/ko/peripherals/"}},[t._v("주변 장치")]),t._v("에서 설명합니다.")],1),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("주변 장치를 "),r("code",[t._v("GPS2")]),t._v("로 표시된 포트에 연결하는 경우 하드웨어의 PX4 "),r("RouterLink",{attrs:{to:"/ko/peripherals/serial_configuration.html"}},[t._v("직렬 포트 구성 매개 변수")]),t._v("를 "),r("code",[t._v("TEL4")]),t._v(" (GPS2 아님)에 할당합니다.")],1)]),t._v(" "),r("h2",{attrs:{id:"설정"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#설정"}},[t._v("#")]),t._v(" 설정")]),t._v(" "),r("p",[t._v("설정은 "),r("a",{attrs:{href:"http://qgroundcontrol.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("QgroundControl"),r("OutboundLink")],1),t._v("을 사용해 이뤄집니다.")]),t._v(" "),r("p",[r("em",[t._v("QGroundControl")]),t._v("를 다운로드/설치/실행한 후, 아래와 같이 비행 제어 장치를 컴퓨터에 연결합니다.")]),t._v(" "),r("p",[r("img",{attrs:{src:s(524),alt:"Cube - 컴퓨터 USB 연결"}})]),t._v(" "),r("p",[t._v("더 자세한 일반 구성 정보는 "),r("RouterLink",{attrs:{to:"/ko/config/"}},[t._v("Autopilot 구성")]),t._v("에서 다룹니다.")],1),t._v(" "),r("p",[t._v("QuadPlane에 대한 자세한 설정은 "),r("RouterLink",{attrs:{to:"/ko/config_vtol/vtol_quad_configuration.html"}},[t._v("QuadPlane VTOL 설정")]),t._v("에서 다룹니다.")],1),t._v(" "),r("h2",{attrs:{id:"추가적인-정보"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#추가적인-정보"}},[t._v("#")]),t._v(" 추가적인 정보")]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk-2.html"}},[t._v("Cube Black")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/flight_controller/cubepilot_cube_yellow.html"}},[t._v("Cube Yellow")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/flight_controller/cubepilot_cube_orange.html"}},[t._v("Cube Orange")])],1),t._v(" "),r("li",[t._v("Cube 문서 (제조사) :\n"),r("ul",[r("li",[r("a",{attrs:{href:"https://docs.cubepilot.org/user-guides/autopilot/the-cube-module-overview",target:"_blank",rel:"noopener noreferrer"}},[t._v("큐브 모듈 개요"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://docs.cubepilot.org/user-guides/autopilot/the-cube-user-manual",target:"_blank",rel:"noopener noreferrer"}},[t._v("큐브 사용 설명서"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://docs.cubepilot.org/user-guides/carrier-boards/mini-carrier-board",target:"_blank",rel:"noopener noreferrer"}},[t._v("미니 캐리어 보드"),r("OutboundLink")],1)])])])])])}),[],!1,null,null,null);e.default=_.exports},343:function(t,e,s){t.exports=s.p+"assets/img/cube_orange_hero.944ff463.jpg"},344:function(t,e,s){t.exports=s.p+"assets/img/cube_black_hero.6173ab1f.png"},345:function(t,e,s){t.exports=s.p+"assets/img/cube_yellow_hero.77cbe270.jpg"},512:function(t,e,s){t.exports=s.p+"assets/img/cube_accessories.0be610f8.jpg"},513:function(t,e,s){t.exports=s.p+"assets/img/cube_wiring_overview.5b844fee.jpg"},514:function(t,e,s){t.exports=s.p+"assets/img/cube_mount_front.1a37ae44.jpg"},515:function(t,e,s){t.exports=s.p+"assets/img/cube_mount_plate_screws.def62b56.jpg"},516:function(t,e,s){t.exports=s.p+"assets/img/here_plus_connector.e4b10b83.png"},517:function(t,e,s){t.exports=s.p+"assets/img/cube_buzzer.b528b592.jpg"},518:function(t,e,s){t.exports=s.p+"assets/img/cube_rc_in.868e004f.jpg"},519:function(t,e,s){t.exports=s.p+"assets/img/cube_rc_spektrum.7c514293.jpg"},520:function(t,e,s){t.exports=s.p+"assets/img/cube_wiring_power_mc.16cfc115.jpg"},521:function(t,e,s){t.exports=s.p+"assets/img/cube_schematic_telemetry.d2afffe2.jpg"},522:function(t,e,s){t.exports=s.p+"assets/img/cube_sdcard.193e2b07.jpg"},523:function(t,e,s){t.exports=s.p+"assets/img/cube_main_aux_outputs.c67bd070.jpg"},524:function(t,e,s){t.exports=s.p+"assets/img/cube_usb_connection.dc108f09.jpg"}}]);