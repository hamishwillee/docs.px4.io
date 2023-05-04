(window.webpackJsonp=window.webpackJsonp||[]).push([[1766],{3239:function(s,e,t){"use strict";t.r(e);var l=t(19),a=Object(l.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"mavlink-shell"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mavlink-shell"}},[s._v("#")]),s._v(" MAVLink Shell")]),s._v(" "),t("p",[s._v("MAVLink Shell 是一个可以通过串口（USB、数传或基于WIFI的UDP/TCP链路）使用MAVLink协议访问的 "),t("em",[s._v("NSH 控制台")]),s._v(" 。只适用于基于NuttX的系统，如：Pixhawk、Pixracer等。")]),s._v(" "),t("p",[s._v("它可用于启动系统指令与模块，并得到输出信息。 尽管它不能"),t("em",[s._v("直接")]),s._v("显示那些不是由它启动的模块的输出，但是可以间接的使用 "),t("code",[s._v("dmesg")]),s._v(" 命令来查询。执行 "),t("code",[s._v("dmesg -f &")]),s._v(" 可以打印出工作队列中其它模块和任务的输出信息。")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("p",[s._v("The "),t("a",{attrs:{href:"#qgroundcontrol"}},[s._v("QGroundControl MAVLink Console")]),s._v(" is the easiest way to access the console. If the system does not start properly you should instead use the "),t("RouterLink",{attrs:{to:"/zh/debug/system_console.html"}},[s._v("System Console")]),s._v(".")],1)]),s._v(" "),t("h2",{attrs:{id:"启用-shell"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启用-shell"}},[s._v("#")]),s._v(" 启用 Shell")]),s._v(" "),t("p",[t("a",{attrs:{id:"qgroundcontrol"}})]),s._v(" "),t("h3",{attrs:{id:"qgroundcontrol-mavlink-console"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#qgroundcontrol-mavlink-console"}},[s._v("#")]),s._v(" QGroundControl MAVLink Console")]),s._v(" "),t("p",[s._v("The easiest way to access shell is to use the "),t("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/analyze_view/mavlink_console.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("QGroundControl MAVLink Console"),t("OutboundLink")],1),s._v(" (see "),t("strong",[s._v("Analyze View > Mavlink Console")]),s._v(").")]),s._v(" "),t("h3",{attrs:{id:"mavlink-shell-py"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mavlink-shell-py"}},[s._v("#")]),s._v(" mavlink_shell.py")]),s._v(" "),t("p",[s._v("执行 "),t("code",[s._v("mavlink_shell.py -h")]),s._v(" 获取所有可用参数的描述。")]),s._v(" "),t("ol",[t("li",[s._v("关闭 "),t("em",[s._v("QGroundControl")]),s._v(".")]),s._v(" "),t("li",[s._v("安装依赖项"),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("pip3 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" --user pymavlink pyserial\n")])])])]),s._v(" "),t("li",[s._v("Open terminal (in PX4-Autopilot directory) and start the shell:"),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 通过串口")]),s._v("\n./Tools/mavlink_shell.py /dev/ttyACM0\n")])])]),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 通过 WiFi 连接")]),s._v("\n./Tools/mavlink_shell.py "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:14550\n")])])])])]),s._v(" "),t("p",[s._v("详情见："),t("RouterLink",{attrs:{to:"/zh/debug/consoles.html#using_the_console"}},[s._v("PX4 控制台/Shells > 使用控制台/Shells")]),s._v("。")],1),s._v(" "),t("h2",{attrs:{id:"使用-mavlink-shell"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-mavlink-shell"}},[s._v("#")]),s._v(" 使用 MAVLink Shell")]),s._v(" "),t("p",[s._v("For information see: "),t("RouterLink",{attrs:{to:"/zh/debug/consoles.html#using_the_console"}},[s._v("PX4 Consoles/Shells > Using Consoles/Shells")]),s._v(".")],1)])}),[],!1,null,null,null);e.default=a.exports}}]);