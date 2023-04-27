(window.webpackJsonp=window.webpackJsonp||[]).push([[1998],{3642:function(s,t,e){"use strict";e.r(t);var a=e(19),r=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"ulogstream-uorb-message"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ulogstream-uorb-message"}},[s._v("#")]),s._v(" UlogStream (UORB message)")]),s._v(" "),e("p",[s._v("Message to stream ULog data from the logger. Corresponds to the LOGGING_DATA mavlink message")]),s._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/msg/UlogStream.msg",target:"_blank",rel:"noopener noreferrer"}},[s._v("source file"),e("OutboundLink")],1)]),s._v(" "),e("div",{staticClass:"language-c extra-class"},[e("pre",{pre:!0,attrs:{class:"language-c"}},[e("code",[e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token expression"}},[s._v("Message to stream ULog data from the logger"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" Corresponds to the LOGGING_DATA")])]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("mavlink")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token expression"}},[s._v("message")])]),s._v("\n\nuint64 timestamp        # time since system "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("start")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("microseconds"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("flags")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token expression"}},[s._v("bitmasks")])]),s._v("\nuint8 FLAGS_NEED_ACK "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("    # "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" set"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" this message requires to be acked"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n                "),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token expression"}},[s._v("Acked messages are published synchronous"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" a")])]),s._v("\n                "),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("publisher")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token expression"}},[s._v("waits "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" an ack before sending the")])]),s._v("\n                "),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("next")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token expression"}},[s._v("message")])]),s._v("\n\nuint8 length            # length of data\nuint8 first_message_offset  # offset into data where first message starts"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" This\n                "),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("can")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token expression"}},[s._v("be used "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" recovery"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" when a previous message got lost")])]),s._v("\nuint16 msg_sequence     # allows determine drops\nuint8 flags         # see FLAGS_"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\nuint8"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("249")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" data     # ulog data\n\nuint8 ORB_QUEUE_LENGTH "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(" # TODO"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" we might be able to reduce this "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" mavlink polled on the topic\n\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);