(window.webpackJsonp=window.webpackJsonp||[]).push([[551],{1640:function(t,e,o){"use strict";o.r(e);var s=o(19),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"arch-linux-development-environment"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#arch-linux-development-environment"}},[t._v("#")]),t._v(" Arch Linux Development Environment")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("This development environment is "),s("RouterLink",{attrs:{to:"/en/advanced/dev_env_unsupported.html"}},[t._v("not supported")]),t._v(".\nSee "),s("RouterLink",{attrs:{to:"/en/dev_setup/dev_env.html"}},[t._v("Toolchain Installation")]),t._v(" for information about the environments and tools we do support!")],1)]),t._v(" "),s("p",[t._v("The PX4-Autopilot repository provides a convenient script to set your Arch installation up for PX4 development: "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/Tools/setup/arch.sh",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tools/setup/arch.sh"),s("OutboundLink")],1),t._v(". ")]),t._v(" "),s("p",[t._v("The script installs (by default) all tools to build PX4 (without RTPS) for NuttX targets and run simulation with "),s("em",[t._v("jMAVsim")]),t._v(".\nYou can additionally install the "),s("em",[t._v("Gazebo")]),t._v(" simulator by specifying the command line argument: "),s("code",[t._v("--gazebo")]),t._v(".")]),t._v(" "),s("p",[s("img",{attrs:{src:o(700),alt:"Gazebo on Arch"}})]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("The instructions have been tested on "),s("a",{attrs:{href:"https://manjaro.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Manjaro"),s("OutboundLink")],1),t._v(" (Arch based distribution) as it is much easier to set up than Arch Linux.")])]),t._v(" "),s("p",[t._v("To get and run the scripts, do either of:")]),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/en/dev_setup/building_px4.html"}},[t._v("Download PX4 Source Code")]),t._v(" and run the scripts in place:"),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("git clone https://github.com/PX4/PX4-Autopilot.git\nbash PX4-Autopilot/Tools/setup/arch.sh\n")])])])],1),t._v(" "),s("li",[t._v("Download just the needed scripts and then run them:"),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://raw.githubusercontent.com/PX4/PX4-Autopilot/master/Tools/setup/arch.sh\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://raw.githubusercontent.com/PX4/PX4-Autopilot/master/Tools/setup/requirements.txt\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" arch.sh\n")])])])])]),t._v(" "),s("p",[t._v("The script takes the following optional parameters:")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("--gazebo")]),t._v(": Add this parameter to install Gazebo from the "),s("a",{attrs:{href:"https://aur.archlinux.org/packages/gazebo/",target:"_blank",rel:"noopener noreferrer"}},[t._v("AUR"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("Gazebo gets compiled from source.\nIt takes some time to install and requires entering the "),s("code",[t._v("sudo")]),t._v(" password multiple times (for dependencies).")])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("--no-nuttx")]),t._v(": Do not install the NuttX/Pixhawk toolchain (i.e. if only using simulation).")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("--no-sim-tools")]),t._v(": Do not install jMAVSim/Gazebo (i.e. if only targeting Pixhawk/NuttX targets)")])])])])}),[],!1,null,null,null);e.default=n.exports},700:function(t,e,o){t.exports=o.p+"assets/img/arch-gazebo.0fbb4b3a.png"}}]);