(window.webpackJsonp=window.webpackJsonp||[]).push([[471],{3419:function(v,_,t){"use strict";t.r(_);var i=t(19),r=Object(i.a)({},(function(){var v=this,_=v.$createElement,i=v._self._c||_;return i("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[i("h1",{attrs:{id:"树莓派-pilotpi-拓展板"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#树莓派-pilotpi-拓展板"}},[v._v("#")]),v._v(" 树莓派 PilotPi 拓展板")]),v._v(" "),i("p",[i("em",[v._v("PilotPi")]),v._v(" 是一套支持树莓派直接运行 PX4 各项功能的拓展板方案。 它是一个低成本但高度可扩展的平台，从 Linux 和 PX4 两侧不断获得更新。 也不需要专有驱动，因为所有组件都有来自树莓派和 PX4 社区的上游支持。")]),v._v(" "),i("div",{staticClass:"custom-block warning"},[i("p",{staticClass:"custom-block-title"},[v._v("PX4 support for this flight controller is [experimental](../flight_controller/autopilot_experimental.md).")])]),v._v(" "),i("p",[v._v("The "),i("em",[v._v("PilotPi")]),v._v(" shield is a fully functional solution to run PX4 autopilot directly on Raspberry Pi. It is designed to be a low-cost but highly scalability platform with continuous updates from both Linux and PX4 sides. No proprietary driver is required, as all components have upstream support from RPi and PX4 community. PCB and schematic are open source as well.")]),v._v(" "),i("p",[i("img",{attrs:{src:t(902),alt:"PilotPi with RPi 4B"}})]),v._v(" "),i("h2",{attrs:{id:"概览"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#概览"}},[v._v("#")]),v._v(" 概览")]),v._v(" "),i("ul",[i("li",[v._v("支持的树莓派：\n"),i("ul",[i("li",[v._v("树莓派 2B/3B/3B+/4B")])])]),v._v(" "),i("li",[v._v("支持的操作系统：\n"),i("ul",[i("li",[v._v("Raspberry Pi OS")]),v._v(" "),i("li",[v._v("Ubuntu Server (armhf/arm64)")])])]),v._v(" "),i("li",[v._v("加速度计/角速度计：\n"),i("ul",[i("li",[v._v("ICM42688P")])])]),v._v(" "),i("li",[v._v("磁力计：\n"),i("ul",[i("li",[v._v("IST8310")])])]),v._v(" "),i("li",[v._v("气压计：\n"),i("ul",[i("li",[v._v("MS5611")])])]),v._v(" "),i("li",[v._v("PWM：\n"),i("ul",[i("li",[v._v("PCA9685")])])]),v._v(" "),i("li",[v._v("ADC：\n"),i("ul",[i("li",[v._v("ADS1115")])])]),v._v(" "),i("li",[v._v("电源：\n"),i("ul",[i("li",[v._v("3~6S 电池 具有内置电压监测")]),v._v(" "),i("li",[v._v("通过USB线启动树莓派")])])]),v._v(" "),i("li",[v._v("Availability: "),i("em",[v._v("preparing for shipping")])])]),v._v(" "),i("h2",{attrs:{id:"连接性"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#连接性"}},[v._v("#")]),v._v(" 连接性")]),v._v(" "),i("p",[v._v("Shield provides:")]),v._v(" "),i("ul",[i("li",[v._v("16 x PWM 输出通道")]),v._v(" "),i("li",[v._v("GPS 连接器")]),v._v(" "),i("li",[v._v("数传连接器")]),v._v(" "),i("li",[v._v("外部I2C总线连接器（"),i("strong",[v._v("Note:")]),v._v(" 与CSI摄像头冲突）")]),v._v(" "),i("li",[v._v("遥控输入口（SBUS 协议）")]),v._v(" "),i("li",[v._v("3 x 0~5V ADC 通道")]),v._v(" "),i("li",[v._v("2*8 2.54mm 排插，引出未使用的 GPIO")])]),v._v(" "),i("p",[v._v("Direct accessible from RPi:")]),v._v(" "),i("ul",[i("li",[v._v("4x USB 连接器")]),v._v(" "),i("li",[v._v("CSI 连接器("),i("strong",[v._v("Note:")]),v._v(" 与外部 I2C 总线冲突")]),v._v(" "),i("li",[v._v("其它")])]),v._v(" "),i("h2",{attrs:{id:"推荐接线"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#推荐接线"}},[v._v("#")]),v._v(" 推荐接线")]),v._v(" "),i("p",[i("img",{attrs:{src:t(903),alt:"PilotPi PowerPart wiring"}})]),v._v(" "),i("p",[i("img",{attrs:{src:t(904),alt:"PilotPi SensorPart wiring"}})]),v._v(" "),i("h2",{attrs:{id:"针脚定义"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#针脚定义"}},[v._v("#")]),v._v(" 针脚定义")]),v._v(" "),i("div",{staticClass:"custom-block warning"},[i("p",{staticClass:"custom-block-title"},[v._v("注意")]),v._v(" "),i("p",[v._v("It still uses old GH1.25 connectors.\nWiring is compatible with Pixhawk 2.4.8")])]),v._v(" "),i("h3",{attrs:{id:"连接器"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#连接器"}},[v._v("#")]),v._v(" 连接器")]),v._v(" "),i("h4",{attrs:{id:"gps-连接器"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#gps-连接器"}},[v._v("#")]),v._v(" GPS 连接器")]),v._v(" "),i("p",[v._v("遥控输入映射到 "),i("code",[v._v("/dev/ttyAMA0")]),v._v(" ，且在RX 线上有硬件反向开关。")]),v._v(" "),i("table",[i("thead",[i("tr",[i("th",[v._v("针脚")]),v._v(" "),i("th",[v._v("信号")]),v._v(" "),i("th",[v._v("电压")])])]),v._v(" "),i("tbody",[i("tr",[i("td",[v._v("1")]),v._v(" "),i("td",[v._v("VCC")]),v._v(" "),i("td",[v._v("+5V")])]),v._v(" "),i("tr",[i("td",[v._v("2")]),v._v(" "),i("td",[v._v("TX")]),v._v(" "),i("td",[v._v("+3v3")])]),v._v(" "),i("tr",[i("td",[v._v("3")]),v._v(" "),i("td",[v._v("RX")]),v._v(" "),i("td",[v._v("+3v3")])]),v._v(" "),i("tr",[i("td",[v._v("4")]),v._v(" "),i("td",[v._v("NC")]),v._v(" "),i("td",[v._v("+3v3")])]),v._v(" "),i("tr",[i("td",[v._v("5")]),v._v(" "),i("td",[v._v("NC")]),v._v(" "),i("td",[v._v("+3v3")])]),v._v(" "),i("tr",[i("td",[v._v("6")]),v._v(" "),i("td",[v._v("GND")]),v._v(" "),i("td",[v._v("GND")])])])]),v._v(" "),i("h4",{attrs:{id:"数传连接器"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#数传连接器"}},[v._v("#")]),v._v(" 数传连接器")]),v._v(" "),i("p",[v._v("此开关将决定 RX 线的信号反相： "),i("code",[v._v("UART_RX = SW xor RC_INPUT")])]),v._v(" "),i("table",[i("thead",[i("tr",[i("th",[v._v("针脚")]),v._v(" "),i("th",[v._v("信号")]),v._v(" "),i("th",[v._v("电压")])])]),v._v(" "),i("tbody",[i("tr",[i("td",[v._v("1")]),v._v(" "),i("td",[v._v("VCC")]),v._v(" "),i("td",[v._v("+5V")])]),v._v(" "),i("tr",[i("td",[v._v("2")]),v._v(" "),i("td",[v._v("TX")]),v._v(" "),i("td",[v._v("+3v3")])]),v._v(" "),i("tr",[i("td",[v._v("3")]),v._v(" "),i("td",[v._v("RX")]),v._v(" "),i("td",[v._v("+3v3")])]),v._v(" "),i("tr",[i("td",[v._v("4")]),v._v(" "),i("td",[v._v("CTS")]),v._v(" "),i("td",[v._v("+3v3")])]),v._v(" "),i("tr",[i("td",[v._v("5")]),v._v(" "),i("td",[v._v("RTS:")]),v._v(" "),i("td",[v._v("+3v3")])]),v._v(" "),i("tr",[i("td",[v._v("6")]),v._v(" "),i("td",[v._v("GND")]),v._v(" "),i("td",[v._v("GND")])])])]),v._v(" "),i("h4",{attrs:{id:"外部-i2c-总线连接器"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#外部-i2c-总线连接器"}},[v._v("#")]),v._v(" 外部 I2C 总线连接器")]),v._v(" "),i("p",[v._v("ADC3 和 ADC4 的 VCC 被以下设备驱动：")]),v._v(" "),i("table",[i("thead",[i("tr",[i("th",[v._v("针脚")]),v._v(" "),i("th",[v._v("信号")]),v._v(" "),i("th",[v._v("电压")])])]),v._v(" "),i("tbody",[i("tr",[i("td",[v._v("1")]),v._v(" "),i("td",[v._v("VCC")]),v._v(" "),i("td",[v._v("+5V")])]),v._v(" "),i("tr",[i("td",[v._v("2")]),v._v(" "),i("td",[v._v("SCL")]),v._v(" "),i("td",[v._v("+3v3(上拉)")])]),v._v(" "),i("tr",[i("td",[v._v("3")]),v._v(" "),i("td",[v._v("SDA")]),v._v(" "),i("td",[v._v("+3v3(上拉)")])]),v._v(" "),i("tr",[i("td",[v._v("4")]),v._v(" "),i("td",[v._v("GND")]),v._v(" "),i("td",[v._v("GND")])])])]),v._v(" "),i("h4",{attrs:{id:"遥控-adc-2-3-4"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#遥控-adc-2-3-4"}},[v._v("#")]),v._v(" 遥控 & ADC 2/3/4")]),v._v(" "),i("p",[v._v("RC is mapped to "),i("code",[v._v("/dev/ttyAMA0")]),v._v(" with signal inverter switch on RX line.")]),v._v(" "),i("table",[i("thead",[i("tr",[i("th",[v._v("针脚")]),v._v(" "),i("th",[v._v("信号")]),v._v(" "),i("th",[v._v("电压")])])]),v._v(" "),i("tbody",[i("tr",[i("td",[v._v("1")]),v._v(" "),i("td",[v._v("RC")]),v._v(" "),i("td",[v._v("+3V3~+5V")])]),v._v(" "),i("tr",[i("td",[v._v("2")]),v._v(" "),i("td",[v._v("VCC")]),v._v(" "),i("td",[v._v("+5V")])]),v._v(" "),i("tr",[i("td",[v._v("3")]),v._v(" "),i("td",[v._v("GND")]),v._v(" "),i("td",[v._v("GND")])])])]),v._v(" "),i("ul",[i("li",[v._v("ADC1 内部连接到分压电路以监测电池电压。")]),v._v(" "),i("li",[v._v("ADC2 空闲。")]),v._v(" "),i("li",[v._v("ADC3 可以连接模拟量空速计。")]),v._v(" "),i("li",[v._v("ADC4 在 ADC 和 VCC 之间有一个跳线帽，监测系统电压。")])]),v._v(" "),i("table",[i("thead",[i("tr",[i("th",[v._v("针脚")]),v._v(" "),i("th",[v._v("信号")]),v._v(" "),i("th",[v._v("电压")])])]),v._v(" "),i("tbody",[i("tr",[i("td",[v._v("1")]),v._v(" "),i("td",[v._v("ADCx")]),v._v(" "),i("td",[v._v("0V~+5V")])]),v._v(" "),i("tr",[i("td",[v._v("2")]),v._v(" "),i("td",[v._v("VCC")]),v._v(" "),i("td",[v._v("+5V")])]),v._v(" "),i("tr",[i("td",[v._v("3")]),v._v(" "),i("td",[v._v("GND")]),v._v(" "),i("td",[v._v("GND")])])])]),v._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[v._v("注解")]),v._v(" "),i("p",[v._v("ADC3 & 4 have an alternative VCC source\nWhen 'Vref' switch is on, 'VCC' pin is driven by REF5050.")])]),v._v(" "),i("h4",{attrs:{id:"拓展板顶部引出的未使用的gpio"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#拓展板顶部引出的未使用的gpio"}},[v._v("#")]),v._v(" 拓展板顶部引出的未使用的GPIO")]),v._v(" "),i("table",[i("thead",[i("tr",[i("th",[v._v("拓展板Pin")]),v._v(" "),i("th",[v._v("BCM号")]),v._v(" "),i("th",[v._v("WiringPi号")]),v._v(" "),i("th",[v._v("树莓派Pin")])])]),v._v(" "),i("tbody",[i("tr",[i("td",[v._v("1")]),v._v(" "),i("td",[v._v("3V3")]),v._v(" "),i("td",[v._v("3v3")]),v._v(" "),i("td",[v._v("3V3")])]),v._v(" "),i("tr",[i("td",[v._v("2")]),v._v(" "),i("td",[v._v("5V")]),v._v(" "),i("td",[v._v("5V")]),v._v(" "),i("td",[v._v("5V")])]),v._v(" "),i("tr",[i("td",[v._v("3")]),v._v(" "),i("td",[v._v("4")]),v._v(" "),i("td",[v._v("7")]),v._v(" "),i("td",[v._v("7")])]),v._v(" "),i("tr",[i("td",[v._v("4")]),v._v(" "),i("td",[v._v("14")]),v._v(" "),i("td",[v._v("15")]),v._v(" "),i("td",[v._v("8")])]),v._v(" "),i("tr",[i("td",[v._v("5")]),v._v(" "),i("td",[v._v("17")]),v._v(" "),i("td",[v._v("0")]),v._v(" "),i("td",[v._v("11")])]),v._v(" "),i("tr",[i("td",[v._v("6")]),v._v(" "),i("td",[v._v("27")]),v._v(" "),i("td",[v._v("2")]),v._v(" "),i("td",[v._v("13")])]),v._v(" "),i("tr",[i("td",[v._v("7")]),v._v(" "),i("td",[v._v("22")]),v._v(" "),i("td",[v._v("3")]),v._v(" "),i("td",[v._v("15")])]),v._v(" "),i("tr",[i("td",[v._v("8")]),v._v(" "),i("td",[v._v("23")]),v._v(" "),i("td",[v._v("4")]),v._v(" "),i("td",[v._v("16")])]),v._v(" "),i("tr",[i("td",[v._v("9")]),v._v(" "),i("td",[v._v("7")]),v._v(" "),i("td",[v._v("11")]),v._v(" "),i("td",[v._v("26")])]),v._v(" "),i("tr",[i("td",[v._v("10")]),v._v(" "),i("td",[v._v("5")]),v._v(" "),i("td",[v._v("21")]),v._v(" "),i("td",[v._v("29")])]),v._v(" "),i("tr",[i("td",[v._v("11")]),v._v(" "),i("td",[v._v("6")]),v._v(" "),i("td",[v._v("22")]),v._v(" "),i("td",[v._v("31")])]),v._v(" "),i("tr",[i("td",[v._v("12")]),v._v(" "),i("td",[v._v("12")]),v._v(" "),i("td",[v._v("26")]),v._v(" "),i("td",[v._v("32")])]),v._v(" "),i("tr",[i("td",[v._v("13")]),v._v(" "),i("td",[v._v("13")]),v._v(" "),i("td",[v._v("23")]),v._v(" "),i("td",[v._v("33")])]),v._v(" "),i("tr",[i("td",[v._v("14")]),v._v(" "),i("td",[v._v("16")]),v._v(" "),i("td",[v._v("27")]),v._v(" "),i("td",[v._v("36")])]),v._v(" "),i("tr",[i("td",[v._v("15")]),v._v(" "),i("td",[v._v("26")]),v._v(" "),i("td",[v._v("25")]),v._v(" "),i("td",[v._v("37")])]),v._v(" "),i("tr",[i("td",[v._v("16")]),v._v(" "),i("td",[v._v("GND")]),v._v(" "),i("td",[v._v("GND")]),v._v(" "),i("td",[v._v("GND")])])])]),v._v(" "),i("h3",{attrs:{id:"开关"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#开关"}},[v._v("#")]),v._v(" 开关")]),v._v(" "),i("h4",{attrs:{id:"遥控信号反相器"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#遥控信号反相器"}},[v._v("#")]),v._v(" 遥控信号反相器")]),v._v(" "),i("p",[v._v("This switch will decide the signal polarity of RX line: "),i("code",[v._v("UART_RX = SW xor RC_INPUT")])]),v._v(" "),i("ul",[i("li",[v._v("开启：适合SBUS(反转信号)")]),v._v(" "),i("li",[v._v("关闭：保留")])]),v._v(" "),i("h4",{attrs:{id:"参考压"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#参考压"}},[v._v("#")]),v._v(" 参考压")]),v._v(" "),i("p",[v._v("ADC 3 & 4 will have VCC driven by:")]),v._v(" "),i("ul",[i("li",[v._v("开启开关时：由REF5050驱动")]),v._v(" "),i("li",[v._v("关闭开关时：从树莓派5V取电")])]),v._v(" "),i("h4",{attrs:{id:"启动模式"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#启动模式"}},[v._v("#")]),v._v(" 启动模式")]),v._v(" "),i("p",[v._v("This switch is connected to Pin22(BCM25). System rc script will check its value and decide whether PX4 should start alongside with system booting or not.")]),v._v(" "),i("ul",[i("li",[v._v("开启：开机自启 PX4")]),v._v(" "),i("li",[v._v("关闭：不启动 PX4")])]),v._v(" "),i("h2",{attrs:{id:"开发者快速指南"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#开发者快速指南"}},[v._v("#")]),v._v(" 开发者快速指南")]),v._v(" "),i("p",[v._v("Refer to specific instructions for the OS running on your RPi:")]),v._v(" "),i("ul",[i("li",[i("RouterLink",{attrs:{to:"/zh/flight_controller/raspberry_pi_pilotpi_rpios.html"}},[v._v("Raspberry Pi OS Lite (armhf)")])],1),v._v(" "),i("li",[i("RouterLink",{attrs:{to:"/zh/flight_controller/raspberry_pi_pilotpi_ubuntu_server.html"}},[v._v("Ubuntu 服务器(arm64 & armhf)")])],1)])])}),[],!1,null,null,null);_.default=r.exports},902:function(v,_,t){v.exports=t.p+"assets/img/hardware-pilotpi4b.f6daa9bb.png"},903:function(v,_,t){v.exports=t.p+"assets/img/pilotpi_pwr_wiring.19c73603.png"},904:function(v,_,t){v.exports=t.p+"assets/img/pilotpi_sens_wiring.dee9cc62.png"}}]);