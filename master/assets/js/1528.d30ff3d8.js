(window.webpackJsonp=window.webpackJsonp||[]).push([[1528],{2795:function(t,e,a){"use strict";a.r(e);var o=a(19),r=Object(o.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"px4-系统控制台"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#px4-系统控制台"}},[t._v("#")]),t._v(" PX4 系统控制台")]),t._v(" "),a("p",[t._v("The system console allows low-level access to the system, debug output and analysis of the system boot process. The most convenient way to connect it is by using a "),a("a",{attrs:{href:"https://shop.titaneliteinc.com/index.php?route=product/product&product_id=1294",target:"_blank",rel:"noopener noreferrer"}},[t._v("Dronecode probe"),a("OutboundLink")],1),t._v(", but a plain FTDI cable can be used as well.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("The console should be used for debugging if the system won't boot. The "),a("RouterLink",{attrs:{to:"/zh/debug/mavlink_shell.html"}},[t._v("MAVLink Shell")]),t._v(" may otherwise be more suitable, as it is much easier to set up and can be used for "),a("RouterLink",{attrs:{to:"/zh/debug/consoles.html#console_vs_shell"}},[t._v("many of the same tasks")]),t._v(".")],1)]),t._v(" "),a("h2",{attrs:{id:"system-console-vs-shells"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#system-console-vs-shells"}},[t._v("#")]),t._v(" System Console vs. Shells")]),t._v(" "),a("p",[t._v("The console is made available through a (board-specific) UART that can be connected to a computer USB port using a "),a("a",{attrs:{href:"https://www.digikey.com/product-detail/en/TTL-232R-3V3/768-1015-ND/1836393",target:"_blank",rel:"noopener noreferrer"}},[t._v("3.3V FTDI"),a("OutboundLink")],1),t._v(" cable. This allows the console to be accessed using a terminal application.")]),t._v(" "),a("p",[t._v("Pixhawk controller manufacturers are expected to expose the console UART and SWD (JTAG) debug interfaces through a dedicated "),a("em",[t._v("debug port")]),t._v(" that complies with the "),a("a",{attrs:{href:"#pixhawk_debug_port"}},[t._v("Pixhawk Connector Standard")]),t._v(". Unfortunately some boards predate this standard or a non-compliant.")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("Developers targeting a number of different boards may wish to use a "),a("em",[t._v("debug adapter")]),t._v(" to simplify connecting multiple boards. For example, the "),a("a",{attrs:{href:"https://kb.zubax.com/display/MAINKB/Dronecode+Probe+documentation",target:"_blank",rel:"noopener noreferrer"}},[t._v("Dronecode probe"),a("OutboundLink")],1),t._v(" comes with connectors for the "),a("a",{attrs:{href:"#pixhawk_debug_port"}},[t._v("Pixhawk Debug Port")]),t._v(" and several other boards.")])]),t._v(" "),a("p",[t._v("Connect the 6-pos JST SH 1:1 cable to the Dronecode probe or connect the individual pins of the cable to a FTDI cable like this:")]),t._v(" "),a("h3",{attrs:{id:"connecting-via-dronecode-probe"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#connecting-via-dronecode-probe"}},[t._v("#")]),t._v(" Connecting via Dronecode Probe")]),t._v(" "),a("p",[t._v("The system console can be accessed through the Dronecode probe or an FTDI cable. Both options are explained in the section below.")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk.html#console-port"}},[t._v("3DR Pixhawk v1 Flight Controller")]),t._v(" (also applies to "),a("RouterLink",{attrs:{to:"/zh/flight_controller/mro_pixhawk.html#debug-ports"}},[t._v("mRo Pixhawk")]),t._v(", "),a("RouterLink",{attrs:{to:"/zh/flight_controller/holybro_pix32.html#debug-port"}},[t._v("Holybro pix32")]),t._v(")")],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk3_pro.html#debug-port"}},[t._v("Pixhawk 1/2")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/flight_controller/pixracer.html#debug-port"}},[t._v("Pixracer")])],1)]),t._v(" "),a("p",[a("a",{attrs:{id:"pixhawk_debug_port"}})]),t._v(" "),a("h3",{attrs:{id:"connecting-via-ftdi-3-3v-cable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#connecting-via-ftdi-3-3v-cable"}},[t._v("#")]),t._v(" Connecting via FTDI 3.3V Cable")]),t._v(" "),a("p",[t._v("连接控制台连接后，请使用您选择的默认串口工具或下面描述的默认工具：")]),t._v(" "),a("p",[t._v("在 Ubuntu 上安装 screen （mac os 已经安装了它）：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Pixracer / Pixhawk v3")]),t._v(" "),a("th",[t._v("-")]),t._v(" "),a("th",[t._v("FTDI")]),t._v(" "),a("th",[t._v("-")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("2")]),t._v(" "),a("td",[t._v("+ 5v (红色)")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("N/C")])]),t._v(" "),a("tr",[a("td",[t._v("2")]),t._v(" "),a("td",[t._v("UART7 Tx")]),t._v(" "),a("td",[t._v("5")]),t._v(" "),a("td",[t._v("FTDI RX （黄色）")])]),t._v(" "),a("tr",[a("td",[t._v("3")]),t._v(" "),a("td",[t._v("UART7 Rx")]),t._v(" "),a("td",[t._v("4")]),t._v(" "),a("td",[t._v("FTDI TX （橙色）")])]),t._v(" "),a("tr",[a("td",[t._v("4（黑）")]),t._v(" "),a("td",[t._v("SWDIO")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("N/C")])]),t._v(" "),a("tr",[a("td",[t._v("6")]),t._v(" "),a("td",[t._v("SWCLK")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("N/C")])]),t._v(" "),a("tr",[a("td",[t._v("6")]),t._v(" "),a("td",[t._v("GND")]),t._v(" "),a("td",[t._v("1")]),t._v(" "),a("td",[t._v("FTDI GND (黑色)")])])])]),t._v(" "),a("h2",{attrs:{id:"打开控制台"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#打开控制台"}},[t._v("#")]),t._v(" 打开控制台")]),t._v(" "),a("p",[t._v("After the console connection is wired up, use the default serial port tool of your choice or the defaults described below:")]),t._v(" "),a("h3",{attrs:{id:"linux-mac-os-screen"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux-mac-os-screen"}},[t._v("#")]),t._v(" Linux / Mac OS: Screen")]),t._v(" "),a("p",[t._v("下载 "),a("a",{attrs:{href:"http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("PuTTY"),a("OutboundLink")],1),t._v(" 并启动它。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("screen")]),t._v("\n")])])]),a("ul",[a("li",[t._v("串口：pixhawk v1/pixracer 使用 57600 波特率")])]),t._v(" "),a("p",[t._v("Connect screen at BAUDRATE baud, 8 data bits, 1 stop bit to the right serial port (use "),a("code",[t._v("ls /dev/tty*")]),t._v(" and watch what changes when unplugging / replugging the USB device). Common names are "),a("code",[t._v("/dev/ttyUSB0")]),t._v(" and "),a("code",[t._v("/dev/ttyACM0")]),t._v(" for Linux and "),a("code",[t._v("/dev/tty.usbserial-ABCBD")]),t._v(" for Mac OS.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("screen")]),t._v(" /dev/ttyXXX BAUDRATE 8N1\n")])])]),a("h3",{attrs:{id:"windows-putty"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows-putty"}},[t._v("#")]),t._v(" Windows: PuTTY")]),t._v(" "),a("p",[t._v("Download "),a("a",{attrs:{href:"http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("PuTTY"),a("OutboundLink")],1),t._v(" and start it.")]),t._v(" "),a("p",[t._v("Then select 'serial connection' and set the port parameters to:")]),t._v(" "),a("ul",[a("li",[t._v("57600 波特率")]),t._v(" "),a("li",[t._v("8 数据位")]),t._v(" "),a("li",[t._v("1 个停止位")])])])}),[],!1,null,null,null);e.default=r.exports}}]);