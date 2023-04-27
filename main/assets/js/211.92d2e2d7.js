(window.webpackJsonp=window.webpackJsonp||[]).push([[211],{3207:function(t,e,o){"use strict";o.r(e);var a=o(19),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"加载固件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#加载固件"}},[t._v("#")]),t._v(" 加载固件")]),t._v(" "),a("p",[a("em",[t._v("QGroundControl")]),t._v(" "),a("strong",[t._v("desktop")]),t._v(" versions can be used to install PX4 firmware onto "),a("RouterLink",{attrs:{to:"/zh/getting_started/flight_controller_selection.html"}},[t._v("Pixhawk-series")]),t._v(" flight-controller boards.")],1),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[a("strong",[t._v("Before you start installing Firmware")]),t._v(" all USB connections to the vehicle must be "),a("em",[t._v("disconnected")]),t._v(" (both direct or through a telemetry radio). The vehicle must "),a("em",[t._v("not be")]),t._v(" powered by a battery.")])]),t._v(" "),a("h2",{attrs:{id:"安装稳定的px4版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装稳定的px4版本"}},[t._v("#")]),t._v(" 安装稳定的PX4版本")]),t._v(" "),a("p",[t._v("Generally you should use the most recent "),a("em",[t._v("released")]),t._v(" version of PX4, in order to benefit from bug fixes and get the latest and greatest features.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("This is the version that is installed by default.")])]),t._v(" "),a("p",[t._v("To install PX4:")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Start "),a("em",[t._v("QGroundControl")]),t._v(" and connect the vehicle.")])]),t._v(" "),a("li",[a("p",[t._v("Select "),a("strong",[t._v('"Q" icon > Vehicle Setup > Firmware')]),t._v(" (sidebar) to open "),a("em",[t._v("Firmware Setup")]),t._v(".")]),t._v(" "),a("p",[a("img",{attrs:{src:o(679),alt:"Firmware disconnected"}})])]),t._v(" "),a("li",[a("p",[t._v("Connect the flight controller directly to your computer via USB.")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")])])])]),t._v(" "),a("p",[t._v("Connect directly to a powered USB port on your machine (do not connect through a USB hub).\n:::")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Select the "),a("strong",[t._v("PX4 Flight Stack X.x.x Release")]),t._v(" option to install the latest stable version of PX4 "),a("em",[t._v("for your hardware")]),t._v(" (autodetected).")]),t._v(" "),a("p",[a("img",{attrs:{src:o(680),alt:"Install PX4 default"}})])]),t._v(" "),a("li",[a("p",[t._v("Click the "),a("strong",[t._v("OK")]),t._v(" button to start the update.")]),t._v(" "),a("p",[t._v("The firmware will then proceed through a number of upgrade steps (downloading new firmware, erasing old firmware etc.). Each step is printed to the screen and overall progress is displayed on a progress bar.")]),t._v(" "),a("p",[a("img",{attrs:{src:o(681),alt:"Firmware upgrade complete"}})]),t._v(" "),a("p",[t._v("Once the firmware has completed loading, the device/vehicle will reboot and reconnect.")])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("If "),a("em",[t._v("QGroundControl")]),t._v(" installs the FMUv2 target (see console during installation) and you have a newer board, you may need to "),a("a",{attrs:{href:"#bootloader"}},[t._v("update the bootloader")]),t._v(" in order to access all the memory on your flight controller.")])]),t._v(" "),a("p",[t._v("Next you will need to specify the "),a("RouterLink",{attrs:{to:"/zh/config/airframe.html"}},[t._v("vehicle airframe")]),t._v(" (and then sensors, radio, etc.)")],1),t._v(" "),a("p",[a("span",{attrs:{id:"custom"}})]),t._v(" "),a("h2",{attrs:{id:"安装px4-master-beta或自定义固件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装px4-master-beta或自定义固件"}},[t._v("#")]),t._v(" 安装PX4 Master, Beta或自定义固件")]),t._v(" "),a("p",[t._v("To install a different version of PX4:")]),t._v(" "),a("ol",[a("li",[t._v("Connect the vehicle as above, and select "),a("strong",[t._v("PX4 Flight Stack vX.x.x Stable Release")]),t._v(" "),a("img",{attrs:{src:o(682),alt:"安装 PX4 版本"}})]),t._v(" "),a("li",[t._v("Check "),a("strong",[t._v("Advanced settings")]),t._v(" and select the version from the dropdown list:\n"),a("ul",[a("li",[a("strong",[t._v("Standard Version (stable):")]),t._v(" The default version (i.e. no need to use advanced settings to install this!)")]),t._v(" "),a("li",[a("strong",[t._v("Beta Testing (beta):")]),t._v(" A beta/candidate release. 只有当新版本准备完毕时才可用。")]),t._v(" "),a("li",[a("strong",[t._v("Developer Build (master):")]),t._v(" The latest build of PX4/PX4-Autopilot.")]),t._v(" "),a("li",[a("strong",[t._v("Custom Firmware file...:")]),t._v(" A custom firmware file (e.g. that you have built locally). 如果选择 Custom firmware file ，您需要在下一步中从文件系统中选择自定义固件。")])])])]),t._v(" "),a("p",[t._v("Firmware update then continues as before.")]),t._v(" "),a("p",[a("a",{attrs:{id:"bootloader"}})]),t._v(" "),a("h2",{attrs:{id:"fmuv2-bootloader-更新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fmuv2-bootloader-更新"}},[t._v("#")]),t._v(" FMUv2 Bootloader 更新")]),t._v(" "),a("p",[t._v("If "),a("em",[t._v("QGroundControl")]),t._v(" installs the FMUv2 target (see console during installation), and you have a newer board, you may need to update the bootloader in order to access all the memory on your flight controller.")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("Early FMUv2 "),a("RouterLink",{attrs:{to:"/zh/flight_controller/pixhawk_series.html#fmu_versions"}},[t._v("Pixhawk-series")]),t._v(" flight controllers had a "),a("RouterLink",{attrs:{to:"/zh/flight_controller/silicon_errata.html#fmuv2-pixhawk-silicon-errata"}},[t._v("hardware issue")]),t._v(" that restricted them to using 1MB of flash memory. The problem is fixed on newer boards, but you may need to update the factory-provided bootloader in order to install FMUv3 Firmware and access all 2MB available memory.")],1)]),t._v(" "),a("p",[t._v("To update the bootloader:")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("插入 SD 卡（启用引导日志记录，便于调试任何可能的问题。）")])]),t._v(" "),a("li",[a("p",[a("RouterLink",{attrs:{to:"/zh/config/firmware.html"}},[t._v("Update the Firmware")]),t._v(" to PX4 "),a("em",[t._v("master")]),t._v(" version (when updating the firmware, check "),a("strong",[t._v("Advanced settings")]),t._v(" and then select "),a("strong",[t._v("Developer Build (master)")]),t._v(" from the dropdown list). "),a("em",[t._v("QGroundControl")]),t._v(" will automatically detect that the hardware supports FMUv2 and install the appropriate Firmware.")],1),t._v(" "),a("p",[a("img",{attrs:{src:o(353),alt:"FMUv2 更新"}})]),t._v(" "),a("p",[t._v("等待飞控重启。")])]),t._v(" "),a("li",[a("p",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameters.html"}},[t._v("找到并启用")]),t._v(" 参数 "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SYS_BL_UPDATE"}},[t._v("SYS_BL_UPDATE")]),t._v("。")],1)]),t._v(" "),a("li",[a("p",[t._v("重新启动（断开/重新连接飞控板）。 Bootloader更新只需要几秒钟即可完成。")])]),t._v(" "),a("li",[a("p",[t._v("然后再重新 "),a("RouterLink",{attrs:{to:"/zh/config/firmware.html"}},[t._v("更新固件")]),t._v(" 。 This time "),a("em",[t._v("QGroundControl")]),t._v(" should autodetect the hardware as FMUv3 and update the Firmware appropriately.")],1),t._v(" "),a("p",[a("img",{attrs:{src:o(683),alt:"FMUv3 更新"}})])])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("If the hardware has the "),a("em",[t._v("Silicon Errata")]),t._v(" it will still be detected as FMUv2 and you will see that FMUv2 was re-installed (in console). In this case you will not be able to install FMUv3 hardware.")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("For more information see "),a("RouterLink",{attrs:{to:"/zh/advanced_config/bootloader_update.html"}},[t._v("Bootloader Update")]),t._v(".")],1)]),t._v(" "),a("h2",{attrs:{id:"更多信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更多信息"}},[t._v("#")]),t._v(" 更多信息")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/SetupView/Firmware.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGroundControl User Guide > Firmware"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://youtu.be/91VGmdSlbo4",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4 Setup Video"),a("OutboundLink")],1),t._v(" (Youtube)")])])])}),[],!1,null,null,null);e.default=r.exports},353:function(t,e,o){t.exports=o.p+"assets/img/bootloader_update.8826d78f.jpg"},679:function(t,e,o){t.exports=o.p+"assets/img/firmware_disconnected.f89315a0.jpg"},680:function(t,e,o){t.exports=o.p+"assets/img/firmware_connected_default_px4.5f8d94f6.jpg"},681:function(t,e,o){t.exports=o.p+"assets/img/firmware_upgrade_complete.2b0acb92.jpg"},682:function(t,e,o){t.exports=o.p+"assets/img/qgc_choose_firmware.25e5ccac.jpg"},683:function(t,e,o){t.exports=o.p+"assets/img/bootloader_fmu_v3_update.ae388788.jpg"}}]);