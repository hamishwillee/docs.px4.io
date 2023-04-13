(window.webpackJsonp=window.webpackJsonp||[]).push([[380],{1817:function(t,e,o){"use strict";o.r(e);var s=o(19),i=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"flight-mode-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flight-mode-configuration"}},[t._v("#")]),t._v(" Flight Mode Configuration")]),t._v(" "),s("p",[t._v("This topic explains how to map "),s("RouterLink",{attrs:{to:"/en/getting_started/flight_modes.html"}},[t._v("flight modes")]),t._v(" and other functions to the switches on your radio control transmitter.")],1),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("In order to set up flight modes you must already have:")]),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/en/config/radio.html"}},[t._v("Configured your radio")])],1),t._v(" "),s("li",[s("a",{attrs:{href:"#rc-transmitter-setup"}},[t._v("Setup your transmitter")]),t._v(" to encode the physical positions of your mode switch(es) into a single channel.\nWe provide examples for the popular "),s("em",[t._v("Taranis")]),t._v(" transmitter "),s("a",{attrs:{href:"#taranis-setup-3-way-switch-configuration-for-single-channel-mode"}},[t._v("below")]),t._v(" (check your documentation if you use a different transmitter).")])])]),t._v(" "),s("h2",{attrs:{id:"what-flight-modes-and-switches-should-i-set"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-flight-modes-and-switches-should-i-set"}},[t._v("#")]),t._v(" What Flight Modes and Switches Should I Set?")]),t._v(" "),s("p",[s("em",[t._v("Flight Modes")]),t._v(" provide different types of "),s("em",[t._v("autopilot-assisted flight")]),t._v(", and "),s("em",[t._v("fully autonomous flight")]),t._v(".\nYou can set any (or none) of the flight modes "),s("RouterLink",{attrs:{to:"/en/getting_started/flight_modes.html"}},[t._v("described here")]),t._v(".\nMost users should set the following functions, as these make the vehicle easier and safer to fly:")],1),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Position mode")]),t._v(" ("),s("RouterLink",{attrs:{to:"/en/getting_started/flight_modes.html#position-mode-mc"}},[t._v("multicopter")]),t._v(", "),s("RouterLink",{attrs:{to:"/en/getting_started/flight_modes.html#position-mode-fw"}},[t._v("fixed-wing")]),t._v(") - Easiest and safest mode for manual flight.")],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/en/flight_modes/return.html"}},[t._v("Return mode")]),t._v(" - Return to launch position by safe path and land (by default).")],1),t._v(" "),s("li",[s("strong",[t._v("VTOL Transition Switch")]),t._v(" - Toggle between fixed-wing and multicopter flight configuration on VTOL vehicles.")])]),t._v(" "),s("p",[t._v("It is also common to map switches to:")]),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/en/flight_modes/mission.html"}},[t._v("Mission")]),t._v(" - This mode runs a pre-programmed mission sent by the ground control station.")],1),t._v(" "),s("li",[s("a",{attrs:{id:"kill_switch"}}),t._v(" "),s("RouterLink",{attrs:{to:"/en/config/safety.html#kill-switch"}},[t._v("Kill Switch")]),t._v(" - Immediately stops all motor outputs (the vehicle will crash, which may in some circumstances be more desirable than allowing it to continue flying).")],1)]),t._v(" "),s("h2",{attrs:{id:"flight-mode-selection"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flight-mode-selection"}},[t._v("#")]),t._v(" Flight Mode Selection")]),t._v(" "),s("p",[t._v('PX4 allows you to specify a "mode" channel and select up to 6 flight modes that will be activated based on the PWM value of the channel.\nYou can also separately specify channels for mapping a kill switch, return to launch mode, and offboard mode.')]),t._v(" "),s("p",[t._v("To configure single-channel flight mode selection:")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Start "),s("em",[t._v("QGroundControl")]),t._v(" and connect the vehicle.")])]),t._v(" "),s("li",[s("p",[t._v("Turn on your RC transmitter.")])]),t._v(" "),s("li",[s("p",[t._v("Select "),s("strong",[t._v("QGroundControl icon > Vehicle Setup")]),t._v(", and then "),s("strong",[t._v("Flight Modes")]),t._v(" in the sidebar.")]),t._v(" "),s("p",[s("img",{attrs:{src:o(672),alt:"Flight modes single-channel"}})])]),t._v(" "),s("li",[s("p",[t._v("Specify "),s("em",[t._v("Flight Mode Settings")]),t._v(":")]),t._v(" "),s("ul",[s("li",[t._v("Select the "),s("strong",[t._v("Mode channel")]),t._v(" (above this shown as Channel 5, but this will depend on your transmitter configuration).")]),t._v(" "),s("li",[t._v("Move the transmitter switch (or switches) that you have set up for mode selection through the available positions.\nThe mode slot matching your current switch position will be highlighted (above this is "),s("em",[t._v("Flight Mode 1")]),t._v(")."),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("While you can set flight modes in any of the 6 slots, only the channels that are mapped to switch positions will be highlighted/used.")])])]),t._v(" "),s("li",[t._v("Select the flight mode that you want triggered for each switch position.")])])]),t._v(" "),s("li",[s("p",[t._v("Specify "),s("em",[t._v("Switch Settings")]),t._v(":")]),t._v(" "),s("ul",[s("li",[t._v("Select the channels that you want to map to specific actions - e.g.: "),s("em",[t._v("Return")]),t._v(" mode, "),s("em",[t._v("Kill switch")]),t._v(", "),s("em",[t._v("offboard")]),t._v(" mode, etc. (if you have spare switches and channels on your transmitter).")])])]),t._v(" "),s("li",[s("p",[t._v("Test that the modes are mapped to the right transmitter switches:")]),t._v(" "),s("ul",[s("li",[t._v("Check the "),s("em",[t._v("Channel Monitor")]),t._v(" to confirm that the expected channel is changed by each switch.")]),t._v(" "),s("li",[t._v("Select each mode switch on your transmitter in turn, and check that the desired flight mode is activated (the text turns yellow on "),s("em",[t._v("QGroundControl")]),t._v(" for the active mode).")])])])]),t._v(" "),s("p",[t._v("All values are automatically saved as they are changed.")]),t._v(" "),s("h2",{attrs:{id:"rc-transmitter-setup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rc-transmitter-setup"}},[t._v("#")]),t._v(" RC Transmitter Setup")]),t._v(" "),s("p",[t._v("This section contains a small number of possible setup configurations for taranis.\nQGroundControl "),s("em",[t._v("may")]),t._v(" have "),s("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/SetupView/FlightModes.html#transmitter-setup",target:"_blank",rel:"noopener noreferrer"}},[t._v("setup information for other transmitters here"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[s("span",{attrs:{id:"taranis_setup"}})]),t._v(" "),s("h3",{attrs:{id:"taranis-setup-3-way-switch-configuration-for-single-channel-mode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#taranis-setup-3-way-switch-configuration-for-single-channel-mode"}},[t._v("#")]),t._v(" Taranis Setup: 3-way Switch Configuration for Single-Channel Mode")]),t._v(" "),s("p",[t._v('If you only need to support selecting between two or three modes then you can map the modes to the positions of a single 3-way switch.\nBelow we show how to map the Taranis 3-way "SD" switch to channel 5.')]),t._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),s("p",[t._v("This example shows how to set up the popular "),s("em",[t._v("FrSky Taranis")]),t._v(" transmitter.\nTransmitter setup will be different on other transmitters.")])]),t._v(" "),s("p",[t._v("Open the Taranis UI "),s("strong",[t._v("MIXER")]),t._v(" page and scroll down to "),s("strong",[t._v("CH5")]),t._v(", as shown below:")]),t._v(" "),s("p",[s("img",{attrs:{src:o(673),alt:"Taranis - Map channel to switch"}})]),t._v(" "),s("p",[t._v("Press "),s("strong",[t._v("ENT(ER)")]),t._v(" to edit the "),s("strong",[t._v("CH5")]),t._v(" configuration then change the "),s("strong",[t._v("Source")]),t._v(" to be the "),s("em",[t._v("SD")]),t._v(" button.")]),t._v(" "),s("p",[s("img",{attrs:{src:o(674),alt:"Taranis - Configure channel"}})]),t._v(" "),s("p",[t._v("That's it!\nChannel 5 will now output 3 different PWM values for the three different "),s("strong",[t._v("SD")]),t._v(" switch positions.")]),t._v(" "),s("p",[t._v("The "),s("em",[t._v("QGroundControl")]),t._v(" configuration is then as described in the previous section.")]),t._v(" "),s("h3",{attrs:{id:"taranis-setup-multi-switch-configuration-for-single-channel-mode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#taranis-setup-multi-switch-configuration-for-single-channel-mode"}},[t._v("#")]),t._v(" Taranis Setup: Multi-Switch Configuration for Single-Channel Mode")]),t._v(" "),s("p",[t._v("Most transmitters do not have 6-way switches, so if you need to be able to support more modes than the number of switch positions available (up to 6) then you will have to represent them using multiple switches.\nCommonly this is done by encoding the positions of a 2- and a 3-position switch into a single channel, so that each switch position results in a different PWM value.")]),t._v(" "),s("p",[t._v('On the FrSky Taranis this process involves assigning a "logical switch" to each combination of positions of the two real switches.\nEach logical switch is then assigned to a different PWM value on the same channel.')]),t._v(" "),s("p",[t._v("The video below shows how this is done with the "),s("em",[t._v("FrSky Taranis")]),t._v(" transmitter.")]),t._v(" "),s("p"),s("div",{staticClass:"embed-responsive embed-responsive-16by9"},[s("iframe",{staticClass:"embed-responsive-item youtube-player",attrs:{type:"text/html",width:"640",height:"390",src:"https://www.youtube.com/embed/TFEjEQZqdVA",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]),s("p"),t._v(" "),s("p",[t._v("The "),s("em",[t._v("QGroundControl")]),t._v(" configuration is then "),s("a",{attrs:{href:"#flight-mode-selection"}},[t._v("as described above")]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"further-information"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#further-information"}},[t._v("#")]),t._v(" Further Information")]),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/en/flight_modes/"}},[t._v("Flight Modes Overview")])],1),t._v(" "),s("li",[s("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/SetupView/FlightModes.html#px4-pro-flight-mode-setup",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGroundControl > Flight Modes"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://youtu.be/91VGmdSlbo4?t=6m53s",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4 Setup Video - @6m53s"),s("OutboundLink")],1),t._v(" (Youtube)")]),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#radio-switches"}},[t._v("Radio switch parameters")]),t._v(" - Can be used to set mappings via parameters")],1)])])}),[],!1,null,null,null);e.default=i.exports},672:function(t,e,o){t.exports=o.p+"assets/img/flight_modes_single_channel.fed4f78e.jpg"},673:function(t,e,o){t.exports=o.p+"assets/img/single_channel_mode_selection_1.af4cb2ea.png"},674:function(t,e,o){t.exports=o.p+"assets/img/single_channel_mode_selection_2.1b6ed056.png"}}]);