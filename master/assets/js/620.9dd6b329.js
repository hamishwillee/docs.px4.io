(window.webpackJsonp=window.webpackJsonp||[]).push([[620],{2234:function(e,t,a){"use strict";a.r(t);var n=a(18),l=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"在-ubuntu-上安装英特尔-realsense-r200-的驱动程序"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#在-ubuntu-上安装英特尔-realsense-r200-的驱动程序"}},[e._v("#")]),e._v(" 在 Ubuntu 上安装英特尔 RealSense R200 的驱动程序")]),e._v(" "),n("p",[e._v("本教程旨在提供有关如何在 linux 环境中安装英特尔实感 r200 相机头的相机驱动程序的说明, 以便可以通过机器人操作系统 (ros) 访问收集到的图像。 实感 r200 相机头如下图所示:")]),e._v(" "),n("p",[n("img",{attrs:{src:a(432),alt:"Intel Realsense Camera front view"}})]),e._v(" "),n("p",[e._v("驱动程序包的安装是在 Virtual Box 中作为虚拟机运行的 ubuntu 操作系统 (os) 上执行的。 运行 Virtual Box 的宿主机、虚拟机的规格如下:")]),e._v(" "),n("ul",[n("li",[e._v("主机操作系统：Windows 8")]),e._v(" "),n("li",[e._v("处理器：Intel(R) Core(TM) i7-4702MQ CPU @ 2.20GHz")]),e._v(" "),n("li",[e._v("Virtual Box：Oracle VM。 版本 5.0.14 r105127")]),e._v(" "),n("li",[e._v("扩展：安装了 Virtual Box 的扩展包（用于 USB3.0 支持）")]),e._v(" "),n("li",[e._v("客户机操作系统：linux-ubuntu 14.04.3 LTS")])]),e._v(" "),n("p",[e._v("本教程按以下方式排序: 在第一部分中, 演示如何在 Virtual Box 中安装 ubuntu 14.04 作为客户机系统。 第二部分会演示如何安装 ROS Indigo 和相机驱动程序。 随后频繁使用的短语示意如下：")]),e._v(" "),n("ul",[n("li",[e._v("虚拟框（VB）：运行不同虚拟机的程序。 此处使用 Oracle 虚拟机。")]),e._v(" "),n("li",[e._v("虚拟机（VM）：作为来宾系统在虚拟框中运行的操作系统。 此处使用 Ubuntu。")])]),e._v(" "),n("h2",{attrs:{id:"在虚拟机中安装-ubuntu-14-04-3-lts"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#在虚拟机中安装-ubuntu-14-04-3-lts"}},[e._v("#")]),e._v(" 在虚拟机中安装 Ubuntu 14.04.3 LTS")]),e._v(" "),n("ul",[n("li",[e._v("创建新的虚拟机 (vm): linux 64位。")]),e._v(" "),n("li",[e._v("下载 ubuntu 14.04.3 lts 的 iso 文件: ("),n("a",{attrs:{href:"http://www.ubuntu.com/download/desktop",target:"_blank",rel:"noopener noreferrer"}},[e._v("ubuntu-14.04.3-desktop-amd64.iso"),n("OutboundLink")],1),e._v(")。")]),e._v(" "),n("li",[e._v("Ubuntu 的安装:\n"),n("ul",[n("li",[e._v("在安装过程中，保留以下两项:\n"),n("ul",[n("li",[e._v("安装时下载更新")]),e._v(" "),n("li",[e._v("安装此第三方软件")])])])])]),e._v(" "),n("li",[e._v("安装完成后，您可能需要启用 Virtual Box 在整个桌面上显示 ubuntu：\n"),n("ul",[n("li",[e._v("Start VM Ubuntu and login, Click on "),n("strong",[e._v("Devices->Insert Guest Additions CD image")]),e._v(" in the menu bar of the Virtual Box.")]),e._v(" "),n("li",[e._v("点击 "),n("strong",[e._v("Run")]),e._v(" 并在 Ubuntu 弹出的窗口上输入密码。")]),e._v(" "),n("li",[e._v("等待安装完成，然后重新启动。 现在，应该可以在整个桌面上显示 VM。")]),e._v(" "),n("li",[e._v("如果 ubuntu 中弹出一个窗口, 询问是否更新, 请在此时拒绝更新。")])])]),e._v(" "),n("li",[e._v("在 Virtual Box 中启用 USB 3 控制器:\n"),n("ul",[n("li",[e._v("关闭虚拟机。")]),e._v(" "),n("li",[e._v('转到 "虚拟机" 的设置到菜单选择 USB，然后选择: "USB 3.0(xHCI)"。        只有在安装了虚拟框的扩展包时, 才有可能执行此操作。')]),e._v(" "),n("li",[e._v("再次启动虚拟机。")])])])]),e._v(" "),n("h2",{attrs:{id:"安装-ros-indigo"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装-ros-indigo"}},[e._v("#")]),e._v(" 安装 ROS Indigo")]),e._v(" "),n("ul",[n("li",[e._v("按照 "),n("a",{attrs:{href:"http://wiki.ros.org/indigo/Installation/Ubuntu",target:"_blank",rel:"noopener noreferrer"}},[e._v("ROS ndigo installation guide"),n("OutboundLink")],1),e._v(" 中给出的说明:\n"),n("ul",[n("li",[e._v("安装桌面完整版。")]),e._v(" "),n("li",[e._v('执行 "初始化 rosdep" 和 "环境设置" 部分中描述的步骤。')])])])]),e._v(" "),n("h2",{attrs:{id:"安装摄像头驱动"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装摄像头驱动"}},[e._v("#")]),e._v(" 安装摄像头驱动")]),e._v(" "),n("ul",[n("li",[e._v("安装 Git")])]),e._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt-get")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v("\n")])])]),n("ul",[n("li",[e._v("下载并安装驱动\n"),n("ul",[n("li",[e._v("获取 "),n("a",{attrs:{href:"https://github.com/bestmodule/RealSense_ROS",target:"_blank",rel:"noopener noreferrer"}},[e._v("RealSense_ROS repository"),n("OutboundLink")],1),e._v("："),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/bestmodule/RealSense_ROS.git\n")])])])])])]),e._v(" "),n("li",[e._v("参照 "),n("a",{attrs:{href:"https://github.com/bestmodule/RealSense_ROS/tree/master/r200_install",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),n("OutboundLink")],1),e._v(" 的介绍说明。\n"),n("ul",[n("li",[e._v("无论要不要安装如下包都敲击回车："),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("Intel Low Power Subsystem support in ACPI mode (MFD_INTEL_LPSS_ACPI) [N/m/y/?] (NEW)\n\n\n")])])])])])])]),e._v(" "),n("p",[e._v("Intel Low Power Subsystem support in PCI mode (MFD_INTEL_LPSS_PCI) [N/m/y/?] (NEW)")]),e._v(" "),n("p",[e._v("Dell Airplane Mode Switch driver (DELL_RBTN) [N/m/y/?] (NEW) (NEW)\n"),n("code"),e._v("\nIntel Low Power Subsystem support in PCI mode (MFD_INTEL_LPSS_PCI) [N/m/y/?] (NEW)")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("```\n```\nDell Airplane Mode Switch driver (DELL_RBTN) [N/m/y/?] (NEW)\n```\n")])])]),n("ul",[n("li",[n("p",[e._v("The following error message that can appear at the end of the installation process should not lead to a malfunction of the driver: "),n("code",[e._v("rmmod: ERROR: Module uvcvideo is not currently loaded")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("rmmod: ERROR: Module uvcvideo is not currently loaded\n")])])])]),e._v(" "),n("li",[n("p",[e._v("安装结束后，重启虚拟机。")])]),e._v(" "),n("li",[n("p",[e._v("测试摄像头驱动：")]),e._v(" "),n("ul",[n("li",[e._v("使用 USB 线缆，一头连接电脑的 USB3 接口，另一端连接　Intel RealSense 相机。")]),e._v(" "),n("li",[e._v("Click on Devices->USB-> Intel Corp Intel RealSense 3D Camera R200 in the menu bar of the Virtual Box, in order to forward the camera USB connection to the Virtual Machine.")]),e._v(" "),n("li",[e._v("执行文件 [unpacked folder]/bin/dsreadcamerainfo：\n"),n("ul",[n("li",[e._v("如果出现以下错误消息，请拔下相机 (从计算机物理上拔下 usb 电缆)。 If the following error message appears, unplug the camera (physically unplug USB cable from the computer). Plug it in again + Click on Devices->USB-> Intel Corp Intel RealSense 3D Camera R200 in the menu bar of the Virtual Box again and execute again the file [unpacked folder]/Bin/DSReadCameraInfo. "),n("code",[e._v("DSAPI call failed at ReadCameraInfo.cpp:134!")]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("DSAPI call failed at ReadCameraInfo.cpp:134!\n")])])])]),e._v(" "),n("li",[e._v("如果相机驱动程序工作正常并识别 Intel RealSense R200，您应该看到有关 Intel RealSense R200 相机头的特定信息。")])])])])]),e._v(" "),n("li",[n("p",[e._v("ROS 节点的安装和测试：")]),e._v(" "),n("ul",[n("li",[e._v("按照 "),n("a",{attrs:{href:"https://github.com/bestmodule/RealSense_ROS/blob/master/realsense_dist/2.3/doc/RealSense-ROS-R200-nodelet.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),n("OutboundLink")],1),e._v(' 提供的 "安装" 部分中的安装说明安装 ROS 节点。')]),e._v(" "),n("li",[e._v("按照 "),n("a",{attrs:{href:"https://github.com/bestmodule/RealSense_ROS/blob/master/realsense_dist/2.3/doc/RealSense-ROS-R200-nodelet.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),n("OutboundLink")],1),e._v(' 提供的 "Running the R200 nodelet" 部分中的说明，与 Intel RealSense R200 相机头一起测试 ROS 节点。\n'),n("ul",[n("li",[e._v("如果一切正常，Intel RealSense R200 相机中的不同数据流将作为 ROS 主题发布。")])])])])])])])}),[],!1,null,null,null);t.default=l.exports},432:function(e,t,a){e.exports=a.p+"assets/img/intel_realsense.6e908069.png"}}]);