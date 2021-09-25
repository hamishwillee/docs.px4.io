(window.webpackJsonp=window.webpackJsonp||[]).push([[882],{1787:function(t,s,a){"use strict";a.r(s);var e=a(19),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"airspeed-validated-uorb-message"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#airspeed-validated-uorb-message"}},[t._v("#")]),t._v(" airspeed_validated (UORB message)")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/msg/airspeed_validated.msg",target:"_blank",rel:"noopener noreferrer"}},[t._v("source file"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[t._v("uint64 timestamp\t\t\t\t# time since system "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nfloat32 indicated_airspeed_m_s\t\t\t# indicated airspeed in m"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("s")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("IAS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" set to NAN "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" invalid\nfloat32 calibrated_airspeed_m_s     \t\t# calibrated airspeed in m"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("s")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("CAS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" accounts "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" instrumentation errors"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" set to NAN "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" invalid\nfloat32 true_airspeed_m_s\t\t\t# true filtered airspeed in m"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("s")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TAS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" set to NAN "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" invalid\n\nfloat32 calibrated_ground_minus_wind_m_s \t# CAS calculated from groundspeed "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" windspeed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" where windspeed is estimated based on a zero"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("sideslip assumption"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" set to NAN "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" invalid\nfloat32 true_ground_minus_wind_m_s \t\t# TAS calculated from groundspeed "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" windspeed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" where windspeed is estimated based on a zero"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("sideslip assumption"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" set to NAN "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" invalid\n\nbool airspeed_sensor_measurement_valid \t\t# True "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" data from at least one airspeed sensor is declared valid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\nint8 selected_airspeed_index \t\t\t# "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" airspeed sensor index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" groundspeed"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("windspeed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" airspeed invalid\n\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);