(window.webpackJsonp=window.webpackJsonp||[]).push([[902],{1843:function(t,o,a){"use strict";a.r(o);var e=a(18),r=Object(e.a)({},(function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"컴퓨터-비전-광류-센서-움직임-감지-관성-주행-시각-측정-회피"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#컴퓨터-비전-광류-센서-움직임-감지-관성-주행-시각-측정-회피"}},[t._v("#")]),t._v(" 컴퓨터 비전(광류 센서, 움직임 감지, 관성 주행 시각 측정, 회피)")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Computer_vision",target:"_blank",rel:"noopener noreferrer"}},[t._v("컴퓨터 비전"),a("OutboundLink")],1),t._v("은 컴퓨터가 실재하는 환경을 시각 데이터를 활용하여 이해할 수 있게 하는 기술입니다.")]),t._v(" "),a("p",[t._v("PX4는 다음 기능 지원을 목적으로 컴퓨터 비전 시스템("),a("RouterLink",{attrs:{to:"/ko/companion_computer/pixhawk_companion.html"}},[t._v("보조 컴퓨터")]),t._v("에서 주로 실행)을 활용합니다.")],1),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#optical_flow"}},[t._v("광류 추적(Optical Flow)")]),t._v(" 기술은 2차원 평면상의 속도 추정 정보를 제공합니다(아래 방향으로 향한 카메라와 아래 방향으로 향한 거리 센서 활용).")]),t._v(" "),a("li",[a("a",{attrs:{href:"#mocap"}},[t._v("움직임 촬영(Motion Capture)")]),t._v(" 기술은 기체 "),a("em",[t._v("외부")]),t._v("의 비전 시스템을 통해 3차원 자세 추정 정보를 제공합니다. 실내 운행에 주로 활용합니다.")]),t._v(" "),a("li",[a("a",{attrs:{href:"#vio"}},[t._v("관성 주행 시각 측정")]),t._v(" 기술은 내장 비전 시스템과 관성 측정부(IMU)를 활용하여 3차원 자세와 속도 추정 정보를 제공합니다. 광역 위치 정보가 빠져있거나 신뢰할 수 없는 상황에서의 움직임에 활용합니다.")]),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/computer_vision/obstacle_avoidance.html"}},[t._v("장애물 회피")]),t._v(" 기술은 계획 경로를 비행할 때 장애물 주변의 완전한 이동 가능 공간 정보를 제공합니다(현재 임무 기능 지원). 이 기술은 보조 컴퓨터에서 동작하는 "),a("a",{attrs:{href:"https://github.com/PX4/avoidance",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4/avoidance"),a("OutboundLink")],1),t._v("를 활용합니다.")],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/computer_vision/collision_prevention.html"}},[t._v("충돌 방지")]),t._v(" 기술은 (주로 수동 조작으로 비행할 때) 기체가 장애물로 돌진하기 전에 이동을 멈출 때 활용합니다.")],1)]),t._v(" "),a("p",[t._v("움직임 감지(Motion Capture, a.k.a MoCap)은 기체 "),a("em",[t._v("외부")]),t._v("의 위치 결정 방법으로, 3차원 "),a("em",[t._v("자세")]),t._v("(위치와 방향) 를 추정하는 기술입니다. MoCap 시스템은 보통 적외선 카메라로 움직임을 감지하나, 광선 레이더, 광대역 주파(UWB) 형태 기술을 활용할 수도 있습니다.\n:::")]),t._v(" "),a("h2",{attrs:{id:"움직임-감지-motion-capture-mocap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#움직임-감지-motion-capture-mocap"}},[t._v("#")]),t._v(" 움직임 감지(Motion Capture) {#mocap}")]),t._v(" "),a("p",[t._v("움직임 감지(Motion Capture, a.k.a MoCap)는 기체 "),a("em",[t._v("외부")]),t._v("의 위치 결정 방법으로, 3차원 "),a("em",[t._v("자세")]),t._v("(위치와 방향) 를 추정하는 기술입니다. MoCap 시스템은 보통 적외선 카메라로 움직임을 감지하나, 광선 레이더, 광대역 주파(UWB) 형태 기술을 활용할 수도 있습니다.")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("MoCap은 GPS가 빠져있는 상황에서 기체 탐색 운용을 할 때 활용하며, 상대적인 "),a("em",[t._v("로컬")]),t._v(" 좌표 체계 위치 정보를 제공합니다.")])]),t._v(" "),a("p",[t._v("MoCap 기술에 대해 더 알아보려면 다음을 참고하십시오:")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/ko/ros/external_position_estimation.html"}},[t._v("외부 위치 추정")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/tutorials/motion-capture-vicon-optitrack.html"}},[t._v("움직임 감지(Motion Capture)기술을 활용한 비행 (VICON, Optitrack)")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/tuning_the_ecl_ekf.html#external-vision-system"}},[t._v("EKF > 외부 비전 시스템")])],1)]),t._v(" "),a("h2",{attrs:{id:"관성-주행-시각-측정-vio"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#관성-주행-시각-측정-vio"}},[t._v("#")]),t._v(" 관성 주행 시각 측정 {#vio}")]),t._v(" "),a("p",[t._v("관성 주행 시각 측정(VIO) 기술은 "),a("em",[t._v("로컬")]),t._v(" 시작점에서 상대 위치로 기체가 이동할 경우 3차원 "),a("em",[t._v("자세")]),t._v(" (위치와 방향)와 "),a("em",[t._v("속도")]),t._v("를 추정할 때 활용합니다. 보통 GPS가 빠졌거나 (예: 실내) 신뢰할 수 없을 때(예: 다리 아래로 비행할 경우) 기체 운행에 활용합니다.")]),t._v(" "),a("p",[t._v("관성 주행 시각 측정(VIO) 기술은 관성 측정부(IMU)에서 시각 정보와 관성 측정 수치를 결합(저화질 이미지를 촬영하는 고속 기체 이동시 오류 보정)하여 기체의 "),a("em",[t._v("자세")]),t._v("를 추정하는 "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Visual_odometry",target:"_blank",rel:"noopener noreferrer"}},[t._v("주행 시각 측정"),a("OutboundLink")],1),t._v(" 기술을 활용합니다.")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("VIO")]),t._v(" "),a("p",[t._v("와 "),a("a",{attrs:{href:"#mocap"}},[t._v("MoCap")]),t._v("간의 차이점은, VIO 카메라/관성 측정부(IMU)의 경우 기체 중심이며, 속도 정보가 추가로 붙습니다.")])]),t._v(" "),a("p",[t._v("PX4의 VIO 설정 방법을 더 알아보려면 다음을 참고하십시오:")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/tuning_the_ecl_ekf.html#external-vision-system"}},[t._v("EKF > 외부 비전 시스템")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/peripherals/camera_t265_vio.html"}},[t._v("T265 설정 안내서")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/flight_controller/snapdragon_flight_software_installation.html#install-snap-vio"}},[t._v("스냅드래곤 > 설치 > Snap VIO 설치")])],1)]),t._v(" "),a("h2",{attrs:{id:"광류-센서-optical-flow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#광류-센서-optical-flow"}},[t._v("#")]),t._v(" 광류 센서 {#optical_flow}")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/ko/sensor/optical_flow.html"}},[t._v("광류 센서(Optical Flow)")]),t._v(" 기술로 2차원 평면상의 속도를 추정합니다(아래 방향으로 향한 카메라와 아래 방향으로 향한 거리 센서 활용).")],1),t._v(" "),a("p",[t._v("광류 센서 기술을 더 알아보려면 다음을 살펴보십시오:")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/ko/sensor/optical_flow.html"}},[t._v("광류 센서")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/ko/sensor/px4flow.html"}},[t._v("PX4Flow 스마트 카메라")])],1)])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/tuning_the_ecl_ekf.html#optical-flow"}},[t._v("EKF > 광류 센서")])],1)]),t._v(" "),a("h2",{attrs:{id:"외부-참고-자료"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#외부-참고-자료"}},[t._v("#")]),t._v(" 외부 참고 자료")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/robin-shaun/XTDrone/blob/master/README.en.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("XTDrone"),a("OutboundLink")],1),t._v(" - 컴퓨터 비전용 ROS + PX4 시뮬레이션 환경입니다. "),a("a",{attrs:{href:"https://www.yuque.com/xtdrone/manual_en",target:"_blank",rel:"noopener noreferrer"}},[t._v("XTDrone 설명서"),a("OutboundLink")],1),t._v("에 시작에 필요한 모든 내용이 들어있습니다!")])])])}),[],!1,null,null,null);o.default=r.exports}}]);