(window.webpackJsonp=window.webpackJsonp||[]).push([[1592],{2938:function(t,a,s){"use strict";s.r(a);var e=s(19),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"tecsstatus-uorb-message"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tecsstatus-uorb-message"}},[t._v("#")]),t._v(" TecsStatus (UORB message)")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/msg/TecsStatus.msg",target:"_blank",rel:"noopener noreferrer"}},[t._v("source file"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[t._v("uint64 timestamp        # time since system "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nfloat32 altitude_sp         # Altitude setpoint AMSL "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("m"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nfloat32 altitude_reference      # Altitude setpoint reference AMSL "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("m"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nfloat32 height_rate_reference       # Height rate setpoint reference "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("m"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nfloat32 height_rate_direct      # Direct height rate setpoint from velocity reference generator "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("m"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nfloat32 height_rate_setpoint        # Height rate setpoint "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("m"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nfloat32 height_rate         # Height rate "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("m"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nfloat32 equivalent_airspeed_sp      # Equivalent airspeed setpoint "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("m"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nfloat32 true_airspeed_sp        # True airspeed setpoint "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("m"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nfloat32 true_airspeed_filtered      # True airspeed filtered "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("m"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nfloat32 true_airspeed_derivative_sp # True airspeed derivative setpoint "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("m"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nfloat32 true_airspeed_derivative    # True airspeed derivative "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("m"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nfloat32 true_airspeed_derivative_raw    # True airspeed derivative raw "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("m"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\nfloat32 total_energy_rate_sp        # Total energy rate setpoint "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("m"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nfloat32 total_energy_rate       # Total energy rate estimate "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("m"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\nfloat32 total_energy_balance_rate_sp    # Energy balance rate setpoint "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("m"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nfloat32 total_energy_balance_rate   # Energy balance rate estimate "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("m"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\nfloat32 throttle_integ          # Throttle integrator value "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nfloat32 pitch_integ         # Pitch integrator value "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("rad"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\nfloat32 throttle_sp         # Current throttle setpoint "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nfloat32 pitch_sp_rad            # Current pitch setpoint "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("rad"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nfloat32 throttle_trim           # estimated throttle value "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" required to fly level at equivalent_airspeed_sp in the current atmospheric conditions\n\n"),s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token expression"}},[t._v("TECS mode")])]),t._v("\nuint8 mode\nuint8 TECS_MODE_NORMAL "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\nuint8 TECS_MODE_UNDERSPEED "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);