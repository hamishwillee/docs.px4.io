(window.webpackJsonp=window.webpackJsonp||[]).push([[2059],{3691:function(t,a,s){"use strict";s.r(a);var n=s(19),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"vehicleopticalflow-uorb-message"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vehicleopticalflow-uorb-message"}},[t._v("#")]),t._v(" VehicleOpticalFlow (UORB message)")]),t._v(" "),s("p",[t._v("Optical flow in XYZ body frame in SI units.")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/msg/VehicleOpticalFlow.msg",target:"_blank",rel:"noopener noreferrer"}},[t._v("source file"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token expression"}},[t._v("Optical flow in XYZ body frame in SI units"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])])]),t._v("\n\nuint64 timestamp               # time since system "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nuint64 timestamp_sample\n\nuint32 device_id               # unique device ID "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" the sensor that does not change between power cycles\n\nfloat32"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" pixel_flow          # "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("radians"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" accumulated optical flow in radians where a positive value is produced by a RH rotation about the body axis\n\nfloat32"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" delta_angle         # "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("radians"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" accumulated gyro radians where a positive value is produced by a RH rotation about the body axis"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NAN "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" unavailable"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nfloat32 distance_m             # "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("meters"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" Distance to the center of the flow "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("field")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NAN "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" unavailable"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nuint32 integration_timespan_us # "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" accumulation timespan in microseconds\n\nuint8 quality                  # Average of quality of accumulated frames"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" bad quality"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" maximum quality\n\nfloat32 max_flow_rate          # "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("radians"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" Magnitude of maximum angular which the optical flow sensor can measure reliably\n\nfloat32 min_ground_distance    # "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("meters"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" Minimum distance from ground at which the optical flow sensor operates reliably\nfloat32 max_ground_distance    # "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("meters"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" Maximum distance from ground at which the optical flow sensor operates reliably\n\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);