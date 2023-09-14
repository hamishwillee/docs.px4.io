(window.webpackJsonp=window.webpackJsonp||[]).push([[640],{1785:function(t,e,o){"use strict";o.r(e);var a=o(19),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"mounting-a-gps-compass"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mounting-a-gps-compass"}},[t._v("#")]),t._v(" Mounting a GPS/Compass")]),t._v(" "),a("p",[t._v("GPS/Compasses should be mounted on the frame as far away from other electronics as possible, with the direction marker pointing towards the front of the vehicle.\nIf mounted in this way you can immediately proceed to "),a("RouterLink",{attrs:{to:"/en/config/compass.html#performing-the-calibration"}},[t._v("compass calibration")]),t._v(".")],1),t._v(" "),a("p",[t._v("The diagram below shows the heading marker on the Pixhawk 4 and compass.")]),t._v(" "),a("p",[a("img",{attrs:{src:o(361),alt:"Connect compass/GPS to Pixhawk 4"}})]),t._v(" "),a("h2",{attrs:{id:"compass-orientation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compass-orientation"}},[t._v("#")]),t._v(" Compass Orientation")]),t._v(" "),a("p",[t._v("The compass can be mounted in any of the standard MAVLink orientations defined in "),a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_SENSOR_ORIENTATION",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAV_SENSOR_ORIENTATION"),a("OutboundLink")],1),t._v(".\nThe orientation follows the same frame convention as when "),a("RouterLink",{attrs:{to:"/en/config/flight_controller_orientation.html#calculating-orientation"}},[t._v("orienting the flight controller")]),t._v(".")],1),t._v(" "),a("p",[t._v("If you're using the normal "),a("RouterLink",{attrs:{to:"/en/config/compass.html"}},[t._v("Compass Calibration")]),t._v(" process (with parameter "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#SENS_MAG_AUTOROT"}},[t._v("SENS_MAG_AUTOROT")]),t._v(" enabled), the orientation should be detected automatically.\nOtherwise you can directly select the appropriate value in "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#CAL_MAG1_ROT"}},[t._v("CAL_MAGn_ROT")]),t._v(" for up to three compasses.")],1),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("You must mount the compass in a supported orientation!")]),t._v(" "),a("p",[t._v("If you mount the compass at an orientation that isn't supported, for example "),a("code",[t._v("Yaw 30")]),t._v(", PX4 will detect the closest supported value.\nThis will result in errors/warnings, even if the calibration appeared to succeed.")])])])}),[],!1,null,null,null);e.default=n.exports},361:function(t,e,o){t.exports=o.p+"assets/img/pixhawk4_compass_gps.3e72e652.jpg"}}]);