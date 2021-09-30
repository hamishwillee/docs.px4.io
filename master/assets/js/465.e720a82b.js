(window.webpackJsonp=window.webpackJsonp||[]).push([[465],{2742:function(t,e,o){"use strict";o.r(e);var a=o(19),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"加速度计-accelerometer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#加速度计-accelerometer"}},[t._v("#")]),t._v(" 加速度计 Accelerometer")]),t._v(" "),a("p",[t._v("You will need to calibrate your accelerometer on first use or if the flight controller orientation is changed. Otherwise you should not need to recalibrate (except perhaps in winter, if you have a flight controller that was not "),a("RouterLink",{attrs:{to:"/zh/advanced_config/sensor_thermal_calibration.html"}},[t._v("thermally calibrated")]),t._v(" in the factory).")],1),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v('Poor accelerometer calibration is generally caught by preflight checks and arming-denied messages (QGC warnings typically refer to "high accelerometer bias" and "consistency check failures").')])]),t._v(" "),a("p",[a("em",[t._v("QGroundControl")]),t._v(" will guide you to place and hold your vehicle in a number of orientations (you will be prompted when to move between positions).")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("This is similar to "),a("RouterLink",{attrs:{to:"/zh/config/compass.html"}},[t._v("compass calibration")]),t._v(" except that you hold the vehicle still (rather than rotate it) in each orientation.")],1)]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("The calibration uses a least squares 'fit' algorithm that doesn't reaquire you to have \"perfect\" 90 degree orientations. Provided each axis is pointed mostly up and down at some time in the calibration sequence, and the vehicle is held stationary, the precise orientation doesn't matter.")])]),t._v(" "),a("h2",{attrs:{id:"执行校准"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行校准"}},[t._v("#")]),t._v(" 执行校准")]),t._v(" "),a("p",[t._v("The calibration steps are:")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("打开 "),a("em",[t._v("QGroundControl")]),t._v(" 并连接上飞机。")])]),t._v(" "),a("li",[a("p",[t._v("在工具栏选择 "),a("strong",[t._v("齿轮")]),t._v(" 图标（机体设置），然后在侧边栏选择 "),a("strong",[t._v("传感器")]),t._v("。")])]),t._v(" "),a("li",[a("p",[t._v("点击 "),a("strong",[t._v("加速度计")]),t._v(" 传感器按钮。")]),t._v(" "),a("p",[a("img",{attrs:{src:o(614),alt:"加速度计校准"}})])])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("You should already have set the "),a("RouterLink",{attrs:{to:"/zh/config/flight_controller_orientation.html"}},[t._v("Autopilot Orientation")]),t._v(". If not, you can also set it here.")],1)]),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[a("p",[t._v("点击"),a("strong",[t._v("确定")]),t._v("开始校准。")])]),t._v(" "),a("li",[a("p",[t._v("按照屏幕上的"),a("em",[t._v("图示")]),t._v("引导，将机体翻转到指定位置。 看到 (图示位置变成黄色) 的提示，握紧机体并保持静止。 该位置标定完成后，屏幕上的相应图示将变成绿色。")]),t._v(" "),a("p",[a("img",{attrs:{src:o(615),alt:"加速度计校准"}})])]),t._v(" "),a("li",[a("p",[t._v("在机体的所有方向上重复校准步骤。")])])]),t._v(" "),a("p",[t._v("Once you've calibrated the vehicle in all the positions "),a("em",[t._v("QGroundControl")]),t._v(" will display "),a("em",[t._v("Calibration complete")]),t._v(" (all orientation images will be displayed in green and the progress bar will fill completely). You can then proceed to the next sensor.")]),t._v(" "),a("h2",{attrs:{id:"更多信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更多信息"}},[t._v("#")]),t._v(" 更多信息：")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/SetupView/sensors_px4.html#accelerometer",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGroundControl 用户手册 > 传感器"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://youtu.be/91VGmdSlbo4?t=1m46s",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4 设置视频 - @1分46秒"),a("OutboundLink")],1),t._v("（Youtube）")])])])}),[],!1,null,null,null);e.default=r.exports},614:function(t,e,o){t.exports=o.p+"assets/img/accelerometer.22ce14a1.jpg"},615:function(t,e,o){t.exports=o.p+"assets/img/accelerometer_positions_px4.1219f02a.jpg"}}]);