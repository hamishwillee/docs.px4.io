(window.webpackJsonp=window.webpackJsonp||[]).push([[821],{2004:function(t,e,a){"use strict";a.r(e);var s=a(19),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"stm32-bootloader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stm32-bootloader"}},[t._v("#")]),t._v(" STM32 Bootloader")]),t._v(" "),a("p",[t._v("The code for the PX4 bootloader is available from the Github "),a("a",{attrs:{href:"https://github.com/px4/bootloader",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bootloader"),a("OutboundLink")],1),t._v(" repository.")]),t._v(" "),a("h2",{attrs:{id:"supported-boards"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#supported-boards"}},[t._v("#")]),t._v(" Supported Boards")]),t._v(" "),a("ul",[a("li",[t._v("FMUv2 (Pixhawk 1, STM32F4)")]),t._v(" "),a("li",[t._v("FMUv3 (Pixhawk 2, STM32F4)")]),t._v(" "),a("li",[t._v("FMUv4 (Pixracer 3 and Pixhawk 3 Pro, STM32F4)")]),t._v(" "),a("li",[t._v("FMUv5 (Pixhawk 4, STM32F7)")]),t._v(" "),a("li",[t._v("TAPv1 (TBA, STM32F4)")]),t._v(" "),a("li",[t._v("ASCv1 (TBA, STM32F4)")])]),t._v(" "),a("h2",{attrs:{id:"building-the-bootloader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#building-the-bootloader"}},[t._v("#")]),t._v(" Building the Bootloader")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/PX4/Bootloader.git\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" Bootloader\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" submodule init\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" submodule update\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v("\n")])])]),a("p",[t._v("After this step a range of elf files for all supported boards are present in the Bootloader directory.")]),t._v(" "),a("h2",{attrs:{id:"flashing-the-bootloader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flashing-the-bootloader"}},[t._v("#")]),t._v(" Flashing the Bootloader")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("The right power sequence is critical for some boards to allow JTAG / SWD access. Follow these steps exactly as described.")])]),t._v(" "),a("p",[t._v("The instructions below are valid for a Blackmagic / Dronecode probe.\nOther JTAG probes will need different but similar steps.\nDevelopers attempting to flash the bootloader should have the required knowledge.\nIf you do not know how to do this you probably should reconsider if you really need to change anything about the bootloader.")]),t._v(" "),a("p",[t._v("The sequence is")]),t._v(" "),a("ol",[a("li",[t._v("Disconnect the JTAG cable")]),t._v(" "),a("li",[t._v("Connect the USB power cable")]),t._v(" "),a("li",[t._v("Connect the JTAG cable")])]),t._v(" "),a("h3",{attrs:{id:"black-magic-dronecode-probe"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#black-magic-dronecode-probe"}},[t._v("#")]),t._v(" Black Magic / Dronecode Probe")]),t._v(" "),a("h4",{attrs:{id:"using-the-right-serial-port"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-the-right-serial-port"}},[t._v("#")]),t._v(" Using the right serial port")]),t._v(" "),a("ul",[a("li",[t._v("On LINUX: "),a("code",[t._v("/dev/serial/by-id/usb-Black_Sphere_XXX-if00")])]),t._v(" "),a("li",[t._v("On MAC OS: Make sure to use the cu.xxx port, not the tty.xxx port: "),a("code",[t._v("tar ext /dev/tty.usbmodemDDEasdf")])])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("arm-none-eabi-gdb\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" ext /dev/serial/by-id/usb-Black_Sphere_XXX-if00\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" mon swdp_scan\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" attach "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" mon option erase\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" mon erase_mass\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" load tapv1_bl.elf\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n        Transfer rate: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v(" KB/sec, "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("828")]),t._v(" bytes/write.\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("kill")]),t._v("\n")])])]),a("h3",{attrs:{id:"j-link"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#j-link"}},[t._v("#")]),t._v(" J-Link")]),t._v(" "),a("p",[t._v("These instructions are for the "),a("a",{attrs:{href:"https://www.segger.com/jlink-gdb-server.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("J-Link GDB server"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h4",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[t._v("#")]),t._v(" Prerequisites")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.segger.com/downloads/jlink",target:"_blank",rel:"noopener noreferrer"}},[t._v("Download the J-Link software"),a("OutboundLink")],1),t._v(" from the Segger website and install it according to their instructions.")]),t._v(" "),a("h4",{attrs:{id:"run-the-jlink-gdb-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run-the-jlink-gdb-server"}},[t._v("#")]),t._v(" Run the JLink GDB server")]),t._v(" "),a("p",[t._v("The command below is used to run the server for flight controllers that use the STM32F427VI SoC:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("JLinkGDBServer -select "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("USB")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" -device STM32F427VI -if SWD-DP -speed "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20000")]),t._v("\n")])])]),a("p",[t._v("The "),a("code",[t._v("--device")]),t._v("/SoC for common targets is:")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("FMUv2, FMUv3, FMUv4, aerofc-v1, mindpx-v2:")]),t._v(" STM32F427VI")]),t._v(" "),a("li",[a("strong",[t._v("px4_fmu-v4pro:")]),t._v(" STM32F469II")]),t._v(" "),a("li",[a("strong",[t._v("px4_fmu-v5:")]),t._v(" STM32F765II")]),t._v(" "),a("li",[a("strong",[t._v("crazyflie:")]),t._v(" STM32F405RG")])]),t._v(" "),a("h4",{attrs:{id:"connect-gdb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#connect-gdb"}},[t._v("#")]),t._v(" Connect GDB")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("arm-none-eabi-gdb\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" ext :2331\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" load aerofcv1_bl.elf\n")])])]),a("h3",{attrs:{id:"troubleshooting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[t._v("#")]),t._v(" Troubleshooting")]),t._v(" "),a("p",[t._v("If any of the commands above are not found, you are either not using a Blackmagic probe or its software is outdated.\nUpgrade the on-probe software first.")]),t._v(" "),a("p",[t._v("If this error message occurs:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Error erasing flash with vFlashErase packet\n")])])]),a("p",[t._v("Disconnect the target (while leaving JTAG connected) and run")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("mon tpwr disable\nswdp_scan\nattach "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nload tapv1_bl.elf\n")])])]),a("p",[t._v("This will disable target powering and attempt another flash cycle.")])])}),[],!1,null,null,null);e.default=r.exports}}]);