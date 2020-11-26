(window.webpackJsonp=window.webpackJsonp||[]).push([[199],{1194:function(e,t,r){e.exports=r.p+"assets/img/frsky_telemetry_overview.421144e2.jpg"},1195:function(e,t,r){e.exports=r.p+"assets/img/taranis_telemetry.062d2a3f.jpg"},1196:function(e,t,r){e.exports=r.p+"assets/img/craft_and_theory_frsky_telemetry_cables.033a9fee.jpg"},2135:function(e,t,r){"use strict";r.r(t);var a=r(18),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"frsky-telemetry"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#frsky-telemetry"}},[e._v("#")]),e._v(" FrSky Telemetry")]),e._v(" "),a("p",[e._v("FrSky telemetry allows you to access vehicle "),a("a",{attrs:{href:"#messages"}},[e._v("telemetry/status")]),e._v(" information on a compatible RC transmitter.")]),e._v(" "),a("p",[e._v("Available "),a("a",{attrs:{href:"#messages"}},[e._v("telemetry is listed here")]),e._v(", and includes: flight mode, battery level, RC signal strength, speed, altitude etc. Some transmitters can additionally provide audible and vibration feedback, which is particularly useful for low battery and other failsafe warnings.")]),e._v(" "),a("p",[e._v("PX4 supports both "),a("a",{attrs:{href:"#s_port"}},[e._v("S.Port")]),e._v(" (new) and D (old) FrSky telemetry ports.")]),e._v(" "),a("h2",{attrs:{id:"hardware-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hardware-setup"}},[e._v("#")]),e._v(" Hardware Setup")]),e._v(" "),a("p",[e._v("FrSky telemetry requires:")]),e._v(" "),a("ul",[a("li",[e._v("An "),a("a",{attrs:{href:"#transmitters"}},[e._v("FrSky-compatible RC transmitter")]),e._v(" like the FrSky Taranis X9D Plus.")]),e._v(" "),a("li",[e._v("An "),a("a",{attrs:{href:"#receivers"}},[e._v("FrSky telemetry-capable receiver")]),e._v(" like the XSR and X8R.")]),e._v(" "),a("li",[e._v("A cable to connect the FrSky receiver Smart Port (SPort) to a flight controller UART.")])]),e._v(" "),a("p",[e._v("First "),a("RouterLink",{attrs:{to:"/ko/getting_started/rc_transmitter_receiver.html#connecting-receivers"}},[e._v("connect the receiver for RC channels")]),e._v(", e.g. connect the S.Bus ports on the reciever and the flight controller.")],1),e._v(" "),a("p",[e._v("Then set up FrSky telemetry by separately connecting the SPort on the receiver to any free UART on the flight controller, and then "),a("a",{attrs:{href:"#configure"}},[e._v("configure PX4 to run FrSky telemetry on that UART")]),e._v(".")]),e._v(" "),a("p",[e._v("This is done slightly differently, depending on whether the SPort receiver has a pin for an uninverted output, and/or the Pixhawk version.")]),e._v(" "),a("h3",{attrs:{id:"pixhawk-fmuv4-and-prior"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pixhawk-fmuv4-and-prior"}},[e._v("#")]),e._v(" Pixhawk FMUv4 (and prior)")]),e._v(" "),a("p",[e._v("For Pixhawk FMUv4 and earlier, UART ports and receiver telemetry ports are typically incompatible (with the exception of "),a("RouterLink",{attrs:{to:"/ko/flight_controller/pixracer.html"}},[e._v("Pixracer")]),e._v(").")],1),e._v(" "),a("p",[e._v("Generally SPort receivers have an "),a("em",[e._v("inverted")]),e._v(" S.Port signal and you have to use a converter cable to split the S.Port into uninverted TX and RX for connecting to the Pixhawk UART. An example is shown below.")]),e._v(" "),a("p",[a("img",{attrs:{src:r(1194),alt:"FrSky-Taranis-Telemetry"}})]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Tip")]),e._v(" When connecting to an inverted S.Port it is usually cheaper and easier to buy a "),a("a",{attrs:{href:"#ready_made_cable"}},[e._v("ready made cable")]),e._v(" that contains this adapter and has the appropriate connectors for the autopilot and receiver. Creating a "),a("a",{attrs:{href:"#diy_cables"}},[e._v("DIY cable")]),e._v(" requires electronics assembly expertise.")])]),e._v(" "),a("p",[e._v("If using an S.Port receiver with a pin for "),a("em",[e._v("uninverted output")]),e._v(" you can simply attach one of the UART's TX pins. ")]),e._v(" "),a("p",[e._v("Then "),a("a",{attrs:{href:"#configure"}},[e._v("configure PX4")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"pixhawk-fmuv5-stm32f7-and-later"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pixhawk-fmuv5-stm32f7-and-later"}},[e._v("#")]),e._v(" Pixhawk FMUv5/STM32F7 and later")]),e._v(" "),a("p",[e._v("For Pixhawk FMUv5 and later PX4 can read either inverted (or uninverted) S.Port signals directly - no special cable is required.")]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Note")]),e._v(" More generally this is true on autopilots with STM32F7 or later (e.g. "),a("RouterLink",{attrs:{to:"/ko/flight_controller/durandal.html"}},[e._v("Durandal")]),e._v(" has a STM32H7 and can read inverted or uninverted S.Port signals directly).")],1)]),e._v(" "),a("p",[e._v("Simply attach one of the UART's TX pins to the SPort inverted or uninverted pin (PX4 will auto-detect and handle either type). Then "),a("a",{attrs:{href:"#configure"}},[e._v("configure PX4")]),e._v(".")]),e._v(" "),a("p",[a("span",{attrs:{id:"configure"}})]),e._v(" "),a("h2",{attrs:{id:"px4-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#px4-configuration"}},[e._v("#")]),e._v(" PX4 Configuration")]),e._v(" "),a("p",[a("RouterLink",{attrs:{to:"/ko/peripherals/serial_configuration.html"}},[e._v("Configure the serial port")]),e._v(" on which FrSky will run using "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#TEL_FRSKY_CONFIG"}},[e._v("TEL_FRSKY_CONFIG")]),e._v(". There is no need to set the baud rate for the port, as this is configured by the driver.")],1),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Note")]),e._v(" You can use any free UART, but typically "),a("code",[e._v("TELEM 2")]),e._v(" is used for FrSky telemetry (except for "),a("RouterLink",{attrs:{to:"/ko/flight_controller/pixracer.html"}},[e._v("Pixracer")]),e._v(", which is pre-configured to use the "),a("em",[e._v("FrSky")]),e._v(" port by default).")],1)]),e._v(" "),a("p",[a("span")]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Tip")]),e._v(" If the configuration parameter is not available in "),a("em",[e._v("QGroundControl")]),e._v(" then you may need to "),a("RouterLink",{attrs:{to:"/ko/peripherals/serial_configuration.html#parameter_not_in_firmware"}},[e._v("add the driver to the firmware")]),e._v(": "),a("code",[e._v("drivers/telemetry/frsky_telemetry")])],1)]),e._v(" "),a("p",[e._v("No further configuration is required; FrSky telemetry auto-starts when connected and detects D or S mode.")]),e._v(" "),a("p",[a("span",{attrs:{id:"transmitters"}})]),e._v(" "),a("h2",{attrs:{id:"compatible-rc-transmitters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compatible-rc-transmitters"}},[e._v("#")]),e._v(" Compatible RC Transmitters")]),e._v(" "),a("p",[e._v("You will need an RC transmitter that can receive the telemetry stream (and that is bound to the FrSky receiver).")]),e._v(" "),a("p",[e._v("Popular alternatives include:")]),e._v(" "),a("ul",[a("li",[e._v("FrSky Taranis X9D Plus (recommended)")]),e._v(" "),a("li",[e._v("FrSky Taranis X9D")]),e._v(" "),a("li",[e._v("FrSky Taranis X9E")]),e._v(" "),a("li",[e._v("FrSky Taranis Q X7")]),e._v(" "),a("li",[e._v("Turnigy 9XR Pro")])]),e._v(" "),a("p",[e._v("The above transmitters can display telemetry data without any further configuration. The following section(s) explain how you can customise telemetry display (for example, to create a better UI/UX).")]),e._v(" "),a("h3",{attrs:{id:"taranis-luapilot-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#taranis-luapilot-setup"}},[e._v("#")]),e._v(" Taranis - LuaPilot Setup")]),e._v(" "),a("p",[e._v("Compatible Taranis receivers (e.g. X9D Plus) running OpenTX 2.1.6 or newer can use the LuaPilot script to modify the displayed telemetry (as shown in the screenshot below).")]),e._v(" "),a("p",[a("img",{attrs:{src:r(1195),alt:"Telemetry Screen on the Taranis"}})]),e._v(" "),a("p",[e._v("Instructions for installing the script can be found here: "),a("a",{attrs:{href:"http://ilihack.github.io/LuaPilot_Taranis_Telemetry/",target:"_blank",rel:"noopener noreferrer"}},[e._v("LuaPilot Taranis Telemetry script > Taranis Setup OpenTX 2.1.6 or newer"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("If you open the "),a("code",[e._v("LuaPil.lua")]),e._v(" script with a text editor, you can edit the configuration. Suggested modifications include:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("local BattLevelmAh = -1")]),e._v(" - Use the battery level calculation from the vehicle")]),e._v(" "),a("li",[a("code",[e._v("local SayFlightMode = 0")]),e._v(" - There are no WAV files for the PX4 flight modes")])]),e._v(" "),a("p",[a("span",{attrs:{id:"messages"}})]),e._v(" "),a("h2",{attrs:{id:"telemetry-messages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#telemetry-messages"}},[e._v("#")]),e._v(" Telemetry Messages")]),e._v(" "),a("p",[e._v("FrySky Telemetry can transmit most of the more useful status information from PX4. S-Port and D-Port receivers transmit different sets of messages, as listed in the following sections.")]),e._v(" "),a("p",[a("span",{attrs:{id:"s_port"}})]),e._v(" "),a("h3",{attrs:{id:"s-port"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#s-port"}},[e._v("#")]),e._v(" S-Port")]),e._v(" "),a("p",[e._v("S-Port receivers transmit the following messages from PX4 (from "),a("a",{attrs:{href:"https://github.com/iNavFlight/inav/blob/master/docs/Telemetry.md#available-smartport-sport-sensors",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v("):")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("AccX, AccY, AccZ:")]),e._v(" Accelerometer values.")]),e._v(" "),a("li",[a("strong",[e._v("Alt:")]),e._v(" Barometer based altitude, relative to home location.")]),e._v(" "),a("li",[a("strong",[e._v("Curr:")]),e._v(" Actual current consumption (Amps).")]),e._v(" "),a("li",[a("strong",[e._v("Fuel:")]),e._v(" Remaining battery percentage if "),a("code",[e._v("battery_capacity")]),e._v(" variable set and variable "),a("code",[e._v("smartport_fuel_percent = ON")]),e._v(", mAh drawn otherwise.")]),e._v(" "),a("li",[a("strong",[e._v("GAlt:")]),e._v(" GPS altitude, sea level is zero.")]),e._v(" "),a("li",[a("strong",[e._v("GPS:")]),e._v(" GPS coordinates.")]),e._v(" "),a("li",[a("strong",[e._v("GSpd:")]),e._v(" Current horizontal ground speed, calculated by GPS.")]),e._v(" "),a("li",[a("strong",[e._v("Hdg:")]),e._v(" Heading (degrees - North is 0°).")]),e._v(" "),a("li",[a("strong",[e._v("VFAS:")]),e._v(" Actual battery voltage value (Voltage FrSky Ampere Sensor).")]),e._v(" "),a("li",[a("strong",[e._v("VSpd:")]),e._v(" Vertical speed (cm/s).")]),e._v(" "),a("li",[a("strong",[e._v("Tmp1:")]),e._v(" "),a("RouterLink",{attrs:{to:"/ko/getting_started/flight_modes.html"}},[e._v("Flight mode")]),e._v(", sent as an integer: 18 - Manual, 23 - Altitude, 22 - Position, 27 - Mission, 26 - Hold, 28 - Return, 19 - Acro, 24 0 Offboard, 20 - Stabilized, 21 - Rattitude, 25 - Takeoff, 29 - Land, 30 - Follow Me.")],1),e._v(" "),a("li",[a("strong",[e._v("Tmp2:")]),e._v(" GPS information. Right-most digit is GPS fix type (0 = none, 2 = 2D, 3 = 3D). Other digits are number of satellites.")])]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Note")]),e._v(' The following "standard" S-Port messages are not supported by PX4: '),a("strong",[e._v("ASpd")]),e._v(", "),a("strong",[e._v("A4")]),e._v(".")])]),e._v(" "),a("h3",{attrs:{id:"d-port"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#d-port"}},[e._v("#")]),e._v(" D-port")]),e._v(" "),a("p",[e._v("D-Port receivers transmit the following messages (from "),a("a",{attrs:{href:"https://github.com/cleanflight/cleanflight/blob/master/docs/Telemetry.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v("):")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("AccX, AccY, AccZ:")]),e._v(" Accelerometer values.")]),e._v(" "),a("li",[a("strong",[e._v("Alt:")]),e._v(" Barometer based altitude, init level is zero.")]),e._v(" "),a("li",[a("strong",[e._v("Cels:")]),e._v(" Average cell voltage value (battery voltage divided by cell number).")]),e._v(" "),a("li",[a("strong",[e._v("Curr:")]),e._v(" Actual current consumption (Amps).")]),e._v(" "),a("li",[a("strong",[e._v("Fuel:")]),e._v(" Remaining battery percentage if capacity is set, mAh drawn otherwise.")]),e._v(" "),a("li",[a("strong",[e._v("Date:")]),e._v(" Time since powered.")]),e._v(" "),a("li",[a("strong",[e._v("GAlt:")]),e._v(" GPS altitude, sea level is zero.")]),e._v(" "),a("li",[a("strong",[e._v("GPS:")]),e._v(" GPS coordinates.")]),e._v(" "),a("li",[a("strong",[e._v("GSpd:")]),e._v(" Current speed, calculated by GPS.")]),e._v(" "),a("li",[a("strong",[e._v("Hdg:")]),e._v(" Heading (degrees - North is 0°).")]),e._v(" "),a("li",[a("strong",[e._v("RPM:")]),e._v(" Throttle value if armed, otherwise battery capacity. Note that blade number needs to be set to 12 in Taranis.")]),e._v(" "),a("li",[a("strong",[e._v("Tmp1:")]),e._v(" Flight mode (as for S-Port).")]),e._v(" "),a("li",[a("strong",[e._v("Tmp2:")]),e._v(" GPS information (as for S-Port).")]),e._v(" "),a("li",[a("strong",[e._v("VFAS:")]),e._v(" Actual battery voltage value (Voltage FrSky Ampere Sensor).")]),e._v(" "),a("li",[a("strong",[e._v("Vspd:")]),e._v(" Vertical speed (cm/s).")])]),e._v(" "),a("p",[a("span",{attrs:{id:"receivers"}})]),e._v(" "),a("h2",{attrs:{id:"frsky-telemetry-receivers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#frsky-telemetry-receivers"}},[e._v("#")]),e._v(" FrSky Telemetry Receivers")]),e._v(" "),a("p",[e._v("Pixhawk/PX4 supports D (old) and S (new) FrSky telemetry. The table belows all FrSky receivers that support telemetry via a D/S.PORT (in theory all of these should work).")]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Tip")]),e._v(" Note that the X series receivers listed below are recommended (e.g. XSR, X8R). The R and G series have not been tested/validated by the test team, but should work.")])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Receiver")]),e._v(" "),a("th",[e._v("Range")]),e._v(" "),a("th",[e._v("Combined output")]),e._v(" "),a("th",[e._v("Digital telemetry input")]),e._v(" "),a("th",[e._v("Dimensions")]),e._v(" "),a("th",[e._v("Weight")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("D4R-II")]),e._v(" "),a("td",[e._v("1.5km")]),e._v(" "),a("td",[e._v("CPPM (8)")]),e._v(" "),a("td",[e._v("D.Port")]),e._v(" "),a("td",[e._v("40x22.5x6mm")]),e._v(" "),a("td",[e._v("5.8g")])]),e._v(" "),a("tr",[a("td",[e._v("D8R-XP")]),e._v(" "),a("td",[e._v("1.5km")]),e._v(" "),a("td",[e._v("CPPM (8)")]),e._v(" "),a("td",[e._v("D.Port")]),e._v(" "),a("td",[e._v("55x25x14mm")]),e._v(" "),a("td",[e._v("12.4g")])]),e._v(" "),a("tr",[a("td",[e._v("D8R-II Plus")]),e._v(" "),a("td",[e._v("1.5km")]),e._v(" "),a("td",[e._v("no")]),e._v(" "),a("td",[e._v("D.Port")]),e._v(" "),a("td",[e._v("55x25x14mm")]),e._v(" "),a("td",[e._v("12.4g")])]),e._v(" "),a("tr",[a("td",[e._v("X4R")]),e._v(" "),a("td",[e._v("1.5km")]),e._v(" "),a("td",[e._v("CPPM (8)")]),e._v(" "),a("td",[e._v("Smart Port")]),e._v(" "),a("td",[e._v("40x22.5x6mm")]),e._v(" "),a("td",[e._v("5.8g")])]),e._v(" "),a("tr",[a("td",[e._v("X4R-SB")]),e._v(" "),a("td",[e._v("1.5km")]),e._v(" "),a("td",[e._v("S.Bus (16)")]),e._v(" "),a("td",[e._v("Smart Port")]),e._v(" "),a("td",[e._v("40x22.5x6mm")]),e._v(" "),a("td",[e._v("5.8g")])]),e._v(" "),a("tr",[a("td",[e._v("X6R / S6R")]),e._v(" "),a("td",[e._v("1.5km")]),e._v(" "),a("td",[e._v("S.Bus (16)")]),e._v(" "),a("td",[e._v("Smart Port")]),e._v(" "),a("td",[e._v("47.42×23.84×14.7mm")]),e._v(" "),a("td",[e._v("15.4g")])]),e._v(" "),a("tr",[a("td",[e._v("X8R / S8R")]),e._v(" "),a("td",[e._v("1.5km")]),e._v(" "),a("td",[e._v("S.Bus (16)")]),e._v(" "),a("td",[e._v("Smart Port")]),e._v(" "),a("td",[e._v("46.25 x 26.6 x 14.2mm")]),e._v(" "),a("td",[e._v("16.6g")])]),e._v(" "),a("tr",[a("td",[e._v("XSR / XSR-M")]),e._v(" "),a("td",[e._v("1.5km")]),e._v(" "),a("td",[e._v("S.Bus (16) / CPPM (8)")]),e._v(" "),a("td",[e._v("Smart Port")]),e._v(" "),a("td",[e._v("26x19.2x5mm")]),e._v(" "),a("td",[e._v("3.8g")])]),e._v(" "),a("tr",[a("td",[e._v("RX8R")]),e._v(" "),a("td",[e._v("1.5km")]),e._v(" "),a("td",[e._v("S.Bus (16)")]),e._v(" "),a("td",[e._v("Smart Port")]),e._v(" "),a("td",[e._v("46.25x26.6x14.2mm")]),e._v(" "),a("td",[e._v("12.1g")])]),e._v(" "),a("tr",[a("td",[e._v("RX8R PRO")]),e._v(" "),a("td",[e._v("1.5km")]),e._v(" "),a("td",[e._v("S.Bus (16)")]),e._v(" "),a("td",[e._v("Smart Port")]),e._v(" "),a("td",[e._v("46.25x26.6x14.2mm")]),e._v(" "),a("td",[e._v("12.1g")])]),e._v(" "),a("tr",[a("td",[e._v("R-XSR")]),e._v(" "),a("td",[e._v("1.5km")]),e._v(" "),a("td",[e._v("S.Bus (16) / CPPM (8)")]),e._v(" "),a("td",[e._v("Smart Port")]),e._v(" "),a("td",[e._v("16x11x5.4mm")]),e._v(" "),a("td",[e._v("1.5g")])]),e._v(" "),a("tr",[a("td",[e._v("G-RX8")]),e._v(" "),a("td",[e._v("1.5km")]),e._v(" "),a("td",[e._v("S.Bus (16)")]),e._v(" "),a("td",[e._v("Smart Port + integrated vario")]),e._v(" "),a("td",[e._v("55.26"),a("em",[e._v("17")]),e._v("8mm")]),e._v(" "),a("td",[e._v("5.8g")])]),e._v(" "),a("tr",[a("td",[e._v("R9")]),e._v(" "),a("td",[e._v("10km")]),e._v(" "),a("td",[e._v("S.Bus (16)")]),e._v(" "),a("td",[e._v("Smart Port")]),e._v(" "),a("td",[e._v("43.3x26.8x13.9mm")]),e._v(" "),a("td",[e._v("15.8g")])]),e._v(" "),a("tr",[a("td",[e._v("R9 slim")]),e._v(" "),a("td",[e._v("10km")]),e._v(" "),a("td",[e._v("S.Bus (16)")]),e._v(" "),a("td",[e._v("Smart Port")]),e._v(" "),a("td",[e._v("43.3x26.8x13.9mm")]),e._v(" "),a("td",[e._v("15.8g")])])])]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Note")]),e._v(" The above table originates from http://www.redsilico.com/frsky-receiver-chart and FrSky "),a("a",{attrs:{href:"https://www.frsky-rc.com/product-category/receivers/",target:"_blank",rel:"noopener noreferrer"}},[e._v("product documentation"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("p",[a("span",{attrs:{id:"ready_made_cable"}})]),e._v(" "),a("h2",{attrs:{id:"ready-made-cables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ready-made-cables"}},[e._v("#")]),e._v(" Ready-Made Cables")]),e._v(" "),a("p",[e._v("Ready-made cables for use with Pixhawk FMUv4 and earlier (except for Pixracer) are available from:")]),e._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"http://www.craftandtheoryllc.com/telemetry-cable",target:"_blank",rel:"noopener noreferrer"}},[e._v("Craft and Theory"),a("OutboundLink")],1),e._v(". Versions are available with DF-13 compatible "),a("em",[e._v("PicoBlade connectors")]),e._v(" (for FMUv2/3DR Pixhawk, FMUv2/HKPilot32) and "),a("em",[e._v("JST-GH connectors")]),e._v(' (for FMUv3/Pixhawk 2 "The Cube" and FMUv4/PixRacer v1).')]),e._v(" "),a("p",[a("a",{attrs:{href:"http://www.craftandtheoryllc.com/telemetry-cable",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:r(1196),alt:"Purchase cable here from Craft and Theory"}}),a("OutboundLink")],1)])])]),e._v(" "),a("p",[a("span",{attrs:{id:"diy_cables"}})]),e._v(" "),a("h2",{attrs:{id:"diy-cables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#diy-cables"}},[e._v("#")]),e._v(" DIY Cables")]),e._v(" "),a("p",[e._v("It is possible to create your own adapter cables. You will need connectors that are appropriate for your autopilot (e.g. "),a("em",[e._v("JST-GH connectors")]),e._v(' for FMUv3/Pixhawk 2 "The Cube" and FMUv4/PixRacer v1, and DF-13 compatible '),a("em",[e._v("PicoBlade connectors")]),e._v(" for older autopilots).")]),e._v(" "),a("p",[e._v("The Pixracer includes electronics for converting between S.PORT and UART signals, but for other boards you will need a UART to S.PORT adapter. These can be sourced from:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.frsky-rc.com/product/ful-1/",target:"_blank",rel:"noopener noreferrer"}},[e._v("FrSky FUL-1"),a("OutboundLink")],1),e._v(": "),a("a",{attrs:{href:"https://www.unmannedtechshop.co.uk/frsky-transmitter-receiver-upgrade-adapter-ful-1/",target:"_blank",rel:"noopener noreferrer"}},[e._v("unmannedtech.co.uk"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("SPC: "),a("a",{attrs:{href:"http://www.getfpv.com/frsky-smart-port-converter-cable.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("getfpv.com"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://www.unmannedtechshop.co.uk/frsky-smart-port-converter-spc/",target:"_blank",rel:"noopener noreferrer"}},[e._v("unmannedtechshop.co.uk"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("More information about the connections for different boards is given below.")]),e._v(" "),a("h3",{attrs:{id:"pixracer-to-s-port-receivers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pixracer-to-s-port-receivers"}},[e._v("#")]),e._v(" Pixracer to S-port Receivers")]),e._v(" "),a("p",[e._v("Connect the Pixracer FrSky TX and RX lines together (solder the wires together) to the X series receiver's S.port pin. GND need not be attached as this will have been done when attaching to S.Bus (normal RC connection).")]),e._v(" "),a("p",[e._v("The S-port connection is shown below (using the provided I/O Connector).")]),e._v(" "),a("p",[a("img",{attrs:{src:r(328),alt:"Grau b Pixracer FrSkyS.Port Connection"}})]),e._v(" "),a("p",[a("img",{attrs:{src:r(353),alt:"Pixracer FrSkyS.Port Connection"}})]),e._v(" "),a("h3",{attrs:{id:"pixracer-to-d-port-receivers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pixracer-to-d-port-receivers"}},[e._v("#")]),e._v(" Pixracer to D-port Receivers")]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Tip")]),e._v(" The vast majority of users now prefer to use S.PORT.")])]),e._v(" "),a("p",[e._v("Connect the Pixracer FrSky TX line (FS out) to the receiver's RX line. Connect the Pixracer FrSky RX line (FS in) to the receivers TX line. GND need not be connected as this will have been done when attaching to RC/SBus (for normal RC).")]),e._v(" "),a("h3",{attrs:{id:"pixhawk-pro"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pixhawk-pro"}},[e._v("#")]),e._v(" Pixhawk Pro")]),e._v(" "),a("p",[a("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk3_pro.html"}},[e._v("Pixhawk 3 Pro")]),e._v(" can be connected to TELEM4 (no additional software configuration is needed). You will need to connect via a UART to S.PORT adapter board, or a "),a("a",{attrs:{href:"#ready_made_cable"}},[e._v("ready-made cable")]),e._v(".")],1),e._v(" "),a("h3",{attrs:{id:"pixhawk-fmuv5-and-later"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pixhawk-fmuv5-and-later"}},[e._v("#")]),e._v(" Pixhawk FMUv5 and later")]),e._v(" "),a("p",[e._v("Simply attach one of the UART's TX pins to the SPort inverted or uninverted pin (PX4 will auto-detect and handle either type).")]),e._v(" "),a("p",[a("span",{attrs:{id:"pixhawk_v2"}})]),e._v(" "),a("h3",{attrs:{id:"other-boards"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#other-boards"}},[e._v("#")]),e._v(" Other Boards")]),e._v(" "),a("p",[e._v("Most other boards connect to the receiver for FrSky telemetry via the TELEM2 UART. This includes, for example: "),a("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk.html"}},[e._v("Pixhawk 1")]),e._v(", "),a("RouterLink",{attrs:{to:"/ko/flight_controller/mro_pixhawk.html"}},[e._v("mRo Pixhawk")]),e._v(", Pixhawk2.")],1),e._v(" "),a("p",[e._v("You will need to connect via a UART to S.PORT adapter board, or a "),a("a",{attrs:{href:"#ready_made_cable"}},[e._v("ready-made cable")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"additional-information"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#additional-information"}},[e._v("#")]),e._v(" Additional Information")]),e._v(" "),a("p",[e._v("For additional information, see the following links:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/Clooney82/MavLink_FrSkySPort/wiki/1.2.-FrSky-Taranis-Telemetry",target:"_blank",rel:"noopener noreferrer"}},[e._v("FrSky Taranis Telemetry"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.youtube.com/watch?v=x14DyvOU0Vc",target:"_blank",rel:"noopener noreferrer"}},[e._v("Taranis X9D: Setting Up Telemetry"),a("OutboundLink")],1),e._v(" (Video Tutorial)")]),e._v(" "),a("li",[a("a",{attrs:{href:"http://discuss.px4.io/t/px4-frsky-telemetry-setup-with-pixhawk2-and-x8r-receiver/6362",target:"_blank",rel:"noopener noreferrer"}},[e._v("Px4 FrSky Telemetry Setup with Pixhawk2 and X8R Receiver"),a("OutboundLink")],1),e._v(" (DIY Cables)")])])])}),[],!1,null,null,null);t.default=o.exports},328:function(e,t,r){e.exports=r.p+"assets/img/grau_b_pixracer_frskys.port_connection.4f4548a6.jpg"},353:function(e,t,r){e.exports=r.p+"assets/img/pixracer_FrSkyTelemetry.e4e73cd1.jpg"}}]);