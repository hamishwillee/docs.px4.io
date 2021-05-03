(window.webpackJsonp=window.webpackJsonp||[]).push([[1155],{2373:function(t,e,a){"use strict";a.r(e);var r=a(18),n=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"安全着陆"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安全着陆"}},[t._v("#")]),t._v(" 安全着陆")]),t._v(" "),a("p",[a("em",[t._v("安全着陆")]),t._v(" 功能确保车辆只能降落在平坦的地形上。")]),t._v(" "),a("p",[t._v("这个功能可以在多旋翼的"),a("RouterLink",{attrs:{to:"/zh/flight_modes/land.html"}},[t._v("降落模式")]),t._v("和"),a("RouterLink",{attrs:{to:"/zh/flight_modes/mission.html"}},[t._v("任务模式")]),t._v("中使能，多旋翼可以连接运行计算机视觉软件的机载计算机。 也可以在VTOL(垂起无人机)的MC模式下使用。")],1),t._v(" "),a("p",[t._v("如果降落，无人机首先降落到距离表面可以测量的高度（机载计算机"),a("code",[t._v("loiter_height")]),t._v("参数）。 如果降落的区域不够平坦，无人机会以正方形螺旋状向外移动，并定期检查地形，以寻找相对平坦的降落点。")]),t._v(" "),a("p",[t._v("@{% youtube %}https://youtu.be/9SuJYcT0Mgc{% endyoutube %}")]),t._v(" "),a("h2",{attrs:{id:"局限-能力"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#局限-能力"}},[t._v("#")]),t._v(" 局限/能力")]),t._v(" "),a("p",[t._v("安全着陆是为了在崎岖的地势中找到平坦区域。")]),t._v(" "),a("ul",[a("li",[t._v('允许在公路上降落；如果检测到汽车，它将在驶过是被"遗忘"。')]),t._v(" "),a("li",[t._v("如果使用雷达或超声波传感器，就可以降落在水上，但是使用立体相机或LIDAR则不可以。\n"),a("ul",[a("li",[t._v("系统只有在能够探测到地面的情况下才会降落。 对于立体相机，不能对水进行足够的特征分析，导致找不到平坦的区域进行降落。")])])])]),t._v(" "),a("h2",{attrs:{id:"px4配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#px4配置"}},[t._v("#")]),t._v(" PX4配置")]),t._v(" "),a("p",[t._v("PX4通过 "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameters.html"}},[t._v("设置")]),t._v(" 参数 "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_OBS_AVOID"}},[t._v("COM_OBS_AVOID")]),t._v(" 为1来启动安全着陆功能。")],1),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[a("code",[t._v("COM_OBS_AVOID")]),t._v(" 还使能了 "),a("RouterLink",{attrs:{to:"/zh/computer_vision/obstacle_avoidance.html#mission_mode"}},[t._v("安全着陆")]),t._v("，以及使用了 PX4 "),a("RouterLink",{attrs:{to:"/zh/computer_vision/path_planning_interface.html"}},[t._v("Path Planning Offboard Interface")]),t._v(" （轨迹接口）将外部路径规划服务与 PX4 集成的其他功能。")],1)]),t._v(" "),a("h2",{attrs:{id:"机载计算机设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#机载计算机设置"}},[t._v("#")]),t._v(" 机载计算机设置")]),t._v(" "),a("p",[t._v("这涵盖了用于避障和防撞的通用设置，包括使用"),a("em",[t._v("安全着陆规划")]),t._v("的特定部分（此功能提供了机载计算机侧的支持）：")]),t._v(" "),a("p",[t._v("配置信息除了其他外，还包括使用不同的相机怎样设置安全着陆，无人机大小和决定是否降落的高度。")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/PX4/avoidance#safe-landing-planner",target:"_blank",rel:"noopener noreferrer"}},[t._v("仿真模拟安装配置"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/PX4/avoidance#safe-landing-planner-1",target:"_blank",rel:"noopener noreferrer"}},[t._v("硬件安装配置"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("配置信息除了其他外，还包括使用不同的相机怎样设置安全着陆，无人机大小和决定是否降落的高度。")]),t._v(" "),a("p",[a("span",{attrs:{id:"interface"}})]),t._v(" "),a("h2",{attrs:{id:"安全着陆接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安全着陆接口"}},[t._v("#")]),t._v(" 安全着陆接口")]),t._v(" "),a("p",[t._v("PX4 使用 "),a("RouterLink",{attrs:{to:"/zh/computer_vision/path_planning_interface.html"}},[t._v("Path Planning Offboard Interface")]),t._v(" 集成机载计算机中的路径规划服务（包括 "),a("RouterLink",{attrs:{to:"/zh/computer_vision/obstacle_avoidance.html#mission_mode"}},[t._v("任务中自主避障")]),t._v("，"),a("RouterLink",{attrs:{to:"/zh/computer_vision/safe_landing.html"}},[t._v("安全着陆")]),t._v("以及更多的服务）。")],1),t._v(" "),a("p",[t._v("PX4 和机载设备之间的（消息发送）接口与任何其他路径规划服务完全一样。 但是请注意，安全着陆规划仅将"),a("code",[t._v("TRAJECTORY_REPRESENTATION_WAYPOINTS")]),t._v("消息的第0点中的信息用于所需路径。")]),t._v(" "),a("h2",{attrs:{id:"支持的硬件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#支持的硬件"}},[t._v("#")]),t._v(" 支持的硬件")]),t._v(" "),a("p",[t._v("测试过的机载计算机和相机列于 "),a("a",{attrs:{href:"https://github.com/PX4/avoidance#run-on-hardware",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4/avoidance"),a("OutboundLink")],1),t._v(" 中。")]),t._v(" "),a("h2",{attrs:{id:"更多信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更多信息"}},[t._v("#")]),t._v(" 更多信息")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://youtu.be/CxIsJWtVaTA?t=963",target:"_blank",rel:"noopener noreferrer"}},[t._v("视觉和外部控制接口"),a("OutboundLink")],1),t._v(" (PX4 开发者峰会2019: Martina Rivizzigno, Auterion Computer Vision Engineerer)")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/PX4/avoidance",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4/avoidance"),a("OutboundLink")],1),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/PX4/avoidance#safe-landing-planner",target:"_blank",rel:"noopener noreferrer"}},[t._v("仿真模拟安装配置 > 安全着陆规划"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/PX4/avoidance#ssafe-landing-planner-1",target:"_blank",rel:"noopener noreferrer"}},[t._v("硬件安装配置 > 安全着陆规划"),a("OutboundLink")],1)])])])])])}),[],!1,null,null,null);e.default=n.exports}}]);