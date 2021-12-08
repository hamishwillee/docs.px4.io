(window.webpackJsonp=window.webpackJsonp||[]).push([[1700],{3113:function(t,a,n){"use strict";n.r(a);var s=n(19),_=Object(s.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"gimbal-manager-information-uorb-message"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#gimbal-manager-information-uorb-message"}},[t._v("#")]),t._v(" gimbal_manager_information (UORB message)")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/msg/gimbal_manager_information.msg",target:"_blank",rel:"noopener noreferrer"}},[t._v("source file"),n("OutboundLink")],1)]),t._v(" "),n("div",{staticClass:"language-c extra-class"},[n("pre",{pre:!0,attrs:{class:"language-c"}},[n("code",[t._v("uint64 timestamp                        # time since system "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nuint32 cap_flags\n\nuint32 GIMBAL_MANAGER_CAP_FLAGS_HAS_RETRACT "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nuint32 GIMBAL_MANAGER_CAP_FLAGS_HAS_NEUTRAL "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\nuint32 GIMBAL_MANAGER_CAP_FLAGS_HAS_ROLL_AXIS "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\nuint32 GIMBAL_MANAGER_CAP_FLAGS_HAS_ROLL_FOLLOW "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("\nuint32 GIMBAL_MANAGER_CAP_FLAGS_HAS_ROLL_LOCK "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v("\nuint32 GIMBAL_MANAGER_CAP_FLAGS_HAS_PITCH_AXIS "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),t._v("\nuint32 GIMBAL_MANAGER_CAP_FLAGS_HAS_PITCH_FOLLOW "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),t._v("\nuint32 GIMBAL_MANAGER_CAP_FLAGS_HAS_PITCH_LOCK "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("128")]),t._v("\nuint32 GIMBAL_MANAGER_CAP_FLAGS_HAS_YAW_AXIS "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("256")]),t._v("\nuint32 GIMBAL_MANAGER_CAP_FLAGS_HAS_YAW_FOLLOW "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("512")]),t._v("\nuint32 GIMBAL_MANAGER_CAP_FLAGS_HAS_YAW_LOCK "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),t._v("\nuint32 GIMBAL_MANAGER_CAP_FLAGS_SUPPORTS_INFINITE_YAW "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2048")]),t._v("\nuint32 GIMBAL_MANAGER_CAP_FLAGS_CAN_POINT_LOCATION_LOCAL "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("65536")]),t._v("\nuint32 GIMBAL_MANAGER_CAP_FLAGS_CAN_POINT_LOCATION_GLOBAL "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("131072")]),t._v("\n\nuint8 gimbal_device_id\n\nfloat32 roll_min # "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("rad"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nfloat32 roll_max # "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("rad"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\nfloat32 pitch_min # "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("rad"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nfloat32 pitch_max # "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("rad"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\nfloat32 yaw_min # "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("rad"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nfloat32 yaw_max # "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("rad"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n")])])])])}),[],!1,null,null,null);a.default=_.exports}}]);