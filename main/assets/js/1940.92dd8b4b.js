(window.webpackJsonp=window.webpackJsonp||[]).push([[1940],{3572:function(t,a,s){"use strict";s.r(a);var n=s(19),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"npfgstatus-uorb-message"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#npfgstatus-uorb-message"}},[t._v("#")]),t._v(" NpfgStatus (UORB message)")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/msg/NpfgStatus.msg",target:"_blank",rel:"noopener noreferrer"}},[t._v("source file"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[t._v("uint64 timestamp                # time since system "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nuint8 wind_est_valid            # "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("boolean"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" true "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" wind estimate is valid and"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("or being used by "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("controller")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("also indicates "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" wind est usage is disabled despite being valid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfloat32 lat_accel               # resultant lateral acceleration reference "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("m"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nfloat32 lat_accel_ff            # lateral acceleration demand only "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" maintaining curvature "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("m"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nfloat32 bearing_feas            # bearing feasibility "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nfloat32 bearing_feas_on_track   # on"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("track bearing feasibility "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nfloat32 signed_track_error      # "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("signed")]),t._v(" track error "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("m"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nfloat32 track_error_bound       # track error bound "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("m"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nfloat32 airspeed_ref            # "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("true"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" airspeed reference "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("m"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nfloat32 bearing                 # bearing angle "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("rad"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nfloat32 heading_ref             # heading angle reference "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("rad"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nfloat32 min_ground_speed_ref    # minimum forward ground speed reference "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("m"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nfloat32 adapted_period          # adapted "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("period")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("auto")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("tuning enabled"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nfloat32 p_gain                  # controller proportional gain "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("rad"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nfloat32 time_const              # controller time constant "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);