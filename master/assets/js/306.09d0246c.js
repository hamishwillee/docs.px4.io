(window.webpackJsonp=window.webpackJsonp||[]).push([[306],{1629:function(t,e,a){"use strict";a.r(e);var o=a(18),i=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"flying-101"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#flying-101"}},[t._v("#")]),t._v(" Flying 101")]),t._v(" "),o("p",[t._v("This topic explains the basics of flying a vehicle using an "),o("RouterLink",{attrs:{to:"/en/getting_started/rc_transmitter_receiver.html"}},[t._v("RC Transmitter")]),t._v(" in a manual or autopilot-assisted flight mode (for autonomous flight see: "),o("RouterLink",{attrs:{to:"/en/flying/missions.html"}},[t._v("Missions")]),t._v(").")],1),t._v(" "),o("blockquote",[o("p",[o("strong",[t._v("Note")]),t._v(" Before you fly for the first time you should read our "),o("RouterLink",{attrs:{to:"/en/flying/first_flight_guidelines.html"}},[t._v("First Flight Guidelines")]),t._v(".")],1)]),t._v(" "),o("p",[o("span",{attrs:{id:"arm"}})]),t._v(" "),o("h2",{attrs:{id:"arm-the-vehicle"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#arm-the-vehicle"}},[t._v("#")]),t._v(" Arm the Vehicle")]),t._v(" "),o("p",[t._v("Before you can fly the vehicle it must first be "),o("RouterLink",{attrs:{to:"/en/getting_started/px4_basic_concepts.html#arming"}},[t._v("armed")]),t._v(".\nThis will power all motors and actuators; on a multicopter it will start propellers turning.")],1),t._v(" "),o("p",[t._v("To arm the drone:")]),t._v(" "),o("ul",[o("li",[t._v("First disengage the "),o("RouterLink",{attrs:{to:"/en/getting_started/px4_basic_concepts.html#safety_switch"}},[t._v("safety switch")]),t._v(".")],1),t._v(" "),o("li",[t._v("Use the arm command for your vehicle - put the throttle stick in the bottom right corner.\n"),o("ul",[o("li",[t._v("Alternatively configure an "),o("RouterLink",{attrs:{to:"/en/config/safety.html#arming_switch"}},[t._v("arm/disarm switch")]),t._v(".")],1),t._v(" "),o("li",[t._v("You can also arm in "),o("em",[t._v("QGroundControl")]),t._v(" (PX4 does not require a radio control for flying autonomously).")])])])]),t._v(" "),o("blockquote",[o("p",[o("strong",[t._v("Tip")]),t._v(" The vehicle will not arm until it is "),o("RouterLink",{attrs:{to:"/en/config/"}},[t._v("calibrated/configured")]),t._v(" and has a position lock.\n"),o("RouterLink",{attrs:{to:"/en/getting_started/vehicle_status.html"}},[t._v("Vehicle Status Notifications")]),t._v(" (including on-vehicle LEDs, audio notifications and "),o("em",[t._v("QGroundControl")]),t._v(" updates) can tell you when the vehicle is ready to fly (and help you work out the cause when it is not ready to fly).")],1)]),t._v(" "),o("p",[o("span")]),t._v(" "),o("blockquote",[o("p",[o("strong",[t._v("Note")]),t._v(" The vehicle will (by "),o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#COM_DISARM_PRFLT"}},[t._v("default")]),t._v(") automatically "),o("RouterLink",{attrs:{to:"/en/advanced_config/prearm_arm_disarm.html#auto-disarming"}},[t._v("disarm")]),t._v(" (turn off motors) if you take too long to take off!\nThis is a safety measure to ensure that vehicles return to a safe state when not in use.")],1)]),t._v(" "),o("p",[o("span")]),t._v(" "),o("blockquote",[o("p",[o("strong",[t._v("Note")]),t._v(" A VTOL vehicle can only arm in multicopter mode (by default - arming in fixed-wing mode can be enabled using "),o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#CBRK_VTOLARMING"}},[t._v("CBRK_VTOLARMING")]),t._v(").")],1)]),t._v(" "),o("p",[o("span",{attrs:{id:"takeoff-and-landing"}})]),t._v(" "),o("h2",{attrs:{id:"takeoff"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#takeoff"}},[t._v("#")]),t._v(" Takeoff")]),t._v(" "),o("p",[t._v("The easiest way to takeoff (after "),o("a",{attrs:{href:"#arm"}},[t._v("arming the vehicle")]),t._v(") is to use the automatic "),o("RouterLink",{attrs:{to:"/en/flight_modes/takeoff.html"}},[t._v("Takeoff mode")]),t._v(".\nUsually this is triggered from an "),o("RouterLink",{attrs:{to:"/en/config/flight_mode.html"}},[t._v("RC switch")]),t._v(" or ground station.")],1),t._v(" "),o("p",[t._v("Multicopter (and VTOL in multicopter mode) pilots can take off "),o("em",[t._v("manually")]),t._v(" by enabling "),o("RouterLink",{attrs:{to:"/en/flight_modes/#position_mc"}},[t._v("position mode")]),t._v(", arming the vehicle, and then raising the throttle stick above 62.5%.\nAbove this value all controllers are enabled and the vehicle goes to the throttle level required for hovering ("),o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MPC_THR_HOVER"}},[t._v("MPC_THR_HOVER")]),t._v(").")],1),t._v(" "),o("blockquote",[o("p",[o("strong",[t._v("Tip")]),t._v(" The automatic takeoff mode is highly recommended, in particular for Fixed Wing vehicles!")])]),t._v(" "),o("p",[o("span")]),t._v(" "),o("blockquote",[o("p",[o("strong",[t._v("Note")]),t._v(" The vehicle may disarm if you take too long to take off after arming (tune the timeout using "),o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#COM_DISARM_PRFLT"}},[t._v("COM_DISARM_PRFLT")]),t._v(").")],1)]),t._v(" "),o("p",[o("span")]),t._v(" "),o("blockquote",[o("p",[o("strong",[t._v("Note")]),t._v(" The "),o("RouterLink",{attrs:{to:"/en/config/safety.html#failure_detector"}},[t._v("Failure Detector")]),t._v(" will automatically stop the engines if there is a problem on takeoff.")],1)]),t._v(" "),o("h2",{attrs:{id:"landing"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#landing"}},[t._v("#")]),t._v(" Landing")]),t._v(" "),o("p",[t._v("The easiest way to land is to use the automatic "),o("RouterLink",{attrs:{to:"/en/flight_modes/land.html"}},[t._v("Land")]),t._v(" or "),o("RouterLink",{attrs:{to:"/en/flight_modes/return.html"}},[t._v("Return")]),t._v(" modes.")],1),t._v(" "),o("p",[t._v("For multicopter (and VTOL in multicopter mode) pilots can land manually by pressing the throttle stick down until the vehicle lands and disarms.")]),t._v(" "),o("p",[t._v("Note that vehicles automatically disarm on landing by default:")]),t._v(" "),o("ul",[o("li",[t._v("Use "),o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#COM_DISARM_LAND"}},[t._v("COM_DISARM_LAND")]),t._v(" to set the time to auto-disarm after landing (or disable it altogether).")],1),t._v(" "),o("li",[t._v("Manually disarm by putting the throttle stick in the bottom left corner.")])]),t._v(" "),o("blockquote",[o("p",[o("strong",[t._v("Note")]),t._v(' If you see the vehicle "twitch" during landing (turn down the motors, and then immediately turn them back up) this is probably caused by a poor '),o("RouterLink",{attrs:{to:"/en/advanced_config/land_detector.html"}},[t._v("Land Detector Configuration")]),t._v(" (specifically, a poorly set "),o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MPC_THR_HOVER"}},[t._v("MPC_THR_HOVER")]),t._v(").")],1)]),t._v(" "),o("p",[o("span")]),t._v(" "),o("blockquote",[o("p",[o("strong",[t._v("Tip")]),t._v(" Automatic landing is highly recommended, in particular for Fixed Wing vehicles.")])]),t._v(" "),o("h2",{attrs:{id:"flight-controls-commands"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#flight-controls-commands"}},[t._v("#")]),t._v(" Flight Controls/Commands")]),t._v(" "),o("p",[t._v("All flying, including takeoff and landing, is controlled using the 4 basic commands: roll, yaw, pitch and throttle.")]),t._v(" "),o("p",[o("img",{attrs:{src:a(363),alt:"RC Basic Commands"}})]),t._v(" "),o("p",[t._v('In order to control your aircraft you need to understand how the basic Roll, Pitch, Yaw and Throttle commands affect movement in 3D space.\nThis differs depending on whether you\'re controlling a forward-flying aircraft like a plane, or a "hover aircraft" like a multicopter.')]),t._v(" "),o("h3",{attrs:{id:"hover-aircraft"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#hover-aircraft"}},[t._v("#")]),t._v(" Hover Aircraft")]),t._v(" "),o("p",[t._v("Hover aircraft (Copter, VTOL in hover mode) respond to the movement commands as shown below:")]),t._v(" "),o("p",[o("img",{attrs:{src:a(831),alt:"Basic Movements Multicopter"}})]),t._v(" "),o("ul",[o("li",[t._v("Pitch => Forward/back.")]),t._v(" "),o("li",[t._v("Roll => Left/right.")]),t._v(" "),o("li",[t._v("Yaw => Left/right rotation around the centre of the frame.")]),t._v(" "),o("li",[t._v("Throttle => Changed altitude/speed.")])]),t._v(" "),o("h3",{attrs:{id:"forward-flying-aircraft"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#forward-flying-aircraft"}},[t._v("#")]),t._v(" Forward-flying Aircraft")]),t._v(" "),o("p",[t._v("Forward-flying aircraft (planes, VTOL in forward flight) respond to the movement commands as shown below:")]),t._v(" "),o("p",[o("img",{attrs:{src:a(832),alt:"Basic Movements Forward"}})]),t._v(" "),o("ul",[o("li",[t._v("Pitch => Up/down.")]),t._v(" "),o("li",[t._v("Roll => Left/right and a turn.")]),t._v(" "),o("li",[t._v("Yaw => Left/right tail rotation and turn.")]),t._v(" "),o("li",[t._v("Throttle => Changed forward speed.")])]),t._v(" "),o("blockquote",[o("p",[o("strong",[t._v("Note")]),t._v(" The best turn for airplanes is called a coordinated turn, and is performed using roll and little yaw at the same time.\nThis maneuver requires experience!")])]),t._v(" "),o("h2",{attrs:{id:"assisted-flight"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#assisted-flight"}},[t._v("#")]),t._v(" Assisted Flight")]),t._v(" "),o("p",[t._v("Even with an understanding of how the vehicle is controlled, flight in fully manual mode can be quite unforgiving.\nNew users should "),o("RouterLink",{attrs:{to:"/en/config/flight_mode.html"}},[t._v("configure their transmitter")]),t._v(" to use flight modes where the autopilot automatically compensates for erratic user input or environmental factors.")],1),t._v(" "),o("p",[t._v("The following three modes are highly recommended for new users:")]),t._v(" "),o("ul",[o("li",[t._v("Stabilized - Vehicle hard to flip, and will level-out if the sticks are released (but not hold position)")]),t._v(" "),o("li",[t._v("Altitude - Climb and drop are controlled to have a maximum rate.")]),t._v(" "),o("li",[t._v("Position - When sticks are released the vehicle will stop (and hold position against wind drift)")])]),t._v(" "),o("blockquote",[o("p",[o("strong",[t._v("Tip")]),t._v(" You can also access automatic modes through the buttons on the bottom of the "),o("em",[t._v("QGroundControl")]),t._v(" main flight screen.")])])])}),[],!1,null,null,null);e.default=i.exports},363:function(t,e,a){t.exports=a.p+"assets/img/rc_basic_commands.3311bd90.png"},831:function(t,e,a){t.exports=a.p+"assets/img/basic_movements_multicopter.a34373d7.png"},832:function(t,e,a){t.exports=a.p+"assets/img/basic_movements_forward.1fa3a12d.png"}}]);