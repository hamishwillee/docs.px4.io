(window.webpackJsonp=window.webpackJsonp||[]).push([[1718],{3129:function(t,s,a){"use strict";a.r(s);var e=a(19),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"jsbsim-시뮬레이션"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jsbsim-시뮬레이션"}},[t._v("#")]),t._v(" JSBSim 시뮬레이션")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://jsbsim.sourceforge.net/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSBSim"),a("OutboundLink")],1),t._v('은 Microsoft Windows, Apple Macintosh, Linux, IRIX, Cygwin(Windows의 Unix) 등에서 실행되는 오픈 소스 비행 시뮬레이터("비행 역학 모델(FDM)")입니다. 주요 특징은 다음과 같습니다: 완전히 구성 가능한 공기 역학 및 항공기의 복잡한 비행 역학을 모델링할 수 있는 추진 시스템. 지구 회전 효과도 역학으로 모델링됩니다.')]),t._v(" "),a("p",[a("strong",[t._v("지원 차량:")]),t._v(" 고정익, 쿼드콥터, 헥사콥터")]),t._v(" "),a("p",[t._v("@"),a("a",{attrs:{href:"https://youtu.be/y5azVNmIVyw",target:"_blank",rel:"noopener noreferrer"}},[t._v("유투브"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("시뮬레이터, 시뮬레이션 환경 및 시뮬레이션 설정(예: 지원 차량)에 정보는 "),a("RouterLink",{attrs:{to:"/ko/simulation/"}},[t._v("시뮬레이션")]),t._v("을 참고하십시오.")],1)]),t._v(" "),a("p",[a("a",{attrs:{id:"installation"}})]),t._v(" "),a("h2",{attrs:{id:"설치-ubuntu-linux"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#설치-ubuntu-linux"}},[t._v("#")]),t._v(" 설치 (Ubuntu Linux)")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("이 매뉴얼은 Ubuntu 18.04에서 테스트되었습니다.")])]),t._v(" "),a("ol",[a("li",[t._v("일반적인 "),a("RouterLink",{attrs:{to:"/ko/dev_setup/dev_env_linux_ubuntu.html"}},[t._v("Ubuntu LTS/Debian Linux 개발 환경")]),t._v("을 설치합니다.")],1),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/JSBSim-Team/jsbsim/releases/tag/Linux",target:"_blank",rel:"noopener noreferrer"}},[t._v("릴리스 페이지"),a("OutboundLink")],1),t._v("에서 JSBSim 릴리스를 설치합니다."),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("dpkg -i JSBSim-devel_1.1.0.dev1-"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("release-number"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(".bionic.amd64.deb\n")])])])]),t._v(" "),a("li",[t._v("(선택 사항) FlightGear는 시각화에 사용할 수 있습니다. FlightGear를 설치하려면 "),a("RouterLink",{attrs:{to:"/ko/simulation/flightgear.html"}},[t._v("FlightGear 설치 방법")]),t._v("을 참고하십시오.")],1)]),t._v(" "),a("p",[a("a",{attrs:{id:"running"}})]),t._v(" "),a("h2",{attrs:{id:"시뮬레이션-실행"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#시뮬레이션-실행"}},[t._v("#")]),t._v(" 시뮬레이션 실행")]),t._v(" "),a("p",[t._v("JSBSim SITL 시뮬레이션은 아래와 같이 "),a("code",[t._v("make")]),t._v("로 실행합니다.")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /path/to/PX4-Autopilot\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl jsbsim\n")])])]),a("p",[t._v("그러면, PX4 SITL 인스턴스와 FlightGear UI(시각화용)가 모두 실행됩니다. FlightGear UI 없이 실행하려면 "),a("code",[t._v("make")]),t._v(" 명령 앞에 "),a("code",[t._v("HEADLESS=1")]),t._v("을 추가합니다.")]),t._v(" "),a("p",[t._v("지원되는 차량과 "),a("code",[t._v("make")]),t._v(" 명령은 아래에 나열되어 있습니다(차량 이미지를 보려면 링크를 클릭하십시오).")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("차량")]),t._v(" "),a("th",[t._v("명령어")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("표준 고정익")]),t._v(" "),a("td",[a("code",[t._v("make px4_sitl jsbsim_rascal")])])]),t._v(" "),a("tr",[a("td",[t._v("쿼드콥터")]),t._v(" "),a("td",[a("code",[t._v("make px4_sitl jsbsim_quadrotor_x")])])]),t._v(" "),a("tr",[a("td",[t._v("헥사콥터")]),t._v(" "),a("td",[a("code",[t._v("make px4_sitl jsbsim_hexarotor_x")])])])])]),t._v(" "),a("p",[t._v("위의 명령은 전체 UI로 단일 차량을 시작합니다. "),a("em",[t._v("QGroundControl")]),t._v("은 시뮬레이션 차량에 자동으로 연결할 수 있어야 합니다.")]),t._v(" "),a("h2",{attrs:{id:"ros-환경-jsbsim-실행하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ros-환경-jsbsim-실행하기"}},[t._v("#")]),t._v(" ROS 환경 JSBSim 실행하기")]),t._v(" "),a("p",[t._v("ROS 환경에서 JSBSim을 실행하려면:")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("px4-jsbsim-bridge")]),t._v(" 패키지를 catkin 작업 공간에 복제합니다."),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("cd <path_to_catkin_ws>/src\ngit clone https://github.com/Auterion/px4-jsbsim-bridge.git\n")])])])]),t._v(" "),a("li",[a("code",[t._v("jsbsim_bridge")]),t._v(" catkin 패키지를 빌드합니다."),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("catkin build jsbsim_bridge\n")])])])])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("작업 공간에 미리 MAVROS를 설치하어야 합니다(설치되어 있지 않으면, "),a("RouterLink",{attrs:{to:"/ko/ros/mavros_installation.html"}},[t._v("MAVROS 설치 가이드")]),t._v("을 참고하십시오).")],1)]),t._v(" "),a("ol",[a("li",[t._v("다음과 같이 시작 파일을 사용하여 ROS를 통하여 JSBSim을 시작합니다."),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("roslaunch jsbsim_bridge px4_jsbsim_bridge.launch\n")])])])])]),t._v(" "),a("h2",{attrs:{id:"추가-정보"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#추가-정보"}},[t._v("#")]),t._v(" 추가 정보")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/Auterion/px4-jsbsim-bridge",target:"_blank",rel:"noopener noreferrer"}},[t._v("px4-jsbsim-bridge 추가 정보"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=r.exports}}]);