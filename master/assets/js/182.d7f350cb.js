(window.webpackJsonp=window.webpackJsonp||[]).push([[182],{1546:function(t,e,o){"use strict";o.r(e);var n=o(19),i=Object(n.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"flight-controller-sensor-orientation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#flight-controller-sensor-orientation"}},[t._v("#")]),t._v(" Flight Controller/Sensor Orientation")]),t._v(" "),n("p",[t._v("By default the flight controller (and external compass(es), if present) should be placed on the frame top-side up, oriented so that the arrow points towards the front of the vehicle.\nIf the board or an external compass are mounted in any other orientation then you will need configure this in the firmware.")]),t._v(" "),n("h2",{attrs:{id:"calculating-orientation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#calculating-orientation"}},[t._v("#")]),t._v(" Calculating Orientation")]),t._v(" "),n("p",[t._v("ROLL, PITCH and/or YAW offsets of the flight controller are calculated relative to the vehicle around the forward (x), right (y), down (z) axes.")]),t._v(" "),n("p",[n("img",{attrs:{src:o(370),alt:"Frame Heading"}})]),t._v(" "),n("p",[t._v("The axes to rotate around stay the same from one rotation step to the next one.\nSo the frame to perform the rotation in stays fixed.\nThis is also known as "),n("em",[t._v("extrinsic rotation")]),t._v(".")]),t._v(" "),n("img",{staticStyle:{width:"600px"},attrs:{src:o(345)}}),t._v(" "),n("p",[t._v("For example, the vehicles shown below have rotations around the z-axis (i.e. yaw only) corresponding to: "),n("code",[t._v("ROTATION_NONE")]),t._v(", "),n("code",[t._v("ROTATION_YAW_90")]),t._v(","),n("code",[t._v("ROTATION_YAW_180")]),t._v(","),n("code",[t._v("ROTATION_YAW_270")]),t._v(".")]),t._v(" "),n("p",[n("img",{attrs:{src:o(631),alt:"Yaw Rotation"}})]),t._v(" "),n("div",{staticClass:"custom-block note"},[n("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),n("p",[t._v("For a VTOL Tailsitter airframe set the vehicle orientation according to its multirotor configuration (i.e. relative to the vehicle during, takeoff, hovering, landing) for all sensor calibrations.")]),t._v(" "),n("p",[t._v("The axis are normally relative to the orientation of the vehicle during steady forward flight.\nFor more information see "),n("RouterLink",{attrs:{to:"/en/getting_started/px4_basic_concepts.html#heading-and-directions"}},[t._v("Basic Concepts")]),t._v(".")],1)]),t._v(" "),n("h2",{attrs:{id:"setting-the-orientation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#setting-the-orientation"}},[t._v("#")]),t._v(" Setting the Orientation")]),t._v(" "),n("p",[t._v("To set the orientations:")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("Start "),n("em",[t._v("QGroundControl")]),t._v(" and connect the vehicle.")])]),t._v(" "),n("li",[n("p",[t._v("Select the "),n("strong",[t._v("Gear")]),t._v(" icon (Vehicle Setup) in the top toolbar and then "),n("strong",[t._v("Sensors")]),t._v(" in the sidebar.")])]),t._v(" "),n("li",[n("p",[t._v("Select the "),n("strong",[t._v("Set Orientations")]),t._v(" button.\n"),n("img",{staticStyle:{width:"600px"},attrs:{src:o(632)}})])]),t._v(" "),n("li",[n("p",[t._v("Select the "),n("strong",[t._v("AutoPilot Orientation")]),t._v(" (as "),n("a",{attrs:{href:"#calculating-orientation"}},[t._v("calculated above")]),t._v(").")]),t._v(" "),n("img",{staticStyle:{width:"200px"},attrs:{src:o(633)}})]),t._v(" "),n("li",[n("p",[t._v("Select the "),n("strong",[t._v("External Compass Orientation")]),t._v(" in the same way (this option will only be displayed if your vehicle has an external compass).")])]),t._v(" "),n("li",[n("p",[t._v("Press "),n("strong",[t._v("OK")]),t._v(".")])])]),t._v(" "),n("h2",{attrs:{id:"fine-tuning"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#fine-tuning"}},[t._v("#")]),t._v(" Fine Tuning")]),t._v(" "),n("p",[t._v("You can use "),n("RouterLink",{attrs:{to:"/en/config/level_horizon_calibration.html"}},[t._v("Level Horizon Calibration")]),t._v(" to compensate for small miss-alignments in controller orientation and to level the horizon in flight view.")],1),t._v(" "),n("h2",{attrs:{id:"further-information"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#further-information"}},[t._v("#")]),t._v(" Further Information")]),t._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/en/advanced_config/advanced_flight_controller_orientation_leveling.html"}},[t._v("Advanced Orientation Tuning")]),t._v(" (advanced users only).")],1),t._v(" "),n("li",[n("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/SetupView/sensors_px4.html#flight_controller_orientation",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGroundControl User Guide > Sensors"),n("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=i.exports},345:function(t,e,o){t.exports=o.p+"assets/img/fc_orientation_1.648b5eb0.png"},370:function(t,e,o){t.exports=o.p+"assets/img/frame_heading.f02fbdcf.png"},631:function(t,e,o){t.exports=o.p+"assets/img/yaw_rotation.1e9d2568.png"},632:function(t,e,o){t.exports=o.p+"assets/img/sensor_orientation_set_orientations.98aa6a72.jpg"},633:function(t,e,o){t.exports=o.p+"assets/img/sensor_orientation_selector_values.6538d207.jpg"}}]);