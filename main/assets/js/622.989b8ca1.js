(window.webpackJsonp=window.webpackJsonp||[]).push([[622],{3407:function(t,e,a){"use strict";a.r(e);var o=a(19),r=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"bootloader-更新"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#bootloader-更新"}},[t._v("#")]),t._v(" Bootloader 更新")]),t._v(" "),o("p",[o("em",[t._v("PX4 启动加载器")]),t._v(" 用于加载 "),o("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk_series.html"}},[t._v("Pixhawk 板")]),t._v(" (PX4FMU, PX4IO)。")],1),t._v(" "),o("p",[t._v("Pixhawk控制器通常预安装了适当的引导程序。 但在某些情况下，当它不存在，或者有一个的旧版本需要更新。")]),t._v(" "),o("p",[t._v("此篇介绍了更新 Pixhawk bootloader 的几种常见方法。")]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),o("ul",[o("li",[t._v("Most boards will need to use the "),o("a",{attrs:{href:"#debug-probe-bootloader-update"}},[t._v("Debug Probe")]),t._v(" to update the bootloader.")]),t._v(" "),o("li",[t._v("On "),o("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk6x-rt.html"}},[t._v("FMUv6X-RT")]),t._v(" you can "),o("RouterLink",{attrs:{to:"/zh/advanced_config/bootloader_update_v6xrt.html"}},[t._v("install bootloader/unbrick boards via USB")]),t._v(". This is useful if you don't have a debug probe.")],1),t._v(" "),o("li",[t._v("On FMUv2 and some custom firmware (only) you can use "),o("a",{attrs:{href:"#qgc-bootloader-update"}},[t._v("QGC Bootloader Update")]),t._v(".")])])]),t._v(" "),o("h2",{attrs:{id:"构建px4-启动加载器"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#构建px4-启动加载器"}},[t._v("#")]),t._v(" 构建PX4 启动加载器")]),t._v(" "),o("h3",{attrs:{id:"px4-bootloader-fmuv6x-and-later"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#px4-bootloader-fmuv6x-and-later"}},[t._v("#")]),t._v(" PX4 Bootloader FMUv6X and later")]),t._v(" "),o("p",[t._v("从FMUv6X （STM32H7）的板子开始，使用代码树内的 PX4 bootloader。")]),t._v(" "),o("p",[t._v("This can be built from within the "),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4-Autopilot"),o("OutboundLink")],1),t._v(" directory using the "),o("code",[t._v("make")]),t._v(" command and the board-specific target with a "),o("code",[t._v("_bootloader")]),t._v(" suffix.")]),t._v(" "),o("p",[t._v("对于FMUv6X，命令是：")]),t._v(" "),o("div",{staticClass:"language-sh extra-class"},[o("pre",{pre:!0,attrs:{class:"language-sh"}},[o("code",[o("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_fmu-v6x_bootloader\n")])])]),o("p",[t._v("这将构建 "),o("code",[t._v("build/px4_fmu-v6x_bootloader/px4_fmu-v6x_bootloader.elf")]),t._v("格式的bootloader 二进制文件，它可以通过 SWD 或 DFU烧写。 如果你正准备构建 bootloader，你应该已经熟悉这些选项之一。")]),t._v(" "),o("p",[t._v("如果需要 HEX 文件而不是 ELF 文件，请使用 objcopy 参数：")]),t._v(" "),o("div",{staticClass:"language-sh extra-class"},[o("pre",{pre:!0,attrs:{class:"language-sh"}},[o("code",[t._v("arm-none-eabi-objcopy -O ihex build/px4_fmu-v6x_bootloader/px4_fmu-v6x_bootloader.elf px4_fmu-v6x_bootloader.hex\n")])])]),o("h3",{attrs:{id:"px4-bootloader-fmuv5x-and-earlier"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#px4-bootloader-fmuv5x-and-earlier"}},[t._v("#")]),t._v(" PX4 Bootloader FMUv5X and earlier")]),t._v(" "),o("p",[t._v("请参考README中的说明来学习如何使用它。")]),t._v(" "),o("p",[t._v("The instructions in the repo README explain how to use it.")]),t._v(" "),o("h2",{attrs:{id:"构建旧的-px4-启动加载器"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#构建旧的-px4-启动加载器"}},[t._v("#")]),t._v(" 构建旧的 PX4 启动加载器")]),t._v(" "),o("p",[t._v('The following steps explain how you can "manually" update the bootloader using a '),o("RouterLink",{attrs:{to:"/zh/debug/swd_debug.html#debug-probes-for-px4-hardware"}},[t._v("compatible Debug Probe")]),t._v(":")],1),t._v(" "),o("ol",[o("li",[o("p",[t._v("Get a binary containing the bootloader (either from dev team or "),o("a",{attrs:{href:"#building-the-px4-bootloader"}},[t._v("build it yourself")]),t._v(").")])]),t._v(" "),o("li",[o("p",[t._v("Get a "),o("RouterLink",{attrs:{to:"/zh/debug/swd_debug.html#debug-probes-for-px4-hardware"}},[t._v("Debug Probe")]),t._v(". Connect the probe your PC via USB and setup the "),o("code",[t._v("gdbserver")]),t._v(".")],1)]),t._v(" "),o("li",[o("p",[t._v("Go into the directory containing the binary and run the command for your target bootloader in the terminal:")]),t._v(" "),o("ul",[o("li",[o("p",[t._v("FMUv6X")]),t._v(" "),o("div",{staticClass:"language-sh extra-class"},[o("pre",{pre:!0,attrs:{class:"language-sh"}},[o("code",[t._v("arm-none-eabi-gdb px4_fmu-v6x_bootloader.elf\n")])])])]),t._v(" "),o("li",[o("p",[t._v("FMUv6X-RT")]),t._v(" "),o("div",{staticClass:"language-sh extra-class"},[o("pre",{pre:!0,attrs:{class:"language-sh"}},[o("code",[t._v("arm-none-eabi-gdb px4_fmu-v6xrt_bootloader.elf\n")])])])]),t._v(" "),o("li",[o("p",[t._v("FMUv5")]),t._v(" "),o("div",{staticClass:"language-sh extra-class"},[o("pre",{pre:!0,attrs:{class:"language-sh"}},[o("code",[t._v("\n")])])])])])])]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),o("p",[t._v("H7 Bootloaders from "),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4/PX4-Autopilot"),o("OutboundLink")],1),t._v(" are named with pattern "),o("code",[t._v("*._bootloader.elf")]),t._v(". Bootloaders from "),o("a",{attrs:{href:"https://github.com/PX4/PX4-Bootloader",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4/PX4-Bootloader"),o("OutboundLink")],1),t._v(" are named with the pattern "),o("code",[t._v("*_bl.elf")]),t._v(".")])]),t._v(" "),o("ol",[o("li",[o("p",[o("em",[t._v("gdb 终端")]),t._v(" 出现，它应该显示以下输出：")]),t._v(" "),o("div",{staticClass:"language-sh extra-class"},[o("pre",{pre:!0,attrs:{class:"language-sh"}},[o("code",[t._v("GNU gdb "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("GNU Tools "),o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" Arm Embedded Processors "),o("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v("-2017-q4-major"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token number"}},[t._v("8.0")]),t._v(".50.20171128-git\nCopyright "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("C"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token number"}},[t._v("2017")]),t._v(" Free Software Foundation, Inc.\nLicense GPLv3+: GNU GPL version "),o("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" or later "),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("http://gnu.org/licenses/gpl.html"),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\nThis is "),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("free")]),t._v(" software: you are "),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("free")]),t._v(" to change and redistribute it.\nThere is NO WARRANTY, to the extent permitted by law.\n\nThis GDB was configured as "),o("span",{pre:!0,attrs:{class:"token string"}},[t._v('"--host=x86_64-linux-gnu --target=arm-none-eabi"')]),o("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\nType "),o("span",{pre:!0,attrs:{class:"token string"}},[t._v('"show configuration"')]),t._v(" "),o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" configuration details.\n\n\nFor help, "),o("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("type")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token string"}},[t._v('"help"')]),o("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\nType "),o("span",{pre:!0,attrs:{class:"token string"}},[t._v('"apropos word"')]),t._v(" to search "),o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" commands related to "),o("span",{pre:!0,attrs:{class:"token string"}},[t._v('"word"')]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\nReading symbols from px4fmuv5_bl.elf"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".done.\n")])])])]),t._v(" "),o("li",[o("p",[t._v("Find your "),o("code",[t._v("<dronecode-probe-id>")]),t._v(" by running an "),o("code",[t._v("ls")]),t._v(" command in the "),o("strong",[t._v("/dev/serial/by-id")]),t._v(" directory.")])]),t._v(" "),o("li",[o("p",[t._v("Now connect to the debug probe with the following command:")]),t._v(" "),o("div",{staticClass:"language-sh extra-class"},[o("pre",{pre:!0,attrs:{class:"language-sh"}},[o("code",[o("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" ext /dev/serial/by-id/"),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("dronecode-probe-id"),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])]),t._v(" "),o("li",[o("p",[t._v("Power on the Pixhawk with another USB cable and connect the probe to the "),o("code",[t._v("FMU-DEBUG")]),t._v(" port.")])])]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),o("p",[t._v("If using a Dronecode probe you may need to remove the case in order to connect to the "),o("code",[t._v("FMU-DEBUG")]),t._v(" port (e.g. on Pixhawk 4 you would do this using a T6 Torx screwdriver).")])]),t._v(" "),o("ol",[o("li",[o("p",[t._v("Use the following command to scan for the Pixhawk`s SWD and connect to it:")]),t._v(" "),o("div",{staticClass:"language-sh extra-class"},[o("pre",{pre:!0,attrs:{class:"language-sh"}},[o("code",[t._v("\n")])])])]),t._v(" "),o("li",[o("p",[t._v("将二进制文件加载到 Pixhawk 中 ：")]),t._v(" "),o("div",{staticClass:"language-sh extra-class"},[o("pre",{pre:!0,attrs:{class:"language-sh"}},[o("code",[o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gdb"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" load\n")])])])])]),t._v(" "),o("p",[t._v("在引导程序更新后，您可以使用 "),o("em",[t._v("QGroundControl")]),t._v(" "),o("RouterLink",{attrs:{to:"/zh/config/firmware.html"}},[t._v("加载 PX4 固件")]),t._v("。")],1),t._v(" "),o("h2",{attrs:{id:"qgc-引导加载器更新"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#qgc-引导加载器更新"}},[t._v("#")]),t._v(" QGC 引导加载器更新")]),t._v(" "),o("p",[t._v("最简单的方法是首先使用 "),o("em",[t._v("QGroundControl")]),t._v(" 来安装包含需要的/最新引导器的固件。 然后，可以通过设置参数"),o("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SYS_BL_UPDATE"}},[t._v(" SYS_BL_UPDATE ")]),t._v("来在下次重启时启动 bootloader 更新。")],1),t._v(" "),o("p",[t._v("This approach can only be used if "),o("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SYS_BL_UPDATE"}},[t._v("SYS_BL_UPDATE")]),t._v(" is present in firmware.")],1),t._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),o("p",[t._v("Currently only FMUv2 and some custom firmware includes the desired bootloader.")])]),t._v(" "),o("p",[t._v("步骤如下：")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("插入 SD 卡（使能引导日志记录，便于调试任何可能的问题）。")])]),t._v(" "),o("li",[o("p",[t._v("使用包含 最新的/所需的 bootloader 的 image 文件来"),o("RouterLink",{attrs:{to:"/zh/config/firmware.html#custom"}},[t._v("更新固件")]),t._v("。")],1),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("注解")])])])]),t._v(" "),o("p",[t._v("The updated bootloader might be supplied in custom firmware (i.e. from the dev team), or it or may be included in the latest main branch.\n:::")]),t._v(" "),o("ol",[o("li",[t._v("等待飞控重启。")]),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/zh/advanced_config/parameters.html"}},[t._v("找到并启用")]),t._v(" 参数 "),o("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SYS_BL_UPDATE"}},[t._v("SYS_BL_UPDATE")]),t._v("。")],1),t._v(" "),o("li",[t._v("重新启动（断开/重新连接飞控板）。 Bootloader 更新只需要几秒钟即可完成。")])]),t._v(" "),o("p",[t._v("通常，此时您可能想要使用 正确/新安装 的 bootloader 再次"),o("RouterLink",{attrs:{to:"/zh/config/firmware.html"}},[t._v("更新固件")]),t._v("。")],1),t._v(" "),o("p",[t._v("以下是更新FMUv2引导程序的一个具体例子。")]),t._v(" "),o("h3",{attrs:{id:"fmuv2-引导加载器更新"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#fmuv2-引导加载器更新"}},[t._v("#")]),t._v(" FMUv2 引导加载器更新")]),t._v(" "),o("p",[t._v("如果 "),o("em",[t._v("QGroundControl")]),t._v(" 安装了 FMUv2 目标(见安装过程中的控制台) 而且你有一个新的板，你可能需要更新引导程序，以便访问你飞行控制器上的所有内存。")]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),o("p",[t._v("早期FMUv2 "),o("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk_series.html#fmu_versions"}},[t._v("Pixhawk系列")]),t._v(" 飞行控制器有一个 "),o("RouterLink",{attrs:{to:"/zh/flight_controller/silicon_errata.html#fmuv2-pixhawk-silicon-errata"}},[t._v("硬件问题")]),t._v(" 限制它们使用闪存内存的1MB。 这个问题已在新版面解决， 但您可能需要更新工厂提供的引导程序，以便安装 FMUv3 固件并访问所有 2MB 可用内存。")],1)]),t._v(" "),o("p",[t._v("要更新引导器：")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("插入 SD 卡（使能引导日志记录，便于调试任何可能的问题）。")])]),t._v(" "),o("li",[o("p",[o("RouterLink",{attrs:{to:"/zh/config/firmware.html"}},[t._v("更新固件")]),t._v(" 到 PX4 "),o("em",[t._v("主")]),t._v(" 版本 (当更新固件时) 勾选 "),o("strong",[t._v("高级设置")]),t._v(" 然后选择 "),o("strong",[t._v("开发者(主)")]),t._v(" 从下拉列表中选择)。 "),o("em",[t._v("QGroundControl")]),t._v(" 将自动检测硬件支持FMUv2并安装相应的Firmware。")],1),t._v(" "),o("p",[o("img",{attrs:{src:a(355),alt:"FMUv2 更新"}})]),t._v(" "),o("p",[t._v("等待飞控重启。")])]),t._v(" "),o("li",[o("p",[o("RouterLink",{attrs:{to:"/zh/advanced_config/parameters.html"}},[t._v("找到并启用")]),t._v(" 参数 "),o("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SYS_BL_UPDATE"}},[t._v("SYS_BL_UPDATE")]),t._v("。")],1)]),t._v(" "),o("li",[o("p",[t._v("重新启动（断开/重新连接飞控板）。 Bootloader 更新只需要几秒钟即可完成。")])]),t._v(" "),o("li",[o("p",[t._v("然后 "),o("RouterLink",{attrs:{to:"/zh/config/firmware.html"}},[t._v("再次更新固件")]),t._v(" 这一次， "),o("em",[t._v("QGroundControl")]),t._v(" 应该自动检测硬件为 FMUv3 并正确更新固件。")],1),t._v(" "),o("p",[o("img",{attrs:{src:a(487),alt:"FMUv3 update"}})])])]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),o("p",[t._v("如果硬件有 "),o("RouterLink",{attrs:{to:"/zh/flight_controller/silicon_errata.html#fmuv2-pixhawk-silicon-errata"}},[t._v("Silicon Errata")]),t._v(" 它仍将被检测为 FMUv2 ，你会看到FMUv2 再次重新安装(在控制台)。 在这种情况下，您将无法安装 FMUv3 硬件。")],1)]),t._v(" "),o("h2",{attrs:{id:"其他飞控板-非-pixhawk"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#其他飞控板-非-pixhawk"}},[t._v("#")]),t._v(" 其他飞控板（非 Pixhawk）")]),t._v(" "),o("p",[t._v("不属于 "),o("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk_series.html"}},[t._v(" Pixhawk 系列")]),t._v("的板卡将具有自己的 bootloader 更新机制。")],1),t._v(" "),o("p",[t._v("对于已预烧写 Betaflight 的板卡，请参见"),o("RouterLink",{attrs:{to:"/zh/advanced_config/bootloader_update_from_betaflight.html"}},[t._v(" Betaflight System 烧写 Bootloader ")]),t._v("。")],1)])}),[],!1,null,null,null);e.default=r.exports},355:function(t,e,a){t.exports=a.p+"assets/img/bootloader_update.bd69dc9b.jpg"},487:function(t,e,a){t.exports=a.p+"assets/img/bootloader_fmu_v3_update.138bc25e.jpg"}}]);