(window.webpackJsonp=window.webpackJsonp||[]).push([[1395],{2524:function(t,e,o){"use strict";o.r(e);var a=o(19),i=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"esc-캘리브레이션"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#esc-캘리브레이션"}},[t._v("#")]),t._v(" ESC 캘리브레이션")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("These instructions are only relevant to "),a("RouterLink",{attrs:{to:"/ko/peripherals/pwm_escs_and_servo.html"}},[t._v("PWM ESCs")]),t._v(" and "),a("RouterLink",{attrs:{to:"/ko/peripherals/oneshot.html"}},[t._v("OneShot ESCs")]),t._v(". "),a("RouterLink",{attrs:{to:"/ko/peripherals/dshot.html"}},[t._v("DShot")]),t._v(" and "),a("RouterLink",{attrs:{to:"/ko/can/"}},[t._v("CAN")]),t._v(" ESCs ("),a("RouterLink",{attrs:{to:"/ko/dronecan/escs.html"}},[t._v("DroneCAN")]),t._v("/Cyphal) do not require this kind of calibration.")],1)]),t._v(" "),a("p",[t._v("Electronic Speed Controllers (ESCs) regulate motor speed (and direction) based on their input command from the flight controller (FC). The range of input commands to which an ESC will respond is often configurable, and the default range can differ even between ESCs of the same model.")]),t._v(" "),a("p",[t._v("This calibration updates all the ESCs with a fixed maximum (2000us) and minimum (1000us) PWM input from the flight controller. Subsequently all the ESCs/motors on the vehicle will respond to flight controller input in the same way, across the whole input range.")]),t._v(" "),a("p",[t._v("Calibration using this tool is recommended for all PWM/OneShot ESCs that support it.")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("Calibration is particularly important for low-cost ESC, as they commonly vary a lot in their response to input.")]),t._v(" "),a("p",[t._v("However it is also recommended for high-quality controllers. Even though these are factory calibrated and should all respond the same way, in practice the input range can differ. For example if a controller has been manually calibrated after leaving the factory it may no longer behave in the same way.")])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("If you want to use an ESC that does not support this calibration, then it must be factory calibrated and respond consistently out of the box. This should be verified using "),a("RouterLink",{attrs:{to:"/ko/config/actuators.html#actuator-testing"}},[t._v("Actuator Testing")]),t._v(". Jump to the "),a("a",{attrs:{href:"#actuatorconfig_step"}},[t._v("actuator configuration step (7)")]),t._v(" (which is still important).")],1)]),t._v(" "),a("p",[t._v("OneShot ESCs should be "),a("RouterLink",{attrs:{to:"/ko/peripherals/oneshot.html#px4-configuration"}},[t._v("configured to use OneShot")]),t._v(" before calibration. You should calibrate the ESCs after switching, even if you have previously calibrated.")],1),t._v(" "),a("h2",{attrs:{id:"전제-조건"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#전제-조건"}},[t._v("#")]),t._v(" 전제 조건")]),t._v(" "),a("p",[t._v("The calibration sequence requires that you are able keep the flight controller powered while manually power-cyling the ESCs.")]),t._v(" "),a("p",[t._v("If using a Pixhawk flight controller, the recommended way to do this is to separately power the flight controller via USB, and connect/disconnect the battery to power the ESCs when needed. Flight control systems that can't power the autopilot via USB will need a "),a("a",{attrs:{href:"#problem_power_module"}},[t._v("different approach")]),t._v(".")]),t._v(" "),a("p",[t._v("If the battery is connected via a power module the calibration procedure can detect the battery connection and use it to drive the calibration sequence. If battery power can't be detected the calibration sequence is performed based on timeouts.")]),t._v(" "),a("h2",{attrs:{id:"단계"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#단계"}},[t._v("#")]),t._v(" 단계")]),t._v(" "),a("p",[t._v("ESC를 보정하려면 :")]),t._v(" "),a("ol",[a("li",[t._v("프로펠러를 분리하십시오.")])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("Never attempt ESC calibration with propellers on!")]),t._v(" "),a("p",[t._v("The motors "),a("em",[t._v("should")]),t._v(" not spin during ESC calibration. However if calibration starts when the ESC is already powered, or if the ESC doesn't properly support/detect the calibration sequence, then it will respond to the PWM input by running the motor at maximum speed.")])]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Map the ESCs you're calibrating as motors in the vehicle's "),a("RouterLink",{attrs:{to:"/ko/config/actuators.html"}},[t._v("Actuator Configuration")]),t._v(". Only mapped actuators get an output and only ESCs mapped as motors will be calibrated.")],1)]),t._v(" "),a("li",[a("p",[t._v("Unpower the ESCs by unplugging the battery. The flight controller must stay powered, for example, by keeping the USB connected to the ground station.")])]),t._v(" "),a("li",[a("p",[t._v("Open the "),a("em",[t._v("QGroundControl")]),t._v(" "),a("strong",[t._v("Settings > Power")]),t._v(", then press the "),a("strong",[t._v("Calibrate")]),t._v(" button.")]),t._v(" "),a("p",[a("img",{attrs:{src:o(1580),alt:"ESC 캘리브레이션 단계 1"}})])]),t._v(" "),a("li",[a("p",[t._v("After starting the calibration sequence without error, directly power the ESCs (you should be prompted):")]),t._v(" "),a("p",[a("img",{attrs:{src:o(1581),alt:"ESC 캘리브레이션 단계 2"}})]),t._v(" "),a("p",[t._v("캘리브레이션이 자동으로 시작됩니다.")]),t._v(" "),a("p",[a("img",{attrs:{src:o(1582),alt:"ESC 캘리브레이션 단계 3"}})])]),t._v(" "),a("li",[a("p",[t._v("During the calibration you should hear model-specific beeping from the ESC, which indicates the individual steps of the calibration.")]),t._v(" "),a("p",[t._v("You will be prompted when the calibration completes."),a("a",{attrs:{id:"actuatorconfig_step"}}),t._v(" "),a("img",{attrs:{src:o(1583),alt:"ESC 캘리브레이션 단계 4"}})])]),t._v(" "),a("li",[a("p",[t._v("Go back to the "),a("RouterLink",{attrs:{to:"/ko/config/actuators.html"}},[t._v("Actuator Configuration")]),t._v(" section.")],1),t._v(" "),a("p",[t._v("Following ESC calibration all motors with the same (re)calibrated ESCs should behave in the same way for the same inputs. The default PWM settings for motor outputs in the actuator configuration should now work out of the box.")]),t._v(" "),a("p",[t._v("You need to confirm that the motors do indeed work correctly. Since the default configuration values have been set conservatively, you may also wish to tune them for your particular ESCs.")])])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("The steps below are similar to those described in "),a("RouterLink",{attrs:{to:"/ko/config/actuators.html#motor-configuration"}},[t._v("Actuator Configuration > Motor Configuration")]),t._v(".")],1)]),t._v(" "),a("p",[t._v("Verify the following values:")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("The minimum value for a motor (default: "),a("code",[t._v("1100us")]),t._v(") should make the motor spin slowly but reliably, and also spin up reliably after it was stopped.")]),t._v(" "),a("p",[t._v("You can confirm that a motor spins at minimum (still without propellers) in "),a("RouterLink",{attrs:{to:"/ko/config/actuators.html#actuator-testing"}},[t._v("Actuator Testing")]),t._v(", by enabling the sliders, and then moving the test output slider for the motor to the first snap position from the bottom. The correct value should make the motor spin immediately and reliably as you move the slider from disarmed to minimum.")],1),t._v(" "),a("p",[t._v('To find the "optimal" minimum value, move the slider to the bottom (disarmed). Then increase the PWM output\'s '),a("code",[t._v("disarmed")]),t._v(" setting in small increments (e.g. 1025us, 1050us, etc), until the motor starts to spin reliably (it is better to be a little too high than a little too low). Enter this value into the "),a("code",[t._v("minimum")]),t._v(" setting for all the motor PWM outputs, and restore the "),a("code",[t._v("disarmed")]),t._v(" output to "),a("code",[t._v("1100us")]),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("The maximum value for a motor (default: "),a("code",[t._v("1900us")]),t._v(") should be chosen such that increasing the value doesn't make the motor spin any faster.")]),t._v(" "),a("p",[t._v("You can confirm that the motor spins quickly at the maximum setting in "),a("RouterLink",{attrs:{to:"/ko/config/actuators.html#actuator-testing"}},[t._v("Actuator Testing")]),t._v(", by moving the associated test output slider to the top position.")],1),t._v(" "),a("p",[t._v('To find the "optimal" maximum value, first move the slider to the bottom (disarmed). Then increase the PWM output\'s '),a("code",[t._v("disarmed")]),t._v(" setting to near the default maximum ("),a("code",[t._v("1900")]),t._v(") - the motors should spin up. Listen to the tone of the motor as you increase the PWM maximum value for the output in increments (e.g. 1925us, 1950us, etc). The optimal value is found at the point when the sound of the motors does not change as you increase the value of the output. Enter this value into the "),a("code",[t._v("maximum")]),t._v(" setting for all the motor PWM outputs, and restore the "),a("code",[t._v("disarmed")]),t._v(" output to "),a("code",[t._v("1100us")]),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("The disarmed value for a motor (default: "),a("code",[t._v("1000us")]),t._v(") should make the motor stop and stay stopped.")]),t._v(" "),a("p",[t._v("You can confirm this in "),a("RouterLink",{attrs:{to:"/ko/config/actuators.html#actuator-testing"}},[t._v("Actuator Testing")]),t._v(" by moving the test output slider to the snap position at the bottom of the slider and observing that the motor does not spin.")],1),t._v(" "),a("p",[t._v("If the ESC spins with the default value of 1000us then the ESC is not properly calibrated. If using an ESC that can't be calibrated, you should reduce the PWM output value for the output to below where the motor does not spin anymore (such as 950us or 900us).")])])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("VTOL and fixed-wing motors do not need any special PWM configuration.\nWith the default PWM configuration they will automatically stop during flight when commanded by the autopilot.")])]),t._v(" "),a("h2",{attrs:{id:"troubleshooting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[t._v("#")]),t._v(" Troubleshooting")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Calibration can state that it has succeeded even when it has failed.")]),t._v(" "),a("p",[t._v("This happens if you do not power the ESC at the right time, or the ESCs don't support calibration. This occurs because PX4 has no feedback from the ESC to know whether or not calibration was successful. You have to rely on interpreting the beeps during the calibration and subsequent motor tests to know for sure that the calibration worked.")]),t._v(" "),a("p",[a("a",{attrs:{id:"problem_power_module"}})])]),t._v(" "),a("li",[a("p",[t._v("Calibration cannot be started if you have a power module configured and connected (for safety reasons).")]),t._v(" "),a("p",[t._v("Unplug power to the ESCs first. If you're blocked because a power module is necessary to keep your flight controller alive, but you can (un)power the ESCs separately, you can temporarily disable the detection of the power module just for the ESC calibration using the parameters "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#BAT1_SOURCE"}},[t._v("BATn_SOURCE")]),t._v(". Once the power module that's powering the autopilot is not detected as battery anymore a timing based calibration is possible.")],1)]),t._v(" "),a("li",[a("p",[t._v("PX4 will abort calibration (for safety reasons) if the system detects an increase in current consumption immediately after initiating calibration. This requires a power module.")])])])])}),[],!1,null,null,null);e.default=i.exports}}]);