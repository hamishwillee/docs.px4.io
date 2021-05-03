(window.webpackJsonp=window.webpackJsonp||[]).push([[1092],{2247:function(r,t,e){"use strict";e.r(t);var a=e(18),s=Object(a.a)({},(function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[e("h1",{attrs:{id:"i2c-버스-개요"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#i2c-버스-개요"}},[r._v("#")]),r._v(" I2C 버스 개요")]),r._v(" "),e("p",[r._v("I2C는 선 두가닥만 활용하여 다중 마스터 장비를 다중 슬레이브 장비와 연결할 수 있게 하는 패킷 전환 직렬 통신 프로토콜입니다. 저속 주변기기 IC 칩을 프로세서와 마이크로컨트롤러에 짧은 길이로 연결, 보드내 통신을 수행하기 위한 목적입니다.")]),r._v(" "),e("p",[r._v("픽스호크/PX4는 다음 용도로 이 프로토콜을 지원합니다:")]),r._v(" "),e("ul",[e("li",[r._v("제한적인 직렬 UART로 제공하는 데이터 전송률이 필요한 보드 결속 소자. 예: 거리 센서")]),r._v(" "),e("li",[r._v("I2C만 지원하는 주변 장치와의 호환성 유지")]),r._v(" "),e("li",[r._v("단일 버스로의 다중 장치 연결 허용 (포트 절약에 유용함) 예: LED, 지자계센서, 거리센서 등.")])]),r._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[r._v("IMUs (accelerometers/gyroscopes) should not be attached via I2C (typically the [SPI](https://en.wikipedia.org/wiki/Serial_Peripheral_Interface_Bus) bus is used). The bus is not fast enough even with a single device attached to allow vibration filtering (for instance), and the performance degrades further with every additional device on the bus.")])]),r._v(" "),e("h2",{attrs:{id:"i2c-장치-통합"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#i2c-장치-통합"}},[r._v("#")]),r._v(" I2C 장치 통합")]),r._v(" "),e("p",[r._v("드라이버는 또한 장치 형식별로 "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/drivers",target:"_blank",rel:"noopener noreferrer"}},[r._v("/src/drivers/"),e("OutboundLink")],1),r._v("의 헤더("),e("strong",[r._v("drv_*.h")]),r._v(")가 필요합니다. 예: "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/drivers/drv_baro.h",target:"_blank",rel:"noopener noreferrer"}},[r._v("drv_baro.h"),e("OutboundLink")],1),r._v(".")]),r._v(" "),e("p",[r._v("펌웨어에 드라이버를 넣으려면 보드별 cmake 파일에 빌드하려는 대상의 드라이버를 넣어야 합니다:")]),r._v(" "),e("p",[r._v("I2C 드라이버 예제를 찾아보려면 "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/drivers",target:"_blank",rel:"noopener noreferrer"}},[r._v("/src/drivers/"),e("OutboundLink")],1),r._v("에서 "),e("strong",[r._v("i2c.h")]),r._v("로 찾아보십시오.")]),r._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[r._v("drivers/sf1xx\n")])])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[r._v("TIP")]),r._v(" "),e("p",[r._v("For example, you can see/search for this driver in the "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/boards/px4/fmu-v4/default.cmake",target:"_blank",rel:"noopener noreferrer"}},[r._v("px4_fmu-v4_default"),e("OutboundLink")],1),r._v(" configuration.")])]),r._v(" "),e("h2",{attrs:{id:"i2c-드라이버-예제"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#i2c-드라이버-예제"}},[r._v("#")]),r._v(" I2C 드라이버 예제")]),r._v(" "),e("p",[r._v("To find I2C driver examples, search for "),e("strong",[r._v("i2c.h")]),r._v(" in "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/drivers",target:"_blank",rel:"noopener noreferrer"}},[r._v("/src/drivers/"),e("OutboundLink")],1),r._v(".")]),r._v(" "),e("p",[r._v("Just a few examples are:")]),r._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/drivers/distance_sensor/sf1xx",target:"_blank",rel:"noopener noreferrer"}},[r._v("drivers/sf1xx"),e("OutboundLink")],1),r._v(" -  "),e("RouterLink",{attrs:{to:"/ko/sensor/sfxx_lidar.html"}},[r._v("Lightware SF1XX LIDAR")]),r._v("용 I2C 드라이버.")],1),r._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/drivers/barometer/ms5611",target:"_blank",rel:"noopener noreferrer"}},[r._v("drivers/ms5611"),e("OutboundLink")],1),r._v(" - I2C(또는 SPI)로 연결하는 대기압 센서 MS5611과 MS6507용 I2C용 드라이버.")])]),r._v(" "),e("h2",{attrs:{id:"추가-정보"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#추가-정보"}},[r._v("#")]),r._v(" 추가 정보")]),r._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://en.wikipedia.org/wiki/I%C2%B2C",target:"_blank",rel:"noopener noreferrer"}},[r._v("I2C"),e("OutboundLink")],1),r._v(" (위키피디아) - 영문")]),r._v(" "),e("li",[e("a",{attrs:{href:"https://learn.sparkfun.com/tutorials/i2c",target:"_blank",rel:"noopener noreferrer"}},[r._v("I2C 비교 개요"),e("OutboundLink")],1),r._v(" (learn.sparkfun.com)")]),r._v(" "),e("li",[e("RouterLink",{attrs:{to:"/ko/middleware/drivers.html"}},[r._v("드라이버 프레임워크")])],1)])])}),[],!1,null,null,null);t.default=s.exports}}]);