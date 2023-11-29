(window.webpackJsonp=window.webpackJsonp||[]).push([[650],{1770:function(t,e,i){"use strict";i.r(e);var n=i(19),a=Object(n.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"advanced-flight-controller-orientation-tuning"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#advanced-flight-controller-orientation-tuning"}},[t._v("#")]),t._v(" Advanced Flight Controller Orientation Tuning")]),t._v(" "),n("p",[t._v("The orientation and horizon level may be fine-tuned manually with parameters to correct for sensor board small misalignment or minor calibration errors.")]),t._v(" "),n("div",{staticClass:"custom-block note"},[n("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),n("p",[t._v("These instructions are not recommended for regular users.\nFor basic settings stick to the instructions linked below:")]),t._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/en/config/flight_controller_orientation.html"}},[t._v("Flight Controller Orientation")])],1),t._v(" "),n("li",[n("RouterLink",{attrs:{to:"/en/config/level_horizon_calibration.html"}},[t._v("Level Horizon Calibration")])],1)])]),t._v(" "),n("p",[t._v("If there is a persistent drift bias (often seen in multirotors but not limited to them), it is a good strategy to trim it with the help of this fine-tuning offset angle parameters instead of using the trimmers of your RC Transmitter.\nThis way when in fully autonomous flight the aircraft will maintain the trimming.")]),t._v(" "),n("h2",{attrs:{id:"setting-orientation-parameters"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#setting-orientation-parameters"}},[t._v("#")]),t._v(" Setting Orientation Parameters")]),t._v(" "),n("p",[t._v("To change the orientation parameters:")]),t._v(" "),n("ol",[n("li",[t._v("Open QGroundControl menu: "),n("strong",[t._v("Settings > Parameters > Sensor Calibration")]),t._v(".")]),t._v(" "),n("li",[t._v("Change the parameters as shown below:\n"),n("img",{attrs:{src:i(464),alt:"FC Orientation QGC v2"}})])]),t._v(" "),n("h2",{attrs:{id:"parameter-information"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#parameter-information"}},[t._v("#")]),t._v(" Parameter Information")]),t._v(" "),n("p",[t._v("The "),n("strong",[t._v("SENS_BOARD_ROT")]),t._v(" parameter defines the rotation relative to the platform, while the X,Y and Z fine tuning offsets are fixed relative to the board itself.\nWhat happens is that the fine tuning offsets are added to the `SENS_BOARD_ROT`` angle in order to get the total offset angles for the Yaw, Pitch and Roll orientation of the flight controller.")]),t._v(" "),n("p",[n("strong",[t._v("SENS_BOARD_ROT")])]),t._v(" "),n("p",[t._v("This parameter defines the rotation of the FMU board relative to the platform.\nPossible values are:")]),t._v(" "),n("ul",[n("li",[t._v("0 = No rotation")]),t._v(" "),n("li",[t._v("1 = Yaw 45°")]),t._v(" "),n("li",[t._v("2 = Yaw 90°")]),t._v(" "),n("li",[t._v("3 = Yaw 135°")]),t._v(" "),n("li",[t._v("4 = Yaw 180°")]),t._v(" "),n("li",[t._v("5 = Yaw 225°")]),t._v(" "),n("li",[t._v("6 = Yaw 270°")]),t._v(" "),n("li",[t._v("7 = Yaw 315°")]),t._v(" "),n("li",[t._v("8 = Roll 180°")]),t._v(" "),n("li",[t._v("9 = Roll 180°, Yaw 45°")]),t._v(" "),n("li",[t._v("10 = Roll 180°, Yaw 90°")]),t._v(" "),n("li",[t._v("11 = Roll 180°, Yaw 135°")]),t._v(" "),n("li",[t._v("12 = Pitch 180°")]),t._v(" "),n("li",[t._v("13 = Roll 180°, Yaw 225°")]),t._v(" "),n("li",[t._v("14 = Roll 180°, Yaw 270°")]),t._v(" "),n("li",[t._v("15 = Roll 180°, Yaw 315°")]),t._v(" "),n("li",[t._v("16 = Roll 90°")]),t._v(" "),n("li",[t._v("17 = Roll 90°, Yaw 45°")]),t._v(" "),n("li",[t._v("18 = Roll 90°, Yaw 90°")]),t._v(" "),n("li",[t._v("19 = Roll 90°, Yaw 135°")]),t._v(" "),n("li",[t._v("20 = Roll 270°")]),t._v(" "),n("li",[t._v("21 = Roll 270°, Yaw 45°")]),t._v(" "),n("li",[t._v("22 = Roll 270°, Yaw 90°")]),t._v(" "),n("li",[t._v("23 = Roll 270°, Yaw 135°")]),t._v(" "),n("li",[t._v("24 = Pitch 90°")]),t._v(" "),n("li",[t._v("25 = Pitch 270°")])]),t._v(" "),n("p",[n("strong",[t._v("SENS_BOARD_X_OFF")])]),t._v(" "),n("p",[t._v("Rotation, in degrees, around PX4FMU's X axis or Roll axis.\nPositive angles increase in CCW direction, negative angles increase in CW direction.")]),t._v(" "),n("p",[n("strong",[t._v("SENS_BOARD_Y_OFF")])]),t._v(" "),n("p",[t._v("Rotation, in degrees, around PX4FMU's Y axis or Pitch axis.\nPositive angles increase in CCW direction, negative angles increase in CW direction.")]),t._v(" "),n("p",[n("strong",[t._v("SENS_BOARD_Z_OFF")])]),t._v(" "),n("p",[t._v("Rotation, in degrees, around PX4FMU's Z axis Yaw axis.\nPositive angles increase in CCW direction, negative angles increase in CW direction.")])])}),[],!1,null,null,null);e.default=a.exports},464:function(t,e,i){t.exports=i.p+"assets/img/fc_orientation_qgc_v2.370e492b.png"}}]);