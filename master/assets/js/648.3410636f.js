(window.webpackJsonp=window.webpackJsonp||[]).push([[648],{2368:function(s,t,n){"use strict";n.r(t);var a=n(18),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"bash-on-windows-工具链"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bash-on-windows-工具链"}},[s._v("#")]),s._v(" Bash on Windows 工具链")]),s._v(" "),a("blockquote",[a("p",[a("strong",[s._v("注意：")]),s._v(" "),a("RouterLink",{attrs:{to:"/zh/setup/dev_env_windows_cygwin.html"}},[s._v("Windows Cygwin 工具链")]),s._v(" 是Windows平台唯一获得官方支持的开发环境。")],1)]),s._v(" "),a("p",[s._v("Windows 用户还可以选择在 "),a("a",{attrs:{href:"https://github.com/Microsoft/BashOnWindows",target:"_blank",rel:"noopener noreferrer"}},[s._v("Bash on Windows"),a("OutboundLink")],1),s._v(" 中安装经过 "),a("em",[s._v("少许修改")]),s._v(" 的基于Ubuntu Linux的PX4 开发环境 ，该开发环境可用于：")]),s._v(" "),a("ul",[a("li",[s._v("编译针对 NuttX/Pixhawk 平台的固件。")]),s._v(" "),a("li",[s._v("使用 JMAVSim 进行PX4仿真 (需要搭配一个基于Windows的 X-Windows 应用来显示仿真UI界面)。")])]),s._v(" "),a("blockquote",[a("p",[a("strong",[s._v("注意：")]),s._v(" 本特性仅可在Windows 10上实现， 它本质上仍是在虚拟机中运行工具链, 与其他解决方案相比运行相对缓慢。 It essentially runs the toolchain in a virtual machine, and is relatively slow compared to other solutions.")])]),s._v(" "),a("h3",{attrs:{id:"设置开发环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置开发环境"}},[s._v("#")]),s._v(" 设置开发环境")]),s._v(" "),a("p",[s._v("设置开发环境的最简单的方法是使用 "),a("strong",[a("a",{attrs:{href:"https://raw.githubusercontent.com/PX4/Devguide/master/build_scripts/windows_bash_nuttx.sh",target:"_blank",download:""}},[s._v("windows_bash_nuttx.sh")])]),s._v(" 安装脚本 （脚本文件的详细说明见 "),a("a",{attrs:{href:"#build_script_details"}},[s._v("下文")]),s._v("）。 ")]),s._v(" "),a("p",[s._v("要设置开发环境, 请执行以下操作:")]),s._v(" "),a("ol",[a("li",[s._v("在Windows 10上启用、安装 "),a("a",{attrs:{href:"https://github.com/Microsoft/BashOnWindows",target:"_blank",rel:"noopener noreferrer"}},[s._v("Bash on Windows"),a("OutboundLink")],1),s._v("。")]),s._v(" "),a("li",[s._v("打开 bash shell 命令行界面。")]),s._v(" "),a("li",[s._v("下载 "),a("strong",[s._v("windows_bash_nuttx.sh")]),s._v(" 脚本文件: "),a("code",[s._v("wget https://raw.githubusercontent.com/PX4/Devguide/master/build_scripts/windows_bash_nuttx.sh")])]),s._v(" "),a("li",[s._v("使用如下命令运行安装脚本 (根据需要确认任何提示)： sh source windows_bash_nuttx.sh")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v(" windows_bash_nuttx.sh\n")])])]),a("h3",{attrs:{id:"编译固件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译固件"}},[s._v("#")]),s._v(" 编译固件")]),s._v(" "),a("p",[s._v("固件编译流程（以编译 px4_fmu-v4 的固件为例）：")]),s._v(" "),a("ol",[a("li",[s._v("在 bash shell 命令行界面输入如下指令："),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("cd ~/src/Firmware\n")])])])])]),s._v(" "),a("p",[s._v("make px4_fmu-v4_default")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("成功完成编译后可以在 `Firmware/build/px4_fmu-v4_default/px4_fmu-v4_default.px4` 文件夹下找到编译好的固件。\n\n> **注意：** 为其它飞控板编译固件的 `make` 指令参见 [编译代码](../setup/building_px4.md#nuttx--pixhawk-based-boards)\n\n1. 在 Windows 平台上无法直接在 bash shell 中使用 `upload` 命令完成固件的烧写，你可以使用 *QGroundControl* 或者 *Mission Planner* 烧写自定义的固件。\n\n\n### 仿真模拟 （JMAVSim）\n\nBash on Windows 并不包括任何UI库的支持。 为了显示 jMAVSim 的UI界面，在进行仿真之前你需要在 Windows 平台上安装 X-Window 图形用户接口应用，比如： [XMing](https://sourceforge.net/projects/xming/)。\n\nJMAVSim 运行流程：\n1. 在 Windows 平台安装并启动 [XMing](https://sourceforge.net/projects/xming/)。\n1. 在 bash shell 命令行界面输入如下指令： sh export DISPLAY=:0 >\n```sh\nsh\nexport DISPLAY=:0\nexport GAZEBO_IP=127.0.0.1\nmake px4_sitl gazebo\n")])])]),a("blockquote",[a("p",[a("strong",[s._v("提示：")]),s._v(" 将上一行命令加入 Ubuntu 的 "),a("strong",[s._v(".bashrc")]),s._v(" 文件末尾可避免在新的 bash 会话中重复输入该命令。")])]),s._v(" "),a("ol",[a("li",[a("p",[s._v("在 bash shell 界面中启动 px4 和 jmavsim：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" px4_sitl jmavsim\n")])])]),a("p",[s._v("JMAVSim 的UI界面会显示在 XMing 程序中，如下所示：")]),s._v(" "),a("p",[a("img",{attrs:{src:n(683),alt:"jMAVSimOnWindows"}})])])]),s._v(" "),a("blockquote",[a("p",[s._v("**注意！ ** Gazebo 也可以以类似方式在 Ubuntu Bash for Windows 中运行，但运行速度太慢以至于没有实用价值。 如要尝试运行，请遵循 "),a("a",{attrs:{href:"http://wiki.ros.org/kinetic/Installation/Ubuntu",target:"_blank",rel:"noopener noreferrer"}},[s._v("ROS kinetic install guide"),a("OutboundLink")],1),s._v(" 的指示然后在 Bash shell 界面中使用如下命令运行Gazebo：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code")])])]),s._v(" "),a("p",[s._v("export DISPLAY=:0\nexport GAZEBO_IP=127.0.0.1\nmake px4_sitl gazebo")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('\n<a id="build_script_details" mark="crwd-mark"></a>\n\n### 开发环境安装脚本详情\n\nBash on Windows开发环境的 [windows_bash_nuttx.sh](https://raw.githubusercontent.com/PX4/Devguide/master/build_scripts/windows_bash_nuttx.sh) 安装脚本在 Ubuntu 开发环境搭建脚本的基础上进行了修改，移除了包括包括 *Qt Creator* IDE 和模拟器仿真程序在内的所有 Ubuntu 独有的以及与UI界面相关的程序组件。\n\n此外， 由于 Bash on Windows 不支持运行32位 ELF 程序，该脚本弃用了来自 `https://launchpad.net/gcc-arm-embedded` 的默认32位编译器，改用 [64 bit arm-none-eabi compiler](https://github.com/SolinGuo/arm-none-eabi-bash-on-win10-.git) 。\n\n手动将此编译器添加到您的环境中请执行以下操作:\n\n1. Download the compiler:\n   ```sh\n   下载编译器: \n     sh\n     wget https://github.com/SolinGuo/arm-none-eabi-bash-on-win10-/raw/master/gcc-arm-none-eabi-5_4-2017q2-20170512-linux.tar.bz2\n')])])]),a("ol",[a("li",[a("p",[s._v("Unpack it using this command line in the Bash On Windows console:")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("Bash On Windows 控制台中使用命令行进行解压： \n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -xvf gcc-arm-none-eabi-5_4-2017q2-20170512-linux.tar.bz2 该命令会将 arm gcc cross-compiler 解压至： "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("code"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("gcc-arm-none-eabi-5_4-2017q2/bin"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/code"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),s._v("\nThis will unpack the arm gcc cross-compiler to:\n```\ngcc-arm-none-eabi-5_4-2017q2/bin\n```\n")]),s._v(" "),a("li",[a("p",[s._v("将下面这行命令添加到环境中（将该行添加到 bash 配置文件中完成永久性更改） "),a("code",[s._v("export PATH=$HOME/gcc-arm-none-eabi-5_4-2017q2/bin:\\$PATH")])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("export PATH=$HOME/gcc-arm-none-eabi-5_4-2017q2/bin:$PATH\n")])])])])])])}),[],!1,null,null,null);t.default=e.exports},683:function(s,t,n){s.exports=n.p+"assets/img/jmavsim_on_windows.2d0339ad.png"}}]);