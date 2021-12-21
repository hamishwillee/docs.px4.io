(window.webpackJsonp=window.webpackJsonp||[]).push([[1521],{2749:function(t,s,e){"use strict";e.r(s);var r=e(19),a=Object(r.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"rtk-gps-px4-集成"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rtk-gps-px4-集成"}},[t._v("#")]),t._v(" RTK GPS (PX4 集成)")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://en.wikipedia.org/wiki/Real_Time_Kinematic",target:"_blank",rel:"noopener noreferrer"}},[t._v("实时载波相位差分定位"),e("OutboundLink")],1),t._v(" （RTK）能够提供厘米级的定位信息。 这一章节将介绍 RTK 是如何集成到 PX4 中的。")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("RTK GPS *使用说明* 在  [硬件外设 > RTK GPS](../gps_compass/rtk_gps.md)中。 多个移动的用户可以共用同一个差分基准站发播的差分修正信息，移动用户离差分基准站的距离越近，差分定位更精确。")]),t._v(" "),e("h2",{attrs:{id:"综述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#综述"}},[t._v("#")]),t._v(" 综述")]),t._v(" "),e("p",[t._v("RTK是使用导航信号的载波相位来进行测距的，而不是使用导航信号所搭载的信息。 它依靠一个单一的参考基站站实时校正，这种校正可以与多个流动站一起工作。")]),t._v(" "),e("p",[t._v("PX4 配置 RTK 需要两个 RTK GPS 模块和一个数传。 固定在地面端的 GPS 单元叫基站（ "),e("em",[t._v("Base")]),t._v("），在空中的单元叫移动站（"),e("em",[t._v("Rover")]),t._v("）。 基站通过 USB 连接到地面站"),e("em",[t._v("QGroundControl")]),t._v("，同时使用数传将 RTCM 校正流传给无人机（使用 MAVLink "),e("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#GPS_RTCM_DATA",target:"_blank",rel:"noopener noreferrer"}},[t._v("GPS_RTCM_DATA"),e("OutboundLink")],1),t._v(" 消息）。 在自驾仪上，MAVLink消息包被解包得到RTCM的修正信息，并把这些信息发送给移动站，移动站结合修正信息最终解算得到 RTK 解。")]),t._v(" "),e("p",[t._v("数据链通常能够处理上行数据率为300字节每秒的数据（更详细的信息参考下面的"),e("a",{attrs:{href:"#uplink-datarate"}},[t._v("上行数据速率")]),t._v("章节）。")]),t._v(" "),e("h2",{attrs:{id:"支持的-rtk-gps-模块"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#支持的-rtk-gps-模块"}},[t._v("#")]),t._v(" 支持的 RTK GPS 模块")]),t._v(" "),e("p",[t._v("下面列举的这些设备是经过我们测试的可以在 "),e("RouterLink",{attrs:{to:"/zh/gps_compass/rtk_gps.html#supported-rtk-devices"}},[t._v("用户手册")]),t._v(" 找到。")],1),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),e("p",[t._v("大多数设备都有两个变体, 一个基站和一个移动站。 确保选择正确的变体。")])]),t._v(" "),e("h2",{attrs:{id:"自动配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自动配置"}},[t._v("#")]),t._v(" 自动配置")]),t._v(" "),e("p",[t._v("PX4 GPS 栈自动设置GPS 模块，通过UART或USB发送和接收正确的消息，取决于模块的连接位置 (到 "),e("em",[t._v("QGroundControl")]),t._v(" 或自驾仪)。")]),t._v(" "),e("p",[t._v("一旦自动驾驶仪接收到"),e("code",[t._v("GPS_RTCM_DATA")]),t._v(" MAVLink 消息，它就会自动将 RTCM 数据转发到连接的 GPS模块。")]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),e("p",[t._v("u-blox U-Center RTK 模块配置工具不需要/使用！")])]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),e("p",[e("em",[t._v("QGroundControl")]),t._v(" 和自驾仪固件共享相同 "),e("a",{attrs:{href:"https://github.com/PX4/GpsDrivers",target:"_blank",rel:"noopener noreferrer"}},[t._v("PX4 GPS driver stack"),e("OutboundLink")],1),t._v("。 In practice, this means that support for new protocols and/or messages only need to be added to one place.")])]),t._v(" "),e("h3",{attrs:{id:"rtcm-报文"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rtcm-报文"}},[t._v("#")]),t._v(" RTCM 报文")]),t._v(" "),e("p",[t._v("QGroundControl 配置RTK 基地站输出以下 RTCM3.2 帧, 每个帧均为 1 Hz, 除非另有说明：")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("1005")]),t._v(" - 天线参考点的站坐标 XYZ (基站位置), 0.2 Hz。")]),t._v(" "),e("li",[e("strong",[t._v("1077")]),t._v(" - 完整的 GPS 伪距、载波相、多普勒和信号强度(高分辨率)。")]),t._v(" "),e("li",[e("strong",[t._v("1087")]),t._v(" - 所有 GLONASS 伪距、载波相、多普勒和信号强度(高分辨率)。")]),t._v(" "),e("li",[e("strong",[t._v("1230")]),t._v(" - GLONASS 代码相位差。")]),t._v(" "),e("li",[e("strong",[t._v("1097")]),t._v(" - 完整伽利略伪距、运载相、多普勒和信号强度(高分辨率)")]),t._v(" "),e("li",[e("strong",[t._v("1127")]),t._v(" - 完整的北斗伪距，载波相位，多普勒和信号强度(高分辨率)")])]),t._v(" "),e("h2",{attrs:{id:"上行数据速率"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#上行数据速率"}},[t._v("#")]),t._v(" 上行数据速率")]),t._v(" "),e("p",[t._v("来自基础的原始 RTCM 消息被打包到一个 MAVLink "),e("code",[t._v("GPS_RTCM_DATA")]),t._v(" 消息，并且通过数据链接发送。 MAVLink 消息的最大长度是182字节。 根据RTCM的信息类型，MAVLink信息是不会填满的。")]),t._v(" "),e("p",[t._v("RTCM 基础位置消息(1005)长度为 22 字节， 而其他卫星的长度则因可见卫星的数量和卫星信号的数量而异（M8P等L1单元只有一个）。 在真实环境中，对于任一时刻，任何一个导航系统的可用卫星个数不超过12个，因此 300 B/s的上行速率就足够了。")]),t._v(" "),e("p",[t._v("如果使用 "),e("em",[t._v("MAVLink 1")]),t._v(" ，则不论其长度，每条 RTCM 消息都会发送182字节 "),e("code",[t._v("GPS_RTCM_DATA")]),t._v(" 消息。 因此，大约每秒上行需求是700多个字节。 这可能导致低带宽半双轨遥测模块 (如3DR Telemetry Radios) 连接的饱和。")]),t._v(" "),e("p",[t._v("如果 "),e("em",[t._v("MAVLink 2")]),t._v(" 被使用，则 "),e("code",[t._v("GPS_RTCM_DATA消息")]),t._v(" 中的所有空格将被删除。 由此产生的上行链路需求与理论值 (约 300 字节/秒) 大致相同。")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("PX4 自动切换到 MAVLink 2，如果GCS 和遥测模块支持。")])]),t._v(" "),e("p",[t._v("MAVLink 2 必须用于低带宽链接以保证 RTK 性能。 Care must be taken to make sure that the telemetry chain uses MAVLink 2 throughout. 您可以使用系统控制台上的 "),e("code",[t._v("mavlink status")]),t._v(" 命令验证协议版本：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("nsh> mavlink status\ninstance #0:\n        GCS heartbeat:  593486 us ago\n        mavlink chan: #0\n        type:           3DR RADIO\n        rssi:           219\n        remote rssi:    219\n        txbuf:          94\n        noise:          61\n        remote noise:   58\n        rx errors:      0\n        fixed:          0\n        flow control:   ON\n        rates:\n        tx: 1.285 kB/s\n        txerr: 0.000 kB/s\n        rx: 0.021 kB/s\n        rate mult: 0.366\n        accepting commands: YES\n        MAVLink version: 2\n        transport protocol: serial (/dev/ttyS1 @57600)\n")])])])])])}),[],!1,null,null,null);s.default=a.exports}}]);