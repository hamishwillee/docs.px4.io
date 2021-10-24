(window.webpackJsonp=window.webpackJsonp||[]).push([[497],{1202:function(e,o,t){e.exports=t.p+"assets/img/kconfig-menuconfig.bc902d33.png"},1203:function(e,o,t){e.exports=t.p+"assets/img/kconfig-guiconfig.c5bf4d08.png"},2999:function(e,o,t){"use strict";t.r(o);var n=t(19),a=Object(n.a)({},(function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"px4-board-configuration-kconfig"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#px4-board-configuration-kconfig"}},[e._v("#")]),e._v(" PX4 Board Configuration (Kconfig)")]),e._v(" "),n("p",[e._v("The PX4 Autopilot firmware can be configured at build time to adapt it for specialized applications (fixedwing, multicopter, rover or more), to enable new and experimental features (such as RTPS or UAVCANv1) or to save flash & RAM usage by disabling some drivers and subsystems. This configuration is handled through "),n("em",[e._v("Kconfig")]),e._v(", which is the same "),n("RouterLink",{attrs:{to:"/zh/hardware/porting_guide_nuttx.html#nuttx-menuconfig-setup"}},[e._v("configuration system used by NuttX")]),e._v(".")],1),e._v(" "),n("p",[e._v('The configuration options (often referred as "symbols" by the '),n("em",[e._v("kconfig")]),e._v(" language) are defined in "),n("code",[e._v("Kconfig")]),e._v(" files under the "),n("strong",[e._v("/src")]),e._v(" directory.")]),e._v(" "),n("h2",{attrs:{id:"px4-kconfig-symbol-naming-convention"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#px4-kconfig-symbol-naming-convention"}},[e._v("#")]),e._v(" PX4 Kconfig Symbol Naming Convention")]),e._v(" "),n("p",[e._v("By convention, symbols for modules/drivers are named based on the module folder path. For example, the symbol for the ADC driver at "),n("code",[e._v("src/drivers/adc/board_adc")]),e._v(" must be named "),n("code",[e._v("DRIVERS_ADC_BOARD_ADC")]),e._v(".")]),e._v(" "),n("p",[e._v("To add symbols for driver/module specific options, the naming convention is the module name followed by the option name. Fo example "),n("code",[e._v("UAVCAN_V1_GNSS_PUBLISHER")]),e._v(" which is an option "),n("code",[e._v("GNSS_PUBLISHER")]),e._v(" for the "),n("code",[e._v("UAVCAN_V1")]),e._v(" module. The options have to be guarded behind an "),n("code",[e._v("if")]),e._v(" statement to ensure that the options are only visible when the module itself is enabled.")]),e._v(" "),n("p",[e._v("Full example:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('menuconfig DRIVERS_UAVCAN_V1\n    bool "UAVCANv1"\n    default n\n    ---help---\n        Enable support for UAVCANv1\n\nif DRIVERS_UAVCAN_V1\n    config UAVCAN_V1_GNSS_PUBLISHER\n        bool "GNSS Publisher"\n        default n\nendif #DRIVERS_UAVCAN_V1\n')])])]),n("h2",{attrs:{id:"px4-kconfig-label-inheritance"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#px4-kconfig-label-inheritance"}},[e._v("#")]),e._v(" PX4 Kconfig Label Inheritance")]),e._v(" "),n("p",[e._v("Each PX4 board must have a "),n("code",[e._v("default.px4board")]),e._v(" configuration and can have an optional "),n("code",[e._v("bootloader.px4board configuration")]),e._v(". However you can add also seperate configurations under a different label e.g. "),n("code",[e._v("rtps.px4board")]),e._v(". Note that by default the configuration of "),n("code",[e._v("rtps.px4board")]),e._v(" inherits all settings set in "),n("code",[e._v("default.px4board")]),e._v(". When changing the "),n("code",[e._v("rtps.px4board")]),e._v(" it only stores the delta of the Kconfig keys that are different compared to "),n("code",[e._v("default.px4board")]),e._v(", this is useful to simplify configurations management")]),e._v(" "),n("div",{staticClass:"custom-block note"},[n("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),n("p",[e._v("When modifying a Kconfig key in "),n("code",[e._v("default.px4board")]),e._v(" it will be modified in all derivative configurations of the same board that had the same config as well.")])]),e._v(" "),n("h2",{attrs:{id:"px4-menuconfig-setup"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#px4-menuconfig-setup"}},[e._v("#")]),e._v(" PX4 Menuconfig Setup")]),e._v(" "),n("p",[e._v("To modify the PX4 board configuration, you can use the "),n("a",{attrs:{href:"https://pypi.org/project/kconfiglib/#menuconfig-interfaces",target:"_blank",rel:"noopener noreferrer"}},[e._v("menuconfig"),n("OutboundLink")],1),e._v(" tool. This can be launched using the PX4 build shortcuts:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("make px4_fmu-v5_default boardconfig\nmake px4_fmu-v5_default boardguiconfig\n")])])]),n("p",[e._v("The command line and GUI interfaces are shown below.")]),e._v(" "),n("p",[n("img",{attrs:{src:t(1202),alt:"menuconfig"}})]),e._v(" "),n("p",[n("img",{attrs:{src:t(1203),alt:"guiconfig"}})]),e._v(" "),n("p",[n("em",[e._v("Kconfiglib")]),e._v(" and "),n("em",[e._v("menuconfig")]),e._v(" come with the "),n("em",[e._v("kconfiglib")]),e._v(" python package, which is installed by the normal "),n("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/Tools/setup/ubuntu.sh",target:"_blank",rel:"noopener noreferrer"}},[e._v("ubuntu.sh"),n("OutboundLink")],1),e._v(" installation script. If "),n("em",[e._v("kconfiglib")]),e._v(" is not installed, you can do so using the command: "),n("code",[e._v("pip3 install kconfiglib")])])])}),[],!1,null,null,null);o.default=a.exports}}]);