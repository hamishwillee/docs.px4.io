(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{1392:function(t,v,_){t.exports=_.p+"assets/img/holybro_px4_vision_whats_inside_top.c3189220.jpg"},2154:function(t,v,_){"use strict";_.r(v);var e=_(19),r=Object(e.a)({},(function(){var t=this,v=t.$createElement,e=t._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"px4-vision-autonomy-개발-키트"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#px4-vision-autonomy-개발-키트"}},[t._v("#")]),t._v(" PX4 Vision Autonomy 개발 키트")]),t._v(" "),e("p",[e("a",{attrs:{href:"http://www.holybro.com/product/px4-vision/",target:"_blank",rel:"noopener noreferrer"}},[e("em",[t._v("PX4 Vision Autonomy 개발 키트")]),e("OutboundLink")],1),t._v("는 자율 비행 컴퓨터 비전 개발을 위한 견고하고 저렴한 키트입니다.")]),t._v(" "),e("p",[e("img",{attrs:{src:_(602),alt:"개요"}})]),t._v(" "),e("p",[t._v("이 키트에는 "),e("em",[t._v("Pixhawk 4")]),t._v(" 비행 컨트롤러, "),e("em",[t._v("UP Core")]),t._v(" 보조 컴퓨터(4GB 메모리와 64GB eMMC), 후두부 "),e("em",[t._v("구조 코어")]),t._v(" 깊이 카메라 센서가 장착된 거의 즉시 비행 가능한 탄소 섬유 쿼드 콥터가 포함되어 있습니다.")]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[t._v("이 제품에는 사전 설치된 소프트웨어가 없습니다. "),e("RouterLink",{attrs:{to:"/ko/computer_vision/obstacle_avoidance.html"}},[t._v("PX4/Avoidance")]),t._v(" 로컬 플래너 소프트웨어의 참조 구현이 포함된 사전 이미지화 된 USB 스틱은 "),e("em",[t._v("Auterion")]),t._v("에서 제공합니다. 이 소프트웨어는 PX4 Vision Autonomy Kit로 수행 가능 작업에 대한 매우 기본적인 예제들을 제공합니다. 개발자는이 키트를 사용하여 "),e("a",{attrs:{href:"https://github.com/PX4/avoidance#obstacle-detection-and-avoidance",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4 회피"),e("OutboundLink")],1),t._v(" 프로젝트에서 제공하는 다른 기능을 시험해보고, 기존 코드를 수정하거나, 새로운 컴퓨터 비전 기능을 실험할 수 있습니다.")],1)]),t._v(" "),e("p",[t._v("이 가이드는 기체 비행 준비에 필요한 최소한의 추가 설정을 설명합니다(RC 시스템과 배터리 설치). 또한 처녀 비행과 컴퓨터 비전 코드 수정 방법을 설명합니다.")]),t._v(" "),e("h2",{attrs:{id:"구매처"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#구매처"}},[t._v("#")]),t._v(" 구매처")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://shop.holybro.com/px4-vision_p1225.html?",target:"_blank",rel:"noopener noreferrer"}},[t._v("Holybro 웹사이트"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"px4-비전-가이드-콘텐츠"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#px4-비전-가이드-콘텐츠"}},[t._v("#")]),t._v(" Px4 비전 가이드 콘텐츠")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#warnings-and-notifications"}},[t._v("경고와 알림")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#what-is-inside"}},[t._v("내부 내용")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#what-else-do-you-need"}},[t._v("그 외 필요한 것")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#first-time-setup"}},[t._v("최초 설정")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#fly-the-drone-with-avoidance"}},[t._v("드론 회피 비행")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#development-using-the-kit"}},[t._v("키트 개발")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#px4-vision-carrier-board-pinouts"}},[t._v("Px4 비전 캐리어 보드 핀아웃")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#other-development-resources"}},[t._v("기타 개발 리소스")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#how-to-get-technical-support"}},[t._v("기술 지원 방법")])])]),t._v(" "),e("h2",{attrs:{id:"경고와-알림"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#경고와-알림"}},[t._v("#")]),t._v(" 경고와 알림")]),t._v(" "),e("ol",[e("li",[t._v("이 키트는 전방 카메라를 사용하는 컴퓨터 비전 프로젝트용입니다. 하향 또는 후방 깊이 카메라가 없습니다. 따라서, 추가 수정없이는 "),e("RouterLink",{attrs:{to:"/ko/computer_vision/safe_landing.html"}},[t._v("안전 착륙")]),t._v(" 또는 하방향 카메라가 필요한 다른 기능들을 테스트할 수 없습니다.")],1),t._v(" "),e("li",[t._v("임무에서 장애물 회피는 GPS를 사용시에 테스트 가능합니다. 임무 수행시에는 GPS 좌표를 사용합니다. 충돌 방지는 GPS와 광학 흐름에서 위치 잠금시에 위치 모드에서 테스트할 수 있습니다.")]),t._v(" "),e("li",[e("code",[t._v("USB1")]),t._v("로 표시된 포트는 "),e("em",[t._v("USB3")]),t._v(" 주변 장치와  동시에 사용하는 경우에는 GPS를 방해할 수 있습니다(임무를 포함한 GPS 종속 기능 비활성화). 이로 인하여, 부팅 이미지가 "),e("em",[t._v("USB2.0")]),t._v(" 메모리 스틱으로 제공됩니다.")]),t._v(" "),e("li",[t._v("ECN 010 이상의 PX4 Vision(캐리어 보드 RC05 이상), "),e("em",[t._v("UP Core")]),t._v("는 DC 플러그 또는 배터리로 전원을 공급할 수 있습니다. "),e("img",{attrs:{src:_(603),alt:"RC 번호"}}),t._v(" "),e("img",{attrs:{src:_(604),alt:"ECN 번호"}})])]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("ECN이 RC04 아래 010/캐리어 보드 미만인 PX4 Vision의 경우 *UP Core*는 배터리로 전원을 공급하여야합니다. *UP Core 전원* 소켓 안전 커버를 제거하지 마십시오.")]),t._v(" "),e("p",[e("img",{attrs:{src:_(605),alt:"경고 - 전원 포트를 연결하지 마십시오"}})])]),t._v(" "),e("h2",{attrs:{id:"내부-내용"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#내부-내용"}},[t._v("#")]),t._v(" 내부 내용")]),t._v(" "),e("p",[e("img",{attrs:{src:_(1392),alt:"내부 내용"}})]),t._v(" "),e("p",[e("img",{attrs:{src:_(606),alt:"내부 내용"}})]),t._v(" "),e("img",{attrs:{src:_(445),width:"500px",title:"Pixhawk4 업라이트 이미지"}}),t._v(" "),e("p",[t._v("PX4 Vision DevKit에는 아래의 내용물들이 포함되어 있습니다.")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("핵심 구성 요소:")]),t._v(" "),e("ul",[e("li",[t._v("1x Pixhawk 4 비행 컨트롤러(사용자 지정 PX4 펌웨어 포함)")]),t._v(" "),e("li",[t._v("1x PMW3901 광학 유량 센서")]),t._v(" "),e("li",[t._v("1x TOF 적외선 거리 센서 (PSK‐CM8JL65‐CC5)")]),t._v(" "),e("li",[t._v("1x 구조 코어 깊이 카메라\n"),e("ul",[e("li",[t._v("160도 와이드 비전 카메라")]),t._v(" "),e("li",[t._v("스테레오 적외선 카메라")]),t._v(" "),e("li",[t._v("온보드 IMU")]),t._v(" "),e("li",[t._v("강력한 NU3000 멀티 코어 깊이 프로세서")])])]),t._v(" "),e("li",[t._v("1x "),e("em",[t._v("UP Core")]),t._v(" 컴퓨터 (4GB 메모리 및 64GB eMMC, Ubuntu 및 PX4 회피 기능)\n"),e("ul",[e("li",[t._v("Intel® Atom ™ x5-z8350 (최대 1.92GHz)")]),t._v(" "),e("li",[t._v("호환 OS : Microsoft Windows 10 정식 버전, Linux (ubilinux, Ubuntu, Yocto), Android")]),t._v(" "),e("li",[t._v("비행 컨트롤러에 연결된 FTDI UART")]),t._v(" "),e("li",[e("code",[t._v("USB1")]),t._v(" : USB3.0 USB2.0 스틱에서 PX4 회피 환경을 부팅용 포트입니다(USB3.0 주변 장치를 연결하면 GPS 장애 발생할 수 있음).")]),t._v(" "),e("li",[e("code",[t._v("USB2")]),t._v(" : JST-GH 커넥터의 USB2.0 포트. 두 번째 카메라, LTE 등에 사용할 수 있습니다. (또는 개발용 키보드 / 마우스).")]),t._v(" "),e("li",[e("code",[t._v("USB3")]),t._v(" : 깊이 카메라에 연결된 USB2.0 JST-GH 포트")]),t._v(" "),e("li",[e("code",[t._v("HDMI")]),t._v(" : HDMI 출력")]),t._v(" "),e("li",[t._v("SD 카드 슬롯")]),t._v(" "),e("li",[t._v("WiFi 802.11 b/g/n @ 2.4GHz (외부 안테나 #1에 연결됨). 컴퓨터 인터넷 액세스와 업데이트를 위하여 홈 WiFi 네트워크에 액세스할 수 있습니다.")])])])])]),t._v(" "),e("li",[e("p",[t._v("기계적 사양 :")]),t._v(" "),e("ul",[e("li",[t._v("프레임 : 전체 5mm 3k 탄소 섬유 능직")]),t._v(" "),e("li",[t._v("모터 : T-MOTOR F60 PROⅢ KV1750")]),t._v(" "),e("li",[t._v("ESC : BEHEli-S 20A ESC")]),t._v(" "),e("li",[t._v("프로펠러 : T6045")]),t._v(" "),e("li",[t._v("GPS : Pixhawk4 GPS 모듈")]),t._v(" "),e("li",[t._v("전원 모듈 : Holybro PM07")]),t._v(" "),e("li",[t._v("축거 : 286mm")]),t._v(" "),e("li",[t._v("중량 : 854g (배터리 또는 소품 제외)")]),t._v(" "),e("li",[t._v("텔레메트리 : 비행 컨트롤러에 연결된 ESP8266 (외부 안테나 #2에 연결됨). 지상국에 대한 무선 연결을 활성화합니다.")])])]),t._v(" "),e("li",[e("p",[t._v("Auterion에서 제공하는 아래의 번들들이 사전 플래시된 소프트웨어가 포함된 USB2.0 스틱 :")]),t._v(" "),e("ul",[e("li",[t._v("Ubuntu 18.04 LTS")]),t._v(" "),e("li",[t._v("ROS Melodic")]),t._v(" "),e("li",[t._v("후두 구조 코어 ROS 드라이버")]),t._v(" "),e("li",[t._v("MAVROS")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/PX4/avoidance#obstacle-detection-and-avoidance",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4 회피 기능"),e("OutboundLink")],1)])])]),t._v(" "),e("li",[e("p",[t._v("다양한 케이블, 8x 프로펠러, 2x 배터리 스트랩 (설치됨) 및 기타 액세서리 (추가 주변 장치 연결용으로 사용할 수 있음).")])])]),t._v(" "),e("h2",{attrs:{id:"그-외-필요한-것"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#그-외-필요한-것"}},[t._v("#")]),t._v(" 그 외 필요한 것")]),t._v(" "),e("p",[t._v("이 키트에는 별도로 구매하여야 하는 배터리와 무선 제어 시스템을 제외한 필수적인 드론 하드웨어들이 포함되어 있습니다.")]),t._v(" "),e("ul",[e("li",[t._v("배터리:\n"),e("ul",[e("li",[t._v("XT60 암 커넥터가있는 4S LiPo")]),t._v(" "),e("li",[t._v("길이 115mm 미만 (전원 커넥터와 GPS 마스트 사이에 맞음)")])])]),t._v(" "),e("li",[t._v("무선 제어 시스템\n"),e("ul",[e("li",[t._v("모든 "),e("RouterLink",{attrs:{to:"/ko/getting_started/rc_transmitter_receiver.html"}},[t._v("PX4 호환 RC 시스템")]),t._v("을 사용할 수 있습니다.")],1),t._v(" "),e("li",[t._v("R-XSR 수신기가 있는 "),e("em",[t._v("FrSky Taranis")]),t._v(" 송신기는 많이 사용되는 설정입니다.")])])]),t._v(" "),e("li",[t._v("H2.0 Hex 키 (RC 수신기를 연결할 수 있도록 상단 플레이트 나사를 푸는 용도)")])]),t._v(" "),e("p",[t._v("또한, 사용자는 지상국 하드웨어와 소프트웨어가 필요합니다.")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/getting_started/download_and_install.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGroundControl"),e("OutboundLink")],1),t._v("(QGC)을 실행 노트북 또는 태블릿.")])]),t._v(" "),e("h2",{attrs:{id:"최초-설정"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#최초-설정"}},[t._v("#")]),t._v(" 최초 설정")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("기체에 "),e("RouterLink",{attrs:{to:"/ko/getting_started/rc_transmitter_receiver.html#connecting-receivers"}},[t._v("RC 호환 수신기")]),t._v("를 부착합니다 (키트와 함께 제공되지 않음).")],1),t._v(" "),e("ul",[e("li",[t._v("H2.0 육각 도구를 사용하여 상단 플레이트 (배터리가가는 곳)를 분리합니다.")]),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/ko/assembly/quick_start_pixhawk4.html#radio-control"}},[t._v("수신기를 비행 컨트롤러에 연결합니다")]),t._v(".")],1),t._v(" "),e("li",[t._v("상단 플레이트를 다시 부착합니다.")]),t._v(" "),e("li",[t._v("RC 수신기를 기체 후면의 "),e("em",[t._v("UP Core")]),t._v(" 캐리어 보드 플레이트에 장착합니다 (지퍼 또는 양면 테이프 사용).")]),t._v(" "),e("li",[t._v("안테나에 장애물이 없는 지, 프레임에서 전기적으로 절연되어 있는지 확인합니다 (예 : 캐리어 보드 아래 또는 기체 팔 또는 다리에 고정).")])])]),t._v(" "),e("li",[e("p",[t._v("RC 지상 및 공중 유닛을 "),e("RouterLink",{attrs:{to:"/ko/getting_started/rc_transmitter_receiver.html#binding"}},[t._v("바인딩")]),t._v("합니다 (아직 수행하지 않은 경우). 바인딩 절차는 사용된 무선 시스템에 따라 다릅니다 (수신기 설명서 참조).")],1)]),t._v(" "),e("li",[e("p",[t._v("GPS 마스트를 수직 위치로 올리고 덮개를 베이스 플레이트의 홀더에 조입니다.")]),t._v(" "),e("p",[e("img",{attrs:{src:_(607),alt:"GPS 마스트 올리기"}})])]),t._v(" "),e("li",[e("p",[t._v("키트에서 사전 이미징된 USB2.0 스틱을 "),e("code",[t._v("USB1")]),t._v(" (아래 강조 표시됨)이라고 표시된 "),e("em",[t._v("UP Core")]),t._v(" 포트에 삽입합니다.")]),t._v(" "),e("p",[e("img",{attrs:{src:_(608),alt:"UP 코어 : USB1 포트 "}})])]),t._v(" "),e("li",[e("p",[t._v("완전히 충전된 배터리로 기체의 전원을 공급하십시오. :::note 배터리를 연결하기 전에 프로펠러가 제거되었는 지 확인하십시오.\n:::")])]),t._v(" "),e("li",[e("p",[t._v("아래의 로그인 정보를 사용하여 지상국을 기체 WiFi에 연결합니다 (몇 초 후).")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("SSID:")]),t._v(" pixhawk4")]),t._v(" "),e("li",[e("strong",[t._v("비밀번호:")]),t._v(" pixhawk4")])])])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("연결 후(원하는 경우), 웹 브라우저에서 URL "),e("code",[t._v("http://192.168.4.1")]),t._v("을 열어 WiFi 네트워크 SSID, 암호 및 기타 로그인 정보를 변경할 수 있습니다. 전송 속도 921600을 변경하지 마십시오.")])]),t._v(" "),e("ol",[e("li",[t._v("지상국에서 "),e("em",[t._v("QGroundControl")]),t._v("을 시작합니다.")]),t._v(" "),e("li",[t._v("차량 "),e("RouterLink",{attrs:{to:"/ko/config/"}},[t._v("설정 및 보정")]),t._v(" :")],1)]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[t._v("기체는 사전 보정된 상태로 수령하여야합니다 (예 : 펌웨어, 기체, 배터리 및 센서가 모두 설정됨). 그러나, 방금 연결한 무선 시스템을 보정하여야 하며, 나침반 보정을 다시 수행하여야 하는 경우가 많습니다.")])]),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/ko/config/radio.html"}},[t._v("라디오 시스템 보정")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/ko/config/compass.html"}},[t._v("나침반 보정")])],1)]),t._v(" "),e("ol",[e("li",[t._v("(선택 사항) 조종기에서 "),e("RouterLink",{attrs:{to:"/ko/config/flight_mode.html"}},[t._v("비행 모드 선택 스위치")]),t._v("를 설정합니다.")],1)]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[t._v("모드는 "),e("em",[t._v("QGroundControl")]),t._v("을 사용하여 변경할 수 있습니다.")])]),t._v(" "),e("p",[t._v("RC 컨트롤러 스위치는 다음에 대해 정의하는 것이 좋습니다.")]),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/ko/flight_modes/position_mc.html"}},[t._v("위치 모드")]),t._v("-충돌 방지를 테스트하는 데 사용할 수 있는 안전한 수동 비행 모드입니다.")],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/ko/flight_modes/mission.html"}},[t._v("임무 모드")]),t._v(" - 임무를 실행하고 장애물 회피를 테스트합니다.")],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/ko/flight_modes/return.html"}},[t._v("귀환 모드")]),t._v(" - 기체를 출발 지점으로 안전하게 복귀하여 착륙합니다.")],1)]),t._v(" "),e("ol",[e("li",[e("p",[t._v("그림과 같이 프로펠러를 부착합니다.")]),t._v(" "),e("p",[e("img",{attrs:{src:_(609),alt:"모터 순서 다이어그램"}})]),t._v(" "),e("ul",[e("li",[e("p",[t._v("프로펠러 방향("),e("em",[t._v("6045")]),t._v(" (정상, 시계 반대 방향), "),e("em",[t._v("6045")]),t._v(" "),e("strong",[t._v("R")]),t._v(" (반전, 시계 방향)을 레이블에서 확인할 수 있습니다.")]),t._v(" "),e("p",[e("img",{attrs:{src:_(610),alt:"프로펠러 식별"}})])]),t._v(" "),e("li",[e("p",[t._v("제공된 프로펠러 너트를 사용하여 단단히 조입니다.")]),t._v(" "),e("p",[e("img",{attrs:{src:_(611),alt:"프로펠러 너트"}})])])])])]),t._v(" "),e("h2",{attrs:{id:"드론-회피-비행"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#드론-회피-비행"}},[t._v("#")]),t._v(" 드론 회피 비행")]),t._v(" "),e("p",[t._v("위의  기체 설정이 완료되면 :")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("기체에 전원 공급 배터리를 연결하십시오.")])]),t._v(" "),e("li",[e("p",[t._v("부팅 순서가 완료되고 회피 시스템이 시작될 때까지 기다리십시오 (부팅중에는 기체는은 무장 명령을 거부합니다).")])])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("부팅/시작 프로세스는 제공된 USB 스틱에서 약 1 분 (또는 "),e("a",{attrs:{href:"#install_image_mission_computer"}},[t._v("내부 메모리")]),t._v("에서 30 초) 정도 소요됩니다.")])]),t._v(" "),e("ol",[e("li",[e("p",[t._v("회피 시스템이 제대로 시작되었는 지 확인하십시오.")]),t._v(" "),e("ul",[e("li",[e("p",[e("em",[t._v("QGroundControl")]),t._v(" 알림 로그에 "),e("strong",[t._v("Avoidance system connected")]),t._v(" 메시지가 표시됩니다.")]),t._v(" "),e("p",[e("img",{attrs:{src:_(612),alt:"회피 시스템이 시작되었음을 보여주는 QGC 로그"}})])]),t._v(" "),e("li",[e("p",[e("em",[t._v("Structure Core")]),t._v(" 카메라 전면에 빨간색 레이저가 보입니다.")])])])]),t._v(" "),e("li",[e("p",[t._v("GPS LED가 녹색으로 바뀔 때까지 기다리십시오. 이것은 기체에 GPS 준비가 완료되어 비행 준비가 완료되었음을 의미합니다!")])]),t._v(" "),e("li",[e("p",[t._v("지상국을 기체 WiFi에 연결합니다.")])]),t._v(" "),e("li",[e("p",[t._v("PX4 비전을 테스트하기 위해 나무나 기타 편리한 장애물이 있는 비행하기에 안전한 실외 위치를 찾으십시오.")])]),t._v(" "),e("li",[e("p",[e("RouterLink",{attrs:{to:"/ko/computer_vision/collision_prevention.html"}},[t._v("충돌 방지")]),t._v("를 테스트하려면 "),e("RouterLink",{attrs:{to:"/ko/flight_modes/position_mc.html"}},[t._v("위치 모드")]),t._v("를 활성화하고 수동으로 장애물을 향해 비행하십시오. 기체의 속도를 줄인 다음 장애물로부터 6m 이내에 정지해야합니다(거리는 "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#CP_DIST"}},[t._v("CP_DIST")]),t._v(" 매개 변수를 사용하여 "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameters.html"}},[t._v("변경")]),t._v(" 할 수 있음).")],1)]),t._v(" "),e("li",[e("p",[e("RouterLink",{attrs:{to:"/ko/computer_vision/obstacle_avoidance.html"}},[t._v("장애물 회피")]),t._v("를 테스트 하려면 경로에 장애물이 있는 임무를 만드십시오. 그런 다음, "),e("RouterLink",{attrs:{to:"/ko/flight_modes/mission.html"}},[t._v("임무 모드")]),t._v("로 전환하여 임무를 실행하고 장애물을 돌아다니는 기체를 관찰한 다음 계획된 코스로 돌아갑니다.")],1)])]),t._v(" "),e("h2",{attrs:{id:"키트를-사용한-개발"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#키트를-사용한-개발"}},[t._v("#")]),t._v(" 키트를 사용한 개발")]),t._v(" "),e("p",[t._v("다음 섹션에서는 컴퓨터 비전 소프트웨어를 개발 키트를 사용하는 방법에 대하여 설명합니다.")]),t._v(" "),e("h3",{attrs:{id:"px4-회피-개요"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#px4-회피-개요"}},[t._v("#")]),t._v(" PX4 회피 개요")]),t._v(" "),e("p",[e("em",[t._v("PX4 회피")]),t._v(" 시스템은 "),e("em",[t._v("비행 컨트롤러")]),t._v("에서 실행되는 PX4 비행 스택에 장애물과 경로 정보를 제공하는 보조 컴퓨터 (연결된 깊이 카메라 포함)에서 실행되는 컴퓨터 비전 소프트웨어로 구성됩니다.")]),t._v(" "),e("p",[t._v("동반 컴퓨터 비전/계획 소프트웨어에 대한 문서는 github에서 찾을 수 있습니다 : "),e("a",{attrs:{href:"https://github.com/PX4/avoidance#obstacle-detection-and-avoidance",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4/avoidance"),e("OutboundLink")],1),t._v(". 이 프로젝트는 다양한 플래너 구현 (ROS 노드로 패키징)을 제공합니다.")]),t._v(" "),e("ul",[e("li",[t._v("PX4 Vision Kit는 기본적으로 "),e("em",[t._v("localplanner")]),t._v("를 실행하며 이것은 소프트웨어에 권장되는 시작점입니다.")]),t._v(" "),e("li",[e("em",[t._v("globalplanner")]),t._v("는이 키트로 테스트되지 않았습니다.")]),t._v(" "),e("li",[e("em",[t._v("착륙 플래너")]),t._v("에는 아래쪽을 향한 카메라가 필요하며, 먼저 카메라 장착을 수정하지 않고는 사용할 수 없습니다.")])]),t._v(" "),e("p",[t._v("PX4와 보조 컴퓨터는 다음 인터페이스를 사용하여 "),e("a",{attrs:{href:"https://mavlink.io/en/",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVLink"),e("OutboundLink")],1),t._v("를 통하여 데이터를 교환합니다.")]),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/ko/computer_vision/path_planning_interface.html"}},[t._v("경로 계획 인터페이스")]),t._v(" - 자동 모드에서 회피 기능을 구현 API.")],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/ko/computer_vision/collision_prevention.html"}},[t._v("충돌 방지 인터페이스")]),t._v(" - 장애물 맵을 기반으로하는 수동 위치 모드에서 차량 기반 회피를위한 API (현재 충돌 방지에 사용됨).")],1)]),t._v(" "),e("p",[e("span",{attrs:{id:"install_image_mission_computer"}})]),t._v(" "),e("h3",{attrs:{id:"보조-컴퓨터에-이미지-설치"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#보조-컴퓨터에-이미지-설치"}},[t._v("#")]),t._v(" 보조 컴퓨터에 이미지 설치")]),t._v(" "),e("p",[e("em",[t._v("UP Core")]),t._v("에 이미지를 설치하고 내부 메모리(USB 스틱 대신)에서 부팅할 수 있습니다.")]),t._v(" "),e("p",[t._v("내부 메모리 부팅이 훨씬 빠르며 USB 스틱보다 더 많은 메모리를 제공하며 USB 포트를 더 확보할 수 있습니다.")]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[t._v("내장 메모리에서 부팅은 약 30 초가 걸리며, 제공된 USB2 스틱으로 부팅은 약 1분 정도 걸립니다(다른 카드는 더 오래 걸릴 수 있음).")])]),t._v(" "),e("p",[t._v("USB 이미지를 "),e("em",[t._v("UP Core")]),t._v("로 플래시하려면 :")]),t._v(" "),e("ol",[e("li",[t._v("사전 플래시된 USB 드라이브를 "),e("code",[t._v("USB1")]),t._v("이라고 표시된 "),e("em",[t._v("UP Core")]),t._v(" 포트에 삽입합니다.")]),t._v(" "),e("li",[e("a",{attrs:{href:"#login_mission_computer"}},[t._v("보조 컴퓨터에 로그인")]),t._v("합니다(위 설명 참조).")]),t._v(" "),e("li",[t._v("터미널에서 다음 명령어를 실행하여 이미지를 내부 메모리 (eMMC)에 복사합니다. 터미널은 깜박이는 프로세스동안에 여러가지 응답을 요청합니다."),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~/catkin_ws/src/px4vision_ros\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" ./flash_emmc.sh\n")])])])])]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[t._v("이 스크립트를 실행하면 "),e("em",[t._v("UP Core")]),t._v("에 저장된 모든 정보가 삭제됩니다.")])]),t._v(" "),e("ol",[e("li",[t._v("USB 스틱을 꺼냅니다.")]),t._v(" "),e("li",[t._v("기체를 재부팅합니다. 이제 "),e("em",[t._v("UP Core")]),t._v(" 컴퓨터가 내부 메모리 (eMMC)에서 부팅됩니다.")])]),t._v(" "),e("h3",{attrs:{id:"보조-컴퓨터-부팅"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#보조-컴퓨터-부팅"}},[t._v("#")]),t._v(" 보조 컴퓨터 부팅")]),t._v(" "),e("p",[t._v("먼저 제공된 USB2.0 스틱을 "),e("code",[t._v("USB1")]),t._v("이라고 표시된 "),e("em",[t._v("UP Core")]),t._v(" 포트에 삽입한 다음 4S 배터리를 사용하여 기체에 전원을 공급합니다. 회피 시스템은 약 1 분 이내에 시작되어야 합니다(제공된 USB 스틱에 따라 다름).")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[e("a",{attrs:{href:"#fly-the-drone-with-avoidance"}},[t._v("Fly the Drone with avoidance")]),t._v("는 회피 시스템이 활성화 여부를 확인하는 방법을 추가로 설명합니다.")])]),t._v(" "),e("p",[t._v("이미 "),e("a",{attrs:{href:"#install_image_mission_computer"}},[t._v("보조  컴퓨터에 이미지를 설치")]),t._v(" 한 경우에는 기체에 전원을 공급하기만하면 됩니다(즉, USB 스틱이 필요하지 않음). 회피 시스템은 약 30 초 이내에 가동 및 실행되어야 합니다.")]),t._v(" "),e("p",[t._v("시작되면 보조 컴퓨터를 비전 개발 환경과 소프트웨어 실행 환경으로 사용할 수 있습니다.")]),t._v(" "),e("p",[e("a",{attrs:{id:"login_mission_computer"}})]),t._v(" "),e("h3",{attrs:{id:"보조-컴퓨터-로그인"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#보조-컴퓨터-로그인"}},[t._v("#")]),t._v(" 보조 컴퓨터 로그인")]),t._v(" "),e("p",[t._v("보조 컴퓨터에 로그인하려면 :")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("포트 "),e("code",[t._v("USB2")]),t._v("를 통하여 키보드와 마우스를 "),e("em",[t._v("UP Core")]),t._v("에 연결합니다.")]),t._v(" "),e("p",[e("img",{attrs:{src:_(613),alt:"UP 코어 : USB2"}})]),t._v(" "),e("ul",[e("li",[e("p",[t._v("키트의 USB-JST 케이블을 사용하여 USB A 커넥터를 얻습니다.")]),t._v(" "),e("p",[e("img",{attrs:{src:_(614),alt:"USB to JST 케이블"}})])]),t._v(" "),e("li",[e("p",[t._v("키보드와 마우스에 별도의 커넥터가 있는 경우 USB 허브를 케이블에 연결할 수 있습니다.")])])])]),t._v(" "),e("li",[e("p",[t._v("모니터를 "),e("em",[t._v("UP Core")]),t._v(" HDMI 포트에 연결합니다.")]),t._v(" "),e("p",[e("img",{attrs:{src:_(615),alt:"UP Core : HDMI 포트"}})]),t._v(" "),e("p",[t._v("그러면 Ubuntu 로그인 화면이 모니터에 표시됩니다.")])]),t._v(" "),e("li",[e("p",[t._v("아래의 로그인 정보로 "),e("em",[t._v("UP Core")]),t._v("에 로그인합니다.")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("사용자 이름:")]),t._v(" px4vision")]),t._v(" "),e("li",[e("strong",[t._v("비밀번호:")]),t._v(" px4vision")])])])]),t._v(" "),e("h3",{attrs:{id:"px4-회피-기능-추가-개발"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#px4-회피-기능-추가-개발"}},[t._v("#")]),t._v(" PX4 회피 기능 추가 개발")]),t._v(" "),e("p",[t._v("PX4 비전의 "),e("em",[t._v("UP Core")]),t._v(" 컴퓨터는 PX4 회피 소프트웨어를 확장을 위한 최적의 개발 환경을 제공합니다 (일반적으로 ROS 2를 사용하여 새로운 컴퓨터 비전 알고리즘을 개발함). 기체에서 소프트웨어를 개발/테스트, 자체 git 저장소에 동기화 및 github "),e("a",{attrs:{href:"https://github.com/PX4/avoidance",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4/Avoidance"),e("OutboundLink")],1),t._v(" 저장소에서 PX4 커뮤니티와 수정 및 개선 사항을 공유할 수 있습니다.")]),t._v(" "),e("p",[t._v("catkin 작업 공간은 "),e("code",[t._v("~/catkin_ws")]),t._v("에 있으며 PX4 회피 로컬 플래너를 실행하도록 사전에 설정되어 있습니다. 부팅에서 시작 파일("),e("code",[t._v("avoidance.launch")]),t._v(")은 "),e("code",[t._v("px4vision_ros")]),t._v(" 패키지에 있습니다. 실행되는 플래너를 변경하려면 이 파일을 수정하십시오.")]),t._v(" "),e("p",[t._v("회피 패키지는 부팅시 시작됩니다. 다른 플래너를 통합하려면이 기능을 비활성화하여야 합니다.")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("다음 명령을 사용하여 회피 프로세스를 비활성화 하십시오.")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("systemctl stop avoidance.service\n")])])]),e("p",[t._v("시스템을 재부팅하여 서비스를 다시 시작할 수 있습니다.")]),t._v(" "),e("p",[t._v("기타 유용한 명령은 다음과 같습니다.")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 서비스 재시작")]),t._v("\n")])])])])]),t._v(" "),e("p",[t._v("systemctl start avoidance.service")]),t._v(" "),e("h1",{attrs:{id:"서비스-비활성화-서비스를-중지하고-부팅후-다시-시작하지-않음"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#서비스-비활성화-서비스를-중지하고-부팅후-다시-시작하지-않음"}},[t._v("#")]),t._v(" 서비스 비활성화 (서비스를 중지하고 부팅후 다시 시작하지 않음)")]),t._v(" "),e("p",[t._v("systemctl disable avoidance.service")]),t._v(" "),e("h1",{attrs:{id:"서비스-활성화-서비스-시작-및-부팅후-재시작-활성화"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#서비스-활성화-서비스-시작-및-부팅후-재시작-활성화"}},[t._v("#")]),t._v(" 서비스 활성화 (서비스 시작 및 부팅후 재시작 활성화)")]),t._v(" "),e("p",[t._v("systemctl enable avoidance.service")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("\n1. 장애물 회피 패키지의 소스 코드는 `~/catkin_ws/src/avoidance`에 있는 https://github.com/PX4/avoidance를 참고하십시오.\n\n1. 코드를 변경하십시오! 최신 회피 코드를 얻으려면 회피 저장소에서 코드를 가져 오십시오.\n```sh\ngit pull origin\ngit checkout origin/master\n")])])]),e("ol",[e("li",[t._v("패키지 빌드"),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("catkin build local_planner\n")])])])])]),t._v(" "),e("p",[t._v("ROS 작업 공간은 "),e("code",[t._v("~/catkin_ws")]),t._v("에 있습니다. ROS에서 개발하고 catkin 작업 공간을 사용하는 방법에 대한 참조는 "),e("a",{attrs:{href:"http://wiki.ros.org/catkin/Tutorials",target:"_blank",rel:"noopener noreferrer"}},[t._v("ROS catkin 튜토리얼"),e("OutboundLink")],1),t._v("을 참고하십시오.")]),t._v(" "),e("h3",{attrs:{id:"px4-펌웨어-개발"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#px4-펌웨어-개발"}},[t._v("#")]),t._v(" PX4 펌웨어 개발")]),t._v(" "),e("p",[t._v("이 키트는 보조 컴퓨터에서 실행되고 PX4의 유연한 경로 계획 및 충돌 방지 인터페이스와 통합되는 컴퓨터 비전 소프트웨어를 만들기 위하여 설계되었습니다.")]),t._v(" "),e("p",[t._v("PX4 자체를 수정하고 "),e("RouterLink",{attrs:{to:"/ko/config/firmware.html#custom"}},[t._v("사용자 지정 펌웨어로 설치")]),t._v(" 할 수도 있습니다.")],1),t._v(" "),e("ul",[e("li",[t._v("펌웨어를 업데이트하려면 "),e("em",[t._v("QGroundControl")]),t._v("을 "),e("strong",[t._v("USB를 사용하여")]),t._v(" 키트 "),e("em",[t._v("Pixhawk 4")]),t._v("에 연결하여야 합니다.")]),t._v(" "),e("li",[t._v("새 펌웨어를 로드 한 후 "),e("em",[t._v("PX4 Vision DevKit")]),t._v(" 기체를 선택합니다. "),e("img",{attrs:{src:_(616),alt:"기체 선택 - PX4 Vision DevKit"}})])]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[t._v("대부분의 컴퓨터 비전 사용 사례를 충족하기 위해 PX4 코드를 수정할 필요는 *없습니다 *. 인터페이스 또는 다른 기능을 통합하는 방법을 논의하려면 PX4 슬랙 채널 : # computer-vision에 가입하십시오.")])]),t._v(" "),e("h2",{attrs:{id:"px4-비전-캐리어-보드-핀아웃"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#px4-비전-캐리어-보드-핀아웃"}},[t._v("#")]),t._v(" Px4 비전 캐리어 보드 핀아웃")]),t._v(" "),e("p",[t._v("캐리어 보드 핀아웃은 "),e("a",{attrs:{href:"http://www.holybro.com/manual/PX4_Vision_carrier_board_pinouts_v1.1.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Holybro 웹 사이트"),e("OutboundLink")],1),t._v("에서 다운로드할 수 있습니다.")]),t._v(" "),e("h2",{attrs:{id:"기타-개발-리소스"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#기타-개발-리소스"}},[t._v("#")]),t._v(" 기타 개발 리소스")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://wiki.up-community.org/Ubuntu",target:"_blank",rel:"noopener noreferrer"}},[e("em",[t._v("UP Core")]),t._v(" Wiki"),e("OutboundLink")],1),t._v(" - "),e("em",[t._v("Up Core")]),t._v(" 보조 컴퓨터 기술 정보")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://structure.io/developers",target:"_blank",rel:"noopener noreferrer"}},[t._v("후두 개발자 포럼"),e("OutboundLink")],1),t._v(" - "),e("em",[t._v("구조 코어")]),t._v(" 카메라 정보")]),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk4.html"}},[t._v("Pixhawk  4 개요")])],1),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/PX4/avoidance",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4 회피 소프트웨어 / 문서"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/ko/computer_vision/path_planning_interface.html"}},[t._v("경로 계획 인터페이스")])],1),t._v(" "),e("li",[e("a",{attrs:{href:"http://www.holybro.com/manual/PX4_Vision_carrier_board_pinouts_v1.1.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Px4 비전 캐리어 보드 핀아웃"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"기술-지원-방법"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#기술-지원-방법"}},[t._v("#")]),t._v(" 기술 지원 방법")]),t._v(" "),e("p",[t._v("하드웨어 문제는 Holybro("),e("a",{attrs:{href:"mailto:productservice@holybro.com"}},[t._v("productservice@holybro.com")]),t._v(")에 문의하십시오.")]),t._v(" "),e("p",[t._v("소프트웨어 문제는 아래의 커뮤니티 지원 채널을 사용하십시오.")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://discuss.px4.io/c/Vision-based-navigation-and-obstacle-avoidance",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4 토론 : 컴퓨터 비전 카테고리."),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://slack.px4.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4 슬랙"),e("OutboundLink")],1),t._v(" 채널 : #avoidance")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://wikifactory.com/+holybro/px4-vision",target:"_blank",rel:"noopener noreferrer"}},[t._v("Holybro PX4 비전 위키 팩토리"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);v.default=r.exports},445:function(t,v,_){t.exports=_.p+"assets/img/Explode-view.c3cc7d66.png"},602:function(t,v,_){t.exports=_.p+"assets/img/px4_vision_kit_hero.8eef78c9.jpg"},603:function(t,v,_){t.exports=_.p+"assets/img/rc.6b6872a5.png"},604:function(t,v){t.exports="data:image/jpeg;base64,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"},605:function(t,v,_){t.exports=_.p+"assets/img/warning_power_port_update.f5881e9e.png"},606:function(t,v,_){t.exports=_.p+"assets/img/holybro_px4_vision_whats_inside.2a837d93.jpg"},607:function(t,v,_){t.exports=_.p+"assets/img/raise_gps_mast.5081b5cf.jpg"},608:function(t,v,_){t.exports=_.p+"assets/img/upcore_port_usb1.7d4feac6.png"},609:function(t,v,_){t.exports=_.p+"assets/img/motor_order_diagram.64560394.png"},610:function(t,v,_){t.exports=_.p+"assets/img/propeller_directions.4bfa5377.jpg"},611:function(t,v,_){t.exports=_.p+"assets/img/propeller_nuts.2ad4cf8c.jpg"},612:function(t,v,_){t.exports=_.p+"assets/img/qgc_console_vision_system_started.254399c4.jpg"},613:function(t,v,_){t.exports=_.p+"assets/img/upcore_port_usb2.8efb3345.png"},614:function(t,v,_){t.exports=_.p+"assets/img/usb_jst_cable.77e81012.jpg"},615:function(t,v,_){t.exports=_.p+"assets/img/upcore_port_hdmi.8ab92b22.png"},616:function(t,v,_){t.exports=_.p+"assets/img/qgc_airframe_px4_vision_devkit_platform.77e43013.jpg"}}]);