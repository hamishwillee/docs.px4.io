(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{1332:function(e,t,o){e.exports=o.p+"assets/img/qgc_choose_firmware.25e5ccac.jpg"},1333:function(e,t,o){e.exports=o.p+"assets/img/bootloader_fmu_v3_update.ae388788.jpg"},1485:function(e,t,o){"use strict";o.r(t);var r=o(18),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"loading-firmware"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#loading-firmware"}},[e._v("#")]),e._v(" Loading Firmware")]),e._v(" "),r("p",[r("em",[e._v("QGroundControl")]),e._v(" "),r("strong",[e._v("desktop")]),e._v(" versions can be used to install PX4 firmware onto "),r("RouterLink",{attrs:{to:"/en/getting_started/flight_controller_selection.html"}},[e._v("Pixhawk-series")]),e._v(" flight-controller boards.")],1),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Caution")]),e._v(" "),r("strong",[e._v("Before you start installing Firmware")]),e._v(" all USB connections to the vehicle must be "),r("em",[e._v("disconnected")]),e._v(" (both direct or through a telemetry radio).\nThe vehicle must "),r("em",[e._v("not be")]),e._v(" powered by a battery.")])]),e._v(" "),r("h2",{attrs:{id:"install-stable-px4"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#install-stable-px4"}},[e._v("#")]),e._v(" Install Stable PX4")]),e._v(" "),r("p",[e._v("Generally you should use the most recent "),r("em",[e._v("released")]),e._v(" version of PX4, in order to benefit from bug fixes and get the latest and greatest features.")]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Tip")]),e._v(" This is the version that is installed by default.")])]),e._v(" "),r("p",[e._v("To install PX4:")]),e._v(" "),r("ol",[r("li",[e._v("First select the "),r("strong",[e._v("Gear")]),e._v(" icon ("),r("em",[e._v("Vehicle Setup")]),e._v(") in the top toolbar and then "),r("strong",[e._v("Firmware")]),e._v(" in the sidebar.")])]),e._v(" "),r("p",[r("img",{attrs:{src:o(608),alt:"Firmware disconnected"}})]),e._v(" "),r("ol",[r("li",[r("p",[e._v("Connect the flight controller directly to your computer via USB.")]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Note")]),e._v(" Connect directly to a powered USB port on your machine (do not connect through a USB hub).")])])]),e._v(" "),r("li",[r("p",[e._v("Select the "),r("strong",[e._v("PX4 Flight Stack X.x.x Release")]),e._v(" option to install the latest stable version of PX4 "),r("em",[e._v("for your hardware")]),e._v(" (autodetected).")]),e._v(" "),r("p",[r("img",{attrs:{src:o(609),alt:"Install PX4 default"}})])]),e._v(" "),r("li",[r("p",[e._v("Click the "),r("strong",[e._v("OK")]),e._v(" button to start the update.")]),e._v(" "),r("p",[e._v("The firmware will then proceed through a number of upgrade steps (downloading new firmware, erasing old firmware etc.).\nEach step is printed to the screen and overall progress is displayed on a progress bar.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(610),alt:"Firmware upgrade complete"}})]),e._v(" "),r("p",[e._v("Once the firmware has completed loading, the device/vehicle will reboot and reconnect.")]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Tip")]),e._v(" If "),r("em",[e._v("QGroundControl")]),e._v(" installs the FMUv2 target (see console during installation) and you have a newer board, you may need to "),r("a",{attrs:{href:"#bootloader"}},[e._v("update the bootloader")]),e._v(" in order to access all the memory on your flight controller.")])])])]),e._v(" "),r("p",[e._v("Next you will need to specify the "),r("RouterLink",{attrs:{to:"/en/config/airframe.html"}},[e._v("vehicle airframe")]),e._v(" (and then sensors, radio, etc.)")],1),e._v(" "),r("p",[r("span",{attrs:{id:"custom"}})]),e._v(" "),r("h2",{attrs:{id:"installing-px4-master-beta-or-custom-firmware"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#installing-px4-master-beta-or-custom-firmware"}},[e._v("#")]),e._v(" Installing PX4 Master, Beta or Custom Firmware")]),e._v(" "),r("p",[e._v("To install a different version of PX4:")]),e._v(" "),r("ol",[r("li",[e._v("Connect the vehicle as above, and select "),r("strong",[e._v("PX4 Flight Stack vX.x.x Stable Release")]),e._v(" "),r("img",{attrs:{src:o(1332),alt:"Install PX4 version"}})]),e._v(" "),r("li",[e._v("Check "),r("strong",[e._v("Advanced settings")]),e._v(" and select the version from the dropdown list:\n"),r("ul",[r("li",[r("strong",[e._v("Standard Version (stable):")]),e._v(" The default version (i.e. no need to use advanced settings to install this!)")]),e._v(" "),r("li",[r("strong",[e._v("Beta Testing (beta):")]),e._v(" A beta/candidate release.\nOnly available when a new release is being prepared.")]),e._v(" "),r("li",[r("strong",[e._v("Developer Build (master):")]),e._v(" The latest build of PX4/PX4-Autopilot.")]),e._v(" "),r("li",[r("strong",[e._v("Custom Firmware file...:")]),e._v(" A custom firmware file (e.g. that you have built locally).\nIf you select this you will have to choose the custom firmware from the file system in the next step.")])])])]),e._v(" "),r("p",[e._v("Firmware update then continues as before.")]),e._v(" "),r("p",[r("span",{attrs:{id:"bootloader"}})]),e._v(" "),r("h2",{attrs:{id:"fmuv2-bootloader-update"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#fmuv2-bootloader-update"}},[e._v("#")]),e._v(" FMUv2 Bootloader Update")]),e._v(" "),r("p",[e._v("If "),r("em",[e._v("QGroundControl")]),e._v(" installs the FMUv2 target (see console during installation), and you have a newer board, you may need to update the bootloader in order to access all the memory on your flight controller.")]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Note")]),e._v(" Early FMUv2 "),r("RouterLink",{attrs:{to:"/en/flight_controller/pixhawk_series.html#fmu_versions"}},[e._v("Pixhawk-series")]),e._v(" flight controllers had a "),r("RouterLink",{attrs:{to:"/en/flight_controller/silicon_errata.html#fmuv2--pixhawk-silicon-errata"}},[e._v("hardware issue")]),e._v(" that restricted them to using 1MB of flash memory.\nThe problem is fixed on newer boards, but you may need to update the factory-provided bootloader in order to install FMUv3 Firmware and access all 2MB available memory.")],1)]),e._v(" "),r("p",[e._v("To update the bootloader:")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("Insert an SD card (enables boot logging to debug any problems).")])]),e._v(" "),r("li",[r("p",[r("RouterLink",{attrs:{to:"/en/config/firmware.html"}},[e._v("Update the Firmware")]),e._v(" to PX4 "),r("em",[e._v("master")]),e._v(" version (when updating the firmware, check "),r("strong",[e._v("Advanced settings")]),e._v(" and then select "),r("strong",[e._v("Developer Build (master)")]),e._v(" from the dropdown list).\n"),r("em",[e._v("QGroundControl")]),e._v(" will automatically detect that the hardware supports FMUv2 and install the appropriate Firmware.")],1),e._v(" "),r("p",[r("img",{attrs:{src:o(375),alt:"FMUv2 update"}})]),e._v(" "),r("p",[e._v("Wait for the vehicle to reboot.")])]),e._v(" "),r("li",[r("p",[r("RouterLink",{attrs:{to:"/en/advanced_config/parameters.html"}},[e._v("Find and enable")]),e._v(" the parameter "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#SYS_BL_UPDATE"}},[e._v("SYS_BL_UPDATE")]),e._v(".")],1)]),e._v(" "),r("li",[r("p",[e._v("Reboot (disconnect/reconnect the board).\nThe bootloader update will only take a few seconds.")])]),e._v(" "),r("li",[r("p",[e._v("Then "),r("RouterLink",{attrs:{to:"/en/config/firmware.html"}},[e._v("Update the Firmware")]),e._v(" again.\nThis time "),r("em",[e._v("QGroundControl")]),e._v(" should autodetect the hardware as FMUv3 and update the Firmware appropriately.")],1),e._v(" "),r("p",[r("img",{attrs:{src:o(1333),alt:"FMUv3 update"}})]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Note")]),e._v(" If the hardware has the "),r("em",[e._v("Silicon Errata")]),e._v(" it will still be detected as FMUv2 and you will see that FMUv2 was re-installed (in console).\nIn this case you will not be able to install FMUv3 hardware.")])])])]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Tip")]),e._v(" For more information see "),r("RouterLink",{attrs:{to:"/en/advanced_config/bootloader_update.html"}},[e._v("Bootloader Update")]),e._v(".")],1)]),e._v(" "),r("h2",{attrs:{id:"further-information"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#further-information"}},[e._v("#")]),e._v(" Further Information")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/SetupView/Firmware.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("QGroundControl User Guide > Firmware"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://youtu.be/91VGmdSlbo4",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4 Setup Video"),r("OutboundLink")],1),e._v(" (Youtube)")])])])}),[],!1,null,null,null);t.default=a.exports},375:function(e,t,o){e.exports=o.p+"assets/img/bootloader_update.8826d78f.jpg"},608:function(e,t,o){e.exports=o.p+"assets/img/firmware_disconnected.f89315a0.jpg"},609:function(e,t,o){e.exports=o.p+"assets/img/firmware_connected_default_px4.5f8d94f6.jpg"},610:function(e,t,o){e.exports=o.p+"assets/img/firmware_upgrade_complete.2b0acb92.jpg"}}]);