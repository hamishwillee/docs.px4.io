(window.webpackJsonp=window.webpackJsonp||[]).push([[378],{2900:function(t,_,a){"use strict";a.r(_);var s=a(19),r=Object(s.a)({},(function(){var t=this,_=t.$createElement,s=t._self._c||_;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"任务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#任务"}},[t._v("#")]),t._v(" 任务")]),t._v(" "),s("h2",{attrs:{id:"规划任务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#规划任务"}},[t._v("#")]),t._v(" 规划任务")]),t._v(" "),s("p",[t._v("手动规划任务非常简单:")]),t._v(" "),s("ul",[s("li",[t._v("切换到任务视图")]),t._v(" "),s("li",[t._v("在左上选择"),s("strong",[t._v("添加航点")]),t._v('("加号") 图标。')]),t._v(" "),s("li",[t._v("点击地图添加航点。")]),t._v(" "),s("li",[t._v("使用右侧的航点列表修改航点参数和类型。底部的高度指示器提供每个航点的相对高度。")]),t._v(" "),s("li",[t._v("完成后, 单击(右上角的)"),s("strong",[t._v("上传")]),t._v("按钮 , 将任务发送到飞行器。")])]),t._v(" "),s("p",[t._v("您也可以使用"),s("em",[t._v("图案")]),t._v("工具自动创建测绘网络。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("有关更多信息，请参阅"),s("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/PlanView/PlanView.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGroundControl 用户指南"),s("OutboundLink")],1),t._v("。")])]),t._v(" "),s("p",[s("img",{attrs:{src:a(847),alt:"规划任务"}})]),t._v(" "),s("h3",{attrs:{id:"设置机体航向"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置机体航向"}},[t._v("#")]),t._v(" 设置机体航向")]),t._v(" "),s("p",[t._v("设置后，多旋翼机体航向将会朝向配置的"),s("strong",[t._v("航向")]),t._v("值（对应"),s("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_NAV_WAYPOINT",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAV_CMD_NAV_WAYPOINT.param4"),s("OutboundLink")],1),t._v("）。")]),t._v(" "),s("p",[t._v("如果目标航点 ( )明确设置"),s("strong",[t._v("航向")]),t._v("("),s("code",[t._v("param4=NaN")]),t._v(")，机体的偏航将朝向参数"),s("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_YAW_MODE"}},[t._v("MPC_YAW_MODE")]),t._v("中指定的方向。 默认情况下，是指向下一个航点。")],1),t._v(" "),s("p",[t._v("不能独立控制偏航和行驶方向的机体类型将忽略偏航设置（例如固定翼）。")]),t._v(" "),s("h3",{attrs:{id:"设置航点-转弯半径"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置航点-转弯半径"}},[t._v("#")]),t._v(" 设置航点/转弯半径")]),t._v(" "),s("p",[s("em",[t._v("航点半径")]),t._v("定义了一个以航点为圆心的圆，无人机到达半径内便认为到达航点，并且会立即前往（并开始转向）下一个航点。")]),t._v(" "),s("p",[t._v("对于多旋翼无人机，使用参数"),s("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#NAV_ACC_RAD"}},[t._v("NAV_ACC_RAD")]),t._v("调整航点半径。 默认情况下，半径设置的很小以确保多旋翼无人机通过航路点上方，但可以增加半径以创建更平滑的路径，这时无人机在到达航路点之前便开始转弯。")],1),t._v(" "),s("p",[t._v("下图显示了相同任务以不同的航点半径参数飞行的轨迹：")]),t._v(" "),s("p",[s("img",{attrs:{src:a(848),alt:"航点半径"}})]),t._v(" "),s("p",[t._v("转弯速度是根据航点半径（=转弯半径）和最大允许速度和加加速度自动计算的。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("关于航点半径的更多信息，见： "),s("RouterLink",{attrs:{to:"/zh/flight_modes/mission.html#rounded-turns-inter-waypoint-trajectory"}},[t._v("任务模式 > 航点间轨迹")]),t._v("。")],1)]),t._v(" "),s("h2",{attrs:{id:"飞行任务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#飞行任务"}},[t._v("#")]),t._v(" 飞行任务")]),t._v(" "),s("p",[t._v("任务上传后，切换到飞行视图。 任务将显示为一条航线，这样可以方便跟踪（在此视图中无法修改）。")]),t._v(" "),s("p",[s("img",{attrs:{src:a(849),alt:"飞行任务"}})])])}),[],!1,null,null,null);_.default=r.exports},847:function(t,_,a){t.exports=a.p+"assets/img/planning_mission.05ce0920.jpg"},848:function(t,_,a){t.exports=a.p+"assets/img/acceptance_radius_comparison.b183ada4.jpg"},849:function(t,_,a){t.exports=a.p+"assets/img/flying_mission.8dfc3df0.jpg"}}]);