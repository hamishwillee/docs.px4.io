(window.webpackJsonp=window.webpackJsonp||[]).push([[370],{2532:function(t,e,a){"use strict";a.r(e);var i=a(19),s=Object(i.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"任务"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#任务"}},[t._v("#")]),t._v(" 任务")]),t._v(" "),i("h2",{attrs:{id:"规划任务"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#规划任务"}},[t._v("#")]),t._v(" 规划任务")]),t._v(" "),i("p",[t._v("手动规划任务非常简单:")]),t._v(" "),i("ul",[i("li",[t._v("切换到mission视图")]),t._v(" "),i("li",[t._v('在左上选择 ** 添加航点 ** ("加号") 图标。')]),t._v(" "),i("li",[t._v("点击地图添加航点。")]),t._v(" "),i("li",[t._v("使用右侧的航点列表修改航点参数和类型。底部的高度指示器提供每个航点的相对高度。")]),t._v(" "),i("li",[t._v("完成后, 单击 ** 上载 ** 按钮 (右上), 将任务发送到飞行器。")])]),t._v(" "),i("p",[t._v("You can also use the "),i("em",[t._v("Pattern")]),t._v(" tool to automate creation of survey grids.")]),t._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),i("p",[t._v("For more information see the "),i("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/PlanView/PlanView.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGroundControl User Guide"),i("OutboundLink")],1),t._v(".")])]),t._v(" "),i("p",[i("img",{attrs:{src:a(837),alt:"planning-mission"}})]),t._v(" "),i("h3",{attrs:{id:"setting-vehicle-yaw"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#setting-vehicle-yaw"}},[t._v("#")]),t._v(" Setting Vehicle Yaw")]),t._v(" "),i("p",[t._v("If set, a multi-rotor vehicle will yaw to face the "),i("strong",[t._v("Heading")]),t._v(" value specified in the target waypoint (corresponding to "),i("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_NAV_WAYPOINT",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAV_CMD_NAV_WAYPOINT.param4"),i("OutboundLink")],1),t._v(").")]),t._v(" "),i("p",[t._v("If "),i("strong",[t._v("Heading")]),t._v(" has not been explicitly set for the target waypoint ("),i("code",[t._v("param4=NaN")]),t._v(") then the vehicle will yaw towards a location specified in the parameter "),i("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_YAW_MODE"}},[t._v("MPC_YAW_MODE")]),t._v(". By default this is the next waypoint.")],1),t._v(" "),i("p",[t._v("Vehicle types that cannot independently control yaw and direction of travel will ignore yaw settings (e.g. Fixed Wing).")]),t._v(" "),i("h3",{attrs:{id:"setting-acceptance-turning-radius"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#setting-acceptance-turning-radius"}},[t._v("#")]),t._v(" Setting Acceptance/Turning Radius")]),t._v(" "),i("p",[t._v("The "),i("em",[t._v("acceptance radius")]),t._v(" defines the circle around a waypoint within which a vehicle considers it has reached the waypoint, and will immediately switch to (and start turning towards) the next waypoint.")]),t._v(" "),i("p",[t._v("For a multi-rotor drones, the acceptance radius is tuned using the parameter "),i("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#NAV_ACC_RAD"}},[t._v("NAV_ACC_RAD")]),t._v(". By default, the radius is small to ensure that multirotors pass above the waypoints, but it can be increased to create a smoother path such that the drone starts to turn before reaching the waypoint.")],1),t._v(" "),i("p",[t._v("The image below shows the same mission flown with different acceptance radius parameters:")]),t._v(" "),i("p",[i("img",{attrs:{src:a(838),alt:"acceptance radius comparison"}})]),t._v(" "),i("p",[t._v("The speed in the turn is automatically computed based on the acceptance radius (= turning radius) and the maximum allowed acceleration and jerk (see "),i("RouterLink",{attrs:{to:"/zh/config_mc/mc_jerk_limited_type_trajectory.html#auto-mode"}},[t._v("Jerk-limited Type Trajectory for Multicopters")]),t._v(").")],1),t._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),i("p",[t._v("For more information about the impact of the acceptance radius around the waypoint see: "),i("RouterLink",{attrs:{to:"/zh/flight_modes/mission.html#rounded-turns-inter-waypoint-trajectory"}},[t._v("Mission Mode > Inter-waypoint Trajectory")]),t._v(".")],1)]),t._v(" "),i("h2",{attrs:{id:"执行飞行任务"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#执行飞行任务"}},[t._v("#")]),t._v(" 执行飞行任务")]),t._v(" "),i("p",[t._v("Once the mission is uploaded, switch to the flight view. The mission is displayed in a way that makes it easy to track progress (it cannot be modified in this view).")]),t._v(" "),i("p",[i("img",{attrs:{src:a(839),alt:"flying-mission"}})])])}),[],!1,null,null,null);e.default=s.exports},837:function(t,e,a){t.exports=a.p+"assets/img/planning_mission.05ce0920.jpg"},838:function(t,e,a){t.exports=a.p+"assets/img/acceptance_radius_comparison.b183ada4.jpg"},839:function(t,e,a){t.exports=a.p+"assets/img/flying_mission.8dfc3df0.jpg"}}]);