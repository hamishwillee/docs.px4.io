(window.webpackJsonp=window.webpackJsonp||[]).push([[385],{1560:function(t,e,a){t.exports=a.p+"assets/img/px4_hitl_overview_jmavsim_gazebo.e8720ed4.svg"},1561:function(t,e,a){t.exports=a.p+"assets/img/qgc_hitl_config.e2aaf666.png"},1562:function(t,e,a){t.exports=a.p+"assets/img/qgc_hil_config.7ba5da96.png"},1563:function(t,e,a){t.exports=a.p+"assets/img/qgc_hitl_autoconnect.83822140.png"},4144:function(t,e,a){"use strict";a.r(e);var s=a(19),o=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"hardware-in-the-loop-simulation-hitl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hardware-in-the-loop-simulation-hitl"}},[t._v("#")]),t._v(" Hardware in the Loop Simulation (HITL)")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("HITL")]),t._v(" "),s("p",[t._v("is "),s("RouterLink",{attrs:{to:"/zh/simulation/community_supported_simulators.html"}},[t._v("community supported and maintained")]),t._v(". It may or may not work with current versions of PX4.")],1),t._v(" "),s("p",[t._v("See "),s("RouterLink",{attrs:{to:"/zh/dev_setup/dev_env.html"}},[t._v("Toolchain Installation")]),t._v(" for information about the environments and tools supported by the core development team.")],1)]),t._v(" "),s("p",[t._v("硬件在环仿真模式 (HITL 或 HIL) 下 PX4 固件代码运行在真实的飞行控制器硬件平台上。 这种方法的优点是可以在实际硬件上测试大多数的实际飞行代码。")]),t._v(" "),s("p",[t._v("PX4 supports HITL for multicopters (using jMAVSim or Gazebo Classic) and VTOL (using Gazebo Classic).")]),t._v(" "),s("p",[s("a",{attrs:{id:"compatible_airframe"}})]),t._v(" "),s("h2",{attrs:{id:"hitl兼容机架"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hitl兼容机架"}},[t._v("#")]),t._v(" HITL兼容机架")]),t._v(" "),s("p",[t._v("目前兼容的机架构型和模拟器的情况如下：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("机架")]),t._v(" "),s("th",[s("code",[t._v("SYS_AUTOSTART")])]),t._v(" "),s("th",[t._v("Gazebo Classic")]),t._v(" "),s("th",[t._v("jMAVSim")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("RouterLink",{attrs:{to:"/zh/airframes/airframe_reference.html#copter_simulation_hil_quadcopter_x"}},[t._v("HIL Standard VTOL QuadPlane")])],1),t._v(" "),s("td",[t._v("1002")]),t._v(" "),s("td",[t._v("Y")]),t._v(" "),s("td",[t._v("Y")])]),t._v(" "),s("tr",[s("td",[s("RouterLink",{attrs:{to:"/zh/airframes/airframe_reference.html#vtol_standard_vtol_hil_standard_vtol_quadplane"}},[t._v("HIL Standard VTOL QuadPlane")])],1),t._v(" "),s("td",[t._v("4001")]),t._v(" "),s("td",[t._v("Y")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[s("RouterLink",{attrs:{to:"/zh/airframes/airframe_reference.html#copter_quadrotor_x_generic_quadcopter"}},[t._v("Generic Quadrotor x")]),t._v(" copter")],1),t._v(" "),s("td",[t._v("4011")]),t._v(" "),s("td",[t._v("Y")]),t._v(" "),s("td",[t._v("Y")])])])]),t._v(" "),s("p",[s("a",{attrs:{id:"simulation_environment"}})]),t._v(" "),s("h2",{attrs:{id:"hitl-仿真环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hitl-仿真环境"}},[t._v("#")]),t._v(" HITL 仿真环境")]),t._v(" "),s("p",[t._v("硬件在环仿真（HITL）模式下标准的 PX4 固件在真实的硬件上运行。 JMAVSim or Gazebo Classic (running on a development computer) are connected to the flight controller hardware via USB/UART. The simulator acts as gateway to share MAVLink data between PX4 and "),s("em",[t._v("QGroundControl")]),t._v(".")]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),s("p",[t._v("The simulator can also be connected via UDP if the flight controller has networking support and uses a stable, low-latency connection (e.g. a wired Ethernet connection - WiFi is usually not sufficiently reliable). For example, this configuration has been tested with PX4 running on a Raspberry Pi connected via Ethernet to the computer (a startup configuration that includes the command for running jMAVSim can be found "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/posix-configs/rpi/px4_hil.config",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),s("OutboundLink")],1),t._v(").")])]),t._v(" "),s("p",[t._v("The diagram below shows the simulation environment:")]),t._v(" "),s("ul",[s("li",[t._v("A HITL configuration is selected (via "),s("em",[t._v("QGroundControl")]),t._v(") that doesn't start any real sensors.")]),t._v(" "),s("li",[s("em",[t._v("jMAVSim")]),t._v(" or "),s("em",[t._v("Gazebo Classic")]),t._v(" are connected to the flight controller via USB.")]),t._v(" "),s("li",[t._v("The simulator is connected to "),s("em",[t._v("QGroundControl")]),t._v(" via UDP and bridges its MAVLink messages to PX4.")]),t._v(" "),s("li",[s("em",[t._v("Gazebo Classic")]),t._v(" and "),s("em",[t._v("jMAVSim")]),t._v(" can also connect to an offboard API and bridge MAVLink messages to PX4.")]),t._v(" "),s("li",[t._v("(Optional) A serial connection can be used to connect Joystick/Gamepad hardware via "),s("em",[t._v("QGroundControl")]),t._v(".")])]),t._v(" "),s("p",[s("img",{attrs:{src:a(1560),alt:"HITL Setup - jMAVSim and Gazebo Classic"}})]),t._v(" "),s("h2",{attrs:{id:"hitl-相比于-sitl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hitl-相比于-sitl"}},[t._v("#")]),t._v(" HITL 相比于 SITL")]),t._v(" "),s("p",[t._v("相比之下， HITL 在正常飞控硬件平台上运行正常的处于 ”HITL 模式“ 的 PX4 固件。 仿真数据进入整个仿真系统的时间点与 SITL 有所不同。")]),t._v(" "),s("p",[t._v('By contrast, HITL runs normal PX4 firmware in "HITL mode", on normal hardware. The simulation data enters the system at a different point than for SITL. Core modules like commander and sensors have HITL modes at startup that bypass some of the normal functionality.')]),t._v(" "),s("p",[t._v("完成所有的配置设定后 "),s("strong",[t._v("关闭")]),t._v(" "),s("em",[t._v("QGroundControl")]),t._v(" 并断开飞控板与计算机的连接。")]),t._v(" "),s("h2",{attrs:{id:"配置-hitl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置-hitl"}},[t._v("#")]),t._v(" 配置 HITL")]),t._v(" "),s("h3",{attrs:{id:"jmavsim-gazebo-hitl-仿真环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jmavsim-gazebo-hitl-仿真环境"}},[t._v("#")]),t._v(" JMAVSim/Gazebo HITL 仿真环境")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Connect the autopilot directly to "),s("em",[t._v("QGroundControl")]),t._v(" via USB.")])]),t._v(" "),s("li",[s("p",[t._v("激活 HITL 模式")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("打开 "),s("strong",[t._v("Setup > Safety")]),t._v(" 选项卡。")])]),t._v(" "),s("li",[s("p",[t._v("Enable HITL mode by selecting "),s("strong",[t._v("Enabled")]),t._v(" from the "),s("em",[t._v("HITL Enabled")]),t._v(" list:")]),t._v(" "),s("p",[s("img",{attrs:{src:a(1561),alt:"QGroundControl HITL 配置"}})])])])]),t._v(" "),s("li",[s("p",[t._v("选择机架")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("打开 "),s("strong",[t._v("Setup > Airframes")]),t._v(" 选项卡。")])]),t._v(" "),s("li",[s("p",[t._v("选择一个你想要进行测试的 "),s("a",{attrs:{href:"#compatible_airframe"}},[t._v("兼容的机架")]),t._v(" 。 Then click "),s("strong",[t._v("Apply and Restart")]),t._v(" on top-right of the "),s("em",[t._v("Airframe Setup")]),t._v(" page.")]),t._v(" "),s("p",[s("img",{attrs:{src:a(1562),alt:"选择机架"}})])])])]),t._v(" "),s("li",[s("p",[t._v("如有必要, 校准您的 RC 遥控器 或操纵杆。")])]),t._v(" "),s("li",[s("p",[t._v("设置 UDP")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Under the "),s("em",[t._v("General")]),t._v(" tab of the settings menu, uncheck all "),s("em",[t._v("AutoConnect")]),t._v(" boxes except for "),s("strong",[t._v("UDP")]),t._v(".")]),t._v(" "),s("p",[s("img",{attrs:{src:a(1563),alt:"GITL 模式 QGC 自动连接设置"}})])])])]),t._v(" "),s("li",[s("p",[t._v("(可选) 配置操纵杆和故障保护。 Set the following "),s("RouterLink",{attrs:{to:"/zh/advanced_config/parameters.html"}},[t._v("parameters")]),t._v(" in order to use a joystick instead of an RC remote control transmitter:")],1),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_RC_IN_MODE"}},[t._v("COM_RC_IN_MODE")]),t._v(' to "Joystick/No RC Checks". 这允许操纵杆输入并禁用 RC 输入检查。')],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#NAV_RCL_ACT"}},[t._v("NAV_RCL_ACT")]),t._v(' to "Disabled". 这可确保在没有无线遥控的情况下运行 HITL 时 RC 失控保护不会介入。')],1)])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("The "),s("em",[t._v("QGroundControl User Guide")]),t._v(" also has instructions on "),s("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/SetupView/Joystick.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Joystick"),s("OutboundLink")],1),t._v(" and "),s("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/SettingsView/VirtualJoystick.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Virtual Joystick"),s("OutboundLink")],1),t._v(" setup.")])]),t._v(" "),s("p",[t._v("Once configuration is complete, "),s("strong",[t._v("close")]),t._v(" "),s("em",[t._v("QGroundControl")]),t._v(" and disconnect the flight controller hardware from the computer.")]),t._v(" "),s("h3",{attrs:{id:"x-plane-hitl-仿真环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#x-plane-hitl-仿真环境"}},[t._v("#")]),t._v(" X-Plane HITL 仿真环境")]),t._v(" "),s("p",[t._v("总而言之， HITL 在真实硬件上运行标准 PX4 固件，而 SITL 实际上要比标准 PX4 系统执行更多的代码。")]),t._v(" "),s("h4",{attrs:{id:"gazebo-classic"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gazebo-classic"}},[t._v("#")]),t._v(" Gazebo Classic")]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),s("p",[t._v("Make sure "),s("em",[t._v("QGroundControl")]),t._v(" is not running!")])]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Build PX4 with "),s("RouterLink",{attrs:{to:"/zh/sim_gazebo_classic/"}},[t._v("Gazebo Classic")]),t._v(" (in order to build the Gazebo Classic plugins).")],1),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Firmware_clone"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("DONT_RUN")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl_default gazebo-classic\n")])])])]),t._v(" "),s("li",[s("p",[t._v("Open the vehicle model's sdf file (e.g. "),s("strong",[t._v("Tools/simulation/gazebo-classic/sitl_gazebo-classic/models/iris_hitl/iris_hitl.sdf")]),t._v(").")])]),t._v(" "),s("li",[s("p",[t._v("找到文件的 "),s("code",[t._v("mavlink_interface plugin")]),t._v(" 分区，将 "),s("code",[t._v("serialEnabled")]),t._v(" 和 "),s("code",[t._v("hil_mode")]),t._v(" 参数更改为 "),s("code",[t._v("true")]),t._v(" 。")])])]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),s("p",[t._v("The serial device depends on what port is used to connect the vehicle to the computer (this is usually "),s("code",[t._v("/dev/ttyACM0")]),t._v("). An easy way to check on Ubuntu is to plug in the autopilot, open up a terminal, and type "),s("code",[t._v('dmesg | grep "tty"')]),t._v(". The correct device will be the last one shown.")])]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Set up the environment variables:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" Tools/simulation/gazebo-classic/setup_gazebo.bash "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("pwd")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("pwd")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("/build/px4_sitl_default\n")])])]),s("p",[t._v("and run Gazebo Classic in HITL mode:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("gazebo Tools/simulation/gazebo-classic/sitl_gazebo-classic/worlds/hitl_iris.world\n")])])])]),t._v(" "),s("li",[s("p",[t._v("Start "),s("em",[t._v("QGroundControl")]),t._v(". It should autoconnect to PX4 and Gazebo Classic.")])])]),t._v(" "),s("h4",{attrs:{id:"jmavsim-仅适用于四旋翼无人机"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jmavsim-仅适用于四旋翼无人机"}},[t._v("#")]),t._v(" jMAVSim (仅适用于四旋翼无人机)")]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),s("p",[t._v("Make sure "),s("em",[t._v("QGroundControl")]),t._v(" is not running!")])]),t._v(" "),s("ol",[s("li",[s("p",[t._v("将飞行控制器连接到计算机, 并等待其启动。")])]),t._v(" "),s("li",[s("p",[t._v("在 HITL 模式下运行 jMAVSim (r如有必要，修改串口号名称 "),s("code",[t._v("/dev/ttyACM0")]),t._v(" - 比如，在 Mac OS 上该参数应为 "),s("code",[t._v("/dev/tty.usbmodem1")]),t._v(")： sh ./Tools/jmavsim_run.sh -q -d /dev/ttyACM0 -b 921600 -r 250")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("./Tools/simulation/jmavsim/jmavsim_run.sh -q -s -d /dev/ttyACM0 -b "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("921600")]),t._v(" -r "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("250")]),t._v("\n")])])])])]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),s("p",[t._v("Replace the serial port name "),s("code",[t._v("/dev/ttyACM0")]),t._v(" as appropriate. On macOS this port would be "),s("code",[t._v("/dev/tty.usbmodem1")]),t._v(". On Windows (including Cygwin) it would be the COM1 or another port - check the connection in the Windows Device Manager.")])]),t._v(" "),s("ol",[s("li",[t._v("Start "),s("em",[t._v("QGroundControl")]),t._v(". 它应该会自动连接 PX4 和 Gazebo 。")])]),t._v(" "),s("h2",{attrs:{id:"在-hitl-仿真中执行自主飞行任务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在-hitl-仿真中执行自主飞行任务"}},[t._v("#")]),t._v(" 在 HITL 仿真中执行自主飞行任务")]),t._v(" "),s("p",[t._v("You should be able to use "),s("em",[t._v("QGroundControl")]),t._v(" to "),s("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/FlyView/FlyView.html#missions",target:"_blank",rel:"noopener noreferrer"}},[t._v("run missions"),s("OutboundLink")],1),t._v(" and otherwise control the vehicle.")])])}),[],!1,null,null,null);e.default=o.exports}}]);