(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{1692:function(t,e,i){},1736:function(t,e,i){"use strict";i(1692)},2022:function(t,e,i){"use strict";i.r(e);i(1736);var a=i(19),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"flight-modes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flight-modes"}},[t._v("#")]),t._v(" Flight Modes")]),t._v(" "),a("p",[a("em",[t._v("Flight Modes")]),t._v(" define how the autopilot responds to user input and controls vehicle movement.\nThe tables below summarizes flight modes for fixed-wing and copter ("),a("a",{attrs:{href:"#key"}},[t._v("table key is below")]),t._v('). Note that this is the "high level" default behaviour, and may vary based on vehicle parameters.\nThe linked topics (sidebar) provide more detailed information about individual modes, including their tuning parameters.')]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("A "),a("em",[t._v("beginner friendly")]),t._v(" explanation of all flight modes is provided in "),a("RouterLink",{attrs:{to:"/en/getting_started/flight_modes.html"}},[t._v("Getting Started > Flight Modes")]),t._v(".")],1)]),t._v(" "),a("h2",{attrs:{id:"fixed-wing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fixed-wing"}},[t._v("#")]),t._v(" Fixed-wing")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticClass:"col_modes"},[t._v("Modes")]),t._v(" "),a("th",{staticClass:"col_r_p"},[t._v("Roll & Pitch")]),t._v(" "),a("th",{staticClass:"col_yaw"},[t._v("Yaw")]),t._v(" "),a("th",{staticClass:"col_throttle"},[t._v("Throttle")]),t._v(" "),a("th",{staticClass:"col_sensor"},[t._v("Position Sensors")]),t._v(" "),a("th",{staticClass:"col_summary"},[t._v("Summary")])])]),t._v(" "),a("tbody",[a("tr",{attrs:{id:"position_fw"}},[a("td",[a("a",{attrs:{href:"../flight_modes_mc/position.html"}},[t._v("Position")]),t._v(" "),a("p",[a("a",{attrs:{href:"#key_difficulty"}},[a("img",{attrs:{src:i(331),title:"Easy to fly",width:"20px"}})])])]),t._v(" "),a("td",[t._v("S"),a("sup",[t._v("+")])]),t._v(" "),a("td",[t._v("S"),a("sup",[t._v("+")])]),t._v(" "),a("td",[t._v("S"),a("sup",[t._v("+")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#key_position_fixed"}},[a("img",{attrs:{src:i(327),title:"Position fix required (e.g. GPS)",width:"20px"}})])]),t._v(" "),a("td",[a("p",[t._v("RC mode where centered sticks put vehicle into straight and level flight where vehicle posture/attitude, altitude, and the straight line vehicle path are maintained against wind (and other forces).\n   "),a("ul",[a("li",[t._v("Centered RC RPY sticks – level flight that follows a straight line ground track in the current direction against any wind.")]),t._v(" "),a("li",[t._v("Outside center:\n      "),a("ul",[a("li",[t._v("Pitch stick controls altitude (same as "),a("a",{attrs:{href:"#altitude_fw"}},[t._v("Altitude")]),t._v(").")]),t._v(" "),a("li",[t._v("Roll stick controls roll angle. Autopilot will maintain "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Coordinated_flight"}},[t._v("coordinated flight")]),t._v(" (same as "),a("a",{attrs:{href:"#stabilized_fw"}},[t._v("Stabilized")]),t._v(").")]),t._v(" "),a("li",[t._v("Throttle sets airspeed (same as "),a("a",{attrs:{href:"#altitude_fw"}},[t._v("Altitude")]),t._v(").")]),t._v(" "),a("li",[t._v("Roll and pitch are angle-controlled (so it is impossible to roll over or loop the vehicle).")]),t._v(" "),a("li",[t._v("Yaw stick adds an additional yaw rate setpoint (signal will be added to the one calculated by the autopilot to maintain "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Coordinated_flight"}},[t._v("coordinated flight")]),t._v("). This is the same as "),a("a",{attrs:{href:"#stabilized_fw"}},[t._v("Stabilized")]),t._v(".")])])])])])])]),t._v(" "),a("tr",{attrs:{id:"altitude_fw"}},[a("td",[a("a",{attrs:{href:"../flight_modes_mc/altitude.html"}},[t._v("Altitude")]),t._v(" "),a("p",[a("a",{attrs:{href:"#key_difficulty"}},[a("img",{attrs:{src:i(331),title:"Easy to fly",width:"20px"}})])])]),t._v(" "),a("td",[a("p",[t._v("S (roll)")]),a("p",[t._v("S"),a("sup",[t._v("+")]),t._v("(pitch)")])]),t._v(" "),a("td",[t._v("M")]),t._v(" "),a("td",[t._v("S"),a("sup",[t._v("+")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#altitude_only"}},[a("img",{attrs:{src:i(336),title:"Altitude required (e.g. Baro, Rangefinder)",width:"20px"}})])]),t._v(" "),a("td",[a("p",[t._v("RC mode like "),a("a",{attrs:{href:"#stabilized_fw"}},[t._v("Stabilized")]),t._v(" mode but with "),a("em",[t._v("altitude stabilization")]),t._v(" (centered sticks put vehicle into straight and level flight and maintain current altitude). The vehicle course is not maintained, and can drift due to wind.\n  "),a("ul",[a("li",[t._v("Centered RPY sticks (inside deadband):\n      "),a("ul",[a("li",[t._v("Autopilot maintains altitude with wings also level.")]),t._v(" "),a("li",[t._v("Throttle stick controls the airspeed of the aircraft if an airspeed sensor is connected (without airspeed sensor, the user cannot control throttle).")])])]),t._v(" "),a("li",[t._v("Outside center:\n      "),a("ul",[a("li",[t._v("Pitch stick controls altitude.")]),t._v(" "),a("li",[t._v("Throttle stick controls the airspeed of the aircraft (as for centered RPY sticks).")]),t._v(" "),a("li",[t._v("Yaw stick adds an additional yaw rate setpoint (signal will be added to the one calculated by the autopilot to maintain "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Coordinated_flight"}},[t._v("coordinated flight")]),t._v("). This is the same as "),a("a",{attrs:{href:"#stabilized_fw"}},[t._v("Stabilized")]),t._v(".")])])])])])])]),t._v(" "),a("tr",{attrs:{id:"stabilized_fw"}},[a("td",[a("a",{attrs:{href:"../flight_modes_fw/stabilized.html"}},[t._v("Stabilized")]),t._v(" "),a("p",[a("a",{attrs:{href:"#key_difficulty"}},[a("img",{attrs:{src:i(337),title:"Medium difficulty to fly",width:"20px"}})])])]),t._v(" "),a("td",[t._v("S")]),t._v(" "),a("td",[t._v("M")]),t._v(" "),a("td",[t._v("M")]),t._v(" "),a("td"),t._v(" "),a("td",[a("p",[t._v("RC mode where centered RP sticks levels vehicle attitude (roll and pitch). The vehicle course and altitude are not maintained, and can drift due to wind.")]),t._v(" "),a("ul",[a("li",[t._v("Pitch stick controls pitch angle.")]),t._v(" "),a("li",[t._v("Roll stick controls roll angle. Autopilot will maintain "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Coordinated_flight"}},[t._v("coordinated flight")]),t._v(".")]),t._v(" "),a("li",[t._v("Throttle stick controls throttle.")]),t._v(" "),a("li",[t._v("Yaw stick adds an additional yaw rate setpoint (signal will be added to the one calculated by the autopilot to maintain "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Coordinated_flight"}},[t._v("coordinated flight")]),t._v(").")])])])]),t._v(" "),a("tr",{attrs:{id:"acro_fw"}},[a("td",[a("a",{attrs:{href:"../flight_modes_mc/acro.html"}},[t._v("Acro")]),t._v(" "),a("p",[a("a",{attrs:{href:"#key_difficulty"}},[a("img",{attrs:{src:i(335),title:"Hard to fly",width:"20px"}})])])]),t._v(" "),a("td",[t._v("S"),a("sub",[t._v("rate")])]),t._v(" "),a("td",[t._v("S"),a("sub",[t._v("rate")])]),t._v(" "),a("td",[t._v("M")]),t._v(" "),a("td"),t._v(" "),a("td",[a("p",[t._v("RC mode for performing acrobatic maneuvers e.g. rolls, flips, stalls and acrobatic figures.")]),t._v(" "),a("p",[t._v("RPY stick inputs are translated to angular rate commands that are stabilized by autopilot. Throttle is passed directly to control allocation.")])])]),t._v(" "),a("tr",{attrs:{id:"manual_fw"}},[a("td",[a("a",{attrs:{href:"../flight_modes_fw/manual.html"}},[t._v("Manual")]),t._v(" "),a("p",[a("a",{attrs:{href:"#key_difficulty"}},[a("img",{attrs:{src:i(335),title:"Hard to fly",width:"20px"}})])])]),t._v(" "),a("td",[t._v("M")]),t._v(" "),a("td",[t._v("M")]),t._v(" "),a("td",[t._v("M")]),t._v(" "),a("td"),t._v(" "),a("td",[a("p",[t._v('RC mode where stick input is sent directly to control allocation (for "fully" manual control).')]),t._v(" "),a("p",[t._v("This is the only mode that overrides the FMU (commands are sent via the safety coprocessor). It provides a safety mechanism that allows full control of throttle, elevator, ailerons and rudder via RC in the event of an FMU firmware malfunction.\n   ")])])]),t._v(" "),a("tr",{attrs:{id:"takeoff_fw"}},[a("td",[a("a",{attrs:{href:"../flight_modes_fw/takeoff.html"}},[t._v("Takeoff")])]),t._v(" "),a("td",{attrs:{colspan:"3"}},[t._v("Auto")]),t._v(" "),a("td",[a("a",{attrs:{href:"#key_position_fixed"}},[a("img",{attrs:{src:i(327),title:"Position fix required (e.g. GPS)",width:"20px"}})])]),t._v(" "),a("td",[t._v("Vehicle initiates the takeoff sequence using either "),a("em",[t._v("catapult/hand-launch mode")]),t._v(" or "),a("em",[t._v("runway takeoff mode")]),t._v(" (in the current direction).")])]),t._v(" "),a("tr",{attrs:{id:"land_fw"}},[a("td",[a("a",{attrs:{href:"../flight_modes_fw/land.html"}},[t._v("Land")])]),t._v(" "),a("td",{staticClass:"centred",attrs:{colspan:"3"}},[t._v("Auto")]),t._v(" "),a("td",[a("a",{attrs:{href:"#key_position_fixed"}},[a("img",{attrs:{src:i(327),title:"Position fix required (e.g. GPS)",width:"20px"}})])]),t._v(" "),a("td",[t._v("Vehicle initiates the "),a("a",{attrs:{href:"../flight_modes_fw/mission.html#mission-landing"}},[t._v("fixed-wing landing")]),t._v(" sequence.")])]),t._v(" "),a("tr",{attrs:{id:"hold_fw"}},[a("td",[a("a",{attrs:{href:"../flight_modes_fw/hold.html"}},[t._v("Hold")])]),t._v(" "),a("td",{attrs:{colspan:"3"}},[t._v("Auto")]),t._v(" "),a("td",[a("a",{attrs:{href:"#key_position_fixed"}},[a("img",{attrs:{src:i(327),title:"Position fix required (e.g. GPS)",width:"20px"}})])]),t._v(" "),a("td",[t._v("Vehicle circles around the GPS hold position at the current altitude.")])]),t._v(" "),a("tr",{attrs:{id:"return_fw"}},[a("td",[a("a",{attrs:{href:"../flight_modes/return.html"}},[t._v("Return")])]),t._v(" "),a("td",{attrs:{colspan:"3"}},[t._v("Auto")]),t._v(" "),a("td",[a("a",{attrs:{href:"#key_position_fixed"}},[a("img",{attrs:{src:i(327),title:"Position fix required (e.g. GPS)",width:"20px"}})])]),t._v(" "),a("td",[t._v("Vehicle flies a clear path to a safe location. The return behaviour depends on parameter settings, and may follow a mission path and/or mission landing pattern (if defined).")])]),t._v(" "),a("tr",{attrs:{id:"mission_fw"}},[a("td",[a("a",{attrs:{href:"../flight_modes_fw/mission.html"}},[t._v("Mission")])]),t._v(" "),a("td",{attrs:{colspan:"3"}},[t._v("Auto")]),t._v(" "),a("td",[a("a",{attrs:{href:"#key_position_fixed"}},[a("img",{attrs:{src:i(327),title:"Position fix required (e.g. GPS)",width:"20px"}})])]),t._v(" "),a("td",[t._v("Vehicle executes a "),a("a",{attrs:{href:"../flying/missions.html"}},[t._v("predefined mission/flight plan")]),t._v(" that has been uploaded to the flight controller. ")])]),t._v(" "),a("tr",{attrs:{id:"offboard_fw"}},[a("td",[a("a",{attrs:{href:"../flight_modes/offboard.html"}},[t._v("Offboard")])]),t._v(" "),a("td",{attrs:{colspan:"3"}},[t._v("Auto")]),t._v(" "),a("td",[a("a",{attrs:{href:"#key_position_fixed"}},[a("img",{attrs:{src:i(327),title:"Position fix required (e.g. GPS)",width:"20px"}})])]),t._v(" "),a("td",[t._v("Vehicle obeys attitude setpoints provided over MAVLink (often from a companion computer connected via serial cable or wifi).")])])])]),t._v(" "),a("h2",{attrs:{id:"multicopter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multicopter"}},[t._v("#")]),t._v(" Multicopter")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Modes")]),t._v(" "),a("th",[t._v("Roll & Pitch")]),t._v(" "),a("th",[t._v("Yaw")]),t._v(" "),a("th",[t._v("Throttle")]),t._v(" "),a("th",[t._v("Position Sensors")]),t._v(" "),a("th",{staticClass:"col_summary"},[t._v("Summary")])])]),t._v(" "),a("tbody",[a("tr",{attrs:{id:"position_mc"}},[a("td",[a("a",{attrs:{href:"../flight_modes_mc/position.html"}},[t._v("Position")]),t._v(" "),a("p",[a("a",{attrs:{href:"#key_difficulty"}},[a("img",{attrs:{src:i(331),title:"Easy to fly",width:"20px"}})])])]),t._v(" "),a("td",[t._v("S"),a("sup",[t._v("+")])]),t._v(" "),a("td",[t._v("S"),a("sub",[t._v("rate")])]),t._v(" "),a("td",[t._v("S"),a("sup",[t._v("+")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#key_position_fixed"}},[a("img",{attrs:{src:i(327),title:"Position fix required (e.g. GPS)",width:"20px"}})])]),t._v(" "),a("td",[a("p",[t._v("RC mode where roll, pitch, throttle sticks control movement in corresponding axes/directions. Centered sticks level vehicle and hold it to fixed altitude and position against wind.\n  "),a("ul",[a("li",[t._v("Centered RPT sticks hold x, y, z position steady against any wind and levels attitude.")]),t._v(" "),a("li",[t._v("Outside center:\n      "),a("ul",[a("li",[t._v("Roll/Pitch sticks control horizontal acceleration over ground in the vehicle's left-right and forward-back directions (respectively).")]),t._v(" "),a("li",[t._v("Throttle stick controls speed of ascent-descent.")]),t._v(" "),a("li",[t._v("Yaw stick controls rate of angular rotation above the horizontal plane.")])])]),t._v(" "),a("li",[t._v("Takeoff:\n      "),a("ul",[a("li",[t._v("When landed, the vehicle will take off if the throttle stick is raised above 62.5% percent (of the full range from bottom).")])])])])])])]),t._v(" "),a("tr",{attrs:{id:"position_slow_mc"}},[a("td",[a("a",{attrs:{href:"../flight_modes_mc/position_slow.html"}},[t._v("Position Slow")]),t._v(" "),a("p",[a("a",{attrs:{href:"#key_difficulty"}},[a("img",{attrs:{src:i(331),title:"Easy to fly",width:"20px"}})])])]),t._v(" "),a("td",[t._v("S"),a("sup",[t._v("+")])]),t._v(" "),a("td",[t._v("S"),a("sub",[t._v("rate")])]),t._v(" "),a("td",[t._v("S"),a("sup",[t._v("+")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#key_position_fixed"}},[a("img",{attrs:{src:i(327),title:"Position fix required (e.g. GPS)",width:"20px"}})])]),t._v(" "),a("td",[a("p",[t._v("A velocity and yaw rate limited version of the regular "),a("a",{attrs:{href:"#position_slow_mc"}},[t._v("Position mode")]),t._v(".")])])]),t._v(" "),a("tr",{attrs:{id:"altitude_mc"}},[a("td",[a("a",{attrs:{href:"../flight_modes_mc/altitude.html"}},[t._v("Altitude")]),t._v(" "),a("p",[a("a",{attrs:{href:"#key_difficulty"}},[a("img",{attrs:{src:i(331),title:"Easy to fly",width:"20px"}})])])]),t._v(" "),a("td",[t._v("S")]),t._v(" "),a("td",[t._v("S"),a("sub",[t._v("rate")])]),t._v(" "),a("td",[t._v("S"),a("sup",[t._v("+")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#altitude_only"}},[a("img",{attrs:{src:i(336),title:"Altitude required (e.g. Baro, Rangefinder)",width:"20px"}})])]),t._v(" "),a("td",[a("p",[t._v("RC mode like "),a("a",{attrs:{href:"#manual_stabilized_mc"}},[t._v("Manual/Stabilized")]),t._v(" mode but with "),a("em",[t._v("altitude stabilization")]),t._v(" (centered sticks level vehicle and hold it to fixed altitude). The horizontal position of the vehicle can move due to wind (or pre-existing momentum).\n  "),a("ul",[a("li",[t._v("Centered sticks (inside deadband):\n      "),a("ul",[a("li",[t._v("RPY sticks levels vehicle.")]),t._v(" "),a("li",[t._v("Throttle (~50%) holds current altitude steady against wind.")])])]),t._v(" "),a("li",[t._v("Outside center:\n      "),a("ul",[a("li",[t._v("Roll/Pitch sticks control tilt angle in respective orientations, resulting in corresponding left-right and forward-back movement.")]),t._v(" "),a("li",[t._v("Throttle stick controls up/down speed with a predetermined maximum rate (and movement speed in other axes).")]),t._v(" "),a("li",[t._v("Yaw stick controls rate of angular rotation above the horizontal plane.")])])]),t._v(" "),a("li",[t._v("Takeoff:\n      "),a("ul",[a("li",[t._v("When landed, the vehicle will take off if the throttle stick is raised above 62.5% percent (of the full range from bottom).")])])])])])])]),t._v(" "),a("tr",{attrs:{id:"manual_stabilized_mc"}},[a("td",[a("a",{attrs:{href:"../flight_modes_mc/manual_stabilized.html"}},[t._v("Manual/ Stabilized")]),t._v(" "),a("p",[a("a",{attrs:{href:"#key_difficulty"}},[a("img",{attrs:{src:i(337),title:"Medium difficulty to fly",width:"20px"}})])])]),t._v(" "),a("td",[t._v("S")]),t._v(" "),a("td",[t._v("S"),a("sub",[t._v("rate")])]),t._v(" "),a("td",[t._v("M")]),t._v(" "),a("td"),t._v(" "),a("td",[a("p",[t._v("RC mode where centered sticks level vehicle (only - position is not stabilized).")]),t._v(" "),a("p",[a("ul",[a("li",[t._v("Centered RP sticks level vehicle.")]),t._v(" "),a("li",[t._v("Outside center:\n      "),a("ul",[a("li",[t._v("Roll/Pitch sticks control tilt angle in those orientations, resulting in corresponding left-right and forward-back movement.")]),t._v(" "),a("li",[t._v("Throttle stick controls up/down speed (and movement speed in other axes).")]),t._v(" "),a("li",[t._v("Yaw stick controls rate of angular rotation above the horizontal plane.")])])])])])])]),t._v(" "),a("tr",{attrs:{id:"acro_mc"}},[a("td",[a("a",{attrs:{href:"../flight_modes_mc/acro.html"}},[t._v("Acro")]),t._v(" "),a("p",[a("a",{attrs:{href:"#key_difficulty"}},[a("img",{attrs:{src:i(335),title:"Hard to fly",width:"20px"}})])])]),t._v(" "),a("td",[t._v("S"),a("sub",[t._v("rate")])]),t._v(" "),a("td",[t._v("S"),a("sub",[t._v("rate")])]),t._v(" "),a("td",[t._v("M")]),t._v(" "),a("td"),t._v(" "),a("td",[a("p",[t._v("RC mode for performing acrobatic maneuvers e.g. flips, rolls and loops.")]),t._v(" "),a("p",[t._v("RC RPY stick inputs control the rate of angular rotation around the respective axes. Throttle is passed directly to control allocation.  When sticks are centered the vehicle will stop rotating, but remain in its current orientation (e.g. possibly inverted) and moving according to its current momentum.")])])]),t._v(" "),a("tr",{attrs:{id:"orbit_mc"}},[a("td",[a("a",{attrs:{href:"../flight_modes_mc/orbit.html"}},[t._v("Orbit")]),t._v(" "),a("p",[a("a",{attrs:{href:"#key_difficulty"}},[a("img",{attrs:{src:i(331),title:"Easy to fly",width:"20px"}})])])]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td"),t._v(" "),a("td",[a("p",[t._v("GCS-initiated guided mode for flying a circle, always facing the center.")]),t._v(" "),a("p",[t._v("Mode must be started from GCS, specifying center point and initial radius and altitude. RC control is optional, and can be used to set the orbit altitude, radius, speed, and direction. Altitude control is the same as for "),a("a",{attrs:{href:"#position_mc"}},[t._v("Position Mode")]),t._v(".")])])]),t._v(" "),a("tr",{attrs:{id:"takeoff_mc"}},[a("td",[a("a",{attrs:{href:"../flight_modes_mc/takeoff.html"}},[t._v("Takeoff")])]),t._v(" "),a("td",{attrs:{colspan:"3"}},[t._v("Auto")]),t._v(" "),a("td",[a("a",{attrs:{href:"#key_position_fixed"}},[a("img",{attrs:{src:i(327),title:"Position fix required (e.g. GPS)",width:"20px"}})])]),t._v(" "),a("td",[t._v("Vehicle ascends to takeoff altitude and holds position.")])]),t._v(" "),a("tr",{attrs:{id:"land_mc"}},[a("td",[a("a",{attrs:{href:"../flight_modes_mc/land.html"}},[t._v("Land")])]),t._v(" "),a("td",{attrs:{colspan:"3"}},[t._v("Auto")]),t._v(" "),a("td",[a("a",{attrs:{href:"#key_position_fixed"}},[a("img",{attrs:{src:i(327),title:"Position fix required (e.g. GPS)",width:"20px"}})])]),t._v(" "),a("td",[t._v("Vehicle lands at the position where the mode was engaged.")])]),t._v(" "),a("tr",{attrs:{id:"hold_mc"}},[a("td",[a("a",{attrs:{href:"../flight_modes_mc/hold.html"}},[t._v("Hold")])]),t._v(" "),a("td",{attrs:{colspan:"3"}},[t._v("Auto")]),t._v(" "),a("td",[a("a",{attrs:{href:"#key_position_fixed"}},[a("img",{attrs:{src:i(327),title:"Position fix required (e.g. GPS)",width:"20px"}})])]),t._v(" "),a("td",[t._v("Vehicle hovers at the current GPS position and altitude.")])]),t._v(" "),a("tr",{attrs:{id:"return_mc"}},[a("td",[a("a",{attrs:{href:"../flight_modes/return.html"}},[t._v("Return")])]),t._v(" "),a("td",{attrs:{colspan:"3"}},[t._v("Auto")]),t._v(" "),a("td",[a("a",{attrs:{href:"#key_position_fixed"}},[a("img",{attrs:{src:i(327),title:"Position fix required (e.g. GPS)",width:"20px"}})])]),t._v(" "),a("td",[t._v("Vehicle flies a clear path to a safe location. The return behaviour depends on parameter settings, and may follow a mission path and/or mission landing pattern (if defined).")])]),t._v(" "),a("tr",{attrs:{id:"mission_mc"}},[a("td",[a("a",{attrs:{href:"../flight_modes_mc/mission.html"}},[t._v("Mission")])]),t._v(" "),a("td",{attrs:{colspan:"3"}},[t._v("Auto")]),t._v(" "),a("td",[a("a",{attrs:{href:"#key_position_fixed"}},[a("img",{attrs:{src:i(327),title:"Position fix required (e.g. GPS)",width:"20px"}})])]),t._v(" "),a("td",[t._v("Vehicle executes a "),a("a",{attrs:{href:"../flying/missions.html"}},[t._v("predefined mission/flight plan")]),t._v(" that has been uploaded to the flight controller.")])]),t._v(" "),a("tr",{attrs:{id:"followme_mc"}},[a("td",[a("a",{attrs:{href:"../flight_modes_mc/follow_me.html"}},[t._v("Follow Me")])]),t._v(" "),a("td",{attrs:{colspan:"3"}},[t._v("Auto")]),t._v(" "),a("td",[a("a",{attrs:{href:"#key_position_fixed"}},[a("img",{attrs:{src:i(327),title:"Position fix required (e.g. GPS)",width:"20px"}})])]),t._v(" "),a("td",[t._v("Vehicle autonomously follows a user using an Android phone/tablet running QGC.")])]),t._v(" "),a("tr",{attrs:{id:"offboard_mc"}},[a("td",[a("a",{attrs:{href:"../flight_modes/offboard.html"}},[t._v("Offboard")])]),t._v(" "),a("td",{attrs:{colspan:"3"}},[t._v("Auto")]),t._v(" "),a("td",[a("a",{attrs:{href:"#key_position_fixed"}},[a("img",{attrs:{src:i(327),title:"Position fix required (e.g. GPS)",width:"20px"}})])]),t._v(" "),a("td",[t._v("Vehicle obeys a position, velocity or attitude setpoints provided over MAVLink (often from a companion computer connected via serial cable or wifi).")])])])]),t._v(" "),a("h2",{attrs:{id:"vtol"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vtol"}},[t._v("#")]),t._v(" VTOL")]),t._v(" "),a("p",[t._v("VTOL vehicles support both fixed-wing and multicopter flight modes, executing them based on the current vehicle mode (MC or FW).")]),t._v(" "),a("p",[t._v("VTOL supports "),a("RouterLink",{attrs:{to:"/en/flight_modes/offboard.html"}},[t._v("Offboard")]),t._v(" mode in either configuration.")],1),t._v(" "),a("h2",{attrs:{id:"key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#key"}},[t._v("#")]),t._v(" Key")]),t._v(" "),a("p",[t._v("Key for understanding the table is as follows:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Symbol")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("M")]),t._v(" "),a("td",[t._v("Manual control via RC sticks. RC input is sent directly to control allocation.")])]),t._v(" "),a("tr",[a("td",[t._v("S")]),t._v(" "),a("td",[t._v("Assistance from autopilot to stabilize the attitude. RC input is required. Position of RC stick maps to the orientation of vehicle.")])]),t._v(" "),a("tr",[a("td",[t._v("S"),a("sub",[t._v("rate")])]),t._v(" "),a("td",[t._v("Assistance from autopilot to stabilize the attitude rate. RC input is required. Position of RC stick maps to the rate of rotation of vehicle in that orientation.")])]),t._v(" "),a("tr",[a("td",[t._v("S"),a("sup",[t._v("+")])]),t._v(" "),a("td",[t._v("Assistance from autopilot to hold position or altitude against wind. RC input is required.")])]),t._v(" "),a("tr",[a("td",[t._v("Auto")]),t._v(" "),a("td",[t._v("This mode is automatic (RC control is disabled by default except to change modes).")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"key_position_fixed"}}),a("img",{attrs:{src:i(327),title:"Position fix required (e.g. GPS)",width:"20px"}})]),t._v(" "),a("td",[t._v("Sensor(s) that measures position/height needed e.g. optical flow, GPS+barometer, visual-inertial odometry.")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"altitude_only"}}),a("img",{attrs:{src:i(336),title:"Altitude fix required (e.g. barometer, rangefinder)",width:"20px"}})]),t._v(" "),a("td",[t._v("Sensor(s) that measures height/altitude needed e.g. barometer, rangefinder.")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{id:"key_difficulty"}}),a("a",{attrs:{href:"#key_difficulty"}},[a("img",{attrs:{src:i(331),title:"Easy to fly",width:"20px"}}),t._v(" "),a("img",{attrs:{src:i(337),title:"Medium difficulty to fly",width:"20px"}}),t._v(" "),a("img",{attrs:{src:i(335),title:"Hard to fly",width:"20px"}})])]),t._v(" "),a("td",[t._v("Flight mode difficulty (easy/medium/hard).")])])])]),t._v(" "),a("p",[t._v("Abbreviations:")]),t._v(" "),a("ul",[a("li",[t._v("RPY: Roll, Pitch, Yaw")]),t._v(" "),a("li",[t._v("RPT: Roll, Pitch Throttle")])])])}),[],!1,null,null,null);e.default=s.exports},327:function(t,e,i){t.exports=i.p+"assets/img/position_fixed.38e4a675.svg"},331:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAABeCAMAAACdDFNcAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAaFQTFRFR3BMLck2OcY5Lck3Lck3Lck3LMk3QL9ALck3M8wzLsg3Lsk4LtEuM8wzLck3Lsg3Lck3Lck3LMo3Lsk4Lck3IL9ALck3Lck3JNtJLck2Lcs4LMk2Lcg3Lsc4LMo4Lco3LMc4K8wzL8Y5Lck3McQ7Lck4Lck3LMg3Lso4Lck4LMo4Lck3Lck3Lck2Lco3L8s5Lck3Lsk3Lsg3Lck3KMk2LMw6Lck3Lck3Lck3KcU6LcM8Lcg3Lsk3Lsk4LMo1Lck2K8Y5Lsg3LMk3Lck3Lck2LMk2Lsk2Lck2Lco3LMk2K8o1Lco5KcwzLck3LMo4Lck2LMg3Lso1Lsg3Lck4L8g3Lck3K8k2Lsk2Lck2Lck3K8o1Lck3VapVLMk2K9UrLMk3Lck4Lsg3Lck3Lco3Lck3Lck2Lsk3Lck2Lcg3Lco3J8Q7Lsg3MMc4Lsc4Lck2M8wzLck3Lck3LMg3M8wzLsk2Lcg3Lck4Lck3Lck3LMo4K8s4K8g3Lck4Lck3Lck3Lck3Lco3Lcg3JMg3Lcg3Lsk2LMk2Lso3Lck3LMk2LMg3Lck3hb9vmgAAAIp0Uk5TAPgJ7f7uwwT5CsSzCwXvVMjGp4DxCNDdB8VEsrsyVn1AHhvwGtPURU2lV8z7UI82mKJv8hMj1sfRHxEz4JcdkhKt697AND2NlJs1Pxm0UqTJQ1h3PPcvWYj8MPMDUQa4vHCrv8u3z1WamQ0cIE52D9X1dBQhtsq19G47Qa7Br7Cxgw6HQn+G+oRGHgf53gAAAsdJREFUaN612ndbGkEQBvClHBx30pFeBQlgiUaNJsaSRGM31hTTe++9ml7mU4cQICAH3N3OvP/zex4Wdm925hhTk47YhtfjHgsIoigExtye7xuxDoYTW9gbFaEhZ3vO5L7w2p1xWYGuxBBxdnLg+xcc0CaOO4s68S0ZVEXK6cD3hUB1pLBGPDMImiKnNODWA0OgMU+8F9Xqh0ZBR3pG1Ol9AuiKr6ACt8+D7kzZ2+7RV8CR6N3W+mEJuLL2rJV+7yBwJtvVXB/m1gEeTzdddwkQ4mpyVNtfAEpWrIr8PCClX0l3YulgvtCoj6TReHA8b1j464AY197lfwiouVKvT57D5Yfqd9dRQI6n7skH6EnW8BI+P/NffwcEOVHlL1Pwl6rVEpBktswv0PAD5TrSQcOnjSW+AERxlvgVKv5T6RlloOINf1fnN5Blvch/peN/Ffk1Ot5dvJX10vG9NhYDwpxipyn5OPNS8gnmoeRPshAlb2HdlLyfHaHkjzMTJX+MiZS8gZonXhzin5b4j0m8rYgPBeIjjfhAJn6cUD4Mf9oYc9HxoWKl8IOO/0xz8ankG2kRuF0qkSNU/MdShXyLil8lvT4IwX/Xk9s0/ET5brVIw49XroZRCv1G9V6bpL02Mwu+fq2mpxDG55dqWyJXsfV8XT9n2Yer+zL17ainuPybva26l6h3toZOaQqxXBPuNzYyc2Ys3dyn1IadwuLnFHvI59/j6LJyi5oZUTbvaNNZ6CM/v56dbj5+6Mry6t2ZlqMZzvVxDbce/QS52r0RY9t5Yb/u/795zqpi7vZA5/5NO1WOJHWVne6U+oGq5vP59aZVw8R2eVDbLyBPapw3Jz+ox2eWdEzL38rqvoG0rnPWPzvQdjIsTIxzvKkQdEZa1Ofbu6tB3hctjFubTV7iCBsZTmw7hUTe4g+YRNEUuGnJJ+I7NlUf/APjU3MV9RK8MwAAAABJRU5ErkJggg=="},335:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAABeCAMAAACdDFNcAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAaFQTFRFR3BMzDIyxjk5zDExzDIyzDIyzDIyv0BAzDIyzDMzzDExzDIy0S4uzDIyzDMzzDIyyzExyzIyzTIyyzIyzDIyzDIyv0BAzDIy2yQkzTIyyzExyzIyzTIyzDMzzTIyzDMzzDMz0C8vzDMzzDIyzjExyzQ0zDIyyzQ0zTIyzTIyzDExzDIyzDIyzDMzzTIyzDMzzDMz0i0tzTIyzjExyzIyzDIyzDMzyjU1zDIyzDIyyzQ0zDMzzTIyyzIyyjAwzTIyzDIyyzIyzDExzjExzDMzzDIyyTY2yjExzDMzzDMzzTIyzDIyxjk5zTIyzDIyzDIyzjExzDExyzExzDExzDMzzDIyyzExzjExzDMzzDIyyjAwyC4uzDMzzDIyqlVVzDIyyzIyzTIyzDIyyzExzDIyzDIyzDMzyzIyzzAwzTIyyzIyyzIyzTIyyzIyzDIyzDMzzDMz1SsrxDs7yS4uzDIyyzQ0zDExzDMzzTIyzDMzzDMzzDMzyzIyzDExzDIyzDMzzTIyzDMzzDExzTIyyDc3zTIyzDExzTIyzDMzzDIyzDIyllrnYwAAAIp0Uk5TAPgJxO7+wwT5Cu2zC+8FyFTGp4DQ3QjxB8VEsrsyVn3UGx7TGkDwRU1Xpcz7lzMj3hGiNI/Hkh3y4DYZwK01mOuUmx9Q0RM/b4091hJStKRDyVh3PPdZL4j8MBxB9APVmbb1TvO4q7wgcLfLysGuFA8GDSGaO7VVUXTPbna/r7Cxg4aEDn+HQkb6NWUPegAAAsdJREFUaN612ndbGkEQBvCFO+DgpIP0IgIBbIk90Wg0lpiosaaY3nvv1fQynzqEAAHhYO9u5v2f3/OwsHuzM8cYTzpiG16Pe94vSpLon3d7vm/EOhhOrGFvVIKGnO05k/um1+6My03oSgwRV6cO/NCsHdrEfnlKI74lA1eEnAZ8Xwi4I4RV4ulBUBU5pQK3HBsHlbnqfcKrHx0BDekZ4NPnRNCUQJ4Dd8yA5ow62u7Rl6Aj0aet9QMC6Mr6o1b6uROgM8kuZX1Btw5waVlx3QVAiFPhqHZcAZSsWpryM4CU4Wa6C0sH0+tGfSCLxoP9WcPC3wPEOPcu/3tAzZ16few6Lj9ev7sOA3I8dU8+QE+mhhfw+cn/+nkgyPEqf4uCv1GtloAkQ2V+loafLteRdho+ayzxeSCKq8SvUvGfSs8oAxVv+Ls6v4Asa0X+Bx3/tciv0/Hu4q2sl47vtbIYEOY0O0XJx5mXkk8wDyV/koUoeTPrpuR97CAlv5/ZKPkjTKLkDdQ88eIQ/7TEf0zibUV8KBAfacQHMvHjhPJh+NvKmJOODxUrhS90/Geai08lP0mLwO1SiRyh4j+WKuRXVPwK6fVBDP67njyn4fvKd6spGr6/cjWMUuh3q/faDO21mZnx9Q81PYUwPr9Y2xK5ia0X6vo5EwFcPZCub0e9weXf7W3V3Ue9szV0SlOI5Zp4u7GRmTNh6aa5Zm3YUSx+qWkP+eJDHF1u3qJmRpTNO6I4C33s068nl5XHD11JvXp3uuVoRuf6OBdaj36Cutq9EWPbeeGw5v+/acnCMXe7pnH/Zl2cI0lNZac7xT9QVX0+X9i0qJjYTgyq+wXkMZXz5swDfnxyUcO0/IXM9w2ENY2z/qHptpNhsa9fx5sKQVekRX2+vbsS1PuihXFrU+EljrCR4cS6k08UzD6/TZJs/rfmQiK+Y+X64B89xXMV+heTNAAAAABJRU5ErkJggg=="},336:function(t,e,i){t.exports=i.p+"assets/img/altitude_icon.d9607697.svg"},337:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAABeCAMAAACdDFNcAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAaFQTFRFR3BM57QW46oc6LQW57QX57QW57QW/78A57QW5rMa57QW57MV6LkX6LQW/8wA57MV57QW57QW57QV57MW5rQW57QW57QW378g27Yk5rQW6bQX57UV5rQW5rMU57UV57QW47MT5rMa57QW57QW57MY57QW67EU6bUW6LMX5rMW6LMX57QX57QW57IU57QW5rMW6LMX6LQW57UW57QW5rUU67gU57QV6LQV5rMV57UW5bAS6bYW4bQP57IY57MW57QX57QW57QW5rUZ57MW47gc57UX5rQV57MY5rQU57QW57UW5K4b57MW57QX5rQW57QW6LMX6LQW57QW6LQX57QV5rMV57QX57QW6LUX6bMW5LUV6LQW5rMW57QV57QX57QW5rMa57QW57QW57QW5LYS6LIX57MW/6oA57QX67EU57QW57cY57QW57QW6LQW57QW57QY57QW5bYW1aor57QW7rsR5rQX6LQX57QV6LQW6LQW6LUV57UV57MW5rQW6LUW57QW6LMV57UW6LYX57QW5rMX7bYS5rMW6LQV5rUX57QWHpMEJAAAAIp0Uk5TAPgJxO7+wwT5Cu2zC+8FVMjGp4DQ3fEIB8VEsrsyVn0bHvDUQNMaRU2lV8z7P61Qb5iX8jQZ1o+bjR0jETWUkuveH6ISwD02M+DRE8e0UslDpPdYdzyI/FkvMK5Rv8t0FLjzqxwhdgO1DfUgwbyat0HVOwb0D3BOVZnPbsq2sK+xg39C+ocORoSGrQ6rKgAAAsdJREFUaN612ndbGkEQBvCFO+DgpBfpSJEAaowttqhJ1MTYY0kxvffeq+llPnUIAQLCwd3tzPs/v+dhYfdmZ44xNemIbXo97kW/KEmif9Ht+bIZ62A4sYa9UQkacrrnVO4Hr90Zl5vQlRgizk4O/PiYHdrE/mZKJ74tg6oIOR34vhCojhDWiGdnQVPkpAbccmAINOau95la/egy6EjPpDq9XwRdCRRU4I5p0J0ZR9s9ehs4Er3TWj8kAFfWLrfSrx8EzqS7lPUlbh3gyZziuguAEJfCUe34AChZsTTlpwEpo810J5YOpvON+mQKjQf7jYaFvwiIce1d/puAmpf1+sRVXH6ofnftB+R46p58gJ5MDS/g8/P/9cdAkGNV/gEFf6VaLQFJhsv8GA0/UK4j7TR8yljiC0AUZ4lfoeI/lZ5RBire8Hd1fgJZ1ov8dzr+V5Ffo+PdxVtZLx3fa2UxIMxZdoaSjzMvJZ9gHkr+JAtR8mbWTcn72AlK/gizUfKHmUTJG6h54sUh/mmJ/5jE24r4UCA+0ogPZOLHCeXD8JuVMRcdHypWCr/p+M80F59KvpIWgRulEjlCxe+WKuTXVPwq6fVBDP67njyk4QfLd6spGn6hcjWMUuiPqvfaDO21mZnx9Qs1PYUwPt9X2xK5hq3n6/o5IwFcPZCtb0ddwuXf7W3VvUe9szV0SpOI5Zp4r7GRmTNh6ab+Zm3YGSx+vGkP+dY5HF1u3qJmRpTNu6w4C33h49fTc8rjh640r96dbTma4Vwf11Lr0U+Qq90bMbadF47q/v+bxi0q5m6vdO7flFPlSFJX2elOqh+oaj6fn29ZNExsR2a1/QLyhMZ5c+a+eny+T8e0/Kms7hsI6zpn/cMDbSfD4uACx5sKQWekRX2+8XE1yPuihXF7S+EljrCR4cS6U0jkzT6/TZJs/rfmfCK+Y1X1wT/yG3MVH20xOwAAAABJRU5ErkJggg=="}}]);