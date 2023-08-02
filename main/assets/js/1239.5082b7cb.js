(window.webpackJsonp=window.webpackJsonp||[]).push([[1239],{2288:function(t,a,s){"use strict";s.r(a);var n=s(19),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"vehicleopticalflowvel-uorb-message"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vehicleopticalflowvel-uorb-message"}},[t._v("#")]),t._v(" VehicleOpticalFlowVel (UORB message)")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/msg/VehicleOpticalFlowVel.msg",target:"_blank",rel:"noopener noreferrer"}},[t._v("source file"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[t._v("uint64 timestamp                       # time since system "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nuint64 timestamp_sample                # the timestamp of the raw "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nfloat32"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" vel_body                    # velocity obtained from gyro"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("compensated and distance"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("scaled optical flow raw measurements in body "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("frame")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("m"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfloat32"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" vel_ne                      # same as vel_body but in local "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("frame")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("m"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nfloat32"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" flow_uncompensated_integral # integrated optical flow "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("measurement")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rad"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfloat32"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" flow_compensated_integral   # integrated optical flow measurement compensated "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" angular "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("motion")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rad"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nfloat32"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" gyro_rate                   # gyro measurement synchronized with flow "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("measurements")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rad"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfloat32"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" gyro_rate_integral          # gyro measurement integrated to flow rate and synchronized with flow "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("measurements")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rad"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token expression"}},[t._v("TOPICS estimator_optical_flow_vel vehicle_optical_flow_vel")])]),t._v("\n\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);