(window.webpackJsonp=window.webpackJsonp||[]).push([[637],{2581:function(e,r,t){"use strict";t.r(r);var a=t(19),s=Object(a.a)({},(function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"풍속-센서"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#풍속-센서"}},[e._v("#")]),e._v(" 풍속 센서")]),e._v(" "),a("p",[e._v("고정 회선 및 VTOL 프레임의 경우 속도 센서가 *을 높게 권장합니다. 자동 조종 장치에는 실속을 감지 할 수있는 다른 수단이 없으므로이 신호는 매우 중요합니다. 고정익 비행의 경우 지상 속도가 아닌 양력을 보장하는 속도입니다.")]),a("p"),e._v(" "),a("p",[a("img",{attrs:{src:t(389),alt:"디지털 풍속 센서"}})]),e._v(" "),a("h2",{attrs:{id:"하드웨어-옵션"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#하드웨어-옵션"}},[e._v("#")]),e._v(" 하드웨어 옵션")]),e._v(" "),a("p",[e._v("권장 디지털 속도 센서는 다음과 같습니다.")]),e._v(" "),a("ul",[a("li",[e._v("MEAS Spec series (e.g. "),a("a",{attrs:{href:"https://www.te.com/usa-en/product-CAT-BLPS0002.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("MS4525DO"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://www.te.com/usa-en/product-CAT-BLPS0003.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("MS5525"),a("OutboundLink")],1),e._v(")\n"),a("ul",[a("li",[a("a",{attrs:{href:"https://store.mrobotics.io/mRo-I2C-Airspeed-Sensor-JST-GH-p/m10030a.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("mRo I2C 풍속 센서 JST-GH MS4525DO"),a("OutboundLink")],1),e._v(" (mRo store)")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://store-drotek.com/793-digital-differential-airspeed-sensor-kit-.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("디지털 차동 풍속 센서 키트"),a("OutboundLink")],1),e._v(" (Drotek).")])])]),e._v(" "),a("li",[a("a",{attrs:{href:"http://www.eagletreesystems.com/index.php?route=product/product&product_id=63",target:"_blank",rel:"noopener noreferrer"}},[e._v("EagleTree Airspeed MicroSensor V3"),a("OutboundLink")],1),e._v(" (eagletreesystems)")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.sensirion.com/en/flow-sensors/differential-pressure-sensors/worlds-smallest-differential-pressure-sensor/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Sensirion SDP3X 차압 센서"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://shop.holybro.com/digital-air-speed-sensor_p1029.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Holybro 디지털 풍속 센서"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("위의 센서들은 I2C 버스/포트를 통해 연결됩니다.")]),e._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("또한, "),a("a",{attrs:{href:"https://www.tindie.com/products/avionicsanonymous/uavcan-air-data-computer-airspeed-sensor/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Avionics Anonymous Air Data Computer"),a("OutboundLink")],1),e._v("를 UAVCAN 버스에 연결하여 고정밀 대기 속도뿐만 아니라 온보드 기압계와 OAT 프로브를 통해 실제 정압 및 대기 온도를 확인할 수 있습니다.")])]),e._v(" "),a("h2",{attrs:{id:"설정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#설정"}},[e._v("#")]),e._v(" 설정")]),e._v(" "),a("h3",{attrs:{id:"enable-airspeed-sensors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enable-airspeed-sensors"}},[e._v("#")]),e._v(" Enable Airspeed Sensors")]),e._v(" "),a("p",[e._v("Unlike most other sensor drivers, the airspeed sensor drivers are not automatically started.")]),e._v(" "),a("p",[e._v("Enable each type using its "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameters.html"}},[e._v("corresponding parameter")]),e._v(":")],1),e._v(" "),a("ul",[a("li",[e._v("Sensirion SDP3X ("),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SENS_EN_SDP3X"}},[e._v("SENS_EN_SDP3X")]),e._v(")")],1),e._v(" "),a("li",[e._v("TE MS4525 ("),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SENS_EN_MS4525"}},[e._v("SENS_EN_MS4525")]),e._v(")")],1),e._v(" "),a("li",[e._v("TE MS5525 ("),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SENS_EN_MS5525"}},[e._v("SENS_EN_MS5525")]),e._v(")")],1),e._v(" "),a("li",[e._v("Eagle Tree airspeed sensor ("),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SENS_EN_ETSASPD"}},[e._v("SENS_EN_ETSASPD")]),e._v(")")],1)]),e._v(" "),a("h3",{attrs:{id:"calibration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#calibration"}},[e._v("#")]),e._v(" Calibration")]),e._v(" "),a("p",[e._v("Airspeed calibration information can be found in: "),a("RouterLink",{attrs:{to:"/ko/config/airspeed.html"}},[e._v("Basic Configuration > Airspeed")]),e._v(".")],1),e._v(" "),a("h2",{attrs:{id:"개발-정보"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#개발-정보"}},[e._v("#")]),e._v(" 개발 정보")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/drivers/differential_pressure",target:"_blank",rel:"noopener noreferrer"}},[e._v("Airspeed drivers"),a("OutboundLink")],1),e._v(" (source code)")])])])}),[],!1,null,null,null);r.default=s.exports},389:function(e,r,t){e.exports=t.p+"assets/img/digital_airspeed_sensor.43319a0e.jpg"}}]);