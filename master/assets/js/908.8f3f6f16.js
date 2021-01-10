(window.webpackJsonp=window.webpackJsonp||[]).push([[908],{1879:function(e,t,a){"use strict";a.r(t);var n=a(18),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"안전-착륙"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#안전-착륙"}},[e._v("#")]),e._v(" 안전 착륙")]),e._v(" "),a("p",[e._v("The "),a("em",[e._v("Safe Landing")]),e._v(" feature ensures that vehicles only land on flat terrain.")]),e._v(" "),a("p",[e._v("The feature can be enabled in both "),a("RouterLink",{attrs:{to:"/ko/flight_modes/land.html"}},[e._v("Land mode")]),e._v(" and "),a("RouterLink",{attrs:{to:"/ko/flight_modes/mission.html"}},[e._v("Mission mode")]),e._v(" on multicopter vehicles that have a companion computer running the appropriate vision software. It can also be used for VTOL vehicles in MC mode.")],1),e._v(" "),a("p",[e._v("착륙 명령을 내리면, 기체는 우선 지표면을 측정할 수 있는 높이만큼 하강합니다(보조 컴퓨터의 "),a("code",[e._v("loiter_height")]),e._v(" 매개변수). 착륙 지점이 충분히 평평하지 않으면, 기체는 정방 나선 패턴 외부로 이동한 후 주기적으로 멈추고 지형을 다시 확인하는 절차를 반복하여 착륙 지점이 너무 고르지 않은지 확인합니다.")]),e._v(" "),a("p",[e._v("{% youtube %}https://youtu.be/9SuJYcT0Mgc{% endyoutube %}")]),e._v(" "),a("h2",{attrs:{id:"limitations-capabilities"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#limitations-capabilities"}},[e._v("#")]),e._v(" Limitations/Capabilities")]),e._v(" "),a("p",[e._v("Safe landing is designed for finding flat areas in rough terrain.")]),e._v(" "),a("ul",[a("li",[e._v('Landing on a road is not prevented; if a car is detected it will be "forgotten" once it moves past.')]),e._v(" "),a("li",[e._v("Landing on water may occur if using radar or ultrasound sensors, but should not occur if using stereo cameras or LIDAR.\n"),a("ul",[a("li",[e._v("The system will only land if it is able to detect ground. For stereo cameras, water that is rough enough to have sufficient distinguishing features for analysis will not be flat enough to land on.")])])])]),e._v(" "),a("h2",{attrs:{id:"px4-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#px4-configuration"}},[e._v("#")]),e._v(" PX4 Configuration")]),e._v(" "),a("p",[e._v("Safe landing is enabled within PX4 by "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameters.html"}},[e._v("setting")]),e._v(" the "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_OBS_AVOID"}},[e._v("COM_OBS_AVOID")]),e._v(" to 1.")],1),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[a("code",[e._v("COM_OBS_AVOID")]),e._v(" also enables "),a("RouterLink",{attrs:{to:"/ko/computer_vision/obstacle_avoidance.html#mission_mode"}},[e._v("Obstacle Avoidance in Missions")]),e._v(" and any other features that use the "),a("RouterLink",{attrs:{to:"/ko/computer_vision/path_planning_interface.html"}},[e._v("Path Planning Offboard Interface")]),e._v(" (Trajectory Interface) to integrate external path planning services with PX4.")],1)]),e._v(" "),a("h2",{attrs:{id:"companion-computer-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#companion-computer-setup"}},[e._v("#")]),e._v(" Companion Computer Setup")]),e._v(" "),a("p",[e._v("Companion-side setup and configuration is provided in the "),a("a",{attrs:{href:"https://github.com/PX4/avoidance#obstacle-detection-and-avoidance",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4/avoidance"),a("OutboundLink")],1),e._v(" Github repo.")]),e._v(" "),a("p",[e._v("This covers the common setup for obstacle avoidance and collision prevention, and includes specific sections for using the "),a("em",[e._v("safe landing planner")]),e._v(" (which provides companion-side support for this feature):")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/PX4/avoidance#safe-landing-planner",target:"_blank",rel:"noopener noreferrer"}},[e._v("Simulation setup"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/PX4/avoidance#safe-landing-planner-1",target:"_blank",rel:"noopener noreferrer"}},[e._v("Harware setup"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("The configuration information includes, among other things, how to set up safe landing for different cameras, sizes of vehicles, and the height at which the decision to land or not is taken.")]),e._v(" "),a("p",[a("span",{attrs:{id:"interface"}})]),e._v(" "),a("h2",{attrs:{id:"안전-착륙-인터페이스"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#안전-착륙-인터페이스"}},[e._v("#")]),e._v(" 안전 착륙 인터페이스")]),e._v(" "),a("p",[e._v("PX4 uses the "),a("RouterLink",{attrs:{to:"/ko/computer_vision/path_planning_interface.html"}},[e._v("Path Planning Interface")]),e._v(" for integrating path planning services from a companion computer (including "),a("RouterLink",{attrs:{to:"/ko/computer_vision/obstacle_avoidance.html#mission_mode"}},[e._v("Obstacle Avoidance in missions")]),e._v(", "),a("RouterLink",{attrs:{to:"/ko/computer_vision/safe_landing.html"}},[e._v("Safe Landing")]),e._v(", and future services).")],1),e._v(" "),a("p",[e._v("The interface (messages sent) between PX4 and the companion are exactly the same as for any other path planning services. Note however that the safe landing planner only uses information in Point 0 of the "),a("code",[e._v("TRAJECTORY_REPRESENTATION_WAYPOINTS")]),e._v(" message for the desired path.")]),e._v(" "),a("h2",{attrs:{id:"지원-하드웨어"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#지원-하드웨어"}},[e._v("#")]),e._v(" 지원 하드웨어")]),e._v(" "),a("p",[e._v("Tested companion computers and cameras are listed in "),a("a",{attrs:{href:"https://github.com/PX4/avoidance#run-on-hardware",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4/avoidance"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"추가-정보"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#추가-정보"}},[e._v("#")]),e._v(" 추가 정보")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://youtu.be/CxIsJWtVaTA?t=963",target:"_blank",rel:"noopener noreferrer"}},[e._v("비전 및 보드 외부 제어 인터페이스"),a("OutboundLink")],1),e._v(" (PX4 개발자 서밋 2019: Martina Rivizzigno, Auterion Computer Vision Engineer)")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/PX4/avoidance",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4/avoidance"),a("OutboundLink")],1),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/PX4/avoidance#safe-landing-planner",target:"_blank",rel:"noopener noreferrer"}},[e._v("모의 시험 환경 설정 > 안전 착륙 계획"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/PX4/avoidance#ssafe-landing-planner-1",target:"_blank",rel:"noopener noreferrer"}},[e._v("하드웨어 설정 > 안전 착륙 계획"),a("OutboundLink")],1)])])])])])}),[],!1,null,null,null);t.default=o.exports}}]);