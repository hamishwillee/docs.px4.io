(window.webpackJsonp=window.webpackJsonp||[]).push([[1499],{2708:function(t,s,a){"use strict";a.r(s);var e=a(19),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"ros-mavros-설치-가이드"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ros-mavros-설치-가이드"}},[t._v("#")]),t._v(" ROS/MAVROS 설치 가이드")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://wiki.ros.org/mavros#mavros.2BAC8-Plugins.sys_status",target:"_blank",rel:"noopener noreferrer"}},[t._v("mavros"),a("OutboundLink")],1),t._v("는 MAVLink 지원 자동조종장치, 지상국 또는 주변 장치에 대해 ROS(1)를 실행하는 컴퓨터 간에 MAVLink 확장 통신을 가능하게 하는 ROS(1) 패키지입니다. "),a("em",[t._v("MAVROS")]),t._v('는 ROS(1)와 MAVLink 프로토콜 간의 "공식" 지원 브리지입니다.')]),t._v(" "),a("p",[t._v("MAVROS를 사용하여 모든 MAVLink 지원 자동 조종 장치와 통신할 수 있지만, PX4 자동조종장치와 ROS(1) 지원 컴퓨터 간의 통신 설정 방법을 설명합니다.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("Ubuntu Linux에서 ROS로 PX4 시뮬레이션을 설정하는 가장 쉬운 방법은 표준 설치 스크립트를 사용하는 것입니다. 스크립트는 "),a("RouterLink",{attrs:{to:"/ko/dev_setup/dev_env_linux_ubuntu.html#rosgazebo"}},[t._v("Linux의 개발 환경 > ROS Gazebo")]),t._v("를 참고하십시오.")],1),t._v(" "),a("p",[t._v("스크립트는 이 주제에서 다루는 설치 지침을 자동화하여, PX4, ROS, Gazebo 시뮬레이터 및 "),a("RouterLink",{attrs:{to:"/ko/ros/mavros_installation.html"}},[t._v("MAVROS")]),t._v("에 필요한 것들을 설치합니다.")],1)]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("Note PX4 개발 팀은 모든 사용자가 "),a("RouterLink",{attrs:{to:"/ko/ros/ros2.html"}},[t._v("ROS 2로 업그레이드")]),t._v('를 권장합니다. 이 문서는 "이전 접근 방식"을 설명합니다.')],1)]),t._v(" "),a("h2",{attrs:{id:"자료"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#자료"}},[t._v("#")]),t._v(" 자료")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://wiki.ros.org/mavros#mavros.2BAC8-Plugins.sys_status",target:"_blank",rel:"noopener noreferrer"}},[t._v("mavros ROS 패키지 요약"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/mavlink/mavros/",target:"_blank",rel:"noopener noreferrer"}},[t._v("mavros 소스"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://wiki.ros.org/melodic/Installation",target:"_blank",rel:"noopener noreferrer"}},[t._v("ROS Melodic 설치 방법"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"설치"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#설치"}},[t._v("#")]),t._v(" 설치")]),t._v(" "),a("p",[t._v("MAVROS는 소스나 실행파일로 설치할 수 있습니다. 개발자는 소스로 설치하는 것이 좋습니다.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("이 지침은 "),a("a",{attrs:{href:"https://github.com/mavlink/mavros/tree/master/mavros#installation",target:"_blank",rel:"noopener noreferrer"}},[t._v("공식 설치 가이드"),a("OutboundLink")],1),t._v("를 단순화한 버전입니다. 이 문서에서는 "),a("em",[t._v("ROS Melodic")]),t._v(" 배포판을 다룹니다.")])]),t._v(" "),a("h3",{attrs:{id:"바이너리-설치-debian-ubuntu"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#바이너리-설치-debian-ubuntu"}},[t._v("#")]),t._v(" 바이너리 설치(Debian/Ubuntu)")]),t._v(" "),a("p",[t._v("ROS 저장소에는 Ubuntu x86, amd64(x86_64) 및 armhf(ARMv7)용 바이너리 패키지가 있습니다. Kinetic은 Debian Jessie amd64 및 arm64(ARMv8)도 지원합니다.")]),t._v(" "),a("p",[a("code",[t._v("apt-get")]),t._v(" 명령어를 사용하여 설치하십시오.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("sudo apt-get install ros-kinetic-mavros ros-kinetic-mavros-extras\n")])])]),a("p",[t._v("그런 다음, "),a("code",[t._v("install_geographiclib_datasets.sh")]),t._v(" 스크립트를 실행하여 "),a("a",{attrs:{href:"https://geographiclib.sourceforge.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("GeographicLib"),a("OutboundLink")],1),t._v(" 데이터세트를 설치합니다.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("wget https://raw.githubusercontent.com/mavlink/mavros/master/mavros/scripts/install_geographiclib_datasets.sh\nsudo bash ./install_geographiclib_datasets.sh   \n")])])]),a("h3",{attrs:{id:"소스-설치"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#소스-설치"}},[t._v("#")]),t._v(" 소스 설치")]),t._v(" "),a("p",[t._v("이 설치는 "),a("code",[t._v("~/catkin_ws")]),t._v("에 catkin 작업 공간에서 설치합니다.")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p ~/catkin_ws/src\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~/catkin_ws\ncatkin init\nwstool init src\n")])])]),a("p",[t._v("이 설치에는 ROS Python 도구인 "),a("em",[t._v("wstool")]),t._v("(소스 검색용), "),a("em",[t._v("rosinstall")]),t._v(" 및 "),a("em",[t._v("catkin_tools")]),t._v("(빌딩)를 사용할 것입니다. 다음 명령어를 사용하여 ROS를 설치할 수 있습니다.")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" python-catkin-tools python-rosinstall-generator -y\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("패키지는 "),a("strong",[t._v("catkin_make")]),t._v("를 사용하여 빌드할 수 있지만, 선호하는 방법은 "),a("strong",[t._v("catkin_tools")]),t._v("를 사용하는 것입니다. 이는 편리한 빌드 도구이기 때문입니다.")])]),t._v(" "),a("p",[t._v("wstool을 처음 사용하는 경우 다음을 사용하여 소스 공간을 초기화합니다.")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ wstool init ~/catkin_ws/src\n")])])]),a("p",[t._v("이제 빌드할 준비가 되었습니다.")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("MAVLink를 설치합니다.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# 모든 ROS 배포판에 대해 Kinetic 참조를 사용합니다. 배포판에 국한되지 않고 최신 상태이기 때문입니다.\nrosinstall_generator --rosdistro kinetic mavlink | tee /tmp/mavros.rosinstall\n")])])])]),t._v(" "),a("li",[a("p",[t._v("릴리스 또는 최신 버전을 사용하여 소스에서 MAVROS를 설치합니다.")]),t._v(" "),a("ul",[a("li",[t._v("출시/안정"),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("rosinstall_generator --upstream mavros | tee -a /tmp/mavros.rosinstall\n")])])])]),t._v(" "),a("li",[t._v("최신 소스"),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("rosinstall_generator --upstream-development mavros "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tee")]),t._v(" -a /tmp/mavros.rosinstall\n")])])]),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# For fetching all the dependencies into your catkin_ws, ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# just add '--deps' to the above scripts, E.g.:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   rosinstall_generator --upstream mavros --deps | tee -a /tmp/mavros.rosinstall")]),t._v("\n")])])])])])]),t._v(" "),a("li",[a("p",[t._v("작업 공간과 의존성 만들기")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("wstool merge -t src /tmp/mavros.rosinstall\nwstool update -t src -j4\nrosdep install --from-paths src --ignore-src -y\n")])])])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://geographiclib.sourceforge.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("GeographicLib"),a("OutboundLink")],1),t._v(" 데이터세트를 설치합니다.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("./src/mavros/mavros/scripts/install_geographiclib_datasets.sh\n")])])])]),t._v(" "),a("li",[a("p",[t._v("소스를 빌드합니다.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("catkin build\n")])])])]),t._v(" "),a("li",[a("p",[t._v("작업 공간에서 setup.bash 또는 setup.zsh를 사용하는지 확인하십시오.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("#Needed 또는 rosrun이 이 작업 공간에서 노드를 찾을 수 없습니다.\nsource devel/setup.bash\n")])])])])]),t._v(" "),a("p",[t._v("오류가 발생하면, "),a("a",{attrs:{href:"https://github.com/mavlink/mavros/tree/master/mavros#installation",target:"_blank",rel:"noopener noreferrer"}},[t._v("mavros repo"),a("OutboundLink")],1),t._v("에서 추가 설치 및 문제 해결을 참고하십시오.")]),t._v(" "),a("h2",{attrs:{id:"mavros-예제"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mavros-예제"}},[t._v("#")]),t._v(" MAVROS 예제")]),t._v(" "),a("p",[t._v("MAVROS "),a("RouterLink",{attrs:{to:"/ko/ros/mavros_offboard.html"}},[t._v("오프보드 제어 예제")]),t._v("는 원격 측정 읽기, 드론 상태 확인, 비행 모드 변경 및 드론 제어부터 MAVROS의 기본 사항들을 설명합니다.")],1),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("PX4와 MAVROS를 사용하는 예제 앱이 있으면, 문서에서 다운로드할 수 있도록 도와드릴 수 있습니다.")])])])}),[],!1,null,null,null);s.default=r.exports}}]);