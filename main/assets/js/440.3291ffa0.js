(window.webpackJsonp=window.webpackJsonp||[]).push([[440],{1334:function(t,e,r){t.exports=r.p+"assets/img/mode1_mode2.e292a00b.png"},2782:function(t,e,r){"use strict";r.r(e);var o=r(19),s=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"무선-조종기-rc"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#무선-조종기-rc"}},[t._v("#")]),t._v(" 무선 조종기(RC)")]),t._v(" "),o("p",[t._v("A Radio Control (RC) system can be used to "),o("em",[t._v("manually")]),t._v(" control your vehicle from a handheld RC controller. This topic provides an overview of how RC works, how to choose an appropriate radio system for your vehicle, and how to connect it to your flight controller.")]),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("PX4 can also be manually controlled using a [Joystick](../config/joystick.md) or gamepad-like controller:  this is different to an RC system! The [COM_RC_IN_MODE](../advanced_config/parameter_reference.md#COM_RC_IN_MODE) parameter [can be set](../advanced_config/parameters.md) to choose whether RC (default), Joystick, both, or neither, are enabled. :::")]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("PX4 does not require a remote control system for autonomous flight modes.")])])]),t._v(" "),o("h2",{attrs:{id:"무선-조종기-작동-방법"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#무선-조종기-작동-방법"}},[t._v("#")]),t._v(" 무선 조종기 작동 방법")]),t._v(" "),o("p",[o("em",[t._v("무선 조종기")]),t._v("에는 조종사가 지상에서 차량을 조종하는 "),o("em",[t._v("원격 제어 장치")]),t._v("가 있습니다. 리모콘에는 차량 이동 (예 : 속도, 방향, 스로틀, 요, 피치, 롤 등)을 지정하거나, 자동 "),o("RouterLink",{attrs:{to:"/ko/flight_modes/"}},[t._v("비행 모드 ")]),t._v("(예 : 이륙, 착륙, 임무, 복귀)를 활성화하는 물리적 장치들이 있습니다. On "),o("em",[t._v("telemetry-enabled")]),t._v(" RC systems, the remote control unit can also receive and display information from the vehicle, such as battery level, flight mode, and warnings.")],1),t._v(" "),o("p",[o("img",{attrs:{src:r(411),alt:"Taranis X9D 송신기"}})]),t._v(" "),o("p",[t._v("The ground based RC controller contains a radio module that is bound to, and communicates with, a (compatible) radio module on the vehicle. 차량 기반 장치는 비행 콘트롤러에 연결됩니다. 비행 콘트롤러는 현재의 자동 비행 모드와 차량 상태를 기준으로 명령어 해석하는 방법을 결정하고, 차량 모터와 액추에이터를 구동합니다.")]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("지상 및 차량 기반 무선 모듈을 각각 송신기 및 수신기라고 하며 (양방향 통신을 지원하더라도) 총칭하여 "),o("em",[t._v("송수신기")]),t._v('라고합니다. The RC controller and it\'s included radio module are commonly referred to as a "transmitter". :::')]),t._v(" "),o("p",[t._v("무선 조종기의 중요한 품질중의 하나는 지원 채널수 입니다. 채널 수는 차량에 명령을 전송시에 사용 가능한 리모콘의 물리적 컨트롤 수를 정의합니다 (예 : 실제로 사용할 수있는 스위치, 다이얼, 콘트롤 스틱 갯수).")]),t._v(" "),o("p",[t._v("항공기는 최소 4개 채널(롤, 피치, 요, 스로틀)을 지원하는 무선 조종기를 사용하여야 합니다. 지상 차량에는 최소 2개의 채널(조향, 스로틀)이 필요합니다. 8 채널 또는 16 채널 송신기는 다른 메커니즘을 제어하거나, 자동조종장치에서 제공하는 "),o("RouterLink",{attrs:{to:"/ko/flight_modes/"}},[t._v("비행 모드")]),t._v("를 활성화하는 추가 채널을 제공합니다.")],1),t._v(" "),o("h2",{attrs:{id:"types-of-remote-controllers"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#types-of-remote-controllers"}},[t._v("#")]),t._v(" Types of Remote Controllers")]),t._v(" "),o("p",[o("a",{attrs:{id:"transmitter_modes"}})]),t._v(" "),o("h3",{attrs:{id:"항공기-전용-무선-조종기"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#항공기-전용-무선-조종기"}},[t._v("#")]),t._v(" 항공기 전용 무선 조종기")]),t._v(" "),o("p",[t._v("UAV용 가장 인기있는 무선 종종기 "),o("em",[t._v("유형은")]),t._v("은 아래와 같습니다. 롤/피치/스로틀/요를 제어하는 별도의 조종 스틱이 있습니다. 수신기에는 최소 4 개의 채널이 필요합니다.")]),t._v(" "),o("p",[o("img",{attrs:{src:r(401),alt:"RC 기본 명령어"}})]),t._v(" "),o("p",[t._v("조종 스틱, 스위치의 배치 방식은 다양합니다. 모드 번호로 많이 사용되는 송신기의 레이아웃을 지칭합니다. "),o("em",[t._v("모드 1")]),t._v("과 *모드2 *(아래 참조)는 스로틀의 배치만 차이가 납니다.")]),t._v(" "),o("p",[o("img",{attrs:{src:r(1334),alt:"모델1 - 모델2"}})]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("이 무선 조종기는 "),o("RouterLink",{attrs:{to:"/ko/peripherals/frsky_telemetry.html"}},[t._v("FrSky")]),t._v(" 무선 모듈과 함께 사용하여 차량의 원격 정보를 표시 할 수 있습니다. :::")],1),t._v(" "),o("h2",{attrs:{id:"지상-차량용-무선-조종기"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#지상-차량용-무선-조종기"}},[t._v("#")]),t._v(" 지상 차량용 무선 조종기")]),t._v(" "),o("p",[t._v("무인 지상 차량(UGV)은 조향 및 속도 값을 전송하기 위하여, 최소 2 채널의 송신기가 필요합니다. 일반적으로 송신기는 휠과 트리거, 2개의 단일 축 컨트롤 스틱 또는 단일 이중 축 컨트롤 스틱을 사용하여 위의 값들을 설정합니다.")]),t._v(" "),o("p",[t._v("더 많은 채널과 제어 메커니즘을 사용할 수 있으며, 추가 액추에이터와 자동 조종 모드를 사용하는 데 매우 유용합니다.")]),t._v(" "),o("h2",{attrs:{id:"무선-조종기-부품-선택"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#무선-조종기-부품-선택"}},[t._v("#")]),t._v(" 무선 조종기 부품 선택")]),t._v(" "),o("p",[t._v("호환되는 송신기와 수신기를 구매하여야 합니다. 또한, 수신기는 "),o("a",{attrs:{href:"#compatible_receivers"}},[t._v("PX4")]),t._v("와 비행 콘트롤러에 호환되어야 합니다.")]),t._v(" "),o("p",[t._v("콘트롤러와 호환되는 무선 조종기는 보통 한 묶음으로 판매됩니다. 예를 들어, "),o("a",{attrs:{href:"https://hobbyking.com/en_us/frsky-2-4ghz-accst-taranis-x9d-plus-and-x8r-combo-digital-telemetry-radio-system-mode-2.html?___store=en_us",target:"_blank",rel:"noopener noreferrer"}},[t._v(" FrSky Taranis X9D 및 FrSky X8R "),o("OutboundLink")],1),t._v("은 인기있는 조합입니다.")]),t._v(" "),o("h3",{attrs:{id:"송수신기-조합"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#송수신기-조합"}},[t._v("#")]),t._v(" 송수신기 조합")]),t._v(" "),o("p",[t._v("인기있는 무선 조종기중 하나는 * FrSky Taranis X9D *입니다. 권장되는 "),o("em",[t._v("FrSky X4R-SB")]),t._v("(S-BUS, 낮은 지연) 또는 "),o("em",[t._v("X4R")]),t._v(" (PPM-Sum, 레거시) 수신기와 함께 사용할 수있는 내부 송신기들이 있습니다. 그리고, 맞춤형 라디오 송신기 모듈 슬롯과 맞춤형 오픈 소스 OpenTX 펌웨어가 있습니다.")]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("This remote control unit can display vehicle telemetry when used with "),o("RouterLink",{attrs:{to:"/ko/peripherals/frsky_telemetry.html"}},[t._v("FrSky")]),t._v(" or "),o("RouterLink",{attrs:{to:"/ko/telemetry/crsf_telemetry.html"}},[t._v("TBS Crossfire")]),t._v(" radio modules. :::")],1),t._v(" "),o("p",[t._v("기타 인기 있는 송수신기 조합")]),t._v(" "),o("ul",[o("li",[t._v("예를 들어 FrSky 송수신기 모듈을 사용하는 Turnigy 송수신기")]),t._v(" "),o("li",[t._v("Futaba 송신기와 호환 가능한 Futaba S-Bus 수신기")]),t._v(" "),o("li",[t._v('장거리(약 900MHz), 낮은 대기 시간 : 호환되는 리모컨(예 : Taranis)으로 설정된 "Team Black Sheep Crossfire"또는 "Crossfire Micro"')]),t._v(" "),o("li",[t._v("장거리(약 433MHz) : 호환 리모콘 (예 : Taranis)으로 설정된 ImmersionRC EzUHF")])]),t._v(" "),o("p",[o("a",{attrs:{id:"compatible_receivers"}})]),t._v(" "),o("h3",{attrs:{id:"px4-호환-수신기"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#px4-호환-수신기"}},[t._v("#")]),t._v(" PX4 호환 수신기")]),t._v(" "),o("p",[t._v("수신기는 송신기 뿐만 아니라 PX4와 비행 콘트롤러에도 호환되어야 합니다.")]),t._v(" "),o("p",[t._v("아래의 수신기들의 "),o("em",[t._v("PX4")]),t._v("와 "),o("em",[t._v("Pixhawk")]),t._v(" 호환성은 검증되었습니다.")]),t._v(" "),o("ul",[o("li",[t._v("모든 Spektrum DSM RC 수신기")]),t._v(" "),o("li",[t._v("모든 Futaba S.BUS 및 S.BUS2 RC 수신기")]),t._v(" "),o("li",[t._v("모든 FrSky PPM 및 S.Bus 모델")]),t._v(" "),o("li",[t._v("Graupner HoTT")]),t._v(" "),o("li",[t._v("다른 제조업체의 모든 PPM 모델")]),t._v(" "),o("li",[t._v("TBS Crossfire/Express LRS Receivers using "),o("RouterLink",{attrs:{to:"/ko/telemetry/crsf_telemetry.html"}},[t._v("CRSF Telemetry")]),t._v(" (UART connection).")],1)]),t._v(" "),o("h2",{attrs:{id:"수신기-연결"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#수신기-연결"}},[t._v("#")]),t._v(" 수신기 연결")]),t._v(" "),o("p",[t._v("수신기는 프로토콜에 적합한 포트를 사용하여 비행 콘트롤러에 연결합니다.")]),t._v(" "),o("ul",[o("li",[t._v("Spektrum 및 DSM 수신기는 "),o("strong",[t._v("SPKT/DSM")]),t._v(" 포트에 연결합니다.")]),t._v(" "),o("li",[t._v("Graupner HoTT 수신기의 SUMD 출력은 "),o("strong",[t._v("SPKT/DSM")]),t._v(" 포트에 연결합니다.")]),t._v(" "),o("li",[t._v("PPM-Sum 및 S.BUS 수신기는 "),o("strong",[t._v("RC")]),t._v(" 접지, 전원 및 신호 핀(일반적으로 RC 또는 RCIN으로 표시됨)에 직접 연결합니다.")]),t._v(" "),o("li",[o("em",[t._v("각각의 채널이 독립적으로 배선된")]),t._v(" PPM 수신기는 반드시 RCIN 포트에 PPM 인코더로 "),o("a",{attrs:{href:"http://www.getfpv.com/radios/radio-accessories/holybro-ppm-encoder-module.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("아래와 같이"),o("OutboundLink")],1),t._v(" 연결합니다. PPM-Sum 수신기는 모든 채널에 하나의 전선만 사용합니다.")])]),t._v(" "),o("p",[t._v("Instructions for connecting to specific flight controllers are given in their "),o("RouterLink",{attrs:{to:"/ko/assembly/"}},[t._v("quick-start")]),t._v(" guides (such as "),o("RouterLink",{attrs:{to:"/ko/assembly/quick_start_cuav_pixhawk_v6x.html#radio-control"}},[t._v("CUAV Pixhawk V6X Wiring Quick Start: Radio Control")]),t._v(" or "),o("RouterLink",{attrs:{to:"/ko/assembly/quick_start_pixhawk6x.html#radio-control"}},[t._v("Holybro Pixhawk 6X Wiring Quick Start: Radio Control")]),t._v(").")],1),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),o("p",[t._v("추가 정보는 제조업체의 비행 콘트롤러 설정 매뉴얼을 참고하십시오.")])])])])]),t._v(" "),o("p",[o("a",{attrs:{id:"binding"}})]),t._v(" "),o("h2",{attrs:{id:"송수신기-바인딩"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#송수신기-바인딩"}},[t._v("#")]),t._v(" 송수신기 바인딩")]),t._v(" "),o("p",[t._v("무선 조종기를 보정하여 사용하기전에 송신기와 수신기를 "),o("em",[t._v("바인딩")]),t._v("하여 두 장치간에 통신이 가능하도록 설정하여야 합니다. 송신기와 수신기를 바인딩하는 방법은 하드웨어에 따라 조금씩 차이가 납니다. 자세한 방법은은 제품 설명서를 참조하십시오.")]),t._v(" "),o("p",[t._v("If you are using a "),o("em",[t._v("Spektrum")]),t._v(" receiver, you can put it into bind mode using "),o("em",[t._v("QGroundControl")]),t._v(": "),o("RouterLink",{attrs:{to:"/ko/config/radio.html#spectrum-bind"}},[t._v("Radio Setup > Spectrum Bind")]),t._v(".")],1),t._v(" "),o("h2",{attrs:{id:"신호-손실-동작-설정"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#신호-손실-동작-설정"}},[t._v("#")]),t._v(" 신호 손실 동작 설정")]),t._v(" "),o("p",[t._v("RC 수신기에는 신호 손실을 나타내는 여러가지 방법이 있습니다.")]),t._v(" "),o("ul",[o("li",[t._v("아무것도 출력하지 않음 (PX4에서 자동으로 감지됨)")]),t._v(" "),o("li",[t._v("낮은 스로틀 값을 출력합니다. "),o("RouterLink",{attrs:{to:"/ko/config/radio.html#rc-loss-detection"}},[t._v("이를 감지하도록 PX4에서 설정")]),t._v("할 수 있습니다.")],1),t._v(" "),o("li",[t._v("마지막으로 수신된 신호를 출력합니다. 이 경우는 PX4에서 처리할 수 없습니다.")])]),t._v(" "),o("p",[t._v("RC 손실이 발생하면 대부분 아무 신호도 전송하지 않는 수신기를 선택하지만, 낮은 스로틀 값을 전송하는 수신기를 선택할 수도 있습니다. 이 동작은 수신기의 설정이 필요할 수 있습니다(설명서 확인).")]),t._v(" "),o("p",[t._v("For more information see "),o("RouterLink",{attrs:{to:"/ko/config/radio.html#rc-loss-detection"}},[t._v("Radio Control Setup > RC Loss Detection")]),t._v(".")],1),t._v(" "),o("h2",{attrs:{id:"관련-내용"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#관련-내용"}},[t._v("#")]),t._v(" 관련 내용")]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/ko/config/radio.html"}},[t._v("무선 조종기 설정")]),t._v(" - PX4 무전 조종기 설정")],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/ko/flying/basic_flying.html"}},[t._v("비행 첫걸음")]),t._v(" - 무선 조종기 비행 방법을 설명합니다.")],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/ko/telemetry/crsf_telemetry.html"}},[t._v("TBS Crossfire (CRSF) Telemetry")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/ko/peripherals/frsky_telemetry.html"}},[t._v("FrSky Telemetry")])],1)])])}),[],!1,null,null,null);e.default=s.exports},401:function(t,e,r){t.exports=r.p+"assets/img/rc_basic_commands.2b7b3704.png"},411:function(t,e,r){t.exports=r.p+"assets/img/frsky_taranis_x9d_transmitter.cd77d27b.jpg"}}]);