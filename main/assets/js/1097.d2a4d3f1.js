(window.webpackJsonp=window.webpackJsonp||[]).push([[1097],{2145:function(t,s,a){"use strict";a.r(s);var n=a(19),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"estimatorsensorbias-uorb-message"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#estimatorsensorbias-uorb-message"}},[t._v("#")]),t._v(" EstimatorSensorBias (UORB message)")]),t._v(" "),a("p",[t._v("Sensor readings and in-run biases in SI-unit form. Sensor readings are compensated for static offsets,\nscale errors, in-run bias and thermal drift (if thermal compensation is enabled and available).")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/msg/EstimatorSensorBias.msg",target:"_blank",rel:"noopener noreferrer"}},[t._v("source file"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[t._v("#\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("Sensor readings and in"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("run biases in SI"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("unit form"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" Sensor readings are compensated "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" offsets"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")])])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("scale")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("errors"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" in"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("run bias and thermal "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("drift")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" thermal compensation is enabled and available"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("uint")]),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),t._v(" timestamp                # time since system "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),t._v("\nuint64 timestamp_sample         # the timestamp of the raw "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("In"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("run bias "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("estimates")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("subtract from uncorrected data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),t._v("\n\nuint32 gyro_device_id           # unique device ID "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" the sensor that does not change between power cycles\nfloat32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" gyro_bias            # gyroscope in"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("run bias in body "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("frame")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rad"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfloat32 gyro_bias_limit         # magnitude of maximum gyroscope in"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("run bias in body "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("frame")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rad"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfloat32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" gyro_bias_variance\nbool gyro_bias_valid\nbool gyro_bias_stable\t\t# true when the gyro bias estimate is stable enough to use "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" calibration\n\nuint32 accel_device_id          # unique device ID "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" the sensor that does not change between power cycles\nfloat32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" accel_bias           # accelerometer in"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("run bias in body "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("frame")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("m"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfloat32 accel_bias_limit        # magnitude of maximum accelerometer in"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("run bias in body "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("frame")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("m"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfloat32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" accel_bias_variance\nbool accel_bias_valid\nbool accel_bias_stable\t\t# true when the accel bias estimate is stable enough to use "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" calibration\n\nuint32 mag_device_id            # unique device ID "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" the sensor that does not change between power cycles\nfloat32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" mag_bias             # magnetometer in"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("run bias in body "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("frame")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Gauss"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfloat32 mag_bias_limit          # magnitude of maximum magnetometer in"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("run bias in body "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("frame")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Gauss"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfloat32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" mag_bias_variance\nbool mag_bias_valid\nbool mag_bias_stable\t\t# true when the mag bias estimate is stable enough to use "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" calibration\n\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);