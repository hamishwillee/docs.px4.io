(window.webpackJsonp=window.webpackJsonp||[]).push([[810],{3148:function(t,a,e){"use strict";e.r(a);var o=e(19),r=Object(o.a)({},(function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"bootloader-更新"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#bootloader-更新"}},[t._v("#")]),t._v(" Bootloader 更新")]),t._v(" "),o("p",[t._v("The "),o("a",{attrs:{href:"https://github.com/PX4/Bootloader",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4 bootloader"),o("OutboundLink")],1),t._v(" is used to load firmware for "),o("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk_series.html"}},[t._v("Pixhawk boards")]),t._v(" (PX4FMU, PX4IO).")],1),t._v(" "),o("p",[t._v("此篇介绍了更新 Pixhawk bootloader 的几种常见方法。")]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),o("p",[t._v("Pixhawk hardware usually comes with an appropriate bootloader version pre-installed. A case where you may need to update is newer Pixhawk boards that install FMUv2 firmware: "),o("RouterLink",{attrs:{to:"/zh/config/firmware.html#bootloader"}},[t._v("Firmware > FMUv2 Bootloader Update")]),t._v(".")],1)]),t._v(" "),o("h2",{attrs:{id:"building-the-new-px4-bootloader-yourself"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#building-the-new-px4-bootloader-yourself"}},[t._v("#")]),t._v(" Building the new PX4 Bootloader Yourself")]),t._v(" "),o("p",[t._v("以 FMUv6X （STM32H7）开始的板子使用树内的 PX4 bootloader。 旧板子使用遗留的 "),o("a",{attrs:{href:"https://github.com/PX4/Bootloader",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4 bootloader"),o("OutboundLink")],1),t._v(" 仓库中的 bootloader。 请参考README中的说明来学习如何使用它。")]),t._v(" "),o("p",[t._v("在 PX4-Autopilot 文件夹中构建新的 bootloader:")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("make px4_fmu-v6x_bootloader\n")])])]),o("p",[t._v("该命令构建出的 bootloader 二进制文件像这样 "),o("code",[t._v("build/px4_fmu-v6x_bootloader/px4_fmu-v6x_bootloader.elf")]),t._v("， 可以通过 SWD 或者 DFU 烧写。 如果你正准备构建 bootloader，你应该已经熟悉这些选项之一。")]),t._v(" "),o("p",[t._v("如果需要 HEX 文件而不是 ELF 文件，请使用 objcopy 参数：")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("arm-none-eabi-objcopy -O ihex build/px4_fmu-v6x_bootloader/px4_fmu-v6x_bootloader.elf px4_fmu-v6x_bootloader.hex\n")])])]),o("h2",{attrs:{id:"qgc-bootloader-update"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#qgc-bootloader-update"}},[t._v("#")]),t._v(" QGC Bootloader Update")]),t._v(" "),o("p",[t._v("The easiest approach is to first use "),o("em",[t._v("QGroundControl")]),t._v(" to install firmware with the desired/latest bootloader. 然后，可以通过设置参数"),o("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SYS_BL_UPDATE"}},[t._v(" SYS_BL_UPDATE ")]),t._v("来在下次重启时启动 bootloader 更新。")],1),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),o("p",[t._v("此方法只能在固件中存在 "),o("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SYS_BL_UPDATE"}},[t._v("SYS_BL_UpDATE")]),t._v(" 时才能使用 (目前只是 FMUv2 和一些自定义固件)。")],1)]),t._v(" "),o("p",[t._v("步骤如下：")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("插入 SD 卡（使能引导日志记录，便于调试任何可能的问题）。")])]),t._v(" "),o("li",[o("p",[t._v("使用包含 最新的/所需的 bootloader 的 image 文件来"),o("RouterLink",{attrs:{to:"/zh/config/firmware.html#custom"}},[t._v("更新固件")]),t._v("。")],1),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("注解")])])])]),t._v(" "),o("p",[t._v("已经更新的 bootloader 可能在自定义固件中提供（例如，来自开发团队的固件），或者可能在最新的 master 分支中。\n:::")]),t._v(" "),o("p",[o("img",{attrs:{src:e(355),alt:"FMUv2 更新"}})]),t._v(" "),o("ol",[o("li",[t._v("等待飞控重启。")]),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/zh/advanced_config/parameters.html"}},[t._v("找到并启用")]),t._v(" 参数 "),o("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SYS_BL_UPDATE"}},[t._v("SYS_BL_UPDATE")]),t._v("。")],1),t._v(" "),o("li",[t._v("重新启动（断开/重新连接飞控板）。 Bootloader 更新只需要几秒钟即可完成。")])]),t._v(" "),o("p",[t._v("通常，此时您可能想要使用 正确/新安装 的 bootloader 再次"),o("RouterLink",{attrs:{to:"/zh/config/firmware.html"}},[t._v("更新固件")]),t._v("。")],1),t._v(" "),o("h3",{attrs:{id:"dronecode-probe-bootloader-更新"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#dronecode-probe-bootloader-更新"}},[t._v("#")]),t._v(" Dronecode Probe Bootloader 更新")]),t._v(" "),o("p",[t._v("以下步骤说明了如何使用 dronecode probe “手动” 更新 bootloader ：")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("获取包含 bootloader 的二进制文件（从开发团队或自行编译获得）。")])]),t._v(" "),o("li",[o("p",[t._v("通过 USB 将 Dronecode Probe 连接到PC。")])]),t._v(" "),o("li",[o("p",[t._v("进入包含二进制文件的目录，然后在终端中运行以下命令 ：")]),t._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[t._v("arm-none-eabi-gdb px4fmuv5_bl.elf\n")])])])]),t._v(" "),o("li",[o("p",[t._v("The "),o("em",[t._v("gdb terminal")]),t._v(" appears and it should display the following output:")]),t._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[t._v("GNU gdb "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("GNU Tools "),o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" Arm Embedded Processors "),o("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v("-2017-q4-major"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token number"}},[t._v("8.0")]),t._v(".50.20171128-git\nCopyright "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("C"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token number"}},[t._v("2017")]),t._v(" Free Software Foundation, Inc.\nLicense GPLv3+: GNU GPL version "),o("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" or later "),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("http://gnu.org/licenses/gpl.html"),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\nThis is "),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("free")]),t._v(" software: you are "),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("free")]),t._v(" to change and redistribute it.\nThere is NO WARRANTY, to the extent permitted by law.\nType "),o("span",{pre:!0,attrs:{class:"token string"}},[t._v('"show copying"')]),t._v("    and "),o("span",{pre:!0,attrs:{class:"token string"}},[t._v('"show warranty"')]),t._v(" "),o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" details.\nThis GDB was configured as "),o("span",{pre:!0,attrs:{class:"token string"}},[t._v('"--host=x86_64-linux-gnu --target=arm-none-eabi"')]),o("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\nType "),o("span",{pre:!0,attrs:{class:"token string"}},[t._v('"show configuration"')]),t._v(" "),o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" configuration details.\nFor bug reporting instructions, please see:\n"),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("http://www.gnu.org/software/gdb/bugs/"),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(".\nFind the GDB manual and other documentation resources online at:\n"),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("http://www.gnu.org/software/gdb/documentation/"),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(".\nFor help, "),o("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("type")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token string"}},[t._v('"help"')]),o("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\nType "),o("span",{pre:!0,attrs:{class:"token string"}},[t._v('"apropos word"')]),t._v(" to search "),o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" commands related to "),o("span",{pre:!0,attrs:{class:"token string"}},[t._v('"word"')]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\nReading symbols from px4fmuv5_bl.elf"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".done.\n")])])])]),t._v(" "),o("li",[o("p",[t._v("Find your "),o("code",[t._v("<dronecode-probe-id>")]),t._v(" by running an ls command in the "),o("strong",[t._v("/dev/serial/by-id")]),t._v(" directory.")])]),t._v(" "),o("li",[o("p",[t._v("现在，使用以下命令连接到 Dronecode probe：")]),t._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[o("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" ext /dev/serial/by-id/"),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("dronecode-probe-id"),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])]),t._v(" "),o("li",[o("p",[t._v("使用另一条 USB 线为 Pixhawk 供电，然后将 Dronecode probe 连接到 FMU-DEBUG 端口。")]),t._v(" "),o("p",[t._v("为了能够将 Dronecode probe 连接到 FMU-DEBUG 端口，您可能需要卸下外壳（例如，在Pixhawk 4 上，可以使用 T6 Torx 螺丝刀进行操作）。\n:::")])]),t._v(" "),o("li",[o("p",[t._v("使用以下命令扫描 Pixhawk 的 swd 调试端口并连接到它 ：")]),t._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gdb"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" mon swdp_scan\n"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gdb"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" attach "),o("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])])])]),t._v(" "),o("li",[o("p",[t._v("将二进制文件加载到 Pixhawk 中 ：")]),t._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gdb"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" load\n")])])])])]),t._v(" "),o("p",[t._v("After the bootloader has updated you can "),o("RouterLink",{attrs:{to:"/zh/config/firmware.html"}},[t._v("Load PX4 Firmware")]),t._v(" using "),o("em",[t._v("QGroundControl")]),t._v(".")],1),t._v(" "),o("h2",{attrs:{id:"其他飞控板-非-pixhawk"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#其他飞控板-非-pixhawk"}},[t._v("#")]),t._v(" 其他飞控板（非 Pixhawk）")]),t._v(" "),o("p",[t._v("不属于 "),o("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk_series.html"}},[t._v(" Pixhawk 系列")]),t._v("的板卡将具有自己的 bootloader 更新机制。")],1),t._v(" "),o("p",[t._v("对于已预烧写 Betaflight 的板卡，请参见"),o("RouterLink",{attrs:{to:"/zh/advanced_config/bootloader_update_from_betaflight.html"}},[t._v(" Betaflight System 烧写 Bootloader ")]),t._v("。")],1)])}),[],!1,null,null,null);a.default=r.exports},355:function(t,a,e){t.exports=e.p+"assets/img/bootloader_update.bd69dc9b.jpg"}}]);