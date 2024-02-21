(window.webpackJsonp=window.webpackJsonp||[]).push([[2238],{4004:function(t,e,s){"use strict";s.r(e);var a=s(19),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"sensorcombined-uorb-message"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sensorcombined-uorb-message"}},[t._v("#")]),t._v(" SensorCombined (UORB message)")]),t._v(" "),s("p",[t._v("Sensor readings in SI-unit form. These fields are scaled and offset-compensated where possible and do not change with board revisions and sensor updates.")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/msg/SensorCombined.msg",target:"_blank",rel:"noopener noreferrer"}},[t._v("source file"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token expression"}},[t._v("Sensor readings in SI"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("unit form"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token expression"}},[t._v("These fields are scaled and offset"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("compensated where possible and "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" not")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("change")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token expression"}},[t._v("with board revisions and sensor updates"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])])]),t._v("\n\nuint64 timestamp                                # time since system "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nint32 RELATIVE_TIMESTAMP_INVALID "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2147483647")]),t._v("   # "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x7fffffff")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" If one of the relative timestamps is set to this value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" it means the associated sensor values are invalid\n\n"),s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("gyro")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token expression"}},[t._v("timstamp is equal to the timestamp of the message")])]),t._v("\nfloat32"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" gyro_rad                     # average angular rate measured in the FRD body frame XYZ"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("axis in rad"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("s over the last gyro sampling period\nuint32 gyro_integral_dt                 # gyro measurement sampling period in microseconds\n\nint32 accelerometer_timestamp_relative  # timestamp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" accelerometer_timestamp_relative "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Accelerometer timestamp\nfloat32"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" accelerometer_m_s2           # average value acceleration measured in the FRD body frame XYZ"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("axis in m"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" over the last accelerometer sampling period\nuint32 accelerometer_integral_dt        # accelerometer measurement sampling period in microseconds\n\nuint8 CLIPPING_X "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nuint8 CLIPPING_Y "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\nuint8 CLIPPING_Z "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n\nuint8 accelerometer_clipping    # bitfield indicating "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" there was any accelerometer "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("clipping")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("per axis"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" during the integration time frame\nuint8 gyro_clipping             # bitfield indicating "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" there was any gyro "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("clipping")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("per axis"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" during the integration time frame\n\nuint8 accel_calibration_count   # Calibration changed counter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" Monotonically increases whenever accelermeter calibration changes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nuint8 gyro_calibration_count    # Calibration changed counter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" Monotonically increases whenever rate gyro calibration changes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);