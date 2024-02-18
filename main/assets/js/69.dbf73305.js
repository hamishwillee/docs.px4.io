(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{1773:function(e,t,s){e.exports=s.p+"assets/img/eclipse_packs_perspective.eb3de3fb.jpg"},1992:function(e,t,s){"use strict";s.r(t);var i=s(19),n=Object(i.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"debugging-with-eclipse-and-j-link"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#debugging-with-eclipse-and-j-link"}},[e._v("#")]),e._v(" Debugging with Eclipse and J-Link")]),e._v(" "),i("p",[e._v("This topic explains how to setup and use "),i("a",{attrs:{href:"https://gnu-mcu-eclipse.github.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("MCU Eclipse"),i("OutboundLink")],1),e._v(" with a "),i("em",[e._v("Segger Jlink adapter")]),e._v(" to debug PX4 running on NuttX (e.g. Pixhawk series boards).")]),e._v(" "),i("h2",{attrs:{id:"required-hardware"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#required-hardware"}},[e._v("#")]),e._v(" Required Hardware")]),e._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"https://www.segger.com/products/debug-probes/j-link/models/j-link-edu-mini/",target:"_blank",rel:"noopener noreferrer"}},[e._v("J-Link EDU Mini"),i("OutboundLink")],1)]),e._v(" "),i("li",[e._v("Adapter to connect Segger JLink to Flight Controller "),i("RouterLink",{attrs:{to:"/en/debug/swd_debug.html"}},[e._v("SWD Debug Port")]),e._v(" (debug port).")],1),e._v(" "),i("li",[e._v("Micro USB cable")])]),e._v(" "),i("h2",{attrs:{id:"installation"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),i("h3",{attrs:{id:"px4"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#px4"}},[e._v("#")]),e._v(" PX4")]),e._v(" "),i("p",[e._v("Setup PX4 by following the normal guidelines:")]),e._v(" "),i("ul",[i("li",[i("RouterLink",{attrs:{to:"/en/dev_setup/dev_env.html"}},[e._v("Setup the PX4 Developer Environment/Toolchain")]),e._v(" for your platform (e.g. for Linux see: "),i("RouterLink",{attrs:{to:"/en/dev_setup/dev_env_linux_ubuntu.html"}},[e._v("Development Environment on Ubuntu LTS / Debian Linux")]),e._v(").")],1),e._v(" "),i("li",[i("RouterLink",{attrs:{to:"/en/dev_setup/building_px4.html"}},[e._v("Download PX4")]),e._v(" and optionally build it on the command line.")],1)]),e._v(" "),i("h3",{attrs:{id:"eclipse"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#eclipse"}},[e._v("#")]),e._v(" Eclipse")]),e._v(" "),i("p",[e._v("To install "),i("em",[e._v("Eclipse")]),e._v(":")]),e._v(" "),i("ol",[i("li",[e._v("Download "),i("a",{attrs:{href:"https://github.com/gnu-mcu-eclipse/org.eclipse.epp.packages/releases/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Eclipse CDT for C/C++ Developers"),i("OutboundLink")],1),e._v(" (MCU GitHub).")]),e._v(" "),i("li",[e._v("Extract the Eclipse folder and copy it anywhere (there is no need to run any install scripts).")]),e._v(" "),i("li",[e._v("Run "),i("em",[e._v("Eclipse")]),e._v(" and choose a location for your initial workbench.")])]),e._v(" "),i("h3",{attrs:{id:"segger-jlink-tools"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#segger-jlink-tools"}},[e._v("#")]),e._v(" Segger Jlink Tools")]),e._v(" "),i("p",[e._v("To install the "),i("em",[e._v("Segger Jlink")]),e._v(" tools:")]),e._v(" "),i("ol",[i("li",[e._v("Download and run the "),i("a",{attrs:{href:"https://www.segger.com/downloads/jlink/#J-LinkSoftwareAndDocumentationPack",target:"_blank",rel:"noopener noreferrer"}},[e._v("J-Link Software and Documentation Pack"),i("OutboundLink")],1),e._v(" for your OS (Windows and Linux packages available).\n"),i("ul",[i("li",[e._v("On Linux the tools are installed in "),i("strong",[e._v("/usr/bin")]),e._v(".")])])])]),e._v(" "),i("p",[e._v("For more information, see: "),i("a",{attrs:{href:"https://gnu-mcu-eclipse.github.io/debug/jlink/install/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://gnu-mcu-eclipse.github.io/debug/jlink/install/"),i("OutboundLink")],1),e._v(".")]),e._v(" "),i("h2",{attrs:{id:"first-use"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#first-use"}},[e._v("#")]),e._v(" First Use")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("Connect the "),i("em",[e._v("Segger JLink")]),e._v(" to the host computer and the "),i("RouterLink",{attrs:{to:"/en/debug/swd_debug.html"}},[e._v("flight controller debug port")]),e._v(" (via an adapter).")],1)]),e._v(" "),i("li",[i("p",[e._v("Power the flight controller.")])]),e._v(" "),i("li",[i("p",[e._v("Run "),i("em",[e._v("Eclipse")]),e._v(".")])]),e._v(" "),i("li",[i("p",[e._v("Add a source by choosing "),i("strong",[e._v("File > Import > C/C++ > Existing Code as Makefile Project")]),e._v(" and click "),i("strong",[e._v("Next")]),e._v(".")])]),e._v(" "),i("li",[i("p",[e._v("Point it to the "),i("strong",[e._v("PX4-Autopilot")]),e._v(" folder and give it a name, then select "),i("em",[e._v("ARM Cross GCC")]),e._v(" in the "),i("em",[e._v("Toolchain for Indexer Settings")]),e._v(" and click "),i("strong",[e._v("Finish")]),e._v(".\nImport takes a while, wait for it to complete.")])]),e._v(" "),i("li",[i("p",[e._v("Set the MCU settings: right-click on the top-level project in the Project Explorer, select "),i("em",[e._v("Properties")]),e._v(" then under MCU choose "),i("em",[e._v("SEGGER J-Link Path")]),e._v(".\nSet it as shown in the screenshot below.\n"),i("img",{attrs:{src:s(718),alt:"Eclipse: Segger J-Link Path"}})])]),e._v(" "),i("li",[i("p",[e._v("Update packs:")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("Click the small icon on the top right called "),i("em",[e._v("Open Perspective")]),e._v(" and open the "),i("em",[e._v("Packs")]),e._v(" perspective.\n"),i("img",{attrs:{src:s(719),alt:"Eclipse: Workspace"}})])]),e._v(" "),i("li",[i("p",[e._v("Click the "),i("strong",[e._v("update all")]),e._v(" button.")]),e._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),i("p",[e._v("This takes a VERY LONG TIME (10 minutes).\nIgnore all the errors about missing packages that pop up.")])]),e._v(" "),i("p",[i("img",{attrs:{src:s(1773),alt:"Eclipse: Workspace Packs Perspective"}})])]),e._v(" "),i("li",[i("p",[e._v("The STM32Fxx devices are found in the Keil folder, install by right-clicking and then selecting "),i("strong",[e._v("install")]),e._v(" on the according device for F4 and F7.")])])])]),e._v(" "),i("li",[i("p",[e._v("Setup debug configuration for target:")]),e._v(" "),i("ul",[i("li",[e._v("Right click project and open the "),i("em",[e._v("Settings")]),e._v(" (menu: "),i("strong",[e._v("C/C++ Build > Settings")]),e._v(")")]),e._v(" "),i("li",[e._v("Choose the "),i("em",[e._v("Devices")]),e._v(" Tab, "),i("em",[e._v("Devices")]),e._v(" section (Not "),i("em",[e._v("Boards")]),e._v(").")]),e._v(" "),i("li",[e._v("Find the FMU chip you wish to debug.")])]),e._v(" "),i("p",[i("img",{attrs:{src:s(720),alt:"Eclipse: Select FMU in settings"}})])]),e._v(" "),i("li",[i("p",[e._v("Select debug configurations with the small drop-down next to the bug symbol:\n"),i("img",{attrs:{src:s(721),alt:"Eclipse: Debug config"}})])]),e._v(" "),i("li",[i("p",[e._v("Then select "),i("em",[e._v("GDB SEGGER J-Link Debugging")]),e._v(" and then the "),i("strong",[e._v("New config")]),e._v(" button on the top left.\n"),i("img",{attrs:{src:s(722),alt:"Eclipse: GDB Segger Debug config"}})])]),e._v(" "),i("li",[i("p",[e._v("Setup build config:")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("Give it a name and set the "),i("em",[e._v("C/C++ Application")]),e._v(" to the corresponding "),i("strong",[e._v(".elf")]),e._v(" file.")])]),e._v(" "),i("li",[i("p",[e._v("Choose "),i("em",[e._v("Disable Auto build")])]),e._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),i("p",[e._v("Remember that you must build the target from the command line before starting a debug session.")])])])]),e._v(" "),i("p",[i("img",{attrs:{src:s(723),alt:"Eclipse: GDB Segger Debug config"}})])]),e._v(" "),i("li",[i("p",[e._v("The "),i("em",[e._v("Debugger")]),e._v(" and "),i("em",[e._v("Startup")]),e._v(" tabs shouldn’t need any modifications (just verify your settings with the screenshots below)")]),e._v(" "),i("p",[i("img",{attrs:{src:s(724),alt:"Eclipse: GDB Segger Debug config: debugger tab"}}),e._v(" "),i("img",{attrs:{src:s(725),alt:"Eclipse: GDB Segger Debug config: startup tab"}})])])]),e._v(" "),i("h2",{attrs:{id:"segger-task-aware-debugging"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#segger-task-aware-debugging"}},[e._v("#")]),e._v(" SEGGER Task-aware debugging")]),e._v(" "),i("p",[e._v("Task-aware debugging (also known as "),i("a",{attrs:{href:"https://www.segger.com/products/debug-probes/j-link/tools/j-link-gdb-server/thread-aware-debugging/",target:"_blank",rel:"noopener noreferrer"}},[e._v("thread-aware debugging"),i("OutboundLink")],1),e._v(") allows you to show the context of all running threads/tasks instead of just the stack current task.\nThis is quite useful since PX4 tends to run many different tasks.")]),e._v(" "),i("p",[e._v("To enable this feature for use in Eclipse:")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("You first need to enable "),i("code",[e._v("CONFIG_DEBUG_TCBINFO")]),e._v(" in the NuttX configuration for your build (to expose the TCB offsets).")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("Open a terminal in the root of your PX4-Autopilot source code")])]),e._v(" "),i("li",[i("p",[e._v("In the terminal, open "),i("code",[e._v("menuconfig")]),e._v(" using the appropriate make target for the build.\nThis will be something like:")]),e._v(" "),i("div",{staticClass:"language-sh extra-class"},[i("pre",{pre:!0,attrs:{class:"language-sh"}},[i("code",[i("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" px4_fmu-v5_default boardguiconfig\n")])])]),i("p",[e._v("(See "),i("RouterLink",{attrs:{to:"/en/hardware/porting_guide_config.html#px4-menuconfig-setup"}},[e._v("PX4 Menuconfig Setup")]),e._v(" for more information) on using the config tools).")],1)]),e._v(" "),i("li",[i("p",[e._v("Ensure that the "),i("em",[e._v("Enable TCBinfo struct for debug")]),e._v(" is selected as shown:\n"),i("img",{attrs:{src:s(726),alt:"NuttX: Menuconfig: CONFIG_DEBUG_TCBINFO"}})])])])]),e._v(" "),i("li",[i("p",[e._v("Compile the "),i("strong",[e._v("jlink-nuttx.so")]),e._v(" library in the terminal by running the following command in the terminal: "),i("code",[e._v("make jlink-nuttx")])])]),e._v(" "),i("li",[i("p",[e._v("Modify Eclipse to use this libary.\nIn the "),i("em",[e._v("J-Link GDB Server Setup")]),e._v(" configuration, update "),i("strong",[e._v("Other options")]),e._v(" to include "),i("code",[e._v("-rtos /home/<PX4 path>/Tools/jlink-nuttx.so")]),e._v(", as shown in the image below.")]),e._v(" "),i("p",[i("img",{attrs:{src:s(727),alt:"Eclipse: GDB Segger Debug config RTOS aware: debugger tab"}})])]),e._v(" "),i("li",[i("p",[e._v("When running the debugger you should see now multiple threads instead of just one:")]),e._v(" "),i("p",[i("img",{attrs:{src:s(728),alt:"Eclipse: GDB Segger Debug config RTOS aware: debug session"}})])])]),e._v(" "),i("h2",{attrs:{id:"troubleshooting"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[e._v("#")]),e._v(" Troubleshooting")]),e._v(" "),i("h3",{attrs:{id:"target-cpu-not-in-package-manager"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#target-cpu-not-in-package-manager"}},[e._v("#")]),e._v(" Target CPU not in Package Manager")]),e._v(" "),i("p",[e._v("If the target CPU does not appear in the package manager you may need these steps to get the register view working.")]),e._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),i("p",[e._v("This should not generally happen (but anecdotally has been reported when connecting to an STM F7 controller).")])]),e._v(" "),i("p",[e._v("Adding missing SVD files for the "),i("em",[e._v("Peripheral View")]),e._v(":")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("Find out where MCU Eclipse stores its packages ("),i("strong",[e._v("Preferences > C/C++ > MCU Packages")]),e._v("):")]),e._v(" "),i("p",[i("img",{attrs:{src:s(729),alt:"Eclipse: MCU Packages"}})])]),e._v(" "),i("li",[i("p",[e._v("Download missing packages from: http://www.keil.com/dd2/Pack/")])]),e._v(" "),i("li",[i("p",[e._v("Open downloaded pack with a decompression tool, and extract the "),i("strong",[e._v(".SVD")]),e._v(" files from: "),i("strong",[e._v("/CMSIS/SVD")]),e._v(".")])]),e._v(" "),i("li",[i("p",[e._v("Select desired "),i("strong",[e._v(".SVD")]),e._v(" file in: "),i("strong",[e._v("Debug Options > GDB SEGGER JLink Debugging > SVD Path")])]),e._v(" "),i("p",[i("img",{attrs:{src:s(730),alt:"Eclipse: SVD File path"}})])])])])}),[],!1,null,null,null);t.default=n.exports},718:function(e,t,s){e.exports=s.p+"assets/img/eclipse_segger_jlink_path.d8782195.png"},719:function(e,t,s){e.exports=s.p+"assets/img/eclipse_workspace_perspective.35ee6066.png"},720:function(e,t,s){e.exports=s.p+"assets/img/eclipse_settings_devices_fmu.fe431174.png"},721:function(e,t,s){e.exports=s.p+"assets/img/eclipse_settings_debug_config.66f3a427.png"},722:function(e,t,s){e.exports=s.p+"assets/img/eclipse_settings_debug_config_gdb_segger.a7965a7b.png"},723:function(e,t,s){e.exports=s.p+"assets/img/eclipse_settings_debug_config_gdb_segger_build_config.e25fc8bb.png"},724:function(e,t,s){e.exports=s.p+"assets/img/eclipse_settings_debug_config_gdb_segger_build_config_debugger_tab.521be5e1.png"},725:function(e,t,s){e.exports=s.p+"assets/img/eclipse_settings_debug_config_gdb_segger_build_config_startup_tab.ce93e07a.png"},726:function(e,t,s){e.exports=s.p+"assets/img/nuttx_tcb_task_aware.f3883dfe.png"},727:function(e,t,s){e.exports=s.p+"assets/img/eclipse_settings_debug_config_gdb_segger_task_aware.14344604.png"},728:function(e,t,s){e.exports=s.p+"assets/img/eclipse_settings_debug_config_gdb_segger_task_aware_tasks.3958aab7.png"},729:function(e,t,s){e.exports=s.p+"assets/img/eclipse_mcu_packages.127100c2.png"},730:function(e,t,s){e.exports=s.p+"assets/img/eclipse_svd_file_path.81652f80.png"}}]);