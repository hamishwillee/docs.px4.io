(window.webpackJsonp=window.webpackJsonp||[]).push([[1053],{2186:function(t,e,a){"use strict";a.r(e);var s=a(19),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"modules-reference-system"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#modules-reference-system"}},[t._v("#")]),t._v(" Modules Reference: System")]),t._v(" "),a("h2",{attrs:{id:"battery-simulator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#battery-simulator"}},[t._v("#")]),t._v(" battery_simulator")]),t._v(" "),a("p",[t._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/modules/simulator/battery_simulator",target:"_blank",rel:"noopener noreferrer"}},[t._v("modules/simulator/battery_simulator"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),a("p",[a("a",{attrs:{id:"battery_simulator_usage"}})]),t._v(" "),a("h3",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("load_mon <command> [arguments...]\n Commands:\n   start         Start the background task\n\n   stop\n\n   status        print status info\n")])])]),a("h2",{attrs:{id:"battery-status"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#battery-status"}},[t._v("#")]),t._v(" battery_status")]),t._v(" "),a("p",[t._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/modules/battery_status",target:"_blank",rel:"noopener noreferrer"}},[t._v("modules/battery_status"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"description-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description-2"}},[t._v("#")]),t._v(" Description")]),t._v(" "),a("p",[t._v("The provided functionality includes:")]),t._v(" "),a("ul",[a("li",[t._v("Read the output from the ADC driver (via ioctl interface) and publish "),a("code",[t._v("battery_status")]),t._v(".")])]),t._v(" "),a("h3",{attrs:{id:"implementation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[t._v("#")]),t._v(" Implementation")]),t._v(" "),a("p",[t._v("It runs in its own thread and polls on the currently selected gyro topic.")]),t._v(" "),a("p",[a("a",{attrs:{id:"battery_status_usage"}})]),t._v(" "),a("h3",{attrs:{id:"usage-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-2"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("sensors <command> [arguments...]\n Commands:\n   start\n     [-h]        Start in HIL mode\n\n   stop\n\n   status        print status info\n")])])]),a("h2",{attrs:{id:"camera-feedback"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#camera-feedback"}},[t._v("#")]),t._v(" camera_feedback")]),t._v(" "),a("p",[t._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/modules/camera_feedback",target:"_blank",rel:"noopener noreferrer"}},[t._v("modules/camera_feedback"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"description-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description-3"}},[t._v("#")]),t._v(" Description")]),t._v(" "),a("p",[a("a",{attrs:{id:"camera_feedback_usage"}})]),t._v(" "),a("h3",{attrs:{id:"usage-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-3"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("land_detector <command> [arguments...]\n Commands:\n   start         Start the background task\n     fixedwing|multicopter|vtol|ugv Select vehicle type\n\n   stop\n\n   status        print status info\n")])])]),a("h2",{attrs:{id:"commander"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commander"}},[t._v("#")]),t._v(" commander")]),t._v(" "),a("p",[t._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/modules/commander",target:"_blank",rel:"noopener noreferrer"}},[t._v("modules/commander"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"description-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description-4"}},[t._v("#")]),t._v(" Description")]),t._v(" "),a("p",[t._v("The commander module contains the state machine for mode switching and failsafe behavior.")]),t._v(" "),a("p",[a("a",{attrs:{id:"commander_usage"}})]),t._v(" "),a("h3",{attrs:{id:"usage-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-4"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("send_event <command> [arguments...]\n Commands:\n   start         Start the background task\n\n   temperature_calibration Run temperature calibration process\n     [-g]        calibrate the gyro\n     [-a]        calibrate the accel\n     [-b]        calibrate the baro (if none of these is given, all will be\n                 calibrated)\n\n   stop\n\n   status        print status info\n")])])]),a("h2",{attrs:{id:"dataman"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dataman"}},[t._v("#")]),t._v(" dataman")]),t._v(" "),a("p",[t._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/modules/dataman",target:"_blank",rel:"noopener noreferrer"}},[t._v("modules/dataman"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"description-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description-5"}},[t._v("#")]),t._v(" Description")]),t._v(" "),a("p",[t._v("Module to provide persistent storage for the rest of the system in form of a simple database through a C API. Multiple backends are supported:")]),t._v(" "),a("ul",[a("li",[t._v("a file (eg. on the SD card)")]),t._v(" "),a("li",[t._v("RAM (this is obviously not persistent)")])]),t._v(" "),a("p",[t._v("It is used to store structured data of different types: mission waypoints, mission state and geofence polygons. Each type has a specific type and a fixed maximum amount of storage items, so that fast random access is possible.")]),t._v(" "),a("h3",{attrs:{id:"implementation-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementation-2"}},[t._v("#")]),t._v(" Implementation")]),t._v(" "),a("p",[t._v("Reading and writing a single item is always atomic. If multiple items need to be read/modified atomically, there is an additional lock per item type via "),a("code",[t._v("dm_lock")]),t._v(".")]),t._v(" "),a("p",[a("strong",[t._v("DM_KEY_FENCE_POINTS")]),t._v(" and "),a("strong",[t._v("DM_KEY_SAFE_POINTS")]),t._v(" items: the first data element is a "),a("code",[t._v("mission_stats_entry_s")]),t._v(" struct, which stores the number of items for these types. These items are always updated atomically in one transaction (from the mavlink mission manager). During that time, navigator will try to acquire the geofence item lock, fail, and will not check for geofence violations.")]),t._v(" "),a("p",[a("a",{attrs:{id:"dataman_usage"}})]),t._v(" "),a("h3",{attrs:{id:"usage-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-5"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("dataman <command> [arguments...]\n Commands:\n   start\n     [-f <val>]  Storage file\n                 values: <file>\n     [-r]        Use RAM backend (NOT persistent)\n\n The options -f and -r are mutually exclusive. If nothing is specified, a file\n 'dataman' is used\n\n   poweronrestart Restart dataman (on power on)\n\n   inflightrestart Restart dataman (in flight)\n\n   stop\n\n   status        print status info\n")])])]),a("h2",{attrs:{id:"dmesg"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dmesg"}},[t._v("#")]),t._v(" dmesg")]),t._v(" "),a("p",[t._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/systemcmds/dmesg",target:"_blank",rel:"noopener noreferrer"}},[t._v("systemcmds/dmesg"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"description-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description-6"}},[t._v("#")]),t._v(" Description")]),t._v(" "),a("p",[t._v("Command-line tool to show bootup console messages. Note that output from NuttX's work queues and syslog are not captured.")]),t._v(" "),a("h3",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),a("p",[t._v("Keep printing all messages in the background:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("dmesg -f &\n")])])]),a("p",[a("a",{attrs:{id:"dmesg_usage"}})]),t._v(" "),a("h3",{attrs:{id:"usage-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-6"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("dmesg <command> [arguments...]\n Commands:\n     [-f]        Follow: wait for new messages\n")])])]),a("h2",{attrs:{id:"esc-battery"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#esc-battery"}},[t._v("#")]),t._v(" esc_battery")]),t._v(" "),a("p",[t._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/modules/esc_battery",target:"_blank",rel:"noopener noreferrer"}},[t._v("modules/esc_battery"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"description-7"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description-7"}},[t._v("#")]),t._v(" Description")]),t._v(" "),a("p",[t._v("Background process running periodically with 1 Hz on the LP work queue to calculate the CPU load and RAM usage and publish the "),a("code",[t._v("cpuload")]),t._v(" topic.")]),t._v(" "),a("p",[a("a",{attrs:{id:"esc_battery_usage"}})]),t._v(" "),a("h3",{attrs:{id:"usage-7"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-7"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("replay <command> [arguments...]\n Commands:\n   start         Start replay, using log file from ENV variable 'replay'\n\n   trystart      Same as 'start', but silently exit if no log file given\n\n   tryapplyparams Try to apply the parameters from the log file\n\n   stop\n\n   status        print status info\n")])])]),a("h2",{attrs:{id:"gyro-calibration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gyro-calibration"}},[t._v("#")]),t._v(" gyro_calibration")]),t._v(" "),a("p",[t._v("On NuttX it also checks the stack usage of each process and if it falls below 300 bytes, a warning is output, which will also appear in the log file.")]),t._v(" "),a("h3",{attrs:{id:"description-8"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description-8"}},[t._v("#")]),t._v(" Description")]),t._v(" "),a("p",[t._v("Simple online gyroscope calibration.")]),t._v(" "),a("p",[a("a",{attrs:{id:"gyro_calibration_usage"}})]),t._v(" "),a("h3",{attrs:{id:"usage-8"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-8"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("gyro_calibration <command> [arguments...]\n Commands:\n   start\n\n   stop\n\n   status        print status info\n")])])]),a("h2",{attrs:{id:"gyro-fft"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gyro-fft"}},[t._v("#")]),t._v(" gyro_fft")]),t._v(" "),a("p",[t._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/modules/gyro_fft",target:"_blank",rel:"noopener noreferrer"}},[t._v("modules/gyro_fft"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"description-9"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description-9"}},[t._v("#")]),t._v(" Description")]),t._v(" "),a("p",[a("a",{attrs:{id:"gyro_fft_usage"}})]),t._v(" "),a("h3",{attrs:{id:"usage-9"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-9"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("gyro_fft <command> [arguments...]\n Commands:\n   start\n\n   stop\n\n   status        print status info\n")])])]),a("h2",{attrs:{id:"heater"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#heater"}},[t._v("#")]),t._v(" heater")]),t._v(" "),a("p",[t._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/drivers/heater",target:"_blank",rel:"noopener noreferrer"}},[t._v("drivers/heater"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"description-10"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description-10"}},[t._v("#")]),t._v(" Description")]),t._v(" "),a("p",[t._v("Background process running periodically on the LP work queue to regulate IMU temperature at a setpoint.")]),t._v(" "),a("p",[t._v("This task can be started at boot from the startup scripts by setting SENS_EN_THERMAL or via CLI.")]),t._v(" "),a("p",[a("a",{attrs:{id:"heater_usage"}})]),t._v(" "),a("h3",{attrs:{id:"usage-10"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-10"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("heater <command> [arguments...]\n Commands:\n   start\n\n   stop\n\n   status        print status info\n")])])]),a("h2",{attrs:{id:"land-detector"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#land-detector"}},[t._v("#")]),t._v(" land_detector")]),t._v(" "),a("p",[t._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/modules/land_detector",target:"_blank",rel:"noopener noreferrer"}},[t._v("modules/land_detector"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"description-11"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description-11"}},[t._v("#")]),t._v(" Description")]),t._v(" "),a("p",[a("strong",[t._v("ground_contact")]),t._v(": thrust setpoint and velocity in z-direction must be below a defined threshold for time GROUND_CONTACT_TRIGGER_TIME_US. When ground_contact is detected, the position controller turns off the thrust setpoint in body x and y.")]),t._v(" "),a("h3",{attrs:{id:"implementation-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementation-3"}},[t._v("#")]),t._v(" Implementation")]),t._v(" "),a("p",[a("strong",[t._v("maybe_landed")]),t._v(": it requires ground_contact together with a tighter thrust setpoint threshold and no velocity in the horizontal direction. The base class maintains a state (landed, maybe_landed, ground_contact). When maybe_landed is detected, the position controller sets the thrust setpoint to zero. A hysteresis and a fixed priority of each internal state determines the actual land_detector state.")]),t._v(" "),a("h4",{attrs:{id:"multicopter-land-detector"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multicopter-land-detector"}},[t._v("#")]),t._v(" Multicopter Land Detector")]),t._v(" "),a("p",[a("strong",[t._v("ground_contact")]),t._v(": thrust setpoint and velocity in z-direction must be below a defined threshold for time GROUND_CONTACT_TRIGGER_TIME_US. When ground_contact is detected, the position controller turns off the thrust setpoint in body x and y.")]),t._v(" "),a("p",[a("strong",[t._v("maybe_landed")]),t._v(": it requires ground_contact together with a tighter thrust setpoint threshold and no velocity in the horizontal direction. The trigger time is defined by MAYBE_LAND_TRIGGER_TIME. When maybe_landed is detected, the position controller sets the thrust setpoint to zero.")]),t._v(" "),a("p",[a("strong",[t._v("landed")]),t._v(": it requires maybe_landed to be true for time LAND_DETECTOR_TRIGGER_TIME_US.")]),t._v(" "),a("p",[t._v("The module runs periodically on the HP work queue.")]),t._v(" "),a("p",[a("a",{attrs:{id:"land_detector_usage"}})]),t._v(" "),a("h3",{attrs:{id:"usage-11"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-11"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("land_detector <command> [arguments...]\n Commands:\n   start         Start the background task\n     fixedwing|multicopter|vtol|rover|airship Select vehicle type\n\n   stop\n\n   status        print status info\n")])])]),a("h2",{attrs:{id:"load-mon"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#load-mon"}},[t._v("#")]),t._v(" load_mon")]),t._v(" "),a("p",[t._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/modules/load_mon",target:"_blank",rel:"noopener noreferrer"}},[t._v("modules/load_mon"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"description-12"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description-12"}},[t._v("#")]),t._v(" Description")]),t._v(" "),a("p",[t._v("Background process running periodically on the low priority work queue to calculate the CPU load and RAM usage and publish the "),a("code",[t._v("cpuload")]),t._v(" topic.")]),t._v(" "),a("p",[t._v("On NuttX it also checks the stack usage of each process and if it falls below 300 bytes, a warning is output, which will also appear in the log file.")]),t._v(" "),a("p",[a("a",{attrs:{id:"load_mon_usage"}})]),t._v(" "),a("h3",{attrs:{id:"usage-12"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-12"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("load_mon <command> [arguments...]\n Commands:\n   start         Start the background task\n\n   stop\n\n   status        print status info\n")])])]),a("h2",{attrs:{id:"logger"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#logger"}},[t._v("#")]),t._v(" logger")]),t._v(" "),a("p",[t._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/modules/logger",target:"_blank",rel:"noopener noreferrer"}},[t._v("modules/logger"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"description-13"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description-13"}},[t._v("#")]),t._v(" Description")]),t._v(" "),a("p",[t._v("System logger which logs a configurable set of uORB topics and system printf messages ("),a("code",[t._v("PX4_WARN")]),t._v(" and "),a("code",[t._v("PX4_ERR")]),t._v(") to ULog files. These can be used for system and flight performance evaluation, tuning, replay and crash analysis.")]),t._v(" "),a("p",[t._v("It supports 2 backends:")]),t._v(" "),a("ul",[a("li",[t._v("Files: write ULog files to the file system (SD card)")]),t._v(" "),a("li",[t._v("MAVLink: stream ULog data via MAVLink to a client (the client must support this)")])]),t._v(" "),a("p",[t._v("Both backends can be enabled and used at the same time.")]),t._v(" "),a("p",[t._v("In between there is a write buffer with configurable size (and another fixed-size buffer for the mission log). The mission log is a reduced ulog file and can be used for example for geotagging or vehicle management. It can be enabled and configured via SDLOG_MISSION parameter. The normal log is always a superset of the mission log.")]),t._v(" "),a("h3",{attrs:{id:"implementation-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementation-4"}},[t._v("#")]),t._v(" Implementation")]),t._v(" "),a("p",[t._v("The implementation uses two threads:")]),t._v(" "),a("ul",[a("li",[t._v("The main thread, running at a fixed rate (or polling on a topic if started with -p) and checking for data updates")]),t._v(" "),a("li",[t._v("The writer thread, writing data to the file")])]),t._v(" "),a("p",[t._v("In between there is a write buffer with configurable size (and another fixed-size buffer for the mission log). It should be large to avoid dropouts.")]),t._v(" "),a("h3",{attrs:{id:"examples-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples-2"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),a("p",[t._v("Typical usage to start logging immediately:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("logger start -e -t\n")])])]),a("p",[t._v("Or if already running:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("logger on\n")])])]),a("p",[a("a",{attrs:{id:"logger_usage"}})]),t._v(" "),a("h3",{attrs:{id:"usage-13"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-13"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("logger <command> [arguments...]\n Commands:\n   start\n     [-m <val>]  Backend mode\n                 values: file|mavlink|all, default: all\n     [-x]        Enable/disable logging via Aux1 RC channel\n     [-e]        Enable logging right after start until disarm (otherwise only\n                 when armed)\n     [-f]        Log until shutdown (implies -e)\n     [-t]        Use date/time for naming log directories and files\n     [-r <val>]  Log rate in Hz, 0 means unlimited rate\n                 default: 280\n     [-b <val>]  Log buffer size in KiB\n                 default: 12\n     [-p <val>]  Poll on a topic instead of running with fixed rate (Log rate\n                 and topic intervals are ignored if this is set)\n                 values: <topic_name>\n\n   on            start logging now, override arming (logger must be running)\n\n   off           stop logging now, override arming (logger must be running)\n\n   stop\n\n   status        print status info\n")])])]),a("h2",{attrs:{id:"netman"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#netman"}},[t._v("#")]),t._v(" netman")]),t._v(" "),a("p",[t._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/systemcmds/netman",target:"_blank",rel:"noopener noreferrer"}},[t._v("systemcmds/netman"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"description-network-configuration-manager-saves-the-network-settings-in-non-volatile-memory-on-boot-the-update-option-will-be-run-if-a-network-configuration-does-not-exist-the-default-setting-will-be-saved-in-non-volatile-and-the-system-rebooted-on-subsequent-boots-the-update-option-will-check-for-the-existence-of-net-cfg-in-the-root-of-the-sd-card-it-will-saves-the-network-settings-from-net-cfg-in-non-volatile-memory-delete-the-file-and-reboot-the-system"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description-network-configuration-manager-saves-the-network-settings-in-non-volatile-memory-on-boot-the-update-option-will-be-run-if-a-network-configuration-does-not-exist-the-default-setting-will-be-saved-in-non-volatile-and-the-system-rebooted-on-subsequent-boots-the-update-option-will-check-for-the-existence-of-net-cfg-in-the-root-of-the-sd-card-it-will-saves-the-network-settings-from-net-cfg-in-non-volatile-memory-delete-the-file-and-reboot-the-system"}},[t._v("#")]),t._v(" Description Network configuration manager saves the network settings in non-volatile memory. On boot the "),a("code",[t._v("update")]),t._v(" option will be run. If a network configuration does not exist. The default setting will be saved in non-volatile and the system rebooted. On Subsequent boots, the "),a("code",[t._v("update")]),t._v(" option will check for the existence of "),a("code",[t._v("net.cfg")]),t._v(" in the root of the SD Card.  It will saves the network settings from "),a("code",[t._v("net.cfg")]),t._v(" in non-volatile memory, delete the file and reboot the system.")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("save")]),t._v(" option will "),a("code",[t._v("net.cfg")]),t._v(" on the SD Card. Use this to edit the settings. The  "),a("code",[t._v("show")]),t._v(" option will display the network settings  to the console.")]),t._v(" "),a("h3",{attrs:{id:"examples-netman-save-save-the-parameters-to-the-sd-card-netman-show-display-current-settings-netman-update-i-eth0-do-an-update"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples-netman-save-save-the-parameters-to-the-sd-card-netman-show-display-current-settings-netman-update-i-eth0-do-an-update"}},[t._v("#")]),t._v(" Examples $ netman save           # Save the parameters to the SD card. $ netman show           # display current settings. $ netman update -i eth0 # do an update")]),t._v(" "),a("p",[a("a",{attrs:{id:"netman_usage"}})]),t._v(" "),a("h3",{attrs:{id:"usage-14"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-14"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("netman <command> [arguments...]\n Commands:\n   show          Display the current persistent network settings to the console.\n\n   update        Check SD card for net.cfg and update network persistent network\n                 settings.\n\n   save          Save the current network parameters to the SD card.\n     [-i <val>]  Set the interface name\n                 default: eth0\n")])])]),a("h2",{attrs:{id:"pwm-input"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pwm-input"}},[t._v("#")]),t._v(" pwm_input")]),t._v(" "),a("p",[t._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/drivers/pwm_input",target:"_blank",rel:"noopener noreferrer"}},[t._v("drivers/pwm_input"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"description-14"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description-14"}},[t._v("#")]),t._v(" Description")]),t._v(" "),a("p",[t._v("Measures the PWM input on AUX5 (or MAIN5) via a timer capture ISR and publishes via the uORB 'pwm_input` message.")]),t._v(" "),a("p",[a("a",{attrs:{id:"pwm_input_usage"}})]),t._v(" "),a("h3",{attrs:{id:"usage-15"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-15"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("pwm_input <command> [arguments...]\n Commands:\n   start\n\n   test          prints PWM capture info.\n\n   stop\n\n   status        print status info\n")])])]),a("h2",{attrs:{id:"rc-update"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rc-update"}},[t._v("#")]),t._v(" rc_update")]),t._v(" "),a("p",[t._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/modules/rc_update",target:"_blank",rel:"noopener noreferrer"}},[t._v("modules/rc_update"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"description-15"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description-15"}},[t._v("#")]),t._v(" Description")]),t._v(" "),a("p",[t._v("The replay procedure is documented on the "),a("a",{attrs:{href:"https://dev.px4.io/en/debug/system_wide_replay.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("System-wide Replay"),a("OutboundLink")],1),t._v(" page.")]),t._v(" "),a("h3",{attrs:{id:"implementation-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementation-5"}},[t._v("#")]),t._v(" Implementation")]),t._v(" "),a("p",[t._v("To reduce control latency, the module is scheduled on input_rc publications.")]),t._v(" "),a("p",[a("a",{attrs:{id:"rc_update_usage"}})]),t._v(" "),a("h3",{attrs:{id:"usage-16"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-16"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("rc_update <command> [arguments...]\n Commands:\n   start\n\n   stop\n\n   status        print status info\n")])])]),a("h2",{attrs:{id:"replay"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#replay"}},[t._v("#")]),t._v(" replay")]),t._v(" "),a("p",[t._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/modules/replay",target:"_blank",rel:"noopener noreferrer"}},[t._v("modules/replay"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"description-16"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description-16"}},[t._v("#")]),t._v(" Description")]),t._v(" "),a("p",[t._v("This module is used to replay ULog files.")]),t._v(" "),a("p",[t._v("There are 2 environment variables used for configuration: "),a("code",[t._v("replay")]),t._v(", which must be set to an ULog file name - it's the log file to be replayed. The second is the mode, specified via "),a("code",[t._v("replay_mode")]),t._v(":")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("replay_mode=ekf2")]),t._v(": specific EKF2 replay mode. It can only be used with the ekf2 module, but allows the replay to run as fast as possible.")]),t._v(" "),a("li",[t._v("Generic otherwise: this can be used to replay any module(s), but the replay will be done with the same speed as the log was recorded.")])]),t._v(" "),a("p",[t._v("The module is typically used together with uORB publisher rules, to specify which messages should be replayed. The replay module will just publish all messages that are found in the log. It also applies the parameters from the log.")]),t._v(" "),a("p",[t._v("The replay procedure is documented on the "),a("a",{attrs:{href:"https://dev.px4.io/master/en/debug/system_wide_replay.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("System-wide Replay"),a("OutboundLink")],1),t._v(" page.")]),t._v(" "),a("p",[a("a",{attrs:{id:"replay_usage"}})]),t._v(" "),a("h3",{attrs:{id:"usage-17"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-17"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("replay <command> [arguments...]\n Commands:\n   start         Start replay, using log file from ENV variable 'replay'\n\n   trystart      Same as 'start', but silently exit if no log file given\n\n   tryapplyparams Try to apply the parameters from the log file\n\n   stop\n\n   status        print status info\n")])])]),a("h2",{attrs:{id:"send-event"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#send-event"}},[t._v("#")]),t._v(" send_event")]),t._v(" "),a("p",[t._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/modules/events",target:"_blank",rel:"noopener noreferrer"}},[t._v("modules/events"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"description-17"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description-17"}},[t._v("#")]),t._v(" Description")]),t._v(" "),a("p",[t._v("Background process running periodically on the LP work queue to perform housekeeping tasks. It is currently only responsible for tone alarm on RC Loss.")]),t._v(" "),a("p",[t._v("The tasks can be started via CLI or uORB topics (vehicle_command from MAVLink, etc.).")]),t._v(" "),a("p",[a("a",{attrs:{id:"send_event_usage"}})]),t._v(" "),a("h3",{attrs:{id:"usage-18"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-18"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("send_event <command> [arguments...]\n Commands:\n   start         Start the background task\n\n   stop\n\n   status        print status info\n")])])]),a("h2",{attrs:{id:"sensors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sensors"}},[t._v("#")]),t._v(" sensors")]),t._v(" "),a("p",[t._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/modules/sensors",target:"_blank",rel:"noopener noreferrer"}},[t._v("modules/sensors"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"description-18"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description-18"}},[t._v("#")]),t._v(" Description")]),t._v(" "),a("p",[t._v("The sensors module is central to the whole system. It takes low-level output from drivers, turns it into a more usable form, and publishes it for the rest of the system.")]),t._v(" "),a("p",[t._v("The provided functionality includes:")]),t._v(" "),a("ul",[a("li",[t._v("Read the output from the sensor drivers ("),a("code",[t._v("sensor_gyro")]),t._v(", etc.). If there are multiple of the same type, do voting and failover handling. Then apply the board rotation and temperature calibration (if enabled). And finally publish the data; one of the topics is "),a("code",[t._v("sensor_combined")]),t._v(", used by many parts of the system.")]),t._v(" "),a("li",[t._v("Make sure the sensor drivers get the updated calibration parameters (scale & offset) when the parameters change or on startup. The sensor drivers use the ioctl interface for parameter updates. For this to work properly, the sensor drivers must already be running when "),a("code",[t._v("sensors")]),t._v(" is started.")]),t._v(" "),a("li",[t._v("Do preflight sensor consistency checks and publish the "),a("code",[t._v("sensor_preflight")]),t._v(" topic.")])]),t._v(" "),a("h3",{attrs:{id:"implementation-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementation-6"}},[t._v("#")]),t._v(" Implementation")]),t._v(" "),a("p",[t._v("It runs in its own thread and polls on the currently selected gyro topic.")]),t._v(" "),a("p",[a("a",{attrs:{id:"sensors_usage"}})]),t._v(" "),a("h3",{attrs:{id:"usage-19"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-19"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("sensors <command> [arguments...]\n Commands:\n   start\n     [-h]        Start in HIL mode\n\n   stop\n\n   status        print status info\n")])])]),a("h2",{attrs:{id:"temperature-compensation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#temperature-compensation"}},[t._v("#")]),t._v(" temperature_compensation")]),t._v(" "),a("p",[t._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/modules/temperature_compensation",target:"_blank",rel:"noopener noreferrer"}},[t._v("modules/temperature_compensation"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"description-19"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description-19"}},[t._v("#")]),t._v(" Description")]),t._v(" "),a("p",[t._v("The temperature compensation module allows all of the gyro(s), accel(s), and baro(s) in the system to be temperature compensated. The module monitors the data coming from the sensors and updates the associated sensor_correction topic whenever a change in temperature is detected. The module can also be configured to perform the coeffecient calculation routine at next boot, which allows the thermal calibration coeffecients to be calculated while the vehicle undergoes a temperature cycle.")]),t._v(" "),a("p",[a("a",{attrs:{id:"temperature_compensation_usage"}})]),t._v(" "),a("h3",{attrs:{id:"usage-20"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-20"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("temperature_compensation <command> [arguments...]\n Commands:\n   start         Start the module, which monitors the sensors and updates the\n                 sensor_correction topic\n\n   calibrate     Run temperature calibration process\n     [-g]        calibrate the gyro\n     [-a]        calibrate the accel\n     [-b]        calibrate the baro (if none of these is given, all will be\n                 calibrated)\n\n   stop\n\n   status        print status info\n")])])]),a("h2",{attrs:{id:"tune-control"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tune-control"}},[t._v("#")]),t._v(" tune_control")]),t._v(" "),a("p",[t._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/systemcmds/tune_control",target:"_blank",rel:"noopener noreferrer"}},[t._v("systemcmds/tune_control"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"description-20"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description-20"}},[t._v("#")]),t._v(" Description")]),t._v(" "),a("p",[t._v("Command-line tool to control & test the (external) tunes.")]),t._v(" "),a("p",[t._v("Tunes are used to provide audible notification and warnings (e.g. when the system arms, gets position lock, etc.). The tool requires that a driver is running that can handle the tune_control uorb topic.")]),t._v(" "),a("p",[t._v("Information about the tune format and predefined system tunes can be found here: https://github.com/PX4/Firmware/blob/master/src/lib/tunes/tune_definition.desc")]),t._v(" "),a("h3",{attrs:{id:"examples-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples-3"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),a("p",[t._v("Play system tune #2:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("tune_control play -t 2\n")])])]),a("p",[a("a",{attrs:{id:"tune_control_usage"}})]),t._v(" "),a("h3",{attrs:{id:"usage-21"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-21"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('tune_control <command> [arguments...]\n Commands:\n   play          Play system tune or single note.\n     error       Play error tune\n     [-t <val>]  Play predefined system tune\n                 default: 1\n     [-f <val>]  Frequency of note in Hz (0-22kHz)\n     [-d <val>]  Duration of note in us\n     [-s <val>]  Volume level (loudness) of the note (0-100)\n                 default: 40\n     [-m <val>]  Melody in string form\n                 values: <string> - e.g. "MFT200e8a8a"\n\n   libtest       Test library\n\n   stop          Stop playback (use for repeated tunes)\n')])])]),a("h2",{attrs:{id:"work-queue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#work-queue"}},[t._v("#")]),t._v(" work_queue")]),t._v(" "),a("p",[t._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/systemcmds/work_queue",target:"_blank",rel:"noopener noreferrer"}},[t._v("systemcmds/work_queue"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"description-21"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description-21"}},[t._v("#")]),t._v(" Description")]),t._v(" "),a("p",[t._v("Command-line tool to show work queue status.")]),t._v(" "),a("p",[a("a",{attrs:{id:"work_queue_usage"}})]),t._v(" "),a("h3",{attrs:{id:"usage-22"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-22"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("work_queue <command> [arguments...]\n Commands:\n   start\n\n   stop\n\n   status        print status info\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);