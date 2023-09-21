(window.webpackJsonp=window.webpackJsonp||[]).push([[997],{1908:function(t,e,s){"use strict";s.r(e);var a=s(19),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"ubuntu-development-environment"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-development-environment"}},[t._v("#")]),t._v(" Ubuntu Development Environment")]),t._v(" "),s("p",[t._v("The following instructions set up a PX4 development environment on the "),s("a",{attrs:{href:"https://wiki.ubuntu.com/LTS",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ubuntu Linux LTS"),s("OutboundLink")],1),t._v(" versions supported by PX4.\nThis includes: 18.04 (Bionic Beaver), 20.04 (Focal Fossa), and Ubuntu 22.04 (Jammy Jellyfish).")]),t._v(" "),s("p",[t._v("Bash scripts are provided to simplify the process.\nThey are intended to be run on "),s("em",[t._v("clean")]),t._v(' Ubuntu LTS installations, and may not work if run "on top" of an existing system, or on a different Ubuntu release.')]),t._v(" "),s("p",[t._v("The "),s("RouterLink",{attrs:{to:"/en/dev_setup/dev_env.html#supported-targets"}},[t._v("supported targets")]),t._v(" are:")],1),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#simulation-and-nuttx-pixhawk-targets"}},[t._v("Simulation and NuttX (Pixhawk) Targets")]),t._v(". This includes: "),s("RouterLink",{attrs:{to:"/en/sim_gazebo_gz/"}},[t._v("Gazebo")]),t._v(", "),s("RouterLink",{attrs:{to:"/en/sim_gazebo_classic/"}},[t._v("Gazebo Classic")]),t._v(", "),s("RouterLink",{attrs:{to:"/en/simulation/jmavsim.html"}},[t._v("jMAVSim")]),t._v(", "),s("RouterLink",{attrs:{to:"/en/dev_setup/building_px4.html#nuttx-pixhawk-based-boards"}},[t._v("Pixhawk and other NuttX-based hardware")]),t._v(").")],1),t._v(" "),s("li",[s("a",{attrs:{href:"#raspberry-pi"}},[t._v("Raspberry Pi")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#ros-2"}},[t._v("ROS 2")]),t._v(" (Robotics Operating System)")]),t._v(" "),s("li",[s("a",{attrs:{href:"#ros-gazebo-classic"}},[t._v("ROS 1")]),t._v(" (Robotics Operating System)")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("This setup is supported by the PX4 dev team.\nThe instructions may also work on other Debian Linux based systems.")])]),t._v(" "),s("h2",{attrs:{id:"video-guide"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#video-guide"}},[t._v("#")]),t._v(" Video Guide")]),t._v(" "),s("p",[t._v("This video shows how to install the toolchain for NuttX and simulation targets ("),s("a",{attrs:{href:"#simulation-and-nuttx-pixhawk-targets"}},[t._v("as covered below")]),t._v(") along with the basic testing covered in "),s("RouterLink",{attrs:{to:"/en/dev_setup/building_px4.html"}},[t._v("Building PX4 Software")]),t._v(".")],1),t._v(" "),s("p"),s("div",{staticClass:"embed-responsive embed-responsive-16by9"},[s("iframe",{staticClass:"embed-responsive-item youtube-player",attrs:{type:"text/html",width:"640",height:"390",src:"https://www.youtube.com/embed/OtValQdAdrU",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]),s("p"),t._v(" "),s("h2",{attrs:{id:"simulation-and-nuttx-pixhawk-targets"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#simulation-and-nuttx-pixhawk-targets"}},[t._v("#")]),t._v(" Simulation and NuttX (Pixhawk) Targets")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("ROS users should first read/skip ahead to the "),s("a",{attrs:{href:"#rosgazebo"}},[t._v("ROS/Gazebo")]),t._v(" or "),s("a",{attrs:{href:"#ros-2"}},[t._v("ROS 2")]),t._v(" sections.")])]),t._v(" "),s("p",[t._v("Use the "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/Tools/setup/ubuntu.sh",target:"_blank",rel:"noopener noreferrer"}},[t._v("ubuntu.sh"),s("OutboundLink")],1),t._v(" script to set up a development environment that allows you to build for simulators and/or the "),s("RouterLink",{attrs:{to:"/en/dev_setup/building_px4.html#nuttx-pixhawk-based-boards"}},[t._v("NuttX/Pixhawk")]),t._v(" toolchain.\nThe script installs "),s("RouterLink",{attrs:{to:"/en/simulation/jmavsim.html"}},[t._v("jMAVSim")]),t._v(" on all targets, "),s("RouterLink",{attrs:{to:"/en/sim_gazebo_classic/"}},[t._v("Gazebo Classic")]),t._v(" 9 on Ubuntu 18.04, Gazebo Classic 11 on Ubuntu 20.04, and "),s("RouterLink",{attrs:{to:"/en/sim_gazebo_gz/"}},[t._v("Gazebo")]),t._v(' "Garden" on Ubuntu 22.04.')],1),t._v(" "),s("p",[t._v("To install the toolchain:")]),t._v(" "),s("ol",[s("li",[s("p",[s("RouterLink",{attrs:{to:"/en/dev_setup/building_px4.html"}},[t._v("Download PX4 Source Code")]),t._v(":")],1),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/PX4/PX4-Autopilot.git --recursive\n")])])]),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("The environment setup scripts in the source usually work for recent PX4 releases.\nIf working with an older version of PX4 you may need to "),s("RouterLink",{attrs:{to:"/en/contribute/git_examples.html#get-a-specific-release"}},[t._v("get the source code specific to your release")]),t._v(".")],1)])]),t._v(" "),s("li",[s("p",[t._v("Run the "),s("strong",[t._v("ubuntu.sh")]),t._v(" with no arguments (in a bash shell) to install everything:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" ./PX4-Autopilot/Tools/setup/ubuntu.sh\n")])])]),s("ul",[s("li",[t._v("Acknowledge any prompts as the script progress.")]),t._v(" "),s("li",[t._v("You can use the "),s("code",[t._v("--no-nuttx")]),t._v(" and "),s("code",[t._v("--no-sim-tools")]),t._v(" options to omit the NuttX and/or simulation tools.")])])]),t._v(" "),s("li",[s("p",[t._v("Restart the computer on completion.")])])]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("Additional notes")]),t._v(" "),s("p",[t._v('These notes are provided "for information only":')]),t._v(" "),s("ul",[s("li",[s("p",[t._v("If you want to use Gazebo on Ubuntu 20.04 you can add it manually.\nSee "),s("RouterLink",{attrs:{to:"/en/sim_gazebo_gz/#installation-ubuntu-linux"}},[t._v("Gazebo > Installation")]),t._v(".")],1)]),t._v(" "),s("li",[s("p",[t._v("You can verify the NuttX installation by confirming the gcc version as shown:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$arm")]),t._v("-none-eabi-gcc --version\n\narm-none-eabi-gcc "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("GNU Arm Embedded Toolchain "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v("-2020-q2-update"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9.3")]),t._v(".1 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20200408")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("release"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nCopyright "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("C"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2019")]),t._v(" Free Software Foundation, Inc.\nThis is "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("free")]),t._v(" software"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" see the "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" copying conditions.  There is NO\nwarranty"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" not even "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n")])])])]),t._v(" "),s("li",[s("p",[t._v("You're going to need the PX4 source code anyway.\nBut if you just wanted to set up the development environment without getting all the source code you could instead just download "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/Tools/setup/ubuntu.sh",target:"_blank",rel:"noopener noreferrer"}},[t._v("ubuntu.sh"),s("OutboundLink")],1),t._v(" and "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/Tools/setup/requirements.txt",target:"_blank",rel:"noopener noreferrer"}},[t._v("requirements.txt"),s("OutboundLink")],1),t._v(" and then run "),s("strong",[t._v("ubuntu.sh")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://raw.githubusercontent.com/PX4/PX4-Autopilot/main/Tools/setup/ubuntu.sh\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://raw.githubusercontent.com/PX4/PX4-Autopilot/main/Tools/setup/requirements.txt\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" ubuntu.sh\n")])])])])])]),t._v(" "),s("p",[s("a",{attrs:{id:"raspberry-pi-hardware"}})]),t._v(" "),s("h2",{attrs:{id:"raspberry-pi"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#raspberry-pi"}},[t._v("#")]),t._v(" Raspberry Pi")]),t._v(" "),s("p",[t._v("The following instructions explain how to set up a build toolchain for RasPi on "),s("em",[t._v("Ubuntu 18.04")]),t._v(".")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("To build for Ubuntu 20.04 (focal) you must use docker (the GCC toolchain on Ubuntu 20.04 can build PX4, but the generated binary files are too new to run on actual Pi).\nFor more information see "),s("RouterLink",{attrs:{to:"/en/flight_controller/raspberry_pi_pilotpi_rpios.html#alternative-build-method-using-docker"}},[t._v("PilotPi with Raspberry Pi OS Developer Quick Start > Alternative build method using docker")]),t._v(".")],1)]),t._v(" "),s("p",[t._v("To get the common dependencies for Raspberry Pi:")]),t._v(" "),s("ol",[s("li",[t._v("Download "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/Tools/setup/ubuntu.sh",target:"_blank",rel:"noopener noreferrer"}},[t._v("ubuntu.sh"),s("OutboundLink")],1),t._v(" "),t._v(" and "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/Tools/setup/requirements.txt",target:"_blank",rel:"noopener noreferrer"}},[t._v("requirements.txt"),s("OutboundLink")],1),t._v(" from the PX4 source repository ("),s("strong",[t._v("/Tools/setup/")]),t._v("):  "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("wget https://raw.githubusercontent.com/PX4/PX4-Autopilot/main/Tools/setup/ubuntu.sh\nwget https://raw.githubusercontent.com/PX4/PX4-Autopilot/main/Tools/setup/requirements.txt\n")])])])]),t._v(" "),s("li",[t._v("Run "),s("strong",[t._v("ubuntu.sh")]),t._v(" in a terminal to get just the common dependencies:"),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" ubuntu.sh --no-nuttx --no-sim-tools\n")])])])]),t._v(" "),s("li",[t._v("Then setup an cross-compiler (either GCC or clang) as described in the following sections.")])]),t._v(" "),s("h3",{attrs:{id:"gcc-armhf"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gcc-armhf"}},[t._v("#")]),t._v(" GCC (armhf)")]),t._v(" "),s("p",[t._v("Ubuntu software repository provides a set of pre-compiled toolchains. Note that Ubuntu Focal comes up with "),s("code",[t._v("gcc-9-arm-linux-gnueabihf")]),t._v(" as its default installation which is not fully supported, so we must manually install "),s("code",[t._v("gcc-8-arm-linux-gnueabihf")]),t._v(" and set it as the default toolchain. This guide also applies to earlier Ubuntu releases (Bionic).\nThe following instruction assumes you haven't installed any version of arm-linux-gnueabihf, and will set up the default executable with "),s("code",[t._v("update-alternatives")]),t._v(".\nInstall them with the terminal command:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y gcc-8-arm-linux-gnueabihf g++-8-arm-linux-gnueabihf\n")])])]),s("p",[t._v("Set them as default:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" update-alternatives --install /usr/bin/arm-linux-gnueabihf-gcc arm-linux-gnueabihf-gcc /usr/bin/arm-linux-gnueabihf-gcc-8 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" --slave /usr/bin/arm-linux-gnueabihf-g++ arm-linux-gnueabihf-g++ /usr/bin/arm-linux-gnueabihf-g++-8\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" update-alternatives --config arm-linux-gnueabihf-gcc\n")])])]),s("h3",{attrs:{id:"gcc-aarch64"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gcc-aarch64"}},[t._v("#")]),t._v(" GCC (aarch64)")]),t._v(" "),s("p",[t._v("If you want to build PX4 for ARM64 devices, this section is required.")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y gcc-8-aarch64-linux-gnu g++-8-aarch64-linux-gnu\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" update-alternatives --install /usr/bin/aarch64-linux-gnu-gcc aarch64-linux-gnu-gcc /usr/bin/aarch64-linux-gnu-gcc-8 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" --slave /usr/bin/aarch64-linux-gnu-g++ aarch64-linux-gnu-g++ /usr/bin/aarch64-linux-gnu-g++-8\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" update-alternatives --config aarch64-linux-gnu-gcc\n")])])]),s("h3",{attrs:{id:"clang-optional"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#clang-optional"}},[t._v("#")]),t._v(" Clang (optional)")]),t._v(" "),s("p",[t._v("First install GCC (needed to use clang).")]),t._v(" "),s("p",[t._v("We recommend you to get clang from the Ubuntu software repository, as shown below:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("sudo apt-get install clang\n")])])]),s("p",[t._v("Example below for building PX4 firmware out of tree, using "),s("em",[t._v("CMake")]),t._v(".")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("PATH")]),t._v("-TO-PX4-SRC"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" build/px4_raspberrypi_default_clang\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" build/px4_raspberrypi_default_clang\ncmake "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-G"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Unix Makefiles"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-DCONFIG"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("px4_raspberrypi_default "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-UCMAKE_C_COMPILER "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-DCMAKE_C_COMPILER"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("clang "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-UCMAKE_CXX_COMPILER "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-DCMAKE_CXX_COMPILER"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("clang++ "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v("\n")])])]),s("h3",{attrs:{id:"detailed-information"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#detailed-information"}},[t._v("#")]),t._v(" Detailed Information")]),t._v(" "),s("p",[t._v("Additional developer information for using PX4 on Raspberry Pi (including building PX4 natively) can be found here:")]),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/en/flight_controller/raspberry_pi_navio2.html"}},[t._v("Raspberry Pi 2/3 Navio2 Autopilot")]),t._v(".")],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/en/flight_controller/raspberry_pi_pilotpi.html"}},[t._v("Raspberry Pi 2/3/4 PilotPi Shield")]),t._v(".")],1)]),t._v(" "),s("h2",{attrs:{id:"ros-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ros-2"}},[t._v("#")]),t._v(" ROS 2")]),t._v(" "),s("p",[t._v("Information about ROS 2 setup and development with PX4 can be found in the "),s("RouterLink",{attrs:{to:"/en/ros/ros2_comm.html"}},[t._v("ROS 2 User Guide")]),t._v(".")],1),t._v(" "),s("p",[t._v("Generally speaking if you're working with hardware and don't need to modify PX4 itself, then you do not need a PX4 development environment (dependencies for working with ROS 2 are included and built into PX4 firmware by default).")]),t._v(" "),s("p",[t._v("You will need to install the normal development "),s("a",{attrs:{href:"#simulation-and-nuttx-pixhawk-targets"}},[t._v("simulator environment")]),t._v(" in order to work with the PX4 simulator.")]),t._v(" "),s("p",[s("a",{attrs:{id:"rosgazebo"}})]),t._v(" "),s("h2",{attrs:{id:"ros-gazebo-classic"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ros-gazebo-classic"}},[t._v("#")]),t._v(" ROS/Gazebo Classic")]),t._v(" "),s("p",[t._v("This section explains how to install "),s("RouterLink",{attrs:{to:"/en/ros/"}},[t._v("ROS 1")]),t._v(" with PX4.\nROS 1 full desktop builds come with Gazebo Classic, so normally you will not install PX4 simulator dependencies yourself!")],1),t._v(" "),s("h3",{attrs:{id:"ros-noetic-ubuntu-20-04"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ros-noetic-ubuntu-20-04"}},[t._v("#")]),t._v(" ROS Noetic/Ubuntu 20.04")]),t._v(" "),s("p",[t._v("If you're working with "),s("a",{attrs:{href:"http://wiki.ros.org/noetic",target:"_blank",rel:"noopener noreferrer"}},[t._v("ROS Noetic"),s("OutboundLink")],1),t._v(" on Ubuntu 20.04:")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Install PX4 without the simulator toolchain:")]),t._v(" "),s("ol",[s("li",[s("p",[s("RouterLink",{attrs:{to:"/en/dev_setup/building_px4.html"}},[t._v("Download PX4 Source Code")]),t._v(":")],1),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/PX4/PX4-Autopilot.git --recursive\n")])])])]),t._v(" "),s("li",[s("p",[t._v("Run the "),s("strong",[t._v("ubuntu.sh")]),t._v(" the "),s("code",[t._v("--no-sim-tools")]),t._v(" (and optionally "),s("code",[t._v("--no-nuttx")]),t._v("):")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" ./PX4-Autopilot/Tools/setup/ubuntu.sh --no-sim-tools --no-nuttx\n")])])]),s("ul",[s("li",[t._v("Acknowledge any prompts as the script progress.")])])]),t._v(" "),s("li",[s("p",[t._v("Restart the computer on completion.")])])])]),t._v(" "),s("li",[s("p",[t._v("You "),s("em",[t._v("may")]),t._v(" need to install the following additional dependencies:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("sudo apt-get install protobuf-compiler libeigen3-dev libopencv-dev -y\n")])])])]),t._v(" "),s("li",[s("p",[t._v("Follow the "),s("a",{attrs:{href:"http://wiki.ros.org/noetic/Installation/Ubuntu#Installation",target:"_blank",rel:"noopener noreferrer"}},[t._v("Noetic Installation instructions"),s("OutboundLink")],1),t._v(" (ros-noetic-desktop-full is recommended).")])]),t._v(" "),s("li",[s("p",[t._v("Intall MAVROS by following the "),s("RouterLink",{attrs:{to:"/en/ros/mavros_installation.html"}},[t._v("MAVROS Installation Guide")]),t._v(".")],1)])]),t._v(" "),s("h3",{attrs:{id:"ros-melodic-ubuntu-18-04"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ros-melodic-ubuntu-18-04"}},[t._v("#")]),t._v(" ROS Melodic/Ubuntu 18.04")]),t._v(" "),s("p",[t._v("If you're working with ROS \"Melodic on Ubuntu 18.04:")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Download the "),s("a",{attrs:{href:"https://raw.githubusercontent.com/PX4/Devguide/master/build_scripts/ubuntu_sim_ros_melodic.sh",target:"_blank",rel:"noopener noreferrer"}},[t._v("ubuntu_sim_ros_melodic.sh"),s("OutboundLink")],1),t._v(" script in a bash shell:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://raw.githubusercontent.com/PX4/Devguide/master/build_scripts/ubuntu_sim_ros_melodic.sh\n")])])])]),t._v(" "),s("li",[s("p",[t._v("Run the script:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" ubuntu_sim_ros_melodic.sh\n")])])]),s("p",[t._v("You may need to acknowledge some prompts as the script progresses.")])])]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("ul",[s("li",[t._v("ROS Melodic is installed with Gazebo (Classic) 9 by default.")]),t._v(" "),s("li",[t._v("Your catkin (ROS build system) workspace is created at "),s("strong",[t._v("~/catkin_ws/")]),t._v(".")]),t._v(" "),s("li",[t._v('The script uses instructions from the ROS Wiki "Melodic" '),s("a",{attrs:{href:"http://wiki.ros.org/melodic/Installation/Ubuntu",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ubuntu page"),s("OutboundLink")],1),t._v(".")])])]),t._v(" "),s("h2",{attrs:{id:"next-steps"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#next-steps"}},[t._v("#")]),t._v(" Next Steps")]),t._v(" "),s("p",[t._v("Once you have finished setting up the command-line toolchain:")]),t._v(" "),s("ul",[s("li",[t._v("Install "),s("RouterLink",{attrs:{to:"/en/dev_setup/vscode.html"}},[t._v("VSCode")]),t._v(" (if you prefer using an IDE to the command line).")],1),t._v(" "),s("li",[t._v("Install the "),s("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/releases/daily_builds.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGroundControl Daily Build"),s("OutboundLink")],1),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("The "),s("em",[t._v("daily build")]),t._v(" includes development tools that hidden in release builds.\nIt may also provide access to new PX4 features that are not yet supported in release builds.")])])]),t._v(" "),s("li",[t._v("Continue to the "),s("RouterLink",{attrs:{to:"/en/dev_setup/building_px4.html"}},[t._v("build instructions")]),t._v(".")],1)])])}),[],!1,null,null,null);e.default=n.exports}}]);