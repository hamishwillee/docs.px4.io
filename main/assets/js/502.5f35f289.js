(window.webpackJsonp=window.webpackJsonp||[]).push([[502],{1759:function(t,e,a){"use strict";a.r(e);var o=a(19),r=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"bootloader-update"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#bootloader-update"}},[t._v("#")]),t._v(" Bootloader Update")]),t._v(" "),o("p",[t._v("The "),o("em",[t._v("PX4 Bootloader")]),t._v(" is used to load firmware for "),o("RouterLink",{attrs:{to:"/en/flight_controller/pixhawk_series.html"}},[t._v("Pixhawk boards")]),t._v(" (PX4FMU, PX4IO).")],1),t._v(" "),o("p",[t._v("Pixhawk controllers usually comes with an appropriate bootloader version pre-installed.\nHowever in some case it is not present, or an older version is present that needs to be updated.")]),t._v(" "),o("p",[t._v("This topic explains several methods for updating the Pixhawk bootloader.")]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("A case where you may need to update Pixhawk boards that install FMUv2 firmware: "),o("RouterLink",{attrs:{to:"/en/config/firmware.html#bootloader"}},[t._v("Firmware > FMUv2 Bootloader Update")]),t._v(".")],1)]),t._v(" "),o("h2",{attrs:{id:"building-the-px4-bootloader"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#building-the-px4-bootloader"}},[t._v("#")]),t._v(" Building the PX4 Bootloader")]),t._v(" "),o("p",[t._v("Boards starting with FMUv6X (STM32H7) use the in-tree PX4 bootloader.")]),t._v(" "),o("p",[t._v("This can be built from within the PX4-Autopilot folder using the "),o("code",[t._v("make")]),t._v(" command and the board-specific target with a "),o("code",[t._v("_bootloader")]),t._v(" suffix.\nFor FMUv6X the command is:")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("make px4_fmu-v6x_bootloader\n")])])]),o("p",[t._v("This will build the bootloader binary as "),o("code",[t._v("build/px4_fmu-v6x_bootloader/px4_fmu-v6x_bootloader.elf")]),t._v(", which can be flashed via SWD or DFU.\nIf you are building the bootloader you should be familiar with one of these options already.")]),t._v(" "),o("p",[t._v("If you need a HEX file instead of an ELF file, use objcopy:")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("arm-none-eabi-objcopy -O ihex build/px4_fmu-v6x_bootloader/px4_fmu-v6x_bootloader.elf px4_fmu-v6x_bootloader.hex\n")])])]),o("h2",{attrs:{id:"building-the-legacy-px4-bootloader"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#building-the-legacy-px4-bootloader"}},[t._v("#")]),t._v(" Building the Legacy PX4 Bootloader")]),t._v(" "),o("p",[t._v("PX4 boards up to FMUv5X (before STM32H7) used a legacy "),o("a",{attrs:{href:"https://github.com/PX4/Bootloader",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4 bootloader"),o("OutboundLink")],1),t._v(" repository.")]),t._v(" "),o("p",[t._v("Please refer to the instructions in the README to learn how to use it.")]),t._v(" "),o("h2",{attrs:{id:"qgc-bootloader-update"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#qgc-bootloader-update"}},[t._v("#")]),t._v(" QGC Bootloader Update")]),t._v(" "),o("p",[t._v("The easiest approach is to first use "),o("em",[t._v("QGroundControl")]),t._v(" to install firmware that contains the desired/latest bootloader.\nYou can then initiate bootloader update on next restart by setting the parameter: "),o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#SYS_BL_UPDATE"}},[t._v("SYS_BL_UPDATE")]),t._v(".")],1),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("This approach can only be used if "),o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#SYS_BL_UPDATE"}},[t._v("SYS_BL_UPDATE")]),t._v(" is present in firmware (currently just FMUv2 and some custom firmware).")],1)]),t._v(" "),o("p",[t._v("The steps are:")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("Insert an SD card (enables boot logging to debug any problems).")])]),t._v(" "),o("li",[o("p",[o("RouterLink",{attrs:{to:"/en/config/firmware.html#custom"}},[t._v("Update the Firmware")]),t._v(" with an image containing the new/desired bootloader.")],1),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("The updated bootloader might be supplied in custom firmware (i.e. from the dev team), or it or may be included in the latest master.")])])]),t._v(" "),o("li",[o("p",[t._v("Wait for the vehicle to reboot.")])]),t._v(" "),o("li",[o("p",[o("RouterLink",{attrs:{to:"/en/advanced_config/parameters.html"}},[t._v("Find and enable")]),t._v(" the parameter "),o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#SYS_BL_UPDATE"}},[t._v("SYS_BL_UPDATE")]),t._v(".")],1)]),t._v(" "),o("li",[o("p",[t._v("Reboot (disconnect/reconnect the board).\nThe bootloader update will only take a few seconds.")])])]),t._v(" "),o("p",[t._v("Generally at this point you may then want to "),o("RouterLink",{attrs:{to:"/en/config/firmware.html"}},[t._v("update the firmware")]),t._v(" again using the correct/newly installed bootloader.")],1),t._v(" "),o("p",[t._v("An specific example of this process for updating the FMUv2 bootloader is given below.")]),t._v(" "),o("h3",{attrs:{id:"fmuv2-bootloader-update"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#fmuv2-bootloader-update"}},[t._v("#")]),t._v(" FMUv2 Bootloader Update")]),t._v(" "),o("p",[t._v("If "),o("em",[t._v("QGroundControl")]),t._v(" installs the FMUv2 target (see console during installation), and you have a newer board, you may need to update the bootloader in order to access all the memory on your flight controller.")]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("Early FMUv2 "),o("RouterLink",{attrs:{to:"/en/flight_controller/pixhawk_series.html#fmu_versions"}},[t._v("Pixhawk-series")]),t._v(" flight controllers had a "),o("RouterLink",{attrs:{to:"/en/flight_controller/silicon_errata.html#fmuv2-pixhawk-silicon-errata"}},[t._v("hardware issue")]),t._v(" that restricted them to using 1MB of flash memory.\nThe problem is fixed on newer boards, but you may need to update the factory-provided bootloader in order to install FMUv3 Firmware and access all 2MB available memory.")],1)]),t._v(" "),o("p",[t._v("To update the bootloader:")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("Insert an SD card (enables boot logging to debug any problems).")])]),t._v(" "),o("li",[o("p",[o("RouterLink",{attrs:{to:"/en/config/firmware.html"}},[t._v("Update the Firmware")]),t._v(" to PX4 "),o("em",[t._v("master")]),t._v(" version (when updating the firmware, check "),o("strong",[t._v("Advanced settings")]),t._v(" and then select "),o("strong",[t._v("Developer Build (master)")]),t._v(" from the dropdown list).\n"),o("em",[t._v("QGroundControl")]),t._v(" will automatically detect that the hardware supports FMUv2 and install the appropriate Firmware.")],1),t._v(" "),o("p",[o("img",{attrs:{src:a(355),alt:"FMUv2 update"}})]),t._v(" "),o("p",[t._v("Wait for the vehicle to reboot.")])]),t._v(" "),o("li",[o("p",[o("RouterLink",{attrs:{to:"/en/advanced_config/parameters.html"}},[t._v("Find and enable")]),t._v(" the parameter "),o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#SYS_BL_UPDATE"}},[t._v("SYS_BL_UPDATE")]),t._v(".")],1)]),t._v(" "),o("li",[o("p",[t._v("Reboot (disconnect/reconnect the board).\nThe bootloader update will only take a few seconds.")])]),t._v(" "),o("li",[o("p",[t._v("Then "),o("RouterLink",{attrs:{to:"/en/config/firmware.html"}},[t._v("Update the Firmware")]),t._v(" again.\nThis time "),o("em",[t._v("QGroundControl")]),t._v(" should autodetect the hardware as FMUv3 and update the Firmware appropriately.")],1),t._v(" "),o("p",[o("img",{attrs:{src:a(464),alt:"FMUv3 update"}})]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("If the hardware has the "),o("RouterLink",{attrs:{to:"/en/flight_controller/silicon_errata.html#fmuv2-pixhawk-silicon-errata"}},[t._v("Silicon Errata")]),t._v(" it will still be detected as FMUv2 and you will see that FMUv2 was re-installed (in console).\nIn this case you will not be able to install FMUv3 hardware.")],1)])])]),t._v(" "),o("h2",{attrs:{id:"dronecode-probe-bootloader-update"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#dronecode-probe-bootloader-update"}},[t._v("#")]),t._v(" Dronecode Probe Bootloader Update")]),t._v(" "),o("p",[t._v('The following steps explain how you can "manually" update the bootloader using the dronecode probe:')]),t._v(" "),o("ol",[o("li",[o("p",[t._v("Get a binary containing the bootloader (either from dev team or build it yourself).")])]),t._v(" "),o("li",[o("p",[t._v("Connect the Dronecode probe to your PC via USB.")])]),t._v(" "),o("li",[o("p",[t._v("Go into the directory containing the binary and run the following command in the terminal:")]),t._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[t._v("arm-none-eabi-gdb px4fmuv5_bl.elf\n")])])])]),t._v(" "),o("li",[o("p",[t._v("The "),o("em",[t._v("gdb terminal")]),t._v(" appears and it should display the following output:")]),t._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[t._v("GNU gdb "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("GNU Tools "),o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" Arm Embedded Processors "),o("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v("-2017-q4-major"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token number"}},[t._v("8.0")]),t._v(".50.20171128-git\nCopyright "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("C"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token number"}},[t._v("2017")]),t._v(" Free Software Foundation, Inc.\nLicense GPLv3+: GNU GPL version "),o("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" or later "),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("http://gnu.org/licenses/gpl.html"),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\nThis is "),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("free")]),t._v(" software: you are "),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("free")]),t._v(" to change and redistribute it.\nThere is NO WARRANTY, to the extent permitted by law.\nType "),o("span",{pre:!0,attrs:{class:"token string"}},[t._v('"show copying"')]),t._v("    and "),o("span",{pre:!0,attrs:{class:"token string"}},[t._v('"show warranty"')]),t._v(" "),o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" details.\nThis GDB was configured as "),o("span",{pre:!0,attrs:{class:"token string"}},[t._v('"--host=x86_64-linux-gnu --target=arm-none-eabi"')]),o("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\nType "),o("span",{pre:!0,attrs:{class:"token string"}},[t._v('"show configuration"')]),t._v(" "),o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" configuration details.\nFor bug reporting instructions, please see:\n"),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("http://www.gnu.org/software/gdb/bugs/"),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(".\nFind the GDB manual and other documentation resources online at:\n"),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("http://www.gnu.org/software/gdb/documentation/"),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(".\nFor help, "),o("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("type")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token string"}},[t._v('"help"')]),o("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\nType "),o("span",{pre:!0,attrs:{class:"token string"}},[t._v('"apropos word"')]),t._v(" to search "),o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" commands related to "),o("span",{pre:!0,attrs:{class:"token string"}},[t._v('"word"')]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\nReading symbols from px4fmuv5_bl.elf"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".done.\n")])])])]),t._v(" "),o("li",[o("p",[t._v("Find your "),o("code",[t._v("<dronecode-probe-id>")]),t._v(" by running an ls command in the "),o("strong",[t._v("/dev/serial/by-id")]),t._v(" directory.")])]),t._v(" "),o("li",[o("p",[t._v("Now connect to the Dronecode probe with the following command:")]),t._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[o("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" ext /dev/serial/by-id/"),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("dronecode-probe-id"),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])]),t._v(" "),o("li",[o("p",[t._v("Power on the Pixhawk with another USB cable and connect the Dronecode probe to the FMU-DEBUG port.")]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("To be able to connect the Dronecode probe to the FMU-DEBUG port, you may need to remove the case (e.g. on Pixhawk 4 you would do this using a T6 Torx screwdriver).")])])]),t._v(" "),o("li",[o("p",[t._v("Use the following command to scan for the Pixhawk’s swd and connect to it:")]),t._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gdb"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" mon swdp_scan\n"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gdb"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" attach "),o("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])])])]),t._v(" "),o("li",[o("p",[t._v("Load the binary into the Pixhawk:")]),t._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gdb"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" load\n")])])])])]),t._v(" "),o("p",[t._v("After the bootloader has updated you can "),o("RouterLink",{attrs:{to:"/en/config/firmware.html"}},[t._v("Load PX4 Firmware")]),t._v(" using "),o("em",[t._v("QGroundControl")]),t._v(".")],1),t._v(" "),o("h2",{attrs:{id:"other-boards-non-pixhawk"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#other-boards-non-pixhawk"}},[t._v("#")]),t._v(" Other Boards (Non-Pixhawk)")]),t._v(" "),o("p",[t._v("Boards that are not part of the "),o("RouterLink",{attrs:{to:"/en/flight_controller/pixhawk_series.html"}},[t._v("Pixhawk Series")]),t._v(" will have their own mechanisms for bootloader update.")],1),t._v(" "),o("p",[t._v("For boards that are preflashed with Betaflight, see "),o("RouterLink",{attrs:{to:"/en/advanced_config/bootloader_update_from_betaflight.html"}},[t._v("Bootloader Flashing onto Betaflight Systems")]),t._v(".")],1)])}),[],!1,null,null,null);e.default=r.exports},355:function(t,e,a){t.exports=a.p+"assets/img/bootloader_update.bd69dc9b.jpg"},464:function(t,e,a){t.exports=a.p+"assets/img/bootloader_fmu_v3_update.138bc25e.jpg"}}]);