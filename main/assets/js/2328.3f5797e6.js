(window.webpackJsonp=window.webpackJsonp||[]).push([[2328],{4117:function(t,s,a){"use strict";a.r(s);var n=a(19),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"ros-2-offboard-控制示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ros-2-offboard-控制示例"}},[t._v("#")]),t._v(" ROS 2 Offboard 控制示例")]),t._v(" "),a("p",[t._v("下面的 C++ 示例显示如何在ROS 2 节点中进行 "),a("RouterLink",{attrs:{to:"/zh/flight_modes/offboard.html"}},[t._v("offboard模式")]),t._v(" 下的位置控制。")],1),t._v(" "),a("p",[t._v("示例将首先发送设置点、进入offboard模式、解锁、起飞至5米，并悬停等待。 虽然简单，但它显示了如何使用offboard控制以及如何向无人机发送指令。")]),t._v(" "),a("p",[t._v("它已在 Ubuntu 20.04 ROS 2 Foxy环境及不低于 PX4 v1.13 的 "),a("code",[t._v("main")]),t._v(" 分支进行了测试。")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[a("em",[t._v("Offboard")]),t._v(" 控制模式是危险的。 如果你是在一个真正的无人机平台上进行试验，请保证你已经设置了切换回手动的开关来防止紧急情况的发生。")])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("ROS")]),t._v(" "),a("p",[t._v("和 PX4 有一些不同的定义，特别是在 "),a("RouterLink",{attrs:{to:"/zh/ros/external_position_estimation.html#reference-frames-and-ros"}},[t._v("坐标系定义")]),t._v(" 中。 当主题发布或订阅时，坐标系类型之间没有隐含转换！")],1),t._v(" "),a("p",[t._v("这个例子按照PX4的定义在NED坐标系下发布位置。 订阅来自在不同坐标系发布的节点数据(例如ENU, ROS/ROS 2中的标准坐标系)，使用 "),a("a",{attrs:{href:"https://github.com/PX4/px4_ros_com/blob/main/src/lib/frame_transforms.cpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("frame_transforms"),a("OutboundLink")],1),t._v(" 库中的辅助函数来进行转换。")])]),t._v(" "),a("h2",{attrs:{id:"尝试一下"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#尝试一下"}},[t._v("#")]),t._v(" 尝试一下")]),t._v(" "),a("p",[t._v("按照 "),a("RouterLink",{attrs:{to:"/zh/ros/ros2_comm.html"}},[t._v("ROS 2 用户向导")]),t._v(" 中的说明来安装PX 并运行模拟器，安装ROS 2, 并启动XRCE-DDS代理。")],1),t._v(" "),a("p",[t._v("然后，我们可以采用 "),a("RouterLink",{attrs:{to:"/zh/ros/ros2_comm.html#build-ros-2-workspace"}},[t._v("ROS 2 用户向导 > 构建 ROS 2 工作空间")]),t._v(" 中相似的步骤来运行这个例子。")],1),t._v(" "),a("p",[t._v("构建并运行示例：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("打开一个新的终端。")])]),t._v(" "),a("li",[a("p",[t._v("使用以下方法创建并切换至新的 colcon工作目录：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p ~/ws_offboard_control/src/\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~/ws_offboard_control/src/\n")])])])]),t._v(" "),a("li",[a("p",[t._v("克隆 "),a("a",{attrs:{href:"https://github.com/PX4/px4_msgs",target:"_blank",rel:"noopener noreferrer"}},[t._v("px4_msgs"),a("OutboundLink")],1),t._v(" 仓库到 "),a("code",[t._v("/src")]),t._v(" 目录(每一个 ROS 2 PX4 工作区都需要这个仓库!):")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/PX4/px4_msgs.git\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# checkout the matching release branch if not using PX4 main.")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("克隆示例仓库 "),a("a",{attrs:{href:"https://github.com/PX4/px4_ros_com",target:"_blank",rel:"noopener noreferrer"}},[t._v("px4_ros_com"),a("OutboundLink")],1),t._v(" 到 "),a("code",[t._v("/src")]),t._v(" 目录：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/PX4/px4_ros_com.git\n")])])])]),t._v(" "),a("li",[a("p",[t._v("Source the ROS 2 development environment into the current terminal and compile the workspace using "),a("code",[t._v("colcon")]),t._v(":")]),t._v(" "),a("tabs",[a("tab",{attrs:{name:"humble"}},[a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" /opt/ros/humble/setup.bash\ncolcon build\n")])])])])],1)],1)]),t._v(" "),a("p",[t._v(":::")]),t._v(" "),a("tab",{attrs:{name:"foxy"}},[a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" /opt/ros/foxy/setup.bash\ncolcon build\n")])])])]),t._v(" "),a("p",[t._v("::::")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("执行工作空间环境配置脚本 "),a("code",[t._v("local_setup.bash")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" install/local_setup.bash\n")])])])]),t._v(" "),a("li",[a("p",[t._v("启动例程。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("ros2 run px4_ros_com offboard_control\n")])])])])]),t._v(" "),a("p",[t._v("飞行器将解锁、起飞至5米并悬停等待（永久）。")]),t._v(" "),a("h2",{attrs:{id:"实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现"}},[t._v("#")]),t._v(" 实现")]),t._v(" "),a("p",[t._v("Offboard控制示例的源代码见 "),a("a",{attrs:{href:"https://github.com/PX4/px4_ros_com",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4/px4_ros_com"),a("OutboundLink")],1),t._v(" 目录的 "),a("a",{attrs:{href:"https://github.com/PX4/px4_ros_com/blob/main/src/examples/offboard/offboard_control.cpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("/src/examples/offboard/offboard_control.cpp"),a("OutboundLink")],1),t._v(" 。")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("PX4 默认情况下将此示例中使用的所有消息作为ROS主题发布(见 [dds_topics.yaml](https://github.com/PX4/PX4-Autopilot/blob/main/src/modules/uxrce_dds_client/dds_topics.yaml))。")])]),t._v(" "),a("p",[t._v("PX4 在offboard模式下解锁或者在飞行过程中切换至offboard模式都需要飞行器已经收到 "),a("code",[t._v("OffboardControlMode")]),t._v(" 消息。 此外，如果 "),a("code",[t._v("OffboardControlMode")]),t._v(" 消息的频率低于2Hz，PX4 将会切换出offboard模式。 该行为在ROS 2 节点的主循环中实现的，如下所示：")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("auto")]),t._v(" timer_callback "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("offboard_setpoint_counter_ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Change to Offboard mode after 10 setpoints")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("publish_vehicle_command")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("VehicleCommand"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("VEHICLE_CMD_DO_SET_MODE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Arm the vehicle")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("arm")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// OffboardControlMode needs to be paired with TrajectorySetpoint")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("publish_offboard_control_mode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("publish_trajectory_setpoint")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// stop the counter after reaching 11")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("offboard_setpoint_counter_ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        offboard_setpoint_counter_"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ntimer_ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("create_wall_timer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("ms"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" timer_callback"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("循环运行在一个100毫秒计时器。 在前10个周期中，它调用 "),a("code",[t._v("publish_offboard_control_mode()")]),t._v(" 和 "),a("code",[t._v("publish_trajectory_setpoint()")]),t._v(" 发送 "),a("RouterLink",{attrs:{to:"/zh/msg_docs/OffboardControlMode.html"}},[t._v("OffboardControlMode")]),t._v(" 和 "),a("RouterLink",{attrs:{to:"/zh/msg_docs/TrajectorySetpoint.html"}},[t._v("TracjectorySetpoint")]),t._v(" 消息到 PX4。 "),a("code",[t._v("OffboardControlMode")]),t._v(" 消息已经被接到，所以PX4将允许被解锁一旦切换至offboard模式后， "),a("code",[t._v("TrajectorySetpoint")]),t._v(" 将被忽略(直到飞行器处于offboard模式)。")],1),t._v(" "),a("p",[t._v("在 10 个周期后调用 "),a("code",[t._v("publish_vehicle_command()")]),t._v(" 切换至offboard模式，并调用 "),a("code",[t._v("arm()")]),t._v(" 来解锁飞行器。 在飞行器解锁并和切换模式后，它将开始跟踪位置设定值。 在每个周期内仍然发送设定值，确保飞行器不会切换出offboard模式。")]),t._v(" "),a("p",[a("code",[t._v("publish_offboard_control_mode()")]),t._v(" 和 "),a("code",[t._v("publish_trajectory_setpoint()")]),t._v(" 方法的实现如下。 发布 "),a("RouterLink",{attrs:{to:"/zh/msg_docs/OffboardControlMode.html"}},[t._v("OffboardControlMode")]),t._v(" 和 "),a("RouterLink",{attrs:{to:"/zh/msg_docs/TrajectorySetpoint.html"}},[t._v("TrajectorySetpoint")]),t._v(" 消息到 PX4 (依次)。")],1),t._v(" "),a("p",[a("code",[t._v("OffboardControlMode")]),t._v(" 是必须的以通知PX4 offboard模式所需使用的控制 "),a("em",[t._v("类型")]),t._v(" 。 这里我们只使用 "),a("em",[t._v("位置控制")]),t._v("， 所以 "),a("code",[t._v("position")]),t._v(" 字段设置为 "),a("code",[t._v("true")]),t._v(" 所有其他字段设置为 "),a("code",[t._v("false")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @brief Publish the offboard control mode.\n *        For this example, only position and altitude controls are active.\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OffboardControl")]),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("publish_offboard_control_mode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    OffboardControlMode msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("position "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("velocity "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("acceleration "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("attitude "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body_rate "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("timestamp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_clock")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("nanoseconds")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    offboard_control_mode_publisher_"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("publish")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("code",[t._v("TrajectorySetpoint")]),t._v(" 提供了位置设置值。 在这种情况下， "),a("code",[t._v("x")]),t._v(", "),a("code",[t._v("y")]),t._v(", "),a("code",[t._v("z")]),t._v(" 和 "),a("code",[t._v("yaw")]),t._v(" 字段被赋值为某些值，但它们可以根据算法动态更新，甚至也可以通过另一个订阅的回调函数来生成。")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @brief Publish a trajectory setpoint\n *        For this example, it sends a trajectory setpoint to make the\n *        vehicle hover at 5 meters with a yaw angle of 180 degrees.\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OffboardControl")]),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("publish_trajectory_setpoint")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    TrajectorySetpoint msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("position "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("yaw "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.14")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [-PI:PI]")]),t._v("\n    msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("timestamp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_clock")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("nanoseconds")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    trajectory_setpoint_publisher_"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("publish")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("code",[t._v("publish_vehicle_command()")]),t._v(" 方法发送 "),a("RouterLink",{attrs:{to:"/zh/msg_docs/VehicleCommand.html"}},[t._v("VehicleCommand")]),t._v(" 带命令的消息到飞行控制器。 我们使用上面的方式来切换至offboard模式，也使用 "),a("code",[t._v("arm()")]),t._v(" 来解锁飞行器。 此示例中我们没有 "),a("code",[t._v("disarm()")]),t._v(" ，但它也用于执行该函数。")],1),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @brief Publish vehicle commands\n * @param command   Command code (matches VehicleCommand and MAVLink MAV_CMD codes)\n * @param param1    Command parameter 1\n * @param param2    Command parameter 2\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OffboardControl")]),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("publish_vehicle_command")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("uint16_t")]),t._v(" command"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" param1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" param2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    VehicleCommand msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("param1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" param1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("param2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" param2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("command "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" command"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target_system "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target_component "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("source_system "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("source_component "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("from_external "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("timestamp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_clock")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("nanoseconds")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    vehicle_command_publisher_"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("publish")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/zh/msg_docs/VehicleCommand.html"}},[t._v("VehicleCommand")]),t._v(" 是可用来指令PX4的最简单和最强大的方式之一。 可以通过订阅 "),a("RouterLink",{attrs:{to:"/zh/msg_docs/VehicleCommandAck.html"}},[t._v("VehicleCommandAck")]),t._v(" 消息来确认特定命令是否成功。 参数和命令字段与 "),a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#mav_commands",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVLink 命令"),a("OutboundLink")],1),t._v(" 及其参数值一致。")],1)])],1)}),[],!1,null,null,null);s.default=e.exports}}]);