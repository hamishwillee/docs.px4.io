(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{3567:function(e,t,o){"use strict";o.r(t);var i=o(19),a=Object(i.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"visual-studio-code-ide-vscode"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#visual-studio-code-ide-vscode"}},[e._v("#")]),e._v(" Visual Studio Code IDE (VSCode)")]),e._v(" "),i("p",[i("a",{attrs:{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Visual Studio Code"),i("OutboundLink")],1),e._v(" 是一个强大的跨平台源代码编辑器/IDE，可用于在 Ubuntu 18.04  LTS 和 macOS (即将提供Windows支持)的 PX4 开发。")]),e._v(" "),i("p",[e._v("使用 VSCode 进行PX4 开发的原因：")]),e._v(" "),i("ul",[i("li",[e._v("仅需数分钟即可完成设置")]),e._v(" "),i("li",[e._v("丰富的扩展生态系统，能够用于PX4开发所需的大量工具：C/C++ (有固体的 "),i("em",[e._v("cmake")]),e._v(" 整合)， "),i("em",[e._v("Python")]),e._v(", "),i("em",[e._v("Jinja2")]),e._v(", ROS消息, 甚至UAVCAN dsdl.")]),e._v(" "),i("li",[e._v("非常好的Github 集成功能")])]),e._v(" "),i("p",[e._v("本主题解释了如何设置IDE并开始开发。")]),e._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),i("p",[e._v("还有其他强大的IDE，但它们通常需要更多的努力与 PX4 集成。 使用 _VScode_的配置存储在 PX4/PX4-Autopilot 树中("),i("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/.vscode",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4-Autopilot/vscode"),i("OutboundLink")],1),e._v("因此安装过程像添加项目文件夹一样简单。")])]),e._v(" "),i("h2",{attrs:{id:"前置条件"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#前置条件"}},[e._v("#")]),e._v(" 前置条件")]),e._v(" "),i("p",[e._v("You must already have installed the command line "),i("RouterLink",{attrs:{to:"/zh/dev_setup/dev_env.html"}},[e._v("PX4 developer environment")]),e._v(" for your platform and downloaded the "),i("em",[e._v("Firmware")]),e._v(" source code repo.")],1),e._v(" "),i("h2",{attrs:{id:"installation-setup"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#installation-setup"}},[e._v("#")]),e._v(" Installation & Setup")]),e._v(" "),i("ol",[i("li",[i("p",[i("a",{attrs:{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Download and install VSCode"),i("OutboundLink")],1),e._v(" (you will be offered the correct version for your OS).")])]),e._v(" "),i("li",[i("p",[e._v("Open VSCode and add the PX4 source code:")]),e._v(" "),i("ul",[i("li",[e._v("Select "),i("em",[e._v("Open folder ...")]),e._v(" option on the welcome page (or using the menu: "),i("strong",[e._v("File > Open Folder")]),e._v("): "),i("img",{attrs:{src:o(762),alt:"Open Folder"}})]),e._v(" "),i("li",[e._v("A file selection dialog will appear. Select the "),i("strong",[e._v("PX4-Autopilot")]),e._v(" directory and then press "),i("strong",[e._v("OK")]),e._v(".")])]),e._v(" "),i("p",[e._v("The project files and configuration will then load into "),i("em",[e._v("VSCode")]),e._v(".")])]),e._v(" "),i("li",[i("p",[e._v("Press "),i("strong",[e._v("Install All")]),e._v(" on the "),i("em",[e._v("This workspace has extension recommendations")]),e._v(" prompt (this will appear on the bottom right of the IDE). "),i("img",{attrs:{src:o(763),alt:"Install extensions"}})]),e._v(" "),i("p",[e._v("VSCode will open the "),i("em",[e._v("Extensions")]),e._v(" panel on the left hand side so you can watch the progress of installation.")]),e._v(" "),i("p",[i("img",{attrs:{src:o(764),alt:"PX4 loaded into VSCode Explorer"}})])]),e._v(" "),i("li",[i("p",[e._v("A number of notifications/prompts may appear in the bottom right corner")]),e._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[e._v("提示")])])])]),e._v(" "),i("p",[e._v('If the prompts disappear, click the little "alarm" icon on the right of the bottom blue bar.\n:::')]),e._v(" "),i("ul",[i("li",[e._v("If prompted to install a new version of "),i("em",[e._v("cmake")]),e._v(":\n"),i("ul",[i("li",[e._v("Say "),i("strong",[e._v("No")]),e._v(" (the right version is installed with the "),i("RouterLink",{attrs:{to:"/zh/dev_setup/dev_env.html"}},[e._v("PX4 developer environment")]),e._v(").")],1)])]),e._v(" "),i("li",[e._v("If prompted to sign into "),i("em",[e._v("github.com")]),e._v(" and add your credentials:\n"),i("ul",[i("li",[e._v("This is up to you! It provides a deep integration between Github and the IDE, which may simplify your workflow.")])])]),e._v(" "),i("li",[e._v("Other prompts are optional, and may be installed if they seem useful. ")])]),e._v(" "),i("p",[i("a",{attrs:{id:"building"}})]),e._v(" "),i("h2",{attrs:{id:"building-px4"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#building-px4"}},[e._v("#")]),e._v(" Building PX4")]),e._v(" "),i("p",[e._v("To build:")]),e._v(" "),i("ol",[i("li",[i("p",[e._v('Select your build target ("cmake build config"):')]),e._v(" "),i("ul",[i("li",[e._v("The current "),i("em",[e._v("cmake build target")]),e._v(" is shown on the blue "),i("em",[e._v("config")]),e._v(" bar at the bottom (if this is already your desired target, skip to next step). "),i("img",{attrs:{src:o(765),alt:"Select Cmake build target"}})])])])]),e._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),i("p",[e._v("The cmake target you select affects the targets offered for when "),i("a",{attrs:{href:"#debugging"}},[e._v("building/debugging")]),e._v(" (i.e. for hardware debugging you must select a hardware target like "),i("code",[e._v("px4_fmu-v5")]),e._v(").")])]),e._v(" "),i("ul",[i("li",[e._v("Click the target on the config bar to display other options, and select the one you want (this will replace any selected target).")]),e._v(" "),i("li",[i("em",[e._v("Cmake")]),e._v(" will then configure your project (see notification in bottom right). "),i("img",{attrs:{src:o(766),alt:"Cmake config project"}})]),e._v(" "),i("li",[e._v("Wait until configuration completes. When this is done the notification will disappear and you'll be shown the build location: "),i("img",{attrs:{src:o(767),alt:"Cmake config project"}}),e._v(".")])]),e._v(" "),i("ol",[i("li",[e._v("You can then kick off a build from the config bar (select either "),i("strong",[e._v("Build")]),e._v(" or "),i("strong",[e._v("Debug")]),e._v("). "),i("img",{attrs:{src:o(768),alt:"Run debug or build"}})])]),e._v(" "),i("p",[e._v("After building at least once you can now use [code completion](#code completion) and other "),i("em",[e._v("VSCode")]),e._v(" features.")]),e._v(" "),i("h2",{attrs:{id:"调试"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#调试"}},[e._v("#")]),e._v(" 调试")]),e._v(" "),i("p",[i("a",{attrs:{id:"debugging_sitl"}})]),e._v(" "),i("h3",{attrs:{id:"sitl-debugging"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#sitl-debugging"}},[e._v("#")]),e._v(" SITL Debugging")]),e._v(" "),i("p",[e._v("To debug PX4 on SITL:")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("Select the debug icon on the sidebar (marked in red) to display the debug panel. "),i("img",{attrs:{src:o(769),alt:"Run debug"}})])]),e._v(" "),i("li",[i("p",[e._v("Then choose your debug target (e.g. "),i("em",[e._v("Debug SITL (Gazebo Iris)")]),e._v(") from the top bar debug dropdown (purple box).")]),e._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[e._v("注解")])])])]),e._v(" "),i("p",[e._v("The debug targets that are offered (purple box) match your build target (yellow box on the bottom bar).\nFor example, to debug SITL targets, your build target must include SITL.\n:::")]),e._v(" "),i("ol",[i("li",[e._v('Start debugging by clicking the debug "play" arrow (next to the debug target in the top bar - pink box).')])]),e._v(" "),i("p",[e._v("While debugging you can set breakpoints, step over code, and otherwise develop as normal.")]),e._v(" "),i("h3",{attrs:{id:"hardware-debugging"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#hardware-debugging"}},[e._v("#")]),e._v(" Hardware Debugging")]),e._v(" "),i("p",[e._v("The instructions in "),i("RouterLink",{attrs:{to:"/zh/debug/swd_debug.html"}},[e._v("SWD Debug Port")]),e._v(" explain how to connect to the SWD interface on common flight controllers (for example, using the Dronecode or Blackmagic probes).")],1),e._v(" "),i("p",[e._v("After connecting to the SWD interface, hardware debugging in VSCode is then the same as for "),i("a",{attrs:{href:"#debugging_sitl"}},[e._v("SITL Debugging")]),e._v(" except that you select a debug target appropriate for your debugger type (and firmware) - e.g. "),i("code",[e._v("jlink (px4_fmu-v5)")]),e._v(".")]),e._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[e._v("提示")]),e._v(" "),i("p",[e._v("To see the "),i("code",[e._v("jlink")]),e._v(" option you must have selected a "),i("a",{attrs:{href:"#building-px4"}},[e._v("cmake target for building firmware")]),e._v(".")])]),e._v(" "),i("p",[i("img",{attrs:{src:o(770),alt:"Image showing hardware targets with options for the different probes"}})]),e._v(" "),i("p",[i("a",{attrs:{id:"code completion"}})]),e._v(" "),i("h2",{attrs:{id:"code-completion"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#code-completion"}},[e._v("#")]),e._v(" Code Completion")]),e._v(" "),i("p",[e._v("In order for the code completion to work (and other IntelliSense magic) you need an active configuration and to have "),i("a",{attrs:{href:"#building"}},[e._v("built the code")]),e._v(".")]),e._v(" "),i("p",[e._v("Once that is done you don't need to do anything else; the toolchain will automatically offer you symbols as you type.")]),e._v(" "),i("p",[i("img",{attrs:{src:o(771),alt:"IntelliSense"}})]),e._v(" "),i("h2",{attrs:{id:"troubleshooting"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[e._v("#")]),e._v(" Troubleshooting")]),e._v(" "),i("p",[e._v("This section includes guidance on setup and build errors.")]),e._v(" "),i("h3",{attrs:{id:"ubuntu-18-04-visual-studio-code-is-unable-to-watch-for-file-changes-in-this-large-workspace"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-18-04-visual-studio-code-is-unable-to-watch-for-file-changes-in-this-large-workspace"}},[e._v("#")]),e._v(' Ubuntu 18.04: "Visual Studio Code is unable to watch for file changes in this large workspace"')]),e._v(" "),i("p",[e._v("This error surfaces on startup. On some systems, there is an upper-limit of 8192 file handles imposed on applications, which means that VSCode might not be able to detect file modifications in "),i("code",[e._v("/PX4-Autopilot")]),e._v(".")]),e._v(" "),i("p",[e._v("You can increase this limit to avoid the error, at the expense of memory consumption. Follow the "),i("a",{attrs:{href:"https://code.visualstudio.com/docs/setup/linux#_visual-studio-code-is-unable-to-watch-for-file-changes-in-this-large-workspace-error-enospc",target:"_blank",rel:"noopener noreferrer"}},[e._v("instructions here"),i("OutboundLink")],1),e._v(". A value of 65536 should be more than sufficient.")])])}),[],!1,null,null,null);t.default=a.exports},762:function(e,t,o){e.exports=o.p+"assets/img/welcome_open_folder.9a802170.jpg"},763:function(e,t,o){e.exports=o.p+"assets/img/prompt_install_extensions.9753d279.jpg"},764:function(e,t,o){e.exports=o.p+"assets/img/installing_extensions.eed4125c.jpg"},765:function(e,t,o){e.exports=o.p+"assets/img/cmake_build_config.d852f27e.jpg"},766:function(e,t,o){e.exports=o.p+"assets/img/cmake_configuring_project.9c4cbc76.jpg"},767:function(e,t,o){e.exports=o.p+"assets/img/cmake_configuring_project_done.0a8cfeb8.jpg"},768:function(e,t,o){e.exports=o.p+"assets/img/run_debug_build.a8c094ef.jpg"},769:function(e,t,o){e.exports=o.p+"assets/img/vscode_debug.a6879667.jpg"},770:function(e,t,o){e.exports=o.p+"assets/img/vscode_hardware_debugging_options.fa486ed9.png"},771:function(e,t,o){e.exports=o.p+"assets/img/vscode_intellisense.f717906d.jpg"}}]);