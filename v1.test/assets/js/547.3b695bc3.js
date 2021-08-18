(window.webpackJsonp=window.webpackJsonp||[]).push([[547],{1572:function(e,s,t){"use strict";t.r(s);var o=t(19),n=Object(o.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"px4-consoles-shells"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#px4-consoles-shells"}},[e._v("#")]),e._v(" PX4 Consoles/Shells")]),e._v(" "),t("p",[e._v("PX4 enables terminal access to the system through the "),t("RouterLink",{attrs:{to:"/en/debug/mavlink_shell.html"}},[e._v("MAVLink Shell")]),e._v(" and the "),t("RouterLink",{attrs:{to:"/en/debug/system_console.html"}},[e._v("System Console")]),e._v(".")],1),e._v(" "),t("p",[e._v("This page explains the main differences and how the console/shell are used.")]),e._v(" "),t("p",[t("a",{attrs:{id:"console_vs_shell"}})]),e._v(" "),t("h2",{attrs:{id:"system-console-vs-shells"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#system-console-vs-shells"}},[e._v("#")]),e._v(" System Console vs. Shells")]),e._v(" "),t("p",[e._v("The PX4 "),t("em",[e._v("System Console")]),e._v(" provides low-level access to the system, debug output and analysis of the system boot process.")]),e._v(" "),t("p",[e._v("There is just one "),t("em",[e._v("System Console")]),e._v(", which runs on one specific UART (the debug port, as configured in NuttX), and is commonly attached to a computer via an FTDI cable (or some other debug adapter like  a "),t("a",{attrs:{href:"https://kb.zubax.com/display/MAINKB/Dronecode+Probe+documentation",target:"_blank",rel:"noopener noreferrer"}},[e._v("Dronecode probe"),t("OutboundLink")],1),e._v(").")]),e._v(" "),t("ul",[t("li",[e._v("Used for "),t("em",[e._v("low-level debugging/development")]),e._v(": bootup, NuttX, startup scripts, board bringup, development on central parts of PX4 (e.g. uORB).")]),e._v(" "),t("li",[e._v("In particular, is the only place where all boot output (including information about applications auto-started on boot) is printed.")])]),e._v(" "),t("p",[e._v("Shells provide higher-level access to the system:")]),e._v(" "),t("ul",[t("li",[e._v("Used for basic module testing/running commands.")]),e._v(" "),t("li",[e._v("Only "),t("em",[e._v("directly")]),e._v(" display the output of modules you start.")]),e._v(" "),t("li",[e._v("Cannot "),t("em",[e._v("directly")]),e._v(" display the output of tasks running on the work queue.")]),e._v(" "),t("li",[e._v("Can't debug problems when the system doesn't start (as it isn't running yet).")])]),e._v(" "),t("div",{staticClass:"custom-block note"},[t("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("dmesg")]),e._v(" command is now available through the shell on some boards, enabling much lower level debugging than previously possible.\nFor example, with "),t("code",[e._v("dmesg -f &")]),e._v(" you also see the output of background tasks.")])]),e._v(" "),t("p",[e._v("There can be several shells, either running on a dedicated UART, or via MAVLink.\nSince MAVLink provides more flexibility, currently only the "),t("RouterLink",{attrs:{to:"/en/debug/mavlink_shell.html"}},[e._v("MAVLink Shell")]),e._v(" is used.")],1),e._v(" "),t("p",[e._v("The "),t("RouterLink",{attrs:{to:"/en/debug/system_console.html"}},[e._v("System Console")]),e._v(" is essential when the system does not boot (it displays the system boot log when power-cycling the board).\nThe "),t("RouterLink",{attrs:{to:"/en/debug/mavlink_shell.html"}},[e._v("MAVLink Shell")]),e._v(" is much easier to setup, and so is more generally recommended for most debugging.")],1),e._v(" "),t("p",[t("a",{attrs:{id:"using_the_console"}})]),e._v(" "),t("h2",{attrs:{id:"using-consoles-shells"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-consoles-shells"}},[e._v("#")]),e._v(" Using Consoles/Shells")]),e._v(" "),t("p",[e._v("The MAVLink shell/console and the "),t("RouterLink",{attrs:{to:"/en/debug/system_console.html"}},[e._v("System Console")]),e._v(" are used in much the same way.")],1),e._v(" "),t("p",[e._v("For example, type "),t("code",[e._v("ls")]),e._v(" to view the local file system, "),t("code",[e._v("free")]),e._v(" to see the remaining free RAM, "),t("code",[e._v("dmesg")]),e._v(" to look at boot output.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("nsh"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("ls")]),e._v("\nnsh"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("free")]),e._v("\nnsh"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("dmesg")]),e._v("\n")])])]),t("p",[e._v("Many other system commands and modules are listed in the "),t("RouterLink",{attrs:{to:"/en/modules/modules_main.html"}},[e._v("Modules and Command Reference")]),e._v(" (e.g. "),t("code",[e._v("top")]),e._v(", "),t("code",[e._v("listener")]),e._v(", etc.).")],1),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("Some commands may be disabled on some boards (i.e. the some modules are not included in firmware for boards with RAM or FLASH constraints).\nIn this case you will see the response: "),t("code",[e._v("command not found")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);