(window.webpackJsonp=window.webpackJsonp||[]).push([[696],{2794:function(t,_,e){"use strict";e.r(_);var a=e(19),r=Object(a.a)({},(function(){var t=this,_=t.$createElement,a=t._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"云台控制设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#云台控制设置"}},[t._v("#")]),t._v(" 云台控制设置")]),t._v(" "),a("p",[t._v("如果你想要去控制一个装在飞机上带相机的云台（或者是其他的挂载设备），你需要配置使用什么去控制它和 PX4 怎样才能命令它。 本页内容就是讲解这些设置。")]),t._v(" "),a("p",[t._v("PX4 包含了一个通用的挂载设备/云台的控制驱动，它含有多种输入输出方式。")]),t._v(" "),a("ul",[a("li",[t._v("输入就是你使用什么去控制云台：通过遥控器或者 MAVLink 命令（例如处在任务模式或者搜索模式时）。")]),t._v(" "),a("li",[t._v("输出定义了云台连接方式：或者通过 MAVLink 命令，或者使用飞控的 AUX PWM 端口。 可以选择任何的输入方式去驱动任何的输出。 两种方式都需要通过参数配置。")])]),t._v(" "),a("h2",{attrs:{id:"参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),a("p",[t._v("这些"),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#mount"}},[t._v("Mount")]),t._v(" 参数被用于配置挂载设备的驱动。")],1),t._v(" "),a("p",[t._v("其中最重要的是输入模式 ("),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MNT_MODE_IN"}},[t._v(" MNT_MODE_IN ")]),t._v(") 和输出模式 ("),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MNT_MODE_OUT"}},[t._v(" MNT_MODE_OUT ")]),t._v(") 。 默认情况下，输入是没有被使能的，所以这个驱动没有运行。 选择了输入模式之后，重启飞机便可以使设备驱动开始工作。")],1),t._v(" "),a("p",[t._v("如果输入模式设置为 "),a("code",[t._v("AUTO")]),t._v("，则模式将根据最新输入进行自动切换。 如果需要从 MAVLink 切换为 RC 输入，则需要一个较大的杆量。")]),t._v(" "),a("h2",{attrs:{id:"mavlink-云台-mnt-mode-out-mavlink"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mavlink-云台-mnt-mode-out-mavlink"}},[t._v("#")]),t._v(" MAVLink 云台(MNT_MODE_OUT=MAVLINK)")]),t._v(" "),a("p",[t._v("要启用 MAVLink 云台，先设置参数"),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MNT_MODE_IN"}},[t._v("MNT_MODE_IN")]),t._v("为"),a("code",[t._v("MAVLINK_DO_MOUNT")]),t._v("，和参数"),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MNT_MODE_OUT"}},[t._v("MNT_MODE_OUT")]),t._v("为"),a("code",[t._v("MAVLINK")]),t._v("。")],1),t._v(" "),a("p",[t._v("云台可以参照[MAVLink 外设 (GCS/OSD/Companion)(../peripherals/mavlink_peripherals.md#mavlink-peripherals-gcsosdcompanion)中的说明连接到"),a("em",[t._v("任何空闲串口")]),t._v("，（也可以参照"),a("RouterLink",{attrs:{to:"/zh/peripherals/serial_configuration.html#serial-port-configuration"}},[t._v("串口配置")]),t._v("）。")],1),t._v(" "),a("p",[t._v("常见的配置是从飞控的 TELEM2 串口连接到云台（假设 TELEM2 是空闲的）。 您将为此配置设置：")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MAV_1_CONFIG"}},[t._v("MAV_1_CONFIG")]),t._v("为"),a("strong",[t._v("TELEM2")]),t._v("（如果"),a("code",[t._v("MAV_1_CONFIG")]),t._v("已经用于连接机载计算机，使用"),a("code",[t._v("MAV_2_CONFIG")]),t._v("）。")],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MAV_1_MODE"}},[t._v("MAV_1_MODE")]),t._v("为"),a("strong",[t._v("NORMAL")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SER_TEL2_BAUD"}},[t._v("SER_TEL2)BAUD")]),t._v("设置为厂家建议的波特率。")],1)]),t._v(" "),a("p",[t._v("这将使用户能够使用 "),a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_DO_MOUNT_CONTROL",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAV_CMD_DO_MOUNT_CONTROL"),a("OutboundLink")],1),t._v(" 和 "),a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_DO_MOUNT_CONFIGURE",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAV_CMD_DOUNT_CONFIGURE"),a("OutboundLink")],1),t._v(" 来命令云台。")]),t._v(" "),a("h2",{attrs:{id:"飞控云台-mnt-mode-out-aux"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#飞控云台-mnt-mode-out-aux"}},[t._v("#")]),t._v(" 飞控云台（MNT_MODE_OUT=AUX）")]),t._v(" "),a("p",[t._v("可以通过设置输出模式"),a("code",[t._v("MNT_MODE_OUT=AUX")]),t._v("，这样云台可以连接到飞控的 AUX 端口。")]),t._v(" "),a("p",[t._v("需要一个混控器文件来定义输出引脚的映射，并自动选择"),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/ROMFS/px4fmu_common/mixers/mount.aux.mix",target:"_blank",rel:"noopener noreferrer"}},[t._v(" mount mixer"),a("OutboundLink")],1),t._v("（这会覆盖机架配置提供的任何 AUX 混控器）。")]),t._v(" "),a("p",[t._v("输出分配如下所示：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("AUX1")]),t._v(": Pitch")]),t._v(" "),a("li",[a("strong",[t._v("AUX2")]),t._v(": Roll")]),t._v(" "),a("li",[a("strong",[t._v("AUX3")]),t._v(": Yaw")]),t._v(" "),a("li",[a("strong",[t._v("AUX4")]),t._v(": Shutter/retract")])]),t._v(" "),a("h3",{attrs:{id:"自定义混控器配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义混控器配置"}},[t._v("#")]),t._v(" 自定义混控器配置")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("阅读"),a("RouterLink",{attrs:{to:"/zh/concept/mixing.html"}},[t._v("混控和执行器")]),t._v("来理解混控器的工作方式和混控器的文件格式。")],1)]),t._v(" "),a("p",[t._v("输出自定义可以通过在 SD卡上"),a("RouterLink",{attrs:{to:"/zh/concept/system_startup.html#starting-a-custom-mixer"}},[t._v("创建一个混控器文件")]),t._v("名字为"),a("code",[t._v("etc/mixers/mount.aux.mix")]),t._v("实现。")],1),t._v(" "),a("p",[t._v("下面是一个挂载基本混控器的配置。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# roll\nM: 1\nO:      10000  10000      0 -10000  10000\nS: 2 0  10000  10000      0 -10000  10000\n\n# pitch\nM: 1\nO:      10000  10000      0 -10000  10000\nS: 2 1  10000  10000      0 -10000  10000\n\n# yaw\nM: 1\nO:      10000  10000      0 -10000  10000\nS: 2 2  10000  10000      0 -10000  10000\n\n")])])]),a("h2",{attrs:{id:"sitl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sitl"}},[t._v("#")]),t._v(" SITL")]),t._v(" "),a("p",[t._v("Typhoon H480 型号带有预先配置的模拟云台。")]),t._v(" "),a("p",[t._v("要运行它，请使用：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("make px4_sitl gazebo_typhoon_h480\n")])])]),a("p",[t._v("为了能够在其他模型或者仿真器件下测试挂载驱动，请使用 "),a("code",[t._v("vmount start")]),t._v(" 去确保驱动正在运行。 然后再配置它的参数。")]),t._v(" "),a("h2",{attrs:{id:"测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试"}},[t._v("#")]),t._v(" 测试")]),t._v(" "),a("p",[t._v("驱动程序提供了一个简单的测试指令。 首先它需要使用 "),t._v("vmount stop</0> 指令来停止。 接下来描述了在SITL中的测试方式，但是这些指令也可以在真实的设备中使用。")]),t._v(" "),a("p",[t._v("使用下面这条指令开始仿真（不需要修改任何参数）：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("make px4_sitl gazebo_typhoon_h480\n")])])]),a("p",[t._v("确保无人机是上锁状态，例如使用"),a("code",[t._v("命令行 takeoff")]),t._v("， 然后用下面的命令来控制云台（例如）：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("vmount test yaw 30\n")])])]),a("p",[t._v("注意模拟的云台自身稳定，因此如果发送 MAVLink 命令，设置"),a("code",[t._v("stabilize")]),t._v("标志为"),a("code",[t._v("false")]),t._v("。")]),t._v(" "),a("p",[a("img",{attrs:{src:e(454),alt:"Gazebo 云台仿真"}})])])}),[],!1,null,null,null);_.default=r.exports},454:function(t,_,e){t.exports=e.p+"assets/img/gimbal-simulation.bbac9883.png"}}]);