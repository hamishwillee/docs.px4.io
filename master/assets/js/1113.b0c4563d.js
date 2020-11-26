(window.webpackJsonp=window.webpackJsonp||[]).push([[1113],{2335:function(e,t,a){"use strict";a.r(t);var r=a(18),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"sik-电台"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sik-电台"}},[e._v("#")]),e._v(" SiK 电台")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/LorenzMeier/SiK",target:"_blank",rel:"noopener noreferrer"}},[e._v("SiK radio"),a("OutboundLink")],1),e._v(" is a collection of firmware and tools for telemetry radios.")]),e._v(" "),a("p",[e._v("Information about "),a("em",[e._v("using")]),e._v(" SiK Radio can be found it the "),a("em",[e._v("PX4 User Guide")]),e._v(": "),a("a",{attrs:{href:"http://docs.px4.io/en/telemetry/sik_radio.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Telemetry > SiK Radio"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v('The ("developer") information below explains how to build SiK firmware from source and configure it using AT commands.')]),e._v(" "),a("h2",{attrs:{id:"构建说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构建说明"}},[e._v("#")]),e._v(" 构建说明")]),e._v(" "),a("p",[e._v("The SiK repository includes bootloaders and firmware for the following telemetry radios (2020-02-25):")]),e._v(" "),a("ul",[a("li",[e._v("HopeRF HM-TRP")]),e._v(" "),a("li",[e._v("HopeRF RF50-DEMO")]),e._v(" "),a("li",[e._v("RFD900")]),e._v(" "),a("li",[e._v("RFD900a")]),e._v(" "),a("li",[e._v("RFD900p")]),e._v(" "),a("li",[e._v("RFD900pe")]),e._v(" "),a("li",[e._v("RFD900u")]),e._v(" "),a("li",[e._v("RFD900ue")])]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Note")]),e._v(" The SiK repository does not currently firmware for RFD900x or RFD900ux telemetry radios**. In order to update firmware on these radios (for instance, in order to support MAVLink v2.0), the following process is suggested:")]),e._v(" "),a("ol",[a("li",[e._v("Download the appropriate firmware from the "),a("a",{attrs:{href:"https://files.rfdesign.com.au/firmware/",target:"_blank",rel:"noopener noreferrer"}},[e._v("RFDesign website"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("li",[e._v("On a Windows PC, download and install "),a("a",{attrs:{href:"https://files.rfdesign.com.au/tools/",target:"_blank",rel:"noopener noreferrer"}},[e._v("RFD Modem Tools"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("li",[e._v("Use the RFD Modem Tools GUI to upload the firmware to your RFD900x or RFD900ux telemetry radio.")])])]),e._v(" "),a("h2",{attrs:{id:"配置说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置说明"}},[e._v("#")]),e._v(" 配置说明")]),e._v(" "),a("p",[e._v("You will need to install the required 8051 compiler, as this is not included in the default PX4 Build toolchain.")]),e._v(" "),a("h3",{attrs:{id:"mac-os"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mac-os"}},[e._v("#")]),e._v(" Mac OS")]),e._v(" "),a("p",[e._v("Install the toolchain:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("brew "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" sdcc\n")])])]),a("p",[e._v("Build the image for the standard SiK Radio / 3DR Radio:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/LorenzMeier/SiK.git\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" SiK/Firmware\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v("\n")])])]),a("p",[e._v("Upload it to the radio ("),a("strong",[e._v("change the serial port name")]),e._v("):")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("tools/uploader.py --port /dev/tty.usbserial-CHANGETHIS dst/radio~hm_trp.ihx\n")])])]),a("h2",{attrs:{id:"配置说明-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置说明-2"}},[e._v("#")]),e._v(" 配置说明")]),e._v(" "),a("p",[e._v("The radio supports AT commands for configuration.")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("screen")]),e._v(" /dev/tty.usbserial-CHANGETHIS "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("57600")]),e._v(" 8N1\n")])])]),a("p",[e._v("Then start command mode:")]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Note")]),e._v(" DO NOT TYPE ANYTHING ONE SECOND BEFORE AND AFTER")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("+++\n")])])]),a("p",[e._v("List the current settings:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("ATI5\n")])])]),a("p",[e._v("Then set the net ID, write settings and reboot radio:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("ATS3=55\nAT&W\nATZ\n")])])]),a("blockquote",[a("p",[a("strong",[e._v("Note")]),e._v(" You might have to power-cycle the radio to connect it to the 2nd radio.")])])])}),[],!1,null,null,null);t.default=s.exports}}]);