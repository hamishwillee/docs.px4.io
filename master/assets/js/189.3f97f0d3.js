(window.webpackJsonp=window.webpackJsonp||[]).push([[189],{1146:function(e,t,s){e.exports=s.p+"assets/img/lidar_lite_1.7a79e944.png"},1732:function(e,t,s){"use strict";s.r(t);var o=s(19),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"sensors"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#sensors"}},[e._v("#")]),e._v(" Sensors")]),e._v(" "),o("p",[e._v("PX4-based systems use sensors to determine vehicle state (needed for stabilization and to enable autonomous control). The vehicle states include: position/altitude, heading, speed, airspeed, orientation (attitude), rates of rotation in different directions, battery level, etc.")]),e._v(" "),o("p",[e._v("The system "),o("em",[e._v("minimally requires")]),e._v(" a gyroscope, accelerometer, magnetometer (compass) and barometer. A GPS or other positioning system is needed to enable all automatic "),o("RouterLink",{attrs:{to:"/en/getting_started/flight_modes.html#categories"}},[e._v("modes")]),e._v(", and some assisted modes. Fixed wing and VTOL-vehicles should additionally include an airspeed sensor (very highly recommended).")],1),e._v(" "),o("p",[e._v("The minimal set of sensors is incorporated into "),o("RouterLink",{attrs:{to:"/en/flight_controller/pixhawk_series.html"}},[e._v("Pixhawk Series")]),e._v(" flight controllers (and may also be in other controller platforms). Additional/external sensors can be attached to the controller.")],1),e._v(" "),o("p",[e._v("Below we describe some of the sensors. At the end there are links to information about "),o("a",{attrs:{href:"#wiring"}},[e._v("sensor wiring")]),e._v(".")]),e._v(" "),o("p",[o("span",{attrs:{id:"gps_compass"}})]),e._v(" "),o("h2",{attrs:{id:"gps-compass"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#gps-compass"}},[e._v("#")]),e._v(" GPS & Compass")]),e._v(" "),o("p",[e._v("PX4 supports a number of global navigation satellite system (GNSS) receivers and compasses (magnetometers).\nIt also supports "),o("RouterLink",{attrs:{to:"/en/gps_compass/rtk_gps.html"}},[e._v("Real Time Kinematic (RTK) GPS Receivers")]),e._v(", which extend GPS systems to centimetre-level precision.")],1),e._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),o("p",[o("RouterLink",{attrs:{to:"/en/flight_controller/pixhawk_series.html"}},[e._v("Pixhawk-series")]),e._v(" controllers include an "),o("em",[e._v("internal")]),e._v(" compass.\nThis "),o("em",[e._v("may")]),e._v(" be useful on larger vehicles (e.g. VTOL) where it is possible to reduce electromagnetic interference by mounting the Pixhawk a long way from power supply lines.\nOn small vehicles an external compass is almost always required.")],1)]),e._v(" "),o("p",[e._v('We recommend the use of an external "combined" compass/GPS module mounted as far away from the motor/ESC power supply lines as possible - typically on a pedestal or wing (for fixed-wing).')]),e._v(" "),o("p",[e._v("Common GPS/compass hardware options are listed in: "),o("RouterLink",{attrs:{to:"/en/gps_compass/"}},[e._v("GPS/Compass")]),e._v(".")],1),e._v(" "),o("p",[o("img",{attrs:{src:s(388),alt:"GPS + Compass"}})]),e._v(" "),o("h2",{attrs:{id:"airspeed"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#airspeed"}},[e._v("#")]),e._v(" Airspeed")]),e._v(" "),o("p",[e._v("Airspeed sensors are "),o("em",[e._v("highly recommended")]),e._v(" for fixed-wing and VTOL frames.")]),e._v(" "),o("p",[e._v("They are so important because the autopilot does not have other means to detect stall. For fixed-wing flight it is the airspeed that guarantees lift not ground speed!")]),e._v(" "),o("p",[o("img",{attrs:{src:s(389),alt:"Digital airspeed sensor"}})]),e._v(" "),o("p",[e._v("For more information and recommended hardware see: "),o("RouterLink",{attrs:{to:"/en/sensor/airspeed.html"}},[e._v("Airspeed Sensors")]),e._v(".")],1),e._v(" "),o("h2",{attrs:{id:"tachometer"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#tachometer"}},[e._v("#")]),e._v(" Tachometer")]),e._v(" "),o("p",[e._v("Tachometers ("),o("a",{attrs:{href:"https://en.wikipedia.org/wiki/Tachometer#In_automobiles,_trucks,_tractors_and_aircraft",target:"_blank",rel:"noopener noreferrer"}},[e._v("revolution-counter sensors"),o("OutboundLink")],1),e._v(") are "),o("em",[e._v("highly recommended")]),e._v(" for rotor-wing frames because they allow the autopilot to detect stall or another rotor failure (for rotor-wing flight it is the rotation of blades that guarantees lift not airspeed or ground speed).")]),e._v(" "),o("p",[o("img",{attrs:{src:s(340),alt:"Digital RPM Sensor - TFRPM01A"}})]),e._v(" "),o("p",[e._v("For more information and recommended hardware see: "),o("RouterLink",{attrs:{to:"/en/sensor/tachometers.html"}},[e._v("Sensors > Tachometers")]),e._v(".")],1),e._v(" "),o("h2",{attrs:{id:"distance"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#distance"}},[e._v("#")]),e._v(" Distance")]),e._v(" "),o("p",[e._v("Distance sensors are used for precision landing, object avoidance and terrain following.")]),e._v(" "),o("p",[e._v("PX4 supports many affordable distance sensors, using different technologies, and supporting different ranges and features.\nFor more information see: "),o("RouterLink",{attrs:{to:"/en/sensor/rangefinders.html"}},[e._v("Distance Sensors")]),e._v(".")],1),e._v(" "),o("img",{attrs:{src:s(1146),title:"lidar_lite_1",width:"500px"}}),e._v(" "),o("h2",{attrs:{id:"optical-flow"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#optical-flow"}},[e._v("#")]),e._v(" Optical Flow")]),e._v(" "),o("p",[o("RouterLink",{attrs:{to:"/en/sensor/optical_flow.html"}},[e._v("Optical Flow")]),e._v(" sensors use a downward facing camera and a downward facing distance sensor for velocity estimation.\nPX4 blends the sensor output with information from other position sources (e.g. GPS) to provide a more accurate position lock.\nThis sensor can be used indoors, when no GPS signal is available.")],1),e._v(" "),o("p",[o("img",{attrs:{src:s(390),alt:"px4flow-bottom"}})]),e._v(" "),o("p",[e._v("Some options include:")]),e._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/en/sensor/px4flow.html"}},[e._v("PX4Flow")]),e._v(" based flow sensors, which have an integrated sonar sensor.")],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/en/sensor/pmw3901.html"}},[e._v("PMW3901")]),e._v("  based flow sensors, which have a sensor much like in an optical mouse trackpad.")],1)]),e._v(" "),o("p",[o("span",{attrs:{id:"wiring"}})]),e._v(" "),o("h2",{attrs:{id:"sensor-wiring"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#sensor-wiring"}},[e._v("#")]),e._v(" Sensor Wiring")]),e._v(" "),o("p",[e._v("Sensor wiring information is usually provided in manufacturer documentation for flight controllers and the sensors themselves.")]),e._v(" "),o("p",[e._v("In addition, see:")]),e._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/en/assembly/"}},[e._v("Basic Assembly")]),e._v(" contains flight controller quick start guides. These cover wiring of the core sensors to specific flight controller hardware.")],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/en/flight_controller/"}},[e._v("Flight Controller")]),e._v(" topics often contain wiring information.")],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/en/peripherals/"}},[e._v("Peripheral Hardware")]),e._v(" contains documentation for other sensors.")],1)])])}),[],!1,null,null,null);t.default=r.exports},340:function(e,t,s){e.exports=s.p+"assets/img/tfrpm01_electronics.8e8882e1.jpg"},388:function(e,t,s){e.exports=s.p+"assets/img/gps_compass.34866df8.jpg"},389:function(e,t,s){e.exports=s.p+"assets/img/digital_airspeed_sensor.43319a0e.jpg"},390:function(e,t,s){e.exports=s.p+"assets/img/px4flow_bottom.915780e0.jpg"}}]);