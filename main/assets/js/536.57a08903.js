(window.webpackJsonp=window.webpackJsonp||[]).push([[536],{1401:function(e,n,t){e.exports=t.p+"assets/img/kconfig-menuconfig.d97052f4.png"},1402:function(e,n,t){e.exports=t.p+"assets/img/kconfig-guiconfig.e711731f.png"},2138:function(e,n,t){"use strict";t.r(n);var o=t(19),a=Object(o.a)({},(function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"px4-board-configuration-kconfig"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#px4-board-configuration-kconfig"}},[e._v("#")]),e._v(" PX4 Board Configuration (Kconfig)")]),e._v(" "),o("p",[e._v("The PX4 Autopilot firmware can be configured at build time to adapt it for specialized applications (fixed-wing, multicopter, rover or more), to enable new and experimental features (such as Cyphal) or to save flash & RAM usage by disabling some drivers and subsystems.\nThis configuration is handled through "),o("em",[e._v("Kconfig")]),e._v(", which is the same "),o("RouterLink",{attrs:{to:"/en/hardware/porting_guide_nuttx.html#nuttx-menuconfig-setup"}},[e._v("configuration system used by NuttX")]),e._v(".")],1),e._v(" "),o("p",[e._v('The configuration options (often referred as "symbols" by the '),o("em",[e._v("kconfig")]),e._v(" language) are defined in "),o("code",[e._v("Kconfig")]),e._v(" files under the "),o("strong",[e._v("/src")]),e._v(" directory.")]),e._v(" "),o("h2",{attrs:{id:"px4-kconfig-symbol-naming-convention"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#px4-kconfig-symbol-naming-convention"}},[e._v("#")]),e._v(" PX4 Kconfig Symbol Naming Convention")]),e._v(" "),o("p",[e._v("By convention, symbols for modules/drivers are named based on the module folder path.\nFor example, the symbol for the ADC driver at "),o("code",[e._v("src/drivers/adc/board_adc")]),e._v(" must be named "),o("code",[e._v("DRIVERS_ADC_BOARD_ADC")]),e._v(".")]),e._v(" "),o("p",[e._v("To add symbols for driver/module specific options, the naming convention is the module name followed by the option name.\nFor example "),o("code",[e._v("UAVCAN_V1_GNSS_PUBLISHER")]),e._v(" which is an option "),o("code",[e._v("GNSS_PUBLISHER")]),e._v(" for the "),o("code",[e._v("UAVCAN_V1")]),e._v(" module.\nThe options have to be guarded behind an "),o("code",[e._v("if")]),e._v(" statement to ensure that the options are only visible when the module itself is enabled.")]),e._v(" "),o("p",[e._v("Full example:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v('menuconfig DRIVERS_UAVCAN_V1\n    bool "UAVCANv1"\n    default n\n    ---help---\n        Enable support for UAVCANv1\n\nif DRIVERS_UAVCAN_V1\n    config UAVCAN_V1_GNSS_PUBLISHER\n        bool "GNSS Publisher"\n        default n\nendif #DRIVERS_UAVCAN_V1\n')])])]),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),o("p",[e._v("Builds will silently ignore any missing or miss-spelled modules in the "),o("code",[e._v("*.px4board")]),e._v(" configuration file.")])]),e._v(" "),o("h2",{attrs:{id:"px4-kconfig-label-inheritance"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#px4-kconfig-label-inheritance"}},[e._v("#")]),e._v(" PX4 Kconfig Label Inheritance")]),e._v(" "),o("p",[e._v("Each PX4 board must have a "),o("code",[e._v("default.px4board")]),e._v(" configuration and can have an optional "),o("code",[e._v("bootloader.px4board configuration")]),e._v(".\nHowever you can add also separate configurations under a different label e.g. "),o("code",[e._v("cyphal.px4board")]),e._v(".\nNote that by default the configuration of "),o("code",[e._v("cyphal.px4board")]),e._v(" inherits all settings set in "),o("code",[e._v("default.px4board")]),e._v(".\nWhen changing the "),o("code",[e._v("cyphal.px4board")]),e._v(" it only stores the delta of the Kconfig keys that are different compared to "),o("code",[e._v("default.px4board")]),e._v(", this is useful to simplify configurations management")]),e._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),o("p",[e._v("When modifying a Kconfig key in "),o("code",[e._v("default.px4board")]),e._v(" it will be modified in all derivative configurations of the same board that had the same config as well.")])]),e._v(" "),o("h2",{attrs:{id:"px4-menuconfig-setup"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#px4-menuconfig-setup"}},[e._v("#")]),e._v(" PX4 Menuconfig Setup")]),e._v(" "),o("p",[e._v("The "),o("a",{attrs:{href:"https://pypi.org/project/kconfiglib/#menuconfig-interfaces",target:"_blank",rel:"noopener noreferrer"}},[e._v("menuconfig"),o("OutboundLink")],1),e._v(" tool is used to modify the PX4 board configuration, adding/removing modules, drivers, and other features.")]),e._v(" "),o("p",[e._v("There are command line and GUI variants, both of which can be launched using the PX4 build shortcuts:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("make px4_fmu-v5_default boardconfig\nmake px4_fmu-v5_default boardguiconfig\n")])])]),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),o("p",[o("em",[e._v("Kconfiglib")]),e._v(" and "),o("em",[e._v("menuconfig")]),e._v(" come with the "),o("em",[e._v("kconfiglib")]),e._v(" python package, which is installed by the normal "),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/Tools/setup/ubuntu.sh",target:"_blank",rel:"noopener noreferrer"}},[e._v("ubuntu.sh"),o("OutboundLink")],1),e._v(" installation script.\nIf "),o("em",[e._v("kconfiglib")]),e._v(" is not installed, you can do so using the command: "),o("code",[e._v("pip3 install kconfiglib")])])]),e._v(" "),o("p",[e._v("The command line and GUI interfaces are shown below.")]),e._v(" "),o("h3",{attrs:{id:"menuconfig-command-line-interface"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#menuconfig-command-line-interface"}},[e._v("#")]),e._v(" menuconfig Command Line Interface")]),e._v(" "),o("p",[o("img",{attrs:{src:t(1401),alt:"menuconfig command line interface"}})]),e._v(" "),o("h3",{attrs:{id:"menuconfig-gui-interface"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#menuconfig-gui-interface"}},[e._v("#")]),e._v(" menuconfig GUI Interface")]),e._v(" "),o("p",[o("img",{attrs:{src:t(1402),alt:"menuconfig GUI interface"}})])])}),[],!1,null,null,null);n.default=a.exports}}]);