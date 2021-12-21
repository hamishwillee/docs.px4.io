(window.webpackJsonp=window.webpackJsonp||[]).push([[1142],{2113:function(t,o,e){"use strict";e.r(o);var r=e(19),a=Object(r.a)({},(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"컴퓨터-비전-광류-센서-움직임-감지-관성-주행-시각-측정-회피"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#컴퓨터-비전-광류-센서-움직임-감지-관성-주행-시각-측정-회피"}},[t._v("#")]),t._v(" 컴퓨터 비전(광류 센서, 움직임 감지, 관성 주행 시각 측정, 회피)")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://en.wikipedia.org/wiki/Computer_vision",target:"_blank",rel:"noopener noreferrer"}},[t._v("컴퓨터 비전"),e("OutboundLink")],1),t._v("은 컴퓨터가 시각 데이터를 활용하여 실재 환경을 이해하는 기술입니다.")]),t._v(" "),e("p",[t._v("PX4는 다음 기능을 지원하기 위해 컴퓨터 비전 시스템(주로 "),e("RouterLink",{attrs:{to:"/ko/companion_computer/pixhawk_companion.html"}},[t._v("보조 컴퓨터")]),t._v("에서 실행)을 사용합니다.")],1),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#optical-flow"}},[t._v("광류")]),t._v("는 2D 속도 추정을 제공합니다(아래로 향하는 카메라와 아래로 향하는 거리 센서 사용).")]),t._v(" "),e("li",[e("a",{attrs:{href:"#motion-capture"}},[t._v("모션 캡처")]),t._v("는 차량 "),e("em",[t._v("외부")]),t._v("에 있는 비전 시스템을 사용하여 3D 포즈 추정을 제공합니다. 주로 실내 내비게이션에 사용됩니다.")]),t._v(" "),e("li",[e("a",{attrs:{href:"#visual-inertial-odometry-vio"}},[t._v("Visual Inertial Odometry")]),t._v("는 온보드 비전 시스템과 IMU를 사용하여 3D 자세 및 속도 추정을 제공합니다. 내비게이션에서 전역 위치 정보가 없거나, 신뢰할 수 없는 경우에 사용됩니다.")]),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/ko/computer_vision/obstacle_avoidance.html"}},[t._v("장애물 회피")]),t._v("는 계획된 경로를 비행시 장애물 주위를 탐색합니다(현재 임무가 지원됨). 이것은 보조 컴퓨터의 "),e("a",{attrs:{href:"https://github.com/PX4/avoidance",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4/avoidance"),e("OutboundLink")],1),t._v("를 사용합니다.")],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/ko/computer_vision/collision_prevention.html"}},[t._v("충돌 방지")]),t._v("는 장애물에 충돌하기 전에 차량을 멈추는 데 사용됩니다(주로 수동 모드에서 비행할 때).")],1)]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/ko/complete_vehicles/px4_vision_kit.html"}},[t._v("PX4 Vision Autonomy Development Kit")]),t._v("(Holybro)는 PX4에서 컴퓨터 비전으로 작업하는 개발자를 위한 강력하고 저렴한 키트입니다. "),e("a",{attrs:{href:"https://github.com/PX4/avoidance#obstacle-detection-and-avoidance",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4 회피"),e("OutboundLink")],1),t._v(" 소프트웨어는 사전 설치되어 제공되며, 자체 알고리즘으로 사용할 수 있습니다.")],1)]),t._v(" "),e("h2",{attrs:{id:"모션-캡쳐"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#모션-캡쳐"}},[t._v("#")]),t._v(" 모션 캡쳐")]),t._v(" "),e("p",[t._v("모션 캡쳐(Motion Capture, a.k.a MoCap)는 기체 "),e("em",[t._v("외부")]),t._v("의 위치 결정 방법으로, 3차원 "),e("em",[t._v("자세")]),t._v("(위치와 방향)를 추정하는 기술입니다. MoCap 시스템은 보통 적외선 카메라로 움직임을 감지하나, 광선 레이더, 광대역 주파(UWB) 형태 기술을 활용할 수도 있습니다.")]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[t._v("MoCap은 일반적으로 GPS가 없는 상황(예: 실내)에서 차량을 탐색하는 데 사용되며 "),e("em",[t._v("로컬")]),t._v(" 좌표계를 기준으로 위치를 제공합니다.")])]),t._v(" "),e("p",[t._v("MoCap 기술에 대해 더 알아보려면 다음을 참고하십시오:")]),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/ko/ros/external_position_estimation.html"}},[t._v("외부 위치 추정")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/ko/tutorials/motion-capture-vicon-optitrack.html"}},[t._v("움직임 감지(Motion Capture)기술을 활용한 비행 (VICON, Optitrack)")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/ko/advanced_config/tuning_the_ecl_ekf.html#external-vision-system"}},[t._v("EKF > 외부 비전 시스템")])],1)]),t._v(" "),e("h2",{attrs:{id:"시각적-관성-주행-거리-측정-vio"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#시각적-관성-주행-거리-측정-vio"}},[t._v("#")]),t._v(" 시각적 관성 주행 거리 측정(VIO)")]),t._v(" "),e("p",[t._v("관성 주행 시각 측정(VIO) 기술은 "),e("em",[t._v("로컬")]),t._v(" 시작점에서 상대 위치로 기체가 이동할 경우 3차원 "),e("em",[t._v("자세")]),t._v(" (위치와 방향)와 "),e("em",[t._v("속도")]),t._v("를 추정할 때 활용합니다. 보통 GPS가 빠졌거나 (예: 실내) 신뢰할 수 없을 때(예: 다리 아래로 비행할 경우) 기체 운행에 활용합니다.")]),t._v(" "),e("p",[t._v("관성 주행 시각 측정(VIO) 기술은 관성 측정부(IMU)에서 시각 정보와 관성 측정 수치를 결합(저화질 이미지를 촬영하는 고속 기체 이동시 오류 보정)하여 기체의 "),e("em",[t._v("자세")]),t._v("를 추정하는 "),e("a",{attrs:{href:"https://en.wikipedia.org/wiki/Visual_odometry",target:"_blank",rel:"noopener noreferrer"}},[t._v("주행 시각 측정"),e("OutboundLink")],1),t._v(" 기술을 활용합니다.")]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("VIO와 [MoCap](#motion-capture)의 한 가지 차이점은 VIO 카메라/IMU가 차량 기반이며 추가로 속도 정보를 제공하는 것입니다.")])]),t._v(" "),e("p",[t._v("PX4의 VIO 설정 방법을 더 알아보려면 다음을 참고하십시오:")]),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/ko/advanced_config/tuning_the_ecl_ekf.html#external-vision-system"}},[t._v("EKF > 외부 비전 시스템")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/ko/peripherals/camera_t265_vio.html"}},[t._v("T265 설정 안내서")])],1)]),t._v(" "),e("h2",{attrs:{id:"광류"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#광류"}},[t._v("#")]),t._v(" 광류")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/ko/sensor/optical_flow.html"}},[t._v("광류 센서(Optical Flow)")]),t._v(" 기술로 2차원 평면상의 속도를 추정합니다(아래 방향으로 향한 카메라와 아래 방향으로 향한 거리 센서 활용).")],1),t._v(" "),e("p",[t._v("광류 센서 기술을 더 알아보려면 다음을 참고하십시오.")]),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/ko/sensor/optical_flow.html"}},[t._v("광류")]),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/ko/sensor/px4flow.html"}},[t._v("PX4Flow 스마트 카메라")])],1)])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/ko/advanced_config/tuning_the_ecl_ekf.html#optical-flow"}},[t._v("EKF > 광류")])],1)]),t._v(" "),e("h2",{attrs:{id:"외부-참고-자료"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#외부-참고-자료"}},[t._v("#")]),t._v(" 외부 참고 자료")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/robin-shaun/XTDrone/blob/master/README.en.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("XTDrone"),e("OutboundLink")],1),t._v(" - 컴퓨터 비전용 ROS + PX4 시뮬레이션 환경입니다. "),e("a",{attrs:{href:"https://www.yuque.com/xtdrone/manual_en",target:"_blank",rel:"noopener noreferrer"}},[t._v("XTDrone 설명서"),e("OutboundLink")],1),t._v("에 시작에 필요한 모든 내용이 들어있습니다!")])])])}),[],!1,null,null,null);o.default=a.exports}}]);