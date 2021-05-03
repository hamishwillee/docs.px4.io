(window.webpackJsonp=window.webpackJsonp||[]).push([[515],{1575:function(e,t,a){"use strict";a.r(t);var n=a(18),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"adding-a-new-airframe-configuration"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#adding-a-new-airframe-configuration"}},[e._v("#")]),e._v(" Adding a New Airframe Configuration")]),e._v(" "),n("p",[e._v("PX4 uses canned airframe configurations as starting point for airframes.\nThe configurations are defined in "),n("a",{attrs:{href:"#config-file"}},[e._v("config files")]),e._v(" that are stored in the "),n("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/ROMFS/px4fmu_common/init.d",target:"_blank",rel:"noopener noreferrer"}},[e._v("ROMFS/px4fmu_common/init.d"),n("OutboundLink")],1),e._v(" folder.\nThe config files reference "),n("a",{attrs:{href:"#mixer-file"}},[e._v("mixer files")]),e._v(" that describe the physical configuration of the system, and which are stored in the "),n("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/ROMFS/px4fmu_common/mixers",target:"_blank",rel:"noopener noreferrer"}},[e._v("ROMFS/px4fmu_common/mixers"),n("OutboundLink")],1),e._v(" folder.")]),e._v(" "),n("p",[e._v("Adding a configuration is straightforward: create a new config file in the "),n("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/ROMFS/px4fmu_common/init.d/airframes",target:"_blank",rel:"noopener noreferrer"}},[e._v("init.d/airframes folder"),n("OutboundLink")],1),e._v(" (prepend the filename with an unused autostart ID), add the name of your new airframe config file to the "),n("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/ROMFS/px4fmu_common/init.d/airframes/CMakeLists.txt",target:"_blank",rel:"noopener noreferrer"}},[e._v("CMakeLists.txt"),n("OutboundLink")],1),e._v(" in the relevant section, then "),n("RouterLink",{attrs:{to:"/en/dev_setup/building_px4.html"}},[e._v("build and upload")]),e._v(" the software.")],1),e._v(" "),n("p",[e._v("Developers who do not want to create their own configuration can instead customize existing configurations using text files on the microSD card, as detailed on the "),n("RouterLink",{attrs:{to:"/en/concept/system_startup.html"}},[e._v("custom system startup")]),e._v(" page.")],1),e._v(" "),n("div",{staticClass:"custom-block note"},[n("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),n("p",[e._v("To determine which parameters/values need to be set in the configuration file, you can first assign a generic airframe and tune the vehicle, and then use "),n("RouterLink",{attrs:{to:"/en/modules/modules_command.html#param"}},[n("code",[e._v("param show-for-airframe")])]),e._v(" to list the parameters that changed.")],1)]),e._v(" "),n("h2",{attrs:{id:"configuration-file-overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#configuration-file-overview"}},[e._v("#")]),e._v(" Configuration File Overview")]),e._v(" "),n("p",[e._v("The configuration in the config and mixer files consists of several main blocks:")]),e._v(" "),n("ul",[n("li",[e._v("Airframe documentation (used in the "),n("RouterLink",{attrs:{to:"/en/airframes/airframe_reference.html"}},[e._v("Airframes Reference")]),e._v(" and "),n("em",[e._v("QGroundControl")]),e._v(").")],1),e._v(" "),n("li",[e._v("Vehicle-specific parameter settings, including "),n("a",{attrs:{href:"#tuning-gains"}},[e._v("tuning gains")]),e._v(".")]),e._v(" "),n("li",[e._v("The controllers and apps it should start, e.g. multicopter or fixed wing controllers, land detectors etc.")]),e._v(" "),n("li",[e._v("The physical configuration of the system (e.g. a plane, wing or multicopter). This is called a "),n("RouterLink",{attrs:{to:"/en/concept/mixing.html"}},[e._v("mixer")]),e._v(".")],1)]),e._v(" "),n("p",[e._v("These aspects are mostly independent, which means that many configurations share the same physical layout of the airframe, start the same applications and differ most in their tuning gains.")]),e._v(" "),n("div",{staticClass:"custom-block note"},[n("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),n("p",[e._v("New airframe files are only automatically added to the build system after a clean build (run "),n("code",[e._v("make clean")]),e._v(").")])]),e._v(" "),n("p",[n("a",{attrs:{id:"config-file"}})]),e._v(" "),n("h3",{attrs:{id:"config-file"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#config-file"}},[e._v("#")]),e._v(" Config File")]),e._v(" "),n("p",[e._v("A typical configuration file is shown below ("),n("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/ROMFS/px4fmu_common/init.d/airframes/3033_wingwing",target:"_blank",rel:"noopener noreferrer"}},[e._v("original file here"),n("OutboundLink")],1),e._v(").")]),e._v(" "),n("p",[e._v("The first section is the airframe documentation.\nThis is used in the "),n("RouterLink",{attrs:{to:"/en/airframes/airframe_reference.html"}},[e._v("Airframes Reference")]),e._v(" and "),n("em",[e._v("QGroundControl")]),e._v(".")],1),e._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token shebang important"}},[e._v("#!/bin/sh")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# @name Wing Wing (aka Z-84) Flying Wing")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# @url https://docs.px4.io/master/en/frames_plane/wing_wing_z84.html")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# @type Flying Wing")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# @class Plane")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# @output MAIN1 left aileron")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# @output MAIN2 right aileron")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# @output MAIN4 throttle")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# @output AUX1 feed-through of RC AUX1 channel")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# @output AUX2 feed-through of RC AUX2 channel")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# @output AUX3 feed-through of RC AUX3 channel")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# @maintainer Lorenz Meier <lorenz@px4.io>")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# @board px4_fmu-v2 exclude")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# @board bitcraze_crazyflie exclude")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#")]),e._v("\n")])])]),n("p",[e._v("The next section specifies vehicle-specific parameters, including "),n("a",{attrs:{href:"#tuning-gains"}},[e._v("tuning gains")]),e._v(":")]),e._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${R}")]),e._v("etc/init.d/rc.fw_defaults\n\nparam set-default BAT_N_CELLS "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v("\nparam set-default FW_AIRSPD_MAX "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("15")]),e._v("\nparam set-default FW_AIRSPD_MIN "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("10")]),e._v("\nparam set-default FW_AIRSPD_TRIM "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("13")]),e._v("\nparam set-default FW_R_TC "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.3")]),e._v("\nparam set-default FW_P_TC "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.3")]),e._v("\nparam set-default FW_L1_DAMPING "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.74")]),e._v("\nparam set-default FW_L1_PERIOD "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("16")]),e._v("\nparam set-default FW_LND_ANG "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("15")]),e._v("\nparam set-default FW_LND_FLALT "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("5")]),e._v("\nparam set-default FW_LND_HHDIST "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("15")]),e._v("\nparam set-default FW_LND_HVIRT "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("13")]),e._v("\nparam set-default FW_LND_TLALT "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("5")]),e._v("\nparam set-default FW_THR_LND_MAX "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("\nparam set-default FW_PR_FF "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.35")]),e._v("\nparam set-default FW_RR_FF "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.6")]),e._v("\nparam set-default FW_RR_P "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.04")]),e._v("\n\nparam set-default PWM_MAIN_DISARM "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("1000")]),e._v("\n")])])]),n("p",[e._v("Set frame type ("),n("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_TYPE",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAV_TYPE"),n("OutboundLink")],1),e._v("):")]),e._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Configure this as plane")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("set")]),e._v(" MAV_TYPE "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\n")])])]),n("p",[e._v("Set the "),n("a",{attrs:{href:"#mixer-file"}},[e._v("mixer")]),e._v(" to use:")]),e._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Set mixer")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("set")]),e._v(" MIXER wingwing\n")])])]),n("p",[e._v("Configure PWM outputs (specify the outputs to drive/activate, and the levels).")]),e._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("set")]),e._v(" PWM_OUT "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("4")]),e._v("\n")])])]),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),n("p",[e._v("If you want to reverse a channel, never do this on your RC transmitter or with e.g "),n("code",[e._v("RC1_REV")]),e._v(".\nThe channels are only reversed when flying in manual mode, when you switch in an autopilot flight mode, the channels output will still be wrong (it only inverts your RC signal).\nThus for a correct channel assignment change either your PWM signals with "),n("code",[e._v("PWM_MAIN_REV1")]),e._v(" (e.g. for channel one) or change the signs of the output scaling in the corresponding mixer (see below).")])]),e._v(" "),n("p",[n("a",{attrs:{id:"mixer-file"}})]),e._v(" "),n("h3",{attrs:{id:"mixer-file"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mixer-file"}},[e._v("#")]),e._v(" Mixer File")]),e._v(" "),n("div",{staticClass:"custom-block note"},[n("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),n("p",[e._v("First read "),n("RouterLink",{attrs:{to:"/en/concept/mixing.html"}},[e._v("Concepts > Mixing")]),e._v(".\nThis provides background information required to interpret this mixer file.")],1)]),e._v(" "),n("p",[e._v("A typical mixer file is shown below ("),n("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/ROMFS/px4fmu_common/mixers/wingwing.main.mix",target:"_blank",rel:"noopener noreferrer"}},[e._v("original file here"),n("OutboundLink")],1),e._v(").\nA mixer filename, in this case "),n("code",[e._v("wingwing.main.mix")]),e._v(", gives important information about the type of airframe ("),n("code",[e._v("wingwing")]),e._v("), the type of output ("),n("code",[e._v(".main")]),e._v(" or "),n("code",[e._v(".aux")]),e._v(") and lastly that it is a mixer file ("),n("code",[e._v(".mix")]),e._v(").")]),e._v(" "),n("p",[e._v("The mixer file contains several blocks of code, each of which refers to one actuator or ESC.\nSo if you have e.g. two servos and one ESC, the mixer file will contain three blocks of code.")]),e._v(" "),n("div",{staticClass:"custom-block note"},[n("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),n("p",[e._v("The plugs of the servos / motors go in the order of the mixers in this file.")])]),e._v(" "),n("p",[e._v("So MAIN1 would be the left aileron, MAIN2 the right aileron, MAIN3 is empty (note the Z: zero mixer) and MAIN4 is throttle (to keep throttle on output 4 for common fixed wing configurations).")]),e._v(" "),n("p",[e._v("A mixer is encoded in normalized units from -10000 to 10000, corresponding to -1..+1.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("M: 2\nO:      10000  10000      0 -10000  10000\nS: 0 0  -6000  -6000      0 -10000  10000\nS: 0 1   6500   6500      0 -10000  10000\n")])])]),n("p",[e._v("Where each number from left to right means:")]),e._v(" "),n("ul",[n("li",[e._v("M: Indicates two scalers for two control inputs.\nIt indicates the number of control inputs the mixer will receive.")]),e._v(" "),n("li",[e._v("O: Indicates the output scaling (*1 in negative, *1 in positive), offset (zero here), and output range (-1..+1 here).\n"),n("ul",[n("li",[e._v("If you want to invert your PWM signal, the signs of the output scalings have to be changed:"),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("O:      -10000  -10000      0 -10000  10000\n")])])])]),e._v(" "),n("li",[e._v("This line can (and should) be omitted completely if it specifies the default scaling:"),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("O:      10000  10000   0 -10000  10000\n")])])])])])]),e._v(" "),n("li",[e._v("S: Indicates the first input scaler: It takes input from control group #0 (Flight Control) and the first input (roll).\nIt scales the roll control input * 0.6 and reverts the sign (-0.6 becomes -6000 in scaled units).\nIt applies no offset (0) and outputs to the full range (-1..+1)")]),e._v(" "),n("li",[e._v("S: Indicates the second input scaler: It takes input from control group #0 (Flight Control) and the second input (pitch). "),n("br"),e._v("\nIt scales the pitch control input * 0.65.\nIt applies no offset (0) and outputs to the full range (-1..+1)")])]),e._v(" "),n("div",{staticClass:"custom-block note"},[n("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),n("p",[e._v("In short, the output of this mixer would be SERVO = ( (roll input * -0.6 + 0)  * 1 + (pitch input * 0.65 + 0)  * 1 ) * 1 + 0")])]),e._v(" "),n("p",[e._v("Behind the scenes, both scalers are added, which for a flying wing means the control surface takes maximum 60% deflection from roll and 65% deflection from pitch.")]),e._v(" "),n("p",[e._v("The complete mixer looks like this:")]),e._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[e._v("Delta-wing mixer "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" PX4FMU\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("\n\nDesigned "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" Wing Wing Z-84\n\nThis "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("file")]),e._v(" defines mixers suitable "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" controlling a delta wing aircraft using\nPX4FMU. The configuration assumes the elevon servos are connected to PX4FMU\nservo outputs "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" and "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" and the motor speed control to output "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v(". Output "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(" is\nassumed to be unused.\n\nInputs to the mixer come from channel group "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("vehicle attitude"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(", channels "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("roll"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(", "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("pitch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" and "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("thrust"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(".\n\nSee the README "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("more")]),e._v(" information on the scaler format.\n\nElevon mixers\n-------------\nThree scalers total "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("output, roll, pitch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(".\n\nThe scaling factor "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" roll inputs is adjusted to implement differential travel\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" the elevons.\n\nThis first block of code is "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" Servo "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n\nM: "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v("\nO:      "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("10000")]),e._v("  "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("10000")]),e._v("      "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" -10000  "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("10000")]),e._v("\nS: "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("  -6000  -6000      "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" -10000  "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("10000")]),e._v("\nS: "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("   "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("6500")]),e._v("   "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("6500")]),e._v("      "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" -10000  "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("10000")]),e._v("\n\nAnd this is "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" Servo "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n\nM: "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v("\nO:      "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("10000")]),e._v("  "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("10000")]),e._v("      "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" -10000  "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("10000")]),e._v("\nS: "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("  -6000  -6000      "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" -10000  "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("10000")]),e._v("\nS: "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("  -6500  -6500      "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" -10000  "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("10000")]),e._v("\n\nNote that "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("in")]),e._v(" principle, you could implement left/right wing asymmetric mixing, but "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("in")]),e._v(" general the two blocks of code will be numerically equal, and just differ by the sign of the third line "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("S: "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(", since to roll the plane, the two ailerons must move "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("in")]),e._v(" OPPOSITE directions.\nThe signs of the second lines "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("S: "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" are indentical, since to pitch the plane, both servos need to move "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("in")]),e._v(" the SAME direction.\n\nOutput "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v("\n--------\nThis mixer is empty.\n\nZ:\n\nMotor speed mixer\n-----------------\nTwo scalers total "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("output, thrust"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(".\n\nThis mixer generates a full-range output "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("-1 to "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" from an input "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("in")]),e._v(" the "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" - "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\nrange.  Inputs below zero are treated as zero.\n\nM: "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\nO:      "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("10000")]),e._v("  "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("10000")]),e._v("      "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" -10000  "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("10000")]),e._v("\nS: "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v("      "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("  "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("20000")]),e._v(" -10000 -10000  "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("10000")]),e._v("\n\n")])])]),n("h2",{attrs:{id:"adding-a-new-airframe-group"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#adding-a-new-airframe-group"}},[e._v("#")]),e._v(" Adding a New Airframe Group")]),e._v(" "),n("p",[e._v('Airframe "groups" are used to group similar airframes for selection in '),n("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/SetupView/Airframe.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("QGroundControl"),n("OutboundLink")],1),e._v(" and in the "),n("em",[e._v("Airframe Reference")]),e._v(" documentation ("),n("RouterLink",{attrs:{to:"/en/airframes/airframe_reference.html"}},[e._v("PX4 DevGuide")]),e._v(" and "),n("RouterLink",{attrs:{to:"/en/airframes/airframe_reference.html"}},[e._v("PX4 UserGuide")]),e._v(").\nEvery group has a name, and an associated svg image which shows the common geometry, number of motors, and direction of motor rotation for the grouped airframes.")],1),e._v(" "),n("p",[e._v("The airframe metadata files used by "),n("em",[e._v("QGroundControl")]),e._v(" and the documentation source code are generated from the airframe description, via a script, using the build command: "),n("code",[e._v("make airframe_metadata")])]),e._v(" "),n("p",[e._v("For a new airframe belonging to an existing group, you don't need to do anything more than provide documentation in the airframe description located at\n"),n("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/ROMFS/px4fmu_common/init.d",target:"_blank",rel:"noopener noreferrer"}},[e._v("ROMFS/px4fmu_common/init.d"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("p",[e._v("If the airframe is for a "),n("strong",[e._v("new group")]),e._v(" you additionally need to:")]),e._v(" "),n("ol",[n("li",[e._v("Add the svg image for the group into user guide documentation (if no image is provided a placeholder image is displayed): "),n("a",{attrs:{href:"https://github.com/PX4/px4_user_guide/tree/master/assets/airframes/types",target:"_blank",rel:"noopener noreferrer"}},[e._v("assets/airframes/types"),n("OutboundLink")],1)]),e._v(" "),n("li",[e._v("Add a mapping between the new group name and image filename in the "),n("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/Tools/px4airframes/srcparser.py",target:"_blank",rel:"noopener noreferrer"}},[e._v("srcparser.py"),n("OutboundLink")],1),e._v(" method "),n("code",[e._v("GetImageName()")]),e._v(" (follow the pattern below):"),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('def GetImageName(self):\n    """\n    Get parameter group image base name (w/o extension)\n    """\n    if (self.name == "Standard Plane"):\n        return "Plane"\n    elif (self.name == "Flying Wing"):\n        return "FlyingWing"\n     ...\n ...\n    return "AirframeUnknown"\n')])])])]),e._v(" "),n("li",[e._v("Update "),n("em",[e._v("QGroundControl")]),e._v(":\n"),n("ul",[n("li",[e._v("Add the svg image for the group into: "),n("a",{attrs:{href:"https://github.com/mavlink/qgroundcontrol/tree/master/src/AutoPilotPlugins/Common/Images",target:"_blank",rel:"noopener noreferrer"}},[e._v("src/AutopilotPlugins/Common/images"),n("OutboundLink")],1)]),e._v(" "),n("li",[e._v("Add reference to the svg image into "),n("a",{attrs:{href:"https://github.com/mavlink/qgroundcontrol/blob/master/qgcimages.qrc",target:"_blank",rel:"noopener noreferrer"}},[e._v("qgcimages.qrc"),n("OutboundLink")],1),e._v(", following the pattern below:"),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('<qresource prefix="/qmlimages">\n   ...\n   <file alias="Airframe/AirframeSimulation">src/AutoPilotPlugins/Common/Images/AirframeSimulation.svg</file>\n   <file alias="Airframe/AirframeUnknown">src/AutoPilotPlugins/Common/Images/AirframeUnknown.svg</file>\n   <file alias="Airframe/Boat">src/AutoPilotPlugins/Common/Images/Boat.svg</file>\n   <file alias="Airframe/FlyingWing">src/AutoPilotPlugins/Common/Images/FlyingWing.svg</file>\n   ...\n')])])])])]),e._v(" "),n("div",{staticClass:"custom-block note"},[n("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),n("p",[e._v("The remaining airframe metadata should be automatically included in the firmware (once "),n("strong",[e._v("srcparser.py")]),e._v(" is updated).")])])])]),e._v(" "),n("h2",{attrs:{id:"tuning-gains"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tuning-gains"}},[e._v("#")]),e._v(" Tuning Gains")]),e._v(" "),n("p",[e._v("The following topics explain how to tune the parameters that will be specified in the config file:")]),e._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/en/config_mc/pid_tuning_guide_multicopter.html"}},[e._v("Multicopter PID Tuning Guide")])],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/en/config_fw/pid_tuning_guide_fixedwing.html"}},[e._v("Fixed Wing PID Tuning Guide")])],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/en/config_vtol/"}},[e._v("VTOL Configuration")])],1)]),e._v(" "),n("h2",{attrs:{id:"add-new-airframe-to-qgroundcontrol"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#add-new-airframe-to-qgroundcontrol"}},[e._v("#")]),e._v(" Add New Airframe to QGroundControl")]),e._v(" "),n("p",[e._v("To make a new airframe available for section in the "),n("em",[e._v("QGroundControl")]),e._v(" "),n("RouterLink",{attrs:{to:"/en/config/airframe.html"}},[e._v("airframe configuration")]),e._v(":")],1),e._v(" "),n("ol",[n("li",[e._v("Make a clean build (e.g. by running "),n("code",[e._v("make clean")]),e._v(" and then "),n("code",[e._v("make px4_fmu-v5_default")]),e._v(")")]),e._v(" "),n("li",[e._v("Open QGC and select "),n("strong",[e._v("Custom firmware file...")]),e._v(" as shown below:")])]),e._v(" "),n("p",[n("img",{attrs:{src:a(671),alt:"QGC flash custom firmware"}})]),e._v(" "),n("p",[e._v("You will be asked to choose the "),n("strong",[e._v(".px4")]),e._v(" firmware file to flash (this file is a zipped JSON file and contains the airframe metadata).")]),e._v(" "),n("ol",[n("li",[e._v("Navigate to the build folder and select the firmware file (e.g. "),n("strong",[e._v("PX4-Autopilot/build/px4_fmu-v5_default/px4_fmu-v5_default.px4")]),e._v(").")]),e._v(" "),n("li",[e._v("Press "),n("strong",[e._v("OK")]),e._v(" to start flashing the firmware.")]),e._v(" "),n("li",[e._v("Restart "),n("em",[e._v("QGroundControl")]),e._v(".")])]),e._v(" "),n("p",[e._v("The new airframe will then be available for selection in "),n("em",[e._v("QGroundControl")]),e._v(".")])])}),[],!1,null,null,null);t.default=s.exports},671:function(e,t,a){e.exports=a.p+"assets/img/qgc_flash_custom_firmware.1cc69a59.png"}}]);