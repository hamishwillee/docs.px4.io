(window.webpackJsonp=window.webpackJsonp||[]).push([[204],{1232:function(t,r,_){t.exports=_.p+"assets/img/frsky_telemetry_overview.421144e2.jpg"},1233:function(t,r,_){t.exports=_.p+"assets/img/taranis_telemetry.062d2a3f.jpg"},1234:function(t,r,_){t.exports=_.p+"assets/img/craft_and_theory_frsky_telemetry_cables.033a9fee.jpg"},2554:function(t,r,_){"use strict";_.r(r);var v=_(19),a=Object(v.a)({},(function(){var t=this,r=t.$createElement,v=t._self._c||r;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"frsky-텔레메트리"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#frsky-텔레메트리"}},[t._v("#")]),t._v(" FrSky 텔레메트리")]),t._v(" "),v("p",[t._v("FrSky 텔레메트리는 호환 RC 송신기의 기체 "),v("a",{attrs:{href:"#messages"}},[t._v("텔레메트리")]),t._v(" 정보에 접근할 수 있습니다.")]),t._v(" "),v("p",[t._v("사용 가능한 "),v("a",{attrs:{href:"#messages"}},[t._v("텔레메트리 목록")]),t._v("에는 비행 모드, 배터리 잔량, RC 신호 강도, 속도, 고도 등이 기술되어 있습니다. 일부 송신기는 가청 및 진동 피드백을 추가로 제공 할 수 있으며, 이는 배터리부족과 기타 안전 관련 경고시에 매우 유용합니다.")]),t._v(" "),v("p",[t._v("PX4는 "),v("a",{attrs:{href:"#s_port"}},[t._v("S.Port")]),t._v(" (신규) 및 D (이전) FrSky 텔레메트리 포트를 모두 지원합니다.")]),t._v(" "),v("h2",{attrs:{id:"하드웨어-설정"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#하드웨어-설정"}},[t._v("#")]),t._v(" 하드웨어 설정")]),t._v(" "),v("p",[t._v("FrSky 텔레메트리의 요구사항은 다음과 같습니다.")]),t._v(" "),v("ul",[v("li",[t._v("FrSky Taranis X9D Plus와 같은 "),v("a",{attrs:{href:"#transmitters"}},[t._v("FrSky 호환 RC 송신기")]),t._v(".")]),t._v(" "),v("li",[t._v("XSR와 X8R과 같은 "),v("a",{attrs:{href:"#receivers"}},[t._v("FrSky 텔레메트리 수신기")]),t._v(".")]),t._v(" "),v("li",[t._v("FrSky 수신기 스마트 포트(SPort)는 비행 콘트롤러 UART에 연결 케이블입니다.")])]),t._v(" "),v("p",[t._v("먼저 "),v("RouterLink",{attrs:{to:"/ko/getting_started/rc_transmitter_receiver.html#connecting-receivers"}},[t._v("RC 채널용 수신기를 연결")]),t._v("합니다. 수신기와 비행 컨트롤러 S.Bus 포트를 연결합니다.")],1),t._v(" "),v("p",[t._v("그런 다음, 수신기의 SPort를 비행 콘트롤러의 무료 UART에 별도로 연결하여 FrSky 텔레메트리를 설정후, "),v("a",{attrs:{href:"#configure"}},[t._v("해당 UART에서 FrSky 원격 측정을 실행하도록 PX4를 설정")]),t._v("합니다.")]),t._v(" "),v("p",[t._v("이것은 SPort 수신기에 반전되지 않은 출력용 핀 유무와 Pixhawk 버전에 따라 약간 다르게 수행됩니다.")]),t._v(" "),v("h3",{attrs:{id:"pixhawk-fmuv4-및-이전"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#pixhawk-fmuv4-및-이전"}},[t._v("#")]),t._v(" Pixhawk FMUv4 (및 이전)")]),t._v(" "),v("p",[t._v("Pixhawk FMUv4와 이전 버전의 경우 UART 포트와 수신기 텔레메트리 포트는 일반적으로 호환되지 않습니다 ("),v("RouterLink",{attrs:{to:"/ko/flight_controller/pixracer.html"}},[t._v("Pixracer")]),t._v(" 제외).")],1),t._v(" "),v("p",[t._v("일반적으로 SPort 수신기에는 "),v("em",[t._v("반전")]),t._v(" S.Port 신호가 있으며, Pixhawk UART에 연결하려면 변환 케이블을 사용하여 S.Port를 반전되지 않은 TX 및 RX로 분할하여야 합니다. 예시는 다음과 같습니다.")]),t._v(" "),v("p",[v("img",{attrs:{src:_(1232),alt:"FrSky-Taranis-텔레메트리"}})]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),v("p",[t._v("반전된 S.Port에 연결시에는 일반적으로이 어댑터를 포함하고 자동조종장치 및 수신기에 적합한 커넥터가 있는 "),v("a",{attrs:{href:"#ready_made_cable"}},[t._v("케이블")]),t._v("을 구매하는 것이 저렴하고 편리합니다. "),v("a",{attrs:{href:"#diy_cables"}},[t._v("DIY 케이블")]),t._v("을 만들려면 전기/전자 조립에 관한 전문적인 지식이 필요합니다.")])]),t._v(" "),v("p",[v("em",[t._v("무반전 출력")]),t._v("용 핀이있는 S.Port 수신기에는 UART TX핀 중 하나에 간단히 연결할 수 있습니다. ")]),t._v(" "),v("p",[t._v("그런 다음 "),v("a",{attrs:{href:"#configure"}},[t._v("PX4를 설정")]),t._v("합니다.")]),t._v(" "),v("h3",{attrs:{id:"pixhawk-fmuv5-stm32f7-이후"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#pixhawk-fmuv5-stm32f7-이후"}},[t._v("#")]),t._v(" Pixhawk FMUv5/STM32F7 이후")]),t._v(" "),v("p",[t._v("Pixhawk FMUv5와 이후 버전에서는 PX4는 반전된(또는 반전되지 않은) S.Port 신호를 직접 읽을 수 있으며, 특별한 케이블이 필요하지 않습니다.")]),t._v(" "),v("div",{staticClass:"custom-block note"},[v("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),v("p",[t._v("보다 일반적으로 이것은 STM32F7 이상을 사용하는 자동 조종 장치에서 해당됩니다 (예 : "),v("RouterLink",{attrs:{to:"/ko/flight_controller/durandal.html"}},[t._v("Durandal")]),t._v("에는 STM32H7이 있으며 반전되거나 반전되지 않은 S.Port 신호를 직접 읽을 수 있음).")],1)]),t._v(" "),v("p",[t._v("UART의 TX핀중 하나를 SPort 반전 또는 비반전 핀에 연결하면됩니다 (PX4는 두 유형 중 하나를 자동으로 감지합니다). 그런 다음 "),v("a",{attrs:{href:"#configure"}},[t._v("PX4를 설정")]),t._v("합니다.")]),t._v(" "),v("p",[v("span",{attrs:{id:"configure"}})]),t._v(" "),v("h2",{attrs:{id:"px4-설정"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#px4-설정"}},[t._v("#")]),t._v(" PX4 설정")]),t._v(" "),v("p",[v("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#TEL_FRSKY_CONFIG"}},[t._v("TEL_FRSKY_CONFIG")]),t._v("를 사용하여 FrSky 실행 모듈 "),v("RouterLink",{attrs:{to:"/ko/peripherals/serial_configuration.html"}},[t._v("직렬 포트를 설정")]),t._v("합니다. 포트 전송속도는 드라이버에 의해 설정되므로, 추가로 설정하지 않아도 됩니다.")],1),t._v(" "),v("div",{staticClass:"custom-block note"},[v("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),v("p",[t._v("무료 UART를 사용할 수 있지만 일반적으로 FrSky 텔레메트리에는 "),v("code",[t._v("TELEM 2")]),t._v("가 사용됩니다 ("),v("em",[t._v("FrSky")]),t._v(" 포트를 사용하도록 사전 설정된 "),v("RouterLink",{attrs:{to:"/ko/flight_controller/pixracer.html"}},[t._v("Pixracer")]),t._v(" 제외)")],1)]),t._v(" "),v("div",{staticClass:"custom-block note"},[v("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),v("p",[v("em",[t._v("QGroundControl")]),t._v("에서 설정 매개변수를 사용할 수 없는 경우에는 "),v("RouterLink",{attrs:{to:"/ko/peripherals/serial_configuration.html#parameter_not_in_firmware"}},[t._v("펌웨어에 드라이버를 추가")]),t._v("하여야 합니다.")],1),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",[v("code",[t._v("drivers/telemetry/frsky_telemetry\n")])])])]),t._v(" "),v("p",[t._v("추가 설정이 필요하지 않습니다. FrSky 텔레메트리는 연결되면 자동으로 시작되고 D 또는 S 모드를 감지합니다.")]),t._v(" "),v("p",[v("span",{attrs:{id:"transmitters"}})]),t._v(" "),v("h2",{attrs:{id:"호환-rc-송신기"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#호환-rc-송신기"}},[t._v("#")]),t._v(" 호환 RC 송신기")]),t._v(" "),v("p",[t._v("텔레메트리 스트림을 수신 기능한 (FrSky 수신기에 바인딩된) RC 송신기가 필요합니다.")]),t._v(" "),v("p",[t._v("많이 사용되는 제품들은 다음과 같습니다.")]),t._v(" "),v("ul",[v("li",[t._v("FrSky Taranis X9D Plus (추천)")]),t._v(" "),v("li",[t._v("FrSky Taranis X9D")]),t._v(" "),v("li",[t._v("FrSky Taranis X9E")]),t._v(" "),v("li",[t._v("FrSky Taranis Q X7")]),t._v(" "),v("li",[t._v("Turnigy 9XR Pro")])]),t._v(" "),v("p",[t._v("위의 송신기는 추가 설정없이, 텔레메트리 데이터를 출력합니다. 다음 섹션에서는 텔레메트리 디스플레이를 설정 방법(예 : 더 나은 UI/UX 생성)을 설명합니다.")]),t._v(" "),v("h3",{attrs:{id:"taranis-luapilot-설정"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#taranis-luapilot-설정"}},[t._v("#")]),t._v(" Taranis - LuaPilot 설정")]),t._v(" "),v("p",[t._v("OpenTX 2.1.6 이상을 실행하는 Taranis 호환 수신기(예 : X9D Plus)는 LuaPilot 스크립트를 사용하여 원격 측정 출력을 수정할 수 있습니다 (아래 스크린 샷 참조).")]),t._v(" "),v("p",[v("img",{attrs:{src:_(1233),alt:"Taranis의 텔레메트리 화면"}})]),t._v(" "),v("p",[t._v("스크립트 설치 방법은 "),v("a",{attrs:{href:"http://ilihack.github.io/LuaPilot_Taranis_Telemetry/",target:"_blank",rel:"noopener noreferrer"}},[t._v("LuaPilot Taranis Telemetry 스크립트 > Taranis Setup OpenTX 2.1.6 이상"),v("OutboundLink")],1),t._v("을 참고하십시오.")]),t._v(" "),v("p",[t._v("텍스트 편집기로 "),v("code",[t._v("LuaPil.lua")]),t._v(" 스크립트를 열어 설정을 편집할 수 있습니다. 제안된 수정 사항은 다음과 같습니다.")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("local BattLevelmAh = -1")]),t._v(" - 기체 배터리 잔량을 계산합니다.")]),t._v(" "),v("li",[v("code",[t._v("local SayFlightMode = 0")]),t._v(" - PX4 비행 모드 WAV 파일이 없습니다.")])]),t._v(" "),v("p",[v("span",{attrs:{id:"messages"}})]),t._v(" "),v("h2",{attrs:{id:"텔레메트리-메시지"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#텔레메트리-메시지"}},[t._v("#")]),t._v(" 텔레메트리 메시지")]),t._v(" "),v("p",[t._v("FrSky Telemetry는 PX4 유용한 상태 정보 대부분을 전송합니다. S-Port 및 D-Port 수신기는 다음 섹션에 나열된대로 서로 다른 메시지 세트를 전송합니다.")]),t._v(" "),v("p",[v("span",{attrs:{id:"s_port"}})]),t._v(" "),v("h3",{attrs:{id:"s-port"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#s-port"}},[t._v("#")]),t._v(" S-Port")]),t._v(" "),v("p",[t._v("S-Port 수신기는 PX4("),v("a",{attrs:{href:"https://github.com/iNavFlight/inav/blob/master/docs/Telemetry.md#available-smartport-sport-sensors",target:"_blank",rel:"noopener noreferrer"}},[t._v("여기"),v("OutboundLink")],1),t._v("에서)에서 다음 메시지들을 전송합니다.")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("AccX, AccY, AccZ:")]),t._v(" 가속도")]),t._v(" "),v("li",[v("strong",[t._v("Alt:")]),t._v(" 홈 위치를 기준 기압계 기반 고도.")]),t._v(" "),v("li",[v("strong",[t._v("Curr:")]),t._v(" 실제 전류 소비 (Amps).")]),t._v(" "),v("li",[v("strong",[t._v("Fuel:")]),t._v(" "),v("code",[t._v("battery_capacity")]),t._v(" 변수 세트 및 변수 "),v("code",[t._v("smartport_fuel_percent = ON")]),t._v("인 경우 남은 배터리 비율, 그렇지 않으면 mAh가 표시됩니다.")]),t._v(" "),v("li",[v("strong",[t._v("GAlt:")]),t._v(" GPS 고도, 해수면은 0입니다.")]),t._v(" "),v("li",[v("strong",[t._v("GPS:")]),t._v(" GPS 좌표.")]),t._v(" "),v("li",[v("strong",[t._v("GSpd:")]),t._v(" GPS로 계산된 현재 수평 지면속도입니다.")]),t._v(" "),v("li",[v("strong",[t._v("Hdg:")]),t._v(" 방향 (도-북쪽은 0 °).")]),t._v(" "),v("li",[v("strong",[t._v("VFAS:")]),t._v(" 실제 배터리 전압(Voltage FrSky Ampere Sensor).")]),t._v(" "),v("li",[v("strong",[t._v("VSpd:")]),t._v(" 수직 속도 (cm/s).")]),t._v(" "),v("li",[v("strong",[t._v("Tmp1:")]),t._v(" "),v("RouterLink",{attrs:{to:"/ko/getting_started/flight_modes.html"}},[t._v("비행 모드")]),t._v(", 정수로 전송 : 18 - Manual, 23 - Altitude, 22 - Position, 27 - Mission, 26 - Hold, 28 - Return, 19 - Acro, 24 0 오프 보드, 20 - 안정화됨, 25 - 이륙, 29 - Land, 30 - Follow Me.")],1),t._v(" "),v("li",[v("strong",[t._v("Tmp2:")]),t._v(" GPS 정보. 가장 오른쪽 숫자는 GPS 수정 유형입니다 (0 = 없음, 2 = 2D, 3 = 3D). 다른 숫자는 위성의 수입니다.")])]),t._v(" "),v("div",{staticClass:"custom-block note"},[v("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),v("p",[t._v('다음 "표준" S-Port 메시지는 PX4에서 지원되지 않습니다 : '),v("strong",[t._v("ASpd")]),t._v(", "),v("strong",[t._v("A4")]),t._v(".")])]),t._v(" "),v("h3",{attrs:{id:"d-port"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#d-port"}},[t._v("#")]),t._v(" D-port")]),t._v(" "),v("p",[t._v("D-Port 수신기는 다음 메시지를 전송합니다 ("),v("a",{attrs:{href:"https://github.com/cleanflight/cleanflight/blob/master/docs/Telemetry.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("여기"),v("OutboundLink")],1),t._v("에서).")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("AccX, AccY, AccZ:")]),t._v(" 가속도")]),t._v(" "),v("li",[v("strong",[t._v("Alt:")]),t._v(" 기압계 기반 고도, 초기화 수준은 0입니다.")]),t._v(" "),v("li",[v("strong",[t._v("셀:")]),t._v(" 평균 셀 전압 (배터리 전압을 셀 번호로 나눈 값).")]),t._v(" "),v("li",[v("strong",[t._v("Curr:")]),t._v(" 실제 전류 소비 (Amps).")]),t._v(" "),v("li",[v("strong",[t._v("Fuel:")]),t._v(" 용량이 설정된 경우 남은 배터리 비율, 그렇지 않으면 mAh가 표시됩니다.")]),t._v(" "),v("li",[v("strong",[t._v("Date:")]),t._v(" 전원 공급 이후 시간입니다.")]),t._v(" "),v("li",[v("strong",[t._v("GAlt:")]),t._v(" GPS 고도, 해수면은 0입니다.")]),t._v(" "),v("li",[v("strong",[t._v("GPS:")]),t._v(" GPS 좌표.")]),t._v(" "),v("li",[v("strong",[t._v("GSpd:")]),t._v(" GPS로 계산된 현재 속도입니다.")]),t._v(" "),v("li",[v("strong",[t._v("Hdg:")]),t._v(" 방향 (도-북쪽은 0 °).")]),t._v(" "),v("li",[v("strong",[t._v("RPM:")]),t._v(" 장착된 경우 스로틀 값, 그렇지 않으면 배터리 용량. Taranis에서 블레이드 번호는 12로 설정하여야 합니다.")]),t._v(" "),v("li",[v("strong",[t._v("Tmp1:")]),t._v(" 비행 모드 (S-Port의 경우).")]),t._v(" "),v("li",[v("strong",[t._v("Tmp2:")]),t._v(" GPS 정보 (S-Port의 경우).")]),t._v(" "),v("li",[v("strong",[t._v("VFAS:")]),t._v(" 실제 배터리 전압(Voltage FrSky Ampere Sensor).")]),t._v(" "),v("li",[v("strong",[t._v("VSpd:")]),t._v(" 수직 속도 (cm/s).")])]),t._v(" "),v("p",[v("span",{attrs:{id:"receivers"}})]),t._v(" "),v("h2",{attrs:{id:"frsky-텔레메트리-수신기"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#frsky-텔레메트리-수신기"}},[t._v("#")]),t._v(" FrSky 텔레메트리 수신기")]),t._v(" "),v("p",[t._v("Pixhawk/PX4는 D (이전) 및 S (신규) FrSky 텔레메트리를 지원합니다. 아래 표는 D/S.PORT 텔레메트리를 지원하는 FrSky 수신기들입니다 (이론상 모두 작동함).")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),v("p",[t._v("아래 나열된 X 시리즈 수신기를 권장합니다 (예 : XSR, X8R). R 및 G 시리즈는 테스트팀에 의해 검증되지 않았지만 작동하여야 합니다.")])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("수신기")]),t._v(" "),v("th",[t._v("범위")]),t._v(" "),v("th",[t._v("복합 출력")]),t._v(" "),v("th",[t._v("디지털 텔레메트리 입력")]),t._v(" "),v("th",[t._v("크기")]),t._v(" "),v("th",[t._v("중량")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("D4R-II")]),t._v(" "),v("td",[t._v("1.5km")]),t._v(" "),v("td",[t._v("CPPM (8)")]),t._v(" "),v("td",[t._v("D.Port")]),t._v(" "),v("td",[t._v("40x22.5x6mm")]),t._v(" "),v("td",[t._v("5.8g")])]),t._v(" "),v("tr",[v("td",[t._v("D8R-XP")]),t._v(" "),v("td",[t._v("1.5km")]),t._v(" "),v("td",[t._v("CPPM (8)")]),t._v(" "),v("td",[t._v("D.Port")]),t._v(" "),v("td",[t._v("55x25x14mm")]),t._v(" "),v("td",[t._v("12.4g")])]),t._v(" "),v("tr",[v("td",[t._v("D8R-II Plus")]),t._v(" "),v("td",[t._v("1.5km")]),t._v(" "),v("td",[t._v("없음")]),t._v(" "),v("td",[t._v("D.Port")]),t._v(" "),v("td",[t._v("55x25x14mm")]),t._v(" "),v("td",[t._v("12.4g")])]),t._v(" "),v("tr",[v("td",[t._v("X4R")]),t._v(" "),v("td",[t._v("1.5km")]),t._v(" "),v("td",[t._v("CPPM (8)")]),t._v(" "),v("td",[t._v("Smart Port")]),t._v(" "),v("td",[t._v("40x22.5x6mm")]),t._v(" "),v("td",[t._v("5.8g")])]),t._v(" "),v("tr",[v("td",[t._v("X4R-SB")]),t._v(" "),v("td",[t._v("1.5km")]),t._v(" "),v("td",[t._v("S.Bus (16)")]),t._v(" "),v("td",[t._v("Smart Port")]),t._v(" "),v("td",[t._v("40x22.5x6mm")]),t._v(" "),v("td",[t._v("5.8g")])]),t._v(" "),v("tr",[v("td",[t._v("X6R / S6R")]),t._v(" "),v("td",[t._v("1.5km")]),t._v(" "),v("td",[t._v("S.Bus (16)")]),t._v(" "),v("td",[t._v("Smart Port")]),t._v(" "),v("td",[t._v("47.42×23.84×14.7mm")]),t._v(" "),v("td",[t._v("15.4g")])]),t._v(" "),v("tr",[v("td",[t._v("X8R / S8R")]),t._v(" "),v("td",[t._v("1.5km")]),t._v(" "),v("td",[t._v("S.Bus (16)")]),t._v(" "),v("td",[t._v("Smart Port")]),t._v(" "),v("td",[t._v("46.25 x 26.6 x 14.2mm")]),t._v(" "),v("td",[t._v("16.6g")])]),t._v(" "),v("tr",[v("td",[t._v("XSR / XSR-M")]),t._v(" "),v("td",[t._v("1.5km")]),t._v(" "),v("td",[t._v("S.Bus (16) / CPPM (8)")]),t._v(" "),v("td",[t._v("Smart Port")]),t._v(" "),v("td",[t._v("26x19.2x5mm")]),t._v(" "),v("td",[t._v("3.8g")])]),t._v(" "),v("tr",[v("td",[t._v("RX8R")]),t._v(" "),v("td",[t._v("1.5km")]),t._v(" "),v("td",[t._v("S.Bus (16)")]),t._v(" "),v("td",[t._v("Smart Port")]),t._v(" "),v("td",[t._v("46.25x26.6x14.2mm")]),t._v(" "),v("td",[t._v("12.1g")])]),t._v(" "),v("tr",[v("td",[t._v("RX8R PRO")]),t._v(" "),v("td",[t._v("1.5km")]),t._v(" "),v("td",[t._v("S.Bus (16)")]),t._v(" "),v("td",[t._v("Smart Port")]),t._v(" "),v("td",[t._v("46.25x26.6x14.2mm")]),t._v(" "),v("td",[t._v("12.1g")])]),t._v(" "),v("tr",[v("td",[t._v("R-XSR")]),t._v(" "),v("td",[t._v("1.5km")]),t._v(" "),v("td",[t._v("S.Bus (16) / CPPM (8)")]),t._v(" "),v("td",[t._v("Smart Port")]),t._v(" "),v("td",[t._v("16x11x5.4mm")]),t._v(" "),v("td",[t._v("1.5g")])]),t._v(" "),v("tr",[v("td",[t._v("G-RX8")]),t._v(" "),v("td",[t._v("1.5km")]),t._v(" "),v("td",[t._v("S.Bus (16)")]),t._v(" "),v("td",[t._v("Smart Port + integrated vario")]),t._v(" "),v("td",[t._v("55.26"),v("em",[t._v("17")]),t._v("8mm")]),t._v(" "),v("td",[t._v("5.8g")])]),t._v(" "),v("tr",[v("td",[t._v("R9")]),t._v(" "),v("td",[t._v("10km")]),t._v(" "),v("td",[t._v("S.Bus (16)")]),t._v(" "),v("td",[t._v("Smart Port")]),t._v(" "),v("td",[t._v("43.3x26.8x13.9mm")]),t._v(" "),v("td",[t._v("15.8g")])]),t._v(" "),v("tr",[v("td",[t._v("R9 slim")]),t._v(" "),v("td",[t._v("10km")]),t._v(" "),v("td",[t._v("S.Bus (16)")]),t._v(" "),v("td",[t._v("Smart Port")]),t._v(" "),v("td",[t._v("43.3x26.8x13.9mm")]),t._v(" "),v("td",[t._v("15.8g")])])])]),t._v(" "),v("div",{staticClass:"custom-block note"},[v("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),v("p",[t._v("위의 표는 http://www.redsilico.com/frsky-receiver-chart 및 FrSky "),v("a",{attrs:{href:"https://www.frsky-rc.com/product-category/receivers/",target:"_blank",rel:"noopener noreferrer"}},[t._v("제품 문서"),v("OutboundLink")],1),t._v("에서 참조하였습니다.")])]),t._v(" "),v("p",[v("span",{attrs:{id:"ready_made_cable"}})]),t._v(" "),v("h2",{attrs:{id:"기성품-케이블"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#기성품-케이블"}},[t._v("#")]),t._v(" 기성품 케이블")]),t._v(" "),v("p",[t._v("Pixhawk FMUv4와 이전 버전 (Pixracer 제외)의 기성품 케이블은 아래에서 구매가능합니다.")]),t._v(" "),v("ul",[v("li",[v("p",[v("a",{attrs:{href:"http://www.craftandtheoryllc.com/telemetry-cable",target:"_blank",rel:"noopener noreferrer"}},[t._v("Craft and Theory"),v("OutboundLink")],1),t._v(". 버전은 DF-13 호환 "),v("em",[t._v("PicoBlade 커넥터")]),t._v("(FMUv2/3DR Pixhawk, FMUv2/HKPilot32 용) 및 "),v("em",[t._v("JST-GH 커넥터")]),t._v('(FMUv3/Pixhawk 2, "The Cube" 및 FMUv4/PixRacer v1 용)와 함께 제공됩니다.')]),t._v(" "),v("p",[v("a",{attrs:{href:"http://www.craftandtheoryllc.com/telemetry-cable",target:"_blank",rel:"noopener noreferrer"}},[v("img",{attrs:{src:_(1234),alt:"Craft and Theory에서 케이블 구매"}}),v("OutboundLink")],1)])])]),t._v(" "),v("p",[v("span",{attrs:{id:"diy_cables"}})]),t._v(" "),v("h2",{attrs:{id:"diy-케이블"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#diy-케이블"}},[t._v("#")]),t._v(" DIY 케이블")]),t._v(" "),v("p",[t._v('자신만의 어댑터 케이블을 만들 수 있습니다. 자동조종장치에 적합한 커넥터(예 : FMUv3/Pixhawk 2 "The Cube" 및 FMUv4/PixRacer v1 용 '),v("em",[t._v("JST-GH 커넥터")]),t._v(" 및 DF-13 호환 "),v("em",[t._v("PicoBlade 커넥터")]),t._v(" 이전 자동 조종 장치의 경우).")]),t._v(" "),v("p",[t._v("Pixracer에는 S.PORT와 UART 간의 신호 변환 장치가 포함되어 있지만, 다른 보드의 경우 UART-S.PORT 어댑터가 필요합니다. 아래에서 구매 가능합니다.")]),t._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"https://www.frsky-rc.com/product/ful-1/",target:"_blank",rel:"noopener noreferrer"}},[t._v("FrSky FUL-1"),v("OutboundLink")],1),t._v(": "),v("a",{attrs:{href:"https://www.unmannedtechshop.co.uk/frsky-transmitter-receiver-upgrade-adapter-ful-1/",target:"_blank",rel:"noopener noreferrer"}},[t._v("unmannedtech.co.uk"),v("OutboundLink")],1)]),t._v(" "),v("li",[t._v("SPC: "),v("a",{attrs:{href:"http://www.getfpv.com/frsky-smart-port-converter-cable.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("getfpv.com"),v("OutboundLink")],1),t._v(", "),v("a",{attrs:{href:"https://www.unmannedtechshop.co.uk/frsky-smart-port-converter-spc/",target:"_blank",rel:"noopener noreferrer"}},[t._v("unmannedtechshop.co.uk"),v("OutboundLink")],1)])]),t._v(" "),v("p",[t._v("다른 보드에서의 연결 방법은 아래에 기술되어 있습니다.")]),t._v(" "),v("h3",{attrs:{id:"pixracer-to-s-port-변환-수신기"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#pixracer-to-s-port-변환-수신기"}},[t._v("#")]),t._v(" Pixracer to S-port 변환 수신기")]),t._v(" "),v("p",[t._v("Pixracer FrSky TX와 RX 라인을 X 시리즈 수신기의 S.port 핀에 함께 연결합니다 (전선을 함께 납땜). GND는 S.Bus(일반 RC 연결)에 연결시 수행되므로 연결할 필요가 없습니다.")]),t._v(" "),v("p",[t._v("S-port 연결은 아래와 같습니다 (제공된 I/O 커넥터 사용).")]),t._v(" "),v("p",[v("img",{attrs:{src:_(334),alt:"Grau b Pixracer FrSkyS.Port 연결"}})]),t._v(" "),v("p",[v("img",{attrs:{src:_(358),alt:"Pixracer FrSkyS.Port 연결"}})]),t._v(" "),v("h3",{attrs:{id:"pixracer-to-d-port-변환-수신기"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#pixracer-to-d-port-변환-수신기"}},[t._v("#")]),t._v(" Pixracer to D-port 변환 수신기")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),v("p",[t._v("대부분의 사용자는 S.PORT를 선호합니다.")])]),t._v(" "),v("p",[t._v("Pixracer FrSky TX 라인 (FS 출력)을 수신기의 RX 라인에 연결합니다. Pixracer FrSky RX 라인 (FS 입력)을 수신기 TX 라인에 연결합니다. GND는 RC/SBus (일반 RC의 경우)에 연결할 때 수행되므로 연결할 필요 없습니다.")]),t._v(" "),v("h3",{attrs:{id:"pixhawk-pro"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#pixhawk-pro"}},[t._v("#")]),t._v(" Pixhawk Pro")]),t._v(" "),v("p",[v("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk3_pro.html"}},[t._v("Pixhawk 3 Pro")]),t._v("는 TELEM4에 연결할 수 있습니다 (추가 소프트웨어 설정 필요없음). UART-S.PORT 어댑터나 "),v("a",{attrs:{href:"#ready_made_cable"}},[t._v("기성품 케이블")]),t._v("로 연결하여 합니다.")],1),t._v(" "),v("h3",{attrs:{id:"pixhawk-fmuv5-이후"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#pixhawk-fmuv5-이후"}},[t._v("#")]),t._v(" Pixhawk FMUv5 이후")]),t._v(" "),v("p",[t._v("UART의 TX핀중 하나를 SPort 반전 또는 비반전 핀에 연결하면됩니다 (PX4는 두 유형 중 하나를 자동으로 감지합니다).")]),t._v(" "),v("p",[v("span",{attrs:{id:"pixhawk_v2"}})]),t._v(" "),v("h3",{attrs:{id:"기타-보드"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#기타-보드"}},[t._v("#")]),t._v(" 기타 보드")]),t._v(" "),v("p",[t._v("대부분의 다른 보드는 TELEM2 UART를 통해 FrSky 텔레메트리 수신기에 연결합니다. 여기에는 "),v("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk.html"}},[t._v("Pixhawk 1")]),t._v(", "),v("RouterLink",{attrs:{to:"/ko/flight_controller/mro_pixhawk.html"}},[t._v("mRo Pixhawk")]),t._v(", Pixhawk2 등이 포함됩니다.")],1),t._v(" "),v("p",[t._v("UART-S.PORT 어댑터나 "),v("a",{attrs:{href:"#ready_made_cable"}},[t._v("기성품 케이블")]),t._v("로 연결합니다.")]),t._v(" "),v("h2",{attrs:{id:"추가-정보"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#추가-정보"}},[t._v("#")]),t._v(" 추가 정보")]),t._v(" "),v("p",[t._v("추가 정보는 다음 링크를 참고하십시오.")]),t._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"https://github.com/Clooney82/MavLink_FrSkySPort/wiki/1.2.-FrSky-Taranis-Telemetry",target:"_blank",rel:"noopener noreferrer"}},[t._v("FrSky Taranis 텔레메트리"),v("OutboundLink")],1)]),t._v(" "),v("li",[v("a",{attrs:{href:"https://www.youtube.com/watch?v=x14DyvOU0Vc",target:"_blank",rel:"noopener noreferrer"}},[t._v("Taranis X9D : 텔레메트리 설정"),v("OutboundLink")],1),t._v(" (동영상 자습서)")]),t._v(" "),v("li",[v("a",{attrs:{href:"https://discuss.px4.io//t/px4-frsky-telemetry-setup-with-pixhawk2-and-x8r-receiver/6362",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pxhawk2와 X8R 수신기를 사용한 Px4 FrSky 텔레메트리 설정"),v("OutboundLink")],1),t._v(" (DIY 케이블)")])])])}),[],!1,null,null,null);r.default=a.exports},334:function(t,r,_){t.exports=_.p+"assets/img/grau_b_pixracer_frskys.port_connection.4f4548a6.jpg"},358:function(t,r,_){t.exports=_.p+"assets/img/pixracer_FrSkyTelemetry.e4e73cd1.jpg"}}]);