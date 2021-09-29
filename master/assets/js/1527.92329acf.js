(window.webpackJsonp=window.webpackJsonp||[]).push([[1527],{2795:function(e,t,a){"use strict";a.r(t);var s=a(19),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"swd-gdb-hardware-debugging"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#swd-gdb-hardware-debugging"}},[e._v("#")]),e._v(" SWD GDB Hardware Debugging")]),e._v(" "),a("p",[e._v("This page documents how to connect the hardware target using GDB (from a terminal). To use an IDE instead, see the instructions for "),a("RouterLink",{attrs:{to:"/zh/debug/eclipse_jlink.html"}},[e._v("Eclipse")]),e._v(" or "),a("RouterLink",{attrs:{to:"/zh/dev_setup/vscode.html#hardware-debugging"}},[e._v("VSCode")]),e._v(".")],1),e._v(" "),a("p",[e._v("For the wiring interface setup, please see "),a("RouterLink",{attrs:{to:"/zh/debug/swd_debug.html"}},[e._v("this detailed information")]),e._v(".")],1),e._v(" "),a("h2",{attrs:{id:"using-dronecode-probe-blackmagic-probe"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-dronecode-probe-blackmagic-probe"}},[e._v("#")]),e._v(" Using Dronecode probe / Blackmagic probe")]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),a("p",[e._v("To debug STM32F7 or later (FMUv5 and newer) the Dronecode probe / Blackmagic probe likely requires a firmware update. You can find how to update the "),a("a",{attrs:{href:"https://github.com/blacksphere/blackmagic/wiki/Upgrading-Firmware",target:"_blank",rel:"noopener noreferrer"}},[e._v("blackmagic probe here"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("p",[e._v("To use a Dronecode probe with GDB, start GDB with the exact ELF file that is currently flashed on the autopilot:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("arm-none-eabi-gdb build/px4_fmu-v5_default/px4_fmu-v5_default.elf\n")])])]),a("p",[e._v("Then, you have to select the Dronecode probe interface, on Linux this is e.g.:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("target ext /dev/serial/by-id/usb-Black_Sphere_Technologies_Black_Magic_Probe_f9414d5_7DB85DAC-if00\n")])])]),a("p",[e._v("Then you scan for the target:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("monitor swdp_scan\n")])])]),a("p",[e._v("And you should see something like:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("Target voltage: "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v(".3V\nAvailable Targets:\nNo. Att Driver\n "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("      STM32F76x M7\n")])])]),a("p",[e._v("Note that for some autopilots it shows 0.0V but the subsequent steps work nevertheless.")]),e._v(" "),a("p",[e._v("You can now attach to that target:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("attach 1\n")])])]),a("p",[e._v("And now you should be connected.")]),e._v(" "),a("h2",{attrs:{id:"using-jlink"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-jlink"}},[e._v("#")]),e._v(" Using JLink")]),e._v(" "),a("p",[e._v("To use the JLink debugger, you first need to "),a("a",{attrs:{href:"https://www.segger.com/downloads/jlink/#J-LinkSoftwareAndDocumentationPack",target:"_blank",rel:"noopener noreferrer"}},[e._v("install the JLink software"),a("OutboundLink")],1),e._v(" containing the JLink GDB server.")]),e._v(" "),a("p",[e._v("The JLink installer should install the JLink GDB server to "),a("code",[e._v("/usr/bin/")]),e._v(". Once installed, you can start the server using:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("JLinkGDBServer -if swd\n")])])]),a("p",[e._v("It might then prompt you to update the JLink which is recommended, and then to specify which device it is communicating with. Check the docs of your autopilot for the specific device.")]),e._v(" "),a("p",[e._v("Once that's done, the GDB server should be start listening on port "),a("code",[e._v("2331")]),e._v(", e.g. like so:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("Checking target voltage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\nTarget voltage: "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("3.28")]),e._v(" V\nListening on TCP/IP port "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2331")]),e._v("\nConnecting to target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\nConnected to target\nWaiting "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" GDB connection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n")])])]),a("p",[e._v("You can now start GDB with the exact elf file that is currently flashed on the autopilot (in a separate terminal):")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("arm-none-eabi-gdb build/px4_fmu-v5_default/px4_fmu-v5_default.elf\n")])])]),a("p",[e._v("And connect to the GDB server:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("target remote :2331\n")])])]),a("p",[e._v("And now you should be connected.")]),e._v(" "),a("h2",{attrs:{id:"gdb-quickstart"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gdb-quickstart"}},[e._v("#")]),e._v(" GDB Quickstart")]),e._v(" "),a("p",[e._v("Once connected, you can use the usual GDB commands such as:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("continue")]),e._v(" to continue program execution")]),e._v(" "),a("li",[a("code",[e._v("run")]),e._v(" to start from the beginning")]),e._v(" "),a("li",[a("code",[e._v("backtrace")]),e._v(" to see the backtrace")]),e._v(" "),a("li",[a("code",[e._v("break somewhere.cpp:123")]),e._v(" to set a breakpoint")]),e._v(" "),a("li",[a("code",[e._v("delete somewhere.cpp:123")]),e._v(" to remove it again")]),e._v(" "),a("li",[a("code",[e._v("info locals")]),e._v(" to print local variables")]),e._v(" "),a("li",[a("code",[e._v("info registers")]),e._v(" to print the registers")])]),e._v(" "),a("p",[e._v("And much more, just use your favorite resource to learn more about GDB.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("提示")]),e._v(" "),a("p",[e._v("To avoid having to type all commands to connect in GDB each time, you can write them into "),a("code",[e._v("~/.gdbinit")]),e._v(".")])])])}),[],!1,null,null,null);t.default=n.exports}}]);