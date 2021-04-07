(window.webpackJsonp=window.webpackJsonp||[]).push([[217],{1471:function(t,e,a){"use strict";a.r(e);var n=a(18),i=Object(n.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"esc-calibration"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#esc-calibration"}},[t._v("#")]),t._v(" ESC Calibration")]),t._v(" "),n("div",{staticClass:"custom-block note"},[n("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),n("p",[t._v("These instructions are only relevant to "),n("RouterLink",{attrs:{to:"/en/peripherals/pwm_escs_and_servo.html"}},[t._v("PWM ESCs")]),t._v(".")],1)]),t._v(" "),n("p",[t._v("Electronic Speed Controllers (ESCs) regulate motor speed (and direction) based on the PWM input value from the flight controller (FC).\nThe range of inputs to which an ESC will respond is configurable, and the default range can differ even between ESCs of the same model.")]),t._v(" "),n("p",[t._v("This calibration updates all the ESCs with the maximum and minimum PWM input values that will be supplied by the flight controller.\nSubsequently all the ESCs/motors will respond to flight controller input in the same way (across the whole input range).")]),t._v(" "),n("p",[t._v("Calibration is recommended for all ESCs, and in particular for low cost models.")]),t._v(" "),n("h2",{attrs:{id:"preconditions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#preconditions"}},[t._v("#")]),t._v(" Preconditions")]),t._v(" "),n("p",[t._v("The system must include a power module (PX4 uses the measured voltage to determine whether or not a battery is connected).")]),t._v(" "),n("h2",{attrs:{id:"steps"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#steps"}},[t._v("#")]),t._v(" Steps")]),t._v(" "),n("p",[t._v("To calibrate the ESCs:")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("Remove the propellers.")]),t._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),n("p",[t._v("Never attempt ESC calibration with props on.")]),t._v(" "),n("p",[t._v("The motors should not spin during ESC calibration.\nHowever if an ESC doesn't properly support/detect the calibration sequence then it will respond to the PWM input by running the motor at maximum speed.")])])]),t._v(" "),n("li",[n("p",[t._v("Disconnect the battery and connect the flight controller via USB (only).")])]),t._v(" "),n("li",[n("p",[t._v("Open the "),n("em",[t._v("QGroundControl")]),t._v(" "),n("strong",[t._v("Settings > Power")]),t._v(", then press the "),n("strong",[t._v("Calibrate")]),t._v(" button.")]),t._v(" "),n("p",[n("img",{attrs:{src:a(339),alt:"ESC Calibration step 1"}})])]),t._v(" "),n("li",[n("p",[t._v("Connect the battery when prompted:")]),t._v(" "),n("p",[n("img",{attrs:{src:a(451),alt:"ESC Calibration step 2"}})]),t._v(" "),n("p",[t._v("The calibration will begin automatically:")]),t._v(" "),n("p",[n("img",{attrs:{src:a(452),alt:"ESC Calibration step 3"}})])]),t._v(" "),n("li",[n("p",[t._v("Once the calibration complete you will be prompted to disconnect the battery.")]),t._v(" "),n("p",[n("img",{attrs:{src:a(453),alt:"ESC Calibration step 4"}})])])]),t._v(" "),n("div",{staticClass:"custom-block note"},[n("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),n("p",[t._v("High-quality controllers come with a factory calibration.\nIn "),n("em",[t._v("theory")]),t._v(" this means that they can be configured by just setting the "),n("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#PWM_MIN"}},[t._v("PWM_MIN")]),t._v(" and "),n("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#PWM_MAX"}},[t._v("PWM_MAX")]),t._v(" parameters to the values provided in the ESC technical specification.\nIn practice the input range may differ even on high quality controllers, which is why calibration is recommended.")],1)])])}),[],!1,null,null,null);e.default=i.exports},339:function(t,e,a){t.exports=a.p+"assets/img/qgc_esc_calibration.efb64b91.png"},451:function(t,e,a){t.exports=a.p+"assets/img/esc_calibration_step_2.a4748456.png"},452:function(t,e,a){t.exports=a.p+"assets/img/esc_calibration_step_3.f0838782.png"},453:function(t,e,a){t.exports=a.p+"assets/img/esc_calibration_step_4.21cea0f6.png"}}]);