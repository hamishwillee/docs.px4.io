(window.webpackJsonp=window.webpackJsonp||[]).push([[1859],{3491:function(t,s,a){"use strict";a.r(s);var n=a(19),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"airspeedwind-uorb-message"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#airspeedwind-uorb-message"}},[t._v("#")]),t._v(" AirspeedWind (UORB message)")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/msg/AirspeedWind.msg",target:"_blank",rel:"noopener noreferrer"}},[t._v("source file"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[t._v("uint64 timestamp        # time since system "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nuint64 timestamp_sample         # the timestamp of the raw "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nfloat32 windspeed_north     # Wind component in north "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" X "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("direction")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("m"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfloat32 windspeed_east      # Wind component in east "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" Y "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("direction")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("m"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nfloat32 variance_north      # Wind estimate error variance in north "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" X "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("direction")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("m"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" set to "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("zero")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("no uncertainty"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" not estimated\nfloat32 variance_east       # Wind estimate error variance in east "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" Y "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("direction")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("m"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" set to "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("zero")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("no uncertainty"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" not estimated\n\nfloat32 tas_innov       # True airspeed innovation\nfloat32 tas_innov_var       # True airspeed innovation variance\n\nfloat32 tas_scale_raw       # Estimated true airspeed scale "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("factor")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("not validated"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfloat32 tas_scale_raw_var   # True airspeed scale factor variance\n\nfloat32 tas_scale_validated # Estimated true airspeed scale factor after validation\n\nfloat32 beta_innov      # Sideslip measurement innovation\nfloat32 beta_innov_var      # Sideslip measurement innovation variance\n\nuint8 source            # source of wind estimate\n\nuint8 SOURCE_AS_BETA_ONLY "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("   # wind estimate only based on synthetic sideslip fusion\nuint8 SOURCE_AS_SENSOR_1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("    # combined synthetic sideslip and airspeed "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fusion")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data from first airspeed sensor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nuint8 SOURCE_AS_SENSOR_2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("    # combined synthetic sideslip and airspeed "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fusion")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data from second airspeed sensor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nuint8 SOURCE_AS_SENSOR_3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("    # combined synthetic sideslip and airspeed "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fusion")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data from third airspeed sensor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);