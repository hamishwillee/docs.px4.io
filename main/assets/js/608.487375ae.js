(window.webpackJsonp=window.webpackJsonp||[]).push([[608],{3349:function(e,t,o){"use strict";o.r(t);var i=o(19),r=Object(i.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"accelerometer-calibration"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#accelerometer-calibration"}},[e._v("#")]),e._v(" Accelerometer Calibration")]),e._v(" "),i("p",[e._v("You will need to calibrate your accelerometer on first use or if the flight controller orientation is changed. Otherwise you should not need to recalibrate (except perhaps in winter, if you have a flight controller that was not "),i("RouterLink",{attrs:{to:"/zh/advanced_config/sensor_thermal_calibration.html"}},[e._v("thermally calibrated")]),e._v(" in the factory).")],1),e._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),i("p",[e._v('Poor accelerometer calibration is generally caught by preflight checks and arming-denied messages (QGC warnings typically refer to "high accelerometer bias" and "consistency check failures").')])]),e._v(" "),i("p",[i("em",[e._v("QGroundControl")]),e._v(" will guide you to place and hold your vehicle in a number of orientations (you will be prompted when to move between positions).")]),e._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[e._v("提示")]),e._v(" "),i("p",[e._v("This is similar to "),i("RouterLink",{attrs:{to:"/zh/config/compass.html"}},[e._v("compass calibration")]),e._v(" except that you hold the vehicle still (rather than rotate it) in each orientation.")],1)]),e._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),i("p",[e._v("The calibration uses a least squares 'fit' algorithm that doesn't require you to have \"perfect\" 90 degree orientations.\nProvided each axis is pointed mostly up and down at some time in the calibration sequence, and the vehicle is held stationary, the precise orientation doesn't matter.")])]),e._v(" "),i("h2",{attrs:{id:"执行校准"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#执行校准"}},[e._v("#")]),e._v(" 执行校准")]),e._v(" "),i("p",[e._v("The calibration steps are:")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("Start "),i("em",[e._v("QGroundControl")]),e._v(" and connect the vehicle.")])]),e._v(" "),i("li",[i("p",[e._v("Select the "),i("strong",[e._v("Gear")]),e._v(" icon (Vehicle Setup) in the top toolbar and then "),i("strong",[e._v("Sensors")]),e._v(" in the sidebar.")])]),e._v(" "),i("li",[i("p",[e._v("Click the "),i("strong",[e._v("Accelerometer")]),e._v(" sensor button.")]),e._v(" "),i("p",[i("img",{attrs:{src:o(652),alt:"Accelerometer calibration"}})])])]),e._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),i("p",[e._v("You should already have set the "),i("RouterLink",{attrs:{to:"/zh/config/flight_controller_orientation.html"}},[e._v("Autopilot Orientation")]),e._v(". If not, you can also set it here.")],1)]),e._v(" "),i("ol",[i("li",[e._v("Click "),i("strong",[e._v("OK")]),e._v(" to start the calibration.")]),e._v(" "),i("li",[e._v("Position the vehicle as guided by the "),i("em",[e._v("images")]),e._v(" on the screen. Once prompted (the orientation-image turns yellow) hold the vehicle still. Once the calibration is complete for the current orientation the associated image on the screen will turn green.")])]),e._v(" "),i("p",[i("img",{attrs:{src:o(653),alt:"Accelerometer calibration"}})]),e._v(" "),i("ol",[i("li",[e._v("Repeat the calibration process for all vehicle orientations.")])]),e._v(" "),i("p",[e._v("Once you've calibrated the vehicle in all the positions "),i("em",[e._v("QGroundControl")]),e._v(" will display "),i("em",[e._v("Calibration complete")]),e._v(" (all orientation images will be displayed in green and the progress bar will fill completely). You can then proceed to the next sensor.")]),e._v(" "),i("h2",{attrs:{id:"更多信息"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#更多信息"}},[e._v("#")]),e._v(" 更多信息：")]),e._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/SetupView/sensors_px4.html#accelerometer",target:"_blank",rel:"noopener noreferrer"}},[e._v("QGroundControl User Guide > Sensors"),i("OutboundLink")],1)]),e._v(" "),i("li",[i("a",{attrs:{href:"https://youtu.be/91VGmdSlbo4?t=1m46s",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4 设置视频 - @1分46秒"),i("OutboundLink")],1),e._v("（Youtube）")])])])}),[],!1,null,null,null);t.default=r.exports},652:function(e,t,o){e.exports=o.p+"assets/img/accelerometer.12f4237d.jpg"},653:function(e,t,o){e.exports=o.p+"assets/img/accelerometer_positions_px4.94b81dab.jpg"}}]);