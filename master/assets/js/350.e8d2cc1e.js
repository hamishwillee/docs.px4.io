(window.webpackJsonp=window.webpackJsonp||[]).push([[350],{2150:function(t,e,r){"use strict";r.r(e);var a=r(19),_=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"intel-aero-즉시-비행-가능-드론"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#intel-aero-즉시-비행-가능-드론"}},[t._v("#")]),t._v(" Intel Aero 즉시 비행 가능 드론")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("이 비행 컨트롤러는 "),a("RouterLink",{attrs:{to:"/ko/flight_controller/autopilot_experimental.html"}},[t._v("단종")]),t._v("되었습니다.")],1),t._v(" "),a("p",[t._v("PX4 v1.11에서 이 플랫폼을 마지막으로 지원합니다.")])]),t._v(" "),a("p",[a("em",[t._v("Intel Aero Ready to Fly Drone")]),t._v("®은 UAV 개발 플랫폼입니다. 이 중 일부는 쿼드 코어 CPU에서 리눅스 실행 "),a("em",[t._v("Intel Aero Compute Board")]),t._v("입니다. 다른 부분은 연결된 STM32 마이크로 컨트롤러이며, NuttX에서 PX4를 실행합니다. 이들은 비전 액세서리 키트도 포함하는 "),a("em",[t._v("Intel Aero Ready to Fly Drone")]),t._v(" 패키지에 통합되어 있습니다.")]),t._v(" "),a("p",[a("img",{attrs:{src:r(594),alt:"Intel Aero RTF"}})]),t._v(" "),a("h2",{attrs:{id:"소개"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#소개"}},[t._v("#")]),t._v(" 소개")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/intel-aero/meta-intel-aero/wiki",target:"_blank",rel:"noopener noreferrer"}},[t._v("공식 위키"),a("OutboundLink")],1),t._v("에서는 보드 설정, 업데이트 및 연결 방법과 Linux 운영체제에서 개발 방법을 설명합니다. 이 문서에서는 개발 트리에서 마이크로 컨트롤러의 펌웨어를 업데이트 방법을 중점적으로 설명합니다.")]),t._v(" "),a("p",[t._v("릴리스에 따라 지침이 일부 변경되어지므로, 사용 가능한 최신 이미지로 업데이트하는 것이 중요합니다. 보드에 연결하고 다음 명령을 실행하여 BIOS와 배포판 버전을 확인할 수 있습니다.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("get_aero_version.py\n")])])]),a("p",[t._v("이 문서의 지침은 다음 버전에서 테스트되었습니다.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('BIOS_VERSION = Aero-01.00.13\nOS_VERSION = Poky Aero (Intel Aero Linux Distro) 1.5.1-dev (pyro)"\nAIRMAP_VERSION = 1.8\nFPGA_VERSION = 0xc1\n')])])]),a("h2",{attrs:{id:"ubuntu를-사용하여-intel-aero-설정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu를-사용하여-intel-aero-설정"}},[t._v("#")]),t._v(" Ubuntu를 사용하여 Intel Aero 설정")]),t._v(" "),a("p",[t._v("Intel Aero에 Ubuntu를 설치하려면 다음의 장비가 필요합니다.")]),t._v(" "),a("ol",[a("li",[t._v("전원 공급 장치 (배터리 또는 네트워크 케이블)")]),t._v(" "),a("li",[t._v("모니터를 연결용 마이크로 HDMI-HDMI 케이블")]),t._v(" "),a("li",[t._v("마이크로 USB3-USB2 암 어댑터")]),t._v(" "),a("li",[t._v("마우스와 키보드를 연결하는 USB 허브")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/intel-aero/meta-intel-aero/wiki/90-%28References%29-OS-user-Installation#installing-ubuntu-on-intel-aero",target:"_blank",rel:"noopener noreferrer"}},[t._v("Intel Aero wiki > Intel Aero에 Ubuntu 설치"),a("OutboundLink")],1),t._v(" 지침을 따라 설치하십시오.")]),t._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://github.com/intel-aero/meta-intel-aero/wiki/90-%28References%29-OS-user-Installation#upgrade-yocto-first",target:"_blank",rel:"noopener noreferrer"}},[t._v("먼저 Yocto 업그레이드"),a("OutboundLink")],1),t._v(" (선택 사항)")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/intel-aero/meta-intel-aero/wiki/90-%28References%29-OS-user-Installation#os",target:"_blank",rel:"noopener noreferrer"}},[t._v("운영 체제"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/intel-aero/meta-intel-aero/wiki/90-%28References%29-OS-user-Installation#intel-aero-repository",target:"_blank",rel:"noopener noreferrer"}},[t._v("인텔 에어로 저장소"),a("OutboundLink")],1)])]),t._v(" "),a("p",[a("em",[t._v("Intel Aero Repository")]),t._v(" (위)의 단계가 완료되면 Aero 커널이 설치됩니다. 이 시점부터는 항상 이 커널을 사용하여 부팅하십시오.")]),t._v(" "),a("p",[t._v("지침에 따라 BIOS, FPGA 및 비행 컨트롤러를 플래시합니다. MAVLink 라우터 구성 파일을 오픈합니다. "),a("strong",[t._v("/etc/mavlink-router/main.conf")])]),t._v(" "),a("p",[t._v("구성 파일에 다음 줄을 추가하여 랩톱 IP를 UDP 끝점으로 포함합니다. IP 주소는 노트북중 하나로 설정되어야 합니다. "),a("code",[t._v("ifconfig")]),t._v("를 실행하여 랩탑의 IP 주소를 확인하십시오.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("[UdpEndpoint wifi]\nMode = Normal\nAddress = 192.168.8.255\n")])])]),a("p",[t._v("이 단계가 완료되면 드론은 노트북에서 실행되는 "),a("em",[t._v("QGroundControl")]),t._v("에 자동으로 연결됩니다.")]),t._v(" "),a("p",[t._v("다음으로 "),a("a",{attrs:{href:"https://github.com/intel-aero/meta-intel-aero/wiki/05-Autonomous-drone-programming-with-ROS",target:"_blank",rel:"noopener noreferrer"}},[t._v("이 지침"),a("OutboundLink")],1),t._v("을 따라 ROS를 설치합니다.")]),t._v(" "),a("h3",{attrs:{id:"realsense-카메라"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#realsense-카메라"}},[t._v("#")]),t._v(" RealSense 카메라")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("RealSense SDK")]),t._v(" "),a("p",[t._v("단계에 따라 "),a("a",{attrs:{href:"https://github.com/intel-aero/meta-intel-aero/wiki/90-%28References%29-OS-user-Installation#intel-realsense-sdk",target:"_blank",rel:"noopener noreferrer"}},[t._v("aero wiki"),a("OutboundLink")],1),t._v("에 나열된 RealSense SDK를 설치합니다. 저장소 복제시 R200 모델에 레거시 브랜치를 사용하여야합니다. D435 또는 D415를 사용하는 경우에는 마스터 분기를 복제하여야 합니다. 다른 모든 단계는 동일하며 카메라가 변경되면 분기를 앞뒤로 전환할 수 있습니다.")]),t._v(" "),a("p",[t._v("RealSense R200을 사용하는 경우 다음을 사용하여 ROS 노드에서 이미 시작할 수 있습니다.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v(" roslaunch realsense_camera r200_nodelet_default.launch\n")])])]),a("p",[t._v("D400 시리즈 카메라를 사용하는 경우에는 다음 단계에서 다른 ROS 래퍼를 설치합니다.")])]),t._v(" "),a("li",[a("p",[t._v("D400 시리즈 RealSense용 ROS 래퍼")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/intel-ros/realsense#step-3-install-intel-realsense-ros-from-sources",target:"_blank",rel:"noopener noreferrer"}},[t._v("소스에서 Intel RealSense ROS 설치"),a("OutboundLink")],1),t._v(" 지침에 따라 catkin 작업 공간을 설치하고 RealSense 소프트웨어를 복제합니다.")]),t._v(" "),a("p",[t._v("다음 명령어를 실행하여 udev 규칙을 설치합니다.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v(" sudo cp config/99-realsense-libusb.rules /etc/udev/rules.d/\n sudo udevadm control --reload-rules && udevadm trigger\n")])])]),a("p",[t._v("이제 RealSense는 다음을 사용하여 ROS 노드에서 실행할 수 있습니다.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v(" roslaunch realsense2_camera rs_camera.launch\n")])])])])]),t._v(" "),a("h3",{attrs:{id:"장애물-회피"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#장애물-회피"}},[t._v("#")]),t._v(" 장애물 회피")]),t._v(" "),a("p",[t._v("PX4 장애물 회피 소프트웨어를 실행하기 위하여 catkin을 설치하십시오.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("apt install python-catkin-tools\n")])])]),a("p",[t._v("catkin 작업 공간을 만들고 초기화합니다. 그런 다음 회피 저장소를 소스 공간에 복제하거나 소스 공간에 대한 심볼릭 링크를 사용합니다. 패키지를 빌드하고 다음 명령어로 ROS 노드를 시작합니다.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("catkin build local_planner\nroslaunch local_planner local_planner_aero.launch\n")])])]),a("h2",{attrs:{id:"px4-소프트웨어-플래싱"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#px4-소프트웨어-플래싱"}},[t._v("#")]),t._v(" PX4 소프트웨어 플래싱")]),t._v(" "),a("p",[t._v("PX4 개발 환경을 설정후, 다음 단계에서 PX4 소프트웨어를 업데이트합니다.")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("기체의 모든 소프트웨어의 전체 업데이트를 수행합니다 (https://github.com/intel-aero/meta-intel-aero/wiki/Upgrade-To-Latest-Software-Release).")])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot",target:"_blank",rel:"noopener noreferrer"}},[t._v("펌웨어"),a("OutboundLink")],1),t._v("를 확보합니다.")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("make intel_aerofc-v1_default")]),t._v("로 컴파일합니다.")])]),t._v(" "),a("li",[a("p",[t._v("대상 호스트명을 설정합니다.")]),t._v(" "),a("p",[t._v("시스템이 링크 로컬 이름을 확인하는 경우에는, 이 단계를 건너뛸 수 있습니다. WiFi 또는 USB로 연결하여 "),a("code",[t._v("intel-aero.local")]),t._v("에 ssh로 연결하여 테스트할 수 있습니다.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v(" ssh root@intel-aero.local\n")])])]),a("p",[t._v("작동하지 않는 경우에는 업로드 스크립트에서 사용할 IP를 지정하십시오.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v(" # WiFi IP\n export AERO_HOSTNAME=192.168.8.1\n \n # Ethernet-over-USB IP\n export AERO_HOSTNAME=192.168.7.2\n")])])])]),t._v(" "),a("li",[a("p",[t._v("다음 명령어로 업로드합니다. "),a("code",[t._v("make intel_aerofc-v1_default upload")])])])]),t._v(" "),a("h2",{attrs:{id:"네트워크를-통한-qgroundcontrol-연결"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#네트워크를-통한-qgroundcontrol-연결"}},[t._v("#")]),t._v(" 네트워크를 통한 QGroundControl 연결")]),t._v(" "),a("ol",[a("li",[t._v("WiFi 또는 USB 네트워크로 보드에 연결되어 있는 지 확인하십시오.")]),t._v(" "),a("li",[t._v("SSH를 보드에 연결하고 MAVLink 전달이 실행되는 지 확인합니다. 기본적으로 부팅시 자동으로 실행됩니다. 다음 명령어로 수동으로 실행할 수 있습니다. "),a("code",[t._v("systemctl start mavlink-router")])]),t._v(" "),a("li",[a("em",[t._v("QGroundControl")]),t._v("을 시작시 자동으로 연결됩니다.")]),t._v(" "),a("li",[a("em",[t._v("QGroundControl")]),t._v("을 시작하는 대신 스크립트를 사용하여 "),a("RouterLink",{attrs:{to:"/ko/debug/mavlink_shell.html"}},[t._v("MAVLink 셸")]),t._v("을 오픈할 수 있습니다. "),a("code",[t._v("./Tools/mavlink_shell.py 0.0.0.0:14550")])],1)]),t._v(" "),a("p",[a("span",{attrs:{id:"leddarone"}})]),t._v(" "),a("h2",{attrs:{id:"leddarone-거리-측정기-연결"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#leddarone-거리-측정기-연결"}},[t._v("#")]),t._v(" LeddarOne 거리 측정기 연결")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/ko/sensor/leddar_one.html"}},[t._v("LeddarOne")]),t._v("을 Aero 원격 측정 포트에 연결합니다. LeddarOne와 Aero 원격 측정 포트 (TELEM1)의 핀배열은 아래와 같습니다.")],1),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("핀")]),t._v(" "),a("th",[t._v("Aerofc 텔레메트리")]),t._v(" "),a("th",[t._v("LeddarOne")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("1")]),t._v(" "),a("td",[t._v("VCC")]),t._v(" "),a("td",[t._v("GND")])]),t._v(" "),a("tr",[a("td",[t._v("2")]),t._v(" "),a("td",[t._v("TX")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("3")]),t._v(" "),a("td",[t._v("RX")]),t._v(" "),a("td",[t._v("VCC")])]),t._v(" "),a("tr",[a("td",[t._v("4")]),t._v(" "),a("td",[t._v("SCL")]),t._v(" "),a("td",[t._v("RX")])]),t._v(" "),a("tr",[a("td",[t._v("5")]),t._v(" "),a("td",[t._v("SDA")]),t._v(" "),a("td",[t._v("TX")])]),t._v(" "),a("tr",[a("td",[t._v("6")]),t._v(" "),a("td",[t._v("GND")]),t._v(" "),a("td",[t._v("-")])])])]),t._v(" "),a("p",[t._v("거리계를 활성화하려면 "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SENS_LEDDAR1_CFG"}},[t._v("SENS_LEDDAR1_CFG")]),t._v(" 매개 변수를 TELEM1로 설정하고 보드를 재부팅합니다 (매개변수 설정 지침은 "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameters.html"}},[t._v("여기")]),t._v("에서 확인 가능).")],1),t._v(" "),a("p",[a("span",{attrs:{id:"lidar_lite"}})]),t._v(" "),a("h2",{attrs:{id:"lidar-lite-거리-측정기-연결"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lidar-lite-거리-측정기-연결"}},[t._v("#")]),t._v(" Lidar Lite 거리 측정기 연결")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("Lidar Lite는 측정 스파이크로 인하여 "),a("em",[t._v("Intel Aero Ready to Fly Drone")]),t._v("®과 함께 사용하지 않는 것이 좋습니다.")])]),t._v(" "),a("p",[t._v("다음 지침은 I2C를 통해 연결된 "),a("RouterLink",{attrs:{to:"/ko/sensor/rangefinders.html#lidar-lite"}},[t._v("Lidar Lite")]),t._v(" V3를 설명합니다. Intel® Aero Ready to Fly Drone에는 I2C가있는 두 개의 포트가 있습니다. 하나는 COMPASS로 표시되고 다른 하나는 TELEMETRY입니다. 두 개의 핀배열은 아래에서 찾을 수 있습니다. 텔레메트리 포트는 사용하는 것을 추천합니다. TELEMETRY 포트가 이미 사용중인 경우 스플리터를 사용하여 I2C 연결을 공유할 수 있습니다 (모든 I2C 포트에서 작동). 스플리터 설정은 아래 이미지를 확인하십시오.")],1),t._v(" "),a("p",[t._v("또한 Lidar Lite I2C 연결용 전해 커패시터를 사용하여 거리 판독 값의 스파이크를 줄이는 것이 좋습니다 ("),a("a",{attrs:{href:"https://static.garmin.com/pumac/LIDAR_Lite_v3_Operation_Manual_and_Technical_Specifications.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("3 페이지"),a("OutboundLink")],1),t._v(" 참조).")]),t._v(" "),a("p",[t._v("Lidar Lite V3와 Aero 텔레메트리 포트의 핀배열은 다음과 같습니다.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("핀")]),t._v(" "),a("th",[t._v("Aerofc 텔레메트리")]),t._v(" "),a("th",[t._v("Lidar Lite V3")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("1")]),t._v(" "),a("td",[t._v("VCC")]),t._v(" "),a("td",[t._v("VCC")])]),t._v(" "),a("tr",[a("td",[t._v("2")]),t._v(" "),a("td",[t._v("TX")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("3")]),t._v(" "),a("td",[t._v("RX")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("4")]),t._v(" "),a("td",[t._v("SCL")]),t._v(" "),a("td",[t._v("SCL")])]),t._v(" "),a("tr",[a("td",[t._v("5")]),t._v(" "),a("td",[t._v("SDA")]),t._v(" "),a("td",[t._v("SDA")])]),t._v(" "),a("tr",[a("td",[t._v("6")]),t._v(" "),a("td",[t._v("GND")]),t._v(" "),a("td",[t._v("GND")])])])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("핀")]),t._v(" "),a("th",[t._v("Aerofc 나침반")]),t._v(" "),a("th",[t._v("Lidar Lite V3")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("1")]),t._v(" "),a("td",[t._v("VCC")]),t._v(" "),a("td",[t._v("VCC")])]),t._v(" "),a("tr",[a("td",[t._v("2")]),t._v(" "),a("td",[t._v("SCL")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("3")]),t._v(" "),a("td",[t._v("SDA")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("4")]),t._v(" "),a("td",[t._v("GND")]),t._v(" "),a("td",[t._v("SCL")])]),t._v(" "),a("tr",[a("td",[t._v("5")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("SDA")])]),t._v(" "),a("tr",[a("td",[t._v("6")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("GND")])])])]),t._v(" "),a("p",[a("img",{attrs:{src:r(595),alt:"Aero I2C 스플리터"}})]),t._v(" "),a("p",[a("img",{attrs:{src:r(596),alt:"Aero Lidar Lite"}})]),t._v(" "),a("h2",{attrs:{id:"aero에서-광류-센서-사용"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aero에서-광류-센서-사용"}},[t._v("#")]),t._v(" Aero에서 광류 센서 사용")]),t._v(" "),a("p",[a("em",[t._v("Intel Aero Ready to Fly Drone")]),t._v("®은 컴퓨팅 보드 (Linux OS 버전 1.6 이상)에 사전 설치된 광류 실행 파일과 함께 제공되어 광류 속도 추정을 이용하여 안정적으로 비행할 수 있습니다. 광류 센서를 사용하려면, 먼저 범위 센서를 설치하여야합니다 (위 참조).")]),t._v(" "),a("p",[t._v("광류 센서를 사용하려면, 차량 컴퓨팅 보드의 콘솔에서 다음 명령을 실행하십시오.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("systemctl start aero-optical-flow\n")])])]),a("p",[t._v("부팅시 광류 실행 파일을 시작하는 명령어는 다음과 같습니다.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("systemctl enable aero-optical-flow #use disable to undo\n")])])]),a("p",[t._v("또한, 비행 콘트롤러에서 다음 매개변수를 설정하여야 합니다.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("매개변수")]),t._v(" "),a("th",[t._v("값")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_AID_MASK"}},[t._v("EKF2_AID_MASK")])],1),t._v(" "),a("td",[t._v("2")])]),t._v(" "),a("tr",[a("td",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_HGT_MODE"}},[t._v("EKF2_HGT_MODE")])],1),t._v(" "),a("td",[t._v("2")])])])])])}),[],!1,null,null,null);e.default=_.exports},594:function(t,e,r){t.exports=r.p+"assets/img/intel-aero-rtf.21a217f3.jpg"},595:function(t,e,r){t.exports=r.p+"assets/img/aero_i2c_splitter.9c1f17b5.jpg"},596:function(t,e,r){t.exports=r.p+"assets/img/aero_lidarlite.abf0c6cb.jpg"}}]);