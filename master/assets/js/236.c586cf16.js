(window.webpackJsonp=window.webpackJsonp||[]).push([[236],{1324:function(t,a,r){t.exports=r.p+"assets/img/ark_flow_distance_sensor.6191f0e1.jpg"},1325:function(t,a,r){t.exports=r.p+"assets/img/menu_analyze_tool.160c3594.png"},1326:function(t,a,r){t.exports=r.p+"assets/img/qgc_analyze_tool_distance_sensor.3dbf6b43.png"},3347:function(t,a,r){"use strict";r.r(a);var e=r(19),_=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"距离传感器-测距仪"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#距离传感器-测距仪"}},[t._v("#")]),t._v(" 距离传感器（测距仪）")]),t._v(" "),e("p",[t._v("距离传感器提供的距离测量可用于"),e("RouterLink",{attrs:{to:"/zh/flying/terrain_following_holding.html#terrain_following"}},[t._v("地形跟随")]),t._v("、"),e("RouterLink",{attrs:{to:"/zh/flying/terrain_following_holding.html#terrain_hold"}},[t._v("地形保持")]),t._v("（即精确悬停拍摄）、改善着陆行为（"),e("RouterLink",{attrs:{to:"/zh/flying/terrain_following_holding.html#range_aid"}},[t._v("距离辅助")]),t._v("）、监管高度限制警告、碰撞预防等。")],1),t._v(" "),e("p",[t._v("本节列出了PX4支持的距离传感器（链接到更详细的文档）、所有测距仪所需的"),e("a",{attrs:{href:"#configuration"}},[t._v("通用配置")]),t._v("、"),e("a",{attrs:{href:"#testing"}},[t._v("测试")]),t._v("和"),e("a",{attrs:{href:"#simulation"}},[t._v("模拟")]),t._v("信息。 更详细的设置和配置信息在下方（和侧边栏）的主题链接中提供")]),t._v(" "),e("p",[e("img",{attrs:{src:r(403),alt:"Lidar Lite V3",width:"200px"}}),e("img",{attrs:{src:r(402),alt:"LightWare SF11/C Lidar",width:"200px"}}),e("img",{attrs:{src:r(1324),alt:"ARK Flow",width:"200px"}})]),t._v(" "),e("h2",{attrs:{id:"支持的测距仪"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#支持的测距仪"}},[t._v("#")]),t._v(" 支持的测距仪")]),t._v(" "),e("h3",{attrs:{id:"ark-flow"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ark-flow"}},[t._v("#")]),t._v(" ARK Flow")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/zh/uavcan/ark_flow.html"}},[t._v("ARK Flow")]),t._v(" 是一个开源的飞行时间 (ToF) 和光流模块, 能够测量从 8cm 到 30m 的距离. 它可以通过CAN1接口连接至飞控，允许通过CAN2接口添加传感器。 它运行 PX4 固件，支持U"),e("RouterLink",{attrs:{to:"/zh/uavcan/"}},[t._v("AVCAN")]),t._v(" "),e("RouterLink",{attrs:{to:"/zh/uavcan/node_firmware.html"}},[t._v("固件更新")]),t._v("，并被打包成一个小尺寸。")],1),t._v(" "),e("h3",{attrs:{id:"holybro-st-vl53l1x-激光雷达"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#holybro-st-vl53l1x-激光雷达"}},[t._v("#")]),t._v(" Holybro ST VL53L1X 激光雷达")]),t._v(" "),e("p",[e("a",{attrs:{href:"http://www.holybro.com/product/vl53l1x/",target:"_blank",rel:"noopener noreferrer"}},[t._v("VL53L1X"),e("OutboundLink")],1),t._v("是最先进的飞行时间（ToF）激光测距传感器，增强了ST FlightSense™ 产品系列。 它是市场上速度最快的微型 ToF 传感器，精确测距可达 4 m，快速测距频率可达 50 Hz。")]),t._v(" "),e("p",[t._v("它带有一个 JST GHR 4 针连接器，与 "),e("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk4.html"}},[t._v("Pixhawk 4")]),t._v("、"),e("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk5x.html"}},[t._v("Pixhawk 5X")]),t._v("和其他遵循 "),e("a",{attrs:{href:"https://github.com/pixhawk/Pixhawk-Standards/blob/master/DS-009%20Pixhawk%20Connector%20Standard.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk 连接器标准"),e("OutboundLink")],1),t._v(" 的飞行控制器上的 I2C 端口兼容。")],1),t._v(" "),e("h3",{attrs:{id:"激光雷达精简版"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#激光雷达精简版"}},[t._v("#")]),t._v(" 激光雷达精简版")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/zh/sensor/lidar_lite.html"}},[t._v("激光雷达精简版")]),t._v(" 是一款紧凑、高性能的光学远距离测量测距仪。 它的传感器范围为 (5cm - 40m)，可以连接到 PWM 或 I2C 端口。")],1),t._v(" "),e("h3",{attrs:{id:"maxbotix-i2cxl-maxsonar-ez"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#maxbotix-i2cxl-maxsonar-ez"}},[t._v("#")]),t._v(" MaxBotix I2CXL-MaxSonar-EZ")]),t._v(" "),e("p",[t._v("MaxBotix "),e("a",{attrs:{href:"https://www.maxbotix.com/product-category/i2cxl-maxsonar-ez-products",target:"_blank",rel:"noopener noreferrer"}},[t._v("I2CXL-MaxSonar-EZ"),e("OutboundLink")],1),t._v(" 测距 有许多基于声纳的相对短程测距仪 ，适用于辅助起飞/着陆和避免碰撞。 这些可以使用 I2C 端口连接。")]),t._v(" "),e("p",[t._v("测距仪通过使用参数"),e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SENS_EN_MB12XX"}},[t._v("SENS_EN_MB12XX")]),t._v("启用。")],1),t._v(" "),e("h3",{attrs:{id:"lightware-lidars"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#lightware-lidars"}},[t._v("#")]),t._v(" Lightware LIDARs")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/zh/sensor/sfxx_lidar.html"}},[t._v("Lightware SFxx Lidar")]),t._v(" 提供一个宽范围的轻量级激光高度计，适用于许多无人机应用。")],1),t._v(" "),e("p",[t._v("PX4 支持: SF11/c 和 SF/LW20. PX4 也可用于一下停产的型号: SF02, SF10/a, SF10/b, SF10/c.")]),t._v(" "),e("h3",{attrs:{id:"teraranger-测距仪"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#teraranger-测距仪"}},[t._v("#")]),t._v(" TeraRanger 测距仪")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/zh/sensor/teraranger.html"}},[t._v("TeraRanger")]),t._v(" 提供了一些基于红外光飞行时间(ToF)技术的轻量级距离测量传感器。 他们通常比声纳更快、范围更大、比基于激光的系统更小、更轻。")],1),t._v(" "),e("p",[t._v("PX4 提供以下通过 I2C总线连接的型号：TeraRanger One, TeraRanger Evo 60m 和 TeraRanger Evo 600Hz。")]),t._v(" "),e("h3",{attrs:{id:"ainstein-us-d1-标准雷达高度计"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ainstein-us-d1-标准雷达高度计"}},[t._v("#")]),t._v(" Ainstein US-D1 标准雷达高度计")]),t._v(" "),e("p",[e("em",[t._v("Ainstein")]),t._v(" "),e("RouterLink",{attrs:{to:"/zh/sensor/ulanding_radar.html"}},[t._v("US-D1 标准雷达高度计")]),t._v(" 是紧凑型的微波测距仪，已经针对无人机做过优化. 它有大约50米的感测范围。 该产品的一个特别优势是它可以在所有天气条件下和所有地形类型（包括水）上有效运行。")],1),t._v(" "),e("h3",{attrs:{id:"leddarone"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#leddarone"}},[t._v("#")]),t._v(" LeddarOne")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/zh/sensor/leddar_one.html"}},[t._v("LeddarOne")]),t._v(" 是一种小型激光雷达模块，具有窄而漫反射的光束，在一个坚固、可靠、经济高效的组件中提供出色的整体探测范围和性能。 它的遥感范围从1厘米到40米不等，需要与UART/串行总线连接。")],1),t._v(" "),e("h3",{attrs:{id:"tfmini"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tfmini"}},[t._v("#")]),t._v(" TFmini")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/zh/sensor/tfmini.html"}},[t._v("Benewake TFmini Lidar")]),t._v(" 是一个的小巧、低成本、低功率的激光测距拥有 12m 的测量范围")],1),t._v(" "),e("h3",{attrs:{id:"psk-cm8jl65-cc5"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#psk-cm8jl65-cc5"}},[t._v("#")]),t._v(" PSK-CM8JL65-CC5")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/zh/sensor/cm8jl65_ir_distance_sensor.html"}},[t._v("Lanbao PSK-CM8JL65-CC5 ToF 红外距离测量传感器")]),t._v(" 非常小 (38 mm x 18mm x 7mm, <10g) IR distance sensor with a 0.17m-8m range and millimeter resolution. It must be connected to a UART/serial bus.")],1),t._v(" "),e("h3",{attrs:{id:"avionics-anonymous-uavcan-激光高度计接口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#avionics-anonymous-uavcan-激光高度计接口"}},[t._v("#")]),t._v(" Avionics Anonymous UAVCAN 激光高度计接口")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/zh/uavcan/avanon_laser_interface.html"}},[t._v("Avionics Anonymous UAVCAN 激光高度计接口")]),t._v(" 允许几种常见的测距仪 (例如 "),e("RouterLink",{attrs:{to:"/zh/sensor/sfxx_lidar.html"}},[t._v("Lightware SF11/c, SF30/D")]),t._v(", 等) 连接到 "),e("RouterLink",{attrs:{to:"/zh/uavcan/"}},[t._v("UAVCAN")]),t._v(" 总线, 这是一个比 I2C 更强大的接口.")],1),t._v(" "),e("p",[e("span",{attrs:{id:"configuration"}})]),t._v(" "),e("h2",{attrs:{id:"配置-设置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置-设置"}},[t._v("#")]),t._v(" 配置/设置")]),t._v(" "),e("p",[t._v("测距仪通常连接到串口(PWM)或者 I2C 接口(取决于设备驱动），并通过设置特定的参数在端口上启用。")]),t._v(" "),e("p",[t._v("*每个距离传感器特定的<0>硬件和软件设置将在各自的主题中介绍")]),e("p"),t._v(" "),e("p",[t._v("下面给出了"),e("em",[t._v("所有距离传感器")]),t._v("的通用配置，包括物理设置和使用。")]),t._v(" "),e("h3",{attrs:{id:"常规配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常规配置"}},[t._v("#")]),t._v(" 常规配置")]),t._v(" "),e("p",[t._v("通用测距仪配置使用特定的"),e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#EKF2_RNG_AID"}},[t._v("EKF2*RNG**")]),t._v("参数。 这些包括（非详尽）：")],1),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#EKF2_RNG_POS_X"}},[t._v("EKF2_RNG_POS_X")]),t._v(", "),e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#EKF2_RNG_POS_Y"}},[t._v("EKF2_RNG_POS_Y")]),t._v(", "),e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#EKF2_RNG_POS_Z"}},[t._v("EKF2_RNG_POS_Z")]),t._v(" - 测距仪在 X、Y、Z 方向上与车辆重心的偏移量。")],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#EKF2_RNG_PITCH"}},[t._v("EKF2_RNG_PITCH")]),t._v(" - 0 度值（默认值）对应于测距仪与车辆垂直轴精确对齐（即垂直向下），而 90 度表示测距仪指向前方。 如果使用非零间距，则使用简单的三角法计算到地面的距离。")],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#EKF2_RNG_DELAY"}},[t._v("EKF2_RNG_DELAY")]),t._v(" - 数据从传感器到达估计器的近似延迟。")],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#EKF2_RNG_SFE"}},[t._v("EKF2_RNG_SFE")]),t._v(" - 测距仪范围相关的噪声定标器。")],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#EKF2_RNG_NOISE"}},[t._v("EKF2_RNG_NOISE")]),t._v(" - 测距仪融合的测量噪声")],1)]),t._v(" "),e("h2",{attrs:{id:"测试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#测试"}},[t._v("#")]),t._v(" 测试")]),t._v(" "),e("p",[t._v("测试测距仪最简单的方法是改变距离并与 PX4 检测到的值进行比较 以下部分显示了一些获取测量范围的方法。")]),t._v(" "),e("h3",{attrs:{id:"qgroundcontrol-mavlink-检查器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#qgroundcontrol-mavlink-检查器"}},[t._v("#")]),t._v(" QGroundControl MAVLink 检查器")]),t._v(" "),e("p",[e("em",[t._v("QGroundControl MAVLink Inspector")]),t._v("可让您查看从车辆发送的消息, 包括"),e("code",[t._v("DISTANCE_SENSOR")]),t._v(" 来自测距仪的信息。 工具之间的主要区别在于"),e("em",[t._v("分析")]),t._v("工具可以在图表中绘制值。")]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),e("p",[t._v("发送的消息取决于车辆配置。 "),e("code",[t._v("DISTANCE_SENSOR")]),t._v("只有在联网车辆安装了测距仪并发布传感器值时，您才会收到消息。")])]),t._v(" "),e("p",[t._v("查看测距仪输出：")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("打开菜单"),e("strong",[t._v("Q > 选择工具 > 分析工具")]),t._v("：")]),t._v(" "),e("p",[e("img",{attrs:{src:r(1325),alt:"Menu for QGC Analyze Tool"}})])]),t._v(" "),e("li",[e("p",[t._v("选择消息"),e("code",[t._v("DISTANCE_SENSOR")]),t._v("，然后选中plot复选框"),e("code",[t._v("current_distance")]),t._v("。 工具将会绘制结果： "),e("img",{attrs:{src:r(1326),alt:"QGC Analyze DISTANCE_SENSOR value"}})])])]),t._v(" "),e("h3",{attrs:{id:"qgroundcontrol-mavlink-控制台"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#qgroundcontrol-mavlink-控制台"}},[t._v("#")]),t._v(" QGroundControl MAVLink 控制台")]),t._v(" "),e("p",[t._v("你也可以使用 "),e("em",[t._v("QGroundControl MAVLink 控制台")]),t._v(" 来观察 "),e("code",[t._v("distance_sensor")]),t._v(" uORB 主题：")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("listener distance_sensor "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n")])])]),e("p",[e("em",[t._v("QGroundControl MAVLink 控制台")]),t._v(" 在连接到 Pixhawk 或者其他 Nuttx目标板时工作，无法在模拟器上使用。 在模拟器上可以直接在终端中运行命令。\n:::")]),t._v(" "),e("p",[t._v("更多信息请看："),e("RouterLink",{attrs:{to:"/zh/debug/sensor_uorb_topic_debugging.html"}},[t._v("开发> 调试/日志> 使用侦听器命令进行传感器/主题调试")]),t._v("。")],1),t._v(" "),e("h2",{attrs:{id:"仿真"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#仿真"}},[t._v("#")]),t._v(" 仿真")]),t._v(" "),e("p",[t._v("激光测距和声纳测距仪可以在"),e("RouterLink",{attrs:{to:"/zh/simulation/gazebo.html"}},[t._v("Gazebo Simulator")]),t._v("上使用。 要做到这一点，你必须在启动模拟器时使用一个拥有测距仪的机体模型。")],1),t._v(" "),e("p",[t._v("iris 光流模型包括激光雷达测距仪：")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl gazebo_iris_opt_flow\n")])])]),e("p",[t._v("typhoon_h480 包括一个声纳测距仪：")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl gazebo_typhoon_h480\n")])])]),e("p",[t._v("如果你需要使用一个不同的车辆，你可以在它的配置文件中包含此模型。 你可以看到如何在相应的 Iris 和 Typhoon 配置文件：")]),t._v(" "),e("ul",[e("li",[e("p",[e("a",{attrs:{href:"https://github.com/PX4/sitl_gazebo/blob/master/models/iris_opt_flow/iris_opt_flow.sdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("iris_opt_flow.sdf"),e("OutboundLink")],1),t._v("\nxml\n"),e("include",[e("uri",[t._v("model://lidar")]),t._v(" "),e("pose",[t._v("-0.12 0 0 0 3.1415 0")])],1),t._v(" "),e("joint",{attrs:{name:"lidar_joint",type:"revolute"}},[e("child",[t._v("lidar::link")]),t._v(" "),e("parent",[t._v("iris::base_link")]),t._v(" "),e("axis",[e("xyz",[t._v("0 0 1")]),t._v(" "),e("limit",[e("upper",[t._v("0")]),t._v(" "),e("lower",[t._v("0")])],1)],1)],1)],1)]),t._v(" "),e("li",[e("p",[e("a",{attrs:{href:"https://github.com/PX4/PX4-SITL_gazebo/blob/master/models/typhoon_h480/typhoon_h480.sdf.jinja#L1131-L1145",target:"_blank",rel:"noopener noreferrer"}},[t._v("typhoon_h480.sdf"),e("OutboundLink")],1),t._v("\nxml\n"),e("include",[e("uri",[t._v("model://sonar")])],1),t._v(" "),e("joint",{attrs:{name:"sonar_joint",type:"revolute"}},[e("child",[t._v("sonar_model::link")]),t._v(" "),e("parent",[t._v("typhoon_h480::base_link")]),t._v(" "),e("axis",[e("xyz",[t._v("0 0 1")]),t._v(" "),e("limit",[e("upper",[t._v("0")]),t._v(" "),e("lower",[t._v("0")])],1)],1)],1)],1)])])])}),[],!1,null,null,null);a.default=_.exports},402:function(t,a,r){t.exports=r.p+"assets/img/sf11c_120_m.6579362e.jpg"},403:function(t,a,r){t.exports=r.p+"assets/img/lidar_lite_v3.7185119f.jpg"}}]);