(window.webpackJsonp=window.webpackJsonp||[]).push([[340],{1268:function(t,e,a){t.exports=a.p+"assets/img/flow_lidar_attached.63b8acb4.jpg"},1269:function(t,e,a){t.exports=a.p+"assets/img/px4flow_offset.80ab9f41.png"},1270:function(t,e,a){t.exports=a.p+"assets/img/qgc_ekf2_enable_flow.ac4d0802.png"},2015:function(t,e,a){"use strict";a.r(e);var s=a(19),o=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"optical-flow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#optical-flow"}},[t._v("#")]),t._v(" Optical Flow")]),t._v(" "),s("p",[s("em",[t._v("Optical Flow")]),t._v(" uses a downward facing camera and a downward facing distance sensor for velocity estimation.")]),t._v(" "),s("p"),s("div",{staticClass:"embed-responsive embed-responsive-16by9"},[s("iframe",{staticClass:"embed-responsive-item youtube-player",attrs:{type:"text/html",width:"640",height:"390",src:"https://www.youtube.com/embed/aPQKgUof3Pc",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]),s("em",[t._v("Video: PX4 holding position using the ARK Flow sensor for velocity estimation (in "),s("RouterLink",{attrs:{to:"/en/flight_modes/position_mc.html"}},[t._v("Position Mode")]),t._v(").")],1),t._v(" "),s("p"),t._v(" "),s("h2",{attrs:{id:"setup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setup"}},[t._v("#")]),t._v(" Setup")]),t._v(" "),s("p",[t._v("An Optical Flow setup requires a downward facing camera and a "),s("RouterLink",{attrs:{to:"/en/sensor/rangefinders.html"}},[t._v("distance sensor")]),t._v(" (preferably a LiDAR).\nThese can be connected via MAVLink, I2C or any other bus that supports the peripheral.")],1),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("If connected to PX4 via MAVLink the Optical Flow device must publish to the "),s("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#OPTICAL_FLOW_RAD",target:"_blank",rel:"noopener noreferrer"}},[t._v("OPTICAL_FLOW_RAD"),s("OutboundLink")],1),t._v(" topic, and the distance sensor must publish to the "),s("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#DISTANCE_SENSOR",target:"_blank",rel:"noopener noreferrer"}},[t._v("DISANCE_SENSOR"),s("OutboundLink")],1),t._v(" topic.")])]),t._v(" "),s("p",[t._v("The output of the flow when moving in different directions must be as follows:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Vehicle movement")]),t._v(" "),s("th",[t._v("Integrated flow")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Forwards")]),t._v(" "),s("td",[t._v("+ Y")])]),t._v(" "),s("tr",[s("td",[t._v("Backwards")]),t._v(" "),s("td",[t._v("- Y")])]),t._v(" "),s("tr",[s("td",[t._v("Right")]),t._v(" "),s("td",[t._v("- X")])]),t._v(" "),s("tr",[s("td",[t._v("Left")]),t._v(" "),s("td",[t._v("+ X")])])])]),t._v(" "),s("p",[t._v("For pure rotations the "),s("code",[t._v("integrated_xgyro")]),t._v(" and "),s("code",[t._v("integrated_x")]),t._v(" (respectively "),s("code",[t._v("integrated_ygyro")]),t._v(" and "),s("code",[t._v("integrated_y")]),t._v(") have to be the same.")]),t._v(" "),s("p",[t._v("An popular setup is the "),s("RouterLink",{attrs:{to:"/en/sensor/px4flow.html"}},[t._v("PX4Flow")]),t._v(" and "),s("RouterLink",{attrs:{to:"/en/sensor/lidar_lite.html"}},[t._v("Lidar-Lite")]),t._v(", as shown below.")],1),t._v(" "),s("p",[s("img",{attrs:{src:a(1268),alt:"Optical flow lidar attached"}})]),t._v(" "),s("p",[t._v("Sensor data from the optical flow device is fused with other velocity data sources.\nThe approach used for fusing sensor data and any offsets from the center of the vehicle must be configured in the "),s("a",{attrs:{href:"#estimators"}},[t._v("estimator")]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"flow-sensors-cameras"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flow-sensors-cameras"}},[t._v("#")]),t._v(" Flow Sensors/Cameras")]),t._v(" "),s("h3",{attrs:{id:"px4flow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#px4flow"}},[t._v("#")]),t._v(" PX4Flow")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/en/sensor/px4flow.html"}},[t._v("PX4Flow")]),t._v(" is an optical flow camera that works indoors and in low outdoor light conditions without the need for an illumination LED.\nIt is one of the easiest and most established ways to calculate the optical flow.")],1),t._v(" "),s("h3",{attrs:{id:"ark-flow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ark-flow"}},[t._v("#")]),t._v(" ARK Flow")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/en/uavcan/ark_flow.html"}},[t._v("ARK Flow")]),t._v(" is a "),s("RouterLink",{attrs:{to:"/en/uavcan/"}},[t._v("UAVCAN")]),t._v(" optical flow sensor, "),s("RouterLink",{attrs:{to:"/en/sensor/rangefinders.html"}},[t._v("distance sensor")]),t._v(", and IMU.\nIt has a PAW3902 optical flow sensor, Broadcom AFBR-S50LV85D 30 meter distance sensor, and BMI088 IMU.")],1),t._v(" "),s("h3",{attrs:{id:"pmw3901-based-sensors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pmw3901-based-sensors"}},[t._v("#")]),t._v(" PMW3901-Based Sensors")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/en/sensor/pmw3901.html"}},[t._v("PMW3901")]),t._v(" is an optical flow tracking sensor similar to what you would find in a computer mouse, but adapted to work between 80 mm and infinity.\nIt is used in a number of products, including some from: Bitcraze, Tindie, Hex, Thone and Alientek.")],1),t._v(" "),s("h3",{attrs:{id:"other-cameras-sensors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#other-cameras-sensors"}},[t._v("#")]),t._v(" Other Cameras/Sensors")]),t._v(" "),s("p",[t._v("It is also possible to use a board/quad that has an integrated camera.\nFor this the "),s("a",{attrs:{href:"https://github.com/PX4/OpticalFlow",target:"_blank",rel:"noopener noreferrer"}},[t._v("Optical Flow repo"),s("OutboundLink")],1),t._v(" can be used (see also "),s("a",{attrs:{href:"https://github.com/PX4/snap_cam",target:"_blank",rel:"noopener noreferrer"}},[t._v("snap_cam"),s("OutboundLink")],1),t._v(").")]),t._v(" "),s("h2",{attrs:{id:"range-finders"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#range-finders"}},[t._v("#")]),t._v(" Range Finders")]),t._v(" "),s("p",[t._v("You can use any supported "),s("RouterLink",{attrs:{to:"/en/sensor/rangefinders.html"}},[t._v("distance sensor")]),t._v(".\nHowever we recommend using LIDAR rather than sonar sensors, because of their robustness and accuracy.")],1),t._v(" "),s("h2",{attrs:{id:"estimators"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#estimators"}},[t._v("#")]),t._v(" Estimators")]),t._v(" "),s("p",[t._v("Estimators fuse data from the optical flow sensor and other sources.\nThe settings for how fusing is done, and relative offsets to vehicle center must be specified for the estimator used.")]),t._v(" "),s("p",[t._v("The offsets are calculated relative to the vehicle orientation and center as shown below:")]),t._v(" "),s("p",[s("img",{attrs:{src:a(1269),alt:"Optical Flow offsets"}})]),t._v(" "),s("p",[t._v("Optical Flow based navigation is enabled by both the availableestimators: EKF2 and LPE (deprecated).")]),t._v(" "),s("p",[s("a",{attrs:{id:"ekf2"}})]),t._v(" "),s("h3",{attrs:{id:"extended-kalman-filter-ekf2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#extended-kalman-filter-ekf2"}},[t._v("#")]),t._v(" Extended Kalman Filter (EKF2)")]),t._v(" "),s("p",[t._v("For optical flow fusion using EKF2, set the use optical flow flag in the "),s("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#EKF2_AID_MASK"}},[t._v("EKF2_AID_MASK")]),t._v(" parameter, as shown using QGroundControl below:")],1),t._v(" "),s("p",[s("img",{attrs:{src:a(1270),alt:"QGroundControl - Calibrate Sensors"}})]),t._v(" "),s("p",[t._v("If your optical flow sensor is offset from the vehicle centre, you can set this using the following parameters.")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Parameter")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("span",{attrs:{id:"EKF2_OF_POS_X"}}),s("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#EKF2_OF_POS_X"}},[t._v("EKF2_OF_POS_X")])],1),t._v(" "),s("td",[t._v("X position of optical flow focal point in body frame (default is 0.0m).")])]),t._v(" "),s("tr",[s("td",[s("span",{attrs:{id:"EKF2_OF_POS_Y"}}),s("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#EKF2_OF_POS_Y"}},[t._v("EKF2_OF_POS_Y")])],1),t._v(" "),s("td",[t._v("Y position of optical flow focal point in body frame (default is 0.0m).")])]),t._v(" "),s("tr",[s("td",[s("span",{attrs:{id:"EKF2_OF_POS_Z"}}),s("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#EKF2_OF_POS_Z"}},[t._v("EKF2_OF_POS_Z")])],1),t._v(" "),s("td",[t._v("Z position of optical flow focal point in body frame (default is 0.0m).")])])])])])}),[],!1,null,null,null);e.default=o.exports}}]);