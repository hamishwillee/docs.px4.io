(window.webpackJsonp=window.webpackJsonp||[]).push([[163],{2497:function(t,a,e){"use strict";e.r(a);var r=e(19),s=Object(r.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"이리듐-rockblock-위성통신"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#이리듐-rockblock-위성통신"}},[t._v("#")]),t._v(" 이리듐(RockBlock) 위성통신")]),t._v(" "),r("p",[t._v("위성통신 시스템은 기체와 지상국간의 광역 통신을 제공합니다.")]),t._v(" "),r("p",[t._v("이리듐 SBD 위성 통신 시스템의 서비스 공급자 RockBlock을 이용한 시스템 설정 방법을 설명합니다. 신호 품질이 우수한 경우에도 10~15초 정도의 시간 지연이 있을 수 있습니다.")]),t._v(" "),r("h2",{attrs:{id:"개요"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#개요"}},[t._v("#")]),t._v(" 개요")]),t._v(" "),r("p",[t._v("위성 통신에는 다음의 요소들이 필요합니다.")]),t._v(" "),r("ul",[r("li",[t._v("A "),r("a",{attrs:{href:"https://www.iridium.com/products/rock-seven-rockblock-9603/",target:"_blank",rel:"noopener noreferrer"}},[t._v("RockBlock 9603 Iridium Satellite Modem"),r("OutboundLink")],1),t._v(" module connected to a Pixhawk flashed with the PX4 Autopilot.")]),t._v(" "),r("li",[t._v("Ubuntu Linux를 실행하는 메시지 릴레이 서버")]),t._v(" "),r("li",[r("em",[t._v("QGroundControl")]),t._v("을 실행하는 지상국 컴퓨터")])]),t._v(" "),r("p",[t._v("전체 시스템 아키텍처는 다음과 같습니다.")]),t._v(" "),r("p",[r("img",{attrs:{src:e(492),alt:"아키텍쳐"}})]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("설정은 Ubuntu 14.04 및 16.04에서 실행되는 "),r("em",[t._v("QGoundControl")]),t._v("의 현재 릴리스로 테스트되었습니다.")]),t._v(" "),r("ul",[r("li",[t._v("다른 지상국 및 운영체제를 사용할 수 있지만, 아직 테스트되지 않았습니다.")]),t._v(" "),r("li",[t._v("The "),r("a",{attrs:{href:"https://www.groundcontrol.com/us/product/rockblock-9602-satellite-modem/",target:"_blank",rel:"noopener noreferrer"}},[t._v("RockBlock MK2"),r("OutboundLink")],1),t._v(" module can also be used. RockBlock 9603 모듈은 크기가 작고 가볍우면서도 동일한 기능을 제공하기 때문에 권장됩니다.")])])]),t._v(" "),r("h2",{attrs:{id:"비용"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#비용"}},[t._v("#")]),t._v(" 비용")]),t._v(" "),r("p",[t._v("영국 링크 실행 비용은 회선 대여 및 메시지 당 비용으로 구성됩니다.")]),t._v(" "),r("ul",[r("li",[t._v("각 모듈을 활성화해야 하며, 가격은 월 10파운드입니다")]),t._v(" "),r("li",[t._v("시스템을 통해 전송되는 각 메시지는 50바이트당 하나의 "),r("em",[t._v("크레딧")]),t._v("입니다. 번들 크기에 따라 RockBlock에서 신용당 0.04파운드 0.11파운드에 신용대출을 구입할 수 있습니다.")])]),t._v(" "),r("p",[t._v("일반적으로 모듈에 대한 자세한 설명은 "),r("a",{attrs:{href:"https://docs.rockblock.rock7.com/docs",target:"_blank",rel:"noopener noreferrer"}},[t._v("RockBlock 설명서"),r("OutboundLink")],1),t._v(" 및 "),r("em",[t._v("RockBlock")]),t._v("을 참고하십시오.")]),t._v(" "),r("h2",{attrs:{id:"기체-설정"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#기체-설정"}},[t._v("#")]),t._v(" 기체 설정")]),t._v(" "),r("h3",{attrs:{id:"배선"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#배선"}},[t._v("#")]),t._v(" 배선")]),t._v(" "),r("p",[t._v("RockBlock 모듈을 Pixhawk의 직렬 포트에 연결합니다. 모듈의 전원 요구 사항으로 인하여 5V에서 최대 0.5A가 필요하므로 고출력 직렬 포트를 통해서만 전원을 공급할 수 있습니다. 사용 가능한 별도의 전원을 사용시에는 Pixhawk와 동일한 접지이어야 합니다. "),r("a",{attrs:{href:"https://docs.rockblock.rock7.com/docs/connectors",target:"_blank",rel:"noopener noreferrer"}},[t._v("커넥터"),r("OutboundLink")],1),t._v("와 "),r("a",{attrs:{href:"https://docs.rockblock.rock7.com/docs/power-supply",target:"_blank",rel:"noopener noreferrer"}},[t._v("전원 요구 사항"),r("OutboundLink")],1),t._v("의 세부 정보는 RockBlock 설명서에서 확인할 수 있습니다.")]),t._v(" "),r("h3",{attrs:{id:"모듈"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#모듈"}},[t._v("#")]),t._v(" 모듈")]),t._v(" "),r("p",[t._v("모듈은 내부 안테나 또는 SMA 커넥터에 연결된 외부 안테나를 사용할 수 있습니다. "),r("a",{attrs:{href:"https://docs.rockblock.rock7.com/docs/switching-rockblock-9603-antenna-mode",target:"_blank",rel:"noopener noreferrer"}},[t._v("두 안테나의 여러 상태를 전환"),r("OutboundLink")],1),t._v("하려면 작은 RF 연결 케이블의 위치를 변경하여야 합니다. 외부 안테나를 사용하는 경우 모듈 손상을 방지하기 위해 안테나의 전원을 켜기 전에 항상 안테나가 모듈에 연결되어 있는 지 확인하십시오.")]),t._v(" "),r("p",[t._v("모듈의 기본 보드 속도는 19200입니다. However, the PX4 "),r("em",[t._v("iridiumsbd")]),t._v(" driver requires a baud rate of 115200 so it needs to be changed using the "),r("a",{attrs:{href:"https://www.groundcontrol.com/en/wp-content/uploads/2022/02/IRDM_ISU_ATCommandReferenceMAN0009_Rev2.0_ATCOMM_Oct2012.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("AT commands"),r("OutboundLink")],1),t._v(".")]),t._v(" "),r("ol",[r("li",[t._v("19200/8-N-1 설정을 사용하여 모듈에 연결하고 다음 명령을 사용하여 통신이 작동하는지 점검하십시오. 응답은 다음과 같아야 합니다.")]),t._v(" "),r("li",[t._v("baudrate 속도를 변경합니다."),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("AT+IPR=9\n")])])])]),t._v(" "),r("li",[t._v("이제 115200/8-N-1 설정을 사용하여 모델에 다시 연결하고 다음을 사용하여 설정을 저장합니다."),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("AT&W0\n\n")])])])])]),t._v(" "),r("p",[t._v("이제 이 모듈을 PX4에서 사용할 수 있습니다.")]),t._v(" "),r("h3",{attrs:{id:"소프트웨어"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#소프트웨어"}},[t._v("#")]),t._v(" 소프트웨어")]),t._v(" "),r("p",[r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#ISBD_CONFIG"}},[t._v("ISBD_CONFIG")]),t._v("를 사용하여 RockBlock 모듈이 실행될 "),r("RouterLink",{attrs:{to:"/ko/peripherals/serial_configuration.html"}},[t._v("직렬 포트를 구성")]),t._v("합니다. 포트에 대한 전송 속도는 드라이버에 의해 구성되므로 설정할 필요가 없습니다.")],1),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[r("em",[t._v("QGroundControl")]),t._v("에서 설정 매개변수를 사용할 수 없는 경우에는 "),r("RouterLink",{attrs:{to:"/ko/peripherals/serial_configuration.html#parameter_not_in_firmware"}},[t._v("펌웨어에 드라이버를 추가")]),t._v("하여야 합니다.")],1),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("drivers/telemetry/iridiumsbd\n")])])])]),t._v(" "),r("h2",{attrs:{id:"rockblock-설정"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rockblock-설정"}},[t._v("#")]),t._v(" RockBlock 설정")]),t._v(" "),r("p",[t._v("RockBlock의 첫 번째 모듈을 구입시의 첫 번째 단계는 사용자 계정을 생성하는 것입니다.")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://rockblock.rock7.com/Operations",target:"_blank",rel:"noopener noreferrer"}},[t._v("계정"),r("OutboundLink")],1),t._v("에 로그인하여 "),r("code",[t._v("My RockBLOCKs")]),t._v("에서 RockBlock 모듈을 등록합니다. 모듈에 대한 라인 렌탈을 활성화하고 계정에서 예상 비행 시간에 충분한 크레딧을 사용할 수 있는 지 확인합니다. 기본 설정을 사용할 경우 분당 1개의 메시지가 차량에서 지상국으로 전송됩니다.")]),t._v(" "),r("p",[t._v("메시지 릴레이 서버에 대한 배달 그룹을 설정하고 모듈을 해당 배달 그룹에 추가합니다.")]),t._v(" "),r("p",[r("img",{attrs:{src:e(493),alt:"배달 그룹"}})]),t._v(" "),r("h2",{attrs:{id:"릴레이-서버-설정"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#릴레이-서버-설정"}},[t._v("#")]),t._v(" 릴레이 서버 설정")]),t._v(" "),r("p",[t._v("릴레이 서버는 Ubuntu 16.04 또는 14.04 버전에서 실행하여야 합니다.")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("메시지 릴레이로 작동하는 서버에는 고정 IP 주소와  열린 TCP 포트 2개가 있어야 합니다.")]),t._v(" "),r("ul",[r("li",[r("em",[t._v("RabbitMQ")]),t._v(" 메시지 브로커에 대한 "),r("code",[t._v("5672")]),t._v("("),r("em",[t._v("Rabbitmq")]),t._v(" 설정에서 변경할 수 있음)")]),t._v(" "),r("li",[t._v("HTTP POST 인터페이스의 경우 "),r("code",[t._v("45679")]),t._v("("),r("strong",[t._v("relay.cfg")]),t._v(" 파일에서 변경할 수 있음)")])])]),t._v(" "),r("li",[r("p",[t._v("필요한 Python 모듈을 설치합니다.")]),t._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" pip "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" pika tornado future\n")])])])]),t._v(" "),r("li",[r("p",[r("code",[t._v("rabbitmq")]),t._v(" 메시지 브로커를 설치합니다.")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("sudo apt install rabbitmq-server\n")])])])]),t._v(" "),r("li",[r("p",[t._v("브로커 자격 증명을 구성합니다(암호를 PWD로 변경).")]),t._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v("\n "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" rabbitmqctl add_user iridiumsbd "),r("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("PWD")]),t._v("\n "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" rabbitmqctl set_permissions iridiumsbd "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('".<em x-id="')]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('">"')]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('".</em>"')]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('".*"')]),t._v("\n")])])])]),t._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://github.com/acfloria/SatComInfrastructure.git",target:"_blank",rel:"noopener noreferrer"}},[t._v("SatComInfrarastructure"),r("OutboundLink")],1),t._v(" 저장소를 복제합니다.")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("git clone https://github.com/acfloria/SatComInfrastructure.git\n")])])])]),t._v(" "),r("li",[r("p",[r("em",[t._v("SatComInfrarastructure")]),t._v("로 이동하여 브로커 대기열을 설정합니다.")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("./setup_rabbit.py localhost iridiumsbd PWD\n")])])])]),t._v(" "),r("li",[r("p",[t._v("설정을 확인합니다.")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("sudo rabbitmqctl list_queues\n")])])]),r("p",[t._v("이렇게 하면 4개의 대기열 목록이 표시됩니다: "),r("code",[t._v("MO")]),t._v(", "),r("code",[t._v("MO_LOG")]),t._v(", "),r("code",[t._v("MT")]),t._v(", "),r("code",[t._v("MT")])])]),t._v(" "),r("li",[r("p",[t._v("설정을 반영하도록 "),r("code",[t._v("relay.cfg")]),t._v(" 설정 파일을 편집합니다.")])]),t._v(" "),r("li",[r("p",[t._v("분리 모드에서 릴레이 스크립트를 실행합니다.")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("screen -dm bash -c 'cd SatcomInfrastructure/; ./relay.py\n")])])])])]),t._v(" "),r("p",[t._v("기타 지침은 다음과 같습니다.")]),t._v(" "),r("ul",[r("li",[t._v("화면에서 분리:"),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("ctrl+a d\n")])])])]),t._v(" "),r("li",[t._v("스크립트 실행 중지:"),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("ctrl+a :quit\n")])])])]),t._v(" "),r("li",[t._v("화면에 다시 부착:"),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("screen -dr\n")])])])])]),t._v(" "),r("h2",{attrs:{id:"지상국-컴퓨터"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#지상국-컴퓨터"}},[t._v("#")]),t._v(" 지상국 컴퓨터")]),t._v(" "),r("p",[t._v("지상국을 설정 방법:")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("필요한 Python 모듈을 설치합니다.")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("sudo pip install pika tornado future\n")])])])]),t._v(" "),r("li",[r("p",[t._v("SatComInfrarastructure 저장소 복제:")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("git clone https://github.com/acfloria/SatComInfrastructure.git\n")])])])]),t._v(" "),r("li",[r("p",[t._v("설정을 반영하도록 "),r("strong",[t._v("udp2rabbit.cfg")]),t._v(" 설정 파일을 편집합니다.")])]),t._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/getting_started/download_and_install.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Install "),r("em",[t._v("QGroundControl")]),r("OutboundLink")],1),t._v(" (daily build).")])]),t._v(" "),r("li",[r("p",[t._v("다음 매개 변수를 사용하여 QGC에서 UDP 연결을 추가합니다.")]),t._v(" "),r("ul",[r("li",[t._v("접속 포트: 10000")]),t._v(" "),r("li",[t._v("대상 호스트: 127.0.0.1:10001")]),t._v(" "),r("li",[t._v("높은 지연 시간: 확인됨")])]),t._v(" "),r("p",[r("img",{attrs:{src:e(494),alt:"높은 지연 시간 링크 설정"}})])])]),t._v(" "),r("h3",{attrs:{id:"검증"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#검증"}},[t._v("#")]),t._v(" 검증")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("Open a terminal on the ground station computer and change to the location of the "),r("em",[t._v("SatComInfrastructure")]),t._v(" repository. 그런 다음 "),r("strong",[t._v("udp2rabbit.py")]),t._v(" 스크립트를 실행합니다. "),r("code",[t._v("./udp2rabbit.py")])]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("./udp2rabbit.py\n")])])])]),t._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://rockblock.rock7.com/Operations",target:"_blank",rel:"noopener noreferrer"}},[t._v(" RockBlock 계정"),r("OutboundLink")],1),t._v("에서 테스트 메시지를 "),r("code",[t._v("테스트 전송 그룹")]),t._v(" 탭에 생성된 전송 그룹으로 보냅니다.")])])]),t._v(" "),r("p",[r("code",[t._v("udp2rabbit.py")]),t._v(" 스크립트가 몇 초 내에 실행되고 있는 터미널에서 메시지에 대한 확인할 수 있는 경우 RockBlock 전달 그룹, 릴레이 서버 및 udp2rabbit 스크립트가 올바르게 설정된 것입니다.")]),t._v(" "),r("p",[r("img",{attrs:{src:e(495),alt:"udp2rabbit 메시지 확인"}})]),t._v(" "),r("h2",{attrs:{id:"시스템-실행"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#시스템-실행"}},[t._v("#")]),t._v(" 시스템 실행")]),t._v(" "),r("ol",[r("li",[r("p",[r("em",[t._v("QGroundControl")]),t._v("을 실행합니다. 먼저 높은 지연 시간 링크를 수동으로 연결한 다음, 일반 텔레메트리 링크를 연결합니다.")]),t._v(" "),r("p",[r("img",{attrs:{src:e(496),alt:"High Latency 링크를 연결합니다."}})])]),t._v(" "),r("li",[r("p",[t._v("접지 스테이션 컴퓨터의 터미널에서 "),r("em",[t._v("SatComInfrarastructure")]),t._v(" 저장소 위치로 변경합니다. 그런 다음 "),r("strong",[t._v("udp2rabbit.py")]),t._v(" 스크립트를 실행합니다. "),r("code",[t._v("./udp2rabbit.py")])]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("./udp2rabbit.py\n")])])])]),t._v(" "),r("li",[r("p",[t._v("기체의 전원을 켭니다.")])]),t._v(" "),r("li",[r("p",[t._v("QGC에서 첫 번째 "),r("code",[t._v("HIGH_LATENCY2")]),t._v(" 메시지가 수신될 때까지 기다립니다. 이 검사는 "),r("em",[t._v("MAVLink Inspector")]),t._v(" 위젯을 사용하거나 *LinkIndicator *를 사용하여 도구 모음에서 확인할 수 있습니다. 활성 기체에서 두 개 이상의 링크가 연결되어 있는 경우, 표시된 링크의 이름을 클릭하면 모든 링크가 표시됩니다.")]),t._v(" "),r("p",[r("img",{attrs:{src:e(497),alt:"링크 툴바"}})]),t._v(" "),r("p",[t._v("링크 표시기는 항상 우선 순위 링크의 이름을 표시합니다.")])]),t._v(" "),r("li",[r("p",[t._v("이제 위성 통신 시스템을 사용할 준비가 되었습니다. 우선 순위 링크(명령 전송 링크)는 다음 방법으로 결정됩니다.")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("사용자가 링크를 명령하지 않으면, 지연 시간이 큰 링크보다 일반적인 텔레메트리 링크가 선호됩니다.")])]),t._v(" "),r("li",[r("p",[t._v("기체가 시동을 켜고 텔레메트리 링크가 끊어지면(특정 시간 동안 MAVLink 메시지가 수신되지 않을 경우), 오토파일럿과 QGC는 일반 텔레메트리에서 긴 대기 시간 링크로 되돌아갑니다. 텔레메트리 링크가 복구되는 즉시 QGC와 자동 조종기가 다시 이 링크로 전환됩니다.")])]),t._v(" "),r("li",[r("p",[t._v("사용자는 도구 모음의 "),r("code",[t._v("LinkIndicator")]),t._v("에서 우선 순위 링크를 선택할 수 있습니다. 이 링크가 활성화되어 있거나 사용자가 다른 우선 순위 링크를 선택하면 이 링크는 우선 순위 링크로 유지됩니다.")]),t._v(" "),r("p",[r("img",{attrs:{src:e(498),alt:"우선 순위 링크 선택"}})])])])])]),t._v(" "),r("h2",{attrs:{id:"문제-해결"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#문제-해결"}},[t._v("#")]),t._v(" 문제 해결")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("비행기에서 위성 통신 메시지를 수신하지만 명령을 전송할 수 없습니다(차량이 반응하지 않음).")]),t._v(" "),r("ul",[r("li",[t._v("릴레이 서버의 설정을 확인하고 해당 설정이 올바른지 확인합니다(특히 IMEI).")])])]),t._v(" "),r("li",[r("p",[t._v("비행기의 위성 통신 메시지는 지상국에 도착하지 않습니다.")]),t._v(" "),r("ul",[r("li",[t._v("시스템 콘솔이 <>iridiumsbd"),t._v(" 드라이버가 시작된 경우 및 모듈이 위성 신호를 수신 여부를 확인합니다. "),r("code",[t._v("iridiumsbd status")]),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("iridiumsbd status\n")])])])]),t._v(" "),r("li",[t._v("위의 확인 단계를 사용하여 릴레이 서버, 전송 그룹 및"),r("code",[t._v("udp2rabbit.py")]),t._v(" 스크립트가 올바르게 설정되었는지 확인합니다.")]),t._v(" "),r("li",[t._v("링크가 연결되어 있고 설정이 정확한 지  확인하십시오.")])])]),t._v(" "),r("li",[r("p",[t._v("IridiumSBD 드라이버가 시작되지 않음:")]),t._v(" "),r("ul",[r("li",[t._v("기체를 재부팅합니다. 도움이된다면 드라이버를 시작하기 전에 "),r("code",[t._v("extras.txt")]),t._v("에서 절전 시간을 늘리십시오. 그래도 Pixhawk와 모듈이 동일한 접지 레벨을 유지하는지 확인할 수 있습니다. 모듈의 보레이트가 115200으로 설정되어 있는 지 확인하십시오.")])])]),t._v(" "),r("li",[r("p",[t._v("지상에서 첫 번째 메시지가 수신되지만, 기체가 비행하는 즉시 메시지를 전송할 수 없거나 대기 시간이 훨씬 더 길어집니다(분 단위).")]),t._v(" "),r("ul",[r("li",[t._v("비행 후 신호 품질을 확인합니다. 비행 중에 감소하는 경우 내부 안테나 보다 외부 안테나를 사용하는 것이 좋습니다. 이미 외부 안테나를 전자 장치 또는 신호를 방해 할 수있는 모든 것에서 최대한 멀리 이동하십시오. 또한 안테나가 손상되지 않았는 지 확인합니다.")])])])])])}),[],!1,null,null,null);a.default=s.exports},492:function(t,a,e){t.exports=e.p+"assets/img/architecture.ee66bf6f.jpg"},493:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABcMAAAB1CAMAAAC1ZQmyAAADKXpUWHRSYXcgcHJvZmlsZSB0eXBlIGV4aWYAAHjanVRbkiUpCP13FbMEQUBdDj6ImB3M8ufozdtdVV3RPTEYpiYijwOY9j9/R/rrUC8tidZm3SyDpEtnx6blF539wGTM9WI1y2+i3O/3Upol68P+dFD1kebP/PdK/kWRPNZpfD5487l9UcSvpRwD2JM8ivqzoQL2N5att5rl578/BuIJ0aqKtarJljHnUngXwSwvayUXKq041nq/iBAcw15Kxxf7o+VIw3qFR/nxqJzrXIBUp3Pw5t8AyoP8B/41dQ4A1tGVvoaS+XXw/v+RjPKZ/07Gm9J1r+C4fFBm32fmd4lJv8vMDesD0CLPjj/zYZfTR/ciVovYV0JcDAVqT4W9g6dHDmUqJwZFJHJGygeDu8V6hgHSidquzwjU9oC/kygHMcZZDxUymlSxCnkivcyG80ZOCyPuKFSZWZhps+DCBm//8IUes/Ua3rkl2N4QEigT2v9/pP8qGDEPRHQb2m9fwy8+aTnBEjA6C8TkpvWdk/Ijg7+S3pydgrHcXjd5JHrlo9zrHUL0iwp6rCI/B9iscOQirKTS4W420lQvwoXb26t6VdE3Cj/S6f3y3FgwgoLkP4SCKzBPp2tffiBz58Gbz53rKwEjKEaJadOlQ+ewQDOuyQG5znsW07LMYHsKNKwle/kYq9Hk7aeR8Uio1zSIu8+85SgGRtUKze1KZrJ38VlrDW6zr1m17R1bS4GWhoRVoGrSvIv21Mtoe9BaMX0Onr5hqhYLGrXN2G56DKDNYItnJ+U+Pdx76J689tptW0gaRaMWXT4NsdGwqRVgzNyX9Y4HQAyKO9AZWmWTx6S8bMz7ONkAeC7VLG1FZ9pyzq66qkeTPDRaVt+18ebclgFR5rpcV9EZFsOt02q1KR5BVGrVmsw3mmSjb2bvRmPl2TPc7bsp+17WbPj2MCcGQD2ktRa9Ncq+THmEykEuqW4BMks6MPOCGUvLGAFHf4pdKTVnB0R58ADWAHLHiCVjFLfUwxt1Z2mLkU8EhrzlUasBYKoCNGbNx4fcg7NFJpOgWSdTtFoQeKXVI6G8evoXsFq5Lz94rRwAAAMAUExURdXt9/Dw8B/GWz+Cy/7+/svLy/v7+9n11////9zc3OIANLq6ugC8TDR1vlZWVv//+P//7iB/QHBpmP/fpIXF+fL//7V6Wtn///v//3Bwcf/Pk8n1197f3iSARLvAxtTT1D+BQN2hb/794lpaX9///2RwoJPp2NrmlYNeiZlpcJvZ/zOprcv+/0d/P3B8kB+BaM+UaOIMQBjDWvX19ef//+Pk5PPz8+jo6CpvkEOk58P3/k1vj9bj7HNfhVyBvdnhjP/+znKFyqSmSP/57sO/X9TdyP//2ev2/TKAQ9jKwGVkZPj6+MSFXPb8/+Hr9c3T4pe73yeho/nx5ylvmThvkOnv6sG8uv/lsSCAW9Xt4WeTzr/g8Mfm+arl/efW1Lrv+mDCsyt2qfO/gdrX27fp/2yZ1Mq+u2J4s//3wzKZ2dDGuNn1yqzetPfOksry/2Jvjf/vulXHy4K98EeCxsLN1dryuTWQZyh+ul+98G6g3LHs1FbHW8LnxIvX+al1ZoplX2BXVleEP7eEa26Dnu7h2FW27iSSgC6HWV1ids/Ocj+onNx2ld87ZNqFoIDdpeP4v0KL3obd1v7Zm4hndbn54JF7a6aXy3OTRNn10oF/foSw2nhpYbLd9iXVvvbgv/bl3//y1ZqvYnHL8+TFl4uZQa7Dc2DS19nB0tnup8+fd8748Y3H8vHFjpjPW21fb5hoYNjbfluSTZzM7ny35sjUjeHUy77R5h/GcNe1iVpdh1e1pUyMRer68CWYlaa8btv0/v/vx5bl9V9+lI5tkZnexfjH0UHg2m+ItajS0ua0eWqIPzmZfm5yp6Gpntns2DeLwHXu6oy9iCXMnp7X83Su5ErBxcK3pcjjsVq13tXRu95KcDh5wr2qzu7VpbLYZmbIW0idz2LQ0R/Ij/PumLidieb52JiYoHbUx5KSzI+mVzbayFro5Pb4vrWmnUV/m3/OXKGXlH2SxIaOmYzKtcz1wqbQqWCQzvd3WS3GW4Cgq7fG7me6fdrEyuuPzO2/+MTE3zrV1cQAABAQSURBVHja7J0JVFNXGscjRPMEbRKYKDZEQqjoCLIpxyACKqGgtComDogg4lIXVEoVRUa0QlHBpaIo1WpdBhe0buBStWpd6jqKS926aqdqbav1WJ0Zp7Pd+/ISiEbj8kJC/P/OgZt337vvPDj3++Xj474XAQMAAKC+IsCvAAAA4HAAAABwOAAAADgcAADgcAAAAHA4AAAAOBwAAAAcDgAAcDgAAAA7cXj7UM/GANgOz9D29SRqECvAfmLF6PD2np0FANiSzp71Q+LtPU+JALAlp2pixejwUCgc2FziofXC4aFQOLC5xEMfcXhjGATYHM964fDGMAiwOZ5wOLBDGsPhADwVjeFwAIfD4QAOBwAOBwAOBwAOBwAOB3A4HA7gcADgcDgcwOEAwOEAwOHAgVgzc1awS/CsmWvgcADgcFDfmO3CETwbDgcADgf1iy9davgSDgfA5g6PCR8BMYFnzsJZZjuGw6OUUqli/EC5Ybt1Oz9RtyRfS0G4Wam4yr3UKFbT5oNugb6QE4DDgf3Wwk0U7hK8xkEcPu3MmS1SP3kth1+8L7cUhN0Cd/vB4cB6Dm94QJe+UnBBmyO4oCsUuN5Wk62Y8Ct3ddVHC7RX0voFTHigIzupw/tdv629MgSGApaYaepwl5kO4vAEkSi7PGm1aOuWuPE3uDz8UDkR8tqpe+T6zqh2xWV7DF10VPZxPw1V9toyxYmbCjpWUVwW6EuPS8hYtVtxwldEG5Lfcw13dsMWgMOf7PCY8AlHr6fv73c3/VBmdVpMePXRgPT9MeHpVdfV6SV3tSv7BWgvjQtIz6MOP6m91DI8DIYClpj1kMNnOY7DRUXS862nTht1M9CXq6VoFFdFRYqazqRdh4oUWaKiuCx9KSXuapTyKsm9FbvuT5Wuzi5LGrhKaTgurnhU2Z7SKGXxqBXTS7iGOxG3BYnB4RYcfkGdI7gcXkhcrk7fL+i8vb/gjpYKO+WyboRgpLqQ5OGp9CDSRV6mCe6QLwCeTDAtoPyXnXD/YIspfDo8enCsuW7xgJ4edeHwzXF+GqLoKGUW53DS0OKIsTNBTnLwBDlXLyG7Dl08niDPPj4tV6SRro5qlyDKKKcOT5B/0C2pRKRJKtmsPPFbLi2csw13Im4LwOEWHH5LTSHJ9R31CIHg1F2dWs06XHBZFyYYqStkxX1BXUi6TmXSQ4npAXgyrLf/8zmFdbgLnw5XveU6zoyuxd1dW3Z+0/oO10jPa6RShVTqxzk8o3zaKCLpWp2suMsS2DrI2uNSQqDv2uN7Smk9fLPSj5bI2SQ+o1yqUEgVqzP2KqXS4lyu4U7EbUFicLjFPPxSf4JgZPht7UrBLW0Ol4fXODw9lYiey8PP0UMBeIo83OSfmjw73NWMronDSXevWOvXw0s00oGTJk2SG9alaJJ+j8sS1eqkyfrvSn0ppShu1/37e+OyHs3D/Yjqk27QMUT6F1fEneca7kTGTgCHW6iHV1eevJ1H/JwbMCH1lvZSywPaHBOHa68cPUBL5Gw9/GjBlRQoCtiyHi4eQCXu6vqQrsXLRrLd43grqTx2XQqtWO8dX2JweOt2ikDyvaaTmL5MoS+lZLAlFZKEy7spdq3ara+H71XqHS6i9fCbJ3KLpg8ctSoui2u4E3FbkBgcbnldijr9UspJkoSP1IXFHFBXE2MfMqmlPNClG9al6LTV52AoYON1KeL3zOlaKOzT/U+uZnN0/taHS9mlIlu3SKcPNObhGeXSBJNOtuLClVLY1SnU5HRdygrFVdHW3YpiLg/Xrz25IcpeoZRO3yXnGu5Ehi0Ah7/Y+nC2Hg7AM7HGtJgSPJjvdSlmdS0UCqO36bt5Kam8yH2aGuN9PQDA4aDeUQf3aZrVtZDk6G/xVVJ5fodnn5k6rRT6AXA4qLfUxfNSzJZUiMWXdXflpaTy/A4vUozHwm5gJw4H4Pky8eA6eG6h0KBrgWl/Hy5HT8EzrwAcDsDz1cS554cPFljP4UZdPyxroYRdvLLdAw4HcDgAfMPrvfbR3R91OK20bIPDARwOgJ07PJpNuFPM18rhcACHA2DHDjcUvgXmxO7q2h/1cACHA2CnDn/cApQ+PC0Sh8MBHA6AtRxeeyG40LLY4XAAhwNgLw5/3A2Z0fzd4QOHAzgcAKs4/HEPRuH1Tns4HMDhAFjB4eafeMXw/cQrOBzA4QBYweH654c/kmuzzw/n8cmzcDiAwwGwjsPN5dqS7vx+AgQcDuzU4QDYnhe6q8fLbK4t3sbvJ7EhVoBdxUqNwxkAbP6J8bhKAJ5tFsLhAHaEwwEcDgAcDgAcDjAvcZUAwOEADofDARwOAOwIhwM4HAA4HAA4HMDhuEoA4HAAO8LhAA4HAA4HwF4d3tGrIXAEvDrC4Va+SsQKYsUOHd5xcN8GwBHoO7gjHG7Vq0SsIFbs0eFeDeIbAUcgvoEXHG7Vq0SsIFbs0eEN4xsJgSPQKL6hzeZZ77FNn8DY3o7hcMQKYuVFmBPSxCIhc57D4Y2E+LeBQyBsZDOH9/7K+Yl81dsxHI5YQay8gMKbhDhZpskcOBzzsu4Z62yBsXA4eNljJeRpFO4UEgKHY17WPU0tObwpHA5e9lhp4vRUNIHDMS/hcDgcwOEA8xIOR6wgVuBw8FI5fGX8j/oXc9MW0iasb1c4HCBWHnb4z6pf9S++L91Am6Xv/5k3h4v/8qHPkX0M880U2ny2oEfAErbvQIq5qxL/u8PjLlj8xh8wVV42h8/tX7nm5XC4u1tz+itX/c/DNAaEx6qYLgfvTfm7BwmBoJ2djg0je1XNqozhNb9Hj4IU5tV3XyHs9GfbGYtl3pEysjcxYl0z2v/KFxLa+gQYg25QpIwe6lPA9rB7ySgSpgve9SnozzDe9PDMSskb7PCdnRAN9u3w73N9N1vN4YkRSyRBQz2Gzz8nqaiS5Fd5jHZr7h6xROw9zJytuxz0h8PhcKPDwwbM7UekXbivQa91C51Xxvb8l2M7nHE/IjONAUl+KjOv6y9TMseQ6Ni0s5Nq8jvEwK1eqwkvRlIxrMOrXA/bfjRlfWIE1a53sqQZGzVCto2uMI6jDicb0RVsGLJ7ySjm4xm9Y/t8snEJGUnfHyKGMMzrf2xLxiMa7NvhP7U+e49I+6d11yaVbtjx86fXcnl0OJksTKJb80HJJI9g3m7jz6gmt12+3ThnCR8taJF5jjkWKZPkL873yRyyPL9Fi8Uy94D8yG8CfljUopJRVfToceQ1OLyOWEQzr0X24fC8r533LyQ5+NfOOfELwz790Tmvj8M6/IcPZ1R+tsmnYLJP5qT5JxeRGKD6HH6wOeP9zvA2C9YzzOiANp2YeW5jllOtMpyziYOjezImDmeCJkqaEdW/vimPc7je0oze7LUcTiIyLTHCn90r9E5m3yBIuh8pow4n49tyDgf27fAdp7/dcXoDycG/dTqs2rD02q87Tv/Cr8PJRPF+sGDjkX3z/tqB5NN0nqiCkmX6A8i88XB3G6OaXDl6WAcieTHZQyap+8ZKxn3jOYZ0ftxqHzkIDq8jvKjDvezC4XPXdXUuHMAWUOauW5izbKwD11I2rmcGkXw6UkZioMumieQv11TxtlhmdLIHScWHt9l6RCYO+o04XBw0tMIQOwyzfFPB9liju415eB4bd/Pcmps4nMu6azt8eJs0VS+Z/ijvoW/rHU/GcXn4GDi8Xjj87L3vnA63dlr6/ndOZ0s3HP7bP3mvpVTMGBKUmSIJSh5N51BQFS23tRrD/fCJbv5khrVl3FvMT6WJOjtnvCe6R/izuTr9epMM+gIOr8NEfJF91FJyPP7f3vmFtHmFcZhtWTi7MSGrM6GBEGOZFilhamSBjoDQQuZACqPglvWikXqTRIRd5KK1ZBvkcphamBYX6tVmaqFjq4XCHMK6goWxFnqzP7BKKd3FEEavd875EvNFHS5qzJfkeSBIRMNHfN+HN79zPo/dbh/a0A4PX73+aVPn4breiw6XPVC0r39SjeLj3UdXz62s/iMdLlam7iTLL5Ffn1MBtpGHv5BfA4HL2ZF2MZ6LO4JpI+luy8acbwQkn1Tk4duylIuq6XTP9vrbAoG21DWBwxvC4T++K4n8ocT955Ubfz058DVNz4PusCwnMb325uYcPrS8Vozmpi9HJYuyjvTE3huZUs9HS/6Wj/y6xxPF4Yc5iPus4fDYrzpPeftueQ4/08R5uMnh8dLn1UsxNYqPd/cGJwujEeVwERyrfJUzX91JmufwxLHvVSDyKCKHIvMcbiQlZYdvXdMcaZ84ea48hzv8etzH4dZ3+O0fftd5ip7Dj+o5/PkBZim6Pte67o+6pcM/NvLw+e+EiOTixUG9GIwnTswsGnN4zFTT6qFiF+bwwxzEv6hfXZodbgzdn335ebgV8vCOnebwCVeXCB4R0uGJe5mL2uE2f7qsjnnl4EhPzOxwp961kriwIGfsiiwl4UpumcOLGD9lk72pftPhf6Hz8JXcQxzeEA5X7pbD+JNfapOHT6zGOzOPittTnJlZd+FYRyL1oWPBVVx977y0KPJPk/me2LQrOd4ddgTH2p3r10wOH/5Gfs5L4/DDG8R91nD49Y+MUPyZ2pcSvvrKkdMvNfW+FOXwC/2yB1QePpGLO749XRgVnXIolw4/dTPVYczhJoeL+6kPhGPZ1VuRh08bOfbMpKh0uHM4vYPDN/NwSWFp5L2h5aW43pci9D5GHG59h6vw5GU5gf/9vOP9x1du3P75YPelOJbnAhuyFIxt4sX94fJ7qVuln5ifiWZH7P4xtyOY7sxkj+czS9GNfpPDf5vzbCws3cLhrVCXFVlKC92nWaz1lanU15nsTz0PctFZ96meh3IGP7vWpRwuZIdsm8OFU7ZS4EQpDw8c12J2Do+5perVrm4jD29756629Osn49sdXtqXotncHy4dbovcXMThjeDwmt+nuf2p+oe7u70nW5/b2KKKw1viXnubCkfiOzXBf/TGgf7NaTMczv3D1CUO34/DxabDgV6xtsMLHs0sBUBd4vAqHX42p5vnXn+VV0DT4XDmcOryEOAMCKBXdoMzIMC6DucsNqBXduN/ncX2FmexUZf1kXhrnIlMr9Ar+5E4ZyKDZR2+XzvicKBXdqlCHE5d4nAcDk3ocF+IumySugz5cHhNr5JeoVes6PDB8yEbNAOh84M4vKZXSa/QK1Z0uBj0vQrNgK9xyrJBHU6v0CuWdDgADm/gq4QW6RUcDtgRhwMOB8DhADgcqEuuEgCHAw7H4YDDAbAjDgccDoDDAWrqcC+3mkG9sXlxOMAeHT4Q4l2BOhMawOEAe3R4nzdk532BOmIPeftwOMAeHS76BryvAdQP70CfwOEAe3U4AOBwwOEATQ7r/1B3yuv/OBygSlj/h7pTXv/H4QBVwvo/1Bnz+j8OB6ha4qz/g2XW/3E4AEDjgsMBAHA4AADgcAAAwOEAADgcAABwOAAA4HAAAMDhAAA4HAAAcDgAAOBwAIBW41/+s7NhecBTUAAAAABJRU5ErkJggg=="},494:function(t,a,e){t.exports=e.p+"assets/img/linksettings.af463983.png"},495:function(t,a,e){t.exports=e.p+"assets/img/verification.e9c35529.png"},496:function(t,a,e){t.exports=e.p+"assets/img/linkconnect.1c301fcb.png"},497:function(t,a,e){t.exports=e.p+"assets/img/linkindicator.2c5975a6.jpg"},498:function(t,a,e){t.exports=e.p+"assets/img/linkselection.724f5fd9.png"}}]);