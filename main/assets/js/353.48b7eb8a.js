(window.webpackJsonp=window.webpackJsonp||[]).push([[353],{3384:function(t,e,r){"use strict";r.r(e);var a=r(19),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"holybro-pix32-v5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#holybro-pix32-v5"}},[t._v("#")]),t._v(" Holybro Pix32 v5")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("PX4 does not manufacture this (or any) autopilot. Contact the [manufacturer](https://holybro.com/) for hardware support or compliance issues. 它基于 [Pixhawk 项目](https://pixhawk.org/) 的 **FMUv5** 开放硬件设计，在 [NuttX](http://nuttx.org) 操作系统上运行 PX4。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://holybro.com/products/pix32-v5",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pix32 v5"),a("OutboundLink")],1),a("sup",[t._v("®")]),t._v(" is an advanced autopilot flight controller designed and made by Holybro"),a("sup",[t._v("®")]),t._v(". It is optimized to run on PX4 firmware, which is intended for both academic and commercial developers. It is based on the "),a("a",{attrs:{href:"https://pixhawk.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk-project"),a("OutboundLink")],1),t._v(" "),a("strong",[t._v("FMUv5")]),t._v(" open hardware design and runs PX4 on the "),a("a",{attrs:{href:"https://nuttx.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("NuttX"),a("OutboundLink")],1),t._v(" OS. It can be regarded as a variant version of Pixhawk4.")]),t._v(" "),a("p",[t._v("The Pix32 v5 is designed for pilots who need a high power, flexible and customisable flight control system. It is comprised of a separate flight controller and carrier (base) board, which are connected by a 100pin connector. This design allows users to either select a base board made by Holybro, or customize their own.")]),t._v(" "),a("p",[a("img",{attrs:{src:r(815),alt:"Pix32 v5 Family"}})]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("This flight controller is "),a("RouterLink",{attrs:{to:"/zh/flight_controller/autopilot_manufacturer_supported.html"}},[t._v("manufacturer supported")]),t._v(".")],1)])]),t._v(" "),a("h2",{attrs:{id:"概览"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概览"}},[t._v("#")]),t._v(" 概览")]),t._v(" "),a("ul",[a("li",[t._v("主 FMU 处理器：STM32F765\n"),a("ul",[a("li",[t._v("32 位 Arm® Cortex®-M7，216MHz，2MB 储存，512KB RAM")])])]),t._v(" "),a("li",[t._v("IO 处理器：STM32F100\n"),a("ul",[a("li",[t._v("32 位 Arm® Cortex®-M3，24MHz，8KB SRAM")])])]),t._v(" "),a("li",[t._v("板载传感器：\n"),a("ul",[a("li",[t._v("加速度计 / 陀螺仪：ICM-20689")]),t._v(" "),a("li",[t._v("Accel/Gyro: BMI055 or ICM20602")]),t._v(" "),a("li",[t._v("磁力计：IST8310")]),t._v(" "),a("li",[t._v("气压计：MS5611")])])]),t._v(" "),a("li",[t._v("GPS：ublox Neo-M8N GPS/GLONASS 接收器；集成磁力计 IST8310")]),t._v(" "),a("li",[t._v("接口：\n"),a("ul",[a("li",[t._v("8-16 路PWM输出（8路来自 IO，8路来自 FMU）")]),t._v(" "),a("li",[t._v("FMU 上有 3 路专用 PWM/Capture 输入")]),t._v(" "),a("li",[t._v("用于 CPPM 的专用遥控输入")]),t._v(" "),a("li",[t._v("Dedicated R/C input for Spektrum / DSM and S.Bus with analog / PWM RSSI input")]),t._v(" "),a("li",[t._v("Dedicated S.Bus servo output")]),t._v(" "),a("li",[t._v("5个通用串行口\n"),a("ul",[a("li",[t._v("2 with full flow control")]),t._v(" "),a("li",[t._v("1 with separate 1.5A current limit")])])]),t._v(" "),a("li",[t._v("3 个 I2C 接口")]),t._v(" "),a("li",[t._v("4路SPI总线\n"),a("ul",[a("li",[t._v("1 internal high speed SPI sensor bus with 4 chip selects and 6 DRDYs")]),t._v(" "),a("li",[t._v("1 internal low noise SPI bus dedicated for")]),t._v(" "),a("li",[t._v("Barometer with 2 chip selects, no DRDYs")]),t._v(" "),a("li",[t._v("1 internal SPI bus dedicated for FRAM")]),t._v(" "),a("li",[t._v("Supports dedicated SPI calibration EEPROM located on sensor module")]),t._v(" "),a("li",[t._v("1 external SPI buses")])])]),t._v(" "),a("li",[t._v("多达 2 路 CAN 总线用于带串口的电调\n"),a("ul",[a("li",[t._v("Each CANBus has individual silent controls or ESC RX-MUX control")]),t._v(" "),a("li",[t._v("2个电池电流/电压模拟输入口")]),t._v(" "),a("li",[t._v("2 additional analog inputs")])])])])]),t._v(" "),a("li",[t._v("Electrical System:\n"),a("ul",[a("li",[t._v("电源模块输出：4.9~5.5V")]),t._v(" "),a("li",[t._v("Max input voltage: 6V")]),t._v(" "),a("li",[t._v("最大电流感应：120A")]),t._v(" "),a("li",[t._v("USB 电源输入：4.75~5.25V")]),t._v(" "),a("li",[t._v("伺服导轨输入电压：0~36V")])])]),t._v(" "),a("li",[t._v("重量和尺寸：\n"),a("ul",[a("li",[t._v("Dimensions: 45x45x13.5mm")]),t._v(" "),a("li",[t._v("Weight: 33.0g")])])]),t._v(" "),a("li",[t._v("Environmental Data, Quality & Reliability:\n"),a("ul",[a("li",[t._v("工作温度：-40 ~ 85°C")]),t._v(" "),a("li",[t._v("Storage temp. -40~85℃")]),t._v(" "),a("li",[t._v("CE")]),t._v(" "),a("li",[t._v("FCC")]),t._v(" "),a("li",[t._v("RoHS compliant (lead-free)")])])])]),t._v(" "),a("p",[t._v("Additional information can be found in the "),a("a",{attrs:{href:"https://cdn.shopify.com/s/files/1/0604/5905/7341/files/Holybro_PIX32-V5_technical_data_sheet_v1.1.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pix32 V5 Technical Data Sheet"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"where-to-buy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#where-to-buy"}},[t._v("#")]),t._v(" Where to Buy")]),t._v(" "),a("p",[t._v("Order from "),a("a",{attrs:{href:"https://holybro.com/products/pix32-v5",target:"_blank",rel:"noopener noreferrer"}},[t._v("Holybro website"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"组装-设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组装-设置"}},[t._v("#")]),t._v(" 组装 / 设置")]),t._v(" "),a("p",[t._v("The "),a("RouterLink",{attrs:{to:"/zh/assembly/quick_start_holybro_pix32_v5.html"}},[t._v("Pix32 v5 Wiring Quick Start")]),t._v(" provides instructions on how to assemble required/important peripherals including GPS, Power Management Board etc.")],1),t._v(" "),a("h2",{attrs:{id:"base-board-layouts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#base-board-layouts"}},[t._v("#")]),t._v(" Base Board Layouts")]),t._v(" "),a("p",[a("img",{attrs:{src:r(816),alt:"Pix32 v5 Image"}})]),t._v(" "),a("h2",{attrs:{id:"针脚定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#针脚定义"}},[t._v("#")]),t._v(" 针脚定义")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://cdn.shopify.com/s/files/1/0604/5905/7341/files/Holybro_Pix32-V5-Base-Mini-Pinouts.pdf",target:"_blank",rel:"noopener noreferrer"}},[a("em",[t._v("pix32 v5")]),t._v(" and mini baseboard"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"尺寸"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#尺寸"}},[t._v("#")]),t._v(" 尺寸")]),t._v(" "),a("p",[a("img",{attrs:{src:r(817),alt:"Pix32 v5 Image"}})]),t._v(" "),a("h2",{attrs:{id:"额定电压"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#额定电压"}},[t._v("#")]),t._v(" 额定电压")]),t._v(" "),a("p",[a("em",[t._v("Pix32 v5")]),t._v(" can be triple-redundant on the power supply if three power sources are supplied. The three power rails are: "),a("strong",[t._v("POWER1")]),t._v(", "),a("strong",[t._v("POWER2")]),t._v(" and "),a("strong",[t._v("USB")]),t._v(".")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("The output power rails "),a("strong",[t._v("FMU PWM OUT")]),t._v(" and "),a("strong",[t._v("I/O PWM OUT")]),t._v(" (0V to 36V) do not power the flight controller board (and are not powered by it). You must supply power to one of "),a("strong",[t._v("POWER1")]),t._v(", "),a("strong",[t._v("POWER2")]),t._v(" or "),a("strong",[t._v("USB")]),t._v(" or the board will be unpowered.")])]),t._v(" "),a("p",[a("strong",[t._v("Normal Operation Maximum Ratings")])]),t._v(" "),a("p",[t._v("Under these conditions all power sources will be used in this order to power the system:")]),t._v(" "),a("ol",[a("li",[a("strong",[t._v("POWER1")]),t._v(" 和 "),a("strong",[t._v("POWER2")]),t._v(" 输入电压（4.9 v 至 5.5 v）")]),t._v(" "),a("li",[a("strong",[t._v("USB")]),t._v(" 输入电压（4.75 v 至 5.25 v）")])]),t._v(" "),a("p",[a("strong",[t._v("Absolute Maximum Ratings")])]),t._v(" "),a("p",[t._v("Under these conditions the system will not draw any power (will not be operational), but will remain intact.")]),t._v(" "),a("ol",[a("li",[a("strong",[t._v("POWER1")]),t._v(" 与 "),a("strong",[t._v("POWER2")]),t._v(" 输入（可运行范围 4.1V 至 5.7V，0V 至 10V 不会损坏）")]),t._v(" "),a("li",[a("strong",[t._v("USB")]),t._v(" 输入（可运行范围 4.1V 至 5.7V，0V 至 6V 不会损坏）")]),t._v(" "),a("li",[t._v("舵机输入："),a("strong",[t._v("FMU PWM OUT")]),t._v(" 和 "),a("strong",[t._v("I/O PWM OUT")]),t._v(" 的 VDD_SERVO 针脚 （0V 至 42V 不会损坏）")])]),t._v(" "),a("h2",{attrs:{id:"编译固件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译固件"}},[t._v("#")]),t._v(" 编译固件")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("Most users will not need to build this firmware! It is pre-built and automatically installed by "),a("em",[t._v("QGroundControl")]),t._v(" when appropriate hardware is connected.")])]),t._v(" "),a("p",[t._v("To "),a("RouterLink",{attrs:{to:"/zh/dev_setup/building_px4.html"}},[t._v("build PX4")]),t._v(" for this target:")],1),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("make holybro_pix32v5_default\n")])])]),a("h2",{attrs:{id:"调试接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#调试接口"}},[t._v("#")]),t._v(" 调试接口")]),t._v(" "),a("p",[t._v("The system's "),a("RouterLink",{attrs:{to:"/zh/debug/system_console.html"}},[t._v("serial console")]),t._v(" and SWD interface runs on the "),a("strong",[t._v("FMU Debug")]),t._v(" port")],1),t._v(" "),a("p",[a("img",{attrs:{src:r(818),alt:"FMU debug port diagram"}})]),t._v(" "),a("p",[t._v("The pinout uses the standard "),a("RouterLink",{attrs:{to:"/zh/debug/swd_debug.html#pixhawk-debug-mini"}},[t._v("Pixhawk Debug Mini")]),t._v(" interface defined in the "),a("a",{attrs:{href:"https://github.com/pixhawk/Pixhawk-Standards/blob/master/DS-009%20Pixhawk%20Connector%20Standard.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk Connector Standard"),a("OutboundLink")],1),t._v(".")],1),t._v(" "),a("h2",{attrs:{id:"外部设备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#外部设备"}},[t._v("#")]),t._v(" 外部设备")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/zh/sensor/airspeed.html"}},[t._v("数字空速传感器")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/telemetry/"}},[t._v("数传电台模块")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/sensor/rangefinders.html"}},[t._v("测距仪/距离传感器")])],1)]),t._v(" "),a("h2",{attrs:{id:"支持的平台-机身"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#支持的平台-机身"}},[t._v("#")]),t._v(" 支持的平台 / 机身")]),t._v(" "),a("p",[t._v("Any multicopter / airplane / rover or boat that can be controlled with normal RC servos or Futaba S-Bus servos. The complete set of supported configurations can be seen in the "),a("RouterLink",{attrs:{to:"/zh/airframes/airframe_reference.html"}},[t._v("Airframes Reference")]),t._v(".")],1),t._v(" "),a("h2",{attrs:{id:"附加信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#附加信息"}},[t._v("#")]),t._v(" 附加信息")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://cdn.shopify.com/s/files/1/0604/5905/7341/files/Holybro_PIX32-V5_technical_data_sheet_v1.1.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pix32 v5 Technical Data Sheet"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://cdn.shopify.com/s/files/1/0604/5905/7341/files/Holybro_Pix32-V5-Base-Mini-Pinouts.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pix32 v5 Pinouts"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://cdn.shopify.com/s/files/1/0604/5905/7341/files/Holybro_PIX32-V5-BASE-Schematic_diagram.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pix32 v5 Base Board Schematic Diagram"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://cdn.shopify.com/s/files/1/0604/5905/7341/files/Holybro_PIX32-V5-Base-Mini-Board_Schematic_diagram.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pix32 v5 Mini Base Board Schematic Diagram"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("FMUv5参考设计</0 >。")])])])}),[],!1,null,null,null);e.default=o.exports},815:function(t,e,r){t.exports=r.p+"assets/img/pix32_v5_family.649f2233.jpg"},816:function(t,e,r){t.exports=r.p+"assets/img/pix32_v5_base_boards_layout.8a3b0208.jpg"},817:function(t,e,r){t.exports=r.p+"assets/img/Dimensions_no_border.dd5ad470.jpg"},818:function(t,e,r){t.exports=r.p+"assets/img/FMU_Debug_Port_Horizontal.90dd8483.jpg"}}]);