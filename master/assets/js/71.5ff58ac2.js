(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{1436:function(e,t,o){e.exports=o.p+"assets/img/cmake_configuring_project_done.28a6a299.jpg"},1689:function(e,t,o){"use strict";o.r(t);var i=o(19),a=Object(i.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"visual-studio-code-ide-vscode"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#visual-studio-code-ide-vscode"}},[e._v("#")]),e._v(" Visual Studio Code IDE (VSCode)")]),e._v(" "),i("p",[i("a",{attrs:{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Visual Studio Code"),i("OutboundLink")],1),e._v(" is a powerful cross-platform source code editor/IDE that can be used for PX4 development on Ubuntu 18.04 LTS and macOS (Windows support coming soon).")]),e._v(" "),i("p",[e._v("There are a number of reasons to use VSCode for PX4 development:")]),e._v(" "),i("ul",[i("li",[e._v("Getting setup "),i("em",[e._v("really")]),e._v(" only takes a few minutes.")]),e._v(" "),i("li",[e._v("A rich extension ecosystem that enables a huge range of tools needed for PX4 development: C/C++ (with solid "),i("em",[e._v("cmake")]),e._v(" integration), "),i("em",[e._v("Python")]),e._v(", "),i("em",[e._v("Jinja2")]),e._v(", ROS messages, and even UAVCAN dsdl.")]),e._v(" "),i("li",[e._v("Excellent Github integration.")])]),e._v(" "),i("p",[e._v("This topic explains how to setup the IDE and start developing.")]),e._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),i("p",[e._v("There are other powerful IDEs, but they typically take more effort to integrate with PX4.\nWith "),i("em",[e._v("VScode")]),e._v(", configuration is stored in the PX4/PX4-Autopilot tree ("),i("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/.vscode",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4-Autopilot/.vscode"),i("OutboundLink")],1),e._v(") so the setup process is as simple as adding the project folder.")])]),e._v(" "),i("h2",{attrs:{id:"preconditions"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#preconditions"}},[e._v("#")]),e._v(" Preconditions")]),e._v(" "),i("p",[e._v("You must already have installed the command line "),i("RouterLink",{attrs:{to:"/en/dev_setup/dev_env.html"}},[e._v("PX4 developer environment")]),e._v(" for your platform and downloaded the "),i("em",[e._v("Firmware")]),e._v(" source code repo.")],1),e._v(" "),i("h2",{attrs:{id:"installation-setup"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#installation-setup"}},[e._v("#")]),e._v(" Installation & Setup")]),e._v(" "),i("ol",[i("li",[i("p",[i("a",{attrs:{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Download and install VSCode"),i("OutboundLink")],1),e._v(" (you will be offered the correct version for your OS).")])]),e._v(" "),i("li",[i("p",[e._v("Open VSCode and add the PX4 source code:")]),e._v(" "),i("ul",[i("li",[e._v("Select "),i("em",[e._v("Open folder ...")]),e._v(" option on the welcome page (or using the menu: "),i("strong",[e._v("File > Open Folder")]),e._v("):\n"),i("img",{attrs:{src:o(720),alt:"Open Folder"}})]),e._v(" "),i("li",[e._v("A file selection dialog will appear.\nSelect the "),i("strong",[e._v("PX4-Autopilot")]),e._v(" directory and then press "),i("strong",[e._v("OK")]),e._v(".")])]),e._v(" "),i("p",[e._v("The project files and configuration will then load into "),i("em",[e._v("VSCode")]),e._v(".")])]),e._v(" "),i("li",[i("p",[e._v("Press "),i("strong",[e._v("Install All")]),e._v(" on the "),i("em",[e._v("This workspace has extension recommendations")]),e._v(" prompt (this will appear on the bottom right of the IDE).\n"),i("img",{attrs:{src:o(721),alt:"Install extensions"}})]),e._v(" "),i("p",[e._v("VSCode will open the "),i("em",[e._v("Extensions")]),e._v(" panel on the left hand side so you can watch the progress of installation.")]),e._v(" "),i("p",[i("img",{attrs:{src:o(722),alt:"PX4 loaded into VSCode Explorer"}})])]),e._v(" "),i("li",[i("p",[e._v("A number of notifications/prompts may appear in the bottom right corner")]),e._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),i("p",[e._v('If the prompts disappear, click the little "alarm" icon on the right of the bottom blue bar.')])]),e._v(" "),i("ul",[i("li",[e._v("If prompted to install a new version of "),i("em",[e._v("cmake")]),e._v(":\n"),i("ul",[i("li",[e._v("Say "),i("strong",[e._v("No")]),e._v(" (the right version is installed with the "),i("RouterLink",{attrs:{to:"/en/dev_setup/dev_env.html"}},[e._v("PX4 developer environment")]),e._v(").")],1)])]),e._v(" "),i("li",[e._v("If prompted to sign into "),i("em",[e._v("github.com")]),e._v(" and add your credentials:\n"),i("ul",[i("li",[e._v("This is up to you! It provides a deep integration between Github and the IDE, which may simplify your workflow.")])])]),e._v(" "),i("li",[e._v("Other prompts are optional, and may be installed if they seem useful. ")])])])]),e._v(" "),i("p",[i("a",{attrs:{id:"building"}})]),e._v(" "),i("h2",{attrs:{id:"building-px4"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#building-px4"}},[e._v("#")]),e._v(" Building PX4")]),e._v(" "),i("p",[e._v("To build:")]),e._v(" "),i("ol",[i("li",[e._v('Select your build target ("cmake build config"):\n'),i("ul",[i("li",[i("p",[e._v("The current "),i("em",[e._v("cmake build target")]),e._v(" is shown on the blue "),i("em",[e._v("config")]),e._v(" bar at the bottom (if this is already your desired target, skip to next step).\n"),i("img",{attrs:{src:o(723),alt:"Select Cmake build target"}})]),e._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),i("p",[e._v("The cmake target you select affects the targets offered for when "),i("a",{attrs:{href:"#debugging"}},[e._v("building/debugging")]),e._v(" (i.e. for hardware debugging you must select a hardware target like "),i("code",[e._v("px4_fmu-v5")]),e._v(").")])])]),e._v(" "),i("li",[i("p",[e._v("Click the target on the config bar to display other options, and select the one you want (this will replace any selected target).")])]),e._v(" "),i("li",[i("p",[i("em",[e._v("Cmake")]),e._v(" will then configure your project (see notification in bottom right).\n"),i("img",{attrs:{src:o(724),alt:"Cmake config project"}})])]),e._v(" "),i("li",[i("p",[e._v("Wait until configuration completes.\nWhen this is done the notification will disappear and you'll be shown the build location:\n"),i("img",{attrs:{src:o(1436),alt:"Cmake config project"}}),e._v(".")])])])]),e._v(" "),i("li",[e._v("You can then kick off a build from the config bar (select either "),i("strong",[e._v("Build")]),e._v(" or "),i("strong",[e._v("Debug")]),e._v(").\n"),i("img",{attrs:{src:o(725),alt:"Run debug or build"}})])]),e._v(" "),i("p",[e._v("After building at least once you can now use [code completion](#code completion) and other "),i("em",[e._v("VSCode")]),e._v(" features.")]),e._v(" "),i("h2",{attrs:{id:"debugging"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#debugging"}},[e._v("#")]),e._v(" Debugging")]),e._v(" "),i("p",[i("a",{attrs:{id:"debugging_sitl"}})]),e._v(" "),i("h3",{attrs:{id:"sitl-debugging"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#sitl-debugging"}},[e._v("#")]),e._v(" SITL Debugging")]),e._v(" "),i("p",[e._v("To debug PX4 on SITL:")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("Select the debug icon on the sidebar (marked in red) to display the debug panel.\n"),i("img",{attrs:{src:o(726),alt:"Run debug"}})])]),e._v(" "),i("li",[i("p",[e._v("Then choose your debug target (e.g. "),i("em",[e._v("Debug SITL (Gazebo Iris)")]),e._v(") from the top bar debug dropdown (purple box).")]),e._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),i("p",[e._v("The debug targets that are offered (purple box) match your build target (yellow box on the bottom bar).\nFor example, to debug SITL targets, your build target must include SITL.")])])]),e._v(" "),i("li",[i("p",[e._v('Start debugging by clicking the debug "play" arrow (next to the debug target in the top bar - pink box).')])])]),e._v(" "),i("p",[e._v("While debugging you can set breakpoints, step over code, and otherwise develop as normal.")]),e._v(" "),i("h3",{attrs:{id:"hardware-debugging"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#hardware-debugging"}},[e._v("#")]),e._v(" Hardware Debugging")]),e._v(" "),i("p",[e._v("The instructions in "),i("RouterLink",{attrs:{to:"/en/debug/swd_debug.html"}},[e._v("SWD (JTAG) Hardware Debugging Interface")]),e._v(" explain how to connect to the SWD interface on common flight controllers (for example, using the Dronecode or Blackmagic probes).")],1),e._v(" "),i("p",[e._v("After connecting to the SWD interface, hardware debugging in VSCode is then the same as for "),i("a",{attrs:{href:"#debugging_sitl"}},[e._v("SITL Debugging")]),e._v(" except that you select a debug target appropriate for your debugger type (and firmware) - e.g. "),i("code",[e._v("jlink (px4_fmu-v5)")]),e._v(".")]),e._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),i("p",[e._v("To see the "),i("code",[e._v("jlink")]),e._v(" option you must have selected a "),i("a",{attrs:{href:"#building-px4"}},[e._v("cmake target for building firmware")]),e._v(".")])]),e._v(" "),i("p",[i("img",{attrs:{src:o(727),alt:"Image showing hardware targets with options for the different probes"}})]),e._v(" "),i("p",[i("a",{attrs:{id:"code completion"}})]),e._v(" "),i("h2",{attrs:{id:"code-completion"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#code-completion"}},[e._v("#")]),e._v(" Code Completion")]),e._v(" "),i("p",[e._v("In order for the code completion to work (and other IntelliSense magic) you need an active configuration and to have "),i("a",{attrs:{href:"#building"}},[e._v("built the code")]),e._v(".")]),e._v(" "),i("p",[e._v("Once that is done you don't need to do anything else; the toolchain will automatically offer you symbols as you type.")]),e._v(" "),i("p",[i("img",{attrs:{src:o(728),alt:"IntelliSense"}})]),e._v(" "),i("h2",{attrs:{id:"troubleshooting"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[e._v("#")]),e._v(" Troubleshooting")]),e._v(" "),i("p",[e._v("This section includes guidance on setup and build errors.")]),e._v(" "),i("h3",{attrs:{id:"ubuntu-18-04-visual-studio-code-is-unable-to-watch-for-file-changes-in-this-large-workspace"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-18-04-visual-studio-code-is-unable-to-watch-for-file-changes-in-this-large-workspace"}},[e._v("#")]),e._v(' Ubuntu 18.04: "Visual Studio Code is unable to watch for file changes in this large workspace"')]),e._v(" "),i("p",[e._v("This error surfaces on startup.\nOn some systems, there is an upper-limit of 8192 file handles imposed on applications, which means that VSCode might not be able to detect file modifications in "),i("code",[e._v("/PX4-Autopilot")]),e._v(".")]),e._v(" "),i("p",[e._v("You can increase this limit to avoid the error, at the expense of memory consumption.\nFollow the "),i("a",{attrs:{href:"https://code.visualstudio.com/docs/setup/linux#_visual-studio-code-is-unable-to-watch-for-file-changes-in-this-large-workspace-error-enospc",target:"_blank",rel:"noopener noreferrer"}},[e._v("instructions here"),i("OutboundLink")],1),e._v(".\nA value of 65536 should be more than sufficient.")])])}),[],!1,null,null,null);t.default=a.exports},720:function(e,t,o){e.exports=o.p+"assets/img/welcome_open_folder.ba75c14c.jpg"},721:function(e,t,o){e.exports=o.p+"assets/img/prompt_install_extensions.03b97ce1.jpg"},722:function(e,t,o){e.exports=o.p+"assets/img/installing_extensions.e62cf081.jpg"},723:function(e,t,o){e.exports=o.p+"assets/img/cmake_build_config.528ab04f.jpg"},724:function(e,t,o){e.exports=o.p+"assets/img/cmake_configuring_project.00dd9c21.jpg"},725:function(e,t,o){e.exports=o.p+"assets/img/run_debug_build.5842efe5.jpg"},726:function(e,t,o){e.exports=o.p+"assets/img/vscode_debug.b181ef8e.jpg"},727:function(e,t,o){e.exports=o.p+"assets/img/vscode_hardware_debugging_options.ce723188.png"},728:function(e,t,o){e.exports=o.p+"assets/img/vscode_intellisense.ac730d77.jpg"}}]);