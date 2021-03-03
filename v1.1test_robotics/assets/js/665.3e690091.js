(window.webpackJsonp=window.webpackJsonp||[]).push([[665],{2408:function(t,s,a){"use strict";a.r(s);var n=a(18),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"bash-on-windows-工具链"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#bash-on-windows-工具链"}},[t._v("#")]),t._v(" Bash on Windows 工具链")]),t._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),n("p",[t._v("This development environment is "),n("RouterLink",{attrs:{to:"/zh/advanced/dev_env_unsupported.html"}},[t._v("not supported")]),t._v(". See "),n("RouterLink",{attrs:{to:"/zh/dev_setup/dev_env.html"}},[t._v("Toolchain Installation")]),t._v(" for information about the environments and tools we do support!")],1)]),t._v(" "),n("p",[t._v("设置开发环境的最简单的方法是使用 "),n("strong",[n("a",{attrs:{href:"https://raw.githubusercontent.com/PX4/Devguide/master/build_scripts/windows_bash_nuttx.sh",target:"_blank",download:""}},[t._v("windows_bash_nuttx.sh")])]),t._v(" 安装脚本 （脚本文件的详细说明见 "),n("a",{attrs:{href:"#build_script_details"}},[t._v("下文")]),t._v("）。")]),t._v(" "),n("ul",[n("li",[t._v("编译针对 NuttX/Pixhawk 平台的固件。")]),t._v(" "),n("li",[t._v("使用 JMAVSim 进行PX4仿真 (需要搭配一个基于Windows的 X-Windows 应用来显示仿真UI界面)。")])]),t._v(" "),n("div",{staticClass:"custom-block note"},[n("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),n("p",[t._v("This mechanism only works on Windows 10. It essentially runs the toolchain in a virtual machine, and is relatively slow compared to other solutions.")])]),t._v(" "),n("h3",{attrs:{id:"设置开发环境"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#设置开发环境"}},[t._v("#")]),t._v(" 设置开发环境")]),t._v(" "),n("p",[t._v("固件编译流程（以编译 px4_fmu-v4 的固件为例）： ")]),t._v(" "),n("p",[t._v("To setup the development environment:")]),t._v(" "),n("ol",[n("li",[t._v("在Windows 10上启用、安装 "),n("a",{attrs:{href:"https://github.com/Microsoft/BashOnWindows",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bash on Windows"),n("OutboundLink")],1),t._v("。")]),t._v(" "),n("li",[t._v("打开 bash shell 命令行界面。")]),t._v(" "),n("li",[t._v("下载 "),n("strong",[t._v("windows_bash_nuttx.sh")]),t._v(" 脚本文件: "),n("code",[t._v("wget https://raw.githubusercontent.com/PX4/Devguide/master/build_scripts/windows_bash_nuttx.sh")])]),t._v(" "),n("li",[t._v("使用如下命令运行安装脚本 (根据需要确认任何提示)： sh source windows_bash_nuttx.sh")])]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" windows_bash_nuttx.sh\n")])])]),n("h3",{attrs:{id:"编译固件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#编译固件"}},[t._v("#")]),t._v(" 编译固件")]),t._v(" "),n("p",[t._v("JMAVSim 运行流程：")]),t._v(" "),n("ol",[n("li",[t._v("在 bash shell 命令行界面输入如下指令："),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("cd ~/src/Firmware\n")])])])])]),t._v(" "),n("p",[t._v("make px4_fmu-v4_default")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("成功完成编译后可以在 `Firmware/build/px4_fmu-v4_default/px4_fmu-v4_default.px4` 文件夹下找到编译好的固件。\n\n:::note\nThe `make` commands to build firmware for other boards can be found in [Building the Code](../dev_setup/building_px4.md#nuttx-pixhawk-based-boards).\n:::\n\n1. 在 Windows 平台上无法直接在 bash shell 中使用 `upload` 命令完成固件的烧写，你可以使用 *QGroundControl* 或者 *Mission Planner* 烧写自定义的固件。\n\n\n### 仿真模拟 （JMAVSim）\n\nBash on Windows does not include support for UI libraries. In order to display the jMAVSim UI you will first need to install an X-Window application like [XMing](https://sourceforge.net/projects/xming/) into Windows.\n\n此外， 由于 Bash on Windows 不支持运行32位 ELF 程序，该脚本弃用了来自 `https://launchpad.net/gcc-arm-embedded` 的默认32位编译器，改用 [64 bit arm-none-eabi compiler](https://github.com/SolinGuo/arm-none-eabi-bash-on-win10-.git) 。\n1. 在 Windows 平台安装并启动 [XMing](https://sourceforge.net/projects/xming/)。\n1. 在 bash shell 命令行界面输入如下指令： sh export DISPLAY=:0 >\n```sh\nsh\nexport DISPLAY=:0\nexport GAZEBO_IP=127.0.0.1\nmake px4_sitl gazebo\n")])])]),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),n("p",[t._v("Add this line to the Ubuntu "),n("strong",[t._v(".bashrc")]),t._v(" file if you don't want to enter it every session.")])]),t._v(" "),n("ol",[n("li",[n("p",[t._v("在 bash shell 界面中启动 px4 和 jmavsim：")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl jmavsim\n")])])]),n("p",[t._v("JMAVSim 的UI界面会显示在 XMing 程序中，如下所示：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(685),alt:"jMAVSimOnWindows"}})])])]),t._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),n("p",[t._v("Gazebo can similarly be run within Ubuntu Bash for Windows, but too slow to be useful. To try this, follow the "),n("a",{attrs:{href:"http://wiki.ros.org/kinetic/Installation/Ubuntu",target:"_blank",rel:"noopener noreferrer"}},[t._v("ROS kinetic install guide"),n("OutboundLink")],1),t._v(" and run Gazebo in the Bash shell as shown:")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[n("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("DISPLAY")])]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(":0\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("GAZEBO_IP")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl gazebo\n")])])])]),t._v(" "),n("p",[n("a",{attrs:{id:"build_script_details"}})]),t._v(" "),n("h3",{attrs:{id:"开发环境安装脚本详情"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#开发环境安装脚本详情"}},[t._v("#")]),t._v(" 开发环境安装脚本详情")]),t._v(" "),n("p",[t._v("The "),n("a",{attrs:{href:"https://raw.githubusercontent.com/PX4/Devguide/master/build_scripts/windows_bash_nuttx.sh"}},[t._v("windows_bash_nuttx.sh")]),t._v(" "),t._v(" build script modifies the Ubuntu build instructions to remove Ubuntu-specific and UI-dependent components, including the "),n("em",[t._v("Qt Creator")]),t._v(" IDE and the simulators.")]),t._v(" "),n("p",[t._v("In addition, it uses a "),n("a",{attrs:{href:"https://github.com/SolinGuo/arm-none-eabi-bash-on-win10-.git",target:"_blank",rel:"noopener noreferrer"}},[t._v("64 bit arm-none-eabi compiler"),n("OutboundLink")],1),t._v(" since BashOnWindows doesn't run 32 bit ELF programs (and the default compiler from "),n("code",[t._v("https://launchpad.net/gcc-arm-embedded")]),t._v(" is 32 bit).")]),t._v(" "),n("p",[t._v("To add this compiler to your environment manually:")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("下载编译器:")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[t._v("下载编译器: \n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://github.com/SolinGuo/arm-none-eabi-bash-on-win10-/raw/master/gcc-arm-none-eabi-5_4-2017q2-20170512-linux.tar.bz2\n")])])])]),t._v(" "),n("li",[n("p",[t._v("Bash On Windows 控制台中使用命令行进行解压：")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[t._v("Bash On Windows 控制台中使用命令行进行解压： \n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" -xvf gcc-arm-none-eabi-5_4-2017q2-20170512-linux.tar.bz2 该命令会将 arm gcc cross-compiler 解压至： "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("code"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("gcc-arm-none-eabi-5_4-2017q2/bin"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("/code"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),t._v("\n该命令会将 arm gcc cross-compiler 解压至：\n```\ngcc-arm-none-eabi-5_4-2017q2/bin\n```\n")]),t._v(" "),n("li",[n("p",[t._v("将下面这行命令添加到环境中（将该行添加到 bash 配置文件中完成永久性更改） "),n("code",[t._v("export PATH=$HOME/gcc-arm-none-eabi-5_4-2017q2/bin:\\$PATH")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("export PATH=$HOME/gcc-arm-none-eabi-5_4-2017q2/bin:$PATH\n")])])])])])])}),[],!1,null,null,null);s.default=e.exports},685:function(t,s,a){t.exports=a.p+"assets/img/jmavsim_on_windows.2d0339ad.png"}}]);