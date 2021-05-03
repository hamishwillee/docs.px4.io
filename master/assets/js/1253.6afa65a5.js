(window.webpackJsonp=window.webpackJsonp||[]).push([[1253],{2622:function(e,t,a){"use strict";a.r(t);var r=a(18),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"模块参考-通信-communication"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模块参考-通信-communication"}},[e._v("#")]),e._v(" 模块参考：通信（Communication）")]),e._v(" "),a("h2",{attrs:{id:"frsky-telemetry"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#frsky-telemetry"}},[e._v("#")]),e._v(" frsky_telemetry")]),e._v(" "),a("p",[e._v("源码："),a("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/drivers/telemetry/frsky_telemetry",target:"_blank",rel:"noopener noreferrer"}},[e._v("drivers/telemetry/frsky_telemetry"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("FrSky 数传支持， FrSky Telemetry support. Auto-detects D or S.PORT protocol.\n"),a("a",{attrs:{id:"frsky_telemetry_usage"}})]),e._v(" "),a("h3",{attrs:{id:"用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用法"}},[e._v("#")]),e._v(" 用法")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("frsky_telemetry <command> [arguments...]\n frsky_telemetry <command> [arguments...]\n Commands:\n   start\n     [-d <val>]  Select Serial Device\n                 values: <file:dev>, default: /dev/ttyS6\n     [-t <val>]  Scanning timeout [s] (default: no timeout)\n                 default: 0\n     [-m <val>]  Select protocol (default: auto-detect)\n                 values: sport|sport_single|dtype, default: auto\n\n   stop\n\n   status\n")])])]),a("h2",{attrs:{id:"mavlink"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mavlink"}},[e._v("#")]),e._v(" mavlink")]),e._v(" "),a("p",[e._v("源码： "),a("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/modules/mavlink",target:"_blank",rel:"noopener noreferrer"}},[e._v("modules/mavlink"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#描述"}},[e._v("#")]),e._v(" 描述")]),e._v(" "),a("p",[e._v("此模块实现了 MAVLink 协议，该协议可在串口或 UDP 网络上使用。 This module implements the MAVLink protocol, which can be used on a Serial link or UDP network connection. It communicates with the system via uORB: some messages are directly handled in the module (eg. mission protocol), others are published via uORB (eg. vehicle_command).")]),e._v(" "),a("p",[e._v("流（Stream）被用来以特定速率发送周期性的消息，例如飞机姿态信息。 Streams are used to send periodic messages with a specific rate, such as the vehicle attitude. When starting the mavlink instance, a mode can be specified, which defines the set of enabled streams with their rates. For a running instance, streams can be configured via "),a("code",[e._v("mavlink stream")]),e._v(" command. 对于一个正在运行的实例而言，可以使用 "),a("code",[e._v("mavlink stream")]),e._v(" 命令来配置流。")]),e._v(" "),a("p",[e._v("可以存在多个该模块的实例，每个实例连接到一个串口设备或者网络端口。")]),e._v(" "),a("h3",{attrs:{id:"实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现"}},[e._v("#")]),e._v(" 实现")]),e._v(" "),a("p",[e._v("命令的具体实现使用了两个线程，分别为数据发送线程和接收线程。 发送线程以一个固定的速率运行，并会在组合带宽（combined bandwidth）高于设定速率("),a("code",[e._v("-r")]),e._v(")，或者物理链路出现饱和的情况下动态降低信息流的发送速率。 可使用 "),a("code",[e._v("mavlink status")]),e._v(" 命令检查是否发生降速，如果 "),a("code",[e._v("rate mult")]),e._v(" 小于 1 则发生了降速。")]),e._v(" "),a("p",[a("strong",[e._v("Careful")]),e._v(": some of the data is accessed and modified from both threads, so when changing code or extend the functionality, this needs to be take into account, in order to avoid race conditions and corrupt data.")]),e._v(" "),a("h3",{attrs:{id:"示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[e._v("#")]),e._v(" 示例")]),e._v(" "),a("p",[e._v("在 ttyS1 串口启动 mavlink ，并设定波特率为 921600、最大发送速率为 80kB/s：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("mavlink start -d /dev/ttyS1 -b 921600 -m onboard -r 80000\n")])])]),a("p",[e._v("在 UDP 端口 14556 启动 mavlink 并启用 50Hz 的 HIGHRES_IMU 消息：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("mavlink start -u 14556 -r 1000000\nmavlink stream -u 14556 -s HIGHRES_IMU -r 50\n")])])]),a("p",[a("a",{attrs:{id:"mavlink_usage"}})]),e._v(" "),a("h3",{attrs:{id:"用法-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用法-2"}},[e._v("#")]),e._v(" 用法")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("mavlink <command> [arguments...]\n mavlink <command> [arguments...]\n Commands:\n   start         Start a new instance\n     [-d <val>]  Select Serial Device\n                 values: <file:dev>, default: /dev/ttyS1\n     [-b <val>]  Baudrate (can also be p:<param_name>)\n                 default: 57600\n     [-r <val>]  Maximum sending data rate in B/s (if 0, use baudrate / 20)\n                 default: 0\n     [-u <val>]  Select UDP Network Port (local)\n                 default: 14556\n     [-o <val>]  Select UDP Network Port (remote)\n                 default: 14550\n     [-t <val>]  Partner IP (broadcasting can be enabled via MAV_BROADCAST\n                 param)\n                 default: 127.0.0.1\n     [-m <val>]  Mode: sets default streams and rates\n                 values: custom|camera|onboard|osd|magic|config|iridium|minimal,\n                 default: normal\n     [-n <val>]  wifi/ethernet interface name\n                 values: <interface_name>\n     [-c <val>]  Multicast address (multicasting can be enabled via\n                 MAV_BROADCAST param)\n                 values: Multicast address in the range\n                 [239.0.0.0,239.255.255.255]\n     [-f]        Enable message forwarding to other Mavlink instances\n     [-w]        Wait to send, until first message received\n     [-x]        Enable FTP\n     [-z]        Force flow control always on\n\n   stop-all      Stop all instances\n\n   status        Print status for all instances\n     [streams]   Print all enabled streams\n\n   stream        Configure the sending rate of a stream for a running instance\n     [-u <val>]  Select Mavlink instance via local Network Port\n                 default: 0\n     [-d <val>]  Select Mavlink instance via Serial Device\n                 values: <file:dev>\n     -s <val>    Mavlink stream to configure\n     -r <val>    Rate in Hz (0 = turn off, -1 = set to default)\n\n   boot_complete Enable sending of messages. (Must be) called as last step in\n                 startup script. (必须) 作为启动脚本的最后一步被调用。\n")])])]),a("h2",{attrs:{id:"micrortps-client"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#micrortps-client"}},[e._v("#")]),e._v(" micrortps_client")]),e._v(" "),a("p",[e._v("源码："),a("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/modules/micrortps_bridge/micrortps_client",target:"_blank",rel:"noopener noreferrer"}},[e._v("modules/micrortps_bridge/micrortps_client"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{id:"micrortps_client_usage"}})]),e._v(" "),a("h3",{attrs:{id:"用法-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用法-3"}},[e._v("#")]),e._v(" 用法")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("micrortps_client <command> [arguments...]\n micrortps_client <command> [arguments...]\n Commands:\n   start\n     [-t <val>]  Transport protocol\n                 values: UART|UDP, default: UART\n     [-d <val>]  Select Serial Device\n                 values: <file:dev>, default: /dev/ttyACM0\n     [-b <val>]  Baudrate (can also be p:<param_name>)\n                 default: 460800\n     [-p <val>]  Poll timeout for UART in ms\n                 default: 1\n     [-u <val>]  Interval in ms to limit the update rate of all sent topics\n                 (0=unlimited)\n                 default: 0\n     [-l <val>]  Limit number of iterations until the program exits\n                 (-1=infinite)\n                 default: 10000\n     [-w <val>]  Time in ms for which each iteration sleeps\n                 default: 1\n     [-r <val>]  Select UDP Network Port for receiving (local)\n                 default: 2019\n     [-s <val>]  Select UDP Network Port for sending (remote)\n                 default: 2020\n\n   stop\n\n   status\n")])])]),a("h2",{attrs:{id:"uorb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#uorb"}},[e._v("#")]),e._v(" uorb")]),e._v(" "),a("p",[e._v("源码："),a("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/modules/uORB",target:"_blank",rel:"noopener noreferrer"}},[e._v("modules/uORB"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"描述-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#描述-2"}},[e._v("#")]),e._v(" 描述")]),e._v(" "),a("p",[e._v("uORB 是各模块之间进行通讯的基于 发布-订阅 机制的内部消息传递系统。")]),e._v(" "),a("h3",{attrs:{id:"用法-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用法-4"}},[e._v("#")]),e._v(" 用法")]),e._v(" "),a("p",[e._v("The implementation is asynchronous and lock-free, ie. a publisher does not wait for a subscriber and vice versa. This is achieved by having a separate buffer between a publisher and a subscriber.")]),e._v(" "),a("p",[e._v("The code is optimized to minimize the memory footprint and the latency to exchange messages.")]),e._v(" "),a("p",[e._v("Messages are defined in the "),a("code",[e._v("/msg")]),e._v(" directory. They are converted into C/C++ code at build-time.")]),e._v(" "),a("p",[e._v("该接口基于文件描述符（file descriptor）实现：它在内部使用 "),a("code",[e._v("read")]),e._v("、"),a("code",[e._v("write")]),e._v(" 和 "),a("code",[e._v("ioctl")]),e._v("。 The interface is based on file descriptors: internally it uses "),a("code",[e._v("read")]),e._v(", "),a("code",[e._v("write")]),e._v(" and "),a("code",[e._v("ioctl")]),e._v(". Except for the publications, which use "),a("code",[e._v("orb_advert_t")]),e._v(" handles, so that they can be used from interrupts as well (on NuttX).")]),e._v(" "),a("h3",{attrs:{id:"示例-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例-2"}},[e._v("#")]),e._v(" 示例")]),e._v(" "),a("p",[e._v("Messages are defined in the "),a("code",[e._v("/msg")]),e._v(" directory. They are converted into C/C++ code at build-time. 在构建时它们会被转化为 C/C++ 代码。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("uorb top\n")])])]),a("p",[a("a",{attrs:{id:"uorb_usage"}})]),e._v(" "),a("h3",{attrs:{id:"用法-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用法-5"}},[e._v("#")]),e._v(" 用法")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("uorb <command> [arguments...]\n uorb <command> [arguments...]\n Commands:\n   start\n\n   status        Print topic statistics\n\n   top           Monitor topic publication rates\n     [-a]        print all instead of only currently publishing topics\n     [<filter1> [<filter2>]] topic(s) to match (implies -a)\n")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);