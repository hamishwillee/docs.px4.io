(window.webpackJsonp=window.webpackJsonp||[]).push([[1040],{2010:function(t,e,o){"use strict";o.r(e);var a=o(19),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"px4-system-console"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#px4-system-console"}},[t._v("#")]),t._v(" PX4 System Console")]),t._v(" "),o("p",[t._v("The PX4 "),o("em",[t._v("System Console")]),t._v(" provides low-level access to the system, debug output and analysis of the system boot process.")]),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),o("p",[t._v("The console should be used for debugging if the system won't boot.\nThe "),o("RouterLink",{attrs:{to:"/en/debug/mavlink_shell.html"}},[t._v("MAVLink Shell")]),t._v(" may otherwise be more suitable, as it is much easier to set up and can be used for "),o("RouterLink",{attrs:{to:"/en/debug/consoles.html#console_vs_shell"}},[t._v("many of the same tasks")]),t._v(".")],1)]),t._v(" "),o("h2",{attrs:{id:"wiring-the-console"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#wiring-the-console"}},[t._v("#")]),t._v(" Wiring the Console")]),t._v(" "),o("p",[t._v("The console is made available through a (board-specific) UART that can be connected to a computer USB port using a "),o("a",{attrs:{href:"https://www.digikey.com/en/products/detail/TTL-232R-3V3/768-1015-ND/1836393",target:"_blank",rel:"noopener noreferrer"}},[t._v("3.3V FTDI"),o("OutboundLink")],1),t._v(" cable.\nThis allows the console to be accessed using a terminal application.")]),t._v(" "),o("p",[t._v("Pixhawk controller manufacturers are expected to expose the console UART and SWD (JTAG) debug interfaces through a dedicated "),o("em",[t._v("debug port")]),t._v(" that complies with the "),o("a",{attrs:{href:"#pixhawk_debug_port"}},[t._v("Pixhawk Connector Standard")]),t._v(".\nUnfortunately some boards predate this standard or a non-compliant.")]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("Developers targeting a number of different boards may wish to use a "),o("RouterLink",{attrs:{to:"/en/debug/swd_debug.html#debug-adapters"}},[t._v("debug adapter")]),t._v(" to simplify connecting boards to FTDI cables and "),o("RouterLink",{attrs:{to:"/en/debug/swd_debug.html#debug-probes-for-px4-hardware"}},[t._v("debug probes")]),t._v(".")],1)]),t._v(" "),o("p",[t._v("The sections below outline/link to the wiring and system console information for many common boards.")]),t._v(" "),o("h3",{attrs:{id:"board-specific-wiring"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#board-specific-wiring"}},[t._v("#")]),t._v(" Board-Specific Wiring")]),t._v(" "),o("p",[t._v("The System Console UART pinouts/debug ports are typically documented in "),o("RouterLink",{attrs:{to:"/en/flight_controller/"}},[t._v("autopilot overview pages")]),t._v(" (some are linked below):")],1),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/en/flight_controller/pixhawk.html#console-port"}},[t._v("3DR Pixhawk v1 Flight Controller")]),t._v(" (also applies to\n"),o("RouterLink",{attrs:{to:"/en/flight_controller/mro_pixhawk.html#debug-ports"}},[t._v("mRo Pixhawk")]),t._v(", "),o("RouterLink",{attrs:{to:"/en/flight_controller/holybro_pix32.html#debug-port"}},[t._v("Holybro pix32")]),t._v(")")],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/en/flight_controller/pixhawk3_pro.html#debug-port"}},[t._v("Pixhawk 3")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/en/flight_controller/pixracer.html#debug-port"}},[t._v("Pixracer")])],1)]),t._v(" "),o("p",[o("a",{attrs:{id:"pixhawk_debug_port"}})]),t._v(" "),o("h3",{attrs:{id:"pixhawk-debug-port"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#pixhawk-debug-port"}},[t._v("#")]),t._v(" Pixhawk Debug Port")]),t._v(" "),o("p",[t._v("Pixhawk flight controllers usually come with a "),o("RouterLink",{attrs:{to:"/en/debug/swd_debug.html#pixhawk-connector-standard-debug-ports"}},[t._v("Pixhawk Connector Standard Debug Port")]),t._v(" which will be either the 10 pin "),o("RouterLink",{attrs:{to:"/en/debug/swd_debug.html#pixhawk-debug-full"}},[t._v("Pixhawk Debug Full")]),t._v(" or 6 pin "),o("RouterLink",{attrs:{to:"/en/debug/swd_debug.html#pixhawk-debug-mini"}},[t._v("Pixhawk Debug Mini")]),t._v(" port.")],1),t._v(" "),o("p",[t._v("These ports have pins for console TX and RX which can connect to an FTDI cable.\nThe mapping for the "),o("RouterLink",{attrs:{to:"/en/debug/swd_debug.html#pixhawk-debug-mini"}},[t._v("Pixhawk Debug Mini")]),t._v(" to FTDI is shown below.")],1),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("Pixhawk Debug Port")]),t._v(" "),o("th",[t._v("-")]),t._v(" "),o("th",[t._v("FTDI")]),t._v(" "),o("th",[t._v("-")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("1 (red)")]),t._v(" "),o("td",[t._v("TARGET PROCESSOR VOLTAGE")]),t._v(" "),o("td"),t._v(" "),o("td",[t._v("N/C (used for SWD/JTAG debugging)")])]),t._v(" "),o("tr",[o("td",[t._v("2 (blk)")]),t._v(" "),o("td",[t._v("CONSOLE TX (OUT)")]),t._v(" "),o("td",[t._v("5")]),t._v(" "),o("td",[t._v("FTDI RX (yellow)")])]),t._v(" "),o("tr",[o("td",[t._v("3 (blk)")]),t._v(" "),o("td",[t._v("CONSOLE RX (IN)")]),t._v(" "),o("td",[t._v("4")]),t._v(" "),o("td",[t._v("FTDI TX (orange)")])]),t._v(" "),o("tr",[o("td",[t._v("4 (blk)")]),t._v(" "),o("td",[t._v("SWDIO")]),t._v(" "),o("td"),t._v(" "),o("td",[t._v("N/C (used for SWD/JTAG debugging)")])]),t._v(" "),o("tr",[o("td",[t._v("5 (blk)")]),t._v(" "),o("td",[t._v("SWCLK")]),t._v(" "),o("td"),t._v(" "),o("td",[t._v("N/C (used for SWD/JTAG debugging)")])]),t._v(" "),o("tr",[o("td",[t._v("6 (blk)")]),t._v(" "),o("td",[t._v("GND")]),t._v(" "),o("td",[t._v("1")]),t._v(" "),o("td",[t._v("FTDI GND (black)")])])])]),t._v(" "),o("p",[t._v("The "),o("RouterLink",{attrs:{to:"/en/debug/swd_debug.html"}},[t._v("SWD Debug Port")]),t._v(" page and individual flight controller pages have more information about debug port pinouts.")],1),t._v(" "),o("h2",{attrs:{id:"opening-the-console"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#opening-the-console"}},[t._v("#")]),t._v(" Opening the Console")]),t._v(" "),o("p",[t._v("After the console connection is wired up, use the default serial port tool of your choice or the defaults described below:")]),t._v(" "),o("h3",{attrs:{id:"linux-mac-os-screen"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#linux-mac-os-screen"}},[t._v("#")]),t._v(" Linux / Mac OS: Screen")]),t._v(" "),o("p",[t._v("Install screen on Ubuntu (Mac OS already has it installed):")]),t._v(" "),o("div",{staticClass:"language-sh extra-class"},[o("pre",{pre:!0,attrs:{class:"language-sh"}},[o("code",[o("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("screen")]),t._v("\n")])])]),o("ul",[o("li",[t._v("Serial: Pixhawk v1 / Pixracer use 57600 baud")])]),t._v(" "),o("p",[t._v("Connect screen at BAUDRATE baud, 8 data bits, 1 stop bit to the right serial port (use "),o("code",[t._v("ls /dev/tty*")]),t._v(" and watch what changes when unplugging / replugging the USB device). Common names are "),o("code",[t._v("/dev/ttyUSB0")]),t._v(" and "),o("code",[t._v("/dev/ttyACM0")]),t._v(" for Linux and "),o("code",[t._v("/dev/tty.usbserial-ABCBD")]),t._v(" for Mac OS.")]),t._v(" "),o("div",{staticClass:"language-sh extra-class"},[o("pre",{pre:!0,attrs:{class:"language-sh"}},[o("code",[o("span",{pre:!0,attrs:{class:"token function"}},[t._v("screen")]),t._v(" /dev/ttyXXX BAUDRATE 8N1\n")])])]),o("h3",{attrs:{id:"windows-putty"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#windows-putty"}},[t._v("#")]),t._v(" Windows: PuTTY")]),t._v(" "),o("p",[t._v("Download "),o("a",{attrs:{href:"http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("PuTTY"),o("OutboundLink")],1),t._v(" and start it.")]),t._v(" "),o("p",[t._v("Then select 'serial connection' and set the port parameters to:")]),t._v(" "),o("ul",[o("li",[t._v("57600 baud")]),t._v(" "),o("li",[t._v("8 data bits")]),t._v(" "),o("li",[t._v("1 stop bit")])])])}),[],!1,null,null,null);e.default=s.exports}}]);