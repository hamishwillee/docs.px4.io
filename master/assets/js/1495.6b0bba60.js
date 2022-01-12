(window.webpackJsonp=window.webpackJsonp||[]).push([[1495],{2696:function(t,e,a){"use strict";a.r(e);var _=a(19),s=Object(_.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"gazebo-다중-차량-시뮬레이션"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gazebo-다중-차량-시뮬레이션"}},[t._v("#")]),t._v(" Gazebo 다중 차량 시뮬레이션")]),t._v(" "),a("p",[t._v("이 항목에서는 Gazebo와 SITL(Linux만 해당)을 사용하여 다중 UAV 차량 시뮬레이션 방법을 설명합니다. ROS 유무에 따라 시뮬레이션 접근 방식이 달라집니다.")]),t._v(" "),a("p",[a("a",{attrs:{id:"no_ros"}})]),t._v(" "),a("h2",{attrs:{id:"다중-차량-gazebo-ros-없음"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#다중-차량-gazebo-ros-없음"}},[t._v("#")]),t._v(" 다중 차량 Gazebo (ROS 없음)")]),t._v(" "),a("p",[t._v("Gazebo에서 다중 차량을 시뮬레이션하려면, 터미널에서 다음 명령어를 입력하십시오.("),a("em",[t._v("펌웨어")]),t._v(" 트리 루트에서).")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Tools/gazebo_sitl_multiple_run.sh [-m <model>] [-n <number_of_vehicles>] [-w <world>] [-s <script>] [-t <target>] [-l <label>]\n")])])]),a("ul",[a("li",[a("p",[a("code",[t._v("<model>")]),t._v(": 실행할 "),a("RouterLink",{attrs:{to:"/ko/simulation/gazebo_vehicles.html"}},[t._v("차량 유형/모델")]),t._v(", 예: "),a("code",[t._v("iris")]),t._v("(기본값), "),a("code",[t._v("plane")]),t._v(", "),a("code",[t._v("standard_vtol")])],1)]),t._v(" "),a("li",[a("p",[a("code",[t._v("<number_of_vehicles>")]),t._v(": 실행할 차량의 수입니다. 기본값은 3. 최대값은 255.")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("<world>")]),t._v(": 차량이 생성되어야 하는 "),a("RouterLink",{attrs:{to:"/ko/simulation/gazebo_worlds.html"}},[t._v("세계")]),t._v(", 예: "),a("code",[t._v("empty")]),t._v(" (기본값)")],1)]),t._v(" "),a("li",[a("p",[a("code",[t._v("<script>")]),t._v(": 여러 유형의 다중 차량을 생성합니다("),a("code",[t._v("-m")]),t._v(" 및 "),a("code",[t._v("-n")]),t._v("의 값 무시). 예:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('-s "iris:3,plane:2,standard_vtol:3"\n')])])]),a("ul",[a("li",[t._v("지원되는 차량 유형은 "),a("code",[t._v("iris")]),t._v(", "),a("code",[t._v("plane")]),t._v(", "),a("code",[t._v("standard_vtol")]),t._v("입니다.")]),t._v(" "),a("li",[t._v("콜론 뒤의 숫자는 실행할 차량(해당 유형) 대수를 나타냅니다.")]),t._v(" "),a("li",[t._v("최대 차량 대수는 255대입니다.")])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("<target>")]),t._v(": 빌드 대상, 예: "),a("code",[t._v("px4_sitl_default")]),t._v("(기본값), "),a("code",[t._v("px4_sitl_rtps")])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("<label>")]),t._v(" : 모델에 대한 특정 레이블, 예: "),a("code",[t._v("rtps")])])])]),t._v(" "),a("p",[t._v("각 차량 인스턴스에는 고유한 MAVLink 시스템 ID(1, 2, 3 등)가 할당됩니다. 차량 인스턴스는 순차적으로 할당된 PX4 원격 UDP 포트: "),a("code",[t._v("14540")]),t._v(" - "),a("code",[t._v("14548")]),t._v("에서 액세스됩니다(추가 인스턴스는 모두 동일한 원격 UDP 포트를 사용하여 액세스: "),a("code",[t._v("14549")]),t._v(")")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("255대의 차량 제한은 mavlink "),a("code",[t._v("MAV_SYS_ID")]),t._v("가 동일한 네트워크에서 255대의 차량만 지원하기 때문입니다. "),a("code",[t._v("MAV_SYS_ID")]),t._v(" 및 다양한 UDP 포트는 SITL rcS: "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/ROMFS/px4fmu_common/init.d-posix/rcS#L108-L112",target:"_blank",rel:"noopener noreferrer"}},[t._v("init.d-posix/rcS"),a("OutboundLink")],1),t._v("에 할당됩니다.")])]),t._v(" "),a("p",[a("a",{attrs:{id:"video_mc"}})]),t._v(" "),a("h3",{attrs:{id:"비디오-다중-멀티콥터-iris"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#비디오-다중-멀티콥터-iris"}},[t._v("#")]),t._v(" 비디오: 다중 멀티콥터(Iris)")]),t._v(" "),a("p",[t._v("@"),a("a",{attrs:{href:"https://youtu.be/Mskx_WxzeCk",target:"_blank",rel:"noopener noreferrer"}},[t._v("유투브"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{id:"video_fw"}})]),t._v(" "),a("h3",{attrs:{id:"비디오-다중-고정익"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#비디오-다중-고정익"}},[t._v("#")]),t._v(" 비디오: 다중 고정익")]),t._v(" "),a("p",[t._v("@"),a("a",{attrs:{href:"https://youtu.be/aEzFKPMEfjc",target:"_blank",rel:"noopener noreferrer"}},[t._v("유투브"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{id:"video_vtol"}})]),t._v(" "),a("h3",{attrs:{id:"비디오-다중-vtol"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#비디오-다중-vtol"}},[t._v("#")]),t._v(" 비디오: 다중 VTOL")]),t._v(" "),a("p",[t._v("@"),a("a",{attrs:{href:"https://youtu.be/lAjjTFFZebI",target:"_blank",rel:"noopener noreferrer"}},[t._v("유투브"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{id:"with_dds"}})]),t._v(" "),a("h3",{attrs:{id:"빌드-및-테스트-rtps-dds"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#빌드-및-테스트-rtps-dds"}},[t._v("#")]),t._v(" 빌드 및 테스트(RTPS/DDS)")]),t._v(" "),a("p",[t._v("Gazebo에서 RTPS/DDS를 기반으로 여러 차량을 시뮬레이션하려면 터미널에서 "),a("em",[t._v("PX4-Autopilot")]),t._v(" 트리(위에 설명된 대로) 루트의 "),a("code",[t._v("-t px4_sitl_rtps")]),t._v(" 옵션과 함께 "),a("code",[t._v("gazebo_sitl_multiple_run.sh")]),t._v(" 명령을 사용합니다. 여기에서 "),a("code",[t._v("-t px4_sitl_rtps")]),t._v(" 옵션을 사용합니다. 이 옵션은 MAVLink 시뮬레이션 API가 아닌 PX4와 통신하기 위해 RTPS를 사용하도록 설정합니다. 그러면 "),a("code",[t._v("iris_rtps")]),t._v(" 모델(현재 RTPS와 함께 사용하기 위해 구현된 유일한 모델)이 빌드되고 실행됩니다.")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[a("em",[t._v("eProsima Fast DDS")]),t._v("가 설치되어 있어야 하고, "),a("code",[t._v("micrortps_agent")]),t._v("가 각 차량의 다른 터미널에서 실행되어야 합니다. 자세한 내용은 "),a("RouterLink",{attrs:{to:"/ko/middleware/micrortps.html"}},[t._v("RTPS/DDS 인터페이스: PX4-고속 RTPS(DDS) 브리지")]),t._v("를 참고하십시오.")],1)]),t._v(" "),a("p",[t._v("예제 설정을 빌드하려면 아래 단계를 따라 진행하십시오.")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("PX4/펌웨어 코드를 복제한 다음, SITL 코드를 빌드합니다.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" Firmware_clone\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" submodule update --init --recursive\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("DONT_RUN")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl_rtps gazebo\n")])])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("micrortps_agent")]),t._v("를 빌드합니다.")]),t._v(" "),a("ul",[a("li",[t._v("ROS 독립적인 RTPS/DDS 애플리케이션에서 에이전트를 사용하려면 "),a("RouterLink",{attrs:{to:"/ko/middleware/micrortps.html#agent-in-an-offboard-fast-dds-interface-ros-independent"}},[t._v("여기에 있는 설치 방법")]),t._v("을 참고하십시오.")],1),t._v(" "),a("li",[t._v("ROS 2에서 에이전트를 사용하려면, "),a("RouterLink",{attrs:{to:"/ko/ros/ros2_comm.html"}},[t._v("이 설치 방법")]),t._v("을 참고하십시오.")],1)])]),t._v(" "),a("li",[a("p",[a("code",[t._v("gazebo_sitl_multiple_run.sh")]),t._v("를 실행합니다. 예를 들어 4대의 차량을 생성하려면, 다음을 명령어를 실행하십시오.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("./Tools/gazebo_sitl_multiple_run.sh -t px4_sitl_rtps -m iris -l rtps -n "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n")])])])])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("각 차량 인스턴스에는 고유한 MAVLink 시스템 ID(1, 2, 3 등)가 할당되고, 고유한 원격 UDP 포트(2019, 2021, 2023 등)에서 데이터를 수신하고, UDP 포트(2020, 2022, 2024 등)에서 데이터를 전송합니다.")])]),t._v(" "),a("ol",[a("li",[a("p",[a("code",[t._v("micrortps_agent")]),t._v("를 실행합니다. 예를 들어 4대의 차량을 연결하려면, 다음을 명령어를 실행하십시오.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("micrortps_agent -t UDP -r "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2020")]),t._v(" -s "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2019")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("\nmicrortps_agent -t UDP -r "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2022")]),t._v(" -s "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2021")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("\nmicrortps_agent -t UDP -r "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2024")]),t._v(" -s "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2023")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("\nmicrortps_agent -t UDP -r "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2026")]),t._v(" -s "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2025")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("\n")])])]),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("ROS2를 사용하여 PX4의 특정 인스턴스와 통신하려면 `-n "),a("namespace",[t._v("` 옵션을 사용합니다. 예를 들어, `micrortps_agent -t UDP -r 2020 -s 2019 -n vhcl0`을 실행하면 에이전트가 네임스페이스 접두사 `/vhcl0`이 있는 모든 주제를 게시합니다. 그런 다음 해당 차량의 주제만 구독하고 게시할 수 있습니다.")])],1)])])]),t._v(" "),a("p",[t._v(":::")]),t._v(" "),a("p",[a("a",{attrs:{id:"with_ros"}})]),t._v(" "),a("h2",{attrs:{id:"다중-차량-ros-와-gazebo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#다중-차량-ros-와-gazebo"}},[t._v("#")]),t._v(" 다중 차량 ROS 와 Gazebo")]),t._v(" "),a("p",[t._v("이 예제는 빈 세계에서 두 개의 Iris 차량을 출력하는 Gazebo 클라이언트 GUI를 여는 설정을 설명합니다. 그런 다음 단일 차량을 관리하는 것과 유사한 방식으로 "),a("em",[t._v("QGroundControl")]),t._v(" 및 MAVROS를 사용하여 차량을 제어할 수 있습니다.")]),t._v(" "),a("h3",{attrs:{id:"필수-사항"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#필수-사항"}},[t._v("#")]),t._v(" 필수 사항")]),t._v(" "),a("ul",[a("li",[t._v("현 "),a("RouterLink",{attrs:{to:"/ko/dev_setup/dev_env_linux_ubuntu.html#rosgazebo"}},[t._v("PX4 ROS/Gazebo 개발 환경")])],1)]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("작성 당시에는  ROS Melodic/Gazebo 9가 포함된 Ubuntu 18.04을 사용하였습니다. "),a("RouterLink",{attrs:{to:"/ko/simulation/gazebo.html"}},[t._v("가제보 시뮬레이션")]),t._v("도 참고하십시오.")],1)]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://wiki.ros.org/mavros",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVROS 패키지"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("최신 "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4/PX4-Autopilot"),a("OutboundLink")],1),t._v(" 저장소 복제")])]),t._v(" "),a("h3",{attrs:{id:"빌드-및-테스트"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#빌드-및-테스트"}},[t._v("#")]),t._v(" 빌드 및 테스트")]),t._v(" "),a("p",[t._v("예제 설정을 빌드하려면 아래 단계를 따라 진행하십시오.")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("PX4/PX4-Autopilot 코드를 복제한 다음, SITL 코드를 빌드합니다.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("cd Firmware_clone\ngit submodule update --init --recursive\nDONT_RUN=1 make px4_sitl_default gazebo\n")])])])]),t._v(" "),a("li",[a("p",[t._v("환경 설정을 업데이트합니다.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("source Tools/setup_gazebo.bash $(pwd) $(pwd)/build/px4_sitl_default\nexport ROS_PACKAGE_PATH=$ROS_PACKAGE_PATH:$(pwd):$(pwd)/Tools/sitl_gazebo\n")])])])]),t._v(" "),a("li",[a("p",[t._v("실행 파일을 실행합니다.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("roslaunch px4 multi_uav_mavros_sitl.launch\n")])])])])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("위의 "),a("em",[t._v("roslaunch")]),t._v("에서 "),a("code",[t._v("gui:=false")]),t._v("를 지정하여 UI 없이 Gazebo를 시작할 수 있습니다.")])]),t._v(" "),a("p",[t._v("튜토리얼 예제는 빈 세계에서 두 개의 Iris 차량을 출력하는 Gazebo 클라이언트 GUI를 오픈합니다.")]),t._v(" "),a("p",[t._v("단일 차량을 관리하는 것과 유사한 방식으로 "),a("em",[t._v("QGroundControl")]),t._v(" 또는 MAVROS를 사용하여 차량을 제어할 수 있습니다.")]),t._v(" "),a("ul",[a("li",[a("em",[t._v("QGroundControl")]),t._v('에는 "초점에 있는" 차량을 선택하는 드롭다운 메뉴가 있습니다.')]),t._v(" "),a("li",[t._v("MAVROS에서는 주제/서비스 경로 앞에 적절한 네임스페이스를 포함하여야 합니다(예: "),a("code",[t._v('<group ns="uav1">')]),t._v("의 경우 "),a("em",[t._v("/uav1/mavros/mission/push")]),t._v(" 사용).")])]),t._v(" "),a("h3",{attrs:{id:"무슨-일이-일어나고-있나요"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#무슨-일이-일어나고-있나요"}},[t._v("#")]),t._v(" 무슨 일이 일어나고 있나요?")]),t._v(" "),a("p",[t._v("각 시뮬레이션 차량에 대하여, 다음 사항들이 필요합니다.")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Gazebo 모델")]),t._v(": "),a("code",[t._v("PX4-Autopilot/Tools/sitl_gazebo/models/rotors_description/urdf/<model>_base.xacro")]),t._v("에서 "),a("code",[t._v("xacro")]),t._v(" 파일로 정의됩니다. "),a("a",{attrs:{href:"https://github.com/PX4/sitl_gazebo/tree/02060a86652b736ca7dd945a524a8bf84eaf5a05/models/rotors_description/urdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("여기"),a("OutboundLink")],1),t._v("를 참고하십시오. 현재 모델 "),a("code",[t._v("xacro")]),t._v(" 파일은 "),a("strong",[t._v("base.xacro")]),t._v("로 끝나는 것으로 가정합니다. 이 모델에는 Gazebo가 PX4 노드와 통신할 UDP 포트를 정의하는 "),a("code",[t._v("mavlink_udp_port")]),t._v("라는 인수가 있어야 합니다. 모델의 "),a("code",[t._v("xacro")]),t._v(" 파일은 선택한 UDP 포트가 포함된 "),a("code",[t._v("urdf")]),t._v(" 모델을 생성하는 데 사용됩니다. UDP 포트를 정의하려면 각 차량의 실행 파일에서 "),a("code",[t._v("mavlink_udp_port")]),t._v("를 설정합니다. 예제는 "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/4d0964385b84dc91189f377aafb039d10850e5d6/launch/multi_uav_mavros_sitl.launch#L37",target:"_blank",rel:"noopener noreferrer"}},[t._v("여기"),a("OutboundLink")],1),t._v("를 참고하십시오.")])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("동일한 차량 모델을 사용하는 경우에는, 각 차량에 대해 별도의 "),a("strong",[a("code",[t._v("xacro")])]),t._v(" 파일이 필요하지 않습니다. 동일한 "),a("strong",[a("code",[t._v("xacro")])]),t._v(" 파일이면 충분합니다.")])]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("PX4 노드")]),t._v(": SITL PX4 앱입니다. Gazebo 차량 모델에 정의된 것과 동일한 UDP 포트(예: "),a("code",[t._v("mavlink_udp_port")]),t._v(")로 시뮬레이터 Gazebo와 통신합니다. PX4 SITL 앱 측에서 UDP 포트를 설정하려면, 앞서 논의한 "),a("code",[t._v("mavlink_udp_port")]),t._v("와 일치하도록 시작 파일의 "),a("code",[t._v("SITL_UDP_PRT")]),t._v(" 매개변수를 설정합니다. "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/4d0964385b84dc91189f377aafb039d10850e5d6/posix-configs/SITL/init/ekf2/iris_2#L46",target:"_blank",rel:"noopener noreferrer"}},[t._v("여기"),a("OutboundLink")],1),t._v("를 참고하십시오. 시작 파일의 시작 파일 경로는 "),a("code",[t._v("차량")]),t._v(" 및 "),a("code",[t._v("ID")]),t._v(" 인수를 기반으로 생성됩니다. "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/4d0964385b84dc91189f377aafb039d10850e5d6/launch/multi_uav_mavros_sitl.launch#L36",target:"_blank",rel:"noopener noreferrer"}},[t._v("여기"),a("OutboundLink")],1),t._v("를 참고하십시오. 시작 파일의 각 차량에 대한 "),a("code",[t._v("MAV_SYS_ID")]),t._v("("),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/4d0964385b84dc91189f377aafb039d10850e5d6/posix-configs/SITL/init/ekf2/iris_2#L4",target:"_blank",rel:"noopener noreferrer"}},[t._v("여기"),a("OutboundLink")],1),t._v(" 참고)는 "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/4d0964385b84dc91189f377aafb039d10850e5d6/launch/multi_uav_mavros_sitl.launch#L25",target:"_blank",rel:"noopener noreferrer"}},[t._v("여기"),a("OutboundLink")],1),t._v("의 시작 파일에 있는 해당 차량의 "),a("code",[t._v("ID")]),t._v("와 일치하여야 합니다. 이렇게 하면 시작 파일과 시작 파일 간에 구성을 일관되게 유지할 수 있습니다.")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("MAVROS 노드")]),t._v(" (선택 사항): 실행 파일에서 별도의 MAVROS 노드를 실행할 수 있습니다. 원하는 경우 "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/4d0964385b84dc91189f377aafb039d10850e5d6/launch/multi_uav_mavros_sitl.launch#L41",target:"_blank",rel:"noopener noreferrer"}},[t._v("여기"),a("OutboundLink")],1),t._v("를 참고하여 PX4 SITL 앱에 연결하세요. ROS를 통해 차량을 제어합니다. 시작 파일의 고유한 포트 집합에서 MAVLink 스트림을 시작하여야 합니다. "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/4d0964385b84dc91189f377aafb039d10850e5d6/posix-configs/SITL/init/ekf2/iris_1#L68",target:"_blank",rel:"noopener noreferrer"}},[t._v("여기"),a("OutboundLink")],1),t._v("를 참고하십시오. 이러한 고유한 포트 세트는 MAVROS 노드의 시작 파일에 있는 포트 세트와 일치하여야 합니다("),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/4d0964385b84dc91189f377aafb039d10850e5d6/launch/multi_uav_mavros_sitl.launch#L26",target:"_blank",rel:"noopener noreferrer"}},[t._v("여기"),a("OutboundLink")],1),t._v(" 참고).")])])]),t._v(" "),a("p",[t._v("시작 파일 "),a("code",[t._v("multi_uav_mavros_sitl.launch")]),t._v("는 다음의 내용을 실행합니다.")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Gazebo에 세계를 로드합니다.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('  \x3c!-- Gazebo sim --\x3e\n  <include file="$(find gazebo_ros)/launch/empty_world.launch">\n      <arg name="gui" value="$(arg gui)"/>\n      <arg name="world_name" value="$(arg world)"/>\n      <arg name="debug" value="$(arg debug)"/>\n      <arg name="verbose" value="$(arg verbose)"/>\n      <arg name="paused" value="$(arg paused)"/>\n  </include>\n')])])])]),t._v(" "),a("li",[a("p",[t._v("각 차량에 대하여")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("xacro에서 urdf 모델을 생성하고, 가제보 모델을 로드하고, PX4 SITL 앱 인스턴스를 실행합니다.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('  \x3c!-- PX4 SITL and vehicle spawn --\x3e\n  <include file="$(find px4)/launch/single_vehicle_spawn.launch">\n      <arg name="x" value="0"/>\n      <arg name="y" value="0"/>\n      <arg name="z" value="0"/>\n      <arg name="R" value="0"/>\n      <arg name="P" value="0"/>\n      <arg name="Y" value="0"/>\n      <arg name="vehicle" value="$(arg vehicle)"/>\n      <arg name="rcS" value="$(find px4)/posix-configs/SITL/init/$(arg est)/$(arg vehicle)_$(arg ID)"/>\n      <arg name="mavlink_tcp_port" value="4560"/>\n      <arg name="ID" value="$(arg ID)"/>\n  </include>\n')])])])]),t._v(" "),a("li",[a("p",[t._v("mavros 노드를 실행합니다.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('  \x3c!-- MAVROS --\x3e\n  <include file="$(find mavros)/launch/px4.launch">\n      <arg name="fcu_url" value="$(arg fcu_url)"/>\n      <arg name="gcs_url" value=""/>\n      <arg name="tgt_system" value="$(arg ID)"/>\n      <arg name="tgt_component" value="1"/>\n  </include>\n')])])])])])])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("각 차량의 완전한 블록은 차량의 ROS 네임스페이스를 구분하기 위해 "),a("code",[t._v("<group>")]),t._v(" 태그 세트로 묶여 있습니다.")])]),t._v(" "),a("p",[t._v("이 시뮬레이션에 세 번째 iris를 추가하려면, 두 가지 주요 구성 요소를 고려하여야 합니다.")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("multi_uav_mavros_sitl.launch")]),t._v("에 "),a("code",[t._v("UAV3")]),t._v("를 추가합니다.\n"),a("ul",[a("li",[t._v("기존 차량("),a("code",[t._v("UAV1")]),t._v(" 또는 "),a("code",[t._v("UAV2")]),t._v(")의 그룹 복제")]),t._v(" "),a("li",[a("code",[t._v("ID")]),t._v(" 인수를 "),a("code",[t._v("3")]),t._v("으로 증가")]),t._v(" "),a("li",[t._v("Gazebo와의 통신을 위해 "),a("code",[t._v("mavlink_udp_port")]),t._v(" 인수에 대해 다른 포트를 선택하십시오.")]),t._v(" "),a("li",[a("code",[t._v("fcu_url")]),t._v(" 인수에서 두 포트 번호를 모두 수정하여 MAVROS 통신용 포트를 선택합니다.")])])]),t._v(" "),a("li",[t._v("시작 파일을 만들고 파일을 다음과 같이 변경합니다.\n"),a("ul",[a("li",[t._v("기존 iris rcS 시작 파일("),a("code",[t._v("iris_1")]),t._v(" 또는 "),a("code",[t._v("iris_2")]),t._v(")의 복사본을 만들고, 이름을 "),a("code",[t._v("iris_3")]),t._v("으로 변경합니다.")]),t._v(" "),a("li",[a("code",[t._v("MAV_SYS_ID")]),t._v(" 값을 "),a("code",[t._v("3")]),t._v("으로 변경")]),t._v(" "),a("li",[a("code",[t._v("mavlink_udp_port")]),t._v(" 실행 파일 인수와 일치하는 "),a("code",[t._v("SITL_UDP_PRT")]),t._v(" 값")]),t._v(" "),a("li",[t._v("첫 번째 "),a("code",[t._v("mavlink 시작")]),t._v(" 포트와 "),a("code",[t._v("mavlink 스트림")]),t._v(" 포트 값을 QGC 통신에 사용되는 동일한 값으로 설정")]),t._v(" "),a("li",[t._v("두 번째 "),a("code",[t._v("mavlink 시작")]),t._v(" 포트는 시작 파일 "),a("code",[t._v("fcu_url")]),t._v(" 인수에 사용된 포트와 일치하여야 합니다.")])])])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("서로 다른 끝점에 대해 어떤 포트가 "),a("code",[t._v("src")]),t._v(" 및 "),a("code",[t._v("dst")]),t._v("인지 확인하십시오.")])]),t._v(" "),a("h2",{attrs:{id:"sdf-모델의-다중-차량"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sdf-모델의-다중-차량"}},[t._v("#")]),t._v(" SDF 모델의 다중 차량")]),t._v(" "),a("p",[t._v("이 섹션에서는 개발자가 Gazebo SDF 파일에 정의된 차량 모델을 사용하여 여러 차량을 시뮬레이션할 수 있는 방법을 설명합니다(이 항목의 나머지 부분에서 설명하는 것처럼 ROS Xacro 파일에 정의된 모델을 사용하는 대신).")]),t._v(" "),a("p",[t._v("단계는 다음과 같습니다:")]),t._v(" "),a("ol",[a("li",[t._v("Linux 터미널에서 "),a("em",[t._v("xmlstarlet")]),t._v("을 설치합니다."),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("sudo apt install xmlstarlet\n")])])])]),t._v(" "),a("li",[a("strong",[t._v("multi_uav_mavros_sitl_sdf.launch")]),t._v(" 실행 파일과 함께 "),a("em",[t._v("roslaunch")]),t._v("를 사용합니다."),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("roslaunch multi_uav_mavros_sitl_sdf.launch vehicle:=<model_file_name>\n")])])])])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("차량 모델 파일 이름 인수는 선택 사항입니다("),a("code",[t._v("vehicle:=<model_file_name>")]),t._v("). 생략하면 기본적으로 "),a("a",{attrs:{href:"https://github.com/PX4/sitl_gazebo/tree/master/models/plane",target:"_blank",rel:"noopener noreferrer"}},[t._v("평면 모델"),a("OutboundLink")],1),t._v("이 사용됩니다.")])]),t._v(" "),a("p",[t._v("이 방법은 생성된 각 차량에 대해 SITL/Gazebo 포트 번호가 _xmstarlet_에 의해 자동으로 삽입되고 SDF 파일에 지정할 필요가 없다는 점을 제외하고 xacro를 사용하는 것과 유사합니다.")]),t._v(" "),a("p",[t._v("새 차량을 추가하려면 모델을 검색 여부를 확인하여야 하고(Gazebo에서 생성하기 위해), PX4에 적절한 시작 스크립트가 있어야 합니다.")]),t._v(" "),a("ol",[a("li",[t._v("다음 중 하나를 실행하도록 선택할 수 있습니다.\n"),a("ul",[a("li",[t._v("모델을 지정하도록 아래 줄을 변경하여 "),a("strong",[t._v("single_vehicle_spawn_sdf.launch")]),t._v(" 파일을 수정하여 모델의 위치를 가리키도록 합니다."),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$(find px4)/Tools/sitl_gazebo/models/$(arg vehicle)/$(arg vehicle).sdf\n")])])])])])])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("모델 경로를 하드코딩한 경우에도, "),a("code",[t._v("차량")]),t._v(" 인수를 설정하여야 합니다.")])]),t._v(" "),a("ul",[a("li",[t._v("모델을 위에 표시된 폴더에 복사합니다(동일한 경로 규칙에 따라).")])]),t._v(" "),a("ol",[a("li",[a("code",[t._v("vehicle")]),t._v(" 인수는 "),a("code",[t._v("PX4_SIM_MODEL")]),t._v(" 환경 변수를 설정에 사용되며, 기본 rcS(시작 스크립트)에서 모델에 해당하는 시작 설정 파일을 찾는 데 사용됩니다. PX4 내에서 이러한 시작 파일은 "),a("strong",[t._v("PX4-Autopilot/ROMFS/px4fmu_common/init.d-posix/")]),t._v(" 디렉토리에서 찾을 수 있습니다. 예를 들어 다음은 비행기 모델의 "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/ROMFS/px4fmu_common/init.d-posix/airframes/1030_plane",target:"_blank",rel:"noopener noreferrer"}},[t._v("시작 스크립트"),a("OutboundLink")],1),t._v("입니다. 이것이 작동하려면 시작 파일의 PX4 노드에 "),a("em",[t._v("rcS")]),t._v(" 파일("),a("strong",[t._v("etc/init.d/rcS")]),t._v(")과 rootfs 디렉토리("),a("code",[t._v("$(find px4)/build_px4_sitl_default/etc")]),t._v(") 등의 위치를 지정하는 인수가 전달됩니다. 단순화를 위하여 모델의 시작 파일을 **PX4-Autopilot/ROMFS/px4fmu_common/init.d-posix/**에서 PX4와 함께 배치하는 것이 좋습니다.")])]),t._v(" "),a("h2",{attrs:{id:"추가-자료"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#추가-자료"}},[t._v("#")]),t._v(" 추가 자료")]),t._v(" "),a("ul",[a("li",[t._v("UDP 포트 설정은 "),a("RouterLink",{attrs:{to:"/ko/simulation/"}},[t._v("시뮬레이션")]),t._v("을 참고하십시오.")],1),t._v(" "),a("li",[t._v("xacro로 모델 생성에 대한 자세한 내용은 "),a("a",{attrs:{href:"http://gazebosim.org/tutorials/?tut=ros_urdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Gazebo의 URDF"),a("OutboundLink")],1),t._v("를 참고하십시오.")]),t._v(" "),a("li",[t._v("더 많은 xacro 모델은 "),a("a",{attrs:{href:"https://github.com/ethz-asl/rotors_simulator/tree/master/rotors_description/urdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("RotorS"),a("OutboundLink")],1),t._v("를 참고하십시오.")])])])}),[],!1,null,null,null);e.default=s.exports}}]);