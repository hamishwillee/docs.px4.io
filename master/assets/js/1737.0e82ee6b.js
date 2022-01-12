(window.webpackJsonp=window.webpackJsonp||[]).push([[1737],{3160:function(s,t,a){"use strict";a.r(t);var e=a(19),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"manual-control-setpoint-uorb-message"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#manual-control-setpoint-uorb-message"}},[s._v("#")]),s._v(" manual_control_setpoint (UORB message)")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/msg/manual_control_setpoint.msg",target:"_blank",rel:"noopener noreferrer"}},[s._v("source file"),a("OutboundLink")],1)]),s._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[s._v("uint64 timestamp                        # time since system "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("start")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("microseconds"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nuint64 timestamp_sample                 # the timestamp of the raw "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("data")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("microseconds"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nbool valid\n\nuint8 SOURCE_UNKNOWN   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nuint8 SOURCE_RC        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("      # radio "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("control")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("input_rc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nuint8 SOURCE_MAVLINK_0 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("      # mavlink instance "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nuint8 SOURCE_MAVLINK_1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("      # mavlink instance "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nuint8 SOURCE_MAVLINK_2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("      # mavlink instance "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\nuint8 SOURCE_MAVLINK_3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("      # mavlink instance "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\nuint8 SOURCE_MAVLINK_4 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("      # mavlink instance "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("\nuint8 SOURCE_MAVLINK_5 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("      # mavlink instance "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n\nuint8 data_source\n\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[s._v("Any of the channels may not be available and be set to NaN")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("to")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[s._v("indicate that it does not contain valid data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[s._v("The variable names follow the definition of the")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[s._v("MANUAL_CONTROL mavlink message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[s._v("The "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" range is from "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" to "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("mavlink message "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v(" to "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")])])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[s._v("The range "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" the z variable is defined from "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" to "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("The z field of")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("the")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[s._v("MANUAL_CONTROL mavlink message is defined from "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v(" to "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")])])]),s._v("\n\nfloat32 x            # stick position in x direction "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),s._v("\n                 "),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[s._v("general corresponds to forward"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("back motion or pitch of vehicle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")])])]),s._v("\n                 "),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[s._v("general a positive value means forward or negative pitch and")])]),s._v("\n                 "),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("a")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[s._v("negative value means backward or positive pitch")])]),s._v("\n\nfloat32 y            # stick position in y direction "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),s._v("\n                 "),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[s._v("general corresponds to right"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("left motion or roll of vehicle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")])])]),s._v("\n                 "),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[s._v("general a positive value means right or positive roll and")])]),s._v("\n                 "),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("a")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[s._v("negative value means left or negative roll")])]),s._v("\n\nfloat32 z            # throttle stick position "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),s._v("\n                 "),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[s._v("general corresponds to up"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("down motion or thrust of vehicle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")])])]),s._v("\n                 "),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[s._v("general the value corresponds to the demanded throttle by the user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")])])]),s._v("\n                 "),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[s._v("the input is used "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" setting the setpoint of a vertical position")])]),s._v("\n                 "),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("controller")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[s._v("any value "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.5")]),s._v(" means up and any value "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.5")]),s._v(" means down")])]),s._v("\n\nfloat32 r            # yaw stick"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("twist position"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),s._v("\n                 "),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[s._v("general corresponds to the righthand rotation around the vertical")])]),s._v("\n                 # "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("downwards"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" axis of the vehicle\n\nfloat32 flaps            # flap position\n\nfloat32 aux1\nfloat32 aux2\nfloat32 aux3\nfloat32 aux4\nfloat32 aux5\nfloat32 aux6\n\nbool sticks_moving\n\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[s._v("TOPICS manual_control_setpoint manual_control_input")])]),s._v("\n\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);