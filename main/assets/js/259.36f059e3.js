(window.webpackJsonp=window.webpackJsonp||[]).push([[259],{3563:function(t,e,a){"use strict";a.r(e);var r=a(19),i=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"swd-debug-port"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#swd-debug-port"}},[t._v("#")]),t._v(" SWD Debug Port")]),t._v(" "),r("p",[t._v("PX4 runs on ARM Cortex-M microcontrollers, which contain dedicated hardware for interactive debugging via the "),r("a",{attrs:{href:"https://developer.arm.com/documentation/ihi0031/a/The-Serial-Wire-Debug-Port--SW-DP-",target:"_blank",rel:"noopener noreferrer"}},[r("em",[t._v("Serial Wire Debug (SWD)")]),r("OutboundLink")],1),t._v(" interface and non-invasive profiling and high-bandwidth tracing via the "),r("a",{attrs:{href:"https://developer.arm.com/documentation/ddi0403/d/Appendices/Debug-ITM-and-DWT-Packet-Protocol?lang=en",target:"_blank",rel:"noopener noreferrer"}},[r("em",[t._v("Serial Wire Ouput (SWO)")]),r("OutboundLink")],1),t._v(" and "),r("a",{attrs:{href:"https://developer.arm.com/documentation/ihi0064/latest/",target:"_blank",rel:"noopener noreferrer"}},[r("em",[t._v("TRACE")]),t._v(" pins"),r("OutboundLink")],1),t._v(".")]),t._v(" "),r("p",[t._v("The SWD debug interface allows direct, low-level, hardware access to the microcontroller's processor and peripherals, so it does not depend on any software on the device. Therefore it can be used to debug bootloaders and operating systems such as NuttX.")]),t._v(" "),r("h2",{attrs:{id:"debug-signals"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#debug-signals"}},[t._v("#")]),t._v(" Debug Signals")]),t._v(" "),r("p",[t._v("Four signals are required for debugging (in bold) while the rest is recommended.")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",{staticStyle:{"text-align":"left"}},[t._v("Name")]),t._v(" "),r("th",{staticStyle:{"text-align":"left"}},[t._v("Type")]),t._v(" "),r("th",{staticStyle:{"text-align":"left"}},[t._v("参数描述")])])]),t._v(" "),r("tbody",[r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("strong",[t._v("GND")])]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("Power")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("Shared potential, common ground.")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("strong",[t._v("VREF")])]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("Power")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("The target reference voltage allows the debug probe to use level shifters on the signals.")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("strong",[t._v("SWDIO")])]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("I/O")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("Serial Wire Debug data pin.")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("strong",[t._v("SWCLK")])]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("Input")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("Serial Wire Debug clock pin.")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("nRST")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("Input")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("The reset pin is optional (n = active low).")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("SWO")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("输出")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("Single wire trace asynchronous data out can output ITM and DWT data.")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("TRACECK")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("输出")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("Trace clock for parallel bus.")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("TRACED[0-3]")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("输出")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("Trace synchronous data bus with 1, 2, or 4 bits.")])])])]),t._v(" "),r("p",[t._v("The hardware reset pin is optional, as most devices can also be reset via the SWD lines. However, quickly resetting the device via a button can be great for development.")]),t._v(" "),r("p",[t._v("The SWO pin can emit low-overhead, real-time profiling data with nanosecond timestamping and is therefore strongly recommended to have accessible for debugging.")]),t._v(" "),r("p",[t._v("The TRACE pins require specialized debug probes to deal with the high bandwidth and subsequent datastream decoding. They are usually not accessible and are typically only used to debug very specific timing issues.")]),t._v(" "),r("p",[r("a",{attrs:{id:"debug-ports"}})]),t._v(" "),r("h2",{attrs:{id:"autopilot-debug-ports"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#autopilot-debug-ports"}},[t._v("#")]),t._v(" Autopilot Debug Ports")]),t._v(" "),r("p",[t._v("Flight controllers commonly provide a single debug port that exposes both the "),r("a",{attrs:{href:"#debug-signals"}},[t._v("SWD Interface")]),t._v(" and "),r("a",{attrs:{href:"system_console"}},[t._v("System Console")]),t._v(".")]),t._v(" "),r("p",[t._v("The "),r("a",{attrs:{href:"#pixhawk-standard-debug-ports"}},[t._v("Pixhawk Connector Standards")]),t._v(" formalize the port that must be used in each FMU version. However there are still many boards that use different pinouts or connectors, so we recommend you check the "),r("RouterLink",{attrs:{to:"/zh/flight_controller/"}},[t._v("documentation for your autopilot")]),t._v(" to confirm port location and pinout.")],1),t._v(" "),r("p",[t._v("The debug port location and pinouts for a subset of autopilots are linked below:")]),t._v(" "),r("p",[r("a",{attrs:{id:"port-information"}})]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",{staticStyle:{"text-align":"left"}},[t._v("飞控")]),t._v(" "),r("th",{staticStyle:{"text-align":"left"}},[t._v("Debug调试端口")])])]),t._v(" "),r("tbody",[r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("Holybro Pixhawk 6X-RT (FMUv6X-RT)")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"#pixhawk-debug-full"}},[t._v("Pixhawk Debug Full")])])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("Holybro Pixhawk 6X (FMUv6x)")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"#pixhawk-debug-full"}},[t._v("Pixhawk Debug Full")])])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("Holybro Pixhawk 5X (FMUv5x)")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"#pixhawk-debug-full"}},[t._v("Pixhawk Debug Full")])])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("RouterLink",{attrs:{to:"/zh/flight_controller/durandal.html#debug-port"}},[t._v("Holybro Durandal")])],1),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"#pixhawk-debug-mini"}},[t._v("Pixhawk Debug Mini")])])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("RouterLink",{attrs:{to:"/zh/flight_controller/kakutef7.html#debug-port"}},[t._v("Holybro Kakute F7")])],1),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("Solder pads")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk4_mini.html#debug-port"}},[t._v("Holybro Pixhawk 4 Mini")]),t._v(" (FMUv5)")],1),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"#pixhawk-debug-mini"}},[t._v("Pixhawk Debug Mini")])])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk4.html#debug_port"}},[t._v("Holybro Pixhawk 4")]),t._v(" (FMUv5)")],1),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"#pixhawk-debug-mini"}},[t._v("Pixhawk Debug Mini")])])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk3_pro.html#debug-port"}},[t._v("Drotek Pixhawk 3 Pro")]),t._v(" (FMU-v4pro)")],1),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"#pixhawk-debug-mini"}},[t._v("Pixhawk Debug Mini")])])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("RouterLink",{attrs:{to:"/zh/flight_controller/cuav_v5_plus.html#debug-port"}},[t._v("CUAV V5+")])],1),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("6-pin JST GH"),r("br"),t._v("Digikey: "),r("a",{attrs:{href:"https://www.digikey.com/products/en?keywords=455-1582-1-ND",target:"_blank",rel:"noopener noreferrer"}},[t._v("BM06B-GHS-TBT(LF)(SN)(N)"),r("OutboundLink")],1),t._v(" (vertical mount), "),r("a",{attrs:{href:"https://www.digikey.com/products/en?keywords=455-1568-1-ND",target:"_blank",rel:"noopener noreferrer"}},[t._v("SM06B-GHS-TBT(LF)(SN)(N)"),r("OutboundLink")],1),t._v(" (side mount)")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("RouterLink",{attrs:{to:"/zh/flight_controller/cuav_v5_nano.html#debug_port"}},[t._v("CUAV V5nano")])],1),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("6-pin JST GH"),r("br"),t._v("Digikey: "),r("a",{attrs:{href:"https://www.digikey.com/products/en?keywords=455-1582-1-ND",target:"_blank",rel:"noopener noreferrer"}},[t._v("BM06B-GHS-TBT(LF)(SN)(N)"),r("OutboundLink")],1),t._v(" (vertical mount), "),r("a",{attrs:{href:"https://www.digikey.com/products/en?keywords=455-1568-1-ND",target:"_blank",rel:"noopener noreferrer"}},[t._v("SM06B-GHS-TBT(LF)(SN)(N)"),r("OutboundLink")],1),t._v(" (side mount)")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[r("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk.html#swd-port"}},[t._v("3DR Pixhawk")])],1),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("ARM 10-pin JTAG Connector (also used for FMUv2 boards including: "),r("em",[t._v("mRo Pixhawk")]),t._v(", "),r("em",[t._v("HobbyKing HKPilot32")]),t._v(").")])])])]),t._v(" "),r("p",[r("a",{attrs:{id:"pixhawk-standard-debug-ports"}})]),t._v(" "),r("h2",{attrs:{id:"pixhawk-connector-standard-debug-ports"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pixhawk-connector-standard-debug-ports"}},[t._v("#")]),t._v(" Pixhawk Connector Standard Debug Ports")]),t._v(" "),r("p",[t._v("The Pixhawk project has defines a standard pinout and connector type for different Pixhawk FMU releases:")]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),r("p",[t._v("Check your "),r("a",{attrs:{href:"#port-information"}},[t._v("specific board")]),t._v(" to confirm the port used.")])]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",{staticStyle:{"text-align":"left"}},[t._v("FMU Version")]),t._v(" "),r("th",{staticStyle:{"text-align":"left"}},[t._v("Pixhawk Version")]),t._v(" "),r("th",{staticStyle:{"text-align":"left"}},[t._v("Debug调试端口")])])]),t._v(" "),r("tbody",[r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("FMUv2")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk.html#swd-port"}},[t._v("Pixhawk / Pixhawk 1")])],1),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("10 pin ARM Debug")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("FMUv3")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("Pixhawk 2")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("6 pin SUR Debug")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("FMUv4")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("Pixhawk 1/2")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"#pixhawk-debug-mini"}},[t._v("Pixhawk Debug Mini")])])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("FMUv5")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("Pixhawk 4 FMUv5")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"#pixhawk-debug-mini"}},[t._v("Pixhawk Debug Mini")])])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("FMUv5X")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("Pixhawk 5X")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"#pixhawk-debug-full"}},[t._v("Pixhawk Debug Full")])])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("FMUv6")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("Pixhawk 6")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"#pixhawk-debug-full"}},[t._v("Pixhawk Debug Full")])])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("FMUv6X")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("Pixhawk 6X")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"#pixhawk-debug-full"}},[t._v("Pixhawk Debug Full")])])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[t._v("FMUv6X-RT")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("Pixhawk 6X-RT")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("a",{attrs:{href:"#pixhawk-debug-full"}},[t._v("Pixhawk Debug Full")])])])])]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),r("p",[t._v("There FMU and Pixhawk versions are (only) consistent after FMUv5X.")])]),t._v(" "),r("h3",{attrs:{id:"pixhawk-debug-mini"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pixhawk-debug-mini"}},[t._v("#")]),t._v(" Pixhawk Debug Mini")]),t._v(" "),r("p",[t._v("The "),r("a",{attrs:{href:"https://github.com/pixhawk/Pixhawk-Standards/blob/master/DS-009%20Pixhawk%20Connector%20Standard.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk Connector Standard"),r("OutboundLink")],1),t._v(" defines the "),r("em",[t._v("Pixhawk Debug Mini")]),t._v(", a "),r("em",[t._v("6-Pin SH Debug Port")]),t._v(" that provides access to both SWD pins and the "),r("a",{attrs:{href:"system_console"}},[t._v("System Console")]),t._v(".")]),t._v(" "),r("p",[t._v("This is used in FMUv4 and FMUv5.")]),t._v(" "),r("p",[t._v("The pinout is as shown below (pins required for debugging are bold):")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",{staticStyle:{"text-align":"right"}},[t._v("针脚")]),t._v(" "),r("th",{staticStyle:{"text-align":"left"}},[t._v("信号")])])]),t._v(" "),r("tbody",[r("tr",[r("td",{staticStyle:{"text-align":"right"}},[t._v("1")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("strong",[t._v("VREF")])])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"right"}},[t._v("2")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("Console TX")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"right"}},[t._v("3")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("Console RX")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"right"}},[t._v("4")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("strong",[t._v("SWDIO")])])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"right"}},[t._v("5")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("strong",[t._v("SWDCLK")])])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"right"}},[t._v("6")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("strong",[t._v("GND")])])])])]),t._v(" "),r("p",[t._v("The debug port definition includes the following solder pads (on board next to connector):")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",{staticStyle:{"text-align":"right"}},[t._v("Pad")]),t._v(" "),r("th",{staticStyle:{"text-align":"left"}},[t._v("信号")]),t._v(" "),r("th",{staticStyle:{"text-align":"left"}},[t._v("Voltage")])])]),t._v(" "),r("tbody",[r("tr",[r("td",{staticStyle:{"text-align":"right"}},[t._v("1")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("nRST")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("+3.3V")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"right"}},[t._v("2")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("GPIO1")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("+3.3V")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"right"}},[t._v("3")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("GPIO2")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("+3.3V")])])])]),t._v(" "),r("p",[t._v("The socket is a "),r("em",[t._v("6-pin JST SH")]),t._v(" - Digikey number: "),r("a",{attrs:{href:"https://www.digikey.com/products/en?keywords=455-2875-1-ND",target:"_blank",rel:"noopener noreferrer"}},[t._v("BM06B-SRSS-TBT(LF)(SN)"),r("OutboundLink")],1),t._v(" (vertical mount), "),r("a",{attrs:{href:"https://www.digikey.com/products/en?keywords=455-1806-1-ND",target:"_blank",rel:"noopener noreferrer"}},[t._v("SM06B-SRSS-TBT(LF)(SN)"),r("OutboundLink")],1),t._v("(side mount).")]),t._v(" "),r("p",[t._v("You can connect to the debug port using a "),r("a",{attrs:{href:"https://www.digikey.com/products/en?keywords=A06SR06SR30K152A",target:"_blank",rel:"noopener noreferrer"}},[t._v("cable like this one"),r("OutboundLink")],1),t._v(".")]),t._v(" "),r("p",[r("img",{attrs:{src:a(749),alt:"6-pin JST SH Cable"}})]),t._v(" "),r("h3",{attrs:{id:"pixhawk-debug-full"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pixhawk-debug-full"}},[t._v("#")]),t._v(" Pixhawk Debug Full")]),t._v(" "),r("p",[t._v("The "),r("a",{attrs:{href:"https://github.com/pixhawk/Pixhawk-Standards/blob/master/DS-009%20Pixhawk%20Connector%20Standard.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk Connector Standard"),r("OutboundLink")],1),t._v(" defines "),r("em",[t._v("Pixhawk Debug Full")]),t._v(", a "),r("em",[t._v("10-Pin SH Debug Port")]),t._v(" that provides access to both SWD pins and the "),r("a",{attrs:{href:"system_console"}},[t._v("System Console")]),t._v(". This essentially moves the solder pads from beside the "),r("a",{attrs:{href:"#pixhawk-debug-mini"}},[t._v("Pixhawk Debug Mini")]),t._v(" into the connector, and also adds an SWO pin.")]),t._v(" "),r("p",[t._v("该端口指定用于FMUv5x, FMUv6, FMUv6x。")]),t._v(" "),r("p",[t._v("The pinout is as shown below (pins required for debugging are bold):")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",{staticStyle:{"text-align":"right"}},[t._v("针脚")]),t._v(" "),r("th",{staticStyle:{"text-align":"left"}},[t._v("信号")])])]),t._v(" "),r("tbody",[r("tr",[r("td",{staticStyle:{"text-align":"right"}},[t._v("1")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("strong",[t._v("VREF")])])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"right"}},[t._v("2")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("Console TX")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"right"}},[t._v("3")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("Console RX")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"right"}},[t._v("4")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("strong",[t._v("SWDIO")])])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"right"}},[t._v("5")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("strong",[t._v("SWDCLK")])])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"right"}},[t._v("6")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("SWO")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"right"}},[t._v("7")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("GPIO1")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"right"}},[t._v("8")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("GPIO2")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"right"}},[t._v("9")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("nRST")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"right"}},[t._v("10")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[r("strong",[t._v("GND")])])])])]),t._v(" "),r("p",[t._v("The GPIO1/2 pins are free pins that can be used to generate signals in software for timing analysis with a logic analyzer.")]),t._v(" "),r("p",[t._v("The socket is a "),r("em",[t._v("10-pin JST SH")]),t._v(" - Digikey number: "),r("a",{attrs:{href:"https://www.digikey.com/products/en?keywords=455-1796-2-ND",target:"_blank",rel:"noopener noreferrer"}},[t._v("BM10B-SRSS-TB(LF)(SN)"),r("OutboundLink")],1),t._v(" (vertical mount) or "),r("a",{attrs:{href:"https://www.digikey.com/products/en?keywords=455-1810-2-ND",target:"_blank",rel:"noopener noreferrer"}},[t._v("SM10B-SRSS-TB(LF)(SN)"),r("OutboundLink")],1),t._v(" (side mount).")]),t._v(" "),r("p",[t._v("您可以连接到调试端口使用"),r("a",{attrs:{href:"https://www.digikey.com/products/en?keywords=A10SR10SR30K203A",target:"_blank",rel:"noopener noreferrer"}},[t._v("像这样"),r("OutboundLink")],1),t._v("的电缆。")]),t._v(" "),r("p",[r("img",{attrs:{src:a(750),alt:"10-pin JST SH Cable"}})]),t._v(" "),r("p",[r("a",{attrs:{id:"debug-probes"}})]),t._v(" "),r("h2",{attrs:{id:"debug-probes-for-px4-hardware"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#debug-probes-for-px4-hardware"}},[t._v("#")]),t._v(" Debug Probes for PX4 Hardware")]),t._v(" "),r("p",[t._v("Flight controllers commonly provide a "),r("a",{attrs:{href:"#autopilot-debug-ports"}},[t._v("single debug port")]),t._v(" that exposes both the "),r("a",{attrs:{href:"#debug-signals"}},[t._v("SWD Interface")]),t._v(" and "),r("a",{attrs:{href:"system_console"}},[t._v("System Console")]),t._v(".")]),t._v(" "),r("p",[t._v("There are several debug probes that are tested and supported for connecting to one or both of these interfaces:")]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/zh/debug/probe_jlink.html"}},[t._v("SEGGER J-Link")]),t._v(": commercial probe, no built-in serial console, requires adapter.")],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/zh/debug/probe_bmp.html"}},[t._v("Black Magic Probe")]),t._v(": integrated GDB server and serial console, requires adapter.")],1),t._v(" "),r("li",[r("a",{attrs:{href:"../debug/probe_stlink"}},[t._v("STLink")]),t._v(": best value, integrated serial console, adapter must be soldered.")]),t._v(" "),r("li",[r("a",{attrs:{href:"../debug/probe_mculink"}},[t._v("MCU-Link")]),t._v(": best value, integrated serial console, requires adapter.")])]),t._v(" "),r("p",[t._v("An adapter to connect to the debug port may come with your flight controller or debug probe. Other options are given below.")]),t._v(" "),r("h2",{attrs:{id:"debug-adapters"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#debug-adapters"}},[t._v("#")]),t._v(" Debug Adapters")]),t._v(" "),r("h3",{attrs:{id:"holybro-pixhawk-debug-adapter"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#holybro-pixhawk-debug-adapter"}},[t._v("#")]),t._v(" Holybro Pixhawk Debug Adapter")]),t._v(" "),r("p",[t._v("The "),r("a",{attrs:{href:"https://holybro.com/products/pixhawk-debug-adapter",target:"_blank",rel:"noopener noreferrer"}},[t._v("Holybro Pixhawk Debug Adapter"),r("OutboundLink")],1),t._v(" is "),r("em",[t._v("highly recommended")]),t._v(" when debugging controllers that use one of the Pixhawk-standard debug connectors.")]),t._v(" "),r("p",[t._v("It is the easiest way to connect:")]),t._v(" "),r("ul",[r("li",[t._v("Flight controllers that use either the "),r("a",{attrs:{href:"#pixhawk-debug-full"}},[t._v("Pixhawk Debug Full")]),t._v(" (10-pin SH) or "),r("a",{attrs:{href:"#pixhawk-debug-mini"}},[t._v("Pixhawk Debug Mini")]),t._v(" (6-pin SH) debug port.")]),t._v(" "),r("li",[t._v("SWD debug probes that support the 10-pin ARM compatible interface standard used by the "),r("RouterLink",{attrs:{to:"/zh/debug/probe_jlink.html"}},[t._v("Segger JLink EDU mini")]),t._v(" or 20-pin compatible with the Segger JLink or STLink.")],1)]),t._v(" "),r("p",[r("img",{attrs:{src:a(751),alt:"Holybro Pixhawk Debug Adapter"}})]),t._v(" "),r("h3",{attrs:{id:"cuav-c-adb-pixhawk-debug-adapter"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cuav-c-adb-pixhawk-debug-adapter"}},[t._v("#")]),t._v(" CUAV C-ADB Pixhawk Debug Adapter")]),t._v(" "),r("p",[t._v("The "),r("a",{attrs:{href:"https://store.cuav.net/shop/cuav-c-adb/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CUAV C-ADB Secondary Development Pixhawk Flight Controller Debug Adapter"),r("OutboundLink")],1),t._v(" comes with an "),r("RouterLink",{attrs:{to:"/zh/debug/probe_stlink.html"}},[t._v("STLinkv3-MINIE Debug Probe")]),t._v(".")],1),t._v(" "),r("p",[t._v("This has a ports for connecting to the "),r("a",{attrs:{href:"#pixhawk-debug-full"}},[t._v("Pixhawk Debug Full")]),t._v(" (10-pin SH) and CUAV-standard DSU interface (but not the "),r("RouterLink",{attrs:{to:"/zh/debug/swd_debug.html#pixhawk-debug-mini"}},[t._v("Pixhawk Debug Mini")]),t._v(" (6-pin SH)).")],1),t._v(" "),r("p",[t._v("The M2 connector on the adaptor is 14-pin CN4 STDC14 (see the "),r("a",{attrs:{href:"https://www.st.com/resource/en/user_manual/um2910-stlinkv3minie-debuggerprogrammer-tiny-probe-for-stm32-microcontrollers-stmicroelectronics.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("STLinkv3-MINIE User Manual"),r("OutboundLink")],1),t._v(" for more information). The cable used to connect the M2 and the STLinkv3-MINIE comes with the adaptor.")]),t._v(" "),r("p",[r("img",{attrs:{src:a(752),alt:"CUAV C-ADB adaptor connected to the STLinkv3-MINIE"}})]),t._v(" "),r("h3",{attrs:{id:"debug-probe-adapters"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#debug-probe-adapters"}},[t._v("#")]),t._v(" Debug Probe Adapters")]),t._v(" "),r("p",[t._v("Some SWD "),r("a",{attrs:{href:"#debug-probes"}},[t._v("debug probes")]),t._v(" come with adapters/cables for connecting to common Pixhawk "),r("a",{attrs:{href:"#debug-ports"}},[t._v("debug ports")]),t._v(". Probes that are known to come with connectors are listed below:")]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/zh/debug/probe_bmp.html#dronecode-probe"}},[t._v("DroneCode Probe")]),t._v(": comes with a connector for attaching to the "),r("a",{attrs:{href:"#pixhawk-debug-mini"}},[t._v("Pixhawk Debug Mini")])],1)]),t._v(" "),r("h3",{attrs:{id:"board-specific-adapters"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#board-specific-adapters"}},[t._v("#")]),t._v(" Board-specific Adapters")]),t._v(" "),r("p",[t._v("Some manufacturers provide cables to make it easy to connect the SWD interface and "),r("a",{attrs:{href:"../debug/system_console"}},[t._v("System Console")]),t._v(".")]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/zh/flight_controller/cuav_v5_nano.html#debug_port"}},[t._v("CUAV V5nano")]),t._v(" and "),r("RouterLink",{attrs:{to:"/zh/flight_controller/cuav_v5_plus.html#debug-port"}},[t._v("CUAV V5+")]),t._v(" include this debug cable:")],1)]),t._v(" "),r("p",[r("img",{attrs:{src:a(753),alt:"6-pin JST SH Cable"}})]),t._v(" "),r("h3",{attrs:{id:"custom-cables"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#custom-cables"}},[t._v("#")]),t._v(" Custom Cables")]),t._v(" "),r("p",[t._v("You can also create custom cables for connecting to different boards or probes:")]),t._v(" "),r("ul",[r("li",[t._v("Connect "),r("code",[t._v("SWDIO")]),t._v(", "),r("code",[t._v("SWCLK")]),t._v(" and "),r("code",[t._v("GND")]),t._v(" pins on the debug probe to the corresponding pins on the debug port.")]),t._v(" "),r("li",[t._v("Connect the VREF pin, if supported by the debug probe.")]),t._v(" "),r("li",[t._v("Connect the remaining pins, if present.")])]),t._v(" "),r("p",[t._v("See the "),r("a",{attrs:{href:"probe_stlink"}},[t._v("STLinkv3-MINIE")]),t._v(" for a guide on how to solder a custom cable.")]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),r("p",[t._v("Where possible, we highly recommend that you create or obtain an adapter board rather than custom cables for connecting to SWD/JTAG debuggers and computers.\nThis reduces the risk or poor wiring contributing to debugging problems, and has the benefit that adapters usually provide a common interface for connecting to multiple popular flight controller boards.")])])])}),[],!1,null,null,null);e.default=i.exports},749:function(t,e){t.exports="data:image/jpeg;base64,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"},750:function(t,e,a){t.exports=a.p+"assets/img/cable_10pin_jst_sh.0e508b1c.jpg"},751:function(t,e,a){t.exports=a.p+"assets/img/holybro_pixhawk_debug_adapter.b99eb6ac.png"},752:function(t,e,a){t.exports=a.p+"assets/img/hero.0002762c.jpg"},753:function(t,e,a){t.exports=a.p+"assets/img/cuav_v5_debug_cable.c6d410bf.jpg"}}]);