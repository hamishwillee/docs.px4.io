(window.webpackJsonp=window.webpackJsonp||[]).push([[1133],{2357:function(t,s,a){"use strict";a.r(s);var e=a(18),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"ubuntu-lts-debian-linux-的开发环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-lts-debian-linux-的开发环境"}},[t._v("#")]),t._v(" Ubuntu LTS/Debian Linux 的开发环境")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://wiki.ubuntu.com/LTS",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ubuntu linux lts"),a("OutboundLink")],1),t._v("（16.04）是标准的/首选的 Linux 开发操作系统。 Linux允许您构建"),a("RouterLink",{attrs:{to:"/zh/setup/dev_env.html#supported-targets"}},[t._v("所有PX4目标")]),t._v("（基于NuttX的硬件、高通骁龙飞控硬件、基于Linux的硬件、仿真、ROS）。")],1),t._v(" "),a("p",[t._v("以下说明说明了如何 "),a("em",[t._v("手动")]),t._v(" 设置每个受支持的目标的开发环境。")]),t._v(" "),a("ul",[a("li",[a("strong",[a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/Tools/setup/ubuntu.sh",target:"_blank",rel:"noopener noreferrer"}},[t._v("ubuntu.sh"),a("OutboundLink")],1)]),t._v(": Installs "),a("RouterLink",{attrs:{to:"/zh/simulation/gazebo.html"}},[t._v("Gazebo 9")]),t._v(" and "),a("RouterLink",{attrs:{to:"/zh/simulation/jmavsim.html"}},[t._v("jMAVSim")]),t._v(" simulators and/or "),a("RouterLink",{attrs:{to:"/zh/dev_setup/building_px4.html#nuttx-pixhawk-based-boards"}},[t._v("NuttX/Pixhawk")]),t._v(" tools. 不包含"),a("a",{attrs:{href:"#fast_rtps"}},[t._v("FastRTPS")]),t._v("所依赖的工具。 ")],1),t._v(" "),a("li",[a("strong",[a("a",{attrs:{href:"https://raw.githubusercontent.com/PX4/Devguide/master/build_scripts/ubuntu_sim.sh",target:"_blank",download:""}},[t._v("ubuntu_sim.sh")])]),t._v(": "),a("strong",[t._v("ubuntu_sim_common_deps.sh")]),t._v(" + "),a("a",{attrs:{href:"#gazebo"}},[t._v("Gazebo8")]),t._v(" 模拟器。 ")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("The scripts have been tested on "),a("em",[t._v("clean")]),t._v(" Ubuntu 18.04 LTS and Ubuntu 20.04 LTS installations. They "),a("em",[t._v("may")]),t._v(' not work as expected if installed "on top" of an existing system, or on a different Ubuntu release.')])]),t._v(" "),a("p",[t._v("这些脚本是:")]),t._v(" "),a("h2",{attrs:{id:"一键安装脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一键安装脚本"}},[t._v("#")]),t._v(" 一键安装脚本")]),t._v(" "),a("p",[t._v("使用脚本：")]),t._v(" "),a("p",[t._v("用户应先加入组 ”dialout“：")]),t._v(" "),a("ol",[a("li",[a("strong",[a("a",{attrs:{href:"https://raw.githubusercontent.com/PX4/Devguide/master/build_scripts/ubuntu_sim_common_deps.sh",target:"_blank",download:""}},[t._v("ubuntu_sim_common_deps.sh")])]),t._v("："),a("a",{attrs:{href:"#common-dependencies"}},[t._v("通用依赖")]),t._v("，"),a("a",{attrs:{href:"#jmavsim"}},[t._v("jMAVSim")]),t._v(" 模拟器"),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/PX4/PX4-Autopilot.git --recursive\n")])])])]),t._v(" "),a("li",[t._v("运行 bash 脚本（比如运行 "),a("strong",[t._v("ubuntu_sim.sh")]),t._v(" ）： bash source ubuntu_sim.sh 所有弹出的提示均确认通过。"),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" ./Tools/setup/ubuntu.sh\n")])])]),a("ul",[a("li",[t._v("在安装过程中确认并通过所有的提示。")]),t._v(" "),a("li",[t._v("你可以通过传输参数"),a("code",[t._v("--no-nuttx")]),t._v(" 和 "),a("code",[t._v("--no-sim-tools")]),t._v(" 来跳过 nuttx 和/或 仿真器工具的安装。")])])]),t._v(" "),a("li",[t._v("完成后重新启动计算机。")])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("You can alternatively download "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/Tools/setup/ubuntu.sh",target:"_blank",rel:"noopener noreferrer"}},[t._v("ubuntu.sh"),a("OutboundLink")],1),t._v(" and "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/Tools/setup/requirements.txt",target:"_blank",rel:"noopener noreferrer"}},[t._v("requirements.txt"),a("OutboundLink")],1),t._v(" from the PX4 source repository ("),a("strong",[t._v("/Tools/setup/")]),t._v(") and run ubuntu.sh in place: "),t._v(" "),a("br"),a("code",[t._v("wget https://raw.githubusercontent.com/PX4/PX4-Autopilot/master/Tools/setup/ubuntu.sh")]),t._v(" "),a("br"),a("code",[t._v("wget https://raw.githubusercontent.com/PX4/PX4-Autopilot/master/Tools/setup/requirements.txt")]),t._v(" "),a("br"),a("code",[t._v("bash ubuntu.sh")])])]),t._v(" "),a("p",[t._v("Notes:")]),t._v(" "),a("ul",[a("li",[t._v("** Note** PX4兼容Gazebo7、8和9。 上面的 "),a("a",{attrs:{href:"http://gazebosim.org/tutorials?tut=install_ubuntu&cat=install",target:"_blank",rel:"noopener noreferrer"}},[t._v("安装说明"),a("OutboundLink")],1),t._v(" 是关于安装 Gazebo 9 的。")]),t._v(" "),a("li",[a("strong",[t._v("Note")]),t._v(" 如果您要使用 ros，请按照以下部分中的 "),a("a",{attrs:{href:"#rosgazebo"}},[t._v("ROS/Gazebo")]),t._v(" 说明操作（这些操作将自动安装 gazebo，作为 ros 安装的一部分）。")]),t._v(" "),a("li",[t._v("你可以通过确认gcc的版本来验证Nuttx的安装："),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$arm")]),t._v("-none-eabi-gcc --version\n\n arm-none-eabi-gcc "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("GNU Tools "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" Arm Embedded Processors "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v("-2017-q4-major"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7.2")]),t._v(".1 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20170904")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("release"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ARM/embedded-7-branch revision "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("255204")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n Copyright "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("C"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2017")]),t._v(" Free Software Foundation, Inc.\n This is "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("free")]),t._v(" software"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" see the "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" copying conditions.  There is NO\n warranty"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" not even "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n```"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("-- Do we need to "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" to our scripts or can we assume correct version installs over?\n")])])])])]),t._v(" "),a("p",[t._v("Remove any old versions of the arm-none-eabi toolchain.")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" remove gcc-arm-none-eabi gdb-arm-none-eabi binutils-arm-none-eabi gcc-arm-embedded\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" add-apt-repository --remove ppa:team-gcc-arm-embedded/ppa\n")])])]),a("p",[t._v("--\x3e"),a("a",{attrs:{id:"raspberry-pi-hardware"}})]),t._v(" "),a("h2",{attrs:{id:"权限设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#权限设置"}},[t._v("#")]),t._v(" 权限设置")]),t._v(" "),a("p",[t._v("The following instructions explain how to set up a build toolchain for RasPi on "),a("em",[t._v("Ubuntu 18.04")]),t._v(".")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("To build for Ubuntu 20.04 (focal) you must use docker (the GCC toolchain on Ubuntu 20.04 can build PX4, but the generated binary files are too new to run on actual Pi). For more information see "),a("RouterLink",{attrs:{to:"/zh/flight_controller/raspberry_pi_pilotpi_rpios.html#alternative-build-method-using-docker"}},[t._v("PilotPi with Raspberry Pi OS Developer Quick Start > Alternative build method using docker")]),t._v(".")],1)]),t._v(" "),a("p",[t._v("To get the common dependencies for Raspberry Pi:")]),t._v(" "),a("ol",[a("li",[t._v("有关在树莓派上使用 PX4（包括本地构建 PX4）的其他开发人员信息，请参见此处："),a("a",{attrs:{href:"https://docs.px4.io/en/flight_controller/raspberry_pi_navio2.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Raspberry pi 2/navio2 autopilot"),a("OutboundLink")],1),t._v("。"),t._v("1. "),a("strong",[a("a",{attrs:{href:"https://raw.githubusercontent.com/PX4/Devguide/master/build_scripts/ubuntu_sim_nuttx.sh",target:"_blank",download:""}},[t._v("ubuntu_sim_nuttx.sh")])]),t._v("："),a("strong",[t._v("ubuntu_sim.sh")]),t._v(" + NuttX 工具。"),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" ubuntu.sh --no-nuttx --no-sim-tools\n")])])])]),t._v(" "),a("li",[t._v("Then setup an cross-compiler (either GCC or clang) as described in the following sections.")])]),t._v(" "),a("h3",{attrs:{id:"如何使用脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何使用脚本"}},[t._v("#")]),t._v(" 如何使用脚本")]),t._v(" "),a("p",[t._v("Ubuntu software repository provides a set of pre-compiled toolchains. Note that Ubuntu Focal comes up with "),a("code",[t._v("gcc-9-arm-linux-gnueabihf")]),t._v(" as its default installation which is not fully supported, so we must manually install "),a("code",[t._v("gcc-8-arm-linux-gnueabihf")]),t._v(" and set it as the default toolchain. This guide also applies to earlier Ubuntu releases (Bionic). The following instruction assumes you haven't installed any version of arm-linux-gnueabihf, and will set up the default executable with "),a("code",[t._v("update-alternatives")]),t._v(". Install them with the terminal command:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("usermod")]),t._v(" -a -G dialout "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$USER")]),t._v("\n")])])]),a("p",[t._v("Set them as default:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" remove modemmanager\n")])])]),a("h3",{attrs:{id:"jmavsim"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jmavsim"}},[t._v("#")]),t._v(" jMAVSim")]),t._v(" "),a("p",[t._v("为 "),a("RouterLink",{attrs:{to:"/zh/simulation/jmavsim.html"}},[t._v("jMAVSim Simulation")]),t._v(" 安装依赖。")],1),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" update -y\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("zip")]),t._v(" qtcreator cmake "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    build-essential genromfs ninja-build exiftool vim-common -y\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Required python packages")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" python-argparse "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    python-empy python-toml python-numpy python-yaml "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    python-dev python-pip -y\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" -H pip "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --upgrade pip \n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" -H pip "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" pandas jinja2 pyserial cerberus\n")])])]),a("h3",{attrs:{id:"gazebo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gazebo"}},[t._v("#")]),t._v(" Gazebo")]),t._v(" "),a("p",[t._v("为 "),a("RouterLink",{attrs:{to:"/zh/simulation/gazebo.html"}},[t._v("jMAVSim Simulation")]),t._v(" 安装依赖。")],1),t._v(" "),a("p",[t._v("本节解释如何安装 "),a("RouterLink",{attrs:{to:"/zh/ros/"}},[t._v("ROS/Gazebo")]),t._v(' ("Melodic") 以便与PX4一起使用。')],1),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# optional python tools\nsudo -H pip install pyulog\n")])])]),a("p",[t._v("安装开发工具链:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/raspberrypi/tools.git "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("HOME")]),t._v("}")]),t._v("/rpi-tools\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# test compiler")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$HOME")]),t._v("/rpi-tools/arm-bcm2708/gcc-linaro-arm-linux-gnueabihf-raspbian-x64/bin/arm-linux-gnueabihf-gcc -v\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# permanently update PATH variable by modifying ~/.profile")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'export PATH="),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$PATH")]),t._v(":"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$HOME")]),t._v("/rpi-tools/arm-bcm2708/gcc-linaro-arm-linux-gnueabihf-raspbian-x64/bin'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" ~/.profile\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# update PATH variable only for this session")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("PATH")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$PATH")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$HOME")]),t._v("/rpi-tools/arm-bcm2708/gcc-linaro-arm-linux-gnueabihf-raspbian-x64/bin\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v("\n")])])]),a("h3",{attrs:{id:"detailed-information"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#detailed-information"}},[t._v("#")]),t._v(" Detailed Information")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("\n- "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Raspberry Pi "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("/3 Navio2 Autopilot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/flight_controller/raspberry_pi_navio2.md"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".\n- 在安装"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("高通骁龙飞控"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#snapdragon-flight) 或 [树莓派/Parrot Bebop](#raspberry-pi-hardware) 之前， 你可以先运行它。")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("a "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rosgazebo"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("mark")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"crwd-mark"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("/a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## ROS/Gazebo")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" protobuf-compiler libeigen3-dev libopencv-dev -y\n\nTo "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" the development toolchain:\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(". **"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("a "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("href")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://raw.githubusercontent.com/PX4/Devguide/master/build_scripts/ubuntu_sim_ros_gazebo.sh"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("target")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"_blank"')]),t._v(" download "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("mark")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"crwd-mark"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("ubuntu_sim_ros_gazebo.sh"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("/a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("**: **ubuntu_sim_common_deps.sh** + "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ROS/Gazebo and MAVROS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#rosgazebo). \x3c!-- NEED px4_version --\x3e 1. 下载脚本")]),t._v("\n   ```bash\n   ROS Gazebo: http://wiki.ros.org/kinetic/Installation/Ubuntu\n")])])]),a("p",[t._v("随着脚本的运行，可能需要确认一些提示。")]),t._v(" "),a("p",[t._v("sudo apt-get update")]),t._v(" "),a("ul",[a("li",[t._v("ROS Kinetic 默认与 Gazebo 7 一起安装（为了简化 ROS 的开发，我们使用的默认而不是 Gazebo 8）。")]),t._v(" "),a("li",[t._v("你的 catkin （ROS 构建系统）工作目录生成在**~/catkin_ws/**。")]),t._v(" "),a("li",[t._v("这些说明来自 ROS Wiki "),a("a",{attrs:{href:"http://wiki.ros.org/kinetic/Installation/Ubuntu",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ubuntu 页 "),a("OutboundLink")],1),t._v("。")])]),t._v(" "),a("h2",{attrs:{id:"通用依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通用依赖"}},[t._v("#")]),t._v(" 通用依赖")]),t._v(" "),a("p",[t._v("sudo apt-get install ros-kinetic-desktop-full -y")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/zh/flight_controller/snapdragon_flight_dev_environment_installation.html"}},[t._v("开发环境")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/flight_controller/snapdragon_flight_software_installation.html"}},[t._v("软件安装")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/flight_controller/snapdragon_flight_configuration.html"}},[t._v("配置")])],1)]),t._v(" "),a("p",[a("a",{attrs:{id:"fast_rtps"}})]),t._v(" "),a("h2",{attrs:{id:"fastrtps-安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fastrtps-安装"}},[t._v("#")]),t._v(" FastRTPS 安装")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://eprosima-fast-rtps.readthedocs.io/en/latest/",target:"_blank",rel:"noopener noreferrer"}},[t._v("eProsima Fast RTPS"),a("OutboundLink")],1),t._v(" is a C++ implementation of the RTPS (Real Time Publish Subscribe) protocol. FastRTPS is used, via the "),a("RouterLink",{attrs:{to:"/zh/middleware/micrortps.html"}},[t._v("RTPS/ROS2 Interface: PX4-FastRTPS Bridge")]),t._v(", to allow PX4 uORB topics to be shared with offboard components.")],1),t._v(" "),a("p",[t._v("Follow the instructions in "),a("RouterLink",{attrs:{to:"/zh/dev_setup/fast-rtps-installation.html"}},[t._v("Fast RTPS Installation")]),t._v(" to install it.")],1),t._v(" "),a("h2",{attrs:{id:"模拟器依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模拟器依赖"}},[t._v("#")]),t._v(" 模拟器依赖")]),t._v(" "),a("p",[t._v("After setting up the build/simulation toolchain, see "),a("RouterLink",{attrs:{to:"/zh/dev_setup/generic_dev_tools.html"}},[t._v("Additional Tools")]),t._v(" for information about other useful tools.")],1),t._v(" "),a("h2",{attrs:{id:"gazebo-dependencies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gazebo-dependencies"}},[t._v("#")]),t._v(" Gazebo dependencies")]),t._v(" "),a("p",[t._v("Once you have finished setting up the environment, continue to the "),a("RouterLink",{attrs:{to:"/zh/dev_setup/building_px4.html"}},[t._v("build instructions")]),t._v(".")],1)])}),[],!1,null,null,null);s.default=n.exports}}]);