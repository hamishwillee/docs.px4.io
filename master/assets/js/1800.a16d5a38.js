(window.webpackJsonp=window.webpackJsonp||[]).push([[1800],{3255:function(e,s,t){"use strict";t.r(s);var a=t(19),r=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"sensor-combined-uorb-message"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sensor-combined-uorb-message"}},[e._v("#")]),e._v(" sensor_combined (UORB message)")]),e._v(" "),t("p",[e._v("Sensor readings in SI-unit form. These fields are scaled and offset-compensated where possible and do not change with board revisions and sensor updates.")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/msg/sensor_combined.msg",target:"_blank",rel:"noopener noreferrer"}},[e._v("source file"),t("OutboundLink")],1)]),e._v(" "),t("div",{staticClass:"language-c extra-class"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[e._v("#")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token expression"}},[e._v("Sensor readings in SI"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("unit form"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")])])]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[e._v("#")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token expression"}},[e._v("These fields are scaled and offset"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("compensated where possible and "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("do")]),e._v(" not")])]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[e._v("#")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[e._v("change")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token expression"}},[e._v("with board revisions and sensor updates"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")])])]),e._v("\n\nuint64 timestamp                # time since system "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("start")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("microseconds"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\nint32 RELATIVE_TIMESTAMP_INVALID "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("2147483647")]),e._v("   # "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0x7fffffff")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" If one of the relative timestamps is set to this value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" it means the associated sensor values are invalid\n\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[e._v("#")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[e._v("gyro")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token expression"}},[e._v("timstamp is equal to the timestamp of the message")])]),e._v("\nfloat32"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" gyro_rad         # average angular rate measured in the FRD body frame XYZ"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("axis in rad"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("s over the last gyro sampling period\nuint32 gyro_integral_dt     # gyro measurement sampling period in microseconds\n\nint32 accelerometer_timestamp_relative  # timestamp "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),e._v(" accelerometer_timestamp_relative "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" Accelerometer timestamp\nfloat32"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" accelerometer_m_s2       # average value acceleration measured in the FRD body frame XYZ"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("axis in m"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("s"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("^")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(" over the last accelerometer sampling period\nuint32 accelerometer_integral_dt    # accelerometer measurement sampling period in microseconds\n\nuint8 CLIPPING_X "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\nuint8 CLIPPING_Y "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v("\nuint8 CLIPPING_Z "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("4")]),e._v("\nuint8 accelerometer_clipping            # bitfield indicating "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" there was any accelerometer "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("clipping")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("per axis"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" during the sampling period\n\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);