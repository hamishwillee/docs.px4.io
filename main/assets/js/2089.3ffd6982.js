(window.webpackJsonp=window.webpackJsonp||[]).push([[2089],{3747:function(t,s,n){"use strict";n.r(s);var e=n(19),a=Object(e.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"vehicleroi-uorb-message"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vehicleroi-uorb-message"}},[t._v("#")]),t._v(" VehicleRoi (UORB message)")]),t._v(" "),n("p",[t._v("Vehicle Region Of Interest (ROI)")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/msg/VehicleRoi.msg",target:"_blank",rel:"noopener noreferrer"}},[t._v("source file"),n("OutboundLink")],1)]),t._v(" "),n("div",{staticClass:"language-c extra-class"},[n("pre",{pre:!0,attrs:{class:"language-c"}},[n("code",[n("span",{pre:!0,attrs:{class:"token macro property"}},[n("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token expression"}},[t._v("Vehicle Region Of "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Interest")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ROI"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),t._v("\n\nuint64 timestamp            # time since system "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nuint8 ROI_NONE "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("          # No region of interest\nuint8 ROI_WPNEXT "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("            # Point toward next MISSION with optional offset\nuint8 ROI_WPINDEX "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("           # Point toward given MISSION\nuint8 ROI_LOCATION "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("          # Point toward fixed location\nuint8 ROI_TARGET "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("            # Point toward target\nuint8 ROI_ENUM_END "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n\nuint8 mode          # ROI "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("mode")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("see above"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nfloat64 lat             # Latitude to point to\nfloat64 lon             # Longitude to point to\nfloat32 alt             # Altitude to point to\n\n"),n("span",{pre:!0,attrs:{class:"token macro property"}},[n("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("additional")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token expression"}},[t._v("angle offsets to next "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("waypoint")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("only used with ROI_WPNEXT"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),t._v("\nfloat32 roll_offset     # angle offset in rad\nfloat32 pitch_offset        # angle offset in rad\nfloat32 yaw_offset      # angle offset in rad\n\n")])])])])}),[],!1,null,null,null);s.default=a.exports}}]);