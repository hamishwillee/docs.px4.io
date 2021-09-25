(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{2719:function(t,e,r){"use strict";r.r(e);var v=r(19),a=Object(v.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"px4-vision-视觉自主开发套件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#px4-vision-视觉自主开发套件"}},[t._v("#")]),t._v(" PX4 Vision 视觉自主开发套件")]),t._v(" "),v("p",[v("a",{attrs:{href:"http://www.holybro.com/product/px4-vision/",target:"_blank",rel:"noopener noreferrer"}},[v("em",[t._v("PX4 Vision 视觉自主开发套件")]),v("OutboundLink")],1),t._v(" 是一个稳定且高性价比的套件，让你能够在自动化载具上开发计算机视觉。")]),t._v(" "),v("p",[v("img",{attrs:{src:r(586),alt:"综述"}})]),t._v(" "),v("p",[t._v("这个套件含有一个几乎到手即飞的碳纤维机架四旋翼，配备 "),v("em",[t._v("Pixhawk 4飞控")]),t._v(" ， "),v("em",[t._v("UP Core")]),t._v(" 机载计算机（4GB 内存和64GB eMMC），以及"),v("em",[t._v("Structure Core")]),t._v(" 深度相机。")]),t._v(" "),v("div",{staticClass:"custom-block note"},[v("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),v("p",[t._v("该无人机发货时没有预先安装软件。 预装镜像的 U 盘包含 "),v("RouterLink",{attrs:{to:"/zh/computer_vision/obstacle_avoidance.html"}},[t._v("PX4/Avoidance")]),t._v(" 本地规划软件的参考实现，由 "),v("em",[t._v("Auterion")]),t._v(" 提供。 该软件仅提供一个非常基本的示例，说明您可以使用 PX4 Vision 自主套件做什么。 开发者可以使用套件来尝试 "),v("a",{attrs:{href:"https://github.com/PX4/avoidance#obstacle-detection-and-avoidance",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4 避障"),v("OutboundLink")],1),t._v(" 项目提供的其他功能。 修改现有代码，或尝试全新的计算机视觉功能。")],1)]),t._v(" "),v("p",[t._v("该指南阐述了无人机准备飞行所需的最少附加步骤（安装遥控器系统和电池等）。 也包括如何起飞，以及如何修改计算机视觉代码。")]),t._v(" "),v("h2",{attrs:{id:"px4-vision-自主无人机开发套件-先行者版"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#px4-vision-自主无人机开发套件-先行者版"}},[t._v("#")]),t._v(" PX4 Vision 自主无人机开发套件（先行者版）")]),t._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"https://item.taobao.com/item.htm?id=609418685176",target:"_blank",rel:"noopener noreferrer"}},[t._v("购买链接（中国大陆地区及港澳地区由淘宝店“地面售货站”提供销售）"),v("OutboundLink")],1)])]),t._v(" "),v("h2",{attrs:{id:"警告-通知"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#警告-通知"}},[t._v("#")]),t._v(" 警告&通知")]),t._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"#warnings-and-notifications"}},[t._v("警告&通知")])]),t._v(" "),v("li",[v("a",{attrs:{href:"#what-is-inside"}},[t._v("包装内容")])]),t._v(" "),v("li",[v("a",{attrs:{href:"#what-else-do-you-need"}},[t._v("其他注意事项")])]),t._v(" "),v("li",[v("a",{attrs:{href:"#first-time-setup"}},[t._v("首次使用")])]),t._v(" "),v("li",[v("a",{attrs:{href:"#fly-the-drone-with-avoidance"}},[t._v("试飞无人机（带避障）")])]),t._v(" "),v("li",[v("a",{attrs:{href:"#development-using-the-kit"}},[t._v("使用套件开发")])]),t._v(" "),v("li",[v("a",{attrs:{href:"#px4-vision-carrier-board-pinouts"}},[t._v("Px4 Vision 载板引脚排列")])]),t._v(" "),v("li",[v("a",{attrs:{href:"#other-development-resources"}},[t._v("其他拓展资源")])]),t._v(" "),v("li",[v("a",{attrs:{href:"#how-to-get-technical-support"}},[t._v("如何获得技术支持")])])]),t._v(" "),v("h2",{attrs:{id:"开始了解你的开发套件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#开始了解你的开发套件"}},[t._v("#")]),t._v(" 开始了解你的开发套件")]),t._v(" "),v("ol",[v("li",[t._v("不要直接使用电源为 "),v("em",[t._v("UP Core")]),t._v(" 计算机供电（可能会摧毁计算机）。 "),v("em",[t._v("UP Core")]),t._v(" 只能使用电池供电。")]),t._v(" "),v("li",[t._v("该开发包使用前置摄像头，（它没有向下或后置深照相机）。 因此，它不能用于测试 "),v("RouterLink",{attrs:{to:"/zh/computer_vision/safe_landing.html"}},[t._v("安全着陆")]),t._v(" 或其他需要下方摄像头的功能。")],1),t._v(" "),v("li",[t._v("只有在 GPS 工作正常时才能测试任务模式中的自主避障（飞行任务需要使用 GPS 配合）。 防撞功能需要在可获得位置的模式下进行测试，比如GPS或光流有比较好的定位。")]),t._v(" "),v("li",[v("em",[t._v("UP Core")]),t._v(" 只能使用电池供电(请勿卸下 "),v("em",[t._v("UP Core")]),t._v(" 电源安全盖)。 "),v("img",{attrs:{src:r(587),alt:"RC Number"}}),t._v(" "),v("img",{attrs:{src:r(588),alt:"ECN Number"}})])]),t._v(" "),v("div",{staticClass:"custom-block warning"},[v("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),v("p",[t._v("For PX4 Vision with ECN below 010/carrier board below RC04, the "),v("em",[t._v("UP Core")]),t._v(" should only be powered using the battery (do not remove the "),v("em",[t._v("UP Core power")]),t._v(" socket safety cover).")]),t._v(" "),v("p",[v("img",{attrs:{src:r(589),alt:"Warning - do not connect power port"}})])]),t._v(" "),v("h2",{attrs:{id:"包装内容"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#包装内容"}},[t._v("#")]),t._v(" 包装内容")]),t._v(" "),v("p",[v("img",{attrs:{src:r(437),alt:"Whats inside"}})]),t._v(" "),v("p",[v("img",{attrs:{src:r(590),alt:"Whats inside"}})]),t._v(" "),v("img",{attrs:{src:r(437),width:"500px",title:"Pixhawk4 Upright Image"}}),t._v(" "),v("p",[t._v("当无人机按上述安装完成时：")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("核心组件：")]),t._v(" "),v("ul",[v("li",[t._v("一个Pixhawk 4飞控（包含定制化的PX4固件）")]),t._v(" "),v("li",[t._v("一个 PMW3901 光流传感器")]),t._v(" "),v("li",[t._v("一个 TOF 红外距离传感器(PSK‐CM8JL65‐CC5)")]),t._v(" "),v("li",[t._v("一个 Structure Core 深度相机\n"),v("ul",[v("li",[t._v("160 深度视图摄像机")]),t._v(" "),v("li",[t._v("立体红外摄像头")]),t._v(" "),v("li",[t._v("板载传感器")]),t._v(" "),v("li",[t._v("强大的 NU3000 多核深度处理器")])])]),t._v(" "),v("li",[t._v("一个 "),v("em",[t._v("UP Core")]),t._v(" 计算机 (4GB 内存；64GB eMMC 带 Ubuntu 系统和 PX4 避障)\n"),v("ul",[v("li",[t._v("Intel® AtomTM x5-z8350 (up to 1.92 GHz)")]),t._v(" "),v("li",[t._v("兼容的操作系统: Microsoft Windows 10 完整版本, Linux (ubilinux, Ubuntu, Yocto), Android")]),t._v(" "),v("li",[t._v("FTDI UART 连接到飞控")]),t._v(" "),v("li",[v("code",[t._v("USB1")]),t._v("：USB3-A 接口被用来从 USB2.0 储存器启动 PX4 避障环境（连接到 USB3.0 外设可能会导致GPS无法使用）。")]),t._v(" "),v("li",[v("code",[t._v("USB2")]),t._v("：USB 2.0 接口，用于连接 JST-GH 插接件。 可以用于第二个相机，LTE模块等。 （或开发期间使用的键盘/鼠标）。")]),t._v(" "),v("li",[v("code",[t._v("USB3")]),t._v("：USB 2.0 JST-GH 端口连接到深度摄像头")]),t._v(" "),v("li",[v("code",[t._v("HDMI")]),t._v("：HDMI 输出")]),t._v(" "),v("li",[t._v("SD 卡插槽")]),t._v(" "),v("li",[t._v("WiFi 802.11 b/g/n @ 2.4 GHz (连接到外部1号天线)。 允许计算机进行 WiFi 家庭网络访问/更新。")])])])])]),t._v(" "),v("li",[v("p",[t._v("机械规格：")]),t._v(" "),v("ul",[v("li",[t._v("框架：全 5mm 3k 碳纤纹")]),t._v(" "),v("li",[t._v("电机：T-MOTOR F60 PROⅢ KV1750")]),t._v(" "),v("li",[t._v("电调: BEHEli-S 20A ESC")]),t._v(" "),v("li",[t._v("桨：T6045")]),t._v(" "),v("li",[t._v("GPS: Pixhawk4 GPS 模块")]),t._v(" "),v("li",[t._v("电源模块： Holybro PM07")]),t._v(" "),v("li",[t._v("轴距：286毫米")]),t._v(" "),v("li",[t._v("重量：854克（无电池和桨）")]),t._v(" "),v("li",[t._v("数传：连接飞行控制器的ESP8266（连接外部2号天线）。 实现与地面站的无线连接。")])])]),t._v(" "),v("li",[v("p",[t._v("带有 Auterion 提供的预刷新软件的 USB2.0 盘，其附带：")]),t._v(" "),v("ul",[v("li",[t._v("Ubuntu 18.04 LTS")]),t._v(" "),v("li",[t._v("ROS Melodic")]),t._v(" "),v("li",[t._v("Occipital Structure Core 相机 ROS 驱动")]),t._v(" "),v("li",[t._v("MAVROS")]),t._v(" "),v("li",[v("a",{attrs:{href:"https://github.com/PX4/avoidance#obstacle-detection-and-avoidance",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4 Avoidance 避障库"),v("OutboundLink")],1)])])]),t._v(" "),v("li",[v("p",[t._v("各种导线、8个螺旋桨、2个电池带（已安装）和其他附件（可用于连接其他外围设备）。")])])]),t._v(" "),v("h2",{attrs:{id:"其他注意事项"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#其他注意事项"}},[t._v("#")]),t._v(" 其他注意事项")]),t._v(" "),v("p",[t._v("以下各节说明如何将工具包用作开发计算机视觉软件的环境。")]),t._v(" "),v("ul",[v("li",[t._v("电池：\n"),v("ul",[v("li",[t._v("带 XT60 母头的 4S 锂电池")]),t._v(" "),v("li",[t._v("长度小于115毫米（以适合电源插座和 GPS 支架之间的空间）")])])]),t._v(" "),v("li",[t._v("无线电控制系统\n"),v("ul",[v("li",[t._v("可以使用各种 "),v("RouterLink",{attrs:{to:"/zh/getting_started/rc_transmitter_receiver.html"}},[t._v("PX4 兼容的遥控系统")]),t._v("。")],1),t._v(" "),v("li",[t._v("带有 R-XSR 接收机的 "),v("em",[t._v("FrSky Taranis")]),t._v(" 发射机是一个受欢迎的配置。")])])]),t._v(" "),v("li",[t._v("一个 H2.0 头的内六角螺丝刀（用来打开顶部的螺丝来安装接收机）")])]),t._v(" "),v("p",[v("em",[t._v("PX4 避障")]),t._v(" 系统由计算机视觉软件组成，这种软件运行在一个配套的计算机上(附着的深度摄像头)，为运行在一个 "),v("em",[t._v("飞控上的 PX4 飞行堆栈提供障碍和/或航线信息")])]),t._v(" "),v("ul",[v("li",[t._v("可运行 "),v("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/getting_started/download_and_install.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGC地面站（QGroundControl）"),v("OutboundLink")],1),t._v(" 的笔记本电脑或者平板。")])]),t._v(" "),v("h2",{attrs:{id:"首次使用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#首次使用"}},[t._v("#")]),t._v(" 首次使用")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("将一个 "),v("RouterLink",{attrs:{to:"/zh/getting_started/rc_transmitter_receiver.html#connecting-receivers"}},[t._v("兼容的遥控接收器")]),t._v(" 连接到无人机上（未随套件提供）：")],1),t._v(" "),v("ul",[v("li",[t._v("使用 H2.0 头的内六角螺丝刀移除/取消顶部板块(在电池进入的地方)。")]),t._v(" "),v("li",[v("RouterLink",{attrs:{to:"/zh/assembly/quick_start_pixhawk4.html#radio-control"}},[t._v("将接收器连接到飞控")]),t._v("。")],1),t._v(" "),v("li",[t._v("重新安装上面的外壳。")]),t._v(" "),v("li",[t._v("在无人机背部安装RC 接收器(使用双面胶或其他)。")]),t._v(" "),v("li",[t._v("确保天线无障碍物阻挡并将天线和机架电隔离。例如，在减震板下方或机臂上。")])])]),t._v(" "),v("li",[v("p",[v("RouterLink",{attrs:{to:"/zh/getting_started/rc_transmitter_receiver.html#binding"}},[t._v("Bind")]),t._v(" 遥控和接收机配对(如果尚未完成)。 配对方法程序取决于接收机和遥控器（读取接收器手册）。")],1)]),t._v(" "),v("li",[v("p",[t._v("GPS需要高于无人机，并固定到底板。")]),t._v(" "),v("p",[v("img",{attrs:{src:r(591),alt:"提升GPS映射"}})])]),t._v(" "),v("li",[v("p",[t._v("将套件中预先烧录好镜像的U盘插入 "),v("em",[t._v("UP Core")]),t._v(" 的端口 "),v("code",[t._v("USB1")]),t._v(" （下面高亮的）")]),t._v(" "),v("p",[v("img",{attrs:{src:r(592),alt:"UP Core：USB1 端口 "}})])]),t._v(" "),v("li",[v("p",[t._v("用充好电的电池的为无人机供电。 :::note 连接电池前要移除螺旋桨。\n:::")])]),t._v(" "),v("li",[v("p",[t._v("使用以下默认凭据将地面站连接到无人机WiFi网络（几秒钟后）：")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("SSID：")]),t._v(" pixhawk4")]),t._v(" "),v("li",[v("strong",[t._v("密码：")]),t._v(" pixhawk4")])])])]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),v("p",[t._v("WiFi 网络 SSID、密码和其他凭据可以在连接后更改(如果需要), 使用 web 浏览器打开 URL： "),v("code",[t._v("http://192. 68.4.1")]),t._v(" 波特率不得从921600更改。")])]),t._v(" "),v("ol",[v("li",[t._v("在地面站启动 "),v("em",[t._v("QGroundControl")]),t._v("。")]),t._v(" "),v("li",[v("RouterLink",{attrs:{to:"/zh/config/"}},[t._v("配置/校准")]),t._v(" 无人机：")],1)]),t._v(" "),v("div",{staticClass:"custom-block note"},[v("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),v("p",[t._v("无人机要进行预先校准(例如使用固件、机架、电池和传感器所有安装)。 您需要校准无线电系统 (您刚刚连接) 并且进行以下的基本检查。")])]),t._v(" "),v("ul",[v("li",[v("RouterLink",{attrs:{to:"/zh/config/radio.html"}},[t._v("校准遥控")])],1),t._v(" "),v("li",[v("RouterLink",{attrs:{to:"/zh/config/compass.html"}},[t._v("校准罗盘")])],1)]),t._v(" "),v("ol",[v("li",[v("p",[t._v("螺旋桨按照下面的方向安装：")]),t._v(" "),v("p",[t._v("我们推荐的遥控设置为：")]),t._v(" "),v("p",[t._v("我们推荐的 RC 控制器开关定义为：")]),t._v(" "),v("ul",[v("li",[t._v("默认情况下，PX4 Vision Kit运行 "),v("em",[t._v("localplanner")]),t._v(" ，这是您自己的软件的推荐起点。")]),t._v(" "),v("li",[v("em",[t._v("globalplanner")]),t._v(" 尚未用这个工具包测试。")]),t._v(" "),v("li",[v("em",[t._v("降落计划器")]),t._v(" 需要一个向下的摄像头，并且必须先修改相机的安装座才能使用。")])])]),t._v(" "),v("li",[v("p",[t._v("按如下所示旋转连接螺旋桨：")]),t._v(" "),v("p",[v("img",{attrs:{src:r(593),alt:"电机顺序示意图"}})]),t._v(" "),v("ul",[v("li",[v("p",[t._v("螺旋桨方向可以从标签中确定："),v("em",[t._v("6045")]),t._v(" (顺时针) 和 "),v("em",[t._v("6045")]),t._v(" "),v("strong",[t._v("R")]),t._v(" (逆时针)。")]),t._v(" "),v("p",[v("img",{attrs:{src:r(594),alt:"螺旋桨识别"}})])]),t._v(" "),v("li",[v("p",[t._v("使用随附的螺旋桨螺母将其拧紧：")]),t._v(" "),v("p",[v("img",{attrs:{src:r(595),alt:"螺旋桨螺母"}})])])])])]),t._v(" "),v("h2",{attrs:{id:"测试飞行-带避障"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#测试飞行-带避障"}},[t._v("#")]),t._v(" 测试飞行（带避障）")]),t._v(" "),v("p",[v("em",[t._v("PX4 避障")]),t._v(" 系统由计算机视觉软件组成，这种软件运行在一个配套的计算机上(附着的深度摄像头)，向运行在 "),v("em",[t._v("飞行控制器")]),t._v(" 上的PX4飞行堆栈提供障碍和/或路线信息。")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("连接电池来给载具供电")])]),t._v(" "),v("li",[v("p",[t._v("找到一个安全的户外位置进行飞行，最好是用树或其他方便的障碍测试PX4视觉。")])])]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),v("p",[t._v("从U盘启动/开始的流程大概会要1分钟（从 "),v("a",{attrs:{href:"#install_image_mission_computer"}},[t._v("内部存储")]),t._v(" 大概需要30s）")])]),t._v(" "),v("ol",[v("li",[v("p",[t._v("检查避障系统是否已经正常启动")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("使用套件中的 USB-JST电缆获取一个 USB A 连接器")]),t._v(" "),v("p",[v("img",{attrs:{src:r(596),alt:"USB 转 JST 线"}})])]),t._v(" "),v("li",[v("p",[t._v("如果键盘和鼠标具有单独的接口，则可以将USB集线器连接到电缆。")])])])]),t._v(" "),v("li",[v("p",[t._v("等待 GPS 的 LED 变成绿色。 这意味着无人机的GPS已定位并且准备好起飞！")])]),t._v(" "),v("li",[v("p",[t._v("将预先烧录的USB驱动器插入标有 "),v("code",[t._v("USB1")]),t._v(" 的 "),v("em",[t._v("UP Core")]),t._v(" 端口中。")])]),t._v(" "),v("li",[v("p",[t._v("找到一个安全的户外位置进行飞行，最好是用树或其他方便的障碍测试PX4视觉。")])]),t._v(" "),v("li",[v("p",[t._v("测试 "),v("RouterLink",{attrs:{to:"/zh/computer_vision/collision_prevention.html"}},[t._v("防止碰撞")]),t._v(", 启用 "),v("RouterLink",{attrs:{to:"/zh/flight_modes/position_mc.html"}},[t._v("位置模式")]),t._v(" 并手动向障碍飞行。 无人机应减速，然后在障碍物距离小于6米时悬停(通过 "),v("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#CP_DIST"}},[t._v("CP_DIST")]),t._v(" 参数，距离 "),v("RouterLink",{attrs:{to:"/zh/advanced_config/parameters.html"}},[t._v("可调整")]),t._v("  )。")],1)]),t._v(" "),v("li",[v("p",[t._v("要测试 "),v("RouterLink",{attrs:{to:"/zh/computer_vision/obstacle_avoidance.html"}},[t._v("避障")]),t._v("，创建一个被障碍阻止的路径。 然后切换到 "),v("RouterLink",{attrs:{to:"/zh/flight_modes/mission.html"}},[t._v("任务模式")]),t._v(" 来运行任务。并观察无人机绕开障碍物，然后返回计划路线。")],1)])]),t._v(" "),v("h2",{attrs:{id:"使用套件开发"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#使用套件开发"}},[t._v("#")]),t._v(" 使用套件开发")]),t._v(" "),v("p",[t._v("The following sections explain how to use the kit as an environment for developing computer vision software.")]),t._v(" "),v("h3",{attrs:{id:"px4-避障概述"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#px4-避障概述"}},[t._v("#")]),t._v(" PX4 避障概述")]),t._v(" "),v("p",[t._v("您可以在 "),v("em",[t._v("UP Core")]),t._v(" 上安装镜像，并从内部内存启动(而不是U盘)。")]),t._v(" "),v("p",[t._v("Documentation about the companion computer vision/planning software can be found on github here: "),v("a",{attrs:{href:"https://github.com/PX4/avoidance#obstacle-detection-and-avoidance",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4/avoidance"),v("OutboundLink")],1),t._v(". The project provides a number of different planner implementations (packaged as ROS nodes):")]),t._v(" "),v("ul",[v("li",[t._v("您需要通过 "),v("strong",[t._v("USB")]),t._v(" 将 "),v("em",[t._v("QGroundControl")]),t._v(" 连接到套件的 "),v("em",[t._v("Pixhawk 4")]),t._v(" 来更新固件。")]),t._v(" "),v("li",[t._v("加载新固件后选择 "),v("em",[t._v("PX4 Vision DevKit")]),t._v(" 机架：")]),t._v(" "),v("li",[v("em",[t._v("降落计划器")]),t._v(" 需要一个向下的摄像头，并且必须先修改相机的安装座才能使用。")])]),t._v(" "),v("p",[t._v("将USB镜像刷新到UP Core：")]),t._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"https://wiki.up-community.org/Ubuntu",target:"_blank",rel:"noopener noreferrer"}},[v("em",[t._v("UP Core")]),t._v(" Wiki"),v("OutboundLink")],1),t._v(" - 机载计算机技术信息")]),t._v(" "),v("li",[v("a",{attrs:{href:"https://structure.io/developers",target:"_blank",rel:"noopener noreferrer"}},[t._v("Occipital Developer Forum"),v("OutboundLink")],1),t._v(" - "),v("em",[t._v("结构核心")]),t._v(" 相机信息")])]),t._v(" "),v("p",[v("span",{attrs:{id:"install_image_mission_computer"}})]),t._v(" "),v("h3",{attrs:{id:"在机载计算机上安装镜像"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#在机载计算机上安装镜像"}},[t._v("#")]),t._v(" 在机载计算机上安装镜像")]),t._v(" "),v("p",[t._v("You can install the image on the "),v("em",[t._v("UP Core")]),t._v(" and boot from internal memory (instead of the USB stick).")]),t._v(" "),v("p",[t._v("要将USB映像刷到 "),v("em",[t._v("UP Core")]),t._v(" ：")]),t._v(" "),v("p",[t._v("首先将提供的 USB2.0 U盘插入标有 "),v("code",[t._v("USB1")]),t._v(" 的 "),v("em",[t._v("UP Core")]),t._v(" 端口，然后使用4S电池为无人机供电。 避障系统应在大约1分钟内启动(这取决于所提供的U盘)。")]),t._v(" "),v("p",[t._v("To flash the USB image to the "),v("em",[t._v("UP Core")]),t._v(":")]),t._v(" "),v("ol",[v("li",[t._v("将预先烧录的USB驱动器插入标有 "),v("code",[t._v("USB1")]),t._v(" 的 "),v("em",[t._v("UP Core")]),t._v(" 端口中。")]),t._v(" "),v("li")]),t._v(" "),v("p",[t._v("登录到配套计算机<0> （如上所述）。")]),t._v(" "),v("p",[t._v("1 打开终端，然后运行以下命令将映像复制到内部存储器（eMMC）。 终端将在刷新过程中提示您一些响应。")]),t._v(" "),v("div",{staticClass:"language-sh extra-class"},[v("pre",{pre:!0,attrs:{class:"language-sh"}},[v("code",[v("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~/catkin_ws/src/px4vision_ros\n"),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" ./flash_emmc.sh\n")])])]),v("div",{staticClass:"custom-block note"},[v("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),v("p",[t._v("执行此脚本时，将删除 "),v("em",[t._v("UP Core")]),t._v(" 计算机中保存的所有信息。")])]),t._v(" "),v("p",[t._v("1 拔出U盘。")]),t._v(" "),v("p",[t._v("1 重启无人机， "),v("em",[t._v("UP Core")]),t._v(" 计算机现在将从内部内存（eMMC）引导。")]),t._v(" "),v("h3",{attrs:{id:"boot-the-companion-computer"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#boot-the-companion-computer"}},[t._v("#")]),t._v(" Boot the Companion Computer")]),t._v(" "),v("p",[t._v("PX4 视觉的 "),v("em",[t._v("UP Core")]),t._v(" 计算机为扩展PX4规避软件（以及更广泛地用于使用ROS2开发新的计算机视觉算法）提供了完整且配置完整的环境。 您可以在无人机上开发和测试您的软件，将其同步到自己的git存储库，并在github "),v("a",{attrs:{href:"https://github.com/PX4/avoidance",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4/Avoidance"),v("OutboundLink")],1),t._v(" 存储库上与更广泛的PX4社区共享所有修复和改进。")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),v("p",[v("a",{attrs:{href:"#fly-the-drone-with-avoidance"}},[t._v("Fly the Drone with Avoidance")]),t._v(" additionally explains how to verify that the avoidance system is active.")])]),t._v(" "),v("p",[t._v("If you've already "),v("a",{attrs:{href:"#install_image_mission_computer"}},[t._v("installed the image on the companion computer")]),t._v(" you can just power the vehicle (i.e. no USB stick is needed). The avoidance system should be up and running within around 30 seconds.")]),t._v(" "),v("p",[t._v("Once started the companion computer can be used both as a computer vision development environment and for running the software.")]),t._v(" "),v("p",[v("a",{attrs:{id:"login_mission_computer"}})]),t._v(" "),v("h3",{attrs:{id:"登录机载计算机"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#登录机载计算机"}},[t._v("#")]),t._v(" 登录机载计算机")]),t._v(" "),v("p",[t._v("To login to the companion computer:")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("通过端口 "),v("code",[t._v("USB2")]),t._v(" 将键盘和鼠标连接到 "),v("em",[t._v("UP Core")]),t._v("：")]),t._v(" "),v("p",[v("img",{attrs:{src:r(597),alt:"UP Core：USB2"}})]),t._v(" "),v("ul",[v("li",[v("p",[t._v("使用套件中的 USB-JST电缆获取一个 USB A 连接器")]),t._v(" "),v("p",[v("img",{attrs:{src:r(598),alt:"USB 转 JST 线"}})])]),t._v(" "),v("li",[v("p",[t._v("如果键盘和鼠标具有单独的接口，则可以将USB集线器连接到电缆。")]),t._v(" "),v("ol",[v("li",[t._v("连接显示器到 "),v("em",[t._v("UP Core")]),t._v(" 的 HDMI 接口。\n"),v("img",{attrs:{src:r(599),alt:"UP Core：HDMI 端口"}})])])])])])]),t._v(" "),v("p",[t._v("Ubuntu 登录屏幕应显示在显示器上。")]),t._v(" "),v("ol",[v("li",[t._v("使用凭据登录到 "),v("em",[t._v("UP Core")]),t._v("：\n"),v("ul",[v("li",[t._v("**用户名：**px4vision")]),t._v(" "),v("li",[t._v("**密码：**px4vision")])])])]),t._v(" "),v("h3",{attrs:{id:"开发-扩展-px4-避障功能"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#开发-扩展-px4-避障功能"}},[t._v("#")]),t._v(" 开发/扩展 PX4 避障功能")]),t._v(" "),v("p",[t._v("避障程序包在引导时启动。 要整合一个不同的计划，需要禁用此项。")]),t._v(" "),v("p",[t._v("ROS 工作区位于 "),v("code",[t._v("~/catkin_ws")]),t._v("。 有关在 ROS 中进行开发以及使用 catkin 工作区的参考，请参见 "),v("a",{attrs:{href:"http://wiki.ros.org/catkin/Tutorials",target:"_blank",rel:"noopener noreferrer"}},[t._v("ROS catkin教程"),v("OutboundLink")],1),t._v("。")]),t._v(" "),v("p",[t._v("The avoidance package is started on boot. To integrate a different planner, this needs to be disabled.")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("使用以下指令禁用避障程序：")]),t._v(" "),v("div",{staticClass:"language-sh extra-class"},[v("pre",{pre:!0,attrs:{class:"language-sh"}},[v("code",[t._v("systemctl stop avoidance.service\n")])])])])]),t._v(" "),v("p",[t._v("您只需重启机器即可重启服务。")]),t._v(" "),v("p",[t._v("其他有用的指令是：")]),t._v(" "),v("div",{staticClass:"language-sh extra-class"},[v("pre",{pre:!0,attrs:{class:"language-sh"}},[v("code",[v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# restart service")]),t._v("\nsystemctl start avoidance.service\n\n"),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# disable service (stop service and do not restart after boot)")]),t._v("\nsystemctl disable avoidance.service\n\n"),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# enable service (start service and enable restart after boot)")]),t._v("\nsystemctl "),v("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v(" avoidance.service  \n")])])]),v("ol",[v("li",[v("p",[t._v("避障碍包的源代码可在 https://github.com/PX4/evidence 中查找，该代码位于 "),v("code",[t._v("~/catkin_ws/src/evering")]),t._v(" 中。")])]),t._v(" "),v("li",[v("p",[t._v("更改代码！ 要获取最新的避障代码，请从避障仓库中提取代码：")]),t._v(" "),v("div",{staticClass:"language-sh extra-class"},[v("pre",{pre:!0,attrs:{class:"language-sh"}},[v("code",[v("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull origin\n"),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout origin/master\n")])])])]),t._v(" "),v("li",[v("p",[t._v("构建软件包")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("catkin build local_planner\n")])])])])]),t._v(" "),v("p",[t._v("The ROS workspace is placed in "),v("code",[t._v("~/catkin_ws")]),t._v(". For reference on developing in ROS and using the catkin workspace, see the "),v("a",{attrs:{href:"http://wiki.ros.org/catkin/Tutorials",target:"_blank",rel:"noopener noreferrer"}},[t._v("ROS catkin tutorials"),v("OutboundLink")],1),t._v(".")]),t._v(" "),v("h3",{attrs:{id:"开发-px4-固件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#开发-px4-固件"}},[t._v("#")]),t._v(" 开发 PX4 固件")]),t._v(" "),v("p",[t._v("The kit is designed for creating computer vision software that runs on the companion computer, and which integrates with PX4’s flexible path planning and collision prevention interfaces.")]),t._v(" "),v("p",[t._v("可从 "),v("a",{attrs:{href:"http://www.holybro.com/manual/PX4_Vision_carrier_board_pinouts_v1.1.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Holybro的网站"),v("OutboundLink")],1),t._v(" 下载载板的引脚 。")]),t._v(" "),v("ul",[v("li",[t._v("您需要通过 "),v("strong",[t._v("USB")]),t._v(" 将 "),v("em",[t._v("QGroundControl")]),t._v(" 连接到套件的 "),v("em",[t._v("Pixhawk 4")]),t._v(" 来更新固件。")]),t._v(" "),v("li",[t._v("加载新固件后选择 "),v("em",[t._v("PX4 Vision DevKit")]),t._v(" 机架： "),v("img",{attrs:{src:r(600),alt:"机身选择 - PX4 Vision DevKit"}})])]),t._v(" "),v("div",{staticClass:"custom-block note"},[v("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),v("p",[t._v("Modification of PX4 code is not "),v("em",[t._v("needed")]),t._v(" to meet most computer vision use cases. To discuss the interfaces or how to integrate other features join the PX4 slack channel: #computer-vision.")])]),t._v(" "),v("h2",{attrs:{id:"其他拓展资源"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#其他拓展资源"}},[t._v("#")]),t._v(" 其他拓展资源")]),t._v(" "),v("p",[t._v("软件问题，请使用以下社区支持频道：")]),t._v(" "),v("h2",{attrs:{id:"如何获得技术支持"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#如何获得技术支持"}},[t._v("#")]),t._v(" 如何获得技术支持？")]),t._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"https://wiki.up-community.org/Ubuntu",target:"_blank",rel:"noopener noreferrer"}},[v("em",[t._v("UP Core")]),t._v(" Wiki"),v("OutboundLink")],1),t._v(" - "),v("em",[t._v("Up Core")]),t._v(" 机载计算机技术信息")]),t._v(" "),v("li",[v("a",{attrs:{href:"https://structure.io/developers",target:"_blank",rel:"noopener noreferrer"}},[t._v("Occipital Developer Forum"),v("OutboundLink")],1),t._v(" - "),v("em",[t._v("结构核心")]),t._v(" 相机信息")]),t._v(" "),v("li",[v("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk4.html"}},[t._v("Pixhawk 4 概述")])],1),t._v(" "),v("li",[v("a",{attrs:{href:"https://github.com/PX4/avoidance",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4 避障软件/文档"),v("OutboundLink")],1)]),t._v(" "),v("li",[v("RouterLink",{attrs:{to:"/zh/computer_vision/path_planning_interface.html"}},[t._v("路径规划接口")])],1),t._v(" "),v("li",[v("a",{attrs:{href:"http://www.holybro.com/manual/PX4_Vision_carrier_board_pinouts_v1.1.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Px4 Vision 载板引脚排列"),v("OutboundLink")],1)])]),t._v(" "),v("h2",{attrs:{id:"如何获得技术支持-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#如何获得技术支持-2"}},[t._v("#")]),t._v(" 如何获得技术支持")]),t._v(" "),v("p",[t._v("For hardware issues, please contact Holybro at: "),v("a",{attrs:{href:"mailto:productservice@holybro.com"}},[t._v("productservice@holybro.com")]),t._v(".")]),t._v(" "),v("p",[t._v("For software issues, use the following community support channels:")]),t._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"https://discuss.px4.io/c/Vision-based-navigation-and-obstacle-avoidance",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4讨论：Computer Vision（计算机视觉）目录。"),v("OutboundLink")],1)]),t._v(" "),v("li",[v("a",{attrs:{href:"https://slack.px4.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4 slack"),v("OutboundLink")],1),t._v(" 频道：#avoidance")]),t._v(" "),v("li",[v("a",{attrs:{href:"https://wikifactory.com/+holybro/px4-vision",target:"_blank",rel:"noopener noreferrer"}},[t._v("Holybro PX4 Vision Wikifactory 资料库"),v("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=a.exports},437:function(t,e,r){t.exports=r.p+"assets/img/Explode-view.c3cc7d66.png"},586:function(t,e,r){t.exports=r.p+"assets/img/px4_vision_kit_hero.8eef78c9.jpg"},587:function(t,e,r){t.exports=r.p+"assets/img/rc.6b6872a5.png"},588:function(t,e){t.exports="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAZABkAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCABVAL0DASIAAhEBAxEB/8QAHAAAAgIDAQEAAAAAAAAAAAAAAAcEBgEDBQII/8QAQxAAAQIEAwIJCQYEBwEAAAAAAQIDAAQFEQYSITGRExU1QVNxcrGyFCIyMzZRYXOBBxY0QlJ0obPC8CMkN2J1g9Jj/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAIDBAUBBv/EAC0RAAICAQMBBgQHAAAAAAAAAAABAhEDBBIhQTEyYXGBkQUTUfAiI1KhscHh/9oADAMBAAIRAxEAPwBu07k9nsiJBUkbSB1mI1O5PZ7Iig/aU863IVAocUkhTdrG3NADG4RH6074zmT7xvj5yTNzPkyP8w7tf/Of0ww33neFlf8AEV6DXP8AAQAyc6L2zC/XBnSPzDfCHq0zMDG0+kPuBIfcsMxtsESa9Mvpq9NAecAMrLXso9KqAHfnTa+Yb4M6T+Yb4SyJh/7rz6uGXcVRABzHZmMFAmH1V6pgvLIEkogFR00gB0507cw0+MGdJ/MN8JCQmXzh3ERLzl0q0OY6ejHQokw8avMAurI4Znao+5MAN/Oj9ad8GdNr5hbrj58qM1MDEFVAfcAHDWGY6edFin5h4YBkVB5eYtC5zG/pCAHCVpG1QH1gzp/UN8JvFkw8mhyBS8sEoeuQo+9MaKhMPii0ch5dy+7c5jr5kAOvOk/mGvxgzoH5hvhKUCYfU5h67zhzTKr3UdfSiLXZmYTiBQD7gGZrQKPvMAPUrSDYqG+DOm9swv1wlMUTD6cVsJS84Bc6BR/QIzUph8Yvyh5wC7WmY9CYAdWdJ2KG+DOk7FDfCOw5MvqplUKnnCRLs2uo/qMTMNTD6jXczyzYotdR01EAOULSTYKG+DOk7FDfCYwhMPrxSpKnlkZHtCo/qMesPTD6pytAvLNjMWuo6ecIAcoWkmwUD1GI7/rj1CFB9mUw+5i5KVvLUOBOhUTzw33/AFx6hAGadyezz+aIXv2m8n1Htt90MKncns9kQvftN5PqPbb7oAWyfwqO1MeGGM/62V+Wz3CFyn8KjtTHhhjP+tlfls9wgCnVf24qH7h3uEScQcsUz9pLfzVRGq/txUP3DvcIk4g5Ypn7SW/mqgDcj2VqH/Ko8RjOHuX6p+yV3RhHsrUP+VR4jGcPcv1T9krugDTT/ZvEfa/8x0KHyxMfOZ7kxz6f7N4j7X/mOhQ+WJj5zPcmAKzUvaGrf93iiyVD/T6Q+UPEmK3UvaGrf93iiyVD/T6Q+UPEmAPGLuQqf2Hu9MaKhyJRvnu+CN+LuQqf2Hu9MaKhyJRvnu+CADD/AKzDv7lX9URK97Qq7bXeYl4f9Zh39yr+qIle9oVdtrvMASsU+1sv1nwCM1P2wHW1/JMYxT7Wy/WfAIzU/bAdbX8kwBow3yXVf2zPiMTMM7a91o7xEPDfJdV/bM+IxMwztr3WjvEAYwd7VK7D/iMesO/jK31zHiEecHe1Suw/4jHrDv4yt9cx4hAHj7L/AGvR8k98OR/1x6hCb+y/2vR8k98OR/1x6hABTCFU5ggEAoG2F99poJp9QsPzt90MGncns9kRHrZbl6a9MGSbmlgCzawPOP1gD59QCZZFgfSmOb/bDGf9bK/LZ7hFmam6e9TWXWqdJuPLzkpQ2MqQPSJ00jOF69K4kLoNPbZUwhBUkgEgnmgBUVe/34qGh9e5zfARJr4JrFM0P4SW/mqh1qpkgpwuKk2Csm5UWxcxlVOkVqClyjKikAAlsaAbIATKQfutUNDyojxGDD3L9U0P4JXdDfnqegU95ElKS3DKGZCXGxlKuYmK1PzkzR32nXZeQVnbyPJbaGi7bCb3/hAC/p4P3bxHofS93ZjoUTSrzJOg4ZnuTFnFSmQ4qQSmnBTjXlCnuAGQi18hF9ukczEFTm5iTyJZZlWJ1bbWdtCRYEDNcg3G7ZEZy2xbL9PhefLHGnVso1QAVW6k8lQW24p2xSb6E7eqOvNrqJwjKJdaZTJBvzFgnOoZhzddoYdPZlZbCKpgU6SS81mbFmgUixtck6n4weWTCZNtlUvIvoZnEy7iw3ZJScvoj36/wiGyT70vY0vU4IcYsSa+srbf7pL0XqLrEL86/SpRmZkuBCUucG4F3DlyN1rfxj3P+dQ6MRqOHd2diGNSpnjKfQzOMSTsu8lzIyGhdrKbWPXHFoTbsrWK5TpViUmpeXBfaChdDKyNgvzc30jy5QaTdphxxajHKcI7ZRVurpq0uvKfK6lUw9fPh3Q/iVf1RErwP3hUbH02ub4mGMqouNIl5hDMi2lhDSlNcCLqKzYlJ5rQeVTNqgFy1PmHmmkvNOFoBJH0ve0XHPKJikH72saHafAIzU7/AHw2Ha1zf/Exenqg8/XENolJNTYShJUpkGy1Jvqb32/CLHTqeVSrblTlJQzn51Nti3uG34QAm8Ng8V1TQ/h2fEYl4Z217rR3iHGimyLaVJRJsJChYgNgXgRT5JvNklGU5/SsgC/XACbwd7VK0/I/4jHrDv42t6HbMeIQ4m6fJNLztyjKFfqSgAxlFPk2yoolWUld81kDW+2AE19l4IxgnQ+pPfDjf9ceoRlmnyUu5wjEoy2vZmQgAxh/1x6hAGadyez2RGyZlmZxhTEwgLbVtSY107k9nm80RJgCJLUuSlEKQxLpQlScpA939mCTpklILWuVl0NKWAFFPOBsiXBABBBC9rlUq0hVpmSamHbSroqBNr3lwLFG8GAGFERylyL015U5LIU9a2cjmihTFUrXAN8FMOpXXEEypt6pV7jq80iMprtUMiK7wr3AsOiVW3b0iBZSrdqALtxDSuB4HyFrg8+e1ueIs7QaHVxNyi2G+FKAhwo0UjQEHr2GODhip1J+omVqMysCnIU4+tQsFZrFO4E7o0VRl7jet1SWnHmlS62FNpbPmq0Re/v0MeNWqZKM5QkpRdNEtp2t4aljTqjSVVem6gTMoLuFP+5HOf7uYzL40ws3KBluUmm0IVmDXk5vmB27ff8AGOW7VJlT7s4qpvJqiJwNNSQ9FTemlra3BOsYl5+cpdMb8nW4FVB1+VZSBol0uHKrdfdFeya4jI3PU4Mn4suLnwdX6U17UdBiszFSmnvurQFNPOea7OzYyJQerW/96REquGathejmoUaeU5MgKVPHg0nhAecAg6DXT6xEQ55BOz62qo8ioNzqEtyw2O3yg3Ftbi+sSQ9OeQibmajMNszU8piYcvoy2Dpb3e68ReLcuXz/AATx69YpJY8aUeqfO7zb/ql1KmjGNWDzTrvkzy2RZBWwkWH0tDboktTH6Yl6WRKrMwgcOZc3QVW1G3QXvpFBpeDaVPzk6+ZxTkmFralUjzS6rKDcH4a83NHDZlqhR22pyj1MqeW2S8yzcLattCk7CP7tGeHzsVuatHZ1S+Ga9RjgkscvKk/Bvw+7HNxXI+VJmvJkcMgAJXziJcJSRxfPol1yjs8+0l1SLug5sllecRfXUX98WNt2ZQl+clKxMTDMpPMty5zBSVIWU5r+/aeqNePLDJ3WfP6rQ6jSOssa8ej9RkQRgaiMxYYwggggAiK/649QiVEV/wBceoQAU3k9jsCJURqdyez2REmACCCCACNamWlqKlNpKinKSRtHujZBAGvgWvM/w0+Z6Ono9UHk7PBlvgkZCblNtLxsggDUWmAVXQgFwWVcDzhBwTBQfMQUqGugsY5Vfpc5UHGHJRaUqauDmURcHQ/wjlpouIENGXTMAMBrJkDm3T380AWcysrwwmSy1wgFg5lFwOuIkzSJd+elpx1ZDcoStDWgRmItmPx1Mc2Spdcalplp+aCszWVoZtAeaPRpNUVT3GXX+HJUhWVa9FWN1Jv7jAHa8nk1uiYDTJcGoXYX3x7VLsLaU0ppBbV6SSnQxW1UOqgqdllIlioABpLhKQL33xsRTcQNTLFpvO0lSVLzLuT+oQBYESrDaUJQyhKW/QASBl6owiTlm3FuIl20rc9NQSLq642xmAOHVMHUOrMlD0ihpfM6yAhY+vP9bxR5zB+JMLPqm6I+ual73KWxdWn6mzor6X+kNSCKZ4ITd9j+p09L8Uz6eOzvQ/S+V/hTcKY6XWBMsVGTLLsoyp1x1sHJlTtuNoPw1547jGJKa/IOz+Z9mVaQFl55haEqSdmUked9Ikz1PRMSU62w20h+aZU2XMtsxKSBmIFza8VaUwXOigTFLmDKsrW23keamHXcy0KuLpUAAOzEfzY8dpbWhzt5K2cri746v79juLxXTGZJycmBNS7Lakgl6WWi+a+Ui41Gh2RPlqlKTc5MSrDmd2XShTlhpZYJSQee4EcioUys1qQRLz7dPbKJhlyzbi1BSUquu908+lhvMZw1h2ZodQqTjj6HZd/g0ywBJWhCM1kquOYKAG3ZElKe5KuCmeHSrDKSlU12K76rrXn9rmwxFf8AXHqESoiv+uPUIuOaRm5syrDbaUBQy6a7IzxorohvgggA40V0Q3wcaK6Ib4IIAONFdEN8HGiuiG+CCADjRXRDfBxorohvgggA40V0Q3wcaK6Ib4IIAONFdEN8HGiuiG+CCADjRXRDfBxorohvgggA40V0Q3wcaK6Ib4IIAONFdEN8HGiuiG+CCADjRXRDfBxorohvgggA40V0Q3wcaK6Ib4IIAONFdEN8SmQH08Krarm90EEAf//Z"},589:function(t,e,r){t.exports=r.p+"assets/img/warning_power_port_update.f5881e9e.png"},590:function(t,e,r){t.exports=r.p+"assets/img/holybro_px4_vision_whats_inside.2a837d93.jpg"},591:function(t,e,r){t.exports=r.p+"assets/img/raise_gps_mast.5081b5cf.jpg"},592:function(t,e,r){t.exports=r.p+"assets/img/upcore_port_usb1.7d4feac6.png"},593:function(t,e,r){t.exports=r.p+"assets/img/motor_order_diagram.64560394.png"},594:function(t,e,r){t.exports=r.p+"assets/img/propeller_directions.4bfa5377.jpg"},595:function(t,e,r){t.exports=r.p+"assets/img/propeller_nuts.2ad4cf8c.jpg"},596:function(t,e,r){t.exports=r.p+"assets/img/qgc_console_vision_system_started.254399c4.jpg"},597:function(t,e,r){t.exports=r.p+"assets/img/upcore_port_usb2.8efb3345.png"},598:function(t,e,r){t.exports=r.p+"assets/img/usb_jst_cable.77e81012.jpg"},599:function(t,e,r){t.exports=r.p+"assets/img/upcore_port_hdmi.8ab92b22.png"},600:function(t,e,r){t.exports=r.p+"assets/img/qgc_airframe_px4_vision_devkit_platform.77e43013.jpg"}}]);