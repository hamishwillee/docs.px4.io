(window.webpackJsonp=window.webpackJsonp||[]).push([[2246],{4008:function(t,e,o){"use strict";o.r(e);var r=o(19),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"px4-autopilot-v1-14-release-notes"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#px4-autopilot-v1-14-release-notes"}},[t._v("#")]),t._v(" PX4-Autopilot v1.14 Release Notes")]),t._v(" "),o("h2",{attrs:{id:"read-before-upgrading"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#read-before-upgrading"}},[t._v("#")]),t._v(" Read Before Upgrading")]),t._v(" "),o("p",[t._v("The v1.14 release includes a few breaking changes for users upgrading from previous versions, in particular we are moving away from using mixer files to define the vehicle geometry, motor mappings and actuators.")]),t._v(" "),o("p",[t._v("Additionally, we deprecated the Fast-RTPS interface used by ROS 2 in favor of a much cleaner solution that doesn't require a custom build target, and goes away with the additional message generation step.")]),t._v(" "),o("p",[t._v("Please continue reading for "),o("a",{attrs:{href:"#upgrade-guide"}},[t._v("upgrade instructions")]),t._v(".")]),t._v(" "),o("h2",{attrs:{id:"major-changes"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#major-changes"}},[t._v("#")]),t._v(" Major Changes")]),t._v(" "),o("ul",[o("li",[t._v("Dynamic Control Allocation")]),t._v(" "),o("li",[t._v("Improved Preflight Failure Check Reporting")]),t._v(" "),o("li",[t._v("Failsafe Simplification and Simulation")]),t._v(" "),o("li",[t._v("Default Simulation is now New Gazebo")]),t._v(" "),o("li",[t._v("Improved ROS 2 Interface thanks to uXRCE-DDS")])]),t._v(" "),o("h3",{attrs:{id:"dynamic-control-allocation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#dynamic-control-allocation"}},[t._v("#")]),t._v(" Dynamic Control Allocation")]),t._v(" "),o("p",[t._v("We are very excited to enable the new "),o("RouterLink",{attrs:{to:"/zh/concept/control_allocation.html"}},[t._v("dynamic control allocation")]),t._v(" by default; it allows users to define vehicle configurations at runtime without needing a mixer file, thanks to the new "),o("RouterLink",{attrs:{to:"/zh/config/actuators.html"}},[t._v("vehicle setup dashboard")]),t._v(" in QGroundControl.")],1),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),o("p",[t._v("The new actuator configuration UI is available on QGroundControl 4.2.0 or newer.")])]),t._v(" "),o("h3",{attrs:{id:"improved-preflight-failure-check-reporting-qgc-arming-checks-ui"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#improved-preflight-failure-check-reporting-qgc-arming-checks-ui"}},[t._v("#")]),t._v(" Improved Preflight Failure Check Reporting (QGC Arming Checks UI)")]),t._v(" "),o("p",[t._v("PX4 v1.14 adds much improved preflight failure "),o("em",[t._v("reporting")]),t._v(" through the "),o("RouterLink",{attrs:{to:"/zh/concept/events_interface.html"}},[t._v("events interface")]),t._v(". If the vehicle won't arm, you can more easily find out why in the "),o("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/FlyView/FlyView.html#arm",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGC Arming Checks UI"),o("OutboundLink")],1),t._v(". No more wondering if it's a problem with the safety switch, a poor calibration, or something in the internals of the estimator!")],1),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),o("p",[t._v("The QGC Arming Checks UI is available in the "),o("strong",[t._v("QGC Daily Build")]),t._v(" (QGC v4.2.0 and later)")])]),t._v(" "),o("p",[t._v("As part of this change, it is now possible to switch to any mode when disarmed (previously you could not switch to a mode that required GPS if you didn't have a good position estimate). PX4 will only allow you to arm when the conditions for the current mode are met, and will report failure checks that are not relevant to the current mode as warnings.")]),t._v(" "),o("h3",{attrs:{id:"failsafe-simplification"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#failsafe-simplification"}},[t._v("#")]),t._v(" Failsafe Simplification")]),t._v(" "),o("p",[o("RouterLink",{attrs:{to:"/zh/config/safety.html"}},[t._v("Safety Failsafe")]),t._v(" handling has been simplified, in particular with respect to what happens if a failsafe is triggered when another failsafe is already in progress.")],1),t._v(" "),o("ul",[o("li",[t._v("There is now a hold delay before the action is performed, giving the user time to override the failsafe if needed.")]),t._v(" "),o("li",[t._v("If multiple failsafes are triggered, the more severe "),o("em",[t._v("action")]),t._v(" is taken. For example if both RC and GPS are lost, and manual control loss is set to Return mode and GCS link loss to Land, Land is executed.")])]),t._v(" "),o("p",[t._v("The new "),o("RouterLink",{attrs:{to:"/zh/config/safety_simulation.html"}},[t._v("Failsafe State Machine Simulation")]),t._v(" allows you to test failsafe behaviour under all possible configurations and conditions.")],1),t._v(" "),o("h3",{attrs:{id:"new-gazebo"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#new-gazebo"}},[t._v("#")]),t._v(" New Gazebo")]),t._v(" "),o("p",[t._v("Given "),o("a",{attrs:{href:"https://discourse.ros.org/t/a-new-era-for-gazebo-cross-post/25012",target:"_blank",rel:"noopener noreferrer"}},[t._v("the recent changes"),o("OutboundLink")],1),t._v(" by the Open Robotics simulation team, we are introducing name changes for our gazebo simulations, mirroring Open Robotics naming scheme, starting with v1.14:")]),t._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://docs.px4.io/v1.13/en/simulation/ignition_gazebo.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ignition Gazebo"),o("OutboundLink")],1),t._v(" to "),o("RouterLink",{attrs:{to:"/zh/sim_gazebo_gz/"}},[t._v("Gazebo")])],1),t._v(" "),o("li",[o("a",{attrs:{href:"https://docs.px4.io/v1.13/en/simulation/gazebo.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Gazebo"),o("OutboundLink")],1),t._v(" to "),o("RouterLink",{attrs:{to:"/zh/sim_gazebo_classic/"}},[t._v("Gazebo Classic")]),t._v(".")],1)]),t._v(" "),o("p",[t._v("Most importantly this affects the PX4 build target names as well:")]),t._v(" "),o("ul",[o("li",[t._v("Gazebo targets are prefixed with "),o("code",[t._v("gz_")]),t._v(" (e.g. "),o("code",[t._v("make px4_sitl gz_x500")]),t._v(").")]),t._v(" "),o("li",[t._v("Gazebo Classic "),o("code",[t._v("make")]),t._v(" targets are now prefixed with "),o("code",[t._v("gazebo-classic_")]),t._v(" (e.g., "),o("code",[t._v("make px4_sitl gazebo-classic_cloudship")]),t._v(").")])]),t._v(" "),o("h3",{attrs:{id:"improved-ros-2-interface-via-uxrce-dds"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#improved-ros-2-interface-via-uxrce-dds"}},[t._v("#")]),t._v(" Improved ROS 2 Interface via uXRCE-DDS")]),t._v(" "),o("p",[t._v("We updated the ROS 2 interface, replacing "),o("a",{attrs:{href:"https://docs.px4.io/v1.13/en/middleware/micrortps.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Fast-RTPS"),o("OutboundLink")],1),t._v(" with "),o("RouterLink",{attrs:{to:"/zh/ros/ros2_comm.html"}},[t._v("uXRCE-DDS")]),t._v(", resulting in an improved experience across the board. The change also avoids the need for "),o("code",[t._v("_rtps")]),t._v(" build targets, enabling the interface on even more targets by default.")],1),t._v(" "),o("h2",{attrs:{id:"upgrade-guide"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-guide"}},[t._v("#")]),t._v(" Upgrade Guide")]),t._v(" "),o("p",[t._v("For users upgrading from previous versions, please take a moment to review the following:")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("The actuator changes require you to verify vehicle geometry and motors/servos mappings match your vehicle. In QGC, find the "),o("RouterLink",{attrs:{to:"/zh/config/actuators.html"}},[t._v("Actuator Configuration Dashboard")]),t._v(", and make sure to confirm the airframe geometry matches actuals from your vehicle, as well as update motor and ensure motors and servos are mapped to outputs as they are wired to the frame and with the correct ESC type specified. Note: take advantage of the sliders in the UI. They can be used to confirm motor wiring.")],1),t._v(" "),o("p",[t._v("We highly recommend running an "),o("RouterLink",{attrs:{to:"/zh/advanced_config/esc_calibration.html"}},[t._v("ESC Calibration")]),t._v(" if using PWM ESC motors and then setting appropriate disarmed minimum and maximum values for the motors (in the actuator UI).")],1),t._v(" "),o("p",[t._v("The calibration is critical if you are using a custom mixer file or the airframe you assigned in an earlier version is not present in PX4 v1.14.")]),t._v(" "),o("p",[t._v("However, an ESC Calibration is still recommended "),o("strong",[t._v("even if")]),t._v(" you are using an airframe that precisely matches a specific vehicle in the "),o("RouterLink",{attrs:{to:"/zh/airframes/airframe_reference.html"}},[t._v("Airframe Reference")]),t._v(" (such as the "),o("RouterLink",{attrs:{to:"/zh/airframes/airframe_reference.html#copter_quadrotor_x_holybro_x500_v2"}},[t._v("Holybro X500 V2")]),t._v(") as your wiring and ESCs calibration may not match the defaults.")],1)]),t._v(" "),o("li",[o("p",[t._v("Default disarmed PWM was changed from 900us to 1000us. Verify if you previously used the default PWM disarmed values and if the changes impact your setup. For details, you can find related information in the "),o("RouterLink",{attrs:{to:"/zh/advanced_config/esc_calibration.html#steps"}},[t._v("step 7 of ESC calibration")]),t._v(" document.")],1)]),t._v(" "),o("li",[o("p",[t._v("Fast-RTPS users must port their code to the new uXRCE-DDS interface. Application code should only require minor modifications. These include (minimally):")])])]),t._v(" "),o("p",[t._v("Modifying topic names to match the new naming pattern, which changed from "),o("code",[t._v("fmu/<topic_name>/out")]),t._v(" to "),o("code",[t._v("fmu/out/<topic_name>")]),t._v(", and "),o("RouterLink",{attrs:{to:"/zh/ros/ros2_comm.html#ros-2-subscriber-qos-settings"}},[t._v("Adusting the QoS settings")]),t._v(".")],1),t._v(" "),o("p",[t._v("For more information see "),o("RouterLink",{attrs:{to:"/zh/middleware/uxrce_dds.html#fast-rtps-to-uxrce-dds-migration-guidelines"}},[t._v("Fast-RTPS to uXRCE-DDS Migration Guidelines")])],1),t._v(" "),o("h2",{attrs:{id:"other-changes"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#other-changes"}},[t._v("#")]),t._v(" Other changes")]),t._v(" "),o("h3",{attrs:{id:"hardware-support"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#hardware-support"}},[t._v("#")]),t._v(" Hardware Support")]),t._v(" "),o("ul",[o("li",[t._v("Cubepilot Cube Orange+ - "),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/20304",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4-Autopilot#20304"),o("OutboundLink")],1)]),t._v(" "),o("li",[t._v("Unicore GPS: Support for Holybro Unicore UM982 GPS - "),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/21214",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4-Autopilot#21214"),o("OutboundLink")],1),t._v(")")]),t._v(" "),o("li",[t._v("VOXL2 Improved support - "),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/21426",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4-Autopilot#21426"),o("OutboundLink")],1)]),t._v(" "),o("li",[t._v("Cubepilot Cube Black detection: Fixed Cube Black vs. Pixhawk 2 detection with CAN1 connected - "),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/21342",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4-Autopilot#21342"),o("OutboundLink")],1)])]),t._v(" "),o("h3",{attrs:{id:"common"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#common"}},[t._v("#")]),t._v(" Common")]),t._v(" "),o("ul",[o("li",[t._v("Failsafe state machine rewrite and "),o("RouterLink",{attrs:{to:"/zh/config/safety_simulation.html"}},[t._v("web simulation")])],1),t._v(" "),o("li",[t._v("Improved preflight failure check reporting (requires QGC "),o("a",{attrs:{href:"https://github.com/mavlink/qgroundcontrol/releases/tag/v4.2.0",target:"_blank",rel:"noopener noreferrer"}},[t._v("v4.2.0"),o("OutboundLink")],1),t._v(" or later): "),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/20030",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4-Autopilot#20030"),o("OutboundLink")],1),t._v(" and "),o("a",{attrs:{href:"https://github.com/mavlink/qgroundcontrol/pull/10362",target:"_blank",rel:"noopener noreferrer"}},[t._v("qgroundcontrol#10362"),o("OutboundLink")],1)]),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/zh/advanced/package_delivery.html"}},[t._v("Package delivery in mission")]),t._v(": For package delivery applications, inital support for payload delivery in mission for gripper actuator was added")],1),t._v(" "),o("li",[t._v("Manual control setpoint message redefinition: "),o("code",[t._v("manual_control_setpoint.x")]),t._v(", "),o("code",[t._v("y")]),t._v(", "),o("code",[t._v("z")]),t._v(", "),o("code",[t._v("w")]),t._v(" -> "),o("code",[t._v("roll")]),t._v(", "),o("code",[t._v("pitch")]),t._v(", "),o("code",[t._v("yaw")]),t._v(", "),o("code",[t._v("throttle")]),t._v("; "),o("code",[t._v("throttle scale [0,1] -> [-1,1]")]),t._v(" - "),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/15949",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4-Autopilot#15949"),o("OutboundLink")],1)]),t._v(" "),o("li",[t._v("Default motor PWM configuration - "),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/21800",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4-Autopilot#21800"),o("OutboundLink")],1)]),t._v(" "),o("li",[t._v("Fix PWM/Oneshot calibration - "),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/21726",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4-Autopilot#21726"),o("OutboundLink")],1)])]),t._v(" "),o("h3",{attrs:{id:"control"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#control"}},[t._v("#")]),t._v(" Control")]),t._v(" "),o("ul",[o("li",[t._v("Land and take off again in mission: Landing doesn't disarm if the mission is not done - "),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/19659",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4-Autopilot#19659"),o("OutboundLink")],1)]),t._v(" "),o("li",[t._v("Separate trajectory setpoint message: Message is now separate from vehicle_local_position_setpoint message. - "),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/19622",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4-Autopilot#19622"),o("OutboundLink")],1)]),t._v(" "),o("li",[t._v('Bugfix: "Invalid setpoint" message on takeoff or mode switch: The message popped up as false positive depending on timing - '),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/20581",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4-Autopilot#20581"),o("OutboundLink")],1)]),t._v(" "),o("li",[t._v("Bugfix: Step switching Altitude to Position: Switching from Altitude to Position with speed produced a jerk step - "),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/20905",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4-Autopilot#20905"),o("OutboundLink")],1)])]),t._v(" "),o("h3",{attrs:{id:"estimation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#estimation"}},[t._v("#")]),t._v(" Estimation")]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/zh/advanced_config/tuning_the_ecl_ekf.html#height"}},[t._v("Multiple height source fusion")])],1),t._v(" "),o("li",[t._v("EKF2 start without magnetometer and barometer data: Until now, a mag and a baro was mandatory to run EKF2 - "),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/20021",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4-Autopilot#20021"),o("OutboundLink")],1)]),t._v(" "),o("li",[t._v("Multirotor wind estimate improvements: More accurate bluff body drag model - "),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/20848",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4-Autopilot#20848"),o("OutboundLink")],1)])]),t._v(" "),o("h3",{attrs:{id:"sensors"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#sensors"}},[t._v("#")]),t._v(" Sensors")]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/zh/dronecan/#dronecan-subscriptions-publications"}},[t._v("DroneCAN sensors now need to be individually enabled via "),o("code",[t._v("UAVCAN_SUB_*")]),t._v(" parameters")]),t._v(" - "),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/18471",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4-Autopilot#18471"),o("OutboundLink")],1)],1),t._v(" "),o("li",[t._v("Battery estimation defaults, reporting improvements: Defaults: current based load compensation, higher empty cell voltage, shorter action delay - "),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/19429",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4-Autopilot#19429"),o("OutboundLink")],1),t._v(", "),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/19700",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4-Autopilot#19700"),o("OutboundLink")],1),t._v(", "),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/19594",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4-Autopilot#19594"),o("OutboundLink")],1),t._v(", https://github.com/PX4/PX4-Autopilot/pull/19679")]),t._v(" "),o("li",[t._v("SF45 rotation Lidar serial driver - "),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/19891",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4-Autopilot#19891"),o("OutboundLink")],1)])]),t._v(" "),o("h3",{attrs:{id:"simulation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#simulation"}},[t._v("#")]),t._v(" Simulation")]),t._v(" "),o("ul",[o("li",[t._v("[Gazebo] Ignition Fuel for PX4: PX4 now has a repository for gazebo models in ignition fuel - https://app.gazebosim.org/PX4")]),t._v(" "),o("li",[t._v("[Gazebo] Support for Gazebo garden with native ignition transport support: Added native ignition transport support for direct interaction with Gazebo and the simulation. Supported vehicles in Gazebo are X500 (Multicopter), Plane, Standard VTOL - "),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/20319",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4-Autopilot#20319"),o("OutboundLink")],1)]),t._v(" "),o("li",[t._v("[Gazebo-classic] Serializer for Gazebo sniffer: Added a sniffer for serializing gazebo related information - "),o("a",{attrs:{href:"https://github.com/PX4/PX4-SITL_gazebo-classic/pull/937",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4-SITL_gazebo-classic#937"),o("OutboundLink")],1)]),t._v(" "),o("li",[t._v("[Gazebo-classic] Motor failure plugin as a ros2 plugin: Motor failure plugin has been updated to be a ros2 plugin - "),o("a",{attrs:{href:"https://github.com/PX4/PX4-SITL_gazebo-classic/pull/862",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4-SITL_gazebo-classic#862"),o("OutboundLink")],1)]),t._v(" "),o("li",[t._v("[Gazebo-classic] Addition of Omnicopter model: A fully actuated omnidirectional vehicle model has been added to Gazebo SITL - https://github.com/PX4/PX4-SITL_gazebo-classic/pull/866")]),t._v(" "),o("li",[t._v("[Gazebo-classic] Addition of Advanced liftdrag plugin: Advanced liftdrag plugin that models nonlinear aerodynamics based on AVL - "),o("a",{attrs:{href:"https://github.com/PX4/PX4-SITL_gazebo-classic/pull/901",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4-SITL_gazebo-classic#901"),o("OutboundLink")],1)]),t._v(" "),o("li",[t._v("[Gazebo-classic] Addition of Safe landing world: Addition of safe landing world, for testing safe landing - "),o("a",{attrs:{href:"https://github.com/PX4/PX4-SITL_gazebo-classic/pull/93",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4-SITL_gazebo-classic#93"),o("OutboundLink")],1)]),t._v(" "),o("li",[t._v("[Gazebo-classic] Depricated Ubuntu Bionic reated tests: Removed testing due to EOL of Ubuntu Bionic - "),o("a",{attrs:{href:"https://github.com/PX4/PX4-SITL_gazebo-classic/pull/974",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4-SITL_gazebo-classic#974"),o("OutboundLink")],1)]),t._v(" "),o("li",[t._v("[SIH] Standalone sensor simulations in tree: Ability to simulate sensors in tree that was part of SIH is now a stand alone sensor module. Sensors include magnetometer, GPS, Barometer, Airspeed - "),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/20137",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4-Autopilot#20137"),o("OutboundLink")],1),t._v(", https://github.com/PX4/PX4-Autopilot/tree/main/src/modules/simulation/sensor_airspeed_sim")]),t._v(" "),o("li",[t._v("[SIH] Failure injection for battery simulation - https://github.com/PX4/PX4-Autopilot/commit/ebc1d7544e8146788c9e7cf5e8b64f60199240e4")])]),t._v(" "),o("h3",{attrs:{id:"mavlink"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#mavlink"}},[t._v("#")]),t._v(" MAVLink")]),t._v(" "),o("ul",[o("li",[t._v("MAVLink forwarding over USB: Forward MAVLink traffic to/from USB by default - "),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/20745",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4-Autopilot#20745"),o("OutboundLink")],1)])]),t._v(" "),o("h3",{attrs:{id:"multi-rotor"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#multi-rotor"}},[t._v("#")]),t._v(" Multi-Rotor")]),t._v(" "),o("ul",[o("li",[t._v("Improved Follow-Me flight mode: Follow-me mode was improved for better user experience - "),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/18026",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4-Autopilot#18026"),o("OutboundLink")],1),t._v(" | "),o("a",{attrs:{href:"https://www.youtube.com/watch?v=rYYso87cmxA",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4 Dev Summit presentation"),o("OutboundLink")],1)]),t._v(" "),o("li",[t._v("Improved Helicopter Support: "),o("RouterLink",{attrs:{to:"/zh/config_heli/"}},[t._v("Helicopter Configuration")])],1),t._v(" "),o("li",[t._v("Direction-based speed constraints for multirotors: Can define a different forward, backward and lateral speed - "),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/19257",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4-Autopilot#19257"),o("OutboundLink")],1)]),t._v(" "),o("li",[t._v("Allow yawing in hold mode: Let the pilot yaw the drone while staying in hold mode - "),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/21399",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4-Autopilot#21399"),o("OutboundLink")],1)])]),t._v(" "),o("h3",{attrs:{id:"vtol"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#vtol"}},[t._v("#")]),t._v(" VTOL")]),t._v(" "),o("ul",[o("li",[t._v("Quad-chute: enable to reset failure state. Reset failure state once operator trigger transition to FW again - "),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/20913",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4-Autopilot#20913"),o("OutboundLink")],1)]),t._v(" "),o("li",[t._v("Simplify Tailsitter transitions to FW in Stabilized: Adapt the tilt threshold automatically on configured max tilt setting - "),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/21582",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4-Autopilot#21582"),o("OutboundLink")],1)]),t._v(" "),o("li",[t._v("Refactor uncommanded descend Quad-Chute: Enables to set altitude error threshold to trigger a Quad-chute - "),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/21598",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4-Autopilot#21598"),o("OutboundLink")],1)]),t._v(" "),o("li",[t._v("Enable control-surface-less Quad-tailsitters: Enables to use differential thrust to control full body attitude in FW mode on tailsitters - "),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/20511",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4-Autopilot#20511"),o("OutboundLink")],1)]),t._v(" "),o("li",[t._v("Skip VTOL_Takeoff mission item if already in-air - "),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/19985",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4-Autopilot#19985"),o("OutboundLink")],1)])]),t._v(" "),o("h3",{attrs:{id:"fixed-wing"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#fixed-wing"}},[t._v("#")]),t._v(" Fixed-wing")]),t._v(" "),o("ul",[o("li",[t._v("Flaps/Spoiler refactor - "),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/19329",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4-Autopilot#19329"),o("OutboundLink")],1)]),t._v(" "),o("li",[t._v("FW Position control: switch from L1 to NPFG guidance - "),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/19603",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4-Autopilot#19603"),o("OutboundLink")],1),t._v(" | "),o("a",{attrs:{href:"https://www.youtube.com/watch?v=LY6hYBCdy-0",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4 Dev Summit presentation video"),o("OutboundLink")],1)]),t._v(" "),o("li",[t._v("Automatically apply learned airspeed scale in-air - "),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/19787",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4-Autopilot#19787"),o("OutboundLink")],1)]),t._v(" "),o("li",[t._v("Takeoff refactor/enhancements - "),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/19869",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4-Autopilot#19869"),o("OutboundLink")],1)]),t._v(" "),o("li",[t._v("FW landing refactor/enhancements - "),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/19871",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4-Autopilot#19871"),o("OutboundLink")],1)]),t._v(" "),o("li",[t._v("Scale minimum airspeed with wind strength FW Position control: add option to scale min airspeed with wind magnitude - "),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/20259",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4-Autopilot#20259"),o("OutboundLink")],1)]),t._v(" "),o("li",[t._v("Improve FW hand-launch takeoff - "),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/20557",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4-Autopilot#20557"),o("OutboundLink")],1)]),t._v(" "),o("li",[t._v("Improve accelerated stall protection - "),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/20636",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4-Autopilot#20636"),o("OutboundLink")],1)]),t._v(" "),o("li",[t._v("Add option to disable manual yaw inputs - "),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/20647",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4-Autopilot#20647"),o("OutboundLink")],1)]),t._v(" "),o("li",[t._v("Disable airspeed rate input into TECS airspeed rate estimation has shown to be unreliable, so we decided to disable it for now - "),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/21317",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4-Autopilot#21317"),o("OutboundLink")],1)]),t._v(" "),o("li",[t._v("Support flying at different airspeeds Add airspeed to trim throttle mapping in TECS to support flying at different airspeeds - "),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/21345",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4-Autopilot#21345"),o("OutboundLink")],1)]),t._v(" "),o("li",[t._v("FWPositionControl: navigateWaypoints: fix logic if already past waypoint - "),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/pull/21642",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4-Autopilot#21642"),o("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=a.exports}}]);