(window.webpackJsonp=window.webpackJsonp||[]).push([[1212],{2489:function(t,e,a){"use strict";a.r(e);var s=a(19),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"mac-上的开发环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mac-上的开发环境"}},[t._v("#")]),t._v(" Mac 上的开发环境")]),t._v(" "),a("p",[t._v("MacOS 是受支持的 PX4 开发平台。 根据本文的指示构建的开发环境可以用编译：")]),t._v(" "),a("ul",[a("li",[t._v("基于 NuttX 的硬件 (Pixhawk等)")]),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/simulation/jmavsim.html"}},[t._v("jMAVSim Simulation")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/simulation/gazebo.html"}},[t._v("Gazebo Simulation")])],1)]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("DETAILS")]),t._v(" "),a("p",[t._v("Apple M1 Macbook users! If you have an Apple M1 Macbook, make sure to run the terminal as x86 by setting up an x86 terminal:")]),t._v(" "),a("ol",[a("li",[t._v("Locate the Terminal application within the Utilities folder ("),a("strong",[t._v("Finder > Go menu > Utilities")]),t._v(")")]),t._v(" "),a("li",[t._v("Select "),a("em",[t._v("Terminal.app")]),t._v(" and right-click on it, then choose "),a("strong",[t._v("Duplicate")]),t._v(".")]),t._v(" "),a("li",[t._v("Rename the duplicated Terminal app, e.g. to "),a("em",[t._v("x86 Terminal")])]),t._v(" "),a("li",[t._v("Now select the renamed "),a("em",[t._v("x86 Terminal")]),t._v(" app and right-click and choose *"),a("em",[t._v("Get Info")])]),t._v(" "),a("li",[t._v("Check the box for "),a("strong",[t._v("Open using Rosetta")]),t._v(", then close the window")]),t._v(" "),a("li",[t._v("Run the "),a("em",[t._v("x86 Terminal")]),t._v("` as usual, which will fully support the current PX4 toolchain")])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("This setup is supported by the PX4 dev team. To build other targets you will need to use a "),a("RouterLink",{attrs:{to:"/zh/dev_setup/dev_env.html#supported-targets"}},[t._v("different OS")]),t._v(" (or an "),a("RouterLink",{attrs:{to:"/zh/advanced/dev_env_unsupported.html"}},[t._v("unsupported development environment")]),t._v(").")],1)]),t._v(" "),a("h2",{attrs:{id:"homebrew-安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#homebrew-安装"}},[t._v("#")]),t._v(" Homebrew 安装")]),t._v(" "),a("p"),a("div",{staticClass:"embed-responsive embed-responsive-16by9"},[a("iframe",{staticClass:"embed-responsive-item youtube-player",attrs:{type:"text/html",width:"640",height:"390",src:"https://www.youtube.com/embed/tMbMGiMs1cQ",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]),a("p"),t._v(" "),a("h2",{attrs:{id:"常用工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用工具"}},[t._v("#")]),t._v(" 常用工具")]),t._v(" "),a("p",[t._v("The installation of Homebrew is quick and easy: "),a("a",{attrs:{href:"https://brew.sh",target:"_blank",rel:"noopener noreferrer"}},[t._v("installation instructions"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"额外工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#额外工具"}},[t._v("#")]),t._v(" 额外工具")]),t._v(" "),a("p",[t._v("完成编译/仿真开发环境设置后，你可以从 "),a("RouterLink",{attrs:{to:"/zh/setup/generic_dev_tools.html"}},[t._v("Additional Tools")]),t._v(" 找到一些有用的“通用”开发工具。")],1),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("brew tap PX4/px4\nbrew "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" px4-dev\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 可选，但建议安装额外的仿真模拟用工具")]),t._v("\nbrew "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" px4-sim\n")])])]),a("h2",{attrs:{id:"后续步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#后续步骤"}},[t._v("#")]),t._v(" 后续步骤")]),t._v(" "),a("p",[t._v("设置完环境后，请转至 "),a("RouterLink",{attrs:{to:"/zh/setup/building_px4.html"}},[t._v("build instructions")]),t._v(" 。")],1),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("brew cask "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" xquartz java\n")])])]),a("h2",{attrs:{id:"gazebo-仿真"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gazebo-仿真"}},[t._v("#")]),t._v(" Gazebo 仿真")]),t._v(" "),a("p",[t._v("After installing Homebrew, run these commands in your shell to install the common tools:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" easy_install pip\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" -H pip "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" pyserial empy toml numpy pandas jinja2 pyyaml\n")])])]),a("p",[t._v("Install the required Python packages")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# install required packages using pip3")]),t._v("\npython3 -m pip "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --user pyserial empy toml numpy pandas jinja2 pyyaml pyros-genmsg packaging\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# if this fails with a permissions error, your Python install is in a system path - use this command instead:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" -H python3 -m pip "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --user pyserial empy toml numpy pandas jinja2 pyyaml pyros-genmsg packaging\n")])])]),a("h2",{attrs:{id:"jmavsim-仿真模拟"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jmavsim-仿真模拟"}},[t._v("#")]),t._v(" jMAVSim 仿真模拟")]),t._v(" "),a("p",[t._v("To install SITL simulation with Gazebo:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("brew "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --cask xquartz\nbrew "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" px4-sim-gazebo\n")])])]),a("h2",{attrs:{id:"额外工具-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#额外工具-2"}},[t._v("#")]),t._v(" 额外工具")]),t._v(" "),a("p",[t._v("To use SITL simulation with jMAVSim you need to install a recent version of Java (e.g. Java 15). You can download "),a("a",{attrs:{href:"https://www.oracle.com/java/technologies/javase-downloads.html#JDK15",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java 15 (or later) from Oracle"),a("OutboundLink")],1),t._v(" or use the AdoptOpenJDK tap:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("brew tap AdoptOpenJDK/openjdk\nbrew "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --cask adoptopenjdk15\n")])])]),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("brew "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" px4-sim-jmavsim\n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("jMAVSim for PX4 v1.11 and beyond we require at least JDK 15.")]),t._v(" "),a("p",[t._v("For earlier versions macOS users might see the error "),a("code",[t._v('Exception in thread "main" java.lang.UnsupportedClassVersionError:')]),t._v(". You can find the fix in the "),a("RouterLink",{attrs:{to:"/zh/simulation/jmavsim.html#troubleshooting"}},[t._v("jMAVSim with SITL > Troubleshooting")]),t._v(").")],1)]),t._v(" "),a("h2",{attrs:{id:"后续步骤-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#后续步骤-2"}},[t._v("#")]),t._v(" 后续步骤")]),t._v(" "),a("p",[t._v("Once you have finished setting up the command-line toolchain:")]),t._v(" "),a("ul",[a("li",[t._v("Install "),a("RouterLink",{attrs:{to:"/zh/dev_setup/vscode.html"}},[t._v("VSCode")]),t._v(" (if you prefer using an IDE to the command line).")],1),t._v(" "),a("li",[t._v("Install the "),a("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/releases/daily_builds.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGroundControl Daily Build"),a("OutboundLink")],1),t._v(" :::tip The "),a("em",[t._v("daily build")]),t._v(" includes development tools that are hidden in release builds. It may also provide access to new PX4 features that are not yet supported in release builds.\n:::")]),t._v(" "),a("li",[t._v("Continue to the "),a("RouterLink",{attrs:{to:"/zh/dev_setup/building_px4.html"}},[t._v("build instructions")]),t._v(".")],1)])])}),[],!1,null,null,null);e.default=n.exports}}]);