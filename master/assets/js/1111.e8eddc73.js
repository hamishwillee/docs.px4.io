(window.webpackJsonp=window.webpackJsonp||[]).push([[1111],{2071:function(e,t,a){"use strict";a.r(t);var r=a(19),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"uavcan-bootloader-installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#uavcan-bootloader-installation"}},[e._v("#")]),e._v(" UAVCAN Bootloader Installation")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("UAVCAN devices typically ship with a bootloader pre-installed.\nDo not follow the instructions in this section unless you are developing UAVCAN devices.")])]),e._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("p",[e._v("The PX4 project includes a standard UAVCAN bootloader for STM32 devices.")]),e._v(" "),a("p",[e._v("The bootloader occupies the first 8–16 KB of flash, and is the first code executed on power-up.\nTypically, the bootloader performs low-level device initialization, automatically determines the CAN bus baud rate, acts as a UAVCAN dynamic node ID client to obtain a unique node ID, and waits for confirmation from the flight controller before proceeding with application boot.")]),e._v(" "),a("p",[e._v("This process ensures that a UAVCAN device can recover from invalid or corrupted application firmware without user intervention, and also permits automatic firmware updates.")]),e._v(" "),a("h2",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),a("p",[e._v("Installing or updating the UAVCAN bootloader requires:")]),e._v(" "),a("ul",[a("li",[e._v("An SWD or JTAG interface (depending on device), for example the "),a("a",{attrs:{href:"https://github.com/blacksphere/blackmagic/wiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("BlackMagic Probe"),a("OutboundLink")],1),e._v(" or the "),a("a",{attrs:{href:"http://www.st.com/internet/evalboard/product/251168.jsp",target:"_blank",rel:"noopener noreferrer"}},[e._v("ST-Link v2"),a("OutboundLink")],1),e._v(";")]),e._v(" "),a("li",[e._v("An adapter cable to connect your SWD or JTAG interface to the UAVCAN device's debugging port;")]),e._v(" "),a("li",[e._v("A "),a("RouterLink",{attrs:{to:"/en/dev_setup/dev_env.html"}},[e._v("supported ARM toolchain")]),e._v(".")],1)]),e._v(" "),a("h2",{attrs:{id:"device-preparation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#device-preparation"}},[e._v("#")]),e._v(" Device Preparation")]),e._v(" "),a("p",[e._v("If you are unable to connect to your device using the instructions below, it's possible that firmware already on the device has disabled the MCU's debug pins. To recover from this, you will need to connect your interface's NRST or nSRST pin (pin 15 on the standard ARM 20-pin connector) to your MCU's NRST pin. Obtain your device schematics and PCB layout or contact the manufacturer for details.")]),e._v(" "),a("h2",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),a("p",[e._v("After compiling or obtaining a bootloader image for your device (refer to device documentation for details), the bootloader must be copied to the beginning of the device's flash memory.")]),e._v(" "),a("p",[e._v("The process for doing this depends on the SWD or JTAG interface used.")]),e._v(" "),a("h2",{attrs:{id:"blackmagic-probe"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#blackmagic-probe"}},[e._v("#")]),e._v(" BlackMagic Probe")]),e._v(" "),a("p",[e._v("Ensure your BlackMagic Probe "),a("a",{attrs:{href:"https://github.com/blacksphere/blackmagic/wiki/Hacking",target:"_blank",rel:"noopener noreferrer"}},[e._v("firmware is up to date"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("Connect the probe to your UAVCAN device, and connect the probe to your computer.")]),e._v(" "),a("p",[e._v("Identify the probe's device name. This will typically be "),a("code",[e._v("/dev/ttyACM<x>")]),e._v(" or "),a("code",[e._v("/dev/ttyUSB<x>")]),e._v(".")]),e._v(" "),a("p",[e._v("Power up your UAVCAN device, and run:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("arm-none-eabi-gdb /path/to/your/bootloader/image.elf\n")])])]),a("p",[e._v("At the "),a("code",[e._v("gdb")]),e._v(" prompt, run:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("target extended /dev/ttyACM0\nmonitor connect_srst "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("enable")]),e._v("\nmonitor swdp_scan\nattach "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("set")]),e._v(" mem inaccessible-by-default off\nload\nrun\n")])])]),a("p",[e._v("If "),a("code",[e._v("monitor swdp_scan")]),e._v(" returns an error, ensure your wiring is correct, and that you have an up-to-date version of the BlackMagic firmware.")]),e._v(" "),a("h2",{attrs:{id:"st-link-v2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#st-link-v2"}},[e._v("#")]),e._v(" ST-Link v2")]),e._v(" "),a("p",[e._v("Ensure you have a recent version—at least 0.9.0—of "),a("a",{attrs:{href:"http://openocd.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenOCD"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("Connect the ST-Link to your UAVCAN device, and connect the ST-Link to your computer.")]),e._v(" "),a("p",[e._v("Power up your UAVCAN device, and run:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("openocd -f /path/to/your/openocd.cfg "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),e._v("\narm-none-eabi-gdb /path/to/your/bootloader/image.elf\n")])])]),a("p",[e._v("At the "),a("code",[e._v("gdb")]),e._v(" prompt, run:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("target extended-remote localhost:3333\nmonitor reset "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("halt")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("set")]),e._v(" mem inaccessible-by-default off\nload\nrun\n")])])]),a("h2",{attrs:{id:"segger-j-link-debugger"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#segger-j-link-debugger"}},[e._v("#")]),e._v(" Segger J-Link Debugger")]),e._v(" "),a("p",[e._v("Connect the JLink Debugger to your UAVCAN device, and connect the JLink Debugger to your computer.")]),e._v(" "),a("p",[e._v("Power up your UAVCAN device, and run:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("JLinkGDBServer -select USB=0 -device STM32F446RE -if SWD-DP -speed 20000 -vd\n")])])]),a("p",[e._v("Open a second terminal, navigate to the directory that includes the px4esc_1_6-bootloader.elf for the esc and run:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("arm-none-eabi-gdb px4esc_1_6-bootloader.elf\n")])])]),a("p",[e._v("At the "),a("code",[e._v("gdb")]),e._v(" prompt, run:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("tar ext :2331\nload\n")])])]),a("h2",{attrs:{id:"erasing-flash-with-segger-jlink-debugger"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#erasing-flash-with-segger-jlink-debugger"}},[e._v("#")]),e._v(" Erasing Flash with SEGGER JLink Debugger")]),e._v(" "),a("p",[e._v("As a recovery method it may be useful to erase flash to factory defaults such that the firmware is using the default parameters. Go to the directory of your SEGGER installation and launch JLinkExe, then run:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("device <name-of-device>\nerase\n")])])]),a("p",[e._v("Replace "),a("code",[e._v("<name-of-device>")]),e._v(" with the name of the microcontroller, e.g. STM32F446RE for the Pixhawk ESC 1.6 or STM32F302K8 for the SV2470VC ESC.")])])}),[],!1,null,null,null);t.default=o.exports}}]);