(window.webpackJsonp=window.webpackJsonp||[]).push([[2102],{3792:function(s,t,e){"use strict";e.r(t);var a=e(19),r=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"sensorcorrection-uorb-message"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sensorcorrection-uorb-message"}},[s._v("#")]),s._v(" SensorCorrection (UORB message)")]),s._v(" "),e("p",[s._v("Sensor corrections in SI-unit form for the voted sensor")]),s._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/msg/SensorCorrection.msg",target:"_blank",rel:"noopener noreferrer"}},[s._v("source file"),e("OutboundLink")],1)]),s._v(" "),e("div",{staticClass:"language-c extra-class"},[e("pre",{pre:!0,attrs:{class:"language-c"}},[e("code",[s._v("#\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token expression"}},[s._v("Sensor corrections in SI"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("unit form "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" the voted sensor")])]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("uint")]),e("span",{pre:!0,attrs:{class:"token expression"}},[e("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v(" timestamp        # time since system "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("start")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("microseconds"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")])])]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token expression"}},[s._v("Corrections "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" acceleromter acceleration outputs where corrected_accel "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" raw_accel "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" accel_scale "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" accel_offset")])]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token expression"}},[s._v("Note the corrections are in the sensor frame and must be applied before the sensor data is rotated into body frame")])]),s._v("\nuint32"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" accel_device_ids\nfloat32"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" accel_temperature\nfloat32"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" accel_offset_0   # accelerometer "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" offsets in the FRD board frame XYZ"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("axis in m"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("s"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("^")]),s._v("s\nfloat32"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" accel_offset_1   # accelerometer "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" offsets in the FRD board frame XYZ"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("axis in m"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("s"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("^")]),s._v("s\nfloat32"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" accel_offset_2   # accelerometer "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" offsets in the FRD board frame XYZ"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("axis in m"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("s"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("^")]),s._v("s\nfloat32"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" accel_offset_3   # accelerometer "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" offsets in the FRD board frame XYZ"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("axis in m"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("s"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("^")]),s._v("s\n\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token expression"}},[s._v("Corrections "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" gyro angular rate outputs where corrected_rate "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" raw_rate "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" gyro_scale "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" gyro_offset")])]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token expression"}},[s._v("Note the corrections are in the sensor frame and must be applied before the sensor data is rotated into body frame")])]),s._v("\nuint32"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" gyro_device_ids\nfloat32"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" gyro_temperature\nfloat32"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" gyro_offset_0    # gyro "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" XYZ offsets in the sensor frame in rad"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("s\nfloat32"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" gyro_offset_1    # gyro "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" XYZ offsets in the sensor frame in rad"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("s\nfloat32"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" gyro_offset_2    # gyro "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" XYZ offsets in the sensor frame in rad"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("s\nfloat32"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" gyro_offset_3    # gyro "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" XYZ offsets in the sensor frame in rad"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("s\n\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token expression"}},[s._v("Corrections "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" magnetometer measurement outputs where corrected_mag "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" raw_mag "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" mag_scale "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" mag_offset")])]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token expression"}},[s._v("Note the corrections are in the sensor frame and must be applied before the sensor data is rotated into body frame")])]),s._v("\nuint32"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" mag_device_ids\nfloat32"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" mag_temperature\nfloat32"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" mag_offset_0 # magnetometer "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" offsets in the FRD board frame XYZ"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("axis in m"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("s"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("^")]),s._v("s\nfloat32"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" mag_offset_1 # magnetometer "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" offsets in the FRD board frame XYZ"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("axis in m"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("s"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("^")]),s._v("s\nfloat32"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" mag_offset_2 # magnetometer "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" offsets in the FRD board frame XYZ"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("axis in m"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("s"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("^")]),s._v("s\nfloat32"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" mag_offset_3 # magnetometer "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" offsets in the FRD board frame XYZ"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("axis in m"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("s"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("^")]),s._v("s\n\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token expression"}},[s._v("Corrections "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" barometric pressure outputs where corrected_pressure "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" raw_pressure "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" pressure_scale "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" pressure_offset")])]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token expression"}},[s._v("Note the corrections are in the sensor frame and must be applied before the sensor data is rotated into body frame")])]),s._v("\nuint32"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" baro_device_ids\nfloat32"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" baro_temperature\nfloat32 baro_offset_0       # barometric pressure "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" offsets in the sensor frame in Pascals\nfloat32 baro_offset_1       # barometric pressure "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" offsets in the sensor frame in Pascals\nfloat32 baro_offset_2       # barometric pressure "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" offsets in the sensor frame in Pascals\nfloat32 baro_offset_3       # barometric pressure "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" offsets in the sensor frame in Pascals\n\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);