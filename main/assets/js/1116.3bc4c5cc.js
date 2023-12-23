(window.webpackJsonp=window.webpackJsonp||[]).push([[1116],{2239:function(e,t,a){"use strict";a.r(t);var n=a(19),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"modules-reference-communication"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#modules-reference-communication"}},[e._v("#")]),e._v(" Modules Reference: Communication")]),e._v(" "),a("h2",{attrs:{id:"frsky-telemetry"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#frsky-telemetry"}},[e._v("#")]),e._v(" frsky_telemetry")]),e._v(" "),a("p",[e._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers/telemetry/frsky_telemetry",target:"_blank",rel:"noopener noreferrer"}},[e._v("drivers/telemetry/frsky_telemetry"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("FrSky Telemetry support. Auto-detects D or S.PORT protocol.\n"),a("a",{attrs:{id:"frsky_telemetry_usage"}})]),e._v(" "),a("h3",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("frsky_telemetry <command> [arguments...]\n Commands:\n   start\n     [-d <val>]  Select Serial Device\n                 values: <file:dev>, default: /dev/ttyS6\n     [-t <val>]  Scanning timeout [s] (default: no timeout)\n                 default: 0\n     [-m <val>]  Select protocol (default: auto-detect)\n                 values: sport|sport_single|sport_single_invert|dtype, default:\n                 auto\n\n   stop\n\n   status\n")])])]),a("h2",{attrs:{id:"mavlink"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mavlink"}},[e._v("#")]),e._v(" mavlink")]),e._v(" "),a("p",[e._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/src/modules/mavlink",target:"_blank",rel:"noopener noreferrer"}},[e._v("modules/mavlink"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" Description")]),e._v(" "),a("p",[e._v("This module implements the MAVLink protocol, which can be used on a Serial link or UDP network connection.\nIt communicates with the system via uORB: some messages are directly handled in the module (eg. mission\nprotocol), others are published via uORB (eg. vehicle_command).")]),e._v(" "),a("p",[e._v("Streams are used to send periodic messages with a specific rate, such as the vehicle attitude.\nWhen starting the mavlink instance, a mode can be specified, which defines the set of enabled streams with their rates.\nFor a running instance, streams can be configured via "),a("code",[e._v("mavlink stream")]),e._v(" command.")]),e._v(" "),a("p",[e._v("There can be multiple independent instances of the module, each connected to one serial device or network port.")]),e._v(" "),a("h3",{attrs:{id:"implementation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[e._v("#")]),e._v(" Implementation")]),e._v(" "),a("p",[e._v("The implementation uses 2 threads, a sending and a receiving thread. The sender runs at a fixed rate and dynamically\nreduces the rates of the streams if the combined bandwidth is higher than the configured rate ("),a("code",[e._v("-r")]),e._v(") or the\nphysical link becomes saturated. This can be checked with "),a("code",[e._v("mavlink status")]),e._v(", see if "),a("code",[e._v("rate mult")]),e._v(" is less than 1.")]),e._v(" "),a("p",[a("strong",[e._v("Careful")]),e._v(": some of the data is accessed and modified from both threads, so when changing code or extend the\nfunctionality, this needs to be take into account, in order to avoid race conditions and corrupt data.")]),e._v(" "),a("h3",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),a("p",[e._v("Start mavlink on ttyS1 serial with baudrate 921600 and maximum sending rate of 80kB/s:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("mavlink start -d /dev/ttyS1 -b 921600 -m onboard -r 80000\n")])])]),a("p",[e._v("Start mavlink on UDP port 14556 and enable the HIGHRES_IMU message with 50Hz:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("mavlink start -u 14556 -r 1000000\nmavlink stream -u 14556 -s HIGHRES_IMU -r 50\n")])])]),a("p",[a("a",{attrs:{id:"mavlink_usage"}})]),e._v(" "),a("h3",{attrs:{id:"usage-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-2"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("mavlink <command> [arguments...]\n Commands:\n   start         Start a new instance\n     [-d <val>]  Select Serial Device\n                 values: <file:dev>, default: /dev/ttyS1\n     [-b <val>]  Baudrate (can also be p:<param_name>)\n                 default: 57600\n     [-r <val>]  Maximum sending data rate in B/s (if 0, use baudrate / 20)\n                 default: 0\n     [-p]        Enable Broadcast\n     [-u <val>]  Select UDP Network Port (local)\n                 default: 14556\n     [-o <val>]  Select UDP Network Port (remote)\n                 default: 14550\n     [-t <val>]  Partner IP (broadcasting can be enabled via -p flag)\n                 default: 127.0.0.1\n     [-m <val>]  Mode: sets default streams and rates\n                 values: custom|camera|onboard|osd|magic|config|iridium|minimal|\n                 extvision|extvisionmin|gimbal|uavionix, default: normal\n     [-n <val>]  wifi/ethernet interface name\n                 values: <interface_name>\n     [-c <val>]  Multicast address (multicasting can be enabled via\n                 MAV_{i}_BROADCAST param)\n                 values: Multicast address in the range\n                 [239.0.0.0,239.255.255.255]\n     [-f]        Enable message forwarding to other Mavlink instances\n     [-w]        Wait to send, until first message received\n     [-x]        Enable FTP\n     [-z]        Force hardware flow control always on\n     [-Z]        Force hardware flow control always off\n\n   stop-all      Stop all instances\n\n   stop          Stop a running instance\n     [-u <val>]  Select Mavlink instance via local Network Port\n     [-d <val>]  Select Mavlink instance via Serial Device\n                 values: <file:dev>\n\n   status        Print status for all instances\n     [streams]   Print all enabled streams\n\n   stream        Configure the sending rate of a stream for a running instance\n     [-u <val>]  Select Mavlink instance via local Network Port\n     [-d <val>]  Select Mavlink instance via Serial Device\n                 values: <file:dev>\n     -s <val>    Mavlink stream to configure\n     -r <val>    Rate in Hz (0 = turn off, -1 = set to default)\n\n   boot_complete Enable sending of messages. (Must be) called as last step in\n                 startup script.\n")])])]),a("h2",{attrs:{id:"uorb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#uorb"}},[e._v("#")]),e._v(" uorb")]),e._v(" "),a("p",[e._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/src/systemcmds/uorb",target:"_blank",rel:"noopener noreferrer"}},[e._v("systemcmds/uorb"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"description-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description-2"}},[e._v("#")]),e._v(" Description")]),e._v(" "),a("p",[e._v("uORB is the internal pub-sub messaging system, used for communication between modules.")]),e._v(" "),a("h3",{attrs:{id:"implementation-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementation-2"}},[e._v("#")]),e._v(" Implementation")]),e._v(" "),a("p",[e._v("The implementation is asynchronous and lock-free, ie. a publisher does not wait for a subscriber and vice versa.\nThis is achieved by having a separate buffer between a publisher and a subscriber.")]),e._v(" "),a("p",[e._v("The code is optimized to minimize the memory footprint and the latency to exchange messages.")]),e._v(" "),a("p",[e._v("Messages are defined in the "),a("code",[e._v("/msg")]),e._v(" directory. They are converted into C/C++ code at build-time.")]),e._v(" "),a("p",[e._v("If compiled with ORB_USE_PUBLISHER_RULES, a file with uORB publication rules can be used to configure which\nmodules are allowed to publish which topics. This is used for system-wide replay.")]),e._v(" "),a("h3",{attrs:{id:"examples-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples-2"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),a("p",[e._v("Monitor topic publication rates. Besides "),a("code",[e._v("top")]),e._v(", this is an important command for general system inspection:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("uorb top\n")])])]),a("p",[a("a",{attrs:{id:"uorb_usage"}})]),e._v(" "),a("h3",{attrs:{id:"usage-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-3"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("uorb <command> [arguments...]\n Commands:\n   status        Print topic statistics\n\n   top           Monitor topic publication rates\n     [-a]        print all instead of only currently publishing topics with\n                 subscribers\n     [-1]        run only once, then exit\n     [<filter1> [<filter2>]] topic(s) to match (implies -a)\n")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);