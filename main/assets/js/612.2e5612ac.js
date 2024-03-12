(window.webpackJsonp=window.webpackJsonp||[]).push([[612],{1561:function(t,e,a){t.exports=a.p+"assets/img/px4_simulator_messages.f1161233.svg"},1562:function(t,e,a){t.exports=a.p+"assets/img/px4_sitl_overview.d5d197f2.svg"},3403:function(t,e,a){"use strict";a.r(e);var s=a(19),o=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"시뮬레이션"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#시뮬레이션"}},[t._v("#")]),t._v(" 시뮬레이션")]),t._v(" "),s("p",[t._v('시뮬레이터는 PX4 비행 코드가 시뮬레이션된 가상 "세계"에서 컴퓨터로 모델링된 기체를 제어합니다. You can interact with this vehicle just as you might with a real vehicle, using '),s("em",[t._v("QGroundControl")]),t._v(", an offboard API, or a radio controller/gamepad.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("Simulation is a quick, easy, and most importantly, "),s("em",[t._v("safe")]),t._v(" way to test changes to PX4 code before attempting to fly in the real world. 실험할 기체가 없은 경우 PX4로 비행을 시작하는 것도 좋은 방법입니다.")])]),t._v(" "),s("p",[t._v("PX4 supports both "),s("em",[t._v("Software In the Loop (SITL)")]),t._v(" simulation, where the flight stack runs on computer (either the same computer or another computer on the same network) and "),s("em",[t._v("Hardware In the Loop (HITL)")]),t._v(" simulation using a simulation firmware on a real flight controller board.")]),t._v(" "),s("p",[t._v("사용 가능한 시뮬레이터와 설정 방법을 다음 섹션에서 설명합니다. The other sections provide general information about how the simulator works, and are not required to "),s("em",[t._v("use")]),t._v(" the simulators.")]),t._v(" "),s("h2",{attrs:{id:"지원되는-시뮬레이터"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#지원되는-시뮬레이터"}},[t._v("#")]),t._v(" 지원되는 시뮬레이터")]),t._v(" "),s("p",[t._v("The following simulators are supported by the PX4 core development team.")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("시뮬레이터")]),t._v(" "),s("th",[t._v("설명")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("RouterLink",{attrs:{to:"/ko/sim_gazebo_gz/"}},[t._v("Gazebo")])],1),t._v(" "),s("td",[s("p",[s("strong",[t._v("이 시뮬레이터를 적극 권장합니다.")])]),s("p",[t._v("Gazebo supersedes "),s("RouterLink",{attrs:{to:"/ko/sim_gazebo_classic/"}},[t._v("Gazebo Classic")]),t._v(", featuring more advanced rendering, physics and sensor models. It is the only version of Gazebo available from Ubuntu Linux 22.04")],1),s("p",[t._v("물체 회피와 컴퓨터 비전 테스트에 매우 적합한 강력한 3D 시뮬레이션 환경입니다. "),s("RouterLink",{attrs:{to:"/ko/simulation/multi-vehicle-simulation.html"}},[t._v("다중 차량시뮬레이션")]),t._v("에도 사용할 수 있으며 일반적으로 차량 제어 자동화를 위한 도구 모음인 "),s("RouterLink",{attrs:{to:"/ko/simulation/ros_interface.html"}},[t._v("ROS")]),t._v("와 함께 사용됩니다. ")],1),s("p",[s("strong",[t._v("Supported Vehicles:")]),t._v(" Quad, Standard VTOL, Plane")])])]),t._v(" "),s("tr",[s("td",[s("RouterLink",{attrs:{to:"/ko/sim_gazebo_classic/"}},[t._v("Gazebo Classic")])],1),t._v(" "),s("td",[s("p",[s("strong",[t._v("이 시뮬레이터를 적극 권장합니다.")])]),s("p",[t._v("물체 회피와 컴퓨터 비전 테스트에 매우 적합한 강력한 3D 시뮬레이션 환경입니다. "),s("RouterLink",{attrs:{to:"/ko/simulation/multi-vehicle-simulation.html"}},[t._v("다중 차량시뮬레이션")]),t._v("에도 사용할 수 있으며 일반적으로 차량 제어 자동화를 위한 도구 모음인 "),s("RouterLink",{attrs:{to:"/ko/simulation/ros_interface.html"}},[t._v("ROS")]),t._v("와 함께 사용됩니다.")],1),s("p",[s("strong",[t._v("Supported Vehicles:")]),t._v(" Quad ("),s("RouterLink",{attrs:{to:"/ko/airframes/airframe_reference.html#copter_quadrotor_x_generic_quadcopter"}},[t._v("Iris")]),t._v(", Hex (Typhoon H480), "),s("RouterLink",{attrs:{to:"/ko/airframes/airframe_reference.html#vtol_standard_vtol_generic_standard_vtol"}},[t._v("Generic Standard VTOL (QuadPlane)")]),t._v(", Tailsitter, Plane, Rover, Submarine ")],1)])]),t._v(" "),s("tr",[s("td",[s("RouterLink",{attrs:{to:"/ko/sim_jmavsim/"}},[t._v("jMAVSim")])],1),t._v(" "),s("td",[t._v("A simple multirotor simulator that allows you to fly "),s("em",[t._v("copter")]),t._v(" type vehicles around a simulated world. "),s("p",[t._v("설정이 간단하며, 기체가 이륙, 비행, 착륙할 수 있으며, 다양한 장애 조건(예: GPS 장애)에 적절하게 반응 여부를 테스트할 수 있습니다. It can also be used for "),s("RouterLink",{attrs:{to:"/ko/sim_jmavsim/multi_vehicle.html"}},[t._v("multi-vehicle simulation")]),t._v(".")],1),s("p",[s("strong",[t._v("지원 차량:")]),t._v(" 쿼드")])])])])]),t._v(" "),s("p",[t._v("There are also a number of "),s("RouterLink",{attrs:{to:"/ko/simulation/community_supported_simulators.html"}},[t._v("Community Supported Simulators")]),t._v(".")],1),t._v(" "),s("hr"),t._v(" "),s("p",[t._v('이 항목의 나머지 부분은 시뮬레이션 인프라 작동 방식에 대한 "다소 일반적인" 설명입니다. It is not required to '),s("em",[t._v("use")]),t._v(" the simulators.")]),t._v(" "),s("h2",{attrs:{id:"simulator-mavlink-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#simulator-mavlink-api"}},[t._v("#")]),t._v(" Simulator MAVLink API")]),t._v(" "),s("p",[t._v("All simulators except for Gazebo communicate with PX4 using the Simulator MAVLink API. 이 API는 시뮬레이션된 세계에서 PX4로 센서 데이터를 제공하고, 시뮬레이션된 차량에 적용될 비행 코드에서 모터 및 액추에이터 값을 반환하는 MAVLink 메시지 세트를 정의합니다. 아래 이미지는 메시지 흐름을 나타냅니다.")]),t._v(" "),s("p",[s("img",{attrs:{src:a(1561),alt:"시뮬레이터 MAVLink API"}})]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("A SITL build of PX4 uses "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/src/modules/simulation/simulator_mavlink/SimulatorMavlink.cpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("SimulatorMavlink.cpp"),s("OutboundLink")],1),t._v(" to handle these messages while a hardware build in HIL mode uses "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/src/modules/mavlink/mavlink_receiver.cpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("mavlink_receiver.cpp"),s("OutboundLink")],1),t._v(". 시뮬레이터의 센서 데이터는 PX4 uORB 주제에 기록됩니다. 모든 모터/액츄에이터가 차단되지만, 내부 소프트웨어는 완전하게 작동합니다.")])]),t._v(" "),s("p",[t._v("메시지는 아래에 설명되어 있습니다(자세한 내용은 링크 참조).")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("메시지")]),t._v(" "),s("th",[t._v("방향")]),t._v(" "),s("th",[t._v("설명")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_MODE_FLAG_HIL_ENABLED",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAV_MODE:MAV_MODE_FLAG_HIL_ENABLED"),s("OutboundLink")],1)]),t._v(" "),s("td",[t._v("없음")]),t._v(" "),s("td",[t._v("시뮬레이션 모드 플래그입니다. 모든 모터/액추에이터가 차단되지만, 내부 소프트웨어는 완전하게 작동합니다.")])]),t._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#HIL_ACTUATOR_CONTROLS",target:"_blank",rel:"noopener noreferrer"}},[t._v("HIL_ACTUATOR_CONTROLS"),s("OutboundLink")],1)]),t._v(" "),s("td",[t._v("PX4 → Sim")]),t._v(" "),s("td",[t._v("PX4 제어 출력(모터, 액추에이터).")])]),t._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#HIL_SENSOR",target:"_blank",rel:"noopener noreferrer"}},[t._v("HIL_SENSOR"),s("OutboundLink")],1)]),t._v(" "),s("td",[t._v("Sim → PX4")]),t._v(" "),s("td",[t._v("NED 본체 프레임의 SI 단위로 시뮬레이션된 IMU 판독값.")])]),t._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#HIL_GPS",target:"_blank",rel:"noopener noreferrer"}},[t._v("HIL_GPS"),s("OutboundLink")],1)]),t._v(" "),s("td",[t._v("Sim → PX4")]),t._v(" "),s("td",[t._v("시뮬레이션된 GPS RAW 센서 값입니다.")])]),t._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#HIL_OPTICAL_FLOW",target:"_blank",rel:"noopener noreferrer"}},[t._v("HIL_OPTICAL_FLOW"),s("OutboundLink")],1)]),t._v(" "),s("td",[t._v("Sim → PX4")]),t._v(" "),s("td",[t._v("흐름 센서에서 시뮬레이션된 광류(예: PX4FLOW 또는 광학 마우스 센서)")])]),t._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#HIL_STATE_QUATERNION",target:"_blank",rel:"noopener noreferrer"}},[t._v("HIL_STATE_QUATERNION"),s("OutboundLink")],1)]),t._v(" "),s("td",[t._v("Sim → PX4")]),t._v(" "),s("td",[t._v('실제 "시뮬레이션된" 차량 위치, 자세, 속도 등이 포함됩니다. 이것은 분석 및 디버깅에 대한 PX4의 추정치와 비교 기록될 수 있습니다(예: 노이즈가 있는(시뮬레이션된) 센서 입력에 대해 추정기가 얼마나 잘 작동하는 지 확인).')])]),t._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#HIL_RC_INPUTS_RAW",target:"_blank",rel:"noopener noreferrer"}},[t._v("HIL_RC_INPUTS_RAW"),s("OutboundLink")],1)]),t._v(" "),s("td",[t._v("Sim → PX4")]),t._v(" "),s("td",[t._v("수신된 RC 채널의 RAW 값입니다.")])])])]),t._v(" "),s("p",[t._v("PX4 directly uses the "),s("a",{attrs:{href:"https://gazebosim.org/docs",target:"_blank",rel:"noopener noreferrer"}},[t._v("Gazebo API"),s("OutboundLink")],1),t._v(" to interface with "),s("RouterLink",{attrs:{to:"/ko/sim_gazebo_gz/"}},[t._v("Gazebo")]),t._v(" and MAVlink is not required.")],1),t._v(" "),s("h2",{attrs:{id:"기본-px4-mavlink-udp-포트"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#기본-px4-mavlink-udp-포트"}},[t._v("#")]),t._v(" 기본 PX4 MAVLink UDP 포트")]),t._v(" "),s("p",[t._v("By default, PX4 uses commonly established UDP ports for MAVLink communication with ground control stations (e.g. "),s("em",[t._v("QGroundControl")]),t._v("), Offboard APIs (e.g. MAVSDK, MAVROS) and simulator APIs (e.g. Gazebo). 해당 포트는 다음과 같습니다:")]),t._v(" "),s("ul",[s("li",[t._v("PX4의 원격 UDP 포트 "),s("strong",[t._v("14550")]),t._v("은 지상관제국 통신에 사용됩니다. GCS는 이 포트에서 연결 수신을 예상합니다. "),s("em",[t._v("QGroundControl")]),t._v(" listens to this port by default.")]),t._v(" "),s("li",[t._v("PX4의 원격 UDP 포트 "),s("strong",[t._v("14540")]),t._v("은 오프보드 API 통신에 사용됩니다. 오프보드 API는 이 포트에서 연결 수신을 예상합니다. :::note 다중 차량 시뮬레이션은 각 인스턴스에 대해 별도의 원격 포트를 사용하며 "),s("code",[t._v("14540")]),t._v("에서 "),s("code",[t._v("14549")]),t._v("까지 순차적으로 할당합니다. (추가 인스턴스는 모두 "),s("code",[t._v("14549")]),t._v(" 포트를 사용합니다).\n:::")]),t._v(" "),s("li",[t._v("시뮬레이터의 로컬 TCP 포트 "),s("strong",[t._v("4560")]),t._v("은 PX4 통신에 사용됩니다. PX4는 이 포트를 수신하고, 시뮬레이터는 이 포트에 데이터를 브로드캐스트하여 통신을 시작합니다.")])]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("GCS")]),t._v(" "),s("p",[t._v("및 오프보드 API용 포트는 파일에서 설정되는 반면에, 시뮬레이터 브로드캐스트 포트는 시뮬레이션 MAVLink 모듈에서 하드 코딩되어 있습니다. See "),s("RouterLink",{attrs:{to:"/ko/concept/system_startup.html"}},[t._v("System Startup")]),t._v(" to learn more.")],1)]),t._v(" "),s("h2",{attrs:{id:"sitl-시뮬레이션-환경"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sitl-시뮬레이션-환경"}},[t._v("#")]),t._v(" SITL 시뮬레이션 환경")]),t._v(" "),s("p",[t._v("The diagram below shows a typical SITL simulation environment for any of the supported simulators that use MAVLink (i.e. all of them except Gazebo).")]),t._v(" "),s("p",[s("img",{attrs:{src:a(1562),alt:"PX4 SITL 개요"}})]),t._v(" "),s("p",[t._v("시스템의 차이점은 UDP를 통해 연결되며, 동일 컴퓨터 또는 동일 네트워크의 다른 컴퓨터에서도 실행됩니다.")]),t._v(" "),s("ul",[s("li",[t._v("PX4는 시뮬레이션 전용 모듈을 사용하여, 시뮬레이터의 로컬 TCP 포트 4560에 연결합니다. 그런 다음 시뮬레이터는 위에서 설명한 "),s("a",{attrs:{href:"#simulator-mavlink-api"}},[t._v("시뮬레이터 MAVLink API")]),t._v("를 사용하여 PX4와 정보를 교환합니다. SITL 및 시뮬레이터의 PX4는 동일 컴퓨터 또는 동일 네트워크의 다른 컴퓨터에서 실행할 수 있습니다.")])]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("Simulators can also use the "),s("em",[t._v("uxrce-dds bridge")]),t._v(" ("),s("RouterLink",{attrs:{to:"/ko/middleware/uxrce_dds.html"}},[t._v("XRCE-DDS")]),t._v(") to directly interact with PX4 (i.e. via "),s("RouterLink",{attrs:{to:"/ko/middleware/uorb.html"}},[t._v("UORB topics")]),t._v(" rather than MAVLink). This approach "),s("em",[t._v("may")]),t._v(" used by Gazebo Classic for "),s("RouterLink",{attrs:{to:"/ko/sim_gazebo_classic/multi_vehicle_simulation.html#build-and-test-xrce-dds"}},[t._v("multi-vehicle simulation")]),t._v(".")],1)]),t._v(" "),s("ul",[s("li",[t._v("PX4는 일반 MAVLink 모듈을 사용하여, MAVSDK 또는 ROS와 같은 외부 개발자 API와 지상국에 연결합니다.\n"),s("ul",[s("li",[t._v("지상국은 PX4의 원격 UDP 포트를 수신합니다: "),s("code",[t._v("14550")])]),t._v(" "),s("li",[t._v("외부 개발자 API는 PX4의 원격 UDP 포트인 "),s("code",[t._v("14540")]),t._v("을 수신합니다. 다중 차량 시뮬레이션의 경우 PX4는 "),s("code",[t._v("14540")]),t._v("에서 "),s("code",[t._v("14549")]),t._v("까지 각 인스턴스에 대해 별도의 원격 포트를 순차적으로 할당합니다(추가 인스턴스는 모두 포트 "),s("code",[t._v("14549")]),t._v(" 사용).")])])]),t._v(" "),s("li",[t._v("PX4 defines a number of "),s("em",[t._v("local")]),t._v(" UDP ports ("),s("code",[t._v("14580")]),t._v(","),s("code",[t._v("18570")]),t._v('), which are sometimes used when networking with PX4 running in a container or virtual machine. 이는 "일반적인" 용도로는 권장되지 않으며, 향후 변경될 수 있습니다.')]),t._v(" "),s("li",[t._v("A serial connection may be used to connect "),s("RouterLink",{attrs:{to:"/ko/config/joystick.html"}},[t._v("Joystick/Gamepad")]),t._v(" hardware via "),s("em",[t._v("QGroundControl")]),t._v(".")],1)]),t._v(" "),s("p",[t._v("일반 빌드 시스템 SITL "),s("code",[t._v("make")]),t._v(" 구성 대상을 사용하는 경우(다음 섹션 참조), SITL과 시뮬레이터가 모두 동일 컴퓨터에서 실행되고 위의 포트가 자동으로 설정됩니다. 추가 MAVLink UDP 연결을 구성하거나 빌드 구성 및 초기화 파일에서 시뮬레이션 환경을 수정할 수 있습니다.")]),t._v(" "),s("h3",{attrs:{id:"sitl-시뮬레이션-시작-구축"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sitl-시뮬레이션-시작-구축"}},[t._v("#")]),t._v(" SITL 시뮬레이션 시작/구축")]),t._v(" "),s("p",[t._v("빌드 시스템으로 SITL에서 PX4를 빌드하여 시뮬레이터를 시작/연결할 수 있습니다. 구문(단순화)은 다음과 같습니다.")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl simulator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("_vehicle-model"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[t._v("where "),s("code",[t._v("simulator")]),t._v(" is "),s("code",[t._v("gz")]),t._v(" (for Gazebo), "),s("code",[t._v("gazebo-classic")]),t._v(", "),s("code",[t._v("jmavsim")]),t._v(" or some other simulator, and vehicle-model is a particular vehicle type supported by that simulator ("),s("RouterLink",{attrs:{to:"/ko/sim_gazebo_gz/"}},[t._v("Gazebo")]),t._v(" and "),s("RouterLink",{attrs:{to:"/ko/sim_jmavsim/"}},[t._v("jMAVSim")]),t._v(" only support multicopters at time of writing, while "),s("RouterLink",{attrs:{to:"/ko/sim_gazebo_classic/"}},[t._v("Gazebo Classic")]),t._v(" supports many different types).")],1),t._v(" "),s("p",[t._v("아래에는 여러가지 예가 있으며, 각 시뮬레이터의 개별 페이지에는 더 많은 예제들이 있습니다.")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Start Gazebo with the x500 multicopter")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl gz_x500\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Start Gazebo Classic with plane")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl gazebo-classic_plane\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Start Gazebo Classic with iris and optical flow")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl gazebo-classic_iris_opt_flow\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Start JMavSim with iris (default vehicle model)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl jmavsim\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# Start PX4 with no simulator (i.e. to use your own "custom" simulator)')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl none_iris\n")])])]),s("p",[t._v("시뮬레이션은 환경 변수를 통하여 추가로 설정이 가능합니다.")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("PX4_ESTIMATOR")]),t._v(": 사용할 추정기를 설정합니다. 가능한 옵션은 "),s("code",[t._v("ekf2")]),t._v("(기본값), "),s("code",[t._v("lpe")]),t._v("(더 이상 사용되지 않음)입니다. 시뮬레이션을 실행전에 "),s("code",[t._v("export PX4_ESTIMATOR=lpe")]),t._v("를 통하여 설정할 수 있습니다.")])]),t._v(" "),s("p",[t._v("The syntax described here is simplified, and there are many other options that you can configure via "),s("em",[t._v("make")]),t._v(" - for example, to set that you wish to connect to an IDE or debugger. 자세한 내용은 "),s("RouterLink",{attrs:{to:"/ko/dev_setup/building_px4.html#px4-make-build-targets"}},[t._v("코드 작성 > PX4 빌드 타겟 만들기")]),t._v("를 참고하십시오.")],1),t._v(" "),s("p",[s("a",{attrs:{id:"simulation_speed"}})]),t._v(" "),s("h3",{attrs:{id:"실제보다-빠른-속도로-시뮬레이션-실행"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#실제보다-빠른-속도로-시뮬레이션-실행"}},[t._v("#")]),t._v(" 실제보다 빠른 속도로 시뮬레이션 실행")]),t._v(" "),s("p",[t._v("SITL can be run faster or slower than realtime when using jMAVSim or Gazebo Classic.")]),t._v(" "),s("p",[t._v("속도 계수는 환경 변수 "),s("code",[t._v("PX4_SIM_SPEED_FACTOR")]),t._v("를 사용합니다. 예를 들어, 실시간 속도의 2배로 jMAVSim 시뮬레이션을 실행하려면:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("PX4_SIM_SPEED_FACTOR")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl jmavsim\n")])])]),s("p",[t._v("실시간 절반으로 실행하려면:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("PX4_SIM_SPEED_FACTOR")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl jmavsim\n")])])]),s("p",[s("code",[t._v("EXPORT")]),t._v("를 사용하여 현재 세션의 모든 SITL 실행 요소를 적용할 수 있습니다.")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("PX4_SIM_SPEED_FACTOR")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl jmavsim\n")])])]),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v('어느 시점에서 IO 또는 CPU는 컴퓨터의 가능한 속도를 제한하고 "자동으로" 느려집니다.\n강력한 데스크탑 컴퓨터는 일반적으로 약 6-10x에서 시뮬레이션할 수 있으며, 노트북의 경우의 최고 속도는 약 3-4x 입니다.')])]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("PX4가 데이터 링크 시간 초과를 감지하지 않도록, 시뮬레이션 속도에 비례하여 매개변수 [COM_DL_LOSS_T](../advanced_config/parameter_reference.md#COM_DL_LOSS_T) 값을 증가시키십시오. 예를 들어 `COM_DL_LOSS_T`가 실시간으로 10인 경우 10배 시뮬레이션 속도에서 100으로 증가합니다.")])]),t._v(" "),s("h3",{attrs:{id:"잠금단계시뮬레이션"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#잠금단계시뮬레이션"}},[t._v("#")]),t._v(" 잠금단계시뮬레이션")]),t._v(" "),s("p",[t._v("PX4 SITL and the simulators (jMAVSim or Gazebo Classic) have been set up to run in "),s("em",[t._v("lockstep")]),t._v(". What this means is that PX4 and the simulator wait on each other for sensor and actuator messages, rather than running at their own speeds.")]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("잠금단계를 사용하여 "),s("a",{attrs:{href:"#simulation_speed"}},[t._v("실시간보다 빠르거나 느리게 시뮬레이션을 실행")]),t._v("할 수 있으며, 코드 단계별 실행을 위하여 일시 중지할 수 있습니다.")])]),t._v(" "),s("p",[t._v("잠금단계의 순서는 다음과 같습니다.")]),t._v(" "),s("ol",[s("li",[t._v("시뮬레이션은 타임스탬프 "),s("code",[t._v("time_usec")]),t._v("가 포함된 센서 메시지 "),s("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#HIL_SENSOR",target:"_blank",rel:"noopener noreferrer"}},[t._v("HIL_SENSOR"),s("OutboundLink")],1),t._v("를 전송하여 PX4의 센서 상태와 시간을 업데이트합니다.")]),t._v(" "),s("li",[t._v("PX4는 이것을 수신하고 상태 추정, 제어 등을 한 번 반복하고, 액추에이터 메시지 "),s("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#HIL_ACTUATOR_CONTROLS",target:"_blank",rel:"noopener noreferrer"}},[t._v("HIL_ACTUATOR_CONTROLS"),s("OutboundLink")],1),t._v("를 전송합니다.")]),t._v(" "),s("li",[t._v("시뮬레이션은 액추에이터/모터 메시지를 수신후에, 물리적 시뮬레이션후에 PX4로 전송할 다음 센서 메시지를 계산합니다.")])]),t._v(" "),s("p",[t._v('시스템은 시뮬레이션 시간을 포함하는 센서 메시지를 전송하는 "프리휠링" 기간으로 시작하므로, 초기화되고 액추에이터 메시지로 응답시까지 PX4를 실행합니다.')]),t._v(" "),s("h4",{attrs:{id:"잠금단계-시뮬레이션-비활성화"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#잠금단계-시뮬레이션-비활성화"}},[t._v("#")]),t._v(" 잠금단계 시뮬레이션 비활성화")]),t._v(" "),s("p",[t._v("SITL이 이 기능을 지원하지 않는 시뮬레이터와 함께 사용되는 경우에는 잠금단계 시뮬레이션을 비활성화할 수 있습니다. 이 경우 시뮬레이터와 PX4는 호스트 시스템 시간을 사용하며 서로를 기다리지 않습니다.")]),t._v(" "),s("p",[t._v("To disable lockstep in PX4, run "),s("code",[t._v("make px4_sitl_default boardconfig")]),t._v(" and set the "),s("code",[t._v("BOARD_NOLOCKSTEP")]),t._v(' "Force disable lockstep" symbol which is located under toolchain.')]),t._v(" "),s("p",[t._v("To disable lockstep in Gazebo, edit "),s("a",{attrs:{href:"https://github.com/PX4/PX4-SITL_gazebo-classic/blob/3062d287c322fabf1b41b8e33518eb449d4ac6ed/models/plane/plane.sdf#L449",target:"_blank",rel:"noopener noreferrer"}},[t._v("the model SDF file"),s("OutboundLink")],1),t._v(" and set "),s("code",[t._v("<enable_lockstep>false</enable_lockstep>")]),t._v(".")]),t._v(" "),s("p",[t._v("To disable lockstep in jMAVSim, remove "),s("code",[t._v("-l")]),t._v(" in "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/Tools/simulation/jsbsim/sitl_run.sh#L40",target:"_blank",rel:"noopener noreferrer"}},[t._v("sitl_run.sh"),s("OutboundLink")],1),t._v(", or make sure otherwise that the java binary is started without the "),s("code",[t._v("-lockstep")]),t._v(" flag.")]),t._v(" "),s("h3",{attrs:{id:"시작-스크립트"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#시작-스크립트"}},[t._v("#")]),t._v(" 시작 스크립트")]),t._v(" "),s("p",[t._v("스크립트는 매개변수 설정과 시작 모듈 제어에 사용됩니다. They are located in the "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/ROMFS/px4fmu_common/init.d-posix",target:"_blank",rel:"noopener noreferrer"}},[t._v("ROMFS/px4fmu_common/init.d-posix"),s("OutboundLink")],1),t._v(" directory, the "),s("code",[t._v("rcS")]),t._v(" file is the main entry point. 자세한 내용은 "),s("RouterLink",{attrs:{to:"/ko/concept/system_startup.html"}},[t._v("시스템 시작")]),t._v("을 참고하십시오.")],1),t._v(" "),s("h3",{attrs:{id:"안정장치-및-센서-하드웨어-오류-시뮬레이션"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#안정장치-및-센서-하드웨어-오류-시뮬레이션"}},[t._v("#")]),t._v(" 안정장치 및 센서/하드웨어 오류 시뮬레이션")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/ko/simulation/failsafes.html"}},[t._v("안전장치 시뮬레이션")]),t._v("에서는 GPS 오류 및 배터리 소모와 같은 안전 비상안전장치를 트리거 방법을 설명합니다.")],1),t._v(" "),s("h2",{attrs:{id:"hitl-시뮬레이션-환경"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hitl-시뮬레이션-환경"}},[t._v("#")]),t._v(" HITL 시뮬레이션 환경")]),t._v(" "),s("p",[t._v("HITL(Hardware-in-the-Loop) 시뮬레이션을 사용하여, 일반 PX4 펌웨어가 실제 하드웨어에서 실행됩니다. 문서화된 HITL 시뮬레이션 환경: "),s("RouterLink",{attrs:{to:"/ko/simulation/hitl.html"}},[t._v("HITL 시뮬레이션")]),t._v(".")],1),t._v(" "),s("h2",{attrs:{id:"조이스틱-게임패드-통합"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#조이스틱-게임패드-통합"}},[t._v("#")]),t._v(" 조이스틱/게임패드 통합")]),t._v(" "),s("p",[s("em",[t._v("QGroundControl")]),t._v(" desktop versions can connect to a USB Joystick/Gamepad and send its movement commands and button presses to PX4 over MAVLink. 이것은 SITL 및 HITL 시뮬레이션 모두에서 작동하며, 시뮬레이션 차량을 직접 제어할 수 있습니다. 조이스틱이 없는 경우 QGroundControl의 화면 가상 썸스틱을 사용하여 차량을 제어할 수도 있습니다.")]),t._v(" "),s("p",[t._v("For setup information see the "),s("em",[t._v("QGroundControl User Guide")]),t._v(":")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/SetupView/Joystick.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("조이스틱 설정"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/SettingsView/VirtualJoystick.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("가상 조이스틱"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"카메라-시뮬레이션"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#카메라-시뮬레이션"}},[t._v("#")]),t._v(" 카메라 시뮬레이션")]),t._v(" "),s("p",[t._v("PX4 supports capture of both still images and video from within the "),s("RouterLink",{attrs:{to:"/ko/sim_gazebo_classic/"}},[t._v("Gazebo Classic")]),t._v(" simulated environment. This can be enabled/set up as described in "),s("RouterLink",{attrs:{to:"/ko/sim_gazebo_classic/#video-streaming"}},[t._v("Gazebo Glassic > Video Streaming")]),t._v(".")],1),t._v(" "),s("p",[t._v("The simulated camera is a gazebo classic plugin that implements the "),s("a",{attrs:{href:"https://mavlink.io/en/protocol/camera.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVLink Camera Protocol"),s("OutboundLink")],1),t._v(" "),t._v(". PX4 connects/integrates with this camera in "),s("em",[t._v("exactly the same way")]),t._v(" as it would with any other MAVLink camera:")]),t._v(" "),s("ol",[s("li",[s("p",[s("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#TRIG_INTERFACE"}},[t._v("TRIG_INTERFACE")]),t._v(" must be set to "),s("code",[t._v("3")]),t._v(" to configure the camera trigger driver for use with a MAVLink camera :::tip In this mode the driver just sends a "),s("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#CAMERA_TRIGGER",target:"_blank",rel:"noopener noreferrer"}},[t._v("CAMERA_TRIGGER"),s("OutboundLink")],1),t._v(" message whenever an image capture is requested. 자세한 내용은 "),s("RouterLink",{attrs:{to:"/ko/peripherals/camera.html"}},[t._v("카메라")]),t._v("를 참고하십시오.\n:::")],1)]),t._v(" "),s("li",[s("p",[t._v("PX4는 GCS와 (시뮬레이터) MAVLink 카메라 사이의 모든 카메라 명령을 전달하여야 합니다. 그림과 같이 "),s("code",[t._v("-f")]),t._v(" 플래그로 "),s("RouterLink",{attrs:{to:"/ko/modules/modules_communication.html#mavlink"}},[t._v("MAVLink")]),t._v("를 시작하고 새 연결을 위한 UDP 포트를 지정하면 됩니다.")],1),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("mavlink start -u "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14558")]),t._v(" -o "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14530")]),t._v(" -r "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4000")]),t._v(" -f -m camera\n")])])]),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")])])])]),t._v(" "),s("p",[t._v("카메라 MAVLink 메시지 이상은 전달되지만, 카메라는 관련이 없는 것으로 간주되는 메시지들은 무시합니다.\n:::")]),t._v(" "),s("p",[t._v("다른 시뮬레이터에서도 동일한 접근 방식을 사용하여 카메라 지원을 구현할 수 있습니다.")]),t._v(" "),s("h2",{attrs:{id:"원격-서버에서-시뮬레이션-실행"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#원격-서버에서-시뮬레이션-실행"}},[t._v("#")]),t._v(" 원격 서버에서 시뮬레이션 실행")]),t._v(" "),s("p",[t._v("한 컴퓨터에서 시뮬레이터를 실행하고 동일 네트워크(또는 적절한 라우팅이 있는 다른 네트워크)의 다른 컴퓨터에서 시뮬레이터에 접근할 수 있습니다. 시뮬레이션 차량을 실행하는 실제 보조 컴퓨터에서 실행되는 드론 애플리케이션을 테스트하는 경우에 유용합니다.")]),t._v(" "),s("p",[t._v('(네트워크 스팸과 서로 다른 시뮬레이션이 서로 간섭하는 것을 방지하기 위하여) PX4는 기본적으로 패킷을 외부 인터페이스로 라우팅하지 않기 때문에 "즉시" 작동하지 않습니다. 대신 내부적으로 트래픽을 "localhost"로 라우팅합니다.')]),t._v(" "),s("p",[t._v("아래에 설명된 대로 외부 인터페이스에서 UDP 패킷을 사용하는 여러 방법이 있습니다.")]),t._v(" "),s("h3",{attrs:{id:"mavlink-라우터-사용"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mavlink-라우터-사용"}},[t._v("#")]),t._v(" MAVLink 라우터 사용")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/intel/mavlink-router",target:"_blank",rel:"noopener noreferrer"}},[t._v("mavlink-router"),s("OutboundLink")],1),t._v("는 localhost에서 외부 인터페이스로 패킷을 라우팅하는 데 사용할 수 있습니다.")]),t._v(" "),s("p",[t._v("한 컴퓨터에서 실행 중인 SITL(UDP 포트 14550에서 localhost로 MAVLink 트래픽 전송)과 다른 컴퓨터에서 실행 중인 QGC(예: 주소 "),s("code",[t._v("10.73.41.30")]),t._v(") 간에 패킷을 라우팅하려면 다음을 수행할 수 있습니다.")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Start "),s("em",[t._v("mavlink-router")]),t._v(" with the following command:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("mavlink-routerd -e "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10.73")]),t._v(".41.30:14550 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:14550\n")])])])]),t._v(" "),s("li",[s("p",[t._v("Use a "),s("em",[t._v("mavlink-router")]),t._v(" conf file.")]),t._v(" "),s("div",{staticClass:"language-ini extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ini"}},[s("code",[s("span",{pre:!0,attrs:{class:"token header"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token section-name selector"}},[t._v("UdpEndpoint QGC")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("Mode")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("Normal")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("Address")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("10.73.41.30")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("Port")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("14550")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token header"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token section-name selector"}},[t._v("UdpEndpoint SIM")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("Mode")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("Eavesdropping")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("Address")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("127.0.0.1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("Port")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("14550")]),t._v("\n")])])])])]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("More information about "),s("em",[t._v("mavlink-router")]),t._v(" configuration can be found "),s("a",{attrs:{href:"https://github.com/mavlink-router/mavlink-router#running",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),s("OutboundLink")],1),t._v(".")])]),t._v(" "),s("h3",{attrs:{id:"udp-브로드캐스트-활성화"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#udp-브로드캐스트-활성화"}},[t._v("#")]),t._v(" UDP 브로드캐스트 활성화")]),t._v(" "),s("p",[t._v("The "),s("RouterLink",{attrs:{to:"/ko/modules/modules_communication.html#mavlink_usage"}},[t._v("mavlink module")]),t._v(" routes to "),s("em",[t._v("localhost")]),t._v(" by default, but you can enable UDP broadcasting of heartbeats using its "),s("code",[t._v("-p")]),t._v(" option. Any remote computer on the network can then connect to the simulator by listening to the appropriate port (i.e. 14550 for "),s("em",[t._v("QGroundControl")]),t._v(").")],1),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("UDP")]),t._v(" "),s("p",[t._v("브로드캐스팅은 네트워크에서 실행 중인 시뮬레이션이 하나만 있는 경우에 간단하게 연결되도록 합니다. Do not use this approach if there are multiple simulations running on the network (you might instead "),s("a",{attrs:{href:"#enable-streaming-to-specific-address"}},[t._v("publish to a specific address")]),t._v(").")])]),t._v(" "),s("p",[s("code",[t._v("mavlink start")]),t._v("가 호출되는 적절한 설정 파일에서 이 작업을 수행하여야 합니다. For example: "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/ROMFS/px4fmu_common/init.d-posix/px4-rc.mavlink",target:"_blank",rel:"noopener noreferrer"}},[t._v("/ROMFS/px4fmu_common/init.d-posix/px4-rc.mavlink"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h3",{attrs:{id:"특정-주소로-스트리밍-활성화"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#특정-주소로-스트리밍-활성화"}},[t._v("#")]),t._v(" 특정 주소로 스트리밍 활성화")]),t._v(" "),s("p",[t._v("The "),s("RouterLink",{attrs:{to:"/ko/modules/modules_communication.html#mavlink_usage"}},[t._v("mavlink module")]),t._v(" routes to "),s("em",[t._v("localhost")]),t._v(" by default, but you can specify an external IP address to stream to using its "),s("code",[t._v("-t")]),t._v(" option. The specified remote computer can then connect to the simulator by listening to the appropriate port (i.e. 14550 for "),s("em",[t._v("QGroundControl")]),t._v(").")],1),t._v(" "),s("p",[s("code",[t._v("mavlink start")]),t._v("가 호출되는 설정 파일에서 이 작업을 수행하여야 합니다. For example: "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/ROMFS/px4fmu_common/init.d-posix/px4-rc.mavlink",target:"_blank",rel:"noopener noreferrer"}},[t._v("/ROMFS/px4fmu_common/init.d-posix/px4-rc.mavlink"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h3",{attrs:{id:"ssh-터널링"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ssh-터널링"}},[t._v("#")]),t._v(" SSH 터널링")]),t._v(" "),s("p",[t._v("SSH 터널링을 사용하면 시뮬레이션 컴퓨터와 이를 사용하는 시스템이 동일 네트워크에 있지 않아도 됩니다.")]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("유사하게 VPN을 사용하여 외부 인터페이스(동일 네트워크 또는 다른 네트워크에서)에 터널을 제공할 수 있습니다.")])]),t._v(" "),s("p",[t._v("터널을 만드는 한 가지 방법은 SSH 터널링 옵션을 사용하는 것입니다. The tunnel itself can be created by running the following command on "),s("em",[t._v("localhost")]),t._v(", where "),s("code",[t._v("remote.local")]),t._v(" is the name of a remote computer:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ssh")]),t._v(" -C -fR "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14551")]),t._v(":localhost:14551 remote.local\n")])])]),s("p",[t._v("UDP 패킷은 SSH를 통해 라우팅될 수 있도록 TCP 패킷으로 변환되어야 합니다. The "),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Netcat",target:"_blank",rel:"noopener noreferrer"}},[t._v("netcat"),s("OutboundLink")],1),t._v(" utility can be used on both sides of the tunnel - first to convert packets from UDP to TCP, and then back to UDP at the other end.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("QGC")]),t._v(" "),s("p",[t._v("must be running before executing "),s("em",[t._v("netcat")]),t._v(".")])]),t._v(" "),s("p",[t._v("On the "),s("em",[t._v("QGroundControl")]),t._v(" computer, UDP packet translation may be implemented by running following commands:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkfifo")]),t._v(" /tmp/tcp2udp\nnetcat -lvp "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14551")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" /tmp/tcp2udp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" netcat -u localhost "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14550")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" /tmp/tcp2udp\n")])])]),s("p",[t._v("SSH 터널의 시뮬레이터 측에서 명령어는 다음과 같습니다.")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkfifo")]),t._v(" /tmp/udp2tcp\nnetcat -lvup "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14550")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" /tmp/udp2tcp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" netcat localhost "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14551")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" /tmp/udp2tcp\n")])])]),s("p",[t._v("포트 번호 "),s("code",[t._v("14550")]),t._v("은 QGroundControl 또는 다른 GCS에 연결하는 데 유효하지만, 다른 끝점(예: 개발자 API 등)에 맞게 조정하여야 합니다.")]),t._v(" "),s("p",[t._v("The tunnel may in theory run indefinitely, but "),s("em",[t._v("netcat")]),t._v(" connections may need to be restarted if there is a problem.")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://raw.githubusercontent.com/ThunderFly-aerospace/sitl_gazebo/autogyro-sitl/scripts/QGC_remote_connect.bash",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGC_remote_connect.bash"),s("OutboundLink")],1),t._v(" 스크립트를 QGC 컴퓨터에서 실행하여 위의 지침을 자동으로 설정/실행할 수 있습니다. 시뮬레이션은 원격 서버에서 실행 중이어야 하며, 해당 서버로 SSH 연결이 가능하여야 합니다.")])])}),[],!1,null,null,null);e.default=o.exports}}]);