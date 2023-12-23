(window.webpackJsonp=window.webpackJsonp||[]).push([[2073],{3818:function(t,a,s){"use strict";s.r(a);var e=s(19),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"estimatorgpsstatus-uorb-message"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#estimatorgpsstatus-uorb-message"}},[t._v("#")]),t._v(" EstimatorGpsStatus (UORB message)")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/msg/EstimatorGpsStatus.msg",target:"_blank",rel:"noopener noreferrer"}},[t._v("source file"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[t._v("uint64 timestamp                          # time since system "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nuint64 timestamp_sample                   # the timestamp of the raw "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nbool checks_passed\n\nbool check_fail_gps_fix          # "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" insufficient fix "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("no "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("D solution"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nbool check_fail_min_sat_count    # "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" minimum required sat count fail\nbool check_fail_max_pdop         # "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" maximum allowed PDOP fail\nbool check_fail_max_horz_err     # "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" maximum allowed horizontal position error fail\nbool check_fail_max_vert_err     # "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" maximum allowed vertical position error fail\nbool check_fail_max_spd_err      # "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" maximum allowed speed error fail\nbool check_fail_max_horz_drift   # "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" maximum allowed horizontal position drift fail "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" requires stationary vehicle\nbool check_fail_max_vert_drift   # "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" maximum allowed vertical position drift fail "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" requires stationary vehicle\nbool check_fail_max_horz_spd_err # "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" maximum allowed horizontal speed fail "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" requires stationary vehicle\nbool check_fail_max_vert_spd_err # "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" maximum allowed vertical velocity discrepancy fail\n\nfloat32 position_drift_rate_horizontal_m_s # Horizontal position rate "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("magnitude")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("m"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfloat32 position_drift_rate_vertical_m_s   # Vertical position rate "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("magnitude")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("m"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfloat32 filtered_horizontal_speed_m_s      # Filtered horizontal velocity "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("magnitude")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("m"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);