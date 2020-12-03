(window.webpackJsonp=window.webpackJsonp||[]).push([[472],{1421:function(t,e,o){"use strict";o.r(e);var a=o(18),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"bootloader-flashing-onto-betaflight-systems"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bootloader-flashing-onto-betaflight-systems"}},[t._v("#")]),t._v(" Bootloader Flashing onto Betaflight Systems")]),t._v(" "),a("p",[t._v("This page documents how to flash the PX4 bootloader onto boards preflashed with Betaflight (e.g. "),a("RouterLink",{attrs:{to:"/en/flight_controller/omnibus_f4_sd.html"}},[t._v("OmnibusF4 SD")]),t._v(" or "),a("RouterLink",{attrs:{to:"/en/flight_controller/kakutef7.html"}},[t._v("Kakute F7")]),t._v(").")],1),t._v(" "),a("p",[t._v("There are two options for flashing the bootloader: via "),a("em",[t._v("Betaflight Configurator")]),t._v(" (easier), or building from source.")]),t._v(" "),a("p",[a("span",{attrs:{id:"betaflight_configurator"}})]),t._v(" "),a("h3",{attrs:{id:"bootloader-update-using-betaflight-configurator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bootloader-update-using-betaflight-configurator"}},[t._v("#")]),t._v(" Bootloader Update using Betaflight Configurator")]),t._v(" "),a("p",[t._v("To install the PX4 bootloader using the "),a("em",[t._v("Betaflight Configurator")]),t._v(":")]),t._v(" "),a("ol",[a("li",[t._v("You should have downloaded already the pre-built bootloader binary (this depends on the board you want to flash).")]),t._v(" "),a("li",[t._v("Download the "),a("a",{attrs:{href:"https://github.com/betaflight/betaflight-configurator/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("Betaflight Configurator"),a("OutboundLink")],1),t._v(" for your platform."),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("If using the "),a("em",[t._v("Chrome")]),t._v(" web browser, a simple cross-platform alternative is to install the configurator as an "),a("a",{attrs:{href:"https://chrome.google.com/webstore/detail/betaflight-configurator/kdaghagfopacdngbohiknlhcocjccjao",target:"_blank",rel:"noopener noreferrer"}},[t._v("extension from here"),a("OutboundLink")],1),t._v(".")])])]),t._v(" "),a("li",[t._v("Connect the board to your PC and start the Configurator.")]),t._v(" "),a("li",[t._v("Press the "),a("strong",[t._v("Load Firmware [Local]")]),t._v(" button\n"),a("img",{attrs:{src:o(432),alt:"Betaflight Configurator - Local Firmware"}})]),t._v(" "),a("li",[t._v("Select the bootloader binary from the file system and then flash the board.")])]),t._v(" "),a("p",[t._v("You should now be able to install PX4 firmware on the board.")]),t._v(" "),a("h3",{attrs:{id:"bootloader-update-using-source"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bootloader-update-using-source"}},[t._v("#")]),t._v(" Bootloader Update using Source")]),t._v(" "),a("h4",{attrs:{id:"download-bootloader-source"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#download-bootloader-source"}},[t._v("#")]),t._v(" Download Bootloader Source")]),t._v(" "),a("p",[t._v("Download and build the "),a("a",{attrs:{href:"https://github.com/PX4/Bootloader",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bootloader"),a("OutboundLink")],1),t._v(" via:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git clone --recursive  https://github.com/PX4/Bootloader.git\ncd Bootloader\nmake <target> # For example: omnibusf4sd_bl or kakutef7_bl\n")])])]),a("h4",{attrs:{id:"flash-bootloader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flash-bootloader"}},[t._v("#")]),t._v(" Flash Bootloader")]),t._v(" "),a("p",[t._v("You can flash the PX4 bootloader using the "),a("a",{attrs:{href:"http://dfu-util.sourceforge.net/",target:"_blank",rel:"noopener noreferrer"}},[t._v("dfu-util"),a("OutboundLink")],1),t._v(" or the graphical "),a("a",{attrs:{href:"https://www.st.com/en/development-tools/stsw-stm32080.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("dfuse"),a("OutboundLink")],1),t._v(" tool on windows.")]),t._v(" "),a("p",[t._v("Don't be afraid to try flashing using any of the methods below.")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("The STM32 MCU cannot be bricked.\nDFU cannot be overwritten by flashing and will always allow you to install a new firmware, even if flashing fails.")])]),t._v(" "),a("h5",{attrs:{id:"enter-dfu-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enter-dfu-mode"}},[t._v("#")]),t._v(" Enter DFU mode")]),t._v(" "),a("p",[t._v("Both methods require the board to be in DFU mode.\nTo enter DFU mode, hold the boot button down while connecting the USB cable to your computer.\nThe button can be released after the board is powered up.")]),t._v(" "),a("h5",{attrs:{id:"dfu-util"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dfu-util"}},[t._v("#")]),t._v(" dfu-util")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("dfu-util -a 0 --dfuse-address 0x08000000 -D  build/<target>/<target>.bin\n")])])]),a("p",[t._v("Reboot the flight controller and it let it boot without holding the boot button.")]),t._v(" "),a("h5",{attrs:{id:"dfuse"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dfuse"}},[t._v("#")]),t._v(" dfuse")]),t._v(" "),a("p",[t._v("See the dfuse manual here: https://www.st.com/resource/en/user_manual/cd00155676.pdf")]),t._v(" "),a("p",[t._v("Flash the "),a("strong",[a("target",[t._v(".bin")])],1),t._v(" file.")]),t._v(" "),a("p",[a("span",{attrs:{id:"reinstall_betaflight"}})]),t._v(" "),a("h2",{attrs:{id:"reinstall-betaflight"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reinstall-betaflight"}},[t._v("#")]),t._v(" Reinstall Betaflight")]),t._v(" "),a("p",[t._v("In order to switch back to "),a("em",[t._v("Betaflight")]),t._v(":")]),t._v(" "),a("ul",[a("li",[t._v("Backup the PX4 parameters, e.g. by "),a("RouterLink",{attrs:{to:"/en/advanced/parameters_and_configurations.html#exporting-and-loading-parameters"}},[t._v("exporting")]),t._v(" them to an SD card")],1),t._v(" "),a("li",[t._v("Keep the "),a("strong",[t._v("bootloader")]),t._v(" button pressed while attaching the USB cable")]),t._v(" "),a("li",[t._v("Then flash "),a("em",[t._v("Betaflight")]),t._v(" as usual with the "),a("em",[t._v("Betaflight-configurator")])])])])}),[],!1,null,null,null);e.default=r.exports},432:function(t,e,o){t.exports=o.p+"assets/img/betaflight_configurator.bc7763bb.jpg"}}]);