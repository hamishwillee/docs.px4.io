(window.webpackJsonp=window.webpackJsonp||[]).push([[1896],{3402:function(e,t,r){"use strict";r.r(t);var o=r(19),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"使用-gdb-调试"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用-gdb-调试"}},[e._v("#")]),e._v(" 使用 GDB 调试")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://sourceware.org/gdb/download/onlinedocs/gdb/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("GNU DeBugger（GDB）"),r("OutboundLink")],1),e._v("是用编译器工具链安装的形式为二进制"),r("code",[e._v("arm-none-eabi-gdb")]),e._v("。 调试器读取ELF文件内的调试富豪，以了解PX4固件的静态和动态内存布局。 要访问PX4自动驾驶仪微控制器，需要连接到"),r("a",{attrs:{href:"https://sourceware.org/gdb/download/onlinedocs/gdb/Connecting.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("远程目标"),r("OutboundLink")],1),e._v("，这是由"),r("RouterLink",{attrs:{to:"/zh/debug/swd_debug.html"}},[e._v("SWD 调试探测器")]),e._v("提供的。")],1),e._v(" "),r("p",[e._v("信息流看起来像这样：")]),e._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[e._v("Developer "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<=")]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" GDB "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<=")]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" GDB Server "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<=")]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" Debug Probe "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<=")]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" SWD "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<=")]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" PX4 Autopilot.\n")])])]),r("h2",{attrs:{id:"快速入门"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#快速入门"}},[e._v("#")]),e._v(" 快速入门")]),e._v(" "),r("p",[e._v("要启动调试会话，您通常需要：")]),e._v(" "),r("ol",[r("li",[e._v("需要特定的"),r("RouterLink",{attrs:{to:"/zh/debug/swd_debug.html#debug-probes"}},[e._v("SWD 调试探针")])],1),e._v(" "),r("li",[e._v("查找并连接到 "),r("RouterLink",{attrs:{to:"/zh/debug/swd_debug.html#autopilot-debug-ports"}},[e._v("SWD 调试端口")]),e._v(" 您可能需要一个"),r("RouterLink",{attrs:{to:"/zh/debug/swd_debug.html#debug-adapters"}},[e._v("调试适配器")]),e._v("。")],1),e._v(" "),r("li",[e._v("配置并启动调试探测来创建 GDB 服务。")]),e._v(" "),r("li",[e._v("启动GDB并作为远程目标连接到 GDB 服务。")]),e._v(" "),r("li",[e._v("以交互方式调试您的固件。")])]),e._v(" "),r("p",[e._v("See the debug probe documentation for details on how to setup your debug connection:")]),e._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/zh/debug/probe_jlink.html"}},[e._v("SEGGER J-Link")]),e._v(": commercial probe, no built-in serial console, requires adapter.")],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/zh/debug/probe_bmp.html"}},[e._v("Black Magic Probe")]),e._v(": integrated GDB server and serial console, requires adapter.")],1),e._v(" "),r("li",[r("a",{attrs:{href:"probe_stlink"}},[e._v("STLink")]),e._v(": best value, integrated serial console, adapter must be soldered.")])]),e._v(" "),r("p",[e._v("We recommend using the J-Link with the Pixhawk Debug Adapter or the STLinkv3-MINIE with a soldered custom cable.")]),e._v(" "),r("p",[e._v("Once connected, you can use the usual GDB commands such as:")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("continue")]),e._v(" to continue program execution")]),e._v(" "),r("li",[r("code",[e._v("run")]),e._v(" to start from the beginning")]),e._v(" "),r("li",[r("code",[e._v("backtrace")]),e._v(" to see the backtrace")]),e._v(" "),r("li",[r("code",[e._v("break somewhere.cpp:123")]),e._v(" to set a breakpoint")]),e._v(" "),r("li",[r("code",[e._v("delete somewhere.cpp:123")]),e._v(" to remove it again")]),e._v(" "),r("li",[r("code",[e._v("info locals")]),e._v(" to print local variables")]),e._v(" "),r("li",[r("code",[e._v("info registers")]),e._v(" to print the registers")])]),e._v(" "),r("p",[e._v("Consult the "),r("a",{attrs:{href:"https://sourceware.org/gdb/download/onlinedocs/gdb/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("GDB documentation"),r("OutboundLink")],1),e._v(" for more details.")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("提示")]),e._v(" "),r("p",[e._v("To avoid having to type all commands to connect in GDB each time, you can write them into "),r("code",[e._v("~/.gdbinit")]),e._v(".")])]),e._v(" "),r("h2",{attrs:{id:"next-steps"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#next-steps"}},[e._v("#")]),e._v(" Next Steps")]),e._v(" "),r("p",[e._v("You've now connected the flight controller to an SWD debug probe!")]),e._v(" "),r("p",[e._v("The following topics explain how to start on-target debugging:")]),e._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/zh/debug/eclipse_jlink.html"}},[e._v("MCU Eclipse/J-Link Debugging for PX4")]),e._v(".")],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/zh/dev_setup/vscode.html"}},[e._v("Visual Studio Code IDE (VSCode)")]),e._v(".")],1)]),e._v(" "),r("h2",{attrs:{id:"embedded-debug-tools"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#embedded-debug-tools"}},[e._v("#")]),e._v(" Embedded Debug Tools")]),e._v(" "),r("p",[e._v("The "),r("a",{attrs:{href:"https://pypi.org/project/emdbg/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Embedded Debug Tools"),r("OutboundLink")],1),e._v(" connect several software and hardware debugging tools together in a user friendly Python package to more easily enable advanced use cases for ARM Cortex-M microcontrollers and related devices.")]),e._v(" "),r("p",[e._v("The library orchestrates the launch and configuration of hardware debug and trace probes, debuggers, logic analyzers, and waveform generators and provides analysis tools, converters, and plugins to provide significant insight into the software and hardware state during or after execution.")]),e._v(" "),r("p",[e._v("The "),r("code",[e._v("emdbg")]),e._v(" library contains "),r("a",{attrs:{href:"https://github.com/Auterion/embedded-debug-tools/blob/main/src/emdbg/debug/gdb.md#user-commands",target:"_blank",rel:"noopener noreferrer"}},[e._v("many useful GDB plugins"),r("OutboundLink")],1),e._v(" that make debugging PX4 easier. It also provides tools for "),r("a",{attrs:{href:"https://github.com/Auterion/embedded-debug-tools/tree/main/ext/orbetto",target:"_blank",rel:"noopener noreferrer"}},[e._v("profiling PX4 in real-time"),r("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=a.exports}}]);