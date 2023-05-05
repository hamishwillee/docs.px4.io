(window.webpackJsonp=window.webpackJsonp||[]).push([[578],{1483:function(e,t,r){e.exports=r.p+"assets/img/tsflot_compose.c3d786f3.jpg"},1484:function(e,t,r){e.exports=r.p+"assets/img/tfslot_integration.9935ec74.jpg"},3016:function(e,t,r){"use strict";r.r(t);var n=r(19),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"tfslot-venturi-effect-airspeed-sensor"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tfslot-venturi-effect-airspeed-sensor"}},[e._v("#")]),e._v(" TFSLOT - Venturi effect airspeed sensor")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/ThunderFly-aerospace/TFSLOT01",target:"_blank",rel:"noopener noreferrer"}},[e._v("TFSLOT"),n("OutboundLink")],1),e._v(" is an open-source airspeed sensor based on the "),n("a",{attrs:{href:"https://en.wikipedia.org/wiki/Venturi_effect",target:"_blank",rel:"noopener noreferrer"}},[e._v("Venturi effect"),n("OutboundLink")],1),e._v(" that also has an IMU.")]),e._v(" "),n("p",[n("img",{attrs:{src:r(1483),alt:"TFSLOT and TFSLOT WITH TFASPDIMU02 board"}})]),e._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/ThunderFly-aerospace/TFSLOT01",target:"_blank",rel:"noopener noreferrer"}},[e._v("TFSLOT"),n("OutboundLink")],1),e._v(" is an airspeed sensor based on venturi effects. In the basic configuration, the TFSLOT is equipped with the "),n("a",{attrs:{href:"https://github.com/ThunderFly-aerospace/TFASPDIMU02",target:"_blank",rel:"noopener noreferrer"}},[e._v("TFASPDIMU02"),n("OutboundLink")],1),e._v(" sensor board, which contains a differential pressure sensor ("),n("a",{attrs:{href:"https://sensirion.com/products/catalog/?filter_series=d1816d53-f5c8-47e3-ab47-818c3fd54259",target:"_blank",rel:"noopener noreferrer"}},[e._v("Sensirion SDP3x series"),n("OutboundLink")],1),e._v(") and a 9-axis motion tracking sensor ("),n("a",{attrs:{href:"https://invensense.tdk.com/products/motion-tracking/9-axis/icm-20948/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ICM-20948"),n("OutboundLink")],1),e._v("). The IMU unit can be used as an external compass.")]),e._v(" "),n("ul",[n("li",[e._v("This design brings several advantages when used on small-scale and slow-flying UAV’s.")]),e._v(" "),n("li",[e._v("Better resolution at low airspeeds (below 10 m/s).")]),e._v(" "),n("li",[e._v("Configurable sensitivity brought by changing the profile.")]),e._v(" "),n("li",[e._v("Less tendency to clogging (For example, by clay after landing)")]),e._v(" "),n("li",[e._v("Weatherproof (rain, snow, etc.)")]),e._v(" "),n("li",[e._v("Direct differential pressure sensor integration without any additional tubing. Less chance of sensor malfunction.")]),e._v(" "),n("li",[e._v("Possibility of direct integration into the construction of the drone. Design is fully open source.")]),e._v(" "),n("li",[e._v("Integrated external IMU unit.")])]),e._v(" "),n("p",[e._v("Thanks to the printed tube, it is very easy to change the measuring profile and thus to change the sensitivity in certain speed ranges. In the basic form, it is optimized so that the measured differential pressure corresponds to the pressure from the pitot tube.")]),e._v(" "),n("p",[n("img",{attrs:{src:r(1484),alt:"TFSLOT integrated in TF-G2"}}),e._v(" "),n("em",[e._v("First integration of TFSLOT into "),n("a",{attrs:{href:"https://github.com/ThunderFly-aerospace/TF-G2/",target:"_blank",rel:"noopener noreferrer"}},[e._v("TF-G2"),n("OutboundLink")],1),e._v(" autogyro")])]),e._v(" "),n("div",{staticClass:"custom-block note"},[n("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),n("p",[e._v("Full documentation and source files can be found on "),n("a",{attrs:{href:"https://github.com/ThunderFly-aerospace/TFSLOT01",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub"),n("OutboundLink")],1),e._v(".")])]),e._v(" "),n("h2",{attrs:{id:"where-to-buy"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#where-to-buy"}},[e._v("#")]),e._v(" Where to buy")]),e._v(" "),n("p",[e._v("TFSLOT is possible to buy at "),n("a",{attrs:{href:"https://www.tindie.com/products/thunderfly/tfslot01a-inovative-drone-airspeed-sensor/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tindie store"),n("OutboundLink")],1),e._v(" or by sending us an inquiry via email at info@thunderfly.cz")]),e._v(" "),n("h2",{attrs:{id:"connection"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#connection"}},[e._v("#")]),e._v(" Connection")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/ThunderFly-aerospace/TFASPDIMU02",target:"_blank",rel:"noopener noreferrer"}},[e._v("TFASPDIMU02"),n("OutboundLink")],1),e._v(" is equipped with I2C JST-GH connector, which conforms to the pinout of the "),n("a",{attrs:{href:"https://github.com/pixhawk/Pixhawk-Standards/blob/master/DS-009%20Pixhawk%20Connector%20Standard.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("dronecode standard"),n("OutboundLink")],1),e._v(". Therefore the sensor can be connected directly to an I2C port of autopilot using an I2C 4pin JST-GH cable.")]),e._v(" "),n("h2",{attrs:{id:"configuration"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),n("p",[e._v("Because there is an "),n("a",{attrs:{href:"https://invensense.tdk.com/products/motion-tracking/9-axis/icm-20948/",target:"_blank",rel:"noopener noreferrer"}},[e._v("IMU IC"),n("OutboundLink")],1),e._v(" connected in front of the sensor, the IMU IC needs to be set into a bridge mode. Following this the airspeed sensor driver can be run. This can be done using the following command sequences. The commands assume a connection to I2C2 port.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("icm20948_i2c_passthrough start -X -b 2 -a 0x68\nsdp3x_airspeed start -X -b 2\n")])])]),n("p",[e._v("This sequence can be stored on the SD card in the "),n("code",[e._v("/etc/config.txt file")]),e._v(". You can read more about the configuration on the SD card on a "),n("RouterLink",{attrs:{to:"/ko/concept/system_startup.html#replacing-the-system-startup"}},[e._v("separate page")]),e._v(".")],1),e._v(" "),n("p",[e._v("Because the conversion of differential pressure to airspeed differs from the Pitot tube, this profile needs to be changed. This is done by setting parameter "),n("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#CAL_AIR_CMODEL"}},[n("code",[e._v("CAL_AIR_CMODEL")])]),e._v(" to 3 (Venturi effect based airspeed sensor)")],1),e._v(" "),n("h2",{attrs:{id:"calibration"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#calibration"}},[e._v("#")]),e._v(" Calibration")]),e._v(" "),n("p",[e._v("Calibration is a bit difficult because the current firmware version does not support calibration with negative values. Because the used sensor measures both airflow directions symmetrically and has zero offset, there is no need to calibrate repeatedly before every takeoff. But you have to ensure that there is no airflow during the calibration process.")]),e._v(" "),n("p",[e._v("The easiest way to do the calibration is to take the adhesive tape and tape it between the pressure inlets to the sensor. Then start the calibration process and blow from the back when prompted. If the pressure of at least 50 Pa is created, the calibration will be successful.")])])}),[],!1,null,null,null);t.default=a.exports}}]);