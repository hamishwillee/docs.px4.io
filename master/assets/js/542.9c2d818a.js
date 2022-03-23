(window.webpackJsonp=window.webpackJsonp||[]).push([[542],{1551:function(t,e,a){"use strict";a.r(e);var i=a(19),o=Object(i.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"flight-termination-configuration"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#flight-termination-configuration"}},[t._v("#")]),t._v(" Flight Termination Configuration")]),t._v(" "),i("p",[t._v("The "),i("em",[t._v("Flight termination")]),t._v(" "),i("RouterLink",{attrs:{to:"/en/config/safety.html#failsafe-actions"}},[t._v("failsafe action")]),t._v(" may be triggered by a "),i("RouterLink",{attrs:{to:"/en/config/safety.html"}},[t._v("safety check")]),t._v(" (e.g. RC Loss, geofence violation, etc. on any vehicle type or in any flight mode), or by the "),i("RouterLink",{attrs:{to:"/en/config/safety.html#failure-detector"}},[t._v("Failure Detector")]),t._v(".")],1),t._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),i("p",[t._v("Flight termination may also be triggered from a ground station or companion computer using the MAVLink "),i("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_DO_FLIGHTTERMINATION",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAV_CMD_DO_FLIGHTTERMINATION"),i("OutboundLink")],1),t._v(" command.\nThis is sent, for example, when you call the "),i("a",{attrs:{href:"https://mavsdk.mavlink.io/main/en/cpp/api_reference/classmavsdk_1_1_action.html#classmavsdk_1_1_action_1a47536c4a4bc8367ccd30a92eb09781c5",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVSDK Action plugin"),i("OutboundLink")],1),t._v(" "),i("code",[t._v("terminate()")]),t._v(" or "),i("code",[t._v("terminate_async()")]),t._v(" methods.")])]),t._v(" "),i("p",[t._v("When "),i("em",[t._v("Flight termination")]),t._v(" is activated, PX4 simultaneously turns off all controllers and sets all PWM outputs to their failsafe values.")]),t._v(" "),i("p",[t._v("Depending on what devices are connected, the PWM failsafe outputs can be used to:")]),t._v(" "),i("ul",[i("li",[t._v("Deploy a "),i("RouterLink",{attrs:{to:"/en/peripherals/parachute.html"}},[t._v("parachute")]),t._v(".")],1),t._v(" "),i("li",[t._v("Extend retractable landing gear.")]),t._v(" "),i("li",[t._v("Move a PWM-connected gimbal to a safe orientation (or retract it) in order to protect the camera.")]),t._v(" "),i("li",[t._v("Trigger an inflatable device like an airbag.")]),t._v(" "),i("li",[t._v("Trigger an alarm.")])]),t._v(" "),i("p",[t._v("There is no way to recover from flight termination.\nAfter triggering you should unplug the battery as soon as possible.\nYou will need to reboot/power cycle the vehicle before it can be used again.")]),t._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),i("p",[t._v("PX4 does not know what safety devices are attached - it just applies a predefined set of PWM values to its outputs.")])]),t._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),i("p",[t._v("Failsafe values are applied to all outputs on termination.\nThere is no way to configure independent time-based (or other) triggering of the motors or specific safety devices.")])]),t._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),i("p",[t._v("This is "),i("em",[t._v("not")]),t._v(" an independent "),i("em",[t._v("Flight Termination System")]),t._v(".\nIf power is lost or if the autopilot crashes completely, the failsafe devices will not be triggered.")])]),t._v(" "),i("h2",{attrs:{id:"hardware-configuration"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#hardware-configuration"}},[t._v("#")]),t._v(" Hardware Configuration")]),t._v(" "),i("p",[t._v("Any "),i("em",[t._v("safety device(s)")]),t._v(" (e.g. a "),i("RouterLink",{attrs:{to:"/en/peripherals/parachute.html"}},[t._v("parachute")]),t._v(") that can be triggered by changing a PWM value can be used, and may be connected to any free PWM port (both MAIN and AUX).")],1),t._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),i("p",[t._v("If you're using Pixhawk-series board you will have to separately power the servo rail (i.e. from a 5V BEC, which is often also available from your ESC).")])]),t._v(" "),i("h2",{attrs:{id:"software-configuration"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#software-configuration"}},[t._v("#")]),t._v(" Software Configuration")]),t._v(" "),i("p",[t._v("The "),i("RouterLink",{attrs:{to:"/en/config/safety.html"}},[t._v("Safety")]),t._v(" topic explains how to set the "),i("em",[t._v("flight termination")]),t._v(" as the "),i("RouterLink",{attrs:{to:"/en/config/safety.html#failsafe-actions"}},[t._v("failsafe action")]),t._v(" to be performed for particular failsafe check.")],1),t._v(" "),i("p",[t._v("The "),i("RouterLink",{attrs:{to:"/en/config/safety.html#failure-detector"}},[t._v("Failure Detector")]),t._v(" can also (optionally) be configured to trigger flight termination if the vehicle flips (exceeds a certain attitude) or if failure is detected by an external automatic trigger system (ATS):")],1),t._v(" "),i("ul",[i("li",[t._v("Enable the failure detector during flight by setting "),i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#CBRK_FLIGHTTERM"}},[t._v("CBRK_FLIGHTTERM=0")]),t._v(".")],1),t._v(" "),i("li",[i("RouterLink",{attrs:{to:"/en/config/safety.html#attitude-trigger"}},[t._v("Safety > Failure Detector > Attitude Trigger")]),t._v(" explains how to configure the attitude limits that trigger "),i("em",[t._v("Flight termination")]),t._v("."),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),i("p",[t._v("During "),i("em",[t._v("takeoff")]),t._v(" excessive attitutes will trigger "),i("em",[t._v("lockdown")]),t._v(" (kill motors, but not launch parachute) rather than flight termination.\nThis is always enabled, irrespective of the value of "),i("code",[t._v("CBRK_FLIGHTTERM")]),t._v(".")])])],1),t._v(" "),i("li",[i("RouterLink",{attrs:{to:"/en/config/safety.html#external-automatic-trigger-system-ats"}},[t._v("Safety > External Automatic Trigger System (ATS)")]),t._v(" explains how to configure an external trigger system.")],1)]),t._v(" "),i("p",[t._v('For each MAIN output to which a safety device is attached, where "n" is the PWM port number, set:')]),t._v(" "),i("ul",[i("li",[i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#PWM_MAIN_DIS1"}},[t._v("PWM_MAIN_DISn")]),t._v(' to the device\'s "OFF" PWM value.')],1),t._v(" "),i("li",[i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#PWM_MAIN_FAIL1"}},[t._v("PWM_MAIN_FAILn")]),t._v(' to the device\'s "ON" PWM value.')],1)]),t._v(" "),i("p",[t._v('For each AUX output to which a safety device is attached, where "n" is the PWM port number, set:')]),t._v(" "),i("ul",[i("li",[i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#PWM_AUX_DIS1"}},[t._v("PWM_AUX_DIS1")]),t._v(' to the device\'s "OFF" PWM value.')],1),t._v(" "),i("li",[i("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#PWM_AUX_FAIL1"}},[t._v("PWM_AUX_FAILn")]),t._v(' to the device\'s "ON" PWM value.')],1)]),t._v(" "),i("p",[t._v("Finally, set the "),i("code",[t._v("PWM_AUX_FAILn")]),t._v(" and "),i("code",[t._v("PWM_MAIN_FAILn")]),t._v(" PWM values for any motors.")]),t._v(" "),i("h2",{attrs:{id:"logic-diagram"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#logic-diagram"}},[t._v("#")]),t._v(" Logic Diagram")]),t._v(" "),i("p",[t._v("The diagram below shows the logical flow around flight termination.")]),t._v(" "),i("p",[i("img",{attrs:{src:a(467),alt:"Logic diagram"}})])])}),[],!1,null,null,null);e.default=o.exports},467:function(t,e,a){t.exports=a.p+"assets/img/flight_termination_logic_diagram.094a47f0.png"}}]);