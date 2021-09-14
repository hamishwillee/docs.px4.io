(window.webpackJsonp=window.webpackJsonp||[]).push([[220],{1477:function(e,t,s){"use strict";s.r(t);var a=s(19),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"compass-power-compensation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compass-power-compensation"}},[e._v("#")]),e._v(" Compass Power Compensation")]),e._v(" "),a("p",[e._v("Compasses (magnetometers) should be mounted as far as possible from cables that carry large currents, as these induce magnetic fields that may corrupt the compass readings.")]),e._v(" "),a("p",[e._v("This topic explains how to compensate for the induced magnetic fields in the cases where moving the compass is not realistic.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("Moving the compass away from power-carrying cables is the easiest and most effective way to fix this issue, because the strength of the magnetic fields decreases quadratically with the distance from the cable.")])]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("The process is demonstrated for a multicopter, but is equally valid for other vehicle types.")])]),e._v(" "),a("p",[a("span",{attrs:{id:"when"}})]),e._v(" "),a("h2",{attrs:{id:"when-is-power-compensation-applicable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#when-is-power-compensation-applicable"}},[e._v("#")]),e._v(" When is Power Compensation Applicable?")]),e._v(" "),a("p",[e._v("Performing this power compensation is advisable only if all the following statements are true:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("The compass cannot be moved away from the power-carrying cables.")])]),e._v(" "),a("li",[a("p",[e._v("There is a strong correlation between the compass readings and the thrust setpoint, and/or the battery current.\n"),a("img",{attrs:{src:s(446),alt:"Corrupted mag"}})])]),e._v(" "),a("li",[a("p",[e._v("The drone cables are all fixed in place/do not move (calculated compensation parameters will be invalid if the current-carrying cables can move).")])])]),e._v(" "),a("p",[a("span",{attrs:{id:"how"}})]),e._v(" "),a("h2",{attrs:{id:"how-to-compensate-the-compass"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-compensate-the-compass"}},[e._v("#")]),e._v(" How to Compensate the Compass")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Make sure your drone runs a Firmware version supporting power compensation (current master, or releases from v.1.11.0).")])]),e._v(" "),a("li",[a("p",[e._v("Perform the "),a("RouterLink",{attrs:{to:"/en/config/compass.html#compass-calibration"}},[e._v("standard compass calibration")]),e._v(".")],1)]),e._v(" "),a("li",[a("p",[e._v("Set the parameter "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#SDLOG_MODE"}},[e._v("SDLOG_MODE")]),e._v(" to 2 to enable logging of data from boot.")],1)]),e._v(" "),a("li",[a("p",[e._v("Set the parameter "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#SDLOG_PROFILE"}},[e._v("SDLOG_PROFILE")]),e._v(" checkbox for "),a("em",[e._v("high rate")]),e._v(" (bit 2) to get more data points.")],1)]),e._v(" "),a("li",[a("p",[e._v("Secure the drone so that it cannot move, and attach the propellers (so the motors can draw the same current as in flight).\nThis example secures the vehicle using straps.")]),e._v(" "),a("p",[a("img",{attrs:{src:s(447),alt:"strap"}})])]),e._v(" "),a("li",[a("p",[e._v("Power the vehicle and switch into "),a("RouterLink",{attrs:{to:"/en/flight_modes/acro_mc.html"}},[e._v("ACRO flight mode")]),e._v(" (using this mode ensures the vehicle won't attempt to compensate for movement resulting from the straps).")],1),e._v(" "),a("ul",[a("li",[e._v("Arm the vehicle and slowly raise the throttle to the maximum")]),e._v(" "),a("li",[e._v("Slowly lower the throttle down to zero")]),e._v(" "),a("li",[e._v("Disarm the vehicle")])]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("Perform the test carefully and closely monitor the vibrations.")])])]),e._v(" "),a("li",[a("p",[e._v("Retrieve the ulog and use the python script "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/modules/sensors/vehicle_magnetometer/mag_compensation/python/mag_compensation.py",target:"_blank",rel:"noopener noreferrer"}},[e._v("mag_compensation.py"),a("OutboundLink")],1),e._v(" to identify the compensation parameters.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("python mag_compensation.py ~/path/to/log/logfile.ulg\n")])])]),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("If your log does not contain battery current measurements, you will need to comment out the respective lines in the python script, such that it does the calculation for thrust only.")])])]),e._v(" "),a("li",[a("p",[e._v('The script will return the parameter identification for thrust as well as for current and print them to the console.\nThe figures that pop up from the script show the "goodness of fit" for each compass instance, and how the data would look if compensated with the suggested values.\nIf a current measurement is available, using the current-compensation usually yields the better results.\nHere is an example of a log, where the current fit is good, but the thrust parameters are unusable as the relationship is not linear.\n'),a("img",{attrs:{src:s(448),alt:"line fit"}})])]),e._v(" "),a("li",[a("p",[e._v("Once the parameters are identified, the power compensation must be enabled by setting "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#CAL_MAG_COMP_TYP"}},[e._v("CAL_MAG_COMP_TYP")]),e._v(" to 1 (when using thrust parameters) or 2 (when using current parameters). Additionally, the compensation parameters for each axis of each compass must be set.")],1),e._v(" "),a("p",[a("img",{attrs:{src:s(449),alt:"comp params"}})])])])])}),[],!1,null,null,null);t.default=o.exports},446:function(e,t,s){e.exports=s.p+"assets/img/corrupted_mag.3142e358.png"},447:function(e,t,s){e.exports=s.p+"assets/img/strap.5d8b1475.png"},448:function(e,t,s){e.exports=s.p+"assets/img/line_fit.5e701615.png"},449:function(e,t,s){e.exports=s.p+"assets/img/comp_params.7b7a8729.png"}}]);