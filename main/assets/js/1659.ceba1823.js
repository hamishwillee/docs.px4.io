(window.webpackJsonp=window.webpackJsonp||[]).push([[1659],{3042:function(t,s,a){"use strict";a.r(s);var n=a(19),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"positioncontrollerlandingstatus-uorb-message"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#positioncontrollerlandingstatus-uorb-message"}},[t._v("#")]),t._v(" PositionControllerLandingStatus (UORB message)")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/msg/PositionControllerLandingStatus.msg",target:"_blank",rel:"noopener noreferrer"}},[t._v("source file"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[t._v("uint64 timestamp # "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("us"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" time since system start\nfloat32 lateral_touchdown_offset # "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" lateral touchdown position offset manually commanded during landing\nbool flaring # true "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" the aircraft is flaring\n\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("abort")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("status is"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")])])]),t._v("\n# "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" not aborted\n# "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" aborted"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" with the singular abort criterion which triggered the landing abort enumerated by the following abort reasons\nuint8 abort_status\n\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("abort")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("reasons")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("after")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("the manual operator abort"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" corresponds to individual bits of param FW_LND_ABORT")])]),t._v("\nuint8 NOT_ABORTED "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\nuint8 ABORTED_BY_OPERATOR "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nuint8 TERRAIN_NOT_FOUND "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" # "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("FW_LND_ABORT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nuint8 TERRAIN_TIMEOUT "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" # "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("FW_LND_ABORT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nuint8 UNKNOWN_ABORT_CRITERION "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);