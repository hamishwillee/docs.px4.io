(window.webpackJsonp=window.webpackJsonp||[]).push([[1221],{2521:function(o,e,t){"use strict";t.r(e);var n=t(18),s=Object(n.a)({},(function(){var o=this,e=o.$createElement,t=o._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":o.$parent.slotKey}},[t("h1",{attrs:{id:"snapdragon-development-environment-installation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#snapdragon-development-environment-installation"}},[o._v("#")]),o._v(" Snapdragon Development Environment Installation")]),o._v(" "),t("div",{staticClass:"custom-block note"},[t("p",{staticClass:"custom-block-title"},[o._v("注解")]),o._v(" "),t("p",[o._v("The "),t("em",[o._v("Qualcomm Snapdragon Flight")]),o._v(" is discontinued (it has been superseded but PX4 does not yet support the newer version). This documentation is provided for existing users, but will be removed in a future release.")])]),o._v(" "),t("p",[o._v("This topic explains how to set up the "),t("em",[o._v("Qualcomm Snapdragon Flight")]),o._v(" development toolchain on a Linux computer.")]),o._v(" "),t("div",{staticClass:"custom-block note"},[t("p",{staticClass:"custom-block-title"},[o._v("注解")]),o._v(" "),t("p",[o._v("The firmware for the "),t("em",[o._v("Qualcomm Snapdragon Flight")]),o._v(" must be built manually (Firmware is not supplied for automatic download via "),t("em",[o._v("QGroundControl")]),o._v(").")])]),o._v(" "),t("h2",{attrs:{id:"set-up-development-environment"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#set-up-development-environment"}},[o._v("#")]),o._v(" Set up Development Environment")]),o._v(" "),t("p",[o._v("To set up the development environment:")]),o._v(" "),t("ol",[t("li",[o._v("Add your user to the "),t("em",[o._v("dialout")]),o._v(" group: "),t("code",[o._v("sudo usermod -a -G dialout $USER")])]),o._v(" "),t("li",[o._v("Log out and back in.")]),o._v(" "),t("li",[o._v("Download the "),t("a",{attrs:{href:"https://raw.githubusercontent.com/PX4/Devguide/master/build_scripts/ubuntu_sim_common_deps.sh",target:"_blank",rel:"noopener noreferrer"}},[o._v("ubuntu_sim_common_deps.sh"),t("OutboundLink")],1),o._v(" script and run it on your machine:\ncd ~\nwget https://raw.githubusercontent.com/PX4/Devguide/master/build_scripts/ubuntu_sim_common_deps.sh ~\nsudo chmod +x ubuntu_sim_common_deps.sh\n./ubuntu_sim_common_deps.sh")])]),o._v(" "),t("h2",{attrs:{id:"cross-toolchain-hexagon-sdk"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cross-toolchain-hexagon-sdk"}},[o._v("#")]),o._v(" Cross-toolchain & Hexagon SDK")]),o._v(" "),t("p",[o._v("To install the Cross-Toolchain and Hexagon SDK:")]),o._v(" "),t("ol",[t("li",[t("p",[o._v("Start by installing some dependencies:")]),o._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[o._v(" sudo apt-get install android-tools-adb android-tools-fastboot \\\n     fakechroot fakeroot unzip xz-utils wget python python-empy -y\n")])])])]),o._v(" "),t("li",[t("p",[o._v("Clone the cross_toolchain repo:")]),o._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[o._v(" git clone https://github.com/ATLFlight/cross_toolchain.git\n cd cross_toolchain\n")])])])]),o._v(" "),t("li",[t("p",[o._v("Download the Hexagon SDK v3.0 from "),t("a",{attrs:{href:"https://developer.qualcomm.com/software/hexagon-dsp-sdk/tools",target:"_blank",rel:"noopener noreferrer"}},[o._v("here"),t("OutboundLink")],1),o._v(" to your cross_toolchain/downloads location (you will need to create an account if you don't have one).")])]),o._v(" "),t("li",[t("p",[o._v("Download the latest version of the qrlSDK file from "),t("a",{attrs:{href:"https://support.intrinsyc.com/projects/snapdragon-flight/files",target:"_blank",rel:"noopener noreferrer"}},[o._v("here"),t("OutboundLink")],1),o._v(" to your cross_toolchain/downloads location (you need to create an account if you don't have one).")])]),o._v(" "),t("li",[t("p",[o._v("Run the installer: "),t("code",[o._v("./installsdk.sh --APQ8074 --arm-gcc --qrlSDK")])])]),o._v(" "),t("li",[t("p",[o._v("The installer tells you to set a few environment variables. Append these to your "),t("code",[o._v("~/.bashrc")]),o._v(":\nexport HEXAGON_SDK_ROOT=/home/<YOUR_LINUX_USERNAME>/Qualcomm/Hexagon_SDK/3.0\nexport HEXAGON_TOOLS_ROOT=/home/<YOUR_LINUX_USERNAME>/Qualcomm/HEXAGON_Tools/7.2.12/Tools\nexport HEXAGON_ARM_SYSROOT=/home/<YOUR_LINUX_USERNAME>/Qualcomm/qrlinux_sysroot\nexport ARM_CROSS_GCC_ROOT=/home/<YOUR_LINUX_USERNAME>/Qualcomm/ARM_Tools/gcc-4.9-2014.11 Don't forget to source it: "),t("code",[o._v("source ~/.bashrc")])])])])])}),[],!1,null,null,null);e.default=s.exports}}]);