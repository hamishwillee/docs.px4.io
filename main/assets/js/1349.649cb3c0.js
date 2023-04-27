(window.webpackJsonp=window.webpackJsonp||[]).push([[1349],{2533:function(e,t,o){"use strict";o.r(t);var a=o(19),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"vtl-역전환-튜닝"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#vtl-역전환-튜닝"}},[e._v("#")]),e._v(" VTL 역전환 튜닝")]),e._v(" "),o("p",[e._v("When a VTOL performs a back-transition (transition from fixed wing mode to multicopter) it needs to slow down before the multicopter can take proper control. To help with braking, the controller will pitch up the vehicle if the current deceleration is below what is set in expected deceleration ("),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#VT_B_DEC_MSS"}},[e._v("VT_B_DEC_MSS")]),e._v("). The response of this deceleration controller can be tuned through a "),o("code",[e._v("FF")]),e._v(" and a "),o("code",[e._v("I")]),e._v(" gain: "),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#VT_B_DEC_FF"}},[e._v("VT_B_DEC_FF")]),e._v(", "),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#VT_B_DEC_I"}},[e._v("VT_B_DEC_I")]),e._v(". Usually leaving the "),o("code",[e._v("FF")]),e._v(" at 0 and increasing the "),o("code",[e._v("I")]),e._v(" if required yields the best results.")],1),e._v(" "),o("p",[e._v("The vehicle will consider the back-transition complete when the horizontal speed has reached multicopter cruise speed ("),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_XY_CRUISE"}},[e._v("MPC_XY_CRUISE")]),e._v(") or when the back-transition duration ("),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#VT_B_TRANS_DUR"}},[e._v("VT_B_TRANS_DUR")]),e._v(") has passed (whichever comes first).")],1),e._v(" "),o("h2",{attrs:{id:"예상-감속-설정"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#예상-감속-설정"}},[e._v("#")]),e._v(" 예상 감속 설정")]),e._v(" "),o("p",[e._v("When flying missions that make use of a "),o("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_NAV_VTOL_LAND",target:"_blank",rel:"noopener noreferrer"}},[e._v("VTOL_LAND"),o("OutboundLink")],1),e._v(" waypoint, the autopilot will attempt to calculate the proper distance at which to initiate the back-transition. It does this by looking at the current velocity (comparable to ground speed) and the expected deceleration. To get the vehicle to come out of back-transition very close to its landing point you can tune the expected deceleration ("),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#VT_B_DEC_MSS"}},[e._v("VT_B_DEC_MSS")]),e._v(") parameter. Make sure you have a large enough back-transition duration to allow the vehicle to reach its intended position before this timeout kicks in.")],1),e._v(" "),o("h2",{attrs:{id:"역전환-시간"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#역전환-시간"}},[e._v("#")]),e._v(" 역전환 시간")]),e._v(" "),o("p",[e._v("Setting a high back-transition time ("),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#VT_B_TRANS_DUR"}},[e._v("VT_B_TRANS_DUR")]),e._v(") will give the vehicle more time to slow down. During this period the VTOL will shut down its fixed wing motor and slowly ramp up its MC motors while gliding. The higher this time is set the longer the vehicle will glide in an attempt to slow down. The caveat of this behavior is that the vehicle will only control altitude and not position during this period, so some drift can occur.")],1)])}),[],!1,null,null,null);t.default=r.exports}}]);