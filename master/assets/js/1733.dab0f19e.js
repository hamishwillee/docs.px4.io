(window.webpackJsonp=window.webpackJsonp||[]).push([[1733],{3145:function(t,s,a){"use strict";a.r(s);var n=a(19),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"onboard-computer-status-uorb-message"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#onboard-computer-status-uorb-message"}},[t._v("#")]),t._v(" onboard_computer_status (UORB message)")]),t._v(" "),a("p",[t._v("ONBOARD_COMPUTER_STATUS message data")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/msg/onboard_computer_status.msg",target:"_blank",rel:"noopener noreferrer"}},[t._v("source file"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("ONBOARD_COMPUTER_STATUS message data")])]),t._v("\nuint64 timestamp # "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("us"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" time since system "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nuint32 uptime    # "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ms"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" time since system boot of the "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("companion")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("milliseconds"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nuint8 type   # type of onboard computer "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Mission computer primary"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Mission computer backup "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Mission computer backup "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Compute node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Compute spares"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Payload computers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\nuint8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" cpu_cores # CPU usage on the component in percent\nuint8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" cpu_combined # Combined CPU usage as the last "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" slices of "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" MS\nuint8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" gpu_cores # GPU usage on the component in percent\nuint8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" gpu_combined # Combined GPU usage as the last "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" slices of "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" MS\nint8 temperature_board # "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("degC"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Temperature of the board\nint8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" temperature_core # "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("degC"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Temperature of the CPU core\nint16"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" fan_speed # "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("rpm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Fan speeds\nuint32 ram_usage # "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("MB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Amount of used RAM on the component system\nuint32 ram_total # "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("MB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Total amount of RAM on the component system\nuint32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" storage_type # Storage type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" HDD"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" SSD"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" EMMC"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" SD "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("card")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("non"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("removable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" SD "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("card")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("removable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nuint32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" storage_usage # "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("MB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Amount of used storage space on the component system\nuint32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" storage_total # "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("MB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Total amount of storage space on the component system\nuint32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" link_type # "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Kb"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Link type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" UART"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("19")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Wired network"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("29")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Wifi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("39")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Point"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("to"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("point proprietary"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("40")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("49")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Mesh proprietary\nuint32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" link_tx_rate # "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Kb"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Network traffic from the component system\nuint32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" link_rx_rate # "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Kb"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Network traffic to the component system\nuint32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" link_tx_max # "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Kb"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Network capacity from the component system\nuint32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" link_rx_max # "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Kb"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Network capacity to the component system\n\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);