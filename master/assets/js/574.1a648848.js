(window.webpackJsonp=window.webpackJsonp||[]).push([[574],{1953:function(t,e,o){"use strict";o.r(e);var n=o(18),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"development-environment-on-arch-linux"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#development-environment-on-arch-linux"}},[t._v("#")]),t._v(" Development Environment on Arch Linux")]),t._v(" "),n("p",[t._v("The PX4-Autopilot repository provides a convenient script to set your Arch installation up for PX4 development: "),n("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/Tools/setup/arch.sh",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tools/setup/arch.sh"),n("OutboundLink")],1),t._v(". ")]),t._v(" "),n("p",[t._v("The script installs (by default) all tools to build PX4 (without RTPS) for NuttX targets and run simulation with "),n("em",[t._v("jMAVsim")]),t._v(". You can additionally install the "),n("em",[t._v("Gazebo")]),t._v(" simulator by specifying the command line argument: "),n("code",[t._v("--gazebo")]),t._v(".")]),t._v(" "),n("p",[n("img",{attrs:{src:o(684),alt:"Gazebo on Arch"}})]),t._v(" "),n("blockquote",[n("p",[n("strong",[t._v("Note")]),t._v(" The instructions have been tested on "),n("a",{attrs:{href:"https://manjaro.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Manjaro"),n("OutboundLink")],1),t._v(" (Arch based distribution) as it is much easier to set up than Arch Linux.")])]),t._v(" "),n("p",[t._v("To get and run the scripts, do either of:")]),t._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/ko/dev_setup/building_px4.html"}},[t._v("Download PX4 Source Code")]),t._v(" and run the scripts in place:"),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("git clone https://github.com/PX4/PX4-Autopilot.git\nbash PX4-Autopilot/Tools/setup/arch.sh\n")])])])],1),t._v(" "),n("li",[t._v("Download just the needed scripts and then run them:"),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://raw.githubusercontent.com/PX4/PX4-Autopilot/master/Tools/setup/arch.sh\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://raw.githubusercontent.com/PX4/PX4-Autopilot/master/Tools/setup/requirements.txt\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" arch.sh\n")])])])])]),t._v(" "),n("p",[t._v("The script takes the following optional parameters:")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("--gazebo")]),t._v(": Add this parameter parameter to install Gazebo from the "),n("a",{attrs:{href:"https://aur.archlinux.org/packages/gazebo/",target:"_blank",rel:"noopener noreferrer"}},[t._v("AUR"),n("OutboundLink")],1),t._v(". > "),n("strong",[t._v("Note")]),t._v(" Gazebo gets compiled from source. It takes some time to install and requires entering the "),n("code",[t._v("sudo")]),t._v(" password multiple times (for dependencies).")]),t._v(" "),n("li",[n("code",[t._v("--no-nuttx")]),t._v(": Do not install the NuttX/Pixhawk toolchain (i.e. if only using simulation).")]),t._v(" "),n("li",[n("code",[t._v("--no-sim-tools")]),t._v(": Do not install jMAVSim/Gazebo (i.e. if only targeting Pixhawk/NuttX targets)")])])])}),[],!1,null,null,null);e.default=s.exports},684:function(t,e,o){t.exports=o.p+"assets/img/arch-gazebo.0fbb4b3a.png"}}]);