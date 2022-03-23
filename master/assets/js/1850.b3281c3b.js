(window.webpackJsonp=window.webpackJsonp||[]).push([[1850],{3309:function(t,s,a){"use strict";a.r(s);var n=a(19),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vehicle-status-uorb-message"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vehicle-status-uorb-message"}},[t._v("#")]),t._v(" vehicle_status (UORB message)")]),t._v(" "),a("p",[t._v("If you change the order, add or remove arming_state_t states make sure to update the arrays in state_machine_helper.cpp as well.")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/msg/vehicle_status.msg",target:"_blank",rel:"noopener noreferrer"}},[t._v("source file"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("If you change the order"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" add or remove "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("arming_state_t")]),t._v(" states make sure to update the arrays")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("state_machine_helper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cpp as well"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])])]),t._v("\nuint64 timestamp                # time since system "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nuint8 ARMING_STATE_INIT "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\nuint8 ARMING_STATE_STANDBY "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nuint8 ARMING_STATE_ARMED "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\nuint8 ARMING_STATE_STANDBY_ERROR "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\nuint8 ARMING_STATE_SHUTDOWN "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\nuint8 ARMING_STATE_IN_AIR_RESTORE "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\nuint8 ARMING_STATE_MAX "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("FailureDetector status")])]),t._v("\nuint8 FAILURE_NONE "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\nuint8 FAILURE_ROLL "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("          # "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nuint8 FAILURE_PITCH "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("         # "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nuint8 FAILURE_ALT "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("           # "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nuint8 FAILURE_EXT "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("           # "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nuint8 FAILURE_ARM_ESC "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v("      # "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nuint8 FAILURE_HIGH_WIND "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),t._v("        # "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nuint8 FAILURE_BATTERY "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),t._v("          # "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nuint8 FAILURE_IMBALANCED_PROP "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("128")]),t._v(" # "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("HIL")])]),t._v("\nuint8 HIL_STATE_OFF "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\nuint8 HIL_STATE_ON "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("Navigation state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" ")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"what should vehicle do"')]),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])])]),t._v("\nuint8 NAVIGATION_STATE_MANUAL "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("       # Manual mode\nuint8 NAVIGATION_STATE_ALTCTL "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("       # Altitude control mode\nuint8 NAVIGATION_STATE_POSCTL "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("       # Position control mode\nuint8 NAVIGATION_STATE_AUTO_MISSION "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("     # Auto mission mode\nuint8 NAVIGATION_STATE_AUTO_LOITER "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("      # Auto loiter mode\nuint8 NAVIGATION_STATE_AUTO_RTL "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("     # Auto "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" to launch mode\nuint8 NAVIGATION_STATE_AUTO_LANDENGFAIL "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("     # Auto land on engine failure\nuint8 NAVIGATION_STATE_UNUSED "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v("           # Free slot\nuint8 NAVIGATION_STATE_ACRO "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("        # Acro mode\nuint8 NAVIGATION_STATE_UNUSED1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v("     # Free slot\nuint8 NAVIGATION_STATE_DESCEND "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v("     # Descend "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mode")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("no position control"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nuint8 NAVIGATION_STATE_TERMINATION "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),t._v("     # Termination mode\nuint8 NAVIGATION_STATE_OFFBOARD "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v("\nuint8 NAVIGATION_STATE_STAB "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),t._v("        # Stabilized mode\nuint8 NAVIGATION_STATE_UNUSED2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v("     # Free slot\nuint8 NAVIGATION_STATE_AUTO_TAKEOFF "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v("    # Takeoff\nuint8 NAVIGATION_STATE_AUTO_LAND "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),t._v("       # Land\nuint8 NAVIGATION_STATE_AUTO_FOLLOW_TARGET "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("19")]),t._v("  # Auto Follow\nuint8 NAVIGATION_STATE_AUTO_PRECLAND "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("   # Precision land with landing target\nuint8 NAVIGATION_STATE_ORBIT "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),t._v("       # Orbit in a circle\nuint8 NAVIGATION_STATE_AUTO_VTOL_TAKEOFF "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),t._v("   # Takeoff"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" transition"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" establish loiter\nuint8 NAVIGATION_STATE_MAX "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("23")]),t._v("\n\nuint8 VEHICLE_TYPE_UNKNOWN "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\nuint8 VEHICLE_TYPE_ROTARY_WING "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nuint8 VEHICLE_TYPE_FIXED_WING "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\nuint8 VEHICLE_TYPE_ROVER "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\nuint8 VEHICLE_TYPE_AIRSHIP "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("state")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("machine "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" state of vehicle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("Encodes the complete system state and is set by the commander app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])])]),t._v("\n\nuint8 nav_state             # set navigation state machine to specified value\nuint64 nav_state_timestamp              # time when current nav_state activated\nuint8 arming_state          # current arming state\nuint8 hil_state             # current hil state\nbool failsafe               # true "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" system is in failsafe "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("state")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("g"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("RTL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Hover"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Terminate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nuint64 failsafe_timestamp               # time when failsafe was activated\n\nuint8 system_type           # system type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" contains mavlink MAV_TYPE\nuint8 system_id         # system id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" contains MAVLink's system ID field\nuint8 component_id          # subsystem "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" component id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" contains MAVLink's component ID field\n\nuint8 vehicle_type          # Type of "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vehicle")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fixed"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("wing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rotary wing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ground"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                            "),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("If the vehicle is a VTOL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" then this value will be VEHICLE_TYPE_ROTARY_WING "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" flying as a multicopter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")])])]),t._v("\n                            "),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("and")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("VEHICLE_TYPE_FIXED_WING when flying as a fixed"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("wing")])]),t._v("\n\nbool is_vtol                # True "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" the system is VTOL capable\nbool is_vtol_tailsitter                 # True "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" the system performs a "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("90")]),t._v("° pitch down rotation during transition from MC to FW\nbool vtol_fw_permanent_stab     # True "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" VTOL should stabilize attitude "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" fw in manual mode\nbool in_transition_mode         # True "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" VTOL is doing a transition\nbool in_transition_to_fw        # True "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" VTOL is doing a transition from MC to FW\n\nbool rc_signal_lost             # true "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" RC reception lost\n\nbool data_link_lost             # datalink to GCS lost\nuint8 data_link_lost_counter            # counts unique data link lost events\n\nbool high_latency_data_link_lost            # Set to true "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" the high latency data "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("link")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("eg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" RockBlock Iridium "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9603")]),t._v(" telemetry module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" is lost\n\nbool engine_failure             # Set to true "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" an engine failure is detected\nbool mission_failure                # Set to true "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" mission could not "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("continue")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("finish\nbool geofence_violated\n\nuint8 failure_detector_status           # Bitmask containing FailureDetector status "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" FAILURE_ALT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" FAILURE_PITCH"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" FAILURE_ROLL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("see")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("SYS_STATUS mavlink message "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" the following")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("lower")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),t._v(" bits are "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" the base flags"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" higher "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),t._v(" bits are or the extended flags")])]),t._v("\nuint64 onboard_control_sensors_present\nuint64 onboard_control_sensors_enabled\nuint64 onboard_control_sensors_health\n\n\nuint8 ARM_DISARM_REASON_TRANSITION_TO_STANDBY "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\nuint8 ARM_DISARM_REASON_RC_STICK "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nuint8 ARM_DISARM_REASON_RC_SWITCH "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\nuint8 ARM_DISARM_REASON_COMMAND_INTERNAL "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\nuint8 ARM_DISARM_REASON_COMMAND_EXTERNAL "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\nuint8 ARM_DISARM_REASON_MISSION_START "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\nuint8 ARM_DISARM_REASON_SAFETY_BUTTON "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v("\nuint8 ARM_DISARM_REASON_AUTO_DISARM_LAND "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v("\nuint8 ARM_DISARM_REASON_AUTO_DISARM_PREFLIGHT "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("\nuint8 ARM_DISARM_REASON_KILL_SWITCH "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v("\nuint8 ARM_DISARM_REASON_LOCKDOWN "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\nuint8 ARM_DISARM_REASON_FAILURE_DETECTOR "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v("\nuint8 ARM_DISARM_REASON_SHUTDOWN "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v("\nuint8 ARM_DISARM_REASON_UNIT_TEST "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),t._v("\n\nuint8 latest_arming_reason\nuint8 latest_disarming_reason\n\nuint64 armed_time       # Arming "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("timestamp")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nuint64 takeoff_time     # Takeoff "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("timestamp")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);