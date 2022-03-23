(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{2187:function(t,r,_){"use strict";_.r(r);var o=_(19),v=Object(o.a)({},(function(){var t=this,r=t.$createElement,o=t._self._c||r;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"이리듐-rockblock-위성통신"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#이리듐-rockblock-위성통신"}},[t._v("#")]),t._v(" 이리듐(RockBlock) 위성통신")]),t._v(" "),o("p",[t._v("위성통신 시스템은 기체와 지상국간의 광역 통신을 제공합니다.")]),t._v(" "),o("p",[t._v("이리듐 SBD 위성 통신 시스템의 서비스 공급자 RockBlock을 이용한 시스템 설정 방법을 설명합니다. 신호 품질이 우수한 경우에도 10~15초 정도의 시간 지연이 있을 수 있습니다.")]),t._v(" "),o("h2",{attrs:{id:"개요"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#개요"}},[t._v("#")]),t._v(" 개요")]),t._v(" "),o("p",[t._v("위성 통신에는 다음의 요소들이 필요합니다.")]),t._v(" "),o("ul",[o("li",[t._v("Pixhawk에 연결된 "),o("a",{attrs:{href:"https://www.rock7.com/products/rockblock-9603-compact-plug-play-satellite-transmitter",target:"_blank",rel:"noopener noreferrer"}},[t._v("RockBlock 9603"),o("OutboundLink")],1),t._v(" 모듈이 PX4에 플래시되었습니다.")]),t._v(" "),o("li",[t._v("Ubuntu Linux를 실행하는 메시지 릴레이 서버")]),t._v(" "),o("li",[o("em",[t._v("QGroundControl")]),t._v("을 실행하는 지상국 컴퓨터")])]),t._v(" "),o("p",[t._v("전체 시스템 아키텍처는 다음과 같습니다.")]),t._v(" "),o("p",[o("img",{attrs:{src:_(483),alt:"아키텍쳐"}})]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("설정은 Ubuntu 14.04 및 16.04에서 실행되는 "),o("em",[t._v("QGoundControl")]),t._v("의 현재 릴리스로 테스트되었습니다.")]),t._v(" "),o("ul",[o("li",[t._v("다른 지상국 및 운영체제를 사용할 수 있지만, 아직 테스트되지 않았습니다.")]),t._v(" "),o("li",[t._v("The "),o("a",{attrs:{href:"https://www.rock7.com/products/rockblock-iridium-9602-satellite-modem",target:"_blank",rel:"noopener noreferrer"}},[t._v("RockBlock MK2"),o("OutboundLink")],1),t._v(" module can also be used. RockBlock 9603 모듈은 크기가 작고 가볍우면서도 동일한 기능을 제공하기 때문에 권장됩니다.")])])]),t._v(" "),o("h2",{attrs:{id:"비용"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#비용"}},[t._v("#")]),t._v(" 비용")]),t._v(" "),o("p",[t._v("영국 링크 실행 비용은 회선 대여 및 메시지 당 비용으로 구성됩니다.")]),t._v(" "),o("ul",[o("li",[t._v("각 모듈을 활성화해야 하며, 가격은 월 10파운드입니다")]),t._v(" "),o("li",[t._v("시스템을 통해 전송되는 각 메시지는 50바이트당 하나의 "),o("em",[t._v("크레딧")]),t._v("입니다. 번들 크기에 따라 RockBlock에서 신용당 0.04파운드 0.11파운드에 신용대출을 구입할 수 있습니다.")])]),t._v(" "),o("p",[t._v("일반적으로 모듈에 대한 자세한 설명은 "),o("a",{attrs:{href:"https://docs.rockblock.rock7.com/docs",target:"_blank",rel:"noopener noreferrer"}},[t._v("RockBlock 설명서"),o("OutboundLink")],1),t._v(" 및 "),o("em",[t._v("RockBlock")]),t._v("을 참고하십시오.")]),t._v(" "),o("h2",{attrs:{id:"기체-설정"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#기체-설정"}},[t._v("#")]),t._v(" 기체 설정")]),t._v(" "),o("h3",{attrs:{id:"배선"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#배선"}},[t._v("#")]),t._v(" 배선")]),t._v(" "),o("p",[t._v("RockBlock 모듈을 Pixhawk의 직렬 포트에 연결합니다. 모듈의 전원 요구 사항으로 인하여 5V에서 최대 0.5A가 필요하므로 고출력 직렬 포트를 통해서만 전원을 공급할 수 있습니다. 사용 가능한 별도의 전원을 사용시에는 Pixhawk와 동일한 접지이어야 합니다. "),o("a",{attrs:{href:"https://docs.rockblock.rock7.com/docs/connectors",target:"_blank",rel:"noopener noreferrer"}},[t._v("커넥터"),o("OutboundLink")],1),t._v("와 "),o("a",{attrs:{href:"https://docs.rockblock.rock7.com/docs/power-supply",target:"_blank",rel:"noopener noreferrer"}},[t._v("전원 요구 사항"),o("OutboundLink")],1),t._v("의 세부 정보는 RockBlock 설명서에서 확인할 수 있습니다.")]),t._v(" "),o("h3",{attrs:{id:"모듈"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#모듈"}},[t._v("#")]),t._v(" 모듈")]),t._v(" "),o("p",[t._v("모듈은 내부 안테나 또는 SMA 커넥터에 연결된 외부 안테나를 사용할 수 있습니다. "),o("a",{attrs:{href:"https://docs.rockblock.rock7.com/docs/switching-rockblock-9603-antenna-mode",target:"_blank",rel:"noopener noreferrer"}},[t._v("두 안테나의 여러 상태를 전환"),o("OutboundLink")],1),t._v("하려면 작은 RF 연결 케이블의 위치를 변경하여야 합니다. 외부 안테나를 사용하는 경우 모듈 손상을 방지하기 위해 안테나의 전원을 켜기 전에 항상 안테나가 모듈에 연결되어 있는 지 확인하십시오.")]),t._v(" "),o("p",[t._v("모듈의 기본 보드 속도는 19200입니다. 그러나 PX4 "),o("em",[t._v("iridiumsbd")]),t._v(" 드라이버는 baudrate가 115200이어야 하므로, "),o("a",{attrs:{href:"https://www.rock7.com/downloads/IRDM_ISU_ATCommandReferenceMAN0009_Rev2.0_ATCOMM_Oct2012.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("AT 명령어"),o("OutboundLink")],1),t._v("를 사용하여 변경하여야 합니다.")]),t._v(" "),o("ol",[o("li",[t._v("19200/8-N-1 설정을 사용하여 모듈에 연결하고 다음 명령을 사용하여 통신이 작동하는지 점검하십시오. 응답은 다음과 같아야 합니다.")]),t._v(" "),o("li",[t._v("baudrate 속도를 변경합니다. "),o("code",[t._v("AT+IPR=9")])]),t._v(" "),o("li",[t._v("이제 115200/8-N-1 설정을 사용하여 모델에 다시 연결하고 다음을 사용하여 설정을 저장합니다.\nAT&W0")])]),t._v(" "),o("p",[t._v("이제 이 모듈을 PX4에서 사용할 수 있습니다.")]),t._v(" "),o("h3",{attrs:{id:"소프트웨어"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#소프트웨어"}},[t._v("#")]),t._v(" 소프트웨어")]),t._v(" "),o("p",[o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#ISBD_CONFIG"}},[t._v("ISBD_CONFIG")]),t._v("를 사용하여 RockBlock 모듈이 실행될 "),o("RouterLink",{attrs:{to:"/ko/peripherals/serial_configuration.html"}},[t._v("직렬 포트를 구성")]),t._v("합니다. 포트에 대한 전송 속도는 드라이버에 의해 구성되므로 설정할 필요가 없습니다.")],1),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[o("em",[t._v("QGroundControl")]),t._v("에서 설정 매개변수를 사용할 수 없는 경우에는 "),o("RouterLink",{attrs:{to:"/ko/peripherals/serial_configuration.html#parameter_not_in_firmware"}},[t._v("펌웨어에 드라이버를 추가")]),t._v("하여야 합니다.")],1),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[t._v("drivers/telemetry/iridiumsbd\n")])])])]),t._v(" "),o("h2",{attrs:{id:"rockblock-설정"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#rockblock-설정"}},[t._v("#")]),t._v(" RockBlock 설정")]),t._v(" "),o("p",[t._v("RockBlock의 첫 번째 모듈을 구입시의 첫 번째 단계는 사용자 계정을 생성하는 것입니다.")]),t._v(" "),o("p",[o("a",{attrs:{href:"https://rockblock.rock7.com/Operations",target:"_blank",rel:"noopener noreferrer"}},[t._v("계정"),o("OutboundLink")],1),t._v("에 로그인하여 "),o("code",[t._v("My RockBLOCKs")]),t._v("에서 RockBlock 모듈을 등록합니다. 모듈에 대한 라인 렌탈을 활성화하고 계정에서 예상 비행 시간에 충분한 크레딧을 사용할 수 있는 지 확인합니다. 기본 설정을 사용할 경우 분당 1개의 메시지가 차량에서 지상국으로 전송됩니다.")]),t._v(" "),o("p",[t._v("메시지 릴레이 서버에 대한 배달 그룹을 설정하고 모듈을 해당 배달 그룹에 추가합니다.")]),t._v(" "),o("p",[o("img",{attrs:{src:_(484),alt:"배달 그룹"}})]),t._v(" "),o("h2",{attrs:{id:"릴레이-서버-설정"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#릴레이-서버-설정"}},[t._v("#")]),t._v(" 릴레이 서버 설정")]),t._v(" "),o("p",[t._v("릴레이 서버는 Ubuntu 16.04 또는 14.04 버전에서 실행하여야 합니다.")]),t._v(" "),o("ol",[o("li",[t._v("메시지 릴레이로 작동하는 서버에는 고정 IP 주소와 열린 TCP 포트 2개가 있어야 합니다.")])]),t._v(" "),o("ul",[o("li",[o("em",[t._v("RabbitMQ")]),t._v(" 메시지 브로커에 대한 "),o("code",[t._v("5672")]),t._v("("),o("em",[t._v("Rabbitmq")]),t._v(" 설정에서 변경할 수 있음)")]),t._v(" "),o("li",[t._v("HTTP POST 인터페이스의 경우 "),o("code",[t._v("45679")]),t._v("("),o("strong",[t._v("relay.cfg")]),t._v(" 파일에서 변경할 수 있음)")])]),t._v(" "),o("ol",{attrs:{start:"2"}},[o("li",[o("p",[t._v("필요한 Python 모듈을 설치합니다.")]),t._v(" "),o("p",[t._v("bash\nsudo pip install pika tornado future")])]),t._v(" "),o("li",[o("p",[o("code",[t._v("rabbitmq")]),t._v(" 메시지 브로커를 설치합니다. "),o("code",[t._v("sudo apt install rabbitmq-server")])])]),t._v(" "),o("li",[o("p",[t._v('브로커 자격 증명을 구성합니다(암호를 PWD로 변경).\nbash\nsudo rabbitmqctl add_user iridiumsbd PWD\nsudo rabbitmqctl set_permissions iridiumsbd ".'),o("em",[t._v('" ".')]),t._v('" ".*"')])]),t._v(" "),o("li",[o("p",[o("a",{attrs:{href:"https://github.com/acfloria/SatComInfrastructure.git",target:"_blank",rel:"noopener noreferrer"}},[t._v("SatComInfrarastructure"),o("OutboundLink")],1),t._v(" 저장소를 복제합니다. "),o("code",[t._v("git clone https://github.com/acfloria/SatComInfrastructure.git")])])]),t._v(" "),o("li",[o("p",[o("em",[t._v("SatComInfrarastructure")]),t._v("로 이동하여 브로커 대기열을 설정합니다. "),o("code",[t._v("./setup_rabbit.py localhost iridiumsbd PWD")])])]),t._v(" "),o("li",[o("p",[t._v("설정을 확인합니다. "),o("code",[t._v("sudo rabbitmqctl list_queues")])])])]),t._v(" "),o("p",[t._v("이렇게 하면 4개의 대기열 목록이 표시됩니다: "),o("code",[t._v("MO")]),t._v(", "),o("code",[t._v("MO_LOG")]),t._v(", "),o("code",[t._v("MT")]),t._v(", "),o("code",[t._v("MT")])]),t._v(" "),o("ol",{attrs:{start:"8"}},[o("li",[o("p",[t._v("설정을 반영하도록 "),o("code",[t._v("relay.cfg")]),t._v(" 설정 파일을 편집합니다.")])]),t._v(" "),o("li",[o("p",[t._v("분리 모드에서 릴레이 스크립트를 실행합니다. "),o("code",[t._v("screen -dm bash -c 'cd SatcomInfrastructure/; ./relay.py")])])])]),t._v(" "),o("p",[t._v("기타 지침은 다음과 같습니다.")]),t._v(" "),o("ul",[o("li",[t._v("화면에서 분리: "),o("code",[t._v("ctrl+a d")])]),t._v(" "),o("li",[t._v("스크립트 실행 중지: "),o("code",[t._v("ctrl+a :quit")])]),t._v(" "),o("li",[t._v("화면에 다시 부착: "),o("code",[t._v("screen -dr")])])]),t._v(" "),o("h2",{attrs:{id:"지상국-컴퓨터"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#지상국-컴퓨터"}},[t._v("#")]),t._v(" 지상국 컴퓨터")]),t._v(" "),o("p",[t._v("지상국을 설정 방법:")]),t._v(" "),o("ol",[o("li",[t._v("필요한 Python 모듈을 설치합니다. "),o("code",[t._v("sudo pip install pika tornado future")])]),t._v(" "),o("li",[t._v("SatComInfrarastructure 저장소 복제: "),o("code",[t._v("git clone https://github.com/acfloria/SatComInfrastructure.git")])]),t._v(" "),o("li",[t._v("설정을 반영하도록 "),o("strong",[t._v("udp2rabbit.cfg")]),t._v(" 설정 파일을 편집합니다.")]),t._v(" "),o("li",[o("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/getting_started/download_and_install.html",target:"_blank",rel:"noopener noreferrer"}},[o("em",[t._v("QGroundControl")]),t._v(" 설치"),o("OutboundLink")],1),t._v(" (데일리 빌드).")]),t._v(" "),o("li",[t._v("다음 매개 변수를 사용하여 QGC에서 UDP 연결을 추가합니다.")])]),t._v(" "),o("ul",[o("li",[o("p",[t._v("접속 포트: 10000")])]),t._v(" "),o("li",[o("p",[t._v("대상 호스트: 127.0.0.1:10001")])]),t._v(" "),o("li",[o("p",[t._v("높은 지연 시간: 확인됨")]),t._v(" "),o("p",[o("img",{attrs:{src:_(485),alt:"높은 지연 시간 링크 설정"}})])])]),t._v(" "),o("h3",{attrs:{id:"검증"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#검증"}},[t._v("#")]),t._v(" 검증")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("접지 스테이션 컴퓨터의 터미널에서 "),o("em",[t._v("SatComInfrarastructure")]),t._v(" 저장소 위치로 변경합니다. 그런 다음 "),o("strong",[t._v("udp2rabbit.py")]),t._v(" 스크립트를 실행합니다. "),o("code",[t._v("./udp2rabbit.py")])])]),t._v(" "),o("li",[o("p",[o("a",{attrs:{href:"https://rockblock.rock7.com/Operations",target:"_blank",rel:"noopener noreferrer"}},[t._v(" RockBlock 계정"),o("OutboundLink")],1),t._v("에서 테스트 메시지를 "),o("code",[t._v("테스트 전송 그룹")]),t._v(" 탭에 생성된 전송 그룹으로 보냅니다.")])])]),t._v(" "),o("p",[o("code",[t._v("udp2rabbit.py")]),t._v(" 스크립트가 몇 초 내에 실행되고 있는 터미널에서 메시지에 대한 확인할 수 있는 경우 RockBlock 전달 그룹, 릴레이 서버 및 udp2rabbit 스크립트가 올바르게 설정된 것입니다.")]),t._v(" "),o("p",[o("img",{attrs:{src:_(486),alt:"udp2rabbit 메시지 확인"}})]),t._v(" "),o("h2",{attrs:{id:"시스템-실행"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#시스템-실행"}},[t._v("#")]),t._v(" 시스템 실행")]),t._v(" "),o("ol",[o("li",[o("em",[t._v("QGroundControl")]),t._v("을 실행합니다. 먼저 높은 지연 시간 링크를 수동으로 연결한 다음, 일반 텔레메트리 링크를 연결합니다.")])]),t._v(" "),o("p",[o("img",{attrs:{src:_(487),alt:"High Latency 링크를 연결합니다."}})]),t._v(" "),o("ol",{attrs:{start:"2"}},[o("li",[o("p",[t._v("지상국 컴퓨터의 터미널에서 "),o("em",[t._v("SatComInfrarastructure")]),t._v(" 저장소 위치로 변경합니다. 그런 다음 "),o("strong",[t._v("udp2rabbit.py")]),t._v(" 스크립트를 실행합니다. "),o("code",[t._v("./udp2rabbit.py")])])]),t._v(" "),o("li",[o("p",[t._v("기체의 전원을 켭니다.")])]),t._v(" "),o("li",[o("p",[t._v("QGC에서 첫 번째 "),o("code",[t._v("HIGH_LATENCY2")]),t._v(" 메시지가 수신될 때까지 기다립니다. 이 검사는 "),o("em",[t._v("MAVLink Inspector")]),t._v(" 위젯을 사용하거나 *LinkIndicator *를 사용하여 도구 모음에서 확인할 수 있습니다. 활성 기체에서 두 개 이상의 링크가 연결되어 있는 경우, 표시된 링크의 이름을 클릭하면 모든 링크가 표시됩니다.")])])]),t._v(" "),o("p",[o("img",{attrs:{src:_(488),alt:"링크 툴바"}})]),t._v(" "),o("p",[t._v("링크 표시기는 항상 우선 순위 링크의 이름을 표시합니다.")]),t._v(" "),o("ol",{attrs:{start:"5"}},[o("li",[t._v("이제 위성 통신 시스템을 사용할 준비가 되었습니다. 우선 순위 링크(명령 전송 링크)는 다음 방법으로 결정됩니다.")])]),t._v(" "),o("ul",[o("li",[o("p",[t._v("사용자가 링크를 명령하지 않으면, 지연 시간이 큰 링크보다 일반적인 텔레메트리 링크가 선호됩니다.")])]),t._v(" "),o("li",[o("p",[t._v("기체가 시동을 켜고 텔레메트리 링크가 끊어지면(특정 시간 동안 MAVLink 메시지가 수신되지 않을 경우), 오토파일럿과 QGC는 일반 텔레메트리에서 긴 대기 시간 링크로 되돌아갑니다. 텔레메트리 링크가 복구되는 즉시 QGC와 자동 조종기가 다시 이 링크로 전환됩니다.")])]),t._v(" "),o("li",[o("p",[t._v("사용자는 도구 모음의 "),o("code",[t._v("LinkIndicator")]),t._v("에서 우선 순위 링크를 선택할 수 있습니다. 이 링크가 활성화되어 있거나 사용자가 다른 우선 순위 링크를 선택하면 이 링크는 우선 순위 링크로 유지됩니다.")]),t._v(" "),o("p",[o("img",{attrs:{src:_(489),alt:"우선 순위 링크 선택"}})])])]),t._v(" "),o("h2",{attrs:{id:"문제-해결"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#문제-해결"}},[t._v("#")]),t._v(" 문제 해결")]),t._v(" "),o("ul",[o("li",[o("p",[t._v("비행기에서 위성 통신 메시지를 수신하지만 명령을 전송할 수 없습니다(차량이 반응하지 않음).")]),t._v(" "),o("ul",[o("li",[t._v("릴레이 서버의 설정을 확인하고 해당 설정이 올바른지 확인합니다(특히 IMEI).")])])]),t._v(" "),o("li",[o("p",[t._v("비행기의 위성 통신 메시지는 지상국에 도착하지 않습니다.")]),t._v(" "),o("ul",[o("li",[t._v("시스템 콘솔이 <>iridiumsbd"),t._v(" 드라이버가 시작된 경우 및 모듈이 위성 신호를 수신 여부를 확인합니다. "),o("code",[t._v("iridiumsbd status")])]),t._v(" "),o("li",[t._v("위의 확인 단계를 사용하여 릴레이 서버, 전송 그룹 및"),o("code",[t._v("udp2rabbit.py")]),t._v(" 스크립트가 올바르게 설정되었는지 확인합니다.")]),t._v(" "),o("li",[t._v("링크가 연결되어 있고 설정이 정확한 지 확인하십시오.")])])]),t._v(" "),o("li",[o("p",[t._v("IridiumSBD 드라이버가 시작되지 않음:")]),t._v(" "),o("ul",[o("li",[t._v("기체를 재부팅합니다. 도움이된다면 드라이버를 시작하기 전에 "),o("code",[t._v("extras.txt")]),t._v("에서 절전 시간을 늘리십시오. 그래도 Pixhawk와 모듈이 동일한 접지 레벨을 유지하는지 확인할 수 있습니다. 모듈의 보레이트가 115200으로 설정되어 있는 지 확인하십시오.")])])]),t._v(" "),o("li",[o("p",[t._v("지상에서 첫 번째 메시지가 수신되지만, 기체가 비행하는 즉시 메시지를 전송할 수 없거나 대기 시간이 훨씬 더 길어집니다(분 단위).")]),t._v(" "),o("ul",[o("li",[t._v("비행 후 신호 품질을 확인합니다. 비행 중에 감소하는 경우 내부 안테나 보다 외부 안테나를 사용하는 것이 좋습니다. 이미 외부 안테나를 전자 장치 또는 신호를 방해 할 수있는 모든 것에서 최대한 멀리 이동하십시오. 또한 안테나가 손상되지 않았는 지 확인합니다.")])])])])])}),[],!1,null,null,null);r.default=v.exports},483:function(t,r,_){t.exports=_.p+"assets/img/architecture.b6a18ffd.jpg"},484:function(t,r,_){t.exports=_.p+"assets/img/deliverygroup.dbcd30c3.png"},485:function(t,r,_){t.exports=_.p+"assets/img/linksettings.a9148990.png"},486:function(t,r,_){t.exports=_.p+"assets/img/verification.8fd74e1a.png"},487:function(t,r,_){t.exports=_.p+"assets/img/linkconnect.37d200e0.png"},488:function(t,r,_){t.exports=_.p+"assets/img/linkindicator.20c22640.jpg"},489:function(t,r,_){t.exports=_.p+"assets/img/linkselection.3b904861.png"}}]);