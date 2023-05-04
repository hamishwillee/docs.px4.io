(window.webpackJsonp=window.webpackJsonp||[]).push([[174],{1333:function(t,_,r){t.exports=r.p+"assets/img/qgc_main_screen.e562d4c1.jpg"},1334:function(t,_,r){t.exports=r.p+"assets/img/pixhawk4_main_aux_ports.ab72e7e9.jpg"},1335:function(t,_,r){t.exports=r.p+"assets/img/pixhawk4mini_pwm.3818131b.png"},1336:function(t,_,r){t.exports=r.p+"assets/img/frame_heading_top.e8e4ffe3.png"},2717:function(t,_,r){"use strict";r.r(_);var v=r(19),e=Object(v.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"기본-개념"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#기본-개념"}},[t._v("#")]),t._v(" 기본 개념")]),t._v(" "),v("p",[t._v("무인 항공기의 기본 개념과 PX4 사용법을 설명합니다. 초보자뿐만 아니라 전문가에게도 유익한 자료들이 많이 있습니다.")]),t._v(" "),v("p",[t._v("기본 개념에 익숙하시면, "),v("RouterLink",{attrs:{to:"/ko/assembly/"}},[t._v("기본 조립")]),t._v("편에서 자동비행장치의 배선 방법을 공부할 수 있습니다. "),v("em",[t._v("QGroundControl")]),t._v("를 이용한 펌웨어 설치 방법은 "),v("RouterLink",{attrs:{to:"/ko/config/"}},[t._v("기본 설정")]),t._v("편을 참고하십시오.")],1),t._v(" "),v("h2",{attrs:{id:"드론의-정의"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#드론의-정의"}},[t._v("#")]),t._v(" 드론의 정의")]),t._v(" "),v("p",[t._v("드론은 원격이나 자동으로 조종할 수 있는 무인 로봇입니다.")]),t._v(" "),v("p",[t._v("드론은  "),v("a",{attrs:{href:"https://px4.io/ecosystem/commercial-systems/",target:"_blank",rel:"noopener noreferrer"}},[t._v("개인, 산업체, 공공기관 및 국방 분야"),v("OutboundLink")],1),t._v(" 등의 다양한 분야에서 사용되고 있습니다. 또한, 항공 사진, 화물 운송, 경주, 수색 및 탐사 등의 분야에서 사용됩니다.")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),v("p",[t._v("항공용, 지상용, 해양용 및 잠수용 드론이 있습니다.\n드론을 가르키는 공식 용어에는 UAV(Unmanned Aerial Vehicles), UAS(Unmanned Aerial Systems, UGV(Unmanned Ground Vehicles), USV(Unmanned Surface Vehicles)와 UUV(Unmanned Underwater Vehicles) 등이 있습니다.")])]),t._v(" "),v("p",[t._v("자율비행장치(오토파일럿)는 드론의 두뇌에 해당하는 장치입니다. 이 장치는 "),v("em",[t._v("차량 컨트롤러")]),t._v(' ( "비행 컨트롤러") 하드웨어 상에서 실행되는 '),v("em",[t._v("펌웨어")]),t._v("입니다.")]),t._v(" "),v("h2",{attrs:{id:"px4-자동비행장치"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#px4-자동비행장치"}},[t._v("#")]),t._v(" PX4 자동비행장치")]),t._v(" "),v("p",[v("a",{attrs:{href:"https://px4.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4"),v("OutboundLink")],1),t._v("는 오픈 소스 기반의 강력한 "),v("em",[t._v("자율비행장치")]),t._v("입니다.")]),t._v(" "),v("p",[t._v("PX4의 주요 특징들은 아래와 같습니다.")]),t._v(" "),v("ul",[v("li",[t._v("항공기(멀티콥터, 고정익 및 수직이착륙기), 지상운송체, 잠수정 등 "),v("RouterLink",{attrs:{to:"/ko/airframes/airframe_reference.html"}},[t._v("다양한 차량들")]),t._v("을 제어합니다.")],1),t._v(" "),v("li",[v("a",{attrs:{href:"#vehicle-flight-controller-board"}},[t._v("차량 컨트롤러")]),t._v(", 센서 및 다양한 주변 장치에 적합한 매우 탁월한 선택입니다.")]),t._v(" "),v("li",[t._v("유연하고 강력한 "),v("a",{attrs:{href:"#flight-modes"}},[t._v("비행 모드")]),t._v("와 "),v("a",{attrs:{href:"#safety-settings-failsafe"}},[t._v("안전 기능")]),t._v("을 지원합니다.")])]),t._v(" "),v("p",[t._v("PX4는 "),v("a",{attrs:{href:"#qgroundcontrol"}},[t._v("QGroundControl")]),t._v(" 지상국, "),v("a",{attrs:{href:"https://pixhawk.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("픽스호크 하드웨어"),v("OutboundLink")],1),t._v(", 보조 컴퓨터, 카메라, MAVLink 프로토콜 지원 하드웨어를 통합하는 "),v("a",{attrs:{href:"http://mavsdk.mavlink.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVSDK"),v("OutboundLink")],1),t._v("를 포함하는 방대한 드론 플랫폼의 핵심입니다. PX4는 "),v("a",{attrs:{href:"https://www.dronecode.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("드론코드 프로젝트"),v("OutboundLink")],1),t._v("의 지원을 받고 있습니다.")]),t._v(" "),v("h2",{attrs:{id:"qgroundcontrol"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#qgroundcontrol"}},[t._v("#")]),t._v(" QGroundControl")]),t._v(" "),v("p",[t._v("드론코드에서 지원하는 지상제어 S/W는 "),v("a",{attrs:{href:"http://qgroundcontrol.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGroundControl"),v("OutboundLink")],1),t._v("입니다. "),v("em",[t._v("QGroundControl")]),t._v("을 사용하여 "),v("RouterLink",{attrs:{to:"/ko/getting_started/flight_controller_selection.html"}},[t._v("비행 컨트롤러")]),t._v("에 PX4 업로드, 기체 설정, 매개변수 설정, 실시간 비행 정보 조회 및 자동 임무 비행 등의 작업이 가능합니다.")],1),t._v(" "),v("p",[v("em",[t._v("QGroundControl")]),t._v("은 윈도우, 안드로이드, MacOS 및 리눅스 운영체제를 지원합니다. "),v("a",{attrs:{href:"http://qgroundcontrol.com/downloads/",target:"_blank",rel:"noopener noreferrer"}},[t._v("여기"),v("OutboundLink")],1),t._v("에서 필요한 프로그램을 다운로드하여 설치할 수 있습니다.")]),t._v(" "),v("p",[v("img",{attrs:{src:r(1333),alt:"QGC 메인 화면"}})]),t._v(" "),v("h2",{attrs:{id:"비행-컨트롤러-보드"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#비행-컨트롤러-보드"}},[t._v("#")]),t._v(" 비행 컨트롤러(보드)")]),t._v(" "),v("p",[t._v("PX4는 초기에는 "),v("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk_series.html"}},[t._v("Pixhawk 시리즈")]),t._v("에서만 실행되도록 설계되었으나, 지금은 리눅스 뿐만 아니라 다양한 하드웨어에서도 실행됩니다. 기체의 물리적 조건, 운용 목적 및 비용을 고려하여 최적의 보드를 선택할 수 있습니다.")],1),t._v(" "),v("p",[t._v("자세한 내용은 "),v("RouterLink",{attrs:{to:"/ko/getting_started/flight_controller_selection.html"}},[t._v("비행 컨트롤러 선택")]),t._v("편을 참고하십시오.")],1),t._v(" "),v("h2",{attrs:{id:"센서"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#센서"}},[t._v("#")]),t._v(" 센서")]),t._v(" "),v("p",[t._v("PX4는 기체의 상태 측정하기 위하여 센서를 사용합니다. 이는 자율비행 기체 안정화에 필수 과정입니다. 각속도 센서, 가속도 센서, 지자기 센서(나침반)와 기압 센서는 시스템 구동을 위한 "),v("em",[t._v("최소 요구 사항")]),t._v("입니다. "),v("RouterLink",{attrs:{to:"/ko/getting_started/flight_modes.html#categories"}},[t._v("자동 모드")]),t._v("와  기타 모드를 사용하기 위해서는 GPS와 같은 위치측정시스템이 필요합니다. 고정익과 수직이착륙기에는 대기속도 센서가 필수입니다.")],1),t._v(" "),v("p",[t._v("더 자세한 정보는 다음을 참고하십시오.")]),t._v(" "),v("ul",[v("li",[v("RouterLink",{attrs:{to:"/ko/getting_started/sensor_selection.html"}},[t._v("센서")])],1),t._v(" "),v("li",[v("RouterLink",{attrs:{to:"/ko/peripherals/"}},[t._v("주변 장치")])],1)]),t._v(" "),v("h2",{attrs:{id:"출력-장치-모터-서보-액츄에이터"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#출력-장치-모터-서보-액츄에이터"}},[t._v("#")]),t._v(" 출력 장치: 모터, 서보, 액츄에이터")]),t._v(" "),v("p",[t._v("PX4는 모터 속도(예 : "),v("a",{attrs:{href:"#escs-motors"}},[t._v(" ESC")]),t._v("를 통하여), 에일러론과 플랩 같은 비행 표면, 카메라 트리거, 낙하산, 그리퍼 및 기타 적재 장비 등을 "),v("em",[t._v("출력")]),t._v("을 통하여 제어합니다.")]),t._v(" "),v("p",[t._v("출력 포트는 PWM 포트를 이거나, DroneCAN 노드에 연결할 수 있습니다(예: DroneCAN "),v("RouterLink",{attrs:{to:"/ko/dronecan/escs.html"}},[t._v("모터 제어 장치")]),t._v("). 노드에 대한 동일한 출력 기체 매핑이 두 경우 모두에서 사용됩니다.")],1),t._v(" "),v("p",[t._v("아래 그림은 "),v("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk4.html"}},[t._v("Pixhawk 4")]),t._v("와 "),v("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk4_mini.html"}},[t._v("Pixhawk 4 미니")]),t._v("의 PWM 출력 포트를 설명합니다.")],1),t._v(" "),v("p",[v("img",{attrs:{src:r(1334),alt:"Pixhawk 4 출력 포트"}}),t._v(" "),v("img",{attrs:{src:r(1335),alt:"Pixhawk4 mini MAIN 포트"}})]),t._v(" "),v("p",[t._v("출력 장치는 크게 "),v("code",[t._v("MAIN")]),t._v(" 포트와 "),v("code",[t._v("AUX")]),t._v(" 포트로 나누며,  포트는 번호로 구분됩니다. "),v("code",[t._v("MAINn")]),t._v("과 "),v("code",[t._v("AUXn")]),t._v("의 "),v("code",[t._v("n")]),t._v("에는 1 ~ 6 또는 1 ~ 8까지의 번호가 부여됩니다.")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),v("p",[t._v("각 출력장치에는 기체별로 고유한 기능을 부여됩니다. 기체의 출력 매핑은 "),v("RouterLink",{attrs:{to:"/ko/airframes/airframe_reference.html"}},[t._v("기체 정의서")]),t._v("를 참고하십시오.")],1)]),t._v(" "),v("div",{staticClass:"custom-block warning"},[v("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),v("p",[t._v("어떤 비행 컨트롤러에는 "),v("code",[t._v("MAIN")]),t._v(" PWM 출력 장치만 있거나(예: "),v("em",[t._v("Pixhawk 4 미니")]),t._v("), 6개의 "),v("code",[t._v("MAIN")]),t._v(" 또는 "),v("code",[t._v("AUX")]),t._v(" 출력 장치만 있을 수 있습니다. 비행 콘트롤러에는 선택한 "),v("RouterLink",{attrs:{to:"/ko/airframes/airframe_reference.html"}},[t._v("기체")]),t._v("에 필요할 출력 포트가 있는 지 확인하십시오.")],1)]),t._v(" "),v("p",[t._v("보틍,  "),v("code",[t._v("MAIN")]),t._v(" 포트는 비행 제어용이며, "),v("code",[t._v("AUX")]),t._v(" 포트는 액츄에이터나 적재 장비들을 제어합니다. 때로는, 수직 이착륙기처럼 "),v("code",[t._v("MAIN")]),t._v(" 포트가 부족할 경우에는 "),v("code",[t._v("AUX")]),t._v(" 포트를 비행 제어용으로 사용하기도 합니다. 예를 들어, "),v("RouterLink",{attrs:{to:"/ko/airframes/airframe_reference.html#copter_quadrotor_x_generic_quadcopter"}},[t._v("일반 쿼드콥터")]),t._v("에서는 "),v("code",[t._v("MAIN")]),t._v(" 포트 1 ~ 4을 모터 제어용으로 사용하며, 나머지  "),v("code",[t._v("MAIN")]),t._v(" 포트와 "),v("code",[t._v("AUX")]),t._v(" 포트를 RC 제어용으로 사용합니다.")],1),t._v(" "),v("p",[v("a",{attrs:{href:"#vehicle-flight-controller-board"}},[t._v("비행 컨트롤러")]),t._v("의 실제 출력용 포트와 버스는 하드웨어와 PX4 설정에 따라 달라집니다. "),v("em",[t._v("일반적으로")]),t._v(" PWM 출력 포트는 위에서 설명한 대로 사용되며, 보틍은 "),v("code",[t._v("MAIN OUT")]),t._v(" 또는 "),v("code",[t._v("AUX OUT")]),t._v("으로 표시되어 있습니다.")]),t._v(" "),v("p",[v("code",[t._v("FMU PWM OUT")]),t._v(", "),v("code",[t._v("IO PWM Out")]),t._v(" 방식이나 이와 유사한 방식으로 표시합니다. 픽스호크 컨트롤러에는 주 FMU 보드가 있고, 별도의 입출력용 보드를 연결할 수도 있습니다. 별도의 입출력 보드가 있을 경우에는, "),v("code",[t._v("AUX")]),t._v(" 포트는 FMU 보드에 연결하고, "),v("code",[t._v("MAIN")]),t._v(" 포트는 입출력 보드에 연결합니다. 다른 경우로는 "),v("code",[t._v("MAIN")]),t._v(" 포트를 FMU 보드에 연결하고, "),v("code",[t._v("AUX")]),t._v(" 포트가 없을 수도 있습니다. FMU 출력 포트는 PWM 처럼 짧은 지연 시간이 요구되는 "),v("RouterLink",{attrs:{to:"/ko/peripherals/dshot.html"}},[t._v("D-shot")]),t._v(", "),v("em",[t._v("One-shot")]),t._v(" 프로토콜에 사용됩니다. FMU 출력 포트는 레이싱 드론처럼  높은 성능이 요구되는 기체에 사용됩니다.")],1),t._v(" "),v("p",[v("strong",[t._v("참고:")])]),t._v(" "),v("ul",[v("li",[v("code",[t._v("MAIN")]),t._v(" 포트와 "),v("code",[t._v("AUX")]),t._v(" 포트에는 PWM/Dshot/OneShot 출력 제어에 충분한 6개에서 8개의 출력 포트를 가지고 있습니다. 이론적으로는,  보드 버스에서 더 많은 출력 포트를 제공할 수 있습니다. UAVCAN 버스에는 이러한 제한이 없습니다.")])]),t._v(" "),v("h2",{attrs:{id:"전기변속기-esc-와-모터"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#전기변속기-esc-와-모터"}},[t._v("#")]),t._v(" 전기변속기(ESC)와 모터")]),t._v(" "),v("p",[t._v("대부분의 PX4 드론은 비행 전기변속기(ESC)로 브러시리스 모터를 제어합니다. 전기변속기는 제어 장치 신호를 모터의 전력으로 변환합니다.")]),t._v(" "),v("p",[t._v("PX4가 지원하는 전기변속기와 모터 정보는 여기를 참고하십시오.")]),t._v(" "),v("ul",[v("li",[v("RouterLink",{attrs:{to:"/ko/peripherals/esc_motors.html"}},[t._v("전기변속기와 모터")])],1),t._v(" "),v("li",[v("RouterLink",{attrs:{to:"/ko/advanced_config/esc_calibration.html"}},[t._v("전기변속기 보정")])],1),t._v(" "),v("li",[v("a",{attrs:{href:"https://oscarliang.com/esc-firmware-protocols/",target:"_blank",rel:"noopener noreferrer"}},[t._v("전기변속기 펌웨어와 프로토콜 개요"),v("OutboundLink")],1),t._v("(oscarliang.com)")])]),t._v(" "),v("h2",{attrs:{id:"배터리와-전원"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#배터리와-전원"}},[t._v("#")]),t._v(" 배터리와 전원")]),t._v(" "),v("p",[t._v("PX4 드론은 리튬-폴리머(LiPo) 배터리를 가장 많이 사용합니다. 일반적으로, 배터리는 비행 컨트롤러와 전기변속기(모터용)에 전원을 제공하는 "),v("em",[t._v("전원 모듈")]),t._v("이나 "),v("em",[t._v("전원 관리 보드")]),t._v("를 통하여 시스템에 연결됩니다.")]),t._v(" "),v("p",[t._v("배터리와 배터리 설정 정보는 "),v("RouterLink",{attrs:{to:"/ko/config/battery.html"}},[t._v("배터리 설정")]),t._v("과 "),v("RouterLink",{attrs:{to:"/ko/assembly/"}},[t._v(" 기본 조립")]),t._v("(예: "),v("RouterLink",{attrs:{to:"/ko/assembly/quick_start_pixhawk4.html#power"}},[t._v("픽스호크 4 배선 빠른 시작 > 전원")]),t._v(")를 참고하십시오.")],1),t._v(" "),v("h2",{attrs:{id:"무선-조종-rc"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#무선-조종-rc"}},[t._v("#")]),t._v(" 무선 조종(RC)")]),t._v(" "),v("p",[v("RouterLink",{attrs:{to:"/ko/getting_started/rc_transmitter_receiver.html"}},[t._v("무선 조종기(RC)")]),t._v("를 사용하여 기체를 "),v("em",[t._v("수동")]),t._v("으로 조종합니다. 송신기(무선 조종기에 장착)와 수신기(기체에 장착)로 구성됩니다. 일부 RC에서는 자동조종장치에서 전송한 텔레메트리를 수신할 수 있습니다.")],1),t._v(" "),v("div",{staticClass:"custom-block note"},[v("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),v("p",[t._v("PX4는 자율비행 모드에서 RC가 필수 사항은 아닙니다.")])]),t._v(" "),v("p",[v("img",{attrs:{src:r(412),alt:"Taranis X9D 송신기"}})]),t._v(" "),v("p",[t._v("RC 선택 방법은 "),v("RouterLink",{attrs:{to:"/ko/getting_started/rc_transmitter_receiver.html"}},[t._v("RC 선택")]),t._v("을 참고하십시오. 다음과 같은 관련 주제들을 설명합니다.")],1),t._v(" "),v("ul",[v("li",[v("RouterLink",{attrs:{to:"/ko/config/radio.html"}},[t._v("무선/RC 설정")]),t._v(" - "),v("em",[t._v("QGroundControl")]),t._v("에서의 RC 설정.")],1),t._v(" "),v("li",[v("RouterLink",{attrs:{to:"/ko/flying/basic_flying.html"}},[t._v("비행 첫걸음")]),t._v(" - RC 비행 방법을 설명합니다.")],1),t._v(" "),v("li",[v("RouterLink",{attrs:{to:"/ko/peripherals/frsky_telemetry.html"}},[t._v("FrSky 텔레메트리")]),t._v(" - PX4의 텔레메트리 정보나 상태 정보를 수신을 위한 RC  송신기 설정방법을 설명합니다.")],1)]),t._v(" "),v("h2",{attrs:{id:"지상제어-s-w와-조이스틱"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#지상제어-s-w와-조이스틱"}},[t._v("#")]),t._v(" 지상제어 S/W와 조이스틱")]),t._v(" "),v("p",[v("em",[t._v("QGroundControl")]),t._v("에서 "),v("RouterLink",{attrs:{to:"/ko/config/joystick.html"}},[t._v("조이스틱")]),t._v("을 사용하여 PX4를 수동으로 조종합니다. QGroundControl은 조이스틱 신호를 MAVLink 메시지로 변환하여 텔레메트리에 전송합니다. 이와 같은 방식은 "),v("em",[t._v("Auterion")]),t._v(", "),v("a",{attrs:{href:"https://auterion-gs.com/skynav/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Skynav"),v("OutboundLink")],1),t._v(", "),v("em",[t._v("UAVComponents")]),t._v("와 "),v("a",{attrs:{href:"https://uxvtechnologies.com/ground-control-stations/micronav/",target:"_blank",rel:"noopener noreferrer"}},[t._v("MicroNav"),v("OutboundLink")],1),t._v("에서 사용합니다. 조이스틱은 기체 시뮬레이션에서 자주 사용됩니다.")],1),t._v(" "),v("p",[v("img",{attrs:{src:r(387),alt:"MicroNav와 지상제어S/W에서 조이스틱을 사용하는 그림"}})]),t._v(" "),v("h2",{attrs:{id:"안전-스위치"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#안전-스위치"}},[t._v("#")]),t._v(" 안전 스위치")]),t._v(" "),v("p",[t._v("기체의 "),v("em",[t._v("안전 스위치")]),t._v("를 킨 다음에 기체에 "),v("a",{attrs:{href:"#arming-and-disarming"}},[t._v("시동")]),t._v("을 걸 수 있습니다. 기체에 시동이 걸리면, 모터와 프로펠러가 동작합니다. 보통 안전 스위치는 GPS 장치에 장착되어 있으나, 별도의 부품으로 제공되기도 합니다.")]),t._v(" "),v("div",{staticClass:"custom-block warning"},[v("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),v("p",[t._v("시동이 걸린 기체는 안전 사고의 위험성이 항상 존재합니다.\n안전 스위치는 예기치 않은 시동으로 인하여 발생할 수 있는 사고를 방치하는 것이 목적입니다.")])]),t._v(" "),v("h2",{attrs:{id:"텔레메트리-무선-통신"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#텔레메트리-무선-통신"}},[t._v("#")]),t._v(" 텔레메트리 무선 통신")]),t._v(" "),v("p",[v("RouterLink",{attrs:{to:"/ko/telemetry/"}},[t._v("텔레메트리 무선 통신")]),t._v("은 "),v("em",[t._v("QGroundControl")]),t._v("과 같은 지상제어 S/W와 PX4 실행 차량을 MAVLink 프로토콜로 연결합니다. 비행중인 기체의 매개변수 변경, 실시간 텔레메트로 통신, 임무 변경 등의 작업을 수행할 수 있습니다.")],1),t._v(" "),v("h2",{attrs:{id:"외부-보조-컴퓨터"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#외부-보조-컴퓨터"}},[t._v("#")]),t._v(" 외부 보조 컴퓨터")]),t._v(" "),v("p",[t._v("차량에 장착된 보조 컴퓨터는 직렬 케이블이나 Wi-Fi로 PX4를 제어할 수 있습니다. 일반적으로, 보조 컴퓨터는 MAVSDK나 MAVROS와 같은 MAVLink API로 통신합니다.")]),t._v(" "),v("p",[t._v("관련 주제는 다음과 같습니다:")]),t._v(" "),v("ul",[v("li",[v("RouterLink",{attrs:{to:"/ko/flight_modes/offboard.html"}},[t._v("오프보드 모드")]),t._v(" - PX4 외부의 지상 통제국이나 보조 컴퓨터로 제어하는 비행 모드")],1),t._v(" "),v("li",[v("RouterLink",{attrs:{to:"/ko/robotics/"}},[t._v("로보틱스 API")])],1)]),t._v(" "),v("h2",{attrs:{id:"sd-카드-휴대용-저장-장치"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#sd-카드-휴대용-저장-장치"}},[t._v("#")]),t._v(" SD 카드 (휴대용 저장 장치)")]),t._v(" "),v("p",[t._v("PX4는 "),v("RouterLink",{attrs:{to:"/ko/getting_started/flight_reporting.html"}},[t._v("비행 로그")]),t._v("를 SD 카드에 저장합니다. UAVCAN 주변 장치를 사용하거나 비행 임무 수행에는 SD 카드가 필수입니다.")],1),t._v(" "),v("p",[t._v("기본적으로, PX4는 부팅 과정에 SD 카드가 없으면, "),v("RouterLink",{attrs:{to:"/ko/getting_started/tunes.html#format-failed"}},[t._v("포맷 실패")]),t._v(" 경고음을 두 번 울립니다. 그리고, 위에서 설명한 다수의 기능들이 작동하지 않습니다.")],1),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),v("p",[t._v("픽스호크 보드에서 지원하는 SD 카드의 최대 용량은 32GB입니다. "),v("em",[t._v("SanDisk Extreme U3 32GB")]),t._v(" 사용을 "),v("RouterLink",{attrs:{to:"/ko/dev_log/logging.html#sd-cards"}},[t._v("적극 추천합니다")]),t._v(".")],1)]),t._v(" "),v("p",[t._v("SD 카드는 선택 사항입니다. SD 카드가 없는 비행 콘트롤어는 다음의 작업들을 수행하여야 합니다.")]),t._v(" "),v("ul",[v("li",[v("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#CBRK_BUZZER"}},[t._v("CBRK_BUZZER")]),t._v(" 매개변수로 알림음을 껍니다.")],1),t._v(" "),v("li",[v("RouterLink",{attrs:{to:"/ko/dev_log/logging.html#log-streaming"}},[t._v("스트림 로그")]),t._v("를 다른 보조 장치에 기록합니다.")],1),t._v(" "),v("li",[t._v("비행 임무를 RAM/플래시에 저장합니다.\n")])]),t._v(" "),v("h2",{attrs:{id:"시동-및-해제"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#시동-및-해제"}},[t._v("#")]),t._v(" 시동 및 해제")]),t._v(" "),v("p",[t._v("기체에 전원을 공급하게 되면, 모터와 프로펠러와 같은 부품들은 안전 사고를 유발할 수 있으므로 항상 주의하여야 합니다.")]),t._v(" "),v("p",[t._v("사고를 줄이기 위해 PX4는 세 가지의 전원 상태를 정의합니다:")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("비시동:")]),t._v(" 모든 모터와 액추에이터에 전원이 공급되지 않습니다.")]),t._v(" "),v("li",[v("strong",[t._v("사전 시동:")]),t._v(" 모터에 전원이 공급되지 않지만 작동기는 작동하지 않습니다(위험하지 않은 작동기를 벤치 테스트할 수 있음).")]),t._v(" "),v("li",[v("strong",[t._v("시동:")]),t._v(" 모터 및 기타 액추에이터에 전원이 공급되고, 프로펠러가 회전할 수 있습니다.")])]),t._v(" "),v("p",[t._v("차량은 필요시에만 _시동_이 걸립니다. 일부 기체에는 시동전에 조작하는 "),v("a",{attrs:{href:"#safety-switch"}},[t._v("안전 스위치")]),t._v("(보통 GPS 수신기의 일부임)가 장착되어 있습니다.")]),t._v(" "),v("p",[t._v("기본적으로:")]),t._v(" "),v("ul",[v("li",[t._v("비행중이 아닐 때는 차량의 "),v("em",[t._v("시동을 해제")]),t._v("하거나 전원을 차단하고, 이륙 전에만 "),v("em",[t._v("시동")]),t._v("을 켜는 것이 바람직합니다.")]),t._v(" "),v("li",[t._v("기체가 정해진 시간 안에 이륙하지 않으면, 착륙후에는 기체의 시동은 자동으로 해제됩니다. 시동 해제 시간은 매개변수로 설정합니다.")]),t._v(" "),v("li",[t._v("차량은 착륙 후 자동으로 무장 해제됩니다(해제 시간은 설정 가능).")]),t._v(" "),v("li",[t._v("기체는 정상 상태가 아니면, 시동은 걸리지 않습니다.")]),t._v(" "),v("li",[t._v("수직이착륙기는 고정익 모드에서는 시동이 걸리지 않습니다("),v("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#CBRK_VTOLARMING"}},[t._v("기본 설정")]),t._v(").")],1),t._v(" "),v("li",[t._v("사전 시동은 모터에 전원이 공급되지 않은 상태로 유지하면서 안전하게 벤치 테스트 액츄에이터를 사용할 수 있습니다.")])]),t._v(" "),v("p",[t._v("모드 2 수신기의 경우에는 추진력/방위각 조절 스틱을 "),v("em",[t._v("우측 하단")]),t._v("에 1초 정도 위치하면 시동이 걸립니다. 시동을 해제하려면 좌측 하단으로 둡니다. PX4에서 무선 조종 스위치로 시동을 걸 수 있도록 설정할 수 있습니다. 또한, 지상통제국에서 시동 명령을 MAVLink로 전송할 수 있습니다.")]),t._v(" "),v("p",[t._v("시동 및 해제에 관한 자세한 내용은 "),v("RouterLink",{attrs:{to:"/ko/advanced_config/prearm_arm_disarm.html"}},[t._v("시동 준비, 시동, 시동 해제")]),t._v("를 참고하십시오.")],1),t._v(" "),v("h2",{attrs:{id:"비행-모드"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#비행-모드"}},[t._v("#")]),t._v(" 비행 모드")]),t._v(" "),v("p",[t._v("비행 모드는 다양한 유형과 수준의 차량 자동화 기능을 제공합니다. 비행 모드는 다양한 유형과 수준의 차량 자동화 기능을 제공합니다. 예를 들어 이륙, 복귀 및 착륙 등의 작업을 자동으로 제어할 수 있습니다. 또 다른 자율 모드에는 사전 프로그래밍된 임무 수행, GPS 위치 정보 비행, 외부 컴퓨터 또는 지상제어S/W 명령에 의한 비행 작업이 가능합니다.")]),t._v(" "),v("p",[v("em",[t._v("수동 모드")]),t._v("에서는 사용자가 비행 콘트롤러를 RC로 직접 제어합니다. 다른 수동 모드에서는 또 다른 기능의 비행이 가능합니다. 예를 들어, 곡예 비행이나 바람이 불어도 일정환 경로나 위치를 유지하는 비행 등의 작업이 가능합니다.")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),v("p",[t._v("모든 기체마다 모든 비행 모드가 적용되지 않습니다. 비행 모드는 조건이 충족된 기체에만 적용할 수 있습니다. 대부분의 모드에서는 GPS 위치 정보가 필요합니다.")])]),t._v(" "),v("p",[t._v("비행 모드에 자세한 정보는 "),v("RouterLink",{attrs:{to:"/ko/getting_started/flight_modes.html"}},[t._v("비행 모드")]),t._v("를 참고하십시오. RC 스위치로 비행 모드를 변경하는 방법은 "),v("RouterLink",{attrs:{to:"/ko/config/flight_mode.html"}},[t._v("비행 모드 설정")]),t._v("을 참고하십시오.")],1),t._v(" "),v("h2",{attrs:{id:"안전-설정-사고-방지"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#안전-설정-사고-방지"}},[t._v("#")]),t._v(" 안전 설정(사고 방지)")]),t._v(" "),v("p",[t._v("PX4는 시스템 사고시에 기체을 보호하고 복구할 수 있는 안전 시스템이 있으며, 이와 관련된 여러가지 설정들이 있습니다. 안정 설정으로 안전 비행 지역과 조건을 지정하고, 안전 장치에서 수행하는 작업(예: 착륙, 위치 유지 또는 지정된 지점으로 복귀)을 설정할 수 있습니다.")]),t._v(" "),v("div",{staticClass:"custom-block note"},[v("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),v("p",[t._v("안전 설정시에 동작은 "),v("em",[t._v("첫 번째")]),t._v(" 사고 방지 이벤트에 대해서만 지정가능합니다. 이벤트가 발생하면, 시스템은 특별한 처리 코드를 실행하여 안전 장치 트리거가 분리된 시스템에서 기체별 코드에 의해 관리되도록 합니다.")])]),t._v(" "),v("p",[t._v("주요 안전장치는 다음과 같습니다.")]),t._v(" "),v("ul",[v("li",[t._v("배터리 부족")]),t._v(" "),v("li",[t._v("RC(원격 제어) 신호 상실")]),t._v(" "),v("li",[t._v("위치 상실(GPS 전역 위치 추정 품질이 너무 낮음)")]),t._v(" "),v("li",[t._v("외부 보드 연결 손실(예: 보조 컴퓨터와의 연결이 끊어짐)")]),t._v(" "),v("li",[t._v("데이터 링크 손실(예: GCS에 대한 텔레메트리 연결이 끊어짐)")]),t._v(" "),v("li",[t._v("지리적 경계 위반(가상 실린더 내부로 기체 비행을 제한합니다)")]),t._v(" "),v("li",[t._v("미션 안전장치(재 이륙 시 이전 미션이 실행되는 것을 방지합니다)")]),t._v(" "),v("li",[t._v("트래픽 회피(예: ADSB 응답기에 의해 작동됩니다)")])]),t._v(" "),v("p",[t._v("더 자세한 내용은 "),v("RouterLink",{attrs:{to:"/ko/config/safety.html"}},[t._v("안전")]),t._v("편을 참고하십시오.")],1),t._v(" "),v("h2",{attrs:{id:"전진-방향"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#전진-방향"}},[t._v("#")]),t._v(" 전진 방향")]),t._v(" "),v("p",[t._v("차량, 보트 및 항공기에는 전진 방향이 정해져 있습니다.")]),t._v(" "),v("p",[v("img",{attrs:{src:r(386),alt:"프레임 전진 방향"}})]),t._v(" "),v("div",{staticClass:"custom-block note"},[v("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),v("p",[t._v("VTOL 테일 시터의 방향은 멀티콥터 설정(즉, 이륙, 호버링, 착륙 중 차량 포즈)에 의하여 결정됩니다.")])]),t._v(" "),v("p",[t._v("차량의 전진 방향을 알아야만 차량의 이동 벡터와 정렬할 수 있습니다. 멀티콥터는 모든 방향에서 대칭인 경우에도 전진 방향이 정의됩니다. 제조사에서는 일반적으로 프로펠러나 팔(프레임)에 색깔을 사용하여 차량의 전진 방향을 표시합니다.")]),t._v(" "),v("p",[v("img",{attrs:{src:r(1336),alt:"프레임 전진 방향 TOP"}})]),t._v(" "),v("p",[t._v("위 그림에서 전진 방향은 멀티콥터의 프로펠러에 빨간색으로 표시되어 있습니다.")]),t._v(" "),v("p",[v("RouterLink",{attrs:{to:"/ko/config/flight_controller_orientation.html"}},[t._v("비행 콘트롤러 방향")]),t._v("에서 전진 방향에 대한 자세한 정보를 참고하십시오.")],1)])}),[],!1,null,null,null);_.default=e.exports},386:function(t,_,r){t.exports=r.p+"assets/img/frame_heading.f02fbdcf.png"},387:function(t,_,r){t.exports=r.p+"assets/img/micronav.8cbd07b4.jpg"},412:function(t,_,r){t.exports=r.p+"assets/img/frsky_taranis_x9d_transmitter.a26963aa.jpg"}}]);