(window.webpackJsonp=window.webpackJsonp||[]).push([[1035],{2157:function(t,e,s){"use strict";s.r(e);var a=s(18),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"modules-reference-simulation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#modules-reference-simulation"}},[t._v("#")]),t._v(" Modules Reference: Simulation")]),t._v(" "),s("h2",{attrs:{id:"sih"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sih"}},[t._v("#")]),t._v(" sih")]),t._v(" "),s("p",[t._v("Source: "),s("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/modules/sih",target:"_blank",rel:"noopener noreferrer"}},[t._v("modules/sih"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),s("p",[t._v("This module provide a simulator for quadrotors running fully inside the hardware autopilot.")]),t._v(" "),s("p",[t._v('This simulator subscribes to "actuator_outputs" which are the actuator pwm signals given by the mixer.')]),t._v(" "),s("p",[t._v("This simulator publishes the sensors signals corrupted with realistic noise in order to incorporate the state estimator in the loop.")]),t._v(" "),s("h3",{attrs:{id:"implementation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[t._v("#")]),t._v(" Implementation")]),t._v(" "),s("p",[t._v("The simulator implements the equations of motion using matrix algebra. Quaternion representation is used for the attitude. Forward Euler is used for integration. Most of the variables are declared global in the .hpp file to avoid stack overflow.")]),t._v(" "),s("p",[s("a",{attrs:{id:"sih_usage"}})]),t._v(" "),s("h3",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("sih <command> [arguments...]\n Commands:\n   start\n\n   stop\n\n   status        print status info\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);