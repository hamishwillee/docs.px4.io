(window.webpackJsonp=window.webpackJsonp||[]).push([[586],{2121:function(t,e,_){"use strict";_.r(e);var a=_(19),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"시각-관성-주행거리-측정-vio"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#시각-관성-주행거리-측정-vio"}},[t._v("#")]),t._v(" 시각 관성 주행거리 측정(VIO)")]),t._v(" "),a("p",[a("em",[t._v("Visual Inertial Odometry")]),t._v(" (VIO)는 "),a("em",[t._v("지역적")]),t._v(" 시작 위치를 기준으로 움직이는 기체의 3차원 "),a("em",[t._v("자세")]),t._v(" (지역적 위치 및 방향)와 "),a("em",[t._v("속도")]),t._v("를 추정하는 "),a("RouterLink",{attrs:{to:"/ko/computer_vision/"}},[t._v("컴퓨터 비전")]),t._v(" 기술입니다. GPS가 없거나 신뢰할 수없는 상황 (예 : 실내 또는 다리 아래에서 비행시)에서 기체 내비게이션용으로 사용됩니다.")],1),t._v(" "),a("p",[t._v("VIO는 기체 IMU의 관성 측정과 결합된 카메라 이미지에서 기체의 "),a("em",[t._v("자세")]),t._v("를 추정하기 위하여 "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Visual_odometry",target:"_blank",rel:"noopener noreferrer"}},[t._v("시각적 Odometry"),a("OutboundLink")],1),t._v("를 사용합니다 (이미지 캡처 불량을 초래하는 빠른 기체 이동과 관련된 오류를 수정함).")]),t._v(" "),a("p",[a("em",[t._v("지원 가능한")]),t._v("  VIO 설정을 사용하도록 PX4와 보조 컴퓨터 설정 방법을 설명합니다.")]),t._v(" "),a("iframe",{attrs:{width:"650",height:"365",src:"https://www.youtube.com/embed/gWtrka2mK7U",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"",mark:"crwd-mark"}}),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("위의 "),a("a",{attrs:{href:"https://auterion.com/enabling_uav_navigation_in_environments_with_limited_or_no_gps_signal/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Auterion 제품 동영상"),a("OutboundLink")],1),t._v("은 "),a("a",{attrs:{href:"#supported_setup"}},[t._v("지원 가능한 설정")]),t._v("을 사용하여 비행중인기체를 보여줍니다.")])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("이 (지원되는) 솔루션은 ROS를 사용하여 VIO 정보를 PX4로 라우팅합니다. PX4 자체는 적절한 "),a("RouterLink",{attrs:{to:"/ko/ros/external_position_estimation.html#px4-mavlink-integration"}},[t._v("MAVLink 인터페이스")]),t._v("를 통하여 제공되는 메시지 소스는 신경 쓰지 않습니다.")],1)]),t._v(" "),a("p",[a("a",{attrs:{id:"supported_setup"}})]),t._v(" "),a("h2",{attrs:{id:"지원-가능한-설정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#지원-가능한-설정"}},[t._v("#")]),t._v(" 지원 가능한 설정")]),t._v(" "),a("p",[t._v("지원 가능한 설정은 "),a("RouterLink",{attrs:{to:"/ko/peripherals/camera_t265_vio.html"}},[t._v("T265 Intel Realsense 추적 카메라")]),t._v(" 및 ROS (보조 컴퓨터에서 실행)를 사용하여 PX4에 주행 거리 측정 정보를 제공합니다. The Auterion "),a("a",{attrs:{href:"https://github.com/Auterion/VIO_bridge",target:"_blank",rel:"noopener noreferrer"}},[t._v("VIO bridge ROS node"),a("OutboundLink")],1),t._v(" provides a bridge between this (particular) camera and ROS.")],1),t._v(" "),a("h3",{attrs:{id:"카메라-장착"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#카메라-장착"}},[t._v("#")]),t._v(" 카메라 장착")]),t._v(" "),a("p",[t._v("카메라를 보조 컴퓨터에 연결하고 프레임에 장착합니다.")]),t._v(" "),a("ul",[a("li",[t._v("제공된 케이블을 사용하여 "),a("RouterLink",{attrs:{to:"/ko/peripherals/camera_t265_vio.html"}},[t._v("T265 Intel Realsense 추적 카메라")]),t._v("를 연결합니다.")],1),t._v(" "),a("li",[t._v("가능하면 렌즈가 아래쪽을 향하도록 카메라를 장착하십시오 (기본값).")]),t._v(" "),a("li",[t._v("카메라는 진동에 매우 민감합니다. 부드러운 장착이 권장됩니다 (예 : 방진폼 사용).")])]),t._v(" "),a("h3",{attrs:{id:"ros-vio-설정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ros-vio-설정"}},[t._v("#")]),t._v(" ROS/VIO 설정")]),t._v(" "),a("p",[t._v("Bridge, ROS 및 PX4를 설정 :")]),t._v(" "),a("ul",[a("li",[t._v("보조 컴퓨터에서 "),a("RouterLink",{attrs:{to:"/ko/ros/mavros_installation.html"}},[t._v("MAVROS")]),t._v("를 설치하고 설정합니다.")],1),t._v(" "),a("li",[t._v("Auterion "),a("a",{attrs:{href:"https://github.com/Auterion/VIO_bridge",target:"_blank",rel:"noopener noreferrer"}},[t._v("VIO 브리지 ROS 노드"),a("OutboundLink")],1),t._v("를 가져옵니다.\n"),a("ul",[a("li",[t._v("catkin 작업 공간에서이 저장소를 복제하십시오."),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("cd ~/catkin_ws/src\n")])])])])])])]),t._v(" "),a("p",[t._v("git clone https://github.com/Auterion/VIO.git\n```")]),t._v(" "),a("ul",[a("li",[t._v("패키지 빌드:"),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("cd ~/catkin_ws/src\n")])])])])]),t._v(" "),a("p",[t._v("catkin build px4_realsense_bridge\n```")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("필요한 경우 카메라 방향을 설정합니다.")]),t._v(" "),a("ul",[a("li",[t._v("카메라가 렌즈가 아래를 향하도록 장착 된 경우 VIO 브리지는 구성이 필요하지 않습니다 (기본값).")]),t._v(" "),a("li",[t._v("다른 방향의 경우 아래 섹션에서 "),a("a",{attrs:{href:"https://github.com/Auterion/VIO/blob/master/launch/bridge_mavros.launch",target:"_blank",rel:"noopener noreferrer"}},[t._v("bridge_mavros.launch"),a("OutboundLink")],1),t._v("를 수정합니다."),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("node")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("pkg")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("tf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("static_transform_publisher"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("tf_baseLink_cameraPose"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("args")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("0 0 0 0 1.5708 0 base_link camera_pose_frame 1000"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])])])]),t._v(" "),a("p",[t._v("카메라 ROS 프레임 "),a("code",[t._v("camera_pose_frame")]),t._v("을 mavros 드론 프레임 "),a("code",[t._v("base_link")]),t._v("에 연결하는 정적 변환입니다.")]),t._v(" "),a("ul",[a("li",[t._v("처음 세 개의 "),a("code",[t._v("인수")]),t._v("는 비행 컨트롤러의 중심에서 카메라까지의 미터 단위로 "),a("em",[t._v("변환")]),t._v(" x, y, z를 지정합니다. 예를 들어 카메라가 컨트롤러 앞 10cm, 위쪽 4cm 인 경우 처음 세 숫자는 [0.1, 0, 0.04, ...]입니다.")]),t._v(" "),a("li",[t._v("다음 세 개의 "),a("code",[t._v("인수")]),t._v("는 라디안 (요, 피치, 롤)으로 회전을 지정합니다. 따라서 "),a("code",[t._v("[... 0, 1.5708, 0]")]),t._v("은 90도 내림(지면을 향함)을 의미합니다. 정면을 바라보는 것은 [... 0 0 0]입니다.")])])]),t._v(" "),a("li",[a("p",[t._v("PX4 EKF2 추정기를 조정하려면 "),a("a",{attrs:{href:"#ekf2_tuning"}},[t._v("아래")]),t._v(" 지침을 따르십시오.")])]),t._v(" "),a("li",[a("p",[t._v("적절한 시작 파일과 함께 "),a("code",[t._v("roslaunch")]),t._v("를 호출하여 VIO를 실행합니다.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("cd ~/catkin_ws/src\nroslaunch px4_realsense_bridge bridge_mavros.launch\n")])])]),a("p",[t._v("실행 파일 옵션은 다음과 같습니다.")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/Auterion/VIO/blob/master/launch/bridge_mavros.launch",target:"_blank",rel:"noopener noreferrer"}},[t._v("bridge_mavros.launch"),a("OutboundLink")],1),t._v(" : 대부분의 경우 기체에 사용합니다 (브리지 및 MAVROS 시작).")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/Auterion/VIO/blob/master/launch/bridge.launch",target:"_blank",rel:"noopener noreferrer"}},[t._v("bridge.launch"),a("OutboundLink")],1),t._v(" : 다른 구성 요소가 MAVROS 시작을 담당하는 경우 사용 (브리지 시작만)")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/Auterion/VIO/blob/master/launch/bridge_mavros_sitl.launch",target:"_blank",rel:"noopener noreferrer"}},[t._v("bridge.launch"),a("OutboundLink")],1),t._v(" : 다른 구성 요소가 MAVROS 시작을 담당하는 경우 사용 (브리지 시작만)")])])]),t._v(" "),a("li",[a("p",[t._v("비행 컨트롤러 연결을 확인하십시오.")])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[a("em",[t._v("QGroundControl")]),t._v(" "),a("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/analyze_view/mavlink_inspector.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVLink Inspector"),a("OutboundLink")],1),t._v("를 사용하여 "),a("code",[t._v("ODOMETRY")]),t._v(" 또는 "),a("code",[t._v("VISION_POSITION_ESTIMATE")]),t._v(" 메시지를 받고 있는지 확인할 수 있습니다.(또는 구성 요소 ID가 197 ("),a("code",[t._v("MAV_COMP_ID_VISUAL_INERTIAL_ODOMETRY")]),t._v(") 인 "),a("code",[t._v("HEARTBEAT")]),t._v(" 메시지)")])]),t._v(" "),a("ul",[a("li",[t._v("첫 비행전에 "),a("a",{attrs:{href:"#verify_estimate"}},[t._v("VIO가 올바르게 설정되었는지 확인하십시오")]),t._v(".")])]),t._v(" "),a("p",[a("a",{attrs:{id:"ekf2_tuning"}})]),t._v(" "),a("h3",{attrs:{id:"px4-튜닝"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#px4-튜닝"}},[t._v("#")]),t._v(" PX4 튜닝")]),t._v(" "),a("p",[t._v("EKF2에서 외부 위치 정보를 사용하려면 다음 매개 변수를 설정하여야 합니다.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("매개변수")]),t._v(" "),a("th",[t._v("외부 위치 추정 설정")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_AID_MASK"}},[t._v("EKF2_AID_MASK")])],1),t._v(" "),a("td",[t._v("원하는 융합 모델에 따라 "),a("em",[t._v("시력 위치 융합")]),t._v(", "),a("em",[t._v("시력 속도 융합")]),t._v(", "),a("em",[t._v("시력 요 융합")]),t._v(" 및 "),a("em",[t._v("외부 시력 회전")]),t._v("을 설정합니다.")])]),t._v(" "),a("tr",[a("td",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_HGT_MODE"}},[t._v("EKF2_HGT_MODE")])],1),t._v(" "),a("td",[t._v("비전을 고도 추정의 기본 소스로 사용하려면 "),a("em",[t._v("비전")]),t._v("으로 설정합니다.")])]),t._v(" "),a("tr",[a("td",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_EV_DELAY"}},[t._v("EKF2_EV_DELAY")])],1),t._v(" "),a("td",[t._v('측정 타임 스탬프와 "실제" 캡처 시간의 차이로 설정합니다. 자세한 정보는 '),a("a",{attrs:{href:"#tuning-EKF2_EV_DELAY"}},[t._v("아래")]),t._v("를 참고하십시오.")])]),t._v(" "),a("tr",[a("td",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_EV_POS_X"}},[t._v("EKF2_EV_POS_X")]),t._v(", "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_EV_POS_Y"}},[t._v("EKF2_EV_POS_Y")]),t._v(", "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_EV_POS_Z"}},[t._v("EKF2_EV_POS_Z")])],1),t._v(" "),a("td",[t._v("차체 프레임에 대한 비전 센서의 위치를 설정합니다.")])])])]),t._v(" "),a("p",[a("em",[t._v("QGroundControl")]),t._v(" > "),a("strong",[t._v("기체 설정 > 매개변수 > EKF2")]),t._v("에서 설정할 수 있습니다.  (매개변수 변경 사항을 적용하려면 비행 컨트롤러를 재부팅하여야 합니다).")]),t._v(" "),a("p",[t._v("자세한 추가 정보는 "),a("RouterLink",{attrs:{to:"/ko/advanced_config/tuning_the_ecl_ekf.html#external-vision-system"}},[t._v("ECL/EKF 개요 & 튜닝 > 외부 비전 시스템 ")]),t._v("을 참고하십시오.")],1),t._v(" "),a("p",[a("a",{attrs:{id:"tuning-EKF2_EV_DELAY"}})]),t._v(" "),a("h4",{attrs:{id:"tuning-ekf2-ev-delay"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tuning-ekf2-ev-delay"}},[t._v("#")]),t._v(" Tuning EKF2_EV_DELAY")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_EV_DELAY"}},[t._v("EKF2_EV_DELAY")]),t._v("는 "),a("em",[t._v("IMU 측정에 대한 비전 위치 추정기 지연")]),t._v('입니다. 즉, 비전 시스템 타임스탬프와 IMU 클록 (EKF2의 "기본 클록")에 의해 기록된 "실제" 캡처 시간 간의 차이입니다.')],1),t._v(" "),a("p",[t._v("기술적으로 이것은 MoCap과 (예를 들어) ROS 컴퓨터 사이에 정확한 타임스탬프 (도착 시간이 아님)와 시간 동기화 (예 : NTP)가있는 경우 0으로 설정할 수 있습니다. 실제로는 통신 체인의 지연이 설정에 따라 달라지기 때문에 약간의 경험적인 튜닝이 필요할 수 있습니다. 시스템이 완전히 동기화된 체인으로 설정되는 경우는 드뭅니다!")]),t._v(" "),a("p",[t._v("IMU 속도와 EV 속도 사이의 오프셋을 확인하여 로그에서 대략적인 지연 추정치를 얻을 수 있습니다.")]),t._v(" "),a("p",[a("img",{attrs:{src:_(367),alt:"ekf2_ev_delay 로그"}})]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/ko/dev_log/flight_log_analysis.html#flightplot"}},[t._v("FlightPlot")]),t._v(" 또는 유사한 비행 분석 도구를 사용하여 외부 데이터와 온보드 추정치(위 참조)의 플롯을 그릴 수 있습니다.")],1)]),t._v(" "),a("p",[t._v("이 값은 동적 기동 중에 가장 낮은 EKF 혁신을 산출하는 값을 찾기 위하여 매개변수를 변경하여 추가로 조정할 수 있습니다.")]),t._v(" "),a("p",[a("a",{attrs:{id:"verify_estimate"}})]),t._v(" "),a("h2",{attrs:{id:"vio-예상치-확인"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vio-예상치-확인"}},[t._v("#")]),t._v(" VIO 예상치 확인")]),t._v(" "),a("p",[t._v("첫 비행 "),a("em",[t._v("전에")]),t._v(" VIO가 정상 작동 여부를 확인하려면 다음 검사를 수행하십시오.")]),t._v(" "),a("ul",[a("li",[t._v("PX4 매개변수 "),a("code",[t._v("MAV_ODOM_LP")]),t._v("를 1로 설정합니다. PX4는 수신된 외부 자세를 MAVLink "),a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#ODOMETRY",target:"_blank",rel:"noopener noreferrer"}},[t._v("ODOMETRY"),a("OutboundLink")],1),t._v(" 메시지로 재전송합니다. 이러한 MAVLink 메시지는 "),a("em",[t._v("QGroundControl")]),t._v(" "),a("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/analyze_view/mavlink_inspector.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVLink Inspector"),a("OutboundLink")],1),t._v("로 확인할 수 있습니다.")]),t._v(" "),a("li",[a("code",[t._v("ODOMETRY")]),t._v(" 메시지의 쿼터니언이 단위 쿼터니언 (w = 1, x = y = z = 0)에 매우 가까워 질 때까지 차량을 요잉합니다.\n"),a("ul",[a("li",[t._v("이 시점에서 바디 프레임은 외부 포즈 시스템의 참조 프레임과 정렬됩니다.")]),t._v(" "),a("li",[t._v("기체를 구르거나 피칭하지 않고 단위 쿼터니언에 가까운 쿼터니언을 얻을 수 없다면, 여전히 프레임에 피치 또는 롤 오프셋이 있을 수 있습니다. 이 경우에는 더 이상 진행하지 말고 좌표 프레임을 다시 확인하십시오.")])])]),t._v(" "),a("li",[t._v("정렬이 완료되면 지상에서 기체를 들어 올릴 수 있으며 위치의 z 좌표가 감소하는 것을 볼 수 있습니다. 기체를 앞쪽으로 움직이면 x 좌표가 증가합니다. 차량을 오른쪽으로 이동하면 y 좌표는 증가합니다.")]),t._v(" "),a("li",[t._v("메시지의 선형 속도가 "),a("em",[t._v("FRD")]),t._v(" 본문 프레임 참조 프레임에 표현되어 있는지 확인합니다.")]),t._v(" "),a("li",[t._v("PX4 매개변수 "),a("code",[t._v("MAV_ODOM_LP")]),t._v("를 0로 재설정합니다. PX4는 "),a("code",[t._v("ODOMETRY")]),t._v(" 메시지 재전송을 중지합니다.")])]),t._v(" "),a("p",[t._v("이러한 단계가 유지되면, 첫 번째 비행을 시도할 수 있습니다.")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("기체를 지상에 놓고 "),a("code",[t._v("ODOMETRY")]),t._v(" 피드백 스트리밍을 시작합니다 (위 참조). 스로틀 스틱을 내리고 모터를 작동시키십시오.")]),t._v(" "),a("p",[t._v("이 시점에서 왼쪽 스틱을 가장 낮은 위치에두고 위치 제어로 전환합니다. 초록불이 켜져야 합니다. 녹색 표시등은 위치 피드백을 사용할 수 있으며 위치 제어가 활성화되었음을 알려줍니다.")])]),t._v(" "),a("li",[a("p",[t._v("기체가 고도를 유지하도록 스로틀 스틱을 중간(데드 존)에 놓습니다. 스틱을 올리면 기준 고도가 증가하고 값을 낮추면 감소합니다. 마찬가지로 다른 스틱은 지상에서 위치를 변경합니다.")])]),t._v(" "),a("li",[a("p",[t._v("스로틀 스틱의 값을 높이면 차량이 이륙하면 즉시 중앙에 다시 놓습니다.")])]),t._v(" "),a("li",[a("p",[t._v("기체가 제자리를 유지하는 지 확인하십시오.")])])]),t._v(" "),a("h2",{attrs:{id:"문제-해결"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#문제-해결"}},[t._v("#")]),t._v(" 문제 해결")]),t._v(" "),a("p",[t._v("먼저 MAVROS가 비행 컨트롤러에 성공적으로 연결할 수 있는지 확인하십시오.")]),t._v(" "),a("p",[t._v("제대로 연결되는 경우 일반적인 문제 해결 방법은 다음과 같습니다.")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("문제 :")]),t._v(" 드론 비행시 드리프트/플라이 어웨이를 얻습니다.")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/ko/peripherals/camera_t265_vio.html"}},[t._v("T265")]),t._v("를 사용하는 경우 소프트 마운트를 시도하십시오. 이 카메라는 고주파 진동에 매우 민감합니다.")],1)])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("문제 :")]),t._v(" VIO가 활성화되면 변기 볼링이 발생합니다.")]),t._v(" "),a("ul",[a("li",[t._v("카메라의 방향이 시작 파일의 변환과 일치하는 지 확인합니다. "),a("em",[t._v("QGroundControl")]),t._v(" "),a("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/analyze_view/mavlink_inspector.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVLink Inspector"),a("OutboundLink")],1),t._v("를 사용하여 MAVROS에서 오는 "),a("code",[t._v("ODOMETRY")]),t._v(" 메시지의 속도가 FRD 좌표계에 정렬되었는지 확인합니다.")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("문제 :")]),t._v(" 비전 위치를 사용하여 루프를 닫고 GPS도 실행하고 싶습니다.")]),t._v(" "),a("ul",[a("li",[t._v("이문제는 EKF를 혼란스럽게 할 것이기 때문에 정말 어렵습니다. 테스트에서 비전 속도를 사용하는 것이 더 안정적입니다 (이 설정을 신뢰할 수있는 방법을 찾으면 알려주십시오).")])])])]),t._v(" "),a("h2",{attrs:{id:"개발자-정보"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#개발자-정보"}},[t._v("#")]),t._v(" 개발자 정보")]),t._v(" "),a("p",[t._v("이 구현을 확장하는 데 관심이있는 개발자 (또는 ROS에 의존하지 않을 수있는 다른 구현을 작성)는 "),a("RouterLink",{attrs:{to:"/ko/ros/external_position_estimation.html"}},[t._v("위치 추정용 비전 또는 모션 캡처 시스템 사용")]),t._v("을 참조하여야 합니다.")],1),t._v(" "),a("p",[t._v("이 항목에서는 LPE Estimator (사용되지 않음)와 함께 사용할 VIO를 구성하는 방법도 설명합니다.")]),t._v(" "),a("h2",{attrs:{id:"추가-정보"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#추가-정보"}},[t._v("#")]),t._v(" 추가 정보")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/tuning_the_ecl_ekf.html#external-vision-system"}},[t._v("ECL/EKF 개요와 튜닝 > 외부 비젼 시스템")])],1)])])}),[],!1,null,null,null);e.default=r.exports},367:function(t,e,_){t.exports=_.p+"assets/img/ekf2_ev_delay_tuning.e77364d5.png"}}]);