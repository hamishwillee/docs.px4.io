(window.webpackJsonp=window.webpackJsonp||[]).push([[1850],{3316:function(s,a,t){"use strict";t.r(a);var r=t(19),e=Object(r.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"라즈베리파이-ros-설치"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#라즈베리파이-ros-설치"}},[s._v("#")]),s._v(" 라즈베리파이 ROS 설치")]),s._v(" "),t("p",[s._v("Pixhawk 보조 컴퓨터 라즈베리파이에 ROS-indigo를 설치 방법을 설명합니다.")]),s._v(" "),t("h2",{attrs:{id:"준비-사항"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#준비-사항"}},[s._v("#")]),s._v(" 준비 사항")]),s._v(" "),t("ul",[t("li",[s._v("모니터, 키보드 또는 구성된 SSH 연결가능한 라즈베리파이")]),s._v(" "),t("li",[s._v('이 가이드는 라즈베리파이에 Raspbian "JESSIE"가 설치되어 있다고 가정합니다. 그렇지 않은 경우에는 '),t("a",{attrs:{href:"https://www.raspberrypi.org/downloads/raspbian/",target:"_blank",rel:"noopener noreferrer"}},[s._v("설치"),t("OutboundLink")],1),s._v("하거나 Raspbian Wheezy를 Jessie로 "),t("a",{attrs:{href:"http://raspberrypi.stackexchange.com/questions/27858/upgrade-to-raspbian-jessie",target:"_blank",rel:"noopener noreferrer"}},[s._v("업그레이드"),t("OutboundLink")],1),s._v("합니다.")])]),s._v(" "),t("h2",{attrs:{id:"설치"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#설치"}},[s._v("#")]),s._v(" 설치")]),s._v(" "),t("p",[s._v("ROS Indigo의 실제 설치는 "),t("a",{attrs:{href:"http://wiki.ros.org/ROSberryPi/Installing%20ROS%20Indigo%20on%20Raspberry%20Pi",target:"_blank",rel:"noopener noreferrer"}},[s._v("이 가이드"),t("OutboundLink")],1),s._v('를 참고하십시오. 참고: "ROS-Comm" 변형 버전을 설치하십시오. 데스크탑 변형은 너무 무겁습니다.')]),s._v(" "),t("h3",{attrs:{id:"패키지-설치-중-오류"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#패키지-설치-중-오류"}},[s._v("#")]),s._v(" 패키지 설치 중 오류")]),s._v(" "),t("p",[s._v("패키지(예: "),t("code",[s._v("sudo apt-get install ros-indigo-ros-tutorials")]),s._v(')를 다운로드하려는 경우, "패키지 ros-indigo-ros-tutorials를 찾을 수 없습니다"라는 오류가 표시될 수 있습니다.')]),s._v(" "),t("p",[s._v("그런 오류가 발생하면, catkin 작업 공간(예: ~/ros_catkin_ws)으로 이동하여 패키지 이름을 변경합니다.")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~/ros_catkin_ws\n\n$ rosinstall_generator ros_tutorials --rosdistro indigo --deps --wet-only --exclude roslisp --tar "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" indigo-custom_ros.rosinstall\n")])])]),t("p",[s._v("다음으로 wstool로 작업 공간을 업데이트 합니다.")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ wstool merge -t src indigo-custom_ros.rosinstall\n\n$ wstool update -t src\n")])])]),t("p",[s._v("다음으로(여전히 작업 공간 폴더에 있음) 파일을 소싱하고 빌드합니다.")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" /opt/ros/indigo/setup.bash\n\n$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" devel/setup.bash\n\n$ catkin_make\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);