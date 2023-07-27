(window.webpackJsonp=window.webpackJsonp||[]).push([[1395],{2585:function(t,a,s){"use strict";s.r(a);var e=s(19),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"우분투-개발-환경"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#우분투-개발-환경"}},[t._v("#")]),t._v(" 우분투 개발 환경")]),t._v(" "),s("p",[t._v("The following instructions set up a PX4 development environment on the "),s("a",{attrs:{href:"https://wiki.ubuntu.com/LTS",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ubuntu Linux LTS"),s("OutboundLink")],1),t._v(" versions supported by PX4. This includes: 18.04 (Bionic Beaver), 20.04 (Focal Fossa), and Ubuntu 22.04 (Jammy Jellyfish).")]),t._v(" "),s("p",[t._v("Bash scripts are provided to simplify the process. They are intended to be run on "),s("em",[t._v("clean")]),t._v(' Ubuntu LTS installations, and may not work if run "on top" of an existing system, or on a different Ubuntu release.')]),t._v(" "),s("p",[t._v("The "),s("RouterLink",{attrs:{to:"/ko/dev_setup/dev_env.html#supported-targets"}},[t._v("supported targets")]),t._v(" are:")],1),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#simulation-and-nuttx-pixhawk-targets"}},[t._v("Simulation and NuttX (Pixhawk) Targets")]),t._v(". This includes: "),s("RouterLink",{attrs:{to:"/ko/sim_gazebo_gz/"}},[t._v("Gazebo")]),t._v(", "),s("RouterLink",{attrs:{to:"/ko/sim_gazebo_classic/"}},[t._v("Gazebo Classic")]),t._v(", "),s("RouterLink",{attrs:{to:"/ko/simulation/jmavsim.html"}},[t._v("jMAVSim")]),t._v(", "),s("RouterLink",{attrs:{to:"/ko/dev_setup/building_px4.html#nuttx-pixhawk-based-boards"}},[t._v("Pixhawk and other NuttX-based hardware")]),t._v(").")],1),t._v(" "),s("li",[s("a",{attrs:{href:"#raspberry-pi"}},[t._v("라즈베리파이")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#ros-2"}},[t._v("ROS 2")]),t._v(" (Robotics Operating System)")]),t._v(" "),s("li",[s("a",{attrs:{href:"#ros-gazebo-classic"}},[t._v("ROS 1")]),t._v(" (Robotics Operating System)")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("이 설정은 PX4 개발 팀에서 지원합니다.\nThe instructions may also work on other Debian Linux based systems.")])]),t._v(" "),s("h2",{attrs:{id:"영상-가이드"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#영상-가이드"}},[t._v("#")]),t._v(" 영상 가이드")]),t._v(" "),s("p",[t._v("This video shows how to install the toolchain for NuttX and simulation targets ("),s("a",{attrs:{href:"#simulation-and-nuttx-pixhawk-targets"}},[t._v("as covered below")]),t._v(") along with the basic testing covered in "),s("RouterLink",{attrs:{to:"/ko/dev_setup/building_px4.html"}},[t._v("Building PX4 Software")]),t._v(".")],1),t._v(" "),s("p"),s("div",{staticClass:"embed-responsive embed-responsive-16by9"},[s("iframe",{staticClass:"embed-responsive-item youtube-player",attrs:{type:"text/html",width:"640",height:"390",src:"https://www.youtube.com/embed/OtValQdAdrU",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]),s("p"),t._v(" "),s("h2",{attrs:{id:"simulation-and-nuttx-pixhawk-targets"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#simulation-and-nuttx-pixhawk-targets"}},[t._v("#")]),t._v(" Simulation and NuttX (Pixhawk) Targets")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("ROS")]),t._v(" "),s("p",[t._v("users should first read/skip ahead to the "),s("a",{attrs:{href:"#rosgazebo"}},[t._v("ROS/Gazebo")]),t._v(" or "),s("a",{attrs:{href:"#ros-2"}},[t._v("ROS 2")]),t._v(" sections.")])]),t._v(" "),s("p",[t._v("Use the "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/Tools/setup/ubuntu.sh",target:"_blank",rel:"noopener noreferrer"}},[t._v("ubuntu.sh"),s("OutboundLink")],1),t._v(" script to set up a development environment that allows you to build for simulators and/or the "),s("RouterLink",{attrs:{to:"/ko/dev_setup/building_px4.html#nuttx-pixhawk-based-boards"}},[t._v("NuttX/Pixhawk")]),t._v(" toolchain. The script installs "),s("RouterLink",{attrs:{to:"/ko/simulation/jmavsim.html"}},[t._v("jMAVSim")]),t._v(" on all targets, "),s("RouterLink",{attrs:{to:"/ko/sim_gazebo_classic/"}},[t._v("Gazebo Classic")]),t._v(" 9 on Ubuntu 18.04, Gazebo Classic 11 on Ubuntu 20.04, and "),s("RouterLink",{attrs:{to:"/ko/sim_gazebo_gz/"}},[t._v("Gazebo")]),t._v(' "Garden" on Ubuntu 22.04.')],1),t._v(" "),s("p",[t._v("툴체인을 설치하려면:")]),t._v(" "),s("ol",[s("li",[s("p",[s("RouterLink",{attrs:{to:"/ko/dev_setup/building_px4.html"}},[t._v("PX4 소스 코드 다운로드합니다")]),t._v(":")],1),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/PX4/PX4-Autopilot.git --recursive\n")])])])])]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("The environment setup scripts in the source usually work for recent PX4 releases. If working with an older version of PX4 you may need to "),s("RouterLink",{attrs:{to:"/ko/contribute/git_examples.html#get-a-specific-release"}},[t._v("get the source code specific to your release")]),t._v(".")],1)]),t._v(" "),s("ol",[s("li",[t._v("인수 없이 (bash 셸에서) "),s("strong",[t._v("ubuntu.sh")]),t._v("를 실행합니다."),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" ./PX4-Autopilot/Tools/setup/ubuntu.sh\n")])])]),s("ul",[s("li",[t._v("스크립트가 진행되는 동안 모든 프롬프트를 확인합니다.")]),t._v(" "),s("li",[s("code",[t._v("--no-nuttx")]),t._v(" 및 "),s("code",[t._v("--no-sim-tools")]),t._v(" 옵션을 사용하여 NuttX 및/또는 시뮬레이션 도구를 생략할 수 있습니다.")])])]),t._v(" "),s("li",[t._v("완료되면 컴퓨터를 재부팅합니다.")])]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("DETAILS")]),t._v(" "),s("p",[t._v('Additional notes These notes are provided "for information only":')]),t._v(" "),s("ul",[s("li",[s("p",[t._v("If you want to use Gazebo on Ubuntu 20.04 you can add it manually. See "),s("RouterLink",{attrs:{to:"/ko/sim_gazebo_gz/#installation-ubuntu-linux"}},[t._v("Gazebo > Installation")]),t._v(".")],1)]),t._v(" "),s("li",[s("p",[t._v("다음과 같이 gcc 버전을 확인하여 NuttX 설치를 확인할 수 있습니다.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$arm")]),t._v("-none-eabi-gcc --version\n\narm-none-eabi-gcc "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("GNU Arm Embedded Toolchain "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v("-2020-q2-update"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9.3")]),t._v(".1 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20200408")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("release"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nCopyright "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("C"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2019")]),t._v(" Free Software Foundation, Inc.\nThis is "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("free")]),t._v(" software"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" see the "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" copying conditions.  There is NO\nwarranty"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" not even "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n")])])])]),t._v(" "),s("li",[s("p",[t._v("어쨌든 PX4 소스 코드가 필요합니다. 그러나 모든 소스 코드를 가져오지 않고 개발 환경을 설정하려는 경우 대신 "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/Tools/setup/ubuntu.sh",target:"_blank",rel:"noopener noreferrer"}},[t._v("ubuntu.sh"),s("OutboundLink")],1),t._v(" 및 "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/Tools/setup/requirements.txt",target:"_blank",rel:"noopener noreferrer"}},[t._v("requirements.txt"),s("OutboundLink")],1),t._v("를 다운로드한 다음 "),s("strong",[t._v("ubuntu.sh")]),t._v("를 실행할 수 있습니다.:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://raw.githubusercontent.com/PX4/PX4-Autopilot/master/Tools/setup/ubuntu.sh\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://raw.githubusercontent.com/PX4/PX4-Autopilot/master/Tools/setup/requirements.txt\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" ubuntu.sh\n")])])])])])]),t._v(" "),s("p",[s("a",{attrs:{id:"raspberry-pi-hardware"}})]),t._v(" "),s("h2",{attrs:{id:"라즈베리파이"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#라즈베리파이"}},[t._v("#")]),t._v(" 라즈베리파이")]),t._v(" "),s("p",[t._v("다음 지침은 "),s("em",[t._v("Ubuntu 18.04")]),t._v("에서 라즈베리파이용 빌드 도구 설정 방법을 설명합니다.")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("Ubuntu 20.04(focal)용으로 빌드하려면 docker를 사용하여야 합니다(Ubuntu 20.04의 GCC 도구 체인은 PX4를 빌드할 수 있지만 생성된 바이너리 파일은 실제 라즈베리파이에서 실행하기에는 너무 새롭습니다). 자세한 내용은 "),s("RouterLink",{attrs:{to:"/ko/flight_controller/raspberry_pi_pilotpi_rpios.html#alternative-build-method-using-docker"}},[t._v("PilotPi with Raspberry Pi OS 개발자 빠른 시작 > docker를 사용한 대체 빌드 방법")]),t._v("을 참고하십시오.")],1)]),t._v(" "),s("p",[t._v("라즈베리파이에 대한 공통 종속성을 얻으려면:")]),t._v(" "),s("ol",[s("li",[t._v("PX4 소스 저장소의 "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/Tools/setup/requirements.txt",target:"_blank",rel:"noopener noreferrer"}},[t._v("requirements.txt"),s("OutboundLink")],1),t._v(" ("),s("strong",[t._v("/Tools/setup/")]),t._v(")를 다운로드합니다. "),t._v(" "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/Tools/setup/ubuntu.sh",target:"_blank",rel:"noopener noreferrer"}},[t._v("ubuntu.sh"),s("OutboundLink")],1),t._v("와  "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("wget https://raw.githubusercontent.com/PX4/PX4-Autopilot/master/Tools/setup/ubuntu.sh\nwget https://raw.githubusercontent.com/PX4/PX4-Autopilot/master/Tools/setup/requirements.txt\n")])])])]),t._v(" "),s("li",[t._v("터미널에서 "),s("strong",[t._v("ubuntu.sh")]),t._v("를 실행하여 공통 종속성만 가져옵니다."),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" ubuntu.sh --no-nuttx --no-sim-tools\n")])])])]),t._v(" "),s("li",[t._v("그런 다음 다음 섹션에 설명된 대로 크로스 컴파일러(GCC 또는 clang)를 설정합니다.")])]),t._v(" "),s("h3",{attrs:{id:"gcc-armhf"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gcc-armhf"}},[t._v("#")]),t._v(" GCC (armhf)")]),t._v(" "),s("p",[t._v("Ubuntu 소프트웨어 리포지토리는 미리 컴파일된 도구 모음 세트를 제공합니다. Ubuntu Focal은 완전히 지원되지 않는 기본 설치로 "),s("code",[t._v("gcc-9-arm-linux-gnueabihf")]),t._v("를 제공하므로 "),s("code",[t._v("gcc-8-arm-linux-gnueabihf를 수동으로 설치")]),t._v("하고, 기본 도구 모음으로 설정합니다. 이 가이드는 이전 Ubuntu 릴리스(Bionic)에도 적용됩니다. 다음 지침에서는 arm-linux-gnueabihf 버전을 설치하지 않았다고 가정하고, "),s("code",[t._v("update-alternatives")]),t._v("를 사용하여 기본 실행 파일을 설정합니다. 터미널 명령을 사용하여 설치합니다.")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y gcc-8-arm-linux-gnueabihf g++-8-arm-linux-gnueabihf\n")])])]),s("p",[t._v("기본값으로 설정합니다.")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" update-alternatives --install /usr/bin/arm-linux-gnueabihf-gcc arm-linux-gnueabihf-gcc /usr/bin/arm-linux-gnueabihf-8 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" --slave /usr/bin/arm-linux-gnueabihf-g++ arm-linux-gnueabihf-g++ /usr/bin/arm-linux-gnueabihf-g++-8\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" update-alternatives --config arm-linux-gnueabihf-gcc\n")])])]),s("h3",{attrs:{id:"gcc-aarch64"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gcc-aarch64"}},[t._v("#")]),t._v(" GCC (aarch64)")]),t._v(" "),s("p",[t._v("ARM64 장치용 PX4를 빌드하려면 이 섹션이 필요합니다.")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y gcc-8-aarch64-linux-gnu g++-8-aarch64-linux-gnu\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" update-alternatives --install /usr/bin/aarch64-linux-gnu-gcc aarch64-linux-gnu-gcc /usr/bin/aarch64-linux-gnu-gcc-8 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" --slave /usr/bin/aarch64-linux-gnu-g++ aarch64-linux-gnu-g++ /usr/bin/aarch64-linux-gnu-g++-8\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" update-alternatives --config aarch64-linux-gnu-gcc\n")])])]),s("h3",{attrs:{id:"clang-선택-사항"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#clang-선택-사항"}},[t._v("#")]),t._v(" Clang (선택 사항)")]),t._v(" "),s("p",[t._v("먼저 GCC를 설치합니다(clang을 사용하여야 함).")]),t._v(" "),s("p",[t._v("아래와 같이 Ubuntu 소프트웨어 리포지토리에서 clang을 가져오는 것이 좋습니다.")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("sudo apt-get install clang\n")])])]),s("p",[t._v("아래는 "),s("em",[t._v("CMake")]),t._v("를 사용하여 트리에서 PX4 펌웨어를 빌드하는 예제입니다.")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("PATH")]),t._v("-TO-PX4-SRC"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" build/px4_raspberrypi_default_clang\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" build/px4_raspberrypi_default_clang\ncmake "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-G"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Unix Makefiles"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-DCONFIG"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("px4_raspberrypi_default "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-UCMAKE_C_COMPILER "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-DCMAKE_C_COMPILER"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("clang "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-UCMAKE_CXX_COMPILER "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-DCMAKE_CXX_COMPILER"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("clang++ "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v("\n")])])]),s("h3",{attrs:{id:"상세-정보"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#상세-정보"}},[t._v("#")]),t._v(" 상세 정보")]),t._v(" "),s("p",[t._v("라즈베리파이에서 PX4를 개발 정보(PX4 기본 빌드 포함)는 다음을 참고하십시오.")]),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/ko/flight_controller/raspberry_pi_navio2.html"}},[t._v("Raspberry Pi 2/3 Navio2 Autopilot")]),t._v(".")],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/ko/flight_controller/raspberry_pi_pilotpi.html"}},[t._v("Raspberry Pi 2/3/4 PilotPi Shield")]),t._v(".")],1)]),t._v(" "),s("h2",{attrs:{id:"ros-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ros-2"}},[t._v("#")]),t._v(" ROS 2")]),t._v(" "),s("p",[t._v("Information about ROS 2 setup and development with PX4 can be found in the "),s("RouterLink",{attrs:{to:"/ko/ros/ros2_comm.html"}},[t._v("ROS 2 User Guide")]),t._v(".")],1),t._v(" "),s("p",[t._v("Generally speaking if you're working with hardware and don't need to modify PX4 itself, then you do not need a PX4 development environment (dependencies for working with ROS 2 are included and built into PX4 firmware by default).")]),t._v(" "),s("p",[t._v("You will need to install the normal development "),s("a",{attrs:{href:"#simulation-and-nuttx-pixhawk-targets"}},[t._v("simulator environment")]),t._v(" in order to work with the PX4 simulator.")]),t._v(" "),s("p",[s("a",{attrs:{id:"rosgazebo"}})]),t._v(" "),s("h2",{attrs:{id:"ros-gazebo-classic"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ros-gazebo-classic"}},[t._v("#")]),t._v(" ROS/Gazebo Classic")]),t._v(" "),s("p",[t._v("This section explains how to install "),s("RouterLink",{attrs:{to:"/ko/ros/"}},[t._v("ROS 1")]),t._v(" with PX4. ROS 1 full desktop builds come with Gazebo Classic, so normally you will not install PX4 simulator dependencies yourself!")],1),t._v(" "),s("h3",{attrs:{id:"ros-noetic-ubuntu-20-04"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ros-noetic-ubuntu-20-04"}},[t._v("#")]),t._v(" ROS Noetic/Ubuntu 20.04")]),t._v(" "),s("p",[t._v("If you're working with "),s("a",{attrs:{href:"http://wiki.ros.org/noetic",target:"_blank",rel:"noopener noreferrer"}},[t._v("ROS Noetic"),s("OutboundLink")],1),t._v(" on Ubuntu 20.04:")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Install PX4 without the simulator toolchain:")]),t._v(" "),s("ol",[s("li",[s("p",[s("RouterLink",{attrs:{to:"/ko/dev_setup/building_px4.html"}},[t._v("PX4 소스 코드 다운로드합니다")]),t._v(":")],1),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/PX4/PX4-Autopilot.git --recursive\n")])])])]),t._v(" "),s("li",[s("p",[t._v("Run the "),s("strong",[t._v("ubuntu.sh")]),t._v(" the "),s("code",[t._v("--no-sim-tools")]),t._v(" (and optionally "),s("code",[t._v("--no-nuttx")]),t._v("):")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" ./PX4-Autopilot/Tools/setup/ubuntu.sh --no-sim-tools --no-nuttx\n")])])]),s("ul",[s("li",[t._v("스크립트가 진행되는 동안 모든 프롬프트를 확인합니다.")])])]),t._v(" "),s("li",[s("p",[t._v("완료되면 컴퓨터를 재부팅합니다.")])])])]),t._v(" "),s("li",[s("p",[t._v("You "),s("em",[t._v("may")]),t._v(" need to install the following additional dependencies:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("sudo apt-get install protobuf-compiler libeigen3-dev libopencv-dev -y\n")])])])]),t._v(" "),s("li",[s("p",[t._v("Follow the "),s("a",{attrs:{href:"http://wiki.ros.org/noetic/Installation/Ubuntu#Installation",target:"_blank",rel:"noopener noreferrer"}},[t._v("Noetic Installation instructions"),s("OutboundLink")],1),t._v(" (ros-noetic-desktop-full is recommended).")])]),t._v(" "),s("li",[s("p",[t._v("Intall MAVROS by following the "),s("RouterLink",{attrs:{to:"/ko/ros/mavros_installation.html"}},[t._v("MAVROS Installation Guide")]),t._v(".")],1)])]),t._v(" "),s("h3",{attrs:{id:"ros-melodic-ubuntu-18-04"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ros-melodic-ubuntu-18-04"}},[t._v("#")]),t._v(" ROS Melodic/Ubuntu 18.04")]),t._v(" "),s("p",[t._v("If you're working with ROS \"Melodic on Ubuntu 18.04:")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Download the "),s("a",{attrs:{href:"https://raw.githubusercontent.com/PX4/Devguide/master/build_scripts/ubuntu_sim_ros_melodic.sh",target:"_blank",rel:"noopener noreferrer"}},[t._v("ubuntu_sim_ros_melodic.sh"),s("OutboundLink")],1),t._v(" script in a bash shell:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://raw.githubusercontent.com/PX4/Devguide/master/build_scripts/ubuntu_sim_ros_melodic.sh\n")])])])]),t._v(" "),s("li",[s("p",[t._v("스크립트를 실행하십시오:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" ubuntu_sim_ros_melodic.sh\n")])])]),s("p",[t._v("스크립트가 진행되는 동안 일부 프롬프트를 확인하여야 합니다.")])])]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("ul",[s("li",[t._v("ROS Melodic is installed with Gazebo (Classic) 9 by default.")]),t._v(" "),s("li",[t._v("catkin(ROS 빌드 시스템) 작업 공간은 **~/catkin_ws/**에 생성됩니다.")]),t._v(" "),s("li",[t._v('스크립트는 ROS Wiki "Melodic" '),s("a",{attrs:{href:"http://wiki.ros.org/melodic/Installation/Ubuntu",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ubuntu 페이지"),s("OutboundLink")],1),t._v("의 지침을 사용합니다.")])])]),t._v(" "),s("h2",{attrs:{id:"다음-단계"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#다음-단계"}},[t._v("#")]),t._v(" 다음 단계")]),t._v(" "),s("p",[t._v("명령줄 도구 모음 설정후, 다음을 수행합니다.")]),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/ko/dev_setup/vscode.html"}},[t._v("VSCode")]),t._v("를 설치합니다(명령줄에 IDE 사용을 선호하는 경우).")],1),t._v(" "),s("li",[t._v("Install the "),s("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/releases/daily_builds.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGroundControl Daily Build"),s("OutboundLink")],1),t._v(" :::tip The "),s("em",[t._v("daily build")]),t._v(" includes development tools that hidden in release builds. 또한, 릴리스 빌드에서 아직 지원되지 않는 새로운 PX4 기능에 대한 액세스를 제공할 수도 있습니다.\n:::")]),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/ko/dev_setup/building_px4.html"}},[t._v("빌드 지침")]),t._v("을 계속 진행합니다.")],1)])])}),[],!1,null,null,null);a.default=n.exports}}]);