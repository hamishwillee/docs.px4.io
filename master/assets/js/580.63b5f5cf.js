(window.webpackJsonp=window.webpackJsonp||[]).push([[580],{1968:function(t,e,n){"use strict";n.r(e);var s=n(18),a=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"development-environment-on-archlinux"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#development-environment-on-archlinux"}},[t._v("#")]),t._v(" Development Environment on ArchLinux")]),t._v(" "),s("p",[t._v('The user needs to be added to the group "uucp": ')]),t._v(" "),s("p",[t._v("The script installs (by default) all tools to build PX4 (without RTPS) for NuttX targets and run simulation with "),s("em",[t._v("jMAVsim")]),t._v(". You can additionally install the "),s("em",[t._v("Gazebo")]),t._v(" simulator by specifying the command line argument: "),s("code",[t._v("--gazebo")]),t._v(".")]),t._v(" "),s("p",[s("img",{attrs:{src:n(681),alt:"Gazebo on Arch"}})]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("The instructions have been tested on "),s("a",{attrs:{href:"https://manjaro.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Manjaro"),s("OutboundLink")],1),t._v(" (Arch based distribution) as it is much easier to set up than Arch Linux.")])]),t._v(" "),s("p",[t._v("To get and run the scripts, do either of:")]),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/ko/dev_setup/building_px4.html"}},[t._v("Download PX4 Source Code")]),t._v(" and run the scripts in place:"),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("wget https://raw.githubusercontent.com/PX4/containers/master/docker/px4-dev/scripts/archlinux_install_script.sh\n")])])])],1)]),t._v(" "),s("p",[t._v("sudo -s\nsource ./archlinux_install_script.sh")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('* Download just the needed scripts and then run them:\n```sh\nOnce ArchLinux is installed you can use the docker script <a href="https://github.com/PX4/containers/blob/master/docker/px4-dev/scripts/archlinux_install_script.sh">archlinux_install_script.sh</a> to install all dependencies required for building PX4 firmware.\n')])])]),s("p",[t._v("The script takes the following optional parameters:")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("--gazebo")]),t._v(": Add this parameter to install Gazebo from the "),s("a",{attrs:{href:"https://aur.archlinux.org/packages/gazebo/",target:"_blank",rel:"noopener noreferrer"}},[t._v("AUR"),s("OutboundLink")],1),t._v(". :::note Gazebo gets compiled from source. It takes some time to install and requires entering the "),s("code",[t._v("sudo")]),t._v(" password multiple times (for dependencies).\n:::")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("--no-nuttx")]),t._v(": Do not install the NuttX/Pixhawk toolchain (i.e. if only using simulation).")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("--no-sim-tools")]),t._v(": Do not install jMAVSim/Gazebo (i.e. if only targeting Pixhawk/NuttX targets)")])])])])}),[],!1,null,null,null);e.default=a.exports},681:function(t,e,n){t.exports=n.p+"assets/img/arch-gazebo.0fbb4b3a.png"}}]);