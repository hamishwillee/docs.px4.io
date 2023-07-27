(window.webpackJsonp=window.webpackJsonp||[]).push([[1694],{3071:function(e,r,t){"use strict";t.r(r);var a=t(19),s=Object(a.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"i2c-bus-development-overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#i2c-bus-development-overview"}},[e._v("#")]),e._v(" I2C Bus (Development Overview)")]),e._v(" "),t("p",[e._v("I2C는 2개의 와이어로 연결하여 여러개의 마스터 장치를 여러개의 슬레이브 장치에 연결하는 패킷교환 직렬통신 프로토콜입니다. 보드내의 프로세서와 마이크로컨트롤러에서 저속 주변 장치 IC와의 근거리 통신에 사용됩니다.")]),e._v(" "),t("p",[e._v("픽스호크 PX4는 다음 목적으로 이 프로토콜을 사용합니다:")]),e._v(" "),t("ul",[t("li",[e._v("Connecting off board components that require higher data rates than provided by a strict serial UART, such as rangefinders.")]),e._v(" "),t("li",[e._v("I2C만 지원하는 주변기기 호환성")]),e._v(" "),t("li",[e._v("여러 장치를 단일 버스에 연결할 수 있습니다(포트 절약에 유용) 예: LED, 지자계센서, 거리센서 등")])]),e._v(" "),t("div",{staticClass:"custom-block note"},[t("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),t("p",[e._v("The page "),t("RouterLink",{attrs:{to:"/ko/sensor_bus/i2c_general.html"}},[e._v("Hardware > I2C Peripherals")]),e._v(" contains information about how to "),t("em",[e._v("use")]),e._v(" (rather than integrate) I2C peripherals and solve common setup problems.")],1)]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("IMUs (accelerometers/gyroscopes) should not be attached via I2C (typically the [SPI](https://en.wikipedia.org/wiki/Serial_Peripheral_Interface_Bus) bus is used). The bus is not fast enough even with a single device attached to allow vibration filtering (for instance), and the performance degrades further with every additional device on the bus.")])]),e._v(" "),t("h2",{attrs:{id:"i2c-장치-통합"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#i2c-장치-통합"}},[e._v("#")]),e._v(" I2C 장치 통합")]),e._v(" "),t("p",[e._v("Drivers should "),t("code",[e._v("#include <drivers/device/i2c.h>")]),e._v(" and then provide an implementation of the abstract base class "),t("code",[e._v("I2C")]),e._v(" defined in "),t("strong",[e._v("I2C.hpp")]),e._v(" for the target hardware (i.e. for NuttX "),t("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/src/lib/drivers/device/nuttx/I2C.hpp",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(").")]),e._v(" "),t("p",[e._v("A small number of drivers will also need to include headers for their type of device ("),t("strong",[e._v("drv_*.h")]),e._v(") in "),t("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/main/src/drivers",target:"_blank",rel:"noopener noreferrer"}},[e._v("/src/drivers/"),t("OutboundLink")],1),e._v(" - e.g. "),t("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/main/src/drivers/drv_led.h",target:"_blank",rel:"noopener noreferrer"}},[e._v("drv_led.h"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("To include a driver in firmware you must add the driver to the board-specific cmake file that corresponds to the target you want to build for. You can do this for a single driver:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("drivers/distance_sensor/lightware_laser_i2c\n")])])]),t("p",[e._v("You can also include all drivers of a particular type.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("distance_sensor # all available distance sensor drivers\n")])])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("For example, you can see/search for "),t("code",[e._v("CONFIG_DRIVERS_DISTANCE_SENSOR_LIGHTWARE_LASER_I2C")]),e._v(" in the "),t("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/blob/master/boards/px4/fmu-v4/default.px4board",target:"_blank",rel:"noopener noreferrer"}},[e._v("px4_fmu-v4_default"),t("OutboundLink")],1),e._v(" configuration.")])]),e._v(" "),t("h2",{attrs:{id:"i2c-드라이버-예제"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#i2c-드라이버-예제"}},[e._v("#")]),e._v(" I2C 드라이버 예제")]),e._v(" "),t("p",[e._v("To find I2C driver examples, search for "),t("strong",[e._v("i2c.h")]),e._v(" in "),t("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/drivers",target:"_blank",rel:"noopener noreferrer"}},[e._v("/src/drivers/"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("Just a few examples are:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/drivers/distance_sensor/lightware_laser_i2c",target:"_blank",rel:"noopener noreferrer"}},[e._v("drivers/distance_sensor/lightware_laser_i2c"),t("OutboundLink")],1),e._v(" - "),t("RouterLink",{attrs:{to:"/ko/sensor/sfxx_lidar.html"}},[e._v("Lightware SF1XX LIDAR")]),e._v("용 I2C 드라이버.")],1),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/drivers/distance_sensor/lightware_laser_serial",target:"_blank",rel:"noopener noreferrer"}},[e._v("drivers/distance_sensor/lightware_laser_serial"),t("OutboundLink")],1),e._v(" - "),t("RouterLink",{attrs:{to:"/ko/sensor/sfxx_lidar.html"}},[e._v("Lightware SF1XX LIDAR")]),e._v("용 직렬 드라이버.")],1),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/PX4/PX4-Autopilot/tree/master/src/drivers/barometer/ms5611",target:"_blank",rel:"noopener noreferrer"}},[e._v("drivers/ms5611"),t("OutboundLink")],1),e._v(" - I2C(또는 SPI)로 연결된 MS5611와 MS6507 기압 센서용 I2C 드라이버.")])]),e._v(" "),t("h2",{attrs:{id:"추가-정보"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#추가-정보"}},[e._v("#")]),e._v(" 추가 정보")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://en.wikipedia.org/wiki/I%C2%B2C",target:"_blank",rel:"noopener noreferrer"}},[e._v("I2C"),t("OutboundLink")],1),e._v(" (위키피디아) - 영문")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://learn.sparkfun.com/tutorials/i2c",target:"_blank",rel:"noopener noreferrer"}},[e._v("I2C 비교 개요"),t("OutboundLink")],1),e._v(" (learn.sparkfun.com)")]),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/ko/middleware/drivers.html"}},[e._v("드라이버 프레임워크")])],1)])])}),[],!1,null,null,null);r.default=s.exports}}]);