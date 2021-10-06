(window.webpackJsonp=window.webpackJsonp||[]).push([[1020],{1926:function(t,s,a){"use strict";a.r(s);var n=a(19),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vehicle-gps-position-uorb-message"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vehicle-gps-position-uorb-message"}},[t._v("#")]),t._v(" vehicle_gps_position (UORB message)")]),t._v(" "),a("p",[t._v("GPS position in WGS84 coordinates.\nthe field 'timestamp' is for the position & velocity (microseconds)")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/msg/vehicle_gps_position.msg",target:"_blank",rel:"noopener noreferrer"}},[t._v("source file"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("GPS position in WGS84 coordinates"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("the")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("field ")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'timestamp'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("is "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" the position "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("velocity")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),t._v("\nuint64 timestamp\t\t# time since system "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nint32 lat\t\t\t# Latitude in "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1E-7")]),t._v(" degrees\nint32 lon\t\t\t# Longitude in "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1E-7")]),t._v(" degrees\nint32 alt\t\t\t# Altitude in "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1E-3")]),t._v(" meters above MSL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("millimetres"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nint32 alt_ellipsoid \t\t# Altitude in "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1E-3")]),t._v(" meters bove Ellipsoid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("millimetres"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nfloat32 s_variance_m_s\t\t# GPS speed accuracy estimate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("metres"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfloat32 c_variance_rad\t\t# GPS course accuracy estimate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("radians"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nuint8 fix_type # "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" no fix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("D fix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("D fix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" RTCM code differential"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Real"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Time Kinematic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Real"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Time Kinematic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fixed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Extrapolated"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" Some applications will not use the value of this field unless it is at least two"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" so always correctly fill in the fix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\nfloat32 eph\t\t\t# GPS horizontal position "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("accuracy")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("metres"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfloat32 epv\t\t\t# GPS vertical position "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("accuracy")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("metres"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nfloat32 hdop\t\t\t# Horizontal dilution of precision\nfloat32 vdop\t\t\t# Vertical dilution of precision\n\nint32 noise_per_ms\t\t# GPS noise per millisecond\nint32 jamming_indicator\t\t# indicates jamming is occurring\nuint8 jamming_state\t\t# indicates whether jamming has been detected or suspected by the receivers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" O"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Unknown"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" OK"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Warning"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Critical\n\nfloat32 vel_m_s\t\t\t# GPS ground speed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("metres"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfloat32 vel_n_m_s\t\t# GPS North velocity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("metres"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfloat32 vel_e_m_s\t\t# GPS East velocity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("metres"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfloat32 vel_d_m_s\t\t# GPS Down velocity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("metres"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfloat32 cog_rad\t\t\t# Course over "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ground")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NOT heading"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" but direction of movement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("PI"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PI"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("radians"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nbool vel_ned_valid\t\t# True "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" NED velocity is valid\n\nint32 timestamp_time_relative\t# timestamp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" timestamp_time_relative "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Time of the UTC timestamp since system start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nuint64 time_utc_usec\t\t# "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Timestamp")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" UTC"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" this is the timestamp which comes from the gps module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" It might be unavailable right after cold start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" indicated by a value of "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n\nuint8 satellites_used\t\t# Number of satellites used\n\nfloat32 heading\t\t\t# heading angle of XYZ body frame rel to NED"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" Set to NaN "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" not available and "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("updated")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("used "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" dual antenna GPS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rad"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("PI"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" PI"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfloat32 heading_offset\t\t# heading offset of dual antenna array in body frame"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" Set to NaN "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" not applicable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rad"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("PI"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" PI"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nuint8 selected\t\t\t# GPS selection"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" GPS1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" GPS2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" GPS3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.")]),t._v(" Blending multiple receivers\n\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);