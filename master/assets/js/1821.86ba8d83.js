(window.webpackJsonp=window.webpackJsonp||[]).push([[1821],{3268:function(a,e,t){"use strict";t.r(e);var s=t(19),r=Object(s.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"uavcan-固件升级"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#uavcan-固件升级"}},[a._v("#")]),a._v(" UAVCAN 固件升级")]),a._v(" "),t("p",[a._v("下载电调代码")]),a._v(" "),t("p",[a._v("Before updating firmware via UAVCAN, the Pixhawk ESC 1.6 requires the UAVCAN bootloader be flashed. To build the bootloader, run: 要构建引导加载程序，请运行：\n:::")]),a._v(" "),t("h2",{attrs:{id:"ectorcontrol-esc-代码库-pixhawk-esc-1-6-和-s2740vc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ectorcontrol-esc-代码库-pixhawk-esc-1-6-和-s2740vc"}},[a._v("#")]),a._v(" Ectorcontrol ESC 代码库（Pixhawk ESC 1.6 和 S2740VC）")]),a._v(" "),t("p",[a._v("Download the ESC code:")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone https://github.com/thiemar/vectorcontrol\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" vectorcontrol\n")])])]),t("h3",{attrs:{id:"刷写-bootloader"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#刷写-bootloader"}},[a._v("#")]),a._v(" 刷写 Bootloader")]),a._v(" "),t("p",[a._v("This will build the UAVCAN node firmware for both supported ESCs. The firmware images will be located at "),t("code",[a._v("com.thiemar.s2740vc-v1-1.0-1.0.<git hash>.bin")]),a._v(" and "),t("code",[a._v("org.pixhawk.px4esc-v1-1.6-1.0.<git hash>.binn")]),a._v(". 固件将位于 "),t("code",[a._v("com.thiemar.s2740vc-v1-1.0-1.0。&lt;git hash&gt;.bin")]),a._v(" 和 "),t("code",[a._v("org.pixhawk.px4esc-v1-1.6-1.0。&lt;git hash&gt;.binn")]),a._v("。")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" clean "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("BOARD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("px4esc_1_6 "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" -j8\n")])])]),t("p",[a._v("After building, the bootloader image is located at "),t("code",[a._v("firmware/px4esc_1_6-bootloader.bin")]),a._v(", and the OpenOCD configuration is located at "),t("code",[a._v("openocd_px4esc_1_6.cfg")]),a._v(". Follow "),t("RouterLink",{attrs:{to:"/zh/uavcan/bootloader_installation.html"}},[a._v("these instructions")]),a._v(" to install the bootloader on the ESC.")],1),a._v(" "),t("h3",{attrs:{id:"编译二进制文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编译二进制文件"}},[a._v("#")]),a._v(" 编译二进制文件")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("BOARD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("s2740vc_1_0 "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("BOARD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("px4esc_1_6 "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v("\n")])])]),t("p",[a._v("Before updating firmware via UAVCAN, the ESC requires the UAVCAN bootloader to be flashed. The bootloader can be built as follows: 引导加载程序可以构建如下：")]),a._v(" "),t("h2",{attrs:{id:"sapog-代码库-pixhawk-esc-1-4和zubax-orel-20"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sapog-代码库-pixhawk-esc-1-4和zubax-orel-20"}},[a._v("#")]),a._v(" Sapog 代码库（Pixhawk ESC 1.4和Zubax Orel 20）")]),a._v(" "),t("p",[a._v("Download the Sapog codebase:")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone https://github.com/PX4/sapog\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" sapog\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" submodule update --init --recursive\n")])])]),t("h3",{attrs:{id:"刷写-bootloader-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#刷写-bootloader-2"}},[a._v("#")]),a._v(" 刷写 Bootloader")]),a._v(" "),t("p",[a._v("请注意，一些较新版本的 GCC 会在链接期间导致段错误。 版本 4.9 在撰写本文时确实有效。")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" bootloader\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" clean "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" -j8\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("\n")])])]),t("p",[a._v("请参阅 "),t("a",{attrs:{href:"https://github.com/Zubax/zubax_gnss",target:"_blank",rel:"noopener noreferrer"}},[a._v("project page"),t("OutboundLink")],1),a._v(" 以了解如何构建和刷新固件。 Please refer to the "),t("a",{attrs:{href:"https://github.com/Zubax/zubax_gnss",target:"_blank",rel:"noopener noreferrer"}},[a._v("project page"),t("OutboundLink")],1),a._v(" to learn how to build and flash the firmware. Zubax GNSS comes with a UAVCAN-capable bootloader, so its firmware can be updated in a uniform fashion via UAVCAN as described below.")]),a._v(" "),t("h3",{attrs:{id:"编译二进制文件-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编译二进制文件-2"}},[a._v("#")]),a._v(" 编译二进制文件")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" firmware\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("RELEASE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# RELEASE 是可选的；省略掉可构建调试版本")]),a._v("\n")])])]),t("p",[a._v("The UAVCAN node file names follow a naming convention which allows the Pixhawk to update all UAVCAN devices on the network, regardless of manufacturer. The firmware files generated in the steps above must therefore be copied to the correct locations on an SD card or the PX4 ROMFS in order for the devices to be updated. 因此，必须将上述步骤中生成的固件文件复制到 SD 卡或 PX4 ROMFS 上的正确位置，以便更新设备。 The firmware image will be located at "),t("code",[a._v("firmware/build/io.px4.sapog-1.1-1.7.<xxxxxxxx>.application.bin")]),a._v(", where "),t("code",[a._v("<xxxxxxxx>")]),a._v(" is an arbitrary sequence of numbers and letters. There are two hardware version of the Zubax Orel 20 (1.0 and 1.1). Make sure you copy the binary to the correct folder in the subsequent description. The ESC firmware will check the hardware version and works on both products.1")]),a._v(" "),t("h2",{attrs:{id:"zubax-gnss"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zubax-gnss"}},[a._v("#")]),a._v(" Zubax GNSS")]),a._v(" "),t("p",[a._v("Please refer to the "),t("a",{attrs:{href:"https://github.com/Zubax/zubax_gnss",target:"_blank",rel:"noopener noreferrer"}},[a._v("project page"),t("OutboundLink")],1),a._v(" to learn how to build and flash the firmware. Zubax GNSS comes with a UAVCAN-capable bootloader, so its firmware can be updated in a uniform fashion via UAVCAN as described below.")]),a._v(" "),t("h2",{attrs:{id:"无人机上的固件安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#无人机上的固件安装"}},[a._v("#")]),a._v(" 无人机上的固件安装")]),a._v(" "),t("p",[a._v("The UAVCAN node file names follow a naming convention which allows the Pixhawk to update all UAVCAN devices on the network, regardless of manufacturer. The firmware files generated in the steps above must therefore be copied to the correct locations on an SD card or the PX4 ROMFS in order for the devices to be updated.")]),a._v(" "),t("p",[a._v("但是，由于空间/性能限制（名称可能不超过 28 个字符），UAVCAN 固件更新程序要求将这些文件名拆分并存储在如下目录结构中：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("<uavcan name>-<hw version major>.<hw version minor>-<sw version major>.<sw version minor>.<version hash>.bin\n")])])]),t("p",[a._v("例如")]),a._v(" "),t("p",[a._v("However, due to space/performance constraints (names may not exceed 28 characters), the UAVCAN firmware updater requires those filenames to be split and stored in a directory structure like the following:")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("/fs/microsd/fw/<node name>/<hw version major>.<hw version minor>/<hw name>-<sw version major>.<sw version minor>.<git hash>.bin\n")])])]),t("p",[a._v("生成的最终文件位置是：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("s2740vc-v1-1.0.68e34de6.bin \n/fs/microsd/fw/io.px4.sapog/1.1/sapog-1.7.87c7bc0.bin\n")])])]),t("p",[a._v("<0>Note</0>将 ROMFS/px4fmu_common 目录挂载到 Pixhawk 上的 /etc。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("/etc/uavcan/fw/<device name>/<hw version major>.<hw version minor>/_<hw name>-<sw version major>.<sw version minor>.<git hash>.bin\n")])])]),t("h2",{attrs:{id:"将二进制文件放置在-px4-romfs-中"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#将二进制文件放置在-px4-romfs-中"}},[a._v("#")]),a._v(" 将二进制文件放置在 PX4 ROMFS 中")]),a._v(" "),t("p",[a._v("使用 PX4 Flight Stack 时，请在“Power Config”部分启用 UAVCAN，然后在尝试进行 UAVCAN 固件升级之前重新启动系统。")]),a._v(" "),t("ul",[t("li",[a._v("S2740VC ESC: "),t("code",[a._v("ROMFS/px4fmu_common/uavcan/fw/com.thiemar.s2740vc-v1/1.0/_s2740vc-v1-1.0.&lt;git hash&gt;.bin")])]),a._v(" "),t("li",[a._v("Pixhawk ESC 1.6: "),t("code",[a._v("ROMFS/px4fmu_common/uavcan/fw/org.pixhawk.px4esc-v1/1.6/_px4esc-v1-1.6.&lt;git hash&gt;.bin")])]),a._v(" "),t("li",[a._v("Pixhawk ESC 1.4: "),t("code",[a._v("ROMFS/px4fmu_common/uavcan/fw/org.pixhawk.sapog-v1/1.4/_sapog-v1-1.4.<git hash>.bin")])]),a._v(" "),t("li",[a._v("Zubax GNSS v1: "),t("code",[a._v("ROMFS/px4fmu_common/uavcan/fw/com.zubax.gnss/1.0/gnss-1.0.&lt;git has&gt;.bin")])]),a._v(" "),t("li",[a._v("Zubax GNSS v2: "),t("code",[a._v("ROMFS/px4fmu_common/uavcan/fw/com.zubax.gnss/2.0/gnss-2.0.&lt;git has&gt;.bin")])])]),a._v(" "),t("p",[a._v("或者，可以通过以下方式在 NSH 上手动启动 UAVCAN 固件升级：")]),a._v(" "),t("h3",{attrs:{id:"启动固件升级过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动固件升级过程"}},[a._v("#")]),a._v(" 启动固件升级过程")]),a._v(" "),t("p",[a._v("When using the PX4 Flight Stack, enable UAVCAN in the 'Power Config' section and reboot the system before attempting an UAVCAN firmware upgrade.")]),a._v(" "),t("p",[a._v("Alternatively UAVCAN firmware upgrading can be started manually on NSH via:")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("uavcan start\nuavcan start fw\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);