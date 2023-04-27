(window.webpackJsonp=window.webpackJsonp||[]).push([[1724],{3178:function(t,e,o){"use strict";o.r(e);var r=o(19),i=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"px4-vision-视觉自主开发套件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#px4-vision-视觉自主开发套件"}},[t._v("#")]),t._v(" PX4 Vision 视觉自主开发套件")]),t._v(" "),r("p",[t._v("The "),r("a",{attrs:{href:"https://holybro.com/collections/multicopter-kit/PX4-Vision",target:"_blank",rel:"noopener noreferrer"}},[r("em",[t._v("PX4 Vision Autonomy Development Kit")]),r("OutboundLink")],1),t._v(" is a robust and inexpensive kit for enabling computer vision development on autonomous vehicles.")]),t._v(" "),r("p",[r("img",{attrs:{src:o(1606),alt:"综述"}})]),t._v(" "),r("p",[t._v("The kit contains a near-ready-to-fly carbon-fiber quadcopter equipped with a "),r("em",[t._v("Pixhawk 4")]),t._v(" or "),r("em",[t._v("Pixhawk 6C")]),t._v(" (on V1.5) flight controller, a "),r("em",[t._v("UP Core")]),t._v(" companion computer (4GB memory & 64GB eMMC), and a Occipital "),r("em",[t._v("Structure Core")]),t._v(" depth camera sensor.")]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),r("p",[t._v("该无人机发货时没有预先安装软件。 A pre-imaged USB stick that contains a reference implementation of the "),r("RouterLink",{attrs:{to:"/zh/computer_vision/obstacle_avoidance.html"}},[t._v("PX4/PX4-Avoidance")]),t._v(" local planner software is provided by "),r("em",[t._v("Auterion")]),t._v(". 该软件仅提供一个非常基本的示例，说明您可以使用 PX4 Vision 自主套件做什么。 Developers can use the kit to try out other features provided by the "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Avoidance",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4 Avoidance"),r("OutboundLink")],1),t._v(" project, modify the existing code, or experiment with completely new computer vision-based functionality.")],1)]),t._v(" "),r("p",[t._v("该指南阐述了无人机准备飞行所需的最少附加步骤（安装遥控器系统和电池等）。 也包括如何起飞，以及如何修改计算机视觉代码。")]),t._v(" "),r("h2",{attrs:{id:"where-to-buy"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#where-to-buy"}},[t._v("#")]),t._v(" Where to Buy")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://holybro.com/collections/multicopter-kit/products/px4-vision-dev-kit-v1-5",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4 Vision Dev Kit v1.5"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://holybro.com/collections/multicopter-kit/products/px4-vision",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4 Vision Dev Kit v1 (Discontinued)"),r("OutboundLink")],1)])]),t._v(" "),r("h2",{attrs:{id:"警告-通知"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#警告-通知"}},[t._v("#")]),t._v(" 警告&通知")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#warnings-and-notifications"}},[t._v("警告&通知")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#what-is-inside"}},[t._v("包装内容")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#what-else-do-you-need"}},[t._v("其他注意事项")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#first-time-setup"}},[t._v("首次使用")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#fly-the-drone-with-avoidance"}},[t._v("试飞无人机（带避障）")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#development-using-the-kit"}},[t._v("使用套件开发")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#px4-vision-carrier-board-pinouts"}},[t._v("PX4 Vision Carrier Board Pinouts")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#other-development-resources"}},[t._v("其他拓展资源")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#how-to-get-technical-support"}},[t._v("如何获得技术支持")])])]),t._v(" "),r("h2",{attrs:{id:"开始了解你的开发套件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#开始了解你的开发套件"}},[t._v("#")]),t._v(" 开始了解你的开发套件")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("不要直接使用电源为 "),r("em",[t._v("UP Core")]),t._v(" 计算机供电（可能会摧毁计算机）。 "),r("em",[t._v("UP Core")]),t._v(" 只能使用电池供电。")])]),t._v(" "),r("li",[r("p",[t._v("Obstacle avoidance in missions can only be tested when GPS is available (missions use GPS coordinates). 因此，它不能用于测试 "),r("RouterLink",{attrs:{to:"/zh/computer_vision/safe_landing.html"}},[t._v("安全着陆")]),t._v(" 或其他需要下方摄像头的功能。")],1)]),t._v(" "),r("li",[r("p",[t._v("只有在 GPS 工作正常时才能测试任务模式中的自主避障（飞行任务需要使用 GPS 配合）。 防撞功能需要在可获得位置的模式下进行测试，比如GPS或光流有比较好的定位。")])]),t._v(" "),r("li",[r("p",[t._v("PX4 Vision v1 with ECN 010 or above (carrier board RC05 and up), the "),r("em",[t._v("UP Core")]),t._v(" can be powered by either the DC plug or with battery.")]),t._v(" "),r("p",[r("img",{attrs:{src:o(1607),alt:"RC Number"}}),t._v(" "),r("img",{attrs:{src:o(1608),alt:"ECN Number"}})])]),t._v(" "),r("li",[r("p",[t._v("All PX4 Vision v1.5 "),r("em",[t._v("UP Core")]),t._v(" can be powered by either the DC plug or with battery.")])])]),t._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),r("p",[t._v("For PX4 Vision v1 with ECN below 010/carrier board below RC04, the "),r("em",[t._v("UP Core")]),t._v(" should only be powered using the battery (do not remove the "),r("em",[t._v("UP Core power")]),t._v(" socket safety cover). This does not apply to PX4 Vision v1.5")]),t._v(" "),r("p",[r("img",{attrs:{src:o(1609),alt:"Warning - do not connect power port"}})])]),t._v(" "),r("h2",{attrs:{id:"包装内容"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#包装内容"}},[t._v("#")]),t._v(" 包装内容")]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),r("p",[t._v("Difference between the PX4 Vision V1 and V1.5 can be found "),r("a",{attrs:{href:"https://docs.holybro.com/drone-development-kit/px4-vision-dev-kit-v1.5/v1-and-v1.5-difference",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("img",{attrs:{src:o(1610),alt:"PV4 Vision v1.5"}})]),t._v(" "),r("p",[t._v("What's inside the PX4 Vision V1 can be found here in the "),r("a",{attrs:{href:"https://docs.px4.io/v1.13/en/complete_vehicles/px4_vision_kit.html#what-is-inside",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4 v1.13 Docs here"),r("OutboundLink")],1),t._v(".")]),t._v(" "),r("p",[t._v("当无人机按上述安装完成时：")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("核心组件：")]),t._v(" "),r("ul",[r("li",[t._v("1x Pixhawk 4 or Pixhawk 6C (for v1.5) flight controller")]),t._v(" "),r("li",[t._v("一个 PMW3901 光流传感器")]),t._v(" "),r("li",[t._v("一个 TOF 红外距离传感器(PSK‐CM8JL65‐CC5)")]),t._v(" "),r("li",[t._v("一个 Structure Core 深度相机\n"),r("ul",[r("li",[t._v("160 深度视图摄像机")]),t._v(" "),r("li",[t._v("立体红外摄像头")]),t._v(" "),r("li",[t._v("板载传感器")]),t._v(" "),r("li",[t._v("强大的 NU3000 多核深度处理器")])])]),t._v(" "),r("li",[t._v("一个 "),r("em",[t._v("UP Core")]),t._v(" 计算机 (4GB 内存；64GB eMMC 带 Ubuntu 系统和 PX4 避障)\n"),r("ul",[r("li",[t._v("Intel® AtomTM x5-z8350 (up to 1.92 GHz)")]),t._v(" "),r("li",[t._v("兼容的操作系统: Microsoft Windows 10 完整版本, Linux (ubilinux, Ubuntu, Yocto), Android")]),t._v(" "),r("li",[t._v("FTDI UART 连接到飞控")]),t._v(" "),r("li",[r("code",[t._v("USB1")]),t._v("：USB3-A 接口被用来从 USB2.0 储存器启动 PX4 避障环境（连接到 USB3.0 外设可能会导致GPS无法使用）。")]),t._v(" "),r("li",[r("code",[t._v("USB2")]),t._v("：USB 2.0 接口，用于连接 JST-GH 插接件。 Can be used for second camera, LTE, etc. (or keyboard/mouse during development).")]),t._v(" "),r("li",[r("code",[t._v("USB3")]),t._v("：USB 2.0 JST-GH 端口连接到深度摄像头")]),t._v(" "),r("li",[r("code",[t._v("HDMI")]),t._v("：HDMI 输出")]),t._v(" "),r("li",[t._v("SD 卡插槽")]),t._v(" "),r("li",[t._v("WiFi 802.11 b/g/n @ 2.4 GHz (连接到外部1号天线)。 允许计算机进行 WiFi 家庭网络访问/更新。")])])])])]),t._v(" "),r("li",[r("p",[t._v("机械规格：")]),t._v(" "),r("ul",[r("li",[t._v("框架：全 5mm 3k 碳纤纹")]),t._v(" "),r("li",[t._v("Motors: T-MOTOR KV1750")]),t._v(" "),r("li",[t._v("电调: BEHEli-S 20A ESC")]),t._v(" "),r("li",[t._v("GPS: M8N GPS module")]),t._v(" "),r("li",[t._v("电源模块： Holybro PM07")]),t._v(" "),r("li",[t._v("轴距：286毫米")]),t._v(" "),r("li",[t._v("重量：854克（无电池和桨）")]),t._v(" "),r("li",[t._v("数传：连接飞行控制器的ESP8266（连接外部2号天线）。 实现与地面站的无线连接。")])])]),t._v(" "),r("li",[r("p",[t._v("带有 Auterion 提供的预刷新软件的 USB2.0 盘，其附带：")]),t._v(" "),r("ul",[r("li",[t._v("Ubuntu 18.04 LTS")]),t._v(" "),r("li",[t._v("ROS Melodic")]),t._v(" "),r("li",[t._v("Occipital Structure Core 相机 ROS 驱动")]),t._v(" "),r("li",[t._v("MAVROS")]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/PX4/PX4-Avoidance",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4 Avoidance 避障库"),r("OutboundLink")],1)])])]),t._v(" "),r("li",[r("p",[t._v("各种导线、8个螺旋桨、2个电池带（已安装）和其他附件（可用于连接其他外围设备）。")])])]),t._v(" "),r("h2",{attrs:{id:"其他注意事项"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#其他注意事项"}},[t._v("#")]),t._v(" 其他注意事项")]),t._v(" "),r("p",[t._v("以下各节说明如何将工具包用作开发计算机视觉软件的环境。")]),t._v(" "),r("ul",[r("li",[t._v("电池：\n"),r("ul",[r("li",[t._v("带 XT60 母头的 4S 锂电池")]),t._v(" "),r("li",[t._v("长度小于115毫米（以适合电源插座和 GPS 支架之间的空间）")])])]),t._v(" "),r("li",[t._v("无线电控制系统\n"),r("ul",[r("li",[t._v("可以使用各种 "),r("RouterLink",{attrs:{to:"/zh/getting_started/rc_transmitter_receiver.html"}},[t._v("PX4 兼容的遥控系统")]),t._v("。")],1),t._v(" "),r("li",[t._v("带有 R-XSR 接收机的 "),r("em",[t._v("FrSky Taranis")]),t._v(" 发射机是一个受欢迎的配置。")])])]),t._v(" "),r("li",[t._v("一个 H2.0 头的内六角螺丝刀（用来打开顶部的螺丝来安装接收机）")])]),t._v(" "),r("p",[r("em",[t._v("PX4 避障")]),t._v(" 系统由计算机视觉软件组成，这种软件运行在一个配套的计算机上(附着的深度摄像头)，为运行在一个 "),r("em",[t._v("飞控上的 PX4 飞行堆栈提供障碍和/或航线信息")])]),t._v(" "),r("ul",[r("li",[t._v("Laptop or tablet running "),r("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/getting_started/download_and_install.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGroundControl"),r("OutboundLink")],1),t._v(" (QGC).")])]),t._v(" "),r("h2",{attrs:{id:"首次使用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#首次使用"}},[t._v("#")]),t._v(" 首次使用")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("Attach a "),r("RouterLink",{attrs:{to:"/zh/getting_started/rc_transmitter_receiver.html#connecting-receivers"}},[t._v("compatible RC receiver")]),t._v(" to the vehicle (not supplied with kit):")],1),t._v(" "),r("ul",[r("li",[t._v("使用 H2.0 头的内六角螺丝刀移除/取消顶部板块(在电池进入的地方)。")]),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/zh/assembly/quick_start_pixhawk4.html#radio-control"}},[t._v("将接收器连接到飞控")]),t._v("。")],1),t._v(" "),r("li",[t._v("重新安装上面的外壳。")]),t._v(" "),r("li",[t._v("在无人机背部安装RC 接收器(使用双面胶或其他)。")]),t._v(" "),r("li",[t._v("确保天线无障碍物阻挡并将天线和机架电隔离。例如，在减震板下方或机臂上。")])])]),t._v(" "),r("li",[r("p",[r("RouterLink",{attrs:{to:"/zh/getting_started/rc_transmitter_receiver.html#binding"}},[t._v("Bind")]),t._v(" 遥控和接收机配对(如果尚未完成)。 配对方法程序取决于接收机和遥控器（读取接收器手册）。")],1)]),t._v(" "),r("li",[r("p",[t._v("GPS需要高于无人机，并固定到底板。 (Not required for v1.5)")]),t._v(" "),r("p",[r("img",{attrs:{src:o(1611),alt:"提升GPS映射"}})])]),t._v(" "),r("li",[r("p",[t._v("将套件中预先烧录好镜像的U盘插入 "),r("em",[t._v("UP Core")]),t._v(" 的端口 "),r("code",[t._v("USB1")]),t._v(" （下面高亮的）")]),t._v(" "),r("p",[r("img",{attrs:{src:o(1612),alt:"UP Core：USB1 端口 "}})])]),t._v(" "),r("li",[r("p",[t._v("用充好电的电池的为无人机供电。  :::note\n连接电池前要移除螺旋桨。")])])]),t._v(" "),r("p",[t._v(":::")]),t._v(" "),r("ol",[r("li",[t._v("使用以下默认凭据将地面站连接到无人机WiFi网络（几秒钟后）：\n"),r("ul",[r("li",[r("strong",[t._v("SSID：")]),t._v(" pixhawk4")]),t._v(" "),r("li",[r("strong",[t._v("密码：")]),t._v(" pixhawk4")])])])]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),r("p",[t._v("WiFi 网络 SSID、密码和其他凭据可以在连接后更改(如果需要), 使用 web 浏览器打开 URL： "),r("code",[t._v("http://192. 68.4.1")]),t._v(" 波特率不得从921600更改。")])]),t._v(" "),r("ol",[r("li",[r("p",[t._v("在地面站启动 "),r("em",[t._v("QGroundControl")]),t._v("。")])]),t._v(" "),r("li",[r("p",[r("RouterLink",{attrs:{to:"/zh/config/"}},[t._v("配置/校准")]),t._v(" 无人机：")],1),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("注解")])])])]),t._v(" "),r("p",[t._v("无人机要进行预先校准(例如使用固件、机架、电池和传感器所有安装)。\n您需要校准无线电系统 (您刚刚连接) 并且进行以下的基本检查。\n:::")]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/zh/config/radio.html"}},[t._v("校准遥控")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/zh/config/compass.html"}},[t._v("校准罗盘")])],1)]),t._v(" "),r("ol",[r("li",[r("p",[t._v("螺旋桨按照下面的方向安装：")]),t._v(" "),r("p",[t._v("我们推荐的遥控设置为：")]),t._v(" "),r("p",[t._v("我们推荐的 RC 控制器开关定义为：")]),t._v(" "),r("ul",[r("li",[t._v("默认情况下，PX4 Vision Kit运行 "),r("em",[t._v("localplanner")]),t._v(" ，这是您自己的软件的推荐起点。")]),t._v(" "),r("li",[r("em",[t._v("globalplanner")]),t._v(" 尚未用这个工具包测试。")]),t._v(" "),r("li",[r("em",[t._v("降落计划器")]),t._v(" 需要一个向下的摄像头，并且必须先修改相机的安装座才能使用。")])])]),t._v(" "),r("li",[r("p",[t._v("按如下所示旋转连接螺旋桨：")]),t._v(" "),r("p",[r("img",{attrs:{src:o(1613),alt:"电机顺序示意图"}})]),t._v(" "),r("ul",[r("li",[r("p",[t._v("螺旋桨方向可以从标签中确定："),r("em",[t._v("6045")]),t._v(" (顺时针) 和 "),r("em",[t._v("6045")]),t._v(" "),r("strong",[t._v("R")]),t._v(" (逆时针)。")]),t._v(" "),r("p",[r("img",{attrs:{src:o(1614),alt:"螺旋桨识别"}})])]),t._v(" "),r("li",[r("p",[t._v("使用随附的螺旋桨螺母将其拧紧：")]),t._v(" "),r("p",[r("img",{attrs:{src:o(1615),alt:"螺旋桨螺母"}})])])])])]),t._v(" "),r("h2",{attrs:{id:"测试飞行-带避障"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#测试飞行-带避障"}},[t._v("#")]),t._v(" 测试飞行（带避障）")]),t._v(" "),r("p",[r("em",[t._v("PX4 避障")]),t._v(" 系统由计算机视觉软件组成，这种软件运行在一个配套的计算机上(附着的深度摄像头)，向运行在 "),r("em",[t._v("飞行控制器")]),t._v(" 上的PX4飞行堆栈提供障碍和/或路线信息。")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("连接电池来给载具供电")])]),t._v(" "),r("li",[r("p",[t._v("找到一个安全的户外位置进行飞行，最好是用树或其他方便的障碍测试PX4视觉。")])])]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),r("p",[t._v("从U盘启动/开始的流程大概会要1分钟（从 "),r("a",{attrs:{href:"#install_image_mission_computer"}},[t._v("内部存储")]),t._v(" 大概需要30s）")])]),t._v(" "),r("ol",[r("li",[r("p",[t._v("检查避障系统是否已经正常启动")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("使用套件中的 USB-JST电缆获取一个 USB A 连接器")]),t._v(" "),r("p",[r("img",{attrs:{src:o(1616),alt:"USB 转 JST 线"}})])]),t._v(" "),r("li",[r("p",[t._v("如果键盘和鼠标具有单独的接口，则可以将USB集线器连接到电缆。")])])])]),t._v(" "),r("li",[r("p",[t._v("等待 GPS 的 LED 变成绿色。 这意味着无人机的GPS已定位并且准备好起飞！")])]),t._v(" "),r("li",[r("p",[t._v("将预先烧录的USB驱动器插入标有 "),r("code",[t._v("USB1")]),t._v(" 的 "),r("em",[t._v("UP Core")]),t._v(" 端口中。")])]),t._v(" "),r("li",[r("p",[t._v("找到一个安全的户外位置进行飞行，最好是用树或其他方便的障碍测试PX4视觉。")])]),t._v(" "),r("li",[r("p",[t._v("测试 "),r("RouterLink",{attrs:{to:"/zh/computer_vision/collision_prevention.html"}},[t._v("防止碰撞")]),t._v(", 启用 "),r("RouterLink",{attrs:{to:"/zh/flight_modes/position_mc.html"}},[t._v("位置模式")]),t._v(" 并手动向障碍飞行。 无人机应减速，然后在障碍物距离小于6米时悬停(通过 "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#CP_DIST"}},[t._v("CP_DIST")]),t._v(" 参数，距离 "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameters.html"}},[t._v("可调整")]),t._v("  )。")],1)]),t._v(" "),r("li",[r("p",[t._v("要测试 "),r("RouterLink",{attrs:{to:"/zh/computer_vision/obstacle_avoidance.html"}},[t._v("避障")]),t._v("，创建一个被障碍阻止的路径。 然后切换到 "),r("RouterLink",{attrs:{to:"/zh/flight_modes/mission.html"}},[t._v("任务模式")]),t._v(" 来运行任务。并观察无人机绕开障碍物，然后返回计划路线。")],1)])]),t._v(" "),r("h2",{attrs:{id:"使用套件开发"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用套件开发"}},[t._v("#")]),t._v(" 使用套件开发")]),t._v(" "),r("p",[t._v("The following sections explain how to use the kit as an environment for developing computer vision software.")]),t._v(" "),r("h3",{attrs:{id:"px4-避障概述"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#px4-避障概述"}},[t._v("#")]),t._v(" PX4 避障概述")]),t._v(" "),r("p",[t._v("您可以在 "),r("em",[t._v("UP Core")]),t._v(" 上安装镜像，并从内部内存启动(而不是U盘)。")]),t._v(" "),r("p",[t._v("Documentation about the companion computer vision/planning software can be found on github here: "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Avoidance",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4/PX4-Avoidance"),r("OutboundLink")],1),t._v(". The project provides a number of different planner implementations (packaged as ROS nodes):")]),t._v(" "),r("ul",[r("li",[t._v("您需要通过 "),r("strong",[t._v("USB")]),t._v(" 将 "),r("em",[t._v("QGroundControl")]),t._v(" 连接到套件的 "),r("em",[t._v("Pixhawk 4")]),t._v(" 来更新固件。")]),t._v(" "),r("li",[t._v("加载新固件后选择 "),r("em",[t._v("PX4 Vision DevKit")]),t._v(" 机架：")]),t._v(" "),r("li",[r("em",[t._v("降落计划器")]),t._v(" 需要一个向下的摄像头，并且必须先修改相机的安装座才能使用。")])]),t._v(" "),r("p",[t._v("将USB镜像刷新到UP Core：")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://wiki.up-community.org/Ubuntu",target:"_blank",rel:"noopener noreferrer"}},[r("em",[t._v("UP Core")]),t._v(" Wiki"),r("OutboundLink")],1),t._v(" - 机载计算机技术信息")]),t._v(" "),r("li",[r("a",{attrs:{href:"https://structure.io/developers",target:"_blank",rel:"noopener noreferrer"}},[t._v("Occipital Developer Forum"),r("OutboundLink")],1),t._v(" - "),r("em",[t._v("结构核心")]),t._v(" 相机信息")])]),t._v(" "),r("p",[r("span",{attrs:{id:"install_image_mission_computer"}})]),t._v(" "),r("h3",{attrs:{id:"在机载计算机上安装镜像"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#在机载计算机上安装镜像"}},[t._v("#")]),t._v(" 在机载计算机上安装镜像")]),t._v(" "),r("p",[t._v("You can install the image on the "),r("em",[t._v("UP Core")]),t._v(" and boot from internal memory (instead of the USB stick).")]),t._v(" "),r("p",[t._v("要将USB映像刷到 "),r("em",[t._v("UP Core")]),t._v(" ：")]),t._v(" "),r("p",[t._v("首先将提供的 USB2.0 U盘插入标有 "),r("code",[t._v("USB1")]),t._v(" 的 "),r("em",[t._v("UP Core")]),t._v(" 端口，然后使用4S电池为无人机供电。 避障系统应在大约1分钟内启动(这取决于所提供的U盘)。")]),t._v(" "),r("p",[t._v("To flash the USB image to the "),r("em",[t._v("UP Core")]),t._v(":")]),t._v(" "),r("ol",[r("li",[t._v("将预先烧录的USB驱动器插入标有 "),r("code",[t._v("USB1")]),t._v(" 的 "),r("em",[t._v("UP Core")]),t._v(" 端口中。")]),t._v(" "),r("li")]),t._v(" "),r("p",[t._v("登录到配套计算机<0> （如上所述）。")]),t._v(" "),r("p",[t._v("1 打开终端，然后运行以下命令将映像复制到内部存储器（eMMC）。 终端将在刷新过程中提示您一些响应。")]),t._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~/catkin_ws/src/px4vision_ros/tools\n"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" ./flash_emmc.sh\n")])])]),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),r("p",[t._v("执行此脚本时，将删除 "),r("em",[t._v("UP Core")]),t._v(" 计算机中保存的所有信息。")])]),t._v(" "),r("p",[t._v("1 拔出U盘。")]),t._v(" "),r("p",[t._v("1 重启无人机， "),r("em",[t._v("UP Core")]),t._v(" 计算机现在将从内部内存（eMMC）引导。")]),t._v(" "),r("h3",{attrs:{id:"boot-the-companion-computer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#boot-the-companion-computer"}},[t._v("#")]),t._v(" Boot the Companion Computer")]),t._v(" "),r("p",[t._v("PX4 视觉的 "),r("em",[t._v("UP Core")]),t._v(" 计算机为扩展PX4规避软件（以及更广泛地用于使用ROS2开发新的计算机视觉算法）提供了完整且配置完整的环境。 您可以在无人机上开发和测试您的软件，将其同步到自己的git存储库，并在github "),r("a",{attrs:{href:"https://github.com/PX4/avoidance",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4/Avoidance"),r("OutboundLink")],1),t._v(" 存储库上与更广泛的PX4社区共享所有修复和改进。")]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),r("p",[r("a",{attrs:{href:"#fly-the-drone-with-avoidance"}},[t._v("Fly the Drone with Avoidance")]),t._v(" additionally explains how to verify that the avoidance system is active.")])]),t._v(" "),r("p",[t._v("If you've already "),r("a",{attrs:{href:"#install_image_mission_computer"}},[t._v("installed the image on the companion computer")]),t._v(" you can just power the vehicle (i.e. no USB stick is needed). The avoidance system should be up and running within around 30 seconds.")]),t._v(" "),r("p",[t._v("Once started the companion computer can be used both as a computer vision development environment and for running the software.")]),t._v(" "),r("p",[r("a",{attrs:{id:"login_mission_computer"}})]),t._v(" "),r("h3",{attrs:{id:"登录机载计算机"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#登录机载计算机"}},[t._v("#")]),t._v(" 登录机载计算机")]),t._v(" "),r("p",[t._v("To login to the companion computer:")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("通过端口 "),r("code",[t._v("USB2")]),t._v(" 将键盘和鼠标连接到 "),r("em",[t._v("UP Core")]),t._v("：")]),t._v(" "),r("p",[r("img",{attrs:{src:o(1617),alt:"UP Core：USB2"}})]),t._v(" "),r("ul",[r("li",[r("p",[t._v("使用套件中的 USB-JST电缆获取一个 USB A 连接器")]),t._v(" "),r("p",[r("img",{attrs:{src:o(1618),alt:"USB 转 JST 线"}})])]),t._v(" "),r("li",[r("p",[t._v("如果键盘和鼠标具有单独的接口，则可以将USB集线器连接到电缆。")]),t._v(" "),r("ol",[r("li",[t._v("连接显示器到 "),r("em",[t._v("UP Core")]),t._v(" 的 HDMI 接口。\n"),r("img",{attrs:{src:o(1619),alt:"UP Core：HDMI 端口"}})])])])])])]),t._v(" "),r("p",[t._v("Ubuntu 登录屏幕应显示在显示器上。")]),t._v(" "),r("ol",[r("li",[t._v("使用凭据登录到 "),r("em",[t._v("UP Core")]),t._v("：\n"),r("ul",[r("li",[t._v("**用户名：**px4vision")]),t._v(" "),r("li",[t._v("**密码：**px4vision")])])])]),t._v(" "),r("h3",{attrs:{id:"开发-扩展-px4-避障功能"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#开发-扩展-px4-避障功能"}},[t._v("#")]),t._v(" 开发/扩展 PX4 避障功能")]),t._v(" "),r("p",[t._v("避障程序包在引导时启动。 You should develop and test your software on the vehicle, sync it to your own git repository, and share any fixes and improvements with the wider PX4 community on the github "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Avoidance",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4/PX4-Avoidance"),r("OutboundLink")],1),t._v(" repo.")]),t._v(" "),r("p",[t._v("ROS 工作区位于 "),r("code",[t._v("~/catkin_ws")]),t._v("。 有关在 ROS 中进行开发以及使用 catkin 工作区的参考，请参见 "),r("a",{attrs:{href:"http://wiki.ros.org/catkin/Tutorials",target:"_blank",rel:"noopener noreferrer"}},[t._v("ROS catkin教程"),r("OutboundLink")],1),t._v("。")]),t._v(" "),r("p",[t._v("The avoidance package is started on boot. To integrate a different planner, this needs to be disabled.")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("使用以下指令禁用避障程序：")]),t._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[t._v("systemctl stop avoidance.service\n")])])])])]),t._v(" "),r("p",[t._v("您只需重启机器即可重启服务。")]),t._v(" "),r("p",[t._v("其他有用的指令是：")]),t._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# restart service")]),t._v("\nsystemctl start avoidance.service\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# disable service (stop service and do not restart after boot)")]),t._v("\nsystemctl disable avoidance.service\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# enable service (start service and enable restart after boot)")]),t._v("\nsystemctl "),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v(" avoidance.service  \n")])])]),r("ol",[r("li",[r("p",[t._v("The source code of the obstacle avoidance package can be found in https://github.com/PX4/PX4-Avoidance which is located in "),r("code",[t._v("~/catkin_ws/src/avoidance")]),t._v(".")])]),t._v(" "),r("li",[r("p",[t._v("更改代码！ 要获取最新的避障代码，请从避障仓库中提取代码：")]),t._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull origin\n"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout origin/master\n")])])])]),t._v(" "),r("li",[r("p",[t._v("构建软件包")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("catkin build local_planner\n")])])])])]),t._v(" "),r("p",[t._v("The ROS workspace is placed in "),r("code",[t._v("~/catkin_ws")]),t._v(". For reference on developing in ROS and using the catkin workspace, see the "),r("a",{attrs:{href:"http://wiki.ros.org/catkin/Tutorials",target:"_blank",rel:"noopener noreferrer"}},[t._v("ROS catkin tutorials"),r("OutboundLink")],1),t._v(".")]),t._v(" "),r("h3",{attrs:{id:"开发-px4-固件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#开发-px4-固件"}},[t._v("#")]),t._v(" 开发 PX4 固件")]),t._v(" "),r("p",[t._v("The kit is designed for creating computer vision software that runs on the companion computer, and which integrates with PX4’s flexible path planning and collision prevention interfaces.")]),t._v(" "),r("p",[t._v("可从 "),r("a",{attrs:{href:"http://www.holybro.com/manual/PX4_Vision_carrier_board_pinouts_v1.1.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Holybro的网站"),r("OutboundLink")],1),t._v(" 下载载板的引脚 。")]),t._v(" "),r("ul",[r("li",[t._v("You will need to connect "),r("em",[t._v("QGroundControl")]),t._v(" to the kit's "),r("em",[t._v("Pixhawk")]),t._v(" "),r("strong",[t._v("via USB")]),t._v(" in order to update firmware.")]),t._v(" "),r("li",[t._v("加载新固件后选择 "),r("em",[t._v("PX4 Vision DevKit")]),t._v(" 机架： "),r("img",{attrs:{src:o(1620),alt:"机身选择 - PX4 Vision DevKit"}})])]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),r("p",[t._v("Modification of PX4 code is not "),r("em",[t._v("needed")]),t._v(" to meet most computer vision use cases. To discuss the interfaces or how to integrate other features join the "),r("RouterLink",{attrs:{to:"/zh/contribute/support.html"}},[t._v("PX4 support channels")]),t._v(".")],1)]),t._v(" "),r("h2",{attrs:{id:"px4-vision-carrier-board-pinouts"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#px4-vision-carrier-board-pinouts"}},[t._v("#")]),t._v(" PX4 Vision Carrier Board Pinouts")]),t._v(" "),r("p",[t._v("Information for the PX4 Vision 1.15 can be found at "),r("a",{attrs:{href:"https://docs.holybro.com/drone-development-kit/px4-vision-dev-kit-v1.5",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://docs.holybro.com"),r("OutboundLink")],1),t._v(". The carrier board pinouts and other information are in the "),r("a",{attrs:{href:"https://docs.holybro.com/drone-development-kit/px4-vision-dev-kit-v1.5/downloads",target:"_blank",rel:"noopener noreferrer"}},[t._v("downloads section"),r("OutboundLink")],1),t._v(".")]),t._v(" "),r("h2",{attrs:{id:"如何获得技术支持"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#如何获得技术支持"}},[t._v("#")]),t._v(" 如何获得技术支持？")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/up-board/up-community/wiki/Ubuntu",target:"_blank",rel:"noopener noreferrer"}},[r("em",[t._v("UP Core")]),t._v(" Wiki"),r("OutboundLink")],1),t._v(" - "),r("em",[t._v("Up Core")]),t._v(" companion computer technical information")]),t._v(" "),r("li",[r("a",{attrs:{href:"https://structure.io/developers",target:"_blank",rel:"noopener noreferrer"}},[t._v("Occipital Developer Forum"),r("OutboundLink")],1),t._v(" - "),r("em",[t._v("结构核心")]),t._v(" 相机信息")]),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk4.html"}},[t._v("Pixhawk 4 概述")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk6c.html"}},[t._v("Pixhawk 6C Overview")])],1),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/PX4/PX4-Avoidance",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4 避障软件/文档"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/zh/computer_vision/path_planning_interface.html"}},[t._v("路径规划接口")])],1)]),t._v(" "),r("h2",{attrs:{id:"如何获得技术支持-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#如何获得技术支持-2"}},[t._v("#")]),t._v(" 如何获得技术支持")]),t._v(" "),r("p",[t._v("For hardware issues, please contact Holybro at: "),r("a",{attrs:{href:"mailto:productservice@holybro.com"}},[t._v("productservice@holybro.com")]),t._v(".")]),t._v(" "),r("p",[t._v("For software issues, use the following community support channels:")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://wikifactory.com/+holybro/px4-vision",target:"_blank",rel:"noopener noreferrer"}},[t._v("Holybro PX4 Vision Wikifactory 资料库"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/zh/contribute/support.html"}},[t._v("PX4 Support channels")])],1)])])}),[],!1,null,null,null);e.default=i.exports}}]);