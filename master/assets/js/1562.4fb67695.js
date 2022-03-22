(window.webpackJsonp=window.webpackJsonp||[]).push([[1562],{2848:function(t,e,a){"use strict";a.r(e);var s=a(19),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"pixhawk系列的配套计算机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pixhawk系列的配套计算机"}},[t._v("#")]),t._v(" Pixhawk系列的配套计算机")]),t._v(" "),a("p",[t._v("PX4 can connect to companion computers (Raspberry Pi, Odroid, Tegra K1, etc.) using any configurable serial port, including the Ethernet port (if supported). Message are sent over the link using the "),a("a",{attrs:{href:"https://mavlink.io/en/",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVLink"),a("OutboundLink")],1),t._v(" protocol.")]),t._v(" "),a("h2",{attrs:{id:"pixhawk设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pixhawk设置"}},[t._v("#")]),t._v(" Pixhawk设置")]),t._v(" "),a("p",[t._v("PX4 is configured by default to connect to a companion computer connected to the "),a("code",[t._v("TELEM 2")]),t._v(" serial port. No additional PX4-side configuration should be required if you use this port")]),t._v(" "),a("p",[t._v("To enable MAVLink to connect on another port see "),a("RouterLink",{attrs:{to:"/zh/peripherals/mavlink_peripherals.html"}},[t._v("MAVLink Peripherals (GCS/OSD/Companion)")]),t._v(" and "),a("RouterLink",{attrs:{to:"/zh/peripherals/serial_configuration.html"}},[t._v("Serial Port Configuration")]),t._v(".")],1),t._v(" "),a("h2",{attrs:{id:"配套计算机设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配套计算机设置"}},[t._v("#")]),t._v(" 配套计算机设置")]),t._v(" "),a("p",[t._v("In order to receive MAVLink, the companion computer needs to run some software talking to the serial port. The most common options are:")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/zh/ros/mavros_installation.html"}},[t._v("MAVROS")]),t._v(" to communicate to ROS nodes")],1),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/mavlink/c_uart_interface_example",target:"_blank",rel:"noopener noreferrer"}},[t._v("C/C++ example code"),a("OutboundLink")],1),t._v(" to connect custom code")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/intel/mavlink-router",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVLink Router"),a("OutboundLink")],1),t._v(" (recommended) or "),a("a",{attrs:{href:"https://ardupilot.org/mavproxy/",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVProxy"),a("OutboundLink")],1),t._v(" to route MAVLink between serial and UDP")])]),t._v(" "),a("h3",{attrs:{id:"serial-port-hardware-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#serial-port-hardware-setup"}},[t._v("#")]),t._v(" Serial Port Hardware Setup")]),t._v(" "),a("p",[t._v("If you're connecting using a serial port, wire the port according to the instructions below. All Pixhawk serial ports operate at 3.3V and are 5V level compatible.")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("Many modern companion computers only support 1.8V levels on their hardware UART and can be damaged by 3.3V levels. Use a level shifter. In most cases the accessible hardware serial ports already have some function (modem or console) associated with them and need to be "),a("em",[t._v("reconfigured in Linux")]),t._v(" before they can be used.")])]),t._v(" "),a("p",[t._v("The safe bet is to use an FTDI Chip USB-to-serial adapter board and the wiring below. This always works and is easy to set up.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("TELEM2")]),t._v(" "),a("th"),t._v(" "),a("th",[t._v("FTDI")]),t._v(" "),a("th")])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("1")]),t._v(" "),a("td",[t._v("1")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("DO NOT CONNECT!")])]),t._v(" "),a("tr",[a("td",[t._v("2")]),t._v(" "),a("td",[t._v("2")]),t._v(" "),a("td",[t._v("Tx (输出)")]),t._v(" "),a("td",[t._v("5")])]),t._v(" "),a("tr",[a("td",[t._v("3")]),t._v(" "),a("td",[t._v("3")]),t._v(" "),a("td",[t._v("Rx（输入）")]),t._v(" "),a("td",[t._v("4")])]),t._v(" "),a("tr",[a("td",[t._v("4")]),t._v(" "),a("td",[t._v("4")]),t._v(" "),a("td",[t._v("CTS（输入）")]),t._v(" "),a("td",[t._v("6")])]),t._v(" "),a("tr",[a("td",[t._v("5")]),t._v(" "),a("td",[t._v("5")]),t._v(" "),a("td",[t._v("RTS（输出）")]),t._v(" "),a("td",[t._v("2")])]),t._v(" "),a("tr",[a("td",[t._v("6")]),t._v(" "),a("td",[t._v("6")]),t._v(" "),a("td",[t._v("GND")]),t._v(" "),a("td",[t._v("1")])])])]),t._v(" "),a("h3",{attrs:{id:"serial-port-software-setup-on-linux"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#serial-port-software-setup-on-linux"}},[t._v("#")]),t._v(" Serial Port Software setup on Linux")]),t._v(" "),a("p",[t._v("On Linux the default name of a USB FTDI would be like "),a("code",[t._v("\\dev\\ttyUSB0")]),t._v(". If you have a second FTDI linked on the USB or an Arduino, it will registered as "),a("code",[t._v("\\dev\\ttyUSB1")]),t._v(". To avoid the confusion between the first plugged and the second plugged, we recommend you to create a symlink from "),a("code",[t._v("ttyUSBx")]),t._v(" to a friendly name, depending on the Vendor and Product ID of the USB device.")]),t._v(" "),a("p",[t._v("Using "),a("code",[t._v("lsusb")]),t._v(" we can get the vendor and product IDs.")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$lsusb")]),t._v("\n    总线006 设备002：ID 0BDA:8153 Realtek 半导体公司\n    Bus 006 Device 001: ID 1d6b:0003 Linux Foundation "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.0")]),t._v(" root hub\n    Bus 005 Device 001: ID 1d6b:0002 Linux Foundation "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.0")]),t._v(" root hub\n    Bus 004 Device 002: ID 05e3:0616 Genesys Logic, Inc.\n    Bus 004 Device 001: ID 1d6b:0003 Linux Foundation "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.0")]),t._v(" root hub\n    Bus 003 Device 004: ID "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2341")]),t._v(":0042 Arduino SA Mega "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2560")]),t._v(" R3 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("CDC ACM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    Bus 003 Device 005: ID 26ac:0011\n    Bus 003 Device 002: ID 05e3:0610 Genesys Logic, Inc. "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("-port hub\n    Bus 003 Device 001: ID 1d6b:0002 Linux Foundation "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.0")]),t._v(" root hub\n    Bus 002 Device 001: ID 1d6b:0001 Linux Foundation "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),t._v(" root hub\n    Bus 001 Device 002: ID 0bda:8176 Realtek Semiconductor Corp. RTL8188CUS "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("802")]),t._v(".11n WLAN Adapter\n    Bus 001 Device 001: ID 1d6b:0002 Linux Foundation "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.0")]),t._v(" root hub\n")])])]),a("p",[t._v("The Arduino is "),a("code",[t._v("Bus 003 Device 004: ID 2341:0042 Arduino SA Mega 2560 R3 (CDC ACM)")])]),t._v(" "),a("p",[t._v("The Pixhawk is "),a("code",[t._v("Bus 003 Device 005: ID 26ac:0011")])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("If you do not find your device, unplug it, execute "),a("code",[t._v("lsusb")]),t._v(", plug it, execute "),a("code",[t._v("lsusb")]),t._v(" again and see the added device.")])]),t._v(" "),a("p",[t._v("Therefore, we can create a new UDEV rule in a file called "),a("code",[t._v("/etc/udev/rules.d/99-pixhawk.rules")]),t._v(" with the following content, changing the idVendor and idProduct to yours.")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("SUBSYSTEM")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tty"')]),t._v(", ATTRS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("idVendor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2341"')]),t._v(", ATTRS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("idProduct"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0042"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("SYMLINK")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ttyArduino"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("SUBSYSTEM")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tty"')]),t._v(", ATTRS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("idVendor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"26ac"')]),t._v(", ATTRS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("idProduct"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0011"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("SYMLINK")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ttyPixhawk"')]),t._v("\n")])])]),a("p",[t._v("Finally, after a "),a("strong",[t._v("reboot")]),t._v(" you can be sure to know which device is what and put "),a("code",[t._v("/dev/ttyPixhawk")]),t._v(" instead of "),a("code",[t._v("/dev/ttyUSB0")]),t._v(" in your scripts.")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("Be sure to add yourself in the "),a("code",[t._v("tty")]),t._v(" and "),a("code",[t._v("dialout")]),t._v(" groups via "),a("code",[t._v("usermod")]),t._v(" to avoid to have to execute scripts as root.")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("usermod")]),t._v(" -a -G "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tty")]),t._v(" ros-user\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("usermod")]),t._v(" -a -G dialout ros-user\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);