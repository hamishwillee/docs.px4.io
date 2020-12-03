(window.webpackJsonp=window.webpackJsonp||[]).push([[243],{1931:function(t,e,o){"use strict";o.r(e);var r=o(18),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"swd-jtag-hardware-debugging-interface"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#swd-jtag-hardware-debugging-interface"}},[t._v("#")]),t._v(" SWD (JTAG) Hardware Debugging Interface")]),t._v(" "),r("p",[t._v("PX4 usually runs on autopilot controller hardware that provides an ARM "),r("em",[t._v("Serial Wire Debug (SWD)")]),t._v(" interface. SWD is a low pin-count physical interface for JTAG debugging on ARM-processors. It can be used with an SWD-compatible debug probe (e.g. "),r("a",{attrs:{href:"#segger_jlink_edu_mini"}},[t._v("Segger J-Link EDU Mini")]),t._v(", "),r("a",{attrs:{href:"#dronecode_probe"}},[t._v("Dronecode Probe")]),t._v(", etc.) to set breakpoints in PX4 and step through the code running on a real device.")]),t._v(" "),r("p",[t._v("The SWD interface can also be used to add a new bootloader and/or firmware on a completely empty board (one that does not have the USB bootloader installed).")]),t._v(" "),r("p",[t._v("This topic explains how to connect the SWD interface on different boards (actually performing debugging is then covered in the associated "),r("a",{attrs:{href:"#debugging_topics"}},[t._v("debugging topics")]),t._v(").")]),t._v(" "),r("p",[r("a",{attrs:{id:"swd_interface"}})]),t._v(" "),r("h2",{attrs:{id:"swd-interface-definition"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#swd-interface-definition"}},[t._v("#")]),t._v(" SWD Interface Definition")]),t._v(" "),r("p",[t._v("The SWD interface consists of the following pins.")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Pin")]),t._v(" "),r("th",[t._v("Signal Type")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("code",[t._v("Vref")])]),t._v(" "),r("td",[t._v("Output")]),t._v(" "),r("td",[t._v("Target reference voltage."),r("br"),t._v("Some JTAG adapters require the "),r("code",[t._v("Vref")]),t._v(" voltage to set the voltage on the SWD lines. For example, "),r("a",{attrs:{href:"#segger_jlink_edu_mini"}},[t._v("SEGGER J-Link Debug Probes")]),t._v(" require "),r("code",[t._v("Vref")]),t._v(".")])]),t._v(" "),r("tr",[r("td",[r("code",[t._v("SWDIO")])]),t._v(" "),r("td",[t._v("I/O")]),t._v(" "),r("td",[t._v("Single bi-directional data pin.")])]),t._v(" "),r("tr",[r("td",[r("code",[t._v("SWCLK")])]),t._v(" "),r("td",[t._v("Output")]),t._v(" "),r("td",[t._v("Clock signal.")])]),t._v(" "),r("tr",[r("td",[r("code",[t._v("GND")])]),t._v(" "),r("td",[t._v("-")]),t._v(" "),r("td",[t._v("Ground pin.")])])])]),t._v(" "),r("p",[t._v('While not "part" of SWD, an autopilot may also have an '),r("em",[t._v("Serial Wire Output (SWO)")]),t._v(" trace output pin. If present this should also be connected.")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Pin")]),t._v(" "),r("th",[t._v("Signal Type")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("code",[t._v("SWO")])]),t._v(" "),r("td",[t._v("Output")]),t._v(" "),r("td",[t._v("Serial  Wire Output trace output pin. This may be used in combination with "),r("em",[t._v("SWD")]),t._v(" to emit real-time trace data.")])])])]),t._v(" "),r("h2",{attrs:{id:"connecting-swd-debuggers-to-px4-hardware"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#connecting-swd-debuggers-to-px4-hardware"}},[t._v("#")]),t._v(" Connecting SWD Debuggers to PX4 Hardware")]),t._v(" "),r("p",[t._v("Connect "),r("code",[t._v("SWDIO")]),t._v(", "),r("code",[t._v("SWCLK")]),t._v(" and "),r("code",[t._v("GND")]),t._v(" pins on the debug probe to the corresponding pins on the autopilot.")]),t._v(" "),r("p",[t._v("In addition:")]),t._v(" "),r("ul",[r("li",[t._v("Connect the "),r("code",[t._v("VRef")]),t._v(" pin, if required by the debug adapter that is being used.")]),t._v(" "),r("li",[t._v("Connect the "),r("code",[t._v("SWO")]),t._v(" pin, if present.")])]),t._v(" "),r("p",[t._v("Some SWD "),r("a",{attrs:{href:"#debug_probes"}},[t._v("debug probes")]),t._v(" come with adapters/cables for connecting to common Pixhawk "),r("a",{attrs:{href:"#debug_ports"}},[t._v("debug ports")]),t._v(". You can also create custom cables for connecting to different boards or probes.")]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("Some manufacturers provide cables to make it easy to connect the SWD interface and "),r("RouterLink",{attrs:{to:"/ko/debug/system_console.html"}},[t._v("System Console")]),t._v(". For example the "),r("RouterLink",{attrs:{to:"/ko/flight_controller/cuav_v5_nano.html#debug_port"}},[t._v("CUAV V5nano")]),t._v(" and "),r("RouterLink",{attrs:{to:"/ko/flight_controller/cuav_v5_plus.html#debug-port"}},[t._v("CUAV V5+")]),t._v(" include this debug cable:")],1),t._v(" "),r("p",[r("img",{attrs:{src:o(655),alt:"6-pin JST SH Cable"}})])]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[t._v("Where possible, we highly recommend that you create or obtain an adapter board rather than custom cables for connecting to SWD/JTAG debuggers and computers. This reduces the risk or poor wiring contributing to debugging problems, and has the benefit that adapters usually provide a common interface for connecting to multiple popular flight controller boards.")])]),t._v(" "),r("p",[r("a",{attrs:{id:"debug_ports"}})]),t._v(" "),r("h2",{attrs:{id:"autopilot-debug-ports"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#autopilot-debug-ports"}},[t._v("#")]),t._v(" Autopilot Debug Ports")]),t._v(" "),r("p",[t._v("Flight controllers commonly provide a debug port that exposes both the "),r("a",{attrs:{href:"#swd_interface"}},[t._v("SWD Interface")]),t._v(" and "),r("RouterLink",{attrs:{to:"/ko/debug/system_console.html"}},[t._v("System Console")]),t._v(".")],1),t._v(" "),r("p",[t._v("The "),r("a",{attrs:{href:"#pixhawk_standard_debug_ports"}},[t._v("Pixhawk Connector Standards")]),t._v(" attempts to standardise this port. However since many boards use different pinouts or connectors, we recommend you check the documentation for your autopilot to confirm port location and pinout.")]),t._v(" "),r("p",[t._v("The debug port location and pinouts for a small subset of autopilots are linked below:")]),t._v(" "),r("p",[r("span",{attrs:{id:"port_information"}})]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Autopilot")]),t._v(" "),r("th",[t._v("Connector")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk.html#swd-port"}},[t._v("3DR Pixhawk")])],1),t._v(" "),r("td",[t._v("ARM 10-pin JTAG Connector (also used for FMUv2 boards including: "),r("em",[t._v("mRo Pixhawk")]),t._v(", "),r("em",[t._v("HobbyKing HKPilot32")]),t._v(").")])]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/ko/flight_controller/cuav_v5_nano.html#debug_port"}},[t._v("CUAV V5nano")])],1),t._v(" "),r("td",[t._v("6-pin JST GH"),r("br"),t._v("Digikey: "),r("a",{attrs:{href:"https://www.digikey.com/products/en?keywords=455-1582-1-ND",target:"_blank",rel:"noopener noreferrer"}},[t._v("BM06B-GHS-TBT(LF)(SN)(N)"),r("OutboundLink")],1),t._v(" (vertical mount), "),r("a",{attrs:{href:"https://www.digikey.com/products/en?keywords=455-1568-1-ND",target:"_blank",rel:"noopener noreferrer"}},[t._v("SM06B-GHS-TBT(LF)(SN)(N)"),r("OutboundLink")],1),t._v(" (side mount)")])]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/ko/flight_controller/cuav_v5_plus.html#debug-port"}},[t._v("CUAV V5+")])],1),t._v(" "),r("td",[t._v("6-pin JST GH"),r("br"),t._v("Digikey: "),r("a",{attrs:{href:"https://www.digikey.com/products/en?keywords=455-1582-1-ND",target:"_blank",rel:"noopener noreferrer"}},[t._v("BM06B-GHS-TBT(LF)(SN)(N)"),r("OutboundLink")],1),t._v(" (vertical mount), "),r("a",{attrs:{href:"https://www.digikey.com/products/en?keywords=455-1568-1-ND",target:"_blank",rel:"noopener noreferrer"}},[t._v("SM06B-GHS-TBT(LF)(SN)(N)"),r("OutboundLink")],1),t._v(" (side mount)")])]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk3_pro.html#debug-port"}},[t._v("Drotek Pixhawk 3 Pro")])],1),t._v(" "),r("td",[r("a",{attrs:{href:"#pixhawk_debug_port_6_pin_sh"}},[t._v("Pixhawk 6-pin SH Debug")])])]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk4.html#debug_port"}},[t._v("Holybro Pixhawk 4")])],1),t._v(" "),r("td",[r("a",{attrs:{href:"#pixhawk_debug_port_6_pin_sh"}},[t._v("Pixhawk 6-pin SH Debug")])])]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk4_mini.html#debug-port"}},[t._v("Holybro Pixhawk 4 Mini")])],1),t._v(" "),r("td",[r("a",{attrs:{href:"#pixhawk_debug_port_6_pin_sh"}},[t._v("Pixhawk 6-pin SH Debug")])])]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/ko/flight_controller/kakutef7.html#debug-port"}},[t._v("Holybro Kakute F7")])],1),t._v(" "),r("td",[t._v("Solder pads")])]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/ko/flight_controller/durandal.html#debug-port"}},[t._v("Holybro Durandal")])],1),t._v(" "),r("td",[r("a",{attrs:{href:"#pixhawk_debug_port_6_pin_sh"}},[t._v("Pixhawk 6-pin SH Debug")])])])])]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[t._v("Check the "),r("RouterLink",{attrs:{to:"/ko/flight_controller/"}},[t._v("autopilot topics")]),t._v(" if your flight controller is not listed.")],1)]),t._v(" "),r("p",[r("a",{attrs:{id:"pixhawk_standard_debug_ports"}})]),t._v(" "),r("h2",{attrs:{id:"pixhawk-standard-debug-ports"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pixhawk-standard-debug-ports"}},[t._v("#")]),t._v(" Pixhawk Standard Debug Ports")]),t._v(" "),r("p",[t._v("The Pixhawk project has defines a standard pinout and connector type for different Pixhawk FMU releases:")]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[t._v("Check your "),r("a",{attrs:{href:"#port_information"}},[t._v("specific board")]),t._v(" to confirm the port used.")])]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("FMU Version")]),t._v(" "),r("th",[t._v("Pixhawk Ver.")]),t._v(" "),r("th",[t._v("Debug Interface")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("FMUv2")]),t._v(" "),r("td",[r("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk.html#swd-port"}},[t._v("Pixhawk / Pixhawk 1")])],1),t._v(" "),r("td",[t._v("10 pin ARM Debug")])]),t._v(" "),r("tr",[r("td",[t._v("FMUv3")]),t._v(" "),r("td",[t._v("Pixhawk 2")]),t._v(" "),r("td",[t._v("6 pin SUR Debug")])]),t._v(" "),r("tr",[r("td",[t._v("FMUv4")]),t._v(" "),r("td",[t._v("Pixhawk 3")]),t._v(" "),r("td",[r("a",{attrs:{href:"#pixhawk_debug_port_6_pin_sh"}},[t._v("6 pin SH Debug")])])]),t._v(" "),r("tr",[r("td",[t._v("FMUv5")]),t._v(" "),r("td",[t._v("Pixhawk 4 FMUv5")]),t._v(" "),r("td",[r("a",{attrs:{href:"#pixhawk_debug_port_6_pin_sh"}},[t._v("6 pin SH Debug")])])]),t._v(" "),r("tr",[r("td",[t._v("FMUv5X")]),t._v(" "),r("td",[t._v("Pixhawk 5X")]),t._v(" "),r("td",[r("a",{attrs:{href:"#pixhawk_debug_port_10_pin_sh"}},[t._v("10 pin SH Debug")])])]),t._v(" "),r("tr",[r("td",[t._v("FMUv6")]),t._v(" "),r("td",[t._v("Pixhawk 6")]),t._v(" "),r("td",[r("a",{attrs:{href:"#pixhawk_debug_port_10_pin_sh"}},[t._v("10 pin SH Debug")])])]),t._v(" "),r("tr",[r("td",[t._v("FMUv6X")]),t._v(" "),r("td",[t._v("Pixhawk 6")]),t._v(" "),r("td",[r("a",{attrs:{href:"#pixhawk_debug_port_10_pin_sh"}},[t._v("10 pin SH Debug")])])])])]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("There FMU and Pixhawk versions are (only) consistent after FMUv5X.")])]),t._v(" "),r("p",[r("a",{attrs:{id:"pixhawk_debug_port_6_pin_sh"}})]),t._v(" "),r("h3",{attrs:{id:"pixhawk-debug-mini-6-pin-sh-debug-port"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pixhawk-debug-mini-6-pin-sh-debug-port"}},[t._v("#")]),t._v(" Pixhawk Debug Mini (6-Pin SH Debug Port)")]),t._v(" "),r("p",[t._v("The "),r("a",{attrs:{href:"https://github.com/pixhawk/Pixhawk-Standards/blob/master/DS-009%20Pixhawk%20Connector%20Standard.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk Connector Standard"),r("OutboundLink")],1),t._v(" defines a "),r("em",[t._v("6-Pin SH Debug Port")]),t._v(" that provides access to both SWD pins and the "),r("RouterLink",{attrs:{to:"/ko/debug/system_console.html"}},[t._v("System Console")]),t._v(".")],1),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("This debug port is used in FMUv4 and FMUv5.")])]),t._v(" "),r("p",[t._v("The pinout is as shown below (SWD pins highlighted):")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Debug Port")]),t._v(" "),r("th",[t._v("Pin")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("1")]),t._v(" "),r("td",[r("code",[t._v("Vtref")])])]),t._v(" "),r("tr",[r("td",[t._v("2")]),t._v(" "),r("td",[t._v("Console TX")])]),t._v(" "),r("tr",[r("td",[t._v("3")]),t._v(" "),r("td",[t._v("Console RX")])]),t._v(" "),r("tr",[r("td",[t._v("4")]),t._v(" "),r("td",[r("code",[t._v("SWDIO")])])]),t._v(" "),r("tr",[r("td",[t._v("5")]),t._v(" "),r("td",[r("code",[t._v("SWDCLK")])])]),t._v(" "),r("tr",[r("td",[t._v("6")]),t._v(" "),r("td",[r("code",[t._v("GND")])])])])]),t._v(" "),r("p",[t._v("The debug port definition includes the following solder pads (on board next to connector):")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Debug Port")]),t._v(" "),r("th",[t._v("Pin")]),t._v(" "),r("th",[t._v("Voltage")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("Pad")]),t._v(" "),r("td",[t._v("Signal")]),t._v(" "),r("td",[t._v("Volt")])]),t._v(" "),r("tr",[r("td",[t._v("1")]),t._v(" "),r("td",[t._v("NRST (reset)")]),t._v(" "),r("td",[t._v("+3.3V")])]),t._v(" "),r("tr",[r("td",[t._v("2")]),t._v(" "),r("td",[t._v("GPIO1 (free GPIO)")]),t._v(" "),r("td",[t._v("+3.3V")])]),t._v(" "),r("tr",[r("td",[t._v("3")]),t._v(" "),r("td",[t._v("GPIO2 (free GPIO)")]),t._v(" "),r("td",[t._v("+3.3V")])])])]),t._v(" "),r("p",[t._v("The socket is a "),r("em",[t._v("6-pin JST SH")]),t._v(" - Digikey number: "),r("a",{attrs:{href:"https://www.digikey.com/products/en?keywords=455-2875-1-ND",target:"_blank",rel:"noopener noreferrer"}},[t._v("BM06B-SRSS-TBT(LF)(SN)"),r("OutboundLink")],1),t._v(" (vertical mount), "),r("a",{attrs:{href:"https://www.digikey.com/products/en?keywords=455-1806-1-ND",target:"_blank",rel:"noopener noreferrer"}},[t._v("SM06B-SRSS-TBT(LF)(SN)"),r("OutboundLink")],1),t._v("(side mount).")]),t._v(" "),r("p",[t._v("You can connect to the debug port using a "),r("a",{attrs:{href:"https://www.digikey.com/products/en?keywords=A06SR06SR30K152A",target:"_blank",rel:"noopener noreferrer"}},[t._v("cable like this one"),r("OutboundLink")],1),t._v(".")]),t._v(" "),r("p",[r("img",{attrs:{src:o(656),alt:"6-pin JST SH Cable"}})]),t._v(" "),r("p",[r("a",{attrs:{id:"pixhawk_debug_port_10_pin_sh"}})]),t._v(" "),r("h3",{attrs:{id:"pixhawk-debug-full-10-pin-sh-debug-port"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pixhawk-debug-full-10-pin-sh-debug-port"}},[t._v("#")]),t._v(" Pixhawk Debug Full (10-Pin SH Debug Port)")]),t._v(" "),r("p",[t._v("The "),r("a",{attrs:{href:"https://github.com/pixhawk/Pixhawk-Standards/blob/master/DS-009%20Pixhawk%20Connector%20Standard.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk Connector Standard"),r("OutboundLink")],1),t._v("  defines a "),r("em",[t._v("10-Pin SH Debug Port")]),t._v(" that provides access to both SWD pins and the "),r("RouterLink",{attrs:{to:"/ko/debug/system_console.html"}},[t._v("System Console")]),t._v(". This essentially moves the solder pads from beside the "),r("a",{attrs:{href:"#pixhawk_debug_port_6_pin_sh"}},[t._v("Pixhawk 6-Pin SH Debug Port")]),t._v(" into the connector, and also adds an SWO pin.")],1),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("This port is specified for use in FMUv5x, FMUv6, FMUv6x.")])]),t._v(" "),r("p",[t._v("The pinout is as shown below (SWD pins highlighted):")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Debug Port")]),t._v(" "),r("th",[t._v("Pin")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("1")]),t._v(" "),r("td",[r("code",[t._v("Vtref")])])]),t._v(" "),r("tr",[r("td",[t._v("2")]),t._v(" "),r("td",[t._v("Console TX")])]),t._v(" "),r("tr",[r("td",[t._v("3")]),t._v(" "),r("td",[t._v("Console RX")])]),t._v(" "),r("tr",[r("td",[t._v("4")]),t._v(" "),r("td",[r("code",[t._v("SWDIO")])])]),t._v(" "),r("tr",[r("td",[t._v("5")]),t._v(" "),r("td",[r("code",[t._v("SWDCLK")])])]),t._v(" "),r("tr",[r("td",[t._v("6")]),t._v(" "),r("td",[r("em",[t._v("SWO")])])]),t._v(" "),r("tr",[r("td",[t._v("7")]),t._v(" "),r("td",[t._v("NFC GPIO")])]),t._v(" "),r("tr",[r("td",[t._v("8")]),t._v(" "),r("td",[t._v("PH11")])]),t._v(" "),r("tr",[r("td",[t._v("9")]),t._v(" "),r("td",[t._v("nRST")])]),t._v(" "),r("tr",[r("td",[t._v("10")]),t._v(" "),r("td",[r("code",[t._v("GND")])])])])]),t._v(" "),r("p",[t._v("The socket is a "),r("em",[t._v("10-pin JST SH")]),t._v(" - Digikey number: "),r("a",{attrs:{href:"https://www.digikey.com/products/en?keywords=455-1796-2-ND",target:"_blank",rel:"noopener noreferrer"}},[t._v("BM10B-SRSS-TB(LF)(SN)"),r("OutboundLink")],1),t._v(" (vertical mount) or "),r("a",{attrs:{href:"https://www.digikey.com/products/en?keywords=455-1810-2-ND",target:"_blank",rel:"noopener noreferrer"}},[t._v("SM10B-SRSS-TB(LF)(SN)"),r("OutboundLink")],1),t._v(" (side mount).")]),t._v(" "),r("p",[t._v("You can connect to the debug port using a "),r("a",{attrs:{href:"https://www.digikey.com/products/en?keywords=A10SR10SR30K203A",target:"_blank",rel:"noopener noreferrer"}},[t._v("cable like this one"),r("OutboundLink")],1),t._v(".")]),t._v(" "),r("p",[r("img",{attrs:{src:o(657),alt:"10-pin JST SH Cable"}})]),t._v(" "),r("p",[r("a",{attrs:{id:"debug_probes"}})]),t._v(" "),r("h2",{attrs:{id:"debug-probes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#debug-probes"}},[t._v("#")]),t._v(" Debug Probes")]),t._v(" "),r("p",[t._v("The following section outlines some popular debug probes and adaptors for connecting them to autopilots running PX4.")]),t._v(" "),r("p",[r("a",{attrs:{id:"segger_jlink_edu_mini"}})]),t._v(" "),r("h3",{attrs:{id:"segger-jlink-edu-mini-debug-probe"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#segger-jlink-edu-mini-debug-probe"}},[t._v("#")]),t._v(" Segger JLink EDU Mini Debug Probe")]),t._v(" "),r("p",[t._v("The "),r("a",{attrs:{href:"https://www.segger.com/products/debug-probes/j-link/models/j-link-edu-mini/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Segger JLink EDU Mini"),r("OutboundLink")],1),t._v(" is an inexpensive and popular SWD debug probe. The probe's connector pinout looks like the image below (connect to this using an ARM 10-pin mini connector like "),r("a",{attrs:{href:"https://www.digikey.com/products/en?keywords=SAM8796-ND",target:"_blank",rel:"noopener noreferrer"}},[t._v("FTSH-105-01-F-DV-K"),r("OutboundLink")],1),t._v(").")]),t._v(" "),r("p",[r("img",{attrs:{src:o(658),alt:"connector_jlink_mini.png"}})]),t._v(" "),r("p",[t._v("The pin mapping to connect the J-Link Edu Mini to "),r("a",{attrs:{href:"#pixhawk_debug_port_6_pin_sh"}},[t._v("Pixhawk 6-Pin SH Debug Port")]),t._v(" is shown below (note, the "),r("code",[t._v("-")]),t._v(" indicates a pin that is not required for SWD).")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Debug Port")]),t._v(" "),r("th",[t._v("J-Link Mini")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("1 (Vtref)")]),t._v(" "),r("td",[t._v("1")])]),t._v(" "),r("tr",[r("td",[t._v("2 (Console TX)")]),t._v(" "),r("td",[t._v("-")])]),t._v(" "),r("tr",[r("td",[t._v("3 (Console RX)")]),t._v(" "),r("td",[t._v("-")])]),t._v(" "),r("tr",[r("td",[t._v("4 (SWDIO)")]),t._v(" "),r("td",[t._v("2")])]),t._v(" "),r("tr",[r("td",[t._v("5 (SWDCLK)")]),t._v(" "),r("td",[t._v("4")])]),t._v(" "),r("tr",[r("td",[t._v("6 (GND)")]),t._v(" "),r("td",[t._v("3 or 5")])])])]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[t._v("From the table above you can infer the connections for autopilots that do not use the standard port.")])]),t._v(" "),r("p",[r("a",{attrs:{id:"dronecode_probe"}})]),t._v(" "),r("h3",{attrs:{id:"dronecode-probe"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dronecode-probe"}},[t._v("#")]),t._v(" Dronecode Probe")]),t._v(" "),r("p",[t._v("The "),r("a",{attrs:{href:"https://kb.zubax.com/display/MAINKB/Dronecode+Probe+documentation",target:"_blank",rel:"noopener noreferrer"}},[t._v("Dronecode Probe"),r("OutboundLink")],1),t._v(" is a generic JTAG/SWD + UART console adapter compatible with most ARM Cortex based designs, and in particular with Pixhawk series flight controllers (and other hardware that PX4 supports).")]),t._v(" "),r("p",[t._v("The probe's USB interface exposes two separate virtual serial port interfaces: one for connecting to the "),r("RouterLink",{attrs:{to:"/ko/debug/system_console.html"}},[t._v("System Console")]),t._v(" (UART) and the other for an embedded GDB server (SWD interface).")],1),t._v(" "),r("p",[t._v("The probe provides a DCD-M connector cable for attaching to the "),r("a",{attrs:{href:"#pixhawk_debug_port_6_pin_sh"}},[t._v("Pixhawk 6-Pin SH Debug Port")]),t._v(".")]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("The "),r("em",[t._v("6-pos DF13")]),t._v(" connector that comes with the probe cannot be used for SWD debugging (it is for using the System Console).")])]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("The "),r("em",[t._v("Dronecode Probe")]),t._v(" is based on the "),r("a",{attrs:{href:"#black_magic_probe"}},[t._v("Black Magic Probe")]),t._v(".")])]),t._v(" "),r("p",[r("a",{attrs:{id:"black_magic_probe"}})]),t._v(" "),r("h3",{attrs:{id:"black-magic-probe"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#black-magic-probe"}},[t._v("#")]),t._v(" Black Magic Probe")]),t._v(" "),r("p",[t._v("The "),r("a",{attrs:{href:"https://github.com/blacksphere/blackmagic/wiki",target:"_blank",rel:"noopener noreferrer"}},[t._v("Black Magic Probe"),r("OutboundLink")],1),t._v(" is much like the "),r("a",{attrs:{href:"#dronecode_probe"}},[t._v("Dronecode probe")]),t._v(" but does not come with the same adapters for directly connecting to Pixhawk series flight controllers.")]),t._v(" "),r("p",[t._v("Adapters can be purchased separately:")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://1bitsquared.com/products/drone-code-debug-adapter",target:"_blank",rel:"noopener noreferrer"}},[t._v("Drone Code Debug Adapter"),r("OutboundLink")],1),t._v(" (1 BIT SQUARED).")])]),t._v(" "),r("p",[r("a",{attrs:{id:"debugging_topics"}})]),t._v(" "),r("h2",{attrs:{id:"next-steps"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#next-steps"}},[t._v("#")]),t._v(" Next Steps")]),t._v(" "),r("p",[t._v("You've now connected the flight controller to an SWD debug probe!")]),t._v(" "),r("p",[t._v("The following topics explain how to start on-target debugging:")]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/ko/debug/eclipse_jlink.html"}},[t._v("MCU Eclipse/J-Link Debugging for PX4")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/dev_setup/vscode.html"}},[t._v("Visual Studio Code IDE (VSCode)")])],1)])])}),[],!1,null,null,null);e.default=a.exports},655:function(t,e,o){t.exports=o.p+"assets/img/cuav_v5_debug_cable.c0455619.jpg"},656:function(t,e,o){t.exports=o.p+"assets/img/cable_6pin_jst_sh.3c8865a1.jpg"},657:function(t,e,o){t.exports=o.p+"assets/img/cable_10pin_jst_sh.0bc1341c.jpg"},658:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN0AAABnCAYAAACElUcJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAe8SURBVHhe7ZuBkiwnCEXf5v//OQmVdyuEgIqttN19T5WVWUW4oLyZnc7+/Pk3vwghZfzx+7+EkCLYdIQUw6YjpBg2HSHFsOkIKeZT317+/Pz8fkX4pfV9fK7peNlYh7vhx0tCimHTEVIMm46QYth0hBTDpiOkGDYdIcUc3XTy1TYGIW+h+ZwOl12b6LleM1x5FuTFvor4zPqb2bMbW/c35LSbHfdplktNp1md1I4iic9Rf4gvrNRwFS+HTF5Cz17nDrQ91rNznl/BarF2vXXB2li0lkgH0DaeX28to2n7x0sRA0H6tYCfvXlg16qQgkVFezOoNfLHWHkG2q9gfWNe0K8FT5/Q0qf34L96r+DNCdavF8fTJCPS1Gw6CMBm7TyLFWCFCp5/vf4UJA+METL2d9ViV1z4HckdNlZLxkclUc3KvkgRARhvxh587yJk7S1iv6OmLR2I17LB2pPP2+bZq3WrHprbv70UoaNiTyfKY9W8RmxkrL7U2h9i9PTo9Z5tNdCzs/mzNes2HRzuEi/+9CB95Cx21ss7j9YlEnbquRPkhJpHIH9tE9Xs9nc6Te9gSf/wVxPFwrx3Zpir1Olxl45evNuaTh8axt2HpIEm+7pFpH/VPIAePVYx40vr7Wm3IN7IPthYjRkfM4jflu9szfhHrBvQhzASL2t/lV4dvEvk2cPOrvXmLT27ET8ZfZqW1mift2dUk8Cm+yBfqIPXGKdw1O90hHwBNh15JfIOd+q7OZuOkGLYdIQUw6YjpBg2HSHFsOkIKYZNR0gxQw/He0/bWw8i9YNYz48wIGEJWksPq7VK4wyZvISs/ZPBOZ6Ub7fpItH64GAjjNhpm8j/DrSWFp7d6N5qZurXywU+Ndreizk6J1j/WI/sQSYG0Os2rsXzC3oxezo0zY+XLUd2Dj/3ErPM7tvJSOFaSC4YI2Ttgdhf1WqBBvGrR1ZbhOd/1rf25WHXdUzgzWU19nRY+DvdYuzhtA5LyNoDsRs95BWsiIXcrK8Z35Gvq2Q1zuhY2nQIDCFPR/LAGClqlPeqeTCq5wotDSPnjLUdOnf6zjCrI9V0EkQPj5EDeQqSC8Zp+dhz0K+voC+QjRGh11doGEHr9ICOnt1VZvynmk4C7E6C9ME56PPQr69ifQu9ZloZf4Sq5u4xo6PZdChi1nFmH2wqD6zH7IFGOayav4OeRq9Wu8+0FVuoulM9HRHddzrtGGOEVsLW12xxtJ+RMYrosXtHNVq73r6s/W4ydQJac0s/1myMKzFn9rbIapzR8ei/HJdEHyz/Nnp18y6QZw87uxbNA+sfdl5cIDae39E5S8/GalkRE7DpPsib65a5/Hex9JEBIaQPm468CnmHO/1dnE1HSDFsOkKKYdMRUgybjpBi2HTkeOQxAB4FvIFH/+W49r2S1Tp3oXVmtPXq5uWv7bF+ZU7T0iJoP95+TcsmijOj6QqP/stx7Xslu/yu5IrG1t7oPPQez2ZkbnSfprUerWXiZGxX0fx42Qpu5/Az9owyu+9kJBeMEWbsd12IiKvxkNuqe5PFi3OXJv5OFyAF12MUa9vbm7UHYqfHalo+Ry4l1uyFJoubbve/EFVIHnaM5BTZrJrXzOgbQXwB8YnRQq+v0iHAl9b0BlJNhwPA8ECBonVyPmhk24AtrD2JSTUdC/s9ovPGvNeMmLtyV1b4OJVm07UK2yKz78TiZvMFUQ6r5iuYyV3r7eVk/VedvxfnLk3Tz+kELdpzY8X3/GSJ4q7Aas3E0XtH9mXthav6WvbWt+DZw86uRfPCVd+aXnxL5GtU0yr4R6wf5PS6Rc30FvjIgJBi2HTkOOQd7s2fYNh0hBTDpiOkGDYdIcWw6Qgphk1HSDFsOkKK4cNxB+//UBBOKpXVmNF2+sPxt8OmG+Ski+ppyeiLbGW+heyJbDw9mlFtX+DxTZdlJt3okq5C5zESx9OT0ThiC01eHEHPZ2zJw3+nk8PMjBPBxQT25yeA2j5R+x00m06KqEfEaruTEJ27GjaqQa82ogc1xDj1HxXyf5pNJwepR8RqO9IGTaaHzJFnwEcGDfgOQnbApruRqKHZ6O+GTRdQ9S5nY4zEFBvRp8edjSrxhTs1PIlHPzLIcvflPIWROkSNhHlLz451/xc23QdhHe6FHy8JKYZNR0gxbDpCimHTEVIMm46QYth0hBTTbDr5ajl6LuPNw761j5Cv03xOpxvHmsmanoOtnWu4LyejR+cunJSHJsqppf/KuVi/wPr36NmM+ojWwGxuVXSbTiepTbGG10LD1RFozS08u9G9VaDmwohWPXclF8TV++2cZ6OJ1rWung8wancS/J1uA3IRMEbI2gtyyXZcNK0lq+kqT2qcKww1HYpReQBPxdaoV7OsfRW6qXdpOiXXaobf6dh4faLarJo/CdGIIXjvUtoGdoK29dY1ej2yeRr8eOkgl+KNh70S3Thewwkyr4fGm/fqrO207ZNJNR2StsWJ5p98WfVBIz/yX6Jzz/K1+qbf6aIC6QPAeEsxR3Pp1caSnT8RaM00Xsb2jfDv6QL0xciWKLt3JpZ3cfVeu27XojjYh/Xez0DP47VF7/FseutCK+5TYNN9ENbhXvhFCiHFsOkIKYZNR0gxbDpCivncFynkH/hFyl38+vUXjbnmD1B9c9EAAAAASUVORK5CYII="}}]);