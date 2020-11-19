(window.webpackJsonp=window.webpackJsonp||[]).push([[784],{1605:function(e,t,o){"use strict";o.r(t);var a=o(18),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"snapdragon-development-environment-installation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#snapdragon-development-environment-installation"}},[e._v("#")]),e._v(" Snapdragon Development Environment Installation")]),e._v(" "),o("blockquote",[o("p",[o("strong",[e._v("Note")]),e._v(" The "),o("em",[e._v("Qualcomm Snapdragon Flight")]),e._v(" is discontinued (it has been superseded but PX4 does not yet support the newer version).\nThis documentation is provided for existing users, but will be removed in a future release.")])]),e._v(" "),o("p",[e._v("This topic explains how to set up the "),o("em",[e._v("Qualcomm Snapdragon Flight")]),e._v(" development toolchain on a Linux computer.")]),e._v(" "),o("blockquote",[o("p",[o("em",[o("strong",[e._v("Note")])]),e._v(" The firmware for the "),o("em",[e._v("Qualcomm Snapdragon Flight")]),e._v(" must be built manually (Firmware is not supplied for automatic download via "),o("em",[e._v("QGroundControl")]),e._v(").")])]),e._v(" "),o("h2",{attrs:{id:"set-up-development-environment"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#set-up-development-environment"}},[e._v("#")]),e._v(" Set up Development Environment")]),e._v(" "),o("p",[e._v("To set up the development environment:")]),e._v(" "),o("ol",[o("li",[e._v("Add your user to the "),o("em",[e._v("dialout")]),e._v(" group:"),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("sudo usermod -a -G dialout $USER\n")])])])]),e._v(" "),o("li",[e._v("Log out and back in.")]),e._v(" "),o("li",[e._v("Download the "),o("a",{attrs:{href:"https://raw.githubusercontent.com/PX4/Devguide/master/build_scripts/ubuntu_sim_common_deps.sh",target:"_blank",rel:"noopener noreferrer"}},[e._v("ubuntu_sim_common_deps.sh"),o("OutboundLink")],1),e._v(" script and run it on your machine:"),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("cd ~\nwget https://raw.githubusercontent.com/PX4/Devguide/master/build_scripts/ubuntu_sim_common_deps.sh ~\nsudo chmod +x ubuntu_sim_common_deps.sh\n./ubuntu_sim_common_deps.sh\n")])])])])]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("\n## Cross-toolchain & Hexagon SDK\n\nTo install the Cross-Toolchain and Hexagon SDK:\n\n1. Start by installing some dependencies:\n")])])]),o("p",[e._v("sudo apt-get install android-tools-adb android-tools-fastboot "),o("br"),e._v("\nfakechroot fakeroot unzip xz-utils wget python python-empy -y")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("\n1. Clone the cross_toolchain repo:\n")])])]),o("p",[e._v("git clone https://github.com/ATLFlight/cross_toolchain.git\ncd cross_toolchain")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("1. Download the Hexagon SDK v3.0 from [here](https://developer.qualcomm.com/software/hexagon-dsp-sdk/tools) to your cross_toolchain/downloads location (you will need to create an account if you don't have one).\n1. Download the latest version of the qrlSDK file from [here](https://support.intrinsyc.com/projects/snapdragon-flight/files) to your cross_toolchain/downloads location (you need to create an account if you don't have one).\n1. Run the installer:\n")])])]),o("p",[e._v("./installsdk.sh --APQ8074 --arm-gcc --qrlSDK")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("1. The installer tells you to set a few environment variables. Append these to your `~/.bashrc`:\n")])])]),o("p",[e._v("export HEXAGON_SDK_ROOT=/home/<YOUR_LINUX_USERNAME>/Qualcomm/Hexagon_SDK/3.0\nexport HEXAGON_TOOLS_ROOT=/home/<YOUR_LINUX_USERNAME>/Qualcomm/HEXAGON_Tools/7.2.12/Tools\nexport HEXAGON_ARM_SYSROOT=/home/<YOUR_LINUX_USERNAME>/Qualcomm/qrlinux_sysroot\nexport ARM_CROSS_GCC_ROOT=/home/<YOUR_LINUX_USERNAME>/Qualcomm/ARM_Tools/gcc-4.9-2014.11")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("Don't forget to source it:\n")])])]),o("p",[e._v("source ~/.bashrc")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code")])])])}),[],!1,null,null,null);t.default=n.exports}}]);