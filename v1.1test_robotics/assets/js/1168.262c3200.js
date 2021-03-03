(window.webpackJsonp=window.webpackJsonp||[]).push([[1168],{2410:function(e,t,i){"use strict";i.r(t);var n=i(18),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"windows-虚拟机托管的工具链"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#windows-虚拟机托管的工具链"}},[e._v("#")]),e._v(" Windows 虚拟机托管的工具链")]),e._v(" "),i("p",[e._v("Windows 平台开发者可以在运行Linux的虚拟机中运行 PX4 工具链。 设置好虚拟机后，在虚拟机内进行 PX4 开发环境的安装、设置的流程与原生 Linux 电脑没有任何差别。\n:::")]),e._v(" "),i("p",[e._v("Windows developers can run the PX4 toolchain in a virtual machine (VM) with Linux as the guest operating system. After setting up the virtual machine, the installation and setup of PX4 within the VM is exactly the same as on a native Linux computer.")]),e._v(" "),i("p",[e._v("有很多种方法在你的系统上设定一个可以运行 PX4 开发环境的虚拟机。 本指南将引导你使用 VMWare 完成虚拟机的设置。")]),e._v(" "),i("p",[e._v("While using a VM is a very easy way to set up and test an environment for building firmware, users should be aware:")]),e._v(" "),i("ol",[i("li",[e._v("固件的编译速度比原生 Linux 要更慢一些。")]),e._v(" "),i("li",[e._v("JMAVSim 的帧率比原生 Linux 要低得多。 虚拟机运行资源不足可能导致特定情况下无人机坠毁。")]),e._v(" "),i("li",[e._v("可以安装 Gazebo 和 ROS，但运行速度非常慢。")])]),e._v(" "),i("h2",{attrs:{id:"操作说明"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#操作说明"}},[e._v("#")]),e._v(" 操作说明")]),e._v(" "),i("p",[e._v("There are multiple ways to setup a VM which is capable of executing the PX4 environment on your system. This guide walks you through a VMWare setup. VMWare performance is acceptable for basic usage (building Firmware) but not for running ROS or Gazebo.")]),e._v(" "),i("ol",[i("li",[e._v("下载 "),i("a",{attrs:{href:"https://www.vmware.com/products/workstation-player/workstation-player-evaluation.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("VMWare Player Freeware"),i("OutboundLink")],1),e._v("。")]),e._v(" "),i("li",[e._v("将其安装在 Windows 系统上。")]),e._v(" "),i("li",[e._v("下载所需版本的 Ubuntu Desktop ISO 镜像文件</0>。 (参阅 "),i("RouterLink",{attrs:{to:"/zh/setup/dev_env_linux.html"}},[e._v("Linux Instructions Page")]),e._v(" 以获取推荐的 Ubuntu 版本)。")],1),e._v(" "),i("li",[e._v("打开 "),i("em",[e._v("VMWare Player")]),e._v(" 并选择创建新虚拟机的选项。")]),e._v(" "),i("li",[e._v("Enable 3D acceleration in the VM's settings: "),i("strong",[e._v("VM > Settings > Hardware > Display > Accelerate 3D graphics")])])]),e._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),i("p",[e._v("This option is required to properly run 3D simulation environments like jMAVSim and Gazebo. We recommend this is done before installing Linux in the virtual environment.")])]),e._v(" "),i("ol",[i("li",[e._v("Select the option to create a new virtual machine.")]),e._v(" "),i("li",[e._v("In the VM creation wizard choose the downloaded Ubuntu ISO image as your installation medium and will automatically detect the operating system you want to use.")]),e._v(" "),i("li",[e._v("Also in the wizard, select the resources you want to allocate to your virtual machine while it is running. Allocate as much memory and as many CPU cores as you can without rendering your host Windows system unusable.")]),e._v(" "),i("li",[e._v("Run your new VM at the end of the wizard and let it install Ubuntu following the setup instructions. Remember all settings are only for within your host operating system usage and hence you can disable any screen saver and local workstation security features which do not increase risk of a network attack.")]),e._v(" "),i("li",[e._v("Once the new VM is booted up make sure you install "),i("em",[e._v("VMWare tools drivers and tools extension")]),e._v(" inside your guest system. This will enhance performance and usability of your VM usage:\n"),i("ul",[i("li",[e._v("Significantly enhanced graphics performance")]),e._v(" "),i("li",[e._v("Proper support for hardware device usage like USB port allocation (important for target upload), proper mouse wheel scrolling, sound suppport")]),e._v(" "),i("li",[e._v("Guest display resolution adaption to the window size")]),e._v(" "),i("li",[e._v("Clipboard sharing to host system")]),e._v(" "),i("li",[e._v("File sharing to host system")])])]),e._v(" "),i("li",[e._v("Continue with "),i("RouterLink",{attrs:{to:"/zh/dev_setup/dev_env_linux.html"}},[e._v("PX4 environment setup for Linux")])],1)])])}),[],!1,null,null,null);t.default=a.exports}}]);