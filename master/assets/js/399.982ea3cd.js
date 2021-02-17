(window.webpackJsonp=window.webpackJsonp||[]).push([[399],{1134:function(e,t,o){e.exports=o.p+"assets/img/pixhawk_led_meanings.d8221e50.gif"},1135:function(e,t,o){e.exports=o.p+"assets/img/pixhawk4_status_leds.d352ada4.jpg"},1684:function(e,t,o){"use strict";o.r(t);var a=o(18),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"led-meanings-pixhawk-series"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#led-meanings-pixhawk-series"}},[e._v("#")]),e._v(" LED Meanings (Pixhawk Series)")]),e._v(" "),a("p",[a("RouterLink",{attrs:{to:"/en/flight_controller/pixhawk_series.html"}},[e._v("Pixhawk-series flight controllers")]),e._v(" use LEDs to indicate the current status of the vehicle.")],1),e._v(" "),a("ul",[a("li",[e._v("The "),a("a",{attrs:{href:"#ui_led"}},[e._v("UI LED")]),e._v(" provides user-facing status information related to "),a("em",[e._v("readiness for flight")]),e._v(".")]),e._v(" "),a("li",[e._v("The "),a("a",{attrs:{href:"#status_led"}},[e._v("Status LEDs")]),e._v(" provide status for the PX4IO and FMU SoC.\nThey indicate power, bootloader mode and activity, and errors.")])]),e._v(" "),a("p",[a("span",{attrs:{id:"ui_led"}})]),e._v(" "),a("h2",{attrs:{id:"ui-led"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ui-led"}},[e._v("#")]),e._v(" UI LED")]),e._v(" "),a("p",[e._v("The RGB "),a("em",[e._v("UI LED")]),e._v(" indicates the current "),a("em",[e._v("readiness for flight")]),e._v(" status of the vehicle.\nThis is typically a superbright I2C peripheral, which may or may not be mounted on the flight controller board (i.e. FMUv4 does not have one on board, and typically uses an LED mounted on the GPS).")]),e._v(" "),a("p",[e._v("The image below shows the relationship between LED and vehicle status.")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("It is possible to have a GPS lock (Green LED) and still not be able to arm the vehicle because PX4 has not yet "),a("RouterLink",{attrs:{to:"/en/flying/pre_flight_checks.html"}},[e._v("passed preflight checks")]),e._v(". "),a("strong",[e._v("A valid global position estimate is required to takeoff!")])],1)]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("In the event of an error (blinking red), or if the vehicle can't achieve GPS lock (change from blue to green),   check for more detailed status information in "),a("em",[e._v("QGroundControl")]),e._v(" including calibration status, and errors messages reported by the "),a("RouterLink",{attrs:{to:"/en/flying/pre_flight_checks.html"}},[e._v("Preflight Checks (Internal)")]),e._v(".\nAlso check that the GPS module is properly attached, Pixhawk is reading your GPS properly, and that the GPS is sending a proper GPS position.")],1)]),e._v(" "),a("p",[a("img",{attrs:{src:o(1134),alt:"LED meanings"}})]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("[Solid Blue] Armed, No GPS Lock:")]),e._v(" Indicates vehicle has been armed and has no position lock from a GPS unit.\nWhen vehicle is armed, PX4 will unlock control of the motors, allowing you to fly your drone.\nAs always, exercise caution when arming, as large propellers can be dangerous at high revolutions.\nVehicle cannot perform guided missions in this mode.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("[Pulsing Blue] Disarmed, No GPS Lock:")]),e._v(" Similar to above, but your vehicle is disarmed.\nThis means you will not be able to control motors, but all other subsystems are working.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("[Solid Green] Armed, GPS Lock:")]),e._v(" Indicates vehicle has been armed and has a valid position lock from a GPS unit.\nWhen vehicle is armed, PX4 will unlock control of the motors, allowing you to fly your drone.\nAs always, exercise caution when arming, as large propellers can be dangerous at high revolutions.\nIn this mode, vehicle can perform guided missions.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("[Pulsing Green] Disarmed, GPS Lock:")]),e._v(" Similar to above, but your vehicle is disarmed.\nThis means you will not be able to control motors, but all other subsystems including GPS position lock are working.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("[Solid Purple] Failsafe Mode:")]),e._v(" This mode will activate whenever vehicle encounters an issue during flight,\nsuch as losing manual control, a critically low battery, or an internal error.\nDuring failsafe mode, vehicle will attempt to return to its takeoff location, or may simply descend where it currently is.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("[Solid Amber] Low Battery Warning:")]),e._v(" Indicates your vehicle's battery is running dangerously low.\nAfter a certain point, vehicle will go into failsafe mode. However, this mode should signal caution that it's time to end\nthis flight.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("[Blinking Red] Error / Setup Required:")]),e._v(" Indicates that your autopilot needs to be configured or calibrated before flying.\nAttach your autopilot to a Ground Control Station to verify what the problem is.\nIf you have completed the setup process and autopilot still appears as red and flashing, there may be another error.")])])]),e._v(" "),a("p",[a("span",{attrs:{id:"status_led"}})]),e._v(" "),a("h2",{attrs:{id:"status-led"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#status-led"}},[e._v("#")]),e._v(" Status LED")]),e._v(" "),a("p",[e._v("Three "),a("em",[e._v("Status LEDs")]),e._v(" provide status for the FMU SoC, and three more provide status for the PX4IO (if present).\nThey indicate power, bootloader mode and activity, and errors.")]),e._v(" "),a("p",[a("img",{attrs:{src:o(1135),alt:"Pixhawk 4"}})]),e._v(" "),a("p",[e._v("From power on, the FMU and PX4IO CPUs first run the bootloader (BL) and then the application (APP).\nThe table below shows how the Bootloader and then APP use the LEDs to indicate condition.")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Color")]),e._v(" "),a("th",[e._v("Label")]),e._v(" "),a("th",[e._v("Bootloader usage")]),e._v(" "),a("th",[e._v("APP usage")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("Blue")]),e._v(" "),a("td",[e._v("ACT (Activity)")]),e._v(" "),a("td",[e._v("Flutters when the bootloader is receiving data")]),e._v(" "),a("td",[e._v("Indication of ARM state")])]),e._v(" "),a("tr",[a("td",[e._v("Red/Amber")]),e._v(" "),a("td",[e._v("B/E (In Bootloader / Error)")]),e._v(" "),a("td",[e._v("Flutters when in the bootloader")]),e._v(" "),a("td",[e._v("Indication of an ERROR")])]),e._v(" "),a("tr",[a("td",[e._v("Green")]),e._v(" "),a("td",[e._v("PWR (Power)")]),e._v(" "),a("td",[e._v("Not used by bootloader")]),e._v(" "),a("td",[e._v("Indication of ARM state")])])])]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("The LED labels shown above are commonly used, but might differ on some boards.")])]),e._v(" "),a("p",[e._v('More detailed information for how to interpret the LEDs is given below (where "x" means "any state")')]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Red/Amber")]),e._v(" "),a("th",[e._v("Blue")]),e._v(" "),a("th",[e._v("Green")]),e._v(" "),a("th",[e._v("Meaning")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("10Hz")]),e._v(" "),a("td",[e._v("x")]),e._v(" "),a("td",[e._v("x")]),e._v(" "),a("td",[e._v("Overload CPU load > 80%, or RAM usage > 98%")])]),e._v(" "),a("tr",[a("td",[e._v("OFF")]),e._v(" "),a("td",[e._v("x")]),e._v(" "),a("td",[e._v("x")]),e._v(" "),a("td",[e._v("Overload CPU load <= 80%, or RAM usage <= 98%")])]),e._v(" "),a("tr",[a("td",[e._v("NA")]),e._v(" "),a("td",[e._v("OFF")]),e._v(" "),a("td",[e._v("4 Hz")]),e._v(" "),a("td",[e._v("actuator_armed->armed && failsafe")])]),e._v(" "),a("tr",[a("td",[e._v("NA")]),e._v(" "),a("td",[e._v("ON")]),e._v(" "),a("td",[e._v("4 Hz")]),e._v(" "),a("td",[e._v("actuator_armed->armed && !failsafe")])]),e._v(" "),a("tr",[a("td",[e._v("NA")]),e._v(" "),a("td",[e._v("OFF")]),e._v(" "),a("td",[e._v("1 Hz")]),e._v(" "),a("td",[e._v("!actuator_armed-> armed && actuator_armed->ready_to_arm")])]),e._v(" "),a("tr",[a("td",[e._v("NA")]),e._v(" "),a("td",[e._v("OFF")]),e._v(" "),a("td",[e._v("10 Hz")]),e._v(" "),a("td",[e._v("!actuator_armed->armed  && !actuator_armed->ready_to_arm")])])])])])}),[],!1,null,null,null);t.default=r.exports}}]);