(window.webpackJsonp=window.webpackJsonp||[]).push([[1781],{3160:function(t,o,r){"use strict";r.r(o);var e=r(19),n=Object(e.a)({},(function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"ros-로봇-운영-체제"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ros-로봇-운영-체제"}},[t._v("#")]),t._v(" ROS (로봇 운영 체제)")]),t._v(" "),r("p",[r("a",{attrs:{href:"http://www.ros.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ROS"),r("OutboundLink")],1),t._v("는 드론 애플리케이션 개발에 PX4와 함께 사용할 수 있는 범용 로봇 라이브러리입니다.")]),t._v(" "),r("p",[t._v("ROS는 일반적인 로봇 공학 문제를 해결하고, Linux용으로 작성된 소프트웨어 라이브러리에 대한 액세스를 해결하는 개발자의 활발한 생태계 시스템의 이점이 있습니다. 예를 들어, "),r("RouterLink",{attrs:{to:"/ko/computer_vision/obstacle_avoidance.html"}},[t._v("장애물 회피")]),t._v(" 및 "),r("RouterLink",{attrs:{to:"/ko/computer_vision/collision_prevention.html"}},[t._v("충돌 방지")]),t._v("를 포함한 PX4 "),r("RouterLink",{attrs:{to:"/ko/computer_vision/"}},[t._v("컴퓨터 비전")]),t._v(" 솔루션의 일부로 사용되었습니다.")],1),t._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),r("p",[t._v("Tip "),r("RouterLink",{attrs:{to:"/ko/ros/ros2.html"}},[t._v("ROS 2")]),t._v('는 ROS의 "최신이자 최고의" 버전입니다. PX4 개발 팀은 모든 사용자가 '),r("RouterLink",{attrs:{to:"/ko/ros/ros2.html"}},[t._v("ROS 2로 업그레이드")]),t._v("할 것을 권장합니다!")],1)]),t._v(" "),r("h2",{attrs:{id:"ros-설정"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ros-설정"}},[t._v("#")]),t._v(" ROS 설정")]),t._v(" "),r("p",[t._v("PX4 supports both ROS 2 and ROS 1, with the following configurations:")]),t._v(" "),r("ul",[r("li",[r("strong",[r("RouterLink",{attrs:{to:"/ko/ros/ros2.html"}},[t._v("ROS 2")]),t._v(": (권장)")],1),t._v(" PX4와 ROS 2는 PX4 uORB 메시지와 ROS 2 DDS 메시지간의 직접 브리지를 제공하는 인터페이스인 "),r("RouterLink",{attrs:{to:"/ko/ros/ros2_comm.html"}},[t._v("PX4-ROS 2 브리지")]),t._v("를 통하여 통신합니다. 이를 통하여 실시간으로 ROS 2 워크플로 및 노드에서 PX4 내부에 직접 액세스할 수 있습니다.")],1),t._v(" "),r("li",[r("strong",[r("RouterLink",{attrs:{to:"/ko/ros/ros1.html"}},[t._v("ROS 1 via MAVROS")]),t._v(":")],1),t._v(" PX4 and ROS 1 communicate over "),r("RouterLink",{attrs:{to:"/ko/middleware/mavlink.html"}},[t._v("MAVLink")]),t._v(", using the "),r("RouterLink",{attrs:{to:"/ko/ros/mavros_installation.html"}},[t._v("MAVROS")]),t._v(" package to bridge ROS topics to MAVLink.")],1)]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("ROS")]),t._v(" "),r("p",[t._v("2 can also connect with PX4 using "),r("a",{attrs:{href:"https://github.com/mavlink/mavros/tree/ros2/mavros",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVROS"),r("OutboundLink")],1),t._v(" (instead of XRCE-DDS). This option is supported by the MAVROS project.")])]),t._v(" "),r("p",[t._v("Note that ROS 2 can be installed on Ubuntu Linux, macOS, Windows, while ROS 1 is only available on Linux. Although it might work on the other platforms, PX4 primarily tests and documents ROS on "),r("em",[t._v("Linux")]),t._v(".")]),t._v(" "),r("h2",{attrs:{id:"ros-지원-로드맵"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ros-지원-로드맵"}},[t._v("#")]),t._v(" ROS 지원 로드맵")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://www.youtube.com/watch?v=lZ8crGI16qA",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4 Developer Summit 2020"),r("OutboundLink")],1),t._v("(및 "),r("a",{attrs:{href:"https://www.youtube.com/watch?v=8XRkzHqQSf0",target:"_blank",rel:"noopener noreferrer"}},[t._v("ROS World 2020"),r("OutboundLink")],1),t._v(")에서 공개된 PX4 개발팀은 microROS 지원 계획을 발표하였습니다.")]),t._v(" "),r("ul",[r("li",[t._v("microRTPS: microRTPS bridge with Fast DDS (The ROS 2 interface in PX4 v1.13 and earlier)")]),t._v(" "),r("li",[t._v("micro XRCE-DDS: DDS on PX4 (The ROS 2 interface for releases after PX4 v1.13 and in mainline)")]),t._v(" "),r("li",[t._v('micro ROS: ROS 2 running in PX4 - "microROS" (Our Target!)')])])])}),[],!1,null,null,null);o.default=n.exports}}]);