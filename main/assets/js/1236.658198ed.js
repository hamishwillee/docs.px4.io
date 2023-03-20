(window.webpackJsonp=window.webpackJsonp||[]).push([[1236],{2255:function(t,s,e){"use strict";e.r(s);var a=e(19),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"ulogstream-uorb-message"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ulogstream-uorb-message"}},[t._v("#")]),t._v(" UlogStream (UORB message)")]),t._v(" "),e("p",[t._v("Message to stream ULog data from the logger. Corresponds to the LOGGING_DATA\nmavlink message")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/msg/UlogStream.msg",target:"_blank",rel:"noopener noreferrer"}},[t._v("source file"),e("OutboundLink")],1)]),t._v(" "),e("div",{staticClass:"language-c extra-class"},[e("pre",{pre:!0,attrs:{class:"language-c"}},[e("code",[e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token expression"}},[t._v("Message to stream ULog data from the logger"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" Corresponds to the LOGGING_DATA")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("mavlink")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token expression"}},[t._v("message")])]),t._v("\n\nuint64 timestamp\t\t# time since system "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("flags")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token expression"}},[t._v("bitmasks")])]),t._v("\nuint8 FLAGS_NEED_ACK "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\t# "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" set"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" this message requires to be acked"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\t\t\t\t"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token expression"}},[t._v("Acked messages are published synchronous"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" a")])]),t._v("\n\t\t\t\t"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("publisher")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token expression"}},[t._v("waits "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" an ack before sending the")])]),t._v("\n\t\t\t\t"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("next")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token expression"}},[t._v("message")])]),t._v("\n\nuint8 length\t\t\t# length of data\nuint8 first_message_offset\t# offset into data where first message starts"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" This\n\t\t\t\t"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("can")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token expression"}},[t._v("be used "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" recovery"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" when a previous message got lost")])]),t._v("\nuint16 msg_sequence\t\t# allows determine drops\nuint8 flags\t\t\t# see FLAGS_"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\nuint8"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("249")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" data\t\t# ulog data\n\nuint8 ORB_QUEUE_LENGTH "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v("\t# TODO"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" we might be able to reduce this "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" mavlink polled on the topic\n\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);