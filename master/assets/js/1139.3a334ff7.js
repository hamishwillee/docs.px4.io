(window.webpackJsonp=window.webpackJsonp||[]).push([[1139],{2108:function(a,e,t){"use strict";t.r(e);var r=t(19),s=Object(r.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"uavcan-firmware-upgrading"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#uavcan-firmware-upgrading"}},[a._v("#")]),a._v(" UAVCAN Firmware Upgrading")]),a._v(" "),t("p",[a._v("PX4 will automatically upgrade firmware on UAVCAN nodes if the appropriate firmware is supplied.\nThe firmware build process is manufacturer dependent (instructions for different firmware linked below).")]),a._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[a._v("WARNING")]),a._v(" "),t("p",[a._v("UAVCAN devices typically ship with appropriate firmware preinstalled.\nThese instructions are primarily needed when developing UAVCAN devices.")])]),a._v(" "),t("h2",{attrs:{id:"flashing-updating-a-uavcan-binary"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flashing-updating-a-uavcan-binary"}},[a._v("#")]),a._v(" Flashing/Updating a UAVCAN Binary")]),a._v(" "),t("p",[a._v("To flash the UAVCAN device, all you need to do is copy the UAVCAN firmware binary into the root directory of the flight controller’s SD card and reboot.")]),a._v(" "),t("p",[a._v("After restarting the flight controller the UAVCAN device will automatically be updated with new firmware.\nIf successful the firmware binary will be removed from the root directory and there will be a file named "),t("strong",[a._v("XX.bin")]),a._v(" in the "),t("strong",[a._v("/ufw")]),a._v(" directory of the SD card.")]),a._v(" "),t("div",{staticClass:"custom-block note"},[t("p",{staticClass:"custom-block-title"},[a._v("Note")]),a._v(" "),t("p",[a._v("UAVCAN firmware is usually created as part of the build process.\nCommonly the firmware image is built in "),t("strong",[a._v("build/"),t("em",[a._v("name_of_your_uavcan_device")])]),a._v(",  where "),t("em",[a._v("name_of_your_uavcan_device")]),a._v(" is specific to the device you are flashing (e.g. "),t("strong",[a._v("build/ark_can-flow_default")]),a._v("), and will be named with the format "),t("strong",[a._v("XX-X.X.XXXXXXXX.uavcan.bin")]),a._v(".")])]),a._v(" "),t("h2",{attrs:{id:"building-uavcan-firmware"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#building-uavcan-firmware"}},[a._v("#")]),a._v(" Building UAVCAN Firmware")]),a._v(" "),t("h3",{attrs:{id:"ark-flow"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ark-flow"}},[a._v("#")]),a._v(" ARK Flow")]),a._v(" "),t("p",[a._v("Please refer to the "),t("RouterLink",{attrs:{to:"/en/uavcan/ark_flow.html"}},[a._v("Ark Flow documentation")]),a._v(" under "),t("strong",[a._v("Building Ark Flow Firmware")]),a._v(" to learn how to build and flash this firmware.")],1),a._v(" "),t("h3",{attrs:{id:"sapog-codebase-pixhawk-esc-1-4-and-zubax-orel-20"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sapog-codebase-pixhawk-esc-1-4-and-zubax-orel-20"}},[a._v("#")]),a._v(" Sapog Codebase (Pixhawk ESC 1.4 and Zubax Orel 20)")]),a._v(" "),t("p",[a._v("Please refer to the "),t("a",{attrs:{href:"https://github.com/PX4/sapog",target:"_blank",rel:"noopener noreferrer"}},[a._v("project page"),t("OutboundLink")],1),a._v(" to learn how to build and flash this firmware.")]),a._v(" "),t("h3",{attrs:{id:"zubax-gnss"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zubax-gnss"}},[a._v("#")]),a._v(" Zubax GNSS")]),a._v(" "),t("p",[a._v("Please refer to the "),t("a",{attrs:{href:"https://github.com/Zubax/zubax_gnss",target:"_blank",rel:"noopener noreferrer"}},[a._v("project page"),t("OutboundLink")],1),a._v(" to learn how to build and flash this firmware.")]),a._v(" "),t("h3",{attrs:{id:"vectorcontrol-esc-codebase-pixhawk-esc-1-6-and-s2740vc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vectorcontrol-esc-codebase-pixhawk-esc-1-6-and-s2740vc"}},[a._v("#")]),a._v(" Vectorcontrol ESC Codebase (Pixhawk ESC 1.6 and S2740VC)")]),a._v(" "),t("p",[a._v("Download the ESC code:")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone https://github.com/thiemar/vectorcontrol\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" vectorcontrol\n")])])]),t("h4",{attrs:{id:"flashing-the-uavcan-bootloader"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flashing-the-uavcan-bootloader"}},[a._v("#")]),a._v(" Flashing the UAVCAN Bootloader")]),a._v(" "),t("p",[a._v("Before updating firmware via UAVCAN, the Pixhawk ESC 1.6 requires the UAVCAN bootloader be flashed.\nTo build the bootloader, run:")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" clean "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("BOARD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("px4esc_1_6 "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" -j8\n")])])]),t("p",[a._v("After building, the bootloader image is located at "),t("code",[a._v("firmware/px4esc_1_6-bootloader.bin")]),a._v(", and the OpenOCD configuration is located at "),t("code",[a._v("openocd_px4esc_1_6.cfg")]),a._v(". Follow "),t("RouterLink",{attrs:{to:"/en/uavcan/bootloader_installation.html"}},[a._v("these instructions")]),a._v(" to install the bootloader on the ESC.")],1),a._v(" "),t("h4",{attrs:{id:"compiling-the-main-binary"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#compiling-the-main-binary"}},[a._v("#")]),a._v(" Compiling the Main Binary")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("BOARD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("s2740vc_1_0 "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("BOARD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("px4esc_1_6 "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v("\n")])])]),t("p",[a._v("This will build the UAVCAN node firmware for both supported ESCs. The firmware images will be located at "),t("code",[a._v("com.thiemar.s2740vc-v1-1.0-1.0.<git hash>.bin")]),a._v(" and "),t("code",[a._v("org.pixhawk.px4esc-v1-1.6-1.0.<git hash>.bin")]),a._v(".")])])}),[],!1,null,null,null);e.default=s.exports}}]);