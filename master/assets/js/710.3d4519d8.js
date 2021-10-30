(window.webpackJsonp=window.webpackJsonp||[]).push([[710],{2906:function(t,r,e){"use strict";e.r(r);var a=e(19),v=Object(a.a)({},(function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"pixhack-v3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pixhack-v3"}},[t._v("#")]),t._v(" Pixhack v3")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("PX4 does not manufacture this (or any) autopilot. Contact the [manufacturer](https://store.cuav.net/) for hardware support or compliance issues.")])]),t._v(" "),a("p",[t._v("The CUAV "),a("em",[t._v("Pixhack V3")]),t._v(" flight controller board is a flexible autopilot intended primarily for manufacturers of commercial systems.")]),t._v(" "),a("p",[t._v("The board is a variant of the SOLO Pixhawk"),a("sup",[t._v("®")]),t._v(" 2 (PH2) flight controller, which is in turn based on the "),a("a",{attrs:{href:"https://pixhawk.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk-project"),a("OutboundLink")],1),t._v(" "),a("strong",[t._v("FMUv3")]),t._v(" open hardware design. It runs PX4 on the "),a("a",{attrs:{href:"https://nuttx.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("NuttX"),a("OutboundLink")],1),t._v(" OS, and is fully compatible with both PX4 or ArduPilot"),a("sup",[t._v("®")]),t._v(" (APM) firmware.")]),t._v(" "),a("p",[a("em",[t._v("Pixhack V3")]),t._v(" has significant improvements with respect to the original design, including better interface layout and the addition of vibration damping and a thermostat system.")]),t._v(" "),a("p",[a("img",{attrs:{src:e(778),alt:"Pixhack v3"}})]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("This flight controller is "),a("RouterLink",{attrs:{to:"/zh/flight_controller/autopilot_manufacturer_supported.html"}},[t._v("manufacturer supported")]),t._v(".")],1)]),t._v(" "),a("h2",{attrs:{id:"快速预览"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速预览"}},[t._v("#")]),t._v(" 快速预览")]),t._v(" "),a("ul",[a("li",[t._v("微处理器：\n"),a("ul",[a("li",[t._v("STM32F427")]),t._v(" "),a("li",[t._v("STM32F100 (故障保护协处理器)")])])]),t._v(" "),a("li",[t._v("传感器：\n"),a("ul",[a("li",[t._v("加速度计 (3): LSM303D,MPU6000,MPU6000")]),t._v(" "),a("li",[t._v("陀螺仪 (3): L3GD20, MPU6000, MPU9250")]),t._v(" "),a("li",[t._v("指南针 (2): LS303D, MPU9250")]),t._v(" "),a("li",[t._v("气压计 (2): MS5611*2")])])]),t._v(" "),a("li",[t._v("接口：\n"),a("ul",[a("li",[t._v("MAVLink UART (2)")]),t._v(" "),a("li",[t._v("GPS UART (2)")]),t._v(" "),a("li",[t._v("DEBUG UART (1)")]),t._v(" "),a("li",[t._v("遥控信号输入(支持PPM, SBUS, DSM/DSM2)")]),t._v(" "),a("li",[t._v("RSSI输入: PWM或3.3ADC")]),t._v(" "),a("li",[t._v("I2C总线 (2)")]),t._v(" "),a("li",[t._v("CAN总线 (1)")]),t._v(" "),a("li",[t._v("ADC输入: 3.3V X1 , 6.6V X1")]),t._v(" "),a("li",[t._v("PWM输出: 8 PWM IO + 4 IO")])])]),t._v(" "),a("li",[t._v("电源系统\n"),a("ul",[a("li",[t._v("Power口输入电压: 4.5 ~ 5.5 V")]),t._v(" "),a("li",[t._v("USB口输入电压：5.0 V +- 0.25v")])])]),t._v(" "),a("li",[t._v("重量和尺寸:\n"),a("ul",[a("li",[t._v("重量: 63g")]),t._v(" "),a("li",[t._v("宽度：68mm")]),t._v(" "),a("li",[t._v("厚度: 17mm")]),t._v(" "),a("li",[t._v("长度：44mm")])])]),t._v(" "),a("li",[t._v("其它特性:\n"),a("ul",[a("li",[t._v("工作温度: -20 ~ 60°C")])])])]),t._v(" "),a("h2",{attrs:{id:"访问链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#访问链接"}},[t._v("#")]),t._v(" 访问链接")]),t._v(" "),a("p",[t._v("The board can be purchased from:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://store.cuav.net/index.php?id_product=8&id_product_attribute=0&rewrite=pixhack-v3-autopilot&controller=product&id_lang=3",target:"_blank",rel:"noopener noreferrer"}},[t._v("store.cuav.net"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://leixun.aliexpress.com/store",target:"_blank",rel:"noopener noreferrer"}},[t._v("leixun.aliexpress.com/store"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"编译固件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译固件"}},[t._v("#")]),t._v(" 编译固件")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("Most users will not need to build this firmware! It is pre-built and automatically installed by "),a("em",[t._v("QGroundControl")]),t._v(" when appropriate hardware is connected.")])]),t._v(" "),a("p",[t._v("To "),a("RouterLink",{attrs:{to:"/zh/dev_setup/building_px4.html"}},[t._v("build PX4")]),t._v(" for this target:")],1),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("make px4_fmu-v3_default\n")])])]),a("h2",{attrs:{id:"引脚和原理图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引脚和原理图"}},[t._v("#")]),t._v(" 引脚和原理图")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://doc.cuav.net/flight-controller/pixhack/en/pixhack-v3.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Documentation/wiring guides"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"serial-port-mapping"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#serial-port-mapping"}},[t._v("#")]),t._v(" Serial Port Mapping")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("UART")]),t._v(" "),a("th",[t._v("设备")]),t._v(" "),a("th",[t._v("Port")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("UART1")]),t._v(" "),a("td",[t._v("/dev/ttyS0")]),t._v(" "),a("td",[t._v("IO debug")])]),t._v(" "),a("tr",[a("td",[t._v("USART2")]),t._v(" "),a("td",[t._v("/dev/ttyS1")]),t._v(" "),a("td",[t._v("TELEM1 (flow control)")])]),t._v(" "),a("tr",[a("td",[t._v("USART3")]),t._v(" "),a("td",[t._v("/dev/ttyS2")]),t._v(" "),a("td",[t._v("TELEM2 (flow control)")])]),t._v(" "),a("tr",[a("td",[t._v("UART4")]),t._v(" "),a("td"),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("UART7")]),t._v(" "),a("td",[t._v("CONSOLE")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("UART8")]),t._v(" "),a("td",[t._v("SERIAL4")]),t._v(" "),a("td")])])])])}),[],!1,null,null,null);r.default=v.exports},778:function(t,r,e){t.exports=e.p+"assets/img/pixhack_v3_157_large_default.0e6804a9.jpg"}}]);