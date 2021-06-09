(window.webpackJsonp=window.webpackJsonp||[]).push([[1175],{2421:function(e,t,s){"use strict";s.r(t);var o=s(19),l=Object(o.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"px4-控制台-shell"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#px4-控制台-shell"}},[e._v("#")]),e._v(" PX4 控制台/Shell")]),e._v(" "),s("p",[e._v("用户可以通过 "),s("RouterLink",{attrs:{to:"/zh/debug/mavlink_shell.html"}},[e._v("MAVLink Shell")]),e._v(" 和 "),s("RouterLink",{attrs:{to:"/zh/debug/system_console.html"}},[e._v("系统控制台")]),e._v(" 访问 PX4 终端。")],1),e._v(" "),s("p",[e._v("这里将说明它们的主要区别，以及如何使用。")]),e._v(" "),s("p",[s("a",{attrs:{id:"console_vs_shell"}})]),e._v(" "),s("h2",{attrs:{id:"system-console-vs-shells"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#system-console-vs-shells"}},[e._v("#")]),e._v(" System Console vs. Shells")]),e._v(" "),s("p",[e._v("PX4 系统控制台*（System Console）*提供对系统的底层访问能力，获得调试信息，也可用于分析PX4的启动过程。")]),e._v(" "),s("p",[e._v("PX4 只有一个 "),s("em",[e._v("系统控制台")]),e._v(" 。它运行在特定的串口上（由Nuttx配置为调试口），通常可以通过FTDI线或其他调试适配器连接至电脑，比如 "),s("a",{attrs:{href:"https://kb.zubax.com/display/MAINKB/Dronecode+Probe+documentation",target:"_blank",rel:"noopener noreferrer"}},[e._v("Dronecode probe"),s("OutboundLink")],1),e._v("。")]),e._v(" "),s("ul",[s("li",[e._v("用于 "),s("em",[e._v("底层开发调试")]),e._v("，例如：系统启动过程、Nuttx、启动脚本、飞控板启动，以及 PX4 中一些特定组件的开发，比如uORB。")]),e._v(" "),s("li",[e._v("更具体一点，这里是包括自启动的用户应用在内的整个PX4系统下所有启动过程唯一的输出位置。")])]),e._v(" "),s("p",[e._v("Shell 提供对系统的上层访问能力：")]),e._v(" "),s("ul",[s("li",[e._v("用于执行基础的模块调试运行命令。")]),e._v(" "),s("li",[e._v("只会"),s("em",[e._v("直接")]),e._v("得到你启动的模块的输出信息。")]),e._v(" "),s("li",[e._v("不能"),s("em",[e._v("直接")]),e._v("得到运行在任务队列上的其它输出信息。")]),e._v(" "),s("li",[e._v("在 PX4 系统无法启动时无助于调试（它并没有运行）。")])]),e._v(" "),s("p",[e._v("支持来自串口或 MAVLink 的多个shell同时运行。 由于 MAVLink 能提供更加灵活的使用方式，所以目前只使用了 "),s("RouterLink",{attrs:{to:"/zh/debug/mavlink_shell.html"}},[e._v("MAVLink Shell")]),e._v(" 。\n:::")],1),e._v(" "),s("p",[s("RouterLink",{attrs:{to:"/zh/debug/system_console.html"}},[e._v("系统控制台（System Console）")]),e._v("在调试系统无法启动时十分必要，它会在飞控板上电后输出启动日志。 但是 "),s("RouterLink",{attrs:{to:"/zh/debug/mavlink_shell.html"}},[e._v("MAVLink Shell")]),e._v(" 则更加易于配置使用，因此通常都推荐用它调试。")],1),e._v(" "),s("p",[e._v("The "),s("RouterLink",{attrs:{to:"/zh/debug/system_console.html"}},[e._v("System Console")]),e._v(" is essential when the system does not boot (it displays the system boot log when power-cycling the board). The "),s("RouterLink",{attrs:{to:"/zh/debug/mavlink_shell.html"}},[e._v("MAVLink Shell")]),e._v(" is much easier to setup, and so is more generally recommended for most debugging.")],1),e._v(" "),s("p",[s("a",{attrs:{id:"using_the_console"}})]),e._v(" "),s("h2",{attrs:{id:"使用控制台-shell"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用控制台-shell"}},[e._v("#")]),e._v(" 使用控制台/Shell")]),e._v(" "),s("p",[e._v("举例来说，可以输入 "),s("code",[e._v("ls")]),e._v(" 查看本地文件系统；输入 "),s("code",[e._v("free")]),e._v(" 查看剩余可用RAM；输入 "),s("code",[e._v("dmesg")]),e._v(" 查看启动日志。")]),e._v(" "),s("p",[e._v("其它更多的系统命令与模块被列举在 "),s("RouterLink",{attrs:{to:"/zh/middleware/modules_main.html"}},[e._v("模块和命令参考")]),e._v(" 中。（比如 "),s("code",[e._v("top")]),e._v("、"),s("code",[e._v("listener")]),e._v(" 等）")],1),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("nsh"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("ls")]),e._v("\nnsh"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("free")]),e._v("\nnsh"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("dmesg")]),e._v("\n")])])]),s("p",[e._v("Many other system commands and modules are listed in the "),s("RouterLink",{attrs:{to:"/zh/modules/modules_main.html"}},[e._v("Modules and Command Reference")]),e._v(" (e.g. "),s("code",[e._v("top")]),e._v(", "),s("code",[e._v("listener")]),e._v(", etc.).")],1),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("提示")]),e._v(" "),s("p",[e._v("Some commands may be disabled on some boards (i.e. the some modules are not included in firmware for boards with RAM or FLASH constraints). In this case you will see the response: "),s("code",[e._v("command not found")])])])])}),[],!1,null,null,null);t.default=l.exports}}]);