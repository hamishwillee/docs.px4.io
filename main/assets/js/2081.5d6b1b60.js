(window.webpackJsonp=window.webpackJsonp||[]).push([[2081],{3825:function(t,a,e){"use strict";e.r(a);var s=e(19),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"failsafeflags-uorb-message"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#failsafeflags-uorb-message"}},[t._v("#")]),t._v(" FailsafeFlags (UORB message)")]),t._v(" "),e("p",[t._v("Input flags for the failsafe state machine set by the arming & health checks.")]),t._v(" "),e("p",[t._v("Flags must be named such that false == no failure (e.g. _invalid, _unhealthy, _lost) The flag comments are used as label for the failsafe state machine simulation")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/msg/FailsafeFlags.msg",target:"_blank",rel:"noopener noreferrer"}},[t._v("source file"),e("OutboundLink")],1)]),t._v(" "),e("div",{staticClass:"language-c extra-class"},[e("pre",{pre:!0,attrs:{class:"language-c"}},[e("code",[e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token expression"}},[t._v("Input flags "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" the failsafe state machine set by the arming "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" health checks"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])])]),t._v("\n#\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token expression"}},[t._v("Flags must be named such that false "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" no "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("failure")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("g"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" _invalid"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" _unhealthy"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" _lost"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token expression"}},[t._v("The flag comments are used as label "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" the failsafe state machine simulation")])]),t._v("\n\nuint64 timestamp                # time since system "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token expression"}},[t._v("Per"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("mode requirements")])]),t._v("\nuint32 mode_req_angular_velocity\nuint32 mode_req_attitude\nuint32 mode_req_local_alt\nuint32 mode_req_local_position\nuint32 mode_req_local_position_relaxed\nuint32 mode_req_global_position\nuint32 mode_req_mission\nuint32 mode_req_offboard_signal\nuint32 mode_req_home_position\nuint32 mode_req_wind_and_flight_time_compliance # "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" set"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mode cannot be entered "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" wind or flight time limit exceeded\nuint32 mode_req_prevent_arming    # "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" set"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cannot arm "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" in this mode\nuint32 mode_req_manual_control\nuint32 mode_req_other             # other requirements"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" not covered "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("above")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" external modes"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token expression"}},[t._v("Mode requirements")])]),t._v("\nbool angular_velocity_invalid         # Angular velocity invalid\nbool attitude_invalid                 # Attitude invalid\nbool local_altitude_invalid           # Local altitude invalid\nbool local_position_invalid           # Local position estimate invalid\nbool local_position_invalid_relaxed   # Local position with reduced accuracy requirements "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("invalid")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("g"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" flying with optical flow"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nbool local_velocity_invalid           # Local velocity estimate invalid\nbool global_position_invalid          # Global position estimate invalid\nbool auto_mission_missing             # No mission available\nbool offboard_control_signal_lost     # Offboard signal lost\nbool home_position_invalid            # No home position available\n\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token expression"}},[t._v("Control links")])]),t._v("\nbool manual_control_signal_lost       # Manual "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("control")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("RC"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" signal lost\nbool gcs_connection_lost              # GCS connection lost\n\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token expression"}},[t._v("Battery")])]),t._v("\nuint8 battery_warning                 # Battery warning level\nbool battery_low_remaining_time       # Low battery based on remaining flight time\nbool battery_unhealthy                # Battery unhealthy\n\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token expression"}},[t._v("Other")])]),t._v("\nbool geofence_breached                # Geofence "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("breached")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("one or multiple"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nbool mission_failure                  # Mission failure\nbool vtol_fixed_wing_system_failure   # vehicle in fixed"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("wing system failure failsafe "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mode")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("after quad"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("chute"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nbool wind_limit_exceeded              # Wind limit exceeded\nbool flight_time_limit_exceeded       # Maximum flight time exceeded\nbool local_position_accuracy_low      # Local position estimate has dropped below threshold"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" but is currently still declared valid\n\n"),e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token expression"}},[t._v("Failure detector")])]),t._v("\nbool fd_critical_failure              # Critical "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("failure")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("attitude"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("altitude limit exceeded"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" or external ATS"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nbool fd_esc_arming_failure            # ESC failed to arm\nbool fd_imbalanced_prop               # Imbalanced propeller detected\nbool fd_motor_failure                 # Motor failure\n\n\n\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);