(window.webpackJsonp=window.webpackJsonp||[]).push([[1489],{2735:function(e,t,o){"use strict";o.r(t);var i=o(19),a=Object(i.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"px4-vision-autonomy-development-kit"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#px4-vision-autonomy-development-kit"}},[e._v("#")]),e._v(" PX4 Vision Autonomy Development Kit")]),e._v(" "),i("p",[e._v("The "),i("a",{attrs:{href:"https://holybro.com/collections/multicopter-kit/PX4-Vision",target:"_blank",rel:"noopener noreferrer"}},[i("em",[e._v("PX4 Vision Autonomy Development Kit")]),i("OutboundLink")],1),e._v(" is a robust and inexpensive kit for enabling computer vision development on autonomous vehicles.")]),e._v(" "),i("p",[i("img",{attrs:{src:o(1616),alt:"Overview"}})]),e._v(" "),i("p",[e._v("The kit contains a near-ready-to-fly carbon-fiber quadcopter equipped with a "),i("em",[e._v("Pixhawk 4")]),e._v(" or "),i("em",[e._v("Pixhawk 6C")]),e._v(" (on V1.5) flight controller, a "),i("em",[e._v("UP Core")]),e._v(" companion computer (4GB memory & 64GB eMMC), and a Occipital "),i("em",[e._v("Structure Core")]),e._v(" depth camera sensor.")]),e._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),i("p",[e._v("This vehicle comes with no pre-installed software.\nA USB stick is included in the kit with an example of an "),i("RouterLink",{attrs:{to:"/ko/computer_vision/obstacle_avoidance.html"}},[e._v("obstacle avoidance")]),e._v(" feature implementation, based on the "),i("a",{attrs:{href:"https://github.com/PX4/PX4-Avoidance",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4 Avoidance"),i("OutboundLink")],1),e._v(" project. This example is intended as a reference only and serves to demonstrate the capabilities of the platform. The software is not compatible with the latest version of PX4, nor is it actively maintained or supported.")],1)]),e._v(" "),i("p",[e._v("The guide explains the minimal additional setup required to get the vehicle ready to fly (installing an RC system and battery). It also covers the first flight, and how to get started with modifying the computer vision code.")]),e._v(" "),i("h2",{attrs:{id:"where-to-buy"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#where-to-buy"}},[e._v("#")]),e._v(" Where to Buy")]),e._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"https://holybro.com/collections/multicopter-kit/products/px4-vision-dev-kit-v1-5",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4 Vision Dev Kit v1.5"),i("OutboundLink")],1)]),e._v(" "),i("li",[i("a",{attrs:{href:"https://holybro.com/collections/multicopter-kit/products/px4-vision",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4 Vision Dev Kit v1 (Discontinued)"),i("OutboundLink")],1)])]),e._v(" "),i("h2",{attrs:{id:"px4-vision-guide-content"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#px4-vision-guide-content"}},[e._v("#")]),e._v(" Px4 Vision Guide Content")]),e._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"#warnings-and-notifications"}},[e._v("Warnings & Notifications")])]),e._v(" "),i("li",[i("a",{attrs:{href:"#what-is-inside"}},[e._v("What is Inside")])]),e._v(" "),i("li",[i("a",{attrs:{href:"#what-else-do-you-need"}},[e._v("What Else Do You Need")])]),e._v(" "),i("li",[i("a",{attrs:{href:"#first-time-setup"}},[e._v("First-time Setup")])]),e._v(" "),i("li",[i("a",{attrs:{href:"#fly-the-drone-with-avoidance"}},[e._v("Fly the Drone with avoidance")])]),e._v(" "),i("li",[i("a",{attrs:{href:"#development-using-the-kit"}},[e._v("Development using the Kit")])]),e._v(" "),i("li",[i("a",{attrs:{href:"#px4-vision-carrier-board-pinouts"}},[e._v("PX4 Vision Carrier Board Pinouts")])]),e._v(" "),i("li",[i("a",{attrs:{href:"#other-development-resources"}},[e._v("Other Development Resources")])]),e._v(" "),i("li",[i("a",{attrs:{href:"#how-to-get-technical-support"}},[e._v("How to get Technical Support")])])]),e._v(" "),i("h2",{attrs:{id:"warnings-and-notifications"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#warnings-and-notifications"}},[e._v("#")]),e._v(" Warnings and Notifications")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("The kit is intended for computer vision projects that use a forward-facing camera (it does not have downward or rear-facing depth cameras).\nConsequently it can't be used (without modification) for testing "),i("RouterLink",{attrs:{to:"/ko/computer_vision/safe_landing.html"}},[e._v("Safe Landing")]),e._v(", or other features that require a downward-facing camera.")],1)]),e._v(" "),i("li",[i("p",[e._v("Obstacle avoidance in missions can only be tested when GPS is available (missions use GPS coordinates).\nCollision prevention can be tested in position mode provided there is a good position lock from either GPS or optical flow.")])]),e._v(" "),i("li",[i("p",[e._v("The port labeled "),i("code",[e._v("USB1")]),e._v(" may jam the GPS if used with a "),i("em",[e._v("USB3")]),e._v(" peripheral (disable GPS-dependent functionality including missions).\nThis is why the boot image is supplied on a "),i("em",[e._v("USB2.0")]),e._v(" memory stick.")])]),e._v(" "),i("li",[i("p",[e._v("PX4 Vision v1 with ECN 010 or above (carrier board RC05 and up), the "),i("em",[e._v("UP Core")]),e._v(" can be powered by either the DC plug or with battery.")]),e._v(" "),i("p",[i("img",{attrs:{src:o(1617),alt:"RC Number"}}),e._v(" "),i("img",{attrs:{src:o(1618),alt:"ECN Number"}})])]),e._v(" "),i("li",[i("p",[e._v("All PX4 Vision v1.5 "),i("em",[e._v("UP Core")]),e._v(" can be powered by either the DC plug or with battery.")])])]),e._v(" "),i("div",{staticClass:"custom-block warning"},[i("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),i("p",[e._v("For PX4 Vision v1 with ECN below 010/carrier board below RC04, the "),i("em",[e._v("UP Core")]),e._v(" should only be powered using the battery (do not remove the "),i("em",[e._v("UP Core power")]),e._v(" socket safety cover). This does not apply to PX4 Vision v1.5")]),e._v(" "),i("p",[i("img",{attrs:{src:o(1619),alt:"Warning - do not connect power port"}})])]),e._v(" "),i("h2",{attrs:{id:"what-is-inside"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#what-is-inside"}},[e._v("#")]),e._v(" What is Inside")]),e._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),i("p",[e._v("Difference between the PX4 Vision V1 and V1.5 can be found "),i("a",{attrs:{href:"https://docs.holybro.com/drone-development-kit/px4-vision-dev-kit-v1.5/v1-and-v1.5-difference",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),i("OutboundLink")],1)])]),e._v(" "),i("p",[i("img",{attrs:{src:o(1620),alt:"PV4 Vision v1.5"}})]),e._v(" "),i("p",[e._v("What's inside the PX4 Vision V1 can be found here in the "),i("a",{attrs:{href:"https://docs.px4.io/v1.13/en/complete_vehicles/px4_vision_kit.html#what-is-inside",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4 v1.13 Docs here"),i("OutboundLink")],1),e._v(".")]),e._v(" "),i("p",[e._v("The PX4 Vision DevKit contains following components:")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("Core Components:")]),e._v(" "),i("ul",[i("li",[e._v("1x Pixhawk 4 or Pixhawk 6C (for v1.5) flight controller")]),e._v(" "),i("li",[e._v("1x PMW3901 optical flow sensor")]),e._v(" "),i("li",[e._v("1x TOF Infrared distance sensor (PSK‐CM8JL65‐CC5)")]),e._v(" "),i("li",[e._v("1x Structure Core depth camera\n"),i("ul",[i("li",[e._v("160 deg wide vision camera")]),e._v(" "),i("li",[e._v("Stereo infrared cameras")]),e._v(" "),i("li",[e._v("Onboard IMU")]),e._v(" "),i("li",[e._v("Powerful NU3000 Multi-core depth Processor")])])]),e._v(" "),i("li",[e._v("1x "),i("em",[e._v("UP Core")]),e._v(" computer (4GB memory & 64GB eMMC with Ubuntu and PX4 avoidance)\n"),i("ul",[i("li",[e._v("Intel® Atom™ x5-z8350 (up to 1.92 GHz)")]),e._v(" "),i("li",[e._v("Compatible OS: Microsoft Windows 10 full version, Linux (ubilinux, Ubuntu, Yocto), Android")]),e._v(" "),i("li",[e._v("FTDI UART connected to flight controller")]),e._v(" "),i("li",[i("code",[e._v("USB1")]),e._v(": USB3.0 A port used for booting PX4 avoidance environment from a USB2.0 stick (connecting a USB3.0 peripheral may jam GPS).")]),e._v(" "),i("li",[i("code",[e._v("USB2")]),e._v(": USB2.0 port on a JST-GH connector. Can be used for second camera, LTE, etc. (or keyboard/mouse during development).")]),e._v(" "),i("li",[i("code",[e._v("USB3")]),e._v(": USB2.0 JST-GH port connected to depth camera")]),e._v(" "),i("li",[i("code",[e._v("HDMI")]),e._v(": HDMI out")]),e._v(" "),i("li",[e._v("SD card slot")]),e._v(" "),i("li",[e._v("WiFi 802.11 b/g/n @ 2.4 GHz (attached to external antenna #1). Allows computer to access home WiFi network for Internet access/updates.")])])])])]),e._v(" "),i("li",[i("p",[e._v("Mechanical Specification:")]),e._v(" "),i("ul",[i("li",[e._v("Frame: Full 5mm 3k carbon fiber twill")]),e._v(" "),i("li",[e._v("Motors: T-MOTOR KV1750")]),e._v(" "),i("li",[e._v("ESC: BEHEli-S 20A ESC")]),e._v(" "),i("li",[e._v("GPS: M8N GPS module")]),e._v(" "),i("li",[e._v("Power module: Holybro PM07")]),e._v(" "),i("li",[e._v("Wheelbase: 286mm")]),e._v(" "),i("li",[e._v("Weight: 854 grams without battery or props")]),e._v(" "),i("li",[e._v("Telemetry: ESP8266 connected to flight controller (attached to external antenna #2). Enables wireless connection to the ground station.")])])]),e._v(" "),i("li",[i("p",[e._v("A USB2.0 stick with pre-flashed software that bundles:")]),e._v(" "),i("ul",[i("li",[e._v("Ubuntu 18.04 LTS")]),e._v(" "),i("li",[e._v("ROS Melodic")]),e._v(" "),i("li",[e._v("Occipital Structure Core ROS driver")]),e._v(" "),i("li",[e._v("MAVROS")]),e._v(" "),i("li",[i("a",{attrs:{href:"https://github.com/PX4/PX4-Avoidance",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4 Avoidance"),i("OutboundLink")],1)])])]),e._v(" "),i("li",[i("p",[e._v("Assorted cables, 8x propellers, 2x battery straps (installed) and other accessories (these can be used to attach additional peripherals).")])])]),e._v(" "),i("h2",{attrs:{id:"what-else-do-you-need"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#what-else-do-you-need"}},[e._v("#")]),e._v(" What Else Do You Need")]),e._v(" "),i("p",[e._v("The kit contains all the essential drone hardware except a battery and a radio control system, which must be purchased separately:")]),e._v(" "),i("ul",[i("li",[e._v("Battery:\n"),i("ul",[i("li",[e._v("4S LiPo with XT60 female connector")]),e._v(" "),i("li",[e._v("Less than 115mm long (to fit between power connector and GPS mast)")])])]),e._v(" "),i("li",[e._v("Radio control system\n"),i("ul",[i("li",[e._v("Any "),i("RouterLink",{attrs:{to:"/ko/getting_started/rc_transmitter_receiver.html"}},[e._v("PX4-compatible RC System")]),e._v(" can be used.")],1),e._v(" "),i("li",[e._v("An "),i("em",[e._v("FrSky Taranis")]),e._v(" transmitter with R-XSR receiver is one of the more popular setups.")])])]),e._v(" "),i("li",[e._v("An H2.0 Hex Key (to unscrew the top plate so that an RC receiver can be connected)")])]),e._v(" "),i("p",[e._v("In addition, users will need ground station hardware/software:")]),e._v(" "),i("ul",[i("li",[e._v("Laptop or tablet running "),i("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/qgc-user-guide/getting_started/download_and_install.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("QGroundControl"),i("OutboundLink")],1),e._v(" (QGC).")])]),e._v(" "),i("h2",{attrs:{id:"first-time-setup"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#first-time-setup"}},[e._v("#")]),e._v(" First-time Setup")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("Attach a "),i("RouterLink",{attrs:{to:"/ko/getting_started/rc_transmitter_receiver.html#connecting-receivers"}},[e._v("compatible RC receiver")]),e._v(" to the vehicle (not supplied with kit):")],1),e._v(" "),i("ul",[i("li",[e._v("Remove/unscrew the top plate (where the battery goes) using an H2.0 hex key tool.")]),e._v(" "),i("li",[i("RouterLink",{attrs:{to:"/ko/assembly/quick_start_pixhawk4.html#radio-control"}},[e._v("Connect the receiver to the flight controller")]),e._v(".")],1),e._v(" "),i("li",[e._v("Re-attach the top plate.")]),e._v(" "),i("li",[e._v("Mount the RC receiver on the "),i("em",[e._v("UP Core")]),e._v(" carrier board plate at the back of the vehicle (use zipties or double-sided tape).")]),e._v(" "),i("li",[e._v("Ensure the antennas are clear of any obstructions and electrically isolated from the frame (e.g. secure them under the carrier board or to the vehicle arms or legs).")])])]),e._v(" "),i("li",[i("p",[i("RouterLink",{attrs:{to:"/ko/getting_started/rc_transmitter_receiver.html#binding"}},[e._v("Bind")]),e._v(" the RC ground and air units (if not already done).\nThe binding procedure depends on the specific radio system used (read the receiver manual).")],1)]),e._v(" "),i("li",[i("p",[e._v("Raise the GPS mast to the vertical position and screw the cover onto the holder on the base plate. (Not required for v1.5)")]),e._v(" "),i("p",[i("img",{attrs:{src:o(1621),alt:"Raise GPS mast"}})])]),e._v(" "),i("li",[i("p",[e._v("Insert the pre-imaged USB2.0 stick from the kit into the "),i("em",[e._v("UP Core")]),e._v(" port labeled "),i("code",[e._v("USB1")]),e._v(" (highlighted below).")]),e._v(" "),i("p",[i("img",{attrs:{src:o(1622),alt:"UP Core: USB1 Port "}})])]),e._v(" "),i("li",[i("p",[e._v("Power the vehicle with a fully charged battery.")]),e._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),i("p",[e._v("Ensure propellers are removed before connecting the battery.")])])])]),e._v(" "),i("p",[e._v(":::")]),e._v(" "),i("ol",{attrs:{start:"6"}},[i("li",[i("p",[e._v("Connect the ground station to the vehicle WiFi network (after a few seconds) using the following default credentials:")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("SSID:")]),e._v(" pixhawk4")]),e._v(" "),i("li",[i("strong",[e._v("Password:")]),e._v(" pixhawk4")])]),e._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),i("p",[e._v("WiFi network SSID, password, and other credentials may be changed after connecting (if desired), by using a web browser to open the URL: "),i("code",[e._v("http://192.168.4.1")]),e._v(".\nThe baud rate must not be changed from 921600.")])])])]),e._v(" "),i("p",[e._v(":::")]),e._v(" "),i("ol",{attrs:{start:"7"}},[i("li",[i("p",[e._v("Start "),i("em",[e._v("QGroundControl")]),e._v(" on the ground station.")])]),e._v(" "),i("li",[i("p",[i("RouterLink",{attrs:{to:"/ko/config/"}},[e._v("Configure/calibrate")]),e._v(" the vehicle:")],1),e._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),i("p",[e._v("The vehicle should arrive pre-calibrated (e.g. with firmware, airframe, battery, and sensors all setup).\nYou will however need to calibrate the radio system (that you just connected) and it is often worth re-doing the compass calibration.")])])])]),e._v(" "),i("p",[e._v(":::")]),e._v(" "),i("ul",[i("li",[i("RouterLink",{attrs:{to:"/ko/config/radio.html"}},[e._v("Calibrate the Radio System")])],1),e._v(" "),i("li",[i("RouterLink",{attrs:{to:"/ko/config/compass.html"}},[e._v("Calibrate the Compass")])],1)]),e._v(" "),i("ol",{attrs:{start:"9"}},[i("li",[i("p",[e._v("(Optional) Configure a "),i("RouterLink",{attrs:{to:"/ko/config/flight_mode.html"}},[e._v("Flight Mode selector switch")]),e._v(" on the remote controller.")],1),e._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),i("p",[e._v("Modes can also be changed using "),i("em",[e._v("QGroundControl")])])])])]),e._v(" "),i("p",[e._v(":::")]),e._v(" "),i("p",[e._v("We recommend RC controller switches are define for:")]),e._v(" "),i("ul",[i("li",[i("RouterLink",{attrs:{to:"/ko/flight_modes_mc/position.html"}},[e._v("Position Mode")]),e._v(" - a safe manual flight mode that can be used to test collision prevention.")],1),e._v(" "),i("li",[i("RouterLink",{attrs:{to:"/ko/flight_modes_mc/mission.html"}},[e._v("Mission Mode")]),e._v(" - run missions and test obstacle avoidance.")],1),e._v(" "),i("li",[i("RouterLink",{attrs:{to:"/ko/flight_modes_mc/return.html"}},[e._v("Return Mode")]),e._v(" - return vehicle safely to its launch point and land.")],1)]),e._v(" "),i("ol",{attrs:{start:"10"}},[i("li",[i("p",[e._v("Attach the propellers with the rotations as shown:")]),e._v(" "),i("p",[i("img",{attrs:{src:o(1623),alt:"Motor Order Diagram"}})]),e._v(" "),i("ul",[i("li",[i("p",[e._v("The propellers directions can be determined from the labels: "),i("em",[e._v("6045")]),e._v(" (normal, counter-clockwise) and "),i("em",[e._v("6045")]),i("strong",[e._v("R")]),e._v(" (reversed, clockwise).")]),e._v(" "),i("p",[i("img",{attrs:{src:o(1624),alt:"Propeller identification"}})])]),e._v(" "),i("li",[i("p",[e._v("Screw down firmly using the provided propellor nuts:")]),e._v(" "),i("p",[i("img",{attrs:{src:o(1625),alt:"Propeller nuts"}})])])])])]),e._v(" "),i("h2",{attrs:{id:"fly-the-drone-with-avoidance"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#fly-the-drone-with-avoidance"}},[e._v("#")]),e._v(" Fly the Drone with Avoidance")]),e._v(" "),i("p",[e._v("When the vehicle setup described above is complete:")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("Connect the battery to power the vehicle.")])]),e._v(" "),i("li",[i("p",[e._v("Wait until the boot sequence completes and the avoidance system has started (the vehicle will reject arming commands during boot).")]),e._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),i("p",[e._v("The boot/startup process takes around 1 minute from the supplied USB stick (or 30 seconds from "),i("a",{attrs:{href:"#install_image_mission_computer"}},[e._v("internal memory")]),e._v(").")])])])]),e._v(" "),i("p",[e._v(":::")]),e._v(" "),i("ol",{attrs:{start:"3"}},[i("li",[i("p",[e._v("Check that the avoidance system has started properly:")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("The "),i("em",[e._v("QGroundControl")]),e._v(" notification log displays the message: "),i("strong",[e._v("Avoidance system connected")]),e._v(".")]),e._v(" "),i("p",[i("img",{attrs:{src:o(1626),alt:"QGC Log showing avoidance system has started"}})])]),e._v(" "),i("li",[i("p",[e._v("A red laser is visible on the front of the "),i("em",[e._v("Structure Core")]),e._v(" camera.")])])])]),e._v(" "),i("li",[i("p",[e._v("Wait for the GPS LED to turn green.\nThis means that the vehicle has a GPS fix and is ready to fly!")])]),e._v(" "),i("li",[i("p",[e._v("Connect the ground station to the vehicle WiFi network.")])]),e._v(" "),i("li",[i("p",[e._v("Find a safe outdoor location for flying, ideally with a tree or some other convenient obstacle for testing PX4 Vision.")])]),e._v(" "),i("li",[i("p",[e._v("To test "),i("RouterLink",{attrs:{to:"/ko/computer_vision/collision_prevention.html"}},[e._v("collision prevention")]),e._v(", enable "),i("RouterLink",{attrs:{to:"/ko/flight_modes_mc/position.html"}},[e._v("Position Mode")]),e._v(" and fly manually towards an obstacle.\nThe vehicle should slow down and then stop within 6m of the obstacle (the distance can be "),i("RouterLink",{attrs:{to:"/ko/advanced_config/parameters.html"}},[e._v("changed")]),e._v(" using the "),i("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#CP_DIST"}},[e._v("CP_DIST")]),e._v(" parameter).")],1)]),e._v(" "),i("li",[i("p",[e._v("To test "),i("RouterLink",{attrs:{to:"/ko/computer_vision/obstacle_avoidance.html"}},[e._v("obstacle avoidance")]),e._v(", create a mission where the path is blocked by an obstacle.\nThen switch to "),i("RouterLink",{attrs:{to:"/ko/flight_modes_mc/mission.html"}},[e._v("Mission Mode")]),e._v(" to run the mission, and observe the vehicle moving around the obstacle and then returning to the planned course.")],1)])]),e._v(" "),i("h2",{attrs:{id:"development-using-the-kit"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#development-using-the-kit"}},[e._v("#")]),e._v(" Development using the Kit")]),e._v(" "),i("p",[e._v("The following sections explain how to use the kit as an environment for developing computer vision software.")]),e._v(" "),i("h3",{attrs:{id:"px4-avoidance-overview"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#px4-avoidance-overview"}},[e._v("#")]),e._v(" PX4 Avoidance Overview")]),e._v(" "),i("p",[e._v("The "),i("em",[e._v("PX4 Avoidance")]),e._v(" system consists of computer vision software running on a companion computer (with attached depth camera) that provides obstacle and/or route information to the PX4 flight stack running on a "),i("em",[e._v("flight controller")]),e._v(".")]),e._v(" "),i("p",[e._v("Documentation about the companion computer vision/planning software can be found on github here: "),i("a",{attrs:{href:"https://github.com/PX4/PX4-Avoidance",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4/PX4-Avoidance"),i("OutboundLink")],1),e._v(".\nThe project provides a number of different planner implementations (packaged as ROS nodes):")]),e._v(" "),i("ul",[i("li",[e._v("The PX4 Vision Kit runs the "),i("em",[e._v("localplanner")]),e._v(" by default and this is the recommended starting point for your own software.")]),e._v(" "),i("li",[e._v("The "),i("em",[e._v("globalplanner")]),e._v(" has not been tested with this kit.")]),e._v(" "),i("li",[e._v("The "),i("em",[e._v("landing planner")]),e._v(" requires a downward facing camera, and cannot used without first modifying the camera mounting.")])]),e._v(" "),i("p",[e._v("PX4 and the companion computer exchange data over "),i("a",{attrs:{href:"https://mavlink.io/en/",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAVLink"),i("OutboundLink")],1),e._v(" using these interfaces:")]),e._v(" "),i("ul",[i("li",[i("RouterLink",{attrs:{to:"/ko/computer_vision/path_planning_interface.html"}},[e._v("Path Planning Interface")]),e._v(" - API for implementing avoidance features in automatic modes.")],1),e._v(" "),i("li",[i("RouterLink",{attrs:{to:"/ko/computer_vision/collision_prevention.html"}},[e._v("Collision Prevention Interface")]),e._v(" - API for vehicle based avoidance in manual position mode based on an obstacle map (currently used for collision prevention).")],1)]),e._v(" "),i("p",[i("a",{attrs:{id:"install_image_mission_computer"}})]),e._v(" "),i("h3",{attrs:{id:"installing-the-image-on-the-companion-computer"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#installing-the-image-on-the-companion-computer"}},[e._v("#")]),e._v(" Installing the image on the Companion Computer")]),e._v(" "),i("p",[e._v("You can install the image on the "),i("em",[e._v("UP Core")]),e._v(" and boot from internal memory (instead of the USB stick).")]),e._v(" "),i("p",[e._v("This is recommended because booting from internal memory is much faster, frees up a USB port, and may well provide more memory than your USB stick.")]),e._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),i("p",[e._v("Booting from internal memory takes around 30 seconds while booting from the supplied USB2 stick boots in about a minute (other cards may take several times longer).")])]),e._v(" "),i("p",[e._v("To flash the USB image to the "),i("em",[e._v("UP Core")]),e._v(":")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("Insert the pre-flashed USB drive into the "),i("em",[e._v("UP Core")]),e._v(" port labeled "),i("code",[e._v("USB1")]),e._v(".")])]),e._v(" "),i("li",[i("p",[i("a",{attrs:{href:"#login_mission_computer"}},[e._v("Login to the companion computer")]),e._v(" (as described above).")])]),e._v(" "),i("li",[i("p",[e._v("Open a terminal and run the following command to copy the image onto internal memory (eMMC).\nThe terminal will prompt for a number of responses during the flashing process.")]),e._v(" "),i("div",{staticClass:"language-sh extra-class"},[i("pre",{pre:!0,attrs:{class:"language-sh"}},[i("code",[i("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" ~/catkin_ws/src/px4vision_ros/tools\n"),i("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" ./flash_emmc.sh\n")])])]),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),i("p",[e._v("All information saved in the "),i("em",[e._v("UP Core")]),e._v(" computer will be removed when executing this script.")])])])]),e._v(" "),i("p",[e._v(":::")]),e._v(" "),i("ol",{attrs:{start:"4"}},[i("li",[i("p",[e._v("Pull out the USB stick.")])]),e._v(" "),i("li",[i("p",[e._v("Restart the vehicle.\nThe "),i("em",[e._v("UP Core")]),e._v(" computer will now boot from internal memory (eMMC).")])])]),e._v(" "),i("h3",{attrs:{id:"boot-the-companion-computer"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#boot-the-companion-computer"}},[e._v("#")]),e._v(" Boot the Companion Computer")]),e._v(" "),i("p",[e._v("First insert the provided USB2.0 stick into the "),i("em",[e._v("UP Core")]),e._v(" port labeled "),i("code",[e._v("USB1")]),e._v(", and then power the vehicle using a 4S battery.\nThe avoidance system should start within about 1 minute (though this does depend on the USB stick supplied).")]),e._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),i("p",[i("a",{attrs:{href:"#fly-the-drone-with-avoidance"}},[e._v("Fly the Drone with Avoidance")]),e._v(" additionally explains how to verify that the avoidance system is active.")])]),e._v(" "),i("p",[e._v("If you've already "),i("a",{attrs:{href:"#install_image_mission_computer"}},[e._v("installed the image on the companion computer")]),e._v(" you can just power the vehicle (i.e. no USB stick is needed).\nThe avoidance system should be up and running within around 30 seconds.")]),e._v(" "),i("p",[e._v("Once started the companion computer can be used both as a computer vision development environment and for running the software.")]),e._v(" "),i("p",[i("a",{attrs:{id:"login_mission_computer"}})]),e._v(" "),i("h3",{attrs:{id:"login-to-the-companion-computer"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#login-to-the-companion-computer"}},[e._v("#")]),e._v(" Login to the Companion Computer")]),e._v(" "),i("p",[e._v("To login to the companion computer:")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("Connect a keyboard and mouse to the "),i("em",[e._v("UP Core")]),e._v(" via port "),i("code",[e._v("USB2")]),e._v(":")]),e._v(" "),i("p",[i("img",{attrs:{src:o(1627),alt:"UP Core: USB2"}})]),e._v(" "),i("ul",[i("li",[i("p",[e._v("Use the USB-JST cable from the kit to get a USB A connector")]),e._v(" "),i("p",[i("img",{attrs:{src:o(1628),alt:"USB to JST cable"}})])]),e._v(" "),i("li",[i("p",[e._v("A USB hub can be attached to the cable if the keyboard and mouse have separate connectors.")])])])]),e._v(" "),i("li",[i("p",[e._v("Connect a monitor to the "),i("em",[e._v("UP Core")]),e._v(" HDMI port.")]),e._v(" "),i("p",[i("img",{attrs:{src:o(1629),alt:"UP Core: HDMI port"}})]),e._v(" "),i("p",[e._v("The Ubuntu login screen should then appear on the monitor.")])]),e._v(" "),i("li",[i("p",[e._v("Login to the "),i("em",[e._v("UP Core")]),e._v(" using the credentials:")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("Username:")]),e._v(" px4vision")]),e._v(" "),i("li",[i("strong",[e._v("Password:")]),e._v(" px4vision")])])])]),e._v(" "),i("h3",{attrs:{id:"developing-extending-px4-avoidance"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#developing-extending-px4-avoidance"}},[e._v("#")]),e._v(" Developing/Extending PX4 Avoidance")]),e._v(" "),i("p",[e._v("The PX4 Vision's "),i("em",[e._v("UP Core")]),e._v(" computer provides a complete and fully configured environment for extending PX4 Avoidance software (and more generally, for developing new computer vision algorithms using ROS 2).\nYou should develop and test your software on the vehicle, sync it to your own git repository, and share any fixes and improvements with the wider PX4 community on the github "),i("a",{attrs:{href:"https://github.com/PX4/PX4-Avoidance",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4/PX4-Avoidance"),i("OutboundLink")],1),e._v(" repo.")]),e._v(" "),i("p",[e._v("The catkin workspace is at "),i("code",[e._v("~/catkin_ws")]),e._v(", and is preconfigured for running the PX4 avoidance local planner.\nThe launch-from-boot file ("),i("code",[e._v("avoidance.launch")]),e._v(") is in the "),i("code",[e._v("px4vision_ros")]),e._v(" package (modify this file to change what planner is launched).")]),e._v(" "),i("p",[e._v("The avoidance package is started on boot.\nTo integrate a different planner, this needs to be disabled.")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("Disable the avoidance process using the following command:")]),e._v(" "),i("div",{staticClass:"language-sh extra-class"},[i("pre",{pre:!0,attrs:{class:"language-sh"}},[i("code",[e._v("systemctl stop avoidance.service\n")])])]),i("p",[e._v("You can simply reboot the machine to restart the service.")]),e._v(" "),i("p",[e._v("Other useful commands are:")]),e._v(" "),i("div",{staticClass:"language-sh extra-class"},[i("pre",{pre:!0,attrs:{class:"language-sh"}},[i("code",[i("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# restart service")]),e._v("\nsystemctl start avoidance.service\n\n"),i("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# disable service (stop service and do not restart after boot)")]),e._v("\nsystemctl disable avoidance.service\n\n"),i("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# enable service (start service and enable restart after boot)")]),e._v("\nsystemctl "),i("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("enable")]),e._v(" avoidance.service\n")])])])]),e._v(" "),i("li",[i("p",[e._v("The source code of the obstacle avoidance package can be found in https://github.com/PX4/PX4-Avoidance which is located in "),i("code",[e._v("~/catkin_ws/src/avoidance")]),e._v(".")])]),e._v(" "),i("li",[i("p",[e._v("Make changes to the code! To get the latest code of avoidance pull the code from the avoidance repo:")]),e._v(" "),i("div",{staticClass:"language-sh extra-class"},[i("pre",{pre:!0,attrs:{class:"language-sh"}},[i("code",[i("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" pull origin\n"),i("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout origin/master\n")])])])]),e._v(" "),i("li",[i("p",[e._v("Build the package")]),e._v(" "),i("div",{staticClass:"language-sh extra-class"},[i("pre",{pre:!0,attrs:{class:"language-sh"}},[i("code",[e._v("catkin build local_planner\n")])])])])]),e._v(" "),i("p",[e._v("The ROS workspace is placed in "),i("code",[e._v("~/catkin_ws")]),e._v(".\nFor reference on developing in ROS and using the catkin workspace, see the "),i("a",{attrs:{href:"http://wiki.ros.org/catkin/Tutorials",target:"_blank",rel:"noopener noreferrer"}},[e._v("ROS catkin tutorials"),i("OutboundLink")],1),e._v(".")]),e._v(" "),i("h3",{attrs:{id:"developing-px4-firmware"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#developing-px4-firmware"}},[e._v("#")]),e._v(" Developing PX4 Firmware")]),e._v(" "),i("p",[e._v("The kit is designed for creating computer vision software that runs on the companion computer, and which integrates with PX4’s flexible path planning and collision prevention interfaces.")]),e._v(" "),i("p",[e._v("You can also modify PX4 itself, and "),i("RouterLink",{attrs:{to:"/ko/config/firmware.html#custom"}},[e._v("install it as custom firmware")]),e._v(":")],1),e._v(" "),i("ul",[i("li",[e._v("You will need to connect "),i("em",[e._v("QGroundControl")]),e._v(" to the kit's "),i("em",[e._v("Pixhawk")]),e._v(" "),i("strong",[e._v("via USB")]),e._v(" in order to update firmware.")]),e._v(" "),i("li",[e._v("Select the "),i("em",[e._v("PX4 Vision DevKit")]),e._v(" airframe after loading new firmware:\n"),i("img",{attrs:{src:o(1630),alt:"Airframe Selection - PX4 Vision DevKit"}})])]),e._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),i("p",[e._v("Modification of PX4 code is not "),i("em",[e._v("needed")]),e._v(" to meet most computer vision use cases.\nTo discuss the interfaces or how to integrate other features join the "),i("RouterLink",{attrs:{to:"/ko/contribute/support.html"}},[e._v("PX4 support channels")]),e._v(".")],1)]),e._v(" "),i("h2",{attrs:{id:"px4-vision-carrier-board-pinouts"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#px4-vision-carrier-board-pinouts"}},[e._v("#")]),e._v(" PX4 Vision Carrier Board Pinouts")]),e._v(" "),i("p",[e._v("Information for the PX4 Vision 1.15 can be found at "),i("a",{attrs:{href:"https://docs.holybro.com/drone-development-kit/px4-vision-dev-kit-v1.5",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.holybro.com"),i("OutboundLink")],1),e._v(".\nThe carrier board pinouts and other information are in the "),i("a",{attrs:{href:"https://docs.holybro.com/drone-development-kit/px4-vision-dev-kit-v1.5/downloads",target:"_blank",rel:"noopener noreferrer"}},[e._v("downloads section"),i("OutboundLink")],1),e._v(".")]),e._v(" "),i("h2",{attrs:{id:"other-development-resources"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#other-development-resources"}},[e._v("#")]),e._v(" Other Development Resources")]),e._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"https://github.com/up-board/up-community/wiki/Ubuntu",target:"_blank",rel:"noopener noreferrer"}},[i("em",[e._v("UP Core")]),e._v(" Wiki"),i("OutboundLink")],1),e._v(" - "),i("em",[e._v("Up Core")]),e._v(" companion computer technical information")]),e._v(" "),i("li",[i("a",{attrs:{href:"https://structure.io/developers",target:"_blank",rel:"noopener noreferrer"}},[e._v("Occipital Developer Forum"),i("OutboundLink")],1),e._v(" - "),i("em",[e._v("Structure Core")]),e._v(" camera information")]),e._v(" "),i("li",[i("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk4.html"}},[e._v("Pixhawk 4 Overview")])],1),e._v(" "),i("li",[i("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk6c.html"}},[e._v("Pixhawk 6C Overview")])],1),e._v(" "),i("li",[i("a",{attrs:{href:"https://github.com/PX4/PX4-Avoidance",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4 Avoidance software/documentation"),i("OutboundLink")],1)]),e._v(" "),i("li",[i("RouterLink",{attrs:{to:"/ko/computer_vision/path_planning_interface.html"}},[e._v("Path Planning Interface")])],1)]),e._v(" "),i("h2",{attrs:{id:"how-to-get-technical-support"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#how-to-get-technical-support"}},[e._v("#")]),e._v(" How to get Technical Support")]),e._v(" "),i("p",[e._v("For hardware issues, please contact Holybro at: "),i("a",{attrs:{href:"mailto:productservice@holybro.com"}},[e._v("productservice@holybro.com")]),e._v(".")]),e._v(" "),i("p",[e._v("For software issues, use the following community support channels:")]),e._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"https://wikifactory.com/+holybro/px4-vision",target:"_blank",rel:"noopener noreferrer"}},[e._v("Holybro PX4 Vision Wikifactory"),i("OutboundLink")],1)]),e._v(" "),i("li",[i("RouterLink",{attrs:{to:"/ko/contribute/support.html"}},[e._v("PX4 Support channels")])],1)])])}),[],!1,null,null,null);t.default=a.exports}}]);