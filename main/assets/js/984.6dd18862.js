(window.webpackJsonp=window.webpackJsonp||[]).push([[984],{1881:function(t,e,s){"use strict";s.r(e);var a=s(19),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"macos-development-environment"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#macos-development-environment"}},[t._v("#")]),t._v(" MacOS Development Environment")]),t._v(" "),s("p",[t._v("The following instructions set up a PX4 development environment for macOS.\nThis environment can be used to build PX4 for:")]),t._v(" "),s("ul",[s("li",[t._v("Pixhawk and other NuttX-based hardware")]),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/en/simulation/jmavsim.html"}},[t._v("jMAVSim Simulation")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/en/sim_gazebo_classic/"}},[t._v("Gazebo Classic Simulation")])],1)]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("This setup is supported by the PX4 dev team.\nTo build other targets you will need to use a "),s("RouterLink",{attrs:{to:"/en/dev_setup/dev_env.html#supported-targets"}},[t._v("different OS")]),t._v(" (or an "),s("RouterLink",{attrs:{to:"/en/advanced/dev_env_unsupported.html"}},[t._v("unsupported development environment")]),t._v(").")],1)]),t._v(" "),s("h2",{attrs:{id:"video-guide"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#video-guide"}},[t._v("#")]),t._v(" Video Guide")]),t._v(" "),s("p"),s("div",{staticClass:"embed-responsive embed-responsive-16by9"},[s("iframe",{staticClass:"embed-responsive-item youtube-player",attrs:{type:"text/html",width:"640",height:"390",src:"https://www.youtube.com/embed/tMbMGiMs1cQ",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]),s("p"),t._v(" "),s("h2",{attrs:{id:"base-setup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#base-setup"}},[t._v("#")]),t._v(" Base Setup")]),t._v(" "),s("p",[t._v('The "base" macOS setup installs the tools needed for building firmware, and includes the common tools that will be needed for installing/using the simulators.')]),t._v(" "),s("h3",{attrs:{id:"environment-setup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#environment-setup"}},[t._v("#")]),t._v(" Environment Setup")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("Apple M1 Macbook users!")]),t._v(" "),s("p",[t._v("If you have an Apple M1 Macbook, make sure to run the terminal as x86 by setting up an x86 terminal:")]),t._v(" "),s("ol",[s("li",[t._v("Locate the Terminal application within the Utilities folder ("),s("strong",[t._v("Finder > Go menu > Utilities")]),t._v(")")]),t._v(" "),s("li",[t._v("Select "),s("em",[t._v("Terminal.app")]),t._v(" and right-click on it, then choose "),s("strong",[t._v("Duplicate")]),t._v(".")]),t._v(" "),s("li",[t._v("Rename the duplicated Terminal app, e.g. to "),s("em",[t._v("x86 Terminal")])]),t._v(" "),s("li",[t._v("Now select the renamed "),s("em",[t._v("x86 Terminal")]),t._v(" app and right-click and choose *"),s("em",[t._v("Get Info")])]),t._v(" "),s("li",[t._v("Check the box for "),s("strong",[t._v("Open using Rosetta")]),t._v(", then close the window")]),t._v(" "),s("li",[t._v("Run the "),s("em",[t._v("x86 Terminal")]),t._v(" as usual, which will fully support the current PX4 toolchain")])])]),t._v(" "),s("p",[t._v("First set up the environment")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Enable more open files by appending the following line to the "),s("code",[t._v("~/.zshenv")]),t._v(" file (creating it if necessary):")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("ulimit")]),t._v(" -S -n "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2048")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" ~/.zshenv\n")])])]),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("If you don't do this, the build toolchain may report the error: "),s("code",[t._v('"LD: too many open files"')])])])]),t._v(" "),s("li",[s("p",[t._v("Enforce Python 3 by appending the following lines to "),s("code",[t._v("~/.zshenv")])]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Point pip3 to MacOS system python 3 pip")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("alias")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("pip3")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/bin/pip3\n")])])])])]),t._v(" "),s("h3",{attrs:{id:"common-tools"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#common-tools"}},[t._v("#")]),t._v(" Common Tools")]),t._v(" "),s("p",[t._v("To setup the environment to be able to build for Pixhawk/NuttX hardware (and install the common tools for using simulators):")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Install Homebrew by following these "),s("a",{attrs:{href:"https://brew.sh",target:"_blank",rel:"noopener noreferrer"}},[t._v("installation instructions"),s("OutboundLink")],1),t._v(".")])]),t._v(" "),s("li",[s("p",[t._v("Run these commands in your shell to install the common tools:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("brew tap PX4/px4\nbrew "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" px4-dev\n")])])])]),t._v(" "),s("li",[s("p",[t._v("Install the required Python packages:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# install required packages using pip3")]),t._v("\npython3 -m pip "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --user pyserial empty toml numpy pandas jinja2 pyyaml pyros-genmsg packaging kconfiglib future jsonschema\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# if this fails with a permissions error, your Python install is in a system path - use this command instead:")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" -H python3 -m pip "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --user pyserial empty toml numpy pandas jinja2 pyyaml pyros-genmsg packaging kconfiglib future jsonschema\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"gazebo-classic-simulation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gazebo-classic-simulation"}},[t._v("#")]),t._v(" Gazebo Classic Simulation")]),t._v(" "),s("p",[t._v("To setup the environment for "),s("RouterLink",{attrs:{to:"/en/sim_gazebo_classic/"}},[t._v("Gazebo Classic")]),t._v(" simulation:")],1),t._v(" "),s("ol",[s("li",[s("p",[t._v("Run the following commands in your shell:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("brew unlink tbb\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sed")]),t._v(" -i.bak "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/disable! date:/s/^/  /; /disable! date:/s/./#/3'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("brew --prefix"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("/Library/Taps/homebrew/homebrew-core/Formula/tbb@2020.rb\nbrew "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" tbb@2020\nbrew "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("link")]),t._v(" tbb@2020\n")])])]),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("September 2021: The commands above are a workaround to this bug: "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/issues/17644",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4-Autopilot#17644"),s("OutboundLink")],1),t._v(".\nThey can be removed once it is fixed (along with this note).")])])]),t._v(" "),s("li",[s("p",[t._v("To install SITL simulation with Gazebo Classic:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("brew "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --cask temurin\nbrew "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --cask xquartz\nbrew "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" px4-sim-gazebo\n")])])])]),t._v(" "),s("li",[s("p",[t._v("Run the macOS setup script: "),s("code",[t._v("PX4-Autopilot/Tools/setup/macos.sh")]),t._v("\nThe easiest way to do this is to clone the PX4 source, and then run the script from the directory, as shown:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/PX4/PX4-Autopilot.git --recursive\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" PX4-Autopilot/Tools/setup\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v(" macos.sh\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"jmavsim-simulation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jmavsim-simulation"}},[t._v("#")]),t._v(" jMAVSim Simulation")]),t._v(" "),s("p",[t._v("To setup the environment for "),s("RouterLink",{attrs:{to:"/en/simulation/jmavsim.html"}},[t._v("jMAVSim")]),t._v(" simulation:")],1),t._v(" "),s("ol",[s("li",[s("p",[t._v("Install a recent version of Java (e.g. Java 15).\nYou can download "),s("a",{attrs:{href:"https://www.oracle.com/java/technologies/javase-downloads.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java 15 (or later) from Oracle"),s("OutboundLink")],1),t._v(" or use "),s("a",{attrs:{href:"https://adoptium.net",target:"_blank",rel:"noopener noreferrer"}},[t._v("Eclipse Temurin"),s("OutboundLink")],1),t._v(":")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("brew "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --cask temurin\n")])])])]),t._v(" "),s("li",[s("p",[t._v("Install jMAVSim:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("brew "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" px4-sim-jmavsim\n")])])]),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("PX4 v1.11 and beyond require at least JDK 15 for jMAVSim simulation.")]),t._v(" "),s("p",[t._v("For earlier versions, macOS users might see the error "),s("code",[t._v('Exception in thread "main" java.lang.UnsupportedClassVersionError:')]),t._v(".\nYou can find the fix in the "),s("RouterLink",{attrs:{to:"/en/simulation/jmavsim.html#troubleshooting"}},[t._v("jMAVSim with SITL > Troubleshooting")]),t._v(").")],1)])])]),t._v(" "),s("h2",{attrs:{id:"next-steps"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#next-steps"}},[t._v("#")]),t._v(" Next Steps")]),t._v(" "),s("p",[t._v("Once you have finished setting up the command-line toolchain:")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Install "),s("RouterLink",{attrs:{to:"/en/dev_setup/vscode.html"}},[t._v("VSCode")]),t._v(" (if you prefer using an IDE to the command line).")],1)]),t._v(" "),s("li",[s("p",[t._v("Install the "),s("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/releases/daily_builds.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGroundControl Daily Build"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("The "),s("em",[t._v("daily build")]),t._v(" includes development tools that are hidden in release builds.\nIt may also provide access to new PX4 features that are not yet supported in release builds.")])])]),t._v(" "),s("li",[s("p",[t._v("Continue to the "),s("RouterLink",{attrs:{to:"/en/dev_setup/building_px4.html"}},[t._v("build instructions")]),t._v(".")],1)])])])}),[],!1,null,null,null);e.default=n.exports}}]);