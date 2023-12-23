(window.webpackJsonp=window.webpackJsonp||[]).push([[1182],{2306:function(t,e,s){"use strict";s.r(e);var a=s(19),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"estimatorstatus-uorb-message"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#estimatorstatus-uorb-message"}},[t._v("#")]),t._v(" EstimatorStatus (UORB message)")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/msg/EstimatorStatus.msg",target:"_blank",rel:"noopener noreferrer"}},[t._v("source file"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[t._v("uint64 timestamp\t\t# time since system "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nuint64 timestamp_sample         # the timestamp of the raw "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nfloat32"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" output_tracking_error # "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" a vector containing the output predictor angular"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" velocity and position tracking error "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("magnitudes")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rad"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("m"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("m"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nuint16 gps_check_fail_flags     # Bitmask to indicate status of GPS checks "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" see definition below\n"),s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("bits")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token expression"}},[t._v("are true when corresponding test has failed")])]),t._v("\nuint8 GPS_CHECK_FAIL_GPS_FIX "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\t\t# "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" insufficient fix "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("no "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("D solution"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nuint8 GPS_CHECK_FAIL_MIN_SAT_COUNT "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\t\t# "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" minimum required sat count fail\nuint8 GPS_CHECK_FAIL_MAX_PDOP "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\t\t# "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" maximum allowed PDOP fail\nuint8 GPS_CHECK_FAIL_MAX_HORZ_ERR "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\t\t# "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" maximum allowed horizontal position error fail\nuint8 GPS_CHECK_FAIL_MAX_VERT_ERR "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\t\t# "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" maximum allowed vertical position error fail\nuint8 GPS_CHECK_FAIL_MAX_SPD_ERR "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\t\t# "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" maximum allowed speed error fail\nuint8 GPS_CHECK_FAIL_MAX_HORZ_DRIFT "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v("\t\t# "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" maximum allowed horizontal position drift fail "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" requires stationary vehicle\nuint8 GPS_CHECK_FAIL_MAX_VERT_DRIFT "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v("\t\t# "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" maximum allowed vertical position drift fail "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" requires stationary vehicle\nuint8 GPS_CHECK_FAIL_MAX_HORZ_SPD_ERR "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("\t# "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" maximum allowed horizontal speed fail "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" requires stationary vehicle\nuint8 GPS_CHECK_FAIL_MAX_VERT_SPD_ERR "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v("\t# "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" maximum allowed vertical velocity discrepancy fail\n\nuint64 control_mode_flags\t# Bitmask to indicate EKF logic state\nuint8 CS_TILT_ALIGN "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\t\t# "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" true "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" the filter tilt alignment is complete\nuint8 CS_YAW_ALIGN "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\t\t# "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" true "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" the filter yaw alignment is complete\nuint8 CS_GPS "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\t\t# "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" true "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" GPS measurements are being fused\nuint8 CS_OPT_FLOW "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\t\t# "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" true "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" optical flow measurements are being fused\nuint8 CS_MAG_HDG "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\t\t# "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" true "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" a simple magnetic yaw heading is being fused\nuint8 CS_MAG_3D "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\t\t# "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" true "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("axis magnetometer measurement are being fused\nuint8 CS_MAG_DEC "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v("\t\t# "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" true "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" synthetic magnetic declination measurements are being fused\nuint8 CS_IN_AIR "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v("\t\t# "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" true when thought to be airborne\nuint8 CS_WIND "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("\t\t# "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" true when wind velocity is being estimated\nuint8 CS_BARO_HGT "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v("\t\t# "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" true when baro height is being fused as a primary height reference\nuint8 CS_RNG_HGT "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\t\t# "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" true when range finder height is being fused as a primary height reference\nuint8 CS_GPS_HGT "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v("\t\t# "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" true when GPS height is being fused as a primary height reference\nuint8 CS_EV_POS "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v("\t\t# "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" true when local position data from external vision is being fused\nuint8 CS_EV_YAW "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),t._v("\t\t# "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" true when yaw data from external vision measurements is being fused\nuint8 CS_EV_HGT "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v("\t\t# "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" true when height data from external vision measurements is being fused\nuint8 CS_BETA "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),t._v("\t\t# "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" true when synthetic sideslip measurements are being fused\nuint8 CS_MAG_FIELD "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v("\t\t# "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" true when only the magnetic field states are updated by the magnetometer\nuint8 CS_FIXED_WING "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v("\t# "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" true when thought to be operating as a fixed wing vehicle with constrained sideslip\nuint8 CS_MAG_FAULT "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),t._v("\t\t# "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" true when the magnetometer has been declared faulty and is no longer being used\nuint8 CS_ASPD "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("19")]),t._v("\t\t# "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("19")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" true when airspeed measurements are being fused\nuint8 CS_GND_EFFECT "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("\t# "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" true when when protection from ground effect induced "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" pressure rise is active\nuint8 CS_RNG_STUCK "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),t._v("\t\t# "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" true when a stuck range finder sensor has been detected\nuint8 CS_GPS_YAW "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),t._v("\t\t# "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" true when "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yaw")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("not ground course"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" data from a GPS receiver is being fused\nuint8 CS_MAG_ALIGNED "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("23")]),t._v("\t# "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("23")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" true when the in"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("flight mag field alignment has been completed\nuint8 CS_EV_VEL "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("24")]),t._v("\t\t# "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("24")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" true when local frame velocity data fusion from external vision measurements is intended\nuint8 CS_SYNTHETIC_MAG_Z "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("25")]),t._v("\t# "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("25")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" true when we are using a synthesized measurement "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" the magnetometer Z component\nuint8 CS_VEHICLE_AT_REST "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("26")]),t._v("\t# "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("26")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" true when the vehicle is at rest\nuint8 CS_GPS_YAW_FAULT "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("27")]),t._v("\t# "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("27")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" true when the GNSS heading has been declared faulty and is no longer being used\nuint8 CS_RNG_FAULT "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("28")]),t._v("\t\t# "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("28")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" true when the range finder has been declared faulty and is no longer being used\n\nuint32 filter_fault_flags\t# Bitmask to indicate EKF internal faults\n# "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" true "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" the fusion of the magnetometer X"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("axis has encountered a numerical error\n# "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" true "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" the fusion of the magnetometer Y"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("axis has encountered a numerical error\n# "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" true "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" the fusion of the magnetometer Z"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("axis has encountered a numerical error\n# "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" true "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" the fusion of the magnetic heading has encountered a numerical error\n# "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" true "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" the fusion of the magnetic declination has encountered a numerical error\n# "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" true "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" fusion of the airspeed has encountered a numerical error\n# "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" true "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" fusion of the synthetic sideslip constraint has encountered a numerical error\n# "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" true "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" fusion of the optical flow X axis has encountered a numerical error\n# "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" true "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" fusion of the optical flow Y axis has encountered a numerical error\n# "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" true "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" fusion of the North velocity has encountered a numerical error\n# "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" true "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" fusion of the East velocity has encountered a numerical error\n# "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" true "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" fusion of the Down velocity has encountered a numerical error\n# "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" true "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" fusion of the North position has encountered a numerical error\n# "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" true "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" fusion of the East position has encountered a numerical error\n# "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" true "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" fusion of the Down position has encountered a numerical error\n# "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" true "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" bad delta velocity bias estimates have been detected\n# "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" true "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" bad vertical accelerometer data has been detected\n# "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" true "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" delta velocity data contains "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("clipping")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("asymmetric railing"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nfloat32 pos_horiz_accuracy # "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Sigma estimated horizontal position accuracy relative to the estimators "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("origin")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("m"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfloat32 pos_vert_accuracy # "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Sigma estimated vertical position accuracy relative to the estimators "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("origin")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("m"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nuint16 innovation_check_flags # Bitmask to indicate pass"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("fail status of innovation consistency checks\n# "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" true "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" velocity observations have been rejected\n# "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" true "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" horizontal position observations have been rejected\n# "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" true "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" true "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" vertical position observations have been rejected\n# "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" true "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" the X magnetometer observation has been rejected\n# "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" true "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" the Y magnetometer observation has been rejected\n# "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" true "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" the Z magnetometer observation has been rejected\n# "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" true "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" the yaw observation has been rejected\n# "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" true "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" the airspeed observation has been rejected\n# "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" true "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" the synthetic sideslip observation has been rejected\n# "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" true "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" the height above ground observation has been rejected\n# "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" true "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" the X optical flow observation has been rejected\n# "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" true "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" the Y optical flow observation has been rejected\n\nfloat32 mag_test_ratio # ratio of the largest magnetometer innovation component to the innovation test limit\nfloat32 vel_test_ratio # ratio of the largest velocity innovation component to the innovation test limit\nfloat32 pos_test_ratio # ratio of the largest horizontal position innovation component to the innovation test limit\nfloat32 hgt_test_ratio # ratio of the vertical position innovation to the innovation test limit\nfloat32 tas_test_ratio # ratio of the true airspeed innovation to the innovation test limit\nfloat32 hagl_test_ratio # ratio of the height above ground innovation to the innovation test limit\nfloat32 beta_test_ratio # ratio of the synthetic sideslip innovation to the innovation test limit\n\nuint16 solution_status_flags # Bitmask indicating which filter kinematic state outputs are valid "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" flight control use"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n# "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" True "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" the attitude estimate is good\n# "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" True "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" the horizontal velocity estimate is good\n# "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" True "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" the vertical velocity estimate is good\n# "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" True "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" the horizontal "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("position")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("relative"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" estimate is good\n# "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" True "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" the horizontal "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("position")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("absolute"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" estimate is good\n# "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" True "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" the vertical "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("position")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("absolute"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" estimate is good\n# "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" True "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" the vertical "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("position")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("above ground"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" estimate is good\n# "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" True "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" the EKF is in a constant position mode and is not using external "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("measurements")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("eg GPS or optical flow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n# "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" True "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" the EKF has sufficient data to enter a mode that will provide "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("relative"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" position estimate\n# "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" True "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" the EKF has sufficient data to enter a mode that will provide "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("absolute"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" position estimate\n# "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" True "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" the EKF has detected a GPS glitch\n# "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" True "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" the EKF has detected bad accelerometer data\n\nuint8 reset_count_vel_ne # number of horizontal position reset "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("events")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("allow to wrap "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" count exceeds "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nuint8 reset_count_vel_d  # number of vertical velocity reset "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("events")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("allow to wrap "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" count exceeds "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nuint8 reset_count_pos_ne # number of horizontal position reset "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("events")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("allow to wrap "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" count exceeds "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nuint8 reset_count_pod_d  # number of vertical position reset "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("events")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("allow to wrap "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" count exceeds "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nuint8 reset_count_quat   # number of quaternion reset "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("events")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("allow to wrap "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" count exceeds "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nfloat32 time_slip # cumulative amount of time in seconds that the EKF inertial calculation has slipped relative to system time\n\nbool pre_flt_fail_innov_heading\nbool pre_flt_fail_innov_vel_horiz\nbool pre_flt_fail_innov_vel_vert\nbool pre_flt_fail_innov_height\nbool pre_flt_fail_mag_field_disturbed\n\nuint32 accel_device_id\nuint32 gyro_device_id\nuint32 baro_device_id\nuint32 mag_device_id\n\n"),s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("legacy")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token expression"}},[t._v("local position "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("estimator")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("LPE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" flags")])]),t._v("\nuint8 health_flags\t\t# Bitmask to indicate sensor health "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("states")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pos"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hgt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nuint8 timeout_flags\t\t# Bitmask to indicate timeout "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("flags")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pos"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hgt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nfloat32 mag_inclination_deg\nfloat32 mag_inclination_ref_deg\nfloat32 mag_strength_gs\nfloat32 mag_strength_ref_gs\n\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);