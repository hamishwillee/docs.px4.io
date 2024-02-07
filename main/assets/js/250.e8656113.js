(window.webpackJsonp=window.webpackJsonp||[]).push([[250],{1304:function(t,e,r){t.exports=r.p+"assets/img/VTOLTiltRotor_eflite_convergence.a28b921b.svg"},1305:function(t,e,r){t.exports=r.p+"assets/img/eflight_convergence_pixfalcon_mounting.25864f64.jpg"},1306:function(t,e,r){t.exports=r.p+"assets/img/eflight_convergence_telemetry_module.e0677c88.jpg"},1307:function(t,e,r){t.exports=r.p+"assets/img/eflight_convergence_gps_mounting.c9abed81.jpg"},1308:function(t,e,r){t.exports=r.p+"assets/img/qgc_setup_airframe.76bea14d.jpg"},2975:function(t,e,r){"use strict";r.r(e);var o=r(19),a=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"e-flite-convergence-틸트로터-vtol-pixfalcon"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#e-flite-convergence-틸트로터-vtol-pixfalcon"}},[t._v("#")]),t._v(" E-flite Convergence 틸트로터 VTOL (Pixfalcon)")]),t._v(" "),o("p",[o("a",{attrs:{href:"https://youtu.be/HNedXQ_jhYo",target:"_blank",rel:"noopener noreferrer"}},[t._v("E-Flite 컨버전스"),o("OutboundLink")],1),t._v(" PX4의 자율 비행이 가능한 VTOL로 변환할 수 있습니다. 공간은 충분하지 않지만, GPS, 텔레메트리를 장착하기에는 "),o("RouterLink",{attrs:{to:"/ko/flight_controller/pixfalcon.html"}},[t._v("Pixfalcon")]),t._v(" 비행 콘트롤러의 공간은 충분합니다.")],1),t._v(" "),o("div",{staticClass:"custom-block note"},[o("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),o("p",[t._v("The original Horizon Hobby "),o("em",[t._v("E-Flite Convergence")]),t._v(" frame and "),o("RouterLink",{attrs:{to:"/ko/flight_controller/pixfalcon.html"}},[t._v("Pixfalcon")]),t._v(" have been discontinued. Alternatives are provided in the "),o("a",{attrs:{href:"#where-to-buy"}},[t._v("Purchase")]),t._v(" section. :::")],1),t._v(" "),o("p",[t._v("@"),o("a",{attrs:{href:"https://youtu.be/E61P2f2WPNU",target:"_blank",rel:"noopener noreferrer"}},[t._v("유투브"),o("OutboundLink")],1)]),t._v(" "),o("h2",{attrs:{id:"where-to-buy"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#where-to-buy"}},[t._v("#")]),t._v(" Where to Buy")]),t._v(" "),o("p",[t._v("차량 프레임 옵션:")]),t._v(" "),o("ul",[o("li",[o("strong",[t._v("WL Tech XK X450")]),t._v(" - "),o("a",{attrs:{href:"https://www.aliexpress.com/item/1005001946025611.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("AliExpress"),o("OutboundLink")],1)]),t._v(" "),o("li",[o("strong",[t._v("JJRC M02")]),t._v(" - "),o("a",{attrs:{href:"https://au.banggood.com/JJRC-M02-2_4G-6CH-450mm-Wingspan-EPO-Brushless-6-axis-Gyro-Aerobatic-RC-Airplane-RTF-3D-or-6G-Mode-Aircraft-p-1588201.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("뱅굿(AU)"),o("OutboundLink")],1),t._v(", "),o("a",{attrs:{href:"https://www.aliexpress.com/item/4001031497018.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("알리익스프레스"),o("OutboundLink")],1)])]),t._v(" "),o("p",[t._v("비행 컨트롤러 옵션():")]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk4_mini.html"}},[t._v("픽스호크 4 미니")])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk_mini.html"}},[t._v("홀리브로 픽스호크 미니")]),t._v(".")],1),t._v(" "),o("li",[t._v("충분히 작은 폼 팩터를 가진 다른 호환 가능한 비행 콘트롤러.")])]),t._v(" "),o("h2",{attrs:{id:"하드웨어-설정"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#하드웨어-설정"}},[t._v("#")]),t._v(" 하드웨어 설정")]),t._v(" "),o("p",[t._v("The vehicle needs 7 PWM signals for the motors and control surfaces:")]),t._v(" "),o("ul",[o("li",[t._v("Motor (left/right/back)")]),t._v(" "),o("li",[t._v("Tilt servos (right/left)")]),t._v(" "),o("li",[t._v("Elevons (left/right)")])]),t._v(" "),o("p",[t._v("These can be wired to flight controller outputs more-or-less in any way you want (though outputs for motors should be grouped together, and so on).")]),t._v(" "),o("p",[t._v("The outputs are configured in the "),o("RouterLink",{attrs:{to:"/ko/config/actuators.html"}},[t._v("Actuators Configuration")]),t._v(" by following the instructions for VTOL tiltrotor geometry and output configuration. Note that you will need to start from the "),o("RouterLink",{attrs:{to:"/ko/airframes/airframe_reference.html#vtol_vtol_tiltrotor_generic_tiltrotor_vtol"}},[t._v("Generic Tiltrotor VTOL")]),t._v(" frame.")],1),t._v(" "),o("p",[t._v("Note that left and right in the configuration screen and frame reference are defined from the perspective of a human pilot inside a real plane (or looking from above, as shown below):")]),t._v(" "),o("img",{attrs:{src:r(1304),width:"300px"}}),t._v(" "),o("h3",{attrs:{id:"비행-콘트롤러"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#비행-콘트롤러"}},[t._v("#")]),t._v(" 비행 콘트롤러")]),t._v(" "),o("p",[t._v("비행 콘트롤러는 원래 자동조종장치가 있던 동일한 위치에 장착할 수 있습니다.")]),t._v(" "),o("p",[o("img",{attrs:{src:r(1305),alt:"Pixfalcon 장착"}})]),t._v(" "),o("h3",{attrs:{id:"텔레메트리"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#텔레메트리"}},[t._v("#")]),t._v(" 텔레메트리")]),t._v(" "),o("p",[t._v("텔레메트리 모듈은 FPV 전송 기어를 고정하기 위한 베이에 장착합니다.")]),t._v(" "),o("p",[o("img",{attrs:{src:r(1306),alt:"텔레메트리 장착"}})]),t._v(" "),o("h3",{attrs:{id:"gps"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#gps"}},[t._v("#")]),t._v(" GPS")]),t._v(" "),o("p",[t._v('GPS 장착을 위하여 "조종실" 내부의 발포 재질 부분을 잘라냈습니다. 그렇게 하면 GPS를 차체 내부에 넣을 수 있고, 차량 외관을 손상시키지 않으면서 멋지게 수납할 수 있습니다.')]),t._v(" "),o("p",[o("img",{attrs:{src:r(1307),alt:"GPS 장착"}})]),t._v(" "),o("h2",{attrs:{id:"px4-설정"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#px4-설정"}},[t._v("#")]),t._v(" PX4 설정")]),t._v(" "),o("p",[t._v("Follow the "),o("RouterLink",{attrs:{to:"/ko/config/"}},[t._v("Standard Configuration")]),t._v(" in "),o("em",[t._v("QGroundControl")]),t._v(" (radio, sensors, flight modes, etc.).")],1),t._v(" "),o("p",[t._v("이 기체와 관련된 특정 설정은 다음과 같습니다.")]),t._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/ko/config/airframe.html"}},[t._v("기체")]),t._v(" "),o("ul",[o("li",[o("strong",[t._v("VTOL Tiltrotor")]),t._v("에서 기체 구성 "),o("strong",[t._v("E-flite Convergence")]),t._v("를 선택하고 "),o("em",[t._v("QGroundControl")]),t._v("을 다시 시작합니다. "),o("img",{attrs:{src:r(1308),alt:"QGroundControl 차량 설정 - 기체 선택 E-Flight"}})])])],1),t._v(" "),o("li",[o("RouterLink",{attrs:{to:"/ko/config/flight_mode.html"}},[t._v("비행 모드/스위치")]),t._v(" "),o("ul",[o("li",[t._v("VTOL은 멀티콥터와 고정익을 전환하려면 "),o("RouterLink",{attrs:{to:"/ko/config/flight_mode.html#what-flight-modes-and-switches-should-i-set"}},[t._v("RC 컨트롤러 스위치를 할당")]),t._v("하여야 합니다.")],1)])],1)])])])}),[],!1,null,null,null);e.default=a.exports}}]);