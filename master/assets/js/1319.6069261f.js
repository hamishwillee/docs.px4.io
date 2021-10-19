(window.webpackJsonp=window.webpackJsonp||[]).push([[1319],{2476:function(t,s,n){"use strict";n.r(s);var a=n(19),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"led-control-uorb-message"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#led-control-uorb-message"}},[t._v("#")]),t._v(" led_control (UORB message)")]),t._v(" "),n("p",[t._v("LED control: control a single or multiple LED's. These are the externally visible LED's, not the board LED's")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/msg/led_control.msg",target:"_blank",rel:"noopener noreferrer"}},[t._v("source file"),n("OutboundLink")],1)]),t._v(" "),n("div",{staticClass:"language-c extra-class"},[n("pre",{pre:!0,attrs:{class:"language-c"}},[n("code",[n("span",{pre:!0,attrs:{class:"token macro property"}},[n("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token expression"}},[t._v("LED control"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" control a single or multiple LED's"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token macro property"}},[n("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token expression"}},[t._v("These are the externally visible LED")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'s, not the board LED'")]),n("span",{pre:!0,attrs:{class:"token expression"}},[t._v("s")])]),t._v("\n\nuint64 timestamp        # time since system "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token macro property"}},[n("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("colors")])]),t._v("\nuint8 COLOR_OFF "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" # this is only used in the drivers\nuint8 COLOR_RED "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nuint8 COLOR_GREEN "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\nuint8 COLOR_BLUE "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\nuint8 COLOR_YELLOW "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\nuint8 COLOR_PURPLE "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\nuint8 COLOR_AMBER "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v("\nuint8 COLOR_CYAN "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v("\nuint8 COLOR_WHITE "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token macro property"}},[n("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token expression"}},[t._v("LED modes definitions")])]),t._v("\nuint8 MODE_OFF "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" # turn LED off\nuint8 MODE_ON "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("  # turn LED on\nuint8 MODE_DISABLED "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("  # disable this "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("priority")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" to lower priority setting"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nuint8 MODE_BLINK_SLOW "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\nuint8 MODE_BLINK_NORMAL "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\nuint8 MODE_BLINK_FAST "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\nuint8 MODE_BREATHE "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(" # continuously increase "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" decrease "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("brightness")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("solid color "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" driver does not support it"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nuint8 MODE_FLASH "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(" # two fast "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("blinks")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("on"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("off"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" with timing as in MODE_BLINK_FAST and then off "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" a "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v("\n\nuint8 MAX_PRIORITY "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" # maxium "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("priority")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("minimum is "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\nuint8 led_mask # bitmask which "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("LED")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" to control"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" set to "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0xff")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" all\nuint8 color # see COLOR_"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\nuint8 mode # see MODE_"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\nuint8 num_blinks # how many times to "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("blink")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("number of on"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("off cycles "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" mode is one of MODE_BLINK_"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" Set to "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" infinite\n                 "),n("span",{pre:!0,attrs:{class:"token macro property"}},[n("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("in")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token expression"}},[t._v("MODE_FLASH it is the number of cycles"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" Max number of blinks"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("122")]),t._v(" and max number of flash cycles"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")])])]),t._v("\nuint8 priority # priority"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" higher priority events will override current lower priority "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("events")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("see MAX_PRIORITY"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nuint8 ORB_QUEUE_LENGTH "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("      # needs to match BOARD_MAX_LEDS\n\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);