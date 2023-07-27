(window.webpackJsonp=window.webpackJsonp||[]).push([[629],{1736:function(t,e,a){"use strict";a.r(e);var o=a(19),r=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"bootloader-update"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#bootloader-update"}},[t._v("#")]),t._v(" Bootloader Update")]),t._v(" "),o("p",[t._v("The "),o("a",{attrs:{href:"https://github.com/PX4/Bootloader",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4 bootloader"),o("OutboundLink")],1),t._v(" is used to load firmware for "),o("RouterLink",{attrs:{to:"/en/flight_controller/pixhawk_series.html"}},[t._v("Pixhawk boards")]),t._v(" (PX4FMU, PX4IO).")],1),t._v(" "),o("p",[t._v("This topic explains several methods for updating the Pixhawk bootloader.")]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("Pixhawk hardware usually comes with an appropriate bootloader version pre-installed.\nA case where you may need to update is newer Pixhawk boards that install FMUv2 firmware: "),o("RouterLink",{attrs:{to:"/en/config/firmware.html#bootloader"}},[t._v("Firmware > FMUv2 Bootloader Update")]),t._v(".")],1)]),t._v(" "),o("h2",{attrs:{id:"building-the-new-px4-bootloader-yourself"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#building-the-new-px4-bootloader-yourself"}},[t._v("#")]),t._v(" Building the new PX4 Bootloader Yourself")]),t._v(" "),o("p",[t._v("Boards starting with FMUv6X (STM32H7) use the in-tree PX4 bootloader. Older boards use the bootloader from the legacy "),o("a",{attrs:{href:"https://github.com/PX4/Bootloader",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4 bootloader"),o("OutboundLink")],1),t._v(" repository. Please refer to the instructions in the README to learn how to use it.")]),t._v(" "),o("p",[t._v("Build the new bootloader in the PX4-Autopilot folder with:")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("make px4_fmu-v6x_bootloader\n")])])]),o("p",[t._v("Which will build the bootloader binary as "),o("code",[t._v("build/px4_fmu-v6x_bootloader/px4_fmu-v6x_bootloader.elf")]),t._v(" which can be flashed via SWD or DFU. If you are building the bootloader you should be familiar with one of these options already.")]),t._v(" "),o("p",[t._v("If you need a HEX file instead of an ELF file, use objcopy:")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("arm-none-eabi-objcopy -O ihex build/px4_fmu-v6x_bootloader/px4_fmu-v6x_bootloader.elf px4_fmu-v6x_bootloader.hex\n")])])]),o("h2",{attrs:{id:"qgc-bootloader-update"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#qgc-bootloader-update"}},[t._v("#")]),t._v(" QGC Bootloader Update")]),t._v(" "),o("p",[t._v("The easiest approach is to first use "),o("em",[t._v("QGroundControl")]),t._v(" to install firmware with the desired/latest bootloader.\nYou can then initiate bootloader update on next restart by setting the parameter: "),o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#SYS_BL_UPDATE"}},[t._v("SYS_BL_UPDATE")]),t._v(".")],1),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("This approach can only be used if "),o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#SYS_BL_UPDATE"}},[t._v("SYS_BL_UPDATE")]),t._v(" is present in firmware (currently just FMUv2 and some custom firmware).")],1)]),t._v(" "),o("p",[t._v("The steps are:")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("Insert an SD card (enables boot logging to debug any problems).")])]),t._v(" "),o("li",[o("p",[o("RouterLink",{attrs:{to:"/en/config/firmware.html#custom"}},[t._v("Update the Firmware")]),t._v(" with an image containing the new/desired bootloader.")],1),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("The updated bootloader might be supplied in custom firmware (i.e. from the dev team), or it or may be included in the latest master.")])]),t._v(" "),o("p",[o("img",{attrs:{src:a(355),alt:"FMUv2 update"}})])]),t._v(" "),o("li",[o("p",[t._v("Wait for the vehicle to reboot.")])]),t._v(" "),o("li",[o("p",[o("RouterLink",{attrs:{to:"/en/advanced_config/parameters.html"}},[t._v("Find and enable")]),t._v(" the parameter "),o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#SYS_BL_UPDATE"}},[t._v("SYS_BL_UPDATE")]),t._v(".")],1)]),t._v(" "),o("li",[o("p",[t._v("Reboot (disconnect/reconnect the board).\nThe bootloader update will only take a few seconds.")])])]),t._v(" "),o("p",[t._v("Generally at this point you may then want to "),o("RouterLink",{attrs:{to:"/en/config/firmware.html"}},[t._v("update the firmware")]),t._v(" again using the correct/newly installed bootloader.")],1),t._v(" "),o("h3",{attrs:{id:"dronecode-probe-bootloader-update"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#dronecode-probe-bootloader-update"}},[t._v("#")]),t._v(" Dronecode Probe Bootloader Update")]),t._v(" "),o("p",[t._v('The following steps explain how you can "manually" update the bootloader using the dronecode probe:')]),t._v(" "),o("ol",[o("li",[o("p",[t._v("Get a binary containing the bootloader (either from dev team or build it yourself).")])]),t._v(" "),o("li",[o("p",[t._v("Connect the Dronecode probe to your PC via USB.")])]),t._v(" "),o("li",[o("p",[t._v("Go into the directory containing the binary and run the following command in the terminal:")]),t._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[t._v("arm-none-eabi-gdb px4fmuv5_bl.elf\n")])])])]),t._v(" "),o("li",[o("p",[t._v("The "),o("em",[t._v("gdb terminal")]),t._v(" appears and it should display the following output:")]),t._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[t._v("GNU gdb "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("GNU Tools "),o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" Arm Embedded Processors "),o("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v("-2017-q4-major"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token number"}},[t._v("8.0")]),t._v(".50.20171128-git\nCopyright "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("C"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token number"}},[t._v("2017")]),t._v(" Free Software Foundation, Inc.\nLicense GPLv3+: GNU GPL version "),o("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" or later "),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("http://gnu.org/licenses/gpl.html"),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\nThis is "),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("free")]),t._v(" software: you are "),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("free")]),t._v(" to change and redistribute it.\nThere is NO WARRANTY, to the extent permitted by law.  Type "),o("span",{pre:!0,attrs:{class:"token string"}},[t._v('"show copying"')]),t._v("\nand "),o("span",{pre:!0,attrs:{class:"token string"}},[t._v('"show warranty"')]),t._v(" "),o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" details.\nThis GDB was configured as "),o("span",{pre:!0,attrs:{class:"token string"}},[t._v('"--host=x86_64-linux-gnu --target=arm-none-eabi"')]),o("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\nType "),o("span",{pre:!0,attrs:{class:"token string"}},[t._v('"show configuration"')]),t._v(" "),o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" configuration details.\nFor bug reporting instructions, please see:\n"),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("http://www.gnu.org/software/gdb/bugs/"),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(".\nFind the GDB manual and other documentation resources online at:\n"),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("http://www.gnu.org/software/gdb/documentation/"),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(".\nFor help, "),o("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("type")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token string"}},[t._v('"help"')]),o("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\nType "),o("span",{pre:!0,attrs:{class:"token string"}},[t._v('"apropos word"')]),t._v(" to search "),o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" commands related to "),o("span",{pre:!0,attrs:{class:"token string"}},[t._v('"word"')]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\nReading symbols from px4fmuv5_bl.elf"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".done.\n")])])])]),t._v(" "),o("li",[o("p",[t._v("Find your "),o("code",[t._v("<dronecode-probe-id>")]),t._v(" by running an ls command in the "),o("strong",[t._v("/dev/serial/by-id")]),t._v(" directory.")])]),t._v(" "),o("li",[o("p",[t._v("Now connect to the Dronecode probe with the following command:")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("tar ext /dev/serial/by-id/<dronecode-probe-id>\n")])])])]),t._v(" "),o("li",[o("p",[t._v("Power on the Pixhawk with another USB cable and connect the Dronecode probe to the FMU-DEBUG port.")]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("To be able to connect the Dronecode probe to the FMU-DEBUG port, you may need to remove the case (e.g. on Pixhawk 4 you would do this using a T6 Torx screwdriver).")])])]),t._v(" "),o("li",[o("p",[t._v("Use the following command to scan for the Pixhawk’s swd and connect to it:")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("(gdb) mon swdp_scan\n(gdb) attach 1\n")])])])]),t._v(" "),o("li",[o("p",[t._v("Load the binary into the Pixhawk:")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("(gdb) load\n")])])])])]),t._v(" "),o("p",[t._v("After the bootloader has updated you can "),o("RouterLink",{attrs:{to:"/en/config/firmware.html"}},[t._v("Load PX4 Firmware")]),t._v(" using "),o("em",[t._v("QGroundControl")]),t._v(".")],1),t._v(" "),o("h2",{attrs:{id:"other-boards-non-pixhawk"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#other-boards-non-pixhawk"}},[t._v("#")]),t._v(" Other Boards (Non-Pixhawk)")]),t._v(" "),o("p",[t._v("Boards that are not part of the "),o("RouterLink",{attrs:{to:"/en/flight_controller/pixhawk_series.html"}},[t._v("Pixhawk Series")]),t._v(" will have their own mechanisms for bootloader update.")],1),t._v(" "),o("p",[t._v("For boards that are preflashed with Betaflight, see "),o("RouterLink",{attrs:{to:"/en/advanced_config/bootloader_update_from_betaflight.html"}},[t._v("Bootloader Flashing onto Betaflight Systems")]),t._v(".")],1)])}),[],!1,null,null,null);e.default=r.exports},355:function(t,e,a){t.exports=a.p+"assets/img/bootloader_update.bd69dc9b.jpg"}}]);