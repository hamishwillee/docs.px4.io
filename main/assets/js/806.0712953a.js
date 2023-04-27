(window.webpackJsonp=window.webpackJsonp||[]).push([[806],{1529:function(t,e,a){t.exports=a.p+"assets/img/us_d1_hero.28f68334.jpg"},3045:function(t,e,a){"use strict";a.r(e);var r=a(19),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"ainstein-us-d1-standard-radar-altimeter"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ainstein-us-d1-standard-radar-altimeter"}},[t._v("#")]),t._v(" Ainstein US-D1 Standard Radar Altimeter")]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[t._v("이것은 "),r("em",[t._v("Aerotenna uLanding Radar")]),t._v("(단종됨)를 대체하지만, 동일한 드라이버와 설정을 사용합니다.")])]),t._v(" "),r("p",[r("em",[t._v("Ainstein")]),t._v(" "),r("a",{attrs:{href:"https://ainstein.ai/drone-makers-drone-service-providers/us-d1/",target:"_blank",rel:"noopener noreferrer"}},[t._v("US-D1 표준 레이더 고도계"),r("OutboundLink")],1),t._v("는 UAV에 최적화된 소형 마이크로파 거리계입니다. With a sensing range of about 50 metres, it is useful for applications including terrain following, precision hovering (e.g. for photography), anti-collision sensing etc. 이 제품의 특별한 장점은 모든 기상 조건과 모든 지형 유형(물 포함)에서 잘 작동한다는 점입니다. The user manual can be found "),r("a",{attrs:{href:"https://ainstein.ai/wp-content/uploads/2022/04/US-D1-Technical-User-Manual.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),r("OutboundLink")],1),t._v(".")]),t._v(" "),r("p",[r("img",{attrs:{src:a(1529),alt:"Ainstein US-DA"}})]),t._v(" "),r("p",[t._v("거리계는 대부분의 펌웨어에 자동으로 포함되지 않으므로, "),r("em",[t._v("QGroundControl")]),t._v("을 통하여 매개변수를 설정하는 것만으로는 사용할 수 없습니다 (다른 거리계에서 가능). 이를 사용하려면 펌웨어에 드라이버를 추가하고, 부팅시 드라이버를 시작하도록 설정 파일을 업데이트하여야합니다. 아래 섹션에서는 방법을 설명합니다.")]),t._v(" "),r("h2",{attrs:{id:"하드웨어-설정"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#하드웨어-설정"}},[t._v("#")]),t._v(" 하드웨어 설정")]),t._v(" "),r("p",[t._v("거리계는 NuttX 또는 Posix OS에서 직렬 포트를 제공하는 하드웨어에서 지원됩니다. 대부분의 "),r("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk_series.html"}},[t._v("Pixhawk 시리즈")]),t._v(" 컨트롤러가 이에 해당됩니다.")],1),t._v(" "),r("p",[t._v("LIDAR는 "),r("em",[t._v("직렬 포트")]),t._v(" UART (예 : TELEM2, TELEM3, GPS2 등)에 연결됩니다.")]),t._v(" "),r("h2",{attrs:{id:"매개변수-설정"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#매개변수-설정"}},[t._v("#")]),t._v(" 매개변수 설정")]),t._v(" "),r("p",[r("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#SENS_ULAND_CFG"}},[t._v("SENS_ULAND_CFG")]),t._v("를 사용하여 LIDAR가 실행되는 "),r("RouterLink",{attrs:{to:"/ko/peripherals/serial_configuration.html"}},[t._v("직렬 포트를 설정")]),t._v("합니다. 포트 전송속도는 드라이버에 의해 설정되므로, 추가로 설정할 필요는 없습니다.")],1),t._v(" "),r("div",{staticClass:"custom-block note"},[r("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),r("p",[r("em",[t._v("QGroundControl")]),t._v("에서 설정 매개변수를 사용할 수 없는 경우에는 "),r("RouterLink",{attrs:{to:"/ko/peripherals/serial_configuration.html#parameter_not_in_firmware"}},[t._v("펌웨어에 드라이버를 추가")]),t._v("하여야 합니다:")],1),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("CONFIG_DRIVERS_DISTANCE_SENSOR_ULANDING_RADAR=y\n")])])])])])}),[],!1,null,null,null);e.default=s.exports}}]);