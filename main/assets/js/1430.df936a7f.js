(window.webpackJsonp=window.webpackJsonp||[]).push([[1430],{2611:function(e,t,o){"use strict";o.r(t);var r=o(19),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"debugging-with-gdb"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#debugging-with-gdb"}},[e._v("#")]),e._v(" Debugging with GDB")]),e._v(" "),o("p",[e._v("The "),o("a",{attrs:{href:"https://sourceware.org/gdb/download/onlinedocs/gdb/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("GNU DeBugger (GDB)"),o("OutboundLink")],1),e._v(" comes installed with the compiler toolchain in the form of the "),o("code",[e._v("arm-none-eabi-gdb")]),e._v(" binary. The debugger reads the debug symbols inside an ELF file to understand the static and dynamic memory layout of the PX4 firmware. To access the PX4 autopilot microcontroller, it needs to connect to a "),o("a",{attrs:{href:"https://sourceware.org/gdb/download/onlinedocs/gdb/Connecting.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Remote Target"),o("OutboundLink")],1),e._v(", which is provided by a "),o("RouterLink",{attrs:{to:"/ko/debug/swd_debug.html"}},[e._v("SWD debug probe")]),e._v(".")],1),e._v(" "),o("p",[e._v("The flow of information looks like this:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("Developer <=> GDB <=> GDB Server <=> Debug Probe <=> SWD <=> PX4 Autopilot.\n")])])]),o("h2",{attrs:{id:"quickstart"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#quickstart"}},[e._v("#")]),e._v(" Quickstart")]),e._v(" "),o("p",[e._v("To start a debugging session you typically:")]),e._v(" "),o("ol",[o("li",[e._v("Need a specialized "),o("RouterLink",{attrs:{to:"/ko/debug/swd_debug.html#debug-probes"}},[e._v("SWD debug probe")]),e._v(".")],1),e._v(" "),o("li",[e._v("Find and connect to the "),o("RouterLink",{attrs:{to:"/ko/debug/swd_debug.html#autopilot-debug-ports"}},[e._v("SWD debug port")]),e._v(". You may need a "),o("RouterLink",{attrs:{to:"/ko/debug/swd_debug.html#debug-adapters"}},[e._v("debug adapter")]),e._v(".")],1),e._v(" "),o("li",[e._v("Configure and start the debug probe to create a GDB server.")]),e._v(" "),o("li",[e._v("Launch GDB and connect to the GDB server as a remote target.")]),e._v(" "),o("li",[e._v("Debug your firmware interactively.")])]),e._v(" "),o("p",[e._v("See the debug probe documentation for details on how to setup your debug connection:")]),e._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/ko/debug/probe_jlink.html"}},[e._v("SEGGER J-Link")]),e._v(": commercial probe, no built-in serial console, requires adapter.")],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/ko/debug/probe_bmp.html"}},[e._v("Black Magic Probe")]),e._v(": integrated GDB server and serial console, requires adapter.")],1),e._v(" "),o("li",[o("a",{attrs:{href:"probe_stlink"}},[e._v("STLink")]),e._v(": best value, integrated serial console, adapter must be soldered.")])]),e._v(" "),o("p",[e._v("We recommend using the J-Link with the Pixhawk Debug Adapter or the STLinkv3-MINIE with a soldered custom cable.")]),e._v(" "),o("p",[e._v("Once connected, you can use the usual GDB commands such as:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("continue")]),e._v(" to continue program execution")]),e._v(" "),o("li",[o("code",[e._v("run")]),e._v(" to start from the beginning")]),e._v(" "),o("li",[o("code",[e._v("backtrace")]),e._v(" to see the backtrace")]),e._v(" "),o("li",[o("code",[e._v("break somewhere.cpp:123")]),e._v(" to set a breakpoint")]),e._v(" "),o("li",[o("code",[e._v("delete somewhere.cpp:123")]),e._v(" to remove it again")]),e._v(" "),o("li",[o("code",[e._v("info locals")]),e._v(" to print local variables")]),e._v(" "),o("li",[o("code",[e._v("info registers")]),e._v(" to print the registers")])]),e._v(" "),o("p",[e._v("Consult the "),o("a",{attrs:{href:"https://sourceware.org/gdb/download/onlinedocs/gdb/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("GDB documentation"),o("OutboundLink")],1),e._v(" for more details.")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),o("p",[e._v("To avoid having to type all commands to connect in GDB each time, you can write them into "),o("code",[e._v("~/.gdbinit")]),e._v(".")])]),e._v(" "),o("h2",{attrs:{id:"next-steps"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#next-steps"}},[e._v("#")]),e._v(" Next Steps")]),e._v(" "),o("p",[e._v("You've now connected the flight controller to an SWD debug probe!")]),e._v(" "),o("p",[e._v("The following topics explain how to start on-target debugging:")]),e._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/ko/debug/eclipse_jlink.html"}},[e._v("MCU Eclipse/J-Link Debugging for PX4")]),e._v(".")],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/ko/dev_setup/vscode.html"}},[e._v("Visual Studio Code IDE (VSCode)")]),e._v(".")],1)]),e._v(" "),o("h2",{attrs:{id:"embedded-debug-tools"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#embedded-debug-tools"}},[e._v("#")]),e._v(" Embedded Debug Tools")]),e._v(" "),o("p",[e._v("The "),o("a",{attrs:{href:"https://pypi.org/project/emdbg/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Embedded Debug Tools"),o("OutboundLink")],1),e._v(" connect several software and hardware debugging tools together in a user friendly Python package to more easily enable advanced use cases for ARM Cortex-M microcontrollers and related devices.")]),e._v(" "),o("p",[e._v("The library orchestrates the launch and configuration of hardware debug and trace probes, debuggers, logic analyzers, and waveform generators and provides analysis tools, converters, and plugins to provide significant insight into the software and hardware state during or after execution.")]),e._v(" "),o("p",[e._v("The emdbg library contains "),o("a",{attrs:{href:"https://github.com/Auterion/embedded-debug-tools/blob/main/src/emdbg/debug/gdb.md#user-commands",target:"_blank",rel:"noopener noreferrer"}},[e._v("many useful GDB plugins"),o("OutboundLink")],1),e._v(" that make debugging PX4 easier. It also provides tools for "),o("a",{attrs:{href:"https://github.com/Auterion/embedded-debug-tools/tree/main/ext/orbetto",target:"_blank",rel:"noopener noreferrer"}},[e._v("profiling PX4 in real-time"),o("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=a.exports}}]);