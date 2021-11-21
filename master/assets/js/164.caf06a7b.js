(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{1565:function(t,e,a){"use strict";a.r(e);var o=a(19),r=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"loading-firmware"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#loading-firmware"}},[t._v("#")]),t._v(" Loading Firmware")]),t._v(" "),o("p",[o("em",[t._v("QGroundControl")]),t._v(" "),o("strong",[t._v("desktop")]),t._v(" versions can be used to install PX4 firmware onto "),o("RouterLink",{attrs:{to:"/en/getting_started/flight_controller_selection.html"}},[t._v("Pixhawk-series")]),t._v(" flight-controller boards.")],1),t._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),o("p",[o("strong",[t._v("Before you start installing Firmware")]),t._v(" all USB connections to the vehicle must be "),o("em",[t._v("disconnected")]),t._v(" (both direct or through a telemetry radio).\nThe vehicle must "),o("em",[t._v("not be")]),t._v(" powered by a battery.")])]),t._v(" "),o("h2",{attrs:{id:"install-stable-px4"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#install-stable-px4"}},[t._v("#")]),t._v(" Install Stable PX4")]),t._v(" "),o("p",[t._v("Generally you should use the most recent "),o("em",[t._v("released")]),t._v(" version of PX4, in order to benefit from bug fixes and get the latest and greatest features.")]),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),o("p",[t._v("This is the version that is installed by default.")])]),t._v(" "),o("p",[t._v("To install PX4:")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("Start "),o("em",[t._v("QGroundControl")]),t._v(" and connect the vehicle.")])]),t._v(" "),o("li",[o("p",[t._v("Select "),o("strong",[t._v('"Q" icon > Vehicle Setup > Firmware')]),t._v(" (sidebar) to open "),o("em",[t._v("Firmware Setup")]),t._v(".")]),t._v(" "),o("p",[o("img",{attrs:{src:a(627),alt:"Firmware disconnected"}})])]),t._v(" "),o("li",[o("p",[t._v("Connect the flight controller directly to your computer via USB.")]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("Connect directly to a powered USB port on your machine (do not connect through a USB hub).")])])]),t._v(" "),o("li",[o("p",[t._v("Select the "),o("strong",[t._v("PX4 Flight Stack X.x.x Release")]),t._v(" option to install the latest stable version of PX4 "),o("em",[t._v("for your hardware")]),t._v(" (autodetected).")]),t._v(" "),o("p",[o("img",{attrs:{src:a(628),alt:"Install PX4 default"}})])]),t._v(" "),o("li",[o("p",[t._v("Click the "),o("strong",[t._v("OK")]),t._v(" button to start the update.")]),t._v(" "),o("p",[t._v("The firmware will then proceed through a number of upgrade steps (downloading new firmware, erasing old firmware etc.).\nEach step is printed to the screen and overall progress is displayed on a progress bar.")]),t._v(" "),o("p",[o("img",{attrs:{src:a(629),alt:"Firmware upgrade complete"}})]),t._v(" "),o("p",[t._v("Once the firmware has completed loading, the device/vehicle will reboot and reconnect.")]),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),o("p",[t._v("If "),o("em",[t._v("QGroundControl")]),t._v(" installs the FMUv2 target (see console during installation) and you have a newer board, you may need to "),o("a",{attrs:{href:"#bootloader"}},[t._v("update the bootloader")]),t._v(" in order to access all the memory on your flight controller.")])])])]),t._v(" "),o("p",[t._v("Next you will need to specify the "),o("RouterLink",{attrs:{to:"/en/config/airframe.html"}},[t._v("vehicle airframe")]),t._v(" (and then sensors, radio, etc.)")],1),t._v(" "),o("p",[o("span",{attrs:{id:"custom"}})]),t._v(" "),o("h2",{attrs:{id:"installing-px4-master-beta-or-custom-firmware"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#installing-px4-master-beta-or-custom-firmware"}},[t._v("#")]),t._v(" Installing PX4 Master, Beta or Custom Firmware")]),t._v(" "),o("p",[t._v("To install a different version of PX4:")]),t._v(" "),o("ol",[o("li",[t._v("Connect the vehicle as above, and select "),o("strong",[t._v("PX4 Flight Stack vX.x.x Stable Release")]),t._v(" "),o("img",{attrs:{src:a(630),alt:"Install PX4 version"}})]),t._v(" "),o("li",[t._v("Check "),o("strong",[t._v("Advanced settings")]),t._v(" and select the version from the dropdown list:\n"),o("ul",[o("li",[o("strong",[t._v("Standard Version (stable):")]),t._v(" The default version (i.e. no need to use advanced settings to install this!)")]),t._v(" "),o("li",[o("strong",[t._v("Beta Testing (beta):")]),t._v(" A beta/candidate release.\nOnly available when a new release is being prepared.")]),t._v(" "),o("li",[o("strong",[t._v("Developer Build (master):")]),t._v(" The latest build of PX4/PX4-Autopilot.")]),t._v(" "),o("li",[o("strong",[t._v("Custom Firmware file...:")]),t._v(" A custom firmware file (e.g. that you have built locally).\nIf you select this you will have to choose the custom firmware from the file system in the next step.")])])])]),t._v(" "),o("p",[t._v("Firmware update then continues as before.")]),t._v(" "),o("p",[o("a",{attrs:{id:"bootloader"}})]),t._v(" "),o("h2",{attrs:{id:"fmuv2-bootloader-update"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#fmuv2-bootloader-update"}},[t._v("#")]),t._v(" FMUv2 Bootloader Update")]),t._v(" "),o("p",[t._v("If "),o("em",[t._v("QGroundControl")]),t._v(" installs the FMUv2 target (see console during installation), and you have a newer board, you may need to update the bootloader in order to access all the memory on your flight controller.")]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("Early FMUv2 "),o("RouterLink",{attrs:{to:"/en/flight_controller/pixhawk_series.html#fmu_versions"}},[t._v("Pixhawk-series")]),t._v(" flight controllers had a "),o("RouterLink",{attrs:{to:"/en/flight_controller/silicon_errata.html#fmuv2-pixhawk-silicon-errata"}},[t._v("hardware issue")]),t._v(" that restricted them to using 1MB of flash memory.\nThe problem is fixed on newer boards, but you may need to update the factory-provided bootloader in order to install FMUv3 Firmware and access all 2MB available memory.")],1)]),t._v(" "),o("p",[t._v("To update the bootloader:")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("Insert an SD card (enables boot logging to debug any problems).")])]),t._v(" "),o("li",[o("p",[o("RouterLink",{attrs:{to:"/en/config/firmware.html"}},[t._v("Update the Firmware")]),t._v(" to PX4 "),o("em",[t._v("master")]),t._v(" version (when updating the firmware, check "),o("strong",[t._v("Advanced settings")]),t._v(" and then select "),o("strong",[t._v("Developer Build (master)")]),t._v(" from the dropdown list).\n"),o("em",[t._v("QGroundControl")]),t._v(" will automatically detect that the hardware supports FMUv2 and install the appropriate Firmware.")],1),t._v(" "),o("p",[o("img",{attrs:{src:a(343),alt:"FMUv2 update"}})]),t._v(" "),o("p",[t._v("Wait for the vehicle to reboot.")])]),t._v(" "),o("li",[o("p",[o("RouterLink",{attrs:{to:"/en/advanced_config/parameters.html"}},[t._v("Find and enable")]),t._v(" the parameter "),o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#SYS_BL_UPDATE"}},[t._v("SYS_BL_UPDATE")]),t._v(".")],1)]),t._v(" "),o("li",[o("p",[t._v("Reboot (disconnect/reconnect the board).\nThe bootloader update will only take a few seconds.")])]),t._v(" "),o("li",[o("p",[t._v("Then "),o("RouterLink",{attrs:{to:"/en/config/firmware.html"}},[t._v("Update the Firmware")]),t._v(" again.\nThis time "),o("em",[t._v("QGroundControl")]),t._v(" should autodetect the hardware as FMUv3 and update the Firmware appropriately.")],1),t._v(" "),o("p",[o("img",{attrs:{src:a(631),alt:"FMUv3 update"}})]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("If the hardware has the "),o("em",[t._v("Silicon Errata")]),t._v(" it will still be detected as FMUv2 and you will see that FMUv2 was re-installed (in console).\nIn this case you will not be able to install FMUv3 hardware.")])])])]),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),o("p",[t._v("For more information see "),o("RouterLink",{attrs:{to:"/en/advanced_config/bootloader_update.html"}},[t._v("Bootloader Update")]),t._v(".")],1)]),t._v(" "),o("h2",{attrs:{id:"further-information"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#further-information"}},[t._v("#")]),t._v(" Further Information")]),t._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/SetupView/Firmware.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGroundControl User Guide > Firmware"),o("OutboundLink")],1),t._v(".")]),t._v(" "),o("li",[o("a",{attrs:{href:"https://youtu.be/91VGmdSlbo4",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4 Setup Video"),o("OutboundLink")],1),t._v(" (Youtube)")])])])}),[],!1,null,null,null);e.default=r.exports},343:function(t,e,a){t.exports=a.p+"assets/img/bootloader_update.8826d78f.jpg"},627:function(t,e,a){t.exports=a.p+"assets/img/firmware_disconnected.f89315a0.jpg"},628:function(t,e,a){t.exports=a.p+"assets/img/firmware_connected_default_px4.5f8d94f6.jpg"},629:function(t,e,a){t.exports=a.p+"assets/img/firmware_upgrade_complete.2b0acb92.jpg"},630:function(t,e,a){t.exports=a.p+"assets/img/qgc_choose_firmware.25e5ccac.jpg"},631:function(t,e,a){t.exports=a.p+"assets/img/bootloader_fmu_v3_update.ae388788.jpg"}}]);