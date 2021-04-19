(window.webpackJsonp=window.webpackJsonp||[]).push([[855],{1748:function(t,e,a){"use strict";a.r(e);var s=a(18),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"modules-reference-estimator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#modules-reference-estimator"}},[t._v("#")]),t._v(" Modules Reference: Estimator")]),t._v(" "),a("h2",{attrs:{id:"attitudeestimatorq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#attitudeestimatorq"}},[t._v("#")]),t._v(" AttitudeEstimatorQ")]),t._v(" "),a("p",[t._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/modules/attitude_estimator_q",target:"_blank",rel:"noopener noreferrer"}},[t._v("modules/attitude_estimator_q"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),a("p",[t._v("Attitude estimator q.")]),t._v(" "),a("p",[a("a",{attrs:{id:"AttitudeEstimatorQ_usage"}})]),t._v(" "),a("h3",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("AttitudeEstimatorQ <command> [arguments...]\n Commands:\n   start\n\n   stop\n\n   status        print status info\n")])])]),a("h2",{attrs:{id:"airspeed-estimator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#airspeed-estimator"}},[t._v("#")]),t._v(" airspeed_estimator")]),t._v(" "),a("p",[t._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/modules/airspeed_selector",target:"_blank",rel:"noopener noreferrer"}},[t._v("modules/airspeed_selector"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"description-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description-2"}},[t._v("#")]),t._v(" Description")]),t._v(" "),a("p",[t._v('This module provides a single airspeed_validated topic, containing indicated (IAS),\ncalibrated (CAS), true airspeed (TAS) and the information if the estimation currently\nis invalid and if based sensor readings or on groundspeed minus windspeed.\nSupporting the input of multiple "raw" airspeed inputs, this module automatically switches\nto a valid sensor in case of failure detection. For failure detection as well as for\nthe estimation of a scale factor from IAS to CAS, it runs several wind estimators\nand also publishes those.')]),t._v(" "),a("p",[a("a",{attrs:{id:"airspeed_estimator_usage"}})]),t._v(" "),a("h3",{attrs:{id:"usage-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-2"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("airspeed_estimator <command> [arguments...]\n Commands:\n   start\n\n   stop\n\n   status        print status info\n")])])]),a("h2",{attrs:{id:"ekf2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ekf2"}},[t._v("#")]),t._v(" ekf2")]),t._v(" "),a("p",[t._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/modules/ekf2",target:"_blank",rel:"noopener noreferrer"}},[t._v("modules/ekf2"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"description-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description-3"}},[t._v("#")]),t._v(" Description")]),t._v(" "),a("p",[t._v("Attitude and position estimator using an Extended Kalman Filter. It is used for Multirotors and Fixed-Wing.")]),t._v(" "),a("p",[t._v("The documentation can be found on the "),a("a",{attrs:{href:"https://docs.px4.io/master/en/advanced_config/tuning_the_ecl_ekf.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("ECL/EKF Overview & Tuning"),a("OutboundLink")],1),t._v(" page.")]),t._v(" "),a("p",[t._v("ekf2 can be started in replay mode ("),a("code",[t._v("-r")]),t._v("): in this mode it does not access the system time, but only uses the\ntimestamps from the sensor topics.")]),t._v(" "),a("p",[a("a",{attrs:{id:"ekf2_usage"}})]),t._v(" "),a("h3",{attrs:{id:"usage-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-3"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("ekf2 <command> [arguments...]\n Commands:\n   start\n     [-r]        Enable replay mode\n\n   stop\n\n   status        print status info\n")])])]),a("h2",{attrs:{id:"local-position-estimator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#local-position-estimator"}},[t._v("#")]),t._v(" local_position_estimator")]),t._v(" "),a("p",[t._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/modules/local_position_estimator",target:"_blank",rel:"noopener noreferrer"}},[t._v("modules/local_position_estimator"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"description-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description-4"}},[t._v("#")]),t._v(" Description")]),t._v(" "),a("p",[t._v("Attitude and position estimator using an Extended Kalman Filter.")]),t._v(" "),a("p",[a("a",{attrs:{id:"local_position_estimator_usage"}})]),t._v(" "),a("h3",{attrs:{id:"usage-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-4"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("local_position_estimator <command> [arguments...]\n Commands:\n   start\n\n   stop\n\n   status        print status info\n")])])]),a("h2",{attrs:{id:"mc-hover-thrust-estimator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mc-hover-thrust-estimator"}},[t._v("#")]),t._v(" mc_hover_thrust_estimator")]),t._v(" "),a("p",[t._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/modules/mc_hover_thrust_estimator",target:"_blank",rel:"noopener noreferrer"}},[t._v("modules/mc_hover_thrust_estimator"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"description-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description-5"}},[t._v("#")]),t._v(" Description")]),t._v(" "),a("p",[a("a",{attrs:{id:"mc_hover_thrust_estimator_usage"}})]),t._v(" "),a("h3",{attrs:{id:"usage-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-5"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("mc_hover_thrust_estimator <command> [arguments...]\n Commands:\n   start\n\n   stop\n\n   status        print status info\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);