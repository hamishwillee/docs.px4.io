(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{1310:function(t,e,o){t.exports=o.p+"assets/img/qgc_main_screen.e562d4c1.jpg"},1311:function(t,e,o){t.exports=o.p+"assets/img/pixhawk4_main_aux_ports.48bf5314.jpg"},1312:function(t,e,o){t.exports=o.p+"assets/img/pixhawk4mini_pwm.96ca7a15.png"},1313:function(t,e,o){t.exports=o.p+"assets/img/frame_heading_top.e729fa97.png"},3449:function(t,e,o){"use strict";o.r(e);var r=o(19),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"基本概念"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[t._v("#")]),t._v(" 基本概念")]),t._v(" "),r("p",[t._v("本主题提供了无人机和使用 PX4 的基本介绍（主要面向新手用户，但对有经验的用户也是一个很好的介绍）。")]),t._v(" "),r("p",[t._v("如果你已经熟悉了基本概念，你可以转到 "),r("RouterLink",{attrs:{to:"/zh/assembly/"}},[t._v("基本组装")]),t._v(" 以了解如何连接特定的自驾仪硬件。 To load firmware and set up the vehicle with "),r("em",[t._v("QGroundControl")]),t._v(", see "),r("RouterLink",{attrs:{to:"/zh/config/"}},[t._v("Basic Configuration")]),t._v(".")],1),t._v(" "),r("h2",{attrs:{id:"无人机是什么"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#无人机是什么"}},[t._v("#")]),t._v(" 无人机是什么？")]),t._v(" "),r("p",[t._v("无人机是无人驾驶的“机器人”设备，可以远程或自动控制。")]),t._v(" "),r("p",[t._v("无人机可被用于 "),r("a",{attrs:{href:"https://px4.io/ecosystem/commercial-systems/",target:"_blank",rel:"noopener noreferrer"}},[t._v("消费级、工业级、政府、军工应用"),r("OutboundLink")],1),t._v("。 这包括（非详尽）：航空摄影/录像，载货，竞速，搜索和测绘等。")]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),r("p",[t._v("不同类型的无人机可用于空中、地面、海上和水下。\n这些（更正式地）被称为无人驾驶飞行器（UAV），无人驾驶飞行器系统（UAS），无人驾驶地面车辆（UGV），无人驾驶水面船只（USV），无人驾驶水下潜航器（UUV）。")])]),t._v(" "),r("p",[t._v("无人机的“大脑”被称为自动驾驶仪。 It consists of "),r("em",[t._v("flight stack")]),t._v(" software running on "),r("em",[t._v("vehicle controller")]),t._v(' ("flight controller") hardware.')]),t._v(" "),r("h2",{attrs:{id:"px4-自动驾驶仪"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#px4-自动驾驶仪"}},[t._v("#")]),t._v(" PX4 自动驾驶仪")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://px4.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4"),r("OutboundLink")],1),t._v(" is powerful open source autopilot "),r("em",[t._v("flight stack")]),t._v(".")]),t._v(" "),r("p",[t._v("PX4的一些主要功能包括：")]),t._v(" "),r("ul",[r("li",[t._v("可控制"),r("RouterLink",{attrs:{to:"/zh/airframes/airframe_reference.html"}},[t._v("许多不同的设备机架/类型")]),t._v("，包括：飞机（多旋翼，固定翼和垂直起降），地面车辆和水下潜航器。")],1),t._v(" "),r("li",[t._v("适用于"),r("a",{attrs:{href:"#vehicle-flight-controller-board"}},[t._v("设备控制器")]),t._v("，传感器和其他外围设备的硬件选择。")]),t._v(" "),r("li",[t._v("灵活而强大的"),r("a",{attrs:{href:"#flight-modes"}},[t._v("飞行模式")]),t._v("和"),r("a",{attrs:{href:"#safety-settings-failsafe"}},[t._v("安全功能")]),t._v("。")])]),t._v(" "),r("p",[t._v("PX4是一个大型无人机平台的核心部分，整个平台包括了"),r("a",{attrs:{href:"#qgroundcontrol"}},[t._v("QGroundControl")]),t._v("地面站，"),r("a",{attrs:{href:"https://pixhawk.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk硬件设备"),r("OutboundLink")],1),t._v("，以及"),r("a",{attrs:{href:"http://mavsdk.mavlink.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVSDK"),r("OutboundLink")],1),t._v("用于集成记载计算机，相机和其他使用MAVLink协议的硬件设备。 PX4 由 "),r("a",{attrs:{href:"https://www.dronecode.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Dronecode 项目"),r("OutboundLink")],1),t._v(" 支持。")]),t._v(" "),r("h2",{attrs:{id:"qgroundcontrol"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#qgroundcontrol"}},[t._v("#")]),t._v(" QGroundControl")]),t._v(" "),r("p",[t._v("Dronecode 地面控制站称为 "),r("a",{attrs:{href:"http://qgroundcontrol.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGC 地面站"),r("OutboundLink")],1),t._v("。 You can use "),r("em",[t._v("QGroundControl")]),t._v(" to load (flash) PX4 onto the "),r("RouterLink",{attrs:{to:"/zh/getting_started/flight_controller_selection.html"}},[t._v("vehicle control hardware")]),t._v(", you can setup the vehicle, change different parameters, get real-time flight information and create and execute fully autonomous missions.")],1),t._v(" "),r("p",[r("em",[t._v("QGroundControl")]),t._v(" runs on Windows, Android, MacOS or Linux. 从"),r("a",{attrs:{href:"http://qgroundcontrol.com/downloads/",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),r("OutboundLink")],1),t._v("下载并安装。")]),t._v(" "),r("p",[r("img",{attrs:{src:o(1310),alt:"QGC Main Screen"}})]),t._v(" "),r("h2",{attrs:{id:"机体-飞行控制板"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#机体-飞行控制板"}},[t._v("#")]),t._v(" 机体/飞行控制板")]),t._v(" "),r("p",[t._v("PX4最初设计用于在"),r("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk_series.html"}},[t._v("Pixhawk系列")]),t._v("飞控上运行，但是现在可以在Linux计算机或者其他硬件上运行。 在选择飞控板时你应当考虑飞机的物理尺寸限制、想要进行的活动，当然还需要考虑成本。")],1),t._v(" "),r("p",[t._v("更多信息，请参阅"),r("RouterLink",{attrs:{to:"/zh/getting_started/flight_controller_selection.html"}},[t._v("飞行控制器选择")]),t._v("。")],1),t._v(" "),r("h2",{attrs:{id:"传感器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#传感器"}},[t._v("#")]),t._v(" 传感器")]),t._v(" "),r("p",[t._v("PX4使用传感器确定机体状态（这是稳定和启动自动控制所必须的）。 The system "),r("em",[t._v("minimally requires")]),t._v(" a gyroscope, accelerometer, magnetometer (compass) and barometer. GPS和其他定位系统是启用所有的自动"),r("RouterLink",{attrs:{to:"/zh/getting_started/flight_modes.html#categories"}},[t._v("模式")]),t._v("以及部分辅助模式所必须的。 固定翼和 VTOL 飞行器还应包括空速传感器（强烈推荐）。")],1),t._v(" "),r("p",[t._v("更多信息请参阅：")]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/zh/getting_started/sensor_selection.html"}},[t._v("传感器")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/zh/peripherals/"}},[t._v("外设")])],1)]),t._v(" "),r("h2",{attrs:{id:"输出-电机-舵机-执行器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#输出-电机-舵机-执行器"}},[t._v("#")]),t._v(" 输出:电机，舵机，执行器")]),t._v(" "),r("p",[t._v("PX4 uses "),r("em",[t._v("outputs")]),t._v(" to control: motor speed (e.g. via "),r("a",{attrs:{href:"#escs-motors"}},[t._v("ESC")]),t._v("), flight surfaces like ailerons and flaps, camera triggers, parachutes, grippers, and many other types of payloads.")]),t._v(" "),r("p",[t._v("The outputs may be PWM ports or be mapped to DroneCAN nodes (e.g. DroneCAN "),r("RouterLink",{attrs:{to:"/zh/dronecan/escs.html"}},[t._v("motor controllers")]),t._v("). The same airframe mapping of outputs to nodes is used in both cases case.")],1),t._v(" "),r("p",[t._v("下面的图片显示了"),r("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk4.html"}},[t._v("Pixhawk 4")]),t._v("和"),r("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk4_mini.html"}},[t._v("Pixhawk 4 Mini")]),t._v("的PWM输出端口。")],1),t._v(" "),r("p",[r("img",{attrs:{src:o(1311),alt:"Pixhawk 4 output ports"}}),t._v(" "),r("img",{attrs:{src:o(1312),alt:"Pixhawk4 mini MAIN ports"}})]),t._v(" "),r("p",[t._v("输出分为 "),r("code",[t._v("MAIN")]),t._v(" 和 "),r("code",[t._v("AUX")]),t._v("，并单独编号("),r("code",[t._v("MAINn")]),t._v(" 和 "),r("code",[t._v("AUXn")]),t._v(",  "),r("code",[t._v("n")]),t._v(" 通常是从1到6或8)。")]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),r("p",[t._v("每个输出的特定目的是在每个机身的基础上硬编码的。 所有机架的输出映射都在 "),r("RouterLink",{attrs:{to:"/zh/airframes/airframe_reference.html"}},[t._v("机架参考")]),t._v(" 中。")],1)]),t._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),r("p",[t._v("A flight controller may only have "),r("code",[t._v("MAIN")]),t._v(" PWM outputs (like the "),r("em",[t._v("Pixhawk 4 Mini")]),t._v("), or may have only 6 outputs on either "),r("code",[t._v("MAIN")]),t._v(" or "),r("code",[t._v("AUX")]),t._v(". 确保您选择的控制器有足够且正确的端口/输出接口能够适配您的"),r("RouterLink",{attrs:{to:"/zh/airframes/airframe_reference.html"}},[t._v("机架")]),t._v("。")],1)]),t._v(" "),r("p",[t._v("通常情况下，"),r("code",[t._v("MAIN")]),t._v("端口用于核心飞行控制，"),r("code",[t._v("AUX")]),t._v("用于非关键的执行器/有效载荷（但是，如果"),r("code",[t._v("MAIN")]),t._v("没有足够的接口，比如VTOL机型，"),r("code",[t._v("AUX")]),t._v("也可能用于飞行控制）。 例如，对于一架"),r("RouterLink",{attrs:{to:"/zh/airframes/airframe_reference.html#copter_quadrotor_x_generic_quadcopter"}},[t._v("通用四旋翼")]),t._v("，"),r("code",[t._v("MAIN")]),t._v("输出中的1-4用于控制电机，剩余的"),r("code",[t._v("MAIN")]),t._v("和一些"),r("code",[t._v("AUX")]),t._v("用来做遥控透传（透传：输入内容直接给到输出，中途不经过任何修改）。")],1),t._v(" "),r("p",[t._v("The actual ports/bus used for the outputs on the "),r("a",{attrs:{href:"#vehicle-flight-controller-board"}},[t._v("flight controller")]),t._v(" depends on the hardware and PX4 configuration. "),r("em",[t._v("Usually")]),t._v(" the ports are mapped to PWM outputs as shown above, which are commonly screen printed "),r("code",[t._v("MAIN OUT")]),t._v(" and "),r("code",[t._v("AUX OUT")]),t._v(".")]),t._v(" "),r("p",[t._v("它们也可能被标记为"),r("code",[t._v("FMU PWM OUT")]),t._v("或"),r("code",[t._v("IO PWM Out")]),t._v('（或类似的形式）。 Pixhawk controllers have a "main" FMU board and '),r("em",[t._v("may")]),t._v(" have a separate IO board. 如果有IO 板, "),r("code",[t._v("AUX")]),t._v(" 端口直接连接到 FMU 和 "),r("code",[t._v("MIAN")]),t._v(" 端口连接到IO板。 否则， "),r("code",[t._v("MAIN")]),t._v(" 端口连接到FMU，没有 "),r("code",[t._v("AUX")]),t._v(" 端口。 The FMU output ports can use "),r("RouterLink",{attrs:{to:"/zh/peripherals/dshot.html"}},[t._v("D-shot")]),t._v(" or "),r("em",[t._v("One-shot")]),t._v(" protocols (as well as PWM), which provide much lower-latency behaviour. 这对于竞速机和其他需要更好性能的机体来说是有用的。")],1),t._v(" "),r("p",[r("strong",[t._v("备注：")])]),t._v(" "),r("ul",[r("li",[r("code",[t._v("MAIN")]),t._v(" 和 "),r("code",[t._v("AUX")]),t._v(" 中仅有6-8个输出，因为大多数飞行控制器只有这么多的 PWM/Dshot/Oneshot 输出。 理论上来说，如果总线支持，可以有更多的输出（比如UAVCAN总线就不限于这几个节点）。")])]),t._v(" "),r("h2",{attrs:{id:"电调-电机"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#电调-电机"}},[t._v("#")]),t._v(" 电调 & 电机")]),t._v(" "),r("p",[t._v("许多 PX4 无人机使用由飞行控制器通过电子调速器（ESC）驱动的无刷电机（ESC将来自飞行控制器的信号转换为合适的功率水平，并传递给电机）。")]),t._v(" "),r("p",[t._v("有关 PX4 支持的电调和电机的信息，请参阅：")]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/zh/peripherals/esc_motors.html"}},[t._v("电调 & 电机")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/zh/advanced_config/esc_calibration.html"}},[t._v("电调（ESC）校准")])],1),t._v(" "),r("li",[r("a",{attrs:{href:"https://oscarliang.com/esc-firmware-protocols/",target:"_blank",rel:"noopener noreferrer"}},[t._v("电调固件和协议概述"),r("OutboundLink")],1),t._v("（oscarliang.com）")])]),t._v(" "),r("h2",{attrs:{id:"电池-电源"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#电池-电源"}},[t._v("#")]),t._v(" 电池/电源")]),t._v(" "),r("p",[t._v("PX4无人机最常使用的是锂聚合物（LiPo）电池。 The battery is typically connected to the system using a "),r("em",[t._v("Power Module")]),t._v(" or "),r("em",[t._v("Power Management Board")]),t._v(", which provide separate power for the flight controller and to the ESCs (for the motors).")]),t._v(" "),r("p",[t._v("Information about batteries and battery configuration can be found in "),r("RouterLink",{attrs:{to:"/zh/config/battery.html"}},[t._v("Battery Configuration")]),t._v(" and the guides in "),r("RouterLink",{attrs:{to:"/zh/assembly/"}},[t._v("Basic Assembly")]),t._v(" (e.g. "),r("RouterLink",{attrs:{to:"/zh/assembly/quick_start_pixhawk4.html#power"}},[t._v("Pixhawk 4 Wiring Quick Start > Power")]),t._v(").")],1),t._v(" "),r("h2",{attrs:{id:"无线电控制-遥控"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#无线电控制-遥控"}},[t._v("#")]),t._v(" 无线电控制（遥控）")]),t._v(" "),r("p",[t._v("A "),r("RouterLink",{attrs:{to:"/zh/getting_started/rc_transmitter_receiver.html"}},[t._v("Radio Control (RC)")]),t._v(" system is used to "),r("em",[t._v("manually")]),t._v(" control the vehicle. 它由一个遥控装置组成，使用发射机来与飞行器上的接收机通信。 一些遥控系统还可以额外接收自动驾驶仪传回的数传信息。")],1),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),r("p",[t._v("PX4 在自主飞行模式中不需要遥控系统。")])]),t._v(" "),r("p",[r("img",{attrs:{src:o(413),alt:"Taranis X9D Transmitter"}})]),t._v(" "),r("p",[r("RouterLink",{attrs:{to:"/zh/getting_started/rc_transmitter_receiver.html"}},[t._v("遥控系统选择")]),t._v("解释了如何选择遥控系统。 其他相关主题包括：")],1),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/zh/config/radio.html"}},[t._v("Radio/Remote Control Setup")]),t._v(" - Remote control configuration in "),r("em",[t._v("QGroundControl")]),t._v(".")],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/zh/flying/basic_flying.html"}},[t._v("飞行 101")]),t._v(" - 学习如何使用遥控器飞行。")],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/zh/peripherals/frsky_telemetry.html"}},[t._v("FrSky 数传")]),t._v(" - 设置遥控发射机以从 PX4 接收数传/状态更新。")],1)]),t._v(" "),r("h2",{attrs:{id:"地面站游戏手柄控制器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#地面站游戏手柄控制器"}},[t._v("#")]),t._v(" 地面站游戏手柄控制器")]),t._v(" "),r("p",[t._v("A "),r("RouterLink",{attrs:{to:"/zh/config/joystick.html"}},[t._v("computer joystick")]),t._v(" connected through "),r("em",[t._v("QGroundControl")]),t._v(" can also be used to manually control PX4 (QGC converts joystick movements into MAVLink messages that are sent over the telemetry link). This approach is used by ground control units that have an integrated ground control station, like the "),r("em",[t._v("Auterion")]),t._v(" "),r("a",{attrs:{href:"https://auterion-gs.com/skynav/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Skynav"),r("OutboundLink")],1),t._v(" or "),r("em",[t._v("UAVComponents")]),t._v(" "),r("a",{attrs:{href:"https://uxvtechnologies.com/ground-control-stations/micronav/",target:"_blank",rel:"noopener noreferrer"}},[t._v("MicroNav"),r("OutboundLink")],1),t._v(". 游戏手柄也常被用于控制仿真中的无人机。")],1),t._v(" "),r("p",[r("img",{attrs:{src:o(388),alt:"Photo of MicroNav, a ground controller with integrated joysticks"}})]),t._v(" "),r("h2",{attrs:{id:"安全开关"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安全开关"}},[t._v("#")]),t._v(" 安全开关")]),t._v(" "),r("p",[t._v("It is common for vehicles to have a "),r("em",[t._v("safety switch")]),t._v(" that must be engaged before the vehicle can be "),r("a",{attrs:{href:"#arming-and-disarming"}},[t._v("armed")]),t._v(" (when armed, motors are powered and propellers can turn). 通常，安全开关被整合到GPS设备中，但也可能是一个单独的物理组件。")]),t._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),r("p",[t._v("解锁后的载具有潜在危险。\n安全开关是防止意外解锁发生的一个附加机制。")])]),t._v(" "),r("h2",{attrs:{id:"数传电台"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#数传电台"}},[t._v("#")]),t._v(" 数传电台")]),t._v(" "),r("p",[r("RouterLink",{attrs:{to:"/zh/telemetry/"}},[t._v("Data/Telemetry Radios")]),t._v(" can provide a wireless MAVLink connection between a ground control station like "),r("em",[t._v("QGroundControl")]),t._v(" and a vehicle running PX4. 这使得在飞行过程中调整参数，实时监视遥测信息，更改任务等成为可能。")],1),t._v(" "),r("h2",{attrs:{id:"机载计算机"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#机载计算机"}},[t._v("#")]),t._v(" 机载计算机")]),t._v(" "),r("p",[t._v("PX4可以通过串行电缆或wifi由一个独立的记载计算机控制。 机载计算机通常使用MAVLink API（如MAVSDK或MAVROS）进行通讯。")]),t._v(" "),r("p",[t._v("Relevant topics include:")]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/zh/flight_modes/offboard.html"}},[t._v("Offboard 模式")]),t._v(" - 用于从地面站或机载计算机对 PX4 进行 Offboard 控制的飞行模式。")],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/zh/robotics/"}},[t._v("机器人（Robotics) APIs")])],1)]),t._v(" "),r("h2",{attrs:{id:"sd卡-可移除储存器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sd卡-可移除储存器"}},[t._v("#")]),t._v(" SD卡（可移除储存器）")]),t._v(" "),r("p",[t._v("PX4 使用 SD 储存卡存储 "),r("RouterLink",{attrs:{to:"/zh/getting_started/flight_reporting.html"}},[t._v("飞行日志")]),t._v("，而且还需要内存卡才能使用 UAVCAN 外围设备，运行 "),r("RouterLink",{attrs:{to:"/zh/flying/missions.html"}},[t._v("飞行任务")]),t._v("。")],1),t._v(" "),r("p",[t._v("默认情况下，如果没有 SD 卡，PX4 将在启动时播放 "),r("RouterLink",{attrs:{to:"/zh/getting_started/tunes.html#format-failed"}},[t._v("格式化失败（2-声短响）")]),t._v(" 两次（且上述需要储存卡的功能都不可用）。")],1),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),r("p",[t._v("Pixhawk 飞控板支持的最大 SD 卡大小为 32 GB 。 The "),r("em",[t._v("SanDisk Extreme U3 32GB")]),t._v(" is "),r("RouterLink",{attrs:{to:"/zh/dev_log/logging.html#sd-cards"}},[t._v("highly recommended")]),t._v(".")],1)]),t._v(" "),r("p",[t._v("尽管如此，SD卡也只是可选的。 不包含 SD 卡槽的飞行控制器可以：")]),t._v(" "),r("ul",[r("li",[t._v("使用参数 "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#CBRK_BUZZER"}},[t._v("CBRK_BUZZER")]),t._v(" 禁用通知蜂鸣器。")],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/zh/dev_log/logging.html#log-streaming"}},[t._v("推流日志")]),t._v(" 到另一个组件（机载计算机）。")],1),t._v(" "),r("li",[t._v("Store missions in RAM/FLASH.\n")])]),t._v(" "),r("h2",{attrs:{id:"解锁和加锁"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#解锁和加锁"}},[t._v("#")]),t._v(" 解锁和加锁")]),t._v(" "),r("p",[t._v("载具可能有可动部件的，其中一些在通电后会有一定的危险性（特别是电机和螺旋桨）！")]),t._v(" "),r("p",[t._v("为了减少事故，PX4定义了三种供电状态：")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("Disarmed:")]),t._v(" All motors and actuators are unpowered.")]),t._v(" "),r("li",[r("strong",[t._v("Prearmed:")]),t._v(" Motors are unpowered, but actuators are not (allowing non-dangerous actuators to be bench-tested).")]),t._v(" "),r("li",[r("strong",[t._v("Armed:")]),t._v(" Motors and other actuators are powered, and propellers may be spinning.")])]),t._v(" "),r("p",[t._v("Vehicles are "),r("em",[t._v("armed")]),t._v(" only when necessary. 部分载具可能还有一个"),r("a",{attrs:{href:"#safety-switch"}},[t._v("安全开关")]),t._v("，必须解除安全开关才能成功解锁(通常这个开关是GPS的一部分)。")]),t._v(" "),r("p",[t._v("默认情况下：")]),t._v(" "),r("ul",[r("li",[t._v("Vehicles are "),r("em",[t._v("disarmed")]),t._v(" (unpowered) when not in use, and must be explicitly "),r("em",[t._v("armed")]),t._v(" before taking off.")]),t._v(" "),r("li",[t._v("如果飞手没有迅速起飞，飞行器会自动上锁（上锁的时间是可调的）。")]),t._v(" "),r("li",[t._v("飞行器将在降落后自动锁定（上锁时间是可调的）。")]),t._v(" "),r("li",[t._v("载具如果不是在“健康”状态，则会解锁不通过。")]),t._v(" "),r("li",[t._v("如果VTOL飞行器处于固定翼飞机模式，则阻止解锁("),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#CBRK_VTOLARMING"}},[t._v("默认情况下")]),t._v(")。")],1),t._v(" "),r("li",[t._v("预解锁可在电机保持未供电的状态下安全地测试执行器。")])]),t._v(" "),r("p",[t._v("Arming is triggered by default (Mode 2 transmitters) by holding the RC throttle/yaw stick on the "),r("em",[t._v("bottom right")]),t._v(" for one second (to disarm, hold stick on bottom left). 还可以使用遥控上的按钮来配置 PX4 解锁（也可以从地面站发送MAVLink解锁命令）。")]),t._v(" "),r("p",[t._v("更详细的解锁和加锁的配置的解读可以在这里找到："),r("RouterLink",{attrs:{to:"/zh/advanced_config/prearm_arm_disarm.html"}},[t._v("预解锁，解锁，加锁配置")]),t._v("。")],1),t._v(" "),r("h2",{attrs:{id:"飞行模式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#飞行模式"}},[t._v("#")]),t._v(" 飞行模式")]),t._v(" "),r("p",[t._v("Flight modes provide different types/levels of vehicle automation and autopilot assistance to the user (pilot). "),r("em",[t._v("Autonomous modes")]),t._v(" are fully controlled by the autopilot, and require no pilot/remote control input. These are used, for example, to automate common tasks like takeoff, returning to the home position, and landing. Other autonomous modes execute pre-programmed missions, follow a GPS beacon, or accept commands from an offboard computer or ground station.")]),t._v(" "),r("p",[r("em",[t._v("Manual modes")]),t._v(" are controlled by the user (via the RC control sticks/joystick) with assistance from the autopilot. Different manual modes enable different flight characteristics - for example, some modes enable acrobatic tricks, while others are impossible to flip and will hold position/course against wind.")]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),r("p",[t._v("Not all flight modes are available on all vehicle types, and some modes can only be used when specific conditions have been met (e.g. many modes require a global position estimate).")])]),t._v(" "),r("p",[t._v("An overview of the available flight modes "),r("RouterLink",{attrs:{to:"/zh/getting_started/flight_modes.html"}},[t._v("can be found here")]),t._v(". Instructions for how to set up your remote control switches to turn on different flight modes is provided in "),r("RouterLink",{attrs:{to:"/zh/config/flight_mode.html"}},[t._v("Flight Mode Configuration")]),t._v(".")],1),t._v(" "),r("h2",{attrs:{id:"安全设置-故障保护"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安全设置-故障保护"}},[t._v("#")]),t._v(" 安全设置（故障保护）")]),t._v(" "),r("p",[t._v("PX4 has configurable failsafe systems to protect and recover your vehicle if something goes wrong! These allow you to specify areas and conditions under which you can safely fly, and the action that will be performed if a failsafe is triggered (for example, landing, holding position, or returning to a specified point).")]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),r("p",[t._v("You can only specify the action for the "),r("em",[t._v("first")]),t._v(" failsafe event. Once a failsafe occurs the system will enter special handling code, such that subsequent failsafe triggers are managed by separate system level and vehicle specific code.")])]),t._v(" "),r("p",[t._v("The main failsafe areas are listed below:")]),t._v(" "),r("ul",[r("li",[t._v("Low Battery")]),t._v(" "),r("li",[t._v("Remote Control (RC) Loss")]),t._v(" "),r("li",[t._v("Position Loss (global position estimate quality is too low).")]),t._v(" "),r("li",[t._v("Offboard Loss (e.g. lose connection to companion computer)")]),t._v(" "),r("li",[t._v("Data Link Loss (e.g. lose telemetry connection to GCS).")]),t._v(" "),r("li",[t._v("Geofence Breach (restrict vehicle to flight within a virtual cylinder).")]),t._v(" "),r("li",[t._v("Mission Failsafe (prevent a previous mission being run at a new takeoff location).")]),t._v(" "),r("li",[t._v("Traffic avoidance (triggered by transponder data from e.g. ADSB transponders).")])]),t._v(" "),r("p",[t._v("For more information see: "),r("RouterLink",{attrs:{to:"/zh/config/safety.html"}},[t._v("Safety")]),t._v(" (Basic Configuration).")],1),t._v(" "),r("h2",{attrs:{id:"航向和运动方向"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#航向和运动方向"}},[t._v("#")]),t._v(" 航向和运动方向")]),t._v(" "),r("p",[t._v("All the vehicles, boats and aircraft have a heading direction or an orientation based on their forward motion.")]),t._v(" "),r("p",[r("img",{attrs:{src:o(387),alt:"Frame Heading"}})]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),r("p",[t._v("For a VTOL Tailsitter the heading is relative to the multirotor configuration (i.e. vehicle pose during takeoff, hovering, landing).")])]),t._v(" "),r("p",[t._v("It is important to know the vehicle heading direction in order to align the autopilot with the vehicle vector of movement. Multicopters have a heading even when they are symmetrical from all sides! Usually manufacturers use a colored props or colored arms to indicate the heading.")]),t._v(" "),r("p",[r("img",{attrs:{src:o(1313),alt:"Frame Heading TOP"}})]),t._v(" "),r("p",[t._v("In our illustrations we will use red coloring for the front propellers of multicopter to show heading.")]),t._v(" "),r("p",[t._v("You can read in depth about heading in "),r("RouterLink",{attrs:{to:"/zh/config/flight_controller_orientation.html"}},[t._v("Flight Controller Orientation")])],1)])}),[],!1,null,null,null);e.default=a.exports},387:function(t,e,o){t.exports=o.p+"assets/img/frame_heading.30556a25.png"},388:function(t,e,o){t.exports=o.p+"assets/img/micronav.042a329b.jpg"},413:function(t,e,o){t.exports=o.p+"assets/img/frsky_taranis_x9d_transmitter.cd77d27b.jpg"}}]);