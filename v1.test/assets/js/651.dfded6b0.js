(window.webpackJsonp=window.webpackJsonp||[]).push([[651],{1797:function(t,s,e){"use strict";e.r(s);var a=e(19),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"esc-status-uorb-message"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#esc-status-uorb-message"}},[t._v("#")]),t._v(" esc_status (UORB message)")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/msg/esc_status.msg",target:"_blank",rel:"noopener noreferrer"}},[t._v("source file"),e("OutboundLink")],1)]),t._v(" "),e("div",{staticClass:"language-c extra-class"},[e("pre",{pre:!0,attrs:{class:"language-c"}},[e("code",[t._v("uint64 timestamp\t\t\t\t\t# time since system "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nuint8 CONNECTED_ESC_MAX "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("\t\t\t\t# The number of ESCs supported"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Current")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Q2"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2013")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" we support "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v(" ESCs\n\nuint8 ESC_CONNECTION_TYPE_PPM "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\t\t\t# Traditional PPM ESC\nuint8 ESC_CONNECTION_TYPE_SERIAL "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\t\t\t# Serial Bus connected ESC\nuint8 ESC_CONNECTION_TYPE_ONESHOT "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\t\t\t# One Shot PPM\nuint8 ESC_CONNECTION_TYPE_I2C "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\t\t\t# I2C\nuint8 ESC_CONNECTION_TYPE_CAN "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\t\t\t# CAN"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Bus\nuint8 ESC_CONNECTION_TYPE_DSHOT "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\t\t\t# DShot\n\nuint16 counter  \t\t\t\t\t# incremented by the writing thread everytime new data is stored\n\nuint8 esc_count\t\t\t\t\t\t# number of connected ESCs\nuint8 esc_connectiontype\t\t\t\t# how ESCs connected to the system\n\nuint8 esc_online_flags\t\t\t\t\t# Bitmask indicating which ESC is online"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("offline\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("esc")]),e("span",{pre:!0,attrs:{class:"token expression"}},[t._v("_online_flags bit "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Set to "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" ESC0 is online")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("esc")]),e("span",{pre:!0,attrs:{class:"token expression"}},[t._v("_online_flags bit "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Set to "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" ESC1 is online")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("esc")]),e("span",{pre:!0,attrs:{class:"token expression"}},[t._v("_online_flags bit "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Set to "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" ESC2 is online")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("esc")]),e("span",{pre:!0,attrs:{class:"token expression"}},[t._v("_online_flags bit "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Set to "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" ESC3 is online")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("esc")]),e("span",{pre:!0,attrs:{class:"token expression"}},[t._v("_online_flags bit "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Set to "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" ESC4 is online")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("esc")]),e("span",{pre:!0,attrs:{class:"token expression"}},[t._v("_online_flags bit "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Set to "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" ESC5 is online")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("esc")]),e("span",{pre:!0,attrs:{class:"token expression"}},[t._v("_online_flags bit "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Set to "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" ESC6 is online")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("esc")]),e("span",{pre:!0,attrs:{class:"token expression"}},[t._v("_online_flags bit "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Set to "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" ESC7 is online")])]),t._v("\n\nuint8 esc_armed_flags\t\t\t\t\t# Bitmask indicating which ESC is armed"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" For ESC's where the arming state is not "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("known")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("returned by the ESC"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" the arming bits should always be set"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\nesc_report"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" esc\n\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);