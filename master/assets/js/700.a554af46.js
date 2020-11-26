(window.webpackJsonp=window.webpackJsonp||[]).push([[700],{1416:function(e,t,s){"use strict";s.r(t);var a=s(18),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"rtk-gps-px4-integration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rtk-gps-px4-integration"}},[e._v("#")]),e._v(" RTK GPS (PX4 Integration)")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Real_Time_Kinematic",target:"_blank",rel:"noopener noreferrer"}},[e._v("Real Time Kinematic"),s("OutboundLink")],1),e._v(" (RTK) provides centimeter-level GPS accuracy.\nThis page explains how RTK is integrated into PX4.")]),e._v(" "),s("blockquote",[s("p",[s("strong",[e._v("Note")]),e._v(" Instructions for "),s("em",[e._v("using")]),e._v(" RTK GPS are provided in "),s("RouterLink",{attrs:{to:"/en/gps_compass/rtk_gps.html"}},[e._v("Peripheral Hardware > RTK GPS")]),e._v(".")],1)]),e._v(" "),s("h2",{attrs:{id:"overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),s("p",[e._v("RTK uses measurements of the phase of the signal's carrier wave, rather than the information content of the signal.\nIt relies on a single reference station to provide real-time corrections, which can work with multiple mobile stations.")]),e._v(" "),s("p",[e._v("Two RTK GPS modules and a datalink are required to setup RTK with PX4.\nThe fixed-position ground-based GPS unit is called the "),s("em",[e._v("Base")]),e._v(" and the in-air unit is called the "),s("em",[e._v("Rover")]),e._v(".\nThe Base unit connects to "),s("em",[e._v("QGroundControl")]),e._v(" (via USB) and uses the datalink to stream RTCM corrections to the vehicle (using the MAVLink "),s("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#GPS_RTCM_DATA",target:"_blank",rel:"noopener noreferrer"}},[e._v("GPS_RTCM_DATA"),s("OutboundLink")],1),e._v(" message).\nOn the autopilot, the MAVLink packets are unpacked and sent to the Rover unit, where they are processed to get the RTK solution.")]),e._v(" "),s("p",[e._v("The datalink should typically be able to handle an uplink rate of 300 bytes per second (see the "),s("a",{attrs:{href:"#uplink-datarate"}},[e._v("Uplink Datarate")]),e._v(" section below for more information).")]),e._v(" "),s("h2",{attrs:{id:"supported-rtk-gps-modules"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#supported-rtk-gps-modules"}},[e._v("#")]),e._v(" Supported RTK GPS modules")]),e._v(" "),s("p",[e._v("PX4 currently only supports the single-frequency (L1) u-blox M8P based GNSS receivers for RTK.")]),e._v(" "),s("p",[e._v("A number of manufacturers have created products using this receiver.\nThe list of devices that we have tested can be found "),s("RouterLink",{attrs:{to:"/en/gps_compass/rtk_gps.html#supported-rtk-devices"}},[e._v("in the user guide")]),e._v(".")],1),e._v(" "),s("blockquote",[s("p",[s("strong",[e._v("Note")]),e._v(" u-blox has two variants of the M8P chip, the M8P-0 and the M8P-2.\nThe M8P-0 can only be used as Rover, not as Base, whereas the M8P-2 can be used both as Rover or as Base.")])]),e._v(" "),s("h2",{attrs:{id:"automatic-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#automatic-configuration"}},[e._v("#")]),e._v(" Automatic Configuration")]),e._v(" "),s("p",[e._v("The PX4 GPS stack automatically sets up the u-blox M8P modules to send and receive the correct messages over the UART or USB, depending on where the module is connected (to "),s("em",[e._v("QGroundControl")]),e._v(" or the autopilot).")]),e._v(" "),s("p",[e._v("As soon as the autopilot receives "),s("code",[e._v("GPS_RTCM_DATA")]),e._v(" MAVLink messages, it automatically forwards the RTCM data to the attached GPS module.")]),e._v(" "),s("blockquote",[s("p",[s("strong",[e._v("Note")]),e._v(" The U-Center RTK module configuration tool is not needed/used!")])]),e._v(" "),s("p",[s("span")]),e._v(" "),s("blockquote",[s("p",[s("strong",[e._v("Note")]),e._v(" Both "),s("em",[e._v("QGroundControl")]),e._v(" and the autopilot firmware share the same "),s("a",{attrs:{href:"https://github.com/PX4/GpsDrivers",target:"_blank",rel:"noopener noreferrer"}},[e._v("PX4 GPS driver stack"),s("OutboundLink")],1),e._v(".\nIn practice, this means that support for new protocols and/or messages only need to be added to one place.")])]),e._v(" "),s("h3",{attrs:{id:"rtcm-messages"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rtcm-messages"}},[e._v("#")]),e._v(" RTCM messages")]),e._v(" "),s("p",[e._v("QGroundControl configures the RTK base station to output the following RTCM3.2 frames, each with 1 Hz:")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("1005")]),e._v(" - Station coordinates XYZ for antenna reference point (Base position).")]),e._v(" "),s("li",[s("strong",[e._v("1077")]),e._v(" - Full GPS pseudo-ranges, carrier phases, Doppler and signal strength (high resolution).")]),e._v(" "),s("li",[s("strong",[e._v("1087")]),e._v(" - Full GLONASS pseudo-ranges, carrier phases, Doppler and signal strength (high resolution).")])]),e._v(" "),s("h2",{attrs:{id:"uplink-datarate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#uplink-datarate"}},[e._v("#")]),e._v(" Uplink datarate")]),e._v(" "),s("p",[e._v("The raw RTCM messages from the base are packed into a MAVLink "),s("code",[e._v("GPS_RTCM_DATA")]),e._v(" message and sent over the datalink.\nThe maximum length of each MAVLink message is 182 bytes. Depending on the RTCM message, the MAVLink message is almost never completely filled.")]),e._v(" "),s("p",[e._v("The RTCM Base Position message (1005) is of length 22 bytes, while the others are all of variable length depending on the number of visible satellites and the number of signals from the satellite (only 1 for L1 units like M8P).\nSince at a given time, the "),s("em",[e._v("maximum")]),e._v(" number of satellites visible from any single constellation is 12, under real-world conditions, theoretically an uplink rate of 300 B/s is sufficient.")]),e._v(" "),s("p",[e._v("If "),s("em",[e._v("MAVLink 1")]),e._v(" is used, a 182-byte "),s("code",[e._v("GPS_RTCM_DATA")]),e._v(" message is sent for every RTCM message, irrespective of its length.\nAs a result the approximate uplink requirement is around 700+ bytes per second.\nThis can lead to link saturation on low-bandwidth half-duplex telemetry modules (e.g. 3DR Telemetry Radios).")]),e._v(" "),s("p",[e._v("If "),s("em",[e._v("MAVLink 2")]),e._v(" is used then any empty space in the "),s("code",[e._v("GPS_RTCM_DATA message")]),e._v(" is removed.\nThe resulting uplink requirement is about the same as the theoretical value (~300 bytes per second).")]),e._v(" "),s("blockquote",[s("p",[s("strong",[e._v("Tip")]),e._v(" PX4 automatically switches to MAVLink 2 if the GCS and telemetry modules support it.")])]),e._v(" "),s("p",[e._v("MAVLink 2 must be used on low-bandwidth links for good RTK performance. Care must be taken to make sure that the telemetry chain uses MAVLink 2 throughout.\nYou can verify the protocol version by using the "),s("code",[e._v("mavlink status")]),e._v(" command on the system console:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("nsh> mavlink status\ninstance #0:\n        GCS heartbeat:  593486 us ago\n        mavlink chan: #0\n        type:           3DR RADIO\n        rssi:           219\n        remote rssi:    219\n        txbuf:          94\n        noise:          61\n        remote noise:   58\n        rx errors:      0\n        fixed:          0\n        flow control:   ON\n        rates:\n        tx: 1.285 kB/s\n        txerr: 0.000 kB/s\n        rx: 0.021 kB/s\n        rate mult: 0.366\n        accepting commands: YES\n        MAVLink version: 2\n        transport protocol: serial (/dev/ttyS1 @57600)\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);