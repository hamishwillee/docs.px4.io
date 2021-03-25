(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{2336:function(t,_,v){"use strict";v.r(_);var e=v(18),r=Object(e.a)({},(function(){var t=this,_=t.$createElement,e=t._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"px4-vision-视觉自主开发套件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#px4-vision-视觉自主开发套件"}},[t._v("#")]),t._v(" PX4 Vision 视觉自主开发套件")]),t._v(" "),e("p",[e("a",{attrs:{href:"http://www.holybro.com/product/px4-vision/",target:"_blank",rel:"noopener noreferrer"}},[e("em",[t._v("PX4 Vision 视觉自主开发套件")]),e("OutboundLink")],1),t._v(" 是一个稳定且高性价比的套件，让你能够在自动化载具上开发计算机视觉。")]),t._v(" "),e("p",[e("img",{attrs:{src:v(588),alt:"综述"}})]),t._v(" "),e("p",[t._v("这个套件含有一个几乎到手即飞的碳纤维机架四旋翼，配备 "),e("em",[t._v("Pixhawk 4飞控")]),t._v(" ， "),e("em",[t._v("UP Core")]),t._v(" 机载计算机（4GB 内存和64GB eMMC），以及"),e("em",[t._v("Structure Core")]),t._v(" 深度相机。")]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),e("p",[t._v("该无人机发货时没有预先安装软件。 预装镜像的 U 盘包含 "),e("RouterLink",{attrs:{to:"/zh/computer_vision/obstacle_avoidance.html"}},[t._v("PX4/Avoidance")]),t._v(" 本地规划软件的参考实现，由 "),e("em",[t._v("Auterion")]),t._v(" 提供。 该软件仅提供一个非常基本的示例，说明您可以使用 PX4 Vision 自主套件做什么。 开发者可以使用套件来尝试 "),e("a",{attrs:{href:"https://github.com/PX4/avoidance#obstacle-detection-and-avoidance",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4 避障"),e("OutboundLink")],1),t._v(" 项目提供的其他功能。 修改现有代码，或尝试全新的计算机视觉功能。")],1)]),t._v(" "),e("p",[t._v("该指南阐述了无人机准备飞行所需的最少附加步骤（安装遥控器系统和电池等）。 也包括如何起飞，以及如何修改计算机视觉代码。")]),t._v(" "),e("h2",{attrs:{id:"px4-vision-自主无人机开发套件-先行者版"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#px4-vision-自主无人机开发套件-先行者版"}},[t._v("#")]),t._v(" PX4 Vision 自主无人机开发套件（先行者版）")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://item.taobao.com/item.htm?id=609418685176",target:"_blank",rel:"noopener noreferrer"}},[t._v("购买链接（中国大陆地区及港澳地区由淘宝店“地面售货站”提供销售）"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"警告-通知"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#警告-通知"}},[t._v("#")]),t._v(" 警告&通知")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#warnings-and-notifications"}},[t._v("警告&通知")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#what-is-inside"}},[t._v("包装内容")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#what-else-do-you-need"}},[t._v("其他注意事项")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#first-time-setup"}},[t._v("首次使用")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#fly-the-drone-with-avoidance"}},[t._v("试飞无人机（带避障）")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#development-using-the-kit"}},[t._v("使用套件开发")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#px4-vision-carrier-board-pinouts"}},[t._v("Px4 Vision 载板引脚排列")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#other-development-resources"}},[t._v("其他拓展资源")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#how-to-get-technical-support"}},[t._v("如何获得技术支持")])])]),t._v(" "),e("h2",{attrs:{id:"开始了解你的开发套件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开始了解你的开发套件"}},[t._v("#")]),t._v(" 开始了解你的开发套件")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("不要直接使用电源为 "),e("em",[t._v("UP Core")]),t._v(" 计算机供电（可能会摧毁计算机）。 "),e("em",[t._v("UP Core")]),t._v(" 只能使用电池供电。")])]),t._v(" "),e("li",[e("p",[t._v("该开发包使用前置摄像头，（它没有向下或后置深照相机）。 因此，它不能用于测试 "),e("RouterLink",{attrs:{to:"/zh/computer_vision/safe_landing.html"}},[t._v("安全着陆")]),t._v(" 或其他需要下方摄像头的功能。")],1)]),t._v(" "),e("li",[e("p",[t._v("只有在 GPS 工作正常时才能测试任务模式中的自主避障（飞行任务需要使用 GPS 配合）。 防撞功能需要在可获得位置的模式下进行测试，比如GPS或光流有比较好的定位。")])]),t._v(" "),e("li",[e("p",[e("em",[t._v("UP Core")]),t._v(" 只能使用电池供电(请勿卸下 "),e("em",[t._v("UP Core")]),t._v(" 电源安全盖)。")]),t._v(" "),e("p",[e("img",{attrs:{src:v(589),alt:"警告 - 不连接电源端口"}})])])]),t._v(" "),e("h2",{attrs:{id:"包装内容"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#包装内容"}},[t._v("#")]),t._v(" 包装内容")]),t._v(" "),e("p",[e("img",{attrs:{src:v(590),alt:"原理图概述"}})]),t._v(" "),e("p",[e("img",{attrs:{src:v(591),alt:"包含内容"}})]),t._v(" "),e("img",{attrs:{src:v(592),width:"500px",title:"Pixhawk4 直观图像"}}),t._v(" "),e("p",[t._v("该套件包含除电池和无线电控制系统之外的所有基本无人机硬件，这些必须单独购买：")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("核心组件：")]),t._v(" "),e("ul",[e("li",[t._v("一个Pixhawk 4飞控（包含定制化的PX4固件）")]),t._v(" "),e("li",[t._v("一个 PMW3901 光流传感器")]),t._v(" "),e("li",[t._v("一个 TOF 红外距离传感器(PSK‐CM8JL65‐CC5)")]),t._v(" "),e("li",[t._v("一个 Structure Core 深度相机\n"),e("ul",[e("li",[t._v("160 深度视图摄像机")]),t._v(" "),e("li",[t._v("立体红外摄像头")]),t._v(" "),e("li",[t._v("板载传感器")]),t._v(" "),e("li",[t._v("强大的 NU3000 多核深度处理器")])])]),t._v(" "),e("li",[t._v("一个 "),e("em",[t._v("UP Core")]),t._v(" 计算机 (4GB 内存；64GB eMMC 带 Ubuntu 系统和 PX4 避障)\n"),e("ul",[e("li",[t._v("Intel® AtomTM x5-z8350 (up to 1.92 GHz)")]),t._v(" "),e("li",[t._v("兼容的操作系统: Microsoft Windows 10 完整版本, Linux (ubilinux, Ubuntu, Yocto), Android")]),t._v(" "),e("li",[t._v("FTDI UART 连接到飞控")]),t._v(" "),e("li",[e("code",[t._v("USB1")]),t._v("：USB3-A 接口被用来从 USB2.0 储存器启动 PX4 避障环境（连接到 USB3.0 外设可能会导致GPS无法使用）。")]),t._v(" "),e("li",[e("code",[t._v("USB2")]),t._v("：USB 2.0 接口，用于连接 JST-GH 插接件。 可以用于第二个相机，LTE模块等。 （或开发期间使用的键盘/鼠标）。")]),t._v(" "),e("li",[e("code",[t._v("USB3")]),t._v("：USB 2.0 JST-GH 端口连接到深度摄像头")]),t._v(" "),e("li",[e("code",[t._v("HDMI")]),t._v("：HDMI 输出")]),t._v(" "),e("li",[t._v("SD 卡插槽")]),t._v(" "),e("li",[t._v("WiFi 802.11 b/g/n @ 2.4 GHz (连接到外部1号天线)。 允许计算机进行 WiFi 家庭网络访问/更新。")])])])])]),t._v(" "),e("li",[e("p",[t._v("机械规格：")]),t._v(" "),e("ul",[e("li",[t._v("框架：全 5mm 3k 碳纤纹")]),t._v(" "),e("li",[t._v("电机：T-MOTOR F60 PROⅢ KV1750")]),t._v(" "),e("li",[t._v("电调: BEHEli-S 20A ESC")]),t._v(" "),e("li",[t._v("桨：T6045")]),t._v(" "),e("li",[t._v("GPS: Pixhawk4 GPS 模块")]),t._v(" "),e("li",[t._v("电源模块： Holybro PM07")]),t._v(" "),e("li",[t._v("轴距：286毫米")]),t._v(" "),e("li",[t._v("重量：854克（无电池和桨）")]),t._v(" "),e("li",[t._v("数传：连接飞行控制器的ESP8266（连接外部2号天线）。 实现与地面站的无线连接。")])])]),t._v(" "),e("li",[e("p",[t._v("带有 Auterion 提供的预刷新软件的 USB2.0 盘，其附带：")]),t._v(" "),e("ul",[e("li",[t._v("Ubuntu 18.04 LTS")]),t._v(" "),e("li",[t._v("ROS Melodic")]),t._v(" "),e("li",[t._v("Occipital Structure Core 相机 ROS 驱动")]),t._v(" "),e("li",[t._v("MAVROS")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/PX4/avoidance#obstacle-detection-and-avoidance",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4 Avoidance 避障库"),e("OutboundLink")],1)])])]),t._v(" "),e("li",[e("p",[t._v("各种导线、8个螺旋桨、2个电池带（已安装）和其他附件（可用于连接其他外围设备）。")])])]),t._v(" "),e("h2",{attrs:{id:"其他注意事项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#其他注意事项"}},[t._v("#")]),t._v(" 其他注意事项")]),t._v(" "),e("p",[t._v("此外，用户也需要地面站硬件/软件：")]),t._v(" "),e("ul",[e("li",[t._v("电池：\n"),e("ul",[e("li",[t._v("带 XT60 母头的 4S 锂电池")]),t._v(" "),e("li",[t._v("长度小于115毫米（以适合电源插座和 GPS 支架之间的空间）")])])]),t._v(" "),e("li",[t._v("无线电控制系统\n"),e("ul",[e("li",[t._v("可以使用各种 "),e("RouterLink",{attrs:{to:"/zh/getting_started/rc_transmitter_receiver.html"}},[t._v("PX4 兼容的遥控系统")]),t._v("。")],1),t._v(" "),e("li",[t._v("带有 R-XSR 接收机的 "),e("em",[t._v("FrSky Taranis")]),t._v(" 发射机是一个受欢迎的配置。")])])]),t._v(" "),e("li",[t._v("一个 H2.0 头的内六角螺丝刀（用来打开顶部的螺丝来安装接收机）")])]),t._v(" "),e("p",[t._v("当无人机按上述安装完成时：")]),t._v(" "),e("ul",[e("li",[t._v("可运行 "),e("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/getting_started/download_and_install.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGC地面站（QGroundControl）"),e("OutboundLink")],1),t._v(" 的笔记本电脑或者平板。")])]),t._v(" "),e("h2",{attrs:{id:"首次使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#首次使用"}},[t._v("#")]),t._v(" 首次使用")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("将一个 "),e("RouterLink",{attrs:{to:"/zh/getting_started/rc_transmitter_receiver.html#connecting-receivers"}},[t._v("兼容的遥控接收器")]),t._v(" 连接到无人机上（未随套件提供）：")],1),t._v(" "),e("ul",[e("li",[t._v("使用 H2.0 头的内六角螺丝刀移除/取消顶部板块(在电池进入的地方)。")]),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/zh/assembly/quick_start_pixhawk4.html#radio-control"}},[t._v("将接收器连接到飞控")]),t._v("。")],1),t._v(" "),e("li",[t._v("重新安装上面的外壳。")]),t._v(" "),e("li",[t._v("在无人机背部安装RC 接收器(使用双面胶或其他)。")]),t._v(" "),e("li",[t._v("确保天线无障碍物阻挡并将天线和机架电隔离。例如，在减震板下方或机臂上。")])])]),t._v(" "),e("li",[e("p",[e("RouterLink",{attrs:{to:"/zh/getting_started/rc_transmitter_receiver.html#binding"}},[t._v("Bind")]),t._v(" 遥控和接收机配对(如果尚未完成)。 配对方法程序取决于接收机和遥控器（读取接收器手册）。")],1)]),t._v(" "),e("li",[e("p",[t._v("GPS需要高于无人机，并固定到底板。")]),t._v(" "),e("p",[e("img",{attrs:{src:v(593),alt:"提升GPS映射"}})])]),t._v(" "),e("li",[e("p",[t._v("将套件中预先烧录好镜像的U盘插入 "),e("em",[t._v("UP Core")]),t._v(" 的端口 "),e("code",[t._v("USB1")]),t._v(" （下面高亮的）")]),t._v(" "),e("p",[e("img",{attrs:{src:v(594),alt:"UP Core：USB1 端口 "}})])]),t._v(" "),e("li",[e("p",[t._v("用充好电的电池的为无人机供电。 :::note 连接电池前要移除螺旋桨。\n:::")])]),t._v(" "),e("li",[e("p",[t._v("使用以下默认凭据将地面站连接到无人机WiFi网络（几秒钟后）：")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("SSID：")]),t._v(" pixhawk4")]),t._v(" "),e("li",[e("strong",[t._v("密码：")]),t._v(" pixhawk4")])])])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),e("p",[t._v("WiFi 网络 SSID、密码和其他凭据可以在连接后更改(如果需要), 使用 web 浏览器打开 URL： "),e("code",[t._v("http://192. 68.4.1")]),t._v(" 波特率不得从921600更改。")])]),t._v(" "),e("ol",[e("li",[t._v("在地面站启动 "),e("em",[t._v("QGroundControl")]),t._v("。")]),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/zh/config/"}},[t._v("配置/校准")]),t._v(" 无人机：")],1)]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),e("p",[t._v("无人机要进行预先校准(例如使用固件、机架、电池和传感器所有安装)。 您需要校准无线电系统 (您刚刚连接) 并且进行以下的基本检查。")])]),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/zh/config/radio.html"}},[t._v("校准遥控")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/zh/config/compass.html"}},[t._v("校准罗盘")])],1)]),t._v(" "),e("ol",[e("li",[e("p",[t._v("螺旋桨按照下面的方向安装：")]),t._v(" "),e("p",[t._v("我们推荐的遥控设置为：")]),t._v(" "),e("p",[t._v("我们推荐的 RC 控制器开关定义为：")]),t._v(" "),e("ul",[e("li",[t._v("默认情况下，PX4 Vision Kit运行 "),e("em",[t._v("localplanner")]),t._v(" ，这是您自己的软件的推荐起点。")]),t._v(" "),e("li",[e("em",[t._v("globalplanner")]),t._v(" 尚未用这个工具包测试。")]),t._v(" "),e("li",[e("em",[t._v("降落计划器")]),t._v(" 需要一个向下的摄像头，并且必须先修改相机的安装座才能使用。")])])]),t._v(" "),e("li",[e("p",[t._v("按如下所示旋转连接螺旋桨：")]),t._v(" "),e("p",[e("img",{attrs:{src:v(595),alt:"电机顺序示意图"}})]),t._v(" "),e("ul",[e("li",[e("p",[t._v("螺旋桨方向可以从标签中确定："),e("em",[t._v("6045")]),t._v(" (顺时针) 和 "),e("em",[t._v("6045")]),t._v(" "),e("strong",[t._v("R")]),t._v(" (逆时针)。")]),t._v(" "),e("p",[e("img",{attrs:{src:v(596),alt:"螺旋桨识别"}})])]),t._v(" "),e("li",[e("p",[t._v("使用随附的螺旋桨螺母将其拧紧：")]),t._v(" "),e("p",[e("img",{attrs:{src:v(597),alt:"螺旋桨螺母"}})])])])])]),t._v(" "),e("h2",{attrs:{id:"测试飞行-带避障"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#测试飞行-带避障"}},[t._v("#")]),t._v(" 测试飞行（带避障）")]),t._v(" "),e("p",[t._v("以下各节说明如何将工具包用作开发计算机视觉软件的环境。")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("连接电池来给载具供电")])]),t._v(" "),e("li",[e("p",[t._v("找到一个安全的户外位置进行飞行，最好是用树或其他方便的障碍测试PX4视觉。")])])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),e("p",[t._v("从U盘启动/开始的流程大概会要1分钟（从 "),e("a",{attrs:{href:"#install_image_mission_computer"}},[t._v("内部存储")]),t._v(" 大概需要30s）")])]),t._v(" "),e("ol",[e("li",[e("p",[t._v("检查避障系统是否已经正常启动")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("使用套件中的 USB-JST电缆获取一个 USB A 连接器")]),t._v(" "),e("p",[e("img",{attrs:{src:v(598),alt:"USB 转 JST 线"}})])]),t._v(" "),e("li",[e("p",[t._v("如果键盘和鼠标具有单独的接口，则可以将USB集线器连接到电缆。")])])])]),t._v(" "),e("li",[e("p",[t._v("等待 GPS 的 LED 变成绿色。 这意味着无人机的GPS已定位并且准备好起飞！")])]),t._v(" "),e("li",[e("p",[t._v("将预先烧录的USB驱动器插入标有 "),e("code",[t._v("USB1")]),t._v(" 的 "),e("em",[t._v("UP Core")]),t._v(" 端口中。")])]),t._v(" "),e("li",[e("p",[t._v("找到一个安全的户外位置进行飞行，最好是用树或其他方便的障碍测试PX4视觉。")])]),t._v(" "),e("li",[e("p",[t._v("测试 "),e("RouterLink",{attrs:{to:"/zh/computer_vision/collision_prevention.html"}},[t._v("防止碰撞")]),t._v(", 启用 "),e("RouterLink",{attrs:{to:"/zh/flight_modes/position_mc.html"}},[t._v("位置模式")]),t._v(" 并手动向障碍飞行。 无人机应减速，然后在障碍物距离小于6米时悬停(通过 "),e("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#CP_DIST"}},[t._v("CP_DIST")]),t._v(" 参数，距离 "),e("RouterLink",{attrs:{to:"/zh/advanced_config/parameters.html"}},[t._v("可调整")]),t._v("  )。")],1)]),t._v(" "),e("li",[e("p",[t._v("要测试 "),e("RouterLink",{attrs:{to:"/zh/computer_vision/obstacle_avoidance.html"}},[t._v("避障")]),t._v("，创建一个被障碍阻止的路径。 然后切换到 "),e("RouterLink",{attrs:{to:"/zh/flight_modes/mission.html"}},[t._v("任务模式")]),t._v(" 来运行任务。并观察无人机绕开障碍物，然后返回计划路线。")],1)])]),t._v(" "),e("h2",{attrs:{id:"使用套件开发"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用套件开发"}},[t._v("#")]),t._v(" 使用套件开发")]),t._v(" "),e("p",[e("em",[t._v("PX4 避障")]),t._v(" 系统由计算机视觉软件组成，这种软件运行在一个配套的计算机上(附着的深度摄像头)，为运行在一个 "),e("em",[t._v("飞控上的 PX4 飞行堆栈提供障碍和/或航线信息")])]),t._v(" "),e("h3",{attrs:{id:"px4-避障概述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#px4-避障概述"}},[t._v("#")]),t._v(" PX4 避障概述")]),t._v(" "),e("p",[e("em",[t._v("PX4 避障")]),t._v(" 系统由计算机视觉软件组成，这种软件运行在一个配套的计算机上(附着的深度摄像头)，向运行在 "),e("em",[t._v("飞行控制器")]),t._v(" 上的PX4飞行堆栈提供障碍和/或路线信息。")]),t._v(" "),e("p",[t._v("有关配套的计算机视觉/计划软件的文档可在github上的以下位置找到："),e("a",{attrs:{href:"https://github.com/PX4/avoidance#obstacle-detection-and-avoidance",target:"_blank",rel:"noopener noreferrer"}},[t._v(" PX4 / 避障 "),e("OutboundLink")],1),t._v("。 该项目提供了许多不同的规划程序实现（打包为ROS节点）：")]),t._v(" "),e("ul",[e("li",[t._v("您需要通过 "),e("strong",[t._v("USB")]),t._v(" 将 "),e("em",[t._v("QGroundControl")]),t._v(" 连接到套件的 "),e("em",[t._v("Pixhawk 4")]),t._v(" 来更新固件。")]),t._v(" "),e("li",[t._v("加载新固件后选择 "),e("em",[t._v("PX4 Vision DevKit")]),t._v(" 机架：")]),t._v(" "),e("li",[e("em",[t._v("降落计划器")]),t._v(" 需要一个向下的摄像头，并且必须先修改相机的安装座才能使用。")])]),t._v(" "),e("p",[t._v("您可以在 "),e("em",[t._v("UP Core")]),t._v(" 上安装镜像，并从内部内存启动(而不是U盘)。")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://wiki.up-community.org/Ubuntu",target:"_blank",rel:"noopener noreferrer"}},[e("em",[t._v("UP Core")]),t._v(" Wiki"),e("OutboundLink")],1),t._v(" - 机载计算机技术信息")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://structure.io/developers",target:"_blank",rel:"noopener noreferrer"}},[t._v("Occipital Developer Forum"),e("OutboundLink")],1),t._v(" - "),e("em",[t._v("结构核心")]),t._v(" 相机信息")])]),t._v(" "),e("p",[e("span",{attrs:{id:"install_image_mission_computer"}})]),t._v(" "),e("h3",{attrs:{id:"在机载计算机上安装镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在机载计算机上安装镜像"}},[t._v("#")]),t._v(" 在机载计算机上安装镜像")]),t._v(" "),e("p",[t._v("建议这样做是因为从内部内存启动得更快。 释放USB端口，也能提供比U盘更多的内存。")]),t._v(" "),e("p",[t._v("将USB镜像刷新到UP Core：")]),t._v(" "),e("p",[t._v("首先插入所提供的 USB2.0 盘 "),e("em",[t._v("UP 核心")]),t._v(" 端口标签 "),e("code",[t._v("USB1")]),t._v(" 然后用4S电池给无人机供电。 避障系统应在大约1分钟内启动(这取决于所提供的U盘)。")]),t._v(" "),e("p",[t._v("要将USB映像刷到 "),e("em",[t._v("UP Core")]),t._v(" ：")]),t._v(" "),e("ol",[e("li",[t._v("将预先烧录的USB驱动器插入标有 "),e("code",[t._v("USB1")]),t._v(" 的 "),e("em",[t._v("UP Core")]),t._v(" 端口中。")]),t._v(" "),e("li")]),t._v(" "),e("p",[t._v("登录到配套计算机<0> （如上所述）。")]),t._v(" "),e("p",[t._v("1 打开终端，然后运行以下命令将映像复制到内部存储器（eMMC）。 终端将在刷新过程中提示您一些响应。")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~/catkin_ws/src/px4vision_ros\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" ./flash_emmc.sh\n")])])]),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),e("p",[t._v("执行此脚本时，将删除 "),e("em",[t._v("UP Core")]),t._v(" 计算机中保存的所有信息。")])]),t._v(" "),e("p",[t._v("1 拔出U盘。")]),t._v(" "),e("p",[t._v("1 重启无人机， "),e("em",[t._v("UP Core")]),t._v(" 计算机现在将从内部内存（eMMC）引导。"),t._v(" "),e("span",{attrs:{id:"boot_mission_computer"}})]),t._v(" "),e("h3",{attrs:{id:"开启机载计算机-boot-mission-computer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开启机载计算机-boot-mission-computer"}},[t._v("#")]),t._v(" 开启机载计算机 {#boot_mission_computer}")]),t._v(" "),e("p",[t._v("首先将提供的 USB2.0 U盘插入标有 "),e("code",[t._v("USB1")]),t._v(" 的 "),e("em",[t._v("UP Core")]),t._v(" 端口，然后使用4S电池为无人机供电。 避障系统应在大约1分钟内启动(这取决于所提供的U盘)。")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),e("p",[e("a",{attrs:{href:"#Fly-the-Drone-with-Avoidance"}},[t._v("带避障飞行的无人机")]),t._v(" 进一步说明了如何验证避障系统是否处于活动状态。")])]),t._v(" "),e("p",[t._v("PX4 视觉的 "),e("em",[t._v("UP Core")]),t._v(" 计算机为扩展PX4规避软件（以及更广泛地用于使用ROS2开发新的计算机视觉算法）提供了完整且配置完整的环境。 您可以在无人机上开发和测试您的软件，将其同步到自己的git存储库，并在github "),e("a",{attrs:{href:"https://github.com/PX4/avoidance",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4/Avoidance"),e("OutboundLink")],1),t._v(" 存储库上与更广泛的PX4社区共享所有修复和改进。")]),t._v(" "),e("p",[t._v("机载计算机一旦启动，就可以用作计算机视力开发环境和运行软件的环境。")]),t._v(" "),e("p",[e("span",{attrs:{id:"login_mission_computer"}})]),t._v(" "),e("h3",{attrs:{id:"登录机载计算机"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#登录机载计算机"}},[t._v("#")]),t._v(" 登录机载计算机")]),t._v(" "),e("p",[t._v("按以下步骤登录到机载计算机：")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("通过端口 "),e("code",[t._v("USB2")]),t._v(" 将键盘和鼠标连接到 "),e("em",[t._v("UP Core")]),t._v("：")]),t._v(" "),e("p",[e("img",{attrs:{src:v(599),alt:"UP Core：USB2"}})]),t._v(" "),e("ul",[e("li",[e("p",[t._v("使用套件中的 USB-JST电缆获取一个 USB A 连接器")]),t._v(" "),e("p",[e("img",{attrs:{src:v(600),alt:"USB 转 JST 线"}})])]),t._v(" "),e("li",[e("p",[t._v("如果键盘和鼠标具有单独的接口，则可以将USB集线器连接到电缆。")]),t._v(" "),e("ol",[e("li",[t._v("连接显示器到 "),e("em",[t._v("UP Core")]),t._v(" 的 HDMI 接口。\n"),e("img",{attrs:{src:v(601),alt:"UP Core：HDMI 端口"}})])])])])])]),t._v(" "),e("p",[t._v("Ubuntu 登录屏幕应显示在显示器上。")]),t._v(" "),e("ol",[e("li",[t._v("使用凭据登录到 "),e("em",[t._v("UP Core")]),t._v("：\n"),e("ul",[e("li",[t._v("**用户名：**px4vision")]),t._v(" "),e("li",[t._v("**密码：**px4vision")])])])]),t._v(" "),e("h3",{attrs:{id:"开发-扩展-px4-避障功能"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开发-扩展-px4-避障功能"}},[t._v("#")]),t._v(" 开发/扩展 PX4 避障功能")]),t._v(" "),e("p",[t._v("ROS 工作区位于 "),e("code",[t._v("~/catkin_ws")]),t._v("。 关于在 ROS 中开发和使用 catkin 工作区，请参阅 "),e("a",{attrs:{href:"http://wiki.ros.org/catkin/Tutorials",target:"_blank",rel:"noopener noreferrer"}},[t._v("ROS catkin教程"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("p",[t._v("catkin 工作区位于 "),e("code",[t._v("〜/ catkin_ws")]),t._v(" ，并且已预先配置为运行 PX4 避障本地计划程序。 引导启动文件 ("),e("code",[t._v("avoidance.launch")]),t._v(") 位于 "),e("code",[t._v("px4vision_ros")]),t._v(" 软件包中（修改此文件以更改启动计划程序的文件）。")]),t._v(" "),e("p",[t._v("避障程序包在引导时启动。 要整合一个不同的计划，需要禁用此项。")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("使用以下指令禁用避障程序：")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("systemctl stop avoidance.service\n")])])])])]),t._v(" "),e("p",[t._v("您只需重启机器即可重启服务。")]),t._v(" "),e("p",[t._v("其他有用的指令是：")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# restart service")]),t._v("\nsystemctl start avoidance.service\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# disable service (stop service and do not restart after boot)")]),t._v("\nsystemctl disable avoidance.service\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# enable service (start service and enable restart after boot)")]),t._v("\nsystemctl "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v(" avoidance.service  \n")])])]),e("ol",[e("li",[e("p",[t._v("避障碍包的源代码可在 https://github.com/PX4/evidence 中查找，该代码位于 "),e("code",[t._v("~/catkin_ws/src/evering")]),t._v(" 中。")])]),t._v(" "),e("li",[e("p",[t._v("更改代码！ 要获取最新的避障代码，请从避障仓库中提取代码：")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull origin\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout origin/master\n")])])])]),t._v(" "),e("li",[e("p",[t._v("构建软件包")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("catkin build local_planner\n")])])])])]),t._v(" "),e("p",[t._v("ROS 工作区位于 "),e("code",[t._v("~/catkin_ws")]),t._v("。 有关在 ROS 中进行开发以及使用 catkin 工作区的参考，请参见 "),e("a",{attrs:{href:"http://wiki.ros.org/catkin/Tutorials",target:"_blank",rel:"noopener noreferrer"}},[t._v("ROS catkin教程"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("h3",{attrs:{id:"开发-px4-固件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开发-px4-固件"}},[t._v("#")]),t._v(" 开发 PX4 固件")]),t._v(" "),e("p",[t._v("软件问题，请使用以下 "),e("RouterLink",{attrs:{to:"/zh/complete_vehicles/#support"}},[t._v("社区支持频道")]),t._v("：")],1),t._v(" "),e("p",[t._v("软件问题，请使用以下社区支持频道：")]),t._v(" "),e("ul",[e("li",[t._v("您需要通过 "),e("strong",[t._v("USB")]),t._v(" 将 "),e("em",[t._v("QGroundControl")]),t._v(" 连接到套件的 "),e("em",[t._v("Pixhawk 4")]),t._v(" 来更新固件。")]),t._v(" "),e("li",[t._v("加载新固件后选择 "),e("em",[t._v("PX4 Vision DevKit")]),t._v(" 机架： "),e("img",{attrs:{src:v(602),alt:"机身选择 - PX4 Vision DevKit"}})])]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),e("p",[e("em",[t._v("不需要")]),t._v(" 修改 PX4 代码即可满足大多数计算机视觉用例。 要讨论接口或如何集成其他功能，请加入PX4 slack 通道：＃computer-vision。")])]),t._v(" "),e("h2",{attrs:{id:"其他拓展资源"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#其他拓展资源"}},[t._v("#")]),t._v(" 其他拓展资源")]),t._v(" "),e("p",[t._v("可从 "),e("a",{attrs:{href:"http://www.holybro.com/manual/PX4_Vision_carrier_board_pinouts_v1.1.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Holybro的网站"),e("OutboundLink")],1),t._v(" 下载载板的引脚 。")]),t._v(" "),e("h2",{attrs:{id:"如何获得技术支持"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何获得技术支持"}},[t._v("#")]),t._v(" 如何获得技术支持？")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://wiki.up-community.org/Ubuntu",target:"_blank",rel:"noopener noreferrer"}},[e("em",[t._v("UP Core")]),t._v(" Wiki"),e("OutboundLink")],1),t._v(" - "),e("em",[t._v("Up Core")]),t._v(" 机载计算机技术信息")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://structure.io/developers",target:"_blank",rel:"noopener noreferrer"}},[t._v("Occipital Developer Forum"),e("OutboundLink")],1),t._v(" - "),e("em",[t._v("结构核心")]),t._v(" 相机信息")]),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk4.html"}},[t._v("Pixhawk 4 概述")])],1),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/PX4/avoidance",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4 避障软件/文档"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/zh/computer_vision/path_planning_interface.html"}},[t._v("路径规划接口")])],1),t._v(" "),e("li",[e("a",{attrs:{href:"http://www.holybro.com/manual/PX4_Vision_carrier_board_pinouts_v1.1.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Px4 Vision 载板引脚排列"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"如何获得技术支持-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何获得技术支持-2"}},[t._v("#")]),t._v(" 如何获得技术支持")]),t._v(" "),e("p",[t._v("硬件问题，请联系 Holybro："),e("a",{attrs:{href:"mailto:productservice@holybro.com"}},[t._v("productservice@holybro.com")]),t._v(".")]),t._v(" "),e("p",[t._v("软件问题，请使用以下社区支持频道：")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://discuss.px4.io/c/Vision-based-navigation-and-obstacle-avoidance",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4讨论：Computer Vision（计算机视觉）目录。"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://slack.px4.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4 slack"),e("OutboundLink")],1),t._v(" 频道：#avoidance")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://wikifactory.com/+holybro/px4-vision",target:"_blank",rel:"noopener noreferrer"}},[t._v("Holybro PX4 Vision Wikifactory 资料库"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);_.default=r.exports},588:function(t,_,v){t.exports=v.p+"assets/img/px4_vision_kit_hero.8eef78c9.jpg"},589:function(t,_,v){t.exports=v.p+"assets/img/warning_power_port.c56d4749.png"},590:function(t,_,v){t.exports=v.p+"assets/img/holybro_px4_vision_whats_inside_top.c3189220.jpg"},591:function(t,_,v){t.exports=v.p+"assets/img/holybro_px4_vision_whats_inside.2a837d93.jpg"},592:function(t,_,v){t.exports=v.p+"assets/img/Explode-view.c3cc7d66.png"},593:function(t,_,v){t.exports=v.p+"assets/img/raise_gps_mast.5081b5cf.jpg"},594:function(t,_,v){t.exports=v.p+"assets/img/upcore_port_usb1.7d4feac6.png"},595:function(t,_,v){t.exports=v.p+"assets/img/motor_order_diagram.64560394.png"},596:function(t,_,v){t.exports=v.p+"assets/img/propeller_directions.4bfa5377.jpg"},597:function(t,_,v){t.exports=v.p+"assets/img/propeller_nuts.2ad4cf8c.jpg"},598:function(t,_,v){t.exports=v.p+"assets/img/qgc_console_vision_system_started.254399c4.jpg"},599:function(t,_,v){t.exports=v.p+"assets/img/upcore_port_usb2.8efb3345.png"},600:function(t,_,v){t.exports=v.p+"assets/img/usb_jst_cable.77e81012.jpg"},601:function(t,_,v){t.exports=v.p+"assets/img/upcore_port_hdmi.8ab92b22.png"},602:function(t,_,v){t.exports=v.p+"assets/img/qgc_airframe_px4_vision_devkit_platform.77e43013.jpg"}}]);