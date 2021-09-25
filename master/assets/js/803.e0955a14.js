(window.webpackJsonp=window.webpackJsonp||[]).push([[803],{1584:function(e,s,t){"use strict";t.r(s);var n=t(19),a=Object(n.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"mavlink-shell"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mavlink-shell"}},[e._v("#")]),e._v(" MAVLink Shell")]),e._v(" "),t("p",[e._v("The MAVLink Shell is an "),t("em",[e._v("NSH console")]),e._v(" that can be accessed via MAVLink over serial (USB/Telemetry) or WiFi (UDP/TCP) links (in particular, on NuttX-based systems like: Pixhawk, Pixracer, etc.).")]),e._v(" "),t("p",[e._v("The shell can be used for running commands and modules, and displaying their output.\nWhile the shell cannot "),t("em",[e._v("directly")]),e._v(" display the output of modules that it does not start, it can do so indirectly using the "),t("code",[e._v("dmesg")]),e._v(" command ("),t("code",[e._v("dmesg -f &")]),e._v(" can be used to display the output of other modules and tasks running on the work queue).")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("The "),t("a",{attrs:{href:"#qgroundcontrol"}},[e._v("QGroundControl MAVLink Console")]),e._v(" is the easiest way to access the console.\nIf the system does not start properly you should instead use the "),t("RouterLink",{attrs:{to:"/en/debug/system_console.html"}},[e._v("System Console")]),e._v(".")],1)]),e._v(" "),t("h2",{attrs:{id:"opening-the-shell"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#opening-the-shell"}},[e._v("#")]),e._v(" Opening the Shell")]),e._v(" "),t("p",[t("a",{attrs:{id:"qgroundcontrol"}})]),e._v(" "),t("h3",{attrs:{id:"qgroundcontrol-mavlink-console"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#qgroundcontrol-mavlink-console"}},[e._v("#")]),e._v(" QGroundControl MAVLink Console")]),e._v(" "),t("p",[e._v("The easiest way to access shell is to use the "),t("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/analyze_view/mavlink_console.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("QGroundControl MAVLink Console"),t("OutboundLink")],1),e._v(" (see "),t("strong",[e._v("Analyze View > Mavlink Console")]),e._v(").")]),e._v(" "),t("h3",{attrs:{id:"mavlink-shell-py"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mavlink-shell-py"}},[e._v("#")]),e._v(" mavlink_shell.py")]),e._v(" "),t("p",[e._v("You can also access the shell in a terminal using the "),t("strong",[e._v("mavlink_shell.py")]),e._v(" script:")]),e._v(" "),t("ol",[t("li",[e._v("Shut down "),t("em",[e._v("QGroundControl")]),e._v(".")]),e._v(" "),t("li",[e._v("Install dependencies:"),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" pip3 "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" pymavlink pyserial\n")])])])]),e._v(" "),t("li",[e._v("Open terminal (in PX4-Autopilot directory) and start the shell:"),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# For serial port")]),e._v("\n./Tools/mavlink_shell.py /dev/ttyACM0\n")])])]),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# For Wifi connection")]),e._v("\n./Tools/mavlink_shell.py "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.0")]),e._v(".0.0:14550\n")])])])])]),e._v(" "),t("p",[e._v("Use "),t("code",[e._v("mavlink_shell.py -h")]),e._v(" to get a description of all available arguments.")]),e._v(" "),t("h2",{attrs:{id:"using-the-mavlink-shell"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-the-mavlink-shell"}},[e._v("#")]),e._v(" Using the MAVLink Shell")]),e._v(" "),t("p",[e._v("For information see: "),t("RouterLink",{attrs:{to:"/en/debug/consoles.html#using_the_console"}},[e._v("PX4 Consoles/Shells > Using Consoles/Shells")]),e._v(".")],1)])}),[],!1,null,null,null);s.default=a.exports}}]);