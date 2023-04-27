(window.webpackJsonp=window.webpackJsonp||[]).push([[284],{1876:function(t,e,a){"use strict";a.r(e);var s=a(19),o=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"building-px4-software"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#building-px4-software"}},[t._v("#")]),t._v(" Building PX4 Software")]),t._v(" "),s("p",[t._v("PX4 can be built on the console or in an IDE, for both simulated and hardware targets.")]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("Before following these instructions you must first install the "),s("RouterLink",{attrs:{to:"/en/dev_setup/dev_env.html"}},[t._v("Developer Toolchain")]),t._v(" for your host operating system and target hardware.")],1)]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("For solutions to common build problems see "),s("a",{attrs:{href:"#troubleshooting"}},[t._v("Troubleshooting")]),t._v(" below.")])]),t._v(" "),s("h2",{attrs:{id:"download-the-px4-source-code"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#download-the-px4-source-code"}},[t._v("#")]),t._v(" Download the PX4 Source Code")]),t._v(" "),s("p",[t._v("The PX4 source code is stored on Github in the "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4/PX4-Autopilot"),s("OutboundLink")],1),t._v(" repository.")]),t._v(" "),s("p",[t._v("To get the "),s("em",[t._v("very latest")]),t._v(' ("main") version onto your computer, enter the following command into a terminal:')]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/PX4/PX4-Autopilot.git --recursive\n")])])]),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("This is all you need to do just to build the latest code.\nIf needed you can also "),s("RouterLink",{attrs:{to:"/en/contribute/git_examples.html#get-a-specific-release"}},[t._v("get the source code specific to a particular release")]),t._v(".\n"),s("RouterLink",{attrs:{to:"/en/contribute/git_examples.html"}},[t._v("GIT Examples")]),t._v(" provides a lot more information working with releases and contributing to PX4.")],1)]),t._v(" "),s("h2",{attrs:{id:"first-build-using-the-jmavsim-simulator"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#first-build-using-the-jmavsim-simulator"}},[t._v("#")]),t._v(" First Build (Using the jMAVSim Simulator)")]),t._v(" "),s("p",[t._v("First we'll build a simulated target using a console environment.\nThis allows us to validate the system setup before moving on to real hardware and an IDE.")]),t._v(" "),s("p",[t._v("Navigate into the "),s("strong",[t._v("PX4-Autopilot")]),t._v(" directory and start "),s("RouterLink",{attrs:{to:"/en/simulation/jmavsim.html"}},[t._v("jMAVSim")]),t._v(" using the following command:")],1),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl jmavsim\n")])])]),s("p",[t._v("This will bring up the PX4 console below:")]),t._v(" "),s("p",[s("img",{attrs:{src:a(740),alt:"PX4 Console (jMAVSim)"}})]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("You may need to start "),s("em",[t._v("QGroundControl")]),t._v(" before proceeding, as the default PX4 configuration requires a ground control connection before takeoff.\nThis can be "),s("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/getting_started/download_and_install.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("downloaded from here"),s("OutboundLink")],1),t._v(".")])]),t._v(" "),s("p",[t._v("The drone can be flown by typing:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("pxh"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" commander takeoff\n")])])]),s("p",[s("img",{attrs:{src:a(741),alt:"jMAVSim UI"}})]),t._v(" "),s("p",[t._v("The drone can be landed by typing "),s("code",[t._v("commander land")]),t._v(" and the whole simulation can be stopped by doing "),s("strong",[t._v("CTRL+C")]),t._v(" (or by entering "),s("code",[t._v("shutdown")]),t._v(").")]),t._v(" "),s("p",[t._v("Flying the simulation with the ground control station is closer to the real operation of the vehicle.\nClick on a location in the map while the vehicle is flying (takeoff flight mode) and enable the slider.\nThis will reposition the vehicle.")]),t._v(" "),s("p",[s("img",{attrs:{src:a(387),alt:"QGroundControl GoTo"}})]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("PX4 can be used with a number of other "),s("RouterLink",{attrs:{to:"/en/simulation/"}},[t._v("Simulators")]),t._v(", including "),s("RouterLink",{attrs:{to:"/en/sim_gazebo_gz/"}},[t._v("Gazebo")]),t._v(", "),s("RouterLink",{attrs:{to:"/en/sim_gazebo_classic/"}},[t._v("Gazebo Classic")]),t._v(" and "),s("RouterLink",{attrs:{to:"/en/simulation/airsim.html"}},[t._v("AirSim")]),t._v(".\nThese are also started with "),s("em",[t._v("make")]),t._v(" - e.g.")],1),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("make px4_sitl gazebo-classic\n")])])])]),t._v(" "),s("h2",{attrs:{id:"nuttx-pixhawk-based-boards"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nuttx-pixhawk-based-boards"}},[t._v("#")]),t._v(" NuttX / Pixhawk Based Boards")]),t._v(" "),s("h3",{attrs:{id:"building-for-nuttx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#building-for-nuttx"}},[t._v("#")]),t._v(" Building for NuttX")]),t._v(" "),s("p",[t._v("To build for NuttX- or Pixhawk- based boards, navigate into the "),s("strong",[t._v("PX4-Autopilot")]),t._v(" directory and then call "),s("code",[t._v("make")]),t._v(" with the build target for your board.")]),t._v(" "),s("p",[t._v("For example, to build for "),s("RouterLink",{attrs:{to:"/en/flight_controller/pixhawk4.html"}},[t._v("Pixhawk 4")]),t._v(" hardware you could use the following command:")],1),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" PX4-Autopilot\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_fmu-v5_default\n")])])]),s("p",[t._v("A successful run will end with similar output to:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("-- Build files have been written to: /home/youruser/src/PX4-Autopilot/build/px4_fmu-v4_default\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("954")]),t._v("/954"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Creating /home/youruser/src/PX4-Autopilot/build/px4_fmu-v4_default/px4_fmu-v4_default.px4\n")])])]),s("p",[t._v("The first part of the build target "),s("code",[t._v("px4_fmu-v4")]),t._v(" indicates the firmware for a particular flight controller hardware.\nThe following list shows the build commands for the "),s("RouterLink",{attrs:{to:"/en/flight_controller/autopilot_pixhawk_standard.html"}},[t._v("Pixhawk standard")]),t._v(" boards:")],1),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/en/flight_controller/pixhawk6x.html"}},[t._v("Holybro Pixhawk 6X (FMUv6X)")]),t._v(": "),s("code",[t._v("make px4_fmu-v6x_default")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/en/flight_controller/pixhawk6c.html"}},[t._v("Holybro Pixhawk 6C (FMUv6C)")]),t._v(": "),s("code",[t._v("make px4_fmu-v6c_default")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/en/flight_controller/holybro_pix32_v6.html"}},[t._v("Holybro Pix32 v6 (FMUv6C)")]),t._v(": "),s("code",[t._v("make px4_fmu-v6c_default")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/en/flight_controller/pixhawk5x.html"}},[t._v("Holybro Pixhawk 5X (FMUv5X)")]),t._v(": "),s("code",[t._v("make px4_fmu-v5x_default")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/en/flight_controller/pixhawk4.html"}},[t._v("Pixhawk 4 (FMUv5)")]),t._v(": "),s("code",[t._v("make px4_fmu-v5_default")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/en/flight_controller/pixhawk4_mini.html"}},[t._v("Pixhawk 4 Mini (FMUv5)")]),t._v(": "),s("code",[t._v("make px4_fmu-v5_default")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/en/flight_controller/cuav_v5_plus.html"}},[t._v("CUAV V5+ (FMUv5)")]),t._v(": "),s("code",[t._v("make px4_fmu-v5_default")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/en/flight_controller/cuav_v5_nano.html"}},[t._v("CUAV V5 nano (FMUv5)")]),t._v(": "),s("code",[t._v("make px4_fmu-v5_default")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/en/flight_controller/pixracer.html"}},[t._v("Pixracer (FMUv4)")]),t._v(": "),s("code",[t._v("make px4_fmu-v4_default")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/en/flight_controller/pixhawk3_pro.html"}},[t._v("Pixhawk 3 Pro")]),t._v(": "),s("code",[t._v("make px4_fmu-v4pro_default")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/en/flight_controller/pixhawk_mini.html"}},[t._v("Pixhawk Mini")]),t._v(": "),s("code",[t._v("make px4_fmu-v3_default")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/en/flight_controller/pixhawk-2.html"}},[t._v("Pixhawk 2 (Cube Black) (FMUv3)")]),t._v(": "),s("code",[t._v("make px4_fmu-v3_default")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/en/flight_controller/mro_pixhawk.html"}},[t._v("mRo Pixhawk (FMUv3)")]),t._v(": "),s("code",[t._v("make px4_fmu-v3_default")]),t._v(" (supports 2MB Flash)")],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/en/flight_controller/holybro_pix32.html"}},[t._v("Holybro pix32 (FMUv2)")]),t._v(": "),s("code",[t._v("make px4_fmu-v2_default")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/en/flight_controller/pixfalcon.html"}},[t._v("Pixfalcon (FMUv2)")]),t._v(": "),s("code",[t._v("make px4_fmu-v2_default")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/en/flight_controller/dropix.html"}},[t._v("Dropix (FMUv2)")]),t._v(": "),s("code",[t._v("make px4_fmu-v2_default")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/en/flight_controller/pixhawk.html"}},[t._v("Pixhawk 1 (FMUv2)")]),t._v(": "),s("code",[t._v("make px4_fmu-v2_default")]),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("You "),s("strong",[t._v("must")]),t._v(" use a supported version of GCC to build this board (e.g. the same as used by "),s("RouterLink",{attrs:{to:"/en/test_and_ci/docker.html"}},[t._v("CI/docker")]),t._v(") or remove modules from the build. Building with an unsupported GCC may fail, as PX4 is close to the board's 1MB flash limit.")],1)])],1),t._v(" "),s("li",[t._v("Pixhawk 1 with 2 MB flash: "),s("code",[t._v("make px4_fmu-v3_default")])])]),t._v(" "),s("p",[t._v("Build commands for non-Pixhawk NuttX fight controllers (and for all other-boards) are provided in the documentation for the individual "),s("RouterLink",{attrs:{to:"/en/flight_controller/"}},[t._v("flight controller boards")]),t._v(".")],1),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("_default")]),t._v(" suffix is the firmware "),s("em",[t._v("configuration")]),t._v(".\nThis is optional (i.e. you can also build using "),s("code",[t._v("make px4_fmu-v4")]),t._v(", "),s("code",[t._v("make bitcraze_crazyflie")]),t._v(", etc.).")])]),t._v(" "),s("h3",{attrs:{id:"uploading-firmware-flashing-the-board"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#uploading-firmware-flashing-the-board"}},[t._v("#")]),t._v(" Uploading Firmware (Flashing the board)")]),t._v(" "),s("p",[t._v("Append "),s("code",[t._v("upload")]),t._v(" to the make commands to upload the compiled binary to the autopilot hardware via USB.\nFor example")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_fmu-v4_default upload\n")])])]),s("p",[t._v("A successful run will end with this output:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("Erase  "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100.0")]),t._v("%\nProgram: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100.0")]),t._v("%\nVerify "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100.0")]),t._v("%\nRebooting.\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Built target upload\n")])])]),s("h2",{attrs:{id:"other-boards"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#other-boards"}},[t._v("#")]),t._v(" Other Boards")]),t._v(" "),s("p",[t._v("Build commands for other boards are given the "),s("RouterLink",{attrs:{to:"/en/flight_controller/"}},[t._v("board-specific flight controller pages")]),t._v(" (usually under a heading "),s("em",[t._v("Building Firmware")]),t._v(").")],1),t._v(" "),s("p",[t._v("You can also list all configuration targets using the command:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" list_config_targets\n")])])]),s("h2",{attrs:{id:"compiling-in-a-graphical-ide"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#compiling-in-a-graphical-ide"}},[t._v("#")]),t._v(" Compiling in a Graphical IDE")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/en/dev_setup/vscode.html"}},[t._v("VSCode")]),t._v(" is the officially supported (and recommended) IDE for PX4 development.\nIt is easy to set up and can be used to compile PX4 for both simulation and hardware environments.")],1),t._v(" "),s("h2",{attrs:{id:"troubleshooting"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[t._v("#")]),t._v(" Troubleshooting")]),t._v(" "),s("h3",{attrs:{id:"general-build-errors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#general-build-errors"}},[t._v("#")]),t._v(" General Build Errors")]),t._v(" "),s("p",[t._v("Many build problems are caused by either mismatching submodules or an incompletely cleaned-up build environment.\nUpdating the submodules and doing a "),s("code",[t._v("distclean")]),t._v(" can fix these kinds of errors:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("git submodule update --recursive\nmake distclean\n")])])]),s("h3",{attrs:{id:"flash-overflowed-by-xxx-bytes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flash-overflowed-by-xxx-bytes"}},[t._v("#")]),t._v(" Flash overflowed by XXX bytes")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("region 'flash' overflowed by XXXX bytes")]),t._v(" error indicates that the firmware is too large for the target hardware platform.\nThis is common for "),s("code",[t._v("make px4_fmu-v2_default")]),t._v(" builds, where the flash size is limited to 1MB.")]),t._v(" "),s("p",[t._v("If you're building the "),s("em",[t._v("vanilla")]),t._v(" master branch, the most likely cause is using an unsupported version of GCC.\nIn this case, install the version specified in the "),s("RouterLink",{attrs:{to:"/en/dev_setup/dev_env.html"}},[t._v("Developer Toolchain")]),t._v(" instructions.")],1),t._v(" "),s("p",[t._v("If building your own branch, it is possibly you have increased the firmware size over the 1MB limit.\nIn this case you will need to remove any drivers/modules that you don't need from the build.")]),t._v(" "),s("h3",{attrs:{id:"macos-too-many-open-files-error"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#macos-too-many-open-files-error"}},[t._v("#")]),t._v(" macOS: Too many open files error")]),t._v(" "),s("p",[t._v("MacOS allows a default maximum of 256 open files in all running processes.\nThe PX4 build system opens a large number of files, so you may exceed this number.")]),t._v(" "),s("p",[t._v("The build toolchain will then report "),s("code",[t._v("Too many open files")]),t._v(" for many files, as shown below:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("/usr/local/Cellar/gcc-arm-none-eabi/20171218/bin/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/lib/gcc/arm-none-eabi/7.2.1/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/arm-none-eabi/bin/ld: cannot "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),t._v(" NuttX/nuttx/fs/libfs.a: Too many "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),t._v(" files\n")])])]),s("p",[t._v("The solution is to increase the maximum allowed number of open files (e.g. to 300).\nYou can do this in the macOS "),s("em",[t._v("Terminal")]),t._v(" for each session:")]),t._v(" "),s("ul",[s("li",[t._v("Run this script "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/Tools/mac_set_ulimit.sh",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tools/mac_set_ulimit.sh"),s("OutboundLink")],1),t._v(", or")]),t._v(" "),s("li",[t._v("Enter this command:"),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("ulimit")]),t._v(" -S -n "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),t._v("\n")])])])])]),t._v(" "),s("h3",{attrs:{id:"macos-catalina-problem-running-cmake"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#macos-catalina-problem-running-cmake"}},[t._v("#")]),t._v(" macOS Catalina: Problem running cmake")]),t._v(" "),s("p",[t._v("As of macOS Catalina 10.15.1 there may be problems when trying to build the simulator with "),s("em",[t._v("cmake")]),t._v(".\nIf you have build problems on this platform then try run the following command in your terminal:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("xcode-select --install\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ln")]),t._v(" -s /Library/Developer/CommandLineTools/SDKs/MacOSX.sdk/usr/include/* /usr/local/include/\n")])])]),s("h3",{attrs:{id:"ubuntu-18-04-compile-errors-involving-arm-none-eabi-gcc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-18-04-compile-errors-involving-arm-none-eabi-gcc"}},[t._v("#")]),t._v(" Ubuntu 18.04: Compile errors involving arm_none_eabi_gcc")]),t._v(" "),s("p",[t._v("Build issues related to "),s("code",[t._v("arm_none_eabi_gcc")]),t._v("may be due to a broken g++ toolchain installation.\nYou can verify that this is the case by checking for missing dependencies using:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("arm-none-eabi-gcc --version\narm-none-eabi-g++ --version\narm-none-eabi-gdb --version\narm-none-eabi-size --version\n")])])]),s("p",[t._v("Example of bash output with missing dependencies:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("arm-none-eabi-gdb --version\narm-none-eabi-gdb: "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("command")]),t._v(" not found\n")])])]),s("p",[t._v("This can be resolved by removing and "),s("a",{attrs:{href:"https://askubuntu.com/questions/1243252/how-to-install-arm-none-eabi-gdb-on-ubuntu-20-04-lts-focal-fossa",target:"_blank",rel:"noopener noreferrer"}},[t._v("reinstalling the compiler"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h3",{attrs:{id:"ubuntu-18-04-visual-studio-code-is-unable-to-watch-for-file-changes-in-this-large-workspace"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-18-04-visual-studio-code-is-unable-to-watch-for-file-changes-in-this-large-workspace"}},[t._v("#")]),t._v(" Ubuntu 18.04: Visual Studio Code is unable to watch for file changes in this large workspace")]),t._v(" "),s("p",[t._v("See "),s("RouterLink",{attrs:{to:"/en/dev_setup/vscode.html#troubleshooting"}},[t._v("Visual Studio Code IDE (VSCode) > Troubleshooting")]),t._v(".")],1),t._v(" "),s("h3",{attrs:{id:"failed-to-import-python-packages"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#failed-to-import-python-packages"}},[t._v("#")]),t._v(" Failed to import Python packages")]),t._v(" "),s("p",[t._v('"Failed to import" errors when running the '),s("code",[t._v("make px4_sitl jmavsim")]),t._v(" command indicates that some Python packages are not installed (where expected).")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Failed to import jinja2: No module named 'jinja2'\nYou may need to install it using:\n    pip3 install --user jinja2\n")])])]),s("p",[t._v("If you have already installed these dependencies this may be because there is more than one Python version on the computer (e.g. Python 2.7.16 Python 3.8.3), and the module is not present in the version used by the build toolchain.")]),t._v(" "),s("p",[t._v("You should be able to fix this by explicitly installing the dependencies as shown:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("pip3 install --user pyserial empty toml numpy pandas jinja2 pyyaml pyros-genmsg packaging\n")])])]),s("h2",{attrs:{id:"px4-make-build-targets"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#px4-make-build-targets"}},[t._v("#")]),t._v(" PX4 Make Build Targets")]),t._v(" "),s("p",[t._v("The previous sections showed how you can call "),s("em",[t._v("make")]),t._v(" to build a number of different targets, start simulators, use IDEs etc.\nThis section shows how "),s("em",[t._v("make")]),t._v(" options are constructed and how to find the available choices.")]),t._v(" "),s("p",[t._v("The full syntax to call "),s("em",[t._v("make")]),t._v(" with a particular configuration and initialization file is:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("VENDOR_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("MODEL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("_VARIANT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("VIEWER_MODEL_DEBUGGER_WORLD"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[s("strong",[t._v("VENDOR_MODEL_VARIANT")]),t._v(": (also known as "),s("code",[t._v("CONFIGURATION_TARGET")]),t._v(")")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("VENDOR:")]),t._v(" The manufacturer of the board: "),s("code",[t._v("px4")]),t._v(", "),s("code",[t._v("aerotenna")]),t._v(", "),s("code",[t._v("airmind")]),t._v(", "),s("code",[t._v("atlflight")]),t._v(", "),s("code",[t._v("auav")]),t._v(", "),s("code",[t._v("beaglebone")]),t._v(", "),s("code",[t._v("intel")]),t._v(", "),s("code",[t._v("nxp")]),t._v(", etc.\nThe vendor name for Pixhawk series boards is "),s("code",[t._v("px4")]),t._v(".")]),t._v(" "),s("li",[s("strong",[t._v("MODEL:")]),t._v(" The "),s("em",[t._v("board model")]),t._v(' "model": '),s("code",[t._v("sitl")]),t._v(", "),s("code",[t._v("fmu-v2")]),t._v(", "),s("code",[t._v("fmu-v3")]),t._v(", "),s("code",[t._v("fmu-v4")]),t._v(", "),s("code",[t._v("fmu-v5")]),t._v(", "),s("code",[t._v("navio2")]),t._v(", etc.")]),t._v(" "),s("li",[s("strong",[t._v("VARIANT:")]),t._v(" Indicates particular configurations: e.g. "),s("code",[t._v("bootloader")]),t._v(", "),s("code",[t._v("cyphal")]),t._v(", which contain components that are not present in the "),s("code",[t._v("default")]),t._v(" configuration.\nMost commonly this is "),s("code",[t._v("default")]),t._v(", and may be omitted.")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("You can get a list of "),s("em",[t._v("all")]),t._v(" available "),s("code",[t._v("CONFIGURATION_TARGET")]),t._v(" options using the command below:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" list_config_targets\n")])])])]),t._v(" "),s("p",[s("strong",[t._v("VIEWER_MODEL_DEBUGGER_WORLD:")])]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("VIEWER:")]),t._v(' This is the simulator ("viewer") to launch and connect: '),s("code",[t._v("gz")]),t._v(", "),s("code",[t._v("gazebo")]),t._v(", "),s("code",[t._v("jmavsim")]),t._v(", "),s("code",[t._v("none")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[s("code",[t._v("none")]),t._v(" can be used if you want to launch PX4 and wait for a simulator (jmavsim, Gazebo, Gazebo Classic, or some other simulator).\nFor example, "),s("code",[t._v("make px4_sitl none_iris")]),t._v(" launches PX4 without a simulator (but with the iris airframe).")])])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("MODEL:")]),t._v(" The "),s("em",[t._v("vehicle")]),t._v(" model to use (e.g. "),s("code",[t._v("iris")]),t._v(" ("),s("em",[t._v("default")]),t._v("), "),s("code",[t._v("rover")]),t._v(", "),s("code",[t._v("tailsitter")]),t._v(", etc), which will be loaded by the simulator.\nThe environment variable "),s("code",[t._v("PX4_SIM_MODEL")]),t._v(" will be set to the selected model, which is then used in the "),s("RouterLink",{attrs:{to:"/en/simulation/#startup-scripts"}},[t._v("startup script")]),t._v(" to select appropriate parameters.")],1)]),t._v(" "),s("li",[s("p",[s("strong",[t._v("DEBUGGER:")]),t._v(" Debugger to use: "),s("code",[t._v("none")]),t._v(" ("),s("em",[t._v("default")]),t._v("), "),s("code",[t._v("ide")]),t._v(", "),s("code",[t._v("gdb")]),t._v(", "),s("code",[t._v("lldb")]),t._v(", "),s("code",[t._v("ddd")]),t._v(", "),s("code",[t._v("valgrind")]),t._v(", "),s("code",[t._v("callgrind")]),t._v(".\nFor more information see "),s("RouterLink",{attrs:{to:"/en/debug/simulation_debugging.html"}},[t._v("Simulation Debugging")]),t._v(".")],1)]),t._v(" "),s("li",[s("p",[s("strong",[t._v("WORLD:")]),t._v(" (Gazebo Classic only).\nSet the world ("),s("a",{attrs:{href:"https://github.com/PX4/PX4-SITL_gazebo/tree/master/worlds",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4-Autopilot/Tools/simulation/gazebo/sitl_gazebo/worlds"),s("OutboundLink")],1),t._v(") that is loaded.\nDefault is "),s("a",{attrs:{href:"https://github.com/PX4/PX4-SITL_gazebo/blob/master/worlds/empty.world",target:"_blank",rel:"noopener noreferrer"}},[t._v("empty.world"),s("OutboundLink")],1),t._v(".\nFor more information see "),s("RouterLink",{attrs:{to:"/en/sim_gazebo_classic/#set_world"}},[t._v("Gazebo Classic > Loading a Specific World")]),t._v(".")],1)])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("You can get a list of "),s("em",[t._v("all")]),t._v(" available "),s("code",[t._v("VIEWER_MODEL_DEBUGGER_WORLD")]),t._v(" options using the command below:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl list_vmd_make_targets\n")])])])]),t._v(" "),s("p",[t._v("Notes:")]),t._v(" "),s("ul",[s("li",[t._v("Most of the values in the "),s("code",[t._v("CONFIGURATION_TARGET")]),t._v(" and "),s("code",[t._v("VIEWER_MODEL_DEBUGGER")]),t._v(" have defaults, and are hence optional.\nFor example, "),s("code",[t._v("gazebo-classic")]),t._v(" is equivalent to "),s("code",[t._v("gazebo-classic_iris")]),t._v(" or "),s("code",[t._v("gazebo-classic_iris_none")]),t._v(".")]),t._v(" "),s("li",[t._v("You can use three underscores if you want to specify a default value between two other settings.\nFor example, "),s("code",[t._v("gazebo-classic___gdb")]),t._v(" is equivalent to "),s("code",[t._v("gazebo-classic_iris_gdb")]),t._v(".")]),t._v(" "),s("li",[t._v("You can use a "),s("code",[t._v("none")]),t._v(" value for "),s("code",[t._v("VIEWER_MODEL_DEBUGGER")]),t._v(" to start PX4 and wait for a simulator.\nFor example start PX4 using "),s("code",[t._v("make px4_sitl_default none")]),t._v(" and jMAVSim using "),s("code",[t._v("./Tools/simulation/jmavsim/jmavsim_run.sh -l")]),t._v(".")])]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("VENDOR_MODEL_VARIANT")]),t._v(" options map to particular "),s("em",[t._v("px4board")]),t._v(" configuration files in the PX4 source tree under the "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/boards",target:"_blank",rel:"noopener noreferrer"}},[t._v("/boards"),s("OutboundLink")],1),t._v(" directory.\nSpecifically "),s("code",[t._v("VENDOR_MODEL_VARIANT")]),t._v(" maps to a configuration file "),s("strong",[t._v("boards/VENDOR/MODEL/VARIANT.px4board")]),t._v("\n(e.g. "),s("code",[t._v("px4_fmu-v5_default")]),t._v(" corresponds to "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/boards/px4/fmu-v5/default.px4board",target:"_blank",rel:"noopener noreferrer"}},[t._v("boards/px4/fmu-v5/default.px4board"),s("OutboundLink")],1),t._v(").")]),t._v(" "),s("p",[t._v("Additional make targets are discussed in relevant sections:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("bloaty_compare_master")]),t._v(": "),s("a",{attrs:{href:""}},[t._v("Binary Size Profiling")])]),t._v(" "),s("li",[t._v("...")])]),t._v(" "),s("h2",{attrs:{id:"firmware-version-git-tags"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#firmware-version-git-tags"}},[t._v("#")]),t._v(" Firmware Version & Git Tags")]),t._v(" "),s("p",[t._v("The "),s("em",[t._v("PX4 Firmware Version")]),t._v(" and "),s("em",[t._v("Custom Firmware Version")]),t._v(" are published using the MAVLink "),s("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#AUTOPILOT_VERSION",target:"_blank",rel:"noopener noreferrer"}},[t._v("AUTOPILOT_VERSION"),s("OutboundLink")],1),t._v(" message, and displayed in the "),s("em",[t._v("QGroundControl")]),t._v(" "),s("strong",[t._v("Setup > Summary")]),t._v(" airframe panel:")]),t._v(" "),s("p",[s("img",{attrs:{src:a(742),alt:"Firmware info"}})]),t._v(" "),s("p",[t._v("These are extracted at build time from the active "),s("em",[t._v("git tag")]),t._v(" for your repo tree.\nThe git tag should be formatted as "),s("code",[t._v("<PX4-version>-<vendor-version>")]),t._v(" (e.g. the tag in the image above was set to "),s("code",[t._v("v1.8.1-2.22.1")]),t._v(").")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("If you use a different git tag format, versions information may not be displayed properly.")])])])}),[],!1,null,null,null);e.default=o.exports},387:function(t,e,a){t.exports=a.p+"assets/img/qgc_goto.f64994ed.jpg"},740:function(t,e,a){t.exports=a.p+"assets/img/console_jmavsim.d6326a19.png"},741:function(t,e,a){t.exports=a.p+"assets/img/jmavsim_first_takeoff.65799ab0.png"},742:function(t,e,a){t.exports=a.p+"assets/img/qgc_setup_summary_airframe_firmware.ec44e092.jpg"}}]);