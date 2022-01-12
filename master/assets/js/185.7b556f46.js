(window.webpackJsonp=window.webpackJsonp||[]).push([[185],{1575:function(t,e,o){"use strict";o.r(e);var s=o(19),i=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"actuator-configuration-and-testing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#actuator-configuration-and-testing"}},[t._v("#")]),t._v(" Actuator Configuration and Testing")]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("The "),s("em",[t._v("Actuators")]),t._v(" view is only displayed if dynamic control allocation is enabled using the "),s("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#SYS_CTRL_ALLOC"}},[t._v("SYS_CTRL_ALLOC")]),t._v(" parameter.\nThis replaces geometry and mixer configuration files with configuration using parameters.\nYou should also ensure that the appropriate airframe type is selected using "),s("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#CA_AIRFRAME"}},[t._v("CA_AIRFRAME")]),t._v(".")],1),t._v(" "),s("p",[t._v("The easiest way to try this out in simulation is to use the following make target, which has control allocation pre-enabled:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("make px4_sitl gazebo_iris_ctrlalloc\n")])])])]),t._v(" "),s("p",[t._v("After selecting an "),s("RouterLink",{attrs:{to:"/en/config/airframe.html"}},[t._v("airframe")]),t._v(" you will generally need to configure the specific geometry, assign actuators to outputs, and test the actuator response.\nThis can be done in "),s("em",[t._v("QGroundControl")]),t._v(", under the "),s("strong",[t._v("Vehicle Setup > Actuators")]),t._v(" tab.")],1),t._v(" "),s("p",[t._v("The multicopter configuration screen looks like this.")]),t._v(" "),s("p",[s("img",{attrs:{src:o(623),alt:"Actuators MC (QGC)"}})]),t._v(" "),s("p",[t._v("Note that some settings are hidden unless you select the "),s("strong",[t._v("Advanced")]),t._v(" checkbox in the top right corner.")]),t._v(" "),s("h2",{attrs:{id:"geometry"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#geometry"}},[t._v("#")]),t._v(" Geometry")]),t._v(" "),s("p",[t._v("The geometry section is used to configure any additional geometry-related settings for the selected "),s("RouterLink",{attrs:{to:"/en/config/airframe.html"}},[t._v("airframe")]),t._v(".\nThe UI displays a customised view for the selected type; if there are no configurable options this may display a static image of the frame geometry, or nothing at all.")],1),t._v(" "),s("p",[t._v('The screenshot below shows the geometry screen for a multicopter frame, which allows you to select the number of motors, their relative positions on the frame, and their expected spin directions (select "'),s("strong",[t._v("Direction CCW")]),t._v('" for counter-clockwise motors).\nThis particular frame also includes an image showing the motor positions, which dynamically updates as the motors settings are changed.')]),t._v(" "),s("p",[s("img",{attrs:{src:o(624),alt:"Geometry MC (QGC)"}})]),t._v(" "),s("p",[t._v("A fixed wing airframe would instead display the parameters that define control surfaces, while a VTOL airframe could display both motors and control surfaces.")]),t._v(" "),s("h3",{attrs:{id:"conventions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#conventions"}},[t._v("#")]),t._v(" Conventions")]),t._v(" "),s("p",[t._v("The following sections contain the conventions and explanations for configuring the geometry.")]),t._v(" "),s("h4",{attrs:{id:"coordinate-system"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#coordinate-system"}},[t._v("#")]),t._v(" Coordinate system")]),t._v(" "),s("p",[t._v("The coordinate system is NED (in body frame), where the X axis points forward, the Y axis to the right and the Z axis down.\nPositions are relative to the center of gravity (in meters).")]),t._v(" "),s("h4",{attrs:{id:"control-surfaces-and-servo-direction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#control-surfaces-and-servo-direction"}},[t._v("#")]),t._v(" Control Surfaces and Servo Direction")]),t._v(" "),s("p",[t._v("Control surfaces use the following deflection direction convention:")]),t._v(" "),s("ul",[s("li",[t._v("horizontal (e.g. Aileron): up = positive deflection")]),t._v(" "),s("li",[t._v("vertical (e.g. Rudder): right = positive deflection")]),t._v(" "),s("li",[t._v("mixed (e.g. V-Tail): up = positive deflection")])]),t._v(" "),s("p",[s("img",{attrs:{src:o(625),alt:"Plane Deflections"}})]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("If a servo does not move in the expected direction set in the geometry, you can reverse it using a checkbox on the Actuator Output.")])]),t._v(" "),s("h3",{attrs:{id:"motor-tilt-servos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#motor-tilt-servos"}},[t._v("#")]),t._v(" Motor Tilt Servos")]),t._v(" "),s("p",[t._v("Tilt servos are configured as follows:")]),t._v(" "),s("ul",[s("li",[t._v("The reference direction is upwards (negative Z direction).")]),t._v(" "),s("li",[t._v("Tilt direction: "),s("strong",[t._v("Towards Front")]),t._v(" means the servo tilts towards positive X direction, whereas "),s("strong",[t._v("Towards Right")]),t._v(" means towards positive Y direction.")]),t._v(" "),s("li",[t._v("Minimum and maximum tilt angles: specify the physical limits in degrees of the tilt at minimum control and maximum respectively.\nAn angle of 0° means to point upwards, then increases towards the tilt direction."),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("Negative angles are possible. For example tiltable multirotors have symmetrical limits and one could specify -30 as minimum and 30 degrees as maximum.")])]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("If a motor/tilt points downwards and tilts towards the back it is logically equivalent to a motor pointing upwards and tilting towards the front.")])])]),t._v(" "),s("li",[t._v("Control: depending on the airframe, tilt servos can be used to control torque on one or more axis (it's possible to only use a subset of the available tilts for a certain torque control):\n"),s("ul",[s("li",[t._v("Yaw: the tilts are used to control yaw (generally desired).\nIf four or more motors are used, the motors can be used instead.")]),t._v(" "),s("li",[t._v("Pitch: typically differential motor thrust is used to control pitch, but some airframes require pitch to be controlled by the tilt servos.\nBicopters are among those.")])])]),t._v(" "),s("li",[t._v("Tiltable motors are then assigned to one of the tilt servos.")])]),t._v(" "),s("p",[s("img",{attrs:{src:o(626),alt:"Tilt Axis"}})]),t._v(" "),s("h3",{attrs:{id:"bidirectional-motors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bidirectional-motors"}},[t._v("#")]),t._v(" Bidirectional Motors")]),t._v(" "),s("p",[t._v("Some vehicles may use bidirectional motors (i.e. motor spins in direction 1 for lower output range and in direction 2 for the upper half).\nFor example, ground vehicles that want to move forwards and backwards, or VTOL vehicles that have pusher motors that go in either direction.")]),t._v(" "),s("p",[t._v("If bidiectional motors are used, make sure to select the "),s("strong",[t._v("Reversible")]),t._v(' checkbox for those motors (the checkbox is displayed as an "advanced" option).')]),t._v(" "),s("p",[s("img",{attrs:{src:o(627),alt:"Reversible"}})]),t._v(" "),s("p",[t._v("Note that you will need to also ensure that the ESC associated with bidirectional motors is configured appropriately (e.g. 3D mode enabled for DShot ESCs, which can be achieved via "),s("RouterLink",{attrs:{to:"/en/peripherals/dshot.html#commands"}},[t._v("DShot commands")]),t._v(").")],1),t._v(" "),s("h2",{attrs:{id:"actuator-outputs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#actuator-outputs"}},[t._v("#")]),t._v(" Actuator Outputs")]),t._v(" "),s("p",[t._v("The actuators and any other output function can be assigned to any of the physical outputs.\nEach output has its own tab, e.g. the PWM MAIN or AUX output pins, or UAVCAN.")]),t._v(" "),s("p",[t._v("PWM outputs are grouped according to the hardware groups of the autopilot.\nEach group allows to configure the PWM rate or DShot/Oneshot (if supported).")]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("For boards with MAIN and AUX, prefer the AUX pins over the MAIN pins for motors, as they have lower latency.")])]),t._v(" "),s("p",[t._v("The AUX pins have additional configuration options for camera capture/triggering.\nSelecting these requires a reboot before they are applied.")]),t._v(" "),s("h2",{attrs:{id:"actuator-testing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#actuator-testing"}},[t._v("#")]),t._v(" Actuator Testing")]),t._v(" "),s("p",[t._v("When testing actuators, make sure that:")]),t._v(" "),s("ul",[s("li",[s("p",[t._v('Motors spin at the "minimum thrust" position.')]),t._v(" "),s("p",[t._v('The sliders snap into place at the lower end, and motors are turned off (disarmed).\nThe "minimum thrust" position is the next slider position, which commands the minimum thrust.\nFor PWM motors, adjust the minimum output value such that the motors spin at that slider position (not required for DShot).')]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("VTOLs will automatically turn off motors pointing upwards during fixed-wing flight.\nFor Standard VTOLs these are the motors defined as multicopter motors.\nFor Tiltrotors these are the motors that have no associated tilt servo.\nTailsitters use all motors in fixed-wing flight.")])])]),t._v(" "),s("li",[s("p",[t._v("Servos move into the direction of the convention described above.")]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("A trim value can be configured for control surfaces, which is also applied to the test slider.")])])])]),t._v(" "),s("p",[t._v("Note the following behaviour:")]),t._v(" "),s("ul",[s("li",[t._v("If a safety button is used, it must be pressed before actuator testing is allowed.")]),t._v(" "),s("li",[t._v("The kill-switch can still be used to stop motors immediately.")]),t._v(" "),s("li",[t._v("Servos do not actually move until the corresponding slider is changed.")]),t._v(" "),s("li",[t._v("The parameter "),s("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#COM_MOT_TEST_EN"}},[t._v("COM_MOT_TEST_EN")]),t._v(" can be used to completely disable actuator testing.")],1),t._v(" "),s("li",[t._v("On the shell, "),s("RouterLink",{attrs:{to:"/en/modules/modules_command.html#actuator-test"}},[t._v("actuator_test")]),t._v(" can be used as well.")],1)]),t._v(" "),s("h3",{attrs:{id:"reversing-motors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reversing-motors"}},[t._v("#")]),t._v(" Reversing Motors")]),t._v(" "),s("p",[t._v('The motors must turn in the direction defined in configured geometry ("'),s("strong",[t._v("Direction CCW")]),t._v('" checkboxes).\nIf any motors do not turn in the correct direction they must be reversed.')]),t._v(" "),s("p",[t._v("There are several options:")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("If the ESCs are configured as "),s("RouterLink",{attrs:{to:"/en/peripherals/dshot.html"}},[t._v("DShot")]),t._v(" you can reverse the direction via UI ("),s("strong",[t._v("Set Spin Direction")]),t._v(" buttons).\nNote that the current direction cannot be queried, so you might have to try both options.")],1)]),t._v(" "),s("li",[s("p",[t._v("Swap 2 of the 3 motor cables (it does not matter which ones).")]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("If motors are not connected via bullet-connectors, re-soldering is required (this is a reason, among others, to prefer DShot ESCs).")])])])])])}),[],!1,null,null,null);e.default=i.exports},623:function(t,e,o){t.exports=o.p+"assets/img/qgc_actuators_mc_aux.1a859041.png"},624:function(t,e,o){t.exports=o.p+"assets/img/qgc_actuators_mc_geometry.e374ba97.png"},625:function(t,e,o){t.exports=o.p+"assets/img/plane_servo_convention.19574c3b.png"},626:function(t,e,o){t.exports=o.p+"assets/img/tilt_axis.bc490bf9.png"},627:function(t,e,o){t.exports=o.p+"assets/img/qgc_geometry_reversible.6413d16b.png"}}]);