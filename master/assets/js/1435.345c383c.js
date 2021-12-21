(window.webpackJsonp=window.webpackJsonp||[]).push([[1435],{2595:function(t,a,n){"use strict";n.r(a);var e=n(19),s=Object(e.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"vehicle-imu-status-uorb-message"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vehicle-imu-status-uorb-message"}},[t._v("#")]),t._v(" vehicle_imu_status (UORB message)")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/msg/vehicle_imu_status.msg",target:"_blank",rel:"noopener noreferrer"}},[t._v("source file"),n("OutboundLink")],1)]),t._v(" "),n("div",{staticClass:"language-c extra-class"},[n("pre",{pre:!0,attrs:{class:"language-c"}},[n("code",[t._v("uint64 timestamp                # time since system "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nuint32 accel_device_id          # unique device ID "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" the sensor that does not change between power cycles\nuint32 gyro_device_id           # unique device ID "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" the sensor that does not change between power cycles\n\nuint32"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" accel_clipping        # total clipping per axis\n\nuint32 accel_error_count\nuint32 gyro_error_count\n\nfloat32 accel_rate_hz\nfloat32 gyro_rate_hz\n\nfloat32 accel_raw_rate_hz       # full raw sensor sample "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("rate")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Hz"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfloat32 gyro_raw_rate_hz        # full raw sensor sample "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("rate")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Hz"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nfloat32 accel_vibration_metric  # high frequency vibration level in the IMU delta velocity "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("m"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfloat32 gyro_vibration_metric   # high frequency vibration level in the IMU delta velocity "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("m"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfloat32 gyro_coning_vibration   # Level of coning vibration in the IMU delta "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("angles")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rad"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nfloat32"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" mean_accel           # average accelerometer readings since last publication\nfloat32"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" mean_gyro            # average gyroscope readings since last publication\nfloat32"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" var_accel            # accelerometer variance since last publication\nfloat32"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" var_gyro             # gyroscope variance since last publication\n\nfloat32 temperature_accel\nfloat32 temperature_gyro\n\n")])])])])}),[],!1,null,null,null);a.default=s.exports}}]);