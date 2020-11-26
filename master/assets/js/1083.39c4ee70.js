(window.webpackJsonp=window.webpackJsonp||[]).push([[1083],{2281:function(_,t,v){"use strict";v.r(t);var a=v(18),e=Object(a.a)({},(function(){var _=this,t=_.$createElement,v=_._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"防撞功能"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#防撞功能"}},[_._v("#")]),_._v(" 防撞功能")]),_._v(" "),v("p",[v("em",[_._v("防撞")]),_._v("功能用于自动减速或制动，以免飞机撞上障碍物。")]),_._v(" "),v("p",[_._v("防撞功能可以在多旋翼的"),v("RouterLink",{attrs:{to:"/zh/flight_modes/position_mc.html"}},[_._v("位置模式")]),_._v("中使能，并且可以使用来自外接配套计算机，外接支持MAVLink协议的测距仪，连接到飞控的测距仪或者以上任意组合的传感器数据。")],1),_._v(" "),v("p",[_._v("如果传感器的测量范围不够大，防撞功能可能会限制无人机的最大飞行速度。 它也会阻止在没有传感器数据的方向上运动。（例如：如果后方没有传感器数据，将无法向后方飞行 ）。")]),_._v(" "),v("blockquote",[v("p",[v("strong",[_._v("提示")]),_._v(" 如果高速飞行至关重要，请在不需要时考虑关闭防撞功能。")])]),_._v(" "),v("p",[v("span")]),_._v(" "),v("blockquote",[v("p",[v("strong",[_._v("提示")]),_._v(" 确保您想要飞行的所有方向上都有传感器或传感器数据(当使能防撞功能时)。")])]),_._v(" "),v("h2",{attrs:{id:"综述"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#综述"}},[_._v("#")]),_._v(" 综述")]),_._v(" "),v("p",[_._v("通过设置参数"),v("a",{attrs:{href:"#CP_DIST"}},[_._v("CP_DIST")]),_._v(" 最小安全距离来使能PX4上的"),v("em",[_._v("防撞")]),_._v("功能。")]),_._v(" "),v("p",[_._v("该功能需要外部系统提供的障碍物信息（发送的MAVLink"),v("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#OBSTACLE_DISTANCE",target:"_blank",rel:"noopener noreferrer"}},[_._v("OBSTACLE_DISTANCE"),v("OutboundLink")],1),_._v("消息）和/或一个连接到飞控的"),v("RouterLink",{attrs:{to:"/zh/sensor/rangefinders.html"}},[_._v("距离传感器")]),_._v("（distance sensor）。")],1),_._v(" "),v("blockquote",[v("p",[v("strong",[_._v("注意")]),_._v("多个传感器可用于获取机身周围物体的信息并防撞。 如果多个数据源提供"),v("em",[_._v("相同")]),_._v("的方向数据，系统将使用离物体最小距离的数据。")])]),_._v(" "),v("p",[_._v("为了在靠近障碍物时减速，无人机/无人车限制了最大速度，并且在达到最小允许间距时停止移动。 为了远离（或与之平行的）障碍物，用户必须使无人机/无人车朝向不靠近障碍物的设定点移动。 如果存在一个“更好”的设定点，这个设定点在请求设定点的任何一侧，并且在固定的间隙内，算法将对设定点方向做最小的调整。")]),_._v(" "),v("p",[_._v("当"),v("em",[_._v("防撞")]),_._v("功能正在主动控制速度设定值，用户就会通过"),v("em",[_._v("QGroundControl")]),_._v("地面站收到通知。")]),_._v(" "),v("p",[_._v("PX4软件的安装配置在下一章节中。 如果您准备使用距离传感器连接到飞控上来避障，可能需要按照"),v("a",{attrs:{href:"#rangefinder"}},[_._v("PX4 距离传感器")]),_._v("中的说明描述来安装配置。 如果使用机载计算机提供障碍物信息，请参阅"),v("a",{attrs:{href:"#companion"}},[_._v("机载计算机安装配置")]),_._v("。")]),_._v(" "),v("h2",{attrs:{id:"px4-软件-设置"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#px4-软件-设置"}},[_._v("#")]),_._v(" PX4 (软件) 设置")]),_._v(" "),v("p",[_._v("配置防撞功能需要通过"),v("RouterLink",{attrs:{to:"/zh/advanced_config/parameters.html"}},[_._v("QGroundControl")]),_._v("地面站来设置以下参数：")],1),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("参数")]),_._v(" "),v("th",[_._v("描述")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[v("span",{attrs:{id:"CP_DIST"}}),v("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#CP_DIST"}},[_._v("CP_DIST")])],1),_._v(" "),v("td",[_._v("设置最小允许距离（无人机/无人车可以接近障碍物的最近距离）。 设置为负值将禁用 "),v("em",[_._v("防撞")]),_._v(" 功能。")])]),_._v(" "),v("tr",[v("td",[_._v("> "),v("strong",[_._v("警告")]),_._v(" 此值是相对传感器的距离，而不是相对机身或者螺旋桨的外部距离。 确保一个安全距离。")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[v("span",{attrs:{id:"CP_DELAY"}}),v("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#CP_DELAY"}},[_._v("CP_DELAY")])],1),_._v(" "),v("td",[_._v("设置传感器和速度设定值跟踪延迟。 查看下面的 "),v("a",{attrs:{href:"#delay_tuning"}},[_._v("延迟调整")]),_._v("。")])]),_._v(" "),v("tr",[v("td",[v("span",{attrs:{id:"CP_GUIDE_ANG"}}),v("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#CP_GUIDE_ANG"}},[_._v("CP_GUIDE_ANG")])],1),_._v(" "),v("td",[_._v("如果在该方向上发现的障碍物较少，则设置无人机/无人车可能偏离的角度（在指令方向的两侧）。 请参阅下面的"),v("a",{attrs:{href:"#angle_change_tuning"}},[_._v("制导调整")]),_._v("。")])]),_._v(" "),v("tr",[v("td",[v("span",{attrs:{id:"CP_GO_NO_DATA"}}),v("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#CP_GO_NO_DATA"}},[_._v("CP_GO_NO_DATA")])],1),_._v(" "),v("td",[_._v("设置为1可以使无人机/无人车在没有传感器覆盖的方向移动（默认值是0/"),v("code",[_._v("False")]),_._v("）。")])])])]),_._v(" "),v("p",[v("span",{attrs:{id:"algorithm"}})]),_._v(" "),v("h2",{attrs:{id:"算法描述"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#算法描述"}},[_._v("#")]),_._v(" 算法描述")]),_._v(" "),v("p",[_._v("所有传感器的数据融合到机身周围的36个扇区中，每个扇区包含传感器数据和上次观测时间信息，或者指示该扇区没有可用数据。 当控制无人机/无人车向特定的方向移动时，就会检查该方向半球内的所有扇区，以查看此次移动是否会使机身靠近任何障碍物。 如果是这样，无人机/无人车的速度就会受到限制。")]),_._v(" "),v("p",[_._v("该速度限制同时考虑了内速度环和最佳加速度控制器，内速度环由"),v("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_XY_P"}},[_._v("MPC_XY_P")]),_._v("参数来调整，最佳加速度控制器由<0>MPC_JERK_MAX</0>和<0>MPC_ACC_HOR</0>两个参数来调整。 限制速度，以便无人机/无人车及时停止以保持在"),v("a",{attrs:{href:"#CP_DIST"}},[_._v("CP_DIST")]),_._v("这个参数指定的距离。 还考虑到每个扇区的传感器范围，通过相同的机制限制了速度。")],1),_._v(" "),v("blockquote",[v("p",[v("strong",[_._v("注意")]),_._v("如果在特定的方向上没有传感器数据，则该方向的速度会被限制为0（防止机身撞到看不见的物体）。 如果想要在没有传感器覆盖范围的方向自由移动，这可以将"),v("a",{attrs:{href:"#CP_GO_NO_DATA"}},[_._v("CP_GO_NO_DATA")]),_._v(" 设置为 1来使能。")])]),_._v(" "),v("p",[_._v("通过 CP_DELAY </ 0>参数保守地估计机身跟踪速度设定点和从外部来源接收传感器数据中的延迟。 应该将 "),v("a",{attrs:{href:"#delay_tuning"}},[_._v("调整到")]),_._v(" 个特定的机型。")]),v("p"),_._v(" "),v("p",[_._v("根据边余量的大小，邻近的扇区比命令扇区更好，则可以按"),v("a",{attrs:{href:"#CP_GUIDE_ANG"}},[_._v("CP_GUIDE_ANG")]),_._v("指定的角度修改请求输入的方向。 这有助于微调用户输入，以“引导”机身绕过障碍物，而不是卡在障碍物上。")]),_._v(" "),v("p",[v("span",{attrs:{id:"data_loss"}})]),_._v(" "),v("h3",{attrs:{id:"航程数据丢失"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#航程数据丢失"}},[_._v("#")]),_._v(" 航程数据丢失")]),_._v(" "),v("p",[_._v("如果自驾仪超过0.5秒没有收到传感器的航程数据，自驾仪将会发出警告"),v("em",[_._v("没有航程数据，不允许移动")]),_._v("。 这会导致强制将xy的速度设置为0。 5秒没有收到任何数据，无人机/无人车会切换到"),v("RouterLink",{attrs:{to:"/zh/flight_modes/hold.html"}},[_._v("保持模式")]),_._v(" 如果想要机身再次移动，则需要禁止防撞功能，禁止防撞功能可以通过设置"),v("a",{attrs:{href:"#CP_DIST"}},[_._v("CP_DIST")]),_._v("为负值或者切换到"),v("RouterLink",{attrs:{to:"/zh/flight_modes/position_mc.html"}},[_._v("位置模式")]),_._v("以外的模式（例如：切换到"),v("em",[_._v("高度模式")]),_._v("或者"),v("em",[_._v("自稳模式")]),_._v("）。")],1),_._v(" "),v("p",[_._v("如果连接了多个传感器，但是其中有一个传感器失去连接，仍然能够在有传感器数据上报的视觉范围内飞行。 故障传感器的数据会失效，并且该传感器覆盖的区域会被视为未覆盖区域，意味着无法移动到该区域。")]),_._v(" "),v("blockquote",[v("p",[v("strong",[_._v("警告")]),_._v(" 使能参数 "),v("a",{attrs:{href:"#CP_GO_NO_DATA"}},[_._v("CP_GO_NO_DATA=1")]),_._v("时要小心，这会使无人机飞出传感器覆盖的区域。 如果多个传感器中有一个失去连接，故障传感器所覆盖的区域将被视为未覆盖，可以在该区域移动不受限制。")])]),_._v(" "),v("p",[v("span",{attrs:{id:"delay_tuning"}})]),_._v(" "),v("h3",{attrs:{id:"cp-delay-延迟调整"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#cp-delay-延迟调整"}},[_._v("#")]),_._v(" CP_DELAY 延迟调整")]),_._v(" "),v("p",[_._v("延迟的主要来源有两个："),v("em",[_._v("传感器延迟")]),_._v("和机身"),v("em",[_._v("速度设定点跟踪延迟")]),_._v("。 这两个延迟来源都可以通过"),v("a",{attrs:{href:"#CP_DELAY"}},[_._v("CP_DELAY")]),_._v("这个参数来调整。")]),_._v(" "),v("p",[_._v("连接到飞控的距离传感器的"),v("em",[_._v("传感器延迟")]),_._v("可以假定为0。 对于外部视觉系统，传感器延迟可能高达0.2秒。")]),_._v(" "),v("p",[_._v("无人机/无人车的"),v("em",[_._v("速度设定点跟踪延迟")]),_._v("可以通过在<0>位置模式</0>下全速飞行，然后停止这种方式来测量。 然后可以从日志中测量实际速度和速度设置值之间的延迟。 跟踪延迟通常在0.1至0.5秒之间，取决于机身尺寸和调试情况。")]),_._v(" "),v("blockquote",[v("p",[v("strong",[_._v("提示")]),_._v("如果车速在接近障碍物时发生振荡（即减速，加速，减速），则延迟设置太高。")])]),_._v(" "),v("p",[v("span",{attrs:{id:"angle_change_tuning"}})]),_._v(" "),v("h3",{attrs:{id:"cp-guide-ang-制导调整"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#cp-guide-ang-制导调整"}},[_._v("#")]),_._v(" CP_GUIDE_ANG 制导调整")]),_._v(" "),v("p",[_._v("取决于机体，环境类型和飞行员技能，可能需要不同数量的制导。 将 "),v("a",{attrs:{href:"#CP_GUIDE_ANG"}},[_._v("CP_GUIDE_ANG")]),_._v(" 参数设置为 0 将禁用制导，从而使得无人机/无人车只能在正确的方向上移动。 增大此参数将使无人机选择最佳方向来避开障碍物，从而更容易飞过狭窄的间隙，并与物体周围保持最小间距。")]),_._v(" "),v("p",[_._v('如果该参数设置太小，机身在靠近障碍物时可能会感觉“卡住”， 因为只允许以最小距离远离障碍物移动。 如果该参数设置太大，机身可能会感觉它朝着飞手未指示的方向"滑动"远离障碍物。 从测试来看，尽管不同的车辆可能有不同的要求，但是30度是一个很好的平衡点。')]),_._v(" "),v("blockquote",[v("p",[v("strong",[_._v("注意")]),_._v(" 制导功能绝不会把无人机/无人车引导到没有传感器数据的方向。 如果只有一个距离传感器指向前方时无人机/无人车感到“卡住”，这可能是因为由于缺乏信息，制导无法安全地调整方向。")])]),_._v(" "),v("p",[v("span",{attrs:{id:"rangefinder"}})]),_._v(" "),v("h2",{attrs:{id:"px4距离传感器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#px4距离传感器"}},[_._v("#")]),_._v(" PX4距离传感器")]),_._v(" "),v("p",[_._v("使用"),v("RouterLink",{attrs:{to:"/zh/sensor/cm8jl65_ir_distance_sensor.html"}},[_._v("Lanbao PSK-CM8JL65-CC5")]),_._v("红外距离传感器对PX4的防撞功能来说“开箱即用”，最少的额外配置就可以使用。")],1),_._v(" "),v("ul",[v("li",[_._v("首先，"),v("RouterLink",{attrs:{to:"/zh/sensor/cm8jl65_ir_distance_sensor.html"}},[_._v("连接和配置传感器")]),_._v(", 使能防撞功能（如上所述，使用"),v("a",{attrs:{href:"#CP_DIST"}},[_._v("CP_DIST")]),_._v("参数）。")],1),_._v(" "),v("li",[_._v("使用参数"),v("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SENS_CM8JL65_R_0"}},[_._v("SENS_CM8JL65_R_0")]),_._v(" 设置传感器方向。")],1)]),_._v(" "),v("p",[_._v("其他传感器的使能需要修改驱动代码来设置传感器方向和视觉范围。")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("在特定端口上连接并配置距离传感器（请参阅特殊传感器文档</ 0>），并使用 CP_DIST </ 1>使能防撞功能。")])]),v("p"),_._v(" "),v("ul",[v("li",[_._v("修改驱动程序以设置方向。 这个可以通过类似于"),v("code",[_._v("SENS_CM8JL65_R_0")]),_._v("参数的方式实现（也可以在关于传感器的"),v("em",[_._v("module.yaml")]),_._v("这个文件中写死方向，类似于这样: "),v("code",[_._v("sf0x start -d ${SERIAL_DEV} -R 25")]),_._v(" - 25是"),v("code",[_._v("ROTATION_DOWNWARD_FACING")]),_._v("）。")]),_._v(" "),v("li",[_._v("在距离传感器UORB主题 ("),v("code",[_._v("distance_sensor_s.h_fov")]),_._v(")中设置"),v("em",[_._v("视觉范围")]),_._v("的地方修改驱动代码。")])])]),_._v(" "),v("blockquote",[v("p",[v("strong",[_._v("提示")]),_._v(" 您可以从 "),v("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/12179",target:"_blank",rel:"noopener noreferrer"}},[_._v("功能PR"),v("OutboundLink")],1),_._v(" 中看到所需的修改。 请回馈你的更改！")])]),_._v(" "),v("p",[v("span",{attrs:{id:"companion"}})]),_._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",[v("code",[_._v("## 机载计算机设置\n\n如果使用机载计算机或者外部传感器，需要提供[OBSTACLE_DISTANCE](https://mavlink.io/en/messages/common.html#OBSTACLE_DISTANCE)消息流，该消息流反映检测到障碍物的时间和位置。\n\n消息发送的最低频率*必须*由飞机速度决定 - 频率越高留给载具识别障碍物的反应时间越长。\n\n> **信息**系统在初始测试时，机身以4m/s的速度移动，并且以10Hz(视觉系统支持的最大速率)的频率发送`OBSTACLE_DISTANCE`消息。 在更高的速度或更低的距离信息更新频率下，该系统应该也能达到不错的效果。\n\n配套的测试软件是[PX4/avoidance](https://github.com/PX4/avoidance#obstacle-detection-and-avoidance)仓库中的*local_planner*。 关于硬件和软件安装调试的更多信息请查看链接：[PX4/avoidance > Run on Hardware](https://github.com/PX4/avoidance#run-on-hardware). \x3c!-- hardware platform used for testing not readily available, so have removed --\x3e\n\n软硬件的配置应遵照 [PX4/avoidance](https://github.com/PX4/avoidance#obstacle-detection-and-avoidance) 代码仓库的说明。 要发出 `OBSTACLE_DISTANCE`消息，必须使用*rqt_reconfigure*工具，并将参数`send_obstacles_fcu`设置为true。\n\n## Gazebo设置\n\n*防撞*功能支持Gazebo仿真测试。 设置方法请遵照[PX4/avoidance](https://github.com/PX4/avoidance#obstacle-detection-and-avoidance)的说明。\n\n\x3c!-- PR companion collision prevention (initial): https://github.com/PX4/PX4-Autopilot/pull/10785 --\x3e\n\n\x3c!-- PR for FC sensor collision prevention: https://github.com/PX4/PX4-Autopilot/pull/12179 --\x3e")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);