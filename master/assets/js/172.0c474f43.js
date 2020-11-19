(window.webpackJsonp=window.webpackJsonp||[]).push([[172],{2304:function(e,t,n){"use strict";n.r(t);var o=n(18),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"飞行模式有关配置"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#飞行模式有关配置"}},[e._v("#")]),e._v(" 飞行模式有关配置")]),e._v(" "),o("p",[o("RouterLink",{attrs:{to:"/zh/flight_modes/"}},[e._v("飞行模式")]),e._v(" 提供了不同类型的 "),o("em",[e._v("辅助飞行")]),e._v(" ，以及通过设定执行任务的或者通过相应计算机控制的 "),o("em",[e._v("全自主飞行")]),e._v(" 。 不同的飞行模式使得新用户可以使用一个相对于单一的基础遥控器飞行而言更广泛的平台来学习飞行。 不同的飞行模式还提供了一些常见的自动化任务，比如起飞、降落和自动返航功能。")],1),e._v(" "),o("p",[e._v("PX4 允许您从地面站（平板电脑或者桌面电脑）或者遥控器来切换飞行模式。 如果遥控器或者平板电脑都连接上 PX4 的话，两者都可以改变当前的飞行模式并且覆盖之前飞行模式的设置。")]),e._v(" "),o("p",[e._v("这个话题说明了如何在你的遥控器开关上映射飞行模式设置。")]),e._v(" "),o("blockquote",[o("p",[o("strong",[e._v("Note")]),e._v(" 您必须已经配置好了您的 "),o("RouterLink",{attrs:{to:"/zh/config/radio.html"}},[e._v("遥控器")]),e._v(" 以便设定飞行模式。")],1)]),e._v(" "),o("h2",{attrs:{id:"我应该设置什么飞行模式呢"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#我应该设置什么飞行模式呢"}},[e._v("#")]),e._v(" 我应该设置什么飞行模式呢？")]),e._v(" "),o("p",[e._v("你可以设置任何（或者不设置） "),o("RouterLink",{attrs:{to:"/zh/flight_modes/"}},[e._v("这里")]),e._v(" 描述的飞行模式。")],1),e._v(" "),o("p",[e._v("新手可以考虑设置一个或者多个下面的这些使得飞机更容易控制的飞行模式：")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("自稳模式")]),e._v(" - 飞行器很难侧翻，并且如果遥控器摇杆释放的话飞行器会趋于水平（但无法保持位置定点）。")]),e._v(" "),o("li",[o("strong",[e._v("位置模式")]),e._v(" - 如果遥控器摇杆释放的话飞行器会停下来保持位置定点（并且不会随风飘移）。")]),e._v(" "),o("li",[o("strong",[e._v("定高模式")]),e._v(" - 飞行器的爬升和降落被限制了一个最大的速率。飞机会保持高度稳定（但仍无法保持位置定点）。")])]),e._v(" "),o("p",[e._v("通常也在遥控器上映射这些开关：")]),e._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/zh/flight_modes/return.html"}},[e._v("返航模式")]),e._v(" - 这个模式会把飞行器升高到安全的高度并且返回起飞点。")],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/zh/flight_modes/mission.html"}},[e._v("任务模式")]),e._v(" - 这个模式将会运行地面站发送的预先编写好的任务。")],1),e._v(" "),o("li",[o("span",{attrs:{id:"kill_switch"}}),e._v(" "),o("RouterLink",{attrs:{to:"/zh/config/safety.html#kill_switch"}},[e._v("Kill Switch")]),e._v(" - 立即停止所有电机的输出（飞行器可能会摔坏，这在某些紧急情况下比允许其继续飞行更为可取）。")],1)]),e._v(" "),o("h2",{attrs:{id:"多通道飞行模式选择-vs-单通道飞行模式选择"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#多通道飞行模式选择-vs-单通道飞行模式选择"}},[e._v("#")]),e._v(" 多通道飞行模式选择 vs 单通道飞行模式选择")]),e._v(" "),o("p",[o("em",[e._v("PX4")]),e._v(" ("),o("em",[e._v("QGroundControl")]),e._v(") 支持两种方式来映射飞行模式到遥控器开关/表盘：")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("单通道模式选择：")]),e._v(" 单通道编码模式下最多分配 6 个飞行模式到遥控器的不同开关位置上。")]),e._v(" "),o("li",[o("strong",[e._v("多通道模式选择：")]),e._v(" 把不同飞行模式分配到不同的遥控器开关位置，来使用一个或者多个通道的编码。 一些模式被硬编码以共享通道，或者是根据其他选择的模式被自动指定（多通道模式选择的方式很多时候会导致困惑）。")])]),e._v(" "),o("blockquote",[o("p",[o("strong",[e._v("Tip")]),e._v(" 推荐使用 "),o("em",[e._v("单通道模式选择")]),e._v(" 的方式，因为它更容易被理解和配置。")])]),e._v(" "),o("p",[o("span",{attrs:{id:"single_channel"}})]),e._v(" "),o("h2",{attrs:{id:"single-channel-flight-mode-selection"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#single-channel-flight-mode-selection"}},[e._v("#")]),e._v(" Single-Channel Flight Mode Selection")]),e._v(" "),o("p",[e._v('The single-channel selection mode allows you to specify a "mode" channel and select up to 6 flight modes that will be activated based on the PWM value of the channel. You can also separately specify channels for mapping a kill switch, return to launch mode, and offboard mode.')]),e._v(" "),o("blockquote",[o("p",[o("strong",[e._v("Note")]),e._v(" 为了使用单通道飞行模式选择的方式，你首先需要配置你的 "),o("em",[e._v("遥控器")]),e._v(" 来映射遥控器上开关的物理位置到一个单个通道中去。 "),o("a",{attrs:{href:"#taranis_setup"}},[e._v("这里")]),e._v(" 我们提供了一个视频演示 "),o("em",[e._v("Taranis")]),e._v(" 遥控器通常是如何进行该操作的（如果您使用的是不同品牌的遥控器的话请查阅相应文档）。")])]),e._v(" "),o("p",[e._v("To configure single-channel flight mode selection:")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("打开 "),o("em",[e._v("QGroundControl")]),e._v(" 并连接上飞机。")])]),e._v(" "),o("li",[o("p",[e._v("打开您的 RC 遥控器发射机。")])]),e._v(" "),o("li",[o("p",[e._v("点击上方工具栏的 "),o("strong",[e._v("Gear")]),e._v(" 图标（飞行器设置），然后在左侧边栏选择 "),o("strong",[e._v("Flight Modes")]),e._v(" 。")]),e._v(" "),o("p",[o("img",{attrs:{src:n(619),alt:"Flight modes single-channel"}})]),e._v(" "),o("blockquote",[o("p",[o("strong",[e._v("Tip")]),e._v(" 如果界面中显示的是 "),o("em",[e._v("Multi Channel Mode")]),e._v("，点击 "),o("strong",[e._v("Use Single Channel Mode Selection")]),e._v(" 按钮来切换成单通道模式。")])])]),e._v(" "),o("li",[o("p",[e._v("进行 "),o("em",[e._v("飞行模式设置")]),e._v(" :")]),e._v(" "),o("ul",[o("li",[e._v("选择 "),o("strong",[e._v("Mode channel")]),e._v(" （上面显示的是 Channel 5 ，但是这是取决于你遥控器的设置的）。")]),e._v(" "),o("li",[e._v("最多可以选择 6 个 "),o("strong",[e._v("飞行模式")]),e._v(" 。")])])]),e._v(" "),o("li",[o("p",[e._v("进行 "),o("em",[e._v("遥控器开关设置")]),e._v(" ：")]),e._v(" "),o("ul",[o("li",[e._v("选择你想要映射的特点飞行模式的通道 - 例如："),o("em",[e._v("自动返航")]),e._v("，"),o("em",[e._v("Kill switch")]),e._v("，"),o("em",[e._v("机外控制（offboard）")]),e._v(" 等模式。 （如果你的遥控器发射机上有空闲的开关或者通道的话）。")])])]),e._v(" "),o("li",[o("p",[e._v("测试模式是否映射到正确的发射器开关：")]),e._v(" "),o("ul",[o("li",[e._v("检查 "),o("em",[e._v("Channel Monitor")]),e._v(" 以确认改变每个开关可以改变预期的通道。")]),e._v(" "),o("li",[e._v("拨动你遥控器上刚刚映射的飞行模式有关的开关，并检查对应的飞行模式已被激活（ "),o("em",[e._v("QGroundeControl")]),e._v(" 上对应的通道的字体在被激活的情况下变为黄色 ）")])])])]),e._v(" "),o("p",[e._v("All values are automatically saved as they are changed.")]),e._v(" "),o("p",[o("span",{attrs:{id:"taranis_setup"}})]),e._v(" "),o("h3",{attrs:{id:"single-channel-setup-video-example-including-transmitter-setup"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#single-channel-setup-video-example-including-transmitter-setup"}},[e._v("#")]),e._v(" Single-Channel Setup Video Example (including Transmitter Setup)")]),e._v(" "),o("p",[e._v("It is common to use the positions of a 2- and a 3-position switch on the transmitter to represent the 6 flight modes, and encode each combination of switches as a particular PWM value for the mode that will be sent on a single channel.")]),e._v(" "),o("p",[e._v("The video below shows how this is done with the "),o("em",[e._v("FrSky Taranis")]),e._v(' transmitter (a very popular and highly recommended RC transmitter). The process involves assigning a "logical switch" to each combination of positions of the two real switches. Each logical switch is then assigned to a different PWM value on the same channel.')]),e._v(" "),o("p",[e._v("The video then shows how to use "),o("em",[e._v("QGroundControl")]),e._v(' to specify the mode channel and map modes to each of the 6 "slots". {% youtube %} http://www.youtube.com/watch?v=scqO7vbH2jo {% endyoutube %}')]),e._v(" "),o("h3",{attrs:{id:"单通道模式设置示例"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#单通道模式设置示例"}},[e._v("#")]),e._v(" 单通道模式设置示例")]),e._v(" "),o("p",[e._v("This example shows how you can configure a transmitter and PX4 with:")]),e._v(" "),o("ul",[o("li",[e._v("一个在单通道模式下用于选择飞行模式（手动，高度，特技）的三段开关。")]),e._v(" "),o("li",[e._v("A 2-way switch that invokes some function (arm/disarm) (via a "),o("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#radio-switches"}},[e._v("Radio switch")]),e._v(" parameter).")],1)]),e._v(" "),o("blockquote",[o("p",[o("strong",[e._v("Note")]),e._v(" 本示例演示如何设置常用的 "),o("em",[e._v("FrSky taranis")]),e._v(" 遥控器。 对于其他遥控器，配置可能会稍有不同。")])]),e._v(" "),o("p",[e._v("First set up your transmitter. Below we show how to map the Taranis \"SD\" switch to channel 5. This is done in the Taranis UI 'mixer' page, as shown below:")]),e._v(" "),o("p",[o("img",{attrs:{src:n(620),alt:"Taranis - Map channel to switch"}})]),e._v(" "),o("p",[o("img",{attrs:{src:n(621),alt:"Taranis - Configure channel"}})]),e._v(" "),o("p",[e._v("You can then select the channel and the flight modes in single channel mode selection option in "),o("em",[e._v("QGroundControl")]),e._v(":")]),e._v(" "),o("p",[o("img",{attrs:{src:n(622),alt:"QGC - Set mode channel"}})]),e._v(" "),o("p",[e._v("The "),o("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#radio-switches"}},[e._v("Radio switch")]),e._v(" parameters map a particular function to a channel. Assuming you have already mapped a channel in your transmitter you can assign the channel by "),o("RouterLink",{attrs:{to:"/zh/advanced_config/parameters.html"}},[e._v("setting the parameter")]),e._v(".")],1),e._v(" "),o("p",[e._v("For example, below we map channel 6 to the "),o("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#RC_MAP_ARM_SW"}},[e._v("RC_MAP_ARM_SW")]),e._v(" parameter in "),o("em",[e._v("QGroundControl")]),e._v(".")],1),e._v(" "),o("p",[o("img",{attrs:{src:n(623),alt:"QGC - Map ARM switch to channel"}})]),e._v(" "),o("p",[o("span",{attrs:{id:"multi_channel"}})]),e._v(" "),o("h2",{attrs:{id:"multi-channel-flight-mode-selection"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#multi-channel-flight-mode-selection"}},[e._v("#")]),e._v(" Multi-Channel Flight Mode Selection")]),e._v(" "),o("blockquote",[o("p",[o("strong",[e._v("Tip")]),e._v(" 我们建议您使用 "),o("a",{attrs:{href:"#single_channel"}},[e._v("单通道飞行模式")]),e._v(" 选择，因为多通道飞行模式选择下很可能会造成用户您比较混乱和疑惑。 如果您选择使用此方法，那么最好的办法是开始分配频道时注意到您选择后显示的 "),o("em",[e._v("QGroundeControl")]),e._v(" 报出的信息。")])]),e._v(" "),o("p",[e._v("The multi-channel selection user interface allows you to map one or more modes to one or more channels. There are some modes (and hence switches) that must always be defined, and the channel to which they must be allocated.")]),e._v(" "),o("p",[e._v("To configure flight modes using the multi-channel UI:")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("打开您的 RC 遥控器发射机。")])]),e._v(" "),o("li",[o("p",[e._v("打开 "),o("em",[e._v("QGroundControl")]),e._v(" 并连接上飞机。")])]),e._v(" "),o("li",[o("p",[e._v("Select the "),o("strong",[e._v("Gear")]),e._v(" icon (Vehicle Setup) in the top toolbar and then "),o("strong",[e._v("Flight Modes")]),e._v(" in the sidebar.")]),e._v(" "),o("p",[o("img",{attrs:{src:n(624),alt:"Flight modes multi-channel"}})]),e._v(" "),o("blockquote",[o("p",[o("strong",[e._v("Tip")]),e._v(" If the screen opens in "),o("em",[e._v("Single Channel Mode")]),e._v(" click the "),o("strong",[e._v("Use Multi Channel Mode Selection")]),e._v(" button to change screen.")])])]),e._v(" "),o("li",[o("p",[e._v("Select the modes you want to assign to your switches and select the associated channel (selected modes will "),o("em",[e._v("move")]),e._v(" in the user interface to be grouped by channel). There are a number of complications on the mode to channel assignments:")]),e._v(" "),o("ul",[o("li",[e._v("Some modes cannot be manually edited (are grayed out) because their channel and threshold level are automatically defined based on the values of other mode settings. 例如：\n"),o("ul",[o("li",[o("em",[e._v("Mission")]),e._v(" mode - is automatically assigned the same channel number as "),o("em",[e._v("Hold")]),e._v(" (if the channel for "),o("em",[e._v("Hold")]),e._v(" is defined by the user). If the channel for "),o("em",[e._v("Hold")]),e._v(" is not defined, "),o("em",[e._v("Mission")]),e._v(" mode is automatically assigned the same channel as "),o("em",[e._v("Stabilized/Main")]),e._v(" mode. This, for example, prevents the user from defining "),o("em",[e._v("Stabilized/Main")]),e._v(" and "),o("em",[e._v("Mission")]),e._v(" mode on different channels, to ensure that the user cannot switch both modes ON at the same time.")]),e._v(" "),o("li",[o("em",[e._v("Altitude")]),e._v(" mode - is automatically assigned the same channel number as "),o("em",[e._v("Position Control")]),e._v(" (if it is defined), or otherwise the same channel as "),o("em",[e._v("Stabilized/Main")]),e._v(" mode.")])])]),e._v(" "),o("li",[o("em",[e._v("Assist")]),e._v(" mode - This mode is added to the same channel as "),o("em",[e._v("Stabilized/Main")]),e._v(" mode if (and only if) "),o("em",[e._v("Position Control")]),e._v(" is enabled and defined on a different channel than "),o("em",[e._v("Stabilized/Main")]),e._v(".")])])]),e._v(" "),o("li",[o("p",[e._v("Click the "),o("strong",[e._v("Generate Thresholds")]),e._v(" button.")]),e._v(" "),o("ul",[o("li",[e._v("This will automatically create threshold values for all modes, spread evenly across each channel for its assigned modes. For example, in the mode assignment shown above, most modes are assigned to mode 5, and you can see that the channel thresholds for each mode are spread evenly across the channel.")])])])]),e._v(" "),o("p",[e._v("This mode is demonstrated in the "),o("a",{attrs:{href:"https://youtu.be/91VGmdSlbo4?t=6m53s",target:"_blank",rel:"noopener noreferrer"}},[e._v("autopilot setup video here"),o("OutboundLink")],1),e._v(" (youtube).")]),e._v(" "),o("blockquote",[o("p",[o("strong",[e._v("Note")]),e._v(" This flight mode selection mechanism is relatively complicated due to the way that PX4 works out which mode should be selected. You may be able to gain some insight from this "),o("RouterLink",{attrs:{to:"/zh/concept/flight_modes.html#flight-mode-evaluation-diagram"}},[e._v("flow chart")]),e._v(" (PX4 Developer Guide).")],1)]),e._v(" "),o("h2",{attrs:{id:"更多信息"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#更多信息"}},[e._v("#")]),e._v(" 更多信息")]),e._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/zh/flight_modes/"}},[e._v("Flight Modes Overview")])],1),e._v(" "),o("li",[o("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/SetupView/FlightModes.html#px4-pro-flight-mode-setup",target:"_blank",rel:"noopener noreferrer"}},[e._v("QGroundControl > Flight Modes"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://youtu.be/91VGmdSlbo4?t=6m53s",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4 Setup Video - @6m53s"),o("OutboundLink")],1),e._v(" (Youtube)")])])])}),[],!1,null,null,null);t.default=a.exports},619:function(e,t,n){e.exports=n.p+"assets/img/flight_modes_single_channel.4508062f.jpg"},620:function(e,t,n){e.exports=n.p+"assets/img/single_channel_mode_selection_1.af4cb2ea.png"},621:function(e,t,n){e.exports=n.p+"assets/img/single_channel_mode_selection_2.1b6ed056.png"},622:function(e,t,n){e.exports=n.p+"assets/img/single_channel_mode_selection_3.53a514b8.png"},623:function(e,t,n){e.exports=n.p+"assets/img/single_channel_mode_selection_4.9e94edfa.png"},624:function(e,t,n){e.exports=n.p+"assets/img/flight_modes_multi_channel.157d7e57.jpg"}}]);