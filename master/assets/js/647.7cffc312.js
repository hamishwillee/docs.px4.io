(window.webpackJsonp=window.webpackJsonp||[]).push([[647],{2333:function(e,o,t){"use strict";t.r(o);var r=t(18),a=Object(r.a)({},(function(){var e=this,o=e.$createElement,r=e._self._c||o;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"bootloader-更新"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#bootloader-更新"}},[e._v("#")]),e._v(" Bootloader 更新")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/PX4/Bootloader",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4 bootloader"),r("OutboundLink")],1),e._v("用于为Pixhawk板(PX4FMU, PX4IO)和"),r("RouterLink",{attrs:{to:"/zh/sensor/px4flow.html"}},[e._v("PX4FLOW")]),e._v("加载固件。")],1),e._v(" "),r("p",[e._v("此篇介绍了更新Pixhawk bootloader的几种常见方法。")]),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),r("p",[e._v("Hardware usually comes with an appropriate bootloader version pre-installed. A case where you may need to update is newer Pixhawk boards that install FMUv2 firmware: "),r("RouterLink",{attrs:{to:"/zh/config/firmware.html#bootloader"}},[e._v("Firmware > FMUv2 Bootloader Update")]),e._v(".")],1)]),e._v(" "),r("h2",{attrs:{id:"building-the-new-px4-bootloader-yourself"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#building-the-new-px4-bootloader-yourself"}},[e._v("#")]),e._v(" Building the new PX4 bootloader yourself")]),e._v(" "),r("p",[e._v("Boards starting with FMUv6X (STM32H7) use the in-tree PX4 bootloader. Older boards use the bootloader from the legacy "),r("a",{attrs:{href:"https://github.com/PX4/Bootloader",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4 bootloader"),r("OutboundLink")],1),e._v(" repository. Please refer to the instructions in the README to learn how to use it.")]),e._v(" "),r("p",[e._v("Build the new bootloader in the PX4-Autopilot folder with:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("make px4_fmu-v6x_bootloader\n")])])]),r("p",[e._v("Which will build the bootloader binary as "),r("code",[e._v("build/px4_fmu-v6x_bootloader/px4_fmu-v6x_bootloader.elf")]),e._v(" which can be flashed via SWD or DFU. If you are building the bootloader you should be familiar with one of these options already.")]),e._v(" "),r("p",[e._v("If you need a HEX file instead of an ELF file, use objcopy:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("arm-none-eabi-objcopy -O ihex build/px4_fmu-v6x_bootloader/px4_fmu-v6x_bootloader.elf px4_fmu-v6x_bootloader.hex\n")])])]),r("p",[r("span",{attrs:{id:"qgc_bootloader_update"}})]),e._v(" "),r("h2",{attrs:{id:"qgroundcontrol-bootloader-update"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#qgroundcontrol-bootloader-update"}},[e._v("#")]),e._v(" QGroundControl Bootloader Update")]),e._v(" "),r("p",[e._v("The easiest approach is to first use "),r("em",[e._v("QGroundControl")]),e._v(" to install firmware with the desired/latest bootloader. You can then initiate bootloader update on next restart by setting the parameter: "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SYS_BL_UPDATE"}},[e._v("SYS_BL_UPDATE")]),e._v(".")],1),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),r("p",[e._v("This approach can only be used if "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SYS_BL_UPDATE"}},[e._v("SYS_BL_UPDATE")]),e._v(" is present in firmware (currently just FMUv2 and some custom firmware).")],1)]),e._v(" "),r("p",[e._v("The steps are:")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("插入 SD 卡（使能引导日志记录，便于调试任何可能的问题）。")])]),e._v(" "),r("li",[r("p",[r("RouterLink",{attrs:{to:"/zh/config/firmware.html#custom"}},[e._v("Update the Firmware")]),e._v(" with an image containing the new/desired bootloader. :::note The updated bootloader might be supplied in custom firmware (i.e. from the dev team), or it or may be included in the latest master.\n:::")],1),e._v(" "),r("p",[r("img",{attrs:{src:t(388),alt:"FMUv2 更新"}})])]),e._v(" "),r("li",[r("p",[e._v("等待飞控重启。")])]),e._v(" "),r("li",[r("p",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameters.html"}},[e._v("找到并启用")]),e._v(" 参数 "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SYS_BL_UPDATE"}},[e._v("SYS_BL_UPDATE")]),e._v("。")],1)]),e._v(" "),r("li",[r("p",[e._v("重新启动（断开/重新连接飞控板）。 Bootloader 更新只需要几秒钟即可完成。")])])]),e._v(" "),r("p",[e._v("Generally at this point you may then want to "),r("RouterLink",{attrs:{to:"/zh/config/firmware.html"}},[e._v("update the firmware")]),e._v(" again using the correct/newly installed bootloader.")],1),e._v(" "),r("p",[r("span",{attrs:{id:"dronecode_probe"}})]),e._v(" "),r("h3",{attrs:{id:"使用-dronecode-probe-更新-bootloader-dronecode-probe-是官方-jtag-swd-uart-调试器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用-dronecode-probe-更新-bootloader-dronecode-probe-是官方-jtag-swd-uart-调试器"}},[e._v("#")]),e._v(" 使用 Dronecode Probe 更新 Bootloader (Dronecode Probe 是官方 JTAG/SWD+UART 调试器 )")]),e._v(" "),r("p",[e._v('The following steps explain how you can "manually" update the bootloader using the dronecode probe:')]),e._v(" "),r("ol",[r("li",[r("p",[e._v("获取包含 bootloader 的二进制文件（从开发团队 或 自行编译获得）。")])]),e._v(" "),r("li",[r("p",[e._v("通过 USB 将 Dronecode Probe 连接到PC。")])]),e._v(" "),r("li",[r("p",[e._v("进入包含二进制文件的目录，然后在终端中运行以下命令 ：\nbash\narm-none-eabi-gdb px4fmuv5_bl.elf")])]),e._v(" "),r("li",[r("p",[e._v("出现* gdb 终端界面 *，它应该显示以下输出：\nbash\nGNU gdb (GNU Tools for Arm Embedded Processors 7-2017-q4-major) 8.0.50.20171128-git\nCopyright (C) 2017 Free Software Foundation, Inc.\nLicense GPLv3+: GNU GPL version 3 or later "),r("a",{attrs:{href:"http://gnu.org/licenses/gpl.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://gnu.org/licenses/gpl.html"),r("OutboundLink")],1),e._v('\nThis is free software: you are free to change and redistribute it.\nThere is NO WARRANTY, to the extent permitted by law.  Type "show copying"\nand "show warranty" for details.\nThis GDB was configured as "--host=x86_64-linux-gnu --target=arm-none-eabi".\nType "show configuration" for configuration details.\nFor bug reporting instructions, please see:\n'),r("a",{attrs:{href:"http://www.gnu.org/software/gdb/bugs/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://www.gnu.org/software/gdb/bugs/"),r("OutboundLink")],1),e._v(".\nFind the GDB manual and other documentation resources online at:\n"),r("a",{attrs:{href:"http://www.gnu.org/software/gdb/documentation/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://www.gnu.org/software/gdb/documentation/"),r("OutboundLink")],1),e._v('.\nFor help, type "help".\nType "apropos word" to search for commands related to "word"...\nReading symbols from px4fmuv5_bl.elf...done.')])]),e._v(" "),r("li",[r("p",[e._v("通过在 "),r("strong",[e._v("/dev/serial/by-id")]),e._v(" 文件夹下中运行 ls 命令来找到 "),r("code",[e._v("<dronecode-probe-id>")]),e._v(" dronecode-probe-id</0> 。")])]),e._v(" "),r("li",[r("p",[e._v("现在，使用以下命令连接到 Dronecode probe： "),r("code",[e._v("tar ext /dev/serial/by-id/<dronecode-probe-id>")])])]),e._v(" "),r("li",[r("p",[e._v("使用另一条 USB 线为 Pixhawk 供电，然后将 Dronecode probe 连接到 FMU-DEBUG 端口。")])])]),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),r("p",[e._v("To be able to connect the Dronecode probe to the FMU-DEBUG port, you may need to remove the case (e.g. on Pixhawk 4 you would do this using a T6 Torx screwdriver).")])]),e._v(" "),r("ol",{attrs:{start:"8"}},[r("li",[r("p",[e._v("使用以下命令扫描 Pixhawk 的 swd 调试端口并连接到它 ：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v(" (gdb) mon swdp_scan\n (gdb) attach 1\n")])])])]),e._v(" "),r("li",[r("p",[e._v("将二进制文件加载到 Pixhawk 中 ： "),r("code",[e._v("(gdb) load")])])])]),e._v(" "),r("p",[e._v("After the bootloader has updated you can "),r("RouterLink",{attrs:{to:"/zh/config/firmware.html"}},[e._v("Load PX4 Firmware")]),e._v(" using "),r("em",[e._v("QGroundControl")]),e._v(".")],1),e._v(" "),r("h2",{attrs:{id:"other-boards-non-pixhawk"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#other-boards-non-pixhawk"}},[e._v("#")]),e._v(" Other Boards (Non-Pixhawk)")]),e._v(" "),r("p",[e._v("Boards that are not part of the "),r("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk_series.html"}},[e._v("Pixhawk Series")]),e._v(" will have their own mechanisms for bootloader update.")],1),e._v(" "),r("p",[e._v("For boards that are preflashed with Betaflight, see "),r("RouterLink",{attrs:{to:"/zh/advanced_config/bootloader_update_from_betaflight.html"}},[e._v("Bootloader Flashing onto Betaflight Systems")]),e._v(".")],1)])}),[],!1,null,null,null);o.default=a.exports},388:function(e,o,t){e.exports=t.p+"assets/img/bootloader_update.8826d78f.jpg"}}]);