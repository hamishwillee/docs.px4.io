(window.webpackJsonp=window.webpackJsonp||[]).push([[775],{1560:function(t,e,a){"use strict";a.r(e);var s=a(18),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"development-environment-on-ubuntu-lts-debian-linux"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#development-environment-on-ubuntu-lts-debian-linux"}},[t._v("#")]),t._v(" Development Environment on Ubuntu LTS / Debian Linux")]),t._v(" "),a("p",[t._v("The supported/tested Linux OS versions for PX4 development are "),a("a",{attrs:{href:"https://wiki.ubuntu.com/LTS",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ubuntu Linux LTS"),a("OutboundLink")],1),t._v(" 18.04 (Bionic Beaver) and 20.04 (Focal Fossa).\nThese allow you to build for the "),a("RouterLink",{attrs:{to:"/en/dev_setup/dev_env.html#supported-targets"}},[t._v("most PX4 targets")]),t._v(" (NuttX based hardware, "),a("em",[t._v("Qualcomm Snapdragon Flight")]),t._v(" hardware, Linux-based hardware, Simulation).")],1),t._v(" "),a("p",[t._v("Bash scripts are provided to help make it easy to install development environment for different target platforms:")]),t._v(" "),a("ul",[a("li",[a("strong",[a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/Tools/setup/ubuntu.sh",target:"_blank",rel:"noopener noreferrer"}},[t._v("ubuntu.sh"),a("OutboundLink")],1)]),t._v(": Installs "),a("RouterLink",{attrs:{to:"/en/simulation/gazebo.html"}},[t._v("Gazebo 9")]),t._v(" and "),a("RouterLink",{attrs:{to:"/en/simulation/jmavsim.html"}},[t._v("jMAVSim")]),t._v(" simulators and/or "),a("RouterLink",{attrs:{to:"/en/dev_setup/building_px4.html#nuttx-pixhawk-based-boards"}},[t._v("NuttX/Pixhawk")]),t._v(" tools.\nDoes not include dependencies for "),a("a",{attrs:{href:"#fast_rtps"}},[t._v("FastRTPS")]),t._v(". ")],1),t._v(" "),a("li",[a("strong",[a("a",{attrs:{href:"https://raw.githubusercontent.com/PX4/Devguide/master/build_scripts/ubuntu_sim_ros_melodic.sh",target:"_blank",rel:"noopener noreferrer"}},[t._v("ubuntu_sim_ros_melodic.sh"),a("OutboundLink")],1)]),t._v(": Installs "),a("a",{attrs:{href:"#rosgazebo"}},[t._v('ROS "Melodic"')]),t._v(" and PX4.\n"),a("blockquote",[a("p",[a("strong",[t._v("Note:")]),t._v(" ROS Melodic only works on Ubuntu 18.04 LTS (do not run this script on Ubuntu 20.04 or later).")])])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("The scripts have been tested on "),a("em",[t._v("clean")]),t._v(" Ubuntu LTS installations.\nThey "),a("em",[t._v("may")]),t._v(' not work as expected if installed "on top" of an existing system, or on a different Ubuntu release.')])]),t._v(" "),a("p",[t._v("The instructions below explain how to download and use the scripts.")]),t._v(" "),a("h2",{attrs:{id:"gazebo-jmavsim-and-nuttx-pixhawk-targets"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gazebo-jmavsim-and-nuttx-pixhawk-targets"}},[t._v("#")]),t._v(" Gazebo, JMAVSim and NuttX (Pixhawk) Targets")]),t._v(" "),a("p",[t._v("Use the "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/Tools/setup/ubuntu.sh",target:"_blank",rel:"noopener noreferrer"}},[t._v("ubuntu.sh"),a("OutboundLink")],1),t._v(" "),t._v(" script to set up a development environment that includes "),a("RouterLink",{attrs:{to:"/en/simulation/gazebo.html"}},[t._v("Gazebo 9")]),t._v(" and "),a("RouterLink",{attrs:{to:"/en/simulation/jmavsim.html"}},[t._v("jMAVSim")]),t._v(" simulators, and/or the "),a("RouterLink",{attrs:{to:"/en/dev_setup/building_px4.html#nuttx-pixhawk-based-boards"}},[t._v("NuttX/Pixhawk")]),t._v(" toolchain.")],1),t._v(" "),a("p",[t._v("To install the toolchain:")]),t._v(" "),a("ol",[a("li",[a("RouterLink",{attrs:{to:"/en/dev_setup/building_px4.html"}},[t._v("Download PX4 Source Code")]),t._v(":"),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/PX4/PX4-Autopilot.git --recursive\n")])])])],1),t._v(" "),a("li",[t._v("Run the "),a("strong",[t._v("ubuntu.sh")]),t._v(" with no arguments (in a bash shell) to install everything:"),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" ./Tools/setup/ubuntu.sh\n")])])]),a("ul",[a("li",[t._v("Acknowledge any prompts as the script progress.")]),t._v(" "),a("li",[t._v("You can use the "),a("code",[t._v("--no-nuttx")]),t._v(" and "),a("code",[t._v("--no-sim-tools")]),t._v(" to omit the nuttx and/or simulation tools.")])])]),t._v(" "),a("li",[t._v("Restart the computer on completion.")])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("You can alternatively download "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/Tools/setup/ubuntu.sh",target:"_blank",rel:"noopener noreferrer"}},[t._v("ubuntu.sh"),a("OutboundLink")],1),t._v(" and "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/Tools/setup/requirements.txt",target:"_blank",rel:"noopener noreferrer"}},[t._v("requirements.txt"),a("OutboundLink")],1),t._v(" from the PX4 source repository ("),a("strong",[t._v("/Tools/setup/")]),t._v(") and run ubuntu.sh in place: "),t._v(" "),a("br"),a("code",[t._v("wget https://raw.githubusercontent.com/PX4/PX4-Autopilot/master/Tools/setup/ubuntu.sh")]),t._v(" "),a("br"),a("code",[t._v("wget https://raw.githubusercontent.com/PX4/PX4-Autopilot/master/Tools/setup/requirements.txt")]),t._v(" "),a("br"),a("code",[t._v("bash ubuntu.sh")])])]),t._v(" "),a("p",[t._v("Notes:")]),t._v(" "),a("ul",[a("li",[t._v("PX4 works with Gazebo 7, 8, and 9.\nThe script uses "),a("a",{attrs:{href:"http://gazebosim.org/tutorials?tut=install_ubuntu&cat=install",target:"_blank",rel:"noopener noreferrer"}},[t._v("gazebosim.org instructions"),a("OutboundLink")],1),t._v(" to install Gazebo9.")]),t._v(" "),a("li",[t._v("If you're going work with ROS then follow the "),a("a",{attrs:{href:"#rosgazebo"}},[t._v("ROS/Gazebo")]),t._v(" instructions instead (these install Gazebo automatically, as part of the ROS installation).")]),t._v(" "),a("li",[t._v("You can verify the NuttX installation by confirming the gcc version as shown:"),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$arm")]),t._v("-none-eabi-gcc --version\n\n arm-none-eabi-gcc "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("GNU Tools "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" Arm Embedded Processors "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v("-2017-q4-major"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7.2")]),t._v(".1 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20170904")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("release"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ARM/embedded-7-branch revision "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("255204")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n Copyright "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("C"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2017")]),t._v(" Free Software Foundation, Inc.\n This is "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("free")]),t._v(" software"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" see the "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" copying conditions.  There is NO\n warranty"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" not even "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n")])])])])]),t._v(" "),a("p",[a("a",{attrs:{id:"raspberry-pi-hardware"}})]),t._v(" "),a("h2",{attrs:{id:"raspberry-pi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#raspberry-pi"}},[t._v("#")]),t._v(" Raspberry Pi")]),t._v(" "),a("p",[t._v("The following instructions explain how to set up a build toolchain for RasPi on "),a("em",[t._v("Ubuntu 18.04")]),t._v(".")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("To build for Ubuntu 20.04 (focal) you must use docker (the GCC toolchain on Ubuntu 20.04 can build PX4, but the generated binary files are too new to run on actual Pi).\nFor more information see "),a("RouterLink",{attrs:{to:"/en/flight_controller/raspberry_pi_pilotpi_rpios.html#alternative-build-method-using-docker"}},[t._v("PilotPi with Raspberry Pi OS Developer Quick Start > Alternative build method using docker")]),t._v(".")],1)]),t._v(" "),a("p",[t._v("To get the common dependencies for Raspberry Pi:")]),t._v(" "),a("ol",[a("li",[t._v("Download "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/Tools/setup/ubuntu.sh",target:"_blank",rel:"noopener noreferrer"}},[t._v("ubuntu.sh"),a("OutboundLink")],1),t._v(" "),t._v(" and "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/Tools/setup/requirements.txt",target:"_blank",rel:"noopener noreferrer"}},[t._v("requirements.txt"),a("OutboundLink")],1),t._v(" from the PX4 source repository ("),a("strong",[t._v("/Tools/setup/")]),t._v("):\n"),a("br"),a("code",[t._v("wget https://raw.githubusercontent.com/PX4/PX4-Autopilot/master/Tools/setup/ubuntu.sh")]),t._v(" "),a("br"),a("code",[t._v("wget https://raw.githubusercontent.com/PX4/PX4-Autopilot/master/Tools/setup/requirements.txt")])]),t._v(" "),a("li",[t._v("Run "),a("strong",[t._v("ubuntu.sh")]),t._v(" in a terminal to get just the common dependencies:"),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" ubuntu.sh --no-nuttx --no-sim-tools\n")])])])]),t._v(" "),a("li",[t._v("Then setup an cross-compiler (either GCC or clang) as described in the following sections.")])]),t._v(" "),a("h3",{attrs:{id:"gcc-armhf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gcc-armhf"}},[t._v("#")]),t._v(" GCC (armhf)")]),t._v(" "),a("p",[t._v("Ubuntu software repository provides a set of pre-compiled toolchains. Note that Ubuntu Focal comes up with "),a("code",[t._v("gcc-9-arm-linux-gnueabihf")]),t._v(" as its default installation which is not fully supported, so we must manually install "),a("code",[t._v("gcc-8-arm-linux-gnueabihf")]),t._v(" and set it as the default toolchain. This guide also applies to earlier Ubuntu releases (Bionic).\nThe following instruction assumes you haven't installed any version of arm-linux-gnueabihf, and will set up the default executable with "),a("code",[t._v("update-alternatives")]),t._v(".\nInstall them with the terminal command:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y gcc-8-arm-linux-gnueabihf g++-8-arm-linux-gnueabihf\n")])])]),a("p",[t._v("Set them as default:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" update-alternatives --install /usr/bin/arm-linux-gnueabihf-gcc arm-linux-gnueabihf-gcc /usr/bin/arm-linux-gnueabihf-8 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" --slave /usr/bin/arm-linux-gnueabihf-g++ arm-linux-gnueabihf-g++ /usr/bin/arm-linux-gnueabihf-g++-8\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" update-alternatives --config arm-linux-gnueabihf-gcc\n")])])]),a("h3",{attrs:{id:"gcc-aarch64"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gcc-aarch64"}},[t._v("#")]),t._v(" GCC (aarch64)")]),t._v(" "),a("p",[t._v("If you want to build PX4 for ARM64 devices, this section is required.")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y gcc-8-aarch64-linux-gnu g++-8-aarch64-linux-gnu\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" update-alternatives --install /usr/bin/aarch64-linux-gnu-gcc aarch64-linux-gnu-gcc /usr/bin/aarch64-linux-gnu-gcc-8 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" --slave /usr/bin/aarch64-linux-gnu-g++ aarch64-linux-gnu-g++ /usr/bin/aarch64-linux-gnu-g++-8\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" update-alternatives --config aarch64-linux-gnu-gcc\n")])])]),a("h3",{attrs:{id:"clang-optional"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clang-optional"}},[t._v("#")]),t._v(" Clang (optional)")]),t._v(" "),a("p",[t._v("First "),a("a",{attrs:{href:"#gcc"}},[t._v("install GCC")]),t._v(" (needed to use clang).")]),t._v(" "),a("p",[t._v("We recommend you to get clang from the Ubuntu software repository, as shown below:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("sudo apt-get install clang\n")])])]),a("p",[t._v("Example below for building PX4 firmware out of tree, using "),a("em",[t._v("CMake")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("PATH")]),t._v("-TO-PX4-SRC"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" build/px4_raspberrypi_default_clang\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" build/px4_raspberrypi_default_clang\ncmake "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-G"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Unix Makefiles"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-DCONFIG"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("px4_raspberrypi_default "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-UCMAKE_C_COMPILER "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-DCMAKE_C_COMPILER"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("clang "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-UCMAKE_CXX_COMPILER "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-DCMAKE_CXX_COMPILER"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("clang++ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v("\n")])])]),a("h3",{attrs:{id:"detailed-information"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#detailed-information"}},[t._v("#")]),t._v(" Detailed Information")]),t._v(" "),a("p",[t._v("Additional developer information for using PX4 on Raspberry Pi (including building PX4 natively) can be found here:")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/en/flight_controller/raspberry_pi_navio2.html"}},[t._v("Raspberry Pi 2/3 Navio2 Autopilot")]),t._v(".")],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/en/flight_controller/raspberry_pi_pilotpi.html"}},[t._v("Raspberry Pi 2/3/4 PilotPi Shield")]),t._v(".")],1)]),t._v(" "),a("p",[a("a",{attrs:{id:"rosgazebo"}})]),t._v(" "),a("h2",{attrs:{id:"ros-gazebo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ros-gazebo"}},[t._v("#")]),t._v(" ROS/Gazebo")]),t._v(" "),a("p",[t._v("This section explains how to install "),a("RouterLink",{attrs:{to:"/en/ros/"}},[t._v("ROS/Gazebo")]),t._v(' ("Melodic") and PX4 on Ubuntu 18.04.')],1),t._v(" "),a("p",[t._v("To install the development toolchain:")]),t._v(" "),a("ol",[a("li",[t._v("Download the script in a bash shell:\n"),a("br"),a("code",[t._v("wget https://raw.githubusercontent.com/PX4/Devguide/master/build_scripts/ubuntu_sim_ros_melodic.sh")])]),t._v(" "),a("li",[t._v("Run the script:"),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" ubuntu_sim_ros_melodic.sh\n")])])]),t._v("You may need to acknowledge some prompts as the script progresses.")])]),t._v(" "),a("p",[t._v("Note:")]),t._v(" "),a("ul",[a("li",[t._v("ROS Melodic is installed with Gazebo9 by default.")]),t._v(" "),a("li",[t._v("Your catkin (ROS build system) workspace is created at "),a("strong",[t._v("~/catkin_ws/")]),t._v(".")]),t._v(" "),a("li",[t._v('The script uses instructions from the ROS Wiki "Melodic" '),a("a",{attrs:{href:"http://wiki.ros.org/melodic/Installation/Ubuntu",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ubuntu page"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("h2",{attrs:{id:"snapdragon-flight"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#snapdragon-flight"}},[t._v("#")]),t._v(" Snapdragon Flight")]),t._v(" "),a("p",[t._v("Setup instructions for "),a("em",[t._v("Snapdragon Flight")]),t._v(" are provided in the flight controller pages:")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/en/flight_controller/snapdragon_flight_dev_environment_installation.html"}},[t._v("Development Environment")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/en/flight_controller/snapdragon_flight_software_installation.html"}},[t._v("Software Installation")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/en/flight_controller/snapdragon_flight_configuration.html"}},[t._v("Configuration")])],1)]),t._v(" "),a("p",[a("a",{attrs:{id:"fast_rtps"}})]),t._v(" "),a("h2",{attrs:{id:"fast-rtps-installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fast-rtps-installation"}},[t._v("#")]),t._v(" Fast RTPS installation")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://eprosima-fast-rtps.readthedocs.io/en/latest/",target:"_blank",rel:"noopener noreferrer"}},[t._v("eProsima Fast RTPS"),a("OutboundLink")],1),t._v(" is a C++ implementation of the RTPS (Real Time Publish Subscribe) protocol.\nFastRTPS is used, via the "),a("RouterLink",{attrs:{to:"/en/middleware/micrortps.html"}},[t._v("RTPS/ROS2 Interface: PX4-FastRTPS Bridge")]),t._v(", to allow PX4 uORB topics to be shared with offboard components.")],1),t._v(" "),a("p",[t._v("Follow the instructions in "),a("RouterLink",{attrs:{to:"/en/dev_setup/fast-rtps-installation.html"}},[t._v("Fast RTPS Installation")]),t._v(" to install it.")],1),t._v(" "),a("h2",{attrs:{id:"additional-tools"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#additional-tools"}},[t._v("#")]),t._v(" Additional Tools")]),t._v(" "),a("p",[t._v("After setting up the build/simulation toolchain, see "),a("RouterLink",{attrs:{to:"/en/dev_setup/generic_dev_tools.html"}},[t._v("Additional Tools")]),t._v(" for information about other useful tools.")],1),t._v(" "),a("h2",{attrs:{id:"next-steps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#next-steps"}},[t._v("#")]),t._v(" Next Steps")]),t._v(" "),a("p",[t._v("Once you have finished setting up the environment, continue to the "),a("RouterLink",{attrs:{to:"/en/dev_setup/building_px4.html"}},[t._v("build instructions")]),t._v(".")],1)])}),[],!1,null,null,null);e.default=n.exports}}]);