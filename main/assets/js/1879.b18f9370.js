(window.webpackJsonp=window.webpackJsonp||[]).push([[1879],{3411:function(s,t,e){"use strict";e.r(t);var a=e(19),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"esc-status-uorb-message"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#esc-status-uorb-message"}},[s._v("#")]),s._v(" esc_status (UORB message)")]),s._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/msg/esc_status.msg",target:"_blank",rel:"noopener noreferrer"}},[s._v("source file"),e("OutboundLink")],1)]),s._v(" "),e("div",{staticClass:"language-c extra-class"},[e("pre",{pre:!0,attrs:{class:"language-c"}},[e("code",[s._v("uint64 timestamp                    # time since system "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("start")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("microseconds"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nuint8 CONNECTED_ESC_MAX "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("             # The number of ESCs supported"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("Current")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Q2"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2013")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" we support "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" ESCs\n\nuint8 ESC_CONNECTION_TYPE_PPM "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("           # Traditional PPM ESC\nuint8 ESC_CONNECTION_TYPE_SERIAL "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("            # Serial Bus connected ESC\nuint8 ESC_CONNECTION_TYPE_ONESHOT "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("           # One Shot PPM\nuint8 ESC_CONNECTION_TYPE_I2C "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("           # I2C\nuint8 ESC_CONNECTION_TYPE_CAN "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("           # CAN"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Bus\nuint8 ESC_CONNECTION_TYPE_DSHOT "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("         # DShot\n\nuint16 counter                      # incremented by the writing thread everytime new data is stored\n\nuint8 esc_count                     # number of connected ESCs\nuint8 esc_connectiontype                # how ESCs connected to the system\n\nuint8 esc_online_flags                  # Bitmask indicating which ESC is online"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("offline\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("esc")]),e("span",{pre:!0,attrs:{class:"token expression"}},[s._v("_online_flags bit "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Set to "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" ESC0 is online")])]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("esc")]),e("span",{pre:!0,attrs:{class:"token expression"}},[s._v("_online_flags bit "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Set to "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" ESC1 is online")])]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("esc")]),e("span",{pre:!0,attrs:{class:"token expression"}},[s._v("_online_flags bit "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Set to "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" ESC2 is online")])]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("esc")]),e("span",{pre:!0,attrs:{class:"token expression"}},[s._v("_online_flags bit "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Set to "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" ESC3 is online")])]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("esc")]),e("span",{pre:!0,attrs:{class:"token expression"}},[s._v("_online_flags bit "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Set to "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" ESC4 is online")])]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("esc")]),e("span",{pre:!0,attrs:{class:"token expression"}},[s._v("_online_flags bit "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Set to "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" ESC5 is online")])]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("esc")]),e("span",{pre:!0,attrs:{class:"token expression"}},[s._v("_online_flags bit "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Set to "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" ESC6 is online")])]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("esc")]),e("span",{pre:!0,attrs:{class:"token expression"}},[s._v("_online_flags bit "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Set to "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" ESC7 is online")])]),s._v("\n\nuint8 esc_armed_flags                   # Bitmask indicating which ESC is armed"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" For ESC's where the arming state is not "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("known")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("returned by the ESC"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" the arming bits should always be set"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n\nesc_report"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" esc\n\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);