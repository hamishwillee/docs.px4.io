(window.webpackJsonp=window.webpackJsonp||[]).push([[275],{1462:function(t,e,r){t.exports=r.p+"assets/img/frsky_telemetry_overview.bfd11fea.jpg"},1463:function(t,e,r){t.exports=r.p+"assets/img/taranis_telemetry.062d2a3f.jpg"},1464:function(t,e,r){t.exports=r.p+"assets/img/craft_and_theory_frsky_telemetry_cables.02e47216.jpg"},337:function(t,e,r){t.exports=r.p+"assets/img/grau_b_pixracer_frskys.port_connection.f12a8f69.jpg"},372:function(t,e,r){t.exports=r.p+"assets/img/pixracer_FrSkyTelemetry.e4e73cd1.jpg"},4115:function(t,e,r){"use strict";r.r(e);var a=r(19),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"睿思凯-frsky-数传功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#睿思凯-frsky-数传功能"}},[t._v("#")]),t._v(" 睿思凯（FrSky）数传功能")]),t._v(" "),a("p",[t._v("睿思凯遥测功能允许你在兼容的遥控器发射机上访问载具的 "),a("a",{attrs:{href:"#messages"}},[t._v("遥测或状态信息")]),t._v("。")]),t._v(" "),a("p",[t._v("有效的 "),a("a",{attrs:{href:"#messages"}},[t._v("遥测信息如下所示")]),t._v("，包括：飞行模式、电池信息、遥控信号强度、速度、高度等。 某些型号的发射机还可以提供声音和震动的反馈，这对于低电量和其他故障安全警告特别有用。")]),t._v(" "),a("p",[t._v("PX4平台支持睿思凯的 "),a("a",{attrs:{href:"#s_port"}},[t._v("S.port")]),t._v("（新）和D.port（旧）两种类型的遥测数据接口。")]),t._v(" "),a("h2",{attrs:{id:"硬件安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#硬件安装"}},[t._v("#")]),t._v(" 硬件安装")]),t._v(" "),a("p",[t._v("FrSky telemetry requires:")]),t._v(" "),a("ul",[a("li",[t._v("一个"),a("a",{attrs:{href:"#transmitters"}},[t._v("睿思凯兼容遥控发射机")]),t._v("，比如睿思凯 Taranis X9D Plus；")]),t._v(" "),a("li",[t._v("一个"),a("a",{attrs:{href:"#receivers"}},[t._v("睿思凯遥测接收机")]),t._v("，比如XSR和X8R；")]),t._v(" "),a("li",[t._v("A cable to connect the FrSky receiver Smart Port (SPort) to a flight controller UART.")])]),t._v(" "),a("p",[t._v("First "),a("RouterLink",{attrs:{to:"/zh/getting_started/rc_transmitter_receiver.html#connecting-receivers"}},[t._v("connect the receiver for RC channels")]),t._v(", e.g. connect the S.Bus ports on the receiver and the flight controller.")],1),t._v(" "),a("p",[t._v("Then set up FrSky telemetry by separately connecting the SPort on the receiver to any free UART on the flight controller, and then "),a("a",{attrs:{href:"#configure"}},[t._v("configure PX4 to run FrSky telemetry on that UART")]),t._v(".")]),t._v(" "),a("p",[t._v("This is done slightly differently, depending on whether the SPort receiver has a pin for an uninverted output, and/or the Pixhawk version.")]),t._v(" "),a("h3",{attrs:{id:"pixhawk-fmuv4-and-prior"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pixhawk-fmuv4-and-prior"}},[t._v("#")]),t._v(" Pixhawk FMUv4 (and prior)")]),t._v(" "),a("p",[t._v("For Pixhawk FMUv4 and earlier, UART ports and receiver telemetry ports are typically incompatible (with the exception of "),a("RouterLink",{attrs:{to:"/zh/flight_controller/pixracer.html"}},[t._v("Pixracer")]),t._v(").")],1),t._v(" "),a("p",[t._v("Generally SPort receivers have an "),a("em",[t._v("inverted")]),t._v(" S.Port signal and you have to use a converter cable to split the S.Port into uninverted TX and RX for connecting to the Pixhawk UART. An example is shown below.")]),t._v(" "),a("p",[a("img",{attrs:{src:r(1462),alt:"FrSky-Taranis-遥测"}})]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("When connecting to an inverted S.Port it is usually cheaper and easier to buy a "),a("a",{attrs:{href:"#ready_made_cable"}},[t._v("ready made cable")]),t._v(" that contains this adapter and has the appropriate connectors for the autopilot and receiver. Creating a "),a("a",{attrs:{href:"#diy_cables"}},[t._v("DIY cable")]),t._v(" requires electronics assembly expertise.")])]),t._v(" "),a("p",[t._v("If using an S.Port receiver with a pin for "),a("em",[t._v("uninverted output")]),t._v(" you can simply attach one of the UART's TX pins.")]),t._v(" "),a("p",[t._v("Then "),a("a",{attrs:{href:"#configure"}},[t._v("configure PX4")]),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"pixhawk-fmuv5-stm32f7-and-later"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pixhawk-fmuv5-stm32f7-and-later"}},[t._v("#")]),t._v(" Pixhawk FMUv5/STM32F7 and later")]),t._v(" "),a("p",[t._v("For Pixhawk FMUv5 and later PX4 can read either inverted (or uninverted) S.Port signals directly - no special cable is required.")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("More generally this is true on autopilots with STM32F7 or later (e.g. "),a("RouterLink",{attrs:{to:"/zh/flight_controller/durandal.html"}},[t._v("Durandal")]),t._v(" has a STM32H7 and can read inverted or uninverted S.Port signals directly).")],1)]),t._v(" "),a("p",[t._v("Simply attach one of the UART's TX pins to the SPort inverted or uninverted pin (PX4 will auto-detect and handle either type). Then "),a("a",{attrs:{href:"#configure"}},[t._v("configure PX4")]),t._v(".")]),t._v(" "),a("p",[a("a",{attrs:{id:"configure"}})]),t._v(" "),a("h2",{attrs:{id:"px4配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#px4配置"}},[t._v("#")]),t._v(" PX4配置")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/zh/peripherals/serial_configuration.html"}},[t._v("Configure the serial port")]),t._v(" on which FrSky will run using "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#TEL_FRSKY_CONFIG"}},[t._v("TEL_FRSKY_CONFIG")]),t._v(". There is no need to set the baud rate for the port, as this is configured by the driver.")],1),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("You can use any free UART, but typically "),a("code",[t._v("TELEM 2")]),t._v(" is used for FrSky telemetry (except for "),a("RouterLink",{attrs:{to:"/zh/flight_controller/pixracer.html"}},[t._v("Pixracer")]),t._v(", which is pre-configured to use the "),a("em",[t._v("FrSky")]),t._v(" port by default).")],1)]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("If the configuration parameter is not available in "),a("em",[t._v("QGroundControl")]),t._v(" then you may need to "),a("RouterLink",{attrs:{to:"/zh/peripherals/serial_configuration.html#parameter_not_in_firmware"}},[t._v("add the driver to the firmware")]),t._v(":")],1),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("drivers/telemetry/frsky_telemetry\n")])])])]),t._v(" "),a("p",[t._v("No further configuration is required; FrSky telemetry auto-starts when connected and detects D or S mode.")]),t._v(" "),a("p",[a("a",{attrs:{id:"transmitters"}})]),t._v(" "),a("h2",{attrs:{id:"兼容遥控发射机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#兼容遥控发射机"}},[t._v("#")]),t._v(" 兼容遥控发射机")]),t._v(" "),a("p",[t._v("You will need an RC transmitter that can receive the telemetry stream (and that is bound to the FrSky receiver).")]),t._v(" "),a("p",[t._v("Popular alternatives include:")]),t._v(" "),a("ul",[a("li",[t._v("FrSky Taranis X9D Plus (推荐)")]),t._v(" "),a("li",[t._v("FrSky Taranis X9D")]),t._v(" "),a("li",[t._v("FrSky Taranis X9E")]),t._v(" "),a("li",[t._v("FrSky Taranis Q X7")]),t._v(" "),a("li",[t._v("Turnigy 9XR Pro")])]),t._v(" "),a("p",[t._v("The above transmitters can display telemetry data without any further configuration. The following section(s) explain how you can customise telemetry display (for example, to create a better UI/UX).")]),t._v(" "),a("h3",{attrs:{id:"taranis脚本设置-luapilot"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#taranis脚本设置-luapilot"}},[t._v("#")]),t._v(" Taranis脚本设置(LuaPilot)")]),t._v(" "),a("p",[t._v("Compatible Taranis receivers (e.g. X9D Plus) running OpenTX 2.1.6 or newer can use the LuaPilot script to modify the displayed telemetry (as shown in the screenshot below).")]),t._v(" "),a("p",[a("img",{attrs:{src:r(1463),alt:"Telemetry Screen on the Taranis"}})]),t._v(" "),a("p",[t._v("Instructions for installing the script can be found here: "),a("a",{attrs:{href:"http://ilihack.github.io/LuaPilot_Taranis_Telemetry/",target:"_blank",rel:"noopener noreferrer"}},[t._v("LuaPilot Taranis Telemetry script > Taranis Setup OpenTX 2.1.6 or newer"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("If you open the "),a("code",[t._v("LuaPil.lua")]),t._v(" script with a text editor, you can edit the configuration. Suggested modifications include:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("local BattLevelmAh = -1")]),t._v(" 使用载机计算的电池信息；")]),t._v(" "),a("li",[a("code",[t._v("local SayFlightMode = 0")]),t._v("没有可供PX4飞行模式使用的WAV音频文件 遥测信息")])]),t._v(" "),a("p",[a("a",{attrs:{id:"messages"}})]),t._v(" "),a("h2",{attrs:{id:"遥测信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#遥测信息"}},[t._v("#")]),t._v(" 遥测信息")]),t._v(" "),a("p",[t._v("FrySky Telemetry can transmit most of the more useful status information from PX4. S-Port and D-Port receivers transmit different sets of messages, as listed in the following sections.")]),t._v(" "),a("p",[a("a",{attrs:{id:"s_port"}})]),t._v(" "),a("h3",{attrs:{id:"s-port"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#s-port"}},[t._v("#")]),t._v(" S-Port")]),t._v(" "),a("p",[t._v("S-Port receivers transmit the following messages from PX4 (from "),a("a",{attrs:{href:"https://github.com/iNavFlight/inav/blob/master/docs/Telemetry.md#available-smartport-sport-sensors",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v("):")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("AccX, AccY, AccZ:")]),t._v(" Accelerometer values.")]),t._v(" "),a("li",[a("strong",[t._v("Alt:")]),t._v(" Barometer based altitude, relative to home location.")]),t._v(" "),a("li",[a("strong",[t._v("Curr:")]),t._v(" Actual current consumption (Amps).")]),t._v(" "),a("li",[a("strong",[t._v("Fuel:")]),t._v(" Remaining battery percentage if "),a("code",[t._v("battery_capacity")]),t._v(" variable set and variable "),a("code",[t._v("smartport_fuel_percent = ON")]),t._v(", mAh drawn otherwise.")]),t._v(" "),a("li",[a("strong",[t._v("GAlt:")]),t._v(" GPS altitude, sea level is zero.")]),t._v(" "),a("li",[a("strong",[t._v("GPS:")]),t._v(" GPS coordinates.")]),t._v(" "),a("li",[a("strong",[t._v("GSpd:")]),t._v(" Current horizontal ground speed, calculated by GPS.")]),t._v(" "),a("li",[a("strong",[t._v("Hdg:")]),t._v(" Heading (degrees - North is 0°).")]),t._v(" "),a("li",[a("strong",[t._v("VFAS:")]),t._v(" Actual battery voltage value (Voltage FrSky Ampere Sensor).")]),t._v(" "),a("li",[a("strong",[t._v("VSpd:")]),t._v(" Vertical speed (cm/s).")]),t._v(" "),a("li",[a("strong",[t._v("Tmp1:")]),t._v(" "),a("RouterLink",{attrs:{to:"/zh/flight_modes/#flight-modes"}},[t._v("Flight mode")]),t._v(", sent as an integer: 18 - Manual, 23 - Altitude, 22 - Position, 27 - Mission, 26 - Hold, 28 - Return, 19 - Acro, 24 0 Offboard, 20 - Stabilized, 25 - Takeoff, 29 - Land, 30 - Follow Me.")],1),t._v(" "),a("li",[a("strong",[t._v("Tmp2:")]),t._v(" GPS information. 最右边的数字是 gps 定位类型 (0 = 无, 2 = 2d, 3 = 3d)。 其他数字是卫星的数量。")])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v('The following "standard" S-Port messages are not supported by PX4: '),a("strong",[t._v("ASpd")]),t._v(", "),a("strong",[t._v("A4")]),t._v(".")])]),t._v(" "),a("h3",{attrs:{id:"d-port"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#d-port"}},[t._v("#")]),t._v(" D-port")]),t._v(" "),a("p",[t._v("D-Port receivers transmit the following messages (from "),a("a",{attrs:{href:"https://github.com/cleanflight/cleanflight/blob/master/docs/Telemetry.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v("):")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("AccX, AccY, AccZ:")]),t._v(" Accelerometer values.")]),t._v(" "),a("li",[a("strong",[t._v("Alt:")]),t._v(" Barometer based altitude, init level is zero.")]),t._v(" "),a("li",[a("strong",[t._v("Cels:")]),t._v(" Average cell voltage value (battery voltage divided by cell number).")]),t._v(" "),a("li",[a("strong",[t._v("Curr:")]),t._v(" Actual current consumption (Amps).")]),t._v(" "),a("li",[a("strong",[t._v("Fuel:")]),t._v(" Remaining battery percentage if capacity is set, mAh drawn otherwise.")]),t._v(" "),a("li",[a("strong",[t._v("Date:")]),t._v(" Time since powered.")]),t._v(" "),a("li",[a("strong",[t._v("GAlt:")]),t._v(" GPS altitude, sea level is zero.")]),t._v(" "),a("li",[a("strong",[t._v("GPS:")]),t._v(" GPS coordinates.")]),t._v(" "),a("li",[a("strong",[t._v("GSpd:")]),t._v(" Current speed, calculated by GPS.")]),t._v(" "),a("li",[a("strong",[t._v("Hdg:")]),t._v(" Heading (degrees - North is 0°).")]),t._v(" "),a("li",[a("strong",[t._v("RPM:")]),t._v(" Throttle value if armed, otherwise battery capacity. 请注意, 在Taranis上，电池片数需要设置为12。")]),t._v(" "),a("li",[a("strong",[t._v("Tmp1:")]),t._v(" Flight mode (as for S-Port).")]),t._v(" "),a("li",[a("strong",[t._v("Tmp2:")]),t._v(" GPS information (as for S-Port).")]),t._v(" "),a("li",[a("strong",[t._v("VFAS:")]),t._v(" Actual battery voltage value (Voltage FrSky Ampere Sensor).")]),t._v(" "),a("li",[a("strong",[t._v("Vspd:")]),t._v(" Vertical speed (cm/s).")])]),t._v(" "),a("p",[a("a",{attrs:{id:"receivers"}})]),t._v(" "),a("h2",{attrs:{id:"睿思凯遥测接收机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#睿思凯遥测接收机"}},[t._v("#")]),t._v(" 睿思凯遥测接收机")]),t._v(" "),a("p",[t._v("Pixhawk/PX4 supports D (old) and S (new) FrSky telemetry. The table belows all FrSky receivers that support telemetry via a D/S.PORT (in theory all of these should work).")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("Note that the X series receivers listed below are recommended (e.g. XSR, X8R). The R and G series have not been tested/validated by the test team, but should work.")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("接收机")]),t._v(" "),a("th",[t._v("范围")]),t._v(" "),a("th",[t._v("集成输出")]),t._v(" "),a("th",[t._v("数字遥测输入")]),t._v(" "),a("th",[t._v("尺寸")]),t._v(" "),a("th",[t._v("重量")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("D4R-II")]),t._v(" "),a("td",[t._v("1.5km")]),t._v(" "),a("td",[t._v("CPPM (8)")]),t._v(" "),a("td",[t._v("D.Port")]),t._v(" "),a("td",[t._v("40x22.5x6mm")]),t._v(" "),a("td",[t._v("5.8g")])]),t._v(" "),a("tr",[a("td",[t._v("D8R-XP")]),t._v(" "),a("td",[t._v("1.5km")]),t._v(" "),a("td",[t._v("CPPM (8)")]),t._v(" "),a("td",[t._v("D.Port")]),t._v(" "),a("td",[t._v("55x25x14mm")]),t._v(" "),a("td",[t._v("12.4g")])]),t._v(" "),a("tr",[a("td",[t._v("D8R-II Plus")]),t._v(" "),a("td",[t._v("1.5km")]),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("D.Port")]),t._v(" "),a("td",[t._v("55x25x14mm")]),t._v(" "),a("td",[t._v("12.4g")])]),t._v(" "),a("tr",[a("td",[t._v("X4R")]),t._v(" "),a("td",[t._v("1.5km")]),t._v(" "),a("td",[t._v("CPPM (8)")]),t._v(" "),a("td",[t._v("Smart Port")]),t._v(" "),a("td",[t._v("40x22.5x6mm")]),t._v(" "),a("td",[t._v("5.8g")])]),t._v(" "),a("tr",[a("td",[t._v("X4R-SB")]),t._v(" "),a("td",[t._v("1.5km")]),t._v(" "),a("td",[t._v("S.Bus (16)")]),t._v(" "),a("td",[t._v("Smart Port")]),t._v(" "),a("td",[t._v("40x22.5x6mm")]),t._v(" "),a("td",[t._v("5.8g")])]),t._v(" "),a("tr",[a("td",[t._v("X6R / S6R")]),t._v(" "),a("td",[t._v("1.5km")]),t._v(" "),a("td",[t._v("S.Bus (16)")]),t._v(" "),a("td",[t._v("Smart Port")]),t._v(" "),a("td",[t._v("47.42×23.84×14.7mm")]),t._v(" "),a("td",[t._v("15.4g")])]),t._v(" "),a("tr",[a("td",[t._v("X8R / S8R")]),t._v(" "),a("td",[t._v("1.5km")]),t._v(" "),a("td",[t._v("S.Bus (16)")]),t._v(" "),a("td",[t._v("Smart Port")]),t._v(" "),a("td",[t._v("46.25 x 26.6 x 14.2mm")]),t._v(" "),a("td",[t._v("16.6g")])]),t._v(" "),a("tr",[a("td",[t._v("XSR / XSR-M")]),t._v(" "),a("td",[t._v("1.5km")]),t._v(" "),a("td",[t._v("S.Bus (16) / CPPM (8)")]),t._v(" "),a("td",[t._v("Smart Port")]),t._v(" "),a("td",[t._v("26x19.2x5mm")]),t._v(" "),a("td",[t._v("3.8g")])]),t._v(" "),a("tr",[a("td",[t._v("RX8R")]),t._v(" "),a("td",[t._v("1.5km")]),t._v(" "),a("td",[t._v("S.Bus (16)")]),t._v(" "),a("td",[t._v("Smart Port")]),t._v(" "),a("td",[t._v("46.25x26.6x14.2mm")]),t._v(" "),a("td",[t._v("12.1g")])]),t._v(" "),a("tr",[a("td",[t._v("RX8R PRO")]),t._v(" "),a("td",[t._v("1.5km")]),t._v(" "),a("td",[t._v("S.Bus (16)")]),t._v(" "),a("td",[t._v("Smart Port")]),t._v(" "),a("td",[t._v("46.25x26.6x14.2mm")]),t._v(" "),a("td",[t._v("12.1g")])]),t._v(" "),a("tr",[a("td",[t._v("R-XSR")]),t._v(" "),a("td",[t._v("1.5km")]),t._v(" "),a("td",[t._v("S.Bus (16) / CPPM (8)")]),t._v(" "),a("td",[t._v("Smart Port")]),t._v(" "),a("td",[t._v("16x11x5.4mm")]),t._v(" "),a("td",[t._v("1.5g")])]),t._v(" "),a("tr",[a("td",[t._v("G-RX8")]),t._v(" "),a("td",[t._v("1.5km")]),t._v(" "),a("td",[t._v("S.Bus (16)")]),t._v(" "),a("td",[t._v("Smart Port + integrated vario")]),t._v(" "),a("td",[t._v("55.26"),a("em",[t._v("17")]),t._v("8mm")]),t._v(" "),a("td",[t._v("5.8g")])]),t._v(" "),a("tr",[a("td",[t._v("R9")]),t._v(" "),a("td",[t._v("10km")]),t._v(" "),a("td",[t._v("S.Bus (16)")]),t._v(" "),a("td",[t._v("Smart Port")]),t._v(" "),a("td",[t._v("43.3x26.8x13.9mm")]),t._v(" "),a("td",[t._v("15.8g")])]),t._v(" "),a("tr",[a("td",[t._v("R9 slim")]),t._v(" "),a("td",[t._v("10km")]),t._v(" "),a("td",[t._v("S.Bus (16)")]),t._v(" "),a("td",[t._v("Smart Port")]),t._v(" "),a("td",[t._v("43.3x26.8x13.9mm")]),t._v(" "),a("td",[t._v("15.8g")])])])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("The above table originates from http://www.redsilico.com/frsky-receiver-chart and FrSky "),a("a",{attrs:{href:"https://www.frsky-rc.com/product-category/receivers/",target:"_blank",rel:"noopener noreferrer"}},[t._v("product documentation"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("p",[a("a",{attrs:{id:"ready_made_cable"}})]),t._v(" "),a("h2",{attrs:{id:"成品转接线缆"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#成品转接线缆"}},[t._v("#")]),t._v(" 成品转接线缆")]),t._v(" "),a("p",[t._v("Ready-made cables for use with Pixhawk FMUv4 and earlier (except for Pixracer) are available from:")]),t._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"http://www.craftandtheoryllc.com/telemetry-cable",target:"_blank",rel:"noopener noreferrer"}},[t._v("Craft and Theory"),a("OutboundLink")],1),t._v(". Versions are available with DF-13 compatible "),a("em",[t._v("PicoBlade connectors")]),t._v(" (for FMUv2/3DR Pixhawk, FMUv2/HKPilot32) and "),a("em",[t._v("JST-GH connectors")]),t._v(' (for FMUv3/Pixhawk 2 "The Cube" and FMUv4/PixRacer v1).')]),t._v(" "),a("p",[a("a",{attrs:{href:"http://www.craftandtheoryllc.com/telemetry-cable"}},[a("img",{attrs:{src:r(1464),alt:"从 Craft and Theory 购买转接线材。"}})])])])]),t._v(" "),a("p",[a("a",{attrs:{id:"diy_cables"}})]),t._v(" "),a("h2",{attrs:{id:"自制转接线缆"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自制转接线缆"}},[t._v("#")]),t._v(" 自制转接线缆")]),t._v(" "),a("p",[t._v("It is possible to create your own adapter cables. You will need connectors that are appropriate for your autopilot (e.g. "),a("em",[t._v("JST-GH connectors")]),t._v(' for FMUv3/Pixhawk 2 "The Cube" and FMUv4/PixRacer v1, and DF-13 compatible '),a("em",[t._v("PicoBlade connectors")]),t._v(" for older autopilots).")]),t._v(" "),a("p",[t._v("The Pixracer includes electronics for converting between S.PORT and UART signals, but for other boards you will need a UART to S.PORT adapter. These can be sourced from:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.frsky-rc.com/product/ful-1/",target:"_blank",rel:"noopener noreferrer"}},[t._v("FrSky FUL-1"),a("OutboundLink")],1),t._v(": "),a("a",{attrs:{href:"https://www.unmannedtechshop.co.uk/frsky-transmitter-receiver-upgrade-adapter-ful-1/",target:"_blank",rel:"noopener noreferrer"}},[t._v("unmannedtech.co.uk"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("SPC: "),a("a",{attrs:{href:"http://www.getfpv.com/frsky-smart-port-converter-cable.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("getfpv.com"),a("OutboundLink")],1),t._v(", "),a("a",{attrs:{href:"https://www.unmannedtechshop.co.uk/frsky-smart-port-converter-spc/",target:"_blank",rel:"noopener noreferrer"}},[t._v("unmannedtechshop.co.uk"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("More information about the connections for different boards is given below.")]),t._v(" "),a("h3",{attrs:{id:"pixracer-to-s-port-接收机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pixracer-to-s-port-接收机"}},[t._v("#")]),t._v(" Pixracer to S-port 接收机")]),t._v(" "),a("p",[t._v("Connect the Pixracer FrSky TX and RX lines together (solder the wires together) to the X series receiver's S.port pin. GND need not be attached as this will have been done when attaching to S.Bus (normal RC connection).")]),t._v(" "),a("p",[t._v("The S-port connection is shown below (using the provided I/O Connector).")]),t._v(" "),a("p",[a("img",{attrs:{src:r(337),alt:"Grau b Pixracer FrSkyS.Port Connection"}})]),t._v(" "),a("p",[a("img",{attrs:{src:r(372),alt:"Pixracer FrSkyS.Port Connection"}})]),t._v(" "),a("h3",{attrs:{id:"pixracer-to-d-port-接收机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pixracer-to-d-port-接收机"}},[t._v("#")]),t._v(" Pixracer to D-port 接收机")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("The vast majority of users now prefer to use S.PORT.")])]),t._v(" "),a("p",[t._v("Connect the Pixracer FrSky TX line (FS out) to the receiver's RX line. Connect the Pixracer FrSky RX line (FS in) to the receivers TX line. GND need not be connected as this will have been done when attaching to RC/SBus (for normal RC).")]),t._v(" "),a("h3",{attrs:{id:"pixhawk-pro"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pixhawk-pro"}},[t._v("#")]),t._v(" Pixhawk Pro")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk3_pro.html"}},[t._v("Pixhawk 3 Pro")]),t._v(" can be connected to TELEM4 (no additional software configuration is needed). You will need to connect via a UART to S.PORT adapter board, or a "),a("a",{attrs:{href:"#ready_made_cable"}},[t._v("ready-made cable")]),t._v(".")],1),t._v(" "),a("h3",{attrs:{id:"pixhawk-fmuv5-and-later"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pixhawk-fmuv5-and-later"}},[t._v("#")]),t._v(" Pixhawk FMUv5 and later")]),t._v(" "),a("p",[t._v("Simply attach one of the UART's TX pins to the SPort inverted or uninverted pin (PX4 will auto-detect and handle either type).")]),t._v(" "),a("h3",{attrs:{id:"其他飞控板"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他飞控板"}},[t._v("#")]),t._v(" 其他飞控板")]),t._v(" "),a("p",[t._v("Most other boards connect to the receiver for FrSky telemetry via the TELEM2 UART. This includes, for example: "),a("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk.html"}},[t._v("Pixhawk 1")]),t._v(", "),a("RouterLink",{attrs:{to:"/zh/flight_controller/mro_pixhawk.html"}},[t._v("mRo Pixhawk")]),t._v(", Pixhawk2.")],1),t._v(" "),a("p",[t._v("You will need to connect via a UART to S.PORT adapter board, or a "),a("a",{attrs:{href:"#ready_made_cable"}},[t._v("ready-made cable")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"附加信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#附加信息"}},[t._v("#")]),t._v(" 附加信息")]),t._v(" "),a("p",[t._v("For additional information, see the following links:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/Clooney82/MavLink_FrSkySPort/wiki/1.2.-FrSky-Taranis-Telemetry",target:"_blank",rel:"noopener noreferrer"}},[t._v("FrSky Taranis 遥测回传"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.youtube.com/watch?v=x14DyvOU0Vc",target:"_blank",rel:"noopener noreferrer"}},[t._v("Taranis X9D: 遥测回传设置"),a("OutboundLink")],1),t._v(" (视频教程)")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://discuss.px4.io//t/px4-frsky-telemetry-setup-with-pixhawk2-and-x8r-receiver/6362",target:"_blank",rel:"noopener noreferrer"}},[t._v("Px4 FrSky Telemetry Setup with Pixhawk2 and X8R Receiver"),a("OutboundLink")],1),t._v(" (DIY Cables)")])])])}),[],!1,null,null,null);e.default=o.exports}}]);