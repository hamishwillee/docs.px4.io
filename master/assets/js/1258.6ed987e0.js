(window.webpackJsonp=window.webpackJsonp||[]).push([[1258],{2413:function(t,e,s){"use strict";s.r(e);var a=s(19),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"actuator-armed-uorb-message"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#actuator-armed-uorb-message"}},[t._v("#")]),t._v(" actuator_armed (UORB message)")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/msg/actuator_armed.msg",target:"_blank",rel:"noopener noreferrer"}},[t._v("source file"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[t._v("uint64 timestamp    # time since system "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nbool armed      # Set to true "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" system is armed\nbool prearmed       # Set to true "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" the actuator safety is disabled but motors are not armed\nbool ready_to_arm   # Set to true "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" system is ready to be armed\nbool lockdown       # Set to true "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" actuators are forced to being "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("disabled")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("due to emergency or HIL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nbool manual_lockdown    # Set to true "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" manual throttle kill "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" is engaged\nbool force_failsafe # Set to true "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" the actuators are forced to the failsafe position\nbool in_esc_calibration_mode # IO"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("FMU should ignore messages from the actuator controls topics\nbool soft_stop # Set to true "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" we need to ESCs to remove the idle constraint\n\n")])])])])}),[],!1,null,null,null);e.default=o.exports}}]);