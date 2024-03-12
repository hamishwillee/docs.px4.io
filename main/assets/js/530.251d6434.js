(window.webpackJsonp=window.webpackJsonp||[]).push([[530],{1967:function(e,t,a){"use strict";a.r(t);var i=a(19),o=Object(i.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"compass-calibration"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#compass-calibration"}},[e._v("#")]),e._v(" Compass Calibration")]),e._v(" "),i("p",[e._v("The compass calibration process configures all connected internal and external "),i("RouterLink",{attrs:{to:"/en/gps_compass/"}},[e._v("magnetometers")]),e._v(".\n"),i("em",[e._v("QGroundControl")]),e._v(" will guide you to position the vehicle in a number of set orientations and rotate the vehicle about the specified axis.")],1),e._v(" "),i("h2",{attrs:{id:"overview"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),i("p",[e._v("You will need to calibrate your compass on first use, and you may need to recalibrate it if the vehicles is ever exposed to a very strong magnetic field, or if it is used in an area with abnormal magnetic characteristics.")]),e._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),i("p",[e._v("Indications of a poor compass calibration include multicopter circling during hover, toilet bowling (circling at increasing radius/spiraling-out, usually constant altitude, leading to fly-way), or veering off-path when attempting to fly straight.\n"),i("em",[e._v("QGroundControl")]),e._v(" should also notify the error "),i("code",[e._v("mag sensors inconsistent")]),e._v(".")])]),e._v(" "),i("p",[e._v("Two types of compass calibration are available:")]),e._v(" "),i("ol",[i("li",[i("a",{attrs:{href:"#complete-calibration"}},[e._v("Complete")]),e._v(": This calibration is required after installing the autopilot on an airframe for the first time or when the configuration of the vehicle has changed significantly.\nIt compensates for hard and soft iron effects by estimating an offset and a scale factor for each axis.")]),e._v(" "),i("li",[i("a",{attrs:{href:"#partial-quick-calibration"}},[e._v("Partial")]),e._v(' ("Quick Calibration"): This calibration can be performed as a routine when preparing the vehicle for a flight, after changing the payload, or simply when the compass rose seems inaccurate.\nThis type of calibration only estimates the offsets to compensate for a hard iron effect.')])]),e._v(" "),i("h2",{attrs:{id:"performing-the-calibration"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#performing-the-calibration"}},[e._v("#")]),e._v(" Performing the Calibration")]),e._v(" "),i("h3",{attrs:{id:"preconditions"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#preconditions"}},[e._v("#")]),e._v(" Preconditions")]),e._v(" "),i("p",[e._v("Before starting the calibration:")]),e._v(" "),i("ol",[i("li",[e._v("Choose a location away from large metal objects or magnetic fields."),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),i("p",[e._v("Metal is not always obvious! Avoid calibrating on top of an office table (often contain metal bars) or next to a vehicle.\nCalibration can even be affected if you're standing on a slab of concrete with uneven distribution of re-bar.")])])]),e._v(" "),i("li",[e._v("Connect via telemetry radio rather than USB if at all possible.\nUSB can potentially cause significant magnetic interference.")]),e._v(" "),i("li",[e._v("If using an external compass (or a combined GPS/compass module), make sure it is "),i("RouterLink",{attrs:{to:"/en/assembly/mount_gps_compass.html"}},[e._v("mounted")]),e._v(" as far as possible from other electronics in order to reduce magnetic interference, and in a "),i("em",[e._v("supported orientation")]),e._v(".")],1)]),e._v(" "),i("h3",{attrs:{id:"complete-calibration"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#complete-calibration"}},[e._v("#")]),e._v(" Complete Calibration")]),e._v(" "),i("p",[e._v("The calibration steps are:")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("Start "),i("em",[e._v("QGroundControl")]),e._v(" and connect the vehicle.")])]),e._v(" "),i("li",[i("p",[e._v("Select the "),i("strong",[e._v("Gear")]),e._v(" icon (Vehicle Setup) in the top toolbar and then "),i("strong",[e._v("Sensors")]),e._v(" in the sidebar.")])]),e._v(" "),i("li",[i("p",[e._v("Click the "),i("strong",[e._v("Compass")]),e._v(" sensor button.")]),e._v(" "),i("p",[i("img",{attrs:{src:a(672),alt:"Select Compass calibration PX4"}})]),e._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),i("p",[e._v("You should already have set the "),i("RouterLink",{attrs:{to:"/en/config/flight_controller_orientation.html"}},[e._v("Autopilot Orientation")]),e._v(". If not, you can also set it here.")],1)])]),e._v(" "),i("li",[i("p",[e._v("Click "),i("strong",[e._v("OK")]),e._v(" to start the calibration.")])]),e._v(" "),i("li",[i("p",[e._v("Place the vehicle in any of the orientations shown in red (incomplete) and hold it still. Once prompted (the orientation-image turns yellow) rotate the vehicle around the specified axis in either/both directions. Once the calibration is complete for the current orientation the associated image on the screen will turn green.")]),e._v(" "),i("p",[i("img",{attrs:{src:a(673),alt:"Compass calibration steps on PX4"}})])]),e._v(" "),i("li",[i("p",[e._v("Repeat the calibration process for all vehicle orientations.")])])]),e._v(" "),i("p",[e._v("Once you've calibrated the vehicle in all the positions "),i("em",[e._v("QGroundControl")]),e._v(" will display "),i("em",[e._v("Calibration complete")]),e._v(" (all orientation images will be displayed in green and the progress bar will fill completely). You can then proceed to the next sensor.")]),e._v(" "),i("h3",{attrs:{id:"partial-quick-calibration"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#partial-quick-calibration"}},[e._v("#")]),e._v(' Partial "Quick" Calibration')]),e._v(" "),i("p",[e._v("This calibration is similar to the well-known figure-8 compass calibration done on a smartphone:")]),e._v(" "),i("ol",[i("li",[e._v("Hold the vehicle in front of you and randomly perform partial rotations on all its axes.\n2-3 oscillations of ~30 degrees in every direction is usually sufficient.")]),e._v(" "),i("li",[e._v("Wait for the heading estimate to stabilize and verify that the compass rose is pointing to the correct direction (this can take a couple of seconds).")])]),e._v(" "),i("p",[e._v("Notes:")]),e._v(" "),i("ul",[i("li",[e._v("There is no start/stop for this type of calibration (the algorithm runs continuously when the vehicle is disarmed).")]),e._v(" "),i("li",[e._v("The calibration is immediately applied to the data (no reboot is required) but is saved to the calibration parameters after disarming the vehicle only (the calibration is lost if no arming/disarming sequence is performed between calibration and shutdown).")]),e._v(" "),i("li",[e._v("The amplitude and the speed of the partial rotations done in step 1 can affect the calibration quality.\nFollowing the advice above is usually enough.")])]),e._v(" "),i("h2",{attrs:{id:"verification"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#verification"}},[e._v("#")]),e._v(" Verification")]),e._v(" "),i("p",[e._v("After the calibration is complete, check that the heading indicator and the heading of the arrow on the map are stable and match the orientation of the vehicle when turning it e.g. to the cardinal directions.")]),e._v(" "),i("h2",{attrs:{id:"additional-calibration-configuration"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#additional-calibration-configuration"}},[e._v("#")]),e._v(" Additional Calibration/Configuration")]),e._v(" "),i("p",[e._v("The process above will autodetect, "),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#SENS_MAG_AUTOROT"}},[e._v("set default rotations")]),e._v(", calibrate, and prioritise, all connected magnetometers.")],1),e._v(" "),i("p",[e._v("Further compass configuration should generally not be required.")]),e._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),i("p",[e._v("All external compasses are given the same priority by default, which is higher than the priority shared by all internal compasses.")])]),e._v(" "),i("h3",{attrs:{id:"disable-a-compass"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#disable-a-compass"}},[e._v("#")]),e._v(" Disable a Compass")]),e._v(" "),i("p",[e._v("As stated above, generally no further configuration should be required.")]),e._v(" "),i("p",[e._v("That said, developers can disable internal compasses if desired using the compass parameters.\nThese are prefixed with "),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#CAL_MAG0_ID"}},[e._v("CAL"),i("em",[e._v("MAGx")])]),e._v(" (where "),i("code",[e._v("x=0-3")]),e._v(").")],1),e._v(" "),i("p",[e._v("To disable an internal compass:")]),e._v(" "),i("ul",[i("li",[e._v("Use "),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#CAL_MAG0_ROT"}},[e._v("CAL_MAGn_ROT")]),e._v(" to determine which compasses are internal.\nA compass is internal if "),i("code",[e._v("CAL_MAGn_ROT==1")]),e._v(".")],1),e._v(" "),i("li",[e._v("Then use "),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#CAL_MAG0_PRIO"}},[e._v("CAL_MAGx_PRIO")]),e._v(" to disable the compass.\nThis can also be used to change the relative priority of a compass.")],1)]),e._v(" "),i("h2",{attrs:{id:"debugging"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#debugging"}},[e._v("#")]),e._v(" Debugging")]),e._v(" "),i("p",[e._v("Raw comparison data for magnetometers (in fact, for all sensors) can be logged by setting "),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#SDLOG_MODE"}},[e._v("SDLOG_MODE=1")]),e._v(" and "),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#SDLOG_PROFILE"}},[e._v("SDLOG_PROFILE=64")]),e._v(".\nSee "),i("RouterLink",{attrs:{to:"/en/dev_log/logging.html"}},[e._v("Logging")]),e._v(" for more information.")],1),e._v(" "),i("h2",{attrs:{id:"further-information"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#further-information"}},[e._v("#")]),e._v(" Further Information")]),e._v(" "),i("ul",[i("li",[i("RouterLink",{attrs:{to:"/en/gps_compass/"}},[e._v("Peripherals > GPS & Compass")])],1),e._v(" "),i("li",[i("RouterLink",{attrs:{to:"/en/assembly/"}},[e._v("Basic Assembly")]),e._v(" (setup guides for each flight controller)")],1),e._v(" "),i("li",[i("RouterLink",{attrs:{to:"/en/advanced_config/compass_power_compensation.html"}},[e._v("Compass Power Compensation")]),e._v(" (Advanced Configuration)")],1),e._v(" "),i("li",[i("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/qgc-user-guide/setup_view/sensors_px4.html#compass",target:"_blank",rel:"noopener noreferrer"}},[e._v("QGroundControl User Guide > Sensors"),i("OutboundLink")],1)]),e._v(" "),i("li",[i("a",{attrs:{href:"https://youtu.be/91VGmdSlbo4?t=2m38s",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4 Setup Video - @2m38s"),i("OutboundLink")],1),e._v(" (Youtube)")])])])}),[],!1,null,null,null);t.default=o.exports},672:function(e,t,a){e.exports=a.p+"assets/img/sensor_compass_select_px4.91da60b7.jpg"},673:function(e,t,a){e.exports=a.p+"assets/img/sensor_compass_calibrate_px4.a111cc6c.jpg"}}]);