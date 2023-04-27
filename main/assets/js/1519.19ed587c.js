(window.webpackJsonp=window.webpackJsonp||[]).push([[1519],{2865:function(t,s,a){"use strict";a.r(s);var n=a(19),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"inputrc-uorb-message"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inputrc-uorb-message"}},[t._v("#")]),t._v(" InputRc (UORB message)")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/msg/InputRc.msg",target:"_blank",rel:"noopener noreferrer"}},[t._v("source file"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[t._v("uint64 timestamp            # time since system "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nuint8 RC_INPUT_SOURCE_UNKNOWN "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\nuint8 RC_INPUT_SOURCE_PX4FMU_PPM "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nuint8 RC_INPUT_SOURCE_PX4IO_PPM "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\nuint8 RC_INPUT_SOURCE_PX4IO_SPEKTRUM "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\nuint8 RC_INPUT_SOURCE_PX4IO_SBUS "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\nuint8 RC_INPUT_SOURCE_PX4IO_ST24 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\nuint8 RC_INPUT_SOURCE_MAVLINK "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v("\nuint8 RC_INPUT_SOURCE_QURT "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v("\nuint8 RC_INPUT_SOURCE_PX4FMU_SPEKTRUM "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("\nuint8 RC_INPUT_SOURCE_PX4FMU_SBUS "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v("\nuint8 RC_INPUT_SOURCE_PX4FMU_ST24 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\nuint8 RC_INPUT_SOURCE_PX4FMU_SUMD "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v("\nuint8 RC_INPUT_SOURCE_PX4FMU_DSM "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v("\nuint8 RC_INPUT_SOURCE_PX4IO_SUMD "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),t._v("\nuint8 RC_INPUT_SOURCE_PX4FMU_CRSF "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v("\nuint8 RC_INPUT_SOURCE_PX4FMU_GHST "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),t._v("\n\nuint8 RC_INPUT_MAX_CHANNELS "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),t._v("    # Maximum number of R"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("C input channels in the system"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" S"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Bus has up to "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),t._v(" channels"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\nuint64 timestamp_last_signal        # last valid reception time\n\nuint8 channel_count         # number of channels actually being seen\n\nint8 RSSI_MAX "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\nint32 rssi              # receive signal strength "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("indicator")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("RSSI"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Undefined"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" no signal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" full reception\n\nbool rc_failsafe            # explicit failsafe flag"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" true on TX failure or TX out of range "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" false otherwise"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" Only the true state is reliable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" as there are "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("some")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("PPM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" receivers on the market going into failsafe without telling us explicitly"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nbool rc_lost                # RC receiver connection status"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" True"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" no frame has arrived in the expected time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" false otherwise"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" True usually means that the receiver has been disconnected"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" but can also indicate a radio link loss on "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"stupid"')]),t._v(" systems"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" Will remain false"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" a RX with failsafe option continues to transmit frames after a link loss"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\nuint16 rc_lost_frame_count      # Number of lost RC frames"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" Note"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" intended purpose"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" observe the radio link quality "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" RSSI is not available"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" This value must not be used to trigger any failsafe"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("alike functionality"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nuint16 rc_total_frame_count     # Number of total RC frames"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" Note"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" intended purpose"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" observe the radio link quality "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" RSSI is not available"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" This value must not be used to trigger any failsafe"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("alike functionality"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nuint16 rc_ppm_frame_length      # Length of a single PPM frame"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" Zero "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" non"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("PPM systems\n\nuint8 input_source          # Input source\nuint16"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" values           # measured pulse widths "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" each of the supported channels\n\nint8 link_quality           # link quality"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" Percentage "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" invalid\nfloat32 rssi_dbm            # Actual rssi in units of dBm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" NaN "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" invalid\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);