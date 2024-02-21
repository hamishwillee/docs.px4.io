(window.webpackJsonp=window.webpackJsonp||[]).push([[1669],{3119:function(t,s,e){"use strict";e.r(s);var a=e(19),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"ekf2timestamps-uorb-message"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ekf2timestamps-uorb-message"}},[t._v("#")]),t._v(" Ekf2Timestamps (UORB message)")]),t._v(" "),e("p",[t._v("this message contains the (relative) timestamps of the sensor inputs used by EKF2. It can be used for reproducible replay.")]),t._v(" "),e("p",[t._v("the timestamp field is the ekf2 reference time and matches the timestamp of the sensor_combined topic.")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/msg/Ekf2Timestamps.msg",target:"_blank",rel:"noopener noreferrer"}},[t._v("source file"),e("OutboundLink")],1)]),t._v(" "),e("div",{staticClass:"language-c extra-class"},[e("pre",{pre:!0,attrs:{class:"language-c"}},[e("code",[e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("this")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token expression"}},[t._v("message contains "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("the")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("relative"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" timestamps of the sensor inputs used by EKF2"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token expression"}},[t._v("It can be used "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" reproducible replay"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])])]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("the")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token expression"}},[t._v("timestamp field is the ekf2 reference time and matches the timestamp of")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("the")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token expression"}},[t._v("sensor_combined topic"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])])]),t._v("\n\nuint64 timestamp             # time since system "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nint16 RELATIVE_TIMESTAMP_INVALID "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("32767")]),t._v(" # "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x7fff")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" If one of the relative timestamps\n                                         "),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("is")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token expression"}},[t._v("set to this value"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" it means the associated sensor values did not update")])]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("timestamps")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token expression"}},[t._v("are relative to the main timestamp and are in "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.1")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ms")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("timestamp "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")])])]),t._v("\n# "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("_timestamp_rel "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" absolute timestamp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" For int16"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" this allows a maximum\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("difference")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token expression"}},[t._v("of "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.2")]),t._v("s to the sensor_combined topic"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])])]),t._v("\n\nint16 airspeed_timestamp_rel\nint16 distance_sensor_timestamp_rel\nint16 optical_flow_timestamp_rel\nint16 vehicle_air_data_timestamp_rel\nint16 vehicle_magnetometer_timestamp_rel\nint16 visual_odometry_timestamp_rel\n\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token expression"}},[t._v("Note"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" this is a high"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("rate logged topic"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" so it needs to be as small as possible")])]),t._v("\n\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);