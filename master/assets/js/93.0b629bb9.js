(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{1222:function(e,t,a){e.exports=a.p+"assets/img/trigger_pins.87ed0f77.png"},1223:function(e,t,a){e.exports=a.p+"assets/img/seagull_sync2.5b9a14dd.png"},1224:function(e,t,a){e.exports=a.p+"assets/img/qgc_test_camera.062e3c2b.png"},1225:function(e,t,a){e.exports=a.p+"assets/img/photogrammetry.4b5c0077.png"},1226:function(e,t,a){e.exports=a.p+"assets/img/qgc_survey_polygon.97788c03.jpeg"},1227:function(e,t,a){e.exports=a.p+"assets/img/qgc_survey_parameters.dbf2bf87.jpg"},1228:function(e,t,a){e.exports=a.p+"assets/img/qgc_geotag.f7b0a365.png"},1229:function(e,t,a){e.exports=a.p+"assets/img/geotag.2d9fb330.jpg"},1230:function(e,t,a){e.exports=a.p+"assets/img/sequence_diagram.2624c5c0.jpg"},1946:function(e,t,a){"use strict";a.r(t);var r=a(19),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"camera-trigger"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#camera-trigger"}},[e._v("#")]),e._v(" Camera Trigger")]),e._v(" "),r("p",[e._v("The camera trigger driver allows the use of the AUX ports to send out pulses in order to trigger a camera.")]),e._v(" "),r("p",[e._v("In addition to a pulse being sent out, the MAVLink "),r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#CAMERA_TRIGGER",target:"_blank",rel:"noopener noreferrer"}},[e._v("CAMERA_TRIGGER"),r("OutboundLink")],1),e._v(" message is published containing a sequence number (i.e. the current session's image sequence number) and the corresponding timestamp.\nThis timestamp can be used for several applications, including: timestamping photos for aerial surveying and reconstruction, synchronising a multi-camera system or visual-inertial navigation.")]),e._v(" "),r("p",[e._v("Cameras can also (optionally) use the flight controller "),r("a",{attrs:{href:"#camera-capture"}},[e._v("camera capture pin")]),e._v(" to signal the exact moment that a photo/frame is taken.\nThis allows more precise mapping of images to GPS position for geotagging, or the right IMU sample for VIO synchronization, etc.")]),e._v(" "),r("h2",{attrs:{id:"trigger-configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#trigger-configuration"}},[e._v("#")]),e._v(" Trigger Configuration")]),e._v(" "),r("p",[e._v("Camera triggering is usually configured from the "),r("em",[e._v("QGroundControl")]),e._v(" "),r("a",{attrs:{href:"https://docs.qgroundcontrol.com/en/SetupView/Camera.html#px4-camera-setup",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vehicle Setup > Camera"),r("OutboundLink")],1),e._v(" section.")]),e._v(" "),r("p",[r("img",{attrs:{src:a(1222),alt:"Trigger pins"}})]),e._v(" "),r("p",[e._v("The different "),r("a",{attrs:{href:"#trigger-modes"}},[e._v("trigger modes")]),e._v(", "),r("a",{attrs:{href:"#trigger-interface-backends"}},[e._v("backend interfaces")]),e._v(" and "),r("a",{attrs:{href:"#trigger-hardware-configuration"}},[e._v("hardware setup")]),e._v(" are described below (these can also be set directly from "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameters.html"}},[e._v("parameters")]),e._v(").")],1),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),r("p",[e._v("The camera settings section is not available by default for FMUv2-based flight controllers (e.g. 3DR Pixhawk) because the camera module is not automatically included in firmware.\nFor more information see "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameters.html#parameter-not-in-firmware"}},[e._v("Finding/Updating Parameters > Parameters Not In Firmware")]),e._v(".")],1)]),e._v(" "),r("h2",{attrs:{id:"trigger-modes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#trigger-modes"}},[e._v("#")]),e._v(" Trigger Modes")]),e._v(" "),r("p",[e._v("Four different modes are supported, controlled by the "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#TRIG_MODE"}},[e._v("TRIG_MODE")]),e._v(" parameter:")],1),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Mode")]),e._v(" "),r("th",[e._v("Description")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("0")]),e._v(" "),r("td",[e._v("Camera triggering is disabled.")])]),e._v(" "),r("tr",[r("td",[e._v("1")]),e._v(" "),r("td",[e._v("Works like a basic intervalometer that can be enabled and disabled by using the MAVLink command "),r("code",[e._v("MAV_CMD_DO_TRIGGER_CONTROL")]),e._v(". See "),r("a",{attrs:{href:"#command-interface"}},[e._v("command interface")]),e._v(" for more details.")])]),e._v(" "),r("tr",[r("td",[e._v("2")]),e._v(" "),r("td",[e._v("Switches the intervalometer constantly on.")])]),e._v(" "),r("tr",[r("td",[e._v("3")]),e._v(" "),r("td",[e._v("Triggers based on distance. A shot is taken every time the set horizontal distance is exceeded. The minimum time interval between two shots is however limited by the set triggering interval.")])]),e._v(" "),r("tr",[r("td",[e._v("4")]),e._v(" "),r("td",[e._v("triggers automatically when flying a survey in Mission mode.")])])])]),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),r("p",[e._v("If it is your first time enabling the camera trigger app, remember to reboot after changing the "),r("code",[e._v("TRIG_MODE")]),e._v(" parameter.")])]),e._v(" "),r("h2",{attrs:{id:"trigger-hardware-configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#trigger-hardware-configuration"}},[e._v("#")]),e._v(" Trigger Hardware Configuration")]),e._v(" "),r("p",[e._v("The pins used to trigger image capture for GPIO, PWM or Seagull-based triggering (i.e. when not using a MAVLink camera) are set using the "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#TRIG_PINS"}},[e._v("TRIG_PINS")]),e._v(" parameter.\nThe default is 56, which means that trigger is enabled on "),r("em",[e._v("FMU")]),e._v(" pins 5 and 6.")],1),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),r("p",[e._v("On a Pixhawk flight controller that has both FMU and I/O boards these FMU pins map to "),r("code",[e._v("AUX5")]),e._v(" and "),r("code",[e._v("AUX6")]),e._v(" (e.g. Pixhawk 4, CUAV v5+).\nOn a controller that only has an FMU, the pins map to "),r("code",[e._v("MAIN5")]),e._v(" and "),r("code",[e._v("MAIN6")]),e._v(" (e.g. Pixhawk 4 mini, CUAV v5 nano).\nAt time of writing triggering only works on FMU pins - you can't trigger a camera using pins on the I/O board.")])]),e._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),r("p",[e._v("With "),r("code",[e._v("TRIG_PINS=56")]),e._v(" (default) you can use the AUX pins 1 to 4 as actuator outputs (for servos/ESCs).\nWith "),r("code",[e._v("TRIG_PINS=78")]),e._v(", you can use the AUX pins 1-6 as actuator outputs.\nAny other combination of pins can be selected, but this will disable use of the other FMU pins as outputs.")])]),e._v(" "),r("h2",{attrs:{id:"trigger-interface-backends"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#trigger-interface-backends"}},[e._v("#")]),e._v(" Trigger Interface Backends")]),e._v(" "),r("p",[e._v("The camera trigger driver supports several backends - each for a specific application, controlled by the "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#TRIG_INTERFACE"}},[e._v("TRIG_INTERFACE")]),e._v(" parameter:")],1),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Number")]),e._v(" "),r("th",[e._v("Description")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("1")]),e._v(" "),r("td",[e._v("enables the GPIO interface. The AUX outputs are pulsed high or low (depending on the "),r("code",[e._v("TRIG_POLARITY")]),e._v(" parameter) every "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#TRIG_INTERVAL"}},[e._v("TRIG_INTERVAL")]),e._v(" duration. This can be used to trigger most standard machine vision cameras directly. Note that on PX4FMU series hardware (Pixhawk, Pixracer, etc.), the signal level on the AUX pins is 3.3v.")],1)]),e._v(" "),r("tr",[r("td",[e._v("2")]),e._v(" "),r("td",[e._v("Enables the Seagull MAP2 interface. This allows the use of the "),r("a",{attrs:{href:"http://www.seagulluav.com/product/seagull-map2/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Seagull MAP2"),r("OutboundLink")],1),e._v(" to interface to a multitude of supported cameras. Pin/Channel 1 (camera trigger) and Pin/Channel 2 (mode selector) of the MAP2 should be connected to the lower and higher AUX pins of "),r("code",[e._v("TRIG_PINS")]),e._v(", respectively (therefore, channel/pin 1 to AUX 5 and channel/pin 2 to AUX 6 by default). Using Seagull MAP2, PX4 also supports automatic power control and keep-alive functionalities of Sony Multiport cameras like the QX-1.")])]),e._v(" "),r("tr",[r("td",[e._v("3")]),e._v(" "),r("td",[e._v("Enables the MAVLink interface. In this mode, no actual hardware output is used. Only the "),r("code",[e._v("CAMERA_TRIGGER")]),e._v(" MAVLink message is sent by the autopilot (by default, if the MAVLink application is in "),r("code",[e._v("onboard")]),e._v(" mode. Otherwise, a custom stream will need to be enabled).")])]),e._v(" "),r("tr",[r("td",[e._v("4")]),e._v(" "),r("td",[e._v("Enables the generic PWM interface. This allows the use of "),r("a",{attrs:{href:"https://hobbyking.com/en_us/universal-remote-control-infrared-shutter-ir-rc-1g.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("infrared triggers"),r("OutboundLink")],1),e._v(" or servos to trigger your camera. The trigger signal is duplicated on both pins specified using "),r("code",[e._v("TRIG_PINS")]),e._v(".")])])])]),e._v(" "),r("h2",{attrs:{id:"other-parameters"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#other-parameters"}},[e._v("#")]),e._v(" Other Parameters")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Parameter")]),e._v(" "),r("th",[e._v("Description")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#TRIG_POLARITY"}},[e._v("TRIG_POLARITY")])],1),e._v(" "),r("td",[e._v("Relevant only while using the GPIO interface. Sets the polarity of the trigger pin. Active high means that the pin is pulled low normally and pulled high on a trigger event. Active low is vice-versa.")])]),e._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#TRIG_INTERVAL"}},[e._v("TRIG_INTERVAL")])],1),e._v(" "),r("td",[e._v("Defines the time between two consecutive trigger events in milliseconds.")])]),e._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#TRIG_ACT_TIME"}},[e._v("TRIG_ACT_TIME")])],1),e._v(" "),r("td",[e._v('Defines the time in milliseconds the trigger pin is held in the "active" state before returning to neutral. In PWM modes, the minimum is limited to 40 ms to make sure we always fit an activate pulse into the 50Hz PWM signal.')])])])]),e._v(" "),r("p",[e._v("The full list of parameters pertaining to the camera trigger module can be found on the "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#camera-trigger"}},[e._v("parameter reference")]),e._v(" page.")],1),e._v(" "),r("h2",{attrs:{id:"camera-capture"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#camera-capture"}},[e._v("#")]),e._v(" Camera Capture")]),e._v(" "),r("p",[e._v("Cameras can also (optionally) use the flight controller camera capture pin to signal the exact moment when a photo/frame is taken.\nThis allows more precise mapping of images to GPS position for geotagging, or the right IMU sample for VIO synchronization, etc.")]),e._v(" "),r("p",[e._v("Camera capture/feedback is enabled in PX4 by setting "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#CAM_CAP_FBACK"}},[e._v("CAM_CAP_FBACK = 1")]),e._v(".\nThe capture pin used depends on the hardware:")],1),e._v(" "),r("ul",[r("li",[e._v("Pixhawk FMUv5x boards use the board-specific camera capture pin (PI0).")]),e._v(" "),r("li",[e._v("Other board use FMU PWM pin 6 (hardcoded) for camera capture.")])]),e._v(" "),r("p",[e._v("PX4 detects a rising edge with the appropriate voltage level on the camera capture pin (for Pixhawk flight controllers this is normally 3.3V).\nIf the camera isn't outputing an appropriate voltage, then additional circuitry will be required to make the signal compatible.")]),e._v(" "),r("p",[e._v("Cameras that have a hotshoe connector (for connecting a flash) can usually be connected via a hotshoe-adaptor.\nFor example, the "),r("a",{attrs:{href:"https://www.seagulluav.com/product/seagull-sync2/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Seagull #SYNC2 Universal Camera Hot Shoe Adapter"),r("OutboundLink")],1),e._v(" is an optocoupler that decouples and shifts the flash voltage to the Pixhawk voltage.\nThis slides into the flash slot on the top of the camera.\nThe red and black ouptputs are connected to the servo rail/ground and the white wire is connected to the input capture pin.")]),e._v(" "),r("p",[r("img",{attrs:{src:a(1223),alt:"Seagull SYNC#2"}})]),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),r("p",[e._v("PX4 emits the MAVLink "),r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#CAMERA_TRIGGER",target:"_blank",rel:"noopener noreferrer"}},[e._v("CAMERA_TRIGGER"),r("OutboundLink")],1),e._v(" message on both camera trigger and camera capture.\nIf camera capture is configured, the timestamp from the camera capture driver is used, otherwise the triggering timestamp.")])]),e._v(" "),r("h2",{attrs:{id:"command-interface"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#command-interface"}},[e._v("#")]),e._v(" Command Interface")]),e._v(" "),r("p",[r("strong",[e._v("TODO : NEEDS UPDATING updating")])]),e._v(" "),r("p",[e._v("The camera trigger driver supports several commands:")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_DO_TRIGGER_CONTROL",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAV_CMD_DO_TRIGGER_CONTROL"),r("OutboundLink")],1),e._v(' - Accepted in "command controlled" mode ('),r("code",[e._v("TRIG_MODE")]),e._v(" 1).")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Command Parameter")]),e._v(" "),r("th",[e._v("Description")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("Param #1")]),e._v(" "),r("td",[e._v("Trigger enable/disable (set to 0 for disable, 1 for start)")])]),e._v(" "),r("tr",[r("td",[e._v("Param #2")]),e._v(" "),r("td",[e._v("Trigger cycle time in milliseconds (sets the "),r("code",[e._v("TRIG_INTERVAL")]),e._v(" parameter.)")])]),e._v(" "),r("tr",[r("td",[e._v("Param #3")]),e._v(" "),r("td",[e._v("Sequence reset (set to 1 to reset image sequence number, 0 to keep current sequence number)")])])])]),e._v(" "),r("p",[r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_DO_DIGICAM_CONTROL",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAV_CMD_DO_DIGICAM_CONTROL"),r("OutboundLink")],1),e._v(" - Accepted in all modes.\nThis is used by the GCS to test-shoot the camera from the user interface.\nThe trigger driver does not yet support all camera control parameters defined by the MAVLink spec.")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Command Parameter")]),e._v(" "),r("th",[e._v("Description")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("Param #5")]),e._v(" "),r("td",[e._v("Trigger one-shot command (set to 1 to trigger a single image frame).")])])])]),e._v(" "),r("p",[r("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_CMD_DO_SET_CAM_TRIGG_DIST",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAV_CMD_DO_SET_CAM_TRIGG_DIST"),r("OutboundLink")],1),e._v(' - Accepted in "mission controlled" mode ('),r("code",[e._v("TRIG_MODE")]),e._v(" 4)")]),e._v(" "),r("p",[e._v("This command is autogenerated during missions to trigger the camera based on survey missions from the GCS.")]),e._v(" "),r("h2",{attrs:{id:"testing-trigger-functionality"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#testing-trigger-functionality"}},[e._v("#")]),e._v(" Testing Trigger Functionality")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("On the PX4 console:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("camera_trigger test\n")])])])]),e._v(" "),r("li",[r("p",[e._v("From "),r("em",[e._v("QGroundControl")]),e._v(":")]),e._v(" "),r("p",[e._v("Click on "),r("strong",[e._v("Trigger Camera")]),e._v(" in the main instrument panel.\nThese shots are not logged or counted for geotagging.")]),e._v(" "),r("p",[r("img",{attrs:{src:a(1224),alt:"QGC Test Camera"}})])])]),e._v(" "),r("h2",{attrs:{id:"sony-qx-1-example-photogrammetry"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sony-qx-1-example-photogrammetry"}},[e._v("#")]),e._v(" Sony QX-1 example (Photogrammetry)")]),e._v(" "),r("p",[r("img",{attrs:{src:a(1225),alt:"photogrammetry"}})]),e._v(" "),r("p",[e._v("In this example, we will use a Seagull MAP2 trigger cable to interface to a Sony QX-1 and use the setup to create orthomosaics after flying a fully autonomous survey mission.")]),e._v(" "),r("h3",{attrs:{id:"trigger-settings"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#trigger-settings"}},[e._v("#")]),e._v(" Trigger Settings")]),e._v(" "),r("p",[e._v("The recommended camera settings are:")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("TRIG_INTERFACE=2")]),e._v(" (Seagull MAP2).")]),e._v(" "),r("li",[r("code",[e._v("TRIG_MODE=4")]),e._v(" (Mission controlled).")]),e._v(" "),r("li",[e._v("Leave the remaining parameters at their defaults.")])]),e._v(" "),r("p",[e._v("You will need to connect the Seagull MAP2 to the auxiliary/FMU pins on your autopilot.\nPin 1 goes to "),r("code",[e._v("AUX 5")]),e._v(", and Pin 2 to "),r("code",[e._v("AUX 6")]),e._v('.\nThe other end of the MAP2 cable will go into the QX-1\'s "MULTI" port.')]),e._v(" "),r("h3",{attrs:{id:"camera-configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#camera-configuration"}},[e._v("#")]),e._v(" Camera Configuration")]),e._v(" "),r("p",[e._v("We use a Sony QX-1 with a 16-50mm f3.5-5.6 lens for this example.")]),e._v(" "),r("p",[e._v("To avoid autofocus and metering lag when the camera is triggered, the following guidelines should be followed:")]),e._v(" "),r("ul",[r("li",[e._v("Manual focus to infinity")]),e._v(" "),r("li",[e._v("Set camera to continuous shooting mode")]),e._v(" "),r("li",[e._v("Manually set exposure and aperture")]),e._v(" "),r("li",[e._v("ISO should be set as low as possible")]),e._v(" "),r("li",[e._v("Manual white balance suitable for scene")])]),e._v(" "),r("h3",{attrs:{id:"mission-planning"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mission-planning"}},[e._v("#")]),e._v(" Mission Planning")]),e._v(" "),r("p",[r("img",{attrs:{src:a(1226),alt:"QGC Survey Polygon"}})]),e._v(" "),r("p",[r("img",{attrs:{src:a(1227),alt:"QGC Survey Parameters"}})]),e._v(" "),r("h3",{attrs:{id:"geotagging"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#geotagging"}},[e._v("#")]),e._v(" Geotagging")]),e._v(" "),r("p",[e._v('Download/copy the logfile and images from the flight and point QGroundControl to them. Then click on "Start Tagging".')]),e._v(" "),r("p",[r("img",{attrs:{src:a(1228),alt:"QGC Geotagging"}})]),e._v(" "),r("p",[e._v("You can verify the geotagging using a free online service like "),r("a",{attrs:{href:"https://www.pic2map.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Pic2Map"),r("OutboundLink")],1),e._v(".\nNote that Pic2Map is limited to only 40 images.")]),e._v(" "),r("h3",{attrs:{id:"reconstruction"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#reconstruction"}},[e._v("#")]),e._v(" Reconstruction")]),e._v(" "),r("p",[e._v("We use "),r("a",{attrs:{href:"https://pix4d.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Pix4D"),r("OutboundLink")],1),e._v(" for 3D reconstruction.")]),e._v(" "),r("p",[r("img",{attrs:{src:a(1229),alt:"GeoTag"}})]),e._v(" "),r("h2",{attrs:{id:"camera-imu-sync-example-vio"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#camera-imu-sync-example-vio"}},[e._v("#")]),e._v(" Camera-IMU sync example (VIO)")]),e._v(" "),r("p",[e._v("In this example, we will go over the basics of synchronising IMU measurements with visual data to build a stereo Visual-Inertial Navigation System (VINS).\nTo be clear, the idea here isn't to take an IMU measurement exactly at the same time as we take a picture but rather to correctly time stamp our images so as to provide accurate data to our VIO algorithm.")]),e._v(" "),r("p",[e._v("The autopilot and companion have different clock bases (boot-time for the autopilot and UNIX epoch for companion), so instead of skewing either clock, we directly observe the time offset between the clocks.\nThis offset is added or subtracted from the timestamps in the MAVLink messages (e.g "),r("code",[e._v("HIGHRES_IMU")]),e._v(") in the cross-middleware translator component (e.g MAVROS on the companion and "),r("code",[e._v("mavlink_receiver")]),e._v(" in PX4).\nThe actual synchronisation algorithm is a modified version of the Network Time Protocol (NTP) algorithm and uses an exponential moving average to smooth the tracked time offset.\nThis synchronisation is done automatically if MAVROS is used with a high-bandwidth onboard link (MAVLink mode "),r("code",[e._v("onboard")]),e._v(").")]),e._v(" "),r("p",[e._v("For acquiring synchronised image frames and inertial measurements, we connect the trigger inputs of the two cameras to a GPIO pin on the autopilot.\nThe timestamp of the inertial measurement from start of exposure and a image sequence number is recorded and sent to the companion computer ("),r("code",[e._v("CAMERA_TRIGGER")]),e._v(" message), which buffers these packets and the image frames acquired from the camera.\nThey are matched based on the sequence number (first image frame is sequence 0), the images timestamped (with the timestamp from the "),r("code",[e._v("CAMERA_TRIGGER")]),e._v(" message) and then published.")]),e._v(" "),r("p",[e._v("The following diagram illustrates the sequence of events which must happen in order to correctly timestamp our images.")]),e._v(" "),r("p",[r("img",{attrs:{src:a(1230),alt:"Sequence diag"}})]),e._v(" "),r("h3",{attrs:{id:"step-1"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#step-1"}},[e._v("#")]),e._v(" Step 1")]),e._v(" "),r("p",[e._v("First, set the TRIG_MODE to 1 to make the driver wait for the start command and reboot your FCU to obtain the remaining parameters.")]),e._v(" "),r("h3",{attrs:{id:"step-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#step-2"}},[e._v("#")]),e._v(" Step 2")]),e._v(" "),r("p",[e._v("For the purposes of this example we will be configuring the trigger to operate in conjunction with a Point Grey Firefly MV camera running at 30 FPS.")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("TRIG_INTERVAL")]),e._v(": 33.33 ms")]),e._v(" "),r("li",[r("code",[e._v("TRIG_POLARITY")]),e._v(": 0 (active low)")]),e._v(" "),r("li",[r("code",[e._v("TRIG_ACT_TIME")]),e._v(": 0.5 ms. The manual specifies it only has to be a minimum of 1 microsecond.")]),e._v(" "),r("li",[r("code",[e._v("TRIG_MODE")]),e._v(": 1, because we want our camera driver to be ready to receive images before starting to trigger. This is essential to properly process sequence numbers.")]),e._v(" "),r("li",[r("code",[e._v("TRIG_PINS")]),e._v(": 56, Leave default.")])]),e._v(" "),r("h3",{attrs:{id:"step-3"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#step-3"}},[e._v("#")]),e._v(" Step 3")]),e._v(" "),r("p",[e._v("Wire up your cameras to your AUX port by connecting the ground and signal pins to the appropriate place.")]),e._v(" "),r("h3",{attrs:{id:"step-4"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#step-4"}},[e._v("#")]),e._v(" Step 4")]),e._v(" "),r("p",[e._v("You will have to modify your driver to follow the sequence diagram above.\nPublic reference implementations for "),r("a",{attrs:{href:"https://github.com/ProjectArtemis/ueye_cam",target:"_blank",rel:"noopener noreferrer"}},[e._v("IDS Imaging UEye"),r("OutboundLink")],1),e._v(" cameras and for "),r("a",{attrs:{href:"https://github.com/andre-nguyen/camera1394",target:"_blank",rel:"noopener noreferrer"}},[e._v("IEEE1394 compliant"),r("OutboundLink")],1),e._v(" cameras are available.")])])}),[],!1,null,null,null);t.default=o.exports}}]);