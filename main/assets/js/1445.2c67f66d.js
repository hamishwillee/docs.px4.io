(window.webpackJsonp=window.webpackJsonp||[]).push([[1445],{2661:function(e,t,a){"use strict";a.r(t);var r=a(19),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"black-magic-probe-and-dronecode-probe"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#black-magic-probe-and-dronecode-probe"}},[e._v("#")]),e._v(" Black Magic Probe (and Dronecode Probe)")]),e._v(" "),a("p",[e._v("The "),a("a",{attrs:{href:"https://black-magic.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("Black Magic Probe"),a("OutboundLink")],1),e._v(" is an easy to use, mostly plug-and-play, JTAG/SWD debugger for embedded microcontrollers. Since the Black Magic Probe is a generic debug probe, you will need an adapter to connect to Pixhawk flight controllers, which can be purchased here:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://1bitsquared.com/products/drone-code-debug-adapter",target:"_blank",rel:"noopener noreferrer"}},[e._v("Drone Code Debug Adapter"),a("OutboundLink")],1),e._v(" (1 BIT SQUARED).")])]),e._v(" "),a("h2",{attrs:{id:"dronecode-probe"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dronecode-probe"}},[e._v("#")]),e._v(" Dronecode Probe")]),e._v(" "),a("p",[e._v("The "),a("a",{attrs:{href:"https://kb.zubax.com/display/MAINKB/Dronecode+Probe+documentation",target:"_blank",rel:"noopener noreferrer"}},[e._v("Dronecode Probe"),a("OutboundLink")],1),e._v(" is a specialization of the Black Magic Probe for debugging PX4 autopilots.")]),e._v(" "),a("p",[e._v("The probe's USB interface exposes two separate virtual serial port interfaces: one for connecting to the "),a("a",{attrs:{href:"system_console"}},[e._v("System Console")]),e._v(" (UART) and the other for an embedded GDB server (SWD interface).")]),e._v(" "),a("p",[e._v("The probe provides a DCD-M connector cable for attaching to the "),a("RouterLink",{attrs:{to:"/ko/debug/swd_debug.html#pixhawk-debug-mini"}},[e._v("Pixhawk Debug Mini")]),e._v(".")],1),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("The "),a("em",[e._v("6-pos DF13")]),e._v(" connector that comes with the probe cannot be used for SWD debugging (it is for using the System Console).")])]),e._v(" "),a("h2",{attrs:{id:"using-the-probe"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-the-probe"}},[e._v("#")]),e._v(" Using the Probe")]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("To debug STM32F7 or later (FMUv5 and newer) the Dronecode probe / Blackmagic probe likely requires a firmware update. You can find how to update the "),a("a",{attrs:{href:"https://github.com/blacksphere/blackmagic/wiki/Upgrading-Firmware",target:"_blank",rel:"noopener noreferrer"}},[e._v("blackmagic probe here"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("p",[e._v("To use a Dronecode probe with GDB, start GDB with the exact ELF file that is currently flashed on the autopilot:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("arm-none-eabi-gdb build/px4_fmu-v5_default/px4_fmu-v5_default.elf\n")])])]),a("p",[e._v("Then, you have to select the Dronecode probe interface, on Linux this is e.g.:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("target ext /dev/serial/by-id/usb-Black_Sphere_Technologies_Black_Magic_Probe_f9414d5_7DB85DAC-if00\n")])])]),a("p",[e._v("Then you scan for the target:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("monitor swdp_scan\n")])])]),a("p",[e._v("And you should see something like:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("Target voltage: "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v(".3V\nAvailable Targets:\nNo. Att Driver\n "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("      STM32F76x M7\n")])])]),a("p",[e._v("Note that for some autopilots it shows 0.0V but the subsequent steps work nevertheless.")]),e._v(" "),a("p",[e._v("You can now attach to that target:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("attach 1\n")])])]),a("p",[e._v("And now you should be connected.")])])}),[],!1,null,null,null);t.default=o.exports}}]);