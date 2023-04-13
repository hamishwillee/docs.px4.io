(window.webpackJsonp=window.webpackJsonp||[]).push([[688],{1984:function(t,e,o){"use strict";o.r(e);var i=o(19),n=Object(i.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"offboard-mode"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#offboard-mode"}},[t._v("#")]),t._v(" Offboard Mode")]),t._v(" "),i("p",[i("RouterLink",{attrs:{to:"/en/getting_started/flight_modes.html#key_position_fixed"}},[i("img",{attrs:{src:o(327),title:"Position fix required (e.g. GPS)",width:"30px"}})])],1),t._v(" "),i("p",[t._v("The vehicle obeys position, velocity, acceleration, attitude, attitude rates or thrust/torque setpoints provided by some source that is external to the flight stack, such as a companion computer.\nThe setpoints may be provided using MAVLink (or a MAVLink API such as "),i("a",{attrs:{href:"https://mavsdk.mavlink.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVSDK"),i("OutboundLink")],1),t._v(") or by "),i("RouterLink",{attrs:{to:"/en/ros/ros2.html"}},[t._v("ROS 2")]),t._v(".")],1),t._v(" "),i("p",[t._v('PX4 requires that the external controller provides a continuous 2Hz "proof of life" signal, by streaming any of the supported MAVLink setpoint messages or the ROS 2 '),i("RouterLink",{attrs:{to:"/en/msg_docs/OffboardControlMode.html"}},[t._v("OffboardControlMode")]),t._v(" message.\nPX4 enables offboard control only after receiving the signal for more than a second, and will regain control if the signal stops.")],1),t._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),i("ul",[i("li",[t._v("This mode requires position or pose/attitude information - e.g. GPS, optical flow, visual-inertial odometry, mocap, etc.")]),t._v(" "),i("li",[t._v("RC control is disabled except to change modes.")]),t._v(" "),i("li",[t._v("The vehicle must be already be receiving a stream of MAVLink setpoint messages or ROS 2 "),i("RouterLink",{attrs:{to:"/en/msg_docs/OffboardControlMode.html"}},[t._v("OffboardControlMode")]),t._v(" messages before arming in offboard mode or switching to offboard mode when flying.")],1),t._v(" "),i("li",[t._v("The vehicle will exit offboard mode if MAVLink setpoint messages or "),i("code",[t._v("OffboardControlMode")]),t._v(" are not received at a rate of > 2Hz.")]),t._v(" "),i("li",[t._v("Not all coordinate frames and field values allowed by MAVLink are supported for all setpoint messages and vehicles.\nRead the sections below "),i("em",[t._v("carefully")]),t._v(" to ensure only supported values are used.")])])]),t._v(" "),i("h2",{attrs:{id:"description"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),i("p",[t._v("Offboard mode is used for controlling vehicle movement and attitude, by setting position, velocity, acceleration, attitude, attitude rates or thrust/torque setpoints.")]),t._v(" "),i("p",[t._v("PX4 must receive a stream of MAVLink setpoint messages or the ROS 2 "),i("RouterLink",{attrs:{to:"/en/msg_docs/OffboardControlMode.html"}},[t._v("OffboardControlMode")]),t._v(" at 2 Hz as proof that the external controller is healthy.\nThe stream must be sent for at least a second before PX4 will arm in offboard mode, or switch to offboard mode when flying.\nIf the rate falls below 2Hz while under external control PX4 will switch out of offboard mode after a timeout ("),i("a",{attrs:{href:"#COM_OF_LOSS_T"}},[t._v("COM_OF_LOSS_T")]),t._v("), and attempt to land or perform some other failsafe action.\nThe action depends on whether or not RC control is available, and is defined in the parameter "),i("a",{attrs:{href:"#COM_OBL_RC_ACT"}},[t._v("COM_OBL_RC_ACT")]),t._v(".")],1),t._v(" "),i("p",[t._v('When using MAVLink the setpoint messages convey both the signal to indicate that the external source is "alive", and the setpoint value itself.\nIn order to hold position in this case the vehicle must receive a stream of setpoints for the current position.')]),t._v(" "),i("p",[t._v("When using ROS 2 the proof that the external source is alive is provided by a stream of "),i("RouterLink",{attrs:{to:"/en/msg_docs/OffboardControlMode.html"}},[t._v("OffboardControlMode")]),t._v(" messages, while the actual setpoint is provided by publishing to one of the setpoint uORB topics, such as "),i("RouterLink",{attrs:{to:"/en/msg_docs/TrajectorySetpoint.html"}},[t._v("TrajectorySetpoint")]),t._v(".\nIn order to hold position in this case the vehicle must receive a stream of "),i("code",[t._v("OffboardControlMode")]),t._v(" but would only need the "),i("code",[t._v("TrajectorySetpoint")]),t._v(" once.")],1),t._v(" "),i("p",[t._v("Note that offboard mode only supports a very limited set of MAVLink commands and messages.\nOperations, like taking off, landing, return to launch, may be best handled using the appropriate modes.\nOperations like uploading, downloading missions can be performed in any mode.")]),t._v(" "),i("h2",{attrs:{id:"ros-2-messages"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#ros-2-messages"}},[t._v("#")]),t._v(" ROS 2 Messages")]),t._v(" "),i("p",[t._v("The following ROS 2 messages and their particular fields and field values are allowed for the specified frames.\nIn addition to providing heartbeat functionality, "),i("code",[t._v("OffboardControlMode")]),t._v(" has two other main purposes:")]),t._v(" "),i("ol",[i("li",[t._v("Controls the level of the "),i("RouterLink",{attrs:{to:"/en/flight_stack/controller_diagrams.html"}},[t._v("PX4 control architecture")]),t._v(" at which offboard setpoints must be injected, and disables the bypassed controllers.")],1),t._v(" "),i("li",[t._v("Determines which valid estimates (position or velocity) are required, and also which setpoint messages should be used.")])]),t._v(" "),i("p",[t._v("The "),i("code",[t._v("OffboardControlMode")]),t._v(" message is defined as shown.")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("# Off-board control mode\n\nuint64 timestamp\t\t# time since system start (microseconds)\n\nbool position\nbool velocity\nbool acceleration\nbool attitude\nbool body_rate\nbool actuator\n")])])]),i("p",[t._v("The fields are ordered in terms of priority such that "),i("code",[t._v("position")]),t._v(" takes precedence over "),i("code",[t._v("velocity")]),t._v(" and later fields, "),i("code",[t._v("velocity")]),t._v(" takes precedence over "),i("code",[t._v("acceleration")]),t._v(", and so on.\nThe first field that has a non-zero value (from top to bottom) defines what valid estimate is required in order to use offboard mode, and the setpoint message(s) that can be used.\nFor example, if the "),i("code",[t._v("acceleration")]),t._v(" field is the first non-zero value, then PX4 requires a valid "),i("code",[t._v("velocity estimate")]),t._v(", and the setpoint must be specified using the "),i("code",[t._v("TrajectorySetpoint")]),t._v(" message.")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",[t._v("desired control quantity")]),t._v(" "),i("th",{staticStyle:{"text-align":"center"}},[t._v("position field")]),t._v(" "),i("th",{staticStyle:{"text-align":"center"}},[t._v("velocity field")]),t._v(" "),i("th",{staticStyle:{"text-align":"center"}},[t._v("acceleration field")]),t._v(" "),i("th",{staticStyle:{"text-align":"center"}},[t._v("attitude field")]),t._v(" "),i("th",{staticStyle:{"text-align":"center"}},[t._v("body_rate field")]),t._v(" "),i("th",{staticStyle:{"text-align":"center"}},[t._v("actuator field")]),t._v(" "),i("th",{staticStyle:{"text-align":"center"}},[t._v("required estimate")]),t._v(" "),i("th",[t._v("required message")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("position (NED)")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("position")]),t._v(" "),i("td",[i("code",[t._v("TrajectorySetpoint")])])]),t._v(" "),i("tr",[i("td",[t._v("velocity (NED)")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("✗")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("velocity")]),t._v(" "),i("td",[i("code",[t._v("TrajectorySetpoint")])])]),t._v(" "),i("tr",[i("td",[t._v("acceleration (NED)")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("✗")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("✗")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("velocity")]),t._v(" "),i("td",[i("code",[t._v("TrajectorySetpoint")])])]),t._v(" "),i("tr",[i("td",[t._v("attitude (FRD)")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("✗")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("✗")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("✗")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("none")]),t._v(" "),i("td",[i("RouterLink",{attrs:{to:"/en/msg_docs/VehicleAttitudeSetpoint.html"}},[t._v("VehicleAttitudeSetpoint")])],1)]),t._v(" "),i("tr",[i("td",[t._v("body_rate (FRD)")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("✗")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("✗")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("✗")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("✗")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("none")]),t._v(" "),i("td",[i("RouterLink",{attrs:{to:"/en/msg_docs/VehicleRatesSetpoint.html"}},[t._v("VehicleRatesSetpoint")])],1)]),t._v(" "),i("tr",[i("td",[t._v("thrust and torque (FRD)")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("✗")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("✗")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("✗")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("✗")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("✗")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[t._v("none")]),t._v(" "),i("td",[i("RouterLink",{attrs:{to:"/en/msg_docs/VehicleThrustSetpoint.html"}},[t._v("VehicleThrustSetpoint")]),t._v(" and "),i("RouterLink",{attrs:{to:"/en/msg_docs/VehicleTorqueSetpoint.html"}},[t._v("VehicleTorqueSetpoint")])],1)])])]),t._v(" "),i("p",[t._v("where ✓ means that the bit is set, ✗ means that the bit is not set and "),i("code",[t._v("-")]),t._v(" means that the bit is value is irrelevant.")]),t._v(" "),i("h3",{attrs:{id:"copter"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#copter"}},[t._v("#")]),t._v(" Copter")]),t._v(" "),i("ul",[i("li",[i("p",[i("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/msg/TrajectorySetpoint.msg",target:"_blank",rel:"noopener noreferrer"}},[t._v("px4_msgs::msg::TrajectorySetpoint"),i("OutboundLink")],1)]),t._v(" "),i("ul",[i("li",[t._v("The following input combinations are supported:\n"),i("ul",[i("li",[t._v("Position setpoint ("),i("code",[t._v("position")]),t._v(" different from "),i("code",[t._v("NaN")]),t._v("). Non-"),i("code",[t._v("NaN")]),t._v(" values of velocity and acceleration are used as feedforward terms for the inner loop controllers.")]),t._v(" "),i("li",[t._v("Velocity setpoint ("),i("code",[t._v("velocity")]),t._v(" different from "),i("code",[t._v("NaN")]),t._v(" and "),i("code",[t._v("position")]),t._v(" set to "),i("code",[t._v("NaN")]),t._v("). Non-"),i("code",[t._v("NaN")]),t._v(" values acceleration are used as feedforward terms for the inner loop controllers.")]),t._v(" "),i("li",[t._v("Acceleration setpoint ("),i("code",[t._v("acceleration")]),t._v(" different from "),i("code",[t._v("NaN")]),t._v(" and "),i("code",[t._v("position")]),t._v(" and "),i("code",[t._v("velocity")]),t._v(" set to "),i("code",[t._v("NaN")]),t._v(")")])])])]),t._v(" "),i("ul",[i("li",[t._v("All values are interpreted in NED (Nord, East, Down) coordinate system and the units are [m], [m/s] and [m/s^2] for position, velocity and acceleration, respectively.")])])]),t._v(" "),i("li",[i("p",[i("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/msg/VehicleAttitudeSetpoint.msg",target:"_blank",rel:"noopener noreferrer"}},[t._v("px4_msgs::msg::VehicleAttitudeSetpoint"),i("OutboundLink")],1)]),t._v(" "),i("ul",[i("li",[t._v("The following input combination is supported:\n"),i("ul",[i("li",[t._v("quaterion "),i("code",[t._v("q_d")]),t._v(" + thrust setpoint "),i("code",[t._v("thrust_body")]),t._v(". Non-"),i("code",[t._v("NaN")]),t._v(" values of "),i("code",[t._v("yaw_sp_move_rate")]),t._v(" are used as feedforward terms expressed in Earth frame and in [rad/s].")])])])]),t._v(" "),i("ul",[i("li",[t._v("The quaterion represents the rotation between the drone body FRD (front, right, down) frame and the NED frame. The trust is in the drone body FRD frame and expressed in normalized [-1, 1] values.")])])]),t._v(" "),i("li",[i("p",[i("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/msg/VehicleRatesSetpoint.msg",target:"_blank",rel:"noopener noreferrer"}},[t._v("px4_msgs::msg::VehicleRatesSetpoint"),i("OutboundLink")],1)]),t._v(" "),i("ul",[i("li",[t._v("The following input combination is supported:\n"),i("ul",[i("li",[i("code",[t._v("roll")]),t._v(", "),i("code",[t._v("pitch")]),t._v(", "),i("code",[t._v("yaw")]),t._v(" and "),i("code",[t._v("thrust_body")]),t._v(".")])])])]),t._v(" "),i("ul",[i("li",[t._v("All the value are in the drone body FRD frame. The rates are in [rad/s] while thrust_body is normalized in [-1, 1].")])])]),t._v(" "),i("li",[i("p",[i("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/msg/VehicleThrustSetpoint.msg",target:"_blank",rel:"noopener noreferrer"}},[t._v("px4_msgs::msg::VehicleThrustSetpoint"),i("OutboundLink")],1),t._v(" + "),i("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/msg/VehicleTorqueSetpoint.msg",target:"_blank",rel:"noopener noreferrer"}},[t._v("px4_msgs::msg::VehicleTorqueSetpoint"),i("OutboundLink")],1)]),t._v(" "),i("ul",[i("li",[t._v("The following input combination is supported:\n"),i("ul",[i("li",[i("code",[t._v("xyz")]),t._v(" for thrust and "),i("code",[t._v("xyz")]),t._v(" for torque.")])])])]),t._v(" "),i("ul",[i("li",[t._v("All the value are in the drone body FRD frame and normalized in [-1, 1].")])])])]),t._v(" "),i("h2",{attrs:{id:"mavlink-messages"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#mavlink-messages"}},[t._v("#")]),t._v(" MAVLink Messages")]),t._v(" "),i("p",[t._v("The following MAVLink messages and their particular fields and field values are allowed for the specified frames.")]),t._v(" "),i("h3",{attrs:{id:"copter-vtol"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#copter-vtol"}},[t._v("#")]),t._v(" Copter/VTOL")]),t._v(" "),i("ul",[i("li",[i("p",[i("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#SET_POSITION_TARGET_LOCAL_NED",target:"_blank",rel:"noopener noreferrer"}},[t._v("SET_POSITION_TARGET_LOCAL_NED"),i("OutboundLink")],1)]),t._v(" "),i("ul",[i("li",[t._v("The following input combinations are supported: "),t._v(" "),i("ul",[i("li",[t._v("Position setpoint (only "),i("code",[t._v("x")]),t._v(", "),i("code",[t._v("y")]),t._v(", "),i("code",[t._v("z")]),t._v(")")]),t._v(" "),i("li",[t._v("Velocity setpoint (only "),i("code",[t._v("vx")]),t._v(", "),i("code",[t._v("vy")]),t._v(", "),i("code",[t._v("vz")]),t._v(")")]),t._v(" "),i("li",[t._v("Acceleration setpoint  (only "),i("code",[t._v("afx")]),t._v(", "),i("code",[t._v("afy")]),t._v(", "),i("code",[t._v("afz")]),t._v(")")]),t._v(" "),i("li",[t._v("Position setpoint "),i("strong",[t._v("and")]),t._v(" velocity setpoint (the velocity setpoint is used as feedforward; it is added to the output of the position controller and the result is used as the input to the velocity controller).")]),t._v(" "),i("li",[t._v("Position setpoint "),i("strong",[t._v("and")]),t._v(" velocity setpoint "),i("strong",[t._v("and")]),t._v(" acceleration (the velocity and the acceleration setpoints are used as feedforwards; the velocity setpoint is added to the output of the position controller and the result is used as the input to the velocity controller; the acceleration setpoint is added to the output of the velocity controller and the result used to compute the thrust vector).")])])])]),t._v(" "),i("ul",[i("li",[i("ul",[i("li",[t._v("PX4 supports the following  "),i("code",[t._v("coordinate_frame")]),t._v(" values (only): "),i("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_FRAME_LOCAL_NED",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAV_FRAME_LOCAL_NED"),i("OutboundLink")],1),t._v(" and "),i("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_FRAME_BODY_NED",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAV_FRAME_BODY_NED"),i("OutboundLink")],1),t._v(".")])])])])]),t._v(" "),i("li",[i("p",[i("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#SET_POSITION_TARGET_GLOBAL_INT",target:"_blank",rel:"noopener noreferrer"}},[t._v("SET_POSITION_TARGET_GLOBAL_INT"),i("OutboundLink")],1)]),t._v(" "),i("ul",[i("li",[t._v("The following input combinations are supported: "),t._v(" "),i("ul",[i("li",[i("p",[t._v("Position setpoint (only "),i("code",[t._v("lat_int")]),t._v(", "),i("code",[t._v("lon_int")]),t._v(", "),i("code",[t._v("alt")]),t._v(")")])]),t._v(" "),i("li",[i("p",[t._v("Velocity setpoint (only "),i("code",[t._v("vx")]),t._v(", "),i("code",[t._v("vy")]),t._v(", "),i("code",[t._v("vz")]),t._v(")")])]),t._v(" "),i("li",[i("p",[i("em",[t._v("Thrust")]),t._v(" setpoint  (only "),i("code",[t._v("afx")]),t._v(", "),i("code",[t._v("afy")]),t._v(", "),i("code",[t._v("afz")]),t._v(")")]),t._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),i("p",[t._v('Acceleration setpoint values are mapped to create a normalized thrust setpoint (i.e. acceleration setpoints are not "properly" supported).')])])]),t._v(" "),i("li",[i("p",[t._v("Position setpoint "),i("strong",[t._v("and")]),t._v(" velocity setpoint (the velocity setpoint is used as feedforward; it is added to the output of the position controller and the result is used as the input to the velocity controller).")])])])])]),t._v(" "),i("ul",[i("li",[t._v("PX4 supports the following  "),i("code",[t._v("coordinate_frame")]),t._v(" values (only): "),i("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_FRAME_GLOBAL",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAV_FRAME_GLOBAL"),i("OutboundLink")],1),t._v(".")])])]),t._v(" "),i("li",[i("p",[i("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#SET_ATTITUDE_TARGET",target:"_blank",rel:"noopener noreferrer"}},[t._v("SET_ATTITUDE_TARGET"),i("OutboundLink")],1)]),t._v(" "),i("ul",[i("li",[t._v("The following input combinations are supported:\n"),i("ul",[i("li",[t._v("Attitude/orientation ("),i("code",[t._v("SET_ATTITUDE_TARGET.q")]),t._v(") with thrust setpoint ("),i("code",[t._v("SET_ATTITUDE_TARGET.thrust")]),t._v(").")]),t._v(" "),i("li",[t._v("Body rate ("),i("code",[t._v("SET_ATTITUDE_TARGET")]),t._v(" "),i("code",[t._v(".body_roll_rate")]),t._v(" ,"),i("code",[t._v(".body_pitch_rate")]),t._v(", "),i("code",[t._v(".body_yaw_rate")]),t._v(") with thrust setpoint  ("),i("code",[t._v("SET_ATTITUDE_TARGET.thrust")]),t._v(").")])])])])])]),t._v(" "),i("h3",{attrs:{id:"fixed-wing"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#fixed-wing"}},[t._v("#")]),t._v(" Fixed Wing")]),t._v(" "),i("ul",[i("li",[i("p",[i("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#SET_POSITION_TARGET_LOCAL_NED",target:"_blank",rel:"noopener noreferrer"}},[t._v("SET_POSITION_TARGET_LOCAL_NED"),i("OutboundLink")],1)]),t._v(" "),i("ul",[i("li",[t._v("The following input combinations are supported (via "),i("code",[t._v("type_mask")]),t._v("): "),t._v(" "),i("ul",[i("li",[t._v("Position setpoint ("),i("code",[t._v("x")]),t._v(", "),i("code",[t._v("y")]),t._v(", "),i("code",[t._v("z")]),t._v(" only; velocity and acceleration setpoints are ignored).\n"),i("ul",[i("li",[i("p",[t._v("Specify the "),i("em",[t._v("type")]),t._v(" of the setpoint in "),i("code",[t._v("type_mask")]),t._v(" (if these bits are not set the vehicle will fly in a flower-like pattern):")]),t._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),i("p",[t._v("Some of the "),i("em",[t._v("setpoint type")]),t._v(" values below are not part of the MAVLink standard for the "),i("code",[t._v("type_mask")]),t._v(" field.")])]),t._v(" "),i("p",[t._v("The values are:")]),t._v(" "),i("ul",[i("li",[t._v("292: Gliding setpoint.\nThis configures TECS to prioritize airspeed over altitude in order to make the vehicle glide when there is no thrust (i.e. pitch is controlled to regulate airspeed).\nIt is equivalent to setting "),i("code",[t._v("type_mask")]),t._v(" as "),i("code",[t._v("POSITION_TARGET_TYPEMASK_Z_IGNORE")]),t._v(", "),i("code",[t._v("POSITION_TARGET_TYPEMASK_VZ_IGNORE")]),t._v(", "),i("code",[t._v("POSITION_TARGET_TYPEMASK_AZ_IGNORE")]),t._v(".")]),t._v(" "),i("li",[t._v("4096: Takeoff setpoint.")]),t._v(" "),i("li",[t._v("8192: Land setpoint.")]),t._v(" "),i("li",[t._v("12288: Loiter setpoint (fly a circle centred on setpoint).")]),t._v(" "),i("li",[t._v("16384: Idle setpoint (zero throttle, zero roll / pitch).")])])])])])])]),t._v(" "),i("li",[t._v("PX4 supports the coordinate frames ("),i("code",[t._v("coordinate_frame")]),t._v(" field): "),i("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_FRAME_LOCAL_NED",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAV_FRAME_LOCAL_NED"),i("OutboundLink")],1),t._v(" and "),i("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_FRAME_BODY_NED",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAV_FRAME_BODY_NED"),i("OutboundLink")],1),t._v(".")])])]),t._v(" "),i("li",[i("p",[i("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#SET_POSITION_TARGET_GLOBAL_INT",target:"_blank",rel:"noopener noreferrer"}},[t._v("SET_POSITION_TARGET_GLOBAL_INT"),i("OutboundLink")],1)]),t._v(" "),i("ul",[i("li",[t._v("The following input combinations are supported (via "),i("code",[t._v("type_mask")]),t._v("): "),t._v(" "),i("ul",[i("li",[t._v("Position setpoint (only "),i("code",[t._v("lat_int")]),t._v(", "),i("code",[t._v("lon_int")]),t._v(", "),i("code",[t._v("alt")]),t._v(")\n"),i("ul",[i("li",[i("p",[t._v("Specify the "),i("em",[t._v("type")]),t._v(" of the setpoint in "),i("code",[t._v("type_mask")]),t._v(" (if these bits are not set the vehicle will fly in a flower-like pattern):")]),t._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),i("p",[t._v("The "),i("em",[t._v("setpoint type")]),t._v(" values below are not part of the MAVLink standard for the "),i("code",[t._v("type_mask")]),t._v(" field.")])]),t._v(" "),i("p",[t._v("The values are:")]),t._v(" "),i("ul",[i("li",[t._v("4096: Takeoff setpoint.")]),t._v(" "),i("li",[t._v("8192: Land setpoint.")]),t._v(" "),i("li",[t._v("12288: Loiter setpoint (fly a circle centred on setpoint).")]),t._v(" "),i("li",[t._v("16384: Idle setpoint (zero throttle, zero roll / pitch).")])])])])])])]),t._v(" "),i("li",[t._v("PX4 supports the following  "),i("code",[t._v("coordinate_frame")]),t._v(" values (only): "),i("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_FRAME_GLOBAL",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAV_FRAME_GLOBAL"),i("OutboundLink")],1),t._v(".")])])]),t._v(" "),i("li",[i("p",[i("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#SET_ATTITUDE_TARGET",target:"_blank",rel:"noopener noreferrer"}},[t._v("SET_ATTITUDE_TARGET"),i("OutboundLink")],1)]),t._v(" "),i("ul",[i("li",[t._v("The following input combinations are supported:\n"),i("ul",[i("li",[t._v("Attitude/orientation ("),i("code",[t._v("SET_ATTITUDE_TARGET.q")]),t._v(") with thrust setpoint ("),i("code",[t._v("SET_ATTITUDE_TARGET.thrust")]),t._v(").")]),t._v(" "),i("li",[t._v("Body rate ("),i("code",[t._v("SET_ATTITUDE_TARGET")]),t._v(" "),i("code",[t._v(".body_roll_rate")]),t._v(" ,"),i("code",[t._v(".body_pitch_rate")]),t._v(", "),i("code",[t._v(".body_yaw_rate")]),t._v(") with thrust setpoint  ("),i("code",[t._v("SET_ATTITUDE_TARGET.thrust")]),t._v(").")])])])])])]),t._v(" "),i("h3",{attrs:{id:"rover"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#rover"}},[t._v("#")]),t._v(" Rover")]),t._v(" "),i("ul",[i("li",[i("p",[i("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#SET_POSITION_TARGET_LOCAL_NED",target:"_blank",rel:"noopener noreferrer"}},[t._v("SET_POSITION_TARGET_LOCAL_NED"),i("OutboundLink")],1)]),t._v(" "),i("ul",[i("li",[t._v("The following input combinations are supported (in "),i("code",[t._v("type_mask")]),t._v("): "),t._v(" "),i("ul",[i("li",[t._v("Position setpoint (only "),i("code",[t._v("x")]),t._v(", "),i("code",[t._v("y")]),t._v(", "),i("code",[t._v("z")]),t._v(")\n"),i("ul",[i("li",[i("p",[t._v("Specify the "),i("em",[t._v("type")]),t._v(" of the setpoint in "),i("code",[t._v("type_mask")]),t._v(":")]),t._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),i("p",[t._v("The "),i("em",[t._v("setpoint type")]),t._v(" values below are not part of the MAVLink standard for the "),i("code",[t._v("type_mask")]),t._v(" field.\n::")]),t._v(" "),i("p",[t._v("The values are:")]),t._v(" "),i("ul",[i("li",[t._v("12288: Loiter setpoint (vehicle stops when close enough to setpoint).")])])])])])]),t._v(" "),i("li",[t._v("Velocity setpoint (only "),i("code",[t._v("vx")]),t._v(", "),i("code",[t._v("vy")]),t._v(", "),i("code",[t._v("vz")]),t._v(")")])])])]),t._v(" "),i("ul",[i("li",[t._v("PX4 supports the coordinate frames ("),i("code",[t._v("coordinate_frame")]),t._v(" field): "),i("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_FRAME_LOCAL_NED",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAV_FRAME_LOCAL_NED"),i("OutboundLink")],1),t._v(" and "),i("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_FRAME_BODY_NED",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAV_FRAME_BODY_NED"),i("OutboundLink")],1),t._v(".")])])]),t._v(" "),i("li",[i("p",[i("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#SET_POSITION_TARGET_GLOBAL_INT",target:"_blank",rel:"noopener noreferrer"}},[t._v("SET_POSITION_TARGET_GLOBAL_INT"),i("OutboundLink")],1)]),t._v(" "),i("ul",[i("li",[t._v("The following input combinations are supported (in "),i("code",[t._v("type_mask")]),t._v("): "),t._v(" "),i("ul",[i("li",[t._v("Position setpoint (only "),i("code",[t._v("lat_int")]),t._v(", "),i("code",[t._v("lon_int")]),t._v(", "),i("code",[t._v("alt")]),t._v(")")])])]),t._v(" "),i("li",[t._v("Specify the "),i("em",[t._v("type")]),t._v(" of the setpoint in "),i("code",[t._v("type_mask")]),t._v(" (not part of the MAVLink standard).\nThe values are:\n"),i("ul",[i("li",[t._v("Following bits not set then normal behaviour.")]),t._v(" "),i("li",[t._v("12288: Loiter setpoint (vehicle stops when close enough to setpoint).")])])])]),t._v(" "),i("ul",[i("li",[t._v("PX4 supports the coordinate frames ("),i("code",[t._v("coordinate_frame")]),t._v(" field): "),i("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_FRAME_GLOBAL",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAV_FRAME_GLOBAL"),i("OutboundLink")],1),t._v(".")])])]),t._v(" "),i("li",[i("p",[i("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#SET_ATTITUDE_TARGET",target:"_blank",rel:"noopener noreferrer"}},[t._v("SET_ATTITUDE_TARGET"),i("OutboundLink")],1)]),t._v(" "),i("ul",[i("li",[t._v("The following input combinations are supported:\n"),i("ul",[i("li",[t._v("Attitude/orientation ("),i("code",[t._v("SET_ATTITUDE_TARGET.q")]),t._v(") with thrust setpoint ("),i("code",[t._v("SET_ATTITUDE_TARGET.thrust")]),t._v(")."),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),i("p",[t._v("Only the yaw setting is actually used/extracted.")])])])])])])])]),t._v(" "),i("h2",{attrs:{id:"offboard-parameters"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#offboard-parameters"}},[t._v("#")]),t._v(" Offboard Parameters")]),t._v(" "),i("p",[i("em",[t._v("Offboard mode")]),t._v(" is affected by the following parameters:")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",[t._v("Parameter")]),t._v(" "),i("th",[t._v("Description")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[i("a",{attrs:{id:"COM_OF_LOSS_T"}}),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#COM_OF_LOSS_T"}},[t._v("COM_OF_LOSS_T")])],1),t._v(" "),i("td",[t._v("Time-out (in seconds) to wait when offboard connection is lost before triggering offboard lost failsafe ("),i("code",[t._v("COM_OBL_RC_ACT")]),t._v(")")])]),t._v(" "),i("tr",[i("td",[i("a",{attrs:{id:"COM_OBL_RC_ACT"}}),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#COM_OBL_RC_ACT"}},[t._v("COM_OBL_RC_ACT")])],1),t._v(" "),i("td",[t._v("Mode to switch to if offboard control is lost (Values are - 0: "),i("em",[t._v("Position")]),t._v(", 1: "),i("RouterLink",{attrs:{to:"/en/flight_modes/altitude_mc.html"}},[t._v("Altitude")]),t._v(", 2: "),i("em",[t._v("Manual")]),t._v(", 3: "),i("RouterLink",{attrs:{to:"/en/flight_modes/return.html"}},[t._v("Return ")]),t._v(", 4: "),i("RouterLink",{attrs:{to:"/en/flight_modes/land.html"}},[t._v("Land")]),t._v(").")],1)]),t._v(" "),i("tr",[i("td",[i("a",{attrs:{id:"COM_RC_OVERRIDE"}}),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#COM_RC_OVERRIDE"}},[t._v("COM_RC_OVERRIDE")])],1),t._v(" "),i("td",[t._v("Controls whether stick movement on a multicopter (or VTOL in MC mode) causes a mode change to "),i("RouterLink",{attrs:{to:"/en/flight_modes/position_mc.html"}},[t._v("Position mode")]),t._v(". This is not enabled for offboard mode by default.")],1)]),t._v(" "),i("tr",[i("td",[i("a",{attrs:{id:"COM_RC_STICK_OV"}}),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#COM_RC_STICK_OV"}},[t._v("COM_RC_STICK_OV")])],1),t._v(" "),i("td",[t._v("The amount of stick movement that causes a transition to "),i("RouterLink",{attrs:{to:"/en/flight_modes/position_mc.html"}},[t._v("Position mode")]),t._v(" (if "),i("a",{attrs:{href:"#COM_RC_OVERRIDE"}},[t._v("COM_RC_OVERRIDE")]),t._v(" is enabled).")],1)]),t._v(" "),i("tr",[i("td",[i("a",{attrs:{id:"COM_RCL_EXCEPT"}}),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#COM_RCL_EXCEPT"}},[t._v("COM_RCL_EXCEPT")])],1),t._v(" "),i("td",[t._v("Specify modes in which RC loss is ignored and the failsafe action not triggered. Set bit "),i("code",[t._v("2")]),t._v(" to ignore RC loss in Offboard mode.")])])])]),t._v(" "),i("h2",{attrs:{id:"developer-resources"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#developer-resources"}},[t._v("#")]),t._v(" Developer Resources")]),t._v(" "),i("p",[t._v("Typically developers do not directly work at the MAVLink layer, but instead use a robotics API like "),i("a",{attrs:{href:"https://mavsdk.mavlink.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVSDK"),i("OutboundLink")],1),t._v(" or "),i("a",{attrs:{href:"http://www.ros.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ROS"),i("OutboundLink")],1),t._v(" (these provide a developer friendly API, and take care of managing and maintaining connections, sending messages and monitoring responses - the minutiae of working with "),i("em",[t._v("Offboard mode")]),t._v(" and MAVLink).")]),t._v(" "),i("p",[t._v("The following resources may be useful for a developer audience:")]),t._v(" "),i("ul",[i("li",[i("RouterLink",{attrs:{to:"/en/ros/offboard_control.html"}},[t._v("Offboard Control from Linux")])],1),t._v(" "),i("li",[i("RouterLink",{attrs:{to:"/en/ros/mavros_offboard_cpp.html"}},[t._v("ROS/MAVROS Offboard Example (C++)")])],1),t._v(" "),i("li",[i("RouterLink",{attrs:{to:"/en/ros/mavros_offboard_python.html"}},[t._v("ROS/MAVROS Offboard Example (Python)")])],1)])])}),[],!1,null,null,null);e.default=n.exports},327:function(t,e,o){t.exports=o.p+"assets/img/position_fixed.c1403cf0.svg"}}]);