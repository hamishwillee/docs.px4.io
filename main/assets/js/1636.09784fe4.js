(window.webpackJsonp=window.webpackJsonp||[]).push([[1636],{3019:function(t,s,e){"use strict";e.r(s);var a=e(19),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"mavlinktunnel-uorb-message"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mavlinktunnel-uorb-message"}},[t._v("#")]),t._v(" MavlinkTunnel (UORB message)")]),t._v(" "),e("p",[t._v("MAV_TUNNEL_PAYLOAD_TYPE enum")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/msg/MavlinkTunnel.msg",target:"_blank",rel:"noopener noreferrer"}},[t._v("source file"),e("OutboundLink")],1)]),t._v(" "),e("div",{staticClass:"language-c extra-class"},[e("pre",{pre:!0,attrs:{class:"language-c"}},[e("code",[e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token expression"}},[t._v("MAV_TUNNEL_PAYLOAD_TYPE "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("enum")])])]),t._v("\n\nuint8 MAV_TUNNEL_PAYLOAD_TYPE_UNKNOWN "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("                # Encoding of payload unknown\nuint8 MAV_TUNNEL_PAYLOAD_TYPE_STORM32_RESERVED0 "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v("    # Registered "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" STorM32 gimbal controller\nuint8 MAV_TUNNEL_PAYLOAD_TYPE_STORM32_RESERVED1 "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("201")]),t._v("    # Registered "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" STorM32 gimbal controller\nuint8 MAV_TUNNEL_PAYLOAD_TYPE_STORM32_RESERVED2 "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("202")]),t._v("    # Registered "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" STorM32 gimbal controller\nuint8 MAV_TUNNEL_PAYLOAD_TYPE_STORM32_RESERVED3 "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("203")]),t._v("    # Registered "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" STorM32 gimbal controller\nuint8 MAV_TUNNEL_PAYLOAD_TYPE_STORM32_RESERVED4 "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("204")]),t._v("    # Registered "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" STorM32 gimbal controller\nuint8 MAV_TUNNEL_PAYLOAD_TYPE_STORM32_RESERVED5 "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("205")]),t._v("    # Registered "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" STorM32 gimbal controller\nuint8 MAV_TUNNEL_PAYLOAD_TYPE_STORM32_RESERVED6 "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("206")]),t._v("    # Registered "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" STorM32 gimbal controller\nuint8 MAV_TUNNEL_PAYLOAD_TYPE_STORM32_RESERVED7 "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("207")]),t._v("    # Registered "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" STorM32 gimbal controller\nuint8 MAV_TUNNEL_PAYLOAD_TYPE_STORM32_RESERVED8 "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("208")]),t._v("    # Registered "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" STorM32 gimbal controller\nuint8 MAV_TUNNEL_PAYLOAD_TYPE_STORM32_RESERVED9 "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("209")]),t._v("    # Registered "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" STorM32 gimbal controller\n\nuint64 timestamp         # Time since system "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nuint16 payload_type      # A code that identifies the content of the "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("payload")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" unknown"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" which is the "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" If this code is less than "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("32768")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" it is a "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'registered'")]),t._v(" payload type and the corresponding code should be added to the MAV_TUNNEL_PAYLOAD_TYPE "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("enum")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" Software creators can "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("register")]),t._v(" blocks of types as needed"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" Codes greater than "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("32767")]),t._v(" are considered local experiments and should not be checked in to any widely distributed codebase"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nuint8 target_system      # System "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ID")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("can be "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" broadcast"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" but this is discouraged"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nuint8 target_component   # Component "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ID")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("can be "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" broadcast"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" but this is discouraged"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nuint8 payload_length     # Length of the data transported in payload\nuint8"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("128")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" payload       # Data itself\n\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);