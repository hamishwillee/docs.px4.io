(window.webpackJsonp=window.webpackJsonp||[]).push([[956],{1963:function(t,s,e){"use strict";e.r(s);var a=e(18),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"development-environment-on-ubuntu-lts-debian-linux"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#development-environment-on-ubuntu-lts-debian-linux"}},[t._v("#")]),t._v(" Development Environment on Ubuntu LTS / Debian Linux")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://wiki.ubuntu.com/LTS",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ubuntu Linux LTS"),e("OutboundLink")],1),t._v(" (16.04) is the standard/preferred Linux development OS. It allows you to build for "),e("RouterLink",{attrs:{to:"/ko/setup/dev_env.html#supported-targets"}},[t._v("all PX4 targets")]),t._v(" (NuttX based hardware, Qualcomm Snapdragon Flight hardware, Linux-based hardware, Simulation, ROS).")],1),t._v(" "),e("p",[t._v("The following instructions explain how to "),e("em",[t._v("manually")]),t._v(" set up a development environment each of the supported targets.")]),t._v(" "),e("ul",[e("li",[e("p",[e("strong",[t._v("Tip")]),t._v(" We recommend that you use the "),e("a",{attrs:{href:"#convenience-bash-scripts"}},[t._v("Convenience bash scripts")]),t._v(" to install the Simulators and/or NuttX toolchain (this is easier than typing in the instructions below). Then follow just the additional instructions for other targets (e.g. Qualcomm Snapdragon Flight, Bebop, Raspberry Pi, etc.) Does not include dependencies for "),e("a",{attrs:{href:"#fast_rtps"}},[t._v("FastRTPS")]),t._v(". ")])]),t._v(" "),e("li",[e("p",[e("strong",[e("a",{attrs:{href:"https://raw.githubusercontent.com/PX4/Devguide/master/build_scripts/ubuntu_sim.sh",target:"_blank",download:""}},[t._v("ubuntu_sim.sh")])]),t._v(": "),e("strong",[t._v("ubuntu_sim_common_deps.sh")]),t._v(" + "),e("a",{attrs:{href:"#gazebo"}},[t._v("Gazebo8")]),t._v(" simulator.")]),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("Note:")]),t._v(" ROS Melodic only works on Ubuntu 18.04 LTS (do not run this script on Ubuntu 20.04 or later).")])])])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("The scripts have been tested on "),e("em",[t._v("clean")]),t._v(" Ubuntu LTS installations. They "),e("em",[t._v("may")]),t._v(' not work as expected if installed "on top" of an existing system, or on a different Ubuntu release.')])]),t._v(" "),e("p",[t._v("The scripts are:")]),t._v(" "),e("h2",{attrs:{id:"convenience-bash-scripts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#convenience-bash-scripts"}},[t._v("#")]),t._v(" Convenience Bash Scripts")]),t._v(" "),e("p",[t._v("To use the scripts:")]),t._v(" "),e("p",[t._v('The user needs to be part of the group "dialout":')]),t._v(" "),e("ol",[e("li",[e("strong",[e("a",{attrs:{href:"https://raw.githubusercontent.com/PX4/Devguide/master/build_scripts/ubuntu_sim_common_deps.sh",target:"_blank",download:""}},[t._v("ubuntu_sim_common_deps.sh")])]),t._v(": "),e("a",{attrs:{href:"#common-dependencies"}},[t._v("Common Dependencies")]),t._v(", "),e("a",{attrs:{href:"#jmavsim"}},[t._v("jMAVSim")]),t._v(" simulator"),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/PX4/PX4-Autopilot.git --recursive\n")])])])]),t._v(" "),e("li",[e("strong",[e("a",{attrs:{href:"https://raw.githubusercontent.com/PX4/Devguide/master/build_scripts/ubuntu_sim_nuttx.sh",target:"_blank",download:""}},[t._v("ubuntu_sim_nuttx.sh")])]),t._v(": "),e("strong",[t._v("ubuntu_sim.sh")]),t._v(" + NuttX tools."),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" ./Tools/setup/ubuntu.sh\n")])])]),e("ul",[e("li",[t._v("Acknowledge any prompts as the script progress.")]),t._v(" "),e("li",[t._v("We've created a number of bash scripts that you can use to install the Simulators and/or NuttX toolchain.")])])]),t._v(" "),e("li",[t._v("This requires computer restart on completion.")])]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[t._v("You can alternatively download "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/Tools/setup/ubuntu.sh",target:"_blank",rel:"noopener noreferrer"}},[t._v("ubuntu.sh"),e("OutboundLink")],1),t._v(" and "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/Tools/setup/requirements.txt",target:"_blank",rel:"noopener noreferrer"}},[t._v("requirements.txt"),e("OutboundLink")],1),t._v(" from the PX4 source repository ("),e("strong",[t._v("/Tools/setup/")]),t._v(") and run ubuntu.sh in place: "),t._v(" "),e("br"),e("code",[t._v("wget https://raw.githubusercontent.com/PX4/PX4-Autopilot/master/Tools/setup/ubuntu.sh")]),t._v(" "),e("br"),e("code",[t._v("wget https://raw.githubusercontent.com/PX4/PX4-Autopilot/master/Tools/setup/requirements.txt")]),t._v(" "),e("br"),e("code",[t._v("bash ubuntu.sh")])])]),t._v(" "),e("p",[t._v("Notes:")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Tip")]),t._v(" PX4 works with Gazebo 7, 8, and 9. The "),e("a",{attrs:{href:"http://gazebosim.org/tutorials?tut=install_ubuntu&cat=install",target:"_blank",rel:"noopener noreferrer"}},[t._v("installation instructions"),e("OutboundLink")],1),t._v(" above are for installing Gazebo 9.")]),t._v(" "),e("li",[e("strong",[t._v("Note")]),t._v(" If you're going work with ROS then follow the "),e("a",{attrs:{href:"#rosgazebo"}},[t._v("ROS/Gazebo")]),t._v(" instructions in the following section (these install Gazebo automatically, as part of the ROS installation).")]),t._v(" "),e("li",[t._v("You can verify the NuttX installation by confirming the gcc version as shown:"),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$arm")]),t._v("-none-eabi-gcc --version\n\n arm-none-eabi-gcc "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("GNU Tools "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" Arm Embedded Processors "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v("-2017-q4-major"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("7.2")]),t._v(".1 "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("20170904")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("release"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ARM/embedded-7-branch revision "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("255204")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n Copyright "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("C"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2017")]),t._v(" Free Software Foundation, Inc.\n This is "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("free")]),t._v(" software"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" see the "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" copying conditions.  There is NO\n warranty"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" not even "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n```"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("-- Do we need to "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" to our scripts or can we assume correct version installs over?\n")])])])])]),t._v(" "),e("p",[t._v("Remove any old versions of the arm-none-eabi toolchain.")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" remove gcc-arm-none-eabi gdb-arm-none-eabi binutils-arm-none-eabi gcc-arm-embedded\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" add-apt-repository --remove ppa:team-gcc-arm-embedded/ppa\n")])])]),e("p",[t._v("--\x3e"),e("a",{attrs:{id:"raspberry-pi-hardware"}})]),t._v(" "),e("h2",{attrs:{id:"permission-setup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#permission-setup"}},[t._v("#")]),t._v(" Permission Setup")]),t._v(" "),e("p",[t._v("The following instructions explain how to set up a build toolchain for RasPi on "),e("em",[t._v("Ubuntu 18.04")]),t._v(".")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("To build for Ubuntu 20.04 (focal) you must use docker (the GCC toolchain on Ubuntu 20.04 can build PX4, but the generated binary files are too new to run on actual Pi). For more information see "),e("RouterLink",{attrs:{to:"/ko/flight_controller/raspberry_pi_pilotpi_rpios.html#alternative-build-method-using-docker"}},[t._v("PilotPi with Raspberry Pi OS Developer Quick Start > Alternative build method using docker")]),t._v(".")],1)]),t._v(" "),e("p",[t._v("To get the common dependencies for Raspberry Pi:")]),t._v(" "),e("ol",[e("li",[t._v("Download "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/Tools/setup/ubuntu.sh",target:"_blank",rel:"noopener noreferrer"}},[t._v("ubuntu.sh"),e("OutboundLink")],1),t._v("and "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/Tools/setup/requirements.txt",target:"_blank",rel:"noopener noreferrer"}},[t._v("requirements.txt"),e("OutboundLink")],1),t._v(" from the PX4 source repository ("),e("strong",[t._v("/Tools/setup/")]),t._v("): "),e("br"),e("code",[t._v("wget https://raw.githubusercontent.com/PX4/PX4-Autopilot/master/Tools/setup/ubuntu.sh")]),t._v(" "),e("br"),e("code",[t._v("wget https://raw.githubusercontent.com/PX4/PX4-Autopilot/master/Tools/setup/requirements.txt")]),t._v(" "),e("ol",[e("li",[e("strong",[t._v("Note")]),t._v(" If you use an ubuntu-based distro and the command "),e("code",[t._v("rosdep install --from-paths src --ignore-src --rosdistro kinetic -y")]),t._v(" fails, you can try to force the command to run by executing "),e("code",[t._v("rosdep install --from-paths src --ignore-src --rosdistro kinetic -y --os ubuntu:xenial")])])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" ubuntu.sh --no-nuttx --no-sim-tools\n")])])])]),t._v(" "),e("li",[t._v("Then setup an cross-compiler (either GCC or clang) as described in the following sections.")])]),t._v(" "),e("h3",{attrs:{id:"how-to-use-the-scripts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use-the-scripts"}},[t._v("#")]),t._v(" How to use the scripts")]),t._v(" "),e("p",[t._v("Ubuntu software repository provides a set of pre-compiled toolchains. Note that Ubuntu Focal comes up with "),e("code",[t._v("gcc-9-arm-linux-gnueabihf")]),t._v(" as its default installation which is not fully supported, so we must manually install "),e("code",[t._v("gcc-8-arm-linux-gnueabihf")]),t._v(" and set it as the default toolchain. This guide also applies to earlier Ubuntu releases (Bionic). The following instruction assumes you haven't installed any version of arm-linux-gnueabihf, and will set up the default executable with "),e("code",[t._v("update-alternatives")]),t._v(". Install them with the terminal command:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("usermod")]),t._v(" -a -G dialout "),e("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$USER")]),t._v("\n")])])]),e("p",[t._v("Set them as default:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" remove modemmanager\n")])])]),e("h3",{attrs:{id:"jmavsim"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jmavsim"}},[t._v("#")]),t._v(" jMAVSim")]),t._v(" "),e("p",[t._v("Install the dependencies for "),e("RouterLink",{attrs:{to:"/ko/simulation/jmavsim.html"}},[t._v("jMAVSim Simulation")]),t._v(".")],1),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" update -y\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("zip")]),t._v(" qtcreator cmake "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    build-essential genromfs ninja-build exiftool vim-common -y\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Required python packages")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" python-argparse "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    python-empy python-toml python-numpy python-yaml "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    python-dev python-pip -y\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" -H pip "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --upgrade pip \n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" -H pip "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" pandas jinja2 pyserial cerberus\n")])])]),e("h3",{attrs:{id:"gazebo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gazebo"}},[t._v("#")]),t._v(" Gazebo")]),t._v(" "),e("p",[t._v("Install the dependencies for "),e("RouterLink",{attrs:{to:"/ko/simulation/gazebo.html"}},[t._v("Gazebo Simulation")]),t._v(".")],1),t._v(" "),e("p",[t._v("We recommend you to get clang from the Ubuntu software repository, as shown below:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# optional python tools\nsudo -H pip install pyulog\n")])])]),e("p",[t._v("Example below for building PX4 firmware out of tree, using "),e("em",[t._v("CMake")]),t._v(".")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/raspberrypi/tools.git "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${"),e("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("HOME")]),t._v("}")]),t._v("/rpi-tools\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# test compiler")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$HOME")]),t._v("/rpi-tools/arm-bcm2708/gcc-linaro-arm-linux-gnueabihf-raspbian-x64/bin/arm-linux-gnueabihf-gcc -v\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# permanently update PATH variable by modifying ~/.profile")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'export PATH="),e("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$PATH")]),t._v(":"),e("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$HOME")]),t._v("/rpi-tools/arm-bcm2708/gcc-linaro-arm-linux-gnueabihf-raspbian-x64/bin'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" ~/.profile\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# update PATH variable only for this session")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("PATH")])]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$PATH")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$HOME")]),t._v("/rpi-tools/arm-bcm2708/gcc-linaro-arm-linux-gnueabihf-raspbian-x64/bin\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v("\n")])])]),e("h3",{attrs:{id:"detailed-information"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#detailed-information"}},[t._v("#")]),t._v(" Detailed Information")]),t._v(" "),e("p",[t._v("Additional developer information for using PX4 on Raspberry Pi (including building PX4 natively) can be found here:")]),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/ko/flight_controller/raspberry_pi_navio2.html"}},[t._v("Raspberry Pi 2/3 Navio2 Autopilot")]),t._v(".")],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/ko/flight_controller/raspberry_pi_pilotpi.html"}},[t._v("Raspberry Pi 2/3/4 PilotPi Shield")]),t._v(".")],1)]),t._v(" "),e("p",[e("a",{attrs:{id:"rosgazebo"}})]),t._v(" "),e("h2",{attrs:{id:"ros-gazebo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ros-gazebo"}},[t._v("#")]),t._v(" ROS/Gazebo")]),t._v(" "),e("p",[t._v("This section explains how to install "),e("RouterLink",{attrs:{to:"/ko/ros/"}},[t._v("ROS/Gazebo")]),t._v(' ("Melodic") and PX4 on Ubuntu 18.04.')],1),t._v(" "),e("p",[t._v("To install the development toolchain:")]),t._v(" "),e("ol",[e("li",[e("strong",[e("a",{attrs:{href:"https://raw.githubusercontent.com/PX4/Devguide/master/build_scripts/ubuntu_sim_ros_gazebo.sh",target:"_blank",download:""}},[t._v("ubuntu_sim_ros_gazebo.sh")])]),t._v(": "),e("strong",[t._v("ubuntu_sim_common_deps.sh")]),t._v(" + "),e("a",{attrs:{href:"#rosgazebo"}},[t._v("ROS/Gazebo and MAVROS")]),t._v(". ")]),t._v(" "),e("li",[t._v("Download the desired script"),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" ubuntu_sim_ros_melodic.sh\n")])])]),t._v("You may need to acknowledge some prompts as the script progresses.")])]),t._v(" "),e("p",[t._v('{% include "_gcc_toolchain_installation.md" %}')]),t._v(" "),e("ul",[e("li",[t._v("ROS Kinetic is installed with Gazebo7 by default (we have chosen to use the default rather than Gazebo 8 to simplify ROS development).")]),t._v(" "),e("li",[t._v("Your catkin (ROS build system) workspace is created at "),e("strong",[t._v("~/catkin_ws/")]),t._v(".")]),t._v(" "),e("li",[t._v("The instructions come from the ROS Wiki "),e("a",{attrs:{href:"http://wiki.ros.org/kinetic/Installation/Ubuntu",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ubuntu page"),e("OutboundLink")],1),t._v(".")])]),t._v(" "),e("h2",{attrs:{id:"snapdragon-flight"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#snapdragon-flight"}},[t._v("#")]),t._v(" Snapdragon Flight")]),t._v(" "),e("p",[t._v("After setting up the build/simulation toolchain, see "),e("RouterLink",{attrs:{to:"/ko/setup/generic_dev_tools.html"}},[t._v("Additional Tools")]),t._v(" for information about other useful tools.")],1),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/ko/flight_controller/snapdragon_flight_dev_environment_installation.html"}},[t._v("Development Environment")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/ko/flight_controller/snapdragon_flight_software_installation.html"}},[t._v("Software Installation")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/ko/flight_controller/snapdragon_flight_configuration.html"}},[t._v("Configuration")])],1)]),t._v(" "),e("p",[e("a",{attrs:{id:"fast_rtps"}})]),t._v(" "),e("h2",{attrs:{id:"fastrtps-installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fastrtps-installation"}},[t._v("#")]),t._v(" FastRTPS installation")]),t._v(" "),e("p",[e("a",{attrs:{href:"http://eprosima-fast-rtps.readthedocs.io/en/latest/",target:"_blank",rel:"noopener noreferrer"}},[t._v("eProsima Fast RTPS"),e("OutboundLink")],1),t._v(" is a C++ implementation of the RTPS (Real Time Publish Subscribe) protocol. FastRTPS is used, via the "),e("RouterLink",{attrs:{to:"/ko/middleware/micrortps.html"}},[t._v("RTPS/ROS2 Interface: PX4-FastRTPS Bridge")]),t._v(", to allow PX4 uORB topics to be shared with offboard components.")],1),t._v(" "),e("p",[t._v("Follow the instructions in "),e("RouterLink",{attrs:{to:"/ko/dev_setup/fast-rtps-installation.html"}},[t._v("Fast RTPS Installation")]),t._v(" to install it.")],1),t._v(" "),e("h2",{attrs:{id:"additional-tools"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#additional-tools"}},[t._v("#")]),t._v(" Additional Tools")]),t._v(" "),e("p",[t._v("After setting up the build/simulation toolchain, see "),e("RouterLink",{attrs:{to:"/ko/dev_setup/generic_dev_tools.html"}},[t._v("Additional Tools")]),t._v(" for information about other useful tools.")],1),t._v(" "),e("h2",{attrs:{id:"next-steps"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#next-steps"}},[t._v("#")]),t._v(" Next Steps")]),t._v(" "),e("p",[t._v("Once you have finished setting up the environment, continue to the "),e("RouterLink",{attrs:{to:"/ko/dev_setup/building_px4.html"}},[t._v("build instructions")]),t._v(".")],1)])}),[],!1,null,null,null);s.default=n.exports}}]);