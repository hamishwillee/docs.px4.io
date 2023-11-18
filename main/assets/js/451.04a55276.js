(window.webpackJsonp=window.webpackJsonp||[]).push([[451],{1416:function(t,e,o){t.exports=o.p+"assets/img/pwm_cable.8ddf5400.png"},1417:function(t,e,o){t.exports=o.p+"assets/img/qgc_gripper_output_setup.3c448591.png"},3137:function(t,e,o){"use strict";o.r(e);var r=o(19),i=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"pwm-servo-gripper"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pwm-servo-gripper"}},[t._v("#")]),t._v(" PWM Servo Gripper")]),t._v(" "),r("p",[t._v("This section explains how to connect and configure a "),r("RouterLink",{attrs:{to:"/ko/peripherals/gripper.html"}},[t._v("gripper")]),t._v(" that is controlled using a flight controller PWM output (a servo actuator).")],1),t._v(" "),r("p",[r("img",{attrs:{src:o(417),alt:"R4-EM-R22-16: High-load gripper example"}})]),t._v(" "),r("h2",{attrs:{id:"supported-grippers"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#supported-grippers"}},[t._v("#")]),t._v(" Supported Grippers")]),t._v(" "),r("p",[t._v("The following PWM-connected servos have been tested with PX4:")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://southco.com/en_any_int/r4-em-r22-161",target:"_blank",rel:"noopener noreferrer"}},[t._v("R4-EM-R22-161 : push-to-close latch electronic lock"),r("OutboundLink")],1),t._v(".")])]),t._v(" "),r("h2",{attrs:{id:"connecting-a-pwm-controlled-gripper"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#connecting-a-pwm-controlled-gripper"}},[t._v("#")]),t._v(" Connecting a PWM-controlled Gripper")]),t._v(" "),r("p",[t._v("The PWM cable comprises of three lines: power, ground and signal. A typical connector is shown in the image below:")]),t._v(" "),r("p",[r("img",{attrs:{src:o(1416),alt:"PWM Cable"}})]),t._v(" "),r("p",[t._v("In the image above the wire colors have the following meanings:")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Wire color")]),t._v(" "),r("th",[t._v("Purpose")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("Brown")]),t._v(" "),r("td",[t._v("Ground")])]),t._v(" "),r("tr",[r("td",[t._v("Red")]),t._v(" "),r("td",[t._v("Power")])]),t._v(" "),r("tr",[r("td",[t._v("Yellow")]),t._v(" "),r("td",[t._v("PWM Signal")])])])]),t._v(" "),r("p",[t._v("You would need to connect them into a PWM input of the Flight controller appropriately.")]),t._v(" "),r("h3",{attrs:{id:"compatibility-checks"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#compatibility-checks"}},[t._v("#")]),t._v(" Compatibility Checks")]),t._v(" "),r("p",[t._v("Before connecting the cable, double-check the following requirements:")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("Signal line voltage level")]),t._v(": Check the data-sheet of your gripper mechanism to find the voltage level of the signal line. And make sure this is compatible with the voltage level of the pins of your Flight Controller.")]),t._v(" "),r("li",[r("strong",[t._v("Power requirements of gripper")]),t._v(": Check the mechanism's data-sheet to find out the power line voltage level requirements. Depending on that, the gripper can be either connected directly to the "),r("RouterLink",{attrs:{to:"/ko/power_module/"}},[t._v("power module")]),t._v(" or connected to a 5V line. Alternatively a custom voltage regulator can be used to output any other voltage required.")],1)]),t._v(" "),r("h2",{attrs:{id:"px4-configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#px4-configuration"}},[t._v("#")]),t._v(" PX4 Configuration")]),t._v(" "),r("p",[t._v("Configuration instructions can be found in: "),r("RouterLink",{attrs:{to:"/ko/peripherals/gripper.html#px4-configuration"}},[t._v("Gripper > PX4 Configuration")]),t._v(" documentation.")],1),t._v(" "),r("p",[t._v("In particular, note that a servo gripper must be mapped to an output as shown below.")]),t._v(" "),r("h3",{attrs:{id:"actuator-mapping"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#actuator-mapping"}},[t._v("#")]),t._v(" Actuator Mapping")]),t._v(" "),r("p",[t._v("PWM servo grippers, and other peripherals connected directly to PWM outputs, must be mapped to specific outputs during "),r("RouterLink",{attrs:{to:"/ko/config/actuators.html#actuator-outputs"}},[t._v("Actuator Configuration")]),t._v(".")],1),t._v(" "),r("p",[t._v("This is done by assigning the "),r("code",[t._v("Gripper")]),t._v(" function to the to the output port where the gripper is connected. For example, the image below assigns "),r("code",[t._v("Gripper")]),t._v(" to the PWM AUX5 output.")]),t._v(" "),r("p",[r("img",{attrs:{src:o(1417),alt:"Gripper output mapping"}})]),t._v(" "),r("p",[t._v("You must also set the correct PWM frequency for the gripper output port(for commercial servos / grippers this is normally 50Hz).")]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("Mis-configuring the frequency may damaging the gripper.")])]),t._v(" "),r("p",[t._v("The sliders in the "),r("RouterLink",{attrs:{to:"/ko/config/actuators.html#actuator-testing"}},[t._v("Actuator Testing")]),t._v(" section of the configuration screen can be used to verify that the correct output moves when you move the slider. The minimum and maximum PWM values should be set such that the servo is fully closed in the disarmed position and fully open at the maximum slider position.")],1)])}),[],!1,null,null,null);e.default=i.exports},417:function(t,e,o){t.exports=o.p+"assets/img/highload_gripper_example.c1dc2b0f.jpg"}}]);