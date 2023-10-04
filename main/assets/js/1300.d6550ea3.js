(window.webpackJsonp=window.webpackJsonp||[]).push([[1300],{2345:function(e,t,o){"use strict";o.r(t);var a=o(19),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"dshot-escs"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#dshot-escs"}},[e._v("#")]),e._v(" DShot ESCs")]),e._v(" "),o("p",[e._v("DShot is an alternative ESC protocol that has several advantages over "),o("RouterLink",{attrs:{to:"/en/peripherals/pwm_escs_and_servo.html"}},[e._v("PWM")]),e._v(" or "),o("RouterLink",{attrs:{to:"/en/peripherals/oneshot.html"}},[e._v("OneShot")]),e._v(":")],1),e._v(" "),o("ul",[o("li",[e._v("Reduced latency.")]),e._v(" "),o("li",[e._v("Increased robustness via a checksum.")]),e._v(" "),o("li",[e._v("No need for ESC calibration as the protocol uses digital encoding.")]),e._v(" "),o("li",[e._v("Telemetry feedback is available/supported on some ESCs.")]),e._v(" "),o("li",[e._v("Can reverse motor spin directions via commands when needed (rather than physically moving wires/re-soldering).")]),e._v(" "),o("li",[e._v("Other useful commands are supported.")])]),e._v(" "),o("p",[e._v("This topic shows how to connect and configure DShot ESCs.")]),e._v(" "),o("p",[o("a",{attrs:{id:"wiring"}})]),e._v(" "),o("h2",{attrs:{id:"wiring-connections"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#wiring-connections"}},[e._v("#")]),e._v(" Wiring/Connections")]),e._v(" "),o("p",[e._v("DShot ESC are wired the same way as "),o("RouterLink",{attrs:{to:"/en/peripherals/pwm_escs_and_servo.html"}},[e._v("PWM ESCs")]),e._v(".\nThe only difference is that they can only be connected to the FMU, and usually only to some subset of pins.")],1),e._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),o("p",[e._v("You may want to check the actuator configuration screen to see what pins are available for DShot on your controller before wiring up!")])]),e._v(" "),o("p",[e._v("Pixhawk controllers with both an FMU and an IO board usually label them as "),o("code",[e._v("AUX")]),e._v(" (FMU) and "),o("code",[e._v("MAIN")]),e._v(" (IO), respectively.\nThese match the "),o("code",[e._v("PWM AUX")]),e._v(" and "),o("code",[e._v("PWM MAIN")]),e._v(" output tabs on the actuator configuration screen.\nFor these controllers connect the DShot ESC to the "),o("code",[e._v("AUX")]),e._v(" port.")]),e._v(" "),o("p",[e._v("Controllers that don't have an IO board usually label the (single) output port as "),o("code",[e._v("MAIN")]),e._v(", and this is where you will connect your DShot ESC.\nIf the controller without IO has its own firmware, the actuator assignment will be to the matching "),o("code",[e._v("PWM MAIN")]),e._v(" outputs.\nHowever if the same firmware is used for hardware with/without the IO board, such as for the Pixhawk 4 and Pixhawk 4 Mini, then actuator assignment tab used is the same in both cases: "),o("code",[e._v("PWM AUX")]),e._v(" (i.e. not matching the port label "),o("code",[e._v("MAIN")]),e._v(' in the "mini" case).')]),e._v(" "),o("h2",{attrs:{id:"configuration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),o("p",[e._v("Remove propellers before changing ESC configuration parameters!")])]),e._v(" "),o("p",[e._v("Enable DShot for your required outputs in the "),o("RouterLink",{attrs:{to:"/en/config/actuators.html"}},[e._v("Actuator Configuration")]),e._v(".")],1),e._v(" "),o("p",[e._v("DShot comes with different speed options: "),o("em",[e._v("DShot150")]),e._v(", "),o("em",[e._v("DShot300")]),e._v(", "),o("em",[e._v("DShot600")]),e._v(" and "),o("em",[e._v("DShot1200")]),e._v(", where the number indicates the speed in kilo-bits/second.\nYou should set the parameter to the highest speed supported by your ESC (according to its datasheet).")]),e._v(" "),o("p",[e._v("Then connect the battery and arm the vehicle.\nThe ESCs should initialize and the motors turn in the correct directions.")]),e._v(" "),o("ul",[o("li",[e._v("If the motors do not spin in the correct direction (for the "),o("RouterLink",{attrs:{to:"/en/airframes/airframe_reference.html"}},[e._v("selected airframe")]),e._v(") you can reverse them in the UI using the "),o("strong",[e._v("Set Spin Direction")]),e._v(" option (this option appears after you select DShot and assign motors).\nYou can also reverse motors by sending an "),o("a",{attrs:{href:"#commands"}},[e._v("ESC Command")]),e._v(".")],1)]),e._v(" "),o("p",[o("a",{attrs:{id:"commands"}})]),e._v(" "),o("h2",{attrs:{id:"esc-commands"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#esc-commands"}},[e._v("#")]),e._v(" ESC Commands")]),e._v(" "),o("p",[e._v("Commands can be sent to the ESC via the "),o("RouterLink",{attrs:{to:"/en/debug/mavlink_shell.html"}},[e._v("MAVLink shell")]),e._v(".\nSee "),o("RouterLink",{attrs:{to:"/en/modules/modules_driver.html#dshot"}},[e._v("here")]),e._v(" for a full reference of the supported commands.")],1),e._v(" "),o("p",[e._v("The most important ones are:")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Make the first motor beep (helps with identifying motors):")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("dshot beep1 -m 1\n")])])])]),e._v(" "),o("li",[o("p",[e._v("Retrieve ESC information (requires telemetry, see below):")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("nsh> dshot esc_info -m 2\nINFO  [dshot] ESC Type: #TEKKO32_4in1#\nINFO  [dshot] MCU Serial Number: xxxxxx-xxxxxx-xxxxxx-xxxxxx\nINFO  [dshot] Firmware version: 32.60\nINFO  [dshot] Rotation Direction: normal\nINFO  [dshot] 3D Mode: off\nINFO  [dshot] Low voltage Limit: off\nINFO  [dshot] Current Limit: off\nINFO  [dshot] LED 0: unsupported\nINFO  [dshot] LED 1: unsupported\nINFO  [dshot] LED 2: unsupported\nINFO  [dshot] LED 3: unsupported\n")])])]),o("ul",[o("li",[e._v("Permanently reverse the spin direction of the first motor:")])]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("dshot reverse -m 1\ndshot save -m 1\n")])])]),o("p",[e._v("Retrieving ESC information after the "),o("code",[e._v("dshot reverse -m 1")]),e._v(" command  without the "),o("code",[e._v("dshot save -m 1")]),e._v(" command will show:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("Rotation Direction: reversed\n")])])]),o("p",[e._v("after saving it with "),o("code",[e._v("dshot save -m 1")]),e._v(" command, reversed direction will become new normal direction:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("Rotation Direction: normal\n")])])]),o("p",[e._v("To change direction again new "),o("code",[e._v("dshot reverse -m 1")]),e._v(" command needs to be sent.")])])]),e._v(" "),o("h2",{attrs:{id:"telemetry"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#telemetry"}},[e._v("#")]),e._v(" Telemetry")]),e._v(" "),o("p",[e._v("Some ESCs are capable of sending telemetry back to the flight controller, including:")]),e._v(" "),o("ul",[o("li",[e._v("temperature")]),e._v(" "),o("li",[e._v("voltage")]),e._v(" "),o("li",[e._v("current")]),e._v(" "),o("li",[e._v("accumulated current consumption")]),e._v(" "),o("li",[e._v("RPM values")])]),e._v(" "),o("p",[e._v("These DShot ESCs will have an additional telemetry wire.")]),e._v(" "),o("p",[e._v("To enable this feature (on ESCs that support it):")]),e._v(" "),o("ol",[o("li",[e._v("Join all the telemetry wires from all the ESCs together, and then connect them to one of the RX pins on an unused flight controller serial port.")]),e._v(" "),o("li",[e._v("Enable telemetry on that serial port using "),o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#DSHOT_TEL_CFG"}},[e._v("DSHOT_TEL_CFG")]),e._v(".")],1)]),e._v(" "),o("p",[e._v("After a reboot you can check if telemetry is working (make sure the battery is connected) using:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("dshot esc_info -m 1\n")])])]),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),o("p",[e._v("You may have to configure "),o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MOT_POLE_COUNT"}},[e._v("MOT_POLE_COUNT")]),e._v(" to get the correct RPM values.")],1)]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),o("p",[e._v("Not all DSHOT-capable ESCs support "),o("code",[e._v("[esc_info]")]),e._v("(e.g. APD 80F3x), even when telemetry is supported and enabled.\nThe resulting error is:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("ERROR [dshot] No data received. If telemetry is setup correctly, try again.\n")])])]),o("p",[e._v("Check manufacturer documentation for confirmation/details.")])])])}),[],!1,null,null,null);t.default=s.exports}}]);