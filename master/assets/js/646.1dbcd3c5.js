(window.webpackJsonp=window.webpackJsonp||[]).push([[646],{1320:function(s,a,t){s.exports=t.p+"assets/img/px4_sitl_overview.c2ef9c51.png"},2615:function(s,a,t){"use strict";t.r(a);var e=t(19),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"ros-gazebo-시뮬레이션"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ros-gazebo-시뮬레이션"}},[s._v("#")]),s._v(" ROS Gazebo 시뮬레이션")]),s._v(" "),e("p",[e("RouterLink",{attrs:{to:"/ko/ros/"}},[s._v("ROS")]),s._v("(로봇 운영 체제)는 PX4 및 "),e("RouterLink",{attrs:{to:"/ko/simulation/gazebo.html"}},[s._v("Gazebo 시뮬레이터")]),s._v("와 함께 사용할 수 있습니다. "),e("RouterLink",{attrs:{to:"/ko/ros/mavros_installation.html"}},[s._v("MAVROS")]),s._v(" MAVLink 노드를 사용하여 PX4와 통신합니다.")],1),s._v(" "),e("p",[s._v("ROS/Gazebo와 PX4의 통합은 아래 다이어그램의 패턴을 따릅니다(이는 "),e("em",[s._v("일반")]),s._v(" "),e("RouterLink",{attrs:{to:"/ko/simulation/#sitl-simulation-environment"}},[s._v("PX4 시뮬레이션 환경")]),s._v("을 나타냄). PX4는 시뮬레이터(예: Gazebo)와 통신하여 시뮬레이션된 세계에서 센서 데이터를 수신하고 모터 및 액추에이터 값을 전송합니다. GCS 및 Offboard API(예: ROS)와 통신하여 시뮬레이션된 환경에서 텔레메트리 데이터를 전송하고 명령을 수신합니다.")],1),s._v(" "),e("p",[e("img",{attrs:{src:t(1320),alt:"PX4 SITL 개요"}})]),s._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[s._v("Note")]),s._v(" "),e("p",[s._v('"정상 동작"과의 유일한 '),e("em",[s._v("약간의")]),s._v(' 차이점은 ROS가 포트 14557에서 연결을 시작하지만, 오프보드 API가 UDP 포트 14540에서 연결을 수신 대기하는 것이 더 일반적입니다. 스크립트는 필요한 모든 구성 항목, PX4, ROS "키네틱", 가제보 7 모의 시험 환경, '),e("RouterLink",{attrs:{to:"/ko/ros/mavros_installation.html"}},[s._v("MAVROS")]),s._v("를 설치합니다.")],1),s._v(" "),e("h2",{attrs:{id:"ros와-가제보-설치"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ros와-가제보-설치"}},[s._v("#")]),s._v(" ROS와 가제보 설치")]),s._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[s._v("Note")]),s._v(" "),e("p",[e("em",[s._v("ROS")]),s._v("는 Linux(MacOS와 Windows 제외)에서만 지원됩니다.")])])]),s._v(" "),e("p",[s._v("Ubuntu Linux에서 ROS로 PX4 시뮬레이션을 설정하는 가장 쉬운 방법은 "),e("RouterLink",{attrs:{to:"/ko/dev_setup/dev_env_linux_ubuntu.html#rosgazebo"}},[s._v("Linux의 개발 환경 > ROS Gazebo")]),s._v('의 표준 설치 스크립트를 사용하는 것입니다. 스크립트는 PX4, ROS "Melodic", Gazebo 9 시뮬레이터 및 '),e("RouterLink",{attrs:{to:"/ko/ros/mavros_installation.html"}},[s._v("MAVROS")]),s._v("와 같이 필요한 모든 것을 설치합니다.")],1),s._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[s._v("Note")]),s._v(" "),e("p",[s._v("스크립트는 Gazebo 9가 포함된 "),e("a",{attrs:{href:"http://wiki.ros.org/melodic/Installation/Ubuntu",target:"_blank",rel:"noopener noreferrer"}},[s._v('표준 ROS "Melodic" 설치 지침'),e("OutboundLink")],1),s._v("을 따릅니다. 이 기능을 지원하려면, 가제보를 적당한 ROS 래퍼와 함께 실행해야합니다.")]),s._v(" "),e("h2",{attrs:{id:"ros-시뮬레이션-실행"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ros-시뮬레이션-실행"}},[s._v("#")]),s._v(" ROS 시뮬레이션 실행")]),s._v(" "),e("p",[s._v("아래 명령을 사용하여 시뮬레이션을 시작하고, "),e("RouterLink",{attrs:{to:"/ko/ros/mavros_installation.html"}},[s._v("MAVROS")]),s._v("를 통해 시뮬레이션에 ROS를 연결할 수 있습니다. 여기서 "),e("code",[s._v("fcu_url")]),s._v("은 시뮬레이션을 실행하는 컴퓨터의 IP/포트입니다.")],1),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("roslaunch mavros px4.launch fcu_url:"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"udp://:14540@192.168.1.36:14557"')]),s._v("\n")])])]),e("p",[s._v("localhost에 연결하려면 다음 URL을 사용하십시오.")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("roslaunch mavros px4.launch fcu_url:"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"udp://:14540@127.0.0.1:14557"')]),s._v("\n")])])]),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[s._v("Note")]),s._v(" "),e("p",[s._v("누락에 대한 경고를 표시하기 위하여 "),e("code",[s._v("-w")]),s._v("(경고) 및/또는 "),e("code",[s._v("-v")]),s._v("(상세)와 함께 "),e("em",[s._v("roslaunch")]),s._v("를 호출하는 것이 유용할 수 있습니다. 예:")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("roslaunch mavros px4.launch fcu_url:"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"udp://:14540@127.0.0.1:14557"')]),s._v("\n")])])]),e("p",[s._v("위에서 언급한 실행 파일 중 하를 여러분의 실행 파일 목록에 넣어 ROS 프로그램을 모의 시험 환경에서 실행할 수 있게 하십시오.")]),s._v(" "),e("h2",{attrs:{id:"ros-래퍼로-gazebo-실행"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ros-래퍼로-gazebo-실행"}},[s._v("#")]),s._v(" ROS 래퍼로 Gazebo 실행")]),s._v(" "),e("p",[s._v("Gazebo 시뮬레이션을 수정하여 ROS 주제에 직접 게시하는 센서(예: Gazebo ROS 레이저 플러그인)를 통합할 수 있습니다. 이 기능을 지원하려면 적절한 ROS 래퍼로 Gazebo를 시작하여야 합니다.")]),s._v(" "),e("p",[s._v("ROS로 래핑된 시뮬레이션을 실행하는 데 사용할 수 있는 ROS 시작 스크립트가 있습니다.")]),s._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/launch/posix_sitl.launch",target:"_blank",rel:"noopener noreferrer"}},[s._v("posix_sitl.launch"),e("OutboundLink")],1),s._v(": plain SITL launch")]),s._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/launch/mavros_posix_sitl.launch",target:"_blank",rel:"noopener noreferrer"}},[s._v("mavros_posix_sitl.launch"),e("OutboundLink")],1),s._v(": SITL과 MAVROS")])]),s._v(" "),e("p",[s._v("ROS에 래핑된 SITL을 실행하려면 ROS 환경을 업데이트한 다음, 평소와 같이 시작하여야 합니다.")]),s._v(" "),e("p",[s._v("(선택 사항): 소스에서 MAVROS 또는 다른 ROS 패키지를 컴파일한 경우에만 catkin 작업 공간을 소싱합니다.")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("PX4-Autopilot_clone"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DONT_RUN")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" px4_sitl_default gazebo\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" ~/catkin_ws/devel/setup.bash    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# (optional)")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" Tools/setup_gazebo.bash "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("/build/px4_sitl_default\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ROS_PACKAGE_PATH")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ROS_PACKAGE_PATH")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ROS_PACKAGE_PATH")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ROS_PACKAGE_PATH")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("/Tools/sitl_gazebo\nroslaunch px4 posix_sitl.launch\n")])])]),e("p",[s._v("위에서 언급한 시작 파일 중 하나를 자체 시작 파일에 포함하여, 시뮬레이션에서 ROS 애플리케이션을 실행합니다.")]),s._v(" "),e("h2",{attrs:{id:"움직임-뒤에서-일어나는-일"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#움직임-뒤에서-일어나는-일"}},[s._v("#")]),s._v(" 움직임 뒤에서 일어나는 일")]),s._v(" "),e("p",[s._v("이 섹션에서는 이전에 제공된 "),e("em",[s._v("roslaunch")]),s._v(" 지침이 실제로 어떻게 작동하는 지 설명합니다(시뮬레이션 및 ROS를 수동으로 시작하려면 지침을 따를 수 있습니다).")]),s._v(" "),e("p",[s._v("아래 명령어를 사용하여 시뮬레이터를 시작합니다.")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("no_sim")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" px4_sitl_default gazebo\n")])])]),e("p",[s._v("콘솔 화면은 다음과 같이 나타납니다:")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("init"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" shell id: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("46979166467136")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("init"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" task name: px4\n\n______  __   __    ___\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" ___ "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" / /   /   "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("_/ /  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" V /   / /"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  __/   /   "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("  / /_"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("     / /^"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("___  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("_"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("     "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("/   "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("/     "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("_/\n\nReady to fly.\n\n\nINFO  LED::init\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("729")]),s._v(" DevObj::init led\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("736")]),s._v(" Added driver 0x2aba34001080 /dev/led0\nINFO  LED::init\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("742")]),s._v(" DevObj::init led\nINFO  Not using /dev/ttyACM0 "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" radio control input. Assuming joystick input via MAVLink.\nINFO  Waiting "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" initial data on UDP. Please start the flight simulator to proceed"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("\n")])])]),e("p",[s._v("새 터미널에서 Gazebo 메뉴를 통해 Iris 모델을 삽입할 수 있는 지 확인하십시오. 이렇게 하려면, 적절한 "),e("code",[s._v("sitl_gazebo")]),s._v(" 폴더를 포함하도록 환경 변수를 설정하십시오.")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("PX4-Autopilot_clone"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" Tools/setup_gazebo.bash "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("/build/px4_sitl_default\n")])])]),e("p",[s._v("이제 ROS로 작업할 때와 같이, Gazebo를 시작하고 Iris 쿼드콥터 모델을 삽입합니다. Iris가 로드되면 자동으로 px4 앱에 연결됩니다.")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("roslaunch gazebo_ros empty_world.launch world_name:"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("/Tools/sitl_gazebo/worlds/iris.world\n")])])])])])])}),[],!1,null,null,null);a.default=r.exports}}]);