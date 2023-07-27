(window.webpackJsonp=window.webpackJsonp||[]).push([[210],{1866:function(t,e,r){"use strict";r.r(e);var o=r(19),a=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"swd-jtag-hardware-debugging-interface"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#swd-jtag-hardware-debugging-interface"}},[t._v("#")]),t._v(" SWD (JTAG) Hardware Debugging Interface")]),t._v(" "),o("p",[t._v("PX4 usually runs on autopilot controller hardware that provides an ARM "),o("em",[t._v("Serial Wire Debug (SWD)")]),t._v(" interface.\nSWD is a low pin-count physical interface for JTAG debugging on ARM-processors.\nIt can be used with an SWD-compatible debug probe (e.g. "),o("a",{attrs:{href:"#segger_jlink_edu_mini"}},[t._v("Segger J-Link EDU Mini")]),t._v(", "),o("a",{attrs:{href:"#dronecode_probe"}},[t._v("Dronecode Probe")]),t._v(", etc.) to set breakpoints in PX4 and step through the code running on a real device.")]),t._v(" "),o("p",[t._v("The SWD interface can also be used to add a new bootloader and/or firmware on a completely empty board (one that does not have the USB bootloader installed).")]),t._v(" "),o("p",[t._v("This topic explains how to connect the SWD interface on different boards (debugging itself is then covered in the associated "),o("a",{attrs:{href:"#debugging_topics"}},[t._v("debugging topics")]),t._v(").")]),t._v(" "),o("p",[o("a",{attrs:{id:"swd_interface"}})]),t._v(" "),o("h2",{attrs:{id:"swd-interface-definition"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#swd-interface-definition"}},[t._v("#")]),t._v(" SWD Interface Definition")]),t._v(" "),o("p",[t._v("The SWD interface consists of the following pins.")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("Pin")]),t._v(" "),o("th",[t._v("Signal Type")]),t._v(" "),o("th",[t._v("Description")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[o("code",[t._v("Vref")])]),t._v(" "),o("td",[t._v("Output")]),t._v(" "),o("td",[t._v("Target reference voltage."),o("br"),t._v("Some JTAG adapters require the "),o("code",[t._v("Vref")]),t._v(" voltage to set the voltage on the SWD lines. For example, "),o("a",{attrs:{href:"#segger_jlink_edu_mini"}},[t._v("SEGGER J-Link Debug Probes")]),t._v(" require "),o("code",[t._v("Vref")]),t._v(".")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("SWDIO")])]),t._v(" "),o("td",[t._v("I/O")]),t._v(" "),o("td",[t._v("Single bi-directional data pin.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("SWCLK")])]),t._v(" "),o("td",[t._v("Output")]),t._v(" "),o("td",[t._v("Clock signal.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("GND")])]),t._v(" "),o("td",[t._v("-")]),t._v(" "),o("td",[t._v("Ground pin.")])])])]),t._v(" "),o("p",[t._v('While not "part" of SWD, an autopilot may also have an '),o("em",[t._v("Serial Wire Output (SWO)")]),t._v(" trace output pin.\nIf present this should also be connected.")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("Pin")]),t._v(" "),o("th",[t._v("Signal Type")]),t._v(" "),o("th",[t._v("Description")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[o("code",[t._v("SWO")])]),t._v(" "),o("td",[t._v("Output")]),t._v(" "),o("td",[t._v("Serial  Wire Output trace output pin. This may be used in combination with "),o("em",[t._v("SWD")]),t._v(" to emit real-time trace data.")])])])]),t._v(" "),o("h2",{attrs:{id:"connecting-swd-debuggers-to-px4-hardware"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#connecting-swd-debuggers-to-px4-hardware"}},[t._v("#")]),t._v(" Connecting SWD Debuggers to PX4 Hardware")]),t._v(" "),o("p",[t._v("Flight controllers commonly provide a single debug port that exposes both the "),o("a",{attrs:{href:"#swd_interface"}},[t._v("SWD Interface")]),t._v(" and "),o("RouterLink",{attrs:{to:"/en/debug/system_console.html"}},[t._v("System Console")]),t._v(".\nThis must be connected to an SWD "),o("a",{attrs:{href:"#debug_probes"}},[t._v("debug probe")]),t._v(' using an "appropriate" connector.')],1),t._v(" "),o("p",[t._v("This connector may come with your flight controller or debug probe.\nOther options are given below.")]),t._v(" "),o("h3",{attrs:{id:"holybro-pixhawk-debug-adapter"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#holybro-pixhawk-debug-adapter"}},[t._v("#")]),t._v(" Holybro Pixhawk Debug Adapter")]),t._v(" "),o("p",[t._v("The "),o("a",{attrs:{href:"https://holybro.com/products/pixhawk-debug-adapter",target:"_blank",rel:"noopener noreferrer"}},[t._v("Holybro Pixhawk Debug Adapter"),o("OutboundLink")],1),t._v(" is "),o("em",[t._v("highly recommended")]),t._v(" when debugging controllers that use one of the Pixhawk-standard debug connectors.")]),t._v(" "),o("p",[t._v("It is the easiest way to connect:")]),t._v(" "),o("ul",[o("li",[t._v("Flight controllers that use either the "),o("a",{attrs:{href:"#pixhawk_debug_port_10_pin_sh"}},[t._v("Pixhawk Debug Full")]),t._v(" (10-pin SH) or "),o("a",{attrs:{href:"#pixhawk-debug-mini-6-pin-sh-debug-port"}},[t._v("Pixhawk Debug Mini")]),t._v(" (6-pin SH) debug port, and")]),t._v(" "),o("li",[t._v("SWD debug probes that support the 10-pin ARM compatible interface standard used by the "),o("a",{attrs:{href:"#segger-jlink-edu-mini-debug-probe"}},[t._v("Segger JLink Mini")]),t._v(" or 20-pin compatible with the Segger Jlink or STLink.")])]),t._v(" "),o("p",[o("img",{attrs:{src:r(706),alt:"Holybro Pixhawk Debug Adapter"}})]),t._v(" "),o("h3",{attrs:{id:"debug-probe-adapters"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#debug-probe-adapters"}},[t._v("#")]),t._v(" Debug Probe Adapters")]),t._v(" "),o("p",[t._v("Some SWD "),o("a",{attrs:{href:"#debug_probes"}},[t._v("debug probes")]),t._v(" come with adapters/cables for connecting to common Pixhawk "),o("a",{attrs:{href:"#debug_ports"}},[t._v("debug ports")]),t._v(".\nProbes that are known to come with connectors are listed below:")]),t._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"#dronecode-probe"}},[t._v("DroneCode Probe")]),t._v(": comes with a connector for attaching to the "),o("a",{attrs:{href:"#pixhawk_debug_port_6_pin_sh"}},[t._v("Pixhawk Debug Mini")])])]),t._v(" "),o("h3",{attrs:{id:"board-specific-adapters"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#board-specific-adapters"}},[t._v("#")]),t._v(" Board-specific Adapters")]),t._v(" "),o("p",[t._v("Some manufacturers provide cables to make it easy to connect the SWD interface and "),o("RouterLink",{attrs:{to:"/en/debug/system_console.html"}},[t._v("System Console")]),t._v(".")],1),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/en/flight_controller/cuav_v5_nano.html#debug_port"}},[t._v("CUAV V5nano")]),t._v(" and "),o("RouterLink",{attrs:{to:"/en/flight_controller/cuav_v5_plus.html#debug-port"}},[t._v("CUAV V5+")]),t._v(" include this debug cable:")],1)]),t._v(" "),o("p",[o("img",{attrs:{src:r(707),alt:"6-pin JST SH Cable"}})]),t._v(" "),o("h3",{attrs:{id:"custom-cables"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#custom-cables"}},[t._v("#")]),t._v(" Custom Cables")]),t._v(" "),o("p",[t._v("You can also create custom cables for connecting to different boards or probes:")]),t._v(" "),o("ul",[o("li",[t._v("Connect "),o("code",[t._v("SWDIO")]),t._v(", "),o("code",[t._v("SWCLK")]),t._v(" and "),o("code",[t._v("GND")]),t._v(" pins on the debug probe to the corresponding pins on the autopilot.")]),t._v(" "),o("li",[t._v("Connect the "),o("code",[t._v("VRef")]),t._v(" pin, if required by the debug adapter that is being used.")]),t._v(" "),o("li",[t._v("Connect the "),o("code",[t._v("SWO")]),t._v(" pin, if present.")])]),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),o("p",[t._v("Where possible, we highly recommend that you create or obtain an adapter board rather than custom cables for connecting to SWD/JTAG debuggers and computers.\nThis reduces the risk or poor wiring contributing to debugging problems, and has the benefit that adapters usually provide a common interface for connecting to multiple popular flight controller boards.")])]),t._v(" "),o("p",[o("a",{attrs:{id:"debug_ports"}})]),t._v(" "),o("h2",{attrs:{id:"autopilot-debug-ports"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#autopilot-debug-ports"}},[t._v("#")]),t._v(" Autopilot Debug Ports")]),t._v(" "),o("p",[t._v("Flight controllers commonly provide a single debug port that exposes both the "),o("a",{attrs:{href:"#swd_interface"}},[t._v("SWD Interface")]),t._v(" and "),o("RouterLink",{attrs:{to:"/en/debug/system_console.html"}},[t._v("System Console")]),t._v(".")],1),t._v(" "),o("p",[t._v("The "),o("a",{attrs:{href:"#pixhawk_standard_debug_ports"}},[t._v("Pixhawk Connector Standards")]),t._v(" formalize the port that must be used in each FMU version.\nHowever there are still many boards that use different pinouts or connectors, so we recommend you check the "),o("RouterLink",{attrs:{to:"/en/flight_controller/"}},[t._v("documentation for your autopilot")]),t._v(" to confirm port location and pinout.")],1),t._v(" "),o("p",[t._v("The debug port location and pinouts for a subset of autopilots are linked below:")]),t._v(" "),o("p",[o("a",{attrs:{id:"port_information"}})]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("Autopilot")]),t._v(" "),o("th",[t._v("Connector")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[o("RouterLink",{attrs:{to:"/en/flight_controller/pixhawk5x.html#debug-port"}},[t._v("Holybro Pixhawk 5X")]),t._v(" (FMUv5x)")],1),t._v(" "),o("td",[o("a",{attrs:{href:"#pixhawk-debug-full-10-pin-sh-debug-port"}},[t._v("Pixhawk Debug Full")])])]),t._v(" "),o("tr",[o("td",[o("RouterLink",{attrs:{to:"/en/flight_controller/durandal.html#debug-port"}},[t._v("Holybro Durandal")])],1),t._v(" "),o("td",[o("a",{attrs:{href:"#pixhawk_debug_port_6_pin_sh"}},[t._v("Pixhawk Debug Mini")])])]),t._v(" "),o("tr",[o("td",[o("RouterLink",{attrs:{to:"/en/flight_controller/kakutef7.html#debug-port"}},[t._v("Holybro Kakute F7")])],1),t._v(" "),o("td",[t._v("Solder pads")])]),t._v(" "),o("tr",[o("td",[o("RouterLink",{attrs:{to:"/en/flight_controller/pixhawk4_mini.html#debug-port"}},[t._v("Holybro Pixhawk 4 Mini")]),t._v(" (FMUv5)")],1),t._v(" "),o("td",[o("a",{attrs:{href:"#pixhawk_debug_port_6_pin_sh"}},[t._v("Pixhawk Debug Mini")])])]),t._v(" "),o("tr",[o("td",[o("RouterLink",{attrs:{to:"/en/flight_controller/pixhawk4.html#debug_port"}},[t._v("Holybro Pixhawk 4")]),t._v(" (FMUv5)")],1),t._v(" "),o("td",[o("a",{attrs:{href:"#pixhawk_debug_port_6_pin_sh"}},[t._v("Pixhawk Debug Mini")])])]),t._v(" "),o("tr",[o("td",[o("RouterLink",{attrs:{to:"/en/flight_controller/pixhawk3_pro.html#debug-port"}},[t._v("Drotek Pixhawk 3 Pro")]),t._v(" (FMU-v4pro)")],1),t._v(" "),o("td",[o("a",{attrs:{href:"#pixhawk_debug_port_6_pin_sh"}},[t._v("Pixhawk Debug Mini")])])]),t._v(" "),o("tr",[o("td",[o("RouterLink",{attrs:{to:"/en/flight_controller/cuav_v5_plus.html#debug-port"}},[t._v("CUAV V5+")])],1),t._v(" "),o("td",[t._v("6-pin JST GH"),o("br"),t._v("Digikey: "),o("a",{attrs:{href:"https://www.digikey.com/products/en?keywords=455-1582-1-ND",target:"_blank",rel:"noopener noreferrer"}},[t._v("BM06B-GHS-TBT(LF)(SN)(N)"),o("OutboundLink")],1),t._v(" (vertical mount), "),o("a",{attrs:{href:"https://www.digikey.com/products/en?keywords=455-1568-1-ND",target:"_blank",rel:"noopener noreferrer"}},[t._v("SM06B-GHS-TBT(LF)(SN)(N)"),o("OutboundLink")],1),t._v(" (side mount)")])]),t._v(" "),o("tr",[o("td",[o("RouterLink",{attrs:{to:"/en/flight_controller/cuav_v5_nano.html#debug_port"}},[t._v("CUAV V5nano")])],1),t._v(" "),o("td",[t._v("6-pin JST GH"),o("br"),t._v("Digikey: "),o("a",{attrs:{href:"https://www.digikey.com/products/en?keywords=455-1582-1-ND",target:"_blank",rel:"noopener noreferrer"}},[t._v("BM06B-GHS-TBT(LF)(SN)(N)"),o("OutboundLink")],1),t._v(" (vertical mount), "),o("a",{attrs:{href:"https://www.digikey.com/products/en?keywords=455-1568-1-ND",target:"_blank",rel:"noopener noreferrer"}},[t._v("SM06B-GHS-TBT(LF)(SN)(N)"),o("OutboundLink")],1),t._v(" (side mount)")])]),t._v(" "),o("tr",[o("td",[o("RouterLink",{attrs:{to:"/en/flight_controller/pixhawk.html#swd-port"}},[t._v("3DR Pixhawk")])],1),t._v(" "),o("td",[t._v("ARM 10-pin JTAG Connector (also used for FMUv2 boards including: "),o("em",[t._v("mRo Pixhawk")]),t._v(", "),o("em",[t._v("HobbyKing HKPilot32")]),t._v(").")])])])]),t._v(" "),o("p",[o("a",{attrs:{id:"pixhawk_standard_debug_ports"}})]),t._v(" "),o("h2",{attrs:{id:"pixhawk-connector-standard-debug-ports"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#pixhawk-connector-standard-debug-ports"}},[t._v("#")]),t._v(" Pixhawk Connector Standard Debug Ports")]),t._v(" "),o("p",[t._v("The Pixhawk project has defines a standard pinout and connector type for different Pixhawk FMU releases:")]),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),o("p",[t._v("Check your "),o("a",{attrs:{href:"#port_information"}},[t._v("specific board")]),t._v(" to confirm the port used.")])]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("FMU Version")]),t._v(" "),o("th",[t._v("Pixhawk Ver.")]),t._v(" "),o("th",[t._v("Debug Interface")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("FMUv2")]),t._v(" "),o("td",[o("RouterLink",{attrs:{to:"/en/flight_controller/pixhawk.html#swd-port"}},[t._v("Pixhawk / Pixhawk 1")])],1),t._v(" "),o("td",[t._v("10 pin ARM Debug")])]),t._v(" "),o("tr",[o("td",[t._v("FMUv3")]),t._v(" "),o("td",[t._v("Pixhawk 2")]),t._v(" "),o("td",[t._v("6 pin SUR Debug")])]),t._v(" "),o("tr",[o("td",[t._v("FMUv4")]),t._v(" "),o("td",[t._v("Pixhawk 3")]),t._v(" "),o("td",[o("a",{attrs:{href:"#pixhawk_debug_port_6_pin_sh"}},[t._v("Pixhawk Debug Mini")])])]),t._v(" "),o("tr",[o("td",[t._v("FMUv5")]),t._v(" "),o("td",[t._v("Pixhawk 4 FMUv5")]),t._v(" "),o("td",[o("a",{attrs:{href:"#pixhawk_debug_port_6_pin_sh"}},[t._v("Pixhawk Debug Mini")])])]),t._v(" "),o("tr",[o("td",[t._v("FMUv5X")]),t._v(" "),o("td",[t._v("Pixhawk 5X")]),t._v(" "),o("td",[o("a",{attrs:{href:"#pixhawk-debug-full-10-pin-sh-debug-port"}},[t._v("Pixhawk Debug Full")])])]),t._v(" "),o("tr",[o("td",[t._v("FMUv6")]),t._v(" "),o("td",[t._v("Pixhawk 6")]),t._v(" "),o("td",[o("a",{attrs:{href:"#pixhawk-debug-full-10-pin-sh-debug-port"}},[t._v("Pixhawk Debug Full")])])]),t._v(" "),o("tr",[o("td",[t._v("FMUv6X")]),t._v(" "),o("td",[t._v("Pixhawk 6X")]),t._v(" "),o("td",[o("a",{attrs:{href:"#pixhawk-debug-full-10-pin-sh-debug-port"}},[t._v("Pixhawk Debug Full")])])])])]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("There FMU and Pixhawk versions are (only) consistent after FMUv5X.")])]),t._v(" "),o("p",[o("a",{attrs:{id:"pixhawk_debug_port_6_pin_sh"}})]),t._v(" "),o("h3",{attrs:{id:"pixhawk-debug-mini-6-pin-sh-debug-port"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#pixhawk-debug-mini-6-pin-sh-debug-port"}},[t._v("#")]),t._v(" Pixhawk Debug Mini (6-Pin SH Debug Port)")]),t._v(" "),o("p",[t._v("The "),o("a",{attrs:{href:"https://github.com/pixhawk/Pixhawk-Standards/blob/master/DS-009%20Pixhawk%20Connector%20Standard.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk Connector Standard"),o("OutboundLink")],1),t._v(" defines the "),o("em",[t._v("Pixhawk Debug Mini")]),t._v(", a "),o("em",[t._v("6-Pin SH Debug Port")]),t._v(" that provides access to both SWD pins and the "),o("RouterLink",{attrs:{to:"/en/debug/system_console.html"}},[t._v("System Console")]),t._v(".")],1),t._v(" "),o("p",[t._v("This is used in FMUv4 and FMUv5.")]),t._v(" "),o("p",[t._v("The pinout is as shown below (SWD pins highlighted):")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("Debug Port")]),t._v(" "),o("th",[t._v("Pin")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("1")]),t._v(" "),o("td",[o("code",[t._v("Vtref")])])]),t._v(" "),o("tr",[o("td",[t._v("2")]),t._v(" "),o("td",[t._v("Console TX")])]),t._v(" "),o("tr",[o("td",[t._v("3")]),t._v(" "),o("td",[t._v("Console RX")])]),t._v(" "),o("tr",[o("td",[t._v("4")]),t._v(" "),o("td",[o("code",[t._v("SWDIO")])])]),t._v(" "),o("tr",[o("td",[t._v("5")]),t._v(" "),o("td",[o("code",[t._v("SWDCLK")])])]),t._v(" "),o("tr",[o("td",[t._v("6")]),t._v(" "),o("td",[o("code",[t._v("GND")])])])])]),t._v(" "),o("p",[t._v("The debug port definition includes the following solder pads (on board next to connector):")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("Debug Port")]),t._v(" "),o("th",[t._v("Pin")]),t._v(" "),o("th",[t._v("Voltage")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("Pad")]),t._v(" "),o("td",[t._v("Signal")]),t._v(" "),o("td",[t._v("Volt")])]),t._v(" "),o("tr",[o("td",[t._v("1")]),t._v(" "),o("td",[t._v("NRST (reset)")]),t._v(" "),o("td",[t._v("+3.3V")])]),t._v(" "),o("tr",[o("td",[t._v("2")]),t._v(" "),o("td",[t._v("GPIO1 (free GPIO)")]),t._v(" "),o("td",[t._v("+3.3V")])]),t._v(" "),o("tr",[o("td",[t._v("3")]),t._v(" "),o("td",[t._v("GPIO2 (free GPIO)")]),t._v(" "),o("td",[t._v("+3.3V")])])])]),t._v(" "),o("p",[t._v("The socket is a "),o("em",[t._v("6-pin JST SH")]),t._v(" - Digikey number: "),o("a",{attrs:{href:"https://www.digikey.com/products/en?keywords=455-2875-1-ND",target:"_blank",rel:"noopener noreferrer"}},[t._v("BM06B-SRSS-TBT(LF)(SN)"),o("OutboundLink")],1),t._v(" (vertical mount), "),o("a",{attrs:{href:"https://www.digikey.com/products/en?keywords=455-1806-1-ND",target:"_blank",rel:"noopener noreferrer"}},[t._v("SM06B-SRSS-TBT(LF)(SN)"),o("OutboundLink")],1),t._v("(side mount).")]),t._v(" "),o("p",[t._v("You can connect to the debug port using a "),o("a",{attrs:{href:"https://www.digikey.com/products/en?keywords=A06SR06SR30K152A",target:"_blank",rel:"noopener noreferrer"}},[t._v("cable like this one"),o("OutboundLink")],1),t._v(".")]),t._v(" "),o("p",[o("img",{attrs:{src:r(708),alt:"6-pin JST SH Cable"}})]),t._v(" "),o("p",[o("a",{attrs:{id:"pixhawk_debug_port_10_pin_sh"}})]),t._v(" "),o("h3",{attrs:{id:"pixhawk-debug-full-10-pin-sh-debug-port"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#pixhawk-debug-full-10-pin-sh-debug-port"}},[t._v("#")]),t._v(" Pixhawk Debug Full (10-Pin SH Debug Port)")]),t._v(" "),o("p",[t._v("The "),o("a",{attrs:{href:"https://github.com/pixhawk/Pixhawk-Standards/blob/master/DS-009%20Pixhawk%20Connector%20Standard.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk Connector Standard"),o("OutboundLink")],1),t._v(" defines "),o("em",[t._v("Pixhawk Debug Full")]),t._v(", a "),o("em",[t._v("10-Pin SH Debug Port")]),t._v(" that provides access to both SWD pins and the "),o("RouterLink",{attrs:{to:"/en/debug/system_console.html"}},[t._v("System Console")]),t._v(".\nThis essentially moves the solder pads from beside the "),o("a",{attrs:{href:"#pixhawk_debug_port_6_pin_sh"}},[t._v("Pixhawk Debug Mini")]),t._v(" into the connector, and also adds an SWO pin.")],1),t._v(" "),o("p",[t._v("This port is specified for use in FMUv5x, FMUv6, FMUv6x.")]),t._v(" "),o("p",[t._v("The pinout is as shown below (SWD pins highlighted):")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("Debug Port")]),t._v(" "),o("th",[t._v("Pin")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("1")]),t._v(" "),o("td",[o("code",[t._v("Vtref")])])]),t._v(" "),o("tr",[o("td",[t._v("2")]),t._v(" "),o("td",[t._v("Console TX")])]),t._v(" "),o("tr",[o("td",[t._v("3")]),t._v(" "),o("td",[t._v("Console RX")])]),t._v(" "),o("tr",[o("td",[t._v("4")]),t._v(" "),o("td",[o("code",[t._v("SWDIO")])])]),t._v(" "),o("tr",[o("td",[t._v("5")]),t._v(" "),o("td",[o("code",[t._v("SWDCLK")])])]),t._v(" "),o("tr",[o("td",[t._v("6")]),t._v(" "),o("td",[o("em",[t._v("SWO")])])]),t._v(" "),o("tr",[o("td",[t._v("7")]),t._v(" "),o("td",[t._v("NFC GPIO")])]),t._v(" "),o("tr",[o("td",[t._v("8")]),t._v(" "),o("td",[t._v("PH11")])]),t._v(" "),o("tr",[o("td",[t._v("9")]),t._v(" "),o("td",[t._v("nRST")])]),t._v(" "),o("tr",[o("td",[t._v("10")]),t._v(" "),o("td",[o("code",[t._v("GND")])])])])]),t._v(" "),o("p",[t._v("The socket is a "),o("em",[t._v("10-pin JST SH")]),t._v(" - Digikey number: "),o("a",{attrs:{href:"https://www.digikey.com/products/en?keywords=455-1796-2-ND",target:"_blank",rel:"noopener noreferrer"}},[t._v("BM10B-SRSS-TB(LF)(SN)"),o("OutboundLink")],1),t._v(" (vertical mount) or "),o("a",{attrs:{href:"https://www.digikey.com/products/en?keywords=455-1810-2-ND",target:"_blank",rel:"noopener noreferrer"}},[t._v("SM10B-SRSS-TB(LF)(SN)"),o("OutboundLink")],1),t._v(" (side mount).")]),t._v(" "),o("p",[t._v("You can connect to the debug port using a "),o("a",{attrs:{href:"https://www.digikey.com/products/en?keywords=A10SR10SR30K203A",target:"_blank",rel:"noopener noreferrer"}},[t._v("cable like this one"),o("OutboundLink")],1),t._v(".")]),t._v(" "),o("p",[o("img",{attrs:{src:r(709),alt:"10-pin JST SH Cable"}})]),t._v(" "),o("p",[o("a",{attrs:{id:"debug_probes"}})]),t._v(" "),o("h2",{attrs:{id:"debug-probes"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#debug-probes"}},[t._v("#")]),t._v(" Debug Probes")]),t._v(" "),o("p",[t._v("The following section outlines some popular debug probes and adaptors for connecting them to autopilots running PX4.")]),t._v(" "),o("p",[o("a",{attrs:{id:"segger_jlink_edu_mini"}})]),t._v(" "),o("h3",{attrs:{id:"segger-jlink-edu-mini-debug-probe"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#segger-jlink-edu-mini-debug-probe"}},[t._v("#")]),t._v(" Segger JLink EDU Mini Debug Probe")]),t._v(" "),o("p",[t._v("The "),o("a",{attrs:{href:"https://www.segger.com/products/debug-probes/j-link/models/j-link-edu-mini/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Segger JLink EDU Mini"),o("OutboundLink")],1),t._v(" is an inexpensive and popular SWD debug probe.\nThe probe's connector pinout looks like the image below (connect to this using an ARM 10-pin mini connector like "),o("a",{attrs:{href:"https://www.digikey.com/products/en?keywords=SAM8796-ND",target:"_blank",rel:"noopener noreferrer"}},[t._v("FTSH-105-01-F-DV-K"),o("OutboundLink")],1),t._v(").")]),t._v(" "),o("p",[o("img",{attrs:{src:r(710),alt:"connector_jlink_mini.png"}})]),t._v(" "),o("p",[t._v("The pin mapping to connect the J-Link Edu Mini to "),o("a",{attrs:{href:"#pixhawk_debug_port_6_pin_sh"}},[t._v("Pixhawk Debug Mini")]),t._v(" is shown below (note, the "),o("code",[t._v("-")]),t._v(" indicates a pin that is not required for SWD).")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("Debug Port")]),t._v(" "),o("th",[t._v("J-Link Mini")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("1 (Vtref)")]),t._v(" "),o("td",[t._v("1")])]),t._v(" "),o("tr",[o("td",[t._v("2 (Console TX)")]),t._v(" "),o("td",[t._v("-")])]),t._v(" "),o("tr",[o("td",[t._v("3 (Console RX)")]),t._v(" "),o("td",[t._v("-")])]),t._v(" "),o("tr",[o("td",[t._v("4 (SWDIO)")]),t._v(" "),o("td",[t._v("2")])]),t._v(" "),o("tr",[o("td",[t._v("5 (SWDCLK)")]),t._v(" "),o("td",[t._v("4")])]),t._v(" "),o("tr",[o("td",[t._v("6 (GND)")]),t._v(" "),o("td",[t._v("3 or 5")])])])]),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),o("p",[t._v("From the table above you can infer the connections for autopilots that do not use the standard port.")])]),t._v(" "),o("p",[o("a",{attrs:{id:"dronecode_probe"}})]),t._v(" "),o("h3",{attrs:{id:"dronecode-probe"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#dronecode-probe"}},[t._v("#")]),t._v(" Dronecode Probe")]),t._v(" "),o("p",[t._v("The "),o("a",{attrs:{href:"https://kb.zubax.com/display/MAINKB/Dronecode+Probe+documentation",target:"_blank",rel:"noopener noreferrer"}},[t._v("Dronecode Probe"),o("OutboundLink")],1),t._v(" is a generic JTAG/SWD + UART console adapter compatible with most ARM Cortex based designs, and in particular with Pixhawk series flight controllers (and other hardware that PX4 supports).")]),t._v(" "),o("p",[t._v("The probe's USB interface exposes two separate virtual serial port interfaces: one for connecting to the "),o("RouterLink",{attrs:{to:"/en/debug/system_console.html"}},[t._v("System Console")]),t._v(" (UART) and the other for an embedded GDB server (SWD interface).")],1),t._v(" "),o("p",[t._v("The probe provides a DCD-M connector cable for attaching to the "),o("a",{attrs:{href:"#pixhawk_debug_port_6_pin_sh"}},[t._v("Pixhawk Debug Mini")]),t._v(".")]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("The "),o("em",[t._v("6-pos DF13")]),t._v(" connector that comes with the probe cannot be used for SWD debugging (it is for using the System Console).")])]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("The "),o("em",[t._v("Dronecode Probe")]),t._v(" is based on the "),o("a",{attrs:{href:"#black_magic_probe"}},[t._v("Black Magic Probe")]),t._v(".")])]),t._v(" "),o("p",[o("a",{attrs:{id:"black_magic_probe"}})]),t._v(" "),o("h3",{attrs:{id:"black-magic-probe"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#black-magic-probe"}},[t._v("#")]),t._v(" Black Magic Probe")]),t._v(" "),o("p",[t._v("The "),o("a",{attrs:{href:"https://github.com/blacksphere/blackmagic/wiki",target:"_blank",rel:"noopener noreferrer"}},[t._v("Black Magic Probe"),o("OutboundLink")],1),t._v(" is much like the "),o("a",{attrs:{href:"#dronecode_probe"}},[t._v("Dronecode probe")]),t._v(" but does not come with the same adapters for directly connecting to Pixhawk series flight controllers.")]),t._v(" "),o("p",[t._v("Adapters can be purchased separately:")]),t._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://1bitsquared.com/products/drone-code-debug-adapter",target:"_blank",rel:"noopener noreferrer"}},[t._v("Drone Code Debug Adapter"),o("OutboundLink")],1),t._v(" (1 BIT SQUARED).")])]),t._v(" "),o("p",[o("a",{attrs:{id:"debugging_topics"}})]),t._v(" "),o("h2",{attrs:{id:"next-steps"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#next-steps"}},[t._v("#")]),t._v(" Next Steps")]),t._v(" "),o("p",[t._v("You've now connected the flight controller to an SWD debug probe!")]),t._v(" "),o("p",[t._v("The following topics explain how to start on-target debugging:")]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/en/debug/eclipse_jlink.html"}},[t._v("MCU Eclipse/J-Link Debugging for PX4")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/en/dev_setup/vscode.html"}},[t._v("Visual Studio Code IDE (VSCode)")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/en/debug/swd_gdb.html"}},[t._v("SWD GDB Hardware Debugging")])],1)])])}),[],!1,null,null,null);e.default=a.exports},706:function(t,e,r){t.exports=r.p+"assets/img/holybro_pixhawk_debug_adapter.b99eb6ac.png"},707:function(t,e,r){t.exports=r.p+"assets/img/cuav_v5_debug_cable.c6d410bf.jpg"},708:function(t,e){t.exports="data:image/jpeg;base64,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"},709:function(t,e,r){t.exports=r.p+"assets/img/cable_10pin_jst_sh.0e508b1c.jpg"},710:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN0AAABnAQMAAAC+W9VKAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAAGUExURQAAAP///6XZn90AAALeSURBVEjH3dYxT9tAFAfwVCDBUCkdO0RKpyK20iy1cHIfoV8hnbK2ZYmVFKuiUpdK6RqJxiMfgC6VUCM2hhDPKEMSleIFCSMPnOXjru+9s40xIVKlDikZSMJPl7t775+7FNT9D15YVJwU9GNpFl7Ez9F/jpLdg/L9IyVwpI1v7QRdjVsuoUC86kfcGNabTXa0HB4SPn/K4pGAwcmwYQaOY77rwZxr7vKAPparjgIMh41dzwV0CE2Nvr2i7OhSDDzE6npH42PCSW1JqIibnxBZdR3mVB3XFAlGsJXSd41drvE8wSvA3gbg0K52BWGthFspw5w+i656lmcGPbsaHmTLh6uFOWvWpNmsAR7eV1sxr/Di4WVox6nbWD6G7/sJMo3VTgNeXURj+h/GpNnw2LOS4UJM7L2Ggx87htpKisnW3tl2OzxxsghdudYx8U5lOwgZ4j6hZNjsPsXEmwJyG/DNj3gkIC9STLxfQgQcc2tlEFcLMfGmiDBSGQfxajF9fYqJdxoKmlN9/Fm3ZaEomM4txCTYO7MErZa2LNOqYEx4fc0QAveZR/0UZGr7d6gWDJ1sEgB5mY4VbPZb++tqeSdNgoyHXCs6E1jNcg06TbDZhFBb+PJCs187NeusnUXOoCucYbPdDO4TUj+jMTbb7W0niEnIIDQ7g1YOexvuroyRkoALwiQA0pkg49XqJMB3GZMgGDbbb8tmvM8ZFQrnlS9cuH7+O6QkQIVmj8QzAWo7eWKyHBaKqq8gCeNIwEF89xwCXCEc3qAsf54qfV3JJZjzFqYjEfMjE4Q1zcW7cyZ4DX86NOes1cYVEn5+nw/jApAfpnOwOiTUt0N7U/mvSqXVlRi/0dGhbwfRGqmgG57TzXEL8bxtjfytbihSPE4QT+rWKKh0+Q3+ThDPeMAXMGcxh6Ic40tLfUlHXurVqmRkxVCDFMN4n/10zijFpEICf9WI0mZQObqZc1H7OfP37R/dowxCIwtg6wAAAABJRU5ErkJggg=="}}]);