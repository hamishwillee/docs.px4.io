(window.webpackJsonp=window.webpackJsonp||[]).push([[997],{1885:function(e,t,n){"use strict";n.r(t);var i=n(19),o=Object(i.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"vtol-back-transition-tuning"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vtol-back-transition-tuning"}},[e._v("#")]),e._v(" VTOL Back-transition Tuning")]),e._v(" "),n("p",[e._v("When a VTOL performs a back-transition (transition from fixed-wing mode to multicopter) it needs to slow down before the multicopter can take proper control.\nTo help with braking, the controller will pitch up the vehicle if the current deceleration is below what is set in expected deceleration ("),n("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#VT_B_DEC_MSS"}},[e._v("VT_B_DEC_MSS")]),e._v(").\nThe response of this deceleration controller can be tuned through a "),n("code",[e._v("I")]),e._v(" gain: "),n("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#VT_B_DEC_I"}},[e._v("VT_B_DEC_I")]),e._v(".\nIncreasing the "),n("code",[e._v("I")]),e._v(" will result in more aggressive pitch-up to achieve the configured deceleration setting.")],1),e._v(" "),n("p",[e._v("The vehicle will consider the back-transition complete when the horizontal speed has reached multicopter cruise speed ("),n("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MPC_XY_CRUISE"}},[e._v("MPC_XY_CRUISE")]),e._v(") or when the back-transition duration ("),n("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#VT_B_TRANS_DUR"}},[e._v("VT_B_TRANS_DUR")]),e._v(") has passed (whichever comes first).")],1),e._v(" "),n("h2",{attrs:{id:"setting-expected-deceleration"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#setting-expected-deceleration"}},[e._v("#")]),e._v(" Setting expected deceleration")]),e._v(" "),n("p",[e._v("When flying missions that make use of a "),n("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_NAV_VTOL_LAND",target:"_blank",rel:"noopener noreferrer"}},[e._v("VTOL_LAND"),n("OutboundLink")],1),e._v(" waypoint, the autopilot will attempt to calculate the proper distance at which to initiate the back-transition. It does this by looking at the current velocity (comparable to ground speed) and the expected deceleration.\nTo get the vehicle to come out of back-transition very close to its landing point you can tune the expected deceleration ("),n("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#VT_B_DEC_MSS"}},[e._v("VT_B_DEC_MSS")]),e._v(") parameter.\nMake sure you have a large enough back-transition duration to allow the vehicle to reach its intended position before this timeout kicks in.")],1),e._v(" "),n("h2",{attrs:{id:"back-transition-duration"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#back-transition-duration"}},[e._v("#")]),e._v(" Back-transition duration")]),e._v(" "),n("p",[e._v("Setting a high back-transition time ("),n("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#VT_B_TRANS_DUR"}},[e._v("VT_B_TRANS_DUR")]),e._v(") will give the vehicle more time to slow down.\nDuring this period the VTOL will shut down its fixed-wing motor and slowly ramp up its MC motors while gliding.\nThe higher this time is set the longer the vehicle will glide in an attempt to slow down. The caveat of this behavior is that the vehicle will only control altitude and not position during this period, so some drift can occur.")],1)])}),[],!1,null,null,null);t.default=o.exports}}]);