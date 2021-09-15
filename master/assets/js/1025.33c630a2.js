(window.webpackJsonp=window.webpackJsonp||[]).push([[1025],{1930:function(t,s,e){"use strict";e.r(s);var n=e(19),a=Object(n.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"vehicle-roi-uorb-message"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vehicle-roi-uorb-message"}},[t._v("#")]),t._v(" vehicle_roi (UORB message)")]),t._v(" "),e("p",[t._v("Vehicle Region Of Interest (ROI)")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/msg/vehicle_roi.msg",target:"_blank",rel:"noopener noreferrer"}},[t._v("source file"),e("OutboundLink")],1)]),t._v(" "),e("div",{staticClass:"language-c extra-class"},[e("pre",{pre:!0,attrs:{class:"language-c"}},[e("code",[e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token expression"}},[t._v("Vehicle Region Of "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Interest")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ROI"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),t._v("\n\nuint64 timestamp\t\t\t# time since system "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nuint8 ROI_NONE "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\t\t\t# No region of interest\nuint8 ROI_WPNEXT "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\t\t\t# Point toward next MISSION with optional offset\nuint8 ROI_WPINDEX "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\t\t\t# Point toward given MISSION\nuint8 ROI_LOCATION "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\t\t\t# Point toward fixed location\nuint8 ROI_TARGET "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\t\t\t# Point toward target\nuint8 ROI_ENUM_END "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n\nuint8 mode          # ROI "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mode")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("see above"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nfloat64 lat\t\t\t    # Latitude to point to\nfloat64 lon\t\t\t    # Longitude to point to\nfloat32 alt\t\t\t    # Altitude to point to\n\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("additional")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token expression"}},[t._v("angle offsets to next "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("waypoint")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("only used with ROI_WPNEXT"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),t._v("\nfloat32 roll_offset\t\t# angle offset in rad\nfloat32 pitch_offset\t\t# angle offset in rad\nfloat32 yaw_offset\t\t# angle offset in rad\n\n")])])])])}),[],!1,null,null,null);s.default=a.exports}}]);