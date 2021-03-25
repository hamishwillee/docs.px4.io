(window.webpackJsonp=window.webpackJsonp||[]).push([[1024],{2142:function(t,e,r){"use strict";r.r(e);var o=r(18),n=Object(o.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"nuttx-board-porting-guide"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#nuttx-board-porting-guide"}},[t._v("#")]),t._v(" NuttX Board Porting Guide")]),t._v(" "),r("p",[t._v("In order to port PX4 on NuttX to a new hardware target, that hardware target must be supported by NuttX. The NuttX project maintains an excellent "),r("a",{attrs:{href:"https://cwiki.apache.org/confluence/display/NUTTX/Porting+Guide",target:"_blank",rel:"noopener noreferrer"}},[t._v("porting guide"),r("OutboundLink")],1),t._v(" for porting NuttX to a new computing platform.")]),t._v(" "),r("p",[t._v("The following guide assumes you are using an already supported hardware target or have ported NuttX (including the "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/platforms/nuttx/src/px4",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4 base layer"),r("OutboundLink")],1),t._v(") already.")]),t._v(" "),r("p",[t._v("The configuration files for all boards, including linker scripts and other required settings, are located under "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/boards/",target:"_blank",rel:"noopener noreferrer"}},[t._v("/boards"),r("OutboundLink")],1),t._v(" in a vendor- and board-specific directory (i.e. "),r("strong",[t._v("boards/"),r("em",[t._v("VENDOR")]),t._v("/"),r("em",[t._v("MODEL")]),t._v("/")]),t._v(")).")]),t._v(" "),r("p",[t._v("The following example uses FMUv5 as it is a recent "),r("RouterLink",{attrs:{to:"/ko/hardware/reference_design.html"}},[t._v("reference configuration")]),t._v(" for NuttX based flight controllers:")],1),t._v(" "),r("ul",[r("li",[t._v("Running "),r("code",[t._v("make px4_fmu-v5_default")]),t._v(" from the "),r("strong",[t._v("PX4-Autopilot")]),t._v(" directory will build the FMUv5 config")]),t._v(" "),r("li",[t._v("The base FMUv5 configuration files are located in: "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/boards/px4/fmu-v5",target:"_blank",rel:"noopener noreferrer"}},[t._v("/boards/px4/fmu-v5"),r("OutboundLink")],1),t._v(".\n"),r("ul",[r("li",[t._v("Board specific header (NuttX pins and clock configuration): "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/boards/px4/fmu-v5/nuttx-config/include/board.h",target:"_blank",rel:"noopener noreferrer"}},[t._v("/boards/px4/fmu-v5/nuttx-config/include/board.h"),r("OutboundLink")],1),t._v(".")]),t._v(" "),r("li",[t._v("Board specific header (PX4 configuration): "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/boards/px4/fmu-v5/src/board_config.h",target:"_blank",rel:"noopener noreferrer"}},[t._v("/boards/px4/fmu-v5/src/board_config.h"),r("OutboundLink")],1),t._v(".")]),t._v(" "),r("li",[t._v("NuttX OS config (created with NuttX menuconfig): "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/boards/px4/fmu-v5/nuttx-config/nsh/defconfig",target:"_blank",rel:"noopener noreferrer"}},[t._v("/boards/px4/fmu-v5/nuttx-config/nsh/defconfig"),r("OutboundLink")],1),t._v(".")]),t._v(" "),r("li",[t._v("Build configuration: "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/boards/px4/fmu-v5/default.cmake",target:"_blank",rel:"noopener noreferrer"}},[t._v("boards/px4/fmu-v5/default.cmake"),r("OutboundLink")],1),t._v(".")])])])]),t._v(" "),r("h2",{attrs:{id:"nuttx-menuconfig-setup"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#nuttx-menuconfig-setup"}},[t._v("#")]),t._v(" NuttX Menuconfig Setup")]),t._v(" "),r("p",[t._v("To modify the NuttX OS configuration, you can use "),r("a",{attrs:{href:"https://bitbucket.org/nuttx/nuttx",target:"_blank",rel:"noopener noreferrer"}},[t._v("menuconfig"),r("OutboundLink")],1),t._v(" using the PX4 shortcuts:")]),t._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_fmu-v5_default menuconfig\n"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_fmu-v5_default qconfig\n")])])]),r("p",[t._v("For fresh installs of PX4 onto Ubuntu using "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/Tools/setup/ubuntu.sh",target:"_blank",rel:"noopener noreferrer"}},[t._v("ubuntu.sh"),r("OutboundLink")],1),t._v(" "),t._v(" you will also need to install "),r("em",[t._v("kconfig")]),t._v(" tools from "),r("a",{attrs:{href:"https://bitbucket.org/nuttx/tools/src/master/",target:"_blank",rel:"noopener noreferrer"}},[t._v("NuttX tools"),r("OutboundLink")],1),t._v(".")]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("The following steps are not required if using the "),r("a",{attrs:{href:"https://hub.docker.com/r/px4io/px4-dev-nuttx/",target:"_blank",rel:"noopener noreferrer"}},[t._v("px4-dev-nuttx"),r("OutboundLink")],1),t._v(" docker container or have installed to macOS using our normal instructions (as these include"),r("code",[t._v("kconfig-mconf")]),t._v(").")])]),t._v(" "),r("p",[t._v("Run the following commands from any directory:")]),t._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://bitbucket.org/nuttx/tools.git\n"),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" tools/kconfig-frontends\n"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" gperf\n./configure --enable-mconf --disable-nconf --disable-gconf --enable-qconf --prefix"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr\n"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])]),r("p",[t._v("The "),r("code",[t._v("--prefix=/usr")]),t._v(" determines the specific installation location (which must be in the "),r("code",[t._v("PATH")]),t._v(" environment variable). The "),r("code",[t._v("--enable-mconf")]),t._v(" and "),r("code",[t._v("--enable-qconf")]),t._v(" options will enable the "),r("code",[t._v("menuconfig")]),t._v(" and "),r("code",[t._v("qconfig")]),t._v(" options respectively.")]),t._v(" "),r("p",[t._v("To run "),r("code",[t._v("qconfig")]),t._v(" you may need to install additional Qt dependencies.")]),t._v(" "),r("h3",{attrs:{id:"bootloader"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#bootloader"}},[t._v("#")]),t._v(" Bootloader")]),t._v(" "),r("p",[t._v("First you will need a bootloader, which depends on the hardware target:")]),t._v(" "),r("ul",[r("li",[t._v("STM32H7: the bootloader is based on NuttX, and is included in the PX4 Firmware. See "),r("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/boards/holybro/durandal-v1/nuttx-config/bootloader",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),r("OutboundLink")],1),t._v(" for an example.")]),t._v(" "),r("li",[t._v("For all other targets, https://github.com/PX4/Bootloader is used. See "),r("a",{attrs:{href:"https://github.com/PX4/Bootloader/pull/155/files",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),r("OutboundLink")],1),t._v(" for an example how to add a new target. Then checkout the "),r("RouterLink",{attrs:{to:"/ko/software_update/stm32_bootloader.html"}},[t._v("buiding and flashing instructions")]),t._v(".")],1)]),t._v(" "),r("h3",{attrs:{id:"firmware-porting-steps"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#firmware-porting-steps"}},[t._v("#")]),t._v(" Firmware Porting Steps")]),t._v(" "),r("ol",[r("li",[t._v("Make sure you have a working "),r("RouterLink",{attrs:{to:"/ko/dev_setup/dev_env.html"}},[t._v("development setup")]),t._v(" and installed the NuttX menuconfig tool (see above).")],1),t._v(" "),r("li",[t._v("Download the source code and make sure you can build an existing target:"),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone --recursive https://github.com/PX4/PX4-Autopilot.git\n"),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" PX4-Autopilot\n"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_fmu-v5\n")])])])]),t._v(" "),r("li",[t._v("Find an existing target that uses the same (or a closely related) CPU type and copy it. For example for STM32F7:"),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" boards/manufacturer\n"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" -r boards/px4/fmu-v5 boards/manufacturer/my-target-v1\n")])])]),t._v("Change "),r("strong",[t._v("manufacturer")]),t._v(" to the manufacturer name and "),r("strong",[t._v("my-target-v1")]),t._v(" to your board name.")])]),t._v(" "),r("p",[t._v("Next you need to go through all files under "),r("strong",[t._v("boards/manufacturer/my-target-v1")]),t._v(" and update them according to your board.")]),t._v(" "),r("ol",[r("li",[r("strong",[t._v("firmware.prototype")]),t._v(": update the board ID and name")]),t._v(" "),r("li",[r("strong",[t._v("default.cmake")]),t._v(": update the "),r("strong",[t._v("VENDOR")]),t._v(" and "),r("strong",[t._v("MODEL")]),t._v(" to match the directory names ("),r("strong",[t._v("my-target-v1")]),t._v("). Configure the serial ports.")]),t._v(" "),r("li",[t._v("Configure NuttX ("),r("strong",[t._v("defconfig")]),t._v(") via "),r("code",[t._v("make manufacturer_my-target-v1 menuconfig")]),t._v(": Adjust the CPU and chip, configure the peripherals (UART's, SPI, I2C, ADC).")]),t._v(" "),r("li",[r("strong",[t._v("nuttx-config/include/board.h")]),t._v(": Configure the NuttX pins. For all peripherals with multiple pin options, NuttX needs to know the pin. They are defined in the chip-specific pinmap header file, for example "),r("a",{attrs:{href:"https://github.com/PX4/NuttX/blob/px4_firmware_nuttx-8.2/arch/arm/src/stm32f7/hardware/stm32f74xx75xx_pinmap.h",target:"_blank",rel:"noopener noreferrer"}},[t._v("stm32f74xx75xx_pinmap.h"),r("OutboundLink")],1),t._v(".")]),t._v(" "),r("li",[r("strong",[t._v("src")]),t._v(": go through all files under "),r("strong",[t._v("src")]),t._v(" and update them as needed, in particular "),r("strong",[t._v("board_config.h")]),t._v(".")]),t._v(" "),r("li",[r("strong",[t._v("init/rc.board_sensors")]),t._v(": start the sensors that are attached to the board.")])])])}),[],!1,null,null,null);e.default=n.exports}}]);