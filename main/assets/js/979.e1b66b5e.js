(window.webpackJsonp=window.webpackJsonp||[]).push([[979],{1877:function(e,t,a){"use strict";a.r(t);var o=a(19),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"land-detector-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#land-detector-configuration"}},[e._v("#")]),e._v(" Land Detector Configuration")]),e._v(" "),a("p",[e._v("The land detector is a dynamic vehicle model representing key vehicle states from ground contact through to landed.\nThis topic explains the main parameters you may wish to tune in order to improve landing behaviour.")]),e._v(" "),a("h2",{attrs:{id:"auto-disarming"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#auto-disarming"}},[e._v("#")]),e._v(" Auto-Disarming")]),e._v(" "),a("p",[e._v("The land-detector automatically disarms the vehicle on landing.")]),e._v(" "),a("p",[e._v("You can set "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#COM_DISARM_LAND"}},[e._v("COM_DISARM_LAND")]),e._v(" to specify the number of seconds after landing that the system should disarm (or turn off auto-disarming by setting the parameter to -1).")],1),e._v(" "),a("h2",{attrs:{id:"multicopter-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multicopter-configuration"}},[e._v("#")]),e._v(" Multicopter Configuration")]),e._v(" "),a("p",[e._v("The complete set of relevant landing detector parameters are listed in the parameter reference with the prefix "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#land-detector"}},[e._v("LNDMC")]),e._v(" (these can be edited in QGroundControl via the "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameters.html"}},[e._v("parameter editor")]),e._v(").")],1),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("Information about how the parameters affect landing can be found below in "),a("a",{attrs:{href:"#mc-land-detector-states"}},[e._v("Land Detector States")]),e._v(".")])]),e._v(" "),a("p",[e._v("Other key parameters that you may need to tune in order to improve landing behaviour on particular airframes are:")]),e._v(" "),a("ul",[a("li",[a("p",[a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MPC_THR_HOVER"}},[e._v("MPC_THR_HOVER")]),e._v(" - the hover throttle of the system (default is 50%).\nIt is important to set this correctly as it makes altitude control more accurate and ensures correct land detection.\nA racer or a big camera drone without payload mounted might need a much lower setting (e.g. 35%).")],1),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("Incorrectly setting "),a("code",[e._v("MPC_THR_HOVER")]),e._v(" may result in ground-contact or maybe-landed detection while still in air (in particular, while descending in "),a("RouterLink",{attrs:{to:"/en/flight_modes_mc/position.html"}},[e._v("Position mode")]),e._v(" or "),a("RouterLink",{attrs:{to:"/en/flight_modes_mc/altitude.html"}},[e._v("Altitude mode")]),e._v(').\nThis causes the vehicle to "twitch" (turn down the motors, and then immediately turn them back up).')],1)])]),e._v(" "),a("li",[a("p",[a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MPC_THR_MIN"}},[e._v("MPC_THR_MIN")]),e._v(" - the overall minimum throttle of the system.\nThis should be set to enable a controlled descent.")],1)]),e._v(" "),a("li",[a("p",[a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MPC_LAND_CRWL"}},[e._v("MPC_LAND_CRWL")]),e._v(" - the vertical speed applied in the last stage of autonomous landing if the system has a distance sensor and it is present and working. Has to be set larger than LNDMC_Z_VEL_MAX.")],1)])]),e._v(" "),a("h3",{attrs:{id:"mc-land-detector-states"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mc-land-detector-states"}},[e._v("#")]),e._v(" MC Land Detector States")]),e._v(" "),a("p",[e._v("In order to detect landing, the multicopter first has to go through three different states, where each state contains the conditions from the previous states plus tighter constraints.\nIf a condition cannot be reached because of missing sensors, then the condition is true by default.\nFor instance, in "),a("RouterLink",{attrs:{to:"/en/flight_modes_mc/acro.html"}},[e._v("Acro mode")]),e._v(" and no sensor is active except for the gyro sensor, then the detection solely relies on thrust output and time.")],1),e._v(" "),a("p",[e._v("In order to proceed to the next state, each condition has to be true for a third of the configured total land detector trigger time "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#LNDMC_TRIG_TIME"}},[e._v("LNDMC_TRIG_TIME")]),e._v(".\nIf the vehicle is equipped with a distance sensor, but the distance to ground is currently not measurable (usually because it is too large), the trigger time is increased by a factor of 3.")],1),e._v(" "),a("p",[e._v("If one condition fails, the land detector drops out of the current state immediately.")]),e._v(" "),a("h4",{attrs:{id:"ground-contact"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ground-contact"}},[e._v("#")]),e._v(" Ground Contact")]),e._v(" "),a("p",[e._v("Conditions for this state:")]),e._v(" "),a("ul",[a("li",[e._v("no vertical movement ("),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#LNDMC_Z_VEL_MAX"}},[e._v("LNDMC_Z_VEL_MAX")]),e._v(")")],1),e._v(" "),a("li",[e._v("no horizontal movement ("),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#LNDMC_XY_VEL_MAX"}},[e._v("LNDMC_XY_VEL_MAX")]),e._v(")")],1),e._v(" "),a("li",[e._v("lower thrust than "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MPC_THR_MIN"}},[e._v("MPC_THR_MIN")]),e._v(" + (hover throttle - "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MPC_THR_MIN"}},[e._v("MPC_THR_MIN")]),e._v(") * (0.3, unless a hover thrust estimate is available, then 0.6),")],1),e._v(" "),a("li",[e._v("additional check if vehicle is currently in a height-rate controlled flight mode: the vehicle has to have the intent to descend (vertical velocity setpoint above LNDMC_Z_VEL_MAX).")]),e._v(" "),a("li",[e._v("additional check for vehicles with a distance sensor: current distance to ground is below 1m.")])]),e._v(" "),a("p",[e._v("If the vehicle is in position- or velocity-control and ground contact was detected,\nthe position controller will set the thrust vector along the body x-y-axis to zero.")]),e._v(" "),a("h4",{attrs:{id:"maybe-landed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#maybe-landed"}},[e._v("#")]),e._v(" Maybe Landed")]),e._v(" "),a("p",[e._v("Conditions for this state:")]),e._v(" "),a("ul",[a("li",[e._v("all conditions of the "),a("a",{attrs:{href:"#ground-contact"}},[e._v("ground contact")]),e._v(" state are true")]),e._v(" "),a("li",[e._v("is not rotating ("),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#LNDMC_ROT_MAX"}},[e._v("LNDMC_ROT_MAX")]),e._v(")")],1),e._v(" "),a("li",[e._v("has low thrust "),a("code",[e._v("MPC_THR_MIN + (MPC_THR_HOVER - MPC_THR_MIN) * 0.1")])]),e._v(" "),a("li",[e._v("no freefall detected")])]),e._v(" "),a("p",[e._v("If the vehicle only has knowledge of thrust and angular rate,\nin order to proceed to the next state the vehicle has to have low thrust and no rotation for 8.0 seconds.")]),e._v(" "),a("p",[e._v("If the vehicle is in position or velocity control and maybe landed was detected,\nthe position controller will set the thrust vector to zero.")]),e._v(" "),a("h4",{attrs:{id:"landed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#landed"}},[e._v("#")]),e._v(" Landed")]),e._v(" "),a("p",[e._v("Conditions for this state:")]),e._v(" "),a("ul",[a("li",[e._v("all conditions of the "),a("a",{attrs:{href:"#maybe-landed"}},[e._v("maybe landed")]),e._v(" state are true")])]),e._v(" "),a("h2",{attrs:{id:"fixed-wing-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fixed-wing-configuration"}},[e._v("#")]),e._v(" Fixed-wing Configuration")]),e._v(" "),a("p",[e._v("Tuning parameters for fixed-wing land detection:")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#LNDFW_AIRSPD_MAX"}},[e._v("LNDFW_AIRSPD_MAX")]),e._v(" - the maximum airspeed allowed for the system still to be considered landed.\nHas to be a tradeoff between airspeed sensing accuracy and triggering fast enough.\nBetter airspeed sensors should allow lower values of this parameter.")],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#LNDFW_VEL_XY_MAX"}},[e._v("LNDFW_VEL_XY_MAX ")]),e._v(" - the maximum horizontal velocity for the system to be still be considered landed.")],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#LNDFW_VEL_XY_MAX"}},[e._v("LNDFW_VEL_Z_MAX")]),e._v(" - the maximum vertical velocity for the system to be still be considered landed.")],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#LNDFW_XYACC_MAX"}},[e._v("LNDFW_XYACC_MAX")]),e._v(" - the maximal horizontal acceleration for the system to still be considered landed.")],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#LNDFW_TRIG_TIME"}},[e._v("LNDFW_TRIG_TIME")]),e._v(" - Trigger time during which the conditions above have to be fulfilled to declare a landing.")],1)]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("When FW launch detection is enabled ("),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#FW_LAUN_DETCN_ON"}},[e._v("FW_LAUN_DETCN_ON")]),e._v('), the vehicle will stay in "landed" state until takeoff is detected (which is purely based on acceleration and not velocity).')],1)]),e._v(" "),a("h2",{attrs:{id:"vtol-land-detector"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vtol-land-detector"}},[e._v("#")]),e._v(" VTOL Land Detector")]),e._v(" "),a("p",[e._v("The VTOL land detector is 1:1 the same as the MC land detector if the system is in hover mode. In FW mode, land detection is disabled.")])])}),[],!1,null,null,null);t.default=n.exports}}]);