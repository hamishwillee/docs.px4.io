(window.webpackJsonp=window.webpackJsonp||[]).push([[986],{1997:function(t,e,r){"use strict";r.r(e);var n=r(18),a=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"파일-및-코드-설치"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#파일-및-코드-설치"}},[t._v("#")]),t._v(" 파일 및 코드 설치")]),t._v(" "),r("p",[t._v("The "),r("em",[t._v("supported platforms")]),t._v(" for PX4 development are:")]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/ko/dev_setup/dev_env_linux_ubuntu.html"}},[t._v("Ubuntu Linux")]),t._v(" (Recommended)")],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/dev_setup/dev_env_mac.html"}},[t._v("Mac OS")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/dev_setup/dev_env_windows_cygwin.html"}},[t._v("Windows 10")])],1)]),t._v(" "),r("h2",{attrs:{id:"지원-대상"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#지원-대상"}},[t._v("#")]),t._v(" 지원 대상")]),t._v(" "),r("p",[t._v("아래 표는 각 OS에서 구축 할 수 있는 PX 대상을 보여줍니다.")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("대상")]),t._v(" "),r("th",{staticStyle:{"text-align":"center"}},[t._v("Linux (Ubuntu)")]),t._v(" "),r("th",{staticStyle:{"text-align":"center"}},[t._v("Mac")]),t._v(" "),r("th",{staticStyle:{"text-align":"center"}},[t._v("Windows")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("strong",[t._v("NuttX 기반 하드웨어")]),t._v(": "),r("a",{attrs:{href:"https://docs.px4.io/en/flight_controller/pixhawk_series.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk 시리즈"),r("OutboundLink")],1),t._v(", "),r("a",{attrs:{href:"https://docs.px4.io/en/flight_controller/crazyflie2.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Crazyflie"),r("OutboundLink")],1),t._v(", "),r("a",{attrs:{href:"https://docs.px4.io/en/flight_controller/intel_aero.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Intel® Aero Ready to Fly Drone"),r("OutboundLink")],1)]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("✓")])]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/ko/flight_controller/snapdragon_flight.html"}},[t._v("Qualcomm Snapdragon Flight 하드웨어")])],1),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}}),t._v(" "),r("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),r("tr",[r("td",[r("strong",[t._v("Linux 기반 하드웨어")]),t._v(": "),r("a",{attrs:{href:"https://docs.px4.io/en/flight_controller/raspberry_pi_navio2.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Raspberry Pi 2/3"),r("OutboundLink")],1),t._v(", "),r("a",{attrs:{href:"https://docs.px4.io/en/flight_controller/bebop.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Parrot Bebop"),r("OutboundLink")],1)]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}}),t._v(" "),r("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),r("tr",[r("td",[r("strong",[t._v("시뮬레이션")]),t._v(": "),r("RouterLink",{attrs:{to:"/ko/simulation/jmavsim.html"}},[t._v("jMAVSim SITL")])],1),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("✓")])]),t._v(" "),r("tr",[r("td",[r("strong",[t._v("시뮬레이션:")]),t._v(" "),r("RouterLink",{attrs:{to:"/ko/simulation/gazebo.html"}},[t._v("Gazebo SITL")])],1),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),r("tr",[r("td",[r("strong",[t._v("시뮬레이션")]),t._v(": "),r("RouterLink",{attrs:{to:"/ko/simulation/ros_interface.html"}},[t._v("Gazebo ROS")])],1),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}}),t._v(" "),r("td",{staticStyle:{"text-align":"center"}})])])]),t._v(" "),r("p",[t._v("개발 환경 설치는 아래에서 다룹니다.")]),t._v(" "),r("h2",{attrs:{id:"개발-환경"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#개발-환경"}},[t._v("#")]),t._v(" 개발 환경")]),t._v(" "),r("p",[t._v("Docker에 익숙하다면 준비된 컨테이너 중 하나인 "),r("RouterLink",{attrs:{to:"/ko/test_and_ci/docker.html"}},[t._v("Docker Containers")]),t._v("를 사용할 수도 있습니다.")],1),t._v(" "),r("ul",[r("li",[t._v("Install "),r("RouterLink",{attrs:{to:"/ko/dev_setup/vscode.html"}},[t._v("VSCode")]),t._v(" (if you prefer using an IDE to the command line).")],1),t._v(" "),r("li",[t._v("Install the "),r("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/releases/daily_builds.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGroundControl Daily Build"),r("OutboundLink")],1)]),t._v(" "),r("li",[t._v("Continue to "),r("RouterLink",{attrs:{to:"/ko/dev_setup/building_px4.html"}},[t._v("Building PX4 Software")]),t._v(".")],1)])])}),[],!1,null,null,null);e.default=a.exports}}]);