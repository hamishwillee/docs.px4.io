(window.webpackJsonp=window.webpackJsonp||[]).push([[1266],{2328:function(t,s,n){"use strict";n.r(s);var e=n(19),a=Object(e.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"sensorgnssrelative-uorb-message"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sensorgnssrelative-uorb-message"}},[t._v("#")]),t._v(" SensorGnssRelative (UORB message)")]),t._v(" "),n("p",[t._v("GNSS relative positioning information in NED frame. The NED frame is defined as the local topological system at the reference station.")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/msg/SensorGnssRelative.msg",target:"_blank",rel:"noopener noreferrer"}},[t._v("source file"),n("OutboundLink")],1)]),t._v(" "),n("div",{staticClass:"language-c extra-class"},[n("pre",{pre:!0,attrs:{class:"language-c"}},[n("code",[n("span",{pre:!0,attrs:{class:"token macro property"}},[n("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token expression"}},[t._v("GNSS relative positioning information in NED frame"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" The NED frame is defined as the local topological system at the reference station"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])])]),t._v("\n\nuint64 timestamp                  # time since system "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nuint64 timestamp_sample           # time since system "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nuint32 device_id                  # unique device ID "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" the sensor that does not change between power cycles\n\nuint64 time_utc_usec              # "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Timestamp")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" UTC"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" this is the timestamp which comes from the gps module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" It might be unavailable right after cold start"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" indicated by a value of "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n\nuint16 reference_station_id       # Reference Station ID\n\nfloat32"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" position               # GPS NED relative position "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("vector")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("m"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfloat32"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" position_accuracy      # Accuracy of relative "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("position")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("m"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nfloat32 heading                   # Heading of the relative position "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("vector")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("radians"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfloat32 heading_accuracy          # Accuracy of heading of the relative position "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("vector")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("radians"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nfloat32 position_length\nfloat32 accuracy_length\n\nbool gnss_fix_ok                  # GNSS valid "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("fix")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("e within DOP "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" accuracy masks"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nbool differential_solution        # differential corrections were applied\nbool relative_position_valid\nbool carrier_solution_floating    # carrier phase range solution with floating ambiguities\nbool carrier_solution_fixed       # carrier phase range solution with fixed ambiguities\nbool moving_base_mode             # "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" the receiver is operating in moving base mode\nbool reference_position_miss      # extrapolated reference position was used to compute moving base solution this epoch\nbool reference_observations_miss  # extrapolated reference observations were used to compute moving base solution this epoch\nbool heading_valid\nbool relative_position_normalized # the components of the relative position "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("vector")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("including the high"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("precision parts"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" are normalized\n\n")])])])])}),[],!1,null,null,null);s.default=a.exports}}]);