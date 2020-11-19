(window.webpackJsonp=window.webpackJsonp||[]).push([[213],{1282:function(t,e,a){t.exports=a.p+"assets/img/px4_hitl_overview_jmavsim_gazebo.d97171c8.png"},1283:function(t,e,a){t.exports=a.p+"assets/img/qgc_hitl_config.cad209a4.png"},1284:function(t,e,a){t.exports=a.p+"assets/img/qgc_hil_config.7d1c6265.png"},1285:function(t,e,a){t.exports=a.p+"assets/img/qgc_hitl_autoconnect.bd418a05.png"},1286:function(t,e,a){t.exports=a.p+"assets/img/gazebo_sdf_model_hil_params.d0007222.png"},2590:function(t,e,a){"use strict";a.r(e);var r=a(18),_=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"硬件在环仿真-hitl"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#硬件在环仿真-hitl"}},[t._v("#")]),t._v(" 硬件在环仿真（HITL）")]),t._v(" "),r("p",[t._v("硬件在环仿真模式 (HITL 或 HIL) 下 PX4 固件代码运行在真实的飞行控制器硬件平台上。 这种方法的优点是可以在实际硬件上测试大多数的实际飞行代码。")]),t._v(" "),r("p",[t._v("HITL 模式下 PX4 支持多旋翼 (使用 jMAVSim 或者 Gazebo) 和固定翼 (使用 Gazebo 或者 X-Plane demo/full version) 无人机的仿真。")]),t._v(" "),r("p",[r("a",{attrs:{id:"compatible_airframe"}})]),t._v(" "),r("h2",{attrs:{id:"hitl兼容机架"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hitl兼容机架"}},[t._v("#")]),t._v(" HITL兼容机架")]),t._v(" "),r("p",[t._v("目前兼容的机架构型和模拟器的情况如下：")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("机架")]),t._v(" "),r("th",[r("code",[t._v("SYS_AUTOSTART")])]),t._v(" "),r("th",[t._v("Gazebo")]),t._v(" "),r("th",[t._v("jMAVSim")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("a",{attrs:{href:"../airframes/airframe_reference.md#copter_simulation_(copter)_hil_quadcopter_x"}},[t._v("HIL Quadcopter X")])]),t._v(" "),r("td",[t._v("1001")]),t._v(" "),r("td",[t._v("Y")]),t._v(" "),r("td",[t._v("Y")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"../airframes/airframe_reference.md#vtol_standard_vtol_hil_standard_vtol_quadplane"}},[t._v("HIL Standard VTOL QuadPlane")])]),t._v(" "),r("td",[t._v("1002")]),t._v(" "),r("td",[t._v("Y")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/zh/airframes/airframe_reference.html#copter_quadrotor_x_generic_quadrotor_x"}},[t._v("Generic Quadrotor x")]),t._v(" copter")],1),t._v(" "),r("td",[t._v("4001")]),t._v(" "),r("td",[t._v("Y")]),t._v(" "),r("td",[t._v("Y")])]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/zh/airframes/airframe_reference.html#copter_quadrotor_x_dji_flame_wheel_f450"}},[t._v("DJI Flame Wheel f450")])],1),t._v(" "),r("td",[t._v("4011")]),t._v(" "),r("td",[t._v("Y")]),t._v(" "),r("td",[t._v("Y")])])])]),t._v(" "),r("p",[r("a",{attrs:{id:"simulation_environment"}})]),t._v(" "),r("h2",{attrs:{id:"hitl-仿真环境"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hitl-仿真环境"}},[t._v("#")]),t._v(" HITL 仿真环境")]),t._v(" "),r("p",[t._v("硬件在环仿真（HITL）模式下标准的 PX4 固件在真实的硬件上运行。 JMAVSim 或 Gazebo (运行在开发计算机上) 通过 USB/UART 完成与飞行控制器硬件平台的连接。 模拟器充当在 PX4 和 "),r("em",[t._v("QGroundControl")]),t._v(" 之间共享 MAVLink 数据的网关。")]),t._v(" "),r("blockquote",[r("p",[r("strong",[t._v("Note")]),t._v(" 如果飞行控制器支持网络连接且使用的是稳定、低延迟的连接（如有线以太网，WIFI 通常不太稳定），那么模拟器也可以使用 UDP 完成通讯连接。 例如，该配置已经使用一台运行 PX4 且通过以太网连接到开发计算机的 Raspberry Pi 进行了验证测试 (包括 jMAVSim 运行命令的启动配置在 "),r("a",{attrs:{href:"https://github.com/PX4/Firmware/blob/master/posix-configs/rpi/px4_hil.config",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),r("OutboundLink")],1),t._v(")。")])]),t._v(" "),r("p",[t._v("下图展示了仿真模拟的环境：")]),t._v(" "),r("ul",[r("li",[t._v("飞控板 HITL 模式被激活 (通过 "),r("em",[t._v("QGroundControl")]),t._v(") ，该模式下不会启动飞控板上任何传感器。")]),t._v(" "),r("li",[r("em",[t._v("jMAVSim")]),t._v(" 或者 "),r("em",[t._v("Gazebo")]),t._v(" 通过 USB 连接到飞控板。")]),t._v(" "),r("li",[t._v("模拟器通过 UDP 连接到 "),r("em",[t._v("QGroundControl")]),t._v(" 并将 MAVLink 数据传输至 PX4 。")]),t._v(" "),r("li",[t._v("(可选) 通过串口可将操纵杆/游戏手柄通过 "),r("em",[t._v("QGroundControl")]),t._v(" 连接至仿真回路中。")]),t._v(" "),r("li",[t._v("(可选 - 仅适用于Gazebo) Gazebo 还可以连接到一个 offboard API ，并将 MAVLink 数据桥接到 PX4 。")])]),t._v(" "),r("p",[r("img",{attrs:{src:a(1282),alt:"HITL 配置 - jMAVSim 和 Gazebo"}})]),t._v(" "),r("h2",{attrs:{id:"hitl-vs-sitl"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hitl-vs-sitl"}},[t._v("#")]),t._v(" HITL vs SITL")]),t._v(" "),r("p",[t._v("SITL 开发计算机中的模拟环境中运行, 并使用专门为该环境生成的固件。 除了仿真程序从模拟器中获取虚假的环境数据外，系统的行为也很正常。")]),t._v(" "),r("p",[t._v("相比之下， HITL 在正常飞控硬件平台上运行正常的处于 ”HITL 模式“ 的 PX4 固件。 仿真数据进入整个仿真系统的时间点与 SITL 有所不同。 指令器和传感器等有 HIL 模式的核心模块在启动时被绕过了一些正常的功能。")]),t._v(" "),r("p",[t._v("In summary, HITL runs PX4 on the actual hardware using standard firmware, but SITL actually executes more of the standard system code.")]),t._v(" "),r("h2",{attrs:{id:"配置-hitl"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#配置-hitl"}},[t._v("#")]),t._v(" 配置 HITL")]),t._v(" "),r("h3",{attrs:{id:"jmavsim-gazebo-hitl-仿真环境"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#jmavsim-gazebo-hitl-仿真环境"}},[t._v("#")]),t._v(" JMAVSim/Gazebo HITL 仿真环境")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("通过 USB 将自动驾驶仪直接连接到 "),r("em",[t._v("QGroundControl")]),t._v("。")])]),t._v(" "),r("li",[r("p",[t._v("激活 HITL 模式")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("打开 "),r("strong",[t._v("Setup > Safety")]),t._v(" 选项卡。")])]),t._v(" "),r("li",[r("p",[t._v("在 "),r("em",[t._v("HITL Enabled")]),t._v(" 下拉框中选择 "),r("strong",[t._v("Enabled")]),t._v(" 完成 HITL 模式的激活。")]),t._v(" "),r("p",[r("img",{attrs:{src:a(1283),alt:"QGroundControl HITL 配置"}})])])])]),t._v(" "),r("li",[r("p",[t._v("选择机架")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("打开 "),r("strong",[t._v("Setup > Airframes")]),t._v(" 选项卡。")])]),t._v(" "),r("li",[r("p",[t._v("选择一个你想要进行测试的 "),r("a",{attrs:{href:"#compatible_airframe"}},[t._v("兼容的机架")]),t._v(" 。 Then click "),r("strong",[t._v("Apply and Restart")]),t._v(" on top-right of the "),r("em",[t._v("Airframe Setup")]),t._v(" page.")]),t._v(" "),r("p",[r("img",{attrs:{src:a(1284),alt:"选择机架"}})])])])]),t._v(" "),r("li",[r("p",[t._v("如有必要, 校准您的 RC 遥控器 或操纵杆。")])]),t._v(" "),r("li",[r("p",[t._v("设置 UDP")]),t._v(" "),r("ol",[r("li",[r("p",[t._v('在设置菜单的 "'),r("em",[t._v("General")]),t._v('" 选项卡下, 取消选中 '),r("em",[t._v("AutoConnect")]),t._v(" 一栏中除 "),r("strong",[t._v("UDP")]),t._v(" 外的所有复选框。")]),t._v(" "),r("p",[r("img",{attrs:{src:a(1285),alt:"GITL 模式 QGC 自动连接设置"}})])])])]),t._v(" "),r("li",[r("p",[t._v("(可选) 配置操纵杆和故障保护。 设置以下 "),r("a",{attrs:{href:"https://docs.px4.io/en/advanced_config/parameters.html#finding-a-parameter",target:"_blank",rel:"noopener noreferrer"}},[t._v("parameters"),r("OutboundLink")],1),t._v(" 以便使用操纵杆而不是 RC 遥控器：")]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/zh/advanced/parameter_reference.html#COM_RC_IN_MODE"}},[t._v("COM_RC_IN_MODE")]),t._v(' 更改为 "Joystick/No RC Checks". 这允许操纵杆输入并禁用 RC 输入检查。 This allows joystick input and disables RC input checks.')],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/zh/advanced/parameter_reference.html#NAV_DLL_ACT"}},[t._v("NAV_DLL_ACT")]),t._v(' 更改为 "Disabled"。 这可确保在没有无线遥控的情况下运行 HITL 时 RC 失控保护不会介入。')],1)]),t._v(" "),r("blockquote",[r("p",[r("strong",[t._v("Tip")]),t._v(" "),r("em",[t._v("QGroundControl User Guide")]),t._v(" 中也有如何配置 "),r("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/SetupView/Joystick.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("操纵杆"),r("OutboundLink")],1),t._v(" 和 "),r("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/SettingsView/VirtualJoystick.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("虚拟操纵杆"),r("OutboundLink")],1),t._v(" 的说明。")])])])]),t._v(" "),r("p",[t._v("完成所有的配置设定后 "),r("strong",[t._v("关闭")]),t._v(" "),r("em",[t._v("QGroundControl")]),t._v(" 并断开飞控板与计算机的连接。")]),t._v(" "),r("h3",{attrs:{id:"x-plane-hitl-仿真环境"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#x-plane-hitl-仿真环境"}},[t._v("#")]),t._v(" X-Plane HITL 仿真环境")]),t._v(" "),r("p",[t._v("遵循以下流程进行 X-Plane 模拟器的配置：")]),t._v(" "),r("h4",{attrs:{id:"gazebo"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#gazebo"}},[t._v("#")]),t._v(" Gazebo")]),t._v(" "),r("blockquote",[r("p",[r("strong",[t._v("Note")]),t._v(" 确保 "),r("em",[t._v("QGroundControl")]),t._v(" 没有运行！")])]),t._v(" "),r("ol",[r("li",[r("p",[t._v("更新环境变量：")]),t._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Firmware_clone"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl_default gazebo\n")])])])]),t._v(" "),r("li",[r("p",[t._v("打开载具模型的 sdf 文件（例如 "),r("strong",[t._v("Tools/sitl_gazebo/models/iris/iris.sdf")]),t._v("）。")])]),t._v(" "),r("li",[r("p",[t._v("找到文件的 "),r("code",[t._v("mavlink_interface plugin")]),t._v(" 分区，将 "),r("code",[t._v("serialEnabled")]),t._v(" 和 "),r("code",[t._v("hil_mode")]),t._v(" 参数更改为 "),r("code",[t._v("true")]),t._v(" 。")]),t._v(" "),r("p",[r("img",{attrs:{src:a(1286),alt:"HIL 参数"}})]),t._v(" "),r("blockquote",[r("p",[r("strong",[t._v("Note")]),t._v(" The file iris.sdf is autogenerated. Therefore you need to either keep a copy of your changed file or re-edit it for every build.")])])]),t._v(" "),r("li",[r("p",[t._v("如有必要的话替换掉 "),r("code",[t._v("serialDevice")]),t._v(" 参数 ("),r("code",[t._v("/dev/ttyACM0")]),t._v(") 。")]),t._v(" "),r("blockquote",[r("p",[r("strong",[t._v("Note")]),t._v(" 串口设备参数取决于载具与计算机使用哪个端口完成连接 (通常情况下都是 "),r("code",[t._v("/dev/ttyACM0")]),t._v(")。 在 Ubuntu 上最简单的一个检测办法就是将自驾仪插入电脑，然后打开终端窗口输入 "),r("code",[t._v('dmesg | grep "tty"')]),t._v(" 命令。 命令执行结果中最后一个显示的设备就是我们关心的。")])])]),t._v(" "),r("li",[r("p",[t._v("Set up the environment variables:")]),t._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" Tools/setup_gazebo.bash "),r("span",{pre:!0,attrs:{class:"token variable"}},[r("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("pwd")]),r("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v(" "),r("span",{pre:!0,attrs:{class:"token variable"}},[r("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("pwd")]),r("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("/build/px4_sitl_default\n")])])]),r("p",[t._v("在 HITL 模式下运行 Gazebo ： sh gazebo Tools/sitl_gazebo/worlds/iris.world")]),t._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[t._v("gazebo Tools/sitl_gazebo/worlds/iris.world\n")])])])]),t._v(" "),r("li",[r("p",[t._v("开启 "),r("em",[t._v("QGroundControl")]),t._v("。 它应该会自动连接 PX4 和 Gazebo 。")])])]),t._v(" "),r("p",[r("a",{attrs:{id:"jmavsim_hitl_configuration"}})]),t._v(" "),r("h4",{attrs:{id:"jmavsim-仅适用于四旋翼无人机"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#jmavsim-仅适用于四旋翼无人机"}},[t._v("#")]),t._v(" jMAVSim (仅适用于四旋翼无人机)")]),t._v(" "),r("blockquote",[r("p",[r("strong",[t._v("Tip")]),t._v(" Gazebo 还支持与offboard API 共享 MAVLink 数据！")])]),t._v(" "),r("ol",[r("li",[r("p",[t._v("将飞行控制器连接到计算机, 并等待其启动。")])]),t._v(" "),r("li",[r("p",[t._v("在 HITL 模式下运行 jMAVSim (r如有必要，修改串口号名称 "),r("code",[t._v("/dev/ttyACM0")]),t._v(" - 比如，在 Mac OS 上该参数应为 "),r("code",[t._v("/dev/tty.usbmodem1")]),t._v(")： sh ./Tools/jmavsim_run.sh -q -d /dev/ttyACM0 -b 921600 -r 250")]),t._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[t._v("./Tools/jmavsim_run.sh -q -s -d /dev/ttyACM0 -b "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("921600")]),t._v(" -r "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("250")]),t._v("\n")])])]),r("blockquote",[r("p",[r("strong",[t._v("Note")]),t._v(" Replace the serial port name "),r("code",[t._v("/dev/ttyACM0")]),t._v(" as appropriate. On macOS this port would be "),r("code",[t._v("/dev/tty.usbmodem1")]),t._v(". On Windows (including Cygwin) it would be the COM1 or another port - check the connection in the Windows Device Manager.")])])]),t._v(" "),r("li",[r("p",[t._v("开启 "),r("em",[t._v("QGroundControl")]),t._v("。 它应该会自动连接 PX4 和 Gazebo 。")])])]),t._v(" "),r("h2",{attrs:{id:"在-hitl-仿真中执行自主飞行任务"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#在-hitl-仿真中执行自主飞行任务"}},[t._v("#")]),t._v(" 在 HITL 仿真中执行自主飞行任务")]),t._v(" "),r("p",[t._v("总而言之， HITL 在真实硬件上运行标准 PX4 固件，而 SITL 实际上要比标准 PX4 系统执行更多的代码。")])])}),[],!1,null,null,null);e.default=_.exports}}]);