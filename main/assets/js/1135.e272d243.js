(window.webpackJsonp=window.webpackJsonp||[]).push([[1135],{2176:function(t,s,n){"use strict";n.r(s);var a=n(19),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"distancesensor-uorb-message"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#distancesensor-uorb-message"}},[t._v("#")]),t._v(" DistanceSensor (UORB message)")]),t._v(" "),n("p",[t._v("DISTANCE_SENSOR message data")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/msg/DistanceSensor.msg",target:"_blank",rel:"noopener noreferrer"}},[t._v("source file"),n("OutboundLink")],1)]),t._v(" "),n("div",{staticClass:"language-c extra-class"},[n("pre",{pre:!0,attrs:{class:"language-c"}},[n("code",[n("span",{pre:!0,attrs:{class:"token macro property"}},[n("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token expression"}},[t._v("DISTANCE_SENSOR message data")])]),t._v("\n\nuint64 timestamp\t\t# time since system "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nuint32 device_id\t\t# unique device ID "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" the sensor that does not change between power cycles\n\nfloat32 min_distance\t\t# Minimum distance the sensor can "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("measure")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("in m"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfloat32 max_distance\t\t# Maximum distance the sensor can "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("measure")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("in m"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfloat32 current_distance\t# Current distance "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("reading")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("in m"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfloat32 variance\t\t# Measurement "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("variance")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("in m"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" unknown "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" invalid readings\nint8 signal_quality\t\t# Signal quality in "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("percent")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".100")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" where "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" invalid signal"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" perfect signal"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" and "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" unknown signal quality"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\nuint8 type\t\t\t# Type from MAV_DISTANCE_SENSOR "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("enum")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("uint8")]),t._v(" MAV_DISTANCE_SENSOR_LASER "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\nuint8 MAV_DISTANCE_SENSOR_ULTRASOUND "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nuint8 MAV_DISTANCE_SENSOR_INFRARED "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\nuint8 MAV_DISTANCE_SENSOR_RADAR "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n\nfloat32 h_fov # Sensor horizontal field of "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("view")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rad"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfloat32 v_fov # Sensor vertical field of "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("view")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rad"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfloat32"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" q # Quaterion sensor orientation with respect to the vehicle body frame to specify the orientation ROTATION_CUSTOM\n\nuint8 orientation\t\t# Direction the sensor faces from MAV_SENSOR_ORIENTATION "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("enum")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("uint8")]),t._v(" ROTATION_YAW_0\t\t"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" # MAV_SENSOR_ROTATION_NONE\nuint8 ROTATION_YAW_45\t\t"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" # MAV_SENSOR_ROTATION_YAW_45\nuint8 ROTATION_YAW_90\t\t"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" # MAV_SENSOR_ROTATION_YAW_90\nuint8 ROTATION_YAW_135\t\t"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" # MAV_SENSOR_ROTATION_YAW_135\nuint8 ROTATION_YAW_180\t\t"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" # MAV_SENSOR_ROTATION_YAW_180\nuint8 ROTATION_YAW_225\t\t"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" # MAV_SENSOR_ROTATION_YAW_225\nuint8 ROTATION_YAW_270\t\t"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(" # MAV_SENSOR_ROTATION_YAW_270\nuint8 ROTATION_YAW_315\t\t"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(" # MAV_SENSOR_ROTATION_YAW_315\n\nuint8 ROTATION_FORWARD_FACING\t"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" # MAV_SENSOR_ROTATION_NONE\nuint8 ROTATION_RIGHT_FACING\t"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" # MAV_SENSOR_ROTATION_YAW_90\nuint8 ROTATION_BACKWARD_FACING\t"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" # MAV_SENSOR_ROTATION_YAW_180\nuint8 ROTATION_LEFT_FACING\t"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(" # MAV_SENSOR_ROTATION_YAW_270\n\nuint8 ROTATION_UPWARD_FACING   "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("24")]),t._v(" # MAV_SENSOR_ROTATION_PITCH_90\nuint8 ROTATION_DOWNWARD_FACING "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("25")]),t._v(" # MAV_SENSOR_ROTATION_PITCH_270\n\nuint8 ROTATION_CUSTOM          "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" # MAV_SENSOR_ROTATION_CUSTOM\n\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);