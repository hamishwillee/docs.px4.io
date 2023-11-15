(window.webpackJsonp=window.webpackJsonp||[]).push([[827],{3167:function(e,r,t){"use strict";t.r(r);var s=t(19),a=Object(s.a)({},(function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"풍속-센서"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#풍속-센서"}},[e._v("#")]),e._v(" 풍속 센서")]),e._v(" "),s("p",[e._v("Airspeed sensors are "),s("em",[e._v("highly recommended")]),e._v(" for fixed-wing and VTOL frames. They are so important because the autopilot does not have other means to detect stall. 고정익 비행의 경우 지상 속도가 아닌 양력을 보장하는 속도입니다.")]),e._v(" "),s("p",[s("img",{attrs:{src:t(412),alt:"디지털 풍속 센서"}})]),e._v(" "),s("h2",{attrs:{id:"하드웨어-옵션"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#하드웨어-옵션"}},[e._v("#")]),e._v(" 하드웨어 옵션")]),e._v(" "),s("p",[e._v("권장 디지털 속도 센서는 다음과 같습니다.")]),e._v(" "),s("ul",[s("li",[e._v("Based on "),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Pitot_tube",target:"_blank",rel:"noopener noreferrer"}},[e._v("Pitot tube"),s("OutboundLink")],1),e._v(" "),s("ul",[s("li",[e._v("MEAS Spec series (e.g. "),s("a",{attrs:{href:"https://www.te.com/usa-en/product-CAT-BLPS0002.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("MS4525DO"),s("OutboundLink")],1),e._v(", "),s("a",{attrs:{href:"https://www.te.com/usa-en/product-CAT-BLPS0003.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("MS5525"),s("OutboundLink")],1),e._v(")\n"),s("ul",[s("li",[s("a",{attrs:{href:"https://store.mrobotics.io/mRo-I2C-Airspeed-Sensor-JST-GH-p/m10030a.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("mRo I2C Airspeed Sensor JST-GH MS4525DO"),s("OutboundLink")],1),e._v(" (mRo store)")]),e._v(" "),s("li",[s("a",{attrs:{href:"https://store-drotek.com/793-digital-differential-airspeed-sensor-kit-.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Digital Differential Airspeed Sensor Kit"),s("OutboundLink")],1),e._v(" (Drotek).")])])]),e._v(" "),s("li",[s("a",{attrs:{href:"http://www.eagletreesystems.com/index.php?route=product/product&product_id=63",target:"_blank",rel:"noopener noreferrer"}},[e._v("EagleTree Airspeed MicroSensor V3"),s("OutboundLink")],1),e._v(" (eagletreesystems) ")]),e._v(" "),s("li",[s("a",{attrs:{href:"https://store-drotek.com/793-digital-differential-airspeed-sensor-kit-.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Sensirion SDP3x Airspeed Sensor Kit"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://holybro.com/products/digital-air-speed-sensor",target:"_blank",rel:"noopener noreferrer"}},[e._v("Holybro Digital Air Speed Sensor"),s("OutboundLink")],1)])])]),e._v(" "),s("li",[e._v("Based on "),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Venturi_effect",target:"_blank",rel:"noopener noreferrer"}},[e._v("Venturi effect"),s("OutboundLink")],1),e._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/ko/sensor/airspeed_tfslot.html"}},[e._v("TFSLOT")]),e._v(" Venturi effect airspeed sensor.")],1)])])]),e._v(" "),s("p",[e._v("위의 센서들은 I2C 버스/포트를 통해 연결됩니다.")]),e._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),s("p",[e._v("Additionally, the "),s("a",{attrs:{href:"https://www.tindie.com/products/avionicsanonymous/uavcan-air-data-computer-airspeed-sensor/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Avionics Anonymous Air Data Computer"),s("OutboundLink")],1),e._v(" can be connected to the CAN bus to determine not only high-accuracy airspeed, but also true static pressure and air temperature via onboard barometer and an OAT probe.")])]),e._v(" "),s("h2",{attrs:{id:"설정"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#설정"}},[e._v("#")]),e._v(" 설정")]),e._v(" "),s("h3",{attrs:{id:"enable-airspeed-sensors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#enable-airspeed-sensors"}},[e._v("#")]),e._v(" Enable Airspeed Sensors")]),e._v(" "),s("p",[e._v("Airspeed sensor drivers are not started automatically. Enable each type using its "),s("RouterLink",{attrs:{to:"/ko/advanced_config/parameters.html"}},[e._v("corresponding parameter")]),e._v(":")],1),e._v(" "),s("ul",[s("li",[s("strong",[e._v("Sensirion SDP3X:")]),e._v(" "),s("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SENS_EN_SDP3X"}},[e._v("SENS_EN_SDP3X")])],1),e._v(" "),s("li",[s("strong",[e._v("TE MS4525:")]),e._v(" "),s("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SENS_EN_MS4525DO"}},[e._v("SENS_EN_MS4525DO")])],1),e._v(" "),s("li",[s("strong",[e._v("TE MS5525:")]),e._v(" "),s("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SENS_EN_MS5525DS"}},[e._v("SENS_EN_MS5525DS")])],1),e._v(" "),s("li",[s("strong",[e._v("Eagle Tree airspeed sensor:")]),e._v(" "),s("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SENS_EN_ETSASPD"}},[e._v("SENS_EN_ETSASPD")])],1)]),e._v(" "),s("p",[e._v("You should also check "),s("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#ASPD_PRIMARY"}},[e._v("ASPD_PRIMARY")]),e._v(" is "),s("code",[e._v("1")]),e._v(" (see next section - this is the default).")],1),e._v(" "),s("h3",{attrs:{id:"multiple-airspeed-sensors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#multiple-airspeed-sensors"}},[e._v("#")]),e._v(" Multiple Airspeed Sensors")]),e._v(" "),s("p",[e._v("If you have multiple airspeed sensors then you can select which sensor is "),s("em",[e._v("preferred")]),e._v(" as the primary source using "),s("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#ASPD_PRIMARY"}},[e._v("ASPD_PRIMARY")]),e._v(", where "),s("code",[e._v("1")]),e._v(", "),s("code",[e._v("2")]),e._v(" and "),s("code",[e._v("3")]),e._v(" reflect the order in which the airspeed sensors were started:")],1),e._v(" "),s("ul",[s("li",[s("code",[e._v("-1")]),e._v(": Disabled (no airspeed information used).")]),e._v(" "),s("li",[s("code",[e._v("0")]),e._v(": Synthetic airspeed estimation (groundspeed minus windspeed)")]),e._v(" "),s("li",[s("code",[e._v("1")]),e._v(": First airspeed sensor started (default)")]),e._v(" "),s("li",[s("code",[e._v("2")]),e._v(": Second airspeed sensor started")]),e._v(" "),s("li",[s("code",[e._v("3")]),e._v(": Third airspeed sensor started")])]),e._v(" "),s("p",[e._v("The airspeed selector validates the indicated sensor "),s("em",[e._v("first")]),e._v(" and only falls back to other sensors if the indicated sensor fails airspeed checks ("),s("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#ASPD_DO_CHECKS"}},[e._v("ASPD_DO_CHECKS")]),e._v(" is used to configure the checks).")],1),e._v(" "),s("p",[e._v("The selected sensor is then used to supply data to the estimator (EKF2). The EKF fuses the airspeed data if it's above "),s("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_ARSP_THR"}},[e._v("EKF2_ARSP_THR")]),e._v(" and has a low innovation compared to groundspeed minus windspeed.")],1),e._v(" "),s("h3",{attrs:{id:"sensor-specific-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sensor-specific-configuration"}},[e._v("#")]),e._v(" Sensor-specific Configuration")]),e._v(" "),s("p",[e._v("Other than enabling the sensor, sensor-specific configuration is often not required. If it is needed, it should be covered in the appropriate sensor page (for example "),s("RouterLink",{attrs:{to:"/ko/sensor/airspeed_tfslot.html#configuration"}},[e._v("TFSLOT > Configuration")]),e._v(").")],1),e._v(" "),s("p",[e._v("The specific configuration for sensors that do not have a separate page is listed below:")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("Sensirion SDP3X:")]),e._v(" "),s("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#CAL_AIR_CMODEL"}},[e._v("CAL_AIR_CMODEL")]),e._v(" (provides overview of required settings), "),s("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#CAL_AIR_TUBED_MM"}},[e._v("CAL_AIR_TUBED_MM")]),e._v(", "),s("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#CAL_AIR_TUBELEN"}},[e._v("CAL_AIR_TUBELEN")]),e._v(".")],1)]),e._v(" "),s("h2",{attrs:{id:"calibration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#calibration"}},[e._v("#")]),e._v(" Calibration")]),e._v(" "),s("p",[e._v("Airspeed sensors should be calibrated by following the instructions: "),s("RouterLink",{attrs:{to:"/ko/config/airspeed.html"}},[e._v("Basic Configuration > Airspeed")]),e._v(".")],1),e._v(" "),s("h2",{attrs:{id:"개발-정보"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#개발-정보"}},[e._v("#")]),e._v(" 개발 정보")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/drivers/differential_pressure",target:"_blank",rel:"noopener noreferrer"}},[e._v("Airspeed drivers"),s("OutboundLink")],1),e._v(" (source code)")])])])}),[],!1,null,null,null);r.default=a.exports},412:function(e,r,t){e.exports=t.p+"assets/img/digital_airspeed_sensor.43319a0e.jpg"}}]);