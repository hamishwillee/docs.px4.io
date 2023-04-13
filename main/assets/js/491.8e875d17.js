(window.webpackJsonp=window.webpackJsonp||[]).push([[491],{1460:function(e,t,r){e.exports=r.p+"assets/img/qgc_gripper_actuator_output_small.daf21770.png"},1461:function(e,t,r){e.exports=r.p+"assets/img/qgc_gripper_actions_joystick.c8be3ef0.png"},3683:function(e,t,r){"use strict";r.r(t);var a=r(19),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"grippers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#grippers"}},[e._v("#")]),e._v(" Grippers")]),e._v(" "),a("p",[e._v("Grippers are mechanical devices that can be integrated with an unmanned vehicle to grip (hold) and release payloads.")]),e._v(" "),a("p",[e._v("PX4 allows grippers to be triggered automatically in "),a("RouterLink",{attrs:{to:"/zh/flying/package_delivery_mission.html"}},[e._v("Payload Delivery Missions")]),e._v(" or manually "),a("a",{attrs:{href:"#qgc-joystick-configuration"}},[e._v("using a Joystick")]),e._v(".")],1),e._v(" "),a("p",[a("img",{attrs:{src:r(418),alt:"High-load gripper example"}})]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),a("p",[e._v("A gripper can instead be configured as a "),a("RouterLink",{attrs:{to:"/zh/payloads/#actuator-control-with-rc"}},[e._v("generic RC or MAVLink actuator")]),e._v(". A generic actuator cannot be used with a joystick or in payload missions, but it can be used with an RC Controller.")],1)]),e._v(" "),a("h2",{attrs:{id:"supported-grippers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#supported-grippers"}},[e._v("#")]),e._v(" Supported Grippers")]),e._v(" "),a("p",[e._v('There are many different gripper mechanisms ("jaws", "fingers", "electromagnets") and interfaces (PWM, CAN, MAVLink, and so on).')]),e._v(" "),a("p",[e._v("PX4 supports grippers that have simple triggers to hold and release, and that use the following interfaces (see linked documents for details):")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/zh/peripherals/gripper_servo.html"}},[e._v("PWM Servo Gripper")]),e._v(" - Grippers connected to autopilot PWM outputs")],1),e._v(" "),a("li",[a("strong",[e._v("MAVLink Gripper")]),e._v(" (Untested) - Grippers that support the "),a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_DO_GRIPPER",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAV_CMD_DO_GRIPPER"),a("OutboundLink")],1),e._v(" MAVLink command.")])]),e._v(" "),a("h2",{attrs:{id:"using-a-gripper"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-a-gripper"}},[e._v("#")]),e._v(" Using a Gripper")]),e._v(" "),a("p",[e._v("For information on using a gripper in missions see "),a("RouterLink",{attrs:{to:"/zh/flying/package_delivery_mission.html"}},[e._v("Payload Delivery Missions")]),e._v(".")],1),e._v(" "),a("p",[e._v("You can manually trigger a gripper manually from a Joystick button if you've mapped "),a("code",[e._v("gripper open")]),e._v(" and "),a("code",[e._v("gripper close")]),e._v(" buttons in the "),a("a",{attrs:{href:"#qgc-joystick-configuration"}},[e._v("QGC Joystick Configuration")]),e._v(". Note that if you press the "),a("strong",[e._v("Grab")]),e._v(" button while the gripper is opening, it will automatically abort releasing behavior and go to the closed position, effectively cancelling the release command. If you do this in a mission while the release is actually happening, then the "),a("RouterLink",{attrs:{to:"/zh/flying/package_delivery_mission.html#manual-control-of-gripper-in-missions"}},[e._v("delivery will be cancelled")]),e._v(".")],1),e._v(" "),a("p",[e._v("Manually triggering a gripper from an "),a("RouterLink",{attrs:{to:"/zh/getting_started/rc_transmitter_receiver.html"}},[e._v("RC Control")]),e._v(" switch is not supported.")],1),e._v(" "),a("p",[e._v("MAVLink applications, such as ground stations, can also control the gripper using the "),a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_DO_GRIPPER",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAV_CMD_DO_GRIPPER"),a("OutboundLink")],1),e._v(" MAVLink command.")]),e._v(" "),a("h2",{attrs:{id:"px4-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#px4-configuration"}},[e._v("#")]),e._v(" PX4 Configuration")]),e._v(" "),a("h3",{attrs:{id:"package-delivery-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#package-delivery-configuration"}},[e._v("#")]),e._v(" Package Delivery Configuration")]),e._v(" "),a("p",[e._v("PX4 gripper support is tied to the package delivery feature, which must be enabled and configured in order to be able to use a gripper.")]),e._v(" "),a("ol",[a("li",[e._v("Set "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#PD_GRIPPER_EN"}},[e._v("PD_GRIPPER_EN")]),e._v(" parameter to 1 (reboot required after change).")],1),e._v(" "),a("li",[e._v("Set "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#PD_GRIPPER_TYPE"}},[e._v("PD_GRIPPER_TYPE")]),e._v(" to match your gripper. For example, set to "),a("code",[e._v("Servo")]),e._v(" for a "),a("RouterLink",{attrs:{to:"/zh/peripherals/gripper_servo.html"}},[e._v("Servo Gripper")]),e._v(".")],1)]),e._v(" "),a("h3",{attrs:{id:"gripper-actuator-mapping"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gripper-actuator-mapping"}},[e._v("#")]),e._v(" Gripper Actuator Mapping")]),e._v(" "),a("p",[e._v("Grippers that are connected directly to a flight controller, such as PWM servo grippers, must be mapped to specific outputs during "),a("RouterLink",{attrs:{to:"/zh/config/actuators.html#actuator-outputs"}},[e._v("Actuator Configuration")]),e._v(".")],1),e._v(" "),a("p",[e._v("This is done by assigning the "),a("code",[e._v("Gripper")]),e._v(" function to the to the output port where the gripper is connected. For example, the image below assigns "),a("code",[e._v("Gripper")]),e._v(" to the PWM AUX5 output.")]),e._v(" "),a("p",[a("img",{attrs:{src:r(1460),alt:"Gripper output mapping"}})]),e._v(" "),a("p",[e._v("Additional information about actuator mapping is provided in the gripper-specific documentation. For example, see "),a("RouterLink",{attrs:{to:"/zh/peripherals/gripper_servo.html#actuator-mapping"}},[e._v("Gripper Servo > Actuator Mapping")]),e._v(".")],1),e._v(" "),a("h3",{attrs:{id:"enable-pre-arm-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enable-pre-arm-mode"}},[e._v("#")]),e._v(" Enable Pre-ARM Mode")]),e._v(" "),a("p",[e._v("Typically you will want to enable the "),a("RouterLink",{attrs:{to:"/zh/advanced_config/prearm_arm_disarm.html"}},[e._v("pre-arming mode")]),e._v(". This mode keeps the motors disabled but allows the gripper to be opened and closed for attaching the payload (avoiding potential danger from spinning propellers).")],1),e._v(" "),a("ol",[a("li",[e._v("Set "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_PREARM_MODE"}},[e._v("COM_PREARM_MODE")]),e._v(" to "),a("code",[e._v("Always")]),e._v(".")],1)]),e._v(" "),a("h3",{attrs:{id:"gripper-actuation-timeout"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gripper-actuation-timeout"}},[e._v("#")]),e._v(" Gripper Actuation Timeout")]),e._v(" "),a("p",[e._v("It is important for package delivery that the gripper has time to release before progressing to subsequent waypoints. For grippers that do not provide sensor-based feedback of their state, which is most of them, a configurable timeout is used to signal when the gripper "),a("em",[e._v("should")]),e._v(" have opened or closed.")]),e._v(" "),a("p",[e._v("To set the actuation timeout:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Measure the time taken for the gripper to open and time to close, and note the longer of these two times.")]),e._v(" "),a("p",[e._v("There are two easy ways to open and close the gripper. While the drone is on a bench and the propellers are removed:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Run the "),a("code",[e._v("payload_deliverer")]),e._v(" test in the QGC "),a("RouterLink",{attrs:{to:"/zh/debug/mavlink_shell.html"}},[e._v("MAVLink Shell")]),e._v(":")],1),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> payload_deliverer gripper_test\n")])])])])])])]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),a("p",[e._v('If you get an error message like "[payload_deliverer] not running", repeat the setup procedures above. You might also run the '),a("code",[e._v("payload_deliverer start")]),e._v(" command in the Nuttx shell.")])]),e._v(" "),a("ul",[a("li",[e._v("Use the "),a("a",{attrs:{href:"#qgc-joystick-configuration"}},[e._v("Joystick")]),e._v(" to trigger gripper open and close actions.")])]),e._v(" "),a("ol",[a("li",[e._v("Set "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#PD_GRIPPER_TO"}},[e._v("PD_GRIPPER_TO")]),e._v(" to whichever of the gripper open and close time is larger.")],1)]),e._v(" "),a("h3",{attrs:{id:"mission-delivery-timeout"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mission-delivery-timeout"}},[e._v("#")]),e._v(" Mission Delivery Timeout")]),e._v(" "),a("p",[e._v("When running a "),a("RouterLink",{attrs:{to:"/zh/flying/package_delivery_mission.html"}},[e._v("Payload Delivery Mission")]),e._v(" it is important that the mission is not halted in the case where the gripper does not report that it has opened (or closed). This might happen if a gripper feedback sensor was damaged or UORB dropped the gripper actuator timout message.")],1),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),a("p",[e._v("Gripper state feedback from a sensor is not actually supported yet, but it may be in future.")])]),e._v(" "),a("p",[e._v("The mission-delivery timout provides an additional safeguard, continuing the mission if the gripper's successful actuation acknowledgement is not received.")]),e._v(" "),a("p",[e._v("To set the timeout:")]),e._v(" "),a("ol",[a("li",[e._v("Set "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MIS_PD_TO"}},[e._v("MIS_PD_TO")]),e._v(" to a value greater than the "),a("a",{attrs:{href:"#gripper-actuation-timeout"}},[e._v("gripper actuation timeout")]),e._v(".")],1)]),e._v(" "),a("h2",{attrs:{id:"qgc-joystick-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#qgc-joystick-configuration"}},[e._v("#")]),e._v(" QGC Joystick Configuration")]),e._v(" "),a("p",[e._v("QGroundControl "),a("RouterLink",{attrs:{to:"/zh/config/joystick.html"}},[e._v("Joystick")]),e._v(" configuration allows you to map gripper actions to Joystick buttons, after which you will be open and close the gripper manually.")],1),e._v(" "),a("p",[e._v("To map joystick buttons in QGroundControl:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Open the menu: "),a("strong",[e._v("QGC Logo (upper-left) > Vehicle Setup > Joystick > Button Assignment")]),e._v(" tab.")]),e._v(" "),a("p",[a("img",{attrs:{src:r(1461),alt:"Gripper action mapping"}})])]),e._v(" "),a("li",[a("p",[e._v("Select "),a("code",[e._v("Gripper Open")]),e._v(" and "),a("code",[e._v("Gripper Close")]),e._v(" actions for your desired joystick buttons, as shown above.")])])]),e._v(" "),a("p",[e._v("You can test the actions by clicking on the mapped buttons and checking for gripper movement. If the gripper doesn't move as expected check the package delivery configuration and actuator mapping are set up properly.")])])}),[],!1,null,null,null);t.default=i.exports},418:function(e,t,r){e.exports=r.p+"assets/img/highload_gripper_example.b5f59e80.jpg"}}]);