(window.webpackJsonp=window.webpackJsonp||[]).push([[586],{2015:function(e,t,i){"use strict";i.r(t);var a=i(18),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"land-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#land-mode"}},[e._v("#")]),e._v(" Land Mode")]),e._v(" "),a("p",[a("RouterLink",{attrs:{to:"/ko/getting_started/flight_modes.html#key_position_fixed"}},[a("img",{attrs:{src:i(322),title:"필요한 위치 추정치(예: GPS)",width:"30px"}})])],1),e._v(" "),a("p",[e._v("The "),a("em",[e._v("Land")]),e._v(" flight mode causes the vehicle to land at the position where the mode was engaged. After landing, vehicles will disarm after a short timeout (by default).")]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("ul",[a("li",[e._v("This mode requires a valid position estimate unless the mode is entered due to a failsafe, in which case only altitude is required (typically a barometer is built into the flight controller).")]),e._v(" "),a("li",[e._v("This mode is automatic - no user intervention is "),a("em",[e._v("required")]),e._v(" to control the vehicle.")]),e._v(" "),a("li",[e._v("RC control switches can be used to change flight modes on any vehicle.")]),e._v(" "),a("li",[e._v("RC stick movement in a multicopter (or VTOL in multicopter mode) will "),a("a",{attrs:{href:"#COM_RC_OVERRIDE"}},[e._v("by default")]),e._v(" change the vehicle to "),a("RouterLink",{attrs:{to:"/ko/flight_modes/position_mc.html"}},[e._v("Position mode")]),e._v(" unless handling a critical battery failsafe.")],1)])]),e._v(" "),a("p",[e._v("The specific behaviour for each vehicle type is described below.")]),e._v(" "),a("h2",{attrs:{id:"multi-copter-mc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multi-copter-mc"}},[e._v("#")]),e._v(" Multi-Copter (MC)")]),e._v(" "),a("p",[e._v("The vehicle will land at the location at which the mode was engaged. The vehicle descends at the rate specified in "),a("a",{attrs:{href:"#MPC_LAND_SPEED"}},[e._v("MPC_LAND_SPEED")]),e._v(" and will disarm after landing (by "),a("a",{attrs:{href:"#COM_DISARM_LAND"}},[e._v("default")]),e._v(").")]),e._v(" "),a("p",[e._v("RC stick movement will "),a("a",{attrs:{href:"#COM_RC_OVERRIDE"}},[e._v("by default")]),e._v(" change the vehicle to "),a("RouterLink",{attrs:{to:"/ko/flight_modes/position_mc.html"}},[e._v("Position mode")]),e._v(" unless handling a critical battery failsafe.")],1),e._v(" "),a("p",[e._v("Landing is affected by the following parameters:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Parameter")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("span",{attrs:{id:"MPC_LAND_SPEED"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_LAND_SPEED"}},[e._v("MPC_LAND_SPEED")])],1),e._v(" "),a("td",[e._v("착륙 중 하강 속도. 이는 접지 상태를 알 수 없으므로 상당히 낮게 유지해야 합니다")])]),e._v(" "),a("tr",[a("td",[a("span",{attrs:{id:"COM_DISARM_LAND"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_DISARM_LAND"}},[e._v("COM_DISARM_LAND")])],1),e._v(" "),a("td",[e._v("Time-out for auto disarm after landing, in seconds. If set to -1 the vehicle will not disarm on landing.")])]),e._v(" "),a("tr",[a("td",[a("span",{attrs:{id:"COM_RC_OVERRIDE"}}),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_RC_OVERRIDE"}},[e._v("COM_RC_OVERRIDE")])],1),e._v(" "),a("td",[e._v("If enabled, stick movement on a multicopter (or VTOL in multicopter mode) gives control back to the pilot in "),a("RouterLink",{attrs:{to:"/ko/flight_modes/position_mc.html"}},[e._v("Position mode")]),e._v(" (except when vehicle is handling a critical battery failsafe). This can be separately enabled for auto modes and for offboard mode, and is enabled in auto modes by default.")],1)])])]),e._v(" "),a("h2",{attrs:{id:"fixed-wing-fw"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fixed-wing-fw"}},[e._v("#")]),e._v(" Fixed Wing (FW)")]),e._v(" "),a("p",[e._v("The vehicle will turn and land at the location at which the mode was engaged. RC stick movement is ignored.")]),e._v(" "),a("p",[e._v("Fixed wing landing logic and parameters are explained in the topic: "),a("RouterLink",{attrs:{to:"/ko/flying/fixed_wing_landing.html"}},[e._v("Landing (Fixed Wing)")]),e._v(".")],1),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("Often a FW vehicle will follow a fixed landing trajectory to ground (it will not attempt a flared landing). This is because in LAND mode the vehicle may not know ground altitude and will assume it is at sea level. As ground level may be much higher, a vehicle will often reach the ground at an altitude above where flare logic would be engaged.")])]),e._v(" "),a("p",[e._v("Landing is affected by the following parameters (also see "),a("RouterLink",{attrs:{to:"/ko/flying/fixed_wing_landing.html"}},[e._v("Landing (Fixed Wing)")]),e._v("):")],1),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Parameter")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_DISARM_LAND"}},[e._v("COM_DISARM_LAND")])],1),e._v(" "),a("td",[e._v("Time-out for auto disarm after landing, in seconds. If set to -1 the vehicle will not disarm on landing.")])])])]),e._v(" "),a("h2",{attrs:{id:"vtol"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vtol"}},[e._v("#")]),e._v(" VTOL")]),e._v(" "),a("p",[e._v("A VTOL follows the LAND behavior and parameters of "),a("a",{attrs:{href:"#fixed-wing-fw"}},[e._v("Fixed Wing")]),e._v(" when in FW mode, and of "),a("a",{attrs:{href:"#multi-copter-mc"}},[e._v("Multicopter")]),e._v(" when in MC mode. When "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#NAV_FORCE_VT"}},[e._v("NAV_FORCE_VT")]),e._v(" is set (default: on) a VTOL in FW mode will transition back to MC just before landing.")],1)])}),[],!1,null,null,null);t.default=o.exports},322:function(e,t,i){e.exports=i.p+"assets/img/position_fixed.c1403cf0.svg"}}]);