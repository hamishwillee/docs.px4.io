(window.webpackJsonp=window.webpackJsonp||[]).push([[543],{1236:function(e,t,o){e.exports=o.p+"assets/img/pwm_without_gnd.bbd42d24.png"},1767:function(e,t,o){"use strict";o.r(t);var s=o(18),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"pwm-servos-and-escs-motor-controllers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pwm-servos-and-escs-motor-controllers"}},[e._v("#")]),e._v(" PWM Servos and ESCs (Motor Controllers)")]),e._v(" "),s("p",[e._v("This section describes how to connect and power PWM-based brushless motor controllers and servos.")]),e._v(" "),s("h2",{attrs:{id:"esc-connection-overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#esc-connection-overview"}},[e._v("#")]),e._v(" ESC Connection Overview")]),e._v(" "),s("p",[e._v("Each PWM Electronic Speed Controller (ESC) minimally has the following wires:")]),e._v(" "),s("ul",[s("li",[e._v("Power VBAT (usually thick and red)")]),e._v(" "),s("li",[e._v("Power GND (usually thick and black)")])]),e._v(" "),s("p",[e._v("And on the servo plug:")]),e._v(" "),s("ul",[s("li",[e._v("PWM signal (usually white or yellow)")]),e._v(" "),s("li",[e._v("GND (usually black or brown)")])]),e._v(" "),s("p",[e._v("The servo plug "),s("em",[e._v("may")]),e._v(" also have a +5V wire (usually red or orange).\nThe purpose of this wire and how it is connected depends on particular ESC and vehicle type.")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("In some cases (see below)the +5V line is not needed.\nInstead of cutting the +5V line you can gently lift of the locking tab of the plastic housing of the servo connector for that pin (e.g. using a cutter blade or small screw driver) and pull the pin out.\nIsolate it with electrical isolation tape and tape it to the servo cable.\nThis allows you to easily undo the wire later if needed.")])]),e._v(" "),s("h2",{attrs:{id:"power-connections"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#power-connections"}},[e._v("#")]),e._v(" Power Connections")]),e._v(" "),s("p",[e._v("Always connect Power VBAT and GND to the battery, and the PWM signal and GND from the servo plug to the motor.")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("There is "),s("strong",[e._v("no setup")]),e._v(" that does not require signal ground to be connected!")])]),e._v(" "),s("p",[e._v("The connection to the +5V wire (if present) depends on the ESC/Vehicle.")]),e._v(" "),s("h3",{attrs:{id:"fixed-wing-vtol"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fixed-wing-vtol"}},[e._v("#")]),e._v(" Fixed Wing / VTOL")]),e._v(" "),s("p",[e._v("On a fixed wing (or VTOL) ESC, the +5V line usually provides the output of a Battery Elimination Circuit (BEC).")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("This can be connected to the Pixhawk servo rail and used to power servos for flaps, ailerons etc.")]),e._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),s("p",[e._v("It is unsafe to power servos or ESCs from the autopilot's avionics power supply.\nThis is why "),s("strong",[e._v("Pixhawk series")]),e._v(" flight controllers do not provide power for the servo rail (the AUX servo rail is unpowered and is limited to 1A).")])])]),e._v(" "),s("li",[s("p",[e._v("As a rule of thumb you should only connect the "),s("em",[e._v("output of only one BEC")]),e._v(" to the Pixhawk servo rail.\n(while it may be possible to connect multiple +5V outputs to the rail, this depends on the ESC model).")])])]),e._v(" "),s("h3",{attrs:{id:"multicopter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#multicopter"}},[e._v("#")]),e._v(" Multicopter")]),e._v(" "),s("p",[e._v("On a multicopter, the +5V line might not be present or (if present) may not be connected.")]),e._v(" "),s("ul",[s("li",[e._v("Multicopters often do not need servos, and hence do not need to power the Pixhawk servo rail (motors are usually separately powered from a power distribution board).")]),e._v(" "),s("li",[e._v("There is no harm (or benefit) in connecting the wire to the servo rail.")]),e._v(" "),s("li",[e._v("DJI ESCs typically include this wire, but it is not connected.")])]),e._v(" "),s("h3",{attrs:{id:"opto-isolated-esc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#opto-isolated-esc"}},[e._v("#")]),e._v(" Opto-isolated ESC")]),e._v(" "),s("p",[e._v("On an opto-isolated ESC "),s("strong",[e._v("without")]),e._v(" BEC, the +5V line might need to be connected and powered (in order to provide power to the ESC microcontroller).\nIn this case the wire will normally be connected to the flight controller servo rail, and the servo rail must be powered from an additional BEC.")]),e._v(" "),s("h2",{attrs:{id:"pwm-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pwm-configuration"}},[e._v("#")]),e._v(" PWM Configuration")]),e._v(" "),s("p",[e._v("The PX4 PWM configuration parameters can be found here: "),s("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#pwm-outputs"}},[e._v("PWM Outputs")]),e._v(".")],1),e._v(" "),s("h2",{attrs:{id:"troubleshooting"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[e._v("#")]),e._v(" Troubleshooting")]),e._v(" "),s("p",[e._v("Pixhawk is compatible with all "),s("em",[e._v("PWM ESCs")]),e._v(" on the market.\nIf a particular ESC is not operational, it is incorrectly wired up or configured.")]),e._v(" "),s("h3",{attrs:{id:"ground-connection"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ground-connection"}},[e._v("#")]),e._v(" Ground Connection")]),e._v(" "),s("p",[e._v("Check that the ground (black wire) of the ESC servo connector is connected to Pixhawk (there is no valid wiring setup that does not have a ground reference).")]),e._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),s("p",[e._v("It is unsafe to fly without ground connected.\nThis is because for every positive pulse (the ESC signal) there needs to be an adjacent ground return path for a clean signal shape.")]),e._v(" "),s("p",[e._v("The image below shows how noisy the signal becomes if GND is not connected.")]),e._v(" "),s("p",[s("img",{attrs:{src:o(1236),alt:"PWM without ground"}})])]),e._v(" "),s("h3",{attrs:{id:"power-connection-opto-isolated-escs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#power-connection-opto-isolated-escs"}},[e._v("#")]),e._v(" Power Connection / Opto-isolated ESCs")]),e._v(" "),s("p",[e._v("If using an opto-isolated ESC that does not provide a BEC / power output, please ensure that the ESC does not need its +5V line powered for the opto-isolator.")]),e._v(" "),s("p",[e._v("See the first section of this page explains for other power connection considerations.")]),e._v(" "),s("h3",{attrs:{id:"invalid-minimum-value"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#invalid-minimum-value"}},[e._v("#")]),e._v(" Invalid Minimum Value")]),e._v(" "),s("p",[e._v("Some ESCs need to see a special low value pulse before switching on (to protect users who have the throttle stick in the middle position on power-up).")]),e._v(" "),s("p",[e._v("PX4 sends a value of "),s("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#PWM_DISARMED"}},[e._v("PWM_DISARMED")]),e._v(" pulse when the vehicle is disarmed, which silences the ESCs when they are disarmed and ensures that ESCs initialise correctly.")],1),e._v(" "),s("p",[e._v("This value should be set correctly for the ESC (correct values vary between roughly 1200 and 900 us).")]),e._v(" "),s("h3",{attrs:{id:"timeout"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#timeout"}},[e._v("#")]),e._v(" Timeout")]),e._v(" "),s("p",[e._v("Some ESCs may time out (preventing motor activation) if they have not received a valid low pulse within a few seconds of power on.")]),e._v(" "),s("p",[e._v("PX4 flight stack sends the "),s("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#PWM_DISARMED"}},[e._v("PWM_DISARMED")]),e._v(" pulse idle/disarmed pulse right after power on.\nProvided this is configured correctly, ESCs will not time out.")],1),e._v(" "),s("h3",{attrs:{id:"valid-pulse-shape-voltage-and-update-rate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#valid-pulse-shape-voltage-and-update-rate"}},[e._v("#")]),e._v(" Valid Pulse Shape, Voltage and Update Rate")]),e._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),s("p",[e._v("This should not be a problem, but is included for completeness")])]),e._v(" "),s("p",[e._v("Pixhawk uses active high pulses, as used by all the major brands (Futaba, Spektrum, FrSky).")]),e._v(" "),s("p",[e._v("PWM interfaces are not formally standardised, however, the normal micro controllers all use TTL or CMOS voltage levels.\nTTL is defined as low < 0.8V and high > 2.0V with some manufacturers using > 2.4V for additional noise margin.\nCMOS logic is defined with similar voltage levels.\n5V levels are "),s("strong",[e._v("never")]),e._v(" required to successfully switch to an "),s("em",[e._v("on")]),e._v(" state.")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("Futaba, FrSky and Spektrum receivers output 3.3V or 3.0V voltage levels, as they are well above 2.4V.\nPixhawk has adopted this common industry pattern and outputs 3.3V levels on recent boards.")])])])}),[],!1,null,null,null);t.default=a.exports}}]);