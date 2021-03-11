(window.webpackJsonp=window.webpackJsonp||[]).push([[639],{2277:function(t,e,a){"use strict";a.r(e);var r=a(18),o=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"betaflight-system-烧写-bootloader"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#betaflight-system-烧写-bootloader"}},[t._v("#")]),t._v(" Betaflight System 烧写 Bootloader")]),t._v(" "),r("p",[t._v("本页介绍了如何将 PX4 bootloader 烧写到使用 Betaflight固件（例如"),r("RouterLink",{attrs:{to:"/zh/flight_controller/omnibus_f4_sd.html"}},[t._v(" OmnibusF4 SD ")]),t._v(" 或 "),r("RouterLink",{attrs:{to:"/zh/flight_controller/kakutef7.html"}},[t._v(" Kakute F7 ")]),t._v("）的飞控板的 flash 中。")],1),t._v(" "),r("p",[t._v("烧写 bootloader 有两种选择：通过* Betaflight 配置器 *（更简单），或从源代码进行构建。")]),t._v(" "),r("p",[r("span",{attrs:{id:"betaflight_configurator"}})]),t._v(" "),r("h3",{attrs:{id:"使用-betaflight-配置器-更新-bootloader"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用-betaflight-配置器-更新-bootloader"}},[t._v("#")]),t._v(" 使用 Betaflight 配置器 更新 Bootloader")]),t._v(" "),r("p",[t._v("要使用 * Betaflight 配置器* 安装 PX4 bootloader，请如下操作：")]),t._v(" "),r("ol",[r("li",[t._v("您应该已经下载了已编译过的 bootloader 二进制文件（二进制文件针对特定的飞控板编译生成）。")]),t._v(" "),r("li",[t._v("下载适用于您平台的"),r("a",{attrs:{href:"https://github.com/betaflight/betaflight-configurator/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v(" Betaflight 配置器"),r("OutboundLink")],1),t._v("。 > "),r("strong",[t._v("提示")]),t._v(" 如果使用 * Chrome * Web 浏览器，一个简单的跨平台替代方法是安装"),r("a",{attrs:{href:"https://chrome.google.com/webstore/detail/betaflight-configurator/kdaghagfopacdngbohiknlhcocjccjao",target:"_blank",rel:"noopener noreferrer"}},[t._v("配置器扩展插件"),r("OutboundLink")],1),t._v("。\n:::")]),t._v(" "),r("li",[t._v("将飞控板连接到 PC 并启动 Betaflight 配置器。")]),t._v(" "),r("li",[t._v("按下 **加载固件[本地] ** 按钮 "),r("img",{attrs:{src:a(443),alt:"Betaflight 配置器-本地固件"}})]),t._v(" "),r("li",[t._v("从文件系统中选择 bootloader 二进制文件，然后烧写进飞控板的 flash。")])]),t._v(" "),r("p",[t._v("现在，您应当可以在飞控板上安装 PX4 固件了。")]),t._v(" "),r("h3",{attrs:{id:"使用源代码进行-bootloader-更新"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用源代码进行-bootloader-更新"}},[t._v("#")]),t._v(" 使用源代码进行 Bootloader 更新")]),t._v(" "),r("h4",{attrs:{id:"下载-bootloader-源"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#下载-bootloader-源"}},[t._v("#")]),t._v(" 下载 Bootloader 源")]),t._v(" "),r("p",[t._v("通过以下命令下载并编译 "),r("a",{attrs:{href:"https://github.com/PX4/Bootloader",target:"_blank",rel:"noopener noreferrer"}},[t._v(" Bootloader "),r("OutboundLink")],1),t._v("：")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[t._v("git clone --recursive  https://github.com/PX4/Bootloader.git\ncd Bootloader\nmake <target> # For example: omnibusf4sd_bl or kakutef7_bl\n")])])]),r("h4",{attrs:{id:"烧写-bootloader-进-flash"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#烧写-bootloader-进-flash"}},[t._v("#")]),t._v(" 烧写 Bootloader 进 flash")]),t._v(" "),r("p",[t._v("您可以使用 Windows 上的"),r("a",{attrs:{href:"http://dfu-util.sourceforge.net/",target:"_blank",rel:"noopener noreferrer"}},[t._v(" dfu-util "),r("OutboundLink")],1),t._v(" 或图形化的"),r("a",{attrs:{href:"https://www.st.com/en/development-tools/stsw-stm32080.html",target:"_blank",rel:"noopener noreferrer"}},[t._v(" dfuse "),r("OutboundLink")],1),t._v(" 工具烧写 PX4 bootloader 进 flash。")]),t._v(" "),r("p",[t._v("无需担心，使用以下任何一种方法进行烧写 flash 即可。")]),t._v(" "),r("p",[t._v("两种方法都要求飞控板处于 DFU 模式。 要进入 DFU 模式，请在将 USB 线连接到计算机的前按下启动按钮。 飞控板上电后可以放开该按钮。")]),t._v(" "),r("h5",{attrs:{id:"进入-dfu-模式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#进入-dfu-模式"}},[t._v("#")]),t._v(" 进入 DFU 模式")]),t._v(" "),r("p",[t._v("Both methods require the board to be in DFU mode. To enter DFU mode, hold the boot button down while connecting the USB cable to your computer. The button can be released after the board is powered up.")]),t._v(" "),r("h5",{attrs:{id:"dfu-util"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dfu-util"}},[t._v("#")]),t._v(" dfu-util")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[t._v("dfu-util -a 0 --dfuse-address 0x08000000 -D  build/<target>/<target>.bin\n")])])]),r("p",[t._v("请在此处查看 dfuse 手册：https://www.st.com/resource/zh/user_manual/cd00155676.pdf")]),t._v(" "),r("h5",{attrs:{id:"dfuse"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dfuse"}},[t._v("#")]),t._v(" dfuse")]),t._v(" "),r("p",[t._v("Flash the "),r("strong",[r("target",[t._v(".bin")])],1),t._v(" file.")]),t._v(" "),r("p",[t._v("Flash the "),r("strong",[r("target",[t._v(".bin")])],1),t._v(" file.")]),t._v(" "),r("p",[r("span",{attrs:{id:"reinstall_betaflight"}})]),t._v(" "),r("h2",{attrs:{id:"重新安装-beatflight-固件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#重新安装-beatflight-固件"}},[t._v("#")]),t._v(" 重新安装 Beatflight 固件")]),t._v(" "),r("p",[t._v("In order to switch back to "),r("em",[t._v("Betaflight")]),t._v(":")]),t._v(" "),r("ul",[r("li",[t._v("备份 PX4 参数，例如通过"),r("a",{attrs:{href:"https://dev.px4.io/master/en/advanced/parameters_and_configurations.html#exporting-and-loading-parameters",target:"_blank",rel:"noopener noreferrer"}},[t._v("导出"),r("OutboundLink")],1),t._v("将它们导出到 SD卡")]),t._v(" "),r("li",[t._v("连接 USB 线时，按住** bootloader **按钮")]),t._v(" "),r("li",[t._v("然后使用* Betaflight-configurator </ 0>像往常一样烧写* Betaflight *固件进其 flash")])])])}),[],!1,null,null,null);e.default=o.exports},443:function(t,e,a){t.exports=a.p+"assets/img/betaflight_configurator.bc7763bb.jpg"}}]);