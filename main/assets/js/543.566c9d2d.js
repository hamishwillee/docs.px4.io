(window.webpackJsonp=window.webpackJsonp||[]).push([[543],{2408:function(t,e,a){"use strict";a.r(e);var o=a(19),i=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"gimbal-configuration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#gimbal-configuration"}},[t._v("#")]),t._v(" Gimbal Configuration")]),t._v(" "),o("p",[t._v("This page explains how to configure and control a gimbal that has an attached camera (or any other payload).")]),t._v(" "),o("h2",{attrs:{id:"overview"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),o("p",[t._v("PX4 contains a generic mount/gimbal control driver that supports different input and output methods:")]),t._v(" "),o("ul",[o("li",[t._v("The input method defines the protocol used to command a gimbal mount that is managed by PX4. This might be an RC controller, a MAVLink command sent by a GCS, or both — automatically switching between them.")]),t._v(" "),o("li",[t._v("The output method defines how PX4 communicates with the connected gimbal. The recommended protocol is MAVLink v2, but you can also connect directly to a flight controller PWM output port.")])]),t._v(" "),o("p",[t._v("PX4 takes the input signal and routes/translates it to be sent through to the output. Any input method can be selected to drive any output.")]),t._v(" "),o("p",[t._v("Both the input and output are configured using parameters. The input is set using the parameter "),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MNT_MODE_IN"}},[t._v("MNT_MODE_IN")]),t._v(". By default this is set to "),o("code",[t._v("Disabled (-1)")]),t._v(" and the driver does not run. After selecting the input mode, reboot the vehicle to start the mount driver.")],1),t._v(" "),o("p",[t._v("You should set "),o("code",[t._v("MNT_MODE_IN")]),t._v(" to one of: "),o("code",[t._v("RC (1)")]),t._v(", "),o("code",[t._v("MAVlink gimbal protocol v2 (4)")]),t._v(" or "),o("code",[t._v("Auto (0)")]),t._v(" (the other options are deprecated). If you select "),o("code",[t._v("Auto (0)")]),t._v(", the gimbal will automatically select either RC or or MAVLink input based on the latest input. Note that the auto-switch from MAVLink to RC requires a large stick motion!")]),t._v(" "),o("p",[t._v("The output is set using the "),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MNT_MODE_OUT"}},[t._v("MNT_MODE_OUT")]),t._v(" parameter. By default the output is set to a PXM port ("),o("code",[t._v("AUX (0)")]),t._v("). If the "),o("a",{attrs:{href:"https://mavlink.io/en/services/gimbal_v2.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVLink Gimbal Protocol v2"),o("OutboundLink")],1),t._v(" is supported by your gimbal, you should instead select "),o("code",[t._v("MAVLink gimbal protocol v2 (2)")]),t._v(".")],1),t._v(" "),o("p",[t._v("The full list of parameters for setting up the mount driver can be found in "),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#mount"}},[t._v("Parameter Reference > Mount")]),t._v(". The relevant settings for a number of common gimbal configurations are described below.")],1),t._v(" "),o("h2",{attrs:{id:"mavlink-짐벌-mnt-mode-out-mavlink"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#mavlink-짐벌-mnt-mode-out-mavlink"}},[t._v("#")]),t._v(" MAVLink 짐벌(MNT_MODE_OUT=MAVLINK)")]),t._v(" "),o("p",[t._v("Each physical gimbal device on the system must have its own high level gimbal manager, which is discoverable by a ground station using the MAVLink gimbal protocol. The ground station sends high level "),o("a",{attrs:{href:"https://mavlink.io/en/services/gimbal_v2.html#gimbal-manager-messages",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVLink Gimbal Manager"),o("OutboundLink")],1),t._v(' commands to the manager of the gimbal it wants to control, and the manager will in turn send appropriate lower level "gimbal device" commands to control the gimbal.')]),t._v(" "),o("p",[t._v("PX4 can be configured as the gimbal manager to control a single gimbal device (which can either be physically connected or be a MAVLink gimbal that implements the "),o("a",{attrs:{href:"https://mavlink.io/en/services/gimbal_v2.html#gimbal-device-messages",target:"_blank",rel:"noopener noreferrer"}},[t._v("gimbal device interface"),o("OutboundLink")],1),t._v(").")]),t._v(" "),o("p",[t._v("To enable a MAVLink gimbal, first set parameter "),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MNT_MODE_IN"}},[t._v("MNT_MODE_IN")]),t._v(" to "),o("code",[t._v("MAVlink gimbal protocol v2")]),t._v(" and "),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MNT_MODE_OUT"}},[t._v("MNT_MODE_OUT")]),t._v(" to "),o("code",[t._v("MAVLink gimbal protocol v2")]),t._v(".")],1),t._v(" "),o("p",[t._v("짐벌은 [MAVLink 주변 기기 (GCS/OSD/보조)](../peripherals/mavlink_peripherals.md#mavlink-peripherals-gcsosdcompanion) 에서 다루는 방법과 같이 "),o("em",[t._v("어떤 여분의 직렬 포트")]),t._v("에든 연결할 수 있습니다("),o("RouterLink",{attrs:{to:"/ko/peripherals/serial_configuration.html#serial-port-configuration"}},[t._v("직렬 포트 구성")]),t._v("도 참고). For example, if the "),o("code",[t._v("TELEM2")]),t._v(" port on the flight controller is unused you can connect it to the gimbal and set the following PX4 parameters:")],1),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_1_CONFIG"}},[t._v("MAV_1_CONFIG")]),t._v("에서 "),o("strong",[t._v("TELEM2")]),t._v("까지("),o("code",[t._v("MAV_1_CONFIG")]),t._v("가 이미 보조 컴퓨터에 사용되고 있는 경우(예: "),o("code",[t._v("MAV_2_CONFIG")]),t._v(" 사용))")],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#MAV_1_MODE"}},[t._v("MAV_1_MODE")]),t._v("에서 "),o("strong",[t._v("NORMAL")]),t._v("로")],1),t._v(" "),o("li",[t._v("제조업체 권장 전송 속도에 대한 "),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SER_TEL2_BAUD"}},[t._v("SER_TEL2_BAUD")]),t._v(".")],1)]),t._v(" "),o("h3",{attrs:{id:"multiple-gimbal-support"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#multiple-gimbal-support"}},[t._v("#")]),t._v(" Multiple Gimbal Support")]),t._v(" "),o("p",[t._v("PX4 can automatically create a gimbal manager for a connected PWM gimbal or the first MAVLink gimbal device with the same system id it detects on any interface. It does not automatically create gimbal manager for any other MAVLink gimbal devices that it detects.")]),t._v(" "),o("p",[t._v("You can support additional gimbals provided that they:")]),t._v(" "),o("ul",[o("li",[t._v("implement the gimbal "),o("em",[t._v("manager")]),t._v(" protocol")]),t._v(" "),o("li",[t._v("Are visible to the ground station and PX4 on the MAVLink network. This may require that traffic forwarding be configured between PX4, the GCS, and the gimbal.")]),t._v(" "),o("li",[t._v("Each gimbal must have a unique component id. For a PWM connected gimbal this will be the component ID of the autopilot")])]),t._v(" "),o("h2",{attrs:{id:"gimbal-on-fc-pwm-output-mnt-mode-out-aux"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#gimbal-on-fc-pwm-output-mnt-mode-out-aux"}},[t._v("#")]),t._v(" Gimbal on FC PWM Output (MNT_MODE_OUT=AUX)")]),t._v(" "),o("p",[t._v("The gimbal can also be controlled by connecting it to up to three flight controller PWM ports and setting the output mode to "),o("code",[t._v("MNT_MODE_OUT=AUX")]),t._v(".")]),t._v(" "),o("p",[t._v("The output pins that are used to control the gimbal are set in the "),o("RouterLink",{attrs:{to:"/ko/config/actuators.html#actuator-outputs"}},[t._v("Acuator Configuration > Outputs")]),t._v(" by selecting any three unused Actuator Outputs and assigning them the following output functions:")],1),t._v(" "),o("ul",[o("li",[o("code",[t._v("Gimbal Roll")]),t._v(": Output controls gimbal roll.")]),t._v(" "),o("li",[o("code",[t._v("Gimbal Pitch")]),t._v(": Output controls Gimbal pitch.")]),t._v(" "),o("li",[o("code",[t._v("Gimbal Yaw")]),t._v(": Output controls Gimbal pitch.")])]),t._v(" "),o("p",[t._v("For example, you might have the following settings to assign the gimbal roll, pitch and yaw to AUX1-3 outputs.")]),t._v(" "),o("p",[o("img",{attrs:{src:a(457),alt:"Gimbal Actuator config"}})]),t._v(" "),o("p",[t._v("The PWM values to use for the disarmed, maximum and minimum values can be determined in the same way as other servo, using the "),o("RouterLink",{attrs:{to:"/ko/config/actuators.html#actuator-testing"}},[t._v("Actuator Test sliders")]),t._v(" to confirm that each slider moves the appropriate axis, and changing the values so that the gimbal is in the appropriate position at the disarmed, low and high position in the slider. The values may also be provided in gimbal documentation.")],1),t._v(" "),o("h2",{attrs:{id:"sitl"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#sitl"}},[t._v("#")]),t._v(" SITL")]),t._v(" "),o("p",[t._v("The "),o("RouterLink",{attrs:{to:"/ko/sim_gazebo_classic/"}},[t._v("Gazebo Classic")]),t._v(" simulation "),o("RouterLink",{attrs:{to:"/ko/sim_gazebo_classic/gazebo_vehicles.html#typhoon-h480-hexrotor"}},[t._v("Typhoon H480 model")]),t._v(" comes with a preconfigured simulated gimbal.")],1),t._v(" "),o("p",[t._v("실행하려면 다음을 사용하십시오.")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("make px4_sitl gazebo-classic_typhoon_h480\n")])])]),o("p",[t._v("To just test the "),o("RouterLink",{attrs:{to:"/ko/modules/modules_driver.html#gimbal"}},[t._v("gimbal driver")]),t._v(" on other models or simulators, make sure the driver runs (using "),o("code",[t._v("gimbal start")]),t._v("), then configure its parameters.")],1),t._v(" "),o("h2",{attrs:{id:"시험"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#시험"}},[t._v("#")]),t._v(" 시험")]),t._v(" "),o("p",[t._v("The driver provides a simple test command. 다음은 SITL에서의 테스트 방법을 설명합니다. 이 명령은 실제 장치에서도 작동합니다.")]),t._v(" "),o("p",[t._v("다음을 사용하여 시뮬레이션을 시작합니다(이를 위해 매개변수를 변경할 필요는 없음).")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("make px4_sitl gazebo-classic_typhoon_h480\n")])])]),o("p",[t._v("예를 들어 시동 여부를 확인하십시오. "),o("code",[t._v("commander takeoff")]),t._v(" 명령어를 실행한 다음, 다음 명령을 사용하여 짐벌(예)을 제어합니다:")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("gimbal test yaw 30\n")])])]),o("p",[t._v("시뮬레이션된 짐벌은 자체적으로 안정적이므로, MAVLink 명령을 보내는 경우 "),o("code",[t._v("stabilize")]),t._v(" 플래그를 "),o("code",[t._v("false")]),t._v("로 설정합니다.")]),t._v(" "),o("p",[o("img",{attrs:{src:a(458),alt:"Gazebo 짐벌 시뮬레이션"}})])])}),[],!1,null,null,null);e.default=i.exports},457:function(t,e,a){t.exports=a.p+"assets/img/qgc_actuators_gimbal.5e7782d0.png"},458:function(t,e,a){t.exports=a.p+"assets/img/gimbal-simulation.bbac9883.png"}}]);