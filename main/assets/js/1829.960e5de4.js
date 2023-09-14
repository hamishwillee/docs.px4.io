(window.webpackJsonp=window.webpackJsonp||[]).push([[1829],{3339:function(t,s,e){"use strict";e.r(s);var a=e(19),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"ubuntu-lts-debian-linux-的开发环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-lts-debian-linux-的开发环境"}},[t._v("#")]),t._v(" Ubuntu LTS/Debian Linux 的开发环境")]),t._v(" "),e("p",[t._v("The following instructions set up a PX4 development environment on the "),e("a",{attrs:{href:"https://wiki.ubuntu.com/LTS",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ubuntu Linux LTS"),e("OutboundLink")],1),t._v(" versions supported by PX4. This includes: 18.04 (Bionic Beaver), 20.04 (Focal Fossa), and Ubuntu 22.04 (Jammy Jellyfish).")]),t._v(" "),e("p",[t._v("Bash scripts are provided to simplify the process. They are intended to be run on "),e("em",[t._v("clean")]),t._v(' Ubuntu LTS installations, and may not work if run "on top" of an existing system, or on a different Ubuntu release.')]),t._v(" "),e("p",[t._v("The "),e("RouterLink",{attrs:{to:"/zh/dev_setup/dev_env.html#supported-targets"}},[t._v("supported targets")]),t._v(" are:")],1),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#simulation-and-nuttx-pixhawk-targets"}},[t._v("Simulation and NuttX (Pixhawk) Targets")]),t._v(". This includes: "),e("RouterLink",{attrs:{to:"/zh/sim_gazebo_gz/"}},[t._v("Gazebo")]),t._v(", "),e("RouterLink",{attrs:{to:"/zh/sim_gazebo_classic/"}},[t._v("Gazebo Classic")]),t._v(", "),e("RouterLink",{attrs:{to:"/zh/simulation/jmavsim.html"}},[t._v("jMAVSim")]),t._v(", "),e("RouterLink",{attrs:{to:"/zh/dev_setup/building_px4.html#nuttx-pixhawk-based-boards"}},[t._v("Pixhawk and other NuttX-based hardware")]),t._v(").")],1),t._v(" "),e("li",[e("a",{attrs:{href:"#raspberry-pi"}},[t._v("通用依赖")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#ros-2"}},[t._v("ROS 2")]),t._v(" (Robotics Operating System)")]),t._v(" "),e("li",[e("a",{attrs:{href:"#ros-gazebo-classic"}},[t._v("ROS 1")]),t._v(" (Robotics Operating System)")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),e("p",[t._v("This setup is supported by the PX4 dev team.\nThe instructions may also work on other Debian Linux based systems.")])]),t._v(" "),e("h2",{attrs:{id:"一键安装脚本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一键安装脚本"}},[t._v("#")]),t._v(" 一键安装脚本")]),t._v(" "),e("p",[t._v("This video shows how to install the toolchain for NuttX and simulation targets ("),e("a",{attrs:{href:"#simulation-and-nuttx-pixhawk-targets"}},[t._v("as covered below")]),t._v(") along with the basic testing covered in "),e("RouterLink",{attrs:{to:"/zh/dev_setup/building_px4.html"}},[t._v("Building PX4 Software")]),t._v(".")],1),t._v(" "),e("p"),e("div",{staticClass:"embed-responsive embed-responsive-16by9"},[e("iframe",{staticClass:"embed-responsive-item youtube-player",attrs:{type:"text/html",width:"640",height:"390",src:"https://www.youtube.com/embed/OtValQdAdrU",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]),e("p"),t._v(" "),e("h2",{attrs:{id:"simulation-and-nuttx-pixhawk-targets"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#simulation-and-nuttx-pixhawk-targets"}},[t._v("#")]),t._v(" Simulation and NuttX (Pixhawk) Targets")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("ROS")]),t._v(" "),e("p",[t._v("users should first read/skip ahead to the "),e("a",{attrs:{href:"#rosgazebo"}},[t._v("ROS/Gazebo")]),t._v(" or "),e("a",{attrs:{href:"#ros-2"}},[t._v("ROS 2")]),t._v(" sections.")])]),t._v(" "),e("p",[t._v("Use the "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/Tools/setup/ubuntu.sh",target:"_blank",rel:"noopener noreferrer"}},[t._v("ubuntu.sh"),e("OutboundLink")],1),t._v(" script to set up a development environment that allows you to build for simulators and/or the "),e("RouterLink",{attrs:{to:"/zh/dev_setup/building_px4.html#nuttx-pixhawk-based-boards"}},[t._v("NuttX/Pixhawk")]),t._v(" toolchain. The script installs "),e("RouterLink",{attrs:{to:"/zh/simulation/jmavsim.html"}},[t._v("jMAVSim")]),t._v(" on all targets, "),e("RouterLink",{attrs:{to:"/zh/sim_gazebo_classic/"}},[t._v("Gazebo Classic")]),t._v(" 9 on Ubuntu 18.04, Gazebo Classic 11 on Ubuntu 20.04, and "),e("RouterLink",{attrs:{to:"/zh/sim_gazebo_gz/"}},[t._v("Gazebo")]),t._v(' "Garden" on Ubuntu 22.04.')],1),t._v(" "),e("p",[t._v("To install the toolchain:")]),t._v(" "),e("ol",[e("li",[e("p",[e("strong",[e("a",{attrs:{href:"https://raw.githubusercontent.com/PX4/Devguide/master/build_scripts/ubuntu_sim_common_deps.sh",target:"_blank",download:""}},[t._v("ubuntu_sim_common_deps.sh")])]),t._v("："),e("a",{attrs:{href:"#common-dependencies"}},[t._v("通用依赖")]),t._v("，"),e("a",{attrs:{href:"#jmavsim"}},[t._v("jMAVSim")]),t._v(" 模拟器")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/PX4/PX4-Autopilot.git --recursive\n")])])])])]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),e("p",[t._v("The environment setup scripts in the source usually work for recent PX4 releases. If working with an older version of PX4 you may need to "),e("RouterLink",{attrs:{to:"/zh/contribute/git_examples.html#get-a-specific-release"}},[t._v("get the source code specific to your release")]),t._v(".")],1)]),t._v(" "),e("ol",[e("li",[t._v("运行 bash 脚本（比如运行 "),e("strong",[t._v("ubuntu_sim.sh")]),t._v(" ）： bash source ubuntu_sim.sh 所有弹出的提示均确认通过。"),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" ./PX4-Autopilot/Tools/setup/ubuntu.sh\n")])])]),e("ul",[e("li",[t._v("在安装过程中确认并通过所有的提示。")]),t._v(" "),e("li",[t._v("你可以通过传输参数"),e("code",[t._v("--no-nuttx")]),t._v(" 和 "),e("code",[t._v("--no-sim-tools")]),t._v(" 来跳过 nuttx 和/或 仿真器工具的安装。")])])]),t._v(" "),e("li",[t._v("完成后重新启动计算机。")])]),t._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("DETAILS")]),t._v(" "),e("p",[t._v('Additional notes These notes are provided "for information only":')]),t._v(" "),e("ul",[e("li",[e("p",[t._v("If you want to use Gazebo on Ubuntu 20.04 you can add it manually. See "),e("RouterLink",{attrs:{to:"/zh/sim_gazebo_gz/#installation-ubuntu-linux"}},[t._v("Gazebo > Installation")]),t._v(".")],1)]),t._v(" "),e("li",[e("p",[t._v("You can verify the NuttX installation by confirming the gcc version as shown:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$arm")]),t._v("-none-eabi-gcc --version\n\narm-none-eabi-gcc "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("GNU Arm Embedded Toolchain "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v("-2020-q2-update"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("9.3")]),t._v(".1 "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("20200408")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("release"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nCopyright "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("C"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2019")]),t._v(" Free Software Foundation, Inc.\nThis is "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("free")]),t._v(" software"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" see the "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" copying conditions.  There is NO\nwarranty"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" not even "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n")])])])]),t._v(" "),e("li",[e("p",[t._v("You're going to need the PX4 source code anyway. But if you just wanted to set up the development environment without getting all the source code you could instead just download "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/Tools/setup/ubuntu.sh",target:"_blank",rel:"noopener noreferrer"}},[t._v("ubuntu.sh"),e("OutboundLink")],1),t._v(" and "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/Tools/setup/requirements.txt",target:"_blank",rel:"noopener noreferrer"}},[t._v("requirements.txt"),e("OutboundLink")],1),t._v(" and then run "),e("strong",[t._v("ubuntu.sh")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://raw.githubusercontent.com/PX4/PX4-Autopilot/main/Tools/setup/ubuntu.sh\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://raw.githubusercontent.com/PX4/PX4-Autopilot/main/Tools/setup/requirements.txt\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" ubuntu.sh\n")])])])])])]),t._v(" "),e("p",[e("a",{attrs:{id:"raspberry-pi-hardware"}})]),t._v(" "),e("h2",{attrs:{id:"通用依赖"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#通用依赖"}},[t._v("#")]),t._v(" 通用依赖")]),t._v(" "),e("p",[t._v("为 "),e("RouterLink",{attrs:{to:"/zh/simulation/jmavsim.html"}},[t._v("jMAVSim Simulation")]),t._v(" 安装依赖。")],1),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),e("p",[t._v("To build for Ubuntu 20.04 (focal) you must use docker (the GCC toolchain on Ubuntu 20.04 can build PX4, but the generated binary files are too new to run on actual Pi). For more information see "),e("RouterLink",{attrs:{to:"/zh/flight_controller/raspberry_pi_pilotpi_rpios.html#alternative-build-method-using-docker"}},[t._v("PilotPi with Raspberry Pi OS Developer Quick Start > Alternative build method using docker")]),t._v(".")],1)]),t._v(" "),e("p",[t._v("本节解释如何安装 "),e("RouterLink",{attrs:{to:"/zh/ros/"}},[t._v("ROS/Gazebo")]),t._v(' ("Melodic") 以便与PX4一起使用。')],1),t._v(" "),e("ol",[e("li",[t._v("Download "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/Tools/setup/ubuntu.sh",target:"_blank",rel:"noopener noreferrer"}},[t._v("ubuntu.sh"),e("OutboundLink")],1),t._v(" "),t._v(" and "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/Tools/setup/requirements.txt",target:"_blank",rel:"noopener noreferrer"}},[t._v("requirements.txt"),e("OutboundLink")],1),t._v(" from the PX4 source repository ("),e("strong",[t._v("/Tools/setup/")]),t._v("):  "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("wget https://raw.githubusercontent.com/PX4/PX4-Autopilot/main/Tools/setup/ubuntu.sh\nwget https://raw.githubusercontent.com/PX4/PX4-Autopilot/main/Tools/setup/requirements.txt\n")])])])]),t._v(" "),e("li",[e("strong",[e("a",{attrs:{href:"https://raw.githubusercontent.com/PX4/Devguide/master/build_scripts/ubuntu_sim_nuttx.sh",target:"_blank",download:""}},[t._v("ubuntu_sim_nuttx.sh")])]),t._v("："),e("strong",[t._v("ubuntu_sim.sh")]),t._v(" + NuttX 工具。"),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" ubuntu.sh --no-nuttx --no-sim-tools\n")])])])]),t._v(" "),e("li",[t._v("Then setup an cross-compiler (either GCC or clang) as described in the following sections.")])]),t._v(" "),e("h3",{attrs:{id:"如何使用脚本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何使用脚本"}},[t._v("#")]),t._v(" 如何使用脚本")]),t._v(" "),e("p",[t._v("Ubuntu software repository provides a set of pre-compiled toolchains. Note that Ubuntu Focal comes up with "),e("code",[t._v("gcc-9-arm-linux-gnueabihf")]),t._v(" as its default installation which is not fully supported, so we must manually install "),e("code",[t._v("gcc-8-arm-linux-gnueabihf")]),t._v(" and set it as the default toolchain. This guide also applies to earlier Ubuntu releases (Bionic). The following instruction assumes you haven't installed any version of arm-linux-gnueabihf, and will set up the default executable with "),e("code",[t._v("update-alternatives")]),t._v(". Install them with the terminal command:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("usermod")]),t._v(" -a -G dialout "),e("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$USER")]),t._v("\n")])])]),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("\n```sh\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" remove modemmanager\n")])])]),e("h3",{attrs:{id:"jmavsim"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jmavsim"}},[t._v("#")]),t._v(" jMAVSim")]),t._v(" "),e("p",[t._v("sudo apt-get install protobuf-compiler libeigen3-dev libopencv-dev -y")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" update -y\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("zip")]),t._v(" qtcreator cmake "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    build-essential genromfs ninja-build exiftool vim-common -y\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Required python packages")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" python-argparse "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    python-empy python-toml python-numpy python-yaml "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    python-dev python-pip -y\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" -H pip "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --upgrade pip \n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" -H pip "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" pandas jinja2 pyserial cerberus\n")])])]),e("h3",{attrs:{id:"gazebo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gazebo"}},[t._v("#")]),t._v(" Gazebo")]),t._v(" "),e("p",[t._v("First install GCC (needed to use clang).")]),t._v(" "),e("p",[t._v("sudo apt-get update")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# optional python tools\nsudo -H pip install pyulog\n")])])]),e("p",[t._v("sudo apt-get install ros-kinetic-desktop-full -y")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/raspberrypi/tools.git "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${"),e("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("HOME")]),t._v("}")]),t._v("/rpi-tools\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# test compiler")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$HOME")]),t._v("/rpi-tools/arm-bcm2708/gcc-linaro-arm-linux-gnueabihf-raspbian-x64/bin/arm-linux-gnueabihf-gcc -v\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# permanently update PATH variable by modifying ~/.profile")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'export PATH=$PATH:$HOME/rpi-tools/arm-bcm2708/gcc-linaro-arm-linux-gnueabihf-raspbian-x64/bin'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" ~/.profile\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# update PATH variable only for this session")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("PATH")])]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$PATH")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$HOME")]),t._v("/rpi-tools/arm-bcm2708/gcc-linaro-arm-linux-gnueabihf-raspbian-x64/bin\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v("\n")])])]),e("h3",{attrs:{id:"detailed-information"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#detailed-information"}},[t._v("#")]),t._v(" Detailed Information")]),t._v(" "),e("p",[t._v("Additional developer information for using PX4 on Raspberry Pi (including building PX4 natively) can be found here:")]),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/zh/flight_controller/raspberry_pi_navio2.html"}},[t._v("Raspberry Pi 2/3 Navio2 Autopilot")]),t._v(".")],1),t._v(" "),e("li",[t._v("在安装"),e("a",{attrs:{href:"#snapdragon-flight"}},[t._v("高通骁龙飞控")]),t._v(" 或 "),e("a",{attrs:{href:"#raspberry-pi-hardware"}},[t._v("树莓派/Parrot Bebop")]),t._v(" 之前， 你可以先运行它。")])]),t._v(" "),e("h2",{attrs:{id:"ros-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ros-2"}},[t._v("#")]),t._v(" ROS 2")]),t._v(" "),e("p",[t._v("Information about ROS 2 setup and development with PX4 can be found in the "),e("RouterLink",{attrs:{to:"/zh/ros/ros2_comm.html"}},[t._v("ROS 2 User Guide")]),t._v(".")],1),t._v(" "),e("p",[t._v("Generally speaking if you're working with hardware and don't need to modify PX4 itself, then you do not need a PX4 development environment (dependencies for working with ROS 2 are included and built into PX4 firmware by default).")]),t._v(" "),e("p",[t._v("You will need to install the normal development "),e("a",{attrs:{href:"#simulation-and-nuttx-pixhawk-targets"}},[t._v("simulator environment")]),t._v(" in order to work with the PX4 simulator.")]),t._v(" "),e("p",[e("a",{attrs:{id:"rosgazebo"}})]),t._v(" "),e("h2",{attrs:{id:"ros-gazebo-classic"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ros-gazebo-classic"}},[t._v("#")]),t._v(" ROS/Gazebo Classic")]),t._v(" "),e("p",[t._v("This section explains how to install "),e("RouterLink",{attrs:{to:"/zh/ros/"}},[t._v("ROS 1")]),t._v(" with PX4. ROS 1 full desktop builds come with Gazebo Classic, so normally you will not install PX4 simulator dependencies yourself!")],1),t._v(" "),e("h3",{attrs:{id:"ros-noetic-ubuntu-20-04"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ros-noetic-ubuntu-20-04"}},[t._v("#")]),t._v(" ROS Noetic/Ubuntu 20.04")]),t._v(" "),e("p",[t._v("If you're working with "),e("a",{attrs:{href:"http://wiki.ros.org/noetic",target:"_blank",rel:"noopener noreferrer"}},[t._v("ROS Noetic"),e("OutboundLink")],1),t._v(" on Ubuntu 20.04:")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("Install PX4 without the simulator toolchain:")]),t._v(" "),e("ol",[e("li",[e("p",[e("strong",[e("a",{attrs:{href:"https://raw.githubusercontent.com/PX4/Devguide/master/build_scripts/ubuntu_sim_common_deps.sh",target:"_blank",download:""}},[t._v("ubuntu_sim_common_deps.sh")])]),t._v("："),e("a",{attrs:{href:"#common-dependencies"}},[t._v("通用依赖")]),t._v("，"),e("a",{attrs:{href:"#jmavsim"}},[t._v("jMAVSim")]),t._v(" 模拟器")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/PX4/PX4-Autopilot.git --recursive\n")])])])]),t._v(" "),e("li",[e("p",[t._v("Run the "),e("strong",[t._v("ubuntu.sh")]),t._v(" the "),e("code",[t._v("--no-sim-tools")]),t._v(" (and optionally "),e("code",[t._v("--no-nuttx")]),t._v("):")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" ./PX4-Autopilot/Tools/setup/ubuntu.sh --no-sim-tools --no-nuttx\n")])])]),e("ul",[e("li",[t._v("在安装过程中确认并通过所有的提示。")])])]),t._v(" "),e("li",[e("p",[t._v("完成后重新启动计算机。")])])])]),t._v(" "),e("li",[e("p",[t._v("You "),e("em",[t._v("may")]),t._v(" need to install the following additional dependencies:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("sudo apt-get install protobuf-compiler libeigen3-dev libopencv-dev -y\n")])])])]),t._v(" "),e("li",[e("p",[t._v("Follow the "),e("a",{attrs:{href:"http://wiki.ros.org/noetic/Installation/Ubuntu#Installation",target:"_blank",rel:"noopener noreferrer"}},[t._v("Noetic Installation instructions"),e("OutboundLink")],1),t._v(" (ros-noetic-desktop-full is recommended).")])]),t._v(" "),e("li",[e("p",[t._v("Intall MAVROS by following the "),e("RouterLink",{attrs:{to:"/zh/ros/mavros_installation.html"}},[t._v("MAVROS Installation Guide")]),t._v(".")],1)])]),t._v(" "),e("h3",{attrs:{id:"ros-melodic-ubuntu-18-04"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ros-melodic-ubuntu-18-04"}},[t._v("#")]),t._v(" ROS Melodic/Ubuntu 18.04")]),t._v(" "),e("p",[t._v("If you're working with ROS \"Melodic on Ubuntu 18.04:")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("Download the "),e("a",{attrs:{href:"https://raw.githubusercontent.com/PX4/Devguide/master/build_scripts/ubuntu_sim_ros_melodic.sh",target:"_blank",rel:"noopener noreferrer"}},[t._v("ubuntu_sim_ros_melodic.sh"),e("OutboundLink")],1),t._v(" script in a bash shell:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://raw.githubusercontent.com/PX4/Devguide/master/build_scripts/ubuntu_sim_ros_melodic.sh\n")])])])]),t._v(" "),e("li",[e("p",[t._v("下载脚本")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("ROS Gazebo: http://wiki.ros.org/kinetic/Installation/Ubuntu\n")])])]),e("p",[t._v("随着脚本的运行，可能需要确认一些提示。")])])]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),e("ul",[e("li",[t._v("ROS Melodic is installed with Gazebo (Classic) 9 by default.")]),t._v(" "),e("li",[t._v("你的 catkin （ROS 构建系统）工作目录生成在**~/catkin_ws/**。")]),t._v(" "),e("li",[t._v('The script uses instructions from the ROS Wiki "Melodic" '),e("a",{attrs:{href:"http://wiki.ros.org/melodic/Installation/Ubuntu",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ubuntu page"),e("OutboundLink")],1),t._v(".")])])]),t._v(" "),e("h2",{attrs:{id:"gazebo-dependencies"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gazebo-dependencies"}},[t._v("#")]),t._v(" Gazebo dependencies")]),t._v(" "),e("p",[t._v("Once you have finished setting up the command-line toolchain:")]),t._v(" "),e("ul",[e("li",[t._v("Install "),e("RouterLink",{attrs:{to:"/zh/dev_setup/vscode.html"}},[t._v("VSCode")]),t._v(" (if you prefer using an IDE to the command line).")],1),t._v(" "),e("li",[t._v("Install the "),e("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/releases/daily_builds.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGroundControl Daily Build"),e("OutboundLink")],1),t._v(" :::tip The "),e("em",[t._v("daily build")]),t._v(" includes development tools that hidden in release builds. It may also provide access to new PX4 features that are not yet supported in release builds.\n:::")]),t._v(" "),e("li",[t._v("Continue to the "),e("RouterLink",{attrs:{to:"/zh/dev_setup/building_px4.html"}},[t._v("build instructions")]),t._v(".")],1)])])}),[],!1,null,null,null);s.default=n.exports}}]);