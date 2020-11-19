(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{1101:function(e,t,o){e.exports=o.p+"assets/img/qgc_main_screen.e562d4c1.jpg"},1102:function(e,t,o){e.exports=o.p+"assets/img/pixhawk4_main_aux_ports.ab72e7e9.jpg"},1103:function(e,t,o){e.exports=o.p+"assets/img/pixhawk4mini_pwm.3818131b.png"},1104:function(e,t,o){e.exports=o.p+"assets/img/frame_heading_top.e8e4ffe3.png"},1670:function(e,t,o){"use strict";o.r(t);var r=o(18),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"basic-concepts"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#basic-concepts"}},[e._v("#")]),e._v(" Basic Concepts")]),e._v(" "),r("p",[e._v("This topic provides a basic introduction to drones and using PX4 (it is meant mostly for novice users but is also a good introduction for experienced users).")]),e._v(" "),r("p",[e._v("If you are already familiar with the basic concepts, you can move on to "),r("RouterLink",{attrs:{to:"/en/assembly/"}},[e._v("Basic Assembly")]),e._v(" to learn how to wire your specific autopilot hardware.\nTo load firmware and set up the vehicle with "),r("em",[e._v("QGroundControl")]),e._v(", see "),r("RouterLink",{attrs:{to:"/en/config/"}},[e._v("Basic Configuration")]),e._v(".")],1),e._v(" "),r("h2",{attrs:{id:"what-is-a-drone"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#what-is-a-drone"}},[e._v("#")]),e._v(" What is a Drone?")]),e._v(" "),r("p",[e._v('A drone is an unmanned "robotic" vehicle that can be remotely or autonomously controlled.')]),e._v(" "),r("p",[e._v("Drones are used for many "),r("a",{attrs:{href:"https://px4.io/ecosystem/commercial-systems/",target:"_blank",rel:"noopener noreferrer"}},[e._v("consumer, industrial, government and military applications"),r("OutboundLink")],1),e._v(".\nThese include (non exhaustively): aerial photography/video, carrying cargo, racing, search and surveying etc.")]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Tip")]),e._v(" Different types of drones exist for use in air, ground, sea, and underwater.\nThese are (more formally) referred to as Unmanned Aerial Vehicles (UAV), Unmanned Aerial Systems (UAS), Unmanned Ground Vehicles (UGV), Unmanned Surface Vehicles (USV), Unmanned Underwater Vehicles (UUV).")])]),e._v(" "),r("p",[e._v('The "brain" of the drone is called an autopilot.\nIt consists of '),r("em",[e._v("flight stack")]),e._v(" software running on "),r("em",[e._v("vehicle controller")]),e._v(' ("flight controller") hardware.')]),e._v(" "),r("p",[r("span",{attrs:{id:"autopilot"}})]),e._v(" "),r("h2",{attrs:{id:"px4-autopilot"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#px4-autopilot"}},[e._v("#")]),e._v(" PX4 Autopilot")]),e._v(" "),r("p",[r("a",{attrs:{href:"http://px4.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4"),r("OutboundLink")],1),e._v(" is powerful open source autopilot "),r("em",[e._v("flight stack")]),e._v(".")]),e._v(" "),r("p",[e._v("Some of PX4's key features are:")]),e._v(" "),r("ul",[r("li",[e._v("Controls "),r("RouterLink",{attrs:{to:"/en/airframes/airframe_reference.html"}},[e._v("many different vehicle frames/types")]),e._v(", including: aircraft (multicopters, fixed wing aircraft and VTOLs), ground vehicles and underwater vehicles.")],1),e._v(" "),r("li",[e._v("Great choice of hardware for "),r("a",{attrs:{href:"#vehicle_controller"}},[e._v("vehicle controller")]),e._v(", sensors and other peripherals.")]),e._v(" "),r("li",[e._v("Flexible and powerful "),r("a",{attrs:{href:"#flight_modes"}},[e._v("flight modes")]),e._v(" and "),r("a",{attrs:{href:"#safety"}},[e._v("safety features")]),e._v(".")])]),e._v(" "),r("p",[e._v("PX4 is a core part of a broader drone platform that includes the "),r("a",{attrs:{href:"#qgc"}},[e._v("QGroundControl")]),e._v(" ground station, "),r("a",{attrs:{href:"https://pixhawk.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Pixhawk hardware"),r("OutboundLink")],1),e._v(", and "),r("a",{attrs:{href:"http://mavsdk.mavlink.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAVSDK"),r("OutboundLink")],1),e._v(" for integration with companion computers, cameras and other hardware using the MAVLink protocol.\nPX4 is supported by the "),r("a",{attrs:{href:"https://www.dronecode.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Dronecode Project"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[r("span",{attrs:{id:"qgc"}})]),e._v(" "),r("h2",{attrs:{id:"qgroundcontrol"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#qgroundcontrol"}},[e._v("#")]),e._v(" QGroundControl")]),e._v(" "),r("p",[e._v("The Dronecode ground control station is called "),r("a",{attrs:{href:"http://qgroundcontrol.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("QGroundControl"),r("OutboundLink")],1),e._v(".\nYou can use "),r("em",[e._v("QGroundControl")]),e._v(" to load (flash) PX4 onto the "),r("RouterLink",{attrs:{to:"/en/getting_started/flight_controller_selection.html"}},[e._v("vehicle control hardware")]),e._v(", you can setup the vehicle, change different parameters, get real-time flight information and create and execute fully autonomous missions.")],1),e._v(" "),r("p",[r("em",[e._v("QGroundControl")]),e._v(" runs on Windows, Android, MacOS or Linux. Download and install it from "),r("a",{attrs:{href:"http://qgroundcontrol.com/downloads/",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[r("img",{attrs:{src:o(1101),alt:"QGC Main Screen"}})]),e._v(" "),r("p",[r("span",{attrs:{id:"vehicle_controller"}})]),e._v(" "),r("h2",{attrs:{id:"vehicle-flight-controller-board"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vehicle-flight-controller-board"}},[e._v("#")]),e._v(" Vehicle/Flight Controller Board")]),e._v(" "),r("p",[e._v("PX4 was initially designed to run on "),r("RouterLink",{attrs:{to:"/en/flight_controller/pixhawk_series.html"}},[e._v("Pixhawk Series")]),e._v(" controllers, but can now run on Linux computers and other hardware.\nYou should select a board that suits the physical constraints of your vehicle, the activities you wish to perform, and of course cost.")],1),e._v(" "),r("p",[e._v("For more information see: "),r("RouterLink",{attrs:{to:"/en/getting_started/flight_controller_selection.html"}},[e._v("Flight Controller Selection")]),e._v(".")],1),e._v(" "),r("h2",{attrs:{id:"sensors"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sensors"}},[e._v("#")]),e._v(" Sensors")]),e._v(" "),r("p",[e._v("PX4 uses sensors to determine vehicle state (needed for stabilization and to enable autonomous control).\nThe system "),r("em",[e._v("minimally requires")]),e._v(" a gyroscope, accelerometer, magnetometer (compass) and barometer.\nA GPS or other positioning system is needed to enable all automatic "),r("RouterLink",{attrs:{to:"/en/getting_started/flight_modes.html#categories"}},[e._v("modes")]),e._v(", and some assisted modes. Fixed wing and VTOL-vehicles should additionally include an airspeed sensor (very highly recommended).")],1),e._v(" "),r("p",[e._v("For more information see:")]),e._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/en/getting_started/sensor_selection.html"}},[e._v("Sensors")])],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/en/peripherals/"}},[e._v("Peripherals")])],1)]),e._v(" "),r("p",[r("span",{attrs:{id:"outputs"}})]),e._v(" "),r("h2",{attrs:{id:"outputs-motors-servos-actuators"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#outputs-motors-servos-actuators"}},[e._v("#")]),e._v(" Outputs: Motors, Servos, Actuators")]),e._v(" "),r("p",[e._v("PX4 uses "),r("em",[e._v("outputs")]),e._v(" to control: motor speed (e.g. via "),r("a",{attrs:{href:"#esc_and_motors"}},[e._v("ESC")]),e._v("), flight surfaces like ailerons and flaps, camera triggers, parachutes, grippers, and many other types of payloads.")]),e._v(" "),r("p",[e._v("For example, the images below show the PWM output ports for "),r("RouterLink",{attrs:{to:"/flight_controller/pixhawk4.html"}},[e._v("Pixhawk 4")]),e._v(" and "),r("RouterLink",{attrs:{to:"/en/flight_controller/pixhawk4_mini.html"}},[e._v("Pixhawk 4 mini")]),e._v(".")],1),e._v(" "),r("p",[r("img",{attrs:{src:o(1102),alt:"Pixhawk 4 output ports"}}),e._v(" "),r("img",{attrs:{src:o(1103),alt:"Pixhawk4 mini MAIN ports"}})]),e._v(" "),r("p",[e._v("The outputs are divided into "),r("code",[e._v("MAIN")]),e._v(" and "),r("code",[e._v("AUX")]),e._v(" outputs, and individually numbered (i.e. "),r("code",[e._v("MAINn")]),e._v(" and "),r("code",[e._v("AUXn")]),e._v(", where "),r("code",[e._v("n")]),e._v(" is 1 to usually 6 or 8).")]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Tip")]),e._v(" The specific purpose for each output is hard coded on a per-airframe basis.\nThe output mapping for all airframes is given in the "),r("RouterLink",{attrs:{to:"/en/airframes/airframe_reference.html"}},[e._v("Airframe Reference")]),e._v(".")],1)]),e._v(" "),r("p",[r("span")]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Warning")]),e._v(" A flight controller may only have "),r("code",[e._v("MAIN")]),e._v(" outputs (like the "),r("em",[e._v("Pixhawk 4 Mini")]),e._v("), or may have only 6 outputs on either "),r("code",[e._v("MAIN")]),e._v(" or "),r("code",[e._v("AUX")]),e._v(".\nEnsure that you select a controller that has enough of the right types of ports/outputs for your "),r("RouterLink",{attrs:{to:"/en/airframes/airframe_reference.html"}},[e._v("airframe")]),e._v(".")],1)]),e._v(" "),r("p",[e._v("Typically the "),r("code",[e._v("MAIN")]),e._v(" port is used for core flight controls while "),r("code",[e._v("AUX")]),e._v(" is used for non-critical actuators/payloads (though "),r("code",[e._v("AUX")]),e._v(" may be used for flight controls if there aren't enough "),r("code",[e._v("MAIN")]),e._v(" ports for the vehicle type- e.g. VTOL).\nFor example, in a "),r("RouterLink",{attrs:{to:"/en/airframes/airframe_reference.html#copter_quadrotor_x_generic_quadcopter"}},[e._v("Generic Quadcopter")]),e._v(" the "),r("code",[e._v("MAIN")]),e._v(" outputs 1-4 are used for corresponding motors, while the remaining "),r("code",[e._v("MAIN")]),e._v(" and some "),r("code",[e._v("AUX")]),e._v(" outputs are used for RC passthrough.")],1),e._v(" "),r("p",[e._v("The actual ports/bus used for the outputs on the "),r("a",{attrs:{href:"#vehicle_controller"}},[e._v("flight controller")]),e._v(" depends on the hardware and PX4 configuration.\n"),r("em",[e._v("Usually")]),e._v(" the ports are mapped to PWM outputs as shown above, which are commonly screen printed "),r("code",[e._v("MAIN OUT")]),e._v(" and "),r("code",[e._v("AUX OUT")]),e._v(".")]),e._v(" "),r("p",[e._v("They might also be marked as "),r("code",[e._v("FMU PWM OUT")]),e._v(" or "),r("code",[e._v("IO PWM Out")]),e._v(' (or similar).\nPixhawk controllers have a "main" FMU board and '),r("em",[e._v("may")]),e._v(" have a separate IO board.\nIf there is an IO board, the "),r("code",[e._v("AUX")]),e._v(" ports are connected directly to the FMU and the "),r("code",[e._v("MAIN")]),e._v(" ports are connected to the IO board.\nOtherwise the "),r("code",[e._v("MAIN")]),e._v(" ports are connected to the FMU, and there are no "),r("code",[e._v("AUX")]),e._v(" ports.\nThe FMU output ports can use "),r("RouterLink",{attrs:{to:"/en/peripherals/dshot.html"}},[e._v("D-shot")]),e._v(" or "),r("em",[e._v("One-shot")]),e._v(" protocols (as well as PWM), which provide much lower-latency behaviour.\nThis can be useful for racers and other airframes that require better performance.")],1),e._v(" "),r("p",[e._v("The output ports may also be mapped to UAVCAN nodes (e.g. UAVCAN "),r("RouterLink",{attrs:{to:"/en/peripherals/uavcan_escs.html"}},[e._v("motor controllers")]),e._v(").\nThe (same) airframe mapping of outputs to nodes is used in this case.")],1),e._v(" "),r("p",[r("strong",[e._v("Notes:")])]),e._v(" "),r("ul",[r("li",[e._v("There are only 6-8 outputs in "),r("code",[e._v("MAIN")]),e._v(" and "),r("code",[e._v("AUX")]),e._v(" because most flight controllers only have this many PWM/Dshot/Oneshot outputs.\nIn theory there can be many more outputs if the bus supports it (i.e. a UAVCAN bus is not limited to this few nodes).")])]),e._v(" "),r("p",[r("span",{attrs:{id:"esc_and_motors"}})]),e._v(" "),r("h2",{attrs:{id:"escs-motors"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#escs-motors"}},[e._v("#")]),e._v(" ESCs & Motors")]),e._v(" "),r("p",[e._v("Many PX4 drones use brushless motors that are driven by the flight controller via an Electronic Speed Controller (ESC)\n(the ESC converts a signal from the flight controller to an appropriate level of power delivered to the motor).")]),e._v(" "),r("p",[e._v("For information about what ESC/Motors are supported by PX4 see:")]),e._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/en/peripherals/esc_motors.html"}},[e._v("ESC & Motors")])],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/en/advanced_config/esc_calibration.html"}},[e._v("ESC Calibration")])],1),e._v(" "),r("li",[r("a",{attrs:{href:"https://oscarliang.com/esc-firmware-protocols/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ESC Firmware and Protocols Overview"),r("OutboundLink")],1),e._v(" (oscarliang.com)")])]),e._v(" "),r("h2",{attrs:{id:"battery-power"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#battery-power"}},[e._v("#")]),e._v(" Battery/Power")]),e._v(" "),r("p",[e._v("PX4 drones are mostly commonly powered from Lithium-Polymer (LiPo) batteries.\nThe battery is typically connected to the system using a "),r("em",[e._v("Power Module")]),e._v(" or "),r("em",[e._v("Power Management Board")]),e._v(",\nwhich provide separate power for the flight controller and to the ESCs (for the motors).")]),e._v(" "),r("p",[e._v("Information about batteries and battery configuration can be found in "),r("RouterLink",{attrs:{to:"/en/config/battery.html"}},[e._v("Battery Configuration")]),e._v("\nand the guides in "),r("RouterLink",{attrs:{to:"/en/assembly/"}},[e._v("Basic Assembly")]),e._v(" (e.g. "),r("RouterLink",{attrs:{to:"/en/assembly/quick_start_pixhawk4.html#power"}},[e._v("Pixhawk 4 Wiring Quick Start > Power")]),e._v(").")],1),e._v(" "),r("p",[r("span",{attrs:{id:"rc_systems"}})]),e._v(" "),r("h2",{attrs:{id:"radio-control-rc"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#radio-control-rc"}},[e._v("#")]),e._v(" Radio Control (RC)")]),e._v(" "),r("p",[e._v("A "),r("RouterLink",{attrs:{to:"/en/getting_started/rc_transmitter_receiver.html"}},[e._v("Radio Control (RC)")]),e._v(" system is used to "),r("em",[e._v("manually")]),e._v(" control the vehicle.\nIt consists of a remote control unit that uses a transmitter to communicate stick/control positions with a receiver based on the vehicle.\nSome RC systems can additionally receive telemetry information back from the autopilot.")],1),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Note")]),e._v(" PX4 does not require a remote control system for autonomous flight modes.")])]),e._v(" "),r("p",[r("img",{attrs:{src:o(365),alt:"Taranis X9D Transmitter"}})]),e._v(" "),r("p",[r("RouterLink",{attrs:{to:"/en/getting_started/rc_transmitter_receiver.html"}},[e._v("RC System Selection")]),e._v(" explains how to choose an RC system. Other related topics include:")],1),e._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/en/config/radio.html"}},[e._v("Radio/Remote Control Setup")]),e._v(" - Remote control configuration in "),r("em",[e._v("QGroundControl")]),e._v(".")],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/en/flying/basic_flying.html"}},[e._v("Flying 101")]),e._v(" - Learn how to fly with a remote control.")],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/en/peripherals/frsky_telemetry.html"}},[e._v("FrSky Telemetry")]),e._v(" - Set up the RC transmitter to receive telemetry/status updates from PX4.")],1)]),e._v(" "),r("p",[r("span",{attrs:{id:"joystick"}})]),e._v(" "),r("h2",{attrs:{id:"gcs-joystick-controller"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#gcs-joystick-controller"}},[e._v("#")]),e._v(" GCS Joystick Controller")]),e._v(" "),r("p",[e._v("A "),r("RouterLink",{attrs:{to:"/en/config/joystick.html"}},[e._v("computer joystick")]),e._v(" connected through "),r("em",[e._v("QGroundControl")]),e._v(" can also be used to manually control PX4 (QGC converts joystick movements into MAVLink messages that are sent over the telemetry link).\nThis approach is used by ground control units that have an integrated ground control station, like the "),r("em",[e._v("UAVComponents")]),e._v(" "),r("a",{attrs:{href:"https://www.uavcomp.com/command-control/micronav/",target:"_blank",rel:"noopener noreferrer"}},[e._v("MicroNav"),r("OutboundLink")],1),e._v(" shown below.\nJoysticks are also commonly used to fly the vehicle in simulation.")],1),e._v(" "),r("p",[r("img",{attrs:{src:o(357),alt:"Joystick MicroNav."}})]),e._v(" "),r("p",[r("span",{attrs:{id:"safety_switch"}})]),e._v(" "),r("h2",{attrs:{id:"safety-switch"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#safety-switch"}},[e._v("#")]),e._v(" Safety Switch")]),e._v(" "),r("p",[e._v("It is common for vehicles to have a "),r("em",[e._v("safety switch")]),e._v(" that must be engaged before the vehicle can be "),r("a",{attrs:{href:"#arming"}},[e._v("armed")]),e._v(" (when armed, motors are powered and propellers can turn).\nCommonly the safety switch is integrated into a GPS unit, but it may also be a separate physical component.")]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Note")]),e._v(" A vehicle that is armed is potentially dangerous.\nThe safety switch is an additional mechanism that prevents arming from happening by accident.")])]),e._v(" "),r("h2",{attrs:{id:"data-telemetry-radios"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#data-telemetry-radios"}},[e._v("#")]),e._v(" Data/Telemetry Radios")]),e._v(" "),r("p",[r("RouterLink",{attrs:{to:"/en/telemetry/"}},[e._v("Data/Telemetry Radios")]),e._v(" can provide a wireless MAVLink connection between a ground control station like "),r("em",[e._v("QGroundControl")]),e._v(" and a vehicle running PX4.\nThis makes it possible to tune parameters while a vehicle is in flight, inspect telemetry in real-time, change a mission on the fly, etc.")],1),e._v(" "),r("h2",{attrs:{id:"offboard-companion-computer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#offboard-companion-computer"}},[e._v("#")]),e._v(" Offboard/Companion Computer")]),e._v(" "),r("p",[e._v("PX4 can be controlled from a separate on-vehicle companion computer via a serial cable or wifi.\nThe companion computer will usually communicate using a MAVLink API like the MAVSDK or MAVROS.")]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Note")]),e._v(" Using a Robotics API requires software development skills, and is outside the scope of this guide.")])]),e._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/en/flight_modes/offboard.html"}},[e._v("Off-board Mode")]),e._v(" - Flight mode for offboard control of PX4 from a GCS or companion computer.")],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/en/robotics/"}},[e._v("Robotics APIs")]),e._v(" (PX4 Developer Guide)")],1)]),e._v(" "),r("p",[r("span",{attrs:{id:"sd_cards"}})]),e._v(" "),r("h2",{attrs:{id:"sd-cards-removable-memory"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sd-cards-removable-memory"}},[e._v("#")]),e._v(" SD Cards (Removable Memory)")]),e._v(" "),r("p",[e._v("PX4 uses SD memory cards for storing "),r("RouterLink",{attrs:{to:"/en/getting_started/flight_reporting.html"}},[e._v("flight logs")]),e._v(", and they are also required in order to use UAVCAN peripherals and fly "),r("RouterLink",{attrs:{to:"/en/flying/missions.html"}},[e._v("missions")]),e._v(".")],1),e._v(" "),r("p",[e._v("By default, if no SD card is present PX4 will play the "),r("RouterLink",{attrs:{to:"/en/getting_started/tunes.html#format-failed"}},[e._v("format failed (2-beep)")]),e._v(" tune twice during boot (and none of the above features will be available).")],1),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Tip")]),e._v(" The maximum supported SD card size on Pixhawk boards is 32GB.\nThe "),r("em",[e._v("SanDisk Extreme U3 32GB")]),e._v(" is "),r("RouterLink",{attrs:{to:"/en/dev_log/logging.html#sd-cards"}},[e._v("highly recommended")]),e._v(" (Developer Guide).")],1)]),e._v(" "),r("p",[e._v("SD cards are never-the-less optional.\nFlight controllers that do not include an SD Card slot may:")]),e._v(" "),r("ul",[r("li",[e._v("Disable notification beeps are disabled using the parameter "),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#CBRK_BUZZER"}},[e._v("CBRK_BUZZER")]),e._v(".")],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/en/dev_log/logging.html#log-streaming"}},[e._v("Stream logs")]),e._v(" to another component (companion).")],1),e._v(" "),r("li",[e._v("Store missions in RAM/FLASH.\n")])]),e._v(" "),r("p",[r("span",{attrs:{id:"arming"}})]),e._v(" "),r("h2",{attrs:{id:"arming-and-disarming"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#arming-and-disarming"}},[e._v("#")]),e._v(" Arming and Disarming")]),e._v(" "),r("p",[e._v("Vehicles may have moving parts, some of which are potentially dangerous when powered (in particular motors and propellers)!")]),e._v(" "),r("p",[e._v("To reduce the chance of accidents:")]),e._v(" "),r("ul",[r("li",[e._v("PX4 vehicles are "),r("em",[e._v("disarmed")]),e._v(" (unpowered) when not in use, and must be explicitly "),r("em",[e._v("armed")]),e._v(" before taking off.")]),e._v(" "),r("li",[e._v("Some vehicles additionally require a "),r("RouterLink",{attrs:{to:"/en/getting_started/px4_basic_concepts.html#safety_switch"}},[e._v("safety switch")]),e._v(" be disengaged before arming can succeed.")],1),e._v(" "),r("li",[e._v('Arming is prevented if the vehicle is not in a "healthy" state.')]),e._v(" "),r("li",[e._v("Arming is prevented if a VTOL vehicle is in fixed-wing mode ("),r("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#CBRK_VTOLARMING"}},[e._v("by default")]),e._v(").")],1),e._v(" "),r("li",[e._v("A vehicle will also usually revert to the disarmed state after landing or if a pilot does not take off quickly enough.")])]),e._v(" "),r("p",[e._v("Arming is triggered by default (Mode 2 transmitters) by holding the RC throttle/yaw stick on the "),r("em",[e._v("bottom right")]),e._v(" for one second (to disarm, hold stick on bottom left).\nIt is also possible to configure PX4 to arm using an RC button on the RC control (and arming commands can be sent from a ground station).")]),e._v(" "),r("p",[e._v("A detailed overview of arming and disarming configuration can be found here: "),r("RouterLink",{attrs:{to:"/en/advanced_config/prearm_arm_disarm.html"}},[e._v("Prearm, Arm, Disarm Configuration")]),e._v(".")],1),e._v(" "),r("p",[r("span",{attrs:{id:"flight_modes"}})]),e._v(" "),r("h2",{attrs:{id:"flight-modes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#flight-modes"}},[e._v("#")]),e._v(" Flight Modes")]),e._v(" "),r("p",[e._v("Flight modes provide different types/levels of vehicle automation and autopilot assistance to the user (pilot).\n"),r("em",[e._v("Autonomous modes")]),e._v(" are fully controlled by the autopilot, and require no pilot/remote control input.\nThese are used, for example, to automate common tasks like takeoff, returning to the home position, and landing.\nOther autonomous modes execute pre-programmed missions, follow a GPS beacon, or accept commands from an offboard computer or ground station.")]),e._v(" "),r("p",[r("em",[e._v("Manual modes")]),e._v(" are controlled by the user (via the RC control sticks/joystick) with assistance from the autopilot.\nDifferent manual modes enable different flight characteristics - for example, some modes enable acrobatic tricks,\nwhile others are impossible to flip and will hold position/course against wind.")]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Tip")]),e._v(" Not all flight modes are available on all vehicle types, and some modes can only be used when specific conditions have been met (e.g. many modes require a global position estimate).")])]),e._v(" "),r("p",[e._v("An overview of the available flight modes "),r("RouterLink",{attrs:{to:"/en/getting_started/flight_modes.html"}},[e._v("can be found here")]),e._v(".\nInstructions for how to set up your remote control switches to turn on different flight modes is provided in "),r("RouterLink",{attrs:{to:"/en/config/flight_mode.html"}},[e._v("Flight Mode Configuration")]),e._v(".")],1),e._v(" "),r("p",[r("span",{attrs:{id:"safety"}})]),e._v(" "),r("h2",{attrs:{id:"safety-settings-failsafe"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#safety-settings-failsafe"}},[e._v("#")]),e._v(" Safety Settings (Failsafe)")]),e._v(" "),r("p",[e._v("PX4 has configurable failsafe systems to protect and recover your vehicle if something goes wrong!\nThese allow you to specify areas and conditions under which you can safely fly, and the action that will be performed if a failsafe is triggered (for example, landing, holding position, or returning to a specified point).")]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Note")]),e._v(" You can only specify the action for the "),r("em",[e._v("first")]),e._v(" failsafe event.\nOnce a failsafe occurs the system will enter special handling code, such that subsequent failsafe triggers are managed by separate system level and vehicle specific code.")])]),e._v(" "),r("p",[e._v("The main failsafe areas are listed below:")]),e._v(" "),r("ul",[r("li",[e._v("Low Battery")]),e._v(" "),r("li",[e._v("Remote Control (RC) Loss")]),e._v(" "),r("li",[e._v("Position Loss (global position estimate quality is too low).")]),e._v(" "),r("li",[e._v("Offboard Loss (e.g. lose connection to companion computer)")]),e._v(" "),r("li",[e._v("Data Link Loss (e.g. lose telemetry connection to GCS).")]),e._v(" "),r("li",[e._v("Geofence Breach (restrict vehicle to flight within a virtual cylinder).")]),e._v(" "),r("li",[e._v("Mission Failsafe (prevent a previous mission being run at a new takeoff location).")]),e._v(" "),r("li",[e._v("Traffic avoidance (triggered by transponder data from e.g. ADSB transponders).")])]),e._v(" "),r("p",[e._v("For more information see: "),r("RouterLink",{attrs:{to:"/en/config/safety.html"}},[e._v("Safety")]),e._v(" (Basic Configuration).")],1),e._v(" "),r("h2",{attrs:{id:"heading-and-directions"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#heading-and-directions"}},[e._v("#")]),e._v(" Heading and Directions")]),e._v(" "),r("p",[e._v("All the vehicles, boats and aircraft have a heading direction or an orientation based on their forward motion.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(356),alt:"Frame Heading"}})]),e._v(" "),r("blockquote",[r("p",[r("strong",[e._v("Note")]),e._v(" For a VTOL Tailsitter the heading is relative to the multirotor configuration (i.e. vehicle pose during, takeoff, hovering, landing).")])]),e._v(" "),r("p",[e._v("It is important to know the vehicle heading direction in order to align the autopilot with the vehicle vector of movement.\nMulticopters have a heading even when they are symmetrical from all sides!\nUsually manufacturers use a colored props or colored arms to indicate the heading.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(1104),alt:"Frame Heading TOP"}})]),e._v(" "),r("p",[e._v("In our illustrations we will use red coloring for the front propellers of multicopter to show heading.")]),e._v(" "),r("p",[e._v("You can read in depth about heading in "),r("RouterLink",{attrs:{to:"/en/config/flight_controller_orientation.html"}},[e._v("Flight Controller Orientation")])],1)])}),[],!1,null,null,null);t.default=a.exports},356:function(e,t,o){e.exports=o.p+"assets/img/frame_heading.f02fbdcf.png"},357:function(e,t,o){e.exports=o.p+"assets/img/micronav.8cbd07b4.jpg"},365:function(e,t,o){e.exports=o.p+"assets/img/frsky_taranis_x9d_transmitter.a26963aa.jpg"}}]);