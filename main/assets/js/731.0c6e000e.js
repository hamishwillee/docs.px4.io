(window.webpackJsonp=window.webpackJsonp||[]).push([[731],{2452:function(e,a,t){"use strict";t.r(a);var n=t(19),r=Object(n.a)({},(function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"intel-aero-즉시-비행-가능-드론"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#intel-aero-즉시-비행-가능-드론"}},[e._v("#")]),e._v(" Intel Aero 즉시 비행 가능 드론")]),e._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),n("p",[e._v("이 비행 컨트롤러는 "),n("RouterLink",{attrs:{to:"/ko/flight_controller/autopilot_experimental.html"}},[e._v("단종")]),e._v("되었습니다.")],1),e._v(" "),n("p",[e._v("PX4 v1.11에서 이 플랫폼을 마지막으로 지원합니다.")])]),e._v(" "),n("p",[n("em",[e._v("Intel Aero Ready to Fly Drone")]),e._v("®은 UAV 개발 플랫폼입니다. 이 중 일부는 쿼드 코어 CPU에서 리눅스 실행 "),n("em",[e._v("Intel Aero Compute Board")]),e._v("입니다. 다른 부분은 연결된 STM32 마이크로 컨트롤러이며, NuttX에서 PX4를 실행합니다. 다른 부분은 연결된 STM32 마이크로 컨트롤러이며, NuttX에서 PX4를 실행합니다.")]),e._v(" "),n("p",[n("img",{attrs:{src:t(662),alt:"Intel Aero RTF"}})]),e._v(" "),n("h2",{attrs:{id:"소개"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#소개"}},[e._v("#")]),e._v(" 소개")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/intel-aero/meta-intel-aero/wiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("공식 위키"),n("OutboundLink")],1),e._v("에서는 보드 설정, 업데이트 및 연결 방법과 Linux 운영체제에서 개발 방법을 설명합니다. 이 문서에서는 개발 트리에서 마이크로 컨트롤러의 펌웨어를 업데이트 방법을 중점적으로 설명합니다.")]),e._v(" "),n("p",[e._v("릴리스에 따라 지침이 일부 변경되어지므로, 사용 가능한 최신 이미지로 업데이트하는 것이 중요합니다. 보드에 연결하고 다음 명령을 실행하여 BIOS와 배포판 버전을 확인할 수 있습니다.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("get_aero_version.py\n")])])]),n("p",[e._v("이 문서의 지침은 다음 버전에서 테스트되었습니다.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('BIOS_VERSION = Aero-01.00.13\nOS_VERSION = Poky Aero (Intel Aero Linux Distro) 1.5.1-dev (pyro)"\nAIRMAP_VERSION = 1.8\nFPGA_VERSION = 0xc1\n')])])]),n("h2",{attrs:{id:"ubuntu를-사용하여-intel-aero-설정"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu를-사용하여-intel-aero-설정"}},[e._v("#")]),e._v(" Ubuntu를 사용하여 Intel Aero 설정")]),e._v(" "),n("p",[e._v("Intel Aero에 Ubuntu를 설치하려면 다음의 장비가 필요합니다.")]),e._v(" "),n("ol",[n("li",[e._v("전원 공급 장치 (배터리 또는 네트워크 케이블)")]),e._v(" "),n("li",[e._v("모니터를 연결용 마이크로 HDMI-HDMI 케이블")]),e._v(" "),n("li",[e._v("마이크로 USB3-USB2 암 어댑터")]),e._v(" "),n("li",[e._v("마우스와 키보드를 연결하는 USB 허브")])]),e._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/intel-aero/meta-intel-aero/wiki/90-%28References%29-OS-user-Installation#installing-ubuntu-on-intel-aero",target:"_blank",rel:"noopener noreferrer"}},[e._v("Intel Aero wiki > Intel Aero에 Ubuntu 설치"),n("OutboundLink")],1),e._v(" 지침을 따라 설치하십시오.")]),e._v(" "),n("ol",[n("li",[n("a",{attrs:{href:"https://github.com/intel-aero/meta-intel-aero/wiki/90-%28References%29-OS-user-Installation#upgrade-yocto-first",target:"_blank",rel:"noopener noreferrer"}},[e._v("먼저 Yocto 업그레이드"),n("OutboundLink")],1),e._v(" (선택 사항)")]),e._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/intel-aero/meta-intel-aero/wiki/90-%28References%29-OS-user-Installation#os",target:"_blank",rel:"noopener noreferrer"}},[e._v("운영 체제"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/intel-aero/meta-intel-aero/wiki/90-%28References%29-OS-user-Installation#intel-aero-repository",target:"_blank",rel:"noopener noreferrer"}},[e._v("인텔 에어로 저장소"),n("OutboundLink")],1)])]),e._v(" "),n("p",[n("em",[e._v("Intel Aero Repository")]),e._v(" (위)의 단계가 완료되면 Aero 커널이 설치됩니다. 이 시점부터는 항상 이 커널을 사용하여 부팅하십시오.")]),e._v(" "),n("p",[e._v("지침에 따라 BIOS, FPGA 및 비행 컨트롤러를 플래시합니다. MAVLink 라우터 구성 파일을 오픈합니다. "),n("strong",[e._v("/etc/mavlink-router/main.conf")])]),e._v(" "),n("p",[e._v("구성 파일에 다음 줄을 추가하여 랩톱 IP를 UDP 끝점으로 포함합니다. IP 주소는 노트북중 하나로 설정되어야 합니다. "),n("code",[e._v("ifconfig")]),e._v("를 실행하여 랩탑의 IP 주소를 확인하십시오.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("[UdpEndpoint wifi]\nMode = Normal\nAddress = 192.168.8.255\n")])])]),n("p",[e._v("이 단계가 완료되면 드론은 노트북에서 실행되는 "),n("em",[e._v("QGroundControl")]),e._v("에 자동으로 연결됩니다.")]),e._v(" "),n("p",[e._v("다음으로 "),n("a",{attrs:{href:"https://github.com/intel-aero/meta-intel-aero/wiki/05-Autonomous-drone-programming-with-ROS",target:"_blank",rel:"noopener noreferrer"}},[e._v("이 지침"),n("OutboundLink")],1),e._v("을 따라 ROS를 설치합니다.")]),e._v(" "),n("h3",{attrs:{id:"realsense-카메라"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#realsense-카메라"}},[e._v("#")]),e._v(" RealSense 카메라")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("RealSense SDK")]),e._v(" "),n("p",[e._v("단계에 따라 "),n("a",{attrs:{href:"https://github.com/intel-aero/meta-intel-aero/wiki/90-%28References%29-OS-user-Installation#intel-realsense-sdk",target:"_blank",rel:"noopener noreferrer"}},[e._v("aero wiki"),n("OutboundLink")],1),e._v("에 나열된 RealSense SDK를 설치합니다. 저장소 복제시 R200 모델에 레거시 브랜치를 사용하여야합니다. D435 또는 D415를 사용하는 경우에는 마스터 분기를 복제하여야 합니다. 다른 모든 단계는 동일하며 카메라가 변경되면 분기를 앞뒤로 전환할 수 있습니다.")]),e._v(" "),n("p",[e._v("RealSense R200을 사용하는 경우 다음을 사용하여 ROS 노드에서 이미 시작할 수 있습니다.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("roslaunch realsense_camera r200_nodelet_default.launch\n")])])]),n("p",[e._v("D400 시리즈 카메라를 사용하는 경우에는 다음 단계에서 다른 ROS 래퍼를 설치합니다.")])]),e._v(" "),n("li",[n("p",[e._v("D400 시리즈 RealSense용 ROS 래퍼")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/intel-ros/realsense#step-3-install-intel-realsense-ros-from-sources",target:"_blank",rel:"noopener noreferrer"}},[e._v("소스에서 Intel RealSense ROS 설치"),n("OutboundLink")],1),e._v(" 지침에 따라 catkin 작업 공간을 설치하고 RealSense 소프트웨어를 복제합니다.")]),e._v(" "),n("p",[e._v("다음 명령어를 실행하여 udev 규칙을 설치합니다.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("sudo cp config/99-realsense-libusb.rules /etc/udev/rules.d/\n")])])])])]),e._v(" "),n("p",[e._v("sudo udevadm control --reload-rules && udevadm trigger")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("\n이제 RealSense는 다음을 사용하여 ROS 노드에서 실행할 수 있습니다.\n")])])]),n("p",[e._v("roslaunch realsense2_camera rs_camera.launch")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("\n### 장애물 회피\n\nPX4 장애물 회피 소프트웨어를 실행하기 위하여 catkin을 설치하십시오.\n\n")])])]),n("p",[e._v("apt install python-catkin-tools")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("\ncatkin 작업 공간을 만들고 초기화합니다. 그런 다음 회피 저장소를 소스 공간에 복제하거나 소스 공간에 대한 심볼릭 링크를 사용합니다. 패키지를 빌드하고 다음 명령어로 ROS 노드를 시작합니다.\n\n")])])]),n("p",[e._v("catkin build local_planner\nroslaunch local_planner local_planner_aero.launch")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("\n## PX4 소프트웨어 플래싱\n\nPX4 개발 환경을 설정후, 다음 단계에서 PX4 소프트웨어를 업데이트합니다.\n\n1. 기체의 모든 소프트웨어의 전체 업데이트를 수행합니다 (https://github.com/intel-aero/meta-intel-aero/wiki/Upgrade-To-Latest-Software-Release).\n1. [펌웨어](https://github.com/PX4/PX4-Autopilot)를 확보합니다.\n1. `make intel_aerofc-v1_default`로 컴파일합니다.\n1. 대상 호스트명을 설정합니다.\n\n   시스템이 링크 로컬 이름을 확인하는 경우에는, 이 단계를 건너뛸 수 있습니다. WiFi 또는 USB로 연결하여 `intel-aero.local`에 ssh로 연결하여 테스트할 수 있습니다.\n\n")])])]),n("p",[e._v("ssh root@intel-aero.local")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("\n작동하지 않는 경우에는 업로드 스크립트에서 사용할 IP를 지정하십시오.\n\n")])])]),n("h1",{attrs:{id:"wifi-ip"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#wifi-ip"}},[e._v("#")]),e._v(" WiFi IP")]),e._v(" "),n("p",[e._v("export AERO_HOSTNAME=192.168.8.1")]),e._v(" "),n("h1",{attrs:{id:"ethernet-over-usb-ip"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ethernet-over-usb-ip"}},[e._v("#")]),e._v(" Ethernet-over-USB IP")]),e._v(" "),n("p",[e._v("export AERO_HOSTNAME=192.168.7.2")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("\n1. 다음 명령어로 업로드합니다. ` make intel_aerofc-v1_default upload`\n\n\n## 네트워크를 통한 QGroundControl 연결\n\n1. WiFi 또는 USB 네트워크로 보드에 연결되어 있는 지 확인하십시오.\n1. SSH를 보드에 연결하고 MAVLink 전달이 실행되는 지 확인합니다. 기본적으로 부팅시 자동으로 실행됩니다. 다음 명령어로 수동으로 실행할 수 있습니다.\n")])])]),n("p",[e._v("systemctl start mavlink-router")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("1. *QGroundControl*을 시작시 자동으로 연결됩니다.\n1. *QGroundControl*을 시작하는 대신 스크립트를 사용하여 [MAVLink 셸](../debug/mavlink_shell.md)을 오픈할 수 있습니다.\n")])])]),n("p",[e._v("./Tools/mavlink_shell.py 0.0.0.0:14550")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('\n<span id="leddarone"></span>\n## LeddarOne 거리 측정기 연결\n\n[LeddarOne](../sensor/leddar_one.md)을 Aero 원격 측정 포트에 연결합니다. LeddarOne와 Aero 원격 측정 포트 (TELEM1)의 핀배열은 아래와 같습니다.\n\n| 핀 | Aerofc 텔레메트리 | LeddarOne |\n| - | ------------ | --------- |\n| 1 | VCC          | GND       |\n| 2 | TX           | -         |\n| 3 | RX           | VCC       |\n| 4 | SCL          | RX        |\n| 5 | SDA          | TX        |\n| 6 | GND          | -         |\n\n거리계를 활성화하려면 [SENS_LEDDAR1_CFG](../advanced_config/parameter_reference.md#SENS_LEDDAR1_CFG) 매개 변수를 TELEM1로 설정하고 보드를 재부팅합니다 (매개변수 설정 지침은 [여기](../advanced_config/parameters.md)에서 확인 가능).\n\n<span id="lidar_lite"></span>\n## Lidar Lite 거리 측정기 연결\n\n:::warning\nLidar Lite는 측정 스파이크로 인하여 *Intel Aero Ready to Fly Drone*®과 함께 사용하지 않는 것이 좋습니다.\n:::\n\n다음 지침은 I2C를 통해 연결된 [Lidar Lite](../sensor/rangefinders.md#lidar-lite) V3를 설명합니다. The Intel® Aero Ready to Fly Drone has two ports with I2C: One labelled COMPASS and the other TELEMETRY. 두 개의 핀배열은 아래에서 찾을 수 있습니다. 텔레메트리 포트는 사용하는 것을 추천합니다. TELEMETRY 포트가 이미 사용중인 경우 스플리터를 사용하여 I2C 연결을 공유할 수 있습니다 (모든 I2C 포트에서 작동). 스플리터 설정은 아래 이미지를 확인하십시오.\n\n또한 Lidar Lite I2C 연결용 전해 커패시터를 사용하여 거리 판독 값의 스파이크를 줄이는 것이 좋습니다 ([3 페이지](https://static.garmin.com/pumac/LIDAR_Lite_v3_Operation_Manual_and_Technical_Specifications.pdf) 참조).\n\nLidar Lite V3와 Aero 텔레메트리 포트의 핀배열은 다음과 같습니다.\n\n| 핀 | Aerofc 텔레메트리 | Lidar Lite V3 |\n| - | ------------ | ------------- |\n| 1 | VCC          | VCC           |\n| 2 | TX           | -             |\n| 3 | RX           | -             |\n| 4 | SCL          | SCL           |\n| 5 | SDA          | SDA           |\n| 6 | GND          | GND           |\n\n| 핀 | Aerofc 나침반 | Lidar Lite V3 |\n| - | ---------- | ------------- |\n| 1 | VCC        | VCC           |\n| 2 | SCL        | -             |\n| 3 | SDA        | -             |\n| 4 | GND        | SCL           |\n| 5 | -          | SDA           |\n| 6 | -          | GND           |\n\n![Aero I2C 스플리터](../../assets/hardware/intel_aero/aero_i2c_splitter.jpg)\n\n![Aero Lidar Lite](../../assets/hardware/intel_aero/aero_lidarlite.jpg)\n\n## Aero에서 광류 센서 사용\n\n*Intel Aero Ready to Fly Drone*®은 컴퓨팅 보드 (Linux OS 버전 1.6 이상)에 사전 설치된 광류 실행 파일과 함께 제공되어 광류 속도 추정을 이용하여 안정적으로 비행할 수 있습니다. 광류 센서를 사용하려면, 먼저 범위 센서를 설치하여야합니다 (위 참조).\n\n광류 센서를 사용하려면, 차량 컴퓨팅 보드의 콘솔에서 다음 명령을 실행하십시오.\n')])])]),n("p",[e._v("systemctl start aero-optical-flow")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("\n부팅시 광류 실행 파일을 시작하는 명령어는 다음과 같습니다.\n")])])]),n("p",[e._v("systemctl enable aero-optical-flow #use disable to undo")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("\n또한, 비행 콘트롤러에서 다음 매개변수를 설정하여야 합니다.\n\n| 매개변수                                                                       | 값 |\n| -------------------------------------------------------------------------- | - |\n| [EKF2_AID_MASK](../advanced_config/parameter_reference.md#EKF2_AID_MASK) | 2 |\n| [EKF2_HGT_REF](../advanced_config/parameter_reference.md#EKF2_HGT_REF)   | 2 |\n| [EKF2_RNG_CTRL](../advanced_config/parameter_reference.md#EKF2_RNG_CTRL) | 2 |\n| [EKF2_GPS_CTRL](../advanced_config/parameter_reference.md#EKF2_GPS_CTRL) | 0 |\n")])])])])}),[],!1,null,null,null);a.default=r.exports},662:function(e,a,t){e.exports=t.p+"assets/img/intel-aero-rtf.21a217f3.jpg"}}]);