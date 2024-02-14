(window.webpackJsonp=window.webpackJsonp||[]).push([[1178],{2427:function(e,t,a){"use strict";a.r(t);var i=a(19),n=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"system-failure-injection"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#system-failure-injection"}},[e._v("#")]),e._v(" System Failure Injection")]),e._v(" "),a("p",[e._v("System failure injection allows you to induce different types of sensor and system failures, either programmatically using the "),a("a",{attrs:{href:"https://mavsdk.mavlink.io/main/en/cpp/api_reference/classmavsdk_1_1_failure.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAVSDK failure plugin"),a("OutboundLink")],1),e._v(', or "manually" via a PX4 console like the '),a("RouterLink",{attrs:{to:"/zh/debug/mavlink_shell.html#mavlink-shell"}},[e._v("MAVLink shell")]),e._v(". This enables easier testing of "),a("RouterLink",{attrs:{to:"/zh/config/safety.html#safety-configuration-failsafes"}},[e._v("safety failsafe")]),e._v(" behaviour, and more generally, of how PX4 behaves when systems and sensors stop working correctly.")],1),e._v(" "),a("p",[e._v("Failure injection is disabled by default, and can be enabled using the "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SYS_FAILURE_EN"}},[e._v("SYS_FAILURE_EN")]),e._v(" parameter.")],1),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("注意")]),e._v(" "),a("p",[e._v("Failure injection still in development. At time of writing (PX4 v1.12):")]),e._v(" "),a("ul",[a("li",[e._v("It can only be used in simulation (support for both failure injection in real flight is planned).")]),e._v(" "),a("li",[e._v('Many failure types are not broadly implemented. In those cases the command will return with an "unsupported" message.')])])]),e._v(" "),a("h2",{attrs:{id:"failure-system-command"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#failure-system-command"}},[e._v("#")]),e._v(" Failure System Command")]),e._v(" "),a("p",[e._v("Failures can be injected using the "),a("RouterLink",{attrs:{to:"/zh/modules/modules_command.html#failure"}},[e._v("failure system command")]),e._v(" from any PX4 console/shell, specifying both the target and type of the failure.")],1),e._v(" "),a("h3",{attrs:{id:"syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[e._v("#")]),e._v(" Syntax")]),e._v(" "),a("p",[e._v("The full syntax of the "),a("RouterLink",{attrs:{to:"/zh/modules/modules_command.html#failure"}},[e._v("failure")]),e._v(" command is:")],1),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("failure <component> <failure_type> [-i <instance_number>]\n")])])]),a("p",[e._v("where:")]),e._v(" "),a("ul",[a("li",[a("em",[e._v("component")]),e._v(":\n"),a("ul",[a("li",[e._v("Sensors:\n"),a("ul",[a("li",[a("code",[e._v("gyro")]),e._v(": Gyro.")]),e._v(" "),a("li",[a("code",[e._v("accel")]),e._v(": Accelerometer.")]),e._v(" "),a("li",[a("code",[e._v("mag")]),e._v(": Magnetometer")]),e._v(" "),a("li",[a("code",[e._v("baro")]),e._v(": Barometer")]),e._v(" "),a("li",[a("code",[e._v("gps")]),e._v(": GPS")]),e._v(" "),a("li",[a("code",[e._v("optical_flow")]),e._v(": Optical flow.")]),e._v(" "),a("li",[a("code",[e._v("vio")]),e._v(": Visual inertial odometry.")]),e._v(" "),a("li",[a("code",[e._v("distance_sensor")]),e._v(": Distance sensor (rangefinder).")]),e._v(" "),a("li",[a("code",[e._v("airspeed")]),e._v(": Airspeed sensor.")])])]),e._v(" "),a("li",[e._v("Systems:\n"),a("ul",[a("li",[a("code",[e._v("battery")]),e._v(": Battery.")]),e._v(" "),a("li",[a("code",[e._v("motor")]),e._v(": Motor.")]),e._v(" "),a("li",[a("code",[e._v("servo")]),e._v(": Servo.")]),e._v(" "),a("li",[a("code",[e._v("avoidance")]),e._v(": Avoidance.")]),e._v(" "),a("li",[a("code",[e._v("rc_signal")]),e._v(": RC Signal.")]),e._v(" "),a("li",[a("code",[e._v("mavlink_signal")]),e._v(": MAVLink signal (data telemetry).")])])])])]),e._v(" "),a("li",[a("em",[e._v("failure_type")]),e._v(":\n"),a("ul",[a("li",[a("code",[e._v("ok")]),e._v(": Publish as normal (Disable failure injection).")]),e._v(" "),a("li",[a("code",[e._v("off")]),e._v(": Stop publishing.")]),e._v(" "),a("li",[a("code",[e._v("stuck")]),e._v(": Report same value every time ("),a("em",[e._v("could")]),e._v(" indicate a malfunctioning sensor).")]),e._v(" "),a("li",[a("code",[e._v("garbage")]),e._v(": Publish random noise. This looks like reading uninitialized memory.")]),e._v(" "),a("li",[a("code",[e._v("wrong")]),e._v(': Publish invalid values (that still look reasonable/aren\'t "garbage").')]),e._v(" "),a("li",[a("code",[e._v("slow")]),e._v(": Publish at a reduced rate.")]),e._v(" "),a("li",[a("code",[e._v("delayed")]),e._v(": Publish valid data with a significant delay.")]),e._v(" "),a("li",[a("code",[e._v("intermittent")]),e._v(": Publish intermittently.")])])]),e._v(" "),a("li",[a("em",[e._v("instance number")]),e._v(" (optional): Instance number of affected sensor. 0 (default) indicates all sensors of specified type.")])]),e._v(" "),a("h3",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" Example")]),e._v(" "),a("p",[e._v("To simulate losing RC signal without having to turn off your RC controller:")]),e._v(" "),a("ol",[a("li",[e._v("Enable the parameter "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SYS_FAILURE_EN"}},[e._v("SYS_FAILURE_EN")]),e._v(".")],1),e._v(" "),a("li",[e._v("Enter the following commands on the MAVLink console or SITL "),a("em",[e._v("pxh shell")]),e._v(":"),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Fail RC (turn publishing off)")]),e._v("\nfailure rc_signal off\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Restart RC publishing")]),e._v("\nfailure rc_signal ok\n")])])])])]),e._v(" "),a("h2",{attrs:{id:"mavsdk-failure-plugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mavsdk-failure-plugin"}},[e._v("#")]),e._v(" MAVSDK Failure Plugin")]),e._v(" "),a("p",[e._v("The "),a("a",{attrs:{href:"https://mavsdk.mavlink.io/main/en/cpp/api_reference/classmavsdk_1_1_failure.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("MAVSDK failure plugin"),a("OutboundLink")],1),e._v(" can be used to programmatically inject failures. It is used in "),a("RouterLink",{attrs:{to:"/zh/test_and_ci/integration_testing_mavsdk.html"}},[e._v("PX4 Integration Testing")]),e._v(" to simulate failure cases (for example, see "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/test/mavsdk_tests/autopilot_tester.cpp",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4-Autopilot/test/mavsdk_tests/autopilot_tester.cpp"),a("OutboundLink")],1),e._v(").")],1),e._v(" "),a("p",[e._v("The plugin API is a direct mapping of the failure command shown above, with a few additional error signals related to the connection.")])])}),[],!1,null,null,null);t.default=n.exports}}]);