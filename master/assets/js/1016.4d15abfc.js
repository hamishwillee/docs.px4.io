(window.webpackJsonp=window.webpackJsonp||[]).push([[1016],{2140:function(t,e,a){"use strict";a.r(e);var r=a(18),o=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"parachute"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parachute"}},[t._v("#")]),t._v(" Parachute")]),t._v(" "),a("p",[t._v("PX4 can be configured to trigger a parachute connected to a free PWM output during "),a("RouterLink",{attrs:{to:"/ko/advanced_config/flight_termination.html"}},[t._v("flight termination")]),t._v(".")],1),t._v(" "),a("p",[t._v("This topic provides the specific example of how to set up a parachute, using a spring-loaded launcher from "),a("a",{attrs:{href:"https://fruitychutes.com/buyachute/drone-and-uav-parachute-recovery-c-21/harrier-drone-parachute-launcher-c-21_33/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Fruity Chutes"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("Note")]),t._v(" In fact PX4 does not know that it is launching a parachute; during flight termination it just turns off all controllers and sets all PWM outputs to their failsafe values. You can therefore use this feature to activate multiple complementary safety devices. For more information see "),a("RouterLink",{attrs:{to:"/ko/advanced_config/flight_termination.html"}},[t._v("Flight Termination Configuration")]),t._v(".")],1)]),t._v(" "),a("h2",{attrs:{id:"using-parachutes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-parachutes"}},[t._v("#")]),t._v(" Using Parachutes")]),t._v(" "),a("p",[t._v("Below are a few notes about using parachutes:")]),t._v(" "),a("ul",[a("li",[t._v("Having a parachute does not guarantee that the vehicle will not be destroyed or cause harm! > "),a("strong",[t._v("Warning")]),t._v(" You must always fly with safety in mind.")]),t._v(" "),a("li",[t._v("Parachutes require careful usage to be effective - for example, they must be folded correctly.")]),t._v(" "),a("li",[t._v("Parachutes have a minimum effective altitude.")]),t._v(" "),a("li",[t._v("A parachute may trigger while the vehicle is upside down. This will increase the time required to slow, and may even result in the drone collapsing the parachute.")]),t._v(" "),a("li",[t._v("The system requires a working and powered flight controller. If something causes the flight stack to crash, the parachute will not deploy.")])]),t._v(" "),a("h2",{attrs:{id:"parachute-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parachute-setup"}},[t._v("#")]),t._v(" Parachute Setup")]),t._v(" "),a("p",[t._v("The setup below explains how you might configure a quad multicopter with motors on MAIN 1-4 and a parachute on MAIN PWM port 7. The PWM values mentioned are for the "),a("em",[t._v("Fruity Chutes")]),t._v(" parachute we tested.")]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("Tip")]),t._v(" For the first test, try on the bench, without the props and with an unloaded parachute device!")])]),t._v(" "),a("p",[t._v("Hardware setup:")]),t._v(" "),a("ul",[a("li",[t._v("Connect the parachute to the IO port (MAIN), channel 7 (starting from 1).")]),t._v(" "),a("li",[t._v("Power the servo rail - i.e. connect a 5V BEC to the servo rail.")])]),t._v(" "),a("p",[t._v("Enable flight termination:")]),t._v(" "),a("ul",[a("li",[t._v("Set "),a("RouterLink",{attrs:{to:"/ko/config/safety.html"}},[t._v("Safety")]),t._v(" action to "),a("em",[t._v("Flight termination")]),t._v(" for checks where you want the parachute to trigger")],1),t._v(" "),a("li",[t._v("Set "),a("RouterLink",{attrs:{to:"/ko/config/safety.html#failure_detector"}},[t._v("Failure Detector")]),t._v(" pitch angles, roll angles and time triggers for crash/flip detection, and disable the failure/IMU timeout circuit breaker (i.e. set "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#CBRK_FLIGHTTERM"}},[t._v("CBRK_FLIGHTTERM=0")]),t._v("). > "),a("strong",[t._v("Note")]),t._v(" You can also configure an "),a("RouterLink",{attrs:{to:"/ko/config/safety.html#external_ats"}},[t._v("external ATS")]),t._v(" for failure detection.")],1)]),t._v(" "),a("p",[t._v("Parachute settings")]),t._v(" "),a("ul",[a("li",[t._v("Set "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#PWM_MAIN_DIS7"}},[t._v("PWM_MAIN_DIS7")]),t._v(' to PWM value for parachute "OFF" position (usually between 700 and 1000ms)')],1),t._v(" "),a("li",[t._v("Set "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#PWM_MAIN_FAIL7"}},[t._v("PWM_MAIN_FAIL7")]),t._v(' to PWM value for parachute "ON" position (usually between 1800 and 2200ms)')],1)]),t._v(" "),a("p",[t._v("Motor settings:")]),t._v(" "),a("ul",[a("li",[t._v("Set "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#PWM_MAIN_FAIL1"}},[t._v("PWM_MAIN_FAILn")]),t._v(", where n is 1 - 4, to 900ms such that the motors directly go to disarmed values.")],1)]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("Note")]),t._v(" There is no way to recover from a Termination state! Reboot/power cycle the vehicle before your next test.")])]),t._v(" "),a("p",[a("span",{attrs:{id:"testing"}})]),t._v(" "),a("h2",{attrs:{id:"parachute-testing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parachute-testing"}},[t._v("#")]),t._v(" Parachute Testing")]),t._v(" "),a("p",[t._v("The parachute will trigger during "),a("RouterLink",{attrs:{to:"/ko/advanced_config/flight_termination.html"}},[t._v("flight termination")]),t._v(".")],1),t._v(" "),a("p",[t._v("The easiest way to test a (real) parachute is to enable the "),a("RouterLink",{attrs:{to:"/ko/config/safety.html#attitude_trigger"}},[t._v("failure detector attitude trigger")]),t._v(" and tip the vehicle over.")],1),t._v(" "),a("p",[t._v("You can also simulate a parachute/flight termination in Gazebo: "),a("RouterLink",{attrs:{to:"/ko/simulation/gazebo.html#flight_termination"}},[t._v("Development > Simulation > Gazebo > Simulated Parachute/Flight Termination")]),t._v(".")],1)])}),[],!1,null,null,null);e.default=o.exports}}]);