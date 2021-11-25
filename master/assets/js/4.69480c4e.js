(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{1731:function(t,e,s){"use strict";s.r(e);var a=s(19),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"holybro-s500-v2-pixhawk-4-build"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#holybro-s500-v2-pixhawk-4-build"}},[t._v("#")]),t._v(" Holybro S500 V2 + Pixhawk 4 Build")]),t._v(" "),a("p",[t._v("This topic provides full instructions for building the kit and configuring PX4 using "),a("em",[t._v("QGroundControl")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"key-information"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#key-information"}},[t._v("#")]),t._v(" Key information")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Frame:")]),t._v(" Holybro S500")]),t._v(" "),a("li",[a("strong",[t._v("Flight controller:")]),t._v(" "),a("RouterLink",{attrs:{to:"/en/flight_controller/pixhawk4.html"}},[t._v("Pixhawk 4")])],1),t._v(" "),a("li",[a("strong",[t._v("Assembly time (approx.):")]),t._v(" 90 minutes (45 minutes for frame, 45 minutes for autopilot installation/configuration)")])]),t._v(" "),a("p",[a("img",{attrs:{src:s(940),alt:"Full S500 Kit"}})]),t._v(" "),a("h2",{attrs:{id:"bill-of-materials"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bill-of-materials"}},[t._v("#")]),t._v(" Bill of materials")]),t._v(" "),a("p",[t._v("The Holybro "),a("a",{attrs:{href:"https://shop.holybro.com/s500-v2-kitmotor2216-880kv-propeller1045_p1153.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("S500 V2 Kit"),a("OutboundLink")],1),t._v(" includes almost all the required components:")]),t._v(" "),a("ul",[a("li",[t._v("Pixhawk 4 autopilot（PM07 not included)")]),t._v(" "),a("li",[t._v("Power Management PM02（Assembled）")]),t._v(" "),a("li",[t._v("ARM adopts high strength plastics")]),t._v(" "),a("li",[t._v("Motors - 2216 KV880（ V2 Update）")]),t._v(" "),a("li",[t._v("Propeller 1045（ V2 Update）")]),t._v(" "),a("li",[t._v("Pixhawk4 GPS")]),t._v(" "),a("li",[t._v("Fully assembled Power Management Board with ESCs")]),t._v(" "),a("li",[t._v("433MHz Telemetry Radio / 915MHz Telemetry Radio")]),t._v(" "),a("li",[t._v("Power and Radio Cables")]),t._v(" "),a("li",[t._v("Battery Straps")]),t._v(" "),a("li",[t._v("Dimensions:383"),a("em",[t._v("385")]),t._v("240mm")]),t._v(" "),a("li",[t._v("Wheelbase:480mm")])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("No LiPo battery is included.\nIn addition, we use a FrSky Taranis controller.")])]),t._v(" "),a("h2",{attrs:{id:"hardware"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hardware"}},[t._v("#")]),t._v(" Hardware")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Item Description")]),t._v(" "),a("th",[t._v("Quantity")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Wheelbase: 480mm")]),t._v(" "),a("td",[t._v("1")])]),t._v(" "),a("tr",[a("td",[t._v("Arms")]),t._v(" "),a("td",[t._v("4")])]),t._v(" "),a("tr",[a("td",[t._v("Set of Landing Gear")]),t._v(" "),a("td",[t._v("2")])]),t._v(" "),a("tr",[a("td",[t._v("M3*8 screws")]),t._v(" "),a("td",[t._v("18")])]),t._v(" "),a("tr",[a("td",[t._v("M2 5*6 screws")]),t._v(" "),a("td",[t._v("24")])]),t._v(" "),a("tr",[a("td",[t._v("Battery Straps")]),t._v(" "),a("td",[t._v("1")])]),t._v(" "),a("tr",[a("td",[t._v("Propeller 1045 (V2 Update)")]),t._v(" "),a("td",[t._v("1")])])])]),t._v(" "),a("p",[a("img",{attrs:{src:s(941),alt:"S500 Hardware"}})]),t._v(" "),a("h2",{attrs:{id:"package"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#package"}},[t._v("#")]),t._v(" Package")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Items")]),t._v(" "),a("th",[t._v("Package")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Pixhawk 4")]),t._v(" "),a("td",[t._v("1")])]),t._v(" "),a("tr",[a("td",[t._v("Pixhawk4 GPS MODULE")]),t._v(" "),a("td",[t._v("1")])]),t._v(" "),a("tr",[a("td",[t._v("I2C splitter Board")]),t._v(" "),a("td",[t._v("2")])]),t._v(" "),a("tr",[a("td",[t._v("6 to 6 pin cable (power)")]),t._v(" "),a("td",[t._v("3")])]),t._v(" "),a("tr",[a("td",[t._v("4 to 4 pin cable (CAN)")]),t._v(" "),a("td",[t._v("2")])]),t._v(" "),a("tr",[a("td",[t._v("6 to 4 pin cable (Data)")]),t._v(" "),a("td",[t._v("1")])]),t._v(" "),a("tr",[a("td",[t._v("10 to 10 pin cable (PWM)")]),t._v(" "),a("td",[t._v("2")])]),t._v(" "),a("tr",[a("td",[t._v("8 to 8 pin cable(AUX)")]),t._v(" "),a("td",[t._v("1")])]),t._v(" "),a("tr",[a("td",[t._v("7 to 7 pin cable(SPI)")]),t._v(" "),a("td",[t._v("1")])]),t._v(" "),a("tr",[a("td",[t._v("6 to 6 pin cable(Debug)")]),t._v(" "),a("td",[t._v("1")])]),t._v(" "),a("tr",[a("td",[t._v("PPM/SBUS out cable")]),t._v(" "),a("td",[t._v("1")])]),t._v(" "),a("tr",[a("td",[t._v("XSR receiver cable")]),t._v(" "),a("td",[t._v("1")])]),t._v(" "),a("tr",[a("td",[t._v("DSMX receiver cable")]),t._v(" "),a("td",[t._v("1")])]),t._v(" "),a("tr",[a("td",[t._v("SBUS receiver cable")]),t._v(" "),a("td",[t._v("1")])]),t._v(" "),a("tr",[a("td",[t._v("USB cable")]),t._v(" "),a("td",[t._v("1")])]),t._v(" "),a("tr",[a("td",[t._v("'X'type folding pedestal mount")]),t._v(" "),a("td",[t._v("1")])]),t._v(" "),a("tr",[a("td",[t._v("70mm & 140mm carbon rod standoff")]),t._v(" "),a("td",[t._v("2")])]),t._v(" "),a("tr",[a("td",[t._v("6*3 2.54mm pitch Horizontal Pin")]),t._v(" "),a("td",[t._v("1")])]),t._v(" "),a("tr",[a("td",[t._v("8*3 2.54mm pitch Horizontal Pin")]),t._v(" "),a("td",[t._v("2")])]),t._v(" "),a("tr",[a("td",[t._v("Foam Set")]),t._v(" "),a("td",[t._v("1")])]),t._v(" "),a("tr",[a("td",[t._v("Pixhawk4 Quick Start Guide")]),t._v(" "),a("td",[t._v("1")])]),t._v(" "),a("tr",[a("td",[t._v("Pixhawk4 Pinouts")]),t._v(" "),a("td",[t._v("1")])]),t._v(" "),a("tr",[a("td",[t._v("GPS Quick Start Guide")]),t._v(" "),a("td",[t._v("1")])])])]),t._v(" "),a("p",[a("img",{attrs:{src:s(942),alt:"S500 Package Contents"}})]),t._v(" "),a("h3",{attrs:{id:"electronics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#electronics"}},[t._v("#")]),t._v(" Electronics")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Item Description")]),t._v(" "),a("th",[t._v("Quantity")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Pixhawk 4 autopilot (PM06 not included)")]),t._v(" "),a("td",[t._v("1")])]),t._v(" "),a("tr",[a("td",[t._v("Power Management PM02 (Assembled)")]),t._v(" "),a("td",[t._v("1")])]),t._v(" "),a("tr",[a("td",[t._v("Motors - 2216 KV880 (V2 Update)")]),t._v(" "),a("td",[t._v("4")])]),t._v(" "),a("tr",[a("td",[t._v("Pixhawk 4 GPS")]),t._v(" "),a("td",[t._v("1")])]),t._v(" "),a("tr",[a("td",[t._v("Fully assembled Power Management Board with ESCs")]),t._v(" "),a("td",[t._v("1")])]),t._v(" "),a("tr",[a("td",[t._v("433MHz Telemetry Radio / 915MHz Telemetry Radio")]),t._v(" "),a("td",[t._v("1")])])])]),t._v(" "),a("p",[a("img",{attrs:{src:s(943),alt:"S500 Electronics"}})]),t._v(" "),a("h3",{attrs:{id:"tools-needed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tools-needed"}},[t._v("#")]),t._v(" Tools needed")]),t._v(" "),a("p",[t._v("The following tools are used in this assembly:")]),t._v(" "),a("ul",[a("li",[t._v("1.5 mm Hex screwdriver")]),t._v(" "),a("li",[t._v("2.0 mm Hex screwdriver")]),t._v(" "),a("li",[t._v("2.5 mm Hex screwdriver")]),t._v(" "),a("li",[t._v("3mm Phillips screwdriver")]),t._v(" "),a("li",[t._v("Wire cutters")]),t._v(" "),a("li",[t._v("Precision tweezers")])]),t._v(" "),a("p",[a("img",{attrs:{src:s(944),alt:"S500 Tools"}})]),t._v(" "),a("p",[a("img",{attrs:{src:s(945),alt:"S500 Tools"}})]),t._v(" "),a("h2",{attrs:{id:"assembly"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#assembly"}},[t._v("#")]),t._v(" Assembly")]),t._v(" "),a("p",[t._v("Estimate time to assemble is 90 minutes, about 45 minutes for frame assembly and 45 minutes installing and configuring the autopilot in QGroundControl.")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Assembling the Landing Gear.\nWe are going to start by assembling the landing gear to the vertical pole. Unscrew the landing gear screws and insert the vertical pole as shown below.")]),t._v(" "),a("p",[a("img",{attrs:{src:s(946),alt:"Figure 1"}})]),t._v(" "),a("p",[a("img",{attrs:{src:s(947),alt:"Figure 2"}})])]),t._v(" "),a("li",[a("p",[t._v("Assemble the Power Management Board to the landing gear. Screw the landing gear with a vertical pole to the Fully assembled Power Management Board.")])])]),t._v(" "),a("p",[t._v("The Board has 4 holes (see arrows below).")]),t._v(" "),a("p",[a("img",{attrs:{src:s(948),alt:"Figure 3"}})]),t._v(" "),a("p",[t._v("Connect with the M3X8 screws, a total of 8 pieces, 4 on each side.")]),t._v(" "),a("p",[a("img",{attrs:{src:s(949),alt:"Figure 4"}})]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Assemble the arms to the Power Management Board.\nAttach the arm to the Power Management Board.")]),t._v(" "),a("p",[a("img",{attrs:{src:s(950),alt:"Figure 6"}})]),t._v(" "),a("p",[a("img",{attrs:{src:s(951),alt:"Figure 7"}})]),t._v(" "),a("p",[t._v("Use M2 5X6 screws a total of 2 in each arm.\nInsert the screws from the bottom of the plate.")]),t._v(" "),a("p",[a("img",{attrs:{src:s(952),alt:"Figure 8"}})]),t._v(" "),a("p",[t._v("Make sure the ESC cables run through the middle of the arm.")]),t._v(" "),a("p",[a("img",{attrs:{src:s(953),alt:"Figure 9"}})])]),t._v(" "),a("li",[a("p",[t._v("Assemble the 8"),a("em",[t._v("3 2.54mm pitch Horizontal Pin to the 10 to 10 pin cable (PWM) to the Power Management Board.\nConnect the 10 to 10 pin cable (PWM) to the 8")]),t._v("3 2.54mm pitch Horizontal Pin.")]),t._v(" "),a("p",[a("img",{attrs:{src:s(954),alt:"Figure 10"}})]),t._v(" "),a("p",[t._v("Cut a piece of 3M Tape and attach to the bottom of the Horizontal Pin:")]),t._v(" "),a("p",[a("img",{attrs:{src:s(955),alt:"Figure 11"}})]),t._v(" "),a("p",[t._v("Stick the Horizontal Pin to the Power Management Board:")]),t._v(" "),a("p",[a("img",{attrs:{src:s(956),alt:"Figure 12"}})]),t._v(" "),a("p",[a("img",{attrs:{src:s(957),alt:"Figure 13"}})])]),t._v(" "),a("li",[a("p",[t._v("Assemble the motors to the arms. For this, we will need the 16 screws M3X7, 4 motors, and the 4 arms.")]),t._v(" "),a("p",[t._v("Mount the motors in each arm put the screw through the bottom of the arm:")]),t._v(" "),a("p",[a("img",{attrs:{src:s(958),alt:"Figure 14"}})]),t._v(" "),a("p",[a("img",{attrs:{src:s(959),alt:"Figure 15"}})]),t._v(" "),a("p",[t._v("After the 4 motors are mounted on the arm grab the cables(red, blue, black) and put them through the arm thread.\nThe 3 cables that are color-coded go connected to the ESC.")]),t._v(" "),a("p",[a("img",{attrs:{src:s(960),alt:"Figure 16"}})]),t._v(" "),a("p",[a("img",{attrs:{src:s(961),alt:"Figure 17"}})])]),t._v(" "),a("li",[a("p",[t._v("Mounting the GPS on the frame.\nFor this, we will need the Pixhawk 4 GPS and the mounting plate.")]),t._v(" "),a("p",[a("img",{attrs:{src:s(962),alt:"GPS Parts"}})]),t._v(" "),a("p",[t._v("Mount the GPS mast to the back of the Board, use the 4 screws:")]),t._v(" "),a("p",[a("img",{attrs:{src:s(963),alt:"Figure 18"}})]),t._v(" "),a("p",[a("img",{attrs:{src:s(964),alt:"Figure 19"}})]),t._v(" "),a("p",[t._v("Use the tape and stick the GPS to the top of the GPS mast:")]),t._v(" "),a("p",[a("img",{attrs:{src:s(965),alt:"Figure 20"}})])]),t._v(" "),a("li",[a("p",[t._v("Paste the FrSky to the Board. Paste FrSky with double-sided tape (3M) to the bottom board.\nAttach the FrSky to the frame:")]),t._v(" "),a("p",[a("img",{attrs:{src:s(966),alt:"Figure 21"}})]),t._v(" "),a("p",[a("img",{attrs:{src:s(967),alt:"Figure 22"}})])]),t._v(" "),a("li",[a("p",[t._v("Attach the Telemetry to the frame.\nThe next step is to take the Holybro telemetry radio and attach it onto the frame, use 3M tape.")]),t._v(" "),a("p",[a("img",{attrs:{src:s(968),alt:"Figure 23"}})]),t._v(" "),a("p",[a("img",{attrs:{src:s(969),alt:"Figure 24"}})]),t._v(" "),a("p",[t._v("This assembly attached it inside the frame facing outwards to the front of the vehicle.\nA picture is shown below of the radio sitting inside the bottom of the frame.")]),t._v(" "),a("p",[a("img",{attrs:{src:s(970),alt:"Figure 25"}})])]),t._v(" "),a("li",[a("p",[t._v("Mounting the Pixhawk 4 to the plate.\nUse double-sided tape to attach the Pixhawk 4 to the center plate:")]),t._v(" "),a("p",[a("img",{attrs:{src:s(971),alt:"Figure 26"}})]),t._v(" "),a("p",[a("img",{attrs:{src:s(972),alt:"Figure 27"}})]),t._v(" "),a("p",[a("img",{attrs:{src:s(973),alt:"Figure 28"}})]),t._v(" "),a("p",[t._v("The next step is to mount the Pixhawk 4 with the plate to the frame.\nFor this, we will need the M2 5X6 screws.\nAlign the plate to the frame and insert the screws.\nBefore you mount the plate we recommend putting tape on the Power Module (that way it's tight).")]),t._v(" "),a("p",[a("img",{attrs:{src:s(974),alt:"Figure 29"}})]),t._v(" "),a("p",[a("img",{attrs:{src:s(975),alt:"Figure 30"}})])]),t._v(" "),a("li",[a("p",[t._v("Assembling the Battery Mount to the frame.\nFor this we will need the M2 5X6 screws and the battery mount:")]),t._v(" "),a("p",[a("img",{attrs:{src:s(976),alt:"Figure 31"}})]),t._v(" "),a("p",[t._v("Insert the long rods to the small rings:")]),t._v(" "),a("p",[a("img",{attrs:{src:s(977),alt:"Figure 32"}})]),t._v(" "),a("p",[a("img",{attrs:{src:s(978),alt:"Figure 33"}})]),t._v(" "),a("p",[t._v("Attach that to the frame, make sure all four sides are aligned to insert the screws:")]),t._v(" "),a("p",[a("img",{attrs:{src:s(979),alt:"Figure 34"}})]),t._v(" "),a("p",[t._v("Assemble the small plate to the legs and screw on all four sides.")]),t._v(" "),a("p",[a("img",{attrs:{src:s(980),alt:"Figure 35"}})]),t._v(" "),a("p",[t._v("The final step is to attach the plate:")]),t._v(" "),a("p",[a("img",{attrs:{src:s(981),alt:"Figure 36"}})])]),t._v(" "),a("li",[a("p",[t._v("Pixhawk 4 wiring. The Pixhawk 4, which has several different wires and connections with it.\nIncluded below is a picture of every wire needed with the Pixhawk and how it looks when connected.")])]),t._v(" "),a("li",[a("p",[t._v("Plugin Telemetry and GPS module to the flight controller as seen in Figure 37; plug in the RC receiver, all 4 ESCs to the flight controller as well as the power module.")]),t._v(" "),a("p",[a("img",{attrs:{src:s(982),alt:"Figure 37"}})])])]),t._v(" "),a("p",[t._v("Fully assembled, the kit looks as shown below:")]),t._v(" "),a("p",[a("img",{attrs:{src:s(983),alt:"Pixhawk Assembled"}})]),t._v(" "),a("p",[a("img",{attrs:{src:s(984),alt:"Fully Assembled"}})]),t._v(" "),a("p",[a("span",{attrs:{id:"configure"}})]),t._v(" "),a("h2",{attrs:{id:"install-configure-px4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-configure-px4"}},[t._v("#")]),t._v(" Install/Configure PX4")]),t._v(" "),a("p",[a("em",[t._v("QGroundControl")]),t._v(" is used to install the PX4 autopilot and configure/tune it for the QAV250 frame.\n"),a("a",{attrs:{href:"http://qgroundcontrol.com/downloads/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Download and install"),a("OutboundLink")],1),t._v(" "),a("em",[t._v("QGroundControl")]),t._v(" for your platform.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("Full instructions for installing and configuring PX4 can be found in "),a("RouterLink",{attrs:{to:"/en/config/"}},[t._v("Basic Configuration")]),t._v(".")],1)]),t._v(" "),a("p",[t._v("First update the firmware and airframe:")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/en/config/firmware.html"}},[t._v("Firmware")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/en/config/airframe.html"}},[t._v("Airframe")])],1)]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("You will need to select the "),a("em",[t._v("Holybro S500")]),t._v(" airframe ("),a("strong",[t._v("Quadrotor x > Holybro S500")]),t._v(").")])]),t._v(" "),a("p",[a("img",{attrs:{src:s(985),alt:"QGroundControl - Select HolyBro X500 airframe"}})]),t._v(" "),a("p",[t._v("Then perform the mandatory setup/calibration:")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/en/config/flight_controller_orientation.html"}},[t._v("Sensor Orientation")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/en/config/compass.html"}},[t._v("Compass")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/en/config/accelerometer.html"}},[t._v("Accelerometer")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/en/config/level_horizon_calibration.html"}},[t._v("Level Horizon Calibration")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/en/config/radio.html"}},[t._v("Radio Setup")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/en/config/flight_mode.html"}},[t._v("Flight Modes")])],1)]),t._v(" "),a("p",[t._v("Ideally you should also do:")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/en/advanced_config/esc_calibration.html"}},[t._v("ESC Calibration")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/en/config/battery.html"}},[t._v("Battery")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/en/config/safety.html"}},[t._v("Safety")])],1)]),t._v(" "),a("h2",{attrs:{id:"tuning"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tuning"}},[t._v("#")]),t._v(" Tuning")]),t._v(" "),a("p",[t._v("Airframe selection sets "),a("em",[t._v("default")]),t._v(" autopilot parameters for the frame.\nThese are good enough to fly with, but it is a good idea to tune the parameters for a specific frame build.")]),t._v(" "),a("p",[t._v("For general information on tuning see: "),a("RouterLink",{attrs:{to:"/en/config_mc/pid_tuning_guide_multicopter.html"}},[t._v("Multicopter PID Tuning Guide")]),t._v(".")],1),t._v(" "),a("h2",{attrs:{id:"acknowledgements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#acknowledgements"}},[t._v("#")]),t._v(" Acknowledgements")]),t._v(" "),a("p",[t._v("This build log was provided by the Dronecode Test Flight Team.")])])}),[],!1,null,null,null);e.default=r.exports},940:function(t,e,s){t.exports=s.p+"assets/img/s500_hero.3b82ca9a.png"},941:function(t,e,s){t.exports=s.p+"assets/img/s500_hardware.088b1077.jpg"},942:function(t,e,s){t.exports=s.p+"assets/img/s500_package.b2818c83.jpg"},943:function(t,e,s){t.exports=s.p+"assets/img/s500_electronics.d8261114.jpg"},944:function(t,e,s){t.exports=s.p+"assets/img/s500_tools2.643e3d50.png"},945:function(t,e,s){t.exports=s.p+"assets/img/s500_tools.b6f5f6ac.jpg"},946:function(t,e,s){t.exports=s.p+"assets/img/s500_fig1.515a4e4c.jpg"},947:function(t,e,s){t.exports=s.p+"assets/img/s500_fig2.2a3d42e7.jpg"},948:function(t,e,s){t.exports=s.p+"assets/img/s500_fig3.3f31db30.jpg"},949:function(t,e,s){t.exports=s.p+"assets/img/s500_fig4.81966b4c.jpg"},950:function(t,e,s){t.exports=s.p+"assets/img/s500_fig7.0e756f77.jpg"},951:function(t,e,s){t.exports=s.p+"assets/img/s500_fig8.79f17552.jpg"},952:function(t,e,s){t.exports=s.p+"assets/img/s500_fig9.194bc647.jpg"},953:function(t,e,s){t.exports=s.p+"assets/img/s500_fig91.cd73ee55.jpg"},954:function(t,e,s){t.exports=s.p+"assets/img/s500_fig10.98268639.jpg"},955:function(t,e,s){t.exports=s.p+"assets/img/s500_fig11.b7ecf835.jpg"},956:function(t,e,s){t.exports=s.p+"assets/img/s500_fig12.c6c27be2.jpg"},957:function(t,e,s){t.exports=s.p+"assets/img/s500_fig13.98e4a15a.jpg"},958:function(t,e,s){t.exports=s.p+"assets/img/s500_fig14.688e64f9.jpg"},959:function(t,e,s){t.exports=s.p+"assets/img/s500_fig15.9315a9a7.jpg"},960:function(t,e,s){t.exports=s.p+"assets/img/s500_fig16.5607636a.jpg"},961:function(t,e,s){t.exports=s.p+"assets/img/s500_fig17.2b8bf78f.jpg"},962:function(t,e,s){t.exports=s.p+"assets/img/s500_gpskit.13779d48.png"},963:function(t,e,s){t.exports=s.p+"assets/img/s500_fig18.a81fab99.jpg"},964:function(t,e,s){t.exports=s.p+"assets/img/s500_fig19.fb93ee97.jpg"},965:function(t,e,s){t.exports=s.p+"assets/img/s500_fig20.77af8ca4.jpg"},966:function(t,e,s){t.exports=s.p+"assets/img/s500_fig21.1131f42b.jpg"},967:function(t,e,s){t.exports=s.p+"assets/img/s500_fig22.467e5013.jpg"},968:function(t,e,s){t.exports=s.p+"assets/img/s500_fig23.23c4ab74.jpg"},969:function(t,e,s){t.exports=s.p+"assets/img/s500_fig24.9a8f97b2.jpg"},970:function(t,e,s){t.exports=s.p+"assets/img/s500_fig25.f81fc5a4.jpg"},971:function(t,e,s){t.exports=s.p+"assets/img/s500_fig26.9c426add.jpg"},972:function(t,e,s){t.exports=s.p+"assets/img/s500_fig27.7065c9f8.jpg"},973:function(t,e,s){t.exports=s.p+"assets/img/s500_fig28.e4a8425d.jpg"},974:function(t,e,s){t.exports=s.p+"assets/img/s500_fig29.0eff3291.jpg"},975:function(t,e,s){t.exports=s.p+"assets/img/s500_fig30.661eacfc.jpg"},976:function(t,e,s){t.exports=s.p+"assets/img/s500_fig31.25f0cd1d.jpg"},977:function(t,e,s){t.exports=s.p+"assets/img/s500_fig32.98fd686d.png"},978:function(t,e,s){t.exports=s.p+"assets/img/s500_fig33.84c94652.png"},979:function(t,e,s){t.exports=s.p+"assets/img/s500_fig34.e8c464b4.jpg"},980:function(t,e,s){t.exports=s.p+"assets/img/s500_fig35.f39ecedd.jpg"},981:function(t,e,s){t.exports=s.p+"assets/img/s500_fig36.232e5d11.jpg"},982:function(t,e,s){t.exports=s.p+"assets/img/s500_fig37.34326319.png"},983:function(t,e,s){t.exports=s.p+"assets/img/s500_pixhawk.6cf743f1.jpg"},984:function(t,e,s){t.exports=s.p+"assets/img/s500_assembled.32b66ddc.jpg"},985:function(t,e,s){t.exports=s.p+"assets/img/S500_airframe.e6e9f1fe.jpg"}}]);