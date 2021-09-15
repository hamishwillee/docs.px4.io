(window.webpackJsonp=window.webpackJsonp||[]).push([[1588],{2978:function(t,a,s){"use strict";s.r(a);var r=s(19),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"模块参考-控制器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模块参考-控制器"}},[t._v("#")]),t._v(" 模块参考：控制器")]),t._v(" "),s("h2",{attrs:{id:"odule-nam"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#odule-nam"}},[t._v("#")]),t._v(" ODULE_NAM")]),t._v(" "),s("p",[t._v("Source: "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/modules/control_allocator",target:"_blank",rel:"noopener noreferrer"}},[t._v("modules/control_allocator"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#描述"}},[t._v("#")]),t._v(" 描述")]),t._v(" "),s("p",[t._v("This implements control allocation. It takes torque and thrust setpoints as inputs and outputs actuator setpoint messages.")]),t._v(" "),s("p",[s("a",{attrs:{id:"ODULE_NAM_usage"}})]),t._v(" "),s("h3",{attrs:{id:"实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现"}},[t._v("#")]),t._v(" 实现")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("ODULE_NAM <command> [arguments...]\n wind_estimator &lt;command&gt; [arguments...]\n Commands:\n   start\n\n   stop\n\n   status        打印状态信息\n")])])]),s("h2",{attrs:{id:"fw-att-control"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fw-att-control"}},[t._v("#")]),t._v(" fw_att_control")]),t._v(" "),s("p",[t._v("This implements the multicopter attitude and rate controller. It takes attitude setpoints ("),s("code",[t._v("vehicle_attitude_setpoint")]),t._v(") or rate setpoints (in acro mode via "),s("code",[t._v("manual_control_setpoint")]),t._v(" topic) as inputs and outputs actuator control messages.")]),t._v(" "),s("h3",{attrs:{id:"描述-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#描述-2"}},[t._v("#")]),t._v(" 描述")]),t._v(" "),s("p",[t._v("This implements the airship attitude and rate controller. Ideally it would take attitude setpoints ("),s("code",[t._v("vehicle_attitude_setpoint")]),t._v(") or rate setpoints (in acro mode via "),s("code",[t._v("manual_control_setpoint")]),t._v(" topic) as inputs and outputs actuator control messages.")]),t._v(" "),s("p",[t._v("源码："),s("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/modules/fw_att_control",target:"_blank",rel:"noopener noreferrer"}},[t._v("modules/fw_att_control"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"参数描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数描述"}},[t._v("#")]),t._v(" 参数描述")]),t._v(" "),s("p",[t._v("To reduce control latency, the module directly polls on the gyro topic published by the IMU driver.")]),t._v(" "),s("p",[s("a",{attrs:{id:"airship_att_control_usage"}})]),t._v(" "),s("h3",{attrs:{id:"描述-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#描述-3"}},[t._v("#")]),t._v(" 描述")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("airship_att_control <command> [arguments...]\n Commands:\n   start\n\n   stop\n\n   status        print status info\n")])])]),s("h2",{attrs:{id:"fw-pos-control-l1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fw-pos-control-l1"}},[t._v("#")]),t._v(" fw_pos_control_l1")]),t._v(" "),s("p",[t._v("源码："),s("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/modules/fw_pos_control_l1",target:"_blank",rel:"noopener noreferrer"}},[t._v("modules/fw_pos_control_l1"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"参数描述-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数描述-2"}},[t._v("#")]),t._v(" 参数描述")]),t._v(" "),s("p",[t._v("This implements the setpoint generation for all modes. It takes the current mode state of the vehicle as input and outputs setpoints for controllers.")]),t._v(" "),s("p",[s("a",{attrs:{id:"flight_mode_manager_usage"}})]),t._v(" "),s("h3",{attrs:{id:"用法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用法"}},[t._v("#")]),t._v(" 用法")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("fw_pos_control_l1 <command> [arguments...]\n Commands:\n   start\n\n   stop\n\n   status        打印状态信息\n Commands:\n   start\n\n   stop\n\n   status        print status info\n")])])]),s("h2",{attrs:{id:"mc-att-control"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mc-att-control"}},[t._v("#")]),t._v(" mc_att_control")]),t._v(" "),s("p",[t._v("源码："),s("a",{attrs:{href:"https://github.com/PX4/Firmware/tree/master/src/modules/mc_att_control",target:"_blank",rel:"noopener noreferrer"}},[t._v("modules/mc_att_control"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"描述-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#描述-4"}},[t._v("#")]),t._v(" 描述")]),t._v(" "),s("p",[t._v("fw_att_control is the fixed wing attitude controller.")]),t._v(" "),s("p",[s("a",{attrs:{id:"fw_att_control_usage"}})]),t._v(" "),s("h3",{attrs:{id:"用法-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用法-2"}},[t._v("#")]),t._v(" 用法")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("fw_att_control <command> [arguments...]\n Commands:\n   start\n     [vtol]      VTOL mode\n\n   stop\n\n   status        print status info\n")])])]),s("h2",{attrs:{id:"mc-pos-control"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mc-pos-control"}},[t._v("#")]),t._v(" mc_pos_control")]),t._v(" "),s("p",[t._v("The controller has two loops: a P loop for angular error and a PID loop for angular rate error.")]),t._v(" "),s("h3",{attrs:{id:"描述-5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#描述-5"}},[t._v("#")]),t._v(" 描述")]),t._v(" "),s("p",[t._v("fw_pos_control_l1 is the fixed wing position controller.")]),t._v(" "),s("p",[s("a",{attrs:{id:"fw_pos_control_l1_usage"}})]),t._v(" "),s("h3",{attrs:{id:"用法-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用法-3"}},[t._v("#")]),t._v(" 用法")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("mc_pos_control <command> [arguments...]\n Commands:\n   start\n\n   stop\n\n   status        打印状态信息\n Commands:\n   start\n     [vtol]      VTOL mode\n\n   stop\n\n   status        print status info\n")])])]),s("h2",{attrs:{id:"mc-att-control-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mc-att-control-2"}},[t._v("#")]),t._v(" mc_att_control")]),t._v(" "),s("p",[t._v("https://www.research-collection.ethz.ch/bitstream/handle/20.500.11850/154099/eth-7387-01.pdf")]),t._v(" "),s("h3",{attrs:{id:"参数描述-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数描述-3"}},[t._v("#")]),t._v(" 参数描述")]),t._v(" "),s("p",[t._v("This implements the multicopter attitude controller. It takes attitude setpoints ("),s("code",[t._v("vehicle_attitude_setpoint")]),t._v(") as inputs and outputs a rate setpoint.")]),t._v(" "),s("p",[t._v("The controller has a P loop for angular error")]),t._v(" "),s("p",[t._v("The different internal modes are implemented as separate classes that inherit from a common base class "),s("code",[t._v("NavigatorMode")]),t._v(". The member "),s("code",[t._v("_navigation_mode")]),t._v(" contains the current active mode.")]),t._v(" "),s("p",[t._v("https://www.research-collection.ethz.ch/bitstream/handle/20.500.11850/154099/eth-7387-01.pdf")]),t._v(" "),s("p",[s("a",{attrs:{id:"mc_att_control_usage"}})]),t._v(" "),s("h3",{attrs:{id:"用法-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用法-4"}},[t._v("#")]),t._v(" 用法")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("mc_att_control <command> [arguments...]\n Commands:\n   start\n     [vtol]      VTOL mode\n\n   stop\n\n   status        print status info\n")])])]),s("h2",{attrs:{id:"navigator"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#navigator"}},[t._v("#")]),t._v(" navigator")]),t._v(" "),s("p",[t._v("Source: "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/modules/mc_pos_control",target:"_blank",rel:"noopener noreferrer"}},[t._v("modules/mc_pos_control"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"参数描述-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数描述-4"}},[t._v("#")]),t._v(" 参数描述")]),t._v(" "),s("p",[t._v("The controller has two loops: a P loop for position error and a PID loop for velocity error. Output of the velocity controller is thrust vector that is split to thrust direction (i.e. rotation matrix for multicopter orientation) and thrust scalar (i.e. multicopter thrust itself).")]),t._v(" "),s("p",[t._v("The controller doesn't use Euler angles for its work, they are generated only for more human-friendly control and logging.")]),t._v(" "),s("p",[s("a",{attrs:{id:"mc_pos_control_usage"}})]),t._v(" "),s("h3",{attrs:{id:"实现-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现-2"}},[t._v("#")]),t._v(" 实现")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("mc_pos_control <command> [arguments...]\n navigator <command> [arguments...]\n Commands:\n   start\n\n   fencefile     load a geofence file from SD card, stored at etc/geofence.txt\n\n   fake_traffic  publishes 3 fake transponder_report_s uORB messages\n\n   stop\n\n   status        print status info\n")])])]),s("h2",{attrs:{id:"mc-rate-control"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mc-rate-control"}},[t._v("#")]),t._v(" mc_rate_control")]),t._v(" "),s("p",[t._v("Source: "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/modules/mc_rate_control",target:"_blank",rel:"noopener noreferrer"}},[t._v("modules/mc_rate_control"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"用法-5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用法-5"}},[t._v("#")]),t._v(" 用法")]),t._v(" "),s("p",[t._v("This implements the multicopter rate controller. It takes rate setpoints (in acro mode via "),s("code",[t._v("manual_control_setpoint")]),t._v(" topic) as inputs and outputs actuator control messages.")]),t._v(" "),s("p",[t._v("The controller has a PID loop for angular rate error.")]),t._v(" "),s("p",[s("a",{attrs:{id:"mc_rate_control_usage"}})]),t._v(" "),s("h3",{attrs:{id:"参数描述-5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数描述-5"}},[t._v("#")]),t._v(" 参数描述")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("mc_rate_control <command> [arguments...]\n Commands:\n   start\n     [vtol]      VTOL mode\n\n   stop\n\n   status        print status info\n")])])]),s("h2",{attrs:{id:"navigator-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#navigator-2"}},[t._v("#")]),t._v(" navigator")]),t._v(" "),s("p",[t._v("Source: "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/modules/navigator",target:"_blank",rel:"noopener noreferrer"}},[t._v("modules/navigator"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"实现-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现-3"}},[t._v("#")]),t._v(" 实现")]),t._v(" "),s("p",[t._v("Module that is responsible for autonomous flight modes. This includes missions (read from dataman), takeoff and RTL. It is also responsible for geofence violation checking.")]),t._v(" "),s("h3",{attrs:{id:"示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),s("p",[t._v("The different internal modes are implemented as separate classes that inherit from a common base class "),s("code",[t._v("NavigatorMode")]),t._v(". The member "),s("code",[t._v("_navigation_mode")]),t._v(" contains the current active mode.")]),t._v(" "),s("p",[t._v("Navigator publishes position setpoint triplets ("),s("code",[t._v("position_setpoint_triplet_s")]),t._v("), which are then used by the position controller.")]),t._v(" "),s("p",[s("a",{attrs:{id:"navigator_usage"}})]),t._v(" "),s("h3",{attrs:{id:"用法-6"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用法-6"}},[t._v("#")]),t._v(" 用法")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("navigator <command> [arguments...]\n Commands:\n   start\n\n   fencefile     load a geofence file from SD card, stored at etc/geofence.txt\n\n   fake_traffic  publishes 4 fake transponder_report_s uORB messages\n\n   stop\n\n   status        print status info\n")])])]),s("h2",{attrs:{id:"rover-pos-control"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rover-pos-control"}},[t._v("#")]),t._v(" rover_pos_control")]),t._v(" "),s("p",[t._v("CLI 命令行用法示例：")]),t._v(" "),s("h3",{attrs:{id:"参数描述-6"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数描述-6"}},[t._v("#")]),t._v(" 参数描述")]),t._v(" "),s("p",[t._v("Controls the position of a ground rover using an L1 controller.")]),t._v(" "),s("p",[t._v("Publishes "),s("code",[t._v("actuator_controls_0")]),t._v(" messages at IMU_GYRO_RATEMAX.")]),t._v(" "),s("h3",{attrs:{id:"实现-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现-4"}},[t._v("#")]),t._v(" 实现")]),t._v(" "),s("p",[t._v("Currently, this implementation supports only a few modes:")]),t._v(" "),s("ul",[s("li",[t._v("Full manual: Throttle and yaw controls are passed directly through to the actuators")]),t._v(" "),s("li",[t._v("Auto mission: The rover runs missions")]),t._v(" "),s("li",[t._v("Loiter: The rover will navigate to within the loiter radius, then stop the motors")])]),t._v(" "),s("h3",{attrs:{id:"示例-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例-2"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),s("p",[t._v("CLI usage example:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("rover_pos_control start\nrover_pos_control status\nrover_pos_control stop\n")])])]),s("p",[s("a",{attrs:{id:"rover_pos_control_usage"}})]),t._v(" "),s("h3",{attrs:{id:"用法-7"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用法-7"}},[t._v("#")]),t._v(" 用法")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("rover_pos_control <command> [arguments...]\n Commands:\n   start\n\n   stop\n\n   status        print status info\n")])])]),s("h2",{attrs:{id:"uuv-att-control"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#uuv-att-control"}},[t._v("#")]),t._v(" uuv_att_control")]),t._v(" "),s("p",[t._v("CLI 命令行用法示例：")]),t._v(" "),s("h3",{attrs:{id:"参数描述-7"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数描述-7"}},[t._v("#")]),t._v(" 参数描述")]),t._v(" "),s("p",[t._v("Controls the attitude of an unmanned underwater vehicle (UUV).")]),t._v(" "),s("p",[t._v("fw_att_control 是固定翼姿态控制器。")]),t._v(" "),s("h3",{attrs:{id:"用法-8"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用法-8"}},[t._v("#")]),t._v(" 用法")]),t._v(" "),s("p",[t._v("Currently, this implementation supports only a few modes:")]),t._v(" "),s("ul",[s("li",[t._v("Full manual: Roll, pitch, yaw, and throttle controls are passed directly through to the actuators")]),t._v(" "),s("li",[t._v("Auto mission: The uuv runs missions")])]),t._v(" "),s("h3",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),s("p",[t._v("CLI usage example:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("uuv_att_control start\nuuv_att_control status\nuuv_att_control stop\n")])])]),s("p",[s("a",{attrs:{id:"uuv_att_control_usage"}})]),t._v(" "),s("h3",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("uuv_att_control <command> [arguments...]\n Commands:\n   start\n\n   stop\n\n   status        print status info\n")])])]),s("h2",{attrs:{id:"uuv-pos-control"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#uuv-pos-control"}},[t._v("#")]),t._v(" uuv_pos_control")]),t._v(" "),s("p",[t._v("Source: "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/modules/uuv_pos_control",target:"_blank",rel:"noopener noreferrer"}},[t._v("modules/uuv_pos_control"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),s("p",[t._v("Controls the attitude of an unmanned underwater vehicle (UUV). Publishes "),s("code",[t._v("actuator_controls_0")]),t._v(" messages at a constant 250Hz.")]),t._v(" "),s("h3",{attrs:{id:"implementation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[t._v("#")]),t._v(" Implementation")]),t._v(" "),s("p",[t._v("Currently, this implementation supports only a few modes:")]),t._v(" "),s("ul",[s("li",[t._v("Full manual: Roll, pitch, yaw, and throttle controls are passed directly through to the actuators")]),t._v(" "),s("li",[t._v("Auto mission: The uuv runs missions")])]),t._v(" "),s("h3",{attrs:{id:"examples-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples-2"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),s("p",[t._v("CLI usage example:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("uuv_pos_control start\nuuv_pos_control status\nuuv_pos_control stop\n")])])]),s("p",[s("a",{attrs:{id:"uuv_pos_control_usage"}})]),t._v(" "),s("h3",{attrs:{id:"usage-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage-2"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("uuv_pos_control <command> [arguments...]\n Commands:\n   start\n\n   stop\n\n   status        print status info\n")])])]),s("h2",{attrs:{id:"vtol-att-control"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vtol-att-control"}},[t._v("#")]),t._v(" vtol_att_control")]),t._v(" "),s("p",[t._v("Source: "),s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/modules/vtol_att_control",target:"_blank",rel:"noopener noreferrer"}},[t._v("modules/vtol_att_control"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"description-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description-2"}},[t._v("#")]),t._v(" Description")]),t._v(" "),s("p",[t._v("fw_att_control is the fixed wing attitude controller.")]),t._v(" "),s("p",[s("a",{attrs:{id:"vtol_att_control_usage"}})]),t._v(" "),s("h3",{attrs:{id:"usage-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage-3"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("vtol_att_control <command> [arguments...]\n Commands:\n\n   stop\n\n   status        print status info\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);