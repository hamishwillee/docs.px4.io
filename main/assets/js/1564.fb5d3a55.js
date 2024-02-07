(window.webpackJsonp=window.webpackJsonp||[]).push([[1564],{3013:function(t,e,o){"use strict";o.r(e);var r=o(19),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"듀얼-u-blox-f9p를-사용한-rtk-gps-헤딩"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#듀얼-u-blox-f9p를-사용한-rtk-gps-헤딩"}},[t._v("#")]),t._v(" 듀얼 u-blox F9P를 사용한 RTK GPS 헤딩")]),t._v(" "),o("p",[t._v("기체에 장착한 두 개의 u-blox F9P "),o("RouterLink",{attrs:{to:"/ko/gps_compass/rtk_gps.html"}},[t._v("RTK GPS")]),t._v(" 모듈을 사용하여 방향각을 정확하게 계산할 수 있습니다 (즉, 나침반 기반 방향 추정의 대안). 이 시나리오에서 두 개의 GPS 장치를 "),o("em",[t._v("무빙베이스")]),t._v("와 "),o("em",[t._v("로버")]),t._v("라고 합니다.")],1),t._v(" "),o("h2",{attrs:{id:"지원-장치"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#지원-장치"}},[t._v("#")]),t._v(" 지원 장치")]),t._v(" "),o("p",[t._v("This feature works on F9P devices that support CAN or expose the GPS UART2 port.")]),t._v(" "),o("p",[t._v("The following devices are supported:")]),t._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://arkelectron.com/product/ark-rtk-gps/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ARK RTK GPS"),o("OutboundLink")],1),t._v(" (arkelectron.com)")]),t._v(" "),o("li",[o("a",{attrs:{href:"https://www.sparkfun.com/products/15136",target:"_blank",rel:"noopener noreferrer"}},[t._v("SparkFun GPS-RTK2 Board - ZED-F9P"),o("OutboundLink")],1),t._v(" (www.sparkfun.com)")]),t._v(" "),o("li",[o("a",{attrs:{href:"https://store-drotek.com/911-sirius-rtk-gnss-rover-f9p.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("SIRIUS RTK GNSS ROVER (F9P)"),o("OutboundLink")],1),t._v(" (store-drotek.com)")]),t._v(" "),o("li",[o("a",{attrs:{href:"https://store.mrobotics.io/product-p/m10020d.htm",target:"_blank",rel:"noopener noreferrer"}},[t._v("mRo u-blox ZED-F9 RTK L1/L2 GPS"),o("OutboundLink")],1),t._v(" (store.mrobotics.io)")]),t._v(" "),o("li",[o("a",{attrs:{href:"https://holybro.com/products/h-rtk-f9p-gnss-series",target:"_blank",rel:"noopener noreferrer"}},[t._v("Holybro H-RTK F9P Helical or Base"),o("OutboundLink")],1),t._v(" (Holybro Store)")]),t._v(" "),o("li",[o("a",{attrs:{href:"https://holybro.com/collections/dronecan-h-rtk",target:"_blank",rel:"noopener noreferrer"}},[t._v("Holybro DroneCAN H-RTK F9P Rover or Helical"),o("OutboundLink")],1),t._v(" (Holybro Store)")]),t._v(" "),o("li",[o("a",{attrs:{href:"https://store.cuav.net/shop/c-rtk-9ps/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CUAV C-RTK 9Ps"),o("OutboundLink")],1),t._v(" (CUAV Store)")])]),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/ko/gps_compass/rtk_gps_freefly.html"}},[t._v("Freefly RTK GPS")]),t._v(" and "),o("RouterLink",{attrs:{to:"/ko/gps_compass/rtk_gps_holybro_h-rtk-f9p.html"}},[t._v("Holybro H-RTK F9P Rover Lite")]),t._v(" cannot be used because they do not expose the CAN or UART2 port.")],1),t._v(" "),o("li",[t._v("Supported devices are also listed in "),o("RouterLink",{attrs:{to:"/ko/gps_compass/#supported-gnss-and-or-compass"}},[t._v("GPS/Compass > Supported GPS and/or Compass")]),t._v(".")],1)])]),t._v(" "),o("h2",{attrs:{id:"설정"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#설정"}},[t._v("#")]),t._v(" 설정")]),t._v(" "),o("p",[t._v("이상적으로 두 안테나는 동일한 레벨/수평면에서 동일한 방향으로, 동일한 접지면 크기와 모양을 가지고 있어야합니다 ("),o("a",{attrs:{href:"https://www.u-blox.com/sites/default/files/ZED-F9P-MovingBase_AppNote_%28UBX-19009093%29.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("애플리케이션 노트"),o("OutboundLink")],1),t._v(", 섹션 "),o("em",[t._v("시스템 레벨 고려 사항")]),t._v(").")]),t._v(" "),o("ul",[o("li",[t._v("애플리케이션 노트에는 모듈 사이에 필요한 최소 간격이 명시되어 있지 않습니다 (PX4를 실행하는 테스트 차량에 50cm가 사용되었습니다).")]),t._v(" "),o("li",[t._v("The antennas can be positioned as needed, but the "),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#GPS_YAW_OFFSET"}},[t._v("GPS_YAW_OFFSET")]),t._v(" must be configured: "),o("RouterLink",{attrs:{to:"/ko/gps_compass/#configuring-gps-as-yaw-heading-source"}},[t._v("GPS > Configuration > GPS as Yaw/Heading Source")]),t._v(".")],1)]),t._v(" "),o("h3",{attrs:{id:"uart-setup"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#uart-setup"}},[t._v("#")]),t._v(" UART Setup")]),t._v(" "),o("ul",[o("li",[t._v('The UART2 of the GPS devices need to be connected together (TXD2 of the "Moving Base" to RXD2 of the "Rover")')]),t._v(" "),o("li",[t._v("Connect UART1 on each of the GPS to (separate) unused UART's on the autopilot, and configure both of them as GPS with baudrate set to "),o("code",[t._v("Auto")]),t._v(". The mapping is as follows:\n"),o("ul",[o("li",[t._v("Main GPS = Rover")]),t._v(" "),o("li",[t._v("Secondary GPS = Moving Base")])])]),t._v(" "),o("li",[t._v("Set "),o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#GPS_UBX_MODE"}},[t._v("GPS_UBX_MODE")]),t._v(" to "),o("code",[t._v("Heading")]),t._v(" (1)")],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_GPS_CTRL"}},[t._v("EKF2_GPS_CTRL")]),t._v(" parameter bit 3 must be set (see "),o("RouterLink",{attrs:{to:"/ko/gps_compass/#configuring-gps-as-yaw-heading-source"}},[t._v("GPS > Configuration > GPS as Yaw/Heading Source")]),t._v(").")],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#GPS_YAW_OFFSET"}},[t._v("GPS_YAW_OFFSET")]),t._v(" may need to be set (see "),o("RouterLink",{attrs:{to:"/ko/gps_compass/#configuring-gps-as-yaw-heading-source"}},[t._v("GPS > Configuration > GPS as Yaw/Heading Source")]),t._v(").")],1),t._v(" "),o("li",[t._v("Reboot and wait until both devices have GPS reception. "),o("code",[t._v("gps status")]),t._v(" should then show the Main GPS going into RTK mode, which means the heading angle is available.")])]),t._v(" "),o("h3",{attrs:{id:"can-setup"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#can-setup"}},[t._v("#")]),t._v(" CAN Setup")]),t._v(" "),o("p",[t._v("Refer to the CAN RTK GPS documentation for each specific device for the setup instructions (such as "),o("RouterLink",{attrs:{to:"/ko/dronecan/ark_rtk_gps.html#setting-up-moving-baseline-gps-heading"}},[t._v("ARK RTK GPS > Setting Up Moving Baseline & GPS Heading")]),t._v(")")],1),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("If using RTK with a fixed base station the secondary GPS will show the RTK state w.r.t. the base station.")])]),t._v(" "),o("h2",{attrs:{id:"further-information"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#further-information"}},[t._v("#")]),t._v(" Further Information")]),t._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://www.u-blox.com/sites/default/files/ZED-F9P-MovingBase_AppNote_%28UBX-19009093%29.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("ZED-F9P Moving base applications (Application note)"),o("OutboundLink")],1),t._v(" - General setup/instructions.")]),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/ko/gps_compass/#configuring-gps-as-yaw-heading-source"}},[t._v("GPS > Configuration > GPS as Yaw/Heading Source")])],1)])])}),[],!1,null,null,null);e.default=a.exports}}]);