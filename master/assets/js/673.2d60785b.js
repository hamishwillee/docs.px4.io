(window.webpackJsonp=window.webpackJsonp||[]).push([[673],{2725:function(o,e,t){"use strict";t.r(e);var r=t(19),a=Object(r.a)({},(function(){var o=this,e=o.$createElement,r=o._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":o.$parent.slotKey}},[r("h1",{attrs:{id:"bootloader-更新"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#bootloader-更新"}},[o._v("#")]),o._v(" Bootloader 更新")]),o._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/PX4/Bootloader",target:"_blank",rel:"noopener noreferrer"}},[o._v("PX4 bootloader"),r("OutboundLink")],1),o._v("用于为 Pixhawk 板（PX4FMU, PX4IO）和"),r("RouterLink",{attrs:{to:"/zh/sensor/px4flow.html"}},[o._v("PX4FLOW")]),o._v("加载固件。")],1),o._v(" "),r("p",[o._v("此篇介绍了更新 Pixhawk bootloader 的几种常见方法。")]),o._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[o._v("注解")]),o._v(" "),r("p",[o._v("硬件通常预先安装了合适的引导程序版本。 您可能需要更新的一种情况是在较新的 Pixhawk 板子上安装 FMUv2 固件： "),r("RouterLink",{attrs:{to:"/zh/config/firmware.html#bootloader"}},[o._v("固件> FMUv2 Bootloader 更新")])],1)]),o._v(" "),r("h2",{attrs:{id:"构建新的-px4-bootloader"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#构建新的-px4-bootloader"}},[o._v("#")]),o._v(" 构建新的 PX4 bootloader")]),o._v(" "),r("p",[o._v("以 FMUv6X （STM32H7）开始的板子使用树内的 PX4 bootloader。 旧板子使用遗留的 "),r("a",{attrs:{href:"https://github.com/PX4/Bootloader",target:"_blank",rel:"noopener noreferrer"}},[o._v("PX4 bootloader"),r("OutboundLink")],1),o._v(" 仓库中的 bootloader。 请参考README中的说明来学习如何使用它。")]),o._v(" "),r("p",[o._v("在 PX4-Autopilot 文件夹中构建新的 bootloader:")]),o._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[o._v("make px4_fmu-v6x_bootloader\n")])])]),r("p",[o._v("该命令构建出的 bootloader 二进制文件像这样 "),r("code",[o._v("build/px4_fmu-v6x_bootloader/px4_fmu-v6x_bootloader.elf")]),o._v("， 可以通过 SWD 或者 DFU 烧写。 如果你正准备构建 bootloader，你应该已经熟悉这些选项之一。")]),o._v(" "),r("p",[o._v("如果需要 HEX 文件而不是 ELF 文件，请使用 objcopy 参数：")]),o._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[o._v("arm-none-eabi-objcopy -O ihex build/px4_fmu-v6x_bootloader/px4_fmu-v6x_bootloader.elf px4_fmu-v6x_bootloader.hex\n")])])]),r("p",[r("span",{attrs:{id:"qgc_bootloader_update"}})]),o._v(" "),r("h2",{attrs:{id:"使用-qgroundcontrol-地面站更新-bootloader"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用-qgroundcontrol-地面站更新-bootloader"}},[o._v("#")]),o._v(" 使用 QGroundControl 地面站更新 Bootloader")]),o._v(" "),r("p",[o._v("最简单的方法是首先使用* QGroundControl *安装具有所需/最新 bootloader 的固件。 然后，可以通过设置参数"),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SYS_BL_UPDATE"}},[o._v(" SYS_BL_UPDATE ")]),o._v("来在下次重启时启动 bootloader 更新。")],1),o._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[o._v("注解")]),o._v(" "),r("p",[o._v("此方法只能在固件中存在 "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SYS_BL_UPDATE"}},[o._v("SYS_BL_UpDATE")]),o._v(" 时才能使用 (目前只是 FMUv2 和一些自定义固件)。")],1)]),o._v(" "),r("p",[o._v("步骤如下：")]),o._v(" "),r("ol",[r("li",[r("p",[o._v("插入 SD 卡（使能引导日志记录，便于调试任何可能的问题）。")])]),o._v(" "),r("li",[r("p",[o._v("使用包含 最新的/所需的 bootloader 的 image 文件来"),r("RouterLink",{attrs:{to:"/zh/config/firmware.html#custom"}},[o._v("更新固件")]),o._v("。 :::note 已经更新的 bootloader 可能在自定义固件中提供（例如，来自开发团队的固件），或者可能在最新的 master 分支中。\n:::")],1),o._v(" "),r("p",[r("img",{attrs:{src:t(343),alt:"FMUv2 更新"}})])]),o._v(" "),r("li",[r("p",[o._v("等待飞控重启。")])]),o._v(" "),r("li",[r("p",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameters.html"}},[o._v("找到并启用")]),o._v(" 参数 "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SYS_BL_UPDATE"}},[o._v("SYS_BL_UPDATE")]),o._v("。")],1)]),o._v(" "),r("li",[r("p",[o._v("重新启动（断开/重新连接飞控板）。 Bootloader 更新只需要几秒钟即可完成。")])])]),o._v(" "),r("p",[o._v("通常，此时您可能想要使用 正确/新安装 的 bootloader 再次"),r("RouterLink",{attrs:{to:"/zh/config/firmware.html"}},[o._v("更新固件")]),o._v("。")],1),o._v(" "),r("p",[r("span",{attrs:{id:"dronecode_probe"}})]),o._v(" "),r("h3",{attrs:{id:"dronecode-probe-bootloader-更新"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dronecode-probe-bootloader-更新"}},[o._v("#")]),o._v(" Dronecode Probe Bootloader 更新")]),o._v(" "),r("p",[o._v("以下步骤说明了如何使用 dronecode probe “手动” 更新 bootloader ：")]),o._v(" "),r("ol",[r("li",[r("p",[o._v("获取包含 bootloader 的二进制文件（从开发团队或自行编译获得）。")])]),o._v(" "),r("li",[r("p",[o._v("通过 USB 将 Dronecode Probe 连接到PC。")])]),o._v(" "),r("li",[r("p",[o._v("进入包含二进制文件的目录，然后在终端中运行以下命令 ：\nbash\narm-none-eabi-gdb px4fmuv5_bl.elf")])]),o._v(" "),r("li",[r("p",[o._v("出现* gdb 终端界面 *，它应该显示以下输出：\nbash\nGNU gdb (GNU Tools for Arm Embedded Processors 7-2017-q4-major) 8.0.50.20171128-git\nCopyright (C) 2017 Free Software Foundation, Inc.\nLicense GPLv3+: GNU GPL version 3 or later "),r("a",{attrs:{href:"http://gnu.org/licenses/gpl.html",target:"_blank",rel:"noopener noreferrer"}},[o._v("http://gnu.org/licenses/gpl.html"),r("OutboundLink")],1),o._v('\nThis is free software: you are free to change and redistribute it.\nThere is NO WARRANTY, to the extent permitted by law.  Type "show copying"\nand "show warranty" for details.\nThis GDB was configured as "--host=x86_64-linux-gnu --target=arm-none-eabi".\nType "show configuration" for configuration details.\nFor bug reporting instructions, please see:\n'),r("a",{attrs:{href:"http://www.gnu.org/software/gdb/bugs/",target:"_blank",rel:"noopener noreferrer"}},[o._v("http://www.gnu.org/software/gdb/bugs/"),r("OutboundLink")],1),o._v(".\nFind the GDB manual and other documentation resources online at:\n"),r("a",{attrs:{href:"http://www.gnu.org/software/gdb/documentation/",target:"_blank",rel:"noopener noreferrer"}},[o._v("http://www.gnu.org/software/gdb/documentation/"),r("OutboundLink")],1),o._v('.\nFor help, type "help".\nType "apropos word" to search for commands related to "word"...\nReading symbols from px4fmuv5_bl.elf...done.')])]),o._v(" "),r("li",[r("p",[o._v("通过在 "),r("strong",[o._v("/dev/serial/by-id")]),o._v(" 文件夹下中运行 ls 命令来找到 "),r("code",[o._v("<dronecode-probe-id>")]),o._v(" dronecode-probe-id</0> 。")])]),o._v(" "),r("li",[r("p",[o._v("现在，使用以下命令连接到 Dronecode probe： "),r("code",[o._v("tar ext /dev/serial/by-id/<dronecode-probe-id>")])])]),o._v(" "),r("li",[r("p",[o._v("使用另一条 USB 线为 Pixhawk 供电，然后将 Dronecode probe 连接到 FMU-DEBUG 端口。")]),o._v(" "),r("p",[o._v("为了能够将 Dronecode probe 连接到 FMU-DEBUG 端口，您可能需要卸下外壳（例如，在Pixhawk 4 上，可以使用 T6 Torx 螺丝刀进行操作）。\n:::")])]),o._v(" "),r("li",[r("p",[o._v("使用以下命令扫描 Pixhawk 的 swd 调试端口并连接到它 ：")]),o._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[o._v(" (gdb) mon swdp_scan\n (gdb) attach 1\n")])])])]),o._v(" "),r("li",[r("p",[o._v("将二进制文件加载到 Pixhawk 中 ： "),r("code",[o._v("(gdb) load")])])])]),o._v(" "),r("p",[o._v("Bootloader 更新后，您可以使用* QGroundControl * 来 "),r("RouterLink",{attrs:{to:"/zh/config/firmware.html"}},[o._v("加载 PX4 固件")]),o._v("。")],1),o._v(" "),r("h2",{attrs:{id:"其他飞控板-非-pixhawk"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#其他飞控板-非-pixhawk"}},[o._v("#")]),o._v(" 其他飞控板（非 Pixhawk）")]),o._v(" "),r("p",[o._v("不属于 "),r("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk_series.html"}},[o._v(" Pixhawk 系列")]),o._v("的板卡将具有自己的 bootloader 更新机制。")],1),o._v(" "),r("p",[o._v("对于已预烧写 Betaflight 的板卡，请参见"),r("RouterLink",{attrs:{to:"/zh/advanced_config/bootloader_update_from_betaflight.html"}},[o._v(" Betaflight System 烧写 Bootloader ")]),o._v("。")],1)])}),[],!1,null,null,null);e.default=a.exports},343:function(o,e,t){o.exports=t.p+"assets/img/bootloader_update.8826d78f.jpg"}}]);