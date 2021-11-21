(window.webpackJsonp=window.webpackJsonp||[]).push([[1674],{3086:function(t,s,e){"use strict";e.r(s);var a=e(19),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"ekf-gps-drift-uorb-message"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ekf-gps-drift-uorb-message"}},[t._v("#")]),t._v(" ekf_gps_drift (UORB message)")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/msg/ekf_gps_drift.msg",target:"_blank",rel:"noopener noreferrer"}},[t._v("source file"),e("OutboundLink")],1)]),t._v(" "),e("div",{staticClass:"language-c extra-class"},[e("pre",{pre:!0,attrs:{class:"language-c"}},[e("code",[t._v("uint64 timestamp        # time since system "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfloat32 hpos_drift_rate     # Horizontal position rate magnitude checked using "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("EKF2_REQ_HDRIFT")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("m"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("s"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfloat32 vpos_drift_rate     # Vertical position rate magnitude checked using "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("EKF2_REQ_VDRIFT")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("m"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("s"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfloat32 hspd            # Filtered horizontal velocity magnitude checked using "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("EKF2_REQ_HDRIFT")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("m"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("s"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nbool blocked            # true when drift calculation is blocked due to IMU movement check controlled by EKF2_MOVE_TEST\n\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);