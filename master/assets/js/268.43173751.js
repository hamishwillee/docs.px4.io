(window.webpackJsonp=window.webpackJsonp||[]).push([[268],{2240:function(e,t,a){"use strict";a.r(t);var s=a(18),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"compass-power-compensation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#compass-power-compensation"}},[e._v("#")]),e._v(" Compass Power Compensation")]),e._v(" "),s("p",[e._v("Compasses (magnetometers) should be mounted as far as possible from cables that carry large currents, as these induce magnetic fields that may corrupt the compass readings.")]),e._v(" "),s("p",[e._v("This topic explains how to compensate for the induced magnetic fields in the cases where moving the compass is not realistic.")]),e._v(" "),s("blockquote",[s("p",[s("strong",[e._v("Tip")]),e._v(" Moving the compass away from power-carrying cables is the easiest and most effective way to fix this issue, because the strength of the magnetic fields decreases quadratically with the distance from the cable.")])]),e._v(" "),s("p",[s("span")]),e._v(" "),s("blockquote",[s("p",[s("strong",[e._v("Note")]),e._v(" The process is demonstrated for a multicopter, but is equally valid for other vehicle types.")])]),e._v(" "),s("p",[s("span",{attrs:{id:"when"}})]),e._v(" "),s("h2",{attrs:{id:"when-is-power-compensation-applicable"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#when-is-power-compensation-applicable"}},[e._v("#")]),e._v(" When is Power Compensation Applicable?")]),e._v(" "),s("p",[e._v("Performing this power compensation is advisable only if all the following statements are true:")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("The compass cannot be moved away from the power-carrying cables.")])]),e._v(" "),s("li",[s("p",[e._v("There is a strong correlation between the compass readings and the thrust setpoint, and/or the battery current. "),s("img",{attrs:{src:a(435),alt:"Corrupted mag"}})])]),e._v(" "),s("li",[s("p",[e._v("The drone cables are all fixed in place/do not move (calculated compensation parameters will be invalid if the current-carrying cables can move).")])])]),e._v(" "),s("p",[s("span",{attrs:{id:"how"}})]),e._v(" "),s("h2",{attrs:{id:"how-to-compensate-the-compass"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-compensate-the-compass"}},[e._v("#")]),e._v(" How to Compensate the Compass")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Make sure your drone runs a Firmware version supporting power compensation (current master, or releases from v.1.11.0).")])]),e._v(" "),s("li",[s("p",[e._v("Perform the "),s("RouterLink",{attrs:{to:"/zh/config/compass.html#compass-calibration"}},[e._v("standard compass calibration")]),e._v(".")],1)]),e._v(" "),s("li",[s("p",[e._v("Set the parameter "),s("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SDLOG_MODE"}},[e._v("SDLOG_MODE")]),e._v(" to 2 to enable logging of data from boot.")],1)]),e._v(" "),s("li",[s("p",[e._v("Set the parameter "),s("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SDLOG_PROFILE"}},[e._v("SDLOG_PROFILE")]),e._v(" checkbox for "),s("em",[e._v("high rate")]),e._v(" (bit 2) to get more data points.")],1)]),e._v(" "),s("li",[s("p",[e._v("Secure the drone so that it cannot move, and attach the propellers (so the motors can draw the the same current as in flight). This example secures the vehicle using straps.")]),e._v(" "),s("p",[s("img",{attrs:{src:a(436),alt:"strap"}})])]),e._v(" "),s("li",[s("p",[e._v("Power the vehicle and switch into "),s("RouterLink",{attrs:{to:"/zh/flight_modes/acro_mc.html"}},[e._v("ACRO flight mode")]),e._v(" (using this mode ensures the vehicle won't attempt to compensate for movement resulting from the straps).")],1),e._v(" "),s("ul",[s("li",[e._v("Arm the vehicle and slowly raise the throttle to the maximum")]),e._v(" "),s("li",[e._v("Slowly lower the throttle down to zero")]),e._v(" "),s("li",[e._v("Disarm the vehicle > "),s("strong",[e._v("Note")]),e._v(" Perform the test carefully and closely monitor the vibrations.")])])]),e._v(" "),s("li",[s("p",[e._v("Retrieve the ulog and use the python script "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/modules/sensors/vehicle_magnetometer/mag_compensation/python/mag_compensation.py",target:"_blank",rel:"noopener noreferrer"}},[e._v("mag_compensation.py"),s("OutboundLink")],1),e._v(" to identify the compensation parameters.")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("python mag_compensation.py ~/path/to/log/logfile.ulg\n")])])]),s("blockquote",[s("p",[s("strong",[e._v("Note")]),e._v(" If your log does not contain battery current measurements, you will need to comment out the respective lines in the python script, such that it does the calculation for thrust only.")])])]),e._v(" "),s("li",[s("p",[e._v('The script will return the parameter identification for thrust as well as for current and print them to the console. The figures that pop up from the script show the "goodness of fit" for each compass instance, and how the data would look if compensated with the suggested values. If a current measurement is available, using the current-compensation usually yields the better results. Here is an example of a log, where the current fit is good, but the thrust parameters are unusable as the relationship is not linear. '),s("img",{attrs:{src:a(437),alt:"line fit"}})])]),e._v(" "),s("li",[s("p",[e._v("Once the parameters are identified, the power compensation must be enabled by setting "),s("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#CAL_MAG_COMP_TYP"}},[e._v("CAL_MAG_COMP_TYP")]),e._v(" to 1 (when using thrust parameters) or 2 (when using current parameters). Additionally, the compensation parameters for each axis of each compass must be set.")],1),e._v(" "),s("p",[s("img",{attrs:{src:a(438),alt:"comp params"}})])])])])}),[],!1,null,null,null);t.default=o.exports},435:function(e,t,a){e.exports=a.p+"assets/img/corrupted_mag.3142e358.png"},436:function(e,t,a){e.exports=a.p+"assets/img/strap.5d8b1475.png"},437:function(e,t,a){e.exports=a.p+"assets/img/line_fit.5e701615.png"},438:function(e,t,a){e.exports=a.p+"assets/img/comp_params.7b7a8729.png"}}]);