(window.webpackJsonp=window.webpackJsonp||[]).push([[854],{3336:function(t,e,o){"use strict";o.r(e);var s=o(19),a=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"archlinux-上的开发环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#archlinux-上的开发环境"}},[t._v("#")]),t._v(" ArchLinux 上的开发环境")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[t._v("This development environment is "),s("RouterLink",{attrs:{to:"/zh/advanced/dev_env_unsupported.html"}},[t._v("not supported")]),t._v(". See "),s("RouterLink",{attrs:{to:"/zh/dev_setup/dev_env.html"}},[t._v("Toolchain Installation")]),t._v(" for information about the environments and tools we do support!")],1)]),t._v(" "),s("p",[t._v("The PX4-Autopilot repository provides a convenient script to set your Arch installation up for PX4 development: "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/Tools/setup/arch.sh",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tools/setup/arch.sh"),s("OutboundLink")],1),t._v(". ")]),t._v(" "),s("p",[t._v("The script installs (by default) all tools to build PX4 for NuttX targets and run simulation with "),s("em",[t._v("jMAVsim")]),t._v(". You can additionally install the "),s("em",[t._v("Gazebo-Classic")]),t._v(" simulator by specifying the command line argument: "),s("code",[t._v("--gazebo")]),t._v(".")]),t._v(" "),s("p",[s("img",{attrs:{src:o(736),alt:"Gazebo on Arch"}})]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),s("p",[t._v("The instructions have been tested on "),s("a",{attrs:{href:"https://manjaro.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Manjaro"),s("OutboundLink")],1),t._v(" (Arch based distribution) as it is much easier to set up than Arch Linux.")])]),t._v(" "),s("p",[t._v("To get and run the scripts, do either of:")]),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/zh/dev_setup/building_px4.html"}},[t._v("Download PX4 Source Code")]),t._v(" and run the scripts in place:"),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("wget https://raw.githubusercontent.com/PX4/containers/master/docker/px4-dev/scripts/archlinux_install_script.sh\n")])])])],1)]),t._v(" "),s("p",[t._v("sudo -s\nsource ./archlinux_install_script.sh")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("* 只下载你所需的脚本并运行他们：\n```sh\nwget https://raw.githubusercontent.com/PX4/PX4-Autopilot/main/Tools/setup/arch.sh\nwget https://raw.githubusercontent.com/PX4/PX4-Autopilot/main/Tools/setup/requirements.txt\nbash arch.sh\n")])])]),s("p",[t._v("The script takes the following optional parameters:")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("--gazebo")]),t._v(": Add this parameter to install Gazebo from the "),s("a",{attrs:{href:"https://aur.archlinux.org/packages/gazebo/",target:"_blank",rel:"noopener noreferrer"}},[t._v("AUR"),s("OutboundLink")],1),t._v(". :::note Gazebo gets compiled from source. It takes some time to install and requires entering the "),s("code",[t._v("sudo")]),t._v(" password multiple times (for dependencies).\n:::")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("--no-nuttx")]),t._v(": Do not install the NuttX/Pixhawk toolchain (i.e. if only using simulation).")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("--no-sim-tools")]),t._v("：不要安装 jMAVSim/Gazebo 仿真器（例如你只想使用或者开发调试 Pixhawk/NuttX）")])])])])}),[],!1,null,null,null);e.default=a.exports},736:function(t,e,o){t.exports=o.p+"assets/img/arch-gazebo.f32cc6d9.png"}}]);