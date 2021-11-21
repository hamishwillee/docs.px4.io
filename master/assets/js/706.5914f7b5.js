(window.webpackJsonp=window.webpackJsonp||[]).push([[706],{2858:function(t,e,s){"use strict";s.r(e);var a=s(19),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"添加一个新的机型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加一个新的机型"}},[t._v("#")]),t._v(" 添加一个新的机型")]),t._v(" "),a("p",[t._v("PX4使用存储的配置作为机型的起始点>。 机体的配置在"),a("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/ROMFS/px4fmu_common/init.d",target:"_blank",rel:"noopener noreferrer"}},[t._v("ROMFS/px4fmu_common/init.d"),a("OutboundLink")],1),t._v("文件夹下的"),a("a",{attrs:{href:"#config-file"}},[t._v("配置文件")]),t._v("中定义。 配置文件中引用"),a("a",{attrs:{href:"#mixer-file"}},[t._v("混控文件")]),t._v("，混控文件是用来描述机体的物理结构，存储在"),a("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/ROMFS/px4fmu_common/mixers",target:"_blank",rel:"noopener noreferrer"}},[t._v("ROMFS/px4fmu_common/mixers"),a("OutboundLink")],1),t._v("文件夹")]),t._v(" "),a("p",[t._v("添加配置是非常简单的：在"),a("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/ROMFS/px4fmu_common/init.d",target:"_blank",rel:"noopener noreferrer"}},[t._v("init.d文件夹"),a("OutboundLink")],1),t._v("创建一个新的文件(使用未使用的autostart ID作为文件名的前缀)，然后"),a("RouterLink",{attrs:{to:"/zh/setup/building_px4.html"}},[t._v("构建并上传")]),t._v("固件即可。")],1),t._v(" "),a("p",[t._v("如果不想创建自己的配置文件，也可以用SD卡上的文本文件替换掉已有的自定义配置文件，具体细节请查看"),a("RouterLink",{attrs:{to:"/zh/concept/system_startup.html"}},[t._v("自定义系统启动页。 ")])],1),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("为了决定哪些参数/值需要在配置文件中设置，你可以先指定一个通用机架并调整自驾仪，之后用"),a("RouterLink",{attrs:{to:"/zh/modules/modules_command.html#param"}},[a("code",[t._v("param show-for-airframe")])]),t._v("来列出改变的参数。")],1)]),t._v(" "),a("h2",{attrs:{id:"配置文件概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置文件概述"}},[t._v("#")]),t._v(" 配置文件概述")]),t._v(" "),a("p",[t._v("在配置文件和混控器文件下的配置由几个主要代码块组成:")]),t._v(" "),a("ul",[a("li",[t._v("机架说明文档(被"),a("RouterLink",{attrs:{to:"/zh/airframes/airframe_reference.html"}},[t._v("Airframes Reference")]),t._v("和"),a("em",[t._v("QGroundControl")]),t._v(") 使用。")],1),t._v(" "),a("li",[t._v("飞机特定的参数设置，包括"),a("a",{attrs:{href:"#tuning-gains"}},[t._v("tuning gains")]),t._v("。")]),t._v(" "),a("li",[t._v("应该启动的控制器和应用，例如多旋翼或者固定翼的控制器，着陆检测等等。")]),t._v(" "),a("li",[t._v("系统（固定翼，飞翼或者多旋翼）的物理配置。 这叫"),a("RouterLink",{attrs:{to:"/zh/concept/mixing.html"}},[t._v("混控器")]),t._v("。")],1)]),t._v(" "),a("p",[t._v("一个典型的配置文件如下所示 ("),a("a",{attrs:{href:"https://github.com/PX4/Firmware/blob/master/ROMFS/px4fmu_common/init.d/airframes/3033_wingwing",target:"_blank",rel:"noopener noreferrer"}},[t._v("original file here"),a("OutboundLink")],1),t._v(") .")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("新的机架文件只会在清理构建之后 (运行 "),a("code",[t._v("make clean")]),t._v(")被加入到编译系统。 "),a("RouterLink",{attrs:{to:"/zh/airframes/airframe_reference.html"}},[t._v("Airframes Reference")]),t._v(" 和 "),a("em",[t._v("QGroundControl")]),t._v(" 会用到该部分内容。")],1),t._v(" "),a("p",[a("a",{attrs:{id:"config-file"}})]),t._v(" "),a("h3",{attrs:{id:"配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置文件"}},[t._v("#")]),t._v(" 配置文件")]),t._v(" "),a("p",[t._v("接下来的一部分指定车辆特定的参数，包括调参系数。")]),t._v(" "),a("p",[t._v("第一部分是机身框架的文档说明 它将会被"),a("RouterLink",{attrs:{to:"/zh/airframes/airframe_reference.html"}},[t._v("Airframes Reference")]),t._v("和"),a("em",[t._v("QGroundControl")]),t._v("使用")],1),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#!nsh")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# @name Wing Wing (aka Z-84) Flying Wing")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# @url https://docs.px4.io/en/framebuild_plane/wing_wing_z84.html")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# @type Flying Wing")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# @class Plane")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# @output MAIN1 left aileron")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# @output MAIN2 right aileron")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# @output MAIN4 throttle")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# @output AUX1 feed-through of RC AUX1 channel")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# @output AUX2 feed-through of RC AUX2 channel")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# @output AUX3 feed-through of RC AUX3 channel")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# @maintainer Lorenz Meier <lorenz@px4.io>")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n")])])]),a("p",[t._v("设置需要使用的混控器:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${R}")]),t._v("etc/init.d/rc.fw_defaults\n\nparam set-default BAT_N_CELLS "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\nparam set-default FW_AIRSPD_MAX "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),t._v("\nparam set-default FW_AIRSPD_MIN "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\nparam set-default FW_AIRSPD_TRIM "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),t._v("\nparam set-default FW_R_TC "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.3")]),t._v("\nparam set-default FW_P_TC "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.3")]),t._v("\nparam set-default FW_L1_DAMPING "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.74")]),t._v("\nparam set-default FW_L1_PERIOD "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v("\nparam set-default FW_LND_ANG "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),t._v("\nparam set-default FW_LND_FLALT "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\nparam set-default FW_LND_HHDIST "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),t._v("\nparam set-default FW_LND_HVIRT "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),t._v("\nparam set-default FW_LND_TLALT "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\nparam set-default FW_THR_LND_MAX "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\nparam set-default FW_PR_FF "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.35")]),t._v("\nparam set-default FW_RR_FF "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.6")]),t._v("\nparam set-default FW_RR_P "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.04")]),t._v("\n\nparam set-default PWM_MAIN_DISARM "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v("\n")])])]),a("p",[t._v("配置PWM输出(指定驱动/激活的输出和级别)。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 配置此为固定翼")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" MAV_TYPE "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])])]),a("p",[t._v("设定使用的 "),a("a",{attrs:{href:"#mixer-file"}},[t._v("混控器")]),t._v(" :")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设定混控")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" MIXER wingwing\n")])])]),a("p",[t._v("配置 PWM 输出 (指定要驱动/激活的输出和级别).")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 向 ESC 提供一个常值 1000 us 脉冲")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" PWM_OUT "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" PWM_DISARMED "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v("\n")])])]),a("p",[t._v(":::警告 如果你想将某一个通道反相,千万不要在你的遥控器上这样做或者改变例如"),a("code",[t._v("RC1_ REV")]),t._v("这样的参数。 The channels are only reversed when flying in manual mode, when you switch in an autopilot flight mode, the channels output will still be wrong (it only inverts your RC signal). Thus for a correct channel assignment change either your PWM signals with "),a("code",[t._v("PWM_MAIN_REV1")]),t._v(" (e.g. for channel one) or change the signs of the output scaling in the corresponding mixer (see below).")])]),t._v(" "),a("p",[a("a",{attrs:{id:"mixer-file"}})]),t._v(" "),a("h3",{attrs:{id:"混控器文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#混控器文件"}},[t._v("#")]),t._v(" 混控器文件")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("First read "),a("RouterLink",{attrs:{to:"/zh/concept/mixing.html"}},[t._v("Concepts > Mixing")]),t._v(". This provides background information required to interpret this mixer file.")],1)]),t._v(" "),a("p",[t._v("A typical mixer file is shown below ("),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/ROMFS/px4fmu_common/mixers/wingwing.main.mix",target:"_blank",rel:"noopener noreferrer"}},[t._v("original file here"),a("OutboundLink")],1),t._v("). A mixer filename, in this case "),a("code",[t._v("wingwing.main.mix")]),t._v(", gives important information about the type of airframe ("),a("code",[t._v("wingwing")]),t._v("), the type of output ("),a("code",[t._v(".main")]),t._v(" or "),a("code",[t._v(".aux")]),t._v(") and lastly that it is a mixer file ("),a("code",[t._v(".mix")]),t._v(").")]),t._v(" "),a("p",[t._v("The mixer file contains several blocks of code, each of which refers to one actuator or ESC. So if you have e.g. two servos and one ESC, the mixer file will contain three blocks of code.")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("The plugs of the servos / motors go in the order of the mixers in this file.")])]),t._v(" "),a("p",[t._v("So MAIN1 would be the left aileron, MAIN2 the right aileron, MAIN3 is empty (note the Z: zero mixer) and MAIN4 is throttle (to keep throttle on output 4 for common fixed wing configurations).")]),t._v(" "),a("p",[t._v("使用编译指令 "),a("code",[t._v("make airframe_metadata")]),t._v(" 可以运行脚本自动根据机型描述语句生成需要在 "),a("em",[t._v("QGroundControl")]),t._v(" 中使用的机型元数据文件和文档源代码。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("M: 2\nO:      10000  10000      0 -10000  10000\nS: 0 0  -6000  -6000      0 -10000  10000\nS: 0 1   6500   6500      0 -10000  10000\n")])])]),a("p",[t._v("For a new airframe belonging to an existing group, you don't need to do anything more than provide documentation in the airframe description located at "),a("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/ROMFS/px4fmu_common/init.d",target:"_blank",rel:"noopener noreferrer"}},[t._v("ROMFS/px4fmu_common/init.d"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("ul",[a("li",[t._v("M: Indicates two scalers for two control inputs. It indicates the number of control inputs the mixer will receive. 该参数表示混控器将接受到的控制输入的数量。")]),t._v(" "),a("li",[t._v("O: Indicates the output scaling (*1 in negative, *1 in positive), offset (zero here), and output range (-1..+1 here).\n"),a("ul",[a("li",[t._v("If you want to invert your PWM signal, the signs of the output scalings have to be changed. ("),a("code",[t._v("O: -10000 -10000 0 -10000 10000")]),t._v(")"),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("O:      -10000  -10000      0 -10000  10000\n")])])])]),t._v(" "),a("li",[t._v("This line can (and should) be omitted completely if it specifies the default scaling: "),a("code",[t._v("O: 10000 10000 0 -10000 10000")]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("O:      10000  10000   0 -10000  10000\n")])])])])])]),t._v(" "),a("li",[t._v("S: Indicates the first input scaler: It takes input from control group #0 (Flight Control) and the first input (roll). It scales the roll control input * 0.6 and reverts the sign (-0.6 becomes -6000 in scaled units). It applies no offset (0) and outputs to the full range (-1..+1) 它将滚转控制输入 * 0.6 进行缩放并反转输入量的正负号（-0.6 在缩放后的单位中变成了 -6000）。 该混控器不施加任何偏移量（0）且输出量幅值在 （-1.. +1）这个范围内。")]),t._v(" "),a("li",[t._v("S: Indicates the second input scaler: It takes input from control group #0 (Flight Control) and the second input (pitch). It scales the pitch control input * 0.65. It applies no offset (0) and outputs to the full range (-1..+1) \\ It scales the pitch control input * 0.65. 该混控器不施加任何偏移量（0）且输出量幅值在 （-1.. +1）这个范围内。")])]),t._v(" "),a("p",[t._v("如果机型属于一个 "),a("strong",[t._v("新的组")]),t._v(" 那么你还需要进行如下操作：")]),t._v(" "),a("p",[t._v("Behind the scenes, both scalers are added, which for a flying wing means the control surface takes maximum 60% deflection from roll and 65% deflection from pitch.")]),t._v(" "),a("p",[t._v("To make a new airframe available for section in the "),a("em",[t._v("QGroundControl")]),t._v(" "),a("a",{attrs:{href:"https://docs.px4.io/en/config/airframe.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("airframe configuration"),a("OutboundLink")],1),t._v(":")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("Delta-wing mixer "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" PX4FMU\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n\nDesigned "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" Wing Wing Z-84\n\nThis "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" defines mixers suitable "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" controlling a delta wing aircraft using\nPX4FMU. The configuration assumes the elevon servos are connected to PX4FMU\nservo outputs "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" and "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" and the motor speed control to output "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(". Output "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" is\nassumed to be unused.\n\nInputs to the mixer come from channel group "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vehicle attitude"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", channels "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("roll"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pitch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" and "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("thrust"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".\n\nSee the README "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("more")]),t._v(" information on the scaler format.\n\nElevon mixers\n-------------\nThree scalers total "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("output, roll, pitch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".\n\nThe scaling factor "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" roll inputs is adjusted to implement differential travel\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" the elevons. \n\nThis first block of code is "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" Servo "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n\nM: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\nO:      "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" -10000  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("\nS: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("  -6000  -6000      "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" -10000  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("\nS: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6500")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6500")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" -10000  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("\n\nAnd this is "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" Servo "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n\nM: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\nO:      "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" -10000  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("\nS: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("  -6000  -6000      "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" -10000  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("\nS: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("  -6500  -6500      "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" -10000  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("\n\nNote that "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" principle, you could implement left/right wing asymmetric mixing, but "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" general the two blocks of code will be numerically equal, and just differ by the sign of the third line "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("S: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", since to roll the plane, the two ailerons must move "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" OPPOSITE directions. The signs of the second lines "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("S: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" are indentical, since to pitch the plane, both servos need to move "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" the SAME direction. \n\nOutput "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n--------\nThis mixer is empty.\n\nZ:\n\nMotor speed mixer\n-----------------\nTwo scalers total "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("output, thrust"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".\n\nThis mixer generates a full-range output "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("-1 to "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" from an input "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" the "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" - "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nrange.  Inputs below zero are treated as zero.\n\nM: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nO:      "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" -10000  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("\nS: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20000")]),t._v(" -10000 -10000  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v(" The configuration assumes the elevon servos are connected to PX4FMU\nservo outputs "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" and "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" and the motor speed control to output "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(". Output "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" is\nassumed to be unused.\n\nInputs to the mixer come from channel group "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vehicle attitude"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", channels "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("roll"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pitch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" and "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("thrust"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".\n\nSee the README "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("more")]),t._v(" information on the scaler format.\n\nElevon mixers\n-------------\nThree scalers total "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("output, roll, pitch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".\n\nThe scaling factor "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" roll inputs is adjusted to implement differential travel\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" the elevons.\n\nThis first block of code is "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" Servo "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n\nM: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\nO:      "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" -10000  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("\nS: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("  -6000  -6000      "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" -10000  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("\nS: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6500")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6500")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" -10000  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("\n\nAnd this is "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" Servo "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n\nM: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\nO:      "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" -10000  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("\nS: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("  -6000  -6000      "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" -10000  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("\nS: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("  -6500  -6500      "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" -10000  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("\n\nNote that "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" principle, you could implement left/right wing asymmetric mixing, but "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" general the two blocks of code will be numerically equal, and just differ by the sign of the third line "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("S: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", since to roll the plane, the two ailerons must move "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" OPPOSITE directions.\nThe signs of the second lines "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("S: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" are indentical, since to pitch the plane, both servos need to move "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" the SAME direction.\n\nOutput "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n--------\nThis mixer is empty.\n\nZ:\n\nMotor speed mixer\n-----------------\nTwo scalers total "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("output, thrust"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".\n\nThis mixer generates a full-range output "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("-1 to "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" from an input "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" the "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" - "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nrange.  Inputs below zero are treated as zero.\n\nM: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nO:      "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" -10000  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("\nS: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20000")]),t._v(" -10000 -10000  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("\n\n")])])]),a("h2",{attrs:{id:"增加一个新的机型组-airframe-group"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#增加一个新的机型组-airframe-group"}},[t._v("#")]),t._v(" 增加一个新的机型组（Airframe Group）")]),t._v(" "),a("p",[t._v('Airframe "groups" are used to group similar airframes for selection in '),a("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/SetupView/Airframe.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGroundControl"),a("OutboundLink")],1),t._v(" and in the "),a("em",[t._v("Airframe Reference")]),t._v(" documentation ("),a("RouterLink",{attrs:{to:"/zh/airframes/airframe_reference.html"}},[t._v("PX4 DevGuide")]),t._v(" and "),a("RouterLink",{attrs:{to:"/zh/airframes/airframe_reference.html"}},[t._v("PX4 UserGuide")]),t._v("). Every group has a name, and an associated svg image which shows the common geometry, number of motors, and direction of motor rotation for the grouped airframes.")],1),t._v(" "),a("p",[t._v("The airframe metadata files used by "),a("em",[t._v("QGroundControl")]),t._v(" and the documentation source code are generated from the airframe description, via a script, using the build command: "),a("code",[t._v("make airframe_metadata")])]),t._v(" "),a("p",[t._v("For a new airframe belonging to an existing group, you don't need to do anything more than provide documentation in the airframe description located at "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/ROMFS/px4fmu_common/init.d",target:"_blank",rel:"noopener noreferrer"}},[t._v("ROMFS/px4fmu_common/init.d"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("If the airframe is for a "),a("strong",[t._v("new group")]),t._v(" you additionally need to:")]),t._v(" "),a("ol",[a("li",[t._v("Add the svg image for the group into user guide documentation (if no image is provided a placeholder image is displayed): "),a("a",{attrs:{href:"https://github.com/PX4/px4_user_guide/tree/master/assets/airframes/types",target:"_blank",rel:"noopener noreferrer"}},[t._v("assets/airframes/types"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("Add a mapping between the new group name and image filename in the "),a("a",{attrs:{href:"https://github.com/PX4/Firmware/blob/master/Tools/px4airframes/srcparser.py",target:"_blank",rel:"noopener noreferrer"}},[t._v("srcparser.py"),a("OutboundLink")],1),t._v(" method "),a("code",[t._v("GetImageName()")]),t._v(' (follow the pattern below): def GetImageName(self): """ Get parameter group image base name (w/o extension) """ if (self.name == "Standard Plane"): return "Plane" elif (self.name == "Flying Wing"): return "FlyingWing" ... ... return "AirframeUnknown"'),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('def GetImageName(self):\n    """\n    Get parameter group image base name (w/o extension)\n    """\n    if (self.name == "Standard Plane"):\n        return "Plane"\n    elif (self.name == "Flying Wing"):\n        return "FlyingWing"\n     ...\n ...\n    return "AirframeUnknown"\n')])])])]),t._v(" "),a("li",[t._v("更新 "),a("em",[t._v("QGroundControl")]),t._v("：\n"),a("ul",[a("li",[t._v("将该机型组的 svg 图像文件添加至： "),a("a",{attrs:{href:"https://github.com/mavlink/qgroundcontrol/tree/master/src/AutoPilotPlugins/Common/Images",target:"_blank",rel:"noopener noreferrer"}},[t._v("src/AutopilotPlugins/Common/images"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("Add reference to the svg image into "),a("a",{attrs:{href:"https://github.com/mavlink/qgroundcontrol/blob/master/qgcresources.qrc",target:"_blank",rel:"noopener noreferrer"}},[t._v("qgcresources.qrc"),a("OutboundLink")],1),t._v(", following the pattern below:"),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<qresource prefix="/qmlimages">\n   ...\n   <file alias="Airframe/AirframeSimulation">src/AutoPilotPlugins/Common/Images/AirframeSimulation.svg</file>\n   <file alias="Airframe/AirframeUnknown">src/AutoPilotPlugins/Common/Images/AirframeUnknown.svg</file>\n   <file alias="Airframe/Boat">src/AutoPilotPlugins/Common/Images/Boat.svg</file>\n   <file alias="Airframe/FlyingWing">src/AutoPilotPlugins/Common/Images/FlyingWing.svg</file>\n   ...\n')])])])])])])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("The remaining airframe metadata should be automatically included in the firmware (once "),a("strong",[t._v("srcparser.py")]),t._v(" is updated).")])]),t._v(" "),a("h2",{attrs:{id:"调参"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#调参"}},[t._v("#")]),t._v(" 调参")]),t._v(" "),a("p",[t._v("The following topics explain how to tune the parameters that will be specified in the config file:")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/zh/config_mc/pid_tuning_guide_multicopter.html"}},[t._v("多轴飞行器 PID 调参指南")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/config_fw/pid_tuning_guide_fixedwing.html"}},[t._v("固定翼 PID 调参指南")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/config_vtol/"}},[t._v("垂直起降（VTOL）配置")])],1)]),t._v(" "),a("h2",{attrs:{id:"将新的机型加入到-qgroundcontrol"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#将新的机型加入到-qgroundcontrol"}},[t._v("#")]),t._v(" 将新的机型加入到 QGroundControl")]),t._v(" "),a("p",[t._v("To make a new airframe available for section in the "),a("em",[t._v("QGroundControl")]),t._v(" "),a("RouterLink",{attrs:{to:"/zh/config/airframe.html"}},[t._v("airframe configuration")]),t._v(":")],1),t._v(" "),a("ol",[a("li",[t._v("创建一个干净的生成（例如，先运行 "),a("code",[t._v("make clean")]),t._v(" 指令，然后再运行 "),a("code",[t._v("make px4_fmu-v5_default")]),t._v("）")]),t._v(" "),a("li",[t._v("打开 QGC 然后如下图所示单击 "),a("strong",[t._v("Custom firmware file...")]),t._v("：")])]),t._v(" "),a("p",[a("img",{attrs:{src:s(697),alt:"QGC 载入自定义固件"}})]),t._v(" "),a("p",[t._v("随后你将会被要求选择需要被载入的 "),a("strong",[t._v(".px4")]),t._v(" 固件文件（该文件是一个被压缩的 JSON 文件，文件内包含了机型的元数据）。")]),t._v(" "),a("ol",[a("li",[t._v("Navigate to the build folder and select the firmware file (e.g. "),a("strong",[t._v("Firmware/build/px4_fmu-v5_default/px4_fmu-v5_default.px4")]),t._v(").")]),t._v(" "),a("li",[t._v("单击 "),a("strong",[t._v("OK")]),t._v(" 开始载入固件。")]),t._v(" "),a("li",[t._v("重启 "),a("em",[t._v("QGroundControl")]),t._v("。")])]),t._v(" "),a("p",[t._v("The new airframe will then be available for selection in "),a("em",[t._v("QGroundControl")]),t._v(".")])])}),[],!1,null,null,null);e.default=n.exports},697:function(t,e,s){t.exports=s.p+"assets/img/qgc_flash_custom_firmware.1cc69a59.png"}}]);