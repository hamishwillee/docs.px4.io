(window.webpackJsonp=window.webpackJsonp||[]).push([[433],{2193:function(t,e,s){"use strict";s.r(e);var o=s(19),a=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"archlinux-上的开发环境"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#archlinux-上的开发环境"}},[t._v("#")]),t._v(" ArchLinux 上的开发环境")]),t._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),o("p",[t._v("This development environment is "),o("RouterLink",{attrs:{to:"/zh/advanced/dev_env_unsupported.html"}},[t._v("not supported")]),t._v(". See "),o("RouterLink",{attrs:{to:"/zh/dev_setup/dev_env.html"}},[t._v("Toolchain Installation")]),t._v(" for information about the environments and tools we do support!")],1)]),t._v(" "),o("p",[t._v("The PX4-Autopilot repository provides a convenient script to set your Arch installation up for PX4 development: "),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/Tools/setup/arch.sh",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tools/setup/arch.sh"),o("OutboundLink")],1),t._v(". ")]),t._v(" "),o("p",[t._v("The script installs (by default) all tools to build PX4 (without RTPS) for NuttX targets and run simulation with "),o("em",[t._v("jMAVsim")]),t._v(". You can additionally install the "),o("em",[t._v("Gazebo")]),t._v(" simulator by specifying the command line argument: "),o("code",[t._v("--gazebo")]),t._v(".")]),t._v(" "),o("p",[o("img",{attrs:{src:s(684),alt:"Gazebo on Arch"}})]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),o("p",[t._v("The instructions have been tested on "),o("a",{attrs:{href:"https://manjaro.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Manjaro"),o("OutboundLink")],1),t._v(" (Arch based distribution) as it is much easier to set up than Arch Linux.")])]),t._v(" "),o("p",[t._v("To get and run the scripts, do either of:")]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/zh/dev_setup/building_px4.html"}},[t._v("Download PX4 Source Code")]),t._v(" and run the scripts in place:"),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("wget https://raw.githubusercontent.com/PX4/containers/master/docker/px4-dev/scripts/archlinux_install_script.sh\n")])])])],1)]),t._v(" "),o("p",[t._v("sudo -s\nsource ./archlinux_install_script.sh")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v('* 只下载你所需的脚本并运行他们：\n```sh\nOnce ArchLinux is installed you can use the docker script <a href="https://github.com/PX4/containers/blob/master/docker/px4-dev/scripts/archlinux_install_script.sh">archlinux_install_script.sh</a> to install all dependencies required for building PX4 firmware.\n')])])]),o("p",[t._v("The script takes the following optional parameters:")]),t._v(" "),o("ul",[o("li",[o("p",[o("code",[t._v("--gazebo")]),t._v(": Add this parameter to install Gazebo from the "),o("a",{attrs:{href:"https://aur.archlinux.org/packages/gazebo/",target:"_blank",rel:"noopener noreferrer"}},[t._v("AUR"),o("OutboundLink")],1),t._v(". :::note Gazebo gets compiled from source. It takes some time to install and requires entering the "),o("code",[t._v("sudo")]),t._v(" password multiple times (for dependencies).\n:::")])]),t._v(" "),o("li",[o("p",[o("code",[t._v("--no-nuttx")]),t._v(": Do not install the NuttX/Pixhawk toolchain (i.e. if only using simulation).")])]),t._v(" "),o("li",[o("p",[o("code",[t._v("--no-sim-tools")]),t._v("：不要安装 jMAVSim/Gazebo 仿真器（例如你只想使用或者开发调试 Pixhawk/NuttX）")])])])])}),[],!1,null,null,null);e.default=a.exports},684:function(t,e,s){t.exports=s.p+"assets/img/arch-gazebo.0fbb4b3a.png"}}]);