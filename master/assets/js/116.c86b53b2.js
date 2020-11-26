(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{2311:function(t,e,_){"use strict";_.r(e);var r=_(18),v=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"遥控设置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#遥控设置"}},[t._v("#")]),t._v(" 遥控设置")]),t._v(" "),r("p",[t._v("*遥控器设置 *界面是用来映射遥控器的摇杆（如横滚、俯仰、偏航以及油门）通道，校准最小值和最大值和遥控器的正反向设置。")]),t._v(" "),r("h2",{attrs:{id:"绑定接收机"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#绑定接收机"}},[t._v("#")]),t._v(" 绑定接收机")]),t._v(" "),r("p",[t._v("在你校准遥控器之前，遥控器的发射机和接收机需要绑定（对频）。 发射机和接收机对频的方法各有不同（请参照您使用的遥控器的说明书） 提醒：如果您使用的是 Spektrum 的接收机， 提醒：如果您使用的是 FrSky 的接收机，您可以在发射机上进行绑定（对频），下面是介绍。")]),t._v(" "),r("blockquote",[r("p",[r("strong",[t._v("提醒")]),t._v(" 如果您使用的是 "),r("em",[t._v("Spektrum")]),t._v(" 接收机,，你可以使用 * QGroundControl * 将它设置在绑定（对频）模式,，如"),r("a",{attrs:{href:"#spektrum_bind"}},[t._v("下面所示")]),t._v("。")])]),t._v(" "),r("p",[r("span")]),t._v(" "),r("blockquote",[r("p",[r("strong",[t._v("提醒")]),t._v("：如果您使用的是 *FrSky * 的接收机，您可以在发射机上进行绑定（对频），下面是"),r("a",{attrs:{href:"https://www.youtube.com/watch?v=1IYg5mQdLVI",target:"_blank",rel:"noopener noreferrer"}},[t._v("介绍"),r("OutboundLink")],1),t._v("。")])]),t._v(" "),r("p",[r("span",{attrs:{id:"rc_loss_detection"}})]),t._v(" "),r("h2",{attrs:{id:"rc-loss-detection"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rc-loss-detection"}},[t._v("#")]),t._v(" RC Loss Detection")]),t._v(" "),r("p",[t._v("PX4 needs to be able to detect when the signal from the RC controller has been lost in order to be able to take "),r("RouterLink",{attrs:{to:"/zh/config/safety.html#rc_loss_failsafe"}},[t._v("appropriate safety measures")]),t._v(".")],1),t._v(" "),r("p",[t._v("RC receivers have different ways of indicating signal loss:")]),t._v(" "),r("ul",[r("li",[t._v("Output nothing (automatically detected by PX4)")]),t._v(" "),r("li",[t._v("Output a low throttle value value (you can configure PX4 to detect this).")]),t._v(" "),r("li",[t._v("Output the last received signal ("),r("em",[t._v("cannot be detected by PX4")]),t._v(" as it looks like valid input).")])]),t._v(" "),r("p",[t._v("If your RC receiver does not support outputting no signal on RC loss, you must configure it to set throttle low instead, and set the corresponding value in "),r("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#RC_FAILS_THR"}},[t._v("RC_FAILS_THR")]),t._v(".")],1),t._v(" "),r("p",[t._v("The way to do this is to set the RC controller trim and throttle stick as low as possible, and use the resulting output PWM value in both PX4 and the receiver (read your receiver manual to determine how to set the RC loss value). Then reset the throttle stick trim back to its normal position. This process ensures that the RC loss value is below the minimum value output by the receiver in normal operation.")]),t._v(" "),r("blockquote",[r("p",[r("strong",[t._v("Note")]),t._v(" Do not use a receiver that cannot support one of the two supported RC loss detection methods!")])]),t._v(" "),r("h2",{attrs:{id:"执行校准"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#执行校准"}},[t._v("#")]),t._v(" 执行校准")]),t._v(" "),r("p",[t._v("校准方法很简单，你只需要按照屏幕右上角的示意图移动遥控器的摇杆即可。")]),t._v(" "),r("p",[t._v("遥控器校准")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("打开您的 RC 发射机。")])]),t._v(" "),r("li",[r("p",[t._v("打开 "),r("em",[t._v("QGroundControl")]),t._v(" 并连接上飞机。")])]),t._v(" "),r("li",[r("p",[t._v("在上面的工具条中选择 "),r("strong",[t._v("齿轮")]),t._v(" 按钮，然后在左面的工具条中选择 "),r("strong",[t._v("遥控器")]),t._v(" 按钮。")])]),t._v(" "),r("li",[r("p",[t._v("点击 "),r("strong",[t._v("OK")]),t._v(" 开始。")]),t._v(" "),r("p",[r("img",{attrs:{src:_(633),alt:"遥控器设置-开始之前"}})])]),t._v(" "),r("li",[r("p",[t._v("设置和你遥控相匹配的 "),r("RouterLink",{attrs:{to:"/zh/getting_started/rc_transmitter_receiver.html#transmitter_modes"}},[t._v("发射机模式")]),t._v("（即左右手）（这个确保在下面的校准中 "),r("em",[t._v("QGroundControl")]),t._v(" 准确显示摇杆的位置）")],1),t._v(" "),r("p",[r("img",{attrs:{src:_(634),alt:"遥控器设置-移动摇杆"}})])]),t._v(" "),r("li",[r("p",[t._v("按照文字（在遥控器的图上）提示移动摇杆的位置。 当摇杆到达位置，点击 "),r("strong",[t._v("下一步")]),t._v(" 。 重复上述步骤。")])]),t._v(" "),r("li",[r("p",[t._v("当出现提示，移动所有开关和旋钮到最大行程（你可以在 "),r("em",[t._v("通道监视器")]),t._v(" 上看到他们指示条的移动）。")])]),t._v(" "),r("li",[r("p",[t._v("点击 "),r("strong",[t._v("下一步")]),t._v(" 保存设置。")])])]),t._v(" "),r("p",[t._v("在 "),r("a",{attrs:{href:"https://youtu.be/91VGmdSlbo4?t=4m30s",target:"_blank",rel:"noopener noreferrer"}},[t._v("autopilot setup video here"),r("OutboundLink")],1),t._v(" (youtube) 中有遥控器校准的视频演示。")]),t._v(" "),r("h2",{attrs:{id:"其他的遥控器设置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#其他的遥控器设置"}},[t._v("#")]),t._v(" 其他的遥控器设置")]),t._v(" "),r("p",[t._v("除了校准你的控制杆和其他遥控，在这个界面还有一些其他游泳的遥控器设置选项。")]),t._v(" "),r("img",{attrs:{src:_(635),title:"遥控器设置-其他设置",width:"300px"}}),t._v(" "),r("p",[r("span",{attrs:{id:"spektrum_bind"}})]),t._v(" "),r("h3",{attrs:{id:"spectrum-对频"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#spectrum-对频"}},[t._v("#")]),t._v(" Spectrum 对频")]),t._v(" "),r("p",[t._v("在你校准遥控器之前，遥控器的发射机和接收机需要绑定（对频）。 如果你使用的是 "),r("em",[t._v("Spektrum")]),t._v(" 的接收机，你可以按照下面的提示，使用 "),r("em",[t._v("QGroundControl")]),t._v(" 将它设置到 "),r("em",[t._v("绑定（对频）模式")]),t._v(" （如果你没有简便的物理方式用接收机连接飞控，这个会挺好用）。")]),t._v(" "),r("p",[t._v("Spektrum遥控器和接收机的对频")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("选择 "),r("strong",[t._v("Spektrum 对频")]),t._v(" 的按钮。")])]),t._v(" "),r("li",[r("p",[t._v("选择接收机上的 “radio” 按钮。")])]),t._v(" "),r("li",[r("p",[t._v("点击 "),r("strong",[t._v("OK")]),t._v("。")]),t._v(" "),r("p",[r("img",{attrs:{src:_(636),alt:"Spektrum对频"}})])]),t._v(" "),r("li",[r("p",[t._v("按着对频按钮，打开你的 Spektrum 遥控器。")])])]),t._v(" "),r("h3",{attrs:{id:"复制微调"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#复制微调"}},[t._v("#")]),t._v(" 复制微调")]),t._v(" "),r("p",[t._v("这个设置是从你的遥控器复制手动微调设置，然后自动应用到自驾仪。 这个做完后，你需要手动移除微调设置。")]),t._v(" "),r("blockquote",[r("p",[r("strong",[t._v("提醒")]),t._v("微调设置是当你进行远程遥控，回中遥感时，适应横滚、俯仰、偏航，是你进行平稳或水平飞行（在自稳模式下）。 一些遥控器有微调旋钮，可以允许你对遥控器发送的每一个摇杆位置的值设置一个偏移量。 这里的"),r("strong",[t._v("微调设置")]),t._v("将偏移量转移到了自驾仪中。")])]),t._v(" "),r("p",[t._v("复制微调")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("选择 "),r("strong",[t._v("微调")]),t._v("。")])]),t._v(" "),r("li",[r("p",[t._v("摇杆居中，油门杆最低。")])]),t._v(" "),r("li",[r("p",[t._v("点击 "),r("strong",[t._v("Ok")]),t._v(" 。")]),t._v(" "),r("p",[r("img",{attrs:{src:_(637),alt:"复制微调"}})])]),t._v(" "),r("li",[r("p",[t._v("设置遥控器器微调为0。")])])]),t._v(" "),r("h3",{attrs:{id:"辅助通道"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#辅助通道"}},[t._v("#")]),t._v(" 辅助通道")]),t._v(" "),r("p",[t._v("辅助通道可以让你使用遥控器控制任意可选的硬件（例如，一个抓手或收放装置）。")]),t._v(" "),r("p",[t._v("使用辅助通道")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("映射2个遥控器控制来隔离通道。")])]),t._v(" "),r("li",[r("p",[t._v("如下所示，依次映射这些通道到端口 AUX1 和 AUX2。 设置后，保存到自驾仪。")]),t._v(" "),r("p",[r("img",{attrs:{src:_(638),alt:"遥控器的AUX1和AUX2通道"}})])])]),t._v(" "),r("p",[t._v("飞控将这些为指定的值通过指定的通道输出到 AUX1 / AUX2，来驱动连接的舵机/继电器。")]),t._v(" "),r("h3",{attrs:{id:"参数调试通道"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参数调试通道"}},[t._v("#")]),t._v(" 参数调试通道")]),t._v(" "),r("p",[t._v("调试通道是映射一个遥控器调试旋钮到参数（你可以在你的遥控器上动态调整一个参数）。")]),t._v(" "),r("blockquote",[r("p",[r("strong",[t._v("提示")]),t._v("这个功能是启动手动飞行调试："),r("RouterLink",{attrs:{to:"/zh/config_mc/pid_tuning_guide_multicopter.html"}},[t._v("多旋翼 PID 调试指南")]),t._v("，"),r("RouterLink",{attrs:{to:"/zh/config_fw/pid_tuning_guide_fixedwing.html"}},[t._v("固定翼 PID 调试指南")]),t._v("。")],1)]),t._v(" "),r("p",[t._v("用来进行参数调试的通道被放置在了"),r("em",[t._v("遥控器")]),t._v("设置中，可以在参数编辑器里设置每一个映射的调试通道对应的参数。")]),t._v(" "),r("p",[t._v("设置调试通道")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("映射3个遥控器通道（旋钮或滑块开关）来分离通道。")])]),t._v(" "),r("li",[r("p",[t._v("使用选择列表，选择"),r("em",[t._v("参数调试")]),t._v("映射到遥控器通道。 设置后，保存到自驾仪。")]),t._v(" "),r("p",[r("img",{attrs:{src:_(639),alt:"映射遥控器通道到调试通道"}})])])]),t._v(" "),r("p",[t._v("把一个参数调试通道到一个参数。")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("打开侧栏的"),r("strong",[t._v("参数")]),t._v("。")])]),t._v(" "),r("li",[r("p",[t._v("选择参数映射到你的遥控器（这个会打开"),r("em",[t._v("参数编辑器")]),t._v("）。")])]),t._v(" "),r("li",[r("p",[t._v("选中"),r("strong",[t._v("高级设置")]),t._v("复选框。")])]),t._v(" "),r("li",[r("p",[t._v("Click the "),r("strong",[t._v("Set RC to Param...")]),t._v(" button (this will pop-up the foreground dialog displayed below)")]),t._v(" "),r("p",[r("img",{attrs:{src:_(640),alt:"映射调试通道到参数"}})])]),t._v(" "),r("li",[r("p",[t._v("从 "),r("em",[t._v("参数调整 id")]),t._v("选择列表中选择要映射的调整通道 (1、2或 3)。")])]),t._v(" "),r("li",[r("p",[t._v("点击 "),r("strong",[t._v("OK")]),t._v(" 定关闭对话框。")])]),t._v(" "),r("li",[r("p",[t._v("点击 "),r("strong",[t._v("保存")]),t._v(" 保存修改，关闭"),r("em",[t._v("参数编辑器")]),t._v("。")])])]),t._v(" "),r("blockquote",[r("p",[r("strong",[t._v("提示")]),t._v("你可以在右上角的"),r("em",[t._v("参数")]),t._v("的在右上角中选择菜单"),r("strong",[t._v("工具>清除遥控器参数")]),t._v("，清楚所有的参数/调试通道。")])]),t._v(" "),r("h2",{attrs:{id:"更多信息"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#更多信息"}},[t._v("#")]),t._v(" 更多信息")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/SetupView/Radio.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGroundControl > 远程控制"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://youtu.be/91VGmdSlbo4?t=4m30s",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4 设置视频 - @4m30s"),r("OutboundLink")],1),t._v(" (Youtube)")]),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/zh/getting_started/rc_transmitter_receiver.html"}},[t._v("遥控系统选择")]),t._v(" - 选择一个兼容的遥控系统。")],1)])])}),[],!1,null,null,null);e.default=v.exports},633:function(t,e,_){t.exports=_.p+"assets/img/radio_start_setup.a0fa4f53.jpg"},634:function(t,e,_){t.exports=_.p+"assets/img/radio_sticks_throttle.139795e9.jpg"},635:function(t,e,_){t.exports=_.p+"assets/img/radio_additional_radio_setup.ecd4363a.jpg"},636:function(t,e,_){t.exports=_.p+"assets/img/radio_additional_setup_spectrum_bind_select_channels.6b7ff256.jpg"},637:function(t,e,_){t.exports=_.p+"assets/img/radio_additional_radio_setup_copy_trims.ab0f7d3f.jpg"},638:function(t,e,_){t.exports=_.p+"assets/img/radio_additional_setup_aux_passthrough_channels.be0edc70.jpg"},639:function(t,e,_){t.exports=_.p+"assets/img/radio_additional_radio_setup_param_tuning.49f5b6d3.jpg"},640:function(t,e,_){t.exports=_.p+"assets/img/parameters_radio_channel_mapping.c1adf31c.jpg"}}]);