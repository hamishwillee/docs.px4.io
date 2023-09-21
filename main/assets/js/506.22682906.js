(window.webpackJsonp=window.webpackJsonp||[]).push([[506],{1824:function(t,e,r){"use strict";r.r(e);var o=r(19),a=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"control-allocation-mixing"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#control-allocation-mixing"}},[t._v("#")]),t._v(" Control Allocation (Mixing)")]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("Control allocation replaces the legacy mixing approach used in PX4 v1.13 and earlier.\nFor PX4 v1.13 documentation see: "),o("a",{attrs:{href:"https://docs.px4.io/v1.13/en/concept/mixing.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mixing & Actuators"),o("OutboundLink")],1),t._v(", "),o("a",{attrs:{href:"https://docs.px4.io/v1.13/en/concept/geometry_files.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Geometry Files"),o("OutboundLink")],1),t._v(" and "),o("a",{attrs:{href:"https://docs.px4.io/v1.13/en/dev_airframes/adding_a_new_frame.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Adding a New Airframe Configuration"),o("OutboundLink")],1),t._v(".")])]),t._v(" "),o("p",[t._v("PX4 takes desired torque and thrust commands from the core controllers and translates them to actuator commands which control motors or servos.")]),t._v(" "),o("p",[t._v('The translation depends on the physical geometry of the airframe.\nFor example, given a torque command to "turn right" (say):')]),t._v(" "),o("ul",[o("li",[t._v("A plane with one servo per aileron will command one of servo high and the other low.")]),t._v(" "),o("li",[t._v("A multicopter will yaw right by changing the speed of all motors.")])]),t._v(" "),o("p",[t._v('PX4 separates this translation logic, which is referred to as "mixing" from the attitude/rate controller.\nThis ensures that the core controllers do not require special handling for each airframe geometry, and greatly improves reusability.')]),t._v(" "),o("p",[t._v("In addition, PX4 abstracts the mapping of output functions to specific hardware outputs.\nThis means that any motor or servo can be assigned to almost any physical output.")]),t._v(" "),o("p",[o("img",{attrs:{src:r(636),alt:"Mixing Overview"}})]),t._v(" "),o("h2",{attrs:{id:"actuator-control-pipeline"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#actuator-control-pipeline"}},[t._v("#")]),t._v(" Actuator Control Pipeline")]),t._v(" "),o("p",[t._v("Overview of the mixing pipeline in terms of modules and uORB topics (press to show full-screen):\n"),t._v(" "),o("img",{attrs:{src:r(637),alt:"Pipeline Overview"}})]),t._v(" "),o("p",[t._v("Notes:")]),t._v(" "),o("ul",[o("li",[t._v("The rate controller outputs torque and thrust setpoints")]),t._v(" "),o("li",[t._v("the "),o("code",[t._v("control_allocator")]),t._v(" module:\n"),o("ul",[o("li",[t._v("handles different geometries based on configuration parameters")]),t._v(" "),o("li",[t._v("does the mixing")]),t._v(" "),o("li",[t._v("handles motor failures")]),t._v(" "),o("li",[t._v("publishes the motor and servo control signals")]),t._v(" "),o("li",[t._v("publishes the servo trims separately so they can be added as an offset when "),o("RouterLink",{attrs:{to:"/en/config/actuators.html#actuator-testing"}},[t._v("testing actuators")]),t._v(" (using the test sliders).")],1)])]),t._v(" "),o("li",[t._v("the output drivers:\n"),o("ul",[o("li",[t._v("handle the hardware initialization and update")]),t._v(" "),o("li",[t._v("use a shared library "),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/src/lib/mixer_module/",target:"_blank",rel:"noopener noreferrer"}},[t._v("src/libs/mixer_module"),o("OutboundLink")],1),t._v(".\nThe driver defines a parameter prefix, e.g. "),o("code",[t._v("PWM_MAIN")]),t._v(" that the library then uses for configuration.\nIts main task is to select from the input topics and assign the right data to the outputs based on the user set "),o("code",[t._v("<param_prefix>_FUNCx")]),t._v(" parameter values.\nFor example if "),o("code",[t._v("PWM_MAIN_FUNC3")]),t._v(" is set to "),o("strong",[t._v("Motor 2")]),t._v(", the 3rd output is set to the 2nd motor from "),o("code",[t._v("actuator_motors")]),t._v(".")]),t._v(" "),o("li",[t._v("output functions are defined under "),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/src/lib/mixer_module/output_functions.yaml",target:"_blank",rel:"noopener noreferrer"}},[t._v("src/lib/mixer_module/output_functions.yaml"),o("OutboundLink")],1),t._v(".")])])]),t._v(" "),o("li",[t._v("if you want to control an output from MAVLink, set the relevant output function to "),o("strong",[t._v("Offboard Actuator Set x")]),t._v(", and then send the "),o("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_DO_SET_ACTUATOR",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAV_CMD_DO_SET_ACTUATOR"),o("OutboundLink")],1),t._v(" MAVLink command.")])]),t._v(" "),o("h2",{attrs:{id:"adding-a-new-geometry-or-output-function"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#adding-a-new-geometry-or-output-function"}},[t._v("#")]),t._v(" Adding a new Geometry or Output Function")]),t._v(" "),o("p",[t._v("See "),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/commit/5cdb6fbd8e1352dcb94bd58918da405f8ff930d7",target:"_blank",rel:"noopener noreferrer"}},[t._v("this commit"),o("OutboundLink")],1),t._v(" for how to add a new geometry.\nThe QGC UI will then automatically show the right configuration UI when "),o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#CA_AIRFRAME"}},[t._v("CA_AIRFRAME")]),t._v(" is set to the new geometry.")],1),t._v(" "),o("p",[o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/commit/a65533b46986e32254b64b7c92469afb8178e370",target:"_blank",rel:"noopener noreferrer"}},[t._v("This commit"),o("OutboundLink")],1),t._v(" shows how to add a new output function.\nAny uORB topic can be subscribed and assigned to a function.")]),t._v(" "),o("p",[t._v("Note that parameters for control allocation are defined in "),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/src/modules/control_allocator/module.yaml",target:"_blank",rel:"noopener noreferrer"}},[t._v("src/modules/control_allocator/module.yaml"),o("OutboundLink")],1),t._v("\nThe schema for this file is "),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/validation/module_schema.yaml#L440=",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),o("OutboundLink")],1),t._v(" (in particular, search for the key "),o("code",[t._v("mixer:")])]),t._v(" "),o("h2",{attrs:{id:"setting-the-default-frame-geometry"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#setting-the-default-frame-geometry"}},[t._v("#")]),t._v(" Setting the Default Frame Geometry")]),t._v(" "),o("p",[t._v("When "),o("RouterLink",{attrs:{to:"/en/dev_airframes/adding_a_new_frame.html"}},[t._v("adding a new frame configuration")]),t._v(", set the appropriate "),o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#CA_AIRFRAME"}},[t._v("CA_AIRFRAME")]),t._v(" and other default mixer values for the geometry.")],1),t._v(" "),o("p",[t._v("You can see this, for example, in the airframe configuration file "),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/ROMFS/px4fmu_common/init.d/airframes/13200_generic_vtol_tailsitter",target:"_blank",rel:"noopener noreferrer"}},[t._v("13200_generic_vtol_tailsitter"),o("OutboundLink")],1)]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("...\nparam set-default CA_AIRFRAME 4\nparam set-default CA_ROTOR_COUNT 2\nparam set-default CA_ROTOR0_KM -0.05\nparam set-default CA_ROTOR0_PY 0.2\n...\n")])])]),o("h2",{attrs:{id:"setting-up-geometry-and-outputs"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-geometry-and-outputs"}},[t._v("#")]),t._v(" Setting up Geometry and Outputs")]),t._v(" "),o("p",[t._v("The broad geometry and default parameters for a vehicle are set (from the frame configuration file) when selecting the airframe in QGroundControl: "),o("RouterLink",{attrs:{to:"/en/config/airframe.html"}},[t._v("Basic Configuration > Airframe")]),t._v(".")],1),t._v(" "),o("p",[t._v("The geometry parameters and output mapping for the specific frame and flight controller hardware are then configured using the QGroundControl "),o("strong",[t._v("Actuators")]),t._v(" setup screen: "),o("RouterLink",{attrs:{to:"/en/config/actuators.html"}},[t._v("Basic Configuration > Actuator Configuration and Testing")]),t._v(".")],1)])}),[],!1,null,null,null);e.default=a.exports},636:function(t,e,r){t.exports=r.p+"assets/img/mixing_overview.c98463d4.png"},637:function(t,e,r){t.exports=r.p+"assets/img/control_allocation_pipeline.445b582b.png"}}]);