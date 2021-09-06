(window.webpackJsonp=window.webpackJsonp||[]).push([[526],{1610:function(t,a,e){"use strict";e.r(a);var s=e(19),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"fast-dds-installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fast-dds-installation"}},[t._v("#")]),t._v(" Fast DDS Installation")]),t._v(" "),s("p",[s("img",{staticStyle:{float:"left"},attrs:{alt:"logo",src:e(397)}}),t._v(" "),s("a",{attrs:{href:"https://github.com/eProsima/Fast-DDS",target:"_blank",rel:"noopener noreferrer"}},[t._v("eProsima Fast DDS"),s("OutboundLink")],1),t._v(" is a C++ implementation of the Object Management Group's (OMG) Data Distribution Service (DDS) specification and the Real Time Publish Subscribe (RTPS) protocol.")]),t._v(" "),s("p",[t._v("Fast DDS enables an RTPS/DDS interface that allows PX4 uORB topics to be shared with offboard components that participate in same DDS domain, including robotics and simulator tools.\nIn particular, Fast DDS is the default middleware implementation for Robot Operating System 2 (ROS 2), and is essential for integrating PX4 with ROS2.")]),t._v(" "),s("p",[t._v("This topic explains how to install Fast DDS and "),s("em",[t._v("Fast-RTPS-Gen")]),t._v(" to use in the PX4 build system and with the microRTPS bridge.")]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("You do not have to install Fast DDS if you have ROS 2 Dashing (Ubuntu 18.04) or ROS 2 Foxy (Ubuntu 20.04) installed, as it comes included with the default "),s("code",[t._v("base")]),t._v(" or "),s("code",[t._v("desktop")]),t._v(" installations through the "),s("code",[t._v("ros-<distro>-rmw-fastrtps")]),t._v(" package.\nThis means you just need to install "),s("em",[t._v("Fast-RTPS-Gen")]),t._v(" and have your ROS 2 environment sourced ("),s("code",[t._v("source /opt/ros/<distro>/setup.bash")]),t._v(") in order to be able to compile the "),s("code",[t._v("rtps")]),t._v(" targets in the PX4-Autopilot repo.")]),t._v(" "),s("p",[t._v("For "),s("em",[t._v("ROS2 Galactic and above")]),t._v(", one has to install the "),s("code",[t._v("rmw")]),t._v(" implementation through "),s("code",[t._v("apt")]),t._v(" using "),s("code",[t._v("apt install ros-galatic-rmw-fastrtps")]),t._v(", since the default middleware for Galactic and above is CycloneDDS and the FastDDS middleware doesn't come installed by default.")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("Fast DDS is not an essential component of the PX4 Autopilot and should only be installed if you plan to interface the PX4 Autopilot with Fast RTPS/DDS participants.\nROS 2 nodes are an example of these, though Fast DDS middleware and C++ implementations are installed by default on ROS 2 Foxy and below, as mentioned above.")])]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("Fast DDS was previously named FastRTPS (the name was changed in version 2.0.0 as it now includes a full DDS implementation, rather than just the RTPS wire protocol).")])]),t._v(" "),s("h2",{attrs:{id:"prerequisites"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[t._v("#")]),t._v(" Prerequisites")]),t._v(" "),s("p",[s("em",[t._v("eProsima Fast DDS")]),t._v(" requires the following packages to work.")]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("At time of writing you will need to install "),s("em",[t._v("from source")]),t._v(" for:")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Ubuntu 18.04:")]),t._v(" Fast RTPS 1.8.4 (or later) and Fast-RTPS-Gen 1.0.4 (not later!).")]),t._v(" "),s("li",[s("strong",[t._v("Ubuntu 20.04:")]),t._v(" Fast DDS 2.0.2 (or later) and Fast-RTPS-Gen 1.0.4 (not later!).")])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("Remember (again) you only need to install Fast DDS if you are not using ROS 2 and just want to leverage non-ROS2 DDS networks and applications.\nIf you have ROS 2 installed (and "),s("code",[t._v("rmw-fasrtps")]),t._v(" as its default middleware), you can skip to "),s("a",{attrs:{href:"#fast-rtps-gen"}},[t._v("Fast-RTPS-Gen build and install")]),t._v(".")])]),t._v(" "),s("h3",{attrs:{id:"java"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#java"}},[t._v("#")]),t._v(" Java")]),t._v(" "),s("p",[t._v("Java is required to build and use eProsima's RTPS/DDS from IDL code generation tool - "),s("em",[t._v("Fast-RTPS-Gen")]),t._v(".\n"),s("a",{attrs:{href:"https://www.oracle.com/java/technologies/javase-jdk11-downloads.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java JDK 11"),s("OutboundLink")],1),t._v(" is recommended, and it is installed through the setup scripts made available in "),s("RouterLink",{attrs:{to:"/en/dev_setu/dev_env_linux.html"}},[t._v("Ubuntu Development Environment")]),t._v(".")],1),t._v(" "),s("h3",{attrs:{id:"gradle"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gradle"}},[t._v("#")]),t._v(" Gradle")]),t._v(" "),s("p",[t._v("You also need to "),s("a",{attrs:{href:"https://gradle.org/install/",target:"_blank",rel:"noopener noreferrer"}},[t._v("install Gradle"),s("OutboundLink")],1),t._v(" to build "),s("em",[t._v("Fast-RTPS-Gen")]),t._v(".\nWe recommend you install Gradle via "),s("a",{attrs:{href:"https://sdkman.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("sdkman"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("Do not install Gradle version 7 or higher.\nThe recommended version is 6.3.")])]),t._v(" "),s("h3",{attrs:{id:"foonathan-memory"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#foonathan-memory"}},[t._v("#")]),t._v(" Foonathan memory")]),t._v(" "),s("p",[t._v("In order to build Fast DDS you need to install the Foonathan Memory dependency.")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/eProsima/foonathan_memory_vendor.git\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" foonathan_memory_vendor\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" build "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" build\ncmake "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("\ncmake --build "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" --target "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])]),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("If the last step fails, try running the command with the proper user privileges ("),s("code",[t._v("sudo")]),t._v(").")])]),t._v(" "),s("h2",{attrs:{id:"installation-from-sources"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation-from-sources"}},[t._v("#")]),t._v(" Installation from Sources")]),t._v(" "),s("h3",{attrs:{id:"fast-dds"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fast-dds"}},[t._v("#")]),t._v(" Fast DDS")]),t._v(" "),s("p",[t._v("Clone the project from Github:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone --recursive https://github.com/eProsima/Fast-DDS.git -b v2.0.2 ~/FastDDS-2.0.2\n$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~/FastDDS-2.0.2\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" build "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" build\n")])])]),s("p",[t._v("If you are on Linux, execute:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("$ cmake -DTHIRDPARTY"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ON -DSECURITY"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ON "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" -j"),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("nproc --all"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])]),s("p",[t._v("This will install Fast DDS to "),s("code",[t._v("/usr/local")]),t._v(", with secure communications support.\nIf you need to install to a custom location you can use: "),s("code",[t._v("-DCMAKE_INSTALL_PREFIX=<path>")]),t._v(".")]),t._v(" "),s("h4",{attrs:{id:"compile-options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#compile-options"}},[t._v("#")]),t._v(" Compile Options")]),t._v(" "),s("p",[t._v("The following additional arguments can be used when calling "),s("em",[t._v("CMake")]),t._v(":")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("-DCOMPILE_EXAMPLES=ON")]),t._v(": Compile the examples")]),t._v(" "),s("li",[s("code",[t._v("-DPERFORMANCE_TESTS=ON")]),t._v(": Compile the performance tests")])]),t._v(" "),s("h3",{attrs:{id:"fast-rtps-gen"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fast-rtps-gen"}},[t._v("#")]),t._v(" Fast-RTPS-Gen")]),t._v(" "),s("p",[s("em",[t._v("Fast-RTPS-Gen")]),t._v(" is the Fast RTPS (DDS) IDL code generator tool.\nIt should be installed after Fast RTPS (DDS) and made sure the "),s("code",[t._v("fastrtpsgen")]),t._v(" application is in your "),s("code",[t._v("PATH")]),t._v(".\nYou can check with "),s("code",[t._v("which fastrtpsgen")]),t._v(".")]),t._v(" "),s("p",[t._v("Then install Fast-RTPS-Gen 1.0.4 (Gradle is required for this):")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('git clone --recursive https://github.com/eProsima/Fast-DDS-Gen.git -b v1.0.4 ~/Fast-RTPS-Gen \\\n    && cd ~/Fast-RTPS-Gen \\\n    && gradle assemble \\\n    && sudo env "PATH=$PATH" gradle install\n')])])]),s("h2",{attrs:{id:"installation-from-binaries"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation-from-binaries"}},[t._v("#")]),t._v(" Installation from Binaries")]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("Although the binaries are available, we recommend to build and install the code from source, given that the binaries may not come with required components and dependencies in place.")])]),t._v(" "),s("p",[t._v("The latest binary release of "),s("em",[t._v("eProsima Fast DDS")]),t._v(" can be downloaded from the "),s("a",{attrs:{href:"http://www.eprosima.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("company website"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[t._v("Documentation on how to do this can be found here: "),s("a",{attrs:{href:"https://fast-dds.docs.eprosima.com/en/latest/installation/binaries/binaries_linux.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Installation from Binaries on Linux"),s("OutboundLink")],1),t._v(" and "),s("a",{attrs:{href:"https://fast-dds.docs.eprosima.com/en/latest/installation/binaries/binaries_windows.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Installation from Binaries on Windows"),s("OutboundLink")],1),t._v(" ("),s("em",[t._v("eProsima Fast DDS")]),t._v(" official documentation)")]),t._v(" "),s("h4",{attrs:{id:"environmental-variables"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#environmental-variables"}},[t._v("#")]),t._v(" Environmental Variables")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("FASTRTPSGEN_DIR")]),t._v(": Root folder where "),s("em",[t._v("eProsima Fast-RTPS-Gen")]),t._v(" is installed, usually set to "),s("code",[t._v("/usr/local")]),t._v(", which is the default installation directory.\nIf the user sets a different install directory in the "),s("code",[t._v("gradle install")]),t._v(" step, it must set this variable to that same directory as well.\nOtherwise, the code generation step, and consequently, the build of the "),s("code",[t._v("rtps")]),t._v(" targets in PX4 will fail.")])]),t._v(" "),s("h2",{attrs:{id:"further-information"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#further-information"}},[t._v("#")]),t._v(" Further Information")]),t._v(" "),s("ul",[s("li",[s("p",[s("RouterLink",{attrs:{to:"/en/middleware/micrortps.html"}},[t._v("RTPS/DDS Interface: PX4-Fast RTPS(DDS) Bridge")])],1)]),t._v(" "),s("li",[s("p",[s("RouterLink",{attrs:{to:"/en/ros/ros2_comm.html"}},[t._v("PX4-ROS 2 bridge")])],1)]),t._v(" "),s("li",[s("p",[t._v("Additional installation information can be found in the official "),s("a",{attrs:{href:"https://fast-dds.docs.eprosima.com/en/latest/",target:"_blank",rel:"noopener noreferrer"}},[s("em",[t._v("eProsima Fast DDS")]),t._v(" documentation"),s("OutboundLink")],1),t._v(" (from which this topic is derived):")]),t._v(" "),s("ul",[s("li",[t._v("Installation from Sources\n"),s("ul",[s("li",[s("a",{attrs:{href:"https://fast-dds.docs.eprosima.com/en/latest/installation/sources/sources_linux.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Linux"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://fast-dds.docs.eprosima.com/en/latest/installation/sources/sources_windows.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Windows"),s("OutboundLink")],1)])])]),t._v(" "),s("li",[t._v("Installation from Binaries\n"),s("ul",[s("li",[s("a",{attrs:{href:"https://fast-dds.docs.eprosima.com/en/latest/installation/binaries/binaries_linux.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Linux"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://fast-dds.docs.eprosima.com/en/latest/installation/binaries/binaries_windows.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Windows"),s("OutboundLink")],1)])])])])])])])}),[],!1,null,null,null);a.default=n.exports},397:function(t,a){t.exports="data:image/png;base64,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"}}]);