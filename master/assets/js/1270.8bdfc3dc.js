(window.webpackJsonp=window.webpackJsonp||[]).push([[1270],{2663:function(t,e,a){"use strict";a.r(e);var s=a(19),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"模块参考-系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模块参考-系统"}},[t._v("#")]),t._v(" 模块参考：系统")]),t._v(" "),a("h2",{attrs:{id:"battery-simulator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#battery-simulator"}},[t._v("#")]),t._v(" battery_simulator")]),t._v(" "),a("p",[t._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/modules/simulator/battery_simulator",target:"_blank",rel:"noopener noreferrer"}},[t._v("modules/simulator/battery_simulator"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#描述"}},[t._v("#")]),t._v(" 描述")]),t._v(" "),a("p",[a("a",{attrs:{id:"battery_simulator_usage"}})]),t._v(" "),a("h3",{attrs:{id:"用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用法"}},[t._v("#")]),t._v(" 用法")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("battery_simulator <command> [arguments...]\n wind_estimator &lt;command&gt; [arguments...]\n Commands:\n   start\n\n   stop\n\n   status        打印状态信息\n")])])]),a("h2",{attrs:{id:"battery-status"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#battery-status"}},[t._v("#")]),t._v(" battery_status")]),t._v(" "),a("p",[t._v("Module to provide persistent storage for the rest of the system in form of a simple database through a C API. Multiple backends are supported:")]),t._v(" "),a("h3",{attrs:{id:"描述-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#描述-2"}},[t._v("#")]),t._v(" 描述")]),t._v(" "),a("p",[t._v("模块提供的功能包括：")]),t._v(" "),a("ul",[a("li",[t._v("从 ADC 驱动读取电池状态（通过 ioctl 接口），并且发布到主题 "),a("code",[t._v("battery_status")]),t._v("。")])]),t._v(" "),a("h3",{attrs:{id:"实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现"}},[t._v("#")]),t._v(" 实现")]),t._v(" "),a("p",[t._v("模块运行在它自己的线程中，并轮询当前选定的陀螺仪主题。")]),t._v(" "),a("p",[a("a",{attrs:{id:"battery_status_usage"}})]),t._v(" "),a("h3",{attrs:{id:"用法-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用法-2"}},[t._v("#")]),t._v(" 用法")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("battery_status <command> [arguments...]\n wind_estimator &lt;command&gt; [arguments...]\n Commands:\n   start\n\n   stop\n\n   status        打印状态信息\n")])])]),a("h2",{attrs:{id:"camera-feedback"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#camera-feedback"}},[t._v("#")]),t._v(" camera_feedback")]),t._v(" "),a("p",[a("strong",[t._v("DM_KEY_FENCE_POINTS")]),t._v(" and "),a("strong",[t._v("DM_KEY_SAFE_POINTS")]),t._v(" items: the first data element is a "),a("code",[t._v("mission_stats_entry_s")]),t._v(" struct, which stores the number of items for these types. These items are always updated atomically in one transaction (from the mavlink mission manager). During that time, navigator will try to acquire the geofence item lock, fail, and will not check for geofence violations.")]),t._v(" "),a("h3",{attrs:{id:"描述-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#描述-3"}},[t._v("#")]),t._v(" 描述")]),t._v(" "),a("p",[a("a",{attrs:{id:"camera_feedback_usage"}})]),t._v(" "),a("h3",{attrs:{id:"用法-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用法-3"}},[t._v("#")]),t._v(" 用法")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("camera_feedback <command> [arguments...]\n wind_estimator &lt;command&gt; [arguments...]\n Commands:\n   start\n\n   stop\n\n   status        打印状态信息\n")])])]),a("h2",{attrs:{id:"commander"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commander"}},[t._v("#")]),t._v(" commander")]),t._v(" "),a("p",[t._v("源码： "),a("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/modules/commander",target:"_blank",rel:"noopener noreferrer"}},[t._v("modules/commander"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"描述-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#描述-4"}},[t._v("#")]),t._v(" 描述")]),t._v(" "),a("p",[t._v("该模块包含飞行模式切换和失效保护状态机。")]),t._v(" "),a("p",[a("a",{attrs:{id:"commander_usage"}})]),t._v(" "),a("h3",{attrs:{id:"描述-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#描述-5"}},[t._v("#")]),t._v(" 描述")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("commander <command> [arguments...]\n Commands:\n   start\n     [-h]        Enable HIL mode\n\n   calibrate     Run sensor calibration\n     mag|accel|gyro|level|esc|airspeed Calibration type\n     quick       Quick calibration (accel only, not recommended)\n\n   check         Run preflight checks\n\n   arm\n     [-f]        Force arming (do not run preflight checks)\n\n   disarm\n\n   takeoff\n\n   land\n\n   transition    VTOL transition\n\n   mode          Change flight mode\n     manual|acro|offboard|stabilized|altctl|posctl|auto:mission|auto:loiter|auto\n                 :rtl|auto:takeoff|auto:land|auto:precland Flight mode\n\n   pair\n\n   lockdown\n     [off]       Turn lockdown off\n\n   set_ekf_origin\n     lat, lon, alt Origin Latitude, Longitude, Altitude\n\n   lat|lon|alt   Origin latitude longitude altitude\n\n   stop\n\n   status        print status info\n")])])]),a("h2",{attrs:{id:"dataman"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dataman"}},[t._v("#")]),t._v(" dataman")]),t._v(" "),a("p",[t._v("源码： "),a("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/modules/dataman",target:"_blank",rel:"noopener noreferrer"}},[t._v("modules/dataman"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"描述-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#描述-6"}},[t._v("#")]),t._v(" 描述")]),t._v(" "),a("p",[t._v("该模块通过基于C语言的API以简单数据库的形式为系统的其他部分提供持续性存储功能。 支持多种后端：")]),t._v(" "),a("ul",[a("li",[t._v("a file (eg. on the SD card)")]),t._v(" "),a("li",[t._v("FLASH(需要飞控板支持)")])]),t._v(" "),a("p",[t._v("It is used to store structured data of different types: mission waypoints, mission state and geofence polygons. Each type has a specific type and a fixed maximum amount of storage items, so that fast random access is possible. 每种类型的数据都有一个特定的类型和一个固定的最大存储条目的数量，因此可以实现对数据的快速随机访问。")]),t._v(" "),a("h3",{attrs:{id:"实现-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现-2"}},[t._v("#")]),t._v(" 实现")]),t._v(" "),a("p",[t._v("单个数据的读取和写入是原子操作。 Reading and writing a single item is always atomic. If multiple items need to be read/modified atomically, there is an additional lock per item type via "),a("code",[t._v("dm_lock")]),t._v(".")]),t._v(" "),a("p",[a("strong",[t._v("DM_KEY_FENCE_POINTS")]),t._v(" and "),a("strong",[t._v("DM_KEY_SAFE_POINTS")]),t._v(" items: the first data element is a "),a("code",[t._v("mission_stats_entry_s")]),t._v(" struct, which stores the number of items for these types. 这些项在每一次通讯过程中都会进行原子更新(与mavlink 任务管理器)。 在程序运行时，导航模块会尝试去锁定地理围栏，如果失败的话，就不会去检查是否越界了地理围栏。")]),t._v(" "),a("p",[a("a",{attrs:{id:"dataman_usage"}})]),t._v(" "),a("h3",{attrs:{id:"用法-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用法-4"}},[t._v("#")]),t._v(" 用法")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("dataman <command> [arguments...]\n dataman <command> [arguments...]\n Commands:\n   start\n     [-f <val>]  Storage file\n                 values: <file>\n     [-r]        Use RAM backend (NOT persistent)\n     [-i]        Use FLASH backend\n\n The options -f, -r and -i are mutually exclusive. If nothing is specified, a\n file 'dataman' is used\n\n   poweronrestart Restart dataman (on power on)\n\n   inflightrestart Restart dataman (in flight)\n\n   stop\n\n   status        print status info 如果未指定后端，\n那么就默认使用文件 'dataman' \n\n   poweronrestart 重启 dataman (处于开机 power on 状态时)\n\n   inflightrestart 重启 dataman (处于飞行状态时)\n\n   stop\n\n   status        打印状态信息\n")])])]),a("h2",{attrs:{id:"dmesg"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dmesg"}},[t._v("#")]),t._v(" dmesg")]),t._v(" "),a("p",[a("strong",[t._v("maybe_landed")]),t._v(": it requires ground_contact together with a tighter thrust setpoint threshold and no velocity in the horizontal direction. The trigger time is defined by MAYBE_LAND_TRIGGER_TIME. When maybe_landed is detected, the position controller sets the thrust setpoint to zero.")]),t._v(" "),a("h3",{attrs:{id:"示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),a("p",[t._v("用于显示启动控制台消息的命令行工具 需要注意的是，NuttX系统的工作队列和系统日志输出都未被捕捉到。")]),t._v(" "),a("h3",{attrs:{id:"示例-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例-2"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),a("p",[t._v("持续在后台打印所有消息。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("dmesg -f &\n")])])]),a("p",[a("a",{attrs:{id:"dmesg_usage"}})]),t._v(" "),a("h3",{attrs:{id:"描述-7"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#描述-7"}},[t._v("#")]),t._v(" 描述")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("dmesg <command> [arguments...]\n Commands:\n     [-f]        Follow: wait for new messages\n")])])]),a("h2",{attrs:{id:"esc-battery"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#esc-battery"}},[t._v("#")]),t._v(" esc_battery")]),t._v(" "),a("p",[t._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/modules/esc_battery",target:"_blank",rel:"noopener noreferrer"}},[t._v("modules/esc_battery"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"描述-8"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#描述-8"}},[t._v("#")]),t._v(" 描述")]),t._v(" "),a("p",[t._v("Background process running periodically with 1 Hz on the LP work queue to calculate the CPU load and RAM usage and publish the "),a("code",[t._v("cpuload")]),t._v(" topic.")]),t._v(" "),a("p",[a("a",{attrs:{id:"esc_battery_usage"}})]),t._v(" "),a("h3",{attrs:{id:"描述-9"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#描述-9"}},[t._v("#")]),t._v(" 描述")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("esc_battery <command> [arguments...]\n mc_att_control <command> [arguments...]\n Commands:\n   start\n\n   stop\n\n   status        打印状态信息\n")])])]),a("h2",{attrs:{id:"gyro-calibration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gyro-calibration"}},[t._v("#")]),t._v(" gyro_calibration")]),t._v(" "),a("p",[t._v("On NuttX it also checks the stack usage of each process and if it falls below 300 bytes, a warning is output, which will also appear in the log file.")]),t._v(" "),a("h3",{attrs:{id:"描述-10"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#描述-10"}},[t._v("#")]),t._v(" 描述")]),t._v(" "),a("p",[t._v("源码："),a("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/drivers/heater",target:"_blank",rel:"noopener noreferrer"}},[t._v("drivers/heater"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{id:"gyro_calibration_usage"}})]),t._v(" "),a("h3",{attrs:{id:"描述-11"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#描述-11"}},[t._v("#")]),t._v(" 描述")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("gyro_calibration <command> [arguments...]\n mc_att_control <command> [arguments...]\n Commands:\n   start\n\n   stop\n\n   status        打印状态信息\n")])])]),a("h2",{attrs:{id:"heater"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#heater"}},[t._v("#")]),t._v(" heater")]),t._v(" "),a("p",[t._v("这个模块将以后台进程的形式在低优先级工作队列中周期性运行，从而实现将 IMU 的温度调节到设定值。")]),t._v(" "),a("h3",{attrs:{id:"描述-12"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#描述-12"}},[t._v("#")]),t._v(" 描述")]),t._v(" "),a("p",[a("a",{attrs:{id:"gyro_fft_usage"}})]),t._v(" "),a("h3",{attrs:{id:"用法-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用法-5"}},[t._v("#")]),t._v(" 用法")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("gyro_fft <command> [arguments...]\n mc_att_control <command> [arguments...]\n Commands:\n   start\n\n   stop\n\n   status        打印状态信息\n")])])]),a("h2",{attrs:{id:"land-detector"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#land-detector"}},[t._v("#")]),t._v(" land_detector")]),t._v(" "),a("p",[t._v("通过设置 SENS_EN_THERMAL 参数或者命令行接口，可以使得该任务在运行启动脚本时就开始工作。")]),t._v(" "),a("h3",{attrs:{id:"描述-13"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#描述-13"}},[t._v("#")]),t._v(" 描述")]),t._v(" "),a("p",[t._v("源码："),a("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/modules/land_detector",target:"_blank",rel:"noopener noreferrer"}},[t._v("modules/land_detector"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("This task can be started at boot from the startup scripts by setting SENS_EN_THERMAL or via CLI.")]),t._v(" "),a("p",[a("a",{attrs:{id:"heater_usage"}})]),t._v(" "),a("h3",{attrs:{id:"实现-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现-3"}},[t._v("#")]),t._v(" 实现")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("heater <command> [arguments...]\n land_detector <command> [arguments...]\n Commands:\n   start         启动后台任务\n     fixedwing|multicopter|vtol|ugv 选择飞机类型\n\n   stop\n\n   status        打印状态信息\n")])])]),a("h2",{attrs:{id:"load-mon"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#load-mon"}},[t._v("#")]),t._v(" load_mon")]),t._v(" "),a("p",[t._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/modules/land_detector",target:"_blank",rel:"noopener noreferrer"}},[t._v("modules/land_detector"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"用法-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用法-6"}},[t._v("#")]),t._v(" 用法")]),t._v(" "),a("p",[a("strong",[t._v("ground_contact")]),t._v(": thrust setpoint and velocity in z-direction must be below a defined threshold for time GROUND_CONTACT_TRIGGER_TIME_US. When ground_contact is detected, the position controller turns off the thrust setpoint in body x and y. 当检测到 ground_contact 状态时，位置控制器将关闭机体 x 方向和 y 方向上的推力设定值。")]),t._v(" "),a("h3",{attrs:{id:"描述-14"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#描述-14"}},[t._v("#")]),t._v(" 描述")]),t._v(" "),a("p",[t._v("Every type is implemented in its own class with a common base class. 触发时间由变量 MAYBE_LAND_TRIGGER_TIME 定义。 当检测到 maybe_landed 状态时，位置控制器会将推理设定值设置为零。 A hysteresis and a fixed priority of each internal state determines the actual land_detector state.")]),t._v(" "),a("h4",{attrs:{id:"多旋翼的-land-detector"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多旋翼的-land-detector"}},[t._v("#")]),t._v(" 多旋翼的 Land Detector")]),t._v(" "),a("p",[a("strong",[t._v("ground_contact")]),t._v(": thrust setpoint and velocity in z-direction must be below a defined threshold for time GROUND_CONTACT_TRIGGER_TIME_US. When ground_contact is detected, the position controller turns off the thrust setpoint in body x and y.")]),t._v(" "),a("p",[a("strong",[t._v("maybe_landed")]),t._v(": it requires ground_contact together with a tighter thrust setpoint threshold and no velocity in the horizontal direction. The trigger time is defined by MAYBE_LAND_TRIGGER_TIME. When maybe_landed is detected, the position controller sets the thrust setpoint to zero.")]),t._v(" "),a("p",[t._v("源码："),a("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/modules/load_mon",target:"_blank",rel:"noopener noreferrer"}},[t._v("modules/load_mon"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("There are 2 environment variables used for configuration: "),a("code",[t._v("replay")]),t._v(", which must be set to an ULog file name - it's the log file to be replayed. The second is the mode, specified via "),a("code",[t._v("replay_mode")]),t._v(":")]),t._v(" "),a("p",[a("a",{attrs:{id:"land_detector_usage"}})]),t._v(" "),a("h3",{attrs:{id:"用法-7"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用法-7"}},[t._v("#")]),t._v(" 用法")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("land_detector <command> [arguments...]\n load_mon <command> [arguments...]\n Commands:\n   start         启动后台任务\n\n   stop\n\n   status        打印状态信息\n")])])]),a("h2",{attrs:{id:"logger"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#logger"}},[t._v("#")]),t._v(" logger")]),t._v(" "),a("p",[t._v("The module is typically used together with uORB publisher rules, to specify which messages should be replayed. The replay module will just publish all messages that are found in the log. It also applies the parameters from the log.")]),t._v(" "),a("h3",{attrs:{id:"描述-15"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#描述-15"}},[t._v("#")]),t._v(" 描述")]),t._v(" "),a("p",[t._v("源码："),a("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/modules/logger",target:"_blank",rel:"noopener noreferrer"}},[t._v("modules/logger"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("On NuttX it also checks the stack usage of each process and if it falls below 300 bytes, a warning is output, which will also appear in the log file.")]),t._v(" "),a("p",[a("a",{attrs:{id:"load_mon_usage"}})]),t._v(" "),a("h3",{attrs:{id:"实现-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现-4"}},[t._v("#")]),t._v(" 实现")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("load_mon <command> [arguments...]\n Commands:\n   start         Start the background task\n\n   stop\n\n   status        print status info\n")])])]),a("h2",{attrs:{id:"logger-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#logger-2"}},[t._v("#")]),t._v(" logger")]),t._v(" "),a("p",[t._v("该模块支持 2 个后端：")]),t._v(" "),a("h3",{attrs:{id:"示例-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例-3"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),a("p",[t._v("System logger which logs a configurable set of uORB topics and system printf messages ("),a("code",[t._v("PX4_WARN")]),t._v(" and "),a("code",[t._v("PX4_ERR")]),t._v(") to ULog files. These can be used for system and flight performance evaluation, tuning, replay and crash analysis.")]),t._v(" "),a("p",[t._v("It supports 2 backends:")]),t._v(" "),a("ul",[a("li",[t._v("文件：写入 ULog 文件到文件系统中（SD 卡）")]),t._v(" "),a("li",[t._v("MAVLink: 通过 MAVLink 将 ULog 数据流传输到客户端上（需要客户端支持此方式）")])]),t._v(" "),a("p",[t._v("模块的实现使用了两个线程：")]),t._v(" "),a("p",[t._v("In between there is a write buffer with configurable size (and another fixed-size buffer for the mission log). It should be large to avoid dropouts. 缓冲区应大到可以避免出现数据溢出。 It can be enabled and configured via SDLOG_MISSION parameter. The normal log is always a superset of the mission log.")]),t._v(" "),a("h3",{attrs:{id:"用法-8"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用法-8"}},[t._v("#")]),t._v(" 用法")]),t._v(" "),a("p",[t._v("立刻开始记录日志的典型用法：")]),t._v(" "),a("ul",[a("li",[t._v("The main thread, running at a fixed rate (or polling on a topic if started with -p) and checking for data updates")]),t._v(" "),a("li",[t._v("写入线程，将数据写入文件中、")])]),t._v(" "),a("p",[t._v("In between there is a write buffer with configurable size (and another fixed-size buffer for the mission log). It should be large to avoid dropouts.")]),t._v(" "),a("h3",{attrs:{id:"参数描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数描述"}},[t._v("#")]),t._v(" 参数描述")]),t._v(" "),a("p",[t._v("Typical usage to start logging immediately:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("logger on\n")])])]),a("p",[t._v("Or if already running:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("logger on\n")])])]),a("p",[a("a",{attrs:{id:"logger_usage"}})]),t._v(" "),a("h3",{attrs:{id:"用法-9"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用法-9"}},[t._v("#")]),t._v(" 用法")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("logger <command> [arguments...]\n Commands:\n   start\n     [-m <val>]  Backend mode\n                 values: file|mavlink|all, default: all\n     [-x]        Enable/disable logging via Aux1 RC channel\n     [-e]        Enable logging right after start until disarm (otherwise only\n                 when armed)\n     [-f]        Log until shutdown (implies -e)\n     [-t]        Use date/time for naming log directories and files\n     [-r <val>]  Log rate in Hz, 0 means unlimited rate\n                 default: 280\n     [-b <val>]  Log buffer size in KiB\n                 default: 12\n     [-p <val>]  Poll on a topic instead of running with fixed rate (Log rate\n                 and topic intervals are ignored if this is set)\n                 values: <topic_name>\n\n   on            start logging now, override arming (logger must be running)\n\n   off           stop logging now, override arming (logger must be running)\n\n   stop\n\n   status        print status info\n")])])]),a("h2",{attrs:{id:"netman"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#netman"}},[t._v("#")]),t._v(" netman")]),t._v(" "),a("p",[t._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/systemcmds/netman",target:"_blank",rel:"noopener noreferrer"}},[t._v("systemcmds/netman"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"description-network-configuration-manager-saves-the-network-settings-in-non-volatile-memory-on-boot-the-update-option-will-be-run-if-a-network-configuration-does-not-exist-the-default-setting-will-be-saved-in-non-volatile-and-the-system-rebooted-on-subsequent-boots-the-update-option-will-check-for-the-existence-of-net-cfg-in-the-root-of-the-sd-card-it-will-saves-the-network-settings-from-net-cfg-in-non-volatile-memory-delete-the-file-and-reboot-the-system"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description-network-configuration-manager-saves-the-network-settings-in-non-volatile-memory-on-boot-the-update-option-will-be-run-if-a-network-configuration-does-not-exist-the-default-setting-will-be-saved-in-non-volatile-and-the-system-rebooted-on-subsequent-boots-the-update-option-will-check-for-the-existence-of-net-cfg-in-the-root-of-the-sd-card-it-will-saves-the-network-settings-from-net-cfg-in-non-volatile-memory-delete-the-file-and-reboot-the-system"}},[t._v("#")]),t._v(" Description Network configuration manager saves the network settings in non-volatile memory. On boot the "),a("code",[t._v("update")]),t._v(" option will be run. If a network configuration does not exist. The default setting will be saved in non-volatile and the system rebooted. On Subsequent boots, the "),a("code",[t._v("update")]),t._v(" option will check for the existence of "),a("code",[t._v("net.cfg")]),t._v(" in the root of the SD Card.  It will saves the network settings from "),a("code",[t._v("net.cfg")]),t._v(" in non-volatile memory, delete the file and reboot the system.")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("save")]),t._v(" option will "),a("code",[t._v("net.cfg")]),t._v(" on the SD Card. Use this to edit the settings. The  "),a("code",[t._v("show")]),t._v(" option will display the network settings  to the console.")]),t._v(" "),a("h3",{attrs:{id:"examples-netman-save-save-the-parameters-to-the-sd-card-netman-show-display-current-settings-netman-update-i-eth0-do-an-update"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples-netman-save-save-the-parameters-to-the-sd-card-netman-show-display-current-settings-netman-update-i-eth0-do-an-update"}},[t._v("#")]),t._v(" Examples $ netman save           # Save the parameters to the SD card. $ netman show           # display current settings. $ netman update -i eth0 # do an update")]),t._v(" "),a("p",[a("a",{attrs:{id:"netman_usage"}})]),t._v(" "),a("h3",{attrs:{id:"参数描述-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数描述-2"}},[t._v("#")]),t._v(" 参数描述")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("netman <command> [arguments...]\n wind_estimator &lt;command&gt; [arguments...]\n Commands:\n   start\n\n   stop\n\n   status        打印状态信息\n\n   update        Check SD card for net.cfg and update network persistent network\n                 settings.\n\n   save          Save the current network parameters to the SD card.\n     [-i <val>]  Set the interface name\n                 default: eth0\n")])])]),a("h2",{attrs:{id:"replay"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#replay"}},[t._v("#")]),t._v(" replay")]),t._v(" "),a("p",[t._v("此模块用于回放 ULog 文件。")]),t._v(" "),a("h3",{attrs:{id:"实现-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现-5"}},[t._v("#")]),t._v(" 实现")]),t._v(" "),a("p",[t._v("Measures the PWM input on AUX5 (or MAIN5) via a timer capture ISR and publishes via the uORB 'pwm_input` message.")]),t._v(" "),a("p",[a("a",{attrs:{id:"pwm_input_usage"}})]),t._v(" "),a("h3",{attrs:{id:"用法-10"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用法-10"}},[t._v("#")]),t._v(" 用法")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("pwm_input <command> [arguments...]\n replay <command> [arguments...]\n Commands:\n   start         Start replay, using log file from ENV variable 'replay'\n\n   trystart      Same as 'start', but silently exit if no log file given\n\n   tryapplyparams Try to apply the parameters from the log file\n\n   stop\n\n   status        print status info\n\n   stop\n\n   status        print status info\n")])])]),a("h2",{attrs:{id:"send-event"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#send-event"}},[t._v("#")]),t._v(" send_event")]),t._v(" "),a("p",[t._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/modules/rc_update",target:"_blank",rel:"noopener noreferrer"}},[t._v("modules/rc_update"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"参数描述-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数描述-3"}},[t._v("#")]),t._v(" 参数描述")]),t._v(" "),a("p",[t._v("The replay procedure is documented on the "),a("a",{attrs:{href:"https://dev.px4.io/en/debug/system_wide_replay.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("System-wide Replay"),a("OutboundLink")],1),t._v(" page.")]),t._v(" "),a("h3",{attrs:{id:"用法-11"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用法-11"}},[t._v("#")]),t._v(" 用法")]),t._v(" "),a("p",[t._v("源码： "),a("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/modules/events",target:"_blank",rel:"noopener noreferrer"}},[t._v("modules/events"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{id:"rc_update_usage"}})]),t._v(" "),a("h3",{attrs:{id:"参数描述-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数描述-4"}},[t._v("#")]),t._v(" 参数描述")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("rc_update <command> [arguments...]\n load_mon <command> [arguments...]\n Commands:\n   start         启动后台任务\n\n   stop\n\n   status        打印状态信息\n")])])]),a("h2",{attrs:{id:"sensors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sensors"}},[t._v("#")]),t._v(" sensors")]),t._v(" "),a("p",[t._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/modules/replay",target:"_blank",rel:"noopener noreferrer"}},[t._v("modules/replay"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"用法-12"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用法-12"}},[t._v("#")]),t._v(" 用法")]),t._v(" "),a("p",[t._v("This module is used to replay ULog files.")]),t._v(" "),a("p",[t._v("There are 2 environment variables used for configuration: "),a("code",[t._v("replay")]),t._v(", which must be set to an ULog file name - it's the log file to be replayed. The second is the mode, specified via "),a("code",[t._v("replay_mode")]),t._v(":")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("replay_mode=ekf2")]),t._v(": 指定 EKF2 回放模式。 "),a("code",[t._v("replay_mode=ekf2")]),t._v(": specific EKF2 replay mode. It can only be used with the ekf2 module, but allows the replay to run as fast as possible.")]),t._v(" "),a("li",[t._v("Generic otherwise: this can be used to replay any module(s), but the replay will be done with the same speed as the log was recorded.")])]),t._v(" "),a("p",[t._v("The module is typically used together with uORB publisher rules, to specify which messages should be replayed. The replay module will just publish all messages that are found in the log. It also applies the parameters from the log.")]),t._v(" "),a("p",[t._v("The replay procedure is documented on the "),a("a",{attrs:{href:"https://dev.px4.io/master/en/debug/system_wide_replay.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("System-wide Replay"),a("OutboundLink")],1),t._v(" page.")]),t._v(" "),a("p",[a("a",{attrs:{id:"replay_usage"}})]),t._v(" "),a("h3",{attrs:{id:"参数描述-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数描述-5"}},[t._v("#")]),t._v(" 参数描述")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("replay <command> [arguments...]\n sensors <command> [arguments...]\n Commands:\n   start\n     [-h]        在 HIL 模式下启动\n\n   stop\n\n   status        打印状态信息\n")])])]),a("h2",{attrs:{id:"send-event-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#send-event-2"}},[t._v("#")]),t._v(" send_event")]),t._v(" "),a("p",[t._v("模块运行在它自己的线程中，并轮询当前选定的陀螺仪主题。")]),t._v(" "),a("h3",{attrs:{id:"实现-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现-6"}},[t._v("#")]),t._v(" 实现")]),t._v(" "),a("p",[t._v("Background process running periodically on the LP work queue to perform housekeeping tasks. It is currently only responsible for tone alarm on RC Loss.")]),t._v(" "),a("p",[t._v("The tasks can be started via CLI or uORB topics (vehicle_command from MAVLink, etc.).")]),t._v(" "),a("p",[a("a",{attrs:{id:"send_event_usage"}})]),t._v(" "),a("h3",{attrs:{id:"用法-13"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用法-13"}},[t._v("#")]),t._v(" 用法")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("send_event <command> [arguments...]\n send_event <command> [arguments...]\n Commands:\n   start         Start the background task\n\n   temperature_calibration Run temperature calibration process\n     [-g]        calibrate the gyro\n     [-a]        calibrate the accel\n     [-b]        calibrate the baro (if none of these is given, all will be\n                 calibrated)\n\n   stop\n\n   status        print status info\n")])])]),a("h2",{attrs:{id:"tune-control"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tune-control"}},[t._v("#")]),t._v(" tune_control")]),t._v(" "),a("p",[t._v("源码："),a("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/systemcmds/tune_control",target:"_blank",rel:"noopener noreferrer"}},[t._v("systemcmds/tune_control"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"参数描述-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数描述-6"}},[t._v("#")]),t._v(" 参数描述")]),t._v(" "),a("p",[t._v("The sensors module is central to the whole system. It takes low-level output from drivers, turns it into a more usable form, and publishes it for the rest of the system.")]),t._v(" "),a("p",[t._v("The provided functionality includes:")]),t._v(" "),a("ul",[a("li",[t._v("读取传感器驱动的输出 (例如，"),a("code",[t._v("sensor_gyro")]),t._v(" 等)。 如果存在多个同类型传感器，那个模块将进行投票和容错处理。 然后应用飞控板的旋转和温度校正（如果被启用）。 最终发布传感器数据：其中名为 "),a("code",[t._v("sensor_combined")]),t._v(" 的主题被系统的许多部件所使用。")]),t._v(" "),a("li",[t._v("Make sure the sensor drivers get the updated calibration parameters (scale & offset) when the parameters change or on startup. The sensor drivers use the ioctl interface for parameter updates. For this to work properly, the sensor drivers must already be running when "),a("code",[t._v("sensors")]),t._v(" is started. 传感器驱动使用 ioctl 接口获取参数更新。 为了使这一功能正常运行，当 "),a("code",[t._v("sensors")]),t._v(" 模块启动时传感器驱动必须已经处于运行状态。")]),t._v(" "),a("li",[t._v("Do preflight sensor consistency checks and publish the "),a("code",[t._v("sensor_preflight")]),t._v(" topic.")])]),t._v(" "),a("h3",{attrs:{id:"用法-14"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用法-14"}},[t._v("#")]),t._v(" 用法")]),t._v(" "),a("p",[t._v("It runs in its own thread and polls on the currently selected gyro topic.")]),t._v(" "),a("p",[a("a",{attrs:{id:"sensors_usage"}})]),t._v(" "),a("h3",{attrs:{id:"参数描述-7"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数描述-7"}},[t._v("#")]),t._v(" 参数描述")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("sensors <command> [arguments...]\n Commands:\n   start\n     [-h]        Start in HIL mode\n\n   stop\n\n   status        print status info\n")])])]),a("h2",{attrs:{id:"work-queue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#work-queue"}},[t._v("#")]),t._v(" work_queue")]),t._v(" "),a("p",[t._v("播放系统蜂鸣声 #2 ：")]),t._v(" "),a("h3",{attrs:{id:"示例-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例-4"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),a("p",[t._v("The temperature compensation module allows all of the gyro(s), accel(s), and baro(s) in the system to be temperature compensated. The module monitors the data coming from the sensors and updates the associated sensor_correction topic whenever a change in temperature is detected. The module can also be configured to perform the coeffecient calculation routine at next boot, which allows the thermal calibration coeffecients to be calculated while the vehicle undergoes a temperature cycle.")]),t._v(" "),a("p",[a("a",{attrs:{id:"temperature_compensation_usage"}})]),t._v(" "),a("h3",{attrs:{id:"用法-15"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用法-15"}},[t._v("#")]),t._v(" 用法")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("temperature_compensation <command> [arguments...]\n Commands:\n   start         Start the module, which monitors the sensors and updates the\n                 sensor_correction topic\n\n   calibrate     Run temperature calibration process\n     [-g]        calibrate the gyro\n     [-a]        calibrate the accel\n     [-b]        calibrate the baro (if none of these is given, all will be\n                 calibrated)\n\n   stop\n\n   status        print status info\n")])])]),a("h2",{attrs:{id:"tune-control-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tune-control-2"}},[t._v("#")]),t._v(" tune_control")]),t._v(" "),a("p",[t._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/systemcmds/tune_control",target:"_blank",rel:"noopener noreferrer"}},[t._v("systemcmds/tune_control"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"参数描述-8"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数描述-8"}},[t._v("#")]),t._v(" 参数描述")]),t._v(" "),a("p",[t._v("Command-line tool to control & test the (external) tunes.")]),t._v(" "),a("p",[t._v("Tunes are used to provide audible notification and warnings (e.g. when the system arms, gets position lock, etc.). The tool requires that a driver is running that can handle the tune_control uorb topic.")]),t._v(" "),a("p",[t._v("Information about the tune format and predefined system tunes can be found here: https://github.com/PX4/Firmware/blob/master/src/lib/tunes/tune_definition.desc")]),t._v(" "),a("h3",{attrs:{id:"用法-16"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用法-16"}},[t._v("#")]),t._v(" 用法")]),t._v(" "),a("p",[t._v("Play system tune #2:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("tune_control play -t 2\n")])])]),a("p",[a("a",{attrs:{id:"tune_control_usage"}})]),t._v(" "),a("h3",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('tune_control <command> [arguments...]\n Commands:\n   play          Play system tune or single note.\n     error       Play error tune\n     [-t <val>]  Play predefined system tune\n                 default: 1\n     [-f <val>]  Frequency of note in Hz (0-22kHz)\n     [-d <val>]  Duration of note in us\n     [-s <val>]  Volume level (loudness) of the note (0-100)\n                 default: 40\n     [-m <val>]  Melody in string form\n                 values: <string> - e.g. "MFT200e8a8a"\n\n   libtest       Test library\n\n   stop          Stop playback (use for repeated tunes)\n')])])]),a("h2",{attrs:{id:"work-queue-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#work-queue-2"}},[t._v("#")]),t._v(" work_queue")]),t._v(" "),a("p",[t._v("Source: "),a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/systemcmds/work_queue",target:"_blank",rel:"noopener noreferrer"}},[t._v("systemcmds/work_queue"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),a("p",[t._v("Command-line tool to show work queue status.")]),t._v(" "),a("p",[a("a",{attrs:{id:"work_queue_usage"}})]),t._v(" "),a("h3",{attrs:{id:"usage-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-2"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("work_queue <command> [arguments...]\n Commands:\n   start\n\n   stop\n\n   status        print status info\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);