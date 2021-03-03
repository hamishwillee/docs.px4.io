(window.webpackJsonp=window.webpackJsonp||[]).push([[667],{2415:function(t,a,s){"use strict";s.r(a);var e=s(18),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"fastrtps-安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fastrtps-安装"}},[t._v("#")]),t._v(" FastRTPS 安装")]),t._v(" "),e("p",[e("img",{staticStyle:{float:"left"},attrs:{alt:"logo",src:s(384)}}),t._v(" "),e("a",{attrs:{href:"http://eprosima-fast-rtps.readthedocs.io/en/latest/",target:"_blank",rel:"noopener noreferrer"}},[t._v("eProsima Fast RTPS"),e("OutboundLink")],1),t._v(" 是 RTPS（实时发布订阅者）协议的 C++ 实现，它在不可靠的传输（如 UDP）上提供发布者-订阅者通信，由对象管理组（OMG）定义和维护社区。 RTPS 也是为数据分发服务（DDS）标准定义的有线互操作性协议，也是由 OMG 定义的。")]),t._v(" "),e("p",[t._v("PX4 使用 FastRTPS，使 RTPS 接口能够与板外组件（包括机器人和模拟器工具）共享 PX4 uORB 主题。 RTPS 是 DDS 的基本协议，是 OMG（对象管理组）提供实时发布/订阅中间件的标准，广泛应用于航空航天、国防和物联网应用。 它也被用作 ROS2 机器人工具包的中间件。 有关详细信息，请参阅："),e("RouterLink",{attrs:{to:"/zh/middleware/micrortps.html"}},[t._v("RTPS/ROS2 接口：PX4-FastRTPS Bridge")]),t._v("。")],1),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),e("p",[t._v("For Ubuntu, at time of writing, you will need to install Fast-RTPS 1.8.2 "),e("em",[t._v("from source")]),t._v(".")])]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),e("p",[t._v("This topic is derived from the official "),e("a",{attrs:{href:"http://eprosima-fast-rtps.readthedocs.io/en/latest/",target:"_blank",rel:"noopener noreferrer"}},[e("em",[t._v("eProsima Fast RTPS")]),t._v(" documentation"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("p",[t._v("For more information see:")]),t._v(" "),e("ul",[e("li",[t._v("源码安装\n"),e("ul",[e("li",[e("a",{attrs:{href:"https://fast-dds.docs.eprosima.com/en/latest/installation/sources/sources_linux.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Linux"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://fast-dds.docs.eprosima.com/en/latest/installation/sources/sources_windows.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Windows"),e("OutboundLink")],1)])])]),t._v(" "),e("li",[t._v("二进制安装\n"),e("ul",[e("li",[e("a",{attrs:{href:"https://fast-dds.docs.eprosima.com/en/latest/installation/binaries/binaries_linux.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Linux"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://fast-dds.docs.eprosima.com/en/latest/installation/binaries/binaries_windows.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Windows"),e("OutboundLink")],1)])])])])]),t._v(" "),e("h2",{attrs:{id:"标准安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#标准安装"}},[t._v("#")]),t._v(" 标准安装")]),t._v(" "),e("p",[t._v("在 Github 上下载项目：")]),t._v(" "),e("h3",{attrs:{id:"依赖"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#依赖"}},[t._v("#")]),t._v(" 依赖")]),t._v(" "),e("h4",{attrs:{id:"java"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#java"}},[t._v("#")]),t._v(" Java")]),t._v(" "),e("p",[t._v("Java is required to use our built-in code generation tool - "),e("em",[t._v("fastrtpsgen")]),t._v(". "),e("a",{attrs:{href:"http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java JDK 8"),e("OutboundLink")],1),t._v(" is recommended.")]),t._v(" "),e("h3",{attrs:{id:"windows-7-32位和64位"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#windows-7-32位和64位"}},[t._v("#")]),t._v(" Windows 7 32位和64位")]),t._v(" "),e("h4",{attrs:{id:"visual-c-2013-or-2015-redistributable-package"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#visual-c-2013-or-2015-redistributable-package"}},[t._v("#")]),t._v(" Visual C++ 2013 or 2015 Redistributable Package")]),t._v(" "),e("p",[t._v("这会将 FastRTPS 安装在 "),e("code",[t._v("/usr/local")]),t._v("。 您可以使用 "),e("code",[t._v("-DCMAKE_INSTALL_PREFIX=<path>")]),t._v(" 定义自己的安装路径。")]),t._v(" "),e("h2",{attrs:{id:"要求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#要求"}},[t._v("#")]),t._v(" 要求")]),t._v(" "),e("h3",{attrs:{id:"windows-7-32位和64位-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#windows-7-32位和64位-2"}},[t._v("#")]),t._v(" Windows 7 32位和64位")]),t._v(" "),e("p",[t._v("如果您在 Linux 上，请执行：")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/eProsima/Fast-RTPS\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" Fast-RTPS/build "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" Fast-RTPS/build\n")])])]),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),e("p",[t._v("You may need to "),e("a",{attrs:{href:"https://gradle.org/install/",target:"_blank",rel:"noopener noreferrer"}},[t._v("install Gradle"),e("OutboundLink")],1),t._v(" to build the source (e.g. this is true on vanilla Fedora Linux). A build warning will be displayed if this is the case.")])]),t._v(" "),e("p",[t._v("如果你是在 Windows，选择 "),e("em",[t._v("Visual Studio")]),t._v(" 的版本：")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("$ cmake -DTHIRDPARTY"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ON -DSECURITY"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ON "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("\n$ cmake -DTHIRDPARTY"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ON -DBUILD_JAVA"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ON "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])]),e("p",[t._v("This will install Fast RTPS to "),e("code",[t._v("/usr/local")]),t._v(", with secure communications support. 然后确保 "),e("code",[t._v("fastrtpsgen")]),t._v(" 已经在你的 "),e("code",[t._v("PATH")]),t._v("。")]),t._v(" "),e("p",[t._v("如果你想编译性能测试程序，那么请在调用 "),e("em",[t._v("CMake")]),t._v(" 时，添加参数 "),e("code",[t._v("-DPERFORMANCE_TESTS=ON")]),t._v("。")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" cmake -G "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Visual Studio 14 2015 Win64"')]),t._v(" -DTHIRDPARTY"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ON -DBUILD_JAVA"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ON "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" cmake --build "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" --target "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" cmake --build "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" --target "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])]),e("h4",{attrs:{id:"环境变量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#环境变量"}},[t._v("#")]),t._v(" 环境变量")]),t._v(" "),e("p",[t._v("你可以从 "),e("a",{attrs:{href:"http://www.eprosima.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网"),e("OutboundLink")],1),t._v(" 下载最新发布的 "),e("em",[t._v("eProsima Fast RTPS")]),t._v(" 的可执行文件。")]),t._v(" "),e("p",[t._v("操作文档请参见： "),e("a",{attrs:{href:"http://eprosima-fast-rtps.readthedocs.io/en/latest/binaries.html#installation-from-binaries",target:"_blank",rel:"noopener noreferrer"}},[t._v("二进制安装"),e("OutboundLink")],1),t._v("（"),e("em",[t._v("eProsima Fast RTPS")]),t._v(" 官方文档）")]),t._v(" "),e("h3",{attrs:{id:"fast-rtps-gen"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fast-rtps-gen"}},[t._v("#")]),t._v(" Fast-RTPS-Gen")]),t._v(" "),e("p",[e("em",[t._v("Fast-RTPS-Gen")]),t._v(" is the Fast RTPS IDL code generator tool. It should be installed after Fast RTPS and made sure the "),e("code",[t._v("fastrtpsgen")]),t._v(" application is in your "),e("code",[t._v("PATH")]),t._v(". You can check with "),e("code",[t._v("which fastrtpsgen")]),t._v(".")]),t._v(" "),e("p",[e("em",[t._v("eProsima Fast RTPS")]),t._v(" 功能配置完善，需要如下的环境变量配置生效。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git clone --recursive https://github.com/eProsima/Fast-RTPS-Gen.git -b v1.0.4 ~/Fast-RTPS-Gen \\\n    && cd ~/Fast-RTPS-Gen \\\n    && ./gradlew assemble \\\n    && sudo ./gradlew install\n")])])]),e("h2",{attrs:{id:"源码安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#源码安装"}},[t._v("#")]),t._v(" 源码安装")]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),e("p",[t._v("Although the binaries are available, we recommend to build and install the code from source, given that the binaries may not come with required components and dependencies in place.")])]),t._v(" "),e("p",[t._v("You can always download the latest binary release of "),e("em",[t._v("eProsima Fast RTPS")]),t._v(" from the "),e("a",{attrs:{href:"http://www.eprosima.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("company website"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("p",[t._v("配置编译：")]),t._v(" "),e("h3",{attrs:{id:"windows-7-32位和64位-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#windows-7-32位和64位-3"}},[t._v("#")]),t._v(" Windows 7 32位和64位")]),t._v(" "),e("p",[t._v("如果要使用调试符号进行编译（这也启用了verbose模式）：")]),t._v(" "),e("h4",{attrs:{id:"环境变量-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#环境变量-2"}},[t._v("#")]),t._v(" 环境变量")]),t._v(" "),e("p",[t._v("配置项目后，编译并安装库：")]),t._v(" "),e("ul",[e("li",[e("em",[t._v("eProsima Fast RTPS")]),t._v(" 需要以下软件包才能正常工作。")]),t._v(" "),e("li",[e("code",[t._v("FASTRTPSGEN_DIR")]),t._v(": Root folder where "),e("em",[t._v("eProsima FastRTPSGen")]),t._v(" is installed.")]),t._v(" "),e("li",[t._v("添加到 "),e("code",[t._v("PATH")]),t._v("：所选 Visual Studio 版本的 "),e("strong",[t._v("/bin")]),t._v(" 文件夹和子文件夹应追加到 PATH 中。")])]),t._v(" "),e("p",[t._v("These variables are set automatically by checking the corresponding box during the installation process.")]),t._v(" "),e("h3",{attrs:{id:"linux"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux"}},[t._v("#")]),t._v(" Linux")]),t._v(" "),e("p",[t._v("Extract the contents of the package. It will contain both "),e("em",[t._v("eProsima Fast RTPS")]),t._v(" and its required package "),e("em",[t._v("eProsima Fast CDR")]),t._v(". You will have follow the same procedure for both packages, starting with "),e("em",[t._v("Fast CDR")]),t._v(".")]),t._v(" "),e("p",[t._v("Configure the compilation:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("$ ./configure --libdir"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/lib\n")])])]),e("p",[t._v("If you want to compile with debug symbols (which also enables verbose mode):")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("$ ./configure "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("CXXFLAGS")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-g -D__DEBUG"')]),t._v("  --libdir"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/lib\n")])])]),e("p",[t._v("After configuring the project compile and install the library:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])]),e("h4",{attrs:{id:"环境变量-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#环境变量-3"}},[t._v("#")]),t._v(" 环境变量")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("FASTRTPSGEN_DIR")]),t._v(": Root folder where "),e("em",[t._v("eProsima FastRTPSGen")]),t._v(" is installed, usually set to "),e("code",[t._v("/usr/local")]),t._v(", which is the default installation directory. If the user sets a different install directory in the "),e("code",[t._v("gradle install")]),t._v(" step, it must set it here as well.")])])])}),[],!1,null,null,null);a.default=r.exports},384:function(t,a){t.exports="data:image/png;base64,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"}}]);