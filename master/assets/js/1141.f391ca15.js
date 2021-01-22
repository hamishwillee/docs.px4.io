(window.webpackJsonp=window.webpackJsonp||[]).push([[1141],{2376:function(t,a,s){"use strict";s.r(a);var e=s(18),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"mac-上的开发环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mac-上的开发环境"}},[t._v("#")]),t._v(" Mac 上的开发环境")]),t._v(" "),s("p",[t._v("MacOS 是受支持的 PX4 开发平台。 根据本文的指示构建的开发环境可以用编译：")]),t._v(" "),s("ul",[s("li",[t._v("基于 NuttX 的硬件 (Pixhawk等)")]),t._v(" "),s("li",[t._v("jMAVSim 仿真模拟")]),t._v(" "),s("li",[t._v("Gazebo 8 仿真模拟")])]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),s("p",[t._v("To build other targets see: "),s("RouterLink",{attrs:{to:"/zh/dev_setup/dev_env.html#supported-targets"}},[t._v("Toolchain Installation > Supported Targets")]),t._v(".")],1)]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("A video tutorial can be found here: "),s("a",{attrs:{href:"https://youtu.be/tMbMGiMs1cQ",target:"_blank",rel:"noopener noreferrer"}},[t._v("Setting up your PX4 development environment on macOS"),s("OutboundLink")],1),t._v(".")])]),t._v(" "),s("h2",{attrs:{id:"homebrew-安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#homebrew-安装"}},[t._v("#")]),t._v(" Homebrew 安装")]),t._v(" "),s("p",[t._v("The installation of Homebrew is quick and easy: "),s("a",{attrs:{href:"https://brew.sh",target:"_blank",rel:"noopener noreferrer"}},[t._v("installation instructions"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"常用工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用工具"}},[t._v("#")]),t._v(" 常用工具")]),t._v(" "),s("p",[t._v("The PX4 toolchain requires the usage of the ZSH shell. If you are using the shell, add this line to your shell profile:")]),t._v(" "),s("p",[t._v("完成编译/仿真开发环境设置后，你可以从 "),s("RouterLink",{attrs:{to:"/zh/setup/generic_dev_tools.html"}},[t._v("Additional Tools")]),t._v(" 找到一些有用的“通用”开发工具。")],1),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("brew tap PX4/px4\nbrew "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" px4-dev\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 可选，但建议安装额外的仿真模拟用工具")]),t._v("\nbrew "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" px4-sim\n")])])]),s("h2",{attrs:{id:"额外工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#额外工具"}},[t._v("#")]),t._v(" 额外工具")]),t._v(" "),s("p",[t._v("设置完环境后，请转至 "),s("RouterLink",{attrs:{to:"/zh/setup/building_px4.html"}},[t._v("build instructions")]),t._v(" 。")],1),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("brew cask "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" xquartz java\n")])])]),s("h2",{attrs:{id:"后续步骤"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#后续步骤"}},[t._v("#")]),t._v(" 后续步骤")]),t._v(" "),s("p",[t._v("If not already existing, create the file "),s("code",[t._v("~/.zshrc")]),t._v(" and add these lines:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" easy_install pip\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" -H pip "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" pyserial empy toml numpy pandas jinja2 pyyaml\n")])])]),s("h2",{attrs:{id:"gazebo-仿真"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gazebo-仿真"}},[t._v("#")]),t._v(" Gazebo 仿真")]),t._v(" "),s("p",[t._v("After installing Homebrew, run these commands in your shell to install the common tools:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("brew tap PX4/px4\nbrew "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" px4-dev\n")])])]),s("p",[t._v("Install the required Python packages")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# install required packages using pip3")]),t._v("\npython3 -m pip "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --user pyserial empy toml numpy pandas jinja2 pyyaml pyros-genmsg packaging\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# if this fails with a permissions error, your Python install is in a system path - use this command instead:")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" -H python3 -m pip "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --user pyserial empy toml numpy pandas jinja2 pyyaml pyros-genmsg packaging\n")])])]),s("h2",{attrs:{id:"jmavsim-仿真模拟"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jmavsim-仿真模拟"}},[t._v("#")]),t._v(" jMAVSim 仿真模拟")]),t._v(" "),s("p",[t._v("To install SITL simulation with Gazebo:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("brew "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --cask xquartz\nbrew "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" px4-sim-gazebo\n")])])]),s("h2",{attrs:{id:"额外工具-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#额外工具-2"}},[t._v("#")]),t._v(" 额外工具")]),t._v(" "),s("p",[t._v("To use SITL simulation with jMAVSim you need to install a recent version of Java (e.g. Java 14). You can either download "),s("a",{attrs:{href:"https://www.oracle.com/java/technologies/javase-jdk14-downloads.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java 14 from Oracle"),s("OutboundLink")],1),t._v(" or use the AdoptOpenJDK tap:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("brew tap AdoptOpenJDK/openjdk\nbrew "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --cask adoptopenjdk14\n")])])]),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("brew "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" px4-sim-jmavsim\n")])])]),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),s("p",[t._v("jMAVSim for PX4 v1.11 and earlier required Java 8.")])]),t._v(" "),s("h2",{attrs:{id:"后续步骤-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#后续步骤-2"}},[t._v("#")]),t._v(" 后续步骤")]),t._v(" "),s("p",[t._v("See "),s("RouterLink",{attrs:{to:"/zh/dev_setup/generic_dev_tools.html"}},[t._v("Additional Tools")]),t._v(" for information about other useful development tools that are not part of the build toolchain (for example IDEs and GCSs).")],1),t._v(" "),s("h2",{attrs:{id:"next-steps"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#next-steps"}},[t._v("#")]),t._v(" Next Steps")]),t._v(" "),s("p",[t._v("Once you have finished setting up the environment, continue to the "),s("RouterLink",{attrs:{to:"/zh/dev_setup/building_px4.html"}},[t._v("build instructions")]),t._v(".")],1)])}),[],!1,null,null,null);a.default=n.exports}}]);