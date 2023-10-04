(window.webpackJsonp=window.webpackJsonp||[]).push([[485],{3402:function(t,e,r){"use strict";r.r(e);var v=r(19),a=Object(v.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"cuav-v5-discontinued"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#cuav-v5-discontinued"}},[t._v("#")]),t._v(" CUAV v5 (Discontinued)")]),t._v(" "),v("div",{staticClass:"custom-block warning"},[v("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),v("p",[t._v("This flight controller has been "),v("RouterLink",{attrs:{to:"/zh/flight_controller/autopilot_experimental.html"}},[t._v("discontinued")]),t._v(" and is no longer commercially available.")],1)]),t._v(" "),v("div",{staticClass:"custom-block warning"},[v("p",{staticClass:"custom-block-title"},[t._v("PX4 does not manufacture this (or any) autopilot. Contact the [manufacturer](https://store.cuav.net/) for hardware support or compliance issues.")])]),t._v(" "),v("p",[v("em",[t._v("CUAV v5")]),v("sup",[t._v("®")]),t._v(' (previously "Pixhack v5") is an advanced autopilot designed and made by CUAV'),v("sup",[t._v("®")]),t._v(". The board is based on the "),v("a",{attrs:{href:"https://pixhawk.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk-project"),v("OutboundLink")],1),t._v(" "),v("strong",[t._v("FMUv5")]),t._v(" open hardware design. It runs PX4 on the "),v("a",{attrs:{href:"https://nuttx.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("NuttX"),v("OutboundLink")],1),t._v(" OS, and is fully compatible with PX4 firmware. It is intended primarily for academic and commercial developers.")]),t._v(" "),v("p",[v("img",{attrs:{src:r(811),alt:"CUAV v5"}})]),t._v(" "),v("h2",{attrs:{id:"快速预览"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#快速预览"}},[t._v("#")]),t._v(" 快速预览")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("主处理器：STM32F765")]),t._v(" "),v("ul",[v("li",[t._v("32 位 Arm® Cortex®-M7，216MHz，2MB 储存，512KB RAM")])])]),t._v(" "),v("li",[v("p",[t._v("IO 处理器：STM32F100")]),t._v(" "),v("ul",[v("li",[t._v("32 位 Arm® Cortex®-M3，24MHz，8KB SRAM")])])]),t._v(" "),v("li",[v("p",[t._v("内置传感器：")]),t._v(" "),v("ul",[v("li",[t._v("加速度计/陀螺仪：ICM-20689")]),t._v(" "),v("li",[t._v("加速度计/陀螺仪：BMI055")]),t._v(" "),v("li",[t._v("磁力计：IST8310")]),t._v(" "),v("li",[t._v("气压计：MS5611")])])]),t._v(" "),v("li",[v("p",[t._v("接口：")]),t._v(" "),v("ul",[v("li",[t._v("14路PWM输出 (6路来自FMU, 8路来自 IO)")]),t._v(" "),v("li",[t._v("FMU上有3个专用PWM/Capture输入")]),t._v(" "),v("li",[t._v("CPPM专用的RC输入")]),t._v(" "),v("li",[t._v("Dedicated R/C input for PPM and S.Bus")]),t._v(" "),v("li",[t._v("电平/PWM RSSI输入")]),t._v(" "),v("li",[t._v("S.BUS伺服输出")]),t._v(" "),v("li",[t._v("5个通用串行口")]),t._v(" "),v("li",[t._v("4路I2C总线")]),t._v(" "),v("li",[t._v("4路SPI总线")]),t._v(" "),v("li",[t._v("2 CANBuses with serial ESC")]),t._v(" "),v("li",[t._v("2个电池电流/电压模拟输入口")])])]),t._v(" "),v("li",[v("p",[t._v("电源系统：")]),t._v(" "),v("ul",[v("li",[t._v("输入电压：4.3~5.4V")]),t._v(" "),v("li",[t._v("USB输入电压: 4.75~5.25V")]),t._v(" "),v("li",[t._v("伺服导轨输入电压：0~36V")])])]),t._v(" "),v("li",[v("p",[t._v("重量和尺寸:")]),t._v(" "),v("ul",[v("li",[t._v("重量：99g")]),t._v(" "),v("li",[t._v("尺寸：44"),v("em",[t._v("84")]),t._v("12mm")])])]),t._v(" "),v("li",[v("p",[t._v("其它特性:")]),t._v(" "),v("ul",[v("li",[t._v("工作温度：-20 ~ 80°C （实测值）")])])])]),t._v(" "),v("h2",{attrs:{id:"where-to-buy"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#where-to-buy"}},[t._v("#")]),t._v(" Where to Buy")]),t._v(" "),v("p",[t._v("Order from "),v("a",{attrs:{href:"https://cuav.taobao.com/index.htm?spm=2013.1.w5002-16371268426.2.411f26d9E18eAz",target:"_blank",rel:"noopener noreferrer"}},[t._v("CUAV"),v("OutboundLink")],1),t._v(".")]),t._v(" "),v("h2",{attrs:{id:"接口定义"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#接口定义"}},[t._v("#")]),t._v(" 接口定义")]),t._v(" "),v("p",[v("img",{attrs:{src:r(812),alt:"CUAV v5"}})]),t._v(" "),v("div",{staticClass:"custom-block warning"},[v("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),v("p",[t._v("The RCIN interface is limited to powering the rc receiver and cannot be connected to any power/load.")])]),t._v(" "),v("h2",{attrs:{id:"额定电压"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#额定电压"}},[t._v("#")]),t._v(" 额定电压")]),t._v(" "),v("p",[v("em",[t._v("CUAV v5")]),t._v(" can be triple-redundant on the power supply if three power sources are supplied. The three power rails are: "),v("strong",[t._v("POWER1")]),t._v(", "),v("strong",[t._v("POWER2")]),t._v(" and "),v("strong",[t._v("USB")]),t._v(".")]),t._v(" "),v("div",{staticClass:"custom-block note"},[v("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),v("p",[t._v("The output power rails "),v("strong",[t._v("FMU PWM OUT")]),t._v(" and "),v("strong",[t._v("I/O PWM OUT")]),t._v(" (0V to 36V) do not power the flight controller board (and are not powered by it). You must supply power to one of "),v("strong",[t._v("POWER1")]),t._v(", "),v("strong",[t._v("POWER2")]),t._v(" or "),v("strong",[t._v("USB")]),t._v(" or the board will be unpowered.")])]),t._v(" "),v("p",[v("strong",[t._v("Normal Operation Maximum Ratings")])]),t._v(" "),v("p",[t._v("Under these conditions all power sources will be used in this order to power the system:")]),t._v(" "),v("ol",[v("li",[v("strong",[t._v("POWER1")]),t._v(" and "),v("strong",[t._v("POWER2")]),t._v(" inputs (4.3V to 5.4V)")]),t._v(" "),v("li",[v("strong",[t._v("USB")]),t._v(" input (4.75V to 5.25V)")])]),t._v(" "),v("h2",{attrs:{id:"编译固件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#编译固件"}},[t._v("#")]),t._v(" 编译固件")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),v("p",[t._v("Most users will not need to build this firmware! It is pre-built and automatically installed by "),v("em",[t._v("QGroundControl")]),t._v(" when appropriate hardware is connected.")])]),t._v(" "),v("p",[t._v("To "),v("RouterLink",{attrs:{to:"/zh/dev_setup/building_px4.html"}},[t._v("build PX4")]),t._v(" for this target:")],1),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("make px4_fmu-v5_default\n")])])]),v("h2",{attrs:{id:"debug调试端口"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#debug调试端口"}},[t._v("#")]),t._v(" Debug调试端口")]),t._v(" "),v("p",[t._v("The "),v("RouterLink",{attrs:{to:"/zh/debug/system_console.html"}},[t._v("PX4 System Console")]),t._v(" and "),v("RouterLink",{attrs:{to:"/zh/debug/swd_debug.html"}},[t._v("SWD interface")]),t._v(" operate on the "),v("strong",[t._v("FMU Debug")]),t._v(" port. Simply connect the FTDI cable to the Debug & F7 SWD connector. To access the I/O Debug port, the user must remove the CUAV v5 shell. Both ports have standard serial pins and can be connected to a standard FTDI cable (3.3V, but 5V tolerant).")],1),t._v(" "),v("p",[t._v("The pinout is as shown.")]),t._v(" "),v("p",[v("img",{attrs:{src:r(813),alt:"CUAV v5 debug"}})]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("针脚")]),t._v(" "),v("th",[t._v("CUAV v5 debug")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("1")]),t._v(" "),v("td",[t._v("GND")])]),t._v(" "),v("tr",[v("td",[t._v("2")]),t._v(" "),v("td",[t._v("FMU-swclk")])]),t._v(" "),v("tr",[v("td",[t._v("3")]),t._v(" "),v("td",[t._v("FMU-SWDIO")])]),t._v(" "),v("tr",[v("td",[t._v("4")]),t._v(" "),v("td",[t._v("UART7_RX")])]),t._v(" "),v("tr",[v("td",[t._v("5")]),t._v(" "),v("td",[t._v("UART7_TX")])]),t._v(" "),v("tr",[v("td",[t._v("6")]),t._v(" "),v("td",[t._v("VCC")])])])]),t._v(" "),v("h2",{attrs:{id:"serial-port-mapping"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#serial-port-mapping"}},[t._v("#")]),t._v(" Serial Port Mapping")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("UART")]),t._v(" "),v("th",[t._v("设备")]),t._v(" "),v("th",[t._v("Port")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("UART1")]),t._v(" "),v("td",[t._v("/dev/ttyS0")]),t._v(" "),v("td",[t._v("GPS")])]),t._v(" "),v("tr",[v("td",[t._v("USART2")]),t._v(" "),v("td",[t._v("/dev/ttyS1")]),t._v(" "),v("td",[t._v("TELEM1 (flow control)")])]),t._v(" "),v("tr",[v("td",[t._v("USART3")]),t._v(" "),v("td",[t._v("/dev/ttyS2")]),t._v(" "),v("td",[t._v("TELEM2 (flow control)")])]),t._v(" "),v("tr",[v("td",[t._v("UART4")]),t._v(" "),v("td",[t._v("/dev/ttyS3")]),t._v(" "),v("td",[t._v("TELEM4")])]),t._v(" "),v("tr",[v("td",[t._v("USART6")]),t._v(" "),v("td",[t._v("/dev/ttyS4")]),t._v(" "),v("td",[t._v("TX is RC input from SBUS_RC connector")])]),t._v(" "),v("tr",[v("td",[t._v("UART7")]),t._v(" "),v("td",[t._v("/dev/ttyS5")]),t._v(" "),v("td",[t._v("Debug Console")])]),t._v(" "),v("tr",[v("td",[t._v("UART8")]),t._v(" "),v("td",[t._v("/dev/ttyS6")]),t._v(" "),v("td",[t._v("PX4IO")])])])]),t._v(" "),v("h2",{attrs:{id:"外部设备"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#外部设备"}},[t._v("#")]),t._v(" 外部设备")]),t._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"https://item.taobao.com/item.htm?spm=a1z10.3-c-s.w4002-16371268452.37.6d9f48afsFgGZI&id=9512463037",target:"_blank",rel:"noopener noreferrer"}},[t._v("数字空速传感器"),v("OutboundLink")],1)]),t._v(" "),v("li",[v("a",{attrs:{href:"https://cuav.taobao.com/category-158480951.htm?spm=2013.1.w5002-16371268426.4.410b7a821qYbBq&search=y&catName=%CA%FD%B4%AB%B5%E7%CC%A8",target:"_blank",rel:"noopener noreferrer"}},[t._v("遥测无线电模块"),v("OutboundLink")],1)]),t._v(" "),v("li",[v("RouterLink",{attrs:{to:"/zh/sensor/rangefinders.html"}},[t._v("距离传感器")])],1)]),t._v(" "),v("h2",{attrs:{id:"支持的平台-机身"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#支持的平台-机身"}},[t._v("#")]),t._v(" 支持的平台/机身")]),t._v(" "),v("p",[t._v("Any multicopter / airplane / rover or boat that can be controlled with normal RC servos or Futaba S-Bus servos. The complete set of supported configurations can be seen in the "),v("RouterLink",{attrs:{to:"/zh/airframes/airframe_reference.html"}},[t._v("Airframes Reference")]),t._v(".")],1),t._v(" "),v("h2",{attrs:{id:"更多信息"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#更多信息"}},[t._v("#")]),t._v(" 更多信息")]),t._v(" "),v("ul",[v("li")]),t._v(" "),v("p",[t._v("FMUv5参考设计</0 >。")]),t._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"http://doc.cuav.net/flight-controller/v5-autopilot/en/v5.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("CUAV v5 docs"),v("OutboundLink")],1)]),t._v(" "),v("li",[v("a",{attrs:{href:"https://github.com/cuav",target:"_blank",rel:"noopener noreferrer"}},[t._v("CUAV Github库"),v("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=a.exports},811:function(t,e,r){t.exports=r.p+"assets/img/pixhack_v5.19519bdd.jpg"},812:function(t,e,r){t.exports=r.p+"assets/img/pixhack_v5_connector.2505195c.jpg"},813:function(t,e,r){t.exports=r.p+"assets/img/pixhack_v5_debug.8a6d1980.jpg"}}]);