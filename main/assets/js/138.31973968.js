(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{1406:function(e,t,a){e.exports=a.p+"assets/img/trigger_pins.02861fba.png"},1407:function(e,t,a){e.exports=a.p+"assets/img/seagull_sync2.c248d158.png"},1408:function(e,t,a){e.exports=a.p+"assets/img/qgc_test_camera.2eb07453.png"},1409:function(e,t,a){e.exports=a.p+"assets/img/photogrammetry.4b5c0077.png"},1410:function(e,t,a){e.exports=a.p+"assets/img/qgc_survey_polygon.2669906f.jpeg"},1411:function(e,t,a){e.exports=a.p+"assets/img/qgc_survey_parameters.81ac2b88.jpg"},1412:function(e,t,a){e.exports=a.p+"assets/img/qgc_geotag.473aba86.png"},1413:function(e,t,a){e.exports=a.p+"assets/img/geotag.2d9fb330.jpg"},2332:function(e,t,a){"use strict";a.r(t);var r=a(19),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"camera-configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#camera-configuration"}},[e._v("#")]),e._v(" Camera Configuration")]),e._v(" "),r("p",[e._v("PX4 can be configured to connect physical outputs to trigger a camera, or it can be used with a "),r("a",{attrs:{href:"#mavlink-cameras"}},[e._v("MAVLink camera")]),e._v(".")]),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),r("p",[e._v("We recommend that you use a MAVLink camera as this allows comprehensive control of cameras via the "),r("a",{attrs:{href:"https://mavlink.io/en/services/camera.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("camera protocol"),r("OutboundLink")],1),e._v(".\nDirectly connected cameras only support "),r("a",{attrs:{href:"#mavlink-command-interface-directly-connected-cameras"}},[e._v("a small subset")]),e._v(" of MAVLink camera commands.")])]),e._v(" "),r("p",[e._v("Whenever a camera is triggered, the MAVLink "),r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#CAMERA_TRIGGER",target:"_blank",rel:"noopener noreferrer"}},[e._v("CAMERA_TRIGGER"),r("OutboundLink")],1),e._v(" message is published containing a sequence number (i.e. the current session's image sequence number) and the corresponding timestamp.\nThis timestamp can be used for several applications, including: timestamping photos for aerial surveying and reconstruction, synchronising a multi-camera system or visual-inertial navigation.")]),e._v(" "),r("p",[e._v("Cameras can also (optionally) signal PX4 at the exact moment that a photo/frame is taken using a camera capture pin.\nThis allows more precise mapping of images to GPS position for geotagging, or the right IMU sample for VIO synchronization, etc.")]),e._v(" "),r("h2",{attrs:{id:"trigger-configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#trigger-configuration"}},[e._v("#")]),e._v(" Trigger Configuration")]),e._v(" "),r("p",[e._v("Camera triggering is usually configured from the "),r("em",[e._v("QGroundControl")]),e._v(" "),r("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/SetupView/Camera.html#px4-camera-setup",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vehicle Setup > Camera"),r("OutboundLink")],1),e._v(" section.")]),e._v(" "),r("p",[r("img",{attrs:{src:a(1406),alt:"Trigger pins"}})]),e._v(" "),r("p",[e._v("The different "),r("a",{attrs:{href:"#trigger-modes"}},[e._v("trigger modes")]),e._v(", "),r("a",{attrs:{href:"#trigger-interface-backends"}},[e._v("backend interfaces")]),e._v(" and "),r("a",{attrs:{href:"#trigger-output-pin-configuration"}},[e._v("trigger output configuration")]),e._v(" are described below (these can also be set directly from "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameters.html"}},[e._v("parameters")]),e._v(").")],1),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),r("p",[e._v("The camera settings section is not available by default for FMUv2-based flight controllers (e.g. 3DR Pixhawk) because the camera module is not automatically included in firmware.\nFor more information see "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameters.html#parameter-not-in-firmware"}},[e._v("Finding/Updating Parameters > Parameters Not In Firmware")]),e._v(".")],1)]),e._v(" "),r("h3",{attrs:{id:"trigger-modes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#trigger-modes"}},[e._v("#")]),e._v(" Trigger Modes")]),e._v(" "),r("p",[e._v("Four different modes are supported, controlled by the "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#TRIG_MODE"}},[e._v("TRIG_MODE")]),e._v(" parameter:")],1),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Mode")]),e._v(" "),r("th",[e._v("Description")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("0")]),e._v(" "),r("td",[e._v("Camera triggering is disabled.")])]),e._v(" "),r("tr",[r("td",[e._v("1")]),e._v(" "),r("td",[e._v("Works like a basic intervalometer that can be enabled and disabled by using the MAVLink command "),r("code",[e._v("MAV_CMD_DO_TRIGGER_CONTROL")]),e._v(". See "),r("a",{attrs:{href:"#mavlink-command-interface-directly-connected-cameras"}},[e._v("command interface")]),e._v(" for more details.")])]),e._v(" "),r("tr",[r("td",[e._v("2")]),e._v(" "),r("td",[e._v("Switches the intervalometer constantly on.")])]),e._v(" "),r("tr",[r("td",[e._v("3")]),e._v(" "),r("td",[e._v("Triggers based on distance. A shot is taken every time the set horizontal distance is exceeded. The minimum time interval between two shots is however limited by the set triggering interval.")])]),e._v(" "),r("tr",[r("td",[e._v("4")]),e._v(" "),r("td",[e._v("triggers automatically when flying a survey in Mission mode.")])])])]),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),r("p",[e._v("If it is your first time enabling the camera trigger app, remember to reboot after changing the "),r("code",[e._v("TRIG_MODE")]),e._v(" parameter.")])]),e._v(" "),r("h3",{attrs:{id:"trigger-interface-backends"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#trigger-interface-backends"}},[e._v("#")]),e._v(" Trigger Interface Backends")]),e._v(" "),r("p",[e._v("The camera trigger driver supports several backends - each for a specific application, controlled by the "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#TRIG_INTERFACE"}},[e._v("TRIG_INTERFACE")]),e._v(" parameter:")],1),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Number")]),e._v(" "),r("th",[e._v("Description")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("1")]),e._v(" "),r("td",[e._v("Enables the GPIO interface. The AUX outputs are pulsed high or low (depending on the "),r("code",[e._v("TRIG_POLARITY")]),e._v(" parameter) every "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#TRIG_INTERVAL"}},[e._v("TRIG_INTERVAL")]),e._v(" duration. This can be used to trigger most standard machine vision cameras directly. Note that on PX4FMU series hardware (Pixhawk, Pixracer, etc.), the signal level on the AUX pins is 3.3v.")],1)]),e._v(" "),r("tr",[r("td",[e._v("2")]),e._v(" "),r("td",[e._v("Enables the Seagull MAP2 interface. This allows the use of the "),r("a",{attrs:{href:"http://www.seagulluav.com/product/seagull-map2/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Seagull MAP2"),r("OutboundLink")],1),e._v(" to interface to a multitude of supported cameras. Pin/Channel 1 (camera trigger) and Pin/Channel 2 (mode selector) of the MAP2 should be connected to the lower and higher mapped "),r("a",{attrs:{href:"#trigger-output-pin-configuration"}},[e._v("camera trigger pins")]),e._v(". Using Seagull MAP2, PX4 also supports automatic power control and keep-alive functionalities of Sony Multiport cameras like the QX-1.")])]),e._v(" "),r("tr",[r("td",[e._v("3")]),e._v(" "),r("td",[e._v("Enables the MAVLink interface. In this mode, no actual hardware output is used. Only the "),r("code",[e._v("CAMERA_TRIGGER")]),e._v(" MAVLink message is sent by the autopilot (by default, if the MAVLink application is in "),r("code",[e._v("onboard")]),e._v(" mode. Otherwise, a custom stream will need to be enabled).")])]),e._v(" "),r("tr",[r("td",[e._v("4")]),e._v(" "),r("td",[e._v("Enables the generic PWM interface. This allows the use of "),r("a",{attrs:{href:"https://hobbyking.com/en_us/universal-remote-control-infrared-shutter-ir-rc-1g.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("infrared triggers"),r("OutboundLink")],1),e._v(" or servos to trigger your camera.")])])])]),e._v(" "),r("h3",{attrs:{id:"trigger-output-pin-configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#trigger-output-pin-configuration"}},[e._v("#")]),e._v(" Trigger Output Pin Configuration")]),e._v(" "),r("p",[e._v("Camera trigger pins are set in the "),r("em",[e._v("QGroundControl")]),e._v(" "),r("RouterLink",{attrs:{to:"/en/config/actuators.html"}},[e._v("Actuators")]),e._v(" configuration screen.")],1),e._v(" "),r("p",[e._v("The trigger pins can be set by assigning the "),r("code",[e._v("Camera_Trigger")]),e._v(" function on any FMU output.\nIf using trigger setup that requires two pins (e.g. Seagull MAP2) you can assign to any two outputs.")]),e._v(" "),r("p",[e._v("Note however that once an output has been used for camera triggering, the whole PWM group cannot be used for anything else (you can't use another output in the group for an actuator or motor, say).")]),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),r("p",[e._v("At time of writing triggering only works on FMU pins:")]),e._v(" "),r("ul",[r("li",[e._v("On a Pixhawk flight controller that has both FMU and I/O boards FMU pins map to "),r("code",[e._v("AUX")]),e._v(" outputs (e.g. Pixhawk 4, CUAV v5+) .")]),e._v(" "),r("li",[e._v("A controller that only has an FMU, the pins map to "),r("code",[e._v("MAIN")]),e._v(" outputs (e.g. Pixhawk 4 mini, CUAV v5 nano).")])])]),e._v(" "),r("h3",{attrs:{id:"other-parameters"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#other-parameters"}},[e._v("#")]),e._v(" Other Parameters")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Parameter")]),e._v(" "),r("th",[e._v("Description")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#TRIG_POLARITY"}},[e._v("TRIG_POLARITY")])],1),e._v(" "),r("td",[e._v("Relevant only while using the GPIO interface. Sets the polarity of the trigger pin. Active high means that the pin is pulled low normally and pulled high on a trigger event. Active low is vice-versa.")])]),e._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#TRIG_INTERVAL"}},[e._v("TRIG_INTERVAL")])],1),e._v(" "),r("td",[e._v("Defines the time between two consecutive trigger events in milliseconds.")])]),e._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#TRIG_ACT_TIME"}},[e._v("TRIG_ACT_TIME")])],1),e._v(" "),r("td",[e._v('Defines the time in milliseconds the trigger pin is held in the "active" state before returning to neutral. In PWM modes, the minimum is limited to 40 ms to make sure we always fit an activate pulse into the 50Hz PWM signal.')])])])]),e._v(" "),r("p",[e._v("The full list of parameters pertaining to the camera trigger module can be found on the "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#camera-trigger"}},[e._v("parameter reference")]),e._v(" page.")],1),e._v(" "),r("h2",{attrs:{id:"camera-capture"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#camera-capture"}},[e._v("#")]),e._v(" Camera Capture")]),e._v(" "),r("p",[e._v("Cameras can also (optionally) use a camera capture pin to signal the exact moment when a photo/frame is taken.\nThis allows more precise mapping of images to GPS position for geotagging, or the right IMU sample for VIO synchronization, etc.")]),e._v(" "),r("p",[e._v("Camera capture/feedback is enabled in PX4 by setting "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#CAM_CAP_FBACK"}},[e._v("CAM_CAP_FBACK = 1")]),e._v(".\nThe pin used for camera capture is then set in the "),r("em",[e._v("QGroundControl")]),e._v(" "),r("RouterLink",{attrs:{to:"/en/config/actuators.html"}},[e._v("Actuators")]),e._v(" configuration screen by assigning the "),r("code",[e._v("Camera_Capture")]),e._v(" function on any FMU output.")],1),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),r("p",[e._v("At time of writing camera capture only works on FMU pins:")]),e._v(" "),r("ul",[r("li",[e._v("On a Pixhawk flight controller that has both FMU and I/O boards FMU pins map to "),r("code",[e._v("AUX")]),e._v(" outputs (e.g. Pixhawk 4, CUAV v5+).")]),e._v(" "),r("li",[e._v("A controller that only has an FMU, the pins map to "),r("code",[e._v("MAIN")]),e._v(" outputs (e.g. Pixhawk 4 mini, CUAV v5 nano).")])])]),e._v(" "),r("p",[e._v("PX4 detects a rising edge with the appropriate voltage level on the camera capture pin (for Pixhawk flight controllers this is normally 3.3V).\nIf the camera isn't outputting an appropriate voltage, then additional circuitry will be required to make the signal compatible.")]),e._v(" "),r("p",[e._v("Cameras that have a hotshoe connector (for connecting a flash) can usually be connected via a hotshoe-adaptor.\nFor example, the "),r("a",{attrs:{href:"https://www.seagulluav.com/product/seagull-sync2/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Seagull #SYNC2 Universal Camera Hot Shoe Adapter"),r("OutboundLink")],1),e._v(" is an optocoupler that decouples and shifts the flash voltage to the Pixhawk voltage.\nThis slides into the flash slot on the top of the camera.\nThe red and black ouptputs are connected to the servo rail/ground and the white wire is connected to the input capture pin.")]),e._v(" "),r("p",[r("img",{attrs:{src:a(1407),alt:"Seagull SYNC#2"}})]),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),r("p",[e._v("PX4 emits the MAVLink "),r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#CAMERA_TRIGGER",target:"_blank",rel:"noopener noreferrer"}},[e._v("CAMERA_TRIGGER"),r("OutboundLink")],1),e._v(" message on both camera trigger and camera capture.\nIf camera capture is configured, the timestamp from the camera capture driver is used, otherwise the triggering timestamp.")])]),e._v(" "),r("h2",{attrs:{id:"mavlink-command-interface-directly-connected-cameras"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mavlink-command-interface-directly-connected-cameras"}},[e._v("#")]),e._v(" MAVLink Command Interface (Directly Connected Cameras)")]),e._v(" "),r("p",[e._v("When using a camera connected to the flight controller as described in this document (e.g. using the GPIO, PWM or seagull backend interfaces) the camera driver supports the following subset of MAVLink commands:")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_DO_TRIGGER_CONTROL",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAV_CMD_DO_TRIGGER_CONTROL"),r("OutboundLink")],1),e._v(' - Accepted in "command controlled" mode ('),r("code",[e._v("TRIG_MODE")]),e._v(" 1).")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Command Parameter")]),e._v(" "),r("th",[e._v("Description")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("Param #1")]),e._v(" "),r("td",[e._v("Trigger enable/disable. "),r("code",[e._v("1")]),e._v(": enable (start), "),r("code",[e._v("0")]),e._v(": disable.")])]),e._v(" "),r("tr",[r("td",[e._v("Param #2")]),e._v(" "),r("td",[e._v("Reset trigger sequence. "),r("code",[e._v("1")]),e._v(": reset, any other value does nothing.")])]),e._v(" "),r("tr",[r("td",[e._v("Param #3")]),e._v(" "),r("td",[e._v("Pause triggering, but without switching the camera off or retracting it. "),r("code",[e._v("1")]),e._v(": pause, "),r("code",[e._v("0")]),e._v(": restart.")])])])]),e._v(" "),r("p",[r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_DO_DIGICAM_CONTROL",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAV_CMD_DO_DIGICAM_CONTROL"),r("OutboundLink")],1),e._v(" - Accepted in all modes.")]),e._v(" "),r("p",[e._v("This is used by the GCS to test-shoot the camera from the user interface.\nThe trigger driver does not support all camera control parameters defined by the MAVLink spec.")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Command Parameter")]),e._v(" "),r("th",[e._v("Description")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("Param #5")]),e._v(" "),r("td",[e._v("Trigger one-shot command (set to 1 to trigger a single image frame).")])])])]),e._v(" "),r("p",[r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_DO_SET_CAM_TRIGG_DIST",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAV_CMD_DO_SET_CAM_TRIGG_DIST"),r("OutboundLink")],1),e._v(' - Accepted in "mission controlled" mode ('),r("code",[e._v("TRIG_MODE")]),e._v(" 4)")]),e._v(" "),r("p",[e._v("This command is autogenerated during missions to trigger the camera based on survey missions from the GCS.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_OBLIQUE_SURVEY",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAV_CMD_OBLIQUE_SURVEY"),r("OutboundLink")],1),e._v(" - Mission command to set a camera auto mount pivoting oblique survey.")]),e._v(" "),r("p",[e._v("This accepts "),r("code",[e._v("param1")]),e._v(" to "),r("code",[e._v("param4")]),e._v(" as defined in the MAVLink message definition.\nThe shutter integration setting ("),r("code",[e._v("param2")]),e._v(") is only obeyed with a GPIO backend.")]),e._v(" "),r("h2",{attrs:{id:"mavlink-cameras"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mavlink-cameras"}},[e._v("#")]),e._v(" MAVLink Cameras")]),e._v(" "),r("p",[e._v("PX4 can also be configured to use a "),r("a",{attrs:{href:"#trigger-interface-backends"}},[e._v("MAVLink trigger interface backend")]),e._v(" with a MAVLink camera.")]),e._v(" "),r("p",[e._v("In this case MAVLink camera messages are forwarded to a MAVLink camera for handling (although PX4 will still emit the "),r("code",[e._v("CAMERA_TRIGGER")]),e._v(" when a trigger command is received).")]),e._v(" "),r("p",[e._v("MAVLink cameras are recommended because directly connected cameras only support "),r("a",{attrs:{href:"#mavlink-command-interface-directly-connected-cameras"}},[e._v("a small subset")]),e._v(" of the available MAVLink camera messages and commands.\nMAVLink cameras potentially offer much more control over a camera using the "),r("a",{attrs:{href:"https://mavlink.io/en/services/camera.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAVLink Camera Protocol"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("h2",{attrs:{id:"testing-trigger-functionality"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#testing-trigger-functionality"}},[e._v("#")]),e._v(" Testing Trigger Functionality")]),e._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),r("p",[e._v("The following sections are out of date and need retesting.")])]),e._v(" "),r("ol",[r("li",[r("p",[e._v("On the PX4 console:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("camera_trigger test\n")])])])]),e._v(" "),r("li",[r("p",[e._v("From "),r("em",[e._v("QGroundControl")]),e._v(":")]),e._v(" "),r("p",[e._v("Click on "),r("strong",[e._v("Trigger Camera")]),e._v(" in the main instrument panel.\nThese shots are not logged or counted for geotagging.")]),e._v(" "),r("p",[r("img",{attrs:{src:a(1408),alt:"QGC Test Camera"}})])])]),e._v(" "),r("h2",{attrs:{id:"sony-qx-1-example-photogrammetry"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sony-qx-1-example-photogrammetry"}},[e._v("#")]),e._v(" Sony QX-1 example (Photogrammetry)")]),e._v(" "),r("p",[r("img",{attrs:{src:a(1409),alt:"photogrammetry"}})]),e._v(" "),r("p",[e._v("In this example, we will use a Seagull MAP2 trigger cable to interface to a Sony QX-1 and use the setup to create orthomosaics after flying a fully autonomous survey mission.")]),e._v(" "),r("h3",{attrs:{id:"trigger-settings"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#trigger-settings"}},[e._v("#")]),e._v(" Trigger Settings")]),e._v(" "),r("p",[e._v("The recommended camera settings are:")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("TRIG_INTERFACE=2")]),e._v(" (Seagull MAP2).")]),e._v(" "),r("li",[r("code",[e._v("TRIG_MODE=4")]),e._v(" (Mission controlled).")]),e._v(" "),r("li",[e._v("Leave the remaining parameters at their defaults.")])]),e._v(" "),r("p",[e._v('You will need to connect the Seagull MAP2 to FMU pins on your autopilot.\nThe other end of the MAP2 cable will go into the QX-1\'s "MULTI" port.')]),e._v(" "),r("h3",{attrs:{id:"camera-configuration-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#camera-configuration-2"}},[e._v("#")]),e._v(" Camera Configuration")]),e._v(" "),r("p",[e._v("We use a Sony QX-1 with a 16-50mm f3.5-5.6 lens for this example.")]),e._v(" "),r("p",[e._v("To avoid autofocus and metering lag when the camera is triggered, the following guidelines should be followed:")]),e._v(" "),r("ul",[r("li",[e._v("Manual focus to infinity")]),e._v(" "),r("li",[e._v("Set camera to continuous shooting mode")]),e._v(" "),r("li",[e._v("Manually set exposure and aperture")]),e._v(" "),r("li",[e._v("ISO should be set as low as possible")]),e._v(" "),r("li",[e._v("Manual white balance suitable for scene")])]),e._v(" "),r("h3",{attrs:{id:"mission-planning"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mission-planning"}},[e._v("#")]),e._v(" Mission Planning")]),e._v(" "),r("p",[r("img",{attrs:{src:a(1410),alt:"QGC Survey Polygon"}})]),e._v(" "),r("p",[r("img",{attrs:{src:a(1411),alt:"QGC Survey Parameters"}})]),e._v(" "),r("h3",{attrs:{id:"geotagging"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#geotagging"}},[e._v("#")]),e._v(" Geotagging")]),e._v(" "),r("p",[e._v("Download/copy the logfile and images from the flight and point QGroundControl to them.\nThen click on "),r("strong",[e._v("Start Tagging")]),e._v(".")]),e._v(" "),r("p",[r("img",{attrs:{src:a(1412),alt:"QGC Geotagging"}})]),e._v(" "),r("p",[e._v("You can verify the geotagging using a free online service like "),r("a",{attrs:{href:"https://www.pic2map.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Pic2Map"),r("OutboundLink")],1),e._v(".\nNote that Pic2Map is limited to only 40 images.")]),e._v(" "),r("h3",{attrs:{id:"reconstruction"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#reconstruction"}},[e._v("#")]),e._v(" Reconstruction")]),e._v(" "),r("p",[e._v("We use "),r("a",{attrs:{href:"https://pix4d.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Pix4D"),r("OutboundLink")],1),e._v(" for 3D reconstruction.")]),e._v(" "),r("p",[r("img",{attrs:{src:a(1413),alt:"GeoTag"}})]),e._v(" "),r("h2",{attrs:{id:"camera-imu-sync-example-vio"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#camera-imu-sync-example-vio"}},[e._v("#")]),e._v(" Camera-IMU sync example (VIO)")]),e._v(" "),r("p",[e._v("In this example, we will go over the basics of synchronising IMU measurements with visual data to build a stereo Visual-Inertial Navigation System (VINS).\nTo be clear, the idea here isn't to take an IMU measurement exactly at the same time as we take a picture but rather to correctly time stamp our images so as to provide accurate data to our VIO algorithm.")]),e._v(" "),r("p",[e._v("The autopilot and companion have different clock bases (boot-time for the autopilot and UNIX epoch for companion), so instead of skewing either clock, we directly observe the time offset between the clocks.\nThis offset is added or subtracted from the timestamps in the MAVLink messages (e.g. "),r("code",[e._v("HIGHRES_IMU")]),e._v(") in the cross-middleware translator component (e.g. MAVROS on the companion and "),r("code",[e._v("mavlink_receiver")]),e._v(" in PX4).\nThe actual synchronisation algorithm is a modified version of the Network Time Protocol (NTP) algorithm and uses an exponential moving average to smooth the tracked time offset.\nThis synchronisation is done automatically if MAVROS is used with a high-bandwidth onboard link (MAVLink mode "),r("code",[e._v("onboard")]),e._v(").")]),e._v(" "),r("p",[e._v("For acquiring synchronised image frames and inertial measurements, we connect the trigger inputs of the two cameras to a GPIO pin on the autopilot.\nThe timestamp of the inertial measurement from start of exposure and a image sequence number is recorded and sent to the companion computer ("),r("code",[e._v("CAMERA_TRIGGER")]),e._v(" message), which buffers these packets and the image frames acquired from the camera.\nThey are matched based on the sequence number (first image frame is sequence 0), the images timestamped (with the timestamp from the "),r("code",[e._v("CAMERA_TRIGGER")]),e._v(" message) and then published.")]),e._v(" "),r("p",[e._v("The following diagram illustrates the sequence of events which must happen in order to correctly timestamp our images.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://mermaid.live/edit#pako:eNqNUs9rwjAU_lceOW-3nXIQpIoIVkftZIdCeTbPNqxJXJI6ivi_L1Er6Dzs9kK-H3lfviOrjCDGmaPvjnRFE4m1RVVogKXxBFbWjQezg_fPN-CQS0Xgel3Bj_QNKDxY40A6EEYTYOeNQi8rbNs-SkTS62g04DgkqMgi5EG2JguWUPR_vaoLSlh5CKAb63reGuMdoBbR96Zwz7kzvQylcrXjPDFKBe71BYnR3po2ClzhkXnZNR1vFlJ_cR6GMkkn5WRV5tl8NptmZbJa5tlqEXmtMXuYBtMe4m05X-bTbDNegJJtKx1VRgv3NIybQTJOp9l4EH94zGMY99ugmqcfa49q_zyER3aKvmpg-G3QndqS_R_17AJSYU3n9PfdNuzXFJq0YC8sgBVKEbp0jHoF8w0pKhgPo6Addq0vWKFPARp7sg4lYtzbjl5Ytxfoh-oxvsPW0ekXb8TjxQ",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://mermaid.ink/img/pako:eNqNUs9rwjAU_lceOW-3nXIQpIoIVkftZIdCeTbPNqxJXJI6ivi_L1Er6Dzs9kK-H3lfviOrjCDGmaPvjnRFE4m1RVVogKXxBFbWjQezg_fPN-CQS0Xgel3Bj_QNKDxY40A6EEYTYOeNQi8rbNs-SkTS62g04DgkqMgi5EG2JguWUPR_vaoLSlh5CKAb63reGuMdoBbR96Zwz7kzvQylcrXjPDFKBe71BYnR3po2ClzhkXnZNR1vFlJ_cR6GMkkn5WRV5tl8NptmZbJa5tlqEXmtMXuYBtMe4m05X-bTbDNegJJtKx1VRgv3NIybQTJOp9l4EH94zGMY99ugmqcfa49q_zyER3aKvmpg-G3QndqS_R_17AJSYU3n9PfdNuzXFJq0YC8sgBVKEbp0jHoF8w0pKhgPo6Addq0vWKFPARp7sg4lYtzbjl5Ytxfoh-oxvsPW0ekXb8TjxQ?type=png",alt:"Mermaid sequence diagram"}}),r("OutboundLink")],1)]),e._v(" "),r("h3",{attrs:{id:"step-1"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#step-1"}},[e._v("#")]),e._v(" Step 1")]),e._v(" "),r("p",[e._v("First, set the TRIG_MODE to 1 to make the driver wait for the start command and reboot your FCU to obtain the remaining parameters.")]),e._v(" "),r("h3",{attrs:{id:"step-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#step-2"}},[e._v("#")]),e._v(" Step 2")]),e._v(" "),r("p",[e._v("For the purposes of this example we will be configuring the trigger to operate in conjunction with a Point Grey Firefly MV camera running at 30 FPS.")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("TRIG_INTERVAL")]),e._v(": 33.33 ms")]),e._v(" "),r("li",[r("code",[e._v("TRIG_POLARITY")]),e._v(": 0 (active low)")]),e._v(" "),r("li",[r("code",[e._v("TRIG_ACT_TIME")]),e._v(": 0.5 ms.\nThe manual specifies it only has to be a minimum of 1 microsecond.")]),e._v(" "),r("li",[r("code",[e._v("TRIG_MODE")]),e._v(": 1, because we want our camera driver to be ready to receive images before starting to trigger.\nThis is essential to properly process sequence numbers.")])]),e._v(" "),r("h3",{attrs:{id:"step-3"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#step-3"}},[e._v("#")]),e._v(" Step 3")]),e._v(" "),r("p",[e._v("Wire up your cameras to your AUX port by connecting the ground and signal pins to the appropriate place.")]),e._v(" "),r("h3",{attrs:{id:"step-4"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#step-4"}},[e._v("#")]),e._v(" Step 4")]),e._v(" "),r("p",[e._v("You will have to modify your driver to follow the sequence diagram above.\nPublic reference implementations for "),r("a",{attrs:{href:"https://github.com/ProjectArtemis/ueye_cam",target:"_blank",rel:"noopener noreferrer"}},[e._v("IDS Imaging UEye"),r("OutboundLink")],1),e._v(" cameras and for "),r("a",{attrs:{href:"https://github.com/andre-nguyen/camera1394",target:"_blank",rel:"noopener noreferrer"}},[e._v("IEEE1394 compliant"),r("OutboundLink")],1),e._v(" cameras are available.")])])}),[],!1,null,null,null);t.default=n.exports}}]);