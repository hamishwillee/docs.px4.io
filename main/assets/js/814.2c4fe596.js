(window.webpackJsonp=window.webpackJsonp||[]).push([[814],{1481:function(s,t,a){s.exports=a.p+"assets/img/architecture_ros.a06cff99.png"},3029:function(s,t,a){"use strict";a.r(t);var e=a(19),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"ros-1-via-ros-2-bridge-user-guide"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ros-1-via-ros-2-bridge-user-guide"}},[s._v("#")]),s._v(" ROS 1 via ROS 2 Bridge (User Guide)")]),s._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),e("p",[e("strong",[s._v("This example is out of date!")]),s._v(" It relies on the "),e("RouterLink",{attrs:{to:"/middleware/micrortps.html"}},[s._v("PX4-Fast RTPS(DDS) Bridge")]),s._v(", which is no longer supported. We plan to retest and update it for the "),e("RouterLink",{attrs:{to:"/ko/middleware/xrce_dds.html"}},[s._v("XRCE-DDS (PX4-ROS 2/DDS Bridge)")]),s._v(" in the near future.")],1)]),s._v(" "),e("p",[s._v("This topic explains how use ROS 1 with PX4, by bridging via "),e("RouterLink",{attrs:{to:"/ko/ros/ros2.html"}},[s._v("ROS 2")]),s._v(".")],1),s._v(" "),e("p",[s._v("It provides an overview of the ROS 1-ROS 2-PX4 architecture, along with instructions on how to install all the needed software and build ROS 1 applications. 또한, ROS 2 및 ROS 1 작업 공간을 동시에 설정하는 방법도 설명합니다.")]),s._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[s._v("Note")]),s._v(" "),e("p",[s._v("Generally you might use this setup rather than bridging "),e("RouterLink",{attrs:{to:"/ko/ros/ros1.html"}},[s._v("ROS 1 with MAVROS")]),s._v(" if you want deeper access to PX4 than granted by MAVLink, or if you want to use both ROS 2 and ROS 1 applications.")],1)]),s._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[s._v("Note")]),s._v(" "),e("p",[s._v("이 설정과 이 지침은 "),e("RouterLink",{attrs:{to:"/ko/ros/ros2.html"}},[s._v("ROS 2")]),s._v("에 "),e("em",[s._v("의존")]),s._v("합니다. 먼저 ROS 2를 읽어보는 것이 좋습니다.")],1)]),s._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),e("p",[s._v("Note PX4 개발 팀은 모든 사용자가 "),e("RouterLink",{attrs:{to:"/ko/ros/ros2.html"}},[s._v("ROS 2로 업그레이드")]),s._v("할 것을 권장합니다.")],1)]),s._v(" "),e("h2",{attrs:{id:"개요"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#개요"}},[s._v("#")]),s._v(" 개요")]),s._v(" "),e("p",[s._v("The application pipeline for ROS 1 bridged over ROS 2 is shown below.")]),s._v(" "),e("p",[e("img",{attrs:{src:a(1481),alt:"ROS를 사용한 아키텍처"}})]),s._v(" "),e("p",[s._v("두 버전 간에 메시지를 번역하는 추가 "),e("a",{attrs:{href:"https://github.com/ros2/ros1_bridge",target:"_blank",rel:"noopener noreferrer"}},[e("code",[s._v("ros1_bridge")]),e("OutboundLink")],1),s._v(" 패키지(Open Robotics 제공)가 있다는 점을 제외하면 기본적으로 ROS 2와 동일합니다. 이것은 ROS의 원래 버전이 RTPS를 지원하지 않기 때문에 필요합니다.")]),s._v(" "),e("p",[s._v("다른 주요 차이점은 "),e("code",[s._v("px4_ros_com")]),s._v(" 및 "),e("code",[s._v("px4_msgs")]),s._v("가 별도의 "),e("code",[s._v("ros1")]),s._v(" 분기를 패키징한다는 것입니다. "),e("code",[s._v("ros1_bridge")]),s._v("와 "),e("strong",[s._v("함께")]),s._v(" 사용하기 위한 ROS 메시지 헤더와 소스 파일을 생성합니다. 이 분기에는 예제 리스너 및 광고주 노드도 포함됩니다.")]),s._v(" "),e("h2",{attrs:{id:"설치-및-설정"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#설치-및-설정"}},[s._v("#")]),s._v(" 설치 및 설정")]),s._v(" "),e("p",[e("RouterLink",{attrs:{to:"/ko/ros/ros2_comm.html#installation-setup"}},[s._v("ROS 2 사용자 가이드 > 설치 및 설정")]),s._v("을 참고하여 ROS 2를 설치합니다.")],1),s._v(" "),e("h3",{attrs:{id:"build-ros-1-workspace"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#build-ros-1-workspace"}},[s._v("#")]),s._v(" Build ROS 1 Workspace")]),s._v(" "),e("p",[s._v("ROS는 ROS2와 다른 환경이 필요하기 때문에 별도의 작업 공간을 만들어야 합니다. 여기에는 "),e("code",[s._v("ros1_bridge")]),s._v("와 함께 "),e("code",[s._v("px4_ros_com")]),s._v("와 "),e("code",[s._v("px4_msgs")]),s._v("의 "),e("code",[s._v("ros")]),s._v(" 분기가 포함됩니다.")]),s._v(" "),e("p",[s._v("작업 공간을 만들고 빌드합니다.")]),s._v(" "),e("ol",[e("li",[s._v("ROS 1 작업 공간 디렉토리를 생성합니다."),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p ~/px4_ros_com_ros1/src\n")])])])]),s._v(" "),e("li",[s._v("ROS 1 브리지 패키지 "),e("code",[s._v("px4_ros_com")]),s._v("와 "),e("code",[s._v("px4_msgs")]),s._v("를 "),e("code",[s._v("/src")]),s._v(" 디렉토리("),e("code",[s._v("ros1")]),s._v(" 분기)에 복제합니다."),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/PX4/px4_ros_com.git ~/px4_ros_com_ros1/src/px4_ros_com -b ros1 "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# clones the 'ros1' branch")]),s._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/PX4/px4_msgs.git ~/px4_ros_com_ros1/src/px4_msgs -b ros1\n")])])])]),s._v(" "),e("li",[e("code",[s._v("build_ros1_bridge.bash")]),s._v(" 스크립트를 사용하여 ROS 작업 공간("),e("code",[s._v("px4_ros_com")]),s._v(", "),e("code",[s._v("px4_msgs")]),s._v(" 및 "),e("code",[s._v("ros1_bridge")]),s._v(" 포함)을 빌드합니다.\n"),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout ros1\n$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" scripts\n$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" build_ros1_bridge.bash\n")])])])])]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),e("p",[s._v("You can also build both ROS 1 and ROS 2 workspaces with a single script: "),e("code",[s._v("build_all.bash")]),s._v(". The most common way of using it, is by passing the ROS 1 workspace directory path and PX4 Autopilot directory path:")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" build_all.bash --ros1_ws_dir "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("path/to/px4_ros_com_ros1/ws"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),e("h3",{attrs:{id:"설치-상태-확인"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#설치-상태-확인"}},[s._v("#")]),s._v(" 설치 상태 확인")]),s._v(" "),e("p",[e("RouterLink",{attrs:{to:"/ko/ros/ros2_comm.html#sanity-check-the-installation"}},[s._v("ROS 2 사용자 가이드 > 설치 상태 확인")]),s._v(" 설치를 확인하는 방법은 브리지가 PX4 시뮬레이터에서 PX4와 통신 여부를 테스트하는 것입니다.")],1),s._v(" "),e("p",[s._v("To use ROS 1 "),e("strong",[s._v("and")]),s._v(" ROS 2 (you need both for this!):")]),s._v(" "),e("ol",[e("li",[e("p",[e("RouterLink",{attrs:{to:"/ko/dev_setup/dev_env_linux_ubuntu.html"}},[s._v("PX4 Ubuntu Linux 개발 환경 설정")]),s._v(" - 기본 지침은 최신 버전의 PX4 소스를 다운로드하고 필요한 도구들을 설치합니다.")],1)]),s._v(" "),e("li",[e("p",[s._v("Open a new terminal in the root of the "),e("strong",[s._v("PX4 Autopilot")]),s._v(" project, and then start a PX4 "),e("RouterLink",{attrs:{to:"/ko/sim_gazebo_classic/"}},[s._v("Gazebo Classic")]),s._v(" simulation using:")],1),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" px4_sitl_rtps gazebo-classic\n")])])]),e("p",[s._v("PX4가 시작되면, 터미널에 "),e("RouterLink",{attrs:{to:"/ko/debug/system_console.html"}},[s._v("NuttShell/System Console")]),s._v("이 표시됩니다.")],1)]),s._v(" "),e("li",[e("p",[s._v("다른 터미널에서 ROS 2 환경과 작업 공간을 소싱하고 "),e("code",[s._v("ros1_bridge")]),s._v("를 시작합니다(이렇게 하면 ROS 2와 ROS 노드가 서로 통신할 수 있음). 또한, "),e("code",[s._v("roscore")]),s._v("가 실행 중이거나 실행될 "),e("code",[s._v("ROS_MASTER_URI")]),s._v("를 설정합니다.")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" /opt/ros/dashing/setup.bash\n$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" ~/px4_ros_com_ros2/install/local_setup.bash\n$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ROS_MASTER_URI")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://localhost:11311\n$ ros2 run ros1_bridge dynamic_bridge\n")])])])]),s._v(" "),e("li",[e("p",[s._v("다른 터미널에서 ROS 작업 공간을 소싱하고, "),e("code",[s._v("sensor_combined")]),s._v(" 리스너 노드를 시작합니다. "),e("code",[s._v("roslaunch")]),s._v("를 통해 시작하므로, "),e("code",[s._v("roscore")]),s._v("도 자동으로 시작됩니다.")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" ~/px4_ros_com_ros1/install/setup.bash\n$ roslaunch px4_ros_com sensor_combined_listener.launch\n")])])])]),s._v(" "),e("li",[e("p",[s._v("다른 터미널에서 ROS 2 작업 공간을 소싱한 다음 UDP를 전송 프로토콜로 사용하여 "),e("code",[s._v("micrortps_agent")]),s._v(" 데몬을 시작합니다.")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" ~/px4_ros_com_ros2/install/setup.bash\n$ micrortps_agent -t UDP\n")])])])]),s._v(" "),e("li",[e("p",[e("RouterLink",{attrs:{to:"/ko/debug/system_console.html"}},[s._v("NuttShell/System Console")]),s._v("에서 UDP "),e("code",[s._v("micrortps_client")]),s._v(" 데몬을 시작합니다.")],1),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" micrortps_client start -t UDP\n")])])]),e("p",[s._v("브리지가 올바르게 작동하면, ROS 수신기를 시작한 터미널에서 데이터가 인쇄되는 것을 확일할 수 있습니다.")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("RECEIVED DATA FROM SENSOR COMBINED\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v("\nts: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("870938190")]),s._v("\ngyro_rad"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(": "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00341645")]),s._v("\ngyro_rad"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(": "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00626475")]),s._v("\ngyro_rad"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(": -0.000515705\ngyro_integral_dt: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4739")]),s._v("\naccelerometer_timestamp_relative: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\naccelerometer_m_s2"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(": -0.273381\naccelerometer_m_s2"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(": "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0949186")]),s._v("\naccelerometer_m_s2"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(": -9.76044\naccelerometer_integral_dt: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4739")]),s._v("\n")])])])])]),s._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[s._v("Note")]),s._v(" "),e("p",[e("code",[s._v("build_all.bash")]),s._v(" 스크립트를 사용하면, 필요한 모든 터미널이 자동으로 열리고 소싱되므로 각 터미널에서 해당 앱을 실행하기만 하면 됩니다.")])])]),s._v(" "),e("h2",{attrs:{id:"creating-a-ros-1-listener"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-ros-1-listener"}},[s._v("#")]),s._v(" Creating a ROS 1 listener")]),s._v(" "),e("p",[s._v("Since the creation of ROS nodes is a well known and documented process, we are going to leave this section out from this guide, and you can find an example of a ROS listener for "),e("code",[s._v("SensorCombined")]),s._v(" messages the "),e("code",[s._v("ros1")]),s._v(" branch of the "),e("code",[s._v("px4_ros_com")]),s._v(" repository, under the following path "),e("code",[s._v("src/listeners/")]),s._v(".")])])}),[],!1,null,null,null);t.default=r.exports}}]);