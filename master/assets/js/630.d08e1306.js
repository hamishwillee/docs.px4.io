(window.webpackJsonp=window.webpackJsonp||[]).push([[630],{1278:function(s,t,a){s.exports=a.p+"assets/img/px4_sitl_overview.c2ef9c51.png"},2253:function(s,t,a){"use strict";a.r(t);var e=a(19),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"가제보-모의-시험-환경의-ros"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#가제보-모의-시험-환경의-ros"}},[s._v("#")]),s._v(" 가제보 모의 시험 환경의 ROS")]),s._v(" "),e("p",[e("RouterLink",{attrs:{to:"/ko/ros/"}},[s._v("ROS")]),s._v(" (로봇 운영체제)는 PX4와 "),e("RouterLink",{attrs:{to:"/ko/simulation/gazebo.html"}},[s._v("가제보 모의 시험 환경")]),s._v("을 함께 쓸 수 있습니다. ROS는 PX4와 통신하는 "),e("RouterLink",{attrs:{to:"/ko/ros/mavros_installation.html"}},[s._v("MAVROS")]),s._v(" MAVLink 노드를 활용합니다.")],1),s._v(" "),e("p",[s._v("ROS/가제보의 PX4와의 통합시 다음 다이어그램 패턴을 따릅니다("),e("em",[s._v("일반")]),s._v(" "),e("RouterLink",{attrs:{to:"/ko/simulation/#sitl-simulation-environment"}},[s._v("PX4 모의 시험 환경")]),s._v("을 보여줍니다). PX4는 모의 시험 환경(예: 가제보)과 통신하여 모의 환경으로부터 오는 센서 데이터를 받고 모터와 액츄에이터 값을 내보냅니다. 지상 통제 장치와 모의 환경과 수신 명령으로부터 텔레메트리 전송을 시행하는 보드 외부 장치 API(예: ROS)와 통신을 수행합니다.")],1),s._v(" "),e("p",[e("img",{attrs:{src:a(1278),alt:"PX4 SITL 개요"}})]),s._v(" "),e("p",[s._v("우분투 리눅스에서 ROS로 PX4 모의 시험 환경을 구성하는 가장 쉬운 방법은 "),e("RouterLink",{attrs:{to:"/ko/dev_setup/dev_env_linux_ubuntu.html#rosgazebo"}},[s._v("리눅스 개발 환경 > ROS와 가제보")]),s._v('에서 찾을 수 있는 표준 설치 스크립트의 활용입니다. 스크립트는 필요한 모든 구성 항목, PX4, ROS "키네틱", 가제보 7 모의 시험 환경, '),e("RouterLink",{attrs:{to:"/ko/ros/mavros_installation.html"}},[s._v("MAVROS")]),s._v("를 설치합니다.")],1),s._v(" "),e("h2",{attrs:{id:"ros와-가제보-설치"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ros와-가제보-설치"}},[s._v("#")]),s._v(" ROS와 가제보 설치")]),s._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[s._v("Note")]),s._v(" "),e("p",[e("em",[s._v("ROS")]),s._v(" is only supported on Linux (not macOS or Windows).")])]),s._v(" "),e("p",[s._v("The easiest way to setup PX4 simulation with ROS on Ubuntu Linux is to use the standard installation script that can be found at "),e("RouterLink",{attrs:{to:"/ko/dev_setup/dev_env_linux_ubuntu.html#rosgazebo"}},[s._v("Development Environment on Linux > Gazebo with ROS")]),s._v('. The script installs everything you need: PX4, ROS "Melodic", the Gazebo 9 simulator, and '),e("RouterLink",{attrs:{to:"/ko/ros/mavros_installation.html"}},[s._v("MAVROS")]),s._v(".")],1),s._v(" "),e("p",[s._v("가제보 모의 시험 환경은 ROS 토픽에 데이터를 직접 내보내는 센서를 붙일 용도로 수정할 수 있습니다. 예를 들면 가제보 ROS 레이저 플러그인이 있습니다. 이 기능을 지원하려면, 가제보를 적당한 ROS 래퍼와 함께 실행해야합니다.")]),s._v(" "),e("h2",{attrs:{id:"ros-모의-시험-환경-실행"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ros-모의-시험-환경-실행"}},[s._v("#")]),s._v(" ROS/모의 시험 환경 실행")]),s._v(" "),e("p",[s._v("ROS에 래핑한 모의 시험 환경을 실행할 수 있는 ROS 실행 스크립트가 있습니다:")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("roslaunch mavros px4.launch fcu_url:"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"udp://:14540@192.168.1.36:14557"')]),s._v("\n")])])]),e("p",[s._v("ROS에 래핑한 SITL을 실행하려면 ROS 환경을 업데이트한 후 늘상 하던 방식대로 실행하십시오:")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("roslaunch mavros px4.launch fcu_url:"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"udp://:14540@127.0.0.1:14557"')]),s._v("\n")])])]),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[s._v("Note")]),s._v(" "),e("p",[s._v("It can be useful to call "),e("em",[s._v("roslaunch")]),s._v(" with the "),e("code",[s._v("-w")]),s._v(" (warn) and/or "),e("code",[s._v("-v")]),s._v(" (verbose) in order to get warnings about missing dependencies in your setup. For example:")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("PX4-Autopilot_clone"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DONT_RUN")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" px4_sitl_default gazebo\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" ~/catkin_ws/devel/setup.bash    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# (optional)")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" Tools/setup_gazebo.bash "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("/build/px4_sitl_default\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ROS_PACKAGE_PATH")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ROS_PACKAGE_PATH")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ROS_PACKAGE_PATH")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ROS_PACKAGE_PATH")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("/Tools/sitl_gazebo\nroslaunch px4 posix_sitl.launch\n")])])]),e("p",[s._v("위에서 언급한 실행 파일 중 하를 여러분의 실행 파일 목록에 넣어 ROS 프로그램을 모의 시험 환경에서 실행할 수 있게 하십시오.")]),s._v(" "),e("h2",{attrs:{id:"ros-래퍼로-가제보-실행"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ros-래퍼로-가제보-실행"}},[s._v("#")]),s._v(" ROS 래퍼로 가제보 실행")]),s._v(" "),e("p",[s._v("The Gazebo simulation can be modified to integrate sensors publishing directly to ROS topics e.g. the Gazebo ROS laser plugin. To support this feature, Gazebo must be launched with the appropriate ROS wrappers.")]),s._v(" "),e("p",[s._v("우선 아래 명령으로 모의 시험 환경을 시작하십시오:")]),s._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/launch/posix_sitl.launch",target:"_blank",rel:"noopener noreferrer"}},[s._v("posix_sitl.launch"),e("OutboundLink")],1),s._v(": 생짜 SITL 실행")]),s._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/launch/mavros_posix_sitl.launch",target:"_blank",rel:"noopener noreferrer"}},[s._v("mavros_posix_sitl.launch"),e("OutboundLink")],1),s._v(": SITL과 MAVROS")])]),s._v(" "),e("p",[s._v("콘솔 화면은 다음과 같이 나타납니다:")]),s._v(" "),e("p",[s._v("이제 새 터미널에서 가제보 메뉴를 통해 아이리스 모델을 넣을 수 있는지 확인하십시오. 이 과정을 수행하려면 적당한 "),e("code",[s._v("sitl_gazebo")]),s._v(" 폴더를 환경 변수에 설정하십시오.")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("no_sim")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" px4_sitl_default gazebo\n")])])]),e("p",[s._v("Include one of the above mentioned launch files in your own launch file to run your ROS application in the simulation.")]),s._v(" "),e("h2",{attrs:{id:"움직임-뒤에서-일어나는-일"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#움직임-뒤에서-일어나는-일"}},[s._v("#")]),s._v(" 움직임 뒤에서 일어나는 일")]),s._v(" "),e("p",[s._v("This section shows how the "),e("em",[s._v("roslaunch")]),s._v(" instructions provided previously actually work (you can follow them to manually launch the simulation and ROS).")]),s._v(" "),e("p",[s._v("First start the simulator using the command below:")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("no_sim")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" px4_sitl_default gazebo\n")])])]),e("p",[s._v("The console will look like this:")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("init"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" shell id: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("46979166467136")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("init"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" task name: px4\n\n______  __   __    ___\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" ___ "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" / /   /   "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("_/ /  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" V /   / /"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  __/   /   "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("  / /_"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("     / /^"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("___  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("_"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("     "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("/   "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("/     "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("_/\n\nReady to fly.\n\n\nINFO  LED::init\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("729")]),s._v(" DevObj::init led\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("736")]),s._v(" Added driver 0x2aba34001080 /dev/led0\nINFO  LED::init\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("742")]),s._v(" DevObj::init led\nINFO  Not using /dev/ttyACM0 "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" radio control input. Assuming joystick input via MAVLink.\nINFO  Waiting "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" initial data on UDP. Please start the flight simulator to proceed"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("\n")])])]),e("p",[s._v("Now in a new terminal make sure you will be able to insert the Iris model through the Gazebo menus, to do this set your environment variables to include the appropriate "),e("code",[s._v("sitl_gazebo")]),s._v(" folders.")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("roslaunch gazebo_ros empty_world.launch world_name:"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("/Tools/sitl_gazebo/worlds/iris.world\n")])])]),e("p",[s._v("Now start Gazebo like you would when working with ROS and insert the Iris quadcopter model. Once the Iris is loaded it will automatically connect to the px4 app.")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("roslaunch gazebo_ros empty_world.launch world_name:"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("/Tools/sitl_gazebo/worlds/iris.world\n")])])])])])}),[],!1,null,null,null);t.default=n.exports}}]);