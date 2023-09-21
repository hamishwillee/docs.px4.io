(window.webpackJsonp=window.webpackJsonp||[]).push([[271],{1467:function(t,a,s){t.exports=s.p+"assets/img/ark_flow_distance_sensor.762fb2a7.jpg"},1468:function(t,a,s){t.exports=s.p+"assets/img/menu_analyze_tool.62fe0cbd.png"},1469:function(t,a,s){t.exports=s.p+"assets/img/qgc_analyze_tool_distance_sensor.ea01529a.png"},3834:function(t,a,s){"use strict";s.r(a);var n=s(19),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"距离传感器-测距仪"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#距离传感器-测距仪"}},[t._v("#")]),t._v(" 距离传感器（测距仪）")]),t._v(" "),n("p",[t._v("Distance sensors provide distance measurement that can be used for "),n("RouterLink",{attrs:{to:"/zh/flying/terrain_following_holding.html#terrain_following"}},[t._v("terrain following")]),t._v(", "),n("RouterLink",{attrs:{to:"/zh/flying/terrain_following_holding.html#terrain_hold"}},[t._v("terrain holding")]),t._v(" (i.e. precision hovering for photography), improved landing behaviour ("),n("RouterLink",{attrs:{to:"/zh/advanced_config/tuning_the_ecl_ekf.html#conditional-range-aiding"}},[t._v("conditional range aid")]),t._v("), warning of regulatory height limits, collision prevention, etc.")],1),t._v(" "),n("p",[t._v("本节列出了PX4支持的距离传感器（链接到更详细的文档）、所有测距仪所需的"),n("a",{attrs:{href:"#configuration"}},[t._v("通用配置")]),t._v("、"),n("a",{attrs:{href:"#testing"}},[t._v("测试")]),t._v("和"),n("a",{attrs:{href:"#simulation"}},[t._v("模拟")]),t._v("信息。 更详细的设置和配置信息在下方（和侧边栏）的主题链接中提供")]),t._v(" "),n("p",[n("img",{attrs:{src:s(421),alt:"Lidar Lite V3",width:"200px"}}),n("img",{attrs:{src:s(422),alt:"LightWare SF11/C Lidar",width:"200px"}}),n("img",{attrs:{src:s(1467),alt:"ARK Flow",width:"200px"}})]),t._v(" "),n("h2",{attrs:{id:"支持的测距仪"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#支持的测距仪"}},[t._v("#")]),t._v(" 支持的测距仪")]),t._v(" "),n("h3",{attrs:{id:"ark-flow"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ark-flow"}},[t._v("#")]),t._v(" ARK Flow")]),t._v(" "),n("p",[n("RouterLink",{attrs:{to:"/zh/dronecan/ark_flow.html"}},[t._v("ARK Flow")]),t._v(" is an open-source Time-of-Flight (ToF) and optical flow sensor module, which is capable of measuring distances from 8cm to 30m. 它可以通过CAN1接口连接至飞控，允许通过CAN2接口添加传感器。 It supports "),n("RouterLink",{attrs:{to:"/zh/dronecan/"}},[t._v("DroneCAN")]),t._v(", runs "),n("RouterLink",{attrs:{to:"/zh/dronecan/px4_cannode_fw.html"}},[t._v("PX4 DroneCAN Firmware")]),t._v(", and is packed into a tiny form factor.")],1),t._v(" "),n("h3",{attrs:{id:"holybro-st-vl53l1x-激光雷达"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#holybro-st-vl53l1x-激光雷达"}},[t._v("#")]),t._v(" Holybro ST VL53L1X 激光雷达")]),t._v(" "),n("p",[t._v("The "),n("a",{attrs:{href:"https://holybro.com/products/st-vl53l1x-lidar",target:"_blank",rel:"noopener noreferrer"}},[t._v("VL53L1X"),n("OutboundLink")],1),t._v(" is a state-of-the-art, Time-of-Flight (ToF), laser-ranging sensor, enhancing the ST FlightSense™ product family. 它是市场上速度最快的微型 ToF 传感器，精确测距可达 4 m，快速测距频率可达 50 Hz。")]),t._v(" "),n("p",[t._v("它带有一个 JST GHR 4 针连接器，与 "),n("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk4.html"}},[t._v("Pixhawk 4")]),t._v("、"),n("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk5x.html"}},[t._v("Pixhawk 5X")]),t._v("和其他遵循 "),n("a",{attrs:{href:"https://github.com/pixhawk/Pixhawk-Standards/blob/master/DS-009%20Pixhawk%20Connector%20Standard.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk 连接器标准"),n("OutboundLink")],1),t._v(" 的飞行控制器上的 I2C 端口兼容。")],1),t._v(" "),n("h3",{attrs:{id:"激光雷达精简版"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#激光雷达精简版"}},[t._v("#")]),t._v(" 激光雷达精简版")]),t._v(" "),n("p",[n("RouterLink",{attrs:{to:"/zh/sensor/lidar_lite.html"}},[t._v("激光雷达精简版")]),t._v(" 是一款紧凑、高性能的光学远距离测量测距仪。 它的传感器范围为 (5cm - 40m)，可以连接到 PWM 或 I2C 端口。")],1),t._v(" "),n("h3",{attrs:{id:"maxbotix-i2cxl-maxsonar-ez"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#maxbotix-i2cxl-maxsonar-ez"}},[t._v("#")]),t._v(" MaxBotix I2CXL-MaxSonar-EZ")]),t._v(" "),n("p",[t._v("MaxBotix "),n("a",{attrs:{href:"https://www.maxbotix.com/product-category/i2cxl-maxsonar-ez-products",target:"_blank",rel:"noopener noreferrer"}},[t._v("I2CXL-MaxSonar-EZ"),n("OutboundLink")],1),t._v(" 测距 有许多基于声纳的相对短程测距仪 ，适用于辅助起飞/着陆和避免碰撞。 这些可以使用 I2C 端口连接。")]),t._v(" "),n("p",[t._v("测距仪通过使用参数"),n("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SENS_EN_MB12XX"}},[t._v("SENS_EN_MB12XX")]),t._v("启用。")],1),t._v(" "),n("h3",{attrs:{id:"lightware-lidars"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#lightware-lidars"}},[t._v("#")]),t._v(" Lightware LIDARs")]),t._v(" "),n("p",[n("RouterLink",{attrs:{to:"/zh/sensor/sfxx_lidar.html"}},[t._v("Lightware SFxx Lidar")]),t._v(" 提供一个宽范围的轻量级激光高度计，适用于许多无人机应用。")],1),t._v(" "),n("p",[t._v("PX4 支持: SF11/c 和 SF/LW20. PX4 也可用于一下停产的型号: SF02, SF10/a, SF10/b, SF10/c.")]),t._v(" "),n("h3",{attrs:{id:"teraranger-测距仪"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#teraranger-测距仪"}},[t._v("#")]),t._v(" TeraRanger 测距仪")]),t._v(" "),n("p",[n("RouterLink",{attrs:{to:"/zh/sensor/teraranger.html"}},[t._v("TeraRanger")]),t._v(" 提供了一些基于红外光飞行时间(ToF)技术的轻量级距离测量传感器。 他们通常比声纳更快、范围更大、比基于激光的系统更小、更轻。")],1),t._v(" "),n("p",[t._v("PX4 提供以下通过 I2C总线连接的型号：TeraRanger One, TeraRanger Evo 60m 和 TeraRanger Evo 600Hz。")]),t._v(" "),n("h3",{attrs:{id:"ainstein-us-d1-标准雷达高度计"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ainstein-us-d1-标准雷达高度计"}},[t._v("#")]),t._v(" Ainstein US-D1 标准雷达高度计")]),t._v(" "),n("p",[t._v("The "),n("em",[t._v("Ainstein")]),t._v(" "),n("RouterLink",{attrs:{to:"/zh/sensor/ulanding_radar.html"}},[t._v("US-D1 Standard Radar Altimeter")]),t._v(" is compact microwave rangefinder that has been optimised for use on UAVs. 它有大约50米的感测范围。 该产品的一个特别优势是它可以在所有天气条件下和所有地形类型（包括水）上有效运行。")],1),t._v(" "),n("h3",{attrs:{id:"leddarone"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#leddarone"}},[t._v("#")]),t._v(" LeddarOne")]),t._v(" "),n("p",[n("RouterLink",{attrs:{to:"/zh/sensor/leddar_one.html"}},[t._v("LeddarOne")]),t._v(" 是一种小型激光雷达模块，具有窄而漫反射的光束，在一个坚固、可靠、经济高效的组件中提供出色的整体探测范围和性能。 它的遥感范围从1厘米到40米不等，需要与UART/串行总线连接。")],1),t._v(" "),n("h3",{attrs:{id:"tfmini"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tfmini"}},[t._v("#")]),t._v(" TFmini")]),t._v(" "),n("p",[n("RouterLink",{attrs:{to:"/zh/sensor/tfmini.html"}},[t._v("Benewake TFmini Lidar")]),t._v(" 是一个的小巧、低成本、低功率的激光测距拥有 12m 的测量范围")],1),t._v(" "),n("h3",{attrs:{id:"psk-cm8jl65-cc5"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#psk-cm8jl65-cc5"}},[t._v("#")]),t._v(" PSK-CM8JL65-CC5")]),t._v(" "),n("p",[t._v("The "),n("RouterLink",{attrs:{to:"/zh/sensor/cm8jl65_ir_distance_sensor.html"}},[t._v("Lanbao PSK-CM8JL65-CC5 ToF Infrared Distance Measuring Sensor")]),t._v(" is a very small (38 mm x 18mm x 7mm, <10g) IR distance sensor with a 0.17m-8m range and millimeter resolution. It must be connected to a UART/serial bus.")],1),t._v(" "),n("h3",{attrs:{id:"avionics-anonymous-uavcan-激光高度计接口"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#avionics-anonymous-uavcan-激光高度计接口"}},[t._v("#")]),t._v(" Avionics Anonymous UAVCAN 激光高度计接口")]),t._v(" "),n("p",[t._v("The "),n("RouterLink",{attrs:{to:"/zh/dronecan/avanon_laser_interface.html"}},[t._v("Avionics Anonymous UAVCAN Laser Altimeter Interface")]),t._v(" allows several common rangefinders (e.g. "),n("RouterLink",{attrs:{to:"/zh/sensor/sfxx_lidar.html"}},[t._v("Lightware SF11/c, SF30/D")]),t._v(", etc) to be connected to the "),n("RouterLink",{attrs:{to:"/zh/can/"}},[t._v("CAN")]),t._v(" bus via "),n("RouterLink",{attrs:{to:"/zh/dronecan/"}},[t._v("DroneCAN")]),t._v(", a more robust interface than I2C.")],1),t._v(" "),n("p",[n("a",{attrs:{id:"configuration"}})]),t._v(" "),n("h2",{attrs:{id:"配置-设置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置-设置"}},[t._v("#")]),t._v(" 配置/设置")]),t._v(" "),n("p",[t._v("测距仪通常连接到串口(PWM)或者 I2C 接口(取决于设备驱动），并通过设置特定的参数在端口上启用。")]),t._v(" "),n("p",[t._v("The hardware and software setup that is "),n("em",[t._v("specific to each distance sensor")]),t._v(" is covered in their individual topics.")]),t._v(" "),n("p",[t._v("The generic configuration that is "),n("em",[t._v("common to all distance sensors")]),t._v(", covering both the physical setup and usage, is given below.")]),t._v(" "),n("h3",{attrs:{id:"常规配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#常规配置"}},[t._v("#")]),t._v(" 常规配置")]),t._v(" "),n("p",[t._v("The common rangefinder configuration is specified using "),n("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#EKF2_RNG_CTRL"}},[t._v("EKF2_RNG_*")]),t._v(" parameters. 这些包括（非详尽）：")],1),t._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#EKF2_RNG_POS_X"}},[t._v("EKF2_RNG_POS_X")]),t._v(", "),n("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#EKF2_RNG_POS_Y"}},[t._v("EKF2_RNG_POS_Y")]),t._v(", "),n("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#EKF2_RNG_POS_Z"}},[t._v("EKF2_RNG_POS_Z")]),t._v(" - 测距仪在 X、Y、Z 方向上与车辆重心的偏移量。")],1),t._v(" "),n("li",[n("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#EKF2_RNG_PITCH"}},[t._v("EKF2_RNG_PITCH")]),t._v(" - 0 度值（默认值）对应于测距仪与车辆垂直轴精确对齐（即垂直向下），而 90 度表示测距仪指向前方。 如果使用非零间距，则使用简单的三角法计算到地面的距离。")],1),t._v(" "),n("li",[n("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#EKF2_RNG_DELAY"}},[t._v("EKF2_RNG_DELAY")]),t._v(" - 数据从传感器到达估计器的近似延迟。")],1),t._v(" "),n("li",[n("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#EKF2_RNG_SFE"}},[t._v("EKF2_RNG_SFE")]),t._v(" - Range finder range dependent noise scaler.")],1),t._v(" "),n("li",[n("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#EKF2_RNG_NOISE"}},[t._v("EKF2_RNG_NOISE")]),t._v(" - 测距仪融合的测量噪声")],1)]),t._v(" "),n("h2",{attrs:{id:"测试"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#测试"}},[t._v("#")]),t._v(" 测试")]),t._v(" "),n("p",[t._v("测试测距仪最简单的方法是改变距离并与 PX4 检测到的值进行比较 以下部分显示了一些获取测量范围的方法。")]),t._v(" "),n("h3",{attrs:{id:"qgroundcontrol-mavlink-检查器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#qgroundcontrol-mavlink-检查器"}},[t._v("#")]),t._v(" QGroundControl MAVLink 检查器")]),t._v(" "),n("p",[t._v("The "),n("em",[t._v("QGroundControl MAVLink Inspector")]),t._v(" lets you view messages sent from the vehicle, including "),n("code",[t._v("DISTANCE_SENSOR")]),t._v(" information from the rangefinder. The main difference between the tools is that the "),n("em",[t._v("Analyze")]),t._v(" tool can plot values in a graph.")]),t._v(" "),n("div",{staticClass:"custom-block note"},[n("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),n("p",[t._v("发送的消息取决于车辆配置。 "),n("code",[t._v("DISTANCE_SENSOR")]),t._v("只有在联网车辆安装了测距仪并发布传感器值时，您才会收到消息。")])]),t._v(" "),n("p",[t._v("查看测距仪输出：")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("Open the menu "),n("strong",[t._v("Q > Select Tool > Analyze Tools")]),t._v(":")]),t._v(" "),n("p",[n("img",{attrs:{src:s(1468),alt:"Menu for QGC Analyze Tool"}})])]),t._v(" "),n("li",[n("p",[t._v("选择消息"),n("code",[t._v("DISTANCE_SENSOR")]),t._v("，然后选中plot复选框"),n("code",[t._v("current_distance")]),t._v("。 工具将会绘制结果： "),n("img",{attrs:{src:s(1469),alt:"QGC Analyze DISTANCE_SENSOR value"}})])])]),t._v(" "),n("h3",{attrs:{id:"qgroundcontrol-mavlink-控制台"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#qgroundcontrol-mavlink-控制台"}},[t._v("#")]),t._v(" QGroundControl MAVLink 控制台")]),t._v(" "),n("p",[t._v("You can also use the "),n("em",[t._v("QGroundControl MAVLink Console")]),t._v(" to observe the "),n("code",[t._v("distance_sensor")]),t._v(" uORB topic:")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[t._v("listener distance_sensor "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n")])])]),n("div",{staticClass:"custom-block note"},[n("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),n("p",[t._v("The "),n("em",[t._v("QGroundControl MAVLink Console")]),t._v(" works when connected to Pixhawk or other NuttX targets, but not the Simulator. 在模拟器上可以直接在终端中运行命令。")])]),t._v(" "),n("p",[t._v("For more information see: "),n("RouterLink",{attrs:{to:"/zh/debug/sensor_uorb_topic_debugging.html"}},[t._v("Development > Debugging/Logging > Sensor/Topic Debugging using the Listener Command")]),t._v(".")],1),t._v(" "),n("h2",{attrs:{id:"仿真"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#仿真"}},[t._v("#")]),t._v(" 仿真")]),t._v(" "),n("p",[t._v("Lidar and sonar rangefinders can be used in the "),n("RouterLink",{attrs:{to:"/zh/sim_gazebo_classic/"}},[t._v("Gazebo Classic")]),t._v(" simulator. 要做到这一点，你必须在启动模拟器时使用一个拥有测距仪的机体模型。")],1),t._v(" "),n("p",[t._v("iris 光流模型包括激光雷达测距仪：")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl gazebo-classic_iris_opt_flow\n")])])]),n("p",[t._v("typhoon_h480 包括一个声纳测距仪：")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl gazebo-classic_typhoon_h480\n")])])]),n("p",[t._v("如果你需要使用一个不同的车辆，你可以在它的配置文件中包含此模型。 你可以看到如何在相应的 Iris 和 Typhoon 配置文件：")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/PX4/PX4-SITL_gazebo/blob/main/models/iris_opt_flow/iris_opt_flow.sdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("iris_opt_flow.sdf"),n("OutboundLink")],1),n("div",{staticClass:"language-xml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-xml"}},[n("code",[t._v("  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("include")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("uri")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("model://lidar"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("uri")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("pose")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("-0.12 0 0 0 3.1415 0"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("pose")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("include")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("joint")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("lidar_joint"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("revolute"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("child")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("lidar::link"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("child")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("parent")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("iris::base_link"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("parent")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("axis")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("xyz")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("0 0 1"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("xyz")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("limit")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("upper")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("0"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("upper")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("lower")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("0"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("lower")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("limit")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("axis")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("joint")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/PX4/PX4-SITL_gazebo/blob/main/models/typhoon_h480/typhoon_h480.sdf.jinja#L1131-L1145",target:"_blank",rel:"noopener noreferrer"}},[t._v("typhoon_h480.sdf"),n("OutboundLink")],1),n("div",{staticClass:"language-xml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-xml"}},[n("code",[t._v("  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("include")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("uri")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("model://sonar"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("uri")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("include")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("joint")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("sonar_joint"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("revolute"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("child")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("sonar_model::link"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("child")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("parent")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("typhoon_h480::base_link"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("parent")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("axis")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("xyz")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("0 0 1"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("xyz")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("limit")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("upper")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("0"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("upper")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("lower")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("0"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("lower")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("limit")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("axis")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("joint")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])])])])}),[],!1,null,null,null);a.default=e.exports},421:function(t,a,s){t.exports=s.p+"assets/img/lidar_lite_v3.e287a357.jpg"},422:function(t,a,s){t.exports=s.p+"assets/img/sf11c_120_m.0667b13f.jpg"}}]);