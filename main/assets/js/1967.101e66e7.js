(window.webpackJsonp=window.webpackJsonp||[]).push([[1967],{3577:function(e,t,a){"use strict";a.r(t);var o=a(19),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"throw-launch-multicopter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#throw-launch-multicopter"}},[e._v("#")]),e._v(" Throw Launch (Multicopter) "),a("Badge",{attrs:{type:"warning",text:"main (v1.15+)",vertical:"top"}})],1),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("注意")]),e._v(" "),a("p",[e._v("Experimental")]),e._v(" "),a("ul",[a("li",[e._v("It has not yet been broadly tested on different vehicle configurations or scenarios.")]),e._v(" "),a("li",[e._v("The majority of testing has been done in position mode.\nOther modes should also work.")])])]),e._v(" "),a("p",[e._v("This feature allows a multicopter to be started by arming it from a fixed position and then throwing it into the air.\nThe vehicle then turns on the motors and operates according to its current mode.")]),e._v(" "),a("p",[e._v("When throw launch is enabled, arming the vehicle does not cause the propellers to spin.\nThe propellors will not activate until the vehicle is thrown or is disarmed, and the arming tone will continue playing during this time.\nThe vehicle will not automatically disarm after arming, and must be manually disarmed if you choose not to throw it.")]),e._v(" "),a("p",[e._v("The vehicle detects that it has been thrown based on reaching a certain speed (5m/s), and then starts the motors at the apex of the throw (once it determines that it has started to fall).\nYou need to throw the vehicle high enough so that it can stabilize its height well before falling anywhere near people or obstacles.")]),e._v(" "),a("p",[e._v("Notes:")]),e._v(" "),a("ul",[a("li",[e._v("The mode is disabled by default, and must be enabled using a "),a("a",{attrs:{href:"#parameters"}},[e._v("parameter")]),e._v(" before arming.")]),e._v(" "),a("li",[e._v("When enabled you cannot take off from the ground using the normal modes.")]),e._v(" "),a("li",[e._v("The vehicle should not be transported after being armed and before the throw.\nIn particular, the throw should not be executed from a moving platform.\nThe reason for this is that the condition to start the motors depends on absolute speed of the multicopter and does not account for any additional movement.\nTrying to throw the drone from a moving platform might result in the motors being started prematurely.")])]),e._v(" "),a("h2",{attrs:{id:"safety"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#safety"}},[e._v("#")]),e._v(" Safety")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("注意")]),e._v(" "),a("p",[e._v("Throw launch is dangerous as it requires the operator to hold an armed multicopter and be in proximity when it is flying.")])]),e._v(" "),a("p",[e._v("Before testing, make sure that the aircraft can take off with the normal position or takeoff modes.\nAlso ensure that the propellers do not spin on arming after enabling the feature.")]),e._v(" "),a("p",[e._v("In addition:")]),e._v(" "),a("ol",[a("li",[e._v("Wear safety equipment.\nEye protection and work gloves are recommended.")]),e._v(" "),a("li",[e._v("Have an easily accessible and tested "),a("RouterLink",{attrs:{to:"/zh/config/safety.html#kill-switch"}},[e._v("kill switch")]),e._v(".\nRemind the operator to be attentive and use the kill switch if needed.\nPilots tend to forget that vehicles are replaceable, but they are not!")],1),e._v(" "),a("li",[e._v("Test as much as possible without propellers.\nKeep the tools for removing propellers nearby/readily accessible.")]),e._v(" "),a("li",[e._v("Test this feature with at least two people — one handling the aircraft, the other one the remote control.")]),e._v(" "),a("li",[e._v("Keep in mind that after the throw, the exact behavior of the aircraft might be hard to predict as it depends heavily on the way it is thrown.\nSometimes it will stay perfectly in place, but sometimes (e.g., due to extensive roll), it might drift to one side while stabilizing.\nKeep a safe distance!")])]),e._v(" "),a("p",[e._v("On first flight of a new vehicle we recommend performing a "),a("a",{attrs:{href:"#throw-launch-pretest"}},[e._v("Throw Launch test without propellers")]),e._v(" (see below).")]),e._v(" "),a("h2",{attrs:{id:"throw-launch-pretest"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#throw-launch-pretest"}},[e._v("#")]),e._v(" Throw Launch Pretest")]),e._v(" "),a("p",[e._v("A throw launch without propellers can be used to confirm that arming does not occur prematurely, and for the operator to understand what to expect during the flight.")]),e._v(" "),a("p",[e._v("The steps for this test are:")]),e._v(" "),a("ol",[a("li",[e._v("Dismount the propellers.")]),e._v(" "),a("li",[e._v("Set "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_THROW_EN"}},[e._v("COM_THROW_EN")]),e._v(" to "),a("code",[e._v("Enabled")]),e._v(".")],1),e._v(" "),a("li",[e._v("Arm the aircraft.\nThe engines should not spin, but the vehicle should be armed and keep playing the arming tune.")]),e._v(" "),a("li",[e._v("Throw the aircraft about 2m into the air.\nIf the aircraft is not thrown high enough, the motors will not turn on.")]),e._v(" "),a("li",[e._v("The engines should start just after crossing the apex.")]),e._v(" "),a("li",[e._v("Engage the kill switch (ideally a second person operating the RC should do this).")]),e._v(" "),a("li",[e._v("Catch the drone.\nRemember to use safety gloves!")])]),e._v(" "),a("h2",{attrs:{id:"throw-launch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#throw-launch"}},[e._v("#")]),e._v(" Throw Launch")]),e._v(" "),a("p",[e._v("The steps for a throw launch are:")]),e._v(" "),a("ol",[a("li",[e._v("Set "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_THROW_EN"}},[e._v("COM_THROW_EN")]),e._v(" to "),a("code",[e._v("Enabled")]),e._v(".")],1),e._v(" "),a("li",[e._v("Arm the aircraft.\nThe propellers should not spin, but the vehicle should be armed and keep playing the arming tune.")]),e._v(" "),a("li",[e._v("Throw the aircraft away from you, forward and up (about 2m away and 2m up is recommended).\n"),a("ul",[a("li",[e._v("The vehicle must reach the speed of "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_THROW_SPEED"}},[e._v("COM_THROW_SPEED")]),e._v(" to detect launch, which by default is set to 5 m/s.\nIf this speed is not achieved, the motors will not start and the aircraft will fall to the ground.")],1),e._v(" "),a("li",[e._v('Try to avoid excessive rotation during the throw, as this might cause the drone to fail or behave unpredictably.\nThe exact meaning of "excessive rotation" depends on the platform: for instance, '),a("RouterLink",{attrs:{to:"/zh/complete_vehicles/px4_vision_kit.html"}},[e._v("PX4Vision")]),e._v(" used for the testing, still managed to recover after 2-3 full rotations.")],1)])]),e._v(" "),a("li",[e._v("After a downward velocity is detected (the vehicle reaches its apex and starts falling down), the motors should turn on and the vehicle will start flying in the current mode.")])]),e._v(" "),a("h2",{attrs:{id:"parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),a("p",[e._v("The following parameters can be used to enable and configure throw launch:")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_THROW_EN"}},[e._v("COM_THROW_EN")]),e._v(" enables the feature.")],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#COM_THROW_SPEED"}},[e._v("COM_THROW_SPEED")]),e._v(" determines the minimum speed the aircraft should reach to detect the throw.\nIf it is not reached, the engines will not turn on.")],1)]),e._v(" "),a("h2",{attrs:{id:"see-also"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#see-also"}},[e._v("#")]),e._v(" See Also")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/zh/flight_modes_fw/takeoff.html#catapult-hand-launch"}},[e._v("Takeoff Mode (Fixed Wing) > Catapult/Hand Launch")]),e._v(".")],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);