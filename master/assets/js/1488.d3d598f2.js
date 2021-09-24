(window.webpackJsonp=window.webpackJsonp||[]).push([[1488],{2724:function(_,e,v){"use strict";v.r(e);var t=v(19),a=Object(t.a)({},(function(){var _=this,e=_.$createElement,v=_._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"路径规划接口"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#路径规划接口"}},[_._v("#")]),_._v(" 路径规划接口")]),_._v(" "),v("p",[_._v("PX4 使用数个 MAVLink 接口来整合机载计算机的路径规划服务（包括在执行航线任务时避障，"),v("RouterLink",{attrs:{to:"/zh/computer_vision/safe_landing.html"}},[_._v("安全着陆")]),_._v("和未来的一些服务）：")],1),_._v(" "),v("ul",[v("li",[_._v("有两个 "),v("a",{attrs:{href:"https://mavlink.io/en/services/trajectory.html",target:"_blank",rel:"noopener noreferrer"}},[_._v("MAVLink 路径规划协议"),v("OutboundLink")],1),_._v(" 接口：\n"),v("ul",[v("li",[v("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#TRAJECTORY_REPRESENTATION_WAYPOINTS",target:"_blank",rel:"noopener noreferrer"}},[_._v("TRAJECTORY_REPRESTATION_WAYPOINTS"),v("OutboundLink")],1),_._v(": 被 PX4 用于发送 "),v("em",[_._v("期望路径")]),_._v("。 可能会被路径规划软件用于向 PX4 发送 "),v("em",[_._v("所规划路径")]),_._v(" 的设定点数据流。")]),_._v(" "),v("li",[v("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#TRAJECTORY_REPRESENTATION_BEZIER",target:"_blank",rel:"noopener noreferrer"}},[_._v("TRAJECTORY_REPRESTATION_BEZIER"),v("OutboundLink")],1),_._v(" 可能（或者）被路径规划软件用来以贝塞尔曲线的形式向PX4发送"),v("em",[_._v("所规划路径")]),_._v("。 曲线表示给定时间段内机体（移动的）位置设定值。")])])]),_._v(" "),v("li",[v("a",{attrs:{href:"https://mavlink.io/en/services/heartbeat.html",target:"_blank",rel:"noopener noreferrer"}},[_._v("HEARTBEAT（心跳包）/连接协议"),v("OutboundLink")],1),_._v(" 用于检测“生命证明”。")]),_._v(" "),v("li",[v("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#LOCAL_POSITION_NED",target:"_blank",rel:"noopener noreferrer"}},[_._v("LOCAL_POSITION_NED"),v("OutboundLink")],1),_._v(" 和 "),v("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#ALTITUDE",target:"_blank",rel:"noopener noreferrer"}},[_._v("ALTITUDE"),v("OutboundLink")],1),_._v(" 分别用来发送机体本地位置和高度。")])]),_._v(" "),v("p",[_._v("如果 "),v("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_OBS_AVOID"}},[_._v("COM_OBS_AVOID=1")]),_._v("，那么 PX4 的路径规划功能会在自动化模式 （着陆Landing、起飞Takeoff、保持Hold、任务Mission、返回Return）下启用 。 在这些模式中，路径规划软件将为 PX4 提供预设航点；如果软件无法支持特定的飞行模式，则必须将设定值从机体上向下一个位置镜像。")],1),_._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[_._v("提示")]),_._v(" "),v("p",[_._v("这些消息流来自 PX4 的 UORB 主题， 通过 MAVLink 到 ROS，再回传，都在记录在下列文档中："),v("a",{attrs:{href:"https://github.com/PX4/avoidance#message-flows",target:"_blank",rel:"noopener noreferrer"}},[_._v("PX4/avoidance > Message Flows"),v("OutboundLink")],1),_._v("。 因此，开发者可以使用这个接口来创建自己新的机载计算机端路径规划服务，或调整现有的规划者软件。")]),_._v(" "),v("p",[_._v("所有使用此接口的服务均发送并且接收相同类型/格式的消息。 因此，开发者可以使用这个接口来创建自己新的机载计算机侧的路径规划服务，或调整现有的规划者软件。")]),_._v(" "),v("div",{staticClass:"custom-block note"},[v("p",{staticClass:"custom-block-title"},[_._v("注解")]),_._v(" "),v("p",[_._v("推荐使用 "),v("RouterLink",{attrs:{to:"/zh/complete_vehicles/px4_vision_kit.html"}},[_._v("PX4 Vision Autonomy Development Kit")]),_._v(" 来开发路径规划软件。 它预安装了 "),v("a",{attrs:{href:"https://github.com/PX4/avoidance#obstacle-detection-and-avoidance",target:"_blank",rel:"noopener noreferrer"}},[_._v(" PX4 避障"),v("OutboundLink")],1),_._v(" 软件，可以用作您自己算法的基础。")],1)])]),_._v(" "),v("h2",{attrs:{id:"px4-配置"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#px4-配置"}},[_._v("#")]),_._v(" PX4 配置")]),_._v(" "),v("p",[_._v("实际需要的设置/配置取决于所用的规划器。")]),_._v(" "),v("h2",{attrs:{id:"机载计算机设置"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#机载计算机设置"}},[_._v("#")]),_._v(" 机载计算机设置")]),_._v(" "),v("p",[_._v("机载计算机侧的硬件设置和硬件/软件配置在 Github 仓库 "),v("a",{attrs:{href:"https://github.com/PX4/avoidance#obstacle-detection-and-avoidance",target:"_blank",rel:"noopener noreferrer"}},[_._v("PX4/avoidance"),v("OutboundLink")],1),_._v(" 中已经提供。")]),_._v(" "),v("p",[_._v("实际需要的设置/配置取决于所用的规划器。")]),_._v(" "),v("div",{staticClass:"custom-block warning"},[v("p",{staticClass:"custom-block-title"},[_._v("注意")]),_._v(" "),v("p",[_._v("一次只能有一个规划期在机载计算机上运行（在写入时）。 这意味着不能在同一个无人机上同时启用不同规划器的 offboard 功能。 同时使用无人机（例如，无人机可以支持避障和防撞功能，但不支持安全着陆 - 反之亦然）。")])]),_._v(" "),v("p",[v("span",{attrs:{id:"waypoint_interface"}})]),_._v(" "),v("h2",{attrs:{id:"轨迹接口"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#轨迹接口"}},[_._v("#")]),_._v(" 轨迹接口")]),_._v(" "),v("p",[_._v("PX4 将 "),v("em",[_._v("期望路径")]),_._v(" 的相关信息发送给机载计算机（当在 "),v("em",[_._v("自动")]),_._v(" 模式下，"),v("code",[_._v("COM_OBS_AVOID=1")]),_._v(" 时）， 并从路径规划软件接收 "),v("em",[_._v("已规划路径")]),_._v(" 的设定点数据流。")]),_._v(" "),v("p",[_._v("期望路径信息由 PX4 通过使用 "),v("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#TRAJECTORY_REPRESENTATION_WAYPOINTS",target:"_blank",rel:"noopener noreferrer"}},[_._v("TRAJECTORY_REPRESTATION_WAYPOINTS"),v("OutboundLink")],1),_._v(" 消息来发送，如下文 "),v("a",{attrs:{href:"#px4_waypoint_interface"}},[_._v("PX4 航点接口")]),_._v(" 所述。")]),_._v(" "),v("p",[_._v("路径规划器软件通过 "),v("code",[_._v("TRAJECTORY_REPRESTATION_WAYPOINTS")]),_._v(" （参见 "),v("a",{attrs:{href:"#companion_waypoint_interface"}},[_._v("Companion Waypoint Interface")]),_._v(" ）或 "),v("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#TRAJECTORY_REPRESENTATION_BEZIER",target:"_blank",rel:"noopener noreferrer"}},[_._v("TRAJECTORY_REPRESTATION_BEZIER"),v("OutboundLink")],1),_._v(" （参见 "),v("a",{attrs:{href:"#bezier_interface"}},[_._v("Companion Bezier Tracjectory Interface")]),_._v(" ）返回 "),v("em",[_._v("所规划路径")]),_._v(" 的设置点。 不同之处在于，前者航点参数只是指定下一个设定的目标航点，而贝塞尔轨迹则描述精确的车辆运动（即随时间变化的设定点）。")]),_._v(" "),v("div",{staticClass:"custom-block warning"},[v("p",{staticClass:"custom-block-title"},[_._v("注意")]),_._v(" "),v("p",[_._v("路由规划软件在执行任务时不应混用这些接口（PX4 将使用最近收到的任意类型的消息）。")])]),_._v(" "),v("p",[v("span",{attrs:{id:"px4_waypoint_interface"}})]),_._v(" "),v("h3",{attrs:{id:"px4-航点接口"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#px4-航点接口"}},[_._v("#")]),_._v(" PX4 航点接口")]),_._v(" "),v("p",[_._v("PX4 将期望路径封装在 "),v("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#TRAJECTORY_REPRESENTATION_WAYPOINTS",target:"_blank",rel:"noopener noreferrer"}},[_._v("TRAJECTORY_REPRESENTATION_WAYPOINTS"),v("OutboundLink")],1),_._v(" 消息中，以 5Hz 的频率发送。")]),_._v(" "),v("p",[_._v("PX4 中各字段定义如下：")]),_._v(" "),v("ul",[v("li",[v("code",[_._v("time_usec")]),_._v(": UNIX 纪元时间戳")]),_._v(" "),v("li",[v("code",[_._v("valid_points")]),_._v(": 3")]),_._v(" "),v("li",[_._v("Point 0 - FlightTaskAutoMapper修改当前航点 "),v("em",[_._v("适配类型")]),_._v(" （参见 "),v("a",{attrs:{href:"#type_adapted"}},[_._v("以下注释")]),_._v("）：\n"),v("ul",[v("li",[v("code",[_._v("pos_x[0]")]),_._v(", "),v("code",[_._v("pos_y[0]")]),_._v(", "),v("code",[_._v("pos_z[0]")]),_._v(": x-y-z NED 坐标系下适应格式的 "),v("em",[_._v("当前")]),_._v(" 任务航点位置坐标")]),_._v(" "),v("li",[v("code",[_._v("vel_x[0]")]),_._v(", "),v("code",[_._v("vel_y[0]")]),_._v(", "),v("code",[_._v("vel_z[0]")]),_._v(": x-y-z NED 坐标系下适应格式的 "),v("em",[_._v("当前")]),_._v(" 任务航点速度坐标")]),_._v(" "),v("li",[v("code",[_._v("acc_x[0]")]),_._v(", "),v("code",[_._v("acc_y[0]")]),_._v(", "),v("code",[_._v("acc_z[0]")]),_._v(": NaN")]),_._v(" "),v("li",[v("code",[_._v("pos_yaw[0]")]),_._v(": 当前航向角")]),_._v(" "),v("li",[v("code",[_._v("vel_yaw[0]")]),_._v(": NaN")]),_._v(" "),v("li",[v("code",[_._v("command[0]")]),_._v(": 当前航点的 "),v("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#mav_commands",target:"_blank",rel:"noopener noreferrer"}},[_._v("MAVLink 命令"),v("OutboundLink")],1)])])]),_._v(" "),v("li",[_._v("Point 1 - 当前航点（未修改/未调整类型）：\n"),v("ul",[v("li",[v("code",[_._v("pos_x[1]")]),_._v(", "),v("code",[_._v("pos_y[1]")]),_._v(", "),v("code",[_._v("pos_z[1]")]),_._v(": x-y-z NED 坐标系下的 "),v("em",[_._v("当前")]),_._v(" 任务航点位置坐标")]),_._v(" "),v("li",[v("code",[_._v("vel_x[1]")]),_._v(", "),v("code",[_._v("vel_y[1]")]),_._v(", "),v("code",[_._v("vel_z[1]")]),_._v(": NaN")]),_._v(" "),v("li",[v("code",[_._v("acc_x[1]")]),_._v(", "),v("code",[_._v("acc_y[1]")]),_._v(", "),v("code",[_._v("acc_z[1]")]),_._v(": NaN")]),_._v(" "),v("li",[v("code",[_._v("pos_yaw[1]")]),_._v(": 航向设定值")]),_._v(" "),v("li",[v("code",[_._v("vel_yaw[1]")]),_._v(": 偏航速率设定值")]),_._v(" "),v("li",[v("code",[_._v("command[1]")]),_._v(": 当前航点的 "),v("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#mav_commands",target:"_blank",rel:"noopener noreferrer"}},[_._v("MAVLink 命令"),v("OutboundLink")],1)])])]),_._v(" "),v("li",[_._v("Point 2 - 局部坐标系中的下一个航点 (未修改/未调整类型)：\n"),v("ul",[v("li",[v("code",[_._v("pos_x[2]")]),_._v(", "),v("code",[_._v("pos_y[2]")]),_._v(", "),v("code",[_._v("pos_z[2]")]),_._v(": x-y-z NED 坐标系 "),v("em",[_._v("下一个")]),_._v(" 任务航点位置坐标")]),_._v(" "),v("li",[v("code",[_._v("vel_x[2]")]),_._v(", "),v("code",[_._v("vel_y[2]")]),_._v(", "),v("code",[_._v("vel_z[2]")]),_._v(": NaN")]),_._v(" "),v("li",[v("code",[_._v("acc_x[2]")]),_._v(", "),v("code",[_._v("acc_y[2]")]),_._v(", "),v("code",[_._v("acc_z[2]")]),_._v(": NaN")]),_._v(" "),v("li",[v("code",[_._v("pos_yaw[2]")]),_._v(": 航向设定值")]),_._v(" "),v("li",[v("code",[_._v("vel_yaw[2]")]),_._v(": 偏航速率设定值")]),_._v(" "),v("li",[v("code",[_._v("command[2]")]),_._v(": 当前航点的 "),v("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#mav_commands",target:"_blank",rel:"noopener noreferrer"}},[_._v("MAVLink 命令"),v("OutboundLink")],1)])])]),_._v(" "),v("li",[_._v("所有其它字段都是NaN(未定义)。")])]),_._v(" "),v("p",[v("span",{attrs:{id:"type_adapted"}}),_._v("\n路径规划软件（在机载计算机上运行）"),v("em",[_._v("可以")]),_._v(" 以"),v("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#TRAJECTORY_REPRESENTATION_WAYPOINTS",target:"_blank",rel:"noopener noreferrer"}},[_._v("TRAJECTORY_REPRESENTATION_WAYPOINTS"),v("OutboundLink")],1),_._v(" 消息流的形式发送所规划路径给 PX4，消息流中包含 Point 0 设定航点。")]),_._v(" "),v("ul",[v("li",[_._v("Point 0 是当前根据目标类型所修改的目标航点/目标。 例如，在着陆时指定目标的 x、y 坐标和降落速度是合理的。 为了实现这一点，"),v("code",[_._v("FlightTaskAutoMapper")]),_._v(" 修改 Point 0 中的着陆点，将 z 轴位置的分量设置为 NAN，将 z 轴速度设置为期望值。")]),_._v(" "),v("li",[_._v("安全着陆规划器中没有用到 Point 1 和 2。")]),_._v(" "),v("li",[_._v("局部和全局规划器中用到了 Point 1。")])]),_._v(" "),v("p",[v("span",{attrs:{id:"companion-failure-handling"}})]),_._v(" "),v("h4",{attrs:{id:"机载计算机的失效处理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#机载计算机的失效处理"}},[_._v("#")]),_._v(" 机载计算机的失效处理")]),_._v(" "),v("p",[_._v("实现此接口的规划器必须：")]),_._v(" "),v("ul",[v("li",[_._v("如果规划器均未运行并且 "),v("code",[_._v("COM_OBS_AVOID")]),_._v(" 在/从启动时处于启用状态：\n"),v("ul",[v("li",[_._v("航前自检将失败（无论机体模式如何），在 "),v("code",[_._v("COM_OBS_AVOID")]),_._v(" 设置为 0 之前，机体不会起飞。")])])]),_._v(" "),v("li",[_._v("如果规划器均未运行并且 "),v("code",[_._v("COM_OBS_AVOID")]),_._v(" 在启动后处于启用状态：\n"),v("ul",[v("li",[_._v("机体将以手动方式正常运行。")]),_._v(" "),v("li",[_._v("如果您切换到自动模式（例如着陆模式），机体将立即切回到 "),v("RouterLink",{attrs:{to:"/zh/flight_modes/hold.html"}},[_._v("保持模式")]),_._v("。")],1)])]),_._v(" "),v("li",[_._v("当启用外部路径规划时：\n"),v("ul",[v("li",[_._v("如果 "),v("code",[_._v("HEARTBEAT")]),_._v(" 丢失，PX4 将会发出状态消息(显示在 "),v("em",[_._v("QGroundControl")]),_._v(" 中)，声明“避障系统丢失”或“避障系统超时”（取决于机体状态）。 这项提醒与当前的飞行模式无关。")]),_._v(" "),v("li",[_._v("如果超过 0.5 秒未收到轨迹信息并且机体处于自动模式（返航、任务、起飞、着陆），则无人机将切换到"),v("RouterLink",{attrs:{to:"/zh/flight_modes/hold.html"}},[_._v("保持模式")]),_._v("。 :::note 规划器必须在此时间段内始终提供航点信息。")],1),_._v(" "),v("li",[_._v("当无人机处于不提供路径规划的模式/状态时，规划器将镜像其接收到的设置航点。 （即无人机将沿着期望路径行驶，且延迟时间很小）。\n:::")]),_._v(" "),v("li",[_._v("如果上次提供的贝塞尔轨迹的执行时间在路径规划期间超时（当使用"),v("a",{attrs:{href:"#bezier_interface"}},[_._v("贝塞尔轨迹接口")]),_._v("时），这将被视为在 0.5 秒内没有收到新消息（即无人机切换到"),v("RouterLink",{attrs:{to:"/zh/flight_modes/hold.html"}},[_._v("保持模式")]),_._v("）。")],1)])])]),_._v(" "),v("p",[v("span",{attrs:{id:"companion_waypoint_interface"}})]),_._v(" "),v("h2",{attrs:{id:"机载航点接口"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#机载航点接口"}},[_._v("#")]),_._v(" 机载航点接口")]),_._v(" "),v("p",[_._v("路径规划软件（运行在机载计算机上）"),v("em",[_._v("可以")]),_._v("将计划的路径作为 "),v("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#TRAJECTORY_REPRESENTATION_BEZIER",target:"_blank",rel:"noopener noreferrer"}},[_._v("TRAJECTORY_REPRESENTATION_BEZIER"),v("OutboundLink")],1),_._v(" 消息流发送给 PX4。")]),_._v(" "),v("p",[_._v("来自机载计算机的消息字段设置如下：")]),_._v(" "),v("ul",[v("li",[v("code",[_._v("time_usec")]),_._v(": UNIX纪元时间戳")]),_._v(" "),v("li",[v("code",[_._v("valid_points")]),_._v(": 1")]),_._v(" "),v("li",[_._v("当前飞机信息：\n"),v("ul",[v("li",[v("code",[_._v("pos_x[0]")]),_._v(", "),v("code",[_._v("pos_y[0]")]),_._v(", "),v("code",[_._v("pos_z[0]")]),_._v(": x-y-z NED坐标系下的载具位置设定值")]),_._v(" "),v("li",[v("code",[_._v("vel_x[0]")]),_._v(", "),v("code",[_._v("vel_y[0]")]),_._v(", "),v("code",[_._v("vel_z[0]")]),_._v(": x-y-z NED 坐标系下速度设定值")]),_._v(" "),v("li",[v("code",[_._v("acc_x[0]")]),_._v(", "),v("code",[_._v("acc_y[0]")]),_._v(", "),v("code",[_._v("acc_z[0]")]),_._v(": NaN")]),_._v(" "),v("li",[v("code",[_._v("pos_yaw[0]")]),_._v(": 航向角设定值")]),_._v(" "),v("li",[v("code",[_._v("vel_yaw[0]")]),_._v(": 偏航速率设定值")]),_._v(" "),v("li",[v("code",[_._v("command[0]")]),_._v(": NaN")])])]),_._v(" "),v("li",[_._v("所有其它字段都是NaN(未定义)。")])]),_._v(" "),v("p",[_._v("更详细地讲，"),v("code",[_._v("TRAJECTORY_REPRESENTATION_BEZIER")]),_._v(" 被解析为：")]),_._v(" "),v("ul",[v("li",[_._v("从 PX4 接收消息时，以超过 2Hz 的频率发出设定点。 如果超过 0.5 秒没有收到消息，PX4 将进入"),v("RouterLink",{attrs:{to:"/zh/flight_modes/hold.html"}},[_._v("保持模式")]),_._v("。")],1),_._v(" "),v("li",[_._v("当不支持对当前机体状态进行规划时，镜像回规划器收到的设定点值（例如，由于不支持着陆模式，局部路径规划器把安全着陆期间发送的信息镜像回去）。")])]),_._v(" "),v("p",[v("span",{attrs:{id:"bezier_interface"}})]),_._v(" "),v("h2",{attrs:{id:"机载贝塞尔曲线轨迹接口"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#机载贝塞尔曲线轨迹接口"}},[_._v("#")]),_._v(" 机载贝塞尔曲线轨迹接口")]),_._v(" "),v("p",[_._v("路径规划软件（运行在机载计算机上）"),v("em",[_._v("可以")]),_._v("将计划的路径作为 "),v("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#TRAJECTORY_REPRESENTATION_BEZIER",target:"_blank",rel:"noopener noreferrer"}},[_._v("TRAJECTORY_REPRESENTATION_BEZIER"),v("OutboundLink")],1),_._v(" 消息流发送给 PX4。")]),_._v(" "),v("p",[_._v("消息定义了无人机应遵循的路径（由控制点定义），从消息 "),v("code",[_._v("时间戳")]),_._v(" 开始，在时间 "),v("code",[_._v("delta")]),_._v(" 后到达终点。 PX4 使用消息发送时间、当前时间和贝塞尔曲线的总时间（delta）计算其新的轨迹设定点（沿曲线趋势来预测的当前位置/速度/加速度）。")]),_._v(" "),v("div",{staticClass:"custom-block note"},[v("p",{staticClass:"custom-block-title"},[_._v("注解")]),_._v(" "),v("p",[_._v("例如，消息是在 0.1秒前发送的， "),v("code",[_._v("delta")]),_._v(" （曲线持续时间）是 0.3秒。 PX4 可以在曲线中以 0.1 秒间隔的精度计算其轨迹设定点。")])]),_._v(" "),v("p",[_._v("更详细地讲，"),v("code",[_._v("TRAJECTORY_REPRESENTATION_BEZIER")]),_._v(" 被解析为：")]),_._v(" "),v("ul",[v("li",[_._v("贝塞尔控制点的数目决定贝塞尔曲线的曲度。 例如，3个控制点可构成具有恒定加速度的二次贝塞尔曲线。")]),_._v(" "),v("li",[_._v("贝塞尔曲线在 x、y、z 和偏航中的阶数必须相同，且所有贝塞尔控制点都是有限的。")]),_._v(" "),v("li",[_._v("在"),v("code",[_._v("delta")]),_._v(" 数组中，应保存与最后一个贝塞尔控制点相对应的值，表示在执行曲线过程中，从航点到该点所需的总计持续时间。 其他 "),v("code",[_._v("delta")]),_._v(" 数组中的值将被忽略。")]),_._v(" "),v("li",[_._v("MAVLink 消息的时间戳应为曲线开始的时间，通信延迟和时钟不匹配将通过时间同步机制在飞行控制器上进行补偿。")]),_._v(" "),v("li",[_._v("所有控制点都应该在局部坐标系中指定（"),v("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_FRAME_LOCAL_NED",target:"_blank",rel:"noopener noreferrer"}},[_._v("MAV_FRAME_LOCAL_NED"),v("OutboundLink")],1),_._v("）。")]),_._v(" "),v("li",[_._v("贝塞尔曲线在超过执行时间后将过期。 确保以足够高的速率/足够长的执行时间发送新消息，以免发生这种情况（否则机体将切换到保持模式）。")])]),_._v(" "),v("h2",{attrs:{id:"支持的硬件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#支持的硬件"}},[_._v("#")]),_._v(" 支持的硬件")]),_._v(" "),v("p",[_._v("测试过的机载计算机和相机列于 "),v("a",{attrs:{href:"https://github.com/PX4/avoidance#run-on-hardware",target:"_blank",rel:"noopener noreferrer"}},[_._v("PX4/avoidance"),v("OutboundLink")],1),_._v(" 中。")])])}),[],!1,null,null,null);e.default=a.exports}}]);