(window.webpackJsonp=window.webpackJsonp||[]).push([[776],{1559:function(t,a,e){"use strict";e.r(a);var s=e(18),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"development-environment-on-mac"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#development-environment-on-mac"}},[t._v("#")]),t._v(" Development Environment on Mac")]),t._v(" "),e("p",[t._v("MacOS is a supported development platform for PX4. The following instructions set up an environment for building:")]),t._v(" "),e("ul",[e("li",[t._v("NuttX-based hardware (Pixhawk, etc.)")]),t._v(" "),e("li",[t._v("jMAVSim Smulation")]),t._v(" "),e("li",[t._v("Gazebo Simulation")])]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[t._v("To build other targets see: "),e("RouterLink",{attrs:{to:"/en/dev_setup/dev_env.html#supported-targets"}},[t._v("Toolchain Installation > Supported Targets")]),t._v(".")],1)]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("A video tutorial can be found here: "),e("a",{attrs:{href:"https://youtu.be/tMbMGiMs1cQ",target:"_blank",rel:"noopener noreferrer"}},[t._v("Setting up your PX4 development environment on macOS"),e("OutboundLink")],1),t._v(".")])]),t._v(" "),e("h2",{attrs:{id:"homebrew-installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#homebrew-installation"}},[t._v("#")]),t._v(" Homebrew Installation")]),t._v(" "),e("p",[t._v("The installation of Homebrew is quick and easy: "),e("a",{attrs:{href:"https://brew.sh",target:"_blank",rel:"noopener noreferrer"}},[t._v("installation instructions"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"earlier-versions-than-big-sur-enable-more-open-files-handle-ld-too-many-open-files-error"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#earlier-versions-than-big-sur-enable-more-open-files-handle-ld-too-many-open-files-error"}},[t._v("#")]),t._v(' Earlier versions than Big Sur: Enable more open files (Handle "LD: too many open files" error)')]),t._v(" "),e("p",[t._v("The PX4 toolchain requires the usage of the ZSH shell. If you are using the shell, add this line to your shell profile:")]),t._v(" "),e("p",[t._v("Create this file or append it: "),e("code",[t._v("~/.zshenv")]),t._v(" and add this line:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("ulimit")]),t._v(" -S -n "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2048")]),t._v("\n")])])]),e("h2",{attrs:{id:"macos-big-sur-enforce-python-version"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#macos-big-sur-enforce-python-version"}},[t._v("#")]),t._v(" MacOS Big Sur: Enforce Python Version")]),t._v(" "),e("p",[t._v("If not already existing, create the file "),e("code",[t._v("~/.zshrc")]),t._v(" and add these lines:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Point pip3 to MacOS system python 3 pip")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("alias")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("pip3")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/bin/pip3\n")])])]),e("h2",{attrs:{id:"macos-catalina-and-earlier-ensuring-python-points-to-homebrew"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#macos-catalina-and-earlier-ensuring-python-points-to-homebrew"}},[t._v("#")]),t._v(" MacOS Catalina and earlier: Ensuring Python points to Homebrew")]),t._v(" "),e("p",[t._v("If not already existing, create the file "),e("code",[t._v("~/.zshrc")]),t._v(" and add these lines:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Point python to python 3 from Homebrew")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("alias")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("python")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/local/bin/python3\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Point pip to python 3 pip")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("alias")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("pip")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/local/bin/pip3\n")])])]),e("h2",{attrs:{id:"common-tools"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#common-tools"}},[t._v("#")]),t._v(" Common Tools")]),t._v(" "),e("p",[t._v("After installing Homebrew, run these commands in your shell to install the common tools:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("brew tap PX4/px4\nbrew "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" px4-dev\n")])])]),e("p",[t._v("Install the required Python packages")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# install required packages using pip3")]),t._v("\npython3 -m pip "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --user pyserial empy toml numpy pandas jinja2 pyyaml pyros-genmsg packaging\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# if this fails with a permissions error, your Python install is in a system path - use this command instead:")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" -H python3 -m pip "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --user pyserial empy toml numpy pandas jinja2 pyyaml pyros-genmsg packaging\n")])])]),e("h2",{attrs:{id:"gazebo-simulation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gazebo-simulation"}},[t._v("#")]),t._v(" Gazebo Simulation")]),t._v(" "),e("p",[t._v("To install SITL simulation with Gazebo:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("brew "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --cask xquartz\nbrew "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" px4-sim-gazebo\n")])])]),e("h2",{attrs:{id:"jmavsim-simulation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jmavsim-simulation"}},[t._v("#")]),t._v(" jMAVSim Simulation")]),t._v(" "),e("p",[t._v("To use SITL simulation with jMAVSim you need to install a recent version of Java (e.g. Java 14).\nYou can either download "),e("a",{attrs:{href:"https://www.oracle.com/java/technologies/javase-jdk14-downloads.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java 14 from Oracle"),e("OutboundLink")],1),t._v(" or use the AdoptOpenJDK tap:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("brew tap AdoptOpenJDK/openjdk\nbrew "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --cask adoptopenjdk14\n")])])]),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("brew "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" px4-sim-jmavsim\n")])])]),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[t._v("jMAVSim for PX4 v1.11 and earlier required Java 8.")])]),t._v(" "),e("h2",{attrs:{id:"additional-tools"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#additional-tools"}},[t._v("#")]),t._v(" Additional Tools")]),t._v(" "),e("p",[t._v("See "),e("RouterLink",{attrs:{to:"/en/dev_setup/generic_dev_tools.html"}},[t._v("Additional Tools")]),t._v(" for information about other useful development tools that are not part of the build toolchain (for example IDEs and GCSs).")],1),t._v(" "),e("h2",{attrs:{id:"next-steps"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#next-steps"}},[t._v("#")]),t._v(" Next Steps")]),t._v(" "),e("p",[t._v("Once you have finished setting up the environment, continue to the "),e("RouterLink",{attrs:{to:"/en/dev_setup/building_px4.html"}},[t._v("build instructions")]),t._v(".")],1)])}),[],!1,null,null,null);a.default=n.exports}}]);