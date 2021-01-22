(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{1905:function(e,t,o){"use strict";o.r(t);var n=o(18),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"비행-모드-구성"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#비행-모드-구성"}},[e._v("#")]),e._v(" 비행 모드 구성")]),e._v(" "),n("p",[n("RouterLink",{attrs:{to:"/ko/flight_modes/"}},[e._v("Flight Modes")]),e._v(" provide different types of "),n("em",[e._v("autopilot-assisted flight")]),e._v(", and "),n("em",[e._v("fully autonomous flight")]),e._v(" via missions or offboard (companion computer) control. Different flight modes allow new users to learn flying with a more forgiving platform than provided by basic RC control alone. They also enable automation of common tasks like taking off, landing and returning to the original launch position.")],1),e._v(" "),n("p",[e._v("PX4 allows you to select flight modes from a ground station (tablet or desktop) or from a radio control transmitter. If radio control and tablet are both connected, either system can change the mode and override the previous setting.")]),e._v(" "),n("p",[e._v("This topic explains how to map flight modes to the switches on your radio control transmitter.")]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),n("p",[e._v("You must already have "),n("RouterLink",{attrs:{to:"/ko/config/radio.html"}},[e._v("configured your radio")]),e._v(" in order to set flight modes.")],1)]),e._v(" "),n("h2",{attrs:{id:"what-flight-modes-should-i-set"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#what-flight-modes-should-i-set"}},[e._v("#")]),e._v(" What Flight Modes Should I Set?")]),e._v(" "),n("p",[e._v("You can set any (or none) of the flight modes "),n("RouterLink",{attrs:{to:"/ko/flight_modes/"}},[e._v("described here")]),e._v(".")],1),e._v(" "),n("p",[e._v("New users should consider setting one or more of the following modes, which make the vehicle much easier to fly:")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("Stabilized")]),e._v(" - Vehicle hard to flip, and will level-out if the sticks are released (but not hold position).")]),e._v(" "),n("li",[n("strong",[e._v("Position")]),e._v(" - When sticks are released the vehicle will stop (and hold position against wind drift).")]),e._v(" "),n("li",[n("strong",[e._v("Altitude")]),e._v(" - Climb and drop are controlled to have a maximum rate.")])]),e._v(" "),n("p",[e._v("It is also common to map switches to:")]),e._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/ko/flight_modes/return.html"}},[e._v("Return")]),e._v(" - This mode raises the vehicle to a safe height and returns to the launch position.")],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/ko/flight_modes/mission.html"}},[e._v("Mission")]),e._v(" - This mode runs a pre-programmed mission sent by the ground control station.")],1),e._v(" "),n("li",[n("span",{attrs:{id:"kill_switch"}}),e._v(" "),n("RouterLink",{attrs:{to:"/ko/config/safety.html#kill_switch"}},[e._v("Kill Switch")]),e._v(" - Immediately stops all motor outputs (the vehicle will crash, which may in some circumstances be more desirable than allowing it to continue flying).")],1)]),e._v(" "),n("h2",{attrs:{id:"multi-channel-vs-single-channel-mode-selection"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#multi-channel-vs-single-channel-mode-selection"}},[e._v("#")]),e._v(" Multi Channel vs Single Channel Mode Selection")]),e._v(" "),n("p",[n("em",[e._v("PX4")]),e._v(" ("),n("em",[e._v("QGroundControl")]),e._v(") supports two modes for mapping flight modes to transmitter switches/dials:")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("Single Channel Mode Selection:")]),e._v(" Assign up to 6 flight modes to switch positions encoded in a single channel.")]),e._v(" "),n("li",[n("strong",[e._v("Multi Channel Mode Selection:")]),e._v(" Assign modes to switch positions encoded in one or more channels. Some modes are hard coded to share channels, or are defined/set automatically based on other mode selections (the behaviour of multi-channel mode selection can sometimes be confusing).")])]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),n("p",[e._v("The recommended approach is use "),n("em",[e._v("Single Channel Mode Selection")]),e._v(" because it easy to understand and configure.")])]),e._v(" "),n("p",[n("span",{attrs:{id:"single_channel"}})]),e._v(" "),n("h2",{attrs:{id:"single-channel-flight-mode-selection"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#single-channel-flight-mode-selection"}},[e._v("#")]),e._v(" Single-Channel Flight Mode Selection")]),e._v(" "),n("p",[e._v('The single-channel selection mode allows you to specify a "mode" channel and select up to 6 flight modes that will be activated based on the PWM value of the channel. You can also separately specify channels for mapping a kill switch, return to launch mode, and offboard mode.')]),e._v(" "),n("div",{staticClass:"custom-block note"},[n("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),n("p",[e._v("In order to use this approach you will first need to configure your "),n("em",[e._v("transmitter")]),e._v(" to encode the physical positions of your mode switch(es) into a single channel. We provide a video guide of how this is done for the popular "),n("em",[e._v("Taranis")]),e._v(" transmitter "),n("a",{attrs:{href:"#taranis_setup"}},[e._v("below")]),e._v(" (check your documentation if you use a different transmitter).")])]),e._v(" "),n("p",[e._v("To configure single-channel flight mode selection:")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("Start "),n("em",[e._v("QGroundControl")]),e._v(" and connect the vehicle.")])]),e._v(" "),n("li",[n("p",[e._v("Turn on your RC transmitter.")])]),e._v(" "),n("li",[n("p",[e._v("Select the "),n("strong",[e._v("Gear")]),e._v(" icon (Vehicle Setup) in the top toolbar and then "),n("strong",[e._v("Flight Modes")]),e._v(" in the sidebar.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(602),alt:"Flight modes single-channel"}})]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("If the screen opens in *Multi Channel Mode* click the **Use Single Channel Mode Selection** button to change screen.")])])])]),e._v(" "),n("p",[e._v(":::")]),e._v(" "),n("ol",{attrs:{start:"4"}},[n("li",[n("p",[e._v("Specify "),n("em",[e._v("Flight Mode Settings")]),e._v(":")]),e._v(" "),n("ul",[n("li",[e._v("Select the "),n("strong",[e._v("Mode channel")]),e._v(" (above this shown as Channel 5, but this will depend on your transmitter configuration).")]),e._v(" "),n("li",[e._v("Select up to six "),n("strong",[e._v("Flight Modes")]),e._v(".")])])]),e._v(" "),n("li",[n("p",[e._v("Specify "),n("em",[e._v("Switch Settings")]),e._v(":")]),e._v(" "),n("ul",[n("li",[e._v("Select the channels that you want to map to specific actions - e.g.: "),n("em",[e._v("Return")]),e._v(" mode, "),n("em",[e._v("Kill switch")]),e._v(", "),n("em",[e._v("offboard")]),e._v(" mode, etc. (if you have spare switches and channels on your transmitter).")])])]),e._v(" "),n("li",[n("p",[e._v("Test that the modes are mapped to the right transmitter switches:")]),e._v(" "),n("ul",[n("li",[e._v("Check the "),n("em",[e._v("Channel Monitor")]),e._v(" to confirm that the expected channel is changed by each switch.")]),e._v(" "),n("li",[e._v("Select each mode switch on your transmitter in turn, and check that the desired flight mode is activated (the text turns yellow on "),n("em",[e._v("QGroundControl")]),e._v(" for the active mode).")])])])]),e._v(" "),n("p",[e._v("All values are automatically saved as they are changed.")]),e._v(" "),n("p",[n("span",{attrs:{id:"taranis_setup"}})]),e._v(" "),n("h3",{attrs:{id:"single-channel-setup-video-example-including-transmitter-setup"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#single-channel-setup-video-example-including-transmitter-setup"}},[e._v("#")]),e._v(" Single-Channel Setup Video Example (including Transmitter Setup)")]),e._v(" "),n("p",[e._v("It is common to use the positions of a 2- and a 3-position switch on the transmitter to represent the 6 flight modes, and encode each combination of switches as a particular PWM value for the mode that will be sent on a single channel.")]),e._v(" "),n("p",[e._v("The video below shows how this is done with the "),n("em",[e._v("FrSky Taranis")]),e._v(' transmitter (a very popular and highly recommended RC transmitter). The process involves assigning a "logical switch" to each combination of positions of the two real switches. Each logical switch is then assigned to a different PWM value on the same channel.')]),e._v(" "),n("p",[e._v("The video then shows how to use "),n("em",[e._v("QGroundControl")]),e._v(' to specify the mode channel and map modes to each of the 6 "slots".')]),e._v(" "),n("p"),n("div",{staticClass:"embed-responsive embed-responsive-16by9"},[n("iframe",{staticClass:"embed-responsive-item youtube-player",attrs:{type:"text/html",width:"640",height:"390",src:"https://www.youtube.com/embed/scqO7vbH2jo",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]),n("p"),e._v(" "),n("h3",{attrs:{id:"single-channel-setup-instructional-example"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#single-channel-setup-instructional-example"}},[e._v("#")]),e._v(" Single-Channel Setup Instructional Example")]),e._v(" "),n("p",[e._v("This example shows how you can configure a transmitter and PX4 with:")]),e._v(" "),n("ul",[n("li",[e._v("A 3-way switch to choose between flight modes using the single-channel mode setting approach (Manual, Altitude, Acro).")]),e._v(" "),n("li",[e._v("A 2-way switch that invokes some function (arm/disarm) (via a "),n("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#radio-switches"}},[e._v("Radio switch")]),e._v(" parameter).")],1)]),e._v(" "),n("div",{staticClass:"custom-block note"},[n("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),n("p",[e._v("This example shows how to set up the popular "),n("em",[e._v("FrSky Taranis")]),e._v(" transmitter. Configuration will be slightly different for other transmitters.")])]),e._v(" "),n("p",[e._v("First set up your transmitter. Below we show how to map the Taranis \"SD\" switch to channel 5. This is done in the Taranis UI 'mixer' page, as shown below:")]),e._v(" "),n("p",[n("img",{attrs:{src:o(603),alt:"Taranis - Map channel to switch"}})]),e._v(" "),n("p",[n("img",{attrs:{src:o(604),alt:"Taranis - Configure channel"}})]),e._v(" "),n("p",[e._v("You can then select the channel and the flight modes in single channel mode selection option in "),n("em",[e._v("QGroundControl")]),e._v(":")]),e._v(" "),n("p",[n("img",{attrs:{src:o(605),alt:"QGC - Set mode channel"}})]),e._v(" "),n("p",[e._v("The "),n("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#radio-switches"}},[e._v("Radio switch")]),e._v(" parameters map a particular function to a channel. Assuming you have already mapped a channel in your transmitter you can assign the channel by "),n("RouterLink",{attrs:{to:"/ko/advanced_config/parameters.html"}},[e._v("setting the parameter")]),e._v(".")],1),e._v(" "),n("p",[e._v("For example, below we map channel 6 to the "),n("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RC_MAP_ARM_SW"}},[e._v("RC_MAP_ARM_SW")]),e._v(" parameter in "),n("em",[e._v("QGroundControl")]),e._v(".")],1),e._v(" "),n("p",[n("img",{attrs:{src:o(606),alt:"QGC - Map ARM switch to channel"}})]),e._v(" "),n("p",[n("span",{attrs:{id:"multi_channel"}})]),e._v(" "),n("h2",{attrs:{id:"multi-channel-flight-mode-selection"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#multi-channel-flight-mode-selection"}},[e._v("#")]),e._v(" Multi-Channel Flight Mode Selection")]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),n("p",[e._v("We recommend you use "),n("a",{attrs:{href:"#single_channel"}},[e._v("Single Channel Flight Mode")]),e._v(" selection because the Multi Channel selection user interface can be confusing. If you do choose to use this method, then the best approach is to start assigning channels and take note of information displayed by "),n("em",[e._v("QGroundControl")]),e._v(" following your selection.")])]),e._v(" "),n("p",[e._v("The multi-channel selection user interface allows you to map one or more modes to one or more channels. There are some modes (and hence switches) that must always be defined, and the channel to which they must be allocated.")]),e._v(" "),n("p",[e._v("To configure flight modes using the multi-channel UI:")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("Turn on your RC transmitter.")])]),e._v(" "),n("li",[n("p",[e._v("Start "),n("em",[e._v("QGroundControl")]),e._v(" and connect the vehicle.")])]),e._v(" "),n("li",[n("p",[e._v("Select the "),n("strong",[e._v("Gear")]),e._v(" icon (Vehicle Setup) in the top toolbar and then "),n("strong",[e._v("Flight Modes")]),e._v(" in the sidebar.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(607),alt:"Flight modes multi-channel"}})]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("If the screen opens in *Single Channel Mode* click the **Use Multi Channel Mode Selection** button to change screen.")])])])]),e._v(" "),n("p",[e._v(":::")]),e._v(" "),n("ol",{attrs:{start:"4"}},[n("li",[n("p",[e._v("Select the modes you want to assign to your switches and select the associated channel (selected modes will "),n("em",[e._v("move")]),e._v(" in the user interface to be grouped by channel). There are a number of complications on the mode to channel assignments:")]),e._v(" "),n("ul",[n("li",[e._v("Some modes cannot be manually edited (are grayed out) because their channel and threshold level are automatically defined based on the values of other mode settings. For example:\n"),n("ul",[n("li",[n("em",[e._v("Mission")]),e._v(" mode - is automatically assigned the same channel number as "),n("em",[e._v("Hold")]),e._v(" (if the channel for "),n("em",[e._v("Hold")]),e._v(" is defined by the user). If the channel for "),n("em",[e._v("Hold")]),e._v(" is not defined, "),n("em",[e._v("Mission")]),e._v(" mode is automatically assigned the same channel as "),n("em",[e._v("Stabilized/Main")]),e._v(" mode. This, for example, prevents the user from defining "),n("em",[e._v("Stabilized/Main")]),e._v(" and "),n("em",[e._v("Mission")]),e._v(" mode on different channels, to ensure that the user cannot switch both modes ON at the same time.")]),e._v(" "),n("li",[n("em",[e._v("Altitude")]),e._v(" mode - is automatically assigned the same channel number as "),n("em",[e._v("Position Control")]),e._v(" (if it is defined), or otherwise the same channel as "),n("em",[e._v("Stabilized/Main")]),e._v(" mode.")])])]),e._v(" "),n("li",[n("em",[e._v("Assist")]),e._v(" mode - This mode is added to the same channel as "),n("em",[e._v("Stabilized/Main")]),e._v(" mode if (and only if) "),n("em",[e._v("Position Control")]),e._v(" is enabled and defined on a different channel than "),n("em",[e._v("Stabilized/Main")]),e._v(".")])])]),e._v(" "),n("li",[n("p",[e._v("Click the "),n("strong",[e._v("Generate Thresholds")]),e._v(" button.")]),e._v(" "),n("ul",[n("li",[e._v("This will automatically create threshold values for all modes, spread evenly across each channel for its assigned modes. For example, in the mode assignment shown above, most modes are assigned to mode 5, and you can see that the channel thresholds for each mode are spread evenly across the channel.")])])])]),e._v(" "),n("p",[e._v("This mode is demonstrated in the "),n("a",{attrs:{href:"https://youtu.be/91VGmdSlbo4?t=6m53s",target:"_blank",rel:"noopener noreferrer"}},[e._v("autopilot setup video here"),n("OutboundLink")],1),e._v(" (youtube).")]),e._v(" "),n("div",{staticClass:"custom-block note"},[n("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),n("p",[e._v("This flight mode selection mechanism is relatively complicated due to the way that PX4 works out which mode should be selected. You may be able to gain some insight from this "),n("RouterLink",{attrs:{to:"/ko/concept/flight_modes.html#flight-mode-evaluation-diagram"}},[e._v("flow chart")]),e._v(".")],1)]),e._v(" "),n("h2",{attrs:{id:"further-information"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#further-information"}},[e._v("#")]),e._v(" Further Information")]),e._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/ko/flight_modes/"}},[e._v("Flight Modes Overview")])],1),e._v(" "),n("li",[n("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/SetupView/FlightModes.html#px4-pro-flight-mode-setup",target:"_blank",rel:"noopener noreferrer"}},[e._v("QGroundControl > Flight Modes"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://youtu.be/91VGmdSlbo4?t=6m53s",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4 Setup Video - @6m53s"),n("OutboundLink")],1),e._v(" (Youtube)")])])])}),[],!1,null,null,null);t.default=s.exports},602:function(e,t,o){e.exports=o.p+"assets/img/flight_modes_single_channel.4508062f.jpg"},603:function(e,t,o){e.exports=o.p+"assets/img/single_channel_mode_selection_1.af4cb2ea.png"},604:function(e,t,o){e.exports=o.p+"assets/img/single_channel_mode_selection_2.1b6ed056.png"},605:function(e,t,o){e.exports=o.p+"assets/img/single_channel_mode_selection_3.53a514b8.png"},606:function(e,t,o){e.exports=o.p+"assets/img/single_channel_mode_selection_4.9e94edfa.png"},607:function(e,t,o){e.exports=o.p+"assets/img/flight_modes_multi_channel.157d7e57.jpg"}}]);