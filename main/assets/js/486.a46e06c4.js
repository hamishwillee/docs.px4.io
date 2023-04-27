(window.webpackJsonp=window.webpackJsonp||[]).push([[486],{1338:function(t,e,a){t.exports=a.p+"assets/img/mode1_mode2.ad4a1ca7.png"},3424:function(t,e,a){"use strict";a.r(e);var r=a(19),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"遥控系统"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#遥控系统"}},[t._v("#")]),t._v(" 遥控系统")]),t._v(" "),r("p",[t._v("A radio control (RC) system is required if you want to "),r("em",[t._v("manually")]),t._v(" control your vehicle from a handheld transmitter. 这个章节解释了一些关于 RC 如何工作，如何为你的飞行器（车辆）选择一个合适的无线电系统和怎么连接到飞控。")]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("PX4 在自动飞行模式可以不需要遥控器。 可以在[参数设置](../advanced_config/parameters.md)里禁用遥控器检查: [COM_RC_IN_MODE](../advanced_config/parameter_reference.md#COM_RC_IN_MODE) 设置为1. :::")]),t._v(" "),r("h2",{attrs:{id:"遥控系统是如何工作的"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#遥控系统是如何工作的"}},[t._v("#")]),t._v(" 遥控系统是如何工作的？")]),t._v(" "),r("p",[t._v("An "),r("em",[t._v("RC system")]),t._v(" has a ground-based "),r("em",[t._v("remote control unit")]),t._v(" that is used by the operator to command the vehicle. 远程控制单元有物理结构来控制无人机的运动（例如，速度、方向、油门、偏航、俯仰和横滚等）和 "),r("RouterLink",{attrs:{to:"/zh/flight_modes/"}},[t._v("飞行模式 ")]),t._v("（例如，起飞、着陆、返航、任务等）。 On "),r("em",[t._v("telemetry-enabled")]),t._v(" RC systems, the remote control unit can also receive and display information from the vehicle (e.g. battery level, flight mode).")],1),t._v(" "),r("p",[r("img",{attrs:{src:a(409),alt:"Taranis X9D Transmitter"}})]),t._v(" "),r("p",[t._v("远程控制单元有一个可以和飞机上的无线电模块相互绑定、通信的无线电模块。 飞机上的单元连接到飞控上。 自驾仪根据当前飞机的飞行模式和飞机状态来发送命令，正确驱动电机和伺服器。")]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),r("p",[t._v("The ground- and vehicle- based radio modules are referred to as the transmitter and receiver respectively (even if they support bidirectional communication) and are collectively referred to as a "),r("em",[t._v("transmitter/receiver pair")]),t._v(". 远程控制单元和它包含的无线模块也被称作“发射机”。 :::")]),t._v(" "),r("p",[t._v("遥控系统的一个重要质量指标是它支持多少个通道。 通道的数量决定了远程控制单元上多少个物理控制器可以用来发送命令来控制无人机（比如多少开关、转盘、控制摇杆可以用）。")]),t._v(" "),r("p",[t._v("一个飞行器最少支持4个通道（横滚、俯仰、偏航、油门）。 地面车辆最少需要两个通道（转向和油门）。 8或16通道的遥控器可以提供额外的通道，用来控制其他机械结构或激活自驾仪上不同的"),r("RouterLink",{attrs:{to:"/zh/flight_modes/"}},[t._v("飞行模式")]),t._v("。")],1),t._v(" "),r("h2",{attrs:{id:"远程控制的类型"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#远程控制的类型"}},[t._v("#")]),t._v(" 远程控制的类型")]),t._v(" "),r("p",[r("span",{attrs:{id:"transmitter_modes"}})]),t._v(" "),r("h3",{attrs:{id:"飞机的远程控制单元"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#飞机的远程控制单元"}},[t._v("#")]),t._v(" 飞机的远程控制单元")]),t._v(" "),r("p",[t._v("The most popular "),r("em",[t._v("form")]),t._v(" of remote control unit for UAVs is shown below. 横滚/俯仰和油门/偏航的控制分别布置在摇杆上（飞行器最少需要4个通道）。")]),t._v(" "),r("p",[r("img",{attrs:{src:a(400),alt:"RC Basic Commands"}})]),t._v(" "),r("p",[t._v("摇杆、开关等有许多可能的布局。 最常用的布局被给予了特定的“模式”号。 "),r("em",[t._v("Mode 1")]),t._v(" and "),r("em",[t._v("Mode 2")]),t._v(" (shown below) differ only in the placement of the throttle.")]),t._v(" "),r("p",[r("img",{attrs:{src:a(1338),alt:"Mode1-Mode2"}})]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),r("p",[t._v("The choice of mode is largely one of taste ("),r("em",[t._v("Mode 2")]),t._v(" is more popular). :::")]),t._v(" "),r("h2",{attrs:{id:"地面设备的远程控制单元"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#地面设备的远程控制单元"}},[t._v("#")]),t._v(" 地面设备的远程控制单元")]),t._v(" "),r("p",[t._v("一个 UGV/车辆最少需要两个发射机通道来发送转向和速度指令。 常见的发射机使用一个滚轮和扳机、两个单自由度的摇杆、或一个双自由度的摇杆来发射这些指令。")]),t._v(" "),r("p",[t._v("当然你也可以使用更多的通道/控制机构，其他有趣的激励器和飞行模式也非常有用。")]),t._v(" "),r("h2",{attrs:{id:"选择-rc-系统组件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#选择-rc-系统组件"}},[t._v("#")]),t._v(" 选择 RC 系统组件")]),t._v(" "),r("p",[t._v("你需要选择互相兼容的成对发射机/接收机。 另外，接收机必须兼容 "),r("a",{attrs:{href:"#compatible_receivers"}},[t._v("PX4")]),t._v("和飞行控制器硬件。")]),t._v(" "),r("p",[t._v("兼容的无线系统通常一起销售。 例如，"),r("a",{attrs:{href:"https://hobbyking.com/en_us/frsky-2-4ghz-accst-taranis-x9d-plus-and-x8r-combo-digital-telemetry-radio-system-mode-2.html?___store=en_us",target:"_blank",rel:"noopener noreferrer"}},[t._v("FrSky Taranis X9D 和 FrSky X8R"),r("OutboundLink")],1),t._v("是一个受欢迎的选择。")]),t._v(" "),r("h3",{attrs:{id:"成对的发射机-接收机"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#成对的发射机-接收机"}},[t._v("#")]),t._v(" 成对的发射机/接收机")]),t._v(" "),r("p",[t._v("One of the most popular RC units is the "),r("em",[t._v("FrSky Taranis X9D")]),t._v(". It has an internal transmitter module can be used with the recommended "),r("em",[t._v("FrSky X4R-SB")]),t._v(" (S-BUS, low delay) or "),r("em",[t._v("X4R")]),t._v(" (PPM-Sum, legacy) receivers out of the box. 它还有一个可以自定义的无线发射机模块接口和自定义的 OpenTX 开源固件。")]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),r("p",[t._v("使用"),r("RouterLink",{attrs:{to:"/zh/peripherals/frsky_telemetry.html"}},[t._v(" FrSky ")]),t._v("的无线模块可以开启遥测功能。 :::")],1),t._v(" "),r("p",[t._v("其他常用的成对发射机/接收机。")]),t._v(" "),r("ul",[r("li",[t._v("Turnigy，例如，FrSky的发射机/接收机模块。")]),t._v(" "),r("li",[t._v("Futaba 发射机和兼容 Futaba S-Bus 接收机。")]),t._v(" "),r("li",[t._v("远距离~900MHz，低延迟：“黑羊的Crossfire”或“Crossfire Micro”。（例如，Taranis）。")]),t._v(" "),r("li",[t._v("长距离 ~433MHz：ImmersionRC EzUHF(例如，Taranis)。")])]),t._v(" "),r("p",[r("span",{attrs:{id:"compatible_receivers"}})]),t._v(" "),r("h3",{attrs:{id:"px4-兼容的接收机"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#px4-兼容的接收机"}},[t._v("#")]),t._v(" PX4 兼容的接收机")]),t._v(" "),r("p",[t._v("另外接收机和发射机需要兼容，接收机也必须和 PX4 和其他控制硬件兼容。")]),t._v(" "),r("p",[r("em",[t._v("PX4")]),t._v(" and "),r("em",[t._v("Pixhawk")]),t._v(" have been validated with:")]),t._v(" "),r("ul",[r("li",[t._v("所有的 Spektrum 和 DSM 无线接收机。")]),t._v(" "),r("li",[t._v("所有的 Futaba S.BUS 和 S.BUS2 接收机。")]),t._v(" "),r("li",[t._v("所有的 FrSky PPM 和 S.Bus 模块。")]),t._v(" "),r("li",[t._v("Graupner HoTT。（一种新的2.4 g 无线通信技术，可以语音遥测和搭配大量传感器，可以进行4 km或100 mW 范围内的控制 ）")]),t._v(" "),r("li",[t._v("所有其他制造商的 PPM 模块。")])]),t._v(" "),r("h2",{attrs:{id:"连接接收机"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#连接接收机"}},[t._v("#")]),t._v(" 连接接收机")]),t._v(" "),r("p",[t._v("作为一般指导，接收器连接到飞行控制器使用支持其协议的端口:")]),t._v(" "),r("ul",[r("li",[t._v("Spektrum and DSM receivers must connect to a "),r("strong",[t._v("SPKT/DSM")]),t._v(" input.")]),t._v(" "),r("li",[t._v("Graupner HoTT receivers: SUMD output must connect to a "),r("strong",[t._v("SPKT/DSM")]),t._v(" input.")]),t._v(" "),r("li",[t._v("PPM-Sum and S.BUS receivers must connect directly to the "),r("strong",[t._v("RC")]),t._v(" ground, power and signal pins (typically labeled RC or RCIN)")]),t._v(" "),r("li",[t._v("PPM receivers that have an individual wire for each channel must connect to the RCIN channel "),r("em",[t._v("via")]),t._v(" a PPM encoder "),r("a",{attrs:{href:"http://www.getfpv.com/radios/radio-accessories/holybro-ppm-encoder-module.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("like this one"),r("OutboundLink")],1),t._v(" (PPM-Sum receivers use a single signal wire for all channels).")])]),t._v(" "),r("p",[t._v("特定遥控器的连接可以查阅下面提供的快速指南。")]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/zh/assembly/quick_start_pixhawk.html#radio-control"}},[t._v("Pixhawk 1")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/zh/assembly/quick_start_pixracer.html"}},[t._v("Pixracer")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/zh/assembly/quick_start_pixhawk4.html"}},[t._v("Pixhawk 4")])],1)]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),r("p",[t._v("相关信息可以查阅遥控器制造商提供的说明书。")])])])])])]),t._v(" "),r("p",[r("span",{attrs:{id:"binding"}})]),t._v(" "),r("h2",{attrs:{id:"发射机-接收机对频"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#发射机-接收机对频"}},[t._v("#")]),t._v(" 发射机/接收机对频")]),t._v(" "),r("p",[t._v("Before you can calibrate/use a radio system you must "),r("em",[t._v("bind")]),t._v(" the receiver and transmitter so that they communicate only with each other. 各种遥控器的对频方法各不相同（参照遥控器说明书）。")]),t._v(" "),r("p",[t._v("If you are using a "),r("em",[t._v("Spektrum")]),t._v(" receiver, you can put it into bind mode using "),r("em",[t._v("QGroundControl")]),t._v(": "),r("RouterLink",{attrs:{to:"/zh/config/radio.html#spectrum-bind"}},[t._v("Radio Setup > Spectrum Bind")]),t._v(".")],1),t._v(" "),r("h2",{attrs:{id:"设置信号丢失动作"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#设置信号丢失动作"}},[t._v("#")]),t._v(" 设置信号丢失动作")]),t._v(" "),r("p",[t._v("遥控器接收器有不同方式指示信号损失：")]),t._v(" "),r("ul",[r("li",[t._v("无输出(由PX4自动检测)")]),t._v(" "),r("li",[t._v("Output a low throttle value (you can "),r("RouterLink",{attrs:{to:"/zh/config/radio.html#rc-loss-detection"}},[t._v("configure PX4 to detect this")]),t._v(").")],1),t._v(" "),r("li",[t._v("输出最后收到的信号 (PX4 无法处理此情况!)")])]),t._v(" "),r("p",[t._v("首选一个当RC断开时无输出的接收机，然后才是低油门的接收机。 可能需要配置接收器(请参阅手册)。")]),t._v(" "),r("p",[t._v("For more information see "),r("RouterLink",{attrs:{to:"/zh/config/radio.html#rc-loss-detection"}},[t._v("Radio Control Setup > RC Loss Detection")]),t._v(".")],1),t._v(" "),r("h2",{attrs:{id:"相关章节"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#相关章节"}},[t._v("#")]),t._v(" 相关章节")]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/zh/config/radio.html"}},[t._v("遥控器设置")]),t._v(" - 使用 PX4设置你的遥控器。")],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/zh/flying/basic_flying.html"}},[t._v("飞行 101")]),t._v(" - 学习如何使用遥控器飞行。")],1)])])}),[],!1,null,null,null);e.default=s.exports},400:function(t,e,a){t.exports=a.p+"assets/img/rc_basic_commands.3311bd90.png"},409:function(t,e,a){t.exports=a.p+"assets/img/frsky_taranis_x9d_transmitter.a26963aa.jpg"}}]);