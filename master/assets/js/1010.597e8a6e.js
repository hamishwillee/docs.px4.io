(window.webpackJsonp=window.webpackJsonp||[]).push([[1010],{2087:function(e,t,a){"use strict";a.r(t);var i=a(18),o=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"terrain-following-holding-range-aid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#terrain-following-holding-range-aid"}},[e._v("#")]),e._v(" Terrain Following/Holding & Range Aid")]),e._v(" "),a("p",[e._v("PX4 supports "),a("a",{attrs:{href:"#terrain_following"}},[e._v("Terrain Following")]),e._v(" and "),a("a",{attrs:{href:"#terrain_hold"}},[e._v("Terrain Hold")]),e._v(" in "),a("RouterLink",{attrs:{to:"/ko/flight_modes/position_mc.html"}},[e._v("Position")]),e._v(" and "),a("RouterLink",{attrs:{to:"/ko/flight_modes/altitude_mc.html"}},[e._v("Altitude modes")]),e._v(", on "),a("em",[e._v("multicopters")]),e._v(" and "),a("em",[e._v("VTOL vehicles in MC mode")]),e._v(" that have a "),a("RouterLink",{attrs:{to:"/ko/sensor/rangefinders.html"}},[e._v("distance sensor")]),e._v(".")],1),e._v(" "),a("p",[e._v("PX4 also supports using a "),a("em",[e._v("distance sensor")]),e._v(" as the "),a("a",{attrs:{href:"#distance_sensor_primary_altitude_source"}},[e._v("primary source of altitude data")]),e._v(" in any mode, either all the time, or just when flying at low altitudes at low velocities ("),a("a",{attrs:{href:"#range_aid"}},[e._v("Range Aid")]),e._v(").")]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v('PX4 does not "natively" support terrain following in missions. *QGroundControl* can be used to define missions that *approximately* follow terrain (this just sets waypoint altitudes based on height above terrain, where terrain height at waypoints is obtained from a map database).')])]),e._v(" "),a("p",[a("span",{attrs:{id:"terrain_following"}})]),e._v(" "),a("h2",{attrs:{id:"terrain-following"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#terrain-following"}},[e._v("#")]),e._v(" Terrain Following")]),e._v(" "),a("p",[a("em",[e._v("Terrain following")]),e._v(" enables a vehicle to automatically maintain a relatively constant height above ground level when traveling at low altitudes. This is useful for avoiding obstacles and for maintaining constant height when flying over varied terrain (e.g. for aerial photography).")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("This feature can be enabled in "),a("RouterLink",{attrs:{to:"/ko/flight_modes/position_mc.html"}},[e._v("Position")]),e._v(" and "),a("RouterLink",{attrs:{to:"/ko/flight_modes/altitude_mc.html"}},[e._v("Altitude modes")]),e._v(", on "),a("em",[e._v("multicopters")]),e._v(" and "),a("em",[e._v("VTOL vehicles in MC mode")]),e._v(" that have a "),a("RouterLink",{attrs:{to:"/ko/sensor/rangefinders.html"}},[e._v("distance sensor")]),e._v(".")],1)]),e._v(" "),a("p",[e._v("When "),a("em",[e._v("terrain following")]),e._v(" is enabled, PX4 uses the output of the EKF estimator to provide the altitude estimate, and the estimated terrain altitude (calculated from distance sensor measurements using another estimator) to provide the altitude setpoint. As the distance to ground changes, the altitude setpoint adjusts to keep the height above ground constant.")]),e._v(" "),a("p",[e._v("At higher altitudes (when the estimator reports that the distance sensor data is invalid) the vehicle switches to "),a("em",[e._v("altitude following")]),e._v(", and will typically fly at a near-constant height above mean sea level (AMSL) using the barometer for altitude data.")]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("More precisely, the vehicle will use the "),a("em",[e._v("primary source of altitude data")]),e._v(" as defined in "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_HGT_MODE"}},[e._v("EKF2_HGT_MODE")]),e._v(". This is, by default, the barometer.")],1)]),e._v(" "),a("p",[e._v("Terrain following is enabled by setting "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_ALT_MODE"}},[e._v("MPC_ALT_MODE")]),e._v(" to "),a("code",[e._v("1")]),e._v(".")],1),e._v(" "),a("p",[a("span",{attrs:{id:"terrain_hold"}})]),e._v(" "),a("h2",{attrs:{id:"terrain-hold"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#terrain-hold"}},[e._v("#")]),e._v(" Terrain Hold")]),e._v(" "),a("p",[a("em",[e._v("Terrain hold")]),e._v(" uses a distance sensor to help a vehicle to better maintain a constant height above ground in altitude control modes, when horizontally stationary at low altitude. This allows a vehicle to avoid altitude changes due to barometer drift or excessive barometer interference from rotor wash.")]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("This feature can be enabled in "),a("RouterLink",{attrs:{to:"/ko/flight_modes/position_mc.html"}},[e._v("Position")]),e._v(" and "),a("RouterLink",{attrs:{to:"/ko/flight_modes/altitude_mc.html"}},[e._v("Altitude modes")]),e._v(", on "),a("em",[e._v("multicopters")]),e._v(" and "),a("em",[e._v("VTOL vehicles in MC mode")]),e._v(" that have a "),a("RouterLink",{attrs:{to:"/ko/sensor/rangefinders.html"}},[e._v("distance sensor")]),e._v(".")],1)]),e._v(" "),a("p",[e._v("When moving horizontally ("),a("code",[e._v("speed >")]),e._v(" "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_HOLD_MAX_XY"}},[e._v("MPC_HOLD_MAX_XY")]),e._v("), or above the altitude where the distance sensor is providing valid data, the vehicle will switch into "),a("em",[e._v("altitude following")]),e._v(".")],1),e._v(" "),a("p",[e._v("Terrain holding is enabled by setting "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MPC_ALT_MODE"}},[e._v("MPC_ALT_MODE")]),e._v(" to "),a("code",[e._v("2")]),e._v(".")],1),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[a("em",[e._v("Terrain hold")]),e._v(" is implemented similarly to "),a("a",{attrs:{href:"#terrain_following"}},[e._v("terrain following")]),e._v(". It uses the output of the EKF estimator to provide the altitude estimate, and the estimated terrain altitude (calculated from distance sensor measurements using a separate, single state terrain estimator) to provide the altitude setpoint. If the distance to ground changes due to external forces, the altitude setpoint adjusts to keep the height above ground constant.")])]),e._v(" "),a("p",[a("span",{attrs:{id:"distance_sensor_primary_altitude_source"}})]),e._v(" "),a("h2",{attrs:{id:"distance-sensor-as-primary-source-of-height"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#distance-sensor-as-primary-source-of-height"}},[e._v("#")]),e._v(" Distance Sensor as Primary Source of Height")]),e._v(" "),a("p",[e._v("PX4 allows you to make a distance sensor the "),a("em",[e._v("primary source of altitude data")]),e._v(" (in any flight mode/vehicle type). This may be useful when no barometer is available, or for applications when the vehicle is "),a("em",[e._v("guaranteed")]),e._v(" to only fly over a near-flat surface (e.g. indoors).")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("The default and preferred altitude sensor for most use cases is the barometer (when available).")])]),e._v(" "),a("p",[e._v("When using a distance sensor as the primary source of height, fliers should be aware:")]),e._v(" "),a("ul",[a("li",[e._v("Flying over obstacles can lead to the estimator rejecting rangefinder data (due to internal data consistency checks), which can result in poor altitude holding while the estimator is relying purely on accelerometer estimates.")])]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("This scenario might occur when a vehicle ascends a slope at a near-constant height above ground, because the rangefinder altitude does not change while that estimated from the accelerometer does."),a("br"),e._v("\nThe ECL performs innovation consistency checks that take into account the error between measurement and current state as well as the estimated variance of the state and the variance of the measurement itself. If the checks fail the rangefinder data will be rejected, and the altitude will be estimated from the accelerometer. After 5 seconds of inconsistent data the estimator resets the state (in this case height) to match the current distance sensor data. The measurements might also become consistent again, for example, if the vehicle descends, or if the estimated height drifts to match the measured rangefinder height. ")])]),e._v(" "),a("ul",[a("li",[a("p",[e._v("The local NED origin will move up and down with ground level.")])]),e._v(" "),a("li",[a("p",[e._v("Rangefinder performance over uneven surfaces (e.g. trees) can be very poor, resulting in noisy and inconsistent data. This again leads to poor altitude hold.")])])]),e._v(" "),a("p",[e._v("The feature is enabled by setting: "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_HGT_MODE"}},[e._v("EKF2_HGT_MODE=2")]),e._v(".")],1),e._v(" "),a("p",[a("span",{attrs:{id:"range_aid"}})]),e._v(" "),a("h2",{attrs:{id:"range-aid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#range-aid"}},[e._v("#")]),e._v(" Range Aid")]),e._v(" "),a("p",[a("em",[e._v("Range Aid")]),e._v(" uses a distance sensor as the primary source of height estimation during low speed/low altitude operation, but will otherwise use the primary source of altitude data defined in "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_HGT_MODE"}},[e._v("EKF2_HGT_MODE")]),e._v(" (typically a barometer). It is primarily intended for "),a("em",[e._v("takeoff and landing")]),e._v(", in cases where the barometer setup is such that interference from rotor wash is excessive and can corrupt EKF state estimates.")],1),e._v(" "),a("p",[e._v("Range aid may also be used to improve altitude hold when the vehicle is stationary.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[a("a",{attrs:{href:"#terrain_hold"}},[e._v("Terrain Hold")]),e._v(" is recommended over "),a("em",[e._v("Range Aid")]),e._v(" for terrain holding. This is because terrain hold uses the normal ECL/EKF estimator for determining height, and this is generally more reliable than a distance sensor in most conditions.")])]),e._v(" "),a("p",[a("em",[e._v("Range Aid")]),e._v(" is enabled by setting "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_RNG_AID"}},[e._v("EKF2_RNG_AID=1")]),e._v(" (when the primary source of altitude data ("),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_HGT_MODE"}},[e._v("EKF2_HGT_MODE")]),e._v(") is "),a("em",[e._v("not")]),e._v(" the rangefinder).")],1),e._v(" "),a("p",[e._v("Range aid is further configured using the "),a("code",[e._v("EKF2_RNG_A_")]),e._v(" parameters:")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_RNG_A_VMAX"}},[e._v("EKF2_RNG_A_VMAX")]),e._v(": Maximum horizontal speed, above which range aid is disabled.")],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_RNG_A_HMAX"}},[e._v("EKF2_RNG_A_HMAX")]),e._v(": Maximum height, above which range aid is disabled.")],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_RNG_A_IGATE"}},[e._v("EKF2_RNG_A_IGATE")]),e._v(': Range aid consistency checks "gate" (a measure of the error before range aid is disabled).')],1)])])}),[],!1,null,null,null);t.default=o.exports}}]);