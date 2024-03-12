(window.webpackJsonp=window.webpackJsonp||[]).push([[2079],{3781:function(t,e,a){"use strict";a.r(e);var i=a(19),o=Object(i.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"terrain-following-holding"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#terrain-following-holding"}},[t._v("#")]),t._v(" Terrain Following/Holding")]),t._v(" "),a("p",[t._v("PX4 supports "),a("a",{attrs:{href:"#terrain_following"}},[t._v("Terrain Following")]),t._v(" and "),a("a",{attrs:{href:"#terrain_hold"}},[t._v("Terrain Hold")]),t._v(" in "),a("RouterLink",{attrs:{to:"/zh/flight_modes_mc/position.html"}},[t._v("Position")]),t._v(" and "),a("RouterLink",{attrs:{to:"/zh/flight_modes_mc/altitude.html"}},[t._v("Altitude modes")]),t._v(", on "),a("em",[t._v("multicopters")]),t._v(" and "),a("em",[t._v("VTOL vehicles in MC mode")]),t._v(" that have a "),a("RouterLink",{attrs:{to:"/zh/sensor/rangefinders.html"}},[t._v("distance sensor")]),t._v(".")],1),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v('PX4 does not "natively" support terrain following in missions. *QGroundControl* can be used to define missions that *approximately* follow terrain (this just sets waypoint altitudes based on height above terrain, where terrain height at waypoints is obtained from a map database).')])]),t._v(" "),a("p",[a("a",{attrs:{id:"terrain_following"}})]),t._v(" "),a("h2",{attrs:{id:"terrain-following"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#terrain-following"}},[t._v("#")]),t._v(" Terrain Following")]),t._v(" "),a("p",[a("em",[t._v("Terrain following")]),t._v(" enables a vehicle to automatically maintain a relatively constant height above ground level when traveling at low altitudes. This is useful for avoiding obstacles and for maintaining constant height when flying over varied terrain (e.g. for aerial photography).")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("This feature can be enabled in "),a("RouterLink",{attrs:{to:"/zh/flight_modes_mc/position.html"}},[t._v("Position")]),t._v(" and "),a("RouterLink",{attrs:{to:"/zh/flight_modes_mc/altitude.html"}},[t._v("Altitude modes")]),t._v(", on "),a("em",[t._v("multicopters")]),t._v(" and "),a("em",[t._v("VTOL vehicles in MC mode")]),t._v(" that have a "),a("RouterLink",{attrs:{to:"/zh/sensor/rangefinders.html"}},[t._v("distance sensor")]),t._v(".")],1)]),t._v(" "),a("p",[t._v("When "),a("em",[t._v("terrain following")]),t._v(" is enabled, PX4 uses the output of the EKF estimator to provide the altitude estimate, and the estimated terrain altitude (calculated from distance sensor measurements using another estimator) to provide the altitude setpoint. As the distance to ground changes, the altitude setpoint adjusts to keep the height above ground constant.")]),t._v(" "),a("p",[t._v("At higher altitudes (when the estimator reports that the distance sensor data is invalid) the vehicle switches to "),a("em",[t._v("altitude following")]),t._v(", and will typically fly at a near-constant height above mean sea level (AMSL) using an absolute height sensor for altitude data.")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("More precisely, the vehicle will use the available selected sources of altitude data as defined "),a("RouterLink",{attrs:{to:"/zh/advanced_config/tuning_the_ecl_ekf.html#height"}},[t._v("here")]),t._v(".")],1)]),t._v(" "),a("p",[t._v("Terrain following is enabled by setting "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_ALT_MODE"}},[t._v("MPC_ALT_MODE")]),t._v(" to "),a("code",[t._v("1")]),t._v(".")],1),t._v(" "),a("p",[a("a",{attrs:{id:"terrain_hold"}})]),t._v(" "),a("h2",{attrs:{id:"terrain-hold"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#terrain-hold"}},[t._v("#")]),t._v(" Terrain Hold")]),t._v(" "),a("p",[a("em",[t._v("Terrain hold")]),t._v(" uses a distance sensor to help a vehicle to better maintain a constant height above ground in altitude control modes, when horizontally stationary at low altitude. This allows a vehicle to avoid altitude changes due to barometer drift or excessive barometer interference from rotor wash.")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("This feature can be enabled in "),a("RouterLink",{attrs:{to:"/zh/flight_modes_mc/position.html"}},[t._v("Position")]),t._v(" and "),a("RouterLink",{attrs:{to:"/zh/flight_modes_mc/altitude.html"}},[t._v("Altitude modes")]),t._v(", on "),a("em",[t._v("multicopters")]),t._v(" and "),a("em",[t._v("VTOL vehicles in MC mode")]),t._v(" that have a "),a("RouterLink",{attrs:{to:"/zh/sensor/rangefinders.html"}},[t._v("distance sensor")]),t._v(".")],1)]),t._v(" "),a("p",[t._v("When moving horizontally ("),a("code",[t._v("speed >")]),t._v(" "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_HOLD_MAX_XY"}},[t._v("MPC_HOLD_MAX_XY")]),t._v("), or above the altitude where the distance sensor is providing valid data, the vehicle will switch into "),a("em",[t._v("altitude following")]),t._v(".")],1),t._v(" "),a("p",[t._v("Terrain holding is enabled by setting "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MPC_ALT_MODE"}},[t._v("MPC_ALT_MODE")]),t._v(" to "),a("code",[t._v("2")]),t._v(".")],1),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[a("em",[t._v("Terrain hold")]),t._v(" is implemented similarly to "),a("a",{attrs:{href:"#terrain_following"}},[t._v("terrain following")]),t._v(". It uses the output of the EKF estimator to provide the altitude estimate, and the estimated terrain altitude (calculated from distance sensor measurements using a separate, single state terrain estimator) to provide the altitude setpoint. If the distance to ground changes due to external forces, the altitude setpoint adjusts to keep the height above ground constant.")])])])}),[],!1,null,null,null);e.default=o.exports}}]);