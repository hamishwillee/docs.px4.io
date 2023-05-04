(window.webpackJsonp=window.webpackJsonp||[]).push([[1124],{2161:function(t,s,e){"use strict";e.r(s);var n=e(19),a=Object(n.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"iridiumsbdstatus-uorb-message"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#iridiumsbdstatus-uorb-message"}},[t._v("#")]),t._v(" IridiumsbdStatus (UORB message)")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/msg/IridiumsbdStatus.msg",target:"_blank",rel:"noopener noreferrer"}},[t._v("source file"),e("OutboundLink")],1)]),t._v(" "),e("div",{staticClass:"language-c extra-class"},[e("pre",{pre:!0,attrs:{class:"language-c"}},[e("code",[t._v("uint64 timestamp\t\t\t\t# time since system "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nuint64 last_heartbeat\t\t\t\t# timestamp of the last successful sbd session\nuint16 tx_buf_write_index\t\t\t# current size of the tx buffer\nuint16 rx_buf_read_index\t\t\t# the rx buffer is parsed up to that index\nuint16 rx_buf_end_index\t\t\t\t# current size of the rx buffer\nuint16 failed_sbd_sessions\t\t\t# number of failed sbd sessions\nuint16 successful_sbd_sessions      # number of successful sbd sessions\nuint16 num_tx_buf_reset             # number of times the tx buffer was reset\nuint8 signal_quality                # current signal quality"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" is no signal"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" the best\nuint8 state                         # current state of the driver"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" see the satcom_state of IridiumSBD"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("h "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" the definition\nbool ring_pending                   # indicates "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" a ring call is pending\nbool tx_buf_write_pending           # indicates "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" a tx buffer write is pending\nbool tx_session_pending             # indicates "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" a tx session is pending\nbool rx_read_pending                # indicates "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" a rx read is pending\nbool rx_session_pending             # indicates "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" a rx session is pending\n\n")])])])])}),[],!1,null,null,null);s.default=a.exports}}]);