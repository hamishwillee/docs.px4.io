(window.webpackJsonp=window.webpackJsonp||[]).push([[827],{3210:function(t,e,a){"use strict";a.r(e);var o=a(19),n=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"安装gps-指南针"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#安装gps-指南针"}},[t._v("#")]),t._v(" 安装GPS/指南针")]),t._v(" "),o("p",[t._v("应尽可能将GPS/指南针安装在框架上远离其他电子设备的地方。 它的方向标记指向载具前面。 如果以这种方式安装，你可以立即着手 "),o("RouterLink",{attrs:{to:"/zh/config/compass.html#performing-the-calibration"}},[t._v("指南针校准")]),t._v("。")],1),t._v(" "),o("p",[t._v("The diagram below shows the heading marker on the Pixhawk 4 and compass.")]),t._v(" "),o("p",[o("img",{attrs:{src:a(358),alt:"Connect compass/GPS to Pixhawk 4"}})]),t._v(" "),o("h2",{attrs:{id:"compass-orientation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#compass-orientation"}},[t._v("#")]),t._v(" Compass Orientation")]),t._v(" "),o("p",[t._v("指南针可以安装在任何 "),o("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_SENSOR_ORIENTATION",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAV_SENSOR_OR_ORIENTATION"),o("OutboundLink")],1),t._v(" 定义的标准的 MAVLink 方向中。 The orientation follows the same frame convention as when "),o("RouterLink",{attrs:{to:"/zh/config/flight_controller_orientation.html#calculating-orientation"}},[t._v("orienting the flight controller")]),t._v(".")],1),t._v(" "),o("p",[t._v("If you're using the normal "),o("RouterLink",{attrs:{to:"/zh/config/compass.html"}},[t._v("Compass Calibration")]),t._v(" process (with parameter "),o("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SENS_MAG_AUTOROT"}},[t._v("SENS_MAG_AUTOROT")]),t._v(" enabled), the orientation should be detected automatically. 否则您可以在 "),o("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#CAL_MAG1_ROT"}},[t._v("CAL_MAGn_ROT")]),t._v(" 中为最多三个指南针直接选择适当的值。")],1),t._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),o("p",[t._v("You must mount the compass in a supported orientation!")]),t._v(" "),o("p",[t._v("If you mount the compass at an orientation that isn't supported, for example "),o("code",[t._v("Yaw 30")]),t._v(", PX4 will detect the closest supported value. This will result in errors/warnings, even if the calibration appeared to succeed.")])])])}),[],!1,null,null,null);e.default=n.exports},358:function(t,e,a){t.exports=a.p+"assets/img/pixhawk4_compass_gps.3e72e652.jpg"}}]);