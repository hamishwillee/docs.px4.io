(window.webpackJsonp=window.webpackJsonp||[]).push([[1196],{2543:function(e,t,o){"use strict";o.r(t);var r=o(18),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"dshot-escs"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#dshot-escs"}},[e._v("#")]),e._v(" DShot ESCs")]),e._v(" "),o("p",[e._v("DShot is an alternative ESC protocol that has several advantages over PWM or OneShot:")]),e._v(" "),o("ul",[o("li",[e._v("Reduced latency.")]),e._v(" "),o("li",[e._v("Increased robustness via a checksum.")]),e._v(" "),o("li",[e._v("No need for ESC calibration as the protocol uses digital encoding.")]),e._v(" "),o("li",[e._v("Telemetry feedback is available/supported on some ESCs.")]),e._v(" "),o("li",[e._v("Can reverse motor spin directions via commands when needed (rather than physically moving wires/re-soldering).")]),e._v(" "),o("li",[e._v("Other useful commands are supported.")])]),e._v(" "),o("p",[e._v("This topic shows how to connect and configure DShot ESCs.")]),e._v(" "),o("p",[o("span",{attrs:{id:"wiring"}})]),e._v(" "),o("h2",{attrs:{id:"wiring-connections"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#wiring-connections"}},[e._v("#")]),e._v(" Wiring/Connections")]),e._v(" "),o("p",[e._v("DShot ESCs are connected and wired the same way as "),o("RouterLink",{attrs:{to:"/zh/peripherals/pwm_escs_and_servo.html"}},[e._v("PWM ESCs")]),e._v(", and you can switch between these protocols just by changing software parameters (ESCs automatically detect the selected protocol on startup).")],1),e._v(" "),o("p",[e._v("If using a Pixhawk flight controller that only has a MAIN port, connect the pins according to the "),o("RouterLink",{attrs:{to:"/zh/airframes/airframe_reference.html"}},[e._v("airframe reference")]),e._v(" for your vehicle.")],1),e._v(" "),o("p",[e._v("If using a Pixhawk that has ports labeled AUX and MAIN, set "),o("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SYS_USE_IO"}},[e._v("SYS_USE_IO=0")]),e._v(" and connect your ESCs to the AUX-labeled outputs "),o("em",[e._v("as though they were labeled MAIN")]),e._v(".")],1),e._v(" "),o("blockquote",[o("p",[o("strong",[e._v("Note")]),e._v(" A Pixhawk flight controller that has both FMU and IO will label these ports as AUX and MAIN respectively. DShot can only be used on the FMU ports (labeled AUX), which is a problem because ESC/motor outputs are typically assigned to the MAIN port in the "),o("RouterLink",{attrs:{to:"/zh/airframes/airframe_reference.html"}},[e._v("airframe reference")]),e._v(".")],1),e._v(" "),o("p",[e._v("To use DShot you therefore normally set "),o("code",[e._v("SYS_USE_IO=0")]),e._v(" (which makes the ports labeled AUX behave "),o("em",[e._v("as though")]),e._v(" they were the ports labeled MAIN), and connect your ESCs to the corresponding AUX-labeled outputs. Any outputs that would normally be assigned to AUX ports in the "),o("RouterLink",{attrs:{to:"/zh/airframes/airframe_reference.html"}},[e._v("airframe reference")]),e._v(" are no longer available.")],1),e._v(" "),o("p",[e._v("Developers might alternatively modify the "),o("RouterLink",{attrs:{to:"/zh/dev_airframes/adding_a_new_frame.html#mixer-file"}},[e._v("airframe AUX mixer")]),e._v(" so that the multirotor outputs are on the AUX port rather than MAIN.")],1)]),e._v(" "),o("p",[o("span")]),e._v(" "),o("blockquote",[o("p",[o("strong",[e._v("Note")]),e._v(" FMUv5-based boards (e.g. Pixhawk 4 or CUAV Pixhawk V5+) support DShot only on the first four FMU pins due to hardware conflicts. The other pins cannot be used as motor/servo outputs.")])]),e._v(" "),o("p",[o("span")]),e._v(" "),o("blockquote",[o("p",[o("strong",[e._v("Tip")]),e._v(" You can't mix DShot ESCs/servos and PWM ESCs/servos on the FMU (DShot is enabled/disabled for "),o("em",[e._v("all")]),e._v(" FMU pins on the port).")])]),e._v(" "),o("p",[o("span",{attrs:{id:"configuration"}})]),e._v(" "),o("h2",{attrs:{id:"configuration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),o("blockquote",[o("p",[o("strong",[e._v("Warning")]),e._v(" Remove propellers before changing ESC configuration parameters!")])]),e._v(" "),o("p",[e._v("Enable DShot with the "),o("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#DSHOT_CONFIG"}},[e._v("DSHOT_CONFIG")]),e._v(" parameter (if the parameter does not exist, the board does not support DShot).")],1),e._v(" "),o("p",[e._v("DShot comes with different speed options: "),o("em",[e._v("DShot150")]),e._v(", "),o("em",[e._v("DShot300")]),e._v(", "),o("em",[e._v("DShot600")]),e._v(" and "),o("em",[e._v("DShot1200")]),e._v(", where the number indicates the speed in kilo-bits/second. You should set the parameter to the highest speed supported by your ESC (according to its datasheet) and then reboot the vehicle.")]),e._v(" "),o("p",[e._v("Then connect the battery and arm the vehicle. The ESCs should initialize and the motors turn in the correct directions.")]),e._v(" "),o("ul",[o("li",[e._v("If the motors do not spin in the correct direction (for the "),o("RouterLink",{attrs:{to:"/zh/airframes/airframe_reference.html"}},[e._v("selected airframe")]),e._v("), reverse them by sending an "),o("a",{attrs:{href:"#commands"}},[e._v("ESC Command")]),e._v(".")],1),e._v(" "),o("li",[e._v("Adjust "),o("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#DSHOT_MIN"}},[e._v("DSHOT_MIN")]),e._v(" so that the motors spin at lowest throttle (but the vehicle does not take off).")],1)]),e._v(" "),o("p",[o("span",{attrs:{id:"commands"}})]),e._v(" "),o("h2",{attrs:{id:"esc-commands"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#esc-commands"}},[e._v("#")]),e._v(" ESC Commands")]),e._v(" "),o("p",[e._v("Commands can be sent to the ESC via the "),o("RouterLink",{attrs:{to:"/zh/debug/mavlink_shell.html"}},[e._v("MAVLink shell")]),e._v(". See "),o("RouterLink",{attrs:{to:"/zh/modules/modules_driver.html#dshot"}},[e._v("here")]),e._v(" for a full reference of the supported commands.")],1),e._v(" "),o("p",[e._v("The most important ones are:")]),e._v(" "),o("ul",[o("li",[e._v("Make the first motor beep (helps with identifying motors):"),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("dshot beep1 -m 1\n")])])])]),e._v(" "),o("li",[e._v("Permanently reverse the spin direction of the first motor:"),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("dshot reverse -m 1\ndshot save -m 1\n")])])])]),e._v(" "),o("li",[e._v("Retrieve ESC information (requires telemetry, see below):"),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("nsh> dshot esc_info -m 2\nINFO  [dshot] ESC Type: #TEKKO32_4in1#\nINFO  [dshot] MCU Serial Number: xxxxxx-xxxxxx-xxxxxx-xxxxxx\nINFO  [dshot] Firmware version: 32.60\nINFO  [dshot] Rotation Direction: normal\nINFO  [dshot] 3D Mode: off\nINFO  [dshot] Low voltage Limit: off\nINFO  [dshot] Current Limit: off\nINFO  [dshot] LED 0: unsupported\nINFO  [dshot] LED 1: unsupported\nINFO  [dshot] LED 2: unsupported\nINFO  [dshot] LED 3: unsupported\n")])])])])]),e._v(" "),o("h2",{attrs:{id:"telemetry"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#telemetry"}},[e._v("#")]),e._v(" Telemetry")]),e._v(" "),o("p",[e._v("Some ESCs are capable of sending telemetry back to the flight controller, including:")]),e._v(" "),o("ul",[o("li",[e._v("temperature")]),e._v(" "),o("li",[e._v("voltage")]),e._v(" "),o("li",[e._v("current")]),e._v(" "),o("li",[e._v("accumulated current consumption")]),e._v(" "),o("li",[e._v("RPM values")])]),e._v(" "),o("p",[e._v("These DShot ESCs will have an additional telemetry wire.")]),e._v(" "),o("p",[e._v("To enable this feature (on ESCs that support it):")]),e._v(" "),o("ol",[o("li",[e._v("Join all the telemetry wires from all the ESCs together, and then connect them to one of the RX pins on an unused flight controller serial port.")]),e._v(" "),o("li",[e._v("Enable telemetry on that serial port using "),o("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#DSHOT_TEL_CFG"}},[e._v("DSHOT_TEL_CFG")]),e._v(".")],1)]),e._v(" "),o("p",[e._v("After a reboot you can check if telemetry is working (make sure the battery is connected) using:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("dshot esc_info -m 1\n")])])]),o("blockquote",[o("p",[o("strong",[e._v("Tip")]),e._v(" You may have to configure "),o("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MOT_POLE_COUNT"}},[e._v("MOT_POLE_COUNT")]),e._v(" to get the correct RPM values.")],1)])])}),[],!1,null,null,null);t.default=a.exports}}]);