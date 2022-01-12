(window.webpackJsonp=window.webpackJsonp||[]).push([[295],{2839:function(e,t,o){"use strict";o.r(t);var s=o(19),i=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"飞行模式有关配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#飞行模式有关配置"}},[e._v("#")]),e._v(" 飞行模式有关配置")]),e._v(" "),s("p",[e._v("This topic explains how to map "),s("RouterLink",{attrs:{to:"/zh/getting_started/flight_modes.html"}},[e._v("flight modes")]),e._v(" and other functions to the switches on your radio control transmitter.")],1),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("提示")]),e._v(" "),s("p",[e._v("You must already have "),s("RouterLink",{attrs:{to:"/zh/config/radio.html"}},[e._v("configured your radio")]),e._v(" in order to assign flight modes and functions.")],1)]),e._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[e._v("PX4 allows you to select flight modes from a ground station (tablet or desktop) or from a radio control transmitter. If radio control and tablet are both connected, either system can change the mode and override the previous setting.")])]),e._v(" "),s("h2",{attrs:{id:"what-flight-modes-and-switches-should-i-set"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-flight-modes-and-switches-should-i-set"}},[e._v("#")]),e._v(" What Flight Modes and Switches Should I Set?")]),e._v(" "),s("p",[s("em",[e._v("Flight Modes")]),e._v(" provide different types of "),s("em",[e._v("autopilot-assisted flight")]),e._v(", and "),s("em",[e._v("fully autonomous flight")]),e._v(". You can set any (or none) of the flight modes "),s("RouterLink",{attrs:{to:"/zh/getting_started/flight_modes.html"}},[e._v("described here")]),e._v(". Most users should set the following functions, as these make the vehicle easier and safer to fly:")],1),e._v(" "),s("ul",[s("li",[s("strong",[e._v("Position mode")]),e._v(" ("),s("RouterLink",{attrs:{to:"/zh/getting_started/flight_modes.html#position-mode-mc"}},[e._v("multicopter")]),e._v(", "),s("RouterLink",{attrs:{to:"/zh/getting_started/flight_modes.html#position-mode-fw"}},[e._v("fixed-wing")]),e._v(") - Easiest and safest mode for manual flight.")],1),e._v(" "),s("li",[s("RouterLink",{attrs:{to:"/zh/flight_modes/return.html"}},[e._v("Return mode")]),e._v(" - Return to launch position by safe path and land (by default).")],1),e._v(" "),s("li",[s("strong",[e._v("VTOL Transition Switch")]),e._v(" - Toggle between fixed-wing and multicopter flight configuration on VTOL vehicles.")])]),e._v(" "),s("p",[e._v("It is also common to map switches to:")]),e._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/zh/flight_modes/mission.html"}},[e._v("Mission")]),e._v(" - This mode runs a pre-programmed mission sent by the ground control station.")],1),e._v(" "),s("li",[s("a",{attrs:{id:"kill_switch"}}),e._v(" "),s("RouterLink",{attrs:{to:"/zh/config/safety.html#kill-switch"}},[e._v("Kill Switch")]),e._v(" - Immediately stops all motor outputs (the vehicle will crash, which may in some circumstances be more desirable than allowing it to continue flying).")],1)]),e._v(" "),s("h2",{attrs:{id:"多通道飞行模式选择-vs-单通道飞行模式选择"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#多通道飞行模式选择-vs-单通道飞行模式选择"}},[e._v("#")]),e._v(" 多通道飞行模式选择 vs 单通道飞行模式选择")]),e._v(" "),s("p",[s("em",[e._v("PX4")]),e._v(" ("),s("em",[e._v("QGroundControl")]),e._v(") supports two modes for mapping flight modes to transmitter switches/dials:")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("单通道模式选择：")]),e._v(" 单通道编码模式下最多分配 6 个飞行模式到遥控器的不同开关位置上。")]),e._v(" "),s("li",[s("strong",[e._v("多通道模式选择：")]),e._v(" 把不同飞行模式分配到不同的遥控器开关位置，来使用一个或者多个通道的编码。 一些模式被硬编码以共享通道，或者是根据其他选择的模式被自动指定（多通道模式选择的方式很多时候会导致困惑）。")])]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("提示")]),e._v(" "),s("p",[e._v("The recommended approach is use "),s("em",[e._v("Single Channel Mode Selection")]),e._v(" because it easy to understand and configure.")])]),e._v(" "),s("p",[s("span",{attrs:{id:"single_channel"}})]),e._v(" "),s("h2",{attrs:{id:"单通道飞行模式选择"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#单通道飞行模式选择"}},[e._v("#")]),e._v(" 单通道飞行模式选择")]),e._v(" "),s("p",[e._v('The single-channel selection mode allows you to specify a "mode" channel and select up to 6 flight modes that will be activated based on the PWM value of the channel. You can also separately specify channels for mapping a kill switch, return to launch mode, and offboard mode.')]),e._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),s("p",[e._v("In order to use this approach you will first need to configure your "),s("em",[e._v("transmitter")]),e._v(" to encode the physical positions of your mode switch(es) into a single channel. We provide information on how this is done for the popular "),s("em",[e._v("Taranis")]),e._v(" transmitter "),s("a",{attrs:{href:"#taranis-setup-3-way-switch-configuration-for-single-channel-mode"}},[e._v("below")]),e._v(" (check your documentation if you use a different transmitter).")])]),e._v(" "),s("p",[e._v("To configure single-channel flight mode selection:")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("打开 "),s("em",[e._v("QGroundControl")]),e._v(" 并连接上飞机。")])]),e._v(" "),s("li",[s("p",[e._v("打开您的 RC 遥控器发射机。")])]),e._v(" "),s("li",[s("p",[e._v("Select "),s("strong",[e._v("QGroundControl icon > Vehicle Setup")]),e._v(", and then "),s("strong",[e._v("Flight Modes")]),e._v(" in the sidebar.")]),e._v(" "),s("p",[s("img",{attrs:{src:o(645),alt:"Flight modes single-channel"}})])])]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("提示")]),e._v(" "),s("p",[e._v("If the screen opens in "),s("em",[e._v("Multi Channel Mode")]),e._v(" click the "),s("strong",[e._v("Use Single Channel Mode Selection")]),e._v(" button to change screen.")])]),e._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[s("p",[e._v("进行 "),s("em",[e._v("飞行模式设置")]),e._v(" :")]),e._v(" "),s("ul",[s("li",[e._v("选择 "),s("strong",[e._v("Mode channel")]),e._v(" （上面显示的是 Channel 5 ，但是这是取决于你遥控器的设置的）。")]),e._v(" "),s("li",[e._v("Move the transmitter switch (or switches) that you have set up for mode selection through the available positions. The mode slot matching your current switch position will be highlighted (above this is "),s("em",[e._v("Flight Mode 4")]),e._v("). :::note While you can set flight modes in any of the 6 slots, only the channels that are mapped to switch positions will be highlighted/used.\n:::")]),e._v(" "),s("li",[e._v("Select the flight mode that you want triggered for each switch position.")])])]),e._v(" "),s("li",[s("p",[e._v("Specify "),s("em",[e._v("Switch Settings")]),e._v(":")]),e._v(" "),s("ul",[s("li",[e._v("选择你想要映射的特点飞行模式的通道 - 例如："),s("em",[e._v("自动返航")]),e._v("，"),s("em",[e._v("Kill switch")]),e._v("，"),s("em",[e._v("机外控制（offboard）")]),e._v(" 等模式。 （如果你的遥控器发射机上有空闲的开关或者通道的话）。")])])]),e._v(" "),s("li",[s("p",[e._v("Test that the modes are mapped to the right transmitter switches:")]),e._v(" "),s("ul",[s("li",[e._v("检查 "),s("em",[e._v("Channel Monitor")]),e._v(" 以确认改变每个开关可以改变预期的通道。")]),e._v(" "),s("li",[e._v("拨动你遥控器上刚刚映射的飞行模式有关的开关，并检查对应的飞行模式已被激活（ "),s("em",[e._v("QGroundeControl")]),e._v(" 上对应的通道的字体在被激活的情况下变为黄色 ）")])])])]),e._v(" "),s("p",[e._v("All values are automatically saved as they are changed.")]),e._v(" "),s("p",[s("span",{attrs:{id:"taranis_setup"}})]),e._v(" "),s("h3",{attrs:{id:"taranis-setup-3-way-switch-configuration-for-single-channel-mode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#taranis-setup-3-way-switch-configuration-for-single-channel-mode"}},[e._v("#")]),e._v(" Taranis Setup: 3-way Switch Configuration for Single-Channel Mode")]),e._v(" "),s("p",[e._v('If you only need to support selecting between two or three modes then you can map the modes to the positions of a single 3-way switch. Below we show how to map the Taranis 3-way "SD" switch to channel 5.')]),e._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),s("p",[e._v("This example shows how to set up the popular "),s("em",[e._v("FrSky Taranis")]),e._v(" transmitter. Transmitter setup will be different on other transmitters.")])]),e._v(" "),s("p",[e._v("Open the Taranis UI "),s("strong",[e._v("MIXER")]),e._v(" page and scroll down to "),s("strong",[e._v("CH5")]),e._v(", as shown below:")]),e._v(" "),s("p",[s("img",{attrs:{src:o(646),alt:"Taranis - Map channel to switch"}})]),e._v(" "),s("p",[e._v("Press "),s("strong",[e._v("ENT(ER)")]),e._v(" to edit the "),s("strong",[e._v("CH5")]),e._v(" configuration then change the "),s("strong",[e._v("Source")]),e._v(" to be the "),s("em",[e._v("SD")]),e._v(" button.")]),e._v(" "),s("p",[s("img",{attrs:{src:o(647),alt:"Taranis - Configure channel"}})]),e._v(" "),s("p",[e._v("That's it! Channel 5 will now output 3 different PWM values for the three different "),s("strong",[e._v("SD")]),e._v(" switch positions.")]),e._v(" "),s("p",[e._v("The "),s("em",[e._v("QGroundControl")]),e._v(" configuration is then as described in the previous section.")]),e._v(" "),s("h3",{attrs:{id:"taranis-setup-multi-switch-configuration-for-single-channel-mode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#taranis-setup-multi-switch-configuration-for-single-channel-mode"}},[e._v("#")]),e._v(" Taranis Setup: Multi-Switch Configuration for Single-Channel Mode")]),e._v(" "),s("p",[e._v("Most transmitters do not have 6-way switches, so if you need to be able to support more modes than the number of switch positions available (up to 6) then you will have to represent them using multiple switches. Commonly this is done by encoding the positions of a 2- and a 3-position switch into a single channel, so that each switch position results in a different PWM value.")]),e._v(" "),s("p",[e._v('On the FrSky Taranis this process involves assigning a "logical switch" to each combination of positions of the two real switches. Each logical switch is then assigned to a different PWM value on the same channel.')]),e._v(" "),s("p",[e._v("The video below shows how this is done with the "),s("em",[e._v("FrSky Taranis")]),e._v(" transmitter.")]),e._v(" "),e._v(" @\n"),s("p",[s("a",{attrs:{href:"https://youtu.be/TFEjEQZqdVA",target:"_blank",rel:"noopener noreferrer"}},[e._v("youtube"),s("OutboundLink")],1)]),e._v(" "),s("p",[e._v("The "),s("em",[e._v("QGroundControl")]),e._v(" configuration is then as "),s("a",{attrs:{href:"#single-channel-flight-mode-selection"}},[e._v("described above")]),e._v(".")]),e._v(" "),s("p",[s("span",{attrs:{id:"multi_channel"}})]),e._v(" "),s("h2",{attrs:{id:"多通道飞行模式选择"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#多通道飞行模式选择"}},[e._v("#")]),e._v(" 多通道飞行模式选择")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("提示")]),e._v(" "),s("p",[e._v("We recommend you use "),s("a",{attrs:{href:"#single_channel"}},[e._v("Single Channel Flight Mode")]),e._v(" selection because the Multi Channel selection user interface can be confusing. If you do choose to use this method, then the best approach is to start assigning channels and take note of information displayed by "),s("em",[e._v("QGroundControl")]),e._v(" following your selection.")])]),e._v(" "),s("p",[e._v("The multi-channel selection user interface allows you to map one or more modes to one or more channels. There are some modes (and hence switches) that must always be defined, and the channel to which they must be allocated.")]),e._v(" "),s("p",[e._v("To configure flight modes using the multi-channel UI:")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("打开您的 RC 遥控器发射机。")])]),e._v(" "),s("li",[s("p",[e._v("打开 "),s("em",[e._v("QGroundControl")]),e._v(" 并连接上飞机。")])]),e._v(" "),s("li",[s("p",[e._v("点击上方工具栏的 "),s("strong",[e._v("Gear")]),e._v(" 图标（飞行器设置），然后在左侧边栏选择 "),s("strong",[e._v("Flight Modes")]),e._v(" 。")]),e._v(" "),s("p",[s("img",{attrs:{src:o(648),alt:"Flight modes multi-channel"}})])])]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("提示")]),e._v(" "),s("p",[e._v("If the screen opens in "),s("em",[e._v("Single Channel Mode")]),e._v(" click the "),s("strong",[e._v("Use Multi Channel Mode Selection")]),e._v(" button to change screen.")])]),e._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[s("p",[e._v("Select the modes you want to assign to your switches and select the associated channel (selected modes will "),s("em",[e._v("move")]),e._v(" in the user interface to be grouped by channel). There are a number of complications on the mode to channel assignments:")]),e._v(" "),s("ul",[s("li",[e._v("Some modes cannot be manually edited (are grayed out) because their channel and threshold level are automatically defined based on the values of other mode settings. 例如：\n"),s("ul",[s("li",[s("em",[e._v("Mission")]),e._v(" mode - is automatically assigned the same channel number as "),s("em",[e._v("Hold")]),e._v(" (if the channel for "),s("em",[e._v("Hold")]),e._v(" is defined by the user). If the channel for "),s("em",[e._v("Hold")]),e._v(" is not defined, "),s("em",[e._v("Mission")]),e._v(" mode is automatically assigned the same channel as "),s("em",[e._v("Stabilized/Main")]),e._v(" mode. This, for example, prevents the user from defining "),s("em",[e._v("Stabilized/Main")]),e._v(" and "),s("em",[e._v("Mission")]),e._v(" mode on different channels, to ensure that the user cannot switch both modes ON at the same time.")]),e._v(" "),s("li",[s("em",[e._v("Altitude")]),e._v(" mode - is automatically assigned the same channel number as "),s("em",[e._v("Position Control")]),e._v(" (if it is defined), or otherwise the same channel as "),s("em",[e._v("Stabilized/Main")]),e._v(" mode.")])])]),e._v(" "),s("li",[s("em",[e._v("Assist")]),e._v(" mode - This mode is added to the same channel as "),s("em",[e._v("Stabilized/Main")]),e._v(" mode if (and only if) "),s("em",[e._v("Position Control")]),e._v(" is enabled and defined on a different channel than "),s("em",[e._v("Stabilized/Main")]),e._v(".")])])]),e._v(" "),s("li",[s("p",[e._v("Click the "),s("strong",[e._v("Generate Thresholds")]),e._v(" button.")]),e._v(" "),s("ul",[s("li",[e._v("This will automatically create threshold values for all modes, spread evenly across each channel for its assigned modes. For example, in the mode assignment shown above, most modes are assigned to mode 5, and you can see that the channel thresholds for each mode are spread evenly across the channel.")])])])]),e._v(" "),s("p",[e._v("This mode is demonstrated in the "),s("a",{attrs:{href:"https://youtu.be/91VGmdSlbo4?t=6m53s",target:"_blank",rel:"noopener noreferrer"}},[e._v("autopilot setup video here"),s("OutboundLink")],1),e._v(" (youtube).")]),e._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),s("p",[e._v("This flight mode selection mechanism is relatively complicated due to the way that PX4 works out which mode should be selected. You may be able to gain some insight from this "),s("RouterLink",{attrs:{to:"/zh/concept/flight_modes.html#flight-mode-evaluation-diagram"}},[e._v("flow chart")]),e._v(".")],1)]),e._v(" "),s("h2",{attrs:{id:"更多信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更多信息"}},[e._v("#")]),e._v(" 更多信息")]),e._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/zh/flight_modes/"}},[e._v("Flight Modes Overview")])],1),e._v(" "),s("li",[s("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/SetupView/FlightModes.html#px4-pro-flight-mode-setup",target:"_blank",rel:"noopener noreferrer"}},[e._v("QGroundControl > Flight Modes"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://youtu.be/91VGmdSlbo4?t=6m53s",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4 Setup Video - @6m53s"),s("OutboundLink")],1),e._v(" (Youtube)")]),e._v(" "),s("li",[s("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#radio-switches"}},[e._v("Radio switch parameters")]),e._v(" - Can be used to set mappings via parameters")],1)])])}),[],!1,null,null,null);t.default=i.exports},645:function(e,t,o){e.exports=o.p+"assets/img/flight_modes_single_channel.26d1e2e1.jpg"},646:function(e,t,o){e.exports=o.p+"assets/img/single_channel_mode_selection_1.af4cb2ea.png"},647:function(e,t,o){e.exports=o.p+"assets/img/single_channel_mode_selection_2.1b6ed056.png"},648:function(e,t,o){e.exports=o.p+"assets/img/flight_modes_multi_channel.157d7e57.jpg"}}]);