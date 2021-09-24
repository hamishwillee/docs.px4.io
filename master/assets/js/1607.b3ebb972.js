(window.webpackJsonp=window.webpackJsonp||[]).push([[1607],{2999:function(s,t,a){"use strict";a.r(t);var e=a(19),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"airspeed-validated-uorb-message"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#airspeed-validated-uorb-message"}},[s._v("#")]),s._v(" airspeed_validated (UORB message)")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/msg/airspeed_validated.msg",target:"_blank",rel:"noopener noreferrer"}},[s._v("source file"),a("OutboundLink")],1)]),s._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[s._v("uint64 timestamp                # time since system "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("start")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("microseconds"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nfloat32 indicated_airspeed_m_s          # indicated airspeed in m"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("s")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("IAS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" set to NAN "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" invalid\nfloat32 calibrated_airspeed_m_s             # calibrated airspeed in m"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("s")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("CAS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" accounts "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" instrumentation errors"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" set to NAN "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" invalid\nfloat32 true_airspeed_m_s           # true filtered airspeed in m"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("s")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("TAS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" set to NAN "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" invalid\n\nfloat32 calibrated_ground_minus_wind_m_s    # CAS calculated from groundspeed "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" windspeed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" where windspeed is estimated based on a zero"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("sideslip assumption"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" set to NAN "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" invalid\nfloat32 true_ground_minus_wind_m_s      # TAS calculated from groundspeed "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" windspeed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" where windspeed is estimated based on a zero"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("sideslip assumption"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" set to NAN "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" invalid\n\nbool airspeed_sensor_measurement_valid      # True "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" data from at least one airspeed sensor is declared valid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n\nint8 selected_airspeed_index            # "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" airspeed sensor index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" groundspeed"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("windspeed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" airspeed invalid\n\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);