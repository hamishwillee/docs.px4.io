(window.webpackJsonp=window.webpackJsonp||[]).push([[1337],{2434:function(t,s,a){"use strict";a.r(s);var n=a(19),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"ros-2-offboard-control-example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ros-2-offboard-control-example"}},[t._v("#")]),t._v(" ROS 2 Offboard Control Example")]),t._v(" "),a("p",[t._v("The following C++ example shows how to do position control in "),a("RouterLink",{attrs:{to:"/en/flight_modes/offboard.html"}},[t._v("offboard mode")]),t._v(" from a ROS 2 node.")],1),t._v(" "),a("p",[t._v("The example starts sending setpoints, enters offboard mode, arms, ascends to 5 metres, and waits.\nWhile simple, it shows the main principles of how to use offboard control and how to send vehicle commands.")]),t._v(" "),a("p",[t._v("It has been tested on Ubuntu 20.04 with ROS 2 Foxy and PX4 "),a("code",[t._v("main")]),t._v(" after PX4 v1.13.")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[a("em",[t._v("Offboard")]),t._v(" control is dangerous.\nIf you are operating on a real vehicle be sure to have a way of gaining back manual control in case something goes wrong.")])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("ROS and PX4 make a number of different assumptions, in particular with respect to "),a("RouterLink",{attrs:{to:"/en/ros/external_position_estimation.html#reference-frames-and-ros"}},[t._v("frame conventions")]),t._v(".\nThere is no implicit conversion between frame types when topics are published or subscribed!")],1),t._v(" "),a("p",[t._v("This example publishes positions in the NED frame, as expected by PX4.\nTo subscribe to data coming from nodes that publish in a different frame (for example the ENU, which is the standard frame of reference in ROS/ROS 2), use the helper functions in the "),a("a",{attrs:{href:"https://github.com/PX4/px4_ros_com/blob/main/src/lib/frame_transforms.cpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("frame_transforms"),a("OutboundLink")],1),t._v(" library.")])]),t._v(" "),a("h2",{attrs:{id:"trying-it-out"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#trying-it-out"}},[t._v("#")]),t._v(" Trying it out")]),t._v(" "),a("p",[t._v("Follow the instructions in "),a("RouterLink",{attrs:{to:"/en/ros/ros2_comm.html"}},[t._v("ROS 2 User Guide")]),t._v(" to install PX and run the simulator, install ROS 2, and start the XRCE-DDS Agent.")],1),t._v(" "),a("p",[t._v("After that we can follow a similar set of steps to those in "),a("RouterLink",{attrs:{to:"/en/ros/ros2_comm.html#build-ros-2-workspace"}},[t._v("ROS 2 User Guide > Build ROS 2 Workspace")]),t._v(" to run the example.")],1),t._v(" "),a("p",[t._v("To build and run the example:")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Open a new terminal.")])]),t._v(" "),a("li",[a("p",[t._v("Create and navigate into a new colcon workspace directory using:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p ~/ws_offboard_control/src/\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~/ws_offboard_control/src/\n")])])])]),t._v(" "),a("li",[a("p",[t._v("Clone the "),a("a",{attrs:{href:"https://github.com/PX4/px4_msgs",target:"_blank",rel:"noopener noreferrer"}},[t._v("px4_msgs"),a("OutboundLink")],1),t._v(" repo to the "),a("code",[t._v("/src")]),t._v(" directory (this repo is needed in every ROS 2 PX4 workspace!):")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/PX4/px4_msgs.git\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# checkout the matching release branch if not using PX4 main.")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("Clone the example repository "),a("a",{attrs:{href:"https://github.com/PX4/px4_ros_com",target:"_blank",rel:"noopener noreferrer"}},[t._v("px4_ros_com"),a("OutboundLink")],1),t._v(" to the "),a("code",[t._v("/src")]),t._v(" directory:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/PX4/px4_ros_com.git\n")])])])]),t._v(" "),a("li",[a("p",[t._v("Source the ROS 2 development environment into the current terminal and compile the workspace using "),a("code",[t._v("colcon")]),t._v(":")]),t._v(" "),a("tabs",[a("tab",{attrs:{name:"humble"}},[a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" /opt/ros/humble/setup.bash\ncolcon build\n")])])])]),t._v(" "),a("tab",{attrs:{name:"foxy"}},[a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" /opt/ros/foxy/setup.bash\ncolcon build\n")])])])])],1)],1),t._v(" "),a("li",[a("p",[t._v("Source the "),a("code",[t._v("local_setup.bash")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" install/local_setup.bash\n")])])])]),t._v(" "),a("li",[a("p",[t._v("Launch the example.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("ros2 run px4_ros_com offboard_control\n")])])])])]),t._v(" "),a("p",[t._v("The vehicle should arm, ascend 5 metres, and then wait (perpetually).")]),t._v(" "),a("h2",{attrs:{id:"implementation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[t._v("#")]),t._v(" Implementation")]),t._v(" "),a("p",[t._v("The source code of the offboard control example can be found in "),a("a",{attrs:{href:"https://github.com/PX4/px4_ros_com",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4/px4_ros_com"),a("OutboundLink")],1),t._v(" in the directory "),a("a",{attrs:{href:"https://github.com/PX4/px4_ros_com/blob/main/src/examples/offboard/offboard_control.cpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("/src/examples/offboard/offboard_control.cpp"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("PX4 publishes all the messages used in this example as ROS topics by default (see "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/src/modules/uxrce_dds_client/dds_topics.yaml",target:"_blank",rel:"noopener noreferrer"}},[t._v("dds_topics.yaml"),a("OutboundLink")],1),t._v(").")])]),t._v(" "),a("p",[t._v("PX4 requires that the vehicle is already receiving "),a("code",[t._v("OffboardControlMode")]),t._v(" messages before it will arm in offboard mode, or before it will switch to offboard mode when flying.\nIn addition, PX4 will switch out of offboard mode if the stream rate of "),a("code",[t._v("OffboardControlMode")]),t._v(" messages drops below approximately 2Hz.\nThe required behaviour is implemented by the main loop spinning in the ROS 2 node, as shown below:")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("auto")]),t._v(" timer_callback "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("offboard_setpoint_counter_ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Change to Offboard mode after 10 setpoints")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("publish_vehicle_command")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("VehicleCommand"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("VEHICLE_CMD_DO_SET_MODE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Arm the vehicle")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("arm")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// OffboardControlMode needs to be paired with TrajectorySetpoint")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("publish_offboard_control_mode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("publish_trajectory_setpoint")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// stop the counter after reaching 11")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("offboard_setpoint_counter_ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\toffboard_setpoint_counter_"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ntimer_ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("create_wall_timer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("ms"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" timer_callback"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("The loop runs on a 100ms timer.\nFor the first 10 cycles it calls "),a("code",[t._v("publish_offboard_control_mode()")]),t._v(" and "),a("code",[t._v("publish_trajectory_setpoint()")]),t._v(" to send "),a("RouterLink",{attrs:{to:"/en/msg_docs/OffboardControlMode.html"}},[t._v("OffboardControlMode")]),t._v(" and "),a("RouterLink",{attrs:{to:"/en/msg_docs/TrajectorySetpoint.html"}},[t._v("TrajectorySetpoint")]),t._v(" messages to PX4.\nThe "),a("code",[t._v("OffboardControlMode")]),t._v(" messages are streamed so that PX4 will allow arming once it switches to offboard mode, while the "),a("code",[t._v("TrajectorySetpoint")]),t._v(" messages are ignored (until the vehicle is in offboard mode).")],1),t._v(" "),a("p",[t._v("After 10 cycles "),a("code",[t._v("publish_vehicle_command()")]),t._v(" is called to change to offboard mode, and "),a("code",[t._v("arm()")]),t._v(" is called to arm the vehicle.\nAfter the vehicle arms and changes mode it starts tracking the position setpoints.\nThe setpoints are still sent in every cycle so that the vehicle does not fall out of offboard mode.")]),t._v(" "),a("p",[t._v("The implementations of the "),a("code",[t._v("publish_offboard_control_mode()")]),t._v(" and "),a("code",[t._v("publish_trajectory_setpoint()")]),t._v(" methods are shown below.\nThese publish the "),a("RouterLink",{attrs:{to:"/en/msg_docs/OffboardControlMode.html"}},[t._v("OffboardControlMode")]),t._v(" and "),a("RouterLink",{attrs:{to:"/en/msg_docs/TrajectorySetpoint.html"}},[t._v("TrajectorySetpoint")]),t._v(" messages to PX4 (respectively).")],1),t._v(" "),a("p",[t._v("The "),a("code",[t._v("OffboardControlMode")]),t._v(" is required in order to inform PX4 of the "),a("em",[t._v("type")]),t._v(" of offboard control behing used.\nHere we're only using "),a("em",[t._v("position control")]),t._v(", so the "),a("code",[t._v("position")]),t._v(" field is set to "),a("code",[t._v("true")]),t._v(" and all the other fields are set to "),a("code",[t._v("false")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @brief Publish the offboard control mode.\n *        For this example, only position and altitude controls are active.\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OffboardControl")]),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("publish_offboard_control_mode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tOffboardControlMode msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tmsg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("position "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tmsg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("velocity "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tmsg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("acceleration "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tmsg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("attitude "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tmsg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body_rate "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tmsg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("timestamp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_clock")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("nanoseconds")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\toffboard_control_mode_publisher_"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("publish")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("code",[t._v("TrajectorySetpoint")]),t._v(" provides the position setpoint.\nIn this case, the "),a("code",[t._v("x")]),t._v(", "),a("code",[t._v("y")]),t._v(", "),a("code",[t._v("z")]),t._v(" and "),a("code",[t._v("yaw")]),t._v(" fields are hardcoded to certain values, but they can be updated dynamically according to an algorithm or even by a subscription callback for messages coming from another node.")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @brief Publish a trajectory setpoint\n *        For this example, it sends a trajectory setpoint to make the\n *        vehicle hover at 5 meters with a yaw angle of 180 degrees.\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OffboardControl")]),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("publish_trajectory_setpoint")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tTrajectorySetpoint msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tmsg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("position "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tmsg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("yaw "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.14")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [-PI:PI]")]),t._v("\n\tmsg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("timestamp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_clock")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("nanoseconds")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\ttrajectory_setpoint_publisher_"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("publish")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("The "),a("code",[t._v("publish_vehicle_command()")]),t._v(" sends "),a("RouterLink",{attrs:{to:"/en/msg_docs/VehicleCommand.html"}},[t._v("VehicleCommand")]),t._v(" messages with commands to the flight controller.\nWe use it above to change the mode to offboard mode, and also in "),a("code",[t._v("arm()")]),t._v(" to arm the vehicle.\nWhile we don't call "),a("code",[t._v("disarm()")]),t._v(" in this example, it is also used in the implementation of that function.")],1),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @brief Publish vehicle commands\n * @param command   Command code (matches VehicleCommand and MAVLink MAV_CMD codes)\n * @param param1    Command parameter 1\n * @param param2    Command parameter 2\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OffboardControl")]),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("publish_vehicle_command")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("uint16_t")]),t._v(" command"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" param1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" param2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tVehicleCommand msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tmsg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("param1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" param1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tmsg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("param2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" param2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tmsg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("command "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" command"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tmsg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target_system "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tmsg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target_component "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tmsg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("source_system "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tmsg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("source_component "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tmsg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("from_external "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tmsg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("timestamp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_clock")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("nanoseconds")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tvehicle_command_publisher_"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("publish")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/en/msg_docs/VehicleCommand.html"}},[t._v("VehicleCommand")]),t._v(" is one of the simplest and most powerful ways to command PX4, and by subscribing to "),a("RouterLink",{attrs:{to:"/en/msg_docs/VehicleCommandAck.html"}},[t._v("VehicleCommandAck")]),t._v(" you can also confirm that setting a particular command was successful.\nThe param and command fields map to "),a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#mav_commands",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVLink commands"),a("OutboundLink")],1),t._v(" and their parameter values.")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);