(window.webpackJsonp=window.webpackJsonp||[]).push([[336],{1726:function(t,e,i){"use strict";i.r(e);var a=i(19),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"missions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#missions"}},[t._v("#")]),t._v(" Missions")]),t._v(" "),a("h2",{attrs:{id:"planning-missions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#planning-missions"}},[t._v("#")]),t._v(" Planning Missions")]),t._v(" "),a("p",[t._v("Manually planning missions is straightforward:")]),t._v(" "),a("ul",[a("li",[t._v("Switch to the mission view")]),t._v(" "),a("li",[t._v("Select the "),a("strong",[t._v("Add Waypoint")]),t._v(' ("plus") icon in the top left.')]),t._v(" "),a("li",[t._v("Click on the map to add waypoints.")]),t._v(" "),a("li",[t._v("Use the waypoint list on the right to modify the waypoint parameters/type\nThe altitude indicator on the bottom provides a sense of the relative altitude of each waypoint.")]),t._v(" "),a("li",[t._v("Once finished, click on the "),a("strong",[t._v("Upload")]),t._v(" button (top right) to send the mission to the vehicle.")])]),t._v(" "),a("p",[t._v("You can also use the "),a("em",[t._v("Pattern")]),t._v(" tool to automate creation of survey grids.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("For more information see the "),a("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/PlanView/PlanView.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGroundControl User Guide"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("p",[a("img",{attrs:{src:i(860),alt:"planning-mission"}})]),t._v(" "),a("h3",{attrs:{id:"setting-vehicle-yaw"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setting-vehicle-yaw"}},[t._v("#")]),t._v(" Setting Vehicle Yaw")]),t._v(" "),a("p",[t._v("If set, a multi-rotor vehicle will yaw to face the "),a("strong",[t._v("Heading")]),t._v(" value specified in the target waypoint (corresponding to "),a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_NAV_WAYPOINT",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAV_CMD_NAV_WAYPOINT.param4"),a("OutboundLink")],1),t._v(").")]),t._v(" "),a("p",[t._v("If "),a("strong",[t._v("Heading")]),t._v(" has not been explicitly set for the target waypoint ("),a("code",[t._v("param4=NaN")]),t._v(") then the vehicle will yaw towards a location specified in the parameter "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MPC_YAW_MODE"}},[t._v("MPC_YAW_MODE")]),t._v(".\nBy default this is the next waypoint.")],1),t._v(" "),a("p",[t._v("Vehicle types that cannot independently control yaw and direction of travel will ignore yaw settings (e.g. Fixed Wing).")]),t._v(" "),a("h3",{attrs:{id:"setting-acceptance-turning-radius"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setting-acceptance-turning-radius"}},[t._v("#")]),t._v(" Setting Acceptance/Turning Radius")]),t._v(" "),a("p",[t._v("The "),a("em",[t._v("acceptance radius")]),t._v(" defines the circle around a waypoint within which a vehicle considers it has reached the waypoint, and will immediately switch to (and start turning towards) the next waypoint.")]),t._v(" "),a("p",[t._v("For a multi-rotor drones, the acceptance radius is tuned using the parameter "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#NAV_ACC_RAD"}},[t._v("NAV_ACC_RAD")]),t._v(".\nBy default, the radius is small to ensure that multirotors pass above the waypoints, but it can be increased to create a smoother path such that the drone starts to turn before reaching the waypoint.")],1),t._v(" "),a("p",[t._v("The image below shows the same mission flown with different acceptance radius parameters:")]),t._v(" "),a("p",[a("img",{attrs:{src:i(861),alt:"acceptance radius comparison"}})]),t._v(" "),a("p",[t._v("The speed in the turn is automatically computed based on the acceptance radius (= turning radius) and the maximum allowed acceleration and jerk (see "),a("RouterLink",{attrs:{to:"/en/config_mc/mc_jerk_limited_type_trajectory.html#auto-mode"}},[t._v("Jerk-limited Type Trajectory for Multicopters")]),t._v(").")],1),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("For more information about the impact of the acceptance radius around the waypoint see: "),a("RouterLink",{attrs:{to:"/en/flight_modes/mission.html#rounded-turns-inter-waypoint-trajectory"}},[t._v("Mission Mode > Inter-waypoint Trajectory")]),t._v(".")],1)]),t._v(" "),a("h2",{attrs:{id:"flying-missions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flying-missions"}},[t._v("#")]),t._v(" Flying Missions")]),t._v(" "),a("p",[t._v("Once the mission is uploaded, switch to the flight view.\nThe mission is displayed in a way that makes it easy to track progress (it cannot be modified in this view).")]),t._v(" "),a("p",[a("img",{attrs:{src:i(862),alt:"flying-mission"}})])])}),[],!1,null,null,null);e.default=n.exports},860:function(t,e,i){t.exports=i.p+"assets/img/planning_mission.05ce0920.jpg"},861:function(t,e,i){t.exports=i.p+"assets/img/acceptance_radius_comparison.b183ada4.jpg"},862:function(t,e,i){t.exports=i.p+"assets/img/flying_mission.8dfc3df0.jpg"}}]);