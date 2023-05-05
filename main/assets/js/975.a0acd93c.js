(window.webpackJsonp=window.webpackJsonp||[]).push([[975],{1859:function(t,e,a){"use strict";a.r(e);var o=a(19),r=Object(o.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"px4-system-console"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#px4-system-console"}},[t._v("#")]),t._v(" PX4 System Console")]),t._v(" "),a("p",[t._v("The PX4 "),a("em",[t._v("System Console")]),t._v(" provides low-level access to the system, debug output and analysis of the system boot process.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("The console should be used for debugging if the system won't boot.\nThe "),a("RouterLink",{attrs:{to:"/en/debug/mavlink_shell.html"}},[t._v("MAVLink Shell")]),t._v(" may otherwise be more suitable, as it is much easier to set up and can be used for "),a("RouterLink",{attrs:{to:"/en/debug/consoles.html#console_vs_shell"}},[t._v("many of the same tasks")]),t._v(".")],1)]),t._v(" "),a("h2",{attrs:{id:"wiring-the-console"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wiring-the-console"}},[t._v("#")]),t._v(" Wiring the Console")]),t._v(" "),a("p",[t._v("The console is made available through a (board-specific) UART that can be connected to a computer USB port using a "),a("a",{attrs:{href:"https://www.digikey.com/en/products/detail/TTL-232R-3V3/768-1015-ND/1836393",target:"_blank",rel:"noopener noreferrer"}},[t._v("3.3V FTDI"),a("OutboundLink")],1),t._v(" cable.\nThis allows the console to be accessed using a terminal application.")]),t._v(" "),a("p",[t._v("Pixhawk controller manufacturers are expected to expose the console UART and SWD (JTAG) debug interfaces through a dedicated "),a("em",[t._v("debug port")]),t._v(" that complies with the "),a("a",{attrs:{href:"#pixhawk_debug_port"}},[t._v("Pixhawk Connector Standard")]),t._v(".\nUnfortunately some boards predate this standard or a non-compliant.")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("Developers targeting a number of different boards may wish to use a "),a("em",[t._v("debug adapter")]),t._v(" to simplify connecting multiple boards.\nFor example, the "),a("a",{attrs:{href:"https://kb.zubax.com/display/MAINKB/Dronecode+Probe+documentation",target:"_blank",rel:"noopener noreferrer"}},[t._v("Dronecode probe"),a("OutboundLink")],1),t._v(" comes with connectors for the "),a("a",{attrs:{href:"#pixhawk_debug_port"}},[t._v("Pixhawk Debug Port")]),t._v(" and several other boards.")])]),t._v(" "),a("p",[t._v("The sections below outline/link to the wiring and system console information for many common boards.")]),t._v(" "),a("h3",{attrs:{id:"board-specific-wiring"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#board-specific-wiring"}},[t._v("#")]),t._v(" Board-Specific Wiring")]),t._v(" "),a("p",[t._v("The System Console UART pinouts/debug ports are typically documented in "),a("RouterLink",{attrs:{to:"/en/flight_controller/"}},[t._v("autopilot overview pages")]),t._v(" (some are linked below):")],1),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/en/flight_controller/pixhawk.html#console-port"}},[t._v("3DR Pixhawk v1 Flight Controller")]),t._v(" (also applies to\n"),a("RouterLink",{attrs:{to:"/en/flight_controller/mro_pixhawk.html#debug-ports"}},[t._v("mRo Pixhawk")]),t._v(", "),a("RouterLink",{attrs:{to:"/en/flight_controller/holybro_pix32.html#debug-port"}},[t._v("Holybro pix32")]),t._v(")")],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/en/flight_controller/pixhawk3_pro.html#debug-port"}},[t._v("Pixhawk 3")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/en/flight_controller/pixracer.html#debug-port"}},[t._v("Pixracer")])],1)]),t._v(" "),a("p",[a("a",{attrs:{id:"pixhawk_debug_port"}})]),t._v(" "),a("h3",{attrs:{id:"pixhawk-debug-port"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pixhawk-debug-port"}},[t._v("#")]),t._v(" Pixhawk Debug Port")]),t._v(" "),a("p",[t._v("Flight controllers that adhere to the Pixhawk Connector standard use the "),a("a",{attrs:{href:"https://github.com/pixhawk/Pixhawk-Standards/blob/master/DS-009%20Pixhawk%20Connector%20Standard.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk Standard Debug Port"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("The port/FTDI mapping is shown below.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Pixhawk Debug Port")]),t._v(" "),a("th",[t._v("-")]),t._v(" "),a("th",[t._v("FTDI")]),t._v(" "),a("th",[t._v("-")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("1 (red)")]),t._v(" "),a("td",[t._v("TARGET PROCESSOR VOLTAGE")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("N/C (used for SWD/JTAG debugging)")])]),t._v(" "),a("tr",[a("td",[t._v("2 (blk)")]),t._v(" "),a("td",[t._v("CONSOLE TX (OUT)")]),t._v(" "),a("td",[t._v("5")]),t._v(" "),a("td",[t._v("FTDI RX (yellow)")])]),t._v(" "),a("tr",[a("td",[t._v("3 (blk)")]),t._v(" "),a("td",[t._v("CONSOLE RX (IN)")]),t._v(" "),a("td",[t._v("4")]),t._v(" "),a("td",[t._v("FTDI TX (orange)")])]),t._v(" "),a("tr",[a("td",[t._v("4 (blk)")]),t._v(" "),a("td",[t._v("SWDIO")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("N/C (used for SWD/JTAG debugging)")])]),t._v(" "),a("tr",[a("td",[t._v("5 (blk)")]),t._v(" "),a("td",[t._v("SWCLK")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("N/C (used for SWD/JTAG debugging)")])]),t._v(" "),a("tr",[a("td",[t._v("6 (blk)")]),t._v(" "),a("td",[t._v("GND")]),t._v(" "),a("td",[t._v("1")]),t._v(" "),a("td",[t._v("FTDI GND (black)")])])])]),t._v(" "),a("h2",{attrs:{id:"opening-the-console"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#opening-the-console"}},[t._v("#")]),t._v(" Opening the Console")]),t._v(" "),a("p",[t._v("After the console connection is wired up, use the default serial port tool of your choice or the defaults described below:")]),t._v(" "),a("h3",{attrs:{id:"linux-mac-os-screen"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux-mac-os-screen"}},[t._v("#")]),t._v(" Linux / Mac OS: Screen")]),t._v(" "),a("p",[t._v("Install screen on Ubuntu (Mac OS already has it installed):")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("screen")]),t._v("\n")])])]),a("ul",[a("li",[t._v("Serial: Pixhawk v1 / Pixracer use 57600 baud")])]),t._v(" "),a("p",[t._v("Connect screen at BAUDRATE baud, 8 data bits, 1 stop bit to the right serial port (use "),a("code",[t._v("ls /dev/tty*")]),t._v(" and watch what changes when unplugging / replugging the USB device). Common names are "),a("code",[t._v("/dev/ttyUSB0")]),t._v(" and "),a("code",[t._v("/dev/ttyACM0")]),t._v(" for Linux and "),a("code",[t._v("/dev/tty.usbserial-ABCBD")]),t._v(" for Mac OS.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("screen")]),t._v(" /dev/ttyXXX BAUDRATE 8N1\n")])])]),a("h3",{attrs:{id:"windows-putty"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows-putty"}},[t._v("#")]),t._v(" Windows: PuTTY")]),t._v(" "),a("p",[t._v("Download "),a("a",{attrs:{href:"http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("PuTTY"),a("OutboundLink")],1),t._v(" and start it.")]),t._v(" "),a("p",[t._v("Then select 'serial connection' and set the port parameters to:")]),t._v(" "),a("ul",[a("li",[t._v("57600 baud")]),t._v(" "),a("li",[t._v("8 data bits")]),t._v(" "),a("li",[t._v("1 stop bit")])])])}),[],!1,null,null,null);e.default=r.exports}}]);