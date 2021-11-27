(window.webpackJsonp=window.webpackJsonp||[]).push([[1059],{1965:function(t,s,a){"use strict";a.r(s);var e=a(19),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vehicle-local-position-uorb-message"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vehicle-local-position-uorb-message"}},[t._v("#")]),t._v(" vehicle_local_position (UORB message)")]),t._v(" "),a("p",[t._v("Fused local position in NED.\nThe coordinate system origin is the vehicle position at the time when the EKF2-module was started.")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/msg/vehicle_local_position.msg",target:"_blank",rel:"noopener noreferrer"}},[t._v("source file"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("Fused local position in NED"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("The coordinate system origin is the vehicle position at the time when the EKF2"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("module was started"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])])]),t._v("\n\nuint64 timestamp\t\t\t# time since system "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nuint64 timestamp_sample                 # the timestamp of the raw "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nbool xy_valid\t\t\t\t# true "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" x and y are valid\nbool z_valid\t\t\t\t# true "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" z is valid\nbool v_xy_valid\t\t\t\t# true "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" vy and vy are valid\nbool v_z_valid\t\t\t\t# true "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" vz is valid\n\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("Position in local NED frame")])]),t._v("\nfloat32 x\t\t\t\t# North position in NED earth"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("fixed frame"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("metres"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfloat32 y\t\t\t\t# East position in NED earth"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("fixed frame"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("metres"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfloat32 z\t\t\t\t# Down "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("position")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("negative altitude"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" in NED earth"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("fixed frame"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("metres"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("Position reset delta")])]),t._v("\nfloat32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" delta_xy\nuint8 xy_reset_counter\n\nfloat32 delta_z\nuint8 z_reset_counter\n\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("Velocity in NED frame")])]),t._v("\nfloat32 vx \t\t\t\t# North velocity in NED earth"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("fixed frame"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("metres"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfloat32 vy\t\t\t\t# East velocity in NED earth"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("fixed frame"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("metres"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfloat32 vz\t\t\t\t# Down velocity in NED earth"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("fixed frame"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("metres"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfloat32 z_deriv\t\t\t\t# Down position time derivative in NED earth"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("fixed frame"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("metres"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("Velocity reset delta")])]),t._v("\nfloat32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" delta_vxy\nuint8 vxy_reset_counter\n\nfloat32 delta_vz\nuint8 vz_reset_counter\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("Acceleration in NED frame")])]),t._v("\nfloat32 ax        # North velocity derivative in NED earth"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("fixed frame"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("metres"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("sec"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfloat32 ay        # East velocity derivative in NED earth"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("fixed frame"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("metres"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("sec"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfloat32 az        # Down velocity derivative in NED earth"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("fixed frame"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("metres"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("sec"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nfloat32 heading\t\t\t\t# Euler yaw angle transforming the tangent plane relative to NED earth"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("fixed frame"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("PI"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("PI"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("radians"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfloat32 delta_heading\nuint8 heading_reset_counter\nbool heading_good_for_control\n\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("Position of reference "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("point")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("local NED frame origin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" in "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("global")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("GPS "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" WGS84"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" frame")])]),t._v("\nbool xy_global\t\t\t\t# true "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("position")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" has a valid global "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("reference")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ref_lat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ref_lon"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nbool z_global\t\t\t\t# true "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" z has a valid global "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("reference")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ref_alt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nuint64 ref_timestamp\t\t\t# Time when reference position was set since system start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfloat64 ref_lat\t\t\t\t# Reference point latitude"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("degrees"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfloat64 ref_lon\t\t\t\t# Reference point longitude"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("degrees"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfloat32 ref_alt\t\t\t\t# Reference altitude AMSL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("metres"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("Distance to surface")])]),t._v("\nfloat32 dist_bottom\t\t\t# Distance from from bottom surface to ground"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("metres"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nbool dist_bottom_valid\t\t\t# true "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" distance to bottom surface is valid\nuint8 dist_bottom_sensor_bitfield\t# bitfield indicating what type of sensor is used to estimate dist_bottom\nuint8 DIST_BOTTOM_SENSOR_NONE "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\nuint8 DIST_BOTTOM_SENSOR_RANGE "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\t# "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" a range sensor is used to estimate dist_bottom field\nuint8 DIST_BOTTOM_SENSOR_FLOW "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\t# "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" a flow sensor is used to estimate dist_bottom "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("field")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mostly fixed"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("wing use "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nfloat32 eph\t\t\t\t# Standard deviation of horizontal position error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("metres"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfloat32 epv\t\t\t\t# Standard deviation of vertical position error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("metres"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfloat32 evh\t\t\t\t# Standard deviation of horizontal velocity error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("metres"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfloat32 evv\t\t\t\t# Standard deviation of horizontal velocity error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("metres"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("estimator")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("specified vehicle limits")])]),t._v("\nfloat32 vxy_max\t\t\t\t# maximum horizontal speed "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" set to "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" when limiting not "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("required")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("meters"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfloat32 vz_max\t\t\t\t# maximum vertical speed "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" set to "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" when limiting not "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("required")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("meters"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfloat32 hagl_min\t\t\t# minimum height above ground level "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" set to "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" when limiting not "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("required")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("meters"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfloat32 hagl_max\t\t\t# maximum height above ground level "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" set to "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" when limiting not "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("required")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("meters"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("TOPICS vehicle_local_position vehicle_local_position_groundtruth")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("TOPICS estimator_local_position")])]),t._v("\n\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);