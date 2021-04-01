(window.webpackJsonp=window.webpackJsonp||[]).push([[571],{1894:function(e,t,a){"use strict";a.r(t);var o=a(18),i=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"정밀-랜딩"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#정밀-랜딩"}},[e._v("#")]),e._v(" 정밀 랜딩")]),e._v(" "),o("p",[e._v("PX4는 "),o("a",{attrs:{href:"https://irlock.com/products/ir-lock-sensor-precision-landing-kit",target:"_blank",rel:"noopener noreferrer"}},[e._v("IR-LOCK 센서"),o("OutboundLink")],1),e._v(", IR 비컨 (예 "),o("a",{attrs:{href:"https://irlock.com/collections/markone",target:"_blank",rel:"noopener noreferrer"}},[e._v("IR-LOCK MarkOne"),o("OutboundLink")],1),e._v("), 그리고 하향 범위 센서를 사용한 "),o("em",[e._v("멀티콥터")]),e._v(" (PX4 v1.7.4 이상)의 정밀 착륙을 지원합니다. 정밀 착륙은 약 10 cm 이내의 오차로 착륙할 수 있게 합니다 (GPS 착륙은 수 미터의 오차를 가질 수 있습니다).")]),e._v(" "),o("p",[e._v("정밀 착륙은 "),o("em",[e._v("Precision Land")]),e._v(" 비행 모드나 "),o("a",{attrs:{href:"#mission"}},[e._v("미션")]),e._v("의 일부로 시작할 수 있습니다.")]),e._v(" "),o("h2",{attrs:{id:"설정"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#설정"}},[e._v("#")]),e._v(" 설정")]),e._v(" "),o("h3",{attrs:{id:"하드웨어-설정"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#하드웨어-설정"}},[e._v("#")]),e._v(" 하드웨어 설정")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://irlock.readme.io/v2.0/docs",target:"_blank",rel:"noopener noreferrer"}},[e._v(" 공식 설명서 "),o("OutboundLink")],1),e._v("에 따라 IR-LOCK 센서를 장착하십시오. 센서의 x축이 기체의 y축과 정렬되어 있는지, 센서의 y축이 기체의 -x 방향과 정렬되어 있는지 확인하십시오 (카메라에서 전방으로 90도 기울인 경우).")]),e._v(" "),o("p",[o("RouterLink",{attrs:{to:"/ko/getting_started/sensor_selection.html#distance"}},[e._v(" 범위/거리 센서 ")]),e._v("(* LidarLite v3 *)를 설치해도 문제가 없습니다.")],1),e._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),o("p",[e._v("Many infrared based range sensors do not perform well in the presence of the IR-LOCK beacon. Refer to the IR-LOCK guide for other compatible sensors.")])]),e._v(" "),o("h3",{attrs:{id:"펌웨어-구성"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#펌웨어-구성"}},[e._v("#")]),e._v(" 펌웨어 구성")]),e._v(" "),o("p",[e._v("Precision landing requires the modules "),o("code",[e._v("irlock")]),e._v(" and "),o("code",[e._v("landing_target_estimator")]),e._v(", which are not included in the PX4 firmware by default. They can be included by adding (or uncommenting) the following lines in the relevant configuration file for your flight controller (e.g. "),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/boards/px4/fmu-v5/default.cmake",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4-Autopilot/boards/px4/fmu-v5/default.cmake"),o("OutboundLink")],1),e._v("):")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("drivers/irlock\nmodules/landing_target_estimator\n")])])]),o("p",[e._v("The two modules should also be started on system boot. For instructions see: "),o("RouterLink",{attrs:{to:"/ko/concept/system_startup.html#customizing-the-system-startup"}},[e._v("customizing the system startup")]),e._v(".")],1),e._v(" "),o("h2",{attrs:{id:"소프트웨어-구성-파라미터"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#소프트웨어-구성-파라미터"}},[e._v("#")]),e._v(" 소프트웨어 구성(파라미터)")]),e._v(" "),o("p",[e._v("Precision landing is configured with the "),o("code",[e._v("landing_target_estimator")]),e._v(" and "),o("code",[e._v("navigator")]),e._v(' parameters, which are found in the "Landing target estimator" and "Precision land" groups, respectively. The most important parameters are discussed below.')]),e._v(" "),o("p",[e._v("The parameter "),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#LTEST_MODE"}},[e._v("LTEST_MODE")]),e._v(" determines if the beacon is assumed to be stationary or moving. If "),o("code",[e._v("LTEST_MODE")]),e._v(" is set to moving (e.g. it is installed on a vehicle on which the multicopter is to land), beacon measurements are only used to generate position setpoints in the precision landing controller. If "),o("code",[e._v("LTEST_MODE")]),e._v(" is set to stationary, the beacon measurements are also used by the vehicle position estimator (EKF2 or LPE).")],1),e._v(" "),o("p",[e._v("The parameters "),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#LTEST_SCALE_X"}},[e._v("LTEST_SCALE_X")]),e._v(" and "),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#LTEST_SCALE_Y"}},[e._v("LTEST_SCALE_Y")]),e._v(" can be used to scale beacon measurements before they are used to estimate the beacon's position and velocity relative to the vehicle. Measurement scaling may be necessary due to lens distortions of the IR-LOCK sensor. Note that "),o("code",[e._v("LTEST_SCALE_X")]),e._v(" and "),o("code",[e._v("LTEST_SCALE_Y")]),e._v(" are considered in the sensor frame, not the vehicle frame.")],1),e._v(" "),o("p",[e._v("To calibrate these scale parameters, set "),o("code",[e._v("LTEST_MODE")]),e._v(" to moving, fly your multicopter above the beacon and perform forward-backward and left-right motions with the vehicle, while "),o("RouterLink",{attrs:{to:"/ko/dev_log/logging.html#configuration"}},[e._v("logging")]),e._v(" "),o("code",[e._v("landing_target_pose")]),e._v(" and "),o("code",[e._v("vehicle_local_position")]),e._v(". Then, compare "),o("code",[e._v("landing_target_pose.vx_rel")]),e._v(" and "),o("code",[e._v("landing_target_pose.vy_rel")]),e._v(" to "),o("code",[e._v("vehicle_local_position.vx")]),e._v(" and "),o("code",[e._v("vehicle_local_position.vy")]),e._v(", respectively (both measurements are in NED frame). If the estimated beacon velocities are consistently smaller or larger than the vehicle velocities, adjust the scale parameters to compensate.")],1),e._v(" "),o("p",[e._v("If you observe slow sideways oscillations of the vehicle while doing a precision landing with "),o("code",[e._v("LTEST_MODE")]),e._v(" set to stationary, the beacon measurements are likely scaled too high and you should reduce the scale parameter in the relevant direction.")]),e._v(" "),o("h2",{attrs:{id:"정밀-착륙-모드"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#정밀-착륙-모드"}},[e._v("#")]),e._v(" 정밀 착륙 모드")]),e._v(" "),o("p",[e._v('A precision landing can be configured to either be "required" or "opportunistic". The choice of mode affects how a precision landing is performed.')]),e._v(" "),o("h3",{attrs:{id:"필수-모드"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#필수-모드"}},[e._v("#")]),e._v(" 필수 모드")]),e._v(" "),o("p",[e._v("In "),o("em",[e._v("Required Mode")]),e._v(" the vehicle will search for a beacon if none is visible when landing is initiated. The vehicle will perform a precision landing if a beacon is located.")]),e._v(" "),o("p",[e._v("The search procedure consists of climbing to the search altitude ("),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#PLD_SRCH_ALT"}},[e._v("PLD_SRCH_ALT")]),e._v("). If the beacon is still not visible at the search altitude and after a search timeout ("),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#PLD_SRCH_TOUT"}},[e._v("PLD_SRCH_TOUT")]),e._v("), a normal landing is initiated at the current position.")],1),e._v(" "),o("h3",{attrs:{id:"가능성-탐색-모드"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#가능성-탐색-모드"}},[e._v("#")]),e._v(" 가능성 탐색 모드")]),e._v(" "),o("p",[e._v("In "),o("em",[e._v("Opportunistic Mode")]),e._v(" the vehicle will use precision landing "),o("em",[e._v("if")]),e._v(" (and only if) the beacon is visible when landing is initiated. If it is not visible the vehicle immediately performs a "),o("em",[e._v("normal")]),e._v(" landing at the current position.")]),e._v(" "),o("h2",{attrs:{id:"정밀-착륙-수행"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#정밀-착륙-수행"}},[e._v("#")]),e._v(" 정밀 착륙 수행")]),e._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),o("p",[e._v("Due to a limitation in the current implementation of the position controller, precision landing is only possible with a valid global position.")])]),e._v(" "),o("h3",{attrs:{id:"커맨드를-사용한-수행"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#커맨드를-사용한-수행"}},[e._v("#")]),e._v(" 커맨드를 사용한 수행")]),e._v(" "),o("p",[e._v("Precision landing can be initiated through the command line interface with")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("commander mode auto:precland\n")])])]),o("p",[e._v('In this case, the precision landing is always considered "required".')]),e._v(" "),o("p",[o("span",{attrs:{id:"mission"}})]),e._v(" "),o("h3",{attrs:{id:"in-a-mission"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#in-a-mission"}},[e._v("#")]),e._v(" In a Mission")]),e._v(" "),o("p",[e._v("Precision landing can be initiated as part of a "),o("RouterLink",{attrs:{to:"/ko/flying/missions.html"}},[e._v("mission")]),e._v(" using "),o("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_NAV_LAND",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAV_CMD_NAV_LAND"),o("OutboundLink")],1),e._v(" with "),o("code",[e._v("param2")]),e._v(" set appropriately:")],1),e._v(" "),o("ul",[o("li",[o("code",[e._v("param2")]),e._v(" = 0: 비컨 사용 없이 일반 착륙")]),e._v(" "),o("li",[o("code",[e._v("param2")]),e._v(" = 1: "),o("em",[e._v("가능성 탐색")]),e._v(" 모드 정밀 착륙")]),e._v(" "),o("li",[o("code",[e._v("param2")]),e._v(" = 1: "),o("em",[e._v("필수")]),e._v(" 모드 정밀 착륙")])]),e._v(" "),o("h2",{attrs:{id:"시뮬레이션"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#시뮬레이션"}},[e._v("#")]),e._v(" 시뮬레이션")]),e._v(" "),o("p",[e._v("Precision landing with the IR-LOCK sensor and beacon can be simulated in "),o("RouterLink",{attrs:{to:"/ko/simulation/gazebo.html"}},[e._v("SITL Gazebo")]),e._v(".")],1),e._v(" "),o("p",[e._v("To start the simulation with the world that contains a IR-LOCK beacon and a vehicle with a range sensor and IR-LOCK camera, run:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("make px4_sitl gazebo_iris_irlock\n")])])]),o("p",[e._v("You can change the location of the beacon either by moving it in the Gazebo GUI or by changing its location in the "),o("a",{attrs:{href:"https://github.com/PX4/sitl_gazebo/blob/master/worlds/iris_irlock.world#L42",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gazebo world"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"작동-원리"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#작동-원리"}},[e._v("#")]),e._v(" 작동 원리")]),e._v(" "),o("h3",{attrs:{id:"착륙-목표-추정"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#착륙-목표-추정"}},[e._v("#")]),e._v(" 착륙 목표 추정")]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("landing_target_estimator")]),e._v(" takes measurements from the "),o("code",[e._v("irlock")]),e._v(" driver as well as the estimated terrain height to estimate the beacon's position relative to the vehicle.")]),e._v(" "),o("p",[e._v("The measurements in "),o("code",[e._v("irlock_report")]),e._v(' contain the tangent of the angles from the image center to the beacon. In other words, the measurements are the x and y components of the vector pointing towards the beacon, where the z component has length "1". This means that scaling the measurement by the distance from the camera to the beacon results in the vector from the camera to the beacon. This relative position is then rotated into the north-aligned, level body frame using the vehicle\'s attitude estimate. Both x and y components of the relative position measurement are filtered in separate Kalman Filters, which act as simple low-pass filters that also produce a velocity estimate and allow for outlier rejection.')]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("landing_target_estimator")]),e._v(" publishes the estimated relative position and velocity whenever a new "),o("code",[e._v("irlock_report")]),e._v(" is fused into the estimate. Nothing is published if the beacon is not seen or beacon measurements are rejected. The landing target estimate is published in the "),o("code",[e._v("landing_target_pose")]),e._v(" uORB message.")]),e._v(" "),o("h3",{attrs:{id:"고급-기체-위치-추정"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#고급-기체-위치-추정"}},[e._v("#")]),e._v(" 고급 기체 위치 추정")]),e._v(" "),o("p",[e._v("If the beacon is specified to be stationary using the parameter "),o("code",[e._v("LTEST_MODE")]),e._v(", the vehicle's position/velocity estimate can be improved with the help of the beacon measurements. This is done by fusing the beacon's velocity as a measurement of the negative velocity of the vehicle.")]),e._v(" "),o("h3",{attrs:{id:"정밀-착륙-과정"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#정밀-착륙-과정"}},[e._v("#")]),e._v(" 정밀 착륙 과정")]),e._v(" "),o("p",[e._v("The precision land procedure consists of three phases:")]),e._v(" "),o("ol",[o("li",[o("p",[o("strong",[e._v("수평 접근 방식:")]),e._v(" 기체는 현재 고도를 유지하면서 비컨에 수평으로 접근합니다. 기체에 대한 비컨 위치가 임계값("),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#PLD_HACC_RAD"}},[e._v("PLD_HACC_RAD ")]),e._v(") 미만인 경우 다음 단계가 입력됩니다. 이 단계에서 비컨이 일정 시간("),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#PLD_BTOUT"}},[e._v("PLD_BTOUT")]),e._v(' 이상의 시간) 동안 잡히지 않으면, 탐색 과정이 시작되거나 (정밀 착륙이 "필수" 모드일 때,) 기체는 일반 착륙을 수행합니다 ( "가능성 탐색" 정밀 착륙 모드일 때).')],1)]),e._v(" "),o("li",[o("p",[o("strong",[e._v("비컨 위로 하강:")]),e._v(" 기체는 비컨의 중앙에 위치하여 하강합니다. 이 단계에서 비컨이 일정 시간("),o("code",[e._v("PLD_BTOUT")]),e._v(' 이상의 시간) 동안 잡히지 않으면, 탐색 과정이 시작되거나 (정밀 착륙이 "필수" 모드일 때,) 기체는 일반 착륙을 수행합니다 ( "가능성 탐색" 정밀 착륙 모드일 때).')])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("최종 접근 방식:")]),e._v(" 기체가 지면과 가까울 때 ("),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#PLD_FAPPR_ALT"}},[e._v("PLD_FAPPR_ALT")]),e._v("), 기체는 비컨의 중앙에 위치하여 하강합니다. 만약 비컨이 이 단계에서 잡히지 않는다면, 기체는 정밀 착륙의 모드와 무관하게 계속 하강합니다.")],1)])]),e._v(" "),o("p",[e._v("Search procedures are initiated in 1. and 2. a maximum of "),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#PLD_MAX_SRCH"}},[e._v("PLD_MAX_SRCH")]),e._v(" times.")],1),e._v(" "),o("p",[o("img",{attrs:{src:a(469),alt:"Precision Landing Flow Diagram"}})])])}),[],!1,null,null,null);t.default=i.exports},469:function(e,t,a){e.exports=a.p+"assets/img/precland-flow-diagram.88e4e6cb.png"}}]);