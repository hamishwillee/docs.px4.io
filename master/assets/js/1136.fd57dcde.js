(window.webpackJsonp=window.webpackJsonp||[]).push([[1136],{2370:function(t,v,e){"use strict";e.r(v);var _=e(18),n=Object(_.a)({},(function(){var t=this,v=t.$createElement,e=t._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"windows-虚拟机托管的工具链"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#windows-虚拟机托管的工具链"}},[t._v("#")]),t._v(" Windows 虚拟机托管的工具链")]),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("Note")]),t._v(" "),e("RouterLink",{attrs:{to:"/zh/setup/dev_env_windows_cygwin.html"}},[t._v("Windows Cygwin 工具链")]),t._v(" 是 Windows 平台唯一获得官方支持的开发环境。")],1)]),t._v(" "),e("p",[t._v("Windows 平台开发者可以在运行Linux的虚拟机中运行 PX4 工具链。 设置好虚拟机后，在虚拟机内进行 PX4 开发环境的安装、设置的流程与原生 Linux 电脑没有任何差别。")]),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("Tip")]),t._v(" 尽量为虚拟机分配尽更多的 cpu 内核和内存资源。")])]),t._v(" "),e("p",[t._v("虽然使用虚拟机进行开发环境的安装、测试非常简单，但用户们仍应知晓：")]),t._v(" "),e("ol",[e("li",[t._v("固件的编译速度比原生 Linux 要更慢一些。")]),t._v(" "),e("li",[t._v("JMAVSim 的帧率比原生 Linux 要低得多。 虚拟机运行资源不足可能导致特定情况下无人机坠毁。")]),t._v(" "),e("li",[t._v("可以安装 Gazebo 和 ROS，但运行速度非常慢。")])]),t._v(" "),e("h2",{attrs:{id:"操作说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#操作说明"}},[t._v("#")]),t._v(" 操作说明")]),t._v(" "),e("p",[t._v("有很多种方法在你的系统上设定一个可以运行 PX4 开发环境的虚拟机。 本指南将引导你使用 VMWare 完成虚拟机的设置。 VMWare 虚拟机的表现于基本使用 (构建固件) 是可以接受的，但对于运行 ROS 和 Gazebo 来说则不可接受。")]),t._v(" "),e("ol",[e("li",[t._v("下载 "),e("a",{attrs:{href:"https://www.vmware.com/products/workstation-player/workstation-player-evaluation.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("VMWare Player Freeware"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("li",[t._v("将其安装在 Windows 系统上。")]),t._v(" "),e("li",[t._v("下载所需版本的 Ubuntu Desktop ISO 镜像文件</0>。 (参阅 "),e("RouterLink",{attrs:{to:"/zh/setup/dev_env_linux.html"}},[t._v("Linux Instructions Page")]),t._v(" 以获取推荐的 Ubuntu 版本)。")],1),t._v(" "),e("li",[t._v("打开 "),e("em",[t._v("VMWare Player")]),t._v(" 并选择创建新虚拟机的选项。")]),t._v(" "),e("li",[t._v("在 VM 虚拟机创建向导中选择下载好的 Ubuntu ISO 镜像作为虚拟机操作系统的安装介质， VM 将自动检测你要使用的操作系统。")]),t._v(" "),e("li",[t._v("还是在虚拟机创建向导中，设定好所有你要给虚拟机分配的运行资源。 在你的 Windows 主机的允许范围内给你的虚拟机分配尽可能多的内存和 CPU 资源。")]),t._v(" "),e("li",[t._v("虚拟机创建向导结束后开启你的虚拟机，然后按照安装指南进行 Ubuntu 系统的安装。 请记住，所有的设置仅在你托管的操作系统使用，因此你可以禁用所有的屏幕保护程序和安全选项，并不会增加被网络攻击的风险。")]),t._v(" "),e("li",[t._v("新虚拟机进入操作系统后, 请确保在系统中安装 "),e("em",[t._v("VMWare tools drivers and tools extension")]),t._v(" 。 该工具包可以提高虚拟机使用的性能和可用性:\n"),e("ul",[e("li",[t._v("显著增强的图形性能")]),t._v(" "),e("li",[t._v("适当的硬件设备的支持，如 USB 端口分配（对上传固件很重要）、正确的鼠标滚动、声音支持等")]),t._v(" "),e("li",[t._v("从系统显示分辨率适应窗口大小")]),t._v(" "),e("li",[t._v("主系统剪贴板共享")]),t._v(" "),e("li",[t._v("与主系统进行文件共享")])])]),t._v(" "),e("li",[t._v("继续进行 "),e("RouterLink",{attrs:{to:"/zh/setup/dev_env_linux.html"}},[t._v("PX4 environment setup for Linux")])],1)])])}),[],!1,null,null,null);v.default=n.exports}}]);