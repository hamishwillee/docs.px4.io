(window.webpackJsonp=window.webpackJsonp||[]).push([[809],{1625:function(t,e,o){"use strict";o.r(e);var a=o(18),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"snapdragon-development-environment-installation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#snapdragon-development-environment-installation"}},[t._v("#")]),t._v(" Snapdragon Development Environment Installation")]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("The "),o("em",[t._v("Qualcomm Snapdragon Flight")]),t._v(" is discontinued (it has been superseded but PX4 does not yet support the newer version).\nThis documentation is provided for existing users, but will be removed in a future release.")])]),t._v(" "),o("p",[t._v("This topic explains how to set up the "),o("em",[t._v("Qualcomm Snapdragon Flight")]),t._v(" development toolchain on a Linux computer.")]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("The firmware for the "),o("em",[t._v("Qualcomm Snapdragon Flight")]),t._v(" must be built manually (Firmware is not supplied for automatic download via "),o("em",[t._v("QGroundControl")]),t._v(").")])]),t._v(" "),o("h2",{attrs:{id:"set-up-development-environment"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#set-up-development-environment"}},[t._v("#")]),t._v(" Set up Development Environment")]),t._v(" "),o("p",[t._v("To set up the development environment:")]),t._v(" "),o("ol",[o("li",[t._v("Add your user to the "),o("em",[t._v("dialout")]),t._v(" group:"),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("sudo usermod -a -G dialout $USER\n")])])])]),t._v(" "),o("li",[t._v("Log out and back in.")]),t._v(" "),o("li",[t._v("Download the "),o("a",{attrs:{href:"https://raw.githubusercontent.com/PX4/Devguide/master/build_scripts/ubuntu_sim_common_deps.sh",target:"_blank",rel:"noopener noreferrer"}},[t._v("ubuntu_sim_common_deps.sh"),o("OutboundLink")],1),t._v(" script and run it on your machine:"),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("cd ~\nwget https://raw.githubusercontent.com/PX4/Devguide/master/build_scripts/ubuntu_sim_common_deps.sh ~\nsudo chmod +x ubuntu_sim_common_deps.sh\n./ubuntu_sim_common_deps.sh\n")])])])])]),t._v(" "),o("h2",{attrs:{id:"cross-toolchain-hexagon-sdk"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cross-toolchain-hexagon-sdk"}},[t._v("#")]),t._v(" Cross-toolchain & Hexagon SDK")]),t._v(" "),o("p",[t._v("To install the Cross-Toolchain and Hexagon SDK:")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("Start by installing some dependencies:")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("sudo apt-get install android-tools-adb android-tools-fastboot \\\n\t    fakechroot fakeroot unzip xz-utils wget python python-empy -y\n")])])])]),t._v(" "),o("li",[o("p",[t._v("Clone the cross_toolchain repo:")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("git clone https://github.com/ATLFlight/cross_toolchain.git\ncd cross_toolchain\n")])])])]),t._v(" "),o("li",[o("p",[t._v("Download the Hexagon SDK v3.0 from "),o("a",{attrs:{href:"https://developer.qualcomm.com/software/hexagon-dsp-sdk/tools",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),o("OutboundLink")],1),t._v(" to your cross_toolchain/downloads location (you will need to create an account if you don't have one).")])]),t._v(" "),o("li",[o("p",[t._v("Download the latest version of the qrlSDK file from "),o("a",{attrs:{href:"https://support.intrinsyc.com/projects/snapdragon-flight/files",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),o("OutboundLink")],1),t._v(" to your cross_toolchain/downloads location (you need to create an account if you don't have one).")])]),t._v(" "),o("li",[o("p",[t._v("Run the installer:")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("./installsdk.sh --APQ8074 --arm-gcc --qrlSDK\n")])])])]),t._v(" "),o("li",[o("p",[t._v("The installer tells you to set a few environment variables. Append these to your "),o("code",[t._v("~/.bashrc")]),t._v(":")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("export HEXAGON_SDK_ROOT=/home/<YOUR_LINUX_USERNAME>/Qualcomm/Hexagon_SDK/3.0\nexport HEXAGON_TOOLS_ROOT=/home/<YOUR_LINUX_USERNAME>/Qualcomm/HEXAGON_Tools/7.2.12/Tools\nexport HEXAGON_ARM_SYSROOT=/home/<YOUR_LINUX_USERNAME>/Qualcomm/qrlinux_sysroot\nexport ARM_CROSS_GCC_ROOT=/home/<YOUR_LINUX_USERNAME>/Qualcomm/ARM_Tools/gcc-4.9-2014.11\n")])])]),o("p",[t._v("Don't forget to source it:")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("source ~/.bashrc\n")])])])])])])}),[],!1,null,null,null);e.default=s.exports}}]);