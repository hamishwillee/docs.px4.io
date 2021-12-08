(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{2814:function(t,e,o){"use strict";o.r(e);var r=o(19),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"加载固件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#加载固件"}},[t._v("#")]),t._v(" 加载固件")]),t._v(" "),r("p",[r("em",[t._v("QGroundControl")]),t._v(" "),r("strong",[t._v("桌面")]),t._v(" 版本可用于在 "),r("RouterLink",{attrs:{to:"/zh/getting_started/flight_controller_selection.html"}},[t._v("Pixhawk-系列")]),t._v(" 飞控板上安装 PX4 固件。")],1),t._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),r("p",[r("strong",[t._v("Before you start installing Firmware")]),t._v(" all USB connections to the vehicle must be "),r("em",[t._v("disconnected")]),t._v(" (both direct or through a telemetry radio). The vehicle must "),r("em",[t._v("not be")]),t._v(" powered by a battery.")])]),t._v(" "),r("h2",{attrs:{id:"安装稳定的px4版本"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安装稳定的px4版本"}},[t._v("#")]),t._v(" 安装稳定的PX4版本")]),t._v(" "),r("p",[t._v("Generally you should use the most recent "),r("em",[t._v("released")]),t._v(" version of PX4, in order to benefit from bug fixes and get the latest and greatest features.")]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),r("p",[t._v("This is the version that is installed by default.")])]),t._v(" "),r("p",[t._v("To install PX4:")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("Start "),r("em",[t._v("QGroundControl")]),t._v(" and connect the vehicle.")])]),t._v(" "),r("li",[r("p",[t._v("Select "),r("strong",[t._v('"Q" icon > Vehicle Setup > Firmware')]),t._v(" (sidebar) to open "),r("em",[t._v("Firmware Setup")]),t._v(".")]),t._v(" "),r("p",[r("img",{attrs:{src:o(631),alt:"Firmware disconnected"}})])]),t._v(" "),r("li",[r("p",[t._v("Connect the flight controller directly to your computer via USB.")])])]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),r("p",[t._v("Connect directly to a powered USB port on your machine (do not connect through a USB hub).")])]),t._v(" "),r("ol",{attrs:{start:"4"}},[r("li",[r("p",[t._v("Select the "),r("strong",[t._v("PX4 Flight Stack X.x.x Release")]),t._v(" option to install the latest stable version of PX4 "),r("em",[t._v("for your hardware")]),t._v(" (autodetected).")]),t._v(" "),r("p",[r("img",{attrs:{src:o(632),alt:"Install PX4 default"}})])]),t._v(" "),r("li",[r("p",[t._v("Click the "),r("strong",[t._v("OK")]),t._v(" button to start the update.")]),t._v(" "),r("p",[t._v("The firmware will then proceed through a number of upgrade steps (downloading new firmware, erasing old firmware etc.). Each step is printed to the screen and overall progress is displayed on a progress bar.")]),t._v(" "),r("p",[r("img",{attrs:{src:o(633),alt:"Firmware upgrade complete"}})]),t._v(" "),r("p",[t._v("Once the firmware has completed loading, the device/vehicle will reboot and reconnect.")])])]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),r("p",[t._v("If "),r("em",[t._v("QGroundControl")]),t._v(" installs the FMUv2 target (see console during installation) and you have a newer board, you may need to "),r("a",{attrs:{href:"#bootloader"}},[t._v("update the bootloader")]),t._v(" in order to access all the memory on your flight controller.")])]),t._v(" "),r("p",[t._v("Next you will need to specify the "),r("RouterLink",{attrs:{to:"/zh/config/airframe.html"}},[t._v("vehicle airframe")]),t._v(" (and then sensors, radio, etc.)")],1),t._v(" "),r("p",[r("span",{attrs:{id:"custom"}})]),t._v(" "),r("h2",{attrs:{id:"安装px4-master-beta或自定义固件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安装px4-master-beta或自定义固件"}},[t._v("#")]),t._v(" 安装PX4 Master, Beta或自定义固件")]),t._v(" "),r("p",[t._v("To install a different version of PX4:")]),t._v(" "),r("ol",[r("li",[t._v("如上所述连接飞行器，并选择 "),r("strong",[t._v("PX4 飞行栈 vX.x.x Stagable Release")]),t._v(" "),r("img",{attrs:{src:o(634),alt:"安装 PX4 版本"}})]),t._v(" "),r("li",[t._v("检查 "),r("strong",[t._v("高级设置")]),t._v(" 并从下拉列表中选择版本：\n"),r("ul",[r("li",[r("strong",[t._v("标准版本 (稳定)")]),t._v(" 默认版本 (即不需要使用高级设置来安装!)")]),t._v(" "),r("li",[r("strong",[t._v("Beta 测试(beta)：")]),t._v(" 测试/候选版本。 只有当新版本准备完毕时才可用。")]),t._v(" "),r("li",[r("strong",[t._v("Developer Build (master):")]),t._v(" The latest build of PX4/PX4-Autopilot.")]),t._v(" "),r("li",[r("strong",[t._v("自定义固件文件..:")]),t._v(" 自定义固件文件 (例如，您在本地构建)。 如果选择 Custom firmware file ，您需要在下一步中从文件系统中选择自定义固件。")])])])]),t._v(" "),r("p",[t._v("Firmware update then continues as before.")]),t._v(" "),r("p",[r("a",{attrs:{id:"bootloader"}})]),t._v(" "),r("h2",{attrs:{id:"fmuv2-bootloader-更新"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#fmuv2-bootloader-更新"}},[t._v("#")]),t._v(" FMUv2 Bootloader 更新")]),t._v(" "),r("p",[t._v("If "),r("em",[t._v("QGroundControl")]),t._v(" installs the FMUv2 target (see console during installation), and you have a newer board, you may need to update the bootloader in order to access all the memory on your flight controller.")]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),r("p",[t._v("Early FMUv2 "),r("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk_series.html#fmu_versions"}},[t._v("Pixhawk-series")]),t._v(" flight controllers had a "),r("RouterLink",{attrs:{to:"/zh/flight_controller/silicon_errata.html#fmuv2-pixhawk-silicon-errata"}},[t._v("hardware issue")]),t._v(" that restricted them to using 1MB of flash memory. The problem is fixed on newer boards, but you may need to update the factory-provided bootloader in order to install FMUv3 Firmware and access all 2MB available memory.")],1)]),t._v(" "),r("p",[t._v("To update the bootloader:")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("插入 SD 卡（启用引导日志记录，便于调试任何可能的问题。）")])]),t._v(" "),r("li",[r("p",[r("RouterLink",{attrs:{to:"/zh/config/firmware.html"}},[t._v("更新固件")]),t._v(" 至PX4 "),r("em",[t._v("master")]),t._v(" 版本（当更新固件时，查看 "),r("strong",[t._v("高级设置")]),t._v(" 并从下拉列表选择"),r("strong",[t._v("Developer Build (master)")]),t._v(" ）。 "),r("em",[t._v("QGroundControl")]),t._v(" 会自动识别到硬件支持 FMUv2，并安装相应的固件。")],1),t._v(" "),r("p",[r("img",{attrs:{src:o(343),alt:"FMUv2 更新"}})]),t._v(" "),r("p",[t._v("等待飞控重启。")])]),t._v(" "),r("li",[r("p",[r("RouterLink",{attrs:{to:"/zh/advanced_config/parameters.html"}},[t._v("找到并启用")]),t._v(" 参数 "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SYS_BL_UPDATE"}},[t._v("SYS_BL_UPDATE")]),t._v("。")],1)]),t._v(" "),r("li",[r("p",[t._v("重新启动（断开/重新连接飞控板）。 Bootloader更新只需要几秒钟即可完成。")])]),t._v(" "),r("li",[r("p",[t._v("然后再重新 "),r("RouterLink",{attrs:{to:"/zh/config/firmware.html"}},[t._v("更新固件")]),t._v(" 。 这一次 "),r("em",[t._v("QGroundControl")]),t._v(" 会自动识别到硬件支持 FMUv3，并相应地安装固件。")],1),t._v(" "),r("p",[r("img",{attrs:{src:o(635),alt:"FMUv3 更新"}})])])]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),r("p",[t._v("If the hardware has the "),r("em",[t._v("Silicon Errata")]),t._v(" it will still be detected as FMUv2 and you will see that FMUv2 was re-installed (in console). In this case you will not be able to install FMUv3 hardware.")])]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),r("p",[t._v("For more information see "),r("RouterLink",{attrs:{to:"/zh/advanced_config/bootloader_update.html"}},[t._v("Bootloader Update")]),t._v(".")],1)]),t._v(" "),r("h2",{attrs:{id:"更多信息"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#更多信息"}},[t._v("#")]),t._v(" 更多信息")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/SetupView/Firmware.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGroundControl User Guide > Firmware"),r("OutboundLink")],1),t._v(".")]),t._v(" "),r("li",[r("a",{attrs:{href:"https://youtu.be/91VGmdSlbo4",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4 Setup Video"),r("OutboundLink")],1),t._v(" (Youtube)")])])])}),[],!1,null,null,null);e.default=a.exports},343:function(t,e,o){t.exports=o.p+"assets/img/bootloader_update.8826d78f.jpg"},631:function(t,e,o){t.exports=o.p+"assets/img/firmware_disconnected.f89315a0.jpg"},632:function(t,e,o){t.exports=o.p+"assets/img/firmware_connected_default_px4.5f8d94f6.jpg"},633:function(t,e,o){t.exports=o.p+"assets/img/firmware_upgrade_complete.2b0acb92.jpg"},634:function(t,e,o){t.exports=o.p+"assets/img/qgc_choose_firmware.25e5ccac.jpg"},635:function(t,e,o){t.exports=o.p+"assets/img/bootloader_fmu_v3_update.ae388788.jpg"}}]);