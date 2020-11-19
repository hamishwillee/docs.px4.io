(window.webpackJsonp=window.webpackJsonp||[]).push([[724],{1473:function(t,e,o){"use strict";o.r(e);var a=o(18),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"custom-payload-mixers"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#custom-payload-mixers"}},[t._v("#")]),t._v(" Custom Payload Mixers")]),t._v(" "),o("p",[t._v("This topic shows how to add a custom "),o("RouterLink",{attrs:{to:"/en/concept/mixing.html"}},[t._v("mixer")]),t._v(" for programmatically controlling a custom payload (e.g., an electromagnetic gripper).")],1),t._v(" "),o("p",[t._v("The topic is intended for developers who want to support payload types that do not have existing control group definitions (e.g. gimbals have a control group, but grippers do not).\nYou should already have read "),o("RouterLink",{attrs:{to:"/en/concept/mixing.html"}},[t._v("Mixing and Actuators")]),t._v(".")],1),t._v(" "),o("h2",{attrs:{id:"payload-mixer-example"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#payload-mixer-example"}},[t._v("#")]),t._v(" Payload Mixer Example")]),t._v(" "),o("p",[t._v("A payload mixer is just a "),o("RouterLink",{attrs:{to:"/en/concept/mixing.html#summing_mixer"}},[t._v("summing mixer")]),t._v(" that maps any of the function values from "),o("RouterLink",{attrs:{to:"/en/concept/mixing.html#control_group_6"}},[t._v("Control Group #6 (First Payload)")]),t._v(" to a particular output.\nYou can then publish uORB topics to the selected control group function and their value will be mapped to the specified output.")],1),t._v(" "),o("p",[t._v("For this example, we'll create a custom mixer based on the "),o("em",[t._v("RC passthrough mixer")]),t._v(" ("),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/ROMFS/px4fmu_common/mixers/pass.aux.mix",target:"_blank",rel:"noopener noreferrer"}},[t._v("pass.aux.mix"),o("OutboundLink")],1),t._v(").\nThis mixer is commonly loaded into the AUX PWM ports on large multicopters).\nIt passes through the values of 4 user-defined RC channels (set using the "),o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#RC_MAP_AUX1"}},[t._v("RC_MAP_AUXx/RC_MAP_FLAPS")]),t._v(" parameters) to the first four outputs on the AUX PWM output.")],1),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("# Manual pass through mixer for servo outputs 1-4\n\n# AUX1 channel (select RC channel with RC_MAP_AUX1 param)\nM: 1\nS: 3 5  10000  10000      0 -10000  10000\n\n# AUX2 channel (select RC channel with RC_MAP_AUX2 param)\nM: 1\nS: 3 6  10000  10000      0 -10000  10000\n\n# AUX3 channel (select RC channel with RC_MAP_AUX3 param)\nM: 1\nS: 3 7  10000  10000      0 -10000  10000\n\n# FLAPS channel (select RC channel with RC_MAP_FLAPS param)\nM: 1\nS: 3 4  10000  10000      0 -10000  10000\n")])])]),o("blockquote",[o("p",[o("strong",[t._v("Note")]),t._v(" The file defines four "),o("RouterLink",{attrs:{to:"/en/concept/mixing.html#summing_mixer"}},[t._v("summing mixers")]),t._v(" (for four outputs).")],1),t._v(" "),o("ul",[o("li",[o("code",[t._v("M: 1")]),t._v(" indicates an output that is defined by one control input (the following "),o("code",[t._v("S")]),t._v(" line).")]),t._v(" "),o("li",[o("code",[t._v("S: 3")]),o("em",[o("code",[t._v("n")])]),t._v(" indicates that the input is the n<>th<> input of "),o("RouterLink",{attrs:{to:"/en/concept/mixing.html#control-group-3-manual-passthrough"}},[t._v("Control Group 3 (Manual Passthrough)")]),t._v(".\nSo for "),o("code",[t._v("S: 3 5")]),t._v(' the input is called "RC aux1" (this maps to the RC channel set in parameter '),o("code",[t._v("RC_MAP_AUX1")]),t._v(").")],1),t._v(" "),o("li",[t._v("The section declaration order defines the order of the outputs when assigned to a physical bus (e.g. the third section might be assigned to AUX3).")])])]),t._v(" "),o("p",[t._v("Start by copying the mixer file and putting it onto the SD Card at: "),o("strong",[t._v("/etc/mixers/pass.aux.mix")]),t._v(" (see "),o("RouterLink",{attrs:{to:"/en/concept/mixing.html#loading_custom_mixer"}},[t._v("Mixing and Actuators > Loading a Custom Mixer")]),t._v(".")],1),t._v(" "),o("p",[t._v("Remove the first section with a payload control group function input:")]),t._v(" "),o("ul",[o("li",[t._v("Change this:"),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("# AUX1 channel (control group 3, RC CH5) (select RC channel with RC_MAP_AUX1 param)\nM: 1\nS: 3 5  10000  10000      0 -10000  10000\n")])])])]),t._v(" "),o("li",[t._v("To:"),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("# Payload 1 (control group 6) channel 1\nM: 1\nS: 6 1  10000  10000      0 -10000  10000\n")])])])])]),t._v(" "),o("p",[t._v("Because this output is in the first position in the file it will map to the first AUX PWM output (unless UAVCAN is enabled).\nThis output will now respect updates to the payload control group (6) output 1.")]),t._v(" "),o("p",[t._v("Control group 6 will need to be defined in the code as well (it is missing!):")]),t._v(" "),o("ul",[o("li",[t._v("Add "),o("code",[t._v("actuator_controls_6")]),t._v(" to the TOPICS definition in "),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/msg/actuator_controls.msg#L17",target:"_blank",rel:"noopener noreferrer"}},[t._v("/msg/actuator_controls.msg"),o("OutboundLink")],1),t._v(":"),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("# TOPICS actuator_controls actuator_controls_0 actuator_controls_1 actuator_controls_2 actuator_controls_3 actuator_controls_6\n")])])])]),t._v(" "),o("li",[t._v("Increase "),o("code",[t._v("NUM_ACTUATOR_CONTROL_GROUPS")]),t._v(" to 7 in the same file.")]),t._v(" "),o("li",[t._v("Subscribe to the additional control group in the output library ("),o("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/lib/mixer_module/mixer_module.cpp#L52",target:"_blank",rel:"noopener noreferrer"}},[t._v("/src/lib/mixer_module/mixer_module.cpp#L52"),o("OutboundLink")],1),t._v(") in the "),o("code",[t._v("MixingOutput")]),t._v(" constructor.\nIt should look like this:"),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("  {&interface, ORB_ID(actuator_controls_0)},\n  {&interface, ORB_ID(actuator_controls_1)},\n  {&interface, ORB_ID(actuator_controls_2)},\n  {&interface, ORB_ID(actuator_controls_3)},\n")])])]),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("  {&interface, nullptr},\n  {&interface, nullptr},\n  {&interface, ORB_ID(actuator_controls_6)},\n")])])])])]),t._v(" "),o("p",[t._v("Putting an output on group 6 works by publishing actuator control group 6.\nFirst you have to create the publication.\nThis should happen once when the PX4 module is initialized (look for places where this pattern is already being used):")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("uORB::Publication<actuator_controls_s> _actuator_controls_pub{ORB_ID(actuator_controls_6)};\n")])])]),o("p",[t._v("Then you need to publish the first message:")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("actuator_controls_s _act_controls{};\n_act_controls.timestamp = hrt_absolute_time();\n// set the first output to 50% positive (this would rotate a servo halfway into one of its directions)\n_act_controls.control[0] = 0.5f;\n_actuator_controls_pub.publish(_act_controls);\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);