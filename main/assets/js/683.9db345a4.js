(window.webpackJsonp=window.webpackJsonp||[]).push([[683],{1947:function(e,t,o){"use strict";o.r(t);var i=o(19),n=Object(i.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"visual-inertial-odometry-vio"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#visual-inertial-odometry-vio"}},[e._v("#")]),e._v(" Visual Inertial Odometry (VIO)")]),e._v(" "),i("p",[i("em",[e._v("Visual Inertial Odometry")]),e._v(" (VIO) is a "),i("RouterLink",{attrs:{to:"/en/computer_vision/"}},[e._v("computer vision")]),e._v(" technique used for estimating the 3D "),i("em",[e._v("pose")]),e._v(" (local position and orientation) and "),i("em",[e._v("velocity")]),e._v(" of a moving vehicle relative to a "),i("em",[e._v("local")]),e._v(" starting position.\nIt is commonly used to navigate a vehicle in situations where GPS is absent or unreliable (e.g. indoors, or when flying under a bridge).")],1),e._v(" "),i("p",[e._v("VIO uses "),i("a",{attrs:{href:"https://en.wikipedia.org/wiki/Visual_odometry",target:"_blank",rel:"noopener noreferrer"}},[e._v("Visual Odometry"),i("OutboundLink")],1),e._v(" to estimate vehicle "),i("em",[e._v("pose")]),e._v(" from camera images, combined with inertial measurements from the vehicle IMU (to correct for errors associated with rapid vehicle movement resulting in poor image capture).")]),e._v(" "),i("p",[e._v("This topic gives guidance on configuring PX4 and a companion computer for a VIO setup.")]),e._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),i("p",[e._v("The suggested setup uses ROS for routing VIO information to PX4.\nHowever, PX4 itself does not care about the source of messages, provided they are provided via the appropriate "),i("RouterLink",{attrs:{to:"/en/ros/external_position_estimation.html#px4-mavlink-integration"}},[e._v("MAVLink Interface")]),e._v(".")],1)]),e._v(" "),i("h2",{attrs:{id:"suggested-setup"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#suggested-setup"}},[e._v("#")]),e._v(" Suggested Setup")]),e._v(" "),i("p",[e._v("A hardware and software setup for VIO is suggested in the sections below as an illustration of how to interface a VIO system with PX4. It makes use of an off-the-shelf tracking camera and a companion computer running ROS.\nROS is used to read odometry information from the camera and supply it to PX4.")]),e._v(" "),i("p",[e._v("An example of a suitable tracking camera is the "),i("RouterLink",{attrs:{to:"/en/peripherals/camera_t265_vio.html"}},[e._v("Intel® RealSense™ Tracking Camera T265")]),e._v(".")],1),e._v(" "),i("h3",{attrs:{id:"camera-mounting"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#camera-mounting"}},[e._v("#")]),e._v(" Camera Mounting")]),e._v(" "),i("p",[e._v("Attach the camera to the companion computer and mount it to the frame:")]),e._v(" "),i("ul",[i("li",[e._v("Mount the camera with lenses pointing down if at all possible (default).")]),e._v(" "),i("li",[e._v("Cameras are typically very sensitive to vibration; a soft mounting is recommended (e.g. using vibration isolation foam).")])]),e._v(" "),i("h3",{attrs:{id:"companion-setup"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#companion-setup"}},[e._v("#")]),e._v(" Companion Setup")]),e._v(" "),i("p",[e._v("To setup ROS and PX4:")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("On the companion computer, install and configure "),i("RouterLink",{attrs:{to:"/en/ros/mavros_installation.html"}},[e._v("MAVROS")]),e._v(".")],1)]),e._v(" "),i("li",[i("p",[e._v("Implement and run a ROS node to read data from the camera and publish the VIO odometry using MAVROS.")]),e._v(" "),i("ul",[i("li",[e._v("See the "),i("a",{attrs:{href:"#vio_ros_node"}},[e._v("VIO ROS node")]),e._v(" section below for details of the requirements for this node.")])])]),e._v(" "),i("li",[i("p",[e._v("Follow the instructions "),i("a",{attrs:{href:"#ekf2_tuning"}},[e._v("below")]),e._v(" for tuning the PX4 EKF2 estimator.")])]),e._v(" "),i("li",[i("p",[e._v("Verify the connection to the flight controller.")]),e._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),i("p",[e._v("You can use the "),i("em",[e._v("QGroundControl")]),e._v(" "),i("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/qgc-user-guide/analyze_view/mavlink_inspector.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAVLink Inspector"),i("OutboundLink")],1),e._v(" to verify that you're getting "),i("code",[e._v("ODOMETRY")]),e._v(" or "),i("code",[e._v("VISION_POSITION_ESTIMATE")]),e._v(" messages (or check for "),i("code",[e._v("HEARTBEAT")]),e._v(" messages that have the component id 197 ("),i("code",[e._v("MAV_COMP_ID_VISUAL_INERTIAL_ODOMETRY")]),e._v(")).")])])]),e._v(" "),i("li",[i("p",[i("a",{attrs:{href:"#verify_estimate"}},[e._v("Verify that VIO is set up correctly")]),e._v(" before your first flight!")])])]),e._v(" "),i("p",[i("a",{attrs:{id:"vio_ros_node"}})]),e._v(" "),i("h3",{attrs:{id:"ros-vio-node"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#ros-vio-node"}},[e._v("#")]),e._v(" ROS VIO node")]),e._v(" "),i("p",[e._v("In this suggested setup, a ROS node is required to")]),e._v(" "),i("ol",[i("li",[e._v("interface with the chosen camera or sensor hardware,")]),e._v(" "),i("li",[e._v("produce odometry messages containing the position estimate, which will be sent to PX4 using MAVROS, and")]),e._v(" "),i("li",[e._v("publish messages to indicate the VIO system status.")])]),e._v(" "),i("p",[e._v("The implementation of the ROS node will be specific to the camera used and will need to be developed to use the interface and drivers appropriate for the camera.")]),e._v(" "),i("p",[e._v("The odometry messages should be of the type "),i("a",{attrs:{href:"http://docs.ros.org/en/noetic/api/nav_msgs/html/msg/Odometry.html",target:"_blank",rel:"noopener noreferrer"}},[i("code",[e._v("nav_msgs/Odometry")]),i("OutboundLink")],1),e._v(" and published to the topic "),i("code",[e._v("/mavros/odometry/out")]),e._v(".")]),e._v(" "),i("p",[e._v("System status messages of the type "),i("a",{attrs:{href:"https://github.com/mavlink/mavros/blob/master/mavros_msgs/msg/CompanionProcessStatus.msg",target:"_blank",rel:"noopener noreferrer"}},[i("code",[e._v("mavros_msgs/CompanionProcessStatus")]),i("OutboundLink")],1),e._v(" should be published to the topic "),i("code",[e._v("/mavros/companion_process/status")]),e._v(". These should identify the component as "),i("code",[e._v("MAV_COMP_ID_VISUAL_INERTIAL_ODOMETRY")]),e._v(" (197) and indicate the "),i("code",[e._v("state")]),e._v(" of the system. Recommended status values are:")]),e._v(" "),i("ul",[i("li",[i("code",[e._v("MAV_STATE_ACTIVE")]),e._v(" when the VIO system is functioning as expected,")]),e._v(" "),i("li",[i("code",[e._v("MAV_STATE_CRITICAL")]),e._v(" when the VIO system is functioning, but with low confidence, and")]),e._v(" "),i("li",[i("code",[e._v("MAV_STATE_FLIGHT_TERMINATION")]),e._v(" when the system has failed or the estimate confidence is unacceptably low.")])]),e._v(" "),i("p",[i("a",{attrs:{id:"ekf2_tuning"}})]),e._v(" "),i("h3",{attrs:{id:"px4-tuning"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#px4-tuning"}},[e._v("#")]),e._v(" PX4 Tuning")]),e._v(" "),i("p",[e._v("The following parameters must be set to use external position information with EKF2.")]),e._v(" "),i("table",[i("thead",[i("tr",[i("th",[e._v("Parameter")]),e._v(" "),i("th",[e._v("Setting for External Position Estimation")])])]),e._v(" "),i("tbody",[i("tr",[i("td",[i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#EKF2_EV_CTRL"}},[e._v("EKF2_EV_CTRL")])],1),e._v(" "),i("td",[e._v("Set "),i("em",[e._v("horizontal position fusion")]),e._v(", "),i("em",[e._v("vertical vision fusion")]),e._v(", "),i("em",[e._v("velocity fusion")]),e._v(", and "),i("em",[e._v("yaw fusion")]),e._v(" according to your desired fusion model.")])]),e._v(" "),i("tr",[i("td",[i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#EKF2_HGT_REF"}},[e._v("EKF2_HGT_REF")])],1),e._v(" "),i("td",[e._v("Set to "),i("em",[e._v("Vision")]),e._v(" to use the vision as the reference sensor for altitude estimation.")])]),e._v(" "),i("tr",[i("td",[i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#EKF2_EV_DELAY"}},[e._v("EKF2_EV_DELAY")])],1),e._v(" "),i("td",[e._v('Set to the difference between the timestamp of the measurement and the "actual" capture time. For more information see '),i("a",{attrs:{href:"#tuning-EKF2_EV_DELAY"}},[e._v("below")]),e._v(".")])]),e._v(" "),i("tr",[i("td",[i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#EKF2_EV_POS_X"}},[e._v("EKF2_EV_POS_X")]),e._v(", "),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#EKF2_EV_POS_Y"}},[e._v("EKF2_EV_POS_Y")]),e._v(", "),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#EKF2_EV_POS_Z"}},[e._v("EKF2_EV_POS_Z")])],1),e._v(" "),i("td",[e._v("Set the position of the vision sensor with respect to the vehicle's body frame.")])])])]),e._v(" "),i("p",[e._v("These can be set in "),i("em",[e._v("QGroundControl")]),e._v(" > "),i("strong",[e._v("Vehicle Setup > Parameters > EKF2")]),e._v(" (remember to reboot the flight controller in order for parameter changes to take effect).")]),e._v(" "),i("p",[e._v("For more detailed/additional information, see: "),i("RouterLink",{attrs:{to:"/en/advanced_config/tuning_the_ecl_ekf.html#external-vision-system"}},[e._v("ECL/EKF Overview & Tuning > External Vision System")]),e._v(".")],1),e._v(" "),i("p",[i("a",{attrs:{id:"tuning-EKF2_EV_DELAY"}})]),e._v(" "),i("h4",{attrs:{id:"tuning-ekf2-ev-delay"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#tuning-ekf2-ev-delay"}},[e._v("#")]),e._v(" Tuning EKF2_EV_DELAY")]),e._v(" "),i("p",[i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#EKF2_EV_DELAY"}},[e._v("EKF2_EV_DELAY")]),e._v(" is the "),i("em",[e._v("Vision Position Estimator delay relative to IMU measurements")]),e._v('.\nIn other words, it is the difference between the vision system timestamp and the "actual" capture time that would have been recorded by the IMU clock (the "base clock" for EKF2).')],1),e._v(" "),i("p",[e._v("Technically this can be set to 0 if there is correct timestamping (not just arrival time) and timesync (e.g. NTP) between MoCap and (for example) ROS computers.\nIn reality, this may need some empirical tuning because delays in the communication chain are very setup-specific.\nIt is rare that a system is set up with an entirely synchronised chain!")]),e._v(" "),i("p",[e._v("A rough estimate of the delay can be obtained from logs by checking the offset between IMU rates and the EV rates:")]),e._v(" "),i("p",[i("img",{attrs:{src:o(381),alt:"ekf2_ev_delay log"}})]),e._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),i("p",[e._v("A plot of external data vs. onboard estimate (as above) can be generated using "),i("RouterLink",{attrs:{to:"/en/log/flight_log_analysis.html#flightplot"}},[e._v("FlightPlot")]),e._v(" or similar flight analysis tools.")],1)]),e._v(" "),i("p",[e._v("The value can further be tuned by varying the parameter to find the value that yields the lowest EKF innovations during dynamic maneuvers.")]),e._v(" "),i("p",[i("a",{attrs:{id:"verify_estimate"}})]),e._v(" "),i("h2",{attrs:{id:"check-verify-vio-estimate"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#check-verify-vio-estimate"}},[e._v("#")]),e._v(" Check/Verify VIO Estimate")]),e._v(" "),i("p",[e._v("Perform the following checks to verify that VIO is working properly "),i("em",[e._v("before")]),e._v(" your first flight:")]),e._v(" "),i("ul",[i("li",[e._v("Set the PX4 parameter "),i("code",[e._v("MAV_ODOM_LP")]),e._v(" to `1``.\nPX4 will then stream back the received external pose as MAVLink "),i("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#ODOMETRY",target:"_blank",rel:"noopener noreferrer"}},[e._v("ODOMETRY"),i("OutboundLink")],1),e._v(" messages.\nYou can check these MAVLink messages with the "),i("em",[e._v("QGroundControl")]),e._v(" "),i("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/qgc-user-guide/analyze_view/mavlink_inspector.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAVLink Inspector"),i("OutboundLink")],1)]),e._v(" "),i("li",[e._v("Yaw the vehicle until the quaternion of the "),i("code",[e._v("ODOMETRY")]),e._v(" message is very close to a unit quaternion (w=1, x=y=z=0).\n"),i("ul",[i("li",[e._v("At this point, the body frame is aligned with the reference frame of the external pose system.")]),e._v(" "),i("li",[e._v("If you do not manage to get a quaternion close to the unit quaternion without rolling or pitching your vehicle, your frame probably still has a pitch or roll offset.\nDo not proceed if this is the case and check your coordinate frames again.")])])]),e._v(" "),i("li",[e._v("Once aligned, you can pick the vehicle up from the ground and you should see the position's z coordinate decrease.\nMoving the vehicle in the forward direction should increase the position's x coordinate.\nMoving the vehicle to the right should increase the y coordinate.")]),e._v(" "),i("li",[e._v("Check that linear velocities in the message are expressed in the "),i("em",[e._v("FRD")]),e._v(" body frame reference frame.")]),e._v(" "),i("li",[e._v("Set the PX4 parameter "),i("code",[e._v("MAV_ODOM_LP")]),e._v(" back to 0.\nPX4 will stop streaming the "),i("code",[e._v("ODOMETRY")]),e._v(" message back.")])]),e._v(" "),i("p",[e._v("If those steps are consistent, you can try your first flight:")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("Put the vehicle on the ground and start streaming "),i("code",[e._v("ODOMETRY")]),e._v(" feedback (as above).\nLower your throttle stick and arm the motors.")]),e._v(" "),i("p",[e._v("At this point, with the left stick at the lowest position, switch to position control.\nYou should have a green light.\nThe green light tells you that position feedback is available and position control is now activated.")])]),e._v(" "),i("li",[i("p",[e._v("Put the throttle stick in the middle (the dead zone) so that the vehicle maintains its altitude.\nRaising the stick will increase the reference altitude while lowering the value will decrease it.\nSimilarly, the other stick will change the position over the ground.")])]),e._v(" "),i("li",[i("p",[e._v("Increase the value of the throttle stick and the vehicle will take off. Move it back to the middle immediately afterwards.")])]),e._v(" "),i("li",[i("p",[e._v("Confirm that the vehicle can hold its position.")])])]),e._v(" "),i("h2",{attrs:{id:"troubleshooting"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[e._v("#")]),e._v(" Troubleshooting")]),e._v(" "),i("p",[e._v("First, make sure MAVROS is able to connect successfully to the flight controller.")]),e._v(" "),i("p",[e._v("If it is connecting properly common problems/solutions are:")]),e._v(" "),i("ul",[i("li",[i("p",[i("strong",[e._v("Problem:")]),e._v(" I get drift / flyaways when the drone flies, but not when I carry it around with the props off.")]),e._v(" "),i("ul",[i("li",[e._v("If using the "),i("RouterLink",{attrs:{to:"/en/peripherals/camera_t265_vio.html"}},[e._v("T265")]),e._v(" try soft-mounting it (this camera is very sensitive to high-frequency vibrations).")],1)])]),e._v(" "),i("li",[i("p",[i("strong",[e._v("Problem:")]),e._v(" I get toilet-bowling when VIO is enabled.")]),e._v(" "),i("ul",[i("li",[e._v("Make sure the orientation of the camera matches the transform in the launch file.\nUse the "),i("em",[e._v("QGroundControl")]),e._v(" "),i("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/qgc-user-guide/analyze_view/mavlink_inspector.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAVLink Inspector"),i("OutboundLink")],1),e._v(" to verify that the velocities in the "),i("code",[e._v("ODOMETRY")]),e._v(" message coming from MAVROS are aligned to the FRD coordinate system.")])])]),e._v(" "),i("li",[i("p",[i("strong",[e._v("Problem:")]),e._v(" I want to use vision position to do loop closing, and also want to run GPS.")]),e._v(" "),i("ul",[i("li",[e._v("This is really difficult, because when they disagree it will confuse the EKF.\nFrom testing it is more reliable to just use vision velocity (if you figure out a way to make this configuration reliable, let us know).")])])])]),e._v(" "),i("h2",{attrs:{id:"developer-information"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#developer-information"}},[e._v("#")]),e._v(" Developer Information")]),e._v(" "),i("p",[e._v("Developers who are interested in extending this implementation (or writing a different one, which might not depend on ROS) should see "),i("RouterLink",{attrs:{to:"/en/ros/external_position_estimation.html"}},[e._v("Using Vision or Motion Capture Systems for Position Estimation")]),e._v(".")],1),e._v(" "),i("p",[e._v("This topic also explains how to configure VIO for use with the LPE Estimator (deprecated).")]),e._v(" "),i("h2",{attrs:{id:"further-information"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#further-information"}},[e._v("#")]),e._v(" Further Information")]),e._v(" "),i("ul",[i("li",[i("RouterLink",{attrs:{to:"/en/advanced_config/tuning_the_ecl_ekf.html#external-vision-system"}},[e._v("ECL/EKF Overview & Tuning > External Vision System")])],1)])])}),[],!1,null,null,null);t.default=n.exports},381:function(e,t,o){e.exports=o.p+"assets/img/ekf2_ev_delay_tuning.fb81d6d1.png"}}]);