(window.webpackJsonp=window.webpackJsonp||[]).push([[1340],{2494:function(s,t,e){"use strict";e.r(t);var n=e(19),a=Object(n.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"iridiumsbd-status-uorb-message"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#iridiumsbd-status-uorb-message"}},[s._v("#")]),s._v(" iridiumsbd_status (UORB message)")]),s._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/msg/iridiumsbd_status.msg",target:"_blank",rel:"noopener noreferrer"}},[s._v("source file"),e("OutboundLink")],1)]),s._v(" "),e("div",{staticClass:"language-c extra-class"},[e("pre",{pre:!0,attrs:{class:"language-c"}},[e("code",[s._v("uint64 timestamp                # time since system "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("start")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("microseconds"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nuint64 last_heartbeat               # timestamp of the last successful sbd session\nuint16 tx_buf_write_index           # current size of the tx buffer\nuint16 rx_buf_read_index            # the rx buffer is parsed up to that index\nuint16 rx_buf_end_index             # current size of the rx buffer\nuint16 failed_sbd_sessions          # number of failed sbd sessions\nuint16 successful_sbd_sessions      # number of successfull sbd sessions\nuint16 num_tx_buf_reset             # number of times the tx buffer was reset\nuint8 signal_quality                # current signal quality"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" is no signal"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" the best\nuint8 state                         # current state of the driver"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" see the satcom_state of IridiumSBD"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("h "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" the definition\nbool ring_pending                   # indicates "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" a ring call is pending\nbool tx_buf_write_pending           # indicates "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" a tx buffer write is pending\nbool tx_session_pending             # indicates "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" a tx session is pending\nbool rx_read_pending                # indicates "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" a rx read is pending\nbool rx_session_pending             # indicates "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" a rx session is pending\n\n")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);