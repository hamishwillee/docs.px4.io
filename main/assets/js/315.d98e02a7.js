(window.webpackJsonp=window.webpackJsonp||[]).push([[315],{2627:function(e,t,a){"use strict";a.r(t);var o=a(19),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"helicopter-configuration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#helicopter-configuration"}},[e._v("#")]),e._v(" Helicopter Configuration")]),e._v(" "),o("p",[e._v("This section contains topics related to "),o("RouterLink",{attrs:{to:"/ko/frames_helicopter/"}},[e._v("helicopter")]),e._v(" configuration and tuning.")],1),e._v(" "),o("h2",{attrs:{id:"supported-configurations"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#supported-configurations"}},[e._v("#")]),e._v(" Supported Configurations")]),e._v(" "),o("p",[e._v("Supported helicopter configurations:")]),e._v(" "),o("ul",[o("li",[e._v("Single main rotor with swash-plate controlled by up to 4 swash-plate servos and a mechanically uncoupled tail rotor driven by an ESC.")]),e._v(" "),o("li",[e._v("Single main rotor with swash-plate controlled by up to 4 swash-plate servos and a mechanically coupled tail controlled by a servo.")])]),e._v(" "),o("p",[e._v("Supported flight operations/features:")]),e._v(" "),o("ul",[o("li",[e._v("Same as a multicopter.")]),e._v(" "),o("li",[e._v("At the time of writing no autonomous/guided 3D flying with negative thrust is possible.")])]),e._v(" "),o("h2",{attrs:{id:"setup"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#setup"}},[e._v("#")]),e._v(" Setup")]),e._v(" "),o("p",[e._v("To setup and configure a helicopter:")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Select a helicopter "),o("RouterLink",{attrs:{to:"/ko/config/airframe.html"}},[e._v("Airframe")]),e._v(" in QGroundControl. At time of writing there is only "),o("em",[e._v("Generic Helicopter (Tail ESC)")]),e._v(" in the Helicopter group. This will configure the helicopter frame with a mechanically uncoupled tail ("),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#CA_AIRFRAME"}},[e._v("CA_AIRFRAME")]),e._v(": "),o("code",[e._v("10: Helicopter (tail ESC)")]),e._v(").")],1),e._v(" "),o("p",[o("img",{attrs:{src:a(687),alt:"QGC - helicopter airframe"}})])])]),e._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),o("p",[e._v("There is no separate airframe for the helicopter with tail servo. To select this configuration, set the parameter "),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#CA_AIRFRAME"}},[e._v("CA_AIRFRAME")]),e._v(" to "),o("em",[e._v("Helicopter (tail Servo)")]),e._v(". The actuator configuration screen will then change to support this frame type.")],1)]),e._v(" "),o("ol",[o("li",[e._v("Configure helicopter actuator geometry in "),o("strong",[e._v("Vehicle Setup > Actuators")]),e._v(".")])]),e._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),o("p",[e._v("Actuator setup and testing is covered for most frames in "),o("RouterLink",{attrs:{to:"/ko/config/actuators.html"}},[e._v("Actuators")]),e._v(". While that is referenced below, this is the main topic for helicopter setup information.")],1)]),e._v(" "),o("p",[e._v("The geometry for a "),o("RouterLink",{attrs:{to:"/ko/airframes/airframe_reference.html#copter_helicopter_generic_helicopter_(tail_esc)"}},[e._v("Generic Helicopter - with Tail ESC")]),e._v(" is shown below.")],1),e._v(" "),o("p",[o("img",{attrs:{src:a(688),alt:"Geometry: helicopter"}})]),e._v(" "),o("p",[e._v("The motors have no configurable geometry:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("Rotor (Motor 1)")]),e._v(": The main rotor")]),e._v(" "),o("li",[o("code",[e._v("Yaw tail motor (Motor 2)")]),e._v(": The tail rotor")])]),e._v(" "),o("p",[e._v("Swash plate servos: "),o("code",[e._v("3")]),e._v(" | "),o("code",[e._v("4")])]),e._v(" "),o("p",[e._v("For each servo set:")]),e._v(" "),o("ul",[o("li",[o("p",[o("code",[e._v("Angle")]),e._v(": Clockwise angle in degree on the swash plate circle at which the servo arm is attached starting from "),o("code",[e._v("0")]),e._v(" pointing forwards. Example for a typical setup where three servos are controlling the swash plate equally distributed over the circle (360° / 3 =) 120° apart each which results in the angles:")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("#")]),e._v(" "),o("th",[e._v("Angle")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("Servo 1")]),e._v(" "),o("td",[e._v("60°")])]),e._v(" "),o("tr",[o("td",[e._v("Servo 2")]),e._v(" "),o("td",[e._v("180°")])]),e._v(" "),o("tr",[o("td",[e._v("Servo 3")]),e._v(" "),o("td",[e._v("300°")])])])]),e._v(" "),o("img",{attrs:{width:"700",alt:"warning and requirement",src:a(689)}})]),e._v(" "),o("li",[o("p",[o("code",[e._v("Arm Length (relative to each other)")]),e._v(": Radius from the swash plate center (top view). A shorter arm means the same servo motion moves the plate more. This allows the autopilot to compensate.")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("Trim")]),e._v(": Offset individual servo positions. This is only needed in rare case when the swash plate is not level even though all servos are centered.")])])]),e._v(" "),o("p",[e._v("Additional settings:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("Yaw compensation scale based on collective pitch")]),e._v(": How much yaw is feed forward compensated based on the current collective pitch.")]),e._v(" "),o("li",[o("code",[e._v("Main rotor turns counter-clockwise")]),e._v(": "),o("code",[e._v("Disabled")]),e._v(" (clockwise rotation) | "),o("code",[e._v("Enabled")])]),e._v(" "),o("li",[o("code",[e._v("Throttle spoolup time")]),e._v(": Set value (in seconds) greater than the achievable minimum motor spool up time. A larger value may improve user experience.")])]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Remove the rotor blades and propellers")])]),e._v(" "),o("li",[o("p",[e._v("Assign motors and servos to outputs and test (also in "),o("RouterLink",{attrs:{to:"/ko/config/actuators.html"}},[e._v("Actuator configuration")]),e._v("):")],1),e._v(" "),o("ol",[o("li",[e._v("Assign the "),o("RouterLink",{attrs:{to:"/ko/config/actuators.html#actuator-outputs"}},[e._v("motors and servos to the outputs")]),e._v(".")],1),e._v(" "),o("li",[e._v("Power the vehicle with a battery and use the "),o("RouterLink",{attrs:{to:"/ko/config/actuators.html#actuator-testing"}},[e._v("actuator testing sliders")]),e._v(" to validate correct servo and motor assignment and direction.")],1)])]),e._v(" "),o("li",[o("p",[e._v("Using an RC in "),o("RouterLink",{attrs:{to:"/ko/flight_modes_mc/acro.html"}},[e._v("Acro mode")]),e._v(", verify the correct movement of the swash-plate. With most airframes you need to see the following:")],1),e._v(" "),o("ul",[o("li",[e._v("Moving the roll stick to the right should tilt the swash-plate to the right.")]),e._v(" "),o("li",[e._v("Moving the pitch stick forward should tilt the swash-plate forward.")])]),e._v(" "),o("p",[e._v("In case your airframe requires any phase lag angle offset this can simply be added to all swash-plate servo angles. Refer to the manufacturer's documentation for your airframe.")])]),e._v(" "),o("li",[o("p",[e._v("Arm the vehicle and check the main rotor spins up slowly. Adjust the throttle spoolup time as needed using the parameter "),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_SPOOLUP_TIME"}},[e._v("COM_SPOOLUP_TIME")]),e._v(". You can also adjust the throttle curve with the parameters "),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#CA_HELI_THR_C0"}},[e._v("CA_HELI_THR_Cx")]),e._v(". The default is constant, maximum throttle (suitable for most setups).")],1)]),e._v(" "),o("li",[o("p",[e._v("Disarm again and power off.")])]),e._v(" "),o("li",[o("p",[e._v("Put the rotor blades on and power the vehicle.")])]),e._v(" "),o("li",[o("p",[e._v("Configure the collective pitch curve using the parameters "),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#CA_HELI_PITCH_C0"}},[e._v("CA_HELI_PITCH_Cx")]),e._v(". Set the minimum and maximum according to the minimum and maximum blade angles you want. Make sure the minimum is low enough so the vehicle can still descend. Instead start off with a too low value. The default is slightly negative for that reason and should be a good starting point.")],1)])]),e._v(" "),o("h2",{attrs:{id:"tuning"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#tuning"}},[e._v("#")]),e._v(" Tuning")]),e._v(" "),o("p",[e._v("After completing the previous steps you are ready to arm with blades mounted.")]),e._v(" "),o("p",[e._v("First tune the "),o("a",{attrs:{href:"#rate-controller"}},[e._v("rate controller")]),e._v(" and "),o("a",{attrs:{href:"#yaw-compensation"}},[e._v("yaw compensation")]),e._v(" as shown in the following sections (these are helicopter-specific).")]),e._v(" "),o("p",[e._v("Attitude, velocity, and position controller tuning is then performed in the "),o("RouterLink",{attrs:{to:"/ko/config_mc/"}},[e._v("same as for multicopters")]),e._v(".")],1),e._v(" "),o("p",[e._v("Note that autotuning is not supported/tested (at time of writing).")]),e._v(" "),o("h3",{attrs:{id:"yaw-compensation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#yaw-compensation"}},[e._v("#")]),e._v(" Yaw Compensation")]),e._v(" "),o("p",[e._v("Since the yaw torque compensation is crucial for a stable helicopter hover a rough configuration of it needs to be done first. For accurate tuning this chapter can be revisited once the rate controller is working as expected.")]),e._v(" "),o("p",[e._v("Most importantly set the rotation direction of your main rotor which is by default clockwise when seen from above the airframe. In case yours turns counter-clockwise set "),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#CA_HELI_YAW_CCW"}},[e._v("CA_HELI_YAW_CCW")]),e._v(" to 1.")],1),e._v(" "),o("p",[e._v("There are two parameters to compensate yaw for the main rotor's collective and throttle: "),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#CA_HELI_YAW_CP_S"}},[e._v("CA_HELI_YAW_CP_S")]),e._v(" "),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#CA_HELI_YAW_TH_S"}},[e._v("CA_HELI_YAW_TH_S")])],1),e._v(" "),o("p",[e._v("A negative value is needed when positive thrust of the tail rotor rotates the vehicle opposite to the main rotor turn direction.")]),e._v(" "),o("h3",{attrs:{id:"rate-controller"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#rate-controller"}},[e._v("#")]),e._v(" Rate Controller")]),e._v(" "),o("p",[e._v("The rate controller should be tuned in "),o("RouterLink",{attrs:{to:"/ko/flight_modes_mc/acro.html"}},[e._v("Acro mode")]),e._v(", but can also be done in "),o("RouterLink",{attrs:{to:"/ko/flight_modes_mc/manual_stabilized.html"}},[e._v("Stabilized mode")]),e._v(" if you cannot fly Acro mode.")],1),e._v(" "),o("ol",[o("li",[o("p",[e._v("Start off with disabled rate controller gains, and only a small feed forward:")]),e._v(" "),o("div",{staticClass:"language-sh extra-class"},[o("pre",{pre:!0,attrs:{class:"language-sh"}},[o("code",[e._v("param "),o("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("set")]),e._v(" MC_ROLLRATE_P "),o("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("\nparam "),o("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("set")]),e._v(" MC_ROLLRATE_I "),o("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("\nparam "),o("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("set")]),e._v(" MC_ROLLRATE_D "),o("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("\nparam "),o("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("set")]),e._v(" MC_ROLLRATE_FF "),o("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.1")]),e._v("\nparam "),o("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("set")]),e._v(" MC_PITCHRATE_P "),o("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("\nparam "),o("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("set")]),e._v(" MC_PITCHRATE_I "),o("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("\nparam "),o("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("set")]),e._v(" MC_PITCHRATE_D "),o("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("\nparam "),o("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("set")]),e._v(" MC_PITCHRATE_FF "),o("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.1")]),e._v("\n")])])])]),e._v(" "),o("li",[o("p",[e._v("Take off slowly and provide some roll and stick movements. Use the QGC tuning UI to check the response:")]),e._v(" "),o("p",[o("img",{attrs:{src:a(351),alt:"QGC Rate Controller Tuning UI"}})]),e._v(" "),o("p",[e._v("Increase the roll and pitch feed forward gains "),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MC_ROLLRATE_FF"}},[e._v("MC_ROLLRATE_FF")]),e._v(", "),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MC_PITCHRATE_FF"}},[e._v("MC_PITCHRATE_FF")]),e._v(" until the response reaches the setpoint when giving a step input.")],1)]),e._v(" "),o("li",[o("p",[e._v("Then enable the PID gains. Start off with following values:")]),e._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MC_ROLLRATE_P"}},[e._v("MC_ROLLRATE_P")]),e._v(", "),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MC_PITCHRATE_P"}},[e._v("MC_PITCHRATE_P")]),e._v(" a quarter of the value you found to work well as the corresponding feed forward value in the previous step. "),o("code",[e._v("P = FF / 4")])],1)]),e._v(" "),o("div",{staticClass:"language-sh extra-class"},[o("pre",{pre:!0,attrs:{class:"language-sh"}},[o("code",[e._v("param "),o("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("set")]),e._v(" MC_ROLLRATE_I "),o("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.2")]),e._v("\nparam "),o("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("set")]),e._v(" MC_PITCHRATE_I "),o("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.2")]),e._v("\nparam "),o("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("set")]),e._v(" MC_ROLLRATE_D "),o("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.001")]),e._v("\nparam "),o("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("set")]),e._v(" MC_PITCHRATE_D "),o("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.001")]),e._v("\n")])])]),o("p",[e._v("Then increase the "),o("code",[e._v("P")]),e._v(" and "),o("code",[e._v("D")]),e._v(" gains as needed until it tracks well. It is expected that the "),o("code",[e._v("P")]),e._v(" gain is considerably smaller than the "),o("code",[e._v("FF")]),e._v(" gain.")])])])])}),[],!1,null,null,null);t.default=r.exports},351:function(e,t,a){e.exports=a.p+"assets/img/qgc_mc_pid_tuning_rate_controller.0b732932.png"},687:function(e,t,a){e.exports=a.p+"assets/img/airframe_heli_generic.aeeac7e3.png"},688:function(e,t,a){e.exports=a.p+"assets/img/qgc_geometry_helicopter.cfe16278.png"},689:function(e,t,a){e.exports=a.p+"assets/img/swash_plate_servo_angles.50a49df9.png"}}]);