(window.webpackJsonp=window.webpackJsonp||[]).push([[988],{1994:function(e,t,a){"use strict";a.r(t);var s=a(18),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"macos-development-environment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#macos-development-environment"}},[e._v("#")]),e._v(" MacOS Development Environment")]),e._v(" "),a("p",[e._v("The following instructions set up a PX4 development environment for macOS. This environment can be used to build PX4 for:")]),e._v(" "),a("ul",[a("li",[e._v("Pixhawk and other NuttX-based hardware")]),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/simulation/jmavsim.html"}},[e._v("jMAVSim Simulation")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/simulation/gazebo.html"}},[e._v("Gazebo Simulation")])],1)]),e._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[e._v("DETAILS")]),e._v(" "),a("p",[e._v("Apple M1 Macbook users! If you have an Apple M1 Macbook, make sure to run the terminal as x86 by setting up an x86 terminal:")]),e._v(" "),a("ol",[a("li",[e._v("Locate the Terminal application within the Utilities folder ("),a("strong",[e._v("Finder > Go menu > Utilities")]),e._v(")")]),e._v(" "),a("li",[e._v("Select "),a("em",[e._v("Terminal.app")]),e._v(" and right-click on it, then choose "),a("strong",[e._v("Duplicate")]),e._v(".")]),e._v(" "),a("li",[e._v("Rename the duplicated Terminal app, e.g. to "),a("em",[e._v("x86 Terminal")])]),e._v(" "),a("li",[e._v("Now select the renamed "),a("em",[e._v("x86 Terminal")]),e._v(" app and right-click and choose *"),a("em",[e._v("Get Info")])]),e._v(" "),a("li",[e._v("Check the box for "),a("strong",[e._v("Open using Rosetta")]),e._v(", then close the window")]),e._v(" "),a("li",[e._v("Run the "),a("em",[e._v("x86 Terminal")]),e._v("` as usual, which will fully support the current PX4 toolchain")])])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("This setup is supported by the PX4 dev team. To build other targets you will need to use a "),a("RouterLink",{attrs:{to:"/ko/dev_setup/dev_env.html#supported-targets"}},[e._v("different OS")]),e._v(" (or an "),a("RouterLink",{attrs:{to:"/ko/advanced/dev_env_unsupported.html"}},[e._v("unsupported development environment")]),e._v(").")],1)]),e._v(" "),a("h2",{attrs:{id:"video-guide"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#video-guide"}},[e._v("#")]),e._v(" Video Guide")]),e._v(" "),a("p"),a("div",{staticClass:"embed-responsive embed-responsive-16by9"},[a("iframe",{staticClass:"embed-responsive-item youtube-player",attrs:{type:"text/html",width:"640",height:"390",src:"https://www.youtube.com/embed/tMbMGiMs1cQ",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]),a("p"),e._v(" "),a("h2",{attrs:{id:"homebrew-installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#homebrew-installation"}},[e._v("#")]),e._v(" Homebrew Installation")]),e._v(" "),a("p",[e._v("The installation of Homebrew is quick and easy: "),a("a",{attrs:{href:"https://brew.sh",target:"_blank",rel:"noopener noreferrer"}},[e._v("installation instructions"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"enable-more-open-files-handle-ld-too-many-open-files-error"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enable-more-open-files-handle-ld-too-many-open-files-error"}},[e._v("#")]),e._v(' Enable more open files (Handle "LD: too many open files" error)')]),e._v(" "),a("p",[e._v("Create the "),a("code",[e._v("~/.zshenv")]),e._v(" file or append it (by running "),a("code",[e._v("open ~/.zshenv")]),e._v(" on the terminal) and add this line:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("brew tap PX4/px4\nbrew "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" px4-dev\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Optional, but recommended additional simulation tools:")]),e._v("\nbrew "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" px4-sim\n")])])]),a("h2",{attrs:{id:"enforce-python-version"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enforce-python-version"}},[e._v("#")]),e._v(" Enforce Python Version")]),e._v(" "),a("p",[e._v("Once you have finished setting up the environment, continue to the "),a("RouterLink",{attrs:{to:"/ko/setup/building_px4.html"}},[e._v("build instructions")]),e._v(".")],1),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("brew cask "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" xquartz java\n")])])]),a("h2",{attrs:{id:"common-tools"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#common-tools"}},[e._v("#")]),e._v(" Common Tools")]),e._v(" "),a("p",[e._v("After installing Homebrew, run these commands in your shell to install the common tools:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" easy_install pip\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" -H pip "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" pyserial empy toml numpy pandas jinja2 pyyaml\n")])])]),a("p",[e._v("Install the required Python packages")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# install required packages using pip3")]),e._v("\npython3 -m pip "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" --user pyserial empy toml numpy pandas jinja2 pyyaml pyros-genmsg packaging\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# if this fails with a permissions error, your Python install is in a system path - use this command instead:")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" -H python3 -m pip "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" --user pyserial empy toml numpy pandas jinja2 pyyaml pyros-genmsg packaging\n")])])]),a("h2",{attrs:{id:"gazebo-simulation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gazebo-simulation"}},[e._v("#")]),e._v(" Gazebo Simulation")]),e._v(" "),a("p",[e._v("To install SITL simulation with Gazebo:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("brew "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" --cask xquartz\nbrew "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" px4-sim-gazebo\n")])])]),a("h2",{attrs:{id:"jmavsim-simulation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jmavsim-simulation"}},[e._v("#")]),e._v(" jMAVSim Simulation")]),e._v(" "),a("p",[e._v("To use SITL simulation with jMAVSim you need to install a recent version of Java (e.g. Java 14). You can either download "),a("a",{attrs:{href:"https://www.oracle.com/java/technologies/javase-jdk14-downloads.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Java 14 from Oracle"),a("OutboundLink")],1),e._v(" or use the AdoptOpenJDK tap:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("brew tap AdoptOpenJDK/openjdk\nbrew "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" --cask adoptopenjdk14\n")])])]),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("brew "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" px4-sim-jmavsim\n")])])]),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("jMAVSim for PX4 v1.11 and earlier required Java 8.")])]),e._v(" "),a("h2",{attrs:{id:"next-steps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#next-steps"}},[e._v("#")]),e._v(" Next Steps")]),e._v(" "),a("p",[e._v("Once you have finished setting up the command-line toolchain:")]),e._v(" "),a("ul",[a("li",[e._v("Install "),a("RouterLink",{attrs:{to:"/ko/dev_setup/vscode.html"}},[e._v("VSCode")]),e._v(" (if you prefer using an IDE to the command line).")],1),e._v(" "),a("li",[e._v("Install the "),a("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/releases/daily_builds.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("QGroundControl Daily Build"),a("OutboundLink")],1),e._v(" :::tip The "),a("em",[e._v("daily build")]),e._v(" includes development tools that hidden in release builds. It may also provide access to new PX4 features that are not yet supported in release builds.\n:::")]),e._v(" "),a("li",[e._v("Continue to the "),a("RouterLink",{attrs:{to:"/ko/dev_setup/building_px4.html"}},[e._v("build instructions")]),e._v(".")],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);