(window.webpackJsonp=window.webpackJsonp||[]).push([[1317],{2474:function(s,t,a){"use strict";a.r(t);var e=a(19),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"estimator-sensor-bias-uorb-message"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#estimator-sensor-bias-uorb-message"}},[s._v("#")]),s._v(" estimator_sensor_bias (UORB message)")]),s._v(" "),a("p",[s._v("Sensor readings and in-run biases in SI-unit form. Sensor readings are compensated for static offsets, scale errors, in-run bias and thermal drift (if thermal compensation is enabled and available).")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/msg/estimator_sensor_bias.msg",target:"_blank",rel:"noopener noreferrer"}},[s._v("source file"),a("OutboundLink")],1)]),s._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[s._v("#\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[s._v("Sensor readings and in"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("run biases in SI"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("unit form"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" Sensor readings are compensated "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" offsets"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")])])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("scale")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[s._v("errors"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" in"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("run bias and thermal "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("drift")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" thermal compensation is enabled and available"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("uint")]),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v(" timestamp                # time since system "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("start")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("microseconds"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")])])]),s._v("\nuint64 timestamp_sample         # the timestamp of the raw "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("data")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("microseconds"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[s._v("In"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("run bias "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("estimates")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("subtract from uncorrected data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")])])]),s._v("\n\nuint32 gyro_device_id           # unique device ID "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" the sensor that does not change between power cycles\nfloat32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" gyro_bias            # gyroscope in"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("run bias in body "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("frame")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("rad"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nfloat32 gyro_bias_limit         # magnitude of maximum gyroscope in"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("run bias in body "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("frame")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("rad"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nfloat32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" gyro_bias_variance\nbool gyro_bias_valid\nbool gyro_bias_stable       # true when the gyro bias estimate is stable enough to use "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" calibration\n\nuint32 accel_device_id          # unique device ID "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" the sensor that does not change between power cycles\nfloat32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" accel_bias           # accelerometer in"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("run bias in body "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("frame")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("m"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("^")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nfloat32 accel_bias_limit        # magnitude of maximum accelerometer in"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("run bias in body "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("frame")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("m"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("^")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nfloat32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" accel_bias_variance\nbool accel_bias_valid\nbool accel_bias_stable      # true when the accel bias estimate is stable enough to use "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" calibration\n\nuint32 mag_device_id            # unique device ID "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" the sensor that does not change between power cycles\nfloat32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" mag_bias             # magnetometer in"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("run bias in body "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("frame")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Gauss"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nfloat32 mag_bias_limit          # magnitude of maximum magnetometer in"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("run bias in body "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("frame")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Gauss"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nfloat32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" mag_bias_variance\nbool mag_bias_valid\nbool mag_bias_stable        # true when the mag bias estimate is stable enough to use "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" calibration\n\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);