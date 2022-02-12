(window.webpackJsonp=window.webpackJsonp||[]).push([[969],{1907:function(t,n,a){"use strict";a.r(n);var s=a(19),r=Object(s.a)({},(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"gimbal-device-information-uorb-message"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gimbal-device-information-uorb-message"}},[t._v("#")]),t._v(" gimbal_device_information (UORB message)")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/msg/gimbal_device_information.msg",target:"_blank",rel:"noopener noreferrer"}},[t._v("source file"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[t._v("uint64 timestamp\t\t\t\t\t\t# time since system "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nuint8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" vendor_name\nuint8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" model_name\nuint8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" custom_name\nuint32 firmware_version\nuint32 hardware_version\nuint64 uid\n\nuint16 cap_flags\n\nuint32 GIMBAL_DEVICE_CAP_FLAGS_HAS_RETRACT "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nuint32 GIMBAL_DEVICE_CAP_FLAGS_HAS_NEUTRAL "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\nuint32 GIMBAL_DEVICE_CAP_FLAGS_HAS_ROLL_AXIS "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\nuint32 GIMBAL_DEVICE_CAP_FLAGS_HAS_ROLL_FOLLOW "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("\nuint32 GIMBAL_DEVICE_CAP_FLAGS_HAS_ROLL_LOCK "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v("\nuint32 GIMBAL_DEVICE_CAP_FLAGS_HAS_PITCH_AXIS "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),t._v("\nuint32 GIMBAL_DEVICE_CAP_FLAGS_HAS_PITCH_FOLLOW "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),t._v("\nuint32 GIMBAL_DEVICE_CAP_FLAGS_HAS_PITCH_LOCK "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("128")]),t._v("\nuint32 GIMBAL_DEVICE_CAP_FLAGS_HAS_YAW_AXIS "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("256")]),t._v("\nuint32 GIMBAL_DEVICE_CAP_FLAGS_HAS_YAW_FOLLOW "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("512")]),t._v("\nuint32 GIMBAL_DEVICE_CAP_FLAGS_HAS_YAW_LOCK "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),t._v("\nuint32 GIMBAL_DEVICE_CAP_FLAGS_SUPPORTS_INFINITE_YAW "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2048")]),t._v("\n\nuint16 custom_cap_flags\n\nfloat32 roll_min # "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("rad"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nfloat32 roll_max # "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("rad"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\nfloat32 pitch_min # "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("rad"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nfloat32 pitch_max # "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("rad"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\nfloat32 yaw_min # "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("rad"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nfloat32 yaw_max # "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("rad"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\nuint8 gimbal_device_compid\n\n")])])])])}),[],!1,null,null,null);n.default=r.exports}}]);