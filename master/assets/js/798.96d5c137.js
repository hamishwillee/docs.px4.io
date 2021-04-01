(window.webpackJsonp=window.webpackJsonp||[]).push([[798],{1581:function(t,s,e){"use strict";e.r(s);var a=e(18),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"ubuntu-development-environment"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-development-environment"}},[t._v("#")]),t._v(" Ubuntu Development Environment")]),t._v(" "),e("p",[t._v("The following instructions set up a PX4 development environment on Ubuntu Linux 18.04 amd 20.04.\nThis environment can be used to build PX4 for "),e("RouterLink",{attrs:{to:"/en/dev_setup/dev_env.html#supported-targets"}},[t._v("most PX4 targets")]),t._v(":")],1),t._v(" "),e("ul",[e("li",[t._v("Pixhawk and other NuttX-based hardware")]),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/en/simulation/jmavsim.html"}},[t._v("jMAVSim Simulation")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/en/simulation/gazebo.html"}},[t._v("Gazebo Simulation")])],1),t._v(" "),e("li",[e("a",{attrs:{href:"#raspberry-pi"}},[t._v("Raspberry Pi")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#ros-gazebo"}},[t._v("ROS (1)")]),t._v(" (Robotics Operating System)")]),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/en/dev_setup/fast-dds-installation.html"}},[t._v("Fast DDS")]),t._v(" - Required for ROS2")],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/en/flight_controller/snapdragon_flight.html#developer-setup-building-firmware"}},[t._v("Snapdragon Flight")]),t._v(" (Discontinued)")],1)]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("This setup is supported by the PX4 dev team.")])]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[t._v("The supported OS versions for PX4 development are "),e("a",{attrs:{href:"https://wiki.ubuntu.com/LTS",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ubuntu Linux LTS"),e("OutboundLink")],1),t._v(" 18.04 (Bionic Beaver) and 20.04 (Focal Fossa).\nFor ROS (1) Ubuntu LTS 18.04 (only) is supported.")]),t._v(" "),e("p",[t._v("The instructions should also work on other Debian Linux based systems, but this is not verified/officially supported.")])]),t._v(" "),e("h2",{attrs:{id:"video-guide"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#video-guide"}},[t._v("#")]),t._v(" Video Guide")]),t._v(" "),e("p",[t._v("This video shows how to install the toolchain for NuttX and simulation targets ("),e("a",{attrs:{href:"#gazebo-jmavsim-and-nuttx-pixhawk-targets"}},[t._v("as covered below")]),t._v(") along with the basic testing covered in "),e("RouterLink",{attrs:{to:"/en/dev_setup/building_px4.html"}},[t._v("Building PX4 Software")]),t._v(".")],1),t._v(" "),e("p"),e("div",{staticClass:"embed-responsive embed-responsive-16by9"},[e("iframe",{staticClass:"embed-responsive-item youtube-player",attrs:{type:"text/html",width:"640",height:"390",src:"https://www.youtube.com/embed/OtValQdAdrU",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]),e("p"),t._v(" "),e("h2",{attrs:{id:"bash-scripts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bash-scripts"}},[t._v("#")]),t._v(" Bash Scripts")]),t._v(" "),e("p",[t._v("Bash scripts are provided to help make it easy to install development environment for different target platforms.\nThey are intended to be run on "),e("em",[t._v("clean")]),t._v(" Ubuntu LTS installations.")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Script")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("strong",[e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/Tools/setup/ubuntu.sh",target:"_blank",rel:"noopener noreferrer"}},[t._v("ubuntu.sh"),e("OutboundLink")],1)])]),t._v(" "),e("td",[t._v("Installs "),e("RouterLink",{attrs:{to:"/en/simulation/gazebo.html"}},[t._v("Gazebo 9")]),t._v(" and "),e("RouterLink",{attrs:{to:"/en/simulation/jmavsim.html"}},[t._v("jMAVSim")]),t._v(" simulators and/or "),e("RouterLink",{attrs:{to:"/en/dev_setup/building_px4.html#nuttx-pixhawk-based-boards"}},[t._v("NuttX/Pixhawk")]),t._v(" tools."),e("br"),t._v("Does not include dependencies for "),e("a",{attrs:{href:"#fast-dds-installation"}},[t._v("Fast DDS")]),t._v(". ")],1)]),t._v(" "),e("tr",[e("td",[e("strong",[e("a",{attrs:{href:"https://raw.githubusercontent.com/PX4/Devguide/master/build_scripts/ubuntu_sim_ros_melodic.sh",target:"_blank",rel:"noopener noreferrer"}},[t._v("ubuntu_sim_ros_melodic.sh"),e("OutboundLink")],1)])]),t._v(" "),e("td",[t._v("Installs "),e("a",{attrs:{href:"#rosgazebo"}},[t._v('ROS "Melodic"')]),t._v(" and PX4 on Ubuntu 18.04 LTS "),e("strong",[t._v("only")]),t._v("."),e("br"),t._v("Do not use on Ubuntu 20.04 or later!")])])])]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[t._v("The scripts "),e("em",[t._v("may")]),t._v(' not work if installed "on top" of an existing system, or on a different Ubuntu release.')])]),t._v(" "),e("h2",{attrs:{id:"gazebo-jmavsim-and-nuttx-pixhawk-targets"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gazebo-jmavsim-and-nuttx-pixhawk-targets"}},[t._v("#")]),t._v(" Gazebo, JMAVSim and NuttX (Pixhawk) Targets")]),t._v(" "),e("p",[t._v("Use the "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/Tools/setup/ubuntu.sh",target:"_blank",rel:"noopener noreferrer"}},[t._v("ubuntu.sh"),e("OutboundLink")],1),t._v(" "),t._v(" script to set up a development environment that includes "),e("RouterLink",{attrs:{to:"/en/simulation/gazebo.html"}},[t._v("Gazebo 9")]),t._v(" and "),e("RouterLink",{attrs:{to:"/en/simulation/jmavsim.html"}},[t._v("jMAVSim")]),t._v(" simulators, and/or the "),e("RouterLink",{attrs:{to:"/en/dev_setup/building_px4.html#nuttx-pixhawk-based-boards"}},[t._v("NuttX/Pixhawk")]),t._v(" toolchain.")],1),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("ROS users must follow the instructions for: "),e("a",{attrs:{href:"#rosgazebo"}},[t._v("ROS/Gazebo")]),t._v(". ")])]),t._v(" "),e("p",[t._v("To install the toolchain:")]),t._v(" "),e("ol",[e("li",[e("RouterLink",{attrs:{to:"/en/dev_setup/building_px4.html"}},[t._v("Download PX4 Source Code")]),t._v(":"),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/PX4/PX4-Autopilot.git --recursive\n")])])])],1),t._v(" "),e("li",[t._v("Run the "),e("strong",[t._v("ubuntu.sh")]),t._v(" with no arguments (in a bash shell) to install everything:"),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" ./PX4-Autopilot/Tools/setup/ubuntu.sh\n")])])]),e("ul",[e("li",[t._v("Acknowledge any prompts as the script progress.")]),t._v(" "),e("li",[t._v("You can use the "),e("code",[t._v("--no-nuttx")]),t._v(" and "),e("code",[t._v("--no-sim-tools")]),t._v(" options to omit the NuttX and/or simulation tools.")])])]),t._v(" "),e("li",[t._v("Restart the computer on completion.")])]),t._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("Information-only notes")]),t._v(" "),e("ul",[e("li",[t._v("The script installs Gazebo 9 (following "),e("a",{attrs:{href:"http://gazebosim.org/tutorials?tut=install_ubuntu&cat=install",target:"_blank",rel:"noopener noreferrer"}},[t._v("gazebosim.org instructions"),e("OutboundLink")],1),t._v(").\nGazebo 7, 8 are also supported but not recommended.")]),t._v(" "),e("li",[t._v("You can verify the NuttX installation by confirming the gcc version as shown:"),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$arm")]),t._v("-none-eabi-gcc --version\n\n arm-none-eabi-gcc "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("GNU Tools "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" Arm Embedded Processors "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v("-2017-q4-major"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("7.2")]),t._v(".1 "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("20170904")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("release"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ARM/embedded-7-branch revision "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("255204")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n Copyright "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("C"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2017")]),t._v(" Free Software Foundation, Inc.\n This is "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("free")]),t._v(" software"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" see the "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" copying conditions.  There is NO\n warranty"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" not even "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n")])])])]),t._v(" "),e("li",[t._v("You're going to need the PX4 source code anyway.\nBut if you just wanted to set up the development environment without getting all the source code you could instead just download "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/Tools/setup/ubuntu.sh",target:"_blank",rel:"noopener noreferrer"}},[t._v("ubuntu.sh"),e("OutboundLink")],1),t._v(" and "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/Tools/setup/requirements.txt",target:"_blank",rel:"noopener noreferrer"}},[t._v("requirements.txt"),e("OutboundLink")],1),t._v(" and then run "),e("strong",[t._v("ubuntu.sh")]),t._v(": "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://raw.githubusercontent.com/PX4/PX4-Autopilot/master/Tools/setup/ubuntu.sh\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://raw.githubusercontent.com/PX4/PX4-Autopilot/master/Tools/setup/requirements.txt\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" ubuntu.sh\n")])])])])])]),t._v(" "),e("p",[e("a",{attrs:{id:"raspberry-pi-hardware"}})]),t._v(" "),e("h2",{attrs:{id:"raspberry-pi"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#raspberry-pi"}},[t._v("#")]),t._v(" Raspberry Pi")]),t._v(" "),e("p",[t._v("The following instructions explain how to set up a build toolchain for RasPi on "),e("em",[t._v("Ubuntu 18.04")]),t._v(".")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("To build for Ubuntu 20.04 (focal) you must use docker (the GCC toolchain on Ubuntu 20.04 can build PX4, but the generated binary files are too new to run on actual Pi).\nFor more information see "),e("RouterLink",{attrs:{to:"/en/flight_controller/raspberry_pi_pilotpi_rpios.html#alternative-build-method-using-docker"}},[t._v("PilotPi with Raspberry Pi OS Developer Quick Start > Alternative build method using docker")]),t._v(".")],1)]),t._v(" "),e("p",[t._v("To get the common dependencies for Raspberry Pi:")]),t._v(" "),e("ol",[e("li",[t._v("Download "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/Tools/setup/ubuntu.sh",target:"_blank",rel:"noopener noreferrer"}},[t._v("ubuntu.sh"),e("OutboundLink")],1),t._v(" "),t._v(" and "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/Tools/setup/requirements.txt",target:"_blank",rel:"noopener noreferrer"}},[t._v("requirements.txt"),e("OutboundLink")],1),t._v(" from the PX4 source repository ("),e("strong",[t._v("/Tools/setup/")]),t._v("):  "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("wget https://raw.githubusercontent.com/PX4/PX4-Autopilot/master/Tools/setup/ubuntu.sh\nwget https://raw.githubusercontent.com/PX4/PX4-Autopilot/master/Tools/setup/requirements.txt\n")])])])]),t._v(" "),e("li",[t._v("Run "),e("strong",[t._v("ubuntu.sh")]),t._v(" in a terminal to get just the common dependencies:"),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" ubuntu.sh --no-nuttx --no-sim-tools\n")])])])]),t._v(" "),e("li",[t._v("Then setup an cross-compiler (either GCC or clang) as described in the following sections.")])]),t._v(" "),e("h3",{attrs:{id:"gcc-armhf"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gcc-armhf"}},[t._v("#")]),t._v(" GCC (armhf)")]),t._v(" "),e("p",[t._v("Ubuntu software repository provides a set of pre-compiled toolchains. Note that Ubuntu Focal comes up with "),e("code",[t._v("gcc-9-arm-linux-gnueabihf")]),t._v(" as its default installation which is not fully supported, so we must manually install "),e("code",[t._v("gcc-8-arm-linux-gnueabihf")]),t._v(" and set it as the default toolchain. This guide also applies to earlier Ubuntu releases (Bionic).\nThe following instruction assumes you haven't installed any version of arm-linux-gnueabihf, and will set up the default executable with "),e("code",[t._v("update-alternatives")]),t._v(".\nInstall them with the terminal command:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y gcc-8-arm-linux-gnueabihf g++-8-arm-linux-gnueabihf\n")])])]),e("p",[t._v("Set them as default:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" update-alternatives --install /usr/bin/arm-linux-gnueabihf-gcc arm-linux-gnueabihf-gcc /usr/bin/arm-linux-gnueabihf-8 "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" --slave /usr/bin/arm-linux-gnueabihf-g++ arm-linux-gnueabihf-g++ /usr/bin/arm-linux-gnueabihf-g++-8\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" update-alternatives --config arm-linux-gnueabihf-gcc\n")])])]),e("h3",{attrs:{id:"gcc-aarch64"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gcc-aarch64"}},[t._v("#")]),t._v(" GCC (aarch64)")]),t._v(" "),e("p",[t._v("If you want to build PX4 for ARM64 devices, this section is required.")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y gcc-8-aarch64-linux-gnu g++-8-aarch64-linux-gnu\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" update-alternatives --install /usr/bin/aarch64-linux-gnu-gcc aarch64-linux-gnu-gcc /usr/bin/aarch64-linux-gnu-gcc-8 "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" --slave /usr/bin/aarch64-linux-gnu-g++ aarch64-linux-gnu-g++ /usr/bin/aarch64-linux-gnu-g++-8\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" update-alternatives --config aarch64-linux-gnu-gcc\n")])])]),e("h3",{attrs:{id:"clang-optional"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#clang-optional"}},[t._v("#")]),t._v(" Clang (optional)")]),t._v(" "),e("p",[t._v("First "),e("a",{attrs:{href:"#gcc"}},[t._v("install GCC")]),t._v(" (needed to use clang).")]),t._v(" "),e("p",[t._v("We recommend you to get clang from the Ubuntu software repository, as shown below:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("sudo apt-get install clang\n")])])]),e("p",[t._v("Example below for building PX4 firmware out of tree, using "),e("em",[t._v("CMake")]),t._v(".")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("PATH")]),t._v("-TO-PX4-SRC"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" build/px4_raspberrypi_default_clang\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" build/px4_raspberrypi_default_clang\ncmake "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-G"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Unix Makefiles"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-DCONFIG"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("px4_raspberrypi_default "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-UCMAKE_C_COMPILER "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-DCMAKE_C_COMPILER"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("clang "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-UCMAKE_CXX_COMPILER "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-DCMAKE_CXX_COMPILER"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("clang++ "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v("\n")])])]),e("h3",{attrs:{id:"detailed-information"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#detailed-information"}},[t._v("#")]),t._v(" Detailed Information")]),t._v(" "),e("p",[t._v("Additional developer information for using PX4 on Raspberry Pi (including building PX4 natively) can be found here:")]),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/en/flight_controller/raspberry_pi_navio2.html"}},[t._v("Raspberry Pi 2/3 Navio2 Autopilot")]),t._v(".")],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/en/flight_controller/raspberry_pi_pilotpi.html"}},[t._v("Raspberry Pi 2/3/4 PilotPi Shield")]),t._v(".")],1)]),t._v(" "),e("p",[e("a",{attrs:{id:"rosgazebo"}})]),t._v(" "),e("h2",{attrs:{id:"ros-gazebo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ros-gazebo"}},[t._v("#")]),t._v(" ROS/Gazebo")]),t._v(" "),e("p",[t._v("This section explains how to install "),e("RouterLink",{attrs:{to:"/en/ros/"}},[t._v("ROS")]),t._v(' "Melodic" and PX4 on Ubuntu 18.04.')],1),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("ROS builds are tied to specific Ubuntu versions!\nROS Melodic can "),e("em",[t._v("only")]),t._v(" install on Ubuntu 18.04.")])]),t._v(" "),e("p",[t._v("To install the development toolchain:")]),t._v(" "),e("ol",[e("li",[t._v("Download the script in a bash shell: "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://raw.githubusercontent.com/PX4/Devguide/master/build_scripts/ubuntu_sim_ros_melodic.sh\n")])])])]),t._v(" "),e("li",[t._v("Run the script:"),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" ubuntu_sim_ros_melodic.sh\n")])])]),t._v("You may need to acknowledge some prompts as the script progresses.")])]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("ul",[e("li",[t._v("ROS Melodic is installed with Gazebo9 by default.")]),t._v(" "),e("li",[t._v("Your catkin (ROS build system) workspace is created at "),e("strong",[t._v("~/catkin_ws/")]),t._v(".")]),t._v(" "),e("li",[t._v('The script uses instructions from the ROS Wiki "Melodic" '),e("a",{attrs:{href:"http://wiki.ros.org/melodic/Installation/Ubuntu",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ubuntu page"),e("OutboundLink")],1),t._v(".")])])]),t._v(" "),e("p",[e("a",{attrs:{id:"fast_dds"}}),t._v(" "),e("a",{attrs:{id:"fast_rtps"}})]),t._v(" "),e("h2",{attrs:{id:"fast-dds-installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fast-dds-installation"}},[t._v("#")]),t._v(" Fast DDS installation")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/eProsima/Fast-DDS",target:"_blank",rel:"noopener noreferrer"}},[t._v("eProsima Fast DDS"),e("OutboundLink")],1),t._v(" is required if you're using PX4 with ROS2 (or some other RTPS/DDS system).")]),t._v(" "),e("p",[t._v("Follow the instructions in "),e("RouterLink",{attrs:{to:"/en/dev_setup/fast-dds-installation.html"}},[t._v("Fast DDS Installation")]),t._v(" to install it.")],1),t._v(" "),e("h2",{attrs:{id:"next-steps"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#next-steps"}},[t._v("#")]),t._v(" Next Steps")]),t._v(" "),e("p",[t._v("Once you have finished setting up the command-line toolchain:")]),t._v(" "),e("ul",[e("li",[t._v("Install "),e("RouterLink",{attrs:{to:"/en/dev_setup/vscode.html"}},[t._v("VSCode")]),t._v(" (if you prefer using an IDE to the command line).")],1),t._v(" "),e("li",[t._v("Install the "),e("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/releases/daily_builds.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGroundControl Daily Build"),e("OutboundLink")],1),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("The "),e("em",[t._v("daily build")]),t._v(" includes development tools that hidden in release builds.\nIt may also provide access to new PX4 features that are not yet supported in release builds.")])])]),t._v(" "),e("li",[t._v("Continue to the "),e("RouterLink",{attrs:{to:"/en/dev_setup/building_px4.html"}},[t._v("build instructions")]),t._v(".")],1)])])}),[],!1,null,null,null);s.default=n.exports}}]);