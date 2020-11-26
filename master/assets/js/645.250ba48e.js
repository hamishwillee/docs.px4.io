(window.webpackJsonp=window.webpackJsonp||[]).push([[645],{2352:function(t,e,s){"use strict";s.r(e);var n=s(18),a=Object(n.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"添加一个新的机型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#添加一个新的机型"}},[t._v("#")]),t._v(" 添加一个新的机型")]),t._v(" "),n("p",[t._v("PX4使用存储的配置作为机型的起始点>。 机体的配置在"),n("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/ROMFS/px4fmu_common/init.d",target:"_blank",rel:"noopener noreferrer"}},[t._v("ROMFS/px4fmu_common/init.d"),n("OutboundLink")],1),t._v("文件夹下的"),n("a",{attrs:{href:"#config-file"}},[t._v("配置文件")]),t._v("中定义。 配置文件中引用"),n("a",{attrs:{href:"#mixer-file"}},[t._v("混控文件")]),t._v("，混控文件是用来描述机体的物理结构，存储在"),n("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/ROMFS/px4fmu_common/mixers",target:"_blank",rel:"noopener noreferrer"}},[t._v("ROMFS/px4fmu_common/mixers"),n("OutboundLink")],1),t._v("文件夹")]),t._v(" "),n("p",[t._v("添加配置是非常简单的：在"),n("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/ROMFS/px4fmu_common/init.d",target:"_blank",rel:"noopener noreferrer"}},[t._v("init.d文件夹"),n("OutboundLink")],1),t._v("创建一个新的文件(使用未使用的autostart ID作为文件名的前缀)，然后"),n("RouterLink",{attrs:{to:"/zh/setup/building_px4.html"}},[t._v("构建并上传")]),t._v("固件即可。")],1),t._v(" "),n("p",[t._v("如果不想创建自己的配置文件，也可以用SD卡上的文本文件替换掉已有的自定义配置文件，具体细节请查看"),n("RouterLink",{attrs:{to:"/zh/concept/system_startup.html"}},[t._v("自定义系统启动页。 ")])],1),t._v(" "),n("blockquote",[n("p",[n("strong",[t._v("Note")]),t._v(" To determine which parameters/values need to be set in the configuration file, you can first assign a generic airframe and tune the vehicle, and then use "),n("RouterLink",{attrs:{to:"/zh/modules/modules_command.html#param"}},[n("code",[t._v("param show-for-airframe")])]),t._v(" to list the parameters that changed.")],1)]),t._v(" "),n("h2",{attrs:{id:"配置文件概述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置文件概述"}},[t._v("#")]),t._v(" 配置文件概述")]),t._v(" "),n("p",[t._v("配置和混控文件中的机型配置包括如下几个主要模块：")]),t._v(" "),n("ul",[n("li",[t._v("机架说明文档(被"),n("RouterLink",{attrs:{to:"/zh/airframes/airframe_reference.html"}},[t._v("Airframes Reference")]),t._v("和"),n("em",[t._v("QGroundControl")]),t._v(") 使用。")],1),t._v(" "),n("li",[t._v("飞机特定的参数设置，包括"),n("a",{attrs:{href:"#tuning-gains"}},[t._v("tuning gains")]),t._v("。")]),t._v(" "),n("li",[t._v("应该启动的应用，例如多旋翼或者固定翼的控制器，着陆检测等等。")]),t._v(" "),n("li",[t._v("系统（固定翼，飞翼或者多旋翼）的物理配置。 这叫"),n("RouterLink",{attrs:{to:"/zh/concept/mixing.html"}},[t._v("混控器")]),t._v("。")],1)]),t._v(" "),n("p",[t._v("上述几个模块在很大程度上都是相互独立的，这就意味着很多配置共用同一套机架的物理结构、启动同样的应用，仅在参数整定增益上有较大区别。")]),t._v(" "),n("blockquote",[n("p",[n("strong",[t._v("Note")]),t._v(" 新的机型配置文件仅在执行干净的构建后（运行命令 "),n("code",[t._v("make clean")]),t._v("）才会被自动添加到构建系统中。")])]),t._v(" "),n("p",[n("a",{attrs:{id:"config-file"}})]),t._v(" "),n("h3",{attrs:{id:"配置文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置文件"}},[t._v("#")]),t._v(" 配置文件")]),t._v(" "),n("p",[t._v("A typical configuration file is shown below ("),n("a",{attrs:{href:"https://github.com/PX4/Firmware/blob/master/ROMFS/px4fmu_common/init.d/airframes/3033_wingwing",target:"_blank",rel:"noopener noreferrer"}},[t._v("original file here"),n("OutboundLink")],1),t._v(") .")]),t._v(" "),n("p",[t._v("第一部分是关于机身框架的文档说明。 "),n("RouterLink",{attrs:{to:"/zh/airframes/airframe_reference.html"}},[t._v("Airframes Reference")]),t._v(" 和 "),n("em",[t._v("QGroundControl")]),t._v(" 会用到该部分内容。")],1),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#!nsh")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# @name Wing Wing (aka Z-84) Flying Wing")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# @url https://docs.px4.io/en/framebuild_plane/wing_wing_z84.html")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# @type Flying Wing")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# @class Plane")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# @output MAIN1 left aileron")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# @output MAIN2 right aileron")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# @output MAIN4 throttle")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# @output AUX1 feed-through of RC AUX1 channel")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# @output AUX2 feed-through of RC AUX2 channel")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# @output AUX3 feed-through of RC AUX3 channel")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# @maintainer Lorenz Meier <lorenz@px4.io>")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n")])])]),n("p",[t._v("接下来的一部分指定车辆特定的参数，包括调参系数。")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v(" /etc/init.d/rc.fw_defaults\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$AUTOCNF")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("yes")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n  param "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" BAT_N_CELLS "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n  param "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" FW_AIRSPD_MAX "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),t._v("\n  param "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" FW_AIRSPD_MIN "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n  param "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" FW_AIRSPD_TRIM "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),t._v("\n  param "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" FW_R_TC "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.3")]),t._v("\n  param "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" FW_P_TC "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.3")]),t._v("\n  param "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" FW_L1_DAMPING "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.74")]),t._v("\n  param "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" FW_L1_PERIOD "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v("\n  param "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" FW_LND_ANG "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),t._v("\n  param "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" FW_LND_FLALT "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n  param "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" FW_LND_HHDIST "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),t._v("\n  param "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" FW_LND_HVIRT "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),t._v("\n  param "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" FW_LND_TLALT "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n  param "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" FW_THR_LND_MAX "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n  param "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" FW_PR_FF "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.35")]),t._v("\n  param "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" FW_RR_FF "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.6")]),t._v("\n  param "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" FW_RR_P "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.04")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fi")]),t._v("\n")])])]),n("p",[t._v("设置机身框架类型（MAV_TYPE）")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 配置此为固定翼")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" MAV_TYPE "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])])]),n("p",[t._v("设置需要使用的混控器:")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设定混控")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" MIXER wingwing\n")])])]),n("p",[t._v("配置PWM输出(指定驱动/激活的输出和级别)。")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 向 ESC 提供一个常值 1000 us 脉冲")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" PWM_OUT "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" PWM_DISARMED "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v("\n")])])]),n("blockquote",[n("p",[n("strong",[t._v("Warning")]),t._v("：如果你想将某一个通道反相, 千万不要在你的遥控器上这样做或者改变例如 "),n("code",[t._v("RC1_REV")]),t._v(" 这样的参数. 这些参数只会在你使用手动模式飞行的时候才会反相, 当你切换到飞控控制的飞行模式时, 这些通道输出依然是错误的(它只会改变你的遥控器的信号) 因此，对于一个正确的通道分配，要么改变PWM信号与"),n("code",[t._v("PWM_MAIN_REV1")]),t._v("（例如，对于通道1），要么改变相应混控器的输出缩放系数（见下文）。")])]),t._v(" "),n("p",[n("a",{attrs:{id:"mixer-file"}})]),t._v(" "),n("h3",{attrs:{id:"混控器文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#混控器文件"}},[t._v("#")]),t._v(" 混控器文件")]),t._v(" "),n("blockquote",[n("p",[n("strong",[t._v("Note")]),t._v(" First read "),n("RouterLink",{attrs:{to:"/zh/concept/mixing.html"}},[t._v("Concepts > Mixing")]),t._v(". This provides background information required to interpret this mixer file. 该页面中的内容提供了理解如下混控器文件所需的背景知识。")],1)]),t._v(" "),n("p",[t._v("A typical mixer file is shown below ("),n("a",{attrs:{href:"https://github.com/PX4/Firmware/blob/master/ROMFS/px4fmu_common/mixers/wingwing.main.mix",target:"_blank",rel:"noopener noreferrer"}},[t._v("original file here"),n("OutboundLink")],1),t._v("). A mixer filename, in this case "),n("code",[t._v("wingwing.main.mix")]),t._v(", gives important information about the type of airframe ("),n("code",[t._v("wingwing")]),t._v("), the type of output ("),n("code",[t._v(".main")]),t._v(" or "),n("code",[t._v(".aux")]),t._v(") and lastly that it is a mixer file ("),n("code",[t._v(".mix")]),t._v("). 混控器文件的文件名，在这里的案例中也就是 "),n("code",[t._v("wingwing.main.mix")]),t._v("，向我们提供了包括机型类型（"),n("code",[t._v("wingwing")]),t._v("），输出类型（"),n("code",[t._v(".main")]),t._v(" 或者 "),n("code",[t._v(".aux")]),t._v("）和它是一个混控器定义文件（"),n("code",[t._v(".mix")]),t._v("）这三个重要信息。")]),t._v(" "),n("p",[t._v("混频器文件包含多个代码块，每个代码块都针对一个执行器或电调。 The mixer file contains several blocks of code, each of which refers to one actuator or ESC. So if you have e.g. two servos and one ESC, the mixer file will contain three blocks of code.")]),t._v(" "),n("blockquote",[n("p",[n("strong",[t._v("Note")]),t._v(" 舵机 / 电机应按照混控器文件中的定义顺序对应地接入飞控。")])]),t._v(" "),n("p",[t._v("所以 MAIN1 应为左副翼，MAIN2 应为为右副翼 ，MAIN3 为空 （这里需要注意的是 Z: 表示混控器为空），MAIN4 为油门（在常规固定翼机型配置中应保持油门在 4 号输出位置上）。")]),t._v(" "),n("p",[t._v("混控器以 -10000 到 10000 这一范围进行单位化编码，其分别对应于 -1.. + 1。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("M: 2\nO:      10000  10000      0 -10000  10000\nS: 0 0  -6000  -6000      0 -10000  10000\nS: 0 1   6500   6500      0 -10000  10000\n")])])]),n("p",[t._v("上述定义中从左到右每一个数字所代表的意思是：")]),t._v(" "),n("ul",[n("li",[t._v("M: Indicates two scalers for two control inputs. It indicates the number of control inputs the mixer will receive. 该参数表示混控器将接受到的控制输入的数量。")]),t._v(" "),n("li",[t._v("O: Indicates the output scaling (*1 in negative, *1 in positive), offset (zero here), and output range (-1..+1 here).\n"),n("ul",[n("li",[t._v("If you want to invert your PWM signal, the signs of the output scalings have to be changed. ("),n("code",[t._v("O: -10000 -10000 0 -10000 10000")]),t._v(")"),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("O:      -10000  -10000      0 -10000  10000\n")])])])]),t._v(" "),n("li",[t._v("This line can (and should) be omitted completely if it specifies the default scaling: "),n("code",[t._v("O: 10000 10000 0 -10000 10000")]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("O:      10000  10000   0 -10000  10000\n")])])])])])]),t._v(" "),n("li",[t._v("S: Indicates the first input scaler: It takes input from control group #0 (Flight Control) and the first input (roll). It scales the roll control input * 0.6 and reverts the sign (-0.6 becomes -6000 in scaled units). It applies no offset (0) and outputs to the full range (-1..+1) 它将滚转控制输入 * 0.6 进行缩放并反转输入量的正负号（-0.6 在缩放后的单位中变成了 -6000）。 该混控器不施加任何偏移量（0）且输出量幅值在 （-1.. +1）这个范围内。")]),t._v(" "),n("li",[t._v("S: Indicates the second input scaler: It takes input from control group #0 (Flight Control) and the second input (pitch). It scales the pitch control input * 0.65. It applies no offset (0) and outputs to the full range (-1..+1) \\ It scales the pitch control input * 0.65. 该混控器不施加任何偏移量（0）且输出量幅值在 （-1.. +1）这个范围内。")])]),t._v(" "),n("blockquote",[n("p",[n("strong",[t._v("Note")]),t._v(" In short, the output of this mixer would be SERVO = ( (roll input * -0.6 + 0) + (pitch input * 0.65 + 0) ) * 1 + 0")])]),t._v(" "),n("p",[t._v("程序后台会对两个缩放器的值进行求和，这就意味着对于这个飞翼来说该控制舵面最大从滚转信号中取 60% 的舵面偏转、从俯仰信号中最大取 65% 的舵面偏转。")]),t._v(" "),n("p",[t._v("完整的混控器如下所示:")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("Delta-wing mixer "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" PX4FMU\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n\nDesigned "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" Wing Wing Z-84\n\nThis "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" defines mixers suitable "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" controlling a delta wing aircraft using\nPX4FMU. The configuration assumes the elevon servos are connected to PX4FMU\nservo outputs "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" and "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" and the motor speed control to output "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(". Output "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" is\nassumed to be unused.\n\nInputs to the mixer come from channel group "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vehicle attitude"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", channels "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("roll"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pitch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" and "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("thrust"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".\n\nSee the README "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("more")]),t._v(" information on the scaler format.\n\nElevon mixers\n-------------\nThree scalers total "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("output, roll, pitch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".\n\nThe scaling factor "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" roll inputs is adjusted to implement differential travel\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" the elevons. \n\nThis first block of code is "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" Servo "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n\nM: "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\nO:      "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("      "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" -10000  "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("\nS: "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("  -6000  -6000      "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" -10000  "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("\nS: "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("   "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("6500")]),t._v("   "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("6500")]),t._v("      "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" -10000  "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("\n\nAnd this is "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" Servo "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n\nM: "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\nO:      "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("      "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" -10000  "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("\nS: "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("  -6000  -6000      "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" -10000  "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("\nS: "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("  -6500  -6500      "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" -10000  "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("\n\nNote that "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" principle, you could implement left/right wing asymmetric mixing, but "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" general the two blocks of code will be numerically equal, and just differ by the sign of the third line "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("S: "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", since to roll the plane, the two ailerons must move "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" OPPOSITE directions. The signs of the second lines "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("S: "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" are indentical, since to pitch the plane, both servos need to move "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" the SAME direction. \n\nOutput "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n--------\nThis mixer is empty.\n\nZ:\n\nMotor speed mixer\n-----------------\nTwo scalers total "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("output, thrust"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".\n\nThis mixer generates a full-range output "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("-1 to "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" from an input "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" the "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" - "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nrange.  Inputs below zero are treated as zero.\n\nM: "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nO:      "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("      "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" -10000  "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("\nS: "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("      "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("20000")]),t._v(" -10000 -10000  "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v(" The configuration assumes the elevon servos are connected to PX4FMU\nservo outputs "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" and "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" and the motor speed control to output "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(". Output "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" is\nassumed to be unused.\n\nInputs to the mixer come from channel group "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vehicle attitude"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", channels "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("roll"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pitch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" and "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("thrust"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".\n\nSee the README "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("more")]),t._v(" information on the scaler format.\n\nElevon mixers\n-------------\nThree scalers total "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("output, roll, pitch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".\n\nThe scaling factor "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" roll inputs is adjusted to implement differential travel\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" the elevons.\n\nThis first block of code is "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" Servo "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n\nM: "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\nO:      "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("      "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" -10000  "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("\nS: "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("  -6000  -6000      "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" -10000  "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("\nS: "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("   "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("6500")]),t._v("   "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("6500")]),t._v("      "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" -10000  "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("\n\nAnd this is "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" Servo "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n\nM: "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\nO:      "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("      "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" -10000  "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("\nS: "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("  -6000  -6000      "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" -10000  "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("\nS: "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("  -6500  -6500      "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" -10000  "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("\n\nNote that "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" principle, you could implement left/right wing asymmetric mixing, but "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" general the two blocks of code will be numerically equal, and just differ by the sign of the third line "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("S: "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", since to roll the plane, the two ailerons must move "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" OPPOSITE directions.\nThe signs of the second lines "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("S: "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" are indentical, since to pitch the plane, both servos need to move "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" the SAME direction.\n\nOutput "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n--------\nThis mixer is empty.\n\nZ:\n\nMotor speed mixer\n-----------------\nTwo scalers total "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("output, thrust"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".\n\nThis mixer generates a full-range output "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("-1 to "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" from an input "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" the "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" - "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nrange.  Inputs below zero are treated as zero.\n\nM: "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nO:      "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("      "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" -10000  "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("\nS: "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("      "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("20000")]),t._v(" -10000 -10000  "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("\n\n")])])]),n("h2",{attrs:{id:"增加一个新的机型组-airframe-group"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#增加一个新的机型组-airframe-group"}},[t._v("#")]),t._v(" 增加一个新的机型组（Airframe Group）")]),t._v(" "),n("p",[t._v('Airframe "groups" are used to group similar airframes for selection in '),n("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/SetupView/Airframe.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGroundControl"),n("OutboundLink")],1),t._v(" and in the "),n("em",[t._v("Airframe Reference")]),t._v(" documentation ("),n("RouterLink",{attrs:{to:"/zh/airframes/airframe_reference.html"}},[t._v("PX4 DevGuide")]),t._v(" and "),n("a",{attrs:{href:"https://docs.px4.io/en/airframes/airframe_reference.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4 UserGuide"),n("OutboundLink")],1),t._v("). Every group has a name, and an associated svg image which shows the common geometry, number of motors, and direction of motor rotation for the grouped airframes. 每个组都有一个名称和与之相关联的 svg 图像，该图像展示了该分组内的机型的通用几何形状、电机数量和电机旋转方向。")],1),t._v(" "),n("p",[t._v("使用编译指令 "),n("code",[t._v("make airframe_metadata")]),t._v(" 可以运行脚本自动根据机型描述语句生成需要在 "),n("em",[t._v("QGroundControl")]),t._v(" 中使用的机型元数据文件和文档源代码。")]),t._v(" "),n("p",[t._v("For a new airframe belonging to an existing group, you don't need to do anything more than provide documentation in the airframe description located at "),n("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/ROMFS/px4fmu_common/init.d",target:"_blank",rel:"noopener noreferrer"}},[t._v("ROMFS/px4fmu_common/init.d"),n("OutboundLink")],1),t._v(".")]),t._v(" "),n("p",[t._v("如果机型属于一个 "),n("strong",[t._v("新的组")]),t._v(" 那么你还需要进行如下操作：")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("Add the svg image for the group into user guide documentation (if no image is provided a placeholder image is displayed): "),n("a",{attrs:{href:"https://github.com/PX4/px4_user_guide/tree/master/assets/airframes/types",target:"_blank",rel:"noopener noreferrer"}},[t._v("assets/airframes/types"),n("OutboundLink")],1)])]),t._v(" "),n("li",[n("p",[t._v("Add a mapping between the new group name and image filename in the "),n("a",{attrs:{href:"https://github.com/PX4/Firmware/blob/master/Tools/px4airframes/srcparser.py",target:"_blank",rel:"noopener noreferrer"}},[t._v("srcparser.py"),n("OutboundLink")],1),t._v(" method "),n("code",[t._v("GetImageName()")]),t._v(' (follow the pattern below): def GetImageName(self): """ Get parameter group image base name (w/o extension) """ if (self.name == "Standard Plane"): return "Plane" elif (self.name == "Flying Wing"): return "FlyingWing" ... ... return "AirframeUnknown"')]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('def GetImageName(self):\n    """\n    Get parameter group image base name (w/o extension)\n    """\n    if (self.name == "Standard Plane"):\n        return "Plane"\n    elif (self.name == "Flying Wing"):\n        return "FlyingWing"\n     ...\n ...\n    return "AirframeUnknown"\n')])])])]),t._v(" "),n("li",[n("p",[t._v("更新 "),n("em",[t._v("QGroundControl")]),t._v("：")]),t._v(" "),n("ul",[n("li",[t._v("将该机型组的 svg 图像文件添加至： "),n("a",{attrs:{href:"https://github.com/mavlink/qgroundcontrol/tree/master/src/AutoPilotPlugins/Common/Images",target:"_blank",rel:"noopener noreferrer"}},[t._v("src/AutopilotPlugins/Common/images"),n("OutboundLink")],1)]),t._v(" "),n("li",[t._v("Add reference to the svg image into "),n("a",{attrs:{href:"https://github.com/mavlink/qgroundcontrol/blob/master/qgcresources.qrc",target:"_blank",rel:"noopener noreferrer"}},[t._v("qgcresources.qrc"),n("OutboundLink")],1),t._v(", following the pattern below:"),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('<qresource prefix="/qmlimages">\n   ...\n   <file alias="Airframe/AirframeSimulation">src/AutoPilotPlugins/Common/Images/AirframeSimulation.svg</file>\n   <file alias="Airframe/AirframeUnknown">src/AutoPilotPlugins/Common/Images/AirframeUnknown.svg</file>\n   <file alias="Airframe/Boat">src/AutoPilotPlugins/Common/Images/Boat.svg</file>\n   <file alias="Airframe/FlyingWing">src/AutoPilotPlugins/Common/Images/FlyingWing.svg</file>\n   ...\n')])])])])]),t._v(" "),n("blockquote",[n("p",[n("strong",[t._v("Note")]),t._v(" The remaining airframe metadata should be automatically included in the firmware (once "),n("strong",[t._v("srcparser.py")]),t._v(" is updated).")])])])]),t._v(" "),n("h2",{attrs:{id:"调参"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#调参"}},[t._v("#")]),t._v(" 调参")]),t._v(" "),n("p",[t._v("The following topics explain how to tune the parameters that will be specified in the config file:")]),t._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/zh/config_mc/pid_tuning_guide_multicopter.html"}},[t._v("多轴飞行器 PID 调参指南")])],1),t._v(" "),n("li",[n("RouterLink",{attrs:{to:"/zh/config_fw/pid_tuning_guide_fixedwing.html"}},[t._v("固定翼 PID 调参指南")])],1),t._v(" "),n("li",[n("RouterLink",{attrs:{to:"/zh/config_vtol/"}},[t._v("垂直起降（VTOL）配置")])],1)]),t._v(" "),n("h2",{attrs:{id:"将新的机型加入到-qgroundcontrol"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#将新的机型加入到-qgroundcontrol"}},[t._v("#")]),t._v(" 将新的机型加入到 QGroundControl")]),t._v(" "),n("p",[t._v("To make a new airframe available for section in the "),n("em",[t._v("QGroundControl")]),t._v(" "),n("a",{attrs:{href:"https://docs.px4.io/en/config/airframe.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("airframe configuration"),n("OutboundLink")],1),t._v(":")]),t._v(" "),n("ol",[n("li",[t._v("创建一个干净的生成（例如，先运行 "),n("code",[t._v("make clean")]),t._v(" 指令，然后再运行 "),n("code",[t._v("make px4_fmu-v5_default")]),t._v("）")]),t._v(" "),n("li",[t._v("打开 QGC 然后如下图所示单击 "),n("strong",[t._v("Custom firmware file...")]),t._v("：")])]),t._v(" "),n("p",[n("img",{attrs:{src:s(676),alt:"QGC 载入自定义固件"}})]),t._v(" "),n("p",[t._v("随后你将会被要求选择需要被载入的 "),n("strong",[t._v(".px4")]),t._v(" 固件文件（该文件是一个被压缩的 JSON 文件，文件内包含了机型的元数据）。")]),t._v(" "),n("ol",[n("li",[t._v("Navigate to the build folder and select the firmware file (e.g. "),n("strong",[t._v("Firmware/build/px4_fmu-v5_default/px4_fmu-v5_default.px4")]),t._v(").")]),t._v(" "),n("li",[t._v("单击 "),n("strong",[t._v("OK")]),t._v(" 开始载入固件。")]),t._v(" "),n("li",[t._v("重启 "),n("em",[t._v("QGroundControl")]),t._v("。")])]),t._v(" "),n("p",[t._v("新的机型现在应可以在 "),n("em",[t._v("QGroundControl")]),t._v(" 中进行选择了。")])])}),[],!1,null,null,null);e.default=a.exports},676:function(t,e,s){t.exports=s.p+"assets/img/qgc_flash_custom_firmware.1cc69a59.png"}}]);