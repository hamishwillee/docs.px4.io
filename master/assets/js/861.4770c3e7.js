(window.webpackJsonp=window.webpackJsonp||[]).push([[861],{1768:function(t,e,r){"use strict";r.r(e);var o=r(19),a=Object(o.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"flight-controller-porting-guide"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#flight-controller-porting-guide"}},[t._v("#")]),t._v(" Flight Controller Porting Guide")]),t._v(" "),r("p",[t._v("This topic is for developers who want to port PX4 to work with "),r("em",[t._v("new")]),t._v(" flight controller hardware.")]),t._v(" "),r("h2",{attrs:{id:"px4-architecture"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#px4-architecture"}},[t._v("#")]),t._v(" PX4 Architecture")]),t._v(" "),r("p",[t._v("PX4 consists of two main layers: The "),r("RouterLink",{attrs:{to:"/en/middleware/"}},[t._v("board support and middleware layer")]),t._v(" on top of the host OS (NuttX, Linux or any other POSIX platform like Mac OS), and the applications (Flight Stack in "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/modules",target:"_blank",rel:"noopener noreferrer"}},[t._v("src/modules"),r("OutboundLink")],1),t._v(").  Please reference the "),r("RouterLink",{attrs:{to:"/en/concept/architecture.html"}},[t._v("PX4 Architectural Overview")]),t._v(" for more information.")],1),t._v(" "),r("p",[t._v("This guide is focused only on the host OS and middleware as the applications/flight stack will run on any board target.")]),t._v(" "),r("h2",{attrs:{id:"flight-controller-configuration-file-layout"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#flight-controller-configuration-file-layout"}},[t._v("#")]),t._v(" Flight Controller Configuration File Layout")]),t._v(" "),r("p",[t._v("Board startup and configuration files are located under "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/boards/",target:"_blank",rel:"noopener noreferrer"}},[t._v("/boards"),r("OutboundLink")],1),t._v(" in each board's vendor-specific directory (i.e. "),r("strong",[t._v("boards/"),r("em",[t._v("VENDOR")]),t._v("/"),r("em",[t._v("MODEL")]),t._v("/")]),t._v(")).")]),t._v(" "),r("p",[t._v("For example, for FMUv5:")]),t._v(" "),r("ul",[r("li",[t._v("(All) Board-specific files: "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/boards/px4/fmu-v5",target:"_blank",rel:"noopener noreferrer"}},[t._v("/boards/px4/fmu-v5"),r("OutboundLink")],1),t._v(".")]),t._v(" "),r("li",[t._v("Build configuration: "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/boards/px4/fmu-v5/default.px4board",target:"_blank",rel:"noopener noreferrer"}},[t._v("/boards/px4/fmu-v5/default.px4board"),r("OutboundLink")],1),t._v(".")]),t._v(" "),r("li",[t._v("Board-specific initialisation file: "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/boards/px4/fmu-v5/init/rc.board_defaults",target:"_blank",rel:"noopener noreferrer"}},[t._v("/boards/px4/fmu-v5/init/rc.board_defaults"),r("OutboundLink")],1),t._v(" "),r("ul",[r("li",[t._v("A board-specific initialisation file is automatically included in startup scripts if found under the boards directory at "),r("strong",[t._v("init/rc.board")]),t._v(".")]),t._v(" "),r("li",[t._v("The file is used to start sensors (and other things) that only exist on a particular board.\nIt may also be used to set a board's default parameters, UART mappings, and any other special cases.")]),t._v(" "),r("li",[t._v("For FMUv5 you can see all the Pixhawk 4 sensors being started, and it also sets a larger LOGGER_BUF.")])])])]),t._v(" "),r("h2",{attrs:{id:"host-operating-system-configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#host-operating-system-configuration"}},[t._v("#")]),t._v(" Host Operating System Configuration")]),t._v(" "),r("p",[t._v("This section describes the purpose and location of the configuration files required for each supported host operating system to port them to new flight controller hardware.")]),t._v(" "),r("h3",{attrs:{id:"nuttx"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#nuttx"}},[t._v("#")]),t._v(" NuttX")]),t._v(" "),r("p",[t._v("See "),r("RouterLink",{attrs:{to:"/en/hardware/porting_guide_nuttx.html"}},[t._v("NuttX Board Porting Guide")]),t._v(".")],1),t._v(" "),r("h3",{attrs:{id:"linux"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#linux"}},[t._v("#")]),t._v(" Linux")]),t._v(" "),r("p",[t._v("Linux boards do not include the OS and kernel configuration.\nThese are already provided by the Linux image available for the board (which needs to support the inertial sensors out of the box).")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/boards/px4/raspberrypi/default.px4board",target:"_blank",rel:"noopener noreferrer"}},[t._v("boards/px4/raspberrypi/default.px4board"),r("OutboundLink")],1),t._v(" - RPI cross-compilation. ")])]),t._v(" "),r("h2",{attrs:{id:"middleware-components-and-configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#middleware-components-and-configuration"}},[t._v("#")]),t._v(" Middleware Components and Configuration")]),t._v(" "),r("p",[t._v("This section describes the various middleware components, and the configuration file updates needed to port them to new flight controller hardware.")]),t._v(" "),r("h3",{attrs:{id:"qurt-hexagon"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#qurt-hexagon"}},[t._v("#")]),t._v(" QuRT / Hexagon")]),t._v(" "),r("ul",[r("li",[t._v("The start script is located in "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/posix-configs",target:"_blank",rel:"noopener noreferrer"}},[t._v("posix-configs/"),r("OutboundLink")],1),t._v(". ")]),t._v(" "),r("li",[t._v("The OS configuration is part of the default Linux image (TODO: Provide location of LINUX IMAGE and flash instructions).")]),t._v(" "),r("li",[t._v("The PX4 middleware configuration is located in "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/boards",target:"_blank",rel:"noopener noreferrer"}},[t._v("src/boards"),r("OutboundLink")],1),t._v(". "),t._v(" TODO: ADD BUS CONFIG")])]),t._v(" "),r("h2",{attrs:{id:"rc-uart-wiring-recommendations"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rc-uart-wiring-recommendations"}},[t._v("#")]),t._v(" RC UART Wiring Recommendations")]),t._v(" "),r("p",[t._v("It is generally recommended to connect RC via separate RX and TX pins to the microcontroller.\nIf however RX and TX are connected together, the UART has to be put into singlewire mode to prevent any contention.\nThis is done via board config and manifest files.\nOne example is "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/boards/px4/fmu-v5/src/manifest.c",target:"_blank",rel:"noopener noreferrer"}},[t._v("px4fmu-v5"),r("OutboundLink")],1),t._v(". ")]),t._v(" "),r("h2",{attrs:{id:"officially-supported-hardware"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#officially-supported-hardware"}},[t._v("#")]),t._v(" Officially Supported Hardware")]),t._v(" "),r("p",[t._v("The PX4 project supports and maintains the "),r("RouterLink",{attrs:{to:"/en/hardware/reference_design.html"}},[t._v("FMU standard reference hardware")]),t._v(" and any boards that are compatible with the standard.\nThis includes the "),r("RouterLink",{attrs:{to:"/en/flight_controller/pixhawk_series.html"}},[t._v("Pixhawk-series")]),t._v(" (see the user guide for a "),r("RouterLink",{attrs:{to:"/en/flight_controller/"}},[t._v("full list of officially supported hardware")]),t._v(").")],1),t._v(" "),r("p",[t._v("Every officially supported board benefits from:")]),t._v(" "),r("ul",[r("li",[t._v("PX4 Port available in the PX4 repository")]),t._v(" "),r("li",[t._v("Automatic firmware builds that are accessible from "),r("em",[t._v("QGroundControl")])]),t._v(" "),r("li",[t._v("Compatibility with the rest of the ecosystem")]),t._v(" "),r("li",[t._v("Automated checks via CI - safety remains paramount to this community")]),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/en/test_and_ci/test_flights.html"}},[t._v("Flight testing")])],1)]),t._v(" "),r("p",[t._v("We encourage board manufacturers to aim for full compatibility with the "),r("a",{attrs:{href:"https://pixhawk.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("FMU spec"),r("OutboundLink")],1),t._v(".\nWith full compatibility you benefit from the ongoing day-to-day development of PX4, but have none of the maintenance costs that come from supporting deviations from the specification.")]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[t._v("Manufacturers should carefully consider the cost of maintenance before deviating from the specification (the cost to the manufacturer is proportional to the level of divergence).")])]),t._v(" "),r("p",[t._v("We welcome any individual or company to submit their port for inclusion in our supported hardware, provided they are willing to follow our "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/CODE_OF_CONDUCT.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("Code of Conduct"),r("OutboundLink")],1),t._v(" and work with the Dev Team to provide a safe and fulfilling PX4 experience to their customers.")]),t._v(" "),r("p",[t._v("It's also important to note that the PX4 dev team has a responsibility to release safe software, and as such we require any board manufacturer to commit any resources necessary to keep their port up-to-date, and in a working state.")]),t._v(" "),r("p",[t._v("If you want to have your board officially supported in PX4:")]),t._v(" "),r("ul",[r("li",[t._v("Your hardware must be available in the market (i.e. it can be purchased by any developer without restriction).")]),t._v(" "),r("li",[t._v("Hardware must be made available to the PX4 Dev Team so that they can validate the port (contact "),r("a",{attrs:{href:"mailto:lorenz@px4.io"}},[t._v("lorenz@px4.io")]),t._v(" for guidance on where to ship hardware for testing).")]),t._v(" "),r("li",[t._v("The board must pass full "),r("RouterLink",{attrs:{to:"/en/test_and_ci/"}},[t._v("test suite")]),t._v(" and "),r("RouterLink",{attrs:{to:"/en/test_and_ci/test_flights.html"}},[t._v("flight testing")]),t._v(".")],1)]),t._v(" "),r("p",[r("strong",[t._v("The PX4 project reserves the right to refuse acceptance of new ports (or remove current ports) for failure to meet the requirements set by the project.")])]),t._v(" "),r("p",[t._v("You can reach out to the core developer team and community on the "),r("RouterLink",{attrs:{to:"/en/contribute/support.html"}},[t._v("official support channels")]),t._v(".")],1),t._v(" "),r("h2",{attrs:{id:"related-information"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#related-information"}},[t._v("#")]),t._v(" Related Information")]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/en/middleware/drivers.html"}},[t._v("Device Drivers")]),t._v(" - How to support new peripheral hardware (device drivers)")],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/en/dev_setup/building_px4.html"}},[t._v("Building the Code")]),t._v(" - How to build source and upload firmware")],1),t._v(" "),r("li",[t._v("Supported Flight Controllers:\n"),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/en/flight_controller/"}},[t._v("Autopilot Hardware")])],1),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/#supported-hardware",target:"_blank",rel:"noopener noreferrer"}},[t._v("Supported boards list"),r("OutboundLink")],1),t._v(" (Github) - Boards for which PX4-Autopilot has specific code")])])]),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/en/peripherals/"}},[t._v("Supported Peripherals")])],1)])])}),[],!1,null,null,null);e.default=a.exports}}]);