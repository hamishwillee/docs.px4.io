(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{1929:function(t,e,o){"use strict";o.r(e);var r=o(19),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"큐브-배선-개요"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#큐브-배선-개요"}},[t._v("#")]),t._v(" 큐브 배선 개요")]),t._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[t._v("PX4에서는 이런 종류의 자동 항법 장치를 제조하지는 않습니다. 하드웨어 지원 또는 호환 문제는 [제조사](https://cubepilot.org/#/home)와 상담하십시오.")]),t._v(" "),r("p",[r("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk-2.html"}},[t._v("Cube Black")]),t._v("은 "),r("RouterLink",{attrs:{to:"/ko/flight_controller/autopilot_pixhawk_standard.html"}},[t._v("PX4")]),t._v("에서 완전히 지원되지만, "),r("RouterLink",{attrs:{to:"/ko/flight_controller/cubepilot_cube_yellow.html"}},[t._v("Cube Yellow")]),t._v(" 및 "),r("RouterLink",{attrs:{to:"/ko/flight_controller/cubepilot_cube_orange.html"}},[t._v("Cube Orange ")]),t._v("에 대한 지원은 "),r("RouterLink",{attrs:{to:"/ko/flight_controller/autopilot_experimental.html"}},[t._v("테스트")]),t._v(" 단계입니다.")],1)]),t._v(" "),r("p",[t._v("이 퀵 스타트 설명서는 "),r("em",[t._v("Cube")]),r("sup",[t._v("®")]),t._v(" 비행 컨트롤러에 전원을 공급하고 가장 중요한 주변 장치를 연결하는 방법을 설명합니다.")]),t._v(" "),r("p",[r("img",{attrs:{src:o(347),width:"350px"}}),t._v(" "),r("img",{attrs:{src:o(348),width:"350px"}}),t._v(" "),r("img",{attrs:{src:o(349),width:"150px"}})]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[t._v("지침은 "),r("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk-2.html"}},[t._v("큐브 블랙")]),t._v(", "),r("RouterLink",{attrs:{to:"/ko/flight_controller/cubepilot_cube_yellow.html"}},[t._v("큐브 옐로우")]),t._v(" 및 "),r("RouterLink",{attrs:{to:"/ko/flight_controller/cubepilot_cube_orange.html"}},[t._v("큐브 오렌지")]),t._v("를 포함한 모든 큐브 변형에 적용됩니다. 추가 업데이트 정보는 "),r("a",{attrs:{href:"https://docs.cubepilot.org/user-guides/autopilot/the-cube-user-manual",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cube 사용 설명서"),r("OutboundLink")],1),t._v(" (Cube 문서)에서 확인할 수 있습니다.")],1)]),t._v(" "),r("h2",{attrs:{id:"액세서리"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#액세서리"}},[t._v("#")]),t._v(" 액세서리")]),t._v(" "),r("p",[t._v("큐브는 "),r("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk-2.html#stores"}},[t._v("구매 시")]),t._v("필요한 부속품의 대부분 (또는 전체)이 함께 제공됩니다.")],1),t._v(" "),r("p",[r("img",{attrs:{src:o(509),alt:"큐브 액세서리"}})]),t._v(" "),r("p",[t._v("예외적으로 GPS를 따로 구매해야 하는 GPS를 포함하지 않는 키트가 있습니다 ("),r("a",{attrs:{href:"#gps"}},[t._v("아래를 참고하십시오")]),t._v(").")]),t._v(" "),r("h2",{attrs:{id:"배선-개요"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#배선-개요"}},[t._v("#")]),t._v(" 배선 개요")]),t._v(" "),r("p",[t._v("아래 그림은 중요한 센서와 주변기기를 연결하는 방법에 대해 설명합니다. 다음 섹션에서 각 장치에 대해 자세히 설명합니다.")]),t._v(" "),r("p",[r("img",{attrs:{src:o(510),alt:"큐브 - 배선 개요"}})]),t._v(" "),r("ol",[r("li",[r("a",{attrs:{href:"#telemetry"}},[t._v("텔레메트리 시스템")]),t._v(" — 실시간으로 기체를 제어/모니터링하고, 미션을 계획/실행할 수 있도록 합니다. 일반적으로 텔레메트리 라디오, 태블릿/PC와 지상 통제 장치 프로그램이 해당합니다.")]),t._v(" "),r("li",[r("a",{attrs:{href:"#buzzer"}},[t._v("버저")]),t._v(" — 기체의 동작을 나타내는 오디오 신호를 제공합니다.")]),t._v(" "),r("li",[r("a",{attrs:{href:"#rc_control"}},[t._v("원격 제어 수신기 시스템")]),t._v(" — 조종사가 기체를 수동으로 조작하는 데 사용할 수 있는 휴대용 송신기에 연결합니다 (그림은 PWM->PPM 변환기를 장착한 PWM 수신기입니다).")]),t._v(" "),r("li",[t._v("(전용) "),r("a",{attrs:{href:"#safety_switch"}},[t._v("안전 스위치")]),t._v(" — 버튼을 눌러 모터를 잠금/잠금해제합니다. 내장 안전 스위치가 포함된 권장 "),r("a",{attrs:{href:"#gps"}},[t._v("GPS")]),t._v("를 사용하지 않는 경우에만 필요합니다.")]),t._v(" "),r("li",[r("a",{attrs:{href:"#gps"}},[t._v("GPS, 나침반, LED, 안전 스위치")]),t._v(" — 권장 GPS 모듈은 GPS, 나침반, LED, 그리고 안전 스위치로 구성됩니다.")]),t._v(" "),r("li",[r("a",{attrs:{href:"#power"}},[t._v("전원 시스템")]),t._v(" — Cube 및 모터 ESC에 전원을 공급합니다. LiPo 배터리,전원 모듈, 그리고 추가 배터리 경고 시스템 (배터리 전원이 설정된 전압보다 낮을 때 경고음)으로 구성됩니다.")])]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[r("code",[t._v("GPS2")]),t._v("로 표시된 포트는 PX4에서 "),r("code",[t._v("TEL4")]),t._v("에 매핑됩니다 (즉, "),r("code",[t._v("GPS2")]),t._v("로 표시된 포트에 연결하는 경우, "),r("code",[t._v("TEL4")]),t._v("에 연결된 "),r("RouterLink",{attrs:{to:"/ko/peripherals/serial_configuration.html"}},[t._v("직렬 포트 구성 매개 변수")]),t._v("를 설정하여야합니다).")],1)]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[t._v("사용 가능한 포트에 대한 자세한 내용은 "),r("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk-2.html#ports"}},[t._v("Cube>Ports")]),t._v("에서 찾을 수 있습니다.")],1)]),t._v(" "),r("h2",{attrs:{id:"콘트롤러-장착-및-장착-방향"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#콘트롤러-장착-및-장착-방향"}},[t._v("#")]),t._v(" 콘트롤러 장착 및 장착 방향")]),t._v(" "),r("p",[t._v("Cube를 가능한 (이상적으로는) 윗면이 위로 향하도록 하여 기체의 무게 중심에 가깝게, 그리고 화살표를 기체의 앞면을 가르키도록 장착하십시오 (큐브 윗면에 그려진 "),r("em",[t._v("화살표 마크")]),t._v("를 참고하십시오).")]),t._v(" "),r("p",[r("img",{attrs:{src:o(511),alt:"Cube 장착 - 전면 방향"}})]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("컨트롤러를 권장/기본 방향으로 장착하기 어려운 경우에는 (예 : 공간 제약으로 인해) 실제 장착한 방향을 소프트웨어에 설정하여야 합니다 ( "),r("RouterLink",{attrs:{to:"/ko/config/flight_controller_orientation.html"}},[t._v("기체 콘트롤러 방향 ")]),t._v(" 참고).")],1)]),t._v(" "),r("p",[t._v("Cube를 (키트에 포함된) 진동 감쇠 폼 패드 또는 장착 나사를 사용해 장착할 수 있습니다. Cube 액세서리에 포함된 장착 1.8mm 두께의 프레임보드 전용으로 설계되었습니다. 커스텀 나사는 나사산 길이가 6mm~7.55mm인 M2.5 나사여야 합니다.")]),t._v(" "),r("p",[r("img",{attrs:{src:o(512),alt:"Cube 마운트 - 장착 플레이트"}})]),t._v(" "),r("p",[r("a",{attrs:{id:"gps"}})]),t._v(" "),r("h2",{attrs:{id:"gps-나침반-안전-스위치-led"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#gps-나침반-안전-스위치-led"}},[t._v("#")]),t._v(" GPS + 나침반 + 안전 스위치 + LED")]),t._v(" "),r("p",[t._v("The recommended GPS modules are the "),r("em",[t._v("Here")]),t._v(" and "),r("RouterLink",{attrs:{to:"/ko/gps_compass/rtk_gps_hex_hereplus.html"}},[t._v("Here+")]),t._v(", both of which incorporate a GPS module, Compass, Safety Switch and "),r("RouterLink",{attrs:{to:"/ko/getting_started/led_meanings.html"}},[t._v("LEDs")]),t._v(". The difference between the modules is that "),r("em",[t._v("Here+")]),t._v(" supports centimeter level positioning via "),r("RouterLink",{attrs:{to:"/ko/advanced_features/rtk-gps.html"}},[t._v("RTK")]),t._v(". Otherwise they are used/connected in the same way.")],1),t._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),r("p",[t._v("The "),r("RouterLink",{attrs:{to:"/ko/gps_compass/rtk_gps_hex_hereplus.html"}},[t._v("Here+")]),t._v(" has been superseded by the "),r("a",{attrs:{href:"https://www.cubepilot.org/#/here/here3",target:"_blank",rel:"noopener noreferrer"}},[t._v("Here3"),r("OutboundLink")],1),t._v(" a "),r("RouterLink",{attrs:{to:"/ko/uavcan/"}},[t._v("UAVCAN")]),t._v(" RTK-GNSS that incorporate a compass and "),r("RouterLink",{attrs:{to:"/ko/getting_started/led_meanings.html"}},[t._v("LEDs")]),t._v(" (but no safety switch). See "),r("RouterLink",{attrs:{to:"/ko/uavcan/"}},[t._v("UAVCAN")]),t._v(" for documentation on how it should be connected.")],1)]),t._v(" "),r("p",[t._v("모듈은 방향 마커가 기체 앞쪽으로 향하도록 가능한 프레임에서 멀리 장착해야 합니다 (다른 전자 장치와 나침반을 분리하면 간섭이 줄어듭니다). 제공된 8핀 케이블을 사용하여 "),r("code",[t._v("GPS1")]),t._v(" 포트에 연결해야 합니다..")]),t._v(" "),r("p",[t._v("아래의 다이어그램은 모듈과 모듈 연결의 개요를 보여줍니다.")]),t._v(" "),r("p",[r("img",{attrs:{src:o(513),alt:"Here+ 연결 다이어그램"}})]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("GPS")]),t._v(" "),r("p",[t._v("모듈에 내장된 안전 스위치는 "),r("em",[t._v("기본적으로")]),t._v(" 활성화되어 있습니다 (활성화되면 PX4는 차량 시동을 걸 수 없습니다). 비활성화하려면 안전 스위치를 1초간 길게 누르십시오. 안전 스위치를 다시 눌러 안전 장치를 활성화하고 기체 시동을 끌 수 있습니다 (어떤 이유로든 조종기나 지상국 프로그램이 기체 시동을 끌 수 없을 때 유용합니다).")])]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[t._v("구형 6핀 GPS 모듈을 사용하려면, GPS와 "),r("a",{attrs:{href:"#safety_switch"}},[t._v("안전 스위치")]),t._v("를 모두 연결하는 데 사용할 수 있는 케이블이 키트에 함께 제공됩니다.")])]),t._v(" "),r("p",[r("a",{attrs:{id:"safety_switch"}})]),t._v(" "),r("h2",{attrs:{id:"안전-스위치"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#안전-스위치"}},[t._v("#")]),t._v(" 안전 스위치")]),t._v(" "),r("p",[t._v("Cube와 함께 구성된 "),r("em",[t._v("전용")]),t._v(" 안전 스위치는 (내장 안전 스위치를 포함한) 권장 "),r("a",{attrs:{href:"#gps"}},[t._v("GPS")]),t._v("를 사용하지 않을 경우에만 필요합니다.")]),t._v(" "),r("p",[t._v("GPS 없이 비행하는 경우, 기체에 시동을 걸고 비행하기 위해 안전 스위치는 반드시 "),r("code",[t._v("GPS1")]),t._v(" 포트(또는 구형 6핀 케이블 사용시 제공된 케이블을 통해)에 장착되어어야 합니다.")]),t._v(" "),r("h2",{attrs:{id:"버저"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#버저"}},[t._v("#")]),t._v(" 버저")]),t._v(" "),r("p",[t._v("The buzzer plays "),r("RouterLink",{attrs:{to:"/ko/getting_started/tunes.html"}},[t._v("tones and tunes")]),t._v(" that provide audible notification of vehicle status (including tones that are helpful for debugging startup issues, and that notify of conditions that might affect safe operation of the vehicle).")],1),t._v(" "),r("p",[t._v("The buzzer should be connected to the USB port as shown (no further configuration is required).")]),t._v(" "),r("p",[r("img",{attrs:{src:o(514),alt:"Cube Buzzer"}})]),t._v(" "),r("p",[r("a",{attrs:{id:"rc_control"}})]),t._v(" "),r("h2",{attrs:{id:"무선-조종"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#무선-조종"}},[t._v("#")]),t._v(" 무선 조종")]),t._v(" "),r("p",[t._v("A "),r("RouterLink",{attrs:{to:"/ko/getting_started/rc_transmitter_receiver.html"}},[t._v("remote control (RC) radio system")]),t._v(" is required if you want to "),r("em",[t._v("manually")]),t._v(" control your vehicle (PX4 does not require a radio system for autonomous flight modes).")],1),t._v(" "),r("p",[t._v("You will need to "),r("RouterLink",{attrs:{to:"/ko/getting_started/rc_transmitter_receiver.html"}},[t._v("select a compatible transmitter/receiver")]),t._v(" and then "),r("em",[t._v("bind")]),t._v(" them so that they communicate (read the instructions that come with your specific transmitter/receiver).")],1),t._v(" "),r("p",[t._v("The instructions below show how to connect the different types of receivers.")]),t._v(" "),r("h3",{attrs:{id:"ppm-sum-futaba-s-bus-수신기"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ppm-sum-futaba-s-bus-수신기"}},[t._v("#")]),t._v(" PPM-SUM / Futaba S.Bus 수신기")]),t._v(" "),r("p",[t._v("Connect the ground(-),power(+),and signal(S) wires to the RC pins using the provided 3-wire servo cable.")]),t._v(" "),r("p",[r("img",{attrs:{src:o(515),alt:"Cube - RCIN"}})]),t._v(" "),r("h3",{attrs:{id:"spektrum-위성-수신기"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#spektrum-위성-수신기"}},[t._v("#")]),t._v(" Spektrum 위성 수신기")]),t._v(" "),r("p",[t._v("Spektrum DSM, DSM2, and DSM-X Satellite RC receivers connect to the "),r("strong",[t._v("SPKT/DSM")]),t._v(" port.")]),t._v(" "),r("p",[r("img",{attrs:{src:o(516),alt:"Cube - Spektrum"}})]),t._v(" "),r("h3",{attrs:{id:"pwm-수신기"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pwm-수신기"}},[t._v("#")]),t._v(" PWM 수신기")]),t._v(" "),r("p",[t._v("The Cube cannot directly connect to PPM or PWM receivers that have an "),r("em",[t._v("individual wire for each channel")]),t._v(". PWM receivers must therefore connect to the "),r("strong",[t._v("RCIN")]),t._v(" port "),r("em",[t._v("via")]),t._v(" a PPM encoder module, which may be purchased from hex.aero or proficnc.com.")]),t._v(" "),r("h2",{attrs:{id:"전원"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#전원"}},[t._v("#")]),t._v(" 전원")]),t._v(" "),r("p",[t._v("Cube is typically powered from a Lithium Ion Polymer (LiPo) Battery via a Power Module (supplied with the kit) that is connected to the "),r("strong",[t._v("POWER1")]),t._v(" port. The power module provides reliable supply and voltage/current indication to the board, and may "),r("em",[t._v("separately")]),t._v(" supply power to ESCs that are used to drive motors on a multicopter vehicle.")]),t._v(" "),r("p",[t._v("A typical power setup for a Multicopter vehicle is shown below.")]),t._v(" "),r("p",[r("img",{attrs:{src:o(517),alt:"Power Setup - MC"}})]),t._v(" "),r("p",[t._v(":::Note The power (+) rail of "),r("strong",[t._v("MAIN/AUX")]),t._v(" is "),r("em",[t._v("not powered")]),t._v(" by the power module supply to the flight controller. In order to drive servos for rudders, elevons, etc., it will need to be separately powered.")]),t._v(" "),r("p",[t._v("This can be done by connecting the power rail to a BEC equipped ESC, a standalone 5V BEC, or a 2S LiPo battery. Ensure the voltage of servo you are going to use is appropriate!\n:::")]),t._v(" "),r("p",[r("a",{attrs:{id:"telemetry"}})]),t._v(" "),r("h2",{attrs:{id:"텔레메트리-시스템-선택-사항"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#텔레메트리-시스템-선택-사항"}},[t._v("#")]),t._v(" 텔레메트리 시스템 (선택 사항)")]),t._v(" "),r("p",[t._v("A telemetry system allows you to communicate with, monitor, and control a vehicle in flight from a ground station (for example, you can direct the UAV to a particular position, or upload a new mission).")]),t._v(" "),r("p",[t._v("The communication channel is via "),r("RouterLink",{attrs:{to:"/ko/telemetry/"}},[t._v("Telemetry Radios")]),t._v(". The vehicle-based radio should be connected to the "),r("strong",[t._v("TELEM1")]),t._v(" port (if connected to this port, no further configuration is required). The other radio is connected to your ground station computer or mobile device (usually via USB).")],1),t._v(" "),r("p",[r("img",{attrs:{src:o(518),alt:"Telemetry Radio"}})]),t._v(" "),r("h2",{attrs:{id:"sd-카드-선택-사항"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sd-카드-선택-사항"}},[t._v("#")]),t._v(" SD 카드 (선택 사항)")]),t._v(" "),r("p",[t._v("SD cards are highly recommended as they are needed to "),r("RouterLink",{attrs:{to:"/ko/getting_started/flight_reporting.html"}},[t._v("log and analyse flight details")]),t._v(", to run missions, and to use UAVCAN-bus hardware. Insert the Micro-SD card into Cube as shown (if not already present).")],1),t._v(" "),r("p",[r("img",{attrs:{src:o(519),alt:"Cube - Mount SDCard"}})]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[t._v("For more information see "),r("RouterLink",{attrs:{to:"/ko/getting_started/px4_basic_concepts.html#sd_cards"}},[t._v("Basic Concepts > SD Cards (Removable Memory)")]),t._v(".")],1)]),t._v(" "),r("h2",{attrs:{id:"모터"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#모터"}},[t._v("#")]),t._v(" 모터")]),t._v(" "),r("p",[t._v("Motors/servos are connected to the "),r("strong",[t._v("MAIN")]),t._v(" and "),r("strong",[t._v("AUX")]),t._v(" ports in the order specified for your vehicle in the "),r("RouterLink",{attrs:{to:"/ko/airframes/airframe_reference.html"}},[t._v("Airframe Reference")]),t._v(".")],1),t._v(" "),r("p",[r("img",{attrs:{src:o(520),alt:"Cube - Motor Connections"}})]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v('This reference lists the output port to motor/servo mapping for all supported air and ground frames (if your frame is not listed in the reference then use a "generic" airframe of the correct type).')])]),t._v(" "),r("p",[t._v(":::caution\nThe mapping is not consistent across frames (e.g. you can't rely on the throttle being on the same output for all plane frames). Make sure to use the correct mapping for your vehicle.\n:::")]),t._v(" "),r("h2",{attrs:{id:"기타-주변-장치"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#기타-주변-장치"}},[t._v("#")]),t._v(" 기타 주변 장치")]),t._v(" "),r("p",[t._v("The wiring and configuration of optional/less common components is covered within the topics for individual "),r("RouterLink",{attrs:{to:"/ko/peripherals/"}},[t._v("peripherals")]),t._v(".")],1),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("If connecting peripherals to the port labeled "),r("code",[t._v("GPS2")]),t._v(", assign the PX4 "),r("RouterLink",{attrs:{to:"/ko/peripherals/serial_configuration.html"}},[t._v("serial port configuration parameter")]),t._v(" for the hardware to "),r("code",[t._v("TEL4")]),t._v(" (not GPS2).")],1)]),t._v(" "),r("h2",{attrs:{id:"설정"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#설정"}},[t._v("#")]),t._v(" 설정")]),t._v(" "),r("p",[t._v("Configuration is performed using "),r("a",{attrs:{href:"http://qgroundcontrol.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGroundContro"),r("OutboundLink")],1),t._v(".")]),t._v(" "),r("p",[t._v("After downloading, installing and running "),r("em",[t._v("QGroundControl")]),t._v(", connect the board to your computer as shown.")]),t._v(" "),r("p",[r("img",{attrs:{src:o(521),alt:"Cube - USB Connection to Computer"}})]),t._v(" "),r("p",[t._v("Basic/common configuration information is covered in: "),r("RouterLink",{attrs:{to:"/ko/config/"}},[t._v("Autopilot Configuration")]),t._v(".")],1),t._v(" "),r("p",[t._v("QuadPlane specific configuration is covered here: "),r("RouterLink",{attrs:{to:"/ko/config_vtol/vtol_quad_configuration.html"}},[t._v("QuadPlane VTOL Configuration")])],1),t._v(" "),r("h3",{attrs:{id:"bootloader-updates"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#bootloader-updates"}},[t._v("#")]),t._v(" Bootloader Updates")]),t._v(" "),r("p",[t._v("If you get the [Program PX4IO(../getting_started/tunes.md#program-px4io) warning tone after flashing PX4 firmware, you may need to update the bootloader.")]),t._v(" "),r("p",[t._v("The safety switch can be used to force bootloader updates. To use this feature de-power the Cube, hold down the safety switch, then power the Cube over USB.")]),t._v(" "),r("h2",{attrs:{id:"추가적인-정보"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#추가적인-정보"}},[t._v("#")]),t._v(" 추가적인 정보")]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk-2.html"}},[t._v("Cube Black")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/flight_controller/cubepilot_cube_yellow.html"}},[t._v("Cube Yellow")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/flight_controller/cubepilot_cube_orange.html"}},[t._v("Cube Orange")])],1),t._v(" "),r("li",[t._v("Cube 문서 (제조사) :\n"),r("ul",[r("li",[r("a",{attrs:{href:"https://docs.cubepilot.org/user-guides/autopilot/the-cube-module-overview",target:"_blank",rel:"noopener noreferrer"}},[t._v("큐브 모듈 개요"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://docs.cubepilot.org/user-guides/autopilot/the-cube-user-manual",target:"_blank",rel:"noopener noreferrer"}},[t._v("큐브 사용 설명서"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://docs.cubepilot.org/user-guides/carrier-boards/mini-carrier-board",target:"_blank",rel:"noopener noreferrer"}},[t._v("미니 캐리어 보드"),r("OutboundLink")],1)])])])])])}),[],!1,null,null,null);e.default=s.exports},347:function(t,e,o){t.exports=o.p+"assets/img/cube_orange_hero.944ff463.jpg"},348:function(t,e,o){t.exports=o.p+"assets/img/cube_black_hero.6173ab1f.png"},349:function(t,e,o){t.exports=o.p+"assets/img/cube_yellow_hero.77cbe270.jpg"},509:function(t,e,o){t.exports=o.p+"assets/img/cube_accessories.0be610f8.jpg"},510:function(t,e,o){t.exports=o.p+"assets/img/cube_wiring_overview.5b844fee.jpg"},511:function(t,e,o){t.exports=o.p+"assets/img/cube_mount_front.1a37ae44.jpg"},512:function(t,e,o){t.exports=o.p+"assets/img/cube_mount_plate_screws.def62b56.jpg"},513:function(t,e,o){t.exports=o.p+"assets/img/here_plus_connector.e4b10b83.png"},514:function(t,e,o){t.exports=o.p+"assets/img/cube_buzzer.b528b592.jpg"},515:function(t,e,o){t.exports=o.p+"assets/img/cube_rc_in.868e004f.jpg"},516:function(t,e,o){t.exports=o.p+"assets/img/cube_rc_spektrum.7c514293.jpg"},517:function(t,e,o){t.exports=o.p+"assets/img/cube_wiring_power_mc.16cfc115.jpg"},518:function(t,e,o){t.exports=o.p+"assets/img/cube_schematic_telemetry.d2afffe2.jpg"},519:function(t,e,o){t.exports=o.p+"assets/img/cube_sdcard.193e2b07.jpg"},520:function(t,e,o){t.exports=o.p+"assets/img/cube_main_aux_outputs.c67bd070.jpg"},521:function(t,e,o){t.exports=o.p+"assets/img/cube_usb_connection.dc108f09.jpg"}}]);