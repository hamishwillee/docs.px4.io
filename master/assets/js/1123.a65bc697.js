(window.webpackJsonp=window.webpackJsonp||[]).push([[1123],{2090:function(e,t,a){"use strict";a.r(t);var s=a(19),i=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"simulate-failsafes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simulate-failsafes"}},[e._v("#")]),e._v(" Simulate Failsafes")]),e._v(" "),a("p",[a("RouterLink",{attrs:{to:"/en/config/safety.html"}},[e._v("Failsafes")]),e._v(" define the safe limits/conditions under which you can safely use PX4, and the action that will be performed if a failsafe is triggered (for example, landing, holding position, or returning to a specified point).")],1),e._v(" "),a("p",[e._v("In SITL some failsafes are disabled by default to enable easier simulation usage.\nThis topic explains how you can test safety-critical behavior in SITL simulation before attempting it in the real world.")]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("You can also test failsafes using "),a("RouterLink",{attrs:{to:"/en/simulation/hitl.html"}},[e._v("HITL simulation")]),e._v(".\nHITL uses the normal configuration parameters of your flight controller.")],1)]),e._v(" "),a("h2",{attrs:{id:"data-link-loss"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-link-loss"}},[e._v("#")]),e._v(" Data Link Loss")]),e._v(" "),a("p",[e._v("The "),a("em",[e._v("Data Link Loss")]),e._v(" failsafe (unavailability of external data via MAVLink) is enabled by default.\nThis makes the simulation only usable with a connected GCS, SDK, or other MAVLink application.")]),e._v(" "),a("p",[e._v("Set the parameter "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#NAV_DLL_ACT"}},[e._v("NAV_DLL_ACT")]),e._v(" to the desired failsafe action to change the behavior.\nFor example, set to "),a("code",[e._v("0")]),e._v(" to disable it.")],1),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("All parameters in SITL including this one get reset when you do "),a("code",[e._v("make clean")]),e._v(".")])]),e._v(" "),a("h2",{attrs:{id:"rc-link-loss"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rc-link-loss"}},[e._v("#")]),e._v(" RC Link Loss")]),e._v(" "),a("p",[e._v("The "),a("em",[e._v("RC Link Loss")]),e._v(" failsafe (unavailability of data from a remote control) is enabled by default.\nThis makes the simulation only usable with either an active MAVLink or remote control connection.")]),e._v(" "),a("p",[e._v("Set the parameter "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#NAV_RCL_ACT"}},[e._v("NAV_RCL_ACT")]),e._v(" to the desired failsafe action to change the behavior.\nFor example, set to "),a("code",[e._v("0")]),e._v(" to disable it.")],1),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("All parameters in SITL including this one get reset when you do "),a("code",[e._v("make clean")]),e._v(".")])]),e._v(" "),a("h2",{attrs:{id:"low-battery"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#low-battery"}},[e._v("#")]),e._v(" Low Battery")]),e._v(" "),a("p",[e._v("The simulated battery is implemented to never run out of energy, and by default only depletes to 50% of its capacity and hence reported voltage.\nThis enables testing of battery indication in GCS UIs without triggering low battery reactions that might interrupt other testing.")]),e._v(" "),a("p",[e._v("To change this minimal battery percentage value use the parameter "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#SIM_BAT_MIN_PCT"}},[e._v("SIM_BAT_MIN_PCT")]),e._v(".")],1),e._v(" "),a("p",[e._v("To control how fast the battery depletes to the minimal value use the parameter "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#SIM_BAT_DRAIN"}},[e._v("SIM_BAT_DRAIN")]),e._v(".")],1),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("By changing "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#SIM_BAT_MIN_PCT"}},[e._v("SIM_BAT_MIN_PCT")]),e._v(" in flight, you can also test regaining capacity to simulate inaccurate battery state estimation or in-air charging technology.")],1)]),e._v(" "),a("h2",{attrs:{id:"sensor-system-failure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sensor-system-failure"}},[e._v("#")]),e._v(" Sensor/System Failure")]),e._v(" "),a("p",[a("RouterLink",{attrs:{to:"/en/debug/failure_injection.html"}},[e._v("Failure injection")]),e._v(" can be used to simulate different types of failures in many sensors and systems.\nFor example, this can be used to simulate absent or intermittent GPS, RC signal that has stopped or got stuck on a particular value, failure of the avoidance system, and much more.")],1),e._v(" "),a("p",[e._v("For example, to simulate GPS failure:")]),e._v(" "),a("ol",[a("li",[e._v("Enable the parameter "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#SYS_FAILURE_EN"}},[e._v("SYS_FAILURE_EN")]),e._v(".")],1),e._v(" "),a("li",[e._v("Enter the following commands on the SITL instance "),a("em",[e._v("pxh shell")]),e._v(":"),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Turn (all) GPS off")]),e._v("\nfailure gps off\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Turn (all) GPS on")]),e._v("\nfailure gps ok\n")])])])])]),e._v(" "),a("p",[e._v("See "),a("RouterLink",{attrs:{to:"/en/debug/failure_injection.html"}},[e._v("System Failure Injection")]),e._v(" for a list of supported target sensors and failure modes.")],1)])}),[],!1,null,null,null);t.default=i.exports}}]);