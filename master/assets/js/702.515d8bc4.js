(window.webpackJsonp=window.webpackJsonp||[]).push([[702],{1418:function(t,e,a){"use strict";a.r(e);var i=a(18),s=Object(i.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"switching-state-estimators"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#switching-state-estimators"}},[t._v("#")]),t._v(" Switching State Estimators")]),t._v(" "),a("p",[t._v("This page shows you which state estimators are available and how you can switch between them.")]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("Tip")]),t._v(" EKF2 is highly recommended for all purposes (LPE is no longer supported/maintained).")])]),t._v(" "),a("h2",{attrs:{id:"available-estimators"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#available-estimators"}},[t._v("#")]),t._v(" Available Estimators")]),t._v(" "),a("p",[t._v("The available estimators are:")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("EKF2 attitude, position and wind states estimator")]),t._v(" - EKF2 is an extended kalman filter estimating attitude, 3D position / velocity and wind states.")]),t._v(" "),a("li",[a("strong",[t._v("LPE position estimator")]),t._v(" - The LPE position estimator is an extended kalman filter for 3D position and velocity states.")]),t._v(" "),a("li",[a("strong",[t._v("Q attitude estimator")]),t._v(" - The attitude Q estimator is a very simple, quaternion based complementary filter for attitude.")])]),t._v(" "),a("h2",{attrs:{id:"how-to-enable-different-estimators"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-enable-different-estimators"}},[t._v("#")]),t._v(" How to Enable Different Estimators")]),t._v(" "),a("p",[t._v("For multirotors and VTOL use the parameter "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#SYS_MC_EST_GROUP"}},[t._v("SYS_MC_EST_GROUP")]),t._v(" to choose between the following configurations (LPE is not supported for Fixed Wing).")],1),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("SYS_MC_EST_GROUP")]),t._v(" "),a("th",[t._v("Q Estimator")]),t._v(" "),a("th",[t._v("LPE")]),t._v(" "),a("th",[t._v("EKF2")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("1")]),t._v(" "),a("td",[t._v("enabled")]),t._v(" "),a("td",[t._v("enabled")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("2")]),t._v(" "),a("td"),t._v(" "),a("td"),t._v(" "),a("td",[t._v("enabled")])]),t._v(" "),a("tr",[a("td",[t._v("3")]),t._v(" "),a("td",[t._v("enabled")]),t._v(" "),a("td"),t._v(" "),a("td")])])]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("Note")]),t._v(" For FMU-v2 (only) you will also need to build PX4 to specifically include required estimator (e.g. EKF2: "),a("code",[t._v("make px4_fmu-v2")]),t._v(", LPE: "),a("code",[t._v("make px4_fmu-v2_lpe")]),t._v(").\nThis is required because FMU-v2 is too resource constrained to include both estimators.\nOther Pixhawk FMU versions include both.")])])])}),[],!1,null,null,null);e.default=s.exports}}]);