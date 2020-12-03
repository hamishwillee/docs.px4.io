(window.webpackJsonp=window.webpackJsonp||[]).push([[1119],{2338:function(s,t,e){"use strict";e.r(t);var l=e(18),a=Object(l.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"mavlink-shell"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mavlink-shell"}},[s._v("#")]),s._v(" MAVLink Shell")]),s._v(" "),e("p",[s._v("MAVLink Shell 是一个可以通过串口（USB、数传或基于WIFI的UDP/TCP链路）使用MAVLink协议访问的 "),e("em",[s._v("NSH 控制台")]),s._v(" 。只适用于基于NuttX的系统，如：Pixhawk、Pixracer等。")]),s._v(" "),e("p",[s._v("它可用于启动系统指令与模块，并得到输出信息。 尽管它不能"),e("em",[s._v("直接")]),s._v("显示那些不是由它启动的模块的输出，但是可以间接的使用 "),e("code",[s._v("dmesg")]),s._v(" 命令来查询。执行 "),e("code",[s._v("dmesg -f &")]),s._v(" 可以打印出工作队列中其它模块和任务的输出信息。")]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),e("p",[s._v("The "),e("a",{attrs:{href:"#qgroundcontrol"}},[s._v("QGroundControl MAVLink Console")]),s._v(" is the easiest way to access the console. If the system does not start properly you should instead use the "),e("RouterLink",{attrs:{to:"/zh/debug/system_console.html"}},[s._v("System Console")]),s._v(".")],1)]),s._v(" "),e("h2",{attrs:{id:"启用-shell"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#启用-shell"}},[s._v("#")]),s._v(" 启用 Shell")]),s._v(" "),e("p",[e("a",{attrs:{id:"qgroundcontrol"}})]),s._v(" "),e("h3",{attrs:{id:"qgroundcontrol-mavlink-console"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#qgroundcontrol-mavlink-console"}},[s._v("#")]),s._v(" QGroundControl MAVLink Console")]),s._v(" "),e("p",[s._v("您也可以使用 "),e("strong",[s._v("mavlink_shell.py")]),s._v(" 脚本从终端访问shell：")]),s._v(" "),e("h3",{attrs:{id:"mavlink-shell-py"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mavlink-shell-py"}},[s._v("#")]),s._v(" mavlink_shell.py")]),s._v(" "),e("p",[s._v("执行 "),e("code",[s._v("mavlink_shell.py -h")]),s._v(" 获取所有可用参数的描述。")]),s._v(" "),e("ol",[e("li",[s._v("关闭 "),e("em",[s._v("QGroundControl")]),s._v(".")]),s._v(" "),e("li",[s._v("安装依赖项"),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" pip3 "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" pymavlink pyserial\n")])])])]),s._v(" "),e("li",[s._v("Open terminal (in PX4-Autopilot directory) and start the shell:"),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 通过串口")]),s._v("\n./Tools/mavlink_shell.py /dev/ttyACM0\n")])])]),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 通过 WiFi 连接")]),s._v("\n./Tools/mavlink_shell.py "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:14550\n")])])])])]),s._v(" "),e("p",[s._v("详情见："),e("RouterLink",{attrs:{to:"/zh/debug/consoles.html#using_the_console"}},[s._v("PX4 控制台/Shells > 使用控制台/Shells")]),s._v("。")],1),s._v(" "),e("h2",{attrs:{id:"使用-mavlink-shell"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-mavlink-shell"}},[s._v("#")]),s._v(" 使用 MAVLink Shell")]),s._v(" "),e("p",[s._v("For information see: "),e("RouterLink",{attrs:{to:"/zh/debug/consoles.html#using_the_console"}},[s._v("PX4 Consoles/Shells > Using Consoles/Shells")]),s._v(".")],1)])}),[],!1,null,null,null);t.default=a.exports}}]);