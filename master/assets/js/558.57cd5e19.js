(window.webpackJsonp=window.webpackJsonp||[]).push([[558],{1885:function(t,e,o){"use strict";o.r(e);var i=o(18),a=Object(i.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"flight-modes"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#flight-modes"}},[t._v("#")]),t._v(" Flight Modes")]),t._v(" "),i("p",[i("em",[t._v("Flight Modes")]),t._v(" define how the autopilot responds to user input and controls vehicle movement. They are loosely grouped into "),i("em",[t._v("manual")]),t._v(", "),i("em",[t._v("assisted")]),t._v(" and "),i("em",[t._v("auto")]),t._v(" modes, based on the level/type of control provided by the autopilot. The pilot transitions between flight modes using switches on the remote control or with a ground control station.")]),t._v(" "),i("p",[t._v("Not all flight modes are available on all vehicle types, and some modes behave differently on different vehicle types (as described below). Finally, some flight modes make sense only under specific pre-flight and in-flight conditions (e.g. GPS lock, airspeed sensor, vehicle attitude sensing along an axis). The system will not allow transitions to those modes until the right conditions are met.")]),t._v(" "),i("p",[t._v("The sections below provide an overview of the modes, followed by a "),i("a",{attrs:{href:"#flight-mode-evaluation-diagram"}},[t._v("flight mode evaluation diagram")]),t._v(" that shows the conditions under which PX4 will transition into a new mode.")]),t._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),i("p",[t._v("User-facing flight mode documentation can be found in:")]),t._v(" "),i("ul",[i("li",[i("RouterLink",{attrs:{to:"/ko/getting_started/flight_modes.html"}},[t._v("Getting Started > Flight Modes")]),t._v(": Beginner friendly explanation of all flight modes.")],1),t._v(" "),i("li",[i("RouterLink",{attrs:{to:"/ko/flight_modes/"}},[t._v("Flying > Flight Modes")]),t._v(": Detailed documentation of each mode.")],1)])]),t._v(" "),i("h2",{attrs:{id:"flight-mode-summary"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#flight-mode-summary"}},[t._v("#")]),t._v(" Flight Mode Summary")]),t._v(" "),i("h3",{attrs:{id:"manual-flight-modes"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#manual-flight-modes"}},[t._v("#")]),t._v(" Manual flight modes")]),t._v(" "),i("p",[t._v('"Manual" modes are those where the user has direct control over the vehicle via the RC control (or joystick). Vehicle movement always follows stick movement, but the level/type of response changes depending on the mode. For example, experienced fliers can use modes that provide direct passthrough of stick positions to actuators, while beginners will often choose modes that are less responsive to sudden stick-position changes.')]),t._v(" "),i("ul",[i("li",[i("p",[i("strong",[t._v("Fixed wing aircraft/ rovers / boats:")])]),t._v(" "),i("ul",[i("li",[i("strong",[t._v("MANUAL:")]),t._v(" The pilot's control inputs (raw user inputs from RC transmitter) are passed directly to the output mixer.")]),t._v(" "),i("li",[i("strong",[t._v("STABILIZED:")]),t._v(" The pilot's pitch and roll inputs are passed as angle commands to the autopilot, while the yaw input is sent directly via the output mixer to the rudder (manual control). If the RC roll and pitch sticks are centered, the autopilot regulates the roll and pitch angles to zero, hence stabilizing (leveling-out) the attitude against any wind disturbances. However, in this mode the position of the aircraft is not controlled by the autopilot, hence the position can drift due to wind. With nonzero roll input the vehicle does a coordinated turn to achieve zero sideslip (the acceleration in y-direction (sidewards) is zero). During a coordinated turn, the rudder is used to control the sideslip and any manual yaw input is added to that.")]),t._v(" "),i("li",[i("strong",[t._v("ACRO:")]),t._v(" The pilot's inputs are passed as roll, pitch, and yaw "),i("em",[t._v("rate")]),t._v(" commands to the autopilot. The autopilot controls the angular rates. Throttle is passed directly to the output mixer.")])])]),t._v(" "),i("li",[i("p",[i("strong",[t._v("Multirotors:")])]),t._v(" "),i("ul",[i("li",[i("p",[i("strong",[t._v("MANUAL/STABILIZED")]),t._v(" The pilot's inputs are passed as roll and pitch "),i("em",[t._v("angle")]),t._v(" commands and a yaw "),i("em",[t._v("rate")]),t._v(" command. Throttle is passed directly to the output mixer. The autopilot controls the attitude, meaning it regulates the roll and pitch angles to zero when the RC sticks are centered, consequently leveling-out the attitude. However, in this mode the position of the vehicle is not controlled by the autopilot, hence the position can drift due to wind.")]),t._v(" "),i("div",{staticClass:"custom-block note"},[i("p",{staticClass:"custom-block-title"},[t._v("For Multirotors, Manual and Stabilized modes are the same.")])])])])])]),t._v(" "),i("p",[t._v(":::")]),t._v(" "),i("ul",[i("li",[i("strong",[t._v("ACRO:")]),t._v(" The pilot's inputs are passed as roll, pitch, and yaw "),i("em",[t._v("rate")]),t._v(" commands to the autopilot. The autopilot controls the angular rates, but not the attitude. Hence, if the RC sticks are centered the vehicle will not level-out. This allows the multirotor to become completely inverted. Throttle is passed directly to the output mixer.")]),t._v(" "),i("li",[i("strong",[t._v("RATTITUDE")]),t._v(" The pilot's inputs are passed as roll, pitch, and yaw "),i("em",[t._v("rate")]),t._v(" commands to the autopilot if they are greater than the mode's threshold, i.e. if the RC sticks are a certain distance away from the center position. If not the inputs are passed as roll and pitch "),i("em",[t._v("angle")]),t._v(" commands and a yaw "),i("em",[t._v("rate")]),t._v(" command. Throttle is passed directly to the output mixer. In short, the autopilot acts as an angular rate controller when the RC sticks are away from center (like in the ACRO mode), whereas when the RC sticks are centered, the autopilot acts as an attitude controller (like in the Stabilized mode).")])]),t._v(" "),i("h3",{attrs:{id:"assisted-flight-modes"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#assisted-flight-modes"}},[t._v("#")]),t._v(" Assisted flight modes")]),t._v(" "),i("p",[t._v('"Assisted" modes are also user controlled but offer some level of "automatic" assistance - for example, automatically holding position/direction, against wind. Assisted modes often make it much easier to gain or restore controlled flight.')]),t._v(" "),i("ul",[i("li",[i("strong",[t._v("ALTCTL")]),t._v(" (Altitude Control)\n"),i("ul",[i("li",[i("strong",[t._v("Fixed wing aircraft:")]),t._v(" When the roll, pitch and yaw (RPY) RC sticks are all centered (or less than some specified deadband range) the aircraft will return to straight and level flight and keep its current altitude. Its x and y position will drift with the wind.")]),t._v(" "),i("li",[i("strong",[t._v("Multirotors:")]),t._v(" Roll, pitch and yaw inputs are as in Stabilised mode. Throttle inputs indicate climb or sink at a predetermined maximum rate. Throttle has large deadzone. Centered Throttle holds altitude steady. The autopilot only controls altitude so the x,y position of the vehicle can drift due to wind.")])])]),t._v(" "),i("li",[i("strong",[t._v("POSCTL")]),t._v(" (Position Control)\n"),i("ul",[i("li",[i("strong",[t._v("Fixed wing aircraft:")]),t._v(" Neutral inputs (centered RC sticks) give level flight and it will crab against the wind if needed to maintain a straight line.")]),t._v(" "),i("li",[i("strong",[t._v("Multirotors")]),t._v(" Roll controls left-right speed, pitch controls front-back speed over ground. Yaw controls yaw rate as in MANUAL mode. Throttle controls climb/descent rate as in ALTCTL mode. This means that the x, y, z position of the vehicle is held steady by the autopilot against any wind disturbances, when the roll, pitch and throttle sticks are centered.")])])])]),t._v(" "),i("h3",{attrs:{id:"auto-flight-modes"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#auto-flight-modes"}},[t._v("#")]),t._v(" Auto flight modes")]),t._v(" "),i("p",[t._v('"Auto" modes are those where the controller requires little to no user input (e.g. to takeoff, land and fly missions).')]),t._v(" "),i("ul",[i("li",[i("strong",[t._v("AUTO_LOITER")]),t._v(" (Loiter)\n"),i("ul",[i("li",[i("strong",[t._v("Fixed wing aircraft:")]),t._v(" The aircraft loiters around the current position at the current altitude (or possibly slightly above the current altitude, good for 'I'm losing it').")]),t._v(" "),i("li",[i("strong",[t._v("Multirotors:")]),t._v("  The multirotor hovers / loiters at the current position and altitude.")])])]),t._v(" "),i("li",[i("strong",[t._v("AUTO_RTL")]),t._v(" (Return to Launch)\n"),i("ul",[i("li",[i("strong",[t._v("Fixed wing aircraft:")]),t._v(" The aircraft returns to the home position and loiters in a circle above the home position.")]),t._v(" "),i("li",[i("strong",[t._v("Multirotors:")]),t._v(" The multirotor returns in a straight line on the current altitude (if the current altitude is higher than the home position + "),i("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RTL_RETURN_ALT"}},[t._v("RTL_RETURN_ALT")]),t._v(") or on the "),i("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RTL_RETURN_ALT"}},[t._v("RTL_RETURN_ALT")]),t._v(" (if the "),i("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#RTL_RETURN_ALT"}},[t._v("RTL_RETURN_ALT")]),t._v(" is higher than the current altitude), then lands automatically.")],1)])]),t._v(" "),i("li",[i("strong",[t._v("AUTO_MISSION")]),t._v(" (Mission)\n"),i("ul",[i("li",[i("strong",[t._v("All system types:")]),t._v(" The aircraft obeys the programmed mission sent by the ground control station (GCS). If no mission received, aircraft will LOITER at current position instead.")]),t._v(" "),i("li",[i("strong",[i("em",[t._v("OFFBOARD")])]),t._v(" (Offboard) In this mode the position, velocity or attitude reference / target / setpoint is provided by a companion computer connected via serial cable and MAVLink. The offboard setpoint can be provided by APIs like "),i("a",{attrs:{href:"http://mavsdk.mavlink.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVSDK"),i("OutboundLink")],1),t._v(" or "),i("a",{attrs:{href:"https://github.com/mavlink/mavros",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAVROS"),i("OutboundLink")],1),t._v(".")])])])]),t._v(" "),i("h2",{attrs:{id:"flight-mode-evaluation-diagram"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#flight-mode-evaluation-diagram"}},[t._v("#")]),t._v(" Flight Mode Evaluation Diagram")]),t._v(" "),i("p",[i("img",{attrs:{src:o(583),alt:"Commander Flow diagram."}})])])}),[],!1,null,null,null);e.default=a.exports},583:function(t,e,o){t.exports=o.p+"assets/img/commander-flow-diagram.17c32053.png"}}]);