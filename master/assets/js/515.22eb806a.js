(window.webpackJsonp=window.webpackJsonp||[]).push([[515],{1570:function(t,e,a){"use strict";a.r(e);var n=a(18),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"adding-a-new-airframe-configuration"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#adding-a-new-airframe-configuration"}},[t._v("#")]),t._v(" Adding a New Airframe Configuration")]),t._v(" "),n("p",[t._v("PX4 uses canned airframe configurations as starting point for airframes.\nThe configurations are defined in "),n("a",{attrs:{href:"#config-file"}},[t._v("config files")]),t._v(" that are stored in the "),n("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/ROMFS/px4fmu_common/init.d",target:"_blank",rel:"noopener noreferrer"}},[t._v("ROMFS/px4fmu_common/init.d"),n("OutboundLink")],1),t._v(" folder.\nThe config files reference "),n("a",{attrs:{href:"#mixer-file"}},[t._v("mixer files")]),t._v(" that describe the physical configuration of the system, and which are stored in the "),n("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/ROMFS/px4fmu_common/mixers",target:"_blank",rel:"noopener noreferrer"}},[t._v("ROMFS/px4fmu_common/mixers"),n("OutboundLink")],1),t._v(" folder.")]),t._v(" "),n("p",[t._v("Adding a configuration is straightforward: create a new config file in the "),n("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/ROMFS/px4fmu_common/init.d/airframes",target:"_blank",rel:"noopener noreferrer"}},[t._v("init.d/airframes folder"),n("OutboundLink")],1),t._v(" (prepend the filename with an unused autostart ID), add the name of your new airframe config file to the "),n("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/ROMFS/px4fmu_common/init.d/airframes/CMakeLists.txt",target:"_blank",rel:"noopener noreferrer"}},[t._v("CMakeLists.txt"),n("OutboundLink")],1),t._v(" in the relevant section, then "),n("RouterLink",{attrs:{to:"/en/dev_setup/building_px4.html"}},[t._v("build and upload")]),t._v(" the software.")],1),t._v(" "),n("p",[t._v("Developers who do not want to create their own configuration can instead customize existing configurations using text files on the microSD card, as detailed on the "),n("RouterLink",{attrs:{to:"/en/concept/system_startup.html"}},[t._v("custom system startup")]),t._v(" page.")],1),t._v(" "),n("div",{staticClass:"custom-block note"},[n("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),n("p",[t._v("To determine which parameters/values need to be set in the configuration file, you can first assign a generic airframe and tune the vehicle, and then use "),n("RouterLink",{attrs:{to:"/en/modules/modules_command.html#param"}},[n("code",[t._v("param show-for-airframe")])]),t._v(" to list the parameters that changed.")],1)]),t._v(" "),n("h2",{attrs:{id:"configuration-file-overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#configuration-file-overview"}},[t._v("#")]),t._v(" Configuration File Overview")]),t._v(" "),n("p",[t._v("The configuration in the config and mixer files consists of several main blocks:")]),t._v(" "),n("ul",[n("li",[t._v("Airframe documentation (used in the "),n("RouterLink",{attrs:{to:"/en/airframes/airframe_reference.html"}},[t._v("Airframes Reference")]),t._v(" and "),n("em",[t._v("QGroundControl")]),t._v(").")],1),t._v(" "),n("li",[t._v("Vehicle-specific parameter settings, including "),n("a",{attrs:{href:"#tuning-gains"}},[t._v("tuning gains")]),t._v(".")]),t._v(" "),n("li",[t._v("The controllers and apps it should start, e.g. multicopter or fixed wing controllers, land detectors etc.")]),t._v(" "),n("li",[t._v("The physical configuration of the system (e.g. a plane, wing or multicopter). This is called a "),n("RouterLink",{attrs:{to:"/en/concept/mixing.html"}},[t._v("mixer")]),t._v(".")],1)]),t._v(" "),n("p",[t._v("These aspects are mostly independent, which means that many configurations share the same physical layout of the airframe, start the same applications and differ most in their tuning gains.")]),t._v(" "),n("div",{staticClass:"custom-block note"},[n("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),n("p",[t._v("New airframe files are only automatically added to the build system after a clean build (run "),n("code",[t._v("make clean")]),t._v(").")])]),t._v(" "),n("p",[n("a",{attrs:{id:"config-file"}})]),t._v(" "),n("h3",{attrs:{id:"config-file"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#config-file"}},[t._v("#")]),t._v(" Config File")]),t._v(" "),n("p",[t._v("A typical configuration file is shown below ("),n("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/ROMFS/px4fmu_common/init.d/airframes/3033_wingwing",target:"_blank",rel:"noopener noreferrer"}},[t._v("original file here"),n("OutboundLink")],1),t._v(").")]),t._v(" "),n("p",[t._v("The first section is the airframe documentation.\nThis is used in the "),n("RouterLink",{attrs:{to:"/en/airframes/airframe_reference.html"}},[t._v("Airframes Reference")]),t._v(" and "),n("em",[t._v("QGroundControl")]),t._v(".")],1),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#!nsh")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# @name Wing Wing (aka Z-84) Flying Wing")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# @url https://docs.px4.io/master/en/framebuild_plane/wing_wing_z84.html")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# @type Flying Wing")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# @class Plane")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# @output MAIN1 left aileron")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# @output MAIN2 right aileron")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# @output MAIN4 throttle")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# @output AUX1 feed-through of RC AUX1 channel")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# @output AUX2 feed-through of RC AUX2 channel")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# @output AUX3 feed-through of RC AUX3 channel")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# @maintainer Lorenz Meier <lorenz@px4.io>")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n")])])]),n("p",[t._v("The next section specifies vehicle-specific parameters, including "),n("a",{attrs:{href:"#tuning-gains"}},[t._v("tuning gains")]),t._v(":")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v(" /etc/init.d/rc.fw_defaults\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$AUTOCNF")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("yes")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n\tparam "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" BAT_N_CELLS "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n\tparam "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" FW_AIRSPD_MAX "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),t._v("\n\tparam "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" FW_AIRSPD_MIN "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n\tparam "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" FW_AIRSPD_TRIM "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),t._v("\n\tparam "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" FW_R_TC "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.3")]),t._v("\n\tparam "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" FW_P_TC "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.3")]),t._v("\n\tparam "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" FW_L1_DAMPING "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.74")]),t._v("\n\tparam "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" FW_L1_PERIOD "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v("\n\tparam "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" FW_LND_ANG "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),t._v("\n\tparam "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" FW_LND_FLALT "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n\tparam "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" FW_LND_HHDIST "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),t._v("\n\tparam "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" FW_LND_HVIRT "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),t._v("\n\tparam "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" FW_LND_TLALT "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n\tparam "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" FW_THR_LND_MAX "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n\tparam "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" FW_PR_FF "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.35")]),t._v("\n\tparam "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" FW_RR_FF "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.6")]),t._v("\n\tparam "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" FW_RR_P "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.04")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fi")]),t._v("\n")])])]),n("p",[t._v("Set frame type ("),n("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_TYPE",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAV_TYPE"),n("OutboundLink")],1),t._v("):")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Configure this as plane")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" MAV_TYPE "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])])]),n("p",[t._v("Set the "),n("a",{attrs:{href:"#mixer-file"}},[t._v("mixer")]),t._v(" to use:")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Set mixer")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" MIXER wingwing\n")])])]),n("p",[t._v("Configure PWM outputs (specify the outputs to drive/activate, and the levels).")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Provide ESC a constant 1000 us pulse")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" PWM_OUT "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" PWM_DISARMED "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v("\n")])])]),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),n("p",[t._v("If you want to reverse a channel, never do this on your RC transmitter or with e.g "),n("code",[t._v("RC1_REV")]),t._v(".\nThe channels are only reversed when flying in manual mode, when you switch in an autopilot flight mode, the channels output will still be wrong (it only inverts your RC signal).\nThus for a correct channel assignment change either your PWM signals with "),n("code",[t._v("PWM_MAIN_REV1")]),t._v(" (e.g. for channel one) or change the signs of the output scaling in the corresponding mixer (see below).")])]),t._v(" "),n("p",[n("a",{attrs:{id:"mixer-file"}})]),t._v(" "),n("h3",{attrs:{id:"mixer-file"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mixer-file"}},[t._v("#")]),t._v(" Mixer File")]),t._v(" "),n("div",{staticClass:"custom-block note"},[n("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),n("p",[t._v("First read "),n("RouterLink",{attrs:{to:"/en/concept/mixing.html"}},[t._v("Concepts > Mixing")]),t._v(".\nThis provides background information required to interpret this mixer file.")],1)]),t._v(" "),n("p",[t._v("A typical mixer file is shown below ("),n("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/ROMFS/px4fmu_common/mixers/wingwing.main.mix",target:"_blank",rel:"noopener noreferrer"}},[t._v("original file here"),n("OutboundLink")],1),t._v(").\nA mixer filename, in this case "),n("code",[t._v("wingwing.main.mix")]),t._v(", gives important information about the type of airframe ("),n("code",[t._v("wingwing")]),t._v("), the type of output ("),n("code",[t._v(".main")]),t._v(" or "),n("code",[t._v(".aux")]),t._v(") and lastly that it is a mixer file ("),n("code",[t._v(".mix")]),t._v(").")]),t._v(" "),n("p",[t._v("The mixer file contains several blocks of code, each of which refers to one actuator or ESC.\nSo if you have e.g. two servos and one ESC, the mixer file will contain three blocks of code.")]),t._v(" "),n("div",{staticClass:"custom-block note"},[n("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),n("p",[t._v("The plugs of the servos / motors go in the order of the mixers in this file.")])]),t._v(" "),n("p",[t._v("So MAIN1 would be the left aileron, MAIN2 the right aileron, MAIN3 is empty (note the Z: zero mixer) and MAIN4 is throttle (to keep throttle on output 4 for common fixed wing configurations).")]),t._v(" "),n("p",[t._v("A mixer is encoded in normalized units from -10000 to 10000, corresponding to -1..+1.")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("M: 2\nO:      10000  10000      0 -10000  10000\nS: 0 0  -6000  -6000      0 -10000  10000\nS: 0 1   6500   6500      0 -10000  10000\n")])])]),n("p",[t._v("Where each number from left to right means:")]),t._v(" "),n("ul",[n("li",[t._v("M: Indicates two scalers for two control inputs.\nIt indicates the number of control inputs the mixer will receive.")]),t._v(" "),n("li",[t._v("O: Indicates the output scaling (*1 in negative, *1 in positive), offset (zero here), and output range (-1..+1 here).\n"),n("ul",[n("li",[t._v("If you want to invert your PWM signal, the signs of the output scalings have to be changed:"),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("O:      -10000  -10000      0 -10000  10000\n")])])])]),t._v(" "),n("li",[t._v("This line can (and should) be omitted completely if it specifies the default scaling:"),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("O:      10000  10000   0 -10000  10000\n")])])])])])]),t._v(" "),n("li",[t._v("S: Indicates the first input scaler: It takes input from control group #0 (Flight Control) and the first input (roll).\nIt scales the roll control input * 0.6 and reverts the sign (-0.6 becomes -6000 in scaled units).\nIt applies no offset (0) and outputs to the full range (-1..+1)")]),t._v(" "),n("li",[t._v("S: Indicates the second input scaler: It takes input from control group #0 (Flight Control) and the second input (pitch). "),n("br"),t._v("\nIt scales the pitch control input * 0.65.\nIt applies no offset (0) and outputs to the full range (-1..+1)")])]),t._v(" "),n("div",{staticClass:"custom-block note"},[n("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),n("p",[t._v("In short, the output of this mixer would be SERVO = ( (roll input * -0.6 + 0)  * 1 + (pitch input * 0.65 + 0)  * 1 ) * 1 + 0")])]),t._v(" "),n("p",[t._v("Behind the scenes, both scalers are added, which for a flying wing means the control surface takes maximum 60% deflection from roll and 65% deflection from pitch.")]),t._v(" "),n("p",[t._v("The complete mixer looks like this:")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("Delta-wing mixer "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" PX4FMU\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n\nDesigned "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" Wing Wing Z-84\n\nThis "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" defines mixers suitable "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" controlling a delta wing aircraft using\nPX4FMU. The configuration assumes the elevon servos are connected to PX4FMU\nservo outputs "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" and "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" and the motor speed control to output "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(". Output "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" is\nassumed to be unused.\n\nInputs to the mixer come from channel group "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vehicle attitude"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", channels "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("roll"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pitch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" and "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("thrust"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".\n\nSee the README "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("more")]),t._v(" information on the scaler format.\n\nElevon mixers\n-------------\nThree scalers total "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("output, roll, pitch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".\n\nThe scaling factor "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" roll inputs is adjusted to implement differential travel\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" the elevons.\n\nThis first block of code is "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" Servo "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n\nM: "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\nO:      "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("      "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" -10000  "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("\nS: "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("  -6000  -6000      "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" -10000  "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("\nS: "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("   "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("6500")]),t._v("   "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("6500")]),t._v("      "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" -10000  "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("\n\nAnd this is "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" Servo "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n\nM: "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\nO:      "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("      "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" -10000  "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("\nS: "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("  -6000  -6000      "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" -10000  "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("\nS: "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("  -6500  -6500      "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" -10000  "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("\n\nNote that "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" principle, you could implement left/right wing asymmetric mixing, but "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" general the two blocks of code will be numerically equal, and just differ by the sign of the third line "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("S: "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", since to roll the plane, the two ailerons must move "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" OPPOSITE directions.\nThe signs of the second lines "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("S: "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" are indentical, since to pitch the plane, both servos need to move "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" the SAME direction.\n\nOutput "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n--------\nThis mixer is empty.\n\nZ:\n\nMotor speed mixer\n-----------------\nTwo scalers total "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("output, thrust"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".\n\nThis mixer generates a full-range output "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("-1 to "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" from an input "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" the "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" - "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nrange.  Inputs below zero are treated as zero.\n\nM: "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nO:      "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("      "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" -10000  "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("\nS: "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("      "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("20000")]),t._v(" -10000 -10000  "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("\n\n")])])]),n("h2",{attrs:{id:"adding-a-new-airframe-group"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#adding-a-new-airframe-group"}},[t._v("#")]),t._v(" Adding a New Airframe Group")]),t._v(" "),n("p",[t._v('Airframe "groups" are used to group similar airframes for selection in '),n("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/SetupView/Airframe.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGroundControl"),n("OutboundLink")],1),t._v(" and in the "),n("em",[t._v("Airframe Reference")]),t._v(" documentation ("),n("RouterLink",{attrs:{to:"/en/airframes/airframe_reference.html"}},[t._v("PX4 DevGuide")]),t._v(" and "),n("RouterLink",{attrs:{to:"/en/airframes/airframe_reference.html"}},[t._v("PX4 UserGuide")]),t._v(").\nEvery group has a name, and an associated svg image which shows the common geometry, number of motors, and direction of motor rotation for the grouped airframes.")],1),t._v(" "),n("p",[t._v("The airframe metadata files used by "),n("em",[t._v("QGroundControl")]),t._v(" and the documentation source code are generated from the airframe description, via a script, using the build command: "),n("code",[t._v("make airframe_metadata")])]),t._v(" "),n("p",[t._v("For a new airframe belonging to an existing group, you don't need to do anything more than provide documentation in the airframe description located at\n"),n("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/ROMFS/px4fmu_common/init.d",target:"_blank",rel:"noopener noreferrer"}},[t._v("ROMFS/px4fmu_common/init.d"),n("OutboundLink")],1),t._v(".")]),t._v(" "),n("p",[t._v("If the airframe is for a "),n("strong",[t._v("new group")]),t._v(" you additionally need to:")]),t._v(" "),n("ol",[n("li",[t._v("Add the svg image for the group into user guide documentation (if no image is provided a placeholder image is displayed): "),n("a",{attrs:{href:"https://github.com/PX4/px4_user_guide/tree/master/assets/airframes/types",target:"_blank",rel:"noopener noreferrer"}},[t._v("assets/airframes/types"),n("OutboundLink")],1)]),t._v(" "),n("li",[t._v("Add a mapping between the new group name and image filename in the "),n("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/Tools/px4airframes/srcparser.py",target:"_blank",rel:"noopener noreferrer"}},[t._v("srcparser.py"),n("OutboundLink")],1),t._v(" method "),n("code",[t._v("GetImageName()")]),t._v(" (follow the pattern below):"),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('def GetImageName(self):\n    """\n    Get parameter group image base name (w/o extension)\n    """\n    if (self.name == "Standard Plane"):\n        return "Plane"\n    elif (self.name == "Flying Wing"):\n        return "FlyingWing"\n     ...\n ...\n    return "AirframeUnknown"\n')])])])]),t._v(" "),n("li",[t._v("Update "),n("em",[t._v("QGroundControl")]),t._v(":\n"),n("ul",[n("li",[t._v("Add the svg image for the group into: "),n("a",{attrs:{href:"https://github.com/mavlink/qgroundcontrol/tree/master/src/AutoPilotPlugins/Common/Images",target:"_blank",rel:"noopener noreferrer"}},[t._v("src/AutopilotPlugins/Common/images"),n("OutboundLink")],1)]),t._v(" "),n("li",[t._v("Add reference to the svg image into "),n("a",{attrs:{href:"https://github.com/mavlink/qgroundcontrol/blob/master/qgcimages.qrc",target:"_blank",rel:"noopener noreferrer"}},[t._v("qgcimages.qrc"),n("OutboundLink")],1),t._v(", following the pattern below:"),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('<qresource prefix="/qmlimages">\n   ...\n   <file alias="Airframe/AirframeSimulation">src/AutoPilotPlugins/Common/Images/AirframeSimulation.svg</file>\n   <file alias="Airframe/AirframeUnknown">src/AutoPilotPlugins/Common/Images/AirframeUnknown.svg</file>\n   <file alias="Airframe/Boat">src/AutoPilotPlugins/Common/Images/Boat.svg</file>\n   <file alias="Airframe/FlyingWing">src/AutoPilotPlugins/Common/Images/FlyingWing.svg</file>\n   ...\n')])])])])]),t._v(" "),n("div",{staticClass:"custom-block note"},[n("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),n("p",[t._v("The remaining airframe metadata should be automatically included in the firmware (once "),n("strong",[t._v("srcparser.py")]),t._v(" is updated).")])])])]),t._v(" "),n("h2",{attrs:{id:"tuning-gains"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tuning-gains"}},[t._v("#")]),t._v(" Tuning Gains")]),t._v(" "),n("p",[t._v("The following topics explain how to tune the parameters that will be specified in the config file:")]),t._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/en/config_mc/pid_tuning_guide_multicopter.html"}},[t._v("Multicopter PID Tuning Guide")])],1),t._v(" "),n("li",[n("RouterLink",{attrs:{to:"/en/config_fw/pid_tuning_guide_fixedwing.html"}},[t._v("Fixed Wing PID Tuning Guide")])],1),t._v(" "),n("li",[n("RouterLink",{attrs:{to:"/en/config_vtol/"}},[t._v("VTOL Configuration")])],1)]),t._v(" "),n("h2",{attrs:{id:"add-new-airframe-to-qgroundcontrol"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#add-new-airframe-to-qgroundcontrol"}},[t._v("#")]),t._v(" Add New Airframe to QGroundControl")]),t._v(" "),n("p",[t._v("To make a new airframe available for section in the "),n("em",[t._v("QGroundControl")]),t._v(" "),n("RouterLink",{attrs:{to:"/en/config/airframe.html"}},[t._v("airframe configuration")]),t._v(":")],1),t._v(" "),n("ol",[n("li",[t._v("Make a clean build (e.g. by running "),n("code",[t._v("make clean")]),t._v(" and then "),n("code",[t._v("make px4_fmu-v5_default")]),t._v(")")]),t._v(" "),n("li",[t._v("Open QGC and select "),n("strong",[t._v("Custom firmware file...")]),t._v(" as shown below:")])]),t._v(" "),n("p",[n("img",{attrs:{src:a(672),alt:"QGC flash custom firmware"}})]),t._v(" "),n("p",[t._v("You will be asked to choose the "),n("strong",[t._v(".px4")]),t._v(" firmware file to flash (this file is a zipped JSON file and contains the airframe metadata).")]),t._v(" "),n("ol",[n("li",[t._v("Navigate to the build folder and select the firmware file (e.g. "),n("strong",[t._v("PX4-Autopilot/build/px4_fmu-v5_default/px4_fmu-v5_default.px4")]),t._v(").")]),t._v(" "),n("li",[t._v("Press "),n("strong",[t._v("OK")]),t._v(" to start flashing the firmware.")]),t._v(" "),n("li",[t._v("Restart "),n("em",[t._v("QGroundControl")]),t._v(".")])]),t._v(" "),n("p",[t._v("The new airframe will then be available for selection in "),n("em",[t._v("QGroundControl")]),t._v(".")])])}),[],!1,null,null,null);e.default=s.exports},672:function(t,e,a){t.exports=a.p+"assets/img/qgc_flash_custom_firmware.1cc69a59.png"}}]);