(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{1415:function(e,t,i){e.exports=i.p+"assets/img/eclipse_packs_perspective.b1c50d70.jpg"},1561:function(e,t,i){"use strict";i.r(t);var s=i(19),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"mcu-eclipse-j-link-debugging-for-px4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mcu-eclipse-j-link-debugging-for-px4"}},[e._v("#")]),e._v(" MCU Eclipse/J-Link Debugging for PX4")]),e._v(" "),s("p",[e._v("This topic explains how to setup and use "),s("a",{attrs:{href:"https://gnu-mcu-eclipse.github.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("MCU Eclipse"),s("OutboundLink")],1),e._v(" with a "),s("em",[e._v("Segger Jlink adapter")]),e._v(" to debug PX4 running on NuttX (e.g. Pixhawk series boards).")]),e._v(" "),s("h2",{attrs:{id:"required-hardware"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#required-hardware"}},[e._v("#")]),e._v(" Required Hardware")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.segger.com/products/debug-probes/j-link/models/j-link-edu-mini/",target:"_blank",rel:"noopener noreferrer"}},[e._v("J-Link EDU Mini"),s("OutboundLink")],1)]),e._v(" "),s("li",[e._v("Adapter to connect Segger JLink to Flight Controller "),s("RouterLink",{attrs:{to:"/en/debug/swd_debug.html"}},[e._v("SWD (JTAG) Hardware Debugging Interface")]),e._v(" (debug port).")],1),e._v(" "),s("li",[e._v("USB micro cable")]),e._v(" "),s("li",[e._v("Suitable cables to connect your target.")])]),e._v(" "),s("h2",{attrs:{id:"installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),s("h3",{attrs:{id:"px4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#px4"}},[e._v("#")]),e._v(" PX4")]),e._v(" "),s("p",[e._v("Setup PX4 by following the normal guidelines:")]),e._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/en/dev_setup/dev_env.html"}},[e._v("Setup the PX4 Developer Environment/Toolchain")]),e._v(" for your platofrm (e.g. for Linux see: "),s("RouterLink",{attrs:{to:"/en/dev_setup/dev_env_linux_ubuntu.html"}},[e._v("Development Environment on Ubuntu LTS / Debian Linux")]),e._v(").")],1),e._v(" "),s("li",[s("RouterLink",{attrs:{to:"/en/dev_setup/building_px4.html"}},[e._v("Download PX4")]),e._v(" and optionally build it on the command line.")],1)]),e._v(" "),s("h3",{attrs:{id:"eclipse"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#eclipse"}},[e._v("#")]),e._v(" Eclipse")]),e._v(" "),s("p",[e._v("To install "),s("em",[e._v("Eclipse")]),e._v(":")]),e._v(" "),s("ol",[s("li",[e._v("Download "),s("a",{attrs:{href:"https://github.com/gnu-mcu-eclipse/org.eclipse.epp.packages/releases/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Eclipse CDT for C/C++ Developers"),s("OutboundLink")],1),e._v(" (MCU GitHub).")]),e._v(" "),s("li",[e._v("Extract the Eclipse folder and copy it anywhere (there is no need to run any install scripts).")]),e._v(" "),s("li",[e._v("Run "),s("em",[e._v("Eclipse")]),e._v(" and choose a location for your initial workbench.")])]),e._v(" "),s("h3",{attrs:{id:"segger-jlink-tools"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#segger-jlink-tools"}},[e._v("#")]),e._v(" Segger Jlink Tools")]),e._v(" "),s("p",[e._v("To install the "),s("em",[e._v("Segger Jlink")]),e._v(" tools:")]),e._v(" "),s("ol",[s("li",[e._v("Download and run the "),s("a",{attrs:{href:"https://www.segger.com/downloads/jlink/#J-LinkSoftwareAndDocumentationPack",target:"_blank",rel:"noopener noreferrer"}},[e._v("J-Link Software and Documentation Pack"),s("OutboundLink")],1),e._v(" for your OS (Windows and Linux packages available).\n"),s("ul",[s("li",[e._v("On Linux the tools are installed in "),s("strong",[e._v("usr/bin")]),e._v(".")])])])]),e._v(" "),s("p",[e._v("For more information, see: https://gnu-mcu-eclipse.github.io/debug/jlink/install/")]),e._v(" "),s("h2",{attrs:{id:"first-use"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#first-use"}},[e._v("#")]),e._v(" First Use")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Connect the "),s("em",[e._v("Segger JLink")]),e._v(" to the host computer and the "),s("RouterLink",{attrs:{to:"/en/debug/swd_debug.html"}},[e._v("flight controller debug port")]),e._v(" (via an adapter).")],1)]),e._v(" "),s("li",[s("p",[e._v("Power the flight controller.")])]),e._v(" "),s("li",[s("p",[e._v("Run "),s("em",[e._v("Eclipse")]),e._v(".")])]),e._v(" "),s("li",[s("p",[e._v("Add a source by choosing "),s("strong",[e._v("File > Import > C/C++ > Existing Code as Makefile Project")]),e._v(" and click "),s("strong",[e._v("Next")]),e._v(".")])]),e._v(" "),s("li",[s("p",[e._v("Point it to the "),s("strong",[e._v("PX4-Autopilot")]),e._v(" folder and give it a name, then select "),s("em",[e._v("ARM Cross GCC")]),e._v(" in the "),s("em",[e._v("Toolchain for Indexer Settings")]),e._v(" and click "),s("strong",[e._v("Finish")]),e._v(".\nImport takes a while, wait for it to complete.")])]),e._v(" "),s("li",[s("p",[e._v("Set the MCU settings: right-click on the top-level project in the Project Explorer, select "),s("em",[e._v("Properties")]),e._v(" then under MCU choose "),s("em",[e._v("SEGGER J-Link Path")]),e._v(".\nSet it as shown in the screenshot below.\n"),s("img",{attrs:{src:i(660),alt:"Eclipse: Segger J-Link Path"}})])]),e._v(" "),s("li",[s("p",[e._v("Update packs:")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("Click the small icon on the top right called "),s("em",[e._v("Open Perspective")]),e._v(" and open the "),s("em",[e._v("Packs")]),e._v(" perspective.\n"),s("img",{attrs:{src:i(661),alt:"Eclipse: Workspace"}})])]),e._v(" "),s("li",[s("p",[e._v("Click the "),s("strong",[e._v("update all")]),e._v(" button.")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("This takes a VERY LONG TIME (10 minutes).\nIgnore all the errors about missing packages that pop up.")])]),e._v(" "),s("p",[s("img",{attrs:{src:i(1415),alt:"Eclipse: Workspace Packs Perspective"}})])]),e._v(" "),s("li",[s("p",[e._v("The STM32Fxx devices are found in the Keil folder, install by right-clicking and then selecting "),s("strong",[e._v("install")]),e._v(" on the according device for F4 and F7.")])])])]),e._v(" "),s("li",[s("p",[e._v("Setup debug configuration for target:")]),e._v(" "),s("ul",[s("li",[e._v("Right click project and open the "),s("em",[e._v("Settings")]),e._v(" (menu: "),s("strong",[e._v("C/C++ Build > Settings")]),e._v(")")]),e._v(" "),s("li",[e._v("Choose the "),s("em",[e._v("Devices")]),e._v(" Tab, "),s("em",[e._v("Devices")]),e._v(" section (Not "),s("em",[e._v("Boards")]),e._v(").")]),e._v(" "),s("li",[e._v("Find the FMU chip you wish to debug.")])]),e._v(" "),s("p",[s("img",{attrs:{src:i(662),alt:"Eclipse: Select FMU in settings"}})])]),e._v(" "),s("li",[s("p",[e._v("Select debug configurations with the small drop-down next to the bug symbol:\n"),s("img",{attrs:{src:i(663),alt:"Eclipse: Debug config"}})])]),e._v(" "),s("li",[s("p",[e._v("Then select "),s("em",[e._v("GDB SEGGER J-Link Debugging")]),e._v(" and then the "),s("strong",[e._v("New config")]),e._v(" button on the top left.\n"),s("img",{attrs:{src:i(664),alt:"Eclipse: GDB Segger Debug config"}})])]),e._v(" "),s("li",[s("p",[e._v("Setup build config:")]),e._v(" "),s("ul",[s("li",[e._v("Give it a name and set  the "),s("em",[e._v("C/C++ Application")]),e._v(" to the corresponding "),s("strong",[e._v(".elf")]),e._v(" file.")]),e._v(" "),s("li",[e._v("Choose "),s("em",[e._v("Disable Auto build")]),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),s("p",[e._v("Remember that you must build the target from the command line before starting a debug session.")])])])]),e._v(" "),s("p",[s("img",{attrs:{src:i(665),alt:"Eclipse: GDB Segger Debug config"}})])]),e._v(" "),s("li",[s("p",[e._v("The "),s("em",[e._v("Debugger")]),e._v(" and "),s("em",[e._v("Startup")]),e._v(" tabs shouldn’t need any modifications (just verify your settings with the screenshots below)")]),e._v(" "),s("p",[s("img",{attrs:{src:i(666),alt:"Eclipse: GDB Segger Debug config: debugger tab"}}),e._v(" "),s("img",{attrs:{src:i(667),alt:"Eclipse: GDB Segger Debug config: startup tab"}})])])]),e._v(" "),s("h2",{attrs:{id:"troubleshooting"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[e._v("#")]),e._v(" Troubleshooting")]),e._v(" "),s("h3",{attrs:{id:"target-cpu-not-in-package-manager"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#target-cpu-not-in-package-manager"}},[e._v("#")]),e._v(" Target CPU not in Package Manager")]),e._v(" "),s("p",[e._v("If the target CPU does not appear in the package manager you may need these steps to get the register view working.")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("This should not generally happen (but anecdotally has been reported when connecting to an STM F7 controller).")])]),e._v(" "),s("p",[e._v("Adding missing SVD files for the "),s("em",[e._v("Peripheral View")]),e._v(":")]),e._v(" "),s("ol",[s("li",[e._v("Find out where MCU Eclipse stores its packages ("),s("strong",[e._v("Preferences > C/C++ > MCU Packages")]),e._v("):\n"),s("img",{attrs:{src:i(668),alt:"Eclipse: MCU Packages"}})]),e._v(" "),s("li",[e._v("Download missing packages from: http://www.keil.com/dd2/Pack/")]),e._v(" "),s("li",[e._v("Open downloaded pack with a decompression tool, and extract the "),s("strong",[e._v(".SVD")]),e._v(" files from: "),s("strong",[e._v("/CMSIS/SVD")]),e._v(".")]),e._v(" "),s("li",[e._v("Select desired "),s("strong",[e._v(".SVD")]),e._v(" file in: "),s("strong",[e._v("Debug Options > GDB SEGGER JLink Debugging > SVD Path")]),e._v(" "),s("img",{attrs:{src:i(669),alt:"Eclipse: SVD File path"}})])])])}),[],!1,null,null,null);t.default=n.exports},660:function(e,t,i){e.exports=i.p+"assets/img/eclipse_segger_jlink_path.09c8eef4.png"},661:function(e,t,i){e.exports=i.p+"assets/img/eclipse_workspace_perspective.e8bd6eae.png"},662:function(e,t,i){e.exports=i.p+"assets/img/eclipse_settings_devices_fmu.cd75cdfe.png"},663:function(e,t,i){e.exports=i.p+"assets/img/eclipse_settings_debug_config.4853df65.png"},664:function(e,t,i){e.exports=i.p+"assets/img/eclipse_settings_debug_config_gdb_segger.e6fe84a1.png"},665:function(e,t,i){e.exports=i.p+"assets/img/eclipse_settings_debug_config_gdb_segger_build_config.b343658b.png"},666:function(e,t,i){e.exports=i.p+"assets/img/eclipse_settings_debug_config_gdb_segger_build_config_debugger_tab.6ddac573.png"},667:function(e,t,i){e.exports=i.p+"assets/img/eclipse_settings_debug_config_gdb_segger_build_config_startup_tab.71cc438b.png"},668:function(e,t,i){e.exports=i.p+"assets/img/eclipse_mcu_packages.9083361d.png"},669:function(e,t,i){e.exports=i.p+"assets/img/eclipse_svd_file_path.7cfeb5ca.png"}}]);