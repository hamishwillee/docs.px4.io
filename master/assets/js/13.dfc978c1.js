(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{1438:function(t,e,r){t.exports=r.p+"assets/img/11b_escs.12a6e2ae.jpg"},1439:function(t,e,r){t.exports=r.p+"assets/img/select_airframe.0118b22b.png"},1704:function(t,e,r){"use strict";r.r(e);var o=r(19),a=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"holybro-qav250-pixhawk4-mini-build"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#holybro-qav250-pixhawk4-mini-build"}},[t._v("#")]),t._v(" HolyBro QAV250 + Pixhawk4-Mini Build")]),t._v(" "),o("p",[t._v("The "),o("a",{attrs:{href:"https://shop.holybro.com/pixhawk-4-mini-qav250-kit_p1125.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Holybro Pixhawk 4 Mini QAV250 Kit"),o("OutboundLink")],1),t._v(" is a great way to start working with Pixhawk 4.\nThe kit includes a carbon-fibre QAV250 racing frame, "),o("em",[t._v("Pixhawk 4 Mini")]),t._v(", and almost all other components needed (except battery and receiver).\nThere are variants of the kit both with and without FPV support.")]),t._v(" "),o("p",[t._v("This topic provides full instructions for building the kit and configuring PX4 using "),o("em",[t._v("QGroundControl")]),t._v(".")]),t._v(" "),o("p",[t._v("Key information")]),t._v(" "),o("ul",[o("li",[o("strong",[t._v("Frame:")]),t._v(" Holybro QAV250")]),t._v(" "),o("li",[o("strong",[t._v("Flight controller:")]),t._v(" "),o("RouterLink",{attrs:{to:"/en/flight_controller/pixhawk4_mini.html"}},[t._v("Pixhawk 4 Mini")])],1),t._v(" "),o("li",[o("strong",[t._v("Assembly time (approx.):")]),t._v(" 3.5 hours (2 for frame, 1.5 autopilot installation/configuration)")])]),t._v(" "),o("p",[o("img",{attrs:{src:r(968),alt:"Assembled Holybro QAV250 with Pixhawk4 Mini"}})]),t._v(" "),o("h2",{attrs:{id:"quickstart-guide"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#quickstart-guide"}},[t._v("#")]),t._v(" Quickstart Guide")]),t._v(" "),o("p",[o("a",{attrs:{href:"https://github.com/PX4/px4_user_guide/raw/master/assets/flight_controller/pixhawk4mini/pixhawk4mini_qav250kit_quickstart_web.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk 4 Mini QAV250 Kit Quickstart Guide"),o("OutboundLink")],1)]),t._v(" "),o("h2",{attrs:{id:"bill-of-materials"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#bill-of-materials"}},[t._v("#")]),t._v(" Bill of materials")]),t._v(" "),o("p",[t._v("The Holybro "),o("a",{attrs:{href:"https://shop.holybro.com/pixhawk-4-mini-qav250-kit_p1125.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pixhawk 4 Mini QAV250 Kit"),o("OutboundLink")],1),t._v(" includes almost all required components:")]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/en/flight_controller/pixhawk4_mini.html"}},[t._v("Pixhawk 4 Mini")])],1),t._v(" "),o("li",[o("a",{attrs:{href:"https://shop.holybro.com/transceiver-telemetry-radio-v3_p1103.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Holybro Telemetry Radio V3"),o("OutboundLink")],1)]),t._v(" "),o("li",[t._v("Power module holybro")]),t._v(" "),o("li",[t._v("Fully assembled Power Management Board with ESCs")]),t._v(" "),o("li",[t._v("Motors - DR2205 KV2300")]),t._v(" "),o("li",[t._v("5” Plastic Props")]),t._v(" "),o("li",[t._v("Carbon fiber 250 airframe with hardware")]),t._v(" "),o("li",[t._v("Foxer camera")]),t._v(" "),o("li",[t._v("Vtx 5.8ghz")])]),t._v(" "),o("p",[t._v("Additionally you will need a battery and receiver (+compatible transmitter).\nThis build uses:")]),t._v(" "),o("ul",[o("li",[t._v("Receiver: "),o("a",{attrs:{href:"http://www.getfpv.com/radios/receivers/frsky-d4r-ii-4ch-2-4ghz-accst-receiver-w-telemetry.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("FR SKY D4R-II"),o("OutboundLink")],1)]),t._v(" "),o("li",[t._v("Battery: "),o("a",{attrs:{href:"http://www.getfpv.com/lumenier-1300mah-4s-60c-lipo-battery-xt60.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("4S 1300 mAh"),o("OutboundLink")],1)])]),t._v(" "),o("h2",{attrs:{id:"hardware"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#hardware"}},[t._v("#")]),t._v(" Hardware")]),t._v(" "),o("p",[t._v("This section lists all hardware for the frame and the autopilot installation.")]),t._v(" "),o("h3",{attrs:{id:"frame-qav250"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#frame-qav250"}},[t._v("#")]),t._v(" Frame QAV250")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("Description")]),t._v(" "),o("th",[t._v("Quantity")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("Unibody frame plate")]),t._v(" "),o("td",[t._v("1")])]),t._v(" "),o("tr",[o("td",[t._v("Flight controller cover plate")]),t._v(" "),o("td",[t._v("1")])]),t._v(" "),o("tr",[o("td",[t._v("PDB")]),t._v(" "),o("td",[t._v("1")])]),t._v(" "),o("tr",[o("td",[t._v("Camera plate")]),t._v(" "),o("td",[t._v("1")])]),t._v(" "),o("tr",[o("td",[t._v("35mm standoffs")]),t._v(" "),o("td",[t._v("6")])]),t._v(" "),o("tr",[o("td",[t._v("Vinyl screws and nuts")]),t._v(" "),o("td",[t._v("4")])]),t._v(" "),o("tr",[o("td",[t._v("15mm steel screws")]),t._v(" "),o("td",[t._v("8")])]),t._v(" "),o("tr",[o("td",[t._v("Steel nuts")]),t._v(" "),o("td",[t._v("8")])]),t._v(" "),o("tr",[o("td",[t._v("7mm steel screws")]),t._v(" "),o("td",[t._v("12")])]),t._v(" "),o("tr",[o("td",[t._v("Velcro battery strap")]),t._v(" "),o("td",[t._v("1")])]),t._v(" "),o("tr",[o("td",[t._v("Foam for battery")]),t._v(" "),o("td",[t._v("1")])]),t._v(" "),o("tr",[o("td",[t._v("Landing pads")]),t._v(" "),o("td",[t._v("4")])])])]),t._v(" "),o("p",[o("img",{attrs:{src:r(969),alt:"QAV250 components for frame"}})]),t._v(" "),o("h3",{attrs:{id:"electronics"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#electronics"}},[t._v("#")]),t._v(" Electronics")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("Description")]),t._v(" "),o("th",[t._v("Quantity")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("Motors - DR2205 KV2300")]),t._v(" "),o("td",[t._v("4")])]),t._v(" "),o("tr",[o("td",[t._v("Fully assembled Power Management Board with ESCs")]),t._v(" "),o("td",[t._v("4")])]),t._v(" "),o("tr",[o("td",[t._v("Holybro power module")]),t._v(" "),o("td",[t._v("1")])]),t._v(" "),o("tr",[o("td",[t._v("Fr-sky D4R-II receiver")]),t._v(" "),o("td",[t._v("1")])]),t._v(" "),o("tr",[o("td",[t._v("Pixhawk 4 mini")]),t._v(" "),o("td",[t._v("1")])]),t._v(" "),o("tr",[o("td",[t._v("Holybro GPS Neo-M8N")]),t._v(" "),o("td",[t._v("1")])]),t._v(" "),o("tr",[o("td",[t._v("Holybro "),o("a",{attrs:{href:"https://shop.holybro.com/transceiver-telemetry-radio-v3_p1103.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Holybro Telemetry Radio V3"),o("OutboundLink")],1)]),t._v(" "),o("td",[t._v("1")])]),t._v(" "),o("tr",[o("td",[t._v("Battery lumenier 1300 mAh 4S 14.8V")]),t._v(" "),o("td",[t._v("1")])]),t._v(" "),o("tr",[o("td",[t._v("Vtx 5.8gHz")]),t._v(" "),o("td",[t._v("1")])]),t._v(" "),o("tr",[o("td",[t._v("FPV camera (Complete Kit - only)")]),t._v(" "),o("td",[t._v("1")])])])]),t._v(" "),o("p",[t._v("The image below shows both frame and electronic components.")]),t._v(" "),o("p",[o("img",{attrs:{src:r(970),alt:"QAV250 Frame/Pixhawk 4 Mini Electronics before assembly"}})]),t._v(" "),o("h2",{attrs:{id:"assembly"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#assembly"}},[t._v("#")]),t._v(" Assembly")]),t._v(" "),o("p",[t._v("Estimated time to assemble frame is 2 hours and 1.5 hours installing the autopilot and configuring the airframe in "),o("em",[t._v("QGroundControl")]),t._v(".")]),t._v(" "),o("h3",{attrs:{id:"tools-needed"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#tools-needed"}},[t._v("#")]),t._v(" Tools needed")]),t._v(" "),o("p",[t._v("The following tools are used in this assembly:")]),t._v(" "),o("ul",[o("li",[t._v("2.0mm Hex screwdriver")]),t._v(" "),o("li",[t._v("3mm Phillips screwdriver")]),t._v(" "),o("li",[t._v("Wire cutters")]),t._v(" "),o("li",[t._v("Precision tweezers")])]),t._v(" "),o("p",[o("img",{attrs:{src:r(971),alt:"Tools required for assembling QAV250"}})]),t._v(" "),o("h3",{attrs:{id:"frame-assembly"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#frame-assembly"}},[t._v("#")]),t._v(" Frame assembly")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("Attach arms to the button plate with the 15mm screws as shown:")]),t._v(" "),o("p",[o("img",{attrs:{src:r(972),alt:"QAV250 Add arms to button plate"}})])]),t._v(" "),o("li",[o("p",[t._v("Put the short plate over the arms")]),t._v(" "),o("p",[o("img",{attrs:{src:r(973),alt:"QAV250 Add short plate over arms"}})])]),t._v(" "),o("li",[o("p",[t._v("Put the nuts on the 15mm screws (shown next step)")])]),t._v(" "),o("li",[o("p",[t._v("Insert the plastic screws into the indicated holes (note that this part of the frame faces down when the vehicle is complete).\n"),o("img",{attrs:{src:r(974),alt:"QAV250 Add nuts to 15mm screws and put  plastic nuts in holes"}})])]),t._v(" "),o("li",[o("p",[t._v("Add the plastic nuts to the screws (turn over, as shown)\n"),o("img",{attrs:{src:r(975),alt:"QAV250 Plastic nuts onto screws"}})])]),t._v(" "),o("li",[o("p",[t._v("Lower the power module over the plastic screws and then add the plastics standoffs\n"),o("img",{attrs:{src:r(976),alt:"QAV250 Add power module and standoffs"}})])]),t._v(" "),o("li",[o("p",[t._v("Put the flight controller plate on the standoffs (over the power module)\n"),o("img",{attrs:{src:r(977),alt:"QAV250 Add flight controller plate"}})])]),t._v(" "),o("li",[o("p",[t._v("Attach the motors. The motors have an arrow indicating the direction of rotation.\n"),o("img",{attrs:{src:r(978),alt:"QAV250 Add motors"}})])]),t._v(" "),o("li",[o("p",[t._v("Use double sided tape from kit to attach the "),o("em",[t._v("Pixhawk 4 Mini")]),t._v(" to the flight controller plate.\n"),o("img",{attrs:{src:r(979),alt:"QAV250 Add doublesided tape"}})])]),t._v(" "),o("li",[o("p",[t._v('Connect the power module\'s "power" cable to '),o("em",[t._v("Pixhawk 4 mini")]),t._v(".\n"),o("img",{attrs:{src:r(980),alt:"QAV250 Power Pixhawk"}})])]),t._v(" "),o("li",[o("p",[t._v("Attach the aluminium standoffs to the button plate\n"),o("img",{attrs:{src:r(981),alt:"QAV250 Aluminium standoffs"}})])]),t._v(" "),o("li",[o("p",[t._v("Connect the Esc’s with the motors and hold. In this image shown the order of the motors and direction of the rotation.\n"),o("img",{attrs:{src:r(982),alt:"QAV250 Connect ESCs"}})]),t._v(" "),o("p",[t._v("Connect the motors on the ESC’s, make sure the motors turns to the correct side, if the motor turns of the opposite side change the cable A to the pad C and C to the pad A of the ESC.")]),t._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),o("p",[t._v("Test motor directions with propellers removed.")])]),t._v(" "),o("p",[o("img",{attrs:{src:r(1438),alt:"QAV250 Connect ESCs to Power"}})])]),t._v(" "),o("li",[o("p",[t._v("Connect the signal ESC cables to the PWM outputs of the Pixhawk in the correct order (see previous image)")]),t._v(" "),o("p",[o("img",{attrs:{src:r(983),alt:"QAV250 Connect ESCs to Pixhawk PWM"}})])]),t._v(" "),o("li",[o("p",[t._v("Connect the receiver.")]),t._v(" "),o("ul",[o("li",[o("p",[t._v("If using a PPM receiver connect to the PPM port.")]),t._v(" "),o("p",[o("img",{attrs:{src:r(984),alt:"QAV250 Connect Receiver PPM"}})])]),t._v(" "),o("li",[o("p",[t._v("If using the SBUS receiver connect to the RC IN port")]),t._v(" "),o("p",[o("img",{attrs:{src:r(985),alt:"QAV250 Connect Receiver SBUS"}})])])])]),t._v(" "),o("li",[o("p",[t._v("Connect the telemetry module. Paste the module with double tape and connect on the port of the telemetry.")]),t._v(" "),o("p",[o("img",{attrs:{src:r(986),alt:"QAV250 Telemetry module"}})])]),t._v(" "),o("li",[o("p",[t._v("Connect the GPS module")]),t._v(" "),o("p",[o("img",{attrs:{src:r(987),alt:"QAV250 Connect GPS"}})]),t._v(" "),o("p",[t._v("Attach the module on the top plate (using provided 3M tape, or paste). Then put the top plate on the standoffs as shown")]),t._v(" "),o("p",[o("img",{attrs:{src:r(988),alt:"QAV250 Connect GPS"}})])]),t._v(" "),o("li",[o("p",[t._v('The last "mandatory" assembly step is to add the velcro to hold the battery')]),t._v(" "),o("p",[o("img",{attrs:{src:r(989),alt:"QAV250 Velcro battery strap"}})])])]),t._v(" "),o("p",[t._v('The "basic" frame build is now complete (though if you need them, you can find more information about connecting components in the '),o("RouterLink",{attrs:{to:"/en/assembly/quick_start_pixhawk4.html"}},[t._v("Pixhawk 4 Wiring Quickstart")]),t._v(").")],1),t._v(" "),o("p",[t._v('If you have the "basic" version of the kit, you can now jump ahead to instructions on how to '),o("a",{attrs:{href:"#configure"}},[t._v("Install/Configure PX4")]),t._v(".")]),t._v(" "),o("h3",{attrs:{id:"fpv-assembly"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#fpv-assembly"}},[t._v("#")]),t._v(" FPV Assembly")]),t._v(" "),o("p",[t._v('The "Complete" version of the kit additionally comes with an FPV system, which is mounted on the front of the vehicle as shown.')]),t._v(" "),o("p",[o("img",{attrs:{src:r(990),alt:"QAV250 FPV Attach"}})]),t._v(" "),o("p",[t._v("The steps to install the kit are:")]),t._v(" "),o("ol",[o("li",[t._v("Install the camera bracket on the frame\n"),o("img",{attrs:{src:r(991),alt:"Camera Connection"}})]),t._v(" "),o("li",[t._v("Install the camera on the bracket\n"),o("img",{attrs:{src:r(992),alt:"Camera on Bracket"}})]),t._v(" "),o("li",[t._v("The power module on the complete kit comes with wiring ready to connect the Video Transmitter and Camera:\n"),o("img",{attrs:{src:r(993),alt:"Connecting FPV"}}),t._v(" "),o("ul",[o("li",[t._v("Attach the camera connector\n"),o("img",{attrs:{src:r(994),alt:"Camera Connection"}}),t._v("\nThe wires are: blue=voltage sensor, yellow=video out, black=ground, red=+voltage.")]),t._v(" "),o("li",[t._v("Connect the Video Transmitter (VTX) connector\n"),o("img",{attrs:{src:r(995),alt:"Video Transmitter Connection"}}),t._v("\nThe wires are: yellow=video out, black=ground, red=+voltage.")])])]),t._v(" "),o("li",[t._v("Secure the Video Transmitter and OSD board to the frame using tape.")])]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("If you have to wire the system yourself, the diagram below shows all the connections between camera, VTX and power module:\n"),o("img",{attrs:{src:r(996),alt:"QAV250 FPV Wiring"}})])]),t._v(" "),o("p",[o("span",{attrs:{id:"configure"}})]),t._v(" "),o("h2",{attrs:{id:"install-configure-px4"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#install-configure-px4"}},[t._v("#")]),t._v(" Install/Configure PX4")]),t._v(" "),o("p",[o("em",[t._v("QGroundControl")]),t._v(" is used to install the PX4 autopilot and configure/tune it for the QAV250 frame.\n"),o("a",{attrs:{href:"http://qgroundcontrol.com/downloads/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Download and install"),o("OutboundLink")],1),t._v(" "),o("em",[t._v("QGroundControl")]),t._v(" for your platform.")]),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),o("p",[t._v("Full instructions for installing and configuring PX4 can be found in "),o("RouterLink",{attrs:{to:"/en/config/"}},[t._v("Basic Configuration")]),t._v(".")],1)]),t._v(" "),o("p",[t._v("First update the firmware and airframe:")]),t._v(" "),o("ul",[o("li",[o("p",[o("RouterLink",{attrs:{to:"/en/config/firmware.html"}},[t._v("Firmware")])],1)]),t._v(" "),o("li",[o("p",[o("RouterLink",{attrs:{to:"/en/config/airframe.html"}},[t._v("Airframe")])],1),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("You will need to select the "),o("em",[t._v("HolyBro QAV250")]),t._v(" airframe ("),o("strong",[t._v("Quadrotor x > HolyBro QAV250")]),t._v(").")]),t._v(" "),o("p",[o("img",{attrs:{src:r(1439),alt:"QGroundControl - Select HolyBro QAV250 airframe"}})])])])]),t._v(" "),o("p",[t._v("Then perform the mandatory setup/calibration:")]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/en/config/flight_controller_orientation.html"}},[t._v("Sensor Orientation")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/en/config/compass.html"}},[t._v("Compass")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/en/config/accelerometer.html"}},[t._v("Accelerometer")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/en/config/level_horizon_calibration.html"}},[t._v("Level Horizon Calibration")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/en/config/radio.html"}},[t._v("Radio Setup")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/en/config/flight_mode.html"}},[t._v("Flight Modes")])],1)]),t._v(" "),o("p",[t._v("Ideally you should also do:")]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/en/advanced_config/esc_calibration.html"}},[t._v("ESC Calibration")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/en/config/battery.html"}},[t._v("Battery")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/en/config/safety.html"}},[t._v("Safety")])],1)]),t._v(" "),o("h2",{attrs:{id:"tuning"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#tuning"}},[t._v("#")]),t._v(" Tuning")]),t._v(" "),o("p",[t._v("Airframe selection sets "),o("em",[t._v("default")]),t._v(" autopilot parameters for the frame.\nThese are good enough to fly with, but it is a good idea to tune the parameters for a specific frame build.")]),t._v(" "),o("p",[t._v("For general information on tuning see: "),o("RouterLink",{attrs:{to:"/en/config_mc/pid_tuning_guide_multicopter.html"}},[t._v("Multicopter PID Tuning Guide")]),t._v(".")],1),t._v(" "),o("h2",{attrs:{id:"acknowledgements"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#acknowledgements"}},[t._v("#")]),t._v(" Acknowledgements")]),t._v(" "),o("p",[t._v("This build log was provided by the PX4 Test Team.")])])}),[],!1,null,null,null);e.default=a.exports},968:function(t,e,r){t.exports=r.p+"assets/img/qav250_hero.f20774cc.jpg"},969:function(t,e,r){t.exports=r.p+"assets/img/frame_components.dad73aec.jpg"},970:function(t,e,r){t.exports=r.p+"assets/img/frame_and_electronics_components.419c16f2.jpg"},971:function(t,e,r){t.exports=r.p+"assets/img/assembly_tools.c9aa9304.jpg"},972:function(t,e,r){t.exports=r.p+"assets/img/1_button_plate_add_arms.3193bbaa.jpg"},973:function(t,e,r){t.exports=r.p+"assets/img/2_short_plate_over_arms.d8fe2332.jpg"},974:function(t,e,r){t.exports=r.p+"assets/img/3_nuts_screws_holes.43f3721a.jpg"},975:function(t,e,r){t.exports=r.p+"assets/img/4_plastic_nuts_on_screws.843efa8a.jpg"},976:function(t,e,r){t.exports=r.p+"assets/img/5_power_module_on_screws.38bf3171.jpg"},977:function(t,e,r){t.exports=r.p+"assets/img/6_flight_controller_plate.d8e163a3.jpg"},978:function(t,e,r){t.exports=r.p+"assets/img/7_motors.a125fdd6.jpg"},979:function(t,e,r){t.exports=r.p+"assets/img/8_double_sided_tape_controller.735cc17b.jpg"},980:function(t,e,r){t.exports=r.p+"assets/img/9_power_module_power_pixhawk.119c65e7.jpg"},981:function(t,e,r){t.exports=r.p+"assets/img/10_aluminium_standoffs.7d12de0d.jpg"},982:function(t,e,r){t.exports=r.p+"assets/img/11_escs.dbb7a5fe.jpg"},983:function(t,e,r){t.exports=r.p+"assets/img/12_escs_pixhawk.4f50af45.jpg"},984:function(t,e,r){t.exports=r.p+"assets/img/13_rc_receiver_ppm.1b032e8e.jpg"},985:function(t,e,r){t.exports=r.p+"assets/img/13_rc_receiver_sbus.b1d9de26.jpg"},986:function(t,e,r){t.exports=r.p+"assets/img/14_telemetry.1bea0054.jpg"},987:function(t,e,r){t.exports=r.p+"assets/img/15a_connect_gps.ee6ebce9.jpg"},988:function(t,e,r){t.exports=r.p+"assets/img/15b_attach_gps.bb9aaa5e.jpg"},989:function(t,e,r){t.exports=r.p+"assets/img/16_velcro_strap.cfb0a5e8.jpg"},990:function(t,e,r){t.exports=r.p+"assets/img/fpv_camera.29a4a9b1.jpg"},991:function(t,e,r){t.exports=r.p+"assets/img/fpv_camera_bracket.d02a39b0.jpg"},992:function(t,e,r){t.exports=r.p+"assets/img/fpv_camera_on_bracket.a973f472.jpg"},993:function(t,e,r){t.exports=r.p+"assets/img/fpv_connection_board.e62032a8.jpg"},994:function(t,e,r){t.exports=r.p+"assets/img/fpv_camera_connection.91cf1192.jpg"},995:function(t,e,r){t.exports=r.p+"assets/img/fpv_video_transmitter_connection.5aa268fa.jpg"},996:function(t,e,r){t.exports=r.p+"assets/img/fpv_connection.ca7044e3.jpg"}}]);