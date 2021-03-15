(window.webpackJsonp=window.webpackJsonp||[]).push([[1111],{2284:function(e,t,s){"use strict";s.r(t);var a=s(18),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"rtk-gps-背景知识"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rtk-gps-背景知识"}},[e._v("#")]),e._v(" RTK GPS（背景知识）")]),e._v(" "),s("p",[e._v("实时载波相位差分定位能够提供厘米级的定位信息。 这一章节将介绍RTK是如何集成到PX4中的。")]),e._v(" "),s("p",[e._v("RTK是使用导航信号的载波相位来进行测距的，而不是使用导航信号所搭载的信息。 多个移动的用户可以共用同一个差分基准站发播的差分修正信息，移动用户离差分基准站的距离越近，差分定位更精确。")]),e._v(" "),s("h2",{attrs:{id:"综述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#综述"}},[e._v("#")]),e._v(" 综述")]),e._v(" "),s("p",[e._v("在PX4系统中，为达到RTK的差分效果，需要2个RTK GPS模块和一个数据链路。 固定在地面的RTK GPS模块称作基站，另一个在空中的模块称作移动站。")]),e._v(" "),s("p",[e._v("Two RTK GPS modules and a datalink are required to setup RTK with PX4. The fixed-position ground-based GPS unit is called the "),s("em",[e._v("Base")]),e._v(" and the in-air unit is called the "),s("em",[e._v("Rover")]),e._v(". The Base unit connects to "),s("em",[e._v("QGroundControl")]),e._v(" (via USB) and uses the datalink to stream RTCM corrections to the vehicle (using the MAVLink "),s("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#GPS_RTCM_DATA",target:"_blank",rel:"noopener noreferrer"}},[e._v("GPS_RTCM_DATA"),s("OutboundLink")],1),e._v(" message). On the autopilot, the MAVLink packets are unpacked and sent to the Rover unit, where they are processed to get the RTK solution.")]),e._v(" "),s("p",[e._v("PX4目前仅支持u-blox M8P单频（L1频点）RTK接收机。")]),e._v(" "),s("h2",{attrs:{id:"支持的-rtk-gps-模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#支持的-rtk-gps-模块"}},[e._v("#")]),e._v(" 支持的 RTK GPS 模块")]),e._v(" "),s("p",[e._v("The list of devices that we have tested can be found "),s("RouterLink",{attrs:{to:"/zh/gps_compass/rtk_gps.html#supported-rtk-devices"}},[e._v("in the user guide")]),e._v(".")],1),e._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),s("p",[e._v("Most devices come with two variants, a base and a rover. Make sure to select the correct variant.")])]),e._v(" "),s("h2",{attrs:{id:"自动配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自动配置"}},[e._v("#")]),e._v(" 自动配置")]),e._v(" "),s("p",[e._v("The PX4 GPS stack automatically sets up the GPS modules to send and receive the correct messages over the UART or USB, depending on where the module is connected (to "),s("em",[e._v("QGroundControl")]),e._v(" or the autopilot).")]),e._v(" "),s("p",[e._v("QGroundControl配置RTK基站输出依据RTCM3.2框架，每帧为1 Hz：")]),e._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),s("p",[e._v("The u-blox U-Center RTK module configuration tool is not needed/used!")])]),e._v(" "),s("p",[e._v("The RTCM Base Position message (1005) is of length 22 bytes, while the others are all of variable length depending on the number of visible satellites and the number of signals from the satellite (only 1 for L1 units like M8P). Since at a given time, the "),s("em",[e._v("maximum")]),e._v(" number of satellites visible from any single constellation is 12, under real-world conditions, theoretically an uplink rate of 300 B/s is sufficient. In practice, this means that support for new protocols and/or messages only need to be added to one place.\n:::")]),e._v(" "),s("h3",{attrs:{id:"rtcm-报文"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rtcm-报文"}},[e._v("#")]),e._v(" RTCM 报文")]),e._v(" "),s("p",[e._v("QGroundControl configures the RTK base station to output the following RTCM3.2 frames, each with 1 Hz, unless otherwise stated:")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("1005")]),e._v(" - Station coordinates XYZ for antenna reference point (Base position), 0.2 Hz.")]),e._v(" "),s("li",[s("strong",[e._v("1077")]),e._v(" - Full GPS pseudo-ranges, carrier phases, Doppler and signal strength (high resolution).")]),e._v(" "),s("li",[s("strong",[e._v("1087")]),e._v(" - Full GLONASS pseudo-ranges, carrier phases, Doppler and signal strength (high resolution).")]),e._v(" "),s("li",[s("strong",[e._v("1230")]),e._v(" - GLONASS code-phase biases.")]),e._v(" "),s("li",[s("strong",[e._v("1097")]),e._v(" - Full Galileo pseudo-ranges, carrier phases, Doppler and signal strength (high resolution)")]),e._v(" "),s("li",[s("strong",[e._v("1127")]),e._v(" - Full BeiDou pseudo-ranges, carrier phases, Doppler and signal strength (high resolution)")])]),e._v(" "),s("h2",{attrs:{id:"上行数据速率"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#上行数据速率"}},[e._v("#")]),e._v(" 上行数据速率")]),e._v(" "),s("p",[e._v("The raw RTCM messages from the base are packed into a MAVLink "),s("code",[e._v("GPS_RTCM_DATA")]),e._v(" message and sent over the datalink. The maximum length of each MAVLink message is 182 bytes. Depending on the RTCM message, the MAVLink message is almost never completely filled.")]),e._v(" "),s("p",[e._v("MAVLink 2 must be used on low-bandwidth links for good RTK performance. Care must be taken to make sure that the telemetry chain uses MAVLink 2 throughout. You can verify the protocol version by using the "),s("code",[e._v("mavlink status")]),e._v(" command on the system console: 必须注意确保数传链在整个过程中使用 MAVLink 2。")]),e._v(" "),s("p",[e._v("If "),s("em",[e._v("MAVLink 1")]),e._v(" is used, a 182-byte "),s("code",[e._v("GPS_RTCM_DATA")]),e._v(" message is sent for every RTCM message, irrespective of its length. As a result the approximate uplink requirement is around 700+ bytes per second. This can lead to link saturation on low-bandwidth half-duplex telemetry modules (e.g. 3DR Telemetry Radios).")]),e._v(" "),s("p",[e._v("If "),s("em",[e._v("MAVLink 2")]),e._v(" is used then any empty space in the "),s("code",[e._v("GPS_RTCM_DATA message")]),e._v(" is removed. The resulting uplink requirement is about the same as the theoretical value (~300 bytes per second).")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("PX4 automatically switches to MAVLink 2 if the GCS and telemetry modules support it.")])]),e._v(" "),s("p",[e._v("MAVLink 2 must be used on low-bandwidth links for good RTK performance. Care must be taken to make sure that the telemetry chain uses MAVLink 2 throughout. You can verify the protocol version by using the "),s("code",[e._v("mavlink status")]),e._v(" command on the system console:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("nsh> mavlink status\ninstance #0:\n        GCS heartbeat:  593486 us ago\n        mavlink chan: #0\n        type:           3DR RADIO\n        rssi:           219\n        remote rssi:    219\n        txbuf:          94\n        noise:          61\n        remote noise:   58\n        rx errors:      0\n        fixed:          0\n        flow control:   ON\n        rates:\n        tx: 1.285 kB/s\n        txerr: 0.000 kB/s\n        rx: 0.021 kB/s\n        rate mult: 0.366\n        accepting commands: YES\n        MAVLink version: 2\n        transport protocol: serial (/dev/ttyS1 @57600)\n")])])])])}),[],!1,null,null,null);t.default=o.exports}}]);