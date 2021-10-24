(window.webpackJsonp=window.webpackJsonp||[]).push([[1337],{2495:function(t,a,e){"use strict";e.r(a);var s=e(19),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"optical-flow-uorb-message"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#optical-flow-uorb-message"}},[t._v("#")]),t._v(" optical_flow (UORB message)")]),t._v(" "),e("p",[t._v("Optical flow in XYZ body frame in SI units. http://en.wikipedia.org/wiki/International_System_of_Units")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/msg/optical_flow.msg",target:"_blank",rel:"noopener noreferrer"}},[t._v("source file"),e("OutboundLink")],1)]),t._v(" "),e("div",{staticClass:"language-c extra-class"},[e("pre",{pre:!0,attrs:{class:"language-c"}},[e("code",[e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token expression"}},[t._v("Optical flow in XYZ body frame in SI units"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("http")]),e("span",{pre:!0,attrs:{class:"token expression"}},[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")])]),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//en.wikipedia.org/wiki/International_System_of_Units")])]),t._v("\n\nuint64 timestamp        # time since system "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nuint8 sensor_id         # id of the sensor emitting the flow value\nfloat32 pixel_flow_x_integral   # accumulated optical flow in radians where a positive value is produced by a RH rotation about the X body axis\nfloat32 pixel_flow_y_integral   # accumulated optical flow in radians where a positive value is produced by a RH rotation about the Y body axis\nfloat32 gyro_x_rate_integral    # accumulated gyro value in radians where a positive value is produced by a RH rotation about the X body axis"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" Set to NaN "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" flow sensor does not have "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("axis gyro data"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nfloat32 gyro_y_rate_integral    # accumulated gyro value in radians where a positive value is produced by a RH rotation about the Y body axis"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" Set to NaN "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" flow sensor does not have "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("axis gyro data"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nfloat32 gyro_z_rate_integral    # accumulated gyro value in radians where a positive value is produced by a RH rotation about the Z body axis"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" Set to NaN "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" flow sensor does not have "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("axis gyro data"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nfloat32 ground_distance_m   # Altitude "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" distance to ground in meters\nuint32 integration_timespan # accumulation timespan in microseconds\nuint32 time_since_last_sonar_update # time since last sonar update in microseconds\nuint16 frame_count_since_last_readout   # number of accumulated frames in timespan\nint16 gyro_temperature  # Temperature "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" in centi"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("degrees Celsius\nuint8 quality   # Average of quality of accumulated frames"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" bad quality"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" maximum quality\n\nfloat32 max_flow_rate # Magnitude of maximum angular which the optical flow sensor can measure reliably\nfloat32 min_ground_distance # Minimum distance from ground at which the optical flow sensor operates reliably\nfloat32 max_ground_distance # Maximum distance from ground at which the optical flow sensor operates reliably\n\n\nuint8 MODE_UNKNOWN        "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\nuint8 MODE_BRIGHT         "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nuint8 MODE_LOWLIGHT       "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\nuint8 MODE_SUPER_LOWLIGHT "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n\nuint8 mode\n\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);