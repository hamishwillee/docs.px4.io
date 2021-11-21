(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{1156:function(t,e,a){t.exports=a.p+"assets/img/qgc_main_screen.e562d4c1.jpg"},1157:function(t,e,a){t.exports=a.p+"assets/img/pixhawk4_main_aux_ports.ab72e7e9.jpg"},1158:function(t,e,a){t.exports=a.p+"assets/img/pixhawk4mini_pwm.3818131b.png"},1159:function(t,e,a){t.exports=a.p+"assets/img/frame_heading_top.e8e4ffe3.png"},2374:function(t,e,a){"use strict";a.r(e);var o=a(19),r=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"기본-개념"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#기본-개념"}},[t._v("#")]),t._v(" 기본 개념")]),t._v(" "),o("p",[t._v("무인 항공기의 기본 개념과 PX4 사용법에 대하여 설명합니다. 초보자뿐만 아니라 전문가에게도 유익한 자료들이 많이 있습니다.")]),t._v(" "),o("p",[t._v("기본 개념에 익숙하시면, "),o("RouterLink",{attrs:{to:"/ko/assembly/"}},[t._v("기본 조립")]),t._v("편에서 자동비행장치의 배선방법을 바로 공부할 수 있습니다. "),o("em",[t._v("QGroundControl")]),t._v("를 이용한 펌웨어 설치 방법은 "),o("RouterLink",{attrs:{to:"/ko/config/"}},[t._v("기본 설정")]),t._v("편을 참고하십시오.")],1),t._v(" "),o("h2",{attrs:{id:"드론의-정의"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#드론의-정의"}},[t._v("#")]),t._v(" 드론의 정의")]),t._v(" "),o("p",[t._v("드론은 원격 또는 자동으로 조종할 수 있는 무인로봇 차량입니다.")]),t._v(" "),o("p",[t._v("드론은 "),o("a",{attrs:{href:"https://px4.io/ecosystem/commercial-systems/",target:"_blank",rel:"noopener noreferrer"}},[t._v("개인, 산업체, 공공기관 및 국방 분야"),o("OutboundLink")],1),t._v("등의 다양한 분야에서 사용되고 있습니다. 또한, 항공 사진/영상, 화물 운송, 경주, 수색 및 탐사 등의 분야에서 사용됩니다.")]),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),o("p",[t._v("항공용, 지상용, 해양 및 수중 드론이 있습니다. 드론의 공식 용어에는 Unmanned Aerial Vehicles (UAV), Unmanned Aerial Systems (UAS), Unmanned Ground Vehicles (UGV), Unmanned Surface Vehicles (USV)와 Unmanned Underwater Vehicles (UUV) 등이 있습니다.")])]),t._v(" "),o("p",[t._v("드론의 두뇌에 해당하는 장치를 자동비행장치(오토파일럿)라고 합니다. 자동비행장치는 여러가지 비행 모듈들로 구성됩니다.")]),t._v(" "),o("p",[o("a",{attrs:{id:"autopilot"}})]),t._v(" "),o("h2",{attrs:{id:"px4-자동비행장치"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#px4-자동비행장치"}},[t._v("#")]),t._v(" PX4 자동비행장치")]),t._v(" "),o("p",[o("a",{attrs:{href:"https://px4.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4"),o("OutboundLink")],1),t._v("는 오픈 소스 기반의 강력한 "),o("em",[t._v("자동조종장치")]),t._v("입니다.")]),t._v(" "),o("p",[t._v("PX4의 주요 기능은 다음과 같습니다.")]),t._v(" "),o("ul",[o("li",[t._v("항공기(멀티콥터, 고정익 및 수직이착륙기), 지상운송체, 잠수정 등 "),o("RouterLink",{attrs:{to:"/ko/airframes/airframe_reference.html"}},[t._v("다양한 차량들")]),t._v("을 제어합니다.")],1),t._v(" "),o("li",[o("a",{attrs:{href:"#vehicle_controller"}},[t._v("차량 콘트롤러")]),t._v(", 센서 및 다양한 주변 장치 관점에서 매우 탁월한 하드웨어 선택입니다.")]),t._v(" "),o("li",[t._v("유연하고 강력한 "),o("a",{attrs:{href:"#flight_modes"}},[t._v("비행 모드")]),t._v("와 "),o("a",{attrs:{href:"#safety"}},[t._v("안전 기능")]),t._v("을 지원합니다.")])]),t._v(" "),o("p",[t._v("PX4는 "),o("a",{attrs:{href:"#qgc"}},[t._v("QGroundControl")]),t._v(" 지상국, "),o("a",{attrs:{href:"https://pixhawk.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("픽스호크 하드웨어"),o("OutboundLink")],1),t._v(", 보조 컴퓨터, 카메라, MAVLink 프로토콜 지원 하드웨어를 통합하는 "),o("a",{attrs:{href:"http://mavsdk.mavlink.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVSDK"),o("OutboundLink")],1),t._v("를 포함하는 방대한 드론 플랫폼의 핵심입니다. PX4는 "),o("a",{attrs:{href:"https://www.dronecode.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("드론코드 프로젝트"),o("OutboundLink")],1),t._v("의 지원을 받고 있습니다.")]),t._v(" "),o("p",[o("a",{attrs:{id:"qgc"}})]),t._v(" "),o("h2",{attrs:{id:"qgroundcontrol"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#qgroundcontrol"}},[t._v("#")]),t._v(" QGroundControl")]),t._v(" "),o("p",[t._v("드론코드에서 지원하는 지상국은 "),o("a",{attrs:{href:"http://qgroundcontrol.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGroundControl"),o("OutboundLink")],1),t._v("입니다. "),o("em",[t._v("QGroundControl")]),t._v("을 사용하여 "),o("RouterLink",{attrs:{to:"/ko/getting_started/flight_controller_selection.html"}},[t._v("비행 콘트롤러")]),t._v("의 PX4 업로드, 기체 설정, 다양한 매개변수 변경, 실시간 비행 정보 조회, 완전 자동 임무 비행 등의 작업이 가능합니다.")],1),t._v(" "),o("p",[o("em",[t._v("QGroundControl")]),t._v("은 윈도우, 안드로이드, 맥오에스 및 리눅스 운영체제를 지원합니다. "),o("a",{attrs:{href:"http://qgroundcontrol.com/downloads/",target:"_blank",rel:"noopener noreferrer"}},[t._v("여기"),o("OutboundLink")],1),t._v("에서 다운로드하고 설치할 수 있습니다.")]),t._v(" "),o("p",[o("img",{attrs:{src:a(1156),alt:"QGC 메인 화면"}})]),t._v(" "),o("p",[o("span",{attrs:{id:"vehicle_controller"}})]),t._v(" "),o("h2",{attrs:{id:"비행-콘트롤러-보드"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#비행-콘트롤러-보드"}},[t._v("#")]),t._v(" 비행 콘트롤러(보드)")]),t._v(" "),o("p",[t._v("PX4는 초기에는 "),o("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk_series.html"}},[t._v("Pixhawk 시리즈")]),t._v("에서만 실행되도록 설계되었으나, 지금은 리눅스 뿐만 아니라 다양한 하드웨어에서도 실행됩니다. 차량의 물리적 조건, 운용 목적과 비용을 고려하여 적절한 보드를 선택하여야 합니다.")],1),t._v(" "),o("p",[t._v("자세한 내용은 "),o("RouterLink",{attrs:{to:"/ko/getting_started/flight_controller_selection.html"}},[t._v("비행 콘트롤러 선택")]),t._v("을 참고하십시오.")],1),t._v(" "),o("h2",{attrs:{id:"센서"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#센서"}},[t._v("#")]),t._v(" 센서")]),t._v(" "),o("p",[t._v("PX4는 기체의 상태를 센서로 결정합니다. 이는 자율비행 기체 안정화에 필수 과정입니다. 각속도 센서, 가속도 센서, 지자기 센서(나침반)와 기압 센서는 시스템 구동을 위한 "),o("em",[t._v("최소 요구 사항")]),t._v("입니다. "),o("RouterLink",{attrs:{to:"/ko/getting_started/flight_modes.html#categories"}},[t._v("자동 모드")]),t._v("와 기타 모드를 사용하기 위해서는 GPS와 같은 위치 측정 시스템이 요구됩니다. 고정익과 수직이착륙기에는 대기속도 센서가 필수입니다.")],1),t._v(" "),o("p",[t._v("더 자세한 정보는 다음을 참고하십시오.")]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/ko/getting_started/sensor_selection.html"}},[t._v("센서")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/ko/peripherals/"}},[t._v("주변 장치")])],1)]),t._v(" "),o("p",[o("a",{attrs:{id:"outputs"}})]),t._v(" "),o("h2",{attrs:{id:"출력-장치-모터-서보-액츄에이터"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#출력-장치-모터-서보-액츄에이터"}},[t._v("#")]),t._v(" 출력 장치: 모터, 서보, 액츄에이터")]),t._v(" "),o("p",[t._v("PX4는 모터 속도(예 : "),o("a",{attrs:{href:"#esc_and_motors"}},[t._v(" ESC")]),t._v("를 통하여), 에일러론과 플랩 같은 비행 표면, 카메라 트리거, 낙하산, 그리퍼 및 기타 적재 장비 등을 "),o("em",[t._v("출력")]),t._v("을 통하여 제어합니다.")]),t._v(" "),o("p",[t._v("아래 그림은 "),o("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk4.html"}},[t._v("Pixhawk 4")]),t._v("와 "),o("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk4_mini.html"}},[t._v("Pixhawk 4 미니")]),t._v("의 PWM 출력 포트를 설명합니다.")],1),t._v(" "),o("p",[o("img",{attrs:{src:a(1157),alt:"Pixhawk 4 출력 포트"}}),t._v(" "),o("img",{attrs:{src:a(1158),alt:"Pixhawk4 mini MAIN 포트"}})]),t._v(" "),o("p",[t._v("출력 장치는 크게 "),o("code",[t._v("MAIN")]),t._v(" 포트와 "),o("code",[t._v("AUX")]),t._v(" 포트로 나누며, 포트는 번호로 구분됩니다. "),o("code",[t._v("MAINn")]),t._v("과 "),o("code",[t._v("AUXn")]),t._v("의 "),o("code",[t._v("n")]),t._v("에는 1 ~ 6 또는 1 ~ 8까지의 번호가 부여됩니다.")]),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),o("p",[t._v("각 출력장치에는 기체별로 고유한 기능을 부여됩니다. 기체의 출력 매핑은 "),o("RouterLink",{attrs:{to:"/ko/airframes/airframe_reference.html"}},[t._v("기체 참조")]),t._v(" 편에서 설명합니다.")],1)]),t._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),o("p",[t._v("어떤 비행 콘트롤러에는 "),o("code",[t._v("MAIN")]),t._v(" 출력 장치만 있거나(예: "),o("em",[t._v("Pixhawk 4 미니")]),t._v("), 6개의 "),o("code",[t._v("MAIN")]),t._v(" 또는 "),o("code",[t._v("AUX")]),t._v(" 출력 장치만 있을 수 있습니다. 비행 콘트롤러에는 선택한 "),o("RouterLink",{attrs:{to:"/ko/airframes/airframe_reference.html"}},[t._v("기체")]),t._v("에 필요할 출력 포트가 있는 지 확인하십시오.")],1)]),t._v(" "),o("p",[t._v("보틍, "),o("code",[t._v("MAIN")]),t._v(" 포트는 비행 제어용이며, "),o("code",[t._v("AUX")]),t._v(" 포트는 액츄에이터나 적재 장비들을 제어합니다. 때로는, 수직 이착륙기처럼 "),o("code",[t._v("MAIN")]),t._v(" 포트가 부족할 경우에는 "),o("code",[t._v("AUX")]),t._v(" 포트를 비행 제어용으로 사용하기도 합니다. 예를 들어, "),o("RouterLink",{attrs:{to:"/ko/airframes/airframe_reference.html#copter_quadrotor_x_generic_quadcopter"}},[t._v("일반 쿼드콥터")]),t._v("에서는 "),o("code",[t._v("MAIN")]),t._v(" 포트 1 ~ 4을 모터 제어용으로 사용하며, 나머지 "),o("code",[t._v("MAIN")]),t._v(" 포트와 "),o("code",[t._v("AUX")]),t._v(" 포트를 RC 제어용으로 사용합니다.")],1),t._v(" "),o("p",[o("a",{attrs:{href:"#vehicle_controller"}},[t._v("비행 콘트롤러")]),t._v("의 실제 출력용 포트와 버스는 하드웨어와 PX4 설정에 따라 달라집니다. "),o("em",[t._v("일반적으로")]),t._v(" PWM 출력 포트는 위에서 설명한 대로 사용되며, 보틍은 "),o("code",[t._v("MAIN OUT")]),t._v(" 또는 "),o("code",[t._v("AUX OUT")]),t._v("으로 표시되어 있습니다.")]),t._v(" "),o("p",[o("code",[t._v("FMU PWM OUT")]),t._v(", "),o("code",[t._v("IO PWM Out")]),t._v(" 방식이나 이와 유사한 방식으로 표시합니다. 픽스호크 콘트롤러에는 주 FMU 보드가 있고, 별도의 입출력용 보드를 연결할 수도 있습니다. 별도의 입출력 보드가 있을 경우에는, "),o("code",[t._v("AUX")]),t._v(" 포트는 FMU 보드에 연결하고, "),o("code",[t._v("MAIN")]),t._v(" 포트는 입출력 보드에 연결합니다. 다른 경우로는 "),o("code",[t._v("MAIN")]),t._v(" 포트를 FMU 보드에 연결하고, "),o("code",[t._v("AUX")]),t._v(" 포트가 없을 수도 있습니다. FMU 출력 포트는 PWM 처럼 짧은 지연 시간이 요구되는 "),o("RouterLink",{attrs:{to:"/ko/peripherals/dshot.html"}},[t._v("D-shot")]),t._v(", "),o("em",[t._v("One-shot")]),t._v(" 프로토콜에 사용됩니다. FMU 출력 포트는 레이싱 드론처럼 높은 성능이 요구되는 기체에 사용됩니다.")],1),t._v(" "),o("p",[t._v("출력 포트는 UAVCAN 노드로 연결할 수 있습니다(예: UAVCAN "),o("RouterLink",{attrs:{to:"/ko/peripherals/uavcan_escs.html"}},[t._v("모터 제어 장치")]),t._v("). 이 경우에는 동일한 포트 연결 방식을 사용합니다.")],1),t._v(" "),o("p",[o("strong",[t._v("참고:")])]),t._v(" "),o("ul",[o("li",[o("code",[t._v("MAIN")]),t._v(" 포트와 "),o("code",[t._v("AUX")]),t._v(" 포트에는 PWM/Dshot/OneShot 출력 제어에 충분한 6개에서 8개의 출력 포트를 가지고 있습니다. 이론적으로는, 보드 버스에서 더 많은 출력 포트를 제공할 수 있습니다. UAVCAN 버스에는 이러한 제한이 없습니다.")])]),t._v(" "),o("p",[o("a",{attrs:{id:"esc_and_motors"}})]),t._v(" "),o("h2",{attrs:{id:"전자변속기-esc-와-모터"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#전자변속기-esc-와-모터"}},[t._v("#")]),t._v(" 전자변속기(ESC)와 모터")]),t._v(" "),o("p",[t._v("대부분의 PX4 드론은 비행 전자변속기(ESC)로 브러시리스 모터를 제어합니다. 전자변속기는 제어 장치 신호를 모터의 전력으로 변환합니다.")]),t._v(" "),o("p",[t._v("PX4가 지원하는 전자변속기와 모터 정보는 여기를 참고하십시오.")]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/ko/peripherals/esc_motors.html"}},[t._v("전자변속기와 모터")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/ko/advanced_config/esc_calibration.html"}},[t._v("전자변속기 보정")])],1),t._v(" "),o("li",[o("a",{attrs:{href:"https://oscarliang.com/esc-firmware-protocols/",target:"_blank",rel:"noopener noreferrer"}},[t._v("전자변속기 펌웨어와 프로토콜 개요"),o("OutboundLink")],1),t._v("(oscarliang.com)")])]),t._v(" "),o("h2",{attrs:{id:"배터리와-전원"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#배터리와-전원"}},[t._v("#")]),t._v(" 배터리와 전원")]),t._v(" "),o("p",[t._v("PX4 드론은 리튬-폴리머(LiPo) 배터리를 가장 많이 사용합니다. 일반적으로, 배터리는 비행 콘트롤러와 전자변속기(모터용)에 전원을 제공하는 "),o("em",[t._v("전원 모듈")]),t._v("이나 "),o("em",[t._v("전원 관리 보드")]),t._v("를 통하여 시스템에 연결됩니다.")]),t._v(" "),o("p",[t._v("배터리와 배터리 설정 정보는 "),o("RouterLink",{attrs:{to:"/ko/config/battery.html"}},[t._v("배터리 설정")]),t._v("과 "),o("RouterLink",{attrs:{to:"/ko/assembly/"}},[t._v(" 기본 조립")]),t._v("(예: "),o("RouterLink",{attrs:{to:"/ko/assembly/quick_start_pixhawk4.html#power"}},[t._v("픽스호크 4 배선 빠른 시작 > 전원")]),t._v(")를 참고하십시오.")],1),t._v(" "),o("p",[o("a",{attrs:{id:"rc_systems"}})]),t._v(" "),o("h2",{attrs:{id:"무선-조종-rc"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#무선-조종-rc"}},[t._v("#")]),t._v(" 무선 조종(RC)")]),t._v(" "),o("p",[o("RouterLink",{attrs:{to:"/ko/getting_started/rc_transmitter_receiver.html"}},[t._v("무선 조종기(RC)")]),t._v("를 사용하여 기체를 "),o("em",[t._v("수동")]),t._v(" 제어할 수 있습니다. 송신기(무선 조종기에 장착)와 수신기(기체에 장착)로 구성됩니다. 일부 RC에서는 자동조종장치에서 전송한 텔레메트리를 수신할 수 있습니다.")],1),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("PX4는 자율비행 모드에서 RC가 필수 사항은 아닙니다.")])]),t._v(" "),o("p",[o("img",{attrs:{src:a(389),alt:"Taranis X9D 송신기"}})]),t._v(" "),o("p",[t._v("RC 선택 방법은 "),o("RouterLink",{attrs:{to:"/ko/getting_started/rc_transmitter_receiver.html"}},[t._v("RC 선택")]),t._v("을 참고하십시오. 다음과 같은 관련 주제들을 설명합니다.")],1),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/ko/config/radio.html"}},[t._v("무선/RC 설정")]),t._v(" - "),o("em",[t._v("QGroundControl")]),t._v("에서의 RC 설정.")],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/ko/flying/basic_flying.html"}},[t._v("비행 첫걸음")]),t._v(" - RC 비행 방법을 설명합니다.")],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/ko/peripherals/frsky_telemetry.html"}},[t._v("FrSky 텔레메트리")]),t._v(" - PX4의 텔레메트리 정보나 상태 정보를 수신을 위한 RC 송신기 설정방법을 설명합니다.")],1)]),t._v(" "),o("p",[o("a",{attrs:{id:"joystick"}})]),t._v(" "),o("h2",{attrs:{id:"지상-통제국과-조이스틱"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#지상-통제국과-조이스틱"}},[t._v("#")]),t._v(" 지상 통제국과 조이스틱")]),t._v(" "),o("p",[o("em",[t._v("QGroundControl")]),t._v("에서 "),o("RouterLink",{attrs:{to:"/ko/config/joystick.html"}},[t._v("조이스틱")]),t._v("을 사용하여 PX4를 수동으로 조종할 수 있습니다. QGroundControl은 조이스틱 신호를 MAVLink 메시지로 변환하여 텔레메트리로 전송합니다. 이와 같은 방식은 "),o("em",[t._v("Auterion")]),t._v(", "),o("a",{attrs:{href:"https://auterion-gs.com/skynav/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Skynav"),o("OutboundLink")],1),t._v(", "),o("em",[t._v("UAVComponents")]),t._v("와 "),o("a",{attrs:{href:"https://www.uavcomp.com/command-control/micronav/",target:"_blank",rel:"noopener noreferrer"}},[t._v("MicroNav"),o("OutboundLink")],1),t._v("에서 사용합니다. 조이스틱은 기체 시뮬레이션에서 자주 사용됩니다.")],1),t._v(" "),o("p",[o("img",{attrs:{src:a(372),alt:"MicroNav와 지상국에서 조이스틱을 사용하는 그림"}})]),t._v(" "),o("h2",{attrs:{id:"안전-스위치"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#안전-스위치"}},[t._v("#")]),t._v(" 안전 스위치")]),t._v(" "),o("p",[t._v("It is common for vehicles to have a "),o("em",[t._v("safety switch")]),t._v(" that must be engaged before the vehicle can be "),o("a",{attrs:{href:"#arming"}},[t._v("armed")]),t._v(" (when armed, motors are powered and propellers can turn). Commonly the safety switch is integrated into a GPS unit, but it may also be a separate physical component.")]),t._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),o("p",[t._v("A vehicle that is armed is potentially dangerous. The safety switch is an additional mechanism that prevents arming from happening by accident.")])]),t._v(" "),o("h2",{attrs:{id:"텔레메트리-무선-통신"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#텔레메트리-무선-통신"}},[t._v("#")]),t._v(" 텔레메트리 무선 통신")]),t._v(" "),o("p",[o("RouterLink",{attrs:{to:"/ko/telemetry/"}},[t._v("Data/Telemetry Radios")]),t._v(" can provide a wireless MAVLink connection between a ground control station like "),o("em",[t._v("QGroundControl")]),t._v(" and a vehicle running PX4. This makes it possible to tune parameters while a vehicle is in flight, inspect telemetry in real-time, change a mission on the fly, etc.")],1),t._v(" "),o("h2",{attrs:{id:"외부-보조-컴퓨터"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#외부-보조-컴퓨터"}},[t._v("#")]),t._v(" 외부 보조 컴퓨터")]),t._v(" "),o("p",[t._v("PX4 can be controlled from a separate on-vehicle companion computer via a serial cable or wifi. The companion computer will usually communicate using a MAVLink API like the MAVSDK or MAVROS.")]),t._v(" "),o("p",[t._v("Relevent topics include:")]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/ko/flight_modes/offboard.html"}},[t._v("오프보드 모드")]),t._v(" - PX4 외부의 지상 통제국이나 보조 컴퓨터로 제어하는 비행 모드")],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/ko/robotics/"}},[t._v("로보틱스 API")])],1)]),t._v(" "),o("p",[o("span",{attrs:{id:"sd_cards"}})]),t._v(" "),o("h2",{attrs:{id:"sd-카드-휴대용-저장-장치"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#sd-카드-휴대용-저장-장치"}},[t._v("#")]),t._v(" SD 카드 (휴대용 저장 장치)")]),t._v(" "),o("p",[t._v("PX4 uses SD memory cards for storing "),o("RouterLink",{attrs:{to:"/ko/getting_started/flight_reporting.html"}},[t._v("flight logs")]),t._v(", and they are also required in order to use UAVCAN peripherals and fly "),o("RouterLink",{attrs:{to:"/ko/flying/missions.html"}},[t._v("missions")]),t._v(".")],1),t._v(" "),o("p",[t._v("By default, if no SD card is present PX4 will play the "),o("RouterLink",{attrs:{to:"/ko/getting_started/tunes.html#format-failed"}},[t._v("format failed (2-beep)")]),t._v(" tune twice during boot (and none of the above features will be available).")],1),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),o("p",[t._v("The maximum supported SD card size on Pixhawk boards is 32GB. The "),o("em",[t._v("SanDisk Extreme U3 32GB")]),t._v(" is "),o("RouterLink",{attrs:{to:"/ko/dev_log/logging.html#sd-cards"}},[t._v("highly recommended")]),t._v(".")],1)]),t._v(" "),o("p",[t._v("SD cards are never-the-less optional. Flight controllers that do not include an SD Card slot may:")]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#CBRK_BUZZER"}},[t._v("CBRK_BUZZER")]),t._v(" 매개변수로 알림음을 껍니다.")],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/ko/dev_log/logging.html#log-streaming"}},[t._v("스트림 로그")]),t._v("를 다른 보조 장치에 기록합니다.")],1),t._v(" "),o("li",[t._v("비행 임무를 RAM/플래시에 저장합니다.")])]),t._v(" "),o("p",[o("a",{attrs:{id:"arming"}})]),t._v(" "),o("h2",{attrs:{id:"시동-및-해제"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#시동-및-해제"}},[t._v("#")]),t._v(" 시동 및 해제")]),t._v(" "),o("p",[t._v("Vehicles may have moving parts, some of which are potentially dangerous when powered (in particular motors and propellers)!")]),t._v(" "),o("p",[t._v("To reduce the chance of accidents:")]),t._v(" "),o("ul",[o("li",[t._v("비행중이 아닐 때는 PX4의 "),o("em",[t._v("시동을 해제")]),t._v("하거나 전원을 차단하고, 이륙 전에만 "),o("em",[t._v("시동")]),t._v("을 켜는 것이 좋습니다.")]),t._v(" "),o("li",[t._v("기체가 정해진 시간 안에 이륙하지 않으면, 착륙후에는 기체의 시동은 자동으로 해제됩니다. 시동 해제 시간은 매개변수로 설정합니다.")]),t._v(" "),o("li",[t._v("Some vehicles also have a "),o("a",{attrs:{href:"#safety-switch"}},[t._v("safety switch")]),t._v(" that must be disengaged before arming can succeed (often this switch is part of the GPS).")]),t._v(" "),o("li",[t._v("기체는 정상 상태가 아니면, 시동은 걸리지 않습니다.")]),t._v(" "),o("li",[t._v("수직이착륙기는 고정익 모드에서는 시동이 걸리지 않습니다("),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#CBRK_VTOLARMING"}},[t._v("기본 설정")]),t._v(").")],1)]),t._v(" "),o("p",[t._v("Arming is triggered by default (Mode 2 transmitters) by holding the RC throttle/yaw stick on the "),o("em",[t._v("bottom right")]),t._v(" for one second (to disarm, hold stick on bottom left). It is alternatively possible to configure PX4 to arm using an RC switch or button (and arming MAVLink commands can also be sent from a ground station).")]),t._v(" "),o("p",[t._v("A detailed overview of arming and disarming configuration can be found here: "),o("RouterLink",{attrs:{to:"/ko/advanced_config/prearm_arm_disarm.html"}},[t._v("Prearm, Arm, Disarm Configuration")]),t._v(".")],1),t._v(" "),o("p",[o("a",{attrs:{id:"flight_modes"}})]),t._v(" "),o("h2",{attrs:{id:"비행-모드"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#비행-모드"}},[t._v("#")]),t._v(" 비행 모드")]),t._v(" "),o("p",[t._v("Flight modes provide different types/levels of vehicle automation and autopilot assistance to the user (pilot). "),o("em",[t._v("Autonomous modes")]),t._v(" are fully controlled by the autopilot, and require no pilot/remote control input. These are used, for example, to automate common tasks like takeoff, returning to the home position, and landing. Other autonomous modes execute pre-programmed missions, follow a GPS beacon, or accept commands from an offboard computer or ground station.")]),t._v(" "),o("p",[o("em",[t._v("Manual modes")]),t._v(" are controlled by the user (via the RC control sticks/joystick) with assistance from the autopilot. Different manual modes enable different flight characteristics - for example, some modes enable acrobatic tricks, while others are impossible to flip and will hold position/course against wind.")]),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),o("p",[t._v("Not all flight modes are available on all vehicle types, and some modes can only be used when specific conditions have been met (e.g. many modes require a global position estimate).")])]),t._v(" "),o("p",[t._v("An overview of the available flight modes "),o("RouterLink",{attrs:{to:"/ko/getting_started/flight_modes.html"}},[t._v("can be found here")]),t._v(". Instructions for how to set up your remote control switches to turn on different flight modes is provided in "),o("RouterLink",{attrs:{to:"/ko/config/flight_mode.html"}},[t._v("Flight Mode Configuration")]),t._v(".")],1),t._v(" "),o("p",[o("a",{attrs:{id:"safety"}})]),t._v(" "),o("h2",{attrs:{id:"안전-설정-사고-방지"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#안전-설정-사고-방지"}},[t._v("#")]),t._v(" 안전 설정(사고 방지)")]),t._v(" "),o("p",[t._v("PX4 has configurable failsafe systems to protect and recover your vehicle if something goes wrong! These allow you to specify areas and conditions under which you can safely fly, and the action that will be performed if a failsafe is triggered (for example, landing, holding position, or returning to a specified point).")]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("You can only specify the action for the "),o("em",[t._v("first")]),t._v(" failsafe event. Once a failsafe occurs the system will enter special handling code, such that subsequent failsafe triggers are managed by separate system level and vehicle specific code.")])]),t._v(" "),o("p",[t._v("The main failsafe areas are listed below:")]),t._v(" "),o("ul",[o("li",[t._v("배터리 부족")]),t._v(" "),o("li",[t._v("RC(원격 제어) 신호 상실")]),t._v(" "),o("li",[t._v("위치 상실(GPS 전역 위치 추정 품질이 너무 낮음)")]),t._v(" "),o("li",[t._v("외부 보드 연결 손실(예: 보조 컴퓨터와의 연결이 끊어짐)")]),t._v(" "),o("li",[t._v("데이터 링크 손실(예: GCS에 대한 텔레메트리 연결이 끊어짐)")]),t._v(" "),o("li",[t._v("지리적 경계 위반(가상 실린더 내부로 기체 비행을 제한합니다)")]),t._v(" "),o("li",[t._v("미션 안전장치(재 이륙 시 이전 미션이 실행되는 것을 방지합니다)")]),t._v(" "),o("li",[t._v("트래픽 회피(예: ADSB 응답기에 의해 작동됩니다)")])]),t._v(" "),o("p",[t._v("For more information see: "),o("RouterLink",{attrs:{to:"/ko/config/safety.html"}},[t._v("Safety")]),t._v(" (Basic Configuration).")],1),t._v(" "),o("h2",{attrs:{id:"전진-방향"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#전진-방향"}},[t._v("#")]),t._v(" 전진 방향")]),t._v(" "),o("p",[t._v("All the vehicles, boats and aircraft have a heading direction or an orientation based on their forward motion.")]),t._v(" "),o("p",[o("img",{attrs:{src:a(371),alt:"Frame Heading"}})]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("For a VTOL Tailsitter the heading is relative to the multirotor configuration (i.e. vehicle pose during, takeoff, hovering, landing).")])]),t._v(" "),o("p",[t._v("It is important to know the vehicle heading direction in order to align the autopilot with the vehicle vector of movement. Multicopters have a heading even when they are symmetrical from all sides! Usually manufacturers use a colored props or colored arms to indicate the heading.")]),t._v(" "),o("p",[o("img",{attrs:{src:a(1159),alt:"Frame Heading TOP"}})]),t._v(" "),o("p",[t._v("In our illustrations we will use red coloring for the front propellers of multicopter to show heading.")]),t._v(" "),o("p",[t._v("You can read in depth about heading in "),o("RouterLink",{attrs:{to:"/ko/config/flight_controller_orientation.html"}},[t._v("Flight Controller Orientation")])],1)])}),[],!1,null,null,null);e.default=r.exports},371:function(t,e,a){t.exports=a.p+"assets/img/frame_heading.f02fbdcf.png"},372:function(t,e,a){t.exports=a.p+"assets/img/micronav.8cbd07b4.jpg"},389:function(t,e,a){t.exports=a.p+"assets/img/frsky_taranis_x9d_transmitter.a26963aa.jpg"}}]);