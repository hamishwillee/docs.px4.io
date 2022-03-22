(window.webpackJsonp=window.webpackJsonp||[]).push([[767],{3356:function(e,r,t){"use strict";t.r(r);var a=t(19),s=Object(a.a)({},(function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"空速传感器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#空速传感器"}},[e._v("#")]),e._v(" 空速传感器")]),e._v(" "),a("p",[e._v("对于固定翼和 VTOL 机架，"),a("em",[e._v("强烈建议")]),e._v(" 使用空速传感器。 它们非常重要，因为自驾仪没有其他方法来检测失速。 对于固定翼飞行来说，保证升力的是空速而不是地速。")]),e._v(" "),a("p",[a("img",{attrs:{src:t(398),alt:"数字空速传感器"}})]),e._v(" "),a("h2",{attrs:{id:"hardware-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hardware-options"}},[e._v("#")]),e._v(" Hardware Options")]),e._v(" "),a("p",[e._v("Recommended digital airspeed sensors include:")]),e._v(" "),a("ul",[a("li",[e._v("Based on "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Pitot_tube",target:"_blank",rel:"noopener noreferrer"}},[e._v("Pitot tube"),a("OutboundLink")],1),e._v(" "),a("ul",[a("li",[e._v("MEAS Spec series (e.g. "),a("a",{attrs:{href:"https://www.te.com/usa-en/product-CAT-BLPS0002.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("MS4525DO"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://www.te.com/usa-en/product-CAT-BLPS0003.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("MS5525"),a("OutboundLink")],1),e._v(")\n"),a("ul",[a("li",[a("a",{attrs:{href:"https://store.mrobotics.io/mRo-I2C-Airspeed-Sensor-JST-GH-p/m10030a.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("mRo I2C Airspeed Sensor JST-GH MS4525DO"),a("OutboundLink")],1),e._v(" (mRo store)")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://store-drotek.com/793-digital-differential-airspeed-sensor-kit-.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Digital Differential Airspeed Sensor Kit"),a("OutboundLink")],1),e._v(" (Drotek).")])])]),e._v(" "),a("li",[a("a",{attrs:{href:"http://www.eagletreesystems.com/index.php?route=product/product&product_id=63",target:"_blank",rel:"noopener noreferrer"}},[e._v("EagleTree Airspeed MicroSensor V3"),a("OutboundLink")],1),e._v(" (eagletreesystems)")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.sensirion.com/en/flow-sensors/differential-pressure-sensors/worlds-smallest-differential-pressure-sensor/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Sensirion SDP3X Differential Pressure Sensor"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://shop.holybro.com/digital-air-speed-sensor_p1029.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Holybro Digital Air Speed Sensor"),a("OutboundLink")],1)])])]),e._v(" "),a("li",[e._v("Based on "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Venturi_effect",target:"_blank",rel:"noopener noreferrer"}},[e._v("Venturi effect"),a("OutboundLink")],1),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/zh/sensor/airspeed_tfslot.html"}},[e._v("TFSLOT")]),e._v(" Venturi effect airspeed sensor.")],1)])])]),e._v(" "),a("p",[e._v("All the above sensors are connected via the I2C bus/port.")]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("注解")]),e._v(" "),a("p",[e._v("Additionally, the "),a("a",{attrs:{href:"https://www.tindie.com/products/avionicsanonymous/uavcan-air-data-computer-airspeed-sensor/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Avionics Anonymous Air Data Computer"),a("OutboundLink")],1),e._v(" can be connected to the UAVCAN bus to determine not only high-accuracy airspeed, but also true static pressure and air temperature via onboard barometer and an OAT probe.")])]),e._v(" "),a("h2",{attrs:{id:"配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[e._v("#")]),e._v(" 配置")]),e._v(" "),a("h3",{attrs:{id:"enable-airspeed-sensors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enable-airspeed-sensors"}},[e._v("#")]),e._v(" Enable Airspeed Sensors")]),e._v(" "),a("p",[e._v("Unlike most other sensor drivers, the airspeed sensor drivers are not automatically started.")]),e._v(" "),a("p",[e._v("Enable each type using its "),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameters.html"}},[e._v("corresponding parameter")]),e._v(":")],1),e._v(" "),a("ul",[a("li",[e._v("Sensirion SDP3X ("),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SENS_EN_SDP3X"}},[e._v("SENS_EN_SDP3X")]),e._v(")")],1),e._v(" "),a("li",[e._v("TE MS4525 ("),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SENS_EN_MS4525"}},[e._v("SENS_EN_MS4525")]),e._v(")")],1),e._v(" "),a("li",[e._v("TE MS5525 ("),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SENS_EN_MS5525"}},[e._v("SENS_EN_MS5525")]),e._v(")")],1),e._v(" "),a("li",[e._v("Eagle Tree airspeed sensor ("),a("RouterLink",{attrs:{to:"/zh/advanced_config/parameter_reference.html#SENS_EN_ETSASPD"}},[e._v("SENS_EN_ETSASPD")]),e._v(")")],1)]),e._v(" "),a("h3",{attrs:{id:"calibration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#calibration"}},[e._v("#")]),e._v(" Calibration")]),e._v(" "),a("p",[e._v("Airspeed calibration information can be found in: "),a("RouterLink",{attrs:{to:"/zh/config/airspeed.html"}},[e._v("Basic Configuration > Airspeed")]),e._v(".")],1),e._v(" "),a("h2",{attrs:{id:"开发人员信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开发人员信息"}},[e._v("#")]),e._v(" 开发人员信息")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/drivers/differential_pressure",target:"_blank",rel:"noopener noreferrer"}},[e._v("Airspeed drivers"),a("OutboundLink")],1),e._v(" (source code)")])])])}),[],!1,null,null,null);r.default=s.exports},398:function(e,r,t){e.exports=t.p+"assets/img/digital_airspeed_sensor.43319a0e.jpg"}}]);