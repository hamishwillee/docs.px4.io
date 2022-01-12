(window.webpackJsonp=window.webpackJsonp||[]).push([[1443],{2610:function(t,e,s){"use strict";s.r(e);var n=s(19),a=Object(n.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"vehicle-land-detected-uorb-message"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vehicle-land-detected-uorb-message"}},[t._v("#")]),t._v(" vehicle_land_detected (UORB message)")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/msg/vehicle_land_detected.msg",target:"_blank",rel:"noopener noreferrer"}},[t._v("source file"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[t._v("uint64 timestamp    # time since system "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nbool freefall       # true "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" vehicle is currently in free"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("fall\nbool ground_contact # true "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" vehicle has ground contact but is not "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("landed")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.")]),t._v(" stage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nbool maybe_landed   # true "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" the vehicle might have "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("landed")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.")]),t._v(" stage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nbool landed     # true "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" vehicle is currently landed on the "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ground")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.")]),t._v(" stage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nbool in_ground_effect # indicates "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" from the perspective of the landing detector the vehicle might be in ground "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("effect")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("baro"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" This flag will become true "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" the vehicle is not moving horizontally and is "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("descending")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("crude assumption that user is landing"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nbool in_descend\nbool has_low_throttle\nbool vertical_movement\nbool horizontal_movement\nbool close_to_ground_or_skipped_check\n\n")])])])])}),[],!1,null,null,null);e.default=a.exports}}]);