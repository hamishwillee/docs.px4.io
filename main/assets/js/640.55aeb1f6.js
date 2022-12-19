(window.webpackJsonp=window.webpackJsonp||[]).push([[640],{1776:function(e,t,a){"use strict";a.r(t);var r=a(19),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"visual-inertial-odometry-vio"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#visual-inertial-odometry-vio"}},[e._v("#")]),e._v(" Visual Inertial Odometry (VIO)")]),e._v(" "),r("p",[r("em",[e._v("Visual Inertial Odometry")]),e._v(" (VIO) is a "),r("RouterLink",{attrs:{to:"/en/computer_vision/"}},[e._v("computer vision")]),e._v(" technique used for estimating the 3D "),r("em",[e._v("pose")]),e._v(" (local position and orientation) and "),r("em",[e._v("velocity")]),e._v(" of a moving vehicle relative to a "),r("em",[e._v("local")]),e._v(" starting position.\nIt is commonly used to navigate a vehicle in situations where GPS is absent or unreliable (e.g. indoors, or when flying under a bridge).")],1),e._v(" "),r("p",[e._v("VIO uses "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Visual_odometry",target:"_blank",rel:"noopener noreferrer"}},[e._v("Visual Odometry"),r("OutboundLink")],1),e._v(" to estimate vehicle "),r("em",[e._v("pose")]),e._v(" from camera images, combined with inertial measurements from the vehicle IMU (to correct for errors associated with rapid vehicle movement resulting in poor image capture).")]),e._v(" "),r("p",[e._v("This topic shows how to set up PX4 and a companion computer to use the "),r("em",[e._v("supported")]),e._v(" VIO setup.")]),e._v(" "),r("iframe",{attrs:{width:"650",height:"365",src:"https://www.youtube.com/embed/gWtrka2mK7U",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("The "),r("a",{attrs:{href:"https://auterion.com/enabling_uav_navigation_in_environments_with_limited_or_no_gps_signal/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Auterion product video"),r("OutboundLink")],1),e._v(" above shows a vehicle flying using the "),r("a",{attrs:{href:"#supported_setup"}},[e._v("supported setup")]),e._v(".")])]),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),r("p",[e._v("This (supported) solution uses ROS for routing VIO information to PX4.\nPX4 itself does not care about the source of messages, provided they are provided via the appropriate "),r("RouterLink",{attrs:{to:"/en/ros/external_position_estimation.html#px4-mavlink-integration"}},[e._v("MAVLink Interface")]),e._v(".")],1)]),e._v(" "),r("p",[r("a",{attrs:{id:"supported_setup"}})]),e._v(" "),r("h2",{attrs:{id:"supported-setup"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#supported-setup"}},[e._v("#")]),e._v(" Supported Setup")]),e._v(" "),r("p",[e._v("The supported setup uses the "),r("RouterLink",{attrs:{to:"/en/peripherals/camera_t265_vio.html"}},[e._v("T265 Intel Realsense Tracking Camera")]),e._v(" and ROS (running on a companion computer) to supply odometry information to PX4.\nThe Auterion "),r("a",{attrs:{href:"https://github.com/Auterion/VIO_bridge",target:"_blank",rel:"noopener noreferrer"}},[e._v("VIO bridge ROS node"),r("OutboundLink")],1),e._v(" provides a bridge between this (particular) camera and ROS.")],1),e._v(" "),r("h3",{attrs:{id:"camera-mounting"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#camera-mounting"}},[e._v("#")]),e._v(" Camera Mounting")]),e._v(" "),r("p",[e._v("Attach the camera to the companion computer and mount it to the frame:")]),e._v(" "),r("ul",[r("li",[e._v("Connect the "),r("RouterLink",{attrs:{to:"/en/peripherals/camera_t265_vio.html"}},[e._v("T265 Intel Realsense Tracking Camera")]),e._v(" using the supplied cable.")],1),e._v(" "),r("li",[e._v("Mount the camera with lenses pointing down if at all possible (default).")]),e._v(" "),r("li",[e._v("The camera is very sensitive to vibration; a soft mounting is recommended (e.g. using vibration isolation foam).")])]),e._v(" "),r("h3",{attrs:{id:"ros-vio-setup"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ros-vio-setup"}},[e._v("#")]),e._v(" ROS/VIO Setup")]),e._v(" "),r("p",[e._v("To setup the Bridge, ROS and PX4:")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("On the companion computer, install and configure "),r("RouterLink",{attrs:{to:"/en/ros/mavros_installation.html"}},[e._v("MAVROS")]),e._v(".")],1)]),e._v(" "),r("li",[r("p",[e._v("Get the Auterion "),r("a",{attrs:{href:"https://github.com/Auterion/VIO_bridge",target:"_blank",rel:"noopener noreferrer"}},[e._v("VIO bridge ROS node"),r("OutboundLink")],1),e._v(":")]),e._v(" "),r("ul",[r("li",[e._v("Clone this repository in your catkin workspace."),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("cd ~/catkin_ws/src\ngit clone https://github.com/Auterion/VIO.git\n")])])])]),e._v(" "),r("li",[e._v("Build the package:"),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("cd ~/catkin_ws/src\ncatkin build px4_realsense_bridge\n")])])])])])]),e._v(" "),r("li",[r("p",[e._v("Configure the camera orientation if needed:")]),e._v(" "),r("ul",[r("li",[e._v("The VIO bridge doesn't require any configuration if the camera is mounted with the lenses facing down (the default).")]),e._v(" "),r("li",[e._v("For any other orientation modify "),r("a",{attrs:{href:"https://github.com/Auterion/VIO/blob/master/launch/bridge_mavros.launch",target:"_blank",rel:"noopener noreferrer"}},[e._v("bridge_mavros.launch"),r("OutboundLink")],1),e._v(" in the section below:"),r("div",{staticClass:"language-xml extra-class"},[r("pre",{pre:!0,attrs:{class:"language-xml"}},[r("code",[r("span",{pre:!0,attrs:{class:"token tag"}},[r("span",{pre:!0,attrs:{class:"token tag"}},[r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("node")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("pkg")]),r("span",{pre:!0,attrs:{class:"token attr-value"}},[r("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[e._v("=")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("tf"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),e._v(" "),r("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("type")]),r("span",{pre:!0,attrs:{class:"token attr-value"}},[r("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[e._v("=")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("static_transform_publisher"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),e._v(" "),r("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("name")]),r("span",{pre:!0,attrs:{class:"token attr-value"}},[r("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[e._v("=")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("tf_baseLink_cameraPose"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),e._v("\n    "),r("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("args")]),r("span",{pre:!0,attrs:{class:"token attr-value"}},[r("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[e._v("=")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("0 0 0 0 1.5708 0 base_link camera_pose_frame 1000"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("/>")])]),e._v("\n")])])])])]),e._v(" "),r("p",[e._v("This is a static transform that links the camera ROS frame "),r("code",[e._v("camera_pose_frame")]),e._v(" to the mavros drone frame "),r("code",[e._v("base_link")]),e._v(".")]),e._v(" "),r("ul",[r("li",[e._v("the first three "),r("code",[e._v("args")]),e._v(" specify "),r("em",[e._v("translation")]),e._v(" x,y,z in metres from the center of flight controller to camera.\nFor example, if the camera is 10cm in front of the controller and 4cm up, the first three numbers would be : [0.1, 0, 0.04,...]")]),e._v(" "),r("li",[e._v("the next three "),r("code",[e._v("args")]),e._v(" specify rotation in radians (yaw, pitch, roll).\nSo "),r("code",[e._v("[... 0, 1.5708, 0]")]),e._v(" means pitch down by 90deg (facing the ground). Facing straight forward would be [... 0 0 0].")])])]),e._v(" "),r("li",[r("p",[e._v("Follow the instructions "),r("a",{attrs:{href:"#ekf2_tuning"}},[e._v("below")]),e._v(" for tuning the PX4 EKF2 estimator.")])]),e._v(" "),r("li",[r("p",[e._v("Run VIO by calling "),r("code",[e._v("roslaunch")]),e._v(" with an appropriate launch file:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("cd ~/catkin_ws/src\nroslaunch px4_realsense_bridge bridge_mavros.launch\n")])])]),r("p",[e._v("The launch file options are:")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/Auterion/VIO/blob/master/launch/bridge_mavros.launch",target:"_blank",rel:"noopener noreferrer"}},[e._v("bridge_mavros.launch"),r("OutboundLink")],1),e._v(": Use on vehicle in most cases (starts bridge and MAVROS).")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/Auterion/VIO/blob/master/launch/bridge.launch",target:"_blank",rel:"noopener noreferrer"}},[e._v("bridge.launch"),r("OutboundLink")],1),e._v(": Use if some other component is responsible for starting MAVROS (only starts bridge)")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/Auterion/VIO/blob/master/launch/bridge_mavros_sitl.launch",target:"_blank",rel:"noopener noreferrer"}},[e._v("bridge_mavros_sitl.launch"),r("OutboundLink")],1),e._v(":Use for simulation (starts bridge, MAVROS, SITL)")])])]),e._v(" "),r("li",[r("p",[e._v("Verify the connection to the flight controller.")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("You can use the "),r("em",[e._v("QGroundControl")]),e._v(" "),r("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/analyze_view/mavlink_inspector.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAVLink Inspector"),r("OutboundLink")],1),e._v(" to verify that you're getting "),r("code",[e._v("ODOMETRY")]),e._v(" or "),r("code",[e._v("VISION_POSITION_ESTIMATE")]),e._v(" messages (or check for "),r("code",[e._v("HEARTBEAT")]),e._v(" messages that have the component id 197 ("),r("code",[e._v("MAV_COMP_ID_VISUAL_INERTIAL_ODOMETRY")]),e._v(")).")])])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"#verify_estimate"}},[e._v("Verify that VIO is Setup Correctly")]),e._v(" before your first flight!")])])]),e._v(" "),r("p",[r("a",{attrs:{id:"ekf2_tuning"}})]),e._v(" "),r("h3",{attrs:{id:"px4-tuning"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#px4-tuning"}},[e._v("#")]),e._v(" PX4 Tuning")]),e._v(" "),r("p",[e._v("The following parameters must be set to use external position information with EKF2.")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Parameter")]),e._v(" "),r("th",[e._v("Setting for External Position Estimation")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#EKF2_AID_MASK"}},[e._v("EKF2_AID_MASK")])],1),e._v(" "),r("td",[e._v("Set "),r("em",[e._v("vision position fusion")]),e._v(", "),r("em",[e._v("vision velocity fusion")]),e._v(", "),r("em",[e._v("vision yaw fusion")]),e._v(" and "),r("em",[e._v("external vision rotation")]),e._v(" according to your desired fusion model.")])]),e._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#EKF2_HGT_REF"}},[e._v("EKF2_HGT_REF")])],1),e._v(" "),r("td",[e._v("Set to "),r("em",[e._v("Vision")]),e._v(" to use the vision as the reference sensor for altitude estimation.")])]),e._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#EKF2_EV_DELAY"}},[e._v("EKF2_EV_DELAY")])],1),e._v(" "),r("td",[e._v('Set to the difference between the timestamp of the measurement and the "actual" capture time. For more information see '),r("a",{attrs:{href:"#tuning-EKF2_EV_DELAY"}},[e._v("below")]),e._v(".")])]),e._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#EKF2_EV_POS_X"}},[e._v("EKF2_EV_POS_X")]),e._v(", "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#EKF2_EV_POS_Y"}},[e._v("EKF2_EV_POS_Y")]),e._v(", "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#EKF2_EV_POS_Z"}},[e._v("EKF2_EV_POS_Z")])],1),e._v(" "),r("td",[e._v("Set the position of the vision sensor with respect to the vehicles body frame.")])])])]),e._v(" "),r("p",[e._v("These can be set in "),r("em",[e._v("QGroundControl")]),e._v(" > "),r("strong",[e._v("Vehicle Setup > Parameters > EKF2")]),e._v(" (remember to reboot the flight controller in order for parameter changes to take effect).")]),e._v(" "),r("p",[e._v("For more detailed/additional information, see: "),r("RouterLink",{attrs:{to:"/en/advanced_config/tuning_the_ecl_ekf.html#external-vision-system"}},[e._v("ECL/EKF Overview & Tuning > External Vision System")]),e._v(".")],1),e._v(" "),r("p",[r("a",{attrs:{id:"tuning-EKF2_EV_DELAY"}})]),e._v(" "),r("h4",{attrs:{id:"tuning-ekf2-ev-delay"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tuning-ekf2-ev-delay"}},[e._v("#")]),e._v(" Tuning EKF2_EV_DELAY")]),e._v(" "),r("p",[r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#EKF2_EV_DELAY"}},[e._v("EKF2_EV_DELAY")]),e._v(" is the "),r("em",[e._v("Vision Position Estimator delay relative to IMU measurements")]),e._v('.\nIn other words, it is the difference between the vision system timestamp and the "actual" capture time that would have been recorded by the IMU clock (the "base clock" for EKF2).')],1),e._v(" "),r("p",[e._v("Technically this can be set to 0 if there is correct timestamping (not just arrival time) and timesync (e.g NTP) between MoCap and (for example) ROS computers.\nIn reality, this may need some empirical tuning because delays in the communication chain are very setup-specific.\nIt is rare that a system is setup with an entirely synchronised chain!")]),e._v(" "),r("p",[e._v("A rough estimate of the delay can be obtained from logs by checking the offset between IMU rates and the EV rates:")]),e._v(" "),r("p",[r("img",{attrs:{src:a(384),alt:"ekf2_ev_delay log"}})]),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),r("p",[e._v("A plot of external data vs. onboard estimate (as above) can be generated using "),r("RouterLink",{attrs:{to:"/en/log/flight_log_analysis.html#flightplot"}},[e._v("FlightPlot")]),e._v(" or similar flight analysis tools.")],1)]),e._v(" "),r("p",[e._v("The value can further be tuned by varying the parameter to find the value that yields the lowest EKF innovations during dynamic maneuvers.")]),e._v(" "),r("p",[r("a",{attrs:{id:"verify_estimate"}})]),e._v(" "),r("h2",{attrs:{id:"check-verify-vio-estimate"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#check-verify-vio-estimate"}},[e._v("#")]),e._v(" Check/Verify VIO Estimate")]),e._v(" "),r("p",[e._v("Perform the following checks to verify that VIO is working properly "),r("em",[e._v("before")]),e._v(" your first flight:")]),e._v(" "),r("ul",[r("li",[e._v("Set the PX4 parameter "),r("code",[e._v("MAV_ODOM_LP")]),e._v(" to 1.\nPX4 will then stream back the received external pose as MAVLink "),r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#ODOMETRY",target:"_blank",rel:"noopener noreferrer"}},[e._v("ODOMETRY"),r("OutboundLink")],1),e._v(" messages.\nYou can check these MAVLink messages with the "),r("em",[e._v("QGroundControl")]),e._v(" "),r("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/analyze_view/mavlink_inspector.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAVLink Inspector"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Yaw the vehicle until the quaternion of the "),r("code",[e._v("ODOMETRY")]),e._v(" message is very close to a unit quaternion (w=1, x=y=z=0).\n"),r("ul",[r("li",[e._v("At this point the body frame is aligned with the reference frame of the external pose system.")]),e._v(" "),r("li",[e._v("If you do not manage to get a quaternion close to the unit quaternion without rolling or pitching your vehicle, your frame probably still has a pitch or roll offset.\nDo not proceed if this is the case and check your coordinate frames again.")])])]),e._v(" "),r("li",[e._v("Once aligned you can pick the vehicle up from the ground and you should see the position's z coordinate decrease.\nMoving the vehicle in forward direction, should increase the position's x coordinate.\nWhile moving the vehicle to the right should increase the y coordinate.")]),e._v(" "),r("li",[e._v("Check that linear velocities in the message are in expressed in the "),r("em",[e._v("FRD")]),e._v(" body frame reference frame.")]),e._v(" "),r("li",[e._v("Set the PX4 parameter "),r("code",[e._v("MAV_ODOM_LP")]),e._v(" back to 0.\nPX4 will stop streaming the "),r("code",[e._v("ODOMETRY")]),e._v(" message back.")])]),e._v(" "),r("p",[e._v("If those steps are consistent, you can try your first flight:")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("Put the vehicle on the ground and start streaming "),r("code",[e._v("ODOMETRY")]),e._v(" feedback (as above).\nLower your throttle stick and arm the motors.")]),e._v(" "),r("p",[e._v("At this point, with the left stick at the lowest position, switch to position control.\nYou should have a green light.\nThe green light tells you that position feedback is available and position control is now activated.")])]),e._v(" "),r("li",[r("p",[e._v("Put the throttle stick in the middle (the dead zone) so that the vehicle maintains its altitude.\nRaising the stick will increase the reference altitude while lowering the value will decrease it.\nSimilarly the other stick will change position over ground.")])]),e._v(" "),r("li",[r("p",[e._v("Increase the value of the throttle stick and the vehicle will take off, put it back to the middle right after.")])]),e._v(" "),r("li",[r("p",[e._v("Confirm that the vehicle can hold its position.")])])]),e._v(" "),r("h2",{attrs:{id:"troubleshooting"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[e._v("#")]),e._v(" Troubleshooting")]),e._v(" "),r("p",[e._v("First make sure MAVROS is able to connect successfully to the flight controller.")]),e._v(" "),r("p",[e._v("If it is connecting properly common problems/solutions are:")]),e._v(" "),r("ul",[r("li",[r("p",[r("strong",[e._v("Problem:")]),e._v(" I get drift / flyaways when the drone flies, but not when I carry it around with the props off.")]),e._v(" "),r("ul",[r("li",[e._v("If using the "),r("RouterLink",{attrs:{to:"/en/peripherals/camera_t265_vio.html"}},[e._v("T265")]),e._v(" try soft-mounting it (this camera is very sensitive to high frequency vibrations).")],1)])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("Problem:")]),e._v(" I get toilet-bowling when VIO is enabled.")]),e._v(" "),r("ul",[r("li",[e._v("Make sure the orientation of the camera matches the transform in the launch file.\nUse the "),r("em",[e._v("QGroundControl")]),e._v(" "),r("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/analyze_view/mavlink_inspector.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAVLink Inspector"),r("OutboundLink")],1),e._v(" to verify that the velocities in the "),r("code",[e._v("ODOMETRY")]),e._v(" message coming from MAVROS are aligned to the FRD coordinate system.")])])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("Problem:")]),e._v(" I want to use vision position to do loop closing, and also want to run GPS.")]),e._v(" "),r("ul",[r("li",[e._v("This is really difficult, because when they disagree it will confuse the EKF.\nFrom testing it is more reliable to just use vision velocity (if you figure out a way to make this configuration reliable, let us know).")])])])]),e._v(" "),r("h2",{attrs:{id:"developer-information"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#developer-information"}},[e._v("#")]),e._v(" Developer Information")]),e._v(" "),r("p",[e._v("Developers who are interested in extending this implementation (or writing a different one, which might not depend on ROS) should see "),r("RouterLink",{attrs:{to:"/en/ros/external_position_estimation.html"}},[e._v("Using Vision or Motion Capture Systems for Position Estimation")]),e._v(".")],1),e._v(" "),r("p",[e._v("This topic also explains how to configure VIO for use with the LPE Estimator (deprecated).")]),e._v(" "),r("h2",{attrs:{id:"further-information"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#further-information"}},[e._v("#")]),e._v(" Further Information")]),e._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/en/advanced_config/tuning_the_ecl_ekf.html#external-vision-system"}},[e._v("ECL/EKF Overview & Tuning > External Vision System")])],1)])])}),[],!1,null,null,null);t.default=o.exports},384:function(e,t,a){e.exports=a.p+"assets/img/ekf2_ev_delay_tuning.e77364d5.png"}}]);