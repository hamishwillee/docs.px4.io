(window.webpackJsonp=window.webpackJsonp||[]).push([[1211],{2487:function(t,s,a){"use strict";a.r(s);var e=a(19),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"ubuntu-lts-debian-linux-的开发环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-lts-debian-linux-的开发环境"}},[t._v("#")]),t._v(" Ubuntu LTS/Debian Linux 的开发环境")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://wiki.ubuntu.com/LTS",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ubuntu linux lts"),a("OutboundLink")],1),t._v("（16.04）是标准的/首选的 Linux 开发操作系统。 Linux允许您构建"),a("RouterLink",{attrs:{to:"/zh/setup/dev_env.html#supported-targets"}},[t._v("所有PX4目标")]),t._v("（基于NuttX的硬件、高通骁龙飞控硬件、基于Linux的硬件、仿真、ROS）。")],1),t._v(" "),a("ul",[a("li",[t._v("Pixhawk and other NuttX-based hardware")]),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/simulation/jmavsim.html"}},[t._v("jMAVSim Simulation")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/simulation/gazebo.html"}},[t._v("Gazebo Simulation")])],1),t._v(" "),a("li",[a("a",{attrs:{href:"#raspberry-pi"}},[t._v("Raspberry Pi")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#ros-gazebo"}},[t._v("ROS (1)")]),t._v(" (Robotics Operating System)")]),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/dev_setup/fast-dds-installation.html"}},[t._v("Fast DDS")]),t._v(" - Required for ROS2")],1)]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("This setup is supported by the PX4 dev team.")])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("The supported OS versions for PX4 development are "),a("a",{attrs:{href:"https://wiki.ubuntu.com/LTS",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ubuntu Linux LTS"),a("OutboundLink")],1),t._v(" 18.04 (Bionic Beaver) and 20.04 (Focal Fossa). For ROS (1) Ubuntu LTS 18.04 (only) is supported.")]),t._v(" "),a("p",[t._v("The instructions should also work on other Debian Linux based systems, but this is not verified/officially supported.")])]),t._v(" "),a("h2",{attrs:{id:"一键安装脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一键安装脚本"}},[t._v("#")]),t._v(" 一键安装脚本")]),t._v(" "),a("p",[t._v("使用脚本：")]),t._v(" "),a("p",[t._v("@用户应先加入组 ”dialout“：")]),t._v(" "),a("h2",{attrs:{id:"权限设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#权限设置"}},[t._v("#")]),t._v(" 权限设置")]),t._v(" "),a("p",[t._v("Bash scripts are provided to help make it easy to install development environment for different target platforms. They are intended to be run on "),a("em",[t._v("clean")]),t._v(" Ubuntu LTS installations.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Script")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/Tools/setup/ubuntu.sh",target:"_blank",rel:"noopener noreferrer"}},[t._v("ubuntu.sh"),a("OutboundLink")],1)])]),t._v(" "),a("td",[t._v("Installs "),a("RouterLink",{attrs:{to:"/zh/simulation/gazebo.html"}},[t._v("Gazebo 9")]),t._v(" and "),a("RouterLink",{attrs:{to:"/zh/simulation/jmavsim.html"}},[t._v("jMAVSim")]),t._v(" simulators and/or "),a("RouterLink",{attrs:{to:"/zh/dev_setup/building_px4.html#nuttx-pixhawk-based-boards"}},[t._v("NuttX/Pixhawk")]),t._v(" tools."),a("br"),t._v("Does not include dependencies for "),a("a",{attrs:{href:"#fast-dds-installation"}},[t._v("Fast DDS")]),t._v(". ")],1)]),t._v(" "),a("tr",[a("td"),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[a("strong",[a("a",{attrs:{href:"https://raw.githubusercontent.com/PX4/Devguide/master/build_scripts/ubuntu_sim_ros_melodic.sh",target:"_blank",rel:"noopener noreferrer"}},[t._v("ubuntu_sim_ros_melodic.sh"),a("OutboundLink")],1)])]),t._v(" "),a("td",[t._v("Installs "),a("a",{attrs:{href:"#rosgazebo"}},[t._v('ROS "Melodic"')]),t._v(" and PX4 on Ubuntu 18.04 LTS "),a("strong",[t._v("only")]),t._v("."),a("br"),t._v("Do not use on Ubuntu 20.04 or later!")])])])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("The scripts "),a("em",[t._v("may")]),t._v(' not work if installed "on top" of an existing system, or on a different Ubuntu release.')])]),t._v(" "),a("h2",{attrs:{id:"ros-gazebo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ros-gazebo"}},[t._v("#")]),t._v(" ROS/Gazebo")]),t._v(" "),a("p",[t._v("Use the "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/Tools/setup/ubuntu.sh",target:"_blank",rel:"noopener noreferrer"}},[t._v("ubuntu.sh"),a("OutboundLink")],1),t._v(" "),t._v(" script to set up a development environment that includes "),a("RouterLink",{attrs:{to:"/zh/simulation/gazebo.html"}},[t._v("Gazebo 9")]),t._v(" and "),a("RouterLink",{attrs:{to:"/zh/simulation/jmavsim.html"}},[t._v("jMAVSim")]),t._v(" simulators, and/or the "),a("RouterLink",{attrs:{to:"/zh/dev_setup/building_px4.html#nuttx-pixhawk-based-boards"}},[t._v("NuttX/Pixhawk")]),t._v(" toolchain.")],1),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("ROS")]),t._v(" "),a("p",[t._v("users must follow the instructions for: "),a("a",{attrs:{href:"#rosgazebo"}},[t._v("ROS/Gazebo")]),t._v(". ")])]),t._v(" "),a("p",[t._v("To install the toolchain:")]),t._v(" "),a("ol",[a("li",[a("strong",[a("a",{attrs:{href:"https://raw.githubusercontent.com/PX4/Devguide/master/build_scripts/ubuntu_sim_common_deps.sh",target:"_blank",download:""}},[t._v("ubuntu_sim_common_deps.sh")])]),t._v("："),a("a",{attrs:{href:"#common-dependencies"}},[t._v("通用依赖")]),t._v("，"),a("a",{attrs:{href:"#jmavsim"}},[t._v("jMAVSim")]),t._v(" 模拟器"),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/PX4/PX4-Autopilot.git --recursive\n")])])])]),t._v(" "),a("li",[t._v("运行 bash 脚本（比如运行 "),a("strong",[t._v("ubuntu_sim.sh")]),t._v(" ）： bash source ubuntu_sim.sh 所有弹出的提示均确认通过。"),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" ./PX4-Autopilot/Tools/setup/ubuntu.sh\n")])])]),a("ul",[a("li",[t._v("在安装过程中确认并通过所有的提示。")]),t._v(" "),a("li",[t._v("你可以通过传输参数"),a("code",[t._v("--no-nuttx")]),t._v(" 和 "),a("code",[t._v("--no-sim-tools")]),t._v(" 来跳过 nuttx 和/或 仿真器工具的安装。")])])]),t._v(" "),a("li",[t._v("完成后重新启动计算机。")])]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("DETAILS")]),t._v(" "),a("p",[t._v("Information-only notes")]),t._v(" "),a("ul",[a("li",[t._v("** Note** PX4兼容Gazebo7、8和9。 上面的 "),a("a",{attrs:{href:"http://gazebosim.org/tutorials?tut=install_ubuntu&cat=install",target:"_blank",rel:"noopener noreferrer"}},[t._v("安装说明"),a("OutboundLink")],1),t._v(" 是关于安装 Gazebo 9 的。")]),t._v(" "),a("li",[t._v("You can verify the NuttX installation by confirming the gcc version as shown:"),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$arm")]),t._v("-none-eabi-gcc --version\n\n arm-none-eabi-gcc "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("GNU Tools "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" Arm Embedded Processors "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v("-2017-q4-major"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7.2")]),t._v(".1 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20170904")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("release"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ARM/embedded-7-branch revision "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("255204")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n Copyright "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("C"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2017")]),t._v(" Free Software Foundation, Inc.\n This is "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("free")]),t._v(" software"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" see the "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" copying conditions.  There is NO\n warranty"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" not even "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n")])])])]),t._v(" "),a("li",[t._v("You're going to need the PX4 source code anyway. But if you just wanted to set up the development environment without getting all the source code you could instead just download "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/Tools/setup/ubuntu.sh",target:"_blank",rel:"noopener noreferrer"}},[t._v("ubuntu.sh"),a("OutboundLink")],1),t._v(" and "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/Tools/setup/requirements.txt",target:"_blank",rel:"noopener noreferrer"}},[t._v("requirements.txt"),a("OutboundLink")],1),t._v(" and then run "),a("strong",[t._v("ubuntu.sh")]),t._v(": "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://raw.githubusercontent.com/PX4/PX4-Autopilot/master/Tools/setup/ubuntu.sh\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://raw.githubusercontent.com/PX4/PX4-Autopilot/master/Tools/setup/requirements.txt\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" ubuntu.sh\n")])])])])]),t._v(" "),a("p",[t._v(":::\x3c!-- Do we need to add to our scripts or can we assume correct version installs over?\nRemove any old versions of the arm-none-eabi toolchain.")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" remove gcc-arm-none-eabi gdb-arm-none-eabi binutils-arm-none-eabi gcc-arm-embedded\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" add-apt-repository --remove ppa:team-gcc-arm-embedded/ppa\n")])])]),a("p",[t._v("--\x3e"),a("a",{attrs:{id:"raspberry-pi-hardware"}})]),t._v(" "),a("h2",{attrs:{id:"通用依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通用依赖"}},[t._v("#")]),t._v(" 通用依赖")]),t._v(" "),a("p",[t._v("为 "),a("RouterLink",{attrs:{to:"/zh/simulation/jmavsim.html"}},[t._v("jMAVSim Simulation")]),t._v(" 安装依赖。")],1),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("To build for Ubuntu 20.04 (focal) you must use docker (the GCC toolchain on Ubuntu 20.04 can build PX4, but the generated binary files are too new to run on actual Pi). For more information see "),a("RouterLink",{attrs:{to:"/zh/flight_controller/raspberry_pi_pilotpi_rpios.html#alternative-build-method-using-docker"}},[t._v("PilotPi with Raspberry Pi OS Developer Quick Start > Alternative build method using docker")]),t._v(".")],1)])]),t._v(" "),a("p",[t._v("本节解释如何安装 "),a("RouterLink",{attrs:{to:"/zh/ros/"}},[t._v("ROS/Gazebo")]),t._v(' ("Melodic") 以便与PX4一起使用。')],1),t._v(" "),a("ol",[a("li",[t._v("Download "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/Tools/setup/ubuntu.sh",target:"_blank",rel:"noopener noreferrer"}},[t._v("ubuntu.sh"),a("OutboundLink")],1),t._v(" "),t._v(" and "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/Tools/setup/requirements.txt",target:"_blank",rel:"noopener noreferrer"}},[t._v("requirements.txt"),a("OutboundLink")],1),t._v(" from the PX4 source repository ("),a("strong",[t._v("/Tools/setup/")]),t._v("):  "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("wget https://raw.githubusercontent.com/PX4/PX4-Autopilot/master/Tools/setup/ubuntu.sh\nwget https://raw.githubusercontent.com/PX4/PX4-Autopilot/master/Tools/setup/requirements.txt\n")])])])]),t._v(" "),a("li",[a("strong",[a("a",{attrs:{href:"https://raw.githubusercontent.com/PX4/Devguide/master/build_scripts/ubuntu_sim_nuttx.sh",target:"_blank",download:""}},[t._v("ubuntu_sim_nuttx.sh")])]),t._v("："),a("strong",[t._v("ubuntu_sim.sh")]),t._v(" + NuttX 工具。"),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" ubuntu.sh --no-nuttx --no-sim-tools\n")])])])]),t._v(" "),a("li",[t._v("Then setup an cross-compiler (either GCC or clang) as described in the following sections.")])]),t._v(" "),a("h3",{attrs:{id:"如何使用脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何使用脚本"}},[t._v("#")]),t._v(" 如何使用脚本")]),t._v(" "),a("p",[t._v("Ubuntu software repository provides a set of pre-compiled toolchains. Note that Ubuntu Focal comes up with "),a("code",[t._v("gcc-9-arm-linux-gnueabihf")]),t._v(" as its default installation which is not fully supported, so we must manually install "),a("code",[t._v("gcc-8-arm-linux-gnueabihf")]),t._v(" and set it as the default toolchain. This guide also applies to earlier Ubuntu releases (Bionic). The following instruction assumes you haven't installed any version of arm-linux-gnueabihf, and will set up the default executable with "),a("code",[t._v("update-alternatives")]),t._v(". Install them with the terminal command:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("usermod")]),t._v(" -a -G dialout "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$USER")]),t._v("\n")])])]),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("\n```sh\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" remove modemmanager\n")])])]),a("h3",{attrs:{id:"jmavsim"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jmavsim"}},[t._v("#")]),t._v(" jMAVSim")]),t._v(" "),a("p",[t._v("sudo apt-get install protobuf-compiler libeigen3-dev libopencv-dev -y")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" update -y\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("zip")]),t._v(" qtcreator cmake "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    build-essential genromfs ninja-build exiftool vim-common -y\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Required python packages")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" python-argparse "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    python-empy python-toml python-numpy python-yaml "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    python-dev python-pip -y\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" -H pip "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --upgrade pip \n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" -H pip "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" pandas jinja2 pyserial cerberus\n")])])]),a("h3",{attrs:{id:"gazebo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gazebo"}},[t._v("#")]),t._v(" Gazebo")]),t._v(" "),a("p",[t._v("First install GCC (needed to use clang).")]),t._v(" "),a("p",[t._v("sudo apt-get update")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# optional python tools\nsudo -H pip install pyulog\n")])])]),a("p",[t._v("sudo apt-get install ros-kinetic-desktop-full -y")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/raspberrypi/tools.git "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("HOME")]),t._v("}")]),t._v("/rpi-tools\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# test compiler")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$HOME")]),t._v("/rpi-tools/arm-bcm2708/gcc-linaro-arm-linux-gnueabihf-raspbian-x64/bin/arm-linux-gnueabihf-gcc -v\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# permanently update PATH variable by modifying ~/.profile")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'export PATH=$PATH:$HOME/rpi-tools/arm-bcm2708/gcc-linaro-arm-linux-gnueabihf-raspbian-x64/bin'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" ~/.profile\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# update PATH variable only for this session")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("PATH")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$PATH")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$HOME")]),t._v("/rpi-tools/arm-bcm2708/gcc-linaro-arm-linux-gnueabihf-raspbian-x64/bin\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v("\n")])])]),a("h3",{attrs:{id:"detailed-information"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#detailed-information"}},[t._v("#")]),t._v(" Detailed Information")]),t._v(" "),a("p",[t._v("Additional developer information for using PX4 on Raspberry Pi (including building PX4 natively) can be found here:")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/zh/flight_controller/raspberry_pi_navio2.html"}},[t._v("Raspberry Pi 2/3 Navio2 Autopilot")]),t._v(".")],1),t._v(" "),a("li",[t._v("在安装"),a("a",{attrs:{href:"#snapdragon-flight"}},[t._v("高通骁龙飞控")]),t._v(" 或 "),a("a",{attrs:{href:"#raspberry-pi-hardware"}},[t._v("树莓派/Parrot Bebop")]),t._v(" 之前， 你可以先运行它。")])]),t._v(" "),a("p",[a("a",{attrs:{id:"rosgazebo"}})]),t._v(" "),a("h2",{attrs:{id:"fastrtps-安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fastrtps-安装"}},[t._v("#")]),t._v(" FastRTPS 安装")]),t._v(" "),a("p",[t._v("This section explains how to install "),a("RouterLink",{attrs:{to:"/zh/ros/"}},[t._v("ROS")]),t._v(' "Melodic" and PX4 on Ubuntu 18.04.')],1),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("ROS")]),t._v(" "),a("p",[t._v("builds are tied to specific Ubuntu versions! ROS Melodic can "),a("em",[t._v("only")]),t._v(" install on Ubuntu 18.04.")])]),t._v(" "),a("p",[t._v("To install the development toolchain:")]),t._v(" "),a("ol",[a("li",[t._v("Download the script in a bash shell: "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://raw.githubusercontent.com/PX4/Devguide/master/build_scripts/ubuntu_sim_ros_melodic.sh\n")])])])]),t._v(" "),a("li",[t._v("下载脚本"),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("ROS Gazebo: http://wiki.ros.org/kinetic/Installation/Ubuntu\n")])])]),t._v("随着脚本的运行，可能需要确认一些提示。")])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("ul",[a("li",[t._v("ROS Kinetic 默认与 Gazebo 7 一起安装（为了简化 ROS 的开发，我们使用的默认而不是 Gazebo 8）。")]),t._v(" "),a("li",[t._v("你的 catkin （ROS 构建系统）工作目录生成在**~/catkin_ws/**。")]),t._v(" "),a("li",[t._v('The script uses instructions from the ROS Wiki "Melodic" '),a("a",{attrs:{href:"http://wiki.ros.org/melodic/Installation/Ubuntu",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ubuntu page"),a("OutboundLink")],1),t._v(".")])])]),t._v(" "),a("p",[a("a",{attrs:{id:"fast_dds"}}),t._v(" "),a("a",{attrs:{id:"fast_rtps"}})]),t._v(" "),a("h2",{attrs:{id:"模拟器依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模拟器依赖"}},[t._v("#")]),t._v(" 模拟器依赖")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/eProsima/Fast-DDS",target:"_blank",rel:"noopener noreferrer"}},[t._v("eProsima Fast DDS"),a("OutboundLink")],1),t._v(" is required if you're using PX4 with ROS2 (or some other RTPS/DDS system).")]),t._v(" "),a("p",[t._v("Follow the instructions in "),a("RouterLink",{attrs:{to:"/zh/dev_setup/fast-dds-installation.html"}},[t._v("Fast DDS Installation")]),t._v(" to install it.")],1),t._v(" "),a("h2",{attrs:{id:"gazebo-dependencies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gazebo-dependencies"}},[t._v("#")]),t._v(" Gazebo dependencies")]),t._v(" "),a("p",[t._v("Once you have finished setting up the command-line toolchain:")]),t._v(" "),a("ul",[a("li",[t._v("Install "),a("RouterLink",{attrs:{to:"/zh/dev_setup/vscode.html"}},[t._v("VSCode")]),t._v(" (if you prefer using an IDE to the command line).")],1),t._v(" "),a("li",[t._v("Install the "),a("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/releases/daily_builds.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGroundControl Daily Build"),a("OutboundLink")],1),t._v(" :::tip The "),a("em",[t._v("daily build")]),t._v(" includes development tools that hidden in release builds. It may also provide access to new PX4 features that are not yet supported in release builds.\n:::")]),t._v(" "),a("li",[t._v("Continue to the "),a("RouterLink",{attrs:{to:"/zh/dev_setup/building_px4.html"}},[t._v("build instructions")]),t._v(".")],1)])])}),[],!1,null,null,null);s.default=n.exports}}]);