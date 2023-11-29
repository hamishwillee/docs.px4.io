(window.webpackJsonp=window.webpackJsonp||[]).push([[252],{3356:function(t,e,o){"use strict";o.r(e);var a=o(19),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"加载固件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#加载固件"}},[t._v("#")]),t._v(" 加载固件")]),t._v(" "),a("p",[a("em",[t._v("QGroundControl")]),t._v(" "),a("strong",[t._v("desktop")]),t._v(" versions can be used to install PX4 firmware onto "),a("RouterLink",{attrs:{to:"/zh/getting_started/flight_controller_selection.html"}},[t._v("Pixhawk-series")]),t._v(" flight-controller boards.")],1),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[a("strong",[t._v("Before you start installing Firmware")]),t._v(" all USB connections to the vehicle must be "),a("em",[t._v("disconnected")]),t._v(" (both direct or through a telemetry radio). The vehicle must "),a("em",[t._v("not be")]),t._v(" powered by a battery.")])]),t._v(" "),a("h2",{attrs:{id:"安装稳定的px4版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装稳定的px4版本"}},[t._v("#")]),t._v(" 安装稳定的PX4版本")]),t._v(" "),a("p",[t._v("Generally you should use the most recent "),a("em",[t._v("released")]),t._v(" version of PX4, in order to benefit from bug fixes and get the latest and greatest features.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("This is the version that is installed by default.")])]),t._v(" "),a("p",[t._v("To install PX4:")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Start "),a("em",[t._v("QGroundControl")]),t._v(" and connect the vehicle.")])]),t._v(" "),a("li",[a("p",[t._v("Select "),a("strong",[t._v('"Q" icon > Vehicle Setup > Firmware')]),t._v(" (sidebar) to open "),a("em",[t._v("Firmware Setup")]),t._v(".")]),t._v(" "),a("p",[a("img",{attrs:{src:o(651),alt:"Firmware disconnected"}})])]),t._v(" "),a("li",[a("p",[t._v("Connect the flight controller directly to your computer via USB.")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")])])])]),t._v(" "),a("p",[t._v("Connect directly to a powered USB port on your machine (do not connect through a USB hub).\n:::")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Select the "),a("strong",[t._v("PX4 Pro Stable Release vX.x.x")]),t._v(" option to install the latest stable version of PX4 "),a("em",[t._v("for your flight controller")]),t._v(" (autodetected).")]),t._v(" "),a("p",[a("img",{attrs:{src:o(652),alt:"Install PX4 default"}})])]),t._v(" "),a("li",[a("p",[t._v("单击 "),a("strong",[t._v("OK")]),t._v(" 按钮开始更新。")]),t._v(" "),a("p",[t._v("The firmware will then proceed through a number of upgrade steps (downloading new firmware, erasing old firmware etc.). Each step is printed to the screen and overall progress is displayed on a progress bar.")]),t._v(" "),a("p",[a("img",{attrs:{src:o(653),alt:"Firmware upgrade complete"}})]),t._v(" "),a("p",[t._v("Once the firmware has completed loading, the device/vehicle will reboot and reconnect.")])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("If "),a("em",[t._v("QGroundControl")]),t._v(" installs the FMUv2 target (see console during installation) and you have a newer board, you may need to "),a("a",{attrs:{href:"#bootloader"}},[t._v("update the bootloader")]),t._v(" in order to access all the memory on your flight controller.")])]),t._v(" "),a("p",[t._v("Next you will need to specify the "),a("RouterLink",{attrs:{to:"/zh/config/airframe.html"}},[t._v("vehicle airframe")]),t._v(" (and then sensors, radio, etc.)")],1),t._v(" "),a("p",[a("a",{attrs:{id:"custom"}})]),t._v(" "),a("h2",{attrs:{id:"安装px4-main-beta或自定义固件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装px4-main-beta或自定义固件"}},[t._v("#")]),t._v(" 安装PX4 Main, Beta或自定义固件")]),t._v(" "),a("p",[t._v("To install a different version of PX4:")]),t._v(" "),a("ol",[a("li",[t._v("如上所述连接飞行器，并选择 "),a("strong",[t._v("PX4 飞行栈 vX.x.x Stagable Release")]),t._v(". "),a("img",{attrs:{src:o(654),alt:"安装 PX4 版本"}})]),t._v(" "),a("li",[t._v("检查 "),a("strong",[t._v("高级设置")]),t._v(" 并从下拉列表中选择版本：\n"),a("ul",[a("li",[a("strong",[t._v("标准版本 (稳定):")]),t._v(" 默认版本 (即无需使用高级设置来安装！)")]),t._v(" "),a("li",[a("strong",[t._v("Beta 测试(beta)：")]),t._v(" 测试/候选版本。 只有当新版本准备完毕时才可用。")]),t._v(" "),a("li",[a("strong",[t._v("Developer Build (master):")]),t._v(" PX4/PX4-Autopilot "),a("em",[t._v("主分支")]),t._v(" 最新版本。")]),t._v(" "),a("li",[a("strong",[t._v("自定义固件文件...:")]),t._v(" 自定义固件文件 (例如你已在本地构建的)。 如果选择 Custom firmware file ，您需要在下一步中从文件系统中选择自定义固件。")])])])]),t._v(" "),a("p",[t._v("Firmware update then continues as before.")]),t._v(" "),a("p",[a("a",{attrs:{id:"bootloader"}})]),t._v(" "),a("h2",{attrs:{id:"bootloader-更新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bootloader-更新"}},[t._v("#")]),t._v(" Bootloader 更新")]),t._v(" "),a("p",[t._v("硬件通常预先安装匹配版本的引导程序。")]),t._v(" "),a("p",[t._v("您可能需要更新的是安装较新的 Pixhawk 板FMUv2 固件 。 If "),a("em",[t._v("QGroundControl")]),t._v(" installs the FMUv2 target (see console during installation), and you have a newer board, you may need to update the bootloader in order to access all the memory on your flight controller.")]),t._v(" "),a("p",[a("img",{attrs:{src:o(354),alt:"FMUv2 更新"}})]),t._v(" "),a("p",[t._v("您可以按照 "),a("RouterLink",{attrs:{to:"/zh/advanced_config/bootloader_update.html#fmuv2-bootloader-update"}},[t._v("引导加载器更新 > FMUv2 启动加载器更新")])],1),t._v(" "),a("h2",{attrs:{id:"更多信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更多信息"}},[t._v("#")]),t._v(" 更多信息")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/SetupView/Firmware.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGroundControl 用户指南>固件"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://youtu.be/91VGmdSlbo4",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4 Setup Video"),a("OutboundLink")],1),t._v(" (Youtube)")])])])}),[],!1,null,null,null);e.default=r.exports},354:function(t,e,o){t.exports=o.p+"assets/img/bootloader_update.bd69dc9b.jpg"},651:function(t,e,o){t.exports=o.p+"assets/img/firmware_disconnected.fa0ec328.png"},652:function(t,e,o){t.exports=o.p+"assets/img/firmware_connected_default_px4.ea1176db.png"},653:function(t,e,o){t.exports=o.p+"assets/img/firmware_upgrade_complete.8a776fe7.png"},654:function(t,e){t.exports="data:image/png;base64,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"}}]);