(window.webpackJsonp=window.webpackJsonp||[]).push([[1898],{3532:function(t,a,s){"use strict";s.r(a);var n=s(19),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"followtargetstatus-uorb-message"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#followtargetstatus-uorb-message"}},[t._v("#")]),t._v(" FollowTargetStatus (UORB message)")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/msg/FollowTargetStatus.msg",target:"_blank",rel:"noopener noreferrer"}},[t._v("source file"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[t._v("uint64 timestamp                  # "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("microseconds"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" time since system start\n\nfloat32 tracked_target_course     # "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("rad"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Tracked target course in NED local "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("frame")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("North is course zero"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfloat32 follow_angle              # "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("rad"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Current follow angle setting\n\nfloat32 orbit_angle_setpoint      # "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("rad"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Current orbit angle setpoint from the smooth trajectory generator\nfloat32 angular_rate_setpoint     # "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("rad"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Angular rate commanded from Jerk"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("limited Orbit Angle trajectory "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" Orbit Angle\n\nfloat32"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" desired_position_raw   # "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("m"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Raw "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'idealistic'")]),t._v(" desired drone position "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" a drone could teleport from place to places\n\nbool in_emergency_ascent          # "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("bool"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" True when doing emergency "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ascent")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("when distance to ground is below safety altitude"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfloat32 gimbal_pitch              # "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("rad"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Gimbal pitch commanded to track target in the center of the frame\n\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);