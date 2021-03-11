(window.webpackJsonp=window.webpackJsonp||[]).push([[372],{1284:function(e,t,r){e.exports=r.p+"assets/img/hall_probe.07c8b646.jpg"},1285:function(e,t,r){e.exports=r.p+"assets/img/transmissive_probe.e22256c4.jpg"},2624:function(e,t,r){"use strict";r.r(t);var a=r(18),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"thunderfly-tfrpm01-revolution-counter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#thunderfly-tfrpm01-revolution-counter"}},[e._v("#")]),e._v(" ThunderFly TFRPM01 Revolution Counter")]),e._v(" "),a("p",[e._v("The "),a("a",{attrs:{href:"https://github.com/ThunderFly-aerospace/TFRPM01",target:"_blank",rel:"noopener noreferrer"}},[e._v("TFRPM01"),a("OutboundLink")],1),e._v(" tachometer is a small, and low system demanding revolution-counter.")]),e._v(" "),a("p",[e._v("The board itself does not include the actual sensor but can be used with many different sensors/probe types for revolution counting. It has an I²C connector for connecting to PX4 and is connected to the actual sensor via a 3-pin connector. It also has an LED that offers basic diagnostic information.")]),e._v(" "),a("p",[a("img",{attrs:{src:r(336),alt:"TFRPM01A"}})]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),a("p",[e._v("The TFRPM01 sensor is open-source hardware commercially available from "),a("a",{attrs:{href:"https://www.thunderfly.cz/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ThunderFly s.r.o."),a("OutboundLink")],1),e._v(" (manufacturing data is "),a("a",{attrs:{href:"https://github.com/ThunderFly-aerospace/TFRPM01",target:"_blank",rel:"noopener noreferrer"}},[e._v("available on GitHub"),a("OutboundLink")],1),e._v(").")])]),e._v(" "),a("h2",{attrs:{id:"硬件连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#硬件连接"}},[e._v("#")]),e._v(" 硬件连接")]),e._v(" "),a("p",[e._v("The board is equipped with (two through pass) I²C connectors for connecting to PX4 and has a 3-pin connector that can be used to connect to various sensors:")]),e._v(" "),a("ul",[a("li",[e._v("TFRPM01 may be connected to any I²C port.")]),e._v(" "),a("li",[e._v("TFRPM01 has a 3pin pin-header connector (with pull-up equipped input) that can be connected to different probe types.\n"),a("ul",[a("li",[e._v("The sensor/probe hardware needs a pulse signal. The signal input accepts +5V TTL logic or "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Open_collector",target:"_blank",rel:"noopener noreferrer"}},[e._v("open collector"),a("OutboundLink")],1),e._v(" outputs. The maximum pulse frequency is 20 kHz with a 50% duty cycle.")]),e._v(" "),a("li",[e._v("The probe connector provides a +5V power supply from the I²C bus, the maximum power which could be used is limited by RC filter (see schematics for details).")])])])]),e._v(" "),a("p",[e._v("TFRPM01A electronics is equipped with signaling LED that can be used to check that the probe is connected properly. The LED lights up when the pulse input is grounded or exposed to logical 0, so you can check the probe is working correctly just by manually spinning a rotor.")]),e._v(" "),a("h3",{attrs:{id:"hall-effect-sensor-probe"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hall-effect-sensor-probe"}},[e._v("#")]),e._v(" Hall-Effect Sensor Probe")]),e._v(" "),a("p",[e._v("Hall-Effect sensors (magnetically operated) are ideal for harsh environments, where dirt, dust, and water can contact the sensed rotor.")]),e._v(" "),a("p",[e._v("Many different hall effect sensors are commercially available. For example, a "),a("a",{attrs:{href:"https://m.littelfuse.com/~/media/electronics/datasheets/hall_effect_sensors/littelfuse_hall_effect_sensors_55100_datasheet.pdf.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("5100 Miniature Flange Mounting Proximity Sensor"),a("OutboundLink")],1),e._v(" is a good choice.")]),e._v(" "),a("p",[a("img",{attrs:{src:r(1284),alt:"Example of Hall effect probe"}})]),e._v(" "),a("h3",{attrs:{id:"optical-sensor-probe"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#optical-sensor-probe"}},[e._v("#")]),e._v(" Optical Sensor Probe")]),e._v(" "),a("p",[e._v("An optical sensor can also be used (and may be a better fit, depending on the measurement requirements). Both transmissive and reflective sensor types may be used for pulse generation.")]),e._v(" "),a("p",[a("img",{attrs:{src:r(1285),alt:"Example of optical transmissive probe"}})]),e._v(" "),a("h2",{attrs:{id:"software-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#software-setup"}},[e._v("#")]),e._v(" Software Setup")]),e._v(" "),a("h3",{attrs:{id:"starting-driver"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#starting-driver"}},[e._v("#")]),e._v(" Starting driver")]),e._v(" "),a("p",[e._v("The driver is not started automatically (in any airframe). You will need to start it manually, either using the "),a("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/analyze_view/mavlink_console.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("QGroundControl MAVLink Console"),a("OutboundLink")],1),e._v(" or by adding the driver to the "),a("RouterLink",{attrs:{to:"/zh/concept/system_startup.html#customizing-the-system-startup"}},[e._v("startup script")]),e._v(" on an SD card.")],1),e._v(" "),a("h4",{attrs:{id:"start-driver-from-console"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#start-driver-from-console"}},[e._v("#")]),e._v(" Start driver from console")]),e._v(" "),a("p",[e._v("Start the driver from the "),a("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/analyze_view/mavlink_console.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("console"),a("OutboundLink")],1),e._v(" using the command:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("pcf8583 start -X -b <bus number>\n")])])]),a("p",[e._v("where:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("-X")]),e._v(" means that it is an external bus.")]),e._v(" "),a("li",[a("code",[e._v("<bus number>")]),e._v(" is the bus number to which the device is connected")])]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),a("p",[e._v("The bus number in code "),a("code",[e._v("-b <bus number>")]),e._v(" may not match the bus labels on the autopilot. For example, when using CUAV V5+ or CUAV Nano:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Autopilot label")]),e._v(" "),a("th",[e._v("-b number")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("I2C1")]),e._v(" "),a("td",[e._v("-X -b 4")])]),e._v(" "),a("tr",[a("td",[e._v("I2C2")]),e._v(" "),a("td",[e._v("-X -b 2")])]),e._v(" "),a("tr",[a("td",[e._v("I2C3")]),e._v(" "),a("td",[e._v("-X -b 1")])])])]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("pcf8583 start")]),e._v(" command outputs the corresponding autopilot bus name/label for each bus number.")])]),e._v(" "),a("h3",{attrs:{id:"testing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#testing"}},[e._v("#")]),e._v(" Testing")]),e._v(" "),a("p",[e._v("You can verify the counter is working using several methods")]),e._v(" "),a("h4",{attrs:{id:"px4-nuttx-mavlink-console"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#px4-nuttx-mavlink-console"}},[e._v("#")]),e._v(" PX4 (NuttX) MAVLink Console")]),e._v(" "),a("p",[e._v("The "),a("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/analyze_view/mavlink_console.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("QGroundControl MAVLink Console"),a("OutboundLink")],1),e._v(" can also be used to check that the driver is running and the UORB topics it is outputing.")]),e._v(" "),a("p",[e._v("To check the status of the TFRPM01 driver run the command:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("pcf8583 status\n")])])]),a("p",[e._v("If the driver is running, the I²C port will be printed along with other basic parameters of the running instance. If the driver is not running it can be started started using theprocedure described above.")]),e._v(" "),a("p",[e._v("The "),a("RouterLink",{attrs:{to:"/zh/middleware/modules_command.html#listener"}},[e._v("listener")]),e._v(" command allows you to monitor RPM UORB messages from the running driver.")],1),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("listener rpm\n")])])]),a("p",[e._v("For periodic display, you can add "),a("code",[e._v("-n 50")]),e._v(" parameter after the command, which prints the next 50 messages.")]),e._v(" "),a("h4",{attrs:{id:"qgroundcontrol-mavlink-inspector"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#qgroundcontrol-mavlink-inspector"}},[e._v("#")]),e._v(" QGroundControl MAVLink Inspector")]),e._v(" "),a("p",[e._v("The QGroundControl "),a("a",{attrs:{href:"https://docs.qgroundcontrol.com/master/en/analyze_view/mavlink_inspector.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mavlink Inspector"),a("OutboundLink")],1),e._v(" can be used to observe MAVLink messages from PX4, including "),a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#RAW_RPM",target:"_blank",rel:"noopener noreferrer"}},[e._v("RAW_RPM"),a("OutboundLink")],1),e._v(" emitted by the driver:")]),e._v(" "),a("ol",[a("li",[e._v("Start the inspector from the QGC menu: "),a("strong",[e._v("Analyze tools > Mavlink Inspector")])]),e._v(" "),a("li",[e._v("Check that "),a("code",[e._v("RAW_RPM")]),e._v(" is present in the list of messages (if it is missing, check that the driver is running).")])]),e._v(" "),a("h3",{attrs:{id:"parameter-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameter-setup"}},[e._v("#")]),e._v(" Parameter Setup")]),e._v(" "),a("p",[e._v("Usually, sensors can be used without configuration, but the RPM values should correspond to multiples of real RPM.  It is because the "),a("code",[e._v("PCF8583_MAGNET")]),e._v(" parameter needs to correspond to the real number of pulses per single revolution of the sensed rotor. If needed, the following parameters should be tweaked:")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#PCF8583_POOL"}},[e._v("PCF8583_POOL")]),e._v(" — pooling interval between readout the counted number")],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#PCF8583_ADDR"}},[e._v("PCF8583_ADDR")]),e._v(" — I2C sensor address")],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#PCF8583_RESET"}},[e._v("PCF8583_RESET")]),e._v(" — Counter value where the counted number should be reset to zero.")],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#PCF8583_MAGNET"}},[e._v("PCF8583_MAGNET")]),e._v(" — Number of pulses per revolution e.g. number of magnets at a rotor disc.")],1)]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),a("p",[e._v("The parameters above appear in QGC after the driver/PX4 are restarted.")]),e._v(" "),a("p",[e._v("If the configuration parameters are not available after restart then you should check that the driver has started. It may be that the "),a("RouterLink",{attrs:{to:"/zh/peripherals/serial_configuration.html#configuration-parameter-missing-from-qgroundcontrol"}},[e._v("driver is not present in the firmware")]),e._v(", in which case it must be added to the board configuration:")],1),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("drivers/rpm/pcf8583\n")])])])])])}),[],!1,null,null,null);t.default=o.exports},336:function(e,t,r){e.exports=r.p+"assets/img/tfrpm01_electronics.8e8882e1.jpg"}}]);