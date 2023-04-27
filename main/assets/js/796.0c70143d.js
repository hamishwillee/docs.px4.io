(window.webpackJsonp=window.webpackJsonp||[]).push([[796],{1472:function(t,e,a){t.exports=a.p+"assets/img/qgc_actuators_parachute.9db7d1df.png"},2994:function(t,e,a){"use strict";a.r(e);var r=a(19),o=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"낙하산"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#낙하산"}},[t._v("#")]),t._v(" 낙하산")]),t._v(" "),r("p",[t._v("PX4 can be configured to trigger a parachute during "),r("RouterLink",{attrs:{to:"/ko/advanced_config/flight_termination.html"}},[t._v("flight termination")]),t._v(".")],1),t._v(" "),r("p",[t._v("The parachute can be connected to a free PWM output or via MAVLink.")]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("During flight termination PX4 turns off all controllers and sets all PWM outputs to their failsafe values (including those connected to PWM outputs) and triggers any connected MAVLink parachutes.")]),t._v(" "),r("p",[t._v("You can therefore use this feature to activate multiple complementary safety devices connected to different outputs. 자세한 내용은 "),r("RouterLink",{attrs:{to:"/ko/advanced_config/flight_termination.html"}},[t._v("비행 종료 설정")]),t._v("을 참고하십시오.")],1)]),t._v(" "),r("h2",{attrs:{id:"낙하산-사용법"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#낙하산-사용법"}},[t._v("#")]),t._v(" 낙하산 사용법")]),t._v(" "),r("p",[t._v("Below are a few considerations when using parachutes:")]),t._v(" "),r("ul",[r("li",[t._v("A parachute does not guarantee that the vehicle will not be destroyed or cause harm! You must always fly with safety in mind.")]),t._v(" "),r("li",[t._v("Parachutes require careful usage to be effective. For example, they must be folded correctly.")]),t._v(" "),r("li",[t._v("낙하산에는 최소 유효 고도가 있습니다.")]),t._v(" "),r("li",[t._v("기체가 뒤집힌 상태에서 낙하산이 작동할 수 있습니다. This will increase the time required to slow, and may result in the drone collapsing the parachute.")]),t._v(" "),r("li",[t._v("The parachute will only deploy if the flight controller is powered and PX4 is running properly (unless it is triggered independently of PX4). It will not deploy if something causes the flight stack to crash.")])]),t._v(" "),r("h2",{attrs:{id:"낙하산-설정"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#낙하산-설정"}},[t._v("#")]),t._v(" 낙하산 설정")]),t._v(" "),r("p",[t._v('Flight termination (and hence parachute deployment) may be triggered by safety checks such as RC Loss, geofence violation, and so on, from attitude triggers and other failure detector checks, or by a command from a ground station. During flight termination PX4 sets PWM outputs to their "failsafe" values (failsafe values turn off motors, but may be used to turn on/trigger the parachute). If a MAVLink parachute is connected and healthy, a command will be sent to activate it.')]),t._v(" "),r("p",[t._v("Parachute setup therefore involves:")]),t._v(" "),r("ul",[r("li",[t._v("Configuring "),r("RouterLink",{attrs:{to:"/ko/advanced_config/flight_termination.html"}},[t._v("flight termination")]),t._v(" as the appropriate action for those safety and failure cases where the parachute should be deployed.")],1),t._v(" "),r("li",[t._v("Configure PX4 to deploy the parachute during flight termination (set PWM output levels appropriately or send the MAVLink parachute deploy command).")]),t._v(" "),r("li",[t._v("Configure PX4 output levels to disable motors on failsafe. This is the default so usually nothing is required (for servos it's the center value).")])]),t._v(" "),r("h3",{attrs:{id:"enable-flight-termination"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#enable-flight-termination"}},[t._v("#")]),t._v(" Enable Flight Termination")]),t._v(" "),r("p",[t._v("To enable flight termination:")]),t._v(" "),r("ul",[r("li",[t._v("Set "),r("RouterLink",{attrs:{to:"/ko/config/safety.html"}},[t._v("Safety")]),t._v(" action to "),r("em",[t._v("Flight termination")]),t._v(" for checks where you want the parachute to trigger.")],1),t._v(" "),r("li",[t._v("Set "),r("RouterLink",{attrs:{to:"/ko/config/safety.html#failure-detector"}},[t._v("Failure Detector")]),t._v(" pitch angles, roll angles and time triggers for crash/flip detection, and disable the failure/IMU timeout circuit breaker (i.e. set "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#CBRK_FLIGHTTERM"}},[t._v("CBRK_FLIGHTTERM=0")]),t._v(").")],1)]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("You can also configure an "),r("RouterLink",{attrs:{to:"/ko/config/safety.html#external-automatic-trigger-system-ats"}},[t._v("external Automatic Trigger System (ATS)")]),t._v(" for failure detection.")],1)]),t._v(" "),r("h3",{attrs:{id:"parachute-output-bus-setup"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#parachute-output-bus-setup"}},[t._v("#")]),t._v(" Parachute Output Bus Setup")]),t._v(" "),r("p",[t._v("If the parachute is triggered by a PWM or CAN output then it must first be connected to an unused output. You will probably also need to separately power the parachute servo. This is might be done by connecting a 5V BEC to the Flight Controller servo rail, and powering the parachute from it.")]),t._v(" "),r("p",[t._v("You then need to ensure that the parachute pin will be set to a value that will trigger the parachute when a failsafe occurs:")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("Open "),r("RouterLink",{attrs:{to:"/ko/config/actuators.html"}},[t._v("Actuators")]),t._v(" in QGroundControl")],1)]),t._v(" "),r("li",[r("p",[t._v("Assign the "),r("em",[t._v("Parachute")]),t._v(" function to any unused output (below we set the "),r("code",[t._v("AUX6")]),t._v(" output):")]),t._v(" "),r("p",[r("img",{attrs:{src:a(1472),alt:"Actuators - Parachute (QGC)"}})])]),t._v(" "),r("li",[r("p",[t._v("Set appropriate PWM values for your parachute. The output is automatically set to the maximum PWM value when a failsafe is triggered.")])])]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("For the spring-loaded launcher from "),r("a",{attrs:{href:"https://fruitychutes.com/buyachute/drone-and-uav-parachute-recovery-c-21/harrier-drone-parachute-launcher-c-21_33/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Fruity Chutes"),r("OutboundLink")],1),t._v(" the minimum PWM value should be between 700 and 1000ms, and the maximum value between 1800 and 2200ms.")])]),t._v(" "),r("h3",{attrs:{id:"mavlink-parachute-setup"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mavlink-parachute-setup"}},[t._v("#")]),t._v(" MAVLink Parachute Setup")]),t._v(" "),r("p",[t._v("PX4 will trigger a connected and healthy parachute on failsafe by sending the command "),r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_DO_PARACHUTE",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAV_CMD_DO_PARACHUTE"),r("OutboundLink")],1),t._v(" with the "),r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#PARACHUTE_ACTION",target:"_blank",rel:"noopener noreferrer"}},[t._v("PARACHUTE_RELEASE"),r("OutboundLink")],1),t._v(" action.")]),t._v(" "),r("p",[t._v("MAVLink parachute support is enabled by setting the parameter "),r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#COM_PARACHUTE"}},[t._v("COM_PARACHUTE=1")]),t._v(". PX4 will then indicate parachute status using the "),r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_SYS_STATUS_RECOVERY_SYSTEM",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAV_SYS_STATUS_RECOVERY_SYSTEM"),r("OutboundLink")],1),t._v(" bit in the "),r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#SYS_STATUS",target:"_blank",rel:"noopener noreferrer"}},[t._v("SYS_STATUS"),r("OutboundLink")],1),t._v(" extended onboard control sensors fields:")],1),t._v(" "),r("ul",[r("li",[r("code",[t._v("SYS_STATUS.onboard_control_sensors_present_extended")]),t._v(": MAVLink parachute present (based on heartbeat detection).")]),t._v(" "),r("li",[r("code",[t._v("SYS_STATUS.onboard_control_sensors_enabled_extended")]),t._v(": ?")]),t._v(" "),r("li",[r("code",[t._v("SYS_STATUS.onboard_control_sensors_health_extended")]),t._v(": MAVLink parachute healthy (based on heartbeat detection).")])]),t._v(" "),r("p",[t._v("A MAVLink parachute is required to emit a "),r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#HEARTBEAT",target:"_blank",rel:"noopener noreferrer"}},[t._v("HEARTBEAT"),r("OutboundLink")],1),t._v(" with "),r("code",[t._v("HEARTBEAT.type")]),t._v(" of "),r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_TYPE_PARACHUTE",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAV_TYPE_PARACHUTE"),r("OutboundLink")],1),t._v(".")]),t._v(" "),r("h2",{attrs:{id:"낙하산-시험"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#낙하산-시험"}},[t._v("#")]),t._v(" 낙하산 시험")]),t._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),r("p",[t._v("For the first test, try on the bench, without the props and with an unloaded parachute device!")])]),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[t._v("There is no way to recover from a Termination state!\nYou will need to reboot/power cycle the vehicle for subsequent tests.")])]),t._v(" "),r("p",[t._v("The parachute will trigger during "),r("RouterLink",{attrs:{to:"/ko/advanced_config/flight_termination.html"}},[t._v("flight termination")]),t._v(".")],1),t._v(" "),r("p",[t._v("The easiest way to test a (real) parachute is to enable the "),r("RouterLink",{attrs:{to:"/ko/config/safety.html#attitude-trigger"}},[t._v("failure detector attitude trigger")]),t._v(" and tip the vehicle over.")],1),t._v(" "),r("p",[t._v("You can also simulate a parachute/flight termination: "),r("RouterLink",{attrs:{to:"/ko/sim_gazebo_classic/#flight_termination"}},[t._v("Gazebo Classic > Simulated Parachute/Flight Termination")]),t._v(".")],1)])}),[],!1,null,null,null);e.default=o.exports}}]);