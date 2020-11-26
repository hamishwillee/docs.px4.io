(window.webpackJsonp=window.webpackJsonp||[]).push([[211],{1225:function(t,r,v){t.exports=v.p+"assets/img/frsky_telemetry_overview.421144e2.jpg"},1226:function(t,r,v){t.exports=v.p+"assets/img/taranis_telemetry.062d2a3f.jpg"},1227:function(t,r,v){t.exports=v.p+"assets/img/craft_and_theory_frsky_telemetry_cables.033a9fee.jpg"},2545:function(t,r,v){"use strict";v.r(r);var _=v(18),e=Object(_.a)({},(function(){var t=this,r=t.$createElement,_=t._self._c||r;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"睿思凯-frsky-数传功能"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#睿思凯-frsky-数传功能"}},[t._v("#")]),t._v(" 睿思凯（FrSky）数传功能")]),t._v(" "),_("p",[t._v("睿思凯遥测功能允许你在兼容的遥控器发射机上访问载具的 "),_("a",{attrs:{href:"#messages"}},[t._v("遥测或状态信息")]),t._v("。")]),t._v(" "),_("p",[t._v("有效的 "),_("a",{attrs:{href:"#messages"}},[t._v("遥测信息如下所示")]),t._v("，包括：飞行模式、电池信息、遥控信号强度、速度、高度等。 某些型号的发射机还可以提供声音和震动的反馈，这对于低电量和其他故障安全警告特别有用。")]),t._v(" "),_("p",[t._v("PX4平台支持睿思凯的 "),_("a",{attrs:{href:"#s_port"}},[t._v("S.port")]),t._v("（新）和D.port（旧）两种类型的遥测数据接口。")]),t._v(" "),_("h2",{attrs:{id:"硬件安装"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#硬件安装"}},[t._v("#")]),t._v(" 硬件安装")]),t._v(" "),_("p",[t._v("FrSky telemetry requires:")]),t._v(" "),_("ul",[_("li",[t._v("一个"),_("a",{attrs:{href:"#transmitters"}},[t._v("睿思凯兼容遥控发射机")]),t._v("，比如睿思凯 Taranis X9D Plus；")]),t._v(" "),_("li",[t._v("一个"),_("a",{attrs:{href:"#receivers"}},[t._v("睿思凯遥测接收机")]),t._v("，比如XSR和X8R；")]),t._v(" "),_("li",[t._v("A cable to connect the FrSky receiver Smart Port (SPort) to a flight controller UART.")])]),t._v(" "),_("p",[t._v("First "),_("RouterLink",{attrs:{to:"/zh/getting_started/rc_transmitter_receiver.html#connecting-receivers"}},[t._v("connect the receiver for RC channels")]),t._v(", e.g. connect the S.Bus ports on the reciever and the flight controller.")],1),t._v(" "),_("p",[t._v("Then set up FrSky telemetry by separately connecting the SPort on the receiver to any free UART on the flight controller, and then "),_("a",{attrs:{href:"#configure"}},[t._v("configure PX4 to run FrSky telemetry on that UART")]),t._v(".")]),t._v(" "),_("p",[t._v("This is done slightly differently, depending on whether the SPort receiver has a pin for an uninverted output, and/or the Pixhawk version.")]),t._v(" "),_("h3",{attrs:{id:"pixhawk-fmuv4-and-prior"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#pixhawk-fmuv4-and-prior"}},[t._v("#")]),t._v(" Pixhawk FMUv4 (and prior)")]),t._v(" "),_("p",[t._v("For Pixhawk FMUv4 and earlier, UART ports and receiver telemetry ports are typically incompatible (with the exception of "),_("RouterLink",{attrs:{to:"/zh/flight_controller/pixracer.html"}},[t._v("Pixracer")]),t._v(").")],1),t._v(" "),_("p",[t._v("Generally SPort receivers have an "),_("em",[t._v("inverted")]),t._v(" S.Port signal and you have to use a converter cable to split the S.Port into uninverted TX and RX for connecting to the Pixhawk UART. An example is shown below.")]),t._v(" "),_("p",[_("img",{attrs:{src:v(1225),alt:"FrSky-Taranis-遥测"}})]),t._v(" "),_("blockquote",[_("p",[_("strong",[t._v("Tip")]),t._v(" When connecting to an inverted S.Port it is usually cheaper and easier to buy a "),_("a",{attrs:{href:"#ready_made_cable"}},[t._v("ready made cable")]),t._v(" that contains this adapter and has the appropriate connectors for the autopilot and receiver. 自制一个"),_("a",{attrs:{href:"#diy_cables"}},[t._v("DIY转接线缆")]),t._v("需要专业的电子装配技术。")])]),t._v(" "),_("p",[t._v("If using an S.Port receiver with a pin for "),_("em",[t._v("uninverted output")]),t._v(" you can simply attach one of the UART's TX pins. ")]),t._v(" "),_("p",[t._v("Then "),_("a",{attrs:{href:"#configure"}},[t._v("configure PX4")]),t._v(".")]),t._v(" "),_("h3",{attrs:{id:"pixhawk-fmuv5-stm32f7-and-later"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#pixhawk-fmuv5-stm32f7-and-later"}},[t._v("#")]),t._v(" Pixhawk FMUv5/STM32F7 and later")]),t._v(" "),_("p",[t._v("For Pixhawk FMUv5 and later PX4 can read either inverted (or uninverted) S.Port signals directly - no special cable is required.")]),t._v(" "),_("blockquote",[_("p",[_("strong",[t._v("Note")]),t._v(" More generally this is true on autopilots with STM32F7 or later (e.g. "),_("RouterLink",{attrs:{to:"/zh/flight_controller/durandal.html"}},[t._v("Durandal")]),t._v(" has a STM32H7 and can read inverted or uninverted S.Port signals directly).")],1)]),t._v(" "),_("p",[t._v("Simply attach one of the UART's TX pins to the SPort inverted or uninverted pin (PX4 will auto-detect and handle either type). Then "),_("a",{attrs:{href:"#configure"}},[t._v("configure PX4")]),t._v(".")]),t._v(" "),_("p",[_("span",{attrs:{id:"configure"}})]),t._v(" "),_("h2",{attrs:{id:"px4配置"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#px4配置"}},[t._v("#")]),t._v(" PX4配置")]),t._v(" "),_("p",[t._v("睿思凯遥控器使用"),_("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#TEL_FRSKY_CONFIG"}},[t._v("TEL_FRSKY_CONFIG")]),t._v("运行的"),_("RouterLink",{attrs:{to:"/zh/peripherals/serial_configuration.html"}},[t._v("串口配置")]),t._v(". 无需设置端口的波特率, 因为这是由驱动程序配置的。")],1),t._v(" "),_("blockquote",[_("p",[_("strong",[t._v("Note")]),t._v("您可以使用任何可用的 uart, 但通常 "),_("code",[t._v("TELEM 2")]),t._v(" 用于 frsky 遥测 ("),_("RouterLink",{attrs:{to:"/zh/flight_controller/pixracer.html"}},[t._v("Pixracer")]),t._v(" 除外, 默认情况下, 它被预先配置为使用 "),_("em",[t._v("FrSky")]),t._v(" 端口)。")],1)]),t._v(" "),_("p",[_("span")]),t._v(" "),_("blockquote",[_("p",[_("strong",[t._v("Tip")]),t._v(" 如果配置参数在 "),_("em",[t._v("QGroundControl")]),t._v(" 中不可用, 则可能需要 添加驱动程序到固件 </1 >: "),_("code",[t._v("drivers/telemetry/frsky_telemetry")])])]),_("p"),t._v(" "),_("p",[t._v("至此，不需要进一步的配置; frsky 遥测在连接时自动启动, 并检测d 或 s 模式的接收机。")]),t._v(" "),_("p",[_("span",{attrs:{id:"transmitters"}})]),t._v(" "),_("blockquote",[_("h2",{attrs:{id:"兼容遥控发射机"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#兼容遥控发射机"}},[t._v("#")]),t._v(" 兼容遥控发射机")]),t._v(" "),_("p",[t._v("您将需要一个可以接收遥测数据流的遥控发射机，并且绑定到了睿思凯的接收机。")]),t._v(" "),_("p",[t._v("主流的可选方案有：")]),t._v(" "),_("ul",[_("li",[t._v("FrSky Taranis X9D Plus (推荐)")]),t._v(" "),_("li",[t._v("FrSky Taranis X9D")]),t._v(" "),_("li",[t._v("FrSky Taranis X9E")]),t._v(" "),_("li",[t._v("FrSky Taranis Q X7")]),t._v(" "),_("li",[t._v("Turnigy 9XR Pro")])]),t._v(" "),_("p",[t._v("上面这些发射机无需任何进一步的配置即可显示遥测数据。 以下部分将解释如何自定义遥测显示界面（例如，创建更友好的UI/UX）。")]),t._v(" "),_("h3",{attrs:{id:"taranis脚本设置-luapilot"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#taranis脚本设置-luapilot"}},[t._v("#")]),t._v(" Taranis脚本设置(LuaPilot)")]),t._v(" "),_("p",[t._v("运行OpenTX 2.1.6或更新版本的兼容Taranis发射机(例如X9D Plus)，可以使用LuaPilot脚本修改显示的遥测数据(如下面的截图所示)。")]),t._v(" "),_("p",[_("img",{attrs:{src:v(1226),alt:"Taranis 遥控器上的遥测回传界面"}})]),t._v(" "),_("p",[t._v("这里可以找到安装脚本的说明: "),_("a",{attrs:{href:"http://ilihack.github.io/LuaPilot_Taranis_Telemetry/",target:"_blank",rel:"noopener noreferrer"}},[t._v("LuaPilot Taranis Telemetry script > Taranis Setup OpenTX 2.1.6 or newer"),_("OutboundLink")],1)]),t._v(" "),_("p",[t._v("如果您使用文本编辑工具打开"),_("code",[t._v("LuaPilot脚本")]),t._v("，您可以进行编辑配置。 建议修改包括：")]),t._v(" "),_("ul",[_("li",[_("code",[t._v("local BattLevelmAh = -1")]),t._v(" 使用载机计算的电池信息；")]),t._v(" "),_("li",[_("code",[t._v("local SayFlightMode = 0")]),t._v("没有可供PX4飞行模式使用的WAV音频文件 遥测信息")])])]),t._v(" "),_("p",[_("span",{attrs:{id:"messages"}})]),t._v(" "),_("blockquote",[_("h2",{attrs:{id:"遥测信息"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#遥测信息"}},[t._v("#")]),t._v(" 遥测信息")]),t._v(" "),_("p",[t._v("睿思凯遥测技术可以从PX4传输大部分有用的状态信息回来。 S. port和D. port接收机传输不同的消息集，如下所示。")])]),t._v(" "),_("p",[_("span",{attrs:{id:"s_port"}})]),t._v(" "),_("blockquote",[_("h3",{attrs:{id:"s-port"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#s-port"}},[t._v("#")]),t._v(" S-Port")]),t._v(" "),_("p",[t._v("S-Port接收机从 PX4传输以下信息 (from "),_("a",{attrs:{href:"https://github.com/iNavFlight/inav/blob/master/docs/Telemetry.md#available-smartport-sport-sensors",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),_("OutboundLink")],1),t._v("):")]),t._v(" "),_("ul",[_("li",[t._v("**AccX, accy, accz:**加速度计数值。")]),t._v(" "),_("li",[t._v("**Alt:**基于气压计的高度, 初始化水平为零。")]),t._v(" "),_("li",[t._v("**Curr:**实际电流消耗 (安培)。")]),t._v(" "),_("li",[t._v("**Fuel:**当"),_("code",[t._v("电池容量")]),t._v("参数和 smartport_fuel_percent = on</1 >参数设置好了, 则剩余电池剩余容量百分比，否则显示电池消耗容量时, 。")]),t._v(" "),_("li",[_("strong",[t._v("Alt:")]),t._v("基于气压计的高度, 初始化水平为零。")]),t._v(" "),_("li",[_("strong",[t._v("GPS:")]),t._v("gps 坐标。")]),t._v(" "),_("li",[_("strong",[t._v("GSpd:")]),t._v("当前相对水平地面速度, 由 gps 计算。")]),t._v(" "),_("li",[_("strong",[t._v("Hdg:")]),t._v("机头朝向 (正北为 0°)。")]),t._v(" "),_("li",[_("strong",[t._v("VFAS:")]),t._v("实际电池电压值 (电压 frsky 安培传感器)。")]),t._v(" "),_("li",[_("strong",[t._v("Vspd:")]),t._v("垂直速度 (cm/s)。")]),t._v(" "),_("li",[_("strong",[t._v("Tmp1:")]),_("a",{attrs:{href:"../getting_started/flight_modes.md"}},[t._v("飞行模式")]),t._v(", 作为整数发送: 18-手动, 23-定高, 22-定位, 27-任务, 26-保持, 28-返航, 19-特技, 24 0 离线, 20-自稳, 21-速率, 25-起飞, 29-下降, 30-跟随。")]),t._v(" "),_("li",[_("strong",[t._v("Tmp2:")]),t._v("gps 信息。 最右边的数字是 gps 定位类型 (0 = 无, 2 = 2d, 3 = 3d)。 其他数字是卫星的数量。")])])]),t._v(" "),_("blockquote",[_("p",[_("strong",[t._v("Note")]),t._v('px4 不支持以下 "标准" s 端口消息: '),_("strong",[t._v("ASpd")]),t._v("、"),_("strong",[t._v("A4")]),t._v("。")])]),t._v(" "),_("h3",[t._v("D-port")]),t._v(" "),_("p",[t._v("D-Port 接收机从PX4传输以下信息(from "),_("a",{attrs:{href:"https://github.com/cleanflight/cleanflight/blob/master/docs/Telemetry.md"}},[t._v("here")]),t._v("):")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("AccX, accy, accz:")]),t._v("加速度计数值。")]),t._v(" "),_("li",[_("strong",[t._v("Alt:")]),t._v("基于气压计的高度, 初始化水平为零。")]),t._v(" "),_("li",[_("strong",[t._v("Cels:")]),t._v("平均电池电压值 (电池电压除以电池片数)。")]),t._v(" "),_("li",[_("strong",[t._v("Curr:")]),t._v("实际电流消耗 (安培)。")]),t._v(" "),_("li",[_("strong",[t._v("Fuel:")]),t._v("如果设置了容量, 则剩余电池百分比, 否则显示消耗电量。")]),t._v(" "),_("li",[_("strong",[t._v("Date:")]),t._v("通电后运行时间。")]),t._v(" "),_("li",[_("strong",[t._v("Alt:")]),t._v("基于气压计的高度, 初始化水平为零。")]),t._v(" "),_("li",[_("strong",[t._v("GPS:")]),t._v("gps 坐标。")]),t._v(" "),_("li",[_("strong",[t._v("GSpd:")]),t._v("当前速度, 由 gps 计算。")]),t._v(" "),_("li",[_("strong",[t._v("Hdg:")]),t._v("机头朝向 (正北为 0°)。")]),t._v(" "),_("li",[_("strong",[t._v("RPM:")]),t._v("解锁后为油门数值, 否则为电池容量。 请注意, 在Taranis上，电池片数需要设置为12。")]),t._v(" "),_("li",[_("strong",[t._v("Tmp1:")]),t._v("飞行模式 (适用于 s-port)。")]),t._v(" "),_("li",[_("strong",[t._v("Tmp2:")]),t._v("gps 信息 (适用于 s-port)。")]),t._v(" "),_("li",[_("strong",[t._v("VFAS:")]),t._v("实际电池电压值 (电压 frsky 安培传感器)。")]),t._v(" "),_("li",[_("strong",[t._v("Vspd:")]),t._v("垂直速度 (cm/s)。")])]),t._v(" "),_("p"),_("p",[_("span",{attrs:{id:"receivers"}})]),t._v(" "),_("p"),t._v(" "),_("h2",[t._v("睿思凯遥测接收机")]),t._v(" "),_("p",[t._v("Pixhawk/PX4支持睿思凯的D. port和S. port遥测功能。 下表是所有通过D.port/S.port支持遥测功能的睿思凯接收机。（理论上，这些都是可以正常工作的。）")]),t._v(" "),_("blockquote",[_("p",[_("strong",[t._v("Tip")]),t._v("值得注意的是，下面列出的X系列接收机是推荐可用的，如XSR、X8R。 R系列和G系列还没有经过测试团队的测试，但是应该也是可以工作的。")])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("接收机")]),t._v(" "),_("th",[t._v("范围")]),t._v(" "),_("th",[t._v("集成输出")]),t._v(" "),_("th",[t._v("数字遥测输入")]),t._v(" "),_("th",[t._v("尺寸")]),t._v(" "),_("th",[t._v("重量")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("D4R-II")]),t._v(" "),_("td",[t._v("1.5km")]),t._v(" "),_("td",[t._v("CPPM (8)")]),t._v(" "),_("td",[t._v("D.Port")]),t._v(" "),_("td",[t._v("40x22.5x6mm")]),t._v(" "),_("td",[t._v("5.8g")])]),t._v(" "),_("tr",[_("td",[t._v("D8R-XP")]),t._v(" "),_("td",[t._v("1.5km")]),t._v(" "),_("td",[t._v("CPPM (8)")]),t._v(" "),_("td",[t._v("D.Port")]),t._v(" "),_("td",[t._v("55x25x14mm")]),t._v(" "),_("td",[t._v("12.4g")])]),t._v(" "),_("tr",[_("td",[t._v("D8R-II Plus")]),t._v(" "),_("td",[t._v("1.5km")]),t._v(" "),_("td",[t._v("否")]),t._v(" "),_("td",[t._v("D.Port")]),t._v(" "),_("td",[t._v("55x25x14mm")]),t._v(" "),_("td",[t._v("12.4g")])]),t._v(" "),_("tr",[_("td",[t._v("X4R")]),t._v(" "),_("td",[t._v("1.5km")]),t._v(" "),_("td",[t._v("CPPM (8)")]),t._v(" "),_("td",[t._v("Smart Port")]),t._v(" "),_("td",[t._v("40x22.5x6mm")]),t._v(" "),_("td",[t._v("5.8g")])]),t._v(" "),_("tr",[_("td",[t._v("X4R-SB")]),t._v(" "),_("td",[t._v("1.5km")]),t._v(" "),_("td",[t._v("S.Bus (16)")]),t._v(" "),_("td",[t._v("Smart Port")]),t._v(" "),_("td",[t._v("40x22.5x6mm")]),t._v(" "),_("td",[t._v("5.8g")])]),t._v(" "),_("tr",[_("td",[t._v("X6R / S6R")]),t._v(" "),_("td",[t._v("1.5km")]),t._v(" "),_("td",[t._v("S.Bus (16)")]),t._v(" "),_("td",[t._v("Smart Port")]),t._v(" "),_("td",[t._v("47.42×23.84×14.7mm")]),t._v(" "),_("td",[t._v("15.4g")])]),t._v(" "),_("tr",[_("td",[t._v("X8R / S8R")]),t._v(" "),_("td",[t._v("1.5km")]),t._v(" "),_("td",[t._v("S.Bus (16)")]),t._v(" "),_("td",[t._v("Smart Port")]),t._v(" "),_("td",[t._v("46.25 x 26.6 x 14.2mm")]),t._v(" "),_("td",[t._v("16.6g")])]),t._v(" "),_("tr",[_("td",[t._v("XSR / XSR-M")]),t._v(" "),_("td",[t._v("1.5km")]),t._v(" "),_("td",[t._v("S.Bus (16) / CPPM (8)")]),t._v(" "),_("td",[t._v("Smart Port")]),t._v(" "),_("td",[t._v("26x19.2x5mm")]),t._v(" "),_("td",[t._v("3.8g")])]),t._v(" "),_("tr",[_("td",[t._v("RX8R")]),t._v(" "),_("td",[t._v("1.5km")]),t._v(" "),_("td",[t._v("S.Bus (16)")]),t._v(" "),_("td",[t._v("Smart Port")]),t._v(" "),_("td",[t._v("46.25x26.6x14.2mm")]),t._v(" "),_("td",[t._v("12.1g")])]),t._v(" "),_("tr",[_("td",[t._v("RX8R PRO")]),t._v(" "),_("td",[t._v("1.5km")]),t._v(" "),_("td",[t._v("S.Bus (16)")]),t._v(" "),_("td",[t._v("Smart Port")]),t._v(" "),_("td",[t._v("46.25x26.6x14.2mm")]),t._v(" "),_("td",[t._v("12.1g")])]),t._v(" "),_("tr",[_("td",[t._v("R-XSR")]),t._v(" "),_("td",[t._v("1.5km")]),t._v(" "),_("td",[t._v("S.Bus (16) / CPPM (8)")]),t._v(" "),_("td",[t._v("Smart Port")]),t._v(" "),_("td",[t._v("16x11x5.4mm")]),t._v(" "),_("td",[t._v("1.5g")])]),t._v(" "),_("tr",[_("td",[t._v("G-RX8")]),t._v(" "),_("td",[t._v("1.5km")]),t._v(" "),_("td",[t._v("S.Bus (16)")]),t._v(" "),_("td",[t._v("Smart Port + integrated vario")]),t._v(" "),_("td",[t._v("55.26"),_("em",[t._v("17")]),t._v("8mm")]),t._v(" "),_("td",[t._v("5.8g")])]),t._v(" "),_("tr",[_("td",[t._v("R9")]),t._v(" "),_("td",[t._v("10km")]),t._v(" "),_("td",[t._v("S.Bus (16)")]),t._v(" "),_("td",[t._v("Smart Port")]),t._v(" "),_("td",[t._v("43.3x26.8x13.9mm")]),t._v(" "),_("td",[t._v("15.8g")])]),t._v(" "),_("tr",[_("td",[t._v("R9 slim")]),t._v(" "),_("td",[t._v("10km")]),t._v(" "),_("td",[t._v("S.Bus (16)")]),t._v(" "),_("td",[t._v("Smart Port")]),t._v(" "),_("td",[t._v("43.3x26.8x13.9mm")]),t._v(" "),_("td",[t._v("15.8g")])])])]),t._v(" "),_("blockquote",[_("p",[_("strong",[t._v("Note")]),t._v(" 以上列表信息来源于： http://www.redsilico.com/frsky-receiver-chart and FrSky "),_("a",{attrs:{href:"https://www.frsky-rc.com/product-category/receivers/"}},[t._v("product documentation")]),t._v(".")])]),t._v(" "),_("p"),_("p",[_("span",{attrs:{id:"ready_made_cable"}})]),t._v(" "),_("p"),t._v(" "),_("h2",[t._v("成品转接线缆")]),t._v(" "),_("p",[t._v("Ready-made cables for use with Pixhawk FMUv4 and earlier (except for Pixracer) are available from:")]),t._v(" "),_("ul",[_("li",[_("p",[_("a",{attrs:{href:"http://www.craftandtheoryllc.com/telemetry-cable"}},[t._v("Craft and Theory")]),t._v(". 以下版本是可用的，DF-13 兼容"),_("em",[t._v("PicoBlade 接头")]),t._v(" (for FMUv2/3DR Pixhawk, FMUv2/HKPilot32) 和"),_("em",[t._v("JST-GH 接头")]),t._v(' (for FMUv3/Pixhawk 2 "The Cube" /FMUv4/PixRacer v1).')]),t._v(" "),_("p",[_("a",{attrs:{href:"http://www.craftandtheoryllc.com/telemetry-cable"}},[_("img",{attrs:{src:v(1227),alt:"从 Craft and Theory 购买转接线材。"}})])])])]),t._v(" "),_("p"),_("p",[_("span",{attrs:{id:"diy_cables"}})]),t._v(" "),_("p"),t._v(" "),_("h2",[t._v("自制转接线缆")]),t._v(" "),_("p",[t._v("It is possible to create your own adapter cables.\n您将需要适合你的自驾仪的连接头。比如"),_("em",[t._v("JST-GH 接头")]),t._v('（FMUv3/Pixhawk 2 "The Cube" / FMUv4/PixRacer v1)，以及DF-13兼容'),_("em",[t._v("PicoBlade接头")]),t._v("(FMUv2/3DR Pixhawk, FMUv2/HKPilot32）。")]),t._v(" "),_("p",[t._v("The Pixracer includes electronics for converting between S.PORT and UART signals, but for other boards you will need a UART to S.PORT adapter. \n他们可以从以下渠道获取：")]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"https://www.frsky-rc.com/product/ful-1/"}},[t._v("FrSky FUL-1")]),t._v(": "),_("a",{attrs:{href:"https://www.unmannedtechshop.co.uk/frsky-transmitter-receiver-upgrade-adapter-ful-1/"}},[t._v("unmannedtech.co.uk")])]),t._v(" "),_("li",[t._v("SPC: "),_("a",{attrs:{href:"http://www.getfpv.com/frsky-smart-port-converter-cable.html"}},[t._v("getfpv.com")]),t._v(", "),_("a",{attrs:{href:"https://www.unmannedtechshop.co.uk/frsky-smart-port-converter-spc/"}},[t._v("unmannedtechshop.co.uk")])])]),t._v(" "),_("p",[t._v("关于不同飞控板连接头的更多信息如下所示。")]),t._v(" "),_("h3",[t._v("Pixracer to S-port 接收机")]),t._v(" "),_("p",[t._v("将Pixracer中的FrSky端口的TX和RX连接到一起，再连接到X系列接收机的S.port端口。 \nGND不需要连接，因为这将在连接Subs时完成（常规遥控器连接）。")]),t._v(" "),_("p",[t._v("\tS. port的连接方式如下图所示，使用提供的I/O连接头。")]),t._v(" "),_("p",[_("img",{attrs:{src:v(328),alt:"Grau b Pixracer FrSkyS接口连接"}})]),t._v(" "),_("p",[_("img",{attrs:{src:v(352),alt:"Pixracer FrSkyS接口连接"}})]),t._v(" "),_("h3",[t._v("Pixracer to D-port 接收机")]),t._v(" "),_("blockquote",[_("p",[_("strong",[t._v("Tip")]),t._v(" 绝大多数用户现在更倾向于使用S.port。")])]),t._v(" "),_("p",[t._v("将Pixracer中FrSky端口的TX（FS out）连接到接收机的RX,\n将Pixracer中FrSky端口的RX（FS out）连接到接收机的TX。\nGND不需要连接，因为这将在连接RC/Subs时完成。")]),t._v(" "),_("blockquote",[_("div",{staticClass:"language- extra-class"},[_("pre",[_("code",[t._v("\x3c!-- Image would be nice --\x3e\n")])])])]),t._v(" "),_("h3",[t._v("Pixhawk Pro")]),t._v(" "),_("p",[t._v("Piahawk 3 Pro可以连接到TELEM4端口，无需额外的软件配置。\n您将需要通过一个UART-S.PORT适配器进行连接，或者一个成品转接线缆。")]),t._v(" "),_("h3",[t._v("Pixhawk FMUv5 and later")]),t._v(" "),_("p",[t._v("Simply attach one of the UART's TX pins to the SPort inverted or uninverted pin (PX4 will auto-detect and handle either type).")]),t._v(" "),_("p"),_("p",[_("span",{attrs:{id:"pixhawk_v2"}})]),t._v(" "),_("p"),t._v(" "),_("h3",[t._v("其他飞控板")]),t._v(" "),_("p",[t._v("大部分其他型号飞控板是通过TELEM2端口连接到接收机，从而使用睿思凯的遥测功能， \n这其中包括了：Pixhawk 1, mRo Pixhawk, Pixhawk2。")]),t._v(" "),_("p",[t._v("您将需要通过一个UART-S.PORT适配器进行连接，或者一个成品转接线缆。")]),t._v(" "),_("blockquote",[_("div",{staticClass:"language- extra-class"},[_("pre",[_("code",[t._v("\x3c!-- ideally add diagram here --\x3e\n")])])])]),t._v(" "),_("h2",[t._v("附加信息")]),t._v(" "),_("p",[t._v("更多其他信息，请访问以下链接")]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"https://github.com/Clooney82/MavLink_FrSkySPort/wiki/1.2.-FrSky-Taranis-Telemetry"}},[t._v("FrSky Taranis 遥测回传")])]),t._v(" "),_("li",[_("a",{attrs:{href:"https://www.youtube.com/watch?v=x14DyvOU0Vc"}},[t._v("Taranis X9D: 遥测回传设置")]),t._v(" (视频教程)")]),t._v(" "),_("li",[_("a",{attrs:{href:"http://discuss.px4.io/t/px4-frsky-telemetry-setup-with-pixhawk2-and-x8r-receiver/6362"}},[t._v("使用Pixhawk2 和 X8R 接收机进行Px4 FrSky 遥测回传设置 ")]),t._v(" (DIY 转接线)")])])])}),[],!1,null,null,null);r.default=e.exports},328:function(t,r,v){t.exports=v.p+"assets/img/grau_b_pixracer_frskys.port_connection.4f4548a6.jpg"},352:function(t,r,v){t.exports=v.p+"assets/img/pixracer_FrSkyTelemetry.e4e73cd1.jpg"}}]);