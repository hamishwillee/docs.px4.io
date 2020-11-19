(window.webpackJsonp=window.webpackJsonp||[]).push([[1079],{2270:function(t,e,s){"use strict";s.r(e);var a=s(18),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"pixhawk系列的配套计算机"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pixhawk系列的配套计算机"}},[t._v("#")]),t._v(" Pixhawk系列的配套计算机")]),t._v(" "),s("p",[t._v("Pixhawk与配套计算机(Raspberry Pi，Odroid，Tegra K1) 的交互方式只有一种：通过串口2 "),s("code",[t._v("TELEM 2")]),t._v("。 The message format on this link is "),s("a",{attrs:{href:"https://mavlink.io/en/",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVLink"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"pixhawk设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pixhawk设置"}},[t._v("#")]),t._v(" Pixhawk设置")]),t._v(" "),s("p",[t._v("在 任何 "),s("a",{attrs:{href:"https://docs.px4.io/en/peripherals/serial_configuration.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("可配置的串口 "),s("OutboundLink")],1),t._v("上使能MAVLink消息。")]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("Tip")]),t._v(" "),s("code",[t._v("TELEM 2")]),t._v(" 一般用作与配套计算机通信。")])]),t._v(" "),s("p",[t._v("要在"),s("code",[t._v("TELEM 2")]),t._v(" 上配置默认的配套计算机消息流，请设置以下参数：")]),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/zh/advanced/parameter_reference.html#MAV_1_CONFIG"}},[t._v("MAV_1_CONFIG")]),t._v(" = "),s("code",[t._v("TELEM 2")]),t._v(" ("),s("code",[t._v("MAV_1_CONFIG")]),t._v("总是配置为 "),s("code",[t._v("TELEM 2")]),t._v(" 端口)")],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/zh/advanced/parameter_reference.html#MAV_1_MODE"}},[t._v("MAV_1_MODE")]),t._v(" = "),s("code",[t._v("Onboard")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/zh/advanced/parameter_reference.html#SER_TEL2_BAUD"}},[t._v("SER_TEL2_BAUD")]),t._v(" = "),s("code",[t._v("921600")]),t._v("（建议在像日志流或FastRTPS之类的应用，使用 921600 或更高）")],1)]),t._v(" "),s("p",[t._v("更多信息，请参考 "),s("a",{attrs:{href:"https://docs.px4.io/en/peripherals/mavlink_peripherals.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVLink Peripherals (GCS/OSD/Companion)"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"配套计算机设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配套计算机设置"}},[t._v("#")]),t._v(" 配套计算机设置")]),t._v(" "),s("p",[t._v("为了接收 mavlink消息, 配套计算机需要运行一些与串行端口对话的软件。 最常见的选择有:")]),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/zh/ros/mavros_installation.html"}},[t._v("MAVROS")]),t._v(" 与ros 节点通信")],1),t._v(" "),s("li",[t._v("C/C++ example code </0> 连接自定义代码")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/intel/mavlink-router",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVLink Router"),s("OutboundLink")],1),t._v(" (recommended) or "),s("a",{attrs:{href:"http://mavproxy.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVProxy"),s("OutboundLink")],1),t._v(" to route MAVLink between serial and UDP")])]),t._v(" "),s("h2",{attrs:{id:"硬件设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#硬件设置"}},[t._v("#")]),t._v(" 硬件设置")]),t._v(" "),s("p",[t._v("按照以下说明连接串行端口。 所有 pixhawk 串行端口都以 3.3 v 电平工作，同时与5v 电平兼容。")]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("Warning")]),t._v(" 许多现代配套计算机在其硬件 UART 上只支持 1.8 V 级别，3.3 V 电平可能会损坏配套计算机。 推荐使用一个电平转换器。 在大多数情况下， 可访问的硬件串行端口已经具有与之关联的一些功能 (调制解调器或控制台)，并且需要在 linux"),s("em",[t._v("重新配置")]),t._v("， 然后才能使用它们。")])]),t._v(" "),s("p",[t._v("安全的选择是使用 ftdi 芯片 usb 到串行适配器板和下面的接线方式。 这种方式有效且容易设置。")]),t._v(" "),s("p",[t._v("|  | TELEM2 |           | FTDI |                        |\n|  | ------ | --------- | ---- | ---------------------- |\n|  | 1      | +5V (red) |      | DO NOT CONNECT!        |\n|  | 2      | Tx  (out) | 5    | FTDI RX (yellow) (in)  |\n|  | 3      | Rx  (in)  | 4    | FTDI TX (orange) (out) |\n|  | 4      | CTS (in)  | 6    | FTDI RTS (green) (out) |\n|  | 5      | RTS (out) | 2    | FTDI CTS (brown) (in)  |\n|  | 6      | GND       | 1    | FTDI GND (black)       |")]),t._v(" "),s("h2",{attrs:{id:"linux系统上的软件设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux系统上的软件设置"}},[t._v("#")]),t._v(" Linux系统上的软件设置")]),t._v(" "),s("p",[t._v("在 linux 上, usb ftdi 的默认名称将类似于 "),s("code",[t._v("\\dev\\ttyUSB0")]),t._v("。 如果您在 usb 或 arduino 上连接了第二个 ftdi, 它将注册为 "),s("code",[t._v("\\dev\\ttyUSB1")]),t._v("。 为了避免第一次插入和第二个插头之间的混淆, 我们建议您创建一个从 "),s("code",[t._v("ttyUSBx")]),t._v(" 到友好名称的符号链接, 具体取决于 usb 设备的供应商和产品 ID。")]),t._v(" "),s("p",[t._v("使用 "),s("code",[t._v("lsusb")]),t._v("指令，我们可以获得供应商和产品 ID。")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$lsusb")]),t._v("\n    总线006 设备002：ID 0BDA:8153 Realtek 半导体公司\n    Bus 006 Device 001: ID 1d6b:0003 Linux Foundation "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.0")]),t._v(" root hub\n    Bus 005 Device 001: ID 1d6b:0002 Linux Foundation "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.0")]),t._v(" root hub\n    Bus 004 Device 002: ID 05e3:0616 Genesys Logic, Inc.\n    Bus 004 Device 001: ID 1d6b:0003 Linux Foundation "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.0")]),t._v(" root hub\n    Bus 003 Device 004: ID "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2341")]),t._v(":0042 Arduino SA Mega "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2560")]),t._v(" R3 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("CDC ACM"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    Bus 003 Device 005: ID 26ac:0011\n    Bus 003 Device 002: ID 05e3:0610 Genesys Logic, Inc. "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("-port hub\n    Bus 003 Device 001: ID 1d6b:0002 Linux Foundation "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.0")]),t._v(" root hub\n    Bus 002 Device 001: ID 1d6b:0001 Linux Foundation "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),t._v(" root hub\n    Bus 001 Device 002: ID 0bda:8176 Realtek Semiconductor Corp. RTL8188CUS "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("802")]),t._v(".11n WLAN Adapter\n    Bus 001 Device 001: ID 1d6b:0002 Linux Foundation "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.0")]),t._v(" root hub\n")])])]),s("p",[t._v("Arduino 是 "),s("code",[t._v("Bus 003 Device 004: ID 2341:0042 Arduino SA Mega 2560 R3 (CDC ACM)")])]),t._v(" "),s("p",[t._v("The Pixhawk is "),s("code",[t._v("Bus 003 Device 005: ID 26ac:0011")])]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("Note")]),t._v(" 如果你没找到你是设备，拔掉，执行 "),s("code",[t._v("lsusb")]),t._v("，再插上， 再次执行"),s("code",[t._v("lsusb")]),t._v("，查看增加的设备。")])]),t._v(" "),s("p",[t._v("最终，我们可以在文件中创建一个新的UDEV规则，文件名是"),s("code",[t._v("/etc/udev/rules.d/99-pixhawk.rules")]),t._v(" 。 文件能把idVendor和idProduct改成你的。")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("SUBSYSTEM")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tty"')]),t._v(", ATTRS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("idVendor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2341"')]),t._v(", ATTRS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("idProduct"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0042"')]),t._v(", "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("SYMLINK")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ttyArduino"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("SUBSYSTEM")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tty"')]),t._v(", ATTRS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("idVendor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"26ac"')]),t._v(", ATTRS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("idProduct"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0011"')]),t._v(", "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("SYMLINK")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ttyPixhawk"')]),t._v("\n")])])]),s("p",[t._v("最后, 在 "),s("strong",[t._v("reboot")]),t._v(" 后, 您可以确定您的设备名, 并将 "),s("code",[t._v("/dev/ttyPixhawk")]),t._v("替换掉在脚本中的 "),s("code",[t._v("/dev/ttyUSB0")]),t._v("。")]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("Note")]),t._v(" 请务必通过 "),s("code",[t._v("usermod")]),t._v(" 将自己添加到 "),s("code",[t._v("tty")]),t._v("和"),s("code",[t._v("dialout")]),t._v(" 组, 以避免必须以 root 身份执行脚本。")])]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("usermod")]),t._v(" -a -G "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tty")]),t._v(" ros-user\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("usermod")]),t._v(" -a -G dialout ros-user\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);