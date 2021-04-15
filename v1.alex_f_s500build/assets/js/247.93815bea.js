(window.webpackJsonp=window.webpackJsonp||[]).push([[247],{2001:function(t,e,a){"use strict";a.r(e);var s=a(18),o=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"px4-소프트웨어-제작"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#px4-소프트웨어-제작"}},[t._v("#")]),t._v(" PX4 소프트웨어 제작")]),t._v(" "),s("p",[t._v("PX4는 시뮬레이션된 대상과 하드웨어 대상 모두에 대해 콘솔이나 IDE에서 개발될 수 있습니다.")]),t._v(" "),s("p",[t._v("PX4 소스 코드는 "),s("a",{attrs:{href:"https://github.com/PX4/Firmware",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4 / Firmware"),s("OutboundLink")],1),t._v(" 저장소의 Github에 저장됩니다. 이 저장소를 Github 계정과 연결된 복사본을 "),s("a",{attrs:{href:"https://help.github.com/articles/fork-a-repo/",target:"_blank",rel:"noopener noreferrer"}},[t._v("만들어"),s("OutboundLink")],1),t._v(", 이 원본을 로컬 컴퓨터에 "),s("a",{attrs:{href:"https://help.github.com/articles/cloning-a-repository/",target:"_blank",rel:"noopener noreferrer"}},[t._v("복제"),s("OutboundLink")],1),t._v("하는 것이 좋습니다.")]),t._v(" "),s("p",[t._v("For the first build we'll build for a simulated target using a console environment.\n:::")]),t._v(" "),s("h2",{attrs:{id:"px4-소스-코드-다운로드하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#px4-소스-코드-다운로드하기"}},[t._v("#")]),t._v(" PX4 소스 코드 다운로드하기")]),t._v(" "),s("p",[t._v("The PX4 source code is stored on Github in the "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4/PX4-Autopilot"),s("OutboundLink")],1),t._v(" repository. To get the "),s("em",[t._v("very latest")]),t._v(" version onto your computer, enter the following command into a terminal:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/PX4/Firmware.git\n")])])]),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("This is all you need to do just to build the latest code. "),s("RouterLink",{attrs:{to:"/ko/contribute/git_examples.html#contributing_code"}},[t._v("GIT Examples > Contributing code to PX4")]),t._v(" provides a lot more information about using git to contribute to PX4.")],1)]),t._v(" "),s("h2",{attrs:{id:"first-build-using-the-jmavsim-simulator"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#first-build-using-the-jmavsim-simulator"}},[t._v("#")]),t._v(" First Build (Using the jMAVSim Simulator)")]),t._v(" "),s("p",[t._v("First we'll build a simulated target using a console environment. This allows us to validate the system setup before moving on to real hardware and an IDE.")]),t._v(" "),s("p",[t._v("Navigate into the "),s("strong",[t._v("PX4-Autopilot")]),t._v(" directory and start "),s("RouterLink",{attrs:{to:"/ko/simulation/jmavsim.html"}},[t._v("jMAVSim")]),t._v(" using the following command:")],1),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl jmavsim\n")])])]),s("p",[t._v("This will bring up the PX4 console below:")]),t._v(" "),s("p",[s("img",{attrs:{src:a(675),alt:"PX4 Console (jMAVSim)"}})]),t._v(" "),s("p",[t._v("The drone can be flown by typing:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("pxh"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" commander takeoff\n")])])]),s("p",[s("img",{attrs:{src:a(676),alt:"jMAVSim UI"}})]),t._v(" "),s("p",[t._v("To build for NuttX- or Pixhawk- based boards, navigate into the "),s("strong",[t._v("Firmware")]),t._v(" directory and then call "),s("code",[t._v("make")]),t._v(" with the build target for your board.")]),t._v(" "),s("p",[t._v("Flying the simulation with the ground control station is closer to the real operation of the vehicle. Click on a location in the map while the vehicle is flying (takeoff flight mode) and enable the slider. This will reposition the vehicle.")]),t._v(" "),s("p",[s("img",{attrs:{src:a(365),alt:"QGroundControl GoTo"}})]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("PX4 can be used with a number of other [Simulators](../simulation/README.md), including [Gazebo Simulation](../simulation/gazebo.md) and [AirSim Simulation](../simulation/airsim.md). These are also started with *make* - e.g.")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("-- Build files have been written to: /home/youruser/src/Firmware/build/px4_fmu-v4_default\n[954/954] Creating /home/youruser/src/Firmware/build/px4_fmu-v4_default/px4_fmu-v4_default.px4\n")])])])]),t._v(" "),s("h2",{attrs:{id:"nuttx-pixhawk-based-boards"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nuttx-pixhawk-based-boards"}},[t._v("#")]),t._v(" NuttX / Pixhawk Based Boards")]),t._v(" "),s("h3",{attrs:{id:"building-for-nuttx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#building-for-nuttx"}},[t._v("#")]),t._v(" Building for NuttX")]),t._v(" "),s("p",[t._v("To build for NuttX- or Pixhawk- based boards, navigate into the "),s("strong",[t._v("PX4-Autopilot")]),t._v(" directory and then call "),s("code",[t._v("make")]),t._v(" with the build target for your board.")]),t._v(" "),s("p",[t._v("For example, to build for "),s("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk4.html"}},[t._v("Pixhawk 4")]),t._v(" hardware you could use the following command:")],1),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("/data/ftp/internal_000/px4 -s /home/root/px4.config\n")])])]),s("p",[t._v("A successful run will end with similar output to:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("-- Build files have been written to: /home/youruser/src/PX4-Autopilot/build/px4_fmu-v4_default\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("954")]),t._v("/954"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Creating /home/youruser/src/PX4-Autopilot/build/px4_fmu-v4_default/px4_fmu-v4_default.px4\n")])])]),s("p",[t._v("The first part of the build target "),s("code",[t._v("px4_fmu-v4")]),t._v(" indicates the firmware for a particular flight controller hardware. The following list shows the build commands for the "),s("RouterLink",{attrs:{to:"/ko/flight_controller/autopilot_pixhawk_standard.html"}},[t._v("Pixhawk standard")]),t._v(" boards:")],1),t._v(" "),s("ul",[s("li",[t._v("On OS X, hit ⌘-space and search for 'terminal'.")]),t._v(" "),s("li",[t._v("On Ubuntu, click the launch bar and search for 'terminal'.")]),t._v(" "),s("li",[t._v("On Windows, find the PX4 folder in the start menu and click on 'PX4 Console'.")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://docs.px4.io/en/flight_controller/HKPilot32.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("HKPilot32"),s("OutboundLink")],1),t._v(": "),s("code",[t._v("make px4_fmu-v2_default")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://docs.px4.io/en/flight_controller/crazyflie2.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Crazyflie 2.0"),s("OutboundLink")],1),t._v(": "),s("code",[t._v("make bitcraze_crazyflie_default")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://docs.px4.io/en/flight_controller/pixracer.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixracer"),s("OutboundLink")],1),t._v(": "),s("code",[t._v("make px4_fmu-v4_default")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://docs.px4.io/en/flight_controller/pixhawk3_pro.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk 3 Pro"),s("OutboundLink")],1),t._v(": "),s("code",[t._v("make px4_fmu-v4pro_default")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://docs.px4.io/en/flight_controller/pixhawk_mini.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk Mini"),s("OutboundLink")],1),t._v(": "),s("code",[t._v("make px4_fmu-v3_default")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://docs.px4.io/en/flight_controller/pixhawk-2.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk 2"),s("OutboundLink")],1),t._v(": "),s("code",[t._v("make px4_fmu-v3_default")])]),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/ko/flight_controller/holybro_pix32.html"}},[t._v("Holybro pix32")]),t._v(": "),s("code",[t._v("make px4_fmu-v2_default")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/ko/flight_controller/pixfalcon.html"}},[t._v("Pixfalcon")]),t._v(": "),s("code",[t._v("make px4_fmu-v2_default")])],1),t._v(" "),s("li",[s("a",{attrs:{href:"https://docs.px4.io/en/flight_controller/mro_pixhawk.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("mRo Pixhawk"),s("OutboundLink")],1),t._v(": "),s("code",[t._v("make px4_fmu-v3_default")]),t._v(" (supports 2MB Flash)")]),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk.html"}},[t._v("Pixhawk 1")]),t._v(": "),s("code",[t._v("make px4_fmu-v2_default")]),t._v(" :::warning You "),s("strong",[t._v("must")]),t._v(" use a supported version of GCC to build this board (e.g. the same as used by "),s("RouterLink",{attrs:{to:"/ko/test_and_ci/docker.html"}},[t._v("CI/docker")]),t._v(") or remove modules from the build. Building with an unsupported GCC may fail, as PX4 is close to the board's 1MB flash limit.\n:::")],1),t._v(" "),s("li",[t._v("Pixhawk 1 with 2 MB flash: "),s("code",[t._v("make px4_fmu-v3_default")])])]),t._v(" "),s("p",[t._v("kk")]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("_default")]),t._v(" suffix is the firmware "),s("em",[t._v("configuration")]),t._v(". This is optional (i.e. you can also build using "),s("code",[t._v("make px4_fmu-v4")]),t._v(", "),s("code",[t._v("make bitcraze_crazyflie")]),t._v(", etc.).")])]),t._v(" "),s("h3",{attrs:{id:"uploading-firmware-flashing-the-board"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#uploading-firmware-flashing-the-board"}},[t._v("#")]),t._v(" Uploading Firmware (Flashing the board)")]),t._v(" "),s("p",[t._v('The "px4" executable file is in the directory '),s("strong",[t._v("build/emlid_navio2_cross/")]),t._v(". Make sure you can connect to your RPi over ssh, see "),s("a",{attrs:{href:"https://docs.px4.io/en/flight_controller/raspberry_pi_navio2.html#developer-quick-start",target:"_blank",rel:"noopener noreferrer"}},[t._v("instructions how to access your RPi"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_fmu-v4_default upload\n")])])]),s("p",[t._v("A successful run will end with this output:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("Erase  "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100.0")]),t._v("%\nProgram: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100.0")]),t._v("%\nVerify "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100.0")]),t._v("%\nRebooting.\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Built target upload\n")])])]),s("h2",{attrs:{id:"other-boards"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#other-boards"}},[t._v("#")]),t._v(" Other Boards")]),t._v(" "),s("p",[t._v("Build commands for other boards are given the "),s("RouterLink",{attrs:{to:"/ko/flight_controller/"}},[t._v("board-specific flight controller pages")]),t._v(" (usually under a heading "),s("em",[t._v("Building Firmware")]),t._v(").")],1),t._v(" "),s("p",[t._v("You can also list all configuration targets using the command:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" list_config_targets\n")])])]),s("h2",{attrs:{id:"compiling-in-a-graphical-ide"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#compiling-in-a-graphical-ide"}},[t._v("#")]),t._v(" Compiling in a Graphical IDE")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/ko/dev_setup/vscode.html"}},[t._v("VSCode")]),t._v(" is the officially supported (and recommended) IDE for PX4 development. It is easy to set up and can be used to compile PX4 for both simulation and hardware environments.")],1),t._v(" "),s("h2",{attrs:{id:"troubleshooting"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[t._v("#")]),t._v(" Troubleshooting")]),t._v(" "),s("h3",{attrs:{id:"general-build-errors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#general-build-errors"}},[t._v("#")]),t._v(" General Build Errors")]),t._v(" "),s("p",[t._v("Many build problems are caused by either mismatching submodules or an incompletely cleaned-up build environment. Updating the submodules and doing a "),s("code",[t._v("distclean")]),t._v(" can fix these kinds of errors:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("sudo ./bin/px4 -s px4.config\n")])])]),s("h3",{attrs:{id:"flash-overflowed-by-xxx-bytes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flash-overflowed-by-xxx-bytes"}},[t._v("#")]),t._v(" Flash overflowed by XXX bytes")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("region 'flash' overflowed by XXXX bytes")]),t._v(" error indicates that the firmware is too large for the target hardware platform. This is common for "),s("code",[t._v("make px4_fmu-v2_default")]),t._v(" builds, where the flash size is limited to 1MB.")]),t._v(" "),s("p",[t._v("If you're building the "),s("em",[t._v("vanilla")]),t._v(" master branch, the most likely cause is using an unsupported version of GCC. In this case, install the version specified in the "),s("RouterLink",{attrs:{to:"/ko/dev_setup/dev_env.html"}},[t._v("Developer Toolchain")]),t._v(" instructions.")],1),t._v(" "),s("p",[t._v("If building your own branch, it is possibly you have increased the firmware size over the 1MB limit. In this case you will need to remove any drivers/modules that you don't need from the build.")]),t._v(" "),s("h3",{attrs:{id:"macos-too-many-open-files-error"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#macos-too-many-open-files-error"}},[t._v("#")]),t._v(" macOS: Too many open files error")]),t._v(" "),s("p",[t._v("MacOS allows a default maximum of 256 open files in all running processes. The PX4 build system opens a large number of files, so you may exceed this number.")]),t._v(" "),s("p",[t._v("The build toolchain will then report "),s("code",[t._v("Too many open files")]),t._v(" for many files, as shown below:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" Firmware\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" emlid_navio2_native "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# for native build")]),t._v("\n")])])]),s("p",[t._v("The solution is to increase the maximum allowed number of open files (e.g. to 300). You can do this in the macOS "),s("em",[t._v("Terminal")]),t._v(" for each session:")]),t._v(" "),s("ul",[s("li",[t._v("Run this script "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/Tools/mac_set_ulimit.sh",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tools/mac_set_ulimit.sh"),s("OutboundLink")],1),t._v(", or")]),t._v(" "),s("li",[t._v("Enter this command:"),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("ulimit")]),t._v(" -S -n "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),t._v("\n")])])])])]),t._v(" "),s("h3",{attrs:{id:"macos-catalina-problem-running-cmake"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#macos-catalina-problem-running-cmake"}},[t._v("#")]),t._v(" macOS Catalina: Problem running cmake")]),t._v(" "),s("p",[t._v("As of macOS Catalina 10.15.1 there may be problems when trying to build the simulator with "),s("em",[t._v("cmake")]),t._v(". If you have build problems on this platform then try run the following command in your terminal:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("xcode-select --install\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ln")]),t._v(" -s /Library/Developer/CommandLineTools/SDKs/MacOSX.sdk/usr/include/* /usr/local/include/\n")])])]),s("h3",{attrs:{id:"failed-to-import-python-packages"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#failed-to-import-python-packages"}},[t._v("#")]),t._v(" Failed to import Python packages")]),t._v(" "),s("p",[t._v('"Failed to import" errors when running the '),s("code",[t._v("make px4_sitl jmavsim")]),t._v(" command indicates that some Python packages are not installed (where expected).")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("cd Firmware\nmake emlid_navio2_cross # for cross-compiler build\n")])])]),s("p",[t._v("If you have already installed these dependencies this may be because there is more than one Python version on the computer (e.g. Python 2.7.16 Python 3.8.3), and the module is not present in the version used by the build toolchain.")]),t._v(" "),s("p",[t._v("You should be able to fix this by explicitly installing the dependencies as shown:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("pip3 install --user pyserial empy toml numpy pandas jinja2 pyyaml pyros-genmsg packaging\n")])])]),s("h2",{attrs:{id:"px4-make-build-targets"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#px4-make-build-targets"}},[t._v("#")]),t._v(" PX4 Make Build Targets")]),t._v(" "),s("p",[t._v("The previous sections showed how you can call "),s("em",[t._v("make")]),t._v(" to build a number of different targets, start simulators, use IDEs etc. This section shows how "),s("em",[t._v("make")]),t._v(" options are constructed and how to find the available choices.")]),t._v(" "),s("p",[t._v("The full syntax to call "),s("em",[t._v("make")]),t._v(" with a particular configuration and initialization file is:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("VENDOR_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("MODEL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("_VARIANT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("VIEWER_MODEL_DEBUGGER_WORLD"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[s("strong",[t._v("VENDOR_MODEL_VARIANT")]),t._v(": (also known as "),s("code",[t._v("CONFIGURATION_TARGET")]),t._v(")")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("VENDOR:")]),t._v(" The manufacturer of the board: "),s("code",[t._v("px4")]),t._v(", "),s("code",[t._v("aerotenna")]),t._v(", "),s("code",[t._v("airmind")]),t._v(", "),s("code",[t._v("atlflight")]),t._v(", "),s("code",[t._v("auav")]),t._v(", "),s("code",[t._v("beaglebone")]),t._v(", "),s("code",[t._v("intel")]),t._v(", "),s("code",[t._v("nxp")]),t._v(", etc. The vendor name for Pixhawk series boards is "),s("code",[t._v("px4")]),t._v(".")]),t._v(" "),s("li",[s("strong",[t._v("MODEL:")]),t._v(" The "),s("em",[t._v("board model")]),t._v(' "model": '),s("code",[t._v("sitl")]),t._v(", "),s("code",[t._v("fmu-v2")]),t._v(", "),s("code",[t._v("fmu-v3")]),t._v(", "),s("code",[t._v("fmu-v4")]),t._v(", "),s("code",[t._v("fmu-v5")]),t._v(", "),s("code",[t._v("navio2")]),t._v(", etc.")]),t._v(" "),s("li",[s("strong",[t._v("VARIANT:")]),t._v(" Indicates particular configurations: e.g. "),s("code",[t._v("rtps")]),t._v(", "),s("code",[t._v("lpe")]),t._v(", which contain components that are not present in the "),s("code",[t._v("default")]),t._v(" configuration. Most commonly this is "),s("code",[t._v("default")]),t._v(", and may be omitted.")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("You can get a list of "),s("em",[t._v("all")]),t._v(" available "),s("code",[t._v("CONFIGURATION_TARGET")]),t._v(" options using the command below:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" list_config_targets\n")])])])]),t._v(" "),s("p",[s("strong",[t._v("VIEWER_MODEL_DEBUGGER_WORLD:")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("VIEWER:")]),t._v(' This is the simulator ("viewer") to launch and connect: '),s("code",[t._v("gazebo")]),t._v(", "),s("code",[t._v("jmavsim")]),t._v(", "),s("code",[t._v("none")])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[s("code",[t._v("none")]),t._v(" can be used if you want to launch PX4 and wait for a simulator (jmavsim, gazebo, or some other simulator). For example, "),s("code",[t._v("make px4_sitl none_iris")]),t._v(" launches PX4 without a simulator (but with the iris airframe).")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("MODEL:")]),t._v(" The "),s("em",[t._v("vehicle")]),t._v(" model to use (e.g. "),s("code",[t._v("iris")]),t._v(" ("),s("em",[t._v("default")]),t._v("), "),s("code",[t._v("rover")]),t._v(", "),s("code",[t._v("tailsitter")]),t._v(", etc), which will be loaded by the simulator. The environment variable "),s("code",[t._v("PX4_SIM_MODEL")]),t._v(" will be set to the selected model, which is then used in the "),s("a",{attrs:{href:"#scripts"}},[t._v("startup script")]),t._v(" to select appropriate parameters.")]),t._v(" "),s("li",[s("strong",[t._v("DEBUGGER:")]),t._v(" Debugger to use: "),s("code",[t._v("none")]),t._v(" ("),s("em",[t._v("default")]),t._v("), "),s("code",[t._v("ide")]),t._v(", "),s("code",[t._v("gdb")]),t._v(", "),s("code",[t._v("lldb")]),t._v(", "),s("code",[t._v("ddd")]),t._v(", "),s("code",[t._v("valgrind")]),t._v(", "),s("code",[t._v("callgrind")]),t._v(". For more information see "),s("RouterLink",{attrs:{to:"/ko/debug/simulation_debugging.html"}},[t._v("Simulation Debugging")]),t._v(".")],1),t._v(" "),s("li",[s("strong",[t._v("WORLD:")]),t._v(" (Gazebo only). Set a the world ("),s("a",{attrs:{href:"https://github.com/PX4/sitl_gazebo/tree/master/worlds",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4/sitl_gazebo/worlds"),s("OutboundLink")],1),t._v(") that is loaded. Default is "),s("a",{attrs:{href:"https://github.com/PX4/sitl_gazebo/blob/master/worlds/empty.world",target:"_blank",rel:"noopener noreferrer"}},[t._v("empty.world"),s("OutboundLink")],1),t._v(". For more information see "),s("RouterLink",{attrs:{to:"/ko/simulation/gazebo.html#set_world"}},[t._v("Gazebo > Loading a Specific World")]),t._v(".")],1)]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("You can get a list of "),s("em",[t._v("all")]),t._v(" available "),s("code",[t._v("VIEWER_MODEL_DEBUGGER_WORLD")]),t._v(" options using the command below:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl list_vmd_make_targets\n")])])])]),t._v(" "),s("p",[t._v("Notes:")]),t._v(" "),s("ul",[s("li",[t._v("Most of the values in the "),s("code",[t._v("CONFIGURATION_TARGET")]),t._v(" and "),s("code",[t._v("VIEWER_MODEL_DEBUGGER")]),t._v(" have defaults, and are hence optional. For example, "),s("code",[t._v("gazebo")]),t._v(" is equivalent to "),s("code",[t._v("gazebo_iris")]),t._v(" or "),s("code",[t._v("gazebo_iris_none")]),t._v(".")]),t._v(" "),s("li",[t._v("You can use three underscores if you want to specify a default value between two other settings. For example, "),s("code",[t._v("gazebo___gdb")]),t._v(" is equivalent to "),s("code",[t._v("gazebo_iris_gdb")]),t._v(".")]),t._v(" "),s("li",[t._v("You can use a "),s("code",[t._v("none")]),t._v(" value for "),s("code",[t._v("VIEWER_MODEL_DEBUGGER")]),t._v(" to start PX4 and wait for a simulator. For example start PX4 using "),s("code",[t._v("make px4_sitl_default none")]),t._v(" and jMAVSim using "),s("code",[t._v("./Tools/jmavsim_run.sh -l")]),t._v(".")])]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("VENDOR_MODEL_VARIANT")]),t._v(" options map to particular "),s("em",[t._v("cmake")]),t._v(" configuration files in the PX4 source tree under the "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/boards",target:"_blank",rel:"noopener noreferrer"}},[t._v("/boards"),s("OutboundLink")],1),t._v(" directory. Specifically "),s("code",[t._v("VENDOR_MODEL_VARIANT")]),t._v(" maps to a configuration file "),s("strong",[t._v("boards/VENDOR/MODEL/VARIANT.cmake")]),t._v(" (e.g. "),s("code",[t._v("px4_fmu-v5_default")]),t._v(" corresponds to "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/boards/px4/fmu-v5/default.cmake",target:"_blank",rel:"noopener noreferrer"}},[t._v("boards/px4/fmu-v5/default.cmake"),s("OutboundLink")],1),t._v(").")]),t._v(" "),s("p",[t._v("Additional make targets are discussed in relevant sections:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("bloaty_compare_master")]),t._v(": "),s("a",{attrs:{href:""}},[t._v("Binary Size Profiling")])]),t._v(" "),s("li",[t._v("...")])]),t._v(" "),s("h2",{attrs:{id:"list-all-releases-tags-sh-git-tag-l"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#list-all-releases-tags-sh-git-tag-l"}},[t._v("#")]),t._v(" List all releases (tags) sh git tag -l")]),t._v(" "),s("p",[t._v("The "),s("em",[t._v("PX4 Firmware Version")]),t._v(" and "),s("em",[t._v("Custom Firmware Version")]),t._v(" are published using the MAVLink "),s("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#AUTOPILOT_VERSION",target:"_blank",rel:"noopener noreferrer"}},[t._v("AUTOPILOT_VERSION"),s("OutboundLink")],1),t._v(" message, and displayed in the "),s("em",[t._v("QGroundControl")]),t._v(" "),s("strong",[t._v("Setup > Summary")]),t._v(" airframe panel:")]),t._v(" "),s("p",[s("img",{attrs:{src:a(677),alt:"Firmware info"}})]),t._v(" "),s("p",[t._v("These are extracted at build time from the active "),s("em",[t._v("git tag")]),t._v(" for your repo tree. The git tag should be formatted as "),s("code",[t._v("<PX4-version>-<vendor-version>")]),t._v(" (e.g. the tag in the image above was set to "),s("code",[t._v("v1.8.1-2.22.1")]),t._v(").")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("If you use a different git tag format, versions information may not be displayed properly.")])])])}),[],!1,null,null,null);e.default=o.exports},365:function(t,e,a){t.exports=a.p+"assets/img/qgc_goto.f64994ed.jpg"},675:function(t,e,a){t.exports=a.p+"assets/img/console_jmavsim.d6326a19.png"},676:function(t,e,a){t.exports=a.p+"assets/img/jmavsim_first_takeoff.65799ab0.png"},677:function(t,e,a){t.exports=a.p+"assets/img/qgc_setup_summary_airframe_firmware.ec44e092.jpg"}}]);