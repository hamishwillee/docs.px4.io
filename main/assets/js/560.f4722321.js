(window.webpackJsonp=window.webpackJsonp||[]).push([[560],{1497:function(e,t,a){e.exports=a.p+"assets/img/flow_lidar_attached.63b8acb4.jpg"},1498:function(e,t,a){e.exports=a.p+"assets/img/px4flow_offset.1fb8b412.png"},2576:function(e,t,a){"use strict";a.r(t);var s=a(19),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"optical-flow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#optical-flow"}},[e._v("#")]),e._v(" Optical Flow")]),e._v(" "),s("p",[s("em",[e._v("Optical Flow")]),e._v(" uses a downward facing camera and a downward facing distance sensor for velocity estimation.")]),e._v(" "),s("p"),s("div",{staticClass:"embed-responsive embed-responsive-16by9"},[s("iframe",{staticClass:"embed-responsive-item youtube-player",attrs:{type:"text/html",width:"640",height:"390",src:"https://www.youtube.com/embed/aPQKgUof3Pc",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]),s("em",[e._v("Video: PX4 holding position using the ARK Flow sensor for velocity estimation (in "),s("RouterLink",{attrs:{to:"/en/flight_modes_mc/position.html"}},[e._v("Position Mode")]),e._v(").")],1),s("p"),e._v(" "),s("h2",{attrs:{id:"setup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setup"}},[e._v("#")]),e._v(" Setup")]),e._v(" "),s("p",[e._v("An Optical Flow setup requires a downward facing camera and a "),s("RouterLink",{attrs:{to:"/en/sensor/rangefinders.html"}},[e._v("distance sensor")]),e._v(" (preferably a LiDAR).\nThese can be connected via MAVLink, I2C or any other bus that supports the peripheral.")],1),e._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),s("p",[e._v("If connected to PX4 via MAVLink the Optical Flow device must publish to the "),s("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#OPTICAL_FLOW_RAD",target:"_blank",rel:"noopener noreferrer"}},[e._v("OPTICAL_FLOW_RAD"),s("OutboundLink")],1),e._v(" topic, and the distance sensor must publish to the "),s("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#DISTANCE_SENSOR",target:"_blank",rel:"noopener noreferrer"}},[e._v("DISTANCE_SENSOR"),s("OutboundLink")],1),e._v(" topic.")])]),e._v(" "),s("p",[e._v("The output of the flow when moving in different directions must be as follows:")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("Vehicle movement")]),e._v(" "),s("th",[e._v("Integrated flow")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("Forwards")]),e._v(" "),s("td",[e._v("+ Y")])]),e._v(" "),s("tr",[s("td",[e._v("Backwards")]),e._v(" "),s("td",[e._v("- Y")])]),e._v(" "),s("tr",[s("td",[e._v("Right")]),e._v(" "),s("td",[e._v("- X")])]),e._v(" "),s("tr",[s("td",[e._v("Left")]),e._v(" "),s("td",[e._v("+ X")])])])]),e._v(" "),s("p",[e._v("For pure rotations the "),s("code",[e._v("integrated_xgyro")]),e._v(" and "),s("code",[e._v("integrated_x")]),e._v(" (respectively "),s("code",[e._v("integrated_ygyro")]),e._v(" and "),s("code",[e._v("integrated_y")]),e._v(") have to be the same.")]),e._v(" "),s("p",[e._v("An popular setup is the "),s("RouterLink",{attrs:{to:"/en/sensor/px4flow.html"}},[e._v("PX4Flow")]),e._v(" and "),s("RouterLink",{attrs:{to:"/en/sensor/lidar_lite.html"}},[e._v("Lidar-Lite")]),e._v(", as shown below.")],1),e._v(" "),s("p",[s("img",{attrs:{src:a(1497),alt:"Optical flow lidar attached"}})]),e._v(" "),s("p",[e._v("Sensor data from the optical flow device is fused with other velocity data sources.\nThe approach used for fusing sensor data and any offsets from the center of the vehicle must be configured in the "),s("a",{attrs:{href:"#estimators"}},[e._v("estimator")]),e._v(".")]),e._v(" "),s("h2",{attrs:{id:"flow-sensors-cameras"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flow-sensors-cameras"}},[e._v("#")]),e._v(" Flow Sensors/Cameras")]),e._v(" "),s("h3",{attrs:{id:"ark-flow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ark-flow"}},[e._v("#")]),e._v(" ARK Flow")]),e._v(" "),s("p",[s("RouterLink",{attrs:{to:"/en/dronecan/ark_flow.html"}},[e._v("ARK Flow")]),e._v(" is a "),s("RouterLink",{attrs:{to:"/en/dronecan/"}},[e._v("DroneCAN")]),e._v(" optical flow sensor, "),s("RouterLink",{attrs:{to:"/en/sensor/rangefinders.html"}},[e._v("distance sensor")]),e._v(", and IMU.\nIt has a PAW3902 optical flow sensor, Broadcom AFBR-S50LV85D 30 meter distance sensor, and BMI088 IMU.")],1),e._v(" "),s("h3",{attrs:{id:"pmw3901-based-sensors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pmw3901-based-sensors"}},[e._v("#")]),e._v(" PMW3901-Based Sensors")]),e._v(" "),s("p",[s("RouterLink",{attrs:{to:"/en/sensor/pmw3901.html"}},[e._v("PMW3901")]),e._v(" is an optical flow tracking sensor similar to what you would find in a computer mouse, but adapted to work between 80 mm and infinity.\nIt is used in a number of products, including some from: Bitcraze, Tindie, Hex, Thone and Alientek.")],1),e._v(" "),s("h3",{attrs:{id:"other-cameras-sensors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#other-cameras-sensors"}},[e._v("#")]),e._v(" Other Cameras/Sensors")]),e._v(" "),s("p",[e._v("It is also possible to use a board/quad that has an integrated camera.\nFor this the "),s("a",{attrs:{href:"https://github.com/PX4/OpticalFlow",target:"_blank",rel:"noopener noreferrer"}},[e._v("Optical Flow repo"),s("OutboundLink")],1),e._v(" can be used (see also "),s("a",{attrs:{href:"https://github.com/PX4/snap_cam",target:"_blank",rel:"noopener noreferrer"}},[e._v("snap_cam"),s("OutboundLink")],1),e._v(").")]),e._v(" "),s("h2",{attrs:{id:"range-finders"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#range-finders"}},[e._v("#")]),e._v(" Range Finders")]),e._v(" "),s("p",[e._v("You can use any supported "),s("RouterLink",{attrs:{to:"/en/sensor/rangefinders.html"}},[e._v("distance sensor")]),e._v(".\nHowever we recommend using LIDAR rather than sonar sensors, because of their robustness and accuracy.")],1),e._v(" "),s("h2",{attrs:{id:"estimators"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#estimators"}},[e._v("#")]),e._v(" Estimators")]),e._v(" "),s("p",[e._v("Estimators fuse data from the optical flow sensor and other sources.\nThe settings for how fusing is done, and relative offsets to vehicle center must be specified for the estimator used.")]),e._v(" "),s("p",[e._v("The offsets are calculated relative to the vehicle orientation and center as shown below:")]),e._v(" "),s("p",[s("img",{attrs:{src:a(1498),alt:"Optical Flow offsets"}})]),e._v(" "),s("p",[e._v("Optical Flow based navigation is enabled by both the availableestimators: EKF2 and LPE (deprecated).")]),e._v(" "),s("p",[s("a",{attrs:{id:"ekf2"}})]),e._v(" "),s("h3",{attrs:{id:"extended-kalman-filter-ekf2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#extended-kalman-filter-ekf2"}},[e._v("#")]),e._v(" Extended Kalman Filter (EKF2)")]),e._v(" "),s("p",[e._v("For optical flow fusion using EKF2, set "),s("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#EKF2_OF_CTRL"}},[e._v("EKF2_OF_CTRL")]),e._v(".")],1),e._v(" "),s("p",[e._v("If your optical flow sensor is offset from the vehicle centre, you can set this using the following parameters.")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("Parameter")]),e._v(" "),s("th",[e._v("Description")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[s("a",{attrs:{id:"EKF2_OF_POS_X"}}),s("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#EKF2_OF_POS_X"}},[e._v("EKF2_OF_POS_X")])],1),e._v(" "),s("td",[e._v("X position of optical flow focal point in body frame (default is 0.0m).")])]),e._v(" "),s("tr",[s("td",[s("a",{attrs:{id:"EKF2_OF_POS_Y"}}),s("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#EKF2_OF_POS_Y"}},[e._v("EKF2_OF_POS_Y")])],1),e._v(" "),s("td",[e._v("Y position of optical flow focal point in body frame (default is 0.0m).")])]),e._v(" "),s("tr",[s("td",[s("a",{attrs:{id:"EKF2_OF_POS_Z"}}),s("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#EKF2_OF_POS_Z"}},[e._v("EKF2_OF_POS_Z")])],1),e._v(" "),s("td",[e._v("Z position of optical flow focal point in body frame (default is 0.0m).")])])])])])}),[],!1,null,null,null);t.default=r.exports}}]);