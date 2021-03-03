(window.webpackJsonp=window.webpackJsonp||[]).push([[1117],{2322:function(t,a,e){"use strict";e.r(a);var _=e(18),v=Object(_.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"自主避障"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自主避障"}},[t._v("#")]),t._v(" 自主避障")]),t._v(" "),e("p",[e("em",[t._v("自主避障")]),t._v(" 使飞机沿预定路线前进时，能够自动绕开障碍物。")]),t._v(" "),e("p",[t._v("该功能需要运行计算机视觉软件的机载计算机。 该软件对期望路线重新规划，在导航绕开障碍物，并选取最佳路径。")]),t._v(" "),e("p",[t._v("自主避障适用于自动化模式，目前仅支持多旋翼飞行器的 "),e("a",{attrs:{href:"#mission_mode"}},[t._v("任务Missions")]),t._v(" 和 "),e("a",{attrs:{href:"#offboard_mode"}},[t._v("Offboard")]),t._v(" 模式。")]),t._v(" "),e("p",[t._v("本文将阐述怎样在这两种模式中设置自主避障功能。")]),t._v(" "),e("p"),e("div",{staticClass:"embed-responsive embed-responsive-16by9"},[e("iframe",{staticClass:"embed-responsive-item youtube-player",attrs:{type:"text/html",width:"640",height:"390",src:"https://www.youtube.com/embed/PrGt7pKj3tI",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]),e("p"),t._v(" "),e("h2",{attrs:{id:"局限-能力"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#局限-能力"}},[t._v("#")]),t._v(" 局限 / 能力")]),t._v(" "),e("ul",[e("li",[t._v("自主避障的最大速度当前约为 3m/s（由于计算避障路径的开销）。")])]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),e("p",[t._v("避障可以使用 "),e("em",[t._v("local planner")]),t._v(" 规划器以约 30Hz 的速度发出消息，并且以约 3m/s的速度移动）或全局规划器（以约 10Hz 和任务速度发出消息，自主避障速度约为 1-1.5 m/s）。")])]),t._v(" "),e("p",[e("span",{attrs:{id:"offboard_mode"}})]),t._v(" "),e("h2",{attrs:{id:"offboard模式避障"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#offboard模式避障"}},[t._v("#")]),t._v(" Offboard模式避障")]),t._v(" "),e("p",[t._v("PX4 在 "),e("RouterLink",{attrs:{to:"/zh/flight_modes/offboard.html"}},[t._v("Offboard 模式")]),t._v("中支持自主避障功能。")],1),t._v(" "),e("p",[t._v("期望路径来自在配套计算机上运行的一个 "),e("RouterLink",{attrs:{to:"/zh/ros/"}},[t._v("ROS")]),t._v(" 节点。 并传递给自主避障模块（另一个 ROS 节点）。 避障软件将规划路径通过 "),e("code",[t._v("SET_POSITION_TARGET_LOCAL_NED")]),t._v(" 消息流发送给飞行控制栈。")],1),t._v(" "),e("p",[t._v("唯一的 PX4 侧配置需求是将 PX4 设置为 "),e("em",[t._v("Offboard 模式")]),t._v("。")]),t._v(" "),e("p",[t._v("机载计算机端的硬件设置和软硬件配置在 Github 代码仓库 "),e("a",{attrs:{href:"https://github.com/PX4/avoidance#obstacle-detection-and-avoidance",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4/avoidance"),e("OutboundLink")],1),t._v(" 中已经提供。")]),t._v(" "),e("p",[e("span",{attrs:{id:"mission_mode"}})]),t._v(" "),e("h2",{attrs:{id:"任务模式避障"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#任务模式避障"}},[t._v("#")]),t._v(" 任务模式避障")]),t._v(" "),e("p",[t._v("PX4支持 "),e("RouterLink",{attrs:{to:"/zh/flight_modes/mission.html"}},[t._v("任务模式")]),t._v(" 避障，需要使用一台独立的运行避障软件的机载计算机配合。")],1),t._v(" "),e("h3",{attrs:{id:"任务模式的变化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#任务模式的变化"}},[t._v("#")]),t._v(" 任务模式的变化")]),t._v(" "),e("p",[t._v("开启自主避障功能的任务模式的行为有"),e("em",[t._v("些许不同")]),t._v("。")]),t._v(" "),e("p",[t._v("激活避障之后的不同之处有：")]),t._v(" "),e("ul",[e("li",[t._v("飞机距离目标航点小于阈值半径，即判定为抵达，不考虑航向。\n"),e("ul",[e("li",[t._v("在普通任务模式下，飞机必须沿某一航向抵达目标航点（比如从上一航点沿直线靠近）。 开启自主避障后该约束失效，因为避障算法完全控制了飞机的航向，并且飞机始终在当前视野中移动。")])])]),t._v(" "),e("li",[t._v("一旦判定为到达某航点（即距离航点小于阈值半径），PX4 就开始切换新的当前航点与下一个航点。")]),t._v(" "),e("li",[t._v("如果一个航点在某个障碍物"),e("em",[t._v("之内")]),t._v("，有可能无法抵达（任务将被阻塞）。\n"),e("ul",[e("li",[t._v("如果飞机在上一航点与当前航点连线上的投影经过了当前航点，阈值半径将被放大，当前航点将被标记为抵达。")]),t._v(" "),e("li",[t._v("如果载具只能进入x-y方向的阈值半径，高度方向的可接受阈值将被修改，然后任务将继续（即使无法进入高度的可接受半径）。")])])]),t._v(" "),e("li",[t._v("（由 "),e("em",[t._v("QGroundControl")]),t._v(" 或 PX4 ）预设的任务模式速度将被忽略。 速度将由避障软件决定：\n"),e("ul",[e("li",[e("em",[t._v("local planner")]),t._v(" 任务速度约 3m/s。")]),t._v(" "),e("li",[e("em",[t._v("global planner")]),t._v(" 任务速度约 1~1.5 m/s。")])])])]),t._v(" "),e("p",[t._v("如果 PX4 停止接收设定点更新超过半秒钟， 将切换到 "),e("RouterLink",{attrs:{to:"/zh/flight_modes/hold.html"}},[t._v("保持Hold 模式")]),t._v("。")],1),t._v(" "),e("h3",{attrs:{id:"px4-配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#px4-配置"}},[t._v("#")]),t._v(" PX4 配置")]),t._v(" "),e("p",[t._v("PX4 通过 "),e("RouterLink",{attrs:{to:"/zh/advanced_config/parameters.html"}},[t._v("设置")]),t._v(" 参数 "),e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_OBS_AVOID"}},[t._v("COM_OBS_AVOID")]),t._v(" 为1 来使能自主避障功能。")],1),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),e("p",[e("code",[t._v("COM_OBS_AVOID")]),t._v(" 还使能了 "),e("RouterLink",{attrs:{to:"/zh/computer_vision/safe_landing.html"}},[t._v("安全着陆")]),t._v("，以及使用了 PX4 "),e("RouterLink",{attrs:{to:"/zh/computer_vision/path_planning_interface.html"}},[t._v("Path Planning Offboard Interface")]),t._v(" （轨迹接口）将外部路径规划服务与 PX4 集成的其他功能。")],1)]),t._v(" "),e("h2",{attrs:{id:"机载计算机设置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#机载计算机设置"}},[t._v("#")]),t._v(" 机载计算机设置")]),t._v(" "),e("p",[t._v("机载计算机侧的硬件设置和硬件/软件配置在 Github 仓库 "),e("a",{attrs:{href:"https://github.com/PX4/avoidance#obstacle-detection-and-avoidance",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4/avoidance"),e("OutboundLink")],1),t._v(" 中已经提供。")]),t._v(" "),e("p",[t._v("任务中的自主避障可以使用 "),e("em",[t._v("local planner")]),t._v(" 或者 "),e("em",[t._v("global planner")]),t._v("（建议使用 local planner / 更好的表现）。")]),t._v(" "),e("p",[e("span",{attrs:{id:"interface"}})]),t._v(" "),e("h2",{attrs:{id:"自主避障接口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自主避障接口"}},[t._v("#")]),t._v(" 自主避障接口")]),t._v(" "),e("p",[t._v("PX4 使用 "),e("RouterLink",{attrs:{to:"/zh/computer_vision/path_planning_interface.html"}},[t._v("Path Planning Offboard Interface")]),t._v(" 集成机载计算机中的路径规划服务（包括 "),e("RouterLink",{attrs:{to:"/zh/computer_vision/obstacle_avoidance.html#mission_mode"}},[t._v("任务中自主避障")]),t._v("，"),e("RouterLink",{attrs:{to:"/zh/computer_vision/safe_landing.html"}},[t._v("安全着陆")]),t._v(" 以及更多的服务）。")],1),t._v(" "),e("p",[t._v("PX4 和机载设备之间的（消息发送）接口与任何其他路径规划服务"),e("em",[t._v("完全")]),t._v("一样。")]),t._v(" "),e("h2",{attrs:{id:"支持的硬件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#支持的硬件"}},[t._v("#")]),t._v(" 支持的硬件")]),t._v(" "),e("p",[t._v("测试过的机载计算机和相机列于 "),e("a",{attrs:{href:"https://github.com/PX4/avoidance#run-on-hardware",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4/avoidance"),e("OutboundLink")],1),t._v(" 中。")])])}),[],!1,null,null,null);a.default=v.exports}}]);