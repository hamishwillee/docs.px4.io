(window.webpackJsonp=window.webpackJsonp||[]).push([[1245],{2397:function(t,r,e){"use strict";e.r(r);var o=e(19),_=Object(o.a)({},(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"듀얼-u-blox-f9p를-사용한-rtk-gps-헤딩"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#듀얼-u-blox-f9p를-사용한-rtk-gps-헤딩"}},[t._v("#")]),t._v(" 듀얼 u-blox F9P를 사용한 RTK GPS 헤딩")]),t._v(" "),e("p",[t._v("기체에 장착한 두 개의 u-blox F9P "),e("RouterLink",{attrs:{to:"/ko/gps_compass/rtk_gps.html"}},[t._v("RTK GPS")]),t._v(" 모듈을 사용하여 방향각을 정확하게 계산할 수 있습니다 (즉, 나침반 기반 방향 추정의 대안). 이 시나리오에서 두 개의 GPS 장치를 "),e("em",[t._v("무빙베이스")]),t._v("와 "),e("em",[t._v("로버")]),t._v("라고 합니다.")],1),t._v(" "),e("h2",{attrs:{id:"지원-장치"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#지원-장치"}},[t._v("#")]),t._v(" 지원 장치")]),t._v(" "),e("p",[t._v("이 기능은 GPS UART2 포트기 노출된 F9P 장치에서 작동합니다 (설정을 위하여 포트에 액세스하여야 함).")]),t._v(" "),e("p",[t._v("이 사용 사례에 대하여 다음 장치들이 지원됩니다.")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://www.sparkfun.com/products/15136",target:"_blank",rel:"noopener noreferrer"}},[t._v("SparkFun GPS-RTK2 Board - ZED-F9P"),e("OutboundLink")],1),t._v(" (www.sparkfun.com)")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://store-drotek.com/911-1010-sirius-rtk-gnss-rover-f9p.html#/158-sensor-no_magnetometer",target:"_blank",rel:"noopener noreferrer"}},[t._v("SIRIUS RTK GNSS ROVER (F9P)"),e("OutboundLink")],1),t._v(" (store-drotek.com)")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://store.mrobotics.io/product-p/m10020d.htm",target:"_blank",rel:"noopener noreferrer"}},[t._v("mRo u-blox ZED-F9 RTK L1/L2 GPS"),e("OutboundLink")],1),t._v(" (store.mrobotics.io)")])]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/ko/gps_compass/rtk_gps_freefly.html"}},[t._v("Freefly RTK GPS")]),t._v("와 "),e("RouterLink",{attrs:{to:"/ko/gps_compass/rtk_gps_holybro_h-rtk-f9p.html"}},[t._v("Holybro H-RTK F9P GNSS")]),t._v("는 UART2 포트를 노출하지 않으므로 사용할 수 없습니다.")],1),t._v(" "),e("li",[t._v("지원되는 장치는 "),e("RouterLink",{attrs:{to:"/ko/gps_compass/#supported-gps-and-or-compass"}},[t._v("지원되는 GPS 및 나침반")]),t._v("을 참고하십시오.")],1)])]),t._v(" "),e("h2",{attrs:{id:"설정"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#설정"}},[t._v("#")]),t._v(" 설정")]),t._v(" "),e("p",[t._v("이상적으로 두 안테나는 동일한 레벨/수평면에서 동일한 방향으로, 동일한 접지면 크기와 모양을 가지고 있어야합니다 ("),e("a",{attrs:{href:"https://www.u-blox.com/sites/default/files/ZED-F9P-MovingBase_AppNote_%28UBX-19009093%29.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("애플리케이션 노트"),e("OutboundLink")],1),t._v(", 섹션 "),e("em",[t._v("시스템 레벨 고려 사항")]),t._v(").")]),t._v(" "),e("ul",[e("li",[t._v("애플리케이션 노트에는 모듈 사이에 필요한 최소 간격이 명시되어 있지 않습니다 (PX4를 실행하는 테스트 차량에 50cm가 사용되었습니다).")]),t._v(" "),e("li",[t._v("필요에 따라 안테나를 배치 할 수 있지만 "),e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#GPS_YAW_OFFSET"}},[t._v("GPS_YAW_OFFSET")]),t._v("을 설정하여야합니다. "),e("RouterLink",{attrs:{to:"/ko/gps_compass/#configuring-gps-as-yaw-heading-source"}},[t._v("GPS > 구성 > 요/헤딩 소스로서의 GPS")]),t._v(".")],1)]),t._v(" "),e("p",[t._v("개요:")]),t._v(" "),e("ul",[e("li",[t._v('GPS 장치의 UART2를 함께 연결하여야합니다 ( "Moving Base"의 TXD2를 "Rover"의 RXD2).')]),t._v(" "),e("li",[t._v("각 GPS의 UART1을 자동조종장치의 미사용 UART에 (별도의) 연결하고 전송 속도를 "),e("code",[t._v("자동")]),t._v("으로 설정하여 둘 다 GPS로 설정합니다. 매핑은 다음과 같습니다.\n"),e("ul",[e("li",[t._v("주 GPS = 로버")]),t._v(" "),e("li",[t._v("보조 GPS = 무빙베이스")])])]),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#GPS_UBX_MODE"}},[t._v("GPS_UBX_MODE")]),t._v("를 "),e("code",[t._v("방향각")]),t._v("으로 설정합니다 (1).")],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#EKF2_AID_MASK"}},[t._v("EKF2_AID_MASK")]),t._v(" 매개 변수에 비트 7을 설정하여합니다 ("),e("RouterLink",{attrs:{to:"/ko/gps_compass/#configuring-gps-as-yaw-heading-source"}},[t._v("GPS &# 062; 구성 > 요/헤딩 소스로서의 GPS")]),t._v(" 참조).")],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#GPS_YAW_OFFSET"}},[t._v("GPS_YAW_OFFSET")]),t._v("을 설정하여야 할 수 있습니다 ("),e("RouterLink",{attrs:{to:"/ko/gps_compass/#configuring-gps-as-yaw-heading-source"}},[t._v("GPS > 설정 > 요/방향 소스로 GPS")]),t._v(" 참조).")],1),t._v(" "),e("li",[t._v("재부팅하고 두 장치가 모두 GPS를 수신할 때까지 기다립니다. 그러면 "),e("code",[t._v("gps 상태")]),t._v("에 주 GPS가 RTK 모드로 들어가는 것으로 표시되어야하며, 이는 방향각을 사용할 수 있음을 의미합니다.")])]),t._v(" "),e("div",{staticClass:"custom-block note"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[t._v("고정 기지국과 함께 RTK를 사용하는 경우 보조 GPS는 RTK 상태  w.r.t를 표시합니다.")])]),t._v(" "),e("h2",{attrs:{id:"추가-정보"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#추가-정보"}},[t._v("#")]),t._v(" 추가 정보")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://www.u-blox.com/sites/default/files/ZED-F9P-MovingBase_AppNote_%28UBX-19009093%29.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("ZED-F9P 무빙베이스 애플리케이션 (애플리케이션 노트)"),e("OutboundLink")],1),t._v(" -일반 설정/지침.")]),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/ko/gps_compass/#configuring-gps-as-yaw-heading-source"}},[t._v("GPS > 설정 > GPS 요/방향각 소스로 사용")])],1)])])}),[],!1,null,null,null);r.default=_.exports}}]);