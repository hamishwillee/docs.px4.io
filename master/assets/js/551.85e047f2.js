(window.webpackJsonp=window.webpackJsonp||[]).push([[551],{1612:function(e,t,n){"use strict";n.r(t);var i=n(19),a=Object(i.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"auto-tuning"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#auto-tuning"}},[e._v("#")]),e._v(" Auto-tuning")]),e._v(" "),i("p",[e._v('Auto-tuning automates the process of tuning the PX4 rate and attitude controllers, which are the most important controllers for stable and responsive flight (other tuning is more "optional").\nIt is currently enabled for multicopter, fixed wing, and hybrid VTOL fixed wing vehicles.')]),e._v(" "),i("p",[e._v("Tuning only needs to be done once, and is recommended unless unless you're using vehicle that has already been tuned by the manufacturer (and not modified since).")]),e._v(" "),i("div",{staticClass:"custom-block warning"},[i("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),i("p",[e._v("Auto-tuning is performed while flying.\nThe airframe must fly well enough handle moderate disturbances, and should be closely attended:")]),e._v(" "),i("ul",[i("li",[e._v("Test that your vehicle is "),i("a",{attrs:{href:"#pre-tuning-test"}},[e._v("stable enough for autotuning")]),e._v(".")]),e._v(" "),i("li",[e._v("Be ready to abort the autotuning process by moving the remote control sticks.")]),e._v(" "),i("li",[e._v("Verify that the vehicle flies well after tuning.")])])]),e._v(" "),i("p"),i("div",{staticClass:"embed-responsive embed-responsive-16by9"},[i("iframe",{staticClass:"embed-responsive-item youtube-player",attrs:{type:"text/html",width:"640",height:"390",src:"https://www.youtube.com/embed/5xswOhhqrIQ",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]),i("p"),e._v(" "),i("h2",{attrs:{id:"pre-tuning-test"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#pre-tuning-test"}},[e._v("#")]),e._v(" Pre-tuning Test")]),e._v(" "),i("p",[e._v("The vehicle must be able to fly and adequately stabilize itself before running auto-tune.\nThis test ensures that the vehicle can fly safely in position controlled modes.")]),e._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),i("p",[e._v("During "),i("RouterLink",{attrs:{to:"/en/config/airframe.html"}},[e._v("Airframe Setup")]),e._v(" you should have selected the frame that most closely matches your vehicle.\nThis will usually be tuned well enough to fly, and it "),i("em",[e._v("may")]),e._v(" also be sufficiently well tuned to run autotuning.")],1)]),e._v(" "),i("p",[e._v("To make sure the vehicle is stable enough for auto-tuning:")]),e._v(" "),i("ol",[i("li",[e._v("Perform a normal preflight safety checklist to ensure the flight zone is clear and has enough space.")]),e._v(" "),i("li",[e._v("Takeoff and prepare for the test\n"),i("ul",[i("li",[i("strong",[e._v("Multicopters:")]),e._v(" Take off and hover at 1m above ground in "),i("RouterLink",{attrs:{to:"/en/flight_modes/altitude_mc.html"}},[e._v("Altitude mode")]),e._v(" or Stabilized mode.")],1),e._v(" "),i("li",[i("strong",[e._v("Fixed-wing:")]),e._v(" Take off and fly at cruise speed in "),i("RouterLink",{attrs:{to:"/en/flight_modes/position_mc.html"}},[e._v("Position mode")]),e._v(" or "),i("RouterLink",{attrs:{to:"/en/flight_modes/altitude_mc.html"}},[e._v("Altitude mode")]),e._v(".")],1)])]),e._v(" "),i("li",[e._v("Use the RC transmitter roll stick to perform the following maneuver, tilting the vehicle just a few degrees: "),i("em",[e._v("roll left > roll right > center")]),e._v(" (The whole maneuver should take about 3 seconds).\nThe vehicle should stabilise itself within 2 oscillations.")]),e._v(" "),i("li",[e._v("Repeat the maneuver, tilting with larger amplitudes at each attempt.\nIf the vehicle can stabilise itself within 2 oscillations at ~20 degrees move to the next step.")]),e._v(" "),i("li",[e._v("Repeat the same maneuvers but on the pitch axis.\nA above, start with small angles and confirm that the vehicle can itself within 2 oscillations before increasing the tilt.")])]),e._v(" "),i("p",[e._v("If the drone can stabilize itself within 2 oscillations it is ready for the auto-tuning procedure.")]),e._v(" "),i("p",[e._v("If not, go to the "),i("a",{attrs:{href:"#troubleshooting"}},[e._v("troubleshooting")]),e._v(" section, which explains the minimal manual tuning to prepare the vehicle for auto-tuning.")]),e._v(" "),i("h3",{attrs:{id:"auto-tuning-procedure"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#auto-tuning-procedure"}},[e._v("#")]),e._v(" Auto-tuning procedure")]),e._v(" "),i("p",[e._v("The auto-tuning sequence must be performed in a "),i("strong",[e._v("safe flight zone, with enough space")]),e._v(".\nIt takes about 40 seconds ("),i("a",{attrs:{href:"#how-long-does-autotuning-take"}},[e._v("between 19 and 68 seconds")]),e._v(").\nFor best results, we recommend running the test in calm weather conditions.")]),e._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),i("p",[e._v("The sequence can be aborted at any time by the operator by moving the roll/pitch stick on the RC controller.")])]),e._v(" "),i("p",[e._v("The test steps are:")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("Perform the "),i("a",{attrs:{href:"#pre-tuning-test"}},[e._v("pre-tuning test")]),e._v(".")])]),e._v(" "),i("li",[i("p",[e._v("Takeoff using RC control and prepare for test:")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("Multicopters:")]),e._v(" Takeoff using the remote controller in "),i("RouterLink",{attrs:{to:"/en/flight_modes/altitude_mc.html"}},[e._v("Altitude mode")]),e._v(".\nHover the vehicle at a safe distance and at a few meters above ground (between 4 and 20m).")],1),e._v(" "),i("li",[i("strong",[e._v("Fixed-wing:")]),e._v(" Once flying at cruise speed, activate "),i("RouterLink",{attrs:{to:"/en/flight_modes/hold.html"}},[e._v("Hold mode")]),e._v(".\nThis will guide the plane to fly in circle at constant altitude and speed.")],1)])]),e._v(" "),i("li",[i("p",[e._v("In QGroundControl, open the menu: "),i("strong",[e._v("Vehicle setup > PID Tuning")])]),e._v(" "),i("p",[i("img",{attrs:{src:n(645),alt:"Tuning Setup > Autotune Enabled"}})])]),e._v(" "),i("li",[i("p",[e._v("Select either the "),i("em",[e._v("Rate Controller")]),e._v(" or "),i("em",[e._v("Attitude Controller")]),e._v(" tabs.\nEnsure that the "),i("strong",[e._v("Autotune enabled")]),e._v(" button is enabled (this will display the "),i("strong",[e._v("Autotune")]),e._v(" button and remove the manual tuning selectors).")])]),e._v(" "),i("li",[i("p",[e._v("Stop moving the joysticks and click on the "),i("strong",[e._v("Autotune")]),e._v(" button.\nRead the warning popup and click on "),i("strong",[e._v("OK")]),e._v(" to start tuning.")])]),e._v(" "),i("li",[i("p",[e._v("The drone will first start to perform quick roll motions followed by pitch and yaw motions.\nThe progress is shown in the progress bar, next to the "),i("em",[e._v("Autotune")]),e._v(" button.")])]),e._v(" "),i("li",[i("p",[e._v("Apply the tuning:")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("Fixed Wing:")]),e._v(" The tuning will be immediately/automatically be applied and tested in flight (by default).\nPX4 will then run a 4 second test and revert the new tuning if a problem is detected.")]),e._v(" "),i("li",[i("strong",[e._v("Multicopters:")]),e._v(" Manually land and disarm to apply the new tuning parameters.\nTakeoff carefully and manually test that the vehicle is stable.")])])]),e._v(" "),i("li",[i("p",[e._v("If any strong oscillations occur, land immediately and follow the instructions in the "),i("a",{attrs:{href:"#troubleshooting"}},[e._v("Troubleshooting")]),e._v(" section below.")])])]),e._v(" "),i("br"),e._v(" "),i("p",[e._v("Additional notes:")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("VTOL:")]),e._v(" Hybrid VTOL fixed wing vehicles must be tuned twice, following multicopter instructions in MC mode and fixed-wing instructions in FW mode.")]),e._v(" "),i("li",[i("strong",[e._v("Multicopter:")]),e._v(" The instructions above tune the vehicle in "),i("RouterLink",{attrs:{to:"/en/flight_modes/altitude_mc.html"}},[e._v("Altitude mode")]),e._v(".\nYou can instead takeoff in "),i("RouterLink",{attrs:{to:"/en/flight_modes/takeoff.html"}},[e._v("Takeoff mode")]),e._v(" and tune in "),i("RouterLink",{attrs:{to:"/en/flight_modes/position_mc.html"}},[e._v("Position mode")]),e._v(" if the vehicle is is "),i("em",[e._v("known")]),e._v(" to be stable in these modes.")],1),e._v(" "),i("li",[i("strong",[e._v("Fixed wing:")]),e._v(" Autotuning can also be run in "),i("RouterLink",{attrs:{to:"/en/flight_modes/altitude_mc.html"}},[e._v("Altitude mode")]),e._v(" or "),i("RouterLink",{attrs:{to:"/en/flight_modes/position_mc.html"}},[e._v("Position mode")]),e._v(".\nHowever running the test while flying straight requires a larger safe area for tuning, and does not give a significantly better tuning result.")],1),e._v(" "),i("li",[e._v("Whether tuning is applied in-air or after landing can be "),i("a",{attrs:{href:"#parameters"}},[e._v("configured using parameters")]),e._v(".")])]),e._v(" "),i("h2",{attrs:{id:"troubleshooting"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[e._v("#")]),e._v(" Troubleshooting")]),e._v(" "),i("h4",{attrs:{id:"the-drone-oscillates-when-performing-the-testing-maneuvers-prior-to-the-auto-tuning"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#the-drone-oscillates-when-performing-the-testing-maneuvers-prior-to-the-auto-tuning"}},[e._v("#")]),e._v(" The drone oscillates when performing the testing maneuvers prior to the auto-tuning")]),e._v(" "),i("ul",[i("li",[e._v("slow oscillations (1 oscillation per second or slower): this often occurs on large platforms and means that the attitude loop is too fast compared to the rate loop.\n"),i("ul",[i("li",[i("strong",[e._v("Multicopter:")]),e._v(" decrease "),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MC_ROLL_P"}},[e._v("MC_ROLL_P")]),e._v(" and "),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MC_PITCH_P"}},[e._v("MC_PITCH_P")]),e._v(" by steps of 1.0")],1),e._v(" "),i("li",[i("strong",[e._v("Fixed-wing:")]),e._v(" increase "),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#FW_R_TC"}},[e._v("FW_R_TC")]),e._v(", "),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#FW_P_TC"}},[e._v("FW_P_TC")]),e._v(", "),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#FW_Y_TC"}},[e._v("FW_Y_TC")]),e._v(" by steps of 0.1")],1)])]),e._v(" "),i("li",[e._v("fast oscillations (more than 1 oscillation per second): this is because the gain of the rate loop is too high.\n"),i("ul",[i("li",[i("strong",[e._v("Multicopter:")]),e._v(" decrease "),i("code",[e._v("MC_[ROLL|PITCH|YAW]RATE_K")]),e._v(" by steps of 0.02")]),e._v(" "),i("li",[i("strong",[e._v("Fixed-wing:")]),e._v(" decrease "),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#FW_RR_R"}},[e._v("FW_RR_R")]),e._v(", "),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#FW_RR_P"}},[e._v("FW_RR_P")]),e._v(", "),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#FW_RR_Y"}},[e._v("FW_RR_Y")]),e._v(" by steps of 0.01")],1)])])]),e._v(" "),i("h4",{attrs:{id:"the-auto-tuning-sequence-fails"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#the-auto-tuning-sequence-fails"}},[e._v("#")]),e._v(" The auto-tuning sequence fails")]),e._v(" "),i("p",[e._v("If the drone was not moving enough during auto-tuning, the system identification algorithm might have issues to find the correct coefficients.\nIncrease the "),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#FW_AT_SYSID_AMP"}},[e._v("FW_AT_SYSID_AMP")]),e._v(", "),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MC_AT_SYSID_AMP"}},[e._v("MC_AT_SYSID_AMP")]),e._v(" by steps of 1 and trigger the auto-tune again.")],1),e._v(" "),i("h4",{attrs:{id:"the-drone-oscillates-after-auto-tuning"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#the-drone-oscillates-after-auto-tuning"}},[e._v("#")]),e._v(" The drone oscillates after auto-tuning")]),e._v(" "),i("p",[e._v("Due to effects not included in the mathematical model such as delays, saturation, slew-rate, airframe flexibility, the loop gain can be too high.\nTo fix this, follow the same steps described "),i("a",{attrs:{href:"#the-drone-oscillates-when-performing-the-testing-maneuvers-prior-to-the-auto-tuning"}},[e._v("when the drone oscillates in the pre-tuning test")]),e._v(".")]),e._v(" "),i("h4",{attrs:{id:"i-still-can-t-get-it-to-work"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#i-still-can-t-get-it-to-work"}},[e._v("#")]),e._v(" I still can't get it to work")]),e._v(" "),i("p",[e._v("Attempt manual tuning using the appropriate guides:")]),e._v(" "),i("ul",[i("li",[i("RouterLink",{attrs:{to:"/en/config_mc/pid_tuning_guide_multicopter_basic.html"}},[e._v("Multicopter PID Tuning Guide")]),e._v(" (Manual/Simple)")],1),e._v(" "),i("li",[i("RouterLink",{attrs:{to:"/en/config_mc/pid_tuning_guide_multicopter.html"}},[e._v("Multicopter PID Tuning Guide")]),e._v(" (Advanced/Detailed)")],1),e._v(" "),i("li",[i("RouterLink",{attrs:{to:"/en/config_fw/pid_tuning_guide_fixedwing.html"}},[e._v("Fixed-Wing PID Tuning Guide")])],1)]),e._v(" "),i("h2",{attrs:{id:"parameters"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),i("p",[e._v("By default MC vehicles land before parameters are applied, while FW vehicles apply the parameters in-air and then test that the controllers work properly.\nThis behaviour can be configured using the "),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#MC_AT_APPLY"}},[e._v("MC_AT_APPLY")]),e._v(" and "),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#FW_AT_APPLY"}},[e._v("FW_AT_APPLY")]),e._v(" parameters respectively:")],1),e._v(" "),i("ul",[i("li",[i("code",[e._v("0")]),e._v(": the gains are not applied.\nThis is used for testing purposes if the user wants to inspect results of the auto-tuning algorithm without using them directly.")]),e._v(" "),i("li",[i("code",[e._v("1")]),e._v(": apply the gains after disarm (default for multirotors).\nThe operator can then test the new tuning while taking-off carefully.")]),e._v(" "),i("li",[i("code",[e._v("2")]),e._v(": apply immediately (default for fixed-fings).\nThe new tuning is applied, disturbances are sent to the controller and the stability is monitored during the next 4 seconds.\nIf the control loop is unstable, the control gains are immediately reverted back to their previous value.\nIf the test passes, the pilot can then use the new tuning.")])]),e._v(" "),i("p",[e._v("Fixed wing vehicles (only) can select which axes are tuned using the "),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#FW_AT_AXES"}},[e._v("FW_AT_AXES")]),e._v(" bitmask parameter:")],1),e._v(" "),i("ul",[i("li",[e._v("bit "),i("code",[e._v("0")]),e._v(": roll (default)")]),e._v(" "),i("li",[e._v("bit "),i("code",[e._v("1")]),e._v(": pitch (default)")]),e._v(" "),i("li",[e._v("bit "),i("code",[e._v("2")]),e._v(": yaw")])]),e._v(" "),i("h2",{attrs:{id:"developers-sdks"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#developers-sdks"}},[e._v("#")]),e._v(" Developers/SDKs")]),e._v(" "),i("p",[e._v("Autotuning is started using "),i("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_DO_AUTOTUNE_ENABLE",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAV_CMD_DO_AUTOTUNE_ENABLE"),i("OutboundLink")],1),e._v(" MAVLink command.")]),e._v(" "),i("p",[e._v("At time of writing the message is resent at regular intervals to poll PX4 for progress: the "),i("code",[e._v("COMMAND_ACK")]),e._v(" includes result that the operation is in progress, and also the progress as a percentage.\nThe operation completes when the progress is 100% or the vehicle lands and disarms.")]),e._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),i("p",[e._v("This is not a MAVLink-compliant implementation of a "),i("a",{attrs:{href:"https://mavlink.io/en/services/command.html#long_running_commands",target:"_blank",rel:"noopener noreferrer"}},[e._v("command protocol long running command"),i("OutboundLink")],1),e._v(".\nPX4 should stream progress as the protocol does not allow polling.")])]),e._v(" "),i("p",[e._v("The feature is not yet supported by MAVSDK.")]),e._v(" "),i("h2",{attrs:{id:"background-detail"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#background-detail"}},[e._v("#")]),e._v(" Background/Detail")]),e._v(" "),i("p",[e._v("PX4 uses "),i("RouterLink",{attrs:{to:"/en/flight_stack/controller_diagrams.html"}},[e._v("PID controllers")]),e._v(" (rate, attitude, velocity, and position) to calculate the outputs required to move a vehicle from its current estimated state to match a desired setpoint.\nThe controllers must be well tuned in order to get the best performance out of a vehicle.\nIn particular, a poorly tuned rate controller results in less stable flight in all modes, and takes longer to recover from disturbances.")],1),e._v(" "),i("p",[e._v("Generally if you use an "),i("RouterLink",{attrs:{to:"/en/config/airframe.html"}},[e._v("airframe configuration")]),e._v(" that is similar to your vehicle then the vehicle will be able to fly.\nHowever unless the configuration precisely matches your hardware you should tune the rate and attitude controllers.\nTuning the velocity and position controllers is less important because they are less affected by vehicle dynamics, and the default tuning configuration for a similar airframe is often sufficient.")],1),e._v(" "),i("p",[e._v("Autotuning provides an automatic mechanism to tune the rate and attitude controllers.\nIt can be used to tune fixed wing and multicopter vehicles, and VTOL vehicles when flying as a multicopter or as a fixed wing (transition between modes must be manually tuned).\nIn theory it should work for other vehicle types that have a rate controller, but currently only the above types are supported.")]),e._v(" "),i("p",[e._v("Automatic tuning works well for the multicopter and fixed wing vehicle configurations supported by PX4, provided the frame is not too flexible\n(see "),i("a",{attrs:{href:"#does-autotuning-work-for-all-supported-airframes"}},[e._v("below for more information")]),e._v(").")]),e._v(" "),i("p",[e._v("The vehicle must be flying in an altitude-stabilized mode ("),i("RouterLink",{attrs:{to:"/en/flight_modes/altitude_mc.html"}},[e._v("Altitude mode")]),e._v(", "),i("RouterLink",{attrs:{to:"/en/flight_modes/hold.html"}},[e._v("Hold mode")]),e._v(", or "),i("RouterLink",{attrs:{to:"/en/flight_modes/position_mc.html"}},[e._v("Position mode")]),e._v(").\nThe flight stack will apply a small disturbance to the vehicle in each axis and then attempt to calculate the new tuning parameters.\nFor fixed wing vehicles the new tuning is applied in-air by default, after which the vehicle tests the new settings and reverts the tuning if the controllers are not stable.\nFor multicopter, the vehicle lands and applies the new tuning parameters after disarming; the pilot is expected to then take off carefully and test the tuning.")],1),e._v(" "),i("p",[e._v("The tuning process takes about 40 seconds ("),i("a",{attrs:{href:"#how-long-does-autotuning-take"}},[e._v("between 19 and 68 seconds")]),e._v(").\nThe default behaviour can be configured using "),i("a",{attrs:{href:"#parameters"}},[e._v("parameters")]),e._v(".")]),e._v(" "),i("h3",{attrs:{id:"faq"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[e._v("#")]),e._v(" FAQ")]),e._v(" "),i("h4",{attrs:{id:"what-frames-types-are-supported"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#what-frames-types-are-supported"}},[e._v("#")]),e._v(" What frames types are supported?")]),e._v(" "),i("p",[e._v("Autotuning is enabled for multicopter, fixed wing, and hybrid VTOL fixed wing vehicles.")]),e._v(" "),i("p",[e._v("While it is not yet enabled for other frame types, in theory it an be used with any frame that uses a rate controller.")]),e._v(" "),i("h4",{attrs:{id:"does-autotuning-work-for-all-supported-airframes"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#does-autotuning-work-for-all-supported-airframes"}},[e._v("#")]),e._v(" Does autotuning work for all supported airframes?")]),e._v(" "),i("p",[e._v("The mathematical model used by autotuning to estimate the dynamics of the drone assumes this it is a linear system with no coupling between the axes (SISO), and with a limited complexity (2 poles and 2 zeros).\nIf the real drone is too far from those conditions, the model will not be able to represent the real dynamics of the drone.")]),e._v(" "),i("p",[e._v("In practise, autotuning generally works well for fixed wing and multicopter, provided the frame is not too flexible.")]),e._v(" "),i("h4",{attrs:{id:"how-long-does-autotuning-take"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#how-long-does-autotuning-take"}},[e._v("#")]),e._v(" How long does autotuning take?")]),e._v(" "),i("p",[e._v("Tuning takes 5s-20s per axis (aborted if tuning could not be established in 20s) + 2s pause between each axis + 4s of testing if the new gains are applied in air.")]),e._v(" "),i("p",[e._v("A multicopter must tune all three axes, and by default does not test the new gains in-air.\nTuning will therefore take between 19s ("),i("code",[e._v("5 + 2 + 5 + 2 + 5")]),e._v(") and 64s ("),i("code",[e._v("20x3 + 2x2")]),e._v(").")]),e._v(" "),i("p",[e._v("By default a fixed wing vehicle tunes all three axes and then tests the new gains in-air.\nThe range is therefore between 25s ("),i("code",[e._v("5 + 2 + 5 + 2 + 5 + 2 + 4")]),e._v(") and 70s ("),i("code",[e._v("20x3 + 3x2 + 4")]),e._v(").")]),e._v(" "),i("p",[e._v("Note however that the above settings are defaults.\nA multicopter can choose to run the tests in air, and a fixed wing can choose not to.\nFurther, a fixed wing can choose to tune fewer axes.")]),e._v(" "),i("p",[e._v("Anecdotally, it usually takes around 40s for either vehicle.")]),e._v(" "),i("h2",{attrs:{id:"see-also"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#see-also"}},[e._v("#")]),e._v(" See also")]),e._v(" "),i("ul",[i("li",[i("RouterLink",{attrs:{to:"/en/config_mc/pid_tuning_guide_multicopter_basic.html"}},[e._v("Multicopter PID Tuning Guide")]),e._v(" (Manual/Simple)")],1),e._v(" "),i("li",[i("RouterLink",{attrs:{to:"/en/config_mc/pid_tuning_guide_multicopter.html"}},[e._v("Multicopter PID Tuning Guide")]),e._v(" (Advanced/Detailed)")],1),e._v(" "),i("li",[i("RouterLink",{attrs:{to:"/en/config_fw/pid_tuning_guide_fixedwing.html"}},[e._v("Fixed-Wing PID Tuning Guide")])],1)])])}),[],!1,null,null,null);t.default=a.exports},645:function(e,t,n){e.exports=n.p+"assets/img/autotune.be556482.png"}}]);