(window.webpackJsonp=window.webpackJsonp||[]).push([[2080],{3741:function(t,a,s){"use strict";s.r(a);var n=s(19),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"sensoropticalflow-uorb-message"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sensoropticalflow-uorb-message"}},[t._v("#")]),t._v(" SensorOpticalFlow (UORB message)")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/msg/SensorOpticalFlow.msg",target:"_blank",rel:"noopener noreferrer"}},[t._v("source file"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[t._v("uint64 timestamp               # time since system "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nuint64 timestamp_sample\n\nuint32 device_id               # unique device ID "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" the sensor that does not change between power cycles\n\nfloat32"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" pixel_flow          # "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("radians"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" optical flow in radians where a positive value is produced by a RH rotation about the body axis\n\nfloat32"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" delta_angle         # "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("radians"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" accumulated gyro radians where a positive value is produced by a RH rotation about the body axis"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" Set to NaN "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" flow sensor does not have "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("axis gyro data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nbool delta_angle_available\n\nfloat32 distance_m             # "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("meters"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" Distance to the center of the flow field\nbool distance_available\n\nuint32 integration_timespan_us # "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" accumulation timespan in microseconds\n\nuint8 quality                  # quality"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" bad quality"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" maximum quality\n\nuint32 error_count\n\nfloat32 max_flow_rate          # "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("radians"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" Magnitude of maximum angular which the optical flow sensor can measure reliably\n\nfloat32 min_ground_distance    # "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("meters"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" Minimum distance from ground at which the optical flow sensor operates reliably\nfloat32 max_ground_distance    # "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("meters"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" Maximum distance from ground at which the optical flow sensor operates reliably\n\nuint8 MODE_UNKNOWN        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\nuint8 MODE_BRIGHT         "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nuint8 MODE_LOWLIGHT       "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\nuint8 MODE_SUPER_LOWLIGHT "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n\nuint8 mode\n\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);