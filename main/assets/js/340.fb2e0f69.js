(window.webpackJsonp=window.webpackJsonp||[]).push([[340],{1343:function(A,e,t){A.exports=t.p+"assets/img/lidar_lite_1.28e66df7.png"},2986:function(A,e,t){"use strict";t.r(e);var s=t(19),o=Object(s.a)({},(function(){var A=this,e=A.$createElement,s=A._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":A.$parent.slotKey}},[s("h1",{attrs:{id:"센서"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#센서"}},[A._v("#")]),A._v(" 센서")]),A._v(" "),s("p",[A._v("PX4 시스템은 안정화나 자율제어를  위하여 센서를 사용하여 기체의 상태를 파악합니다. The vehicle states include: position/altitude, heading, speed, airspeed, orientation (attitude), rates of rotation in different directions, battery level, and so on.")]),A._v(" "),s("p",[A._v("PX4 "),s("em",[A._v("minimally requires")]),A._v(" a gyroscope, accelerometer, magnetometer (compass) and barometer. 자동 "),s("RouterLink",{attrs:{to:"/ko/getting_started/flight_modes.html#categories"}},[A._v("모드")]),A._v("와  기타 모드에는 GPS나 이와 유사한 위치 확인 시스템이 요구됩니다. Fixed-wing and VTOL-vehicles should additionally include an airspeed sensor (highly recommended).")],1),A._v(" "),s("p",[s("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk_series.html"}},[A._v("Pixhawk 시리즈")]),A._v(" 비행 콘트롤러에 최소한의 센서들이 내장되어 있습니다. 필요한 센서들을 콘트롤러에 추가할 수 있습니다.")],1),A._v(" "),s("p",[A._v("Below we describe some of the external sensors.\n"),s("a",{attrs:{id:"gps_compass"}})]),A._v(" "),s("h2",{attrs:{id:"gps와-나침반"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gps와-나침반"}},[A._v("#")]),A._v(" GPS와 나침반")]),A._v(" "),s("p",[A._v("PX4 supports a number of Global Navigation Satellite System (GNSS) receivers and compasses (magnetometers). It also supports Real Time Kinematic (RTK) GPS Receivers, which extend GPS systems to centimetre-level precision.")]),A._v(" "),s("p",[A._v("나침반이나 GPS 수신기는 모터나 ESC 전원에서 가능한 멀리 장착하여 사용하는 것이 좋습니다. 일반적으로 받침대나 고정 날개에 설치하는 것이 좋습니다.")]),A._v(" "),s("p",[s("img",{attrs:{src:t(413),alt:"GPS/나침반"}})]),A._v(" "),s("p",[A._v("GPS/compass hardware options are listed in:")]),A._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/ko/gps_compass/"}},[A._v("GPS/Compass")])],1),A._v(" "),s("li",[s("RouterLink",{attrs:{to:"/ko/gps_compass/rtk_gps.html"}},[A._v("RTK GPS")])],1)]),A._v(" "),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[A._v("Note")]),A._v(" "),s("p",[s("RouterLink",{attrs:{to:"/ko/flight_controller/pixhawk_series.html"}},[A._v("픽스호크 시리즈")]),A._v(" 콘트롤러에는 "),s("em",[A._v("내부")]),A._v(" 나침반이 포함되어 있습니다. Due to electromagnetic interference caused by power cables close to the flight controller, it is highly recommended to not rely on the internal compass for heading estimation and instead to mount an external one. :::")],1),A._v(" "),s("h2",{attrs:{id:"대기속도-센서"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#대기속도-센서"}},[A._v("#")]),A._v(" 대기속도  센서")]),A._v(" "),s("p",[A._v("Airspeed sensors are "),s("em",[A._v("highly recommended")]),A._v(" for fixed-wing and VTOL frames.")]),A._v(" "),s("p",[A._v("They are so important because the autopilot does not have other means to detect stall. 고정익의 양력을 발생시키는 것은 대지속도가 아니라 대기속도입니다.")]),A._v(" "),s("p",[s("img",{attrs:{src:t(414),alt:"디지털 대기 센서"}})]),A._v(" "),s("p",[A._v("더 자세한 정보와 권장 하드웨어는 "),s("RouterLink",{attrs:{to:"/ko/sensor/airspeed.html"}},[A._v("대기속도 센서")]),A._v("를 참고하십시오.")],1),A._v(" "),s("h2",{attrs:{id:"거리-센서"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#거리-센서"}},[A._v("#")]),A._v(" 거리 센서")]),A._v(" "),s("p",[A._v("Distance sensors are used for smooth landings, object avoidance and terrain following.")]),A._v(" "),s("p",[A._v("여러가지 기술을 사용하여 다양한 범위와 기능을 지원하는 저렴한 거리 센서를 PX4에서 지원합니다. 더 자세한 정보는 "),s("RouterLink",{attrs:{to:"/ko/sensor/rangefinders.html"}},[A._v("거리 센서")]),A._v("를 참고하십시오.")],1),A._v(" "),s("img",{attrs:{src:t(1343),title:"lidar_lite_1",width:"500px"}}),A._v(" "),s("h2",{attrs:{id:"광류-센서"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#광류-센서"}},[A._v("#")]),A._v(" 광류 센서")]),A._v(" "),s("p",[s("RouterLink",{attrs:{to:"/ko/sensor/optical_flow.html"}},[A._v("Optical Flow sensors")]),A._v(" use a downward facing camera and a downward facing distance sensor for velocity estimation. PX4는 센서 데이터와 다른 위치 정보(예 : GPS)를 연계하여 정확한 위치를 측정합니다. 광류 센서는 GPS 신호가 잡히지 않는 실내에서도 사용할 수 있습니다.")],1),A._v(" "),s("p",[s("img",{attrs:{src:t(389),alt:"Image of ARK Flow optical flow sensor"}})]),A._v(" "),s("h2",{attrs:{id:"see-also"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#see-also"}},[A._v("#")]),A._v(" See Also")]),A._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/ko/peripherals/"}},[A._v("Peripheral Hardware")]),A._v(" contains documentation for other sensors, such as "),s("RouterLink",{attrs:{to:"/ko/power_module/"}},[A._v("Battery/Power Monitors")]),A._v("), "),s("RouterLink",{attrs:{to:"/ko/peripherals/adsb_flarm.html"}},[A._v("Air traffic warning systems")]),A._v(", "),s("RouterLink",{attrs:{to:"/ko/sensor/tachometers.html"}},[A._v("Tachometers")]),A._v(".")],1),A._v(" "),s("li",[s("RouterLink",{attrs:{to:"/ko/assembly/"}},[A._v("기초 초립법")]),A._v("에는 비행 콘틀롤러에 관한 시작 가이드가 포함되어 있습니다. These explain how to connect the core sensors to specific flight controller hardware.")],1),A._v(" "),s("li",[s("RouterLink",{attrs:{to:"/ko/flight_controller/"}},[A._v("비행 콘트롤러")]),A._v(" 항목에서는 배선 정보를 설명합니다.")],1)])])])}),[],!1,null,null,null);e.default=o.exports},389:function(A,e,t){A.exports=t.p+"assets/img/ark_flow.3e1f1c1c.jpg"},413:function(A,e){A.exports="data:image/jpeg;base64,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"},414:function(A,e,t){A.exports=t.p+"assets/img/digital_airspeed_sensor.43319a0e.jpg"}}]);