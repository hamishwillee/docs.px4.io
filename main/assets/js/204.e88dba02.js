(window.webpackJsonp=window.webpackJsonp||[]).push([[204],{1405:function(e,t,a){e.exports=a.p+"assets/img/asterx_m3_and_rib_board.7860dcf5.png"},1406:function(e,t,a){e.exports=a.p+"assets/img/rib.9f43558c.png"},1407:function(e,t,a){e.exports=a.p+"assets/img/rib_wiring.b5ee538b.png"},2743:function(e,t,a){"use strict";a.r(t);var r=a(19),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"asterx-oem-with-robotics-interface-board"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#asterx-oem-with-robotics-interface-board"}},[e._v("#")]),e._v(" AsteRx OEM with Robotics Interface Board")]),e._v(" "),r("p",[e._v("Septentrio is the leading worldwide supplier of OEM GPS / GNSS receivers. Septentrio OEM receivers deliver accurate and reliable positions to demanding industrial applications in a small, light-weight form factor. There are several dual antenna receiver options that allows for GPS information to be fused into the heading (other attitude information can also be determined, but is not fused by PX4).")]),e._v(" "),r("p",[e._v("Inertial sensor integration of the AsteRx-i family offers a full attitude solution (heading, pitch and roll) synchronized with accurate positioning.")]),e._v(" "),r("p",[e._v("The Robotics Interface Board coupled with Septentrio GNSS receiver boards provides common interfaces like USB, ethernet, on board logging and other functionalities designed for rapid prototyping, product evaluation or efficient integration.")]),e._v(" "),r("p",[r("img",{attrs:{src:a(1405),alt:"Septentrio Robotics Interface Board"}})]),e._v(" "),r("h2",{attrs:{id:"key-features"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#key-features"}},[e._v("#")]),e._v(" Key Features")]),e._v(" "),r("ul",[r("li",[e._v("Credit-card size boards with low power consumption")]),e._v(" "),r("li",[e._v("Easy-to-integrate into any system")]),e._v(" "),r("li",[e._v("Best-in-class RTK performance with true multi-constellation, multi-frequency GNSS technology")]),e._v(" "),r("li",[e._v("Advanced Interference Mitigation (AIM+) anti-jamming and anti-spoofing technology")]),e._v(" "),r("li",[e._v("Resilient to vibrations and shocks")]),e._v(" "),r("li",[e._v("44 pins I/O connector for autopilots such as Pixhawk")]),e._v(" "),r("li",[e._v("On-board logging")]),e._v(" "),r("li",[e._v("Micro USB connector")]),e._v(" "),r("li",[e._v("Size: 71.53 x 47.5 x 18.15 mm")]),e._v(" "),r("li",[e._v("Weight = 50g")])]),e._v(" "),r("h2",{attrs:{id:"purchase"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#purchase"}},[e._v("#")]),e._v(" Purchase")]),e._v(" "),r("p",[e._v("All AsteRx receivers and Robotic Interface Boards can be purchased from the Septentrio webshop:")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://web.septentrio.com/l/858493/2022-04-19/xgrrz",target:"_blank",rel:"noopener noreferrer"}},[e._v("AsteRx-m3 Pro"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://web.septentrio.com/l/858493/2022-04-19/xgrs3",target:"_blank",rel:"noopener noreferrer"}},[e._v("AsteRx-m3 Pro+"),r("OutboundLink")],1)])]),e._v(" "),r("p",[e._v("Other PX4 supported devices from Septentrio:")]),e._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/ko/gps_compass/septentrio_mosaic-go.html"}},[e._v("mosaic-go evaluation kit")])],1)]),e._v(" "),r("h2",{attrs:{id:"interfaces"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#interfaces"}},[e._v("#")]),e._v(" Interfaces")]),e._v(" "),r("p",[r("img",{attrs:{src:a(1406),alt:"Septentrio Robotics Interface Board Fritzing drawing"}})]),e._v(" "),r("h3",{attrs:{id:"usb"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#usb"}},[e._v("#")]),e._v(" USB")]),e._v(" "),r("p",[r("em",[e._v("Connector type: micro-USB type B.")])]),e._v(" "),r("p",[e._v("The micro USB type B connector can be attached to a PC to power the receiver and to communicate with it over its USB port.")]),e._v(" "),r("h3",{attrs:{id:"_44-pin-header"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_44-pin-header"}},[e._v("#")]),e._v(" 44-pin header")]),e._v(" "),r("p",[r("em",[e._v("Connector type: SAMTEC TMM-122-03-S-D, 2-mm pitch.")])]),e._v(" "),r("p",[e._v("The 44-pin header can be used to connect multiple GPIO devices. Refer to the "),r("a",{attrs:{href:"https://web.septentrio.com/l/858493/2022-04-19/xgrsw",target:"_blank",rel:"noopener noreferrer"}},[e._v("hardware manual"),r("OutboundLink")],1),e._v(" for the pinout.")]),e._v(" "),r("h3",{attrs:{id:"led-s"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#led-s"}},[e._v("#")]),e._v(" LED's")]),e._v(" "),r("p",[e._v("The LED pins can be used to monitor the receiver status. They can be used to drive external LEDs (max drive current 10mA). It is assumed that the LED lights when the electrical level of the corresponding pin is high. The general-purpose LED (GPLED pin) is configured with the setLEDMode command.")]),e._v(" "),r("h3",{attrs:{id:"log-button-header"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#log-button-header"}},[e._v("#")]),e._v(" Log Button Header")]),e._v(" "),r("p",[e._v("Putting a jumper on the LOG Button header (.100” vertical header) is equivalent to pressing a “log button”. The interface board takes care of debouncing.")]),e._v(" "),r("h3",{attrs:{id:"pps-event-header"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pps-event-header"}},[e._v("#")]),e._v(" PPS/Event Header")]),e._v(" "),r("p",[r("em",[e._v("Connector type: SAMTEC TMM-103-03-G-D, 2-mm pitch.")])]),e._v(" "),r("p",[e._v("The 6-pin 2mm header next to the micro USB connector exposes the first PPS signal.")]),e._v(" "),r("h3",{attrs:{id:"power-supply-options"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#power-supply-options"}},[e._v("#")]),e._v(" Power Supply Options")]),e._v(" "),r("p",[e._v("When a USB cable is connected to the micro USB connector, the interface board is powered from the computer through the USB connector. Alternatively, the power can be applied from the PWR_IN pins of the 44-pin connector. The voltage range when powering from the PWR_IN pins is 4.5V to 30V. Power can be applied from both sources at the same time. On-board diodes prevent short circuits. The interface board provides the 3V3 supply to the AsteRx-m3 OEM receiver and a 5V DC voltage to the VANT pin of the AsteRx-m3 OEM.")]),e._v(" "),r("h2",{attrs:{id:"hardware-setup"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hardware-setup"}},[e._v("#")]),e._v(" Hardware setup")]),e._v(" "),r("p",[r("img",{attrs:{src:a(1407),alt:"Septentrio Robotics Interface Board wiring diagram"}})]),e._v(" "),r("ol",[r("li",[e._v('Make sure the receiver is powered with at least 3.3V. You can use the micro USB connector or the open ended supply (labeled "PWR & GND") on the 44 pin cable for this.')]),e._v(" "),r("li",[e._v("Connect one or two GNSS antennas to the external antenna ports on the AsteRx-i3 D board.")]),e._v(" "),r("li",[e._v("Connect the 44-pin cable to the AsteRx-i3 D board on RIB and connect the 10-pin JST connector to the "),r("code",[e._v("GPS MODULE")]),e._v(" port on the Pixhawk 4 as shown in the diagram above.")]),e._v(" "),r("li",[e._v("In the web interface or with Rx Tools, set the receiver's baut rate to 115200 "),r("strong",[e._v("Admin > Expert Control > Control Panel > Communication > COM Port Settings")]),e._v(" (this is the default value).")])]),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),r("p",[e._v("PX4 will ensure that the GNSS module is automatically configured. However, if you have a dual antenna setup, you will need to set the layout as accurately as possible in the web app.")])]),e._v(" "),r("h3",{attrs:{id:"dual-antenna"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dual-antenna"}},[e._v("#")]),e._v(" Dual antenna")]),e._v(" "),r("p",[e._v("The attitude (heading/pitch) can be computed from the orientation of the baseline between the main and the aux1 GNSS antennas.")]),e._v(" "),r("p",[r("img",{attrs:{src:a(416),alt:"Multi-antenna attitude determination setup"}})]),e._v(" "),r("p",[e._v("To enable multi-antenna attitude determination, follow the following procedure:")]),e._v(" "),r("ol",[r("li",[e._v("Attach two antennas to your vehicle, using cables of approximately the same length. The default antenna configuration is as depicted in the figure. It consists in placing the antennas aligned with the longitudinal axis of the vehicle, main antenna behind AUX1. For best accuracy, try to maximize the distance between the antennas, and avoid significant height difference between the antenna ARPs.")]),e._v(" "),r("li",[e._v("In practice, the two antenna ARPs may not be exactly at the same height in the vehicle frame, or the main-aux1 baseline may not be exactly parallel or perpendicular to the longitudinal axis of the vehicle. This leads to offsets in the computed attitude angles. These offsets can be compensated for with the "),r("strong",[e._v("setAttitudeOffset")]),e._v(" command.")])]),e._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),r("p",[e._v("For optimal heading results, the two antennas should be seperated by at least 30cm / 11.8 in (ideally 50cm / 19.7in or more)")]),e._v(" "),r("p",[e._v("For additional configuration of the dual antenna setup, please refer to our "),r("a",{attrs:{href:"https://support.septentrio.com/l/858493/2022-04-19/xgrsh",target:"_blank",rel:"noopener noreferrer"}},[e._v("Knowledge Base"),r("OutboundLink")],1),e._v(" or the "),r("a",{attrs:{href:"https://web.septentrio.com/l/858493/2022-04-19/xgrsl",target:"_blank",rel:"noopener noreferrer"}},[e._v("hardware manual"),r("OutboundLink")],1)])]),e._v(" "),r("h3",{attrs:{id:"web-app"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#web-app"}},[e._v("#")]),e._v(" Web app")]),e._v(" "),r("p",[e._v("mosaic-H GPS/GNSS receiver module with heading comes with fully documented interfaces, commands and data messages. The included GNSS receiver control and analysis software "),r("a",{attrs:{href:"https://web.septentrio.com/l/858493/2022-04-19/xgrss",target:"_blank",rel:"noopener noreferrer"}},[e._v("RxTools"),r("OutboundLink")],1),e._v(" allows receiver configuration, monitoring as well as data logging and analysis.")]),e._v(" "),r("p",[e._v("The receiver includes an intuitive web user interface for easy operation and monitoring allowing you to control the receiver from any mobile device or computer. The web interface also uses easy-to-read quality indicators ideal to monitor the receiver operation during the job at hand.")]),e._v(" "),r("p",[r("img",{attrs:{src:a(417),alt:"Illustrative image for Septentrio mosaic-H GNSS Receiver Module Web User Interface (WebUI)"}})]),e._v(" "),r("h2",{attrs:{id:"px4-setup"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#px4-setup"}},[e._v("#")]),e._v(" PX4 setup")]),e._v(" "),r("p",[r("img",{attrs:{src:a(418),alt:"QGroundControl parameter settings"}})]),e._v(" "),r("h3",{attrs:{id:"single-antenna"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#single-antenna"}},[e._v("#")]),e._v(" Single antenna")]),e._v(" "),r("p",[e._v("Edit the following parameters in the GPS tab:")]),e._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#GPS_1_CONFIG"}},[e._v("GPS_1_CONFIG")]),e._v(": TELEM1")],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#GPS_1_GNSS"}},[e._v("GPS_1_GNSS")]),e._v(": 31")],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#GPS_1_PROTOCOL"}},[e._v("GPS_1_PROTOCOL")]),e._v(": Auto detect ( or SBF)")],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SER_TEL1_BAUD"}},[e._v("SER_TEL1_BAUD")]),e._v(": 115200 8N1")],1)]),e._v(" "),r("p",[e._v("Go to "),r("strong",[e._v("Tools > Reboot Vehicle")])]),e._v(" "),r("h3",{attrs:{id:"dual-antenna-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dual-antenna-2"}},[e._v("#")]),e._v(" Dual antenna")]),e._v(" "),r("p",[e._v("Edit the following parameters in the GPS tab:")]),e._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#GPS_1_CONFIG"}},[e._v("GPS_1_CONFIG")]),e._v(": TELEM1")],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#GPS_1_GNSS"}},[e._v("GPS_1_GNSS")]),e._v(": 31")],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#GPS_1_PROTOCOL"}},[e._v("GPS_1_PROTOCOL")]),e._v(": Auto detect (or SBF)")],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SER_TEL1_BAUD"}},[e._v("SER_TEL1_BAUD")]),e._v(": 115200 8N1")],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_GPS_CTRL"}},[e._v("EKF2_GPS_CTRL")]),e._v(": Bit 3 Dual antenna heading")],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#GPS_YAW_OFFSET"}},[e._v("GPS_YAW_OFFSET")]),e._v(": set according to your setup")],1)]),e._v(" "),r("p",[e._v("Go to "),r("strong",[e._v("Tools > Reboot Vehicle")])]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("If you want more detailed information about the AsteRx and the Robotics Interface Board, please refer to the "),r("a",{attrs:{href:"https://web.septentrio.com/l/858493/2022-04-19/xgrsw",target:"_blank",rel:"noopener noreferrer"}},[e._v("hardware manual"),r("OutboundLink")],1),e._v(" or the "),r("a",{attrs:{href:"https://support.septentrio.com/l/858493/2022-04-19/xgrsz",target:"_blank",rel:"noopener noreferrer"}},[e._v("Septentrio Support"),r("OutboundLink")],1),e._v(" page. :::")])])])}),[],!1,null,null,null);t.default=n.exports},416:function(e,t){e.exports="data:image/png;base64,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"},417:function(e,t,a){e.exports=a.p+"assets/img/septentrio_mosaic_a5_h_t_clas_gnss_module_receiverwebui.27c9ac31.png"},418:function(e,t,a){e.exports=a.p+"assets/img/qgc_param.bc5162a2.png"}}]);