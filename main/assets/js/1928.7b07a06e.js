(window.webpackJsonp=window.webpackJsonp||[]).push([[1928],{3485:function(e,t,a){"use strict";a.r(t);var o=a(19),_=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"路径规划接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#路径规划接口"}},[e._v("#")]),e._v(" 路径规划接口")]),e._v(" "),a("p",[e._v("PX4 使用数个 MAVLink 接口来整合机载计算机的路径规划服务（包括在执行航线任务时避障，"),a("RouterLink",{attrs:{to:"/zh/computer_vision/safe_landing.html"}},[e._v("安全着陆")]),e._v("和未来的一些服务）：")],1),e._v(" "),a("ul",[a("li",[e._v("有两个 "),a("a",{attrs:{href:"https://mavlink.io/en/services/trajectory.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAVLink 路径规划协议"),a("OutboundLink")],1),e._v(" 接口：\n"),a("ul",[a("li",[a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#TRAJECTORY_REPRESENTATION_WAYPOINTS",target:"_blank",rel:"noopener noreferrer"}},[e._v("TRAJECTORY_REPRESENTATION_WAYPOINTS"),a("OutboundLink")],1),e._v(": Used by PX4 to send the "),a("em",[e._v("desired path")]),e._v(". May be used by path planning software to send PX4 a stream of setpoints for the "),a("em",[e._v("planned path")]),e._v(".")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#TRAJECTORY_REPRESENTATION_BEZIER",target:"_blank",rel:"noopener noreferrer"}},[e._v("TRAJECTORY_REPRESENTATION_BEZIER"),a("OutboundLink")],1),e._v(" may (alternatively) be used by path planning software to send PX4 the "),a("em",[e._v("planned path")]),e._v(" as a bezier curve. 曲线表示给定时间段内机体（移动的）位置设定值。")])])]),e._v(" "),a("li",[a("a",{attrs:{href:"https://mavlink.io/en/services/heartbeat.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("HEARTBEAT（心跳包）/连接协议"),a("OutboundLink")],1),e._v(" 用于检测“生命证明”。")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#LOCAL_POSITION_NED",target:"_blank",rel:"noopener noreferrer"}},[e._v("LOCAL_POSITION_NED"),a("OutboundLink")],1),e._v(" 和 "),a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#ALTITUDE",target:"_blank",rel:"noopener noreferrer"}},[e._v("ALTITUDE"),a("OutboundLink")],1),e._v(" 分别用来发送机体本地位置和高度。")])]),e._v(" "),a("p",[e._v("如果 "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_OBS_AVOID"}},[e._v("COM_OBS_AVOID=1")]),e._v("，那么 PX4 的路径规划功能会在自动化模式 （着陆Landing、起飞Takeoff、保持Hold、任务Mission、返回Return）下启用 。 在这些模式中，路径规划软件将为 PX4 提供预设航点；如果软件无法支持特定的飞行模式，则必须将设定值从机体上向下一个位置镜像。")],1),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("提示")]),e._v(" "),a("p",[e._v("The message flows from PX4 UORB topics, through MAVLink, to ROS and back again are all documented in "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Avoidance#message-flows",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4/PX4-Avoidance > Message Flows"),a("OutboundLink")],1),e._v(". 因此，开发者可以使用这个接口来创建自己新的机载计算机端路径规划服务，或调整现有的规划者软件。")]),e._v(" "),a("p",[e._v("所有使用此接口的服务均发送并且接收相同类型/格式的消息。 Developers can therefore use this interface to create their own new companion-side path planning services or tweak the existing planner software.")]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),a("p",[e._v("推荐使用 "),a("RouterLink",{attrs:{to:"/zh/complete_vehicles/px4_vision_kit.html"}},[e._v("PX4 Vision Autonomy Development Kit")]),e._v(" 来开发路径规划软件。 It comes with "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Avoidance",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4 avoidance"),a("OutboundLink")],1),e._v(" software pre-installed and can be used as the base for your own algorithms.")],1)])]),e._v(" "),a("h2",{attrs:{id:"px4-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#px4-配置"}},[e._v("#")]),e._v(" PX4 配置")]),e._v(" "),a("p",[e._v("实际需要的设置/配置取决于所用的规划器。")]),e._v(" "),a("h2",{attrs:{id:"机载计算机设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#机载计算机设置"}},[e._v("#")]),e._v(" 机载计算机设置")]),e._v(" "),a("p",[e._v("Companion-side hardware setup and hardware/software configuration is provided in the "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Avoidance",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4/PX4-Avoidance"),a("OutboundLink")],1),e._v(" Github repo.")]),e._v(" "),a("p",[e._v("实际需要的设置/配置取决于所用的规划器。")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("注意")]),e._v(" "),a("p",[e._v("Only one planner can run on the companion computer at a time (at the time of writing).\nThis means that offboard features that use different planners cannot be enabled on the same vehicle at the same time (e.g., a vehicle can support obstacle avoidance and collision prevention, but not also safe landing - or vice versa).")])]),e._v(" "),a("p",[a("a",{attrs:{id:"waypoint_interface"}})]),e._v(" "),a("h2",{attrs:{id:"轨迹接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#轨迹接口"}},[e._v("#")]),e._v(" 轨迹接口")]),e._v(" "),a("p",[e._v("PX4 sends information about the "),a("em",[e._v("desired path")]),e._v(" to the companion computer (when "),a("code",[e._v("COM_OBS_AVOID=1")]),e._v(", in "),a("em",[e._v("auto")]),e._v(" modes), and receives back a stream of setpoints for the "),a("em",[e._v("planned path")]),e._v(" from the path planning software.")]),e._v(" "),a("p",[e._v("期望路径信息由 PX4 通过使用 "),a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#TRAJECTORY_REPRESENTATION_WAYPOINTS",target:"_blank",rel:"noopener noreferrer"}},[e._v("TRAJECTORY_REPRESTATION_WAYPOINTS"),a("OutboundLink")],1),e._v(" 消息来发送，如下文 "),a("a",{attrs:{href:"#px4_waypoint_interface"}},[e._v("PX4 航点接口")]),e._v(" 所述。")]),e._v(" "),a("p",[e._v("Path planner software sends back setpoints for the "),a("em",[e._v("planned path")]),e._v(" using either "),a("code",[e._v("TRAJECTORY_REPRESENTATION_WAYPOINTS")]),e._v(" (see "),a("a",{attrs:{href:"#companion_waypoint_interface"}},[e._v("Companion Waypoint Interface")]),e._v(") or "),a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#TRAJECTORY_REPRESENTATION_BEZIER",target:"_blank",rel:"noopener noreferrer"}},[e._v("TRAJECTORY_REPRESENTATION_BEZIER"),a("OutboundLink")],1),e._v(" (see "),a("a",{attrs:{href:"#bezier_interface"}},[e._v("Companion Bezier Trajectory Interface")]),e._v("). 不同之处在于，前者航点参数只是指定下一个设定的目标航点，而贝塞尔轨迹则描述精确的车辆运动（即随时间变化的设定点）。")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("注意")]),e._v(" "),a("p",[e._v("路由规划软件在执行任务时不应混用这些接口（PX4 将使用最近收到的任意类型的消息）。 因此，开发者可以使用这个接口来创建自己新的机载计算机端路径规划服务，或调整现有的规划者软件。")]),e._v(" "),a("p",[a("a",{attrs:{id:"px4_waypoint_interface"}})]),e._v(" "),a("h3",{attrs:{id:"px4-航点接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#px4-航点接口"}},[e._v("#")]),e._v(" PX4 航点接口")]),e._v(" "),a("p",[e._v("PX4 将期望路径封装在 "),a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#TRAJECTORY_REPRESENTATION_WAYPOINTS",target:"_blank",rel:"noopener noreferrer"}},[e._v("TRAJECTORY_REPRESENTATION_WAYPOINTS"),a("OutboundLink")],1),e._v(" 消息中，以 5Hz 的频率发送。")]),e._v(" "),a("p",[e._v("PX4 中各字段定义如下：")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("time_usec")]),e._v(": UNIX 纪元时间戳")]),e._v(" "),a("li",[a("code",[e._v("valid_points")]),e._v(": 3")]),e._v(" "),a("li",[e._v("Point 0 - Current waypoint "),a("em",[e._v("type adapted")]),e._v(" by FlightTaskAutoMapper (see "),a("a",{attrs:{href:"#type_adapted"}},[e._v("notes below")]),e._v("):\n"),a("ul",[a("li",[a("code",[e._v("pos_x[0]")]),e._v(", "),a("code",[e._v("pos_y[0]")]),e._v(", "),a("code",[e._v("pos_z[0]")]),e._v(": Type adapted x-y-z NED local position of "),a("em",[e._v("current")]),e._v(" mission waypoint.")]),e._v(" "),a("li",[a("code",[e._v("vel_x[0]")]),e._v(", "),a("code",[e._v("vel_y[0]")]),e._v(", "),a("code",[e._v("vel_z[0]")]),e._v(": Type adapted x-y-z NED local velocity of "),a("em",[e._v("current")]),e._v(" mission waypoint.")]),e._v(" "),a("li",[a("code",[e._v("acc_x[0]")]),e._v(", "),a("code",[e._v("acc_y[0]")]),e._v(", "),a("code",[e._v("acc_z[0]")]),e._v(": NaN")]),e._v(" "),a("li",[a("code",[e._v("pos_yaw[0]")]),e._v(": 当前航向角")]),e._v(" "),a("li",[a("code",[e._v("vel_yaw[0]")]),e._v(": NaN")]),e._v(" "),a("li",[a("code",[e._v("command[0]")]),e._v(": 当前航点的 "),a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#mav_commands",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAVLink 命令"),a("OutboundLink")],1)])])]),e._v(" "),a("li",[e._v("Point 1 - 当前航点（未修改/未调整类型）：\n"),a("ul",[a("li",[a("code",[e._v("pos_x[1]")]),e._v(", "),a("code",[e._v("pos_y[1]")]),e._v(", "),a("code",[e._v("pos_z[1]")]),e._v(": x-y-z NED local position of "),a("em",[e._v("current")]),e._v(" mission waypoint")]),e._v(" "),a("li",[a("code",[e._v("vel_x[1]")]),e._v(", "),a("code",[e._v("vel_y[1]")]),e._v(", "),a("code",[e._v("vel_z[1]")]),e._v(": NaN")]),e._v(" "),a("li",[a("code",[e._v("acc_x[1]")]),e._v(", "),a("code",[e._v("acc_y[1]")]),e._v(", "),a("code",[e._v("acc_z[1]")]),e._v(": NaN")]),e._v(" "),a("li",[a("code",[e._v("pos_yaw[1]")]),e._v(": 航向设定值")]),e._v(" "),a("li",[a("code",[e._v("vel_yaw[1]")]),e._v(": 偏航速率设定值")]),e._v(" "),a("li",[a("code",[e._v("command[1]")]),e._v(": 当前航点的 "),a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#mav_commands",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAVLink 命令"),a("OutboundLink")],1)])])]),e._v(" "),a("li",[e._v("Point 2 - 局部坐标系中的下一个航点 (未修改/未调整类型)：\n"),a("ul",[a("li",[a("code",[e._v("pos_x[2]")]),e._v(", "),a("code",[e._v("pos_y[2]")]),e._v(", "),a("code",[e._v("pos_z[2]")]),e._v(": x-y-z NED local position of "),a("em",[e._v("next")]),e._v(" mission waypoint")]),e._v(" "),a("li",[a("code",[e._v("vel_x[2]")]),e._v(", "),a("code",[e._v("vel_y[2]")]),e._v(", "),a("code",[e._v("vel_z[2]")]),e._v(": NaN")]),e._v(" "),a("li",[a("code",[e._v("acc_x[2]")]),e._v(", "),a("code",[e._v("acc_y[2]")]),e._v(", "),a("code",[e._v("acc_z[2]")]),e._v(": NaN")]),e._v(" "),a("li",[a("code",[e._v("pos_yaw[2]")]),e._v(": 航向设定值")]),e._v(" "),a("li",[a("code",[e._v("vel_yaw[2]")]),e._v(": 偏航速率设定值")]),e._v(" "),a("li",[a("code",[e._v("command[2]")]),e._v(": 当前航点的 "),a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#mav_commands",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAVLink 命令"),a("OutboundLink")],1)])])]),e._v(" "),a("li",[e._v("所有其它字段都是NaN(未定义)。")])]),e._v(" "),a("p",[a("a",{attrs:{id:"type_adapted"}})]),e._v(" "),a("p",[e._v("路径规划软件（在机载计算机上运行）"),a("em",[e._v("可以")]),e._v(" 以"),a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#TRAJECTORY_REPRESENTATION_WAYPOINTS",target:"_blank",rel:"noopener noreferrer"}},[e._v("TRAJECTORY_REPRESENTATION_WAYPOINTS"),a("OutboundLink")],1),e._v(" 消息流的形式发送所规划路径给 PX4，消息流中包含 Point 0 设定航点。")]),e._v(" "),a("ul",[a("li",[e._v("Point 0 是当前根据目标类型所修改的目标航点/目标。 例如，在着陆时指定目标的 x、y 坐标和降落速度是合理的。 为了实现这一点，"),a("code",[e._v("FlightTaskAutoMapper")]),e._v(" 修改 Point 0 中的着陆点，将 z 轴位置的分量设置为 NAN，将 z 轴速度设置为期望值。")]),e._v(" "),a("li",[e._v("Points 1 and 2 are not used by the safe landing planner.")]),e._v(" "),a("li",[e._v("Point 1 is used by local and global planners.")])]),e._v(" "),a("p",[a("a",{attrs:{id:"companion-failure-handling"}})]),e._v(" "),a("h4",{attrs:{id:"机载计算机的失效处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#机载计算机的失效处理"}},[e._v("#")]),e._v(" 机载计算机的失效处理")]),e._v(" "),a("p",[e._v("实现此接口的规划器必须：")]),e._v(" "),a("ul",[a("li",[e._v("如果规划器均未运行并且 "),a("code",[e._v("COM_OBS_AVOID")]),e._v(" 在/从启动时处于启用状态：\n"),a("ul",[a("li",[e._v("航前自检将失败（无论机体模式如何），在 "),a("code",[e._v("COM_OBS_AVOID")]),e._v(" 设置为 0 之前，机体不会起飞。")])])]),e._v(" "),a("li",[e._v("如果规划器均未运行并且 "),a("code",[e._v("COM_OBS_AVOID")]),e._v(" 在启动后处于启用状态：\n"),a("ul",[a("li",[e._v("机体将以手动方式正常运行。")]),e._v(" "),a("li",[e._v("if you switch to an autonomous mode (e.g. Land Mode) it will immediately fall back to "),a("RouterLink",{attrs:{to:"/zh/flight_modes_mc/hold.html"}},[e._v("Hold mode")]),e._v(".")],1)])]),e._v(" "),a("li",[e._v("When external path planning is enabled:\n"),a("ul",[a("li",[e._v("if the "),a("code",[e._v("HEARTBEAT")]),e._v(" is lost PX4 will emit a status message (which is displayed in "),a("em",[e._v("QGroundControl")]),e._v(') stating either "Avoidance system lost" or "Avoidance system timeout" (depending on the vehicle state). 这项提醒与当前的飞行模式无关。')]),e._v(" "),a("li",[e._v("if a trajectory message is not received for more than 0.5 seconds and the vehicle is in an autonomous mode (Return, Mission, Takeoff, Land), the vehicle will switch into "),a("RouterLink",{attrs:{to:"/zh/flight_modes_mc/hold.html"}},[e._v("Hold mode")]),e._v(". :::note A planner must always provide points in this timeframe.")],1),e._v(" "),a("li",[e._v("A planner will mirror back setpoints it receives when the vehicle is in a mode/state for which it doesn't provide path planning. (i.e. the vehicle will follow its desired path, delayed by a very small amount).")])])])])]),e._v(" "),a("ul",[a("li",[e._v("If the execution time of the last-supplied Bezier trajectory expires during path planning (when using the "),a("a",{attrs:{href:"#bezier_interface"}},[e._v("Bezier Trajectory Interface")]),e._v("), this is treated the same as not getting a new message within 0.5 seconds (i.e. vehicle switches to "),a("RouterLink",{attrs:{to:"/zh/flight_modes_mc/hold.html"}},[e._v("Hold mode")]),e._v(").")],1)]),e._v(" "),a("p",[a("a",{attrs:{id:"companion_waypoint_interface"}})]),e._v(" "),a("h2",{attrs:{id:"机载航点接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#机载航点接口"}},[e._v("#")]),e._v(" 机载航点接口")]),e._v(" "),a("p",[e._v("The path planning software (running on the companion computer) "),a("em",[e._v("may")]),e._v(" send the planned path to PX4 as a stream of "),a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#TRAJECTORY_REPRESENTATION_WAYPOINTS",target:"_blank",rel:"noopener noreferrer"}},[e._v("TRAJECTORY_REPRESENTATION_WAYPOINTS"),a("OutboundLink")],1),e._v(" messages that have the setpoint in Point 0.")]),e._v(" "),a("p",[e._v("来自机载计算机的消息字段设置如下：")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("time_usec")]),e._v(": UNIX 纪元时间戳")]),e._v(" "),a("li",[a("code",[e._v("valid_points")]),e._v(": 1")]),e._v(" "),a("li",[e._v("当前飞机信息：\n"),a("ul",[a("li",[a("code",[e._v("pos_x[0]")]),e._v(", "),a("code",[e._v("pos_y[0]")]),e._v(", "),a("code",[e._v("pos_z[0]")]),e._v(": x-y-z NED坐标系下的载具位置设定值")]),e._v(" "),a("li",[a("code",[e._v("vel_x[0]")]),e._v(", "),a("code",[e._v("vel_y[0]")]),e._v(", "),a("code",[e._v("vel_z[0]")]),e._v(": x-y-z NED 坐标系下速度设定值")]),e._v(" "),a("li",[a("code",[e._v("acc_x[0]")]),e._v(", "),a("code",[e._v("acc_y[0]")]),e._v(", "),a("code",[e._v("acc_z[0]")]),e._v(": NaN")]),e._v(" "),a("li",[a("code",[e._v("pos_yaw[0]")]),e._v(": 航向角设定值")]),e._v(" "),a("li",[a("code",[e._v("vel_yaw[0]")]),e._v(": 偏航速率设定值")]),e._v(" "),a("li",[a("code",[e._v("command[0]")]),e._v(": NaN")])])]),e._v(" "),a("li",[e._v("所有其它字段都是NaN(未定义)。")])]),e._v(" "),a("p",[e._v("更详细地讲，"),a("code",[e._v("TRAJECTORY_REPRESENTATION_BEZIER")]),e._v(" 被解析为：")]),e._v(" "),a("ul",[a("li",[e._v("从 PX4 接收消息时，以超过 2Hz 的频率发出设定点。 PX4 will enter "),a("RouterLink",{attrs:{to:"/zh/flight_modes_mc/hold.html"}},[e._v("Hold mode")]),e._v(" if no message is received for more than 0.5s.")],1),e._v(" "),a("li",[e._v("Mirror back setpoints it receives when it doesn't support planning for the current vehicle state (e.g. the local planner would mirror back messages sent during safe landing because it does not support Land mode).")])]),e._v(" "),a("p",[a("a",{attrs:{id:"bezier_interface"}})]),e._v(" "),a("h2",{attrs:{id:"机载贝塞尔曲线轨迹接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#机载贝塞尔曲线轨迹接口"}},[e._v("#")]),e._v(" 机载贝塞尔曲线轨迹接口")]),e._v(" "),a("p",[e._v("The path planning software (running on the companion computer) "),a("em",[e._v("may")]),e._v(" send the planned path to PX4 as a stream of "),a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#TRAJECTORY_REPRESENTATION_BEZIER",target:"_blank",rel:"noopener noreferrer"}},[e._v("TRAJECTORY_REPRESENTATION_BEZIER"),a("OutboundLink")],1),e._v(" messages.")]),e._v(" "),a("p",[e._v("消息定义了无人机应遵循的路径（由控制点定义），从消息 "),a("code",[e._v("时间戳")]),e._v(" 开始，在时间 "),a("code",[e._v("delta")]),e._v(" 后到达终点。 PX4 使用消息发送时间、当前时间和贝塞尔曲线的总时间（delta）计算其新的轨迹设定点（沿曲线趋势来预测的当前位置/速度/加速度）。")]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),a("p",[e._v("For example, say the message was sent 0.1 seconds ago, and "),a("code",[e._v("delta")]),e._v(" (curve duration) is 0.3s. PX4 可以在曲线中以 0.1 秒间隔的精度计算其轨迹设定点。 因此，开发者可以使用这个接口来创建自己新的机载计算机端路径规划服务，或调整现有的规划者软件。")]),e._v(" "),a("p",[e._v("更详细地讲，"),a("code",[e._v("TRAJECTORY_REPRESENTATION_BEZIER")]),e._v(" 被解析为：")]),e._v(" "),a("ul",[a("li",[e._v("The number of Bezier control points determines the degree of the Bezier curve. For example, 3 points make a quadratic Bezier curve with constant acceleration.")]),e._v(" "),a("li",[e._v("The Bezier curve must be the same degree in x, y, z, and yaw, with all Bezier control points finite")]),e._v(" "),a("li",[e._v("The "),a("code",[e._v("delta")]),e._v(" array should have the value corresponding with the last Bezier control point to indicate the duration that the waypoint takes to execute the curve to that point, from beginning to end. 其他 "),a("code",[e._v("delta")]),e._v(" 数组中的值将被忽略。")]),e._v(" "),a("li",[e._v("MAVLink 消息的时间戳应为曲线开始的时间，通信延迟和时钟不匹配将通过时间同步机制在飞行控制器上进行补偿。")]),e._v(" "),a("li",[e._v("所有控制点都应该在局部坐标系中指定（"),a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_FRAME_LOCAL_NED",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAV_FRAME_LOCAL_NED"),a("OutboundLink")],1),e._v("）。")]),e._v(" "),a("li",[e._v("Bezier curves expire after the execution time of the Bezier curve has been reached. Ensure that new messages are sent at a high enough rate and with a long enough execution time. If this does not happen the vehicle will switch to Hold mode.")])]),e._v(" "),a("h2",{attrs:{id:"支持的硬件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#支持的硬件"}},[e._v("#")]),e._v(" 支持的硬件")]),e._v(" "),a("p",[e._v("Tested companion computers and cameras are listed in "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Avoidance#run-on-hardware",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4/PX4-Avoidance"),a("OutboundLink")],1),e._v(".")])])])}),[],!1,null,null,null);t.default=_.exports}}]);