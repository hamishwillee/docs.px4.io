(window.webpackJsonp=window.webpackJsonp||[]).push([[1381],{2529:function(t,e,n){"use strict";n.r(e);var s=n(19),a=Object(s.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"vehicle-land-detected-uorb-message"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vehicle-land-detected-uorb-message"}},[t._v("#")]),t._v(" vehicle_land_detected (UORB message)")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/msg/vehicle_land_detected.msg",target:"_blank",rel:"noopener noreferrer"}},[t._v("source file"),n("OutboundLink")],1)]),t._v(" "),n("div",{staticClass:"language-c extra-class"},[n("pre",{pre:!0,attrs:{class:"language-c"}},[n("code",[t._v("uint64 timestamp    # time since system "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfloat32 alt_max     # maximum altitude in "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("m"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" that can be reached\nbool freefall       # true "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" vehicle is currently in free"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("fall\nbool ground_contact # true "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" vehicle has ground contact but is not "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("landed")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.")]),t._v(" stage"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nbool maybe_landed   # true "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" the vehicle might have "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("landed")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.")]),t._v(" stage"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nbool landed     # true "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" vehicle is currently landed on the "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ground")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.")]),t._v(" stage"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nbool in_ground_effect # indicates "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" from the perspective of the landing detector the vehicle might be in ground "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("effect")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("baro"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" This flag will become true "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" the vehicle is not moving horizontally and is "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("descending")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("crude assumption that user is landing"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nbool in_descend\nbool has_low_throttle\nbool vertical_movement\nbool horizontal_movement\nbool close_to_ground_or_skipped_check\n\n")])])])])}),[],!1,null,null,null);e.default=a.exports}}]);