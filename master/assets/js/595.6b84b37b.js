(window.webpackJsonp=window.webpackJsonp||[]).push([[595],{2023:function(t,a,e){"use strict";e.r(a);var s=e(18),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"fast-dds-installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fast-dds-installation"}},[t._v("#")]),t._v(" Fast DDS Installation")]),t._v(" "),s("p",[s("img",{staticStyle:{float:"left"},attrs:{alt:"logo",src:e(390)}}),t._v(" "),s("a",{attrs:{href:"https://github.com/eProsima/Fast-DDS",target:"_blank",rel:"noopener noreferrer"}},[t._v("eProsima Fast DDS"),s("OutboundLink")],1),t._v(" is a C++ implementation of the Object Management Group's (OMG) Data Distribution Service (DDS) specification and the Real Time Publish Subscribe (RTPS) protocol.")]),t._v(" "),s("p",[t._v("Fast DDS enables an RTPS/DDS interface that allows PX4 uORB topics to be shared with offboard components, including robotics and simulator tools, that participate in same DDS domain. In particular, Fast DDS is the default middleware implementation for Robot Operating System 2 (ROS 2), and is essential for integrating PX4 with ROS2.")]),t._v(" "),s("p",[t._v("This topic explains how to install Fast DDS for use with PX4.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("Fast DDS is not an essential component of the PX4 Autopilot and should only be installed if you plan to use the PX4 Autopilot with another Fast RTPS/DDS system such as ROS 2.")])]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("Fast DDS was previously named FastRTPS (the name was changed in version 2.0.0 as it now includes a full DDS implementation, rather than just the RTPS wire protocol).")])]),t._v(" "),s("h2",{attrs:{id:"prerequisites"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[t._v("#")]),t._v(" Prerequisites")]),t._v(" "),s("p",[s("em",[t._v("eProsima Fast DDS")]),t._v(" requires the following packages to work.")]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("At time of writing you will need to install "),s("em",[t._v("from source")]),t._v(" for:")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Ubuntu 18.04:")]),t._v(" Fast RTPS 1.8.2 and Fast-RTPS-Gen 1.0.4 (or higher).")]),t._v(" "),s("li",[s("strong",[t._v("Ubuntu 20.04:")]),t._v(" Fast DDS 2.0.0 and Fast-RTPS-Gen 1.0.4 (or higher).")])])]),t._v(" "),s("h3",{attrs:{id:"java"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#java"}},[t._v("#")]),t._v(" Java")]),t._v(" "),s("p",[t._v("Java is required to use our built-in code generation tool - "),s("em",[t._v("fastrtpsgen")]),t._v(". "),s("a",{attrs:{href:"http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java JDK 8"),s("OutboundLink")],1),t._v(" is recommended.")]),t._v(" "),s("h3",{attrs:{id:"gradle"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gradle"}},[t._v("#")]),t._v(" Gradle")]),t._v(" "),s("p",[t._v("You also need to "),s("a",{attrs:{href:"https://gradle.org/install/",target:"_blank",rel:"noopener noreferrer"}},[t._v("install Gradle"),s("OutboundLink")],1),t._v(" to build the source generators (Fast-RTPS-Gen), we recommend you install Gradle via "),s("a",{attrs:{href:"https://sdkman.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("sdkman"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h3",{attrs:{id:"foonathan-memory"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#foonathan-memory"}},[t._v("#")]),t._v(" Foonathan memory")]),t._v(" "),s("p",[t._v("In order to build Fast DDS you need to install the Foonathan Memory dependency.")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/eProsima/foonathan_memory_vendor.git\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" foonathan_memory_vendor\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" build "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" build\ncmake "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("\ncmake --build "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" --target "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])]),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("If the last step fails, try running the command with the proper user privileges (sudo)")])]),t._v(" "),s("h3",{attrs:{id:"windows-7-32-bit-and-64-bit"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#windows-7-32-bit-and-64-bit"}},[t._v("#")]),t._v(" Windows 7 32-bit and 64-bit")]),t._v(" "),s("h4",{attrs:{id:"visual-c-2013-or-2015-redistributable-package"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#visual-c-2013-or-2015-redistributable-package"}},[t._v("#")]),t._v(" Visual C++ 2013 or 2015 Redistributable Package")]),t._v(" "),s("p",[s("em",[t._v("eProsima Fast DDS")]),t._v(" requires the Visual C++ Redistributable packages for the Visual Studio version you chose during the installation or compilation. The installer gives you the option of downloading and installing them.")]),t._v(" "),s("h2",{attrs:{id:"installation-from-sources"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation-from-sources"}},[t._v("#")]),t._v(" Installation from Sources")]),t._v(" "),s("h3",{attrs:{id:"fast-rtps-dds"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fast-rtps-dds"}},[t._v("#")]),t._v(" Fast-RTPS (DDS)")]),t._v(" "),s("p",[t._v("Clone the project from Github:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone --recursive https://github.com/eProsima/Fast-DDS.git -b v2.0.0 ~/FastDDS-2.0.0\n$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~/FastDDS-2.0.0\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" build "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" build\n")])])]),s("p",[t._v("If you are on Linux, execute:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("$ cmake -DTHIRDPARTY"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ON -DSECURITY"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ON "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" -j"),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("nproc --all"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])]),s("p",[t._v("This will install Fast DDS to "),s("code",[t._v("/usr/local")]),t._v(", with secure communications support. If you need to install to a custom location you can use: "),s("code",[t._v("-DCMAKE_INSTALL_PREFIX=<path>")]),t._v(".")]),t._v(" "),s("p",[t._v("If you are on Windows, choose your version of "),s("em",[t._v("Visual Studio")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" cmake -G "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Visual Studio 14 2015 Win64"')]),t._v(" -DTHIRDPARTY"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ON -DSECURITY"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ON "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" cmake --build "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" --target "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])]),s("h4",{attrs:{id:"compile-options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#compile-options"}},[t._v("#")]),t._v(" Compile Options")]),t._v(" "),s("p",[t._v("The following additional arguments can be used when calling "),s("em",[t._v("CMake")]),t._v(":")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("-DCOMPILE_EXAMPLES=ON")]),t._v(": Compile the examples")]),t._v(" "),s("li",[s("code",[t._v("-DPERFORMANCE_TESTS=ON")]),t._v(": Compile the performance tests")])]),t._v(" "),s("h3",{attrs:{id:"fast-rtps-gen"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fast-rtps-gen"}},[t._v("#")]),t._v(" Fast-RTPS-Gen")]),t._v(" "),s("p",[s("em",[t._v("Fast-RTPS-Gen")]),t._v(" is the Fast RTPS (DDS) IDL code generator tool. It should be installed after Fast RTPS (DDS) and made sure the "),s("code",[t._v("fastrtpsgen")]),t._v(" application is in your "),s("code",[t._v("PATH")]),t._v(". You can check with "),s("code",[t._v("which fastrtpsgen")]),t._v(".")]),t._v(" "),s("p",[t._v("Then install Fast-RTPS-Gen 1.0.4 (Gradle is required for this):")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("git clone --recursive https://github.com/eProsima/Fast-DDS-Gen.git -b v1.0.4 ~/Fast-RTPS-Gen \\\n    && cd ~/Fast-RTPS-Gen \\\n    && ./gradlew assemble \\\n    && sudo ./gradlew install\n")])])]),s("h2",{attrs:{id:"installation-from-binaries"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation-from-binaries"}},[t._v("#")]),t._v(" Installation from Binaries")]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("Although the binaries are available, we recommend to build and install the code from source, given that the binaries may not come with required components and dependencies in place.")])]),t._v(" "),s("p",[t._v("The latest binary release of "),s("em",[t._v("eProsima Fast DDS")]),t._v(" can be downloaded from the "),s("a",{attrs:{href:"http://www.eprosima.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("company website"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[t._v("Documentation on how to do this can be found here: "),s("a",{attrs:{href:"https://fast-dds.docs.eprosima.com/en/latest/installation/binaries/binaries_linux.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Installation from Binaries on Linux"),s("OutboundLink")],1),t._v(" and "),s("a",{attrs:{href:"https://fast-dds.docs.eprosima.com/en/latest/installation/binaries/binaries_windows.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Installation from Binaries on Windows"),s("OutboundLink")],1),t._v(" ("),s("em",[t._v("eProsima Fast DDS")]),t._v(" official documentation)")]),t._v(" "),s("h3",{attrs:{id:"windows-7-32-bit-and-64-bit-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#windows-7-32-bit-and-64-bit-2"}},[t._v("#")]),t._v(" Windows 7 32-bit and 64-bit")]),t._v(" "),s("p",[t._v("Execute the installer and follow the instructions, choosing your preferred "),s("em",[t._v("Visual Studio")]),t._v(" version and architecture when prompted.")]),t._v(" "),s("h4",{attrs:{id:"environmental-variables"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#environmental-variables"}},[t._v("#")]),t._v(" Environmental Variables")]),t._v(" "),s("p",[s("em",[t._v("eProsima Fast DDS")]),t._v(" requires the following environmental variable setup in order to function properly")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("FASTRTPSHOME")]),t._v(": Root folder where "),s("em",[t._v("eProsima Fast DDS")]),t._v(" is installed.")]),t._v(" "),s("li",[s("code",[t._v("FASTRTPSGEN_DIR")]),t._v(": Root folder where "),s("em",[t._v("eProsima Fast-RTPS-Gen")]),t._v(" is installed.")]),t._v(" "),s("li",[t._v("Additions to the "),s("code",[t._v("PATH")]),t._v(": the "),s("strong",[t._v("/bin")]),t._v(" folder and the subfolder for your Visual Studio version of choice should be appended to the PATH.")])]),t._v(" "),s("p",[t._v("These variables are set automatically by checking the corresponding box during the installation process.")]),t._v(" "),s("h3",{attrs:{id:"linux"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux"}},[t._v("#")]),t._v(" Linux")]),t._v(" "),s("p",[t._v("Extract the contents of the package. It will contain both "),s("em",[t._v("eProsima Fast DDS")]),t._v(" and its required package "),s("em",[t._v("eProsima Fast CDR")]),t._v(". You will have follow the same procedure for both packages, starting with "),s("em",[t._v("Fast CDR")]),t._v(".")]),t._v(" "),s("p",[t._v("Configure the compilation:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("$ ./configure --libdir"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/lib\n")])])]),s("p",[t._v("If you want to compile with debug symbols (which also enables verbose mode):")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("$ ./configure "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("CXXFLAGS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-g -D__DEBUG"')]),t._v("  --libdir"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/lib\n")])])]),s("p",[t._v("After configuring the project compile and install the library:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])]),s("h4",{attrs:{id:"environmental-variables-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#environmental-variables-2"}},[t._v("#")]),t._v(" Environmental Variables")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("FASTRTPSGEN_DIR")]),t._v(": Root folder where "),s("em",[t._v("eProsima Fast-RTPS-Gen")]),t._v(" is installed, usually set to "),s("code",[t._v("/usr/local")]),t._v(", which is the default installation directory. If the user sets a different install directory in the "),s("code",[t._v("gradle install")]),t._v(" step, it must set it here as well.")])]),t._v(" "),s("h2",{attrs:{id:"further-information"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#further-information"}},[t._v("#")]),t._v(" Further Information")]),t._v(" "),s("ul",[s("li",[s("p",[s("RouterLink",{attrs:{to:"/ko/middleware/micrortps.html"}},[t._v("RTPS/DDS Interface: PX4-Fast RTPS(DDS) Bridge")])],1)]),t._v(" "),s("li",[s("p",[s("RouterLink",{attrs:{to:"/ko/ros/ros2_comm.html"}},[t._v("PX4-ROS 2 bridge")])],1)]),t._v(" "),s("li",[s("p",[t._v("Additional installation information can be found in the official "),s("a",{attrs:{href:"https://fast-dds.docs.eprosima.com/en/latest/",target:"_blank",rel:"noopener noreferrer"}},[s("em",[t._v("eProsima Fast DDS")]),t._v(" documentation"),s("OutboundLink")],1),t._v(" (from which this topic is derived):")]),t._v(" "),s("ul",[s("li",[t._v("Installation from Sources\n"),s("ul",[s("li",[s("a",{attrs:{href:"https://fast-dds.docs.eprosima.com/en/latest/installation/sources/sources_linux.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Linux"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://fast-dds.docs.eprosima.com/en/latest/installation/sources/sources_windows.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Windows"),s("OutboundLink")],1)])])]),t._v(" "),s("li",[t._v("Installation from Binaries\n"),s("ul",[s("li",[s("a",{attrs:{href:"https://fast-dds.docs.eprosima.com/en/latest/installation/binaries/binaries_linux.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Linux"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://fast-dds.docs.eprosima.com/en/latest/installation/binaries/binaries_windows.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Windows"),s("OutboundLink")],1)])])])])])])])}),[],!1,null,null,null);a.default=r.exports},390:function(t,a){t.exports="data:image/png;base64,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"}}]);