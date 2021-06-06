(window.webpackJsonp=window.webpackJsonp||[]).push([[912],{1859:function(a,e,t){"use strict";t.r(e);var s=t(19),r=Object(s.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"uavcan-firmware-upgrading"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#uavcan-firmware-upgrading"}},[a._v("#")]),a._v(" UAVCAN Firmware Upgrading")]),a._v(" "),t("p",[a._v("PX4 will automatically upgrade firmware on UAVCAN nodes if the matching firmware is supplied.")]),a._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[a._v("WARNING")]),a._v(" "),t("p",[a._v("UAVCAN devices typically ship with appropriate firmware preinstalled.\nThese instructions are primarily needed when developing UAVCAN devices.")])]),a._v(" "),t("h2",{attrs:{id:"vectorcontrol-esc-codebase-pixhawk-esc-1-6-and-s2740vc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vectorcontrol-esc-codebase-pixhawk-esc-1-6-and-s2740vc"}},[a._v("#")]),a._v(" Vectorcontrol ESC Codebase (Pixhawk ESC 1.6 and S2740VC)")]),a._v(" "),t("p",[a._v("Download the ESC code:")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone https://github.com/thiemar/vectorcontrol\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" vectorcontrol\n")])])]),t("h3",{attrs:{id:"flashing-the-uavcan-bootloader"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flashing-the-uavcan-bootloader"}},[a._v("#")]),a._v(" Flashing the UAVCAN Bootloader")]),a._v(" "),t("p",[a._v("Before updating firmware via UAVCAN, the Pixhawk ESC 1.6 requires the UAVCAN bootloader be flashed.\nTo build the bootloader, run:")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" clean "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("BOARD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("px4esc_1_6 "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" -j8\n")])])]),t("p",[a._v("After building, the bootloader image is located at "),t("code",[a._v("firmware/px4esc_1_6-bootloader.bin")]),a._v(", and the OpenOCD configuration is located at "),t("code",[a._v("openocd_px4esc_1_6.cfg")]),a._v(". Follow "),t("RouterLink",{attrs:{to:"/en/uavcan/bootloader_installation.html"}},[a._v("these instructions")]),a._v(" to install the bootloader on the ESC.")],1),a._v(" "),t("h3",{attrs:{id:"compiling-the-main-binary"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#compiling-the-main-binary"}},[a._v("#")]),a._v(" Compiling the Main Binary")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("BOARD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("s2740vc_1_0 "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("BOARD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("px4esc_1_6 "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v("\n")])])]),t("p",[a._v("This will build the UAVCAN node firmware for both supported ESCs. The firmware images will be located at "),t("code",[a._v("com.thiemar.s2740vc-v1-1.0-1.0.<git hash>.bin")]),a._v(" and "),t("code",[a._v("org.pixhawk.px4esc-v1-1.6-1.0.<git hash>.binn")]),a._v(".")]),a._v(" "),t("h2",{attrs:{id:"sapog-codebase-pixhawk-esc-1-4-and-zubax-orel-20"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sapog-codebase-pixhawk-esc-1-4-and-zubax-orel-20"}},[a._v("#")]),a._v(" Sapog Codebase (Pixhawk ESC 1.4 and Zubax Orel 20)")]),a._v(" "),t("p",[a._v("Download the Sapog codebase:")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone https://github.com/PX4/sapog\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" sapog\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" submodule update --init --recursive\n")])])]),t("h3",{attrs:{id:"flashing-the-uavcan-bootloader-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flashing-the-uavcan-bootloader-2"}},[a._v("#")]),a._v(" Flashing the UAVCAN Bootloader")]),a._v(" "),t("p",[a._v("Before updating firmware via UAVCAN, the ESC requires the UAVCAN bootloader to be flashed. The bootloader can be built as follows:")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" bootloader\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" clean "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" -j8\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("\n")])])]),t("p",[a._v("The bootloader image is located at "),t("code",[a._v("bootloader/firmware/bootloader.bin")]),a._v(", and the OpenOCD configuration is located at "),t("code",[a._v("openocd.cfg")]),a._v(". Follow "),t("RouterLink",{attrs:{to:"/en/uavcan/bootloader_installation.html"}},[a._v("these instructions")]),a._v(" to install the bootloader on the ESC.")],1),a._v(" "),t("h3",{attrs:{id:"compiling-the-main-binary-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#compiling-the-main-binary-2"}},[a._v("#")]),a._v(" Compiling the Main Binary")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" firmware\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("RELEASE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# RELEASE is optional; omit to build the debug version")]),a._v("\n")])])]),t("p",[a._v("Beware, some newer version of GCC lead to segfaults during linking. Version 4.9 did work at the time of writing.\nThe firmware image will be located at "),t("code",[a._v("firmware/build/io.px4.sapog-1.1-1.7.<xxxxxxxx>.application.bin")]),a._v(", where "),t("code",[a._v("<xxxxxxxx>")]),a._v(" is an arbitrary sequence of numbers and letters. There are two hardware version of the Zubax Orel 20 (1.0 and 1.1). Make sure you copy the binary to the correct folder in the subsequent description. The ESC firmware will check the hardware version and works on both products.1")]),a._v(" "),t("h2",{attrs:{id:"zubax-gnss"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zubax-gnss"}},[a._v("#")]),a._v(" Zubax GNSS")]),a._v(" "),t("p",[a._v("Please refer to the "),t("a",{attrs:{href:"https://github.com/Zubax/zubax_gnss",target:"_blank",rel:"noopener noreferrer"}},[a._v("project page"),t("OutboundLink")],1),a._v(" to learn how to build and flash the firmware.\nZubax GNSS comes with a UAVCAN-capable bootloader, so its firmware can be updated in a uniform fashion via UAVCAN as described below.")]),a._v(" "),t("h2",{attrs:{id:"firmware-installation-on-the-autopilot"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#firmware-installation-on-the-autopilot"}},[a._v("#")]),a._v(" Firmware Installation on the Autopilot")]),a._v(" "),t("p",[a._v("The UAVCAN node file names follow a naming convention which allows the Pixhawk to update all UAVCAN devices on the network, regardless of manufacturer. The firmware files generated in the steps above must therefore be copied to the correct locations on an SD card or the PX4 ROMFS in order for the devices to be updated.")]),a._v(" "),t("p",[a._v("The convention for firmware image names is:")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("<uavcan name>-<hw version major>.<hw version minor>-<sw version major>.<sw version minor>.<version hash>.bin\n")])])]),t("p",[a._v("e.g. "),t("code",[a._v("com.thiemar.s2740vc-v1-1.0-1.0.68e34de6.bin")])]),a._v(" "),t("p",[a._v("However, due to space/performance constraints (names may not exceed 28 characters), the UAVCAN firmware updater requires those filenames to be split and stored in a directory structure like the following:")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("/fs/microsd/fw/<node name>/<hw version major>.<hw version minor>/<hw name>-<sw version major>.<sw version minor>.<git hash>.bin\n")])])]),t("p",[a._v("e.g.")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("s2740vc-v1-1.0.68e34de6.bin \n/fs/microsd/fw/io.px4.sapog/1.1/sapog-1.7.87c7bc0.bin\n")])])]),t("p",[a._v("The ROMFS-based updater follows that pattern, but prepends the file name with "),t("code",[a._v("_")]),a._v(" so you add the firmware in:")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("/etc/uavcan/fw/<device name>/<hw version major>.<hw version minor>/_<hw name>-<sw version major>.<sw version minor>.<git hash>.bin\n")])])]),t("h2",{attrs:{id:"placing-the-binaries-in-the-px4-romfs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#placing-the-binaries-in-the-px4-romfs"}},[a._v("#")]),a._v(" Placing the binaries in the PX4 ROMFS")]),a._v(" "),t("p",[a._v("The resulting finale file locations are:")]),a._v(" "),t("ul",[t("li",[a._v("S2740VC ESC: "),t("code",[a._v("ROMFS/px4fmu_common/uavcan/fw/com.thiemar.s2740vc-v1/1.0/_s2740vc-v1-1.0.<git hash>.bin")])]),a._v(" "),t("li",[a._v("Pixhawk ESC 1.6: "),t("code",[a._v("ROMFS/px4fmu_common/uavcan/fw/org.pixhawk.px4esc-v1/1.6/_px4esc-v1-1.6.<git hash>.bin")])]),a._v(" "),t("li",[a._v("Pixhawk ESC 1.4: "),t("code",[a._v("ROMFS/px4fmu_common/uavcan/fw/org.pixhawk.sapog-v1/1.4/_sapog-v1-1.4.<git hash>.bin")])]),a._v(" "),t("li",[a._v("Zubax GNSS v1: "),t("code",[a._v("ROMFS/px4fmu_common/uavcan/fw/com.zubax.gnss/1.0/gnss-1.0.<git has>.bin")])]),a._v(" "),t("li",[a._v("Zubax GNSS v2: "),t("code",[a._v("ROMFS/px4fmu_common/uavcan/fw/com.zubax.gnss/2.0/gnss-2.0.<git has>.bin")])])]),a._v(" "),t("p",[a._v("Note that the ROMFS/px4fmu_common directory will be mounted to /etc on Pixhawk.")]),a._v(" "),t("h3",{attrs:{id:"starting-the-firmware-upgrade-process"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#starting-the-firmware-upgrade-process"}},[a._v("#")]),a._v(" Starting the Firmware Upgrade process")]),a._v(" "),t("p",[a._v("When using the PX4 Flight Stack, enable UAVCAN in the 'Power Config' section and reboot the system before attempting an UAVCAN firmware upgrade.")]),a._v(" "),t("p",[a._v("Alternatively UAVCAN firmware upgrading can be started manually on NSH via:")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("uavcan start\nuavcan start fw\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);