(window.webpackJsonp=window.webpackJsonp||[]).push([[1247],{2643:function(e,t,a){"use strict";a.r(t);var r=a(18),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"uavcan-bootloader-安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#uavcan-bootloader-安装"}},[e._v("#")]),e._v(" UAVCAN Bootloader 安装")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("UAVCAN")]),e._v(" "),a("p",[e._v("devices typically ship with a bootloader pre-installed. Do not follow the instructions in this section unless you are developing UAVCAN devices.")])]),e._v(" "),a("h2",{attrs:{id:"概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[e._v("#")]),e._v(" 概述")]),e._v(" "),a("p",[e._v("The PX4 project includes a standard UAVCAN bootloader for STM32 devices.")]),e._v(" "),a("p",[e._v("The bootloader occupies the first 8–16 KB of flash, and is the first code executed on power-up. Typically, the bootloader performs low-level device initialization, automatically determines the CAN bus baud rate, acts as a UAVCAN dynamic node ID client to obtain a unique node ID, and waits for confirmation from the flight controller before proceeding with application boot.")]),e._v(" "),a("p",[e._v("安装或更新 UAVCAN 引导加载程序需要：")]),e._v(" "),a("h2",{attrs:{id:"系统必备组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#系统必备组件"}},[e._v("#")]),e._v(" 系统必备组件")]),e._v(" "),a("p",[e._v("Installing or updating the UAVCAN bootloader requires:")]),e._v(" "),a("ul",[a("li",[e._v("SWD或 JTAG 接口 (视设备而定), 例如 "),a("a",{attrs:{href:"http://www.blacksphere.co.nz/main/blackmagic",target:"_blank",rel:"noopener noreferrer"}},[e._v(" BlackMagic Probe "),a("OutboundLink")],1),e._v(" 或 "),a("a",{attrs:{href:"http://www.st.com/internet/evalboard/product/251168.jsp",target:"_blank",rel:"noopener noreferrer"}},[e._v(" ST Link v2 "),a("OutboundLink")],1),e._v(";")]),e._v(" "),a("li",[e._v("用于将您的SWD或 JTAG 接口连接到 UAVCAN 设备的调试端口的适配器电缆;")]),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/setup/dev_env.html"}},[e._v(" 支持的 ARM 工具链 ")]),e._v("。")],1)]),e._v(" "),a("h2",{attrs:{id:"设备准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设备准备"}},[e._v("#")]),e._v(" 设备准备")]),e._v(" "),a("p",[e._v("If you are unable to connect to your device using the instructions below, it's possible that firmware already on the device has disabled the MCU's debug pins. To recover from this, you will need to connect your interface's NRST or nSRST pin (pin 15 on the standard ARM 20-pin connector) to your MCU's NRST pin. Obtain your device schematics and PCB layout or contact the manufacturer for details.")]),e._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[e._v("#")]),e._v(" 安装")]),e._v(" "),a("p",[e._v("这样做的过程取决于SWD或 JTAG 的使用接口。")]),e._v(" "),a("p",[e._v("确保 BlackMagic Probe "),a("a",{attrs:{href:"https://github.com/blacksphere/blackmagic/wiki/Hacking",target:"_blank",rel:"noopener noreferrer"}},[e._v("firmware is up to date"),a("OutboundLink")],1),e._v("。")]),e._v(" "),a("h2",{attrs:{id:"blackmagic-probe"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#blackmagic-probe"}},[e._v("#")]),e._v(" BlackMagic Probe")]),e._v(" "),a("p",[e._v("将探头连接到 UAVCAN 设备，然后将探头连接到计算机。")]),e._v(" "),a("p",[e._v("Connect the probe to your UAVCAN device, and connect the probe to your computer.")]),e._v(" "),a("p",[e._v("Identify the probe's device name. This will typically be "),a("code",[e._v("/dev/ttyACM<x>")]),e._v(" or "),a("code",[e._v("/dev/ttyUSB<x>")]),e._v(".")]),e._v(" "),a("p",[e._v("在 "),a("code",[e._v("gdb")]),e._v(" 提示符下，运行：")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("arm-none-eabi-gdb /path/to/your/bootloader/image.elf\n")])])]),a("p",[e._v("如果 "),a("code",[e._v("monitor swdp_scan")]),e._v(" 返回错误，请确保您的接线正确，并且您拥有最新版本的 BlackMagic 固件。")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("target extended /dev/ttyACM0\nmonitor connect_srst "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("enable")]),e._v("\nmonitor swdp_scan\nattach "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("set")]),e._v(" mem inaccessible-by-default off\nload\nrun\n")])])]),a("p",[e._v("确保您拥有最新版本-至少 0.9.0-of "),a("a",{attrs:{href:"http://openocd.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenOCD"),a("OutboundLink")],1),e._v("。")]),e._v(" "),a("h2",{attrs:{id:"st-link-v2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#st-link-v2"}},[e._v("#")]),e._v(" ST-Link v2")]),e._v(" "),a("p",[e._v("将 ST-Link 连接到 UAVCAN 设备，然后将 ST-Link 连接到计算机。")]),e._v(" "),a("p",[e._v("启动 UAVCAN 设备，然后运行：")]),e._v(" "),a("p",[e._v("在 "),a("code",[e._v("gdb")]),e._v(" 提示符下，运行：")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("openocd -f /path/to/your/openocd.cfg "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),e._v("\narm-none-eabi-gdb /path/to/your/bootloader/image.elf\n")])])]),a("p",[e._v("将 JLink 调试器连接到 UAVCAN 设备，并将 JLink 调试器连接到计算机。")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("target extended-remote localhost:3333\nmonitor reset "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("halt")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("set")]),e._v(" mem inaccessible-by-default off\nload\nrun\n")])])]),a("h2",{attrs:{id:"segger-j-link-调试器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#segger-j-link-调试器"}},[e._v("#")]),e._v(" Segger J-Link 调试器")]),e._v(" "),a("p",[e._v("启动 UAVCAN 设备，然后运行：")]),e._v(" "),a("p",[e._v("打开第二个终端，转到包含 esc 的 px4esc_1_6-bootloader.elf 的目录并运行：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("JLinkGDBServer -select USB=0 -device STM32F446RE -if SWD-DP -speed 20000 -vd\n")])])]),a("p",[e._v("在 "),a("code",[e._v("gdb")]),e._v(" 提示符下，运行：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("arm-none-eabi-gdb px4esc_1_6-bootloader.elf\n")])])]),a("p",[e._v("At the "),a("code",[e._v("gdb")]),e._v(" prompt, run:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("tar ext :2331\nload\n")])])]),a("h2",{attrs:{id:"使用segger-jink-调试器擦除flash"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用segger-jink-调试器擦除flash"}},[e._v("#")]),e._v(" 使用SEGGER Jink 调试器擦除Flash")]),e._v(" "),a("p",[e._v("As a recovery method it may be useful to erase flash to factory defaults such that the firmware is using the default parameters. Go to the directory of your SEGGER installation and launch JLinkExe, then run:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("device &lt;name-of-device&gt;\nerase\n")])])]),a("p",[e._v("Replace "),a("code",[e._v("<name-of-device>")]),e._v(" with the name of the microcontroller, e.g. STM32F446RE for the Pixhawk ESC 1.6 or STM32F302K8 for the SV2470VC ESC.")])])}),[],!1,null,null,null);t.default=s.exports}}]);