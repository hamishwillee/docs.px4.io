(window.webpackJsonp=window.webpackJsonp||[]).push([[911],{1915:function(e,t,o){"use strict";o.r(t);var r=o(18),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"motor-servo-checks"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#motor-servo-checks"}},[e._v("#")]),e._v(" Motor/Servo Checks")]),e._v(" "),o("p",[e._v("After the airframe is setup and configured you should validate the motor assignment and spin direction, and the servo response. This can be done in "),o("em",[e._v("QGroundControl")]),e._v(", under the "),o("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/SetupView/Motors.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vehicle Setup > Motors"),o("OutboundLink")],1),e._v(" tab.")]),e._v(" "),o("p",[e._v("Note the following PX4-specific behaviour:")]),e._v(" "),o("ul",[o("li",[e._v("If a safety button is used, it must be pressed before motor testing is allowed.")]),e._v(" "),o("li",[e._v("The kill-switch can still be used to stop motors immediately.")]),e._v(" "),o("li",[e._v("The parameter "),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_MOT_TEST_EN"}},[e._v("COM_MOT_TEST_EN")]),e._v(" can be used to completely disable motor testing.")],1),e._v(" "),o("li",[e._v("On boards with an IO, only the MAIN pins can be tested.")]),e._v(" "),o("li",[e._v("On the shell, "),o("RouterLink",{attrs:{to:"/ko/modules/modules_command.html#motortest"}},[e._v("motor_test")]),e._v(" can be used as well, which has additional options.")],1)]),e._v(" "),o("p",[e._v("If one or more of the motors do not turn in the correct direction according to the configured "),o("RouterLink",{attrs:{to:"/ko/airframes/airframe_reference.html"}},[e._v("airframe")]),e._v(", they must be reversed. There are several options:")],1),e._v(" "),o("ul",[o("li",[e._v("If using ESCs that support "),o("RouterLink",{attrs:{to:"/ko/peripherals/dshot.html"}},[e._v("DShot")]),e._v(" you can reverse the direction via "),o("RouterLink",{attrs:{to:"/ko/peripherals/dshot.html#commands"}},[e._v("DShot commands")]),e._v(".")],1),e._v(" "),o("li",[e._v("Swap 2 of the 3 motor cables (it does not matter which ones). > "),o("strong",[e._v("Note")]),e._v(" If motors are not connected via bullet-connectors, re-soldering is required (this is a reason, among others, to prefer DShot ESCs).")])]),e._v(" "),o("p",[e._v("The following additional checks should be performed to validate that the vehicle is setup correctly:")]),e._v(" "),o("ol",[o("li",[e._v("With propellers still removed, switch to "),o("RouterLink",{attrs:{to:"/ko/flight_modes/manual_stabilized_mc.html"}},[e._v("Stabilised mode")]),e._v(" (Multicopter) or "),o("RouterLink",{attrs:{to:"/ko/flight_modes/manual_fw.html"}},[e._v("Manual mode")]),e._v(" (Fixed Wing) and arm the vehicle.")],1),e._v(" "),o("li",[e._v("Increase the throttle a little (so the vehicle does not automatically disarm) and check that the motors respond to throttle changes.")]),e._v(" "),o("li",[e._v("Check that all motors spin at minimum throttle.")]),e._v(" "),o("li",[e._v("If the vehicle has ailerons, check if they are responding in the right directions when giving roll/pitch stick input commands.")])])])}),[],!1,null,null,null);t.default=s.exports}}]);