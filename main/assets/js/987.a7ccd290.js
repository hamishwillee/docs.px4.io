(window.webpackJsonp=window.webpackJsonp||[]).push([[987],{1883:function(e,t,s){"use strict";s.r(t);var a=s(19),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"macos-development-environment"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#macos-development-environment"}},[e._v("#")]),e._v(" MacOS Development Environment")]),e._v(" "),s("p",[e._v("The following instructions set up a PX4 development environment for macOS.\nThis environment can be used to build PX4 for:")]),e._v(" "),s("ul",[s("li",[e._v("Pixhawk and other NuttX-based hardware")]),e._v(" "),s("li",[s("RouterLink",{attrs:{to:"/en/simulation/jmavsim.html"}},[e._v("jMAVSim Simulation")])],1),e._v(" "),s("li",[s("RouterLink",{attrs:{to:"/en/sim_gazebo_classic/"}},[e._v("Gazebo Classic Simulation")])],1)]),e._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[e._v("Apple M1 Macbook users!")]),e._v(" "),s("p",[e._v("If you have an Apple M1 Macbook, make sure to run the terminal as x86 by setting up an x86 terminal:")]),e._v(" "),s("ol",[s("li",[e._v("Locate the Terminal application within the Utilities folder ("),s("strong",[e._v("Finder > Go menu > Utilities")]),e._v(")")]),e._v(" "),s("li",[e._v("Select "),s("em",[e._v("Terminal.app")]),e._v(" and right-click on it, then choose "),s("strong",[e._v("Duplicate")]),e._v(".")]),e._v(" "),s("li",[e._v("Rename the duplicated Terminal app, e.g. to "),s("em",[e._v("x86 Terminal")])]),e._v(" "),s("li",[e._v("Now select the renamed "),s("em",[e._v("x86 Terminal")]),e._v(" app and right-click and choose *"),s("em",[e._v("Get Info")])]),e._v(" "),s("li",[e._v("Check the box for "),s("strong",[e._v("Open using Rosetta")]),e._v(", then close the window")]),e._v(" "),s("li",[e._v("Run the "),s("em",[e._v("x86 Terminal")]),e._v(" as usual, which will fully support the current PX4 toolchain")])])]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("This setup is supported by the PX4 dev team.\nTo build other targets you will need to use a "),s("RouterLink",{attrs:{to:"/en/dev_setup/dev_env.html#supported-targets"}},[e._v("different OS")]),e._v(" (or an "),s("RouterLink",{attrs:{to:"/en/advanced/dev_env_unsupported.html"}},[e._v("unsupported development environment")]),e._v(").")],1)]),e._v(" "),s("h2",{attrs:{id:"video-guide"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#video-guide"}},[e._v("#")]),e._v(" Video Guide")]),e._v(" "),s("p"),s("div",{staticClass:"embed-responsive embed-responsive-16by9"},[s("iframe",{staticClass:"embed-responsive-item youtube-player",attrs:{type:"text/html",width:"640",height:"390",src:"https://www.youtube.com/embed/tMbMGiMs1cQ",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]),s("p"),e._v(" "),s("h2",{attrs:{id:"homebrew-installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#homebrew-installation"}},[e._v("#")]),e._v(" Homebrew Installation")]),e._v(" "),s("p",[e._v("The installation of Homebrew is quick and easy: "),s("a",{attrs:{href:"https://brew.sh",target:"_blank",rel:"noopener noreferrer"}},[e._v("installation instructions"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("h2",{attrs:{id:"enable-more-open-files-handle-ld-too-many-open-files-error"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#enable-more-open-files-handle-ld-too-many-open-files-error"}},[e._v("#")]),e._v(' Enable more open files (Handle "LD: too many open files" error)')]),e._v(" "),s("p",[e._v("Append the line "),s("code",[e._v("ulimit -S -n 2048")]),e._v(" to the end of the "),s("code",[e._v("~/.zshenv")]),e._v(" file (creating it if necessary):")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("ulimit")]),e._v(" -S -n "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2048")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">>")]),e._v(" ~/.zshenv\n")])])]),s("h2",{attrs:{id:"enforce-python-version"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#enforce-python-version"}},[e._v("#")]),e._v(" Enforce Python Version")]),e._v(" "),s("p",[e._v("If not already existing, create the file "),s("code",[e._v("~/.zshrc")]),e._v(" and add these lines:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Point pip3 to MacOS system python 3 pip")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("alias")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("pip3")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/usr/bin/pip3\n")])])]),s("h2",{attrs:{id:"common-tools"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#common-tools"}},[e._v("#")]),e._v(" Common Tools")]),e._v(" "),s("p",[e._v("After installing Homebrew, run these commands in your shell to install the common tools:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("brew tap PX4/px4\nbrew "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" px4-dev\n")])])]),s("p",[e._v("Install the required Python packages")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# install required packages using pip3")]),e._v("\npython3 -m pip "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" --user pyserial empty toml numpy pandas jinja2 pyyaml pyros-genmsg packaging kconfiglib future jsonschema\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# if this fails with a permissions error, your Python install is in a system path - use this command instead:")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" -H python3 -m pip "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" --user pyserial empty toml numpy pandas jinja2 pyyaml pyros-genmsg packaging kconfiglib future jsonschema\n")])])]),s("h2",{attrs:{id:"gazebo-classic-simulation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gazebo-classic-simulation"}},[e._v("#")]),e._v(" Gazebo Classic Simulation")]),e._v(" "),s("p",[e._v("First run the following commands:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("brew unlink tbb\nbrew "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" tbb@2020\nbrew "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("link")]),e._v(" tbb@2020\n")])])]),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),s("p",[e._v("September 2021: The commands above are a workaround to this bug: "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/issues/17644",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4-Autopilot#17644"),s("OutboundLink")],1),e._v(".\nThey can be removed once it is fixed (along with this note).")])]),e._v(" "),s("p",[e._v("To install SITL simulation with Gazebo Classic:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("brew "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" --cask temurin\nbrew "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" --cask xquartz\nbrew "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" px4-sim-gazebo\n")])])]),s("p",[e._v("Run this macOS setup script: "),s("code",[e._v("PX4-Autopilot/Tools/setup/macos.sh")]),e._v("\nThe easiest way to do this is to clone the PX4 source, and then run the script from the directory, as shown:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/PX4/PX4-Autopilot.git --recursive\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" PX4-Autopilot/Tools/setup\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sh")]),e._v(" macos.sh\n")])])]),s("h2",{attrs:{id:"jmavsim-simulation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jmavsim-simulation"}},[e._v("#")]),e._v(" jMAVSim Simulation")]),e._v(" "),s("p",[e._v("To use SITL simulation with jMAVSim you need to install a recent version of Java (e.g. Java 15).\nYou can download "),s("a",{attrs:{href:"https://www.oracle.com/java/technologies/javase-downloads.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Java 15 (or later) from Oracle"),s("OutboundLink")],1),e._v(" or use "),s("a",{attrs:{href:"https://adoptium.net",target:"_blank",rel:"noopener noreferrer"}},[e._v("Eclipse Temurin"),s("OutboundLink")],1),e._v(":")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("brew "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" --cask temurin\n")])])]),s("p",[e._v("Then install jMAVSim:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("brew "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" px4-sim-jmavsim\n")])])]),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),s("p",[e._v("PX4 v1.11 and beyond require at least JDK 15 for jMAVSim simulation.")]),e._v(" "),s("p",[e._v("For earlier versions, macOS users might see the error "),s("code",[e._v('Exception in thread "main" java.lang.UnsupportedClassVersionError:')]),e._v(".\nYou can find the fix in the "),s("RouterLink",{attrs:{to:"/en/simulation/jmavsim.html#troubleshooting"}},[e._v("jMAVSim with SITL > Troubleshooting")]),e._v(").")],1)]),e._v(" "),s("h2",{attrs:{id:"next-steps"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#next-steps"}},[e._v("#")]),e._v(" Next Steps")]),e._v(" "),s("p",[e._v("Once you have finished setting up the command-line toolchain:")]),e._v(" "),s("ul",[s("li",[e._v("Install "),s("RouterLink",{attrs:{to:"/en/dev_setup/vscode.html"}},[e._v("VSCode")]),e._v(" (if you prefer using an IDE to the command line).")],1),e._v(" "),s("li",[e._v("Install the "),s("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/releases/daily_builds.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("QGroundControl Daily Build"),s("OutboundLink")],1),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("The "),s("em",[e._v("daily build")]),e._v(" includes development tools that are hidden in release builds.\nIt may also provide access to new PX4 features that are not yet supported in release builds.")])])]),e._v(" "),s("li",[e._v("Continue to the "),s("RouterLink",{attrs:{to:"/en/dev_setup/building_px4.html"}},[e._v("build instructions")]),e._v(".")],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);