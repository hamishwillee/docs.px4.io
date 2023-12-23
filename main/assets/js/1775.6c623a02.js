(window.webpackJsonp=window.webpackJsonp||[]).push([[1775],{3209:function(t,s,a){"use strict";a.r(s);var n=a(19),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vehiclestatus-uorb-message"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vehiclestatus-uorb-message"}},[t._v("#")]),t._v(" VehicleStatus (UORB message)")]),t._v(" "),a("p",[t._v("Encodes the system state of the vehicle published by commander")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/msg/VehicleStatus.msg",target:"_blank",rel:"noopener noreferrer"}},[t._v("source file"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("Encodes the system state of the vehicle published by commander")])]),t._v("\n\nuint64 timestamp # time since system "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nuint64 armed_time # Arming "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("timestamp")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nuint64 takeoff_time # Takeoff "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("timestamp")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nuint8 arming_state\nuint8 ARMING_STATE_DISARMED "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nuint8 ARMING_STATE_ARMED    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n\nuint8 latest_arming_reason\nuint8 latest_disarming_reason\nuint8 ARM_DISARM_REASON_TRANSITION_TO_STANDBY "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\nuint8 ARM_DISARM_REASON_RC_STICK "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nuint8 ARM_DISARM_REASON_RC_SWITCH "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\nuint8 ARM_DISARM_REASON_COMMAND_INTERNAL "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\nuint8 ARM_DISARM_REASON_COMMAND_EXTERNAL "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\nuint8 ARM_DISARM_REASON_MISSION_START "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\nuint8 ARM_DISARM_REASON_SAFETY_BUTTON "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v("\nuint8 ARM_DISARM_REASON_AUTO_DISARM_LAND "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v("\nuint8 ARM_DISARM_REASON_AUTO_DISARM_PREFLIGHT "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("\nuint8 ARM_DISARM_REASON_KILL_SWITCH "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v("\nuint8 ARM_DISARM_REASON_LOCKDOWN "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\nuint8 ARM_DISARM_REASON_FAILURE_DETECTOR "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v("\nuint8 ARM_DISARM_REASON_SHUTDOWN "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v("\nuint8 ARM_DISARM_REASON_UNIT_TEST "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),t._v("\n\nuint64 nav_state_timestamp # time when current nav_state activated\n\nuint8 nav_state_user_intention                  # Mode that the user "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("selected")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("might be different from nav_state in a failsafe situation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nuint8 nav_state                                 # Currently active mode\nuint8 NAVIGATION_STATE_MANUAL "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("               # Manual mode\nuint8 NAVIGATION_STATE_ALTCTL "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("               # Altitude control mode\nuint8 NAVIGATION_STATE_POSCTL "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("               # Position control mode\nuint8 NAVIGATION_STATE_AUTO_MISSION "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("         # Auto mission mode\nuint8 NAVIGATION_STATE_AUTO_LOITER "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("          # Auto loiter mode\nuint8 NAVIGATION_STATE_AUTO_RTL "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("             # Auto "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" to launch mode\nuint8 NAVIGATION_STATE_POSITION_SLOW "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v("\nuint8 NAVIGATION_STATE_FREE5 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v("\nuint8 NAVIGATION_STATE_FREE4 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("\nuint8 NAVIGATION_STATE_FREE3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v("\nuint8 NAVIGATION_STATE_ACRO "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("                # Acro mode\nuint8 NAVIGATION_STATE_FREE2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v("\nuint8 NAVIGATION_STATE_DESCEND "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v("             # Descend "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mode")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("no position control"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nuint8 NAVIGATION_STATE_TERMINATION "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),t._v("         # Termination mode\nuint8 NAVIGATION_STATE_OFFBOARD "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v("\nuint8 NAVIGATION_STATE_STAB "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),t._v("                # Stabilized mode\nuint8 NAVIGATION_STATE_FREE1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v("\nuint8 NAVIGATION_STATE_AUTO_TAKEOFF "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v("        # Takeoff\nuint8 NAVIGATION_STATE_AUTO_LAND "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),t._v("           # Land\nuint8 NAVIGATION_STATE_AUTO_FOLLOW_TARGET "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("19")]),t._v("  # Auto Follow\nuint8 NAVIGATION_STATE_AUTO_PRECLAND "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("       # Precision land with landing target\nuint8 NAVIGATION_STATE_ORBIT "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),t._v("               # Orbit in a circle\nuint8 NAVIGATION_STATE_AUTO_VTOL_TAKEOFF "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),t._v("   # Takeoff"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" transition"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" establish loiter\nuint8 NAVIGATION_STATE_EXTERNAL1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("23")]),t._v("\nuint8 NAVIGATION_STATE_EXTERNAL2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("24")]),t._v("\nuint8 NAVIGATION_STATE_EXTERNAL3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("25")]),t._v("\nuint8 NAVIGATION_STATE_EXTERNAL4 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("26")]),t._v("\nuint8 NAVIGATION_STATE_EXTERNAL5 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("27")]),t._v("\nuint8 NAVIGATION_STATE_EXTERNAL6 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("28")]),t._v("\nuint8 NAVIGATION_STATE_EXTERNAL7 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("29")]),t._v("\nuint8 NAVIGATION_STATE_EXTERNAL8 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),t._v("\nuint8 NAVIGATION_STATE_MAX "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("31")]),t._v("\n\nuint8 executor_in_charge                        # Current mode executor in "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("charge")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Autopilot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nuint32 valid_nav_states_mask                    # Bitmask "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" all valid nav_state values\nuint32 can_set_nav_states_mask                  # Bitmask "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" all modes that a user can select\n\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("Bitmask of detected failures")])]),t._v("\nuint16 failure_detector_status\nuint16 FAILURE_NONE "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\nuint16 FAILURE_ROLL "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("              # "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nuint16 FAILURE_PITCH "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("             # "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nuint16 FAILURE_ALT "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("               # "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nuint16 FAILURE_EXT "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("               # "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nuint16 FAILURE_ARM_ESC "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v("          # "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nuint16 FAILURE_BATTERY "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),t._v("          # "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nuint16 FAILURE_IMBALANCED_PROP "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),t._v("  # "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nuint16 FAILURE_MOTOR "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("128")]),t._v("           # "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nuint8 hil_state\nuint8 HIL_STATE_OFF "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\nuint8 HIL_STATE_ON "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("If it's a VTOL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" then the value will be VEHICLE_TYPE_ROTARY_WING "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" flying as a multicopter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" and VEHICLE_TYPE_FIXED_WING when flying as a fixed"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("wing")])]),t._v("\nuint8 vehicle_type\nuint8 VEHICLE_TYPE_UNKNOWN "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\nuint8 VEHICLE_TYPE_ROTARY_WING "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nuint8 VEHICLE_TYPE_FIXED_WING "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\nuint8 VEHICLE_TYPE_ROVER "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\nuint8 VEHICLE_TYPE_AIRSHIP "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n\nuint8 FAILSAFE_DEFER_STATE_DISABLED "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\nuint8 FAILSAFE_DEFER_STATE_ENABLED "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nuint8 FAILSAFE_DEFER_STATE_WOULD_FAILSAFE "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" # Failsafes deferred"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" but would trigger a failsafe\n\nbool failsafe # true "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" system is in failsafe "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("state")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("g"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("RTL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Hover"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Terminate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nbool failsafe_and_user_took_over # true "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" system is in failsafe state but the user took over control\nuint8 failsafe_defer_state # one of FAILSAFE_DEFER_STATE_"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("Link loss")])]),t._v("\nbool gcs_connection_lost              # datalink to GCS lost\nuint8 gcs_connection_lost_counter     # counts unique GCS connection lost events\nbool high_latency_data_link_lost # Set to true "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" the high latency data "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("link")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("eg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" RockBlock Iridium "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9603")]),t._v(" telemetry module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" is lost\n\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("VTOL flags")])]),t._v("\nbool is_vtol             # True "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" the system is VTOL capable\nbool is_vtol_tailsitter  # True "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" the system performs a "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("90")]),t._v("° pitch down rotation during transition from MC to FW\nbool in_transition_mode  # True "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" VTOL is doing a transition\nbool in_transition_to_fw # True "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" VTOL is doing a transition from MC to FW\n\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("MAVLink identification")])]),t._v("\nuint8 system_type  # system type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" contains mavlink MAV_TYPE\nuint8 system_id    # system id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" contains MAVLink's system ID field\nuint8 component_id # subsystem "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" component id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" contains MAVLink's component ID field\n\nbool safety_button_available # Set to true "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" a safety button is connected\nbool safety_off # Set to true "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" safety is off\n\nbool power_input_valid                            # set "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" input power is valid\nbool usb_connected                                # set to "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("never cleared"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" once telemetry received from usb link\n\nbool open_drone_id_system_present\nbool open_drone_id_system_healthy\n\nbool parachute_system_present\nbool parachute_system_healthy\n\nbool avoidance_system_required                    # Set to true "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" avoidance system is enabled via COM_OBS_AVOID parameter\nbool avoidance_system_valid                       # Status of the obstacle avoidance system\n\nbool rc_calibration_in_progress\nbool calibration_enabled\n\nbool pre_flight_checks_pass     # true "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" all checks necessary to arm pass\n\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);