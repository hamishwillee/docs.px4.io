(window.webpackJsonp=window.webpackJsonp||[]).push([[400],{1337:function(e,t,r){e.exports=r.p+"assets/img/mode1_mode2.ad4a1ca7.png"},2027:function(e,t,r){"use strict";r.r(t);var o=r(19),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"radio-control-systems"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#radio-control-systems"}},[e._v("#")]),e._v(" Radio Control Systems")]),e._v(" "),o("p",[e._v("A radio control (RC) system is required if you want to "),o("em",[e._v("manually")]),e._v(" control your vehicle from a handheld transmitter.\nThis topic explains a little about how RC works, how to choose an appropriate radio system for your vehicle, and how to connect it to your flight controller.")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),o("p",[e._v("PX4 does not require a remote control system for autonomous flight modes.\nYou can disable RC checks by "),o("RouterLink",{attrs:{to:"/en/advanced_config/parameters.html"}},[e._v("setting parameter")]),e._v(": "),o("RouterLink",{attrs:{to:"/en/advanced_config/parameter_reference.html#COM_RC_IN_MODE"}},[e._v("COM_RC_IN_MODE")]),e._v(" to 1.")],1)]),e._v(" "),o("h2",{attrs:{id:"how-do-rc-systems-work"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-do-rc-systems-work"}},[e._v("#")]),e._v(" How do RC Systems Work?")]),e._v(" "),o("p",[e._v("An "),o("em",[e._v("RC system")]),e._v(" has a ground-based "),o("em",[e._v("remote control unit")]),e._v(" that is used by the operator to command the vehicle.\nThe remote has physical controls that can be used to specify vehicle movement (e.g. speed, direction, throttle, yaw, pitch, roll, etc.) and to enable autopilot "),o("RouterLink",{attrs:{to:"/en/flight_modes/"}},[e._v("flight modes")]),e._v(" (e.g. takeoff, land, return to land, mission etc.).\nOn "),o("em",[e._v("telemetry-enabled")]),e._v(" RC systems, the remote control unit can also receive and display information from the vehicle (e.g. battery level, flight mode).")],1),e._v(" "),o("p",[o("img",{attrs:{src:r(412),alt:"Taranis X9D Transmitter"}})]),e._v(" "),o("p",[e._v("The remote control unit contains a radio module that is bound to, and communicates with, a (compatible) radio module on the vehicle.\nThe vehicle-based unit is connected to the flight controller.\nThe flight controller determines how to interpret the commands based on the current autopilot flight mode and vehicle state, and drives the vehicle motors and actuators appropriately.")]),e._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),o("p",[e._v("The ground- and vehicle- based radio modules are referred to as the transmitter and receiver respectively (even if they support bidirectional communication) and are collectively referred to as a "),o("em",[e._v("transmitter/receiver pair")]),e._v('.\nThe remote control unit and it\'s included radio module are also referred to as a "transmitter".')])]),e._v(" "),o("p",[e._v('An important quality of an RC system is how many "channels" it supports.\nThe number of channels defines how many different physical controls on the remote control can be used to send commands to the vehicle (e.g. how many switches, dials, control sticks can actually be used).')]),e._v(" "),o("p",[e._v("An aircraft must use a system that supports at least 4 channels (for roll, pitch, yaw, thrust).\nGround vehicles need at least two channels (steering + throttle). An 8 or 16 channel transmitter provides additional channels that can be used to control other mechanisms or activate different "),o("RouterLink",{attrs:{to:"/en/flight_modes/"}},[e._v("flight modes")]),e._v(" provided by the autopilot.")],1),e._v(" "),o("h2",{attrs:{id:"types-of-remote-controls"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#types-of-remote-controls"}},[e._v("#")]),e._v(" Types of Remote Controls")]),e._v(" "),o("p",[o("span",{attrs:{id:"transmitter_modes"}})]),e._v(" "),o("h3",{attrs:{id:"remote-control-units-for-aircraft"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#remote-control-units-for-aircraft"}},[e._v("#")]),e._v(" Remote Control Units for Aircraft")]),e._v(" "),o("p",[e._v("The most popular "),o("em",[e._v("form")]),e._v(" of remote control unit for UAVs is shown below.\nIt has separate control sticks for controlling roll/pitch and for throttle/yaw as shown (i.e. aircraft need at least 4 channels).")]),e._v(" "),o("p",[o("img",{attrs:{src:r(402),alt:"RC Basic Commands"}})]),e._v(" "),o("p",[e._v('There are numerous possible layouts for the control sticks, switches, etc.\nThe more common layouts have been given specific "Mode" numbers. '),o("em",[e._v("Mode 1")]),e._v(" and "),o("em",[e._v("Mode 2")]),e._v(" (shown below) differ only in the placement of the throttle.")]),e._v(" "),o("p",[o("img",{attrs:{src:r(1337),alt:"Mode1-Mode2"}})]),e._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),o("p",[e._v("The choice of mode is largely one of taste ("),o("em",[e._v("Mode 2")]),e._v(" is more popular).")])]),e._v(" "),o("h2",{attrs:{id:"remote-control-units-for-ground-vehicles"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#remote-control-units-for-ground-vehicles"}},[e._v("#")]),e._v(" Remote Control Units for Ground Vehicles")]),e._v(" "),o("p",[e._v("An Unmanned Ground Vehicle (UGV)/car minimally requires a 2 channel transmitter in order to send the values for steering and speed.\nCommonly transmitters set these values using a wheel and trigger, two single-axis control sticks, or a single dual-axis control stick.")]),e._v(" "),o("p",[e._v("There is nothing to stop you using more channels/control mechanisms, and these can be very useful for engaging additional actuators and autopilot modes.")]),e._v(" "),o("h2",{attrs:{id:"choosing-rc-system-components"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#choosing-rc-system-components"}},[e._v("#")]),e._v(" Choosing RC System Components")]),e._v(" "),o("p",[e._v("You will need to select a transmitter/receiver pair that are compatible with each other.\nIn addition, receivers have to be "),o("a",{attrs:{href:"#compatible_receivers"}},[e._v("compatible with PX4")]),e._v(" and the flight controller hardware.")]),e._v(" "),o("p",[e._v("Compatible radio systems are often sold together.\nFor example, "),o("a",{attrs:{href:"https://hobbyking.com/en_us/frsky-2-4ghz-accst-taranis-x9d-plus-and-x8r-combo-digital-telemetry-radio-system-mode-2.html?___store=en_us",target:"_blank",rel:"noopener noreferrer"}},[e._v("FrSky Taranis X9D and FrSky X8R"),o("OutboundLink")],1),e._v(" are a popular combination.")]),e._v(" "),o("h3",{attrs:{id:"transmitter-receiver-pairs"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#transmitter-receiver-pairs"}},[e._v("#")]),e._v(" Transmitter/Receiver Pairs")]),e._v(" "),o("p",[e._v("One of the most popular RC units is the "),o("em",[e._v("FrSky Taranis X9D")]),e._v(".\nIt has an internal transmitter module can be used with the recommended "),o("em",[e._v("FrSky X4R-SB")]),e._v(" (S-BUS, low delay) or "),o("em",[e._v("X4R")]),e._v(" (PPM-Sum, legacy) receivers out of the box.\nIt also has a custom radio transmitter module slot and customizable open source OpenTX Firmware.")]),e._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),o("p",[e._v("This remote control unit can display vehicle telemetry when used with "),o("RouterLink",{attrs:{to:"/en/peripherals/frsky_telemetry.html"}},[e._v("FrSky")]),e._v(" radio modules.")],1)]),e._v(" "),o("p",[e._v("Other popular transmitter/receiver pairs")]),e._v(" "),o("ul",[o("li",[e._v("Turnigy remote using, for example, the FrSky transmitter/receiver modules.")]),e._v(" "),o("li",[e._v("Futaba Transmitters and compatible Futaba S-Bus receivers.")]),e._v(" "),o("li",[e._v('Long range ~900MHz, low latency: "Team Black Sheep Crossfire" or "Crossfire Micro" set with a compatible remote (e.g. Taranis)')]),e._v(" "),o("li",[e._v("Long Range ~433MHz: ImmersionRC EzUHF set with a compatible remote (e.g. Taranis)")])]),e._v(" "),o("p",[o("span",{attrs:{id:"compatible_receivers"}})]),e._v(" "),o("h3",{attrs:{id:"px4-compatible-receivers"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#px4-compatible-receivers"}},[e._v("#")]),e._v(" PX4-Compatible Receivers")]),e._v(" "),o("p",[e._v("In addition to the transmitter/receiver pairs being compatible, the receiver must also be compatible with PX4 and the flight controller hardware.")]),e._v(" "),o("p",[o("em",[e._v("PX4")]),e._v(" and "),o("em",[e._v("Pixhawk")]),e._v(" have been validated with:")]),e._v(" "),o("ul",[o("li",[e._v("All Spektrum DSM RC receivers")]),e._v(" "),o("li",[e._v("All Futaba S.BUS and S.BUS2 RC receivers")]),e._v(" "),o("li",[e._v("All FrSky PPM and S.Bus models")]),e._v(" "),o("li",[e._v("Graupner HoTT")]),e._v(" "),o("li",[e._v("All PPM models from other manufacturers")])]),e._v(" "),o("h2",{attrs:{id:"connecting-receivers"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#connecting-receivers"}},[e._v("#")]),e._v(" Connecting Receivers")]),e._v(" "),o("p",[e._v("As general guidance, receivers connect to the flight controller using the port appropriate to their supported protocol:")]),e._v(" "),o("ul",[o("li",[e._v("Spektrum and DSM receivers must connect to a "),o("strong",[e._v("SPKT/DSM")]),e._v(" input.")]),e._v(" "),o("li",[e._v("Graupner HoTT receivers: SUMD output must connect to a "),o("strong",[e._v("SPKT/DSM")]),e._v(" input.")]),e._v(" "),o("li",[e._v("PPM-Sum and S.BUS receivers must connect directly to the "),o("strong",[e._v("RC")]),e._v(" ground, power and signal pins (typically labeled RC or RCIN)")]),e._v(" "),o("li",[e._v("PPM receivers that have an individual wire for each channel must connect to the RCIN channel "),o("em",[e._v("via")]),e._v(" a PPM encoder "),o("a",{attrs:{href:"http://www.getfpv.com/radios/radio-accessories/holybro-ppm-encoder-module.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("like this one"),o("OutboundLink")],1),e._v(" (PPM-Sum receivers use a single signal wire for all channels).")])]),e._v(" "),o("p",[e._v("Instructions for connecting to specific flight controllers are given in the following quick-start guides:")]),e._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/en/assembly/quick_start_pixhawk.html#radio-control"}},[e._v("Pixhawk 1")])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/en/assembly/quick_start_pixracer.html"}},[e._v("Pixracer")])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/en/assembly/quick_start_pixhawk4.html"}},[e._v("Pixhawk 4")])],1)]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),o("p",[e._v("See the manufacturer's flight controller setup guide for additional information.")])]),e._v(" "),o("p",[o("span",{attrs:{id:"binding"}})]),e._v(" "),o("h2",{attrs:{id:"binding-transmitter-receiver"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#binding-transmitter-receiver"}},[e._v("#")]),e._v(" Binding Transmitter/Receiver")]),e._v(" "),o("p",[e._v("Before you can calibrate/use a radio system you must "),o("em",[e._v("bind")]),e._v(" the receiver and transmitter so that they communicate only with each other.\nThe process for binding a transmitter and receiver pair is hardware specific (see your manual for instructions).")]),e._v(" "),o("p",[e._v("If you are using a "),o("em",[e._v("Spektrum")]),e._v(" receiver, you can put it into bind mode using "),o("em",[e._v("QGroundControl")]),e._v(": "),o("RouterLink",{attrs:{to:"/en/config/radio.html#spectrum-bind"}},[e._v("Radio Setup > Spectrum Bind")]),e._v(".")],1),e._v(" "),o("h2",{attrs:{id:"set-signal-loss-behaviour"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#set-signal-loss-behaviour"}},[e._v("#")]),e._v(" Set Signal-Loss Behaviour")]),e._v(" "),o("p",[e._v("RC receivers have different ways of indicating signal loss:")]),e._v(" "),o("ul",[o("li",[e._v("Output nothing (automatically detected by PX4)")]),e._v(" "),o("li",[e._v("Output a low throttle value (you can "),o("RouterLink",{attrs:{to:"/en/config/radio.html#rc-loss-detection"}},[e._v("configure PX4 to detect this")]),e._v(").")],1),e._v(" "),o("li",[e._v("Output the last received signal (PX4 cannot handle this case!)")])]),e._v(" "),o("p",[e._v("Choose a receiver that can emit nothing (preferred) when RC is lost, or a low throttle value.\nThis behaviour may require hardware configuration of the receiver (check the manual).")]),e._v(" "),o("p",[e._v("For more information see "),o("RouterLink",{attrs:{to:"/en/config/radio.html#rc-loss-detection"}},[e._v("Radio Control Setup > RC Loss Detection")]),e._v(".")],1),e._v(" "),o("h2",{attrs:{id:"related-topics"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#related-topics"}},[e._v("#")]),e._v(" Related Topics")]),e._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/en/config/radio.html"}},[e._v("Radio Control Setup")]),e._v(" - Configuring your radio with PX4.")],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/en/flying/basic_flying.html"}},[e._v("Flying 101")]),e._v(" - Learn how to fly with a remote control.")],1)])])}),[],!1,null,null,null);t.default=a.exports},402:function(e,t,r){e.exports=r.p+"assets/img/rc_basic_commands.3311bd90.png"},412:function(e,t,r){e.exports=r.p+"assets/img/frsky_taranis_x9d_transmitter.a26963aa.jpg"}}]);