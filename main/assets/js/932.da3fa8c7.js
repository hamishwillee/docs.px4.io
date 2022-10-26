(window.webpackJsonp=window.webpackJsonp||[]).push([[932],{1717:function(e,t,a){"use strict";a.r(t);var i=a(19),s=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"failsafe-state-machine-simulation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#failsafe-state-machine-simulation"}},[e._v("#")]),e._v(" Failsafe State Machine Simulation")]),e._v(" "),a("p",[e._v("This page can be used to simulate the actions of the PX4 failsafe state machine under all possible configurations and conditions.")]),e._v(" "),a("p",[e._v("The simulation runs the same code in the browser as is executed on the vehicle, in real-time (the simulation is automatically kept in sync with the latest version of the code).\nNote that any delayed action ("),a("code",[e._v("COM_FAIL_ACT_T")]),e._v(") will also be delayed in the simulation.")]),e._v(" "),a("p",[e._v("To use it:")]),e._v(" "),a("ol",[a("li",[e._v("First configure the parameters on the left.\nThe initial values correspond to the PX4 defaults.")]),e._v(" "),a("li",[e._v("Set the vehicle type")]),e._v(" "),a("li",[e._v("Set the other values in the "),a("strong",[e._v("State")]),e._v(" or any of the flags under "),a("strong",[e._v("Conditions")]),e._v(" "),a("ul",[a("li",[e._v("The "),a("strong",[e._v("Intended Mode")]),e._v(" corresponds to the commanded mode via RC or GCS (or external script).\nThe failsafe state machine can override this in case of a failsafe.")])])]),e._v(" "),a("li",[e._v("Check the action under "),a("strong",[e._v("Output")])]),e._v(" "),a("li",[e._v("Check what happens when changing mode or "),a("strong",[e._v("Move the RC sticks")])]),e._v(" "),a("li",[e._v("Play with different settings and conditions!")])]),e._v(" "),a("p",[e._v("The simulation can also be executed locally in order to test a specific version or set of changes:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" run_failsafe_web_server\n")])])]),e._v(" "),a("iframe",{staticStyle:{"text-align":"center","margin-left":"-230px","margin-right":"-230px"},attrs:{src:"failsafe/index.html?no-title=1",frameborder:"0",height:"1400px",width:"1200"}})])}),[],!1,null,null,null);t.default=s.exports}}]);