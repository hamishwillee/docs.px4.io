(window.webpackJsonp=window.webpackJsonp||[]).push([[1205],{2343:function(t,s,a){"use strict";a.r(s);var e=a(19),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"followtargetestimator-uorb-message"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#followtargetestimator-uorb-message"}},[t._v("#")]),t._v(" FollowTargetEstimator (UORB message)")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/msg/FollowTargetEstimator.msg",target:"_blank",rel:"noopener noreferrer"}},[t._v("source file"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[t._v("uint64 timestamp                     # time since system "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nuint64 last_filter_reset_timestamp   # time of last filter "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("reset")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nbool valid              # True "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" estimator states are okay to be used\nbool stale              # True "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" estimator stopped receiving follow_target messages "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" some time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" The estimate can still be valid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" though it might be inaccurate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\nfloat64 lat_est         # Estimated target latitude\nfloat64 lon_est         # Estimated target longitude\nfloat32 alt_est         # Estimated target altitude\n\nfloat32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" pos_est      # Estimated target NED "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("position")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfloat32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" vel_est      # Estimated target NED "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("velocity")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("m"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfloat32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" acc_est      # Estimated target NED "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("acceleration")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("m"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nuint64 prediction_count\nuint64 fusion_count\n\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);