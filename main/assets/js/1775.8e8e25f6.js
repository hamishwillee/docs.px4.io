(window.webpackJsonp=window.webpackJsonp||[]).push([[1775],{3270:function(t,e,s){"use strict";s.r(e);var a=s(19),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"mac-上的开发环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mac-上的开发环境"}},[t._v("#")]),t._v(" Mac 上的开发环境")]),t._v(" "),s("p",[t._v("MacOS 是受支持的 PX4 开发平台。 根据本文的指示构建的开发环境可以用编译：")]),t._v(" "),s("ul",[s("li",[t._v("基于 NuttX 的硬件 (Pixhawk等)")]),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/zh/simulation/jmavsim.html"}},[t._v("额外工具")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/zh/sim_gazebo_classic/"}},[t._v("Gazebo Classic Simulation")])],1)]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("DETAILS")]),t._v(" "),s("p",[t._v("Apple M1 Macbook users! If you have an Apple M1 Macbook, make sure to run the terminal as x86 by setting up an x86 terminal:")]),t._v(" "),s("ol",[s("li",[t._v("Locate the Terminal application within the Utilities folder ("),s("strong",[t._v("Finder > Go menu > Utilities")]),t._v(")")]),t._v(" "),s("li",[t._v("Select "),s("em",[t._v("Terminal.app")]),t._v(" and right-click on it, then choose "),s("strong",[t._v("Duplicate")]),t._v(".")]),t._v(" "),s("li",[t._v("Rename the duplicated Terminal app, e.g. to "),s("em",[t._v("x86 Terminal")])]),t._v(" "),s("li",[t._v("Now select the renamed "),s("em",[t._v("x86 Terminal")]),t._v(" app and right-click and choose *"),s("em",[t._v("Get Info")])]),t._v(" "),s("li",[t._v("Check the box for "),s("strong",[t._v("Open using Rosetta")]),t._v(", then close the window")]),t._v(" "),s("li",[t._v("Run the "),s("em",[t._v("x86 Terminal")]),t._v(" as usual, which will fully support the current PX4 toolchain")])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("This setup is supported by the PX4 dev team. To build other targets you will need to use a "),s("RouterLink",{attrs:{to:"/zh/dev_setup/dev_env.html#supported-targets"}},[t._v("different OS")]),t._v(" (or an "),s("RouterLink",{attrs:{to:"/zh/advanced/dev_env_unsupported.html"}},[t._v("unsupported development environment")]),t._v(").")],1)]),t._v(" "),s("h2",{attrs:{id:"homebrew-安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#homebrew-安装"}},[t._v("#")]),t._v(" Homebrew 安装")]),t._v(" "),s("p"),s("div",{staticClass:"embed-responsive embed-responsive-16by9"},[s("iframe",{staticClass:"embed-responsive-item youtube-player",attrs:{type:"text/html",width:"640",height:"390",src:"https://www.youtube.com/embed/tMbMGiMs1cQ",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]),s("p"),t._v(" "),s("h2",{attrs:{id:"常用工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用工具"}},[t._v("#")]),t._v(" 常用工具")]),t._v(" "),s("p",[t._v("The installation of Homebrew is quick and easy: "),s("a",{attrs:{href:"https://brew.sh",target:"_blank",rel:"noopener noreferrer"}},[t._v("installation instructions"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"enable-more-open-files-handle-ld-too-many-open-files-error"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#enable-more-open-files-handle-ld-too-many-open-files-error"}},[t._v("#")]),t._v(' Enable more open files (Handle "LD: too many open files" error)')]),t._v(" "),s("p",[t._v("Create the "),s("code",[t._v("~/.zshenv")]),t._v(" file or append it (by running "),s("code",[t._v("open ~/.zshenv")]),t._v(" on the terminal) and add this line:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("ulimit")]),t._v(" -S -n "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2048")]),t._v("\n")])])]),s("h2",{attrs:{id:"enforce-python-version"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#enforce-python-version"}},[t._v("#")]),t._v(" Enforce Python Version")]),t._v(" "),s("p",[t._v("If not already existing, create the file "),s("code",[t._v("~/.zshrc")]),t._v(" and add these lines:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Point pip3 to MacOS system python 3 pip")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("alias")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("pip3")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/bin/pip3\n")])])]),s("h2",{attrs:{id:"common-tools"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#common-tools"}},[t._v("#")]),t._v(" Common Tools")]),t._v(" "),s("p",[t._v("After installing Homebrew, run these commands in your shell to install the common tools:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("brew tap PX4/px4\nbrew "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" px4-dev\n")])])]),s("p",[t._v("Install the required Python packages")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# install required packages using pip3")]),t._v("\npython3 -m pip "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --user pyserial empty toml numpy pandas jinja2 pyyaml pyros-genmsg packaging kconfiglib future jsonschema\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# if this fails with a permissions error, your Python install is in a system path - use this command instead:")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" -H python3 -m pip "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --user pyserial empty toml numpy pandas jinja2 pyyaml pyros-genmsg packaging kconfiglib future jsonschema\n")])])]),s("h2",{attrs:{id:"gazebo-classic-simulation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gazebo-classic-simulation"}},[t._v("#")]),t._v(" Gazebo Classic Simulation")]),t._v(" "),s("p",[t._v("First run the following commands:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("brew unlink tbb\nbrew "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" tbb@2020\nbrew "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("link")]),t._v(" tbb@2020\n")])])]),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),s("p",[t._v("September 2021: The commands above are a workaround to this bug: "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/issues/17644",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4-Autopilot#17644"),s("OutboundLink")],1),t._v(". They can be removed once it is fixed (along with this note).")])]),t._v(" "),s("p",[t._v("To install SITL simulation with Gazebo Classic:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("brew "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --cask temurin\nbrew "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --cask xquartz\nbrew "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" px4-sim-gazebo\n")])])]),s("p",[t._v("Run this macOS setup script: "),s("code",[t._v("PX4-Autopilot/Tools/setup/macos.sh")]),t._v(" The easiest way to do this is to clone the PX4 source, and then run the script from the directory, as shown:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/PX4/PX4-Autopilot.git --recursive\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" PX4-Autopilot/Tools/setup\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v(" macos.sh\n")])])]),s("h2",{attrs:{id:"额外工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#额外工具"}},[t._v("#")]),t._v(" 额外工具")]),t._v(" "),s("p",[t._v("To use SITL simulation with jMAVSim you need to install a recent version of Java (e.g. Java 15). You can download "),s("a",{attrs:{href:"https://www.oracle.com/java/technologies/javase-downloads.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java 15 (or later) from Oracle"),s("OutboundLink")],1),t._v(" or use "),s("a",{attrs:{href:"https://adoptium.net",target:"_blank",rel:"noopener noreferrer"}},[t._v("Eclipse Temurin"),s("OutboundLink")],1),t._v(":")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("brew "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --cask temurin\n")])])]),s("p",[t._v("Then install jMAVSim:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("brew "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" px4-sim-jmavsim\n")])])]),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("PX4 v1.11 and beyond require at least JDK 15 for jMAVSim simulation.")]),t._v(" "),s("p",[t._v("For earlier versions, macOS users might see the error "),s("code",[t._v('Exception in thread "main" java.lang.UnsupportedClassVersionError:')]),t._v(". You can find the fix in the "),s("RouterLink",{attrs:{to:"/zh/simulation/jmavsim.html#troubleshooting"}},[t._v("jMAVSim with SITL > Troubleshooting")]),t._v(").")],1)]),t._v(" "),s("h2",{attrs:{id:"后续步骤"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#后续步骤"}},[t._v("#")]),t._v(" 后续步骤")]),t._v(" "),s("p",[t._v("Once you have finished setting up the command-line toolchain:")]),t._v(" "),s("ul",[s("li",[t._v("Install "),s("RouterLink",{attrs:{to:"/zh/dev_setup/vscode.html"}},[t._v("VSCode")]),t._v(" (if you prefer using an IDE to the command line).")],1),t._v(" "),s("li",[t._v("Install the "),s("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/releases/daily_builds.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGroundControl Daily Build"),s("OutboundLink")],1),t._v(" :::tip The "),s("em",[t._v("daily build")]),t._v(" includes development tools that are hidden in release builds. It may also provide access to new PX4 features that are not yet supported in release builds.\n:::")]),t._v(" "),s("li",[t._v("Continue to the "),s("RouterLink",{attrs:{to:"/zh/dev_setup/building_px4.html"}},[t._v("build instructions")]),t._v(".")],1)])])}),[],!1,null,null,null);e.default=n.exports}}]);