(window.webpackJsonp=window.webpackJsonp||[]).push([[492],{1471:function(t,e,r){t.exports=r.p+"assets/img/pwm_cable.d73cc2ca.png"},1472:function(t,e,r){t.exports=r.p+"assets/img/qgc_gripper_output_setup.489dee07.png"},3682:function(t,e,r){"use strict";r.r(e);var o=r(19),i=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"pwm-servo-gripper"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#pwm-servo-gripper"}},[t._v("#")]),t._v(" PWM Servo Gripper")]),t._v(" "),o("p",[t._v("This section explains how to connect and configure a "),o("RouterLink",{attrs:{to:"/zh/peripherals/gripper.html"}},[t._v("gripper")]),t._v(" that is controlled using a flight controller PWM output (a servo actuator).")],1),t._v(" "),o("p",[o("img",{attrs:{src:r(418),alt:"R4-EM-R22-16: High-load gripper example"}})]),t._v(" "),o("h2",{attrs:{id:"supported-grippers"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#supported-grippers"}},[t._v("#")]),t._v(" Supported Grippers")]),t._v(" "),o("p",[t._v("The following PWM-connected servos have been tested with PX4:")]),t._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://southco.com/en_any_int/r4-em-r22-161",target:"_blank",rel:"noopener noreferrer"}},[t._v("R4-EM-R22-161 : push-to-close latch electronic lock"),o("OutboundLink")],1),t._v(".")])]),t._v(" "),o("h2",{attrs:{id:"connecting-a-pwm-controlled-gripper"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#connecting-a-pwm-controlled-gripper"}},[t._v("#")]),t._v(" Connecting a PWM-controlled Gripper")]),t._v(" "),o("p",[t._v("The PWM cable comprises of three lines: power, ground and signal. A typical connector is shown in the image below:")]),t._v(" "),o("p",[o("img",{attrs:{src:r(1471),alt:"PWM Cable"}})]),t._v(" "),o("p",[t._v("In the image above the wire colors have the following meanings:")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("Wire color")]),t._v(" "),o("th",[t._v("Purpose")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("Brown")]),t._v(" "),o("td",[t._v("Ground")])]),t._v(" "),o("tr",[o("td",[t._v("Red")]),t._v(" "),o("td",[t._v("Power")])]),t._v(" "),o("tr",[o("td",[t._v("Yellow")]),t._v(" "),o("td",[t._v("PWM Signal")])])])]),t._v(" "),o("p",[t._v("You would need to connect them into a PWM input of the Flight controller appropriately.")]),t._v(" "),o("h3",{attrs:{id:"compatibility-checks"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#compatibility-checks"}},[t._v("#")]),t._v(" Compatibility Checks")]),t._v(" "),o("p",[t._v("Before connecting the cable, double-check the following requirements:")]),t._v(" "),o("ul",[o("li",[o("strong",[t._v("Signal line voltage level")]),t._v(": Check the data-sheet of your gripper mechanism to find the voltage level of the signal line. And make sure this is compatible with the voltage level of the pins of your Flight Controller.")]),t._v(" "),o("li",[o("strong",[t._v("Power requirements of gripper")]),t._v(": Check the mechanism's data-sheet to find out the power line voltage level requirements. Depending on that, the gripper can be either connected directly to the "),o("RouterLink",{attrs:{to:"/zh/power_module/"}},[t._v("power module")]),t._v(" or connected to a 5V line. Alternatively a custom voltage regulator can be used to output any other voltage required.")],1)]),t._v(" "),o("h2",{attrs:{id:"px4-configuration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#px4-configuration"}},[t._v("#")]),t._v(" PX4 Configuration")]),t._v(" "),o("p",[t._v("Configuration instructions can be found in: "),o("RouterLink",{attrs:{to:"/zh/peripherals/gripper.html#px4-configuration"}},[t._v("Gripper > PX4 Configuration")]),t._v(" documentation.")],1),t._v(" "),o("p",[t._v("In particular, note that a servo gripper must be mapped to an output as shown below.")]),t._v(" "),o("h3",{attrs:{id:"actuator-mapping"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#actuator-mapping"}},[t._v("#")]),t._v(" Actuator Mapping")]),t._v(" "),o("p",[t._v("PWM servo grippers, and other peripherals connected directly to PWM outputs, must be mapped to specific outputs during "),o("RouterLink",{attrs:{to:"/zh/config/actuators.html#actuator-outputs"}},[t._v("Actuator Configuration")]),t._v(".")],1),t._v(" "),o("p",[t._v("This is done by assigning the "),o("code",[t._v("Gripper")]),t._v(" function to the to the output port where the gripper is connected. For example, the image below assigns "),o("code",[t._v("Gripper")]),t._v(" to the PWM AUX5 output.")]),t._v(" "),o("p",[o("img",{attrs:{src:r(1472),alt:"Gripper output mapping"}})]),t._v(" "),o("p",[t._v("You must also set the correct PWM frequency for the gripper output port(for commercial servos / grippers this is normally 50Hz).")]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),o("p",[t._v("Mis-configuring the frequency may damaging the gripper.")])]),t._v(" "),o("p",[t._v("The sliders in the "),o("RouterLink",{attrs:{to:"/zh/config/actuators.html#actuator-testing"}},[t._v("Actuator Testing")]),t._v(" section of the configuration screen can be used to verify that the correct output moves when you move the slider. The minimum and maximum PWM values should be set such that the servo is fully closed in the disarmed position and fully open at the maximum slider position.")],1)])}),[],!1,null,null,null);e.default=i.exports},418:function(t,e,r){t.exports=r.p+"assets/img/highload_gripper_example.b5f59e80.jpg"}}]);