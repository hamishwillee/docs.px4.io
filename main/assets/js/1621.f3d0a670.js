(window.webpackJsonp=window.webpackJsonp||[]).push([[1621],{2969:function(t,s,a){"use strict";a.r(s);var e=a(19),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vehiclelocalposition-uorb-message"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vehiclelocalposition-uorb-message"}},[t._v("#")]),t._v(" VehicleLocalPosition (UORB message)")]),t._v(" "),a("p",[t._v("Fused local position in NED. The coordinate system origin is the vehicle position at the time when the EKF2-module was started.")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/msg/VehicleLocalPosition.msg",target:"_blank",rel:"noopener noreferrer"}},[t._v("source file"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("Fused local position in NED"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("The coordinate system origin is the vehicle position at the time when the EKF2"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("module was started"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])])]),t._v("\n\nuint64 timestamp            # time since system "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nuint64 timestamp_sample                 # the timestamp of the raw "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nbool xy_valid               # true "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" x and y are valid\nbool z_valid                # true "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" z is valid\nbool v_xy_valid             # true "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" vx and vy are valid\nbool v_z_valid              # true "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" vz is valid\n\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("Position in local NED frame")])]),t._v("\nfloat32 x               # North position in NED earth"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("fixed frame"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("metres"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfloat32 y               # East position in NED earth"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("fixed frame"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("metres"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfloat32 z               # Down "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("position")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("negative altitude"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" in NED earth"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("fixed frame"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("metres"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("Position reset delta")])]),t._v("\nfloat32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" delta_xy\nuint8 xy_reset_counter\n\nfloat32 delta_z\nuint8 z_reset_counter\n\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("Velocity in NED frame")])]),t._v("\nfloat32 vx              # North velocity in NED earth"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("fixed frame"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("metres"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfloat32 vy              # East velocity in NED earth"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("fixed frame"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("metres"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfloat32 vz              # Down velocity in NED earth"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("fixed frame"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("metres"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfloat32 z_deriv             # Down position time derivative in NED earth"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("fixed frame"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("metres"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("Velocity reset delta")])]),t._v("\nfloat32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" delta_vxy\nuint8 vxy_reset_counter\n\nfloat32 delta_vz\nuint8 vz_reset_counter\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("Acceleration in NED frame")])]),t._v("\nfloat32 ax        # North velocity derivative in NED earth"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("fixed frame"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("metres"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("sec"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfloat32 ay        # East velocity derivative in NED earth"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("fixed frame"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("metres"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("sec"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfloat32 az        # Down velocity derivative in NED earth"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("fixed frame"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("metres"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("sec"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nfloat32 heading             # Euler yaw angle transforming the tangent plane relative to NED earth"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("fixed frame"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("PI"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("PI"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("radians"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfloat32 delta_heading\nuint8 heading_reset_counter\nbool heading_good_for_control\n\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("Position of reference "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("point")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("local NED frame origin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" in "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("global")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("GPS "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" WGS84"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" frame")])]),t._v("\nbool xy_global              # true "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("position")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" has a valid global "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("reference")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ref_lat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ref_lon"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nbool z_global               # true "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" z has a valid global "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("reference")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ref_alt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nuint64 ref_timestamp            # Time when reference position was set since system start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfloat64 ref_lat             # Reference point latitude"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("degrees"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfloat64 ref_lon             # Reference point longitude"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("degrees"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfloat32 ref_alt             # Reference altitude AMSL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("metres"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("Distance to surface")])]),t._v("\nfloat32 dist_bottom         # Distance from from bottom surface to ground"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("metres"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nbool dist_bottom_valid          # true "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" distance to bottom surface is valid\nuint8 dist_bottom_sensor_bitfield   # bitfield indicating what type of sensor is used to estimate dist_bottom\nuint8 DIST_BOTTOM_SENSOR_NONE "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\nuint8 DIST_BOTTOM_SENSOR_RANGE "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("  # "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" a range sensor is used to estimate dist_bottom field\nuint8 DIST_BOTTOM_SENSOR_FLOW "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("   # "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" a flow sensor is used to estimate dist_bottom "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("field")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mostly fixed"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("wing use "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nfloat32 eph             # Standard deviation of horizontal position error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("metres"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfloat32 epv             # Standard deviation of vertical position error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("metres"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfloat32 evh             # Standard deviation of horizontal velocity error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("metres"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfloat32 evv             # Standard deviation of vertical velocity error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("metres"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nbool dead_reckoning                     # True "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" this position is estimated through dead"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("reckoning\n\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("estimator")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("specified vehicle limits")])]),t._v("\nfloat32 vxy_max             # maximum horizontal speed "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" set to "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" when limiting not "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("required")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("meters"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfloat32 vz_max              # maximum vertical speed "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" set to "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" when limiting not "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("required")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("meters"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfloat32 hagl_min            # minimum height above ground level "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" set to "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" when limiting not "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("required")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("meters"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfloat32 hagl_max            # maximum height above ground level "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" set to "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" when limiting not "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("required")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("meters"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("TOPICS vehicle_local_position vehicle_local_position_groundtruth external_ins_local_position")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("TOPICS estimator_local_position")])]),t._v("\n\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);