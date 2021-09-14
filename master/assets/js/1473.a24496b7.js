(window.webpackJsonp=window.webpackJsonp||[]).push([[1473],{2687:function(e,t,i){"use strict";i.r(t);var a=i(19),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"静态压力生成"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#静态压力生成"}},[e._v("#")]),e._v(" 静态压力生成")]),e._v(" "),i("p",[e._v("Air flowing over an enclosed vehicle can cause the "),i("em",[e._v("static pressure")]),e._v(" to change within the canopy/hull. Depending on the location of holes/leaks in the hull, you can end up with under or overpressure (similar to a wing).")]),e._v(" "),i("p",[e._v("The change in pressure can affect barometer measurements, leading to an inaccurate altitude estimate. This might manifest as the vehicle losing altitude when it stops moving in "),i("RouterLink",{attrs:{to:"/zh/flight_modes/altitude_mc.html"}},[e._v("Altitude")]),e._v(", "),i("RouterLink",{attrs:{to:"/zh/flight_modes/position_mc.html"}},[e._v("Position")]),e._v(" or "),i("RouterLink",{attrs:{to:"/zh/flight_modes/mission.html"}},[e._v("Mission")]),e._v(" modes (when the vehicle stops moving the static pressure drops, the sensor reports a higher altitude, and the vehicle compensates by descending).")],1),e._v(" "),i("p",[e._v("One solution is to use foam-filled venting holes to reduce the buildup (as much as possible) and then attempt dynamic calibration to remove any remaining effects.")]),e._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[e._v("提示")]),e._v(" "),i("p",[e._v('Before "fixing" the problem you should first check that the Z setpoint tracks the estimated altitude (to verify that there are no controller issues).')])]),e._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),i("p",[e._v("While it is possible to remove the barometer from the altitude estimate (i.e. only use altitude from the GPS), this is not recommended. GPS is inaccurate in many environments, and particularly in urban environments where you have signal reflections off buildings.")])]),e._v(" "),i("h2",{attrs:{id:"airflow-analysis"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#airflow-analysis"}},[e._v("#")]),e._v(" Airflow Analysis")]),e._v(" "),i("p",[e._v("You can modify the hull by drilling holes or filling them with foam.")]),e._v(" "),i("p",[e._v('One way to analyse the effects of these changes is to mount the drone on a car and drive around (on a relatively level surface) with the hull exposed to air/wind. By looking at the ground station you can review the effects of movement-induced static pressure changes on the measured altitude (using the road as "ground truth).')]),e._v(" "),i("p",[e._v("This process allows rapid iteration without draining batteries: modify drone, drive/review, repeat!")]),e._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[e._v("提示")]),e._v(" "),i("p",[e._v("Aim for a barometer altitude drop of less than 2 metres at maximum horizontal speed before attempting software-based calibration below.")])]),e._v(" "),i("h2",{attrs:{id:"dynamic-calibration"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#dynamic-calibration"}},[e._v("#")]),e._v(" Dynamic Calibration")]),e._v(" "),i("p",[e._v("After modifying the hardware, you can then use the "),i("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#EKF2_PCOEF_XN"}},[e._v("EKF2*PCOEF**")]),e._v(" parameters to tune for expected barometer variation based on relative air velocity. For more information see "),i("RouterLink",{attrs:{to:"/zh/advanced_config/tuning_the_ecl_ekf.html#correction-for-static-pressure-position-error"}},[e._v("ECL/EKF Overview & Tuning > Correction for Static Pressure Position Error")]),e._v(".")],1),e._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),i("p",[e._v("The approach works well if the relationship between the error due to static pressure and the velocity varies linearly. If the vehicle has a more complex aerodynamic model it will be less effective.")])])])}),[],!1,null,null,null);t.default=o.exports}}]);