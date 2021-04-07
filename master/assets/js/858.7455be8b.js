(window.webpackJsonp=window.webpackJsonp||[]).push([[858],{1766:function(e,t,a){"use strict";a.r(t);var s=a(18),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"modules-reference-system"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#modules-reference-system"}},[e._v("#")]),e._v(" Modules Reference: System")]),e._v(" "),a("h2",{attrs:{id:"battery-simulator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#battery-simulator"}},[e._v("#")]),e._v(" battery_simulator")]),e._v(" "),a("p",[e._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/modules/simulator/battery_simulator",target:"_blank",rel:"noopener noreferrer"}},[e._v("modules/simulator/battery_simulator"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" Description")]),e._v(" "),a("p",[a("a",{attrs:{id:"battery_simulator_usage"}})]),e._v(" "),a("h3",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("battery_simulator <command> [arguments...]\n Commands:\n   start\n\n   stop\n\n   status        print status info\n")])])]),a("h2",{attrs:{id:"battery-status"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#battery-status"}},[e._v("#")]),e._v(" battery_status")]),e._v(" "),a("p",[e._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/modules/battery_status",target:"_blank",rel:"noopener noreferrer"}},[e._v("modules/battery_status"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"description-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description-2"}},[e._v("#")]),e._v(" Description")]),e._v(" "),a("p",[e._v("The provided functionality includes:")]),e._v(" "),a("ul",[a("li",[e._v("Read the output from the ADC driver (via ioctl interface) and publish "),a("code",[e._v("battery_status")]),e._v(".")])]),e._v(" "),a("h3",{attrs:{id:"implementation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[e._v("#")]),e._v(" Implementation")]),e._v(" "),a("p",[e._v("It runs in its own thread and polls on the currently selected gyro topic.")]),e._v(" "),a("p",[a("a",{attrs:{id:"battery_status_usage"}})]),e._v(" "),a("h3",{attrs:{id:"usage-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-2"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("battery_status <command> [arguments...]\n Commands:\n   start\n\n   stop\n\n   status        print status info\n")])])]),a("h2",{attrs:{id:"camera-feedback"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#camera-feedback"}},[e._v("#")]),e._v(" camera_feedback")]),e._v(" "),a("p",[e._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/modules/camera_feedback",target:"_blank",rel:"noopener noreferrer"}},[e._v("modules/camera_feedback"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"description-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description-3"}},[e._v("#")]),e._v(" Description")]),e._v(" "),a("p",[a("a",{attrs:{id:"camera_feedback_usage"}})]),e._v(" "),a("h3",{attrs:{id:"usage-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-3"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("camera_feedback <command> [arguments...]\n Commands:\n   start\n\n   stop\n\n   status        print status info\n")])])]),a("h2",{attrs:{id:"commander"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commander"}},[e._v("#")]),e._v(" commander")]),e._v(" "),a("p",[e._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/modules/commander",target:"_blank",rel:"noopener noreferrer"}},[e._v("modules/commander"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"description-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description-4"}},[e._v("#")]),e._v(" Description")]),e._v(" "),a("p",[e._v("The commander module contains the state machine for mode switching and failsafe behavior.")]),e._v(" "),a("p",[a("a",{attrs:{id:"commander_usage"}})]),e._v(" "),a("h3",{attrs:{id:"usage-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-4"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("commander <command> [arguments...]\n Commands:\n   start\n     [-h]        Enable HIL mode\n\n   calibrate     Run sensor calibration\n     mag|accel|gyro|level|esc|airspeed Calibration type\n     quick       Quick calibration (accel only, not recommended)\n\n   check         Run preflight checks\n\n   arm\n     [-f]        Force arming (do not run preflight checks)\n\n   disarm\n\n   takeoff\n\n   land\n\n   transition    VTOL transition\n\n   mode          Change flight mode\n     manual|acro|offboard|stabilized|altctl|posctl|auto:mission|auto:loiter|auto\n                 :rtl|auto:takeoff|auto:land|auto:precland Flight mode\n\n   pair\n\n   lockdown\n     [off]       Turn lockdown off\n\n   set_ekf_origin\n     lat, lon, alt Origin Latitude, Longitude, Altitude\n\n   lat|lon|alt   Origin latitude longitude altitude\n\n   stop\n\n   status        print status info\n")])])]),a("h2",{attrs:{id:"dataman"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dataman"}},[e._v("#")]),e._v(" dataman")]),e._v(" "),a("p",[e._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/modules/dataman",target:"_blank",rel:"noopener noreferrer"}},[e._v("modules/dataman"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"description-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description-5"}},[e._v("#")]),e._v(" Description")]),e._v(" "),a("p",[e._v("Module to provide persistent storage for the rest of the system in form of a simple database through a C API.\nMultiple backends are supported:")]),e._v(" "),a("ul",[a("li",[e._v("a file (eg. on the SD card)")]),e._v(" "),a("li",[e._v("RAM (this is obviously not persistent)")])]),e._v(" "),a("p",[e._v("It is used to store structured data of different types: mission waypoints, mission state and geofence polygons.\nEach type has a specific type and a fixed maximum amount of storage items, so that fast random access is possible.")]),e._v(" "),a("h3",{attrs:{id:"implementation-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementation-2"}},[e._v("#")]),e._v(" Implementation")]),e._v(" "),a("p",[e._v("Reading and writing a single item is always atomic. If multiple items need to be read/modified atomically, there is\nan additional lock per item type via "),a("code",[e._v("dm_lock")]),e._v(".")]),e._v(" "),a("p",[a("strong",[e._v("DM_KEY_FENCE_POINTS")]),e._v(" and "),a("strong",[e._v("DM_KEY_SAFE_POINTS")]),e._v(" items: the first data element is a "),a("code",[e._v("mission_stats_entry_s")]),e._v(" struct,\nwhich stores the number of items for these types. These items are always updated atomically in one transaction (from\nthe mavlink mission manager). During that time, navigator will try to acquire the geofence item lock, fail, and will not\ncheck for geofence violations.")]),e._v(" "),a("p",[a("a",{attrs:{id:"dataman_usage"}})]),e._v(" "),a("h3",{attrs:{id:"usage-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-5"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("dataman <command> [arguments...]\n Commands:\n   start\n     [-f <val>]  Storage file\n                 values: <file>\n     [-r]        Use RAM backend (NOT persistent)\n\n The options -f and -r are mutually exclusive. If nothing is specified, a file\n 'dataman' is used\n\n   poweronrestart Restart dataman (on power on)\n\n   inflightrestart Restart dataman (in flight)\n\n   stop\n\n   status        print status info\n")])])]),a("h2",{attrs:{id:"dmesg"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dmesg"}},[e._v("#")]),e._v(" dmesg")]),e._v(" "),a("p",[e._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/systemcmds/dmesg",target:"_blank",rel:"noopener noreferrer"}},[e._v("systemcmds/dmesg"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"description-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description-6"}},[e._v("#")]),e._v(" Description")]),e._v(" "),a("p",[e._v("Command-line tool to show bootup console messages.\nNote that output from NuttX's work queues and syslog are not captured.")]),e._v(" "),a("h3",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),a("p",[e._v("Keep printing all messages in the background:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("dmesg -f &\n")])])]),a("p",[a("a",{attrs:{id:"dmesg_usage"}})]),e._v(" "),a("h3",{attrs:{id:"usage-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-6"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("dmesg <command> [arguments...]\n Commands:\n     [-f]        Follow: wait for new messages\n")])])]),a("h2",{attrs:{id:"esc-battery"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#esc-battery"}},[e._v("#")]),e._v(" esc_battery")]),e._v(" "),a("p",[e._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/modules/esc_battery",target:"_blank",rel:"noopener noreferrer"}},[e._v("modules/esc_battery"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"description-7"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description-7"}},[e._v("#")]),e._v(" Description")]),e._v(" "),a("p",[e._v("This implements using information from the ESC status and publish it as battery status.")]),e._v(" "),a("p",[a("a",{attrs:{id:"esc_battery_usage"}})]),e._v(" "),a("h3",{attrs:{id:"usage-7"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-7"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("esc_battery <command> [arguments...]\n Commands:\n   start\n\n   stop\n\n   status        print status info\n")])])]),a("h2",{attrs:{id:"gyro-calibration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gyro-calibration"}},[e._v("#")]),e._v(" gyro_calibration")]),e._v(" "),a("p",[e._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/modules/gyro_calibration",target:"_blank",rel:"noopener noreferrer"}},[e._v("modules/gyro_calibration"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"description-8"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description-8"}},[e._v("#")]),e._v(" Description")]),e._v(" "),a("p",[e._v("Simple online gyroscope calibration.")]),e._v(" "),a("p",[a("a",{attrs:{id:"gyro_calibration_usage"}})]),e._v(" "),a("h3",{attrs:{id:"usage-8"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-8"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("gyro_calibration <command> [arguments...]\n Commands:\n   start\n\n   stop\n\n   status        print status info\n")])])]),a("h2",{attrs:{id:"gyro-fft"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gyro-fft"}},[e._v("#")]),e._v(" gyro_fft")]),e._v(" "),a("p",[e._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/modules/gyro_fft",target:"_blank",rel:"noopener noreferrer"}},[e._v("modules/gyro_fft"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"description-9"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description-9"}},[e._v("#")]),e._v(" Description")]),e._v(" "),a("p",[a("a",{attrs:{id:"gyro_fft_usage"}})]),e._v(" "),a("h3",{attrs:{id:"usage-9"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-9"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("gyro_fft <command> [arguments...]\n Commands:\n   start\n\n   stop\n\n   status        print status info\n")])])]),a("h2",{attrs:{id:"heater"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#heater"}},[e._v("#")]),e._v(" heater")]),e._v(" "),a("p",[e._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/drivers/heater",target:"_blank",rel:"noopener noreferrer"}},[e._v("drivers/heater"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"description-10"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description-10"}},[e._v("#")]),e._v(" Description")]),e._v(" "),a("p",[e._v("Background process running periodically on the LP work queue to regulate IMU temperature at a setpoint.")]),e._v(" "),a("p",[e._v("This task can be started at boot from the startup scripts by setting SENS_EN_THERMAL or via CLI.")]),e._v(" "),a("p",[a("a",{attrs:{id:"heater_usage"}})]),e._v(" "),a("h3",{attrs:{id:"usage-10"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-10"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("heater <command> [arguments...]\n Commands:\n   start\n\n   stop\n\n   status        print status info\n")])])]),a("h2",{attrs:{id:"land-detector"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#land-detector"}},[e._v("#")]),e._v(" land_detector")]),e._v(" "),a("p",[e._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/modules/land_detector",target:"_blank",rel:"noopener noreferrer"}},[e._v("modules/land_detector"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"description-11"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description-11"}},[e._v("#")]),e._v(" Description")]),e._v(" "),a("p",[e._v("Module to detect the freefall and landed state of the vehicle, and publishing the "),a("code",[e._v("vehicle_land_detected")]),e._v(" topic.\nEach vehicle type (multirotor, fixedwing, vtol, ...) provides its own algorithm, taking into account various\nstates, such as commanded thrust, arming state and vehicle motion.")]),e._v(" "),a("h3",{attrs:{id:"implementation-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementation-3"}},[e._v("#")]),e._v(" Implementation")]),e._v(" "),a("p",[e._v("Every type is implemented in its own class with a common base class. The base class maintains a state (landed,\nmaybe_landed, ground_contact). Each possible state is implemented in the derived classes. A hysteresis and a fixed\npriority of each internal state determines the actual land_detector state.")]),e._v(" "),a("h4",{attrs:{id:"multicopter-land-detector"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multicopter-land-detector"}},[e._v("#")]),e._v(" Multicopter Land Detector")]),e._v(" "),a("p",[a("strong",[e._v("ground_contact")]),e._v(": thrust setpoint and velocity in z-direction must be below a defined threshold for time\nGROUND_CONTACT_TRIGGER_TIME_US. When ground_contact is detected, the position controller turns off the thrust setpoint\nin body x and y.")]),e._v(" "),a("p",[a("strong",[e._v("maybe_landed")]),e._v(": it requires ground_contact together with a tighter thrust setpoint threshold and no velocity in the\nhorizontal direction. The trigger time is defined by MAYBE_LAND_TRIGGER_TIME. When maybe_landed is detected, the\nposition controller sets the thrust setpoint to zero.")]),e._v(" "),a("p",[a("strong",[e._v("landed")]),e._v(": it requires maybe_landed to be true for time LAND_DETECTOR_TRIGGER_TIME_US.")]),e._v(" "),a("p",[e._v("The module runs periodically on the HP work queue.")]),e._v(" "),a("p",[a("a",{attrs:{id:"land_detector_usage"}})]),e._v(" "),a("h3",{attrs:{id:"usage-11"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-11"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("land_detector <command> [arguments...]\n Commands:\n   start         Start the background task\n     fixedwing|multicopter|vtol|rover|airship Select vehicle type\n\n   stop\n\n   status        print status info\n")])])]),a("h2",{attrs:{id:"load-mon"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#load-mon"}},[e._v("#")]),e._v(" load_mon")]),e._v(" "),a("p",[e._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/modules/load_mon",target:"_blank",rel:"noopener noreferrer"}},[e._v("modules/load_mon"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"description-12"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description-12"}},[e._v("#")]),e._v(" Description")]),e._v(" "),a("p",[e._v("Background process running periodically on the low priority work queue to calculate the CPU load and RAM\nusage and publish the "),a("code",[e._v("cpuload")]),e._v(" topic.")]),e._v(" "),a("p",[e._v("On NuttX it also checks the stack usage of each process and if it falls below 300 bytes, a warning is output,\nwhich will also appear in the log file.")]),e._v(" "),a("p",[a("a",{attrs:{id:"load_mon_usage"}})]),e._v(" "),a("h3",{attrs:{id:"usage-12"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-12"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("load_mon <command> [arguments...]\n Commands:\n   start         Start the background task\n\n   stop\n\n   status        print status info\n")])])]),a("h2",{attrs:{id:"logger"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#logger"}},[e._v("#")]),e._v(" logger")]),e._v(" "),a("p",[e._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/modules/logger",target:"_blank",rel:"noopener noreferrer"}},[e._v("modules/logger"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"description-13"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description-13"}},[e._v("#")]),e._v(" Description")]),e._v(" "),a("p",[e._v("System logger which logs a configurable set of uORB topics and system printf messages\n("),a("code",[e._v("PX4_WARN")]),e._v(" and "),a("code",[e._v("PX4_ERR")]),e._v(") to ULog files. These can be used for system and flight performance evaluation,\ntuning, replay and crash analysis.")]),e._v(" "),a("p",[e._v("It supports 2 backends:")]),e._v(" "),a("ul",[a("li",[e._v("Files: write ULog files to the file system (SD card)")]),e._v(" "),a("li",[e._v("MAVLink: stream ULog data via MAVLink to a client (the client must support this)")])]),e._v(" "),a("p",[e._v("Both backends can be enabled and used at the same time.")]),e._v(" "),a("p",[e._v("The file backend supports 2 types of log files: full (the normal log) and a mission\nlog. The mission log is a reduced ulog file and can be used for example for geotagging or\nvehicle management. It can be enabled and configured via SDLOG_MISSION parameter.\nThe normal log is always a superset of the mission log.")]),e._v(" "),a("h3",{attrs:{id:"implementation-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementation-4"}},[e._v("#")]),e._v(" Implementation")]),e._v(" "),a("p",[e._v("The implementation uses two threads:")]),e._v(" "),a("ul",[a("li",[e._v("The main thread, running at a fixed rate (or polling on a topic if started with -p) and checking for\ndata updates")]),e._v(" "),a("li",[e._v("The writer thread, writing data to the file")])]),e._v(" "),a("p",[e._v("In between there is a write buffer with configurable size (and another fixed-size buffer for\nthe mission log). It should be large to avoid dropouts.")]),e._v(" "),a("h3",{attrs:{id:"examples-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples-2"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),a("p",[e._v("Typical usage to start logging immediately:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("logger start -e -t\n")])])]),a("p",[e._v("Or if already running:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("logger on\n")])])]),a("p",[a("a",{attrs:{id:"logger_usage"}})]),e._v(" "),a("h3",{attrs:{id:"usage-13"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-13"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("logger <command> [arguments...]\n Commands:\n   start\n     [-m <val>]  Backend mode\n                 values: file|mavlink|all, default: all\n     [-x]        Enable/disable logging via Aux1 RC channel\n     [-e]        Enable logging right after start until disarm (otherwise only\n                 when armed)\n     [-f]        Log until shutdown (implies -e)\n     [-t]        Use date/time for naming log directories and files\n     [-r <val>]  Log rate in Hz, 0 means unlimited rate\n                 default: 280\n     [-b <val>]  Log buffer size in KiB\n                 default: 12\n     [-p <val>]  Poll on a topic instead of running with fixed rate (Log rate\n                 and topic intervals are ignored if this is set)\n                 values: <topic_name>\n\n   on            start logging now, override arming (logger must be running)\n\n   off           stop logging now, override arming (logger must be running)\n\n   stop\n\n   status        print status info\n")])])]),a("h2",{attrs:{id:"netman"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#netman"}},[e._v("#")]),e._v(" netman")]),e._v(" "),a("p",[e._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/systemcmds/netman",target:"_blank",rel:"noopener noreferrer"}},[e._v("systemcmds/netman"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"description-14"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description-14"}},[e._v("#")]),e._v(" Description")]),e._v(" "),a("p",[e._v("Network configuration manager saves the network settings in non-volatile\nmemory. On boot the "),a("code",[e._v("update")]),e._v(" option will be run. If a network configuration\ndoes not exist. The default setting will be saved in non-volatile and the\nsystem rebooted.\nOn Subsequent boots, the "),a("code",[e._v("update")]),e._v(" option will check for the existence of\n"),a("code",[e._v("net.cfg")]),e._v(" in the root of the SD Card.  It will saves the network settings\nfrom "),a("code",[e._v("net.cfg")]),e._v(" in non-volatile memory, delete the file and reboot the system.")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("save")]),e._v(" option will "),a("code",[e._v("net.cfg")]),e._v(" on the SD Card. Use this to edit the settings.\nThe  "),a("code",[e._v("show")]),e._v(" option will display the network settings  to the console.")]),e._v(" "),a("h3",{attrs:{id:"examples-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples-3"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),a("p",[e._v("$ netman save           # Save the parameters to the SD card.\n$ netman show           # display current settings.\n$ netman update -i eth0 # do an update")]),e._v(" "),a("p",[a("a",{attrs:{id:"netman_usage"}})]),e._v(" "),a("h3",{attrs:{id:"usage-14"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-14"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("netman <command> [arguments...]\n Commands:\n   show          Display the current persistent network settings to the console.\n\n   update        Check SD card for net.cfg and update network persistent network\n                 settings.\n\n   save          Save the current network parameters to the SD card.\n     [-i <val>]  Set the interface name\n                 default: eth0\n")])])]),a("h2",{attrs:{id:"pwm-input"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pwm-input"}},[e._v("#")]),e._v(" pwm_input")]),e._v(" "),a("p",[e._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/drivers/pwm_input",target:"_blank",rel:"noopener noreferrer"}},[e._v("drivers/pwm_input"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"description-15"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description-15"}},[e._v("#")]),e._v(" Description")]),e._v(" "),a("p",[e._v("Measures the PWM input on AUX5 (or MAIN5) via a timer capture ISR and publishes via the uORB 'pwm_input` message.")]),e._v(" "),a("p",[a("a",{attrs:{id:"pwm_input_usage"}})]),e._v(" "),a("h3",{attrs:{id:"usage-15"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-15"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("pwm_input <command> [arguments...]\n Commands:\n   start\n\n   test          prints PWM capture info.\n\n   stop\n\n   status        print status info\n")])])]),a("h2",{attrs:{id:"rc-update"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rc-update"}},[e._v("#")]),e._v(" rc_update")]),e._v(" "),a("p",[e._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/modules/rc_update",target:"_blank",rel:"noopener noreferrer"}},[e._v("modules/rc_update"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"description-16"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description-16"}},[e._v("#")]),e._v(" Description")]),e._v(" "),a("p",[e._v("The rc_update module handles RC channel mapping: read the raw input channels ("),a("code",[e._v("input_rc")]),e._v("),\nthen apply the calibration, map the RC channels to the configured channels & mode switches\nand then publish as "),a("code",[e._v("rc_channels")]),e._v(" and "),a("code",[e._v("manual_control_setpoint")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"implementation-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementation-5"}},[e._v("#")]),e._v(" Implementation")]),e._v(" "),a("p",[e._v("To reduce control latency, the module is scheduled on input_rc publications.")]),e._v(" "),a("p",[a("a",{attrs:{id:"rc_update_usage"}})]),e._v(" "),a("h3",{attrs:{id:"usage-16"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-16"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("rc_update <command> [arguments...]\n Commands:\n   start\n\n   stop\n\n   status        print status info\n")])])]),a("h2",{attrs:{id:"replay"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#replay"}},[e._v("#")]),e._v(" replay")]),e._v(" "),a("p",[e._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/modules/replay",target:"_blank",rel:"noopener noreferrer"}},[e._v("modules/replay"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"description-17"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description-17"}},[e._v("#")]),e._v(" Description")]),e._v(" "),a("p",[e._v("This module is used to replay ULog files.")]),e._v(" "),a("p",[e._v("There are 2 environment variables used for configuration: "),a("code",[e._v("replay")]),e._v(", which must be set to an ULog file name - it's\nthe log file to be replayed. The second is the mode, specified via "),a("code",[e._v("replay_mode")]),e._v(":")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("replay_mode=ekf2")]),e._v(": specific EKF2 replay mode. It can only be used with the ekf2 module, but allows the replay\nto run as fast as possible.")]),e._v(" "),a("li",[e._v("Generic otherwise: this can be used to replay any module(s), but the replay will be done with the same speed as the\nlog was recorded.")])]),e._v(" "),a("p",[e._v("The module is typically used together with uORB publisher rules, to specify which messages should be replayed.\nThe replay module will just publish all messages that are found in the log. It also applies the parameters from\nthe log.")]),e._v(" "),a("p",[e._v("The replay procedure is documented on the "),a("a",{attrs:{href:"https://dev.px4.io/master/en/debug/system_wide_replay.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("System-wide Replay"),a("OutboundLink")],1),e._v("\npage.")]),e._v(" "),a("p",[a("a",{attrs:{id:"replay_usage"}})]),e._v(" "),a("h3",{attrs:{id:"usage-17"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-17"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("replay <command> [arguments...]\n Commands:\n   start         Start replay, using log file from ENV variable 'replay'\n\n   trystart      Same as 'start', but silently exit if no log file given\n\n   tryapplyparams Try to apply the parameters from the log file\n\n   stop\n\n   status        print status info\n")])])]),a("h2",{attrs:{id:"send-event"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#send-event"}},[e._v("#")]),e._v(" send_event")]),e._v(" "),a("p",[e._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/modules/events",target:"_blank",rel:"noopener noreferrer"}},[e._v("modules/events"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"description-18"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description-18"}},[e._v("#")]),e._v(" Description")]),e._v(" "),a("p",[e._v("Background process running periodically on the LP work queue to perform housekeeping tasks.\nIt is currently only responsible for tone alarm on RC Loss.")]),e._v(" "),a("p",[e._v("The tasks can be started via CLI or uORB topics (vehicle_command from MAVLink, etc.).")]),e._v(" "),a("p",[a("a",{attrs:{id:"send_event_usage"}})]),e._v(" "),a("h3",{attrs:{id:"usage-18"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-18"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("send_event <command> [arguments...]\n Commands:\n   start         Start the background task\n\n   stop\n\n   status        print status info\n")])])]),a("h2",{attrs:{id:"sensors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sensors"}},[e._v("#")]),e._v(" sensors")]),e._v(" "),a("p",[e._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/modules/sensors",target:"_blank",rel:"noopener noreferrer"}},[e._v("modules/sensors"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"description-19"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description-19"}},[e._v("#")]),e._v(" Description")]),e._v(" "),a("p",[e._v("The sensors module is central to the whole system. It takes low-level output from drivers, turns\nit into a more usable form, and publishes it for the rest of the system.")]),e._v(" "),a("p",[e._v("The provided functionality includes:")]),e._v(" "),a("ul",[a("li",[e._v("Read the output from the sensor drivers ("),a("code",[e._v("sensor_gyro")]),e._v(", etc.).\nIf there are multiple of the same type, do voting and failover handling.\nThen apply the board rotation and temperature calibration (if enabled). And finally publish the data; one of the\ntopics is "),a("code",[e._v("sensor_combined")]),e._v(", used by many parts of the system.")]),e._v(" "),a("li",[e._v("Make sure the sensor drivers get the updated calibration parameters (scale & offset) when the parameters change or\non startup. The sensor drivers use the ioctl interface for parameter updates. For this to work properly, the\nsensor drivers must already be running when "),a("code",[e._v("sensors")]),e._v(" is started.")]),e._v(" "),a("li",[e._v("Do sensor consistency checks and publish the "),a("code",[e._v("sensors_status_imu")]),e._v(" topic.")])]),e._v(" "),a("h3",{attrs:{id:"implementation-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementation-6"}},[e._v("#")]),e._v(" Implementation")]),e._v(" "),a("p",[e._v("It runs in its own thread and polls on the currently selected gyro topic.")]),e._v(" "),a("p",[a("a",{attrs:{id:"sensors_usage"}})]),e._v(" "),a("h3",{attrs:{id:"usage-19"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-19"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sensors <command> [arguments...]\n Commands:\n   start\n     [-h]        Start in HIL mode\n\n   stop\n\n   status        print status info\n")])])]),a("h2",{attrs:{id:"temperature-compensation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#temperature-compensation"}},[e._v("#")]),e._v(" temperature_compensation")]),e._v(" "),a("p",[e._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/modules/temperature_compensation",target:"_blank",rel:"noopener noreferrer"}},[e._v("modules/temperature_compensation"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"description-20"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description-20"}},[e._v("#")]),e._v(" Description")]),e._v(" "),a("p",[e._v("The temperature compensation module allows all of the gyro(s), accel(s), and baro(s) in the system to be temperature\ncompensated. The module monitors the data coming from the sensors and updates the associated sensor_correction topic\nwhenever a change in temperature is detected. The module can also be configured to perform the coeffecient calculation\nroutine at next boot, which allows the thermal calibration coeffecients to be calculated while the vehicle undergoes\na temperature cycle.")]),e._v(" "),a("p",[a("a",{attrs:{id:"temperature_compensation_usage"}})]),e._v(" "),a("h3",{attrs:{id:"usage-20"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-20"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("temperature_compensation <command> [arguments...]\n Commands:\n   start         Start the module, which monitors the sensors and updates the\n                 sensor_correction topic\n\n   calibrate     Run temperature calibration process\n     [-g]        calibrate the gyro\n     [-a]        calibrate the accel\n     [-b]        calibrate the baro (if none of these is given, all will be\n                 calibrated)\n\n   stop\n\n   status        print status info\n")])])]),a("h2",{attrs:{id:"tune-control"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tune-control"}},[e._v("#")]),e._v(" tune_control")]),e._v(" "),a("p",[e._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/systemcmds/tune_control",target:"_blank",rel:"noopener noreferrer"}},[e._v("systemcmds/tune_control"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"description-21"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description-21"}},[e._v("#")]),e._v(" Description")]),e._v(" "),a("p",[e._v("Command-line tool to control & test the (external) tunes.")]),e._v(" "),a("p",[e._v("Tunes are used to provide audible notification and warnings (e.g. when the system arms, gets position lock, etc.).\nThe tool requires that a driver is running that can handle the tune_control uorb topic.")]),e._v(" "),a("p",[e._v("Information about the tune format and predefined system tunes can be found here:\nhttps://github.com/PX4/Firmware/blob/master/src/lib/tunes/tune_definition.desc")]),e._v(" "),a("h3",{attrs:{id:"examples-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples-4"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),a("p",[e._v("Play system tune #2:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("tune_control play -t 2\n")])])]),a("p",[a("a",{attrs:{id:"tune_control_usage"}})]),e._v(" "),a("h3",{attrs:{id:"usage-21"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-21"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('tune_control <command> [arguments...]\n Commands:\n   play          Play system tune or single note.\n     error       Play error tune\n     [-t <val>]  Play predefined system tune\n                 default: 1\n     [-f <val>]  Frequency of note in Hz (0-22kHz)\n     [-d <val>]  Duration of note in us\n     [-s <val>]  Volume level (loudness) of the note (0-100)\n                 default: 40\n     [-m <val>]  Melody in string form\n                 values: <string> - e.g. "MFT200e8a8a"\n\n   libtest       Test library\n\n   stop          Stop playback (use for repeated tunes)\n')])])]),a("h2",{attrs:{id:"work-queue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#work-queue"}},[e._v("#")]),e._v(" work_queue")]),e._v(" "),a("p",[e._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/systemcmds/work_queue",target:"_blank",rel:"noopener noreferrer"}},[e._v("systemcmds/work_queue"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"description-22"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description-22"}},[e._v("#")]),e._v(" Description")]),e._v(" "),a("p",[e._v("Command-line tool to show work queue status.")]),e._v(" "),a("p",[a("a",{attrs:{id:"work_queue_usage"}})]),e._v(" "),a("h3",{attrs:{id:"usage-22"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-22"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("work_queue <command> [arguments...]\n Commands:\n   start\n\n   stop\n\n   status        print status info\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);