(window.webpackJsonp=window.webpackJsonp||[]).push([[896],{1861:function(e,t,a){"use strict";a.r(t);var r=a(18),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"companion-computer-for-pixhawk-series"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#companion-computer-for-pixhawk-series"}},[e._v("#")]),e._v(" Companion Computer for Pixhawk Series")]),e._v(" "),a("p",[e._v("Interfacing a companion computer (Raspberry Pi, Odroid, Tegra K1) to Pixhawk-family boards always works the same way: They are interfaced using a serial port to "),a("code",[e._v("TELEM 2")]),e._v(", the port intended for this purpose. The message format on this link is "),a("a",{attrs:{href:"https://mavlink.io/en/",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAVLink"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"pixhawk-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pixhawk-setup"}},[e._v("#")]),e._v(" Pixhawk Setup")]),e._v(" "),a("p",[e._v("Enable MAVLink on any "),a("a",{attrs:{href:"https://docs.px4.io/en/peripherals/serial_configuration.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("configurable serial port"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Tip")]),e._v(" Typically the "),a("code",[e._v("TELEM 2")]),e._v(" port is used for a companion computer.")])]),e._v(" "),a("p",[e._v("To set up the default companion computer message stream on "),a("code",[e._v("TELEM 2")]),e._v(", set the following parameters:")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/ko/advanced/parameter_reference.html#MAV_1_CONFIG"}},[e._v("MAV_1_CONFIG")]),e._v(" = "),a("code",[e._v("TELEM 2")]),e._v(" ("),a("code",[e._v("MAV_1_CONFIG")]),e._v(" is often used to map the "),a("code",[e._v("TELEM 2")]),e._v(" port)")],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/advanced/parameter_reference.html#MAV_1_MODE"}},[e._v("MAV_1_MODE")]),e._v(" = "),a("code",[e._v("Onboard")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/advanced/parameter_reference.html#SER_TEL2_BAUD"}},[e._v("SER_TEL2_BAUD")]),e._v(" = "),a("code",[e._v("921600")]),e._v(" (921600 or higher recommended for applications like log streaming or FastRTPS)")],1)]),e._v(" "),a("p",[e._v("For more information see "),a("a",{attrs:{href:"https://docs.px4.io/en/peripherals/mavlink_peripherals.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAVLink Peripherals (GCS/OSD/Companion)"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"companion-computer-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#companion-computer-setup"}},[e._v("#")]),e._v(" Companion Computer Setup")]),e._v(" "),a("p",[e._v("In order to receive MAVLink, the companion computer needs to run some software talking to the serial port. The most common options are:")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/ko/ros/mavros_installation.html"}},[e._v("MAVROS")]),e._v(" to communicate to ROS nodes")],1),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/mavlink/c_uart_interface_example",target:"_blank",rel:"noopener noreferrer"}},[e._v("C/C++ example code"),a("OutboundLink")],1),e._v(" to connect custom code")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/intel/mavlink-router",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAVLink Router"),a("OutboundLink")],1),e._v(" (recommended) or "),a("a",{attrs:{href:"http://mavproxy.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAVProxy"),a("OutboundLink")],1),e._v(" to route MAVLink between serial and UDP")])]),e._v(" "),a("h2",{attrs:{id:"hardware-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hardware-setup"}},[e._v("#")]),e._v(" Hardware setup")]),e._v(" "),a("p",[e._v("Wire the serial port according to the instructions below. All Pixhawk serial ports operate at 3.3V and are 5V level compatible.")]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Warning")]),e._v(" Many modern companion computers only support 1.8V levels on their hardware UART and can be damaged by 3.3V levels. Use a level shifter. In most cases the accessible hardware serial ports already have some function (modem or console) associated with them and need to be "),a("em",[e._v("reconfigured in Linux")]),e._v(" before they can be used.")])]),e._v(" "),a("p",[e._v("The safe bet is to use an FTDI Chip USB-to-serial adapter board and the wiring below. This always works and is easy to set up.")]),e._v(" "),a("p",[e._v("|  | TELEM2 |           | FTDI |                        |\n|  | ------ | --------- | ---- | ---------------------- |\n|  | 1      | +5V (red) |      | DO NOT CONNECT!        |\n|  | 2      | Tx  (out) | 5    | FTDI RX (yellow) (in)  |\n|  | 3      | Rx  (in)  | 4    | FTDI TX (orange) (out) |\n|  | 4      | CTS (in)  | 6    | FTDI RTS (green) (out) |\n|  | 5      | RTS (out) | 2    | FTDI CTS (brown) (in)  |\n|  | 6      | GND       | 1    | FTDI GND (black)       |")]),e._v(" "),a("h2",{attrs:{id:"software-setup-on-linux"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#software-setup-on-linux"}},[e._v("#")]),e._v(" Software setup on Linux")]),e._v(" "),a("p",[e._v("On Linux the default name of a USB FTDI would be like "),a("code",[e._v("\\dev\\ttyUSB0")]),e._v(". If you have a second FTDI linked on the USB or an Arduino, it will registered as "),a("code",[e._v("\\dev\\ttyUSB1")]),e._v(". To avoid the confusion between the first plugged and the second plugged, we recommend you to create a symlink from "),a("code",[e._v("ttyUSBx")]),e._v(" to a friendly name, depending on the Vendor and Product ID of the USB device.")]),e._v(" "),a("p",[e._v("Using "),a("code",[e._v("lsusb")]),e._v(" we can get the vendor and product IDs.")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("$ lsusb\n\nBus 006 Device 002: ID 0bda:8153 Realtek Semiconductor Corp. Bus 006 Device 001: ID 1d6b:0003 Linux Foundation "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("3.0")]),e._v(" root hub\nBus 005 Device 001: ID 1d6b:0002 Linux Foundation "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2.0")]),e._v(" root hub\nBus 004 Device 002: ID 05e3:0616 Genesys Logic, Inc. Bus 004 Device 001: ID 1d6b:0003 Linux Foundation "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("3.0")]),e._v(" root hub\nBus 003 Device 004: ID "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2341")]),e._v(":0042 Arduino SA Mega "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2560")]),e._v(" R3 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("CDC ACM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\nBus 003 Device 005: ID 26ac:0011\nBus 003 Device 002: ID 05e3:0610 Genesys Logic, Inc. "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("4")]),e._v("-port hub\nBus 003 Device 001: ID 1d6b:0002 Linux Foundation "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2.0")]),e._v(" root hub\nBus 002 Device 001: ID 1d6b:0001 Linux Foundation "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.1")]),e._v(" root hub\nBus 001 Device 002: ID 0bda:8176 Realtek Semiconductor Corp. RTL8188CUS "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("802")]),e._v(".11n WLAN Adapter\nBus 001 Device 001: ID 1d6b:0002 Linux Foundation "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2.0")]),e._v(" root hub\n")])])]),a("p",[e._v("The Arduino is "),a("code",[e._v("Bus 003 Device 004: ID 2341:0042 Arduino SA Mega 2560 R3 (CDC ACM)")])]),e._v(" "),a("p",[e._v("The Pixhawk is "),a("code",[e._v("Bus 003 Device 005: ID 26ac:0011")])]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Note")]),e._v(" If you do not find your device, unplug it, execute "),a("code",[e._v("lsusb")]),e._v(", plug it, execute "),a("code",[e._v("lsusb")]),e._v(" again and see the added device.")])]),e._v(" "),a("p",[e._v("Therefore, we can create a new UDEV rule in a file called "),a("code",[e._v("/etc/udev/rules.d/99-pixhawk.rules")]),e._v(" with the following content, changing the idVendor and idProduct to yours.")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("SUBSYSTEM")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"tty"')]),e._v(", ATTRS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("idVendor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"2341"')]),e._v(", ATTRS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("idProduct"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"0042"')]),e._v(", "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("SYMLINK")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"ttyArduino"')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("SUBSYSTEM")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"tty"')]),e._v(", ATTRS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("idVendor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"26ac"')]),e._v(", ATTRS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("idProduct"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"0011"')]),e._v(", "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("SYMLINK")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"ttyPixhawk"')]),e._v("\n")])])]),a("p",[e._v("Finally, after a "),a("strong",[e._v("reboot")]),e._v(" you can be sure to know which device is what and put "),a("code",[e._v("/dev/ttyPixhawk")]),e._v(" instead of "),a("code",[e._v("/dev/ttyUSB0")]),e._v(" in your scripts.")]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Note")]),e._v(" Be sure to add yourself in the "),a("code",[e._v("tty")]),e._v(" and "),a("code",[e._v("dialout")]),e._v(" groups via "),a("code",[e._v("usermod")]),e._v(" to avoid to have to execute scripts as root.")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("usermod")]),e._v(" -a -G "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("tty")]),e._v(" ros-user\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("usermod")]),e._v(" -a -G dialout ros-user\n")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);