(window.webpackJsonp=window.webpackJsonp||[]).push([[477],{3370:function(t,e,i){"use strict";i.r(e);var s=i(19),a=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"任务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#任务"}},[t._v("#")]),t._v(" 任务")]),t._v(" "),s("h2",{attrs:{id:"规划任务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#规划任务"}},[t._v("#")]),t._v(" 规划任务")]),t._v(" "),s("p",[t._v("手动规划任务非常简单:")]),t._v(" "),s("ul",[s("li",[t._v("切换到任务视图")]),t._v(" "),s("li",[t._v("Select the "),s("strong",[t._v("Add Waypoint")]),t._v(' ("plus") icon in the top left.')]),t._v(" "),s("li",[t._v("点击地图添加航点。")]),t._v(" "),s("li",[t._v("使用右侧的航点列表修改航点参数和类型。底部的高度指示器提供每个航点的相对高度。")]),t._v(" "),s("li",[t._v("Once finished, click on the "),s("strong",[t._v("Upload")]),t._v(" button (top right) to send the mission to the vehicle.")])]),t._v(" "),s("p",[t._v("You can also use the "),s("em",[t._v("Pattern")]),t._v(" tool to automate creation of survey grids.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("For more information see the "),s("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/PlanView/PlanView.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGroundControl User Guide"),s("OutboundLink")],1),t._v(". :::")]),t._v(" "),s("p",[s("img",{attrs:{src:i(962),alt:"规划任务"}})]),t._v(" "),s("h3",{attrs:{id:"mission-feasibility-checks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mission-feasibility-checks"}},[t._v("#")]),t._v(" Mission Feasibility Checks")]),t._v(" "),s("p",[t._v("PX4 runs some basic sanity checks to determine if a mission is feasible. For example, whether the mission is close enough to the vehicle, if the mission will conflict with a geofence, or if a mission landing pattern is required but is not present.")]),t._v(" "),s("p",[t._v("The checks are run when the mission is uploaded and immediately before it is run. If any of the checks fail, the user is notified and it is not possible to start the mission.")]),t._v(" "),s("p",[t._v("For more detail on the checks and possible actions, see: "),s("RouterLink",{attrs:{to:"/zh/flight_modes/mission.html#mission-feasibility-checks"}},[t._v("Mission Mode > Mission Feasibility Checks")]),t._v(".")],1),t._v(" "),s("h3",{attrs:{id:"设置机体航向"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置机体航向"}},[t._v("#")]),t._v(" 设置机体航向")]),t._v(" "),s("p",[t._v("If set, a multi-rotor vehicle will yaw to face the "),s("strong",[t._v("Heading")]),t._v(" value specified in the target waypoint (corresponding to "),s("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_NAV_WAYPOINT",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAV_CMD_NAV_WAYPOINT.param4"),s("OutboundLink")],1),t._v(").")]),t._v(" "),s("p",[t._v("If "),s("strong",[t._v("Heading")]),t._v(" has not been explicitly set for the target waypoint ("),s("code",[t._v("param4=NaN")]),t._v(") then the vehicle will yaw towards a location specified in the parameter "),s("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_YAW_MODE"}},[t._v("MPC_YAW_MODE")]),t._v(". 默认情况下，是指向下一个航点。")],1),t._v(" "),s("p",[t._v("不能独立控制偏航和行驶方向的机体类型将忽略偏航设置（例如固定翼）。")]),t._v(" "),s("h3",{attrs:{id:"设置航点-转弯半径"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置航点-转弯半径"}},[t._v("#")]),t._v(" 设置航点/转弯半径")]),t._v(" "),s("p",[t._v("The "),s("em",[t._v("acceptance radius")]),t._v(" defines the circle around a waypoint within which a vehicle considers it has reached the waypoint, and will immediately switch to (and start turning towards) the next waypoint.")]),t._v(" "),s("p",[t._v("对于多旋翼无人机，使用参数"),s("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#NAV_ACC_RAD"}},[t._v("NAV_ACC_RAD")]),t._v("调整航点半径。 默认情况下，半径设置的很小以确保多旋翼无人机通过航路点上方，但可以增加半径以创建更平滑的路径，这时无人机在到达航路点之前便开始转弯。")],1),t._v(" "),s("p",[t._v("下图显示了相同任务以不同的航点半径参数飞行的轨迹：")]),t._v(" "),s("p",[s("img",{attrs:{src:i(963),alt:"航点半径"}})]),t._v(" "),s("p",[t._v("转弯速度是根据航点半径（=转弯半径）和最大允许速度和加加速度自动计算的。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("For more information about the impact of the acceptance radius around the waypoint see: "),s("RouterLink",{attrs:{to:"/zh/flight_modes/mission.html#rounded-turns-inter-waypoint-trajectory"}},[t._v("Mission Mode > Inter-waypoint Trajectory")]),t._v(". :::")],1),t._v(" "),s("h2",{attrs:{id:"飞行任务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#飞行任务"}},[t._v("#")]),t._v(" 飞行任务")]),t._v(" "),s("p",[t._v("任务上传后，切换到飞行视图。 任务将显示为一条航线，这样可以方便跟踪（在此视图中无法修改）。")]),t._v(" "),s("p",[s("img",{attrs:{src:i(964),alt:"飞行任务"}})])])])])}),[],!1,null,null,null);e.default=a.exports},962:function(t,e,i){t.exports=i.p+"assets/img/planning_mission.05ce0920.jpg"},963:function(t,e,i){t.exports=i.p+"assets/img/acceptance_radius_comparison.b183ada4.jpg"},964:function(t,e,i){t.exports=i.p+"assets/img/flying_mission.8dfc3df0.jpg"}}]);