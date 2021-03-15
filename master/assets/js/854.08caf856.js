(window.webpackJsonp=window.webpackJsonp||[]).push([[854],{1741:function(t,n,a){"use strict";a.r(n);var s=a(18),e=Object(s.a)({},(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"payloads-and-cameras"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#payloads-and-cameras"}},[t._v("#")]),t._v(" Payloads and Cameras")]),t._v(" "),a("p",[t._v("PX4 supports a wide range of payloads and cameras.")]),t._v(" "),a("h2",{attrs:{id:"mapping-drones"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mapping-drones"}},[t._v("#")]),t._v(" Mapping Drones")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/en/peripherals/camera.html"}},[t._v("Camera triggering")]),t._v(" via GPIO out")],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/en/peripherals/camera.html"}},[t._v("Camera triggering")]),t._v(" via PWM out")],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/en/peripherals/camera.html"}},[t._v("Camera triggering")]),t._v(" via MAVLink out")],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/en/peripherals/camera.html#camera_capture"}},[t._v("Camera timing")]),t._v(" feedback via hotshoe input")],1)]),t._v(" "),a("h2",{attrs:{id:"cargo-drones-and-alike-servos-outputs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cargo-drones-and-alike-servos-outputs"}},[t._v("#")]),t._v(" Cargo drones and alike: Servos / Outputs")]),t._v(" "),a("ul",[a("li",[t._v("Servo or GPIO triggering (via RC or via commands)")])]),t._v(" "),a("h3",{attrs:{id:"example-mission-in-qgc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-mission-in-qgc"}},[t._v("#")]),t._v(" Example Mission (in QGC)")]),t._v(" "),a("p",[t._v("Use MAV_CMD_DO_SET_ACTUATOR to trigger one of the payload actuators.")]),t._v(" "),a("h3",{attrs:{id:"example-script-mavsdk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-script-mavsdk"}},[t._v("#")]),t._v(" Example script (MAVSDK)")]),t._v(" "),a("p",[t._v("This script sends a command to set the actuator and trigger the payload release on a servo:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('#include <mavsdk/mavsdk.h>\n#include <mavsdk/plugins/mavlink_passthrough/mavlink_passthrough.h>\n#include <mavsdk/plugins/info/info.h>\n#include <chrono>\n#include <cstdint>\n#include <iostream>\n#include <future>\n#include <memory>\n\nusing namespace mavsdk;\n\nvoid send_actuator(MavlinkPassthrough& mavlink_passthrough,\n        float value1, float value2, float value3);\n\nint main(int argc, char **argv)\n{\n    Mavsdk mavsdk;\n    std::string connection_url;\n    ConnectionResult connection_result;\n    float value1, value2, value3;\n\n    if (argc == 5) {\n        connection_url = argv[1];\n        connection_result = mavsdk.add_any_connection(connection_url);\n        value1 = std::stof(argv[2]);\n        value2 = std::stof(argv[3]);\n        value3 = std::stof(argv[4]);\n    } \n\n    if (connection_result != ConnectionResult::Success) {\n        std::cout << "Connection failed: " << connection_result << std::endl;\n        return 1;\n    }\n\n\tbool discovered_system = false;\n    mavsdk.subscribe_on_new_system([&mavsdk, &discovered_system]() {\n\t\tconst auto system = mavsdk.systems().at(0);\n\n\t\tif (system->is_connected()) {\n\t\t\tstd::cout << "Discovered system" << std::endl;\n\t\t\tdiscovered_system = true;\n\t\t}\n\t});\n\n\tstd::this_thread::sleep_for(std::chrono::seconds(2));\n\n\tif (!discovered_system) {\n        std::cout << "No device found, exiting." << std::endl;\n        return 1;\n    }\n\n\tstd::shared_ptr<System> system = mavsdk.systems().at(0);\n\tfor (auto& tsystem : mavsdk.systems()) {\n\t\tauto info = Info{tsystem};\n\t\tstd::cout << info.get_identification().second.hardware_uid << std::endl;\n\t\tif (info.get_identification().second.hardware_uid == "3762846593019032885") {\n\t\t\tsystem = tsystem;\n\t\t}\n\t}\n\n\tauto mavlink_passthrough = MavlinkPassthrough{system};\n\n\tsend_actuator(mavlink_passthrough, value1, value2, value3);\n\n    return 0;\n}\n\nvoid send_actuator(MavlinkPassthrough& mavlink_passthrough,\n\t\tfloat value1, float value2, float value3)\n{\n\tstd::cout << "Sending message" << std::endl;\n\tmavlink_message_t message;\n\tmavlink_msg_command_long_pack(\n\t\t\tmavlink_passthrough.get_our_sysid(),\n\t\t\tmavlink_passthrough.get_our_compid(),\n\t\t\t&message,\n\t\t\t1, 1,\n\t\t\tMAV_CMD_DO_SET_ACTUATOR,\n\t\t\t0,\n\t\t\tvalue1, value2, value3,\n\t\t\tNAN, NAN, NAN, 0);\n\tmavlink_passthrough.send_message(message);\n\tstd::cout << "Sent message" << std::endl;\n}\n')])])])])}),[],!1,null,null,null);n.default=e.exports}}]);