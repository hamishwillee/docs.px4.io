(window.webpackJsonp=window.webpackJsonp||[]).push([[977],{1976:function(t,e,a){"use strict";a.r(e);var s=a(18),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"sik-radio-integration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sik-radio-integration"}},[t._v("#")]),t._v(" SiK Radio Integration")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/LorenzMeier/SiK",target:"_blank",rel:"noopener noreferrer"}},[t._v("SiK radio"),a("OutboundLink")],1),t._v(" is a collection of firmware and tools for telemetry radios.")]),t._v(" "),a("p",[t._v("Information about "),a("em",[t._v("using")]),t._v(" SiK Radio can be found it the "),a("em",[t._v("PX4 User Guide")]),t._v(": "),a("a",{attrs:{href:"http://docs.px4.io/en/telemetry/sik_radio.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Telemetry > SiK Radio"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v('The ("developer") information below explains how to build SiK firmware from source and configure it using AT commands.')]),t._v(" "),a("h2",{attrs:{id:"supported-radio-hardware"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#supported-radio-hardware"}},[t._v("#")]),t._v(" Supported Radio Hardware")]),t._v(" "),a("p",[t._v("The SiK repository includes bootloaders and firmware for the following telemetry radios (2020-02-25):")]),t._v(" "),a("ul",[a("li",[t._v("HopeRF HM-TRP")]),t._v(" "),a("li",[t._v("HopeRF RF50-DEMO")]),t._v(" "),a("li",[t._v("RFD900")]),t._v(" "),a("li",[t._v("RFD900a")]),t._v(" "),a("li",[t._v("RFD900p")]),t._v(" "),a("li",[t._v("RFD900pe")]),t._v(" "),a("li",[t._v("RFD900u")]),t._v(" "),a("li",[t._v("RFD900ue")])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("The SiK repository does not currently firmware for RFD900x or RFD900ux telemetry radios. In order to update firmware on these radios (for instance, in order to support MAVLink v2.0), the following process is suggested:")]),t._v(" "),a("ol",[a("li",[t._v("Download the appropriate firmware from the "),a("a",{attrs:{href:"https://files.rfdesign.com.au/firmware/",target:"_blank",rel:"noopener noreferrer"}},[t._v("RFDesign website"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("li",[t._v("On a Windows PC, download and install "),a("a",{attrs:{href:"https://files.rfdesign.com.au/tools/",target:"_blank",rel:"noopener noreferrer"}},[t._v("RFD Modem Tools"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("li",[t._v("Use the RFD Modem Tools GUI to upload the firmware to your RFD900x or RFD900ux telemetry radio.")])])]),t._v(" "),a("h2",{attrs:{id:"build-instructions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-instructions"}},[t._v("#")]),t._v(" Build Instructions")]),t._v(" "),a("p",[t._v("You will need to install the required 8051 compiler, as this is not included in the default PX4 Build toolchain.")]),t._v(" "),a("h3",{attrs:{id:"mac-os"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mac-os"}},[t._v("#")]),t._v(" Mac OS")]),t._v(" "),a("p",[t._v("Install the toolchain:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("brew "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" sdcc\n")])])]),a("p",[t._v("Build the image for the standard SiK Radio / 3DR Radio:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/LorenzMeier/SiK.git\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" SiK/Firmware\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])]),a("p",[t._v("Upload it to the radio ("),a("strong",[t._v("change the serial port name")]),t._v("):")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("tools/uploader.py --port /dev/tty.usbserial-CHANGETHIS dst/radio~hm_trp.ihx\n")])])]),a("h2",{attrs:{id:"configuration-instructions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration-instructions"}},[t._v("#")]),t._v(" Configuration Instructions")]),t._v(" "),a("p",[t._v("The radio supports AT commands for configuration.")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("screen")]),t._v(" /dev/tty.usbserial-CHANGETHIS "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("57600")]),t._v(" 8N1\n")])])]),a("p",[t._v("Then start command mode:")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("DO")]),t._v(" "),a("p",[t._v("NOT TYPE ANYTHING ONE SECOND BEFORE AND AFTER")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("+++\n")])])]),a("p",[t._v("List the current settings:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("ATI5\n")])])]),a("p",[t._v("Then set the net ID, write settings and reboot radio:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("ATS3=55\nAT&W\nATZ\n")])])]),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("You might have to power-cycle the radio to connect it to the 2nd radio.")])])])}),[],!1,null,null,null);e.default=r.exports}}]);