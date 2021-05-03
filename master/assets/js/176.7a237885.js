(window.webpackJsonp=window.webpackJsonp||[]).push([[176],{1355:function(t,e,o){t.exports=o.p+"assets/img/qgc_choose_firmware.25e5ccac.jpg"},1356:function(t,e,o){t.exports=o.p+"assets/img/bootloader_fmu_v3_update.ae388788.jpg"},2393:function(t,e,o){"use strict";o.r(e);var a=o(18),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"加载固件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#加载固件"}},[t._v("#")]),t._v(" 加载固件")]),t._v(" "),a("p",[a("em",[t._v("QGroundControl")]),t._v(" "),a("strong",[t._v("桌面")]),t._v(" 版本可用于在 "),a("RouterLink",{attrs:{to:"/zh/getting_started/flight_controller_selection.html"}},[t._v("Pixhawk-系列")]),t._v(" 飞控板上安装 PX4 固件。")],1),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[a("strong",[t._v("Before you start installing Firmware")]),t._v(" all USB connections to the vehicle must be "),a("em",[t._v("disconnected")]),t._v(" (both direct or through a telemetry radio). The vehicle must "),a("em",[t._v("not be")]),t._v(" powered by a battery.")])]),t._v(" "),a("h2",{attrs:{id:"安装稳定的px4版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装稳定的px4版本"}},[t._v("#")]),t._v(" 安装稳定的PX4版本")]),t._v(" "),a("p",[t._v("Generally you should use the most recent "),a("em",[t._v("released")]),t._v(" version of PX4, in order to benefit from bug fixes and get the latest and greatest features.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("This is the version that is installed by default.")])]),t._v(" "),a("p",[t._v("To install PX4:")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("首先在顶部工具栏中选择 "),a("strong",[t._v("齿轮")]),t._v(" 图标 ("),a("em",[t._v("Vehicle Setup")]),t._v(") ，然后在侧边栏中选择 "),a("strong",[t._v("Firmware")]),t._v(" 。")]),t._v(" "),a("p",[a("img",{attrs:{src:o(610),alt:"固件断开连接"}})])]),t._v(" "),a("li",[a("p",[t._v("通过 USB 将飞行控制器直接连接到您的计算机。")])])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("Connect directly to a powered USB port on your machine (do not connect through a USB hub).")])]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[a("p",[t._v("选择 "),a("strong",[t._v("PX4 飞行栈 X.x.x Release")]),t._v(" "),a("em",[t._v("为您的硬件")]),t._v("（自动检测）安装最新版的PX4。")]),t._v(" "),a("p",[a("img",{attrs:{src:o(611),alt:"默认安装 PX4"}})])]),t._v(" "),a("li",[a("p",[t._v("点击 "),a("strong",[t._v("OK")]),t._v(" 按钮开始更新固件。")]),t._v(" "),a("p",[t._v("然后，固件将进行一系列升级步骤 (下载新固件，删除旧固件等)。 每个步骤都打印到屏幕上，整个进度显示在进度条上。")]),t._v(" "),a("p",[a("img",{attrs:{src:o(612),alt:"固件升级完成"}})]),t._v(" "),a("p",[t._v("一旦固件完成加载，设备/飞行器将重新启动和重新连接。")])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("If "),a("em",[t._v("QGroundControl")]),t._v(" installs the FMUv2 target (see console during installation) and you have a newer board, you may need to "),a("a",{attrs:{href:"#bootloader"}},[t._v("update the bootloader")]),t._v(" in order to access all the memory on your flight controller.")])]),t._v(" "),a("p",[t._v("Next you will need to specify the "),a("RouterLink",{attrs:{to:"/zh/config/airframe.html"}},[t._v("vehicle airframe")]),t._v(" (and then sensors, radio, etc.)")],1),t._v(" "),a("p",[a("span",{attrs:{id:"custom"}})]),t._v(" "),a("h2",{attrs:{id:"安装px4-master-beta或自定义固件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装px4-master-beta或自定义固件"}},[t._v("#")]),t._v(" 安装PX4 Master, Beta或自定义固件")]),t._v(" "),a("p",[t._v("To install a different version of PX4:")]),t._v(" "),a("ol",[a("li",[t._v("如上所述连接飞行器，并选择 "),a("strong",[t._v("PX4 飞行栈 vX.x.x Stagable Release")]),t._v(" "),a("img",{attrs:{src:o(1355),alt:"安装 PX4 版本"}})]),t._v(" "),a("li",[t._v("检查 "),a("strong",[t._v("高级设置")]),t._v(" 并从下拉列表中选择版本：\n"),a("ul",[a("li",[a("strong",[t._v("标准版本 (稳定)")]),t._v(" 默认版本 (即不需要使用高级设置来安装!)")]),t._v(" "),a("li",[a("strong",[t._v("Beta 测试(beta)：")]),t._v(" 测试/候选版本。 只有当新版本准备完毕时才可用。")]),t._v(" "),a("li",[a("strong",[t._v("Developer Build (master):")]),t._v(" The latest build of PX4/PX4-Autopilot.")]),t._v(" "),a("li",[a("strong",[t._v("自定义固件文件..:")]),t._v(" 自定义固件文件 (例如，您在本地构建)。 如果选择 Custom firmware file ，您需要在下一步中从文件系统中选择自定义固件。")])])])]),t._v(" "),a("p",[t._v("Firmware update then continues as before.")]),t._v(" "),a("p",[a("span",{attrs:{id:"bootloader"}})]),t._v(" "),a("h2",{attrs:{id:"fmuv2-bootloader-更新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fmuv2-bootloader-更新"}},[t._v("#")]),t._v(" FMUv2 Bootloader 更新")]),t._v(" "),a("p",[t._v("If "),a("em",[t._v("QGroundControl")]),t._v(" installs the FMUv2 target (see console during installation), and you have a newer board, you may need to update the bootloader in order to access all the memory on your flight controller.")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("Early FMUv2 "),a("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk_series.html#fmu_versions"}},[t._v("Pixhawk-series")]),t._v(" flight controllers had a "),a("RouterLink",{attrs:{to:"/zh/flight_controller/silicon_errata.html#fmuv2--pixhawk-silicon-errata"}},[t._v("hardware issue")]),t._v(" that restricted them to using 1MB of flash memory. The problem is fixed on newer boards, but you may need to update the factory-provided bootloader in order to install FMUv3 Firmware and access all 2MB available memory.")],1)]),t._v(" "),a("p",[t._v("To update the bootloader:")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("插入 SD 卡（启用引导日志记录，便于调试任何可能的问题。）")])]),t._v(" "),a("li",[a("p",[a("RouterLink",{attrs:{to:"/zh/config/firmware.html"}},[t._v("更新固件")]),t._v(" 至PX4 "),a("em",[t._v("master")]),t._v(" 版本（当更新固件时，查看 "),a("strong",[t._v("高级设置")]),t._v(" 并从下拉列表选择"),a("strong",[t._v("Developer Build (master)")]),t._v(" ）。 "),a("em",[t._v("QGroundControl")]),t._v(" 会自动识别到硬件支持 FMUv2，并安装相应的固件。")],1),t._v(" "),a("p",[a("img",{attrs:{src:o(388),alt:"FMUv2 更新"}})]),t._v(" "),a("p",[t._v("等待飞控重启。")])]),t._v(" "),a("li",[a("p",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameters.html"}},[t._v("找到并启用")]),t._v(" 参数 "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SYS_BL_UPDATE"}},[t._v("SYS_BL_UPDATE")]),t._v("。")],1)]),t._v(" "),a("li",[a("p",[t._v("重新启动（断开/重新连接飞控板）。 Bootloader更新只需要几秒钟即可完成。")])]),t._v(" "),a("li",[a("p",[t._v("然后再重新 "),a("RouterLink",{attrs:{to:"/zh/config/firmware.html"}},[t._v("更新固件")]),t._v(" 。 这一次 "),a("em",[t._v("QGroundControl")]),t._v(" 会自动识别到硬件支持 FMUv3，并相应地安装固件。")],1),t._v(" "),a("p",[a("img",{attrs:{src:o(1356),alt:"FMUv3 更新"}})])])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("If the hardware has the "),a("em",[t._v("Silicon Errata")]),t._v(" it will still be detected as FMUv2 and you will see that FMUv2 was re-installed (in console). In this case you will not be able to install FMUv3 hardware.")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("For more information see "),a("RouterLink",{attrs:{to:"/zh/advanced_config/bootloader_update.html"}},[t._v("Bootloader Update")]),t._v(".")],1)]),t._v(" "),a("h2",{attrs:{id:"更多信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更多信息"}},[t._v("#")]),t._v(" 更多信息")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/SetupView/Firmware.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGroundControl User Guide > Firmware"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://youtu.be/91VGmdSlbo4",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4 Setup Video"),a("OutboundLink")],1),t._v(" (Youtube)")])])])}),[],!1,null,null,null);e.default=r.exports},388:function(t,e,o){t.exports=o.p+"assets/img/bootloader_update.8826d78f.jpg"},610:function(t,e,o){t.exports=o.p+"assets/img/firmware_disconnected.f89315a0.jpg"},611:function(t,e,o){t.exports=o.p+"assets/img/firmware_connected_default_px4.5f8d94f6.jpg"},612:function(t,e,o){t.exports=o.p+"assets/img/firmware_upgrade_complete.2b0acb92.jpg"}}]);