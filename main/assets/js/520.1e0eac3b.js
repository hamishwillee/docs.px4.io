(window.webpackJsonp=window.webpackJsonp||[]).push([[520],{1816:function(t,e,a){"use strict";a.r(e);var o=a(19),i=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"compass-calibration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#compass-calibration"}},[t._v("#")]),t._v(" Compass Calibration")]),t._v(" "),o("p",[t._v("The compass calibration process configures all connected internal and external "),o("RouterLink",{attrs:{to:"/en/gps_compass/"}},[t._v("magnetometers")]),t._v(".\n"),o("em",[t._v("QGroundControl")]),t._v(" will guide you to position the vehicle in a number of set orientations and rotate the vehicle about the specified axis.")],1),t._v(" "),o("p",[t._v("You will need to calibrate your compass on first use, and you may need to recalibrate it if the vehicles is ever exposed to a very strong magnetic field, or if it is used in an area with abnormal magnetic characteristics.")]),t._v(" "),o("p",[t._v("Two types of compass calibration are available:")]),t._v(" "),o("ol",[o("li",[o("a",{attrs:{href:"#complete-calibration"}},[t._v("Complete")]),t._v(": This calibration is required after installing the autopilot on an airframe for the first time or when the configuration of the vehicle has changed significantly.\nIt compensates for hard and soft iron effects by estimating an offset and a scale factor for each axis.")]),t._v(" "),o("li",[o("a",{attrs:{href:"#partial-quick-calibration"}},[t._v("Partial")]),t._v(' ("Quick Calibration"): This calibration can be performed as a routine when preparing the vehicle for a flight, after changing the payload, or simply when the compass rose seems inaccurate.\nThis type of calibration only estimates the offsets to compensate for a hard iron effect.')])]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("If you are using an external magnetometer/compass (or a compass integrated into a GPS module) make sure it is "),o("RouterLink",{attrs:{to:"/en/assembly/mount_gps_compass.html"}},[t._v("mounted")]),t._v(" as far as possible from other electronics and in a "),o("em",[t._v("supported orientation")]),t._v(".\nInstructions for "),o("em",[t._v("connecting")]),t._v(" your GPS+compass can be found in "),o("RouterLink",{attrs:{to:"/en/assembly/"}},[t._v("Basic Assembly")]),t._v(" for your specific autopilot hardware.\nOnce connected, "),o("em",[t._v("QGroundControl")]),t._v(" will automatically detect the external magnetometer.")],1)]),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),o("p",[t._v("Indications of a poor compass calibration include multicopter circling during hover, toilet bowling (circling at increasing radius/spiraling-out, usually constant altitude, leading to fly-way), or veering off-path when attempting to fly straight.")])]),t._v(" "),o("h2",{attrs:{id:"performing-the-calibration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#performing-the-calibration"}},[t._v("#")]),t._v(" Performing the Calibration")]),t._v(" "),o("h3",{attrs:{id:"complete-calibration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#complete-calibration"}},[t._v("#")]),t._v(" Complete Calibration")]),t._v(" "),o("p",[t._v("The calibration steps are:")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("Choose a location away from large metal objects or magnetic fields.")]),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),o("p",[t._v("Metal is not always obvious! Avoid calibrating on top of an office table (often contain metal bars) or next to a vehicle.\nCalibration can even be affected if you're standing on a slab of concrete with uneven distribution of re-bar.")])])]),t._v(" "),o("li",[o("p",[t._v("Start "),o("em",[t._v("QGroundControl")]),t._v(" and connect the vehicle.")])]),t._v(" "),o("li",[o("p",[t._v("Select the "),o("strong",[t._v("Gear")]),t._v(" icon (Vehicle Setup) in the top toolbar and then "),o("strong",[t._v("Sensors")]),t._v(" in the sidebar.")])]),t._v(" "),o("li",[o("p",[t._v("Click the "),o("strong",[t._v("Compass")]),t._v(" sensor button.")]),t._v(" "),o("p",[o("img",{attrs:{src:a(697),alt:"Select Compass calibration PX4"}})]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("You should already have set the "),o("RouterLink",{attrs:{to:"/en/config/flight_controller_orientation.html"}},[t._v("Autopilot Orientation")]),t._v(". If not, you can also set it here.")],1)])]),t._v(" "),o("li",[o("p",[t._v("Click "),o("strong",[t._v("OK")]),t._v(" to start the calibration.")])]),t._v(" "),o("li",[o("p",[t._v("Place the vehicle in any of the orientations shown in red (incomplete) and hold it still. Once prompted (the orientation-image turns yellow) rotate the vehicle around the specified axis in either/both directions. Once the calibration is complete for the current orientation the associated image on the screen will turn green.")]),t._v(" "),o("p",[o("img",{attrs:{src:a(698),alt:"Compass calibration steps on PX4"}})])]),t._v(" "),o("li",[o("p",[t._v("Repeat the calibration process for all vehicle orientations.")])])]),t._v(" "),o("p",[t._v("Once you've calibrated the vehicle in all the positions "),o("em",[t._v("QGroundControl")]),t._v(" will display "),o("em",[t._v("Calibration complete")]),t._v(" (all orientation images will be displayed in green and the progress bar will fill completely). You can then proceed to the next sensor.")]),t._v(" "),o("h3",{attrs:{id:"partial-quick-calibration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#partial-quick-calibration"}},[t._v("#")]),t._v(' Partial "Quick" Calibration')]),t._v(" "),o("p",[t._v("This calibration is similar to the well-known figure-8 compass calibration done on a smartphone:")]),t._v(" "),o("ol",[o("li",[t._v("Hold the vehicle in front of you and randomly perform partial rotations on all its axes.")]),t._v(" "),o("li",[t._v("Wait for the heading estimate to stabilize and verify that the compass rose is pointing to the correct direction (this can take a couple of seconds).")])]),t._v(" "),o("p",[t._v("Notes:")]),t._v(" "),o("ul",[o("li",[t._v("There is no start/stop for this type of calibration (the algorithm runs continuously when the vehicle is disarmed).")]),t._v(" "),o("li",[t._v("The calibration is immediately applied to the data (no reboot is required) but is saved to the calibration parameters after disarming the vehicle only (the calibration is lost if no arming/disarming sequence is performed between calibration and shutdown).")]),t._v(" "),o("li",[t._v("The amplitude and the speed of the partial rotations done in step 1 can affect the calibration quality.\nHowever, 2-3 oscillations of ~30 degrees in every direction is usually enough.")])]),t._v(" "),o("h2",{attrs:{id:"further-information"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#further-information"}},[t._v("#")]),t._v(" Further Information")]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/en/gps_compass/#compass-configuration"}},[t._v("Peripherals > GPS & Compass > Compass Configuration")])],1),t._v(" "),o("li",[o("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/SetupView/sensors_px4.html#compass",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGroundControl User Guide > Sensors"),o("OutboundLink")],1)]),t._v(" "),o("li",[o("a",{attrs:{href:"https://youtu.be/91VGmdSlbo4?t=2m38s",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4 Setup Video - @2m38s"),o("OutboundLink")],1),t._v(" (Youtube)")]),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/en/advanced_config/compass_power_compensation.html"}},[t._v("Compass Power Compensation")]),t._v(" (Advanced Configuration)")],1)])])}),[],!1,null,null,null);e.default=i.exports},697:function(t,e,a){t.exports=a.p+"assets/img/sensor_compass_select_px4.406db909.jpg"},698:function(t,e,a){t.exports=a.p+"assets/img/sensor_compass_calibrate_px4.7942cdf1.jpg"}}]);