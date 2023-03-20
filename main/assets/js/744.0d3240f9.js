(window.webpackJsonp=window.webpackJsonp||[]).push([[744],{2451:function(t,e,o){"use strict";o.r(e);var a=o(19),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"mounting-a-gps-compass"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mounting-a-gps-compass"}},[t._v("#")]),t._v(" Mounting a GPS/Compass")]),t._v(" "),a("p",[t._v("GPS/Compasses should be mounted on the frame as far away from other electronics as possible, with the direction marker pointing towards the front of the vehicle. If mounted in this way you can immediately proceed to "),a("RouterLink",{attrs:{to:"/ko/config/compass.html#performing-the-calibration"}},[t._v("compass calibration")]),t._v(".")],1),t._v(" "),a("p",[t._v("아래 다이어그램은 Pixhawk 4와 나침반의 전방 마커를 나타냅니다.")]),t._v(" "),a("p",[a("img",{attrs:{src:o(358),alt:"Pixhawk 4 -- 나침반/GPS 연결 "}})]),t._v(" "),a("h2",{attrs:{id:"나침반-방향"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#나침반-방향"}},[t._v("#")]),t._v(" 나침반 방향")]),t._v(" "),a("p",[t._v("The compass can be mounted in any of the standard MAVLink orientations defined in "),a("a",{attrs:{href:"https://mavlink.io/en/messages/common.html#MAV_SENSOR_ORIENTATION",target:"_blank",rel:"noopener noreferrer"}},[t._v("MAV_SENSOR_ORIENTATION"),a("OutboundLink")],1),t._v(". The orientation follows the same frame convention as when "),a("RouterLink",{attrs:{to:"/ko/config/flight_controller_orientation.html#orientation-definition"}},[t._v("orienting the flight controller")]),t._v(".")],1),t._v(" "),a("p",[t._v("If you're using the normal "),a("RouterLink",{attrs:{to:"/ko/config/compass.html"}},[t._v("Compass Calibration")]),t._v(" process (with parameter "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#CAL_MAG_ROT_AUTO"}},[t._v("CAL_MAG_ROT_AUTO")]),t._v(" enabled), the orientation should be detected automatically. Otherwise you can directly select the appropriate value in "),a("RouterLink",{attrs:{to:"/ko/advanced_config/parameter_reference.html#CAL_MAG1_ROT"}},[t._v("CAL_MAGn_ROT")]),t._v(" for up to three compasses.")],1),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("지원되는 방향으로 나침반을 장착하여야 합니다!")]),t._v(" "),a("p",[t._v("지원되지 않는 방향(예: "),a("code",[t._v("Yaw 30")]),t._v(")에 나침반을 장착하면 PX4는 지원되는 가장 근사치를 감지합니다. 보정이 성공한 것처럼 보이더라도, 오류/경고가 표시될 수 있습니다.")])])])}),[],!1,null,null,null);e.default=n.exports},358:function(t,e,o){t.exports=o.p+"assets/img/pixhawk4_compass_gps.65c774b7.jpg"}}]);