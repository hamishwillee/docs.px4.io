(window.webpackJsonp=window.webpackJsonp||[]).push([[1151],{2382:function(t,e,a){"use strict";a.r(e);var s=a(19),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"pixhawk系列的配套计算机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pixhawk系列的配套计算机"}},[t._v("#")]),t._v(" Pixhawk系列的配套计算机")]),t._v(" "),a("p",[t._v("Pixhawk与配套计算机(Raspberry Pi，Odroid，Tegra K1) 的交互方式只有一种：通过串口2 "),a("code",[t._v("TELEM 2")]),t._v("。 消息格式是MAVLINK。")]),t._v(" "),a("h2",{attrs:{id:"pixhawk设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pixhawk设置"}},[t._v("#")]),t._v(" Pixhawk设置")]),t._v(" "),a("p",[t._v("在 任何 "),a("a",{attrs:{href:"https://docs.px4.io/en/peripherals/serial_configuration.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("可配置的串口 "),a("OutboundLink")],1),t._v("上使能MAVLink消息。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("Typically the "),a("code",[t._v("TELEM 2")]),t._v(" port is used for a companion computer.")])]),t._v(" "),a("p",[t._v("更多信息，请参考 "),a("a",{attrs:{href:"https://docs.px4.io/en/peripherals/mavlink_peripherals.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVLink Peripherals (GCS/OSD/Companion)"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/zh/advanced/parameter_reference.html#MAV_1_CONFIG"}},[t._v("MAV_1_CONFIG")]),t._v(" = "),a("code",[t._v("TELEM 2")]),t._v(" ("),a("code",[t._v("MAV_1_CONFIG")]),t._v("总是配置为 "),a("code",[t._v("TELEM 2")]),t._v(" 端口)")],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/advanced/parameter_reference.html#MAV_1_MODE"}},[t._v("MAV_1_MODE")]),t._v(" = "),a("code",[t._v("Onboard")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/advanced/parameter_reference.html#SER_TEL2_BAUD"}},[t._v("SER_TEL2_BAUD")]),t._v(" = "),a("code",[t._v("921600")]),t._v("（建议在像日志流或FastRTPS之类的应用，使用 921600 或更高）")],1)]),t._v(" "),a("p",[t._v("更多信息，请参考 "),a("RouterLink",{attrs:{to:"/zh/peripherals/mavlink_peripherals.html"}},[t._v("MAVLink Peripherals (GCS/OSD/Companion)")]),t._v("。")],1),t._v(" "),a("h2",{attrs:{id:"配套计算机设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配套计算机设置"}},[t._v("#")]),t._v(" 配套计算机设置")]),t._v(" "),a("p",[t._v("按照以下说明连接串行端口。 所有 pixhawk 串行端口都以 3.3 v 电平工作，同时与5v 电平兼容。")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/zh/ros/mavros_installation.html"}},[t._v("MAVROS")]),t._v(" 与ros 节点通信")],1),t._v(" "),a("li",[t._v("C/C++ example code </0> 连接自定义代码")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/intel/mavlink-router",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVLink Router"),a("OutboundLink")],1),t._v(" (recommended) or "),a("a",{attrs:{href:"http://mavproxy.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVProxy"),a("OutboundLink")],1),t._v(" to route MAVLink between serial and UDP")])]),t._v(" "),a("h2",{attrs:{id:"硬件设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#硬件设置"}},[t._v("#")]),t._v(" 硬件设置")]),t._v(" "),a("p",[t._v("安全的选择是使用 ftdi 芯片 usb 到串行适配器板和下面的接线方式。 这种方式有效且容易设置。")]),t._v(" "),a("p",[t._v("在 linux 上, usb ftdi 的默认名称将类似于 "),a("code",[t._v("\\dev\\ttyUSB0")]),t._v("。 如果您在 usb 或 arduino 上连接了第二个 ftdi, 它将注册为 "),a("code",[t._v("\\dev\\ttyUSB1")]),t._v("。 为了避免第一次插入和第二个插头之间的混淆, 我们建议您创建一个从 "),a("code",[t._v("ttyUSBx")]),t._v(" 到友好名称的符号链接, 具体取决于 usb 设备的供应商和产品 ID。\n:::")]),t._v(" "),a("p",[t._v("The safe bet is to use an FTDI Chip USB-to-serial adapter board and the wiring below. This always works and is easy to set up.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("TELEM2")]),t._v(" "),a("th"),t._v(" "),a("th",[t._v("FTDI")]),t._v(" "),a("th",[t._v("FTDI")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("1")]),t._v(" "),a("td",[t._v("1")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("DO NOT CONNECT!")])]),t._v(" "),a("tr",[a("td",[t._v("2")]),t._v(" "),a("td",[t._v("2")]),t._v(" "),a("td",[t._v("Tx (输出)")]),t._v(" "),a("td",[t._v("5")])]),t._v(" "),a("tr",[a("td",[t._v("3")]),t._v(" "),a("td",[t._v("3")]),t._v(" "),a("td",[t._v("Rx（输入）")]),t._v(" "),a("td",[t._v("4")])]),t._v(" "),a("tr",[a("td",[t._v("4")]),t._v(" "),a("td",[t._v("4")]),t._v(" "),a("td",[t._v("CTS（输入）")]),t._v(" "),a("td",[t._v("6")])]),t._v(" "),a("tr",[a("td",[t._v("5")]),t._v(" "),a("td",[t._v("5")]),t._v(" "),a("td",[t._v("RTS（输出）")]),t._v(" "),a("td",[t._v("2")])]),t._v(" "),a("tr",[a("td",[t._v("6")]),t._v(" "),a("td",[t._v("6")]),t._v(" "),a("td",[t._v("GND")]),t._v(" "),a("td",[t._v("1")])])])]),t._v(" "),a("h2",{attrs:{id:"linux系统上的软件设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux系统上的软件设置"}},[t._v("#")]),t._v(" Linux系统上的软件设置")]),t._v(" "),a("p",[t._v("On Linux the default name of a USB FTDI would be like "),a("code",[t._v("\\dev\\ttyUSB0")]),t._v(". If you have a second FTDI linked on the USB or an Arduino, it will registered as "),a("code",[t._v("\\dev\\ttyUSB1")]),t._v(". To avoid the confusion between the first plugged and the second plugged, we recommend you to create a symlink from "),a("code",[t._v("ttyUSBx")]),t._v(" to a friendly name, depending on the Vendor and Product ID of the USB device.")]),t._v(" "),a("p",[t._v("Pixhawk 是 "),a("code",[t._v("Bus 003 Device 005: ID 26ac:0011")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$lsusb")]),t._v("\n    总线006 设备002：ID 0BDA:8153 Realtek 半导体公司\n    Bus 006 Device 001: ID 1d6b:0003 Linux Foundation "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.0")]),t._v(" root hub\n    Bus 005 Device 001: ID 1d6b:0002 Linux Foundation "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.0")]),t._v(" root hub\n    Bus 004 Device 002: ID 05e3:0616 Genesys Logic, Inc.\n    Bus 004 Device 001: ID 1d6b:0003 Linux Foundation "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.0")]),t._v(" root hub\n    Bus 003 Device 004: ID "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2341")]),t._v(":0042 Arduino SA Mega "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2560")]),t._v(" R3 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("CDC ACM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    Bus 003 Device 005: ID 26ac:0011\n    Bus 003 Device 002: ID 05e3:0610 Genesys Logic, Inc. "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("-port hub\n    Bus 003 Device 001: ID 1d6b:0002 Linux Foundation "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.0")]),t._v(" root hub\n    Bus 002 Device 001: ID 1d6b:0001 Linux Foundation "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),t._v(" root hub\n    Bus 001 Device 002: ID 0bda:8176 Realtek Semiconductor Corp. RTL8188CUS "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("802")]),t._v(".11n WLAN Adapter\n    Bus 001 Device 001: ID 1d6b:0002 Linux Foundation "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.0")]),t._v(" root hub\n")])])]),a("p",[t._v("最终，我们可以在文件中创建一个新的UDEV规则，文件名是"),a("code",[t._v("/etc/udev/rules.d/99-pixhawk.rules")]),t._v(" 。 文件能把idVendor和idProduct改成你的。")]),t._v(" "),a("p",[t._v("最后, 在 "),a("strong",[t._v("reboot")]),t._v(" 后, 您可以确定您的设备名, 并将 "),a("code",[t._v("/dev/ttyPixhawk")]),t._v("替换掉在脚本中的 "),a("code",[t._v("/dev/ttyUSB0")]),t._v("。")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("If you do not find your device, unplug it, execute "),a("code",[t._v("lsusb")]),t._v(", plug it, execute "),a("code",[t._v("lsusb")]),t._v(" again and see the added device.")])]),t._v(" "),a("p",[t._v("Therefore, we can create a new UDEV rule in a file called "),a("code",[t._v("/etc/udev/rules.d/99-pixhawk.rules")]),t._v(" with the following content, changing the idVendor and idProduct to yours.")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("SUBSYSTEM")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tty"')]),t._v(", ATTRS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("idVendor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2341"')]),t._v(", ATTRS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("idProduct"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0042"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("SYMLINK")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ttyArduino"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("SUBSYSTEM")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tty"')]),t._v(", ATTRS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("idVendor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"26ac"')]),t._v(", ATTRS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("idProduct"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0011"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("SYMLINK")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ttyPixhawk"')]),t._v("\n")])])]),a("p",[t._v("Finally, after a "),a("strong",[t._v("reboot")]),t._v(" you can be sure to know which device is what and put "),a("code",[t._v("/dev/ttyPixhawk")]),t._v(" instead of "),a("code",[t._v("/dev/ttyUSB0")]),t._v(" in your scripts.")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("Be sure to add yourself in the "),a("code",[t._v("tty")]),t._v(" and "),a("code",[t._v("dialout")]),t._v(" groups via "),a("code",[t._v("usermod")]),t._v(" to avoid to have to execute scripts as root.")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("usermod")]),t._v(" -a -G "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tty")]),t._v(" ros-user\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("usermod")]),t._v(" -a -G dialout ros-user\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);