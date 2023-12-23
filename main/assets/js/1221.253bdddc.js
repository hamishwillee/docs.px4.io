(window.webpackJsonp=window.webpackJsonp||[]).push([[1221],{2344:function(t,s,a){"use strict";a.r(s);var n=a(19),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"launchdetectionstatus-uorb-message"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#launchdetectionstatus-uorb-message"}},[t._v("#")]),t._v(" LaunchDetectionStatus (UORB message)")]),t._v(" "),a("p",[t._v("Status of the launch detection state machine (fixed-wing only)")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/msg/LaunchDetectionStatus.msg",target:"_blank",rel:"noopener noreferrer"}},[t._v("source file"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("Status of the launch detection state "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("machine")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fixed"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("wing only"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),t._v("\n\nuint64 timestamp # time since system "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nuint8 STATE_WAITING_FOR_LAUNCH \t\t\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" # waiting "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" launch\nuint8 STATE_LAUNCH_DETECTED_DISABLED_MOTOR \t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" # launch detected"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" but keep "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("motor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("disabled")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("g"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" because it can't spin freely "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" on catapult"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nuint8 STATE_FLYING \t\t\t\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" # launch detected"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" use normal takeoff"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("flying configuration\n\nuint8 launch_detection_state\n\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);