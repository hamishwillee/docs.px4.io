(window.webpackJsonp=window.webpackJsonp||[]).push([[858],{3223:function(e,t,i){"use strict";i.r(t);var a=i(19),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"auto-tuning"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#auto-tuning"}},[e._v("#")]),e._v(" Auto-tuning")]),e._v(" "),a("p",[e._v('Auto-tuning automates the process of tuning the PX4 rate and attitude controllers, which are the most important controllers for stable and responsive flight (other tuning is more "optional"). It is currently enabled for multicopter, fixed wing, and hybrid VTOL fixed wing vehicles.')]),e._v(" "),a("p",[e._v("Tuning only needs to be done once, and is recommended unless unless you're using vehicle that has already been tuned by the manufacturer (and not modified since).")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("注意")]),e._v(" "),a("p",[e._v("Auto-tuning is performed while flying. The airframe must fly well enough handle moderate disturbances, and should be closely attended:")]),e._v(" "),a("ul",[a("li",[e._v("Test that your vehicle is "),a("a",{attrs:{href:"#pre-tuning-test"}},[e._v("stable enough for autotuning")]),e._v(".")]),e._v(" "),a("li",[e._v("Be ready to abort the autotuning process. You can do this by changing flight modes or using an auto-tune enable/disable switch ("),a("a",{attrs:{href:"#enable-disable-autotune-switch-fixed-wing"}},[e._v("if configured")]),e._v(").")]),e._v(" "),a("li",[e._v("Verify that the vehicle flies well after tuning.")])])]),e._v(" "),a("p"),a("div",{staticClass:"embed-responsive embed-responsive-16by9"},[a("iframe",{staticClass:"embed-responsive-item youtube-player",attrs:{type:"text/html",width:"640",height:"390",src:"https://www.youtube.com/embed/5xswOhhqrIQ",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]),a("p"),e._v(" "),a("h2",{attrs:{id:"pre-tuning-test"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pre-tuning-test"}},[e._v("#")]),e._v(" Pre-tuning Test")]),e._v(" "),a("p",[e._v("The vehicle must be able to fly and adequately stabilize itself before running auto-tune. This test ensures that the vehicle can fly safely in position controlled modes.")]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),a("p",[e._v("During "),a("RouterLink",{attrs:{to:"/zh/config/airframe.html"}},[e._v("Airframe Setup")]),e._v(" you should have selected the frame that most closely matches your vehicle. This may fly well enough to run autotuning.")],1)]),e._v(" "),a("p",[e._v("To make sure the vehicle is stable enough for auto-tuning:")]),e._v(" "),a("ol",[a("li",[e._v("Perform a normal preflight safety checklist to ensure the flight zone is clear and has enough space.")]),e._v(" "),a("li",[e._v("Takeoff and prepare for the test\n"),a("ul",[a("li",[a("strong",[e._v("Multicopters:")]),e._v(" Take off and hover at 1m above ground in "),a("RouterLink",{attrs:{to:"/zh/flight_modes/altitude_mc.html"}},[e._v("Altitude mode")]),e._v(" or Stabilized mode.")],1),e._v(" "),a("li",[a("strong",[e._v("Fixed-wing:")]),e._v(" Take off and fly at cruise speed in "),a("RouterLink",{attrs:{to:"/zh/flight_modes/position_mc.html"}},[e._v("Position mode")]),e._v(" or "),a("RouterLink",{attrs:{to:"/zh/flight_modes/altitude_mc.html"}},[e._v("Altitude mode")]),e._v(".")],1)])]),e._v(" "),a("li",[e._v("Use the RC transmitter roll stick to perform the following maneuver, tilting the vehicle just a few degrees: "),a("em",[e._v("roll left > roll right > center")]),e._v(" (The whole maneuver should take about 3 seconds). The vehicle should stabilise itself within 2 oscillations.")]),e._v(" "),a("li",[e._v("Repeat the maneuver, tilting with larger amplitudes at each attempt. If the vehicle can stabilise itself within 2 oscillations at ~20 degrees move to the next step.")]),e._v(" "),a("li",[e._v("Repeat the same maneuvers but on the pitch axis. A above, start with small angles and confirm that the vehicle can itself within 2 oscillations before increasing the tilt.")])]),e._v(" "),a("p",[e._v("If the drone can stabilize itself within 2 oscillations it is ready for the auto-tuning procedure.")]),e._v(" "),a("p",[e._v("If not, go to the "),a("a",{attrs:{href:"#troubleshooting"}},[e._v("troubleshooting")]),e._v(" section, which explains the minimal manual tuning to prepare the vehicle for auto-tuning.")]),e._v(" "),a("h3",{attrs:{id:"auto-tuning-procedure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#auto-tuning-procedure"}},[e._v("#")]),e._v(" Auto-tuning Procedure")]),e._v(" "),a("p",[e._v("The auto-tuning sequence must be performed in a "),a("strong",[e._v("safe flight zone, with enough space")]),e._v(". It takes about 40 seconds ("),a("a",{attrs:{href:"#how-long-does-autotuning-take"}},[e._v("between 19 and 68 seconds")]),e._v("). For best results, we recommend running the test in calm weather conditions.")]),e._v(" "),a("p",[e._v("The recommended modes for autotuning are "),a("RouterLink",{attrs:{to:"/zh/flight_modes/hold.html"}},[e._v("Hold mode")]),e._v(" (fixed wing) and "),a("RouterLink",{attrs:{to:"/zh/flight_modes/altitude_mc.html"}},[e._v("Altitude mode")]),e._v(" (MC), but any other flight mode can be used. During auto tuning, the RC sticks can still be used to fly the vehicle.")],1),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),a("p",[e._v("The auto-tuning sequence can be aborted at any time by changing flight modes or using the "),a("a",{attrs:{href:"#enable-disable-autotune-switch-fixed-wing"}},[e._v("enable/disable Autotune switch")]),e._v(" (if configured).")])]),e._v(" "),a("p",[e._v("The test steps are:")]),e._v(" "),a("ol",[a("li",[e._v("Perform the "),a("a",{attrs:{href:"#pre-tuning-test"}},[e._v("pre-tuning test")]),e._v(".")]),e._v(" "),a("li",[e._v("Takeoff using RC control and prepare for test:\n"),a("ul",[a("li",[a("strong",[e._v("Multicopters:")]),e._v(" Takeoff using the remote controller in "),a("RouterLink",{attrs:{to:"/zh/flight_modes/altitude_mc.html"}},[e._v("Altitude mode")]),e._v(". Hover the vehicle at a safe distance and at a few meters above ground (between 4 and 20m).")],1),e._v(" "),a("li",[a("strong",[e._v("Fixed-wing:")]),e._v(" Once flying at cruise speed, activate "),a("RouterLink",{attrs:{to:"/zh/flight_modes/hold.html"}},[e._v("Hold mode")]),e._v(". This will guide the plane to fly in circle at constant altitude and speed.")],1)])]),e._v(" "),a("li",[e._v("Enable autotune.")])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("提示")]),e._v(" "),a("p",[e._v("If an "),a("a",{attrs:{href:"#enable-disable-autotune-switch-fixed-wing"}},[e._v("Enable/Disable Autotune Switch")]),e._v(' is configured you can just toggle the switch to the "enabled" position.')])]),e._v(" "),a("ol",[a("li",[a("p",[e._v("In QGroundControl, open the menu: "),a("strong",[e._v("Vehicle setup > PID Tuning")])]),e._v(" "),a("p",[a("img",{attrs:{src:i(678),alt:"Tuning Setup > Autotune Enabled"}})])]),e._v(" "),a("li",[a("p",[e._v("Select either the "),a("em",[e._v("Rate Controller")]),e._v(" or "),a("em",[e._v("Attitude Controller")]),e._v(" tabs.")])]),e._v(" "),a("li",[a("p",[e._v("Ensure that the "),a("strong",[e._v("Autotune enabled")]),e._v(" button is enabled (this will display the "),a("strong",[e._v("Autotune")]),e._v(" button and remove the manual tuning selectors).")])]),e._v(" "),a("li",[a("p",[e._v("Read the warning popup and click on "),a("strong",[e._v("OK")]),e._v(" to start tuning.")])]),e._v(" "),a("li",[a("p",[e._v("The drone will first start to perform quick roll motions followed by pitch and yaw motions. The progress is shown in the progress bar, next to the "),a("em",[e._v("Autotune")]),e._v(" button.")])]),e._v(" "),a("li",[a("p",[e._v("Apply the tuning:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Fixed Wing:")]),e._v(" The tuning will be immediately/automatically be applied and tested in flight (by default). PX4 will then run a 4 second test and revert the new tuning if a problem is detected.")]),e._v(" "),a("li",[a("strong",[e._v("Multicopters:")]),e._v(" Manually land and disarm to apply the new tuning parameters. Takeoff carefully and manually test that the vehicle is stable.")])])]),e._v(" "),a("li",[a("p",[e._v("If any strong oscillations occur, land immediately and follow the instructions in the "),a("a",{attrs:{href:"#troubleshooting"}},[e._v("Troubleshooting")]),e._v(" section below.")])])]),e._v(" "),a("p",[e._v("Additional notes:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("VTOL:")]),e._v(" Hybrid VTOL fixed wing vehicles must be tuned twice, following multicopter instructions in MC mode and fixed-wing instructions in FW mode.")]),e._v(" "),a("li",[a("strong",[e._v("Multicopter:")]),e._v(" The instructions above tune the vehicle in "),a("RouterLink",{attrs:{to:"/zh/flight_modes/altitude_mc.html"}},[e._v("Altitude mode")]),e._v(". You can instead takeoff in "),a("RouterLink",{attrs:{to:"/zh/flight_modes/takeoff.html"}},[e._v("Takeoff mode")]),e._v(" and tune in "),a("RouterLink",{attrs:{to:"/zh/flight_modes/position_mc.html"}},[e._v("Position mode")]),e._v(" if the vehicle is is "),a("em",[e._v("known")]),e._v(" to be stable in these modes.")],1),e._v(" "),a("li",[a("strong",[e._v("Fixed wing:")]),e._v(" Autotuning can also be run in "),a("RouterLink",{attrs:{to:"/zh/flight_modes/altitude_mc.html"}},[e._v("Altitude mode")]),e._v(" or "),a("RouterLink",{attrs:{to:"/zh/flight_modes/position_mc.html"}},[e._v("Position mode")]),e._v(". However running the test while flying straight requires a larger safe area for tuning, and does not give a significantly better tuning result.")],1),e._v(" "),a("li",[e._v("Whether tuning is applied in-air or after landing can be "),a("a",{attrs:{href:"#apply-parameters-when-in-air-landed"}},[e._v("configured using parameters")]),e._v(".")])]),e._v(" "),a("h2",{attrs:{id:"troubleshooting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[e._v("#")]),e._v(" Troubleshooting")]),e._v(" "),a("h4",{attrs:{id:"the-drone-oscillates-when-performing-the-testing-maneuvers-prior-to-the-auto-tuning"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-drone-oscillates-when-performing-the-testing-maneuvers-prior-to-the-auto-tuning"}},[e._v("#")]),e._v(" The drone oscillates when performing the testing maneuvers prior to the auto-tuning")]),e._v(" "),a("ul",[a("li",[e._v("slow oscillations (1 oscillation per second or slower): this often occurs on large platforms and means that the attitude loop is too fast compared to the rate loop.\n"),a("ul",[a("li",[a("strong",[e._v("Multicopter:")]),e._v(" decrease "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MC_ROLL_P"}},[e._v("MC_ROLL_P")]),e._v(" and "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MC_PITCH_P"}},[e._v("MC_PITCH_P")]),e._v(" by steps of 1.0.")],1),e._v(" "),a("li",[a("strong",[e._v("Fixed-wing:")]),e._v(" increase "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FW_R_TC"}},[e._v("FW_R_TC")]),e._v(", "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FW_P_TC"}},[e._v("FW_P_TC")]),e._v(", "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FW_Y_TC"}},[e._v("FW_Y_TC")]),e._v(" by steps of 0.1.")],1)])]),e._v(" "),a("li",[e._v("fast oscillations (more than 1 oscillation per second): this is because the gain of the rate loop is too high.\n"),a("ul",[a("li",[a("strong",[e._v("Multicopter:")]),e._v(" decrease "),a("code",[e._v("MC_[ROLL|PITCH|YAW]RATE_K")]),e._v(" by steps of 0.02")]),e._v(" "),a("li",[a("strong",[e._v("Fixed-wing:")]),e._v(" decrease "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FW_RR_R"}},[e._v("FW_RR_R")]),e._v(", "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FW_RR_P"}},[e._v("FW_RR_P")]),e._v(", "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FW_RR_Y"}},[e._v("FW_RR_Y")]),e._v(" by steps of 0.01.")],1)])])]),e._v(" "),a("h4",{attrs:{id:"the-auto-tuning-sequence-fails"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-auto-tuning-sequence-fails"}},[e._v("#")]),e._v(" The auto-tuning sequence fails")]),e._v(" "),a("p",[e._v("If the drone was not moving enough during auto-tuning, the system identification algorithm might have issues to find the correct coefficients. Increase the "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FW_AT_SYSID_AMP"}},[e._v("FW_AT_SYSID_AMP")]),e._v(", "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MC_AT_SYSID_AMP"}},[e._v("MC_AT_SYSID_AMP")]),e._v(" by steps of 1 and trigger the auto-tune again.")],1),e._v(" "),a("h4",{attrs:{id:"the-drone-oscillates-after-auto-tuning"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-drone-oscillates-after-auto-tuning"}},[e._v("#")]),e._v(" The drone oscillates after auto-tuning")]),e._v(" "),a("p",[e._v("Due to effects not included in the mathematical model such as delays, saturation, slew-rate, airframe flexibility, the loop gain can be too high. To fix this, follow the same steps described "),a("a",{attrs:{href:"#the-drone-oscillates-when-performing-the-testing-maneuvers-prior-to-the-auto-tuning"}},[e._v("when the drone oscillates in the pre-tuning test")]),e._v(".")]),e._v(" "),a("h4",{attrs:{id:"i-still-can-t-get-it-to-work"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#i-still-can-t-get-it-to-work"}},[e._v("#")]),e._v(" I still can't get it to work")]),e._v(" "),a("p",[e._v("Attempt manual tuning using the appropriate guides:")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/zh/config_mc/pid_tuning_guide_multicopter_basic.html"}},[e._v("Multicopter PID Tuning Guide")]),e._v(" (Manual/Simple)")],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/config_mc/pid_tuning_guide_multicopter.html"}},[e._v("Multicopter PID Tuning Guide")]),e._v(" (Advanced/Detailed)")],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/config_fw/pid_tuning_guide_fixedwing.html"}},[e._v("Fixed-Wing PID Tuning Guide")])],1)]),e._v(" "),a("h2",{attrs:{id:"optional-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#optional-configuration"}},[e._v("#")]),e._v(" Optional Configuration")]),e._v(" "),a("h3",{attrs:{id:"apply-parameters-when-in-air-landed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#apply-parameters-when-in-air-landed"}},[e._v("#")]),e._v(" Apply Parameters When In-Air/Landed")]),e._v(" "),a("p",[e._v("By default MC vehicles land before parameters are applied, while FW vehicles apply the parameters in-air and then test that the controllers work properly. This behaviour can be configured using the "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#MC_AT_APPLY"}},[e._v("MC_AT_APPLY")]),e._v(" and "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FW_AT_APPLY"}},[e._v("FW_AT_APPLY")]),e._v(" parameters respectively:")],1),e._v(" "),a("ul",[a("li",[a("code",[e._v("0")]),e._v(": the gains are not applied. This is used for testing purposes if the user wants to inspect results of the auto-tuning algorithm without using them directly.")]),e._v(" "),a("li",[a("code",[e._v("1")]),e._v(": apply the gains after disarm (default for multirotors). The operator can then test the new tuning while taking-off carefully.")]),e._v(" "),a("li",[a("code",[e._v("2")]),e._v(": apply immediately (default for fixed-fings). The new tuning is applied, disturbances are sent to the controller and the stability is monitored during the next 4 seconds. If the control loop is unstable, the control gains are immediately reverted back to their previous value. If the test passes, the pilot can then use the new tuning.")])]),e._v(" "),a("h3",{attrs:{id:"enable-disable-autotune-switch-fixed-wing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enable-disable-autotune-switch-fixed-wing"}},[e._v("#")]),e._v(" Enable/Disable Autotune Switch (Fixed Wing)")]),e._v(" "),a("p",[e._v("A remote control switch can be configured to enable/disable autotune (in any mode) using an RC AUX channel.")]),e._v(" "),a("p",[e._v("To map a switch:")]),e._v(" "),a("ol",[a("li",[e._v("Select an RC channel on your controller to use for the autotune enable/disable switch.")]),e._v(" "),a("li",[e._v("Set "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#RC_MAP_AUX1"}},[e._v("RC_MAP_AUX1")]),e._v(" to match the RC channel for your switch (you can use any of "),a("code",[e._v("RC_MAP_AUX1")]),e._v(" to "),a("code",[e._v("RC_MAP_AUX6")]),e._v(").")],1),e._v(" "),a("li",[e._v("Set "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FW_AT_MAN_AUX"}},[e._v("FW_AT_MAN_AUX")]),e._v(" to the selected channel (i.e. "),a("code",[e._v("1: Aux 1")]),e._v(" if you mapped "),a("code",[e._v("RC_MAP_AUX1")]),e._v(").")],1)]),e._v(" "),a("p",[e._v("The auto tuner will be disabled when the switch is below "),a("code",[e._v("0.5")]),e._v(" (on the manual control setpoint range of of "),a("code",[e._v("[-1, 1]")]),e._v(" and enabled when the switch channel is above "),a("code",[e._v("0.5")]),e._v(".")]),e._v(" "),a("p",[e._v("If using an RC AUX switch to enable autotuning, make sure to "),a("a",{attrs:{href:"#select-tuning-axis-fixed-wing"}},[e._v("select the tuning axes")]),e._v(" before flight.")]),e._v(" "),a("h3",{attrs:{id:"select-tuning-axis-fixed-wing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#select-tuning-axis-fixed-wing"}},[e._v("#")]),e._v(" Select Tuning Axis (Fixed Wing)")]),e._v(" "),a("p",[e._v("Fixed wing vehicles (only) can select which axes are tuned using the "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#FW_AT_AXES"}},[e._v("FW_AT_AXES")]),e._v(" bitmask parameter:")],1),e._v(" "),a("ul",[a("li",[e._v("bit "),a("code",[e._v("0")]),e._v(": roll (default)")]),e._v(" "),a("li",[e._v("bit "),a("code",[e._v("1")]),e._v(": pitch (default)")]),e._v(" "),a("li",[e._v("bit "),a("code",[e._v("2")]),e._v(": yaw")])]),e._v(" "),a("h2",{attrs:{id:"developers-sdks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#developers-sdks"}},[e._v("#")]),e._v(" Developers/SDKs")]),e._v(" "),a("p",[e._v("Autotuning is started using "),a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_DO_AUTOTUNE_ENABLE",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAV_CMD_DO_AUTOTUNE_ENABLE"),a("OutboundLink")],1),e._v(" MAVLink command.")]),e._v(" "),a("p",[e._v("At time of writing the message is resent at regular intervals to poll PX4 for progress: the "),a("code",[e._v("COMMAND_ACK")]),e._v(" includes result that the operation is in progress, and also the progress as a percentage. The operation completes when the progress is 100% or the vehicle lands and disarms.")]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),a("p",[e._v("This is not a MAVLink-compliant implementation of a "),a("a",{attrs:{href:"https://mavlink.io/en/services/command.html#long_running_commands",target:"_blank",rel:"noopener noreferrer"}},[e._v("command protocol long running command"),a("OutboundLink")],1),e._v(". PX4 should stream progress as the protocol does not allow polling.")])]),e._v(" "),a("p",[e._v("The feature is not yet supported by MAVSDK.")]),e._v(" "),a("h2",{attrs:{id:"background-detail"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#background-detail"}},[e._v("#")]),e._v(" Background/Detail")]),e._v(" "),a("p",[e._v("PX4 uses "),a("RouterLink",{attrs:{to:"/zh/flight_stack/controller_diagrams.html"}},[e._v("PID controllers")]),e._v(" (rate, attitude, velocity, and position) to calculate the outputs required to move a vehicle from its current estimated state to match a desired setpoint. The controllers must be well tuned in order to get the best performance out of a vehicle. In particular, a poorly tuned rate controller results in less stable flight in all modes, and takes longer to recover from disturbances.")],1),e._v(" "),a("p",[e._v("Generally if you use a "),a("RouterLink",{attrs:{to:"/zh/config/airframe.html"}},[e._v("frame configuration")]),e._v(" that is similar to your vehicle then the vehicle will be able to fly. However unless the configuration precisely matches your hardware you should tune the rate and attitude controllers. Tuning the velocity and position controllers is less important because they are less affected by vehicle dynamics, and the default tuning configuration for a similar airframe is often sufficient.")],1),e._v(" "),a("p",[e._v("Autotuning provides an automatic mechanism to tune the rate and attitude controllers. It can be used to tune fixed wing and multicopter vehicles, and VTOL vehicles when flying as a multicopter or as a fixed wing (transition between modes must be manually tuned). In theory it should work for other vehicle types that have a rate controller, but currently only the above types are supported.")]),e._v(" "),a("p",[e._v("Automatic tuning works well for the multicopter and fixed wing vehicle configurations supported by PX4, provided the frame is not too flexible (see "),a("a",{attrs:{href:"#does-autotuning-work-for-all-supported-airframes"}},[e._v("below for more information")]),e._v(").")]),e._v(" "),a("p",[e._v("The vehicle must be flying in an altitude-stabilized mode ("),a("RouterLink",{attrs:{to:"/zh/flight_modes/altitude_mc.html"}},[e._v("Altitude mode")]),e._v(", "),a("RouterLink",{attrs:{to:"/zh/flight_modes/hold.html"}},[e._v("Hold mode")]),e._v(", or "),a("RouterLink",{attrs:{to:"/zh/flight_modes/position_mc.html"}},[e._v("Position mode")]),e._v("). The flight stack will apply a small disturbance to the vehicle in each axis and then attempt to calculate the new tuning parameters. For fixed wing vehicles the new tuning is applied in-air by default, after which the vehicle tests the new settings and reverts the tuning if the controllers are not stable. For multicopter, the vehicle lands and applies the new tuning parameters after disarming; the pilot is expected to then take off carefully and test the tuning.")],1),e._v(" "),a("p",[e._v("The tuning process takes about 40 seconds ("),a("a",{attrs:{href:"#how-long-does-autotuning-take"}},[e._v("between 19 and 68 seconds")]),e._v("). The default behaviour can be configured using "),a("a",{attrs:{href:"#optional-configuration"}},[e._v("parameters")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"faq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[e._v("#")]),e._v(" FAQ")]),e._v(" "),a("h4",{attrs:{id:"what-frames-types-are-supported"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-frames-types-are-supported"}},[e._v("#")]),e._v(" What frames types are supported?")]),e._v(" "),a("p",[e._v("Autotuning is enabled for multicopter, fixed wing, and hybrid VTOL fixed wing vehicles.")]),e._v(" "),a("p",[e._v("While it is not yet enabled for other frame types, in theory it an be used with any frame that uses a rate controller.")]),e._v(" "),a("h4",{attrs:{id:"does-autotuning-work-for-all-supported-airframes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#does-autotuning-work-for-all-supported-airframes"}},[e._v("#")]),e._v(" Does autotuning work for all supported airframes?")]),e._v(" "),a("p",[e._v("The mathematical model used by autotuning to estimate the dynamics of the drone assumes this it is a linear system with no coupling between the axes (SISO), and with a limited complexity (2 poles and 2 zeros). If the real drone is too far from those conditions, the model will not be able to represent the real dynamics of the drone.")]),e._v(" "),a("p",[e._v("In practise, autotuning generally works well for fixed wing and multicopter, provided the frame is not too flexible.")]),e._v(" "),a("h4",{attrs:{id:"how-long-does-autotuning-take"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-long-does-autotuning-take"}},[e._v("#")]),e._v(" How long does autotuning take?")]),e._v(" "),a("p",[e._v("Tuning takes 5s-20s per axis (aborted if tuning could not be established in 20s) + 2s pause between each axis + 4s of testing if the new gains are applied in air.")]),e._v(" "),a("p",[e._v("A multicopter must tune all three axes, and by default does not test the new gains in-air. Tuning will therefore take between 19s ("),a("code",[e._v("5 + 2 + 5 + 2 + 5")]),e._v(") and 64s ("),a("code",[e._v("20x3 + 2x2")]),e._v(").")]),e._v(" "),a("p",[e._v("By default a fixed wing vehicle tunes all three axes and then tests the new gains in-air. The range is therefore between 25s ("),a("code",[e._v("5 + 2 + 5 + 2 + 5 + 2 + 4")]),e._v(") and 70s ("),a("code",[e._v("20x3 + 3x2 + 4")]),e._v(").")]),e._v(" "),a("p",[e._v("Note however that the above settings are defaults. A multicopter can choose to run the tests in air, and a fixed wing can choose not to. Further, a fixed wing can choose to tune fewer axes.")]),e._v(" "),a("p",[e._v("Anecdotally, it usually takes around 40s for either vehicle.")]),e._v(" "),a("h2",{attrs:{id:"see-also"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#see-also"}},[e._v("#")]),e._v(" See also")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/zh/config_mc/pid_tuning_guide_multicopter_basic.html"}},[e._v("Multicopter PID Tuning Guide")]),e._v(" (Manual/Simple)")],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/config_mc/pid_tuning_guide_multicopter.html"}},[e._v("Multicopter PID Tuning Guide")]),e._v(" (Advanced/Detailed)")],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/config_fw/pid_tuning_guide_fixedwing.html"}},[e._v("Fixed-Wing PID Tuning Guide")])],1)])])}),[],!1,null,null,null);t.default=n.exports},678:function(e,t,i){e.exports=i.p+"assets/img/autotune.be556482.png"}}]);