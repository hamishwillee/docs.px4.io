(window.webpackJsonp=window.webpackJsonp||[]).push([[198],{2941:function(t,e,o){"use strict";o.r(e);var a=o(19),i=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"flight-modes-multicopter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flight-modes-multicopter"}},[t._v("#")]),t._v(" Flight Modes (Multicopter)")]),t._v(" "),a("p",[t._v("Flight modes provide autopilot support to make it easier to manually fly the vehicle, to automate common tasks such as takeoff and landing, to execute autonomous missions, or to defer flight control to an external system.")]),t._v(" "),a("p",[t._v("This topic provides an overview of the available flight modes for multicopters and helicopters.")]),t._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),a("p",[t._v("Flight Modes are either "),a("em",[t._v("manual")]),t._v(" or "),a("em",[t._v("autonomous")]),t._v(".\nManual modes provide different levels of autopilot support when flying manually (using RC control sticks or a joystick), while "),a("em",[t._v("autonomous")]),t._v(" modes can be fully controlled by the autopilot.")]),t._v(" "),a("p",[t._v("Manual-Easy:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#position-mode"}},[t._v("Position")]),t._v(" — Easiest and safest manual mode for vehicles that have a position fix/GPS.\nReleasing sticks levels the vehicle, actively brakes it to a stop, and locks it to the current position (even against wind).")]),t._v(" "),a("li",[a("a",{attrs:{href:"#position-slow-mode"}},[t._v("Position Slow")]),t._v(" — A velocity and yaw rate limited version of "),a("a",{attrs:{href:"#position-mode"}},[t._v("Position mode")]),t._v(".\nThis is primarily used to temporarily limit speed when flying near obstacles, or when required by regulation.")]),t._v(" "),a("li",[a("a",{attrs:{href:"#altitude-mode"}},[t._v("Altitude")]),t._v(" — Easiest and safest "),a("em",[t._v("non-GPS")]),t._v(" manual mode.\nReleasing sticks levels the vehicle and maintains altitude (but not horizontal position).\nThe vehicle will continue to move with momentum and may also drift due to wind.")]),t._v(" "),a("li",[a("a",{attrs:{href:"#manual-stabilized-mode"}},[t._v("Manual/Stabilized")]),t._v(" — Releasing the sticks levels and maintains the vehicle horizontal posture (but not altitude or position).\nThe vehicle will continue to move with momentum, and both altitude and horizontal position may be affected by wind.")])]),t._v(" "),a("p",[t._v("Manual-Acrobatic")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#acro-mode"}},[t._v("Acro")]),t._v(" — Manual mode for performing acrobatic maneuvers, such as rolls and loops.\nReleasing the sticks stops the vehicle rotating in the roll, pitch, yaw axes, but does not otherwise stabilise the vehicle.")])]),t._v(" "),a("p",[t._v("Autonomous:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#hold-mode"}},[t._v("Hold")]),t._v(" — Vehicle stops and hovers at its current position and altitude, maintaining its position against wind and other forces.")]),t._v(" "),a("li",[a("a",{attrs:{href:"#return-mode"}},[t._v("Return")]),t._v(" — Vehicle ascends to a safe altitude, flies a clear path to a safe location (home or a rally point) and then lands.\nThis requires a global position estimate (GPS).")]),t._v(" "),a("li",[a("a",{attrs:{href:"#mission-mode"}},[t._v("Mission")]),t._v(" — Vehicle executes a "),a("RouterLink",{attrs:{to:"/ko/flying/missions.html"}},[t._v("predefined mission/flight plan")]),t._v(" that has been uploaded to the flight controller.\nThis requires a global position estimate (GPS).")],1),t._v(" "),a("li",[a("a",{attrs:{href:"#takeoff-mode"}},[t._v("Takeoff")]),t._v(" — Vehicle takes off vertically and then switches to "),a("a",{attrs:{href:"#hold-mode"}},[t._v("Hold mode")]),t._v(".")]),t._v(" "),a("li",[a("a",{attrs:{href:"#land-mode"}},[t._v("Land")]),t._v(" — Vehicle lands immediately.")]),t._v(" "),a("li",[a("a",{attrs:{href:"#orbit-mode"}},[t._v("Orbit")]),t._v(" - Vehicle flys in a circle, yawing so that it always faces towards the center.\nRC control can optionally be used to change the orbit radius, direction, speed and so on.")]),t._v(" "),a("li",[a("a",{attrs:{href:"#follow-me-mode"}},[t._v("Follow Me")]),t._v(" — Vehicle follows a beacon that is providing position setpoints.\nRC control can optionally be used to set the follow position.")]),t._v(" "),a("li",[a("a",{attrs:{href:"#offboard-mode"}},[t._v("Offboard")]),t._v(" — Vehicle obeys position, velocity, or attitude, setpoints provided via MAVLink or ROS 2.")])]),t._v(" "),a("p",[t._v("Pilots transition between flight modes using switches on the remote control or with a ground control station (see "),a("RouterLink",{attrs:{to:"/ko/config/flight_mode.html"}},[t._v("Flight Mode Configuration")]),t._v(").\nSome flight modes make sense only under specific pre-flight and in-flight conditions (e.g. GPS lock, airspeed sensor, vehicle attitude sensing along an axis).\nPX4 will not allow transitions to those modes until the right conditions are met.")],1),t._v(" "),a("p",[t._v("A high level description of the modes is provided below (select the mode-specific sidebar topics for detailed technical information).")]),t._v(" "),a("h2",{attrs:{id:"easy-manual-modes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#easy-manual-modes"}},[t._v("#")]),t._v(" Easy Manual Modes")]),t._v(" "),a("p",[t._v("In the easy manual modes, the roll and pitch and yaw sticks control left-right and forward-back movement "),a("em",[t._v("in the horizontal plane")]),t._v(" (respectively).\nThe yaw stick contols rotation in the horizontal plane, while the throttle stick controls vertical movement.\nNot only does this make movement predictable, but because angles are controlled, the vehicle is impossible to flip.")]),t._v(" "),a("h3",{attrs:{id:"position-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#position-mode"}},[t._v("#")]),t._v(" Position Mode")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/ko/flight_modes_mc/position.html"}},[t._v("Position mode")]),t._v(" is the easiest and safest manual mode.\nIt is supported on vehicles that have a position estimate (e.g. GPS).")],1),t._v(" "),a("p",[t._v("The roll and pitch sticks control "),a("em",[t._v("acceleration")]),t._v(" over ground in the vehicle's forward-back and left-right directions (similar to a car's accelerator pedal), the yaw stick controls horizontal rotation, and the throttle controls speed of ascent-descent.")]),t._v(" "),a("p",[t._v("When the sticks are released/centered the vehicle will actively brake, level, and be locked to a position in 3D space — compensating for wind and other forces.\nThis makes it easy to recover from any problems when flying.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("Unlike "),a("a",{attrs:{href:"#altitude-mode"}},[t._v("Altitude")]),t._v(" and "),a("a",{attrs:{href:"#manual-stabilized-mode"}},[t._v("Manual/Stabilized")]),t._v(" modes the vehicle will stop when the sticks are centered rather than continuously drifting without constant manual guidance.")])]),t._v(" "),a("p",[t._v("Roll, pitch and yaw are all angle-controlled (so it is impossible to roll over or loop the vehicle).")]),t._v(" "),a("p",[a("img",{attrs:{src:o(401),alt:"MC Position Mode"}})]),t._v(" "),a("h3",{attrs:{id:"position-slow-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#position-slow-mode"}},[t._v("#")]),t._v(" Position Slow Mode")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/ko/flight_modes_mc/position_slow.html"}},[t._v("Position Slow mode")]),t._v(" is a velocity and yaw rate limited version of the regular "),a("a",{attrs:{href:"#position-mode"}},[t._v("Position mode")]),t._v(".")],1),t._v(" "),a("p",[t._v("The mode works in exactly the same way as "),a("em",[t._v("Position mode")]),t._v(" but with the controller stick deflection re-scaled to lower maximum velocities (and proportionally lower acceleration).\nYou can use it to quickly slow down the vehicle to a safe speed.\nYou can also use it to get more precision from stick input, in particular when flying close to obstacles, or to comply with regulations such as "),a("a",{attrs:{href:"https://www.easa.europa.eu/en/light/topics/flying-drones-close-people",target:"_blank",rel:"noopener noreferrer"}},[t._v("EASA's low-speed mode/function"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"altitude-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#altitude-mode"}},[t._v("#")]),t._v(" Altitude Mode")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/ko/flight_modes_mc/altitude.html"}},[t._v("Altitude mode")]),t._v(" is the safest and easiest non-GPS manual mode.")],1),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[a("em",[t._v("Altitude mode")]),t._v(" is similar to "),a("a",{attrs:{href:"#position-mode"}},[t._v("Position mode")]),t._v(" in that when the sticks are released, both modes stop, level the vehicle, and maintain altitude.\nThe difference is that position mode actively brakes to stop and holds position steady against wind, while in altitude mode the vehicle continues to travel with momentum, and when stopped may drift with wind and other forces.")])]),t._v(" "),a("p",[t._v('The roll and pitch sticks control vehicle movement in the left-right and forward-back directions (relative to the "front" of the vehicle), the yaw stick controls rate of rotation over the horizontal plane, and throttle controls speed of ascent-descent.')]),t._v(" "),a("p",[t._v("When the sticks are released/centered the vehicle will level and maintain the current "),a("em",[t._v("altitude")]),t._v(".\nIf moving in the horizontal plane the vehicle will continue until any momentum is dissipated by wind resistance.\nIf the wind blows the aircraft will drift in the direction of the wind.")]),t._v(" "),a("p",[a("img",{attrs:{src:o(400),alt:"MC Altitude Mode"}})]),t._v(" "),a("h3",{attrs:{id:"manual-stabilized-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#manual-stabilized-mode"}},[t._v("#")]),t._v(" Manual/Stabilized Mode")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/ko/flight_modes_mc/manual_stabilized.html"}},[t._v("Manual/Stabilized")]),t._v(" is a manual mode were centering the RC sticks levels the vehicle attitude (roll and pitch) and maintains the horizontal posture.\nTo manually move/fly the vehicle you move the sticks outside of the center.")],1),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("The mode is enabled if you set either "),a("em",[t._v("Manual")]),t._v(" or "),a("em",[t._v("Stabilized")]),t._v(" modes for an MC vehicle.")])]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[a("em",[t._v("Manual/Stabilized mode")]),t._v(" is similar to "),a("a",{attrs:{href:"#altitude-mode"}},[t._v("Altitude mode")]),t._v(" in that releasing the sticks levels the vehicle, but unlike altitude mode it does not maintain altitude or heading.\nIt is much easier to fly than "),a("a",{attrs:{href:"#acro-mode"}},[t._v("Acro mode")]),t._v(" because you can't roll or flip the vehicle, and if needed it is easy to level the vehicle.")])]),t._v(" "),a("p",[t._v("The roll and pitch sticks control the angle of the vehicle (attitude), the yaw stick controls the rate of rotation above the horizontal plane, and the throttle controls altitude/speed.")]),t._v(" "),a("p",[t._v("As soon as you release the control sticks they will return to the center deadzone.\nThe vehicle will level out and stop once the roll and pitch sticks are centered.\nThe vehicle will then hover in place/maintain altitude — provided it is properly balanced, throttle is set appropriately, and no external forces are applied (e.g. wind).\nThe vehicle will drift in the direction of any wind and you will have to control the throttle to hold altitude.")]),t._v(" "),a("p",[a("img",{attrs:{src:o(402),alt:"MC Manual Flight"}})]),t._v(" "),a("h2",{attrs:{id:"acrobatic-manual-modes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#acrobatic-manual-modes"}},[t._v("#")]),t._v(" Acrobatic Manual Modes")]),t._v(" "),a("p",[t._v("In acrobatic manual modes vehicles are more maneuverable and can flip.\nThey are much harder to fly than the easy modes.")]),t._v(" "),a("p",[t._v("RC sticks control the rate of angular rotation (around the respective axis).")]),t._v(" "),a("h3",{attrs:{id:"acro-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#acro-mode"}},[t._v("#")]),t._v(" Acro Mode")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/ko/flight_modes_mc/acro.html"}},[t._v("Acro mode")]),t._v(" is the RC mode for performing acrobatic maneuvers such as rolls and loops.")],1),t._v(" "),a("p",[t._v("The roll, pitch, and yaw, sticks control the rate of angular rotation around the respective axes, and throttle is passed directly to control allocation.\nWhen sticks are centered the vehicle will stop rotating, but remain in its current orientation (on its side, inverted, or whatever) and moving according to its current momentum.")]),t._v(" "),a("p",[a("img",{attrs:{src:o(432),alt:"MC Manual Acrobatic Flight"}})]),t._v(" "),a("h2",{attrs:{id:"automatic-modes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#automatic-modes"}},[t._v("#")]),t._v(" Automatic Modes")]),t._v(" "),a("p",[t._v("Automatic or "),a("em",[t._v("autonomous")]),t._v(" modes are fully controlled by the autopilot.\nThey don't "),a("em",[t._v("require")]),t._v(" manual input from a pilot, but may optionally use it some cases.\nMost automatic modes require a local position estimate.\nA few, such as "),a("a",{attrs:{href:"#return-mode"}},[t._v("Return mode")]),t._v(" and "),a("a",{attrs:{href:"#mission-mode"}},[t._v("Mission mode")]),t._v(", need a global position estimate (i.e. GPS).")]),t._v(" "),a("h3",{attrs:{id:"hold-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hold-mode"}},[t._v("#")]),t._v(" Hold Mode")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/ko/flight_modes_mc/hold.html"}},[t._v("Hold mode")]),t._v(" causes the vehicle to stop and hover at its current position and altitude, maintaining position against wind and other forces.")],1),t._v(" "),a("p",[t._v("The mode can be used to pause a mission or to help regain control of a vehicle in an emergency.\nIt can be activated with a pre-programmed RC switch or the "),a("em",[t._v("QGroundControl")]),t._v(" "),a("strong",[t._v("Pause")]),t._v(" button.")]),t._v(" "),a("h3",{attrs:{id:"return-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#return-mode"}},[t._v("#")]),t._v(" Return Mode")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/ko/flight_modes_mc/return.html"}},[t._v("Return mode")]),t._v(" causes the vehicle to fly a clear path to a safe location.\nThe mode may be activated manually (via a pre-programmed RC switch) or automatically (i.e. in the event of a "),a("RouterLink",{attrs:{to:"/ko/config/safety.html"}},[t._v("failsafe")]),t._v(" being triggered).")],1),t._v(" "),a("p",[t._v("The return behaviour depends on parameter settings.\nBy default a mulitcopter will simply ascend to a safe height, fly to the closest rally point or its home position, and then land.")]),t._v(" "),a("h3",{attrs:{id:"mission-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mission-mode"}},[t._v("#")]),t._v(" Mission Mode")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/ko/flight_modes_mc/mission.html"}},[t._v("Mission mode")]),t._v(" causes the vehicle to execute a predefined autonomous "),a("RouterLink",{attrs:{to:"/ko/flying/missions.html"}},[t._v("mission")]),t._v(" (flight plan) that has been uploaded to the flight controller.\nThe mission is typically created and uploaded with a Ground Control Station (GCS) application, such as "),a("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/",target:"_blank",rel:"noopener noreferrer"}},[t._v("QGroundControl"),a("OutboundLink")],1),t._v(".")],1),t._v(" "),a("h3",{attrs:{id:"takeoff-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#takeoff-mode"}},[t._v("#")]),t._v(" Takeoff Mode")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/ko/flight_modes_mc/takeoff.html"}},[t._v("Takeoff mode")]),t._v(" mode causes the multicopter to climb vertically to takeoff altitude.\nIt will then switch to "),a("a",{attrs:{href:"#hold-mode"}},[t._v("Hold mode")]),t._v(" and hover in position.")],1),t._v(" "),a("h3",{attrs:{id:"land-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#land-mode"}},[t._v("#")]),t._v(" Land Mode")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/ko/flight_modes_mc/land.html"}},[t._v("Land mode")]),t._v(" causes the multicopter to land at the location at which the mode was engaged.")],1),t._v(" "),a("h3",{attrs:{id:"orbit-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#orbit-mode"}},[t._v("#")]),t._v(" Orbit Mode")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/ko/flight_modes_mc/orbit.html"}},[t._v("Orbit mode")]),t._v(" cause a multicopter to fly in a circle, yawing so that it always faces towards the center.")],1),t._v(" "),a("p",[t._v("A GCS is "),a("em",[t._v("required")]),t._v(" to enable the mode, and to set the center position and initial radius of the orbit.\nBy default the vehicle will then perform a slow ongoing orbit around the center position (1m/s) in a clockwise direction.\nRC control is optional, and can be used to change the orbit altitude, radius, speed, and direction.")]),t._v(" "),a("p",[a("img",{attrs:{src:o(403),alt:"Orbit Mode - MC"}})]),t._v(" "),a("h3",{attrs:{id:"follow-me-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#follow-me-mode"}},[t._v("#")]),t._v(" Follow Me Mode")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/ko/flight_modes_mc/follow_me.html"}},[t._v("Follow Me mode")]),t._v(" causes a multicopter to autonomously follow a beacon that is providing its position via MAVLink or ROS 2.\nThe height, distance, and bearing between the vehicle and beacon can (optionally) be set using a remote control.")],1),t._v(" "),a("p",[a("em",[t._v("QGroundControl for Android")]),t._v(" and MAVSDK can both act as Follow-me beacons when running on devices that have GPS.")]),t._v(" "),a("p",[a("img",{attrs:{src:o(404),alt:"Follow-me overview diagram"}})]),t._v(" "),a("h3",{attrs:{id:"offboard-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#offboard-mode"}},[t._v("#")]),t._v(" Offboard Mode")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/ko/flight_modes/offboard.html"}},[t._v("Offboard mode")]),t._v(" causes the multicopter to obey position, velocity, or attitude, setpoints provided over MAVLink.")],1),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("This mode is intended for vehicle control from companion computers and ground stations!")])]),t._v(" "),a("h2",{attrs:{id:"further-information"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#further-information"}},[t._v("#")]),t._v(" Further Information")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/ko/config/flight_mode.html"}},[t._v("Basic Configuration > Flight Modes")]),t._v(" - How to map RC control switches to specific flight modes")],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/flight_modes_fw/"}},[t._v("Flight Modes (Fixed-wing)")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/flight_modes_vtol/"}},[t._v("Flight Modes (VTOL)")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/flight_modes_rover/"}},[t._v("Flight Modes (Rover)")])],1)])])}),[],!1,null,null,null);e.default=i.exports},400:function(t,e,o){t.exports=o.p+"assets/img/altitude_mc.3f682126.png"},401:function(t,e,o){t.exports=o.p+"assets/img/position_mc.49edbb3d.png"},402:function(t,e,o){t.exports=o.p+"assets/img/stabilized_mc.d8643ae2.png"},403:function(t,e,o){t.exports=o.p+"assets/img/orbit_mc.abe4fdb5.png"},404:function(t,e,o){t.exports=o.p+"assets/img/followme_concept.101f1c40.png"},432:function(t,e,o){t.exports=o.p+"assets/img/acrobatic_mc.a9e1e559.png"}}]);