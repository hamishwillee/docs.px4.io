(window.webpackJsonp=window.webpackJsonp||[]).push([[350],{1249:function(t,e,a){t.exports=a.p+"assets/img/flow_lidar_attached.63b8acb4.jpg"},1250:function(t,e,a){t.exports=a.p+"assets/img/px4flow_offset.80ab9f41.png"},1251:function(t,e,a){t.exports=a.p+"assets/img/qgc_ekf2_enable_flow.ac4d0802.png"},2227:function(t,e,a){"use strict";a.r(e);var o=a(19),s=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"optical-flow"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#optical-flow"}},[t._v("#")]),t._v(" Optical Flow")]),t._v(" "),o("p",[o("em",[t._v("Optical Flow")]),t._v(" uses a downward facing camera and a downward facing distance sensor for velocity estimation. Optical Flow based navigation is enabled by the estimators: EKF2 and LPE (deprecated).")]),t._v(" "),o("h2",{attrs:{id:"setup"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#setup"}},[t._v("#")]),t._v(" Setup")]),t._v(" "),o("p",[t._v("An Optical Flow setup requires a downward facing camera and a "),o("RouterLink",{attrs:{to:"/ko/sensor/rangefinders.html"}},[t._v("distance sensor")]),t._v(" (preferably a LiDAR). These can be connected via MAVLink, I2C or any other bus that supports the peripheral.")],1),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("If connected to PX4 via MAVLink the Optical Flow device must publish to the "),o("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#OPTICAL_FLOW_RAD",target:"_blank",rel:"noopener noreferrer"}},[t._v("OPTICAL_FLOW_RAD"),o("OutboundLink")],1),t._v(" topic, and the distance sensor must publish to the "),o("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#DISTANCE_SENSOR",target:"_blank",rel:"noopener noreferrer"}},[t._v("DISANCE_SENSOR"),o("OutboundLink")],1),t._v(" topic.")])]),t._v(" "),o("p",[t._v("The output of the flow when moving in different directions must be as follows:")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("Vehicle movement")]),t._v(" "),o("th",[t._v("Integrated flow")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("Forwards")]),t._v(" "),o("td",[t._v("+ Y")])]),t._v(" "),o("tr",[o("td",[t._v("Backwards")]),t._v(" "),o("td",[t._v("- Y")])]),t._v(" "),o("tr",[o("td",[t._v("Right")]),t._v(" "),o("td",[t._v("- X")])]),t._v(" "),o("tr",[o("td",[t._v("Left")]),t._v(" "),o("td",[t._v("+ X")])])])]),t._v(" "),o("p",[t._v("For pure rotations the "),o("code",[t._v("integrated_xgyro")]),t._v(" and "),o("code",[t._v("integrated_x")]),t._v(" (respectively "),o("code",[t._v("integrated_ygyro")]),t._v(" and "),o("code",[t._v("integrated_y")]),t._v(") have to be the same.")]),t._v(" "),o("p",[t._v("An popular setup is the "),o("RouterLink",{attrs:{to:"/ko/sensor/px4flow.html"}},[t._v("PX4Flow")]),t._v(" and "),o("RouterLink",{attrs:{to:"/ko/sensor/lidar_lite.html"}},[t._v("Lidar-Lite")]),t._v(", as shown below.")],1),t._v(" "),o("p",[o("img",{attrs:{src:a(1249),alt:"Optical flow lidar attached"}})]),t._v(" "),o("p",[t._v("Sensor data from the optical flow device is fused with other velocity data sources. The approach used for fusing sensor data and any offsets from the center of the vehicle must be configured in the "),o("a",{attrs:{href:"#estimators"}},[t._v("estimator")]),t._v(".")]),t._v(" "),o("h2",{attrs:{id:"flow-sensors-cameras"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#flow-sensors-cameras"}},[t._v("#")]),t._v(" Flow Sensors/Cameras")]),t._v(" "),o("h3",{attrs:{id:"px4flow"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#px4flow"}},[t._v("#")]),t._v(" PX4Flow")]),t._v(" "),o("p",[o("RouterLink",{attrs:{to:"/ko/sensor/px4flow.html"}},[t._v("PX4Flow")]),t._v(" is an optical flow camera that works indoors and in low outdoor light conditions without the need for an illumination LED. It is one of the easiest and most established ways to calculate the optical flow.")],1),t._v(" "),o("h3",{attrs:{id:"ark-flow"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ark-flow"}},[t._v("#")]),t._v(" ARK Flow")]),t._v(" "),o("p",[o("RouterLink",{attrs:{to:"/ko/uavcan/ark_flow.html"}},[t._v("ARK Flow")]),t._v(" is a "),o("RouterLink",{attrs:{to:"/ko/uavcan/"}},[t._v("UAVCAN")]),t._v(" optical flow sensor, "),o("RouterLink",{attrs:{to:"/ko/sensor/rangefinders.html"}},[t._v("distance sensor")]),t._v(", and IMU. It has a PAW3902 optical flow sensor, Broadcom AFBR-S50LV85D 30 meter distance sensor, and BMI088 IMU.")],1),t._v(" "),o("h3",{attrs:{id:"pmw3901-based-sensors"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#pmw3901-based-sensors"}},[t._v("#")]),t._v(" PMW3901-Based Sensors")]),t._v(" "),o("p",[o("RouterLink",{attrs:{to:"/ko/sensor/pmw3901.html"}},[t._v("PMW3901")]),t._v(" is an optical flow tracking sensor similar to what you would find in a computer mouse, but adapted to work between 80 mm and infinity. It is used in a number of products, including some from: Bitcraze, Tindie, Hex, Thone and Alientek.")],1),t._v(" "),o("h3",{attrs:{id:"other-cameras-sensors"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#other-cameras-sensors"}},[t._v("#")]),t._v(" Other Cameras/Sensors")]),t._v(" "),o("p",[t._v("It is also possible to use a board/quad that has an integrated camera. For this the "),o("a",{attrs:{href:"https://github.com/PX4/OpticalFlow",target:"_blank",rel:"noopener noreferrer"}},[t._v("Optical Flow repo"),o("OutboundLink")],1),t._v(" can be used (see also "),o("a",{attrs:{href:"https://github.com/PX4/snap_cam",target:"_blank",rel:"noopener noreferrer"}},[t._v("snap_cam"),o("OutboundLink")],1),t._v(").")]),t._v(" "),o("h2",{attrs:{id:"range-finders"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#range-finders"}},[t._v("#")]),t._v(" Range Finders")]),t._v(" "),o("p",[t._v("You can use any supported "),o("RouterLink",{attrs:{to:"/ko/sensor/rangefinders.html"}},[t._v("distance sensor")]),t._v(". However we recommend using LIDAR rather than sonar sensors, because of their robustness and accuracy.")],1),t._v(" "),o("h2",{attrs:{id:"estimators"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#estimators"}},[t._v("#")]),t._v(" Estimators")]),t._v(" "),o("p",[t._v("Estimators fuse data from the optical flow sensor and other sources. The settings for how fusing is done, and relative offsets to vehicle center must be specified for the estimator used.")]),t._v(" "),o("p",[t._v("The offsets are calculated relative to the vehicle orientation and center as shown below:")]),t._v(" "),o("p",[o("img",{attrs:{src:a(1250),alt:"Optical Flow offsets"}})]),t._v(" "),o("p",[o("span",{attrs:{id:"ekf2"}})]),t._v(" "),o("h3",{attrs:{id:"extended-kalman-filter-ekf2"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#extended-kalman-filter-ekf2"}},[t._v("#")]),t._v(" Extended Kalman Filter (EKF2)")]),t._v(" "),o("p",[t._v("For optical flow fusion using EKF2, set the use optical flow flag in the "),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_AID_MASK"}},[t._v("EKF2_AID_MASK")]),t._v(" parameter, as shown using QGroundControl below:")],1),t._v(" "),o("p",[o("img",{attrs:{src:a(1251),alt:"QGroundControl - Calibrate Sensors"}})]),t._v(" "),o("p",[t._v("If your optical flow sensor is offset from the vehicle centre, you can set this using the following parameters.")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("Parameter")]),t._v(" "),o("th",[t._v("Description")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[o("span",{attrs:{id:"EKF2_OF_POS_X"}}),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_OF_POS_X"}},[t._v("EKF2_OF_POS_X")])],1),t._v(" "),o("td",[t._v("X position of optical flow focal point in body frame (default is 0.0m).")])]),t._v(" "),o("tr",[o("td",[o("span",{attrs:{id:"EKF2_OF_POS_Y"}}),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_OF_POS_Y"}},[t._v("EKF2_OF_POS_Y")])],1),t._v(" "),o("td",[t._v("Y position of optical flow focal point in body frame (default is 0.0m).")])]),t._v(" "),o("tr",[o("td",[o("span",{attrs:{id:"EKF2_OF_POS_Z"}}),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_OF_POS_Z"}},[t._v("EKF2_OF_POS_Z")])],1),t._v(" "),o("td",[t._v("Z position of optical flow focal point in body frame (default is 0.0m).")])])])])])}),[],!1,null,null,null);e.default=s.exports}}]);