(window.webpackJsonp=window.webpackJsonp||[]).push([[681],{2476:function(_,e,t){"use strict";t.r(e);var r=t(18),n=Object(r.a)({},(function(){var _=this,e=_.$createElement,r=_._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[r("h1",{attrs:{id:"任务模式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#任务模式"}},[_._v("#")]),_._v(" 任务模式")]),_._v(" "),r("p",[r("RouterLink",{attrs:{to:"/zh/getting_started/flight_modes.html#key_position_fixed"}},[r("img",{attrs:{src:t(322),title:"需要定位（例如 GPS）",width:"30px"}})])],1),_._v(" "),r("p",[r("em",[_._v("任务模式")]),_._v("使飞机执行已上载到飞行控制器的预定义的自主"),r("RouterLink",{attrs:{to:"/zh/flying/missions.html"}},[_._v("任务")]),_._v("（飞行计划）。 通常使用地面站（GCS）应用程序如 "),r("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/",target:"_blank",rel:"noopener noreferrer"}},[_._v("QGroundControl"),r("OutboundLink")],1),_._v("（QGC）创建和上传任务。")],1),_._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[_._v("注解")]),_._v(" "),r("ul",[r("li",[_._v("此模式需要 3d 位置信息（如 GPS）。")]),_._v(" "),r("li",[_._v("使用此模式前必须先解锁。")]),_._v(" "),r("li",[_._v("此模式是自动的 - 不"),r("em",[_._v("需要")]),_._v("用户干预即可控制无人机。")]),_._v(" "),r("li",[_._v("遥控器开关可以用于更改任何无人机的飞行模式。")]),_._v(" "),r("li",[_._v("在多旋翼中移动遥控器摇杆（或 VTOL 在多旋翼模式下）"),r("a",{attrs:{href:"#COM_RC_OVERRIDE"}},[_._v("默认情况下")]),_._v("会将无人机切换到"),r("RouterLink",{attrs:{to:"/zh/flight_modes/position_mc.html"}},[_._v("位置模式")]),_._v("，除非是处理电池失效保护。")],1)])]),_._v(" "),r("h2",{attrs:{id:"参数描述"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参数描述"}},[_._v("#")]),_._v(" 参数描述")]),_._v(" "),r("p",[_._v("通常在地面控制站（例如，"),r("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/PlanView/PlanView.html",target:"_blank",rel:"noopener noreferrer"}},[_._v("QGroundControl"),r("OutboundLink")],1),_._v("）中创建任务并在发射之前上载。 它们也可以由开发者API创建，和/或在飞行中上传。")]),_._v(" "),r("p",[_._v("以适合于每个飞机飞行特性的方式处理单独的"),r("a",{attrs:{href:"#mission_commands"}},[_._v("任务命令")]),_._v("（例如，留待指令对于旋翼机是"),r("em",[_._v("悬停")]),_._v("，对于固定翼是"),r("em",[_._v("转圈")]),_._v("）。 VTOL飞机在固定翼模式下遵循固定翼的行为和参数，在多旋翼模式下遵循旋翼机的行为和参数。")]),_._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[_._v("注解")]),_._v(" "),r("p",[_._v("在启动自驾仪前需要将装载有任务的 SD 卡插入。")])]),_._v(" "),r("p",[_._v("在高级别上，所有无人机类型在使用 MISSION 模式时表现相同：")]),_._v(" "),r("ol",[r("li",[_._v("如果任务被存储并且PX4正在飞行，则它将从当前步骤执行任务/飞行计划</ 0>。 ")])]),_._v(" "),r("ul",[r("li",[r("p",[_._v("如果存储了任务, 并且PX4着陆:")]),_._v(" "),r("ul",[r("li",[_._v("在旋翼机上 PX4 将执行"),r("RouterLink",{attrs:{to:"/zh/flying/missions.html"}},[_._v("任务/飞行计划")]),_._v(". 如果任务没有 "),r("code",[_._v("TAKEOFF")]),_._v(" 命令，则在从当前步骤执行飞行计划的剩余部分之前，PX4 将使飞机飞行到最小高度。")],1),_._v(" "),r("li",[_._v("在固定翼飞行器上，PX4 不会自动起飞（自动驾驶仪将检测运动并将油门设置为零）。 如果在任务模式下手动或弹射发射，飞机可以开始执行任务。")])])]),_._v(" "),r("li",[r("p",[_._v("如果没有存储任务，或者 PX4 已完成所有任务命令：")]),_._v(" "),r("ul",[r("li",[_._v("如果正在飞行，飞机将会留待。")]),_._v(" "),r("li",[_._v("如果已着陆，飞机将“等待”。")])])]),_._v(" "),r("li",[r("p",[_._v("您可以通过在 "),r("em",[_._v("QGroundControl")]),_._v(" 中选择它来手动更改当前任务命令。")])])]),_._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[_._v("注解")]),_._v(" "),r("p",[_._v("如果在任务中有一个"),r("em",[_._v("跳转到条目")]),_._v("命令，移动到另外一个条目将"),r("strong",[_._v("不会")]),_._v("复位循环计数器。 也就意味着，如果将当前任务命令更改为 1，则不会“完全重启”任务。")])]),_._v(" "),r("ul",[r("li",[_._v("该任务仅在飞机锁定或上传新任务时重置。")])]),_._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[_._v("提示")]),_._v(" "),r("p",[_._v("要使无人机在降落后自动锁定，在 "),r("em",[_._v("QGroundControl")]),_._v(" 地面站上打开 "),r("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/SetupView/Safety.html",target:"_blank",rel:"noopener noreferrer"}},[_._v("Vehicle Setup （无人机设置） > Safety （安全） "),r("OutboundLink")],1),_._v("，导航栏找到 "),r("em",[_._v("Land Mode Settings （降落模式设置）")]),_._v(" 并且勾选 "),r("em",[_._v("Disarm after（锁定后）")]),_._v("。 输入飞机降落后，锁定前的等待时间。 :::")]),_._v(" "),r("p",[_._v("可以通过激活"),r("RouterLink",{attrs:{to:"/zh/flight_modes/hold.html"}},[_._v("HOLD 模式")]),_._v("暂停任务。 当您重新激活 MISSION 飞行模式时，任务将从当前任务命令继续执行。 在任务模式下飞行时，如果决定中止任务，并且切换到了其他飞行模式，如位置模式，通过遥控器讲无人机飞到了其他地方，然后切换回任务模式，无人机将从当前位置继续执行任务，并会飞往下一个未访问的任务航点。")],1),_._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[_._v("注意")]),_._v(" "),r("p",[_._v("在切换 RC 模式前确保遥控器油门摇杆不为零（否则会炸机）。建议在切换到其他模式前控制摇杆回中。")])])]),_._v(" "),r("p",[_._v("有关任务规划的更多信息，请参阅：")]),_._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/zh/flying/missions.html"}},[_._v("任务规划")])],1),_._v(" "),r("li",[r("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/PlanView/PlanView.html",target:"_blank",rel:"noopener noreferrer"}},[_._v("规划视图"),r("OutboundLink")],1),_._v("（ "),r("em",[_._v("QGroundControl")]),_._v(" 用户手册）")])]),_._v(" "),r("h2",{attrs:{id:"qgroundcontrol-支持"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#qgroundcontrol-支持"}},[_._v("#")]),_._v(" QGroundControl 支持")]),_._v(" "),r("p",[r("em",[_._v("QGroundControl")]),_._v(" 提供额外的地面站级别任务处理支持（除了飞控提供的支持外）。 更多信息请参阅：")]),_._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/releases/stable_v3.2_long.html#remove-mission-after-vehicle-lands",target:"_blank",rel:"noopener noreferrer"}},[_._v("飞机降落后解除任务"),r("OutboundLink")],1)]),_._v(" "),r("li",[r("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/releases/stable_v3.2_long.html#resume-mission",target:"_blank",rel:"noopener noreferrer"}},[_._v("返航模式后恢复任务"),r("OutboundLink")],1)])]),_._v(" "),r("h2",{attrs:{id:"任务参数"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#任务参数"}},[_._v("#")]),_._v(" 任务参数")]),_._v(" "),r("p",[_._v("任务表现受很多参数影响，其中大部分参数记录在 "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#mission"}},[_._v("Parameter Reference （参考参数）> Mission （任务）")]),_._v(" 中。 下面列出了一个很小的子集。")],1),_._v(" "),r("table",[r("thead",[r("tr",[r("th",[_._v("参数")]),_._v(" "),r("th",[_._v("描述")])])]),_._v(" "),r("tbody",[r("tr",[r("td",[r("span",{attrs:{id:"NAV_RCL_ACT"}}),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#NAV_RCL_ACT"}},[_._v("NAV_RCL_ACT")])],1),_._v(" "),r("td",[_._v("遥控信号丢失失效保护模式（如果断开遥控无人机会怎样）- 例如进入保持模式，返航模式，终止等。")])]),_._v(" "),r("tr",[r("td",[r("span",{attrs:{id:"NAV_LOITER_RAD"}}),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#NAV_RCL_ACT"}},[_._v("NAV_LOITER_RAD")])],1),_._v(" "),r("td",[_._v("固定翼悬停半径。")])]),_._v(" "),r("tr",[r("td",[r("span",{attrs:{id:"COM_RC_OVERRIDE"}}),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_RC_OVERRIDE"}},[_._v("COM_RC_OVERRIDE")])],1),_._v(" "),r("td",[_._v("如果使能，在多旋翼上移动摇杆（或者 VTOL 在多旋翼模式）讲控制权还给处于"),r("RouterLink",{attrs:{to:"/zh/flight_modes/position_mc.html"}},[_._v("位置模式")]),_._v("的无人机（除非无人机正在处理电池失效保护）。 可以分别为自动模式和 offboard 模式启用此功能，默认情况下在自动模式下启用此功能。")],1)])])]),_._v(" "),r("p",[r("span",{attrs:{id:"mission_commands"}})]),_._v(" "),r("h2",{attrs:{id:"支持的任务命令"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#支持的任务命令"}},[_._v("#")]),_._v(" 支持的任务命令")]),_._v(" "),r("p",[_._v("PX4 在任务模式下“接受”以下 MAVLink 任务命令（注意：下面列出注意事项）。 除非另有说明，否则该实现与 MAVLink 规范中定义的一样。")]),_._v(" "),r("ul",[r("li",[r("p",[r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_NAV_WAYPOINT",target:"_blank",rel:"noopener noreferrer"}},[_._v("MAV_CMD_NAV_WAYPOINT"),r("OutboundLink")],1)]),_._v(" "),r("ul",[r("li",[r("em",[_._v("Param3")]),_._v(" （漫游） 被忽略。 如果 "),r("em",[_._v("param1")]),_._v(" （time_inside）> 0，漫游始终使能。")])])]),_._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_NAV_LOITER_UNLIM",target:"_blank",rel:"noopener noreferrer"}},[_._v("MAV_CMD_NAV_LOITER_UNLIM"),r("OutboundLink")],1)])]),_._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_NAV_LOITER_TIME",target:"_blank",rel:"noopener noreferrer"}},[_._v("MAV_CMD_NAV_LOITER_TIME"),r("OutboundLink")],1)])]),_._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_NAV_LAND",target:"_blank",rel:"noopener noreferrer"}},[_._v("MAV_CMD_NAV_LAND"),r("OutboundLink")],1)])]),_._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_NAV_TAKEOFF",target:"_blank",rel:"noopener noreferrer"}},[_._v("MAV_CMD_NAV_TAKEOFF"),r("OutboundLink")],1)])]),_._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_NAV_LOITER_TO_ALT",target:"_blank",rel:"noopener noreferrer"}},[_._v("MAV_CMD_NAV_LOITER_TO_ALT"),r("OutboundLink")],1)])]),_._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_NAV_ROI",target:"_blank",rel:"noopener noreferrer"}},[_._v("MAV_CMD_NAV_ROI"),r("OutboundLink")],1)])]),_._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_DO_SET_ROI",target:"_blank",rel:"noopener noreferrer"}},[_._v("MAV_CMD_DO_SET_ROI"),r("OutboundLink")],1)])]),_._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_DO_SET_ROI_LOCATION",target:"_blank",rel:"noopener noreferrer"}},[_._v("MAV_CMD_DO_SET_ROI_LOCATION"),r("OutboundLink")],1)])]),_._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_NAV_VTOL_TAKEOFF",target:"_blank",rel:"noopener noreferrer"}},[_._v("MAV_CMD_NAV_VTOL_TAKEOFF"),r("OutboundLink")],1)]),_._v(" "),r("ul",[r("li",[r("code",[_._v("MAV_CMD_NAV_VTOL_TAKEOFF.param2")]),_._v(" (过渡标题) 忽略。 取而代之的是，将下一个航点的标题用于过渡标题。 ")])])]),_._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_NAV_VTOL_LAND",target:"_blank",rel:"noopener noreferrer"}},[_._v("MAV_CMD_NAV_VTOL_LAND"),r("OutboundLink")],1)])]),_._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_NAV_FENCE_RETURN_POINT",target:"_blank",rel:"noopener noreferrer"}},[_._v("EMAV_CMD_NAV_FENCE_RETURN_POINT"),r("OutboundLink")],1)])]),_._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_NAV_FENCE_POLYGON_VERTEX_INCLUSION",target:"_blank",rel:"noopener noreferrer"}},[_._v("MAV_CMD_NAV_FENCE_POLYGON_VERTEX_INCLUSION"),r("OutboundLink")],1)])]),_._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_NAV_FENCE_POLYGON_VERTEX_EXCLUSION",target:"_blank",rel:"noopener noreferrer"}},[_._v("MAV_CMD_NAV_FENCE_POLYGON_VERTEX_EXCLUSION"),r("OutboundLink")],1)])]),_._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_NAV_FENCE_CIRCLE_INCLUSION",target:"_blank",rel:"noopener noreferrer"}},[_._v("MAV_CMD_NAV_FENCE_CIRCLE_INCLUSION"),r("OutboundLink")],1)])]),_._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_NAV_FENCE_CIRCLE_EXCLUSION",target:"_blank",rel:"noopener noreferrer"}},[_._v("MAV_CMD_NAV_FENCE_CIRCLE_EXCLUSION"),r("OutboundLink")],1)])]),_._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_NAV_RALLY_POINT",target:"_blank",rel:"noopener noreferrer"}},[_._v("MAV_CMD_NAV_RALLY_POINT"),r("OutboundLink")],1)])]),_._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_DO_JUMP",target:"_blank",rel:"noopener noreferrer"}},[_._v("MAV_CMD_DO_JUMP"),r("OutboundLink")],1)])]),_._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_NAV_ROI",target:"_blank",rel:"noopener noreferrer"}},[_._v("MAV_CMD_NAV_ROI"),r("OutboundLink")],1)])]),_._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_DO_SET_ROI",target:"_blank",rel:"noopener noreferrer"}},[_._v("MAV_CMD_DO_SET_ROI"),r("OutboundLink")],1)])]),_._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_DO_CHANGE_SPEED",target:"_blank",rel:"noopener noreferrer"}},[_._v("MAV_CMD_DO_CHANGE_SPEED"),r("OutboundLink")],1)])]),_._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_DO_SET_HOME",target:"_blank",rel:"noopener noreferrer"}},[_._v("MAV_CMD_DO_SET_HOME"),r("OutboundLink")],1)])]),_._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_DO_SET_SERVO",target:"_blank",rel:"noopener noreferrer"}},[_._v("MAV_CMD_DO_SET_SERVO"),r("OutboundLink")],1)])]),_._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_DO_LAND_START",target:"_blank",rel:"noopener noreferrer"}},[_._v("MAV_CMD_DO_LAND_START"),r("OutboundLink")],1)])]),_._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_DO_TRIGGER_CONTROL",target:"_blank",rel:"noopener noreferrer"}},[_._v("MAV_CMD_DO_TRIGGER_CONTROL"),r("OutboundLink")],1)])]),_._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_DO_DIGICAM_CONTROL",target:"_blank",rel:"noopener noreferrer"}},[_._v("MAV_CMD_DO_DIGICAM_CONTROL"),r("OutboundLink")],1)])]),_._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_DO_MOUNT_CONFIGURE",target:"_blank",rel:"noopener noreferrer"}},[_._v("MAV_CMD_DO_MOUNT_CONFIGURE"),r("OutboundLink")],1)])]),_._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_DO_MOUNT_CONTROL",target:"_blank",rel:"noopener noreferrer"}},[_._v("MAV_CMD_DO_MOUNT_CONTROL"),r("OutboundLink")],1)])]),_._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_IMAGE_START_CAPTURE",target:"_blank",rel:"noopener noreferrer"}},[_._v("MAV_CMD_IMAGE_START_CAPTURE"),r("OutboundLink")],1)])]),_._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_IMAGE_STOP_CAPTURE",target:"_blank",rel:"noopener noreferrer"}},[_._v("MAV_CMD_IMAGE_STOP_CAPTURE"),r("OutboundLink")],1)])]),_._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_VIDEO_START_CAPTURE",target:"_blank",rel:"noopener noreferrer"}},[_._v("MAV_CMD_VIDEO_START_CAPTURE"),r("OutboundLink")],1)])]),_._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_VIDEO_STOP_CAPTURE",target:"_blank",rel:"noopener noreferrer"}},[_._v("MAV_CMD_VIDEO_STOP_CAPTURE"),r("OutboundLink")],1)])]),_._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_DO_SET_CAM_TRIGG_DIST",target:"_blank",rel:"noopener noreferrer"}},[_._v("MAV_CMD_DO_SET_CAM_TRIGG_DIST"),r("OutboundLink")],1)])]),_._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_DO_SET_CAM_TRIGG_INTERVAL",target:"_blank",rel:"noopener noreferrer"}},[_._v("MAV_CMD_DO_SET_CAM_TRIGG_INTERVAL"),r("OutboundLink")],1)])]),_._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_SET_CAMERA_MODE",target:"_blank",rel:"noopener noreferrer"}},[_._v("MAV_CMD_SET_CAMERA_MODE"),r("OutboundLink")],1)])]),_._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_DO_VTOL_TRANSITION",target:"_blank",rel:"noopener noreferrer"}},[_._v("MAV_CMD_DO_VTOL_TRANSITION"),r("OutboundLink")],1)])]),_._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_NAV_DELAY",target:"_blank",rel:"noopener noreferrer"}},[_._v("MAV_CMD_NAV_DELAY"),r("OutboundLink")],1)])]),_._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_NAV_RETURN_TO_LAUNCH",target:"_blank",rel:"noopener noreferrer"}},[_._v("MAV_CMD_NAV_RETURN_TO_LAUNCH"),r("OutboundLink")],1)])]),_._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_DO_SET_ROI_WPNEXT_OFFSET",target:"_blank",rel:"noopener noreferrer"}},[_._v("MAV_CMD_DO_SET_ROI_WPNEXT_OFFSET"),r("OutboundLink")],1)])]),_._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_DO_SET_ROI_NONE",target:"_blank",rel:"noopener noreferrer"}},[_._v("MAV_CMD_DO_SET_ROI_NONE"),r("OutboundLink")],1)])])]),_._v(" "),r("p",[_._v("注意：")]),_._v(" "),r("ul",[r("li",[_._v("PX4 解析上述消息，但不是必须要 "),r("em",[_._v("做")]),_._v("的。 例如，某些消息是针对飞机类型的。")]),_._v(" "),r("li",[_._v("对于任务命令，PX4 通常不支持本地坐标系（例如，"),r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_FRAME_LOCAL_NED",target:"_blank",rel:"noopener noreferrer"}},[_._v("MAV_FRAME_LOCAL_NED"),r("OutboundLink")],1),_._v("）。")]),_._v(" "),r("li",[_._v("并非所有消息/命令都通过 "),r("em",[_._v("QGroundControl")]),_._v(" 公开。")]),_._v(" "),r("li",[_._v("添加消息时，列表可能已过时。 可以通过查看代码来检查当前设置。 支持 "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/modules/mavlink/mavlink_mission.cpp",target:"_blank",rel:"noopener noreferrer"}},[_._v(" /src/modules/mavlink/mavlink_mission.cpp "),r("OutboundLink")],1),_._v(" 中的 "),r("code",[_._v("MavlinkMissionManager::parse_mavlink_mission_item")]),_._v(" （在this git changelist </ 2>中生成的列表）。"),r("p")])]),_._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[_._v("注解")]),_._v(" "),r("p",[_._v("如果发现缺失或错误的消息，请添加 bug 修复或者 PR。 :::")]),_._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[_._v("## 航点间轨迹\n\nPX4 期望从上一个航点到当前目标遵循一条直线（不计划航点之间的任何其他类型路径 - 如果需要，可以通过添加额外航点来模拟）。\n\n当MC 无人机接近或离开航点时，将基于[jerk-limited](../config_mc/mc_jerk_limited_type_trajectory.md#auto-mode)的调试来更改*速度*。\n\n无人机在进入接受半径后立即切换到下一个航点。\n\n* 对于 MC，这个半径由 [NAV_ACC_RAD](../advanced_config/parameter_reference.md#NAV_ACC_RAD)来定义。\n* 对于 FW，半径由“L1距离”定义。 \n  * L1 距离是根据两个参数计算的： [FW_L1_DAMPING](../advanced_config/parameter_reference.md#FW_L1_DAMPING) 和 [FW_L1_PERIOD](../advanced_config/parameter_reference.md#FW_L1_PERIOD)，还有当前地速。\n  * 默认情况下，约 70米。\n  * 方程式： $$L_{1_{distance}}=\\frac{1}{\\pi}L_{1_{damping}}L_{1_{period}}\\left \\| \\vec{v}*{ {xy}*{ground} } \\right \\|$$")])])])])])}),[],!1,null,null,null);e.default=n.exports},322:function(_,e,t){_.exports=t.p+"assets/img/position_fixed.c1403cf0.svg"}}]);