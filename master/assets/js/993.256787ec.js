(window.webpackJsonp=window.webpackJsonp||[]).push([[993],{1929:function(t,a,s){"use strict";s.r(a);var n=s(19),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"landing-target-pose-uorb-message"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#landing-target-pose-uorb-message"}},[t._v("#")]),t._v(" landing_target_pose (UORB message)")]),t._v(" "),s("p",[t._v("Relative position of precision land target in navigation (body fixed, north aligned, NED) and inertial (world fixed, north aligned, NED) frames")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/msg/landing_target_pose.msg",target:"_blank",rel:"noopener noreferrer"}},[t._v("source file"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token expression"}},[t._v("Relative position of precision land target in "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("navigation")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("body fixed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" north aligned"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" NED"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" and "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("inertial")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("world fixed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" north aligned"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" NED"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" frames")])]),t._v("\n\nuint64 timestamp\t\t# time since system "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nbool is_static\t\t\t# Flag indicating whether the landing target is "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" or moving with respect to the ground\n\nbool rel_pos_valid\t\t# Flag showing whether relative position is valid\nbool rel_vel_valid\t\t# Flag showing whether relative velocity is valid\n\nfloat32 x_rel\t\t\t# X"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("north position of target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" relative to "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("vehicle")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("navigation frame"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("meters"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nfloat32 y_rel\t\t\t# Y"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("east position of target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" relative to "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("vehicle")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("navigation frame"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("meters"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nfloat32 z_rel\t\t\t# Z"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("down position of target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" relative to "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("vehicle")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("navigation frame"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("meters"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\nfloat32 vx_rel\t\t\t# X"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("north velocity  of target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" relative to "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("vehicle")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("navigation frame"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("meters"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("second"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nfloat32 vy_rel\t\t\t# Y"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("east velocity of target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" relative to "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("vehicle")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("navigation frame"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("meters"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("second"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\nfloat32 cov_x_rel\t\t# X"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("north position variance "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("meters"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nfloat32 cov_y_rel\t\t# Y"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("east position variance "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("meters"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\nfloat32 cov_vx_rel\t\t# X"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("north velocity variance "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("meters"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("second"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nfloat32 cov_vy_rel\t\t# Y"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("east velocity variance "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("meters"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("second"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\nbool abs_pos_valid\t\t# Flag showing whether absolute position is valid\nfloat32 x_abs\t\t\t# X"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("north position of target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" relative to "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("origin")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("navigation frame"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("meters"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nfloat32 y_abs\t\t\t# Y"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("east position of target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" relative to "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("origin")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("navigation frame"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("meters"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nfloat32 z_abs\t\t\t# Z"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("down position of target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" relative to "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("origin")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("navigation frame"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("meters"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);