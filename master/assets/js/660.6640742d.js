(window.webpackJsonp=window.webpackJsonp||[]).push([[660],{2395:function(s,t,a){"use strict";a.r(t);var n=a(18),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"bash-on-windows-工具链"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#bash-on-windows-工具链"}},[s._v("#")]),s._v(" Bash on Windows 工具链")]),s._v(" "),n("div",{staticClass:"custom-block note"},[n("p",{staticClass:"custom-block-title"},[s._v("注解")]),s._v(" "),n("p",[s._v("The "),n("RouterLink",{attrs:{to:"/zh/dev_setup/dev_env_windows_cygwin.html"}},[s._v("Windows Cygwin Toolchain")]),s._v(" is the (only) officially supported toolchain for Windows development.")],1)]),s._v(" "),n("p",[s._v("设置开发环境的最简单的方法是使用 "),n("strong",[n("a",{attrs:{href:"https://raw.githubusercontent.com/PX4/Devguide/master/build_scripts/windows_bash_nuttx.sh",target:"_blank",download:""}},[s._v("windows_bash_nuttx.sh")])]),s._v(" 安装脚本 （脚本文件的详细说明见 "),n("a",{attrs:{href:"#build_script_details"}},[s._v("下文")]),s._v("）。")]),s._v(" "),n("ul",[n("li",[s._v("编译针对 NuttX/Pixhawk 平台的固件。")]),s._v(" "),n("li",[s._v("使用 JMAVSim 进行PX4仿真 (需要搭配一个基于Windows的 X-Windows 应用来显示仿真UI界面)。")])]),s._v(" "),n("div",{staticClass:"custom-block note"},[n("p",{staticClass:"custom-block-title"},[s._v("注解")]),s._v(" "),n("p",[s._v("This mechanism only works on Windows 10. It essentially runs the toolchain in a virtual machine, and is relatively slow compared to other solutions.")])]),s._v(" "),n("h3",{attrs:{id:"设置开发环境"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#设置开发环境"}},[s._v("#")]),s._v(" 设置开发环境")]),s._v(" "),n("p",[s._v("固件编译流程（以编译 px4_fmu-v4 的固件为例）： ")]),s._v(" "),n("p",[s._v("To setup the development environment:")]),s._v(" "),n("ol",[n("li",[s._v("在Windows 10上启用、安装 "),n("a",{attrs:{href:"https://github.com/Microsoft/BashOnWindows",target:"_blank",rel:"noopener noreferrer"}},[s._v("Bash on Windows"),n("OutboundLink")],1),s._v("。")]),s._v(" "),n("li",[s._v("打开 bash shell 命令行界面。")]),s._v(" "),n("li",[s._v("下载 "),n("strong",[s._v("windows_bash_nuttx.sh")]),s._v(" 脚本文件: "),n("code",[s._v("wget https://raw.githubusercontent.com/PX4/Devguide/master/build_scripts/windows_bash_nuttx.sh")])]),s._v(" "),n("li",[s._v("使用如下命令运行安装脚本 (根据需要确认任何提示)： sh source windows_bash_nuttx.sh")])]),s._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v(" windows_bash_nuttx.sh\n")])])]),n("h3",{attrs:{id:"编译固件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#编译固件"}},[s._v("#")]),s._v(" 编译固件")]),s._v(" "),n("p",[s._v("JMAVSim 运行流程：")]),s._v(" "),n("ol",[n("li",[s._v("在 bash shell 命令行界面输入如下指令："),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("cd ~/src/Firmware\n")])])])])]),s._v(" "),n("p",[s._v("make px4_fmu-v4_default")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("成功完成编译后可以在 `Firmware/build/px4_fmu-v4_default/px4_fmu-v4_default.px4` 文件夹下找到编译好的固件。\n\n:::note\nThe `make` commands to build firmware for other boards can be found in [Building the Code](../dev_setup/building_px4.md#nuttx-pixhawk-based-boards).\n:::\n\n1. 在 Windows 平台上无法直接在 bash shell 中使用 `upload` 命令完成固件的烧写，你可以使用 *QGroundControl* 或者 *Mission Planner* 烧写自定义的固件。\n\n\n### 仿真模拟 （JMAVSim）\n\nBash on Windows does not include support for UI libraries. In order to display the jMAVSim UI you will first need to install an X-Window application like [XMing](https://sourceforge.net/projects/xming/) into Windows.\n\n此外， 由于 Bash on Windows 不支持运行32位 ELF 程序，该脚本弃用了来自 `https://launchpad.net/gcc-arm-embedded` 的默认32位编译器，改用 [64 bit arm-none-eabi compiler](https://github.com/SolinGuo/arm-none-eabi-bash-on-win10-.git) 。\n1. 在 Windows 平台安装并启动 [XMing](https://sourceforge.net/projects/xming/)。\n1. 在 bash shell 命令行界面输入如下指令： sh export DISPLAY=:0 >\n```sh\nsh\nexport DISPLAY=:0\nexport GAZEBO_IP=127.0.0.1\nmake px4_sitl gazebo\n")])])]),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),n("p",[s._v("Add this line to the Ubuntu "),n("strong",[s._v(".bashrc")]),s._v(" file if you don't want to enter it every session.")])]),s._v(" "),n("ol",[n("li",[n("p",[s._v("在 bash shell 界面中启动 px4 和 jmavsim：")]),s._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" px4_sitl jmavsim\n")])])]),n("p",[s._v("JMAVSim 的UI界面会显示在 XMing 程序中，如下所示：")]),s._v(" "),n("p",[n("img",{attrs:{src:a(685),alt:"jMAVSimOnWindows"}})])])]),s._v(" "),n("p",[s._v(":::caution\nGazebo can similarly be run within Ubuntu Bash for Windows, but too slow to be useful. To try this, follow the "),n("a",{attrs:{href:"http://wiki.ros.org/kinetic/Installation/Ubuntu",target:"_blank",rel:"noopener noreferrer"}},[s._v("ROS kinetic install guide"),n("OutboundLink")],1),s._v(" and run Gazebo in the Bash shell as shown:")]),s._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("DISPLAY")])]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(":0\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GAZEBO_IP")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" px4_sitl gazebo\n")])])]),n("p",[s._v(":::")]),s._v(" "),n("p",[n("a",{attrs:{id:"build_script_details"}})]),s._v(" "),n("h3",{attrs:{id:"开发环境安装脚本详情"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#开发环境安装脚本详情"}},[s._v("#")]),s._v(" 开发环境安装脚本详情")]),s._v(" "),n("p",[s._v("The "),n("a",{attrs:{href:"https://raw.githubusercontent.com/PX4/Devguide/master/build_scripts/windows_bash_nuttx.sh"}},[s._v("windows_bash_nuttx.sh")]),s._v(" "),s._v(" build script modifies the Ubuntu build instructions to remove Ubuntu-specific and UI-dependent components, including the "),n("em",[s._v("Qt Creator")]),s._v(" IDE and the simulators.")]),s._v(" "),n("p",[s._v("In addition, it uses a "),n("a",{attrs:{href:"https://github.com/SolinGuo/arm-none-eabi-bash-on-win10-.git",target:"_blank",rel:"noopener noreferrer"}},[s._v("64 bit arm-none-eabi compiler"),n("OutboundLink")],1),s._v(" since BashOnWindows doesn't run 32 bit ELF programs (and the default compiler from "),n("code",[s._v("https://launchpad.net/gcc-arm-embedded")]),s._v(" is 32 bit).")]),s._v(" "),n("p",[s._v("To add this compiler to your environment manually:")]),s._v(" "),n("ol",[n("li",[n("p",[s._v("下载编译器:")]),s._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("下载编译器: \n  "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://github.com/SolinGuo/arm-none-eabi-bash-on-win10-/raw/master/gcc-arm-none-eabi-5_4-2017q2-20170512-linux.tar.bz2\n")])])])]),s._v(" "),n("li",[n("p",[s._v("Bash On Windows 控制台中使用命令行进行解压：")]),s._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("Bash On Windows 控制台中使用命令行进行解压： \n  "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -xvf gcc-arm-none-eabi-5_4-2017q2-20170512-linux.tar.bz2 该命令会将 arm gcc cross-compiler 解压至： "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("code"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("gcc-arm-none-eabi-5_4-2017q2/bin"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/code"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),s._v("\n该命令会将 arm gcc cross-compiler 解压至：\n```\ngcc-arm-none-eabi-5_4-2017q2/bin\n```\n")]),s._v(" "),n("li",[n("p",[s._v("将下面这行命令添加到环境中（将该行添加到 bash 配置文件中完成永久性更改） "),n("code",[s._v("export PATH=$HOME/gcc-arm-none-eabi-5_4-2017q2/bin:\\$PATH")])]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("export PATH=$HOME/gcc-arm-none-eabi-5_4-2017q2/bin:$PATH\n")])])])])])])}),[],!1,null,null,null);t.default=e.exports},685:function(s,t,a){s.exports=a.p+"assets/img/jmavsim_on_windows.2d0339ad.png"}}]);