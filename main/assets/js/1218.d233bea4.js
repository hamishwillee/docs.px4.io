(window.webpackJsonp=window.webpackJsonp||[]).push([[1218],{2222:function(t,s,a){"use strict";a.r(s);var e=a(19),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"trajectory-setpoint-uorb-message"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#trajectory-setpoint-uorb-message"}},[t._v("#")]),t._v(" trajectory_setpoint (UORB message)")]),t._v(" "),a("p",[t._v("Trajectory setpoint in NED frame\nInput to PID position controller.\nNeeds to be kinematically consistent and feasible for smooth flight.\nsetting a value to NaN means the state should not be controlled")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/msg/trajectory_setpoint.msg",target:"_blank",rel:"noopener noreferrer"}},[t._v("source file"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("Trajectory setpoint in NED frame")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("Input to PID position controller"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("Needs to be kinematically consistent and feasible "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" smooth flight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("setting")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("a value to NaN means the state should not be controlled")])]),t._v("\n\nuint64 timestamp # time since system "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("microseconds"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[t._v("NED local world frame")])]),t._v("\nfloat32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" position # in meters\nfloat32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" velocity # in meters"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("second\nfloat32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" acceleration # in meters"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("second"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\nfloat32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" jerk # in meters"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("second"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" logging only"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nfloat32 yaw # euler angle of desired attitude in radians "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("PI"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("PI\nfloat32 yawspeed # angular velocity around NED frame z"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("axis in radians"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("second\n\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);