(window.webpackJsonp=window.webpackJsonp||[]).push([[815],{2737:function(t,e,o){"use strict";o.r(e);var _=o(19),a=Object(_.a)({},(function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"오프보드-offboard-모드"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#오프보드-offboard-모드"}},[t._v("#")]),t._v(" 오프보드(Offboard) 모드")]),t._v(" "),_("p",[_("RouterLink",{attrs:{to:"/ko/getting_started/flight_modes.html#key_position_fixed"}},[_("img",{attrs:{src:o(327),title:"위치 고정 요구(예, GPS)",width:"30px"}})])],1),t._v(" "),_("p",[t._v("The vehicle obeys position, velocity, acceleration, attitude, attitude rates or thrust/torque setpoints provided by some source that is external to the flight stack, such as a companion computer. The setpoints may be provided using MAVLink (or a MAVLink API such as "),_("a",{attrs:{href:"https://mavsdk.mavlink.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVSDK"),_("OutboundLink")],1),t._v(") or by "),_("RouterLink",{attrs:{to:"/ko/ros/ros2.html"}},[t._v("ROS 2")]),t._v(".")],1),t._v(" "),_("p",[t._v('PX4 requires that the external controller provides a continuous 2Hz "proof of life" signal, by streaming any of the supported MAVLink setpoint messages or the ROS 2 '),_("RouterLink",{attrs:{to:"/ko/msg_docs/OffboardControlMode.html"}},[t._v("OffboardControlMode")]),t._v(" message. PX4 enables offboard control only after receiving the signal for more than a second, and will regain control if the signal stops.")],1),t._v(" "),_("div",{staticClass:"custom-block note"},[_("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),_("ul",[_("li",[t._v("이 모드에는 위치 또는 자세/태도 정보(GPS, 광학 흐름, 시각-관성 주행 거리 측정, 모캡 등)가 필요합니다.")]),t._v(" "),_("li",[t._v("RC control is disabled except to change modes (you can also fly without any manual controller at all by setting the parameter "),_("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_RC_IN_MODE"}},[t._v("COM_RC_IN_MODE")]),t._v(" to 4: Stick input disabled).")],1),t._v(" "),_("li",[t._v("The vehicle must be already be receiving a stream of MAVLink setpoint messages or ROS 2 "),_("RouterLink",{attrs:{to:"/ko/msg_docs/OffboardControlMode.html"}},[t._v("OffboardControlMode")]),t._v(" messages before arming in offboard mode or switching to offboard mode when flying.")],1),t._v(" "),_("li",[t._v("The vehicle will exit offboard mode if MAVLink setpoint messages or "),_("code",[t._v("OffboardControlMode")]),t._v(" are not received at a rate of > 2Hz.")]),t._v(" "),_("li",[t._v("Not all coordinate frames and field values allowed by MAVLink are supported for all setpoint messages and vehicles. 지원되는 값을 확인하시려면, 아래 섹션을 "),_("em",[t._v("주의 하여")]),t._v(" 읽으십시오. :::")])]),t._v(" "),_("h2",{attrs:{id:"설명"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#설명"}},[t._v("#")]),t._v(" 설명")]),t._v(" "),_("p",[t._v("Offboard mode is used for controlling vehicle movement and attitude, by setting position, velocity, acceleration, attitude, attitude rates or thrust/torque setpoints.")]),t._v(" "),_("p",[t._v("PX4 must receive a stream of MAVLink setpoint messages or the ROS 2 "),_("RouterLink",{attrs:{to:"/ko/msg_docs/OffboardControlMode.html"}},[t._v("OffboardControlMode")]),t._v(" at 2 Hz as proof that the external controller is healthy. The stream must be sent for at least a second before PX4 will arm in offboard mode, or switch to offboard mode when flying. If the rate falls below 2Hz while under external control PX4 will switch out of offboard mode after a timeout ("),_("a",{attrs:{href:"#COM_OF_LOSS_T"}},[t._v("COM_OF_LOSS_T")]),t._v("), and attempt to land or perform some other failsafe action. The action depends on whether or not RC control is available, and is defined in the parameter "),_("a",{attrs:{href:"#COM_OBL_RC_ACT"}},[t._v("COM_OBL_RC_ACT")]),t._v(".")],1),t._v(" "),_("p",[t._v('When using MAVLink the setpoint messages convey both the signal to indicate that the external source is "alive", and the setpoint value itself. In order to hold position in this case the vehicle must receive a stream of setpoints for the current position.')]),t._v(" "),_("p",[t._v("When using ROS 2 the proof that the external source is alive is provided by a stream of "),_("RouterLink",{attrs:{to:"/ko/msg_docs/OffboardControlMode.html"}},[t._v("OffboardControlMode")]),t._v(" messages, while the actual setpoint is provided by publishing to one of the setpoint uORB topics, such as "),_("RouterLink",{attrs:{to:"/ko/msg_docs/TrajectorySetpoint.html"}},[t._v("TrajectorySetpoint")]),t._v(". In order to hold position in this case the vehicle must receive a stream of "),_("code",[t._v("OffboardControlMode")]),t._v(" but would only need the "),_("code",[t._v("TrajectorySetpoint")]),t._v(" once.")],1),t._v(" "),_("p",[t._v("Note that offboard mode only supports a very limited set of MAVLink commands and messages. Operations, like taking off, landing, return to launch, may be best handled using the appropriate modes. 업로드, 다운로드 임무와 같은 작업은 모든 모드에서 수행 가능합니다.")]),t._v(" "),_("h2",{attrs:{id:"ros-2-messages"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#ros-2-messages"}},[t._v("#")]),t._v(" ROS 2 Messages")]),t._v(" "),_("p",[t._v("The following ROS 2 messages and their particular fields and field values are allowed for the specified frames. In addition to providing heartbeat functionality, "),_("code",[t._v("OffboardControlMode")]),t._v(" has two other main purposes:")]),t._v(" "),_("ol",[_("li",[t._v("Controls the level of the "),_("RouterLink",{attrs:{to:"/ko/flight_stack/controller_diagrams.html"}},[t._v("PX4 control architecture")]),t._v(" at which offboard setpoints must be injected, and disables the bypassed controllers.")],1),t._v(" "),_("li",[t._v("Determines which valid estimates (position or velocity) are required, and also which setpoint messages should be used.")])]),t._v(" "),_("p",[t._v("The "),_("code",[t._v("OffboardControlMode")]),t._v(" message is defined as shown.")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("# Off-board control mode\n\nuint64 timestamp        # time since system start (microseconds)\n\nbool position\nbool velocity\nbool acceleration\nbool attitude\nbool body_rate\nbool actuator\n")])])]),_("p",[t._v("The fields are ordered in terms of priority such that "),_("code",[t._v("position")]),t._v(" takes precedence over "),_("code",[t._v("velocity")]),t._v(" and later fields, "),_("code",[t._v("velocity")]),t._v(" takes precedence over "),_("code",[t._v("acceleration")]),t._v(", and so on. The first field that has a non-zero value (from top to bottom) defines what valid estimate is required in order to use offboard mode, and the setpoint message(s) that can be used. For example, if the "),_("code",[t._v("acceleration")]),t._v(" field is the first non-zero value, then PX4 requires a valid "),_("code",[t._v("velocity estimate")]),t._v(", and the setpoint must be specified using the "),_("code",[t._v("TrajectorySetpoint")]),t._v(" message.")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("desired control quantity")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("position field")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("velocity field")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("acceleration field")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("attitude field")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("body_rate field")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("actuator field")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("required estimate")]),t._v(" "),_("th",[t._v("required message")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("position (NED)")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("position")]),t._v(" "),_("td",[_("code",[t._v("TrajectorySetpoint")])])]),t._v(" "),_("tr",[_("td",[t._v("velocity (NED)")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("✗")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("velocity")]),t._v(" "),_("td",[_("code",[t._v("TrajectorySetpoint")])])]),t._v(" "),_("tr",[_("td",[t._v("acceleration (NED)")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("✗")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("✗")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("velocity")]),t._v(" "),_("td",[_("code",[t._v("TrajectorySetpoint")])])]),t._v(" "),_("tr",[_("td",[t._v("attitude (FRD)")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("✗")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("✗")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("✗")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("none")]),t._v(" "),_("td",[_("RouterLink",{attrs:{to:"/ko/msg_docs/VehicleAttitudeSetpoint.html"}},[t._v("VehicleAttitudeSetpoint")])],1)]),t._v(" "),_("tr",[_("td",[t._v("body_rate (FRD)")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("✗")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("✗")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("✗")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("✗")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("none")]),t._v(" "),_("td",[_("RouterLink",{attrs:{to:"/ko/msg_docs/VehicleRatesSetpoint.html"}},[t._v("VehicleRatesSetpoint")])],1)]),t._v(" "),_("tr",[_("td",[t._v("thrust and torque (FRD)")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("✗")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("✗")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("✗")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("✗")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("✗")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("none")]),t._v(" "),_("td",[_("RouterLink",{attrs:{to:"/ko/msg_docs/VehicleThrustSetpoint.html"}},[t._v("VehicleThrustSetpoint")]),t._v(" and "),_("RouterLink",{attrs:{to:"/ko/msg_docs/VehicleTorqueSetpoint.html"}},[t._v("VehicleTorqueSetpoint")])],1)])])]),t._v(" "),_("p",[t._v("where ✓ means that the bit is set, ✗ means that the bit is not set and "),_("code",[t._v("-")]),t._v(" means that the bit is value is irrelevant.")]),t._v(" "),_("div",{staticClass:"custom-block note"},[_("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),_("p",[t._v("Before using offboard mode with ROS 2, please spend a few minutes understanding the different "),_("RouterLink",{attrs:{to:"/ko/ros/ros2_comm.html#ros-2-px4-frame-conventions"}},[t._v("frame conventions")]),t._v(" that PX4 and ROS 2 use. :::")],1),t._v(" "),_("h3",{attrs:{id:"copter"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#copter"}},[t._v("#")]),t._v(" Copter")]),t._v(" "),_("ul",[_("li",[_("p",[_("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/msg/TrajectorySetpoint.msg",target:"_blank",rel:"noopener noreferrer"}},[t._v("px4_msgs::msg::TrajectorySetpoint"),_("OutboundLink")],1)]),t._v(" "),_("ul",[_("li",[t._v("다음 입력 조합이 지원됩니다.\n"),_("ul",[_("li",[t._v("Position setpoint ("),_("code",[t._v("position")]),t._v(" different from "),_("code",[t._v("NaN")]),t._v("). Non-"),_("code",[t._v("NaN")]),t._v(" values of velocity and acceleration are used as feedforward terms for the inner loop controllers.")]),t._v(" "),_("li",[t._v("Velocity setpoint ("),_("code",[t._v("velocity")]),t._v(" different from "),_("code",[t._v("NaN")]),t._v(" and "),_("code",[t._v("position")]),t._v(" set to "),_("code",[t._v("NaN")]),t._v("). Non-"),_("code",[t._v("NaN")]),t._v(" values acceleration are used as feedforward terms for the inner loop controllers.")]),t._v(" "),_("li",[t._v("Acceleration setpoint ("),_("code",[t._v("acceleration")]),t._v(" different from "),_("code",[t._v("NaN")]),t._v(" and "),_("code",[t._v("position")]),t._v(" and "),_("code",[t._v("velocity")]),t._v(" set to "),_("code",[t._v("NaN")]),t._v(")")])])])]),t._v(" "),_("ul",[_("li",[t._v("All values are interpreted in NED (Nord, East, Down) coordinate system and the units are [m], [m/s] and [m/s^2] for position, velocity and acceleration, respectively.")])])]),t._v(" "),_("li",[_("p",[_("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/msg/VehicleAttitudeSetpoint.msg",target:"_blank",rel:"noopener noreferrer"}},[t._v("px4_msgs::msg::VehicleAttitudeSetpoint"),_("OutboundLink")],1)]),t._v(" "),_("ul",[_("li",[t._v("The following input combination is supported:\n"),_("ul",[_("li",[t._v("quaterion "),_("code",[t._v("q_d")]),t._v(" + thrust setpoint "),_("code",[t._v("thrust_body")]),t._v(". Non-"),_("code",[t._v("NaN")]),t._v(" values of "),_("code",[t._v("yaw_sp_move_rate")]),t._v(" are used as feedforward terms expressed in Earth frame and in [rad/s].")])])])]),t._v(" "),_("ul",[_("li",[t._v("The quaterion represents the rotation between the drone body FRD (front, right, down) frame and the NED frame. The trust is in the drone body FRD frame and expressed in normalized [-1, 1] values.")])])]),t._v(" "),_("li",[_("p",[_("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/msg/VehicleRatesSetpoint.msg",target:"_blank",rel:"noopener noreferrer"}},[t._v("px4_msgs::msg::VehicleRatesSetpoint"),_("OutboundLink")],1)]),t._v(" "),_("ul",[_("li",[t._v("The following input combination is supported:\n"),_("ul",[_("li",[_("code",[t._v("roll")]),t._v(", "),_("code",[t._v("pitch")]),t._v(", "),_("code",[t._v("yaw")]),t._v(" and "),_("code",[t._v("thrust_body")]),t._v(".")])])])]),t._v(" "),_("ul",[_("li",[t._v("All the value are in the drone body FRD frame. The rates are in [rad/s] while thrust_body is normalized in [-1, 1].")])])]),t._v(" "),_("li",[_("p",[_("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/msg/VehicleThrustSetpoint.msg",target:"_blank",rel:"noopener noreferrer"}},[t._v("px4_msgs::msg::VehicleThrustSetpoint"),_("OutboundLink")],1),t._v(" + "),_("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/msg/VehicleTorqueSetpoint.msg",target:"_blank",rel:"noopener noreferrer"}},[t._v("px4_msgs::msg::VehicleTorqueSetpoint"),_("OutboundLink")],1)]),t._v(" "),_("ul",[_("li",[t._v("The following input combination is supported:\n"),_("ul",[_("li",[_("code",[t._v("xyz")]),t._v(" for thrust and "),_("code",[t._v("xyz")]),t._v(" for torque.")])])])]),t._v(" "),_("ul",[_("li",[t._v("All the value are in the drone body FRD frame and normalized in [-1, 1].")]),t._v(" "),_("li",[t._v("In order to save resources, this mode is disabled by default. If you want to use it you need to manually add  "),_("code",[t._v("vehicle_thrust_setpoint")]),t._v(" and "),_("code",[t._v("vehicle_torque_setpoint")]),t._v(" to the list of "),_("RouterLink",{attrs:{to:"/ko/middleware/uxrce_dds.html#dds-topics-yaml"}},[t._v("subscribed topics")]),t._v(", and manually recompile the firmware.")],1)])])]),t._v(" "),_("h2",{attrs:{id:"mavlink-messages"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#mavlink-messages"}},[t._v("#")]),t._v(" MAVLink Messages")]),t._v(" "),_("p",[t._v("The following MAVLink messages and their particular fields and field values are allowed for the specified frames.")]),t._v(" "),_("h3",{attrs:{id:"멀티콥터-vtol"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#멀티콥터-vtol"}},[t._v("#")]),t._v(" 멀티콥터/VTOL")]),t._v(" "),_("ul",[_("li",[_("p",[_("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#SET_POSITION_TARGET_LOCAL_NED",target:"_blank",rel:"noopener noreferrer"}},[t._v("SET_POSITION_TARGET_LOCAL_NED"),_("OutboundLink")],1)]),t._v(" "),_("ul",[_("li",[t._v("다음 입력 조합이 지원됩니다. "),t._v(" "),_("ul",[_("li",[t._v("위치 설정점("),_("code",[t._v("x")]),t._v(", "),_("code",[t._v("y")]),t._v(", "),_("code",[t._v("z")]),t._v(" 만 해당.)")]),t._v(" "),_("li",[t._v("Velocity setpoint (only "),_("code",[t._v("vx")]),t._v(", "),_("code",[t._v("vy")]),t._v(", "),_("code",[t._v("vz")]),t._v(")")]),t._v(" "),_("li",[t._v("가속도 설정점 ("),_("code",[t._v("afx")]),t._v(", "),_("code",[t._v("afy")]),t._v(", "),_("code",[t._v("afz")]),t._v(" 만 해당)")]),t._v(" "),_("li",[t._v("위치 설정점 및 속도 설정점 (속도 설정점은 피드 포워드로 사용되며 위치 컨트롤러의 출력에 추가되고 결과는 속도 컨트롤러의 입력으로 사용됨).")]),t._v(" "),_("li",[t._v("Position setpoint "),_("strong",[t._v("and")]),t._v(" velocity setpoint "),_("strong",[t._v("and")]),t._v(" acceleration (the velocity and the acceleration setpoints are used as feedforwards; the velocity setpoint is added to the output of the position controller and the result is used as the input to the velocity controller; the acceleration setpoint is added to the output of the velocity controller and the result used to compute the thrust vector).")])])])]),t._v(" "),_("ul",[_("li",[_("ul",[_("li",[t._v("PX4는 "),_("code",[t._v("coordinate_frame")]),t._v(" 값 (전용)을 지원합니다 : "),_("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_FRAME_LOCAL_NED",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAV_FRAME_LOCAL_NED"),_("OutboundLink")],1),t._v(" 및 "),_("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_FRAME_BODY_NED",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAV_FRAME_BODY_NED"),_("OutboundLink")],1),t._v(".")])])])])]),t._v(" "),_("li",[_("p",[_("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#SET_POSITION_TARGET_GLOBAL_INT",target:"_blank",rel:"noopener noreferrer"}},[t._v("SET_POSITION_TARGET_GLOBAL_INT"),_("OutboundLink")],1)]),t._v(" "),_("ul",[_("li",[t._v("다음 입력 조합이 지원됩니다. "),t._v(" "),_("ul",[_("li",[_("p",[t._v("위치 설정점("),_("code",[t._v("lat_int")]),t._v(", "),_("code",[t._v("lon_int")]),t._v(", "),_("code",[t._v("alt")]),t._v(" 만 해당.)")])]),t._v(" "),_("li",[_("p",[t._v("Velocity setpoint (only "),_("code",[t._v("vx")]),t._v(", "),_("code",[t._v("vy")]),t._v(", "),_("code",[t._v("vz")]),t._v(")")])]),t._v(" "),_("li",[_("p",[_("em",[t._v("추진력")]),t._v(" 설정점 ("),_("code",[t._v("afx")]),t._v(", "),_("code",[t._v("afy")]),t._v(", "),_("code",[t._v("afz")]),t._v(" 만 해당)")]),t._v(" "),_("div",{staticClass:"custom-block note"},[_("p",{staticClass:"custom-block-title"},[t._v("Note")])])])])])])])]),t._v(" "),_("p",[t._v('가속 설정점은 정규화된 추력 설정 값을 만들기 위하여 매핑됩니다 (즉, 가속 설정값은 "올바르게"지원되지 않음).')])])]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",[_("code",[t._v("* 위치 설정 값 **및** 속도 설정 값 (속도 설정 값은 피드 포워드로 사용되며 위치 컨트롤러의 출력에 추가되고 결과는 속도 컨트롤러의 입력으로 사용됨).\n")])])]),_("ul",[_("li",[t._v("PX4는 다음 "),_("code",[t._v("coordinate_frame")]),t._v(" 값 (전용)을 지원합니다 : "),_("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_FRAME_GLOBAL",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAV_FRAME_GLOBAL"),_("OutboundLink")],1),t._v(".")])]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#SET_ATTITUDE_TARGET",target:"_blank",rel:"noopener noreferrer"}},[t._v("SET_ATTITUDE_TARGET"),_("OutboundLink")],1),t._v(" "),_("ul",[_("li",[t._v("다음 입력 조합이 지원됩니다.\n"),_("ul",[_("li",[t._v("추력 설정점 ("),_("code",[t._v("SET_ATTITUDE_TARGET.thrust")]),t._v(")이 있는 자세/방향 ("),_("code",[t._v("SET_ATTITUDE_TARGET.q")]),t._v(").")]),t._v(" "),_("li",[t._v("추력 설정점 ("),_("code",[t._v("SET_ATTITUDE_TARGET.thrust")]),t._v(")이 없는 Body rate ("),_("code",[t._v("SET_ATTITUDE_TARGET")]),t._v(" "),_("code",[t._v(".body_roll_rate")]),t._v(" ,"),_("code",[t._v(".body_pitch_rate")]),t._v(", "),_("code",[t._v(".body_yaw_rate")]),t._v(") .")])])])])])]),t._v(" "),_("h3",{attrs:{id:"fixed-wing"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#fixed-wing"}},[t._v("#")]),t._v(" Fixed-wing")]),t._v(" "),_("ul",[_("li",[_("p",[_("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#SET_POSITION_TARGET_LOCAL_NED",target:"_blank",rel:"noopener noreferrer"}},[t._v("SET_POSITION_TARGET_LOCAL_NED"),_("OutboundLink")],1)]),t._v(" "),_("ul",[_("li",[t._v("다음 입력 조합이 지원됩니다 ("),_("code",[t._v("type_mask")]),t._v("를 통해). "),t._v(" "),_("ul",[_("li",[t._v("위치 설정점 ("),_("code",[t._v("x")]),t._v(", "),_("code",[t._v("y")]),t._v(", "),_("code",[t._v("z")]),t._v(" 만 해당, 속도 및 가속도 설정 값은 무시됨).\n"),_("ul",[_("li",[_("div",{staticClass:"custom-block note"},[_("p",{staticClass:"custom-block-title"},[t._v("아래의 *setpoint type* 값은 `type_mask` 필드에 대한 MAVLink 표준의 일부가 아닙니다. :::")]),t._v(" "),_("p",[t._v("값들은 다음과 같습니다:")]),t._v(" "),_("ul",[_("li",[t._v("292 : 글라이딩 설정점. 이는 추력이 없을 때 기체가 미끄러지도록하기 위해 고도보다 대기 속도를 우선하도록 TECS를 구성합니다 (즉, 속도를 조절하기 위해 피치가 제어 됨). "),_("code",[t._v("type_mask")]),t._v("를 다음과 같이 설정하는 것과 같습니다."),_("code",[t._v("POSITION_TARGET_TYPEMASK_Z_IGNORE")]),t._v(", "),_("code",[t._v("POSITION_TARGET_TYPEMASK_VZ_IGNORE")]),t._v(", "),_("code",[t._v("POSITION_TARGET_TYPEMASK_AZ_IGNORE")]),t._v(".")]),t._v(" "),_("li",[t._v("4096 : 이륙 설정점.")]),t._v(" "),_("li",[t._v("8192: 착륙 설정점.")]),t._v(" "),_("li",[t._v("12288 : Loiter 설정점 (설정점을 중심으로 선회 비행합니다).")]),t._v(" "),_("li",[t._v("16384 : 유휴 설정점 (제로 스로틀, 제로 롤/피치).")])])])])])])])]),t._v(" "),_("li",[t._v("PX4는 좌표 프레임 ("),_("code",[t._v("coordinate_frame")]),t._v(" 필드)을 지원합니다 : "),_("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_FRAME_LOCAL_NED",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAV_FRAME_LOCAL_NED"),_("OutboundLink")],1),t._v(" 및 "),_("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_FRAME_BODY_NED",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAV_FRAME_BODY_NED"),_("OutboundLink")],1),t._v(".")])])]),t._v(" "),_("li",[_("p",[_("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#SET_POSITION_TARGET_GLOBAL_INT",target:"_blank",rel:"noopener noreferrer"}},[t._v("SET_POSITION_TARGET_GLOBAL_INT"),_("OutboundLink")],1)]),t._v(" "),_("ul",[_("li",[t._v("다음 입력 조합이 지원됩니다 ("),_("code",[t._v("type_mask")]),t._v("를 통해). "),t._v(" "),_("ul",[_("li",[t._v("위치 설정점("),_("code",[t._v("lat_int")]),t._v(", "),_("code",[t._v("lon_int")]),t._v(", "),_("code",[t._v("alt")]),t._v(" 만 해당.)\n"),_("ul",[_("li",[_("code",[t._v("type_mask")]),t._v("에서 설정점의 "),_("em",[t._v("유형")]),t._v("을 지정합니다 (이 비트가 설정되지 않은 경우 차량은 꽃과 같은 패턴으로 비행합니다).")])])])])])])])]),t._v(" "),_("div",{staticClass:"custom-block note"},[_("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),_("p",[t._v("아래의 "),_("em",[t._v("setpoint type")]),t._v(" 값은 "),_("code",[t._v("type_mask")]),t._v(" 필드에 대한 MAVLink 표준의 일부가 아닙니다. :::")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",[_("code",[t._v("    값들은 다음과 같습니다:\n    - 4096 : 이륙 설정점.\n    - 8192: 착륙 설정점.\n    - 12288 : Loiter 설정점 (설정점을 중심으로 선회 비행합니다).\n    - 16384 : 유휴 설정점 (제로 스로틀, 제로 롤/피치).\n")])])]),_("ul",[_("li",[_("p",[t._v("PX4는 다음 "),_("code",[t._v("coordinate_frame")]),t._v(" 값 (전용)을 지원합니다 : "),_("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_FRAME_GLOBAL",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAV_FRAME_GLOBAL"),_("OutboundLink")],1),t._v(".")])]),t._v(" "),_("li",[_("p",[_("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#SET_ATTITUDE_TARGET",target:"_blank",rel:"noopener noreferrer"}},[t._v("SET_ATTITUDE_TARGET"),_("OutboundLink")],1)]),t._v(" "),_("ul",[_("li",[t._v("다음 입력 조합이 지원됩니다.\n"),_("ul",[_("li",[t._v("추력 설정점 ("),_("code",[t._v("SET_ATTITUDE_TARGET.thrust")]),t._v(")이 있는 자세/방향 ("),_("code",[t._v("SET_ATTITUDE_TARGET.q")]),t._v(").")]),t._v(" "),_("li",[t._v("추력 설정점 ("),_("code",[t._v("SET_ATTITUDE_TARGET.thrust")]),t._v(")이 없는 Body rate ("),_("code",[t._v("SET_ATTITUDE_TARGET")]),t._v(" "),_("code",[t._v(".body_roll_rate")]),t._v(" ,"),_("code",[t._v(".body_pitch_rate")]),t._v(", "),_("code",[t._v(".body_yaw_rate")]),t._v(") .")])])])])])]),t._v(" "),_("h3",{attrs:{id:"탐사선"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#탐사선"}},[t._v("#")]),t._v(" 탐사선")]),t._v(" "),_("ul",[_("li",[_("p",[_("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#SET_POSITION_TARGET_LOCAL_NED",target:"_blank",rel:"noopener noreferrer"}},[t._v("SET_POSITION_TARGET_LOCAL_NED"),_("OutboundLink")],1)]),t._v(" "),_("ul",[_("li",[t._v("다음 입력 조합이 지원됩니다 ("),_("code",[t._v("type_mask")]),t._v("를 통해). "),t._v(" "),_("ul",[_("li",[t._v("위치 설정점("),_("code",[t._v("x")]),t._v(", "),_("code",[t._v("y")]),t._v(", "),_("code",[t._v("z")]),t._v(" 만 해당.)\n"),_("ul",[_("li",[_("p",[_("code",[t._v("type_mask")]),t._v("에서 설정점의 "),_("em",[t._v("유형")]),t._v("을 지정합니다.")]),t._v(" "),_("p",[t._v("MAVLink에서 허용하는 모든 좌표 프레임 및 필드 값이 지원되는 것은 아닙니다. ::")]),t._v(" "),_("p",[t._v("값들은 다음과 같습니다:")]),t._v(" "),_("ul",[_("li",[t._v("-12288 : Loiter 설정점 (설정점에 매우 가까워지면 기체는 멈춤).")])])])])]),t._v(" "),_("li",[t._v("Velocity setpoint (only "),_("code",[t._v("vx")]),t._v(", "),_("code",[t._v("vy")]),t._v(", "),_("code",[t._v("vz")]),t._v(")")])])])]),t._v(" "),_("ul",[_("li",[t._v("PX4는 좌표 프레임 ("),_("code",[t._v("coordinate_frame")]),t._v(" 필드)을 지원합니다 : "),_("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_FRAME_LOCAL_NED",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAV_FRAME_LOCAL_NED"),_("OutboundLink")],1),t._v(" 및 "),_("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_FRAME_BODY_NED",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAV_FRAME_BODY_NED"),_("OutboundLink")],1),t._v(".")])])]),t._v(" "),_("li",[_("p",[_("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#SET_POSITION_TARGET_GLOBAL_INT",target:"_blank",rel:"noopener noreferrer"}},[t._v("SET_POSITION_TARGET_GLOBAL_INT"),_("OutboundLink")],1)]),t._v(" "),_("ul",[_("li",[t._v("다음 입력 조합이 지원됩니다 ("),_("code",[t._v("type_mask")]),t._v("를 통해). "),t._v(" "),_("ul",[_("li",[t._v("위치 설정점("),_("code",[t._v("lat_int")]),t._v(", "),_("code",[t._v("lon_int")]),t._v(", "),_("code",[t._v("alt")]),t._v(" 만 해당.)")])])]),t._v(" "),_("li",[_("code",[t._v("type_mask")]),t._v("에서 설정점의 "),_("em",[t._v("유형")]),t._v("을 지정합니다 (MAVLink 표준의 일부가 아님). 값들은 다음과 같습니다:\n"),_("ul",[_("li",[t._v("다음 비트가 설정되지 않으면 정상적인 동작입니다.")]),t._v(" "),_("li",[t._v("-12288 : Loiter 설정점 (설정점에 매우 가까워지면 기체는 멈춤).")])])])]),t._v(" "),_("ul",[_("li",[t._v("PX4는 좌표 프레임 ("),_("code",[t._v("coordinate_frame")]),t._v(" 필드)을 지원합니다 : "),_("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_FRAME_GLOBAL",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAV_FRAME_GLOBAL"),_("OutboundLink")],1),t._v(".")])])]),t._v(" "),_("li",[_("p",[_("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#SET_ATTITUDE_TARGET",target:"_blank",rel:"noopener noreferrer"}},[t._v("SET_ATTITUDE_TARGET"),_("OutboundLink")],1)]),t._v(" "),_("ul",[_("li",[t._v("다음 입력 조합이 지원됩니다.\n"),_("ul",[_("li",[t._v("추력 설정점 ("),_("code",[t._v("SET_ATTITUDE_TARGET.thrust")]),t._v(")이 있는 자세/방향 ("),_("code",[t._v("SET_ATTITUDE_TARGET.q")]),t._v("). :::note\nyaw 설정만 실제로 사용/추출됩니다.")])])])])])])]),t._v(" "),_("h2",{attrs:{id:"오프보드-매개변수"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#오프보드-매개변수"}},[t._v("#")]),t._v(" 오프보드 매개변수")]),t._v(" "),_("p",[_("em",[t._v("오프보드 모드")]),t._v("는 아래의 매개 변수의 영향을받습니다.")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("매개변수")]),t._v(" "),_("th",[t._v("설명")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[_("a",{attrs:{id:"COM_OF_LOSS_T"}}),_("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_OF_LOSS_T"}},[t._v("COM_OF_LOSS_T")])],1),t._v(" "),_("td",[t._v("Time-out (in seconds) to wait when offboard connection is lost before triggering offboard lost failsafe ("),_("code",[t._v("COM_OBL_RC_ACT")]),t._v(")")])]),t._v(" "),_("tr",[_("td",[_("a",{attrs:{id:"COM_OBL_RC_ACT"}}),_("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_OBL_RC_ACT"}},[t._v("COM_OBL_RC_ACT")])],1),t._v(" "),_("td",[t._v("Mode to switch to if offboard control is lost (Values are - 0: "),_("em",[t._v("Position")]),t._v(", 1: "),_("RouterLink",{attrs:{to:"/ko/flight_modes_mc/altitude.html"}},[t._v("Altitude")]),t._v(", 2: "),_("em",[t._v("Manual")]),t._v(", 3: "),_("RouterLink",{attrs:{to:"/ko/flight_modes/return.html"}},[t._v("Return ")]),t._v(", 4: "),_("RouterLink",{attrs:{to:"/ko/flight_modes/land.html"}},[t._v("Land")]),t._v(").")],1)]),t._v(" "),_("tr",[_("td",[_("a",{attrs:{id:"COM_RC_OVERRIDE"}}),_("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_RC_OVERRIDE"}},[t._v("COM_RC_OVERRIDE")])],1),t._v(" "),_("td",[t._v("Controls whether stick movement on a multicopter (or VTOL in MC mode) causes a mode change to "),_("RouterLink",{attrs:{to:"/ko/flight_modes_mc/position.html"}},[t._v("Position mode")]),t._v(". 기본적으로 오프보드 모드에서는 활성화되지 않습니다.")],1)]),t._v(" "),_("tr",[_("td",[_("a",{attrs:{id:"COM_RC_STICK_OV"}}),_("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_RC_STICK_OV"}},[t._v("COM_RC_STICK_OV")])],1),t._v(" "),_("td",[t._v("The amount of stick movement that causes a transition to "),_("RouterLink",{attrs:{to:"/ko/flight_modes_mc/position.html"}},[t._v("Position mode")]),t._v(" (if "),_("a",{attrs:{href:"#COM_RC_OVERRIDE"}},[t._v("COM_RC_OVERRIDE")]),t._v(" is enabled).")],1)]),t._v(" "),_("tr",[_("td",[_("a",{attrs:{id:"COM_RCL_EXCEPT"}}),_("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_RCL_EXCEPT"}},[t._v("COM_RCL_EXCEPT")])],1),t._v(" "),_("td",[t._v("Specify modes in which RC loss is ignored and the failsafe action not triggered. Set bit "),_("code",[t._v("2")]),t._v(" to ignore RC loss in Offboard mode.")])])])]),t._v(" "),_("h2",{attrs:{id:"개발자-리소스"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#개발자-리소스"}},[t._v("#")]),t._v(" 개발자 리소스")]),t._v(" "),_("p",[t._v("일반적으로 개발자는 MAVLink 계층에서 직접 작업하지 않지만 대신 "),_("a",{attrs:{href:"https://mavsdk.mavlink.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVSDK"),_("OutboundLink")],1),t._v(" 또는 "),_("a",{attrs:{href:"http://www.ros.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ROS"),_("OutboundLink")],1),t._v("와 같은 로봇 API를 사용합니다 (이는 개발자 친화적인 API를 제공하고 관리 및 유지 관리를 처리합니다. 연결, 메시지 전송 및 응답 모니터링-"),_("em",[t._v("오프보드 모드")]),t._v(" 및 MAVLink 작업의 세부 사항).")]),t._v(" "),_("p",[t._v("다음의 리소스는 개발자에게 유용합니다.")]),t._v(" "),_("ul",[_("li",[_("RouterLink",{attrs:{to:"/ko/ros/offboard_control.html"}},[t._v("Offboard Control from Linux")])],1),t._v(" "),_("li",[_("RouterLink",{attrs:{to:"/ko/ros/mavros_offboard_cpp.html"}},[t._v("ROS/MAVROS Offboard Example (C++)")])],1),t._v(" "),_("li",[_("RouterLink",{attrs:{to:"/ko/ros/mavros_offboard_python.html"}},[t._v("ROS/MAVROS Offboard Example (Python)")])],1)])])}),[],!1,null,null,null);e.default=a.exports},327:function(t,e,o){t.exports=o.p+"assets/img/position_fixed.38e4a675.svg"}}]);