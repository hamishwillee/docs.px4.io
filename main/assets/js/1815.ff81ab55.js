(window.webpackJsonp=window.webpackJsonp||[]).push([[1815],{3452:function(t,e,r){"use strict";r.r(e);var a=r(19),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"飞行控制器移植指南"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#飞行控制器移植指南"}},[t._v("#")]),t._v(" 飞行控制器移植指南")]),t._v(" "),r("p",[t._v("本主题主要针对希望将 PX4 移植到 "),r("em",[t._v("新")]),t._v(" 飞控硬件平台上的开发人员。")]),t._v(" "),r("h2",{attrs:{id:"px4-架构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#px4-架构"}},[t._v("#")]),t._v(" PX4 架构")]),t._v(" "),r("p",[t._v("PX4 consists of two main layers: The "),r("RouterLink",{attrs:{to:"/zh/middleware/"}},[t._v("board support and middleware layer")]),t._v(" on top of the host OS (NuttX, Linux or any other POSIX platform like Mac OS), and the applications (Flight Stack in "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/src/modules",target:"_blank",rel:"noopener noreferrer"}},[t._v("src/modules"),r("OutboundLink")],1),t._v(").  更多有关详细信息请参阅： "),r("RouterLink",{attrs:{to:"/zh/concept/architecture.html"}},[t._v("PX4 系统架构概述")]),t._v(" 。")],1),t._v(" "),r("p",[t._v("本指南仅关注主机操作系统和中间件，因为 应用层/飞行控制栈 可以在任何目标平台上运行。")]),t._v(" "),r("h2",{attrs:{id:"飞行控制器配置文件分布位置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#飞行控制器配置文件分布位置"}},[t._v("#")]),t._v(" 飞行控制器配置文件分布位置")]),t._v(" "),r("p",[t._v("Board startup and configuration files are located under "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/boards/",target:"_blank",rel:"noopener noreferrer"}},[t._v("/boards"),r("OutboundLink")],1),t._v(" in each board's vendor-specific directory (i.e. "),r("strong",[t._v("boards/"),r("em",[t._v("VENDOR")]),t._v("/"),r("em",[t._v("MODEL")]),t._v("/")]),t._v(")).")]),t._v(" "),r("p",[t._v("例如，对于 FMUv5 飞控硬件平台：")]),t._v(" "),r("ul",[r("li",[t._v("(All) Board-specific files: "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/boards/px4/fmu-v5",target:"_blank",rel:"noopener noreferrer"}},[t._v("/boards/px4/fmu-v5"),r("OutboundLink")],1),t._v(".")]),t._v(" "),r("li",[t._v("Build configuration: "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/boards/px4/fmu-v5/default.px4board",target:"_blank",rel:"noopener noreferrer"}},[t._v("/boards/px4/fmu-v5/default.px4board"),r("OutboundLink")],1),t._v(".")]),t._v(" "),r("li",[t._v("Board-specific initialisation file: "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/boards/px4/fmu-v5/init/rc.board_defaults",target:"_blank",rel:"noopener noreferrer"}},[t._v("/boards/px4/fmu-v5/init/rc.board_defaults"),r("OutboundLink")],1),t._v(" "),r("ul",[r("li",[t._v("如果在飞控板平台目录下可以找到 "),r("strong",[t._v("init/rc.board")]),t._v(" 文件，则针对该飞控板平台的初始化文件将会自动包含在启动脚本中。")]),t._v(" "),r("li",[t._v("该文件用于启动仅存在于特定主板上的传感器 (和其他东西)。 The file is used to start sensors (and other things) that only exist on a particular board. It may also be used to set a board's default parameters, UART mappings, and any other special cases.")]),t._v(" "),r("li",[t._v("For FMUv5 you can see all the Pixhawk 4 sensors being started, and it also sets a larger LOGGER_BUF, and in AUTOCNF section (fresh setups) it sets the "),r("RouterLink",{attrs:{to:"/zh/advanced/parameter_reference.html#SYS_FMU_TASK"}},[t._v("SYS_FMU_TASK")]),t._v(" parameter.")],1)])])]),t._v(" "),r("h2",{attrs:{id:"主机操作系统配置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#主机操作系统配置"}},[t._v("#")]),t._v(" 主机操作系统配置")]),t._v(" "),r("p",[t._v("本节介绍了移植每个受支持的主机操作系统到新的飞控板硬件平台上需要用到的配置文件的用途和所处位置。")]),t._v(" "),r("h3",{attrs:{id:"nuttx"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#nuttx"}},[t._v("#")]),t._v(" NuttX")]),t._v(" "),r("p",[t._v("See "),r("RouterLink",{attrs:{to:"/zh/hardware/porting_guide_nuttx.html"}},[t._v("NuttX Board Porting Guide")]),t._v(".")],1),t._v(" "),r("h3",{attrs:{id:"linux"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#linux"}},[t._v("#")]),t._v(" Linux")]),t._v(" "),r("p",[t._v("基于 Linux 的飞控板不包含任何 操作系统和内核的配置。 Linux boards do not include the OS and kernel configuration. These are already provided by the Linux image available for the board (which needs to support the inertial sensors out of the box).")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/boards/px4/raspberrypi/default.px4board",target:"_blank",rel:"noopener noreferrer"}},[t._v("boards/px4/raspberrypi/default.px4board"),r("OutboundLink")],1),t._v(" - RPI cross-compilation. ")])]),t._v(" "),r("h2",{attrs:{id:"中间件组件和配置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#中间件组件和配置"}},[t._v("#")]),t._v(" 中间件组件和配置")]),t._v(" "),r("p",[t._v("本节介绍各类中间件组件，以及将它们移植到新的飞行控制器硬件所需更新的配置文件。")]),t._v(" "),r("h3",{attrs:{id:"qurt-hexagon"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#qurt-hexagon"}},[t._v("#")]),t._v(" QuRT / Hexagon")]),t._v(" "),r("ul",[r("li",[t._v("The start script is located in "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/posix-configs",target:"_blank",rel:"noopener noreferrer"}},[t._v("posix-configs/"),r("OutboundLink")],1),t._v(". ")]),t._v(" "),r("li",[t._v("操作系统配置是默认 Linux 镜像的一部分（TODO: 需要提供 LINUX 镜像文件位置和程序烧写指南）。")]),t._v(" "),r("li",[t._v("The PX4 middleware configuration is located in "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/boards",target:"_blank",rel:"noopener noreferrer"}},[t._v("src/boards"),r("OutboundLink")],1),t._v(". "),t._v(" TODO: ADD BUS CONFIG")])]),t._v(" "),r("h2",{attrs:{id:"rc-uart-接线建议"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rc-uart-接线建议"}},[t._v("#")]),t._v(" RC UART 接线建议")]),t._v(" "),r("p",[t._v("It is generally recommended to connect RC via separate RX and TX pins to the microcontroller. If however RX and TX are connected together, the UART has to be put into singlewire mode to prevent any contention. This is done via board config and manifest files. One example is "),r("a",{attrs:{href:"https://github.com/PX4/Firmware/blob/master/src/drivers/boards/px4fmu-v5/manifest.c",target:"_blank",rel:"noopener noreferrer"}},[t._v("px4fmu-v5"),r("OutboundLink")],1),t._v(". 如果 RX 和 TX 连在了一起，那么 UART 需要设置为单线模式以防止出现争用。 这可以用过对飞控板的配置文件和 manifest 文件进行更改来实现。 One example is "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/boards/px4/fmu-v5/src/manifest.c",target:"_blank",rel:"noopener noreferrer"}},[t._v("px4fmu-v5"),r("OutboundLink")],1),t._v(". ")]),t._v(" "),r("h2",{attrs:{id:"官方支持的硬件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#官方支持的硬件"}},[t._v("#")]),t._v(" 官方支持的硬件")]),t._v(" "),r("p",[t._v("PX4 项目支持并维护着 "),r("RouterLink",{attrs:{to:"/zh/hardware/reference_design.html"}},[t._v("FMU 标准参考硬件")]),t._v(" 及任何与标准相兼容的飞控板平台。 This includes the "),r("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk_series.html"}},[t._v("Pixhawk-series")]),t._v(" (see the user guide for a "),r("RouterLink",{attrs:{to:"/zh/flight_controller/"}},[t._v("full list of officially supported hardware")]),t._v(").")],1),t._v(" "),r("p",[t._v("每个受官方支持的飞控板平台都将受益于：")]),t._v(" "),r("ul",[r("li",[t._v("PX4 项目仓库中可用的 PX4 移植")]),t._v(" "),r("li",[t._v("可从 "),r("em",[t._v("QGroundControl")]),t._v(" 中直接访问的自动固件编译")]),t._v(" "),r("li",[t._v("与生态系统其余部分的兼容性")]),t._v(" "),r("li",[t._v("可通过 CI 进行自动检查 — 安全仍是这个社区的重中之重")]),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/zh/test_and_ci/test_flights.html"}},[t._v("飞行测试")])],1)]),t._v(" "),r("p",[t._v("我们鼓励飞控板制造商以与 "),r("a",{attrs:{href:"https://pixhawk.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("FMU 规格"),r("OutboundLink")],1),t._v(" 完全兼容为目标进行生产。 We encourage board manufacturers to aim for full compatibility with the "),r("a",{attrs:{href:"https://pixhawk.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("FMU spec"),r("OutboundLink")],1),t._v(". With full compatibility you benefit from the ongoing day-to-day development of PX4, but have none of the maintenance costs that come from supporting deviations from the specification.")]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),r("p",[t._v("Manufacturers should carefully consider the cost of maintenance before deviating from the specification (the cost to the manufacturer is proportional to the level of divergence).")])]),t._v(" "),r("p",[t._v("We welcome any individual or company to submit their port for inclusion in our supported hardware, provided they are willing to follow our "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/CODE_OF_CONDUCT.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("Code of Conduct"),r("OutboundLink")],1),t._v(" and work with the Dev Team to provide a safe and fulfilling PX4 experience to their customers.")]),t._v(" "),r("p",[t._v("如果你想让你的飞控板被 PX4 项目正式支持：")]),t._v(" "),r("p",[t._v("If you want to have your board officially supported in PX4:")]),t._v(" "),r("ul",[r("li",[t._v("你的硬件必须在市场上可用（例如它可以被任何开发人员不受限制地购买到） 。")]),t._v(" "),r("li",[t._v("Hardware must be made available to the PX4 Dev Team so that they can validate the port (contact "),r("a",{attrs:{href:"mailto:lorenz@px4.io"}},[t._v("lorenz@px4.io")]),t._v(" for guidance on where to ship hardware for testing).")]),t._v(" "),r("li",[t._v("飞控板必须通过完整的 "),r("RouterLink",{attrs:{to:"/zh/test_and_ci/"}},[t._v("测试套件（test suite）")]),t._v(" 和 "),r("RouterLink",{attrs:{to:"/zh/test_and_ci/test_flights.html"}},[t._v("飞行测试")]),t._v("。")],1)]),t._v(" "),r("p",[r("strong",[t._v("The PX4 project reserves the right to refuse acceptance of new ports (or remove current ports) for failure to meet the requirements set by the project.")])]),t._v(" "),r("p",[t._v("You can reach out to the core developer team and community on the "),r("RouterLink",{attrs:{to:"/zh/contribute/support.html"}},[t._v("official support channels")]),t._v(".")],1),t._v(" "),r("h2",{attrs:{id:"相关信息"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#相关信息"}},[t._v("#")]),t._v(" 相关信息")]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/zh/middleware/drivers.html"}},[t._v("Device Drivers")]),t._v(" - 如何支持新的外围硬件设备（设备驱动）")],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/zh/setup/building_px4.html"}},[t._v("Building the Code")]),t._v(" - How to build source and upload firmware")],1),t._v(" "),r("li",[t._v("受支持的飞行控制器：\n"),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/zh/flight_controller/"}},[t._v("自动驾驶仪硬件")])],1),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/PX4/Firmware/#supported-hardware",target:"_blank",rel:"noopener noreferrer"}},[t._v("Supported boards list"),r("OutboundLink")],1),t._v(" (Github)")])])]),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/zh/peripherals/"}},[t._v("Supported Peripherals")])],1)])])}),[],!1,null,null,null);e.default=o.exports}}]);