(window.webpackJsonp=window.webpackJsonp||[]).push([[518],{1578:function(t,s,e){"use strict";e.r(s);var a=e(18),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"windows-wsl-based-development-environment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows-wsl-based-development-environment"}},[t._v("#")]),t._v(" Windows WSL-Based Development Environment")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("This development environment is "),a("RouterLink",{attrs:{to:"/en/advanced/dev_env_unsupported.html"}},[t._v("not supported")]),t._v(".\nSee "),a("RouterLink",{attrs:{to:"/en/dev_setup/dev_env.html"}},[t._v("Toolchain Installation")]),t._v(" for information about the environments and tools we do support!")],1)]),t._v(" "),a("p",[t._v("Windows users can alternatively install a "),a("em",[t._v("slightly modified")]),t._v(" Ubuntu Linux PX4 development environment within "),a("a",{attrs:{href:"https://github.com/Microsoft/BashOnWindows",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bash on Windows"),a("OutboundLink")],1),t._v(", and use it to:")]),t._v(" "),a("ul",[a("li",[t._v("Build firmware for NuttX/Pixhawk targets.")]),t._v(" "),a("li",[t._v("Run the PX4 JMAVSim simulation (using a Windows-hosted X-Windows app to display the UI)")])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("This mechanism only works on Windows 10.\nIt essentially runs the toolchain in a virtual machine, and is relatively slow compared to other solutions.")])]),t._v(" "),a("h3",{attrs:{id:"setup-environment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setup-environment"}},[t._v("#")]),t._v(" Setup Environment")]),t._v(" "),a("p",[t._v("The easiest way to setup the environment is to use the "),a("strong",[a("a",{attrs:{href:"https://raw.githubusercontent.com/PX4/Devguide/master/build_scripts/windows_bash_nuttx.sh",target:"_blank",download:""}},[t._v("windows_bash_nuttx.sh")])]),t._v(" script (details for script are "),a("a",{attrs:{href:"#build_script_details"}},[t._v("given below")]),t._v("). ")]),t._v(" "),a("p",[t._v("To setup the development environment:")]),t._v(" "),a("ol",[a("li",[t._v("Install "),a("a",{attrs:{href:"https://github.com/Microsoft/BashOnWindows",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bash on Windows"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("li",[t._v("Open the bash shell.")]),t._v(" "),a("li",[t._v("Download the "),a("strong",[t._v("windows_bash_nuttx.sh")]),t._v(":"),a("br"),t._v(" "),a("code",[t._v("wget https://raw.githubusercontent.com/PX4/Devguide/master/build_scripts/windows_bash_nuttx.sh")])]),t._v(" "),a("li",[t._v("Run the script using the command below (acknowledging any prompts as required):")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" windows_bash_nuttx.sh\n")])])]),a("h3",{attrs:{id:"build-firmware"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-firmware"}},[t._v("#")]),t._v(" Build Firmware")]),t._v(" "),a("p",[t._v("To build the firmware (i.e. for px4_fmu-v4):")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Enter the following commands in the bash shell:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("cd ~/src/PX4-Autopilot\nmake px4_fmu-v4_default\n")])])]),a("p",[t._v("On successful completion you'll find the firmware here: "),a("code",[t._v("PX4-Autopilot/build/px4_fmu-v4_default/px4_fmu-v4_default.px4")])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("make")]),t._v(" commands to build firmware for other boards can be found in "),a("RouterLink",{attrs:{to:"/en/dev_setup/building_px4.html#nuttx-pixhawk-based-boards"}},[t._v("Building the Code")]),t._v(".")],1)])]),t._v(" "),a("li",[a("p",[t._v("You can flash the custom firmware on Windows using "),a("em",[t._v("QGroundControl")]),t._v(" or "),a("em",[t._v("Mission Planner")]),t._v(" (it is not possible to directly flash the firmware from within the bash shell using the "),a("code",[t._v("upload")]),t._v(" command).")])])]),t._v(" "),a("h3",{attrs:{id:"simulation-jmavsim"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simulation-jmavsim"}},[t._v("#")]),t._v(" Simulation (JMAVSim)")]),t._v(" "),a("p",[t._v("Bash on Windows does not include support for UI libraries. In order to display the jMAVSim UI you will first need to install an X-Window application like "),a("a",{attrs:{href:"https://sourceforge.net/projects/xming/",target:"_blank",rel:"noopener noreferrer"}},[t._v("XMing"),a("OutboundLink")],1),t._v(" into Windows.")]),t._v(" "),a("p",[t._v("To run JMAVSim:")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Install and start "),a("a",{attrs:{href:"https://sourceforge.net/projects/xming/",target:"_blank",rel:"noopener noreferrer"}},[t._v("XMing"),a("OutboundLink")],1),t._v(" on Windows.")])]),t._v(" "),a("li",[a("p",[t._v("Enter the following command in the bash shell:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("DISPLAY")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(":0\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("Add this line to the Ubuntu "),a("strong",[t._v(".bashrc")]),t._v(" file if you don't want to enter it every session.")])])]),t._v(" "),a("li",[a("p",[t._v("Start PX4 and jMAVSim in the bash shell:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl jmavsim\n")])])]),a("p",[t._v("The JMAVSim UI is then displayed in XMing as shown below:")]),t._v(" "),a("p",[a("img",{attrs:{src:e(679),alt:"jMAVSimOnWindows"}})])])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("Gazebo can similarly be run within Ubuntu Bash for Windows, but too slow to be useful.\nTo try this, follow the "),a("a",{attrs:{href:"http://wiki.ros.org/kinetic/Installation/Ubuntu",target:"_blank",rel:"noopener noreferrer"}},[t._v("ROS kinetic install guide"),a("OutboundLink")],1),t._v(" and run Gazebo in the Bash shell as shown:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("DISPLAY")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(":0\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("GAZEBO_IP")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" px4_sitl gazebo\n")])])])]),t._v(" "),a("p",[a("a",{attrs:{id:"build_script_details"}})]),t._v(" "),a("h3",{attrs:{id:"build-script-details"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-script-details"}},[t._v("#")]),t._v(" Build Script Details")]),t._v(" "),a("p",[t._v("The "),a("a",{attrs:{href:"https://raw.githubusercontent.com/PX4/Devguide/master/build_scripts/windows_bash_nuttx.sh"}},[t._v("windows_bash_nuttx.sh")]),t._v(" "),t._v(" build script modifies the Ubuntu build instructions to remove Ubuntu-specific and UI-dependent components, including the "),a("em",[t._v("Qt Creator")]),t._v(" IDE and the simulators.")]),t._v(" "),a("p",[t._v("In addition, it uses a "),a("a",{attrs:{href:"https://github.com/SolinGuo/arm-none-eabi-bash-on-win10-.git",target:"_blank",rel:"noopener noreferrer"}},[t._v("64 bit arm-none-eabi compiler"),a("OutboundLink")],1),t._v("\nsince BashOnWindows doesn't run 32 bit ELF programs (and the default compiler from "),a("code",[t._v("https://launchpad.net/gcc-arm-embedded")]),t._v(" is 32 bit).")]),t._v(" "),a("p",[t._v("To add this compiler to your environment manually:")]),t._v(" "),a("ol",[a("li",[t._v("Download the compiler:"),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://github.com/SolinGuo/arm-none-eabi-bash-on-win10-/raw/master/gcc-arm-none-eabi-5_4-2017q2-20170512-linux.tar.bz2\n")])])])]),t._v(" "),a("li",[t._v("Unpack it using this command line in the Bash On Windows console:"),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" -xvf gcc-arm-none-eabi-5_4-2017q2-20170512-linux.tar.bz2\n")])])]),t._v("This will unpack the arm gcc cross-compiler to:"),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("gcc-arm-none-eabi-5_4-2017q2/bin\n")])])])]),t._v(" "),a("li",[t._v("Add the to the environment (add the line to your bash profile to make the change permanent)"),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("export PATH=$HOME/gcc-arm-none-eabi-5_4-2017q2/bin:$PATH\n")])])])])])])}),[],!1,null,null,null);s.default=n.exports},679:function(t,s,e){t.exports=e.p+"assets/img/jmavsim_on_windows.2d0339ad.png"}}]);