(window.webpackJsonp=window.webpackJsonp||[]).push([[2115],{3776:function(t,e,n){"use strict";n.r(e);var a=n(19),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"vehicleimu-uorb-message"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vehicleimu-uorb-message"}},[t._v("#")]),t._v(" VehicleImu (UORB message)")]),t._v(" "),n("p",[t._v("IMU readings in SI-unit form.")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/msg/VehicleImu.msg",target:"_blank",rel:"noopener noreferrer"}},[t._v("source file"),n("OutboundLink")],1)]),t._v(" "),n("div",{staticClass:"language-c extra-class"},[n("pre",{pre:!0,attrs:{class:"language-c"}},[n("code",[n("span",{pre:!0,attrs:{class:"token macro property"}},[n("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token expression"}},[t._v("IMU readings in SI"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("unit form"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])])]),t._v("\n\nuint64 timestamp          # time since system "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nuint64 timestamp_sample\n\nuint32 accel_device_id          # Accelerometer unique device ID "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" the sensor that does not change between power cycles\nuint32 gyro_device_id           # Gyroscope unique device ID "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" the sensor that does not change between power cycles\n\nfloat32"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" delta_angle          # delta angle about the FRD body frame XYZ"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("axis in rad over the integration time "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("frame")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("delta_angle_dt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfloat32"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" delta_velocity       # delta velocity in the FRD body frame XYZ"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("axis in m"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("s over the integration time "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("frame")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("delta_velocity_dt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nuint16 delta_angle_dt           # integration period in microseconds\nuint16 delta_velocity_dt        # integration period in microseconds\n\nuint8 CLIPPING_X "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nuint8 CLIPPING_Y "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\nuint8 CLIPPING_Z "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n\nuint8 delta_angle_clipping     # bitfield indicating "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" there was any gyro "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("clipping")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("per axis"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" during the integration time frame\nuint8 delta_velocity_clipping   # bitfield indicating "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" there was any accelerometer "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("clipping")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("per axis"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" during the integration time frame\n\nuint8 accel_calibration_count   # Calibration changed counter"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" Monotonically increases whenever accelermeter calibration changes"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nuint8 gyro_calibration_count    # Calibration changed counter"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" Monotonically increases whenever rate gyro calibration changes"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);