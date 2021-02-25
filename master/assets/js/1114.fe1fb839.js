(window.webpackJsonp=window.webpackJsonp||[]).push([[1114],{2317:function(t,_,a){"use strict";a.r(_);var v=a(18),e=Object(v.a)({},(function(){var t=this,_=t.$createElement,a=t._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"防撞功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#防撞功能"}},[t._v("#")]),t._v(" 防撞功能")]),t._v(" "),a("p",[a("em",[t._v("防撞")]),t._v("功能用于自动减速或制动，以免飞机撞上障碍物。")]),t._v(" "),a("p",[t._v("防撞功能可以在多旋翼的"),a("RouterLink",{attrs:{to:"/zh/flight_modes/position_mc.html"}},[t._v("位置模式")]),t._v("中使能，并且可以使用来自外接配套计算机，外接支持 MAVLink 协议的测距仪，连接到飞控的测距仪或者以上任意组合的传感器数据。")],1),t._v(" "),a("p",[t._v("如果传感器的测量范围不够大，防撞功能可能会限制无人机的最大飞行速度。 它也会阻止在没有传感器数据的方向上运动（例如：如果后方没有传感器数据，将无法向后方飞行 ）。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("如果高速飞行至关重要，请在不需要时考虑关闭防撞功能。")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("确保您想要飞行的所有方向上都有传感器或传感器数据(当使能防撞功能时)。")])]),t._v(" "),a("h2",{attrs:{id:"综述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#综述"}},[t._v("#")]),t._v(" 综述")]),t._v(" "),a("p",[t._v("通过设置参数（"),a("a",{attrs:{href:"#CP_DIST"}},[t._v("CP_DIST")]),t._v("） 最小安全距离来使能 PX4 上的"),a("em",[t._v("防撞")]),t._v("功能。")]),t._v(" "),a("p",[t._v("该功能需要外部系统提供的障碍物信息（发送的 MAVLink "),a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#OBSTACLE_DISTANCE",target:"_blank",rel:"noopener noreferrer"}},[t._v("OBSTACLE_DISTANCE"),a("OutboundLink")],1),t._v(" 消息）和或一个连接到飞控的"),a("RouterLink",{attrs:{to:"/zh/sensor/rangefinders.html"}},[t._v("距离传感器")]),t._v("。")],1),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("多个传感器可用于获取机身"),a("em",[t._v("周围")]),t._v("物体的信息并防撞。 如果多个数据源提供"),a("em",[t._v("相同")]),t._v("的方向数据，系统将使用离物体最小距离的数据。")])]),t._v(" "),a("p",[t._v("为了在靠近障碍物时减速，无人机限制了最大速度，并且在达到最小允许间距时停止移动。 为了远离（或与之平行的）障碍物，用户必须使无人机/无人车朝向不靠近障碍物的设定点移动。 如果存在一个”更好”的设定点，这个设定点在请求设定点的任何一侧，并且在固定的间隙内，算法将对设定点方向做最小的调整。")]),t._v(" "),a("p",[t._v("当"),a("em",[t._v("防撞功能")]),t._v("正在主动控制速度设定值，用户就会通过 "),a("em",[t._v("QGroundControl")]),t._v(" 地面站收到通知。")]),t._v(" "),a("p",[t._v("PX4 软件配置在下一章节中。 如果您准备使用距离传感器连接到飞控上来防撞，可能需要按照"),a("a",{attrs:{href:"#rangefinder"}},[t._v("PX4 距离传感器")]),t._v("中的说明描述来安装配置。 如果使用机载计算机提供障碍物信息，请参阅"),a("a",{attrs:{href:"#companion"}},[t._v("机载计算机设置")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"px4-软件-设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#px4-软件-设置"}},[t._v("#")]),t._v(" PX4 (软件) 设置")]),t._v(" "),a("p",[t._v("配置防撞功能需要通过 "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameters.html"}},[t._v("QGroundControl")]),t._v(" 地面站来设置以下参数：")],1),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("span",{attrs:{id:"CP_DIST"}}),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#CP_DIST"}},[t._v("CP_DIST")])],1),t._v(" "),a("td",[t._v("设置最小允许距离（无人机/无人车可以接近障碍物的最近距离）。 设置为负值将禁用 "),a("em",[t._v("防撞")]),t._v(" 功能。")])]),t._v(" "),a("tr",[a("td",[t._v(">"),a("strong",[t._v("警告")]),t._v(" 此值是相对传感器的距离，而不是相对机身或者螺旋桨的外部距离。 确保一个安全距离。")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[a("span",{attrs:{id:"CP_DELAY"}}),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#CP_DELAY"}},[t._v("CP_DELAY")])],1),t._v(" "),a("td",[t._v("设置传感器和速度设定值跟踪延迟。 查看下面的 "),a("a",{attrs:{href:"#delay_tuning"}},[t._v("延迟调整")]),t._v("。")])]),t._v(" "),a("tr",[a("td",[a("span",{attrs:{id:"CP_GUIDE_ANG"}}),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#CP_GUIDE_ANG"}},[t._v("CP_GUIDE_ANG")])],1),t._v(" "),a("td",[t._v("如果在该方向上发现的障碍物较少，则设置无人机/无人车可能偏离的角度（在指令方向的两侧）。 请参阅下面的"),a("a",{attrs:{href:"#angle_change_tuning"}},[t._v("制导调整")]),t._v("。")])]),t._v(" "),a("tr",[a("td",[a("span",{attrs:{id:"CP_GO_NO_DATA"}}),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#CP_GO_NO_DATA"}},[t._v("CP_GO_NO_DATA")])],1),t._v(" "),a("td",[t._v("设置为 1 可以使无人机/无人车在没有传感器覆盖的方向移动（默认值是0/"),a("code",[t._v("False")]),t._v("）。")])])])]),t._v(" "),a("p",[a("span",{attrs:{id:"algorithm"}})]),t._v(" "),a("h2",{attrs:{id:"算法描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#算法描述"}},[t._v("#")]),t._v(" 算法描述")]),t._v(" "),a("p",[t._v("所有传感器的数据融合到机身周围的 36 个扇区中，每个扇区包含传感器数据和上次观测时间信息，或者指示该扇区没有可用数据。 当控制无人机向特定的方向移动时，就会检查该方向半球内的所有扇区，以查看此次移动是否会使机身靠近任何障碍物。 如果是这样，无人机的速度就会受到限制。")]),t._v(" "),a("p",[t._v("该速度限制同时考虑了内速度环和最佳加速度控制器，内速度环由 "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_XY_P"}},[t._v("MPC_XY_P")]),t._v(" 参数来调整，最佳加速度控制器由 <0>MPC_JERK_MAX</0> 和 <0>MPC_ACC_HOR</0> 两个参数来调整。 限制速度，以便无人机及时停止以保持在 "),a("a",{attrs:{href:"#CP_DIST"}},[t._v("CP_DIST")]),t._v(" 这个参数指定的距离。 还考虑到每个扇区的传感器范围，通过相同的机制限制了速度。")],1),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("如果在特定的方向上没有传感器数据，则该方向的速度会被限制为 0（防止机身撞到看不见的物体）。 如果想要在没有传感器覆盖范围的方向自由移动，这可以将 "),a("a",{attrs:{href:"#CP_GO_NO_DATA"}},[t._v("CP_GO_NO_DATA")]),t._v(" 设置为 1 来使能。")])]),t._v(" "),a("p",[t._v("通过 "),a("a",{attrs:{href:"#CP_DELAY"}},[t._v(" CP_DELAY ")]),t._v(" 参数保守地估计机身跟踪速度设定点和从外部来源接收传感器数据中的延迟。 应该将 "),a("a",{attrs:{href:"#delay_tuning"}},[t._v("调整到")]),t._v(" 特定的机型。")]),t._v(" "),a("p",[t._v("根据边余量的大小，邻近的扇区比命令扇区“更好”，则可以按 "),a("a",{attrs:{href:"#CP_GUIDE_ANG"}},[t._v("CP_GUIDE_ANG")]),t._v(" 指定的角度修改请求输入的方向。 这有助于微调用户输入，以“引导”机身绕过障碍物，而不是卡在障碍物上。")]),t._v(" "),a("p",[a("span",{attrs:{id:"data_loss"}})]),t._v(" "),a("h3",{attrs:{id:"航程数据丢失"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#航程数据丢失"}},[t._v("#")]),t._v(" 航程数据丢失")]),t._v(" "),a("p",[t._v("如果自驾仪超过 0.5秒没有收到传感器的航程数据，自驾仪将会发出警告"),a("em",[t._v("没有航程数据，不允许移动")]),t._v("。 这会导致强制将 xy 的速度设置为 0。 5秒没有收到任何数据，无人机会切换到 "),a("RouterLink",{attrs:{to:"/zh/flight_modes/hold.html"}},[t._v("保持模式")]),t._v("。 如果想要机身再次移动，则需要禁止防撞功能，禁止防撞功能可以通过设置 "),a("a",{attrs:{href:"#CP_DIST"}},[t._v("CP_DIST")]),t._v(" 为负值或者切换到 "),a("RouterLink",{attrs:{to:"/zh/flight_modes/position_mc.html"}},[t._v("位置模式")]),t._v(" 以外的模式（例如：切换到 "),a("em",[t._v("高度模式")]),t._v(" 或者 "),a("em",[t._v("自稳模式")]),t._v("）。")],1),t._v(" "),a("p",[t._v("如果连接了多个传感器，但是其中有一个传感器失去连接，仍然能够在有传感器数据上报的视野（FOV）范围内飞行。 故障传感器的数据会失效，并且该传感器覆盖的区域会被视为未覆盖区域，意味着无法移动到该区域。")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("使能参数 "),a("a",{attrs:{href:"#CP_GO_NO_DATA"}},[t._v("CP_GO_NO_DATA=1")]),t._v(" 时要小心，这会使无人机飞出传感器覆盖的区域。 如果多个传感器中有一个失去连接，故障传感器所覆盖的区域将被视为未覆盖，可以在该区域移动不受限制。")])]),t._v(" "),a("p",[a("span",{attrs:{id:"delay_tuning"}})]),t._v(" "),a("h3",{attrs:{id:"cp-delay-延迟调整"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cp-delay-延迟调整"}},[t._v("#")]),t._v(" CP_DELAY 延迟调整")]),t._v(" "),a("p",[t._v("延迟的主要来源有两个："),a("em",[t._v("传感器延迟")]),t._v(" 和机身 "),a("em",[t._v("速度设定点跟踪延迟")]),t._v("。 这两个延迟来源都可以通过 "),a("a",{attrs:{href:"#CP_DELAY"}},[t._v("CP_DELAY")]),t._v(" 这个参数来调整。")]),t._v(" "),a("p",[t._v("连接到飞控的距离传感器的 "),a("em",[t._v("传感器延迟")]),t._v(" 可以假定为 0。 对于外部视觉系统，传感器延迟可能高达 0.2秒。")]),t._v(" "),a("p",[t._v("无人机 "),a("em",[t._v("速度设定点跟踪延迟")]),t._v(" 可以通过在 <0>位置模式</0> 下全速飞行，然后停止这种方式来测量。 然后可以从日志中测量实际速度和速度设置值之间的延迟。 跟踪延迟通常在 0.1 至 0.5秒之间，取决于机身尺寸和调试情况。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("如果车速在接近障碍物时发生振荡（即减速，加速，减速），则延迟设置太高。")])]),t._v(" "),a("p",[a("span",{attrs:{id:"angle_change_tuning"}})]),t._v(" "),a("h3",{attrs:{id:"cp-guide-ang-制导调试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cp-guide-ang-制导调试"}},[t._v("#")]),t._v(" CP_GUIDE_ANG 制导调试")]),t._v(" "),a("p",[t._v("取决于机身，环境类型和飞行员技能，可能需要不同数量的制导。 将 "),a("a",{attrs:{href:"#CP_GUIDE_ANG"}},[t._v("CP_GUIDE_ANG")]),t._v(" 参数设置为 0 将禁用制导，从而使得无人机只能在正确的方向上移动。 增大此参数将使无人机选择最佳方向来避开障碍物，从而更容易飞过狭窄的间隙，并与物体周围保持最小间距。")]),t._v(" "),a("p",[t._v("如果该参数设置太小，机身在靠近障碍物时可能会感觉“卡住”， 因为只允许以最小距离远离障碍物移动。 如果该参数设置太大，机身可能会感觉它朝着飞手未指示的方向“滑动”远离障碍物。 从测试来看，尽管不同的车辆可能有不同的要求，但是 30度是一个很好的平衡点。")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("制导功能绝不会把无人机/无人车引导到没有传感器数据的方向。 如果只有一个距离传感器指向前方时无人机感到“卡住”，这可能是因为由于缺乏信息，制导无法安全地调整方向。")])]),t._v(" "),a("p",[a("span",{attrs:{id:"rangefinder"}})]),t._v(" "),a("h2",{attrs:{id:"px4-距离传感器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#px4-距离传感器"}},[t._v("#")]),t._v(" PX4 距离传感器")]),t._v(" "),a("p",[t._v("使用 "),a("RouterLink",{attrs:{to:"/zh/sensor/cm8jl65_ir_distance_sensor.html"}},[t._v("Lanbao PSK-CM8JL65-CC5")]),t._v(" 红外距离传感器对PX4的防撞功能来说“开箱即用”，最少的额外配置就可以使用。")],1),t._v(" "),a("ul",[a("li",[t._v("首先，"),a("RouterLink",{attrs:{to:"/zh/sensor/cm8jl65_ir_distance_sensor.html"}},[t._v("连接和配置传感器")]),t._v(", 使能防撞功能（如上所述，使用 "),a("a",{attrs:{href:"#CP_DIST"}},[t._v("CP_DIST")]),t._v(" 参数）。")],1),t._v(" "),a("li",[t._v("使用参数 "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SENS_CM8JL65_R_0"}},[t._v("SENS_CM8JL65_R_0")]),t._v(" 设置传感器方向。")],1)]),t._v(" "),a("p",[t._v("其他传感器的使能需要修改驱动代码来设置传感器方向和视觉范围。")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("在特定端口上连接并配置距离传感器（请参阅特殊传感器文档</ 0>），并使用 CP_DIST </ 1>使能防撞功能。")])]),a("p"),t._v(" "),a("ul",[a("li",[t._v("修改驱动程序以设置方向。 这个可以通过类似于 "),a("code",[t._v("SENS_CM8JL65_R_0")]),t._v(" 参数的方式实现（也可以在关于传感器的"),a("em",[t._v("module.yaml")]),t._v("这个文件中写死方向，类似于这样: "),a("code",[t._v("sf0x start -d ${SERIAL_DEV} -R 25")]),t._v(" - 25是"),a("code",[t._v("ROTATION_DOWNWARD_FACING")]),t._v("）。")]),t._v(" "),a("li",[t._v("在距离传感器 UORB 主题（"),a("code",[t._v("distance_sensor_s.h_fov")]),t._v("）中设置 "),a("em",[t._v("视野")]),t._v(" 的地方修改驱动代码。")])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("您可以从 "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/12179",target:"_blank",rel:"noopener noreferrer"}},[t._v("功能 PR"),a("OutboundLink")],1),t._v(" 中看到所需的修改。 请回馈你的更改！")])]),t._v(" "),a("p",[a("span",{attrs:{id:"companion"}})]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("## 机载计算机设置\n\n如果使用机载计算机或者外部传感器，需要提供 [OBSTACLE_DISTANCE](https://mavlink.io/en/messages/common.html#OBSTACLE_DISTANCE) 消息流，该消息流反映检测到障碍物的时间和位置。\n\n消息发送的最低频率 *必须* 由飞机速度决定 - 频率越高留给载具识别障碍物的反应时间越长。\n")])])]),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("系统在初始测试时，无人机以 4m/s的速度移动，并且以 10Hz（视觉系统支持的最大速率）的频率发送"),a("code",[t._v("OBSTACLE_DISTANCE")]),t._v(" 消息。 在更高的速度或更低的距离信息更新频率下，该系统应该也能达到不错的效果。")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("配套的测试软件是 [PX4/avoidance](https://github.com/PX4/avoidance#obstacle-detection-and-avoidance) 仓库中的 *local_planner*。 关于硬件和软件配置的更多信息请查看链接：[PX4/avoidance > Run on Hardware](https://github.com/PX4/avoidance#run-on-hardware). \x3c!-- hardware platform used for testing not readily available, so have removed --\x3e\n\n软硬件的配置应遵照 [PX4/avoidance](https://github.com/PX4/avoidance#obstacle-detection-and-avoidance) 仓库的说明。 要发出 `OBSTACLE_DISTANCE` 消息，必须使用 *rqt_reconfigure* 工具，并将参数 `send_obstacles_fcu` 设置为true。\n\n## Gazebo设置\n\n*防撞*功能支持Gazebo仿真测试。 请参阅 [PX4/avoidance](https://github.com/PX4/avoidance#obstacle-detection-and-avoidance) 的配置说明。\n\n\x3c!-- PR companion collision prevention (initial): https://github.com/PX4/PX4-Autopilot/pull/10785 --\x3e\n\n\x3c!-- PR for FC sensor collision prevention: https://github.com/PX4/PX4-Autopilot/pull/12179 --\x3e")])])])])}),[],!1,null,null,null);_.default=e.exports}}]);