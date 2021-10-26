(window.webpackJsonp=window.webpackJsonp||[]).push([[1450],{2629:function(r,t,e){"use strict";e.r(t);var s=e(19),a=Object(s.a)({},(function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[e("h1",{attrs:{id:"i2c-버스-개요"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#i2c-버스-개요"}},[r._v("#")]),r._v(" I2C 버스 개요")]),r._v(" "),e("p",[r._v("I2C는 2개의 와이어로 연결하여 여러개의 마스터 장치를 여러개의 슬레이브 장치에 연결하는 패킷교환 직렬통신 프로토콜입니다. 보드내의 프로세서와 마이크로컨트롤러에서 저속 주변 장치 IC와의 근거리 통신에 사용됩니다.")]),r._v(" "),e("p",[r._v("픽스호크 PX4는 다음 목적으로 이 프로토콜을 사용합니다:")]),r._v(" "),e("ul",[e("li",[r._v("제한된 직렬 UART 보다 더 높은 데이터 속도가 필요한 장치 연결(예: 거리 측정기)")]),r._v(" "),e("li",[r._v("I2C만 지원하는 주변기기 호환성")]),r._v(" "),e("li",[r._v("여러 장치를 단일 버스에 연결할 수 있습니다(포트 절약에 유용) 예: LED, 지자계센서, 거리센서 등")])]),r._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[r._v("IMU(가속도계/자이로스코프)는 I2C로 연결하면 안 됩니다(일반적으로 [SPI](https://en.wikipedia.org/wiki/Serial_Peripheral_Interface_Bus) 버스가 사용됨). 버스는 진동 필터링 목적으로 연결된 단일 장치로 충분히 빠르지 않으며, 버스에 장치가 추가시 마다 성능이 저하됩니다.")])]),r._v(" "),e("h2",{attrs:{id:"i2c-장치-통합"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#i2c-장치-통합"}},[r._v("#")]),r._v(" I2C 장치 통합")]),r._v(" "),e("p",[r._v("드라이버는 "),e("code",[r._v("#include <drivers/device/i2c.h>")]),r._v("한 다음 추상 기본 클래스의 구현을 제공해야 합니다. 클래스는 "),e("code",[r._v("I2C")]),r._v("는 대상 하드웨어에 대하여 "),e("strong",[r._v("I2C.hpp")]),r._v("에 정의되어 있습니다(즉, NuttX의 경우 "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/lib/drivers/device/nuttx/I2C.hpp",target:"_blank",rel:"noopener noreferrer"}},[r._v("여기"),e("OutboundLink")],1),r._v(").")]),r._v(" "),e("p",[r._v("소수의 드라이버도 "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/drivers",target:"_blank",rel:"noopener noreferrer"}},[r._v("/src/drivers/"),e("OutboundLink")],1),r._v("에 장치 유형("),e("strong",[r._v("drv_*.h")]),r._v(")에 대한 헤더를 포함하여야 합니다. "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/drivers/drv_airspeed.h",target:"_blank",rel:"noopener noreferrer"}},[r._v("drv_airspeed.h"),e("OutboundLink")],1),r._v(".")]),r._v(" "),e("p",[r._v("펌웨어에 드라이버를 포함하려면, 빌드 대상 보드 cmake 파일에 드라이버를 추가하여야 합니다. 단일 드라이버에 대해 다음을 수행할 수 있습니다:")]),r._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[r._v("drivers/distance_sensor/lightware_laser_i2c\n")])])]),e("p",[r._v("특정 유형의 모든 드라이버를 포함할 수 있습니다.")]),r._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[r._v("distance_sensor # all available distance sensor drivers\n")])])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[r._v("TIP")]),r._v(" "),e("p",[r._v("예를 들어, "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/boards/px4/fmu-v4/default.cmake",target:"_blank",rel:"noopener noreferrer"}},[r._v("px4_fmu-v4_default"),e("OutboundLink")],1),r._v(" 설정에서 "),e("code",[r._v("distance_sensor")]),r._v("를 보거나 검색할 수 있습니다.")])]),r._v(" "),e("h2",{attrs:{id:"i2c-드라이버-예제"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#i2c-드라이버-예제"}},[r._v("#")]),r._v(" I2C 드라이버 예제")]),r._v(" "),e("p",[r._v("I2C 드라이버 샘플은 "),e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/drivers",target:"_blank",rel:"noopener noreferrer"}},[r._v("/src/drivers/"),e("OutboundLink")],1),r._v("에서 "),e("strong",[r._v("i2c.h")]),r._v("를 검색하십시오.")]),r._v(" "),e("p",[r._v("몇 가지 샘플은 다음과 같습니다.")]),r._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/drivers/distance_sensor/lightware_laser_i2c",target:"_blank",rel:"noopener noreferrer"}},[r._v("drivers/distance_sensor/lightware_laser_i2c"),e("OutboundLink")],1),r._v(" - "),e("RouterLink",{attrs:{to:"/ko/sensor/sfxx_lidar.html"}},[r._v("Lightware SF1XX LIDAR")]),r._v("용 I2C 드라이버.")],1),r._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/drivers/distance_sensor/lightware_laser_serial",target:"_blank",rel:"noopener noreferrer"}},[r._v("drivers/distance_sensor/lightware_laser_serial"),e("OutboundLink")],1),r._v(" - "),e("RouterLink",{attrs:{to:"/ko/sensor/sfxx_lidar.html"}},[r._v("Lightware SF1XX LIDAR")]),r._v("용 직렬 드라이버.")],1),r._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/drivers/barometer/ms5611",target:"_blank",rel:"noopener noreferrer"}},[r._v("drivers/ms5611"),e("OutboundLink")],1),r._v(" - I2C(또는 SPI)로 연결된 MS5611와 MS6507 기압 센서용 I2C 드라이버.")])]),r._v(" "),e("h2",{attrs:{id:"추가-정보"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#추가-정보"}},[r._v("#")]),r._v(" 추가 정보")]),r._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://en.wikipedia.org/wiki/I%C2%B2C",target:"_blank",rel:"noopener noreferrer"}},[r._v("I2C"),e("OutboundLink")],1),r._v(" (위키피디아) - 영문")]),r._v(" "),e("li",[e("a",{attrs:{href:"https://learn.sparkfun.com/tutorials/i2c",target:"_blank",rel:"noopener noreferrer"}},[r._v("I2C 비교 개요"),e("OutboundLink")],1),r._v(" (learn.sparkfun.com)")]),r._v(" "),e("li",[e("RouterLink",{attrs:{to:"/ko/middleware/drivers.html"}},[r._v("드라이버 프레임워크")])],1)])])}),[],!1,null,null,null);t.default=a.exports}}]);