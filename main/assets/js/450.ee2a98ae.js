(window.webpackJsonp=window.webpackJsonp||[]).push([[450],{1508:function(t,r,e){t.exports=e.p+"assets/img/lightware_studio_i2c_config.44f32c65.jpg"},1509:function(t,r,e){t.exports=e.p+"assets/img/sf1xx_i2c.05a5c69d.jpg"},3030:function(t,r,e){"use strict";e.r(r);var a=e(19),_=Object(a.a)({},(function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"lightware-sf1x-sf02-lw20-라이다"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lightware-sf1x-sf02-lw20-라이다"}},[t._v("#")]),t._v(" LightWare SF1X/SF02/LW20 라이다")]),t._v(" "),a("p",[t._v('LightWare는 UAV에 장착에 적합한 경량의 범용 레이저 고도계( "라이다")를 개발합니다. 지형 추적, 정밀 호버링 (예 : 사진 촬영), 규제 높이 제한 경고, 충돌 방지 감지 등에 사용됩니다.')]),t._v(" "),a("p",[a("img",{attrs:{src:e(423),alt:"LightWare SF11/C 라이다"}})]),t._v(" "),a("h2",{attrs:{id:"지원-모델"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#지원-모델"}},[t._v("#")]),t._v(" 지원 모델")]),t._v(" "),a("p",[t._v("아래의 모델들은 PX4에서 지원되며, I2C 또는 직렬 버스에 연결할 수 있습니다 (아래 표는 각 모델에 사용할 수 있는 버스를 나타냄).")]),t._v(" "),a("h3",{attrs:{id:"이용-가능"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#이용-가능"}},[t._v("#")]),t._v(" 이용 가능")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("모델")]),t._v(" "),a("th",[t._v("범위 (m)")]),t._v(" "),a("th",[t._v("버스")]),t._v(" "),a("th",[t._v("설명")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("a",{attrs:{href:"https://lightwarelidar.com/products/sf11-c-100-m",target:"_blank",rel:"noopener noreferrer"}},[t._v("SF11/C"),a("OutboundLink")],1)]),t._v(" "),a("td",[t._v("100")]),t._v(" "),a("td",[t._v("직렬 또는 I2C 버스")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"https://lightware.co.za/products/lw20-c-100-m",target:"_blank",rel:"noopener noreferrer"}},[t._v("LW20/C"),a("OutboundLink")],1)]),t._v(" "),a("td",[t._v("100")]),t._v(" "),a("td",[t._v("I2C 버스")]),t._v(" "),a("td",[t._v("감지 및 회피 애플리케이션을 위한 서보가 있는 방수 (IP67)")])])])]),t._v(" "),a("h3",{attrs:{id:"단종됨"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#단종됨"}},[t._v("#")]),t._v(" 단종됨")]),t._v(" "),a("p",[t._v("다음 모델은 제조업체에서 더 이상 판매하지 않습니다.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("모델")]),t._v(" "),a("th",[t._v("범위")]),t._v(" "),a("th",[t._v("버스")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("a",{attrs:{href:"http://documents.lightware.co.za/SF02%20-%20Laser%20Rangefinder%20Manual%20-%20Rev%208.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("SF02"),a("OutboundLink")],1)]),t._v(" "),a("td",[t._v("50")]),t._v(" "),a("td",[t._v("직렬")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"http://documents.lightware.co.za/SF10%20-%20Laser%20Altimeter%20Manual%20-%20Rev%206.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("SF10/A"),a("OutboundLink")],1)]),t._v(" "),a("td",[t._v("25")]),t._v(" "),a("td",[t._v("직렬 또는 I2C 버스")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"http://documents.lightware.co.za/SF10%20-%20Laser%20Altimeter%20Manual%20-%20Rev%206.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("SF10/B"),a("OutboundLink")],1)]),t._v(" "),a("td",[t._v("50")]),t._v(" "),a("td",[t._v("직렬 또는 I2C 버스")])]),t._v(" "),a("tr",[a("td",[t._v("SF10/C")]),t._v(" "),a("td",[t._v("100m")]),t._v(" "),a("td",[t._v("직렬 또는 I2C 버스")])]),t._v(" "),a("tr",[a("td",[t._v("LW20/B")]),t._v(" "),a("td",[t._v("50")]),t._v(" "),a("td",[t._v("I2C 버스")])])])]),t._v(" "),a("h2",{attrs:{id:"i2c-설정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#i2c-설정"}},[t._v("#")]),t._v(" I2C 설정")]),t._v(" "),a("p",[t._v("I2C 포트에 연결 가능한 모델을 위의 표를 참고하십시오.")]),t._v(" "),a("h3",{attrs:{id:"라이다-설정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#라이다-설정"}},[t._v("#")]),t._v(" 라이다 설정")]),t._v(" "),a("p",[t._v("이 하드웨어는 기본적으로 활성화된 Pixhawk I2C 호환성과 함께 제공되지 않습니다. 지원을 활성화하려면 "),a("a",{attrs:{href:"https://lightwarelidar.com/pages/lightware-studio",target:"_blank",rel:"noopener noreferrer"}},[t._v("LightWare Studio"),a("OutboundLink")],1),t._v("를 다운로드하고 "),a("strong",[t._v("매개 변수 > 통신")]),t._v("으로 이동하여 **I2C 호환 모드(Pixhawk)**를 선택하여야합니다.")]),t._v(" "),a("p",[a("img",{attrs:{src:e(1508),alt:"LightWare SF11/C Lidar-I2C 설정"}})]),t._v(" "),a("p",[a("a",{attrs:{id:"i2c_hardware_setup"}})]),t._v(" "),a("h3",{attrs:{id:"하드웨어"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#하드웨어"}},[t._v("#")]),t._v(" 하드웨어")]),t._v(" "),a("p",[t._v("아래 그림과 같이 자동조종장치 I2C 포트에 라이다를 연결합니다 (이 경우 "),a("RouterLink",{attrs:{to:"/ko/flight_controller/mro_pixhawk.html"}},[t._v("Pixhawk 1")]),t._v("의 경우).")],1),t._v(" "),a("p",[a("img",{attrs:{src:e(1509),alt:"SF1XX LIDAR-I2C 연결"}})]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("일부 이전 버전은 PX4에서 사용할 수 없습니다. 특히 "),a("code",[t._v("0x55")]),t._v("와 같은 I2C 주소를 갖도록 잘못 설정되어 "),a("code",[t._v("rgbled")]),t._v(" 모듈과 충돌할 수 있습니다. 리눅스 시스템에서는 "),a("a",{attrs:{href:"http://manpages.ubuntu.com/manpages/bionic/en/man8/i2cdetect.8.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("i2cdetect"),a("OutboundLink")],1),t._v("를 사용하여 주소를 확인할 수 있습니다. I2C 주소가 "),a("code",[t._v("0x66")]),t._v("과 동일하면, 센서를 PX4와 함께 사용할 수 있습니다.")])]),t._v(" "),a("p",[a("a",{attrs:{id:"i2c_parameter_setup"}})]),t._v(" "),a("h3",{attrs:{id:"매개변수-설정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#매개변수-설정"}},[t._v("#")]),t._v(" 매개변수 설정")]),t._v(" "),a("p",[t._v("거리계 모델과 일치하도록 "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SENS_EN_SF1XX"}},[t._v("SENS_EN_SF1XX")]),t._v(" 매개변수를 설정후 재부팅 하십시오.")],1),t._v(" "),a("h2",{attrs:{id:"직렬-설정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#직렬-설정"}},[t._v("#")]),t._v(" 직렬 설정")]),t._v(" "),a("p",[a("a",{attrs:{id:"serial_hardware_setup"}})]),t._v(" "),a("h3",{attrs:{id:"하드웨어-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#하드웨어-2"}},[t._v("#")]),t._v(" 하드웨어")]),t._v(" "),a("p",[t._v("LIDAR는 사용하지 않는 "),a("em",[t._v("직렬 포트")]),t._v(" (UART) (예 : TELEM2, TELEM3, GPS2 등)에 연결할 수 있습니다.")]),t._v(" "),a("p",[a("a",{attrs:{id:"serial_parameter_setup"}})]),t._v(" "),a("h3",{attrs:{id:"매개변수-설정-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#매개변수-설정-2"}},[t._v("#")]),t._v(" 매개변수 설정")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SENS_SF0X_CFG"}},[t._v("SENS_SF0X_CFG")]),t._v("를 사용하여 LIDAR가 실행될 "),a("RouterLink",{attrs:{to:"/ko/peripherals/serial_configuration.html"}},[t._v("직렬 포트를 설정")]),t._v("합니다. 포트 전송속도는 드라이버에 의해 설정되므로, 추가로 설정할 필요는 없습니다.")],1),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[a("em",[t._v("QGroundControl")]),t._v("에서 설정 매개변수를 사용할 수 없는 경우에는 "),a("RouterLink",{attrs:{to:"/ko/peripherals/serial_configuration.html#parameter_not_in_firmware"}},[t._v("펌웨어에 드라이버를 추가")]),t._v("하여야 합니다.")],1)]),t._v(" "),a("p",[t._v("그런 다음 "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SENS_EN_SF0X"}},[t._v("SENS_EN_SF0X")]),t._v(" 매개변수를 거리계 모델과 일치하도록 설정하고 재부팅하십시오.")],1),t._v(" "),a("h2",{attrs:{id:"추가-정보"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#추가-정보"}},[t._v("#")]),t._v(" 추가 정보")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/ko/modules/modules_driver_distance_sensor.html#lightware-laser-i2c"}},[t._v("Modules Reference: Distance Sensor (Driver) : lightware_laser_i2c")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ko/modules/modules_driver_distance_sensor.html#lightware-laser-serial"}},[t._v("Modules Reference: Distance Sensor (Driver) : lightware_laser_serial")])],1)])])}),[],!1,null,null,null);r.default=_.exports},423:function(t,r,e){t.exports=e.p+"assets/img/sf11c_120_m.6579362e.jpg"}}]);