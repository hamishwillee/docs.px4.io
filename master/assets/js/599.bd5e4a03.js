(window.webpackJsonp=window.webpackJsonp||[]).push([[599],{1228:function(e,t,o){e.exports=o.p+"assets/img/pwm_without_gnd.bbd42d24.png"},2139:function(e,t,o){"use strict";o.r(t);var r=o(18),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"pwm-servos-and-escs-motor-controllers"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pwm-servos-and-escs-motor-controllers"}},[e._v("#")]),e._v(" PWM Servos and ESCs (Motor Controllers)")]),e._v(" "),r("p",[e._v("This section describes how to connect and power PWM-based brushless motor controllers and servos.")]),e._v(" "),r("h2",{attrs:{id:"esc-connection-overview"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#esc-connection-overview"}},[e._v("#")]),e._v(" ESC Connection Overview")]),e._v(" "),r("p",[e._v("Each PWM Electronic Speed Controller (ESC) minimally has the following wires:")]),e._v(" "),r("ul",[r("li",[e._v("Power VBAT (usually thick and red)")]),e._v(" "),r("li",[e._v("Power GND (usually thick and black)")])]),e._v(" "),r("p",[e._v("And on the servo plug:")]),e._v(" "),r("ul",[r("li",[e._v("PWM signal (usually white or yellow)")]),e._v(" "),r("li",[e._v("GND (usually black or brown)")])]),e._v(" "),r("p",[e._v("The servo plug "),r("em",[e._v("may")]),e._v(" also have a +5V wire (usually red or orange). The purpose of this wire and how it is connected depends on particular ESC and vehicle type.")]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Tip")]),e._v(" In some cases (see below)the +5V line is not needed. Instead of cutting the +5V line you can gently lift of the locking tab of the plastic housing of the servo connector for that pin (e.g. using a cutter blade or small screw driver) and pull the pin out. Isolate it with electrical isolation tape and tape it to the servo cable. This allows you to easily undo the wire later if needed.")])]),e._v(" "),r("h2",{attrs:{id:"power-connections"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#power-connections"}},[e._v("#")]),e._v(" Power Connections")]),e._v(" "),r("p",[e._v("Always connect Power VBAT and GND to the battery, and the PWM signal and GND from the servo plug to the motor.")]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Tip")]),e._v(" There is "),r("strong",[e._v("no setup")]),e._v(" that does not require signal ground to be connected!")])]),e._v(" "),r("p",[e._v("The connection to the +5V wire (if present) depends on the ESC/Vehicle.")]),e._v(" "),r("h3",{attrs:{id:"fixed-wing-vtol"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#fixed-wing-vtol"}},[e._v("#")]),e._v(" Fixed Wing / VTOL")]),e._v(" "),r("p",[e._v("On a fixed wing (or VTOL) ESC, the +5V line usually provides the output of a Battery Elimination Circuit (BEC).")]),e._v(" "),r("ul",[r("li",[e._v("This can be connected to the Pixhawk servo rail and used to power servos for flaps, ailerons etc. > "),r("strong",[e._v("Note")]),e._v(" It is unsafe to power servos or ESCs from the autopilot's avionics power supply. This is why "),r("strong",[e._v("Pixhawk series")]),e._v(" flight controllers do not provide power for the servo rail (the AUX servo rail is unpowered and is limited to 1A).")]),e._v(" "),r("li",[e._v("As a rule of thumb you should only connect the "),r("em",[e._v("output of only one BEC")]),e._v(" to the Pixhawk servo rail. (while it may be possible to connect multiple +5V outputs to the rail, this depends on the ESC model).")])]),e._v(" "),r("h3",{attrs:{id:"multicopter"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#multicopter"}},[e._v("#")]),e._v(" Multicopter")]),e._v(" "),r("p",[e._v("On a multicopter, the +5V line might not be present or (if present) may not be connected.")]),e._v(" "),r("ul",[r("li",[e._v("Multicopters often do not need servos, and hence do not need to power the Pixhawk servo rail (motors are usually separately powered from a power distribution board).")]),e._v(" "),r("li",[e._v("There is no harm (or benefit) in connecting the wire to the servo rail.")]),e._v(" "),r("li",[e._v("DJI ESCs typically include this wire, but it is not connected.")])]),e._v(" "),r("h3",{attrs:{id:"opto-isolated-esc"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#opto-isolated-esc"}},[e._v("#")]),e._v(" Opto-isolated ESC")]),e._v(" "),r("p",[e._v("On an opto-isolated ESC "),r("strong",[e._v("without")]),e._v(" BEC, the +5V line might need to be connected and powered (in order to provide power to the ESC microcontroller). In this case the wire will normally be connected to the flight controller servo rail, and the servo rail must be powered from an additional BEC.")]),e._v(" "),r("h2",{attrs:{id:"pwm-configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pwm-configuration"}},[e._v("#")]),e._v(" PWM Configuration")]),e._v(" "),r("p",[e._v("The PX4 PWM configuration parameters can be found here: "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#pwm-outputs"}},[e._v("PWM Outputs")]),e._v(".")],1),e._v(" "),r("h2",{attrs:{id:"troubleshooting"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[e._v("#")]),e._v(" Troubleshooting")]),e._v(" "),r("p",[e._v("Pixhawk is compatible with all "),r("em",[e._v("PWM ESCs")]),e._v(" on the market. If a particular ESC is not operational, it is incorrectly wired up or configured.")]),e._v(" "),r("h3",{attrs:{id:"ground-connection"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ground-connection"}},[e._v("#")]),e._v(" Ground Connection")]),e._v(" "),r("p",[e._v("Check that the ground (black wire) of the ESC servo connector is connected to Pixhawk (there is no valid wiring setup that does not have a ground reference).")]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Warning")]),e._v(" It is unsafe to fly without ground connected. This is because for every positive pulse (the ESC signal) there needs to be an adjacent ground return path for a clean signal shape.")])]),e._v(" "),r("p",[e._v("The image below shows how noisy the signal becomes if GND is not connected.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(1228),alt:"PWM without ground"}})]),e._v(" "),r("h3",{attrs:{id:"power-connection-opto-isolated-escs"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#power-connection-opto-isolated-escs"}},[e._v("#")]),e._v(" Power Connection / Opto-isolated ESCs")]),e._v(" "),r("p",[e._v("If using an opto-isolated ESC that does not provide a BEC / power output, please ensure that the ESC does not need its +5V line powered for the opto-isolator.")]),e._v(" "),r("p",[e._v("See the first section of this page explains for other power connection considerations.")]),e._v(" "),r("h3",{attrs:{id:"invalid-minimum-value"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#invalid-minimum-value"}},[e._v("#")]),e._v(" Invalid Minimum Value")]),e._v(" "),r("p",[e._v("Some ESCs need to see a special low value pulse before switching on (to protect users who have the throttle stick in the middle position on power-up).")]),e._v(" "),r("p",[e._v("PX4 sends a value of "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#PWM_DISARMED"}},[e._v("PWM_DISARMED")]),e._v(" pulse when the vehicle is disarmed, which silences the ESCs when they are disarmed and ensures that ESCs initialise correctly.")],1),e._v(" "),r("p",[e._v("This value should be set correctly for the ESC (correct values vary between roughly 1200 and 900 us).")]),e._v(" "),r("h3",{attrs:{id:"timeout"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#timeout"}},[e._v("#")]),e._v(" Timeout")]),e._v(" "),r("p",[e._v("Some ESCs may time out (preventing motor activation) if they have not received a valid low pulse within a few seconds of power on.")]),e._v(" "),r("p",[e._v("PX4 flight stack sends the "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#PWM_DISARMED"}},[e._v("PWM_DISARMED")]),e._v(" pulse idle/disarmed pulse right after power on. Provided this is configured correctly, ESCs will not time out.")],1),e._v(" "),r("h3",{attrs:{id:"valid-pulse-shape-voltage-and-update-rate"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#valid-pulse-shape-voltage-and-update-rate"}},[e._v("#")]),e._v(" Valid Pulse Shape, Voltage and Update Rate")]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Note")]),e._v(" This should not be a problem, but is included for completeness")])]),e._v(" "),r("p",[e._v("Pixhawk uses active high pulses, as used by all the major brands (Futaba, Spektrum, FrSky).")]),e._v(" "),r("p",[e._v("PWM interfaces are not formally standardised, however, the normal micro controllers all use TTL or CMOS voltage levels. TTL is defined as low < 0.8V and high > 2.0V with some manufacturers using > 2.4V for additional noise margin. CMOS logic is defined with similar voltage levels. 5V levels are "),r("strong",[e._v("never")]),e._v(" required to successfully switch to an "),r("em",[e._v("on")]),e._v(" state.")]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Tip")]),e._v(" Futaba, FrSky and Spektrum receivers output 3.3V or 3.0V voltage levels, as they are well above 2.4V. Pixhawk has adopted this common industry pattern and outputs 3.3V levels on recent boards.")])])])}),[],!1,null,null,null);t.default=s.exports}}]);