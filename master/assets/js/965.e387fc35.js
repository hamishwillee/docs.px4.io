(window.webpackJsonp=window.webpackJsonp||[]).push([[965],{1977:function(t,e,a){"use strict";a.r(e);var s=a(18),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"development-environment-on-mac"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#development-environment-on-mac"}},[t._v("#")]),t._v(" Development Environment on Mac")]),t._v(" "),a("p",[t._v("MacOS is a supported development platform for PX4. The following instructions set up an environment for building:")]),t._v(" "),a("ul",[a("li",[t._v("NuttX-based hardware (Pixhawk, etc.)")]),t._v(" "),a("li",[t._v("jMAVSim Smulation")]),t._v(" "),a("li",[t._v("Gazebo 8 Simulation")])]),t._v(" "),a("p",[t._v("To build other targets see: "),a("RouterLink",{attrs:{to:"/ko/dev_setup/dev_env.html#supported-targets"}},[t._v("Toolchain Installation > Supported Targets")]),t._v(".")],1),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("If you have an Apple M1 Macbook, make sure to run the terminal as x86 by setting up an x86 terminal:")]),t._v(" "),a("ol",[a("li",[t._v("Locate the Terminal application within the Utilities folder (Finder > Go menu > Utilities)")]),t._v(" "),a("li",[t._v("Select Terminal.app and right-click on it, then choose “Duplicate”")]),t._v(" "),a("li",[t._v("Rename the duplicated Terminal app, e.g. "),a("code",[t._v("x86 Terminal")])]),t._v(" "),a("li",[t._v("Now select the renamed "),a("code",[t._v("x86 Terminal")]),t._v(" app and right-click and choose “Get Info”")]),t._v(" "),a("li",[t._v("Check the box for “Open using Rosetta”, then close the window")]),t._v(" "),a("li",[t._v("Run the "),a("code",[t._v("x86 Terminal")]),t._v(" as usual, which will fully support the current PX4 toolchain")])])]),t._v(" "),a("h2",{attrs:{id:"homebrew-installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#homebrew-installation"}},[t._v("#")]),t._v(" Homebrew Installation")]),t._v(" "),a("p",[t._v("The installation of Homebrew is quick and easy: "),a("a",{attrs:{href:"https://brew.sh",target:"_blank",rel:"noopener noreferrer"}},[t._v("installation instructions"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"enable-more-open-files-handle-ld-too-many-open-files-error"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enable-more-open-files-handle-ld-too-many-open-files-error"}},[t._v("#")]),t._v(' Enable more open files (Handle "LD: too many open files" error)')]),t._v(" "),a("p",[t._v("Create the "),a("code",[t._v("~/.zshenv")]),t._v(" file or append it (by running "),a("code",[t._v("open ~/.zshenv")]),t._v(" on the terminal) and add this line:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("brew tap PX4/px4\nbrew "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" px4-dev\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Optional, but recommended additional simulation tools:")]),t._v("\nbrew "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" px4-sim\n")])])]),a("h2",{attrs:{id:"enforce-python-version"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enforce-python-version"}},[t._v("#")]),t._v(" Enforce Python Version")]),t._v(" "),a("p",[t._v("If not already existing, create the file "),a("code",[t._v("~/.zshrc")]),t._v(" and add these lines:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("brew cask "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" xquartz java\n")])])]),a("h2",{attrs:{id:"common-tools"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#common-tools"}},[t._v("#")]),t._v(" Common Tools")]),t._v(" "),a("p",[t._v("Once you have finished setting up the environment, continue to the "),a("RouterLink",{attrs:{to:"/ko/setup/building_px4.html"}},[t._v("build instructions")]),t._v(".")],1),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" easy_install pip\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" -H pip "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" pyserial empy toml numpy pandas jinja2 pyyaml\n")])])]),a("p",[t._v("Install the required Python packages")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# install required packages using pip3")]),t._v("\npython3 -m pip "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --user pyserial empy toml numpy pandas jinja2 pyyaml pyros-genmsg packaging\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# if this fails with a permissions error, your Python install is in a system path - use this command instead:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" -H python3 -m pip "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --user pyserial empy toml numpy pandas jinja2 pyyaml pyros-genmsg packaging\n")])])]),a("h2",{attrs:{id:"gazebo-simulation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gazebo-simulation"}},[t._v("#")]),t._v(" Gazebo Simulation")]),t._v(" "),a("p",[t._v("To install SITL simulation with Gazebo:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("brew "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --cask xquartz\nbrew "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" px4-sim-gazebo\n")])])]),a("h2",{attrs:{id:"jmavsim-simulation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jmavsim-simulation"}},[t._v("#")]),t._v(" jMAVSim Simulation")]),t._v(" "),a("p",[t._v("To use SITL simulation with jMAVSim you need to install a recent version of Java (e.g. Java 14). You can either download "),a("a",{attrs:{href:"https://www.oracle.com/java/technologies/javase-jdk14-downloads.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java 14 from Oracle"),a("OutboundLink")],1),t._v(" or use the AdoptOpenJDK tap:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("brew tap AdoptOpenJDK/openjdk\nbrew "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --cask adoptopenjdk14\n")])])]),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("brew "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" px4-sim-jmavsim\n")])])]),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("jMAVSim for PX4 v1.11 and earlier required Java 8.")])]),t._v(" "),a("h2",{attrs:{id:"additional-tools"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#additional-tools"}},[t._v("#")]),t._v(" Additional Tools")]),t._v(" "),a("p",[t._v("See "),a("RouterLink",{attrs:{to:"/ko/dev_setup/generic_dev_tools.html"}},[t._v("Additional Tools")]),t._v(" for information about other useful development tools that are not part of the build toolchain (for example IDEs and GCSs).")],1),t._v(" "),a("h2",{attrs:{id:"next-steps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#next-steps"}},[t._v("#")]),t._v(" Next Steps")]),t._v(" "),a("p",[t._v("Once you have finished setting up the environment, continue to the "),a("RouterLink",{attrs:{to:"/ko/dev_setup/building_px4.html"}},[t._v("build instructions")]),t._v(".")],1)])}),[],!1,null,null,null);e.default=n.exports}}]);