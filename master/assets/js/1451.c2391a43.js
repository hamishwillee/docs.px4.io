(window.webpackJsonp=window.webpackJsonp||[]).push([[1451],{2612:function(e,t,o){"use strict";o.r(t);var r=o(19),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"oneshot-servos-and-escs-motor-controllers"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#oneshot-servos-and-escs-motor-controllers"}},[e._v("#")]),e._v(" OneShot Servos and ESCs (Motor Controllers)")]),e._v(" "),o("p",[e._v("PX4 support OneShot 125 ESCs (only). These are typically faster and more responsive than "),o("RouterLink",{attrs:{to:"/ko/peripherals/pwm_escs_and_servo.html"}},[e._v("PWM ESCs")]),e._v(" but share the same wiring setup (all you need to do is set some different parameters)")],1),e._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),o("p",[o("RouterLink",{attrs:{to:"/ko/peripherals/dshot.html"}},[e._v("DShot")]),e._v(" should always be used instead of OneShot where possible, as it is more responsive, more robust, does not required calibration, and may support telemetry. The only reason not to use DShot would be hardware limitations (insufficient DShot pins available or using an ESC that does not support DShot).")],1)]),e._v(" "),o("h2",{attrs:{id:"overview"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),o("p",[e._v("OneShot is essentially a version of "),o("RouterLink",{attrs:{to:"/ko/peripherals/pwm_escs_and_servo.html"}},[e._v("PWM")]),e._v(" that can be, in theory, up to 8 times faster.")],1),e._v(" "),o("p",[e._v("Both PWM and OneShot communicate using a periodic pulse, where the width of the pulse indicates the desired power level. For PWM the pulse length typically ranges between 1000uS (zero) and 2000uS (full power), while for OneShot 125 the pulse widths are 8 times shorter, ranging from 125us (zero power) to 250us (full power).")]),e._v(" "),o("p",[e._v("The theoretical maximum rate at which pulses can be sent, and hence the responsiveness, depends on the width of the largest pulse. For PWM this rate is close to 500 Hz while for OneShot it approaches 4 kHz. In practice the actual maximum rate for OneShot ESCs is typically between 1 kHz and 2 kHz, depending on the ESC used.")]),e._v(" "),o("h2",{attrs:{id:"setup"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#setup"}},[e._v("#")]),e._v(" Setup")]),e._v(" "),o("h3",{attrs:{id:"wiring"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#wiring"}},[e._v("#")]),e._v(" Wiring")]),e._v(" "),o("p",[e._v("Wiring is exactly the same as for "),o("RouterLink",{attrs:{to:"/ko/peripherals/pwm_escs_and_servo.html"}},[e._v("PWM ESCs")]),e._v(" (and dshot).")],1),e._v(" "),o("h3",{attrs:{id:"px4-configuration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#px4-configuration"}},[e._v("#")]),e._v(" PX4 Configuration")]),e._v(" "),o("p",[e._v("To enable OneShot set the following parameters:")]),e._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#DSHOT_CONFIG"}},[e._v("DSHOT_CONFIG")]),e._v(": Set to "),o("code",[e._v("0")]),e._v(" in order to "),o("em",[e._v("disable")]),e._v(" DShot (so you can use OneShot)")],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#PWM_MAIN_RATE"}},[e._v("PWM_MAIN_RATE")]),e._v("/"),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#PWM_AUX_RATE"}},[e._v("PWM_AUX_RATE")]),e._v(": Set to "),o("code",[e._v("0")]),e._v(" to enable OneShot 125 for all MAIN (IO) and AUX (FMU) ESC outputs, respectively.")],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#PWM_MAIN_MIN"}},[e._v("PWM_MAIN_MIN")]),e._v("/"),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#PWM_AUX_MIN"}},[e._v("PWM_AUX_MIN")]),e._v(" and "),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#PWM_MAIN_MAX"}},[e._v("PWM_MAIN_MAX")]),e._v("/"),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#PWM_AUX_MAX"}},[e._v("PWM_AUX_MAX")]),e._v(": set to the normal PWM range, nominally "),o("code",[e._v("1000")]),e._v(" to "),o("code",[e._v("2000")]),e._v(". These are scaled internally to output appropriate pulse-widths for Oneshot.")],1)]),e._v(" "),o("p",[e._v("Then perform "),o("RouterLink",{attrs:{to:"/ko/advanced_config/esc_calibration.html"}},[e._v("ESC Calibration")]),e._v(".")],1)])}),[],!1,null,null,null);t.default=a.exports}}]);