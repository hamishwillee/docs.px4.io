(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{1510:function(t,e,o){"use strict";o.r(e);var a=o(18),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"radio-remote-control-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#radio-remote-control-setup"}},[t._v("#")]),t._v(" Radio (Remote Control) Setup")]),t._v(" "),a("p",[t._v("The "),a("em",[t._v("Radio Setup")]),t._v(" screen is used to configure the mapping of your remote control unit's main attitude control sticks (roll, pitch, yaw, throttle) to channels, and to calibrate the minimum, maximum, trim and reverse settings for all other transmitter controls/RC channels.")]),t._v(" "),a("h2",{attrs:{id:"binding-the-receiver"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#binding-the-receiver"}},[t._v("#")]),t._v(" Binding the Receiver")]),t._v(" "),a("p",[t._v("Before you can calibrate the radio system the receiver and transmitter must be connected/bound.\nThe process for binding a transmitter and receiver pair is hardware specific (see your RC manual for instructions).")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("If you are using a "),a("em",[t._v("Spektrum")]),t._v(" receiver, you can put it into bind mode using "),a("em",[t._v("QGroundControl")]),t._v(", as "),a("a",{attrs:{href:"#spektrum_bind"}},[t._v("shown below")]),t._v(".")])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("If you are using a "),a("em",[t._v("FrSky")]),t._v(" receiver, you can bind it with its transmitter, by following instructions "),a("a",{attrs:{href:"https://www.youtube.com/watch?v=1IYg5mQdLVI",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("p",[a("span",{attrs:{id:"rc_loss_detection"}})]),t._v(" "),a("h2",{attrs:{id:"rc-loss-detection"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rc-loss-detection"}},[t._v("#")]),t._v(" RC Loss Detection")]),t._v(" "),a("p",[t._v("PX4 needs to be able to detect when the signal from the RC controller has been lost in order to be able to take "),a("RouterLink",{attrs:{to:"/en/config/safety.html#rc_loss_failsafe"}},[t._v("appropriate safety measures")]),t._v(".")],1),t._v(" "),a("p",[t._v("RC receivers have different ways of indicating signal loss:")]),t._v(" "),a("ul",[a("li",[t._v("Output nothing (automatically detected by PX4)")]),t._v(" "),a("li",[t._v("Output a low throttle value (you can configure PX4 to detect this).")]),t._v(" "),a("li",[t._v("Output the last received signal ("),a("em",[t._v("cannot be detected by PX4")]),t._v(" as it looks like valid input).")])]),t._v(" "),a("p",[t._v("If your RC receiver does not support outputting no signal on RC loss, you must configure it to set throttle low instead, and set the corresponding value in "),a("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#RC_FAILS_THR"}},[t._v("RC_FAILS_THR")]),t._v(".")],1),t._v(" "),a("p",[t._v("The way to do this is to set the RC controller trim and throttle stick as low as possible, and use the resulting output PWM value in both PX4 and the receiver (read your receiver manual to determine how to set the RC loss value).\nThen reset the throttle stick trim back to its normal position.\nThis process ensures that the RC loss value is below the minimum value output by the receiver in normal operation.")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("Do not use a receiver that cannot support one of the two supported RC loss detection methods!")])]),t._v(" "),a("h2",{attrs:{id:"performing-the-calibration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#performing-the-calibration"}},[t._v("#")]),t._v(" Performing the Calibration")]),t._v(" "),a("p",[t._v("The calibration process is straightforward - you will be asked to move the sticks in a specific pattern that is shown on the transmitter diagram on the top right of the screen.")]),t._v(" "),a("p",[t._v("To calibrate the radio:")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Turn on your RC transmitter.")])]),t._v(" "),a("li",[a("p",[t._v("Start "),a("em",[t._v("QGroundControl")]),t._v(" and connect the vehicle.")])]),t._v(" "),a("li",[a("p",[t._v("Select the "),a("strong",[t._v("Gear")]),t._v(" icon (Vehicle Setup) in the top toolbar and then "),a("strong",[t._v("Radio")]),t._v(" in the sidebar.")])]),t._v(" "),a("li",[a("p",[t._v("Press "),a("strong",[t._v("OK")]),t._v(" to start the calibration.")]),t._v(" "),a("p",[a("img",{attrs:{src:o(631),alt:"Radio setup - before starting"}})])]),t._v(" "),a("li",[a("p",[t._v("Set the "),a("RouterLink",{attrs:{to:"/en/getting_started/rc_transmitter_receiver.html#transmitter_modes"}},[t._v("transmitter mode")]),t._v(" radio button that matches your transmitter (this ensures that "),a("em",[t._v("QGroundControl")]),t._v(" displays the correct stick positions for you to follow during calibration).")],1),t._v(" "),a("p",[a("img",{attrs:{src:o(632),alt:"Radio setup - move sticks"}})])]),t._v(" "),a("li",[a("p",[t._v("Move the sticks to the positions indicated in the text (and on the transmitter image). Press "),a("strong",[t._v("Next")]),t._v(" when the sticks are in position. Repeat for all positions.")])]),t._v(" "),a("li",[a("p",[t._v("When prompted, move all other switches and dials through their full range (you will be able to observe them moving on the "),a("em",[t._v("Channel Monitor")]),t._v(").")])]),t._v(" "),a("li",[a("p",[t._v("Press "),a("strong",[t._v("Next")]),t._v(" to save the settings.")])])]),t._v(" "),a("p",[t._v("Radio calibration is demonstrated in the "),a("a",{attrs:{href:"https://youtu.be/91VGmdSlbo4?t=4m30s",target:"_blank",rel:"noopener noreferrer"}},[t._v("autopilot setup video here"),a("OutboundLink")],1),t._v(" (youtube).")]),t._v(" "),a("h2",{attrs:{id:"additional-radio-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#additional-radio-setup"}},[t._v("#")]),t._v(" Additional Radio Setup")]),t._v(" "),a("p",[t._v("As well as calibrating your control sticks and other transmitter controls, there are a number of additional radio setup options that you may find useful on this screen.")]),t._v(" "),a("img",{attrs:{src:o(633),title:"Radio setup - additional settings",width:"300px"}}),t._v(" "),a("p",[a("span",{attrs:{id:"spektrum_bind"}})]),t._v(" "),a("h3",{attrs:{id:"spectrum-bind"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spectrum-bind"}},[t._v("#")]),t._v(" Spectrum Bind")]),t._v(" "),a("p",[t._v("Before you can calibrate the radio system the receiver and transmitter must be connected/bound. If you have a "),a("em",[t._v("Spektrum")]),t._v(" receiver you can put it in "),a("em",[t._v("bind mode")]),t._v(" using "),a("em",[t._v("QGroundControl")]),t._v(" as shown below (this can be particularly useful if you don't have easy physical access to the receiver on your vehicle).")]),t._v(" "),a("p",[t._v("To bind a Spektrum transmitter/receiver:")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Select the "),a("strong",[t._v("Spektrum Bind")]),t._v(" button")])]),t._v(" "),a("li",[a("p",[t._v("Select the radio button for your receiver")])]),t._v(" "),a("li",[a("p",[t._v("Press "),a("strong",[t._v("OK")])]),t._v(" "),a("p",[a("img",{attrs:{src:o(634),alt:"Spektrum Bind"}})])]),t._v(" "),a("li",[a("p",[t._v("Power on your Spektrum transmitter while holding down the bind button.")])])]),t._v(" "),a("h3",{attrs:{id:"copy-trims"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#copy-trims"}},[t._v("#")]),t._v(" Copy Trims")]),t._v(" "),a("p",[t._v("This setting is used to copy the manual trim settings from your radio transmitter so that they can be applied automatically within the autopilot. After this is done you will need to remove the manually set trims.")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("Trim settings are used to adjust the roll, pitch, yaw such that when you center the sticks on your remote control, you get stable or level flight (in Stabilized flight mode).\nSome RC controllers provide trim knobs that allow you to provide an offset to the value sent by the RC controller for each stick position.\nThe "),a("strong",[t._v("Copy Trims")]),t._v(" setting here moves the offsets into the autopilot.")])]),t._v(" "),a("p",[t._v("To copy the trims:")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Select "),a("strong",[t._v("Copy Trims")]),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("Center your sticks and move throttle all the way down.")])]),t._v(" "),a("li",[a("p",[t._v("Press "),a("strong",[t._v("Ok")]),t._v(".")]),t._v(" "),a("p",[a("img",{attrs:{src:o(635),alt:"Copy Trims"}})])]),t._v(" "),a("li",[a("p",[t._v("Reset the trims on your transmitter back to zero.")])])]),t._v(" "),a("h3",{attrs:{id:"aux-passthrough-channels"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aux-passthrough-channels"}},[t._v("#")]),t._v(" AUX Passthrough Channels")]),t._v(" "),a("p",[t._v("AUX passthrough channels allow you to control arbitrary optional hardware from your transmitter (for example, a gripper).")]),t._v(" "),a("p",[t._v("To use the AUX passthrough channels:")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Map up to 2 transmitter controls to separate channels.")])]),t._v(" "),a("li",[a("p",[t._v("Specify these channels to map to the AUX1 and AUX2 ports respectively, as shown below.\nValues are saved to the vehicle as soon as they are set.")]),t._v(" "),a("p",[a("img",{attrs:{src:o(636),alt:"AUX1 and AUX2 RC passthrough channels"}})])])]),t._v(" "),a("p",[t._v("The flight controller will pass through the unmodified values from the specified channels out of AUX1/AUX2 to the connected servos/relays that drive your hardware.")]),t._v(" "),a("h3",{attrs:{id:"param-tuning-channels"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#param-tuning-channels"}},[t._v("#")]),t._v(" Param Tuning Channels")]),t._v(" "),a("p",[t._v("Tuning channels allow you to map a transmitter tuning knob to a parameter (so that you can dynamically modify a parameter from your transmitter).")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("This feature is provided to enable manual in-flight tuning: "),a("RouterLink",{attrs:{to:"/en/config_mc/pid_tuning_guide_multicopter.html"}},[t._v("Multicopter PID Tuning Guide")]),t._v(", "),a("RouterLink",{attrs:{to:"/en/config_fw/pid_tuning_guide_fixedwing.html"}},[t._v("Fixedwing PID Tuning Guide")]),t._v(".")],1)]),t._v(" "),a("p",[t._v("The channels used for parameter tuning are assigned in the "),a("em",[t._v("Radio")]),t._v(" setup (here!), while the mapping from each tuning channel to its associated parameter is defined in the "),a("em",[t._v("Parameter editor")]),t._v(".")]),t._v(" "),a("p",[t._v("To set up tuning channels:")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Map up to 3 transmitter controls (dials or sliders) to separate channels.")])]),t._v(" "),a("li",[a("p",[t._v("Select the mapping of "),a("em",[t._v("PARAM Tuning Id")]),t._v(" to radio channels, using the selection lists.\nValues are saved to the vehicle as soon as they are set.")]),t._v(" "),a("p",[a("img",{attrs:{src:o(637),alt:"Map radio channels to tuning channels"}})])])]),t._v(" "),a("p",[t._v("To map a PARAM tuning channel to a parameter:")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Open the "),a("strong",[t._v("Parameters")]),t._v(" sidebar.")])]),t._v(" "),a("li",[a("p",[t._v("Select the parameter to map to your transmitter (this will open the "),a("em",[t._v("Parameter Editor")]),t._v(").")])]),t._v(" "),a("li",[a("p",[t._v("Check the "),a("strong",[t._v("Advanced Settings")]),t._v(" checkbox.")])]),t._v(" "),a("li",[a("p",[t._v("Click the "),a("strong",[t._v("Set RC to Param...")]),t._v(" button (this will pop-up the foreground dialog displayed below)")]),t._v(" "),a("p",[a("img",{attrs:{src:o(638),alt:"Map tuning channels to parameters"}})])]),t._v(" "),a("li",[a("p",[t._v("Select the tuning channel to map (1, 2 or 3) from the "),a("em",[t._v("Parameter Tuning ID")]),t._v(" selection list.")])]),t._v(" "),a("li",[a("p",[t._v("Press "),a("strong",[t._v("OK")]),t._v(" to close the dialog.")])]),t._v(" "),a("li",[a("p",[t._v("Press "),a("strong",[t._v("Save")]),t._v(" to save all changes and close the "),a("em",[t._v("Parameter Editor")]),t._v(".")])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("You can clear all parameter/tuning channel mappings by selecting menu "),a("strong",[t._v("Tools > Clear RC to Param")]),t._v(" at the top right of the "),a("em",[t._v("Parameters")]),t._v(" screen.")])]),t._v(" "),a("h2",{attrs:{id:"further-information"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#further-information"}},[t._v("#")]),t._v(" Further Information")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/SetupView/Radio.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGroundControl > Radio Control"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://youtu.be/91VGmdSlbo4?t=4m30s",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4 Setup Video - @4m30s"),a("OutboundLink")],1),t._v(" (Youtube)")]),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/en/getting_started/rc_transmitter_receiver.html"}},[t._v("RC System Selection")]),t._v(" - Choose a compatible RC system.")],1)])])}),[],!1,null,null,null);e.default=r.exports},631:function(t,e,o){t.exports=o.p+"assets/img/radio_start_setup.a0fa4f53.jpg"},632:function(t,e,o){t.exports=o.p+"assets/img/radio_sticks_throttle.139795e9.jpg"},633:function(t,e,o){t.exports=o.p+"assets/img/radio_additional_radio_setup.ecd4363a.jpg"},634:function(t,e,o){t.exports=o.p+"assets/img/radio_additional_setup_spectrum_bind_select_channels.6b7ff256.jpg"},635:function(t,e,o){t.exports=o.p+"assets/img/radio_additional_radio_setup_copy_trims.ab0f7d3f.jpg"},636:function(t,e,o){t.exports=o.p+"assets/img/radio_additional_setup_aux_passthrough_channels.be0edc70.jpg"},637:function(t,e,o){t.exports=o.p+"assets/img/radio_additional_radio_setup_param_tuning.49f5b6d3.jpg"},638:function(t,e,o){t.exports=o.p+"assets/img/parameters_radio_channel_mapping.c1adf31c.jpg"}}]);