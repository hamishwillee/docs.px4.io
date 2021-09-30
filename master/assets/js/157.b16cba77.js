(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{1144:function(t,_,r){t.exports=r.p+"assets/img/qgc_main_screen.e562d4c1.jpg"},1145:function(t,_,r){t.exports=r.p+"assets/img/pixhawk4_main_aux_ports.ab72e7e9.jpg"},1146:function(t,_,r){t.exports=r.p+"assets/img/pixhawk4mini_pwm.3818131b.png"},1147:function(t,_,r){t.exports=r.p+"assets/img/frame_heading_top.e8e4ffe3.png"},2940:function(t,_,r){"use strict";r.r(_);var e=r(19),v=Object(e.a)({},(function(){var t=this,_=t.$createElement,e=t._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"基本概念"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[t._v("#")]),t._v(" 基本概念")]),t._v(" "),e("p",[t._v("本主题提供了无人机和使用 PX4 的基本介绍（主要面向新手用户，但对有经验的用户也是一个很好的介绍）。")]),t._v(" "),e("p",[t._v("如果你已经熟悉了基本概念，你可以转到 "),e("RouterLink",{attrs:{to:"/zh/assembly/"}},[t._v("基本组装")]),t._v(" 以了解如何连接特定的自驾仪硬件。 要加载固件并使用 "),e("em",[t._v("QGC 地面站")]),t._v(" 设置飞行器，请查看 "),e("RouterLink",{attrs:{to:"/zh/config/"}},[t._v("基本配置")]),t._v("。")],1),t._v(" "),e("h2",{attrs:{id:"无人机是什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#无人机是什么"}},[t._v("#")]),t._v(" 无人机是什么？")]),t._v(" "),e("p",[t._v("无人机是无人驾驶的“机器人”设备，可以远程或自动控制。")]),t._v(" "),e("p",[t._v("无人机可被用于 "),e("a",{attrs:{href:"https://px4.io/ecosystem/commercial-systems/",target:"_blank",rel:"noopener noreferrer"}},[t._v("消费级、工业级、政府、军工应用"),e("OutboundLink")],1),t._v("。 这包括（非详尽）：航空摄影/录像，载货，竞速，搜索和测绘等。")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),e("p",[t._v("不同类型的无人机可用于空中、地面、海上和水下。 这些（更正式地）被称为无人驾驶飞行器（UAV），无人驾驶飞行器系统（UAS），无人驾驶地面车辆（UGV），无人驾驶水面船只（USV），无人驾驶水下潜航器（UUV）。")])]),t._v(" "),e("p",[t._v("无人机的“大脑”被称为自动驾驶仪。 它由 "),e("em",[t._v("载具控制器")]),t._v("（“飞行控制器”）硬件和运行其上的 "),e("em",[t._v("飞行栈")]),t._v(" 软件组成。")]),t._v(" "),e("p",[e("a",{attrs:{id:"autopilot"}})]),t._v(" "),e("h2",{attrs:{id:"px4-自动驾驶仪"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#px4-自动驾驶仪"}},[t._v("#")]),t._v(" PX4 自动驾驶仪")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://px4.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4"),e("OutboundLink")],1),t._v(" is powerful open source autopilot "),e("em",[t._v("flight stack")]),t._v(".")]),t._v(" "),e("p",[t._v("PX4 的一些主要功能包括：")]),t._v(" "),e("ul",[e("li",[t._v("可控制"),e("RouterLink",{attrs:{to:"/zh/airframes/airframe_reference.html"}},[t._v("许多不同的设备机架/类型")]),t._v("，包括：飞机（多旋翼，固定翼和垂直起降），地面车辆和水下潜航器。")],1),t._v(" "),e("li",[t._v("适用于"),e("a",{attrs:{href:"#vehicle_controller"}},[t._v("设备控制器")]),t._v("，传感器和其他外围设备的硬件选择。")]),t._v(" "),e("li",[t._v("灵活而强大的"),e("a",{attrs:{href:"#flight_modes"}},[t._v("飞行模式")]),t._v("和"),e("a",{attrs:{href:"#safety"}},[t._v("安全功能")]),t._v("。")])]),t._v(" "),e("p",[t._v("PX4 是一个大型无人机平台的核心部分，它们都包括 "),e("a",{attrs:{href:"#qgc"}},[t._v("QGC 地面站")]),t._v("，"),e("a",{attrs:{href:"https://pixhawk.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk 硬件"),e("OutboundLink")],1),t._v("，还有"),e("a",{attrs:{href:"http://mavsdk.mavlink.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVSDK"),e("OutboundLink")],1),t._v(" 用于与机载计算机集成，相机还有其他使用 MAVLink 协议的硬件。 PX4 由 "),e("a",{attrs:{href:"https://www.dronecode.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Dronecode 项目"),e("OutboundLink")],1),t._v(" 支持。")]),t._v(" "),e("p",[e("a",{attrs:{id:"qgc"}})]),t._v(" "),e("h2",{attrs:{id:"qgroundcontrol"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#qgroundcontrol"}},[t._v("#")]),t._v(" QGroundControl")]),t._v(" "),e("p",[t._v("Dronecode 地面控制站称为 "),e("a",{attrs:{href:"http://qgroundcontrol.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGC 地面站"),e("OutboundLink")],1),t._v("。 您可以使用"),e("em",[t._v("QGroundControl")]),t._v(" 将PX4 加载（烧写）到"),e("RouterLink",{attrs:{to:"/zh/getting_started/flight_controller_selection.html"}},[t._v("飞行器控制硬件上")]),t._v("，您可以设置飞行器，更改不同参数，获取实时飞行信息以及创建和执行完全自主的任务。")],1),t._v(" "),e("p",[e("em",[t._v("QGroundControl")]),t._v(" 可以在 Windows，Android，MacOS 或 Linux 上运行。 从 "),e("a",{attrs:{href:"http://qgroundcontrol.com/downloads/",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),e("OutboundLink")],1),t._v(" 下载并安装。")]),t._v(" "),e("p",[e("img",{attrs:{src:r(1144),alt:"QGC Main Screen"}})]),t._v(" "),e("p",[e("span",{attrs:{id:"vehicle_controller"}})]),t._v(" "),e("h2",{attrs:{id:"机体-飞行控制板"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#机体-飞行控制板"}},[t._v("#")]),t._v(" 机体/飞行控制板")]),t._v(" "),e("p",[t._v("PX4最初设计为在 "),e("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk_series.html"}},[t._v("Pixhawk 系列")]),t._v(" 飞控上运行，但现在可以在 Linux 计算机和其他硬件上运行。 选择飞行控制板时，您应当考虑飞行器的物理尺寸限制，想要执行的活动，还有必不可少的成本。")],1),t._v(" "),e("p",[t._v("更多信息，请参阅："),e("RouterLink",{attrs:{to:"/zh/getting_started/flight_controller_selection.html"}},[t._v("飞行控制器选择")]),t._v("。")],1),t._v(" "),e("h2",{attrs:{id:"传感器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#传感器"}},[t._v("#")]),t._v(" 传感器")]),t._v(" "),e("p",[t._v("PX4 使用传感器来确定飞行器状态（稳定和启用自动控制所需）。 系统*最低要求 *陀螺仪，加速度计，磁力计（罗盘）和气压计。 需要 GPS 或其他定位系统来启用所有自动"),e("RouterLink",{attrs:{to:"/zh/getting_started/flight_modes.html#categories"}},[t._v("模式")]),t._v("和一些辅助模式。 固定翼和 VTOL 飞行器还应包括空速传感器（强烈推荐）。")],1),t._v(" "),e("p",[t._v("有关详细信息，请参阅︰")]),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/zh/getting_started/sensor_selection.html"}},[t._v("传感器")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/zh/peripherals/"}},[t._v("外设")])],1)]),t._v(" "),e("p",[e("a",{attrs:{id:"outputs"}})]),t._v(" "),e("h2",{attrs:{id:"输出-电机-舵机-执行器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#输出-电机-舵机-执行器"}},[t._v("#")]),t._v(" 输出:电机，舵机，执行器")]),t._v(" "),e("p",[t._v("PX4使用"),e("em",[t._v("输出")]),t._v("来控制:电机速度(例如通过"),e("a",{attrs:{href:"#esc_and_motors"}},[t._v("ESC")]),t._v(")，飞行平面如副翼和襟翼，相机触发器，降落伞，抓手，和许多其他类型的有效载荷。")]),t._v(" "),e("p",[t._v("例如，下面的图像显示 "),e("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk4.html"}},[t._v("Pixhawk 4")]),t._v(" 和 "),e("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk4_mini.html"}},[t._v("Pixhawk 4 mini")]),t._v(" 的 PWM 输出端口。")],1),t._v(" "),e("p",[e("img",{attrs:{src:r(1145),alt:"Pixhawk 4 output ports"}}),t._v(" "),e("img",{attrs:{src:r(1146),alt:"Pixhawk4 mini MAIN ports"}})]),t._v(" "),e("p",[t._v("输出分为 "),e("code",[t._v("MAIN")]),t._v(" 和 "),e("code",[t._v("AUX")]),t._v("，并单独编号("),e("code",[t._v("MAINn")]),t._v(" 和 "),e("code",[t._v("AUXn")]),t._v(", "),e("code",[t._v("n")]),t._v(" 通常是从1到6或8)。")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),e("p",[t._v("每个输出的特定目的是在每个机身的基础上硬编码的。 所有机架的输出映射都在 "),e("RouterLink",{attrs:{to:"/zh/airframes/airframe_reference.html"}},[t._v("机架参考")]),t._v(" 中。")],1)]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),e("p",[t._v("飞行控制器可能只有"),e("code",[t._v("MAIN")]),t._v(" 输出， (比如 "),e("em",[t._v("Pixhawk 4 Mini")]),t._v(")，也可能只有6个"),e("code",[t._v("MAIN")]),t._v(" 或 "),e("code",[t._v("AUX")]),t._v("输出。 确保您选择的控制器有足够的端口/输出接口适应您的"),e("RouterLink",{attrs:{to:"/zh/airframes/airframe_reference.html"}},[t._v("机身")]),t._v("。")],1)]),t._v(" "),e("p",[t._v("通常情况下， "),e("code",[t._v("MAIN")]),t._v(" 端口用于核心飞行控制。 "),e("code",[t._v("AUX")]),t._v(" 用于非关键执行器/载荷（但是，比如VTOL机型，如果 "),e("code",[t._v("MAIN")]),t._v("没有足够的接口， "),e("code",[t._v("AUX")]),t._v("也可能用来做飞行控制）。 例如, "),e("RouterLink",{attrs:{to:"/zh/airframes/airframe_reference.html#copter_quadrotor_x_generic_quadcopter"}},[t._v("通用四旋翼")]),t._v(" 用 "),e("code",[t._v("MAIN")]),t._v(" 输出的 1-4 来控制电机，其余的 "),e("code",[t._v("MAIN")]),t._v(" 和"),e("code",[t._v("AUX")]),t._v(" 输出可以用来做 RC 透传。")],1),t._v(" "),e("p",[e("a",{attrs:{href:"#vehicle_controller"}},[t._v("飞行控制器")]),t._v(" 上的实际输出端口/总线取决于硬件和 PX4 配置。 "),e("em",[t._v("通常")]),t._v(" 端口像如上所示的被映射为PWM输出，丝印一般为 "),e("code",[t._v("MAIN OUT")]),t._v(" and "),e("code",[t._v("AUX OUT")]),t._v("。")]),t._v(" "),e("p",[t._v("它们也可能被标记为 "),e("code",[t._v("FMU PWM OUT")]),t._v(" 或 "),e("code",[t._v("IO PWM Out")]),t._v(' (或类似)。 Pixhawk 控制器又一个 "主" FMU 和'),e("em",[t._v("可能存在的")]),t._v(" 独立的 IO 板。 如果有IO 板, "),e("code",[t._v("AUX")]),t._v(" 端口直接连接到 FMU 和 "),e("code",[t._v("MIAN")]),t._v(" 端口连接到IO板。 否则， "),e("code",[t._v("MAIN")]),t._v(" 端口已连接到FMU，没有 "),e("code",[t._v("AUX")]),t._v(" 端口。 FMU输出端口可以使用 "),e("RouterLink",{attrs:{to:"/zh/peripherals/dshot.html"}},[t._v("D-shot")]),t._v(" 或 "),e("em",[t._v("One-shot")]),t._v(" 协议 (当然也有 PWM), 它们的延迟低很多。 这对于需要更好性能的穿越机和其他机体来说是有用的。")],1),t._v(" "),e("p",[t._v("输出端口也可以映射到 UAVCAN节点 (例如，UAVCAN "),e("RouterLink",{attrs:{to:"/zh/peripherals/uavcan_escs.html"}},[t._v("电机控制器")]),t._v(")。 在这种情况下使用(相同的)输出到节点的机架映射。")],1),t._v(" "),e("p",[e("strong",[t._v("备注：")])]),t._v(" "),e("ul",[e("li",[e("code",[t._v("MAIN")]),t._v(" 和 "),e("code",[t._v("AUX")]),t._v(" 中仅有6-8个输出，因为大多数飞行控制器只有这么多的 PWM/Dshot/Oneshot 输出。 理论上来说，如果总线支持，可以有更多的输出（比如UAVCAN就不限于这几个节点）。")])]),t._v(" "),e("p",[e("a",{attrs:{id:"esc_and_motors"}})]),t._v(" "),e("h2",{attrs:{id:"电调-电机"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#电调-电机"}},[t._v("#")]),t._v(" 电调 & 电机")]),t._v(" "),e("p",[t._v("许多 PX4 无人机使用无刷电机，其由飞行控制器通过电子调速器（ESC）驱动（ESC将来自飞行控制器的信号转换为合适的功率水平，传递给电机）。")]),t._v(" "),e("p",[t._v("有关 PX4 支持的电调和电机的信息，请参阅：")]),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/zh/peripherals/esc_motors.html"}},[t._v("电调 & 电机")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/zh/advanced_config/esc_calibration.html"}},[t._v("电调（ESC）校准")])],1),t._v(" "),e("li",[e("a",{attrs:{href:"https://oscarliang.com/esc-firmware-protocols/",target:"_blank",rel:"noopener noreferrer"}},[t._v("电调固件和协议概述"),e("OutboundLink")],1),t._v("（oscarliang.com）")])]),t._v(" "),e("h2",{attrs:{id:"电池-电源"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#电池-电源"}},[t._v("#")]),t._v(" 电池/电源")]),t._v(" "),e("p",[t._v("PX4 无人机通常由锂聚合物（LiPo）电池供电。 电池通常使用*电源模块 "),e("em",[t._v("或")]),t._v("电源管理板 *连接到系统，它为飞行控制器和 ESC（用于电动机）提供单独的动力。")]),t._v(" "),e("p",[t._v("有关电池和电池配置的信息，请参见"),e("RouterLink",{attrs:{to:"/zh/config/battery.html"}},[t._v("电池配置")]),t._v("和"),e("RouterLink",{attrs:{to:"/zh/assembly/"}},[t._v("基本组件")]),t._v("（例如"),e("RouterLink",{attrs:{to:"/zh/assembly/quick_start_pixhawk4.html#power"}},[t._v(" Pixhawk 4 接线快速入门>电源")]),t._v("）。")],1),t._v(" "),e("p",[e("a",{attrs:{id:"rc_systems"}})]),t._v(" "),e("h2",{attrs:{id:"无线电控制-遥控"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#无线电控制-遥控"}},[t._v("#")]),t._v(" 无线电控制（遥控）")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/zh/getting_started/rc_transmitter_receiver.html"}},[t._v("遥控（RC）")]),t._v("系统用于 "),e("em",[t._v("手动")]),t._v(" 控制机体。 它由一个遥控装置组成，使用发射机来与飞行器上的接收机通信。 一些 RC 系统还可以接自动驾驶仪传回的收遥测信息。")],1),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("PX4 在自主飞行模式中不需要遥控系统。")])]),t._v(" "),e("p",[e("img",{attrs:{src:r(387),alt:"Taranis X9D Transmitter"}})]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/zh/getting_started/rc_transmitter_receiver.html"}},[t._v("遥控系统选择")]),t._v(" 说明如何选择遥控系统。 其他相关主题包括：")],1),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/zh/config/radio.html"}},[t._v("遥控设置")]),t._v(" - "),e("em",[t._v("QGC 地面站")]),t._v(" 中的遥控配置。")],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/zh/flying/basic_flying.html"}},[t._v("飞行 101")]),t._v(" - 学习如何使用遥控器飞行。")],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/zh/peripherals/frsky_telemetry.html"}},[t._v("FrSky 数传")]),t._v(" - 设置遥控发射机以从 PX4 接收数传/状态更新。")],1)]),t._v(" "),e("p",[e("a",{attrs:{id:"joystick"}})]),t._v(" "),e("h2",{attrs:{id:"地面站游戏手柄控制器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#地面站游戏手柄控制器"}},[t._v("#")]),t._v(" 地面站游戏手柄控制器")]),t._v(" "),e("p",[t._v("通过"),e("em",[t._v("QGroundControl")]),t._v("连接的"),e("RouterLink",{attrs:{to:"/zh/config/joystick.html"}},[t._v("游戏手柄")]),t._v("也可以用来手动控制PX4 (QGC将操纵杆的运动转换为通过遥测链路发送的MAVLink消息)。 这种方法被一些集成了地面站的地面端遥控器所使用的，如 "),e("em",[t._v("Auterion")]),t._v(" "),e("a",{attrs:{href:"https://auterion-gs.com/skynav/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Skynav"),e("OutboundLink")],1),t._v(" or "),e("em",[t._v("UAVComponents")]),t._v(" "),e("a",{attrs:{href:"https://www.uavcomp.com/command-control/micronav/",target:"_blank",rel:"noopener noreferrer"}},[t._v("MicroNav"),e("OutboundLink")],1),t._v("。 游戏手柄也经常被用于无人机的飞行仿真中。")],1),t._v(" "),e("p",[e("img",{attrs:{src:r(370),alt:"Photo of MicroNav, a ground controller with integrated joysticks"}})]),t._v(" "),e("p",[e("a",{attrs:{id:"safety_switch"}})]),t._v(" "),e("h2",{attrs:{id:"安全开关"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安全开关"}},[t._v("#")]),t._v(" 安全开关")]),t._v(" "),e("p",[t._v("机体通常必须有一个 "),e("em",[t._v("安全开关")]),t._v("，然后才能使用 "),e("a",{attrs:{href:"#arming"}},[t._v("解锁")]),t._v("（解锁后，电机会供电，螺旋桨开始旋转）。 通常，安全开关被整合到GPS设备中，但也可能是一个单独的物理组件。")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),e("p",[t._v("解锁后的机体是有潜在危险的。 安全开关是防止意外解锁发生的一个附加机制。")])]),t._v(" "),e("h2",{attrs:{id:"数传电台"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数传电台"}},[t._v("#")]),t._v(" 数传电台")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/zh/telemetry/"}},[t._v("数传电台")]),t._v(" 可以在诸如 "),e("em",[t._v("QGC 地面站")]),t._v(" 与运行 PX4 的机体之间提供无线 MAVLink 连接。 这使得飞机飞行中调试参数、实时检查遥测信息、更改任务等等成为了可能。")],1),t._v(" "),e("h2",{attrs:{id:"机载计算机"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#机载计算机"}},[t._v("#")]),t._v(" 机载计算机")]),t._v(" "),e("p",[t._v("PX4 可以通过串行接线或 WiFi 由独立的机载伴飞计算机进行控制。 机载计算机通常使用 MAVLink API（如 MAVSDK 或 MAVROS）进行通信。")]),t._v(" "),e("p",[t._v("有关主题包括:")]),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/zh/flight_modes/offboard.html"}},[t._v("Offboard 模式")]),t._v(" - 用于从地面站或机载计算机对 PX4 进行 Offboard 控制的飞行模式。")],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/zh/robotics/"}},[t._v("Robotics APIs")])],1)]),t._v(" "),e("p",[e("span",{attrs:{id:"sd_cards"}})]),t._v(" "),e("h2",{attrs:{id:"sd卡-可移除储存器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sd卡-可移除储存器"}},[t._v("#")]),t._v(" SD卡（可移除储存器）")]),t._v(" "),e("p",[t._v("PX4 使用 SD 储存卡存储 "),e("RouterLink",{attrs:{to:"/zh/getting_started/flight_reporting.html"}},[t._v("飞行日志")]),t._v("，而且还需要内存卡才能使用 UAVCAN 外围设备，运行 "),e("RouterLink",{attrs:{to:"/zh/flying/missions.html"}},[t._v("飞行任务")]),t._v("。")],1),t._v(" "),e("p",[t._v("默认情况下，如果没有 SD 卡，PX4 将在启动时播放 "),e("RouterLink",{attrs:{to:"/zh/getting_started/tunes.html#format-failed"}},[t._v("格式化失败（2-声短响）")]),t._v(" 两次（且上述需要储存卡的功能都不可用）。")],1),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),e("p",[t._v("Pixhawk 飞控板支持的最大 SD 卡大小为 32 GB 。 "),e("RouterLink",{attrs:{to:"/zh/dev_log/logging.html#sd-cards"}},[t._v("强烈推荐")]),t._v("使用"),e("em",[t._v("SanDisk Extreme U3 32GB")]),t._v(" 。")],1)]),t._v(" "),e("p",[t._v("SD 卡在某些情况下也是可选的。 不包含 SD 卡槽的飞行控制器可以：")]),t._v(" "),e("ul",[e("li",[t._v("使用参数 "),e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#CBRK_BUZZER"}},[t._v("CBRK_BUZZER")]),t._v(" 禁用通知蜂鸣器。")],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/zh/dev_log/logging.html#log-streaming"}},[t._v("推流日志")]),t._v(" 到另一个组件（机载计算机）。")],1),t._v(" "),e("li",[t._v("在 RAM/FLASH 中储存任务。")])]),t._v(" "),e("p",[e("a",{attrs:{id:"arming"}})]),t._v(" "),e("h2",{attrs:{id:"解锁和加锁"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解锁和加锁"}},[t._v("#")]),t._v(" 解锁和加锁")]),t._v(" "),e("p",[t._v("机体是有可活动的部件的，其中一些在通电后会有潜在的危险性（特别是电机和螺旋桨）！")]),t._v(" "),e("p",[t._v("为了减少事故概率：")]),t._v(" "),e("ul",[e("li",[t._v("当不在使用时， PX4 机体是 "),e("em",[t._v("加锁状态的")]),t._v("（未供电的），必须在起飞前进行 "),e("em",[t._v("解锁")]),t._v("。")]),t._v(" "),e("li",[t._v("A vehicle will automatically disarm if a pilot does not take off quickly enough, and after landing (the disarm time is configurable).")]),t._v(" "),e("li",[t._v("Some vehicles also have a "),e("a",{attrs:{href:"#safety_switch"}},[t._v("safety switch")]),t._v(" that must be disengaged before arming can succeed (often this switch is part of the GPS).")]),t._v(" "),e("li",[t._v('Arming is prevented if the vehicle is not in a "healthy" state.')]),t._v(" "),e("li",[t._v("Arming is prevented if a VTOL vehicle is in fixed-wing mode ("),e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#CBRK_VTOLARMING"}},[t._v("by default")]),t._v(").")],1)]),t._v(" "),e("p",[t._v("解锁默认情况下（美国手发射机）可以通过保持遥控油门+ YAW 摇杆到"),e("em",[t._v("右下角")]),t._v("一秒钟来解锁，要想加锁，则保持摇杆在左下角。 还可以使用遥控上的按钮来配置 PX4 解锁（也可以从地面站发送解锁命令）。")]),t._v(" "),e("p",[t._v("还有更细节的解锁和加锁的配置的详细解读可以在这里找到："),e("RouterLink",{attrs:{to:"/zh/advanced_config/prearm_arm_disarm.html"}},[t._v("预解锁，解锁，加锁配置")]),t._v("。")],1),t._v(" "),e("p",[e("a",{attrs:{id:"flight_modes"}})]),t._v(" "),e("h2",{attrs:{id:"飞行模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#飞行模式"}},[t._v("#")]),t._v(" 飞行模式")]),t._v(" "),e("p",[t._v("飞行模式为用户（飞手）提供不同类型/级别的飞行器自动化和自动驾驶辅助。 自主模式完全由自驾仪控制，无需飞手/遥控输入。 例如，它们可用于自动执行诸如起飞，返回 Home 点和着陆等常见任务。 其他自主模式执行预编程任务，跟随 GPS 信标，或接受来自机载计算机或地面站的命令。")]),t._v(" "),e("p",[e("em",[t._v("手动模式")]),t._v(" 由用户（通过遥控控制杆/手柄）在自驾仪的协助下实现控制。 不同的手动模式可以实现不同的飞行特性 - 例如，某些模式可以实现特技动作，而其他模式则无法翻转并且会抗风以保持位置/航向。")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),e("p",[t._v("并非所有的飞行模式都适用于所有飞行器，并且某些模式只能在满足特定条件时使用（例如，许多模式需要全局位置估计）。")])]),t._v(" "),e("p",[t._v("可用飞行模式的概述可在 "),e("RouterLink",{attrs:{to:"/zh/getting_started/flight_modes.html"}},[t._v("这里")]),t._v("找到。 "),e("RouterLink",{attrs:{to:"/zh/config/flight_mode.html"}},[t._v("飞行模式配置 ")]),t._v("中提供了有关如何设置遥控开关以打开不同飞行模式的说明。")],1),t._v(" "),e("p",[e("a",{attrs:{id:"safety"}})]),t._v(" "),e("h2",{attrs:{id:"安全设置-故障保护"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安全设置-故障保护"}},[t._v("#")]),t._v(" 安全设置（故障保护）")]),t._v(" "),e("p",[t._v("PX4 具有可配置的故障安全系统，可在出现问题时保护和挽回您的飞行器！ 这些允许您指定可以安全飞行的区域和条件，以及触发故障保护时将执行的操作（例如，着陆、保持位置或返回指定点）。")]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),e("p",[t._v("您只能为 "),e("em",[t._v("第一个")]),t._v(" 故障保护事件指定操作。 一旦发生故障保护，系统将执行特殊处理代码，以便后续故障保护触发器由单独的系统层级和飞行器特定代码管理。")])]),t._v(" "),e("p",[t._v("主要的故障保护事件如下：")]),t._v(" "),e("ul",[e("li",[t._v("低电量")]),t._v(" "),e("li",[t._v("遥控(RC) 信号丢失")]),t._v(" "),e("li",[t._v("位置信息丢失（全局位置估计质量太低）")]),t._v(" "),e("li",[t._v("机载计算机控制指令丢失（如与机载计算机失去连接）")]),t._v(" "),e("li",[t._v("数传信号丢失（如失去与 GCS 的遥测连接）")]),t._v(" "),e("li",[t._v("超出地理围栏 (限制飞行器在虚拟圆柱体内飞行)。")]),t._v(" "),e("li",[t._v("任务故障保护（防止先前的任务在新的起飞地点运行）。")]),t._v(" "),e("li",[t._v("交通避障（由来自如 ADS-B 转发器的数据触发）。")])]),t._v(" "),e("p",[t._v("有关详细信息，请参阅："),e("RouterLink",{attrs:{to:"/zh/config/safety.html"}},[t._v("安全")]),t._v("（基本配置）。")],1),t._v(" "),e("h2",{attrs:{id:"航向和运动方向"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#航向和运动方向"}},[t._v("#")]),t._v(" 航向和运动方向")]),t._v(" "),e("p",[t._v("所有车辆，船只和飞机都具有航向（机头朝向）或基于其前进运动的方向。")]),t._v(" "),e("p",[e("img",{attrs:{src:r(369),alt:"Frame Heading"}})]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),e("p",[t._v("对于 VTOL Tailsitter 机头朝向是与多旋翼配置相关的(比如无人机在起飞，悬停，降落时的姿态)。")])]),t._v(" "),e("p",[t._v("知道机体朝向，以使自驾仪与设备运动矢量对齐是重要的。 即使多旋翼从各个方向都对称，但其也有朝向！ 通常制造商使用彩色螺旋桨或带颜色的机臂来表示朝向。")]),t._v(" "),e("p",[e("img",{attrs:{src:r(1147),alt:"Frame Heading TOP"}})]),t._v(" "),e("p",[t._v("在我们的插图中，我们将使用红色的前螺旋桨来显示多旋翼的航向。")]),t._v(" "),e("p",[t._v("您可以在 "),e("RouterLink",{attrs:{to:"/zh/config/flight_controller_orientation.html"}},[t._v("飞行控制器方向")]),t._v(" 中深入了解朝向。")],1)])}),[],!1,null,null,null);_.default=v.exports},369:function(t,_,r){t.exports=r.p+"assets/img/frame_heading.f02fbdcf.png"},370:function(t,_,r){t.exports=r.p+"assets/img/micronav.8cbd07b4.jpg"},387:function(t,_,r){t.exports=r.p+"assets/img/frsky_taranis_x9d_transmitter.a26963aa.jpg"}}]);