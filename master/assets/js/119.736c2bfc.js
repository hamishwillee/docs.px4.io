(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{2406:function(t,e,o){"use strict";o.r(e);var a=o(18),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"遥控设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#遥控设置"}},[t._v("#")]),t._v(" 遥控设置")]),t._v(" "),a("p",[t._v("*遥控器设置 *界面是用来映射遥控器的摇杆（如横滚、俯仰、偏航以及油门）通道，校准最小值和最大值和遥控器的正反向设置。")]),t._v(" "),a("h2",{attrs:{id:"绑定接收机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#绑定接收机"}},[t._v("#")]),t._v(" 绑定接收机")]),t._v(" "),a("p",[t._v("在你校准遥控器之前，遥控器的发射机和接收机需要绑定（对频）。 发射机和接收机对频的方法各有不同（请参照您使用的遥控器的说明书） 提醒：如果您使用的是 Spektrum 的接收机， 提醒：如果您使用的是 FrSky 的接收机，您可以在发射机上进行绑定（对频），下面是介绍。")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("If you are using a "),a("em",[t._v("Spektrum")]),t._v(" receiver, you can put it into bind mode using "),a("em",[t._v("QGroundControl")]),t._v(", as "),a("a",{attrs:{href:"#spektrum_bind"}},[t._v("shown below")]),t._v(".")])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("If you are using a "),a("em",[t._v("FrSky")]),t._v(" receiver, you can bind it with its transmitter, by following instructions "),a("a",{attrs:{href:"https://www.youtube.com/watch?v=1IYg5mQdLVI",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("p",[a("span",{attrs:{id:"rc_loss_detection"}})]),t._v(" "),a("h2",{attrs:{id:"rc-loss-detection"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rc-loss-detection"}},[t._v("#")]),t._v(" RC Loss Detection")]),t._v(" "),a("p",[t._v("PX4 needs to be able to detect when the signal from the RC controller has been lost in order to be able to take "),a("RouterLink",{attrs:{to:"/zh/config/safety.html#rc_loss_failsafe"}},[t._v("appropriate safety measures")]),t._v(".")],1),t._v(" "),a("p",[t._v("RC receivers have different ways of indicating signal loss:")]),t._v(" "),a("ul",[a("li",[t._v("Output nothing (automatically detected by PX4)")]),t._v(" "),a("li",[t._v("Output a low throttle value (you can configure PX4 to detect this).")]),t._v(" "),a("li",[t._v("Output the last received signal ("),a("em",[t._v("cannot be detected by PX4")]),t._v(" as it looks like valid input).")])]),t._v(" "),a("p",[t._v("If your RC receiver does not support outputting no signal on RC loss, you must configure it to set throttle low instead, and set the corresponding value in "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#RC_FAILS_THR"}},[t._v("RC_FAILS_THR")]),t._v(".")],1),t._v(" "),a("p",[t._v("The way to do this is to set the RC controller trim and throttle stick as low as possible, and use the resulting output PWM value in both PX4 and the receiver (read your receiver manual to determine how to set the RC loss value). Then reset the throttle stick trim back to its normal position. This process ensures that the RC loss value is below the minimum value output by the receiver in normal operation.")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("Do not use a receiver that cannot support one of the two supported RC loss detection methods!")])]),t._v(" "),a("h2",{attrs:{id:"执行校准"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行校准"}},[t._v("#")]),t._v(" 执行校准")]),t._v(" "),a("p",[t._v("The calibration process is straightforward - you will be asked to move the sticks in a specific pattern that is shown on the transmitter diagram on the top right of the screen.")]),t._v(" "),a("p",[t._v("To calibrate the radio:")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("打开您的 RC 发射机。")])]),t._v(" "),a("li",[a("p",[t._v("打开 "),a("em",[t._v("QGroundControl")]),t._v(" 并连接上飞机。")])]),t._v(" "),a("li",[a("p",[t._v("在上面的工具条中选择 "),a("strong",[t._v("齿轮")]),t._v(" 按钮，然后在左面的工具条中选择 "),a("strong",[t._v("遥控器")]),t._v(" 按钮。")])]),t._v(" "),a("li",[a("p",[t._v("点击 "),a("strong",[t._v("OK")]),t._v(" 开始。")]),t._v(" "),a("p",[a("img",{attrs:{src:o(634),alt:"遥控器设置-开始之前"}})])]),t._v(" "),a("li",[a("p",[t._v("设置和你遥控相匹配的 "),a("RouterLink",{attrs:{to:"/zh/getting_started/rc_transmitter_receiver.html#transmitter_modes"}},[t._v("发射机模式")]),t._v("（即左右手）（这个确保在下面的校准中 "),a("em",[t._v("QGroundControl")]),t._v(" 准确显示摇杆的位置）")],1),t._v(" "),a("p",[a("img",{attrs:{src:o(635),alt:"遥控器设置-移动摇杆"}})])]),t._v(" "),a("li",[a("p",[t._v("按照文字（在遥控器的图上）提示移动摇杆的位置。 当摇杆到达位置，点击 "),a("strong",[t._v("下一步")]),t._v(" 。 重复上述步骤。")])]),t._v(" "),a("li",[a("p",[t._v("当出现提示，移动所有开关和旋钮到最大行程（你可以在 "),a("em",[t._v("通道监视器")]),t._v(" 上看到他们指示条的移动）。")])]),t._v(" "),a("li",[a("p",[t._v("点击 "),a("strong",[t._v("下一步")]),t._v(" 保存设置。")])])]),t._v(" "),a("p",[t._v("Radio calibration is demonstrated in the "),a("a",{attrs:{href:"https://youtu.be/91VGmdSlbo4?t=4m30s",target:"_blank",rel:"noopener noreferrer"}},[t._v("autopilot setup video here"),a("OutboundLink")],1),t._v(" (youtube).")]),t._v(" "),a("h2",{attrs:{id:"其他的遥控器设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他的遥控器设置"}},[t._v("#")]),t._v(" 其他的遥控器设置")]),t._v(" "),a("p",[t._v("As well as calibrating your control sticks and other transmitter controls, there are a number of additional radio setup options that you may find useful on this screen.")]),t._v(" "),a("img",{attrs:{src:o(636),title:"Radio setup - additional settings",width:"300px"}}),t._v(" "),a("p",[a("span",{attrs:{id:"spektrum_bind"}})]),t._v(" "),a("h3",{attrs:{id:"spectrum-对频"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spectrum-对频"}},[t._v("#")]),t._v(" Spectrum 对频")]),t._v(" "),a("p",[t._v("Before you can calibrate the radio system the receiver and transmitter must be connected/bound. If you have a "),a("em",[t._v("Spektrum")]),t._v(" receiver you can put it in "),a("em",[t._v("bind mode")]),t._v(" using "),a("em",[t._v("QGroundControl")]),t._v(" as shown below (this can be particularly useful if you don't have easy physical access to the receiver on your vehicle).")]),t._v(" "),a("p",[t._v("To bind a Spektrum transmitter/receiver:")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("选择 "),a("strong",[t._v("Spektrum 对频")]),t._v(" 的按钮。")])]),t._v(" "),a("li",[a("p",[t._v("选择接收机上的 “radio” 按钮。")])]),t._v(" "),a("li",[a("p",[t._v("点击 "),a("strong",[t._v("OK")]),t._v("。")]),t._v(" "),a("p",[a("img",{attrs:{src:o(637),alt:"Spektrum对频"}})])]),t._v(" "),a("li",[a("p",[t._v("按着对频按钮，打开你的 Spektrum 遥控器。")])])]),t._v(" "),a("h3",{attrs:{id:"复制微调"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#复制微调"}},[t._v("#")]),t._v(" 复制微调")]),t._v(" "),a("p",[t._v("This setting is used to copy the manual trim settings from your radio transmitter so that they can be applied automatically within the autopilot. After this is done you will need to remove the manually set trims.")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("Trim settings are used to adjust the roll, pitch, yaw such that when you center the sticks on your remote control, you get stable or level flight (in Stabilized flight mode). Some RC controllers provide trim knobs that allow you to provide an offset to the value sent by the RC controller for each stick position. The "),a("strong",[t._v("Copy Trims")]),t._v(" setting here moves the offsets into the autopilot.")])]),t._v(" "),a("p",[t._v("To copy the trims:")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("选择 "),a("strong",[t._v("微调")]),t._v("。")])]),t._v(" "),a("li",[a("p",[t._v("摇杆居中，油门杆最低。")])]),t._v(" "),a("li",[a("p",[t._v("点击 "),a("strong",[t._v("Ok")]),t._v(" 。")]),t._v(" "),a("p",[a("img",{attrs:{src:o(638),alt:"复制微调"}})])]),t._v(" "),a("li",[a("p",[t._v("设置遥控器器微调为0。")])])]),t._v(" "),a("h3",{attrs:{id:"辅助通道"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#辅助通道"}},[t._v("#")]),t._v(" 辅助通道")]),t._v(" "),a("p",[t._v("AUX passthrough channels allow you to control arbitrary optional hardware from your transmitter (for example, a gripper).")]),t._v(" "),a("p",[t._v("To use the AUX passthrough channels:")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("映射2个遥控器控制来隔离通道。")])]),t._v(" "),a("li",[a("p",[t._v("如下所示，依次映射这些通道到端口 AUX1 和 AUX2。 设置后，保存到自驾仪。")]),t._v(" "),a("p",[a("img",{attrs:{src:o(639),alt:"遥控器的AUX1和AUX2通道"}})])])]),t._v(" "),a("p",[t._v("The flight controller will pass through the unmodified values from the specified channels out of AUX1/AUX2 to the connected servos/relays that drive your hardware.")]),t._v(" "),a("h3",{attrs:{id:"参数调试通道"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数调试通道"}},[t._v("#")]),t._v(" 参数调试通道")]),t._v(" "),a("p",[t._v("Tuning channels allow you to map a transmitter tuning knob to a parameter (so that you can dynamically modify a parameter from your transmitter).")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("This feature is provided to enable manual in-flight tuning: "),a("RouterLink",{attrs:{to:"/zh/config_mc/pid_tuning_guide_multicopter.html"}},[t._v("Multicopter PID Tuning Guide")]),t._v(", "),a("RouterLink",{attrs:{to:"/zh/config_fw/pid_tuning_guide_fixedwing.html"}},[t._v("Fixedwing PID Tuning Guide")]),t._v(".")],1)]),t._v(" "),a("p",[t._v("The channels used for parameter tuning are assigned in the "),a("em",[t._v("Radio")]),t._v(" setup (here!), while the mapping from each tuning channel to its associated parameter is defined in the "),a("em",[t._v("Parameter editor")]),t._v(".")]),t._v(" "),a("p",[t._v("To set up tuning channels:")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("映射3个遥控器通道（旋钮或滑块开关）来分离通道。")])]),t._v(" "),a("li",[a("p",[t._v("使用选择列表，选择"),a("em",[t._v("参数调试")]),t._v("映射到遥控器通道。 设置后，保存到自驾仪。")]),t._v(" "),a("p",[a("img",{attrs:{src:o(640),alt:"映射遥控器通道到调试通道"}})])])]),t._v(" "),a("p",[t._v("To map a PARAM tuning channel to a parameter:")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("打开侧栏的"),a("strong",[t._v("参数")]),t._v("。")])]),t._v(" "),a("li",[a("p",[t._v("选择参数映射到你的遥控器（这个会打开"),a("em",[t._v("参数编辑器")]),t._v("）。")])]),t._v(" "),a("li",[a("p",[t._v("选中"),a("strong",[t._v("高级设置")]),t._v("复选框。")])]),t._v(" "),a("li",[a("p",[t._v("Click the "),a("strong",[t._v("Set RC to Param...")]),t._v(" button (this will pop-up the foreground dialog displayed below)")]),t._v(" "),a("p",[a("img",{attrs:{src:o(641),alt:"映射调试通道到参数"}})])]),t._v(" "),a("li",[a("p",[t._v("从 "),a("em",[t._v("参数调整 id")]),t._v("选择列表中选择要映射的调整通道 (1、2或 3)。")])]),t._v(" "),a("li",[a("p",[t._v("点击 "),a("strong",[t._v("OK")]),t._v(" 定关闭对话框。")])]),t._v(" "),a("li",[a("p",[t._v("点击 "),a("strong",[t._v("保存")]),t._v(" 保存修改，关闭"),a("em",[t._v("参数编辑器")]),t._v("。")])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("You can clear all parameter/tuning channel mappings by selecting menu "),a("strong",[t._v("Tools > Clear RC to Param")]),t._v(" at the top right of the "),a("em",[t._v("Parameters")]),t._v(" screen.")])]),t._v(" "),a("h2",{attrs:{id:"更多信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更多信息"}},[t._v("#")]),t._v(" 更多信息")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/SetupView/Radio.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGroundControl > 远程控制"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://youtu.be/91VGmdSlbo4?t=4m30s",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4 设置视频 - @4m30s"),a("OutboundLink")],1),t._v(" (Youtube)")]),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/getting_started/rc_transmitter_receiver.html"}},[t._v("遥控系统选择")]),t._v(" - 选择一个兼容的遥控系统。")],1)])])}),[],!1,null,null,null);e.default=s.exports},634:function(t,e,o){t.exports=o.p+"assets/img/radio_start_setup.a0fa4f53.jpg"},635:function(t,e,o){t.exports=o.p+"assets/img/radio_sticks_throttle.139795e9.jpg"},636:function(t,e,o){t.exports=o.p+"assets/img/radio_additional_radio_setup.ecd4363a.jpg"},637:function(t,e,o){t.exports=o.p+"assets/img/radio_additional_setup_spectrum_bind_select_channels.6b7ff256.jpg"},638:function(t,e,o){t.exports=o.p+"assets/img/radio_additional_radio_setup_copy_trims.ab0f7d3f.jpg"},639:function(t,e,o){t.exports=o.p+"assets/img/radio_additional_setup_aux_passthrough_channels.be0edc70.jpg"},640:function(t,e,o){t.exports=o.p+"assets/img/radio_additional_radio_setup_param_tuning.49f5b6d3.jpg"},641:function(t,e,o){t.exports=o.p+"assets/img/parameters_radio_channel_mapping.c1adf31c.jpg"}}]);