(window.webpackJsonp=window.webpackJsonp||[]).push([[1574],{2936:function(t,s,e){"use strict";e.r(s);var n=e(19),a=Object(n.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"loggerstatus-uorb-message"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#loggerstatus-uorb-message"}},[t._v("#")]),t._v(" LoggerStatus (UORB message)")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/msg/LoggerStatus.msg",target:"_blank",rel:"noopener noreferrer"}},[t._v("source file"),e("OutboundLink")],1)]),t._v(" "),e("div",{staticClass:"language-c extra-class"},[e("pre",{pre:!0,attrs:{class:"language-c"}},[e("code",[t._v("uint64 timestamp               # time since system "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nuint8 LOGGER_TYPE_FULL    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("  # Normal"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" full size log\nuint8 LOGGER_TYPE_MISSION "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("  # reduced mission "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("g"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" geotagging"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nuint8 type\n\nuint8 BACKEND_FILE    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nuint8 BACKEND_MAVLINK "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\nuint8 BACKEND_ALL     "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\nuint8 backend\n\nfloat32 total_written_kb       # total written to log in kiloBytes\nfloat32 write_rate_kb_s        # write rate in kiloBytes"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("s\n\nuint32 dropouts                # number of failed buffer writes due to buffer overflow\nuint32 message_gaps            # messages misssed\n\nuint32 buffer_used_bytes       # current buffer fill in Bytes\nuint32 buffer_size_bytes       # total buffer size in Bytes\n\nuint8 num_messages\n\n")])])])])}),[],!1,null,null,null);s.default=a.exports}}]);