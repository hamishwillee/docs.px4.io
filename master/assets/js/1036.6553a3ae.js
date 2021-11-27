(window.webpackJsonp=window.webpackJsonp||[]).push([[1036],{1940:function(t,s,a){"use strict";a.r(s);var n=a(19),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"transponder-report-uorb-message"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transponder-report-uorb-message"}},[t._v("#")]),t._v(" transponder_report (UORB message)")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/msg/transponder_report.msg",target:"_blank",rel:"noopener noreferrer"}},[t._v("source file"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[t._v("uint64 timestamp\t# time since system "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nuint32 icao_address \t# ICAO address\nfloat64 lat \t\t# Latitude"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" expressed as degrees\nfloat64 lon \t\t# Longitude"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" expressed as degrees\nuint8 altitude_type\t# Type from ADSB_ALTITUDE_TYPE "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("enum")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("float32")]),t._v(" altitude \t# "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Altitude")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ASL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" in meters\nfloat32 heading \t# Course over ground in radians"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("pi to "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("pi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" is north\nfloat32 hor_velocity\t# The horizontal velocity in m"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("s\nfloat32 ver_velocity \t# The vertical velocity in m"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" positive is up\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" callsign\t# The callsign"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("null\nuint8 emitter_type \t# Type from ADSB_EMITTER_TYPE "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("enum")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("uint8")]),t._v(" tslc \t\t# Time since last communication in seconds\nuint16 flags \t\t# Flags to indicate various statuses including valid data fields\nuint16 squawk \t\t# Squawk code\nuint8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" uas_id\t# Unique UAS ID\n\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("ADSB flags")])]),t._v("\nuint16 PX4_ADSB_FLAGS_VALID_COORDS "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nuint16 PX4_ADSB_FLAGS_VALID_ALTITUDE "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\nuint16 PX4_ADSB_FLAGS_VALID_HEADING "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\nuint16 PX4_ADSB_FLAGS_VALID_VELOCITY "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("\nuint16 PX4_ADSB_FLAGS_VALID_CALLSIGN "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v("\nuint16 PX4_ADSB_FLAGS_VALID_SQUAWK "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),t._v("\nuint16 PX4_ADSB_FLAGS_RETRANSLATE "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("256")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("ADSB Emitter Data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")])])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("mavlink"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("v2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("common"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("common"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("h")])]),t._v("\nuint16 ADSB_EMITTER_TYPE_NO_INFO"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\nuint16 ADSB_EMITTER_TYPE_LIGHT"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nuint16 ADSB_EMITTER_TYPE_SMALL"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\nuint16 ADSB_EMITTER_TYPE_LARGE"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\nuint16 ADSB_EMITTER_TYPE_HIGH_VORTEX_LARGE"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\nuint16 ADSB_EMITTER_TYPE_HEAVY"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\nuint16 ADSB_EMITTER_TYPE_HIGHLY_MANUV"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v("\nuint16 ADSB_EMITTER_TYPE_ROTOCRAFT"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v("\nuint16 ADSB_EMITTER_TYPE_UNASSIGNED"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("\nuint16 ADSB_EMITTER_TYPE_GLIDER"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v("\nuint16 ADSB_EMITTER_TYPE_LIGHTER_AIR"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\nuint16 ADSB_EMITTER_TYPE_PARACHUTE"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v("\nuint16 ADSB_EMITTER_TYPE_ULTRA_LIGHT"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v("\nuint16 ADSB_EMITTER_TYPE_UNASSIGNED2"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),t._v("\nuint16 ADSB_EMITTER_TYPE_UAV"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v("\nuint16 ADSB_EMITTER_TYPE_SPACE"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),t._v("\nuint16 ADSB_EMITTER_TYPE_UNASSGINED3"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v("\nuint16 ADSB_EMITTER_TYPE_EMERGENCY_SURFACE"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v("\nuint16 ADSB_EMITTER_TYPE_SERVICE_SURFACE"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),t._v("\nuint16 ADSB_EMITTER_TYPE_POINT_OBSTACLE"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("19")]),t._v("\nuint16 ADSB_EMITTER_TYPE_ENUM_END"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("\n\nuint8 ORB_QUEUE_LENGTH "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("\n\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);