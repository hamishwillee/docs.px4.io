(window.webpackJsonp=window.webpackJsonp||[]).push([[846],{1525:function(s,a,t){s.exports=t.p+"assets/img/px4_sitl_overview.c2ef9c51.png"},3153:function(s,a,t){"use strict";t.r(a);var e=t(19),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"ros-with-gazebo-classic-simulation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ros-with-gazebo-classic-simulation"}},[s._v("#")]),s._v(" ROS with Gazebo Classic Simulation")]),s._v(" "),e("p",[e("RouterLink",{attrs:{to:"/ko/ros/"}},[s._v("ROS")]),s._v(" (Robot Operating System) can be used with PX4 and the "),e("RouterLink",{attrs:{to:"/ko/sim_gazebo_classic/"}},[s._v("Gazebo Classic")]),s._v(" simulator. "),e("RouterLink",{attrs:{to:"/ko/ros/mavros_installation.html"}},[s._v("MAVROS")]),s._v(" MAVLink 노드를 사용하여 PX4와 통신합니다.")],1),s._v(" "),e("p",[s._v("The ROS/Gazebo Classic integration with PX4 follows the pattern in the diagram below (this shows the "),e("em",[s._v("generic")]),s._v(" "),e("RouterLink",{attrs:{to:"/ko/simulation/#sitl-simulation-environment"}},[s._v("PX4 simulation environment")]),s._v("). PX4 communicates with the simulator (e.g. Gazebo Classic) to receive sensor data from the simulated world and send motor and actuator values. GCS 및 Offboard API(예: ROS)와 통신하여 시뮬레이션된 환경에서 텔레메트리 데이터를 전송하고 명령을 수신합니다.")],1),s._v(" "),e("p",[e("img",{attrs:{src:t(1525),alt:"PX4 SITL 개요"}})]),s._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[s._v("Note")]),s._v(" "),e("p",[s._v('"정상 동작"과의 유일한 '),e("em",[s._v("약간의")]),s._v(' 차이점은 ROS가 포트 14557에서 연결을 시작하지만, 오프보드 API가 UDP 포트 14540에서 연결을 수신 대기하는 것이 더 일반적입니다. 스크립트는 필요한 모든 구성 항목, PX4, ROS "키네틱", 가제보 7 모의 시험 환경, '),e("RouterLink",{attrs:{to:"/ko/ros/mavros_installation.html"}},[s._v("MAVROS")]),s._v("를 설치합니다.")],1),s._v(" "),e("h2",{attrs:{id:"installing-ros-and-gazebo-classic"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installing-ros-and-gazebo-classic"}},[s._v("#")]),s._v(" Installing ROS and Gazebo Classic")]),s._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[s._v("Note")]),s._v(" "),e("p",[e("em",[s._v("ROS")]),s._v("는 Linux(MacOS와 Windows 제외)에서만 지원됩니다.")])])]),s._v(" "),e("p",[s._v("Ubuntu Linux에서 ROS로 PX4 시뮬레이션을 설정하는 가장 쉬운 방법은 "),e("RouterLink",{attrs:{to:"/ko/dev_setup/dev_env_linux_ubuntu.html#rosgazebo"}},[s._v("Linux의 개발 환경 > ROS Gazebo")]),s._v('의 표준 설치 스크립트를 사용하는 것입니다. The script installs everything you need: PX4, ROS "Melodic", the Gazebo Classic 9 simulator, and '),e("RouterLink",{attrs:{to:"/ko/ros/mavros_installation.html"}},[s._v("MAVROS")]),s._v(".")],1),s._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[s._v("Note")]),s._v(" "),e("p",[s._v("스크립트는 Gazebo 9가 포함된 "),e("a",{attrs:{href:"http://wiki.ros.org/melodic/Installation/Ubuntu",target:"_blank",rel:"noopener noreferrer"}},[s._v('표준 ROS "Melodic" 설치 지침'),e("OutboundLink")],1),s._v("을 따릅니다. 이 기능을 지원하려면, 가제보를 적당한 ROS 래퍼와 함께 실행해야합니다.")]),s._v(" "),e("h2",{attrs:{id:"ros-시뮬레이션-실행"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ros-시뮬레이션-실행"}},[s._v("#")]),s._v(" ROS 시뮬레이션 실행")]),s._v(" "),e("p",[s._v("아래 명령을 사용하여 시뮬레이션을 시작하고, "),e("RouterLink",{attrs:{to:"/ko/ros/mavros_installation.html"}},[s._v("MAVROS")]),s._v("를 통해 시뮬레이션에 ROS를 연결할 수 있습니다. 여기서 "),e("code",[s._v("fcu_url")]),s._v("은 시뮬레이션을 실행하는 컴퓨터의 IP/포트입니다.")],1),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("roslaunch mavros px4.launch fcu_url:"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"udp://:14540@192.168.1.36:14557"')]),s._v("\n")])])]),e("p",[s._v("localhost에 연결하려면 다음 URL을 사용하십시오.")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("roslaunch mavros px4.launch fcu_url:"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"udp://:14540@127.0.0.1:14557"')]),s._v("\n")])])]),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[s._v("Note")]),s._v(" "),e("p",[s._v("It can be useful to call "),e("em",[s._v("roslaunch")]),s._v(" with the "),e("code",[s._v("-w NUM_WORKERS")]),s._v(" (override number of worker threads) and/or "),e("code",[s._v("-v")]),s._v(" (verbose) in order to get warnings about missing dependencies in your setup. 예:")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("roslaunch mavros px4.launch fcu_url:"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"udp://:14540@127.0.0.1:14557"')]),s._v("\n")])])]),e("p",[s._v("위에서 언급한 실행 파일 중 하를 여러분의 실행 파일 목록에 넣어 ROS 프로그램을 모의 시험 환경에서 실행할 수 있게 하십시오.")]),s._v(" "),e("h2",{attrs:{id:"launching-gazebo-classic-with-ros-wrappers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#launching-gazebo-classic-with-ros-wrappers"}},[s._v("#")]),s._v(" Launching Gazebo Classic with ROS Wrappers")]),s._v(" "),e("p",[s._v("The Gazebo Classic simulation can be modified to integrate sensors publishing directly to ROS topics e.g. the Gazebo Classic ROS laser plugin. To support this feature, Gazebo Classic must be launched with the appropriate ROS wrappers.")]),s._v(" "),e("p",[s._v("ROS로 래핑된 시뮬레이션을 실행하는 데 사용할 수 있는 ROS 시작 스크립트가 있습니다.")]),s._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/launch/posix_sitl.launch",target:"_blank",rel:"noopener noreferrer"}},[s._v("posix_sitl.launch"),e("OutboundLink")],1),s._v(": plain SITL launch")]),s._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/launch/mavros_posix_sitl.launch",target:"_blank",rel:"noopener noreferrer"}},[s._v("mavros_posix_sitl.launch"),e("OutboundLink")],1),s._v(": SITL과 MAVROS")])]),s._v(" "),e("p",[s._v("ROS에 래핑된 SITL을 실행하려면 ROS 환경을 업데이트한 다음, 평소와 같이 시작하여야 합니다.")]),s._v(" "),e("p",[s._v("(선택 사항): 소스에서 MAVROS 또는 다른 ROS 패키지를 컴파일한 경우에만 catkin 작업 공간을 소싱합니다.")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("PX4-Autopilot_clone"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DONT_RUN")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" px4_sitl_default gazebo-classic\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" ~/catkin_ws/devel/setup.bash    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# (optional)")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" Tools/simulation/gazebo-classic/setup_gazebo.bash "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("/build/px4_sitl_default\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ROS_PACKAGE_PATH")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ROS_PACKAGE_PATH")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ROS_PACKAGE_PATH")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ROS_PACKAGE_PATH")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("/Tools/simulation/gazebo-classic/sitl_gazebo-classic\nroslaunch px4 posix_sitl.launch\n")])])]),e("p",[s._v("위에서 언급한 시작 파일 중 하나를 자체 시작 파일에 포함하여, 시뮬레이션에서 ROS 애플리케이션을 실행합니다.")]),s._v(" "),e("h2",{attrs:{id:"움직임-뒤에서-일어나는-일"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#움직임-뒤에서-일어나는-일"}},[s._v("#")]),s._v(" 움직임 뒤에서 일어나는 일")]),s._v(" "),e("p",[s._v("이 섹션에서는 이전에 제공된 "),e("em",[s._v("roslaunch")]),s._v(" 지침이 실제로 어떻게 작동하는 지 설명합니다(시뮬레이션 및 ROS를 수동으로 시작하려면 지침을 따를 수 있습니다).")]),s._v(" "),e("p",[s._v("You will need three terminals, in all of them the ros environment must be sourced.")]),s._v(" "),e("p",[s._v("아래 명령어를 사용하여 시뮬레이터를 시작합니다.")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("PX4-Autopilot_clone"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ROS_PACKAGE_PATH")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ROS_PACKAGE_PATH")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\nroslaunch px4 px4.launch\n")])])]),e("p",[s._v("콘솔 화면은 다음과 같이 나타납니다:")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("INFO  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("px4"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" instance: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n\n______  __   __    ___ \n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" ___ "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" / /   /   "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("_/ /  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" V /   / /"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  __/   /   "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("  / /_"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("     / /^"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("___  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("_"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("     "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("/   "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("/     "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("_/\n\npx4 starting.\n\nINFO  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("px4"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" startup script: /bin/sh etc/init.d-posix/rcS "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nINFO  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("init"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" found model autostart "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" as "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("SYS_AUTOSTART")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10016")]),s._v("\nINFO  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("param"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" selected parameter default "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" parameters.bson\nINFO  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("param"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" importing from "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'parameters.bson'")]),s._v("\nINFO  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("parameters"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" BSON document size "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("295")]),s._v(" bytes, decoded "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("295")]),s._v(" bytes "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("INT32:12, FLOAT:3"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nINFO  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("param"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" selected parameter backup "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" parameters_backup.bson\nINFO  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("dataman"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" data manager "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./dataman'")]),s._v(" size is "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("7866640")]),s._v(" bytes\netc/init.d-posix/rcS: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("31")]),s._v(": "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(": Illegal number: \nINFO  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("init"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" PX4_SIM_HOSTNAME: localhost\nINFO  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("simulator_mavlink"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" Waiting "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" simulator to accept connection on TCP port "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4560")]),s._v("\n")])])]),e("p",[s._v("In the second terminal make sure you will be able to start gazebo with the world files defined in PX4-Autopilot. To do this set your environment variables to include the appropriate "),e("code",[s._v("sitl_gazebo-classic")]),s._v(" folders.")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("PX4-Autopilot_clone"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" Tools/simulation/gazebo-classic/setup_gazebo.bash "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("/build/px4_sitl_default\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ROS_PACKAGE_PATH")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ROS_PACKAGE_PATH")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("/Tools/simulation/gazebo-classic/sitl_gazebo-classic\n")])])]),e("p",[s._v("Now start Gazebo Classic like you would when working with ROS")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("roslaunch gazebo_ros empty_world.launch world_name:"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("/Tools/simulation/gazebo-classic/sitl_gazebo-classic/worlds/empty.world\n")])])]),e("p",[s._v("In the third terminal make sure you will be able to spawn the model with the sdf files defined in PX4-Autopilot. To do this set your environment variables to include the appropriate "),e("code",[s._v("sitl_gazebo-classic")]),s._v(" folders.")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("PX4-Autopilot_clone"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" Tools/simulation/gazebo-classic/setup_gazebo.bash "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("/build/px4_sitl_default\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ROS_PACKAGE_PATH")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ROS_PACKAGE_PATH")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("/Tools/simulation/gazebo-classic/sitl_gazebo-classic\n")])])]),e("p",[s._v("Now insert the Iris quadcopter model like you would when working with ROS. Iris가 로드되면 자동으로 px4 앱에 연결됩니다.")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("rosrun gazebo_ros spawn_model -sdf -file "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("/Tools/simulation/gazebo-classic/sitl_gazebo-classic/models/iris/iris.sdf -model iris -x "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" -y "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" -z "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" -R "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" -P "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" -Y "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n")])])])])])])}),[],!1,null,null,null);a.default=n.exports}}]);