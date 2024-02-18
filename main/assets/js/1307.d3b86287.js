(window.webpackJsonp=window.webpackJsonp||[]).push([[1307],{2434:function(t,e,s){"use strict";s.r(e);var a=s(19),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"sensorgyro-uorb-message"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sensorgyro-uorb-message"}},[t._v("#")]),t._v(" SensorGyro (UORB message)")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/msg/SensorGyro.msg",target:"_blank",rel:"noopener noreferrer"}},[t._v("source file"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[t._v("uint64 timestamp          # time since system "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nuint64 timestamp_sample\n\nuint32 device_id          # unique device ID "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" the sensor that does not change between power cycles\n\nfloat32 x                 # angular velocity in the FRD board frame X"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("axis in rad"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("s\nfloat32 y                 # angular velocity in the FRD board frame Y"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("axis in rad"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("s\nfloat32 z                 # angular velocity in the FRD board frame Z"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("axis in rad"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("s\n\nfloat32 temperature       # temperature in degrees Celsius\n\nuint32 error_count\n\nuint8"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" clip_counter     # clip count per axis in the sample period\n\nuint8 samples             # number of raw samples that went into this message\n\nuint8 ORB_QUEUE_LENGTH "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("\n\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);