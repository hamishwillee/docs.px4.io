(window.webpackJsonp=window.webpackJsonp||[]).push([[573],{1952:function(t,e,n){"use strict";n.r(e);var a=n(18),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"development-environment-on-archlinux"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#development-environment-on-archlinux"}},[t._v("#")]),t._v(" Development Environment on ArchLinux")]),t._v(" "),a("p",[t._v('The user needs to be added to the group "uucp": ')]),t._v(" "),a("p",[t._v("The script installs (by default) all tools to build PX4 (without RTPS) for NuttX targets and run simulation with "),a("em",[t._v("jMAVsim")]),t._v(". You can additionally install the "),a("em",[t._v("Gazebo")]),t._v(" simulator by specifying the command line argument: "),a("code",[t._v("--gazebo")]),t._v(".")]),t._v(" "),a("p",[a("img",{attrs:{src:n(682),alt:"Gazebo on Arch"}})]),t._v(" "),a("blockquote",[a("p",[a("em",[t._v("Alternatively")]),t._v(", the standard instructions for installing the "),a("strong",[t._v("official")]),t._v(" version are listed below.")])]),t._v(" "),a("p",[t._v("To install using this script, enter the following in a terminal:")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/ko/dev_setup/building_px4.html"}},[t._v("Download PX4 Source Code")]),t._v(" and run the scripts in place:"),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("wget https://raw.githubusercontent.com/PX4/containers/master/docker/px4-dev/scripts/archlinux_install_script.sh\n")])])])],1)]),t._v(" "),a("p",[t._v("sudo -s\nsource ./archlinux_install_script.sh")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('* Download just the needed scripts and then run them:\n```sh\nOnce ArchLinux is installed you can use the docker script <a href="https://github.com/PX4/containers/blob/master/docker/px4-dev/scripts/archlinux_install_script.sh">archlinux_install_script.sh</a> to install all dependencies required for building PX4 firmware.\n')])])]),a("p",[t._v("The script takes the following optional parameters:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("--gazebo")]),t._v(": Add this parameter parameter to install Gazebo from the "),a("a",{attrs:{href:"https://aur.archlinux.org/packages/gazebo/",target:"_blank",rel:"noopener noreferrer"}},[t._v("AUR"),a("OutboundLink")],1),t._v(". > "),a("strong",[t._v("Note")]),t._v(" Gazebo gets compiled from source. It takes some time to install and requires entering the "),a("code",[t._v("sudo")]),t._v(" password multiple times (for dependencies).")]),t._v(" "),a("li",[a("code",[t._v("--no-nuttx")]),t._v(": Do not install the NuttX/Pixhawk toolchain (i.e. if only using simulation).")]),t._v(" "),a("li",[a("code",[t._v("--no-sim-tools")]),t._v(": Do not install jMAVSim/Gazebo (i.e. if only targeting Pixhawk/NuttX targets)")])])])}),[],!1,null,null,null);e.default=s.exports},682:function(t,e,n){t.exports=n.p+"assets/img/arch-gazebo.0fbb4b3a.png"}}]);