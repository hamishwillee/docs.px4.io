(window.webpackJsonp=window.webpackJsonp||[]).push([[858],{3333:function(t,e,a){"use strict";a.r(e);var r=a(19),_=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"防撞功能"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#防撞功能"}},[t._v("#")]),t._v(" 防撞功能")]),t._v(" "),r("p",[r("em",[t._v("Collision Prevention")]),t._v(" may be used to automatically slow and stop a vehicle before it can crash into an obstacle.")]),t._v(" "),r("p",[t._v("It can be enabled for multicopter vehicles in "),r("RouterLink",{attrs:{to:"/zh/flight_modes_mc/position.html"}},[t._v("Position mode")]),t._v(", and can use sensor data from an offboard companion computer, offboard rangefinders over MAVLink, a rangefinder attached to the flight controller, or any combination of the above.")],1),t._v(" "),r("p",[t._v("如果传感器的测量范围不够大，防撞功能可能会限制无人机的最大飞行速度。 它也会阻止在没有传感器数据的方向上运动（例如：如果后方没有传感器数据，将无法向后方飞行 ）。")]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),r("p",[t._v("如果高速飞行至关重要，请在不需要时考虑关闭防撞功能。")])]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),r("p",[t._v("确保您想要飞行的所有方向上都有传感器或传感器数据(当使能防撞功能时)。")])]),t._v(" "),r("h2",{attrs:{id:"综述"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#综述"}},[t._v("#")]),t._v(" 综述")]),t._v(" "),r("p",[r("em",[t._v("Collision Prevention")]),t._v(" is enabled on PX4 by setting the parameter for minimum allowed approach distance ("),r("a",{attrs:{href:"#CP_DIST"}},[t._v("CP_DIST")]),t._v(").")]),t._v(" "),r("p",[t._v("该功能需要外部系统提供的障碍物信息（发送的 MAVLink "),r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#OBSTACLE_DISTANCE",target:"_blank",rel:"noopener noreferrer"}},[t._v("OBSTACLE_DISTANCE"),r("OutboundLink")],1),t._v(" 消息）和或一个连接到飞控的"),r("RouterLink",{attrs:{to:"/zh/sensor/rangefinders.html"}},[t._v("距离传感器")]),t._v("。")],1),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),r("p",[t._v("Multiple sensors can be used to get information about, and prevent collisions with, objects "),r("em",[t._v("around")]),t._v(" the vehicle. If multiple sources supply data for the "),r("em",[t._v("same")]),t._v(" orientation, the system uses the data that reports the smallest distance to an object.")])]),t._v(" "),r("p",[t._v("为了在靠近障碍物时减速，无人机限制了最大速度，并且在达到最小允许间距时停止移动。 为了远离（或与之平行的）障碍物，用户必须使无人机/无人车朝向不靠近障碍物的设定点移动。 如果存在一个”更好”的设定点，这个设定点在请求设定点的任何一侧，并且在固定的间隙内，算法将对设定点方向做最小的调整。")]),t._v(" "),r("p",[t._v("Users are notified through "),r("em",[t._v("QGroundControl")]),t._v(" while "),r("em",[t._v("Collision Prevention")]),t._v(" is actively controlling velocity setpoints.")]),t._v(" "),r("p",[t._v("PX4 软件配置在下一章节中。 如果您准备使用距离传感器连接到飞控上来防撞，可能需要按照"),r("a",{attrs:{href:"#rangefinder"}},[t._v("PX4 距离传感器")]),t._v("中的说明描述来安装配置。 如果使用机载计算机提供障碍物信息，请参阅"),r("a",{attrs:{href:"#companion"}},[t._v("机载计算机设置")]),t._v("。")]),t._v(" "),r("h2",{attrs:{id:"px4-软件-设置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#px4-软件-设置"}},[t._v("#")]),t._v(" PX4 (软件) 设置")]),t._v(" "),r("p",[t._v("Configure collision prevention by "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameters.html"}},[t._v("setting the following parameters")]),t._v(" in "),r("em",[t._v("QGroundControl")]),t._v(":")],1),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("参数")]),t._v(" "),r("th",[t._v("描述")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("a",{attrs:{id:"CP_DIST"}}),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#CP_DIST"}},[t._v("CP_DIST")])],1),t._v(" "),r("td",[t._v("设置最小允许距离（无人机/无人车可以接近障碍物的最近距离）。 Set negative to disable "),r("em",[t._v("collision prevention")]),t._v(". "),r("br"),t._v(">"),r("strong",[t._v("警告")]),t._v(" 此值是相对传感器的距离，而不是相对机身或者螺旋桨外部的距离。 确保一个安全距离。")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{id:"CP_DELAY"}}),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#CP_DELAY"}},[t._v("CP_DELAY")])],1),t._v(" "),r("td",[t._v("设置传感器和速度设定值跟踪延迟。 查看下面的 "),r("a",{attrs:{href:"#delay_tuning"}},[t._v("延迟调整")]),t._v("。")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{id:"CP_GUIDE_ANG"}}),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#CP_GUIDE_ANG"}},[t._v("CP_GUIDE_ANG")])],1),t._v(" "),r("td",[t._v("如果在该方向上发现的障碍物较少，则设置无人机/无人车可能偏离的角度（在指令方向的两侧）。 请参阅下面的"),r("a",{attrs:{href:"#angle_change_tuning"}},[t._v("制导调整")]),t._v("。")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{id:"CP_GO_NO_DATA"}}),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#CP_GO_NO_DATA"}},[t._v("CP_GO_NO_DATA")])],1),t._v(" "),r("td",[t._v("设置为 1 可以使无人机/无人车在没有传感器覆盖的方向移动（默认值是0/"),r("code",[t._v("False")]),t._v("）。")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{id:"MPC_POS_MODE"}}),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_POS_MODE"}},[t._v("MPC_POS_MODE")])],1),t._v(" "),r("td",[t._v("设置为 0 或 3 以启用位置模式下的防撞(默认是 4)。")])])])]),t._v(" "),r("p",[r("a",{attrs:{id:"algorithm"}})]),t._v(" "),r("h2",{attrs:{id:"算法描述"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#算法描述"}},[t._v("#")]),t._v(" 算法描述")]),t._v(" "),r("p",[t._v("所有传感器的数据融合到机身周围的 36 个扇区中，每个扇区包含传感器数据和上次观测时间信息，或者指示该扇区没有可用数据。 当控制无人机向特定的方向移动时，就会检查该方向半球内的所有扇区，以查看此次移动是否会使机身靠近任何障碍物。 如果是这样，无人机的速度就会受到限制。")]),t._v(" "),r("p",[t._v("该速度限制同时考虑了内速度环和最佳加速度控制器，内速度环由 "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_XY_P"}},[t._v("MPC_XY_P")]),t._v(" 参数来调整，最佳加速度控制器由 <0>MPC_JERK_MAX</0> 和 <0>MPC_ACC_HOR</0> 两个参数来调整。 限制速度，以便无人机及时停止以保持在 "),r("a",{attrs:{href:"#CP_DIST"}},[t._v("CP_DIST")]),t._v(" 这个参数指定的距离。 还考虑到每个扇区的传感器范围，通过相同的机制限制了速度。")],1),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),r("p",[t._v("如果在特定的方向上没有传感器数据，则该方向的速度会被限制为 0（防止机身撞到看不见的物体）。 如果想要在没有传感器覆盖范围的方向自由移动，这可以将 "),r("a",{attrs:{href:"#CP_GO_NO_DATA"}},[t._v("CP_GO_NO_DATA")]),t._v(" 设置为 1 来使能。")])]),t._v(" "),r("p",[t._v("通过 "),r("a",{attrs:{href:"#CP_DELAY"}},[t._v(" CP_DELAY ")]),t._v(" 参数保守地估计机身跟踪速度设定点和从外部来源接收传感器数据中的延迟。 应该将 "),r("a",{attrs:{href:"#delay_tuning"}},[t._v("调整到")]),t._v(" 特定的机型。")]),t._v(" "),r("p",[t._v("根据边余量的大小，邻近的扇区比命令扇区“更好”，则可以按 "),r("a",{attrs:{href:"#CP_GUIDE_ANG"}},[t._v("CP_GUIDE_ANG")]),t._v(" 指定的角度修改请求输入的方向。 这有助于微调用户输入，以“引导”机身绕过障碍物，而不是卡在障碍物上。")]),t._v(" "),r("p",[r("a",{attrs:{id:"data_loss"}})]),t._v(" "),r("h3",{attrs:{id:"航程数据丢失"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#航程数据丢失"}},[t._v("#")]),t._v(" 航程数据丢失")]),t._v(" "),r("p",[t._v("If the autopilot does not receive range data from any sensor for longer than 0.5s, it will output a warning "),r("em",[t._v("No range data received, no movement allowed")]),t._v(". 这会导致强制将 xy 的速度设置为 0。 After 5 seconds of not receiving any data, the vehicle will switch into "),r("RouterLink",{attrs:{to:"/zh/flight_modes_mc/hold.html"}},[t._v("HOLD mode")]),t._v(". If you want the vehicle to be able to move again, you will need to disable Collision Prevention by either setting the parameter "),r("a",{attrs:{href:"#CP_DIST"}},[t._v("CP_DIST")]),t._v(" to a negative value, or switching to a mode other than "),r("RouterLink",{attrs:{to:"/zh/flight_modes_mc/position.html"}},[t._v("Position mode")]),t._v(" (e.g. to "),r("em",[t._v("Altitude mode")]),t._v(" or "),r("em",[t._v("Stabilized mode")]),t._v(").")],1),t._v(" "),r("p",[t._v("如果连接了多个传感器，但是其中有一个传感器失去连接，仍然能够在有传感器数据上报的视野（FOV）范围内飞行。 故障传感器的数据会失效，并且该传感器覆盖的区域会被视为未覆盖区域，意味着无法移动到该区域。")]),t._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),r("p",[t._v("使能参数 "),r("a",{attrs:{href:"#CP_GO_NO_DATA"}},[t._v("CP_GO_NO_DATA=1")]),t._v(" 时要小心，这会使无人机飞出传感器覆盖的区域。 如果多个传感器中有一个失去连接，故障传感器所覆盖的区域将被视为未覆盖，可以在该区域移动不受限制。")])]),t._v(" "),r("p",[r("a",{attrs:{id:"delay_tuning"}})]),t._v(" "),r("h3",{attrs:{id:"cp-delay-延迟调整"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cp-delay-延迟调整"}},[t._v("#")]),t._v(" CP_DELAY 延迟调整")]),t._v(" "),r("p",[t._v("There are two main sources of delay which should be accounted for: "),r("em",[t._v("sensor delay")]),t._v(", and vehicle "),r("em",[t._v("velocity setpoint tracking delay")]),t._v(". 这两个延迟来源都可以通过 "),r("a",{attrs:{href:"#CP_DELAY"}},[t._v("CP_DELAY")]),t._v(" 这个参数来调整。")]),t._v(" "),r("p",[t._v("The "),r("em",[t._v("sensor delay")]),t._v(" for distance sensors connected directly to the flight controller can be assumed to be 0. 对于外部视觉系统，传感器延迟可能高达 0.2秒。")]),t._v(" "),r("p",[t._v("Vehicle "),r("em",[t._v("velocity setpoint tracking delay")]),t._v(" can be measured by flying at full speed in "),r("RouterLink",{attrs:{to:"/zh/flight_modes_mc/position.html"}},[t._v("Position mode")]),t._v(", then commanding a stop. 然后可以从日志中测量实际速度和速度设置值之间的延迟。 跟踪延迟通常在 0.1 至 0.5秒之间，取决于机身尺寸和调试情况。")],1),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),r("p",[t._v("如果车速在接近障碍物时发生振荡（即减速，加速，减速），则延迟设置太高。")])]),t._v(" "),r("p",[r("a",{attrs:{id:"angle_change_tuning"}})]),t._v(" "),r("h3",{attrs:{id:"cp-guide-ang-制导调试"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cp-guide-ang-制导调试"}},[t._v("#")]),t._v(" CP_GUIDE_ANG 制导调试")]),t._v(" "),r("p",[t._v("取决于机身，环境类型和飞行员技能，可能需要不同数量的制导。 将 "),r("a",{attrs:{href:"#CP_GUIDE_ANG"}},[t._v("CP_GUIDE_ANG")]),t._v(" 参数设置为 0 将禁用制导，从而使得无人机只能在正确的方向上移动。 增大此参数将使无人机选择最佳方向来避开障碍物，从而更容易飞过狭窄的间隙，并与物体周围保持最小间距。")]),t._v(" "),r("p",[t._v("如果该参数设置太小，机身在靠近障碍物时可能会感觉“卡住”， 因为只允许以最小距离远离障碍物移动。 如果该参数设置太大，机身可能会感觉它朝着飞手未指示的方向“滑动”远离障碍物。 从测试来看，尽管不同的车辆可能有不同的要求，但是 30度是一个很好的平衡点。")]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),r("p",[t._v("制导功能绝不会把无人机/无人车引导到没有传感器数据的方向。\n如果只有一个距离传感器指向前方时无人机感到“卡住”，这可能是因为由于缺乏信息，制导无法安全地调整方向。")])]),t._v(" "),r("p",[r("a",{attrs:{id:"rangefinder"}})]),t._v(" "),r("h2",{attrs:{id:"px4-距离传感器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#px4-距离传感器"}},[t._v("#")]),t._v(" PX4 距离传感器")]),t._v(" "),r("h3",{attrs:{id:"lanbao-psk-cm8jl65-cc5"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#lanbao-psk-cm8jl65-cc5"}},[t._v("#")]),t._v(" Lanbao PSK-CM8JL65-CC5")]),t._v(" "),r("p",[t._v("使用 "),r("RouterLink",{attrs:{to:"/zh/sensor/cm8jl65_ir_distance_sensor.html"}},[t._v("Lanbao PSK-CM8JL65-CC5")]),t._v(" 红外距离传感器对PX4的防撞功能来说“开箱即用”，最少的额外配置就可以使用。")],1),t._v(" "),r("ul",[r("li",[t._v("首先，"),r("RouterLink",{attrs:{to:"/zh/sensor/cm8jl65_ir_distance_sensor.html"}},[t._v("连接和配置传感器")]),t._v(",  使能防撞功能（如上所述，使用 "),r("a",{attrs:{href:"#CP_DIST"}},[t._v("CP_DIST")]),t._v(" 参数）。")],1),t._v(" "),r("li",[t._v("使用参数 "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SENS_CM8JL65_R_0"}},[t._v("SENS_CM8JL65_R_0")]),t._v(" 设置传感器方向。")],1)]),t._v(" "),r("h3",{attrs:{id:"lightware-lidar-sf45-rotating-lidar"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#lightware-lidar-sf45-rotating-lidar"}},[t._v("#")]),t._v(" LightWare LiDAR SF45 Rotating Lidar")]),t._v(" "),r("p",[t._v("PX4 v1.14 (and later) supports the "),r("a",{attrs:{href:"https://www.lightwarelidar.com/shop/sf45-b-50-m/",target:"_blank",rel:"noopener noreferrer"}},[t._v("LightWare LiDAR SF45"),r("OutboundLink")],1),t._v(" rotating lidar which provides 320 degree sensing.")]),t._v(" "),r("p",[t._v("The SF45 must be connected via a UART/serial port and configured as described below (In addition to the "),r("a",{attrs:{href:"#px4-software-setup"}},[t._v("collision prevention setup")]),t._v(").")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://www.lightwarelidar.com/resources-software",target:"_blank",rel:"noopener noreferrer"}},[t._v("LightWare Studio"),r("OutboundLink")],1),t._v(" configuration:")]),t._v(" "),r("ul",[r("li",[t._v("In the LightWare Studio app enable scanning, set the scan angle, and change the baud rate to "),r("code",[t._v("921600")]),t._v(".")])]),t._v(" "),r("p",[t._v("PX4 Configuration:")]),t._v(" "),r("ul",[r("li",[t._v("Add the "),r("RouterLink",{attrs:{to:"/zh/modules/modules_driver_distance_sensor.html#lightware-sf45-serial"}},[t._v("lightware_sf45_serial")]),t._v(" driver in "),r("RouterLink",{attrs:{to:"/zh/hardware/porting_guide_config.html#px4-menuconfig-setup"}},[t._v("menuconfig")]),t._v(":\n"),r("ul",[r("li",[t._v("Under "),r("strong",[t._v("drivers > Distance sensors")]),t._v(" select "),r("code",[t._v("lightware_sf45_serial")]),t._v(".")]),t._v(" "),r("li",[t._v("Recompile and upload to the flight controller.")])])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameters.html"}},[t._v("Set the following parameters")]),t._v(" via QGC:\n"),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SENS_EN_SF45_CFG"}},[t._v("SENS_EN_SF45_CFG")]),t._v(": Set to the serial port you have the sensor connected to. Make sure GPS or Telemetry are not enabled on this port.")],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SF45_ORIENT_CFG"}},[t._v("SF45_ORIENT_CFG")]),t._v(": Set the orientation of the sensor (facing up or down)")],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SF45_UPDATE_CFG"}},[t._v("SF45_UPDATE_CFG")]),t._v(": Set the update rate")],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SF45_YAW_CFG"}},[t._v("SF45_YAW_CFG")]),t._v(": Set the yaw orientation")],1)])],1)]),t._v(" "),r("p",[t._v("In QGroundControl you should see an "),r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#OBSTACLE_DISTANCE",target:"_blank",rel:"noopener noreferrer"}},[t._v("OBSTACLE_DISTANCE"),r("OutboundLink")],1),t._v(" message in the "),r("RouterLink",{attrs:{to:"/zh/debug/mavlink_shell.html#qgroundcontrol-mavlink-console"}},[t._v("MAVLink console")]),t._v(" if collision prevention is configured correctly and active.")],1),t._v(" "),r("p",[t._v("The obstacle overlay in QGC will look like this:")]),t._v(" "),r("p",[r("img",{attrs:{src:a(637),alt:"sf45"}})]),t._v(" "),r("h3",{attrs:{id:"rangefinder-support"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rangefinder-support"}},[t._v("#")]),t._v(" Rangefinder Support")]),t._v(" "),r("p",[t._v("其他传感器的使能需要修改驱动代码来设置传感器方向和视觉范围。")]),t._v(" "),r("ul",[r("li",[t._v("在特定端口上连接并配置距离传感器（请参阅"),r("RouterLink",{attrs:{to:"/zh/sensor/rangefinders.html"}},[t._v("特殊传感器文档")]),t._v("），并使用"),r("a",{attrs:{href:"#CP_DIST"}},[t._v(" CP_DIST ")]),t._v("使能防撞功能。")],1),t._v(" "),r("li",[t._v("修改驱动程序以设置方向。 This should be done by mimicking the "),r("code",[t._v("SENS_CM8JL65_R_0")]),t._v(" parameter (though you might also hard-code the orientation in the sensor "),r("em",[t._v("module.yaml")]),t._v(" file to something like "),r("code",[t._v("sf0x start -d ${SERIAL_DEV} -R 25")]),t._v(" - where 25 is equivalent to "),r("code",[t._v("ROTATION_DOWNWARD_FACING")]),t._v(").")]),t._v(" "),r("li",[t._v("Modify the driver to set the "),r("em",[t._v("field of view")]),t._v(" in the distance sensor UORB topic ("),r("code",[t._v("distance_sensor_s.h_fov")]),t._v(").")])]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),r("p",[t._v("您可以从 "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/12179",target:"_blank",rel:"noopener noreferrer"}},[t._v("功能 PR"),r("OutboundLink")],1),t._v(" 中看到所需的修改。 请回馈你的更改！")])]),t._v(" "),r("p",[r("a",{attrs:{id:"companion"}})]),t._v(" "),r("h2",{attrs:{id:"机载计算机设置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#机载计算机设置"}},[t._v("#")]),t._v(" 机载计算机设置")]),t._v(" "),r("p",[t._v("如果使用机载计算机或者外部传感器，需要提供 "),r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#OBSTACLE_DISTANCE",target:"_blank",rel:"noopener noreferrer"}},[t._v("OBSTACLE_DISTANCE"),r("OutboundLink")],1),t._v(" 消息流，该消息流反映检测到障碍物的时间和位置。")]),t._v(" "),r("p",[t._v("The minimum rate at which messages "),r("em",[t._v("must")]),t._v(" be sent depends on vehicle speed - at higher rates the vehicle will have a longer time to respond to detected obstacles.")]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),r("p",[t._v("系统在初始测试时，无人机以 4m/s的速度移动，并且以 10Hz（视觉系统支持的最大速率）的频率发送"),r("code",[t._v("OBSTACLE_DISTANCE")]),t._v(" 消息。 在更高的速度或更低的距离信息更新频率下，该系统应该也能达到不错的效果。")])]),t._v(" "),r("p",[t._v("The tested companion software is the "),r("em",[t._v("local_planner")]),t._v(" from the "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Avoidance",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4/PX4-Avoidance"),r("OutboundLink")],1),t._v(" repo. 关于硬件和软件配置的更多信息请查看链接："),r("a",{attrs:{href:"https://github.com/PX4/PX4-Avoidance#run-on-hardware",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4/avoidance > Run on Hardware"),r("OutboundLink")],1),t._v(".")]),t._v(" "),r("p",[t._v("软硬件的配置应遵照 "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Avoidance",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4/avoidance"),r("OutboundLink")],1),t._v(" 代码仓库的说明。 In order to emit "),r("code",[t._v("OBSTACLE_DISTANCE")]),t._v(" messages you must use the "),r("em",[t._v("rqt_reconfigure")]),t._v(" tool and set the parameter "),r("code",[t._v("send_obstacles_fcu")]),t._v(" to true.")]),t._v(" "),r("h2",{attrs:{id:"gazebo设置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#gazebo设置"}},[t._v("#")]),t._v(" Gazebo设置")]),t._v(" "),r("p",[r("em",[t._v("Collision Prevention")]),t._v(" can also be tested using Gazebo. 设置方法请遵照"),r("a",{attrs:{href:"https://github.com/PX4/PX4-Avoidance",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4/avoidance"),r("OutboundLink")],1),t._v("的说明。")])])}),[],!1,null,null,null);e.default=_.exports},637:function(t,e,a){t.exports=a.p+"assets/img/sf45_obstacle_map.cb339bd2.png"}}]);