(window.webpackJsonp=window.webpackJsonp||[]).push([[1798],{3226:function(a,t,s){"use strict";s.r(t);var e=s(19),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"stm32-bootloader"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stm32-bootloader"}},[a._v("#")]),a._v(" STM32 Bootloader")]),a._v(" "),s("p",[a._v("PX4 引导加载程序的代码可从 Github "),s("a",{attrs:{href:"https://github.com/px4/bootloader",target:"_blank",rel:"noopener noreferrer"}},[a._v(" Bootloader "),s("OutboundLink")],1),a._v("存储库获得。")]),a._v(" "),s("h2",{attrs:{id:"支持的飞控板"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#支持的飞控板"}},[a._v("#")]),a._v(" 支持的飞控板")]),a._v(" "),s("ul",[s("li",[a._v("FMUv2 (Pixhawk 1, STM32F4)")]),a._v(" "),s("li",[a._v("FMUv3 (Pixhawk 2, STM32F4)")]),a._v(" "),s("li",[a._v("FMUv4 (Pixracer 3 and Pixhawk 3 Pro, STM32F4)")]),a._v(" "),s("li",[a._v("FMUv5 (Pixhawk 4, STM32F7)")]),a._v(" "),s("li",[a._v("TAPv1 (TBA, STM32F4)")]),a._v(" "),s("li",[a._v("ASCv1 (TBA, STM32F4)")])]),a._v(" "),s("h2",{attrs:{id:"构建-bootloader"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#构建-bootloader"}},[a._v("#")]),a._v(" 构建 Bootloader")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone https://github.com/PX4/Bootloader.git\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" Bootloader\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" submodule init\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" submodule update\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v("\n")])])]),s("p",[a._v("在此步骤之后，所有支持的主板的 elf 文件范围都出现在引导 Bootloader 目录中。")]),a._v(" "),s("h2",{attrs:{id:"刷写-bootloader"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#刷写-bootloader"}},[a._v("#")]),a._v(" 刷写 Bootloader")]),a._v(" "),s("p",[a._v("以下说明适用于 Blackmagic/Dronecode probe。 其他 JTAG 仿真器需要不同但相似的步骤。 试图刷新引导加载程序的开发人员应具备所需的知识。")]),a._v(" "),s("p",[a._v("The instructions below are valid for a Blackmagic / Dronecode probe. Other JTAG probes will need different but similar steps. Developers attempting to flash the bootloader should have the required knowledge. If you do not know how to do this you probably should reconsider if you really need to change anything about the bootloader.")]),a._v(" "),s("p",[a._v("这些指令适用于"),s("a",{attrs:{href:"https://www.segger.com/jlink-gdb-server.html",target:"_blank",rel:"noopener noreferrer"}},[a._v(" J-Link GDB server"),s("OutboundLink")],1),a._v("。")]),a._v(" "),s("ol",[s("li",[a._v("断开 JTAG 电缆的连接")]),a._v(" "),s("li",[a._v("连接 USB 电源线")]),a._v(" "),s("li",[a._v("连接 JTAG 电缆")])]),a._v(" "),s("h3",{attrs:{id:"黑魔法-无人机探测器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#黑魔法-无人机探测器"}},[a._v("#")]),a._v(" 黑魔法/无人机探测器")]),a._v(" "),s("h4",{attrs:{id:"使用正确的串行端口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用正确的串行端口"}},[a._v("#")]),a._v(" 使用正确的串行端口")]),a._v(" "),s("ul",[s("li",[a._v("在 Linux 上： "),s("code",[a._v("/dev/serial/by-id/usb-Black_Sphere_XXX-if00")])]),a._v(" "),s("li",[a._v("在 MAC OS 上：确保使用 cu.xxx 端口，而不是 tty.xxx 端口： "),s("code",[a._v("tar ext /dev/tty.usbmodemDDEasdf")])])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("arm-none-eabi-gdb\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("gdb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" ext /dev/serial/by-id/usb-Black_Sphere_XXX-if00\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("gdb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" mon swdp_scan\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("gdb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" attach "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("gdb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" mon option erase\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("gdb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" mon erase_mass\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("gdb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" load tapv1_bl.elf\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n        Transfer rate: "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("17")]),a._v(" KB/sec, "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("828")]),a._v(" bytes/write.\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("gdb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("kill")]),a._v("\n        Transfer rate: "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("17")]),a._v(" KB/sec, "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("828")]),a._v(" bytes/write.\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("gdb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("kill")]),a._v("\n")])])]),s("h3",{attrs:{id:"j-link"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#j-link"}},[a._v("#")]),a._v(" J-Link")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://www.segger.com/downloads/jlink",target:"_blank",rel:"noopener noreferrer"}},[a._v(" Download the J-Link software "),s("OutboundLink")],1),a._v("并按照 Segger 网站的说明进行安装。")]),a._v(" "),s("h4",{attrs:{id:"系统必备组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#系统必备组件"}},[a._v("#")]),a._v(" 系统必备组件")]),a._v(" "),s("p",[a._v("以下命令用于为使用 STM32F427VI SoC 的飞行控制器运行服务器：")]),a._v(" "),s("h4",{attrs:{id:"运行-jlink-gdb-服务器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运行-jlink-gdb-服务器"}},[a._v("#")]),a._v(" 运行 JLink GDB 服务器")]),a._v(" "),s("p",[a._v("常见目标的 "),s("code",[a._v("--device")]),a._v("/SoC是：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("JLinkGDBServer -select "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("USB")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" -device STM32F427VI -if SWD-DP -speed "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("20000")]),a._v("\n")])])]),s("p",[a._v("The "),s("code",[a._v("--device")]),a._v("/SoC for common targets is:")]),a._v(" "),s("ul",[s("li",[a._v("**FMUv2、FMUv3、FMUv4、aerofc-v1、mindpx-v2：**STM32F427VI")]),a._v(" "),s("li",[a._v("**px4_fmu-v4pro：**STM32F469II")]),a._v(" "),s("li",[s("strong",[a._v("px4_fmu-v5：")]),a._v(" STM32F765II")]),a._v(" "),s("li",[a._v("**crazyflie：**STM32F405RG")])]),a._v(" "),s("h4",{attrs:{id:"连接-gdb"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#连接-gdb"}},[a._v("#")]),a._v(" 连接 GDB")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("arm-none-eabi-gdb\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("gdb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" ext :2331\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("gdb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" load aerofcv1_bl.elf\n")])])]),s("h3",{attrs:{id:"故障处理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#故障处理"}},[a._v("#")]),a._v(" 故障处理")]),a._v(" "),s("p",[a._v("If any of the commands above are not found, you are either not using a Blackmagic probe or its software is outdated. Upgrade the on-probe software first.")]),a._v(" "),s("p",[a._v("断开目标连接（同时保持 JTAG 连接）并运行")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("Error erasing flash with vFlashErase packet\n")])])]),s("p",[a._v("这将禁用目标供电并尝试另一个闪光周期。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("mon tpwr disable\nswdp_scan\nattach "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\nload tapv1_bl.elf\n")])])]),s("p",[a._v("This will disable target powering and attempt another flash cycle.")])])}),[],!1,null,null,null);t.default=r.exports}}]);